import { clsFeatureFuncRelaEN } from '@/ts/L0Entity/PrjFunction/clsFeatureFuncRelaEN';
import { clsFeatureFuncRelaENEx } from '@/ts/L0Entity/PrjFunction/clsFeatureFuncRelaENEx';
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';

import { Format } from '@/ts/PubFun/clsString';
export const featureFuncRelaEx_Controller = 'FeatureFuncRelaExApi';
export const featureFuncRelaEx_ConstructorName = 'featureFuncRelaEx';
/// <summary>
/// 把同一个类的对象,复制到该类的扩展对象
/// (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_CopyToEx)
/// </summary>
/// <param name = "objFeatureFuncRelaENS">源对象</param>
/// <param name = "objFeatureFuncRelaENT">目标对象</param>
export function FeatureFuncRelaEx_CopyToEx(
  objFeatureFuncRelaENS: clsFeatureFuncRelaEN,
): clsFeatureFuncRelaENEx {
  const objFeatureFuncRelaENT = new clsFeatureFuncRelaENEx();
  try {
    ObjectAssign(objFeatureFuncRelaENT, objFeatureFuncRelaENS);
    return objFeatureFuncRelaENT;
  } catch (e: any) {
    const strMsg = Format('(errid:WiTsCs0011)Copy表对象数据出错,${e}.');
    console.error(strMsg);
    alert(strMsg);
    return objFeatureFuncRelaENT;
  }
}
