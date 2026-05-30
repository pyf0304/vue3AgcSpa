import { ExportExcelData } from '@/ts/PubFun/ExportExcelData';
import {
  CombineFunction4GeneCodeCondition,
  divVarSet,
  viewVarSet,
  dataColumn,
  BindTabByList,
  refFunction4GeneCode_List,
} from '@/views/PrjFunction/Function4GeneCodeVueShare';
import {
  Function4GeneCode_GetRecCountByCondAsync,
  Function4GeneCode_GetObjLstAsync,
  Function4GeneCode_AddNewRecordAsync,
  Function4GeneCode_GetObjLstByFuncId4GCLstAsync,
  Function4GeneCode_UpdateRecordAsync,
  Function4GeneCode_DelFunction4GeneCodesAsync,
  Function4GeneCode_GetMaxStrIdAsync,
} from '@/ts/L3ForWApi/PrjFunction/clsFunction4GeneCodeWApi';
import {
  Function4GeneCodeEx_FuncMapByFldName,
  Function4GeneCodeEx_GetObjExLstByPagerAsync,
} from '@/ts/L3ForWApiEx/PrjFunction/clsFunction4GeneCodeExWApi';

import { GetCheckedKeyIdsInDivObj, GetDivObjInDivObj } from '@/ts/PubFun/clsCommFunc4Ctrl';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsFunction4GeneCodeENEx } from '@/ts/L0Entity/PrjFunction/clsFunction4GeneCodeENEx';
import { clsFunction4GeneCodeEN } from '@/ts/L0Entity/PrjFunction/clsFunction4GeneCodeEN';
import { ObjectAssign, BindTab, confirmDel } from '@/ts/PubFun/clsCommFunc4Web';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { clsOperateList, GetCurrPageIndex } from '@/ts/PubFun/clsOperateList';
import { AIOperateListBase } from '@/viewsBase/common/AIOperateListBase';
import {
  getExportColumnSpecsAi,
  getListColumnsAi,
} from '@/viewsBase/PrjFunction/Function4GeneCodeCRUDAiColumns';

/**
 * Ai版基类：
 * 在Ai3基础上增加命令schema驱动，不改变原有基类行为。
 */
export abstract class Function4GeneCodeCRUDAi extends AIOperateListBase implements clsOperateList {
  public static vuebtn_Click: (strCommandName: string, strKeyId: any) => void;
  public static GetPropValue: (strPropName: string) => string;
  public static sortFunStatic: (ascOrDesc: string) => (x: any, y: any) => number;
  public recCount = 0;

  constructor() {
    super(divVarSet.refDivLayout, divVarSet.refDivList);
  }

  public get thisTabName(): string {
    return clsFunction4GeneCodeEN._CurrTabName;
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
      if (viewVarSet.sortFunction4GeneCodeBy == '') {
        viewVarSet.sortFunction4GeneCodeBy = `${clsFunction4GeneCodeEN.con_FuncId4GC} Asc`;
      }

      await this.BindGv_Function4GeneCode4Func(divVarSet.refDivList);
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
      await this.BindGv_Function4GeneCode4Func(divVarSet.refDivList);
    });
  }

  /**
   * 设置是否在用按钮点击事件处理
   *
   * 流程：
   * 1. 验证是否选中了记录
   * 2.获取是否在用值   * 3. 执行批量设置操作
   * 4. 操作完成后刷新数据列表
   *
   * 使用场景：用户选择多条记录后，点击"设置是否在用"按钮
   */
  public async btnSetInUse_Click() {
    try {
      const bolInUse: boolean = $('#ddlInUse_SetFldValue').prop('checked'); // 布尔型下拉框直接获取checked属性
      await this.ExecuteSelectionActionTemplate({
        selectedKeys: GetCheckedKeyIdsInDivObj(divVarSet.refDivList),
        emptySelectionMessage: `请选择需要设置是否在用的${this.thisTabName}记录!`,
        beforeExecute: () => {
          return true;
        },
        execute: async (arrKeyIds) => {
          await this.SetInUse(arrKeyIds, bolInUse);
        },
        onAfterExecute: async () => {
          await this.BindGv_Function4GeneCode4Func(divVarSet.refDivList);
        },
      });
    } catch (e) {
      const strMsg = `设置记录不成功,${e}.(in ${this.constructor.name}.${this.btnSetInUse_Click.name}`;
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
          await this.BindGv_Function4GeneCode4Func(divVarSet.refDivList);
        },
      });
    } catch (e) {
      const strMsg = `删除${this.thisTabName}记录不成功. ${e}.(in ${this.constructor.name}.${this.btnDelRecord_Click.name}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  public async DelMultiRecord(arrFunction4GeneCodeId: Array<string>) {
    const strThisFuncName = this.DelMultiRecord.name;
    try {
      const returnInt = await Function4GeneCode_DelFunction4GeneCodesAsync(arrFunction4GeneCodeId);
      if (returnInt > 0) {
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

  /** 批量设置是否在用。 */
  public async SetInUse(arrFuncId4GC: Array<string>, bolInUse: boolean) {
    const strThisFuncName = this.SetInUse.name;
    if (arrFuncId4GC.length == 0) {
      alert('没有选择记录,不能设置字段值!');
      return '';
    }

    try {
      const arrFunction4GeneCodeObjLst = await Function4GeneCode_GetObjLstByFuncId4GCLstAsync(
        arrFuncId4GC,
      );
      let intCount = 0;
      for (const objInFor of arrFunction4GeneCodeObjLst) {
        const objFunction4GeneCodeEN = new clsFunction4GeneCodeEN();
        ObjectAssign(objFunction4GeneCodeEN, objInFor);
        objFunction4GeneCodeEN.SetFuncId4GC(objInFor.funcId4GC);
        objFunction4GeneCodeEN.SetInUse(bolInUse);

        let returnBool = false;
        try {
          objFunction4GeneCodeEN.sfUpdFldSetStr = objFunction4GeneCodeEN.updFldString;
          returnBool = await Function4GeneCode_UpdateRecordAsync(objFunction4GeneCodeEN);
        } catch (e) {
          const strMsg = `设置记录不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
          console.error(strMsg);
          throw strMsg;
        }

        if (returnBool == true) {
          intCount++;
        } else {
          alert('设置记录不成功!');
        }
      }

      alert(`共设置了${intCount}条记录!`);
      if (intCount > 0) {
        //Function4GeneCode_ReFreshCache();
      }
    } catch (e) {
      const strMsg = `设置记录不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /** 按当前查询条件导出原始列表数据。 */
  public async ExportExcel_Function4GeneCode(): Promise<ExportExcelData> {
    const strThisFuncName = this.ExportExcel_Function4GeneCode.name;
    if (viewVarSet.sortFunction4GeneCodeBy == null) {
      const strMsg = Format(
        '在显示列表时,排序字段(sortFunction4GeneCodeBy)为空,请检查!(In BindGv_Function4GeneCodeCache)',
      );
      console.error(strMsg);
      alert(strMsg);
      return { arrObjLst: [], sheetName: '', fileName: '' };
    }

    const strWhereCond = await CombineFunction4GeneCodeCondition();
    let arrFunction4GeneCodeObjLst: Array<clsFunction4GeneCodeEN> = [];
    try {
      this.recCount = await Function4GeneCode_GetRecCountByCondAsync(strWhereCond);
      if (this.recCount == 0) {
        const lblMsg: HTMLSpanElement = <HTMLSpanElement>document.createElement('span');
        lblMsg.innerHTML = Format('根据条件:[{0}]获取的对象列表数为0!', strWhereCond);
        const strMsg = Format('在绑定Gv过程中,根据条件:[{0}]获取的对象列表数为0!', strWhereCond);
        console.error('Error: ', strMsg);
        //console.trace();
        alert(strMsg);
        return { arrObjLst: [], sheetName: '', fileName: '' };
      }

      arrFunction4GeneCodeObjLst = await Function4GeneCode_GetObjLstAsync(strWhereCond);
    } catch (e) {
      const strMsg = `绑定GridView不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
      return { arrObjLst: [], sheetName: '', fileName: '' };
    }

    if (arrFunction4GeneCodeObjLst.length == 0) {
      const strMsg = `在ExportExcel过程中,根据条件获取的${this.thisTabName}记录数为0!`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return { arrObjLst: [], sheetName: '', fileName: '' };
    }

    try {
      const arrDataColumn = this.getListColumnsAi();
      arrFunction4GeneCodeObjLst = arrFunction4GeneCodeObjLst.sort(this.SortFunExportExcel);
      return this.CombineData(arrFunction4GeneCodeObjLst, arrDataColumn);
    } catch (e) {
      const strMsg = `绑定${this.thisTabName}对象列表不成功, ${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
      return { arrObjLst: [], sheetName: '', fileName: '' };
    }
  }

  /** 按导出列规格整理导出结果。 */
  public async ExportExcel_Function4GeneCodeAi(): Promise<ExportExcelData> {
    const raw = await this.ExportExcel_Function4GeneCode();
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
    await this.ExportExcel_Function4GeneCode();
  }

  /**
   * 复制记录按钮点击事件处理
   *
   * 流程：
   * 1. 验证是否选中了要复制的记录
   * 2. 执行复制操作
   * 3. 操作完成后刷新数据列表
   *
   * 使用场景：用户选择记录后，点击"复制"按钮
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnCopyRecord_Click)
   */
  public async btnCopyRecord_Click() {
    const strThisFuncName = this.btnCopyRecord_Click.name;
    try {
      const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
      if (arrKeyIds.length == 0) {
        alert(`请选择需要克隆的${this.thisTabName}记录!`);
        return '';
      }
      await this.CopyRecord(arrKeyIds);
      await this.BindGv_Function4GeneCode4Func(divVarSet.refDivList);
    } catch (e) {
      const strMsg = `复制记录不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /**
   * 复制记录的具体实现
   * @param arrFuncId4GC 要复制的记录主键列表
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CopyRecord)
   */
  public async CopyRecord(arrFuncId4GC: Array<string>) {
    const strThisFuncName = this.CopyRecord.name;
    try {
      const arrFunction4GeneCodeObjLst = await Function4GeneCode_GetObjLstByFuncId4GCLstAsync(
        arrFuncId4GC,
      );
      let intCount = 0;
      for (const objInFor of arrFunction4GeneCodeObjLst) {
        const strMaxStrId = await Function4GeneCode_GetMaxStrIdAsync();
        objInFor.funcId4GC = strMaxStrId;
        const returnBool = await Function4GeneCode_AddNewRecordAsync(objInFor);
        if (returnBool == true) {
          intCount++;
        } else {
          const strInfo = Format('克隆记录不成功!');
          alert(strInfo);
        }
      }
      const strInfo = Format('共克隆了{0}条记录!', intCount);
      alert(strInfo);
    } catch (e) {
      const strMsg = `复制记录不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error('Error: ', strMsg);
      alert(strMsg);
    }
  }

  /** 把实体列表组装成导出文件数据。 */
  public CombineData(
    arrFunction4GeneCodeObjLst: Array<clsFunction4GeneCodeEN>,
    arrDataColumn: Array<clsDataColumn>,
  ): ExportExcelData {
    const arrData = this.BuildExportRowsByColumns(
      arrFunction4GeneCodeObjLst,
      arrDataColumn,
      (obj, fld) => obj.GetFldValue(fld),
    );
    const strFileName = Format('函数4GeneCode({0})导出.xlsx', clsFunction4GeneCodeEN._CurrTabName);
    const strSheetName = '函数4GeneCode列表';
    return { arrObjLst: arrData, sheetName: strSheetName, fileName: strFileName };
  }

  /** 绑定表格内容并同步分页器。 */
  public async BindTab_Function4GeneCode4Func(
    divContainer: HTMLDivElement,
    arrFunction4GeneCodeExObjLst: Array<clsFunction4GeneCodeENEx>,
  ) {
    const strThisFuncName = this.BindTab_Function4GeneCode4Func.name;
    if (divContainer == null) {
      alert(Format('{0}不存在!', divContainer));
      return;
    }

    const arrDataColumn: Array<clsDataColumn> = this.getListColumnsAi();

    if (refFunction4GeneCode_List.value != null) {
      dataColumn.value = arrDataColumn;
      try {
        await this.ExtendTdFldFuncMap(arrFunction4GeneCodeExObjLst);
      } catch (e) {
        const strMsg = `扩展Td字段值的映射出错,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      await BindTabByList(arrFunction4GeneCodeExObjLst, this.dispAllErrMsg_q);
    } else {
      try {
        await this.ExtendFldFuncMap(arrFunction4GeneCodeExObjLst, arrDataColumn);
      } catch (e) {
        const strMsg = `扩展字段值的映射出错,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      const divDataLst = GetDivObjInDivObj(divContainer, 'divDataLst');
      if (divDataLst == null) {
        alert('在BindTab_Function4GeneCode4Func函数中，divDataLst不存在!');
        return;
      }
      await BindTab(
        divDataLst,
        arrFunction4GeneCodeExObjLst,
        arrDataColumn,
        clsFunction4GeneCodeEN.con_FuncId4GC,
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
  public async BindGv_Function4GeneCode4Func(divList: HTMLDivElement) {
    const strThisFuncName = this.BindGv_Function4GeneCode4Func.name;
    if (divList == null) {
      const strMsg = Format(
        '用于显示列表的div为空,请检查!(in {0}.{1})',
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    this.listPara.listDiv = divList;
    if (viewVarSet.sortFunction4GeneCodeBy == null) {
      const strMsg = Format(
        '在显示列表时,排序字段(sortFunction4GeneCodeBy)为空,请检查!(In BindGv_Function4GeneCodeCache)',
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }

    const strWhereCond = await CombineFunction4GeneCodeCondition();
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex);
    let arrFunction4GeneCodeExObjLst: Array<clsFunction4GeneCodeENEx> = [];

    try {
      this.recCount = await Function4GeneCode_GetRecCountByCondAsync(strWhereCond);
      if (this.recCount == 0) {
        const lblMsg: HTMLSpanElement = <HTMLSpanElement>document.createElement('span');
        lblMsg.innerHTML = Format('根据条件:[{0}]获取的对象列表数为0!', strWhereCond);
        const strMsg = Format('在绑定Gv过程中,根据条件:[{0}]获取的对象列表数为0!', strWhereCond);
        console.error('Error: ', strMsg);
        alert(strMsg);
        BindTabByList(arrFunction4GeneCodeExObjLst, true);
        return;
      }

      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: viewVarSet.sortFunction4GeneCodeBy,
        sortFun: (x, y) => {
          console.log(x, y);
          return 0;
        },
      };
      arrFunction4GeneCodeExObjLst = await Function4GeneCodeEx_GetObjExLstByPagerAsync(
        objPagerPara,
      );
    } catch (e) {
      const strMsg = `绑定GridView不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }

    if (arrFunction4GeneCodeExObjLst.length == 0) {
      const strKey = Format('{0}', clsFunction4GeneCodeEN._CurrTabName);
      const strMsg = `根据条件获取的${this.thisTabName}记录数为0!(Key=${strKey})`;
      console.error('Error: ', strMsg);
      this.objPager.Hide(divList, this.divName4Pager);
      return;
    }

    try {
      await this.BindTab_Function4GeneCode4Func(divList, arrFunction4GeneCodeExObjLst);
    } catch (e) {
      const strMsg = `绑定${this.thisTabName}对象列表不成功, ${e}.(in ${this.constructor.name}.${strThisFuncName})`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /** 为非实体原生字段补充显示映射。 */
  public async ExtendFldFuncMap(
    arrFunction4GeneCodeExObjLst: Array<clsFunction4GeneCodeENEx>,
    arrDataColumn: Array<clsDataColumn>,
  ) {
    const arrFldName = clsFunction4GeneCodeEN._AttributeName;
    for (const objDataColumn of arrDataColumn) {
      if (IsNullOrEmpty(objDataColumn.fldName) == true) continue;
      if (arrFldName.indexOf(objDataColumn.fldName) > -1) continue;
      for (const objInFor of arrFunction4GeneCodeExObjLst) {
        await Function4GeneCodeEx_FuncMapByFldName(objDataColumn.fldName, objInFor);
      }
    }
  }

  /** 为表格Td字段补充显示映射。 */
  public async ExtendTdFldFuncMap(arrFunction4GeneCodeExObjLst: Array<clsFunction4GeneCodeENEx>) {
    const arrFldName = clsFunction4GeneCodeEN._AttributeName;
    const tdFieldNames = this.ResolveTdFieldNames(
      refFunction4GeneCode_List.value?.tdFieldNames,
      dataColumn.value,
      IsNullOrEmpty,
    );

    if (tdFieldNames.length === 0) return;

    for (const normalizedFldName of tdFieldNames) {
      if (arrFldName.indexOf(normalizedFldName) > -1) continue;

      for (const objInFor of arrFunction4GeneCodeExObjLst) {
        await Function4GeneCodeEx_FuncMapByFldName(normalizedFldName, objInFor);
      }
    }
  }

  /**
   * 导出时使用的默认排序规则。
   * ⚠️ 这是一个示例方法，使用从导出区域字段中选择的前 2 个字段。
   * ⚠️ 请根据实际业务需求修改排序逻辑和字段选择。
   *
   * 当前示例使用的字段：
   * - userId (string)
   * - prjId (string)
   *
   * 表中可用的所有字段：
   * - userId (string)
   * - prjId (string)
   *
   * 作者: AutoGCLib
   * 日期: 2026-05-28
   */
  public SortFunExportExcel(a: clsFunction4GeneCodeEN, b: clsFunction4GeneCodeEN): number {
    // 第一级排序：prjId
    if (a.prjId == b.prjId) {
      if (a.prjId == null) return -1;
      if (b.prjId == null) return 1;
      return a.prjId.localeCompare(b.prjId);
    } else {
      if (b.userId == null) return -1;
      if (a.userId == null) return 1;
      return a.userId.localeCompare(b.userId);
    }
  }

  /** 列表排序入口。 */
  public async SortBy(objAnchorElement: any) {
    await this.SortByTemplate({
      objAnchorElement,
      currAscOrDesc: viewVarSet.ascOrDesc4SortFun,
      currSortBy: viewVarSet.sortFunction4GeneCodeBy,
      onEntitySort: async (sortColumnKey: string, sortDirection: string) => {
        if (
          Object.prototype.hasOwnProperty.call(clsFunction4GeneCodeENEx, sortColumnKey) == false
        ) {
          return false;
        }
        this.SortColumn(sortColumnKey, sortDirection);
        return true;
      },
      onApplySortState: (sortBy, ascOrDesc4SortFun, sortFun) => {
        viewVarSet.sortFunction4GeneCodeBy = sortBy;
        viewVarSet.ascOrDesc4SortFun = ascOrDesc4SortFun;
        const currentCtor = this.constructor as typeof Function4GeneCodeCRUDAi;
        currentCtor.sortFunStatic = sortFun;
      },
      onRefresh: async () => {
        await this.BindGv_Function4GeneCode4Func(this.listPara.listDiv);
      },
    });
  }

  /** 跳转到指定页。 */
  public async IndexPage(intPageIndex: number) {
    await this.IndexPageTemplate(intPageIndex, async () => {
      await this.BindGv_Function4GeneCode4Func(this.listPara.listDiv);
    });
  }

  /** 加载下一页。 */
  public async NextPage() {
    await this.NextPageTemplate(async () => {
      await this.BindGv_Function4GeneCode4Func(this.listPara.listDiv);
    });
  }

  /** 加载上一页。 */
  public async PrevPage() {
    await this.PrevPageTemplate(async () => {
      await this.BindGv_Function4GeneCode4Func(this.listPara.listDiv);
    });
  }

  /** 预留的容器绑定扩展点。 */
  public async BindInDiv(divBind: HTMLDivElement) {
    console.log(divBind);
  }
}
