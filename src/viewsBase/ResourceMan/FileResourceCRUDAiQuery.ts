import { Ref } from 'vue';

import { vCodeType_Sim_GetArrvCodeType_SimByProgLangTypeId } from '@/ts/L3ForWApi/GeneCode/clsvCodeType_SimWApi';
import { PrjFileType_GetArrPrjFileType } from '@/ts/L3ForWApi/ResourceMan/clsPrjFileTypeWApi';
import { vPrjTab_Sim_GetArrvPrjTab_SimByCmPrjId } from '@/ts/L3ForWApi/Table_Field/clsvPrjTab_SimWApi';
import {
  ProgLangTypeId_Static,
  CmPrjId_Local,
  PrjId_Session,
} from '@/views/ResourceMan/FileResourceVueShare';

import { QueryControlType } from '@/viewsBase/common/TableSpecQuery';

/** Ai 查询字段键定义。 */
export type FileResourceQueryFieldKeyAi =
  | 'codeTypeId_q'
  | 'prjFileTypeId_q'
  | 'fileDirName_q'
  | 'fileName_q'
  | 'extension_q'
  | 'tabId_q'
  | 'isBelongsCurrCMPrj_q'
  | 'isGeneCode_q'
  | 'isCanDel_q'
  | 'inUse_q'
  | 'isExistFile_q'
  | 'prjId_q'
  | 'cmPrjId_q';

export interface FileResourceQueryFieldSpecAi {
  key: FileResourceQueryFieldKeyAi;
  label: string;
  id: string;
  controlType: QueryControlType;
  width: number;
  row: number;
  order: number;
  visibleInQuery?: boolean;
  optionsKey?:
    | 'codeTypeId_q'
    | 'prjFileTypeId_q'
    | 'tabId_q'
    | 'isBelongsCurrCMPrj_q'
    | 'isGeneCode_q'
    | 'isCanDel_q'
    | 'inUse_q'
    | 'isExistFile_q';
}

export const FILERESOURCE_QUERY_SPECS_AI: Array<FileResourceQueryFieldSpecAi> = [
  {
    key: 'codeTypeId_q',
    label: '代码类型',
    id: 'ddlCodeTypeId_q',
    controlType: 'select',
    width: 120,
    row: 1,
    order: 1,
    optionsKey: 'codeTypeId_q',
  },
  {
    key: 'prjFileTypeId_q',
    label: '文件类型',
    id: 'ddlPrjFileTypeId_q',
    controlType: 'select',
    width: 120,
    row: 1,
    order: 2,
    optionsKey: 'prjFileTypeId_q',
  },
  {
    key: 'fileDirName_q',
    label: '目录名',
    id: 'txtFileDirName_q',
    controlType: 'text',
    width: 120,
    row: 1,
    order: 3,
  },
  {
    key: 'fileName_q',
    label: '文件名',
    id: 'txtFileName_q',
    controlType: 'text',
    width: 120,
    row: 1,
    order: 4,
  },
  {
    key: 'extension_q',
    label: '扩展名',
    id: 'txtExtension_q',
    controlType: 'text',
    width: 120,
    row: 2,
    order: 1,
  },
  {
    key: 'tabId_q',
    label: '表ID',
    id: 'ddlTabId_q',
    controlType: 'select',
    width: 120,
    row: 2,
    order: 2,
    optionsKey: 'tabId_q',
  },
  {
    key: 'isBelongsCurrCMPrj_q',
    label: '当前项目?',
    id: 'ddlIsBelongsCurrCMPrj_q',
    controlType: 'select4Bool',
    width: 120,
    row: 2,
    order: 3,
    optionsKey: 'isBelongsCurrCMPrj_q',
  },
  {
    key: 'isGeneCode_q',
    label: '可生成?',
    id: 'ddlIsGeneCode_q',
    controlType: 'select4Bool',
    width: 120,
    row: 2,
    order: 4,
    optionsKey: 'isGeneCode_q',
  },
  {
    key: 'isCanDel_q',
    label: '可删?',
    id: 'ddlIsCanDel_q',
    controlType: 'select4Bool',
    width: 120,
    row: 3,
    order: 1,
    optionsKey: 'isCanDel_q',
  },
  {
    key: 'inUse_q',
    label: '在用?',
    id: 'ddlInUse_q',
    controlType: 'select4Bool',
    width: 120,
    row: 3,
    order: 2,
    optionsKey: 'inUse_q',
  },
  {
    key: 'isExistFile_q',
    label: '存在?',
    id: 'ddlIsExistFile_q',
    controlType: 'select4Bool',
    width: 120,
    row: 3,
    order: 3,
    optionsKey: 'isExistFile_q',
  },
  {
    key: 'prjId_q',
    label: '工程Id',
    id: 'txtPrjId_q',
    controlType: 'text',
    width: 120,
    row: 3,
    order: 4,
  },
  {
    key: 'cmPrjId_q',
    label: 'Cm工程Id',
    id: 'txtCmPrjId_q',
    controlType: 'text',
    width: 120,
    row: 4,
    order: 1,
  },
];

export function initQueryDefaultsAi(queryRefs: {
  codeTypeId_q: Ref<string>;
  prjFileTypeId_q: Ref<string>;
  fileDirName_q: Ref<string>;
  fileName_q: Ref<string>;
  extension_q: Ref<string>;
  tabId_q: Ref<string>;
  isBelongsCurrCMPrj_q: Ref<string>;
  isGeneCode_q: Ref<string>;
  isCanDel_q: Ref<string>;
  inUse_q: Ref<string>;
  isExistFile_q: Ref<string>;
  prjId_q: Ref<string>;
  cmPrjId_q: Ref<string>;
}) {
  queryRefs.codeTypeId_q.value = '0';
  queryRefs.prjFileTypeId_q.value = '0';
  queryRefs.fileDirName_q.value = '';
  queryRefs.fileName_q.value = '';
  queryRefs.extension_q.value = '';
  queryRefs.tabId_q.value = '0';
  queryRefs.isBelongsCurrCMPrj_q.value = '0';
  queryRefs.isGeneCode_q.value = '0';
  queryRefs.isCanDel_q.value = '0';
  queryRefs.inUse_q.value = '0';
  queryRefs.isExistFile_q.value = '0';
  queryRefs.prjId_q.value = '';
  queryRefs.cmPrjId_q.value = '';
}

export async function loadQueryOptionsAi() {
  const [arrvCodeType_Sim, arrPrjFileType, arrvPrjTab_Sim] = await Promise.all([
    vCodeType_Sim_GetArrvCodeType_SimByProgLangTypeId(ProgLangTypeId_Static.value),
    PrjFileType_GetArrPrjFileType(),
    vPrjTab_Sim_GetArrvPrjTab_SimByCmPrjId(CmPrjId_Local.value, PrjId_Session.value),
  ]);
  return { arrvCodeType_Sim, arrPrjFileType, arrvPrjTab_Sim };
}

export async function loadFeatureOptionsAi() {
  return {};
}

export function getQueryRowsAi() {
  const row1 = FILERESOURCE_QUERY_SPECS_AI.filter(
    (x) => x.row === 1 && x.visibleInQuery !== false,
  ).sort((a, b) => a.order - b.order);
  const row2 = FILERESOURCE_QUERY_SPECS_AI.filter(
    (x) => x.row === 2 && x.visibleInQuery !== false,
  ).sort((a, b) => a.order - b.order);
  return { row1, row2 };
}
