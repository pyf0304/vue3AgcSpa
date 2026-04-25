/**
 * 类名:PrjDataBase_EditEx(界面:PrjDataBaseCRUD,00050346)
 * 表名:PrjDataBase(00050176)
 * 版本:2026.04.19(服务器:WIN-SRV103-116)
 * 日期:2026/04/19 19:09:28
 * 生成者:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:109.244.40.104,8433AGC_CS12
 * PrjDataBaseId:0005
 * 模块中文名:工程管理(PrjManage)
 * 框架-层名:Vue_编辑区后台Ex_TS(TS)(Vue_ViewScript_EditCSEx_TS,0258)
 * 编程语言:TypeScript
 **/
//import $ from "jquery";
// import { myMessage } from '@/utils/myMessage';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { PrjDataBase_EditAi } from '@/viewsBase/PrjManage/PrjDataBase_EditAi';
/* PrjDataBase_EditEx 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.Vue_ViewScript_EditCSEx_TS4TypeScript:GeneCode)
*/
export default class PrjDataBase_EditEx extends PrjDataBase_EditAi {
  /**
  按钮单击,用于调用Js函数中btnClick
 (AutoGCLib.Vue_ViewScript_EditCSEx_TS4TypeScript:Gen_Vue_TS_btnEdit_Click)
 **/
  public btnEdit_Click(strCommandName: string, strKeyId: string) {
    const strThisFuncName = this.btnEdit_Click.name;
    // const objPage: PrjDataBase_EditEx = <PrjDataBase_EditEx>(
    //   PrjDataBase_Edit.GetPageEditObj('PrjDataBase_EditEx')
    // );
    // if (objPage == null) {
    //   const strMsg = `从预存编辑类获取关键字:[PrjDataBase_EditEx]的对象为空，请在调用编辑类(父类)的定义一下！`;
    //   console.error(strMsg);
    //   myMessage.warning(strMsg);
    //   return;
    // }
    let strMsg = '';
    switch (strCommandName) {
      case 'Submit': //提交
        this.btnSubmit_Click();
        break;
      case 'CreateWithMaxId': //添加记录使用最大关键字
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        this.btnAddNewRecord_Click();
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
      case 'UpdateRecordInTab': //修改记录InTab
        if (IsNullOrEmpty(strKeyId) == true) {
          const strMsg = '请选择需要修改的记录!';
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        if (strCommandName == 'UpdateRecordInTab') {
          this.btnUpdateRecordInTab_Click(strKeyId);
        } else {
          this.btnUpdateRecord_Click(strKeyId);
        }
        break;
      default:
        strMsg = Format(
          '命令:{0}, 关键字: {1}, 在函数({2}.{3})中没有被处理!',
          strCommandName,
          strKeyId,
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }
}
