import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { CmProjectPrjTab_Detail } from '@/viewsBase/CodeMan/CmProjectPrjTab_Detail';

/* CmProjectPrjTab_DetailEx 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.WA_ViewScript_DetailCSEx_TS4TypeScript:GeneCode)
*/
export default class CmProjectPrjTab_DetailEx extends CmProjectPrjTab_Detail {
  /**
  按钮单击,用于调用Js函数中btn_Click
 (AutoGCLib.WA_ViewScript_DetailCSEx_TS4TypeScript:Gen_WApi_TS_btnDetail_Click)
 **/
  public static btnDetail_Click(strCommandName: string, strKeyId: string) {
    console.log(strKeyId);
    // const strThisFuncName = this.btnDetail_Click.name;
    // const objCmProjectPrjTabCRUD: CmProjectPrjTabCRUDEx = new CmProjectPrjTabCRUDEx();
    // const objPage: CmProjectPrjTab_DetailEx = new CmProjectPrjTab_DetailEx(objCmProjectPrjTabCRUD);

    switch (strCommandName) {
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
        ////objPage.btnAddNewRecordWithMaxId_Click();
        break;
      case 'CreateWithMaxId': //添加记录使用最大关键字
        //objPage.btnAddNewRecordWithMaxId_Click();
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'CmProjectPrjTab_DetailEx.btn_Click');

        break;
    }
  }
}
