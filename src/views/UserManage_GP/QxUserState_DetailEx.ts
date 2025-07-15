/**
 * 类名:QxUserState_DetailEx(界面:QxUserStateCRUD)
 * 表名:QxUserState(00140016)
 * 版本:2023.06.21.1(服务器:WIN-SRV103-116)
 * 日期:2023/06/22 08:39:08
 * 生成者:
 工程名称:统一平台(0014)
 CM工程:统一平台Spa(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433GeneralPlatformTz
 * PrjDataBaseId:0218
 * 模块中文名:用户管理(UserManage_GP)
 * 框架-层名:Vue_详细信息后台Ex_TS(TS)(Vue_ViewScript_DetailCSEx_TS)
 * 编程语言:TypeScript
 **/
//import * as $ from "jquery";
//import * as QQ from "q";
import { QxUserState_Detail } from '@/viewsBase/UserManage_GP/QxUserState_Detail';
import QxUserStateCRUDEx from '@/views/UserManage_GP/QxUserStateCRUDEx';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
/* QxUserState_DetailEx 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.Vue_ViewScript_DetailCSEx_TS4TypeScript:GeneCode)
*/
export default class QxUserState_DetailEx extends QxUserState_Detail {
  /**
  按钮单击,用于调用Js函数中btnClick
 (AutoGCLib.Vue_ViewScript_DetailCSEx_TS4TypeScript:Gen_Vue_TS_btnDetail_Click)
 **/
  public static btnDetail_Click(strCommandName: string, strKeyId: string) {
    const strThisFuncName = this.btnDetail_Click.name;
    const objQxUserStateCRUD: QxUserStateCRUDEx = new QxUserStateCRUDEx();
    const objPage: QxUserState_DetailEx = new QxUserState_DetailEx(objQxUserStateCRUD);
    console.log(strKeyId, strThisFuncName, objPage);
    let strMsg;
    switch (strCommandName) {
      case 'Detail': //详细信息
        objPage.btnDetailRecord_Click(strKeyId);
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'QxUserState_DetailEx.btnClick');
        alert(strMsg);
        break;
    }
  }
}
