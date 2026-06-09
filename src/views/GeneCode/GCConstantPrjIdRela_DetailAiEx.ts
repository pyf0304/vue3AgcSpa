//import * as $ from "jquery";
//import * as QQ from "q";
import { GCConstantPrjIdRela_DetailAi } from '@/viewsBase/GeneCode/GCConstantPrjIdRela_DetailAi';
import { GCConstantPrjIdRelaKey } from '@/ts/L0Entity/GeneCode/clsGCConstantPrjIdRelaEN';

/* GCConstantPrjIdRela_DetailEx 的摘要说明。其中Q代表查询,U代表修改
  (:GeneCode)
*/
export default class GCConstantPrjIdRela_DetailAiEx extends GCConstantPrjIdRela_DetailAi {
  /**
   * 按钮单击,用于调用Js函数中btnClick
   * (:Gen_Vue_TS_btnDetail_Click)
   **/
  public btnDetail_Click(strCommandName: string, key: GCConstantPrjIdRelaKey) {
    const strThisFuncName = this.btnDetail_Click.name;

    console.log(key, strThisFuncName);
    let strMsg;
    switch (strCommandName) {
      case 'Detail': //详细信息
        this.btnDetailRecord_Click(key);
        break;
      default:
        strMsg = `命令:${strCommandName}, 关键字: ${JSON.stringify(
          key,
        )}, 在函数(GCConstantPrjIdRela_Detail.btnClick)中没有被处理!`;
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }
}
