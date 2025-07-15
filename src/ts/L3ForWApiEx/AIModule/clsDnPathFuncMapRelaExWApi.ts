import { clsDnPathFuncMapRelaEN } from '@/ts/L0Entity/AIModule/clsDnPathFuncMapRelaEN';
import { clsDnPathFuncMapRelaENEx } from '@/ts/L0Entity/AIModule/clsDnPathFuncMapRelaENEx';
import { Format } from '@/ts/PubFun/clsString';
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';

export const dnPathFuncMapRelaEx_Controller = 'DnPathFuncMapRelaExApi';
export const dnPathFuncMapRelaEx_ConstructorName = 'dnPathFuncMapRelaEx';

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_CopyToEx)
 * @param objDnPathFuncMapRelaENS:源对象
 * @returns 目标对象=>clsDnPathFuncMapRelaEN:objDnPathFuncMapRelaENT
 **/
export function DnPathFuncMapRelaEx_CopyToEx(
  objDnPathFuncMapRelaENS: clsDnPathFuncMapRelaEN,
): clsDnPathFuncMapRelaENEx {
  const strThisFuncName = DnPathFuncMapRelaEx_CopyToEx.name;
  const objDnPathFuncMapRelaENT = new clsDnPathFuncMapRelaENEx();
  try {
    ObjectAssign(objDnPathFuncMapRelaENT, objDnPathFuncMapRelaENS);
    return objDnPathFuncMapRelaENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      dnPathFuncMapRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objDnPathFuncMapRelaENT;
  }
}
