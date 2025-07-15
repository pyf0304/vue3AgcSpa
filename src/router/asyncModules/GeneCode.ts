/**
 * userManage module
 */
export default {
  'views/GeneCode/GCVariableTypeCRUD': () => import('@/views/GeneCode/GCVariableTypeCRUD.vue'),
  'views/GeneCode/GCVariableCRUD': () => import('@/views/GeneCode/GCVariableCRUD.vue'),
  'views/GeneCode/GCDefaConstantsCRUD': () => import('@/views/GeneCode/GCDefaConstantsCRUD.vue'),
  'views/GeneCode/GCKeyIdGetModeCRUD': () => import('@/views/GeneCode/GCKeyIdGetModeCRUD.vue'),
  'views/GeneCode/GCContainerTypeCRUD': () => import('@/views/GeneCode/GCContainerTypeCRUD.vue'),
  'views/GeneCode/CodeTypeCRUD': () => import('@/views/GeneCode/CodeTypeCRUD.vue'),
  'views/GeneCode/GCVariablePrjIdRelaCRUD': () =>
    import('@/views/GeneCode/GCVariablePrjIdRelaCRUD.vue'),

  'views/GeneCode/GCConstantPrjIdRelaCRUD': () =>
    import('@/views/GeneCode/GCConstantPrjIdRelaCRUD.vue'),

  'views/PrjFunction/Function4Code_FuncGC': () =>
    import('@/views/PrjFunction/Function4Code_FuncGC.vue'),
  'views/PrjFunction/FuncParaRelaCRUD': () => import('@/views/PrjFunction/FuncParaRelaCRUD.vue'),
  'views/PrjFunction/FuncPara4CodeCRUD': () => import('@/views/PrjFunction/FuncPara4CodeCRUD.vue'),
} as const;
// views/PrjManage/FuncModule_AgcCRUD
