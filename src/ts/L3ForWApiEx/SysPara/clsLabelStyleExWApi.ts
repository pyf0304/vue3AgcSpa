/// <summary>
/// 标签样式(LabelStyle)
/// (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
/// </summary>
/**
 * Created by  on 2020年06月14日.
 * 注意:该类必须与调用界面处于同一个包，否则调用不成功!
 */
///// <reference path="../../../scripts/typings/jquery/jquery.d.ts" />
///// <reference path="../../../scripts/typings/q/q.d.ts" />
///// <reference path="../../../scripts/typings/handlebars/handlebars.d.ts" />
import { clsLabelStyleEN } from '@/ts/L0Entity/SysPara/clsLabelStyleEN';
import { clsLabelStyleENEx } from '@/ts/L0Entity/SysPara/clsLabelStyleENEx';
export const labelStyleEx_Controller = 'LabelStyleExApi';
export const labelStyleEx_ConstructorName = 'labelStyleEx';
/// <summary>
/// 把同一个类的对象,复制到该类的扩展对象
/// (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_CopyToEx)
/// </summary>
/// <param name = "objLabelStyleENS">源对象</param>
/// <param name = "objLabelStyleENT">目标对象</param>
export function LabelStyleEx_CopyToEx(objLabelStyleENS: clsLabelStyleEN): clsLabelStyleENEx {
  const objLabelStyleENT: clsLabelStyleENEx = new clsLabelStyleENEx();
  objLabelStyleENT.labelStyleId = objLabelStyleENS.labelStyleId; //labelStyleId
  objLabelStyleENT.labelStyleName = objLabelStyleENS.labelStyleName; //labelStyleName
  objLabelStyleENT.style = objLabelStyleENS.style; //类型
  objLabelStyleENT.runat = objLabelStyleENS.runat; //运行在
  objLabelStyleENT.fontSize = objLabelStyleENS.fontSize; //字号
  objLabelStyleENT.fontName = objLabelStyleENS.fontName; //字体
  objLabelStyleENT.width = objLabelStyleENS.width; //宽
  objLabelStyleENT.height = objLabelStyleENS.height; //高度
  objLabelStyleENT.styleZindex = objLabelStyleENS.styleZindex; //styleZindex
  objLabelStyleENT.styleLeft = objLabelStyleENS.styleLeft; //styleLeft
  objLabelStyleENT.stylePosition = objLabelStyleENS.stylePosition; //stylePosition
  objLabelStyleENT.styleTop = objLabelStyleENS.styleTop; //styleTop
  objLabelStyleENT.sfUpdFldSetStr = objLabelStyleENS.updFldString; //专门用于记录某字段属性是否修改
  objLabelStyleENT.sfFldComparisonOp = objLabelStyleENS.sfFldComparisonOp; //专门用于记录条件对象某字段的比较运算符
  return objLabelStyleENT;
}
