import { defineStore } from 'pinia';
import { useKeepAliveStore } from './keepAlive';
import type { RouteLocationNormalized } from 'vue-router';
import { store } from '@/store';
import { TABS_ROUTES } from '@/enums/cacheEnum';
import router from '@/router';
import { LOGIN_NAME, REDIRECT_NAME, PAGE_NOT_FOUND_NAME } from '@/router/constant';

interface TabsViewState {
  /** 标签页 */
  tabsList: RouteLocationNormalized[];
}

// 不需要出现在标签页中的路由
export const blackList = [REDIRECT_NAME, LOGIN_NAME, PAGE_NOT_FOUND_NAME] as const;
const isBlackListRouteName = (name: RouteLocationNormalized['name']): boolean => {
  return typeof name === 'string' && (blackList as readonly string[]).includes(name);
};

export const useTabsViewStore = defineStore({
  id: 'tabs-view',
  state: (): TabsViewState => ({
    tabsList: [],
  }),
  getters: {
    getTabsList: (state) => {
      return state.tabsList.filter((item) => {
        return !item.meta?.hideInTabs && router.hasRoute(item.name!);
      });
    },
    /** 当前activity tab */
    getCurrentTab: (state) => {
      const currentRoute = router.currentRoute.value!;
      return state.tabsList.find((item) => {
        return (
          !item.meta?.hideInTabs &&
          (item.fullPath === currentRoute.fullPath ||
            (Boolean(item.name) && Boolean(currentRoute.name) && item.name === currentRoute.name))
        );
      });
    },
  },
  actions: {
    /** 将已关闭的标签页的组件从keep-alive中移除 */
    delCompFromClosedTabs(closedTabs: RouteLocationNormalized[]) {
      const keepAliveStore = useKeepAliveStore();
      const routes = router.getRoutes();
      const compNames = closedTabs.reduce<string[]>((prev, curr) => {
        if (curr.name && router.hasRoute(curr.name)) {
          const componentName = routes.find((n) => n.name === curr.name)?.components?.default?.name;
          componentName && prev.push(componentName);
        }
        return prev;
      }, []);
      keepAliveStore.remove(compNames);
    },
    /** 初始化标签页 */
    initTabs(routes: RouteLocationNormalized[]) {
      const dedupedRoutes = routes.reduce<RouteLocationNormalized[]>((prev, curr) => {
        if (isBlackListRouteName(curr.name)) return prev;
        const currKey = curr.name ?? curr.path ?? curr.fullPath;
        const idx = prev.findIndex((item) => {
          const itemKey = item.name ?? item.path ?? item.fullPath;
          return itemKey === currKey;
        });
        if (idx === -1) {
          prev.push(curr);
        } else {
          prev[idx] = { ...prev[idx], ...curr };
        }
        return prev;
      }, []);
      this.tabsList = dedupedRoutes;
    },
    /** 添加标签页 */
    addTabs(route: RouteLocationNormalized): boolean {
      if (isBlackListRouteName(route.name)) return false;
      const routeKey = route.name ?? route.path ?? route.fullPath;
      const idx = this.tabsList.findIndex((item) => {
        const itemKey = item.name ?? item.path ?? item.fullPath;
        return itemKey === routeKey;
      });
      if (idx === -1) {
        this.tabsList.push(route);
      } else {
        this.tabsList[idx] = { ...this.tabsList[idx], ...route };
      }
      return true;
    },
    /** 关闭左侧 */
    closeLeftTabs(route) {
      const index = this.tabsList.findIndex((item) => item.fullPath == route.fullPath);
      this.delCompFromClosedTabs(this.tabsList.splice(0, index));
    },
    /** 关闭右侧 */
    closeRightTabs(route) {
      const index = this.tabsList.findIndex((item) => item.fullPath == route.fullPath);
      this.delCompFromClosedTabs(this.tabsList.splice(index + 1));
    },
    /** 关闭其他 */
    closeOtherTabs(route) {
      const targetIndex = this.tabsList.findIndex((item) => item.fullPath === route.fullPath);
      if (targetIndex !== -1) {
        const current = this.tabsList.splice(targetIndex, 1);
        this.delCompFromClosedTabs(this.tabsList);
        this.tabsList = current;
      }
    },
    /** 关闭当前页 */
    closeCurrentTab(route) {
      const index = this.tabsList.findIndex((item) => item.fullPath == route.fullPath);
      const isDelCurrentTab = Object.is(this.getCurrentTab, this.tabsList[index]);
      this.delCompFromClosedTabs(this.tabsList.splice(index, 1));
      // 如果关闭的tab就是当前激活的tab，则重定向页面
      if (isDelCurrentTab) {
        const currentRoute = this.tabsList[Math.max(0, this.tabsList.length - 1)];
        router.push(currentRoute);
      }
    },
    /** 关闭全部 */
    closeAllTabs() {
      this.delCompFromClosedTabs(this.tabsList);
      this.tabsList = [];
      localStorage.removeItem(TABS_ROUTES);
    },
    // 更新tab标题
    updateTabTitle(title: string) {
      const currentRoute = router.currentRoute.value;
      const upTarget = this.tabsList.find((item) => item.fullPath === currentRoute.fullPath);
      if (upTarget) {
        upTarget.meta.title = title;
      }
    },
  },
});

// 在组件setup函数外使用
export function useTabsViewStoreWithOut() {
  return useTabsViewStore(store);
}
