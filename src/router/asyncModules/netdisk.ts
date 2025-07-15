/**
 * netdisk module
 */
export default {
  'views/netdisk/manage': () => import('@/views/netdisk/manage.vue'),
  'views/test/about': () => import('@/views/test/about.vue'),
  'views/netdisk/overview': () => import('@/views/netdisk/overview.vue'),
} as const;
