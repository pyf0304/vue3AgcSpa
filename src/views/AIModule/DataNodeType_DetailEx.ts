import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { DataNodeType_Detail } from '@/viewsBase/AIModule/DataNodeType_Detail';

/* DataNodeType_DetailEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScript_DetailCSEx_TS4TypeScript:GeneCode)
*/
export default class DataNodeType_DetailEx extends DataNodeType_Detail {
  /**
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_ViewScript_DetailCSEx_TS4TypeScript:Gen_WApi_TS_btnDetail_Click)
    **/
  public static btnDetail_Click(strCommandName: string, strKeyId: string) {
    console.log(strKeyId);
    // const strThisFuncName = this.btnDetail_Click.name;
    // const objDataNodeTypeCRUD: DataNodeTypeCRUDEx = new DataNodeTypeCRUDEx();
    // const objPage: DataNodeType_DetailEx = new DataNodeType_DetailEx(objDataNodeTypeCRUD);

    switch (strCommandName) {
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
        ////objPageEdit.btnAddNewRecordWithMaxId_Click();
        break;
      case 'CreateWithMaxId': //添加记录使用最大关键字
        //objPageEdit.btnAddNewRecordWithMaxId_Click();
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'DataNodeType_DetailEx.btn_Click');

        break;
    }
  }
}
