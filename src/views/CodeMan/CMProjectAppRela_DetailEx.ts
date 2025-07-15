/**
 * 类名:CMProjectAppRela_DetailEx(界面:CMProjectAppRelaCRUD,00050340)
 * 表名:CMProjectAppRela(00050600)
 * 版本:2024.09.08.1(服务器:WIN-SRV103-116)
 * 日期:2024/09/11 16:40:36
 * 生成者:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 * 模块中文名:代码管理(CodeMan)
 * 框架-层名:Vue_详细信息后台Ex_TS(TS)(Vue_ViewScript_DetailCSEx_TS,0261)
 * 编程语言:TypeScript
 **/
//import * as $ from "jquery";
//import * as QQ from "q";
import { CMProjectAppRela_Detail } from '@/viewsBase/CodeMan/CMProjectAppRela_Detail';
import CMProjectAppRelaCRUDEx from '@/views/CodeMan/CMProjectAppRelaCRUDEx';
/* CMProjectAppRela_DetailEx 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.Vue_ViewScript_DetailCSEx_TS4TypeScript:GeneCode)
*/
export default class CMProjectAppRela_DetailEx extends CMProjectAppRela_Detail {
  /**
  按钮单击,用于调用Js函数中btnClick
 (AutoGCLib.Vue_ViewScript_DetailCSEx_TS4TypeScript:Gen_Vue_TS_btnDetail_Click)
 **/
  public static btnDetail_Click(strCommandName: string, strKeyId: string) {
    const strThisFuncName = this.btnDetail_Click.name;
    const objCMProjectAppRelaCRUD: CMProjectAppRelaCRUDEx = new CMProjectAppRelaCRUDEx();
    const objPage: CMProjectAppRela_DetailEx = new CMProjectAppRela_DetailEx(
      objCMProjectAppRelaCRUD,
    );

    console.log(strKeyId, strThisFuncName, objPage);
    let strMsg;
    switch (strCommandName) {
      case 'Detail': //详细信息
        objPage.btnDetailRecord_Click(strKeyId);
        break;
      default:
        strMsg = `命令:${strCommandName} 在函数(CMProjectAppRela_Detail.btnClick)中没有被处理!`;
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }
}
