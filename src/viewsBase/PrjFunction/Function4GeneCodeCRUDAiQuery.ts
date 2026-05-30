import { Ref } from 'vue';

import { SQLDSType_GetArrSQLDSType } from '@/ts/L3ForWApi/PrjInterface/clsSQLDSTypeWApi';
import { vCodeType_Sim_GetArrvCodeType_SimByProgLangTypeId } from '@/ts/L3ForWApi/GeneCode/clsvCodeType_SimWApi';
import { ProgLangType_GetArrProgLangTypeByIsVisible } from '@/ts/L3ForWApi/SysPara/clsProgLangTypeWApi';
import { FunctionType_GetArrFunctionType } from '@/ts/L3ForWApi/PrjFunction/clsFunctionTypeWApi';
import { vFunction4Code_Sim_GetArrvFunction4Code_SimByFuncPurposeIdCache } from '@/ts/L3ForWApi/PrjFunction/clsvFunction4Code_SimWApi';
import {
  ProgLangTypeId_Static,
  IsVisible_Giving,
  FuncPurposeId_Static,
} from '@/views/PrjFunction/Function4GeneCodeVueShare';

import { QueryControlType } from '@/viewsBase/common/TableSpecQuery';

/** Ai 查询字段键定义。 */
export type Function4GeneCodeQueryFieldKeyAi =
  | 'funcId4GC_q'
  | 'funcName_q'
  | 'sqlDsTypeId_q'
  | 'funcCodeTypeId_q'
  | 'inUse_q'
  | 'progLangTypeId_q'
  | 'funcTypeId_q'
  | 'isTemplate_q'
  | 'isFuncTemplate_q'
  | 'funcId4Code_q';

export interface Function4GeneCodeQueryFieldSpecAi {
  key: Function4GeneCodeQueryFieldKeyAi;
  label: string;
  id: string;
  controlType: QueryControlType;
  width: number;
  row: number;
  order: number;
  visibleInQuery?: boolean;
  optionsKey?:
    | 'sQLDSType'
    | 'vCodeType_Sim'
    | 'progLangType'
    | 'functionType'
    | 'vFunction4Code_Sim';
}

export const FUNCTION4GENECODE_QUERY_SPECS_AI: Array<Function4GeneCodeQueryFieldSpecAi> = [
  {
    key: 'funcId4GC_q',
    label: '函数ID',
    id: 'txtFuncId4GC_q',
    controlType: 'text',
    width: 120,
    row: 1,
    order: 1,
  },
  {
    key: 'funcName_q',
    label: '函数名',
    id: 'txtFuncName_q',
    controlType: 'text',
    width: 120,
    row: 1,
    order: 2,
  },
  {
    key: 'sqlDsTypeId_q',
    label: '数据源',
    id: 'ddlSqlDsTypeId_q',
    controlType: 'select',
    width: 120,
    row: 1,
    order: 3,
    optionsKey: 'sQLDSType',
  },
  {
    key: 'funcCodeTypeId_q',
    label: '代码类型',
    id: 'ddlFuncCodeTypeId_q',
    controlType: 'select',
    width: 120,
    row: 1,
    order: 4,
    optionsKey: 'vCodeType_Sim',
  },
  {
    key: 'inUse_q',
    label: '在用?',
    id: 'txtInUse_q',
    controlType: 'text',
    width: 120,
    row: 2,
    order: 1,
  },
  {
    key: 'progLangTypeId_q',
    label: '语言',
    id: 'ddlProgLangTypeId_q',
    controlType: 'select',
    width: 120,
    row: 2,
    order: 2,
    optionsKey: 'progLangType',
  },
  {
    key: 'funcTypeId_q',
    label: '函数类型',
    id: 'ddlFuncTypeId_q',
    controlType: 'select',
    width: 120,
    row: 2,
    order: 3,
    optionsKey: 'functionType',
  },
  {
    key: 'isTemplate_q',
    label: '功能样板?',
    id: 'txtIsTemplate_q',
    controlType: 'text',
    width: 120,
    row: 2,
    order: 4,
  },
  {
    key: 'isFuncTemplate_q',
    label: '函数模板?',
    id: 'txtIsFuncTemplate_q',
    controlType: 'text',
    width: 120,
    row: 3,
    order: 1,
  },
  {
    key: 'funcId4Code_q',
    label: '函数(Code)',
    id: 'ddlFuncId4Code_q',
    controlType: 'select',
    width: 120,
    row: 3,
    order: 2,
    optionsKey: 'vFunction4Code_Sim',
  },
];

export function initQueryDefaultsAi(queryRefs: {
  funcId4GC_q: Ref<string>;
  funcName_q: Ref<string>;
  sqlDsTypeId_q: Ref<string>;
  funcCodeTypeId_q: Ref<string>;
  inUse_q: Ref<string>;
  progLangTypeId_q: Ref<string>;
  funcTypeId_q: Ref<string>;
  isTemplate_q: Ref<string>;
  isFuncTemplate_q: Ref<string>;
  funcId4Code_q: Ref<string>;
}) {
  queryRefs.funcId4GC_q.value = '';
  queryRefs.funcName_q.value = '';
  queryRefs.sqlDsTypeId_q.value = '0';
  queryRefs.funcCodeTypeId_q.value = '0';
  queryRefs.inUse_q.value = '';
  queryRefs.progLangTypeId_q.value = '0';
  queryRefs.funcTypeId_q.value = '0';
  queryRefs.isTemplate_q.value = '';
  queryRefs.isFuncTemplate_q.value = '';
  queryRefs.funcId4Code_q.value = '0';
}

export async function loadQueryOptionsAi() {
  const [arrSQLDSType, arrvCodeType_Sim, arrProgLangType, arrFunctionType, arrvFunction4Code_Sim] =
    await Promise.all([
      SQLDSType_GetArrSQLDSType(),
      vCodeType_Sim_GetArrvCodeType_SimByProgLangTypeId(ProgLangTypeId_Static.value),
      ProgLangType_GetArrProgLangTypeByIsVisible(IsVisible_Giving.value),
      FunctionType_GetArrFunctionType(),
      vFunction4Code_Sim_GetArrvFunction4Code_SimByFuncPurposeIdCache(FuncPurposeId_Static.value),
    ]);
  return {
    arrSQLDSType,
    arrvCodeType_Sim,
    arrProgLangType,
    arrFunctionType,
    arrvFunction4Code_Sim,
  };
}

export async function loadFeatureOptionsAi() {
  return {};
}

export function getQueryRowsAi() {
  const row1 = FUNCTION4GENECODE_QUERY_SPECS_AI.filter(
    (x) => x.row === 1 && x.visibleInQuery !== false,
  ).sort((a, b) => a.order - b.order);
  const row2 = FUNCTION4GENECODE_QUERY_SPECS_AI.filter(
    (x) => x.row === 2 && x.visibleInQuery !== false,
  ).sort((a, b) => a.order - b.order);
  return { row1, row2 };
}
