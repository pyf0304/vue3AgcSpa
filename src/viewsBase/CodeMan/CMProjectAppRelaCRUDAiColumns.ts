import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { SortFun } from '@/ts/PubFun/clsCommFunc4Web';
import { clsCMProjectAppRelaEN } from '@/ts/L0Entity/CodeMan/clsCMProjectAppRelaEN';
import { clsCMProjectAppRelaENEx } from '@/ts/L0Entity/CodeMan/clsCMProjectAppRelaENEx';
import { TableColumnSpec } from '@/viewsBase/common/TableSpecColumn';

/** Ai 列规格：复用通用表列规格。 */
export type CMProjectAppRelaColumnSpecAi = TableColumnSpec;

/** 列定义主表：通过 includeInList/includeInExport 控制最终用途。 */
export const CMPROJECTAPPRELA_COLUMN_SPECS_AI: Array<CMProjectAppRelaColumnSpecAi> = [
  {
    fldName: clsCMProjectAppRelaEN.con_OrderNum,
    fieldSource: 'entity',
    colHeader: '序号',
    sortBy: 'orderNum',
    tdClass: 'text-right',
    orderNum: 2,
    includeInList: true,
    includeInExport: true,
  },
  {
    fldName: clsCMProjectAppRelaEN.con_CMProjectAppRelaId,
    fieldSource: 'entity',
    colHeader: 'Cm工程应用关系Id',
    sortBy: 'cMProjectAppRelaId',
    tdClass: 'text-right',
    orderNum: 3,
    includeInList: true,
    includeInExport: true,
  },
  {
    fldName: clsCMProjectAppRelaENEx.con_CmPrjName,
    fieldSource: 'related',
    colHeader: 'CM工程',
    sortBy: 'cmPrjName|Ex',
    tdClass: 'text-left',
    orderNum: 4,
    includeInList: true,
    includeInExport: true,
  },
  {
    fldName: clsCMProjectAppRelaENEx.con_ApplicationTypeName,
    fieldSource: 'related',
    colHeader: '应用类型',
    sortBy: 'applicationTypeName|Ex',
    tdClass: 'text-right',
    orderNum: 5,
    includeInList: true,
    includeInExport: true,
  },
  {
    fldName: clsCMProjectAppRelaEN.con_UpdDate,
    fieldSource: 'entity',
    colHeader: '修改日期',
    sortBy: 'updDate',
    tdClass: 'text-left',
    orderNum: 6,
    includeInList: true,
    includeInExport: true,
  },
  {
    fldName: clsCMProjectAppRelaEN.con_UpdUser,
    fieldSource: 'entity',
    colHeader: '修改者',
    sortBy: 'updUser',
    tdClass: 'text-left',
    orderNum: 7,
    includeInList: true,
    includeInExport: true,
  },
  {
    fldName: clsCMProjectAppRelaEN.con_Memo,
    fieldSource: 'entity',
    colHeader: '说明',
    sortBy: 'memo',
    tdClass: 'text-left',
    orderNum: 8,
    includeInList: true,
    includeInExport: true,
  }
];

/** 把规格对象转换为前端表格列对象。 */
function toDataColumn(spec: CMProjectAppRelaColumnSpecAi): clsDataColumn {
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
    ...CMPROJECTAPPRELA_COLUMN_SPECS_AI.filter((x) => x.includeInList).map(toDataColumn),
  ];
}

/** 获取导出列规格。 */
export function getExportColumnSpecsAi(): Array<CMProjectAppRelaColumnSpecAi> {
  return CMPROJECTAPPRELA_COLUMN_SPECS_AI.filter((x) => x.includeInExport);
}