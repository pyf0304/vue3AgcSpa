import { Ref } from 'vue';

import { QueryControlType } from '@/viewsBase/common/TableSpecQuery';

/** Ai 查询字段键定义。 */
export type PrjFileTypeQueryFieldKeyAi =
  | 'prjFileTypeId_q'
  | 'prjFileTypeName_q'
;

export interface PrjFileTypeQueryFieldSpecAi {
  key: PrjFileTypeQueryFieldKeyAi;
  label: string;
  id: string;
  controlType: QueryControlType;
  width: number;
  row: number;
  order: number;
  visibleInQuery?: boolean;  
    optionsKey?: string; // 如果 controlType 需要选项，则指定 optionsKey 来获取选项数据
}

export const PRJFILETYPE_QUERY_SPECS_AI: Array<PrjFileTypeQueryFieldSpecAi> = [
  {
    key: 'prjFileTypeId_q',
    label: '项目文件类型Id',
    id: 'txtPrjFileTypeId_q',
    controlType: 'text',
    width: 120,
    row: 1,
    order: 1,

  },
  {
    key: 'prjFileTypeName_q',
    label: '工程文件类型名',
    id: 'txtPrjFileTypeName_q',
    controlType: 'text',
    width: 120,
    row: 1,
    order: 2,

  }
];

export function initQueryDefaultsAi(queryRefs: {
    prjFileTypeId_q: Ref<string>;
    prjFileTypeName_q: Ref<string>;
}) {
        queryRefs.prjFileTypeId_q.value = '';
        queryRefs.prjFileTypeName_q.value = '';
}

export async function loadQueryOptionsAi() {
  return {};
}

export async function loadFeatureOptionsAi() {
  return {};
}

export function getQueryRowsAi() {
  const row1 = PRJFILETYPE_QUERY_SPECS_AI.filter(
    (x) => x.row === 1 && x.visibleInQuery !== false,
  ).sort((a, b) => a.order - b.order);
  const row2 = PRJFILETYPE_QUERY_SPECS_AI.filter(
    (x) => x.row === 2 && x.visibleInQuery !== false,
  ).sort((a, b) => a.order - b.order);
  return { row1, row2 };
}