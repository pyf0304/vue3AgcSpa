import { TableCommandSpec } from '@/viewsBase/common/TableSpecCommand';
import { vCodeType_Sim_GetArrvCodeType_SimByProgLangTypeId } from '@/ts/L3ForWApi/GeneCode/clsvCodeType_SimWApi';
import { CTRelationType_GetArrCTRelationType } from '@/ts/L3ForWApi/GeneCode/clsCTRelationTypeWApi';
import { ProgLangTypeId_Static } from '@/views/GeneCode/GC_CodeTypeRelationVueShare';

/** Ai 场景下可用的命令标识。 */
export type GC_CodeTypeRelationCommandIdAi =
  | 'query'
  | 'create'
  | 'update'
  | 'delete'
  | 'copy'
  | 'export'
  | 'setChildCodeType'
  | 'setCtRelationType';

/** Ai 命令配置：复用通用表命令结构并扩展辅助控件信息。 */
export type GC_CodeTypeRelationCommandSpecAi = TableCommandSpec<GC_CodeTypeRelationCommandIdAi> & {
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
export const G_C__CODE_TYPE_RELATION_COMMAND_SPECS_AI: Array<GC_CodeTypeRelationCommandSpecAi> = [
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
    id: 'copy',
    region: 'feature',
    text: '复制',
    elementId: 'btnCopy_Ai',
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
    id: 'setChildCodeType',
    region: 'feature',
    text: 'btnSetChildCodeTypeId',
    elementId: 'btnSetChildCodeType_Ai',
    btnClass: 'btn btn-outline-info btn-sm text-nowrap',
    needAuxControl: true,
    auxControlId: 'ddlChildCodeType_SetFldValue',
    auxControlType: 'select',
    auxControlOptionsKey: 'vCodeType_Sim',
    fieldName: 'ChildCodeTypeId',
    fieldNameCamel: 'childCodeTypeId',
  },
  {
    id: 'setCtRelationType',
    region: 'feature',
    text: 'btnSetCTRelationTypeId',
    elementId: 'btnSetCtRelationType_Ai',
    btnClass: 'btn btn-outline-info btn-sm text-nowrap',
    needAuxControl: true,
    auxControlId: 'ddlCtRelationType_SetFldValue',
    auxControlType: 'select',
    auxControlOptionsKey: 'cTRelationType',
    fieldName: 'CtRelationTypeId',
    fieldNameCamel: 'ctRelationTypeId',
  },
];

/** 获取查询区命令。 */
export function getQueryCommandsAi(): Array<GC_CodeTypeRelationCommandSpecAi> {
  return G_C__CODE_TYPE_RELATION_COMMAND_SPECS_AI.filter(
    (x) => x.region === 'query' && x.visible !== false,
  );
}

/** 获取功能区命令。 */
export function getFeatureCommandsAi(): Array<GC_CodeTypeRelationCommandSpecAi> {
  return G_C__CODE_TYPE_RELATION_COMMAND_SPECS_AI.filter(
    (x) => x.region === 'feature' && x.visible !== false,
  );
}

export async function loadFeatureOptionsAi() {
  const [arrvCodeType_Sim, arrCTRelationType] = await Promise.all([
    vCodeType_Sim_GetArrvCodeType_SimByProgLangTypeId(ProgLangTypeId_Static.value),
    CTRelationType_GetArrCTRelationType(),
  ]);
  return { arrvCodeType_Sim, arrCTRelationType };
}
