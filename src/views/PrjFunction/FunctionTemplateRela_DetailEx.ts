/**
 * 类名:FunctionTemplateRela_DetailEx(界面:FunctionTemplateRelaCRUD,00050327)
 * 表名:FunctionTemplateRela(00050313)
 * 版本:2026.04.19(服务器:PYF-AI)
 * 日期:2026/05/21 23:24:14
 * 生成者:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:109.244.40.104,8433AGC_CS12
 * PrjDataBaseId:0005
 * 模块中文名:函数管理(PrjFunction)
 * 框架-层名:Vue_详细信息Ex_TS(Vue_ViewScript_DetailEx_TS,0261)
 * 编程语言:TypeScript
 **/
//import * as $ from "jquery";
//import * as QQ from "q";
import { FunctionTemplateRela_Detail } from '@/viewsBase/PrjFunction/FunctionTemplateRela_Detail';
import FunctionTemplateRelaCRUDAiEx from '@/views/PrjFunction/FunctionTemplateRelaCRUDAiEx';
/* FunctionTemplateRela_DetailEx 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.Vue_ViewScript_DetailEx_TS4TypeScript:GeneCode)
*/
export default class FunctionTemplateRela_DetailEx extends FunctionTemplateRela_Detail {
  /**
  按钮单击,用于调用Js函数中btnClick
 (AutoGCLib.Vue_ViewScript_DetailEx_TS4TypeScript:Gen_Vue_TS_btnDetail_Click)
 **/
  public static btnDetail_Click(strCommandName: string, strKeyId: string) {
    const strThisFuncName = this.btnDetail_Click.name;
    const objFunctionTemplateRelaCRUD: FunctionTemplateRelaCRUDAiEx =
      new FunctionTemplateRelaCRUDAiEx();
    const objPage: FunctionTemplateRela_DetailEx = new FunctionTemplateRela_DetailEx(
      objFunctionTemplateRelaCRUD,
    );
    console.log(strKeyId, strThisFuncName, objPage);
    let strMsg;
    switch (strCommandName) {
      case 'Detail': //详细信息
        objPage.btnDetailRecord_Click(strKeyId);
        break;
      default:
        strMsg = `命令:${strCommandName} 在函数(FunctionTemplateRela_Detail.btnClick)中没有被处理!`;
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }
}
