import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { SortFun } from '@/ts/PubFun/clsCommFunc4Web';
import { clsGCConstantPrjIdRelaEN } from '@/ts/L0Entity/GeneCode/clsGCConstantPrjIdRelaEN';
import { clsGCConstantPrjIdRelaENEx } from '@/ts/L0Entity/GeneCode/clsGCConstantPrjIdRelaENEx';
import { TableColumnSpec } from '@/viewsBase/common/TableSpecColumn';

/** Ai 列规格：复用通用表列规格。 */
export type GCConstantPrjIdRelaColumnSpecAi = TableColumnSpec;

/** 列定义主表：通过 includeInList/includeInExport 控制最终用途。 */
export const GCCONSTANTPRJIDRELA_COLUMN_SPECS_AI: Array<GCConstantPrjIdRelaColumnSpecAi> = [
  {
    fldName: clsGCConstantPrjIdRelaEN.con_ConstId,
    fieldSource: 'entity',
    colHeader: '常量Id',
    sortBy: 'constId',
    tdClass: 'text-left',
    orderNum: 2,
    includeInList: true,
    includeInExport: true,
  },
  {
    fldName: clsGCConstantPrjIdRelaENEx.con_ConstName,
    fieldSource: 'related',
    colHeader: '常量名',
    sortBy: 'constName|Ex',
    tdClass: 'text-left',
    orderNum: 3,
    includeInList: true,
    includeInExport: true,
  },
  {
    fldName: clsGCConstantPrjIdRelaENEx.con_DataTypeName,
    fieldSource: 'related',
    colHeader: '数据类型名称',
    sortBy: 'dataTypeName|Ex',
    tdClass: 'text-left',
    orderNum: 4,
    includeInList: true,
    includeInExport: true,
  },
  {
    fldName: clsGCConstantPrjIdRelaENEx.con_CsType,
    fieldSource: 'related',
    colHeader: 'CS类型',
    sortBy: 'csType|Ex',
    tdClass: 'text-left',
    orderNum: 5,
    includeInList: true,
    includeInExport: true,
  },
  {
    fldName: clsGCConstantPrjIdRelaENEx.con_TypeScriptType,
    fieldSource: 'related',
    colHeader: 'TypeScript类型',
    sortBy: 'typeScriptType|Ex',
    tdClass: 'text-left',
    orderNum: 6,
    includeInList: true,
    includeInExport: true,
  },
  {
    fldName: clsGCConstantPrjIdRelaEN.con_PrjId,
    fieldSource: 'entity',
    colHeader: '工程Id',
    sortBy: 'prjId',
    tdClass: 'text-left',
    orderNum: 7,
    includeInList: true,
    includeInExport: true,
  },
  {
    fldName: clsGCConstantPrjIdRelaENEx.con_PrjName,
    fieldSource: 'related',
    colHeader: '工程名称',
    sortBy: 'prjName|Ex',
    tdClass: 'text-left',
    orderNum: 8,
    includeInList: true,
    includeInExport: true,
  },
  {
    fldName: clsGCConstantPrjIdRelaEN.con_UpdUser,
    fieldSource: 'entity',
    colHeader: '修改者',
    sortBy: 'updUser',
    tdClass: 'text-left',
    orderNum: 9,
    includeInList: true,
    includeInExport: true,
  },
  {
    fldName: clsGCConstantPrjIdRelaENEx.con_DateTimeSim,
    fieldSource: 'related',
    colHeader: '日期',
    sortBy: 'dateTimeSim|Ex',
    tdClass: 'text-left',
    orderNum: 10,
    includeInList: true,
    includeInExport: true,
  },
  {
    fldName: clsGCConstantPrjIdRelaEN.con_Memo,
    fieldSource: 'entity',
    colHeader: '说明',
    sortBy: 'memo',
    tdClass: 'text-left',
    orderNum: 11,
    includeInList: true,
    includeInExport: true,
  },
];

/** 把规格对象转换为前端表格列对象。 */
function toDataColumn(spec: GCConstantPrjIdRelaColumnSpecAi): clsDataColumn {
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
    ...GCCONSTANTPRJIDRELA_COLUMN_SPECS_AI.filter((x) => x.includeInList).map(toDataColumn),
  ];
}

/** 获取导出列规格。 */
export function getExportColumnSpecsAi(): Array<GCConstantPrjIdRelaColumnSpecAi> {
  return GCCONSTANTPRJIDRELA_COLUMN_SPECS_AI.filter((x) => x.includeInExport);
}
