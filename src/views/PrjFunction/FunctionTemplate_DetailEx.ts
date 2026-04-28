/**
 * 类名:FunctionTemplate_DetailEx(界面:FunctionTemplateCRUD,00050347)
 * 表名:FunctionTemplate(00050312)
 * 版本:2026.04.19(服务器:WIN-SRV103-116)
 * 日期:2026/04/28 23:46:15
 * 生成者:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:109.244.40.104,8433AGC_CS12
 * PrjDataBaseId:0005
 * 模块中文名:函数管理(PrjFunction)
 * 框架-层名:Vue_详细信息后台Ex_TS(TS)(Vue_ViewScript_DetailCSEx_TS,0261)
 * 编程语言:TypeScript
 **/
//import * as $ from "jquery";
//import * as QQ from "q";
import { FunctionTemplate_Detail } from '@/viewsBase/PrjFunction/FunctionTemplate_Detail';
import FunctionTemplateCRUDEx from '@/views/PrjFunction/FunctionTemplateCRUDEx';
/* FunctionTemplate_DetailEx 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.Vue_ViewScript_DetailCSEx_TS4TypeScript:GeneCode)
*/
export default class FunctionTemplate_DetailEx extends FunctionTemplate_Detail {
  /**
  按钮单击,用于调用Js函数中btnClick
 (AutoGCLib.Vue_ViewScript_DetailCSEx_TS4TypeScript:Gen_Vue_TS_btnDetail_Click)
 **/
  public static btnDetail_Click(strCommandName: string, strKeyId: string) {
    const strThisFuncName = this.btnDetail_Click.name;
    const objFunctionTemplateCRUD: FunctionTemplateCRUDEx = new FunctionTemplateCRUDEx();
    const objPage: FunctionTemplate_DetailEx = new FunctionTemplate_DetailEx(
      objFunctionTemplateCRUD,
    );
    console.log(strKeyId, strThisFuncName, objPage);
    let strMsg;
    switch (strCommandName) {
      case 'Detail': //详细信息
        objPage.btnDetailRecord_Click(strKeyId);
        break;
      default:
        strMsg = `命令:${strCommandName} 在函数(FunctionTemplate_Detail.btnClick)中没有被处理!`;
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }
}
