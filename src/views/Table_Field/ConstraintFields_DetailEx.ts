/**
 * 类名:ConstraintFields_DetailEx(界面:ConstraintFieldsCRUD)
 * 表名:ConstraintFields(00050334)
 * 版本:2024.01.20.1(服务器:WIN-SRV103-116)
 * 日期:2024/01/24 17:26:27
 * 生成者:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 * 模块中文名:字段、表维护(Table_Field)
 * 框架-层名:Vue_详细信息后台Ex_TS(TS)(Vue_ViewScript_DetailCSEx_TS)
 * 编程语言:TypeScript
 **/
//import * as $ from "jquery";
//import * as QQ from "q";
import { ConstraintFields_Detail } from '@/viewsBase/Table_Field/ConstraintFields_Detail';
import ConstraintFieldsCRUDEx from '@/views/Table_Field/ConstraintFieldsCRUDEx';
/* ConstraintFields_DetailEx 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.Vue_ViewScript_DetailCSEx_TS4TypeScript:GeneCode)
*/
export default class ConstraintFields_DetailEx extends ConstraintFields_Detail {
  /**
  按钮单击,用于调用Js函数中btnClick
 (AutoGCLib.Vue_ViewScript_DetailCSEx_TS4TypeScript:Gen_Vue_TS_btnDetail_Click)
 **/
  public static btnDetail_Click(strCommandName: string, strKeyId: string) {
    const strThisFuncName = this.btnDetail_Click.name;
    const objConstraintFieldsCRUD: ConstraintFieldsCRUDEx = new ConstraintFieldsCRUDEx();
    const objPage: ConstraintFields_DetailEx = new ConstraintFields_DetailEx(
      objConstraintFieldsCRUD,
    );
    console.log(strKeyId, strThisFuncName, objPage);
    let strMsg;
    switch (strCommandName) {
      case 'Detail': //详细信息
        objPage.btnDetailRecord_Click(strKeyId);
        break;
      default:
        strMsg = `命令:${strCommandName} 在函数(ConstraintFields_Detail.btnClick)中没有被处理!`;
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }
}
