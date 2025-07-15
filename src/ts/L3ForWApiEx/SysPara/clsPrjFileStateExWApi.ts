//import $ from "jquery";
import { clsPrjFileStateEN } from '@/ts/L0Entity/SysPara/clsPrjFileStateEN';
import { clsPrjFileStateENEx } from '@/ts/L0Entity/SysPara/clsPrjFileStateENEx';
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { Format } from '@/ts/PubFun/clsString';
export const prjFileStateEx_Controller = 'PrjFileStateExApi';
export const prjFileStateEx_ConstructorName = 'prjFileStateEx';
/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_CopyToEx)
 * @param objPrjFileStateENS:源对象
 * @returns 目标对象=>clsPrjFileStateEN:objPrjFileStateENT
 **/
export function PrjFileStateEx_CopyToEx(
  objPrjFileStateENS: clsPrjFileStateEN,
): clsPrjFileStateENEx {
  const objPrjFileStateENT = new clsPrjFileStateENEx();
  try {
    ObjectAssign(objPrjFileStateENT, objPrjFileStateENS);
    return objPrjFileStateENT;
  } catch (e) {
    const strMsg = Format('(errid:Watl000066)Copy表对象数据出错,{0}.', e);
    console.error(strMsg);
    alert(strMsg);
    return objPrjFileStateENT;
  }
}
