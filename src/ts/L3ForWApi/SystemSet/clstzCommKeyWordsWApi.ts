/**
 * 类名:clstzCommKeyWordsWApi
 * 表名:tz_CommKeyWords(00050330)
 * 版本:2023.06.08.1(服务器:WIN-SRV103-116)
 * 日期:2023/06/08 06:17:49
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:系统设置(SystemSet)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * tz_通用关键字(tzCommKeyWords)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2023年06月08日.
 * 注意:该类必须与调用界面处于同一个包，否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty, GetStrLen, tzDataType, Format } from '@/ts/PubFun/clsString';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { CacheHelper } from '@/ts/PubFun/CacheHelper';
import {
  GetObjKeys,
  GetExceptionStr,
  myShowErrorMsg,
  ObjectAssign,
} from '@/ts/PubFun/clsCommFunc4Web';
import { clstzCommKeyWordsEN } from '@/ts/L0Entity/SystemSet/clstzCommKeyWordsEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const tzCommKeyWordsController = 'tzCommKeyWordsApi';
export const tzCommKeyWordsConstructorName = 'tzCommKeyWords';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strKeyId:关键字
 * @returns 对象
 **/
export async function tzCommKeyWordsGetObjByKeyIdAsync(
  strKeyId: string,
): Promise<clstzCommKeyWordsEN | null> {
  const strThisFuncName = 'GetObjByKeyIdAsync';

  if (IsNullOrEmpty(strKeyId) == true) {
    const strMsg = Format('参数:[strKeyId]不能为空！(In clstzCommKeyWordsWApi.GetObjByKeyIdAsync)');
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByKeyId';
  const strUrl = GetWebApiUrl(tzCommKeyWordsController, strAction);
  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strKeyId,
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
      const objtzCommKeyWords = tzCommKeyWordsGetObjFromJsonObj(returnObj);
      return objtzCommKeyWords;
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
        tzCommKeyWordsConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        tzCommKeyWordsConstructorName,
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
 * @param strKeyId:所给的关键字
 * @returns 对象
 */
export async function tzCommKeyWordsGetObjByKeyIdCache(strKeyId: string, bolTryAsyncOnce = true) {
  const strThisFuncName = 'GetObjByKeyIdCache';

  if (IsNullOrEmpty(strKeyId) == true) {
    const strMsg = Format('参数:[strKeyId]不能为空！(In clstzCommKeyWordsWApi.GetObjByKeyIdCache)');
    console.error(strMsg);
    throw strMsg;
  }
  const arrtzCommKeyWordsObjLstCache = await tzCommKeyWordsGetObjLstCache();
  try {
    const arrtzCommKeyWordsSel = arrtzCommKeyWordsObjLstCache.filter((x) => x.keyId == strKeyId);
    let objtzCommKeyWords: clstzCommKeyWordsEN;
    if (arrtzCommKeyWordsSel.length > 0) {
      objtzCommKeyWords = arrtzCommKeyWordsSel[0];
      return objtzCommKeyWords;
    } else {
      if (bolTryAsyncOnce == true) {
        const objtzCommKeyWordsConst = await tzCommKeyWordsGetObjByKeyIdAsync(strKeyId);
        if (objtzCommKeyWordsConst != null) {
          tzCommKeyWordsReFreshThisCache();
          return objtzCommKeyWordsConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strKeyId,
      tzCommKeyWordsConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strKeyId:所给的关键字
 * @returns 对象
 */
export async function tzCommKeyWordsGetObjByKeyIdlocalStorage(strKeyId: string) {
  const strThisFuncName = 'GetObjByKeyIdlocalStorage';

  if (IsNullOrEmpty(strKeyId) == true) {
    const strMsg = Format(
      '参数:[strKeyId]不能为空！(In clstzCommKeyWordsWApi.GetObjByKeyIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clstzCommKeyWordsEN._CurrTabName, strKeyId);
  if (strKey == '') {
    console.error('关键字为空！不正确');
    throw new Error('关键字为空！不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在，直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objtzCommKeyWordsCache: clstzCommKeyWordsEN = JSON.parse(strTempObj);
    return objtzCommKeyWordsCache;
  }
  try {
    const objtzCommKeyWords = await tzCommKeyWordsGetObjByKeyIdAsync(strKeyId);
    if (objtzCommKeyWords != null) {
      localStorage.setItem(strKey, JSON.stringify(objtzCommKeyWords));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objtzCommKeyWords;
    }
    return objtzCommKeyWords;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strKeyId,
      tzCommKeyWordsConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return;
  }
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objtzCommKeyWords:所给的对象
 * @returns 对象
 */
export async function tzCommKeyWordsUpdateObjInLstCache(objtzCommKeyWords: clstzCommKeyWordsEN) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrtzCommKeyWordsObjLstCache = await tzCommKeyWordsGetObjLstCache();
    const obj = arrtzCommKeyWordsObjLstCache.find(
      (x) => x.tableKey == objtzCommKeyWords.tableKey && x.keyword == objtzCommKeyWords.keyword,
    );
    if (obj != null) {
      objtzCommKeyWords.keyId = obj.keyId;
      ObjectAssign(obj, objtzCommKeyWords);
    } else {
      arrtzCommKeyWordsObjLstCache.push(objtzCommKeyWords);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      tzCommKeyWordsConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/*该表没有名称字段，不能生成此函数！*/

/**
 * 映射函数。根据表映射把输入字段值，映射成输出字段值
 * 作者:pyf
 * 日期:2023-06-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 * @returns 返回一个输出字段值
 */
export async function tzCommKeyWordsfunc(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clstzCommKeyWordsEN.conKeyId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clstzCommKeyWordsEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确，不在输出字段范围之内!({1})',
      strOutFldName,
      clstzCommKeyWordsEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strKeyId = strInValue;
  if (IsNullOrEmpty(strInValue) == true) {
    return '';
  }
  const objtzCommKeyWords = await tzCommKeyWordsGetObjByKeyIdCache(strKeyId);
  if (objtzCommKeyWords == null) return '';
  if (objtzCommKeyWords.GetFldValue(strOutFldName) == null) return '';
  return objtzCommKeyWords.GetFldValue(strOutFldName).toString();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2023-06-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function tzCommKeyWordsSortFunDefa(a: clstzCommKeyWordsEN, b: clstzCommKeyWordsEN): number {
  return a.keyId.localeCompare(b.keyId);
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2023-06-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function tzCommKeyWordsSortFunDefa2Fld(
  a: clstzCommKeyWordsEN,
  b: clstzCommKeyWordsEN,
): number {
  if (a.keyword == b.keyword) return a.tableName.localeCompare(b.tableName);
  else return a.keyword.localeCompare(b.keyword);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2023-06-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function tzCommKeyWordsSortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clstzCommKeyWordsEN.conKeyId:
        return (a: clstzCommKeyWordsEN, b: clstzCommKeyWordsEN) => {
          return a.keyId.localeCompare(b.keyId);
        };
      case clstzCommKeyWordsEN.conKeyword:
        return (a: clstzCommKeyWordsEN, b: clstzCommKeyWordsEN) => {
          return a.keyword.localeCompare(b.keyword);
        };
      case clstzCommKeyWordsEN.conTableName:
        return (a: clstzCommKeyWordsEN, b: clstzCommKeyWordsEN) => {
          return a.tableName.localeCompare(b.tableName);
        };
      case clstzCommKeyWordsEN.conTableKey:
        return (a: clstzCommKeyWordsEN, b: clstzCommKeyWordsEN) => {
          return a.tableKey.localeCompare(b.tableKey);
        };
      case clstzCommKeyWordsEN.conUpdUser:
        return (a: clstzCommKeyWordsEN, b: clstzCommKeyWordsEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clstzCommKeyWordsEN.conUpdDate:
        return (a: clstzCommKeyWordsEN, b: clstzCommKeyWordsEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clstzCommKeyWordsEN.conMemo:
        return (a: clstzCommKeyWordsEN, b: clstzCommKeyWordsEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[tzCommKeyWords]中不存在！(in ${tzCommKeyWordsConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clstzCommKeyWordsEN.conKeyId:
        return (a: clstzCommKeyWordsEN, b: clstzCommKeyWordsEN) => {
          return b.keyId.localeCompare(a.keyId);
        };
      case clstzCommKeyWordsEN.conKeyword:
        return (a: clstzCommKeyWordsEN, b: clstzCommKeyWordsEN) => {
          return b.keyword.localeCompare(a.keyword);
        };
      case clstzCommKeyWordsEN.conTableName:
        return (a: clstzCommKeyWordsEN, b: clstzCommKeyWordsEN) => {
          return b.tableName.localeCompare(a.tableName);
        };
      case clstzCommKeyWordsEN.conTableKey:
        return (a: clstzCommKeyWordsEN, b: clstzCommKeyWordsEN) => {
          return b.tableKey.localeCompare(a.tableKey);
        };
      case clstzCommKeyWordsEN.conUpdUser:
        return (a: clstzCommKeyWordsEN, b: clstzCommKeyWordsEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clstzCommKeyWordsEN.conUpdDate:
        return (a: clstzCommKeyWordsEN, b: clstzCommKeyWordsEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clstzCommKeyWordsEN.conMemo:
        return (a: clstzCommKeyWordsEN, b: clstzCommKeyWordsEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[tzCommKeyWords]中不存在！(in ${tzCommKeyWordsConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较，返回是否相等
 * 作者:pyf
 * 日期:2023-06-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function tzCommKeyWordsFilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clstzCommKeyWordsEN.conKeyId:
      return (obj: clstzCommKeyWordsEN) => {
        return obj.keyId === value;
      };
    case clstzCommKeyWordsEN.conKeyword:
      return (obj: clstzCommKeyWordsEN) => {
        return obj.keyword === value;
      };
    case clstzCommKeyWordsEN.conTableName:
      return (obj: clstzCommKeyWordsEN) => {
        return obj.tableName === value;
      };
    case clstzCommKeyWordsEN.conTableKey:
      return (obj: clstzCommKeyWordsEN) => {
        return obj.tableKey === value;
      };
    case clstzCommKeyWordsEN.conUpdUser:
      return (obj: clstzCommKeyWordsEN) => {
        return obj.updUser === value;
      };
    case clstzCommKeyWordsEN.conUpdDate:
      return (obj: clstzCommKeyWordsEN) => {
        return obj.updDate === value;
      };
    case clstzCommKeyWordsEN.conMemo:
      return (obj: clstzCommKeyWordsEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[tzCommKeyWords]中不存在！(in ${tzCommKeyWordsConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}

/**
 * 映射函数。根据表映射把输入字段值，映射成输出字段值
 * 作者:pyf
 * 日期:2023-06-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 * @returns 返回一个关键字值列表
 */
export async function tzCommKeyWordsfuncKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clstzCommKeyWordsEN.conKeyId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrtzCommKeyWords = await tzCommKeyWordsGetObjLstCache();
  if (arrtzCommKeyWords == null) return [];
  let arrtzCommKeyWordsSel = arrtzCommKeyWords;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrtzCommKeyWordsSel = arrtzCommKeyWordsSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrtzCommKeyWordsSel = arrtzCommKeyWordsSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrtzCommKeyWordsSel = arrtzCommKeyWordsSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrtzCommKeyWordsSel = arrtzCommKeyWordsSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrtzCommKeyWordsSel = arrtzCommKeyWordsSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrtzCommKeyWordsSel = arrtzCommKeyWordsSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrtzCommKeyWordsSel = arrtzCommKeyWordsSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrtzCommKeyWordsSel = arrtzCommKeyWordsSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrtzCommKeyWordsSel = arrtzCommKeyWordsSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrtzCommKeyWordsSel = arrtzCommKeyWordsSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrtzCommKeyWordsSel.length == 0) return [];
  return arrtzCommKeyWordsSel.map((x) => x.keyId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function tzCommKeyWordsGetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(tzCommKeyWordsController, strAction);
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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        tzCommKeyWordsConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        tzCommKeyWordsConstructorName,
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
export async function tzCommKeyWordsGetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(tzCommKeyWordsController, strAction);
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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        tzCommKeyWordsConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        tzCommKeyWordsConstructorName,
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
export async function tzCommKeyWordsGetFirstObjAsync(
  strWhereCond: string,
): Promise<clstzCommKeyWordsEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(tzCommKeyWordsController, strAction);
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
      const objtzCommKeyWords = tzCommKeyWordsGetObjFromJsonObj(returnObj);
      return objtzCommKeyWords;
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
        tzCommKeyWordsConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        tzCommKeyWordsConstructorName,
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
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_ClientCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function tzCommKeyWordsGetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clstzCommKeyWordsEN._CurrTabName;
  if (IsNullOrEmpty(clstzCommKeyWordsEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clstzCommKeyWordsEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空！不正确');
    throw new Error('关键字为空！不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在，直接返回
    const arrtzCommKeyWordsExObjLstCache: Array<clstzCommKeyWordsEN> = CacheHelper.Get(strKey);
    const arrtzCommKeyWordsObjLstT = tzCommKeyWordsGetObjLstByJSONObjLst(
      arrtzCommKeyWordsExObjLstCache,
    );
    return arrtzCommKeyWordsObjLstT;
  }
  try {
    const arrtzCommKeyWordsExObjLst = await tzCommKeyWordsGetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrtzCommKeyWordsExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立，对象列表数：{1}!',
      strKey,
      arrtzCommKeyWordsExObjLst.length,
    );
    console.log(strInfo);
    return arrtzCommKeyWordsExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      tzCommKeyWordsConstructorName,
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
export async function tzCommKeyWordsGetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clstzCommKeyWordsEN._CurrTabName;
  if (IsNullOrEmpty(clstzCommKeyWordsEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clstzCommKeyWordsEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空！不正确');
    throw new Error('关键字为空！不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在，直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrtzCommKeyWordsExObjLstCache: Array<clstzCommKeyWordsEN> = JSON.parse(strTempObjLst);
    const arrtzCommKeyWordsObjLstT = tzCommKeyWordsGetObjLstByJSONObjLst(
      arrtzCommKeyWordsExObjLstCache,
    );
    return arrtzCommKeyWordsObjLstT;
  }
  try {
    const arrtzCommKeyWordsExObjLst = await tzCommKeyWordsGetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrtzCommKeyWordsExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立，对象列表数：{1}!',
      strKey,
      arrtzCommKeyWordsExObjLst.length,
    );
    console.log(strInfo);
    return arrtzCommKeyWordsExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      tzCommKeyWordsConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 获取本地缓存中的对象列表，是整个表中的全部记录，也可是表中某缓存分类的全部记录.如果本地不存在就返回null，不会去访问WebApi获取数据。
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function tzCommKeyWordsGetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clstzCommKeyWordsEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空！不正确');
    throw new Error('关键字为空！不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在，直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrtzCommKeyWordsObjLstCache: Array<clstzCommKeyWordsEN> = JSON.parse(strTempObjLst);
    return arrtzCommKeyWordsObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function tzCommKeyWordsGetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clstzCommKeyWordsEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(tzCommKeyWordsController, strAction);
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
          tzCommKeyWordsConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = tzCommKeyWordsGetObjLstByJSONObjLst(returnObjLst);
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
        tzCommKeyWordsConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        tzCommKeyWordsConstructorName,
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
 * 获取本地sessionStorage缓存中的对象列表，是整个表中的全部记录，也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function tzCommKeyWordsGetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clstzCommKeyWordsEN._CurrTabName;
  if (IsNullOrEmpty(clstzCommKeyWordsEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clstzCommKeyWordsEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空！不正确');
    throw new Error('关键字为空！不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在，直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrtzCommKeyWordsExObjLstCache: Array<clstzCommKeyWordsEN> = JSON.parse(strTempObjLst);
    const arrtzCommKeyWordsObjLstT = tzCommKeyWordsGetObjLstByJSONObjLst(
      arrtzCommKeyWordsExObjLstCache,
    );
    return arrtzCommKeyWordsObjLstT;
  }
  try {
    const arrtzCommKeyWordsExObjLst = await tzCommKeyWordsGetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrtzCommKeyWordsExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立，对象列表数：{1}!',
      strKey,
      arrtzCommKeyWordsExObjLst.length,
    );
    console.log(strInfo);
    return arrtzCommKeyWordsExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      tzCommKeyWordsConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 获取本地缓存中的对象列表，是整个表中的全部记录，也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function tzCommKeyWordsGetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clstzCommKeyWordsEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空！不正确');
    throw new Error('关键字为空！不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在，直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrtzCommKeyWordsObjLstCache: Array<clstzCommKeyWordsEN> = JSON.parse(strTempObjLst);
    return arrtzCommKeyWordsObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表，是整个表中的全部记录，也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function tzCommKeyWordsGetObjLstCache(): Promise<Array<clstzCommKeyWordsEN>> {
  //const strThisFuncName = "GetObjLstCache";
  let arrtzCommKeyWordsObjLstCache;
  switch (clstzCommKeyWordsEN.CacheModeId) {
    case '04': //sessionStorage
      arrtzCommKeyWordsObjLstCache = await tzCommKeyWordsGetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrtzCommKeyWordsObjLstCache = await tzCommKeyWordsGetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrtzCommKeyWordsObjLstCache = await tzCommKeyWordsGetObjLstClientCache();
      break;
    default:
      arrtzCommKeyWordsObjLstCache = await tzCommKeyWordsGetObjLstClientCache();
      break;
  }
  return arrtzCommKeyWordsObjLstCache;
}

/**
 * 获取本地缓存中的对象列表，是整个表中的全部记录，也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function tzCommKeyWordsGetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrtzCommKeyWordsObjLstCache;
  switch (clstzCommKeyWordsEN.CacheModeId) {
    case '04': //sessionStorage
      arrtzCommKeyWordsObjLstCache = await tzCommKeyWordsGetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrtzCommKeyWordsObjLstCache = await tzCommKeyWordsGetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrtzCommKeyWordsObjLstCache = null;
      break;
    default:
      arrtzCommKeyWordsObjLstCache = null;
      break;
  }
  return arrtzCommKeyWordsObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrKeyIdCond:条件对象
 * @returns 对象列表子集
 */
export async function tzCommKeyWordsGetSubObjLstCache(objtzCommKeyWordsCond: clstzCommKeyWordsEN) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrtzCommKeyWordsObjLstCache = await tzCommKeyWordsGetObjLstCache();
  let arrtzCommKeyWordsSel = arrtzCommKeyWordsObjLstCache;
  if (
    objtzCommKeyWordsCond.sfFldComparisonOp == null ||
    objtzCommKeyWordsCond.sfFldComparisonOp == ''
  )
    return arrtzCommKeyWordsSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objtzCommKeyWordsCond.sfFldComparisonOp,
  );
  //console.log("clstzCommKeyWordsWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objtzCommKeyWordsCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrtzCommKeyWordsSel = arrtzCommKeyWordsSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objtzCommKeyWordsCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrtzCommKeyWordsSel = arrtzCommKeyWordsSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrtzCommKeyWordsSel = arrtzCommKeyWordsSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrtzCommKeyWordsSel = arrtzCommKeyWordsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrtzCommKeyWordsSel = arrtzCommKeyWordsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrtzCommKeyWordsSel = arrtzCommKeyWordsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrtzCommKeyWordsSel = arrtzCommKeyWordsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrtzCommKeyWordsSel = arrtzCommKeyWordsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrtzCommKeyWordsSel = arrtzCommKeyWordsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrtzCommKeyWordsSel = arrtzCommKeyWordsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrtzCommKeyWordsSel = arrtzCommKeyWordsSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrtzCommKeyWordsSel = arrtzCommKeyWordsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrtzCommKeyWordsSel = arrtzCommKeyWordsSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrtzCommKeyWordsSel = arrtzCommKeyWordsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrtzCommKeyWordsSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objtzCommKeyWordsCond),
      tzCommKeyWordsConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clstzCommKeyWordsEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrKeyId:关键字列表
 * @returns 对象列表
 **/
export async function tzCommKeyWordsGetObjLstByKeyIdLstAsync(
  arrKeyId: Array<string>,
): Promise<Array<clstzCommKeyWordsEN>> {
  const strThisFuncName = 'GetObjLstByKeyIdLstAsync';
  const strAction = 'GetObjLstByKeyIdLst';
  const strUrl = GetWebApiUrl(tzCommKeyWordsController, strAction);
  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrKeyId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          tzCommKeyWordsConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = tzCommKeyWordsGetObjLstByJSONObjLst(returnObjLst);
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
        tzCommKeyWordsConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        tzCommKeyWordsConstructorName,
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
 * @param arrstrKeyIdLst:关键字列表
 * @returns 对象列表
 */
export async function tzCommKeyWordsGetObjLstByKeyIdLstCache(arrKeyIdLst: Array<string>) {
  const strThisFuncName = 'GetObjLstByKeyIdLstCache';
  try {
    const arrtzCommKeyWordsObjLstCache = await tzCommKeyWordsGetObjLstCache();
    const arrtzCommKeyWordsSel = arrtzCommKeyWordsObjLstCache.filter(
      (x) => arrKeyIdLst.indexOf(x.keyId) > -1,
    );
    return arrtzCommKeyWordsSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrKeyIdLst.join(','),
      tzCommKeyWordsConstructorName,
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
export async function tzCommKeyWordsGetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clstzCommKeyWordsEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(tzCommKeyWordsController, strAction);
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
          tzCommKeyWordsConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = tzCommKeyWordsGetObjLstByJSONObjLst(returnObjLst);
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
        tzCommKeyWordsConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        tzCommKeyWordsConstructorName,
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
 * 根据范围条件获取相应的记录对象列表，获取某范围的记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByRangeAsync)
 * @param objRangePara:根据范围获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function tzCommKeyWordsGetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clstzCommKeyWordsEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(tzCommKeyWordsController, strAction);
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
          tzCommKeyWordsConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = tzCommKeyWordsGetObjLstByJSONObjLst(returnObjLst);
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
        tzCommKeyWordsConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        tzCommKeyWordsConstructorName,
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
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerCache)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function tzCommKeyWordsGetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clstzCommKeyWordsEN>();
  const arrtzCommKeyWordsObjLstCache = await tzCommKeyWordsGetObjLstCache();
  if (arrtzCommKeyWordsObjLstCache.length == 0) return arrtzCommKeyWordsObjLstCache;
  let arrtzCommKeyWordsSel = arrtzCommKeyWordsObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objtzCommKeyWordsCond = new clstzCommKeyWordsEN();
  ObjectAssign(objtzCommKeyWordsCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clstzCommKeyWordsWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrtzCommKeyWordsSel = arrtzCommKeyWordsSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objtzCommKeyWordsCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrtzCommKeyWordsSel = arrtzCommKeyWordsSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrtzCommKeyWordsSel = arrtzCommKeyWordsSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrtzCommKeyWordsSel = arrtzCommKeyWordsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrtzCommKeyWordsSel = arrtzCommKeyWordsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrtzCommKeyWordsSel = arrtzCommKeyWordsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrtzCommKeyWordsSel = arrtzCommKeyWordsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrtzCommKeyWordsSel = arrtzCommKeyWordsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrtzCommKeyWordsSel = arrtzCommKeyWordsSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrtzCommKeyWordsSel = arrtzCommKeyWordsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrtzCommKeyWordsSel = arrtzCommKeyWordsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrtzCommKeyWordsSel = arrtzCommKeyWordsSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrtzCommKeyWordsSel = arrtzCommKeyWordsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrtzCommKeyWordsSel = arrtzCommKeyWordsSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrtzCommKeyWordsSel = arrtzCommKeyWordsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrtzCommKeyWordsSel.length == 0) return arrtzCommKeyWordsSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrtzCommKeyWordsSel = arrtzCommKeyWordsSel.sort(
        tzCommKeyWordsSortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrtzCommKeyWordsSel = arrtzCommKeyWordsSel.sort(objPagerPara.sortFun);
    }
    arrtzCommKeyWordsSel = arrtzCommKeyWordsSel.slice(intStart, intEnd);
    return arrtzCommKeyWordsSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      tzCommKeyWordsConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clstzCommKeyWordsEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表，只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function tzCommKeyWordsGetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clstzCommKeyWordsEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clstzCommKeyWordsEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(tzCommKeyWordsController, strAction);
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
          tzCommKeyWordsConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = tzCommKeyWordsGetObjLstByJSONObjLst(returnObjLst);
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
        tzCommKeyWordsConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        tzCommKeyWordsConstructorName,
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
 * 调用WebApi来删除记录，根据关键字来删除记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelRecordAsync)
 * @param strKeyId:关键字
 * @returns 获取删除的结果
 **/
export async function tzCommKeyWordsDelRecordAsync(strKeyId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(tzCommKeyWordsController, strAction);
  strUrl = Format('{0}/?Id={1}', strUrl, strKeyId);
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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        tzCommKeyWordsConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        tzCommKeyWordsConstructorName,
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
 * @param arrKeyId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function tzCommKeyWordsDeltzCommKeyWordssAsync(
  arrKeyId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DeltzCommKeyWordssAsync';
  const strAction = 'DeltzCommKeyWordss';
  const strUrl = GetWebApiUrl(tzCommKeyWordsController, strAction);
  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrKeyId, config);
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
        tzCommKeyWordsConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        tzCommKeyWordsConstructorName,
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
 * 根据条件删除记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelMultiRecordByCondAsync)
 * @returns 实际删除记录的个数
 **/
export async function tzCommKeyWordsDeltzCommKeyWordssByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DeltzCommKeyWordssByCondAsync';
  const strAction = 'DeltzCommKeyWordssByCond';
  const strUrl = GetWebApiUrl(tzCommKeyWordsController, strAction);
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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        tzCommKeyWordsConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        tzCommKeyWordsConstructorName,
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
 * 调用WebApi来添加记录，数据传递使用JSON串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordAsync)
 * @param objtzCommKeyWordsEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function tzCommKeyWordsAddNewRecordAsync(
  objtzCommKeyWordsEN: clstzCommKeyWordsEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objtzCommKeyWordsEN);
  const strUrl = GetWebApiUrl(tzCommKeyWordsController, strAction);
  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objtzCommKeyWordsEN, config);
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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        tzCommKeyWordsConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        tzCommKeyWordsConstructorName,
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
 * 调用WebApi来添加记录，关键字用最大关键字，数据传递使用JSON串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithMaxIdAsync)
 * @param objtzCommKeyWordsEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function tzCommKeyWordsAddNewRecordWithMaxIdAsync(
  objtzCommKeyWordsEN: clstzCommKeyWordsEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(tzCommKeyWordsController, strAction);
  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objtzCommKeyWordsEN, config);
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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        tzCommKeyWordsConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        tzCommKeyWordsConstructorName,
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
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objtzCommKeyWordsEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function tzCommKeyWordsAddNewRecordWithReturnKeyAsync(
  objtzCommKeyWordsEN: clstzCommKeyWordsEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(tzCommKeyWordsController, strAction);
  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objtzCommKeyWordsEN, config);
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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        tzCommKeyWordsConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        tzCommKeyWordsConstructorName,
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
 * 调用WebApi来修改记录，数据传递使用JSON串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateRecordAsync)
 * @param objtzCommKeyWordsEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function tzCommKeyWordsUpdateRecordAsync(
  objtzCommKeyWordsEN: clstzCommKeyWordsEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objtzCommKeyWordsEN.sfUpdFldSetStr === undefined ||
    objtzCommKeyWordsEN.sfUpdFldSetStr === null ||
    objtzCommKeyWordsEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空，不能修改!',
      objtzCommKeyWordsEN.keyId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(tzCommKeyWordsController, strAction);
  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objtzCommKeyWordsEN, config);
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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        tzCommKeyWordsConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        tzCommKeyWordsConstructorName,
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
 * @param objtzCommKeyWordsEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function tzCommKeyWordsUpdateWithConditionAsync(
  objtzCommKeyWordsEN: clstzCommKeyWordsEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objtzCommKeyWordsEN.sfUpdFldSetStr === undefined ||
    objtzCommKeyWordsEN.sfUpdFldSetStr === null ||
    objtzCommKeyWordsEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空，不能修改!',
      objtzCommKeyWordsEN.keyId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(tzCommKeyWordsController, strAction);
  objtzCommKeyWordsEN.whereCond = strWhereCond;
  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objtzCommKeyWordsEN, config);
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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        tzCommKeyWordsConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        tzCommKeyWordsConstructorName,
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
 * @param objstrKeyIdCond:条件对象
 * @returns 对象列表子集
 */
export async function tzCommKeyWordsIsExistRecordCache(objtzCommKeyWordsCond: clstzCommKeyWordsEN) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrtzCommKeyWordsObjLstCache = await tzCommKeyWordsGetObjLstCache();
  if (arrtzCommKeyWordsObjLstCache == null) return false;
  let arrtzCommKeyWordsSel = arrtzCommKeyWordsObjLstCache;
  if (
    objtzCommKeyWordsCond.sfFldComparisonOp == null ||
    objtzCommKeyWordsCond.sfFldComparisonOp == ''
  )
    return arrtzCommKeyWordsSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objtzCommKeyWordsCond.sfFldComparisonOp,
  );
  //console.log("clstzCommKeyWordsWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objtzCommKeyWordsCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objtzCommKeyWordsCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrtzCommKeyWordsSel = arrtzCommKeyWordsSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrtzCommKeyWordsSel = arrtzCommKeyWordsSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrtzCommKeyWordsSel = arrtzCommKeyWordsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrtzCommKeyWordsSel = arrtzCommKeyWordsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrtzCommKeyWordsSel = arrtzCommKeyWordsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrtzCommKeyWordsSel = arrtzCommKeyWordsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrtzCommKeyWordsSel = arrtzCommKeyWordsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrtzCommKeyWordsSel = arrtzCommKeyWordsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrtzCommKeyWordsSel = arrtzCommKeyWordsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrtzCommKeyWordsSel = arrtzCommKeyWordsSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrtzCommKeyWordsSel = arrtzCommKeyWordsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrtzCommKeyWordsSel = arrtzCommKeyWordsSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrtzCommKeyWordsSel = arrtzCommKeyWordsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrtzCommKeyWordsSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objtzCommKeyWordsCond),
      tzCommKeyWordsConstructorName,
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
export async function tzCommKeyWordsIsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(tzCommKeyWordsController, strAction);
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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        tzCommKeyWordsConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        tzCommKeyWordsConstructorName,
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
 * @param strKeyId:所给的关键字
 * @returns 对象
 */
export async function tzCommKeyWordsIsExistCache(strKeyId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrtzCommKeyWordsObjLstCache = await tzCommKeyWordsGetObjLstCache();
  if (arrtzCommKeyWordsObjLstCache == null) return false;
  try {
    const arrtzCommKeyWordsSel = arrtzCommKeyWordsObjLstCache.filter((x) => x.keyId == strKeyId);
    if (arrtzCommKeyWordsSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strKeyId,
      tzCommKeyWordsConstructorName,
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
 * @param strKeyId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function tzCommKeyWordsIsExistAsync(strKeyId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(tzCommKeyWordsController, strAction);
  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strKeyId,
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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        tzCommKeyWordsConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        tzCommKeyWordsConstructorName,
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
export async function tzCommKeyWordsGetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(tzCommKeyWordsController, strAction);
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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        tzCommKeyWordsConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        tzCommKeyWordsConstructorName,
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
 * @param objtzCommKeyWordsCond:条件对象
 * @returns 对象列表记录数
 */
export async function tzCommKeyWordsGetRecCountByCondCache(
  objtzCommKeyWordsCond: clstzCommKeyWordsEN,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrtzCommKeyWordsObjLstCache = await tzCommKeyWordsGetObjLstCache();
  if (arrtzCommKeyWordsObjLstCache == null) return 0;
  let arrtzCommKeyWordsSel = arrtzCommKeyWordsObjLstCache;
  if (
    objtzCommKeyWordsCond.sfFldComparisonOp == null ||
    objtzCommKeyWordsCond.sfFldComparisonOp == ''
  )
    return arrtzCommKeyWordsSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objtzCommKeyWordsCond.sfFldComparisonOp,
  );
  //console.log("clstzCommKeyWordsWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objtzCommKeyWordsCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrtzCommKeyWordsSel = arrtzCommKeyWordsSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objtzCommKeyWordsCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrtzCommKeyWordsSel = arrtzCommKeyWordsSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrtzCommKeyWordsSel = arrtzCommKeyWordsSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrtzCommKeyWordsSel = arrtzCommKeyWordsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrtzCommKeyWordsSel = arrtzCommKeyWordsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrtzCommKeyWordsSel = arrtzCommKeyWordsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrtzCommKeyWordsSel = arrtzCommKeyWordsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrtzCommKeyWordsSel = arrtzCommKeyWordsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrtzCommKeyWordsSel = arrtzCommKeyWordsSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrtzCommKeyWordsSel = arrtzCommKeyWordsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrtzCommKeyWordsSel = arrtzCommKeyWordsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrtzCommKeyWordsSel = arrtzCommKeyWordsSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrtzCommKeyWordsSel = arrtzCommKeyWordsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrtzCommKeyWordsSel = arrtzCommKeyWordsSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrtzCommKeyWordsSel = arrtzCommKeyWordsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrtzCommKeyWordsSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objtzCommKeyWordsCond),
      tzCommKeyWordsConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return 0;
}
/*该表的关键字类型不是字符型自增，不需要生成获取最大关键字函数！*/
/*该表的关键字类型不是字符型带前缀自增，不需要生成获取最大关键字函数！*/

/**
 * 根据前缀获取当前表关键字值的最大值,再加1,避免重复
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetMaxStrIdByPrefix)
 * @param mapParam:参数列表
 * @returns 获取当前表关键字值的最大值
 */
export async function tzCommKeyWordsGetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(tzCommKeyWordsController, strAction);
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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        tzCommKeyWordsConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        tzCommKeyWordsConstructorName,
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
export function tzCommKeyWordsGetWebApiUrl(strController: string, strAction: string): string {
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
export function tzCommKeyWordsReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功！');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clstzCommKeyWordsEN._CurrTabName;
  switch (clstzCommKeyWordsEN.CacheModeId) {
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
}

/**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export function tzCommKeyWordsReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clstzCommKeyWordsEN._CurrTabName;
    switch (clstzCommKeyWordsEN.CacheModeId) {
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
    const strMsg = Format('刷新缓存成功！');
    console.trace(strMsg);
  } else {
    const strMsg = Format('刷新缓存已经关闭。');
    console.trace(strMsg);
  }
}
/* 该表的下拉框功能没有设置，不需要生成下拉框绑定函数。*/

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function tzCommKeyWordsCheckPropertyNew(pobjtzCommKeyWordsEN: clstzCommKeyWordsEN) {
  //检查字段非空， 即数据表要求非常非空的字段，不能为空！
  if (IsNullOrEmpty(pobjtzCommKeyWordsEN.keyword) === true) {
    throw new Error(
      '(errid:Watl000058)字段[关键字]不能为空(In tz_通用关键字)!(clstzCommKeyWordsBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjtzCommKeyWordsEN.tableName) === true) {
    throw new Error(
      '(errid:Watl000058)字段[表名]不能为空(In tz_通用关键字)!(clstzCommKeyWordsBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjtzCommKeyWordsEN.tableKey) === true) {
    throw new Error(
      '(errid:Watl000058)字段[数据表关键字值]不能为空(In tz_通用关键字)!(clstzCommKeyWordsBL:CheckPropertyNew)',
    );
  }
  //检查字段长度， 若字符型字段长度超出规定的长度，即非法！
  if (
    IsNullOrEmpty(pobjtzCommKeyWordsEN.keyId) == false &&
    GetStrLen(pobjtzCommKeyWordsEN.keyId) > 8
  ) {
    throw new Error(
      '(errid:Watl000059)字段[关键字Id(keyId)]的长度不能超过8(In tz_通用关键字(tzCommKeyWords))!值:$(pobjtzCommKeyWordsEN.keyId)(clstzCommKeyWordsBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjtzCommKeyWordsEN.keyword) == false &&
    GetStrLen(pobjtzCommKeyWordsEN.keyword) > 50
  ) {
    throw new Error(
      '(errid:Watl000059)字段[关键字(keyword)]的长度不能超过50(In tz_通用关键字(tzCommKeyWords))!值:$(pobjtzCommKeyWordsEN.keyword)(clstzCommKeyWordsBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjtzCommKeyWordsEN.tableName) == false &&
    GetStrLen(pobjtzCommKeyWordsEN.tableName) > 100
  ) {
    throw new Error(
      '(errid:Watl000059)字段[表名(tableName)]的长度不能超过100(In tz_通用关键字(tzCommKeyWords))!值:$(pobjtzCommKeyWordsEN.tableName)(clstzCommKeyWordsBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjtzCommKeyWordsEN.tableKey) == false &&
    GetStrLen(pobjtzCommKeyWordsEN.tableKey) > 100
  ) {
    throw new Error(
      '(errid:Watl000059)字段[数据表关键字值(tableKey)]的长度不能超过100(In tz_通用关键字(tzCommKeyWords))!值:$(pobjtzCommKeyWordsEN.tableKey)(clstzCommKeyWordsBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjtzCommKeyWordsEN.updUser) == false &&
    GetStrLen(pobjtzCommKeyWordsEN.updUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000059)字段[修改者(updUser)]的长度不能超过20(In tz_通用关键字(tzCommKeyWords))!值:$(pobjtzCommKeyWordsEN.updUser)(clstzCommKeyWordsBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjtzCommKeyWordsEN.updDate) == false &&
    GetStrLen(pobjtzCommKeyWordsEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000059)字段[修改日期(updDate)]的长度不能超过20(In tz_通用关键字(tzCommKeyWords))!值:$(pobjtzCommKeyWordsEN.updDate)(clstzCommKeyWordsBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjtzCommKeyWordsEN.memo) == false &&
    GetStrLen(pobjtzCommKeyWordsEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000059)字段[说明(memo)]的长度不能超过1000(In tz_通用关键字(tzCommKeyWords))!值:$(pobjtzCommKeyWordsEN.memo)(clstzCommKeyWordsBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjtzCommKeyWordsEN.keyId) == false &&
    undefined !== pobjtzCommKeyWordsEN.keyId &&
    tzDataType.isString(pobjtzCommKeyWordsEN.keyId) === false
  ) {
    throw new Error(
      '(errid:Watl000060)字段[关键字Id(keyId)]的值:[$(pobjtzCommKeyWordsEN.keyId)], 非法，应该为字符型(In tz_通用关键字(tzCommKeyWords))!(clstzCommKeyWordsBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjtzCommKeyWordsEN.keyword) == false &&
    undefined !== pobjtzCommKeyWordsEN.keyword &&
    tzDataType.isString(pobjtzCommKeyWordsEN.keyword) === false
  ) {
    throw new Error(
      '(errid:Watl000060)字段[关键字(keyword)]的值:[$(pobjtzCommKeyWordsEN.keyword)], 非法，应该为字符型(In tz_通用关键字(tzCommKeyWords))!(clstzCommKeyWordsBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjtzCommKeyWordsEN.tableName) == false &&
    undefined !== pobjtzCommKeyWordsEN.tableName &&
    tzDataType.isString(pobjtzCommKeyWordsEN.tableName) === false
  ) {
    throw new Error(
      '(errid:Watl000060)字段[表名(tableName)]的值:[$(pobjtzCommKeyWordsEN.tableName)], 非法，应该为字符型(In tz_通用关键字(tzCommKeyWords))!(clstzCommKeyWordsBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjtzCommKeyWordsEN.tableKey) == false &&
    undefined !== pobjtzCommKeyWordsEN.tableKey &&
    tzDataType.isString(pobjtzCommKeyWordsEN.tableKey) === false
  ) {
    throw new Error(
      '(errid:Watl000060)字段[数据表关键字值(tableKey)]的值:[$(pobjtzCommKeyWordsEN.tableKey)], 非法，应该为字符型(In tz_通用关键字(tzCommKeyWords))!(clstzCommKeyWordsBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjtzCommKeyWordsEN.updUser) == false &&
    undefined !== pobjtzCommKeyWordsEN.updUser &&
    tzDataType.isString(pobjtzCommKeyWordsEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000060)字段[修改者(updUser)]的值:[$(pobjtzCommKeyWordsEN.updUser)], 非法，应该为字符型(In tz_通用关键字(tzCommKeyWords))!(clstzCommKeyWordsBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjtzCommKeyWordsEN.updDate) == false &&
    undefined !== pobjtzCommKeyWordsEN.updDate &&
    tzDataType.isString(pobjtzCommKeyWordsEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000060)字段[修改日期(updDate)]的值:[$(pobjtzCommKeyWordsEN.updDate)], 非法，应该为字符型(In tz_通用关键字(tzCommKeyWords))!(clstzCommKeyWordsBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjtzCommKeyWordsEN.memo) == false &&
    undefined !== pobjtzCommKeyWordsEN.memo &&
    tzDataType.isString(pobjtzCommKeyWordsEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000060)字段[说明(memo)]的值:[$(pobjtzCommKeyWordsEN.memo)], 非法，应该为字符型(In tz_通用关键字(tzCommKeyWords))!(clstzCommKeyWordsBL:CheckPropertyNew)',
    );
  }
  //检查外键， 作为外键应该和主键的字段长度是一样的， 若不一样，即非法！

  //设置说明该对象已经检查过了，后面不需要再检查，即非法！
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function tzCommKeyWordsCheckProperty4Update(pobjtzCommKeyWordsEN: clstzCommKeyWordsEN) {
  //检查字段长度， 若字符型字段长度超出规定的长度，即非法！
  if (
    IsNullOrEmpty(pobjtzCommKeyWordsEN.keyId) == false &&
    GetStrLen(pobjtzCommKeyWordsEN.keyId) > 8
  ) {
    throw new Error(
      '(errid:Watl000062)字段[关键字Id(keyId)]的长度不能超过8(In tz_通用关键字(tzCommKeyWords))!值:$(pobjtzCommKeyWordsEN.keyId)(clstzCommKeyWordsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjtzCommKeyWordsEN.keyword) == false &&
    GetStrLen(pobjtzCommKeyWordsEN.keyword) > 50
  ) {
    throw new Error(
      '(errid:Watl000062)字段[关键字(keyword)]的长度不能超过50(In tz_通用关键字(tzCommKeyWords))!值:$(pobjtzCommKeyWordsEN.keyword)(clstzCommKeyWordsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjtzCommKeyWordsEN.tableName) == false &&
    GetStrLen(pobjtzCommKeyWordsEN.tableName) > 100
  ) {
    throw new Error(
      '(errid:Watl000062)字段[表名(tableName)]的长度不能超过100(In tz_通用关键字(tzCommKeyWords))!值:$(pobjtzCommKeyWordsEN.tableName)(clstzCommKeyWordsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjtzCommKeyWordsEN.tableKey) == false &&
    GetStrLen(pobjtzCommKeyWordsEN.tableKey) > 100
  ) {
    throw new Error(
      '(errid:Watl000062)字段[数据表关键字值(tableKey)]的长度不能超过100(In tz_通用关键字(tzCommKeyWords))!值:$(pobjtzCommKeyWordsEN.tableKey)(clstzCommKeyWordsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjtzCommKeyWordsEN.updUser) == false &&
    GetStrLen(pobjtzCommKeyWordsEN.updUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000062)字段[修改者(updUser)]的长度不能超过20(In tz_通用关键字(tzCommKeyWords))!值:$(pobjtzCommKeyWordsEN.updUser)(clstzCommKeyWordsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjtzCommKeyWordsEN.updDate) == false &&
    GetStrLen(pobjtzCommKeyWordsEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000062)字段[修改日期(updDate)]的长度不能超过20(In tz_通用关键字(tzCommKeyWords))!值:$(pobjtzCommKeyWordsEN.updDate)(clstzCommKeyWordsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjtzCommKeyWordsEN.memo) == false &&
    GetStrLen(pobjtzCommKeyWordsEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000062)字段[说明(memo)]的长度不能超过1000(In tz_通用关键字(tzCommKeyWords))!值:$(pobjtzCommKeyWordsEN.memo)(clstzCommKeyWordsBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjtzCommKeyWordsEN.keyId) == false &&
    undefined !== pobjtzCommKeyWordsEN.keyId &&
    tzDataType.isString(pobjtzCommKeyWordsEN.keyId) === false
  ) {
    throw new Error(
      '(errid:Watl000063)字段[关键字Id(keyId)]的值:[$(pobjtzCommKeyWordsEN.keyId)], 非法，应该为字符型(In tz_通用关键字(tzCommKeyWords))!(clstzCommKeyWordsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjtzCommKeyWordsEN.keyword) == false &&
    undefined !== pobjtzCommKeyWordsEN.keyword &&
    tzDataType.isString(pobjtzCommKeyWordsEN.keyword) === false
  ) {
    throw new Error(
      '(errid:Watl000063)字段[关键字(keyword)]的值:[$(pobjtzCommKeyWordsEN.keyword)], 非法，应该为字符型(In tz_通用关键字(tzCommKeyWords))!(clstzCommKeyWordsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjtzCommKeyWordsEN.tableName) == false &&
    undefined !== pobjtzCommKeyWordsEN.tableName &&
    tzDataType.isString(pobjtzCommKeyWordsEN.tableName) === false
  ) {
    throw new Error(
      '(errid:Watl000063)字段[表名(tableName)]的值:[$(pobjtzCommKeyWordsEN.tableName)], 非法，应该为字符型(In tz_通用关键字(tzCommKeyWords))!(clstzCommKeyWordsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjtzCommKeyWordsEN.tableKey) == false &&
    undefined !== pobjtzCommKeyWordsEN.tableKey &&
    tzDataType.isString(pobjtzCommKeyWordsEN.tableKey) === false
  ) {
    throw new Error(
      '(errid:Watl000063)字段[数据表关键字值(tableKey)]的值:[$(pobjtzCommKeyWordsEN.tableKey)], 非法，应该为字符型(In tz_通用关键字(tzCommKeyWords))!(clstzCommKeyWordsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjtzCommKeyWordsEN.updUser) == false &&
    undefined !== pobjtzCommKeyWordsEN.updUser &&
    tzDataType.isString(pobjtzCommKeyWordsEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000063)字段[修改者(updUser)]的值:[$(pobjtzCommKeyWordsEN.updUser)], 非法，应该为字符型(In tz_通用关键字(tzCommKeyWords))!(clstzCommKeyWordsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjtzCommKeyWordsEN.updDate) == false &&
    undefined !== pobjtzCommKeyWordsEN.updDate &&
    tzDataType.isString(pobjtzCommKeyWordsEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000063)字段[修改日期(updDate)]的值:[$(pobjtzCommKeyWordsEN.updDate)], 非法，应该为字符型(In tz_通用关键字(tzCommKeyWords))!(clstzCommKeyWordsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjtzCommKeyWordsEN.memo) == false &&
    undefined !== pobjtzCommKeyWordsEN.memo &&
    tzDataType.isString(pobjtzCommKeyWordsEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000063)字段[说明(memo)]的值:[$(pobjtzCommKeyWordsEN.memo)], 非法，应该为字符型(In tz_通用关键字(tzCommKeyWords))!(clstzCommKeyWordsBL:CheckProperty4Update)',
    );
  }
  //检查主键是否为Null或者空！
  if (IsNullOrEmpty(pobjtzCommKeyWordsEN.keyId) === true) {
    throw new Error(
      '(errid:Watl000064)字段[关键字Id]不能为空(In tz_通用关键字)!(clstzCommKeyWordsBL:CheckProperty4Update)',
    );
  }
  //检查外键， 作为外键应该和主键的字段长度是一样的， 若不一样，即非法！
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2023-06-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function tzCommKeyWordsGetJSONStrByObj(pobjtzCommKeyWordsEN: clstzCommKeyWordsEN): string {
  pobjtzCommKeyWordsEN.sfUpdFldSetStr = pobjtzCommKeyWordsEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjtzCommKeyWordsEN);
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
 * 日期:2023-06-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
 */
export function tzCommKeyWordsGetObjLstByJSONStr(strJSON: string): Array<clstzCommKeyWordsEN> {
  let arrtzCommKeyWordsObjLst = new Array<clstzCommKeyWordsEN>();
  if (strJSON === '') {
    return arrtzCommKeyWordsObjLst;
  }
  try {
    arrtzCommKeyWordsObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrtzCommKeyWordsObjLst;
  }
  return arrtzCommKeyWordsObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-06-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrtzCommKeyWordsObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function tzCommKeyWordsGetObjLstByJSONObjLst(
  arrtzCommKeyWordsObjLstS: Array<clstzCommKeyWordsEN>,
): Array<clstzCommKeyWordsEN> {
  const arrtzCommKeyWordsObjLst = new Array<clstzCommKeyWordsEN>();
  for (const objInFor of arrtzCommKeyWordsObjLstS) {
    const obj1 = tzCommKeyWordsGetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrtzCommKeyWordsObjLst.push(obj1);
  }
  return arrtzCommKeyWordsObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-06-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function tzCommKeyWordsGetObjByJSONStr(strJSON: string): clstzCommKeyWordsEN {
  let pobjtzCommKeyWordsEN = new clstzCommKeyWordsEN();
  if (strJSON === '') {
    return pobjtzCommKeyWordsEN;
  }
  try {
    pobjtzCommKeyWordsEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjtzCommKeyWordsEN;
  }
  return pobjtzCommKeyWordsEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function tzCommKeyWordsGetCombineCondition(
  objtzCommKeyWordsCond: clstzCommKeyWordsEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objtzCommKeyWordsCond.dicFldComparisonOp,
      clstzCommKeyWordsEN.conKeyId,
    ) == true
  ) {
    const strComparisonOpKeyId: string =
      objtzCommKeyWordsCond.dicFldComparisonOp[clstzCommKeyWordsEN.conKeyId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clstzCommKeyWordsEN.conKeyId,
      objtzCommKeyWordsCond.keyId,
      strComparisonOpKeyId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objtzCommKeyWordsCond.dicFldComparisonOp,
      clstzCommKeyWordsEN.conKeyword,
    ) == true
  ) {
    const strComparisonOpKeyword: string =
      objtzCommKeyWordsCond.dicFldComparisonOp[clstzCommKeyWordsEN.conKeyword];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clstzCommKeyWordsEN.conKeyword,
      objtzCommKeyWordsCond.keyword,
      strComparisonOpKeyword,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objtzCommKeyWordsCond.dicFldComparisonOp,
      clstzCommKeyWordsEN.conTableName,
    ) == true
  ) {
    const strComparisonOpTableName: string =
      objtzCommKeyWordsCond.dicFldComparisonOp[clstzCommKeyWordsEN.conTableName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clstzCommKeyWordsEN.conTableName,
      objtzCommKeyWordsCond.tableName,
      strComparisonOpTableName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objtzCommKeyWordsCond.dicFldComparisonOp,
      clstzCommKeyWordsEN.conTableKey,
    ) == true
  ) {
    const strComparisonOpTableKey: string =
      objtzCommKeyWordsCond.dicFldComparisonOp[clstzCommKeyWordsEN.conTableKey];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clstzCommKeyWordsEN.conTableKey,
      objtzCommKeyWordsCond.tableKey,
      strComparisonOpTableKey,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objtzCommKeyWordsCond.dicFldComparisonOp,
      clstzCommKeyWordsEN.conUpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objtzCommKeyWordsCond.dicFldComparisonOp[clstzCommKeyWordsEN.conUpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clstzCommKeyWordsEN.conUpdUser,
      objtzCommKeyWordsCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objtzCommKeyWordsCond.dicFldComparisonOp,
      clstzCommKeyWordsEN.conUpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objtzCommKeyWordsCond.dicFldComparisonOp[clstzCommKeyWordsEN.conUpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clstzCommKeyWordsEN.conUpdDate,
      objtzCommKeyWordsCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objtzCommKeyWordsCond.dicFldComparisonOp,
      clstzCommKeyWordsEN.conMemo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objtzCommKeyWordsCond.dicFldComparisonOp[clstzCommKeyWordsEN.conMemo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clstzCommKeyWordsEN.conMemo,
      objtzCommKeyWordsCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--tzCommKeyWords(tz_通用关键字),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strTableKey: 数据表关键字值(要求唯一的字段)
 * @param strKeyword: 关键字(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function tzCommKeyWordsGetUniCondStrTableKeyKeyWord(
  objtzCommKeyWordsEN: clstzCommKeyWordsEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and TableKey = '{0}'", objtzCommKeyWordsEN.tableKey);
  strWhereCond += Format(" and Keyword = '{0}'", objtzCommKeyWordsEN.keyword);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--tzCommKeyWords(tz_通用关键字),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strTableKey: 数据表关键字值(要求唯一的字段)
 * @param strKeyword: 关键字(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function tzCommKeyWordsGetUniCondStr4UpdateTableKeyKeyWord(
  objtzCommKeyWordsEN: clstzCommKeyWordsEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and KeyId <> '{0}'", objtzCommKeyWordsEN.keyId);
  strWhereCond += Format(" and TableKey = '{0}'", objtzCommKeyWordsEN.tableKey);
  strWhereCond += Format(" and Keyword = '{0}'", objtzCommKeyWordsEN.keyword);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objtzCommKeyWordsENS:源对象
 * @param objtzCommKeyWordsENT:目标对象
 */
export function tzCommKeyWordsGetObjFromJsonObj(
  objtzCommKeyWordsENS: clstzCommKeyWordsEN,
): clstzCommKeyWordsEN {
  const objtzCommKeyWordsENT: clstzCommKeyWordsEN = new clstzCommKeyWordsEN();
  ObjectAssign(objtzCommKeyWordsENT, objtzCommKeyWordsENS);
  return objtzCommKeyWordsENT;
}
