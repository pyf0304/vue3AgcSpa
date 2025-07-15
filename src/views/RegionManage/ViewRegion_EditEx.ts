import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { CmPrjId_Local } from '@/views/RegionManage/ViewRegionVueShare';
import { ViewRegion_Edit } from '@/viewsBase/RegionManage/ViewRegion_Edit';

/* ViewRegion_EditEx 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:GeneCode)
*/
export default class ViewRegion_EditEx extends ViewRegion_Edit {
  /*
  按钮单击,用于调用Js函数中btn_Click
 (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:Gen_WApi_TS_btnEdit_Click)
 */
  public static btnEdit_Click(strCommandName: string, strKeyId: string) {
    console.log(strKeyId);
    const objPage: ViewRegion_EditEx = <ViewRegion_EditEx>(
      ViewRegion_Edit.GetPageEditObj('ViewRegion_EditEx')
    );
    if (objPage == null) {
      const strMsg = `当前编辑页面没有按合适的关键字初始化过，请检查！`;
      alert(strMsg);
      console.error(strMsg);
      return;
    }
    switch (strCommandName) {
      case 'Submit': //提交
        CmPrjId_Local.value = clsPrivateSessionStorage.cmPrjId;
        objPage.btnSubmit_Click();
        break;

      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
        objPage.btnAddNewRecord_Click();
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
        // strKeyId = GetFirstCheckedKeyIdInDivObj(objPage.divName4List);
        if (strKeyId == '') {
          alert('请选择需要修改的记录！');
          return;
        }
        objPage.btnUpdateRecord_Click(strKeyId);
        break;

      default:
        AccessBtnClickDefault(strCommandName, 'ViewRegion_EditEx.btn_Click');

        break;
    }
  }
}
