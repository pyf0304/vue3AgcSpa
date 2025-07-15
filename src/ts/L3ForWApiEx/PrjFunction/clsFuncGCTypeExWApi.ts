import { clsFuncGCTypeEN } from '@/ts/L0Entity/PrjFunction/clsFuncGCTypeEN';
import { clsFuncGCTypeENEx } from '@/ts/L0Entity/PrjFunction/clsFuncGCTypeENEx';
import { Format } from '@/ts/PubFun/clsString';
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';

export const funcGCTypeEx_Controller = 'FuncGCTypeExApi';
export const funcGCTypeEx_ConstructorName = 'funcGCTypeEx';

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_CopyToEx)
 * @param objFuncGCTypeENS:源对象
 * @returns 目标对象=>clsFuncGCTypeEN:objFuncGCTypeENT
 **/
export function FuncGCTypeEx_CopyToEx(objFuncGCTypeENS: clsFuncGCTypeEN): clsFuncGCTypeENEx {
  const strThisFuncName = FuncGCTypeEx_CopyToEx.name;
  const objFuncGCTypeENT = new clsFuncGCTypeENEx();
  try {
    ObjectAssign(objFuncGCTypeENT, objFuncGCTypeENS);
    return objFuncGCTypeENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      funcGCTypeEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objFuncGCTypeENT;
  }
}
