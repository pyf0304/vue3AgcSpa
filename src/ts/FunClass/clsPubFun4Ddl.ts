/*
 * 功能:为Web提供一些几个公共的功能函数
 * 版本:2019-08-07-01
 * 作者:潘以锋
 * */

import { enumCtlType } from '@/ts/L0Entity/PrjInterface/clsCtlTypeEN';
import { enumQueryOption } from '@/ts/L0Entity/PrjInterface/clsQueryOptionEN';
import { GCVariableType_BindDdl_VarTypeIdInDivCache } from '@/ts/L3ForWApi/GeneCode/clsGCVariableTypeWApi';
import {
  GCVariableEx_BindDdl_VarIdByVarTypeIdInDivCache1,
  GCVariableEx_BindDdl_VarIdInDivCache,
} from '@/ts/L3ForWApiEx/GeneCode/clsGCVariableExWApi';
import { vFieldTab_SimEx_BindDdl_FldIdByTabIdInDivCache } from '@/ts/L3ForWApiEx/Table_Field/clsvFieldTab_SimExWApi';
import { vPrjTab_SimEx_BindDdl_TabId4TabFeatureDdlInDivCache } from '@/ts/L3ForWApiEx/Table_Field/clsvPrjTab_SimExWApi';
import { vTabFeature_SimEx_BindDdl_TabFeatureId4DdlByTabIdInDivCache } from '@/ts/L3ForWApiEx/Table_Field/clsvTabFeature_SimExWApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import {
  CheckControlExistInDivObj,
  GetSelectValueInDivObj,
  SetLabelHtmlByIdInDivObj,
  SetSelectValueByIdInDivObj,
  getTrObjByIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';

//declare const document;

export class clsPubFun4Ddl {
  public strRegionType = '';
  public divEdit: HTMLDivElement;

  constructor(mstrRegionType: string, myDivEdit: HTMLDivElement) {
    this.strRegionType = mstrRegionType;
    this.divEdit = myDivEdit;
  }

  /*
   * 重新转向本项目新的Url地址
   */
  public GetRegionId(strViewId: string, strRegionTypeId: string): number {
    console.log(strViewId, strRegionTypeId);
    return 0;
  }
  /** 函数功能:系统生成的Change事件函数
    (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript+<>c__DisplayClass13_0:<Gen_WApi_Ts_GeneEventFuncEx>b__1)
  */
  public async ddlCtlTypeId_SelectedIndexChangedBak() {
    console.log('ddlCtlTypeId_SelectedIndexChanged--this.ctlTypeId:', this.ctlTypeId);
    this.HideTrInDiv('trDdlItemsOptionId');
    this.HideTrInDiv('trDsTabId');
    this.HideTrInDiv('trTabFeatureId4Ddl');
    // this.HideTrInDiv('t1rVarTypeIdCond1');
    // this.HideTrInDiv('t1rVarTypeIdCond2');
    this.HideTrInDiv('trVarIdCond1');
    this.HideTrInDiv('trVarIdCond2');
    this.HideTrInDiv('trFldIdCond1');
    this.HideTrInDiv('trFldIdCond2');

    this.HideTrInDiv('trDsCondStr');
    this.HideTrInDiv('trDsSqlStr');
    this.HideTrInDiv('trItemsString');
    this.HideTrInDiv('trDsDataTextFieldId');
    this.HideTrInDiv('trDsDataValueFieldId');
    this.HideTrInDiv('trDsCondFieldId');
    this.HideTrInDiv('trDsSortFieldId');
    this.HideTrInDiv('trVarId0');
    switch (this.ctlTypeId) {
      // case enumCtlType.CacheClassifyField_37:
      //   this.ShowTrInDiv('trVarId0');
      //   await this.SetDdl_VarIdInDiv(clsPrivateSessionStorage.currSelPrjId);

      //   break;
      case enumCtlType.ViewVariable_38:
        this.ShowTrInDiv('trVarId0');
        await this.SetDdl_VarIdInDiv(clsPrivateSessionStorage.currSelPrjId);
        break;
      // case enumCtlType.sessionStorage_40:
      //   this.ShowTrInDiv('trVarId0');
      //   await this.SetDdl_VarIdInDiv(clsPrivateSessionStorage.currSelPrjId);
      //   break;
      // case enumCtlType.DropDownList_06:
      //   this.ShowTrInDiv('trTabFeatureId4Ddl');
      //   this.ShowTrInDiv('trDdlItemsOptionId');
      //   this.ShowTrInDiv('trDsTabId');

      //   console.log('QryRegion:', this.strRegionType);
      //   if (this.strRegionType == 'QryRegion') {
      //     this.queryOptionId = enumQueryOption.EqualQuery_01;
      //   }
      //   break;
      // case enumCtlType.DropDownList_Bool_18:
      //   this.ShowTrInDiv('trDdlItemsOptionId');
      //   this.ddlItemsOptionId = enumDDLItemsOption.TrueAndFalseList_04;
      //   //$('#ddlDdlItemsOptionId').val(enumDDLItemsOption.TrueAndFalseList_04);
      //   break;
      case enumCtlType.TextBox_16:
        if (this.strRegionType == 'QryRegion') {
          this.queryOptionId = enumQueryOption.FuzzyQuery_02;
        }
        break;
      case enumCtlType.TextArea_41:
        if (this.strRegionType == 'QryRegion') {
          this.queryOptionId = enumQueryOption.FuzzyQuery_02;
        }
        break;
      case enumCtlType.GivenValue_35:
        this.HideTrInDiv('trDdlItemsOptionId');
        break;
      default:
        break;
    }

    //alert("Changed");
  }

  // /** 函数功能:系统生成的Change事件函数
  //    (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript+<>c__DisplayClass13_0:<Gen_WApi_Ts_GeneEventFuncEx>b__1)
  //  */
  // public async ddlDdlItemsOptionId_SelectedIndexChanged() {
  //   const strCmPrjId = clsPrivateSessionStorage.cmPrjId;
  //   if (this.ddlItemsOptionId == '' || this.ddlItemsOptionId == '0') return;
  //   const strDdlItemsOptionId: string = this.ddlItemsOptionId;
  //   this.HideTrInDiv('trDsTabId');
  //   this.HideTrInDiv('trDsCondStr');
  //   this.HideTrInDiv('trDsSqlStr');
  //   this.HideTrInDiv('trItemsString');
  //   // this.HideTrInDiv('t1rVarTypeIdCond1');
  //   // this.HideTrInDiv('t1rVarTypeIdCond2');
  //   this.HideTrInDiv('trVarIdCond1');
  //   this.HideTrInDiv('trVarIdCond2');

  //   switch (strDdlItemsOptionId) {
  //     case enumDDLItemsOption.DataSourceTable_02:
  //       this.ShowTrInDiv('trDsTabId');
  //       //$('trDsCondStr');
  //       //this.ShowTrInDiv('trDsDataTextFieldId');
  //       //this.ShowTrInDiv('trDsDataValueFieldId');
  //       //this.ShowTrInDiv('trDsCondFieldId');
  //       //this.ShowTrInDiv('trDsSortFieldId');
  //       await this.SetDdl_DsTabId4TabFeatureDdlInDiv(
  //         clsPrivateSessionStorage.currSelPrjId,
  //         strCmPrjId,
  //       );
  //       break;
  //     case enumDDLItemsOption.ListItemString_01:
  //       this.ShowTrInDiv('trItemsString');
  //       break;
  //     case enumDDLItemsOption.SQLString_03:
  //       this.ShowTrInDiv('trDsSqlStr');
  //       break;
  //     case enumDDLItemsOption.TrueAndFalseList_04:
  //       //trDsSqlStr');
  //       break;
  //   }
  // }
  /**
   * 设置绑定下拉框，针对字段:[dsTabId]
   * (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl_TSInDiv)
   */
  public async SetDdl_DsTabId4TabFeatureDdlInDiv(strPrjId: string, strCmPrjId: string) {
    //定义条件字段
    //const strPrjId = "";//定义条件字段
    await vPrjTab_SimEx_BindDdl_TabId4TabFeatureDdlInDivCache(
      this.divEdit,
      'ddlDsTabId',
      strPrjId,
      strCmPrjId,
    ); //编辑区域
  }
  //   /** 函数功能:系统生成的Change事件函数
  //    (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript+<>c__DisplayClass13_0:<Gen_WApi_Ts_GeneEventFuncEx>b__1)
  //  */
  //   public async ddlDsTabId_SelectedIndexChanged(strDsTabId: string) {
  //     // const strDsTabId = this.dsTabId;
  //     if (strDsTabId == '') return;
  //     if (strDsTabId == '0') {
  //       console.error('strDsTabId:', strDsTabId);
  //     }
  //     await this.SetDdl_TabFeatureId4DdlByTabIdInDiv(strDsTabId);
  //     await this.SetDdl_DsDataTextFieldId(strDsTabId);
  //     await this.SetDdl_DsDataValueFieldId(strDsTabId);
  //     await this.SetDdl_DsCondFieldId(strDsTabId);
  //     await this.SetDdl_DsSortFieldId(strDsTabId);
  //   }

  public async SetDdl_TabFeatureId4DdlByTabIdInDiv(strTabId: string) {
    //定义条件字段
    //const strPrjId = "";//定义条件字段
    //const ddlDsDataTextFieldId = await vFieldTab_Sim_BindDdl_FldIdCache("ddlDsDataTextFieldId", objFieldTab_Cond, strPrjId);//编辑区域
    await vTabFeature_SimEx_BindDdl_TabFeatureId4DdlByTabIdInDivCache(
      this.divEdit,
      'ddlTabFeatureId4Ddl',
      strTabId,
    ); //编辑区域
  }
  public async SetDdl_DsDataTextFieldId(strTabId: string) {
    //定义条件字段
    //const strPrjId = "";//定义条件字段
    //const ddlDsDataTextFieldId = await vFieldTab_Sim_BindDdl_FldIdCache("ddlDsDataTextFieldId", objFieldTab_Cond, strPrjId);//编辑区域
    await vFieldTab_SimEx_BindDdl_FldIdByTabIdInDivCache(
      this.divEdit,
      'ddlDsDataTextFieldId',
      strTabId,
    ); //编辑区域
  }
  /// <summary>
  /// 设置绑定下拉框，针对字段:[ds_DataValueFieldId]
  /// (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl_TS)
  /// </summary>
  public async SetDdl_DsDataValueFieldId(strTabId: string) {
    //定义条件字段
    //const strPrjId = "";//定义条件字段
    //const ddlDsDataValueFieldId = await vFieldTab_Sim_BindDdl_FldIdCache("ddlDsDataValueFieldId", objFieldTab_Cond, strPrjId);//编辑区域
    await vFieldTab_SimEx_BindDdl_FldIdByTabIdInDivCache(
      this.divEdit,
      'ddlDsDataValueFieldId',
      strTabId,
    ); //编辑区域
  }

  /// <summary>
  /// 设置绑定下拉框，针对字段:[ds_CondFieldId]
  /// (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl_TS)
  /// </summary>
  public async SetDdl_DsCondFieldId(strTabId: string) {
    //定义条件字段
    //const strPrjId = "";//定义条件字段
    //const ddlDsCondFieldId = await vFieldTab_Sim_BindDdl_FldIdCache("ddlDsCondFieldId", objFieldTab_Cond, strPrjId);//编辑区域
    await vFieldTab_SimEx_BindDdl_FldIdByTabIdInDivCache(
      this.divEdit,
      'ddlDsCondFieldId',
      strTabId,
    ); //编辑区域
  }
  /// <summary>
  /// 设置绑定下拉框，针对字段:[ds_SortFieldId]
  /// (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl_TS)
  /// </summary>
  public async SetDdl_DsSortFieldId(strTabId: string) {
    //定义条件字段
    //const strPrjId = "";//定义条件字段
    //const ddlDsSortFieldId = await vFieldTab_Sim_BindDdl_FldIdCache("ddlDsSortFieldId", objFieldTab_Cond, strPrjId);//编辑区域
    await vFieldTab_SimEx_BindDdl_FldIdByTabIdInDivCache(
      this.divEdit,
      'ddlDsSortFieldId',
      strTabId,
    ); //编辑区域
  }
  /** 函数功能:系统生成的Change事件函数
   (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript+<>c__DisplayClass13_0:<Gen_WApi_Ts_GeneEventFuncEx>b__1)
 */
  // public async ddlTabFeatureId4Ddl_SelectedIndexChanged() {
  //   const strPrjId = clsPrivateSessionStorage.currSelPrjId;
  //   const strTabFeatureId4Ddl = this.tabFeatureId4Ddl;
  //   const arrTabFeatureFlds = await vTabFeatureFlds_SimEx_GetObjLstByTabFeatureIdCache(
  //     strTabFeatureId4Ddl,
  //     clsPrivateSessionStorage.currSelPrjId,
  //   );
  //   const arrTabFeatureFlds_Sel = arrTabFeatureFlds
  //     .filter(
  //       (x) =>
  //         x.fieldTypeId == enumFieldType.ConditionField_16 &&
  //         x.valueGivingModeId != enumValueGivingMode.DefaultValue_01,
  //     )
  //     .sort(vTabFeatureFlds_SimEx_SortFun_OrderNum);
  //   if (arrTabFeatureFlds_Sel.length == 2) {
  //     // this.ShowTrInDiv('t1rVarTypeIdCond1');
  //     // this.ShowTrInDiv('t1rVarTypeIdCond2');
  //     this.ShowTrInDiv('trVarIdCond1');
  //     this.ShowTrInDiv('trVarIdCond2');
  //     this.ShowTrInDiv('trFldIdCond1');
  //     this.ShowTrInDiv('trFldIdCond2');
  //     this.fldIdCond1 = arrTabFeatureFlds_Sel[0].fldId;
  //     this.fldIdCond2 = arrTabFeatureFlds_Sel[1].fldId;
  //     const strFldNameCond1 = await vFieldTab_Sim_GetNameByFldIdCache(this.fldIdCond1);
  //     const strFldNameCond2 = await vFieldTab_Sim_GetNameByFldIdCache(this.fldIdCond2);
  //     this.SetLabelValue('lblFldIdCond1', Format('输入参数字段1:[{0}]的值', strFldNameCond1));
  //     this.SetLabelValue('lblFldIdCond2', Format('输入参数字段2:[{0}]的值', strFldNameCond2));
  //     // await GCVariableType_BindDdl_VarTypeIdInDivCache(this.divEdit, 'd1dlVarTypeIdCond1');
  //     // await GCVariableType_BindDdl_VarTypeIdInDivCache(this.divEdit, 'd1dlVarTypeIdCond2');
  //     await GCVariableEx_BindDdl_VarIdInDivCache(this.divEdit, 'ddlVarId1', strPrjId);
  //     await GCVariableEx_BindDdl_VarIdInDivCache(this.divEdit, 'ddlVarId2', strPrjId);
  //   } else if (arrTabFeatureFlds_Sel.length == 1) {
  //     // this.ShowTrInDiv('t1rVarTypeIdCond1');
  //     // this.HideTrInDiv('t1rVarTypeIdCond2');
  //     this.ShowTrInDiv('trVarIdCond1');
  //     this.HideTrInDiv('trVarIdCond2');
  //     this.ShowTrInDiv('trFldIdCond1');
  //     this.HideTrInDiv('trFldIdCond2');
  //     // this.varTypeIdCond2 = '';
  //     // this.varIdCond2 = '';
  //     this.fldIdCond1 = arrTabFeatureFlds_Sel[0].fldId;
  //     this.fldIdCond2 = '';
  //     const strFldNameCond1 = await vFieldTab_Sim_GetNameByFldIdCache(this.fldIdCond1);
  //     this.SetLabelValue('lblFldIdCond1', Format('输入参数字段1:[{0}]的值', strFldNameCond1));
  //     // await GCVariableType_BindDdl_VarTypeIdInDivCache(this.divEdit, 'ddlVarTypeIdCond1');
  //     await GCVariableEx_BindDdl_VarIdInDivCache(this.divEdit, 'ddlVarIdCond1', strPrjId);
  //   } else {
  //     // this.HideTrInDiv('t1rVarTypeIdCond1');
  //     // this.HideTrInDiv('t1rVarTypeIdCond2');
  //     this.HideTrInDiv('trVarIdCond1');
  //     this.HideTrInDiv('trVarIdCond2');
  //     this.HideTrInDiv('trFldIdCond1');
  //     this.HideTrInDiv('trFldIdCond2');
  //     // this.varTypeIdCond1 = '';
  //     // this.varIdCond1 = '';
  //     // this.varTypeIdCond2 = '';
  //     // this.varIdCond2 = '';
  //     // this.fldIdCond1 = '';
  //     // this.fldIdCond2 = '';
  //   }
  //   //await this.SetDdl_TabFeatureId4DdlByTabIdInDiv(strDsTabId);
  //   // await this.SetDdl_DsDataTextFieldId(strDsTabId);
  //   //await this.SetDdl_DsDataValueFieldId(strDsTabId);
  //   //await this.SetDdl_DsCondFieldId(strDsTabId);
  //   //await this.SetDdl_DsSortFieldId(strDsTabId);
  // }
  public async SetDdl_varTypeIdCond1InDivEx() {
    //定义条件字段
    //const strPrjId = "";//定义条件字段
    await GCVariableType_BindDdl_VarTypeIdInDivCache(this.divEdit, 'ddlVarTypeIdCond1'); //编辑区域
  }
  public async SetDdl_varTypeIdCond2InDivEx() {
    //定义条件字段
    //const strPrjId = "";//定义条件字段
    await GCVariableType_BindDdl_VarTypeIdInDivCache(this.divEdit, 'ddlVarTypeIdCond2'); //编辑区域
  }
  /**
   * 设置绑定下拉框，针对字段:[varId]
   * (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdlInDiv_TS4TabFeature)
   **/

  public async SetDdl_VarIdInDiv(prjId: string) {
    await GCVariableEx_BindDdl_VarIdInDivCache(this.divEdit, 'ddlVarId', prjId); //
  }
  /**
   *  函数功能:系统生成的Change事件函数
   **/
  public async ddlVarTypeIdCond1_SelectedIndexChanged(ddlVarTypeId: HTMLSelectElement) {
    //const thisCtrl = event;
    //const ddlVarTypeId: HTMLSelectElement = <HTMLSelectElement>thisCtrl?.srcElement;

    const elemName = ddlVarTypeId.id;
    console.error(ddlVarTypeId);
    console.error(elemName);

    let strvarTypeIdCond1;
    let strvarTypeIdCond2;
    switch (elemName) {
      case 'ddlVarTypeIdCond1':
        this.ShowTrInDiv('trVarIdCond1');
        // strvarTypeIdCond1 = this.varTypeIdCond1;
        await GCVariableEx_BindDdl_VarIdByVarTypeIdInDivCache1(
          this.divEdit,
          'ddlVarIdCond1',
          strvarTypeIdCond1,
        );
        break;
      case 'ddlVarTypeIdCond2':
        this.ShowTrInDiv('trVarIdCond1');
        // strvarTypeIdCond2 = this.varTypeIdCond2;
        await GCVariableEx_BindDdl_VarIdByVarTypeIdInDivCache1(
          this.divEdit,
          'ddlVarIdCond2',

          strvarTypeIdCond2,
        );
        break;
    }
    //switch (this.varTypeIdCond1) {
    //    case enumGCVariableType.GivingValue_0001:
    //        $('#trVarId0');
    //        break;
    //    case enumGCVariableType.DefaultValue_0002:
    //        $('#trDdlItemsOptionId');
    //        this.queryOptionId = enumQueryOption.EqualQuery_01;
    //        break;
    //    case enumGCVariableType.localStorage_0003:
    //        $('#trDdlItemsOptionId');
    //        break;
    //    case enumGCVariableType.sessionStorage_0004:
    //        break;
    //    case enumGCVariableType.QueryString_0005:
    //        $('#trDdlItemsOptionId');
    //        break;
    //    case enumGCVariableType.StaticValuable_0006:
    //        $('#trDdlItemsOptionId');
    //        break;
    //    case enumGCVariableType.CacheClassifyField_0007:
    //        $('#trDdlItemsOptionId');
    //        break;
    //    default:
    //        break;
    //}

    //alert("Changed");
  }
  //    /** 函数功能:系统生成的Change事件函数

  //*/
  //    public async ddlvarTypeIdCond2_SelectedIndexChanged() {
  //        const thisCtrl = event;
  //        console.error(thisCtrl);
  //        console.log("ddlvarTypeIdCond2_SelectedIndexChanged--this.ddlVarTypeIdCond1:", clsPubFun4Ddl.varTypeIdCond2);

  //        $('#trVarId0');
  //        const strvarTypeIdCond2 = clsPubFun4Ddl.varTypeIdCond2;
  //        const strPrjId = clsPrivateSessionStorage.currSelPrjId;
  //        await GCVariableEx_BindDdl_VarIdByVarTypeIdInDivCache(clsPubFun4Ddl.divName4Edit, "ddlVarIdCond2", strPrjId, strvarTypeIdCond2);

  //    }

  // /**
  //  * 控件类型号 (Used In Clear())
  //  **/
  // public set varTypeIdCond1(value: string) {
  //   const objDiv = this.divEdit;
  //   CheckControlExistInDivObj(this.divEdit, 'select', 'ddlVarTypeIdCond1');
  //   const strId = 'ddlVarTypeIdCond1';

  //   SetSelectValueByIdInDivObj(objDiv, strId, value);
  // }
  // /**
  //  * 控件类型号 (Used In PutDataToClass())
  //  **/
  // public get varTypeIdCond1(): string {
  //   const strValue = GetSelectValueInDivObj(this.divEdit, 'ddlVarTypeIdCond1');
  //   if (strValue == undefined) return '';
  //   else if (strValue == '0') return '';
  //   else return strValue;
  // }

  // /**
  //  * 控件类型号 (Used In Clear())
  //  **/
  // public set varTypeIdCond2(value: string) {
  //   const objDiv = this.divEdit;
  //   CheckControlExistInDivObj(this.divEdit, 'select', 'ddlVarTypeIdCond2');
  //   const strId = 'ddlVarTypeIdCond2';

  //   SetSelectValueByIdInDivObj(objDiv, strId, value);
  // }
  // /**
  //  * 控件类型号 (Used In PutDataToClass())
  //  **/
  // public get varTypeIdCond2(): string {
  //   const strValue = GetSelectValueInDivObj(this.divEdit, 'ddlVarTypeIdCond2');
  //   if (strValue == undefined) return '';
  //   else if (strValue == '0') return '';
  //   else return strValue;
  // }

  // /**
  //  * 控件类型号 (Used In Clear())
  //  **/
  // public set fldIdCond1(value: string) {
  //   const objDiv = this.divEdit;
  //   CheckControlExistInDivObj(this.divEdit, 'input', 'hidFldIdCond1');
  //   const strId = 'hidFldIdCond1';

  //   SetInputValueInDivObj(objDiv, strId, value);
  // }
  // /**
  //  * 控件类型号 (Used In PutDataToClass())
  //  **/
  // public get fldIdCond1(): string {
  //   const objDiv = this.divEdit;
  //   CheckControlExistInDivObj(this.divEdit, 'input', 'hidFldIdCond1');
  //   const strId = 'hidFldIdCond1';
  //   const strValue = GetInputValueInDivObj(objDiv, strId);
  //   return strValue;
  // }

  // /**
  //  * 控件类型号 (Used In Clear())
  //  **/
  // public set fldIdCond2(value: string) {
  //   const objDiv = this.divEdit;
  //   CheckControlExistInDivObj(this.divEdit, 'input', 'hidFldIdCond2');
  //   const strId = 'hidFldIdCond2';
  //   SetInputValueInDivObj(objDiv, strId, value);
  // }
  // /**
  //  * 控件类型号 (Used In PutDataToClass())
  //  **/
  // public get fldIdCond2(): string {
  //   const objDiv = this.divEdit;
  //   CheckControlExistInDivObj(this.divEdit, 'input', 'hidFldIdCond2');
  //   const strId = 'hidFldIdCond2';
  //   const strValue = GetInputValueInDivObj(objDiv, strId);
  //   return strValue;
  // }

  // /**
  //  * 控件类型号 (Used In Clear())
  //  **/
  // public set varIdCond1(value: string) {
  //   const objDiv = this.divEdit;
  //   CheckControlExistInDivObj(this.divEdit, 'select', 'ddlVarIdCond1');
  //   const strId = 'ddlVarIdCond1';
  //   SetSelectValueByIdInDivObj(objDiv, strId, value);
  // }
  // /**
  //  * 控件类型号 (Used In PutDataToClass())
  //  **/
  // public get varIdCond1(): string {
  //   const objDiv = this.divEdit;
  //   CheckControlExistInDivObj(this.divEdit, 'select', 'ddlVarIdCond1');
  //   const strId = 'ddlVarIdCond1';
  //   const strValue = GetSelectValueInDivObj(objDiv, strId);
  //   return strValue;
  // }

  // /**
  //  * 控件类型号 (Used In Clear())
  //  **/
  // public set varIdCond2(value: string) {
  //   const objDiv = this.divEdit;
  //   CheckControlExistInDivObj(this.divEdit, 'select', 'ddlVarIdCond2');
  //   const strId = 'ddlVarIdCond2';
  //   SetSelectValueByIdInDivObj(objDiv, strId, value);
  // }
  // /**
  //  * 控件类型号 (Used In PutDataToClass())
  //  **/
  // public get varIdCond2(): string {
  //   const objDiv = this.divEdit;
  //   CheckControlExistInDivObj(this.divEdit, 'select', 'ddlVarIdCond2');
  //   const strId = 'ddlVarIdCond2';
  //   const strValue = GetSelectValueInDivObj(objDiv, strId);
  //   return strValue;
  // }

  /**
   * 数据源表ID (Used In Clear())
   **/
  public set tabFeatureId4Ddl(value: string) {
    const objDiv = this.divEdit;
    CheckControlExistInDivObj(this.divEdit, 'select', 'ddlTabFeatureId4Ddl');
    const strId = 'ddlTabFeatureId4Ddl';
    SetSelectValueByIdInDivObj(objDiv, strId, value);
  }
  /**
   * 数据源表ID (Used In PutDataToClass())
   **/
  public get tabFeatureId4Ddl(): string {
    const objDiv = this.divEdit;
    CheckControlExistInDivObj(this.divEdit, 'select', 'ddlTabFeatureId4Ddl');
    const strId = 'ddlTabFeatureId4Ddl';
    let strValue = GetSelectValueInDivObj(objDiv, strId);
    if (strValue == '0') {
      strValue = '';
    }
    return strValue;
  }

  /**
   * 数据源表ID (Used In Clear())
   **/
  public set dsTabId(value: string) {
    const objDiv = this.divEdit;
    CheckControlExistInDivObj(this.divEdit, 'select', 'ddlDsTabId');
    const strId = 'ddlDsTabId';
    SetSelectValueByIdInDivObj(objDiv, strId, value);
  }
  /**
   * 数据源表ID (Used In PutDataToClass())
   **/
  public get dsTabId(): string {
    const objDiv = this.divEdit;
    CheckControlExistInDivObj(this.divEdit, 'select', 'ddlDsTabId');
    const strId = 'ddlDsTabId';
    const strValue = GetSelectValueInDivObj(objDiv, strId);
    return strValue;
  }
  /**
   * 下拉框列表选项ID (Used In Clear())
   **/
  public set ddlItemsOptionId(value: string) {
    const objDiv = this.divEdit;
    CheckControlExistInDivObj(this.divEdit, 'select', 'ddlDdlItemsOptionId');
    const strId = 'ddlDdlItemsOptionId';
    SetSelectValueByIdInDivObj(objDiv, strId, value);
  }
  /**
   * 下拉框列表选项ID (Used In PutDataToClass())
   **/
  public get ddlItemsOptionId(): string {
    const objDiv = this.divEdit;
    CheckControlExistInDivObj(this.divEdit, 'select', 'ddlDdlItemsOptionId');
    const strId = 'ddlDdlItemsOptionId';
    const strValue = GetSelectValueInDivObj(objDiv, strId);
    return strValue;
  }
  /**
   * 查询方式Id (Used In Clear())
   **/
  public set queryOptionId(value: string) {
    const objDiv = this.divEdit;
    CheckControlExistInDivObj(this.divEdit, 'select', 'ddlQueryOptionId');
    const strId = 'ddlQueryOptionId';
    SetSelectValueByIdInDivObj(objDiv, strId, value);
  }
  /**
   * 查询方式Id (Used In PutDataToClass())
   **/
  public get queryOptionId(): string {
    const objDiv = this.divEdit;
    CheckControlExistInDivObj(this.divEdit, 'select', 'ddlQueryOptionId');
    const strId = 'ddlQueryOptionId';
    const strValue = GetSelectValueInDivObj(objDiv, strId);
    return strValue;
  }
  /**
   * 控件类型号 (Used In Clear())
   **/
  public set ctlTypeId(value: string) {
    const objDiv = this.divEdit;
    CheckControlExistInDivObj(this.divEdit, 'select', 'ddlCtlTypeId');
    const strId = 'ddlCtlTypeId';
    SetSelectValueByIdInDivObj(objDiv, strId, value);
  }
  /**
   * 控件类型号 (Used In PutDataToClass())
   **/
  public get ctlTypeId(): string {
    const objDiv = this.divEdit;
    CheckControlExistInDivObj(this.divEdit, 'select', 'ddlCtlTypeId');
    const strId = 'ddlCtlTypeId';
    const strValue = GetSelectValueInDivObj(objDiv, strId);
    return strValue;
  }

  /**
   * 显示表格行 (tr))
   **/
  public ShowTrInDiv(strTr: string) {
    const objDiv = this.divEdit;
    CheckControlExistInDivObj(this.divEdit, 'tr', strTr);
    const strId = strTr;

    const objTr = getTrObjByIdInDivObj(objDiv, strId);
    if (objTr) {
      // 显示表行
      objTr.style.display = 'table-row';
    } else {
      // 表行不存在
      console.log(`表行:${strId}不存在`);
    }
  }

  /**
   * 隐藏表格行 (tr))
   **/
  public HideTrInDiv(strTr: string) {
    const objDiv = this.divEdit;
    CheckControlExistInDivObj(this.divEdit, 'tr', strTr);
    const strId = strTr;
    // objDiv.find(strId).hide();
    const objTr = getTrObjByIdInDivObj(objDiv, strId);
    if (objTr) {
      // 显示表行
      objTr.style.display = 'none';
    } else {
      // 表行不存在
      console.log(`表行:${strId}不存在`);
    }

    // const rowElement = objDiv.querySelector(`#${strTr}`);
    // if (rowElement) {
    //   // 显示表行
    //   rowElement.style.display = 'table-row';
    // } else {
    //   // 表行不存在
    //   console.log('表行不存在');
    // }
  }
  /**
   * 设置Label值
   **/
  public SetLabelValue(strLabel: string, value: string) {
    const objDiv = this.divEdit;
    CheckControlExistInDivObj(this.divEdit, 'label', strLabel);
    const strId = strLabel;

    SetLabelHtmlByIdInDivObj(objDiv, strId, value);
  }
}

//function vPrjTab_SimEx_BindDdl_TabId4TabFeatureDdlInDivCache(divName4Edit: string, arg1: string, strPrjId: string, strCmPrjId: string) {
//    throw new Error("Function not implemented.");
//}
