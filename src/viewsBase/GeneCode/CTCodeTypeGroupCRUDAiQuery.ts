import { Ref } from 'vue';

import { QueryControlType } from '@/viewsBase/common/TableSpecQuery';

/** Ai 查询字段键定义。 */
export type CTCodeTypeGroupQueryFieldKeyAi =
  | 'ctGroupId_q'
  | 'groupName_q'
  | 'groupENName_q'
  | 'inUse_q';

export interface CTCodeTypeGroupQueryFieldSpecAi {
  key: CTCodeTypeGroupQueryFieldKeyAi;
  label: string;
  id: string;
  controlType: QueryControlType;
  width: number;
  row: number;
  order: number;
  visibleInQuery?: boolean;
  optionsKey?: 'inUse_q';
}

export const CTCODETYPEGROUP_QUERY_SPECS_AI: Array<CTCodeTypeGroupQueryFieldSpecAi> = [
  {
    key: 'ctGroupId_q',
    label: 'Ct组Id',
    id: 'txtCtGroupId_q',
    controlType: 'text',
    width: 120,
    row: 1,
    order: 1,
  },
  {
    key: 'groupName_q',
    label: '组名',
    id: 'txtGroupName_q',
    controlType: 'text',
    width: 120,
    row: 1,
    order: 2,
  },
  {
    key: 'groupENName_q',
    label: '组英文名',
    id: 'txtGroupENName_q',
    controlType: 'text',
    width: 120,
    row: 1,
    order: 3,
  },
  {
    key: 'inUse_q',
    label: '是否在用',
    id: 'ddlInUse_q',
    controlType: 'select4Bool',
    width: 120,
    row: 1,
    order: 4,
    optionsKey: 'inUse_q',
  },
];

export function initQueryDefaultsAi(queryRefs: {
  ctGroupId_q: Ref<string>;
  groupName_q: Ref<string>;
  groupENName_q: Ref<string>;
  inUse_q: Ref<string>;
}) {
  queryRefs.ctGroupId_q.value = '';
  queryRefs.groupName_q.value = '';
  queryRefs.groupENName_q.value = '';
  queryRefs.inUse_q.value = '0';
}

export async function loadQueryOptionsAi() {
  return {};
}

export async function loadFeatureOptionsAi() {
  return {};
}

export function getQueryRowsAi() {
  const row1 = CTCODETYPEGROUP_QUERY_SPECS_AI.filter(
    (x) => x.row === 1 && x.visibleInQuery !== false,
  ).sort((a, b) => a.order - b.order);
  const row2 = CTCODETYPEGROUP_QUERY_SPECS_AI.filter(
    (x) => x.row === 2 && x.visibleInQuery !== false,
  ).sort((a, b) => a.order - b.order);
  return { row1, row2 };
}
