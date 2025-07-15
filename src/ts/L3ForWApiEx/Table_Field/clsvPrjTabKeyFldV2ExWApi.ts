/**
 * vPrjTabKeyFldV2(vPrjTabKeyFldV2)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2022年11月02日.
 * 注意:该类必须与调用界面处于同一个包，否则调用不成功!
 **/
//import $ from "jquery";
import axios from 'axios';

import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';

import { clsvPrjTabKeyFldV2EN } from '@/ts/L0Entity/Table_Field/clsvPrjTabKeyFldV2EN';
import { clsvPrjTabKeyFldV2ENEx } from '@/ts/L0Entity/Table_Field/clsvPrjTabKeyFldV2ENEx';
import {
  vPrjTabKeyFldV2_GetObjLstByJSONObjLst,
  vPrjTabKeyFldV2_GetObjLstByPagerAsync,
  vPrjTabKeyFldV2_SortFunByKey,
} from '@/ts/L3ForWApi/Table_Field/clsvPrjTabKeyFldV2WApi';
import {
  CacheHelper,
  LocalStorage_GetKeyByPrefix,
  SessionStorage_GetKeyByPrefix,
} from '@/ts/PubFun/CacheHelper';
import { GetBr_Empty, GetSpan_Empty } from '@/ts/PubFun/clsCommFunc4Ctrl';
import { GetSortExpressInfo, ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';

import { vFieldTab_Sim_GetObjByFldIdCache } from '@/ts/L3ForWApi/Table_Field/clsvFieldTab_SimWApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';

export const vPrjTabKeyFldV2Ex_Controller = 'vPrjTabKeyFldV2ExApi';
export const vPrjTabKeyFldV2Ex_ConstructorName = 'vPrjTabKeyFldV2Ex';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function vPrjTabKeyFldV2Ex_GetWebApiUrl(strController: string, strAction: string): string {
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
 * @param objvPrjTabKeyFldV2ENS:源对象
 * @returns 目标对象=>clsvPrjTabKeyFldV2EN:objvPrjTabKeyFldV2ENT
 **/
export function vPrjTabKeyFldV2Ex_CopyToEx(
  objvPrjTabKeyFldV2ENS: clsvPrjTabKeyFldV2EN,
): clsvPrjTabKeyFldV2ENEx {
  const strThisFuncName = vPrjTabKeyFldV2Ex_CopyToEx.name;
  const objvPrjTabKeyFldV2ENT = new clsvPrjTabKeyFldV2ENEx();
  try {
    ObjectAssign(objvPrjTabKeyFldV2ENT, objvPrjTabKeyFldV2ENS);
    return objvPrjTabKeyFldV2ENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      vPrjTabKeyFldV2Ex_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objvPrjTabKeyFldV2ENT;
  }
}
//该表在前台TypeScript中，不需要使用Cache;

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function vPrjTabKeyFldV2Ex_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsvPrjTabKeyFldV2ENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrvPrjTabKeyFldV2ExObjLst = await vPrjTabKeyFldV2_GetObjLstByPagerAsync(objPagerPara);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsvPrjTabKeyFldV2EN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrvPrjTabKeyFldV2ExObjLst) {
      await vPrjTabKeyFldV2Ex_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrvPrjTabKeyFldV2ExObjLst.length == 0) return arrvPrjTabKeyFldV2ExObjLst;
  let arrvPrjTabKeyFldV2_Sel: Array<clsvPrjTabKeyFldV2ENEx> = arrvPrjTabKeyFldV2ExObjLst;
  try {
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrvPrjTabKeyFldV2_Sel = arrvPrjTabKeyFldV2_Sel.sort(
        vPrjTabKeyFldV2Ex_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrvPrjTabKeyFldV2_Sel = arrvPrjTabKeyFldV2_Sel.sort(objPagerPara.sortFun);
    }

    return arrvPrjTabKeyFldV2_Sel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      vPrjTabKeyFldV2Ex_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvPrjTabKeyFldV2ENEx>();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2022-11-02
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function vPrjTabKeyFldV2Ex_SortFunByKey(strKey: string, AscOrDesc: string) {
  // const strThisFuncName = 'SortFunByKey';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      default:
        return vPrjTabKeyFldV2_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      default:
        return vPrjTabKeyFldV2_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2022-11-02
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function vPrjTabKeyFldV2Ex_FuncMapByFldName(
  strFldName: string,
  objvPrjTabKeyFldV2Ex: clsvPrjTabKeyFldV2ENEx,
) {
  const strThisFuncName = vPrjTabKeyFldV2Ex_FuncMapByFldName.name;
  console.log(objvPrjTabKeyFldV2Ex);
  let strMsg = '';
  //如果是本表中字段，不需要映射
  const arrFldName = clsvPrjTabKeyFldV2EN.AttributeName;
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

export async function vPrjTabKeyFldV2Ex_KeyFldIds(strTabId: string, strCmPrjId: string) {
  const arrvPrjTabKeyFldV2 = await vPrjTabKeyFldV2Ex_GetObjLstByTabIdCache(strTabId, strCmPrjId);
  if (arrvPrjTabKeyFldV2.length == 0) return '';
  const arrFldId = arrvPrjTabKeyFldV2.map((x) => x.fldId);
  return arrFldId.join(',');
}

/// <summary>
/// 根据关键字获取相关对象, 从缓存的对象列表中获取.没有就返回null.
/// (AutoGCLib.AutoGC6Cs_Business:Gen_4BL_GetObjByKeyCache)
/// </summary>
/// <param name = "strTabId">所给的关键字</param>
/// <param name = "strPrjId">所给的关键字</param>
/// <returns>根据关键字获取的对象</returns>
export async function vPrjTabKeyFldV2Ex_GetObjLstByTabIdCache(
  strTabId: string,
  strCmPrjId: string,
): Promise<Array<clsvPrjTabKeyFldV2EN>> {
  //初始化列表缓存
  const arrObjLst: Array<clsvPrjTabKeyFldV2EN> = await vPrjTabKeyFldV2Ex_GetObjLstCache(strCmPrjId);
  if (arrObjLst.length == 0) {
    const strMsg = Format('分类:[strCmPrjId:{0}]的记录数为0!', strCmPrjId);
    console.error(strMsg);
  }
  const arrObjLst_Sel1 = arrObjLst.filter((x) => x.tabId == strTabId);
  return arrObjLst_Sel1;
}

export async function vPrjTabKeyFldV2Ex_GetPrimaryTypeInfo0(
  strTabId: string,
  strCmPrjId: string,
): Promise<string> {
  const arrObjLst: Array<clsvPrjTabKeyFldV2EN> = await vPrjTabKeyFldV2Ex_GetObjLstCache(strCmPrjId);
  const arrObjLst_Sel1 = arrObjLst.filter((x) => x.tabId == strTabId);
  if (arrObjLst_Sel1.length == 0) return '';

  let strPrimaryTypeName = '';
  const spnRoot = GetSpan_Empty('');
  let bolIsFirst = true;
  for (const objPrjTabFld of arrObjLst_Sel1) {
    // strKeyFldId += objPrjTabFld.fldId;
    //const objFieldTab = await vFieldTab_SimEx_GetObjByFldIdCache(objPrjTabFld.fldId, clsPrivateSessionStorage.cmPrjId);
    //if (objFieldTab == null) continue;
    //strKeyFldName += objFieldTab.fldName;
    // strPrimaryTypeId = objPrjTabFld.primaryTypeId;
    strPrimaryTypeName = objPrjTabFld.primaryTypeName;
    if (bolIsFirst) {
      const spnPrimaryTypeName = GetSpan_Empty('text-primary');
      spnPrimaryTypeName.innerHTML = strPrimaryTypeName;
      spnPrimaryTypeName.title = '主键类型';
      spnRoot.appendChild(spnPrimaryTypeName);
      spnRoot.appendChild(GetBr_Empty());
      bolIsFirst = false;
    }
    const spnKeyFldName = GetSpan_Empty('text-info');
    spnKeyFldName.innerHTML = objPrjTabFld.keyFldName;
    spnKeyFldName.title = '主键字段名';
    spnRoot.appendChild(spnKeyFldName);
    spnRoot.appendChild(GetBr_Empty());
  }
  //const objPrimaryType = await PrimaryType_GetObjByPrimaryTypeIdCache(strPrimaryTypeId);
  //if (objPrimaryType == null) strPrimaryTypeName = "未知类型"
  //else strPrimaryTypeName = objPrimaryType.primaryTypeName;
  //const strReturn = Format("<span class='text-primary' title='主键类型'>{0}</span><br/><span class='text-info' title='主键字段名'>{1}</span>",
  //    strPrimaryTypeName, strKeyFldName);
  return spnRoot.outerHTML;
}

export async function vPrjTabKeyFldV2Ex_GetPrimaryTypeHtmlInfo(
  strTabId: string,
  strCmPrjId: string,
): Promise<string> {
  const arrObjLst: Array<clsvPrjTabKeyFldV2EN> = await vPrjTabKeyFldV2Ex_GetObjLstCache(strCmPrjId);
  const arrObjLst_Sel1 = arrObjLst.filter((x) => x.tabId == strTabId);
  if (arrObjLst_Sel1.length == 0) return '';

  let strPrimaryTypeName = '';
  const spnRoot = GetSpan_Empty('');
  let bolIsFirst = true;
  for (const objPrjTabFld of arrObjLst_Sel1) {
    // strKeyFldId += objPrjTabFld.fldId;
    //const objFieldTab = await vFieldTab_SimEx_GetObjByFldIdCache(objPrjTabFld.fldId, clsPrivateSessionStorage.cmPrjId);
    //if (objFieldTab == null) continue;
    //strKeyFldName += objFieldTab.fldName;
    // strPrimaryTypeId = objPrjTabFld.primaryTypeId;
    strPrimaryTypeName = objPrjTabFld.primaryTypeName;
    if (bolIsFirst) {
      const spnPrimaryTypeName = GetSpan_Empty('text-primary');
      spnPrimaryTypeName.innerHTML = strPrimaryTypeName;
      spnPrimaryTypeName.title = '主键类型';
      spnRoot.appendChild(spnPrimaryTypeName);
      spnRoot.appendChild(GetBr_Empty());
      bolIsFirst = false;
    }
    const spnKeyFldName = GetSpan_Empty('text-info');
    spnKeyFldName.innerHTML = objPrjTabFld.keyFldName;
    spnKeyFldName.title = '主键字段名';
    spnRoot.appendChild(spnKeyFldName);
    spnRoot.appendChild(GetBr_Empty());
  }
  //const objPrimaryType = await PrimaryType_GetObjByPrimaryTypeIdCache(strPrimaryTypeId);
  //if (objPrimaryType == null) strPrimaryTypeName = "未知类型"
  //else strPrimaryTypeName = objPrimaryType.primaryTypeName;
  //const strReturn = Format("<span class='text-primary' title='主键类型'>{0}</span><br/><span class='text-info' title='主键字段名'>{1}</span>",
  //    strPrimaryTypeName, strKeyFldName);
  return spnRoot.outerHTML;
}
export async function vPrjTabKeyFldV2Ex_GetPrimaryTypeName(
  strTabId: string,
  strCmPrjId: string,
): Promise<string> {
  const arrObjLst: Array<clsvPrjTabKeyFldV2EN> = await vPrjTabKeyFldV2Ex_GetObjLstCache(strCmPrjId);
  const arrObjLst_Sel1 = arrObjLst.filter((x) => x.tabId == strTabId);
  if (arrObjLst_Sel1.length == 0) return '';
  // const strKeyFldId = '';
  // const strKeyFldName = '';
  // const strPrimaryTypeId = '';

  let strPrimaryTypeName = '';

  for (const objPrjTabFld of arrObjLst_Sel1) {
    // strKeyFldId += objPrjTabFld.fldId;
    const objFieldTab = await vFieldTab_Sim_GetObjByFldIdCache(
      objPrjTabFld.fldId,
      clsPrivateSessionStorage.currSelPrjId,
    );
    if (objFieldTab == null) continue;
    // strKeyFldName += objFieldTab.fldName;
    // strPrimaryTypeId = objPrjTabFld.primaryTypeId;
    strPrimaryTypeName = objPrjTabFld.primaryTypeName;
  }

  return strPrimaryTypeName;
}

export async function vPrjTabKeyFldV2Ex_GetKeyFldNames(
  strTabId: string,
  strCmPrjId: string,
): Promise<string> {
  const arrObjLst: Array<clsvPrjTabKeyFldV2EN> = await vPrjTabKeyFldV2Ex_GetObjLstCache(strCmPrjId);
  const arrObjLst_Sel1 = arrObjLst.filter((x) => x.tabId == strTabId);
  if (arrObjLst_Sel1.length == 0) return '';
  // let strKeyFldId = '';
  let strKeyFldNames = '';
  // const strPrimaryTypeId = '';

  for (const objPrjTabFld of arrObjLst_Sel1) {
    // strKeyFldId += objPrjTabFld.fldId;
    const objFieldTab = await vFieldTab_Sim_GetObjByFldIdCache(
      objPrjTabFld.fldId,
      clsPrivateSessionStorage.currSelPrjId,
    );
    if (objFieldTab == null) continue;
    strKeyFldNames += Format('{0},', objFieldTab.fldName);
  }

  return strKeyFldNames;
}

/**
 * 获取本地缓存中的对象列表，是整个表中的全部记录，也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vPrjTabKeyFldV2Ex_GetObjLstCache(
  strCmPrjId: string,
): Promise<Array<clsvPrjTabKeyFldV2ENEx>> {
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
  let arrvPrjTabKeyFldV2ObjLstCache;
  switch (clsvPrjTabKeyFldV2EN.CacheModeId) {
    case '04': //sessionStorage
      arrvPrjTabKeyFldV2ObjLstCache = await vPrjTabKeyFldV2Ex_GetObjLst_sessionStorage(strCmPrjId);
      break;
    case '03': //localStorage
      arrvPrjTabKeyFldV2ObjLstCache = await vPrjTabKeyFldV2Ex_GetObjLst_localStorage(strCmPrjId);
      break;
    case '02': //ClientCache
      arrvPrjTabKeyFldV2ObjLstCache = await vPrjTabKeyFldV2Ex_GetObjLst_ClientCache(strCmPrjId);
      break;
    default:
      arrvPrjTabKeyFldV2ObjLstCache = await vPrjTabKeyFldV2Ex_GetObjLst_ClientCache(strCmPrjId);
      break;
  }
  // const arrvPrjTabKeyFldV2ObjLst = vPrjTabKeyFldV2_GetObjLstByJSONObjLst(
  //   arrvPrjTabKeyFldV2ObjLstCache,
  // );
  return arrvPrjTabKeyFldV2ObjLstCache;
}

/**
 * 获取本地sessionStorage缓存中的对象列表，是整个表中的全部记录，也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vPrjTabKeyFldV2Ex_GetObjLst_sessionStorage(strCmPrjId: string) {
  const strThisFuncName = 'GetObjLst_sessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  strWhereCond = Format('1=1', strCmPrjId);
  const strKey = Format('{0}_{1}', clsvPrjTabKeyFldV2EN._CurrTabName, strCmPrjId);
  //clsvPrjTabKeyFldV2EN.CacheAddiCondition = GetSessionCacheAdditionCondition(clsvPrjTabKeyFldV2EN._CurrTabName);
  if (IsNullOrEmpty(clsvPrjTabKeyFldV2EN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvPrjTabKeyFldV2EN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空！不正确');
    throw new Error('关键字为空！不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在，直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvPrjTabKeyFldV2ExObjLstCache: Array<clsvPrjTabKeyFldV2ENEx> =
      JSON.parse(strTempObjLst);
    const arrvPrjTabKeyFldV2ObjLst_T = vPrjTabKeyFldV2_GetObjLstByJSONObjLst(
      arrvPrjTabKeyFldV2ExObjLstCache,
    );
    return arrvPrjTabKeyFldV2ObjLst_T;
  }
  try {
    const arrvPrjTabKeyFldV2ExObjLst = await vPrjTabKeyFldV2Ex_GetObjLstByCmPrjIdAsync(
      strCmPrjId,
      strWhereCond,
    );
    const strPrefix = Format('{0}_', clsvPrjTabKeyFldV2EN._CurrTabName);
    const arrCacheKeyLst = SessionStorage_GetKeyByPrefix(strPrefix);
    arrCacheKeyLst.forEach((x) => sessionStorage.removeItem(x));
    sessionStorage.setItem(strKey, JSON.stringify(arrvPrjTabKeyFldV2ExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立，对象列表数：{1}!',
      strKey,
      arrvPrjTabKeyFldV2ExObjLst.length,
    );
    console.log(strInfo);
    return arrvPrjTabKeyFldV2ExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vPrjTabKeyFldV2Ex_ConstructorName,
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
export async function vPrjTabKeyFldV2Ex_GetObjLst_localStorage(strCmPrjId: string) {
  const strThisFuncName = 'GetObjLst_localStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  strWhereCond = Format('1=1', strCmPrjId);
  const strKey = Format('{0}_{1}', clsvPrjTabKeyFldV2EN._CurrTabName, strCmPrjId);
  //clsvPrjTabKeyFldV2EN.CacheAddiCondition = GetSessionCacheAdditionCondition(clsvPrjTabKeyFldV2EN._CurrTabName);
  if (IsNullOrEmpty(clsvPrjTabKeyFldV2EN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvPrjTabKeyFldV2EN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空！不正确');
    throw new Error('关键字为空！不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在，直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvPrjTabKeyFldV2ExObjLstCache: Array<clsvPrjTabKeyFldV2ENEx> =
      JSON.parse(strTempObjLst);
    const arrvPrjTabKeyFldV2ObjLst_T = vPrjTabKeyFldV2_GetObjLstByJSONObjLst(
      arrvPrjTabKeyFldV2ExObjLstCache,
    );
    return arrvPrjTabKeyFldV2ObjLst_T;
  }
  try {
    const arrvPrjTabKeyFldV2ExObjLst = await vPrjTabKeyFldV2Ex_GetObjLstByCmPrjIdAsync(
      strCmPrjId,
      strWhereCond,
    );
    const strPrefix = Format('{0}_', clsvPrjTabKeyFldV2EN._CurrTabName);
    const arrCacheKeyLst = LocalStorage_GetKeyByPrefix(strPrefix);
    arrCacheKeyLst.forEach((x) => localStorage.removeItem(x));
    localStorage.setItem(strKey, JSON.stringify(arrvPrjTabKeyFldV2ExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立，对象列表数：{1}!',
      strKey,
      arrvPrjTabKeyFldV2ExObjLst.length,
    );
    console.log(strInfo);
    return arrvPrjTabKeyFldV2ExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vPrjTabKeyFldV2Ex_ConstructorName,
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
export async function vPrjTabKeyFldV2Ex_GetObjLst_ClientCache(strCmPrjId: string) {
  const strThisFuncName = 'GetObjLst_ClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  strWhereCond = Format('1=1', strCmPrjId);
  const strKey = Format('{0}_{1}', clsvPrjTabKeyFldV2EN._CurrTabName, strCmPrjId);
  //clsvPrjTabKeyFldV2EN.CacheAddiCondition = GetSessionCacheAdditionCondition(clsvPrjTabKeyFldV2EN._CurrTabName);
  if (IsNullOrEmpty(clsvPrjTabKeyFldV2EN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvPrjTabKeyFldV2EN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空！不正确');
    throw new Error('关键字为空！不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在，直接返回
    const arrvPrjTabKeyFldV2ExObjLstCache: Array<clsvPrjTabKeyFldV2ENEx> = CacheHelper.Get(strKey);
    const arrvPrjTabKeyFldV2ObjLst_T = vPrjTabKeyFldV2_GetObjLstByJSONObjLst(
      arrvPrjTabKeyFldV2ExObjLstCache,
    );
    return arrvPrjTabKeyFldV2ObjLst_T;
  }
  try {
    const arrvPrjTabKeyFldV2ExObjLst = await vPrjTabKeyFldV2Ex_GetObjLstByCmPrjIdAsync(
      strCmPrjId,
      strWhereCond,
    );
    CacheHelper.Add(strKey, arrvPrjTabKeyFldV2ExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立，对象列表数：{1}!',
      strKey,
      arrvPrjTabKeyFldV2ExObjLst.length,
    );
    console.log(strInfo);
    return arrvPrjTabKeyFldV2ExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vPrjTabKeyFldV2Ex_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw strMsg;
  }
}

export async function vPrjTabKeyFldV2Ex_GetObjLstByCmPrjIdAsync(
  strCmPrjId: string,
  strCondition: string,
): Promise<Array<clsvPrjTabKeyFldV2ENEx>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLstByCmPrjId';
  const strUrl = vPrjTabKeyFldV2Ex_GetWebApiUrl(vPrjTabKeyFldV2Ex_Controller, strAction);
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
          vPrjTabKeyFldV2Ex_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vPrjTabKeyFldV2_GetObjLstByJSONObjLst(returnObjLst);
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
        vPrjTabKeyFldV2Ex_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        vPrjTabKeyFldV2Ex_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
