/**
 * 类名:QxUsersV2_DetailEx(界面:QxUsersV2CRUD)
 * 表名:QxUsersV2(00140110)
 * 版本:2023.06.23.1(服务器:WIN-SRV103-116)
 * 日期:2023/06/27 10:07:58
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
import { QxUsersV2_Detail } from '@/viewsBase/UserManage_GP/QxUsersV2_Detail';
import QxUsersV2CRUDEx from '@/views/UserManage_GP/QxUsersV2CRUDEx';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
/* QxUsersV2_DetailEx 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.Vue_ViewScript_DetailCSEx_TS4TypeScript:GeneCode)
*/
export default class QxUsersV2_DetailEx extends QxUsersV2_Detail {
  /**
  按钮单击,用于调用Js函数中btnClick
 (AutoGCLib.Vue_ViewScript_DetailCSEx_TS4TypeScript:Gen_Vue_TS_btnDetail_Click)
 **/
  public static btnDetail_Click(strCommandName: string, strKeyId: string) {
    const strThisFuncName = this.btnDetail_Click.name;
    const objQxUsersV2CRUD: QxUsersV2CRUDEx = new QxUsersV2CRUDEx();
    const objPage: QxUsersV2_DetailEx = new QxUsersV2_DetailEx(objQxUsersV2CRUD);
    console.log(strKeyId, strThisFuncName, objPage);
    let strMsg;
    switch (strCommandName) {
      case 'Detail': //详细信息
        objPage.btnDetailRecord_Click(strKeyId);
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'QxUsersV2_DetailEx.btnClick');
        alert(strMsg);
        break;
    }
  }
}
