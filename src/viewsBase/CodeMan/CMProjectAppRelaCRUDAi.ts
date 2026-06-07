import { ExportExcelData } from '@/ts/PubFun/ExportExcelData';
import {
  CombineCMProjectAppRelaConditionObj4ExportExcel,
  CombineCMProjectAppRelaConditionObj,
  divVarSet,
  viewVarSet,
  dataColumn,
  BindTabByList,
  refCMProjectAppRela_List,
  PrjId_Session,
} from '@/views/CodeMan/CMProjectAppRelaVueShare';
import {
  CMProjectAppRela_GetRecCountByCondCache,
  CMProjectAppRela_GetSubObjLstCache,
  CMProjectAppRela_ReFreshCache,
  CMProjectAppRela_DelKeysAsync,
} from '@/ts/L3ForWApi/CodeMan/clsCMProjectAppRelaWApi';
import {
  CMProjectAppRelaEx_FuncMapByFldName,
  CMProjectAppRelaEx_GetObjExLstByPagerCache,
} from '@/ts/L3ForWApiEx/CodeMan/clsCMProjectAppRelaExWApi';

import { GetCheckedKeyIdsInDivObj, GetDivObjInDivObj } from '@/ts/PubFun/clsCommFunc4Ctrl';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsCMProjectAppRelaENEx } from '@/ts/L0Entity/CodeMan/clsCMProjectAppRelaENEx';
import { clsCMProjectAppRelaEN } from '@/ts/L0Entity/CodeMan/clsCMProjectAppRelaEN';
import { BindTab, confirmDel } from '@/ts/PubFun/clsCommFunc4Web';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { clsOperateList, GetCurrPageIndex } from '@/ts/PubFun/clsOperateList';
import { AIOperateListBase } from '@/viewsBase/common/AIOperateListBase';
import {
  getExportColumnSpecsAi,
  getListColumnsAi,
} from '@/viewsBase/CodeMan/CMProjectAppRelaCRUDAiColumns';

/**
 * Ai版基类：
 * 在Ai3基础上增加命令schema驱动，不改变原有基类行为。
 */
export abstract class CMProjectAppRelaCRUDAi extends AIOperateListBase implements clsOperateList {
  public static vuebtn_Click: (strCommandName: string, strKeyId: any) => void;
  public static GetPropValue: (strPropName: string) => string;
  public static sortFunStatic: (ascOrDesc: string) => (x: any, y: any) => number;
  public recCount = 0;

  constructor() {
    super(divVarSet.refDivLayout, divVarSet.refDivList);
  }

  public get thisTabName(): string {
    return clsCMProjectAppRelaEN._CurrTabName;
  }

  public get dispAllErrMsg_q(): boolean {
    return true;
  }

  public async InitVarSet(): Promise<void> {
    // no-op
  }

  public async InitCtlVar(): Promise<void> {
    // no-op
  }

  protected getListColumnsAi(): Array<clsDataColumn> {
    return getListColumnsAi();
  }

  protected getExportColumnSpecsAi(): Array<{ colHeader: string }> {
    return getExportColumnSpecsAi();
  }

  public abstract SortColumn(sortColumnKey: string, sortDirection: string): void;

  /** 页面初始化 */
  public async PageLoadCache() {
    try {
      await this.InitVarSet();
      await this.InitCtlVar();
      if (viewVarSet.sortCMProjectAppRelaBy == '') {
        viewVarSet.sortCMProjectAppRelaBy = `${clsCMProjectAppRelaEN.con_CMProjectAppRelaId} Asc`;
      }

      await this.BindGv_CMProjectAppRela4Func(divVarSet.refDivList);
    } catch (e) {
      const strMsg = `页面启动不成功,${e}.(in ${this.constructor.name}.${this.PageLoadCache.name}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /**
   * 查询按钮点击事件处理：调用基类QueryClickTemplate执行查询
   *
   * 职责：
   * 1. 重置页码到第1页
   * 2. 根据查询条件刷新数据
   *
   * 使用场景：用户点击查询按钮时触发
   */
  public async btnQuery_Click() {
    await this.QueryClickTemplate(async () => {
      await this.BindGv_CMProjectAppRela4Func(divVarSet.refDivList);
    });
  }

  /**
   * 删除记录按钮点击事件处理
   *
   * 流程：
   * 1. 验证是否选中了要删除的记录
   * 2. 弹出确认对话框，要求用户确认删除
   * 3. 执行批量删除操作
   * 4. 操作完成后刷新数据列表
   *
   * 使用场景：用户选择多条记录后，点击"删除"按钮
   */
  public async btnDelRecord_Click() {
    try {
      await this.ExecuteSelectionActionTemplate({
        selectedKeys: GetCheckedKeyIdsInDivObj(divVarSet.refDivList),
        emptySelectionMessage: `请选择需要删除的${this.thisTabName}记录!`,
        beforeExecute: (arrKeyIds) => confirmDel(arrKeyIds.length),
        execute: async (arrKeyIds) => {
          await this.DelMultiRecord(arrKeyIds);
        },
        onAfterExecute: async () => {
          await this.BindGv_CMProjectAppRela4Func(divVarSet.refDivList);
        },
      });
    } catch (e) {
      const strMsg = `删除${this.thisTabName}记录不成功. ${e}.(in ${this.constructor.name}.${this.btnDelRecord_Click.name}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  public async DelMultiRecord(arrCMProjectAppRelaId: Array<string>) {
    const strThisFuncName = this.DelMultiRecord.name;
    try {
      const returnInt = await CMProjectAppRela_DelKeysAsync(arrCMProjectAppRelaId);
      if (returnInt > 0) {
        CMProjectAppRela_ReFreshCache(PrjId_Session.value);

        alert(`删除${this.thisTabName}记录成功,共删除${returnInt}条记录!`);
      } else {
        alert(`删除${this.thisTabName}记录不成功!`);
      }
    } catch (e) {
      const strMsg = `删除${this.thisTabName}记录不成功. ${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /** 按当前查询条件导出原始列表数据。 */
  public async ExportExcel_CMProjectAppRelaCache(): Promise<ExportExcelData> {
    const strThisFuncName = this.ExportExcel_CMProjectAppRelaCache.name;
    if (viewVarSet.sortCMProjectAppRelaBy == null) {
      const strMsg = Format(
        '在显示列表时,排序字段(sortCMProjectAppRelaBy)为空,请检查!(In BindGv_CMProjectAppRelaCache)',
      );
      console.error(strMsg);
      alert(strMsg);
      return { arrObjLst: [], sheetName: '', fileName: '' };
    }

    const objCMProjectAppRelaCond = await CombineCMProjectAppRelaConditionObj4ExportExcel();
    let arrCMProjectAppRelaObjLst: Array<clsCMProjectAppRelaEN> = [];
    try {
      this.recCount = await CMProjectAppRela_GetRecCountByCondCache(
        objCMProjectAppRelaCond,
        PrjId_Session.value,
      );
      if (this.recCount == 0) {
        const strMsg = Format(
          '在绑定GvCache过程中,根据条件:[{0}]获取的对象列表数为0!',
          objCMProjectAppRelaCond.whereCond,
        );
        console.error(strMsg);
        alert(strMsg);
        return { arrObjLst: [], sheetName: '', fileName: '' };
      }
      arrCMProjectAppRelaObjLst = await CMProjectAppRela_GetSubObjLstCache(
        objCMProjectAppRelaCond,
        PrjId_Session.value,
      );
    } catch (e) {
      const strMsg = `绑定GridView不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
      return { arrObjLst: [], sheetName: '', fileName: '' };
    }

    if (arrCMProjectAppRelaObjLst.length == 0) {
      return { arrObjLst: [], sheetName: '', fileName: '' };
    }

    try {
      const arrDataColumn = this.getListColumnsAi();
      arrCMProjectAppRelaObjLst = arrCMProjectAppRelaObjLst.sort(this.SortFunExportExcel);
      return this.CombineData(arrCMProjectAppRelaObjLst, arrDataColumn);
    } catch (e) {
      const strMsg = `绑定${this.thisTabName}对象列表不成功, ${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
      return { arrObjLst: [], sheetName: '', fileName: '' };
    }
  }

  /** 按导出列规格整理导出结果。 */
  public async ExportExcel_CMProjectAppRelaCacheAi(): Promise<ExportExcelData> {
    const raw = await this.ExportExcel_CMProjectAppRelaCache();
    if (raw.arrObjLst.length === 0) return raw;
    const normalizedRows = this.NormalizeExportRowsBySpecs(
      raw.arrObjLst as Array<Record<string, any>>,
      this.getExportColumnSpecsAi(),
    );

    return {
      arrObjLst: normalizedRows,
      sheetName: raw.sheetName,
      fileName: raw.fileName,
    };
  }

  /** 导出按钮入口。 */
  public async btnExportExcel_Click() {
    await this.ExportExcel_CMProjectAppRelaCache();
  }

  /** 把实体列表组装成导出文件数据。 */
  public CombineData(
    arrCMProjectAppRelaObjLst: Array<clsCMProjectAppRelaEN>,
    arrDataColumn: Array<clsDataColumn>,
  ): ExportExcelData {
    const arrData = this.BuildExportRowsByColumns(
      arrCMProjectAppRelaObjLst,
      arrDataColumn,
      (obj, fld) => obj.GetFldValue(fld),
    );
    const strFileName = Format('CM项目应用关系({0})导出.xlsx', clsCMProjectAppRelaEN._CurrTabName);
    const strSheetName = 'CM项目应用关系列表';
    return { arrObjLst: arrData, sheetName: strSheetName, fileName: strFileName };
  }

  /** 绑定表格内容并同步分页器。 */
  public async BindTab_CMProjectAppRela4Func(
    divContainer: HTMLDivElement,
    arrCMProjectAppRelaExObjLst: Array<clsCMProjectAppRelaENEx>,
  ) {
    const strThisFuncName = this.BindTab_CMProjectAppRela4Func.name;
    if (divContainer == null) {
      alert(Format('{0}不存在!', divContainer));
      return;
    }

    const arrDataColumn: Array<clsDataColumn> = this.getListColumnsAi();

    if (refCMProjectAppRela_List.value != null) {
      dataColumn.value = arrDataColumn;
      try {
        await this.ExtendTdFldFuncMap(arrCMProjectAppRelaExObjLst);
      } catch (e) {
        const strMsg = `扩展Td字段值的映射出错,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      await BindTabByList(arrCMProjectAppRelaExObjLst, this.dispAllErrMsg_q);
    } else {
      try {
        await this.ExtendFldFuncMap(arrCMProjectAppRelaExObjLst, arrDataColumn);
      } catch (e) {
        const strMsg = `扩展字段值的映射出错,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      const divDataLst = GetDivObjInDivObj(divContainer, 'divDataLst');
      if (divDataLst == null) {
        alert('在BindTab_CMProjectAppRela4Func函数中，divDataLst不存在!');
        return;
      }
      await BindTab(
        divDataLst,
        arrCMProjectAppRelaExObjLst,
        arrDataColumn,
        clsCMProjectAppRelaEN.con_CMProjectAppRelaId,
        this,
      );
    }

    if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
      this.objPager.InitShow(divContainer, this.divName4Pager);
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
  }

  /** 按当前条件获取并绑定分页列表。 */

  public async BindGv_CMProjectAppRela4Func(divList: HTMLDivElement) {
    const strThisFuncName = this.BindGv_CMProjectAppRela4Func.name;

    if (viewVarSet.sortCMProjectAppRelaBy == null) {
      const strMsg = Format(
        '在显示列表时,排序字段(sortCMProjectAppRelaBy)为空,请检查!(In BindGv_CMProjectAppRelaCache)',
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }

    const objCMProjectAppRelaCond = await CombineCMProjectAppRelaConditionObj();
    const strWhereCond = JSON.stringify(objCMProjectAppRelaCond);
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex);
    let arrCMProjectAppRelaExObjLst: Array<clsCMProjectAppRelaENEx> = [];

    try {
      this.recCount = await CMProjectAppRela_GetRecCountByCondCache(
        objCMProjectAppRelaCond,
        PrjId_Session.value,
      );
      if (this.recCount == 0) {
        const strMsg = Format(
          '在绑定GvCache过程中,根据条件:[{0}]获取的对象列表数为0!',
          objCMProjectAppRelaCond.whereCond,
        );
        console.error(strMsg);
        alert(strMsg);
        BindTabByList(arrCMProjectAppRelaExObjLst, true);
        return;
      }

      let strSortFun = (x: any, y: any) => {
        console.log(x, y);
        return 0;
      };
      const currentCtor = this.constructor as typeof CMProjectAppRelaCRUDAi;
      if (currentCtor.sortFunStatic != undefined) {
        strSortFun = currentCtor.sortFunStatic(viewVarSet.ascOrDesc4SortFun);
      }
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        conditionCollection: objCMProjectAppRelaCond,
        orderBy: viewVarSet.sortCMProjectAppRelaBy,
        sortFun: strSortFun,
      };

      arrCMProjectAppRelaExObjLst = await CMProjectAppRelaEx_GetObjExLstByPagerCache(
        objPagerPara,
        PrjId_Session.value,
      );
    } catch (e) {
      const strMsg = `绑定GridView不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }

    if (arrCMProjectAppRelaExObjLst.length == 0) {
      this.objPager.Hide(divList, this.divName4Pager);
      return;
    }

    try {
      await this.BindTab_CMProjectAppRela4Func(divList, arrCMProjectAppRelaExObjLst);
    } catch (e) {
      const strMsg = `绑定${this.thisTabName}对象列表不成功, ${e}.(in ${this.constructor.name}.${strThisFuncName})`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /** 为非实体原生字段补充显示映射。 */
  public async ExtendFldFuncMap(
    arrCMProjectAppRelaExObjLst: Array<clsCMProjectAppRelaENEx>,
    arrDataColumn: Array<clsDataColumn>,
  ) {
    const arrFldName = clsCMProjectAppRelaEN._AttributeName;
    for (const objDataColumn of arrDataColumn) {
      if (IsNullOrEmpty(objDataColumn.fldName) == true) continue;
      if (arrFldName.indexOf(objDataColumn.fldName) > -1) continue;
      for (const objInFor of arrCMProjectAppRelaExObjLst) {
        await CMProjectAppRelaEx_FuncMapByFldName(objDataColumn.fldName, objInFor);
      }
    }
  }

  /** 为表格Td字段补充显示映射。 */
  public async ExtendTdFldFuncMap(arrCMProjectAppRelaExObjLst: Array<clsCMProjectAppRelaENEx>) {
    const arrFldName = clsCMProjectAppRelaEN._AttributeName;
    const tdFieldNames = this.ResolveTdFieldNames(
      refCMProjectAppRela_List.value?.tdFieldNames,
      dataColumn.value,
      IsNullOrEmpty,
    );

    if (tdFieldNames.length === 0) return;

    for (const normalizedFldName of tdFieldNames) {
      if (arrFldName.indexOf(normalizedFldName) > -1) continue;

      for (const objInFor of arrCMProjectAppRelaExObjLst) {
        await CMProjectAppRelaEx_FuncMapByFldName(normalizedFldName, objInFor);
      }
    }
  }

  /**
   * 导出时使用的默认排序规则。
   * ⚠️ 这是一个示例方法，使用从导出区域字段中选择的前 2 个字段。
   * ⚠️ 请根据实际业务需求修改排序逻辑和字段选择。
   *
   * 当前示例使用的字段：
   * - prjId (string)
   * - memo (string)
   *
   * 表中可用的所有字段：
   * - prjId (string)
   * - memo (string)
   *
   * 作者: AutoGCLib
   * 日期: 2026-06-01
   */
  public SortFunExportExcel(a: clsCMProjectAppRelaEN, b: clsCMProjectAppRelaEN): number {
    // 第一级排序：memo
    if (a.memo == b.memo) {
      if (a.memo == null) return -1;
      if (b.memo == null) return 1;
      return a.memo.localeCompare(b.memo);
    } else {
      if (b.prjId == null) return -1;
      if (a.prjId == null) return 1;
      return a.prjId.localeCompare(b.prjId);
    }
  }

  /** 列表排序入口。 */
  public async SortBy(objAnchorElement: any) {
    await this.SortByTemplate({
      objAnchorElement,
      currAscOrDesc: viewVarSet.ascOrDesc4SortFun,
      currSortBy: viewVarSet.sortCMProjectAppRelaBy,
      onEntitySort: async (sortColumnKey: string, sortDirection: string) => {
        if (Object.prototype.hasOwnProperty.call(clsCMProjectAppRelaENEx, sortColumnKey) == false) {
          return false;
        }
        this.SortColumn(sortColumnKey, sortDirection);
        return true;
      },
      onApplySortState: (sortBy, ascOrDesc4SortFun, sortFun) => {
        viewVarSet.sortCMProjectAppRelaBy = sortBy;
        viewVarSet.ascOrDesc4SortFun = ascOrDesc4SortFun;
        const currentCtor = this.constructor as typeof CMProjectAppRelaCRUDAi;
        currentCtor.sortFunStatic = sortFun;
      },
      onRefresh: async () => {
        await this.BindGv_CMProjectAppRela4Func(this.listPara.listDiv);
      },
    });
  }

  /** 跳转到指定页。 */
  public async IndexPage(intPageIndex: number) {
    await this.IndexPageTemplate(intPageIndex, async () => {
      await this.BindGv_CMProjectAppRela4Func(this.listPara.listDiv);
    });
  }

  /** 加载下一页。 */
  public async NextPage() {
    await this.NextPageTemplate(async () => {
      await this.BindGv_CMProjectAppRela4Func(this.listPara.listDiv);
    });
  }

  /** 加载上一页。 */
  public async PrevPage() {
    await this.PrevPageTemplate(async () => {
      await this.BindGv_CMProjectAppRela4Func(this.listPara.listDiv);
    });
  }

  /** 预留的容器绑定扩展点。 */
  public async BindInDiv(divBind: HTMLDivElement) {
    console.log(divBind);
  }
}
