import type { RouteRecordRaw } from 'vue-router';
import RouterView from '@/layout/routerView/index.vue';
import { t } from '@/hooks/useI18n';

const moduleName = 'account';

const routes: Array<RouteRecordRaw> = [
  {
    path: 'ViewIdGCVariableRelaCRUD0',
    name: `${moduleName}-ViewIdGCVariableRelaCRUD0`,
    component: () => import('@/views/GeneCode/ViewIdGCVariableRelaCRUD.vue'),
  },
  {
    path: '/account',
    component: RouterView,
    redirect: '/account/settings',
    meta: {
      title: '个人中心',
      hideInMenu: true,
    },
    children: [
      {
        path: 'settings',
        name: `${moduleName}-settings`,
        component: () => import('@/views/account/settings.vue'),
        meta: { title: t('routes.account.settings'), hideInMenu: true },
      },
      {
        path: 'about',
        name: `${moduleName}-about`,
        component: () => import('@/views/account/about.vue'),
        meta: { title: t('routes.account.about'), hideInMenu: true },
      },
      {
        path: 'selectPrj',
        name: `${moduleName}-selectPrj`,
        component: () => import('@/views/AuthorityManage/SelectProject.vue'),
        meta: { title: t('routes.account.selectPrj'), hideInMenu: true },
      },
      {
        path: 'testTabs',
        name: `${moduleName}-testTabs`,
        component: () => import('@/views/tabs/myTabs.vue'),
        meta: { title: t('routes.account.testTabs'), hideInMenu: true },
      },
      {
        path: 'editViewRegion',
        name: `${moduleName}-editViewRegion`,
        component: () => import('@/views/PrjInterface/ViewInfo_AllProp.vue'),
        meta: { title: t('routes.account.editViewRegion'), hideInMenu: true },
      },
      {
        path: 'editTabRelaInfo',
        name: `${moduleName}-editTabRelaInfo`,
        component: () => import('@/views/Table_Field/PrjTab_AllProp.vue'),
        meta: { title: t('routes.account.editTabRelaInfo'), hideInMenu: true },
      },
      {
        path: 'ViewIdGCVariableRelaCRUD',
        name: `${moduleName}-ViewIdGCVariableRelaCRUD`,
        component: () => import('@/views/GeneCode/ViewIdGCVariableRelaCRUD.vue'),
      },
    ],
  },
];

export default routes;
