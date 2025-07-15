// import $ from 'jquery';
import { Ref } from 'vue';
import FeatureRegionFldsCRUDEx from './FeatureRegionFldsCRUDEx';
import { clsFeatureRegionFldsEN } from '@/ts/L0Entity/RegionManage/clsFeatureRegionFldsEN';
import { enumCtlType } from '@/ts/L0Entity/PrjInterface/clsCtlTypeEN';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';

import { vFieldTab_SimEx_BindDdl_FldIdByTabIdInDivCache } from '@/ts/L3ForWApiEx/Table_Field/clsvFieldTab_SimExWApi';
import { FeatureRegionFlds_ReFreshCache } from '@/ts/L3ForWApi/RegionManage/clsFeatureRegionFldsWApi';

import { FeatureRegionFlds_Edit_SetValue } from '@/viewsBase/RegionManage/FeatureRegionFlds_Edit_SetValue';

import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
import { FeatureRegionFldsEx_AddFeatureRegionFldsRecordSave } from '@/ts/L3ForWApiEx/RegionManage/clsFeatureRegionFldsExWApi2';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import {
  divVarSet,
  refFeatureRegionFlds_Edit_SetValue,
  RegionId_Static,
} from '@/views/RegionManage/FeatureRegionFlds_SimVueShare';
import { vFieldTab_Sim_GetObjByFldIdCache } from '@/ts/L3ForWApi/Table_Field/clsvFieldTab_SimWApi';
import { TabId_Static } from '@/views/RegionManage/FeatureRegionFldsVueShare';
/** FeatureRegionFlds_Edit_SetValueEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:GeneCode)
*/
export default class FeatureRegionFlds_Edit_SetValueEx extends FeatureRegionFlds_Edit_SetValue {
  public static EditRef: Ref<any>;
  public static divEdit: HTMLDivElement;
  // public static strTabId4Region = ''; //编辑区的相关表Id
  public relaTabId = '';
  public applicationTypeId = 0;
  /*
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:Gen_WApi_TS_btnEdit_Click)
    */
  public static btnEdit_Click(strCommandName: string, strKeyId: string) {
    console.log(strKeyId);
    const objPage: FeatureRegionFlds_Edit_SetValueEx = <FeatureRegionFlds_Edit_SetValueEx>(
      FeatureRegionFlds_Edit_SetValueEx.objPageEdit
    );
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
        objPage.btnUpdateRecord_Click(strKeyId);
        break;

      default:
        AccessBtnClickDefault(strCommandName, 'FeatureRegionFlds_Edit_SetValueEx.btn_Click');

        break;
    }
  }
  /** 添加新记录
    (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_btnAddNewRecord_Click)
   */
  public async btnAddNewRecord_Click() {
    try {
      if (FeatureRegionFlds_Edit_SetValue.strPageDispModeId == enumPageDispMode.PopupBox_01) {
        await refFeatureRegionFlds_Edit_SetValue.value.showDialog();
      }
      divVarSet.refDivEdit = refFeatureRegionFlds_Edit_SetValue.value.$refs.refDivEdit;
      // await this.AddDPV_Edit(divEdit);
      this.opType = 'Add';

      await this.AddNewRecord();

      // this.PageLoad();
    } catch (e: any) {
      console.log('catch(e)=');
      console.error(e);
      const strMsg = `添加新记录初始化不成功,${e}.`;
      alert(strMsg);
    }
  }

  /// <summary>
  /// 设置绑定下拉框，针对字段:[releFldId]
  /// (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl_TS)
  /// </summary>
  public async SetDdl_ReleFldId() {
    await vFieldTab_SimEx_BindDdl_FldIdByTabIdInDivCache(
      FeatureRegionFlds_Edit_SetValueEx.divEdit,
      'ddlReleFldId',
      this.relaTabId,
    ); //编辑区域
  }
  /** 函数功能:事件函数,当单击<确定修改>时发生的事件函数,
具体功能为把界面内容同步数据库中,把界面内容保存到数据库中
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnOKUpd_Click)
*/
  public async btnSubmit_Click() {
    const strCommandText = this.btnSubmitFeatureRegionFlds;
    try {
      const strRelaFldId = refFeatureRegionFlds_Edit_SetValue.value.releFldId;
      const strValueGivingModeId = refFeatureRegionFlds_Edit_SetValue.value.valueGivingModeId;
      const strDefaValue = refFeatureRegionFlds_Edit_SetValue.value.defaultValue;
      const strFuncName = '';
      if (IsNullOrEmpty(strRelaFldId) == true) {
        alert('字段Id不能为空！');
        return;
      }
      if (this.applicationTypeId == 0) {
        const strMsg = '应用类型不能为空！';
        alert(strMsg);
        console.error(strMsg);
        return;
      }
      //const objFeatureGroup = new Tuple<string, string, string, string, string, string>(vsFeatureId, vsMainTabId, strRelaFldId, strValueGivingModeId, strFuncName, strDefaValue);
      const objFieldTab = await vFieldTab_Sim_GetObjByFldIdCache(
        strRelaFldId,
        clsPrivateSessionStorage.currSelPrjId,
      );
      if (objFieldTab == null) {
        alert('选择字段不能为空！');
        return;
      }

      const objFeatureRegionFlds: clsFeatureRegionFldsEN = new clsFeatureRegionFldsEN();
      objFeatureRegionFlds.featureId = FeatureRegionFldsCRUDEx.FeatureId4Adding;
      objFeatureRegionFlds.commandName = Format('Set{0}', objFieldTab.fldName);
      objFeatureRegionFlds.text = Format('设置{0}', objFieldTab.caption);
      objFeatureRegionFlds.releTabId = TabId_Static.value;
      objFeatureRegionFlds.releFldId = strRelaFldId;
      objFeatureRegionFlds.prjId = clsPrivateSessionStorage.currSelPrjId;
      objFeatureRegionFlds.valueGivingModeId = strValueGivingModeId;
      objFeatureRegionFlds.funcName = strFuncName;
      objFeatureRegionFlds.defaultValue = strDefaValue;
      objFeatureRegionFlds.ctlTypeId = enumCtlType.Button_01;
      try {
        const bolResult = await FeatureRegionFldsEx_AddFeatureRegionFldsRecordSave(
          RegionId_Static.value,
          TabId_Static.value,
          this.applicationTypeId,
          objFeatureRegionFlds,
          clsPubLocalStorage.userId,
        );
        if (bolResult == true) {
          FeatureRegionFlds_ReFreshCache(RegionId_Static.value);
          if (FeatureRegionFlds_Edit_SetValue.strPageDispModeId == enumPageDispMode.PopupBox_01) {
            refFeatureRegionFlds_Edit_SetValue.value.hideDialog();
          }
        }
        //SetOperate("Finished");
        //lblErrMsg.text = "";
      } catch (objException: any) {
        alert(objException);
        return;
        //SetOperate("Update");
      }
      //wucPrjFeature4Gv1.SetVisible(false);
      if (this.iShowList) {
        this.iShowList.BindGvCache(clsFeatureRegionFldsEN._CurrTabName, '');
      } else {
        console.error('iShowList is null or undefined.');
      }
      //BindTv_ViewFeatureRela();
    } catch (e: any) {
      const strMsg = `(errid: WiTsCs0033)在保存记录时(${strCommandText})时出错!请联系管理员!${e}`;
      alert(strMsg);
    }
  }
}
