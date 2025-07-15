/**
 * v字段表_Sim(vFieldTab_Sim)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2022年10月27日.
 * 注意:该类必须与调用界面处于同一个包，否则调用不成功!
 **/
//import $ from "jquery";
import axios from 'axios';
import { CMProject_GetObjByCmPrjIdCache } from '../../L3ForWApi/CodeMan/clsCMProjectWApi';
import { Projects_GetObjByPrjIdCache } from '../../L3ForWApi/PrjManage/clsProjectsWApi';
import { PrjTabFld_GetObjLstCache } from '../../L3ForWApi/Table_Field/clsPrjTabFldWApi';
import {
  vFieldTab_Sim_GetObjByFldIdCache,
  vFieldTab_Sim_GetObjLstAsync,
  vFieldTab_Sim_GetObjLstByFldIdLstCache,
  vFieldTab_Sim_GetObjLstByJSONObjLst,
  vFieldTab_Sim_GetObjLstCache,
  vFieldTab_Sim_SortFunByKey,
} from '../../L3ForWApi/Table_Field/clsvFieldTab_SimWApi';

import { DataNodeTypeEx_GetSpanByDataNodeType } from '../AIModule/clsDataNodeTypeExWApi';
import { FieldTab4CodeConv_GetObjByFldIdCache } from '../../L3ForWApi/Table_Field/clsFieldTab4CodeConvWApi';
import {
  FieldTab4CodeConvEx_CopyToEx,
  FieldTab4CodeConvEx_FuncMapByFldName,
} from './clsFieldTab4CodeConvExWApi';
import { vPrjTab_SimEx_GetObjByTabIdCache } from './clsvPrjTab_SimExWApi';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';

import { clsvFieldTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvFieldTab_SimEN';
import { clsvFieldTab_SimENEx } from '@/ts/L0Entity/Table_Field/clsvFieldTab_SimENEx';
import {
  CacheHelper,
  LocalStorage_GetKeyByPrefix,
  SessionStorage_GetKeyByPrefix,
} from '@/ts/PubFun/CacheHelper';
import {
  BindDdl_ObjLstInDivObj_V,
  BindDdl_ObjLst_V,
  ObjectAssign,
} from '@/ts/PubFun/clsCommFunc4Web';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { clsvDataNode_SimENEx } from '@/ts/L0Entity/AIModule/clsvDataNode_SimENEx';
import { GetKeyLstByKeyFldStr } from '@/ts/PubFun/clsArray';
import { GetBr_Empty, GetSpan_Empty } from '@/ts/PubFun/clsCommFunc4Ctrl';
import { clsFieldTab4CodeConvENEx } from '@/ts/L0Entity/Table_Field/clsFieldTab4CodeConvENEx';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';

import { clsvDataNode_Sim } from '@/ts/L0Entity/AIModule/clsvDataNode_Sim';
import { usevDataNode_SimStore } from '@/store/modules/vDataNode_Sim';
import { usevFieldTab_Sim2Store } from '@/store/modules/vFieldTab_Sim2';
import { vDataNode_SimEx_GetObjLstByTabIdCacheEx } from '@/ts/L3ForWApiEx/AIModule/clsvDataNode_SimExWApi';
import { PrjTabFldEx_GetObjByFldIdCache } from '@/ts/L3ForWApiEx/Table_Field/clsPrjTabFldExWApi';

export const vFieldTab_SimEx_Controller = 'vFieldTab_SimExApi';
export const vFieldTab_SimEx_ConstructorName = 'vFieldTab_SimEx';
export const setField_ExtendShow: Set<string> = new Set<string>();
/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function vFieldTab_SimEx_GetWebApiUrl(strController: string, strAction: string): string {
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
 * @param objvFieldTab_SimENS:源对象
 * @returns 目标对象=>clsvFieldTab_SimEN:objvFieldTab_SimENT
 **/
export function vFieldTab_SimEx_CopyToEx(
  objvFieldTab_SimENS: clsvFieldTab_SimEN | null,
): clsvFieldTab_SimENEx {
  const strThisFuncName = vFieldTab_SimEx_CopyToEx.name;
  const objvFieldTab_SimENT = new clsvFieldTab_SimENEx();
  if (objvFieldTab_SimENS == null) return objvFieldTab_SimENT;
  try {
    ObjectAssign(objvFieldTab_SimENT, objvFieldTab_SimENS);
    return objvFieldTab_SimENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      vFieldTab_SimEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objvFieldTab_SimENT;
  }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2022-10-27
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function vFieldTab_SimEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  // const strThisFuncName = 'SortFunByKey';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsvFieldTab_SimENEx.con_FldNameEx:
        return (a: clsvFieldTab_SimENEx, b: clsvFieldTab_SimENEx) => {
          return a.fldNameEx.localeCompare(b.fldNameEx);
        };
      case clsvFieldTab_SimENEx.con_IsHasNode:
        return (a: clsvFieldTab_SimENEx, b: clsvFieldTab_SimENEx) => {
          console.log(b);
          if (a.isHasNode == true) return 1;
          else return -1;
        };
      case clsvFieldTab_SimENEx.con_PrivFuncName:
        return (a: clsvFieldTab_SimENEx, b: clsvFieldTab_SimENEx) => {
          return a.privFuncName.localeCompare(b.privFuncName);
        };
      case clsvFieldTab_SimENEx.con_KeyVarDefineStr:
        return (a: clsvFieldTab_SimENEx, b: clsvFieldTab_SimENEx) => {
          return a.keyVarDefineStr.localeCompare(b.keyVarDefineStr);
        };
      case clsvFieldTab_SimENEx.con_FldNameFstLcase:
        return (a: clsvFieldTab_SimENEx, b: clsvFieldTab_SimENEx) => {
          return a.fldNameFstLcase.localeCompare(b.fldNameFstLcase);
        };
      case clsvFieldTab_SimENEx.con_FldNameFstUcase:
        return (a: clsvFieldTab_SimENEx, b: clsvFieldTab_SimENEx) => {
          return a.fldNameFstUcase.localeCompare(b.fldNameFstUcase);
        };
      case clsvFieldTab_SimENEx.con_NodeNum:
        return (a: clsvFieldTab_SimENEx, b: clsvFieldTab_SimENEx) => {
          return a.nodeNum - b.nodeNum;
        };
      case clsvFieldTab_SimENEx.con_DataNodeId:
        return (a: clsvFieldTab_SimENEx, b: clsvFieldTab_SimENEx) => {
          return a.dataNodeId - b.dataNodeId;
        };
      case clsvFieldTab_SimENEx.con_DataNodeIdV2:
        return (a: clsvFieldTab_SimENEx, b: clsvFieldTab_SimENEx) => {
          return a.dataNodeIdV2 - b.dataNodeIdV2;
        };
      case clsvFieldTab_SimENEx.con_DataNodeIdV3:
        return (a: clsvFieldTab_SimENEx, b: clsvFieldTab_SimENEx) => {
          return a.dataNodeIdV3 - b.dataNodeIdV3;
        };
      default:
        return vFieldTab_Sim_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsvFieldTab_SimENEx.con_FldNameEx:
        return (a: clsvFieldTab_SimENEx, b: clsvFieldTab_SimENEx) => {
          return b.fldNameEx.localeCompare(a.fldNameEx);
        };
      case clsvFieldTab_SimENEx.con_IsHasNode:
        return (a: clsvFieldTab_SimENEx, b: clsvFieldTab_SimENEx) => {
          if (b.isHasNode == true) return 1;
          else return -1;
        };
      case clsvFieldTab_SimENEx.con_PrivFuncName:
        return (a: clsvFieldTab_SimENEx, b: clsvFieldTab_SimENEx) => {
          return b.privFuncName.localeCompare(a.privFuncName);
        };
      case clsvFieldTab_SimENEx.con_KeyVarDefineStr:
        return (a: clsvFieldTab_SimENEx, b: clsvFieldTab_SimENEx) => {
          return b.keyVarDefineStr.localeCompare(a.keyVarDefineStr);
        };
      case clsvFieldTab_SimENEx.con_FldNameFstLcase:
        return (a: clsvFieldTab_SimENEx, b: clsvFieldTab_SimENEx) => {
          return b.fldNameFstLcase.localeCompare(a.fldNameFstLcase);
        };
      case clsvFieldTab_SimENEx.con_FldNameFstUcase:
        return (a: clsvFieldTab_SimENEx, b: clsvFieldTab_SimENEx) => {
          return b.fldNameFstUcase.localeCompare(a.fldNameFstUcase);
        };
      case clsvFieldTab_SimENEx.con_NodeNum:
        return (a: clsvFieldTab_SimENEx, b: clsvFieldTab_SimENEx) => {
          return b.nodeNum - a.nodeNum;
        };
      case clsvFieldTab_SimENEx.con_DataNodeId:
        return (a: clsvFieldTab_SimENEx, b: clsvFieldTab_SimENEx) => {
          return b.dataNodeId - a.dataNodeId;
        };
      case clsvFieldTab_SimENEx.con_DataNodeIdV2:
        return (a: clsvFieldTab_SimENEx, b: clsvFieldTab_SimENEx) => {
          return b.dataNodeIdV2 - a.dataNodeIdV2;
        };
      case clsvFieldTab_SimENEx.con_DataNodeIdV3:
        return (a: clsvFieldTab_SimENEx, b: clsvFieldTab_SimENEx) => {
          return b.dataNodeIdV3 - a.dataNodeIdV3;
        };
      default:
        return vFieldTab_Sim_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2022-10-27
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function vFieldTab_SimEx_FuncMapByFldName(
  strFldName: string,
  objvFieldTab_SimEx: clsvFieldTab_SimENEx,
) {
  const strThisFuncName = vFieldTab_SimEx_FuncMapByFldName.name;
  let strMsg = '';
  //如果是本表中字段，不需要映射
  const arrFldName = clsvFieldTab_SimEN._AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射

  switch (strFldName) {
    case clsvFieldTab_SimENEx.con_ConvFldName:
      return vFieldTab_SimEx_FuncMap_ConvFldName(objvFieldTab_SimEx);

    //case clsvFieldTab_SimENEx.con_FieldTypeName:
    //    return FieldTabEx_FuncMap_FieldTypeName(objvFieldTab_SimEx);
    //case clsvFieldTab_SimENEx.con_DataTypeName:
    //    return FieldTabEx_FuncMap_DataTypeName(objvFieldTab_SimEx);
    //case clsvFieldTab_SimENEx.con_TabNum:
    //    return FieldTabEx_FuncMap_TabNum(objvFieldTab_SimEx);
    default:
      strMsg = Format(
        '扩展字段:[{0}]在字段值函数映射中不存在！(in {1})',
        strFldName,
        strThisFuncName,
      );
      console.error(strMsg);
  }
}

export async function vFieldTab_SimEx_GetObjLstByCmPrjIdAsync(
  strCmPrjId: string,
  strCondition: string,
): Promise<Array<clsvFieldTab_SimEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLstByCmPrjId';
  const strUrl = vFieldTab_SimEx_GetWebApiUrl(vFieldTab_SimEx_Controller, strAction);
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
          vFieldTab_SimEx_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vFieldTab_Sim_GetObjLstByJSONObjLst(returnObjLst);
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
        vFieldTab_SimEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        vFieldTab_SimEx_ConstructorName,
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
 * 获取本地缓存中的对象列表，是整个表中的全部记录，也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vFieldTab_SimEx_GetObjLstCacheBak(
  strCmPrjId: string,
): Promise<Array<clsvFieldTab_SimEN>> {
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
  let arrvFieldTab_SimObjLstCache;
  switch (clsvFieldTab_SimEN._CacheModeId) {
    case '04': //sessionStorage
      arrvFieldTab_SimObjLstCache = await vFieldTab_SimEx_GetObjLst_sessionStorage(strCmPrjId);
      break;
    case '03': //localStorage
      arrvFieldTab_SimObjLstCache = await vFieldTab_SimEx_GetObjLst_localStorage(strCmPrjId);
      break;
    case '02': //ClientCache
      arrvFieldTab_SimObjLstCache = await vFieldTab_SimEx_GetObjLst_ClientCache(strCmPrjId);
      break;
    default:
      arrvFieldTab_SimObjLstCache = await vFieldTab_SimEx_GetObjLst_ClientCache(strCmPrjId);
      break;
  }
  // const arrvFieldTab_SimObjLst = vFieldTab_Sim_GetObjLstByJSONObjLst(arrvFieldTab_SimObjLstCache);
  return arrvFieldTab_SimObjLstCache;
}

/**
 * 获取本地sessionStorage缓存中的对象列表，是整个表中的全部记录，也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vFieldTab_SimEx_GetObjLst_sessionStorage(strCmPrjId: string) {
  const strThisFuncName = 'GetObjLst_sessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  strWhereCond = Format('1=1', strCmPrjId);
  const strKey = Format('{0}_{1}', clsvFieldTab_SimEN._CurrTabName, strCmPrjId);
  //clsvFieldTab_SimEN.CacheAddiCondition = GetSessionCacheAdditionCondition(clsvFieldTab_SimEN._CurrTabName);
  if (IsNullOrEmpty(clsvFieldTab_SimEN._CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvFieldTab_SimEN._CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空！不正确');
    throw new Error('关键字为空！不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在，直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvFieldTab_SimExObjLstCache: Array<clsvFieldTab_SimENEx> = JSON.parse(strTempObjLst);
    const arrvFieldTab_SimObjLst_T = vFieldTab_Sim_GetObjLstByJSONObjLst(
      arrvFieldTab_SimExObjLstCache,
    );
    return arrvFieldTab_SimObjLst_T;
  }
  try {
    const arrvFieldTab_SimExObjLst = await vFieldTab_SimEx_GetObjLstByCmPrjIdAsync(
      strCmPrjId,
      strWhereCond,
    );
    const strPrefix = Format('{0}_', clsvFieldTab_SimEN._CurrTabName);
    const arrCacheKeyLst = SessionStorage_GetKeyByPrefix(strPrefix);
    arrCacheKeyLst.forEach((x) => sessionStorage.removeItem(x));
    sessionStorage.setItem(strKey, JSON.stringify(arrvFieldTab_SimExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立，对象列表数：{1}!',
      strKey,
      arrvFieldTab_SimExObjLst.length,
    );
    console.log(strInfo);
    return arrvFieldTab_SimExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vFieldTab_SimEx_ConstructorName,
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
export async function vFieldTab_SimEx_GetObjLst_localStorage(strCmPrjId: string) {
  const strThisFuncName = 'GetObjLst_localStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  strWhereCond = Format('1=1', strCmPrjId);
  const strKey = Format('{0}_{1}', clsvFieldTab_SimEN._CurrTabName, strCmPrjId);
  //clsvFieldTab_SimEN.CacheAddiCondition = GetSessionCacheAdditionCondition(clsvFieldTab_SimEN._CurrTabName);
  if (IsNullOrEmpty(clsvFieldTab_SimEN._CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvFieldTab_SimEN._CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空！不正确');
    throw new Error('关键字为空！不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在，直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvFieldTab_SimExObjLstCache: Array<clsvFieldTab_SimEN> = JSON.parse(strTempObjLst);
    const arrvFieldTab_SimObjLst_T = vFieldTab_Sim_GetObjLstByJSONObjLst(
      arrvFieldTab_SimExObjLstCache,
    );
    return arrvFieldTab_SimObjLst_T;
  }
  try {
    const arrvFieldTab_SimExObjLst = await vFieldTab_SimEx_GetObjLstByCmPrjIdAsync(
      strCmPrjId,
      strWhereCond,
    );
    const strPrefix = Format('{0}_', clsvFieldTab_SimEN._CurrTabName);
    const arrCacheKeyLst = LocalStorage_GetKeyByPrefix(strPrefix);
    arrCacheKeyLst.forEach((x) => localStorage.removeItem(x));
    localStorage.setItem(strKey, JSON.stringify(arrvFieldTab_SimExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立，对象列表数：{1}!',
      strKey,
      arrvFieldTab_SimExObjLst.length,
    );
    console.log(strInfo);
    return arrvFieldTab_SimExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vFieldTab_SimEx_ConstructorName,
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
export async function vFieldTab_SimEx_GetObjLst_ClientCache(strCmPrjId: string) {
  const strThisFuncName = 'GetObjLst_ClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  strWhereCond = Format('1=1', strCmPrjId);
  const strKey = Format('{0}_{1}', clsvFieldTab_SimEN._CurrTabName, strCmPrjId);
  //clsvFieldTab_SimEN.CacheAddiCondition = GetSessionCacheAdditionCondition(clsvFieldTab_SimEN._CurrTabName);
  if (IsNullOrEmpty(clsvFieldTab_SimEN._CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvFieldTab_SimEN._CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空！不正确');
    throw new Error('关键字为空！不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在，直接返回
    const arrvFieldTab_SimExObjLstCache: Array<clsvFieldTab_SimENEx> = CacheHelper.Get(strKey);
    const arrvFieldTab_SimObjLst_T = vFieldTab_Sim_GetObjLstByJSONObjLst(
      arrvFieldTab_SimExObjLstCache,
    );
    return arrvFieldTab_SimObjLst_T;
  }
  try {
    const arrvFieldTab_SimExObjLst = await vFieldTab_SimEx_GetObjLstByCmPrjIdAsync(
      strCmPrjId,
      strWhereCond,
    );
    CacheHelper.Add(strKey, arrvFieldTab_SimExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立，对象列表数：{1}!',
      strKey,
      arrvFieldTab_SimExObjLst.length,
    );
    console.log(strInfo);
    return arrvFieldTab_SimExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vFieldTab_SimEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw strMsg;
  }
}

export async function vFieldTab_SimEx_GetSpan4FieldWithCurrTab(): Promise<HTMLSpanElement> {
  const objSpan: HTMLSpanElement = document.createElement('span');
  objSpan.setAttribute('class', 'text-primary');
  //objSpan.style.display = "inline-block";
  //objSpan.style.width = Format("150px");

  const objSpan_TabName: HTMLSpanElement = document.createElement('span');
  objSpan_TabName.setAttribute('class', 'text-info');
  objSpan_TabName.innerHTML = Format('{0}', '本表');

  const objBr: HTMLBRElement = document.createElement('br');

  const objSpan_FldName: HTMLSpanElement = document.createElement('span');
  objSpan_FldName.setAttribute('class', 'text-danger font-weight-bold ');
  objSpan_FldName.innerHTML = Format('{0}', '关键字');

  objSpan.appendChild(objSpan_TabName);
  objSpan.appendChild(objBr);
  objSpan.appendChild(objSpan_FldName);
  return objSpan;
}

export async function vFieldTab_SimEx_GetDiv4FieldWithCurrTab(): Promise<HTMLSpanElement> {
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

export async function vFieldTab_SimEx_GetSpan4FieldWithTabName(
  strFldId: string,
  strTabId: string,
  strDataNodeTypeId: string,
  intVersionNo: number,
  strPrjId: string,
  intIndex = 0,
  myJump: (strTabId: string) => void,
): Promise<HTMLSpanElement | null> {
  const objProject = await Projects_GetObjByPrjIdCache(strPrjId);
  if (objProject == null) {
    const strMsg = Format('Cm项目Id:[{0}]，没有相应的项目，请检查！', strPrjId);
    console.error(strMsg);
    alert(strMsg);
    return null;
  }

  const objFieldTab = await vFieldTab_Sim_GetObjByFldIdCache(strFldId, strPrjId);
  if (objFieldTab == null) {
    const strMsg = Format(
      '在项目:[{0}]中，字段Id:[{1}]没有相应字段，请检查！',
      objProject.prjName,
      strFldId,
    );
    console.error(strMsg);
    alert(strMsg);
    return null;
  }

  const objPrjTab = await vPrjTab_SimEx_GetObjByTabIdCache(
    strTabId,
    clsPrivateSessionStorage.currSelPrjId,
  );
  if (objPrjTab == null || IsNullOrEmpty(objPrjTab.tabName) == true) {
    throw '表名不能为空！(in .vFieldTab_SimEx_GetSpan4FieldWithTabName())';
  }
  if (objFieldTab == null || IsNullOrEmpty(objFieldTab.fldName) == true) {
    throw '字段名不能为空！(in .vFieldTab_SimEx_GetSpan4FieldWithTabName())';
  }

  const objSpan: HTMLSpanElement = document.createElement('span');
  objSpan.setAttribute('class', 'text-primary');
  let strVersionNo = '';
  if (intVersionNo > 1) {
    strVersionNo = Format('V{0}', intVersionNo);
  }
  const objA_TabName: HTMLAnchorElement = document.createElement('a');
  objA_TabName.setAttribute('class', 'text-primary');
  if (intIndex > 0) {
    objA_TabName.innerHTML = Format('{0}.{1}', intIndex, objPrjTab.tabName);
  } else {
    objA_TabName.innerHTML = Format('{0}', objPrjTab.tabName);
  }

  objA_TabName.addEventListener('click', (e) => {
    console.log(e);
    myJump(objPrjTab.tabId);
  });
  objA_TabName.href = 'javascript:void(0)';
  objA_TabName.title = '单击可以编辑该表的函数映射.';
  const objBr: HTMLBRElement = document.createElement('br');

  const spnDataNodeType = DataNodeTypeEx_GetSpanByDataNodeType(strDataNodeTypeId);
  const objSpan_FldName: HTMLSpanElement = document.createElement('span');
  objSpan_FldName.setAttribute('class', 'text-secondary font-weight-bold ');
  objSpan_FldName.innerHTML = Format(
    '{0}{1}{2}',
    spnDataNodeType.outerHTML,
    objFieldTab.fldName,
    strVersionNo,
  );

  objSpan.appendChild(objA_TabName);
  objSpan.appendChild(objBr);
  objSpan.appendChild(objSpan_FldName);
  return objSpan;
}

export async function vFieldTab_SimEx_GetDiv4FieldWithTabName(
  strFldId: string,
  strTabId: string,
  strDataNodeTypeId: string,
  intVersionNo: number,
  strPrjId: string,
  intIndex = 0,
  myJump: (strTabId: string) => void,
): Promise<HTMLSpanElement | null> {
  const objProject = await Projects_GetObjByPrjIdCache(strPrjId);
  if (objProject == null) {
    const strMsg = Format('Cm项目Id:[{0}]，没有相应的项目，请检查！', strPrjId);
    console.error(strMsg);
    alert(strMsg);
    return null;
  }

  const objFieldTab = await vFieldTab_Sim_GetObjByFldIdCache(
    strFldId,
    clsPrivateSessionStorage.currSelPrjId,
  );
  if (objFieldTab == null) {
    const strMsg = Format(
      '在项目:[{0}]中，字段Id:[{1}]没有相应字段，请检查！',
      objProject.prjName,
      strFldId,
    );
    console.error(strMsg);
    alert(strMsg);
    return null;
  }

  const objPrjTab = await vPrjTab_SimEx_GetObjByTabIdCache(
    strTabId,
    clsPrivateSessionStorage.currSelPrjId,
  );
  if (objPrjTab == null || IsNullOrEmpty(objPrjTab.tabName) == true) {
    throw '表名不能为空！(in .vFieldTab_SimEx_GetSpan4FieldWithTabName())';
  }
  if (objFieldTab == null || IsNullOrEmpty(objFieldTab.fldName) == true) {
    throw '字段名不能为空！(in .vFieldTab_SimEx_GetSpan4FieldWithTabName())';
  }

  const objDiv: HTMLSpanElement = document.createElement('div');
  objDiv.setAttribute('class', 'text-primary');
  let strVersionNo = '';
  if (intVersionNo > 1) {
    strVersionNo = Format('V{0}', intVersionNo);
  }
  const objA_TabName: HTMLAnchorElement = document.createElement('a');
  objA_TabName.setAttribute('class', 'text-primary');
  if (intIndex > 0) {
    objA_TabName.innerHTML = Format('{0}.{1}', intIndex, objPrjTab.tabName);
  } else {
    objA_TabName.innerHTML = Format('{0}', objPrjTab.tabName);
  }

  objA_TabName.addEventListener('click', (e) => {
    console.log(e);
    myJump(objPrjTab.tabId);
  });
  objA_TabName.href = 'javascript:void(0)';
  objA_TabName.title = '单击可以编辑该表的函数映射.';
  const objBr: HTMLBRElement = document.createElement('br');
  const spnDataNodeType = DataNodeTypeEx_GetSpanByDataNodeType(strDataNodeTypeId);
  const objSpan_FldName: HTMLSpanElement = document.createElement('span');
  objSpan_FldName.setAttribute('class', 'text-secondary font-weight-bold');
  objSpan_FldName.innerHTML = Format(
    '{0}{1}{2}',
    spnDataNodeType.outerHTML,
    objFieldTab.fldName,
    strVersionNo,
  );

  objDiv.appendChild(objA_TabName);
  objDiv.appendChild(objBr);
  objDiv.appendChild(objSpan_FldName);
  return objDiv;
}

/// <summary>
/// 绑定基于Web的下拉框
/// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunction)
/// </summary>
/// <param name = "objDDL">需要绑定当前表的下拉框</param>
export async function vFieldTab_SimEx_BindDdl_FldIdByTabIdInDivCache(
  strDivName: HTMLDivElement,
  strDdlName: string,
  strTabId: string,
) {
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = `下拉框：${strDdlName} 不存在！`;
    alert(strMsg);
    throw strMsg;
  }

  if (IsNullOrEmpty(strTabId) == true) {
    const strMsg = Format(
      '参数:[strTabId]不能为空！(In vFieldTab_SimEx_BindDdl_FldIdByTabIdInDivCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  try {
    //const strPrjId = await CMProjectEx_GetPrjIdByCmPrjIdCache(strCmPrjId);
    const arrPrjTabFld = await PrjTabFld_GetObjLstCache(strTabId);
    //arrPrjTabFld = arrPrjTabFld.filter(x => x.tabId == strTabId);
    const arrFldId = arrPrjTabFld.map((x) => x.fldId);
    // const strWhere = `${clsvFieldTab_SimEN.con_PrjId} = '${strPrjId}'`;
    let arrObjLst_Sel = await vFieldTab_Sim_GetObjLstByFldIdLstCache(
      arrFldId,
      clsPrivateSessionStorage.currSelPrjId,
    );

    arrObjLst_Sel = arrObjLst_Sel
      .filter((x) => arrFldId.indexOf(x.fldId) > -1)
      .sort((x, y) => x.fldName.localeCompare(y.fldName));
    BindDdl_ObjLstInDivObj_V(
      strDivName,
      strDdlName,
      arrObjLst_Sel,
      clsvFieldTab_SimEN.con_FldId,
      clsvFieldTab_SimEN.con_FldName,
      '表字段',
    );
  } catch (e: any) {
    console.error(e);
    alert(e);
    return;
  }
}

export async function vFieldTab_SimEx_BindDdl_FldIdWithExByTabIdInDivCache(
  strDivName: HTMLDivElement,
  strDdlName: string,
  strTabId: string,
) {
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = `下拉框：${strDdlName} 不存在！`;
    alert(strMsg);
    throw strMsg;
  }

  if (IsNullOrEmpty(strTabId) == true) {
    const strMsg = Format(
      '参数:[strTabId]不能为空！(In vFieldTab_SimEx_BindDdl_FldIdByTabIdInDivCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  try {
    //const strPrjId = await CMProjectEx_GetPrjIdByCmPrjIdCache(strCmPrjId);
    const arrPrjTabFld = await PrjTabFld_GetObjLstCache(strTabId);
    //arrPrjTabFld = arrPrjTabFld.filter(x => x.tabId == strTabId);
    const arrFldId = arrPrjTabFld.map((x) => x.fldId);
    // const strWhere = `${clsvFieldTab_SimEN.con_PrjId} = '${strPrjId}'`;
    let arrObjLst_Sel = await vFieldTab_Sim_GetObjLstByFldIdLstCache(
      arrFldId,
      clsPrivateSessionStorage.currSelPrjId,
    );

    arrObjLst_Sel = arrObjLst_Sel
      .filter((x) => arrFldId.indexOf(x.fldId) > -1)
      .sort((x, y) => x.fldName.localeCompare(y.fldName));

    const arrObjExLst_Sel = arrObjLst_Sel.map(vFieldTab_SimEx_CopyToEx);
    for (const objInFor of arrObjExLst_Sel) {
      const objPrjTabFld = await PrjTabFldEx_GetObjByFldIdCache(strTabId, objInFor.fldId);
      if (objPrjTabFld.isForExtendClass == true) {
        objInFor.fldNameEx = Format('{0}(扩展类)', objInFor.fldName);
      } else {
        objInFor.fldNameEx = objInFor.fldName;
      }
    }
    BindDdl_ObjLstInDivObj_V(
      strDivName,
      strDdlName,
      arrObjExLst_Sel,
      clsvFieldTab_SimEN.con_FldId,
      clsvFieldTab_SimENEx.con_FldNameEx,
      '表字段',
    );
  } catch (e: any) {
    console.error(e);
    alert(e);
    return;
  }
}

export async function vFieldTab_SimEx_GetArrvFieldTab_SimWithExByTabIdCache(
  strTabId: string,
): Promise<Array<clsvFieldTab_SimEN> | null> {
  if (IsNullOrEmpty(strTabId) == true) {
    const strMsg = Format(
      '参数:[strTabId]不能为空！(In vFieldTab_SimEx_BindDdl_FldIdByTabIdInDivCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  try {
    //const strPrjId = await CMProjectEx_GetPrjIdByCmPrjIdCache(strCmPrjId);
    const arrPrjTabFld = await PrjTabFld_GetObjLstCache(strTabId);
    //arrPrjTabFld = arrPrjTabFld.filter(x => x.tabId == strTabId);
    const arrFldId = arrPrjTabFld.map((x) => x.fldId);
    // const strWhere = `${clsvFieldTab_SimEN.con_PrjId} = '${strPrjId}'`;
    let arrObjLst_Sel = await vFieldTab_Sim_GetObjLstByFldIdLstCache(
      arrFldId,
      clsPrivateSessionStorage.currSelPrjId,
    );

    arrObjLst_Sel = arrObjLst_Sel
      .filter((x) => arrFldId.indexOf(x.fldId) > -1)
      .sort((x, y) => x.fldName.localeCompare(y.fldName));

    const arrObjExLst_Sel = arrObjLst_Sel.map(vFieldTab_SimEx_CopyToEx);
    for (const objInFor of arrObjExLst_Sel) {
      const objPrjTabFld = await PrjTabFldEx_GetObjByFldIdCache(strTabId, objInFor.fldId);
      if (objPrjTabFld.isForExtendClass == true) {
        objInFor.fldNameEx = Format('{0}(扩展类)', objInFor.fldName);
      } else {
        objInFor.fldNameEx = objInFor.fldName;
      }
    }

    const arrvFieldTab_Sim = new Array<clsvFieldTab_SimEN>();
    if (arrObjLst_Sel == null) return arrvFieldTab_Sim;
    const obj0 = new clsvFieldTab_SimEN();
    obj0.fldId = '0';
    obj0.fldName = '请选择表字段...';
    arrvFieldTab_Sim.push(obj0);
    arrObjLst_Sel.forEach((x) => arrvFieldTab_Sim.push(x));
    return arrvFieldTab_Sim;
  } catch (e: any) {
    console.error(e);
    alert(e);
    return null;
  }
}

export async function vFieldTab_SimEx_GetDdlDataByTabIdCache(strTabId: string) {
  if (IsNullOrEmpty(strTabId) == true) {
    const strMsg = Format(
      '参数:[strTabId]不能为空！(In vFieldTab_SimEx_BindDdl_FldIdByTabIdInDivCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  try {
    //const strPrjId = await CMProjectEx_GetPrjIdByCmPrjIdCache(strCmPrjId);
    const arrPrjTabFld = await PrjTabFld_GetObjLstCache(strTabId);
    //arrPrjTabFld = arrPrjTabFld.filter(x => x.tabId == strTabId);
    const arrFldId = arrPrjTabFld.map((x) => x.fldId);
    // const strWhere = `${clsvFieldTab_SimEN.con_PrjId} = '${strPrjId}'`;
    let arrObjLst_Sel = await vFieldTab_Sim_GetObjLstByFldIdLstCache(
      arrFldId,
      clsPrivateSessionStorage.currSelPrjId,
    );

    arrObjLst_Sel = arrObjLst_Sel
      .filter((x) => arrFldId.indexOf(x.fldId) > -1)
      .sort((x, y) => x.fldName.localeCompare(y.fldName));
    const arrvFieldTab_Sim = new Array<clsvFieldTab_SimEN>();
    if (arrObjLst_Sel == null) return null;
    const obj0 = new clsvFieldTab_SimEN();
    obj0.fldId = '0';
    obj0.fldName = '请选择表字段...';
    arrvFieldTab_Sim.push(obj0);
    arrObjLst_Sel.forEach((x) => arrvFieldTab_Sim.push(x));
    return arrvFieldTab_Sim;
  } catch (e: any) {
    console.error(e);
    alert(e);
    return;
  }
}

/// <summary>
/// 绑定基于Web的下拉框
/// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)
/// </summary>
/// <param name = "objDDL">需要绑定当前表的下拉框</param>
/// <param name = "strPrjId">工程ID</param>
export async function vFieldTab_SimEx_BindDdl_FldId4ExtendInDivExCache(
  strDivName: HTMLDivElement,
  strDdlName: string,
  strTabId: string,
) {
  //if (IsNullOrEmpty(strPrjId) == true) {
  //    const strMsg = Format("参数:[strPrjId]不能为空！");
  //    throw (strMsg);
  //}

  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = `下拉框：${strDdlName} 不存在！`;
    alert(strMsg);
    throw strMsg;
  }
  ////const strPrjId = await CMProjectEx_GetPrjIdByCmPrjIdCache(strCmPrjId);
  //if (strPrjId == null) return;
  let arrPrjTabFld = await PrjTabFld_GetObjLstCache(strTabId);
  arrPrjTabFld = arrPrjTabFld.filter((x) => x.tabId == strTabId && x.isForExtendClass == true);
  let arrFldId = arrPrjTabFld.map((x) => x.fldId);

  let arrObjLst_Sel: Array<clsvFieldTab_SimEN> = await vFieldTab_Sim_GetObjLstByFldIdLstCache(
    arrFldId,
    clsPrivateSessionStorage.currSelPrjId,
  );

  arrObjLst_Sel = arrObjLst_Sel.sort(vFieldTab_SimEx_SortFunByFldName);
  const arrObjExLst_Sel: Array<clsvFieldTab_SimENEx> = arrObjLst_Sel.map(vFieldTab_SimEx_CopyToEx);

  arrPrjTabFld = arrPrjTabFld.filter((x) => x.isForExtendClass == true);
  arrFldId = arrPrjTabFld.map((x) => x.fldId);

  for (const objInFor of arrObjExLst_Sel) {
    if (arrFldId.indexOf(objInFor.fldId) > -1) {
      objInFor.fldNameEx = Format('{0}(扩展类)', objInFor.fldName);
    } else {
      objInFor.fldNameEx = objInFor.fldName;
    }
  }
  BindDdl_ObjLstInDivObj_V(
    strDivName,
    strDdlName,
    arrObjExLst_Sel,
    clsvFieldTab_SimEN.con_FldId,
    clsvFieldTab_SimENEx.con_FldNameEx,
    '字段',
  );
}

export async function vFieldTab_SimEx_GetArrvFieldTab_Sim4ExtendByTabIdCache(
  strTabId: string,
): Promise<Array<clsvFieldTab_SimEN>> {
  ////const strPrjId = await CMProjectEx_GetPrjIdByCmPrjIdCache(strCmPrjId);
  //if (strPrjId == null) return;
  let arrPrjTabFld = await PrjTabFld_GetObjLstCache(strTabId);
  arrPrjTabFld = arrPrjTabFld.filter((x) => x.tabId == strTabId && x.isForExtendClass == true);
  let arrFldId = arrPrjTabFld.map((x) => x.fldId);

  let arrObjLst_Sel: Array<clsvFieldTab_SimEN> = await vFieldTab_Sim_GetObjLstByFldIdLstCache(
    arrFldId,
    clsPrivateSessionStorage.currSelPrjId,
  );

  arrObjLst_Sel = arrObjLst_Sel.sort(vFieldTab_SimEx_SortFunByFldName);
  const arrObjExLst_Sel: Array<clsvFieldTab_SimENEx> = arrObjLst_Sel.map(vFieldTab_SimEx_CopyToEx);

  arrPrjTabFld = arrPrjTabFld.filter((x) => x.isForExtendClass == true);
  arrFldId = arrPrjTabFld.map((x) => x.fldId);

  for (const objInFor of arrObjExLst_Sel) {
    if (arrFldId.indexOf(objInFor.fldId) > -1) {
      objInFor.fldNameEx = Format('{0}(扩展类)', objInFor.fldName);
    } else {
      objInFor.fldNameEx = objInFor.fldName;
    }
  }

  const arrvFieldTab_Sim = new Array<clsvFieldTab_SimEN>();
  if (arrObjLst_Sel == null) return arrvFieldTab_Sim;
  const obj0 = new clsvFieldTab_SimEN();
  obj0.fldId = '0';
  obj0.fldName = '请选择表字段...';
  arrvFieldTab_Sim.push(obj0);
  arrObjLst_Sel.forEach((x) => arrvFieldTab_Sim.push(x));
  return arrvFieldTab_Sim;
}

export async function vFieldTab_SimEx_GetDdlDataByPrjIdCache(strPrjId: string) {
  ////const strPrjId = await CMProjectEx_GetPrjIdByCmPrjIdCache(strCmPrjId);
  //if (strPrjId == null) return;

  let arrObjLst_Sel: Array<clsvFieldTab_SimEN> = await vFieldTab_Sim_GetObjLstCache(strPrjId);

  arrObjLst_Sel = arrObjLst_Sel.sort(vFieldTab_SimEx_SortFunByFldName);
  // const arrObjExLst_Sel  = arrObjLst_Sel.map(vFieldTab_SimEx_CopyToEx);

  const arrvFieldTab_Sim = new Array<clsvFieldTab_SimEN>();
  if (arrObjLst_Sel == null) return null;
  const obj0 = new clsvFieldTab_SimEN();
  obj0.fldId = '0';
  obj0.fldName = '选字段...';
  arrvFieldTab_Sim.push(obj0);
  arrObjLst_Sel.forEach((x) => arrvFieldTab_Sim.push(x));
  return arrvFieldTab_Sim;
}

export async function vFieldTab_SimEx_BindDdl_FldIdInDivExCache(
  strDivName: HTMLDivElement,
  strDdlName: string,
  strTabId: string,
  strPrjId: string,
) {
  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format('参数:[strPrjId]不能为空！');
    throw strMsg;
  }

  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = `下拉框：${strDdlName} 不存在！`;
    alert(strMsg);
    throw strMsg;
  }
  ////const strPrjId = await CMProjectEx_GetPrjIdByCmPrjIdCache(strCmPrjId);
  //if (strPrjId == null) return;
  let arrPrjTabFld = await PrjTabFld_GetObjLstCache(strTabId);
  arrPrjTabFld = arrPrjTabFld.filter((x) => x.tabId == strTabId);
  let arrFldId = arrPrjTabFld.map((x) => x.fldId);

  let arrObjLst_Sel: Array<clsvFieldTab_SimEN> = await vFieldTab_Sim_GetObjLstByFldIdLstCache(
    arrFldId,
    strPrjId,
  );
  arrObjLst_Sel = arrObjLst_Sel
    .filter((x) => arrFldId.indexOf(x.fldId) > -1)
    .sort(vFieldTab_SimEx_SortFunByFldName);
  const arrObjExLst_Sel: Array<clsvFieldTab_SimENEx> = arrObjLst_Sel.map(vFieldTab_SimEx_CopyToEx);

  arrPrjTabFld = arrPrjTabFld.filter((x) => x.isForExtendClass == true);
  arrFldId = arrPrjTabFld.map((x) => x.fldId);

  for (const objInFor of arrObjExLst_Sel) {
    if (arrFldId.indexOf(objInFor.fldId) > -1) {
      objInFor.fldNameEx = Format('{0}(扩展类)', objInFor.fldName);
    } else {
      objInFor.fldNameEx = objInFor.fldName;
    }
  }
  BindDdl_ObjLstInDivObj_V(
    strDivName,
    strDdlName,
    arrObjExLst_Sel,
    clsvFieldTab_SimEN.con_FldId,
    clsvFieldTab_SimENEx.con_FldNameEx,
    '字段',
  );
}

export async function vFieldTab_SimEx_GetDdlDataExCache(strTabId: string, strPrjId: string) {
  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format('参数:[strPrjId]不能为空！');
    throw strMsg;
  }

  ////const strPrjId = await CMProjectEx_GetPrjIdByCmPrjIdCache(strCmPrjId);
  //if (strPrjId == null) return;
  let arrPrjTabFld = await PrjTabFld_GetObjLstCache(strTabId);
  arrPrjTabFld = arrPrjTabFld.filter((x) => x.tabId == strTabId);
  let arrFldId = arrPrjTabFld.map((x) => x.fldId);

  let arrObjLst_Sel: Array<clsvFieldTab_SimEN> = await vFieldTab_Sim_GetObjLstByFldIdLstCache(
    arrFldId,
    strPrjId,
  );
  arrObjLst_Sel = arrObjLst_Sel
    .filter((x) => arrFldId.indexOf(x.fldId) > -1)
    .sort(vFieldTab_SimEx_SortFunByFldName);
  const arrObjExLst_Sel: Array<clsvFieldTab_SimENEx> = arrObjLst_Sel.map(vFieldTab_SimEx_CopyToEx);

  arrPrjTabFld = arrPrjTabFld.filter((x) => x.isForExtendClass == true);
  arrFldId = arrPrjTabFld.map((x) => x.fldId);

  for (const objInFor of arrObjExLst_Sel) {
    if (arrFldId.indexOf(objInFor.fldId) > -1) {
      objInFor.fldNameEx = Format('{0}(扩展类)', objInFor.fldName);
    } else {
      objInFor.fldNameEx = objInFor.fldName;
    }
  }
  const arrvFieldTab_Sim = new Array<clsvFieldTab_SimEN>();
  if (arrObjLst_Sel == null) return null;
  const obj0 = new clsvFieldTab_SimEN();
  obj0.fldId = '0';
  obj0.fldName = '请选择表字段...';
  arrvFieldTab_Sim.push(obj0);
  arrObjLst_Sel.forEach((x) => arrvFieldTab_Sim.push(x));
  return arrvFieldTab_Sim;
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
export function vFieldTab_SimEx_SortFunByFldName(
  a: clsvFieldTab_SimEN,
  b: clsvFieldTab_SimEN,
): number {
  return a.fldName.localeCompare(b.fldName);
}

export async function vFieldTab_SimEx_GetObjLstByTabIdCache(strPrjId: string, strTabId: string) {
  try {
    // const strPrjId = await CMProjectEx_GetPrjIdByCmPrjIdCache(strCmPrjId);
    let arrPrjTabFld = await PrjTabFld_GetObjLstCache(strTabId);
    arrPrjTabFld = arrPrjTabFld.filter((x) => x.isForExtendClass == false);
    //arrPrjTabFld = arrPrjTabFld.filter(x => x.tabId == strTabId);
    const arrFldId = arrPrjTabFld.map((x) => x.fldId);
    const strWhere = `substring(${clsvFieldTab_SimEN.con_FldId},1,4) = '${strPrjId}'`;
    let arrObjLst_Sel: Array<clsvFieldTab_SimEN> = await vFieldTab_Sim_GetObjLstAsync(strWhere);
    arrObjLst_Sel = arrObjLst_Sel
      .filter((x) => arrFldId.indexOf(x.fldId) > -1)
      .sort((x, y) => x.fldName.localeCompare(y.fldName));
    return arrObjLst_Sel;
  } catch (e: any) {
    console.error(e);
    const strMsg = Format('在获取表:[{0}]的字段对象时出错:{1}.', strTabId, e);
    //alert(strMsg);
    throw strMsg;
  }
}

export async function vFieldTab_SimEx_GetObjLstByTabIdNoDataNodeCache(
  strCmPrjId: string,
  strTabId: string,
) {
  try {
    let arrPrjTabFld = await PrjTabFld_GetObjLstCache(strTabId);
    arrPrjTabFld = arrPrjTabFld.filter((x) => x.isForExtendClass == false);
    //arrPrjTabFld = arrPrjTabFld.filter(x => x.tabId == strTabId);
    let arrFldId = arrPrjTabFld.map((x) => x.fldId);
    const arrvDataNode_Sim = await vDataNode_SimEx_GetObjLstByTabIdCacheEx(
      strTabId,
      clsPrivateSessionStorage.currSelPrjId,
    );
    if (arrvDataNode_Sim != null) {
      const arrFldId_Dn = arrvDataNode_Sim.map((x) => x.fldId);
      arrFldId = arrFldId.filter((x) => arrFldId_Dn.indexOf(x) == -1);
    }
    let arrObjLst_Sel: Array<clsvFieldTab_SimEN> = await vFieldTab_Sim_GetObjLstByFldIdLstCache(
      arrFldId,
      clsPrivateSessionStorage.currSelPrjId,
    );
    arrObjLst_Sel = arrObjLst_Sel.sort((x, y) => x.fldName.localeCompare(y.fldName));
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
export async function vFieldTab_SimEx_BindDdl_FldIdInDivCache(
  strDivName: HTMLDivElement,
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
    const strWhere = `substring(${clsvFieldTab_SimEN.con_FldId},1,4) = '${strPrjId}'`;
    let arrObjLst_Sel: Array<clsvFieldTab_SimEN> = await vFieldTab_Sim_GetObjLstAsync(strWhere);
    arrObjLst_Sel = arrObjLst_Sel.sort((x, y) => x.fldName.localeCompare(y.fldName));
    BindDdl_ObjLstInDivObj_V(
      strDivName,
      strDdlName,
      arrObjLst_Sel,
      clsvFieldTab_SimEN.con_FldId,
      clsvFieldTab_SimEN.con_FldName,
      '表字段',
    );
  } catch (e: any) {
    console.error(e);
    alert(e);
    return;
  }
}

/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:20210705230650
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function vFieldTab_SimEx_SortFunByHasNodeAndName(
  a: clsvFieldTab_SimENEx,
  b: clsvFieldTab_SimENEx,
): number {
  if (a.isHasNode == b.isHasNode) return a.fldName.localeCompare(b.fldName);
  else if (a.isHasNode == true) return -1;
  else return 1;
}
export function vFieldTab_SimEx_IsExtendShow(strFldName: string) {
  let bolIsExtendShow = false;
  if (setField_ExtendShow != null) {
    bolIsExtendShow = setField_ExtendShow.has(strFldName);
  }
  return bolIsExtendShow;
}
export async function vFieldTab_SimEx_GetSpan4Field(
  strFldId: string,
  strDataNodeTypeId: string,
  intVersionNo: number,
): Promise<HTMLSpanElement> {
  const objFieldTab = await vFieldTab_Sim_GetObjByFldIdCache(
    strFldId,
    clsPrivateSessionStorage.currSelPrjId,
  );
  if (objFieldTab == null || IsNullOrEmpty(objFieldTab.fldName) == true) {
    throw '字段名不能为空！';
  }
  const objSpan: HTMLSpanElement = document.createElement('span');
  objSpan.setAttribute('class', 'text-secondary font-weight-bold ');
  objSpan.style.display = 'inline-block';
  let strVersionNo = '';
  if (intVersionNo > 1) {
    strVersionNo = Format('V{0}', intVersionNo);
  }
  //let bolIsExtendShow = vFieldTab_SimEx_IsExtendShow(objFieldTab.fldName);
  const spnDataNodeType = DataNodeTypeEx_GetSpanByDataNodeType(strDataNodeTypeId);
  objSpan.innerHTML = Format(
    '{0}{1}{2}',
    spnDataNodeType.outerHTML,
    objFieldTab.fldName,
    strVersionNo,
  );
  return objSpan;
  //objContainer.appendChild(objSpan);
}

export async function vFieldTab_SimEx_GetSpan4DataNode(
  objvDataNode_SimEx: clsvDataNode_SimENEx,
): Promise<HTMLSpanElement> {
  //const objFieldTab = await vFieldTab_SimEx_GetObjByFldIdCache(strFldId, strPrjId);
  //if (objFieldTab == null || IsNullOrEmpty(objFieldTab.fldName) == true) {
  //    throw ("字段名不能为空！");
  //}
  const objSpan: HTMLSpanElement = document.createElement('span');
  objSpan.setAttribute('class', 'text-secondary font-weight-bold ');
  objSpan.style.display = 'inline-block';
  let strVersionNo = '';
  if (objvDataNode_SimEx.versionNo > 1) {
    strVersionNo = Format('V{0}', objvDataNode_SimEx.versionNo);
  }
  //let bolIsExtendShow = vFieldTab_SimEx_IsExtendShow(objFieldTab.fldName);
  const spnDataNodeType = DataNodeTypeEx_GetSpanByDataNodeType(objvDataNode_SimEx.dataNodeTypeId);
  if (objvDataNode_SimEx.keyFldLst != null && objvDataNode_SimEx.keyFldLst.length > 0) {
    const arrFldId = GetKeyLstByKeyFldStr(objvDataNode_SimEx.keyFldLst);
    for (const strFldId of arrFldId) {
      const objvFieldTab_Sim = await vFieldTab_Sim_GetObjByFldIdCache(
        strFldId,
        clsPrivateSessionStorage.currSelPrjId,
      );
      if (objvFieldTab_Sim == null) continue;
      const spnFldName = GetSpan_Empty('text-secondary');
      spnFldName.innerHTML = Format(
        '{0}{1}{2}',
        spnDataNodeType.outerHTML,
        objvFieldTab_Sim.fldName,
        strVersionNo,
      );
      objSpan.appendChild(spnFldName);
      objSpan.appendChild(GetBr_Empty());
    }
    return objSpan;
  }
  objSpan.innerHTML = Format(
    '{0}{1}{2}',
    spnDataNodeType.outerHTML,
    objvDataNode_SimEx.fldName,
    strVersionNo,
  );
  return objSpan;
  //objContainer.appendChild(objSpan);
}

/**
 * 绑定表字段以及相关结点到一个下拉框
 * @param strDdlName
 * @param strCmPrjId
 * @param strTabId
 */
export async function vFieldTab_SimEx_BindDdl_FldIdWithNodeByTabIdCache(
  strDdlName: string,
  strCmPrjId: string,
  strPrjId: string,
  strTabId: string,
) {
  const vDataNode_SimStore = usevDataNode_SimStore();
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = `下拉框：${strDdlName} 不存在！`;
    alert(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容

  try {
    //const strPrjId = await CMProjectEx_GetPrjIdByCmPrjIdCache(strCmPrjId);
    const arrDataNode = await vDataNode_SimStore.getObjLstByTabId(strTabId);
    const arrDataNodeV23 = arrDataNode; //.filter(x => x.versionNo > 1);
    //const arrFieldTabObjLst_Node0 = await arrDataNodeV23.map((await vFieldTab_SimEx_GetvFieldTab_SimObjByNodeCache));
    const arrFieldTabObjLst_Node: Array<clsvFieldTab_SimEN> = [];
    for (const obj of arrDataNodeV23) {
      const objvFieldTab_Sim = await vFieldTab_SimEx_GetvFieldTab_SimObjByNodeCache(obj);
      if (objvFieldTab_Sim == null) {
        const strMsg = Format(
          '结点:[{0}({1})]中，字段Id:[{2}]没有相应字段，请检查！',
          obj.dataNodeName,
          obj.dataNodeId,
          obj.fldId,
        );
        console.error(strMsg);
        alert(strMsg);
        return null;
      }
      arrFieldTabObjLst_Node.push(objvFieldTab_Sim);
    }
    const objProject = await Projects_GetObjByPrjIdCache(strPrjId);
    if (objProject == null) {
      const strMsg = Format('CM项目Id:[{0}]，没有相应的CM项目，请检查！', strPrjId);
      console.error(strMsg);
      alert(strMsg);
      return;
    }

    const arrPrjTabFld = await PrjTabFld_GetObjLstCache(strTabId);
    //arrPrjTabFld = arrPrjTabFld.filter(x => x.tabId == strTabId);
    const arrFldId = arrPrjTabFld.map((x) => x.fldId);

    const strWhere = `substring(${clsvFieldTab_SimEN.con_FldId},1,4) = '${strPrjId}'`;
    let arrObjLst_Sel: Array<clsvFieldTab_SimEN> = await vFieldTab_Sim_GetObjLstAsync(strWhere);
    arrObjLst_Sel = arrObjLst_Sel.filter((x) => arrFldId.indexOf(x.fldId) > -1);
    const arrFldId_Node = arrFieldTabObjLst_Node.map((x) => x.fldId);
    let arrvFieldTab_SimEx = arrObjLst_Sel.map(vFieldTab_SimEx_CopyToEx);
    for (const objInFor of arrvFieldTab_SimEx) {
      if (arrFldId_Node.indexOf(objInFor.fldId) > -1) {
        objInFor.fldNameEx = Format('{0}(结点)', objInFor.fldName);
        objInFor.isHasNode = true;
      } else {
        objInFor.fldNameEx = Format('{0}', objInFor.fldName);
        objInFor.isHasNode = false;
      }
    }
    //        let arrObjLst_All: Array<clsvFieldTab_SimEN> = arrObjLst_Sel.concat(arrFieldTabObjLst_Node);

    arrvFieldTab_SimEx = arrvFieldTab_SimEx.sort(vFieldTab_SimEx_SortFunByHasNodeAndName);
    BindDdl_ObjLst_V(
      strDdlName,
      arrvFieldTab_SimEx,
      clsvFieldTab_SimEN.con_FldId,
      clsvFieldTab_SimENEx.con_FldNameEx,
      '表字段',
    );
  } catch (e: any) {
    console.error(e);
    alert(e);
    return;
  }
}

export async function vFieldTab_SimEx_GetvFieldTab_SimObjByNodeCache(
  objvDataNode_Sim: clsvDataNode_Sim,
): Promise<clsvFieldTab_SimEN | null> {
  const objCMProject = await CMProject_GetObjByCmPrjIdCache(clsPrivateSessionStorage.cmPrjId);
  if (objCMProject == null) {
    const strMsg = Format(
      'CM项目Id:[{0}]，没有相应的CM项目，请检查！',
      clsPrivateSessionStorage.cmPrjId,
    );
    console.error(strMsg);
    alert(strMsg);
    return null;
  }

  const objFieldTab = new clsvFieldTab_SimEN();
  let strVersionNo = '';
  if (objvDataNode_Sim.versionNo > 1) {
    strVersionNo = Format('V{0}', objvDataNode_Sim.versionNo);
  }
  objFieldTab.fldId = Format('{0}{1}', objvDataNode_Sim.fldId, strVersionNo);
  const objFieldTab0 = await vFieldTab_Sim_GetObjByFldIdCache(
    objvDataNode_Sim.fldId,
    clsPrivateSessionStorage.currSelPrjId,
  );

  if (objFieldTab0 == null) {
    objFieldTab.fldName = Format('无字段{0}', strVersionNo);
  } else {
    objFieldTab.fldName = Format('{0}{1}', objFieldTab0.fldName, strVersionNo);
  }
  return objFieldTab;
}

/**
 * 映射函数。根据表映射把输入字段值，映射成输出字段值
 * 作者:pyf
 * 日期:2022-10-26
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 @param strPrjId:缓存的分类字段
 * @returns 返回一个输出字段值
*/
export async function vFieldTab_SimEx_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
  strPrjId: string,
) {
  const vFieldTab_Sim2Store = usevFieldTab_Sim2Store();
  //const strThisFuncName = "func";

  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format('参数:[strCmPrjId]不能为空！(In func)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format('缓存分类变量:[strPrjId]的长度:[{0}]不正确！', strPrjId.length);
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName != clsvFieldTab_SimEN.con_FldId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsvFieldTab_SimEN._AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确，不在输出字段范围之内!({1})',
      strInFldName,
      clsvFieldTab_SimEN._AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strFldId = strInValue;
  if (IsNullOrEmpty(strInValue) == true) {
    return '';
  }
  const objvFieldTab_Sim = await vFieldTab_Sim2Store.getObj(strFldId);
  if (objvFieldTab_Sim == null) return '';
  return vFieldTab_Sim2Store.GetFldValue(objvFieldTab_Sim, strOutFldName).toString();
}

//(IsNeedGC == false)该表下拉框功能不需要生成;
/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)
 * @param objDDL:需要绑定当前表的下拉框
 * @param strPrjId:工程ID
 */
export async function vFieldTab_SimEx_BindDdl_FldIdByPrjIdInDivCache(
  strDivName: HTMLDivElement,
  strDdlName: string,
  strPrjId: string,
) {
  // const strThisFuncName = 'vFieldTab_SimEx_BindDdl_FldIdByCmPrjIdInDivCache';

  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空！(In vFieldTab_SimEx_BindDdl_FldIdByCmPrjIdInDivCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format('缓存分类变量:[strPrjId]的长度:[{0}]不正确！', strPrjId.length);
    console.error(strMsg);
    throw strMsg;
  }

  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在！(In BindDdl_FldIdByPrjIdInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_FldIdByPrjIdInDivCache");
  const strWhere = `substring(${clsvFieldTab_SimEN.con_FldId},1,4) = '${strPrjId}'`;
  let arrObjLst_Sel: Array<clsvFieldTab_SimEN> = await vFieldTab_Sim_GetObjLstAsync(strWhere);
  if (arrObjLst_Sel == null) return;
  arrObjLst_Sel = arrObjLst_Sel.sort((x, y) => x.fldName.localeCompare(y.fldName));
  //arrObjLst_Sel = arrObjLst_Sel.filter(x => x.prjId == strPrjId);
  BindDdl_ObjLstInDivObj_V(
    strDivName,
    strDdlName,
    arrObjLst_Sel,
    clsvFieldTab_SimEN.con_FldId,
    clsvFieldTab_SimEN.con_FldName,
    'v字段表_Sim',
  );
}

export async function vFieldTab_SimEx_GetArrvFieldTab_SimByPrjIdCache(
  strPrjId: string,
): Promise<Array<clsvFieldTab_SimEN> | null> {
  // const strThisFuncName = 'vFieldTab_SimEx_BindDdl_FldIdByCmPrjIdInDivCache';

  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空！(In vFieldTab_SimEx_BindDdl_FldIdByCmPrjIdInDivCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format('缓存分类变量:[strPrjId]的长度:[{0}]不正确！', strPrjId.length);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_FldIdByPrjIdInDivCache");
  const strWhere = `substring(${clsvFieldTab_SimEN.con_FldId},1,4) = '${strPrjId}'`;
  let arrObjLst_Sel: Array<clsvFieldTab_SimEN> = await vFieldTab_Sim_GetObjLstAsync(strWhere);
  if (arrObjLst_Sel == null) return null;
  arrObjLst_Sel = arrObjLst_Sel.sort((x, y) => x.fldName.localeCompare(y.fldName));
  //arrObjLst_Sel = arrObjLst_Sel.filter(x => x.prjId == strPrjId);

  const arrvFieldTab_Sim = new Array<clsvFieldTab_SimEN>();

  const obj0 = new clsvFieldTab_SimEN();
  obj0.fldId = '0';
  obj0.fldName = '选字段...';
  arrvFieldTab_Sim.push(obj0);
  arrObjLst_Sel.forEach((x) => arrvFieldTab_Sim.push(x));
  return arrvFieldTab_Sim;
}

export async function vFieldTab_SimEx_FuncMap_ConvFldName(objFieldTab: clsvFieldTab_SimENEx) {
  const strThisFuncName = 'FieldTabEx_FuncMap_ConvFldName';
  if (IsNullOrEmpty(objFieldTab.convFldName) == false) return;
  let objFieldTab4Conv;
  try {
    objFieldTab4Conv = await FieldTab4CodeConv_GetObjByFldIdCache(
      objFieldTab.fldId,
      clsPrivateSessionStorage.currSelPrjId,
      false,
    );
  } catch (e) {
    console.error('出现异常！pyf');
    console.error(e);

    return;
  }
  if (objFieldTab4Conv == null) {
    // console.error('用于转换字段的对象为空！(正常情况)');
    return;
  }
  try {
    const objFieldTab4ConvEx = FieldTab4CodeConvEx_CopyToEx(objFieldTab4Conv);
    await FieldTab4CodeConvEx_FuncMapByFldName(
      clsFieldTab4CodeConvENEx.con_CodeTabName,
      objFieldTab4ConvEx,
    );
    await FieldTab4CodeConvEx_FuncMapByFldName(
      clsFieldTab4CodeConvENEx.con_CodeFldName,
      objFieldTab4ConvEx,
    );
    await FieldTab4CodeConvEx_FuncMapByFldName(
      clsFieldTab4CodeConvENEx.con_CodeNameFldName,
      objFieldTab4ConvEx,
    );

    const spnRoot = document.createElement('span');
    spnRoot.className = 'text-info';
    spnRoot.title = '转换字段信息';

    const spnTab0 = document.createElement('span');
    spnTab0.className = 'text-primary  font-weight-bold';
    spnTab0.title = '表名';
    spnTab0.innerHTML = '表名:';

    const spnTab1 = document.createElement('span');
    spnTab1.className = 'text-secondary  font-weight-bold';
    spnTab1.title = objFieldTab4ConvEx.codeTabName;
    spnTab1.innerHTML = objFieldTab4ConvEx.codeTabName;

    const spnTab = document.createElement('span');
    spnTab.appendChild(spnTab0);
    spnTab.appendChild(spnTab1);
    const spnCode0 = document.createElement('span');
    spnCode0.className = 'text-primary';
    spnCode0.title = '代码:';
    spnCode0.innerHTML = '代码:';

    const spnCode1 = document.createElement('span');
    spnCode1.className = 'text-secondary';
    spnCode1.title = objFieldTab4ConvEx.codeFldName;
    spnCode1.innerHTML = objFieldTab4ConvEx.codeFldName;

    const spnCode = document.createElement('span');
    spnCode.appendChild(spnCode0);
    spnCode.appendChild(spnCode1);

    const spnName0 = document.createElement('span');
    spnName0.className = 'text-primary';
    spnName0.title = '文本';
    spnName0.innerHTML = '文本:';

    const spnName1 = document.createElement('span');
    spnName1.className = 'text-secondary';
    spnName1.title = objFieldTab4ConvEx.codeNameFldName;
    spnName1.innerHTML = objFieldTab4ConvEx.codeNameFldName;

    const spnName = document.createElement('span');
    spnName.appendChild(spnName0);
    spnName.appendChild(spnName1);
    const objBr = document.createElement('br');
    const objBr1 = document.createElement('br');

    spnRoot.appendChild(spnTab);
    spnRoot.appendChild(objBr);
    spnRoot.appendChild(spnCode);
    spnRoot.appendChild(objBr1);
    spnRoot.appendChild(spnName);

    objFieldTab.convFldName = spnRoot.outerHTML;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000084)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      vFieldTab_SimEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

export async function vFieldTab_SimEx_GetHomologousFldIdByFldIdCacheEx(
  strFldId: string,
): Promise<string> {
  const vFieldTab_Sim2Store = usevFieldTab_Sim2Store();
  const objFieldTab0 = await vFieldTab_Sim2Store.getObj(strFldId);

  if (objFieldTab0 == null) {
    return '';
  } else {
    return objFieldTab0.homologousFldId;
  }
}

export async function vFieldTab_SimEx_GetFldPrecisionByFldIdCacheEx(
  strFldId: string,
): Promise<number> {
  const vFieldTab_Sim2Store = usevFieldTab_Sim2Store();
  const objFieldTab0 = await vFieldTab_Sim2Store.getObj(strFldId);

  if (objFieldTab0 == null) {
    return 0;
  } else {
    return objFieldTab0.fldPrecision;
  }
}

export async function vFieldTab_SimEx_GetArrvFieldTab_SimByTabIdCache(
  strTabId: string,
): Promise<Array<clsvFieldTab_SimEN>> {
  if (IsNullOrEmpty(strTabId) == true) {
    const strMsg = Format(
      '参数:[strTabId]不能为空！(In vFieldTab_SimEx_BindDdl_FldIdByTabIdInDivCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  try {
    //const strPrjId = await CMProjectEx_GetPrjIdByCmPrjIdCache(strCmPrjId);
    const arrPrjTabFld = await PrjTabFld_GetObjLstCache(strTabId);
    //arrPrjTabFld = arrPrjTabFld.filter(x => x.tabId == strTabId);
    const arrFldId = arrPrjTabFld.map((x) => x.fldId);
    // const strWhere = `${clsvFieldTab_SimEN.con_PrjId} = '${strPrjId}'`;
    let arrObjLst_Sel = await vFieldTab_Sim_GetObjLstByFldIdLstCache(
      arrFldId,
      clsPrivateSessionStorage.currSelPrjId,
    );

    arrObjLst_Sel = arrObjLst_Sel
      .filter((x) => arrFldId.indexOf(x.fldId) > -1)
      .sort((x, y) => x.fldName.localeCompare(y.fldName));

    const arrvFieldTab_Sim = new Array<clsvFieldTab_SimEN>();

    const obj0 = new clsvFieldTab_SimEN();
    obj0.fldId = '0';
    obj0.fldName = '选字段...';
    arrvFieldTab_Sim.push(obj0);
    arrObjLst_Sel.forEach((x) => arrvFieldTab_Sim.push(x));
    return arrvFieldTab_Sim;
  } catch (e: any) {
    console.error(e);
    alert(e);
    return new Array<clsvFieldTab_SimEN>();
  }
}

export async function vFieldTab_SimEx_GetArrvFieldTab_SimByPrjId(
  strPrjId: string,
): Promise<Array<clsvFieldTab_SimEN>> {
  // const strThisFuncName = 'vFieldTab_SimEx_BindDdl_FldIdByCmPrjIdInDivCache';

  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空！(In vFieldTab_SimEx_BindDdl_FldIdByCmPrjIdInDivCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format('缓存分类变量:[strPrjId]的长度:[{0}]不正确！', strPrjId.length);
    console.error(strMsg);
    throw strMsg;
  }

  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_FldIdByPrjIdInDivCache");
  const strWhere = `substring(${clsvFieldTab_SimEN.con_FldId},1,4) = '${strPrjId}'`;
  let arrObjLst_Sel: Array<clsvFieldTab_SimEN> = await vFieldTab_Sim_GetObjLstAsync(strWhere);
  if (arrObjLst_Sel == null) return new Array<clsvFieldTab_SimEN>();
  arrObjLst_Sel = arrObjLst_Sel.sort((x, y) => x.fldName.localeCompare(y.fldName));
  //arrObjLst_Sel = arrObjLst_Sel.filter(x => x.prjId == strPrjId);
  return arrObjLst_Sel;
}
