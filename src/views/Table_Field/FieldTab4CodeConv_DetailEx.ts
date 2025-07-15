import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { FieldTab4CodeConv_Detail } from '@/viewsBase/Table_Field/FieldTab4CodeConv_Detail';

/* FieldTab4CodeConv_DetailEx 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.WA_ViewScript_DetailCSEx_TS4TypeScript:GeneCode)
*/
export default class FieldTab4CodeConv_DetailEx extends FieldTab4CodeConv_Detail {
  /**
  按钮单击,用于调用Js函数中btn_Click
 (AutoGCLib.WA_ViewScript_DetailCSEx_TS4TypeScript:Gen_WApi_TS_btnDetail_Click)
 **/
  public static btnDetail_Click(strCommandName: string, strKeyId: string) {
    console.log(strKeyId);
    // const strThisFuncName = this.btnDetail_Click.name;
    // const objFieldTab4CodeConvCRUD: FieldTab4CodeConvCRUDEx = new FieldTab4CodeConvCRUDEx();
    // const objPage: FieldTab4CodeConv_DetailEx = new FieldTab4CodeConv_DetailEx(
    //   objFieldTab4CodeConvCRUD,
    // );
    let strMsg;
    switch (strCommandName) {
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
        ////objPage.btnAddNewRecordWithMaxId_Click();
        break;
      case 'CreateWithMaxId': //添加记录使用最大关键字
        //objPage.btnAddNewRecordWithMaxId_Click();
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'FieldTab4CodeConv_DetailEx.btn_Click');
        alert(strMsg);
        break;
    }
  }
}
