import { clsFunctionTypeEN } from '@/ts/L0Entity/PrjFunction/clsFunctionTypeEN';
import { clsFunctionTypeENEx } from '@/ts/L0Entity/PrjFunction/clsFunctionTypeENEx';
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';

import { Format } from '@/ts/PubFun/clsString';
export const functionTypeEx_Controller = 'FunctionTypeExApi';
export const functionTypeEx_ConstructorName = 'functionTypeEx';

/// <summary>
/// 把同一个类的对象,复制到该类的扩展对象
/// (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_CopyToEx)
/// </summary>
/// <param name = "objFunctionTypeENS">源对象</param>
/// <param name = "objFunctionTypeENT">目标对象</param>
export function FunctionTypeEx_CopyToEx(
  objFunctionTypeENS: clsFunctionTypeEN,
): clsFunctionTypeENEx {
  const objFunctionTypeENT = new clsFunctionTypeENEx();
  try {
    ObjectAssign(objFunctionTypeENT, objFunctionTypeENS);
    return objFunctionTypeENT;
  } catch (e: any) {
    const strMsg = Format('(errid:WiTsCs0011)Copy表对象数据出错,${e}.');
    console.error(strMsg);
    alert(strMsg);
    return objFunctionTypeENT;
  }
}
