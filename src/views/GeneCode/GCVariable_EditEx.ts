import { enumPageDispMode } from '@/ts/L0Entity/PrjMenu/clsPageDispModeEN';

import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { GCVariable_Edit } from '@/viewsBase/GeneCode/GCVariable_Edit';
import {
  GCVariable_AddNewRecordWithMaxIdAsync,
  GCVariable_CheckPropertyNew,
  GCVariable_ReFreshCache,
} from '@/ts/L3ForWApi/GeneCode/clsGCVariableWApi';

import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { HideTrInDivObj } from '@/ts/PubFun/clsCommFunc4Ctrl';
import { divVarSet, refGCVariable_Edit } from '@/views/GeneCode/GCVariableVueShare';

/** GCVariable_EditEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:GeneCode)
*/
export default class GCVariable_EditEx extends GCVariable_Edit {
  /*
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:Gen_WApi_TS_btnEdit_Click)
    */
  public static btnEdit_Click(strCommandName: string, strKeyId: string) {
    console.log(strKeyId);
    const objPage: GCVariable_EditEx = <GCVariable_EditEx>(
      GCVariable_Edit.GetPageEditObj('GCVariable_EditEx')
    );
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
        objPage.btnAddNewRecord_Click();
        break;
      case 'CreateWithMaxId': //添加记录使用最大关键字
        //objPageEdit.btnAddNewRecordWithMaxId_Click();
        break;
      //case "AddNewRecord":            //添加记录
      //case "Create":            //添加记录
      //    objPageEdit.btnAddNewRecord_Click();
      //    break;
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
        AccessBtnClickDefault(strCommandName, 'GCVariable_EditEx.btn_Click');

        break;
    }
  }

  /** 为插入记录做准备工作
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordWithMaxId)
   **/
  public AddNewRecord_Sim(strVarTypeId: string) {
    // const strThisFuncName = this.AddNewRecordWithMaxId.name;

    this.btnSubmitGCVariable = '确认添加';
    this.btnCancelGCVariable = '取消添加';
    refGCVariable_Edit.value.Clear();
    refGCVariable_Edit.value.varTypeId = strVarTypeId;
    HideTrInDivObj(divVarSet.refDivEdit, 'trVarId0');
  }
  /** 添加新记录
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_btnAddNewRecordWithMaxId_Click)
   **/
  public async btnAddNewRecord_Sim_Click() {
    const strThisFuncName = this.btnAddNewRecord_Sim_Click.name;
    try {
      if (GCVariable_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
        await refGCVariable_Edit.value.showDialog();
      }
      this.opType = 'AddWithMaxId';
      this.AddNewRecordWithMaxId();
      // if (GCVariable_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      //   this.ShowDialog_GCVariable('Add');
      // }
    } catch (e: any) {
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

  /** 添加新记录，由后台自动获取最大值的关键字。保存函数
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordWithMaxIdSave)
   **/
  public async AddNewRecordWithMaxIdSave(): Promise<string> {
    const strThisFuncName = this.AddNewRecordWithMaxIdSave.name;
    let objGCVariableEN;
    try {
      objGCVariableEN = await refGCVariable_Edit.value.GetEditDataGCVariableObj();
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
      GCVariable_CheckPropertyNew(objGCVariableEN);
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
      const bolIsExistCond = await this.CheckUniCond4Add(objGCVariableEN);
      if (bolIsExistCond == false) {
        return '';
      }
      const responseKeyId = await GCVariable_AddNewRecordWithMaxIdAsync(objGCVariableEN);
      const returnKeyId: string = responseKeyId;
      if (IsNullOrEmpty(returnKeyId) == false) {
        GCVariable_ReFreshCache();
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
