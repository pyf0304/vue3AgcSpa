/**
 * userManage module
 */
export default {
  // 'views/CodeMan/CMProjectAppRelaCRUD': () => import('@/views/CodeMan/CMProjectAppRelaCRUD.vue'),
  'views/PrjFunction/Function4GeneCodeCRUD': () =>
    import('@/views/PrjFunction/Function4GeneCodeCRUD.vue'),
  'views/PrjFunction/Function4GeneCodeCRUDAi': () =>
    import('@/views/PrjFunction/Function4GeneCodeCRUDAi.vue'),
  'views/PrjFunction/FunctionTemplateRelaCRUDAi': () =>
    import('@/views/PrjFunction/FunctionTemplateRelaCRUDAi.vue'),
  'views/PrjFunction/FunctionTemplateRelaTree': () =>
    import('@/views/PrjFunction/FunctionTemplateRelaTree.vue'),
} as const;
// views/RegionManage/ViewRegionCRUD
