import { TableCommandSpec } from '@/viewsBase/common/TableSpecCommand';

/** Ai4 场景下可用的命令标识。 */
export type PrjDataBaseCommandIdAi4 =
  | 'query'
  | 'export'
  | 'create'
  | 'update'
  | 'delete'
  | 'setUseState';

/** Ai4 命令配置：复用通用表命令结构。 */
export type PrjDataBaseCommandSpecAi4 = TableCommandSpec<PrjDataBaseCommandIdAi4>;

/** Ai4 命令清单：用于统一渲染查询区与功能区按钮。 */
export const PRJ_DATABASE_COMMAND_SPECS_AI4: Array<PrjDataBaseCommandSpecAi4> = [
  {
    id: 'query',
    region: 'query',
    text: '查询',
    elementId: 'btnQuery_Ai4',
    btnClass: 'btn btn-outline-warning text-nowrap',
  },
  {
    id: 'export',
    region: 'query',
    text: '导出Excel',
    elementId: 'btnExportExcel_Ai4',
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
    id: 'setUseState',
    region: 'feature',
    text: '设置使用状态',
    elementId: 'btnSetUseState_Ai4',
    btnClass: 'btn btn-outline-info btn-sm text-nowrap',
    needAuxControl: true,
  },
];

/** 获取查询区命令。 */
export function getQueryCommandsAi4(): Array<PrjDataBaseCommandSpecAi4> {
  return PRJ_DATABASE_COMMAND_SPECS_AI4.filter((x) => x.region === 'query' && x.visible !== false);
}

/** 获取功能区命令。 */
export function getFeatureCommandsAi4(): Array<PrjDataBaseCommandSpecAi4> {
  return PRJ_DATABASE_COMMAND_SPECS_AI4.filter(
    (x) => x.region === 'feature' && x.visible !== false,
  );
}
