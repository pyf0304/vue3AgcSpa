import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { ViewInfo_Edit2 } from '@/viewsBase/PrjInterface/ViewInfo_Edit2';

/* ViewInfo_Edit2Ex 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:GeneCode)
*/
export class ViewInfo_Edit2Ex extends ViewInfo_Edit2 {
  /*
  按钮单击,用于调用Js函数中btn_Click
 (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:Gen_WApi_TS_btnEdit_Click)
 */
  public static btnEdit_Click(strCommandName: string, strKeyId: string) {
    console.log(strKeyId);
    const objPage = ViewInfo_Edit2Ex.objPageEdit;

    switch (strCommandName) {
      case 'Submit': //提交
        objPage.btnSubmit_Click();
        break;
      case 'CreateWithMaxId': //添加记录使用最大关键字
        objPage.btnAddNewRecord_Click();
        break;
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        objPage.btnAddNewRecord_Click();
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
      case 'UpdateRecordInTab': //修改记录InTab
        if (IsNullOrEmpty(strKeyId) == true) {
          const strMsg = '请选择需要修改的记录！';
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        if (strCommandName == 'UpdateRecordInTab') {
          objPage.btnUpdateRecordInTab_Click(strKeyId);
        } else {
          objPage.btnUpdateRecord_Click(strKeyId);
        }
        break;

      default:
        AccessBtnClickDefault(strCommandName, 'ViewInfo_Edit2Ex.btn_Click');

        break;
    }
  }
  public ddlMainTabId_SelectedIndexChanged(ddlMainTabId: HTMLSelectElement): void {
    console.log(ddlMainTabId);
    throw new Error('Method not implemented.');
  }
}
