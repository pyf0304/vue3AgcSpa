import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { SortFun } from '@/ts/PubFun/clsCommFunc4Web';
import { clsFileResourceEN } from '@/ts/L0Entity/ResourceMan/clsFileResourceEN';
import { clsFileResourceENEx } from '@/ts/L0Entity/ResourceMan/clsFileResourceENEx';
import { TableColumnSpec } from '@/viewsBase/common/TableSpecColumn';

/** Ai 列规格：复用通用表列规格。 */
export type FileResourceColumnSpecAi = TableColumnSpec;

/** 列定义主表：通过 includeInList/includeInExport 控制最终用途。 */
export const FILERESOURCE_COLUMN_SPECS_AI: Array<FileResourceColumnSpecAi> = [
  {
    fldName: clsFileResourceEN.con_FileResourceId,
    fieldSource: 'entity',
    colHeader: 'Id',
    sortBy: 'fileResourceID',
    tdClass: 'text-right',
    orderNum: 2,
    includeInList: true,
    includeInExport: true,
  },
  {
    fldName: clsFileResourceEN.con_FileDirName,
    fieldSource: 'entity',
    colHeader: '文件目录名',
    sortBy: 'fileDirName',
    tdClass: 'text-left',
    orderNum: 3,
    includeInList: true,
    includeInExport: true,
  },
  {
    fldName: clsFileResourceEN.con_FileName,
    fieldSource: 'entity',
    colHeader: '文件名',
    sortBy: 'fileName',
    tdClass: 'text-left',
    orderNum: 4,
    includeInList: true,
    includeInExport: true,
  },
  {
    fldName: clsFileResourceEN.con_Extension,
    fieldSource: 'entity',
    colHeader: '扩展名',
    sortBy: 'extension',
    tdClass: 'text-left',
    orderNum: 5,
    includeInList: true,
    includeInExport: true,
  },
  {
    fldName: clsFileResourceENEx.con_CodeTypeSimName,
    fieldSource: 'related',
    colHeader: '简称',
    sortBy: 'codeTypeSimName|Ex',
    tdClass: 'text-left',
    orderNum: 6,
    includeInList: true,
    includeInExport: true,
  },
  {
    fldName: clsFileResourceENEx.con_PrjFileTypeName,
    fieldSource: 'related',
    colHeader: '文件类型',
    sortBy: 'prjFileTypeName|Ex',
    tdClass: 'text-left',
    orderNum: 6,
    includeInList: true,
    includeInExport: true,
  },
  {
    fldName: clsFileResourceENEx.con_TabName,
    fieldSource: 'related',
    colHeader: '表名',
    sortBy: 'tabName|Ex',
    tdClass: 'text-left',
    orderNum: 7,
    includeInList: true,
    includeInExport: true,
  },
  {
    fldName: clsFileResourceEN.con_IsGeneCode,
    fieldSource: 'entity',
    colHeader: '生成代码?',
    sortBy: 'isGeneCode',
    tdClass: 'text-left',
    orderNum: 8,
    includeInList: true,
    includeInExport: true,
  },
  {
    fldName: clsFileResourceEN.con_IsBelongsCurrCMPrj,
    fieldSource: 'entity',
    colHeader: '本项目?',
    sortBy: 'isBelongsCurrCMPrj',
    tdClass: 'text-left',
    orderNum: 9,
    includeInList: true,
    includeInExport: true,
  },
  {
    fldName: clsFileResourceEN.con_IsCanDel,
    fieldSource: 'entity',
    colHeader: '可删除?',
    sortBy: 'isCanDel',
    tdClass: 'text-left',
    orderNum: 10,
    includeInList: true,
    includeInExport: true,
  },
  {
    fldName: clsFileResourceEN.con_FileLength,
    fieldSource: 'entity',
    colHeader: '文件长度',
    sortBy: 'fileLength',
    tdClass: 'text-right',
    orderNum: 11,
    includeInList: true,
    includeInExport: true,
  },
  {
    fldName: clsFileResourceEN.con_CreationTime,
    fieldSource: 'entity',
    colHeader: '建立时间',
    sortBy: 'creationTime',
    tdClass: 'text-left',
    orderNum: 12,
    includeInList: true,
    includeInExport: true,
  },
  {
    fldName: clsFileResourceEN.con_LastWriteTime,
    fieldSource: 'entity',
    colHeader: '修改日期',
    sortBy: 'lastWriteTime',
    tdClass: 'text-left',
    orderNum: 13,
    includeInList: true,
    includeInExport: true,
  },
  {
    fldName: clsFileResourceEN.con_InUse,
    fieldSource: 'entity',
    colHeader: '在用?',
    sortBy: 'inUse',
    tdClass: 'text-left',
    orderNum: 14,
    includeInList: true,
    includeInExport: true,
  },
  {
    fldName: clsFileResourceEN.con_IsExistFile,
    fieldSource: 'entity',
    colHeader: '存在?',
    sortBy: 'isExistFile',
    tdClass: 'text-left',
    orderNum: 15,
    includeInList: true,
    includeInExport: true,
  },
  {
    fldName: clsFileResourceEN.con_IpAddress,
    fieldSource: 'entity',
    colHeader: '服务器',
    sortBy: 'ipAddress',
    tdClass: 'text-left',
    orderNum: 16,
    includeInList: true,
    includeInExport: true,
  },
];

/** 把规格对象转换为前端表格列对象。 */
function toDataColumn(spec: FileResourceColumnSpecAi): clsDataColumn {
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
    ...FILERESOURCE_COLUMN_SPECS_AI.filter((x) => x.includeInList).map(toDataColumn),
  ];
}

/** 获取导出列规格。 */
export function getExportColumnSpecsAi(): Array<FileResourceColumnSpecAi> {
  return FILERESOURCE_COLUMN_SPECS_AI.filter((x) => x.includeInExport);
}
