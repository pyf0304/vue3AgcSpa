/*import $ from "jquery";*/
import { TabFeature_Edit } from '@/viewsBase/Table_Field/TabFeature_Edit';
import { clsTabFeatureEN } from '@/ts/L0Entity/Table_Field/clsTabFeatureEN';
import {
  TabFeature_AddNewRecordWithMaxIdAsync,
  TabFeature_CheckPropertyNew,
  TabFeature_GetUniCondStr,
  TabFeature_GetUniCondStr4Update,
  TabFeature_IsExistRecordAsync,
} from '@/ts/L3ForWApi/Table_Field/clsTabFeatureWApi';
import { vTabFeatureFlds_Sim_ReFreshThisCache } from '@/ts/L3ForWApi/Table_Field/clsvTabFeatureFlds_SimWApi';
import { vTabFeature_Sim_ReFreshThisCache } from '@/ts/L3ForWApi/Table_Field/clsvTabFeature_SimWApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { ClearSelectValueByIdInDivObj } from '@/ts/PubFun/clsCommFunc4Ctrl';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { divVarSet } from '@/views/Table_Field/TabFeatureVueShare';
import { refTabFeature_Edit } from '@/views/Table_Field/ComboBoxVueShare';
/* TabFeature_EditEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:GeneCode)
*/
export default class TabFeature_EditEx extends TabFeature_Edit {
  public static FeatureTypeId_Static = '03'; //表功能

  /*
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:Gen_WApi_TS_btnEdit_Click)
    */
  public static btnEdit_Click(strCommandName: string, strKeyId: string) {
    console.log(strKeyId);
    const objPage = TabFeature_Edit.GetPageEditObj('TabFeature_EditEx');
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
        AccessBtnClickDefault(strCommandName, 'TabFeature_EditEx.btn_Click');
        alert(strMsg);
        break;
    }
  }

  /**
   * 清除用户自定义控件中，所有控件的值
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_Clear)
   **/
  public Clear() {
    // const strThisFuncName = this.Clear.name;
    refTabFeature_Edit.value.tabFeatureId = '';
    refTabFeature_Edit.value.tabFeatureName = '';

    ClearSelectValueByIdInDivObj(divVarSet.refDivEdit, 'ddlFeatureId');
    refTabFeature_Edit.value.funcNameCs = '';
    refTabFeature_Edit.value.funcNameJs = '';
    refTabFeature_Edit.value.orderNum = 0;
    //this.tabId = "";
    refTabFeature_Edit.value.isExtendedClass = false;
    refTabFeature_Edit.value.isForCSharp = false;
    refTabFeature_Edit.value.isForTypeScript = false;
    refTabFeature_Edit.value.isForDiv = false;
    refTabFeature_Edit.value.isNeedGC = false;
    //this.inUse = false;
    refTabFeature_Edit.value.memo = '';
  }
  /** 为修改记录检查唯一性条件
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_CheckUniCondition4Update)
   **/
  public async CheckUniCond4Update(objTabFeatureEN: clsTabFeatureEN): Promise<boolean> {
    // const strThisFuncName = this.CheckUniCond4Update.name;
    const strUniquenessCondition = TabFeature_GetUniCondStr4Update(objTabFeatureEN);
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
  /** 为修改记录检查唯一性条件
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_CheckUniCondition4Update)
   **/

  public async CheckUniCond4UpdateV2(objTabFeatureEN: clsTabFeatureEN): Promise<boolean> {
    // const strThisFuncName = this.CheckUniCond4Update.name;
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
  /** 为修改记录检查唯一性条件
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_CheckUniCondition4Update)
   **/
  public async CheckUniCond4UpdateV3(objTabFeatureEN: clsTabFeatureEN): Promise<boolean> {
    // const strThisFuncName = this.CheckUniCond4Update.name;
    if (IsNullOrEmpty(objTabFeatureEN.funcNameCs) == true) return true;
    const strUniquenessCondition = TabFeature_GetUniCondStr4Update(objTabFeatureEN);
    const bolIsExistCondition = await TabFeature_IsExistRecordAsync(strUniquenessCondition);
    if (bolIsExistCondition == true) {
      const strMsg = Format(
        '不能满足唯一性条件。在当前表中已经存在相同的函数名_Cs:[{0}]!',
        objTabFeatureEN.funcNameCs,
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
  /** 为添加记录检查唯一性条件
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_CheckUniCondition4Add)
   **/
  public async CheckUniCond4AddV3(objTabFeatureEN: clsTabFeatureEN): Promise<boolean> {
    // const strThisFuncName = this.CheckUniCond4AddV3.name;
    if (IsNullOrEmpty(objTabFeatureEN.funcNameCs) == true) return true;
    const strUniquenessCondition = TabFeature_GetUniCondStr(objTabFeatureEN);
    const bolIsExistCondition = await TabFeature_IsExistRecordAsync(strUniquenessCondition);
    if (bolIsExistCondition == true) {
      const strMsg = Format(
        '不能满足唯一性条件。在当前表中已经存在相同的函数名_Cs:[{0}]!',
        objTabFeatureEN.funcNameCs,
      );

      console.error(strMsg);
      alert(strMsg);
      return false;
    }
    return true;
  }
  /** 添加新记录，由后台自动获取最大值的关键字。保存函数
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordWithMaxIdSave)
   **/
  public async AddNewRecordWithMaxIdSave(): Promise<string> {
    const strThisFuncName = this.AddNewRecordWithMaxIdSave.name;
    let objTabFeatureEN;
    try {
      objTabFeatureEN = await refTabFeature_Edit.value.GetEditDataTabFeatureObj();
    } catch (e) {
      const strMsg = Format(
        '从界面获取数据不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      throw strMsg; //一定要有一个返回值,否则会出错!
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
}
