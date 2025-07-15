// import $ from 'jquery';
// import { UserCodePrjMainPathEx_BindDdl_UserCodePrjMainPathIdInDivCache } from '@/ts/L3ForWApiEx/SystemSet/clsUserCodePrjMainPathExWApi';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { UserCodePath_Edit } from '@/viewsBase/SystemSet/UserCodePath_Edit';
/* UserCodePath_EditEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:GeneCode)
*/
export default class UserCodePath_EditEx extends UserCodePath_Edit {
  /**
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:Gen_WApi_TS_btnEdit_Click)
    **/
  public static btnEdit_Click(strCommandName: string, strKeyId: string) {
    const objPage = UserCodePath_Edit.GetPageEditObj('UserCodePath_EditEx');
    if (objPage == null) {
      const strMsg = `当前编辑页面没有按合适的关键字初始化过，请检查！`;
      alert(strMsg);
      console.error(strMsg);
      return;
    }
    const strMsg = '';
    switch (strCommandName) {
      case 'Submit': //提交
        objPage.btnSubmit_Click();
        break;
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
        //objPageEdit.btnAddNewRecordWithMaxId_Click();
        break;
      case 'CreateWithMaxId': //添加记录使用最大关键字
        //objPageEdit.btnAddNewRecordWithMaxId_Click();
        break;
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        objPage.btnAddNewRecord_Click();
        break;
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
        AccessBtnClickDefault(strCommandName, 'UserCodePath_EditEx.btn_Click');
        alert(strMsg);
        break;
    }
  }
  /**
   * 设置绑定下拉框，针对字段:[userCodePrjMainPathId]
   * (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl_TSInDiv)
   */
  public async SetDdl_UserCodePrjMainPathIdInDiv(strCmPrjId: string) {
    //定义条件字段
    console.log('strCmPrjId', strCmPrjId);
    //const strPrjId = "";//定义条件字段
    // await UserCodePrjMainPathEx_BindDdl_UserCodePrjMainPathIdInDivCache(
    //   divVarSet.refDivEdit,
    //   'ddlUserCodePrjMainPathId',
    //   strCmPrjId,
    // ); //编辑区域
  }
}
