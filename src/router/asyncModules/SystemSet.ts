/**
 * userManage module
 */
export default {
  'views/SystemSet/CacheUseStateCRUD': () => import('@/viewsShare/SystemSet/CacheUseStateCRUD.vue'),
  'views/SystemSet/UserCodePathCRUD': () => import('@/views/SystemSet/UserCodePathCRUD.vue'),
  'views/SystemSet/UserCodePrjMainPathCRUD': () =>
    import('@/views/SystemSet/UserCodePrjMainPathCRUD.vue'),
} as const;
// views/SystemSet/UserCodePathCRUD
