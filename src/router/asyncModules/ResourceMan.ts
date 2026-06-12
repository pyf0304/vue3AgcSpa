/**
 * ResourceMan module
 */
export default {
  'views/ResourceMan/FileResourceCRUDAi': () =>
    import('@/views/ResourceMan/FileResourceCRUDAi.vue'),

  'views/ResourceMan/PrjFileTypeCRUDAi': () => import('@/views/ResourceMan/PrjFileTypeCRUDAi.vue'),
} as const;
