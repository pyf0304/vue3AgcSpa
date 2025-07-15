/**
 * v表功能字段_Sim(vTabFeatureFlds_Sim)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2022年10月31日.
 * 注意:该类必须与调用界面处于同一个包，否则调用不成功!
 **/
//import $ from "jquery";
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { ObjectAssign, GetSortExpressInfo } from '@/ts/PubFun/clsCommFunc4Web';
import {
  vTabFeatureFlds_Sim_GetObjBymIdAsync,
  vTabFeatureFlds_Sim_GetObjLstByJSONObjLst,
  vTabFeatureFlds_Sim_ReFreshThisCache,
  vTabFeatureFlds_Sim_GetObjLstAsync,
  vTabFeatureFlds_Sim_SortFunByKey,
  vTabFeatureFlds_Sim_GetObjLstCache,
} from '@/ts/L3ForWApi/Table_Field/clsvTabFeatureFlds_SimWApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsvTabFeatureFlds_SimEN } from '@/ts/L0Entity/Table_Field/clsvTabFeatureFlds_SimEN';
import { clsvTabFeatureFlds_SimENEx } from '@/ts/L0Entity/Table_Field/clsvTabFeatureFlds_SimENEx';
import {
  CacheHelper,
  LocalStorage_GetKeyByPrefix,
  SessionStorage_GetKeyByPrefix,
} from '@/ts/PubFun/CacheHelper';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
export const vTabFeatureFlds_SimEx_Controller = 'vTabFeatureFlds_SimExApi';
export const vTabFeatureFlds_SimEx_ConstructorName = 'vTabFeatureFlds_SimEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function vTabFeatureFlds_SimEx_GetWebApiUrl(
  strController: string,
  strAction: string,
): string {
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
 * @param objvTabFeatureFlds_SimENS:源对象
 * @returns 目标对象=>clsvTabFeatureFlds_SimEN:objvTabFeatureFlds_SimENT
 **/
export function vTabFeatureFlds_SimEx_CopyToEx(
  objvTabFeatureFlds_SimENS: clsvTabFeatureFlds_SimEN,
): clsvTabFeatureFlds_SimENEx {
  const strThisFuncName = vTabFeatureFlds_SimEx_CopyToEx.name;
  const objvTabFeatureFlds_SimENT = new clsvTabFeatureFlds_SimENEx();
  try {
    ObjectAssign(objvTabFeatureFlds_SimENT, objvTabFeatureFlds_SimENS);
    return objvTabFeatureFlds_SimENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      vTabFeatureFlds_SimEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objvTabFeatureFlds_SimENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function vTabFeatureFlds_SimEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsvTabFeatureFlds_SimENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrvTabFeatureFlds_SimExObjLst = await vTabFeatureFlds_Sim_GetObjLstAsync(
    objPagerPara.whereCond,
  );
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsvTabFeatureFlds_SimEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrvTabFeatureFlds_SimExObjLst) {
      await vTabFeatureFlds_SimEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrvTabFeatureFlds_SimExObjLst.length == 0) return arrvTabFeatureFlds_SimExObjLst;
  let arrvTabFeatureFlds_Sim_Sel: Array<clsvTabFeatureFlds_SimENEx> =
    arrvTabFeatureFlds_SimExObjLst;
  try {
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrvTabFeatureFlds_Sim_Sel = arrvTabFeatureFlds_Sim_Sel.sort(
        vTabFeatureFlds_SimEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrvTabFeatureFlds_Sim_Sel = arrvTabFeatureFlds_Sim_Sel.sort(objPagerPara.sortFun);
    }

    return arrvTabFeatureFlds_Sim_Sel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      vTabFeatureFlds_SimEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvTabFeatureFlds_SimENEx>();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2022-10-31
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function vTabFeatureFlds_SimEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  // const strThisFuncName = 'SortFunByKey';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      default:
        return vTabFeatureFlds_Sim_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      default:
        return vTabFeatureFlds_Sim_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2022-10-31
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function vTabFeatureFlds_SimEx_FuncMapByFldName(
  strFldName: string,
  objvTabFeatureFlds_SimEx: clsvTabFeatureFlds_SimENEx,
) {
  const strThisFuncName = vTabFeatureFlds_SimEx_FuncMapByFldName.name;
  console.log(objvTabFeatureFlds_SimEx);

  let strMsg = '';
  //如果是本表中字段，不需要映射
  const arrFldName = clsvTabFeatureFlds_SimEN.AttributeName;
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

export async function vTabFeatureFlds_SimEx_GetObjLstByCmPrjIdAsync(
  strCmPrjId: string,
  strCondition: string,
): Promise<Array<clsvTabFeatureFlds_SimENEx>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLstByCmPrjId';
  const strUrl = vTabFeatureFlds_SimEx_GetWebApiUrl(vTabFeatureFlds_SimEx_Controller, strAction);
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
          vTabFeatureFlds_SimEx_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vTabFeatureFlds_Sim_GetObjLstByJSONObjLst(returnObjLst);
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
        vTabFeatureFlds_SimEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        vTabFeatureFlds_SimEx_ConstructorName,
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
export async function vTabFeatureFlds_SimEx_GetObjBymIdCache(
  lngmId: number,
  strPrjId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByFldIdCache';

  if (lngmId == 0) {
    const strMsg = Format('参数:[lngmId]不能为空！(In GetObjByFldIdCache)');
    console.error(strMsg);
    throw strMsg;
  }

  const arrvTabFeatureFlds_SimObjLstCache = await vTabFeatureFlds_Sim_GetObjLstCache(strPrjId);
  try {
    const arrvTabFeatureFlds_Sim_Sel: Array<clsvTabFeatureFlds_SimENEx> =
      arrvTabFeatureFlds_SimObjLstCache.filter((x) => x.mId == lngmId);
    let objvTabFeatureFlds_Sim;
    if (arrvTabFeatureFlds_Sim_Sel.length > 0) {
      objvTabFeatureFlds_Sim = arrvTabFeatureFlds_Sim_Sel[0];
      return objvTabFeatureFlds_Sim;
    } else {
      if (bolTryAsyncOnce == true) {
        objvTabFeatureFlds_Sim = await vTabFeatureFlds_Sim_GetObjBymIdAsync(lngmId);
        if (objvTabFeatureFlds_Sim != null) {
          vTabFeatureFlds_Sim_ReFreshThisCache(strPrjId);
          return objvTabFeatureFlds_Sim;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      lngmId,
      vTabFeatureFlds_SimEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 获取本地缓存中的对象列表，是整个表中的全部记录，也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vTabFeatureFlds_SimEx_GetObjLstCacheBak(
  strCmPrjId: string,
): Promise<Array<clsvTabFeatureFlds_SimENEx>> {
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
  let arrvTabFeatureFlds_SimObjLstCache;
  switch (clsvTabFeatureFlds_SimEN.CacheModeId) {
    case '04': //sessionStorage
      arrvTabFeatureFlds_SimObjLstCache = await vTabFeatureFlds_SimEx_GetObjLst_sessionStorage(
        strCmPrjId,
      );
      break;
    case '03': //localStorage
      arrvTabFeatureFlds_SimObjLstCache = await vTabFeatureFlds_SimEx_GetObjLst_localStorage(
        strCmPrjId,
      );
      break;
    case '02': //ClientCache
      arrvTabFeatureFlds_SimObjLstCache = await vTabFeatureFlds_SimEx_GetObjLst_ClientCache(
        strCmPrjId,
      );
      break;
    default:
      arrvTabFeatureFlds_SimObjLstCache = await vTabFeatureFlds_SimEx_GetObjLst_ClientCache(
        strCmPrjId,
      );
      break;
  }
  // const arrvTabFeatureFlds_SimObjLst = vTabFeatureFlds_Sim_GetObjLstByJSONObjLst(
  //   arrvTabFeatureFlds_SimObjLstCache,
  // );
  return arrvTabFeatureFlds_SimObjLstCache;
}

/**
 * 获取本地sessionStorage缓存中的对象列表，是整个表中的全部记录，也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vTabFeatureFlds_SimEx_GetObjLst_sessionStorage(strCmPrjId: string) {
  const strThisFuncName = 'GetObjLst_sessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  strWhereCond = Format('1=1', strCmPrjId);
  const strKey = Format('{0}_{1}', clsvTabFeatureFlds_SimEN._CurrTabName, strCmPrjId);
  //clsvTabFeatureFlds_SimEN.CacheAddiCondition = GetSessionCacheAdditionCondition(clsvTabFeatureFlds_SimEN._CurrTabName);
  if (IsNullOrEmpty(clsvTabFeatureFlds_SimEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvTabFeatureFlds_SimEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空！不正确');
    throw new Error('关键字为空！不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在，直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvTabFeatureFlds_SimExObjLstCache: Array<clsvTabFeatureFlds_SimENEx> =
      JSON.parse(strTempObjLst);
    const arrvTabFeatureFlds_SimObjLst_T = vTabFeatureFlds_Sim_GetObjLstByJSONObjLst(
      arrvTabFeatureFlds_SimExObjLstCache,
    );
    return arrvTabFeatureFlds_SimObjLst_T;
  }
  try {
    const arrvTabFeatureFlds_SimExObjLst = await vTabFeatureFlds_SimEx_GetObjLstByCmPrjIdAsync(
      strCmPrjId,
      strWhereCond,
    );
    const strPrefix = Format('{0}_', clsvTabFeatureFlds_SimEN._CurrTabName);
    const arrCacheKeyLst = SessionStorage_GetKeyByPrefix(strPrefix);
    arrCacheKeyLst.forEach((x) => sessionStorage.removeItem(x));
    sessionStorage.setItem(strKey, JSON.stringify(arrvTabFeatureFlds_SimExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立，对象列表数：{1}!',
      strKey,
      arrvTabFeatureFlds_SimExObjLst.length,
    );
    console.log(strInfo);
    return arrvTabFeatureFlds_SimExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vTabFeatureFlds_SimEx_ConstructorName,
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
export async function vTabFeatureFlds_SimEx_GetObjLst_localStorage(strCmPrjId: string) {
  const strThisFuncName = 'GetObjLst_localStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  strWhereCond = Format('1=1', strCmPrjId);
  const strKey = Format('{0}_{1}', clsvTabFeatureFlds_SimEN._CurrTabName, strCmPrjId);
  //clsvTabFeatureFlds_SimEN.CacheAddiCondition = GetSessionCacheAdditionCondition(clsvTabFeatureFlds_SimEN._CurrTabName);
  if (IsNullOrEmpty(clsvTabFeatureFlds_SimEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvTabFeatureFlds_SimEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空！不正确');
    throw new Error('关键字为空！不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在，直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvTabFeatureFlds_SimExObjLstCache: Array<clsvTabFeatureFlds_SimENEx> =
      JSON.parse(strTempObjLst);
    const arrvTabFeatureFlds_SimObjLst_T = vTabFeatureFlds_Sim_GetObjLstByJSONObjLst(
      arrvTabFeatureFlds_SimExObjLstCache,
    );
    return arrvTabFeatureFlds_SimObjLst_T;
  }
  try {
    const arrvTabFeatureFlds_SimExObjLst = await vTabFeatureFlds_SimEx_GetObjLstByCmPrjIdAsync(
      strCmPrjId,
      strWhereCond,
    );
    const strPrefix = Format('{0}_', clsvTabFeatureFlds_SimEN._CurrTabName);
    const arrCacheKeyLst = LocalStorage_GetKeyByPrefix(strPrefix);
    arrCacheKeyLst.forEach((x) => localStorage.removeItem(x));
    localStorage.setItem(strKey, JSON.stringify(arrvTabFeatureFlds_SimExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立，对象列表数：{1}!',
      strKey,
      arrvTabFeatureFlds_SimExObjLst.length,
    );
    console.log(strInfo);
    return arrvTabFeatureFlds_SimExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vTabFeatureFlds_SimEx_ConstructorName,
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
export async function vTabFeatureFlds_SimEx_GetObjLst_ClientCache(strCmPrjId: string) {
  const strThisFuncName = 'GetObjLst_ClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  strWhereCond = Format('1=1', strCmPrjId);
  const strKey = Format('{0}_{1}', clsvTabFeatureFlds_SimEN._CurrTabName, strCmPrjId);
  //clsvTabFeatureFlds_SimEN.CacheAddiCondition = GetSessionCacheAdditionCondition(clsvTabFeatureFlds_SimEN._CurrTabName);
  if (IsNullOrEmpty(clsvTabFeatureFlds_SimEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvTabFeatureFlds_SimEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空！不正确');
    throw new Error('关键字为空！不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在，直接返回
    const arrvTabFeatureFlds_SimExObjLstCache: Array<clsvTabFeatureFlds_SimENEx> =
      CacheHelper.Get(strKey);
    const arrvTabFeatureFlds_SimObjLst_T = vTabFeatureFlds_Sim_GetObjLstByJSONObjLst(
      arrvTabFeatureFlds_SimExObjLstCache,
    );
    return arrvTabFeatureFlds_SimObjLst_T;
  }
  try {
    const arrvTabFeatureFlds_SimExObjLst = await vTabFeatureFlds_SimEx_GetObjLstByCmPrjIdAsync(
      strCmPrjId,
      strWhereCond,
    );
    CacheHelper.Add(strKey, arrvTabFeatureFlds_SimExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立，对象列表数：{1}!',
      strKey,
      arrvTabFeatureFlds_SimExObjLst.length,
    );
    console.log(strInfo);
    return arrvTabFeatureFlds_SimExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vTabFeatureFlds_SimEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 获取本地缓存中的对象列表，是整个表中的全部记录，也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vTabFeatureFlds_SimEx_GetObjLstCache(
  strPrjId: string,
): Promise<Array<clsvTabFeatureFlds_SimENEx>> {
  //const strThisFuncName = "GetObjLstCache";

  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format('缓存分类变量:[strPrjId]不能为空！');
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format('缓存分类变量:[strPrjId]的长度:[{0}]不正确！', strPrjId.length);
    console.error(strMsg);
    throw strMsg;
  }
  let arrvTabFeatureFlds_SimObjLstCache;
  switch (clsvTabFeatureFlds_SimEN.CacheModeId) {
    case '04': //sessionStorage
      arrvTabFeatureFlds_SimObjLstCache = await vTabFeatureFlds_SimEx_GetObjLst_sessionStorage(
        strPrjId,
      );
      break;
    case '03': //localStorage
      arrvTabFeatureFlds_SimObjLstCache = await vTabFeatureFlds_SimEx_GetObjLst_localStorage(
        strPrjId,
      );
      break;
    case '02': //ClientCache
      arrvTabFeatureFlds_SimObjLstCache = await vTabFeatureFlds_SimEx_GetObjLst_ClientCache(
        strPrjId,
      );
      break;
    default:
      arrvTabFeatureFlds_SimObjLstCache = await vTabFeatureFlds_SimEx_GetObjLst_ClientCache(
        strPrjId,
      );
      break;
  }
  // const arrvTabFeatureFlds_SimObjLst = vTabFeatureFlds_Sim_GetObjLstByJSONObjLst(
  //   arrvTabFeatureFlds_SimObjLstCache,
  // );
  return arrvTabFeatureFlds_SimObjLstCache;
}

/// <summary>
/// 根据关键字获取相关对象, 从缓存的对象列表中获取.没有就返回null.
/// </summary>
/// <param name = "strTabFeatureId">strTabFeatureId</param>
/// <returns>根据关键字获取的对象</returns>
export async function vTabFeatureFlds_SimEx_GetObjLstByTabFeatureIdCache(
  strTabFeatureId: string,
  strPrjId: string,
): Promise<Array<clsvTabFeatureFlds_SimENEx>> {
  //初始化列表缓存
  const arrObjLstCache = await vTabFeatureFlds_Sim_GetObjLstCache(strPrjId);

  const arrTabFeatureFldsObjLst_Sel = arrObjLstCache.filter(
    (x) => x.tabFeatureId == strTabFeatureId,
  );

  return arrTabFeatureFldsObjLst_Sel;
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:20210703115125
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function vTabFeatureFlds_SimEx_SortFun_OrderNum(
  a: clsvTabFeatureFlds_SimENEx,
  b: clsvTabFeatureFlds_SimENEx,
): number {
  return a.orderNum - b.orderNum;
}

/// <summary>
/// 根据strTabFeatureId获取扩展对象列表
/// (AutoGCLib.BusinessLogicEx4CSharp:Gen_4BLEx_GetObjExLst)
/// </summary>
/// <param name = "strTabFeatureId">strTabFeatureId</param>
/// <returns>返回扩展对象列表</returns>
export async function vTabFeatureFlds_SimEx_GetObjExLstByTabFeatureId(
  strTabFeatureId: string,
  strPrjId: string,
) {
  const arrObjExLst = await vTabFeatureFlds_SimEx_GetObjLstByTabFeatureIdCache(
    strTabFeatureId,
    strPrjId,
  );
  return arrObjExLst;
}
