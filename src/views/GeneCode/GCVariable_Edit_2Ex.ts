// import $ from 'jquery';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { GCVariable_Edit } from '@/viewsBase/GeneCode/GCVariable_Edit';
/* GCVariable_Edit_2Ex 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:GeneCode)
*/
export class GCVariable_Edit_2Ex extends GCVariable_Edit {
  /**
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:Gen_WApi_TS_btnEdit_Click)
    **/
  public static btnEdit_Click(strCommandName: string, strKeyId: string) {
    console.log(strKeyId);
    // const strThisFuncName = this.btnEdit_Click.name;
    const objPage = GCVariable_Edit_2Ex.objPageEdit;

    switch (strCommandName) {
      case 'Submit': //提交
        objPage.btnSubmit_Click();
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'GCVariable_Edit_2Ex.btn_Click');

        break;
    }
  }
}
