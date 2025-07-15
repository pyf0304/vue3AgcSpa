/// <summary>
/// 一般控件样式(GenCtlStyle)
/// (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
/// </summary>
/**
 * Created by  on 2020年06月14日.
 * 注意:该类必须与调用界面处于同一个包，否则调用不成功!
 */
///// <reference path="../../../scripts/typings/jquery/jquery.d.ts" />
///// <reference path="../../../scripts/typings/q/q.d.ts" />
///// <reference path="../../../scripts/typings/handlebars/handlebars.d.ts" />
import { clsGenCtlStyleEN } from '@/ts/L0Entity/ViewControlManage/clsGenCtlStyleEN';
import { clsGenCtlStyleENEx } from '@/ts/L0Entity/ViewControlManage/clsGenCtlStyleENEx';
export const genCtlStyleEx_Controller = 'GenCtlStyleExApi';
export const genCtlStyleEx_ConstructorName = 'genCtlStyleEx';
/// <summary>
/// 把同一个类的对象,复制到该类的扩展对象
/// (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_CopyToEx)
/// </summary>
/// <param name = "objGenCtlStyleENS">源对象</param>
/// <param name = "objGenCtlStyleENT">目标对象</param>
export function GenCtlStyleEx_CopyToEx(objGenCtlStyleENS: clsGenCtlStyleEN): clsGenCtlStyleENEx {
  const objGenCtlStyleENT: clsGenCtlStyleENEx = new clsGenCtlStyleENEx();
  objGenCtlStyleENT.genCtlStyleId = objGenCtlStyleENS.genCtlStyleId; //genCtlStyleId
  objGenCtlStyleENT.genCtlStyleName = objGenCtlStyleENS.genCtlStyleName; //genCtlStyleName
  objGenCtlStyleENT.style = objGenCtlStyleENS.style; //类型
  objGenCtlStyleENT.runat = objGenCtlStyleENS.runat; //运行在
  objGenCtlStyleENT.fontSize = objGenCtlStyleENS.fontSize; //字号
  objGenCtlStyleENT.fontName = objGenCtlStyleENS.fontName; //字体
  objGenCtlStyleENT.width = objGenCtlStyleENS.width; //宽
  objGenCtlStyleENT.height = objGenCtlStyleENS.height; //高度
  objGenCtlStyleENT.textMode = objGenCtlStyleENS.textMode; //textMode
  objGenCtlStyleENT.styleZindex = objGenCtlStyleENS.styleZindex; //styleZindex
  objGenCtlStyleENT.styleLeft = objGenCtlStyleENS.styleLeft; //styleLeft
  objGenCtlStyleENT.stylePosition = objGenCtlStyleENS.stylePosition; //stylePosition
  objGenCtlStyleENT.styleTop = objGenCtlStyleENS.styleTop; //styleTop
  objGenCtlStyleENT.sfUpdFldSetStr = objGenCtlStyleENS.updFldString; //专门用于记录某字段属性是否修改
  objGenCtlStyleENT.sfFldComparisonOp = objGenCtlStyleENS.sfFldComparisonOp; //专门用于记录条件对象某字段的比较运算符
  return objGenCtlStyleENT;
}
