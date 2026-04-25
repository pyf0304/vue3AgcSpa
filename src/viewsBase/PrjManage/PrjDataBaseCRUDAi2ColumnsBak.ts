import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { SortFun } from '@/ts/PubFun/clsCommFunc4Web';
import { clsPrjDataBaseEN } from '@/ts/L0Entity/PrjManage/clsPrjDataBaseEN';
import { clsPrjDataBaseENEx } from '@/ts/L0Entity/PrjManage/clsPrjDataBaseENEx';
import { TableColumnSpec } from '@/viewsBase/common/TableSpecColumn';

/** Ai2 列规格：复用通用表列规格。 */
export type PrjDataBaseColumnSpecAi2 = TableColumnSpec;

/** 列定义主表：通过 includeInList/includeInExport 控制最终用途。 */
export const PRJ_DATABASE_COLUMN_SPECS_AI2: Array<PrjDataBaseColumnSpecAi2> = [
  {
    fldName: clsPrjDataBaseEN.con_PrjDataBaseId,
    fieldSource: 'entity',
    colHeader: '项目数据库Id',
    sortBy: 'prjDataBaseId',
    tdClass: 'text-left',
    orderNum: 2,
    includeInList: true,
    includeInExport: true,
  },
  {
    fldName: clsPrjDataBaseEN.con_PrjDataBaseName,
    fieldSource: 'entity',
    colHeader: '项目数据库名',
    sortBy: 'prjDataBaseName',
    tdClass: 'text-left',
    orderNum: 3,
    includeInList: true,
    includeInExport: true,
  },
  {
    fldName: clsPrjDataBaseEN.con_DataBaseName,
    fieldSource: 'entity',
    colHeader: '数据库名',
    sortBy: 'dataBaseName',
    tdClass: 'text-left',
    orderNum: 4,
    includeInList: true,
    includeInExport: true,
  },
  {
    fldName: clsPrjDataBaseEN.con_DatabaseOwner,
    fieldSource: 'entity',
    colHeader: '数据库拥有者',
    sortBy: 'databaseOwner',
    tdClass: 'text-left',
    orderNum: 5,
    includeInList: true,
    includeInExport: true,
  },
  {
    fldName: clsPrjDataBaseEN.con_DataBasePwd,
    fieldSource: 'entity',
    colHeader: '数据库的用户口令',
    sortBy: 'dataBasePwd',
    tdClass: 'text-left',
    orderNum: 6,
    includeInList: true,
    includeInExport: true,
  },
  {
    fldName: clsPrjDataBaseEN.con_IpAddress,
    fieldSource: 'entity',
    colHeader: '服务器',
    sortBy: 'ipAddress',
    tdClass: 'text-left',
    orderNum: 9,
    includeInList: true,
    includeInExport: true,
  },
  {
    fldName: clsPrjDataBaseEN.con_TableSpace,
    fieldSource: 'entity',
    colHeader: '表空间',
    sortBy: 'tableSpace',
    tdClass: 'text-left',
    orderNum: 11,
    includeInList: true,
    includeInExport: true,
  },
  {
    fldName: clsPrjDataBaseEN.con_UpdDate,
    fieldSource: 'entity',
    colHeader: '修改日期',
    sortBy: 'updDate',
    tdClass: 'text-left',
    orderNum: 14,
    includeInList: true,
    includeInExport: true,
  },
  {
    fldName: clsPrjDataBaseENEx.con_DataBaseTypeName,
    fieldSource: 'related',
    colHeader: '数据库类型名',
    sortBy: 'dataBaseTypeName',
    tdClass: 'text-left',
    orderNum: 19,
    includeInList: true,
    includeInExport: false,
  },
  {
    fldName: clsPrjDataBaseENEx.con_UseStateName,
    fieldSource: 'related',
    colHeader: '使用状态名称',
    sortBy: 'useStateName',
    tdClass: 'text-left',
    orderNum: 20,
    includeInList: true,
    includeInExport: false,
  },
];

/** 把规格对象转换为前端表格列对象。 */
function toDataColumn(spec: PrjDataBaseColumnSpecAi2): clsDataColumn {
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
export function getListColumnsAi2(): Array<clsDataColumn> {
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
    ...PRJ_DATABASE_COLUMN_SPECS_AI2.filter((x) => x.includeInList).map(toDataColumn),
  ];
}

/** 获取导出列规格。 */
export function getExportColumnSpecsAi2(): Array<PrjDataBaseColumnSpecAi2> {
  return PRJ_DATABASE_COLUMN_SPECS_AI2.filter((x) => x.includeInExport);
}
