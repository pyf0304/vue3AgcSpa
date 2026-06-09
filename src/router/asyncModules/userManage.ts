/**
 * userManage module
 */
export default {
  'views/userManage/user': () => import('@/views/UserManage_GP/QxUsersV2CRUD.vue'),
  'views/userManage/role': () => import('@/views/UserManage_GP/QxRolesV2CRUD.vue'),
} as const;
