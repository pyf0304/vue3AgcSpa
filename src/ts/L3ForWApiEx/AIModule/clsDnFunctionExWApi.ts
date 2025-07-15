import { clsAssociationMappingEN } from '@/ts/L0Entity/AIModule/clsAssociationMappingEN';
import { clsDnFunctionEN } from '@/ts/L0Entity/AIModule/clsDnFunctionEN';
import { clsDnFunctionENEx } from '@/ts/L0Entity/AIModule/clsDnFunctionENEx';
import { AssociationMapping_func } from '@/ts/L3ForWApi/AIModule/clsAssociationMappingWApi';
import {
  DnFunction_GetObjLstByPagerAsync,
  DnFunction_GetObjLstCache,
  DnFunction_SortFunByKey,
} from '@/ts/L3ForWApi/AIModule/clsDnFunctionWApi';
import { GetSortExpressInfo, ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const dNFunctionEx_Controller = 'DnFunctionExApi';
export const dNFunctionEx_ConstructorName = 'dNFunctionEx';
/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_CopyToEx)
 * @param objDnFunctionENS:源对象
 * @returns 目标对象=>clsDnFunctionEN:objDnFunctionENT
 **/
export function DnFunctionEx_CopyToEx(objDnFunctionENS: clsDnFunctionEN): clsDnFunctionENEx {
  const strThisFuncName = DnFunctionEx_CopyToEx.name;
  const objDnFunctionENT = new clsDnFunctionENEx();
  try {
    ObjectAssign(objDnFunctionENT, objDnFunctionENS);
    return objDnFunctionENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      dNFunctionEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objDnFunctionENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function DnFunctionEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsDnFunctionENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrDnFunctionObjLst = await DnFunction_GetObjLstByPagerAsync(objPagerPara);
  const arrDnFunctionExObjLst = arrDnFunctionObjLst.map(DnFunctionEx_CopyToEx);

  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsDnFunctionEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrDnFunctionExObjLst) {
      await DnFunctionEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrDnFunctionExObjLst.length == 0) return arrDnFunctionExObjLst;
  let arrDnFunction_Sel: Array<clsDnFunctionENEx> = arrDnFunctionExObjLst;
  try {
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrDnFunction_Sel = arrDnFunction_Sel.sort(
        DnFunctionEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrDnFunction_Sel = arrDnFunction_Sel.sort(objPagerPara.sortFun);
    }

    return arrDnFunction_Sel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      dNFunctionEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsDnFunctionENEx>();
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
export function DnFunctionEx_FuncMapByFldName(
  strFldName: string,
  objDnFunctionEx: clsDnFunctionENEx,
) {
  const strThisFuncName = DnFunctionEx_FuncMapByFldName.name;
  let strMsg = '';
  //如果是本表中字段，不需要映射
  const arrFldName = clsDnFunctionEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsDnFunctionENEx.con_AssociationMappingName:
      return DnFunctionEx_FuncMap_AssociationMappingName(objDnFunctionEx);
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
 * @param objDnFunctionS:源对象
 **/
export async function DnFunctionEx_FuncMap_AssociationMappingName(
  objDnFunction: clsDnFunctionENEx,
) {
  const strThisFuncName = DnFunctionEx_FuncMap_AssociationMappingName.name;
  try {
    if (IsNullOrEmpty(objDnFunction.associationMappingName) == true) {
      const AssociationMapping_AssociationMappingId = objDnFunction.associationMappingId;
      const AssociationMapping_AssociationMappingName = await AssociationMapping_func(
        clsAssociationMappingEN.con_AssociationMappingId,
        clsAssociationMappingEN.con_AssociationMappingName,
        AssociationMapping_AssociationMappingId,
      );
      objDnFunction.associationMappingName = AssociationMapping_AssociationMappingName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000138)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      dNFunctionEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
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
export function DnFunctionEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  // const strThisFuncName = 'SortFunByKey';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsDnFunctionENEx.con_AssociationMappingName:
        return (a: clsDnFunctionENEx, b: clsDnFunctionENEx) => {
          return a.associationMappingName.localeCompare(b.associationMappingName);
        };
      default:
        return DnFunction_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsDnFunctionENEx.con_AssociationMappingName:
        return (a: clsDnFunctionENEx, b: clsDnFunctionENEx) => {
          return b.associationMappingName.localeCompare(a.associationMappingName);
        };
      default:
        return DnFunction_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据关键字获取相关对象, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache)
 * @param strDnFunctionId:所给的关键字
 * @returns 对象
 */
export async function DnFunctionEx_GetObjByFunctionNameCache(
  strDnFunctionName: string,
  strPrjId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'DnFunctionEx_GetObjByFunctionNameCache';
  console.log(bolTryAsyncOnce);
  if (IsNullOrEmpty(strDnFunctionName) == true) {
    const strMsg = Format(
      '参数:[strDnFunctionName]不能为空！(In DnFunctionEx_GetObjByFunctionNameCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }

  const arrDnFunctionObjLstCache = await DnFunction_GetObjLstCache(strPrjId);
  try {
    const arrDnFunction_Sel: Array<clsDnFunctionEN> = arrDnFunctionObjLstCache.filter(
      (x) => x.dnFunctionName == strDnFunctionName,
    );
    let objDnFunction: clsDnFunctionEN;
    if (arrDnFunction_Sel.length > 0) {
      objDnFunction = arrDnFunction_Sel[0];
      return objDnFunction;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      dNFunctionEx_ConstructorName,
      dNFunctionEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}
