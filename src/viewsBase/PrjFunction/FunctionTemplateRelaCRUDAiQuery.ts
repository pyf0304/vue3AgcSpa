import { Ref } from 'vue';

import { FunctionTemplate_GetArrFunctionTemplate } from '@/ts/L3ForWApi/PrjFunction/clsFunctionTemplateWApi';
import { RegionType_GetArrRegionType } from '@/ts/L3ForWApi/RegionManage/clsRegionTypeWApi';
import { vCodeType_Sim_GetArrvCodeType_SimByProgLangTypeId } from '@/ts/L3ForWApi/GeneCode/clsvCodeType_SimWApi';
import { Function4GeneCode_GetArrFunction4GeneCodeByFuncCodeTypeId } from '@/ts/L3ForWApi/PrjFunction/clsFunction4GeneCodeWApi';
import {
  ProgLangTypeId_Static,
  CodeTypeId_Static,
} from '@/views/PrjFunction/FunctionTemplateRelaVueShare';

import { QueryControlType } from '@/viewsBase/common/TableSpecQuery';

/** Ai 查询字段键定义。 */
export type FunctionTemplateRelaQueryFieldKeyAi =
  | 'functionTemplateId_q'
  | 'regionTypeId_q'
  | 'codeTypeId_q'
  | 'funcId4GC_q'
  | 'isGeneCode_q';

export interface FunctionTemplateRelaQueryFieldSpecAi {
  key: FunctionTemplateRelaQueryFieldKeyAi;
  label: string;
  id: string;
  controlType: QueryControlType;
  width: number;
  row: number;
  order: number;
  visibleInQuery?: boolean;
  optionsKey?: 'functionTemplate' | 'regionType' | 'vCodeType_Sim' | 'function4GeneCode';
}

export const FUNCTIONTEMPLATERELA_QUERY_SPECS_AI: Array<FunctionTemplateRelaQueryFieldSpecAi> = [
  {
    key: 'functionTemplateId_q',
    label: '函数模板',
    id: 'ddlFunctionTemplateId_q',
    controlType: 'select',
    width: 120,
    row: 1,
    order: 1,
    optionsKey: 'functionTemplate',
  },
  {
    key: 'regionTypeId_q',
    label: '区域类型',
    id: 'ddlRegionTypeId_q',
    controlType: 'select',
    width: 120,
    row: 1,
    order: 2,
    optionsKey: 'regionType',
  },
  {
    key: 'codeTypeId_q',
    label: '代码类型',
    id: 'ddlCodeTypeId_q',
    controlType: 'select',
    width: 120,
    row: 1,
    order: 3,
    optionsKey: 'vCodeType_Sim',
  },
  {
    key: 'funcId4GC_q',
    label: '函数',
    id: 'ddlFuncId4GC_q',
    controlType: 'select',
    width: 120,
    row: 1,
    order: 4,
    optionsKey: 'function4GeneCode',
  },
  {
    key: 'isGeneCode_q',
    label: '是否生成代码',
    id: 'ddlIsGeneCode_q',
    controlType: 'select4Bool',
    width: 120,
    row: 2,
    order: 1,
  },
];

export function initQueryDefaultsAi(queryRefs: {
  functionTemplateId_q: Ref<string>;
  regionTypeId_q: Ref<string>;
  codeTypeId_q: Ref<string>;
  funcId4GC_q: Ref<string>;
  isGeneCode_q: Ref<string>;
}) {
  queryRefs.functionTemplateId_q.value = '0';
  queryRefs.regionTypeId_q.value = '0';
  queryRefs.codeTypeId_q.value = '0';
  queryRefs.funcId4GC_q.value = '0';
  queryRefs.isGeneCode_q.value = '0';
}

export async function loadQueryOptionsAi() {
  const [arrFunctionTemplate, arrRegionType, arrvCodeType_Sim, arrFunction4GeneCode] =
    await Promise.all([
      FunctionTemplate_GetArrFunctionTemplate(),
      RegionType_GetArrRegionType(),
      vCodeType_Sim_GetArrvCodeType_SimByProgLangTypeId(ProgLangTypeId_Static.value),
      Function4GeneCode_GetArrFunction4GeneCodeByFuncCodeTypeId(CodeTypeId_Static.value),
    ]);
  return { arrFunctionTemplate, arrRegionType, arrvCodeType_Sim, arrFunction4GeneCode };
}

export async function loadFeatureOptionsAi() {
  return {};
}

export function getQueryRowsAi() {
  const row1 = FUNCTIONTEMPLATERELA_QUERY_SPECS_AI.filter(
    (x) => x.row === 1 && x.visibleInQuery !== false,
  ).sort((a, b) => a.order - b.order);
  const row2 = FUNCTIONTEMPLATERELA_QUERY_SPECS_AI.filter(
    (x) => x.row === 2 && x.visibleInQuery !== false,
  ).sort((a, b) => a.order - b.order);
  return { row1, row2 };
}
