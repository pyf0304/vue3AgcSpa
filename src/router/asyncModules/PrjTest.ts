/**
 * userManage module
 */
export default {
  'views/RegionManage/QryRegionFldsCRUD': () =>
    import('@/views/RegionManage/QryRegionFldsCRUD.vue'),
  'views/RegionManage/FeatureRegionFldsCRUD': () =>
    import('@/views/RegionManage/FeatureRegionFldsCRUD.vue'),
  'views/RegionManage/DGRegionFldsCRUD': () => import('@/views/RegionManage/DGRegionFldsCRUD.vue'),
  'views/RegionManage/EditRegionFldsCRUD': () =>
    import('@/views/RegionManage/EditRegionFldsCRUD.vue'),
  'views/RegionManage/DetailRegionFldsCRUD': () =>
    import('@/views/RegionManage/DetailRegionFldsCRUD.vue'),
  'views/RegionManage/ExcelExportRegionFldsCRUD': () =>
    import('@/views/RegionManage/ExcelExportRegionFldsCRUD.vue'),
  'views/RegionManage/GeneViewCode': () => import('@/views/PrjInterface/GeneViewCode.vue'),

  'views/Table_Field/PrjTabFldCRUD': () => import('@/views/Table_Field/PrjTabFldCRUD.vue'),
  'views/Table_Field/TabFeatureCRUD_Edit': () =>
    import('@/views/Table_Field/TabFeatureCRUD_Edit.vue'),
  'views/Table_Field/PrjConstraintCRUD': () => import('@/views/Table_Field/PrjConstraintCRUD.vue'),
  // 'views/Table_Field/TabFunctionPropCRUD': () =>
  //   import('@/views/Table_Field/TabFunctionPropCRUD.vue'),
  'views/Table_Field/DnFuncMapCRUD_Edit': () => import('@/views/AIModule/DnFuncMapCRUD_Edit.vue'),
  'views/Table_Field/GeneTabCode': () => import('@/views/Table_Field/GeneTabCode.vue'),
  'views/Table_Field/PrjTab_U': () => import('@/views/Table_Field/PrjTab_U.vue'),
  'views/Table_Field/PrjTab_AllProp': () => import('@/views/Table_Field/PrjTab_AllProp.vue'),
} as const;
// views/CssManage/css_ControlCRUD
