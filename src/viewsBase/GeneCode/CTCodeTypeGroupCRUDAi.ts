import $ from 'jquery';
import { ExportExcelData } from '@/ts/PubFun/ExportExcelData';
import {
  CombineCTCodeTypeGroupConditionObj4ExportExcel,
  CombineCTCodeTypeGroupConditionObj,
  CTCodeTypeGroup_DeleteKeyIdCache,
  divVarSet,
  viewVarSet,
  dataColumn,
  BindTabByList,
  refCTCodeTypeGroup_List,
  inUse_f,
} from '@/views/GeneCode/CTCodeTypeGroupVueShare';
import {
  CTCodeTypeGroup_GetRecCountByCondCache,
  CTCodeTypeGroup_GetSubObjLstCache,
  CTCodeTypeGroup_ReFreshCache,
  CTCodeTypeGroup_AddNewRecordAsync,
  CTCodeTypeGroup_GetMaxStrIdAsync,
  CTCodeTypeGroup_GetObjLstByCtGroupIdLstAsync,
  CTCodeTypeGroup_UpdateRecordAsync,
  CTCodeTypeGroup_DelKeysAsync,
} from '@/ts/L3ForWApi/GeneCode/clsCTCodeTypeGroupWApi';
import {
  CTCodeTypeGroupEx_FuncMapByFldName,
  CTCodeTypeGroupEx_GetObjExLstByPagerCache,
} from '@/ts/L3ForWApiEx/GeneCode/clsCTCodeTypeGroupExWApi';

import { GetCheckedKeyIdsInDivObj, GetDivObjInDivObj } from '@/ts/PubFun/clsCommFunc4Ctrl';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsCTCodeTypeGroupENEx } from '@/ts/L0Entity/GeneCode/clsCTCodeTypeGroupENEx';
import { clsCTCodeTypeGroupEN } from '@/ts/L0Entity/GeneCode/clsCTCodeTypeGroupEN';
import { ObjectAssign, BindTab, confirmDel } from '@/ts/PubFun/clsCommFunc4Web';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { clsOperateList, GetCurrPageIndex } from '@/ts/PubFun/clsOperateList';
import { AIOperateListBase } from '@/viewsBase/common/AIOperateListBase';
import {
  getExportColumnSpecsAi,
  getListColumnsAi,
} from '@/viewsBase/GeneCode/CTCodeTypeGroupCRUDAiColumns';

/**
 * Ai版基类：
 * 在Ai3基础上增加命令schema驱动，不改变原有基类行为。
 */
export abstract class CTCodeTypeGroupCRUDAi extends AIOperateListBase implements clsOperateList {
  public static vuebtn_Click: (strCommandName: string, strKeyId: any) => void;
  public static GetPropValue: (strPropName: string) => string;
  public static sortFunStatic: (ascOrDesc: string) => (x: any, y: any) => number;
  public recCount = 0;

  constructor() {
    super(divVarSet.refDivLayout, divVarSet.refDivList);
  }

  public get thisTabName(): string {
    return clsCTCodeTypeGroupEN._CurrTabName;
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
      if (viewVarSet.sortCTCodeTypeGroupBy == '') {
        viewVarSet.sortCTCodeTypeGroupBy = `${clsCTCodeTypeGroupEN.con_CtGroupId} Asc`;
      }

      await this.BindGv_CTCodeTypeGroup4Func(divVarSet.refDivList);
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
      await this.BindGv_CTCodeTypeGroup4Func(divVarSet.refDivList);
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
      const bolInUse: boolean = inUse_f.value == 'true' ? true : false; // $('#ddlInUse_SetFldValue').prop('checked'); // 布尔型下拉框直接获取checked属性
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
          await this.BindGv_CTCodeTypeGroup4Func(divVarSet.refDivList);
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
          await this.BindGv_CTCodeTypeGroup4Func(divVarSet.refDivList);
        },
      });
    } catch (e) {
      const strMsg = `删除${this.thisTabName}记录不成功. ${e}.(in ${this.constructor.name}.${this.btnDelRecord_Click.name}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  public async DelMultiRecord(arrCtGroupId: Array<string>) {
    const strThisFuncName = this.DelMultiRecord.name;
    try {
      const returnInt = await CTCodeTypeGroup_DelKeysAsync(arrCtGroupId);
      if (returnInt > 0) {
        CTCodeTypeGroup_ReFreshCache();

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
  public async SetInUse(arrCtGroupId: Array<string>, bolInUse: boolean) {
    const strThisFuncName = this.SetInUse.name;
    if (arrCtGroupId.length == 0) {
      alert('没有选择记录,不能设置字段值!');
      return '';
    }

    try {
      const arrCTCodeTypeGroupObjLst = await CTCodeTypeGroup_GetObjLstByCtGroupIdLstAsync(
        arrCtGroupId,
      );
      let intCount = 0;
      for (const objInFor of arrCTCodeTypeGroupObjLst) {
        const objCTCodeTypeGroupEN = new clsCTCodeTypeGroupEN();
        ObjectAssign(objCTCodeTypeGroupEN, objInFor);
        objCTCodeTypeGroupEN.SetCtGroupId(objInFor.ctGroupId);
        objCTCodeTypeGroupEN.SetInUse(bolInUse);

        let returnBool = false;
        try {
          objCTCodeTypeGroupEN.sfUpdFldSetStr = objCTCodeTypeGroupEN.updFldString;
          returnBool = await CTCodeTypeGroup_UpdateRecordAsync(objCTCodeTypeGroupEN);
        } catch (e) {
          const strMsg = `设置记录不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
          console.error(strMsg);
          throw strMsg;
        }

        if (returnBool == true) {
          CTCodeTypeGroup_DeleteKeyIdCache({ ctGroupId: objInFor.ctGroupId });
          intCount++;
        } else {
          alert('设置记录不成功!');
        }
      }

      alert(`共设置了${intCount}条记录!`);
      if (intCount > 0) {
        CTCodeTypeGroup_ReFreshCache();
      }
    } catch (e) {
      const strMsg = `设置记录不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /** 按当前查询条件导出原始列表数据。 */
  public async ExportExcel_CTCodeTypeGroupCache(): Promise<ExportExcelData> {
    const strThisFuncName = this.ExportExcel_CTCodeTypeGroupCache.name;
    if (viewVarSet.sortCTCodeTypeGroupBy == null) {
      const strMsg = Format(
        '在显示列表时,排序字段(sortCTCodeTypeGroupBy)为空,请检查!(In BindGv_CTCodeTypeGroupCache)',
      );
      console.error(strMsg);
      alert(strMsg);
      return { arrObjLst: [], sheetName: '', fileName: '' };
    }

    const objCTCodeTypeGroupCond = await CombineCTCodeTypeGroupConditionObj4ExportExcel();
    let arrCTCodeTypeGroupObjLst: Array<clsCTCodeTypeGroupEN> = [];
    try {
      this.recCount = await CTCodeTypeGroup_GetRecCountByCondCache(objCTCodeTypeGroupCond);
      if (this.recCount == 0) {
        const strMsg = Format(
          '在绑定GvCache过程中,根据条件:[{0}]获取的对象列表数为0!',
          objCTCodeTypeGroupCond.whereCond,
        );
        console.error(strMsg);
        alert(strMsg);
        return { arrObjLst: [], sheetName: '', fileName: '' };
      }
      arrCTCodeTypeGroupObjLst = await CTCodeTypeGroup_GetSubObjLstCache(objCTCodeTypeGroupCond);
    } catch (e) {
      const strMsg = `绑定GridView不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
      return { arrObjLst: [], sheetName: '', fileName: '' };
    }

    if (arrCTCodeTypeGroupObjLst.length == 0) {
      return { arrObjLst: [], sheetName: '', fileName: '' };
    }

    try {
      const arrDataColumn = this.getListColumnsAi();
      arrCTCodeTypeGroupObjLst = arrCTCodeTypeGroupObjLst.sort(this.SortFunExportExcel);
      return this.CombineData(arrCTCodeTypeGroupObjLst, arrDataColumn);
    } catch (e) {
      const strMsg = `绑定${this.thisTabName}对象列表不成功, ${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
      return { arrObjLst: [], sheetName: '', fileName: '' };
    }
  }

  /** 按导出列规格整理导出结果。 */
  public async ExportExcel_CTCodeTypeGroupCacheAi(): Promise<ExportExcelData> {
    const raw = await this.ExportExcel_CTCodeTypeGroupCache();
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
    await this.ExportExcel_CTCodeTypeGroupCache();
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
      await this.BindGv_CTCodeTypeGroup4Func(divVarSet.refDivList);
    } catch (e) {
      const strMsg = `复制记录不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /**
   * 复制记录的具体实现
   * @param arrCtGroupId 要复制的记录主键列表
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CopyRecord)
   */
  public async CopyRecord(arrCtGroupId: Array<string>) {
    const strThisFuncName = this.CopyRecord.name;
    try {
      const arrCTCodeTypeGroupObjLst = await CTCodeTypeGroup_GetObjLstByCtGroupIdLstAsync(
        arrCtGroupId,
      );
      let intCount = 0;
      for (const objInFor of arrCTCodeTypeGroupObjLst) {
        const strMaxStrId = await CTCodeTypeGroup_GetMaxStrIdAsync();
        objInFor.ctGroupId = strMaxStrId; // 复制记录时，主键需要重新生成

        const returnBool = await CTCodeTypeGroup_AddNewRecordAsync(objInFor);
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
    arrCTCodeTypeGroupObjLst: Array<clsCTCodeTypeGroupEN>,
    arrDataColumn: Array<clsDataColumn>,
  ): ExportExcelData {
    const arrData = this.BuildExportRowsByColumns(
      arrCTCodeTypeGroupObjLst,
      arrDataColumn,
      (obj, fld) => obj.GetFldValue(fld),
    );
    const strFileName = Format('CTCodeTypeGroup({0})导出.xlsx', clsCTCodeTypeGroupEN._CurrTabName);
    const strSheetName = 'CTCodeTypeGroup列表';
    return { arrObjLst: arrData, sheetName: strSheetName, fileName: strFileName };
  }

  /** 绑定表格内容并同步分页器。 */
  public async BindTab_CTCodeTypeGroup4Func(
    divContainer: HTMLDivElement,
    arrCTCodeTypeGroupExObjLst: Array<clsCTCodeTypeGroupENEx>,
  ) {
    const strThisFuncName = this.BindTab_CTCodeTypeGroup4Func.name;
    if (divContainer == null) {
      alert(Format('{0}不存在!', divContainer));
      return;
    }

    const arrDataColumn: Array<clsDataColumn> = this.getListColumnsAi();

    if (refCTCodeTypeGroup_List.value != null) {
      dataColumn.value = arrDataColumn;
      try {
        await this.ExtendTdFldFuncMap(arrCTCodeTypeGroupExObjLst);
      } catch (e) {
        const strMsg = `扩展Td字段值的映射出错,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      await BindTabByList(arrCTCodeTypeGroupExObjLst, this.dispAllErrMsg_q);
    } else {
      try {
        await this.ExtendFldFuncMap(arrCTCodeTypeGroupExObjLst, arrDataColumn);
      } catch (e) {
        const strMsg = `扩展字段值的映射出错,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      const divDataLst = GetDivObjInDivObj(divContainer, 'divDataLst');
      if (divDataLst == null) {
        alert('在BindTab_CTCodeTypeGroup4Func函数中，divDataLst不存在!');
        return;
      }
      await BindTab(
        divDataLst,
        arrCTCodeTypeGroupExObjLst,
        arrDataColumn,
        clsCTCodeTypeGroupEN.con_CtGroupId,
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

  public async BindGv_CTCodeTypeGroup4Func(divList: HTMLDivElement) {
    const strThisFuncName = this.BindGv_CTCodeTypeGroup4Func.name;

    if (viewVarSet.sortCTCodeTypeGroupBy == null) {
      const strMsg = Format(
        '在显示列表时,排序字段(sortCTCodeTypeGroupBy)为空,请检查!(In BindGv_CTCodeTypeGroupCache)',
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }

    const objCTCodeTypeGroupCond = await CombineCTCodeTypeGroupConditionObj();
    const strWhereCond = JSON.stringify(objCTCodeTypeGroupCond);
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex);
    let arrCTCodeTypeGroupExObjLst: Array<clsCTCodeTypeGroupENEx> = [];

    try {
      this.recCount = await CTCodeTypeGroup_GetRecCountByCondCache(objCTCodeTypeGroupCond);
      if (this.recCount == 0) {
        const strMsg = Format(
          '在绑定GvCache过程中,根据条件:[{0}]获取的对象列表数为0!',
          objCTCodeTypeGroupCond.whereCond,
        );
        console.error(strMsg);
        alert(strMsg);
        BindTabByList(arrCTCodeTypeGroupExObjLst, true);
        return;
      }

      let strSortFun = (x: any, y: any) => {
        console.log(x, y);
        return 0;
      };
      const currentCtor = this.constructor as typeof CTCodeTypeGroupCRUDAi;
      if (currentCtor.sortFunStatic != undefined) {
        strSortFun = currentCtor.sortFunStatic(viewVarSet.ascOrDesc4SortFun);
      }
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        conditionCollection: objCTCodeTypeGroupCond,
        orderBy: viewVarSet.sortCTCodeTypeGroupBy,
        sortFun: strSortFun,
      };

      arrCTCodeTypeGroupExObjLst = await CTCodeTypeGroupEx_GetObjExLstByPagerCache(objPagerPara);
    } catch (e) {
      const strMsg = `绑定GridView不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }

    if (arrCTCodeTypeGroupExObjLst.length == 0) {
      this.objPager.Hide(divList, this.divName4Pager);
      return;
    }

    try {
      await this.BindTab_CTCodeTypeGroup4Func(divList, arrCTCodeTypeGroupExObjLst);
    } catch (e) {
      const strMsg = `绑定${this.thisTabName}对象列表不成功, ${e}.(in ${this.constructor.name}.${strThisFuncName})`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /** 为非实体原生字段补充显示映射。 */
  public async ExtendFldFuncMap(
    arrCTCodeTypeGroupExObjLst: Array<clsCTCodeTypeGroupENEx>,
    arrDataColumn: Array<clsDataColumn>,
  ) {
    const arrFldName = clsCTCodeTypeGroupEN._AttributeName;
    for (const objDataColumn of arrDataColumn) {
      if (IsNullOrEmpty(objDataColumn.fldName) == true) continue;
      if (arrFldName.indexOf(objDataColumn.fldName) > -1) continue;
      for (const objInFor of arrCTCodeTypeGroupExObjLst) {
        await CTCodeTypeGroupEx_FuncMapByFldName(objDataColumn.fldName, objInFor);
      }
    }
  }

  /** 为表格Td字段补充显示映射。 */
  public async ExtendTdFldFuncMap(arrCTCodeTypeGroupExObjLst: Array<clsCTCodeTypeGroupENEx>) {
    const arrFldName = clsCTCodeTypeGroupEN._AttributeName;
    const tdFieldNames = this.ResolveTdFieldNames(
      refCTCodeTypeGroup_List.value?.tdFieldNames,
      dataColumn.value,
      IsNullOrEmpty,
    );

    if (tdFieldNames.length === 0) return;

    for (const normalizedFldName of tdFieldNames) {
      if (arrFldName.indexOf(normalizedFldName) > -1) continue;
      for (const objInFor of arrCTCodeTypeGroupExObjLst) {
        await CTCodeTypeGroupEx_FuncMapByFldName(normalizedFldName, objInFor);
      }
    }
  }

  /**
   * 导出时使用的默认排序规则。
   * ⚠️ 这是一个示例方法，使用从导出区域字段中选择的前 2 个字段。
   * ⚠️ 请根据实际业务需求修改排序逻辑和字段选择。
   *
   * 当前示例使用的字段：
   * - updDate (string)
   * - groupName (string)
   *
   * 表中可用的所有字段：
   * - updDate (string)
   * - groupName (string)
   *
   * 作者: AutoGCLib
   * 日期: 2026-06-06
   */
  public SortFunExportExcel(a: clsCTCodeTypeGroupEN, b: clsCTCodeTypeGroupEN): number {
    // 第一级排序：groupName
    if (a.groupName == b.groupName) {
      if (a.groupName == null) return -1;
      if (b.groupName == null) return 1;
      return a.groupName.localeCompare(b.groupName);
    } else {
      if (b.updDate == null) return -1;
      if (a.updDate == null) return 1;
      return a.updDate.localeCompare(b.updDate);
    }
  }

  /** 列表排序入口。 */
  public async SortBy(objAnchorElement: any) {
    await this.SortByTemplate({
      objAnchorElement,
      currAscOrDesc: viewVarSet.ascOrDesc4SortFun,
      currSortBy: viewVarSet.sortCTCodeTypeGroupBy,
      onEntitySort: async (sortColumnKey: string, sortDirection: string) => {
        if (Object.prototype.hasOwnProperty.call(clsCTCodeTypeGroupENEx, sortColumnKey) == false) {
          return false;
        }
        this.SortColumn(sortColumnKey, sortDirection);
        return true;
      },
      onApplySortState: (sortBy, ascOrDesc4SortFun, sortFun) => {
        viewVarSet.sortCTCodeTypeGroupBy = sortBy;
        viewVarSet.ascOrDesc4SortFun = ascOrDesc4SortFun;
        const currentCtor = this.constructor as typeof CTCodeTypeGroupCRUDAi;
        currentCtor.sortFunStatic = sortFun;
      },
      onRefresh: async () => {
        await this.BindGv_CTCodeTypeGroup4Func(this.listPara.listDiv);
      },
    });
  }

  /** 跳转到指定页。 */
  public async IndexPage(intPageIndex: number) {
    await this.IndexPageTemplate(intPageIndex, async () => {
      await this.BindGv_CTCodeTypeGroup4Func(this.listPara.listDiv);
    });
  }

  /** 加载下一页。 */
  public async NextPage() {
    await this.NextPageTemplate(async () => {
      await this.BindGv_CTCodeTypeGroup4Func(this.listPara.listDiv);
    });
  }

  /** 加载上一页。 */
  public async PrevPage() {
    await this.PrevPageTemplate(async () => {
      await this.BindGv_CTCodeTypeGroup4Func(this.listPara.listDiv);
    });
  }

  /** 预留的容器绑定扩展点。 */
  public async BindInDiv(divBind: HTMLDivElement) {
    console.log(divBind);
  }
}
