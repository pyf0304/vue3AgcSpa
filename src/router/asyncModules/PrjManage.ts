/**
 * userManage module
 */
export default {
  'views/PrjManage/ProjectsCRUD': () => import('@/views/PrjManage/ProjectsCRUD.vue'),
  'views/CodeMan/CMProjectCRUD': () => import('@/views/CodeMan/CMProjectCRUD.vue'),
  // 'views/CodeMan/CMProjectAppRelaCRUD': () => import('@/views/CodeMan/CMProjectAppRelaCRUD.vue'),
  'views/PrjManage/FuncModule_AgcCRUD': () => import('@/views/PrjManage/FuncModule_AgcCRUD.vue'),
  'views/PrjManage/PrjDataBaseCRUD': () => import('@/views/PrjManage/PrjDataBaseCRUD.vue'),
  'views/PrjManage/PrjDataBaseCRUDAi': () => import('@/views/PrjManage/PrjDataBaseCRUDAi.vue'),
  'views/PrjManage/PrjDataBaseCRUDAi2': () => import('@/views/PrjManage/PrjDataBaseCRUDAi2.vue'),
  'views/PrjManage/PrjDataBaseCRUDAi3': () => import('@/views/PrjManage/PrjDataBaseCRUDAi3.vue'),
  'views/PrjManage/PrjDataBaseCRUDAi4': () => import('@/views/PrjManage/PrjDataBaseCRUDAi4.vue'),
} as const;
