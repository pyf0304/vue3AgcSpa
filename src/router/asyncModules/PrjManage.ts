/**
 * userManage module
 */
export default {
  'views/PrjManage/ProjectsCRUD': () => import('@/views/PrjManage/ProjectsCRUD.vue'),
  'views/CodeMan/CMProjectCRUD': () => import('@/views/CodeMan/CMProjectCRUD.vue'),
  // 'views/CodeMan/CMProjectAppRelaCRUD': () => import('@/views/CodeMan/CMProjectAppRelaCRUD.vue'),
  'views/PrjManage/FuncModule_AgcCRUD': () => import('@/views/PrjManage/FuncModule_AgcCRUD.vue'),
} as const;
// views/RegionManage/ViewRegionCRUD
