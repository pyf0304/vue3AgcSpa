//import * as $ from "jquery";
//import * as QQ from "q";
import { Function4GeneCode_DetailAi } from '@/viewsBase/PrjFunction/Function4GeneCode_DetailAi';
import Function4GeneCodeCRUDAiEx from '@/views/PrjFunction/Function4GeneCodeCRUDAiEx';
import { Function4GeneCodeKey } from '@/ts/L0Entity/PrjFunction/clsFunction4GeneCodeEN';

/* Function4GeneCode_DetailEx 的摘要说明。其中Q代表查询,U代表修改
  (:GeneCode)
*/
export default class Function4GeneCode_DetailAiEx extends Function4GeneCode_DetailAi {
  /**
   * 按钮单击,用于调用Js函数中btnClick
   * (:Gen_Vue_TS_btnDetail_Click)
   **/
  public btnDetail_Click(strCommandName: string, key: Function4GeneCodeKey) {
    const strThisFuncName = this.btnDetail_Click.name;
    const objFunction4GeneCodeCRUD: Function4GeneCodeCRUDAiEx = new Function4GeneCodeCRUDAiEx();
    const objPage: Function4GeneCode_DetailAiEx = new Function4GeneCode_DetailAiEx(
      objFunction4GeneCodeCRUD,
    );
    console.log(key, strThisFuncName, objPage);
    let strMsg;
    switch (strCommandName) {
      case 'Detail': //详细信息
        objPage.btnDetailRecord_Click(key);
        break;
      default:
        strMsg = `命令:${strCommandName}, 关键字: ${JSON.stringify(
          key,
        )}, 在函数(Function4GeneCode_Detail.btnClick)中没有被处理!`;
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }
}
