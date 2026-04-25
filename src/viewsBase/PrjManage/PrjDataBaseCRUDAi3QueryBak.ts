import { Ref } from 'vue';
import { DataBaseType_GetArrDataBaseType } from '@/ts/L3ForWApi/SysPara/clsDataBaseTypeWApi';
import { UseState_GetArrUseState } from '@/ts/L3ForWApi/SysPara/clsUseStateWApi';
import { QueryControlType } from '@/viewsBase/common/TableSpecQuery';

/** Ai3 查询字段键定义。 */
export type PrjDataBaseQueryFieldKeyAi3 =
  | 'databaseOwner_q'
  | 'dataBaseTypeId_q'
  | 'dataBaseUserId_q'
  | 'ipAddress_q'
  | 'useStateId_q';

export interface PrjDataBaseQueryFieldSpecAi3 {
  key: PrjDataBaseQueryFieldKeyAi3;
  label: string;
  id: string;
  controlType: QueryControlType;
  width: number;
  row: number;
  order: number;
  // false 时不在查询区渲染；不配置时默认显示
  visibleInQuery?: boolean;
  optionsKey?: 'dataBaseType' | 'useState';
}

export const PRJ_DATABASE_QUERY_SPECS_AI3: Array<PrjDataBaseQueryFieldSpecAi3> = [
  {
    key: 'databaseOwner_q',
    label: '数据库拥有者',
    id: 'txtDatabaseOwner_q',
    controlType: 'text',
    width: 120,
    row: 1,
    order: 1,
  },
  {
    key: 'dataBaseTypeId_q',
    label: '数据库类型ID',
    id: 'ddlDataBaseTypeId_q',
    controlType: 'select',
    width: 120,
    row: 1,
    order: 2,
    optionsKey: 'dataBaseType',
  },
  {
    key: 'dataBaseUserId_q',
    label: '数据库的用户ID',
    id: 'txtDataBaseUserId_q',
    controlType: 'text',
    width: 120,
    row: 1,
    order: 3,
  },
  {
    key: 'ipAddress_q',
    label: '服务器',
    id: 'txtIpAddress_q',
    controlType: 'text',
    width: 120,
    row: 1,
    order: 4,
  },
  {
    key: 'useStateId_q',
    label: '使用状态Id',
    id: 'ddlUseStateId_q',
    controlType: 'select',
    width: 120,
    row: 2,
    order: 1,
    optionsKey: 'useState',
  },
];

export function initQueryDefaultsAi3(queryRefs: {
  databaseOwner_q: Ref<string>;
  dataBaseTypeId_q: Ref<string>;
  dataBaseUserId_q: Ref<string>;
  ipAddress_q: Ref<string>;
  useStateId_q: Ref<string>;
}) {
  queryRefs.databaseOwner_q.value = '';
  queryRefs.dataBaseTypeId_q.value = '0';
  queryRefs.dataBaseUserId_q.value = '';
  queryRefs.ipAddress_q.value = '';
  queryRefs.useStateId_q.value = '0';
}

export async function loadQueryOptionsAi3() {
  const [arrDataBaseType, arrUseState] = await Promise.all([
    DataBaseType_GetArrDataBaseType(),
    UseState_GetArrUseState(),
  ]);
  return { arrDataBaseType, arrUseState };
}

export async function loadFeatureOptionsAi3() {
  const arrUseState = await UseState_GetArrUseState();
  return { arrUseState };
}

export function getQueryRowsAi3() {
  const row1 = PRJ_DATABASE_QUERY_SPECS_AI3.filter(
    (x) => x.row === 1 && x.visibleInQuery !== false,
  ).sort((a, b) => a.order - b.order);
  const row2 = PRJ_DATABASE_QUERY_SPECS_AI3.filter(
    (x) => x.row === 2 && x.visibleInQuery !== false,
  ).sort((a, b) => a.order - b.order);
  return { row1, row2 };
}
