//import * as $ from "jquery";
//import * as QQ from "q";
import { CMProjectAppRela_DetailAi } from '@/viewsBase/CodeMan/CMProjectAppRela_DetailAi';
import CMProjectAppRelaCRUDAiEx from '@/views/CodeMan/CMProjectAppRelaCRUDAiEx';
import { CMProjectAppRelaKey } from '@/ts/L0Entity/CodeMan/clsCMProjectAppRelaEN';

/* CMProjectAppRela_DetailEx 的摘要说明。其中Q代表查询,U代表修改
  (:GeneCode)
*/
export default class CMProjectAppRela_DetailAiEx extends CMProjectAppRela_DetailAi {
  /**
   * 按钮单击,用于调用Js函数中btnClick
   * (:Gen_Vue_TS_btnDetail_Click)
   **/
  public btnDetail_Click(strCommandName: string, key: CMProjectAppRelaKey) {
    const strThisFuncName = this.btnDetail_Click.name;
    const objCMProjectAppRelaCRUD: CMProjectAppRelaCRUDAiEx = new CMProjectAppRelaCRUDAiEx();
    const objPage: CMProjectAppRela_DetailAiEx = new CMProjectAppRela_DetailAiEx(
      objCMProjectAppRelaCRUD,
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
        )}, 在函数(CMProjectAppRela_Detail.btnClick)中没有被处理!`;
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }
}
