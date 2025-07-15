import GCContainerTypeCRUDEx from './GCContainerTypeCRUDEx';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';

import { GCContainerType_Detail } from '@/viewsBase/GeneCode/GCContainerType_Detail';
/* GCContainerType_DetailEx 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.WA_ViewScript_DetailCSEx_TS4TypeScript:GeneCode)
*/
export default class GCContainerType_DetailEx extends GCContainerType_Detail {
  /*
  按钮单击,用于调用Js函数中btn_Click
 (AutoGCLib.WA_ViewScript_DetailCSEx_TS4TypeScript:Gen_WApi_TS_btnDetail_Click)
 */
  public static btnDetail_Click(strCommandName: string, strKeyId: string) {
    console.log(strKeyId);
    const objGCContainerTypeCRUD: GCContainerTypeCRUDEx = new GCContainerTypeCRUDEx();
    const objPage = new GCContainerType_DetailEx(objGCContainerTypeCRUD);
    console.log(objPage);

    switch (strCommandName) {
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
        //objPageEdit.btnAddNewRecordWithMaxId_Click();
        break;
      case 'CreateWithMaxId': //添加记录使用最大关键字
        //objPageEdit.btnAddNewRecordWithMaxId_Click();
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'GCContainerType_DetailEx.btn_Click');

        break;
    }
  }
}
