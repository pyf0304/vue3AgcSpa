import { clsViewGroupEN } from '@/ts/L0Entity/PrjInterface/clsViewGroupEN';
import { clsViewGroupENEx } from '@/ts/L0Entity/PrjInterface/clsViewGroupENEx';
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { Format } from '@/ts/PubFun/clsString';
export const viewGroupEx_Controller = 'ViewGroupExApi';
export const viewGroupEx_ConstructorName = 'viewGroupEx';

/// <summary>
/// 把同一个类的对象,复制到该类的扩展对象
/// (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_CopyToEx)
/// </summary>
/// <param name = "objViewGroupENS">源对象</param>
/// <param name = "objViewGroupENT">目标对象</param>
export function ViewGroupEx_CopyToEx(objViewGroupENS: clsViewGroupEN): clsViewGroupENEx {
  const objViewGroupENT = new clsViewGroupENEx();
  try {
    ObjectAssign(objViewGroupENT, objViewGroupENS);
    return objViewGroupENT;
  } catch (e: any) {
    const strMsg = Format('(errid:WiTsCs0011)Copy表对象数据出错,${e}.');
    console.error(strMsg);
    alert(strMsg);
    return objViewGroupENT;
  }
}
