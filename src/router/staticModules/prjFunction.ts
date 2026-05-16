import type { RouteRecordRaw } from 'vue-router';
import RouterView from '@/layout/routerView/index.vue';

const moduleName = 'prjFunction';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/PrjFunction',
    name: moduleName,
    redirect: { name: `${moduleName}-template-rela-tree` },
    component: RouterView,
    meta: {
      title: '函数管理',
      icon: 'icon-zhuomian',
    },
    children: [
      {
        path: 'FunctionTemplateRelaTree',
        name: `${moduleName}-template-rela-tree`,
        component: () =>
          import(
            /* webpackChunkName: "function-template-rela-tree" */ '@/views/PrjFunction/FunctionTemplateRelaTree.vue'
          ),
        meta: {
          title: '模板代码类型函数树',
          icon: 'icon-zhuomian',
          keepAlive: true,
        },
      },
      {
        path: 'FunctionTemplateRelaCRUDAi',
        name: 'FunctionTemplateRelaCRUDAi',
        component: () =>
          import(
            /* webpackChunkName: "function-template-rela-crud" */ '@/views/PrjFunction/FunctionTemplateRelaCRUDAi.vue'
          ),
        meta: {
          title: '函数与模板关系维护',
          icon: 'icon-zhuomian',
          keepAlive: true,
        },
      },
      {
        path: 'editFunctionTemplateRela/:mId',
        name: 'editFunctionTemplateRela',
        component: () =>
          import(
            /* webpackChunkName: "function-template-rela-edit" */ '@/views/PrjFunction/FunctionTemplateRela_EditAi.vue'
          ),
        meta: {
          title: '编辑函数与模板关系',
          icon: 'icon-zhuomian',
        },
      },
    ],
  },
];

export default routes;
