//import { stuPrjTab4Session } from '@/ts/FunClass/stuPrjTab4Session';
// import * as $ from 'jquery';
import $ from 'jquery';
import { PrjTabCRUD } from '@/viewsBase/Table_Field/PrjTabCRUD';
import { clsPubFun4Visible } from '@/ts/FunClass/clsPubFun4Visible';
import { clsPubVar4Web } from '@/ts/FunClass/clsPubVar4Web';

import { clsPrjTabEN } from '@/ts/L0Entity/Table_Field/clsPrjTabEN';
import { clsPrjTabENEx } from '@/ts/L0Entity/Table_Field/clsPrjTabENEx';
import { enumTabMainType } from '@/ts/L0Entity/Table_Field/clsTabMainTypeEN';

import { enumTabType } from '@/ts/L0Entity/Table_Field/clsTabTypeEN';

import { FuncModule_Agc_BindDdl_FuncModuleAgcIdByPrjIdInDivCache } from '@/ts/L3ForWApi/PrjManage/clsFuncModule_AgcWApi';
import { Projects_GetObjByPrjIdCache } from '@/ts/L3ForWApi/PrjManage/clsProjectsWApi';
import { CacheMode_BindDdl_CacheModeIdByInUseInDivCache } from '@/ts/L3ForWApi/SystemSet/clsCacheModeWApi';
import { PrjTabFld_ReFreshCache } from '@/ts/L3ForWApi/Table_Field/clsPrjTabFldWApi';
import {
  PrjTab_GetObjLstByTabIdLstAsync,
  PrjTab_GetRecCountByCondAsync,
} from '@/ts/L3ForWApi/Table_Field/clsPrjTabWApi';
import { TabState_BindDdl_TabStateIdInDivCache } from '@/ts/L3ForWApi/Table_Field/clsTabStateWApi';
import { vPrjTab_Sim_ReFreshThisCache } from '@/ts/L3ForWApi/Table_Field/clsvPrjTab_SimWApi';
import {
  CmProjectPrjTabEx_CreateRela,
  CmProjectPrjTabEx_DelRela,
} from '@/ts/L3ForWApiEx/CodeMan/clsCmProjectPrjTabExWApi';
import { FuncModule_AgcEx_BindDdl_FuncModuleAgcIdForPrjTabInDivCacheEx } from '@/ts/L3ForWApiEx/PrjManage/clsFuncModule_AgcExWApi';
import {
  PrjTabEx_CheckTabFlds,
  PrjTabEx_CopyPrjTabInSameProject,
  PrjTabEx_DelRecordEx,
  PrjTabEx_FuncMapByFldName,
  PrjTabEx_GetObjExLstByPagerAsync,
  PrjTabEx_GetTabRecNum,
  PrjTabEx_SetIsShare,
} from '@/ts/L3ForWApiEx/Table_Field/clsPrjTabExWApi';
import { vPrjTab_SimEx_GetObjByTabIdCache } from '@/ts/L3ForWApiEx/Table_Field/clsvPrjTab_SimExWApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { GetSqlInStrByArray } from '@/ts/PubFun/clsArray';
import {
  CheckControlExistInDivObj,
  FocusSelectByIdInDivObj,
  GetCheckBoxValueInDivObj,
  GetCheckedKeyIdsInDivObj,
  GetDivObjInDivObj,
  GetFirstCheckedKeyIdInDivObj,
  GetSelectedIndexInDivObj,
  GetSelectIndexByIdInDivObj,
  GetSelectValue4BoolInDivObj,
  SetCheckBoxValueByIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import {
  BindDdl_TrueAndFalse,
  BindTab,
  confirm_del,
  Redirect,
  SortFun,
} from '@/ts/PubFun/clsCommFunc4Web';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { GetCurrPageIndex, GetSortBy } from '@/ts/PubFun/clsOperateList';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { IShowList } from '@/ts/PubFun/IShowList';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { vFieldTab_Sim_GetObjLstCache } from '@/ts/L3ForWApi/Table_Field/clsvFieldTab_SimWApi';
import { AccessBindGvDefault, AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { clsvFieldTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvFieldTab_SimEN';
import { usePrjTabFldStore } from '@/store/modules/prjTabFld';
import {
  divVarSet,
  refPrjTab_Detail,
  refPrjTab_Edit,
  viewVarSet,
  qryVarSet,
} from '@/views/Table_Field/PrjTabVueShare';
import { useviewInfoStore } from '@/store/modules/viewInfo';
import { useUserStore } from '@/store/modulesShare/user';
import { clsTabFeatureEN } from '@/ts/L0Entity/Table_Field/clsTabFeatureEN';
import { clsPrjTabFldEN } from '@/ts/L0Entity/Table_Field/clsPrjTabFldEN';
import { clsCmProjectPrjTabEN } from '@/ts/L0Entity/CodeMan/clsCmProjectPrjTabEN';
import { vCmProjectPrjTab_Sim_ReFreshThisCache } from '@/ts/L3ForWApi/CodeMan/clsvCmProjectPrjTab_SimWApi';
import { vPrjConstraint_Sim_ReFreshThisCache } from '@/ts/L3ForWApi/Table_Field/clsvPrjConstraint_SimWApi';
import { vCmProjectPrjTab_SimEx_GetTabIdLstByCmPrjIdCache } from '@/ts/L3ForWApiEx/CodeMan/clsvCmProjectPrjTab_SimExWApi';
import { PrjId_Session } from '@/views/GeneCode/ViewIdGCVariableRelaVueShare';
import PrjTab_EditEx from '@/views/Table_Field/PrjTab_EditEx';

/** PrjTabCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export default class PrjTabCRUDEx extends PrjTabCRUD implements IShowList {
  public static ShowLst: (
    arrObjLst: Array<clsPrjTabENEx>,
    bolIsShowErrMsg: boolean,
  ) => Promise<void>;

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
  public static ShowEmptyRecNumInfo: (strEmptyRecNumInfo: string) => void;

  //public static mstrListDiv=  "divDataLst";
  //public static mstrSortvPrjTabBy=  "tabId";
  /*
   * 每页记录数，在扩展类可以修改
   */
  public get pageSize(): number {
    return 10;
  }
  BindGv(strType: string, strPara: string) {
    console.log(strType, strPara);
    //alert('该类没有绑定该函数：[this.BindGv_vPrjTab]！');

    switch (strType) {
      case 'vPrjTab':
      case 'PrjTab':
        this.BindGv_PrjTab4Func(divVarSet.refDivList);
        break;
      default:
        AccessBindGvDefault(strType);

        break;
    }
  }
  BindGvCache(strType: string, strPara: string) {
    console.log(strType, strPara);

    switch (strType) {
      case 'vPrjTab':
      case 'PrjTab':
        this.BindGv_PrjTab4Func(divVarSet.refDivList);
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
  public static btn_Click(strCommandName: string, strKeyId: string) {
    let objPage: PrjTabCRUDEx;
    if (PrjTabCRUD.objPageCRUD == null) {
      PrjTabCRUD.objPageCRUD = new PrjTabCRUDEx();
      objPage = <PrjTabCRUDEx>PrjTabCRUD.objPageCRUD;
    } else {
      objPage = <PrjTabCRUDEx>PrjTabCRUD.objPageCRUD;
    }
    const objPageEdit = new PrjTab_EditEx('PrjTab_EditEx', objPage);
    console.log(objPageEdit);
    const strMsg = '';
    const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
    strKeyId = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
    switch (strCommandName) {
      case 'GetTabRecNum':
        objPage.btnGetTabRecNum_Click();
        break;
      case 'Query': //查询记录
        objPage.btnQuery_Click();
        break;
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
        //objPageEdit.btnAddNewRecordWithMaxId_Click();
        break;
      case 'CreateWithMaxId': //添加记录使用最大关键字
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        refPrjTab_Edit.value.btnPrjTab_Edit_Click(strCommandName, strKeyId);
        break;
      case 'Detail': //详细信息
        refPrjTab_Detail.value.btnPrjTab_Detail_Click(strCommandName, strKeyId);
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
      case 'UpdateRecordInTab': //修改记录InTab
        refPrjTab_Edit.value.btnPrjTab_Edit_Click(strCommandName, strKeyId);
        break;
      case 'CheckTabFlds': //自定义功能:设置默认Cm项目
        objPage.btnCheckTabFlds_Click();
        break;
      case 'SelectTabIdInTab': //自定义功能:设置默认Cm项目
        objPage.btnSelectTabIdInTab_Click(strKeyId);
        break;
      case 'SetDefaCmPrjId': //自定义功能:设置默认Cm项目
        objPage.btnSetDefaCmPrjId_Click();
        break;

      case 'RemoveDefaCmPrjId': //自定义功能:从默认项目移除
        objPage.btnRemoveDefaCmPrjId_Click();
        break;
      case 'SetTabStateId': //查询记录
        objPage.btnSetTabStateId_Click();
        break;

      case 'SetIsShare': //查询记录
        objPage.btnSetIsShare_Click();
        break;
      case 'SetFuncModuleAgcId': //查询记录
        objPage.btnSetFuncModuleAgcId_Click();
        break;

      case 'SetCacheModeId': //查询记录
        objPage.btnSetCacheModeId_Click();
        break;

      case 'CopyRecord': //复制记录
      case 'Clone': //复制记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要复制的记录！');
          return;
        }
        objPage.btnCopyRecord_Click();
        break;
      case 'DelRecord': //删除记录
      case 'Delete': //删除记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要删除的记录！');
          return;
        }
        objPage.btnDelRecord_Click();
        break;
      case 'DelRecordBySign': //按标志删除记录
      case 'DeleteBySign': //按标志删除记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要按标志删除的记录！');
          return;
        }
        //objPage.btnDelRecordBySign_Click();
        break;
      case 'UnDelRecordBySign': //按标志恢复删除记录
      case 'UnDeleteBySign': //按标志恢复删除记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要恢复删除的记录！');
          return;
        }
        //objPage.btnUnDelRecordBySign_Click();
        break;
      case 'GoTop': //置顶记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要置顶的记录！');
          return;
        }
        //objPage.btnGoTop_Click();
        break;
      case 'GoBottum': //移底记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要移底的记录！');
          return;
        }
        //objPage.btnGoBottum_Click();
        break;
      case 'UpMove': //上移记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要上移的记录！');
          return;
        }
        //objPage.btnUpMove_Click();
        break;
      case 'DownMove': //下移记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要下移的记录！');
          return;
        }
        //objPage.btnDownMove_Click();
        break;
      case 'ReOrder': //重序记录
        //objPage.btnReOrder_Click();
        break;
      case 'ExportExcel': //导出Excel
        alert('导出Excel功能还没有开通！');
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'PrjTabCRUDEx.btn_Click');
        alert(strMsg);
        break;
    }
  }
  public static async GetFieldTab() {
    // const strWhere = `${clsvFieldTab_SimEN.con_PrjId} = '${clsPrivateSessionStorage.currSelPrjId}'`;
    const arrObjLst_Sel: Array<clsvFieldTab_SimEN> = await vFieldTab_Sim_GetObjLstCache(
      clsPrivateSessionStorage.currSelPrjId,
    );

    const jsonObj: { [key: string]: any } = {};
    jsonObj['ABC1'] = '001';
    for (const obj of arrObjLst_Sel) {
      //let str = Format("\"{0}\":\"{1}\"", obj.fldName, obj.fldId);
      jsonObj[obj.fldName] = obj.fldId;
    }
    const strKey = 'jsonObj';
    //console.log("1jsonObj in TS", jsonObj);
    sessionStorage.setItem(strKey, JSON.stringify(jsonObj));
  }
  /** 函数功能:为查询区绑定下拉框
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindDdl4QueryRegion)
   */
  public async BindDdl4QueryRegion() {
    // 在此处放置用户代码以初始化页面
    const strPrjId = clsPrivateSessionStorage.currSelPrjId; //定义条件字段
    if (strPrjId == '9991') {
      const strMsg = Format("PrjTabCRUD.PrjIdCache='9991'，还没有被赋正确的值,请检查!");
      throw strMsg;
    }
    // await this.SetDdl_FuncModuleAgcIdInDiv(strPrjId); //查询区域
    // await this.SetDdl_TabStateIdInDiv(); //查询区域
    // await this.SetDdl_TabMainTypeIdInDiv(); //查询区域
    // await this.SetDdl_TabTypeIdInDiv(); //查询区域
    // await this.SetDdl_SqlDsTypeIdInDiv(); //查询区域
    // BindDdl_TrueAndFalse('ddlIsUseCache_q');
    // BindDdl_TrueAndFalse('ddlIsShare_q');
    BindDdl_TrueAndFalse('ddlIsShare_SetFldValue');
    // await this.SetDdl_CacheModeIdInDiv(true); //查询区域
    // await this.SetDdl_PrimaryTypeIdInDiv();//查询区域
    //设置下拉框的初始值
    // this.tabStateId_q = enumTabState.Normal_01;
  }
  /** 把所有的查询控件内容组合成一个条件串
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
   * @returns 条件串(strWhereCond)
   **/
  public async CombinePrjTabCondition(): Promise<string> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    let strWhereCond = ' 1 = 1 ';
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    strWhereCond += Format(
      " and {1}.prjId ='{0}'",
      clsPrivateSessionStorage.currSelPrjId,
      clsPrjTabEN._CurrTabName,
    );
    try {
      if (this.showPureClass_q == false) {
        strWhereCond += Format(
          " And {2}.{0} <> '{1}'",
          clsPrjTabEN.con_TabTypeId,
          enumTabType.PureClass_0008,
          clsPrjTabEN._CurrTabName,
        );
      } else {
        strWhereCond += Format(
          " And {2}.{0} = '{1}'",
          clsPrjTabEN.con_TabTypeId,
          enumTabType.PureClass_0008,
          clsPrjTabEN._CurrTabName,
        );
      }

      if (qryVarSet.featureId_q != '' && qryVarSet.featureId_q != '0') {
        strWhereCond += ` And ${clsPrjTabEN.con_TabId} in (select ${clsPrjTabEN.con_TabId} from ${clsTabFeatureEN._CurrTabName} where ${clsTabFeatureEN.con_FeatureId}='${qryVarSet.featureId_q}')`;
        console.log('strWhereCond:', strWhereCond);
      }
      if (qryVarSet.includeFldId_q != '' && qryVarSet.includeFldId_q != '0') {
        strWhereCond += ` And ${clsPrjTabEN.con_TabId} in (select ${clsPrjTabEN.con_TabId} from ${clsPrjTabFldEN._CurrTabName} where ${clsPrjTabFldEN.con_FldId}='${qryVarSet.includeFldId_q}')`;
        console.log('strWhereCond:', strWhereCond);
      }
      if (this.showCurrCmPrjId_q == true) {
        strWhereCond += Format(
          " And {4}.{0} in (select {1}.{0} from {1} where {1}.{2}='{3}')",
          clsCmProjectPrjTabEN.con_TabId,
          clsCmProjectPrjTabEN._CurrTabName,
          clsCmProjectPrjTabEN.con_CmPrjId,
          clsPrivateSessionStorage.cmPrjId,
          clsPrjTabEN._CurrTabName,
        );
      }
      if (this.isReleToSqlTab_q == true) {
        strWhereCond += Format(
          " And {1}.{0} = '1'",
          clsPrjTabEN.con_IsReleToSqlTab,
          clsPrjTabEN._CurrTabName,
        );
      } else {
        strWhereCond += Format(
          " And {1}.{0} = '0'",
          clsPrjTabEN.con_IsReleToSqlTab,
          clsPrjTabEN._CurrTabName,
        );
      }
      // if (this.showShareTab_q == true) {
      //   strWhereCond += Format(
      //     " And {1}.{0} = '1'",
      //     clsPrjTabEN.con_IsShare,
      //     clsPrjTabEN._CurrTabName,
      //   );
      // } else {
      //   strWhereCond += Format(
      //     " And {1}.{0} = '0'",
      //     clsPrjTabEN.con_IsShare,
      //     clsPrjTabEN._CurrTabName,
      //   );
      // }
      if (this.dispProbableErrTab_q == true) {
        strWhereCond += Format(' And (Len({0}) > 0 )', clsPrjTabEN.con_ErrMsg);
      }

      //if (this.primaryTypeId_q != "" && this.primaryTypeId_q != "0") {
      //    strWhereCond += Format(" And {2}.{0} = '{1}'", clsPrjTabEN.con_PrimaryTypeId, this.primaryTypeId_q, clsPrjTabEN._CurrTabName);
      //}
      if (qryVarSet.tabName_q != '') {
        strWhereCond += Format(
          " And {2}.{0} like '%{1}%'",
          clsPrjTabEN.con_TabName,
          qryVarSet.tabName_q,
          clsPrjTabEN._CurrTabName,
        );
      }
      if (qryVarSet.funcModuleAgcId_q != '' && qryVarSet.funcModuleAgcId_q != '0') {
        strWhereCond += Format(
          " And {2}.{0} = '{1}'",
          clsPrjTabEN.con_FuncModuleAgcId,
          qryVarSet.funcModuleAgcId_q,
          clsPrjTabEN._CurrTabName,
        );
      }
      if (qryVarSet.tabStateId_q != '' && qryVarSet.tabStateId_q != '0') {
        strWhereCond += Format(
          " And {2}.{0} = '{1}'",
          clsPrjTabEN.con_TabStateId,
          qryVarSet.tabStateId_q,
          clsPrjTabEN._CurrTabName,
        );
      }
      if (qryVarSet.tabMainTypeId_q != '' && qryVarSet.tabMainTypeId_q != '0') {
        strWhereCond += Format(
          " And {2}.{0} = '{1}'",
          clsPrjTabEN.con_TabMainTypeId,
          qryVarSet.tabMainTypeId_q,
          clsPrjTabEN._CurrTabName,
        );
      }
      if (qryVarSet.tabTypeId_q != '' && qryVarSet.tabTypeId_q != '0') {
        strWhereCond += Format(
          " And {2}.{0} = '{1}'",
          clsPrjTabEN.con_TabTypeId,
          qryVarSet.tabTypeId_q,
          clsPrjTabEN._CurrTabName,
        );
      }
      if (qryVarSet.tabCnName_q != '') {
        strWhereCond += Format(
          " And {2}.{0} like '%{1}%'",
          clsPrjTabEN.con_TabCnName,
          qryVarSet.tabCnName_q,
          clsPrjTabEN._CurrTabName,
        );
      }
      if (qryVarSet.sqlDsTypeId_q != '' && qryVarSet.sqlDsTypeId_q != '0') {
        strWhereCond += Format(
          " And {2}.{0} = '{1}'",
          clsPrjTabEN.con_SqlDsTypeId,
          qryVarSet.sqlDsTypeId_q,
          clsPrjTabEN._CurrTabName,
        );
      }
      if (GetSelectedIndexInDivObj(divVarSet.refDivQuery, 'ddlIsUseCache_q') == 1) {
        strWhereCond += Format(
          " And {1}.{0} = '1'",
          clsPrjTabEN.con_IsUseCache,
          clsPrjTabEN._CurrTabName,
        );
      } else if (GetSelectedIndexInDivObj(divVarSet.refDivQuery, 'ddlIsUseCache_q') == 2) {
        strWhereCond += Format(
          " And {1}.{0} = '0'",
          clsPrjTabEN.con_IsUseCache,
          clsPrjTabEN._CurrTabName,
        );
      }
      if (GetSelectedIndexInDivObj(divVarSet.refDivQuery, 'ddlIsShare_q') == 1) {
        strWhereCond += Format(
          " And {1}.{0} = '1'",
          clsPrjTabEN.con_IsShare,
          clsPrjTabEN._CurrTabName,
        );
      } else if (GetSelectedIndexInDivObj(divVarSet.refDivQuery, 'ddlIsShare_q') == 2) {
        strWhereCond += Format(
          " And {1}.{0} = '0'",
          clsPrjTabEN.con_IsShare,
          clsPrjTabEN._CurrTabName,
        );
      }

      if (qryVarSet.cacheModeId_q != '' && qryVarSet.cacheModeId_q != '0') {
        strWhereCond += Format(
          " And {2}.{0} = '{1}'",
          clsPrjTabEN.con_CacheModeId,
          qryVarSet.cacheModeId_q,
          clsPrjTabEN._CurrTabName,
        );
      }
    } catch (objException) {
      const strMsg = Format(
        '(errid:WiTsCs0009)在组合查询条件(CombinePrjTabCondition)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    return strWhereCond;
  }
  /** 把所有的查询控件内容组合成一个条件串
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineConditionObj)
   * @returns 条件串(strWhereCond)
   */
  public async CombinePrjTabConditionObj(): Promise<clsPrjTabEN> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    let strWhereCond = ' 1 = 1 ';
    const objPrjTabCond = new clsPrjTabEN();
    if (this.showCurrCmPrjId_q == true) {
      const arrTabIdByCmPrjId = await vCmProjectPrjTab_SimEx_GetTabIdLstByCmPrjIdCache(
        clsPrivateSessionStorage.cmPrjId,
      );
      const arrTabIds = GetSqlInStrByArray(arrTabIdByCmPrjId, false);
      objPrjTabCond.SetCondFldValue(clsPrjTabEN.con_TabId, arrTabIds, 'in');

      strWhereCond += Format(
        " And {4}.{0} in (select {1}.{0} from {1} where {1}.{2}='{3}')",
        clsCmProjectPrjTabEN.con_TabId,
        clsCmProjectPrjTabEN._CurrTabName,
        clsCmProjectPrjTabEN.con_CmPrjId,
        clsPrivateSessionStorage.cmPrjId,
        clsPrjTabEN._CurrTabName,
      );
    }
    if (this.showPureClass_q == false) {
      objPrjTabCond.SetCondFldValue(
        clsPrjTabEN.con_TabMainTypeId,
        enumTabMainType.PureClass_0008,
        '<>',
      );

      strWhereCond += Format(
        " And {0} <> '{1}')",
        clsPrjTabEN.con_TabMainTypeId,
        enumTabMainType.PureClass_0008,
      );
    } else {
      objPrjTabCond.SetCondFldValue(
        clsPrjTabEN.con_TabMainTypeId,
        enumTabMainType.PureClass_0008,
        '=',
      );

      strWhereCond += Format(
        " And {0} = '{1}')",
        clsPrjTabEN.con_TabMainTypeId,
        enumTabMainType.PureClass_0008,
      );
    }
    if (this.dispProbableErrTab_q == true) {
      strWhereCond += Format(' And (Len({0}) > 0 )', clsPrjTabEN.con_ErrMsg);
      objPrjTabCond.SetCondFldValue(clsPrjTabEN.con_ErrMsg, '0', 'length greater');
    }
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      // if (this.showShareTab_q == false) {
      //   objPrjTabCond.SetCondFldValue(clsPrjTabEN.con_IsShare, false, '=');

      //   strWhereCond += Format(" And {0} = '0')", clsPrjTabEN.con_IsShare);
      // } else {
      //   objPrjTabCond.SetCondFldValue(clsPrjTabEN.con_IsShare, true, '=');
      //   strWhereCond += Format(" And {0} = '1')", clsPrjTabEN.con_IsShare);
      // }
      if (qryVarSet.tabName_q != '') {
        strWhereCond += ` And ${clsPrjTabEN.con_TabName} like '% ${qryVarSet.tabName_q}%'`;
        objPrjTabCond.SetCondFldValue(clsPrjTabEN.con_TabName, qryVarSet.tabName_q, 'like');
      }
      if (qryVarSet.funcModuleAgcId_q != '' && qryVarSet.funcModuleAgcId_q != '0') {
        strWhereCond += ` And ${clsPrjTabEN.con_FuncModuleAgcId} = '${qryVarSet.funcModuleAgcId_q}'`;
        objPrjTabCond.SetCondFldValue(
          clsPrjTabEN.con_FuncModuleAgcId,
          qryVarSet.funcModuleAgcId_q,
          '=',
        );
      }
      if (qryVarSet.tabStateId_q != '' && qryVarSet.tabStateId_q != '0') {
        strWhereCond += ` And ${clsPrjTabEN.con_TabStateId} = '${qryVarSet.tabStateId_q}'`;
        objPrjTabCond.SetCondFldValue(clsPrjTabEN.con_TabStateId, qryVarSet.tabStateId_q, '=');
      }
      if (this.showPureClass_q == false) {
        strWhereCond += Format(
          " And {0} <> '{1}'",
          clsPrjTabEN.con_TabTypeId,
          enumTabType.PureClass_0008,
        );
        objPrjTabCond.SetCondFldValue(clsPrjTabEN.con_TabTypeId, enumTabType.PureClass_0008, '<>');
      }
      //if (this.TabMainTypeId_q != "" && this.TabMainTypeId_q != "0") {
      //    strWhereCond += ` And ${clsPrjTabEN.con_TabMainTypeId} = '${this.TabMainTypeId_q}'`;
      //    objPrjTabCond.SetCondFldValue(clsPrjTabEN.con_TabMainTypeId, this.TabMainTypeId_q, "=");
      //}
      if (qryVarSet.tabTypeId_q != '' && qryVarSet.tabTypeId_q != '0') {
        strWhereCond += ` And ${clsPrjTabEN.con_TabTypeId} = '${qryVarSet.tabTypeId_q}'`;
        objPrjTabCond.SetCondFldValue(clsPrjTabEN.con_TabTypeId, qryVarSet.tabTypeId_q, '=');
      }
      //if (this.TabCnName_q != "") {
      //    strWhereCond += ` And ${clsPrjTabEN.con_TabCnName} like '% ${this.TabCnName_q}%'`;
      //    objPrjTabCond.SetCondFldValue(clsPrjTabEN.con_TabCnName, this.TabCnName_q, "like");
      //}
      if (qryVarSet.sqlDsTypeId_q != '' && qryVarSet.sqlDsTypeId_q != '0') {
        strWhereCond += ` And ${clsPrjTabEN.con_SqlDsTypeId} = '${qryVarSet.sqlDsTypeId_q}'`;
        objPrjTabCond.SetCondFldValue(clsPrjTabEN.con_SqlDsTypeId, qryVarSet.sqlDsTypeId_q, '=');
      }
    } catch (objException: any) {
      const strMsg = `(errid:WiTsCs0010)在组合查询条件对象(CombinePrjTabConditionObj)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    objPrjTabCond.whereCond = strWhereCond;
    return objPrjTabCond;
  }

  /** 函数功能:页面导入,当页面开始运行时所发生的事件
   */
  public async PageLoadCache() {
    const strThisFuncName = this.PageLoadCache.name;
    // 在此处放置用户代码以初始化页面
    try {
      PrjTabCRUDEx.GetFieldTab();

      PrjId_Session.value = clsPrivateSessionStorage.currSelPrjId;

      // 为查询区绑定下拉框
      await this.BindDdl4QueryRegion();
      if (IsNullOrEmpty(clsPrivateSessionStorage.prjTab_TabName) == false) {
        qryVarSet.tabName_q = clsPrivateSessionStorage.prjTab_TabName;
      }
      if (IsNullOrEmpty(clsPrivateSessionStorage.prjTab_FuncModuleAgcId) == false) {
        qryVarSet.funcModuleAgcId_q = clsPrivateSessionStorage.prjTab_FuncModuleAgcId;
      }

      //if (clsPrivateSessionStorage.prjTab_IsShare == true) {
      // this.showShareTab_q = clsPrivateSessionStorage.prjTab_IsShare;
      //}

      await TabState_BindDdl_TabStateIdInDivCache(
        divVarSet.refDivFunction,
        'ddlSetTabStateId_SetFldValue',
      ); //

      const strPrjId = clsPrivateSessionStorage.currSelPrjId; //定义条件字段
      await FuncModule_Agc_BindDdl_FuncModuleAgcIdByPrjIdInDivCache(
        divVarSet.refDivFunction,
        'ddlFuncModuleAgcId_SetFldValue',
        strPrjId,
      ); //

      const bolInUse = true; //定义条件字段
      await CacheMode_BindDdl_CacheModeIdByInUseInDivCache(
        divVarSet.refDivFunction,
        'ddlCacheModeId_SetFldValue',
        bolInUse,
      ); //

      viewVarSet.sortPrjTabBy = Format('{0} Desc', clsPrjTabEN.con_UpdDate);
      //2、显示无条件的表内容在GridView中
      await this.BindGv_PrjTab4Func(divVarSet.refDivList);
    } catch (e: any) {
      const strMsg = `页面启动不成功,${e}.(in ${this.constructor.name}.${strThisFuncName})`;
      console.error(strMsg);
      console.trace(strMsg);
      alert(strMsg);
    }
  }
  /** 显示vPrjTab对象的所有属性值
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindTab4Func)
    <param name = "divContainer">显示容器</param>
    <param name = "arrPrjTabObjLst">需要绑定的对象列表</param>
  */
  public async BindTab_PrjTab4Func(
    divContainer: HTMLDivElement,
    arrPrjTabExObjLst: Array<clsPrjTabENEx>,
  ) {
    const divDataLst = GetDivObjInDivObj(divContainer, 'divDataLst');
    console.log(divDataLst);
    const arrDataColumn: Array<clsDataColumn> = [
      {
        fldName: '',
        sortBy: '',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '',
        text: '',
        tdClass: 'text-left',
        columnType: 'CheckBox',
        orderNum: 1,
        funcName: () => {},
      },
      {
        fldName: 'tabNameEx',
        sortBy: 'tabName',
        sortFun: clsPubVar4Web.SortFun,
        getDataSource: '',
        colHeader: '表名',
        text: '',
        tdClass: 'text-left',
        columnType: 'LinkButton',
        orderNum: 3,
        funcName: (strKeyId: string, strText: string) => {
          const btn1: HTMLAnchorElement = document.createElement('a');
          btn1.innerHTML = strText;
          btn1.className = 'link-info text-info font-weight-bold ';
          btn1.setAttribute('onclick', `btn_Click('SelectTabIdInTab', '${strKeyId}');`);
          btn1.title = '单击进入综合维护，维护:表字段、表功能、表约束、表AI关系图等.';
          return btn1;
        },
      },
      {
        fldName: 'primaryTypeNameEx',
        sortBy: '',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '主键',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 6,
        funcName: () => {},
      },
      {
        fldName: 'fldNum',
        sortBy: clsPrjTabEN.con_FldNum, //sortBy: "vPrjTabFldNum|fldNum|PrjTab.tabId = vPrjTabFldNum.tabId",
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '字段数',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 5,
        funcName: () => {},
      },
      {
        fldName: 'tabFeatureConstraint',
        sortBy: '',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '表功能、约束',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 11,
        funcName: () => {},
      },

      {
        fldName: 'funcModuleName',
        sortBy: clsPrjTabEN.con_FuncModuleAgcId, //sortBy: "FuncModule_Agc|funcModuleName|PrjTab.FuncModuleAgcId=FuncModule_Agc.FuncModuleAgcId",
        sortFun: clsPubVar4Web.SortFun,
        getDataSource: '',
        colHeader: '模块',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 11,
        funcName: () => {},
      },

      {
        fldName: 'tabRecNum',
        sortBy: 'tabRecNum',
        sortFun: clsPubVar4Web.SortFun,
        getDataSource: '',
        colHeader: '表记录数',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 8,
        funcName: () => {},
      },
      {
        fldName: 'tabTypeNameEx',
        sortBy: clsPrjTabEN.con_TabTypeId, //"tabTypeNameEx",//sortBy: "TabMainType|TabMainTypeName|TabMainType.TabMainTypeId=PrjTab.TabMainTypeId",
        sortFun: clsPubVar4Web.SortFun,
        getDataSource: '',
        colHeader: 'Sql数据源',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 8,
        funcName: () => {},
      },

      {
        fldName: 'isReleToSqlTab',
        sortBy: 'isReleToSqlTab',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '表相关',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 12,
        funcName: () => {},
      },

      {
        fldName: 'cacheClassifyFieldEx',
        sortBy: clsPrjTabEN.con_CacheClassifyField, // "cacheClassifyFieldEx",//     sortBy: "FieldTab|FldName|FieldTab.fldId=PrjTab.cacheClassifyField",
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '缓存',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 17,
        funcName: () => {},
      },
      {
        fldName: 'cacheClassifyField4TSEx',
        sortBy: clsPrjTabEN.con_CacheClassifyFieldTS, // "cacheClassifyField4TSEx",//     sortBy: "FieldTab|FldName|FieldTab.fldId=PrjTab.cacheClassifyFieldTS",
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '缓存-TS',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 17,
        funcName: () => {},
      },
      {
        fldName: 'errMsg',
        sortBy: 'errMsg',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '错误信息',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 9,
        funcName: () => {},
      },
      {
        fldName: 'cmPrjNames',
        sortBy: clsPrjTabENEx.con_CmPrjNames,
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '子项目组',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 2,
        funcName: () => {},
      },
      {
        fldName: 'dateTimeSim',
        sortBy: clsPrjTabEN.con_UpdDate,
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '修改日期2',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 9,
        funcName: () => {},
      },

      {
        fldName: 'parentClass',
        sortBy: 'parentClass',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '父类',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 15,
        funcName: () => {},
      },
      {
        fldName: 'orderNum4Refer',
        sortBy: 'orderNum4Refer',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '引用序号',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 18,
        funcName: () => {},
      },
      {
        fldName: 'tabId',
        sortBy: 'tabId',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '表ID',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 2,
        funcName: () => {},
      },
    ];
    if (this.dispAllErrMsg_q == true) {
      arrDataColumn.splice(12, 4);
    } else {
      if (this.showCurrCmPrjId_q == true) {
        arrDataColumn.splice(12, 1);
      }
      arrDataColumn.splice(11, 1);
    }
    await this.ExtendFldFuncMap(arrPrjTabExObjLst, arrDataColumn);

    // await BindTab(divDataLst, arrPrjTabExObjLst, arrDataColumn, 'tabId', this);
    arrPrjTabExObjLst.forEach((x) => {
      if (x.errMsg == null) x.errMsg = '';
    });
    await PrjTabCRUDEx.ShowLst(arrPrjTabExObjLst, this.dispAllErrMsg_q);

    if (this.recCount < this.pageSize) return;
    if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
      this.objPager.InitShow(divContainer, this.divName4Pager);
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
  }

  public async ExtendFldFuncMap(
    arrPrjTabExObjLst: Array<clsPrjTabENEx>,
    arrDataColumn: Array<clsDataColumn>,
  ) {
    const arrFldName = clsPrjTabEN.AttributeName;
    for (const objDataColumn of arrDataColumn) {
      if (IsNullOrEmpty(objDataColumn.fldName) == true) continue;
      if (arrFldName.indexOf(objDataColumn.fldName) > -1) continue;
      for (const objInFor of arrPrjTabExObjLst) {
        await PrjTabEx_FuncMapByFldName(objDataColumn.fldName, objInFor);
      }
    }
  }

  /** 根据条件获取相应的对象列表
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv4Func_NoCache)
   **/
  public async BindGv_PrjTab4Func(divList: HTMLDivElement) {
    const strThisFuncName = this.BindGv_PrjTab4Func.name;
    if (viewVarSet.sortPrjTabBy == null) {
      const strMsg = Format(
        '在显示列表时，排序字段(hidSortPrjTabBy)为空，请检查！(In BindGv_PrjTabCache)',
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    // const divDataLst = GetDivObjInDivObj(divList, 'divDataLst');
    const strWhereCond = await this.CombinePrjTabCondition();
    //objPrjTabCond.SetCondFldValue(clsPrjTabEN.con_PrjId, clsPrivateSessionStorage.currSelPrjId, "=");
    //objPrjTabCond.whereCond = "";
    //const strWhereCond = JSON.stringify(objPrjTabCond);

    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    //let arrPrjTabObjLst: Array<clsPrjTabEN> = [];
    let arrPrjTabExObjLst: Array<clsPrjTabENEx> = [];
    try {
      this.recCount = await PrjTab_GetRecCountByCondAsync(strWhereCond);
      // let strSortFun = (x: any, y: any) => {
      //   return 0;
      // };
      // if (PrjTabCRUD.sortFunStatic != undefined) {
      //   strSortFun = PrjTabCRUD.sortFunStatic(PrjTabCRUD.ascOrDesc4SortFun);
      // }
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: viewVarSet.sortPrjTabBy,
        sortFun: (x, y) => {
          x = y;
          return 0;
        },
      };
      arrPrjTabExObjLst = await PrjTabEx_GetObjExLstByPagerAsync(objPagerPara);
    } catch (e) {
      const strMsg = Format(
        '绑定GridView不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    if (arrPrjTabExObjLst.length == 0) {
      const strKey = Format(
        '{0}_{1}',
        clsPrjTabEN._CurrTabName,
        clsPrivateSessionStorage.currSelPrjId,
      );
      const strMsg = Format('根据条件获取的记录数为0！(Key={0})', strKey);
      console.error('Error: ', strMsg);
      //console.trace();
      // ShowEmptyRecNumInfoByDiv(strListDiv, strMsg);
      PrjTabCRUDEx.ShowEmptyRecNumInfo(strMsg);
      this.objPager.Hide(divList, this.divName4Pager);
      return;
    }
    try {
      await this.BindTab_PrjTab4Func(divList, arrPrjTabExObjLst);
      await this.ShowErrMsg(divList, arrPrjTabExObjLst);
    } catch (e) {
      const strMsg = Format(
        '绑定对象列表不成功, {0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }
  public ShowErrMsg(divContainer: HTMLDivElement, arrPrjTabEx: Array<clsPrjTabENEx>) {
    const objLst = divContainer.getElementsByTagName('tr');

    let arrElement: Array<HTMLTableRowElement> = <Array<HTMLTableRowElement>>(
      clsPubFun4Visible.GetArray(objLst)
    );
    //let spn1;
    arrElement = arrElement.filter((x) => x.id != null);
    arrElement = arrElement.filter((x) => x.id.length > 3);
    arrElement.forEach((x) => {
      const strId = x.id.substring(2);
      const objPrjTab = arrPrjTabEx.find((x) => x.tabId.toString() == strId);
      if (objPrjTab != null) {
        if (objPrjTab.errMsg != null && objPrjTab.errMsg.length > 0) {
          x.className = 'text-muted bg-danger';
          x.title = objPrjTab.errMsg;
        } else if (IsNullOrEmpty(objPrjTab.trClass) == false) {
          x.className = objPrjTab.trClass;
        }
      }
    });
  }
  /**
在数据表里选择记录
*/
  public async btnSelectTabIdInTab_Click(strKeyId: string) {
    try {
      if (strKeyId == '') {
        alert('请选择需要维护界面信息的记录！');
        return '';
      }
      this.SelectTabId(strKeyId);
    } catch (e: any) {
      console.error(e);
      const strMsg = `选择记录不成功. ${e}.`;
      alert(strMsg);
    }
  }

  /** 
根据关键字选择相应的记录    
<param name = "sender">参数列表</param>
*/
  public async SelectTabId(strTabId: string) {
    const strCurrSelPrjId = clsPrivateSessionStorage.currSelPrjId;

    try {
      const objvPrjTabEN = await vPrjTab_SimEx_GetObjByTabIdCache(
        strTabId,
        clsPrivateSessionStorage.currSelPrjId,
      );

      if (objvPrjTabEN == null) {
        const strMsg = `获取tabId:${strTabId}的相关界面不成功！`;
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      const objCurrProjects = await Projects_GetObjByPrjIdCache(strCurrSelPrjId);
      if (objCurrProjects == null) {
        const strMsg = Format('项目Id:[{0}]，没有相应的项目，请检查！', strCurrSelPrjId);
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      //const objPrjTab4Session: stuPrjTab4Session =
      //{
      //    tabId: objvPrjTabEN.tabId,
      //    tabName: objvPrjTabEN.tabName,
      //    /*currSelPrjId: clsPrivateSessionStorage.currSelPrjId,*/
      //    //currSelPrjName: objCurrProjects.prjName,
      //    //keyId4Test: objvPrjTabEN.keyId4Test
      //}
      clsPrivateSessionStorage.tabId_Main = objvPrjTabEN.tabId;
      clsPrivateSessionStorage.tabName = objvPrjTabEN.tabName;

      //const strJson = JSON.stringify(objPrjTab4Session);
      ////
      //const bolIsSuccess = this.SetSessionAsync("objPrjTab4Session", strJson);
      //this.GetDataFromUserPrjGrantClass(objUserPrjGrantEN);

      //alert("完成SelectTabId!");
      clsPubVar4Web.SetTabId(objvPrjTabEN.tabId);
      //Redirect("/Table_Field/PrjTabFldCRUD");
      Redirect('/Table_Field/PrjTab_AllProp');
    } catch (e: any) {
      console.error(e);
      const strMsg = `选择界面:[${strTabId}]不成功,${e}.`;
      alert(strMsg);
    }
  }

  /*
    设置Session
      (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_SetSessionAsync)
    <param name = "Key">关键字</param>
    <param name = "Value">值</param>
    */
  public SetSessionAsync(Key: string, Value: string): Promise<void> {
    const strUrl_Session_SetString = '';
    return new Promise(function (resolve, reject) {
      console.log(resolve, reject);
      $.ajax({
        url: strUrl_Session_SetString,
        cache: false,
        async: false,
        type: 'get',
        dataType: 'json',
        data: {
          Key,
          Value,
        },
        success(data: any) {
          const strKey = data.key;
          const strValue = data.value;
          console.log(strKey + strValue);
        },
      });
    });
  }

  /**
   * 是否与SQL表相关 (Used In CombineCondition())chkShowPureClass_q
   **/
  public get showPureClass_q(): boolean {
    const objDiv = divVarSet.refDivQuery;
    CheckControlExistInDivObj(divVarSet.refDivQuery, 'input', 'chkShowPureClass_q');
    const strId = 'chkShowPureClass_q';
    //return  return GetCheckBoxValueInDivObj(objDiv, strId);
    return GetCheckBoxValueInDivObj(objDiv, strId);
  }
  /**
   * 是否与SQL表相关 (Used In CombineCondition())
   **/
  public set showPureClass_q(value: boolean) {
    SetCheckBoxValueByIdInDivObj(divVarSet.refDivQuery, 'chkShowPureClass_q', value);
  }

  /**
   * 是否显示与当前子工程相关的表
   **/
  public get showCurrCmPrjId_q(): boolean {
    const objDiv = divVarSet.refDivQuery;
    CheckControlExistInDivObj(divVarSet.refDivQuery, 'input', 'chkShowCurrCmPrjId_q');
    const strId = 'chkShowCurrCmPrjId_q';
    return GetCheckBoxValueInDivObj(objDiv, strId);
  }
  /**
   * 是否显示与当前子工程相关的表
   **/
  public set showCurrCmPrjId_q(value: boolean) {
    SetCheckBoxValueByIdInDivObj(divVarSet.refDivQuery, 'chkShowCurrCmPrjId_q', value);
  }

  /**
   * 是否显示所有错误
   **/
  public get dispAllErrMsg_q(): boolean {
    const objDiv = divVarSet.refDivQuery;
    CheckControlExistInDivObj(divVarSet.refDivQuery, 'input', 'chkDispAllErrMsg_q');
    const strId = 'chkDispAllErrMsg_q';
    return GetCheckBoxValueInDivObj(objDiv, strId);
  }
  /**
   * 是否显示所有错误
   **/
  public set dispAllErrMsg_q(value: boolean) {
    SetCheckBoxValueByIdInDivObj(divVarSet.refDivQuery, 'chkDispAllErrMsg_q', value);
  }

  /**
   * 是否显示逻辑错误表
   **/
  public get dispProbableErrTab_q(): boolean {
    const objDiv = divVarSet.refDivQuery;
    CheckControlExistInDivObj(divVarSet.refDivQuery, 'input', 'chkDispProbableErrTab_q');
    const strId = 'chkDispProbableErrTab_q';
    return GetCheckBoxValueInDivObj(objDiv, strId);
  }
  /**
   * 是否显示逻辑错误表
   **/
  public set dispProbableErrTab_q(value: boolean) {
    SetCheckBoxValueByIdInDivObj(divVarSet.refDivQuery, 'chkDispProbableErrTab_q', value);
  }

  /**
   * 自定义功能
   * (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript+<>c__DisplayClass12_0:<Gen_WApi_TS_btn_Click>b__4)
   **/
  public async btnSetDefaCmPrjId_Click() {
    const strThisFuncName = this.btnSetDefaCmPrjId_Click.name;
    try {
      const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
      if (arrKeyIds.length == 0) {
        alert('请选择需要建立关系的记录！');
        return '';
      }

      await this.SetDefaCmPrjId(arrKeyIds, clsPrivateSessionStorage.cmPrjId);
      await this.BindGv_PrjTab4Func(divVarSet.refDivList);
    } catch (e) {
      const strMsg = Format(
        '建立关系不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /** 设置字段值-TabStateId
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_SetFieldValue)
   **/
  public async SetDefaCmPrjId(arrTabId: Array<string>, strCmPrjId: string) {
    const strThisFuncName = this.SetDefaCmPrjId.name;
    if (strCmPrjId == null || strCmPrjId == '') {
      const strMsg = '请输入Cm项目ID(cmPrjId)!';
      console.error('Error: ', strMsg);
      alert(strMsg);
      return '';
    }
    if (arrTabId.length == 0) {
      const strMsg = '没有选择记录，不能设置字段值!';
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return '';
    }
    try {
      let intCount = 0;
      for (const strTabId of arrTabId) {
        let returnBool = false;
        try {
          returnBool = await CmProjectPrjTabEx_CreateRela(
            strCmPrjId,
            strTabId,
            clsPubLocalStorage.userId,
          );
        } catch (e) {
          const strMsg = Format(
            '建立关系不成功,{0}.(in {1}.{2})',
            e,
            this.constructor.name,
            strThisFuncName,
          );
          console.error(strMsg);
          throw strMsg;
        }
        if (returnBool == true) {
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
        vPrjTab_Sim_ReFreshThisCache(clsPrivateSessionStorage.currSelPrjId);
        vCmProjectPrjTab_Sim_ReFreshThisCache(clsPrivateSessionStorage.currSelPrjId);
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

  /**
   * 自定义功能:从默认项目移除
   * (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript+<>c__DisplayClass12_0:<Gen_WApi_TS_btn_Click>b__4)
   **/
  public async btnRemoveDefaCmPrjId_Click() {
    const strThisFuncName = this.btnRemoveDefaCmPrjId_Click.name;
    try {
      const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
      if (arrKeyIds.length == 0) {
        alert('请选择需要移除关系的记录！');
        return '';
      }

      await this.RemoveDefaCmPrjId(arrKeyIds, clsPrivateSessionStorage.cmPrjId);
      await this.BindGv_PrjTab4Func(divVarSet.refDivList);
    } catch (e) {
      const strMsg = Format(
        '移除关系不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /** 设置字段值-TabStateId
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_SetFieldValue)
   **/
  public async RemoveDefaCmPrjId(arrTabId: Array<string>, strCmPrjId: string) {
    const strThisFuncName = this.RemoveDefaCmPrjId.name;
    if (strCmPrjId == null || strCmPrjId == '') {
      const strMsg = '请输入Cm项目ID(cmPrjId)!';
      console.error('Error: ', strMsg);
      alert(strMsg);
      return '';
    }
    if (arrTabId.length == 0) {
      const strMsg = '没有选择记录，不能取消关系!';
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return '';
    }
    try {
      let intCount = 0;
      for (const strTabId of arrTabId) {
        let returnInt = 0;
        try {
          returnInt = await CmProjectPrjTabEx_DelRela(strCmPrjId, strTabId);
        } catch (e) {
          const strMsg = Format(
            '移除关系不成功,{0}.(in {1}.{2})',
            e,
            this.constructor.name,
            strThisFuncName,
          );
          console.error(strMsg);
          throw strMsg;
        }
        if (returnInt > 0) {
          // const strInfo = Format('移除关系成功!');
          intCount++;
        } else {
          const strInfo = Format('移除关系不成功!');
          //显示信息框
          alert(strInfo);
        }
      }
      const strInfo = Format('共移除关系:{0}条记录!', intCount);
      alert(strInfo);
      //console.log('完成！');
      if (intCount > 0) {
        vPrjConstraint_Sim_ReFreshThisCache(clsPrivateSessionStorage.currSelPrjId);
        vCmProjectPrjTab_Sim_ReFreshThisCache(clsPrivateSessionStorage.currSelPrjId);
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
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnQuery_Click)
   **/
  public async btnQuery_Click() {
    // const strThisFuncName = this.btnQuery_Click.name;

    clsPrivateSessionStorage.prjTab_TabName = qryVarSet.tabName_q;
    // clsPrivateSessionStorage.prjTab_IsShare = this.showShareTab_q;
    clsPrivateSessionStorage.prjTab_FuncModuleAgcId = qryVarSet.funcModuleAgcId_q;

    this.SetCurrPageIndex(1);
    await this.BindGv_PrjTab4Func(divVarSet.refDivList);
  }

  /** 复制记录
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CopyRecord)
   **/
  public async CopyRecord(arrTabId: Array<string>) {
    const strThisFuncName = this.CopyRecord.name;
    const prjTabFldStore = usePrjTabFldStore();
    try {
      const arrPrjTabObjLst = await PrjTab_GetObjLstByTabIdLstAsync(arrTabId);
      //console.log('responseText=');
      //console.log(responseText);
      let intCount = 0;
      for (const objInFor of arrPrjTabObjLst) {
        //const strMaxStrId = await PrjTab_GetMaxStrIdByPrefixAsync(objInFor.prjId);
        //console.log('strMaxStrId=' + strMaxStrId);
        //objInFor.tabId = strMaxStrId;
        const returnTabId = await PrjTabEx_CopyPrjTabInSameProject(
          objInFor.prjId,
          clsPrivateSessionStorage.cmPrjId,
          objInFor.tabId,
          clsPubLocalStorage.userId,
        );

        if (IsNullOrEmpty(returnTabId) == false) {
          //PrjTabReFreshCache();
          // const strInfo = Format('克隆记录成功!');
          PrjTabFld_ReFreshCache(returnTabId);
          prjTabFldStore.delObjLstByTabId(returnTabId);
          intCount++;
        } else {
          const strInfo = Format('克隆记录不成功!');
          //显示信息框
          alert(strInfo);
        }
      }
      if (intCount > 0) {
        vPrjTab_Sim_ReFreshThisCache(clsPrivateSessionStorage.currSelPrjId);
        vCmProjectPrjTab_Sim_ReFreshThisCache(clsPrivateSessionStorage.currSelPrjId);
      }
      const strInfo = Format('共克隆了{0}条记录!', intCount);
      alert(strInfo);
      //console.log('完成！');
    } catch (e) {
      const strMsg = Format(
        '复制记录不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }

  /** 设置字段值-CmPrjId
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnSetFldValue_Click)
   **/
  public async btnCheckTabFlds_Click() {
    const strThisFuncName = this.btnCheckTabFlds_Click.name;
    try {
      const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
      if (arrKeyIds.length == 0) {
        alert('请选择需要克隆的记录！');
        return '';
      }
      const strCmPrjId = clsPrivateSessionStorage.cmPrjId;
      const strPrjDataBaseId = clsPrivateSessionStorage.currPrjDataBaseId;

      for (const strTabId of arrKeyIds) {
        await PrjTabEx_CheckTabFlds(
          strTabId,
          strPrjDataBaseId,
          strCmPrjId,
          clsPubLocalStorage.userId,
        );
      }
      //PrjTabReFreshCache(clsPrivateSessionStorage.currSelPrjId);
      await this.BindGv_PrjTab4Func(divVarSet.refDivList);
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
  public async SetDdl_FuncModuleAgcIdInDiv(PrjId: string) {
    await FuncModule_AgcEx_BindDdl_FuncModuleAgcIdForPrjTabInDivCacheEx(
      divVarSet.refDivQuery,
      'ddlFuncModuleAgcId_q',
      clsPrivateSessionStorage.cmPrjId,
      PrjId,
    ); //
  }

  /** 删除记录
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnDelRecord_Click)
   **/
  public async btnDelRecord_Click() {
    const strThisFuncName = this.btnDelRecord_Click.name;
    const prjTabFldStore = usePrjTabFldStore();
    try {
      const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
      if (arrKeyIds.length == 0) {
        alert('请选择需要删除的记录！');
        return '';
      }
      if (confirm_del(arrKeyIds.length) == false) {
        return;
      }
      for (const strTabId of arrKeyIds) {
        //   await this.DelMultiRecord(arrKeyIds);
        const responseBool = await PrjTabEx_DelRecordEx(strTabId);
        if (responseBool == true) {
          vPrjTab_Sim_ReFreshThisCache(clsPrivateSessionStorage.currSelPrjId);
          PrjTabFld_ReFreshCache(strTabId);
          prjTabFldStore.delObjLstByTabId(strTabId);
        }
      }
      await this.BindGv_PrjTab4Func(divVarSet.refDivList);
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

  /** 显示PrjTab对象的所有属性值
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindTab)
   * @param divContainer:显示容器
   * @param arrPrjTabObjLst:需要绑定的对象列表
   **/
  public async BindTab_PrjTab(divContainer: HTMLDivElement, arrPrjTabObjLst: Array<clsPrjTabEN>) {
    // const strThisFuncName = this.BindTab_PrjTab.name;
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
        fldName: clsPrjTabEN.con_TabId,
        sortBy: clsPrjTabEN.con_TabId,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '表ID',
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
        fldName: clsPrjTabEN.con_TabName,
        sortBy: clsPrjTabEN.con_TabName,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '表名',
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
        fldName: clsPrjTabEN.con_TabCnName,
        sortBy: clsPrjTabEN.con_TabCnName,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '表中文名',
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
        fldName: clsPrjTabEN.con_FuncModuleAgcId,
        sortBy: clsPrjTabEN.con_FuncModuleAgcId,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '模块',
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
        fldName: clsPrjTabEN.con_TabId,
        sortBy: 'fldNum',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '字段数',
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
        fldName: clsPrjTabEN.con_SqlDsTypeId,
        sortBy: clsPrjTabEN.con_SqlDsTypeId,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '数据源类型',
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
        fldName: clsPrjTabEN.con_TabStateId,
        sortBy: clsPrjTabEN.con_TabStateId,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '表状态',
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
        fldName: clsPrjTabEN.con_TabMainTypeId,
        sortBy: clsPrjTabEN.con_TabMainTypeId,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '表主类型名',
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
        fldName: clsPrjTabEN.con_TabTypeId,
        sortBy: clsPrjTabEN.con_TabTypeId,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '表类型名',
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
        fldName: clsPrjTabEN.con_ParentClass,
        sortBy: clsPrjTabEN.con_ParentClass,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '父类',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 12,
        funcName: (strKey: string, strText: string) => {
          strKey = strText;
          return new HTMLElement();
        },
      },
      {
        fldName: 'dateTimeSim',
        sortBy: clsPrjTabEN.con_UpdDate,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '修改日期1',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 13,
        funcName: (strKey: string, strText: string) => {
          strKey = strText;
          return new HTMLElement();
        },
      },
      {
        fldName: clsPrjTabEN.con_CacheClassifyField,
        sortBy: clsPrjTabEN.con_CacheClassifyField,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '缓存分类字段',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 14,
        funcName: (strKey: string, strText: string) => {
          strKey = strText;
          return new HTMLElement();
        },
      },
      {
        fldName: clsPrjTabEN.con_IsUseCache,
        sortBy: clsPrjTabEN.con_IsUseCache,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: 'Cache?',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 15,
        funcName: (strKey: string, strText: string) => {
          strKey = strText;
          return new HTMLElement();
        },
      },
      {
        fldName: clsPrjTabEN.con_IsReleToSqlTab,
        sortBy: clsPrjTabEN.con_IsReleToSqlTab,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '表相关',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 16,
        funcName: (strKey: string, strText: string) => {
          strKey = strText;
          return new HTMLElement();
        },
      },
      {
        fldName: clsPrjTabEN.con_TabId,
        sortBy: 'relaTabId4View',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '表名',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 17,
        funcName: (strKey: string, strText: string) => {
          strKey = strText;
          return new HTMLElement();
        },
      },
      {
        fldName: clsPrjTabEN.con_OrderNum4Refer,
        sortBy: clsPrjTabEN.con_OrderNum4Refer,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '引用序号',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 18,
        funcName: (strKey: string, strText: string) => {
          strKey = strText;
          return new HTMLElement();
        },
      },
    ];
    await BindTab(divDataLst, arrPrjTabObjLst, arrDataColumn, clsPrjTabEN.con_TabId, this);
    if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
      this.objPager.InitShow(divContainer, this.divName4Pager);
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
  }
  /** 函数功能:从界面列表中根据某一个字段排序
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_SortBy)
   * @param objAnchorElement:带有排序字段的Anchors
   **/
  public async SortBy(objAnchorElement: any) {
    // const strThisFuncName = this.SortBy.name;
    // console.log('1objAnchorElement(In SetAllCkechedKeysV2):', objAnchorElement);
    let strSortExpress = '';
    //event = window.event || event;
    if (typeof objAnchorElement != 'function') {
      const thisEventObj: HTMLInputElement = objAnchorElement;
      strSortExpress = thisEventObj.getAttribute('FldName') as string;
    }
    const { sortFun, ascOrDesc4SortFun, sortBy } = GetSortBy(
      objAnchorElement,
      viewVarSet.ascOrDesc4SortFun,
      viewVarSet.sortPrjTabBy,
      strSortExpress,
    );
    viewVarSet.sortPrjTabBy = sortBy;
    viewVarSet.ascOrDesc4SortFun = ascOrDesc4SortFun;
    PrjTabCRUD.sortFunStatic = sortFun;
    await this.BindGv_PrjTab4Func(divVarSet.refDivList);
  }

  /** 设置字段值-CmPrjId
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnSetFldValue_Click)
   **/
  public async btnGetTabRecNum_Click() {
    const strThisFuncName = this.btnGetTabRecNum_Click.name;
    try {
      const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
      if (arrKeyIds.length == 0) {
        alert('请选择需要获取记录数的表！');
        return '';
      }

      for (const strTabId of arrKeyIds) {
        await PrjTabEx_GetTabRecNum(strTabId, clsPrivateSessionStorage.currPrjDataBaseId);
      }
      //PrjTabReFreshCache(clsPrivateSessionStorage.currSelPrjId);
      await this.BindGv_PrjTab4Func(divVarSet.refDivList);
    } catch (e) {
      const strMsg = Format(
        '获取表记录数不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }
  public async SortColumn(sortColumnKey: string, sortDirection: string) {
    //console.log("objAnchorElement(In SetAllCkechedKeysV2):", objAnchorElement);
    viewVarSet.sortPrjTabBy = Format('{0} {1}', sortColumnKey, sortDirection);
    // PrjTabCRUD.ascOrDesc4SortFun = sortDirection;
    // PrjTabCRUD.sortFunStatic = sortFun;
    await this.BindGv_PrjTab4Func(divVarSet.refDivList);
  }

  public async btnSetIsShare_Click() {
    const strThisFuncName = this.btnSetIsShare_Click.name;
    try {
      if (GetSelectIndexByIdInDivObj(divVarSet.refDivFunction, 'ddlIsShare_SetFldValue') == 0) {
        const strMsg = '请选择是否共享!';
        console.error('Error: ', strMsg);
        //console.trace();
        FocusSelectByIdInDivObj(divVarSet.refDivFunction, 'ddlIsShare_SetFldValue');
        alert(strMsg);

        return;
      }
      const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
      if (arrKeyIds.length == 0) {
        alert(`请选择需要设置功能模块Id的${this.thisTabName}记录!`);
        return '';
      }

      const bolIsShare = GetSelectValue4BoolInDivObj(
        divVarSet.refDivFunction,
        'ddlIsShare_SetFldValue',
      );

      //console.log('strFuncModuleAgcId=' + strFuncModuleAgcId);
      //console.log('arrKeyIds=');
      //console.log(arrKeyIds);
      await this.SetIsShare(arrKeyIds, bolIsShare);
      await this.BindGv_PrjTab4Func(divVarSet.refDivList);
    } catch (e) {
      const strMsg = `设置记录不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }
  public async SetIsShare(arrTabId: Array<string>, bolIsShare: boolean) {
    const strThisFuncName = this.SetIsShare.name;
    const userStore = useUserStore();
    const viewInfoStore = useviewInfoStore();
    if (arrTabId.length == 0) {
      const strMsg = '没有选择记录,不能设置字段值!';
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return '';
    }
    try {
      let intCount = 0;
      for (const strTabId of arrTabId) {
        const returnBool = await PrjTabEx_SetIsShare(strTabId, bolIsShare, userStore.getUserId);
        if (returnBool == true) {
          intCount++;
        } else {
          const strInfo = Format('设置共享不成功!');
          //显示信息框
          alert(strInfo);
        }
      }
      const strInfo = Format('共设置共享了{0}条记录!', intCount);
      alert(strInfo);
      //console.log('完成!');
      if (intCount > 0) {
        vPrjTab_Sim_ReFreshThisCache(clsPrivateSessionStorage.currSelPrjId);
        viewInfoStore.ReFreshByPrjId(clsPrivateSessionStorage.currSelPrjId);
      }
    } catch (e) {
      const strMsg = `设置共享不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }
  /**
   * 是否与SQL表相关 (Used In CombineCondition())
   **/
  public get isReleToSqlTab_q(): boolean {
    const bolValue = GetCheckBoxValueInDivObj(divVarSet.refDivQuery, 'chkIsReleToSqlTab_q');
    return bolValue;
  }
  /**
   * 是否与SQL表相关 (Used In CombineCondition())
   **/
  public set isReleToSqlTab_q(value: boolean) {
    SetCheckBoxValueByIdInDivObj(divVarSet.refDivQuery, 'chkIsReleToSqlTab_q', value);
  }
}
