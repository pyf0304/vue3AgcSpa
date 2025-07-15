/**
 * 类名:css_FldDispUnitStyle_EditEx(界面:css_FldDispUnitStyleCRUD)
 * 表名:css_FldDispUnitStyle(00050615)
 * 版本:2023.02.04.1(服务器:WIN-SRV103-116)
 * 日期:2023/02/04 23:53:09
 * 生成者:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 * 模块中文名:样式表管理(CssManage)
 * 框架-层名:WA_编辑区后台Ex_TS(TS)(WA_ViewScript_EditCSEx_TS)
 * 编程语言:TypeScript
 **/
import { css_FldDispUnitStyle_Edit } from '@/viewsBase/CssManage/css_FldDispUnitStyle_Edit';
import { IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { refcss_FldDispUnitStyle_Edit } from '@/views/CssManage/css_FldDispUnitStyleVueShare';
/* css_FldDispUnitStyle_EditEx 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:GeneCode)
*/
export default class css_FldDispUnitStyle_EditEx extends css_FldDispUnitStyle_Edit {
  /**
  按钮单击,用于调用Js函数中btn_Click
 (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:Gen_WApi_TS_btnEdit_Click)
 **/
  public static btnEdit_Click(strCommandName: string, strKeyId: string) {
    console.log(strKeyId);
    // const strThisFuncName = this.btnEdit_Click.name;
    const objPage = css_FldDispUnitStyle_Edit.GetPageEditObj('css_FldDispUnitStyle_EditEx');
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
        objPage.btnAddNewRecordWithMaxId_Click();
        break;
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        objPage.btnAddNewRecord_Click();
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
      case 'UpdateRecordInTab': //修改记录InTab
        // strKeyId = GetFirstCheckedKeyIdInDivObj(objPage.divName4List);
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
        AccessBtnClickDefault(strCommandName, 'css_FldDispUnitStyle_EditEx.btn_Click');

        break;
    }
  }

  /* 函数功能:系统生成的Change事件函数
     (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript+<>c__DisplayClass9_0:<Gen_WApi_Ts_GeneEventFuncEx>b__1)
   */
  public async ddlCtlTypeId_SelectedIndexChanged() {
    // const strThisFuncName = this.ddlCtlTypeId_SelectedIndexChanged.name;
    const strCtlTypeId = refcss_FldDispUnitStyle_Edit.value.ctlTypeId;
    if (IsNullOrEmpty(strCtlTypeId)) {
      return;
      //alert('请选择一个有在扩展层:css_FldDispUnitStyle_EditExEx中重写该函数！');
    }
    // await this.SetDdl_StyleIdTitleInDiv(strCtlTypeId); //编辑区域
    // await this.SetDdl_StyleIdContentInDiv(strCtlTypeId); //编辑区域
  }
}
