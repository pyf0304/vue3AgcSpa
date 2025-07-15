/**
 * 类名:GCConstantPrjIdRela_EditEx(界面:GCConstantPrjIdRelaCRUD,00050344)
 * 表名:GCConstantPrjIdRela(00050641)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/20 07:06:21
 * 生成者:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 * 模块中文名:生成代码(GeneCode)
 * 框架-层名:Vue_编辑区后台Ex_TS(TS)(Vue_ViewScript_EditCSEx_TS,0258)
 * 编程语言:TypeScript
 **/
//import $ from "jquery";
import { myMessage } from '@/utils/myMessage';
import { GCConstantPrjIdRela_SplitKeyLst } from '@/ts/L3ForWApi/GeneCode/clsGCConstantPrjIdRelaWApi';
import { Format } from '@/ts/PubFun/clsString';
import { GCConstantPrjIdRela_Edit } from '@/viewsBase/GeneCode/GCConstantPrjIdRela_Edit';
/* GCConstantPrjIdRela_EditEx 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.Vue_ViewScript_EditCSEx_TS4TypeScript:GeneCode)
*/
export default class GCConstantPrjIdRela_EditEx extends GCConstantPrjIdRela_Edit {
  /**
  按钮单击,用于调用Js函数中btnClick
 (AutoGCLib.Vue_ViewScript_EditCSEx_TS4TypeScript:Gen_Vue_TS_btnEdit_Click)
 **/
  public static btnEdit_Click(strCommandName: string, strKeyId: string) {
    const strThisFuncName = this.btnEdit_Click.name;
    const objPage: GCConstantPrjIdRela_EditEx = <GCConstantPrjIdRela_EditEx>(
      GCConstantPrjIdRela_Edit.GetPageEditObj('GCConstantPrjIdRela_EditEx')
    );
    if (objPage == null) {
      const strMsg = `从预存编辑类获取关键字:[GCConstantPrjIdRela_EditEx]的对象为空，请在调用编辑类(父类)的定义一下！`;
      console.error(strMsg);
      myMessage.warning(strMsg);
      return;
    }
    let strMsg = '';
    let objKeyLst;
    const strKeyLst = strKeyId;
    switch (strCommandName) {
      case 'Submit': //提交
        objPage.btnSubmit_Click();
        break;
      case 'CreateWithMaxId': //添加记录使用最大关键字
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        objPage.btnAddNewRecord_Click();
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
      case 'UpdateRecordInTab': //修改记录InTab
        objKeyLst = GCConstantPrjIdRela_SplitKeyLst(strKeyLst);
        if (strCommandName == 'UpdateRecordInTab') {
          objPage.btnUpdateRecordInTab_Click(objKeyLst.constId, objKeyLst.prjId);
        } else {
          objPage.btnUpdateRecord_Click(objKeyLst.constId, objKeyLst.prjId);
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
