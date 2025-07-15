import { FeatureRegionFlds_Edit } from '@/viewsBase/RegionManage/FeatureRegionFlds_Edit';
import { enumPrjFeature } from '@/ts/L0Entity/PrjFunction/clsPrjFeatureEN';
import { enumDDLItemsOption } from '@/ts/L0Entity/PrjInterface/clsDDLItemsOptionEN';
import { clsFeatureRegionFldsEN } from '@/ts/L0Entity/RegionManage/clsFeatureRegionFldsEN';
import { enumFieldType } from '@/ts/L0Entity/Table_Field/clsFieldTypeEN';
import { vPrjFeatureSim_GetObjByFeatureIdCache } from '@/ts/L3ForWApi/PrjFunction/clsvPrjFeatureSimWApi';
import { CtlType_BindDdl_CtlTypeIdInDivCache } from '@/ts/L3ForWApi/PrjInterface/clsCtlTypeWApi';
import { QueryOption_BindDdl_QueryOptionIdInDivCache } from '@/ts/L3ForWApi/PrjInterface/clsQueryOptionWApi';

import {
  FeatureRegionFlds_CheckProperty4Update,
  FeatureRegionFlds_GetObjByViewFeatureIdAsync,
  FeatureRegionFlds_ReFreshCache,
  FeatureRegionFlds_UpdateRecordAsync,
} from '@/ts/L3ForWApi/RegionManage/clsFeatureRegionFldsWApi';
import { CtlTypeEx_BindDdl_CtlTypeIdForNotAppleInDivCache } from '@/ts/L3ForWApiEx/PrjInterface/clsCtlTypeExWApi';
import { FeatureRegionFldsEx_CheckRegionFldsUp } from '@/ts/L3ForWApiEx/RegionManage/clsFeatureRegionFldsExWApi';
import { vFieldTab_SimEx_BindDdl_FldIdByTabIdInDivCache } from '@/ts/L3ForWApiEx/Table_Field/clsvFieldTab_SimExWApi';
import { vPrjTab_SimEx_BindDdl_TabIdByCmPrjIdInDivCache } from '@/ts/L3ForWApiEx/Table_Field/clsvPrjTab_SimExWApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import {
  GetInputValueInDivObj,
  GetSelectValueInDivObj,
  HideTrInDivObj,
  SetInputValueInDivObj,
  SetSelectValueByIdInDivObj,
  ShowTrInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';

import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import FeatureRegionFldsCRUDEx from '@/views/RegionManage/FeatureRegionFldsCRUDEx';
import { useviewInfoStore } from '@/store/modules/viewInfo';
import { useviewRegionStore } from '@/store/modules/viewRegion';
import {
  divVarSet,
  FeatureRegionFlds_DeleteKeyIdCache,
  refFeatureRegionFlds_Edit,
  RegionId_Static,
  TabId4Region_Static,
} from '@/views/RegionManage/FeatureRegionFldsVueShare';
import { refViewFeatureFlds1_Edit } from '@/views/RegionManage/ViewFeatureFldsLstVueShare';
/* FeatureRegionFlds_Edit 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export default class FeatureRegionFlds_EditEx extends FeatureRegionFlds_Edit {
  public static HideViewFeatureFlds: () => void;
  // public static strTabId4Region = ''; //编辑区的相关表Id
  public static divName4Edit = 'divEdit'; //编辑区的Id
  // public static divEdit_Loc_Sub: HTMLDivElement; // = GetUniDivInDoc('divEdit_Loc_Sub');

  /*
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:Gen_WApi_TS_btn_Click)
    */
  public static btnEdit_Click(strCommandName: string, strKeyId: string) {
    console.log(strKeyId);
    const objPage = FeatureRegionFlds_Edit.GetPageEditObj('FeatureRegionFlds_EditEx');
    if (objPage == null) {
      const strMsg = `当前编辑页面没有按合适的关键字初始化过，请检查！`;
      alert(strMsg);
      console.error(strMsg);
      return;
    }
    switch (strCommandName) {
      case 'Submit': //提交
        objPage.btnSubmit_Click();
        break;

      default:
        AccessBtnClickDefault(strCommandName, 'FeatureRegionFlds_Edit.btn_Click');

        break;
    }
  }

  /* 函数功能:为编辑区绑定下拉框
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindDdl4EditRegion)
*/
  public async BindDdl4EditRegionBak1() {
    // 在此处放置用户代码以初始化页面
    // const objCtlType_Cond: clsCtlTypeEN = new clsCtlTypeEN(); //编辑区域
    // const objPrjTabCond: clsPrjTabEN = new clsPrjTabEN(); //编辑区域
    // const objQueryOption_Cond: clsQueryOptionEN = new clsQueryOptionEN(); //编辑区域
    // const objDDLItemsOption_Cond: clsDDLItemsOptionEN = new clsDDLItemsOptionEN(); //编辑区域
    // const objFieldTab_Cond = new clsFieldTabEN(); //编辑区域
    await CtlType_BindDdl_CtlTypeIdInDivCache(divVarSet.refDivEdit, 'ddlCtlTypeId'); //编辑区域
    // const strPrjId = clsPrivateSessionStorage.currSelPrjId; //定义条件字段
    //const strPrjId = "";//定义条件字段
    //await vPrjTab_Sim_BindDdl_TabIdCache("ddlDsTabId", objPrjTabCond, strPrjId);//编辑区域
    //await QueryOption_BindDdl_QueryOptionIdCache("ddlQueryOptionId", objQueryOption_Cond);//编辑区域
    //const ddlDdlItemsOptionId = await DDLItemsOption_BindDdl_DdlItemsOptionIdCache("ddlDdlItemsOptionId", objDDLItemsOption_Cond);//编辑区域
    //await vFieldTab_Sim_BindDdl_FldIdCache("ddlDsDataTextFieldId", objFieldTab_Cond, strPrjId);//编辑区域
    //await vFieldTab_Sim_BindDdl_FldIdCache("ddlDsDataValueFieldId", objFieldTab_Cond, strPrjId);//编辑区域
  }

  public async SetCtrlPropByFeatureId(strFeatureId: string) {
    if (IsNullOrEmpty(strFeatureId)) return;
    HideTrInDivObj(divVarSet.refDivEdit, 'trEventFuncName');
    HideTrInDivObj(divVarSet.refDivEdit, 'trFuncName');
    HideTrInDivObj(divVarSet.refDivEdit, 'trKeyIdGetModeId');
    HideTrInDivObj(divVarSet.refDivEdit, 'trValueGivingModeId');
    HideTrInDivObj(divVarSet.refDivEdit, 'trFieldTypeId');

    //clsPrjFeatureEN objPrjFeature = vPrjFeatureSim_GetObjByFeatureIdCache(strFeatureId);

    //string strFldId = ddlFldId.SelectedValue;
    //clsFieldTabEN objFieldTab = FieldTab_GetObjByFldId(strFldId);
    switch (strFeatureId) {
      case enumPrjFeature.SetFieldValue_0148:
        //lblDefaultValue.text = "缺省值";
        ShowTrInDivObj(divVarSet.refDivEdit, 'trEventFuncName');
        ShowTrInDivObj(divVarSet.refDivEdit, 'trFuncName');
        //if (string.IsNullOrEmpty( this.eventFuncName))
        //{
        //    this.eventFuncName = string.Format("btn_Click('{0}')", this.buttonName.Substring(3));
        //}
        //if (string.IsNullOrEmpty(this.funcName))
        //{
        //    this.funcName = string.Format("{0}_Click()", this.buttonName);
        //}
        ShowTrInDivObj(divVarSet.refDivEdit, 'trValueGivingModeId');
        ShowTrInDivObj(divVarSet.refDivEdit, 'trKeyIdGetModeId');
        break;
      case enumPrjFeature.UpMove_0160:
      case enumPrjFeature.DownMove_0161:
      case enumPrjFeature.GoTop_0159:
      case enumPrjFeature.GoButton_0162:
      case enumPrjFeature.ReOrder_0163:
        ShowTrInDivObj(divVarSet.refDivEdit, 'trEventFuncName');
        ShowTrInDivObj(divVarSet.refDivEdit, 'trFuncName');
        ShowTrInDivObj(divVarSet.refDivEdit, 'trKeyIdGetModeId');

        break;
      case enumPrjFeature.DefaultFeature_0240:
        //lblDefaultValue.text = "缺省值";
        ShowTrInDivObj(divVarSet.refDivEdit, 'trEventFuncName');
        ShowTrInDivObj(divVarSet.refDivEdit, 'trFuncName');
        //if (string.IsNullOrEmpty(this.eventFuncName))
        //{
        //    this.eventFuncName = string.Format("btn_Click('{0}')", this.buttonName.Substring(3));
        //}
        //if (string.IsNullOrEmpty(this.funcName))
        //{
        //    this.funcName = string.Format("{0}_Click()", this.buttonName);
        //}
        break;
      case enumPrjFeature.CopyRecord_0141:
      case enumPrjFeature.CopyRecord_0198:
        //lblDefaultValue.text = "复制前缀";
        if (IsNullOrEmpty(refFeatureRegionFlds_Edit.value.defaultValue)) {
          refFeatureRegionFlds_Edit.value.defaultValue = 'Copy_';
        }
        ShowTrInDivObj(divVarSet.refDivEdit, 'trKeyIdGetModeId');
        refFeatureRegionFlds_Edit.value.fieldTypeId = enumFieldType.AdditionalCopyField_15;
        break;
      case enumPrjFeature.AddNewRecord_0136:
      case enumPrjFeature.AddNewRecord_0197:
      case enumPrjFeature.UpdateRecord_0137:
      case enumPrjFeature.UpdateRecord_0199:
        ShowTrInDivObj(divVarSet.refDivEdit, 'trKeyIdGetModeId');
        break;
      default:
        break;
    }
  }
  /* 函数功能:页面导入,当页面开始运行时所发生的事件
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PageLoadCache)
*/
  public async PageLoad() {
    const strThisFuncName = this.PageLoad.name;
    // 在此处放置用户代码以初始化页面
    try {
      console.log('nnxc PageLoad()');
    } catch (e: any) {
      const strMsg = `页面启动不成功,${e}.(in ${this.constructor.name}.${strThisFuncName})`;
      console.error(strMsg);
      alert(strMsg);
    }
  }
  //   /* 函数功能:为编辑区绑定下拉框
  //  (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_BindDdl4EditRegion)
  //*/
  //   public async BindDdl4EditRegion() {
  //       // 在此处放置用户代码以初始化页面
  //       await this.SetDdl_FeatureId(enumPrjFeatureType.FrontInterface_01);//编辑区域
  //       const ddlKeyIdGetModeId = await this.SetDdl_KeyIdGetModeId();//编辑区域
  //       const ddlCtlTypeId = await this.SetDdl_CtlTypeId();//编辑区域
  //       const ddlViewImplId = await this.SetDdl_ViewImplId();//编辑区域
  //       const strPrjId = FeatureRegionFlds_Edit.PrjIdCache;  //定义条件字段
  //       const strTabId = FeatureRegionFlds_EditEx.strTabId4Region;  //定义条件字段

  //       const ddlTabFeatureId = await this.SetDdl_TabFeatureId(strPrjId, strTabId);//编辑区域
  //       const ddlFieldTypeId = await this.SetDdl_FieldTypeId();//编辑区域
  //       const ddlReleFldId = await this.SetDdl_ReleFldId(strPrjId);//编辑区域
  //       const ddlValueGivingModeId = await this.SetDdl_ValueGivingModeId();//编辑区域
  //   }

  public async SetDdl_DsTabId(strCmPrjId: string) {
    // const objPrjTabCond: clsPrjTabEN = new clsPrjTabEN(); //编辑区域
    await vPrjTab_SimEx_BindDdl_TabIdByCmPrjIdInDivCache(
      divVarSet.refDivEdit,
      'ddlDsTabId',
      strCmPrjId,
    ); //编辑区域
    //        clsPrjTabBLEx.BindDdl_TabIdExCache(ddlDsTabId, strPrjId);
    //			BindDdl_DsTabId(ddlDsTabId);
  }
  public async SetDdl_DsDataValueFieldId(strTabId: string) {
    await vFieldTab_SimEx_BindDdl_FldIdByTabIdInDivCache(
      divVarSet.refDivEdit,
      'ddlDsDataValueFieldId',
      strTabId,
    ); //编辑区域
  }

  public async SetDdl_DsCondFieldId(strTabId: string) {
    //clsDropDownList.BindDdl_DS_DataPrjTabFld(ddlDsCondFieldId, strTabId);

    await vFieldTab_SimEx_BindDdl_FldIdByTabIdInDivCache(
      divVarSet.refDivEdit,
      'ddlDsCondFieldId',
      strTabId,
    ); //编辑区域
  }
  public async SetDdl_DsSortFieldId(strTabId: string) {
    //clsDropDownList.BindDdl_DS_DataPrjTabFld(ddlDsSortFieldId, strTabId);

    await vFieldTab_SimEx_BindDdl_FldIdByTabIdInDivCache(
      divVarSet.refDivEdit,
      'ddlDsSortFieldId',
      strTabId,
    ); //编辑区域
  }
  public async SetDdl_QueryOptionId() {
    //const ddlDdlItemsOptionId = await DDLItemsOption_BindDdl_DdlItemsOptionIdCache("ddlDdlItemsOptionId", objDDLItemsOption_Cond);//编辑区域
    // const objQueryOption_Cond: clsQueryOptionEN = new clsQueryOptionEN(); //编辑区域
    await QueryOption_BindDdl_QueryOptionIdInDivCache(divVarSet.refDivEdit, 'ddlQueryOptionId'); //编辑区域
  }
  public async SetDdl_DsDataTextFieldId(strTabId: string) {
    //clsDropDownList.BindDdl_DS_DataPrjTabFld(ddlDsDataTextFieldId, strTabId);
    await vFieldTab_SimEx_BindDdl_FldIdByTabIdInDivCache(
      divVarSet.refDivEdit,
      'ddlDsDataTextFieldId',
      strTabId,
    ); //编辑区域
  }
  public ddlDsTabId_SelectedIndexChangedBak() {
    const strDsTabId = this.dsTabId;

    this.SetDdl_DsDataTextFieldId(strDsTabId);
    this.SetDdl_DsDataValueFieldId(strDsTabId);
    this.SetDdl_DsCondFieldId(strDsTabId);
    this.SetDdl_DsSortFieldId(strDsTabId);
  }
  public ddlDdlItemsOptionId_SelectedIndexChangedBak() {
    if (this.ddlItemsOptionId == '' || this.ddlItemsOptionId == '0') return;
    const strDdlItemsOptionId = this.ddlItemsOptionId;
    HideTrInDivObj(divVarSet.refDivEdit, 'trDsTabId');
    HideTrInDivObj(divVarSet.refDivEdit, 'trDsCondStr');
    HideTrInDivObj(divVarSet.refDivEdit, 'trDsSqlStr');
    HideTrInDivObj(divVarSet.refDivEdit, 'trItemsString');
    switch (strDdlItemsOptionId) {
      case enumDDLItemsOption.DataSourceTable_02:
        ShowTrInDivObj(divVarSet.refDivEdit, 'trDsTabId');
        // ShowTrInDivObj(divVarSet.refDivEdit,'trDsCondStr');
        ShowTrInDivObj(divVarSet.refDivEdit, 'trDsDataTextFieldId');
        ShowTrInDivObj(divVarSet.refDivEdit, 'trDsDataValueFieldId');
        ShowTrInDivObj(divVarSet.refDivEdit, 'trDsCondFieldId');
        ShowTrInDivObj(divVarSet.refDivEdit, 'trDsSortFieldId');
        this.SetDdl_DsTabId(clsPrivateSessionStorage.currSelPrjId);
        break;
      case enumDDLItemsOption.ListItemString_01:
        ShowTrInDivObj(divVarSet.refDivEdit, 'trItemsString');
        break;
      case enumDDLItemsOption.SQLString_03:
        ShowTrInDivObj(divVarSet.refDivEdit, 'trDsSqlStr');
        break;
      case enumDDLItemsOption.TrueAndFalseList_04:
        //ShowTrInDivObj(divVarSet.refDivEdit, 'trDsSqlStr');
        break;
    }
  }

  public get ddlItemsOptionId(): string {
    const strValue = GetSelectValueInDivObj(divVarSet.refDivEdit, 'ddlDdlItemsOptionId');
    if (strValue == undefined) return '';
    else if (strValue == '0') return '';
    else return strValue;
  }
  public get dsTabId(): string {
    const strValue = GetSelectValueInDivObj(divVarSet.refDivEdit, 'ddlDsTabId');
    if (strValue == undefined) return '';
    else if (strValue == '0') return '';
    else return strValue;
  }

  public set queryOptionId(value: string) {
    SetSelectValueByIdInDivObj(divVarSet.refDivEdit, 'ddlQueryOptionId', value);
  }
  /*
   * 查询方式Id
   */
  public get queryOptionId(): string {
    const strValue = GetSelectValueInDivObj(divVarSet.refDivEdit, 'ddlQueryOptionId');
    if (strValue == undefined) return '';
    else if (strValue == '0') return '';
    else return strValue;
  }
  /* 修改记录
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnUpdateRecord_Click)
*/
  public async btnUpdateRecord_Click(strKeyId: string) {
    this.opType = 'Update';
    if (strKeyId == '') {
      alert('请选择需要修改的记录！');
      return;
    }
    this.keyId = strKeyId;

    this.btnSubmitFeatureRegionFlds = '确认修改';
    //            ShowDialog_QryRegionFlds('Update');
    //const lngKeyId = Number(strKeyId);
    await this.UpdateRecord(strKeyId);
    const strViewFeatureId = this.keyId; //.viewFeatureId;
    // const strFldId = this.releFldId;
    const objFeatureRegionFlds = await FeatureRegionFlds_GetObjByViewFeatureIdAsync(strKeyId);
    if (objFeatureRegionFlds == null) return;
    switch (objFeatureRegionFlds.featureId) {
      case enumPrjFeature.AdjustOrderNum_0142:
      case enumPrjFeature.Tab_AdjustOrderNum_0167:
      case enumPrjFeature.AdjustOrderNum_0224:
      case enumPrjFeature.AdjustOrderNum_0225:
      case enumPrjFeature.AdjustOrderNum_1196:
        await FeatureRegionFldsCRUDEx.objViewFeatureFlds_EditEx.btnUpdateRecord_ClickV3(
          strViewFeatureId,
          TabId4Region_Static.value,
          objFeatureRegionFlds.tabFeatureId,
        );
        break;
      case enumPrjFeature.SetFieldValue_0148:
        await FeatureRegionFldsCRUDEx.objViewFeatureFlds_EditEx.btnUpdateRecord_ClickV3(
          strViewFeatureId,
          TabId4Region_Static.value,
          objFeatureRegionFlds.tabFeatureId,
        );
        break;
      default:
        FeatureRegionFlds_EditEx.HideViewFeatureFlds();
        break;
    }
  }
  /** 根据关键字获取相应的记录的对象
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecord)
   * @param sender">参数列表</param>
   **/
  public async UpdateRecord(strViewFeatureId: string): Promise<boolean> {
    const strThisFuncName = this.UpdateRecord.name;
    this.btnSubmitFeatureRegionFlds = '确认修改';
    //this.btnCancel_FeatureRegionFlds = "取消修改";
    this.keyId = strViewFeatureId;
    try {
      const objFeatureRegionFldsEN = await FeatureRegionFlds_GetObjByViewFeatureIdAsync(
        strViewFeatureId,
      );
      if (objFeatureRegionFldsEN == null) return false;
      refFeatureRegionFlds_Edit.value.ShowDataFromFeatureRegionFldsObj(objFeatureRegionFldsEN);
      // await this.GetDataFromFeatureRegionFldsClass(objFeatureRegionFldsEN);

      return true;
    } catch (e) {
      const strMsg = Format(
        '根据关键字获取相应的记录的对象不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return false;
    }
  }

  /** 修改记录
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecordSave)
   **/
  public async UpdateRecordSave(): Promise<boolean> {
    const strThisFuncName = this.UpdateRecordSave.name;
    const viewInfoStore = useviewInfoStore();
    const viewRegionStore = useviewRegionStore();
    //this.divName = "divUpdateRecordSave";
    const objFeatureRegionFldsEN =
      await refFeatureRegionFlds_Edit.value.GetEditDataFeatureRegionFldsObj();
    objFeatureRegionFldsEN.SetViewFeatureId(this.keyId);
    objFeatureRegionFldsEN.sfUpdFldSetStr = objFeatureRegionFldsEN.updFldString; //设置哪些字段被修改(脏字段)
    if (
      objFeatureRegionFldsEN.viewFeatureId == '' ||
      objFeatureRegionFldsEN.viewFeatureId == undefined
    ) {
      console.error('关键字不能为空!');
      throw '关键字不能为空!';
    }

    try {
      FeatureRegionFlds_CheckProperty4Update(objFeatureRegionFldsEN);
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
      const returnBool = await FeatureRegionFlds_UpdateRecordAsync(objFeatureRegionFldsEN);
      if (returnBool == true) {
        await FeatureRegionFldsEx_CheckRegionFldsUp(
          objFeatureRegionFldsEN.regionId,
          clsPrivateSessionStorage.cmPrjId,
          objFeatureRegionFldsEN.updUser,
        );
        viewInfoStore.delObjByRegionId(objFeatureRegionFldsEN.regionId);
        viewRegionStore.delObj(objFeatureRegionFldsEN.regionId);
        FeatureRegionFlds_ReFreshCache(RegionId_Static.value);
        FeatureRegionFlds_DeleteKeyIdCache(objFeatureRegionFldsEN.regionId, this.keyId);
      }
      const strViewFeatureId = objFeatureRegionFldsEN.viewFeatureId; //.viewFeatureId;
      // const strFldId = this.releFldId;
      let returnBool2 = false;
      if (
        IsNullOrEmpty(strViewFeatureId) == false &&
        refViewFeatureFlds1_Edit.value.fieldTypeId != ''
      ) {
        returnBool2 =
          await FeatureRegionFldsCRUDEx.objViewFeatureFlds_EditEx.btnUpdateRecordSave_ClickV3(
            strViewFeatureId,
          );
      } else {
        returnBool2 = true;
      }
      return returnBool && returnBool2;
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

  /** 函数功能:把类对象的属性内容显示到界面上
   * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
   * 如果在设置数据库时,就应该一级字段在前,二级字段在后
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_GetDataFromClass)
   * @param pobjFeatureRegionFldsEN.js">表实体类对象</param>
   **/
  public async GetBakDataFromFeatureRegionFldsClassBak20250523(
    pobjFeatureRegionFldsEN: clsFeatureRegionFldsEN,
  ) {
    const strThisFuncName = this.GetBakDataFromFeatureRegionFldsClassBak20250523.name;
    refFeatureRegionFlds_Edit.value.featureId = pobjFeatureRegionFldsEN.featureId; // 功能
    const objPrjFeature = await vPrjFeatureSim_GetObjByFeatureIdCache(
      refFeatureRegionFlds_Edit.value.featureId,
    );
    if (objPrjFeature == null) {
      const strMsg = Format(
        '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    let strMsg;
    switch (refFeatureRegionFlds_Edit.value.featureId) {
      case enumPrjFeature.AddNewRecordWithMaxId_0183:
      case enumPrjFeature.AddNewRecord_0136:
      case enumPrjFeature.AddNewRecord_0197:
        HideTrInDivObj(divVarSet.refDivEdit, 'trKeyIdGetModeId');
        HideTrInDivObj(divVarSet.refDivEdit, 'trFieldTypeId');
        HideTrInDivObj(divVarSet.refDivEdit, 'trReleFldId');
        HideTrInDivObj(divVarSet.refDivEdit, 'trDefaultValue');
        // HideDivObj(divVarSet.refDivEdit); // 'divEdit_Loc_Sub');

        break;
      case enumPrjFeature.DetailRecord_0239:
        HideTrInDivObj(divVarSet.refDivEdit, 'trKeyIdGetModeId');
        HideTrInDivObj(divVarSet.refDivEdit, 'trFieldTypeId');
        HideTrInDivObj(divVarSet.refDivEdit, 'trReleFldId');
        HideTrInDivObj(divVarSet.refDivEdit, 'trDefaultValue');
        // HideDivObj(divVarSet.refDivEdit); // 'divEdit_Loc_Sub');

        break;
      case enumPrjFeature.CopyRecord_0141:
        HideTrInDivObj(divVarSet.refDivEdit, 'trKeyIdGetModeId');
        HideTrInDivObj(divVarSet.refDivEdit, 'trFieldTypeId');
        HideTrInDivObj(divVarSet.refDivEdit, 'trReleFldId');
        HideTrInDivObj(divVarSet.refDivEdit, 'trDefaultValue');
        // HideDivObj(divVarSet.refDivEdit); //HideDiv('divEdit_Loc_Sub');

        break;
      case enumPrjFeature.UpdateRecord_0137:
      case enumPrjFeature.UpdateRecord_Gv_0174:
        HideTrInDivObj(divVarSet.refDivEdit, 'trKeyIdGetModeId');
        HideTrInDivObj(divVarSet.refDivEdit, 'trFieldTypeId');
        HideTrInDivObj(divVarSet.refDivEdit, 'trReleFldId');
        HideTrInDivObj(divVarSet.refDivEdit, 'trDefaultValue');
        // HideDivObj(divVarSet.refDivEdit); //HideDiv('divEdit_Loc_Sub');
        break;
      case enumPrjFeature.SetFieldValue_0148:
        HideTrInDivObj(divVarSet.refDivEdit, 'trKeyIdGetModeId');
        HideTrInDivObj(divVarSet.refDivEdit, 'trFieldTypeId');
        HideTrInDivObj(divVarSet.refDivEdit, 'trReleFldId');
        HideTrInDivObj(divVarSet.refDivEdit, 'trDefaultValue');
        // ShowDivObj(divVarSet.refDivEdit);
        HideTrInDivObj(divVarSet.refDivEdit, 'trTabFeatureId');
        // HideTrInDivObj(divVarSet.refDivEdit, 'trOrderNum');

        break;
      case enumPrjFeature.AdjustOrderNum_1196:
        ShowTrInDivObj(divVarSet.refDivEdit, 'trKeyIdGetModeId');
        HideTrInDivObj(divVarSet.refDivEdit, 'trFieldTypeId');
        HideTrInDivObj(divVarSet.refDivEdit, 'trReleFldId');
        HideTrInDivObj(divVarSet.refDivEdit, 'trDefaultValue');
        // ShowDivObj(divVarSet.refDivEdit);
        ShowTrInDivObj(divVarSet.refDivEdit, 'trTabFeatureId');
        // HideTrInDivObj(divVarSet.refDivEdit, 'trOrderNum');
        // HideTrInDivObj(divVarSet.refDivEdit, 'trDdlItemsOptionId');

        break;

      case enumPrjFeature.DelRecord_0138:
        HideTrInDivObj(divVarSet.refDivEdit, 'trKeyIdGetModeId');
        HideTrInDivObj(divVarSet.refDivEdit, 'trFieldTypeId');
        HideTrInDivObj(divVarSet.refDivEdit, 'trReleFldId');
        HideTrInDivObj(divVarSet.refDivEdit, 'trDefaultValue');
        // HideDivObj(divVarSet.refDivEdit); //HideDiv('divEdit_Loc_Sub');
        break;
      case enumPrjFeature.Query_0139:
      case enumPrjFeature.ExportToFile_0143:
        HideTrInDivObj(divVarSet.refDivEdit, 'trKeyIdGetModeId');
        HideTrInDivObj(divVarSet.refDivEdit, 'trFieldTypeId');
        HideTrInDivObj(divVarSet.refDivEdit, 'trReleFldId');
        HideTrInDivObj(divVarSet.refDivEdit, 'trDefaultValue');
        // HideDivObj(divVarSet.refDivEdit); //HideDiv('divEdit_Loc_Sub');
        break;
      case enumPrjFeature.DefaultFeature_0240:
        HideTrInDivObj(divVarSet.refDivEdit, 'trKeyIdGetModeId');
        HideTrInDivObj(divVarSet.refDivEdit, 'trFieldTypeId');
        HideTrInDivObj(divVarSet.refDivEdit, 'trReleFldId');
        HideTrInDivObj(divVarSet.refDivEdit, 'trDefaultValue');
        break;
      default:
        strMsg = Format(
          '功能:[{0}({1})] 在函数({2}.{3})中没有被处理！',
          objPrjFeature.featureName,
          objPrjFeature.featureId,
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        break;
    }
    refFeatureRegionFlds_Edit.value.inUse = pobjFeatureRegionFldsEN.inUse; // 在用
    refFeatureRegionFlds_Edit.value.keyIdGetModeId = pobjFeatureRegionFldsEN.keyIdGetModeId; // 获取方式
    refFeatureRegionFlds_Edit.value.ctlTypeId = pobjFeatureRegionFldsEN.ctlTypeId; // 控件类型
    refFeatureRegionFlds_Edit.value.seqNum = pobjFeatureRegionFldsEN.seqNum; // 序号
    refFeatureRegionFlds_Edit.value.buttonName = pobjFeatureRegionFldsEN.buttonName; // 按钮名称
    refFeatureRegionFlds_Edit.value.text = pobjFeatureRegionFldsEN.text; // 文本
    //this.regionId = pobjFeatureRegionFldsEN.regionId;// 区域Id
    refFeatureRegionFlds_Edit.value.cssClass = pobjFeatureRegionFldsEN.cssClass; // 样式表
    refFeatureRegionFlds_Edit.value.width = pobjFeatureRegionFldsEN.width; // 宽
    refFeatureRegionFlds_Edit.value.viewImplId = pobjFeatureRegionFldsEN.viewImplId; // 实现区域
    refFeatureRegionFlds_Edit.value.tabFeatureId = pobjFeatureRegionFldsEN.tabFeatureId; // 表功能
    refFeatureRegionFlds_Edit.value.fieldTypeId = pobjFeatureRegionFldsEN.fieldTypeId; // 字段类型
    refFeatureRegionFlds_Edit.value.releFldId = pobjFeatureRegionFldsEN.releFldId; // 相关字段
    refFeatureRegionFlds_Edit.value.valueGivingModeId = pobjFeatureRegionFldsEN.valueGivingModeId; // 给值方式
    refFeatureRegionFlds_Edit.value.defaultValue = pobjFeatureRegionFldsEN.defaultValue; // 缺省值
    // this.prjId = pobjFeatureRegionFldsEN.prjId;// 工程ID
    refFeatureRegionFlds_Edit.value.funcName = pobjFeatureRegionFldsEN.funcName; // 调用函数
    refFeatureRegionFlds_Edit.value.commandName = pobjFeatureRegionFldsEN.commandName; // 命令名
  }

  /**
   * 命令名 (Used In Clear())
   **/
  public set commandName(value: string) {
    SetInputValueInDivObj(divVarSet.refDivEdit, 'txtCommandName', value);
  }
  /**
   * 函数名 (Used In PutDataToClass())
   **/
  public get commandName(): string {
    const strValue = GetInputValueInDivObj(divVarSet.refDivEdit, 'txtCommandName');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }

  public async SetDdl_CtlTypeIdInDiv() {
    await CtlTypeEx_BindDdl_CtlTypeIdForNotAppleInDivCache(divVarSet.refDivEdit, 'ddlCtlTypeId'); //
  }
}
