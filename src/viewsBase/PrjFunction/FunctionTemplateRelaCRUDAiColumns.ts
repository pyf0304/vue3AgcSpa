import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { SortFun } from '@/ts/PubFun/clsCommFunc4Web';
import { clsFunctionTemplateRelaEN } from '@/ts/L0Entity/PrjFunction/clsFunctionTemplateRelaEN';
import { clsFunctionTemplateRelaENEx } from '@/ts/L0Entity/PrjFunction/clsFunctionTemplateRelaENEx';
import { TableColumnSpec } from '@/viewsBase/common/TableSpecColumn';

/** Ai 列规格：复用通用表列规格。 */
export type FunctionTemplateRelaColumnSpecAi = TableColumnSpec;

/** 列定义主表：通过 includeInList/includeInExport 控制最终用途。 */
export const FUNCTIONTEMPLATERELA_COLUMN_SPECS_AI: Array<FunctionTemplateRelaColumnSpecAi> = [
  {
    fldName: clsFunctionTemplateRelaEN.con_OrderNum,
    fieldSource: 'entity',
    colHeader: '序号',
    sortBy: 'orderNum',
    tdClass: 'text-right',
    orderNum: 2,
    includeInList: true,
    includeInExport: true,
  },
  {
    fldName: clsFunctionTemplateRelaENEx.con_FunctionTemplateName,
    fieldSource: 'related',
    colHeader: '函数模板名',
    sortBy: 'functionTemplateName|Ex',
    tdClass: 'text-left',
    orderNum: 3,
    includeInList: true,
    includeInExport: true,
  },
  {
    fldName: clsFunctionTemplateRelaENEx.con_ProgLangTypeSimName,
    fieldSource: 'related',
    colHeader: '语言',
    sortBy: 'progLangTypeSimName|Ex',
    tdClass: 'text-left',
    orderNum: 4,
    includeInList: true,
    includeInExport: true,
  },
  {
    fldName: clsFunctionTemplateRelaENEx.con_CodeTypeSimName,
    fieldSource: 'related',
    colHeader: '代码类型',
    sortBy: 'codeTypeSimName|Ex',
    tdClass: 'text-left',
    orderNum: 5,
    includeInList: true,
    includeInExport: true,
  },
  {
    fldName: clsFunctionTemplateRelaENEx.con_FuncCodeTypeName,
    fieldSource: 'related',
    colHeader: '函数代码类型',
    sortBy: 'funcCodeTypeName|Ex',
    tdClass: 'text-left',
    orderNum: 6,
    includeInList: true,
    includeInExport: true,
  },
  {
    fldName: clsFunctionTemplateRelaEN.con_FuncId4GC,
    fieldSource: 'entity',
    colHeader: '函数ID',
    sortBy: 'funcId4GC',
    tdClass: 'text-left',
    orderNum: 7,
    includeInList: true,
    includeInExport: true,
  },
  {
    fldName: clsFunctionTemplateRelaENEx.con_FuncName,
    fieldSource: 'related',
    colHeader: '函数名',
    sortBy: 'funcName|Ex',
    tdClass: 'text-left',
    orderNum: 8,
    includeInList: true,
    includeInExport: true,
  },
  {
    fldName: clsFunctionTemplateRelaENEx.con_FuncName4Code,
    fieldSource: 'related',
    colHeader: '函数名4Code',
    sortBy: 'funcName4Code|Ex',
    tdClass: 'text-left',
    orderNum: 9,
    includeInList: true,
    includeInExport: true,
  },
  {
    fldName: clsFunctionTemplateRelaEN.con_IsGeneCode,
    fieldSource: 'entity',
    colHeader: '生成代码?',
    sortBy: 'isGeneCode',
    tdClass: 'text-left',
    orderNum: 10,
    includeInList: true,
    includeInExport: true,
  },
  {
    fldName: clsFunctionTemplateRelaENEx.con_RegionTypeName,
    fieldSource: 'related',
    colHeader: '区域类型',
    sortBy: 'regionTypeName|Ex',
    tdClass: 'text-left',
    orderNum: 11,
    includeInList: true,
    includeInExport: true,
  },
  {
    fldName: clsFunctionTemplateRelaENEx.con_DateTimeSim,
    fieldSource: 'related',
    colHeader: '简化日期时间',
    sortBy: 'updDate',
    tdClass: 'text-left',
    orderNum: 11,
    includeInList: true,
    includeInExport: true,
  },
  {
    fldName: clsFunctionTemplateRelaEN.con_UpdUser,
    fieldSource: 'entity',
    colHeader: '修改者',
    sortBy: 'updUser',
    tdClass: 'text-left',
    orderNum: 12,
    includeInList: true,
    includeInExport: true,
  },
  {
    fldName: clsFunctionTemplateRelaEN.con_Memo,
    fieldSource: 'entity',
    colHeader: '说明',
    sortBy: 'memo',
    tdClass: 'text-left',
    orderNum: 13,
    includeInList: true,
    includeInExport: true,
  },
];

/** 把规格对象转换为前端表格列对象。 */
function toDataColumn(spec: FunctionTemplateRelaColumnSpecAi): clsDataColumn {
  return {
    fldName: spec.fldName,
    sortBy: spec.sortBy,
    sortFun: SortFun,
    getDataSource: '',
    colHeader: spec.colHeader,
    text: '',
    tdClass: spec.tdClass,
    columnType: 'Label',
    orderNum: spec.orderNum,
    funcName: (strKey: string, strText: string) => {
      console.log(strKey, strText);
      return new HTMLElement();
    },
  };
}

/** 获取列表列（包含首列复选框）。 */
export function getListColumnsAi(): Array<clsDataColumn> {
  const checkboxColumn: clsDataColumn = {
    fldName: '',
    sortBy: '',
    sortFun: SortFun,
    getDataSource: '',
    colHeader: '',
    text: '',
    tdClass: 'text-left',
    columnType: 'CheckBox',
    orderNum: 1,
    funcName: (strKey: string, strText: string) => {
      console.log(strKey, strText);
      return new HTMLElement();
    },
  };

  return [
    checkboxColumn,
    ...FUNCTIONTEMPLATERELA_COLUMN_SPECS_AI.filter((x) => x.includeInList).map(toDataColumn),
  ];
}

/** 获取导出列规格。 */
export function getExportColumnSpecsAi(): Array<FunctionTemplateRelaColumnSpecAi> {
  return FUNCTIONTEMPLATERELA_COLUMN_SPECS_AI.filter((x) => x.includeInExport);
}
