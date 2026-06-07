import { Ref } from 'vue';

import { vCodeType_Sim_GetArrvCodeType_SimByProgLangTypeId } from '@/ts/L3ForWApi/GeneCode/clsvCodeType_SimWApi';
import { CTRelationType_GetArrCTRelationType } from '@/ts/L3ForWApi/GeneCode/clsCTRelationTypeWApi';
import { ProgLangTypeId_Static } from '@/views/GeneCode/GC_CodeTypeRelationVueShare';

import { QueryControlType } from '@/viewsBase/common/TableSpecQuery';

/** Ai 查询字段键定义。 */
export type GC_CodeTypeRelationQueryFieldKeyAi =
  | 'parentCodeTypeId_q'
  | 'childCodeTypeId_q'
  | 'ctRelationTypeId_q'
  | 'childCodeTypeName_q';

export interface GC_CodeTypeRelationQueryFieldSpecAi {
  key: GC_CodeTypeRelationQueryFieldKeyAi;
  label: string;
  id: string;
  controlType: QueryControlType;
  width: number;
  row: number;
  order: number;
  visibleInQuery?: boolean;
  optionsKey?: 'parentCodeTypeId_q' | 'childCodeTypeId_q' | 'ctRelationTypeId_q';
}

export const GC_CODETYPERELATION_QUERY_SPECS_AI: Array<GC_CodeTypeRelationQueryFieldSpecAi> = [
  {
    key: 'parentCodeTypeId_q',
    label: '父代码类型Id',
    id: 'ddlParentCodeTypeId_q',
    controlType: 'select',
    width: 120,
    row: 1,
    order: 1,
    optionsKey: 'parentCodeTypeId_q',
  },
  {
    key: 'childCodeTypeId_q',
    label: '子代码类型Id',
    id: 'ddlChildCodeTypeId_q',
    controlType: 'select',
    width: 120,
    row: 1,
    order: 2,
    optionsKey: 'childCodeTypeId_q',
  },
  {
    key: 'ctRelationTypeId_q',
    label: '关系类型',
    id: 'ddlCtRelationTypeId_q',
    controlType: 'select',
    width: 120,
    row: 1,
    order: 3,
    optionsKey: 'ctRelationTypeId_q',
  },
  {
    key: 'childCodeTypeName_q',
    label: '子代码类型名',
    id: 'txtChildCodeTypeName_q',
    controlType: 'text',
    width: 120,
    row: 1,
    order: 4,
  },
];

export function initQueryDefaultsAi(queryRefs: {
  parentCodeTypeId_q: Ref<string>;
  childCodeTypeId_q: Ref<string>;
  ctRelationTypeId_q: Ref<string>;
  childCodeTypeName_q: Ref<string>;
}) {
  queryRefs.parentCodeTypeId_q.value = '0';
  queryRefs.childCodeTypeId_q.value = '0';
  queryRefs.ctRelationTypeId_q.value = '0';
  queryRefs.childCodeTypeName_q.value = '';
}

export async function loadQueryOptionsAi() {
  const [arrvCodeType_Sim, arrCTRelationType] = await Promise.all([
    vCodeType_Sim_GetArrvCodeType_SimByProgLangTypeId(ProgLangTypeId_Static.value),
    CTRelationType_GetArrCTRelationType(),
  ]);
  return { arrvCodeType_Sim, arrCTRelationType };
}

export async function loadFeatureOptionsAi() {
  return {};
}

export function getQueryRowsAi() {
  const row1 = GC_CODETYPERELATION_QUERY_SPECS_AI.filter(
    (x) => x.row === 1 && x.visibleInQuery !== false,
  ).sort((a, b) => a.order - b.order);
  const row2 = GC_CODETYPERELATION_QUERY_SPECS_AI.filter(
    (x) => x.row === 2 && x.visibleInQuery !== false,
  ).sort((a, b) => a.order - b.order);
  return { row1, row2 };
}
