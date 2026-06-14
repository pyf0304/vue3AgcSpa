import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { SortFun } from '@/ts/PubFun/clsCommFunc4Web';
import { clsPrjFileTypeEN } from '@/ts/L0Entity/ResourceMan/clsPrjFileTypeEN';
import { TableColumnSpec } from '@/viewsBase/common/TableSpecColumn';

/** Ai 列规格：复用通用表列规格。 */
export type PrjFileTypeColumnSpecAi = TableColumnSpec;

/** 列定义主表：通过 includeInList/includeInExport 控制最终用途。 */
export const PRJFILETYPE_COLUMN_SPECS_AI: Array<PrjFileTypeColumnSpecAi> = [
  {
    fldName: clsPrjFileTypeEN.con_OrderNum,
    fieldSource: 'entity',
    colHeader: '序号',
    sortBy: 'orderNum',
    tdClass: 'text-right',
    orderNum: 2,
    includeInList: true,
    includeInExport: true,
  },
  {
    fldName: clsPrjFileTypeEN.con_PrjFileTypeId,
    fieldSource: 'entity',
    colHeader: '项目文件类型Id',
    sortBy: 'prjFileTypeId',
    tdClass: 'text-left',
    orderNum: 3,
    includeInList: true,
    includeInExport: true,
  },
  {
    fldName: clsPrjFileTypeEN.con_PrjFileTypeName,
    fieldSource: 'entity',
    colHeader: '工程文件类型名',
    sortBy: 'prjFileTypeName',
    tdClass: 'text-left',
    orderNum: 4,
    includeInList: true,
    includeInExport: true,
  },
  {
    fldName: clsPrjFileTypeEN.con_PrjFileTypeENName,
    fieldSource: 'entity',
    colHeader: '工程文件类型英文名',
    sortBy: 'prjFileTypeENName',
    tdClass: 'text-left',
    orderNum: 5,
    includeInList: true,
    includeInExport: true,
  },
  {
    fldName: clsPrjFileTypeEN.con_InUse,
    fieldSource: 'entity',
    colHeader: '是否在用',
    sortBy: 'inUse',
    tdClass: 'text-left',
    orderNum: 6,
    includeInList: true,
    includeInExport: true,
  },
  {
    fldName: clsPrjFileTypeEN.con_UpdDate,
    fieldSource: 'entity',
    colHeader: '修改日期',
    sortBy: 'updDate',
    tdClass: 'text-left',
    orderNum: 7,
    includeInList: true,
    includeInExport: true,
  },
  {
    fldName: clsPrjFileTypeEN.con_Memo,
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
function toDataColumn(spec: PrjFileTypeColumnSpecAi): clsDataColumn {
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
    ...PRJFILETYPE_COLUMN_SPECS_AI.filter((x) => x.includeInList).map(toDataColumn),
  ];
}

/** 获取导出列规格。 */
export function getExportColumnSpecsAi(): Array<PrjFileTypeColumnSpecAi> {
  return PRJFILETYPE_COLUMN_SPECS_AI.filter((x) => x.includeInExport);
}
