import { ExportExcelData } from '@/ts/PubFun/ExportExcelData';
import {
  CombinePrjDataBaseConditionObj4ExportExcel,
  CombinePrjDataBaseConditionObj,
  PrjDataBase_DeleteKeyIdCache,
  divVarSet,
  viewVarSet,
  dataColumn,
  BindTabByList,
  refPrjDataBase_List,
} from '@/views/PrjManage/PrjDataBaseVueShare';
import {
  PrjDataBase_GetRecCountByCondCache,
  PrjDataBase_GetSubObjLstCache,
  PrjDataBase_ReFreshCache,
  PrjDataBase_FuncMapByFldName,
  PrjDataBase_GetObjExLstByPagerCache,
  PrjDataBase_GetObjLstByPrjDataBaseIdLstAsync,
  PrjDataBase_UpdateRecordAsync,
  PrjDataBase_DelPrjDataBasesAsync,
} from '@/ts/L3ForWApi/PrjManage/clsPrjDataBaseWApi';
import { UseState_BindDdl_UseStateIdInDivCache } from '@/ts/L3ForWApi/SysPara/clsUseStateWApi';
import {
  GetCheckedKeyIdsInDivObj,
  GetSelectValueInDivObj,
  GetDivObjInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsPrjDataBaseENEx } from '@/ts/L0Entity/PrjManage/clsPrjDataBaseENEx';
import { clsPrjDataBaseEN } from '@/ts/L0Entity/PrjManage/clsPrjDataBaseEN';
import { ObjectAssign, BindTab, confirmDel } from '@/ts/PubFun/clsCommFunc4Web';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { clsOperateList, GetCurrPageIndex } from '@/ts/PubFun/clsOperateList';
import { AIOperateListBase } from '@/viewsBase/common/AIOperateListBase';
import {
  getExportColumnSpecsAi2,
  getListColumnsAi2,
} from '@/viewsBase/PrjManage/PrjDataBaseCRUDAi2Columns';

/**
 * Ai4版基类：
 * 在Ai3基础上增加命令schema驱动，不改变原有基类行为。
 */
export abstract class PrjDataBaseCRUDAi4 extends AIOperateListBase implements clsOperateList {
  public static vuebtn_Click: (strCommandName: string, strKeyId: any) => void;
  public static GetPropValue: (strPropName: string) => string;
  public static sortFunStatic: (ascOrDesc: string) => (x: any, y: any) => number;
  public recCount = 0;

  constructor() {
    super(divVarSet.refDivLayout, divVarSet.refDivList);
  }

  public get thisTabName(): string {
    return clsPrjDataBaseEN._CurrTabName;
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
    return getListColumnsAi2();
  }

  protected getExportColumnSpecsAi(): Array<{ colHeader: string }> {
    return getExportColumnSpecsAi2();
  }

  public abstract SortColumn(sortColumnKey: string, sortDirection: string): void;

  /** 页面初始化 */
  public async PageLoadCache() {
    try {
      await this.InitVarSet();
      await this.InitCtlVar();
      if (viewVarSet.sortPrjDataBaseBy == '') {
        viewVarSet.sortPrjDataBaseBy = `${clsPrjDataBaseEN.con_PrjDataBaseId} Asc`;
      }
      await this.BindGv_PrjDataBase4Func(divVarSet.refDivList);
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
      await this.BindGv_PrjDataBase4Func(divVarSet.refDivList);
    });
  }

  public async SetDdl_UseStateIdInDivInFeature() {
    await UseState_BindDdl_UseStateIdInDivCache(divVarSet.refDivFunction, 'ddlUseStateId');
  }

  /**
   * 设置使用状态ID按钮点击事件处理
   *
   * 流程：
   * 1. 验证是否选中了记录
   * 2. 验证是否选择了有效的使用状态ID
   * 3. 执行批量设置操作
   * 4. 操作完成后刷新数据列表
   *
   * 使用场景：用户选择多条记录后，点击"设置使用状态ID"按钮
   */
  public async btnSetUseStateId_Click() {
    try {
      const strUseStateId = GetSelectValueInDivObj(
        divVarSet.refDivFunction,
        'ddlUseStateId_SetFldValue',
      );
      await this.ExecuteSelectionActionTemplate({
        selectedKeys: GetCheckedKeyIdsInDivObj(divVarSet.refDivList),
        emptySelectionMessage: `请选择需要设置使用状态Id的${this.thisTabName}记录!`,
        beforeExecute: () => {
          if (strUseStateId == '') {
            const strMsg = '请输入使用状态Id(UseStateId)!';
            console.error(strMsg);
            alert(strMsg);
            return false;
          }
          return true;
        },
        execute: async (arrKeyIds) => {
          await this.SetUseStateId(arrKeyIds, strUseStateId);
        },
        onAfterExecute: async () => {
          await this.BindGv_PrjDataBase4Func(divVarSet.refDivList);
        },
      });
    } catch (e) {
      const strMsg = `设置记录不成功,${e}.(in ${this.constructor.name}.${this.btnSetUseStateId_Click.name}`;
      console.error(strMsg);
      alert(strMsg);
    }
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
          await this.BindGv_PrjDataBase4Func(divVarSet.refDivList);
        },
      });
    } catch (e) {
      const strMsg = `删除${this.thisTabName}记录不成功. ${e}.(in ${this.constructor.name}.${this.btnDelRecord_Click.name}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  public async DelMultiRecord(arrPrjDataBaseId: Array<string>) {
    const strThisFuncName = this.DelMultiRecord.name;
    try {
      const returnInt = await PrjDataBase_DelPrjDataBasesAsync(arrPrjDataBaseId);
      if (returnInt > 0) {
        PrjDataBase_ReFreshCache();
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

  /** 批量设置使用状态ID。 */
  public async SetUseStateId(arrPrjDataBaseId: Array<string>, strUseStateId: string) {
    const strThisFuncName = this.SetUseStateId.name;
    if (strUseStateId == null || strUseStateId == '') {
      alert('请输入使用状态Id(UseStateId)!');
      return '';
    }
    if (arrPrjDataBaseId.length == 0) {
      alert('没有选择记录,不能设置字段值!');
      return '';
    }

    try {
      const arrPrjDataBaseObjLst = await PrjDataBase_GetObjLstByPrjDataBaseIdLstAsync(
        arrPrjDataBaseId,
      );
      let intCount = 0;
      for (const objInFor of arrPrjDataBaseObjLst) {
        const objPrjDataBaseEN = new clsPrjDataBaseEN();
        ObjectAssign(objPrjDataBaseEN, objInFor);
        objPrjDataBaseEN.SetPrjDataBaseId(objInFor.prjDataBaseId);
        objPrjDataBaseEN.SetUseStateId(strUseStateId);

        let returnBool = false;
        try {
          objPrjDataBaseEN.sfUpdFldSetStr = objPrjDataBaseEN.updFldString;
          returnBool = await PrjDataBase_UpdateRecordAsync(objPrjDataBaseEN);
        } catch (e) {
          const strMsg = `设置记录不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
          console.error(strMsg);
          throw strMsg;
        }

        if (returnBool == true) {
          PrjDataBase_DeleteKeyIdCache(objInFor.prjDataBaseId);
          intCount++;
        } else {
          alert('设置记录不成功!');
        }
      }

      alert(`共设置了${intCount}条记录!`);
      if (intCount > 0) {
        PrjDataBase_ReFreshCache();
      }
    } catch (e) {
      const strMsg = `设置记录不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /** 按当前查询条件导出原始列表数据。 */
  public async ExportExcel_PrjDataBaseCache(): Promise<ExportExcelData> {
    const strThisFuncName = this.ExportExcel_PrjDataBaseCache.name;
    if (viewVarSet.sortPrjDataBaseBy == null) {
      const strMsg = Format(
        '在显示列表时,排序字段(sortPrjDataBaseBy)为空,请检查!(In BindGv_PrjDataBaseCache)',
      );
      console.error(strMsg);
      alert(strMsg);
      return { arrObjLst: [], sheetName: '', fileName: '' };
    }

    const objPrjDataBaseCond = await CombinePrjDataBaseConditionObj4ExportExcel();
    let arrPrjDataBaseObjLst: Array<clsPrjDataBaseEN> = [];
    try {
      this.recCount = await PrjDataBase_GetRecCountByCondCache(objPrjDataBaseCond);
      if (this.recCount == 0) {
        const strMsg = Format(
          '在绑定GvCache过程中,根据条件:[{0}]获取的对象列表数为0!',
          objPrjDataBaseCond.whereCond,
        );
        console.error(strMsg);
        alert(strMsg);
        return { arrObjLst: [], sheetName: '', fileName: '' };
      }
      arrPrjDataBaseObjLst = await PrjDataBase_GetSubObjLstCache(objPrjDataBaseCond);
    } catch (e) {
      const strMsg = `绑定GridView不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
      return { arrObjLst: [], sheetName: '', fileName: '' };
    }

    if (arrPrjDataBaseObjLst.length == 0) {
      return { arrObjLst: [], sheetName: '', fileName: '' };
    }

    try {
      const arrDataColumn = this.getListColumnsAi();
      arrPrjDataBaseObjLst = arrPrjDataBaseObjLst.sort(this.SortFunExportExcel);
      return this.CombineData(arrPrjDataBaseObjLst, arrDataColumn);
    } catch (e) {
      const strMsg = `绑定${this.thisTabName}对象列表不成功, ${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
      return { arrObjLst: [], sheetName: '', fileName: '' };
    }
  }

  /** 按导出列规格整理导出结果。 */
  public async ExportExcel_PrjDataBaseCacheAi2(): Promise<ExportExcelData> {
    const raw = await this.ExportExcel_PrjDataBaseCache();
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
    await this.ExportExcel_PrjDataBaseCache();
  }

  /** 把实体列表组装成导出文件数据。 */
  public CombineData(
    arrPrjDataBaseObjLst: Array<clsPrjDataBaseEN>,
    arrDataColumn: Array<clsDataColumn>,
  ): ExportExcelData {
    const arrData = this.BuildExportRowsByColumns(arrPrjDataBaseObjLst, arrDataColumn, (obj, fld) =>
      obj.GetFldValue(fld),
    );
    const strFileName = Format('数据库对象({0})导出.xlsx', clsPrjDataBaseEN._CurrTabName);
    const strSheetName = '数据库对象列表';
    return { arrObjLst: arrData, sheetName: strSheetName, fileName: strFileName };
  }

  /** 绑定表格内容并同步分页器。 */
  public async BindTab_PrjDataBase4Func(
    divContainer: HTMLDivElement,
    arrPrjDataBaseExObjLst: Array<clsPrjDataBaseENEx>,
  ) {
    const strThisFuncName = this.BindTab_PrjDataBase4Func.name;
    if (divContainer == null) {
      alert(Format('{0}不存在!', divContainer));
      return;
    }

    const arrDataColumn: Array<clsDataColumn> = this.getListColumnsAi();

    if (refPrjDataBase_List.value != null) {
      dataColumn.value = arrDataColumn;
      try {
        await this.ExtendTdFldFuncMap(arrPrjDataBaseExObjLst);
      } catch (e) {
        const strMsg = `扩展Td字段值的映射出错,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      await BindTabByList(arrPrjDataBaseExObjLst, this.dispAllErrMsg_q);
    } else {
      try {
        await this.ExtendFldFuncMap(arrPrjDataBaseExObjLst, arrDataColumn);
      } catch (e) {
        const strMsg = `扩展字段值的映射出错,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      const divDataLst = GetDivObjInDivObj(divContainer, 'divDataLst');
      if (divDataLst == null) {
        alert('在BindTab_PrjDataBase4Func函数中，divDataLst不存在!');
        return;
      }
      await BindTab(
        divDataLst,
        arrPrjDataBaseExObjLst,
        arrDataColumn,
        clsPrjDataBaseEN.con_PrjDataBaseId,
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
  public async BindGv_PrjDataBase4Func(divList: HTMLDivElement) {
    const strThisFuncName = this.BindGv_PrjDataBase4Func.name;
    if (viewVarSet.sortPrjDataBaseBy == null) {
      const strMsg = Format(
        '在显示列表时,排序字段(sortPrjDataBaseBy)为空,请检查!(In BindGv_PrjDataBaseCache)',
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }

    const objPrjDataBaseCond = await CombinePrjDataBaseConditionObj();
    const strWhereCond = JSON.stringify(objPrjDataBaseCond);
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex);
    let arrPrjDataBaseExObjLst: Array<clsPrjDataBaseENEx> = [];

    try {
      this.recCount = await PrjDataBase_GetRecCountByCondCache(objPrjDataBaseCond);
      if (this.recCount == 0) {
        const strMsg = Format(
          '在绑定GvCache过程中,根据条件:[{0}]获取的对象列表数为0!',
          objPrjDataBaseCond.whereCond,
        );
        console.error(strMsg);
        alert(strMsg);
        BindTabByList(arrPrjDataBaseExObjLst, true);
        return;
      }

      let strSortFun = (x: any, y: any) => {
        console.log(x, y);
        return 0;
      };
      const currentCtor = this.constructor as typeof PrjDataBaseCRUDAi4;
      if (currentCtor.sortFunStatic != undefined) {
        strSortFun = currentCtor.sortFunStatic(viewVarSet.ascOrDesc4SortFun);
      }
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        conditionCollection: objPrjDataBaseCond,
        orderBy: viewVarSet.sortPrjDataBaseBy,
        sortFun: strSortFun,
      };
      arrPrjDataBaseExObjLst = await PrjDataBase_GetObjExLstByPagerCache(objPagerPara);
    } catch (e) {
      const strMsg = `绑定GridView不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }

    if (arrPrjDataBaseExObjLst.length == 0) {
      this.objPager.Hide(divList, this.divName4Pager);
      return;
    }

    try {
      await this.BindTab_PrjDataBase4Func(divList, arrPrjDataBaseExObjLst);
    } catch (e) {
      const strMsg = `绑定${this.thisTabName}对象列表不成功, ${e}.(in ${this.constructor.name}.${strThisFuncName})`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /** 为非实体原生字段补充显示映射。 */
  public async ExtendFldFuncMap(
    arrPrjDataBaseExObjLst: Array<clsPrjDataBaseENEx>,
    arrDataColumn: Array<clsDataColumn>,
  ) {
    const arrFldName = clsPrjDataBaseEN._AttributeName;
    for (const objDataColumn of arrDataColumn) {
      if (IsNullOrEmpty(objDataColumn.fldName) == true) continue;
      if (arrFldName.indexOf(objDataColumn.fldName) > -1) continue;
      for (const objInFor of arrPrjDataBaseExObjLst) {
        await PrjDataBase_FuncMapByFldName(objDataColumn.fldName, objInFor);
      }
    }
  }

  /** 为表格Td字段补充显示映射。 */
  public async ExtendTdFldFuncMap(arrPrjDataBaseExObjLst: Array<clsPrjDataBaseENEx>) {
    const arrFldName = clsPrjDataBaseEN._AttributeName;
    const tdFieldNames = this.ResolveTdFieldNames(
      refPrjDataBase_List.value?.tdFieldNames,
      dataColumn.value,
      IsNullOrEmpty,
    );

    if (tdFieldNames.length === 0) return;

    for (const normalizedFldName of tdFieldNames) {
      if (arrFldName.indexOf(normalizedFldName) > -1) continue;

      for (const objInFor of arrPrjDataBaseExObjLst) {
        await PrjDataBase_FuncMapByFldName(normalizedFldName, objInFor);
      }
    }
  }

  /** 导出时使用的默认排序规则。 */
  public SortFunExportExcel(a: clsPrjDataBaseEN, b: clsPrjDataBaseEN): number {
    if (a.userId == b.userId) {
      if (a.userId == null) return -1;
      if (b.userId == null) return 1;
      return a.userId.localeCompare(b.userId);
    } else {
      if (b.dataBaseName == null) return -1;
      if (a.dataBaseName == null) return 1;
      return a.dataBaseName.localeCompare(b.dataBaseName);
    }
  }

  /** 列表排序入口。 */
  public async SortBy(objAnchorElement: any) {
    await this.SortByTemplate({
      objAnchorElement,
      currAscOrDesc: viewVarSet.ascOrDesc4SortFun,
      currSortBy: viewVarSet.sortPrjDataBaseBy,
      onEntitySort: async (sortColumnKey: string, sortDirection: string) => {
        if (Object.prototype.hasOwnProperty.call(clsPrjDataBaseENEx, sortColumnKey) == false) {
          return false;
        }
        this.SortColumn(sortColumnKey, sortDirection);
        return true;
      },
      onApplySortState: (sortBy, ascOrDesc4SortFun, sortFun) => {
        viewVarSet.sortPrjDataBaseBy = sortBy;
        viewVarSet.ascOrDesc4SortFun = ascOrDesc4SortFun;
        const currentCtor = this.constructor as typeof PrjDataBaseCRUDAi4;
        currentCtor.sortFunStatic = sortFun;
      },
      onRefresh: async () => {
        await this.BindGv_PrjDataBase4Func(this.listPara.listDiv);
      },
    });
  }

  /** 跳转到指定页。 */
  public async IndexPage(intPageIndex: number) {
    await this.IndexPageTemplate(intPageIndex, async () => {
      await this.BindGv_PrjDataBase4Func(this.listPara.listDiv);
    });
  }

  /** 加载下一页。 */
  public async NextPage() {
    await this.NextPageTemplate(async () => {
      await this.BindGv_PrjDataBase4Func(this.listPara.listDiv);
    });
  }

  /** 加载上一页。 */
  public async PrevPage() {
    await this.PrevPageTemplate(async () => {
      await this.BindGv_PrjDataBase4Func(this.listPara.listDiv);
    });
  }

  /** 预留的容器绑定扩展点。 */
  public async BindInDiv(divBind: HTMLDivElement) {
    console.log(divBind);
  }
}
