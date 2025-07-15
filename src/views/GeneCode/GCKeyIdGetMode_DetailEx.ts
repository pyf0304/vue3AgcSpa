import GCKeyIdGetModeCRUDEx from './GCKeyIdGetModeCRUDEx';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';

import { GCKeyIdGetMode_Detail } from '@/viewsBase/GeneCode/GCKeyIdGetMode_Detail';
/* GCKeyIdGetMode_DetailEx 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.WA_ViewScript_DetailCSEx_TS4TypeScript:GeneCode)
*/
export default class GCKeyIdGetMode_DetailEx extends GCKeyIdGetMode_Detail {
  /*
  按钮单击,用于调用Js函数中btn_Click
 (AutoGCLib.WA_ViewScript_DetailCSEx_TS4TypeScript:Gen_WApi_TS_btnDetail_Click)
 */
  public static btnDetail_Click(strCommandName: string, strKeyId: string) {
    console.log(strKeyId);
    const objGCKeyIdGetModeCRUD: GCKeyIdGetModeCRUDEx = new GCKeyIdGetModeCRUDEx();
    const objPage = new GCKeyIdGetMode_DetailEx(objGCKeyIdGetModeCRUD);
    console.log(objPage);

    switch (strCommandName) {
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
        //objPageEdit.btnAddNewRecordWithMaxId_Click();
        break;
      case 'CreateWithMaxId': //添加记录使用最大关键字
        //objPageEdit.btnAddNewRecordWithMaxId_Click();
        break;
      case 'Detail': //详细信息
        objPage.btnDetailRecord_Click(strKeyId);
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'GCKeyIdGetMode_DetailEx.btnDetail_Click');

        break;
    }
  }
}
