//import $ from "jquery";
import { clsDataNodeDirectMapEN } from '@/ts/L0Entity/AIModule/clsDataNodeDirectMapEN';
import { clsDataNodeDirectMapENEx } from '@/ts/L0Entity/AIModule/clsDataNodeDirectMapENEx';
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';

import { Format } from '@/ts/PubFun/clsString';

export const dataNodeDirectMapEx_Controller = 'DataNodeDirectMapExApi';
export const dataNodeDirectMapEx_ConstructorName = 'dataNodeDirectMapEx';

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_CopyToEx)
 * @param objDataNodeDirectMapENS:源对象
 * @returns 目标对象=>clsDataNodeDirectMapEN:objDataNodeDirectMapENT
 **/
export function DataNodeDirectMapEx_CopyToEx(
  objDataNodeDirectMapENS: clsDataNodeDirectMapEN,
): clsDataNodeDirectMapENEx {
  const strThisFuncName = DataNodeDirectMapEx_CopyToEx.name;
  const objDataNodeDirectMapENT = new clsDataNodeDirectMapENEx();
  try {
    ObjectAssign(objDataNodeDirectMapENT, objDataNodeDirectMapENS);
    return objDataNodeDirectMapENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000066)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      dataNodeDirectMapEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objDataNodeDirectMapENT;
  }
}
