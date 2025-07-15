import { Ref } from 'vue';
import { enumCtlType } from '@/ts/L0Entity/PrjInterface/clsCtlTypeEN';
import { enumDDLItemsOption } from '@/ts/L0Entity/PrjInterface/clsDDLItemsOptionEN';
import { enumPageDispMode } from '@/ts/L0Entity/PrjMenu/clsPageDispModeEN';
import { enumFieldType } from '@/ts/L0Entity/Table_Field/clsFieldTypeEN';
import { clsTabFeatureFldsEN } from '@/ts/L0Entity/Table_Field/clsTabFeatureFldsEN';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';

import { TabFeature_Edit } from '@/viewsBase/Table_Field/TabFeature_Edit';
import { enumPrjFeature } from '@/ts/L0Entity/PrjFunction/clsPrjFeatureEN';
import {
  TabFeatureFlds_CheckProperty4Update,
  TabFeatureFlds_DelTabFeatureFldssByCondAsync,
  TabFeatureFlds_GetUniCondStr4Update,
  TabFeatureFlds_GetUniCondStr,
} from '@/ts/L3ForWApi/Table_Field/clsTabFeatureFldsWApi';
import { TabFeatureEx_GetObjLstByTabIdCache } from '@/ts/L3ForWApiEx/Table_Field/clsTabFeatureExWApi';
import {
  TabFeatureFldsEx_EditRecordEx,
  TabFeatureFldsEx_GetObjLstByTabFeatureId,
  TabFeatureFldsEx_SortFun_OrderNum,
} from '@/ts/L3ForWApiEx/Table_Field/clsTabFeatureFldsExWApi';
import {
  vFieldTab_SimEx_BindDdl_FldIdInDivExCache,
  vFieldTab_SimEx_BindDdl_FldIdInDivCache,
} from '@/ts/L3ForWApiEx/Table_Field/clsvFieldTab_SimExWApi';
import {
  CheckControlExistInDivObj,
  GetButtonHtmlInDivObj,
  GetSelectObjInDivObj,
  GetSelectValueInDivObj,
  HideTrInDivObj,
  SetSelectValueByIdInDivObj,
  ShowTrInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { IShowList } from '@/ts/PubFun/IShowList';
import { PrjTabEx_SetUpdDate } from '@/ts/L3ForWApiEx/Table_Field/clsPrjTabExWApi';
import { vPrjTab_Sim_ReFreshThisCache } from '@/ts/L3ForWApi/Table_Field/clsvPrjTab_SimWApi';
import { vTabFeatureFlds_Sim_ReFreshThisCache } from '@/ts/L3ForWApi/Table_Field/clsvTabFeatureFlds_SimWApi';
import { vTabFeature_Sim_ReFreshThisCache } from '@/ts/L3ForWApi/Table_Field/clsvTabFeature_SimWApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';

import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { refDivEdit, divVarSet, refTabFeature_Edit } from '@/views/Table_Field/TabFeatureVueShare';
import { refComboBox_Edt } from '@/views/Table_Field/TabFeatureEditVueShare';
import { TabFeature_GetObjByTabFeatureIdAsync } from '@/ts/L3ForWApi/Table_Field/clsTabFeatureWApi';
import { DsTabId_Static } from '@/views/Table_Field/ComboBoxVueShare';

/* ComboBox_EdtEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:GeneCode)
*/
export class ComboBox_EdtEx extends TabFeature_Edit {
  public static EditComboBoxRef: Ref<any>;
  public static divEditComboBox: HTMLDivElement;
  // public divEdit: HTMLDivElement;
  public static strTabId4ComboBox = '';
  public static PrjIdCache = '9991';
  public static TabFeatureIdCache = '';
  public static fldIdCond1Bak = '';
  public static fldIdCond2Bak = '';
  public static fldId_SortBak = '';
  public static objTabFeature_EditEx: ComboBox_EdtEx;
  constructor(strClassName: string, objShowList: IShowList) {
    super(strClassName, objShowList);
    // const divTemp = document.createElement('div');
    // divTemp.id = 'temp';
    // this.divEdit = divTemp;
    ComboBox_EdtEx.objTabFeature_EditEx = this; // new TabFeature_EditEx(strClassName, objShowList);
  }
  /*
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:Gen_WApi_TS_btnEdit_Click)
    */
  public static btnEdit_Click(strCommandName: string, strKeyId: string) {
    console.log(strKeyId);
    const objPage = TabFeature_Edit.GetPageEditObj('ComboBox_EdtEx');
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
        AccessBtnClickDefault(strCommandName, 'ComboBox_EdtEx.btn_Click');
        alert(strMsg);
        break;
    }
  }

  /* 修改记录
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnUpdateRecord_Click)
*/

  public async btnUpdateRecord_Click(strTabFeatureId: string) {
    const strThisFuncName = this.btnUpdateRecord_Click.name;
    if (strTabFeatureId == '') {
      alert('请选择需要修改的记录！');
      return;
    }
    // ComboBox_EdtEx.EditComboBoxRef = TabFeatureFlds_Edit.EditRef;
    await ComboBox_EdtEx.EditComboBoxRef.value.showDialog();
    ComboBox_EdtEx.divEditComboBox = refDivEdit.value;
    ComboBox_EdtEx.TabFeatureIdCache = strTabFeatureId.toString();
    DsTabId_Static.value = ComboBox_EdtEx.strTabId4ComboBox;
    this.opType = 'Update';
    // 为编辑区绑定下拉框
    try {
      await refComboBox_Edt.value.BindDdl4EditRegionInDiv();
    } catch (e: any) {
      console.error(e);
      alert(e);
      return;
    }
    // this.ShowDialogComboBox('Update');
    this.btnSubmitComboBox = '确认修改';
    refComboBox_Edt.value.Clear();
    //const lngKeyId = Number(strKeyId);
    ComboBox_EdtEx.divEditComboBox = divVarSet.refDivEdit;
    await this.UpdateRecordV2(strTabFeatureId.toString());
    // this.divEdit = ComboBox_EdtEx.divEditComboBox;
    // ComboBox_EdtEx.objTabFeature_EditEx.divEdit = this.divEdit;
    this.keyId = strTabFeatureId.toString();
    try {
      const objTabFeatureEN = await TabFeature_GetObjByTabFeatureIdAsync(this.keyId);
      if (objTabFeatureEN == null) {
        const strMsg = Format(
          '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
          this.className,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      await refComboBox_Edt.value.ShowDataFromTabFeatureObj(objTabFeatureEN);
    } catch (e: any) {
      const strMsg = Format(
        '根据关键字获取相应的记录的对象不成功,${e}.(in {0}.{1})',
        this.className,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }

    // refComboBox_Edt.value.ShowDataFromTabFeatureObj();
    // await ComboBox_EdtEx.objTabFeature_EditEx.UpdateRecord(strKeyId.toString());
    refComboBox_Edt.value.chkIsExtendedClass_CheckChanged();
    refComboBox_Edt.value.chkIsForCSharp_CheckChanged();
    refComboBox_Edt.value.chkIsForTypeScript_CheckChanged();
  }

  /**
   *  在用户自定义控件中，设置关键字的值，是否只读
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_SetKeyReadOnly)
   * @param bolReadonly:是否只读
   **/
  public SetKeyReadOnly(bolReadonly: boolean) {
    // const strThisFuncName = this.SetKeyReadOnly.name;
    $('#txtTabFeatureId').attr('ReadOnly', bolReadonly.toString());
  }
  /**
   * 设置取消按钮的标题(Used In AddNewRecord())
   **/
  public set btnCancel_TabFeature(value: string) {
    ComboBox_EdtEx.EditComboBoxRef.value.SetButtonText('btnCancelComboBox', value);
  }
  /**
   * 获取按钮的标题
   **/
  public get btnSubmit_TabFeature(): string {
    const strValue = GetButtonHtmlInDivObj(ComboBox_EdtEx.divEditComboBox, 'btnSubmitComboBox');
    return strValue;
  }
  /**
   * 设置确定按钮的标题(Used In AddNewRecord())
   **/
  public set btnSubmit_TabFeature(value: string) {
    ComboBox_EdtEx.EditComboBoxRef.value.SetButtonText('btnSubmitComboBox', value);
  }

  /** 为插入记录做准备工作
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordWithMaxId)
   **/
  public async AddNewRecordWithMaxId_TabFeature() {
    // const strThisFuncName = this.AddNewRecordWithMaxId.name;
    this.SetKeyReadOnly(false);
    this.btnSubmit_TabFeature = '确认添加';
    this.btnCancel_TabFeature = '取消添加';
    refTabFeature_Edit.value.Clear();
    HideTrInDivObj(ComboBox_EdtEx.divEditComboBox, 'trTabFeatureId');
    //设置初值
    refTabFeature_Edit.value.isExtendedClass = false;
    refTabFeature_Edit.value.isNeedGC = true;
    refTabFeature_Edit.value.isForCSharp = false;
    refTabFeature_Edit.value.isForTypeScript = false;
    refTabFeature_Edit.value.featureId = enumPrjFeature.Tab_BindDdl_0173;
    refComboBox_Edt.value.chkIsExtendedClass_CheckChanged();
    refComboBox_Edt.value.chkIsForCSharp_CheckChanged();
    refComboBox_Edt.value.chkIsForTypeScript_CheckChanged();
    const arrTabFeature = await TabFeatureEx_GetObjLstByTabIdCache(
      clsPrivateSessionStorage.cmPrjId,
      ComboBox_EdtEx.strTabId4ComboBox,
    );
    refTabFeature_Edit.value.orderNum = arrTabFeature.length + 1;
    // refTabFeature_Edit.value.tabFeatureId = TabFeature_GetMaxStrId_S();
  }
  /** 根据关键字获取相应的记录的对象
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecord)
   * @param sender">参数列表</param>
   */
  public async UpdateRecordV2(strTabFeatureId: string): Promise<boolean> {
    this.btnSubmitComboBox = '确认修改';
    this.btnCancelComboBox = '取消修改';
    this.keyId = strTabFeatureId;
    const strPrjId = clsPrivateSessionStorage.currSelPrjId;
    try {
      let arrTabFeatureFlds = await TabFeatureFldsEx_GetObjLstByTabFeatureId(strTabFeatureId);
      arrTabFeatureFlds = arrTabFeatureFlds.sort(TabFeatureFldsEx_SortFun_OrderNum);
      let intIndex = 1;
      for (const objTabFeatureFldsEN of arrTabFeatureFlds) {
        switch (objTabFeatureFldsEN.fieldTypeId) {
          case enumFieldType.ConditionField_16:
            if (intIndex == 1) {
              refComboBox_Edt.value.isCurrTab1 = objTabFeatureFldsEN.isCurrTab;
              if (refComboBox_Edt.value.isCurrTab1 == false) {
                // const strTabId = '';
                await vFieldTab_SimEx_BindDdl_FldIdInDivCache(
                  ComboBox_EdtEx.divEditComboBox,
                  'ddlFldIdCond1',
                  strPrjId,
                );
              }
              refComboBox_Edt.value.fldIdCond1 = objTabFeatureFldsEN.fldId;
              ComboBox_EdtEx.fldIdCond1Bak = objTabFeatureFldsEN.fldId;
              intIndex++;
            } else if (intIndex == 2) {
              refComboBox_Edt.value.isCurrTab2 = objTabFeatureFldsEN.isCurrTab;
              if (refComboBox_Edt.value.isCurrTab2 == false) {
                // const strTabId = '';
                await vFieldTab_SimEx_BindDdl_FldIdInDivCache(
                  ComboBox_EdtEx.divEditComboBox,
                  'ddlFldIdCond2',
                  strPrjId,
                );
              }
              refComboBox_Edt.value.fldIdCond2 = objTabFeatureFldsEN.fldId;
              ComboBox_EdtEx.fldIdCond2Bak = objTabFeatureFldsEN.fldId;
              intIndex++;
            }
            break;
          case enumFieldType.SortField_06:
            refComboBox_Edt.value.ds_SortFieldId = objTabFeatureFldsEN.fldId;
            ComboBox_EdtEx.fldId_SortBak = objTabFeatureFldsEN.fldId;
            break;
          case enumFieldType.NameField_03:
            refComboBox_Edt.value.dsDataTextFieldId = objTabFeatureFldsEN.fldId;
            break;
          case enumFieldType.KeyField_02:
            refComboBox_Edt.value.dsDataValueFieldId = objTabFeatureFldsEN.fldId;
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
    const strCommandText = this.btnSubmitComboBox;
    let returnBool0;
    let returnBool;
    let strInfo;
    let strMsg;
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
            const returnKeyId =
              await ComboBox_EdtEx.objTabFeature_EditEx.AddNewRecordWithMaxIdSave();

            if (IsNullOrEmpty(returnKeyId) == true) {
              break;
            }
            ComboBox_EdtEx.TabFeatureIdCache = returnKeyId;
            const returnBool = await this.UpdateRecordSaveV2();
            let strInfo = returnBool ? '添加成功！' : '添加不成功！';
            strInfo += '(In TabFeatureFlds_Edit.btnSubmit_Click)';
            //显示信息框
            console.log(strInfo);
            alert(strInfo);
            if (returnBool == true) {
              vTabFeature_Sim_ReFreshThisCache(clsPrivateSessionStorage.cmPrjId);
              vTabFeatureFlds_Sim_ReFreshThisCache(clsPrivateSessionStorage.currSelPrjId);

              if (TabFeature_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                await ComboBox_EdtEx.EditComboBoxRef.value.hideDialog();
              }
              if (this.iShowList) {
                this.iShowList.BindGvCache('ComboBox_Edt', '');
              }
            }

            //if (TabFeatureFlds_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
            //    this.HideDialog_TabFeatureFlds();
            //}
            //this.iShowList.BindGvCache(clsTabFeatureFldsEN._CurrTabName, "");
          }
          break;
        case '确认修改':
          refTabFeature_Edit.value = refComboBox_Edt.value;
          returnBool0 = await ComboBox_EdtEx.objTabFeature_EditEx.UpdateRecordSave();
          if (returnBool0 == false) {
            let strInfo = '修改下拉框功能不成功！';
            strInfo += '(In TabFeatureFlds_Edit.btnSubmit_Click)';

            console.error(strInfo);
            break;
          }
          //这是一个单表的修改的代码,由于逻辑层太简单,
          returnBool = await this.UpdateRecordSaveV2();
          strInfo = returnBool ? '修改成功！' : '修改不成功！';
          strInfo += '(In TabFeatureFlds_Edit.btnSubmit_Click)';

          //显示信息框
          console.log(strInfo);
          alert(strInfo);
          if (returnBool == true) {
            vTabFeature_Sim_ReFreshThisCache(clsPrivateSessionStorage.cmPrjId);
            vTabFeatureFlds_Sim_ReFreshThisCache(clsPrivateSessionStorage.currSelPrjId);

            if (TabFeature_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
              await ComboBox_EdtEx.EditComboBoxRef.value.hideDialog();
            }
            if (this.iShowList) this.iShowList.BindGvCache('ComboBox_Edt', '');
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
    bolIsCurrTab: boolean,
    intOrderNum: number,
  ) {
    pobjTabFeatureFldsEN.SetTabFeatureId(ComboBox_EdtEx.TabFeatureIdCache); // 表功能Id
    pobjTabFeatureFldsEN.SetFldId(strFldId); // 字段Id
    pobjTabFeatureFldsEN.SetIsCurrTab(bolIsCurrTab); // 字段Id

    pobjTabFeatureFldsEN.SetFieldTypeId(strFieldTypeId); // 字段类型Id
    pobjTabFeatureFldsEN.SetFuncName(''); // 函数名
    pobjTabFeatureFldsEN.SetValueGivingModeId(''); // 给值方式Id
    pobjTabFeatureFldsEN.SetDefaultValue(''); // 缺省值
    pobjTabFeatureFldsEN.SetPrjId(clsPrivateSessionStorage.currSelPrjId); // 缺省值

    pobjTabFeatureFldsEN.SetOrderNum(intOrderNum); // 序号
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
    const strCondFieldId1 = refComboBox_Edt.value.fldIdCond1;
    const strCondFieldId2 = refComboBox_Edt.value.fldIdCond2;

    const bolIsCurrTab1 = refComboBox_Edt.value.isCurrTab1;
    const bolIsCurrTab2 = refComboBox_Edt.value.isCurrTab2;

    const strDataTextFieldId = refComboBox_Edt.value.dsDataTextFieldId;
    const strDataValueFieldId = refComboBox_Edt.value.dsDataValueFieldId;
    const strSortFieldId = refComboBox_Edt.value.ds_SortFieldId;
    if (IsNullOrEmpty(strDataValueFieldId) == true) {
      console.error('值字段不能为空!');
      this.CtrlSelectFocus('ddlDsDataValueFieldId');
      throw '值字段不能为空!';
    }
    if (IsNullOrEmpty(strDataTextFieldId) == true) {
      console.error('文本字段不能为空!');
      this.CtrlSelectFocus('ddlDsDataTextFieldId');
      throw '文本字段不能为空!';
    }
    //this.DivName = "divUpdateRecordSave";
    //const arrTabFeatureFlds: Array<[fldId: string, fieldTypeId: string]> = [];
    const arrTabFeatureFlds: Array<any> = [];
    {
      const objTabFeatureFlds_Value = {
        fldId: strDataValueFieldId,
        orderNum: 1,
        fieldTypeId: enumFieldType.KeyField_02,
      };
      arrTabFeatureFlds.push(objTabFeatureFlds_Value);
    }
    {
      const objTabFeatureFlds_Text = {
        fldId: strDataTextFieldId,
        orderNum: 2,
        fieldTypeId: enumFieldType.NameField_03,
      };
      arrTabFeatureFlds.push(objTabFeatureFlds_Text);
    }
    if (IsNullOrEmpty(strCondFieldId1) == false) {
      const objTabFeatureFlds_Condition = {
        fldId: strCondFieldId1,
        isCurrTab: bolIsCurrTab1,
        orderNum: 4,
        fieldTypeId: enumFieldType.ConditionField_16,
      };
      arrTabFeatureFlds.push(objTabFeatureFlds_Condition);
    } else {
      if (IsNullOrEmpty(ComboBox_EdtEx.fldIdCond1Bak) == false) {
        const objTabFeatureFlds = new clsTabFeatureFldsEN();
        objTabFeatureFlds.tabFeatureId = ComboBox_EdtEx.TabFeatureIdCache;
        objTabFeatureFlds.fldId = ComboBox_EdtEx.fldIdCond1Bak;
        objTabFeatureFlds.fieldTypeId = enumFieldType.ConditionField_16;
        const strCondition = TabFeatureFlds_GetUniCondStr4Update(objTabFeatureFlds);
        const intResult = await TabFeatureFlds_DelTabFeatureFldssByCondAsync(strCondition);
        if (intResult > 0) {
          vTabFeatureFlds_Sim_ReFreshThisCache(clsPrivateSessionStorage.currSelPrjId);
        }
      }
    }

    if (IsNullOrEmpty(strCondFieldId2) == false) {
      const objTabFeatureFlds_Condition2 = {
        fldId: strCondFieldId2,
        isCurrTab: bolIsCurrTab2,
        orderNum: 5,
        fieldTypeId: enumFieldType.ConditionField_16,
      };
      arrTabFeatureFlds.push(objTabFeatureFlds_Condition2);
    } else {
      if (IsNullOrEmpty(ComboBox_EdtEx.fldIdCond2Bak) == false) {
        const objTabFeatureFlds = new clsTabFeatureFldsEN();
        objTabFeatureFlds.tabFeatureId = ComboBox_EdtEx.TabFeatureIdCache;
        objTabFeatureFlds.fldId = ComboBox_EdtEx.fldIdCond2Bak;
        objTabFeatureFlds.fieldTypeId = enumFieldType.ConditionField_16;
        const strCondition = TabFeatureFlds_GetUniCondStr(objTabFeatureFlds);
        const intResult = await TabFeatureFlds_DelTabFeatureFldssByCondAsync(strCondition);
        if (intResult > 0) {
          vTabFeatureFlds_Sim_ReFreshThisCache(clsPrivateSessionStorage.currSelPrjId);
        }
      }
    }
    if (IsNullOrEmpty(strSortFieldId) == false) {
      const objTabFeatureFlds_Sort = {
        fldId: strSortFieldId,
        orderNum: 3,
        fieldTypeId: enumFieldType.SortField_06,
      };
      arrTabFeatureFlds.push(objTabFeatureFlds_Sort);
    } else {
      if (IsNullOrEmpty(ComboBox_EdtEx.fldId_SortBak) == false) {
        const objTabFeatureFlds = new clsTabFeatureFldsEN();
        objTabFeatureFlds.tabFeatureId = ComboBox_EdtEx.TabFeatureIdCache;
        objTabFeatureFlds.fldId = ComboBox_EdtEx.fldId_SortBak;
        objTabFeatureFlds.fieldTypeId = enumFieldType.SortField_06;
        const strCondition = TabFeatureFlds_GetUniCondStr4Update(objTabFeatureFlds);
        const intResult = await TabFeatureFlds_DelTabFeatureFldssByCondAsync(strCondition);
        if (intResult > 0) {
          vTabFeatureFlds_Sim_ReFreshThisCache(clsPrivateSessionStorage.currSelPrjId);
        }
      }
    }
    //objTabFeatureFldsEN.SetmId( Number(this.keyId));
    for (const x of arrTabFeatureFlds) {
      if (x.fldId == '') continue; //如果字段Id为空,则不处理
      if (x.fldId == '0') continue; //如果字段Id为空,则不处理

      const objTabFeatureFldsEN = new clsTabFeatureFldsEN();
      await this.PutDataToTabFeatureFldsClassV2(
        objTabFeatureFldsEN,
        x.fldId,
        x.fieldTypeId,
        x.isCurrTab,
        x.orderNum,
      );
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
          vTabFeatureFlds_Sim_ReFreshThisCache(clsPrivateSessionStorage.currSelPrjId);
          const returnBool_Sub = await PrjTabEx_SetUpdDate(
            clsPrivateSessionStorage.tabId_Main,
            clsPubLocalStorage.userId,
          );
          if (returnBool_Sub == true) {
            vPrjTab_Sim_ReFreshThisCache(clsPrivateSessionStorage.currSelPrjId);
          }
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
  //    refTabFeature_Edit.value.tabFeatureId = pobjTabFeatureFldsEN.tabFeatureId; // 表功能Id
  //   this.fldId = pobjTabFeatureFldsEN.fldId; // 字段Id
  //   this.fieldTypeId = pobjTabFeatureFldsEN.fieldTypeId; // 字段类型Id
  //   this.funcName = pobjTabFeatureFldsEN.funcName; // 函数名
  //   this.valueGivingModeId = pobjTabFeatureFldsEN.valueGivingModeId; // 给值方式Id
  //   this.defaultValue = pobjTabFeatureFldsEN.defaultValue; // 缺省值
  //   refTabFeature_Edit.value.orderNum = pobjTabFeatureFldsEN.orderNum; // 序号
  //   refTabFeature_Edit.value.inUse = pobjTabFeatureFldsEN.inUse; // 是否在用
  //   refTabFeature_Edit.value.memo = pobjTabFeatureFldsEN.memo; // 说明
  // }

  /* 函数功能:系统生成的Change事件函数
     (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript+<>c__DisplayClass13_0:<Gen_WApi_Ts_GeneEventFuncEx>b__1)
   */
  public async ddlTabId_SelectedIndexChanged() {
    alert('请在扩展层:ComboBox_EdtEx中重写该函数！');
  }

  // public async SetDdl_DsSortFieldIdInDiv(strTabId: string) {
  //   await vFieldTab_SimEx_BindDdl_FldIdByTabIdInDivCache(
  //     ComboBox_EdtEx.divEditComboBox,
  //     'ddlDsSortFieldId',
  //     strTabId,
  //   ); //编辑区域
  // }
  // /* 函数功能:系统生成的Change事件函数
  //    (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript+<>c__DisplayClass13_0:<Gen_WApi_Ts_GeneEventFuncEx>b__1)
  //   */
  // public async ddlDsTabId_SelectedIndexChanged() {
  //   DsTabId_Static.value = ComboBox_EdtEx.strTabId4ComboBox;
  //   await refComboBox_Edt.value.BindDdl4EditRegionInDiv();
  //   // await this.SetDdl_DsDataTextFieldIdInDiv(strDsTabId);
  //   // await this.SetDdl_DsDataValueFieldIdInDiv(strDsTabId);
  //   await refComboBox_Edt.value.SetDdl_FldIdCond1InDiv(DsTabId_Static.value);
  //   await refComboBox_Edt.value.SetDdl_FldIdCond2InDiv(DsTabId_Static.value);
  //   await this.SetDdl_DsSortFieldIdInDiv(DsTabId_Static.value);
  // }

  // public async SetDdl_DsTabId(strCmPrjId: string) {
  //   // const objPrjTabCond: clsPrjTabEN = new clsPrjTabEN(); //编辑区域
  //   await vPrjTab_SimEx_BindDdl_TabIdByCmPrjIdInDivCache(
  //     ComboBox_EdtEx.divEditComboBox,
  //     'ddlDsTabId',
  //     strCmPrjId,
  //   ); //编辑区域
  //   //        clsPrjTabBLEx.BindDdl_TabIdExCache(ddlDsTabId, strPrjId);
  //   //			BindDdl_DsTabId(ddlDsTabId);
  // }

  /* 函数功能:系统生成的Change事件函数
    (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript+<>c__DisplayClass13_0:<Gen_WApi_Ts_GeneEventFuncEx>b__1)
    */
  public ddlCtlTypeId_SelectedIndexChanged() {
    //console.log("ddlCtlTypeId_SelectedIndexChanged--this.ctlTypeId:", this.ctlTypeId);
    HideTrInDivObj(ComboBox_EdtEx.divEditComboBox, 'trDdlItemsOptionId');
    HideTrInDivObj(ComboBox_EdtEx.divEditComboBox, 'trDsTabId');
    HideTrInDivObj(ComboBox_EdtEx.divEditComboBox, 'trDsCondStr');
    HideTrInDivObj(ComboBox_EdtEx.divEditComboBox, 'trDsSqlStr');
    HideTrInDivObj(ComboBox_EdtEx.divEditComboBox, 'trItemsString');
    HideTrInDivObj(ComboBox_EdtEx.divEditComboBox, 'trDsDataTextFieldId');
    HideTrInDivObj(ComboBox_EdtEx.divEditComboBox, 'trDsDataValueFieldId');
    HideTrInDivObj(ComboBox_EdtEx.divEditComboBox, 'trFldIdCond');
    HideTrInDivObj(ComboBox_EdtEx.divEditComboBox, 'trDsSortFieldId');
    HideTrInDivObj(ComboBox_EdtEx.divEditComboBox, 'trVarId0');
    HideTrInDivObj(ComboBox_EdtEx.divEditComboBox, 'trIsMultiRow');
    const strCtlTypeId = GetSelectValueInDivObj(ComboBox_EdtEx.divEditComboBox, 'ddlCtlTypeId');
    switch (strCtlTypeId) {
      case enumCtlType.ViewVariable_38:
        ShowTrInDivObj(ComboBox_EdtEx.divEditComboBox, 'trVarId0');
        break;
      // case enumCtlType.sessionStorage_40:
      //   ShowTrInDivObj(ComboBox_EdtEx.divEditComboBox, 'trVarId0');
      //   break;
      case enumCtlType.DropDownList_06:
        ShowTrInDivObj(ComboBox_EdtEx.divEditComboBox, 'trDdlItemsOptionId');
        break;
      case enumCtlType.DropDownList_Bool_18:
        ShowTrInDivObj(ComboBox_EdtEx.divEditComboBox, 'trDdlItemsOptionId');
        SetSelectValueByIdInDivObj(
          ComboBox_EdtEx.divEditComboBox,
          'ddlDdlItemsOptionId',
          enumDDLItemsOption.TrueAndFalseList_04,
        );
        break;
      case enumCtlType.TextBox_16:
        ShowTrInDivObj(ComboBox_EdtEx.divEditComboBox, 'trIsMultiRow');

        break;
      case enumCtlType.TextArea_41:
        ShowTrInDivObj(ComboBox_EdtEx.divEditComboBox, 'trIsMultiRow');

        break;
      case enumCtlType.GivenValue_35:
        HideTrInDivObj(ComboBox_EdtEx.divEditComboBox, 'trDdlItemsOptionId');
        break;
      default:
        break;
    }
  }

  /* 函数功能:为编辑区绑定下拉框
 (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_BindDdl4EditRegionInDiv)
*/
  public async BindDdl4EditRegionInDivBak() {
    // 在此处放置用户代码以初始化页面

    const strTabId = ComboBox_EdtEx.strTabId4ComboBox;
    if (IsNullOrEmpty(strTabId) == true) {
      const strMsg = Format('ComboBox_EdtEx.strTabId4ComboBox为空，还没有被赋正确的值,请检查!');
      throw strMsg;
    }

    // await this.SetDdl_DsDataTextFieldIdInDiv(strTabId); //编辑区域
    // await this.SetDdl_DsDataValueFieldIdInDiv(strTabId); //编辑区域
    await refComboBox_Edt.value.SetDdl_FldIdCond1InDiv(strTabId); //编辑区域
    await refComboBox_Edt.value.SetDdl_FldIdCond2InDiv(strTabId); //编辑区域
    // await this.SetDdl_DsSortFieldIdInDiv(strTabId); //编辑区域
    //await this.SetDdl_FldIdInDivEx(strTabId, strPrjId);//编辑区域
  }
  /// <summary>
  /// 设置绑定下拉框，针对字段:[fldId]
  /// (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl_TSInDiv)
  /// </summary>
  public async SetDdl_FldIdInDivEx(strTabId: string, strPrjId: string) {
    //定义条件字段
    //const strPrjId = "";//定义条件字段
    await vFieldTab_SimEx_BindDdl_FldIdInDivExCache(
      ComboBox_EdtEx.divEditComboBox,
      'ddlFldId',
      strTabId,
      strPrjId,
    ); //编辑区域
  }
  /** 添加新记录
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_btnAddNewRecord_Click)
   **/
  public async btnAddNewRecord_Click() {
    const strThisFuncName = this.btnAddNewRecord_Click.name;

    try {
      this.opType = 'Add';
      // 为编辑区绑定下拉框
      await refComboBox_Edt.value.BindDdl4EditRegionInDiv();

      this.AddNewRecordWithMaxId_TabFeature();
      if (TabFeature_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
        // this.ShowDialogComboBox('Add');
      }
    } catch (e) {
      const strMsg = Format(
        '添加新记录初始化不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /**
   * 设置取消按钮的标题(Used In AddNewRecord())
   */
  public set btnCancelComboBox(value: string) {
    ComboBox_EdtEx.EditComboBoxRef.value.SetButtonText('btnCancelComboBox', value);
  }
  /**
   * 获取按钮的标题
   */
  public get btnSubmitComboBox(): string {
    const strValue = ComboBox_EdtEx.EditComboBoxRef.value.GetButtonText('btnSubmitComboBox');
    return strValue;
  }
  /**
   * 设置确定按钮的标题(Used In AddNewRecord())
   */
  public set btnSubmitComboBox(value: string) {
    ComboBox_EdtEx.EditComboBoxRef.value.SetButtonText('btnSubmitComboBox', value);
  }

  // /**
  //  * 字段Id (Used In Clear())
  //  */
  // public set dsDataTextFieldId(value: string) {
  //   const objDiv = ComboBox_EdtEx.divEditComboBox;
  //   CheckControlExistInDivObj(ComboBox_EdtEx.divEditComboBox, 'select', 'ddlDsDataTextFieldId');
  //   const strId = 'ddlDsDataTextFieldId';
  //   SetSelectValueByIdInDivObj(objDiv, strId, value);
  // }
  // /**
  //  * 字段Id (Used In PutDataToClass())
  //  */
  // public get dsDataTextFieldId(): string {
  //   const strValue = GetSelectValueInDivObj(ComboBox_EdtEx.divEditComboBox, 'ddlDsDataTextFieldId');
  //   if (strValue == undefined) return '';
  //   else if (strValue == '0') return '';
  //   else return strValue;
  // }

  // /**
  //  * 字段Id (Used In Clear())
  //  */
  // public set dsDataValueFieldId(value: string) {
  //   const objDiv = ComboBox_EdtEx.divEditComboBox;
  //   CheckControlExistInDivObj(ComboBox_EdtEx.divEditComboBox, 'select', 'ddlDsDataValueFieldId');
  //   const strId = 'ddlDsDataValueFieldId';
  //   SetSelectValueByIdInDivObj(objDiv, strId, value);
  // }
  // /**
  //  * 字段Id (Used In PutDataToClass())
  //  */
  // public get dsDataValueFieldId(): string {
  //   const strValue = GetSelectValueInDivObj(
  //     ComboBox_EdtEx.divEditComboBox,
  //     'ddlDsDataValueFieldId',
  //   );
  //   if (strValue == undefined) return '';
  //   else if (strValue == '0') return '';
  //   else return strValue;
  // }

  // /**
  //  * 字段Id (Used In Clear())
  //  */
  // public set fldIdCond2(value: string) {
  //   const objDiv = ComboBox_EdtEx.divEditComboBox;
  //   CheckControlExistInDivObj(ComboBox_EdtEx.divEditComboBox, 'select', 'ddlFldIdCond2');
  //   const strId = 'ddlFldIdCond2';
  //   SetSelectValueByIdInDivObj(objDiv, strId, value);
  // }
  // /**
  //  * 字段Id (Used In PutDataToClass())
  //  */
  // public get fldIdCond2(): string {
  //   const strValue = GetSelectValueInDivObj(ComboBox_EdtEx.divEditComboBox, 'ddlFldIdCond2');
  //   if (strValue == undefined) return '';
  //   else if (strValue == '0') return '';
  //   else return strValue;
  // }
  // /**
  //  * 字段Id (Used In Clear())
  //  */
  // public set ds_SortFieldId(value: string) {
  //   const objDiv = ComboBox_EdtEx.divEditComboBox;
  //   CheckControlExistInDivObj(ComboBox_EdtEx.divEditComboBox, 'select', 'ddlDsSortFieldId');
  //   const strId = 'ddlDsSortFieldId';
  //   SetSelectValueByIdInDivObj(objDiv, strId, value);
  // }
  // /**
  //  * 字段Id (Used In PutDataToClass())
  //  */
  // public get ds_SortFieldId(): string {
  //   const strValue = GetSelectValueInDivObj(ComboBox_EdtEx.divEditComboBox, 'ddlDsSortFieldId');
  //   if (strValue == undefined) return '';
  //   else if (strValue == '0') return '';
  //   else return strValue;
  // }

  /**
   * 下拉框控件设置聚焦
   */
  public CtrlSelectFocus(strCtrlId: string) {
    const objDiv = ComboBox_EdtEx.divEditComboBox;
    CheckControlExistInDivObj(ComboBox_EdtEx.divEditComboBox, 'select', strCtrlId);
    const strId = strCtrlId;

    const objSelect = GetSelectObjInDivObj(objDiv, strId);
    objSelect.focus();
  }

  // /**
  //  * 是否使用Cache (Used In Clear())
  //  **/
  // public set IsCurrTab1(value: boolean) {
  //   SetCheckBoxValueByIdInDivObj(ComboBox_EdtEx.divEditComboBox, 'chkIsCurrTab1', value);
  // }
  // /**
  //  * 是否使用Cache (Used In PutDataToClass())
  //  **/
  // public get IsCurrTab1(): boolean {
  //   const objDiv = ComboBox_EdtEx.divEditComboBox;
  //   CheckControlExistInDivObj(ComboBox_EdtEx.divEditComboBox, 'input', 'chkIsCurrTab1');
  //   const strId = 'chkIsCurrTab1';
  //   return GetCheckBoxValueInDivObj(objDiv, strId);
  // }
  // /**
  //  * 是否使用Cache (Used In Clear())
  //  **/
  // public set IsCurrTab2(value: boolean) {
  //   SetCheckBoxValueByIdInDivObj(ComboBox_EdtEx.divEditComboBox, 'chkIsCurrTab2', value);
  // }
  // /**
  //  * 是否使用Cache (Used In PutDataToClass())
  //  **/
  // public get IsCurrTab2(): boolean {
  //   const objDiv = ComboBox_EdtEx.divEditComboBox;
  //   CheckControlExistInDivObj(ComboBox_EdtEx.divEditComboBox, 'input', 'chkIsCurrTab2');
  //   const strId = 'chkIsCurrTab2';
  //   return GetCheckBoxValueInDivObj(objDiv, strId);
  // }
}
