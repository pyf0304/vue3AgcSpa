import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { SortFun } from '@/ts/PubFun/clsCommFunc4Web';
import { clsFunctionTemplateEN } from '@/ts/L0Entity/PrjFunction/clsFunctionTemplateEN';
import { clsFunctionTemplateENEx } from '@/ts/L0Entity/PrjFunction/clsFunctionTemplateENEx';
import { TableColumnSpec } from '@/viewsBase/common/TableSpecColumn';

/** Ai 列规格：复用通用表列规格。 */
export type FunctionTemplateColumnSpecAi = TableColumnSpec;

/** 列定义主表：通过 includeInList/includeInExport 控制最终用途。 */
export const FUNCTIONTEMPLATE_COLUMN_SPECS_AI: Array<FunctionTemplateColumnSpecAi> = [
  {
    fldName: clsFunctionTemplateEN.con_FunctionTemplateId,
    fieldSource: 'entity',
    colHeader: '函数模板Id',
    sortBy: 'functionTemplateId',
    tdClass: 'text-left',
    orderNum: 2,
    includeInList: true,
    includeInExport: true,
  },
  {
    fldName: clsFunctionTemplateEN.con_FunctionTemplateName,
    fieldSource: 'entity',
    colHeader: '函数模板名',
    sortBy: 'functionTemplateName',
    tdClass: 'text-left',
    orderNum: 3,
    includeInList: true,
    includeInExport: true,
  },
  {
    fldName: clsFunctionTemplateEN.con_FunctionTemplateENName,
    fieldSource: 'entity',
    colHeader: '函数模板英文名',
    sortBy: 'functionTemplateENName',
    tdClass: 'text-left',
    orderNum: 4,
    includeInList: true,
    includeInExport: true,
  },
  {
    fldName: clsFunctionTemplateENEx.con_ProgLangTypeName,
    fieldSource: 'related',
    colHeader: '编程语言类型名',
    sortBy: 'progLangTypeName',
    tdClass: 'text-left',
    orderNum: 5,
    includeInList: false,
    includeInExport: false,
  },
  {
    fldName: clsFunctionTemplateEN.con_UpdUser,
    fieldSource: 'entity',
    colHeader: '修改者',
    sortBy: 'updUser',
    tdClass: 'text-left',
    orderNum: 6,
    includeInList: true,
    includeInExport: true,
  },
  {
    fldName: clsFunctionTemplateENEx.con_DateTimeSim,
    fieldSource: 'related',
    colHeader: '修改日期',
    sortBy: 'dateTimeSim',
    tdClass: 'text-left',
    orderNum: 7,
    includeInList: true,
    includeInExport: false,
  },
  {
    fldName: clsFunctionTemplateEN.con_Memo,
    fieldSource: 'entity',
    colHeader: '说明',
    sortBy: 'memo',
    tdClass: 'text-left',
    orderNum: 8,
    includeInList: true,
    includeInExport: true,
  },
];

/** 把规格对象转换为前端表格列对象。 */
function toDataColumn(spec: FunctionTemplateColumnSpecAi): clsDataColumn {
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
    ...FUNCTIONTEMPLATE_COLUMN_SPECS_AI.filter((x) => x.includeInList).map(toDataColumn),
  ];
}

/** 获取导出列规格。 */
export function getExportColumnSpecsAi(): Array<FunctionTemplateColumnSpecAi> {
  return FUNCTIONTEMPLATE_COLUMN_SPECS_AI.filter((x) => x.includeInExport);
}
