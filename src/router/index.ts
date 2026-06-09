import 'nprogress/css/nprogress.css'; // 进度条样式
import { createRouter, createWebHashHistory } from 'vue-router';

import { createRouterGuards } from './router-guards';
import common from './staticModules';

import outsideLayout from './outsideLayout';
import { whiteNameList } from './constant';
import type { App } from 'vue';
import type { RouteRecordRaw } from 'vue-router';

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Layout',
    redirect: '/dashboard/welcome',
    component: () => import(/* webpackChunkName: "layout" */ '@/layout/index.vue'),
    meta: {
      title: '首页',
    },
    // 预注册静态公共路由，避免深链在动态路由生成前出现 No match 警告。
    children: [...common],
  },

  // Layout之外的路由
  ...outsideLayout,
];

export const router = createRouter({
  // process.env.BASE_URL
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
});

const ENABLE_ROUTER_GUARDS = true;

// reset router
export function resetRouter() {
  router.getRoutes().forEach((route) => {
    const { name } = route;
    if (name && !whiteNameList.some((n) => n === name)) {
      router.hasRoute(name) && router.removeRoute(name);
    }
  });
}

export async function setupRouter(app: App) {
  // 创建路由守卫
  if (ENABLE_ROUTER_GUARDS) {
    createRouterGuards(router, whiteNameList);
  }

  app.use(router);

  // 路由准备就绪后挂载APP实例
  await router.isReady();
}
export default router;
