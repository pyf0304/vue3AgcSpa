/*import $ from "jquery";*/
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { FieldTab_Detail } from '@/viewsBase/Table_Field/FieldTab_Detail';

/* FieldTab_DetailEx 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.WA_ViewScript_DetailCSEx_TS4TypeScript:GeneCode)
*/
export default class FieldTab_DetailEx extends FieldTab_Detail {
  /**
  按钮单击,用于调用Js函数中btn_Click
 (AutoGCLib.WA_ViewScript_DetailCSEx_TS4TypeScript:Gen_WApi_TS_btnDetail_Click)
 **/
  public static btnDetail_Click(strCommandName: string, strKeyId: string) {
    console.log(strKeyId);
    // const strThisFuncName = this.btnDetail_Click.name;
    // const objFieldTabCRUD: FieldTabCRUDEx = new FieldTabCRUDEx();
    // const objPage: FieldTab_DetailEx = new FieldTab_DetailEx(objFieldTabCRUD);
    const strMsg = '';
    switch (strCommandName) {
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
        ////objPage.btnAddNewRecordWithMaxId_Click();
        break;
      case 'CreateWithMaxId': //添加记录使用最大关键字
        //objPage.btnAddNewRecordWithMaxId_Click();
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'FieldTab_DetailEx.btn_Click');
        alert(strMsg);
        break;
    }
  }
}
