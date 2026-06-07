//import * as $ from "jquery";
//import * as QQ from "q";
import { CTCodeTypeGroupRela_DetailAi } from '@/viewsBase/GeneCode/CTCodeTypeGroupRela_DetailAi';
import { CTCodeTypeGroupRelaKey } from '@/ts/L0Entity/GeneCode/clsCTCodeTypeGroupRelaEN';

/* CTCodeTypeGroupRela_DetailEx 的摘要说明。其中Q代表查询,U代表修改
  (:GeneCode)
*/
export default class CTCodeTypeGroupRela_DetailAiEx extends CTCodeTypeGroupRela_DetailAi {
  /**
   * 按钮单击,用于调用Js函数中btnClick
   * (:Gen_Vue_TS_btnDetail_Click)
   **/
  public btnDetail_Click(strCommandName: string, key: CTCodeTypeGroupRelaKey) {
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
        )}, 在函数(CTCodeTypeGroupRela_Detail.btnClick)中没有被处理!`;
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }
}
