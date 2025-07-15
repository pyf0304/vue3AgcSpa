/**
 * 类名:clsvPrjTab_SimV2WApi
 * 表名:vPrjTab_SimV2(00050610)
 * 版本:2024.01.20.1(服务器:WIN-SRV103-116)
 * 日期:2024/01/23 16:51:03
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:字段、表维护(Table_Field)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * v工程表_SimV2(vPrjTab_SimV2)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2024年01月23日.
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
import {
  GetObjKeys,
  GetExceptionStr,
  myShowErrorMsg,
  ObjectAssign,
} from '@/ts/PubFun/clsCommFunc4Web';
import { clsvPrjTab_SimV2EN } from '@/ts/L0Entity/Table_Field/clsvPrjTab_SimV2EN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const vPrjTab_SimV2_Controller = 'vPrjTab_SimV2Api';
export const vPrjTab_SimV2_ConstructorName = 'vPrjTab_SimV2';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strTabId:关键字
 * @returns 对象
 **/
export async function vPrjTab_SimV2_GetObjByTabIdAsync(
  strTabId: string,
): Promise<clsvPrjTab_SimV2EN | null> {
  const strThisFuncName = 'GetObjByTabIdAsync';

  if (IsNullOrEmpty(strTabId) == true) {
    const strMsg = Format('参数:[strTabId]不能为空!(In clsvPrjTab_SimV2WApi.GetObjByTabIdAsync)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strTabId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strTabId]的长度:[{0}]不正确!(clsvPrjTab_SimV2WApi.GetObjByTabIdAsync)',
      strTabId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByTabId';
  const strUrl = GetWebApiUrl(vPrjTab_SimV2_Controller, strAction);

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
      const objvPrjTab_SimV2 = vPrjTab_SimV2_GetObjFromJsonObj(returnObj);
      return objvPrjTab_SimV2;
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
        vPrjTab_SimV2_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vPrjTab_SimV2_ConstructorName,
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
export async function vPrjTab_SimV2_GetObjByTabIdCache(
  strTabId: string,
  strCmPrjId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByTabIdCache';

  if (IsNullOrEmpty(strTabId) == true) {
    const strMsg = Format('参数:[strTabId]不能为空!(In clsvPrjTab_SimV2WApi.GetObjByTabIdCache)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strTabId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strTabId]的长度:[{0}]不正确!(clsvPrjTab_SimV2WApi.GetObjByTabIdCache)',
      strTabId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrvPrjTab_SimV2ObjLstCache = await vPrjTab_SimV2_GetObjLstCache(strCmPrjId);
  try {
    const arrvPrjTab_SimV2Sel = arrvPrjTab_SimV2ObjLstCache.filter((x) => x.tabId == strTabId);
    let objvPrjTab_SimV2: clsvPrjTab_SimV2EN;
    if (arrvPrjTab_SimV2Sel.length > 0) {
      objvPrjTab_SimV2 = arrvPrjTab_SimV2Sel[0];
      return objvPrjTab_SimV2;
    } else {
      if (bolTryAsyncOnce == true) {
        const objvPrjTab_SimV2Const = await vPrjTab_SimV2_GetObjByTabIdAsync(strTabId);
        if (objvPrjTab_SimV2Const != null) {
          vPrjTab_SimV2_ReFreshThisCache(strCmPrjId);
          return objvPrjTab_SimV2Const;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strTabId,
      vPrjTab_SimV2_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strTabId:所给的关键字
 * @returns 对象
 */
export async function vPrjTab_SimV2_GetObjByTabIdlocalStorage(strTabId: string) {
  const strThisFuncName = 'GetObjByTabIdlocalStorage';

  if (IsNullOrEmpty(strTabId) == true) {
    const strMsg = Format(
      '参数:[strTabId]不能为空!(In clsvPrjTab_SimV2WApi.GetObjByTabIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strTabId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strTabId]的长度:[{0}]不正确!(clsvPrjTab_SimV2WApi.GetObjByTabIdlocalStorage)',
      strTabId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsvPrjTab_SimV2EN._CurrTabName, strTabId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objvPrjTab_SimV2Cache: clsvPrjTab_SimV2EN = JSON.parse(strTempObj);
    return objvPrjTab_SimV2Cache;
  }
  try {
    const objvPrjTab_SimV2 = await vPrjTab_SimV2_GetObjByTabIdAsync(strTabId);
    if (objvPrjTab_SimV2 != null) {
      localStorage.setItem(strKey, JSON.stringify(objvPrjTab_SimV2));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objvPrjTab_SimV2;
    }
    return objvPrjTab_SimV2;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strTabId,
      vPrjTab_SimV2_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return;
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strTabId:所给的关键字
 * @returns 对象
 */
export async function vPrjTab_SimV2_GetNameByTabIdCache(strTabId: string, strCmPrjId: string) {
  if (IsNullOrEmpty(strTabId) == true) {
    const strMsg = Format('参数:[strTabId]不能为空!(In clsvPrjTab_SimV2WApi.GetNameByTabIdCache)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strTabId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strTabId]的长度:[{0}]不正确!(clsvPrjTab_SimV2WApi.GetNameByTabIdCache)',
      strTabId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrvPrjTab_SimV2ObjLstCache = await vPrjTab_SimV2_GetObjLstCache(strCmPrjId);
  if (arrvPrjTab_SimV2ObjLstCache == null) return '';
  try {
    const arrvPrjTab_SimV2Sel = arrvPrjTab_SimV2ObjLstCache.filter((x) => x.tabId == strTabId);
    let objvPrjTab_SimV2: clsvPrjTab_SimV2EN;
    if (arrvPrjTab_SimV2Sel.length > 0) {
      objvPrjTab_SimV2 = arrvPrjTab_SimV2Sel[0];
      return objvPrjTab_SimV2.tabName;
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
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 @param strCmPrjId:缓存的分类字段
 * @returns 返回一个输出字段值
*/
export async function vPrjTab_SimV2_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
  strCmPrjIdClassfy: string,
) {
  //const strThisFuncName = "func";

  if (IsNullOrEmpty(strCmPrjIdClassfy) == true) {
    const strMsg = Format('参数:[strCmPrjIdClassfy]不能为空!(In clsvPrjTab_SimV2WApi.func)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strCmPrjIdClassfy.length != 6) {
    const strMsg = Format(
      '缓存分类变量:[strCmPrjIdClassfy]的长度:[{0}]不正确!(clsvPrjTab_SimV2WApi.func)',
      strCmPrjIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName != clsvPrjTab_SimV2EN.con_TabId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsvPrjTab_SimV2EN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsvPrjTab_SimV2EN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strTabId = strInValue;
  if (IsNullOrEmpty(strInValue) == true) {
    return '';
  }
  const objvPrjTab_SimV2 = await vPrjTab_SimV2_GetObjByTabIdCache(strTabId, strCmPrjIdClassfy);
  if (objvPrjTab_SimV2 == null) return '';
  if (objvPrjTab_SimV2.GetFldValue(strOutFldName) == null) return '';
  return objvPrjTab_SimV2.GetFldValue(strOutFldName).toString();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function vPrjTab_SimV2_SortFunDefa(a: clsvPrjTab_SimV2EN, b: clsvPrjTab_SimV2EN): number {
  return a.tabId.localeCompare(b.tabId);
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function vPrjTab_SimV2_SortFunDefa2Fld(
  a: clsvPrjTab_SimV2EN,
  b: clsvPrjTab_SimV2EN,
): number {
  if (a.tabName == b.tabName) return a.sqlDsTypeId.localeCompare(b.sqlDsTypeId);
  else return a.tabName.localeCompare(b.tabName);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function vPrjTab_SimV2_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsvPrjTab_SimV2EN.con_TabId:
        return (a: clsvPrjTab_SimV2EN, b: clsvPrjTab_SimV2EN) => {
          return a.tabId.localeCompare(b.tabId);
        };
      case clsvPrjTab_SimV2EN.con_TabName:
        return (a: clsvPrjTab_SimV2EN, b: clsvPrjTab_SimV2EN) => {
          return a.tabName.localeCompare(b.tabName);
        };
      case clsvPrjTab_SimV2EN.con_SqlDsTypeId:
        return (a: clsvPrjTab_SimV2EN, b: clsvPrjTab_SimV2EN) => {
          return a.sqlDsTypeId.localeCompare(b.sqlDsTypeId);
        };
      case clsvPrjTab_SimV2EN.con_FuncModuleAgcId:
        return (a: clsvPrjTab_SimV2EN, b: clsvPrjTab_SimV2EN) => {
          return a.funcModuleAgcId.localeCompare(b.funcModuleAgcId);
        };
      case clsvPrjTab_SimV2EN.con_TabTypeId:
        return (a: clsvPrjTab_SimV2EN, b: clsvPrjTab_SimV2EN) => {
          return a.tabTypeId.localeCompare(b.tabTypeId);
        };
      case clsvPrjTab_SimV2EN.con_CacheModeId:
        return (a: clsvPrjTab_SimV2EN, b: clsvPrjTab_SimV2EN) => {
          if (a.cacheModeId == null) return -1;
          if (b.cacheModeId == null) return 1;
          return a.cacheModeId.localeCompare(b.cacheModeId);
        };
      case clsvPrjTab_SimV2EN.con_TabStateId:
        return (a: clsvPrjTab_SimV2EN, b: clsvPrjTab_SimV2EN) => {
          return a.tabStateId.localeCompare(b.tabStateId);
        };
      case clsvPrjTab_SimV2EN.con_CmPrjId:
        return (a: clsvPrjTab_SimV2EN, b: clsvPrjTab_SimV2EN) => {
          return a.cmPrjId.localeCompare(b.cmPrjId);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vPrjTab_SimV2]中不存在!(in ${vPrjTab_SimV2_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsvPrjTab_SimV2EN.con_TabId:
        return (a: clsvPrjTab_SimV2EN, b: clsvPrjTab_SimV2EN) => {
          return b.tabId.localeCompare(a.tabId);
        };
      case clsvPrjTab_SimV2EN.con_TabName:
        return (a: clsvPrjTab_SimV2EN, b: clsvPrjTab_SimV2EN) => {
          return b.tabName.localeCompare(a.tabName);
        };
      case clsvPrjTab_SimV2EN.con_SqlDsTypeId:
        return (a: clsvPrjTab_SimV2EN, b: clsvPrjTab_SimV2EN) => {
          return b.sqlDsTypeId.localeCompare(a.sqlDsTypeId);
        };
      case clsvPrjTab_SimV2EN.con_FuncModuleAgcId:
        return (a: clsvPrjTab_SimV2EN, b: clsvPrjTab_SimV2EN) => {
          return b.funcModuleAgcId.localeCompare(a.funcModuleAgcId);
        };
      case clsvPrjTab_SimV2EN.con_TabTypeId:
        return (a: clsvPrjTab_SimV2EN, b: clsvPrjTab_SimV2EN) => {
          return b.tabTypeId.localeCompare(a.tabTypeId);
        };
      case clsvPrjTab_SimV2EN.con_CacheModeId:
        return (a: clsvPrjTab_SimV2EN, b: clsvPrjTab_SimV2EN) => {
          if (b.cacheModeId == null) return -1;
          if (a.cacheModeId == null) return 1;
          return b.cacheModeId.localeCompare(a.cacheModeId);
        };
      case clsvPrjTab_SimV2EN.con_TabStateId:
        return (a: clsvPrjTab_SimV2EN, b: clsvPrjTab_SimV2EN) => {
          return b.tabStateId.localeCompare(a.tabStateId);
        };
      case clsvPrjTab_SimV2EN.con_CmPrjId:
        return (a: clsvPrjTab_SimV2EN, b: clsvPrjTab_SimV2EN) => {
          return b.cmPrjId.localeCompare(a.cmPrjId);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vPrjTab_SimV2]中不存在!(in ${vPrjTab_SimV2_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function vPrjTab_SimV2_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsvPrjTab_SimV2EN.con_TabId:
      return (obj: clsvPrjTab_SimV2EN) => {
        return obj.tabId === value;
      };
    case clsvPrjTab_SimV2EN.con_TabName:
      return (obj: clsvPrjTab_SimV2EN) => {
        return obj.tabName === value;
      };
    case clsvPrjTab_SimV2EN.con_SqlDsTypeId:
      return (obj: clsvPrjTab_SimV2EN) => {
        return obj.sqlDsTypeId === value;
      };
    case clsvPrjTab_SimV2EN.con_FuncModuleAgcId:
      return (obj: clsvPrjTab_SimV2EN) => {
        return obj.funcModuleAgcId === value;
      };
    case clsvPrjTab_SimV2EN.con_TabTypeId:
      return (obj: clsvPrjTab_SimV2EN) => {
        return obj.tabTypeId === value;
      };
    case clsvPrjTab_SimV2EN.con_CacheModeId:
      return (obj: clsvPrjTab_SimV2EN) => {
        return obj.cacheModeId === value;
      };
    case clsvPrjTab_SimV2EN.con_TabStateId:
      return (obj: clsvPrjTab_SimV2EN) => {
        return obj.tabStateId === value;
      };
    case clsvPrjTab_SimV2EN.con_CmPrjId:
      return (obj: clsvPrjTab_SimV2EN) => {
        return obj.cmPrjId === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[vPrjTab_SimV2]中不存在!(in ${vPrjTab_SimV2_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 @param strCmPrjId:缓存的分类字段
 * @returns 返回一个关键字值列表
*/
export async function vPrjTab_SimV2_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
  strCmPrjIdClassfy: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (IsNullOrEmpty(strCmPrjIdClassfy) == true) {
    const strMsg = Format('参数:[strCmPrjIdClassfy]不能为空!(In clsvPrjTab_SimV2WApi.funcKey)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strCmPrjIdClassfy.length != 6) {
    const strMsg = Format(
      '缓存分类变量:[strCmPrjIdClassfy]的长度:[{0}]不正确!(clsvPrjTab_SimV2WApi.funcKey)',
      strCmPrjIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName == clsvPrjTab_SimV2EN.con_TabId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrvPrjTab_SimV2 = await vPrjTab_SimV2_GetObjLstCache(strCmPrjIdClassfy);
  if (arrvPrjTab_SimV2 == null) return [];
  let arrvPrjTab_SimV2Sel = arrvPrjTab_SimV2;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrvPrjTab_SimV2Sel = arrvPrjTab_SimV2Sel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrvPrjTab_SimV2Sel = arrvPrjTab_SimV2Sel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrvPrjTab_SimV2Sel = arrvPrjTab_SimV2Sel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrvPrjTab_SimV2Sel = arrvPrjTab_SimV2Sel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrvPrjTab_SimV2Sel = arrvPrjTab_SimV2Sel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrvPrjTab_SimV2Sel = arrvPrjTab_SimV2Sel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrvPrjTab_SimV2Sel = arrvPrjTab_SimV2Sel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrvPrjTab_SimV2Sel = arrvPrjTab_SimV2Sel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrvPrjTab_SimV2Sel = arrvPrjTab_SimV2Sel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrvPrjTab_SimV2Sel = arrvPrjTab_SimV2Sel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrvPrjTab_SimV2Sel.length == 0) return [];
  return arrvPrjTab_SimV2Sel.map((x) => x.tabId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function vPrjTab_SimV2_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vPrjTab_SimV2_Controller, strAction);

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
        vPrjTab_SimV2_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vPrjTab_SimV2_ConstructorName,
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
export async function vPrjTab_SimV2_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vPrjTab_SimV2_Controller, strAction);

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
        vPrjTab_SimV2_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vPrjTab_SimV2_ConstructorName,
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
export async function vPrjTab_SimV2_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsvPrjTab_SimV2EN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(vPrjTab_SimV2_Controller, strAction);

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
      const objvPrjTab_SimV2 = vPrjTab_SimV2_GetObjFromJsonObj(returnObj);
      return objvPrjTab_SimV2;
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
        vPrjTab_SimV2_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vPrjTab_SimV2_ConstructorName,
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
export async function vPrjTab_SimV2_GetObjLstClientCache(strCmPrjId: string) {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsvPrjTab_SimV2EN.WhereFormat) == false) {
    strWhereCond = Format(clsvPrjTab_SimV2EN.WhereFormat, strCmPrjId);
  } else {
    strWhereCond = Format("CmPrjId='{0}'", strCmPrjId);
  }
  const strKey = Format('{0}_{1}', clsvPrjTab_SimV2EN._CurrTabName, strCmPrjId);
  if (IsNullOrEmpty(clsvPrjTab_SimV2EN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvPrjTab_SimV2EN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrvPrjTab_SimV2ExObjLstCache: Array<clsvPrjTab_SimV2EN> = CacheHelper.Get(strKey);
    const arrvPrjTab_SimV2ObjLstT = vPrjTab_SimV2_GetObjLstByJSONObjLst(
      arrvPrjTab_SimV2ExObjLstCache,
    );
    return arrvPrjTab_SimV2ObjLstT;
  }
  try {
    const arrvPrjTab_SimV2ExObjLst = await vPrjTab_SimV2_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrvPrjTab_SimV2ExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvPrjTab_SimV2ExObjLst.length,
    );
    console.log(strInfo);
    return arrvPrjTab_SimV2ExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vPrjTab_SimV2_ConstructorName,
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
export async function vPrjTab_SimV2_GetObjLstlocalStorage(strCmPrjId: string) {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsvPrjTab_SimV2EN.WhereFormat) == false) {
    strWhereCond = Format(clsvPrjTab_SimV2EN.WhereFormat, strCmPrjId);
  } else {
    strWhereCond = Format("{0}='{1}'", clsvPrjTab_SimV2EN.con_CmPrjId, strCmPrjId);
  }
  const strKey = Format('{0}_{1}', clsvPrjTab_SimV2EN._CurrTabName, strCmPrjId);
  if (IsNullOrEmpty(clsvPrjTab_SimV2EN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvPrjTab_SimV2EN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvPrjTab_SimV2ExObjLstCache: Array<clsvPrjTab_SimV2EN> = JSON.parse(strTempObjLst);
    const arrvPrjTab_SimV2ObjLstT = vPrjTab_SimV2_GetObjLstByJSONObjLst(
      arrvPrjTab_SimV2ExObjLstCache,
    );
    return arrvPrjTab_SimV2ObjLstT;
  }
  try {
    const arrvPrjTab_SimV2ExObjLst = await vPrjTab_SimV2_GetObjLstAsync(strWhereCond);
    const strPrefix = Format('{0}_', clsvPrjTab_SimV2EN._CurrTabName);
    const arrCacheKeyLst = LocalStorage_GetKeyByPrefix(strPrefix);
    arrCacheKeyLst.forEach((x) => localStorage.removeItem(x));
    localStorage.setItem(strKey, JSON.stringify(arrvPrjTab_SimV2ExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvPrjTab_SimV2ExObjLst.length,
    );
    console.log(strInfo);
    return arrvPrjTab_SimV2ExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vPrjTab_SimV2_ConstructorName,
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
export async function vPrjTab_SimV2_GetObjLstlocalStoragePureCache(strCmPrjId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsvPrjTab_SimV2EN._CurrTabName, strCmPrjId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvPrjTab_SimV2ObjLstCache: Array<clsvPrjTab_SimV2EN> = JSON.parse(strTempObjLst);
    return arrvPrjTab_SimV2ObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function vPrjTab_SimV2_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsvPrjTab_SimV2EN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(vPrjTab_SimV2_Controller, strAction);

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
          vPrjTab_SimV2_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vPrjTab_SimV2_GetObjLstByJSONObjLst(returnObjLst);
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
        vPrjTab_SimV2_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vPrjTab_SimV2_ConstructorName,
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
export async function vPrjTab_SimV2_GetObjLstsessionStorage(strCmPrjId: string) {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsvPrjTab_SimV2EN.WhereFormat) == false) {
    strWhereCond = Format(clsvPrjTab_SimV2EN.WhereFormat, strCmPrjId);
  } else {
    strWhereCond = Format("{0}='{1}'", clsvPrjTab_SimV2EN.con_CmPrjId, strCmPrjId);
  }
  const strKey = Format('{0}_{1}', clsvPrjTab_SimV2EN._CurrTabName, strCmPrjId);
  if (IsNullOrEmpty(clsvPrjTab_SimV2EN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvPrjTab_SimV2EN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvPrjTab_SimV2ExObjLstCache: Array<clsvPrjTab_SimV2EN> = JSON.parse(strTempObjLst);
    const arrvPrjTab_SimV2ObjLstT = vPrjTab_SimV2_GetObjLstByJSONObjLst(
      arrvPrjTab_SimV2ExObjLstCache,
    );
    return arrvPrjTab_SimV2ObjLstT;
  }
  try {
    const arrvPrjTab_SimV2ExObjLst = await vPrjTab_SimV2_GetObjLstAsync(strWhereCond);
    const strPrefix = Format('{0}_', clsvPrjTab_SimV2EN._CurrTabName);
    const arrCacheKeyLst = SessionStorage_GetKeyByPrefix(strPrefix);
    arrCacheKeyLst.forEach((x) => sessionStorage.removeItem(x));
    sessionStorage.setItem(strKey, JSON.stringify(arrvPrjTab_SimV2ExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvPrjTab_SimV2ExObjLst.length,
    );
    console.log(strInfo);
    return arrvPrjTab_SimV2ExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vPrjTab_SimV2_ConstructorName,
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
export async function vPrjTab_SimV2_GetObjLstsessionStoragePureCache(strCmPrjId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsvPrjTab_SimV2EN._CurrTabName, strCmPrjId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvPrjTab_SimV2ObjLstCache: Array<clsvPrjTab_SimV2EN> = JSON.parse(strTempObjLst);
    return arrvPrjTab_SimV2ObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vPrjTab_SimV2_GetObjLstCache(
  strCmPrjId: string,
): Promise<Array<clsvPrjTab_SimV2EN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  if (IsNullOrEmpty(strCmPrjId) == true) {
    const strMsg = Format(
      '参数:[strCmPrjId]不能为空！(In clsvPrjTab_SimV2WApi.vPrjTab_SimV2_GetObjLstCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strCmPrjId.length != 6) {
    const strMsg = Format(
      '缓存分类变量:[strCmPrjId]的长度:[{0}]不正确！(clsvPrjTab_SimV2WApi.vPrjTab_SimV2_GetObjLstCache)',
      strCmPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  let arrvPrjTab_SimV2ObjLstCache;
  switch (clsvPrjTab_SimV2EN.CacheModeId) {
    case '04': //sessionStorage
      arrvPrjTab_SimV2ObjLstCache = await vPrjTab_SimV2_GetObjLstsessionStorage(strCmPrjId);
      break;
    case '03': //localStorage
      arrvPrjTab_SimV2ObjLstCache = await vPrjTab_SimV2_GetObjLstlocalStorage(strCmPrjId);
      break;
    case '02': //ClientCache
      arrvPrjTab_SimV2ObjLstCache = await vPrjTab_SimV2_GetObjLstClientCache(strCmPrjId);
      break;
    default:
      arrvPrjTab_SimV2ObjLstCache = await vPrjTab_SimV2_GetObjLstClientCache(strCmPrjId);
      break;
  }
  return arrvPrjTab_SimV2ObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vPrjTab_SimV2_GetObjLstPureCache(strCmPrjId: string) {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrvPrjTab_SimV2ObjLstCache;
  switch (clsvPrjTab_SimV2EN.CacheModeId) {
    case '04': //sessionStorage
      arrvPrjTab_SimV2ObjLstCache = await vPrjTab_SimV2_GetObjLstsessionStoragePureCache(
        strCmPrjId,
      );
      break;
    case '03': //localStorage
      arrvPrjTab_SimV2ObjLstCache = await vPrjTab_SimV2_GetObjLstlocalStoragePureCache(strCmPrjId);
      break;
    case '02': //ClientCache
      arrvPrjTab_SimV2ObjLstCache = null;
      break;
    default:
      arrvPrjTab_SimV2ObjLstCache = null;
      break;
  }
  return arrvPrjTab_SimV2ObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrTabIdCond:条件对象
 * @returns 对象列表子集
 */
export async function vPrjTab_SimV2_GetSubObjLstCache(
  objvPrjTab_SimV2Cond: clsvPrjTab_SimV2EN,
  strCmPrjId: string,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrvPrjTab_SimV2ObjLstCache = await vPrjTab_SimV2_GetObjLstCache(strCmPrjId);
  let arrvPrjTab_SimV2Sel = arrvPrjTab_SimV2ObjLstCache;
  if (
    objvPrjTab_SimV2Cond.sfFldComparisonOp == null ||
    objvPrjTab_SimV2Cond.sfFldComparisonOp == ''
  )
    return arrvPrjTab_SimV2Sel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvPrjTab_SimV2Cond.sfFldComparisonOp,
  );
  //console.log("clsvPrjTab_SimV2WApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvPrjTab_SimV2Cond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvPrjTab_SimV2Sel = arrvPrjTab_SimV2Sel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvPrjTab_SimV2Cond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvPrjTab_SimV2Sel = arrvPrjTab_SimV2Sel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvPrjTab_SimV2Sel = arrvPrjTab_SimV2Sel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvPrjTab_SimV2Sel = arrvPrjTab_SimV2Sel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvPrjTab_SimV2Sel = arrvPrjTab_SimV2Sel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvPrjTab_SimV2Sel = arrvPrjTab_SimV2Sel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvPrjTab_SimV2Sel = arrvPrjTab_SimV2Sel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvPrjTab_SimV2Sel = arrvPrjTab_SimV2Sel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvPrjTab_SimV2Sel = arrvPrjTab_SimV2Sel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvPrjTab_SimV2Sel = arrvPrjTab_SimV2Sel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvPrjTab_SimV2Sel = arrvPrjTab_SimV2Sel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvPrjTab_SimV2Sel = arrvPrjTab_SimV2Sel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvPrjTab_SimV2Sel = arrvPrjTab_SimV2Sel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvPrjTab_SimV2Sel = arrvPrjTab_SimV2Sel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrvPrjTab_SimV2Sel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvPrjTab_SimV2Cond),
      vPrjTab_SimV2_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvPrjTab_SimV2EN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrTabId:关键字列表
 * @returns 对象列表
 **/
export async function vPrjTab_SimV2_GetObjLstByTabIdLstAsync(
  arrTabId: Array<string>,
): Promise<Array<clsvPrjTab_SimV2EN>> {
  const strThisFuncName = 'GetObjLstByTabIdLstAsync';
  const strAction = 'GetObjLstByTabIdLst';
  const strUrl = GetWebApiUrl(vPrjTab_SimV2_Controller, strAction);

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
          vPrjTab_SimV2_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vPrjTab_SimV2_GetObjLstByJSONObjLst(returnObjLst);
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
        vPrjTab_SimV2_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vPrjTab_SimV2_ConstructorName,
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
export async function vPrjTab_SimV2_GetObjLstByTabIdLstCache(
  arrTabIdLst: Array<string>,
  strCmPrjId: string,
) {
  const strThisFuncName = 'GetObjLstByTabIdLstCache';
  try {
    const arrvPrjTab_SimV2ObjLstCache = await vPrjTab_SimV2_GetObjLstCache(strCmPrjId);
    const arrvPrjTab_SimV2Sel = arrvPrjTab_SimV2ObjLstCache.filter(
      (x) => arrTabIdLst.indexOf(x.tabId) > -1,
    );
    return arrvPrjTab_SimV2Sel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrTabIdLst.join(','),
      vPrjTab_SimV2_ConstructorName,
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
export async function vPrjTab_SimV2_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsvPrjTab_SimV2EN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(vPrjTab_SimV2_Controller, strAction);

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
          vPrjTab_SimV2_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vPrjTab_SimV2_GetObjLstByJSONObjLst(returnObjLst);
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
        vPrjTab_SimV2_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vPrjTab_SimV2_ConstructorName,
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
export async function vPrjTab_SimV2_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsvPrjTab_SimV2EN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(vPrjTab_SimV2_Controller, strAction);

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
          vPrjTab_SimV2_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vPrjTab_SimV2_GetObjLstByJSONObjLst(returnObjLst);
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
        vPrjTab_SimV2_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vPrjTab_SimV2_ConstructorName,
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
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerCache)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function vPrjTab_SimV2_GetObjLstByPagerCache(
  objPagerPara: stuPagerPara,
  strCmPrjId: string,
) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsvPrjTab_SimV2EN>();
  const arrvPrjTab_SimV2ObjLstCache = await vPrjTab_SimV2_GetObjLstCache(strCmPrjId);
  if (arrvPrjTab_SimV2ObjLstCache.length == 0) return arrvPrjTab_SimV2ObjLstCache;
  let arrvPrjTab_SimV2Sel = arrvPrjTab_SimV2ObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objvPrjTab_SimV2Cond = new clsvPrjTab_SimV2EN();
  ObjectAssign(objvPrjTab_SimV2Cond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsvPrjTab_SimV2WApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvPrjTab_SimV2Sel = arrvPrjTab_SimV2Sel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvPrjTab_SimV2Cond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvPrjTab_SimV2Sel = arrvPrjTab_SimV2Sel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvPrjTab_SimV2Sel = arrvPrjTab_SimV2Sel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvPrjTab_SimV2Sel = arrvPrjTab_SimV2Sel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvPrjTab_SimV2Sel = arrvPrjTab_SimV2Sel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvPrjTab_SimV2Sel = arrvPrjTab_SimV2Sel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvPrjTab_SimV2Sel = arrvPrjTab_SimV2Sel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvPrjTab_SimV2Sel = arrvPrjTab_SimV2Sel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrvPrjTab_SimV2Sel = arrvPrjTab_SimV2Sel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvPrjTab_SimV2Sel = arrvPrjTab_SimV2Sel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvPrjTab_SimV2Sel = arrvPrjTab_SimV2Sel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvPrjTab_SimV2Sel = arrvPrjTab_SimV2Sel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvPrjTab_SimV2Sel = arrvPrjTab_SimV2Sel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvPrjTab_SimV2Sel = arrvPrjTab_SimV2Sel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvPrjTab_SimV2Sel = arrvPrjTab_SimV2Sel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrvPrjTab_SimV2Sel.length == 0) return arrvPrjTab_SimV2Sel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrvPrjTab_SimV2Sel = arrvPrjTab_SimV2Sel.sort(
        vPrjTab_SimV2_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrvPrjTab_SimV2Sel = arrvPrjTab_SimV2Sel.sort(objPagerPara.sortFun);
    }
    arrvPrjTab_SimV2Sel = arrvPrjTab_SimV2Sel.slice(intStart, intEnd);
    return arrvPrjTab_SimV2Sel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      vPrjTab_SimV2_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvPrjTab_SimV2EN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function vPrjTab_SimV2_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsvPrjTab_SimV2EN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsvPrjTab_SimV2EN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(vPrjTab_SimV2_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPagerPara, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          vPrjTab_SimV2_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vPrjTab_SimV2_GetObjLstByJSONObjLst(returnObjLst);
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
        vPrjTab_SimV2_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vPrjTab_SimV2_ConstructorName,
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
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistRecordCache)
 * @param objstrTabIdCond:条件对象
 * @returns 对象列表子集
 */
export async function vPrjTab_SimV2_IsExistRecordCache(
  objvPrjTab_SimV2Cond: clsvPrjTab_SimV2EN,
  strCmPrjId: string,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrvPrjTab_SimV2ObjLstCache = await vPrjTab_SimV2_GetObjLstCache(strCmPrjId);
  if (arrvPrjTab_SimV2ObjLstCache == null) return false;
  let arrvPrjTab_SimV2Sel = arrvPrjTab_SimV2ObjLstCache;
  if (
    objvPrjTab_SimV2Cond.sfFldComparisonOp == null ||
    objvPrjTab_SimV2Cond.sfFldComparisonOp == ''
  )
    return arrvPrjTab_SimV2Sel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvPrjTab_SimV2Cond.sfFldComparisonOp,
  );
  //console.log("clsvPrjTab_SimV2WApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvPrjTab_SimV2Cond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvPrjTab_SimV2Cond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvPrjTab_SimV2Sel = arrvPrjTab_SimV2Sel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvPrjTab_SimV2Sel = arrvPrjTab_SimV2Sel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvPrjTab_SimV2Sel = arrvPrjTab_SimV2Sel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvPrjTab_SimV2Sel = arrvPrjTab_SimV2Sel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvPrjTab_SimV2Sel = arrvPrjTab_SimV2Sel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvPrjTab_SimV2Sel = arrvPrjTab_SimV2Sel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvPrjTab_SimV2Sel = arrvPrjTab_SimV2Sel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvPrjTab_SimV2Sel = arrvPrjTab_SimV2Sel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvPrjTab_SimV2Sel = arrvPrjTab_SimV2Sel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvPrjTab_SimV2Sel = arrvPrjTab_SimV2Sel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvPrjTab_SimV2Sel = arrvPrjTab_SimV2Sel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvPrjTab_SimV2Sel = arrvPrjTab_SimV2Sel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvPrjTab_SimV2Sel = arrvPrjTab_SimV2Sel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrvPrjTab_SimV2Sel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objvPrjTab_SimV2Cond),
      vPrjTab_SimV2_ConstructorName,
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
export async function vPrjTab_SimV2_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(vPrjTab_SimV2_Controller, strAction);

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
        vPrjTab_SimV2_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vPrjTab_SimV2_ConstructorName,
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
export async function vPrjTab_SimV2_IsExistCache(strTabId: string, strCmPrjId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrvPrjTab_SimV2ObjLstCache = await vPrjTab_SimV2_GetObjLstCache(strCmPrjId);
  if (arrvPrjTab_SimV2ObjLstCache == null) return false;
  try {
    const arrvPrjTab_SimV2Sel = arrvPrjTab_SimV2ObjLstCache.filter((x) => x.tabId == strTabId);
    if (arrvPrjTab_SimV2Sel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strTabId,
      vPrjTab_SimV2_ConstructorName,
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
export async function vPrjTab_SimV2_IsExistAsync(strTabId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(vPrjTab_SimV2_Controller, strAction);

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
        vPrjTab_SimV2_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vPrjTab_SimV2_ConstructorName,
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
export async function vPrjTab_SimV2_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(vPrjTab_SimV2_Controller, strAction);

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
        vPrjTab_SimV2_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vPrjTab_SimV2_ConstructorName,
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
 * @param objvPrjTab_SimV2Cond:条件对象
 * @returns 对象列表记录数
 */
export async function vPrjTab_SimV2_GetRecCountByCondCache(
  objvPrjTab_SimV2Cond: clsvPrjTab_SimV2EN,
  strCmPrjId: string,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrvPrjTab_SimV2ObjLstCache = await vPrjTab_SimV2_GetObjLstCache(strCmPrjId);
  if (arrvPrjTab_SimV2ObjLstCache == null) return 0;
  let arrvPrjTab_SimV2Sel = arrvPrjTab_SimV2ObjLstCache;
  if (
    objvPrjTab_SimV2Cond.sfFldComparisonOp == null ||
    objvPrjTab_SimV2Cond.sfFldComparisonOp == ''
  )
    return arrvPrjTab_SimV2Sel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvPrjTab_SimV2Cond.sfFldComparisonOp,
  );
  //console.log("clsvPrjTab_SimV2WApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvPrjTab_SimV2Cond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvPrjTab_SimV2Sel = arrvPrjTab_SimV2Sel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvPrjTab_SimV2Cond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvPrjTab_SimV2Sel = arrvPrjTab_SimV2Sel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvPrjTab_SimV2Sel = arrvPrjTab_SimV2Sel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvPrjTab_SimV2Sel = arrvPrjTab_SimV2Sel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvPrjTab_SimV2Sel = arrvPrjTab_SimV2Sel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvPrjTab_SimV2Sel = arrvPrjTab_SimV2Sel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvPrjTab_SimV2Sel = arrvPrjTab_SimV2Sel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvPrjTab_SimV2Sel = arrvPrjTab_SimV2Sel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrvPrjTab_SimV2Sel = arrvPrjTab_SimV2Sel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvPrjTab_SimV2Sel = arrvPrjTab_SimV2Sel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvPrjTab_SimV2Sel = arrvPrjTab_SimV2Sel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvPrjTab_SimV2Sel = arrvPrjTab_SimV2Sel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvPrjTab_SimV2Sel = arrvPrjTab_SimV2Sel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvPrjTab_SimV2Sel = arrvPrjTab_SimV2Sel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvPrjTab_SimV2Sel = arrvPrjTab_SimV2Sel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrvPrjTab_SimV2Sel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvPrjTab_SimV2Cond),
      vPrjTab_SimV2_ConstructorName,
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
export function vPrjTab_SimV2_GetWebApiUrl(strController: string, strAction: string): string {
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
export function vPrjTab_SimV2_ReFreshThisCache(strCmPrjId: string): void {
  if (IsNullOrEmpty(strCmPrjId) == true) {
    const strMsg = Format(
      '参数:[strCmPrjId]不能为空!(In clsvPrjTab_SimV2WApi.vPrjTab_SimV2_ReFreshThisCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strCmPrjId.length != 6) {
    const strMsg = Format(
      '缓存分类变量:[strCmPrjId]的长度:[{0}]不正确!(clsvPrjTab_SimV2WApi.vPrjTab_SimV2_ReFreshThisCache)',
      strCmPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = Format('{0}_{1}', clsvPrjTab_SimV2EN._CurrTabName, strCmPrjId);
    switch (clsvPrjTab_SimV2EN.CacheModeId) {
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
    const strMsg = Format('刷新缓存成功!');
    console.trace(strMsg);
  } else {
    const strMsg = Format('刷新缓存已经关闭。');
    console.trace(strMsg);
  }
}

//(IsNeedGC == false)该表下拉框功能不需要生成;

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vPrjTab_SimV2_GetJSONStrByObj(pobjvPrjTab_SimV2EN: clsvPrjTab_SimV2EN): string {
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjvPrjTab_SimV2EN);
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
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
 */
export function vPrjTab_SimV2_GetObjLstByJSONStr(strJSON: string): Array<clsvPrjTab_SimV2EN> {
  let arrvPrjTab_SimV2ObjLst = new Array<clsvPrjTab_SimV2EN>();
  if (strJSON === '') {
    return arrvPrjTab_SimV2ObjLst;
  }
  try {
    arrvPrjTab_SimV2ObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrvPrjTab_SimV2ObjLst;
  }
  return arrvPrjTab_SimV2ObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvPrjTab_SimV2ObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function vPrjTab_SimV2_GetObjLstByJSONObjLst(
  arrvPrjTab_SimV2ObjLstS: Array<clsvPrjTab_SimV2EN>,
): Array<clsvPrjTab_SimV2EN> {
  const arrvPrjTab_SimV2ObjLst = new Array<clsvPrjTab_SimV2EN>();
  for (const objInFor of arrvPrjTab_SimV2ObjLstS) {
    const obj1 = vPrjTab_SimV2_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrvPrjTab_SimV2ObjLst.push(obj1);
  }
  return arrvPrjTab_SimV2ObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vPrjTab_SimV2_GetObjByJSONStr(strJSON: string): clsvPrjTab_SimV2EN {
  let pobjvPrjTab_SimV2EN = new clsvPrjTab_SimV2EN();
  if (strJSON === '') {
    return pobjvPrjTab_SimV2EN;
  }
  try {
    pobjvPrjTab_SimV2EN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjvPrjTab_SimV2EN;
  }
  return pobjvPrjTab_SimV2EN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function vPrjTab_SimV2_GetCombineCondition(
  objvPrjTab_SimV2Cond: clsvPrjTab_SimV2EN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objvPrjTab_SimV2Cond.dicFldComparisonOp,
      clsvPrjTab_SimV2EN.con_TabId,
    ) == true
  ) {
    const strComparisonOpTabId: string =
      objvPrjTab_SimV2Cond.dicFldComparisonOp[clsvPrjTab_SimV2EN.con_TabId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvPrjTab_SimV2EN.con_TabId,
      objvPrjTab_SimV2Cond.tabId,
      strComparisonOpTabId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvPrjTab_SimV2Cond.dicFldComparisonOp,
      clsvPrjTab_SimV2EN.con_TabName,
    ) == true
  ) {
    const strComparisonOpTabName: string =
      objvPrjTab_SimV2Cond.dicFldComparisonOp[clsvPrjTab_SimV2EN.con_TabName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvPrjTab_SimV2EN.con_TabName,
      objvPrjTab_SimV2Cond.tabName,
      strComparisonOpTabName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvPrjTab_SimV2Cond.dicFldComparisonOp,
      clsvPrjTab_SimV2EN.con_SqlDsTypeId,
    ) == true
  ) {
    const strComparisonOpSqlDsTypeId: string =
      objvPrjTab_SimV2Cond.dicFldComparisonOp[clsvPrjTab_SimV2EN.con_SqlDsTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvPrjTab_SimV2EN.con_SqlDsTypeId,
      objvPrjTab_SimV2Cond.sqlDsTypeId,
      strComparisonOpSqlDsTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvPrjTab_SimV2Cond.dicFldComparisonOp,
      clsvPrjTab_SimV2EN.con_FuncModuleAgcId,
    ) == true
  ) {
    const strComparisonOpFuncModuleAgcId: string =
      objvPrjTab_SimV2Cond.dicFldComparisonOp[clsvPrjTab_SimV2EN.con_FuncModuleAgcId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvPrjTab_SimV2EN.con_FuncModuleAgcId,
      objvPrjTab_SimV2Cond.funcModuleAgcId,
      strComparisonOpFuncModuleAgcId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvPrjTab_SimV2Cond.dicFldComparisonOp,
      clsvPrjTab_SimV2EN.con_TabTypeId,
    ) == true
  ) {
    const strComparisonOpTabTypeId: string =
      objvPrjTab_SimV2Cond.dicFldComparisonOp[clsvPrjTab_SimV2EN.con_TabTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvPrjTab_SimV2EN.con_TabTypeId,
      objvPrjTab_SimV2Cond.tabTypeId,
      strComparisonOpTabTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvPrjTab_SimV2Cond.dicFldComparisonOp,
      clsvPrjTab_SimV2EN.con_CacheModeId,
    ) == true
  ) {
    const strComparisonOpCacheModeId: string =
      objvPrjTab_SimV2Cond.dicFldComparisonOp[clsvPrjTab_SimV2EN.con_CacheModeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvPrjTab_SimV2EN.con_CacheModeId,
      objvPrjTab_SimV2Cond.cacheModeId,
      strComparisonOpCacheModeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvPrjTab_SimV2Cond.dicFldComparisonOp,
      clsvPrjTab_SimV2EN.con_TabStateId,
    ) == true
  ) {
    const strComparisonOpTabStateId: string =
      objvPrjTab_SimV2Cond.dicFldComparisonOp[clsvPrjTab_SimV2EN.con_TabStateId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvPrjTab_SimV2EN.con_TabStateId,
      objvPrjTab_SimV2Cond.tabStateId,
      strComparisonOpTabStateId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvPrjTab_SimV2Cond.dicFldComparisonOp,
      clsvPrjTab_SimV2EN.con_CmPrjId,
    ) == true
  ) {
    const strComparisonOpCmPrjId: string =
      objvPrjTab_SimV2Cond.dicFldComparisonOp[clsvPrjTab_SimV2EN.con_CmPrjId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvPrjTab_SimV2EN.con_CmPrjId,
      objvPrjTab_SimV2Cond.cmPrjId,
      strComparisonOpCmPrjId,
    );
  }
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvPrjTab_SimV2ENS:源对象
 * @param objvPrjTab_SimV2ENT:目标对象
 */
export function vPrjTab_SimV2_GetObjFromJsonObj(
  objvPrjTab_SimV2ENS: clsvPrjTab_SimV2EN,
): clsvPrjTab_SimV2EN {
  const objvPrjTab_SimV2ENT: clsvPrjTab_SimV2EN = new clsvPrjTab_SimV2EN();
  ObjectAssign(objvPrjTab_SimV2ENT, objvPrjTab_SimV2ENS);
  return objvPrjTab_SimV2ENT;
}
