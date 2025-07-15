import { clsvTabCheckStatus_SimEN } from '@/ts/L0Entity/LogManage/clsvTabCheckStatus_SimEN';
import { clsvTabCheckStatus_SimENEx } from '@/ts/L0Entity/LogManage/clsvTabCheckStatus_SimENEx';
import { Format } from '@/ts/PubFun/clsString';
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';

export const vTabCheckStatus_SimEx_Controller = 'vTabCheckStatus_SimExApi';
export const vTabCheckStatus_SimEx_ConstructorName = 'vTabCheckStatus_SimEx';

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_CopyToEx)
 * @param objvTabCheckStatus_SimENS:源对象
 * @returns 目标对象=>clsvTabCheckStatus_SimEN:objvTabCheckStatus_SimENT
 **/
export function vTabCheckStatus_SimEx_CopyToEx(
  objvTabCheckStatus_SimENS: clsvTabCheckStatus_SimEN,
): clsvTabCheckStatus_SimENEx {
  const strThisFuncName = vTabCheckStatus_SimEx_CopyToEx.name;
  const objvTabCheckStatus_SimENT = new clsvTabCheckStatus_SimENEx();
  try {
    ObjectAssign(objvTabCheckStatus_SimENT, objvTabCheckStatus_SimENS);
    return objvTabCheckStatus_SimENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      vTabCheckStatus_SimEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objvTabCheckStatus_SimENT;
  }
}
