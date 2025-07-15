import AppCodeTypeRelaCRUDEx from './AppCodeTypeRelaCRUDEx';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';

import { AppCodeTypeRela_Detail } from '@/viewsBase/GeneCode/AppCodeTypeRela_Detail';
/* AppCodeTypeRela_DetailEx 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.WA_ViewScript_DetailCSEx_TS4TypeScript:GeneCode)
*/
export default class AppCodeTypeRela_DetailEx extends AppCodeTypeRela_Detail {
  /*
  按钮单击,用于调用Js函数中btn_Click
 (AutoGCLib.WA_ViewScript_DetailCSEx_TS4TypeScript:Gen_WApi_TS_btnDetail_Click)
 */
  public static btnDetail_Click(strCommandName: string, strKeyId: string) {
    console.log(strKeyId);
    const objAppCodeTypeRelaCRUD: AppCodeTypeRelaCRUDEx = new AppCodeTypeRelaCRUDEx();
    const objPage = new AppCodeTypeRela_DetailEx(objAppCodeTypeRelaCRUD);
    console.log(objPage);

    switch (strCommandName) {
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
        ////objPageEdit.btnAddNewRecordWithMaxId_Click();
        break;
      case 'CreateWithMaxId': //添加记录使用最大关键字
        //objPageEdit.btnAddNewRecordWithMaxId_Click();
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'AppCodeTypeRela_DetailEx.btn_Click');

        break;
    }
  }
}
