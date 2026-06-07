import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { SortFun } from '@/ts/PubFun/clsCommFunc4Web';
import { clsCTCodeTypeGroupRelaEN } from '@/ts/L0Entity/GeneCode/clsCTCodeTypeGroupRelaEN';
import { clsCTCodeTypeGroupRelaENEx } from '@/ts/L0Entity/GeneCode/clsCTCodeTypeGroupRelaENEx';
import { TableColumnSpec } from '@/viewsBase/common/TableSpecColumn';

/** Ai 列规格：复用通用表列规格。 */
export type CTCodeTypeGroupRelaColumnSpecAi = TableColumnSpec;

/** 列定义主表：通过 includeInList/includeInExport 控制最终用途。 */
export const CTCODETYPEGROUPRELA_COLUMN_SPECS_AI: Array<CTCodeTypeGroupRelaColumnSpecAi> = [
  {
    fldName: clsCTCodeTypeGroupRelaEN.con_OrderNum,
    fieldSource: 'entity',
    colHeader: '序号',
    sortBy: 'orderNum',
    tdClass: 'text-right',
    orderNum: 2,
    includeInList: true,
    includeInExport: true,
  },
  {
    fldName: clsCTCodeTypeGroupRelaEN.con_CtGroupId,
    fieldSource: 'entity',
    colHeader: 'Ct组Id',
    sortBy: 'ctGroupId',
    tdClass: 'text-left',
    orderNum: 3,
    includeInList: true,
    includeInExport: true,
  },
  {
    fldName: clsCTCodeTypeGroupRelaEN.con_CodeTypeId,
    fieldSource: 'entity',
    colHeader: '代码类型Id',
    sortBy: 'codeTypeId',
    tdClass: 'text-left',
    orderNum: 4,
    includeInList: true,
    includeInExport: true,
  },
  {
    fldName: clsCTCodeTypeGroupRelaENEx.con_GroupName,
    fieldSource: 'related',
    colHeader: '组名',
    sortBy: 'groupName|Ex',
    tdClass: 'text-left',
    orderNum: 5,
    includeInList: true,
    includeInExport: true,
  },
  {
    fldName: clsCTCodeTypeGroupRelaENEx.con_CodeTypeName,
    fieldSource: 'related',
    colHeader: '代码类型名',
    sortBy: 'codeTypeName|Ex',
    tdClass: 'text-left',
    orderNum: 6,
    includeInList: true,
    includeInExport: true,
  },
  {
    fldName: clsCTCodeTypeGroupRelaEN.con_IsMainGroup,
    fieldSource: 'entity',
    colHeader: 'IsMainGroup',
    sortBy: 'isMainGroup',
    tdClass: 'text-left',
    orderNum: 7,
    includeInList: true,
    includeInExport: true,
  },
  {
    fldName: clsCTCodeTypeGroupRelaEN.con_UpdDate,
    fieldSource: 'entity',
    colHeader: '修改日期',
    sortBy: 'updDate',
    tdClass: 'text-left',
    orderNum: 8,
    includeInList: true,
    includeInExport: true,
  },
  {
    fldName: clsCTCodeTypeGroupRelaEN.con_UpdUser,
    fieldSource: 'entity',
    colHeader: '修改者',
    sortBy: 'updUser',
    tdClass: 'text-left',
    orderNum: 9,
    includeInList: true,
    includeInExport: true,
  },
];

/** 把规格对象转换为前端表格列对象。 */
function toDataColumn(spec: CTCodeTypeGroupRelaColumnSpecAi): clsDataColumn {
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
    ...CTCODETYPEGROUPRELA_COLUMN_SPECS_AI.filter((x) => x.includeInList).map(toDataColumn),
  ];
}

/** 获取导出列规格。 */
export function getExportColumnSpecsAi(): Array<CTCodeTypeGroupRelaColumnSpecAi> {
  return CTCODETYPEGROUPRELA_COLUMN_SPECS_AI.filter((x) => x.includeInExport);
}
