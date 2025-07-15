/**
 * 类名:css_Style_DetailEx(界面:css_StyleCRUD)
 * 表名:css_Style(00050468)
 * 版本:2023.02.04.1(服务器:WIN-SRV103-116)
 * 日期:2023/02/05 11:08:40
 * 生成者:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 * 模块中文名:样式表管理(CssManage)
 * 框架-层名:WA_详细信息后台Ex_TS(TS)(WA_ViewScript_DetailCSEx_TS)
 * 编程语言:TypeScript
 **/
import css_StyleCRUDEx from './css_StyleCRUDEx';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { css_Style_Detail } from '@/viewsBase/CssManage/css_Style_Detail';

/* css_Style_DetailEx 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.WA_ViewScript_DetailCSEx_TS4TypeScript:GeneCode)
*/
export default class css_Style_DetailEx extends css_Style_Detail {
  /**
  按钮单击,用于调用Js函数中btn_Click
 (AutoGCLib.WA_ViewScript_DetailCSEx_TS4TypeScript:Gen_WApi_TS_btnDetail_Click)
 **/
  public static btnDetail_Click(strCommandName: string, strKeyId: string) {
    console.log(strKeyId);
    // const strThisFuncName = this.btnDetail_Click.name;
    const objcss_StyleCRUD: css_StyleCRUDEx = new css_StyleCRUDEx();
    const objPage = new css_Style_DetailEx(objcss_StyleCRUD);
    console.log(objPage);

    switch (strCommandName) {
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
        ////objPage.btnAddNewRecordWithMaxId_Click();
        break;
      case 'CreateWithMaxId': //添加记录使用最大关键字
        //objPage.btnAddNewRecordWithMaxId_Click();
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'css_Style_DetailExEx.btn_Click');

        break;
    }
  }
}
