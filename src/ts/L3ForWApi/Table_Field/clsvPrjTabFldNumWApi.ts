/**
 * 类名:clsvPrjTabFldNumWApi
 * 表名:vPrjTabFldNum(00050285)
 * 版本:2024.01.20.1(服务器:WIN-SRV103-116)
 * 日期:2024/01/23 16:50:45
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
 * vPrjTabFldNum(vPrjTabFldNum)
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
import { clsvPrjTabFldNumEN } from '@/ts/L0Entity/Table_Field/clsvPrjTabFldNumEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const vPrjTabFldNum_Controller = 'vPrjTabFldNumApi';
export const vPrjTabFldNum_ConstructorName = 'vPrjTabFldNum';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strTabId:关键字
 * @returns 对象
 **/
export async function vPrjTabFldNum_GetObjByTabIdAsync(
  strTabId: string,
): Promise<clsvPrjTabFldNumEN | null> {
  const strThisFuncName = 'GetObjByTabIdAsync';

  if (IsNullOrEmpty(strTabId) == true) {
    const strMsg = Format('参数:[strTabId]不能为空!(In clsvPrjTabFldNumWApi.GetObjByTabIdAsync)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strTabId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strTabId]的长度:[{0}]不正确!(clsvPrjTabFldNumWApi.GetObjByTabIdAsync)',
      strTabId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByTabId';
  const strUrl = GetWebApiUrl(vPrjTabFldNum_Controller, strAction);

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
      const objvPrjTabFldNum = vPrjTabFldNum_GetObjFromJsonObj(returnObj);
      return objvPrjTabFldNum;
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
        vPrjTabFldNum_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vPrjTabFldNum_ConstructorName,
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
export async function vPrjTabFldNum_GetObjByTabIdCache(
  strTabId: string,
  strPrjId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByTabIdCache';

  if (IsNullOrEmpty(strTabId) == true) {
    const strMsg = Format('参数:[strTabId]不能为空!(In clsvPrjTabFldNumWApi.GetObjByTabIdCache)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strTabId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strTabId]的长度:[{0}]不正确!(clsvPrjTabFldNumWApi.GetObjByTabIdCache)',
      strTabId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrvPrjTabFldNumObjLstCache = await vPrjTabFldNum_GetObjLstCache(strPrjId);
  try {
    const arrvPrjTabFldNumSel = arrvPrjTabFldNumObjLstCache.filter((x) => x.tabId == strTabId);
    let objvPrjTabFldNum: clsvPrjTabFldNumEN;
    if (arrvPrjTabFldNumSel.length > 0) {
      objvPrjTabFldNum = arrvPrjTabFldNumSel[0];
      return objvPrjTabFldNum;
    } else {
      if (bolTryAsyncOnce == true) {
        const objvPrjTabFldNumConst = await vPrjTabFldNum_GetObjByTabIdAsync(strTabId);
        if (objvPrjTabFldNumConst != null) {
          vPrjTabFldNum_ReFreshThisCache(strPrjId);
          return objvPrjTabFldNumConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strTabId,
      vPrjTabFldNum_ConstructorName,
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
export async function vPrjTabFldNum_GetObjByTabIdlocalStorage(strTabId: string) {
  const strThisFuncName = 'GetObjByTabIdlocalStorage';

  if (IsNullOrEmpty(strTabId) == true) {
    const strMsg = Format(
      '参数:[strTabId]不能为空!(In clsvPrjTabFldNumWApi.GetObjByTabIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strTabId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strTabId]的长度:[{0}]不正确!(clsvPrjTabFldNumWApi.GetObjByTabIdlocalStorage)',
      strTabId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsvPrjTabFldNumEN._CurrTabName, strTabId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objvPrjTabFldNumCache: clsvPrjTabFldNumEN = JSON.parse(strTempObj);
    return objvPrjTabFldNumCache;
  }
  try {
    const objvPrjTabFldNum = await vPrjTabFldNum_GetObjByTabIdAsync(strTabId);
    if (objvPrjTabFldNum != null) {
      localStorage.setItem(strKey, JSON.stringify(objvPrjTabFldNum));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objvPrjTabFldNum;
    }
    return objvPrjTabFldNum;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strTabId,
      vPrjTabFldNum_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return;
  }
}
/*该表没有名称字段,不能生成此函数!*/

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 @param strPrjId:缓存的分类字段
 * @returns 返回一个输出字段值
*/
export async function vPrjTabFldNum_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
  strPrjIdClassfy: string,
) {
  //const strThisFuncName = "func";

  if (IsNullOrEmpty(strPrjIdClassfy) == true) {
    const strMsg = Format('参数:[strPrjIdClassfy]不能为空!(In clsvPrjTabFldNumWApi.func)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjIdClassfy.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjIdClassfy]的长度:[{0}]不正确!(clsvPrjTabFldNumWApi.func)',
      strPrjIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName != clsvPrjTabFldNumEN.con_TabId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsvPrjTabFldNumEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsvPrjTabFldNumEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strTabId = strInValue;
  if (IsNullOrEmpty(strInValue) == true) {
    return '';
  }
  const objvPrjTabFldNum = await vPrjTabFldNum_GetObjByTabIdCache(strTabId, strPrjIdClassfy);
  if (objvPrjTabFldNum == null) return '';
  if (objvPrjTabFldNum.GetFldValue(strOutFldName) == null) return '';
  return objvPrjTabFldNum.GetFldValue(strOutFldName).toString();
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
export function vPrjTabFldNum_SortFunDefa(a: clsvPrjTabFldNumEN, b: clsvPrjTabFldNumEN): number {
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
export function vPrjTabFldNum_SortFunDefa2Fld(
  a: clsvPrjTabFldNumEN,
  b: clsvPrjTabFldNumEN,
): number {
  if (a.fldNum == b.fldNum) return a.prjId.localeCompare(b.prjId);
  else return a.fldNum - b.fldNum;
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
export function vPrjTabFldNum_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsvPrjTabFldNumEN.con_TabId:
        return (a: clsvPrjTabFldNumEN, b: clsvPrjTabFldNumEN) => {
          return a.tabId.localeCompare(b.tabId);
        };
      case clsvPrjTabFldNumEN.con_FldNum:
        return (a: clsvPrjTabFldNumEN, b: clsvPrjTabFldNumEN) => {
          return a.fldNum - b.fldNum;
        };
      case clsvPrjTabFldNumEN.con_PrjId:
        return (a: clsvPrjTabFldNumEN, b: clsvPrjTabFldNumEN) => {
          return a.prjId.localeCompare(b.prjId);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vPrjTabFldNum]中不存在!(in ${vPrjTabFldNum_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsvPrjTabFldNumEN.con_TabId:
        return (a: clsvPrjTabFldNumEN, b: clsvPrjTabFldNumEN) => {
          return b.tabId.localeCompare(a.tabId);
        };
      case clsvPrjTabFldNumEN.con_FldNum:
        return (a: clsvPrjTabFldNumEN, b: clsvPrjTabFldNumEN) => {
          return b.fldNum - a.fldNum;
        };
      case clsvPrjTabFldNumEN.con_PrjId:
        return (a: clsvPrjTabFldNumEN, b: clsvPrjTabFldNumEN) => {
          return b.prjId.localeCompare(a.prjId);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vPrjTabFldNum]中不存在!(in ${vPrjTabFldNum_ConstructorName}.${strThisFuncName})`;
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
export async function vPrjTabFldNum_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsvPrjTabFldNumEN.con_TabId:
      return (obj: clsvPrjTabFldNumEN) => {
        return obj.tabId === value;
      };
    case clsvPrjTabFldNumEN.con_FldNum:
      return (obj: clsvPrjTabFldNumEN) => {
        return obj.fldNum === value;
      };
    case clsvPrjTabFldNumEN.con_PrjId:
      return (obj: clsvPrjTabFldNumEN) => {
        return obj.prjId === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[vPrjTabFldNum]中不存在!(in ${vPrjTabFldNum_ConstructorName}.${strThisFuncName})`;
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
 @param strPrjId:缓存的分类字段
 * @returns 返回一个关键字值列表
*/
export async function vPrjTabFldNum_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
  strPrjIdClassfy: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (IsNullOrEmpty(strPrjIdClassfy) == true) {
    const strMsg = Format('参数:[strPrjIdClassfy]不能为空!(In clsvPrjTabFldNumWApi.funcKey)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjIdClassfy.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjIdClassfy]的长度:[{0}]不正确!(clsvPrjTabFldNumWApi.funcKey)',
      strPrjIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName == clsvPrjTabFldNumEN.con_TabId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrvPrjTabFldNum = await vPrjTabFldNum_GetObjLstCache(strPrjIdClassfy);
  if (arrvPrjTabFldNum == null) return [];
  let arrvPrjTabFldNumSel = arrvPrjTabFldNum;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrvPrjTabFldNumSel = arrvPrjTabFldNumSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrvPrjTabFldNumSel = arrvPrjTabFldNumSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrvPrjTabFldNumSel = arrvPrjTabFldNumSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrvPrjTabFldNumSel = arrvPrjTabFldNumSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrvPrjTabFldNumSel = arrvPrjTabFldNumSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrvPrjTabFldNumSel = arrvPrjTabFldNumSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrvPrjTabFldNumSel = arrvPrjTabFldNumSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrvPrjTabFldNumSel = arrvPrjTabFldNumSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrvPrjTabFldNumSel = arrvPrjTabFldNumSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrvPrjTabFldNumSel = arrvPrjTabFldNumSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrvPrjTabFldNumSel.length == 0) return [];
  return arrvPrjTabFldNumSel.map((x) => x.tabId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function vPrjTabFldNum_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vPrjTabFldNum_Controller, strAction);

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
        vPrjTabFldNum_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vPrjTabFldNum_ConstructorName,
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
export async function vPrjTabFldNum_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vPrjTabFldNum_Controller, strAction);

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
        vPrjTabFldNum_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vPrjTabFldNum_ConstructorName,
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
export async function vPrjTabFldNum_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsvPrjTabFldNumEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(vPrjTabFldNum_Controller, strAction);

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
      const objvPrjTabFldNum = vPrjTabFldNum_GetObjFromJsonObj(returnObj);
      return objvPrjTabFldNum;
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
        vPrjTabFldNum_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vPrjTabFldNum_ConstructorName,
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
export async function vPrjTabFldNum_GetObjLstClientCache(strPrjId: string) {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsvPrjTabFldNumEN.WhereFormat) == false) {
    strWhereCond = Format(clsvPrjTabFldNumEN.WhereFormat, strPrjId);
  } else {
    strWhereCond = Format("PrjId='{0}'", strPrjId);
  }
  const strKey = Format('{0}_{1}', clsvPrjTabFldNumEN._CurrTabName, strPrjId);
  if (IsNullOrEmpty(clsvPrjTabFldNumEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvPrjTabFldNumEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrvPrjTabFldNumExObjLstCache: Array<clsvPrjTabFldNumEN> = CacheHelper.Get(strKey);
    const arrvPrjTabFldNumObjLstT = vPrjTabFldNum_GetObjLstByJSONObjLst(
      arrvPrjTabFldNumExObjLstCache,
    );
    return arrvPrjTabFldNumObjLstT;
  }
  try {
    const arrvPrjTabFldNumExObjLst = await vPrjTabFldNum_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrvPrjTabFldNumExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvPrjTabFldNumExObjLst.length,
    );
    console.log(strInfo);
    return arrvPrjTabFldNumExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vPrjTabFldNum_ConstructorName,
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
export async function vPrjTabFldNum_GetObjLstlocalStorage(strPrjId: string) {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsvPrjTabFldNumEN.WhereFormat) == false) {
    strWhereCond = Format(clsvPrjTabFldNumEN.WhereFormat, strPrjId);
  } else {
    strWhereCond = Format("{0}='{1}'", clsvPrjTabFldNumEN.con_PrjId, strPrjId);
  }
  const strKey = Format('{0}_{1}', clsvPrjTabFldNumEN._CurrTabName, strPrjId);
  if (IsNullOrEmpty(clsvPrjTabFldNumEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvPrjTabFldNumEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvPrjTabFldNumExObjLstCache: Array<clsvPrjTabFldNumEN> = JSON.parse(strTempObjLst);
    const arrvPrjTabFldNumObjLstT = vPrjTabFldNum_GetObjLstByJSONObjLst(
      arrvPrjTabFldNumExObjLstCache,
    );
    return arrvPrjTabFldNumObjLstT;
  }
  try {
    const arrvPrjTabFldNumExObjLst = await vPrjTabFldNum_GetObjLstAsync(strWhereCond);
    const strPrefix = Format('{0}_', clsvPrjTabFldNumEN._CurrTabName);
    const arrCacheKeyLst = LocalStorage_GetKeyByPrefix(strPrefix);
    arrCacheKeyLst.forEach((x) => localStorage.removeItem(x));
    localStorage.setItem(strKey, JSON.stringify(arrvPrjTabFldNumExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvPrjTabFldNumExObjLst.length,
    );
    console.log(strInfo);
    return arrvPrjTabFldNumExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vPrjTabFldNum_ConstructorName,
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
export async function vPrjTabFldNum_GetObjLstlocalStoragePureCache(strPrjId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsvPrjTabFldNumEN._CurrTabName, strPrjId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvPrjTabFldNumObjLstCache: Array<clsvPrjTabFldNumEN> = JSON.parse(strTempObjLst);
    return arrvPrjTabFldNumObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function vPrjTabFldNum_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsvPrjTabFldNumEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(vPrjTabFldNum_Controller, strAction);

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
          vPrjTabFldNum_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vPrjTabFldNum_GetObjLstByJSONObjLst(returnObjLst);
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
        vPrjTabFldNum_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vPrjTabFldNum_ConstructorName,
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
export async function vPrjTabFldNum_GetObjLstsessionStorage(strPrjId: string) {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsvPrjTabFldNumEN.WhereFormat) == false) {
    strWhereCond = Format(clsvPrjTabFldNumEN.WhereFormat, strPrjId);
  } else {
    strWhereCond = Format("{0}='{1}'", clsvPrjTabFldNumEN.con_PrjId, strPrjId);
  }
  const strKey = Format('{0}_{1}', clsvPrjTabFldNumEN._CurrTabName, strPrjId);
  if (IsNullOrEmpty(clsvPrjTabFldNumEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvPrjTabFldNumEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvPrjTabFldNumExObjLstCache: Array<clsvPrjTabFldNumEN> = JSON.parse(strTempObjLst);
    const arrvPrjTabFldNumObjLstT = vPrjTabFldNum_GetObjLstByJSONObjLst(
      arrvPrjTabFldNumExObjLstCache,
    );
    return arrvPrjTabFldNumObjLstT;
  }
  try {
    const arrvPrjTabFldNumExObjLst = await vPrjTabFldNum_GetObjLstAsync(strWhereCond);
    const strPrefix = Format('{0}_', clsvPrjTabFldNumEN._CurrTabName);
    const arrCacheKeyLst = SessionStorage_GetKeyByPrefix(strPrefix);
    arrCacheKeyLst.forEach((x) => sessionStorage.removeItem(x));
    sessionStorage.setItem(strKey, JSON.stringify(arrvPrjTabFldNumExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvPrjTabFldNumExObjLst.length,
    );
    console.log(strInfo);
    return arrvPrjTabFldNumExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vPrjTabFldNum_ConstructorName,
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
export async function vPrjTabFldNum_GetObjLstsessionStoragePureCache(strPrjId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsvPrjTabFldNumEN._CurrTabName, strPrjId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvPrjTabFldNumObjLstCache: Array<clsvPrjTabFldNumEN> = JSON.parse(strTempObjLst);
    return arrvPrjTabFldNumObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vPrjTabFldNum_GetObjLstCache(
  strPrjId: string,
): Promise<Array<clsvPrjTabFldNumEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空！(In clsvPrjTabFldNumWApi.vPrjTabFldNum_GetObjLstCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确！(clsvPrjTabFldNumWApi.vPrjTabFldNum_GetObjLstCache)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  let arrvPrjTabFldNumObjLstCache;
  switch (clsvPrjTabFldNumEN.CacheModeId) {
    case '04': //sessionStorage
      arrvPrjTabFldNumObjLstCache = await vPrjTabFldNum_GetObjLstsessionStorage(strPrjId);
      break;
    case '03': //localStorage
      arrvPrjTabFldNumObjLstCache = await vPrjTabFldNum_GetObjLstlocalStorage(strPrjId);
      break;
    case '02': //ClientCache
      arrvPrjTabFldNumObjLstCache = await vPrjTabFldNum_GetObjLstClientCache(strPrjId);
      break;
    default:
      arrvPrjTabFldNumObjLstCache = await vPrjTabFldNum_GetObjLstClientCache(strPrjId);
      break;
  }
  return arrvPrjTabFldNumObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vPrjTabFldNum_GetObjLstPureCache(strPrjId: string) {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrvPrjTabFldNumObjLstCache;
  switch (clsvPrjTabFldNumEN.CacheModeId) {
    case '04': //sessionStorage
      arrvPrjTabFldNumObjLstCache = await vPrjTabFldNum_GetObjLstsessionStoragePureCache(strPrjId);
      break;
    case '03': //localStorage
      arrvPrjTabFldNumObjLstCache = await vPrjTabFldNum_GetObjLstlocalStoragePureCache(strPrjId);
      break;
    case '02': //ClientCache
      arrvPrjTabFldNumObjLstCache = null;
      break;
    default:
      arrvPrjTabFldNumObjLstCache = null;
      break;
  }
  return arrvPrjTabFldNumObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrTabIdCond:条件对象
 * @returns 对象列表子集
 */
export async function vPrjTabFldNum_GetSubObjLstCache(
  objvPrjTabFldNumCond: clsvPrjTabFldNumEN,
  strPrjId: string,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrvPrjTabFldNumObjLstCache = await vPrjTabFldNum_GetObjLstCache(strPrjId);
  let arrvPrjTabFldNumSel = arrvPrjTabFldNumObjLstCache;
  if (
    objvPrjTabFldNumCond.sfFldComparisonOp == null ||
    objvPrjTabFldNumCond.sfFldComparisonOp == ''
  )
    return arrvPrjTabFldNumSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvPrjTabFldNumCond.sfFldComparisonOp,
  );
  //console.log("clsvPrjTabFldNumWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvPrjTabFldNumCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvPrjTabFldNumSel = arrvPrjTabFldNumSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvPrjTabFldNumCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvPrjTabFldNumSel = arrvPrjTabFldNumSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvPrjTabFldNumSel = arrvPrjTabFldNumSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvPrjTabFldNumSel = arrvPrjTabFldNumSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvPrjTabFldNumSel = arrvPrjTabFldNumSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvPrjTabFldNumSel = arrvPrjTabFldNumSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvPrjTabFldNumSel = arrvPrjTabFldNumSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvPrjTabFldNumSel = arrvPrjTabFldNumSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvPrjTabFldNumSel = arrvPrjTabFldNumSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvPrjTabFldNumSel = arrvPrjTabFldNumSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvPrjTabFldNumSel = arrvPrjTabFldNumSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvPrjTabFldNumSel = arrvPrjTabFldNumSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvPrjTabFldNumSel = arrvPrjTabFldNumSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvPrjTabFldNumSel = arrvPrjTabFldNumSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrvPrjTabFldNumSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvPrjTabFldNumCond),
      vPrjTabFldNum_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvPrjTabFldNumEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrTabId:关键字列表
 * @returns 对象列表
 **/
export async function vPrjTabFldNum_GetObjLstByTabIdLstAsync(
  arrTabId: Array<string>,
): Promise<Array<clsvPrjTabFldNumEN>> {
  const strThisFuncName = 'GetObjLstByTabIdLstAsync';
  const strAction = 'GetObjLstByTabIdLst';
  const strUrl = GetWebApiUrl(vPrjTabFldNum_Controller, strAction);

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
          vPrjTabFldNum_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vPrjTabFldNum_GetObjLstByJSONObjLst(returnObjLst);
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
        vPrjTabFldNum_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vPrjTabFldNum_ConstructorName,
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
export async function vPrjTabFldNum_GetObjLstByTabIdLstCache(
  arrTabIdLst: Array<string>,
  strPrjId: string,
) {
  const strThisFuncName = 'GetObjLstByTabIdLstCache';
  try {
    const arrvPrjTabFldNumObjLstCache = await vPrjTabFldNum_GetObjLstCache(strPrjId);
    const arrvPrjTabFldNumSel = arrvPrjTabFldNumObjLstCache.filter(
      (x) => arrTabIdLst.indexOf(x.tabId) > -1,
    );
    return arrvPrjTabFldNumSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrTabIdLst.join(','),
      vPrjTabFldNum_ConstructorName,
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
export async function vPrjTabFldNum_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsvPrjTabFldNumEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(vPrjTabFldNum_Controller, strAction);

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
          vPrjTabFldNum_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vPrjTabFldNum_GetObjLstByJSONObjLst(returnObjLst);
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
        vPrjTabFldNum_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vPrjTabFldNum_ConstructorName,
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
export async function vPrjTabFldNum_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsvPrjTabFldNumEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(vPrjTabFldNum_Controller, strAction);

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
          vPrjTabFldNum_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vPrjTabFldNum_GetObjLstByJSONObjLst(returnObjLst);
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
        vPrjTabFldNum_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vPrjTabFldNum_ConstructorName,
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
export async function vPrjTabFldNum_GetObjLstByPagerCache(
  objPagerPara: stuPagerPara,
  strPrjId: string,
) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsvPrjTabFldNumEN>();
  const arrvPrjTabFldNumObjLstCache = await vPrjTabFldNum_GetObjLstCache(strPrjId);
  if (arrvPrjTabFldNumObjLstCache.length == 0) return arrvPrjTabFldNumObjLstCache;
  let arrvPrjTabFldNumSel = arrvPrjTabFldNumObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objvPrjTabFldNumCond = new clsvPrjTabFldNumEN();
  ObjectAssign(objvPrjTabFldNumCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsvPrjTabFldNumWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvPrjTabFldNumSel = arrvPrjTabFldNumSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvPrjTabFldNumCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvPrjTabFldNumSel = arrvPrjTabFldNumSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvPrjTabFldNumSel = arrvPrjTabFldNumSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvPrjTabFldNumSel = arrvPrjTabFldNumSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvPrjTabFldNumSel = arrvPrjTabFldNumSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvPrjTabFldNumSel = arrvPrjTabFldNumSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvPrjTabFldNumSel = arrvPrjTabFldNumSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvPrjTabFldNumSel = arrvPrjTabFldNumSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrvPrjTabFldNumSel = arrvPrjTabFldNumSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvPrjTabFldNumSel = arrvPrjTabFldNumSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvPrjTabFldNumSel = arrvPrjTabFldNumSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvPrjTabFldNumSel = arrvPrjTabFldNumSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvPrjTabFldNumSel = arrvPrjTabFldNumSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvPrjTabFldNumSel = arrvPrjTabFldNumSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvPrjTabFldNumSel = arrvPrjTabFldNumSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrvPrjTabFldNumSel.length == 0) return arrvPrjTabFldNumSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrvPrjTabFldNumSel = arrvPrjTabFldNumSel.sort(
        vPrjTabFldNum_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrvPrjTabFldNumSel = arrvPrjTabFldNumSel.sort(objPagerPara.sortFun);
    }
    arrvPrjTabFldNumSel = arrvPrjTabFldNumSel.slice(intStart, intEnd);
    return arrvPrjTabFldNumSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      vPrjTabFldNum_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvPrjTabFldNumEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function vPrjTabFldNum_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsvPrjTabFldNumEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsvPrjTabFldNumEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(vPrjTabFldNum_Controller, strAction);

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
          vPrjTabFldNum_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vPrjTabFldNum_GetObjLstByJSONObjLst(returnObjLst);
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
        vPrjTabFldNum_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vPrjTabFldNum_ConstructorName,
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
export async function vPrjTabFldNum_IsExistRecordCache(
  objvPrjTabFldNumCond: clsvPrjTabFldNumEN,
  strPrjId: string,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrvPrjTabFldNumObjLstCache = await vPrjTabFldNum_GetObjLstCache(strPrjId);
  if (arrvPrjTabFldNumObjLstCache == null) return false;
  let arrvPrjTabFldNumSel = arrvPrjTabFldNumObjLstCache;
  if (
    objvPrjTabFldNumCond.sfFldComparisonOp == null ||
    objvPrjTabFldNumCond.sfFldComparisonOp == ''
  )
    return arrvPrjTabFldNumSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvPrjTabFldNumCond.sfFldComparisonOp,
  );
  //console.log("clsvPrjTabFldNumWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvPrjTabFldNumCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvPrjTabFldNumCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvPrjTabFldNumSel = arrvPrjTabFldNumSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvPrjTabFldNumSel = arrvPrjTabFldNumSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvPrjTabFldNumSel = arrvPrjTabFldNumSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvPrjTabFldNumSel = arrvPrjTabFldNumSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvPrjTabFldNumSel = arrvPrjTabFldNumSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvPrjTabFldNumSel = arrvPrjTabFldNumSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvPrjTabFldNumSel = arrvPrjTabFldNumSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvPrjTabFldNumSel = arrvPrjTabFldNumSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvPrjTabFldNumSel = arrvPrjTabFldNumSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvPrjTabFldNumSel = arrvPrjTabFldNumSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvPrjTabFldNumSel = arrvPrjTabFldNumSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvPrjTabFldNumSel = arrvPrjTabFldNumSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvPrjTabFldNumSel = arrvPrjTabFldNumSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrvPrjTabFldNumSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objvPrjTabFldNumCond),
      vPrjTabFldNum_ConstructorName,
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
export async function vPrjTabFldNum_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(vPrjTabFldNum_Controller, strAction);

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
        vPrjTabFldNum_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vPrjTabFldNum_ConstructorName,
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
export async function vPrjTabFldNum_IsExistCache(strTabId: string, strPrjId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrvPrjTabFldNumObjLstCache = await vPrjTabFldNum_GetObjLstCache(strPrjId);
  if (arrvPrjTabFldNumObjLstCache == null) return false;
  try {
    const arrvPrjTabFldNumSel = arrvPrjTabFldNumObjLstCache.filter((x) => x.tabId == strTabId);
    if (arrvPrjTabFldNumSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strTabId,
      vPrjTabFldNum_ConstructorName,
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
export async function vPrjTabFldNum_IsExistAsync(strTabId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(vPrjTabFldNum_Controller, strAction);

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
        vPrjTabFldNum_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vPrjTabFldNum_ConstructorName,
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
export async function vPrjTabFldNum_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(vPrjTabFldNum_Controller, strAction);

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
        vPrjTabFldNum_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vPrjTabFldNum_ConstructorName,
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
 * @param objvPrjTabFldNumCond:条件对象
 * @returns 对象列表记录数
 */
export async function vPrjTabFldNum_GetRecCountByCondCache(
  objvPrjTabFldNumCond: clsvPrjTabFldNumEN,
  strPrjId: string,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrvPrjTabFldNumObjLstCache = await vPrjTabFldNum_GetObjLstCache(strPrjId);
  if (arrvPrjTabFldNumObjLstCache == null) return 0;
  let arrvPrjTabFldNumSel = arrvPrjTabFldNumObjLstCache;
  if (
    objvPrjTabFldNumCond.sfFldComparisonOp == null ||
    objvPrjTabFldNumCond.sfFldComparisonOp == ''
  )
    return arrvPrjTabFldNumSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvPrjTabFldNumCond.sfFldComparisonOp,
  );
  //console.log("clsvPrjTabFldNumWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvPrjTabFldNumCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvPrjTabFldNumSel = arrvPrjTabFldNumSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvPrjTabFldNumCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvPrjTabFldNumSel = arrvPrjTabFldNumSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvPrjTabFldNumSel = arrvPrjTabFldNumSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvPrjTabFldNumSel = arrvPrjTabFldNumSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvPrjTabFldNumSel = arrvPrjTabFldNumSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvPrjTabFldNumSel = arrvPrjTabFldNumSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvPrjTabFldNumSel = arrvPrjTabFldNumSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvPrjTabFldNumSel = arrvPrjTabFldNumSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrvPrjTabFldNumSel = arrvPrjTabFldNumSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvPrjTabFldNumSel = arrvPrjTabFldNumSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvPrjTabFldNumSel = arrvPrjTabFldNumSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvPrjTabFldNumSel = arrvPrjTabFldNumSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvPrjTabFldNumSel = arrvPrjTabFldNumSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvPrjTabFldNumSel = arrvPrjTabFldNumSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvPrjTabFldNumSel = arrvPrjTabFldNumSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrvPrjTabFldNumSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvPrjTabFldNumCond),
      vPrjTabFldNum_ConstructorName,
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
export function vPrjTabFldNum_GetWebApiUrl(strController: string, strAction: string): string {
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
export function vPrjTabFldNum_ReFreshThisCache(strPrjId: string): void {
  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空!(In clsvPrjTabFldNumWApi.vPrjTabFldNum_ReFreshThisCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确!(clsvPrjTabFldNumWApi.vPrjTabFldNum_ReFreshThisCache)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = Format('{0}_{1}', clsvPrjTabFldNumEN._CurrTabName, strPrjId);
    switch (clsvPrjTabFldNumEN.CacheModeId) {
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
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vPrjTabFldNum_GetJSONStrByObj(pobjvPrjTabFldNumEN: clsvPrjTabFldNumEN): string {
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjvPrjTabFldNumEN);
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
export function vPrjTabFldNum_GetObjLstByJSONStr(strJSON: string): Array<clsvPrjTabFldNumEN> {
  let arrvPrjTabFldNumObjLst = new Array<clsvPrjTabFldNumEN>();
  if (strJSON === '') {
    return arrvPrjTabFldNumObjLst;
  }
  try {
    arrvPrjTabFldNumObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrvPrjTabFldNumObjLst;
  }
  return arrvPrjTabFldNumObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvPrjTabFldNumObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function vPrjTabFldNum_GetObjLstByJSONObjLst(
  arrvPrjTabFldNumObjLstS: Array<clsvPrjTabFldNumEN>,
): Array<clsvPrjTabFldNumEN> {
  const arrvPrjTabFldNumObjLst = new Array<clsvPrjTabFldNumEN>();
  for (const objInFor of arrvPrjTabFldNumObjLstS) {
    const obj1 = vPrjTabFldNum_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrvPrjTabFldNumObjLst.push(obj1);
  }
  return arrvPrjTabFldNumObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vPrjTabFldNum_GetObjByJSONStr(strJSON: string): clsvPrjTabFldNumEN {
  let pobjvPrjTabFldNumEN = new clsvPrjTabFldNumEN();
  if (strJSON === '') {
    return pobjvPrjTabFldNumEN;
  }
  try {
    pobjvPrjTabFldNumEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjvPrjTabFldNumEN;
  }
  return pobjvPrjTabFldNumEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function vPrjTabFldNum_GetCombineCondition(
  objvPrjTabFldNumCond: clsvPrjTabFldNumEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objvPrjTabFldNumCond.dicFldComparisonOp,
      clsvPrjTabFldNumEN.con_TabId,
    ) == true
  ) {
    const strComparisonOpTabId: string =
      objvPrjTabFldNumCond.dicFldComparisonOp[clsvPrjTabFldNumEN.con_TabId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvPrjTabFldNumEN.con_TabId,
      objvPrjTabFldNumCond.tabId,
      strComparisonOpTabId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvPrjTabFldNumCond.dicFldComparisonOp,
      clsvPrjTabFldNumEN.con_FldNum,
    ) == true
  ) {
    const strComparisonOpFldNum: string =
      objvPrjTabFldNumCond.dicFldComparisonOp[clsvPrjTabFldNumEN.con_FldNum];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvPrjTabFldNumEN.con_FldNum,
      objvPrjTabFldNumCond.fldNum,
      strComparisonOpFldNum,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvPrjTabFldNumCond.dicFldComparisonOp,
      clsvPrjTabFldNumEN.con_PrjId,
    ) == true
  ) {
    const strComparisonOpPrjId: string =
      objvPrjTabFldNumCond.dicFldComparisonOp[clsvPrjTabFldNumEN.con_PrjId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvPrjTabFldNumEN.con_PrjId,
      objvPrjTabFldNumCond.prjId,
      strComparisonOpPrjId,
    );
  }
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvPrjTabFldNumENS:源对象
 * @param objvPrjTabFldNumENT:目标对象
 */
export function vPrjTabFldNum_GetObjFromJsonObj(
  objvPrjTabFldNumENS: clsvPrjTabFldNumEN,
): clsvPrjTabFldNumEN {
  const objvPrjTabFldNumENT: clsvPrjTabFldNumEN = new clsvPrjTabFldNumEN();
  ObjectAssign(objvPrjTabFldNumENT, objvPrjTabFldNumENS);
  return objvPrjTabFldNumENT;
}
