/**
 * 类名:ViewIdGCVariableRela_EditEx(界面:ViewIdGCVariableRelaCRUD)
 * 表名:ViewIdGCVariableRela(00050631)
 * 版本:2024.05.19.1(服务器:DESKTOP-1KM2OK3)
 * 日期:2024/05/24 16:28:56
 * 生成者:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 * 模块中文名:生成代码(GeneCode)
 * 框架-层名:Vue_编辑区后台Ex_TS(TS)(Vue_ViewScript_EditCSEx_TS)
 * 编程语言:TypeScript
 **/
//import $ from "jquery";
import { myMessage } from '@/utils/myMessage';
import { ViewIdGCVariableRela_SplitKeyLst } from '@/ts/L3ForWApi/GeneCode/clsViewIdGCVariableRelaWApi';
import { Format } from '@/ts/PubFun/clsString';
import { ViewIdGCVariableRela_Edit } from '@/viewsBase/GeneCode/ViewIdGCVariableRela_Edit';
/* ViewIdGCVariableRela_EditEx 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.Vue_ViewScript_EditCSEx_TS4TypeScript:GeneCode)
*/
export default class ViewIdGCVariableRela_EditEx extends ViewIdGCVariableRela_Edit {
  /**
  按钮单击,用于调用Js函数中btnClick
 (AutoGCLib.Vue_ViewScript_EditCSEx_TS4TypeScript:Gen_Vue_TS_btnEdit_Click)
 **/
  public static btnEdit_Click(strCommandName: string, strKeyId: string) {
    const strThisFuncName = this.btnEdit_Click.name;
    const objPage: ViewIdGCVariableRela_EditEx = <ViewIdGCVariableRela_EditEx>(
      ViewIdGCVariableRela_Edit.GetPageEditObj('ViewIdGCVariableRela_EditEx')
    );
    if (objPage == null) {
      const strMsg = `从预存编辑类获取关键字:[ViewIdGCVariableRela_EditEx]的对象为空，请在调用编辑类(父类)的定义一下！`;
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
        objKeyLst = ViewIdGCVariableRela_SplitKeyLst(strKeyLst);
        if (strCommandName == 'UpdateRecordInTab') {
          objPage.btnUpdateRecordInTab_Click(objKeyLst.varId, objKeyLst.viewId);
        } else {
          objPage.btnUpdateRecord_Click(objKeyLst.varId, objKeyLst.viewId);
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
