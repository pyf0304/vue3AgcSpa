import type { RouteRecordRaw } from 'vue-router';
import RouterView from '@/layout/routerView/index.vue';
// import { t } from '@/hooks/useI18n';

const routes: Array<RouteRecordRaw> = [
  {
    path: 'http://buqiyuan.gitee.io/vite-vue3-lowcode/',
    name: 'http://buqiyuan.gitee.io/vite-vue3-lowcode/',
    component: RouterView,
    meta: {
      title: 'H5低代码平台',
      icon: 'icon-externa-link',
      isExt: true,
    },
  },

  // {
  //   path: 'http://www.shnu.edu.cn',
  //   name: `http://www.shnu.edu.cn`,
  //   component: RouterView,
  //   meta: {
  //     title: '上海师大',
  //     icon: 'icon-zhuomian',
  //     // keepAlive: true,
  //     isExt: true,
  //   },
  // },
];

export default routes;
