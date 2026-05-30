import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { SortFun } from '@/ts/PubFun/clsCommFunc4Web';
import { clsFunction4GeneCodeEN } from '@/ts/L0Entity/PrjFunction/clsFunction4GeneCodeEN';
import { clsFunction4GeneCodeENEx } from '@/ts/L0Entity/PrjFunction/clsFunction4GeneCodeENEx';
import { TableColumnSpec } from '@/viewsBase/common/TableSpecColumn';

/** Ai 列规格：复用通用表列规格。 */
export type Function4GeneCodeColumnSpecAi = TableColumnSpec;

/** 列定义主表：通过 includeInList/includeInExport 控制最终用途。 */
export const FUNCTION4GENECODE_COLUMN_SPECS_AI: Array<Function4GeneCodeColumnSpecAi> = [
  {
    fldName: clsFunction4GeneCodeEN.con_OrderNum,
    fieldSource: 'entity',
    colHeader: '序号',
    sortBy: 'orderNum',
    tdClass: 'text-right',
    orderNum: 2,
    includeInList: true,
    includeInExport: true,
  },
  {
    fldName: clsFunction4GeneCodeEN.con_FuncId4GC,
    fieldSource: 'entity',
    colHeader: '函数ID',
    sortBy: 'funcId4GC',
    tdClass: 'text-left',
    orderNum: 3,
    includeInList: true,
    includeInExport: true,
  },
  {
    fldName: clsFunction4GeneCodeEN.con_FuncName,
    fieldSource: 'entity',
    colHeader: '函数名',
    sortBy: 'funcName',
    tdClass: 'text-left',
    orderNum: 4,
    includeInList: true,
    includeInExport: true,
  },
  {
    fldName: clsFunction4GeneCodeENEx.con_FeatureName,
    fieldSource: 'related',
    colHeader: '功能',
    sortBy: 'featureName|Ex',
    tdClass: 'text-left',
    orderNum: 5,
    includeInList: true,
    includeInExport: true,
  },
  {
    fldName: clsFunction4GeneCodeENEx.con_FuncName4Code,
    fieldSource: 'related',
    colHeader: '函数名4Code',
    sortBy: 'funcName4Code|Ex',
    tdClass: 'text-left',
    orderNum: 6,
    includeInList: true,
    includeInExport: true,
  },
  {
    fldName: clsFunction4GeneCodeENEx.con_FuncGCTypeName,
    fieldSource: 'related',
    colHeader: '生成对象类型',
    sortBy: 'funcGCTypeName|Ex',
    tdClass: 'text-left',
    orderNum: 7,
    includeInList: true,
    includeInExport: true,
  },
  {
    fldName: clsFunction4GeneCodeENEx.con_ProgLangTypeName,
    fieldSource: 'related',
    colHeader: '语言',
    sortBy: 'progLangTypeName|Ex',
    tdClass: 'text-left',
    orderNum: 8,
    includeInList: true,
    includeInExport: true,
  },
  {
    fldName: clsFunction4GeneCodeENEx.con_CodeTypeName,
    fieldSource: 'related',
    colHeader: '代码类型',
    sortBy: 'codeTypeName|Ex',
    tdClass: 'text-left',
    orderNum: 9,
    includeInList: true,
    includeInExport: true,
  },
  {
    fldName: clsFunction4GeneCodeENEx.con_SqlDsTypeName,
    fieldSource: 'related',
    colHeader: '数据源',
    sortBy: 'sqlDsTypeName|Ex',
    tdClass: 'text-left',
    orderNum: 10,
    includeInList: true,
    includeInExport: true,
  },
  {
    fldName: clsFunction4GeneCodeENEx.con_FuncTypeName,
    fieldSource: 'related',
    colHeader: '函数类型',
    sortBy: 'funcTypeName|Ex',
    tdClass: 'text-left',
    orderNum: 11,
    includeInList: true,
    includeInExport: true,
  },
  {
    fldName: clsFunction4GeneCodeEN.con_UsedTimes,
    fieldSource: 'entity',
    colHeader: '使用次数',
    sortBy: 'usedTimes',
    tdClass: 'text-right',
    orderNum: 12,
    includeInList: true,
    includeInExport: true,
  },
  {
    fldName: clsFunction4GeneCodeEN.con_InUse,
    fieldSource: 'entity',
    colHeader: '在用?',
    sortBy: 'inUse',
    tdClass: 'text-left',
    orderNum: 14,
    includeInList: true,
    includeInExport: true,
  },
];

/** 把规格对象转换为前端表格列对象。 */
function toDataColumn(spec: Function4GeneCodeColumnSpecAi): clsDataColumn {
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
    ...FUNCTION4GENECODE_COLUMN_SPECS_AI.filter((x) => x.includeInList).map(toDataColumn),
  ];
}

/** 获取导出列规格。 */
export function getExportColumnSpecsAi(): Array<Function4GeneCodeColumnSpecAi> {
  return FUNCTION4GENECODE_COLUMN_SPECS_AI.filter((x) => x.includeInExport);
}
