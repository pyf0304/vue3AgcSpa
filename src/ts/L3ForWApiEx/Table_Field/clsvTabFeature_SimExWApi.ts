//import $ from "jquery";
import axios from 'axios';

import { vTabFeatureFlds_SimEx_GetObjLstByTabFeatureIdCache } from './clsvTabFeatureFlds_SimExWApi';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { enumPrjFeature } from '@/ts/L0Entity/PrjFunction/clsPrjFeatureEN';
import { enumFieldType } from '@/ts/L0Entity/Table_Field/clsFieldTypeEN';
import { clsvTabFeature_SimEN } from '@/ts/L0Entity/Table_Field/clsvTabFeature_SimEN';
import { clsvTabFeature_SimENEx } from '@/ts/L0Entity/Table_Field/clsvTabFeature_SimENEx';
import { CMProject_GetObjByCmPrjIdCache } from '@/ts/L3ForWApi/CodeMan/clsCMProjectWApi';
import { vPrjFeatureSim_GetObjByFeatureIdCache } from '@/ts/L3ForWApi/PrjFunction/clsvPrjFeatureSimWApi';
import {
  vTabFeature_Sim_GetObjByTabFeatureIdAsync,
  vTabFeature_Sim_GetObjLstByJSONObjLst,
  vTabFeature_Sim_GetObjLstCache,
  vTabFeature_Sim_ReFreshThisCache,
  vTabFeature_Sim_SortFunByKey,
} from '@/ts/L3ForWApi/Table_Field/clsvTabFeature_SimWApi';
import {
  CacheHelper,
  LocalStorage_GetKeyByPrefix,
  SessionStorage_GetKeyByPrefix,
} from '@/ts/PubFun/CacheHelper';
import { BindDdl_ObjLstInDivObj_V, ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';

import { enumTabType } from '@/ts/L0Entity/Table_Field/clsTabTypeEN';
import { clsvPrjTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvPrjTab_SimEN';
import { vPrjTab_Sim_GetObjLstCache } from '@/ts/L3ForWApi/Table_Field/clsvPrjTab_SimWApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { vFieldTab_Sim_GetObjByFldIdCache } from '@/ts/L3ForWApi/Table_Field/clsvFieldTab_SimWApi';

export const vTabFeature_SimEx_Controller = 'vTabFeature_SimExApi';
export const vTabFeature_SimEx_ConstructorName = 'vTabFeature_SimEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function vTabFeature_SimEx_GetWebApiUrl(strController: string, strAction: string): string {
  // const strThisFuncName = 'GetWebApiUrl';
  let strServiceUrl: string;
  let strCurrIPAddressAndPort = '';
  if (clsSysPara4WebApi.bolIsLocalHost == false) {
    strCurrIPAddressAndPort = clsSysPara4WebApi.CurrIPAddressAndPort;
  } else {
    strCurrIPAddressAndPort = clsSysPara4WebApi.CurrIPAddressAndPort_Local;
  }
  if (IsNullOrEmpty(clsSysPara4WebApi.CurrPrx) == true) {
    strServiceUrl = Format('{0}/{1}/{2}', strCurrIPAddressAndPort, strController, strAction);
  } else {
    strServiceUrl = Format(
      '{0}/{1}/{2}/{3}',
      strCurrIPAddressAndPort,
      clsSysPara4WebApi.CurrPrx,
      strController,
      strAction,
    );
  }
  return strServiceUrl;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_CopyToEx)
 * @param objvTabFeature_SimENS:源对象
 * @returns 目标对象=>clsvTabFeature_SimEN:objvTabFeature_SimENT
 **/
export function vTabFeature_SimEx_CopyToEx(
  objvTabFeature_SimENS: clsvTabFeature_SimEN,
): clsvTabFeature_SimENEx {
  const strThisFuncName = vTabFeature_SimEx_CopyToEx.name;
  const objvTabFeature_SimENT = new clsvTabFeature_SimENEx();
  try {
    ObjectAssign(objvTabFeature_SimENT, objvTabFeature_SimENS);
    return objvTabFeature_SimENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      vTabFeature_SimEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objvTabFeature_SimENT;
  }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2022-11-03
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function vTabFeature_SimEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  // const strThisFuncName = 'SortFunByKey';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      default:
        return vTabFeature_Sim_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      default:
        return vTabFeature_Sim_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2022-11-03
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function vTabFeature_SimEx_FuncMapByFldName(
  strFldName: string,
  objvTabFeature_SimEx: clsvTabFeature_SimENEx,
) {
  const strThisFuncName = vTabFeature_SimEx_FuncMapByFldName.name;
  console.log(objvTabFeature_SimEx);
  let strMsg = '';
  //如果是本表中字段，不需要映射
  const arrFldName = clsvTabFeature_SimEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    default:
      strMsg = Format(
        '扩展字段:[{0}]在字段值函数映射中不存在！(in {1})',
        strFldName,
        strThisFuncName,
      );
      console.error(strMsg);
  }
}

/// <summary>
/// 根据关键字获取相关对象, 从缓存的对象列表中获取.没有就返回null.
/// (AutoGCLib.AutoGC6Cs_Business:Gen_4BL_GetObjByKeyCache)
/// </summary>
/// <param name = "strTabId">所给的关键字</param>
/// <param name = "strPrjId">所给的关键字</param>
/// <returns>根据关键字获取的对象</returns>
export async function vTabFeature_SimEx_GetObjLstByTabIdCache(
  strTabId: string,
  strCmPrjId: string,
): Promise<Array<clsvTabFeature_SimEN>> {
  //初始化列表缓存
  const arrObjLst: Array<clsvTabFeature_SimEN> = await vTabFeature_SimEx_GetObjLstCache(strCmPrjId);
  if (arrObjLst.length == 0) {
    const strMsg = Format('分类:[strCmPrjId:{0}]的记录数为0!', strCmPrjId);
    console.error(strMsg);
  }
  const arrObjLst_Sel1 = arrObjLst.filter((x) => x.tabId == strTabId);
  return arrObjLst_Sel1;
}

/**
 * 获取本地缓存中的对象列表，是整个表中的全部记录，也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vTabFeature_SimEx_GetObjLstCache(
  strCmPrjId: string,
): Promise<Array<clsvTabFeature_SimEN>> {
  //const strThisFuncName = "GetObjLstCache";

  if (IsNullOrEmpty(strCmPrjId) == true) {
    const strMsg = Format('缓存分类变量:[CmPrjId]不能为空！');
    console.error(strMsg);
    throw strMsg;
  }
  if (strCmPrjId.length != 6) {
    const strMsg = Format('缓存分类变量:[strCmPrjId]的长度:[{0}]不正确！', strCmPrjId.length);
    console.error(strMsg);
    throw strMsg;
  }
  let arrvTabFeature_SimObjLstCache;
  switch (clsvTabFeature_SimEN.CacheModeId) {
    case '04': //sessionStorage
      arrvTabFeature_SimObjLstCache = await vTabFeature_SimEx_GetObjLst_sessionStorage(strCmPrjId);
      break;
    case '03': //localStorage
      arrvTabFeature_SimObjLstCache = await vTabFeature_SimEx_GetObjLst_localStorage(strCmPrjId);
      break;
    case '02': //ClientCache
      arrvTabFeature_SimObjLstCache = await vTabFeature_SimEx_GetObjLst_ClientCache(strCmPrjId);
      break;
    default:
      arrvTabFeature_SimObjLstCache = await vTabFeature_SimEx_GetObjLst_ClientCache(strCmPrjId);
      break;
  }
  // const arrvTabFeature_SimObjLst = vTabFeature_Sim_GetObjLstByJSONObjLst(
  //   arrvTabFeature_SimObjLstCache,
  // );
  return arrvTabFeature_SimObjLstCache;
}

/**
 * 获取本地sessionStorage缓存中的对象列表，是整个表中的全部记录，也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vTabFeature_SimEx_GetObjLst_sessionStorage(strCmPrjId: string) {
  const strThisFuncName = 'GetObjLst_sessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  strWhereCond = Format('1=1', strCmPrjId);
  const strKey = Format('{0}_{1}', clsvTabFeature_SimEN._CurrTabName, strCmPrjId);
  //clsvTabFeature_SimEN.CacheAddiCondition = GetSessionCacheAdditionCondition(clsvTabFeature_SimEN._CurrTabName);
  if (IsNullOrEmpty(clsvTabFeature_SimEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvTabFeature_SimEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空！不正确');
    throw new Error('关键字为空！不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在，直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvTabFeature_SimExObjLstCache: Array<clsvTabFeature_SimENEx> =
      JSON.parse(strTempObjLst);
    const arrvTabFeature_SimObjLst_T = vTabFeature_Sim_GetObjLstByJSONObjLst(
      arrvTabFeature_SimExObjLstCache,
    );
    return arrvTabFeature_SimObjLst_T;
  }
  try {
    const arrvTabFeature_SimExObjLst = await vTabFeature_SimEx_GetObjLstByCmPrjIdAsync(
      strCmPrjId,
      strWhereCond,
    );
    const strPrefix = Format('{0}_', clsvTabFeature_SimEN._CurrTabName);
    const arrCacheKeyLst = SessionStorage_GetKeyByPrefix(strPrefix);
    arrCacheKeyLst.forEach((x) => sessionStorage.removeItem(x));
    sessionStorage.setItem(strKey, JSON.stringify(arrvTabFeature_SimExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立，对象列表数：{1}!',
      strKey,
      arrvTabFeature_SimExObjLst.length,
    );
    console.log(strInfo);
    return arrvTabFeature_SimExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vTabFeature_SimEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 获取本地缓存中的对象列表，是整个表中的全部记录，也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vTabFeature_SimEx_GetObjLst_localStorage(strCmPrjId: string) {
  const strThisFuncName = 'GetObjLst_localStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  strWhereCond = Format('1=1', strCmPrjId);
  const strKey = Format('{0}_{1}', clsvTabFeature_SimEN._CurrTabName, strCmPrjId);
  ///*  //*/clsvTabFeature_SimEN.CacheAddiCondition = GetSessionCacheAdditionCondition(clsvTabFeature_SimEN._CurrTabName);
  if (IsNullOrEmpty(clsvTabFeature_SimEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvTabFeature_SimEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空！不正确');
    throw new Error('关键字为空！不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在，直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvTabFeature_SimExObjLstCache: Array<clsvTabFeature_SimENEx> =
      JSON.parse(strTempObjLst);
    const arrvTabFeature_SimObjLst_T = vTabFeature_Sim_GetObjLstByJSONObjLst(
      arrvTabFeature_SimExObjLstCache,
    );
    return arrvTabFeature_SimObjLst_T;
  }
  try {
    const arrvTabFeature_SimExObjLst = await vTabFeature_SimEx_GetObjLstByCmPrjIdAsync(
      strCmPrjId,
      strWhereCond,
    );
    const strPrefix = Format('{0}_', clsvTabFeature_SimEN._CurrTabName);
    const arrCacheKeyLst = LocalStorage_GetKeyByPrefix(strPrefix);
    arrCacheKeyLst.forEach((x) => localStorage.removeItem(x));
    localStorage.setItem(strKey, JSON.stringify(arrvTabFeature_SimExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立，对象列表数：{1}!',
      strKey,
      arrvTabFeature_SimExObjLst.length,
    );
    console.log(strInfo);
    return arrvTabFeature_SimExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vTabFeature_SimEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 获取本地缓存中的对象列表，是整个表中的全部记录，也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_ClientCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vTabFeature_SimEx_GetObjLst_ClientCache(strCmPrjId: string) {
  const strThisFuncName = 'GetObjLst_ClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  strWhereCond = Format('1=1', strCmPrjId);
  const strKey = Format('{0}_{1}', clsvTabFeature_SimEN._CurrTabName, strCmPrjId);
  //clsvTabFeature_SimEN.CacheAddiCondition = GetSessionCacheAdditionCondition(clsvTabFeature_SimEN._CurrTabName);
  if (IsNullOrEmpty(clsvTabFeature_SimEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvTabFeature_SimEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空！不正确');
    throw new Error('关键字为空！不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在，直接返回
    const arrvTabFeature_SimExObjLstCache: Array<clsvTabFeature_SimENEx> = CacheHelper.Get(strKey);
    const arrvTabFeature_SimObjLst_T = vTabFeature_Sim_GetObjLstByJSONObjLst(
      arrvTabFeature_SimExObjLstCache,
    );
    return arrvTabFeature_SimObjLst_T;
  }
  try {
    const arrvTabFeature_SimExObjLst = await vTabFeature_SimEx_GetObjLstByCmPrjIdAsync(
      strCmPrjId,
      strWhereCond,
    );
    CacheHelper.Add(strKey, arrvTabFeature_SimExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立，对象列表数：{1}!',
      strKey,
      arrvTabFeature_SimExObjLst.length,
    );
    console.log(strInfo);
    return arrvTabFeature_SimExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vTabFeature_SimEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw strMsg;
  }
}

export async function vTabFeature_SimEx_GetObjLstByCmPrjIdAsync(
  strCmPrjId: string,
  strCondition: string,
): Promise<Array<clsvTabFeature_SimEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLstByCmPrjId';
  const strUrl = vTabFeature_SimEx_GetWebApiUrl(vTabFeature_SimEx_Controller, strAction);
  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strCmPrjId,
      strCondition,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          vTabFeature_SimEx_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vTabFeature_Sim_GetObjLstByJSONObjLst(returnObjLst);
      return arrObjLst;
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
        vTabFeature_SimEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        vTabFeature_SimEx_ConstructorName,
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
 * 根据关键字获取相关对象, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache)
 * @param strFldId:所给的关键字
 * @returns 对象
 */
export async function vTabFeature_SimEx_GetObjByTabFeatureIdCache(
  strTabFeatureId: string,
  strCmPrjId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByFldIdCache';

  if (IsNullOrEmpty(strTabFeatureId) == true) {
    const strMsg = Format('参数:[strTabFeatureId]不能为空！(In GetObjByFldIdCache)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strTabFeatureId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strTabFeatureId]的长度:[{0}]不正确！',
      strTabFeatureId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrvTabFeature_SimObjLstCache = await vTabFeature_SimEx_GetObjLstCache(strCmPrjId);
  try {
    const arrvTabFeature_Sim_Sel: Array<clsvTabFeature_SimEN> =
      arrvTabFeature_SimObjLstCache.filter((x) => x.tabFeatureId == strTabFeatureId);
    let objvTabFeature_Sim;
    if (arrvTabFeature_Sim_Sel.length > 0) {
      objvTabFeature_Sim = arrvTabFeature_Sim_Sel[0];
      return objvTabFeature_Sim;
    } else {
      if (bolTryAsyncOnce == true) {
        objvTabFeature_Sim = await vTabFeature_Sim_GetObjByTabFeatureIdAsync(strTabFeatureId);
        if (objvTabFeature_Sim != null) {
          vTabFeature_Sim_ReFreshThisCache(strCmPrjId);
          return objvTabFeature_Sim;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strTabFeatureId,
      vTabFeature_SimEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/// <summary>
/// 排序函数。根据关键字字段的值进行比较
/// 作者:pyf
/// 日期:20210322172512
/// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
/// </summary>
/// <param name = "a">比较的第1个对象</param>
/// <param name = "b">比较的第1个对象</param>
/// <returns>返回两个对象比较的结果</returns>
export function vTabFeature_SimEx_SortFunByTabFeatureName(
  a: clsvTabFeature_SimEN,
  b: clsvTabFeature_SimEN,
): number {
  return a.tabFeatureName.localeCompare(b.tabFeatureName);
}
export function vTabFeature_SimEx_SortFunByOrderNum(
  a: clsvTabFeature_SimEN,
  b: clsvTabFeature_SimEN,
): number {
  return a.orderNum - b.orderNum;
}

export async function vTabFeature_SimEx_GetFuncName(
  objTabFeature: clsvTabFeature_SimEN,
): Promise<any> {
  const strThisFuncName = 'GetFuncName';
  //const objTabFeature = await vTabFeature_SimEx_GetObjByTabFeatureIdCache(strTabFeatureId, strPrjId);
  if (objTabFeature == null || IsNullOrEmpty(objTabFeature.tabFeatureName) == true) {
    throw '字段名不能为空！';
  }
  const arrTabFeatureFlds = await vTabFeatureFlds_SimEx_GetObjLstByTabFeatureIdCache(
    objTabFeature.tabFeatureId,
    clsPrivateSessionStorage.currSelPrjId,
  );
  const objTabFeatureFlds_Value = arrTabFeatureFlds.find(
    (x) => x.fieldTypeId == enumFieldType.KeyField_02,
  );
  let strFldId;
  let objvFieldTab_Sim;
  let objProject;
  let objFuncName;
  let objPrjFeature;
  let objvFieldTab_Sim2;
  let objProject2;
  let strMsg;
  switch (objTabFeature.featureId) {
    case enumPrjFeature.BindDdl_0152:
    case enumPrjFeature.Tab_BindDdl_0173:
      strFldId = '';
      if (objTabFeatureFlds_Value != null) {
        strFldId = objTabFeatureFlds_Value.fldId;
      }
      objvFieldTab_Sim = await vFieldTab_Sim_GetObjByFldIdCache(
        strFldId,
        clsPrivateSessionStorage.currSelPrjId,
      );

      objProject = await CMProject_GetObjByCmPrjIdCache(objTabFeature.cmPrjId);
      if (objProject == null) {
        const strMsg = Format('项目Id:[{0}]，没有相应的Cm项目，请检查！', objTabFeature.cmPrjId);
        console.error(strMsg);
        alert(strMsg);
        return;
      }

      if (objvFieldTab_Sim == null) {
        const strMsg = Format(
          '在项目:[{0}]中，字段Id:[{1}]没有相应字段，请检查！',
          objProject.cmPrjName,
          strFldId,
        );
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      objFuncName = {
        funcName_Cs: Format('BindDdl_{0}', objvFieldTab_Sim.fldName),
        funcName_Js: Format('BindDdl_{0}Cache', objvFieldTab_Sim.fldName),
      };
      return objFuncName;
    case enumPrjFeature.Tab_AdjustOrderNum_0167:
      objFuncName = {
        funcName_Cs: Format('AdjustOrderNum'),
        funcName_Js: Format('AdjustOrderNum'),
      };
      return objFuncName;
    case enumPrjFeature.Tab_SetFieldValue_0170:
      strFldId = '';
      if (objTabFeatureFlds_Value != null) {
        strFldId = objTabFeatureFlds_Value.fldId;
      }
      objvFieldTab_Sim2 = await vFieldTab_Sim_GetObjByFldIdCache(
        strFldId,
        clsPrivateSessionStorage.currSelPrjId,
      );
      objProject2 = await CMProject_GetObjByCmPrjIdCache(objTabFeature.cmPrjId);
      if (objProject2 == null) {
        const strMsg = Format('项目Id:[{0}]，没有相应的Cm项目，请检查！', objTabFeature.cmPrjId);
        console.error(strMsg);
        alert(strMsg);
        return;
      }

      if (objvFieldTab_Sim2 == null) {
        strMsg = Format(
          '在Cm项目:[{0}]中，字段Id:[{1}]没有相应字段，请检查！',
          objProject2.cmPrjName,
          strFldId,
        );
        console.error(strMsg);
        alert(strMsg);
        return;
      }

      objFuncName = {
        funcName_Cs: Format('Set{0}', objvFieldTab_Sim2.fldName),
        funcName_Js: Format('Set{0}', objvFieldTab_Sim2.fldName),
      };
      return objFuncName;
    case enumPrjFeature.Tab_TransEvent_0172:
      objFuncName = {
        funcName_Cs: Format('TransEvent'),
        funcName_Js: Format('TransEvent'),
      };
      return objFuncName;

    //break;
    default:
      objPrjFeature = await vPrjFeatureSim_GetObjByFeatureIdCache(objTabFeature.featureId);
      if (objPrjFeature == null) {
        const strMsg = Format(
          '功能:[{0}({1})], 功能名不存在，在switch中没有处理！(In {2}.{3})',
          '',
          objTabFeature.featureId,
          vTabFeature_SimEx_ConstructorName,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
      } else {
        const strMsg = Format(
          '功能:[{0}({1})]strCommandText:{0}在switch中没有处理！(In btnSubmit_Click())',
          objPrjFeature.featureName,
          objTabFeature.featureId,
          vTabFeature_SimEx_ConstructorName,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
      }
      break;
  }
}

//export async function TabFeatureEx_CopyNodeToNewVersion(strTabFeatureId: string, strCmPrjId: string): Promise<boolean> {

//    const objTabFeature = await vTabFeature_SimEx_GetObjByTabFeatureIdCache(strTabFeatureId, strCmPrjId);
//    if (objTabFeature == null) {
//        const strMsg = Format("关键字:[{0}]的表功能不存在！", strTabFeatureId);
//        throw new Error(strMsg)
//    }
//    const strPrjId = await CMProjectEx_GetPrjIdByCmPrjIdCache(strCmPrjId);
//    objTabFeature.tabFeatureId = await TabFeature_GetMaxStrIdByPrefixAsync(strPrjId);
//    objTabFeature.tabFeatureName = Format("C_{0}", objTabFeature.tabFeatureName);
//    objTabFeature.updDate = clsDateTime.getTodayDateTimeStr(1);// 修改日期
//    objTabFeature.updUser = clsPubLocalStorage.userId;// 修改者
//    await TabFeature_IsExistAsync(objTabFeature.tabFeatureId);
//    if (bolIsExist == true) {
//        const strMsg = Format("关键字:[{0}]的新表功能已经存在！", objTabFeature.tabFeatureId);
//        throw new Error(strMsg)
//    }
//    try {
//        TabFeature_CheckPropertyNew(objTabFeature);
//    }
//    catch (e: any) {
//        const strMsg = `检查数据不成功,${e}.`;
//        console.error(strMsg);
//        alert(strMsg);
//        return false;//一定要有一个返回值，否则会出错！
//    }
//    try {
//        await TabFeature_IsExistAsync(objTabFeature.tabFeatureId);
//        const bolIsExist: boolean = responseText;
//        if (bolIsExist == true) {
//            const strMsg = `复制记录时，关键字：${objTabFeature.tabFeatureId}已经存在！`;
//            console.error(strMsg);
//            alert(strMsg);
//            return responseText;//一定要有一个返回值，否则会出错！
//        }
//        const returnBool = await TabFeature_AddNewRecordAsync(objTabFeature);

//        if (returnBool == true) {
//            TabFeature_ReFreshThisCache(strPrjId);
//            const arrTabFeatureFlds = await TabFeatureFldsEx_GetObjLstByTabFeatureId(strTabFeatureId);
//            for (const objTabFeatureFlds of arrTabFeatureFlds) {
//                await TabFeatureFldsEx_CopyNodeToNewVersion(objTabFeatureFlds.mId, objTabFeature.tabFeatureId, objTabFeature.prjId);
//            }
//            const strInfo = `复制记录成功!`;
//            //显示信息框
//            alert(strInfo);
//        }
//        else {
//            const strInfo = `复制记录不成功!`;
//            //显示信息框
//            alert(strInfo);
//        }
//        return returnBool;//一定要有一个返回值，否则会出错！
//    }
//    catch (e: any) {
//        const strMsg = `复制记录不成功,${e}.`;
//        console.error(strMsg);
//        alert(strMsg);
//        return false;//一定要有一个返回值，否则会出错！
//    }
//}

/**
 * 绑定tabId的下拉框
 * @param objDDL:需要绑定当前表的下拉框
 * @param strPrjId:工程ID
 */
export async function vTabFeature_SimEx_BindDdl_TabIdInDivCache(
  strDivName: HTMLDivElement,
  strDdlName: string,
  strCmPrjId: string,
) {
  if (IsNullOrEmpty(strCmPrjId) == true) {
    const strMsg = Format('参数:[strCmPrjId]不能为空！(In BindDdl_TabIdInDivCache)');
    console.error(strMsg);
    throw strMsg;
  }

  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = `下拉框：${strDdlName} 不存在！(In BindDdl_TabIdInDivCache)`;
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  let arrObjLst_Sel = await vPrjTab_Sim_GetObjLstCache(clsPrivateSessionStorage.cmPrjId);
  // const strPrjId = await CMProjectEx_GetPrjIdByCmPrjIdCache(strCmPrjId);
  const arrTabFeatureObjLst_Sel: Array<clsvTabFeature_SimEN> =
    await vTabFeature_SimEx_GetObjLstCache(strCmPrjId);
  const arrTabId_Sel: Array<string> = arrTabFeatureObjLst_Sel.map((x) => x.tabId);
  arrObjLst_Sel = arrObjLst_Sel.filter(
    (x) => arrTabId_Sel.indexOf(x.tabId) > -1 && x.tabTypeId != enumTabType.PureClass_0008,
  );
  arrObjLst_Sel = arrObjLst_Sel.sort((x, y) => x.tabName.localeCompare(y.tabName));
  //arrObjLst_Sel = arrObjLst_Sel.filter(x => x.cmPrjId == strCmPrjId);
  BindDdl_ObjLstInDivObj_V(
    strDivName,
    strDdlName,
    arrObjLst_Sel,
    clsvPrjTab_SimEN.con_TabId,
    clsvPrjTab_SimEN.con_TabName,
    '工程表',
  );
}

/**
 * 绑定基于Web的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)
 * @param objDDL:需要绑定当前表的下拉框
 * @param strTabId:表ID
 */
export async function vTabFeature_SimEx_BindDdl_TabFeatureId4DdlByTabIdInDivCache(
  strDivName: HTMLDivElement,
  strDdlName: string,
  strTabId: string,
) {
  // const strThisFuncName = 'BindDdl_TabFeatureId4DdlByTabIdInDivCache';

  if (IsNullOrEmpty(strTabId) == true) {
    const strMsg = Format('参数:[strTabId]不能为空！(In BindDdl_TabFeatureIdInDivCache)');
    console.error(strMsg);
    throw strMsg;
  }
  const strCmPrjId = clsPrivateSessionStorage.cmPrjId;
  if (IsNullOrEmpty(strCmPrjId) == true) {
    const strMsg = Format('参数:[strPrjId]不能为空！(In BindDdl_TabFeatureIdInDivCache)');
    console.error(strMsg);
    throw strMsg;
  }
  //if (strCmPrjId == "9991") {
  //    const strMsg = Format("参数:[strPrjId]不能为[9991]！(In BindDdl_TabFeatureIdInDivCache)");
  //    console.error(strMsg);
  //    throw (strMsg);
  //}

  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在！(In BindDdl_TabFeatureIdInDivCache)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容

  let arrObjLst_Sel: Array<clsvTabFeature_SimEN> = await vTabFeature_SimEx_GetObjLstCache(
    strCmPrjId,
  );
  arrObjLst_Sel = arrObjLst_Sel.filter(
    (x) => x.tabId == strTabId && x.featureId == enumPrjFeature.Tab_BindDdl_0173,
  );
  BindDdl_ObjLstInDivObj_V(
    strDivName,
    strDdlName,
    arrObjLst_Sel,
    clsvTabFeature_SimEN.con_TabFeatureId,
    clsvTabFeature_SimEN.con_TabFeatureName,
    '表功能',
  );
}

export async function vTabFeature_SimEx_GetArrvTabFeature_SimByTabIdCache(
  strTabId: string,
): Promise<Array<clsvTabFeature_SimEN>> {
  // const strThisFuncName = 'BindDdl_TabFeatureId4DdlByTabIdInDivCache';

  if (IsNullOrEmpty(strTabId) == true) {
    const strMsg = Format('参数:[strTabId]不能为空！(In BindDdl_TabFeatureIdInDivCache)');
    console.error(strMsg);
    throw strMsg;
  }
  const strCmPrjId = clsPrivateSessionStorage.cmPrjId;
  if (IsNullOrEmpty(strCmPrjId) == true) {
    const strMsg = Format('参数:[strPrjId]不能为空！(In BindDdl_TabFeatureIdInDivCache)');
    console.error(strMsg);
    throw strMsg;
  }

  //为数据源于表的下拉框设置内容

  let arrObjLst_Sel: Array<clsvTabFeature_SimEN> = await vTabFeature_SimEx_GetObjLstCache(
    strCmPrjId,
  );
  arrObjLst_Sel = arrObjLst_Sel.filter(
    (x) => x.tabId == strTabId && x.featureId == enumPrjFeature.Tab_BindDdl_0173,
  );
  return arrObjLst_Sel;
}
/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)
 * @param objDDL:需要绑定当前表的下拉框
 * @param strTabId:表ID
 */
export async function vTabFeature_SimEx_BindDdl_TabFeatureIdByTabIdInDivCache(
  strDivName: HTMLDivElement,
  strDdlName: string,
  strTabId: string,
  strCmPrjId: string,
) {
  // const strThisFuncName = 'BindDdl_TabFeatureIdByTabIdInDivCache';

  if (IsNullOrEmpty(strTabId) == true) {
    const strMsg = Format('参数:[strTabId]不能为空！(In BindDdl_TabFeatureIdByTabIdInDiv)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strTabId.length != 8) {
    const strMsg = Format('缓存分类变量:[strTabId]的长度:[{0}]不正确！', strTabId.length);
    console.error(strMsg);
    throw strMsg;
  }

  if (IsNullOrEmpty(strCmPrjId) == true) {
    const strMsg = Format('参数:[strCmPrjId]不能为空！(In BindDdl_TabFeatureIdByTabIdInDiv)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strCmPrjId.length != 6) {
    const strMsg = Format('缓存分类变量:[strCmPrjId]的长度:[{0}]不正确！', strCmPrjId.length);
    console.error(strMsg);
    throw strMsg;
  }

  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在！(In BindDdl_TabFeatureIdByTabIdInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_TabFeatureIdByTabIdInDivCache");
  let arrObjLst_Sel = await vTabFeature_Sim_GetObjLstCache(strCmPrjId);
  if (arrObjLst_Sel == null) return;
  arrObjLst_Sel = arrObjLst_Sel.filter((x) => x.tabId == strTabId);
  BindDdl_ObjLstInDivObj_V(
    strDivName,
    strDdlName,
    arrObjLst_Sel,
    clsvTabFeature_SimEN.con_TabFeatureId,
    clsvTabFeature_SimEN.con_TabFeatureName,
    'v表功能_Sim',
  );
}
