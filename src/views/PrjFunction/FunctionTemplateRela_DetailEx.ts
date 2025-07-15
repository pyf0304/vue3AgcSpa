import FunctionTemplateRelaCRUDEx from './FunctionTemplateRelaCRUDEx';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { FunctionTemplateRela_Detail } from '@/viewsBase/PrjFunction/FunctionTemplateRela_Detail';

/* FunctionTemplateRela_DetailEx 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.WA_ViewScript_DetailCSEx_TS4TypeScript:GeneCode)
*/
export default class FunctionTemplateRela_DetailEx extends FunctionTemplateRela_Detail {
  /**
  按钮单击,用于调用Js函数中btn_Click
 (AutoGCLib.WA_ViewScript_DetailCSEx_TS4TypeScript:Gen_WApi_TS_btnDetail_Click)
 **/
  public static btnDetail_Click(strCommandName: string, strKeyId: string) {
    console.log(strKeyId);
    // const strThisFuncName = this.btnDetail_Click.name;
    const objFunctionTemplateRelaCRUD: FunctionTemplateRelaCRUDEx =
      new FunctionTemplateRelaCRUDEx();
    const objPage = new FunctionTemplateRela_DetailEx(objFunctionTemplateRelaCRUD);
    console.log(objPage);

    switch (strCommandName) {
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
        ////objPage.btnAddNewRecordWithMaxId_Click();
        break;
      case 'CreateWithMaxId': //添加记录使用最大关键字
        //objPage.btnAddNewRecordWithMaxId_Click();
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'FunctionTemplateRela_DetailEx.btn_Click');

        break;
    }
  }
}
