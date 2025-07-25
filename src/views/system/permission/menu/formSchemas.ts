import MultipleCascader from './components/multiple-cascader/index.vue';
import type { FormSchema } from '@/components/core/schema-form/';
import IconsSelect from '@/components/basic/icons-select/index.vue';
import { constantRouterComponents } from '@/router/asyncModules';

/** 菜单类型 0: 目录 | 1: 菜单 | 2: 权限 */
// const isDir = (type: API.MenuListResultItem['type']) => type === 0;
const isMenu = (type: API.MenuListResultItem['type']) => type === 1;
const isPerm = (type: API.MenuListResultItem['type']) => type === 2;

export const menuSchemas: FormSchema<API.MenuAddParams>[] = [
  {
    field: 'type',
    component: 'RadioGroup',
    label: '菜单类型',
    defaultValue: 0,
    rules: [{ required: true, type: 'number' }],
    componentProps: {
      options: [
        {
          label: '目录',
          value: 0,
        },
        {
          label: '菜单',
          value: 1,
        },
        {
          label: '权限',
          value: 2,
        },
      ],
    },
  },
  {
    field: 'name',
    component: 'Input',
    label: '节点名称',
    rules: [{ required: true, type: 'string' }],
  },
  {
    field: 'parentId',
    component: 'TreeSelect',
    label: '上级节点',
    componentProps: {
      fieldNames: {
        label: 'name',
        value: 'id',
      },
      getPopupContainer: () => document.body,
    },
    rules: [{ required: true, type: 'number' }],
  },
  {
    field: 'router',
    component: 'Input',
    label: '节点路由',
    vIf: ({ formModel }) => !isPerm(formModel['type']),
    rules: [{ required: true, type: 'string' }],
  },
  {
    field: 'perms',
    component: () => MultipleCascader,
    label: '权限',
    vIf: ({ formModel }) => isPerm(formModel['type']),
    rules: [{ required: true, type: 'array', message: '请选择权限' }],
  },
  {
    field: 'viewPath',
    component: 'Select',
    label: '文件路径',
    vIf: ({ formModel }) => isMenu(formModel['type']) && !formModel['isExt'],
    componentProps: {
      options: Object.keys(constantRouterComponents).map((n) => ({
        label: n,
        value: n,
      })),
    },
    rules: [{ required: true, type: 'string' }],
  },
  {
    field: 'icon',
    component: () => IconsSelect,
    label: '节点图标',
    vIf: ({ formModel }) => !isPerm(formModel['type']),
  },
  {
    field: 'keepalive',
    component: 'Switch',
    label: '是否缓存',
    defaultValue: true,
    vIf: ({ formModel }) => isMenu(formModel['type']),
  },
  {
    field: 'isExt',
    component: 'Switch',
    label: '是否外链',
    defaultValue: false,
    colProps: {
      span: 12,
    },
    vIf: ({ formModel }) => isMenu(formModel['type']),
  },
  {
    field: 'openMode',
    component: 'RadioGroup',
    label: '打开方式',
    defaultValue: 1,
    vIf: ({ formModel }) => isMenu(formModel['type']) && formModel['isExt'],
    colProps: {
      span: 12,
    },
    componentProps: {
      optionType: 'button',
      buttonStyle: 'solid',
      options: [
        {
          label: '新窗口打开',
          value: 1,
        },
        {
          label: '内嵌页打开',
          value: 2,
        },
      ],
    },
  },
  {
    field: 'isShow',
    component: 'Switch',
    label: '是否显示',
    defaultValue: true,
    vIf: ({ formModel }) => !isPerm(formModel['type']),
  },
  {
    field: 'orderNum',
    component: 'InputNumber',
    label: '排序号',
    defaultValue: 255,
    componentProps: {
      style: {
        width: '100%',
      },
    },
  },
];
