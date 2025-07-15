import type { RouteRecordRaw } from 'vue-router';
// import RouterView from '@/layout/routerView/index.vue';
import { t } from '@/hooks/useI18n';

// const moduleName = 'demos';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/testMyTree',
    name: `testMyTree`,
    // redirect: { name: `${moduleName}-custom-modal` },
    meta: {
      title: t('routes.demo.pyfabout'),
      icon: 'icon-zhuomian',
      // keepAlive: true,
      isExt: true,
    },
    component: () =>
      import(
        /* webpackChunkName: "demos-custom-a-custom-modal" */ '@/ts/components/testMyTree.vue'
      ),
  },
  {
    path: '/ShowDnPath',
    name: 'ShowDnPath',
    // redirect: '/dashboard/welcome',
    component: () => import(/* webpackChunkName: "layout" */ '@/views/AIModule/ShowDnPath.vue'),
    meta: {
      title: 'ShowDnPath',
    },
    children: [],
  },
  {
    path: '/TestGraph1',
    name: 'TestGraph1',
    // redirect: '/dashboard/welcome',
    component: () => import(/* webpackChunkName: "layout" */ '@/views/TestGraph/Test5.vue'),
    meta: {
      title: 'TestGraph',
    },
    children: [],
  },
  {
    path: '/TestGraph2',
    name: 'TestGraph2',
    // redirect: '/dashboard/welcome',
    component: () => import(/* webpackChunkName: "layout" */ '@/views/TestGraph/Test2.vue'),
    meta: {
      title: 'TestGraph2',
    },
    children: [],
  },
  {
    path: '/TestGraph3',
    name: 'TestGraph3',
    // redirect: '/dashboard/welcome',
    component: () => import(/* webpackChunkName: "layout" */ '@/views/TestGraph/Test3.vue'),
    meta: {
      title: 'TestGraph3',
    },
    children: [],
  },
  {
    path: '/TestGraph4',
    name: 'TestGraph4',
    // redirect: '/dashboard/welcome',
    component: () => import(/* webpackChunkName: "layout" */ '@/views/TestGraph/Test4.vue'),
    meta: {
      title: 'TestGraph4',
    },
    children: [],
  },
  // {
  //   path: '/testFieldSelector1',
  //   name: `testFieldSelector1`,
  //   // redirect: { name: `${moduleName}-custom-modal` },
  //   meta: {
  //     title: t('routes.demo.pyfabout'),
  //     icon: 'icon-zhuomian',
  //     // keepAlive: true,
  //     isExt: true,
  //   },
  //   component: () =>
  //     import(
  //       /* webpackChunkName: "demos-custom-a-custom-modal" */ '@/ts/components/testFieldSelector1.vue'
  //     ),
  // },
  // {
  //   path: '/testAutoComplete',
  //   name: `testAutoComplete`,
  //   // redirect: { name: `${moduleName}-custom-modal` },
  //   meta: {
  //     title: t('routes.demo.testAutoComplete'),
  //     icon: 'icon-zhuomian',
  //     // keepAlive: true,
  //     isExt: true,
  //   },
  //   component: () =>
  //     import(
  //       /* webpackChunkName: "demos-custom-a-custom-modal" */ '@/ts/components/testAutoComplete.vue'
  //     ),
  // },
  // {
  //   path: '/testAutoCompletePro',
  //   name: `testAutoCompletePro`,
  //   // redirect: { name: `${moduleName}-custom-modal` },
  //   meta: {
  //     title: t('routes.demo.testAutoComplete'),
  //     icon: 'icon-zhuomian',
  //     // keepAlive: true,
  //     isExt: true,
  //   },
  //   component: () =>
  //     import(
  //       /* webpackChunkName: "demos-custom-a-custom-modal" */ '@/ts/components/testAutoCompletePro.vue'
  //     ),
  // },
];

export default routes;
