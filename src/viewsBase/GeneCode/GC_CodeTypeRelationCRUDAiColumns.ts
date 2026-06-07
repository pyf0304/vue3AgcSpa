import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { SortFun } from '@/ts/PubFun/clsCommFunc4Web';
import { clsGC_CodeTypeRelationEN } from '@/ts/L0Entity/GeneCode/clsGC_CodeTypeRelationEN';
import { clsGC_CodeTypeRelationENEx } from '@/ts/L0Entity/GeneCode/clsGC_CodeTypeRelationENEx';
import { TableColumnSpec } from '@/viewsBase/common/TableSpecColumn';

/** Ai 列规格：复用通用表列规格。 */
export type GC_CodeTypeRelationColumnSpecAi = TableColumnSpec;

/** 列定义主表：通过 includeInList/includeInExport 控制最终用途。 */
export const GC_CODETYPERELATION_COLUMN_SPECS_AI: Array<GC_CodeTypeRelationColumnSpecAi> = [
  {
    fldName: clsGC_CodeTypeRelationENEx.con_ParentCodeTypeName,
    fieldSource: 'related',
    colHeader: '父代码类型名',
    sortBy: 'parentCodeTypeName|Ex',
    tdClass: 'text-left',
    orderNum: 2,
    includeInList: true,
    includeInExport: true,
  },
  {
    fldName: clsGC_CodeTypeRelationENEx.con_RelationTypeName,
    fieldSource: 'related',
    colHeader: '关系类型名',
    sortBy: 'relationTypeName|Ex',
    tdClass: 'text-left',
    orderNum: 3,
    includeInList: true,
    includeInExport: true,
  },
  {
    fldName: clsGC_CodeTypeRelationENEx.con_ChildCodeTypeName,
    fieldSource: 'related',
    colHeader: '子代码类型名',
    sortBy: 'childCodeTypeName|Ex',
    tdClass: 'text-left',
    orderNum: 4,
    includeInList: true,
    includeInExport: true,
  },
  {
    fldName: clsGC_CodeTypeRelationENEx.con_ArrowType,
    fieldSource: 'related',
    colHeader: '箭头类型',
    sortBy: 'arrowType|Ex',
    tdClass: 'text-left',
    orderNum: 6,
    includeInList: true,
    includeInExport: true,
  },
  {
    fldName: clsGC_CodeTypeRelationEN.con_Description,
    fieldSource: 'entity',
    colHeader: '描述',
    sortBy: 'description',
    tdClass: 'text-left',
    orderNum: 7,
    includeInList: true,
    includeInExport: true,
  },
  {
    fldName: clsGC_CodeTypeRelationEN.con_UpdDate,
    fieldSource: 'entity',
    colHeader: '修改日期',
    sortBy: 'updDate',
    tdClass: 'text-left',
    orderNum: 8,
    includeInList: true,
    includeInExport: true,
  },
  {
    fldName: clsGC_CodeTypeRelationEN.con_UpdUser,
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
function toDataColumn(spec: GC_CodeTypeRelationColumnSpecAi): clsDataColumn {
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
    ...GC_CODETYPERELATION_COLUMN_SPECS_AI.filter((x) => x.includeInList).map(toDataColumn),
  ];
}

/** 获取导出列规格。 */
export function getExportColumnSpecsAi(): Array<GC_CodeTypeRelationColumnSpecAi> {
  return GC_CODETYPERELATION_COLUMN_SPECS_AI.filter((x) => x.includeInExport);
}
