//import * as $ from "jquery";
//import * as QQ from "q";
import { PrjDataBase_DetailAi } from '@/viewsBase/PrjManage/PrjDataBase_DetailAi';
import PrjDataBaseCRUDAiEx from '@/views/PrjManage/PrjDataBaseCRUDAiEx';
import { PrjDataBaseKey } from '@/ts/L0Entity/PrjManage/clsPrjDataBaseEN';

/* PrjDataBase_DetailEx 的摘要说明。其中Q代表查询,U代表修改
  (:GeneCode)
*/
export default class PrjDataBase_DetailAiEx extends PrjDataBase_DetailAi {
  /**
   * 按钮单击,用于调用Js函数中btnClick
   * (:Gen_Vue_TS_btnDetail_Click)
   **/
  public btnDetail_Click(strCommandName: string, key: PrjDataBaseKey) {
    const strThisFuncName = this.btnDetail_Click.name;
    const objPrjDataBaseCRUD: PrjDataBaseCRUDAiEx = new PrjDataBaseCRUDAiEx();
    const objPage: PrjDataBase_DetailAiEx = new PrjDataBase_DetailAiEx(objPrjDataBaseCRUD);
    console.log(key, strThisFuncName, objPage);
    let strMsg;
    switch (strCommandName) {
      case 'Detail': //详细信息
        objPage.btnDetailRecord_Click(key);
        break;
      default:
        strMsg = `命令:${strCommandName}, 关键字: ${JSON.stringify(
          key,
        )}, 在函数(PrjDataBase_Detail.btnClick)中没有被处理!`;
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }
}
