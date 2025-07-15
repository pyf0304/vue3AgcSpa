/// <summary>
/// 按钮样式(ButtonStyle)
/// (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
/// </summary>
/**
 * Created by  on 2020年06月14日.
 * 注意:该类必须与调用界面处于同一个包，否则调用不成功!
 */

import { clsButtonStyleEN } from '@/ts/L0Entity/SysPara/clsButtonStyleEN';
import { clsButtonStyleENEx } from '@/ts/L0Entity/SysPara/clsButtonStyleENEx';
export const buttonStyleEx_Controller = 'ButtonStyleExApi';
export const buttonStyleEx_ConstructorName = 'buttonStyleEx';

/// <summary>
/// 把同一个类的对象,复制到该类的扩展对象
/// (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_CopyToEx)
/// </summary>
/// <param name = "objButtonStyleENS">源对象</param>
/// <param name = "objButtonStyleENT">目标对象</param>
export function ButtonStyleEx_CopyToEx(objButtonStyleENS: clsButtonStyleEN): clsButtonStyleENEx {
  const objButtonStyleENT: clsButtonStyleENEx = new clsButtonStyleENEx();
  objButtonStyleENT.buttonStyleId = objButtonStyleENS.buttonStyleId; //按钮样式Id
  objButtonStyleENT.buttonStyleName = objButtonStyleENS.buttonStyleName; //按钮样式名
  objButtonStyleENT.cssClass = objButtonStyleENS.cssClass; //样式表
  objButtonStyleENT.style = objButtonStyleENS.style; //类型
  objButtonStyleENT.runat = objButtonStyleENS.runat; //运行在
  objButtonStyleENT.fontSize = objButtonStyleENS.fontSize; //字号
  objButtonStyleENT.fontName = objButtonStyleENS.fontName; //字体
  objButtonStyleENT.width = objButtonStyleENS.width; //宽
  objButtonStyleENT.height = objButtonStyleENS.height; //高度
  objButtonStyleENT.styleZindex = objButtonStyleENS.styleZindex; //styleZindex
  objButtonStyleENT.styleLeft = objButtonStyleENS.styleLeft; //styleLeft
  objButtonStyleENT.stylePosition = objButtonStyleENS.stylePosition; //stylePosition
  objButtonStyleENT.styleTop = objButtonStyleENS.styleTop; //styleTop
  objButtonStyleENT.sfUpdFldSetStr = objButtonStyleENS.updFldString; //专门用于记录某字段属性是否修改
  objButtonStyleENT.sfFldComparisonOp = objButtonStyleENS.sfFldComparisonOp; //专门用于记录条件对象某字段的比较运算符
  return objButtonStyleENT;
}
