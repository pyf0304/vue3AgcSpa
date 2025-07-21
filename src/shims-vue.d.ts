/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

// Vue 3 类型声明补充
declare global {
  const __VLS_intrinsicElements: any;
  const __VLS_componentsOption: any;
  const __VLS_name: any;
}
