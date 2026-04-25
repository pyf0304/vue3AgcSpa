/**
 * 类名:PrjDataBase_DetailEx(界面:PrjDataBaseCRUD,00050346)
 * 表名:PrjDataBase(00050176)
 * 版本:2026.04.19(服务器:WIN-SRV103-116)
 * 日期:2026/04/19 19:09:31
 * 生成者:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:109.244.40.104,8433AGC_CS12
 * PrjDataBaseId:0005
 * 模块中文名:工程管理(PrjManage)
 * 框架-层名:Vue_详细信息后台Ex_TS(TS)(Vue_ViewScript_DetailCSEx_TS,0261)
 * 编程语言:TypeScript
 **/
//import * as $ from "jquery";
//import * as QQ from "q";
import { PrjDataBase_Detail } from '@/viewsBase/PrjManage/PrjDataBase_Detail';
import PrjDataBaseCRUDEx from '@/views/PrjManage/PrjDataBaseCRUDEx';
/* PrjDataBase_DetailEx 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.Vue_ViewScript_DetailCSEx_TS4TypeScript:GeneCode)
*/
export default class PrjDataBase_DetailEx extends PrjDataBase_Detail {
  /**
  按钮单击,用于调用Js函数中btnClick
 (AutoGCLib.Vue_ViewScript_DetailCSEx_TS4TypeScript:Gen_Vue_TS_btnDetail_Click)
 **/
  public static btnDetail_Click(strCommandName: string, strKeyId: string) {
    const strThisFuncName = this.btnDetail_Click.name;
    const objPrjDataBaseCRUD: PrjDataBaseCRUDEx = new PrjDataBaseCRUDEx();
    const objPage: PrjDataBase_DetailEx = new PrjDataBase_DetailEx(objPrjDataBaseCRUD);
    console.log(strKeyId, strThisFuncName, objPage);
    let strMsg;
    switch (strCommandName) {
      case 'Detail': //详细信息
        objPage.btnDetailRecord_Click(strKeyId);
        break;
      default:
        strMsg = `命令:${strCommandName} 在函数(PrjDataBase_Detail.btnClick)中没有被处理!`;
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }
}
