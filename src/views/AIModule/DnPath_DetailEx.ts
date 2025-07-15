/**
 * 类名:DnPath_DetailEx(界面:DnPathCRUD)
 * 表名:DnPath(00050591)
 * 版本:2023.02.01.1(服务器:WIN-SRV103-116)
 * 日期:2023/02/02 00:40:32
 * 生成者:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 * 模块中文名:AI模块(AIModule)
 * 框架-层名:WA_详细信息后台Ex_TS(TS)(WA_ViewScript_DetailCSEx_TS)
 * 编程语言:TypeScript
 **/
import DnPathCRUDEx from './DnPathCRUDEx';
import { DnPath_Detail } from '@/viewsBase/AIModule/DnPath_Detail';
import { SetLabelHtmlByIdInDivObj } from '@/ts/PubFun/clsCommFunc4Ctrl';
import { IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { divVarSet } from '@/views/AIModule/DnPathVueShare';
/* DnPath_DetailEx 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.WA_ViewScript_DetailCSEx_TS4TypeScript:GeneCode)
*/
export default class DnPath_DetailEx extends DnPath_Detail {
  /**
  按钮单击,用于调用Js函数中btn_Click
 (AutoGCLib.WA_ViewScript_DetailCSEx_TS4TypeScript:Gen_WApi_TS_btnDetail_Click)
 **/
  public static btnDetail_Click(strCommandName: string, strKeyId: string) {
    // const strThisFuncName = this.btnDetail_Click.name;
    const objDnPathCRUD: DnPathCRUDEx = new DnPathCRUDEx();
    const objPage: DnPath_DetailEx = new DnPath_DetailEx(objDnPathCRUD);

    switch (strCommandName) {
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
        //objPage.btnAddNewRecordWithMaxId_Click();
        break;
      case 'CreateWithMaxId': //添加记录使用最大关键字
        //objPage.btnAddNewRecordWithMaxId_Click();
        break;

      case 'Detail': //添加记录
        // strKeyId = GetFirstCheckedKeyIdInDivObj(objPage.divName4List);
        if (IsNullOrEmpty(strKeyId) == true) {
          const strMsg = '请选择需要详细显示的记录！';
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        objPage.btnDetailRecord_Click(strKeyId);
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'DnPath_DetailExEx.btn_Click');

        break;
    }
  }

  /**
   * 是否有错 (Used In ShowDetailDataFromClass4Func())
   **/
  public set isHasErr_d(value: boolean) {
    SetLabelHtmlByIdInDivObj(divVarSet.refDivDetail, 'lblIsHasErr_d', value ? '有错' : '无');
  }
}
