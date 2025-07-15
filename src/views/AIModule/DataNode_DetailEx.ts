/**
 * 类名:DataNode_DetailEx(界面:DataNodeCRUD)
 * 表名:DataNode(00050547)
 * 版本:2023.06.23.1(服务器:WIN-SRV103-116)
 * 日期:2023/06/25 16:24:03
 * 生成者:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 * 模块中文名:AI模块(AIModule)
 * 框架-层名:Vue_详细信息后台Ex_TS(TS)(Vue_ViewScript_DetailCSEx_TS)
 * 编程语言:TypeScript
 **/
//import * as $ from "jquery";
//import * as QQ from "q";
import { DataNode_Detail } from '@/viewsBase/AIModule/DataNode_Detail';
import DataNodeCRUDEx from '@/views/AIModule/DataNodeCRUDEx';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
/* DataNode_DetailEx 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.Vue_ViewScript_DetailCSEx_TS4TypeScript:GeneCode)
*/
export default class DataNode_DetailEx extends DataNode_Detail {
  /**
  按钮单击,用于调用Js函数中btnClick
 (AutoGCLib.Vue_ViewScript_DetailCSEx_TS4TypeScript:Gen_Vue_TS_btnDetail_Click)
 **/
  public static btnDetail_Click(strCommandName: string, strKeyId: string) {
    const strThisFuncName = this.btnDetail_Click.name;
    const objDataNodeCRUD: DataNodeCRUDEx = new DataNodeCRUDEx();
    const objPage: DataNode_DetailEx = new DataNode_DetailEx(objDataNodeCRUD);
    console.log(strKeyId, strThisFuncName, objPage);

    switch (strCommandName) {
      case 'Detail': //详细信息
        objPage.btnDetailRecord_Click(strKeyId);
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'DataNode_DetailEx.btnClick');
        break;
    }
  }
}
