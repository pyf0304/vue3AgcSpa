export type TableCommandRegion = 'query' | 'feature';

/** 所有表界面通用的命令配置结构。 */
export interface TableCommandSpec<TCommandId extends string = string> {
  /** 命令唯一标识。 */
  id: TCommandId;
  /** 命令所在区域：查询区或功能区。 */
  region: TableCommandRegion;
  /** 按钮显示文本。 */
  text: string;
  /** 按钮元素ID。 */
  elementId: string;
  /** 按钮样式类名。 */
  btnClass: string;
  /** 是否显示该命令（默认显示）。 */
  visible?: boolean;
  /** 是否在命令按钮左侧展示辅助控件。 */
  needAuxControl?: boolean;
}
