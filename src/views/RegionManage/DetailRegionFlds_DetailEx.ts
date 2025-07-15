import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { DetailRegionFlds_Detail } from '@/viewsBase/RegionManage/DetailRegionFlds_Detail';

/* DetailRegionFlds_DetailEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScript_DetailCSEx_TS4TypeScript:GeneCode)
*/
export default class DetailRegionFlds_DetailEx extends DetailRegionFlds_Detail {
  /*
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_ViewScript_DetailCSEx_TS4TypeScript:Gen_WApi_TS_btnDetail_Click)
    */
  public static btnDetail_Click(strCommandName: string, strKeyId: string) {
    console.log(strKeyId);
    // const objDetailRegionFldsCRUD: DetailRegionFldsCRUDEx = new DetailRegionFldsCRUDEx();
    // const objPage: DetailRegionFlds_DetailEx = new DetailRegionFlds_DetailEx(
    //   objDetailRegionFldsCRUD,
    // );

    switch (strCommandName) {
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
        ////objPageEdit.btnAddNewRecordWithMaxId_Click();
        break;
      case 'CreateWithMaxId': //添加记录使用最大关键字
        //objPageEdit.btnAddNewRecordWithMaxId_Click();
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'DetailRegionFlds_DetailEx.btn_Click');

        break;
    }
  }
}
