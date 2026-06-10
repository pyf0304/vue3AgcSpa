import { Ref } from 'vue';

import { DataBaseType_GetArrDataBaseType } from '@/ts/L3ForWApi/SysPara/clsDataBaseTypeWApi';
import { UseState_GetArrUseState } from '@/ts/L3ForWApi/SysPara/clsUseStateWApi';

import { QueryControlType } from '@/viewsBase/common/TableSpecQuery';

/** Ai 查询字段键定义。 */
export type PrjDataBaseQueryFieldKeyAi =
  | 'databaseOwner_q'
  | 'dataBaseTypeId_q'
  | 'dataBaseUserId_q'
  | 'ipAddress_q'
  | 'useStateId_q'
;

export interface PrjDataBaseQueryFieldSpecAi {
  key: PrjDataBaseQueryFieldKeyAi;
  label: string;
  id: string;
  controlType: QueryControlType;
  width: number;
  row: number;
  order: number;
  visibleInQuery?: boolean;  
    optionsKey?:'dataBaseTypeId_q' | 'useStateId_q';
}

export const PRJ_DATABASE_QUERY_SPECS_AI: Array<PrjDataBaseQueryFieldSpecAi> = [
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
        optionsKey: 'dataBaseTypeId_q',

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
        optionsKey: 'useStateId_q',

  }
];

export function initQueryDefaultsAi(queryRefs: {
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

export async function loadQueryOptionsAi() {
  const [arrDataBaseType, arrUseState] = await Promise.all([
    DataBaseType_GetArrDataBaseType(),
    UseState_GetArrUseState()
  ]);
  return {arrDataBaseType, arrUseState};
}

export async function loadFeatureOptionsAi() {
  return {};
}

export function getQueryRowsAi() {
  const row1 = PRJ_DATABASE_QUERY_SPECS_AI.filter(
    (x) => x.row === 1 && x.visibleInQuery !== false,
  ).sort((a, b) => a.order - b.order);
  const row2 = PRJ_DATABASE_QUERY_SPECS_AI.filter(
    (x) => x.row === 2 && x.visibleInQuery !== false,
  ).sort((a, b) => a.order - b.order);
  return { row1, row2 };
}