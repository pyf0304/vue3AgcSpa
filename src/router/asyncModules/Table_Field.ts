/**
 * userManage module
 */
export default {
  'views/Table_Field/PrjTabRelationCRUD': () =>
    import('@/views/Table_Field/PrjTabRelationCRUD.vue'),
  'views/Table_Field/PrjTabRelationTypeCRUD': () =>
    import('@/views/Table_Field/PrjTabRelationTypeCRUD.vue'),
  'views/Table_Field/PrjTabCRUD_Edit': () => import('@/views/Table_Field/PrjTabCRUD_Edit.vue'),
  'views/SqlViewMan/SqlTable_Import': () => import('@/views/SqlViewMan/SqlTable_Import.vue'),
  'views/Table_Field/PrjTabCRUD': () => import('@/views/Table_Field/PrjTabCRUD.vue'),
  'views/Table_Field/FieldTabCRUD': () => import('@/views/Table_Field/FieldTabCRUD.vue'),
  'views/Table_Field/FieldTab4CodeConvCRUD': () =>
    import('@/views/Table_Field/FieldTab4CodeConvCRUD.vue'),
  'views/Table_Field/TabFeatureCRUD_Edit': () =>
    import('@/views/Table_Field/TabFeatureCRUD_Edit.vue'),
  'views/Table_Field/PrjConstraintCRUD': () => import('@/views/Table_Field/PrjConstraintCRUD.vue'),

  'views/Table_Field/ConstraintFieldsCRUD': () =>
    import('@/views/Table_Field/ConstraintFieldsCRUD.vue'),

  'views/Table_Field/TabFeatureCRUD': () => import('@/views/Table_Field/TabFeatureCRUD.vue'),

  'views/Table_Field/TabFeatureFldsCRUD': () =>
    import('@/views/Table_Field/TabFeatureFldsCRUD.vue'),
} as const;
