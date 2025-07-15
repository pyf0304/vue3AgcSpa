import { clsViewFeatureFldsEN } from '@/ts/L0Entity/RegionManage/clsViewFeatureFldsEN';
import { clsViewFeatureFldsENEx } from '@/ts/L0Entity/RegionManage/clsViewFeatureFldsENEx';
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { Format } from '@/ts/PubFun/clsString';
export const vViewFeatureFldsEx_Controller = 'vViewFeatureFldsExApi';
export const vViewFeatureFldsEx_ConstructorName = 'vViewFeatureFldsEx';
/// <summary>
/// 把同一个类的对象,复制到另一个对象
/// (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_CopyToEx)
/// </summary>
/// <param name = "objvViewFeatureFldsENS">源对象</param>
/// <returns>目标对象=>clsvViewFeatureFldsEN:objvViewFeatureFldsENT</returns>
export function ViewFeatureFldsEx_CopyToEx(
  objViewFeatureFldsENS: clsViewFeatureFldsEN,
): clsViewFeatureFldsENEx {
  const objViewFeatureFldsENT = new clsViewFeatureFldsENEx();
  try {
    ObjectAssign(objViewFeatureFldsENT, objViewFeatureFldsENS);
    return objViewFeatureFldsENT;
  } catch (e: any) {
    const strMsg = Format('(errid:Watl000066)Copy表对象数据出错,${e}.');
    console.error(strMsg);
    alert(strMsg);
    return objViewFeatureFldsENT;
  }
}
