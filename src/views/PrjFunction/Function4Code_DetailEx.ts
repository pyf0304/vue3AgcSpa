/**
 * 类名:Function4Code_DetailEx(界面:Function4CodeCRUD)
 * 表名:Function4Code(00050386)
 * 版本:2023.07.18.1(服务器:PYF-THINKPAD)
 * 日期:2023/07/28 03:02:00
 * 生成者:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 * 模块中文名:函数管理(PrjFunction)
 * 框架-层名:Vue_详细信息后台Ex_TS(TS)(Vue_ViewScript_DetailCSEx_TS)
 * 编程语言:TypeScript
 **/
//import * as $ from "jquery";
//import * as QQ from "q";
import { Function4Code_Detail } from '@/viewsBase/PrjFunction/Function4Code_Detail';
import Function4CodeCRUDEx from '@/views/PrjFunction/Function4CodeCRUDEx';
/* Function4Code_DetailEx 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.Vue_ViewScript_DetailCSEx_TS4TypeScript:GeneCode)
*/
export default class Function4Code_DetailEx extends Function4Code_Detail {
  /**
  按钮单击,用于调用Js函数中btnClick
 (AutoGCLib.Vue_ViewScript_DetailCSEx_TS4TypeScript:Gen_Vue_TS_btnDetail_Click)
 **/
  public static btnDetail_Click(strCommandName: string, strKeyId: string) {
    const strThisFuncName = this.btnDetail_Click.name;
    const objFunction4CodeCRUD: Function4CodeCRUDEx = new Function4CodeCRUDEx();
    const objPage: Function4Code_DetailEx = new Function4Code_DetailEx(objFunction4CodeCRUD);
    console.log(strKeyId, strThisFuncName, objPage);
    let strMsg;
    switch (strCommandName) {
      case 'Detail': //详细信息
        objPage.btnDetailRecord_Click(strKeyId);
        break;
      default:
        strMsg = `命令:${strCommandName} 在函数(Function4Code_DetailEx.btnClick)中没有被处理!`;
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }
}
