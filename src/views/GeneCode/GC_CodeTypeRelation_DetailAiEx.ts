//import * as $ from "jquery";
//import * as QQ from "q";
import { GC_CodeTypeRelation_DetailAi } from '@/viewsBase/GeneCode/GC_CodeTypeRelation_DetailAi';
import { GC_CodeTypeRelationKey } from '@/ts/L0Entity/GeneCode/clsGC_CodeTypeRelationEN';

/* GC_CodeTypeRelation_DetailEx 的摘要说明。其中Q代表查询,U代表修改
  (:GeneCode)
*/
export default class GC_CodeTypeRelation_DetailAiEx extends GC_CodeTypeRelation_DetailAi {
  /**
   * 按钮单击,用于调用Js函数中btnClick
   * (:Gen_Vue_TS_btnDetail_Click)
   **/
  public btnDetail_Click(strCommandName: string, key: GC_CodeTypeRelationKey) {
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
        )}, 在函数(GC_CodeTypeRelation_Detail.btnClick)中没有被处理!`;
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }
}
