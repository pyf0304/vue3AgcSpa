import { clsCheckStyleEN } from '@/ts/L0Entity/ViewControlManage/clsCheckStyleEN';
import { clsCheckStyleENEx } from '@/ts/L0Entity/ViewControlManage/clsCheckStyleENEx';
export const checkStyleEx_Controller = 'CheckStyleExApi';
export const checkStyleEx_ConstructorName = 'checkStyleEx';
/// <summary>
/// 把同一个类的对象,复制到该类的扩展对象
/// (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_CopyToEx)
/// </summary>
/// <param name = "objCheckStyleENS">源对象</param>
/// <param name = "objCheckStyleENT">目标对象</param>
export function CheckStyleEx_CopyToEx(objCheckStyleENS: clsCheckStyleEN): clsCheckStyleENEx {
  const objCheckStyleENT: clsCheckStyleENEx = new clsCheckStyleENEx();
  objCheckStyleENT.checkStyleId = objCheckStyleENS.checkStyleId; //checkStyleId
  objCheckStyleENT.checkStyleName = objCheckStyleENS.checkStyleName; //checkStyleName
  objCheckStyleENT.style = objCheckStyleENS.style; //类型
  objCheckStyleENT.runat = objCheckStyleENS.runat; //运行在
  objCheckStyleENT.fontSize = objCheckStyleENS.fontSize; //字号
  objCheckStyleENT.fontName = objCheckStyleENS.fontName; //字体
  objCheckStyleENT.width = objCheckStyleENS.width; //宽
  objCheckStyleENT.height = objCheckStyleENS.height; //高度
  objCheckStyleENT.styleZindex = objCheckStyleENS.styleZindex; //style_Zindex
  objCheckStyleENT.styleLeft = objCheckStyleENS.styleLeft; //style_Left
  objCheckStyleENT.stylePosition = objCheckStyleENS.stylePosition; //style_Position
  objCheckStyleENT.styleTop = objCheckStyleENS.styleTop; //style_Top
  objCheckStyleENT.sfUpdFldSetStr = objCheckStyleENS.updFldString; //专门用于记录某字段属性是否修改
  objCheckStyleENT.sfFldComparisonOp = objCheckStyleENS.sfFldComparisonOp; //专门用于记录条件对象某字段的比较运算符
  return objCheckStyleENT;
}
