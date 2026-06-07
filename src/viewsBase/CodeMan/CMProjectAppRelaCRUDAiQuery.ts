import { Ref } from 'vue';

import { CMProject_GetArrCMProjectByPrjId } from '@/ts/L3ForWApi/CodeMan/clsCMProjectWApi';
import { PrjId_Session } from '@/views/CodeMan/CMProjectAppRelaVueShare';

import { QueryControlType } from '@/viewsBase/common/TableSpecQuery';

/** Ai 查询字段键定义。 */
export type CMProjectAppRelaQueryFieldKeyAi = 'cmPrjId_q' | 'prjId_q';

export interface CMProjectAppRelaQueryFieldSpecAi {
  key: CMProjectAppRelaQueryFieldKeyAi;
  label: string;
  id: string;
  controlType: QueryControlType;
  width: number;
  row: number;
  order: number;
  visibleInQuery?: boolean;
  optionsKey?: 'cMProject';
}

export const CMPROJECTAPPRELA_QUERY_SPECS_AI: Array<CMProjectAppRelaQueryFieldSpecAi> = [
  {
    key: 'cmPrjId_q',
    label: 'CM工程',
    id: 'ddlCmPrjId_q',
    controlType: 'select',
    width: 120,
    row: 1,
    order: 1,
    optionsKey: 'cMProject',
  },
  {
    key: 'prjId_q',
    label: '工程ID',
    id: 'txtPrjId_q',
    controlType: 'text',
    width: 120,
    row: 1,
    order: 2,
  },
];

export function initQueryDefaultsAi(queryRefs: { cmPrjId_q: Ref<string>; prjId_q: Ref<string> }) {
  queryRefs.cmPrjId_q.value = '0';
  queryRefs.prjId_q.value = '';
}

export async function loadQueryOptionsAi() {
  const [arrCMProject] = await Promise.all([CMProject_GetArrCMProjectByPrjId(PrjId_Session.value)]);
  return { arrCMProject };
}

export async function loadFeatureOptionsAi() {
  return {};
}

export function getQueryRowsAi() {
  const row1 = CMPROJECTAPPRELA_QUERY_SPECS_AI.filter(
    (x) => x.row === 1 && x.visibleInQuery !== false,
  ).sort((a, b) => a.order - b.order);
  const row2 = CMPROJECTAPPRELA_QUERY_SPECS_AI.filter(
    (x) => x.row === 2 && x.visibleInQuery !== false,
  ).sort((a, b) => a.order - b.order);
  return { row1, row2 };
}
