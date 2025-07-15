import { CMProject_Edit } from '@/viewsBase/CodeMan/CMProject_Edit';
import { IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';

/* CMProject_EditEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:GeneCode)
*/
export default class CMProject_EditEx extends CMProject_Edit {
  /**
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:Gen_WApi_TS_btnEdit_Click)
    **/
  public static btnEdit_Click(strCommandName: string, strKeyId: string) {
    // const strThisFuncName = this.btnEdit_Click.name;
    const objPage = CMProject_Edit.GetPageEditObj('CMProject_EditEx');
    if (objPage == null) {
      const strMsg = `当前编辑页面没有按合适的关键字初始化过，请检查！`;
      alert(strMsg);
      console.error(strMsg);
      return;
    }
    switch (strCommandName) {
      case 'Submit': //提交
        objPage.btnSubmit_Click();
        break;
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
        objPage.btnAddNewRecordWithMaxId_Click();
        break;
      case 'CreateWithMaxId': //添加记录使用最大关键字
        objPage.btnAddNewRecord_Click();
        break;
      //case "AddNewRecord":            //添加记录
      //case "Create":            //添加记录
      //    objPage_Edit.btnAddNewRecord_Click();
      //    break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
        // strKeyId = GetFirstCheckedKeyIdInDivObj(objPage.divName4List);
        if (IsNullOrEmpty(strKeyId) == true) {
          const strMsg = '请选择需要修改的记录！';
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        objPage.btnUpdateRecord_Click(strKeyId);
        break;
      case 'UpdateRecordInTab': //修改记录InTab
        objPage.btnUpdateRecordInTab_Click(strKeyId);
        break;

      default:
        AccessBtnClickDefault(strCommandName, 'CMProject_EditEx.btn_Click');

        break;
    }
  }

  /** 为插入记录做准备工作
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordWithMaxId)
   **/
  public async AddNewRecordWithMaxId() {
    // const strThisFuncName = this.AddNewRecordWithMaxId.name;
    // refvFeatureRegionFlds_List.Clear();
    // HideTrInDivObj(divVarSet.refDivEdit, 'trCmPrjId');
    //wucCMProjectB1.cmPrjId = CMProject_GetMaxStrId_S();
  }
}
