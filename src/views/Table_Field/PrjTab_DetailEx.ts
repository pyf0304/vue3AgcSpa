/*import $ from "jquery";*/
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { refPrjTab_Detail, divVarSet } from '@/views/Table_Field/PrjTabVueShare';
import { PrjTab_Detail } from '@/viewsBase/Table_Field/PrjTab_Detail';

/* vPrjTabDetailEx 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.WA_ViewScript_DetailCSEx_TS4TypeScript:GeneCode)
*/
export default class PrjTab_DetailEx extends PrjTab_Detail {
  /*
  按钮单击,用于调用Js函数中btn_Click
 (AutoGCLib.WA_ViewScript_DetailCSEx_TS4TypeScript:Gen_WApi_TS_btnDetail_Click)
 */
  public static btnDetail_Click(strCommandName: string, strKeyId: string) {
    console.log(strKeyId);

    // const objPrjTabCRUD: PrjTabCRUDEx = new PrjTabCRUDEx();
    // const objPage: PrjTab_DetailEx = new PrjTab_DetailEx(objPrjTabCRUD);
    const strMsg = '';
    switch (strCommandName) {
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
        //objPageEdit.btnAddNewRecordWithMaxId_Click();
        break;
      case 'CreateWithMaxId': //添加记录使用最大关键字
        //objPageEdit.btnAddNewRecordWithMaxId_Click();
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'vPrjTabDetailEx.btn_Click');
        alert(strMsg);
        break;
    }
  }
  /* 修改记录
 (AutoGCLib.Vue_ViewScript_DetailCS_TS4TypeScript:Gen_Vue_Ts_btnDetailRecord_Click)
*/
  public async btnDetailRecord_Click(strKeyId: string) {
    // if (PrjTab_Detail.strPageDispModeId == enumPageDispMode.PopupBox_01) {
    //   await refPrjTab_Detail.value.showDialog();
    // }
    divVarSet.refDivDetail = refPrjTab_Detail.value.$refs.refDivDetail;
    this.opType = 'Detail';
    if (IsNullOrEmpty(strKeyId) == true) {
      const strMsg = '需要显示详细信息记录的关键字为空，请检查！';
      console.error(strMsg);
      alert(strMsg);
    }
    if (this.bolIsLoadDetailRegion == false) {
      //
      // 为编辑区绑定下拉框
      //const conBindDdl = await this.BindDdl4DetailRegion();
      this.bolIsLoadDetailRegion = true; //
      await this.DetailRecord4Func(strKeyId);
    } else {
      await this.DetailRecord4Func(strKeyId);
    }
  }
}
