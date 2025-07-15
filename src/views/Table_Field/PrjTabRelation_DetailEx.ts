/**
 * 类名:PrjTabRelation_DetailEx(界面:PrjTabRelationCRUD)
 * 表名:PrjTabRelation(00050606)
 * 生成代码版本:2022.04.06.1
 * 生成日期:2022/04/09 01:16:31
 * 生成者:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 * 模块中文名:字段、表维护(Table_Field)
 * 框架-层名:WA_详细信息后台Ex_TS(WA_ViewScript_DetailCSEx_TS)
 * 编程语言:TypeScript
 **/
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { PrjTabRelation_Detail } from '@/viewsBase/Table_Field/PrjTabRelation_Detail';

/* PrjTabRelation_DetailEx 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.WA_ViewScript_DetailCSEx_TS4TypeScript:GeneCode)
*/
export default class PrjTabRelation_DetailEx extends PrjTabRelation_Detail {
  /**
  按钮单击,用于调用Js函数中btn_Click
 (AutoGCLib.WA_ViewScript_DetailCSEx_TS4TypeScript:Gen_WApi_TS_btnDetail_Click)
 **/
  public static btnDetail_Click(strCommandName: string, strKeyId: string) {
    console.log(strKeyId);
    // const strThisFuncName = this.btnDetail_Click.name;
    // const objPrjTabRelationCRUD: PrjTabRelationCRUDEx = new PrjTabRelationCRUDEx();
    // const objPage: PrjTabRelation_DetailEx = new PrjTabRelation_DetailEx(objPrjTabRelationCRUD);
    let strMsg;
    switch (strCommandName) {
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
        ////objPage.btnAddNewRecordWithMaxId_Click();
        break;
      case 'CreateWithMaxId': //添加记录使用最大关键字
        //objPage.btnAddNewRecordWithMaxId_Click();
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'PrjTabRelation_DetailEx.btn_Click');
        alert(strMsg);
        break;
    }
  }
}
