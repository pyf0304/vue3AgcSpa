import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { FuncModule_Agc_Detail } from '@/viewsBase/PrjManage/FuncModule_Agc_Detail';

/* FuncModule_Agc_DetailEx 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.WA_ViewScript_DetailCSEx_TS4TypeScript:GeneCode)
*/
export default class FuncModule_Agc_DetailEx extends FuncModule_Agc_Detail {
  /**
  按钮单击,用于调用Js函数中btn_Click
 (AutoGCLib.WA_ViewScript_DetailCSEx_TS4TypeScript:Gen_WApi_TS_btnDetail_Click)
 **/
  public static btnDetail_Click(strCommandName: string, strKeyId: string) {
    console.log(strKeyId);
    // const strThisFuncName = this.btnDetail_Click.name;
    // const objFuncModule_AgcCRUD: FuncModule_AgcCRUDEx = new FuncModule_AgcCRUDEx();
    // const objPage: FuncModule_Agc_DetailEx = new FuncModule_Agc_DetailEx(objFuncModule_AgcCRUD);

    switch (strCommandName) {
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
        ////objPage.btnAddNewRecordWithMaxId_Click();
        break;
      case 'CreateWithMaxId': //添加记录使用最大关键字
        //objPage.btnAddNewRecordWithMaxId_Click();
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'FuncModule_Agc_DetailEx.btn_Click');

        break;
    }
  }
}
