import axios from 'axios';
// import $ from 'jquery';

import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { clsCMProjectAppRelaEN } from '@/ts/L0Entity/CodeMan/clsCMProjectAppRelaEN';
import { clsCMProjectAppRelaENEx } from '@/ts/L0Entity/CodeMan/clsCMProjectAppRelaENEx';
import { clsCMProjectEN } from '@/ts/L0Entity/CodeMan/clsCMProjectEN';
import { clsApplicationTypeEN } from '@/ts/L0Entity/GeneCode/clsApplicationTypeEN';
import {
  CMProjectAppRela_GetObjLstCache,
  CMProjectAppRela_SortFunByKey,
} from '@/ts/L3ForWApi/CodeMan/clsCMProjectAppRelaWApi';
import { CMProject_func } from '@/ts/L3ForWApi/CodeMan/clsCMProjectWApi';
import { ApplicationType_func } from '@/ts/L3ForWApi/GeneCode/clsApplicationTypeWApi';

import { GetObjKeys, GetSortExpressInfo, ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';

export const cMProjectAppRelaEx_Controller = 'CMProjectAppRelaExApi';
export const cMProjectAppRelaEx_ConstructorName = 'cMProjectAppRelaEx';

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_CopyToEx)
 * @param objCMProjectAppRelaENS:源对象
 * @returns 目标对象=>clsCMProjectAppRelaEN:objCMProjectAppRelaENT
 **/
export function CMProjectAppRelaEx_CopyToEx(
  objCMProjectAppRelaENS: clsCMProjectAppRelaEN,
): clsCMProjectAppRelaENEx {
  const strThisFuncName = CMProjectAppRelaEx_CopyToEx.name;
  const objCMProjectAppRelaENT = new clsCMProjectAppRelaENEx();
  try {
    ObjectAssign(objCMProjectAppRelaENT, objCMProjectAppRelaENS);
    return objCMProjectAppRelaENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      cMProjectAppRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objCMProjectAppRelaENT;
  }
}

/**
 * 根据关键字获取相关对象, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_Cache)
 * @param lngmId:所给的关键字
 * @returns 对象
 */
export async function CMProjectAppRelaEx_GetObjLstByCmPrjId_Cache(
  strCmPrjId: string,
  strPrjId: string,
) {
  const strThisFuncName = 'GetObjLstByCmPrjId_Cache';
  const arrCMProjectAppRelaObjLst_Cache: Array<clsCMProjectAppRelaEN> =
    await CMProjectAppRela_GetObjLstCache(strPrjId);
  try {
    const arrCMProjectAppRela_Sel: Array<clsCMProjectAppRelaEN> =
      arrCMProjectAppRelaObjLst_Cache.filter((x) => x.cmPrjId == strCmPrjId);
    if (arrCMProjectAppRela_Sel.length > 0) {
      return arrCMProjectAppRela_Sel;
    } else {
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据Cm工程Id:[{1}]获取相应的对象列表不成功!(in {2}.{3})',
      e,
      strCmPrjId,
      cMProjectAppRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
  return null;
}

/**
 * 删除Cm工程和应用关系
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strCmPrjId: CM工程Id
 * @param intApplicationTypeId: 应用类型Id
 * @returns 获取的相应对象列表
 */
export async function CMProjectAppRelaEx_DelCmProjectApp(
  strCmPrjId: string,
  intApplicationTypeId: number,
): Promise<number> {
  const strThisFuncName = CMProjectAppRelaEx_DelCmProjectApp.name;
  const strAction = 'DelCmProjectApp';
  const strUrl = GetWebApiUrl(cMProjectAppRelaEx_Controller, strAction);
  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strCmPrjId,
      intApplicationTypeId,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      return data.returnInt;
    } else {
      console.error(data.errorMsg);
      throw data.errorMsg;
    }
  } catch (error: any) {
    console.error(error);
    if (error.statusText == undefined) {
      throw error;
    }
    if (error.statusText == 'error') {
      const strInfo = Format(
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        cMProjectAppRelaEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        cMProjectAppRelaEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPager_Cache)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function CMProjectAppRelaEx_GetObjExLstByPager_Cache(
  objPagerPara: stuPagerPara,
  strPrjId: string,
): Promise<Array<clsCMProjectAppRelaENEx>> {
  const strThisFuncName = 'GetObjLstByPager_Cache';
  const arrCMProjectAppRelaObjLst = await CMProjectAppRela_GetObjLstCache(strPrjId);
  const arrCMProjectAppRelaExObjLst = arrCMProjectAppRelaObjLst.map(CMProjectAppRelaEx_CopyToEx);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (IsNullOrEmpty(objSortInfo.SortFld) == false) {
    for (const objInFor of arrCMProjectAppRelaExObjLst) {
      await CMProjectAppRelaEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrCMProjectAppRelaExObjLst.length == 0) return arrCMProjectAppRelaExObjLst;
  let arrCMProjectAppRela_Sel: Array<clsCMProjectAppRelaENEx> = arrCMProjectAppRelaExObjLst;
  const obj_Cond = JSON.parse(objPagerPara.whereCond);
  const objCMProjectAppRela_Cond = new clsCMProjectAppRelaENEx();
  ObjectAssign(objCMProjectAppRela_Cond, obj_Cond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (obj_Cond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(obj_Cond.sfFldComparisonOp);
  }
  //console.log("clsCMProjectAppRelaWApi->GetObjLstByPager_Cache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(obj_Cond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrCMProjectAppRela_Sel = arrCMProjectAppRela_Sel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objCMProjectAppRela_Cond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrCMProjectAppRela_Sel = arrCMProjectAppRela_Sel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrCMProjectAppRela_Sel = arrCMProjectAppRela_Sel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.split(',');

            arrCMProjectAppRela_Sel = arrCMProjectAppRela_Sel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrCMProjectAppRela_Sel = arrCMProjectAppRela_Sel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrCMProjectAppRela_Sel = arrCMProjectAppRela_Sel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrCMProjectAppRela_Sel = arrCMProjectAppRela_Sel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrCMProjectAppRela_Sel = arrCMProjectAppRela_Sel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrCMProjectAppRela_Sel = arrCMProjectAppRela_Sel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrCMProjectAppRela_Sel = arrCMProjectAppRela_Sel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrCMProjectAppRela_Sel.length == 0) return arrCMProjectAppRela_Sel;

    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrCMProjectAppRela_Sel = arrCMProjectAppRela_Sel.sort(
        CMProjectAppRelaEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrCMProjectAppRela_Sel = arrCMProjectAppRela_Sel.sort(objPagerPara.sortFun);
    }

    return arrCMProjectAppRela_Sel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      cMProjectAppRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsCMProjectAppRelaENEx>();
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
export function CMProjectAppRelaEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  // const strThisFuncName = 'SortFunByKey';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsCMProjectAppRelaENEx.con_CmPrjName:
        return (a: clsCMProjectAppRelaENEx, b: clsCMProjectAppRelaENEx) => {
          return a.cmPrjName.localeCompare(b.cmPrjName);
        };
      case clsCMProjectAppRelaENEx.con_ApplicationTypeName:
        return (a: clsCMProjectAppRelaENEx, b: clsCMProjectAppRelaENEx) => {
          return a.applicationTypeName.localeCompare(b.applicationTypeName);
        };
      default:
        return CMProjectAppRela_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsCMProjectAppRelaENEx.con_CmPrjName:
        return (a: clsCMProjectAppRelaENEx, b: clsCMProjectAppRelaENEx) => {
          return b.cmPrjName.localeCompare(a.cmPrjName);
        };
      case clsCMProjectAppRelaENEx.con_ApplicationTypeName:
        return (a: clsCMProjectAppRelaENEx, b: clsCMProjectAppRelaENEx) => {
          return b.applicationTypeName.localeCompare(a.applicationTypeName);
        };
      default:
        return CMProjectAppRela_SortFunByKey(strKey, AscOrDesc);
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
export function CMProjectAppRelaEx_FuncMapByFldName(
  strFldName: string,
  objCMProjectAppRelaEx: clsCMProjectAppRelaENEx,
) {
  const strThisFuncName = CMProjectAppRelaEx_FuncMapByFldName.name;
  let strMsg = '';
  //如果是本表中字段，不需要映射
  const arrFldName = clsCMProjectAppRelaEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsCMProjectAppRelaENEx.con_CmPrjName:
      return CMProjectAppRelaEx_FuncMap_CmPrjName(objCMProjectAppRelaEx);
    case clsCMProjectAppRelaENEx.con_ApplicationTypeName:
      return CMProjectAppRelaEx_FuncMap_ApplicationTypeName(objCMProjectAppRelaEx);
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
 * @param objCMProjectAppRelaS:源对象
 **/
export async function CMProjectAppRelaEx_FuncMap_CmPrjName(
  objCMProjectAppRela: clsCMProjectAppRelaENEx,
) {
  const strThisFuncName = CMProjectAppRelaEx_FuncMap_CmPrjName.name;
  try {
    if (IsNullOrEmpty(objCMProjectAppRela.cmPrjName) == true) {
      const CMProjectAppRela_CmPrjId = objCMProjectAppRela.cmPrjId;
      const CMProject_CMPrjName = await CMProject_func(
        clsCMProjectEN.con_CmPrjId,
        clsCMProjectEN.con_CmPrjName,
        CMProjectAppRela_CmPrjId,
      );
      objCMProjectAppRela.cmPrjName = CMProject_CMPrjName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000113)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      cMProjectAppRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objCMProjectAppRelaS:源对象
 **/
export async function CMProjectAppRelaEx_FuncMap_ApplicationTypeName(
  objCMProjectAppRela: clsCMProjectAppRelaENEx,
) {
  const strThisFuncName = CMProjectAppRelaEx_FuncMap_ApplicationTypeName.name;
  try {
    if (IsNullOrEmpty(objCMProjectAppRela.applicationTypeName) == true) {
      const CMProjectAppRela_ApplicationTypeId = objCMProjectAppRela.applicationTypeId;
      const ApplicationType_ApplicationTypeName = await ApplicationType_func(
        clsApplicationTypeEN.con_ApplicationTypeId,
        clsApplicationTypeEN.con_ApplicationTypeName,
        CMProjectAppRela_ApplicationTypeId.toString(),
      );
      objCMProjectAppRela.applicationTypeName = ApplicationType_ApplicationTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000100)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      cMProjectAppRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

export async function CMProjectAppRelaEx_GetAppTypeIdLstByCmPrjAppIdLst_Cache(
  arrCmPrjAppIdLst: Array<number>,
  strPrjId: string,
): Promise<Array<number>> {
  // const strThisFuncName = 'GetAppTypeIdLstByCmPrjAppIdLst_Cache';
  const arrCMProjectAppRelaObjLst = await CMProjectAppRela_GetObjLstCache(strPrjId);
  const arrCMProjectAppRelaObjLst_Sel = arrCMProjectAppRelaObjLst.filter(
    (x) => arrCmPrjAppIdLst.indexOf(x.cMProjectAppRelaId) > -1,
  );

  const arrApplicationTypeId = arrCMProjectAppRelaObjLst_Sel.map((x) => x.applicationTypeId);
  return arrApplicationTypeId;
}

export async function CMProjectAppRelaEx_GetAppTypeIdLstByCmPrjId_Cache(
  strCmPrjId: string,
  strPrjId: string,
): Promise<Array<number>> {
  const strThisFuncName = 'GetObjLstByCmPrjId_Cache';
  const arrCMProjectAppRelaObjLst_Cache: Array<clsCMProjectAppRelaEN> =
    await CMProjectAppRela_GetObjLstCache(strPrjId);
  try {
    const arrCMProjectAppRela_Sel: Array<clsCMProjectAppRelaEN> =
      arrCMProjectAppRelaObjLst_Cache.filter((x) => x.cmPrjId == strCmPrjId);
    if (arrCMProjectAppRela_Sel.length > 0) {
      return arrCMProjectAppRela_Sel.map((x) => x.applicationTypeId);
    } else {
      return [];
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据Cm工程Id:[{1}]获取相应的对象列表不成功!(in {2}.{3})',
      e,
      strCmPrjId,
      cMProjectAppRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
  return [];
}
