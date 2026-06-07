//import * as $ from "jquery";
//import * as QQ from "q";
import { CTCodeTypeGroup_DetailAi } from '@/viewsBase/GeneCode/CTCodeTypeGroup_DetailAi';
import { CTCodeTypeGroupKey } from '@/ts/L0Entity/GeneCode/clsCTCodeTypeGroupEN';

/* CTCodeTypeGroup_DetailEx 的摘要说明。其中Q代表查询,U代表修改
  (:GeneCode)
*/
export default class CTCodeTypeGroup_DetailAiEx extends CTCodeTypeGroup_DetailAi {
  /**
   * 按钮单击,用于调用Js函数中btnClick
   * (:Gen_Vue_TS_btnDetail_Click)
   **/
  public btnDetail_Click(strCommandName: string, key: CTCodeTypeGroupKey) {
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
        )}, 在函数(CTCodeTypeGroup_Detail.btnClick)中没有被处理!`;
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }
}
