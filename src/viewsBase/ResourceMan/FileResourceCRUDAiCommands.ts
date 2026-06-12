import { TableCommandSpec } from '@/viewsBase/common/TableSpecCommand';
import { PrjFileType_GetArrPrjFileType } from '@/ts/L3ForWApi/GeneCode/clsPrjFileTypeWApi';

/** Ai 场景下可用的命令标识。 */
export type FileResourceCommandIdAi =
  | 'query'
  | 'create'
  | 'update'
  | 'delete'
  | 'identifyFileType'
  | 'export'
  | 'export'
  | 'setPrjFileType';

/** Ai 命令配置：复用通用表命令结构并扩展辅助控件信息。 */
export type FileResourceCommandSpecAi = TableCommandSpec<FileResourceCommandIdAi> & {
  /** 辅助控件标签文本 */
  auxControlLabel?: string;
  /** 辅助控件ID（如下拉框ID） */
  auxControlId?: string;
  /** 辅助控件类型 */
  auxControlType?: 'select4Bool' | 'select' | 'text';
  /** 辅助控件选项键（用于获取数据源） */
  auxControlOptionsKey?: string;
  /** 字段名 */
  fieldName?: string;
  /** 驼峰式字段名 */
  fieldNameCamel?: string;
};

/** Ai 命令清单：用于统一渲染查询区与功能区按钮。 */
export const FILE_RESOURCE_COMMAND_SPECS_AI: Array<FileResourceCommandSpecAi> = [
  {
    id: 'query',
    region: 'query',
    text: '查询',
    elementId: 'btnQuery_Ai',
    btnClass: 'btn btn-outline-warning text-nowrap',
  },
  {
    id: 'create',
    region: 'feature',
    text: '添加',
    elementId: 'btnCreate_Ai',
    btnClass: 'btn btn-outline-info btn-sm text-nowrap',
  },
  {
    id: 'update',
    region: 'feature',
    text: '修改',
    elementId: 'btnUpdate_Ai',
    btnClass: 'btn btn-outline-info btn-sm text-nowrap',
  },
  {
    id: 'identifyFileType',
    region: 'feature',
    text: '识别类型并回写',
    elementId: 'btnIdentifyFileType_Ai',
    btnClass: 'btn btn-outline-info btn-sm text-nowrap',
    needAuxControl: true,
    auxControlLabel: '处理范围',
    auxControlType: 'select4Bool',
    auxControlId: 'ddlIdentifyFileTypeOnlyUnset_Ai',
  },
  {
    id: 'delete',
    region: 'feature',
    text: '删除',
    elementId: 'btnDelete_Ai',
    btnClass: 'btn btn-outline-info btn-sm text-nowrap',
  },
  // {
  //   id: 'identifyFileType',
  //   region: 'feature',
  //   text: '识别类型并回写',
  //   elementId: 'btnIdentifyFileType_Ai',
  //   btnClass: 'btn btn-outline-info btn-sm text-nowrap',
  // },
  {
    id: 'export',
    region: 'feature',
    text: '导出Excel',
    elementId: 'btnExportExcel_Ai',
    btnClass: 'btn btn-outline-info btn-sm text-nowrap',
  },
  {
    id: 'export',
    region: 'feature',
    text: '导出Excel',
    elementId: 'btnExportExcel_Ai',
    btnClass: 'btn btn-outline-info btn-sm text-nowrap',
  },
  {
    id: 'setPrjFileType',
    region: 'feature',
    text: 'btnSetPrjFileTypeId',
    elementId: 'btnSetPrjFileType_Ai',
    btnClass: 'btn btn-outline-info btn-sm text-nowrap',
    needAuxControl: true,
    auxControlId: 'ddlPrjFileType_SetFldValue',
    auxControlType: 'select',
    auxControlOptionsKey: 'prjFileType',
    fieldName: 'PrjFileTypeId',
    fieldNameCamel: 'prjFileTypeId',
  },
];

/** 获取查询区命令。 */
export function getQueryCommandsAi(): Array<FileResourceCommandSpecAi> {
  return FILE_RESOURCE_COMMAND_SPECS_AI.filter((x) => x.region === 'query' && x.visible !== false);
}

/** 获取功能区命令。 */
export function getFeatureCommandsAi(): Array<FileResourceCommandSpecAi> {
  return FILE_RESOURCE_COMMAND_SPECS_AI.filter(
    (x) => x.region === 'feature' && x.visible !== false,
  );
}

export async function loadFeatureOptionsAi() {
  const [arrPrjFileType] = await Promise.all([PrjFileType_GetArrPrjFileType()]);
  return { arrPrjFileType };
}
