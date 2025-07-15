//import $ from "jquery";
import { clsUserCodePrjMainPathEN } from '@/ts/L0Entity/SystemSet/clsUserCodePrjMainPathEN';
import { clsUserCodePrjMainPathENEx } from '@/ts/L0Entity/SystemSet/clsUserCodePrjMainPathENEx';
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { Format } from '@/ts/PubFun/clsString';
export const vUserCodePrjMainPathEx_Controller = 'vUserCodePrjMainPathExApi';
export const vUserCodePrjMainPathEx_ConstructorName = 'vUserCodePrjMainPathEx';

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_CopyToEx)
 * @param objvUserCodePrjMainPathENS:源对象
 * @returns 目标对象=>clsvUserCodePrjMainPathEN:objvUserCodePrjMainPathENT
 **/
export function UserCodePrjMainPathEx_CopyToEx(
  objvUserCodePrjMainPathENS: clsUserCodePrjMainPathEN,
): clsUserCodePrjMainPathENEx {
  const strThisFuncName = UserCodePrjMainPathEx_CopyToEx.name;
  const objvUserCodePrjMainPathENT = new clsUserCodePrjMainPathENEx();
  try {
    ObjectAssign(objvUserCodePrjMainPathENT, objvUserCodePrjMainPathENS);
    return objvUserCodePrjMainPathENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000066)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      vUserCodePrjMainPathEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objvUserCodePrjMainPathENT;
  }
}
