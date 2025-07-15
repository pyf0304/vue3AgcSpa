/*import $ from "jquery";*/

import CmProjectPrjTab_EditEx from '../CodeMan/CmProjectPrjTab_EditEx';
import { PrjTab_Edit } from '@/viewsBase/Table_Field/PrjTab_Edit';
import { enumSQLDSType } from '@/ts/L0Entity/PrjInterface/clsSQLDSTypeEN';
import { enumCacheMode } from '@/ts/L0Entity/SystemSet/clsCacheModeEN';
import { clsPrjTabEN } from '@/ts/L0Entity/Table_Field/clsPrjTabEN';
import { enumTabMainType } from '@/ts/L0Entity/Table_Field/clsTabMainTypeEN';
import { enumTabState } from '@/ts/L0Entity/Table_Field/clsTabStateEN';
import { enumTabType } from '@/ts/L0Entity/Table_Field/clsTabTypeEN';
import {
  PrjTab_AddNewRecordAsync,
  PrjTab_CheckProperty4Update,
  PrjTab_GetMaxStrIdByPrefixAsync,
  PrjTab_IsExistAsync,
  PrjTab_UpdateRecordAsync,
} from '@/ts/L3ForWApi/Table_Field/clsPrjTabWApi';
import { vPrjTab_Sim_ReFreshThisCache } from '@/ts/L3ForWApi/Table_Field/clsvPrjTab_SimWApi';
import { GCVariableEx_BindDdl_VarIdInDivCache } from '@/ts/L3ForWApiEx/GeneCode/clsGCVariableExWApi';
import { vFieldTab_SimEx_BindDdl_FldIdByTabIdInDivCache } from '@/ts/L3ForWApiEx/Table_Field/clsvFieldTab_SimExWApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import {
  ClearSelectValueByIdInDivObj,
  GetSelectValueInDivObj,
  HideTrInDivObj,
  SetSelectValueByIdInDivObj,
  ShowTrInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';

import { clsDateTime } from '@/ts/PubFun/clsDateTime';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { divVarSet, refPrjTab_Edit } from '@/views/Table_Field/PrjTabVueShare';

/* PrjTab_EditEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:GeneCode)
*/
export default class PrjTab_EditEx extends PrjTab_Edit {
  public static TabIdCache = '';
  // public static TabIdStatic = ''; //5、处理添加、修改记录时PutData所用的界面静态变量, 用于在界面编辑函数中信息交互

  /*
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:Gen_WApi_TS_btnEdit_Click)
    */
  public static btnEdit_Click(strCommandName: string, strKeyId: string) {
    console.log(strKeyId);
    const objPage: PrjTab_EditEx = <PrjTab_EditEx>PrjTab_Edit.GetPageEditObj('PrjTab_EditEx');
    if (objPage == null) {
      const strMsg = `当前编辑页面没有按合适的关键字初始化过，请检查！`;
      alert(strMsg);
      console.error(strMsg);
      return;
    }
    let strMsg = '';
    switch (strCommandName) {
      case 'Submit': //提交
        objPage.btnSubmit_Click();
        break;
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
        //objPageEdit.btnAddNewRecordWithMaxId_Click();
        break;
      case 'CreateWithMaxId': //添加记录使用最大关键字
        //objPageEdit.btnAddNewRecordWithMaxId_Click();
        break;
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        objPage.btnAddNewRecord_Click();
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
        // strKeyId = GetFirstCheckedKeyIdInDivObj(objPage.divName4List);
        if (IsNullOrEmpty(strKeyId) == true) {
          strMsg = '请选择需要修改的记录！';
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        PrjTab_EditEx.TabIdCache = strKeyId;
        refPrjTab_Edit.value.tabId = strKeyId;
        refPrjTab_Edit.value.BindDdl4EditRegionInDivStep2();
        objPage.btnUpdateRecord_Click(strKeyId);

        break;

      default:
        AccessBtnClickDefault(strCommandName, 'PrjTab_EditEx.btn_Click');
        alert(strMsg);
        break;
    }
  }

  /* 为插入记录做准备工作
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordWithMaxId)
*/
  public async AddNewRecordWithMaxId() {
    this.SetKeyReadOnly(false);
    this.btnSubmitPrjTab = '确认添加';
    this.btnCancelPrjTab = '取消添加';
    this.Clear();
    refPrjTab_Edit.value.sqlDsTypeId = '01';
    refPrjTab_Edit.value.tabTypeId = '01';
  }
  public Clear() {
    refPrjTab_Edit.value.tabName = '';
    refPrjTab_Edit.value.tabCnName = '';
    ClearSelectValueByIdInDivObj(divVarSet.refDivEdit, 'ddlRelaTabId4View');
    ClearSelectValueByIdInDivObj(divVarSet.refDivEdit, 'ddlSqlDsTypeId');
    ClearSelectValueByIdInDivObj(divVarSet.refDivEdit, 'ddlFuncModuleAgcId');
    ClearSelectValueByIdInDivObj(divVarSet.refDivEdit, 'ddlTabMainTypeId');
    ClearSelectValueByIdInDivObj(divVarSet.refDivEdit, 'ddlTabTypeId');
    refPrjTab_Edit.value.isUseCache = false;
    ClearSelectValueByIdInDivObj(divVarSet.refDivEdit, 'ddlCacheModeId');
    // ClearSelectValueByIdInDivObj(divVarSet.refDivEdit, 'ddlCacheClassifyField');
    // ClearSelectValueByIdInDivObj(divVarSet.refDivEdit, 'ddlCacheClassifyField2');
    refPrjTab_Edit.value.isRefresh4RelaView = false;
    ClearSelectValueByIdInDivObj(divVarSet.refDivEdit, 'ddlTabStateId');
    refPrjTab_Edit.value.parentClass = '';
    refPrjTab_Edit.value.isReleToSqlTab = false;
    refPrjTab_Edit.value.memo = '';
    refPrjTab_Edit.value.tabId = '';
    // ClearSelectValueByIdInDivObj(divVarSet.refDivEdit, 'ddlCacheClassifyFieldTS');
    // ClearSelectValueByIdInDivObj(divVarSet.refDivEdit, 'ddlParaVar1TS');
    // ClearSelectValueByIdInDivObj(divVarSet.refDivEdit, 'ddlCacheClassifyField2TS');
    // ClearSelectValueByIdInDivObj(divVarSet.refDivEdit, 'ddlParaVar2TS');
    refPrjTab_Edit.value.isMultiKeyClassify = false;
    refPrjTab_Edit.value.whereFormat = '';
    refPrjTab_Edit.value.isShare = false;
    refPrjTab_Edit.value.isUseDelSign = false;
    refPrjTab_Edit.value.whereFormatBack = '';
  }
  /* 为插入记录做准备工作
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecord)
*/
  public async AddNewRecord() {
    this.SetKeyReadOnly(false);
    this.btnSubmitPrjTab = '确认添加';
    this.btnCancelPrjTab = '取消添加';
    this.Clear();
    //wucPrjTabB1.tabId = PrjTab_GetMaxStrId_S();
    refPrjTab_Edit.value.sqlDsTypeId = enumSQLDSType.SqlTab_01;
    refPrjTab_Edit.value.tabTypeId = enumTabType.MainDataTab_0001;
    refPrjTab_Edit.value.tabMainTypeId = enumTabMainType.DataTab_0001;
    refPrjTab_Edit.value.tabStateId = enumTabState.Normal_01;
    refPrjTab_Edit.value.cacheModeId = enumCacheMode.localStorage_03;
    refPrjTab_Edit.value.isReleToSqlTab = true;
    refPrjTab_Edit.value.isUseCache = true;
    if (this.opType == 'Add') {
      HideTrInDivObj(divVarSet.refDivEdit, 'trCacheClassifyField2');
    } else {
      ShowTrInDivObj(divVarSet.refDivEdit, 'trCacheClassifyField2');
    }
  }

  /* 添加新记录，保存函数
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordSave)
   */
  public async AddNewRecordSave() {
    const strThisFuncName = this.AddNewRecordSave.name;
    //this.divName = "divAddNewRecordSave";
    let objPrjTabEN;
    try {
      objPrjTabEN = await refPrjTab_Edit.value.GetEditDataPrjTabObj();
    } catch (e) {
      const strMsg = Format(
        '从界面获取数据不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return false; //一定要有一个返回值,否则会出错!
    }
    objPrjTabEN.tabId = await PrjTab_GetMaxStrIdByPrefixAsync(
      clsPrivateSessionStorage.currSelPrjId,
    );
    try {
      const bolIsExist = await PrjTab_IsExistAsync(objPrjTabEN.tabId);

      if (bolIsExist == true) {
        const strMsg = `添加记录时，关键字:${objPrjTabEN.tabId}已经存在！`;
        alert(strMsg);
        return bolIsExist; //一定要有一个返回值，否则会出错！
      }
      const returnBool = await PrjTab_AddNewRecordAsync(objPrjTabEN);
      let returnBool2 = false;
      if (returnBool == true) {
        vPrjTab_Sim_ReFreshThisCache(clsPrivateSessionStorage.currSelPrjId);
        //CmProjectPrjTab_Edit.PrjIdCache = clsPrivateSessionStorage.currSelPrjId;
        const objCmProjectPrjTab_EditEx = new CmProjectPrjTab_EditEx(
          'CmProjectPrjTab_EditEx',
          this.iShowList,
        );
        returnBool2 = await objCmProjectPrjTab_EditEx.AddNewRecordSaveV2(
          clsPrivateSessionStorage.cmPrjId,
          objPrjTabEN.tabId,
        );

        const strInfo = `添加记录成功!`;

        //显示信息框
        alert(strInfo);
      } else {
        const strInfo = `添加记录不成功!`;

        //显示信息框
        alert(strInfo);
      }
      return returnBool && returnBool2; //一定要有一个返回值，否则会出错！
    } catch (e: any) {
      console.log('catch(e)=');
      console.error(e);
      const strMsg = `添加记录不成功,${e}.`;
      alert(strMsg);
      return false; //一定要有一个返回值，否则会出错！
    }
  }
  /**
   * 设置绑定下拉框，针对字段:[ParaVar2TS]
   * (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdlInDiv_TS4TabFeature)
   **/

  public async SetDdl_ParaVar2TSInDiv(PrjId: string) {
    await GCVariableEx_BindDdl_VarIdInDivCache(divVarSet.refDivEdit, 'ddlParaVar2TS', PrjId); //
  }
  /**
   * 设置绑定下拉框，针对字段:[ParaVar1TS]
   * (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdlInDiv_TS4TabFeature)
   **/

  public async SetDdl_ParaVar1TSInDiv(PrjId: string) {
    await GCVariableEx_BindDdl_VarIdInDivCache(divVarSet.refDivEdit, 'ddlParaVar1TS', PrjId); //
  }

  /** 函数功能:为编辑区绑定下拉框
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_BindDdl4EditRegionInDiv)
   **/
  public async B1indDdl4EditRegionInDivBak() {
    const strPrjId = clsPrivateSessionStorage.currSelPrjId; //定义条件字段

    const strTabId = PrjTab_EditEx.TabIdCache; //定义条件字段

    if (this.opType == 'Update') {
      await this.SetDdlCacheClassifyFieldTSInDiv(strTabId); //编辑区域
      await this.SetDdlCacheClassifyField2TSInDiv(strTabId); //编辑区域
      await this.SetDdl_ParaVar1TSInDiv(strPrjId); //编辑区域
      await this.SetDdl_ParaVar2TSInDiv(strPrjId); //编辑区域
    }
    // await this.SetDdl_TabStateIdInDiv(); //编辑区域
  }
  /**
   * 设置绑定下拉框，针对字段:[CacheClassifyField]
   * (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdlInDiv_TS4TabFeature)
   **/

  public async SetDdlCacheClassifyFieldTSInDiv(tabId: string) {
    await vFieldTab_SimEx_BindDdl_FldIdByTabIdInDivCache(
      divVarSet.refDivEdit,
      'ddlCacheClassifyFieldTS',
      tabId,
    ); //
  }

  /**
   * 设置绑定下拉框，针对字段:[CacheClassifyField2]
   * (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdlInDiv_TS4TabFeature)
   **/

  public async SetDdlCacheClassifyField2TSInDiv(tabId: string) {
    await vFieldTab_SimEx_BindDdl_FldIdByTabIdInDivCache(
      divVarSet.refDivEdit,
      'ddlCacheClassifyField2TS',
      tabId,
    ); //
  }

  /** 修改记录
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecordSave)
   **/
  public async UpdateRecordSave(): Promise<boolean> {
    const strThisFuncName = this.UpdateRecordSave.name;

    const objPrjTabEN = await refPrjTab_Edit.value.GetEditDataPrjTabObj();
    objPrjTabEN.SetTabId(this.keyId);
    objPrjTabEN.sfUpdFldSetStr = objPrjTabEN.updFldString; //设置哪些字段被修改(脏字段)
    if (objPrjTabEN.tabId == '' || objPrjTabEN.tabId == undefined) {
      console.error('关键字不能为空!');
      throw '关键字不能为空!';
    }
    try {
      PrjTab_CheckProperty4Update(objPrjTabEN);
    } catch (e) {
      const strMsg = Format(
        '检查数据不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return false; //一定要有一个返回值，否则会出错！
    }
    try {
      const returnBool = await PrjTab_UpdateRecordAsync(objPrjTabEN);
      if (returnBool == true) {
        vPrjTab_Sim_ReFreshThisCache(clsPrivateSessionStorage.currSelPrjId);
        // prjTabStore
      }
      return returnBool;
    } catch (e) {
      const strMsg = Format(
        '修改记录不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return false;
    }
  }
  /** 函数功能:把界面上的属性数据传到类对象中
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
   * @param pobjPrjTabEN.js">数据传输的目的类对象</param>
   **/
  public async PutBakDataToPrjTabClassBak(pobjPrjTabEN: clsPrjTabEN) {
    // const strThisFuncName = this.PutDataToPrjTabClass.name;

    pobjPrjTabEN.SetTabName(refPrjTab_Edit.value.tabName); // 表中文名
    pobjPrjTabEN.SetTabCnName(refPrjTab_Edit.value.tabCnName); // 表中文名

    pobjPrjTabEN.SetRelaTabId4View(refPrjTab_Edit.value.relaTabId4View); // 视图相关表
    pobjPrjTabEN.SetSqlDsTypeId(refPrjTab_Edit.value.sqlDsTypeId); // 数据源类型
    pobjPrjTabEN.SetFuncModuleAgcId(refPrjTab_Edit.value.funcModuleAgcId); // 模块
    pobjPrjTabEN.SetTabMainTypeId(refPrjTab_Edit.value.tabMainTypeId); // 表主类型
    pobjPrjTabEN.SetTabTypeId(refPrjTab_Edit.value.tabTypeId); // 表类型
    pobjPrjTabEN.SetIsUseCache(refPrjTab_Edit.value.isUseCache); // 是否使用Cache
    pobjPrjTabEN.SetCacheModeId(refPrjTab_Edit.value.cacheModeId); // 缓存方式
    pobjPrjTabEN.SetCacheClassifyField(refPrjTab_Edit.value.cacheClassifyField); // 缓存分类字段
    pobjPrjTabEN.SetCacheClassifyField2(refPrjTab_Edit.value.cacheClassifyField2); // 缓存分类字段2
    pobjPrjTabEN.SetCacheClassifyFieldTS(refPrjTab_Edit.value.cacheClassifyFieldTS); // 缓存分类字段
    pobjPrjTabEN.SetCacheClassifyField2TS(this.cacheClassifyField2TS); // 缓存分类字段2
    pobjPrjTabEN.SetIsMultiKeyClassify(refPrjTab_Edit.value.isMultiKeyClassify); // 是否可以多个关键字分类共存
    pobjPrjTabEN.SetIsUseDelSign(refPrjTab_Edit.value.isUseDelSign); // 是否可以多个关键字分类共存

    pobjPrjTabEN.SetParaVar1TS(refPrjTab_Edit.value.paraVar1TS); // 参数变量_TS
    pobjPrjTabEN.SetParaVar2TS(refPrjTab_Edit.value.paraVar2TS); // 参数变量2_TS
    pobjPrjTabEN.SetIsRefresh4RelaView(refPrjTab_Edit.value.isRefresh4RelaView); // 是否刷新相关视图
    pobjPrjTabEN.SetWhereFormat(refPrjTab_Edit.value.whereFormat); // 缓存条件格式
    pobjPrjTabEN.SetWhereFormatBack(refPrjTab_Edit.value.whereFormatBack); // 缓存条件格式
    pobjPrjTabEN.SetTabStateId(refPrjTab_Edit.value.tabStateId); // 表状态
    pobjPrjTabEN.SetParentClass(refPrjTab_Edit.value.parentClass); // 父类
    pobjPrjTabEN.SetIsReleToSqlTab(refPrjTab_Edit.value.isReleToSqlTab); // 是否与SQL表相关
    pobjPrjTabEN.SetIsShare(refPrjTab_Edit.value.isShare); // 是否为共享表

    pobjPrjTabEN.SetMemo(refPrjTab_Edit.value.memo); // 说明
    pobjPrjTabEN.SetTabId(refPrjTab_Edit.value.tabId); // 表ID
    pobjPrjTabEN.SetPrjId(clsPrivateSessionStorage.currSelPrjId); // 工程ID
    pobjPrjTabEN.SetUpdUserId(clsPubLocalStorage.userId); // 修改用户Id
    pobjPrjTabEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期
  }

  /**
   * 缓存分类字段 (Used In Clear())
   **/
  public set cacheClassifyFieldTS(value: string) {
    SetSelectValueByIdInDivObj(divVarSet.refDivEdit, 'ddlCacheClassifyFieldTS', value);
  }
  /**
   * 缓存分类字段 (Used In PutDataToClass())
   **/
  public get cacheClassifyFieldTS(): string {
    const strValue = GetSelectValueInDivObj(divVarSet.refDivEdit, 'ddlCacheClassifyFieldTS');
    if (strValue == undefined) return '';
    else if (strValue == '0') return '';
    else return strValue;
  }
  /**
   * 缓存分类字段2 (Used In Clear())
   **/
  public set cacheClassifyField2TS(value: string) {
    SetSelectValueByIdInDivObj(divVarSet.refDivEdit, 'ddlCacheClassifyField2TS', value);
  }
  /**
   * 缓存分类字段2 (Used In PutDataToClass())
   **/
  public get cacheClassifyField2TS(): string {
    const strValue = GetSelectValueInDivObj(divVarSet.refDivEdit, 'ddlCacheClassifyField2TS');
    if (strValue == undefined) return '';
    else if (strValue == '0') return '';
    else return strValue;
  }
}
