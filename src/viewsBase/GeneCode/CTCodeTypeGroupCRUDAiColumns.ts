import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { SortFun } from '@/ts/PubFun/clsCommFunc4Web';
import { clsCTCodeTypeGroupEN } from '@/ts/L0Entity/GeneCode/clsCTCodeTypeGroupEN';
import { clsCTCodeTypeGroupENEx } from '@/ts/L0Entity/GeneCode/clsCTCodeTypeGroupENEx';
import { TableColumnSpec } from '@/viewsBase/common/TableSpecColumn';

/** Ai 列规格：复用通用表列规格。 */
export type CTCodeTypeGroupColumnSpecAi = TableColumnSpec;

/** 列定义主表：通过 includeInList/includeInExport 控制最终用途。 */
export const CTCODETYPEGROUP_COLUMN_SPECS_AI: Array<CTCodeTypeGroupColumnSpecAi> = [
  {
    fldName: clsCTCodeTypeGroupEN.con_OrderNum,
    fieldSource: 'entity',
    colHeader: '序号',
    sortBy: 'orderNum',
    tdClass: 'text-right',
    orderNum: 2,
    includeInList: true,
    includeInExport: true,
  },
  {
    fldName: clsCTCodeTypeGroupENEx.con_ApplicationTypeName,
    fieldSource: 'related',
    colHeader: '应用类型',
    sortBy: 'applicationTypeName|Ex',
    tdClass: 'text-right',
    orderNum: 3,
    includeInList: true,
    includeInExport: true,
  },
  {
    fldName: clsCTCodeTypeGroupEN.con_CtGroupId,
    fieldSource: 'entity',
    colHeader: 'Ct组Id',
    sortBy: 'ctGroupId',
    tdClass: 'text-left',
    orderNum: 4,
    includeInList: true,
    includeInExport: true,
  },
  {
    fldName: clsCTCodeTypeGroupEN.con_GroupName,
    fieldSource: 'entity',
    colHeader: '组名',
    sortBy: 'groupName',
    tdClass: 'text-left',
    orderNum: 5,
    includeInList: true,
    includeInExport: true,
  },
  {
    fldName: clsCTCodeTypeGroupEN.con_GroupENName,
    fieldSource: 'entity',
    colHeader: '组英文名',
    sortBy: 'groupENName',
    tdClass: 'text-left',
    orderNum: 6,
    includeInList: true,
    includeInExport: true,
  },
  {
    fldName: clsCTCodeTypeGroupEN.con_Description,
    fieldSource: 'entity',
    colHeader: '描述',
    sortBy: 'description',
    tdClass: 'text-left',
    orderNum: 7,
    includeInList: true,
    includeInExport: true,
  },
  {
    fldName: clsCTCodeTypeGroupEN.con_InUse,
    fieldSource: 'entity',
    colHeader: '是否在用',
    sortBy: 'inUse',
    tdClass: 'text-left',
    orderNum: 8,
    includeInList: true,
    includeInExport: true,
  },
  {
    fldName: clsCTCodeTypeGroupEN.con_UpdDate,
    fieldSource: 'entity',
    colHeader: '修改日期',
    sortBy: 'updDate',
    tdClass: 'text-left',
    orderNum: 9,
    includeInList: true,
    includeInExport: true,
  },
  {
    fldName: clsCTCodeTypeGroupEN.con_UpdUser,
    fieldSource: 'entity',
    colHeader: '修改者',
    sortBy: 'updUser',
    tdClass: 'text-left',
    orderNum: 10,
    includeInList: true,
    includeInExport: true,
  },
];

/** 把规格对象转换为前端表格列对象。 */
function toDataColumn(spec: CTCodeTypeGroupColumnSpecAi): clsDataColumn {
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
    ...CTCODETYPEGROUP_COLUMN_SPECS_AI.filter((x) => x.includeInList).map(toDataColumn),
  ];
}

/** 获取导出列规格。 */
export function getExportColumnSpecsAi(): Array<CTCodeTypeGroupColumnSpecAi> {
  return CTCODETYPEGROUP_COLUMN_SPECS_AI.filter((x) => x.includeInExport);
}
