import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { CMProject_Detail } from '@/viewsBase/CodeMan/CMProject_Detail';

/* CMProject_DetailEx 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.WA_ViewScript_DetailCSEx_TS4TypeScript:GeneCode)
*/
export default class CMProject_DetailEx extends CMProject_Detail {
  /**
  按钮单击,用于调用Js函数中btn_Click
 (AutoGCLib.WA_ViewScript_DetailCSEx_TS4TypeScript:Gen_WApi_TS_btnDetail_Click)
 **/
  public static btnDetail_Click(strCommandName: string, strKeyId: string) {
    console.log(strKeyId);
    // const strThisFuncName = this.btnDetail_Click.name;
    // const objCMProjectCRUD: CMProjectCRUDEx = new CMProjectCRUDEx();
    // const objPage = new CMProject_DetailEx(objCMProjectCRUD);

    switch (strCommandName) {
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
        //objPage.btnAddNewRecordWithMaxId_Click();
        break;
      case 'CreateWithMaxId': //添加记录使用最大关键字
        //objPage.btnAddNewRecordWithMaxId_Click();
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'CMProject_DetailEx.btn_Click');

        break;
    }
  }
}
