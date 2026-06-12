//import * as $ from "jquery";
//import * as QQ from "q";
import { PrjFileType_DetailAi } from '@/viewsBase/ResourceMan/PrjFileType_DetailAi';
import { PrjFileTypeKey } from '@/ts/L0Entity/ResourceMan/clsPrjFileTypeEN';

/* PrjFileType_DetailEx 的摘要说明。其中Q代表查询,U代表修改
  (:GeneCode)
*/
export default class PrjFileType_DetailAiEx extends PrjFileType_DetailAi {
  /**
   * 按钮单击,用于调用Js函数中btnClick
   * (:Gen_Vue_TS_btnDetail_Click)
   **/
  public btnDetail_Click(strCommandName: string, key: PrjFileTypeKey) {
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
        )}, 在函数(PrjFileType_Detail.btnClick)中没有被处理!`;
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }
}
