import { clsFileResExcludePathEN } from '@/ts/L0Entity/ResourceMan/clsFileResExcludePathEN';
import { clsFileResExcludePathENEx } from '@/ts/L0Entity/ResourceMan/clsFileResExcludePathENEx';
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';

import { Format } from '@/ts/PubFun/clsString';
export const fileResExcludePathEx_Controller = 'FileResExcludePathExApi';
export const fileResExcludePathEx_ConstructorName = 'fileResExcludePathEx';

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_CopyToEx)
 * @param objFileResExcludePathENS:源对象
 * @returns 目标对象=>clsFileResExcludePathEN:objFileResExcludePathENT
 **/
export function FileResExcludePathEx_CopyToEx(
  objFileResExcludePathENS: clsFileResExcludePathEN,
): clsFileResExcludePathENEx {
  const strThisFuncName = FileResExcludePathEx_CopyToEx.name;
  const objFileResExcludePathENT = new clsFileResExcludePathENEx();
  try {
    ObjectAssign(objFileResExcludePathENT, objFileResExcludePathENS);
    return objFileResExcludePathENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000066)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      fileResExcludePathEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objFileResExcludePathENT;
  }
}
