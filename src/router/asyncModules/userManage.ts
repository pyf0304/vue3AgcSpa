/**
 * userManage module
 */
export default {
  'views/userManage/user': () => import('@/views/UserManage_GP/QxUsersV2CRUD.vue'),
  'views/userManage/userState': () => import('@/views/AIModule/DataNodeCRUD.vue'),
  'views/userManage/userIdentity': () => import('@/views/AIModule/DataNodeTypeCRUD.vue'),
  'views/userManage/userBak': () => import('@/views/UserManage_GP/user/index.vue'),
  'views/userManage/rolebak': () => import('@/views/UserManage_GP/role/index.vue'),
  'views/userManage/role': () => import('@/views/UserManage_GP/QxRolesV2CRUD.vue'),
  'views/userManage/role/testDialog1': () => import('@/views/UserManage_GP/role/testDialog1.vue'),
  'views/userManage/role/testDialog3': () => import('@/views/UserManage_GP/role/testDialog3.vue'),
  'views/userManage/role/testDialog5': () => import('@/views/UserManage_GP/role/testDialog5.vue'),
} as const;
