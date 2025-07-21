import type { PermissionType } from '@/core/permission/modules/types';

// Vue 组件类型声明
declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

// Vue Language Service 类型补充
declare global {
  const __VLS_intrinsicElements: any;
  const __VLS_componentsOption: any;
  const __VLS_name: any;
}

declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    $auth: (perm: PermissionType) => boolean;
    Reflect: Reflect;
  }
}

declare type Nullable<T> = T | null;

declare type CustomizedHTMLElement<T> = HTMLElement & T;

declare type Indexable<T> = {
  [key: string]: T;
};
