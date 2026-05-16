import { TableCommandSpec } from '@/viewsBase/common/TableSpecCommand';

/** Ai 场景下可用的命令标识。 */
export type FunctionTemplateCommandIdAi =
  | 'query'
  | 'create'
  | 'update'
  | 'delete'
  | 'export'
  | 'query';

/** Ai 命令配置：复用通用表命令结构。 */
export type FunctionTemplateCommandSpecAi = TableCommandSpec<FunctionTemplateCommandIdAi>;

/** Ai 命令清单：用于统一渲染查询区与功能区按钮。 */
export const FUNCTION_TEMPLATE_COMMAND_SPECS_AI: Array<FunctionTemplateCommandSpecAi> = [
  {
    id: 'query',
    region: 'query',
    text: '查询',
    elementId: 'btnQuery_Ai4',
    btnClass: 'btn btn-outline-warning text-nowrap',
  },
  {
    id: 'create',
    region: 'feature',
    text: '添加',
    elementId: 'btnCreate_Ai4',
    btnClass: 'btn btn-outline-info btn-sm text-nowrap',
  },
  {
    id: 'update',
    region: 'feature',
    text: '修改',
    elementId: 'btnUpdate_Ai4',
    btnClass: 'btn btn-outline-info btn-sm text-nowrap',
  },
  {
    id: 'delete',
    region: 'feature',
    text: '删除',
    elementId: 'btnDelete_Ai4',
    btnClass: 'btn btn-outline-info btn-sm text-nowrap',
  },
  {
    id: 'export',
    region: 'feature',
    text: '导出Excel',
    elementId: 'btnExportExcel_Ai4',
    btnClass: 'btn btn-outline-info btn-sm text-nowrap',
  },
  {
    id: 'query',
    region: 'feature',
    text: '查询',
    elementId: 'btnQuery_Ai4',
    btnClass: 'btn btn-outline-warning text-nowrap',
  },
];

/** 获取查询区命令。 */
export function getQueryCommandsAi(): Array<FunctionTemplateCommandSpecAi> {
  return FUNCTION_TEMPLATE_COMMAND_SPECS_AI.filter(
    (x) => x.region === 'query' && x.visible !== false,
  );
}

/** 获取功能区命令。 */
export function getFeatureCommandsAi(): Array<FunctionTemplateCommandSpecAi> {
  return FUNCTION_TEMPLATE_COMMAND_SPECS_AI.filter(
    (x) => x.region === 'feature' && x.visible !== false,
  );
}
