/**
 * userManage module
 */
export default {
  'views/RegionManage/ViewRegionCRUD': () => import('@/views/RegionManage/ViewRegionCRUD.vue'),
  // 'views/RegionManage/ViewRegionCRUD': () => import('@/views/CodeMan/CMProjectCRUD.vue'),
  'views/RegionManage/ViewRegionRelaCRUD': () =>
    import('@/views/RegionManage/ViewRegionRelaCRUD.vue'),
} as const;
// views/CssManage/css_ControlCRUD
