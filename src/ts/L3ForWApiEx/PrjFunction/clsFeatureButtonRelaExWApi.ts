import { clsApplicationTypeEN } from '@/ts/L0Entity/GeneCode/clsApplicationTypeEN';
import { clsButtonTabEN } from '@/ts/L0Entity/PrjFunction/clsButtonTabEN';
import { clsFeatureButtonRelaEN } from '@/ts/L0Entity/PrjFunction/clsFeatureButtonRelaEN';
import { clsFeatureButtonRelaENEx } from '@/ts/L0Entity/PrjFunction/clsFeatureButtonRelaENEx';
import { clsPrjFeatureEN } from '@/ts/L0Entity/PrjFunction/clsPrjFeatureEN';
import { clsPrjFeatureTypeEN } from '@/ts/L0Entity/PrjFunction/clsPrjFeatureTypeEN';
import { ApplicationType_func } from '@/ts/L3ForWApi/GeneCode/clsApplicationTypeWApi';
import { ButtonTab_func } from '@/ts/L3ForWApi/PrjFunction/clsButtonTabWApi';
import {
  FeatureButtonRela_GetObjLstByPagerAsync,
  FeatureButtonRela_GetObjLstCache,
  FeatureButtonRela_SortFunByKey,
} from '@/ts/L3ForWApi/PrjFunction/clsFeatureButtonRelaWApi';
import { PrjFeatureType_func } from '@/ts/L3ForWApi/PrjFunction/clsPrjFeatureTypeWApi';
import { vPrjFeatureSim_func } from '@/ts/L3ForWApi/PrjFunction/clsvPrjFeatureSimWApi';

import { GetSortExpressInfo, ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const featureButtonRelaEx_Controller = 'FeatureButtonRelaExApi';
export const featureButtonRelaEx_ConstructorName = 'featureButtonRelaEx';
/// <summary>
/// 把同一个类的对象,复制到该类的扩展对象
/// (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_CopyToEx)
/// </summary>
/// <param name = "objFeatureButtonRelaENS">源对象</param>
/// <param name = "objFeatureButtonRelaENT">目标对象</param>
export function FeatureButtonRelaEx_CopyToEx(
  objFeatureButtonRelaENS: clsFeatureButtonRelaEN,
): clsFeatureButtonRelaENEx {
  const objFeatureButtonRelaENT = new clsFeatureButtonRelaENEx();
  try {
    ObjectAssign(objFeatureButtonRelaENT, objFeatureButtonRelaENS);
    return objFeatureButtonRelaENT;
  } catch (e: any) {
    const strMsg = Format('(errid:WiTsCs0011)Copy表对象数据出错,${e}.');
    console.error(strMsg);
    alert(strMsg);
    return objFeatureButtonRelaENT;
  }
}
/// <summary>
/// 根据功能获取相关对象列表, 从缓存的对象列表中获取.没有就返回null.
/// </summary>
/// <param name = "intApplicationTypeId">应用类型Id</param>
/// <param name = "strFeatureId">功能Id</param>
/// <returns>根据关键字获取的对象</returns>
export async function FeatureButtonRelaEx_GetObjLstByFeatureIdCacheEx(
  intApplicationTypeId: number,
  strFeatureId: string,
): Promise<Array<clsFeatureButtonRelaEN>> {
  //初始化列表缓存

  const arrObjLstCache = await FeatureButtonRela_GetObjLstCache();

  const arrFeatureButtonRelaObjLst_Sel = arrObjLstCache.filter(
    (x) => x.applicationTypeId == intApplicationTypeId && x.featureId == strFeatureId,
  );

  return arrFeatureButtonRelaObjLst_Sel;
}

///**
//* 把一个扩展类的部分属性进行函数转换
//* (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
//* @param objFeatureButtonRelaS:源对象
//**/
//export async function FeatureButtonRelaEx_FuncMap1(objFeatureButtonRela: clsFeatureButtonRelaENEx) {
//    const strThisFuncName = FeatureButtonRelaEx_FuncMap.name;

//}
/**
 * 通过函数映射把对象列表转换为扩展对象列表.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByFuncMap)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function FeatureButtonRelaEx_GetObjExLstByFuncMap(
  arrFeatureButtonRelaObjLst: Array<clsFeatureButtonRelaEN>,
): Promise<Array<clsFeatureButtonRelaENEx>> {
  // const strThisFuncName = 'GetObjExLstByFuncMap';
  const arrFeatureButtonRelaExObjLst: Array<clsFeatureButtonRelaENEx> = [];
  for (const objInFor of arrFeatureButtonRelaObjLst) {
    const objEx = FeatureButtonRelaEx_CopyToEx(objInFor);
    arrFeatureButtonRelaExObjLst.push(objEx);
  }
  for (const objInFor of arrFeatureButtonRelaExObjLst) {
    await FeatureButtonRelaEx_FuncMapByFldName(clsFeatureButtonRelaEN.con_EventFuncName, objInFor);
  }
  return arrFeatureButtonRelaExObjLst;
}

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function FeatureButtonRelaEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsFeatureButtonRelaENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrFeatureButtonRelaObjLst = await FeatureButtonRela_GetObjLstByPagerAsync(objPagerPara);
  const arrFeatureButtonRelaExObjLst = arrFeatureButtonRelaObjLst.map(FeatureButtonRelaEx_CopyToEx);

  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsFeatureButtonRelaEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrFeatureButtonRelaExObjLst) {
      await FeatureButtonRelaEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrFeatureButtonRelaExObjLst.length == 0) return arrFeatureButtonRelaExObjLst;
  let arrFeatureButtonRela_Sel: Array<clsFeatureButtonRelaENEx> = arrFeatureButtonRelaExObjLst;
  try {
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrFeatureButtonRela_Sel = arrFeatureButtonRela_Sel.sort(
        FeatureButtonRelaEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrFeatureButtonRela_Sel = arrFeatureButtonRela_Sel.sort(objPagerPara.sortFun);
    }

    return arrFeatureButtonRela_Sel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      featureButtonRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsFeatureButtonRelaENEx>();
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
export function FeatureButtonRelaEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  // const strThisFuncName = 'SortFunByKey';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsFeatureButtonRelaENEx.con_OrderNum:
        return (a: clsFeatureButtonRelaENEx, b: clsFeatureButtonRelaENEx) => {
          return a.orderNum - b.orderNum;
        };
      case clsFeatureButtonRelaENEx.con_ApplicationTypeName:
        return (a: clsFeatureButtonRelaENEx, b: clsFeatureButtonRelaENEx) => {
          return a.applicationTypeName.localeCompare(b.applicationTypeName);
        };
      case clsFeatureButtonRelaENEx.con_ApplicationTypeENName:
        return (a: clsFeatureButtonRelaENEx, b: clsFeatureButtonRelaENEx) => {
          return a.applicationTypeENName.localeCompare(b.applicationTypeENName);
        };
      case clsFeatureButtonRelaENEx.con_FeatureName:
        return (a: clsFeatureButtonRelaENEx, b: clsFeatureButtonRelaENEx) => {
          return a.featureName.localeCompare(b.featureName);
        };
      case clsFeatureButtonRelaENEx.con_FeatureTypeName:
        return (a: clsFeatureButtonRelaENEx, b: clsFeatureButtonRelaENEx) => {
          return a.featureTypeName.localeCompare(b.featureTypeName);
        };
      case clsFeatureButtonRelaENEx.con_ButtonName:
        return (a: clsFeatureButtonRelaENEx, b: clsFeatureButtonRelaENEx) => {
          return a.buttonName.localeCompare(b.buttonName);
        };
      case clsFeatureButtonRelaENEx.con_Text:
        return (a: clsFeatureButtonRelaENEx, b: clsFeatureButtonRelaENEx) => {
          return a.text.localeCompare(b.text);
        };
      default:
        return FeatureButtonRela_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsFeatureButtonRelaENEx.con_OrderNum:
        return (a: clsFeatureButtonRelaENEx, b: clsFeatureButtonRelaENEx) => {
          return b.orderNum - a.orderNum;
        };
      case clsFeatureButtonRelaENEx.con_ApplicationTypeName:
        return (a: clsFeatureButtonRelaENEx, b: clsFeatureButtonRelaENEx) => {
          return b.applicationTypeName.localeCompare(a.applicationTypeName);
        };
      case clsFeatureButtonRelaENEx.con_ApplicationTypeENName:
        return (a: clsFeatureButtonRelaENEx, b: clsFeatureButtonRelaENEx) => {
          return b.applicationTypeENName.localeCompare(a.applicationTypeENName);
        };
      case clsFeatureButtonRelaENEx.con_FeatureName:
        return (a: clsFeatureButtonRelaENEx, b: clsFeatureButtonRelaENEx) => {
          return b.featureName.localeCompare(a.featureName);
        };
      case clsFeatureButtonRelaENEx.con_FeatureTypeName:
        return (a: clsFeatureButtonRelaENEx, b: clsFeatureButtonRelaENEx) => {
          return b.featureTypeName.localeCompare(a.featureTypeName);
        };
      case clsFeatureButtonRelaENEx.con_ButtonName:
        return (a: clsFeatureButtonRelaENEx, b: clsFeatureButtonRelaENEx) => {
          return b.buttonName.localeCompare(a.buttonName);
        };
      case clsFeatureButtonRelaENEx.con_Text:
        return (a: clsFeatureButtonRelaENEx, b: clsFeatureButtonRelaENEx) => {
          return b.text.localeCompare(a.text);
        };
      default:
        return FeatureButtonRela_SortFunByKey(strKey, AscOrDesc);
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
export function FeatureButtonRelaEx_FuncMapByFldName(
  strFldName: string,
  objFeatureButtonRelaEx: clsFeatureButtonRelaENEx,
) {
  const strThisFuncName = FeatureButtonRelaEx_FuncMapByFldName.name;
  let strMsg = '';
  //如果是本表中字段，不需要映射
  const arrFldName = clsFeatureButtonRelaEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsFeatureButtonRelaENEx.con_OrderNum:
      return FeatureButtonRelaEx_FuncMap_OrderNum(objFeatureButtonRelaEx);
    case clsFeatureButtonRelaENEx.con_ApplicationTypeName:
      return FeatureButtonRelaEx_FuncMap_ApplicationTypeName(objFeatureButtonRelaEx);
    case clsFeatureButtonRelaENEx.con_ApplicationTypeENName:
      return FeatureButtonRelaEx_FuncMap_ApplicationTypeENName(objFeatureButtonRelaEx);
    case clsFeatureButtonRelaENEx.con_FeatureName:
      return FeatureButtonRelaEx_FuncMap_FeatureName(objFeatureButtonRelaEx);
    case clsFeatureButtonRelaENEx.con_FeatureTypeName:
      return FeatureButtonRelaEx_FuncMap_FeatureTypeName(objFeatureButtonRelaEx);
    case clsFeatureButtonRelaENEx.con_ButtonName:
      return FeatureButtonRelaEx_FuncMap_ButtonName(objFeatureButtonRelaEx);
    case clsFeatureButtonRelaENEx.con_Text:
      return FeatureButtonRelaEx_FuncMap_Text(objFeatureButtonRelaEx);
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
 * @param objFeatureButtonRelaS:源对象
 **/
export async function FeatureButtonRelaEx_FuncMap_OrderNum(
  objFeatureButtonRela: clsFeatureButtonRelaENEx,
) {
  const strThisFuncName = FeatureButtonRelaEx_FuncMap_OrderNum.name;
  try {
    if (objFeatureButtonRela.orderNum == 0) {
      const ButtonTab_ButtonId = objFeatureButtonRela.buttonId;
      const ButtonTab_OrderNum = await ButtonTab_func(
        clsButtonTabEN.con_ButtonId,
        clsButtonTabEN.con_OrderNum,
        ButtonTab_ButtonId,
      );
      objFeatureButtonRela.orderNum = ButtonTab_OrderNum;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000099)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      featureButtonRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objFeatureButtonRelaS:源对象
 **/
export async function FeatureButtonRelaEx_FuncMap_ApplicationTypeName(
  objFeatureButtonRela: clsFeatureButtonRelaENEx,
) {
  const strThisFuncName = FeatureButtonRelaEx_FuncMap_ApplicationTypeName.name;
  try {
    if (IsNullOrEmpty(objFeatureButtonRela.applicationTypeName) == true) {
      const ApplicationType_ApplicationTypeId = objFeatureButtonRela.applicationTypeId;
      const ApplicationType_ApplicationTypeName = await ApplicationType_func(
        clsApplicationTypeEN.con_ApplicationTypeId,
        clsApplicationTypeEN.con_ApplicationTypeName,
        ApplicationType_ApplicationTypeId.toString(),
      );
      objFeatureButtonRela.applicationTypeName = ApplicationType_ApplicationTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000100)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      featureButtonRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objFeatureButtonRelaS:源对象
 **/
export async function FeatureButtonRelaEx_FuncMap_ApplicationTypeENName(
  objFeatureButtonRela: clsFeatureButtonRelaENEx,
) {
  const strThisFuncName = FeatureButtonRelaEx_FuncMap_ApplicationTypeENName.name;
  try {
    if (IsNullOrEmpty(objFeatureButtonRela.applicationTypeENName) == true) {
      const ApplicationType_ApplicationTypeId = objFeatureButtonRela.applicationTypeId;
      const ApplicationType_ApplicationTypeENName = await ApplicationType_func(
        clsApplicationTypeEN.con_ApplicationTypeId,
        clsApplicationTypeEN.con_ApplicationTypeENName,
        ApplicationType_ApplicationTypeId.toString(),
      );
      objFeatureButtonRela.applicationTypeENName = ApplicationType_ApplicationTypeENName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000101)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      featureButtonRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objFeatureButtonRelaS:源对象
 **/
export async function FeatureButtonRelaEx_FuncMap_FeatureName(
  objFeatureButtonRela: clsFeatureButtonRelaENEx,
) {
  const strThisFuncName = FeatureButtonRelaEx_FuncMap_FeatureName.name;
  try {
    if (IsNullOrEmpty(objFeatureButtonRela.featureName) == true) {
      const PrjFeature_FeatureId = objFeatureButtonRela.featureId;
      const PrjFeature_FeatureName = await vPrjFeatureSim_func(
        clsPrjFeatureEN.con_FeatureId,
        clsPrjFeatureEN.con_FeatureName,
        PrjFeature_FeatureId,
      );
      objFeatureButtonRela.featureName = PrjFeature_FeatureName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000096)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      featureButtonRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objFeatureButtonRelaS:源对象
 **/
export async function FeatureButtonRelaEx_FuncMap_FeatureTypeName(
  objFeatureButtonRela: clsFeatureButtonRelaENEx,
) {
  const strThisFuncName = FeatureButtonRelaEx_FuncMap_FeatureTypeName.name;
  try {
    if (IsNullOrEmpty(objFeatureButtonRela.featureTypeName) == true) {
      const PrjFeature_FeatureId = objFeatureButtonRela.featureId;
      const PrjFeature_FeatureTypeId = await vPrjFeatureSim_func(
        clsPrjFeatureEN.con_FeatureId,
        clsPrjFeatureEN.con_FeatureTypeId,
        PrjFeature_FeatureId,
      );
      const PrjFeatureType_FeatureTypeId = PrjFeature_FeatureTypeId;
      const PrjFeatureType_FeatureTypeName = await PrjFeatureType_func(
        clsPrjFeatureTypeEN.con_FeatureTypeId,
        clsPrjFeatureTypeEN.con_FeatureTypeName,
        PrjFeatureType_FeatureTypeId,
      );
      objFeatureButtonRela.featureTypeName = PrjFeatureType_FeatureTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000102)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      featureButtonRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objFeatureButtonRelaS:源对象
 **/
export async function FeatureButtonRelaEx_FuncMap_ButtonName(
  objFeatureButtonRela: clsFeatureButtonRelaENEx,
) {
  const strThisFuncName = FeatureButtonRelaEx_FuncMap_ButtonName.name;
  try {
    if (IsNullOrEmpty(objFeatureButtonRela.buttonName) == true) {
      const ButtonTab_ButtonId = objFeatureButtonRela.buttonId;
      const ButtonTab_ButtonName = await ButtonTab_func(
        clsButtonTabEN.con_ButtonId,
        clsButtonTabEN.con_ButtonName,
        ButtonTab_ButtonId,
      );
      objFeatureButtonRela.buttonName = ButtonTab_ButtonName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000103)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      featureButtonRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objFeatureButtonRelaS:源对象
 **/
export async function FeatureButtonRelaEx_FuncMap_Text(
  objFeatureButtonRela: clsFeatureButtonRelaENEx,
) {
  const strThisFuncName = FeatureButtonRelaEx_FuncMap_Text.name;
  try {
    if (IsNullOrEmpty(objFeatureButtonRela.text) == true) {
      const ButtonTab_ButtonId = objFeatureButtonRela.buttonId;
      const ButtonTab_Text = await ButtonTab_func(
        clsButtonTabEN.con_ButtonId,
        clsButtonTabEN.con_Text,
        ButtonTab_ButtonId,
      );
      objFeatureButtonRela.text = ButtonTab_Text;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000104)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      featureButtonRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
