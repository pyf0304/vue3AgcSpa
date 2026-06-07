import { Ref } from 'vue';

import { CTCodeTypeGroup_GetArrCTCodeTypeGroupByApplicationTypeIdCache } from '@/ts/L3ForWApi/GeneCode/clsCTCodeTypeGroupWApi';
import { vCodeType_Sim_GetArrvCodeType_SimByProgLangTypeId } from '@/ts/L3ForWApi/GeneCode/clsvCodeType_SimWApi';
import {
  ApplicationTypeId_Static,
  ProgLangTypeId_Static,
} from '@/views/GeneCode/CTCodeTypeGroupRelaVueShare';

import { QueryControlType } from '@/viewsBase/common/TableSpecQuery';

/** Ai 查询字段键定义。 */
export type CTCodeTypeGroupRelaQueryFieldKeyAi = 'ctGroupId_q' | 'codeTypeId_q';

export interface CTCodeTypeGroupRelaQueryFieldSpecAi {
  key: CTCodeTypeGroupRelaQueryFieldKeyAi;
  label: string;
  id: string;
  controlType: QueryControlType;
  width: number;
  row: number;
  order: number;
  visibleInQuery?: boolean;
  optionsKey?: 'ctGroupId_q' | 'codeTypeId_q';
}

export const CTCODETYPEGROUPRELA_QUERY_SPECS_AI: Array<CTCodeTypeGroupRelaQueryFieldSpecAi> = [
  {
    key: 'ctGroupId_q',
    label: 'Ct组',
    id: 'ddlCtGroupId_q',
    controlType: 'select',
    width: 120,
    row: 1,
    order: 1,
    optionsKey: 'ctGroupId_q',
  },
  {
    key: 'codeTypeId_q',
    label: '代码类型',
    id: 'ddlCodeTypeId_q',
    controlType: 'select',
    width: 120,
    row: 1,
    order: 2,
    optionsKey: 'codeTypeId_q',
  },
];

export function initQueryDefaultsAi(queryRefs: {
  ctGroupId_q: Ref<string>;
  codeTypeId_q: Ref<string>;
}) {
  queryRefs.ctGroupId_q.value = '0';
  queryRefs.codeTypeId_q.value = '0';
}

export async function loadQueryOptionsAi() {
  const [arrCTCodeTypeGroup, arrvCodeType_Sim] = await Promise.all([
    CTCodeTypeGroup_GetArrCTCodeTypeGroupByApplicationTypeIdCache(ApplicationTypeId_Static.value),
    vCodeType_Sim_GetArrvCodeType_SimByProgLangTypeId(ProgLangTypeId_Static.value),
  ]);
  return { arrCTCodeTypeGroup, arrvCodeType_Sim };
}

export async function loadFeatureOptionsAi() {
  return {};
}

export function getQueryRowsAi() {
  const row1 = CTCODETYPEGROUPRELA_QUERY_SPECS_AI.filter(
    (x) => x.row === 1 && x.visibleInQuery !== false,
  ).sort((a, b) => a.order - b.order);
  const row2 = CTCODETYPEGROUPRELA_QUERY_SPECS_AI.filter(
    (x) => x.row === 2 && x.visibleInQuery !== false,
  ).sort((a, b) => a.order - b.order);
  return { row1, row2 };
}
