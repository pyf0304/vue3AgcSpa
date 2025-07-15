//import { enumCtlType } from '@/ts/L0Entity/PrjInterface/clsCtlTypeEN';

import $ from 'jquery';
import { enumCtlType } from '@/ts/L0Entity/PrjInterface/clsCtlTypeEN';
import { enumDDLItemsOption } from '@/ts/L0Entity/PrjInterface/clsDDLItemsOptionEN';
import { enumPageDispMode } from '@/ts/L0Entity/PrjMenu/clsPageDispModeEN';
import { enumFieldType } from '@/ts/L0Entity/Table_Field/clsFieldTypeEN';
import { clsTabFeatureFldsEN } from '@/ts/L0Entity/Table_Field/clsTabFeatureFldsEN';
import { TabFeatureFlds_CheckProperty4Update } from '@/ts/L3ForWApi/Table_Field/clsTabFeatureFldsWApi';
import {
  TabFeatureFldsEx_EditRecordEx,
  TabFeatureFldsEx_GetObjLstByTabFeatureId,
} from '@/ts/L3ForWApiEx/Table_Field/clsTabFeatureFldsExWApi';
import { vFieldTab_SimEx_BindDdl_FldIdInDivExCache } from '@/ts/L3ForWApiEx/Table_Field/clsvFieldTab_SimExWApi';
import {
  CheckControlExistInDivObj,
  GetSelectObjInDivObj,
  GetSelectValueInDivObj,
  HideTrInDivObj,
  SetSelectValueByIdInDivObj,
  ShowTrInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
//import { TabFeatureFlds_Edit } from '@/viewsBase/Table_Field/TabFeatureFlds_Edit';

import { vPrjTab_SimEx_BindDdl_TabIdByCmPrjIdInDivCache } from '@/ts/L3ForWApiEx/Table_Field/clsvPrjTab_SimExWApi';
import { vTabFeatureFlds_Sim_ReFreshThisCache } from '@/ts/L3ForWApi/Table_Field/clsvTabFeatureFlds_SimWApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { divVarSet, refAdjustOrderNum_Edt } from '@/views/Table_Field/TabFeatureEditVueShare';
import { clsTabFeatureEN } from '@/ts/L0Entity/Table_Field/clsTabFeatureEN';
import { enumPrjFeature } from '@/ts/L0Entity/PrjFunction/clsPrjFeatureEN';
import {
  TabFeature_AddNewRecordWithMaxIdAsync,
  TabFeature_CheckPropertyNew,
  TabFeature_GetMaxStrIdByPrefix,
  TabFeature_GetMaxStrIdByPrefixAsync,
  TabFeature_GetUniCondStr,
  TabFeature_GetUniCondStr4Update,
  TabFeature_IsExistRecordAsync,
} from '@/ts/L3ForWApi/Table_Field/clsTabFeatureWApi';
import { vTabFeature_Sim_ReFreshThisCache } from '@/ts/L3ForWApi/Table_Field/clsvTabFeature_SimWApi';
import { TabFeature_Edit } from '@/viewsBase/Table_Field/TabFeature_Edit';

/* AdjustOrderNum_EdtEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:GeneCode)
*/
export class AdjustOrderNum_EdtEx extends TabFeature_Edit {
  public static strTabId4AdjustOrderNum = '';
  public static PrjIdCache = '9991';
  public static TabFeatureIdCache = '';
  public keyId_TabFeatureId = '';
  /*
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:Gen_WApi_TS_btnEdit_Click)
    */
  public static btnEdit_Click(strCommandName: string, strKeyId: string) {
    console.log(strKeyId);
    const objPage: AdjustOrderNum_EdtEx = <AdjustOrderNum_EdtEx>(
      TabFeature_Edit.GetPageEditObj('AdjustOrderNum_EdtEx')
    );
    if (objPage == null) {
      const strMsg = `当前编辑页面没有按合适的关键字初始化过，请检查！`;
      alert(strMsg);
      console.error(strMsg);
      return;
    }
    const strMsg = '';
    switch (strCommandName) {
      case 'Submit': //提交
        objPage.btnSubmit_Click();
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'AdjustOrderNum_EdtEx.btn_Click');
        alert(strMsg);
        break;
    }
  }

  /**
   * 在当前界面中，导入编辑区域
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_AddDPV_Edit)
   * @returns
   */
  // public async AddDPV_Edit(divName4Edit: string) {
  //   CheckDivExist(divName4Edit);
  //   const strUrl = './AdjustOrderNum_Edt';
  //   console.log(`divName4Edit:(In AddDPV_Edit)${divName4Edit}`);
  //   return new Promise(function (resolve, reject) {
  //     $.ajax({
  //       url: strUrl,
  //       method: 'GET',
  //       dataType: 'html',
  //       data: {},
  //       success(data: any) {
  //         console.log(`已经成功获取页面:${strUrl}  字节数: ${data.length.toString()}`);
  //         $(`#${divName4Edit}`).html(data);
  //         resolve(true);
  //         //setTimeout(() => { clsEditObj.BindTab(); }, 100);
  //         //clsEditObj.BindTab();
  //       },
  //       error: (e: any) => {
  //         console.error(e);
  //         reject(e);
  //       },
  //     });
  //   });
  // }

  /* 修改记录
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnUpdateRecord_Click)
*/
  public async btnUpdateRecord_Click(strKeyId: string) {
    if (strKeyId == '') {
      alert('请选择需要修改的记录！');
      return;
    }
    await refAdjustOrderNum_Edt.value.showDialog();
    divVarSet.refDivEdit = refAdjustOrderNum_Edt.value.$refs.refDivEditDialog_AdjustOrderNum;

    AdjustOrderNum_EdtEx.TabFeatureIdCache = strKeyId.toString();
    if (this.bolIsLoadEditRegion == false) {
      //
      console.log('bolIsLoadEditRegion = ', this.bolIsLoadEditRegion);
      // await this.AddDPV_Edit(divVarSet.refDivEdit);
      this.opType = 'Update';
      // 为编辑区绑定下拉框
      // try {
      //   await this.BindDdl4EditRegionInDiv();
      // } catch (e: any) {
      //   console.error(e);
      //   alert(e);
      //   return;
      // }
      // this.ShowDialog_AdjustOrderNum('Update');
      this.btnSubmit_AdjustOrderNum = '确认修改';
      this.bolIsLoadEditRegion = true; //
      //const lngKeyId = Number(strKeyId);
      this.UpdateRecordV2(strKeyId.toString());
    } else {
      this.btnSubmit_AdjustOrderNum = '确认修改';
      // this.ShowDialog_AdjustOrderNum('Update');
      //const lngKeyId = Number(strKeyId);
      await this.UpdateRecordV2(strKeyId.toString());
      //const objQryRegionFlds_Edit_Sim = new QryRegionFlds_Edit_Sim();
      //objQryRegionFlds_Edit_Sim.ddlCtlTypeId_SelectedIndexChanged();
      //objQryRegionFlds_Edit_Sim.ddlDdlItemsOptionId_SelectedIndexChanged();
      //objQryRegionFlds_Edit_Sim.ddlDsTabId_SelectedIndexChanged();
    }
  }

  /** 根据关键字获取相应的记录的对象
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecord)
   * @param sender">参数列表</param>
   */
  public async UpdateRecordV2(strTabFeatureId: string): Promise<boolean> {
    this.btnSubmit_AdjustOrderNum = '确认修改';
    this.btnCancel_AdjustOrderNum = '取消修改';
    this.keyId_TabFeatureId = strTabFeatureId;
    try {
      const arrTabFeatureFlds = await TabFeatureFldsEx_GetObjLstByTabFeatureId(strTabFeatureId);
      for (const objTabFeatureFldsEN of arrTabFeatureFlds) {
        if (objTabFeatureFldsEN.fldId == '') continue;
        switch (objTabFeatureFldsEN.fieldTypeId) {
          case enumFieldType.OrderNumField_09:
            this.OrderNumFieldId = objTabFeatureFldsEN.fldId;
            break;
          case enumFieldType.ClassificationField_10:
            this.ClassificationFieldId = objTabFeatureFldsEN.fldId;
            break;
        }
      }

      return true;
    } catch (e: any) {
      const strMsg = `根据关键字获取相应的记录的对象不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
      return false;
    }
  }

  /** 函数功能:事件函数,当单击<确定修改>时发生的事件函数,
   * 具体功能为把界面内容同步数据库中,把界面内容保存到数据库中
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_btnOKUpd_Click)
   */
  public async btnSubmit_Click() {
    const strCommandText = this.btnSubmit_AdjustOrderNum;
    let returnBool;
    let strMsg;
    let strInfo;
    try {
      switch (strCommandText) {
        case '添加':
          await this.AddNewRecord();
          break;
        case '确认添加':
          //这是一个单表的插入的代码,由于逻辑层太简单,
          //就把逻辑层合并到控制层,
          if (this.opType == 'AddWithMaxId') {
            //const responseText3 = await this.AddNewRecordWithMaxIdSave().then((jsonData)=>{
            //const returnKeyId=  <string>jsonData;
            //if (IsNullOrEmpty(returnKeyId) == false)
            //{
            //HideDialog_TabFeatureFlds();
            //this.iShowList.BindGvCache(clsTabFeatureFldsEN._CurrTabName, "");
            //}
            //});
          } else {
            returnBool = await this.AddNewRecordSave();
            if (returnBool == true) {
              if (TabFeature_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                // this.HideDialog_TabFeatureFlds();
                if (TabFeature_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                  refAdjustOrderNum_Edt.value.hideDialog();
                }
              }
              if (this.iShowList) this.iShowList.BindGvCache(clsTabFeatureFldsEN._CurrTabName, '');
            }
          }
          break;
        case '确认修改':
          //这是一个单表的修改的代码,由于逻辑层太简单,
          returnBool = await this.UpdateRecordSaveV2();
          strInfo = returnBool ? '修改成功！' : '修改不成功！';
          strInfo += '(In TabFeatureFlds_Edit.btnSubmit_Click)';
          $('#lblResult51').val(strInfo);
          //显示信息框
          console.log(strInfo);
          alert(strInfo);
          if (returnBool == true) {
            if (TabFeature_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
              refAdjustOrderNum_Edt.value.hideDialog();
            }
            if (this.iShowList) this.iShowList.BindGvCache('AdjustOrderNum_Edt', '');
          }

          break;
        default:
          strMsg = `strCommandText:${strCommandText}在switch中没有处理！(In btnSubmit_Click())`;
          console.error(strMsg);
          alert(strMsg);
          break;
      }
    } catch (e: any) {
      const strMsg = `(errid: WiTsCs0033)在保存记录时(${strCommandText})时出错!请联系管理员!${e}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }
  /** 函数功能:把界面上的属性数据传到类对象中
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
   * @param pobjTabFeatureFldsEN.js">数据传输的目的类对象</param>
   */
  public async PutDataToTabFeatureFldsClassV2(
    pobjTabFeatureFldsEN: clsTabFeatureFldsEN,
    strFldId: string,
    strFieldTypeId: string,
  ) {
    pobjTabFeatureFldsEN.SetTabFeatureId(AdjustOrderNum_EdtEx.TabFeatureIdCache); // 表功能Id
    pobjTabFeatureFldsEN.SetFldId(strFldId); // 字段Id
    pobjTabFeatureFldsEN.SetFieldTypeId(strFieldTypeId); // 字段类型Id
    pobjTabFeatureFldsEN.SetFuncName(''); // 函数名
    pobjTabFeatureFldsEN.SetValueGivingModeId(''); // 给值方式Id
    pobjTabFeatureFldsEN.SetDefaultValue(''); // 缺省值
    pobjTabFeatureFldsEN.SetPrjId(clsPrivateSessionStorage.currSelPrjId); // 缺省值

    pobjTabFeatureFldsEN.SetOrderNum(1); // 序号
    pobjTabFeatureFldsEN.SetInUse(true); // 是否在用
    pobjTabFeatureFldsEN.SetUpdUser(clsPubLocalStorage.userId); // 修改者
    pobjTabFeatureFldsEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期
    pobjTabFeatureFldsEN.SetMemo(''); // 说明
  }
  /** 修改记录
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecordSave)
   */
  public async UpdateRecordSaveV2(): Promise<boolean> {
    //从界面获取4个字段的值

    const strOrderNumFieldId = this.OrderNumFieldId;
    const strClassificationFieldId = this.ClassificationFieldId;

    if (IsNullOrEmpty(strClassificationFieldId) == true) {
      console.error('分类字段为空!');
      this.CtrlSelectFocus('ddlClassificationFieldId');

      // throw '分类字段不能为空!';
    }
    if (IsNullOrEmpty(strOrderNumFieldId) == true) {
      console.error('文本字段不能为空!');
      this.CtrlSelectFocus('ddlOrderNumFieldId');
      throw '文本字段不能为空!';
    }
    //this.DivName = "divUpdateRecordSave";
    //const arrTabFeatureFlds: Array<[fldId: string, fieldTypeId: string]> = [];
    const arrTabFeatureFlds: Array<any> = [];
    {
      const objTabFeatureFlds_Value = {
        fldId: strClassificationFieldId,
        fieldTypeId: enumFieldType.ClassificationField_10,
      };
      arrTabFeatureFlds.push(objTabFeatureFlds_Value);
    }
    {
      const objTabFeatureFlds_Text = {
        fldId: strOrderNumFieldId,
        fieldTypeId: enumFieldType.OrderNumField_09,
      };
      arrTabFeatureFlds.push(objTabFeatureFlds_Text);
    }

    //objTabFeatureFldsEN.SetmId( Number(this.keyId));
    for (const x of arrTabFeatureFlds) {
      const objTabFeatureFldsEN = new clsTabFeatureFldsEN();
      await this.PutDataToTabFeatureFldsClassV2(objTabFeatureFldsEN, x.fldId, x.fieldTypeId);
      objTabFeatureFldsEN.sfUpdFldSetStr = objTabFeatureFldsEN.updFldString; //设置哪些字段被修改(脏字段)
      //if (objTabFeatureFldsEN.mId == 0 || objTabFeatureFldsEN.mId == undefined) {
      //    console.error("关键字不能为空!");
      //    throw "关键字不能为空!";
      //}
      try {
        TabFeatureFlds_CheckProperty4Update(objTabFeatureFldsEN);
      } catch (e: any) {
        const strMsg = `检查数据不成功,${e}.`;
        console.error(strMsg);
        alert(strMsg);
        return false; //一定要有一个返回值，否则会出错！
      }
      try {
        const returnBool = await TabFeatureFldsEx_EditRecordEx(objTabFeatureFldsEN);

        if (returnBool == true) {
          vTabFeatureFlds_Sim_ReFreshThisCache(objTabFeatureFldsEN.prjId);
        }
        //return returnBool;
      } catch (e: any) {
        const strMsg = `修改记录不成功,${e}.`;
        console.error(strMsg);
        alert(strMsg);
        return false;
      }
    }
    return true;
  }
  /** 函数功能:把类对象的属性内容显示到界面上
   * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
   * 如果在设置数据库时,就应该一级字段在前,二级字段在后
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_GetDataFromClass)
   * @param pobjTabFeatureFldsEN.js">表实体类对象</param>
   */
  // public async GetDataFromTabFeatureFldsClass(pobjTabFeatureFldsEN: clsTabFeatureFldsEN) {
  //   this.tabFeatureId = pobjTabFeatureFldsEN.tabFeatureId; // 表功能Id
  //   this.fldId = pobjTabFeatureFldsEN.fldId; // 字段Id
  //   this.fieldTypeId = pobjTabFeatureFldsEN.fieldTypeId; // 字段类型Id
  //   this.funcName = pobjTabFeatureFldsEN.funcName; // 函数名
  //   this.valueGivingModeId = pobjTabFeatureFldsEN.valueGivingModeId; // 给值方式Id
  //   this.defaultValue = pobjTabFeatureFldsEN.defaultValue; // 缺省值
  //   this.orderNum = pobjTabFeatureFldsEN.orderNum; // 序号
  //   this.inUse = pobjTabFeatureFldsEN.inUse; // 是否在用
  //   this.memo = pobjTabFeatureFldsEN.memo; // 说明
  // }

  /* 函数功能:系统生成的Change事件函数
     (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript+<>c__DisplayClass13_0:<Gen_WApi_Ts_GeneEventFuncEx>b__1)
   */
  public async ddlTabId_SelectedIndexChanged() {
    alert('请在扩展层:AdjustOrderNum_EdtEx中重写该函数！');
  }

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

  /* 函数功能:系统生成的Change事件函数
    (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript+<>c__DisplayClass13_0:<Gen_WApi_Ts_GeneEventFuncEx>b__1)
    */
  public ddlCtlTypeId_SelectedIndexChanged() {
    //console.log("ddlCtlTypeId_SelectedIndexChanged--this.ctlTypeId:", this.ctlTypeId);
    HideTrInDivObj(divVarSet.refDivEdit, 'trDdlItemsOptionId');
    HideTrInDivObj(divVarSet.refDivEdit, 'trDsTabId');
    HideTrInDivObj(divVarSet.refDivEdit, 'trDsCondStr');
    HideTrInDivObj(divVarSet.refDivEdit, 'trDsSqlStr');
    HideTrInDivObj(divVarSet.refDivEdit, 'trItemsString');
    HideTrInDivObj(divVarSet.refDivEdit, 'trOrderNumFieldId');
    HideTrInDivObj(divVarSet.refDivEdit, 'trClassificationFieldId');
    HideTrInDivObj(divVarSet.refDivEdit, 'tr');
    HideTrInDivObj(divVarSet.refDivEdit, 'trId');
    HideTrInDivObj(divVarSet.refDivEdit, 'trVarId0');
    HideTrInDivObj(divVarSet.refDivEdit, 'trIsMultiRow');
    const strCtlTypeId = GetSelectValueInDivObj(divVarSet.refDivEdit, 'ddlCtlTypeId');
    switch (strCtlTypeId) {
      case enumCtlType.ViewVariable_38:
        ShowTrInDivObj(divVarSet.refDivEdit, 'trVarId0');
        break;
      // case enumCtlType.sessionStorage_40:
      //   ShowTrInDivObj(divVarSet.refDivEdit, 'trVarId0');
      //   break;
      case enumCtlType.DropDownList_06:
        ShowTrInDivObj(divVarSet.refDivEdit, 'trDdlItemsOptionId');
        break;
      case enumCtlType.DropDownList_Bool_18:
        ShowTrInDivObj(divVarSet.refDivEdit, 'trDdlItemsOptionId');
        $('#ddlDdlItemsOptionId').val(enumDDLItemsOption.TrueAndFalseList_04);
        break;
      case enumCtlType.TextBox_16:
        ShowTrInDivObj(divVarSet.refDivEdit, 'trIsMultiRow');

        break;
      case enumCtlType.TextArea_41:
        ShowTrInDivObj(divVarSet.refDivEdit, 'trIsMultiRow');

        break;
      case enumCtlType.GivenValue_35:
        HideTrInDivObj(divVarSet.refDivEdit, 'trDdlItemsOptionId');
        break;
      default:
        break;
    }
  }

  /// <summary>
  /// 设置绑定下拉框，针对字段:[fldId]
  /// (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl_TSInDiv)
  /// </summary>
  public async SetDdl_FldIdInDivEx(strTabId: string, strPrjId: string) {
    //定义条件字段
    //const strPrjId = "";//定义条件字段
    await vFieldTab_SimEx_BindDdl_FldIdInDivExCache(
      divVarSet.refDivEdit,
      'ddlFldId',
      strTabId,
      strPrjId,
    ); //编辑区域
  }

  /**
   * 设置取消按钮的标题(Used In AddNewRecord())
   */
  public set btnCancel_AdjustOrderNum(value: string) {
    refAdjustOrderNum_Edt.value.strCancelButtonText = value;
  }
  /**
   * 获取按钮的标题
   */
  public get btnSubmit_AdjustOrderNum(): string {
    const strValue = refAdjustOrderNum_Edt.value.strSubmitButtonText;
    // ,
    return strValue;
  }
  /**
   * 设置确定按钮的标题(Used In AddNewRecord())
   */
  public set btnSubmit_AdjustOrderNum(value: string) {
    refAdjustOrderNum_Edt.value.strSubmitButtonText = value;
  }

  /**
   * 字段Id (Used In Clear())
   */
  public set OrderNumFieldId(value: string) {
    const objDiv = divVarSet.refDivEdit;
    CheckControlExistInDivObj(divVarSet.refDivEdit, 'select', 'ddlOrderNumFieldId');
    const strId = 'ddlOrderNumFieldId';
    SetSelectValueByIdInDivObj(objDiv, strId, value);
  }
  /**
   * 字段Id (Used In PutDataToClass())
   */
  public get OrderNumFieldId(): string {
    const strValue = GetSelectValueInDivObj(divVarSet.refDivEdit, 'ddlOrderNumFieldId');
    if (strValue == undefined) return '';
    else if (strValue == '0') return '';
    else return strValue;
  }

  /**
   * 字段Id (Used In Clear())
   */
  public set ClassificationFieldId(value: string) {
    const objDiv = divVarSet.refDivEdit;
    CheckControlExistInDivObj(divVarSet.refDivEdit, 'select', 'ddlClassificationFieldId');
    const strId = 'ddlClassificationFieldId';
    SetSelectValueByIdInDivObj(objDiv, strId, value);
  }
  /**
   * 字段Id (Used In PutDataToClass())
   */
  public get ClassificationFieldId(): string {
    const strValue = GetSelectValueInDivObj(divVarSet.refDivEdit, 'ddlClassificationFieldId');
    if (strValue == undefined) return '';
    else if (strValue == '0') return '';
    else return strValue;
  }

  /**
   * 下拉框控件设置聚焦
   */
  public CtrlSelectFocus(strCtrlId: string) {
    const objDiv = divVarSet.refDivEdit;
    CheckControlExistInDivObj(divVarSet.refDivEdit, 'select', strCtrlId);
    const strId = strCtrlId;
    const objSelect = GetSelectObjInDivObj(objDiv, strId);
    objSelect.focus();
  }
  /** 添加新记录
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_btnAddNewRecordWithMaxId_Click)
   **/
  public async btnAddNewRecord_OrderFunc_Click() {
    const strThisFuncName = this.btnAddNewRecord_OrderFunc_Click.name;
    try {
      this.opType = 'Add';
      const bolIsSuccess = await this.ShowDialog_OrderFunc(this.opType);
      if (bolIsSuccess == false) return;
      // await this.BindDdl4EditRegionInDiv();

      this.AddNewRecordWithMaxId();
    } catch (e) {
      const strMsg = Format(
        '添加新记录初始化不成功,{0}.(in {1}.{2})',
        e,
        this.className,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }
  /**
   * 显示对话框
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_TS_ShowDialog)
   **/
  public async ShowDialog_OrderFunc(strOp: string): Promise<boolean> {
    const strThisFuncName = this.ShowDialog_OrderFunc.name;
    if (TabFeature_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      if (refAdjustOrderNum_Edt.value == null) {
        const strMsg = Format(
          '当前编辑区的EditObj为空，请检查！(in {0}.{1})',
          this.className,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }
      await refAdjustOrderNum_Edt.value.showDialog();
    }
    divVarSet.refDivEdit = refAdjustOrderNum_Edt.value.$refs.refDivEdit;
    if (divVarSet.refDivEdit == null) {
      if (TabFeature_Edit.times4TestShowDialog < 2) {
        TabFeature_Edit.times4TestShowDialog++;
        setTimeout(() => {
          this.ShowDialog_OrderFunc(strOp);
        }, 100);
      } else {
        const strMsg = Format(
          '当前编辑区的层(div)对象为空，请检查！(in {0}.{1})',
          this.className,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }
      return false;
    } else {
      TabFeature_Edit.times4TestShowDialog = 0;
    }
    if (strOp === 'Add' || strOp === 'AddWithMaxId') {
      this.btnSubmitTabFeature = '确认添加';
      this.btnCancelTabFeature = '取消添加';
    } else if (strOp === 'Update') {
      this.btnSubmitTabFeature = '确认修改';
      this.btnCancelTabFeature = '取消修改';
    }
    return true;
  }

  /**
   * 获取按钮的标题
   **/
  public get btnSubmitTabFeature(): string {
    const strValue = refAdjustOrderNum_Edt.value.strSubmitButtonText;
    return strValue;
  }
  /**
   * 设置确定按钮的标题(Used In AddNewRecord())
   **/
  public set btnSubmitTabFeature(value: string) {
    refAdjustOrderNum_Edt.value.strSubmitButtonText = value;
  }

  /**
   * 设置取消按钮的标题(Used In AddNewRecord())
   **/
  public set btnCancelTabFeature(value: string) {
    refAdjustOrderNum_Edt.value.strCancelButtonText = value;
  }
  public Clear() {
    // ClearSelectValueByIdInDivObj(divVarSet.refDivEdit, 'ddlTabFeatureId');
    // ClearSelectValueByIdInDivObj(divVarSet.refDivEdit, 'ddlFldId');
    // ClearSelectValueByIdInDivObj(divVarSet.refDivEdit, 'ddlFieldTypeId');
    // this.funcName = '';
    // ClearSelectValueByIdInDivObj(divVarSet.refDivEdit, 'ddlValueGivingModeId');
    // this.defaultValue = '';
    // this.orderNum = 0;
    // this.inUse = false;
    // this.memo = '';
  }
  /** 函数功能:把界面上的属性数据传到类对象中
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
   * @param pobjTabFeatureEN.js">数据传输的目的类对象</param>
   **/
  public async PutDataToTabFeatureClass(pobjTabFeatureEN: clsTabFeatureEN) {
    // const strThisFuncName = this.PutDataToTabFeatureClass.name;
    pobjTabFeatureEN.SetTabFeatureId(this.keyId_TabFeatureId); // 表功能Id
    pobjTabFeatureEN.SetTabFeatureName('调整记录次序'); // 表功能名
    pobjTabFeatureEN.SetFeatureId(enumPrjFeature.Tab_AdjustOrderNum_0167); // 功能

    // pobjTabFeatureEN.SetFuncNameCs(this.funcNameCs); // Cs函数名
    // pobjTabFeatureEN.SetFuncNameJs(this.funcNameJs); // Js函数名
    pobjTabFeatureEN.SetOrderNum(1); // 序号
    pobjTabFeatureEN.SetPrjId(clsPrivateSessionStorage.currSelPrjId); // 工程ID
    pobjTabFeatureEN.SetTabId(AdjustOrderNum_EdtEx.strTabId4AdjustOrderNum); // 表ID
    // pobjTabFeatureEN.SetIsExtendedClass(this.isExtendedClass); // 是否在扩展类
    // pobjTabFeatureEN.SetIsForCSharp(this.isForCSharp); // 是否ForCSharp
    // pobjTabFeatureEN.SetIsForTypeScript(this.isForTypeScript); // 是否可针对TypeScript
    // pobjTabFeatureEN.SetIsForDiv(this.isForDiv); // 是否针对Div内控件
    // pobjTabFeatureEN.SetIsNeedGC(this.isNeedGC); // 是否需要生成代码
    pobjTabFeatureEN.SetInUse(true); // 是否在用
    pobjTabFeatureEN.SetMemo(''); // 说明
    pobjTabFeatureEN.SetUpdUser(clsPubLocalStorage.userId); // 修改者
    pobjTabFeatureEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期
  }
  /** 添加新记录，由后台自动获取最大值的关键字。保存函数
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordWithMaxIdSave)
   **/
  public async AddNewRecord_TabFeatureSave(): Promise<string> {
    const strThisFuncName = this.AddNewRecord_TabFeatureSave.name;
    const objTabFeatureEN = new clsTabFeatureEN();
    this.keyId_TabFeatureId = await TabFeature_GetMaxStrIdByPrefix(
      clsPrivateSessionStorage.currSelPrjId,
    );
    try {
      await this.PutDataToTabFeatureClass(objTabFeatureEN);
    } catch (e) {
      const strMsg = Format(
        '从界面获取数据不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      throw strMsg; //一定要有一个返回值，否则会出错！
    }
    try {
      TabFeature_CheckPropertyNew(objTabFeatureEN);
    } catch (e) {
      const strMsg = Format(
        '检查数据不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      throw strMsg; //一定要有一个返回值，否则会出错！
    }
    try {
      //检查唯一性条件
      const bolIsExistCond = await this.CheckUniCond4Add_TabFeature(objTabFeatureEN);
      if (bolIsExistCond == false) {
        return '';
      }
      const bolIsExistCondV2 = await this.CheckUniCond4AddV2_TabFeature(objTabFeatureEN);
      if (bolIsExistCondV2 == false) {
        return '';
      }
      const responseKeyId = await TabFeature_AddNewRecordWithMaxIdAsync(objTabFeatureEN);
      const returnKeyId: string = responseKeyId;
      if (IsNullOrEmpty(returnKeyId) == false) {
        vTabFeature_Sim_ReFreshThisCache(clsPrivateSessionStorage.cmPrjId);
        vTabFeatureFlds_Sim_ReFreshThisCache(clsPrivateSessionStorage.currSelPrjId);

        const strInfo = Format('添加记录成功!');

        //显示信息框
        alert(strInfo);
      } else {
        const strInfo = Format('添加记录不成功!');

        //显示信息框
        alert(strInfo);
      }
      return responseKeyId; //一定要有一个返回值，否则会出错！
    } catch (e) {
      const strMsg = Format(
        '添加记录不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      throw strMsg;
    }
    return ''; //一定要有一个返回值，否则会出错！
  }
  /** 添加新记录,保存函数
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordSave)
   **/
  public async AddNewRecordSave(): Promise<boolean> {
    const strThisFuncName = this.AddNewRecordSave.name;

    const strTabFeatureId = await this.AddNewRecord_TabFeatureSave();
    AdjustOrderNum_EdtEx.TabFeatureIdCache = strTabFeatureId;

    const strOrderNumFieldId = this.OrderNumFieldId;
    const strClassificationFieldId = this.ClassificationFieldId;

    if (IsNullOrEmpty(strClassificationFieldId) == true) {
      console.error('分类字段为空!');
      this.CtrlSelectFocus('ddlClassificationFieldId');

      // throw '分类字段不能为空!';
    }
    if (IsNullOrEmpty(strOrderNumFieldId) == true) {
      console.error('排序字段不能为空!');
      this.CtrlSelectFocus('ddlOrderNumFieldId');
      throw '文本字段不能为空!';
    }
    const arrTabFeatureFlds: Array<any> = [];
    {
      const objTabFeatureFlds_Value = {
        fldId: strClassificationFieldId,
        fieldTypeId: enumFieldType.ClassificationField_10,
      };
      arrTabFeatureFlds.push(objTabFeatureFlds_Value);
    }
    {
      const objTabFeatureFlds_Text = {
        fldId: strOrderNumFieldId,
        fieldTypeId: enumFieldType.OrderNumField_09,
      };
      arrTabFeatureFlds.push(objTabFeatureFlds_Text);
    }

    //objTabFeatureFldsEN.SetmId( Number(this.keyId));
    for (const x of arrTabFeatureFlds) {
      const objTabFeatureFldsEN = new clsTabFeatureFldsEN();
      await this.PutDataToTabFeatureFldsClassV2(objTabFeatureFldsEN, x.fldId, x.fieldTypeId);
      objTabFeatureFldsEN.sfUpdFldSetStr = objTabFeatureFldsEN.updFldString; //设置哪些字段被修改(脏字段)
      //if (objTabFeatureFldsEN.mId == 0 || objTabFeatureFldsEN.mId == undefined) {
      //    console.error("关键字不能为空!");
      //    throw "关键字不能为空!";
      //}
      try {
        TabFeatureFlds_CheckProperty4Update(objTabFeatureFldsEN);
      } catch (e: any) {
        const strMsg = `检查数据不成功,${e}. in(${strThisFuncName})`;
        console.error(strMsg);
        alert(strMsg);
        return false; //一定要有一个返回值，否则会出错！
      }
      try {
        const returnBool = await TabFeatureFldsEx_EditRecordEx(objTabFeatureFldsEN);

        if (returnBool == true) {
          vTabFeatureFlds_Sim_ReFreshThisCache(objTabFeatureFldsEN.prjId);
        }
        //return returnBool;
      } catch (e: any) {
        const strMsg = `修改记录不成功,${e}.`;
        console.error(strMsg);
        alert(strMsg);
        return false;
      }
    }
    return true;
  }
  /** 为添加记录检查唯一性条件
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_CheckUniCondition4Add)
   **/
  public async CheckUniCond4Add_TabFeature(objTabFeatureEN: clsTabFeatureEN): Promise<boolean> {
    // const strThisFuncName = this.CheckUniCond4Add.name;
    const strUniquenessCondition = TabFeature_GetUniCondStr(objTabFeatureEN);
    const bolIsExistCondition = await TabFeature_IsExistRecordAsync(strUniquenessCondition);
    if (bolIsExistCondition == true) {
      const strMsg = Format(
        '不能满足唯一性条件。功能名:{0}在其他记录中已经存在！',
        objTabFeatureEN.tabFeatureName,
      );
      console.error(strMsg);
      alert(strMsg);
      return false;
    }
    return true;
  }
  /** 为添加记录检查唯一性条件
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_CheckUniCondition4Add)
   **/
  public async CheckUniCond4AddV2_TabFeature(objTabFeatureEN: clsTabFeatureEN): Promise<boolean> {
    // const strThisFuncName = this.CheckUniCond4Add.name;
    if (IsNullOrEmpty(objTabFeatureEN.funcNameJs) == true) return true;
    const strUniquenessCondition = TabFeature_GetUniCondStr4Update(objTabFeatureEN);
    const bolIsExistCondition = await TabFeature_IsExistRecordAsync(strUniquenessCondition);
    if (bolIsExistCondition == true) {
      const strMsg = Format(
        '不能满足唯一性条件。在当前表中已经存在相同的函数名_Js:[{0}]!',
        objTabFeatureEN.funcNameJs,
      );
      console.error(strMsg);
      alert(strMsg);
      return false;
    }
    return true;
  }
  /** 为插入记录做准备工作
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_AddNewRecordWithMaxId)
   **/
  public async AddNewRecordWithMaxId() {
    const strThisFuncName = this.AddNewRecordWithMaxId.name;
    this.SetKeyReadOnly(false);
    this.Clear();

    //this.tabFeatureId = await TabFeature_GetMaxStrIdAsync();
    try {
      const returnString = await TabFeature_GetMaxStrIdByPrefixAsync(
        clsPrivateSessionStorage.currSelPrjId,
      );
      if (returnString == '') {
        const strInfo = Format('获取表TabFeature的最大关键字为空,不成功,请检查!');
        //显示信息框
        alert(strInfo);
      } else {
        this.keyId = returnString;
      }
    } catch (e) {
      const strMsg = Format(
        '获取表关键字的最大值不成功,{0}.(in {1}.{2})',
        e,
        this.className,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }
}
