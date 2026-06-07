import { ExportExcelData } from '@/ts/PubFun/ExportExcelData';
import {
  CombineGC_CodeTypeRelationCondition,
  divVarSet,
  viewVarSet,
  dataColumn,
  BindTabByList,
  refGC_CodeTypeRelation_List,
} from '@/views/GeneCode/GC_CodeTypeRelationVueShare';
import {
  GC_CodeTypeRelation_GetRecCountByCondAsync,
  GC_CodeTypeRelation_GetObjLstAsync,
  GC_CodeTypeRelation_AddNewRecordAsync,
  GC_CodeTypeRelation_GetObjLstByRelationIdLstAsync,
  GC_CodeTypeRelation_UpdateRecordAsync,
  GC_CodeTypeRelation_DelKeysAsync,
} from '@/ts/L3ForWApi/GeneCode/clsGC_CodeTypeRelationWApi';
import {
  GC_CodeTypeRelationEx_FuncMapByFldName,
  GC_CodeTypeRelationEx_GetObjExLstByPagerAsync,
} from '@/ts/L3ForWApiEx/GeneCode/clsGC_CodeTypeRelationExWApi';

import {
  GetCheckedKeyIdsInDivObj,
  GetSelectValueInDivObj,
  GetDivObjInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsGC_CodeTypeRelationENEx } from '@/ts/L0Entity/GeneCode/clsGC_CodeTypeRelationENEx';
import { clsGC_CodeTypeRelationEN } from '@/ts/L0Entity/GeneCode/clsGC_CodeTypeRelationEN';
import { ObjectAssign, BindTab, confirmDel } from '@/ts/PubFun/clsCommFunc4Web';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { clsOperateList, GetCurrPageIndex } from '@/ts/PubFun/clsOperateList';
import { AIOperateListBase } from '@/viewsBase/common/AIOperateListBase';
import {
  getExportColumnSpecsAi,
  getListColumnsAi,
} from '@/viewsBase/GeneCode/GC_CodeTypeRelationCRUDAiColumns';

/**
 * Ai版基类：
 * 在Ai3基础上增加命令schema驱动，不改变原有基类行为。
 */
export abstract class GC_CodeTypeRelationCRUDAi
  extends AIOperateListBase
  implements clsOperateList
{
  public static vuebtn_Click: (strCommandName: string, strKeyId: any) => void;
  public static GetPropValue: (strPropName: string) => string;
  public static sortFunStatic: (ascOrDesc: string) => (x: any, y: any) => number;
  public recCount = 0;

  constructor() {
    super(divVarSet.refDivLayout, divVarSet.refDivList);
  }

  public get thisTabName(): string {
    return clsGC_CodeTypeRelationEN._CurrTabName;
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
      if (viewVarSet.sortGC_CodeTypeRelationBy == '') {
        viewVarSet.sortGC_CodeTypeRelationBy = `${clsGC_CodeTypeRelationEN.con_RelationId} Asc`;
      }

      await this.BindGv_GC_CodeTypeRelation4Func(divVarSet.refDivList);
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
      await this.BindGv_GC_CodeTypeRelation4Func(divVarSet.refDivList);
    });
  }

  /**
   * 设置子代码类型Id按钮点击事件处理
   *
   * 流程：
   * 1. 验证是否选中了记录
   * 2.验证是否选择了有效的子代码类型Id   * 3. 执行批量设置操作
   * 4. 操作完成后刷新数据列表
   *
   * 使用场景：用户选择多条记录后，点击"设置子代码类型Id"按钮
   */
  public async btnSetChildCodeTypeId_Click() {
    try {
      const strChildCodeTypeId = GetSelectValueInDivObj(
        divVarSet.refDivFunction,
        'ddlChildCodeTypeId_SetFldValue',
      );
      await this.ExecuteSelectionActionTemplate({
        selectedKeys: GetCheckedKeyIdsInDivObj(divVarSet.refDivList),
        emptySelectionMessage: `请选择需要设置子代码类型Id的${this.thisTabName}记录!`,
        beforeExecute: () => {
          if (strChildCodeTypeId == '') {
            const strMsg = '请输入子代码类型Id(ChildCodeTypeId)!';
            console.error(strMsg);
            alert(strMsg);
            return false;
          }
          return true;
        },
        execute: async (arrKeyIds) => {
          await this.SetChildCodeTypeId(arrKeyIds, strChildCodeTypeId);
        },
        onAfterExecute: async () => {
          await this.BindGv_GC_CodeTypeRelation4Func(divVarSet.refDivList);
        },
      });
    } catch (e) {
      const strMsg = `设置记录不成功,${e}.(in ${this.constructor.name}.${this.btnSetChildCodeTypeId_Click.name}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /**
   * 设置Ct关系类型Id按钮点击事件处理
   *
   * 流程：
   * 1. 验证是否选中了记录
   * 2.验证是否选择了有效的Ct关系类型Id   * 3. 执行批量设置操作
   * 4. 操作完成后刷新数据列表
   *
   * 使用场景：用户选择多条记录后，点击"设置Ct关系类型Id"按钮
   */
  public async btnSetCtRelationTypeId_Click() {
    try {
      const strCtRelationTypeId = GetSelectValueInDivObj(
        divVarSet.refDivFunction,
        'ddlCtRelationTypeId_SetFldValue',
      );
      await this.ExecuteSelectionActionTemplate({
        selectedKeys: GetCheckedKeyIdsInDivObj(divVarSet.refDivList),
        emptySelectionMessage: `请选择需要设置Ct关系类型Id的${this.thisTabName}记录!`,
        beforeExecute: () => {
          if (strCtRelationTypeId == '') {
            const strMsg = '请输入Ct关系类型Id(CtRelationTypeId)!';
            console.error(strMsg);
            alert(strMsg);
            return false;
          }
          return true;
        },
        execute: async (arrKeyIds) => {
          await this.SetCtRelationTypeId(arrKeyIds, strCtRelationTypeId);
        },
        onAfterExecute: async () => {
          await this.BindGv_GC_CodeTypeRelation4Func(divVarSet.refDivList);
        },
      });
    } catch (e) {
      const strMsg = `设置记录不成功,${e}.(in ${this.constructor.name}.${this.btnSetCtRelationTypeId_Click.name}`;
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
          await this.BindGv_GC_CodeTypeRelation4Func(divVarSet.refDivList);
        },
      });
    } catch (e) {
      const strMsg = `删除${this.thisTabName}记录不成功. ${e}.(in ${this.constructor.name}.${this.btnDelRecord_Click.name}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  public async DelMultiRecord(arrRelationId: Array<string>) {
    const strThisFuncName = this.DelMultiRecord.name;
    try {
      const returnInt = await GC_CodeTypeRelation_DelKeysAsync(arrRelationId);
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

  /** 批量设置子代码类型Id。 */
  public async SetChildCodeTypeId(arrRelationId: Array<string>, strChildCodeTypeId: string) {
    const strThisFuncName = this.SetChildCodeTypeId.name;
    if (strChildCodeTypeId == null || strChildCodeTypeId == '') {
      alert('请输入子代码类型Id(ChildCodeTypeId)!');
      return '';
    }
    if (arrRelationId.length == 0) {
      alert('没有选择记录,不能设置字段值!');
      return '';
    }

    try {
      const arrGC_CodeTypeRelationObjLst = await GC_CodeTypeRelation_GetObjLstByRelationIdLstAsync(
        arrRelationId,
      );
      let intCount = 0;
      for (const objInFor of arrGC_CodeTypeRelationObjLst) {
        const objGC_CodeTypeRelationEN = new clsGC_CodeTypeRelationEN();
        ObjectAssign(objGC_CodeTypeRelationEN, objInFor);
        objGC_CodeTypeRelationEN.SetRelationId(objInFor.relationId);
        objGC_CodeTypeRelationEN.SetChildCodeTypeId(strChildCodeTypeId);

        let returnBool = false;
        try {
          objGC_CodeTypeRelationEN.sfUpdFldSetStr = objGC_CodeTypeRelationEN.updFldString;
          returnBool = await GC_CodeTypeRelation_UpdateRecordAsync(objGC_CodeTypeRelationEN);
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
        //GC_CodeTypeRelation_ReFreshCache();
      }
    } catch (e) {
      const strMsg = `设置记录不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /** 批量设置Ct关系类型Id。 */
  public async SetCtRelationTypeId(arrRelationId: Array<string>, strCtRelationTypeId: string) {
    const strThisFuncName = this.SetCtRelationTypeId.name;
    if (strCtRelationTypeId == null || strCtRelationTypeId == '') {
      alert('请输入Ct关系类型Id(CtRelationTypeId)!');
      return '';
    }
    if (arrRelationId.length == 0) {
      alert('没有选择记录,不能设置字段值!');
      return '';
    }

    try {
      const arrGC_CodeTypeRelationObjLst = await GC_CodeTypeRelation_GetObjLstByRelationIdLstAsync(
        arrRelationId,
      );
      let intCount = 0;
      for (const objInFor of arrGC_CodeTypeRelationObjLst) {
        const objGC_CodeTypeRelationEN = new clsGC_CodeTypeRelationEN();
        ObjectAssign(objGC_CodeTypeRelationEN, objInFor);
        objGC_CodeTypeRelationEN.SetRelationId(objInFor.relationId);
        objGC_CodeTypeRelationEN.SetCtRelationTypeId(strCtRelationTypeId);

        let returnBool = false;
        try {
          objGC_CodeTypeRelationEN.sfUpdFldSetStr = objGC_CodeTypeRelationEN.updFldString;
          returnBool = await GC_CodeTypeRelation_UpdateRecordAsync(objGC_CodeTypeRelationEN);
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
        //GC_CodeTypeRelation_ReFreshCache();
      }
    } catch (e) {
      const strMsg = `设置记录不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /** 按当前查询条件导出原始列表数据。 */
  public async ExportExcel_GC_CodeTypeRelation(): Promise<ExportExcelData> {
    const strThisFuncName = this.ExportExcel_GC_CodeTypeRelation.name;
    if (viewVarSet.sortGC_CodeTypeRelationBy == null) {
      const strMsg = Format(
        '在显示列表时,排序字段(sortGC_CodeTypeRelationBy)为空,请检查!(In BindGv_GC_CodeTypeRelationCache)',
      );
      console.error(strMsg);
      alert(strMsg);
      return { arrObjLst: [], sheetName: '', fileName: '' };
    }

    const strWhereCond = await CombineGC_CodeTypeRelationCondition();
    let arrGC_CodeTypeRelationObjLst: Array<clsGC_CodeTypeRelationEN> = [];
    try {
      this.recCount = await GC_CodeTypeRelation_GetRecCountByCondAsync(strWhereCond);
      if (this.recCount == 0) {
        const lblMsg: HTMLSpanElement = <HTMLSpanElement>document.createElement('span');
        lblMsg.innerHTML = Format('根据条件:[{0}]获取的对象列表数为0!', strWhereCond);
        const strMsg = Format('在绑定Gv过程中,根据条件:[{0}]获取的对象列表数为0!', strWhereCond);
        console.error('Error: ', strMsg);
        //console.trace();
        alert(strMsg);
        return { arrObjLst: [], sheetName: '', fileName: '' };
      }

      arrGC_CodeTypeRelationObjLst = await GC_CodeTypeRelation_GetObjLstAsync(strWhereCond);
    } catch (e) {
      const strMsg = `绑定GridView不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
      return { arrObjLst: [], sheetName: '', fileName: '' };
    }

    if (arrGC_CodeTypeRelationObjLst.length == 0) {
      const strMsg = `在ExportExcel过程中,根据条件获取的${this.thisTabName}记录数为0!`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return { arrObjLst: [], sheetName: '', fileName: '' };
    }

    try {
      const arrDataColumn = this.getListColumnsAi();
      arrGC_CodeTypeRelationObjLst = arrGC_CodeTypeRelationObjLst.sort(this.SortFunExportExcel);
      return this.CombineData(arrGC_CodeTypeRelationObjLst, arrDataColumn);
    } catch (e) {
      const strMsg = `绑定${this.thisTabName}对象列表不成功, ${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
      return { arrObjLst: [], sheetName: '', fileName: '' };
    }
  }

  /** 按导出列规格整理导出结果。 */
  public async ExportExcel_GC_CodeTypeRelationAi(): Promise<ExportExcelData> {
    const raw = await this.ExportExcel_GC_CodeTypeRelation();
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
    await this.ExportExcel_GC_CodeTypeRelation();
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
      await this.BindGv_GC_CodeTypeRelation4Func(divVarSet.refDivList);
    } catch (e) {
      const strMsg = `复制记录不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /**
   * 复制记录的具体实现
   * @param arrRelationId 要复制的记录主键列表
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CopyRecord)
   */
  public async CopyRecord(arrRelationId: Array<string>) {
    const strThisFuncName = this.CopyRecord.name;
    try {
      const arrGC_CodeTypeRelationObjLst = await GC_CodeTypeRelation_GetObjLstByRelationIdLstAsync(
        arrRelationId,
      );
      let intCount = 0;
      for (const objInFor of arrGC_CodeTypeRelationObjLst) {
        const returnBool = await GC_CodeTypeRelation_AddNewRecordAsync(objInFor);
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
    arrGC_CodeTypeRelationObjLst: Array<clsGC_CodeTypeRelationEN>,
    arrDataColumn: Array<clsDataColumn>,
  ): ExportExcelData {
    const arrData = this.BuildExportRowsByColumns(
      arrGC_CodeTypeRelationObjLst,
      arrDataColumn,
      (obj, fld) => obj.GetFldValue(fld),
    );
    const strFileName = Format(
      'GC_代码类型关系({0})导出.xlsx',
      clsGC_CodeTypeRelationEN._CurrTabName,
    );
    const strSheetName = 'GC_代码类型关系列表';
    return { arrObjLst: arrData, sheetName: strSheetName, fileName: strFileName };
  }

  /** 绑定表格内容并同步分页器。 */
  public async BindTab_GC_CodeTypeRelation4Func(
    divContainer: HTMLDivElement,
    arrGC_CodeTypeRelationExObjLst: Array<clsGC_CodeTypeRelationENEx>,
  ) {
    const strThisFuncName = this.BindTab_GC_CodeTypeRelation4Func.name;
    if (divContainer == null) {
      alert(Format('{0}不存在!', divContainer));
      return;
    }

    const arrDataColumn: Array<clsDataColumn> = this.getListColumnsAi();

    if (refGC_CodeTypeRelation_List.value != null) {
      dataColumn.value = arrDataColumn;
      try {
        await this.ExtendTdFldFuncMap(arrGC_CodeTypeRelationExObjLst);
      } catch (e) {
        const strMsg = `扩展Td字段值的映射出错,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      await BindTabByList(arrGC_CodeTypeRelationExObjLst, this.dispAllErrMsg_q);
    } else {
      try {
        await this.ExtendFldFuncMap(arrGC_CodeTypeRelationExObjLst, arrDataColumn);
      } catch (e) {
        const strMsg = `扩展字段值的映射出错,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      const divDataLst = GetDivObjInDivObj(divContainer, 'divDataLst');
      if (divDataLst == null) {
        alert('在BindTab_GC_CodeTypeRelation4Func函数中，divDataLst不存在!');
        return;
      }
      await BindTab(
        divDataLst,
        arrGC_CodeTypeRelationExObjLst,
        arrDataColumn,
        clsGC_CodeTypeRelationEN.con_RelationId,
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

  public async BindGv_GC_CodeTypeRelation4Func(divList: HTMLDivElement) {
    const strThisFuncName = this.BindGv_GC_CodeTypeRelation4Func.name;

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
    if (viewVarSet.sortGC_CodeTypeRelationBy == null) {
      const strMsg = Format(
        '在显示列表时,排序字段(sortGC_CodeTypeRelationBy)为空,请检查!(In BindGv_GC_CodeTypeRelationCache)',
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }

    const strWhereCond = await CombineGC_CodeTypeRelationCondition();
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex);
    let arrGC_CodeTypeRelationExObjLst: Array<clsGC_CodeTypeRelationENEx> = [];

    try {
      this.recCount = await GC_CodeTypeRelation_GetRecCountByCondAsync(strWhereCond);
      if (this.recCount == 0) {
        const lblMsg: HTMLSpanElement = <HTMLSpanElement>document.createElement('span');
        lblMsg.innerHTML = Format('根据条件:[{0}]获取的对象列表数为0!', strWhereCond);
        const strMsg = Format('在绑定Gv过程中,根据条件:[{0}]获取的对象列表数为0!', strWhereCond);
        console.error('Error: ', strMsg);
        alert(strMsg);
        BindTabByList(arrGC_CodeTypeRelationExObjLst, true);
        return;
      }

      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: viewVarSet.sortGC_CodeTypeRelationBy,
        sortFun: (x, y) => {
          console.log(x, y);
          return 0;
        },
      };

      arrGC_CodeTypeRelationExObjLst = await GC_CodeTypeRelationEx_GetObjExLstByPagerAsync(
        objPagerPara,
      );
    } catch (e) {
      const strMsg = `绑定GridView不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }

    if (arrGC_CodeTypeRelationExObjLst.length == 0) {
      const strKey = Format('{0}', clsGC_CodeTypeRelationEN._CurrTabName);
      const strMsg = `根据条件获取的${this.thisTabName}记录数为0!(Key=${strKey})`;
      console.error('Error: ', strMsg);
      this.objPager.Hide(divList, this.divName4Pager);
      return;
    }

    try {
      await this.BindTab_GC_CodeTypeRelation4Func(divList, arrGC_CodeTypeRelationExObjLst);
    } catch (e) {
      const strMsg = `绑定${this.thisTabName}对象列表不成功, ${e}.(in ${this.constructor.name}.${strThisFuncName})`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /** 为非实体原生字段补充显示映射。 */
  public async ExtendFldFuncMap(
    arrGC_CodeTypeRelationExObjLst: Array<clsGC_CodeTypeRelationENEx>,
    arrDataColumn: Array<clsDataColumn>,
  ) {
    const arrFldName = clsGC_CodeTypeRelationEN._AttributeName;
    for (const objDataColumn of arrDataColumn) {
      if (IsNullOrEmpty(objDataColumn.fldName) == true) continue;
      if (arrFldName.indexOf(objDataColumn.fldName) > -1) continue;
      for (const objInFor of arrGC_CodeTypeRelationExObjLst) {
        await GC_CodeTypeRelationEx_FuncMapByFldName(objDataColumn.fldName, objInFor);
      }
    }
  }

  /** 为表格Td字段补充显示映射。 */
  public async ExtendTdFldFuncMap(
    arrGC_CodeTypeRelationExObjLst: Array<clsGC_CodeTypeRelationENEx>,
  ) {
    const arrFldName = clsGC_CodeTypeRelationEN._AttributeName;
    const tdFieldNames = this.ResolveTdFieldNames(
      refGC_CodeTypeRelation_List.value?.tdFieldNames,
      dataColumn.value,
      IsNullOrEmpty,
    );

    if (tdFieldNames.length === 0) return;

    for (const normalizedFldName of tdFieldNames) {
      if (arrFldName.indexOf(normalizedFldName) > -1) continue;

      for (const objInFor of arrGC_CodeTypeRelationExObjLst) {
        await GC_CodeTypeRelationEx_FuncMapByFldName(normalizedFldName, objInFor);
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
   * - updUser (string)
   *
   * 表中可用的所有字段：
   * - updDate (string)
   * - updUser (string)
   *
   * 作者: AutoGCLib
   * 日期: 2026-06-05
   */
  public SortFunExportExcel(a: clsGC_CodeTypeRelationEN, b: clsGC_CodeTypeRelationEN): number {
    // 第一级排序：updUser
    if (a.updUser == b.updUser) {
      if (a.updUser == null) return -1;
      if (b.updUser == null) return 1;
      return a.updUser.localeCompare(b.updUser);
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
      currSortBy: viewVarSet.sortGC_CodeTypeRelationBy,
      onEntitySort: async (sortColumnKey: string, sortDirection: string) => {
        if (
          Object.prototype.hasOwnProperty.call(clsGC_CodeTypeRelationENEx, sortColumnKey) == false
        ) {
          return false;
        }
        this.SortColumn(sortColumnKey, sortDirection);
        return true;
      },
      onApplySortState: (sortBy, ascOrDesc4SortFun, sortFun) => {
        viewVarSet.sortGC_CodeTypeRelationBy = sortBy;
        viewVarSet.ascOrDesc4SortFun = ascOrDesc4SortFun;
        const currentCtor = this.constructor as typeof GC_CodeTypeRelationCRUDAi;
        currentCtor.sortFunStatic = sortFun;
      },
      onRefresh: async () => {
        await this.BindGv_GC_CodeTypeRelation4Func(this.listPara.listDiv);
      },
    });
  }

  /** 跳转到指定页。 */
  public async IndexPage(intPageIndex: number) {
    await this.IndexPageTemplate(intPageIndex, async () => {
      await this.BindGv_GC_CodeTypeRelation4Func(this.listPara.listDiv);
    });
  }

  /** 加载下一页。 */
  public async NextPage() {
    await this.NextPageTemplate(async () => {
      await this.BindGv_GC_CodeTypeRelation4Func(this.listPara.listDiv);
    });
  }

  /** 加载上一页。 */
  public async PrevPage() {
    await this.PrevPageTemplate(async () => {
      await this.BindGv_GC_CodeTypeRelation4Func(this.listPara.listDiv);
    });
  }

  /** 预留的容器绑定扩展点。 */
  public async BindInDiv(divBind: HTMLDivElement) {
    console.log(divBind);
  }
}
