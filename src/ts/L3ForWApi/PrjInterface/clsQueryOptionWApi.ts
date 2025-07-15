/**
 * 类名:clsQueryOptionWApi
 * 表名:QueryOption(00050080)
 * 版本:2025.05.26.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/01 23:48:34
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 应用类型:Vue应用InCore-TS(30)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:界面管理(PrjInterface)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 查询选项(QueryOption)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2025年06月01日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty, GetStrLen, tzDataType, Format } from '@/ts/PubFun/clsString';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { CacheHelper } from '@/ts/PubFun/CacheHelper';
import { ConditionCollection } from '@/ts/PubFun/ConditionCollection';
import { AddRecordResult } from '@/ts/PubFun/AddRecordResult';
import {
  BindDdl_ObjLstInDivObj,
  GetExceptionStr,
  myShowErrorMsg,
  ObjectAssign,
} from '@/ts/PubFun/clsCommFunc4Web';
import { clsQueryOptionEN } from '@/ts/L0Entity/PrjInterface/clsQueryOptionEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';

export const queryOption_Controller = 'QueryOptionApi';
export const queryOption_ConstructorName = 'queryOption';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strQueryOptionId:关键字
 * @returns 对象
 **/
export async function QueryOption_GetObjByQueryOptionIdAsync(
  strQueryOptionId: string,
): Promise<clsQueryOptionEN | null> {
  const strThisFuncName = 'GetObjByQueryOptionIdAsync';

  if (IsNullOrEmpty(strQueryOptionId) == true) {
    const strMsg = Format(
      '参数:[strQueryOptionId]不能为空!(In clsQueryOptionWApi.GetObjByQueryOptionIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByQueryOptionId';
  const strUrl = GetWebApiUrl(queryOption_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strQueryOptionId,
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
      const objQueryOption = QueryOption_GetObjFromJsonObj(returnObj);
      return objQueryOption;
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
        queryOption_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        queryOption_ConstructorName,
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
 * @param strQueryOptionId:所给的关键字
 * @returns 对象
 */
export async function QueryOption_GetObjByQueryOptionIdlocalStorage(strQueryOptionId: string) {
  const strThisFuncName = 'GetObjByQueryOptionIdlocalStorage';

  if (IsNullOrEmpty(strQueryOptionId) == true) {
    const strMsg = Format(
      '参数:[strQueryOptionId]不能为空!(In clsQueryOptionWApi.GetObjByQueryOptionIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsQueryOptionEN._CurrTabName, strQueryOptionId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objQueryOptionCache: clsQueryOptionEN = JSON.parse(strTempObj);
    return objQueryOptionCache;
  }
  try {
    const objQueryOption = await QueryOption_GetObjByQueryOptionIdAsync(strQueryOptionId);
    if (objQueryOption != null) {
      localStorage.setItem(strKey, JSON.stringify(objQueryOption));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objQueryOption;
    }
    return objQueryOption;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strQueryOptionId,
      queryOption_ConstructorName,
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
 * @param strQueryOptionId:所给的关键字
 * @returns 对象
 */
export async function QueryOption_GetObjByQueryOptionIdCache(
  strQueryOptionId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByQueryOptionIdCache';

  if (IsNullOrEmpty(strQueryOptionId) == true) {
    const strMsg = Format(
      '参数:[strQueryOptionId]不能为空!(In clsQueryOptionWApi.GetObjByQueryOptionIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrQueryOptionObjLstCache = await QueryOption_GetObjLstCache();
  try {
    const arrQueryOptionSel = arrQueryOptionObjLstCache.filter(
      (x) => x.queryOptionId == strQueryOptionId,
    );
    let objQueryOption: clsQueryOptionEN;
    if (arrQueryOptionSel.length > 0) {
      objQueryOption = arrQueryOptionSel[0];
      return objQueryOption;
    } else {
      if (bolTryAsyncOnce == true) {
        const objQueryOptionConst = await QueryOption_GetObjByQueryOptionIdAsync(strQueryOptionId);
        if (objQueryOptionConst != null) {
          QueryOption_ReFreshThisCache();
          return objQueryOptionConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strQueryOptionId,
      queryOption_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objQueryOption:所给的对象
 * @returns 对象
 */
export async function QueryOption_UpdateObjInLstCache(objQueryOption: clsQueryOptionEN) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrQueryOptionObjLstCache = await QueryOption_GetObjLstCache();
    const obj = arrQueryOptionObjLstCache.find(
      (x) => x.queryOptionId == objQueryOption.queryOptionId,
    );
    if (obj != null) {
      objQueryOption.queryOptionId = obj.queryOptionId;
      ObjectAssign(obj, objQueryOption);
    } else {
      arrQueryOptionObjLstCache.push(objQueryOption);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      queryOption_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-06-01
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function QueryOption_SortFunDefa(a: clsQueryOptionEN, b: clsQueryOptionEN): number {
  return a.queryOptionId.localeCompare(b.queryOptionId);
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2025-06-01
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function QueryOption_SortFunDefa2Fld(a: clsQueryOptionEN, b: clsQueryOptionEN): number {
  if (a.queryOptionName == b.queryOptionName)
    return a.queryOptionENName.localeCompare(b.queryOptionENName);
  else return a.queryOptionName.localeCompare(b.queryOptionName);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-06-01
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function QueryOption_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsQueryOptionEN.con_QueryOptionId:
        return (a: clsQueryOptionEN, b: clsQueryOptionEN) => {
          return a.queryOptionId.localeCompare(b.queryOptionId);
        };
      case clsQueryOptionEN.con_QueryOptionName:
        return (a: clsQueryOptionEN, b: clsQueryOptionEN) => {
          return a.queryOptionName.localeCompare(b.queryOptionName);
        };
      case clsQueryOptionEN.con_QueryOptionENName:
        return (a: clsQueryOptionEN, b: clsQueryOptionEN) => {
          if (a.queryOptionENName == null) return -1;
          if (b.queryOptionENName == null) return 1;
          return a.queryOptionENName.localeCompare(b.queryOptionENName);
        };
      case clsQueryOptionEN.con_Memo:
        return (a: clsQueryOptionEN, b: clsQueryOptionEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[QueryOption]中不存在!(in ${queryOption_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsQueryOptionEN.con_QueryOptionId:
        return (a: clsQueryOptionEN, b: clsQueryOptionEN) => {
          return b.queryOptionId.localeCompare(a.queryOptionId);
        };
      case clsQueryOptionEN.con_QueryOptionName:
        return (a: clsQueryOptionEN, b: clsQueryOptionEN) => {
          return b.queryOptionName.localeCompare(a.queryOptionName);
        };
      case clsQueryOptionEN.con_QueryOptionENName:
        return (a: clsQueryOptionEN, b: clsQueryOptionEN) => {
          if (b.queryOptionENName == null) return -1;
          if (a.queryOptionENName == null) return 1;
          return b.queryOptionENName.localeCompare(a.queryOptionENName);
        };
      case clsQueryOptionEN.con_Memo:
        return (a: clsQueryOptionEN, b: clsQueryOptionEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[QueryOption]中不存在!(in ${queryOption_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strQueryOptionId:所给的关键字
 * @returns 对象
 */
export async function QueryOption_GetNameByQueryOptionIdCache(strQueryOptionId: string) {
  if (IsNullOrEmpty(strQueryOptionId) == true) {
    const strMsg = Format(
      '参数:[strQueryOptionId]不能为空!(In clsQueryOptionWApi.GetNameByQueryOptionIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrQueryOptionObjLstCache = await QueryOption_GetObjLstCache();
  if (arrQueryOptionObjLstCache == null) return '';
  try {
    const arrQueryOptionSel = arrQueryOptionObjLstCache.filter(
      (x) => x.queryOptionId == strQueryOptionId,
    );
    let objQueryOption: clsQueryOptionEN;
    if (arrQueryOptionSel.length > 0) {
      objQueryOption = arrQueryOptionSel[0];
      return objQueryOption.queryOptionName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strQueryOptionId,
    );
    console.error(strMsg);
    alert(strMsg);
  }
  return '';
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-06-01
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function QueryOption_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsQueryOptionEN.con_QueryOptionId:
      return (obj: clsQueryOptionEN) => {
        return obj.queryOptionId === value;
      };
    case clsQueryOptionEN.con_QueryOptionName:
      return (obj: clsQueryOptionEN) => {
        return obj.queryOptionName === value;
      };
    case clsQueryOptionEN.con_QueryOptionENName:
      return (obj: clsQueryOptionEN) => {
        return obj.queryOptionENName === value;
      };
    case clsQueryOptionEN.con_Memo:
      return (obj: clsQueryOptionEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[QueryOption]中不存在!(in ${queryOption_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2025-06-01
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 * @returns 返回一个输出字段值
 */
export async function QueryOption_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsQueryOptionEN.con_QueryOptionId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsQueryOptionEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsQueryOptionEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strQueryOptionId = strInValue;
  if (IsNullOrEmpty(strQueryOptionId) == true) {
    return '';
  }
  const objQueryOption = await QueryOption_GetObjByQueryOptionIdCache(strQueryOptionId);
  if (objQueryOption == null) return '';
  if (objQueryOption.GetFldValue(strOutFldName) == null) return '';
  return objQueryOption.GetFldValue(strOutFldName).toString();
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2025-06-01
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 * @returns 返回一个关键字值列表
 */
export async function QueryOption_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsQueryOptionEN.con_QueryOptionId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrQueryOption = await QueryOption_GetObjLstCache();
  if (arrQueryOption == null) return [];
  let arrQueryOptionSel = arrQueryOption;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrQueryOptionSel = arrQueryOptionSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrQueryOptionSel = arrQueryOptionSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrQueryOptionSel = arrQueryOptionSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrQueryOptionSel = arrQueryOptionSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrQueryOptionSel = arrQueryOptionSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrQueryOptionSel = arrQueryOptionSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrQueryOptionSel = arrQueryOptionSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrQueryOptionSel = arrQueryOptionSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrQueryOptionSel = arrQueryOptionSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrQueryOptionSel = arrQueryOptionSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrQueryOptionSel.length == 0) return [];
  return arrQueryOptionSel.map((x) => x.queryOptionId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function QueryOption_GetFldValueAsync(
  strFldName: string,
  strWhereCond: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetFldValueAsync';
  const strAction = 'GetFldValue';
  const strUrl = GetWebApiUrl(queryOption_Controller, strAction);

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
        queryOption_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        queryOption_ConstructorName,
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
export async function QueryOption_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(queryOption_Controller, strAction);

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
        queryOption_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        queryOption_ConstructorName,
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
export async function QueryOption_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(queryOption_Controller, strAction);

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
        queryOption_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        queryOption_ConstructorName,
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
export async function QueryOption_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsQueryOptionEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(queryOption_Controller, strAction);

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
      const objQueryOption = QueryOption_GetObjFromJsonObj(returnObj);
      return objQueryOption;
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
        queryOption_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        queryOption_ConstructorName,
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
export async function QueryOption_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsQueryOptionEN._CurrTabName;
  if (IsNullOrEmpty(clsQueryOptionEN.WhereFormat) == false) {
    strWhereCond = clsQueryOptionEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsQueryOptionEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsQueryOptionEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrQueryOptionExObjLstCache: Array<clsQueryOptionEN> = CacheHelper.Get(strKey);
    const arrQueryOptionObjLstT = QueryOption_GetObjLstByJSONObjLst(arrQueryOptionExObjLstCache);
    return arrQueryOptionObjLstT;
  }
  try {
    const arrQueryOptionExObjLst = await QueryOption_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrQueryOptionExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrQueryOptionExObjLst.length,
    );
    console.log(strInfo);
    return arrQueryOptionExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      queryOption_ConstructorName,
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
export async function QueryOption_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsQueryOptionEN._CurrTabName;
  if (IsNullOrEmpty(clsQueryOptionEN.WhereFormat) == false) {
    strWhereCond = clsQueryOptionEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsQueryOptionEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsQueryOptionEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrQueryOptionExObjLstCache: Array<clsQueryOptionEN> = JSON.parse(strTempObjLst);
    const arrQueryOptionObjLstT = QueryOption_GetObjLstByJSONObjLst(arrQueryOptionExObjLstCache);
    return arrQueryOptionObjLstT;
  }
  try {
    const arrQueryOptionExObjLst = await QueryOption_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrQueryOptionExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrQueryOptionExObjLst.length,
    );
    console.log(strInfo);
    return arrQueryOptionExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      queryOption_ConstructorName,
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
export async function QueryOption_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsQueryOptionEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrQueryOptionObjLstCache: Array<clsQueryOptionEN> = JSON.parse(strTempObjLst);
    return arrQueryOptionObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function QueryOption_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsQueryOptionEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(queryOption_Controller, strAction);

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
          queryOption_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = QueryOption_GetObjLstByJSONObjLst(returnObjLst);
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
        queryOption_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        queryOption_ConstructorName,
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
export async function QueryOption_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsQueryOptionEN._CurrTabName;
  if (IsNullOrEmpty(clsQueryOptionEN.WhereFormat) == false) {
    strWhereCond = clsQueryOptionEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsQueryOptionEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsQueryOptionEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrQueryOptionExObjLstCache: Array<clsQueryOptionEN> = JSON.parse(strTempObjLst);
    const arrQueryOptionObjLstT = QueryOption_GetObjLstByJSONObjLst(arrQueryOptionExObjLstCache);
    return arrQueryOptionObjLstT;
  }
  try {
    const arrQueryOptionExObjLst = await QueryOption_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrQueryOptionExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrQueryOptionExObjLst.length,
    );
    console.log(strInfo);
    return arrQueryOptionExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      queryOption_ConstructorName,
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
export async function QueryOption_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsQueryOptionEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrQueryOptionObjLstCache: Array<clsQueryOptionEN> = JSON.parse(strTempObjLst);
    return arrQueryOptionObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function QueryOption_GetObjLstCache(): Promise<Array<clsQueryOptionEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrQueryOptionObjLstCache;
  switch (clsQueryOptionEN.CacheModeId) {
    case '04': //sessionStorage
      arrQueryOptionObjLstCache = await QueryOption_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrQueryOptionObjLstCache = await QueryOption_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrQueryOptionObjLstCache = await QueryOption_GetObjLstClientCache();
      break;
    default:
      arrQueryOptionObjLstCache = await QueryOption_GetObjLstClientCache();
      break;
  }
  return arrQueryOptionObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function QueryOption_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrQueryOptionObjLstCache;
  switch (clsQueryOptionEN.CacheModeId) {
    case '04': //sessionStorage
      arrQueryOptionObjLstCache = await QueryOption_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrQueryOptionObjLstCache = await QueryOption_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrQueryOptionObjLstCache = null;
      break;
    default:
      arrQueryOptionObjLstCache = null;
      break;
  }
  return arrQueryOptionObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrQueryOptionIdCond:条件对象
 * @returns 对象列表子集
 */
export async function QueryOption_GetSubObjLstCache(objQueryOptionCond: ConditionCollection) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrQueryOptionObjLstCache = await QueryOption_GetObjLstCache();
  let arrQueryOptionSel = arrQueryOptionObjLstCache;
  if (objQueryOptionCond.GetConditions().length == 0) return arrQueryOptionSel;
  try {
    //console.log(sstrKeys);
    for (const objCondition of objQueryOptionCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrQueryOptionSel = arrQueryOptionSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrQueryOptionSel = arrQueryOptionSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrQueryOptionSel = arrQueryOptionSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrQueryOptionSel = arrQueryOptionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrQueryOptionSel = arrQueryOptionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrQueryOptionSel = arrQueryOptionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrQueryOptionSel = arrQueryOptionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrQueryOptionSel = arrQueryOptionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrQueryOptionSel = arrQueryOptionSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrQueryOptionSel = arrQueryOptionSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrQueryOptionSel = arrQueryOptionSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrQueryOptionSel = arrQueryOptionSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrQueryOptionSel = arrQueryOptionSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrQueryOptionSel = arrQueryOptionSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrQueryOptionSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objQueryOptionCond),
      queryOption_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsQueryOptionEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrQueryOptionId:关键字列表
 * @returns 对象列表
 **/
export async function QueryOption_GetObjLstByQueryOptionIdLstAsync(
  arrQueryOptionId: Array<string>,
): Promise<Array<clsQueryOptionEN>> {
  const strThisFuncName = 'GetObjLstByQueryOptionIdLstAsync';
  const strAction = 'GetObjLstByQueryOptionIdLst';
  const strUrl = GetWebApiUrl(queryOption_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrQueryOptionId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          queryOption_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = QueryOption_GetObjLstByJSONObjLst(returnObjLst);
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
        queryOption_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        queryOption_ConstructorName,
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
 * @param arrstrQueryOptionIdLst:关键字列表
 * @returns 对象列表
 */
export async function QueryOption_GetObjLstByQueryOptionIdLstCache(
  arrQueryOptionIdLst: Array<string>,
) {
  const strThisFuncName = 'GetObjLstByQueryOptionIdLstCache';
  try {
    const arrQueryOptionObjLstCache = await QueryOption_GetObjLstCache();
    const arrQueryOptionSel = arrQueryOptionObjLstCache.filter(
      (x) => arrQueryOptionIdLst.indexOf(x.queryOptionId) > -1,
    );
    return arrQueryOptionSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrQueryOptionIdLst.join(','),
      queryOption_ConstructorName,
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
export async function QueryOption_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsQueryOptionEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(queryOption_Controller, strAction);

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
          queryOption_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = QueryOption_GetObjLstByJSONObjLst(returnObjLst);
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
        queryOption_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        queryOption_ConstructorName,
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
export async function QueryOption_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsQueryOptionEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(queryOption_Controller, strAction);

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
          queryOption_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = QueryOption_GetObjLstByJSONObjLst(returnObjLst);
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
        queryOption_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        queryOption_ConstructorName,
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

/**
 * 调用WebApi来删除记录,根据关键字来删除记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelRecordAsync)
 * @param strQueryOptionId:关键字
 * @returns 获取删除的结果
 **/
export async function QueryOption_DelRecordAsync(strQueryOptionId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(queryOption_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strQueryOptionId);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const configDel = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.delete(strUrl, configDel);
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
        queryOption_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        queryOption_ConstructorName,
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
 * 根据关键字列表删除记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelMultiRecordAsync)
 * @param arrQueryOptionId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function QueryOption_DelQueryOptionsAsync(
  arrQueryOptionId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelQueryOptionsAsync';
  const strAction = 'DelQueryOptions';
  const strUrl = GetWebApiUrl(queryOption_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrQueryOptionId, config);
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
        queryOption_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        queryOption_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjExLstByPagerCache)
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CopyToEx)
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMapByFldName)
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByExKey)
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)

/**
 * 根据条件删除记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelMultiRecordByCondAsync)
 * @returns 实际删除记录的个数
 **/
export async function QueryOption_DelQueryOptionsByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelQueryOptionsByCondAsync';
  const strAction = 'DelQueryOptionsByCond';
  const strUrl = GetWebApiUrl(queryOption_Controller, strAction);

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
        queryOption_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        queryOption_ConstructorName,
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
 * 调用WebApi来添加记录,数据传递使用JSON串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordAsync)
 * @param objQueryOptionEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function QueryOption_AddNewRecordAsync(
  objQueryOptionEN: clsQueryOptionEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  if (objQueryOptionEN.queryOptionId === null || objQueryOptionEN.queryOptionId === '') {
    const strMsg = '需要的对象的关键字为空,不能添加!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objQueryOptionEN);
  const strUrl = GetWebApiUrl(queryOption_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objQueryOptionEN, config);
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
        queryOption_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        queryOption_ConstructorName,
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
 * 调用WebApi来添加记录,关键字用最大关键字,数据传递使用JSON串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithMaxIdAsync)
 * @param objQueryOptionEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function QueryOption_AddNewRecordWithMaxIdAsync(
  objQueryOptionEN: clsQueryOptionEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(queryOption_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objQueryOptionEN, config);
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
        queryOption_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        queryOption_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

/** 添加新记录,保存函数
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewObjSave)
 **/
export async function QueryOption_AddNewObjSave(
  objQueryOptionEN: clsQueryOptionEN,
): Promise<AddRecordResult> {
  const strThisFuncName = 'AddNewObjSave';
  try {
    QueryOption_CheckPropertyNew(objQueryOptionEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${queryOption_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    alert(strMsg);
    return { keyword: '', success: false }; //一定要有一个返回值,否则会出错!
  }
  try {
    //检查唯一性条件
    let returnBool = false;
    const bolIsExist = await QueryOption_IsExistAsync(objQueryOptionEN.queryOptionId);
    if (bolIsExist == true) {
      const strMsg = Format('添加记录时,关键字：{0}已经存在!', objQueryOptionEN.queryOptionId);
      console.error(strMsg);
      throw strMsg;
    }
    returnBool = await QueryOption_AddNewRecordAsync(objQueryOptionEN);
    if (returnBool == true) {
      QueryOption_ReFreshCache();
    } else {
      const strInfo = `添加[查询选项(QueryOption)]记录不成功!`;
      //显示信息框
      throw strInfo;
    }
    return { keyword: objQueryOptionEN.queryOptionId, success: returnBool }; //一定要有一个返回值,否则会出错!
  } catch (e) {
    const strMsg = `添加记录不成功,${e}.(in ${queryOption_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/** 修改记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjSave)
 **/
export async function QueryOption_UpdateObjSave(
  objQueryOptionEN: clsQueryOptionEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateObjSave';
  objQueryOptionEN.sfUpdFldSetStr = objQueryOptionEN.updFldString; //设置哪些字段被修改(脏字段)
  if (objQueryOptionEN.queryOptionId == '' || objQueryOptionEN.queryOptionId == undefined) {
    console.error('关键字不能为空!');
    throw '关键字不能为空!';
  }
  try {
    QueryOption_CheckProperty4Update(objQueryOptionEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${queryOption_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
  try {
    //检查唯一性条件
    const returnBool = await QueryOption_UpdateRecordAsync(objQueryOptionEN);
    if (returnBool == true) {
      QueryOption_ReFreshCache();
    }
    return returnBool;
  } catch (e) {
    const strMsg = `修改记录不成功,${e}.(in ${queryOption_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objQueryOptionEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function QueryOption_AddNewRecordWithReturnKeyAsync(
  objQueryOptionEN: clsQueryOptionEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(queryOption_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objQueryOptionEN, config);
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
        queryOption_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        queryOption_ConstructorName,
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
 * 调用WebApi来修改记录,数据传递使用JSON串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateRecordAsync)
 * @param objQueryOptionEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function QueryOption_UpdateRecordAsync(
  objQueryOptionEN: clsQueryOptionEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objQueryOptionEN.sfUpdFldSetStr === undefined ||
    objQueryOptionEN.sfUpdFldSetStr === null ||
    objQueryOptionEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objQueryOptionEN.queryOptionId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(queryOption_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objQueryOptionEN, config);
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
        queryOption_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        queryOption_ConstructorName,
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
 * 调用WebApi来编辑记录（存在就修改，不存在就添加）,数据传递使用JSON串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_EditRecordExAsync)
 * @param objQueryOptionEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function QueryOption_EditRecordExAsync(
  objQueryOptionEN: clsQueryOptionEN,
): Promise<boolean> {
  const strThisFuncName = 'EditRecordExAsync';
  const strAction = 'EditRecordEx';
  if (
    objQueryOptionEN.sfUpdFldSetStr === undefined ||
    objQueryOptionEN.sfUpdFldSetStr === null ||
    objQueryOptionEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objQueryOptionEN.queryOptionId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(queryOption_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objQueryOptionEN, config);
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
        queryOption_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        queryOption_ConstructorName,
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
 * 根据条件来修改记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateWithConditionAsync)
 * @param objQueryOptionEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function QueryOption_UpdateWithConditionAsync(
  objQueryOptionEN: clsQueryOptionEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objQueryOptionEN.sfUpdFldSetStr === undefined ||
    objQueryOptionEN.sfUpdFldSetStr === null ||
    objQueryOptionEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objQueryOptionEN.queryOptionId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(queryOption_Controller, strAction);
  objQueryOptionEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objQueryOptionEN, config);
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
        queryOption_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        queryOption_ConstructorName,
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
 * @param objstrQueryOptionIdCond:条件对象
 * @returns 对象列表子集
 */
export async function QueryOption_IsExistRecordCache(objQueryOptionCond: ConditionCollection) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrQueryOptionObjLstCache = await QueryOption_GetObjLstCache();
  if (arrQueryOptionObjLstCache == null) return false;
  let arrQueryOptionSel = arrQueryOptionObjLstCache;
  if (objQueryOptionCond.GetConditions().length == 0)
    return arrQueryOptionSel.length > 0 ? true : false;
  try {
    for (const objCondition of objQueryOptionCond.GetConditions()) {
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
            arrQueryOptionSel = arrQueryOptionSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrQueryOptionSel = arrQueryOptionSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrQueryOptionSel = arrQueryOptionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrQueryOptionSel = arrQueryOptionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrQueryOptionSel = arrQueryOptionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrQueryOptionSel = arrQueryOptionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrQueryOptionSel = arrQueryOptionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrQueryOptionSel = arrQueryOptionSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrQueryOptionSel = arrQueryOptionSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrQueryOptionSel = arrQueryOptionSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrQueryOptionSel = arrQueryOptionSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrQueryOptionSel = arrQueryOptionSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrQueryOptionSel = arrQueryOptionSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrQueryOptionSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objQueryOptionCond),
      queryOption_ConstructorName,
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
export async function QueryOption_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(queryOption_Controller, strAction);

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
        queryOption_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        queryOption_ConstructorName,
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
 * @param strQueryOptionId:所给的关键字
 * @returns 对象
 */
export async function QueryOption_IsExistCache(strQueryOptionId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrQueryOptionObjLstCache = await QueryOption_GetObjLstCache();
  if (arrQueryOptionObjLstCache == null) return false;
  try {
    const arrQueryOptionSel = arrQueryOptionObjLstCache.filter(
      (x) => x.queryOptionId == strQueryOptionId,
    );
    if (arrQueryOptionSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strQueryOptionId,
      queryOption_ConstructorName,
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
 * @param strQueryOptionId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function QueryOption_IsExistAsync(strQueryOptionId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(queryOption_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strQueryOptionId,
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
        queryOption_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        queryOption_ConstructorName,
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
export async function QueryOption_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(queryOption_Controller, strAction);

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
        queryOption_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        queryOption_ConstructorName,
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
 * @param objQueryOptionCond:条件对象
 * @returns 对象列表记录数
 */
export async function QueryOption_GetRecCountByCondCache(objQueryOptionCond: ConditionCollection) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrQueryOptionObjLstCache = await QueryOption_GetObjLstCache();
  if (arrQueryOptionObjLstCache == null) return 0;
  let arrQueryOptionSel = arrQueryOptionObjLstCache;
  if (objQueryOptionCond.GetConditions().length == 0) return arrQueryOptionSel.length;
  try {
    for (const objCondition of objQueryOptionCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrQueryOptionSel = arrQueryOptionSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrQueryOptionSel = arrQueryOptionSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrQueryOptionSel = arrQueryOptionSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrQueryOptionSel = arrQueryOptionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrQueryOptionSel = arrQueryOptionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrQueryOptionSel = arrQueryOptionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrQueryOptionSel = arrQueryOptionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrQueryOptionSel = arrQueryOptionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrQueryOptionSel = arrQueryOptionSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrQueryOptionSel = arrQueryOptionSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrQueryOptionSel = arrQueryOptionSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrQueryOptionSel = arrQueryOptionSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrQueryOptionSel = arrQueryOptionSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrQueryOptionSel = arrQueryOptionSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrQueryOptionSel = arrQueryOptionSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrQueryOptionSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objQueryOptionCond),
      queryOption_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return 0;
}
/*该表的关键字类型不是字符型自增,不需要生成获取最大关键字函数!*/
/*该表的关键字类型不是字符型带前缀自增,不需要生成获取最大关键字函数!*/

/**
 * 根据前缀获取当前表关键字值的最大值,再加1,避免重复
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetMaxStrIdByPrefix)
 * @param mapParam:参数列表
 * @returns 获取当前表关键字值的最大值
 */
export async function QueryOption_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(queryOption_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strPrefix,
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
        queryOption_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        queryOption_ConstructorName,
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
 * 获取WebApi的地址
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 */
export function QueryOption_GetWebApiUrl(strController: string, strAction: string): string {
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
 * 刷新缓存.把当前表的缓存以及该表相关视图的缓存清空.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshCache)
 **/
export function QueryOption_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功!');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clsQueryOptionEN._CurrTabName;
  switch (clsQueryOptionEN.CacheModeId) {
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
  clsQueryOptionEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
}

/**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export function QueryOption_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsQueryOptionEN._CurrTabName;
    switch (clsQueryOptionEN.CacheModeId) {
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
    clsQueryOptionEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export function QueryOption_GetLastRefreshTime(): string {
  if (clsQueryOptionEN._RefreshTimeLst.length == 0) return '';
  return clsQueryOptionEN._RefreshTimeLst[clsQueryOptionEN._RefreshTimeLst.length - 1];
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export async function QueryOption_BindDdl_QueryOptionIdInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
) {
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_QueryOptionIdInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_QueryOptionIdInDivCache");
  const arrObjLstSel = await QueryOption_GetObjLstCache();
  if (arrObjLstSel == null) return;
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsQueryOptionEN.con_QueryOptionId,
    clsQueryOptionEN.con_QueryOptionName,
    '查询选项...',
  );
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export async function QueryOption_GetArrQueryOption() {
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_QueryOptionIdInDivCache");
  const arrQueryOption = new Array<clsQueryOptionEN>();
  const arrObjLstSel = await QueryOption_GetObjLstCache();
  if (arrObjLstSel == null) return null;
  const obj0 = new clsQueryOptionEN();
  obj0.queryOptionId = '0';
  obj0.queryOptionName = '选查询选项...';
  arrQueryOption.push(obj0);
  arrObjLstSel.forEach((x) => arrQueryOption.push(x));
  return arrQueryOption;
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function QueryOption_CheckPropertyNew(pobjQueryOptionEN: clsQueryOptionEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjQueryOptionEN.queryOptionName) === true) {
    throw new Error(
      `(errid:Watl000411)字段[查询方式名称]不能为空(In 查询选项)!(clsQueryOptionBL:CheckPropertyNew0)`,
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjQueryOptionEN.queryOptionId) == false &&
    GetStrLen(pobjQueryOptionEN.queryOptionId) > 2
  ) {
    throw new Error(
      `(errid:Watl000413)字段[查询方式Id(queryOptionId)]的长度不能超过2(In 查询选项(QueryOption))!值:${pobjQueryOptionEN.queryOptionId}(clsQueryOptionBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQueryOptionEN.queryOptionName) == false &&
    GetStrLen(pobjQueryOptionEN.queryOptionName) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[查询方式名称(queryOptionName)]的长度不能超过20(In 查询选项(QueryOption))!值:${pobjQueryOptionEN.queryOptionName}(clsQueryOptionBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQueryOptionEN.queryOptionENName) == false &&
    GetStrLen(pobjQueryOptionEN.queryOptionENName) > 50
  ) {
    throw new Error(
      `(errid:Watl000413)字段[查询方式英文名(queryOptionENName)]的长度不能超过50(In 查询选项(QueryOption))!值:${pobjQueryOptionEN.queryOptionENName}(clsQueryOptionBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjQueryOptionEN.memo) == false && GetStrLen(pobjQueryOptionEN.memo) > 1000) {
    throw new Error(
      `(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In 查询选项(QueryOption))!值:${pobjQueryOptionEN.memo}(clsQueryOptionBL:CheckPropertyNew)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjQueryOptionEN.queryOptionId) == false &&
    undefined !== pobjQueryOptionEN.queryOptionId &&
    tzDataType.isString(pobjQueryOptionEN.queryOptionId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[查询方式Id(queryOptionId)]的值:[${pobjQueryOptionEN.queryOptionId}], 非法,应该为字符型(In 查询选项(QueryOption))!(clsQueryOptionBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQueryOptionEN.queryOptionName) == false &&
    undefined !== pobjQueryOptionEN.queryOptionName &&
    tzDataType.isString(pobjQueryOptionEN.queryOptionName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[查询方式名称(queryOptionName)]的值:[${pobjQueryOptionEN.queryOptionName}], 非法,应该为字符型(In 查询选项(QueryOption))!(clsQueryOptionBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQueryOptionEN.queryOptionENName) == false &&
    undefined !== pobjQueryOptionEN.queryOptionENName &&
    tzDataType.isString(pobjQueryOptionEN.queryOptionENName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[查询方式英文名(queryOptionENName)]的值:[${pobjQueryOptionEN.queryOptionENName}], 非法,应该为字符型(In 查询选项(QueryOption))!(clsQueryOptionBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQueryOptionEN.memo) == false &&
    undefined !== pobjQueryOptionEN.memo &&
    tzDataType.isString(pobjQueryOptionEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[说明(memo)]的值:[${pobjQueryOptionEN.memo}], 非法,应该为字符型(In 查询选项(QueryOption))!(clsQueryOptionBL:CheckPropertyNew0)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function QueryOption_CheckProperty4Update(pobjQueryOptionEN: clsQueryOptionEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjQueryOptionEN.queryOptionId) == false &&
    GetStrLen(pobjQueryOptionEN.queryOptionId) > 2
  ) {
    throw new Error(
      `(errid:Watl000416)字段[查询方式Id(queryOptionId)]的长度不能超过2(In 查询选项(QueryOption))!值:${pobjQueryOptionEN.queryOptionId}(clsQueryOptionBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQueryOptionEN.queryOptionName) == false &&
    GetStrLen(pobjQueryOptionEN.queryOptionName) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[查询方式名称(queryOptionName)]的长度不能超过20(In 查询选项(QueryOption))!值:${pobjQueryOptionEN.queryOptionName}(clsQueryOptionBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQueryOptionEN.queryOptionENName) == false &&
    GetStrLen(pobjQueryOptionEN.queryOptionENName) > 50
  ) {
    throw new Error(
      `(errid:Watl000416)字段[查询方式英文名(queryOptionENName)]的长度不能超过50(In 查询选项(QueryOption))!值:${pobjQueryOptionEN.queryOptionENName}(clsQueryOptionBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjQueryOptionEN.memo) == false && GetStrLen(pobjQueryOptionEN.memo) > 1000) {
    throw new Error(
      `(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In 查询选项(QueryOption))!值:${pobjQueryOptionEN.memo}(clsQueryOptionBL:CheckProperty4Update)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjQueryOptionEN.queryOptionId) == false &&
    undefined !== pobjQueryOptionEN.queryOptionId &&
    tzDataType.isString(pobjQueryOptionEN.queryOptionId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[查询方式Id(queryOptionId)]的值:[${pobjQueryOptionEN.queryOptionId}], 非法,应该为字符型(In 查询选项(QueryOption))!(clsQueryOptionBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQueryOptionEN.queryOptionName) == false &&
    undefined !== pobjQueryOptionEN.queryOptionName &&
    tzDataType.isString(pobjQueryOptionEN.queryOptionName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[查询方式名称(queryOptionName)]的值:[${pobjQueryOptionEN.queryOptionName}], 非法,应该为字符型(In 查询选项(QueryOption))!(clsQueryOptionBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQueryOptionEN.queryOptionENName) == false &&
    undefined !== pobjQueryOptionEN.queryOptionENName &&
    tzDataType.isString(pobjQueryOptionEN.queryOptionENName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[查询方式英文名(queryOptionENName)]的值:[${pobjQueryOptionEN.queryOptionENName}], 非法,应该为字符型(In 查询选项(QueryOption))!(clsQueryOptionBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQueryOptionEN.memo) == false &&
    undefined !== pobjQueryOptionEN.memo &&
    tzDataType.isString(pobjQueryOptionEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[说明(memo)]的值:[${pobjQueryOptionEN.memo}], 非法,应该为字符型(In 查询选项(QueryOption))!(clsQueryOptionBL:CheckProperty4Update)`,
    );
  }
  //检查主键是否为Null或者空!
  if (
    IsNullOrEmpty(pobjQueryOptionEN.queryOptionId) === true ||
    pobjQueryOptionEN.queryOptionId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000064)字段[查询方式Id]不能为空(In 查询选项)!(clsQueryOptionBL:CheckProperty4Update)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2025-06-01
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function QueryOption_GetJSONStrByObj(pobjQueryOptionEN: clsQueryOptionEN): string {
  pobjQueryOptionEN.sfUpdFldSetStr = pobjQueryOptionEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjQueryOptionEN);
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
 * 日期:2025-06-01
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
 */
export function QueryOption_GetObjLstByJSONStr(strJSON: string): Array<clsQueryOptionEN> {
  let arrQueryOptionObjLst = new Array<clsQueryOptionEN>();
  if (strJSON === '') {
    return arrQueryOptionObjLst;
  }
  try {
    arrQueryOptionObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrQueryOptionObjLst;
  }
  return arrQueryOptionObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-06-01
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrQueryOptionObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function QueryOption_GetObjLstByJSONObjLst(
  arrQueryOptionObjLstS: Array<clsQueryOptionEN>,
): Array<clsQueryOptionEN> {
  const arrQueryOptionObjLst = new Array<clsQueryOptionEN>();
  for (const objInFor of arrQueryOptionObjLstS) {
    const obj1 = QueryOption_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrQueryOptionObjLst.push(obj1);
  }
  return arrQueryOptionObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-06-01
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function QueryOption_GetObjByJSONStr(strJSON: string): clsQueryOptionEN {
  let pobjQueryOptionEN = new clsQueryOptionEN();
  if (strJSON === '') {
    return pobjQueryOptionEN;
  }
  try {
    pobjQueryOptionEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjQueryOptionEN;
  }
  return pobjQueryOptionEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function QueryOption_GetCombineCondition(objQueryOptionCond: clsQueryOptionEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objQueryOptionCond.dicFldComparisonOp,
      clsQueryOptionEN.con_QueryOptionId,
    ) == true
  ) {
    const strComparisonOpQueryOptionId: string =
      objQueryOptionCond.dicFldComparisonOp[clsQueryOptionEN.con_QueryOptionId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsQueryOptionEN.con_QueryOptionId,
      objQueryOptionCond.queryOptionId,
      strComparisonOpQueryOptionId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objQueryOptionCond.dicFldComparisonOp,
      clsQueryOptionEN.con_QueryOptionName,
    ) == true
  ) {
    const strComparisonOpQueryOptionName: string =
      objQueryOptionCond.dicFldComparisonOp[clsQueryOptionEN.con_QueryOptionName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsQueryOptionEN.con_QueryOptionName,
      objQueryOptionCond.queryOptionName,
      strComparisonOpQueryOptionName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objQueryOptionCond.dicFldComparisonOp,
      clsQueryOptionEN.con_QueryOptionENName,
    ) == true
  ) {
    const strComparisonOpQueryOptionENName: string =
      objQueryOptionCond.dicFldComparisonOp[clsQueryOptionEN.con_QueryOptionENName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsQueryOptionEN.con_QueryOptionENName,
      objQueryOptionCond.queryOptionENName,
      strComparisonOpQueryOptionENName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objQueryOptionCond.dicFldComparisonOp,
      clsQueryOptionEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objQueryOptionCond.dicFldComparisonOp[clsQueryOptionEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsQueryOptionEN.con_Memo,
      objQueryOptionCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objQueryOptionENS:源对象
 * @param objQueryOptionENT:目标对象
 */
export function QueryOption_GetObjFromJsonObj(
  objQueryOptionENS: clsQueryOptionEN,
): clsQueryOptionEN {
  const objQueryOptionENT: clsQueryOptionEN = new clsQueryOptionEN();
  ObjectAssign(objQueryOptionENT, objQueryOptionENS);
  return objQueryOptionENT;
}
