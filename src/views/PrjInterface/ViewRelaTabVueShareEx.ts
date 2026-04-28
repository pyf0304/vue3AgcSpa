import { ref } from 'vue';

// Extension-only state: avoid modifying generated ViewRelaTabVueShare.ts
export const selectedRelaTabId = ref('');
export const relaTabFilterOptions = ref<Array<{ value: string; label: string }>>([
  { value: '', label: '--全部相关表--' },
]);

export const selectedViewTabTypeId = ref('');
export const viewTabTypeFilterOptions = ref<Array<{ value: string; label: string }>>([
  { value: '', label: '--全部界面表类型--' },
]);

export const selectedRegionTypeId = ref('');
export const regionTypeFilterOptions = ref<Array<{ value: string; label: string }>>([
  { value: '', label: '--全部区域类型--' },
]);
