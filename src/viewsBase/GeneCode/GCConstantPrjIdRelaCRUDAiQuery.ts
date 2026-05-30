import { Ref } from 'vue';

import { DataTypeAbbr_GetArrDataTypeAbbr } from '@/ts/L3ForWApi/SysPara/clsDataTypeAbbrWApi';
import { GCDefaConstants_GetArrGCDefaConstantsCache } from '@/ts/L3ForWApi/GeneCode/clsGCDefaConstantsWApi';

import { QueryControlType } from '@/viewsBase/common/TableSpecQuery';

/** Ai 查询字段键定义。 */
export type GCConstantPrjIdRelaQueryFieldKeyAi =
  | 'prjId_q'
  | 'dataTypeId_q'
  | 'constName_q'
  | 'constId_q';

export interface GCConstantPrjIdRelaQueryFieldSpecAi {
  key: GCConstantPrjIdRelaQueryFieldKeyAi;
  label: string;
  id: string;
  controlType: QueryControlType;
  width: number;
  row: number;
  order: number;
  visibleInQuery?: boolean;
  optionsKey?: 'dataTypeAbbr' | 'gCDefaConstants';
}

export const GCCONSTANTPRJIDRELA_QUERY_SPECS_AI: Array<GCConstantPrjIdRelaQueryFieldSpecAi> = [
  {
    key: 'prjId_q',
    label: '工程Id',
    id: 'txtPrjId_q',
    controlType: 'text',
    width: 120,
    row: 1,
    order: 1,
  },
  {
    key: 'dataTypeId_q',
    label: '数据类型Id',
    id: 'ddlDataTypeId_q',
    controlType: 'select',
    width: 120,
    row: 1,
    order: 2,
    optionsKey: 'dataTypeAbbr',
  },
  {
    key: 'constName_q',
    label: '常量名',
    id: 'txtConstName_q',
    controlType: 'text',
    width: 120,
    row: 1,
    order: 3,
  },
  {
    key: 'constId_q',
    label: '常量Id',
    id: 'ddlConstId_q',
    controlType: 'select',
    width: 120,
    row: 1,
    order: 4,
    optionsKey: 'gCDefaConstants',
  },
];

export function initQueryDefaultsAi(queryRefs: {
  prjId_q: Ref<string>;
  dataTypeId_q: Ref<string>;
  constName_q: Ref<string>;
  constId_q: Ref<string>;
}) {
  queryRefs.prjId_q.value = '';
  queryRefs.dataTypeId_q.value = '0';
  queryRefs.constName_q.value = '';
  queryRefs.constId_q.value = '0';
}

export async function loadQueryOptionsAi() {
  const [arrDataTypeAbbr, arrGCDefaConstants] = await Promise.all([
    DataTypeAbbr_GetArrDataTypeAbbr(),
    GCDefaConstants_GetArrGCDefaConstantsCache(),
  ]);
  return { arrDataTypeAbbr, arrGCDefaConstants };
}

export async function loadFeatureOptionsAi() {
  return {};
}

export function getQueryRowsAi() {
  const row1 = GCCONSTANTPRJIDRELA_QUERY_SPECS_AI.filter(
    (x) => x.row === 1 && x.visibleInQuery !== false,
  ).sort((a, b) => a.order - b.order);
  const row2 = GCCONSTANTPRJIDRELA_QUERY_SPECS_AI.filter(
    (x) => x.row === 2 && x.visibleInQuery !== false,
  ).sort((a, b) => a.order - b.order);
  return { row1, row2 };
}
