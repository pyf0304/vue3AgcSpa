import { Ref } from 'vue';
import { ViewRegion_AddRelaEx } from './ViewRegion_AddRelaEx';
import ViewRegion_EditEx from './ViewRegion_EditEx';
import { ViewRegion_MultiCreateEx } from './ViewRegion_MultiCreateEx';

import { ViewRegionRelaCRUD } from '@/viewsBase/RegionManage/ViewRegionRelaCRUD';

import { clsViewRegionEN } from '@/ts/L0Entity/RegionManage/clsViewRegionEN';
import { clsViewRegionRelaEN } from '@/ts/L0Entity/RegionManage/clsViewRegionRelaEN';
import { clsViewRegionRelaENEx } from '@/ts/L0Entity/RegionManage/clsViewRegionRelaENEx';

import {
  ViewRegionRela_DelViewRegionRelasByCondAsync,
  ViewRegionRela_GetObjBymIdAsync,
  ViewRegionRela_GetObjBymIdCache,
  ViewRegionRela_GetObjExLstByPagerCache,
  ViewRegionRela_GetRecCountByCondAsync,
  ViewRegionRela_GetRecCountByCondCache,
  ViewRegionRela_ReFreshCache,
} from '@/ts/L3ForWApi/RegionManage/clsViewRegionRelaWApi';
import {
  ViewRegion_GetObjLstByRegionIdLstAsync,
  ViewRegion_UpdateRecordAsync,
} from '@/ts/L3ForWApi/RegionManage/clsViewRegionWApi';
import { ViewInfoEx_SetViewUpdDate } from '@/ts/L3ForWApiEx/PrjInterface/clsViewInfoExWApi';
import {
  ViewRegionRelaEx_FuncMapByFldName,
  ViewRegionRelaEx_GetRegionIdLstByViewIdCache,
} from '@/ts/L3ForWApiEx/RegionManage/clsViewRegionRelaExWApi';
import { vPrjTab_SimEx_BindDdl_TabIdByCmPrjIdInDivCache } from '@/ts/L3ForWApiEx/Table_Field/clsvPrjTab_SimExWApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import {
  GetCheckedKeyIdsInDivObj,
  GetDivObjInDivObj,
  GetFirstCheckedKeyIdInDivObj,
  GetSelectValueInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { BindTab, confirm_del, ObjectAssign, SortFun } from '@/ts/PubFun/clsCommFunc4Web';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { IShowList } from '@/ts/PubFun/IShowList';
import { AccessBindGvDefault, AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { useviewInfoStore } from '@/store/modules/viewInfo';
import { useviewRegionStore } from '@/store/modules/viewRegion';

import {
  CmPrjId_Local,
  divVarSet,
  ViewId_Main_Session,
  viewVarSet as viewVarSet_Rela,
  // PrjId_Session,
  // ViewId_Main_Session,
} from '@/views/RegionManage/ViewRegionRelaVueShare';
import { viewVarSet } from '@/views/RegionManage/ViewRegionVueShare';

import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { GetCurrPageIndex } from '@/ts/PubFun/clsOperateList';
import { ConditionCollection } from '@/ts/PubFun/ConditionCollection';

/* ViewRegionInTab 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:GeneCode)
*/
export class ViewRegionInTab extends ViewRegionRelaCRUD implements IShowList {
  public static Edit_MultiCreateRef: Ref<any>;
  public static Edit_AddRelaObj: any;

  /*
   * 每页记录数，在扩展类可以修改
   */
  public get pageSize(): number {
    return 20;
  }

  /**
   * 函数功能:初始设置，用来初始化一些变量值
   **/
  public async InitVarSet(): Promise<void> {
    console.log('InitVarSet in ViewInfoCRUDEx');
  }
  /**
   * 函数功能:初始化界面控件值，放在绑定下拉框之后
   **/
  public async InitCtlVar(): Promise<void> {
    console.log('InitCtlVar in ViewInfoCRUDEx');
  }
  BindGv(strType: string, strPara: string) {
    console.log(strType, strPara);
    alert('该类没有绑定该函数：[this.BindGv_vViewRegion]！');
    //this.BindGv_vViewRegion();
  }
  BindGvCache(strType: string, strPara: string) {
    console.log(strType, strPara);

    switch (strType) {
      case 'ViewRegion':
        this.BindGv_ViewRegionRela4Func(divVarSet.refDivList);
        break;
      case 'ViewRegionMultiCreate':
        this.BindGv_ViewRegionRela4Func(divVarSet.refDivList);
        break;
      case 'ViewRegionAddRela':
      case 'ViewRegionRelaAddRela':
        this.BindGv_ViewRegionRela4Func(divVarSet.refDivList);
        break;
      default:
        AccessBindGvDefault(strType);

        break;
    }
  }
  /*
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:Gen_WApi_TS_btn_Click)
    */
  public static async btn_Click(strCommandName: string, strKeyId: string) {
    const objPage: ViewRegionInTab = new ViewRegionInTab();
    const objPage_AddRela = new ViewRegion_AddRelaEx('ViewRegion_AddRelaEx', objPage);
    console.log(objPage_AddRela);
    const objPageEdit4Upd: ViewRegion_EditEx = new ViewRegion_EditEx('ViewRegion_EditEx', objPage);
    const objPage_MultiCreate = new ViewRegion_MultiCreateEx('ViewRegion_MultiCreateEx', objPage);
    console.log(objPage_MultiCreate);

    let arrKeyIds;
    let objViewRegionRela;
    switch (strCommandName) {
      case 'SetTabId': //自定义功能:设置表
        objPage.btnSetTabId_Click();
        break;
      case 'AddRelaViewRegion': //自定义功能
        ViewRegionInTab.Edit_MultiCreateRef.value.btnViewRegion_Edit_Click(
          strCommandName,
          strKeyId,
        );

        break;

      case 'Query': //查询记录
        objPage.btnQuery_Click();
        break;

      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
      case 'CreateWithMaxId': //添加记录使用最大关键字
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        ViewRegionInTab.Edit_AddRelaObj.btnViewRegion_Edit_Click(strCommandName, strKeyId);

        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
        strKeyId = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
        if (IsNullOrEmpty(strKeyId) == true) {
          const strMsg = '请选择需要修改的记录！';
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        objViewRegionRela = await ViewRegionRela_GetObjBymIdAsync(Number(strKeyId));
        if (objViewRegionRela != null) {
          objPageEdit4Upd.btnUpdateRecord_Click(objViewRegionRela.regionId);
        }
        break;
      case 'UpdateRecordInTab': //修改记录InTab
        //objPageEdit4Upd.btnUpdateRecordInTab_Click(strKeyId);
        break;
      case 'CopyRecord': //复制记录
      case 'Clone': //复制记录
        arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
        if (arrKeyIds.length == 0) {
          alert('请选择需要复制的记录！');
          return;
        }
        objPage.btnCopyRecord_Click();
        break;
      case 'DelRecord': //删除记录
      case 'Delete': //删除记录
        arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
        if (arrKeyIds.length == 0) {
          alert('请选择需要删除的记录！');
          return;
        }
        objPage.btnDelRecord_Click();
        break;
      case 'DelRecordInTab': //删除记录InTab
        objPage.btnDelRecordInTab_Click(strKeyId);
        break;
      case 'DelRecordBySign': //按标志删除记录
      case 'DeleteBySign': //按标志删除记录
        arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
        if (arrKeyIds.length == 0) {
          alert('请选择需要按标志删除的记录！');
          return;
        }
        //objPage.btnDelRecordBySign_Click();
        break;
      case 'UnDelRecordBySign': //按标志恢复删除记录
      case 'UnDeleteBySign': //按标志恢复删除记录
        arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
        if (arrKeyIds.length == 0) {
          alert('请选择需要恢复删除的记录！');
          return;
        }
        //objPage.btnUnDelRecordBySign_Click();
        break;

      default:
        AccessBtnClickDefault(strCommandName, 'ViewRegionInTab.btn_Click');

        break;
      case 'ExportExcel': //导出Excel
        alert('导出Excel功能还没有开通！');
        break;
    }
  }
  /* 函数功能:页面导入,当页面开始运行时所发生的事件
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PageLoad)
   */
  public async PageLoad() {
    // 在此处放置用户代码以初始化页面
    try {
      switch (this.qsOp) {
        case 'ViewEdit':
          break;
        case 'ViewRegionEdit':
          break;

        case '':
          //Main_ViewInfo.DispUserInfo();
          // await Main_ViewInfo.DispViewInfo();
          // await Main_ViewInfo.ShowCurrItem('ViewRegionInTab', '');
          break;
      }

      //ViewRegionCRUD.CmPrjIdCache = clsPrivateSessionStorage.cmPrjId;

      //const objViewInfo4Session = clsPubSessionStorage.ViewInfo4Session;
      const strViewId = clsPrivateSessionStorage.viewId_Main;
      console.log(strViewId);
      ViewRegion_MultiCreateEx.strViewIdCache = strViewId;
      // const strCondition = `viewId='${strViewId}'`;
      // const strCondition_PrjId = `prjId='${clsPrivateSessionStorage.currSelPrjId}'`;
      //1、为下拉框设置数据源,绑定列表数据
      //const ddl_ViewId = await this.BindDdl_ViewId("ddlViewId", strCondition_PrjId);
      //const ddl_RegionTypeId = await this.BindDdl_RegionTypeId("ddlRegionTypeId");
      //const ddl_OutRelaTabId = await this.BindDdl_TabId("ddlOutRelaTabId", strCondition_PrjId);
      //const ddl_InSqlDsTypeId = await this.BindDdl_SqlDsTypeId("ddlInSqlDsTypeId");
      //const ddl_InRelaTabId = await this.BindDdl_TabId("ddlInRelaTabId", strCondition_PrjId);

      //await PrjTabBindDdl_TabIdInDivCache(this.divName4List, "ddlTabId_SetFldValue", strPrjId);

      await vPrjTab_SimEx_BindDdl_TabIdByCmPrjIdInDivCache(
        divVarSet.refDivFunction,
        'ddlTabId_SetFldValue',
        clsPrivateSessionStorage.cmPrjId,
      );

      viewVarSet.sortViewRegionBy = 'regionId Asc';

      const strWhereCond = await this.CombineViewRegionRelaCondition();
      this.recCount = await ViewRegionRela_GetRecCountByCondAsync(strWhereCond);
      //2、显示无条件的表内容在GridView中
      await this.BindGv_ViewRegionRela4Func(divVarSet.refDivList);
    } catch (e: any) {
      const strMsg = `根据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }
  /** 把所有的查询控件内容组合成一个条件串
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineConditionObj)
   * @returns 条件串(strWhereCond)
   **/
  public async CombineViewRegionRelaConditionObj(): Promise<ConditionCollection> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    let strWhereCond = ' 1 = 1 ';
    // const strViewId = await clsPubVar4Web.GetViewId(this.qsViewId);
    const objViewRegion_Cond = new ConditionCollection();
    objViewRegion_Cond.SetCondFldValue(
      clsViewRegionRelaEN.con_PrjId,
      clsPrivateSessionStorage.currSelPrjId,
      '=',
    );
    objViewRegion_Cond.SetCondFldValue(
      clsViewRegionRelaEN.con_ViewId,
      ViewId_Main_Session.value,
      '=',
    );

    const arrRegionId = await ViewRegionRelaEx_GetRegionIdLstByViewIdCache(
      ViewId_Main_Session.value,
      clsPrivateSessionStorage.cmPrjId,
    );
    const strRegionIdLst = arrRegionId.join(',');
    objViewRegion_Cond.SetCondFldValue(clsViewRegionRelaEN.con_RegionId, strRegionIdLst, 'in');
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      //const objViewInfo4Session = clsPubSessionStorage.ViewInfo4Session;
      const strViewId = clsPrivateSessionStorage.viewId_Main;
      const arrRegionId = await ViewRegionRelaEx_GetRegionIdLstByViewIdCache(
        strViewId,
        clsPrivateSessionStorage.cmPrjId,
      );
      if (arrRegionId != null) {
        const strRegionIdLst = arrRegionId.join(',');
        strWhereCond += Format(
          ' And {0} in ({1})',
          clsViewRegionRelaEN.con_RegionId,
          strRegionIdLst,
        );
        objViewRegion_Cond.SetCondFldValue(clsViewRegionRelaEN.con_RegionId, strRegionIdLst, 'in');
      }

      //if (this.applicationTypeId_q != 0) {
      //    strWhereCond += Format(" And {0} = {1}", clsViewRegionEN.con_ApplicationTypeId, this.applicationTypeId_q);
      //    objViewRegion_Cond.SetCondFldValue(clsViewRegionEN.con_ApplicationTypeId, this.applicationTypeId_q, "=");
      //}
      //if (this.regionTypeId_q != "" && this.regionTypeId_q != "0") {
      //    strWhereCond += Format(" And {0} = '{1}'", clsViewRegionEN.con_RegionTypeId, this.regionTypeId_q);
      //    objViewRegion_Cond.SetCondFldValue(clsViewRegionEN.con_RegionTypeId, this.regionTypeId_q, "=");
      //}
      //if (this.tabId_q != "" && this.tabId_q != "0") {
      //    strWhereCond += Format(" And {0} = '{1}'", clsViewRegionEN.con_TabId, this.tabId_q);
      //    objViewRegion_Cond.SetCondFldValue(clsViewRegionEN.con_TabId, this.tabId_q, "=");
      //}
      //if (this.regionId_q != "") {
      //    strWhereCond += Format(" And {0} like '%{1}%'", clsViewRegionEN.con_RegionId, this.regionId_q);
      //    objViewRegion_Cond.SetCondFldValue(clsViewRegionEN.con_RegionId, this.regionId_q, "like");
      //}
      //if (this.regionName_q != "") {
      //    strWhereCond += Format(" And {0} like '%{1}%'", clsViewRegionEN.con_RegionName, this.regionName_q);
      //    objViewRegion_Cond.SetCondFldValue(clsViewRegionEN.con_RegionName, this.regionName_q, "like");
      //}
      //if (this.pageDispModeId_q != "" && this.pageDispModeId_q != "0") {
      //    strWhereCond += Format(" And {0} = '{1}'", clsViewRegionEN.con_PageDispModeId, this.pageDispModeId_q);
      //    objViewRegion_Cond.SetCondFldValue(clsViewRegionEN.con_PageDispModeId, this.pageDispModeId_q, "=");
      //}
      //if (this.containerTypeId_q != "" && this.containerTypeId_q != "0") {
      //    strWhereCond += Format(" And {0} = '{1}'", clsViewRegionEN.con_ContainerTypeId, this.containerTypeId_q);
      //    objViewRegion_Cond.SetCondFldValue(clsViewRegionEN.con_ContainerTypeId, this.containerTypeId_q, "=");
      //}
    } catch (objException) {
      const strMsg = Format(
        '(errid:WiTsCs0010)在组合查询条件对象(CombineViewRegionConditionObj)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    objViewRegion_Cond.whereCond = strWhereCond;
    return objViewRegion_Cond;
  }
  /* 把所有的查询控件内容组合成一个条件串
  (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
   <returns>条件串(strWhereCond)</returns>
 */
  public async CombineViewRegionRelaCondition(): Promise<string> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    //objViewInfo4Session = stuViewInfo4Session.GetObjByHtmlString(strViewInfo4Session);
    const strViewId = clsPrivateSessionStorage.viewId_Main;
    // const strCmPrjId = clsPrivateSessionStorage.cmPrjId;

    console.log(strViewId);
    const strWhereCond = `viewId='${strViewId}' `;

    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

    return strWhereCond;
  }

  /** 删除记录
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnDelRecord_Click)
   **/
  public async btnDelRecord_Click() {
    const strThisFuncName = this.btnDelRecord_Click.name;
    try {
      const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
      if (arrKeyIds.length == 0) {
        alert('请选择需要删除的记录！');
        return '';
      }
      if (confirm_del(arrKeyIds.length) == false) {
        return;
      }
      for (const strKeyId of arrKeyIds) {
        const strCondition = Format('mId={0}', strKeyId);
        await ViewRegionRela_DelViewRegionRelasByCondAsync(strCondition);
      }
      ViewRegionRela_ReFreshCache(clsPrivateSessionStorage.cmPrjId);
      await this.BindGv_ViewRegionRela4Func(divVarSet.refDivList);
    } catch (e) {
      const strMsg = Format(
        '删除记录不成功. {0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /** 扩展字段值的函数映射
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_ExtendFldFuncMap)
   * @param arrViewRegionRelaExObjLst:需要映射的对象列表
   * @param arrDataColumn:用于绑定表的数据列信息
   **/
  public async ExtendFldFuncMap(
    arrViewRegionRelaExObjLst: Array<clsViewRegionRelaENEx>,
    arrDataColumn: Array<clsDataColumn>,
  ) {
    const arrFldName = clsViewRegionRelaEN.AttributeName;
    for (const objDataColumn of arrDataColumn) {
      if (IsNullOrEmpty(objDataColumn.fldName) == true) continue;
      if (arrFldName.indexOf(objDataColumn.fldName) > -1) continue;
      for (const objInFor of arrViewRegionRelaExObjLst) {
        objInFor.prjId = clsPrivateSessionStorage.currSelPrjId;
        await ViewRegionRelaEx_FuncMapByFldName(objDataColumn.fldName, objInFor);
      }
    }
  }

  public get qsViewId() {
    const strName = 'viewId';
    const reg = new RegExp(`(^|&)${strName}=([^&]*)(&|$)`, 'i');
    const r = window.location.search.substr(1).match(reg);
    if (r != null) {
      return unescape(r[2]);
    }
    return '';
  }
  public get qsOp() {
    const strName = 'Op';
    const reg = new RegExp(`(^|&)${strName}=([^&]*)(&|$)`, 'i');
    const r = window.location.search.substr(1).match(reg);
    if (r != null) {
      return unescape(r[2]);
    }
    return '';
  }

  /** 显示ViewRegionRela对象的所有属性值
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindTab4Func)
   * @param divContainer:显示容器
   * @param arrViewRegionRelaExObjLst:需要绑定的对象列表
   **/
  public async BindTab_ViewRegionRela4Func(
    divContainer: HTMLDivElement,
    arrViewRegionRelaExObjLst: Array<clsViewRegionRelaENEx>,
  ) {
    const strThisFuncName = this.BindTab_ViewRegionRela4Func.name;
    const divDataLst = GetDivObjInDivObj(divContainer, 'divDataLst');
    const arrDataColumn: Array<clsDataColumn> = [
      {
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
          strKey = strText;
          return new HTMLElement();
        },
      },
      {
        fldName: clsViewRegionRelaEN.con_ViewId,
        sortBy: clsViewRegionRelaEN.con_ViewId,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '界面Id',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 2,
        funcName: (strKey: string, strText: string) => {
          strKey = strText;
          return new HTMLElement();
        },
      },
      {
        fldName: clsViewRegionRelaENEx.con_ViewName,
        sortBy: clsViewRegionRelaENEx.con_ViewName,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '界面名称',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 3,
        funcName: (strKey: string, strText: string) => {
          strKey = strText;
          return new HTMLElement();
        },
      },
      {
        fldName: clsViewRegionRelaEN.con_RegionId,
        sortBy: clsViewRegionRelaEN.con_RegionId,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '区域Id',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 4,
        funcName: (strKey: string, strText: string) => {
          strKey = strText;
          return new HTMLElement();
        },
      },
      {
        fldName: clsViewRegionRelaENEx.con_RegionName,
        sortBy: clsViewRegionRelaENEx.con_RegionName,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '区域名称',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 5,
        funcName: (strKey: string, strText: string) => {
          strKey = strText;
          return new HTMLElement();
        },
      },
      {
        fldName: clsViewRegionRelaENEx.con_RegionTabName,
        sortBy: clsViewRegionRelaENEx.con_RegionTabName,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '区域表名',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 6,
        funcName: (strKey: string, strText: string) => {
          strKey = strText;
          return new HTMLElement();
        },
      },
      {
        fldName: clsViewRegionRelaENEx.con_ClsName,
        sortBy: clsViewRegionRelaENEx.con_ClsName,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '类名',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 6,
        funcName: (strKey: string, strText: string) => {
          strKey = strText;
          return new HTMLElement();
        },
      },
      {
        fldName: clsViewRegionRelaENEx.con_ContainerTypeName,
        sortBy: clsViewRegionRelaENEx.con_ContainerTypeName,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '容器类型名',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 8,
        funcName: (strKey: string, strText: string) => {
          strKey = strText;
          return new HTMLElement();
        },
      },
      {
        fldName: clsViewRegionRelaENEx.con_FileName,
        sortBy: clsViewRegionRelaENEx.con_FileName,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '文件名',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 9,
        funcName: (strKey: string, strText: string) => {
          strKey = strText;
          return new HTMLElement();
        },
      },
      {
        fldName: clsViewRegionRelaENEx.con_PageDispModeName,
        sortBy: 'pageDispModeName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '显示模式',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 10,
        funcName: (strKey: string, strText: string) => {
          strKey = strText;
          return new HTMLElement();
        },
      },
      {
        fldName: clsViewRegionRelaEN.con_UpdDate,
        sortBy: clsViewRegionRelaEN.con_UpdDate,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '修改日期',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 11,
        funcName: (strKey: string, strText: string) => {
          strKey = strText;
          return new HTMLElement();
        },
      },
      {
        fldName: clsViewRegionRelaENEx.con_FldNum,
        sortBy: clsViewRegionRelaENEx.con_FldNum,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '字段数',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 11,
        funcName: (strKey: string, strText: string) => {
          strKey = strText;
          return new HTMLElement();
        },
      },
      {
        fldName: clsViewRegionRelaENEx.con_RegionTypeOrderNum,
        sortBy: clsViewRegionRelaENEx.con_RegionTypeOrderNum,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '类型序号',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 12,
        funcName: (strKey: string, strText: string) => {
          strKey = strText;
          return new HTMLElement();
        },
      },
    ];
    try {
      await this.ExtendFldFuncMap(arrViewRegionRelaExObjLst, arrDataColumn);
    } catch (e) {
      const strMsg = Format(
        '扩展字段值的映射出错,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    await BindTab(
      divDataLst,
      arrViewRegionRelaExObjLst,
      arrDataColumn,
      clsViewRegionRelaEN.con_mId,
      this,
    );
    if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
      this.objPager.InitShow(divContainer, this.divName4Pager);
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
  }

  /** 设置字段值-TabId
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnSetFldValue_Click)
   **/
  public async btnSetTabId_Click() {
    const strThisFuncName = this.btnSetTabId_Click.name;
    try {
      const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
      if (arrKeyIds.length == 0) {
        alert('请选择需要克隆的记录！');
        return '';
      }
      const strTabId = GetSelectValueInDivObj(divVarSet.refDivFunction, 'ddlTabId_SetFldValue');
      if (strTabId == '') {
        const strMsg = '请输入表ID(TabId)!';
        console.error('Error: ', strMsg);
        //console.trace();
        alert(strMsg);
        return;
      }
      //console.log('strTabId=' + strTabId);
      //console.log('arrKeyIds=');
      //console.log(arrKeyIds);
      const arrRegionId = new Array<string>();
      for (const strKeyId of arrKeyIds) {
        const objViewRegionRela = await ViewRegionRela_GetObjBymIdCache(
          Number(strKeyId),
          clsPrivateSessionStorage.cmPrjId,
        );
        if (objViewRegionRela != null) arrRegionId.push(objViewRegionRela.regionId);
      }
      await this.SetTabId(arrRegionId, strTabId);

      await this.BindGv_ViewRegionRela4Func(divVarSet.refDivList);
    } catch (e) {
      const strMsg = Format(
        '设置记录不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /** 设置字段值-TabId
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_SetFieldValue)
   **/
  public async SetTabId(arrRegionId: Array<string>, strTabId: string) {
    const strThisFuncName = this.SetTabId.name;
    const viewInfoStore = useviewInfoStore();
    const viewRegionStore = useviewRegionStore();
    if (strTabId == null || strTabId == '') {
      const strMsg = '请输入表ID(TabId)!';
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return '';
    }
    if (arrRegionId.length == 0) {
      const strMsg = '没有选择记录，不能设置字段值!';
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return '';
    }
    try {
      const arrViewRegionObjLst = await ViewRegion_GetObjLstByRegionIdLstAsync(arrRegionId);
      let intCount = 0;
      for (const objInFor of arrViewRegionObjLst) {
        const objViewRegionEN = new clsViewRegionEN();
        ObjectAssign(objViewRegionEN, objInFor);
        objViewRegionEN.SetTabId(strTabId);
        let returnBool = false;
        try {
          objViewRegionEN.sfUpdFldSetStr = objViewRegionEN.updFldString; //设置哪些字段被修改(脏字段)
          returnBool = await ViewRegion_UpdateRecordAsync(objViewRegionEN);
        } catch (e) {
          const strMsg = Format(
            '设置记录不成功,{0}.(in {1}.{2})',
            e,
            this.constructor.name,
            strThisFuncName,
          );
          console.error(strMsg);
          throw strMsg;
        }
        if (returnBool == true) {
          const intNumber = await ViewInfoEx_SetViewUpdDate(clsPrivateSessionStorage.viewId_Main);
          if (intNumber > 0) {
            viewInfoStore.delObjByRegionId(objViewRegionEN.regionId);
            viewRegionStore.delObj(objViewRegionEN.regionId);
          }
          // const strInfo = Format('设置记录成功!');
          intCount++;
        } else {
          const strInfo = Format('设置记录不成功!');
          //显示信息框
          alert(strInfo);
        }
      }
      const strInfo = Format('共设置了{0}条记录!', intCount);
      alert(strInfo);
      //console.log('完成！');
      if (intCount > 0) {
        ViewRegionRela_ReFreshCache(clsPrivateSessionStorage.cmPrjId);
      }
    } catch (e) {
      const strMsg = Format(
        '设置记录不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }
  /** 根据条件获取相应的对象列表
   * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:Gen_Vue_Ts_BindGv4Func)
   **/
  public async BindGv_ViewRegionRela4Func(divList: HTMLDivElement) {
    const strThisFuncName = this.BindGv_ViewRegionRela4Func.name;
    if (viewVarSet_Rela.sortViewRegionRelaBy == null) {
      const strMsg = Format(
        '在显示列表时,排序字段(sortViewRegionRelaBy)为空,请检查!(In BindGv_ViewRegionRelaCache)',
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    const objViewRegionRelaCond = await this.CombineViewRegionRelaConditionObj();
    const strWhereCond = JSON.stringify(objViewRegionRelaCond);
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrViewRegionRelaExObjLst: Array<clsViewRegionRelaENEx> = [];
    try {
      this.recCount = await ViewRegionRela_GetRecCountByCondCache(
        objViewRegionRelaCond,
        CmPrjId_Local.value,
      );
      if (this.recCount == 0) {
        const lblMsg: HTMLSpanElement = <HTMLSpanElement>document.createElement('span');
        lblMsg.innerHTML = Format(
          '根据条件:[{0}]获取的对象列表数为0!',
          objViewRegionRelaCond.whereCond,
        );
        const strMsg = Format(
          '在绑定GvCache过程中,根据条件:[{0}]获取的对象列表数为0!',
          objViewRegionRelaCond.whereCond,
        );
        console.error('Error: ', strMsg);
        //console.trace();
        alert(strMsg);
        return;
      }

      let strSortFun = (x: any, y: any) => {
        console.log(x, y);
        return 0;
      };
      if (ViewRegionRelaCRUD.sortFunStatic != undefined) {
        strSortFun = ViewRegionRelaCRUD.sortFunStatic(viewVarSet.ascOrDesc4SortFun);
      }
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        conditionCollection: objViewRegionRelaCond,
        orderBy: viewVarSet_Rela.sortViewRegionRelaBy,
        sortFun: strSortFun,
      };
      arrViewRegionRelaExObjLst = await ViewRegionRela_GetObjExLstByPagerCache(
        objPagerPara,
        CmPrjId_Local.value,
      );
    } catch (e) {
      const strMsg = `绑定GridView不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    if (arrViewRegionRelaExObjLst.length == 0) {
      const strKey = Format('{0}_{1}', clsViewRegionRelaEN._CurrTabName, CmPrjId_Local.value);
      const strMsg = `根据条件获取的${this.thisTabName}记录数为0!(Key=${strKey})`;
      console.error('Error: ', strMsg);
      //console.trace();
      this.objPager.Hide(divList, this.divName4Pager);
      return;
    }
    try {
      await this.BindTab_ViewRegionRela4Func(divList, arrViewRegionRelaExObjLst);
      //console.log("完成BindGv_ViewRegionRela4Func!");
    } catch (e) {
      const strMsg = `绑定${this.thisTabName}对象列表不成功, ${e}.(in ${this.constructor.name}.${strThisFuncName})`;
      console.error(strMsg);
      alert(strMsg);
    }
  }
  /** 函数功能:特别处理列表中某一个字段排序，特别针对扩展字段
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_SortBy)
   * @param sortColumnKey:排序字段名
   * @param sortDirection:排序方向，升序还是降序
   **/
  public SortColumn(sortColumnKey: string, sortDirection: string): void {
    console.log(sortColumnKey, sortDirection);
  }
}
