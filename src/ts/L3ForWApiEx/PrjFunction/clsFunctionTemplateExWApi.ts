import { clsFunctionTemplateEN } from '@/ts/L0Entity/PrjFunction/clsFunctionTemplateEN';
import { clsFunctionTemplateENEx } from '@/ts/L0Entity/PrjFunction/clsFunctionTemplateENEx';
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';

import { Format } from '@/ts/PubFun/clsString';
export const functionTemplateEx_Controller = 'FunctionTemplateExApi';
export const functionTemplateEx_ConstructorName = 'functionTemplateEx';

/// <summary>
/// 把同一个类的对象,复制到该类的扩展对象
/// (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_CopyToEx)
/// </summary>
/// <param name = "objFunctionTemplateENS">源对象</param>
/// <param name = "objFunctionTemplateENT">目标对象</param>
export function FunctionTemplateEx_CopyToEx(
  objFunctionTemplateENS: clsFunctionTemplateEN,
): clsFunctionTemplateENEx {
  const objFunctionTemplateENT = new clsFunctionTemplateENEx();
  try {
    ObjectAssign(objFunctionTemplateENT, objFunctionTemplateENS);
    return objFunctionTemplateENT;
  } catch (e: any) {
    const strMsg = Format('(errid:WiTsCs0011)Copy表对象数据出错,${e}.');
    console.error(strMsg);
    alert(strMsg);
    return objFunctionTemplateENT;
  }
}
