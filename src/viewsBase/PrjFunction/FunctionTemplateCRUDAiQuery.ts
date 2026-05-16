import { Ref } from 'vue';
import { ProgLangType_GetArrProgLangTypeByIsVisible } from '@/ts/L3ForWApi/SysPara/clsProgLangTypeWApi';
import { QueryControlType } from '@/viewsBase/common/TableSpecQuery';

/** Ai 查询字段键定义。 */
export type FunctionTemplateQueryFieldKeyAi =
  | 'functionTemplateId_q'
  | 'functionTemplateName_q'
  | 'functionTemplateENName_q'
  | 'progLangTypeId_q'
  | 'createUserId_q';

export interface FunctionTemplateQueryFieldSpecAi {
  key: FunctionTemplateQueryFieldKeyAi;
  label: string;
  id: string;
  controlType: QueryControlType;
  width: number;
  row: number;
  order: number;
  // false 时不在查询区渲染；不配置时默认显示
  visibleInQuery?: boolean;
  optionsKey?: 'progLangType';
}

export const FUNCTIONTEMPLATE_QUERY_SPECS_AI: Array<FunctionTemplateQueryFieldSpecAi> = [
  {
    key: 'functionTemplateId_q',
    label: '函数模板Id',
    id: 'txtFunctionTemplateId_q',
    controlType: 'text',
    width: 120,
    row: 1,
    order: 1,
  },
  {
    key: 'functionTemplateName_q',
    label: '函数模板名',
    id: 'txtFunctionTemplateName_q',
    controlType: 'text',
    width: 120,
    row: 1,
    order: 2,
  },
  {
    key: 'functionTemplateENName_q',
    label: '函数模板英文名',
    id: 'txtFunctionTemplateENName_q',
    controlType: 'text',
    width: 120,
    row: 1,
    order: 3,
  },
  {
    key: 'progLangTypeId_q',
    label: '编程语言类型Id',
    id: 'ddlProgLangTypeId_q',
    controlType: 'select',
    width: 120,
    row: 1,
    order: 4,
    optionsKey: 'progLangType',
  },
  {
    key: 'createUserId_q',
    label: '建立用户Id',
    id: 'txtCreateUserId_q',
    controlType: 'text',
    width: 120,
    row: 2,
    order: 1,
  },
];

export function initQueryDefaultsAi(queryRefs: {
  functionTemplateId_q: Ref<string>;
  functionTemplateName_q: Ref<string>;
  functionTemplateENName_q: Ref<string>;
  progLangTypeId_q: Ref<string>;
  createUserId_q: Ref<string>;
}) {
  queryRefs.functionTemplateId_q.value = '';
  queryRefs.functionTemplateName_q.value = '';
  queryRefs.functionTemplateENName_q.value = '';
  queryRefs.progLangTypeId_q.value = '0';
  queryRefs.createUserId_q.value = '';
}

export async function loadQueryOptionsAi() {
  const [arrProgLangType] = await Promise.all([ProgLangType_GetArrProgLangTypeByIsVisible()]);
  return { arrProgLangType };
}

export async function loadFeatureOptionsAi() {
  return {};
}

export function getQueryRowsAi() {
  const row1 = FUNCTIONTEMPLATE_QUERY_SPECS_AI.filter(
    (x) => x.row === 1 && x.visibleInQuery !== false,
  ).sort((a, b) => a.order - b.order);
  const row2 = FUNCTIONTEMPLATE_QUERY_SPECS_AI.filter(
    (x) => x.row === 2 && x.visibleInQuery !== false,
  ).sort((a, b) => a.order - b.order);
  return { row1, row2 };
}
