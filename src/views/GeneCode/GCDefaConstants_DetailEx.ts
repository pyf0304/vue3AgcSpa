/**
 * 类名:GCDefaConstants_DetailEx(界面:GCDefaConstantsCRUD,00050343)
 * 表名:GCDefaConstants(00050640)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/18 00:22:34
 * 生成者:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 * 模块中文名:生成代码(GeneCode)
 * 框架-层名:Vue_详细信息后台Ex_TS(TS)(Vue_ViewScript_DetailCSEx_TS,0261)
 * 编程语言:TypeScript
 **/
//import * as $ from "jquery";
//import * as QQ from "q";
import { GCDefaConstants_Detail } from '@/viewsBase/GeneCode/GCDefaConstants_Detail';
import GCDefaConstantsCRUDEx from '@/views/GeneCode/GCDefaConstantsCRUDEx';
/* GCDefaConstants_DetailEx 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.Vue_ViewScript_DetailCSEx_TS4TypeScript:GeneCode)
*/
export default class GCDefaConstants_DetailEx extends GCDefaConstants_Detail {
  /**
  按钮单击,用于调用Js函数中btnClick
 (AutoGCLib.Vue_ViewScript_DetailCSEx_TS4TypeScript:Gen_Vue_TS_btnDetail_Click)
 **/
  public static btnDetail_Click(strCommandName: string, strKeyId: string) {
    const strThisFuncName = this.btnDetail_Click.name;
    const objGCDefaConstantsCRUD: GCDefaConstantsCRUDEx = new GCDefaConstantsCRUDEx();
    const objPage: GCDefaConstants_DetailEx = new GCDefaConstants_DetailEx(objGCDefaConstantsCRUD);
    console.log(strKeyId, strThisFuncName, objPage);
    let strMsg;
    switch (strCommandName) {
      case 'Detail': //详细信息
        objPage.btnDetailRecord_Click(strKeyId);
        break;
      default:
        strMsg = `命令:${strCommandName} 在函数(GCDefaConstants_Detail.btnClick)中没有被处理!`;
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }
}
