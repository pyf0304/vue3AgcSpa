import { clsCharEncodingEN } from '@/ts/L0Entity/SysPara/clsCharEncodingEN';
import { clsProgLangTypeEN } from '@/ts/L0Entity/SysPara/clsProgLangTypeEN';
import { clsProgLangTypeENEx } from '@/ts/L0Entity/SysPara/clsProgLangTypeENEx';
import { CharEncoding_func } from '@/ts/L3ForWApi/SysPara/clsCharEncodingWApi';
import { ProgLangType_SortFunByKey } from '@/ts/L3ForWApi/SysPara/clsProgLangTypeWApi';
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';

export const progLangTypeEx_Controller = 'ProgLangTypeExApi';
export const progLangTypeEx_ConstructorName = 'progLangTypeEx';
/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_CopyToEx)
 * @param objProgLangTypeENS:源对象
 * @returns 目标对象=>clsProgLangTypeEN:objProgLangTypeENT
 **/
export function ProgLangTypeEx_CopyToEx(
  objProgLangTypeENS: clsProgLangTypeEN,
): clsProgLangTypeENEx {
  const strThisFuncName = ProgLangTypeEx_CopyToEx.name;
  const objProgLangTypeENT = new clsProgLangTypeENEx();
  try {
    ObjectAssign(objProgLangTypeENT, objProgLangTypeENS);
    return objProgLangTypeENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      progLangTypeEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objProgLangTypeENT;
  }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:潘以锋
 * 日期:00-00-00
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function ProgLangTypeEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  // const strThisFuncName = 'SortFunByKey';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsProgLangTypeENEx.con_CharEncodingName:
        return (a: clsProgLangTypeENEx, b: clsProgLangTypeENEx) => {
          return a.charEncodingName.localeCompare(b.charEncodingName);
        };
      default:
        return ProgLangType_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsProgLangTypeENEx.con_CharEncodingName:
        return (a: clsProgLangTypeENEx, b: clsProgLangTypeENEx) => {
          return b.charEncodingName.localeCompare(a.charEncodingName);
        };
      default:
        return ProgLangType_SortFunByKey(strKey, AscOrDesc);
    }
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objProgLangTypeS:源对象
 **/
export async function ProgLangTypeEx_FuncMap_CharEncodingName(
  objProgLangType: clsProgLangTypeENEx,
) {
  const strThisFuncName = ProgLangTypeEx_FuncMap_CharEncodingName.name;
  try {
    if (IsNullOrEmpty(objProgLangType.charEncodingName) == true) {
      const CharEncoding_CharEncodingId = objProgLangType.charEncodingId;
      const CharEncoding_CharEncodingName = await CharEncoding_func(
        clsCharEncodingEN.con_CharEncodingId,
        clsCharEncodingEN.con_CharEncodingName,
        CharEncoding_CharEncodingId,
      );
      objProgLangType.charEncodingName = CharEncoding_CharEncodingName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000072)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      progLangTypeEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:潘以锋
 * 日期:00-00-00
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function ProgLangTypeEx_FuncMapByFldName(
  strFldName: string,
  objProgLangTypeEx: clsProgLangTypeENEx,
) {
  const strThisFuncName = ProgLangTypeEx_FuncMapByFldName.name;
  let strMsg = '';
  //如果是本表中字段，不需要映射
  const arrFldName = clsProgLangTypeEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsProgLangTypeENEx.con_CharEncodingName:
      return ProgLangTypeEx_FuncMap_CharEncodingName(objProgLangTypeEx);
    default:
      strMsg = Format(
        '扩展字段:[{0}]在字段值函数映射中不存在！(in {1})',
        strFldName,
        strThisFuncName,
      );
      console.error(strMsg);
  }
}
