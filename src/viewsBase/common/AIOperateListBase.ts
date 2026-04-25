import { clsPager } from '@/ts/PubFun/clsPager';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { GetSortBy, ListPara, clsOperateList } from '@/ts/PubFun/clsOperateList';

/**
 * 所有表可复用的 Ai 操作基础骨架。
 *
 * 说明：
 * 1) 仅放与表无关的分页/列表基础状态。
 * 2) 与具体实体、WApi、查询条件相关的逻辑放在各表适配层实现。
 */
export abstract class AIOperateListBase implements clsOperateList {
  public currPageIndex = 0;
  public divName4DataList = 'divDataLst';
  public divName4Pager = 'divPager';
  public bolIsTableSm = true;
  public listPara: ListPara;
  public objPager: clsPager;

  protected _pageSize: number | null = null;

  constructor(layoutDiv: HTMLDivElement, listDiv: HTMLDivElement) {
    this.listPara = new ListPara(layoutDiv, listDiv);
    this.objPager = new clsPager(this);
    this.objPager.onPageSizeChange = (ps: number) => {
      this._pageSize = ps;
    };
  }

  public get pageSize(): number {
    return this._pageSize ?? 10;
  }

  public SetCurrPageIndex(value: number) {
    this.objPager.currPageIndex = value;
  }

  /** 查询操作：重置到第1页并刷新数据 */
  protected async QueryClickTemplate(onRefresh: () => Promise<void>) {
    this.SetCurrPageIndex(1);
    await onRefresh();
  }

  /**
   * 批量操作执行模板：管理选中项的批量操作流程
   *
   * 职责：
   * 1. 检查是否有选中项，如无则提示用户
   * 2. 执行操作前的验证（可选）
   * 3. 执行批量操作
   * 4. 操作后的回调处理（如刷新数据列表）
   *
   * @param args - 批量操作参数对象
   * @param args.selectedKeys - 被选中的项的主键数组
   * @param args.emptySelectionMessage - 无选中项时显示的提示消息
   * @param args.beforeExecute - [可选] 执行前的验证函数，返回false时中止操作
   * @param args.execute - 执行批量操作的函数
   * @param args.onAfterExecute - [可选] 操作完成后的回调函数
   *
   * 示例：
   * await this.ExecuteSelectionActionTemplate({
   *   selectedKeys: selectedIds,
   *   emptySelectionMessage: '请选择至少一条记录',
   *   beforeExecute: (ids) => confirm('确认删除?'),
   *   execute: async (ids) => { await deleteRecords(ids); },
   *   onAfterExecute: async () => { await refreshList(); }
   * });
   */
  protected async ExecuteSelectionActionTemplate<TKey>(args: {
    selectedKeys: Array<TKey>;
    emptySelectionMessage: string;
    beforeExecute?: (selectedKeys: Array<TKey>) => boolean;
    execute: (selectedKeys: Array<TKey>) => Promise<void>;
    onAfterExecute?: () => Promise<void>;
  }) {
    if (args.selectedKeys.length == 0) {
      alert(args.emptySelectionMessage);
      return;
    }
    if (args.beforeExecute && args.beforeExecute(args.selectedKeys) == false) {
      return;
    }

    await args.execute(args.selectedKeys);
    if (args.onAfterExecute) {
      await args.onAfterExecute();
    }
  }

  /** 按规格过滤导出列数据 */
  protected NormalizeExportRowsBySpecs(
    rows: Array<Record<string, any>>,
    exportSpecs: Array<{ colHeader: string }>,
  ): Array<Record<string, any>> {
    const normalizedRows: Array<Record<string, any>> = [];
    for (const row of rows) {
      const normalized: Record<string, any> = {};
      for (const spec of exportSpecs) {
        normalized[spec.colHeader] = row[spec.colHeader];
      }
      normalizedRows.push(normalized);
    }
    return normalizedRows;
  }

  /** 根据列配置和字段值获取器构建导出行数据 */
  protected BuildExportRowsByColumns<TEntity>(
    arrObjLst: Array<TEntity>,
    arrDataColumn: Array<clsDataColumn>,
    getFldValue: (obj: TEntity, fldName: string) => any,
  ): Array<Record<string, any>> {
    const arrData: Array<Record<string, any>> = [];
    for (const objInFor of arrObjLst) {
      const objRow: Record<string, any> = {};
      for (const col of arrDataColumn) {
        objRow[col.colHeader] = getFldValue(objInFor, col.fldName);
      }
      arrData.push(objRow);
    }
    return arrData;
  }

  /** 解析表格字段名，支持多源回退和管道符处理 */
  protected ResolveTdFieldNames(
    rawTdFieldNames: any,
    arrDataColumn: Array<clsDataColumn>,
    isNullOrEmpty: (value: string) => boolean,
  ): Array<string> {
    const tdFieldNames = Array.isArray(rawTdFieldNames)
      ? rawTdFieldNames
      : Array.isArray(rawTdFieldNames?.value)
      ? rawTdFieldNames.value
      : Array.isArray(arrDataColumn)
      ? arrDataColumn.map((col) => col.fldName).filter((name) => isNullOrEmpty(name) == false)
      : [];

    if (tdFieldNames.length === 0) return [];

    return tdFieldNames
      .map((name: string) => (name.includes('|') ? name.split('|')[0] : name))
      .filter((name: string) => isNullOrEmpty(name) == false);
  }

  /** 排序流程：实体排序拦截 > 本地排序 > 刷新 */
  protected async SortByTemplate(args: {
    objAnchorElement: any;
    currAscOrDesc: string;
    currSortBy: string;
    onEntitySort: (sortColumnKey: string, sortDirection: string) => Promise<boolean> | boolean;
    onApplySortState: (
      sortBy: string,
      ascOrDesc: string,
      sortFun: (ascOrDesc: string) => (x: any, y: any) => number,
    ) => void;
    onRefresh: () => Promise<void>;
  }) {
    let strSortExpress = '';
    if (typeof args.objAnchorElement != 'function') {
      const thisEventObj: HTMLInputElement = args.objAnchorElement;
      strSortExpress = thisEventObj.getAttribute('FldName') as string;
    }

    const { sortFun, ascOrDesc4SortFun, sortBy } = GetSortBy(
      args.objAnchorElement,
      args.currAscOrDesc,
      args.currSortBy,
      strSortExpress,
    );
    const [sortColumnKey, sortDirection] = sortBy.split(' ');
    const isHandledByEntity = await args.onEntitySort(sortColumnKey, sortDirection);
    if (isHandledByEntity) return;

    args.onApplySortState(sortBy, ascOrDesc4SortFun, sortFun);
    await args.onRefresh();
  }

  /** 跳转到指定页码并刷新（0表示最后一页） */
  protected async IndexPageTemplate(intPageIndex: number, onRefresh: () => Promise<void>) {
    const pageIndex = intPageIndex == 0 ? this.objPager.pageCount : intPageIndex;
    this.SetCurrPageIndex(pageIndex);
    await onRefresh();
  }

  /** 加载下一页 */
  protected async NextPageTemplate(onRefresh: () => Promise<void>) {
    const intPageIndex = Number(this.objPager.currPageIndex) + 1;
    await this.IndexPageTemplate(intPageIndex, onRefresh);
  }

  /** 加载上一页 */
  protected async PrevPageTemplate(onRefresh: () => Promise<void>) {
    const intPageIndex = Number(this.objPager.currPageIndex) - 1;
    await this.IndexPageTemplate(intPageIndex, onRefresh);
  }

  public abstract SortBy(objAnchorElement: any): void;
  public abstract SortColumn(sortColumnKey: string, sortDirection: string): void;
  public abstract BindInDiv(divBind: HTMLDivElement): void;
  public abstract IndexPage(intPageIndex: number): void;
  public abstract PrevPage(): void;
  public abstract NextPage(): void;
}
