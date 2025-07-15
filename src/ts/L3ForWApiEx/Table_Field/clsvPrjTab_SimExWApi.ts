/**
 * v工程表_SimV2(vPrjTab_Sim)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2022年10月29日.
 * 注意:该类必须与调用界面处于同一个包，否则调用不成功!
 **/
// import $ from 'jquery';
import axios from 'axios';

import { PrjTabEx_SetTabUseStateId } from './clsPrjTabExWApi';
import { vTabFeature_SimEx_GetObjLstCache } from './clsvTabFeature_SimExWApi';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { clsvDataNode_SimEN } from '@/ts/L0Entity/AIModule/clsvDataNode_SimEN';

import { enumPrjFeature } from '@/ts/L0Entity/PrjFunction/clsPrjFeatureEN';
import { enumCacheMode } from '@/ts/L0Entity/SystemSet/clsCacheModeEN';
import { enumTabType } from '@/ts/L0Entity/Table_Field/clsTabTypeEN';
import { clsvPrjTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvPrjTab_SimEN';
import { clsvPrjTab_SimENEx } from '@/ts/L0Entity/Table_Field/clsvPrjTab_SimENEx';
import { clsvTabFeature_SimEN } from '@/ts/L0Entity/Table_Field/clsvTabFeature_SimEN';

import { PrjTabFld_GetObjLstCache } from '@/ts/L3ForWApi/Table_Field/clsPrjTabFldWApi';
import {
  vPrjTab_Sim_GetObjByTabIdAsync,
  vPrjTab_Sim_GetObjLstByJSONObjLst,
  vPrjTab_Sim_GetObjLstCache,
  vPrjTab_Sim_ReFreshThisCache,
  vPrjTab_Sim_SortFunByKey,
} from '@/ts/L3ForWApi/Table_Field/clsvPrjTab_SimWApi';

import {
  LocalStorage_GetKeyByPrefix,
  SessionStorage_GetKeyByPrefix,
} from '@/ts/PubFun/CacheHelper';
import { GetArray } from '@/ts/PubFun/clsCommFunc4Ctrl';
import {
  BindDdl_ObjLstInDivObj_V,
  BindDdl_ObjLstInDiv_V,
  ObjectAssign,
} from '@/ts/PubFun/clsCommFunc4Web';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { vDataNode_Sim_GetObjLstAsync } from '@/ts/L3ForWApi/AIModule/clsvDataNode_SimWApi';

import { PubDataBase_GetFieldValue } from '@/ts/FunClass/PubDataBaseWApi';
import { clsFieldTab4CodeConvEN } from '@/ts/L0Entity/Table_Field/clsFieldTab4CodeConvEN';
import { vCmProjectPrjTab_Sim_GetObjLstCache } from '@/ts/L3ForWApi/CodeMan/clsvCmProjectPrjTab_SimWApi';
import { CMProjectEx_GetPrjIdByCmPrjIdCache } from '@/ts/L3ForWApiEx/CodeMan/clsCMProjectExWApi';

export const vPrjTab_SimEx_Controller = 'vPrjTab_SimExApi';
export const vPrjTab_SimEx_ConstructorName = 'vPrjTab_SimEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function vPrjTab_SimEx_GetWebApiUrl(strController: string, strAction: string): string {
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
 * @param objvPrjTab_SimENS:源对象
 * @returns 目标对象=>clsvPrjTab_SimEN:objvPrjTab_SimENT
 **/
export function vPrjTab_SimEx_CopyToEx(objvPrjTab_SimENS: clsvPrjTab_SimEN): clsvPrjTab_SimENEx {
  const strThisFuncName = vPrjTab_SimEx_CopyToEx.name;
  const objvPrjTab_SimENT = new clsvPrjTab_SimENEx();
  try {
    ObjectAssign(objvPrjTab_SimENT, objvPrjTab_SimENS);
    return objvPrjTab_SimENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      vPrjTab_SimEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objvPrjTab_SimENT;
  }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2022-10-29
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function vPrjTab_SimEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  // const strThisFuncName = 'SortFunByKey';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      default:
        return vPrjTab_Sim_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      default:
        return vPrjTab_Sim_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2022-10-29
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function vPrjTab_SimEx_FuncMapByFldName(
  strFldName: string,
  objvPrjTab_SimEx: clsvPrjTab_SimENEx,
) {
  const strThisFuncName = vPrjTab_SimEx_FuncMapByFldName.name;
  console.log(objvPrjTab_SimEx);
  let strMsg = '';
  //如果是本表中字段，不需要映射
  const arrFldName = clsvPrjTab_SimEN.AttributeName;
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

export async function vPrjTab_SimEx_GetObjLstByCmPrjIdAsync(
  strCmPrjId: string,
  strCondition: string,
): Promise<Array<clsvPrjTab_SimEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLstByCmPrjId';
  const strUrl = vPrjTab_SimEx_GetWebApiUrl(vPrjTab_SimEx_Controller, strAction);
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
          vPrjTab_SimEx_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vPrjTab_Sim_GetObjLstByJSONObjLst(returnObjLst);
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
        vPrjTab_SimEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        vPrjTab_SimEx_ConstructorName,
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
 * @param strTabId:所给的关键字
 * @returns 对象
 */
export async function vPrjTab_SimEx_GetObjByTabIdCache(
  strTabId: string,
  strPrjId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByTabIdCache';

  if (IsNullOrEmpty(strTabId) == true) {
    const strMsg = Format('参数:[strTabId]不能为空！(In GetObjByTabIdCache)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strTabId.length != 8) {
    const strMsg = Format('缓存分类变量:[strTabId]的长度:[{0}]不正确！', strTabId.length);
    console.error(strMsg);
    throw strMsg;
  }
  const arrvPrjTab_SimObjLstCache = await vPrjTab_Sim_GetObjLstCache(strPrjId);
  try {
    const arrvPrjTab_Sim_Sel: Array<clsvPrjTab_SimEN> = arrvPrjTab_SimObjLstCache.filter(
      (x) => x.tabId == strTabId,
    );
    let objvPrjTab_Sim;
    if (arrvPrjTab_Sim_Sel.length > 0) {
      objvPrjTab_Sim = arrvPrjTab_Sim_Sel[0];
      return objvPrjTab_Sim;
    } else {
      if (bolTryAsyncOnce == true) {
        objvPrjTab_Sim = await vPrjTab_Sim_GetObjByTabIdAsync(strTabId);
        if (objvPrjTab_Sim != null) {
          if (objvPrjTab_Sim.tabStateId != '01') {
            await PrjTabEx_SetTabUseStateId(strTabId, '01', strPrjId, clsPubLocalStorage.userId);
          }

          vPrjTab_Sim_ReFreshThisCache(strPrjId);
          return objvPrjTab_Sim;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strTabId,
      vPrjTab_SimEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 获取本地sessionStorage缓存中的对象列表，是整个表中的全部记录，也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vPrjTab_SimEx_GetObjLst_sessionStorage(strCmPrjId: string) {
  const strThisFuncName = 'GetObjLst_sessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  strWhereCond = Format('1=1', strCmPrjId);
  const strKey = Format('{0}_{1}', clsvPrjTab_SimEN._CurrTabName, strCmPrjId);
  //clsvPrjTab_SimEN.CacheAddiCondition = GetSessionCacheAdditionCondition(clsvPrjTab_SimEN._CurrTabName);
  if (IsNullOrEmpty(clsvPrjTab_SimEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvPrjTab_SimEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空！不正确');
    throw new Error('关键字为空！不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在，直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvPrjTab_SimExObjLstCache: Array<clsvPrjTab_SimENEx> = JSON.parse(strTempObjLst);
    const arrvPrjTab_SimObjLst_T = vPrjTab_Sim_GetObjLstByJSONObjLst(arrvPrjTab_SimExObjLstCache);
    return arrvPrjTab_SimObjLst_T;
  }
  try {
    const arrvPrjTab_SimExObjLst = await vPrjTab_SimEx_GetObjLstByCmPrjIdAsync(
      strCmPrjId,
      strWhereCond,
    );
    const strPrefix = Format('{0}_', clsvPrjTab_SimEN._CurrTabName);
    const arrCacheKeyLst = SessionStorage_GetKeyByPrefix(strPrefix);
    arrCacheKeyLst.forEach((x) => sessionStorage.removeItem(x));
    sessionStorage.setItem(strKey, JSON.stringify(arrvPrjTab_SimExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立，对象列表数：{1}!',
      strKey,
      arrvPrjTab_SimExObjLst.length,
    );
    console.log(strInfo);
    return arrvPrjTab_SimExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vPrjTab_SimEx_ConstructorName,
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
export async function vPrjTab_SimEx_GetObjLst_localStorage(strCmPrjId: string) {
  const strThisFuncName = 'GetObjLst_localStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  strWhereCond = Format('1=1', strCmPrjId);
  const strKey = Format('{0}_{1}', clsvPrjTab_SimEN._CurrTabName, strCmPrjId);
  //clsvPrjTab_SimEN.CacheAddiCondition = GetSessionCacheAdditionCondition(clsvPrjTab_SimEN._CurrTabName);
  if (IsNullOrEmpty(clsvPrjTab_SimEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvPrjTab_SimEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空！不正确');
    throw new Error('关键字为空！不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在，直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvPrjTab_SimExObjLstCache: Array<clsvPrjTab_SimENEx> = JSON.parse(strTempObjLst);
    const arrvPrjTab_SimObjLst_T = vPrjTab_Sim_GetObjLstByJSONObjLst(arrvPrjTab_SimExObjLstCache);
    return arrvPrjTab_SimObjLst_T;
  }
  try {
    const arrvPrjTab_SimExObjLst = await vPrjTab_SimEx_GetObjLstByCmPrjIdAsync(
      strCmPrjId,
      strWhereCond,
    );
    const strPrefix = Format('{0}_', clsvPrjTab_SimEN._CurrTabName);
    const arrCacheKeyLst = LocalStorage_GetKeyByPrefix(strPrefix);
    arrCacheKeyLst.forEach((x) => localStorage.removeItem(x));
    localStorage.setItem(strKey, JSON.stringify(arrvPrjTab_SimExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立，对象列表数：{1}!',
      strKey,
      arrvPrjTab_SimExObjLst.length,
    );
    console.log(strInfo);
    return arrvPrjTab_SimExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vPrjTab_SimEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw strMsg;
  }
}

export async function vPrjTab_SimEx_GetSpan4FieldWithCurrTab(): Promise<HTMLSpanElement> {
  const objSpan: HTMLSpanElement = document.createElement('span');
  objSpan.setAttribute('class', 'text-primary');
  //objSpan.style.display = "inline-block";
  //objSpan.style.width = Format("150px");

  const objSpan_TabName: HTMLSpanElement = document.createElement('span');
  objSpan_TabName.setAttribute('class', 'text-info');
  objSpan_TabName.innerHTML = Format('{0}', '本表');

  const objBr: HTMLBRElement = document.createElement('br');

  const objSpan_FldName: HTMLSpanElement = document.createElement('span');
  objSpan_FldName.setAttribute('class', 'text-danger');
  objSpan_FldName.innerHTML = Format('{0}', '关键字');

  objSpan.appendChild(objSpan_TabName);
  objSpan.appendChild(objBr);
  objSpan.appendChild(objSpan_FldName);
  return objSpan;
}

export async function vPrjTab_SimEx_GetDiv4FieldWithCurrTab(): Promise<HTMLSpanElement> {
  const objDiv: HTMLSpanElement = document.createElement('div');
  objDiv.className = 'CurrTabNode4Key';
  //objSpan.setAttribute("class", "text-primary");
  //objSpan.style.display = "inline-block";
  //objSpan.style.width = Format("150px");

  const objSpan_TabName: HTMLSpanElement = document.createElement('span');
  objSpan_TabName.setAttribute('class', 'text-info');
  objSpan_TabName.innerHTML = Format('{0}', '本表');

  const objBr: HTMLBRElement = document.createElement('br');

  const objSpan_FldName: HTMLSpanElement = document.createElement('span');
  objSpan_FldName.setAttribute('class', 'text-danger');
  objSpan_FldName.innerHTML = Format('{0}', '关键字');

  objDiv.appendChild(objSpan_TabName);
  objDiv.appendChild(objBr);
  objDiv.appendChild(objSpan_FldName);
  return objDiv;
}

/// <summary>
/// 绑定基于Web的下拉框
/// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunction)
/// </summary>
/// <param name = "objDDL">需要绑定当前表的下拉框</param>
export async function vPrjTab_SimEx_BindDdl_FldIdByTabIdInDivCache(
  strDivName: string,
  strDdlName: string,
  strPrjId: string,
  strTabId: string,
) {
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = `下拉框：${strDdlName} 不存在！`;
    alert(strMsg);
    throw strMsg;
  }
  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空！(In vPrjTab_SimEx_BindDdl_FldIdByTabIdInDivCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (IsNullOrEmpty(strTabId) == true) {
    const strMsg = Format(
      '参数:[strTabId]不能为空！(In vPrjTab_SimEx_BindDdl_FldIdByTabIdInDivCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  try {
    //const strPrjId = await CMProjectEx_GetPrjIdByCmPrjIdCache(strCmPrjId);
    const arrPrjTabFld = await PrjTabFld_GetObjLstCache(strTabId);
    //arrPrjTabFld = arrPrjTabFld.filter(x => x.tabId == strTabId);
    const arrFldId = arrPrjTabFld.map((x) => x.tabId);
    let arrObjLst_Sel: Array<clsvPrjTab_SimEN> = await vPrjTab_Sim_GetObjLstCache(
      clsPrivateSessionStorage.cmPrjId,
    );
    arrObjLst_Sel = arrObjLst_Sel
      .filter((x) => arrFldId.indexOf(x.tabId) > -1)
      .sort((x, y) => x.tabName.localeCompare(y.tabName));
    BindDdl_ObjLstInDiv_V(
      strDivName,
      strDdlName,
      arrObjLst_Sel,
      clsvPrjTab_SimEN.con_TabId,
      clsvPrjTab_SimEN.con_TabName,
      '表字段',
    );
  } catch (e: any) {
    console.error(e);
    alert(e);
    return;
  }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:20210703115014
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function vPrjTab_SimEx_SortFunByTabName(a: clsvPrjTab_SimEN, b: clsvPrjTab_SimEN): number {
  return a.tabName.localeCompare(b.tabName);
}

export async function vPrjTab_SimEx_GetObjLstByTabIdCache(strPrjId: string, strTabId: string) {
  try {
    // const strPrjId = await CMProjectEx_GetPrjIdByCmPrjIdCache(strCmPrjId);
    let arrPrjTabFld = await PrjTabFld_GetObjLstCache(strTabId);
    arrPrjTabFld = arrPrjTabFld.filter((x) => x.isForExtendClass == false);
    //arrPrjTabFld = arrPrjTabFld.filter(x => x.tabId == strTabId);
    const arrFldId = arrPrjTabFld.map((x) => x.tabId);
    let arrObjLst_Sel: Array<clsvPrjTab_SimEN> = await vPrjTab_Sim_GetObjLstCache(strPrjId);
    arrObjLst_Sel = arrObjLst_Sel
      .filter((x) => arrFldId.indexOf(x.tabId) > -1)
      .sort((x, y) => x.tabName.localeCompare(y.tabName));
    return arrObjLst_Sel;
  } catch (e: any) {
    console.error(e);
    const strMsg = Format('在获取表:[{0}]的字段对象时出错:{1}.', strTabId, e);
    //alert(strMsg);
    throw strMsg;
  }
}

/// <summary>
/// 绑定基于Web的下拉框
/// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunction)
/// </summary>
/// <param name = "objDDL">需要绑定当前表的下拉框</param>
export async function vPrjTab_SimEx_BindDdl_FldIdInDivCache(
  strDivName: string,
  strDdlName: string,
  strPrjId: string,
) {
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = `下拉框：${strDdlName} 不存在！`;
    alert(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容

  try {
    let arrObjLst_Sel: Array<clsvPrjTab_SimEN> = await vPrjTab_Sim_GetObjLstCache(strPrjId);
    arrObjLst_Sel = arrObjLst_Sel.sort((x, y) => x.tabName.localeCompare(y.tabName));
    BindDdl_ObjLstInDiv_V(
      strDivName,
      strDdlName,
      arrObjLst_Sel,
      clsvPrjTab_SimEN.con_TabId,
      clsvPrjTab_SimEN.con_TabName,
      '表字段',
    );
  } catch (e: any) {
    console.error(e);
    alert(e);
    return;
  }
}

export async function vPrjTab_SimEx_GetSpan4Field(
  strTabId: string,
  intVersionNo: number,
  strPrjId: string,
): Promise<HTMLSpanElement> {
  const objFieldTab = await vPrjTab_SimEx_GetObjByTabIdCache(strTabId, strPrjId);
  if (objFieldTab == null || IsNullOrEmpty(objFieldTab.tabName) == true) {
    throw '字段名不能为空！';
  }
  const objSpan: HTMLSpanElement = document.createElement('span');
  objSpan.setAttribute('class', 'text-danger');
  objSpan.style.display = 'inline-block';
  let strVersionNo = '';
  if (intVersionNo > 1) {
    strVersionNo = Format('V{0}', intVersionNo);
  }
  objSpan.innerText = Format('{0}{1}', objFieldTab.tabName, strVersionNo);
  return objSpan;
  //objContainer.appendChild(objSpan);
}

/**
 * 映射函数。根据表映射把输入字段值，映射成输出字段值
 * 作者:pyf
 * 日期:2022-10-29
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 @param strCmPrjId:缓存的分类字段
 * @returns 返回一个输出字段值
*/
export async function vPrjTab_SimEx_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";
  const strPrjId = clsPrivateSessionStorage.currSelPrjId;
  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format('参数:[strPrjId]不能为空！(In func)');
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName != clsvPrjTab_SimEN.con_TabId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsvPrjTab_SimEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确，不在输出字段范围之内!({1})',
      strInFldName,
      clsvPrjTab_SimEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strTabId = strInValue;
  if (IsNullOrEmpty(strInValue) == true) {
    return '';
  }
  const objvPrjTab_Sim = await vPrjTab_SimEx_GetObjByTabIdCache(strTabId, strPrjId);
  if (objvPrjTab_Sim == null) return '';
  return objvPrjTab_Sim.GetFldValue(strOutFldName).toString();
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strTabId:所给的关键字
 * @returns 对象
 */
export async function vPrjTab_SimEx_GetNameByTabIdCache(strTabId: string, strPrjId: string) {
  // const strThisFuncName = 'GetNameByTabIdCache';

  if (IsNullOrEmpty(strTabId) == true) {
    const strMsg = Format('参数:[strTabId]不能为空！(In GetNameByTabIdCache)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strTabId.length != 8) {
    const strMsg = Format('缓存分类变量:[strTabId]的长度:[{0}]不正确！', strTabId.length);
    console.error(strMsg);
    throw strMsg;
  }
  const arrvPrjTab_SimObjLstCache = await vPrjTab_Sim_GetObjLstCache(strPrjId);
  if (arrvPrjTab_SimObjLstCache == null) return '';
  try {
    const arrvPrjTab_Sim_Sel: Array<clsvPrjTab_SimEN> = arrvPrjTab_SimObjLstCache.filter(
      (x) => x.tabId == strTabId,
    );
    let objvPrjTab_Sim: clsvPrjTab_SimEN;
    if (arrvPrjTab_Sim_Sel.length > 0) {
      objvPrjTab_Sim = arrvPrjTab_Sim_Sel[0];
      return objvPrjTab_Sim.tabName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strTabId,
    );
    console.error(strMsg);
    alert(strMsg);
  }
  return '';
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)
 * @param objDDL:需要绑定当前表的下拉框
 * @param strPrjId:工程ID
 */
export async function vPrjTab_SimEx_BindDdl_TabIdByCmPrjIdInDivCacheBak(
  strDivName: HTMLDivElement,
  strDdlName: string,
  strPrjId: string,
) {
  // const strThisFuncName = 'BindDdl_TabIdByPrjIdInDivCache';

  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format('参数:[strPrjId]不能为空！(In BindDdl_TabIdByPrjIdInDiv)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format('缓存分类变量:[strCmPrjId]的长度:[{0}]不正确！', strPrjId.length);
    console.error(strMsg);
    throw strMsg;
  }

  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在！(In BindDdl_TabIdByPrjIdInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_TabIdByPrjIdInDivCache");
  let arrObjLst_Sel = await vPrjTab_Sim_GetObjLstCache(strPrjId);
  if (arrObjLst_Sel == null) return;
  arrObjLst_Sel = arrObjLst_Sel.sort((x, y) => x.tabName.localeCompare(y.tabName));
  BindDdl_ObjLstInDivObj_V(
    strDivName,
    strDdlName,
    arrObjLst_Sel,
    clsvPrjTab_SimEN.con_TabId,
    clsvPrjTab_SimEN.con_TabName,
    'v工程表_Sim',
  );
}

export async function vPrjTab_SimEx_BindDdl_TabIdByCmPrjIdInDivCache4DN(
  strDivName: HTMLDivElement,
  strDdlName: string,
  strPrjId: string,
) {
  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format('参数:[strPrjId]不能为空！(In BindDdl_TabIdByCmPrjIdInDivCache4DN)');
    console.error(strMsg);
    throw strMsg;
  }

  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = `下拉框：${strDdlName} 不存在！(In BindDdl_TabIdByCmPrjIdInDivCache4DN)`;
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  let arrObjLst_Sel = await vPrjTab_Sim_GetObjLstCache(strPrjId);
  const arrCacheMode = [
    enumCacheMode.ClientCache_02,
    enumCacheMode.localStorage_03,
    enumCacheMode.sessionStorage_04,
    enumCacheMode.VueXStore_06,
    enumCacheMode.PiniaStore_07,
  ];
  arrObjLst_Sel = arrObjLst_Sel.filter((x) => arrCacheMode.indexOf(x.cacheModeId) > -1);
  // arrObjLst_Sel = arrObjLst_Sel.filter((x) => enumCacheMode.sessionStorage_04 == x.cacheModeId);

  const arrCMProjectPrjTabObjLst_Sel = await vCmProjectPrjTab_Sim_GetObjLstCache(strPrjId);
  const arrTabId_Sel = arrCMProjectPrjTabObjLst_Sel.map((x) => x.tabId);
  arrObjLst_Sel = arrObjLst_Sel.filter((x) => arrTabId_Sel.indexOf(x.tabId) > -1);
  arrObjLst_Sel = arrObjLst_Sel.sort((x, y) => x.tabName.localeCompare(y.tabName));

  BindDdl_ObjLstInDivObj_V(
    strDivName,
    strDdlName,
    arrObjLst_Sel,
    clsvPrjTab_SimEN.con_TabId,
    clsvPrjTab_SimEN.con_TabName,
    '工程表',
  );
}

export async function vPrjTab_SimEx_GetArrvPrjTab_SimByCmPrjIdCache4DN(
  strCmPrjId: string,
): Promise<Array<clsvPrjTab_SimEN>> {
  if (IsNullOrEmpty(strCmPrjId) == true) {
    const strMsg = Format('参数:[strCmPrjId]不能为空！(In BindDdl_TabIdByCmPrjIdInDivCache4DN)');
    console.error(strMsg);
    throw strMsg;
  }
  const strPrjId = await CMProjectEx_GetPrjIdByCmPrjIdCache(strCmPrjId);
  let arrObjLst_Sel = await vPrjTab_Sim_GetObjLstCache(strPrjId);
  const arrCacheMode = [
    enumCacheMode.ClientCache_02,
    enumCacheMode.localStorage_03,
    enumCacheMode.sessionStorage_04,
    enumCacheMode.VueXStore_06,
    enumCacheMode.PiniaStore_07,
  ];
  arrObjLst_Sel = arrObjLst_Sel.filter((x) => arrCacheMode.indexOf(x.cacheModeId) > -1);
  const aa = arrObjLst_Sel.filter((x) => x.tabId == '00050640');
  console.log(aa);
  // arrObjLst_Sel = arrObjLst_Sel.filter((x) => enumCacheMode.sessionStorage_04 == x.cacheModeId);

  const arrCMProjectPrjTabObjLst_Sel = await vCmProjectPrjTab_Sim_GetObjLstCache(strPrjId);
  const bb = arrCMProjectPrjTabObjLst_Sel.filter((x) => x.tabId == '00050640');
  console.log(bb);
  const arrTabId_Sel = arrCMProjectPrjTabObjLst_Sel
    .filter((x) => x.cmPrjId == strCmPrjId)
    .map((x) => x.tabId);
  const cc = arrTabId_Sel.filter((x) => x == '00050640');
  console.log(cc);
  arrObjLst_Sel = arrObjLst_Sel.filter((x) => arrTabId_Sel.indexOf(x.tabId) > -1);
  arrObjLst_Sel = arrObjLst_Sel.sort((x, y) => x.tabName.localeCompare(y.tabName));

  const arrvPrjTab_Sim = new Array<clsvPrjTab_SimEN>();
  const obj0 = new clsvPrjTab_SimEN();
  obj0.tabId = '0';
  obj0.tabName = '选v工程表_Sim...';
  arrvPrjTab_Sim.push(obj0);
  arrObjLst_Sel.forEach((x) => arrvPrjTab_Sim.push(x));
  return arrvPrjTab_Sim;
}
export async function vPrjTab_SimEx_GetTabIdLst4NoCache(
  strCmPrjId: string,
): Promise<Array<string>> {
  //if (IsNullOrEmpty(strPrjId) == true) {
  //    const strMsg = Format("参数:[strPrjId]不能为空！(In GetTabIdLst4NoCache)");
  //    console.error(strMsg);
  //    throw (strMsg);
  //}

  if (IsNullOrEmpty(strCmPrjId) == true) {
    const strMsg = Format('参数:[strCmPrjId]不能为空！(In GetTabIdLst4NoCache)');
    console.error(strMsg);
    throw strMsg;
  }
  const strPrjId = await CMProjectEx_GetPrjIdByCmPrjIdCache(strCmPrjId);
  //为数据源于表的下拉框设置内容

  const arrCMProjectPrjTabObjLst_Sel = await vCmProjectPrjTab_Sim_GetObjLstCache(strPrjId);
  const arrTabId_Sel = arrCMProjectPrjTabObjLst_Sel.map((x) => x.tabId);
  // arrObjLst_NoCache = arrObjLst_NoCache.filter((x) => arrTabId_Sel.indexOf(x.tabId) > -1);

  // const arrTabId_Sel_NOCache = arrObjLst_NoCache.map((x) => x.tabId);
  return arrTabId_Sel;
}

/**
 * 绑定基于Web的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)
 * @param objDDL:需要绑定当前表的下拉框</param>
 * @param strPrjId">工程ID</param>
 * @param strCmPrjId">CM工程ID</param>
 */
export async function vPrjTab_SimEx_BindDdl_TabIdByCmPrjIdInDivCache(
  strDivName: HTMLDivElement,
  strDdlName: string,
  strCmPrjId: string,
) {
  //if (IsNullOrEmpty(strPrjId) == true) {
  //    const strMsg = Format("参数:[strPrjId]不能为空！(In BindDdl_TabIdByCmPrjIdInDivCache)");
  //    console.error(strMsg);
  //    throw (strMsg);
  //}
  if (IsNullOrEmpty(strCmPrjId) == true) {
    const strMsg = Format('参数:[strCmPrjId]不能为空！(In BindDdl_TabIdByCmPrjIdInDivCache)');
    console.error(strMsg);
    throw strMsg;
  }
  const strPrjId = await CMProjectEx_GetPrjIdByCmPrjIdCache(strCmPrjId);
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = `下拉框：${strDdlName} 不存在！(In BindDdl_TabIdByCmPrjIdInDivCache)`;
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  let arrObjLst_Sel = await vPrjTab_Sim_GetObjLstCache(strPrjId);
  arrObjLst_Sel = arrObjLst_Sel.filter((x) => x.tabTypeId != enumTabType.PureClass_0008);
  const arrCMProjectPrjTabObjLst_Sel = await vCmProjectPrjTab_Sim_GetObjLstCache(strPrjId);
  const arrTabId_Sel = arrCMProjectPrjTabObjLst_Sel.map((x) => x.tabId);
  arrObjLst_Sel = arrObjLst_Sel.filter((x) => arrTabId_Sel.indexOf(x.tabId) > -1);
  arrObjLst_Sel = arrObjLst_Sel.sort((x, y) => x.tabName.localeCompare(y.tabName));

  BindDdl_ObjLstInDivObj_V(
    strDivName,
    strDdlName,
    arrObjLst_Sel,
    clsvPrjTab_SimEN.con_TabId,
    clsvPrjTab_SimEN.con_TabName,
    '工程表',
  );
}

export async function vPrjTab_SimEx_GetArrvPrjTab_SimByCmPrjIdCache(
  strCmPrjId: string,
): Promise<Array<clsvPrjTab_SimEN>> {
  //if (IsNullOrEmpty(strPrjId) == true) {
  //    const strMsg = Format("参数:[strPrjId]不能为空！(In BindDdl_TabIdByCmPrjIdInDivCache)");
  //    console.error(strMsg);
  //    throw (strMsg);
  //}
  if (IsNullOrEmpty(strCmPrjId) == true) {
    const strMsg = Format('参数:[strCmPrjId]不能为空！(In BindDdl_TabIdByCmPrjIdInDivCache)');
    console.error(strMsg);
    throw strMsg;
  }
  const strPrjId = await CMProjectEx_GetPrjIdByCmPrjIdCache(strCmPrjId);
  let arrObjLst_Sel = await vPrjTab_Sim_GetObjLstCache(strPrjId);
  arrObjLst_Sel = arrObjLst_Sel.filter((x) => x.tabTypeId != enumTabType.PureClass_0008);
  let arrCMProjectPrjTabObjLst_Sel = await vCmProjectPrjTab_Sim_GetObjLstCache(strPrjId);
  arrCMProjectPrjTabObjLst_Sel = arrCMProjectPrjTabObjLst_Sel.filter(
    (x) => x.cmPrjId == strCmPrjId,
  );
  const arrTabId_Sel = arrCMProjectPrjTabObjLst_Sel.map((x) => x.tabId);
  arrObjLst_Sel = arrObjLst_Sel.filter((x) => arrTabId_Sel.indexOf(x.tabId) > -1);
  arrObjLst_Sel = arrObjLst_Sel.sort((x, y) => x.tabName.localeCompare(y.tabName));
  const arrvPrjTab_Sim = new Array<clsvPrjTab_SimEN>();
  const obj0 = new clsvPrjTab_SimEN();
  obj0.tabId = '0';
  obj0.tabName = '选v工程表_Sim...';
  arrvPrjTab_Sim.push(obj0);
  arrObjLst_Sel.forEach((x) => arrvPrjTab_Sim.push(x));
  return arrvPrjTab_Sim;
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)
 * @param objDDL:需要绑定当前表的下拉框
 * @param strPrjId:工程ID
 */
export async function vDataNode_SimEx_BindDdl_DataNodeIdByCmPrjIdInDivCache(
  strDivName: HTMLDivElement,
  strDdlName: string,
  strCmPrjId: string,
) {
  // const strThisFuncName = 'vDataNode_SimEx_BindDdl_DataNodeIdByCmPrjIdInDivCache';

  if (IsNullOrEmpty(strCmPrjId) == true) {
    const strMsg = Format('参数:[strCmPrjId]不能为空！(In BindDdl_DataNodeIdByPrjIdInDiv)');
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
    const strMsg = Format('下拉框：{0} 不存在！(In BindDdl_DataNodeIdByPrjIdInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_DataNodeIdByPrjIdInDivCache");
  // const strWhere = `datanodeid in (select DataNodeId from D1ataNodeCmPrjIdRela where CmPrjId='${strCmPrjId}')`;
  const strWhere = ` prjId = '${clsPrivateSessionStorage.currSelPrjId}'`;
  let arrObjLst_Sel = await vDataNode_Sim_GetObjLstAsync(strWhere);
  if (arrObjLst_Sel == null) return;
  arrObjLst_Sel = arrObjLst_Sel.sort((x, y) => x.dataNodeName.localeCompare(y.dataNodeName));

  BindDdl_ObjLstInDivObj_V(
    strDivName,
    strDdlName,
    arrObjLst_Sel,
    clsvDataNode_SimEN.con_DataNodeId,
    clsvDataNode_SimEN.con_DataNodeName,
    'vDataNode_Sim',
  );
}

/**
 *
 * @param strPrjId
 * @param strTabName
 */
export async function vPrjTab_SimEx_GetRelaViewTabIdByTabName(
  strPrjId: string,
  strTabName: string,
): Promise<string> {
  console.log(strTabName);
  const arrPrjTab = await vPrjTab_Sim_GetObjLstCache(strPrjId);
  const arrTabName_V = [`v{strTabName}`, `V{strTabName}`];
  const arrPrjTabSel = arrPrjTab.filter((x) => arrTabName_V.indexOf(x.tabName) > -1);
  if (arrPrjTabSel.length == 0) return '';
  const strTabId = arrPrjTabSel[0].tabId;

  return strTabId;
}

/**
 * 绑定基于Web的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)
 * @param objDDL:需要绑定当前表的下拉框</param>
 * @param strPrjId">工程ID</param>
 */
export async function vPrjTab_SimEx_BindDdl_TabIdInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
  strCmPrjId: string,
  strSqlDsTypeId: string,
) {
  if (IsNullOrEmpty(strCmPrjId) == true) {
    const strMsg = Format('参数:[strCmPrjId]不能为空！(In BindDdl_TabIdInDivCache)');
    console.error(strMsg);
    throw strMsg;
  }

  if (objDiv == null) {
    const strMsg = Format('层在该界面不存在！');
    console.error(strMsg);
    throw strMsg;
  }
  const arrSelect = objDiv.getElementsByTagName('select');
  const arrElements = GetArray(arrSelect);
  const sltDdl: HTMLSelectElement = <HTMLSelectElement>arrElements.find((x) => x.id == strDdlName);
  if (sltDdl == null) {
    const strMsg = Format('在层:[{0}]内，不存在下拉框:[{1}], 请检查！', objDiv.id, strDdlName);
    console.error(strMsg);
    throw strMsg;
  }

  //const objDdl = document.getElementById(strDdlName);
  //if (objDdl == null) {
  //    const strMsg = `下拉框：${strDdlName} 不存在！(In BindDdl_TabIdInDivCache)`;
  //    alert(strMsg);
  //    console.error(strMsg);
  //    throw (strMsg);
  //}
  const strPrjId = await CMProjectEx_GetPrjIdByCmPrjIdCache(strCmPrjId);
  let arrObjLst_Sel = await vPrjTab_Sim_GetObjLstCache(strPrjId);
  arrObjLst_Sel = arrObjLst_Sel.filter((x) => x.sqlDsTypeId == strSqlDsTypeId);
  arrObjLst_Sel = arrObjLst_Sel.sort((x, y) => x.tabName.localeCompare(y.tabName));

  BindDdl_ObjLstInDivObj_V(
    objDiv,
    strDdlName,
    arrObjLst_Sel,
    clsvPrjTab_SimEN.con_TabId,
    clsvPrjTab_SimEN.con_TabName,
    '工程表',
  );
}
//
export async function vPrjTab_SimEx_GetArrvPrjTab_SimBySqlDsTypeIdCache(
  strSqlDsTypeId: string,
  strCmPrjId: string,
): Promise<Array<clsvPrjTab_SimEN>> {
  if (IsNullOrEmpty(strCmPrjId) == true) {
    const strMsg = Format('参数:[strCmPrjId]不能为空！(In BindDdl_TabIdInDivCache)');
    console.error(strMsg);
    throw strMsg;
  }

  if (IsNullOrEmpty(strSqlDsTypeId) == true) {
    const strMsg = Format('参数:[strSqlDsTypeId]不能为空！(In BindDdl_TabIdInDivCache)');
    console.error(strMsg);
    throw strMsg;
  }
  const strPrjId = await CMProjectEx_GetPrjIdByCmPrjIdCache(strCmPrjId);
  //const objDdl = document.getElementById(strDdlName);
  //if (objDdl == null) {
  //    const strMsg = `下拉框：${strDdlName} 不存在！(In BindDdl_TabIdInDivCache)`;
  //    alert(strMsg);
  //    console.error(strMsg);
  //    throw (strMsg);
  //}

  let arrObjLst_Sel = await vPrjTab_Sim_GetObjLstCache(strPrjId);
  arrObjLst_Sel = arrObjLst_Sel.filter((x) => x.sqlDsTypeId == strSqlDsTypeId);
  arrObjLst_Sel = arrObjLst_Sel.sort((x, y) => x.tabName.localeCompare(y.tabName));

  const arrvPrjTab_Sim = new Array<clsvPrjTab_SimEN>();
  let arrObjLstSel = await vPrjTab_Sim_GetObjLstCache(strPrjId);
  if (arrObjLstSel == null) return arrvPrjTab_Sim;
  arrObjLstSel = arrObjLstSel.sort((x, y) => {
    return x.tabName.localeCompare(y.tabName);
  });
  const obj0 = new clsvPrjTab_SimEN();
  obj0.tabId = '0';
  obj0.tabName = '选工程表...';
  arrvPrjTab_Sim.push(obj0);
  arrObjLst_Sel.forEach((x) => arrvPrjTab_Sim.push(x));
  return arrvPrjTab_Sim;
}

/**
 * 绑定基于Web的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)
 * @param objDDL:需要绑定当前表的下拉框</param>
 * @param strPrjId">工程ID</param>
 * @param strCmPrjId">CM工程ID</param>
 */
export async function vPrjTab_SimEx_BindDdl_TabIdByCmPrjIdInDivCacheB(
  strDivName: HTMLDivElement,
  strDdlName: string,
  strPrjId: string,
  strCmPrjId: string,
) {
  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format('参数:[strPrjId]不能为空！(In BindDdl_TabIdByCmPrjIdInDivCache)');
    console.error(strMsg);
    throw strMsg;
  }
  if (IsNullOrEmpty(strCmPrjId) == true) {
    const strMsg = Format('参数:[strCmPrjId]不能为空！(In BindDdl_TabIdByCmPrjIdInDivCache)');
    console.error(strMsg);
    throw strMsg;
  }

  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = `下拉框：${strDdlName} 不存在！(In BindDdl_TabIdByCmPrjIdInDivCache)`;
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  let arrObjLst_Sel = await vPrjTab_Sim_GetObjLstCache(strPrjId);
  let arrCMProjectPrjTabObjLst_Sel = await vCmProjectPrjTab_Sim_GetObjLstCache(strPrjId);
  arrCMProjectPrjTabObjLst_Sel = arrCMProjectPrjTabObjLst_Sel.filter(
    (x) => x.cmPrjId == strCmPrjId,
  );
  const arrTabId_Sel = arrCMProjectPrjTabObjLst_Sel.map((x) => x.tabId);
  arrObjLst_Sel = arrObjLst_Sel.filter((x) => arrTabId_Sel.indexOf(x.tabId) > -1);
  arrObjLst_Sel = arrObjLst_Sel.sort((x, y) => x.tabName.localeCompare(y.tabName));

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
 * @param objDDL:需要绑定当前表的下拉框</param>
 * @param strPrjId">工程ID</param>
 * @param strCmPrjId">CM工程ID</param>
 */
export async function vPrjTab_SimEx_GetArrvPrjTab_SimByCmPrjIdCacheB(
  strPrjId: string,
  strCmPrjId: string,
): Promise<Array<clsvPrjTab_SimEN>> {
  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format('参数:[strPrjId]不能为空！(In BindDdl_TabIdByCmPrjIdInDivCache)');
    console.error(strMsg);
    throw strMsg;
  }
  if (IsNullOrEmpty(strCmPrjId) == true) {
    const strMsg = Format('参数:[strCmPrjId]不能为空！(In BindDdl_TabIdByCmPrjIdInDivCache)');
    console.error(strMsg);
    throw strMsg;
  }

  let arrObjLst_Sel = await vPrjTab_Sim_GetObjLstCache(strPrjId);
  let arrCMProjectPrjTabObjLst_Sel = await vCmProjectPrjTab_Sim_GetObjLstCache(strPrjId);
  arrCMProjectPrjTabObjLst_Sel = arrCMProjectPrjTabObjLst_Sel.filter(
    (x) => x.cmPrjId == strCmPrjId,
  );
  const arrTabId_Sel = arrCMProjectPrjTabObjLst_Sel.map((x) => x.tabId);
  arrObjLst_Sel = arrObjLst_Sel.filter((x) => arrTabId_Sel.indexOf(x.tabId) > -1);
  arrObjLst_Sel = arrObjLst_Sel.sort((x, y) => x.tabName.localeCompare(y.tabName));
  const arrvPrjTab_Sim = new Array<clsvPrjTab_SimEN>();
  const obj0 = new clsvPrjTab_SimEN();
  obj0.tabId = '0';
  obj0.tabName = '选v工程表_Sim...';
  arrvPrjTab_Sim.push(obj0);
  arrObjLst_Sel.forEach((x) => arrvPrjTab_Sim.push(x));
  return arrvPrjTab_Sim;
}
/**
 * 绑定基于Web的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)
 * @param objDDL:需要绑定当前表的下拉框</param>
 * @param strPrjId">工程ID</param>
 * @param strCmPrjId">CM工程ID</param>
 */
export async function vPrjTab_SimEx_BindDdl_TabId4TabFeatureDdlInDivCache(
  strDivName: HTMLDivElement,
  strDdlName: string,
  strPrjId: string,
  strCmPrjId: string,
) {
  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format('参数:[strPrjId]不能为空！(In BindDdl_TabIdByCmPrjIdInDivCache)');
    console.error(strMsg);
    throw strMsg;
  }
  if (IsNullOrEmpty(strCmPrjId) == true) {
    const strMsg = Format('参数:[strCmPrjId]不能为空！(In BindDdl_TabIdByCmPrjIdInDivCache)');
    console.error(strMsg);
    throw strMsg;
  }

  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = `下拉框：${strDdlName} 不存在！(In BindDdl_TabIdByCmPrjIdInDivCache)`;
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  let arrObjLst_Sel = await vPrjTab_Sim_GetObjLstCache(strPrjId);

  let arrCMProjectPrjTabObjLst_Sel = await vCmProjectPrjTab_Sim_GetObjLstCache(strPrjId);
  arrCMProjectPrjTabObjLst_Sel = arrCMProjectPrjTabObjLst_Sel.filter(
    (x) => x.cmPrjId == strCmPrjId,
  );
  const arrTabId_Sel1 = arrCMProjectPrjTabObjLst_Sel.map((x) => x.tabId);
  let arrTabFeature_Sel: Array<clsvTabFeature_SimEN> = await vTabFeature_SimEx_GetObjLstCache(
    strCmPrjId,
  );
  arrTabFeature_Sel = arrTabFeature_Sel.filter(
    (x) => x.featureId == enumPrjFeature.Tab_BindDdl_0173,
  );
  const arrTabId_Sel2 = arrTabFeature_Sel.map((x) => x.tabId);

  const arrTabId_Sel = arrTabId_Sel1.filter((item) => arrTabId_Sel2.indexOf(item) > -1);

  arrObjLst_Sel = arrObjLst_Sel.filter((x) => arrTabId_Sel.indexOf(x.tabId) > -1);
  arrObjLst_Sel = arrObjLst_Sel.sort((x, y) => x.tabName.localeCompare(y.tabName));

  BindDdl_ObjLstInDivObj_V(
    strDivName,
    strDdlName,
    arrObjLst_Sel,
    clsvPrjTab_SimEN.con_TabId,
    clsvPrjTab_SimEN.con_TabName,
    '下拉框表',
  );
}

/**
 * 绑定基于Web的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)
 * @param objDDL:需要绑定当前表的下拉框</param>
 * @param strPrjId">工程ID</param>
 * @param strCmPrjId">CM工程ID</param>
 */
export async function vPrjTab_SimEx_GetObjLst4DsCache(
  strPrjId: string,
  strCmPrjId: string,
): Promise<Array<clsvPrjTab_SimEN>> {
  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format('参数:[strPrjId]不能为空！(In BindDdl_TabIdByCmPrjIdInDivCache)');
    console.error(strMsg);
    throw strMsg;
  }
  if (IsNullOrEmpty(strCmPrjId) == true) {
    const strMsg = Format('参数:[strCmPrjId]不能为空！(In BindDdl_TabIdByCmPrjIdInDivCache)');
    console.error(strMsg);
    throw strMsg;
  }

  let arrObjLst_Sel = await vPrjTab_Sim_GetObjLstCache(strPrjId);

  let arrCMProjectPrjTabObjLst_Sel = await vCmProjectPrjTab_Sim_GetObjLstCache(strPrjId);
  arrCMProjectPrjTabObjLst_Sel = arrCMProjectPrjTabObjLst_Sel.filter(
    (x) => x.cmPrjId == strCmPrjId,
  );
  const arrTabId_Sel1 = arrCMProjectPrjTabObjLst_Sel.map((x) => x.tabId);
  let arrTabFeature_Sel: Array<clsvTabFeature_SimEN> = await vTabFeature_SimEx_GetObjLstCache(
    strCmPrjId,
  );
  arrTabFeature_Sel = arrTabFeature_Sel.filter(
    (x) => x.featureId == enumPrjFeature.Tab_BindDdl_0173,
  );
  const arrTabId_Sel2 = arrTabFeature_Sel.map((x) => x.tabId);

  const arrTabId_Sel = arrTabId_Sel1.filter((item) => arrTabId_Sel2.indexOf(item) > -1);

  arrObjLst_Sel = arrObjLst_Sel.filter((x) => arrTabId_Sel.indexOf(x.tabId) > -1);
  arrObjLst_Sel = arrObjLst_Sel.sort((x, y) => x.tabName.localeCompare(y.tabName));
  return arrObjLst_Sel;
}
export function vPrjTab_SimEx_IsCache_TS(strCacheModeId: string): boolean {
  const arrCacheMode = [
    enumCacheMode.localStorage_03,
    enumCacheMode.sessionStorage_04,
    enumCacheMode.VueXStore_06,
    enumCacheMode.PiniaStore_07,
  ];
  const bolIsExist = arrCacheMode.indexOf(strCacheModeId);
  if (bolIsExist == -1) return false;
  return true;
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)
 * @param objDDL:需要绑定当前表的下拉框
 * @param strCmPrjId:
 */
export async function vPrjTab_SimEx_BindDdl_TabIdByCmPrjIdInDivCache4CodeTab(
  objDiv: HTMLDivElement,
  strDdlName: string,
  strCmPrjId: string,
) {
  if (IsNullOrEmpty(strCmPrjId) == true) {
    const strMsg = Format(
      '参数:[strCmPrjId]不能为空！(In clsvPrjTab_SimWApi.BindDdl_TabIdByCmPrjIdInDiv)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strCmPrjId.length != 6) {
    const strMsg = Format(
      '缓存分类变量:[strCmPrjId]的长度:[{0}]不正确！(clsvPrjTab_SimWApi.BindDdl_TabIdByCmPrjIdInDiv)',
      strCmPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_TabIdByCmPrjIdInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  const strPrjId = clsPrivateSessionStorage.currSelPrjId;
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_TabIdByCmPrjIdInDivCache");
  let arrObjLstSel = await vPrjTab_Sim_GetObjLstCache(strPrjId);
  if (arrObjLstSel == null) return;

  const strWhere = `PrjId='${strPrjId}'`;
  const arrTabId = await PubDataBase_GetFieldValue(
    clsFieldTab4CodeConvEN._CurrTabName,
    clsFieldTab4CodeConvEN.con_CodeTabId,
    strWhere,
  );
  arrObjLstSel = arrObjLstSel
    .filter((x) => arrTabId.indexOf(x.tabId) > -1)
    .sort((x, y) => x.tabName.localeCompare(y.tabName));
  BindDdl_ObjLstInDivObj_V(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsvPrjTab_SimEN.con_TabId,
    clsvPrjTab_SimEN.con_TabName,
    'v工程表_Sim',
  );
}
