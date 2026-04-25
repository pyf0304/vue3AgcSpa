/** 通用表列字段来源定义。 */
export type TableColumnFieldSource = 'entity' | 'related' | 'computed';

/** 通用表列规格：用于统一生成列表列和导出列。 */
export interface TableColumnSpec<TFieldName extends string = string> {
  /** 字段名（可来自实体字段、关联字段或计算字段）。 */
  fldName: TFieldName;
  /** 字段来源：entity=实体字段，related=关联/扩展字段，computed=运行期计算字段。 */
  fieldSource: TableColumnFieldSource;
  /** 列头显示文本。 */
  colHeader: string;
  /** 排序字段表达式。 */
  sortBy: string;
  /** 单元格样式类。 */
  tdClass: string;
  /** 列顺序号。 */
  orderNum: number;
  /** 是否在列表中显示。 */
  includeInList: boolean;
  /** 是否参与导出。 */
  includeInExport: boolean;
}
