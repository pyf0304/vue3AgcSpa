import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { ExcelExportRegionFlds_Detail } from '@/viewsBase/RegionManage/ExcelExportRegionFlds_Detail';

/* ExcelExportRegionFlds_DetailEx 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.WA_ViewScript_DetailCSEx_TS4TypeScript:GeneCode)
*/
export default class ExcelExportRegionFlds_DetailEx extends ExcelExportRegionFlds_Detail {
  /*
  按钮单击,用于调用Js函数中btn_Click
 (AutoGCLib.WA_ViewScript_DetailCSEx_TS4TypeScript:Gen_WApi_TS_btnDetail_Click)
 */
  public static btnDetail_Click(strCommandName: string, strKeyId: string) {
    console.log(strKeyId);
    // const objExcelExportRegionFldsCRUD: ExcelExportRegionFldsCRUDEx =
    //   new ExcelExportRegionFldsCRUDEx();
    // const objPage: ExcelExportRegionFlds_DetailEx = new ExcelExportRegionFlds_DetailEx(
    //   objExcelExportRegionFldsCRUD,
    // );

    switch (strCommandName) {
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
        ////objPageEdit.btnAddNewRecordWithMaxId_Click();
        break;
      case 'CreateWithMaxId': //添加记录使用最大关键字
        //objPageEdit.btnAddNewRecordWithMaxId_Click();
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'ExcelExportRegionFlds_DetailEx.btn_Click');

        break;
    }
  }
}
