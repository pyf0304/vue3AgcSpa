/**
 * userManage module
 */
export default {
  'views/PrjInterface/ViewInfoCRUD': () => import('@/views/PrjInterface/ViewInfoCRUD.vue'),
  'views/PrjInterface/ViewMasterCRUD': () => import('@/views/PrjInterface/ViewMasterCRUD.vue'),
  'views/PrjInterface/CtlTypeCRUD': () => import('@/views/PrjInterface/CtlTypeCRUD.vue'),
  'views/RegionManage/ViewRegion_EditAllType': () =>
    import('@/views/RegionManage/ViewRegion_EditAllType.vue'),
  'views/PrjInterface/ViewInfoCRUD_Edit': () =>
    import('@/views/PrjInterface/ViewInfoCRUD_Edit.vue'),
} as const;
// views/AIModule/DataNodeCRUD
