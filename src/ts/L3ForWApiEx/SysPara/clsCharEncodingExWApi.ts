//import $ from "jquery";
import { clsCharEncodingEN } from '@/ts/L0Entity/SysPara/clsCharEncodingEN';
import { clsCharEncodingENEx } from '@/ts/L0Entity/SysPara/clsCharEncodingENEx';
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { Format } from '@/ts/PubFun/clsString';
export const charEncodingEx_Controller = 'CharEncodingExApi';
export const charEncodingEx_ConstructorName = 'charEncodingEx';

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_CopyToEx)
 * @param objCharEncodingENS:源对象
 * @returns 目标对象=>clsCharEncodingEN:objCharEncodingENT
 **/
export function CharEncodingEx_CopyToEx(
  objCharEncodingENS: clsCharEncodingEN,
): clsCharEncodingENEx {
  const strThisFuncName = CharEncodingEx_CopyToEx.name;
  const objCharEncodingENT = new clsCharEncodingENEx();
  try {
    ObjectAssign(objCharEncodingENT, objCharEncodingENS);
    return objCharEncodingENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000066)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      charEncodingEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objCharEncodingENT;
  }
}
