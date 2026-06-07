import { TableCommandSpec } from '@/viewsBase/common/TableSpecCommand';

/** Ai 场景下可用的命令标识。 */
export type CMProjectAppRelaCommandIdAi =
  | 'query'
  | 'create'
  | 'update'
  | 'delete'
  | 'export'
;

/** Ai 命令配置：复用通用表命令结构并扩展辅助控件信息。 */
export type CMProjectAppRelaCommandSpecAi = TableCommandSpec<CMProjectAppRelaCommandIdAi> & {
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
export const C_M_PROJECT_APP_RELA_COMMAND_SPECS_AI: Array<CMProjectAppRelaCommandSpecAi> = [
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
    id: 'delete',
    region: 'feature',
    text: '删除',
    elementId: 'btnDelete_Ai',
    btnClass: 'btn btn-outline-info btn-sm text-nowrap',
  },
  {
    id: 'export',
    region: 'feature',
    text: '导出Excel',
    elementId: 'btnExportExcel_Ai',
    btnClass: 'btn btn-outline-info btn-sm text-nowrap',
  }
];

/** 获取查询区命令。 */
export function getQueryCommandsAi(): Array<CMProjectAppRelaCommandSpecAi> {
  return C_M_PROJECT_APP_RELA_COMMAND_SPECS_AI.filter((x) => x.region === 'query' && x.visible !== false);
}

/** 获取功能区命令。 */
export function getFeatureCommandsAi(): Array<CMProjectAppRelaCommandSpecAi> {
  return C_M_PROJECT_APP_RELA_COMMAND_SPECS_AI.filter(
    (x) => x.region === 'feature' && x.visible !== false,
  );
}