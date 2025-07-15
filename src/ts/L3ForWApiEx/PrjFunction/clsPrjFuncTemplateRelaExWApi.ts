import { clsPrjFuncTemplateRelaEN } from '@/ts/L0Entity/PrjFunction/clsPrjFuncTemplateRelaEN';
import { clsPrjFuncTemplateRelaENEx } from '@/ts/L0Entity/PrjFunction/clsPrjFuncTemplateRelaENEx';
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { Format } from '@/ts/PubFun/clsString';
export const prjFuncTemplateRelaEx_Controller = 'PrjFuncTemplateRelaExApi';
export const prjFuncTemplateRelaEx_ConstructorName = 'prjFuncTemplateRelaEx';
/// <summary>
/// 把同一个类的对象,复制到该类的扩展对象
/// (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_CopyToEx)
/// </summary>
/// <param name = "objPrjFuncTemplateRelaENS">源对象</param>
/// <param name = "objPrjFuncTemplateRelaENT">目标对象</param>
export function PrjFuncTemplateRelaEx_CopyToEx(
  objPrjFuncTemplateRelaENS: clsPrjFuncTemplateRelaEN,
): clsPrjFuncTemplateRelaENEx {
  const objPrjFuncTemplateRelaENT = new clsPrjFuncTemplateRelaENEx();
  try {
    ObjectAssign(objPrjFuncTemplateRelaENT, objPrjFuncTemplateRelaENS);
    return objPrjFuncTemplateRelaENT;
  } catch (e: any) {
    const strMsg = Format('(errid:WiTsCs0011)Copy表对象数据出错,${e}.');
    console.error(strMsg);
    alert(strMsg);
    return objPrjFuncTemplateRelaENT;
  }
}
