import { isNavigationFailure, NavigationFailureType } from 'vue-router';
import NProgress from 'nprogress'; // progress bar
import { LOGIN_NAME, REDIRECT_NAME } from './constant';
import type { WhiteNameList } from './constant';
import type { Router, RouteLocationNormalized, LocationQuery, LocationQueryRaw } from 'vue-router';
import { useUserStore } from '@/store/modulesShare/user';
import { useKeepAliveStore } from '@/store/modules/keepAlive';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { to as _to } from '@/utils/awaitTo';

NProgress.configure({ showSpinner: false }); // NProgress Configuration

const defaultRoutePath = '/dashboard/welcome';
let userInitPromise: Promise<unknown> | null = null;

function stripGuardRetryQuery(query: LocationQuery): LocationQueryRaw {
  const nextQuery: LocationQueryRaw = { ...query };
  Reflect.deleteProperty(nextQuery, '__guard_retry');
  return nextQuery;
}

async function ensureUserReady(userStore: ReturnType<typeof useUserStore>) {
  if (userStore.menus.length > 0) return null;
  if (!userInitPromise) {
    userInitPromise = userStore.afterLogin().finally(() => {
      userInitPromise = null;
    });
  }
  const [err] = await _to(userInitPromise);
  return err ?? null;
}

export function createRouterGuards(router: Router, whiteNameList: WhiteNameList) {
  router.beforeEach(async (to, _, next) => {
    if (!NProgress.isStarted()) {
      NProgress.start(); // start progress bar
    }
    const userStore = useUserStore();
    const token = Storage.get(ACCESS_TOKEN_KEY, null);

    if (token) {
      if (to.name === LOGIN_NAME) {
        return next({ path: defaultRoutePath });
      }

      const err = await ensureUserReady(userStore);
      if (err) {
        console.error('router guard ensureUserReady failed', {
          toName: to.name,
          toPath: to.fullPath,
          err,
        });
        userStore.resetToken();
        return next({ name: LOGIN_NAME });
      }

      const hasNamedRoute = to.name != null && router.hasRoute(to.name);
      const hasMatchedRoute = to.matched.length > 0;
      console.log('router guard route state', {
        toName: to.name,
        toPath: to.fullPath,
        matchedCount: to.matched.length,
        matchedNames: to.matched.map((item) => item.name),
        hasNamedRoute,
        hasMatchedRoute,
        retry: to.query.__guard_retry ?? '0',
      });

      if (hasNamedRoute || hasMatchedRoute) {
        if (to.query.__guard_retry === '1') {
          return next({
            path: to.path,
            query: stripGuardRetryQuery(to.query),
            hash: to.hash,
            replace: true,
          });
        }
        return next();
      }

      if (to.query.__guard_retry === '1') {
        console.warn('router guard fallback to /404 after retry', {
          toName: to.name,
          toPath: to.fullPath,
        });
        return next('/404');
      }

      // 动态路由刚注册完成后，只对目标地址重进一次，避免无名路由或404兜底时死循环。
      console.warn('router guard retry navigation', {
        toName: to.name,
        toPath: to.fullPath,
      });
      return next({
        path: to.fullPath,
        replace: true,
        query: { ...to.query, __guard_retry: '1' },
      });
    } else {
      // not login
      if (whiteNameList.some((n) => n === to.name)) {
        // 在免登录名单，直接进入
        return next();
      } else {
        return next({
          name: LOGIN_NAME,
          query: { redirect: to.fullPath },
          replace: true,
        });
      }
    }
  });

  /** 获取路由对应的组件名称 */
  const getComponentName = (route: RouteLocationNormalized) => {
    const comp = route.matched.at(-1)?.components?.default;
    return comp?.name ?? (comp as any)?.type?.name;
  };

  router.afterEach((to, from, failure) => {
    const keepAliveStore = useKeepAliveStore();
    const token = Storage.get(ACCESS_TOKEN_KEY, null);

    if (failure) {
      const isUnexpectedFailure =
        !isNavigationFailure(failure, NavigationFailureType.cancelled) &&
        !isNavigationFailure(failure, NavigationFailureType.duplicated);
      if (isUnexpectedFailure) {
        console.error('failed navigation', failure);
      }
    }
    // 在这里设置需要缓存的组件名称
    const toCompName = getComponentName(to);
    // 判断当前页面是否开启缓存，如果开启，则将当前页面的 componentName 信息存入 keep-alive 全局状态
    if (to.meta?.keepAlive) {
      // 需要缓存的组件
      if (toCompName) {
        keepAliveStore.add(toCompName);
      } else {
        console.warn(
          `${to.fullPath}页面组件的keepAlive为true但未设置组件名，会导致缓存失效，请检查`,
        );
      }
    } else {
      // 不需要缓存的组件
      if (toCompName) {
        keepAliveStore.remove(toCompName);
      }
    }
    // 如果进入的是 Redirect 页面，则也将离开页面的缓存清空(刷新页面的操作)
    if (to.name === REDIRECT_NAME) {
      const fromCompName = getComponentName(from);
      fromCompName && keepAliveStore.remove(fromCompName);
    }
    // 如果用户已登出，则清空所有缓存的组件
    if (!token) {
      keepAliveStore.clear();
    }
    NProgress.done(); // finish progress bar
  });

  router.onError((error) => {
    NProgress.done();
    console.log(error, '路由错误');
  });
}
