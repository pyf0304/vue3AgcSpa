/**
 * 类名:clsvPrjTab_SimWApi
 * 表名:vPrjTab_Sim(00050597)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/14 11:47:07
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 应用类型:Vue应用InCore-TS(30)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:字段、表维护(Table_Field)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * v工程表_Sim(vPrjTab_Sim)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2025年06月14日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import {
  CacheHelper,
  LocalStorage_GetKeyByPrefix,
  SessionStorage_GetKeyByPrefix,
} from '@/ts/PubFun/CacheHelper';
import { ConditionCollection } from '@/ts/PubFun/ConditionCollection';
import {
  BindDdl_ObjLstInDivObj_V,
  GetExceptionStr,
  myShowErrorMsg,
  ObjectAssign,
} from '@/ts/PubFun/clsCommFunc4Web';
import { clsvPrjTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvPrjTab_SimEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';

import { CMProjectEx_GetPrjIdByCmPrjIdCache } from '@/ts/L3ForWApiEx/CodeMan/clsCMProjectExWApi';

export const vPrjTab_Sim_Controller = 'vPrjTab_SimApi';
export const vPrjTab_Sim_ConstructorName = 'vPrjTab_Sim';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strTabId:关键字
 * @returns 对象
 **/
export async function vPrjTab_Sim_GetObjByTabIdAsync(
  strTabId: string,
): Promise<clsvPrjTab_SimEN | null> {
  const strThisFuncName = 'GetObjByTabIdAsync';

  if (IsNullOrEmpty(strTabId) == true) {
    const strMsg = Format('参数:[strTabId]不能为空!(In clsvPrjTab_SimWApi.GetObjByTabIdAsync)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strTabId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strTabId]的长度:[{0}]不正确!(clsvPrjTab_SimWApi.GetObjByTabIdAsync)',
      strTabId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByTabId';
  const strUrl = GetWebApiUrl(vPrjTab_Sim_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strTabId,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObj = data.returnObj;
      if (returnObj == null) {
        return null;
      }
      //console.log(returnObj);
      const objvPrjTab_Sim = vPrjTab_Sim_GetObjFromJsonObj(returnObj);
      return objvPrjTab_Sim;
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        vPrjTab_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vPrjTab_Sim_ConstructorName,
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
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strTabId:所给的关键字
 * @returns 对象
 */
export async function vPrjTab_Sim_GetObjByTabIdlocalStorage(strTabId: string) {
  const strThisFuncName = 'GetObjByTabIdlocalStorage';

  if (IsNullOrEmpty(strTabId) == true) {
    const strMsg = Format(
      '参数:[strTabId]不能为空!(In clsvPrjTab_SimWApi.GetObjByTabIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strTabId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strTabId]的长度:[{0}]不正确!(clsvPrjTab_SimWApi.GetObjByTabIdlocalStorage)',
      strTabId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsvPrjTab_SimEN._CurrTabName, strTabId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objvPrjTab_SimCache: clsvPrjTab_SimEN = JSON.parse(strTempObj);
    return objvPrjTab_SimCache;
  }
  try {
    const objvPrjTab_Sim = await vPrjTab_Sim_GetObjByTabIdAsync(strTabId);
    if (objvPrjTab_Sim != null) {
      localStorage.setItem(strKey, JSON.stringify(objvPrjTab_Sim));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objvPrjTab_Sim;
    }
    return objvPrjTab_Sim;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strTabId,
      vPrjTab_Sim_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return;
  }
}

/**
 * 根据关键字获取相关对象, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache)
 * @param strTabId:所给的关键字
 * @returns 对象
 */
export async function vPrjTab_Sim_GetObjByTabIdCache(
  strTabId: string,
  strPrjId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByTabIdCache';

  if (IsNullOrEmpty(strTabId) == true) {
    const strMsg = Format('参数:[strTabId]不能为空!(In clsvPrjTab_SimWApi.GetObjByTabIdCache)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strTabId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strTabId]的长度:[{0}]不正确!(clsvPrjTab_SimWApi.GetObjByTabIdCache)',
      strTabId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrvPrjTab_SimObjLstCache = await vPrjTab_Sim_GetObjLstCache(strPrjId);
  try {
    const arrvPrjTab_SimSel = arrvPrjTab_SimObjLstCache.filter((x) => x.tabId == strTabId);
    let objvPrjTab_Sim: clsvPrjTab_SimEN;
    if (arrvPrjTab_SimSel.length > 0) {
      objvPrjTab_Sim = arrvPrjTab_SimSel[0];
      return objvPrjTab_Sim;
    } else {
      if (bolTryAsyncOnce == true) {
        const objvPrjTab_SimConst = await vPrjTab_Sim_GetObjByTabIdAsync(strTabId);
        if (objvPrjTab_SimConst != null) {
          vPrjTab_Sim_ReFreshThisCache(strPrjId);
          return objvPrjTab_SimConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strTabId,
      vPrjTab_Sim_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function vPrjTab_Sim_SortFunDefa(a: clsvPrjTab_SimEN, b: clsvPrjTab_SimEN): number {
  return a.tabId.localeCompare(b.tabId);
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function vPrjTab_Sim_SortFunDefa2Fld(a: clsvPrjTab_SimEN, b: clsvPrjTab_SimEN): number {
  if (a.tabName == b.tabName) return a.sqlDsTypeId.localeCompare(b.sqlDsTypeId);
  else return a.tabName.localeCompare(b.tabName);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function vPrjTab_Sim_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsvPrjTab_SimEN.con_TabId:
        return (a: clsvPrjTab_SimEN, b: clsvPrjTab_SimEN) => {
          return a.tabId.localeCompare(b.tabId);
        };
      case clsvPrjTab_SimEN.con_TabName:
        return (a: clsvPrjTab_SimEN, b: clsvPrjTab_SimEN) => {
          return a.tabName.localeCompare(b.tabName);
        };
      case clsvPrjTab_SimEN.con_SqlDsTypeId:
        return (a: clsvPrjTab_SimEN, b: clsvPrjTab_SimEN) => {
          return a.sqlDsTypeId.localeCompare(b.sqlDsTypeId);
        };
      case clsvPrjTab_SimEN.con_FuncModuleAgcId:
        return (a: clsvPrjTab_SimEN, b: clsvPrjTab_SimEN) => {
          return a.funcModuleAgcId.localeCompare(b.funcModuleAgcId);
        };
      case clsvPrjTab_SimEN.con_TabTypeId:
        return (a: clsvPrjTab_SimEN, b: clsvPrjTab_SimEN) => {
          return a.tabTypeId.localeCompare(b.tabTypeId);
        };
      case clsvPrjTab_SimEN.con_CacheModeId:
        return (a: clsvPrjTab_SimEN, b: clsvPrjTab_SimEN) => {
          if (a.cacheModeId == null) return -1;
          if (b.cacheModeId == null) return 1;
          return a.cacheModeId.localeCompare(b.cacheModeId);
        };
      case clsvPrjTab_SimEN.con_TabStateId:
        return (a: clsvPrjTab_SimEN, b: clsvPrjTab_SimEN) => {
          return a.tabStateId.localeCompare(b.tabStateId);
        };
      case clsvPrjTab_SimEN.con_PrjId:
        return (a: clsvPrjTab_SimEN, b: clsvPrjTab_SimEN) => {
          return a.prjId.localeCompare(b.prjId);
        };
      case clsvPrjTab_SimEN.con_DataBaseName:
        return (a: clsvPrjTab_SimEN, b: clsvPrjTab_SimEN) => {
          if (a.dataBaseName == null) return -1;
          if (b.dataBaseName == null) return 1;
          return a.dataBaseName.localeCompare(b.dataBaseName);
        };
      case clsvPrjTab_SimEN.con_UpdDate:
        return (a: clsvPrjTab_SimEN, b: clsvPrjTab_SimEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsvPrjTab_SimEN.con_FldNum:
        return (a: clsvPrjTab_SimEN, b: clsvPrjTab_SimEN) => {
          return a.fldNum - b.fldNum;
        };
      case clsvPrjTab_SimEN.con_IsShare:
        return (a: clsvPrjTab_SimEN) => {
          if (a.isShare == true) return 1;
          else return -1;
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vPrjTab_Sim]中不存在!(in ${vPrjTab_Sim_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsvPrjTab_SimEN.con_TabId:
        return (a: clsvPrjTab_SimEN, b: clsvPrjTab_SimEN) => {
          return b.tabId.localeCompare(a.tabId);
        };
      case clsvPrjTab_SimEN.con_TabName:
        return (a: clsvPrjTab_SimEN, b: clsvPrjTab_SimEN) => {
          return b.tabName.localeCompare(a.tabName);
        };
      case clsvPrjTab_SimEN.con_SqlDsTypeId:
        return (a: clsvPrjTab_SimEN, b: clsvPrjTab_SimEN) => {
          return b.sqlDsTypeId.localeCompare(a.sqlDsTypeId);
        };
      case clsvPrjTab_SimEN.con_FuncModuleAgcId:
        return (a: clsvPrjTab_SimEN, b: clsvPrjTab_SimEN) => {
          return b.funcModuleAgcId.localeCompare(a.funcModuleAgcId);
        };
      case clsvPrjTab_SimEN.con_TabTypeId:
        return (a: clsvPrjTab_SimEN, b: clsvPrjTab_SimEN) => {
          return b.tabTypeId.localeCompare(a.tabTypeId);
        };
      case clsvPrjTab_SimEN.con_CacheModeId:
        return (a: clsvPrjTab_SimEN, b: clsvPrjTab_SimEN) => {
          if (b.cacheModeId == null) return -1;
          if (a.cacheModeId == null) return 1;
          return b.cacheModeId.localeCompare(a.cacheModeId);
        };
      case clsvPrjTab_SimEN.con_TabStateId:
        return (a: clsvPrjTab_SimEN, b: clsvPrjTab_SimEN) => {
          return b.tabStateId.localeCompare(a.tabStateId);
        };
      case clsvPrjTab_SimEN.con_PrjId:
        return (a: clsvPrjTab_SimEN, b: clsvPrjTab_SimEN) => {
          return b.prjId.localeCompare(a.prjId);
        };
      case clsvPrjTab_SimEN.con_DataBaseName:
        return (a: clsvPrjTab_SimEN, b: clsvPrjTab_SimEN) => {
          if (b.dataBaseName == null) return -1;
          if (a.dataBaseName == null) return 1;
          return b.dataBaseName.localeCompare(a.dataBaseName);
        };
      case clsvPrjTab_SimEN.con_UpdDate:
        return (a: clsvPrjTab_SimEN, b: clsvPrjTab_SimEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsvPrjTab_SimEN.con_FldNum:
        return (a: clsvPrjTab_SimEN, b: clsvPrjTab_SimEN) => {
          return b.fldNum - a.fldNum;
        };
      case clsvPrjTab_SimEN.con_IsShare:
        return (b: clsvPrjTab_SimEN) => {
          if (b.isShare == true) return 1;
          else return -1;
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vPrjTab_Sim]中不存在!(in ${vPrjTab_Sim_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strTabId:所给的关键字
 * @returns 对象
 */
export async function vPrjTab_Sim_GetNameByTabIdCache(strTabId: string, strPrjId: string) {
  if (IsNullOrEmpty(strTabId) == true) {
    const strMsg = Format('参数:[strTabId]不能为空!(In clsvPrjTab_SimWApi.GetNameByTabIdCache)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strTabId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strTabId]的长度:[{0}]不正确!(clsvPrjTab_SimWApi.GetNameByTabIdCache)',
      strTabId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrvPrjTab_SimObjLstCache = await vPrjTab_Sim_GetObjLstCache(strPrjId);
  if (arrvPrjTab_SimObjLstCache == null) return '';
  try {
    const arrvPrjTab_SimSel = arrvPrjTab_SimObjLstCache.filter((x) => x.tabId == strTabId);
    let objvPrjTab_Sim: clsvPrjTab_SimEN;
    if (arrvPrjTab_SimSel.length > 0) {
      objvPrjTab_Sim = arrvPrjTab_SimSel[0];
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
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function vPrjTab_Sim_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsvPrjTab_SimEN.con_TabId:
      return (obj: clsvPrjTab_SimEN) => {
        return obj.tabId === value;
      };
    case clsvPrjTab_SimEN.con_TabName:
      return (obj: clsvPrjTab_SimEN) => {
        return obj.tabName === value;
      };
    case clsvPrjTab_SimEN.con_SqlDsTypeId:
      return (obj: clsvPrjTab_SimEN) => {
        return obj.sqlDsTypeId === value;
      };
    case clsvPrjTab_SimEN.con_FuncModuleAgcId:
      return (obj: clsvPrjTab_SimEN) => {
        return obj.funcModuleAgcId === value;
      };
    case clsvPrjTab_SimEN.con_TabTypeId:
      return (obj: clsvPrjTab_SimEN) => {
        return obj.tabTypeId === value;
      };
    case clsvPrjTab_SimEN.con_CacheModeId:
      return (obj: clsvPrjTab_SimEN) => {
        return obj.cacheModeId === value;
      };
    case clsvPrjTab_SimEN.con_TabStateId:
      return (obj: clsvPrjTab_SimEN) => {
        return obj.tabStateId === value;
      };
    case clsvPrjTab_SimEN.con_PrjId:
      return (obj: clsvPrjTab_SimEN) => {
        return obj.prjId === value;
      };
    case clsvPrjTab_SimEN.con_DataBaseName:
      return (obj: clsvPrjTab_SimEN) => {
        return obj.dataBaseName === value;
      };
    case clsvPrjTab_SimEN.con_UpdDate:
      return (obj: clsvPrjTab_SimEN) => {
        return obj.updDate === value;
      };
    case clsvPrjTab_SimEN.con_FldNum:
      return (obj: clsvPrjTab_SimEN) => {
        return obj.fldNum === value;
      };
    case clsvPrjTab_SimEN.con_IsShare:
      return (obj: clsvPrjTab_SimEN) => {
        return obj.isShare === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[vPrjTab_Sim]中不存在!(in ${vPrjTab_Sim_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 @param strPrjId:缓存的分类字段
 * @returns 返回一个输出字段值
*/
export async function vPrjTab_Sim_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
  strPrjIdClassfy: string,
) {
  //const strThisFuncName = "func";

  if (IsNullOrEmpty(strPrjIdClassfy) == true) {
    const strMsg = Format('参数:[strPrjIdClassfy]不能为空!(In clsvPrjTab_SimWApi.func)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjIdClassfy.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjIdClassfy]的长度:[{0}]不正确!(clsvPrjTab_SimWApi.func)',
      strPrjIdClassfy.length,
    );
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
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsvPrjTab_SimEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strTabId = strInValue;
  if (IsNullOrEmpty(strTabId) == true) {
    return '';
  }
  const objvPrjTab_Sim = await vPrjTab_Sim_GetObjByTabIdCache(strTabId, strPrjIdClassfy);
  if (objvPrjTab_Sim == null) return '';
  if (objvPrjTab_Sim.GetFldValue(strOutFldName) == null) return '';
  return objvPrjTab_Sim.GetFldValue(strOutFldName).toString();
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 @param strPrjId:缓存的分类字段
 * @returns 返回一个关键字值列表
*/
export async function vPrjTab_Sim_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
  strPrjIdClassfy: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (IsNullOrEmpty(strPrjIdClassfy) == true) {
    const strMsg = Format('参数:[strPrjIdClassfy]不能为空!(In clsvPrjTab_SimWApi.funcKey)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjIdClassfy.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjIdClassfy]的长度:[{0}]不正确!(clsvPrjTab_SimWApi.funcKey)',
      strPrjIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName == clsvPrjTab_SimEN.con_TabId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrvPrjTab_Sim = await vPrjTab_Sim_GetObjLstCache(strPrjIdClassfy);
  if (arrvPrjTab_Sim == null) return [];
  let arrvPrjTab_SimSel = arrvPrjTab_Sim;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrvPrjTab_SimSel = arrvPrjTab_SimSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrvPrjTab_SimSel = arrvPrjTab_SimSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrvPrjTab_SimSel = arrvPrjTab_SimSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrvPrjTab_SimSel = arrvPrjTab_SimSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrvPrjTab_SimSel = arrvPrjTab_SimSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrvPrjTab_SimSel = arrvPrjTab_SimSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrvPrjTab_SimSel = arrvPrjTab_SimSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrvPrjTab_SimSel = arrvPrjTab_SimSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrvPrjTab_SimSel = arrvPrjTab_SimSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrvPrjTab_SimSel = arrvPrjTab_SimSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrvPrjTab_SimSel.length == 0) return [];
  return arrvPrjTab_SimSel.map((x) => x.tabId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function vPrjTab_Sim_GetFldValueAsync(
  strFldName: string,
  strWhereCond: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetFldValueAsync';
  const strAction = 'GetFldValue';
  const strUrl = GetWebApiUrl(vPrjTab_Sim_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strFldName,
      strWhereCond,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      const arrId = data.returnStrLst.split(',');
      return arrId;
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        vPrjTab_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vPrjTab_Sim_ConstructorName,
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
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function vPrjTab_Sim_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vPrjTab_Sim_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strWhereCond,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      return data.returnStr;
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        vPrjTab_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vPrjTab_Sim_ConstructorName,
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
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstId)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 */
export async function vPrjTab_Sim_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vPrjTab_Sim_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strWhereCond,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      return data.returnStr;
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        vPrjTab_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vPrjTab_Sim_ConstructorName,
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
 * 根据条件获取满足条件的第一条记录对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstObjAsync)
 * @param strWhereCond:条件
 * @returns 第一条记录对象
 **/
export async function vPrjTab_Sim_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsvPrjTab_SimEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(vPrjTab_Sim_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strWhereCond,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObj = data.returnObj;
      if (returnObj == null) {
        return null;
      }
      //console.log(returnObj);
      const objvPrjTab_Sim = vPrjTab_Sim_GetObjFromJsonObj(returnObj);
      return objvPrjTab_Sim;
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        vPrjTab_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vPrjTab_Sim_ConstructorName,
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
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_ClientCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vPrjTab_Sim_GetObjLstClientCache(strPrjId: string) {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsvPrjTab_SimEN.WhereFormat) == false) {
    strWhereCond = Format(clsvPrjTab_SimEN.WhereFormat, strPrjId);
  } else {
    strWhereCond = Format("PrjId='{0}'", strPrjId);
  }
  const strKey = Format('{0}_{1}', clsvPrjTab_SimEN._CurrTabName, strPrjId);
  if (IsNullOrEmpty(clsvPrjTab_SimEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvPrjTab_SimEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrvPrjTab_SimExObjLstCache: Array<clsvPrjTab_SimEN> = CacheHelper.Get(strKey);
    const arrvPrjTab_SimObjLstT = vPrjTab_Sim_GetObjLstByJSONObjLst(arrvPrjTab_SimExObjLstCache);
    return arrvPrjTab_SimObjLstT;
  }
  try {
    const arrvPrjTab_SimExObjLst = await vPrjTab_Sim_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrvPrjTab_SimExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvPrjTab_SimExObjLst.length,
    );
    console.log(strInfo);
    return arrvPrjTab_SimExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vPrjTab_Sim_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vPrjTab_Sim_GetObjLstlocalStorage(strPrjId: string) {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsvPrjTab_SimEN.WhereFormat) == false) {
    strWhereCond = Format(clsvPrjTab_SimEN.WhereFormat, strPrjId);
  } else {
    strWhereCond = Format("{0}='{1}'", clsvPrjTab_SimEN.con_PrjId, strPrjId);
  }
  const strKey = Format('{0}_{1}', clsvPrjTab_SimEN._CurrTabName, strPrjId);
  if (IsNullOrEmpty(clsvPrjTab_SimEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvPrjTab_SimEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvPrjTab_SimExObjLstCache: Array<clsvPrjTab_SimEN> = JSON.parse(strTempObjLst);
    const arrvPrjTab_SimObjLstT = vPrjTab_Sim_GetObjLstByJSONObjLst(arrvPrjTab_SimExObjLstCache);
    return arrvPrjTab_SimObjLstT;
  }
  try {
    const arrvPrjTab_SimExObjLst = await vPrjTab_Sim_GetObjLstAsync(strWhereCond);
    const strPrefix = Format('{0}_', clsvPrjTab_SimEN._CurrTabName);
    const arrCacheKeyLst = LocalStorage_GetKeyByPrefix(strPrefix);
    arrCacheKeyLst.forEach((x) => localStorage.removeItem(x));
    localStorage.setItem(strKey, JSON.stringify(arrvPrjTab_SimExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvPrjTab_SimExObjLst.length,
    );
    console.log(strInfo);
    return arrvPrjTab_SimExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vPrjTab_Sim_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.如果本地不存在就返回null,不会去访问WebApi获取数据。
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vPrjTab_Sim_GetObjLstlocalStoragePureCache(strPrjId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsvPrjTab_SimEN._CurrTabName, strPrjId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvPrjTab_SimObjLstCache: Array<clsvPrjTab_SimEN> = JSON.parse(strTempObjLst);
    return arrvPrjTab_SimObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function vPrjTab_Sim_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsvPrjTab_SimEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(vPrjTab_Sim_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strWhereCond,
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
          vPrjTab_Sim_ConstructorName,
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        vPrjTab_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vPrjTab_Sim_ConstructorName,
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
 * 获取本地sessionStorage缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vPrjTab_Sim_GetObjLstsessionStorage(strPrjId: string) {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsvPrjTab_SimEN.WhereFormat) == false) {
    strWhereCond = Format(clsvPrjTab_SimEN.WhereFormat, strPrjId);
  } else {
    strWhereCond = Format("{0}='{1}'", clsvPrjTab_SimEN.con_PrjId, strPrjId);
  }
  const strKey = Format('{0}_{1}', clsvPrjTab_SimEN._CurrTabName, strPrjId);
  if (IsNullOrEmpty(clsvPrjTab_SimEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvPrjTab_SimEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvPrjTab_SimExObjLstCache: Array<clsvPrjTab_SimEN> = JSON.parse(strTempObjLst);
    const arrvPrjTab_SimObjLstT = vPrjTab_Sim_GetObjLstByJSONObjLst(arrvPrjTab_SimExObjLstCache);
    return arrvPrjTab_SimObjLstT;
  }
  try {
    const arrvPrjTab_SimExObjLst = await vPrjTab_Sim_GetObjLstAsync(strWhereCond);
    const strPrefix = Format('{0}_', clsvPrjTab_SimEN._CurrTabName);
    const arrCacheKeyLst = SessionStorage_GetKeyByPrefix(strPrefix);
    arrCacheKeyLst.forEach((x) => sessionStorage.removeItem(x));
    sessionStorage.setItem(strKey, JSON.stringify(arrvPrjTab_SimExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvPrjTab_SimExObjLst.length,
    );
    console.log(strInfo);
    return arrvPrjTab_SimExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vPrjTab_Sim_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vPrjTab_Sim_GetObjLstsessionStoragePureCache(strPrjId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsvPrjTab_SimEN._CurrTabName, strPrjId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvPrjTab_SimObjLstCache: Array<clsvPrjTab_SimEN> = JSON.parse(strTempObjLst);
    return arrvPrjTab_SimObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vPrjTab_Sim_GetObjLstCache(
  strPrjId: string,
): Promise<Array<clsvPrjTab_SimEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空！(In clsvPrjTab_SimWApi.vPrjTab_Sim_GetObjLstCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确！(clsvPrjTab_SimWApi.vPrjTab_Sim_GetObjLstCache)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  let arrvPrjTab_SimObjLstCache;
  switch (clsvPrjTab_SimEN.CacheModeId) {
    case '04': //sessionStorage
      arrvPrjTab_SimObjLstCache = await vPrjTab_Sim_GetObjLstsessionStorage(strPrjId);
      break;
    case '03': //localStorage
      arrvPrjTab_SimObjLstCache = await vPrjTab_Sim_GetObjLstlocalStorage(strPrjId);
      break;
    case '02': //ClientCache
      arrvPrjTab_SimObjLstCache = await vPrjTab_Sim_GetObjLstClientCache(strPrjId);
      break;
    default:
      arrvPrjTab_SimObjLstCache = await vPrjTab_Sim_GetObjLstClientCache(strPrjId);
      break;
  }
  return arrvPrjTab_SimObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vPrjTab_Sim_GetObjLstPureCache(strPrjId: string) {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrvPrjTab_SimObjLstCache;
  switch (clsvPrjTab_SimEN.CacheModeId) {
    case '04': //sessionStorage
      arrvPrjTab_SimObjLstCache = await vPrjTab_Sim_GetObjLstsessionStoragePureCache(strPrjId);
      break;
    case '03': //localStorage
      arrvPrjTab_SimObjLstCache = await vPrjTab_Sim_GetObjLstlocalStoragePureCache(strPrjId);
      break;
    case '02': //ClientCache
      arrvPrjTab_SimObjLstCache = null;
      break;
    default:
      arrvPrjTab_SimObjLstCache = null;
      break;
  }
  return arrvPrjTab_SimObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrTabIdCond:条件对象
 * @returns 对象列表子集
 */
export async function vPrjTab_Sim_GetSubObjLstCache(
  objvPrjTab_SimCond: ConditionCollection,
  strPrjId: string,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrvPrjTab_SimObjLstCache = await vPrjTab_Sim_GetObjLstCache(strPrjId);
  let arrvPrjTab_SimSel = arrvPrjTab_SimObjLstCache;
  if (objvPrjTab_SimCond.GetConditions().length == 0) return arrvPrjTab_SimSel;
  try {
    //console.log(sstrKeys);
    for (const objCondition of objvPrjTab_SimCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrvPrjTab_SimSel = arrvPrjTab_SimSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvPrjTab_SimSel = arrvPrjTab_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvPrjTab_SimSel = arrvPrjTab_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvPrjTab_SimSel = arrvPrjTab_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvPrjTab_SimSel = arrvPrjTab_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvPrjTab_SimSel = arrvPrjTab_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvPrjTab_SimSel = arrvPrjTab_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvPrjTab_SimSel = arrvPrjTab_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvPrjTab_SimSel = arrvPrjTab_SimSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvPrjTab_SimSel = arrvPrjTab_SimSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrvPrjTab_SimSel = arrvPrjTab_SimSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrvPrjTab_SimSel = arrvPrjTab_SimSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrvPrjTab_SimSel = arrvPrjTab_SimSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrvPrjTab_SimSel = arrvPrjTab_SimSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrvPrjTab_SimSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvPrjTab_SimCond),
      vPrjTab_Sim_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvPrjTab_SimEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrTabId:关键字列表
 * @returns 对象列表
 **/
export async function vPrjTab_Sim_GetObjLstByTabIdLstAsync(
  arrTabId: Array<string>,
): Promise<Array<clsvPrjTab_SimEN>> {
  const strThisFuncName = 'GetObjLstByTabIdLstAsync';
  const strAction = 'GetObjLstByTabIdLst';
  const strUrl = GetWebApiUrl(vPrjTab_Sim_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrTabId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          vPrjTab_Sim_ConstructorName,
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        vPrjTab_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vPrjTab_Sim_ConstructorName,
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
 * 根据关键字列表获取相关对象列表, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)
 * @param arrstrTabIdLst:关键字列表
 * @returns 对象列表
 */
export async function vPrjTab_Sim_GetObjLstByTabIdLstCache(
  arrTabIdLst: Array<string>,
  strPrjId: string,
) {
  const strThisFuncName = 'GetObjLstByTabIdLstCache';
  try {
    const arrvPrjTab_SimObjLstCache = await vPrjTab_Sim_GetObjLstCache(strPrjId);
    const arrvPrjTab_SimSel = arrvPrjTab_SimObjLstCache.filter(
      (x) => arrTabIdLst.indexOf(x.tabId) > -1,
    );
    return arrvPrjTab_SimSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrTabIdLst.join(','),
      vPrjTab_Sim_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
}

/**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export async function vPrjTab_Sim_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsvPrjTab_SimEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(vPrjTab_Sim_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objTopPara, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          vPrjTab_Sim_ConstructorName,
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        vPrjTab_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vPrjTab_Sim_ConstructorName,
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
 * 根据范围条件获取相应的记录对象列表,获取某范围的记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByRangeAsync)
 * @param objRangePara:根据范围获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function vPrjTab_Sim_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsvPrjTab_SimEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(vPrjTab_Sim_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objRangePara, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          vPrjTab_Sim_ConstructorName,
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        vPrjTab_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vPrjTab_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerCache)
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjExLstByPagerCache)
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CopyToEx)
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMapByFldName)
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByExKey)
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistRecordCache)
 * @param objstrTabIdCond:条件对象
 * @returns 对象列表子集
 */
export async function vPrjTab_Sim_IsExistRecordCache(
  objvPrjTab_SimCond: ConditionCollection,
  strPrjId: string,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrvPrjTab_SimObjLstCache = await vPrjTab_Sim_GetObjLstCache(strPrjId);
  if (arrvPrjTab_SimObjLstCache == null) return false;
  let arrvPrjTab_SimSel = arrvPrjTab_SimObjLstCache;
  if (objvPrjTab_SimCond.GetConditions().length == 0)
    return arrvPrjTab_SimSel.length > 0 ? true : false;
  try {
    for (const objCondition of objvPrjTab_SimCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvPrjTab_SimSel = arrvPrjTab_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvPrjTab_SimSel = arrvPrjTab_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvPrjTab_SimSel = arrvPrjTab_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvPrjTab_SimSel = arrvPrjTab_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvPrjTab_SimSel = arrvPrjTab_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvPrjTab_SimSel = arrvPrjTab_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvPrjTab_SimSel = arrvPrjTab_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvPrjTab_SimSel = arrvPrjTab_SimSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvPrjTab_SimSel = arrvPrjTab_SimSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrvPrjTab_SimSel = arrvPrjTab_SimSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrvPrjTab_SimSel = arrvPrjTab_SimSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrvPrjTab_SimSel = arrvPrjTab_SimSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrvPrjTab_SimSel = arrvPrjTab_SimSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrvPrjTab_SimSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objvPrjTab_SimCond),
      vPrjTab_Sim_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return false;
}

/**
 * 根据条件获取是否存在相应的记录？
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistRecordAsync)
 * @param strWhereCond:条件
 * @returns 是否存在记录？
 **/
export async function vPrjTab_Sim_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(vPrjTab_Sim_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strWhereCond,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      return data.returnBool;
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        vPrjTab_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vPrjTab_Sim_ConstructorName,
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
 * 根据关键字判断是否存在记录, 从本地缓存中判断.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistCache)
 * @param strTabId:所给的关键字
 * @returns 对象
 */
export async function vPrjTab_Sim_IsExistCache(strTabId: string, strPrjId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrvPrjTab_SimObjLstCache = await vPrjTab_Sim_GetObjLstCache(strPrjId);
  if (arrvPrjTab_SimObjLstCache == null) return false;
  try {
    const arrvPrjTab_SimSel = arrvPrjTab_SimObjLstCache.filter((x) => x.tabId == strTabId);
    if (arrvPrjTab_SimSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strTabId,
      vPrjTab_Sim_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
  return false;
}

/**
 * 根据关键字判断是否存在记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistAsync)
 * @param strTabId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function vPrjTab_Sim_IsExistAsync(strTabId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(vPrjTab_Sim_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strTabId,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      return data.returnBool;
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        vPrjTab_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vPrjTab_Sim_ConstructorName,
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
 * 获取某一条件的记录数
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetRecCountByCondAsync)
 * @param strWhereCond:条件
 * @returns 获取某一条件的记录数
 **/
export async function vPrjTab_Sim_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(vPrjTab_Sim_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strWhereCond,
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        vPrjTab_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vPrjTab_Sim_ConstructorName,
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
 * 根据条件对象, 从缓存的对象列表中获取记录数.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetRecCountByCondCache)
 * @param objvPrjTab_SimCond:条件对象
 * @returns 对象列表记录数
 */
export async function vPrjTab_Sim_GetRecCountByCondCache(
  objvPrjTab_SimCond: ConditionCollection,
  strPrjId: string,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrvPrjTab_SimObjLstCache = await vPrjTab_Sim_GetObjLstCache(strPrjId);
  if (arrvPrjTab_SimObjLstCache == null) return 0;
  let arrvPrjTab_SimSel = arrvPrjTab_SimObjLstCache;
  if (objvPrjTab_SimCond.GetConditions().length == 0) return arrvPrjTab_SimSel.length;
  try {
    for (const objCondition of objvPrjTab_SimCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrvPrjTab_SimSel = arrvPrjTab_SimSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvPrjTab_SimSel = arrvPrjTab_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvPrjTab_SimSel = arrvPrjTab_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvPrjTab_SimSel = arrvPrjTab_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvPrjTab_SimSel = arrvPrjTab_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvPrjTab_SimSel = arrvPrjTab_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvPrjTab_SimSel = arrvPrjTab_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvPrjTab_SimSel = arrvPrjTab_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrvPrjTab_SimSel = arrvPrjTab_SimSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvPrjTab_SimSel = arrvPrjTab_SimSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvPrjTab_SimSel = arrvPrjTab_SimSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrvPrjTab_SimSel = arrvPrjTab_SimSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrvPrjTab_SimSel = arrvPrjTab_SimSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrvPrjTab_SimSel = arrvPrjTab_SimSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrvPrjTab_SimSel = arrvPrjTab_SimSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrvPrjTab_SimSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvPrjTab_SimCond),
      vPrjTab_Sim_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return 0;
}

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 */
export function vPrjTab_Sim_GetWebApiUrl(strController: string, strAction: string): string {
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
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export function vPrjTab_Sim_ReFreshThisCache(strPrjId: string): void {
  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空!(In clsvPrjTab_SimWApi.vPrjTab_Sim_ReFreshThisCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确!(clsvPrjTab_SimWApi.vPrjTab_Sim_ReFreshThisCache)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = Format('{0}_{1}', clsvPrjTab_SimEN._CurrTabName, strPrjId);
    switch (clsvPrjTab_SimEN.CacheModeId) {
      case '04': //sessionStorage
        sessionStorage.removeItem(strKey);
        break;
      case '03': //localStorage
        localStorage.removeItem(strKey);
        break;
      case '02': //ClientCache
        CacheHelper.Remove(strKey);
        break;
      default:
        CacheHelper.Remove(strKey);
        break;
    }
    clsvPrjTab_SimEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
    const strMsg = Format('刷新缓存成功!');
    console.trace(strMsg);
  } else {
    const strMsg = Format('刷新缓存已经关闭。');
    console.trace(strMsg);
  }
}
/**
 * 获取最新的缓存刷新时间
 * @returns 最新的缓存刷新时间，字符串型
 **/
export function vPrjTab_Sim_GetLastRefreshTime(): string {
  if (clsvPrjTab_SimEN._RefreshTimeLst.length == 0) return '';
  return clsvPrjTab_SimEN._RefreshTimeLst[clsvPrjTab_SimEN._RefreshTimeLst.length - 1];
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

 * @param strCmPrjId:
 * @param strPrjId:
*/
export async function vPrjTab_Sim_BindDdl_TabIdByCmPrjIdInDivCache(
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
  const strPrjId = await CMProjectEx_GetPrjIdByCmPrjIdCache(strCmPrjId);
  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空！(In clsvPrjTab_SimWApi.BindDdl_TabIdByCmPrjIdInDiv)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确！(clsvPrjTab_SimWApi.BindDdl_TabIdByCmPrjIdInDiv)',
      strPrjId.length,
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
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_TabIdByCmPrjIdInDivCache");
  let arrObjLstSel = await vPrjTab_Sim_GetObjLstCache(strPrjId);
  if (arrObjLstSel == null) return;
  arrObjLstSel = arrObjLstSel.sort((x, y) => x.tabName.localeCompare(y.tabName));
  BindDdl_ObjLstInDivObj_V(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsvPrjTab_SimEN.con_TabId,
    clsvPrjTab_SimEN.con_TabName,
    'v工程表_Sim...',
  );
}
//(IsNeedGC == false)该表下拉框功能不需要生成;

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

 * @param strCmPrjId:
 * @param strPrjId:
*/
export async function vPrjTab_Sim_GetArrvPrjTab_SimByCmPrjId(strCmPrjId: string) {
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
  const strPrjId = await CMProjectEx_GetPrjIdByCmPrjIdCache(strCmPrjId);
  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空！(In clsvPrjTab_SimWApi.BindDdl_TabIdByCmPrjIdInDiv)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确！(clsvPrjTab_SimWApi.BindDdl_TabIdByCmPrjIdInDiv)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_TabIdByCmPrjIdInDivCache");
  const arrvPrjTab_Sim = new Array<clsvPrjTab_SimEN>();
  let arrObjLstSel = await vPrjTab_Sim_GetObjLstCache(strPrjId);
  if (arrObjLstSel == null) return null;
  arrObjLstSel = arrObjLstSel.sort((x, y) => {
    return x.tabName.localeCompare(y.tabName);
  });
  const obj0 = new clsvPrjTab_SimEN();
  obj0.tabId = '0';
  obj0.tabName = '选v工程表_Sim...';
  arrvPrjTab_Sim.push(obj0);
  arrObjLstSel.forEach((x) => arrvPrjTab_Sim.push(x));
  return arrvPrjTab_Sim;
}
//(IsNeedGC == false)该表下拉框功能不需要生成;

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vPrjTab_Sim_GetJSONStrByObj(pobjvPrjTab_SimEN: clsvPrjTab_SimEN): string {
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjvPrjTab_SimEN);
  } catch (objException) {
    const strEx = GetExceptionStr(objException);
    myShowErrorMsg(strEx);
  }
  if (strJson == undefined) return '';
  else return strJson;
}

/**
 * 把一个JSON串转化为一个对象列表
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
 */
export function vPrjTab_Sim_GetObjLstByJSONStr(strJSON: string): Array<clsvPrjTab_SimEN> {
  let arrvPrjTab_SimObjLst = new Array<clsvPrjTab_SimEN>();
  if (strJSON === '') {
    return arrvPrjTab_SimObjLst;
  }
  try {
    arrvPrjTab_SimObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrvPrjTab_SimObjLst;
  }
  return arrvPrjTab_SimObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvPrjTab_SimObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function vPrjTab_Sim_GetObjLstByJSONObjLst(
  arrvPrjTab_SimObjLstS: Array<clsvPrjTab_SimEN>,
): Array<clsvPrjTab_SimEN> {
  const arrvPrjTab_SimObjLst = new Array<clsvPrjTab_SimEN>();
  for (const objInFor of arrvPrjTab_SimObjLstS) {
    const obj1 = vPrjTab_Sim_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrvPrjTab_SimObjLst.push(obj1);
  }
  return arrvPrjTab_SimObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vPrjTab_Sim_GetObjByJSONStr(strJSON: string): clsvPrjTab_SimEN {
  let pobjvPrjTab_SimEN = new clsvPrjTab_SimEN();
  if (strJSON === '') {
    return pobjvPrjTab_SimEN;
  }
  try {
    pobjvPrjTab_SimEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjvPrjTab_SimEN;
  }
  return pobjvPrjTab_SimEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function vPrjTab_Sim_GetCombineCondition(objvPrjTab_SimCond: clsvPrjTab_SimEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objvPrjTab_SimCond.dicFldComparisonOp,
      clsvPrjTab_SimEN.con_TabId,
    ) == true
  ) {
    const strComparisonOpTabId: string =
      objvPrjTab_SimCond.dicFldComparisonOp[clsvPrjTab_SimEN.con_TabId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvPrjTab_SimEN.con_TabId,
      objvPrjTab_SimCond.tabId,
      strComparisonOpTabId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvPrjTab_SimCond.dicFldComparisonOp,
      clsvPrjTab_SimEN.con_TabName,
    ) == true
  ) {
    const strComparisonOpTabName: string =
      objvPrjTab_SimCond.dicFldComparisonOp[clsvPrjTab_SimEN.con_TabName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvPrjTab_SimEN.con_TabName,
      objvPrjTab_SimCond.tabName,
      strComparisonOpTabName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvPrjTab_SimCond.dicFldComparisonOp,
      clsvPrjTab_SimEN.con_SqlDsTypeId,
    ) == true
  ) {
    const strComparisonOpSqlDsTypeId: string =
      objvPrjTab_SimCond.dicFldComparisonOp[clsvPrjTab_SimEN.con_SqlDsTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvPrjTab_SimEN.con_SqlDsTypeId,
      objvPrjTab_SimCond.sqlDsTypeId,
      strComparisonOpSqlDsTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvPrjTab_SimCond.dicFldComparisonOp,
      clsvPrjTab_SimEN.con_FuncModuleAgcId,
    ) == true
  ) {
    const strComparisonOpFuncModuleAgcId: string =
      objvPrjTab_SimCond.dicFldComparisonOp[clsvPrjTab_SimEN.con_FuncModuleAgcId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvPrjTab_SimEN.con_FuncModuleAgcId,
      objvPrjTab_SimCond.funcModuleAgcId,
      strComparisonOpFuncModuleAgcId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvPrjTab_SimCond.dicFldComparisonOp,
      clsvPrjTab_SimEN.con_TabTypeId,
    ) == true
  ) {
    const strComparisonOpTabTypeId: string =
      objvPrjTab_SimCond.dicFldComparisonOp[clsvPrjTab_SimEN.con_TabTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvPrjTab_SimEN.con_TabTypeId,
      objvPrjTab_SimCond.tabTypeId,
      strComparisonOpTabTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvPrjTab_SimCond.dicFldComparisonOp,
      clsvPrjTab_SimEN.con_CacheModeId,
    ) == true
  ) {
    const strComparisonOpCacheModeId: string =
      objvPrjTab_SimCond.dicFldComparisonOp[clsvPrjTab_SimEN.con_CacheModeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvPrjTab_SimEN.con_CacheModeId,
      objvPrjTab_SimCond.cacheModeId,
      strComparisonOpCacheModeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvPrjTab_SimCond.dicFldComparisonOp,
      clsvPrjTab_SimEN.con_TabStateId,
    ) == true
  ) {
    const strComparisonOpTabStateId: string =
      objvPrjTab_SimCond.dicFldComparisonOp[clsvPrjTab_SimEN.con_TabStateId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvPrjTab_SimEN.con_TabStateId,
      objvPrjTab_SimCond.tabStateId,
      strComparisonOpTabStateId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvPrjTab_SimCond.dicFldComparisonOp,
      clsvPrjTab_SimEN.con_PrjId,
    ) == true
  ) {
    const strComparisonOpPrjId: string =
      objvPrjTab_SimCond.dicFldComparisonOp[clsvPrjTab_SimEN.con_PrjId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvPrjTab_SimEN.con_PrjId,
      objvPrjTab_SimCond.prjId,
      strComparisonOpPrjId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvPrjTab_SimCond.dicFldComparisonOp,
      clsvPrjTab_SimEN.con_DataBaseName,
    ) == true
  ) {
    const strComparisonOpDataBaseName: string =
      objvPrjTab_SimCond.dicFldComparisonOp[clsvPrjTab_SimEN.con_DataBaseName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvPrjTab_SimEN.con_DataBaseName,
      objvPrjTab_SimCond.dataBaseName,
      strComparisonOpDataBaseName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvPrjTab_SimCond.dicFldComparisonOp,
      clsvPrjTab_SimEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objvPrjTab_SimCond.dicFldComparisonOp[clsvPrjTab_SimEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvPrjTab_SimEN.con_UpdDate,
      objvPrjTab_SimCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvPrjTab_SimCond.dicFldComparisonOp,
      clsvPrjTab_SimEN.con_FldNum,
    ) == true
  ) {
    const strComparisonOpFldNum: string =
      objvPrjTab_SimCond.dicFldComparisonOp[clsvPrjTab_SimEN.con_FldNum];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvPrjTab_SimEN.con_FldNum,
      objvPrjTab_SimCond.fldNum,
      strComparisonOpFldNum,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvPrjTab_SimCond.dicFldComparisonOp,
      clsvPrjTab_SimEN.con_IsShare,
    ) == true
  ) {
    if (objvPrjTab_SimCond.isShare == true) {
      strWhereCond += Format(" And {0} = '1'", clsvPrjTab_SimEN.con_IsShare);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsvPrjTab_SimEN.con_IsShare);
    }
  }
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvPrjTab_SimENS:源对象
 * @param objvPrjTab_SimENT:目标对象
 */
export function vPrjTab_Sim_GetObjFromJsonObj(
  objvPrjTab_SimENS: clsvPrjTab_SimEN,
): clsvPrjTab_SimEN {
  const objvPrjTab_SimENT: clsvPrjTab_SimEN = new clsvPrjTab_SimEN();
  ObjectAssign(objvPrjTab_SimENT, objvPrjTab_SimENS);
  return objvPrjTab_SimENT;
}
