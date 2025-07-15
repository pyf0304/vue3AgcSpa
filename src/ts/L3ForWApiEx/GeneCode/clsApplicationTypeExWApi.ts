import { ApplicationType_SortFunByKey } from '../..//L3ForWApi/GeneCode/clsApplicationTypeWApi';
import { ProgLangType_func } from '../..//L3ForWApi/SysPara/clsProgLangTypeWApi';
import { clsApplicationTypeEN } from '@/ts/L0Entity/GeneCode/clsApplicationTypeEN';
import { clsApplicationTypeENEx } from '@/ts/L0Entity/GeneCode/clsApplicationTypeENEx';
import { clsProgLangTypeEN } from '@/ts/L0Entity/SysPara/clsProgLangTypeEN';
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
export const applicationTypeEx_Controller = 'ApplicationTypeExApi';
export const applicationTypeEx_ConstructorName = 'applicationTypeEx';

/// <summary>
/// 排序函数。根据关键字字段的值进行比较
/// 作者:pyf
/// 日期:20210322172302
/// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
/// </summary>
/// <param name = "a">比较的第1个对象</param>
/// <param name = "b">比较的第1个对象</param>
/// <returns>返回两个对象比较的结果</returns>
export function ApplicationTypeEx_SortFunByOrderNum(
  a: clsApplicationTypeEN,
  b: clsApplicationTypeEN,
): number {
  return a.orderNum - b.orderNum;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_CopyToEx)
 * @param objApplicationTypeENS:源对象
 * @returns 目标对象=>clsApplicationTypeEN:objApplicationTypeENT
 **/
export function ApplicationTypeEx_CopyToEx(
  objApplicationTypeENS: clsApplicationTypeEN,
): clsApplicationTypeENEx {
  const strThisFuncName = ApplicationTypeEx_CopyToEx.name;
  const objApplicationTypeENT = new clsApplicationTypeENEx();
  try {
    ObjectAssign(objApplicationTypeENT, objApplicationTypeENS);
    return objApplicationTypeENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      applicationTypeEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objApplicationTypeENT;
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
export function ApplicationTypeEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  // const strThisFuncName = 'SortFunByKey';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsApplicationTypeENEx.con_ProgLangTypeName:
        return (a: clsApplicationTypeENEx, b: clsApplicationTypeENEx) => {
          return a.progLangTypeName.localeCompare(b.progLangTypeName);
        };
      default:
        return ApplicationType_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsApplicationTypeENEx.con_ProgLangTypeName:
        return (a: clsApplicationTypeENEx, b: clsApplicationTypeENEx) => {
          return b.progLangTypeName.localeCompare(a.progLangTypeName);
        };
      default:
        return ApplicationType_SortFunByKey(strKey, AscOrDesc);
    }
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
export function ApplicationTypeEx_FuncMapByFldName(
  strFldName: string,
  objApplicationTypeEx: clsApplicationTypeENEx,
) {
  const strThisFuncName = ApplicationTypeEx_FuncMapByFldName.name;
  let strMsg = '';
  //如果是本表中字段，不需要映射
  const arrFldName = clsApplicationTypeEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsApplicationTypeENEx.con_ProgLangTypeName:
      return ApplicationTypeEx_FuncMap_ProgLangTypeName(objApplicationTypeEx);
    default:
      strMsg = Format(
        '扩展字段:[{0}]在字段值函数映射中不存在！(in {1})',
        strFldName,
        strThisFuncName,
      );
      console.error(strMsg);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objApplicationTypeS:源对象
 **/
export async function ApplicationTypeEx_FuncMap_ProgLangTypeName(
  objApplicationType: clsApplicationTypeENEx,
) {
  const strThisFuncName = ApplicationTypeEx_FuncMap_ProgLangTypeName.name;
  try {
    if (IsNullOrEmpty(objApplicationType.progLangTypeName) == true) {
      const ProgLangType_ProgLangTypeId = objApplicationType.progLangTypeId;
      const ProgLangType_ProgLangTypeName = await ProgLangType_func(
        clsProgLangTypeEN.con_ProgLangTypeId,
        clsProgLangTypeEN.con_ProgLangTypeName,
        ProgLangType_ProgLangTypeId,
      );
      objApplicationType.progLangTypeName = ProgLangType_ProgLangTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000109)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      applicationTypeEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
