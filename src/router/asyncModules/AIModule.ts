/**
 * userManage module
 */
export default {
  'views/AIModule/DataNodeCRUD': () => import('@/views/AIModule/DataNodeCRUD.vue'),
  'views/AIModule/DNFunctionCRUD': () => import('@/views/AIModule/DnFunctionCRUD.vue'),
  'views/AIModule/DnFuncMapCRUD': () => import('@/views/AIModule/DnFuncMapCRUD.vue'),
  'views/AIModule/DataNodeTypeCRUD': () => import('@/views/AIModule/DataNodeTypeCRUD.vue'),
  'views/AIModule/DNPathCRUD': () => import('@/views/AIModule/DnPathCRUD.vue'),
} as const;
// views/GeneCode/GCVariableTypeCRUD
