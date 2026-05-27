// //import * as $ from "jquery";
// //import * as QQ from "q";
// import { FunctionTemplateRela_DetailAi } from '@/viewsBase/PrjFunction/FunctionTemplateRela_DetailAi';
// import FunctionTemplateRelaCRUDAiEx from '@/views/PrjFunction/FunctionTemplateRelaCRUDAiEx';

// /* FunctionTemplateRela_DetailEx 的摘要说明。其中Q代表查询,U代表修改
//   (:GeneCode)
// */
// export default class FunctionTemplateRela_DetailAiEx extends FunctionTemplateRela_DetailAi {
//   /**
//    * 按钮单击,用于调用Js函数中btnClick
//    * (:Gen_Vue_TS_btnDetail_Click)
//    **/
//   public static btnDetail_Click(strCommandName: string, strKeyId: string) {
//     const strThisFuncName = this.btnDetail_Click.name;
//     const objFunctionTemplateRelaCRUD: FunctionTemplateRelaCRUDAiEx =
//       new FunctionTemplateRelaCRUDAiEx();
//     const objPage: FunctionTemplateRela_DetailAiEx = new FunctionTemplateRela_DetailAiEx(
//       objFunctionTemplateRelaCRUD,
//     );
//     console.log(strKeyId, strThisFuncName, objPage);
//     let strMsg;
//     switch (strCommandName) {
//       case 'Detail': //详细信息
//         objPage.btnDetailRecord_Click(strKeyId);
//         break;
//       default:
//         strMsg = `命令:${strCommandName}, 关键字: ${strKeyId}, 在函数(FunctionTemplateRela_Detail.btnClick)中没有被处理!`;
//         console.error(strMsg);
//         alert(strMsg);
//         break;
//     }
//   }
// }
