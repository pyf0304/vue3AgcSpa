/**
 * 类名:clstz_CommKeyWordsWApi
 * 表名:tz_CommKeyWords(00050330)
 * 版本:2023.10.12.1(服务器:WIN-SRV103-116)
 * 日期:2023/10/12 14:39:30
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
 * tz_通用关键字(tz_CommKeyWords)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2023年10月12日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
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
import { clstz_CommKeyWordsEN } from '@/ts/L0Entity/SystemSet/clstz_CommKeyWordsEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const tz_CommKeyWords_Controller = 'tz_CommKeyWordsApi';
export const tz_CommKeyWords_ConstructorName = 'tz_CommKeyWords';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strKeyId:关键字
 * @returns 对象
 **/
export async function tz_CommKeyWords_GetObjByKeyIdAsync(
  strKeyId: string,
): Promise<clstz_CommKeyWordsEN | null> {
  const strThisFuncName = 'GetObjByKeyIdAsync';

  if (IsNullOrEmpty(strKeyId) == true) {
    const strMsg = Format('参数:[strKeyId]不能为空!(In clstz_CommKeyWordsWApi.GetObjByKeyIdAsync)');
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByKeyId';
  const strUrl = GetWebApiUrl(tz_CommKeyWords_Controller, strAction);

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
      const objtz_CommKeyWords = tz_CommKeyWords_GetObjFromJsonObj(returnObj);
      return objtz_CommKeyWords;
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
        tz_CommKeyWords_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tz_CommKeyWords_ConstructorName,
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
export async function tz_CommKeyWords_GetObjByKeyIdCache(strKeyId: string, bolTryAsyncOnce = true) {
  const strThisFuncName = 'GetObjByKeyIdCache';

  if (IsNullOrEmpty(strKeyId) == true) {
    const strMsg = Format('参数:[strKeyId]不能为空!(In clstz_CommKeyWordsWApi.GetObjByKeyIdCache)');
    console.error(strMsg);
    throw strMsg;
  }
  const arrtz_CommKeyWordsObjLstCache = await tz_CommKeyWords_GetObjLstCache();
  try {
    const arrtz_CommKeyWordsSel = arrtz_CommKeyWordsObjLstCache.filter((x) => x.keyId == strKeyId);
    let objtz_CommKeyWords: clstz_CommKeyWordsEN;
    if (arrtz_CommKeyWordsSel.length > 0) {
      objtz_CommKeyWords = arrtz_CommKeyWordsSel[0];
      return objtz_CommKeyWords;
    } else {
      if (bolTryAsyncOnce == true) {
        const objtz_CommKeyWordsConst = await tz_CommKeyWords_GetObjByKeyIdAsync(strKeyId);
        if (objtz_CommKeyWordsConst != null) {
          tz_CommKeyWords_ReFreshThisCache();
          return objtz_CommKeyWordsConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strKeyId,
      tz_CommKeyWords_ConstructorName,
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
export async function tz_CommKeyWords_GetObjByKeyIdlocalStorage(strKeyId: string) {
  const strThisFuncName = 'GetObjByKeyIdlocalStorage';

  if (IsNullOrEmpty(strKeyId) == true) {
    const strMsg = Format(
      '参数:[strKeyId]不能为空!(In clstz_CommKeyWordsWApi.GetObjByKeyIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clstz_CommKeyWordsEN._CurrTabName, strKeyId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objtz_CommKeyWordsCache: clstz_CommKeyWordsEN = JSON.parse(strTempObj);
    return objtz_CommKeyWordsCache;
  }
  try {
    const objtz_CommKeyWords = await tz_CommKeyWords_GetObjByKeyIdAsync(strKeyId);
    if (objtz_CommKeyWords != null) {
      localStorage.setItem(strKey, JSON.stringify(objtz_CommKeyWords));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objtz_CommKeyWords;
    }
    return objtz_CommKeyWords;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strKeyId,
      tz_CommKeyWords_ConstructorName,
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
 * @param objtz_CommKeyWords:所给的对象
 * @returns 对象
 */
export async function tz_CommKeyWords_UpdateObjInLstCache(
  objtz_CommKeyWords: clstz_CommKeyWordsEN,
) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrtz_CommKeyWordsObjLstCache = await tz_CommKeyWords_GetObjLstCache();
    const obj = arrtz_CommKeyWordsObjLstCache.find(
      (x) => x.tableKey == objtz_CommKeyWords.tableKey && x.keyword == objtz_CommKeyWords.keyword,
    );
    if (obj != null) {
      objtz_CommKeyWords.keyId = obj.keyId;
      ObjectAssign(obj, objtz_CommKeyWords);
    } else {
      arrtz_CommKeyWordsObjLstCache.push(objtz_CommKeyWords);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      tz_CommKeyWords_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/*该表没有名称字段,不能生成此函数!*/

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 * @returns 返回一个输出字段值
 */
export async function tz_CommKeyWords_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clstz_CommKeyWordsEN.con_KeyId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clstz_CommKeyWordsEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clstz_CommKeyWordsEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strKeyId = strInValue;
  if (IsNullOrEmpty(strInValue) == true) {
    return '';
  }
  const objtz_CommKeyWords = await tz_CommKeyWords_GetObjByKeyIdCache(strKeyId);
  if (objtz_CommKeyWords == null) return '';
  if (objtz_CommKeyWords.GetFldValue(strOutFldName) == null) return '';
  return objtz_CommKeyWords.GetFldValue(strOutFldName).toString();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function tz_CommKeyWords_SortFunDefa(
  a: clstz_CommKeyWordsEN,
  b: clstz_CommKeyWordsEN,
): number {
  return a.keyId.localeCompare(b.keyId);
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function tz_CommKeyWords_SortFunDefa2Fld(
  a: clstz_CommKeyWordsEN,
  b: clstz_CommKeyWordsEN,
): number {
  if (a.keyword == b.keyword) return a.tableName.localeCompare(b.tableName);
  else return a.keyword.localeCompare(b.keyword);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function tz_CommKeyWords_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clstz_CommKeyWordsEN.con_KeyId:
        return (a: clstz_CommKeyWordsEN, b: clstz_CommKeyWordsEN) => {
          return a.keyId.localeCompare(b.keyId);
        };
      case clstz_CommKeyWordsEN.con_Keyword:
        return (a: clstz_CommKeyWordsEN, b: clstz_CommKeyWordsEN) => {
          return a.keyword.localeCompare(b.keyword);
        };
      case clstz_CommKeyWordsEN.con_TableName:
        return (a: clstz_CommKeyWordsEN, b: clstz_CommKeyWordsEN) => {
          return a.tableName.localeCompare(b.tableName);
        };
      case clstz_CommKeyWordsEN.con_TableKey:
        return (a: clstz_CommKeyWordsEN, b: clstz_CommKeyWordsEN) => {
          return a.tableKey.localeCompare(b.tableKey);
        };
      case clstz_CommKeyWordsEN.con_UpdUser:
        return (a: clstz_CommKeyWordsEN, b: clstz_CommKeyWordsEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clstz_CommKeyWordsEN.con_UpdDate:
        return (a: clstz_CommKeyWordsEN, b: clstz_CommKeyWordsEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clstz_CommKeyWordsEN.con_Memo:
        return (a: clstz_CommKeyWordsEN, b: clstz_CommKeyWordsEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[tz_CommKeyWords]中不存在!(in ${tz_CommKeyWords_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clstz_CommKeyWordsEN.con_KeyId:
        return (a: clstz_CommKeyWordsEN, b: clstz_CommKeyWordsEN) => {
          return b.keyId.localeCompare(a.keyId);
        };
      case clstz_CommKeyWordsEN.con_Keyword:
        return (a: clstz_CommKeyWordsEN, b: clstz_CommKeyWordsEN) => {
          return b.keyword.localeCompare(a.keyword);
        };
      case clstz_CommKeyWordsEN.con_TableName:
        return (a: clstz_CommKeyWordsEN, b: clstz_CommKeyWordsEN) => {
          return b.tableName.localeCompare(a.tableName);
        };
      case clstz_CommKeyWordsEN.con_TableKey:
        return (a: clstz_CommKeyWordsEN, b: clstz_CommKeyWordsEN) => {
          return b.tableKey.localeCompare(a.tableKey);
        };
      case clstz_CommKeyWordsEN.con_UpdUser:
        return (a: clstz_CommKeyWordsEN, b: clstz_CommKeyWordsEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clstz_CommKeyWordsEN.con_UpdDate:
        return (a: clstz_CommKeyWordsEN, b: clstz_CommKeyWordsEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clstz_CommKeyWordsEN.con_Memo:
        return (a: clstz_CommKeyWordsEN, b: clstz_CommKeyWordsEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[tz_CommKeyWords]中不存在!(in ${tz_CommKeyWords_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function tz_CommKeyWords_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clstz_CommKeyWordsEN.con_KeyId:
      return (obj: clstz_CommKeyWordsEN) => {
        return obj.keyId === value;
      };
    case clstz_CommKeyWordsEN.con_Keyword:
      return (obj: clstz_CommKeyWordsEN) => {
        return obj.keyword === value;
      };
    case clstz_CommKeyWordsEN.con_TableName:
      return (obj: clstz_CommKeyWordsEN) => {
        return obj.tableName === value;
      };
    case clstz_CommKeyWordsEN.con_TableKey:
      return (obj: clstz_CommKeyWordsEN) => {
        return obj.tableKey === value;
      };
    case clstz_CommKeyWordsEN.con_UpdUser:
      return (obj: clstz_CommKeyWordsEN) => {
        return obj.updUser === value;
      };
    case clstz_CommKeyWordsEN.con_UpdDate:
      return (obj: clstz_CommKeyWordsEN) => {
        return obj.updDate === value;
      };
    case clstz_CommKeyWordsEN.con_Memo:
      return (obj: clstz_CommKeyWordsEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[tz_CommKeyWords]中不存在!(in ${tz_CommKeyWords_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 * @returns 返回一个关键字值列表
 */
export async function tz_CommKeyWords_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clstz_CommKeyWordsEN.con_KeyId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrtz_CommKeyWords = await tz_CommKeyWords_GetObjLstCache();
  if (arrtz_CommKeyWords == null) return [];
  let arrtz_CommKeyWordsSel = arrtz_CommKeyWords;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrtz_CommKeyWordsSel = arrtz_CommKeyWordsSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrtz_CommKeyWordsSel = arrtz_CommKeyWordsSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrtz_CommKeyWordsSel = arrtz_CommKeyWordsSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrtz_CommKeyWordsSel = arrtz_CommKeyWordsSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrtz_CommKeyWordsSel = arrtz_CommKeyWordsSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrtz_CommKeyWordsSel = arrtz_CommKeyWordsSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrtz_CommKeyWordsSel = arrtz_CommKeyWordsSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrtz_CommKeyWordsSel = arrtz_CommKeyWordsSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrtz_CommKeyWordsSel = arrtz_CommKeyWordsSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrtz_CommKeyWordsSel = arrtz_CommKeyWordsSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrtz_CommKeyWordsSel.length == 0) return [];
  return arrtz_CommKeyWordsSel.map((x) => x.keyId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function tz_CommKeyWords_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(tz_CommKeyWords_Controller, strAction);

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
        tz_CommKeyWords_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tz_CommKeyWords_ConstructorName,
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
export async function tz_CommKeyWords_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(tz_CommKeyWords_Controller, strAction);

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
        tz_CommKeyWords_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tz_CommKeyWords_ConstructorName,
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
export async function tz_CommKeyWords_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clstz_CommKeyWordsEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(tz_CommKeyWords_Controller, strAction);

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
      const objtz_CommKeyWords = tz_CommKeyWords_GetObjFromJsonObj(returnObj);
      return objtz_CommKeyWords;
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
        tz_CommKeyWords_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tz_CommKeyWords_ConstructorName,
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
export async function tz_CommKeyWords_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clstz_CommKeyWordsEN._CurrTabName;
  if (IsNullOrEmpty(clstz_CommKeyWordsEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clstz_CommKeyWordsEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrtz_CommKeyWordsExObjLstCache: Array<clstz_CommKeyWordsEN> = CacheHelper.Get(strKey);
    const arrtz_CommKeyWordsObjLstT = tz_CommKeyWords_GetObjLstByJSONObjLst(
      arrtz_CommKeyWordsExObjLstCache,
    );
    return arrtz_CommKeyWordsObjLstT;
  }
  try {
    const arrtz_CommKeyWordsExObjLst = await tz_CommKeyWords_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrtz_CommKeyWordsExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrtz_CommKeyWordsExObjLst.length,
    );
    console.log(strInfo);
    return arrtz_CommKeyWordsExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      tz_CommKeyWords_ConstructorName,
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
export async function tz_CommKeyWords_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clstz_CommKeyWordsEN._CurrTabName;
  if (IsNullOrEmpty(clstz_CommKeyWordsEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clstz_CommKeyWordsEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrtz_CommKeyWordsExObjLstCache: Array<clstz_CommKeyWordsEN> = JSON.parse(strTempObjLst);
    const arrtz_CommKeyWordsObjLstT = tz_CommKeyWords_GetObjLstByJSONObjLst(
      arrtz_CommKeyWordsExObjLstCache,
    );
    return arrtz_CommKeyWordsObjLstT;
  }
  try {
    const arrtz_CommKeyWordsExObjLst = await tz_CommKeyWords_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrtz_CommKeyWordsExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrtz_CommKeyWordsExObjLst.length,
    );
    console.log(strInfo);
    return arrtz_CommKeyWordsExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      tz_CommKeyWords_ConstructorName,
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
export async function tz_CommKeyWords_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clstz_CommKeyWordsEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrtz_CommKeyWordsObjLstCache: Array<clstz_CommKeyWordsEN> = JSON.parse(strTempObjLst);
    return arrtz_CommKeyWordsObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function tz_CommKeyWords_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clstz_CommKeyWordsEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(tz_CommKeyWords_Controller, strAction);

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
          tz_CommKeyWords_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = tz_CommKeyWords_GetObjLstByJSONObjLst(returnObjLst);
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
        tz_CommKeyWords_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tz_CommKeyWords_ConstructorName,
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
export async function tz_CommKeyWords_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clstz_CommKeyWordsEN._CurrTabName;
  if (IsNullOrEmpty(clstz_CommKeyWordsEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clstz_CommKeyWordsEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrtz_CommKeyWordsExObjLstCache: Array<clstz_CommKeyWordsEN> = JSON.parse(strTempObjLst);
    const arrtz_CommKeyWordsObjLstT = tz_CommKeyWords_GetObjLstByJSONObjLst(
      arrtz_CommKeyWordsExObjLstCache,
    );
    return arrtz_CommKeyWordsObjLstT;
  }
  try {
    const arrtz_CommKeyWordsExObjLst = await tz_CommKeyWords_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrtz_CommKeyWordsExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrtz_CommKeyWordsExObjLst.length,
    );
    console.log(strInfo);
    return arrtz_CommKeyWordsExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      tz_CommKeyWords_ConstructorName,
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
export async function tz_CommKeyWords_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clstz_CommKeyWordsEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrtz_CommKeyWordsObjLstCache: Array<clstz_CommKeyWordsEN> = JSON.parse(strTempObjLst);
    return arrtz_CommKeyWordsObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function tz_CommKeyWords_GetObjLstCache(): Promise<Array<clstz_CommKeyWordsEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrtz_CommKeyWordsObjLstCache;
  switch (clstz_CommKeyWordsEN.CacheModeId) {
    case '04': //sessionStorage
      arrtz_CommKeyWordsObjLstCache = await tz_CommKeyWords_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrtz_CommKeyWordsObjLstCache = await tz_CommKeyWords_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrtz_CommKeyWordsObjLstCache = await tz_CommKeyWords_GetObjLstClientCache();
      break;
    default:
      arrtz_CommKeyWordsObjLstCache = await tz_CommKeyWords_GetObjLstClientCache();
      break;
  }
  return arrtz_CommKeyWordsObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function tz_CommKeyWords_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrtz_CommKeyWordsObjLstCache;
  switch (clstz_CommKeyWordsEN.CacheModeId) {
    case '04': //sessionStorage
      arrtz_CommKeyWordsObjLstCache = await tz_CommKeyWords_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrtz_CommKeyWordsObjLstCache = await tz_CommKeyWords_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrtz_CommKeyWordsObjLstCache = null;
      break;
    default:
      arrtz_CommKeyWordsObjLstCache = null;
      break;
  }
  return arrtz_CommKeyWordsObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrKeyIdCond:条件对象
 * @returns 对象列表子集
 */
export async function tz_CommKeyWords_GetSubObjLstCache(
  objtz_CommKeyWordsCond: clstz_CommKeyWordsEN,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrtz_CommKeyWordsObjLstCache = await tz_CommKeyWords_GetObjLstCache();
  let arrtz_CommKeyWordsSel = arrtz_CommKeyWordsObjLstCache;
  if (
    objtz_CommKeyWordsCond.sfFldComparisonOp == null ||
    objtz_CommKeyWordsCond.sfFldComparisonOp == ''
  )
    return arrtz_CommKeyWordsSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objtz_CommKeyWordsCond.sfFldComparisonOp,
  );
  //console.log("clstz_CommKeyWordsWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objtz_CommKeyWordsCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrtz_CommKeyWordsSel = arrtz_CommKeyWordsSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objtz_CommKeyWordsCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrtz_CommKeyWordsSel = arrtz_CommKeyWordsSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrtz_CommKeyWordsSel = arrtz_CommKeyWordsSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrtz_CommKeyWordsSel = arrtz_CommKeyWordsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrtz_CommKeyWordsSel = arrtz_CommKeyWordsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrtz_CommKeyWordsSel = arrtz_CommKeyWordsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrtz_CommKeyWordsSel = arrtz_CommKeyWordsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrtz_CommKeyWordsSel = arrtz_CommKeyWordsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrtz_CommKeyWordsSel = arrtz_CommKeyWordsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrtz_CommKeyWordsSel = arrtz_CommKeyWordsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrtz_CommKeyWordsSel = arrtz_CommKeyWordsSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrtz_CommKeyWordsSel = arrtz_CommKeyWordsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrtz_CommKeyWordsSel = arrtz_CommKeyWordsSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrtz_CommKeyWordsSel = arrtz_CommKeyWordsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrtz_CommKeyWordsSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objtz_CommKeyWordsCond),
      tz_CommKeyWords_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clstz_CommKeyWordsEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrKeyId:关键字列表
 * @returns 对象列表
 **/
export async function tz_CommKeyWords_GetObjLstByKeyIdLstAsync(
  arrKeyId: Array<string>,
): Promise<Array<clstz_CommKeyWordsEN>> {
  const strThisFuncName = 'GetObjLstByKeyIdLstAsync';
  const strAction = 'GetObjLstByKeyIdLst';
  const strUrl = GetWebApiUrl(tz_CommKeyWords_Controller, strAction);

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
          tz_CommKeyWords_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = tz_CommKeyWords_GetObjLstByJSONObjLst(returnObjLst);
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
        tz_CommKeyWords_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tz_CommKeyWords_ConstructorName,
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
export async function tz_CommKeyWords_GetObjLstByKeyIdLstCache(arrKeyIdLst: Array<string>) {
  const strThisFuncName = 'GetObjLstByKeyIdLstCache';
  try {
    const arrtz_CommKeyWordsObjLstCache = await tz_CommKeyWords_GetObjLstCache();
    const arrtz_CommKeyWordsSel = arrtz_CommKeyWordsObjLstCache.filter(
      (x) => arrKeyIdLst.indexOf(x.keyId) > -1,
    );
    return arrtz_CommKeyWordsSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrKeyIdLst.join(','),
      tz_CommKeyWords_ConstructorName,
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
export async function tz_CommKeyWords_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clstz_CommKeyWordsEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(tz_CommKeyWords_Controller, strAction);

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
          tz_CommKeyWords_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = tz_CommKeyWords_GetObjLstByJSONObjLst(returnObjLst);
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
        tz_CommKeyWords_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tz_CommKeyWords_ConstructorName,
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
export async function tz_CommKeyWords_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clstz_CommKeyWordsEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(tz_CommKeyWords_Controller, strAction);

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
          tz_CommKeyWords_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = tz_CommKeyWords_GetObjLstByJSONObjLst(returnObjLst);
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
        tz_CommKeyWords_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tz_CommKeyWords_ConstructorName,
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
export async function tz_CommKeyWords_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clstz_CommKeyWordsEN>();
  const arrtz_CommKeyWordsObjLstCache = await tz_CommKeyWords_GetObjLstCache();
  if (arrtz_CommKeyWordsObjLstCache.length == 0) return arrtz_CommKeyWordsObjLstCache;
  let arrtz_CommKeyWordsSel = arrtz_CommKeyWordsObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objtz_CommKeyWordsCond = new clstz_CommKeyWordsEN();
  ObjectAssign(objtz_CommKeyWordsCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clstz_CommKeyWordsWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrtz_CommKeyWordsSel = arrtz_CommKeyWordsSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objtz_CommKeyWordsCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrtz_CommKeyWordsSel = arrtz_CommKeyWordsSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrtz_CommKeyWordsSel = arrtz_CommKeyWordsSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrtz_CommKeyWordsSel = arrtz_CommKeyWordsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrtz_CommKeyWordsSel = arrtz_CommKeyWordsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrtz_CommKeyWordsSel = arrtz_CommKeyWordsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrtz_CommKeyWordsSel = arrtz_CommKeyWordsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrtz_CommKeyWordsSel = arrtz_CommKeyWordsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrtz_CommKeyWordsSel = arrtz_CommKeyWordsSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrtz_CommKeyWordsSel = arrtz_CommKeyWordsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrtz_CommKeyWordsSel = arrtz_CommKeyWordsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrtz_CommKeyWordsSel = arrtz_CommKeyWordsSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrtz_CommKeyWordsSel = arrtz_CommKeyWordsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrtz_CommKeyWordsSel = arrtz_CommKeyWordsSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrtz_CommKeyWordsSel = arrtz_CommKeyWordsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrtz_CommKeyWordsSel.length == 0) return arrtz_CommKeyWordsSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrtz_CommKeyWordsSel = arrtz_CommKeyWordsSel.sort(
        tz_CommKeyWords_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrtz_CommKeyWordsSel = arrtz_CommKeyWordsSel.sort(objPagerPara.sortFun);
    }
    arrtz_CommKeyWordsSel = arrtz_CommKeyWordsSel.slice(intStart, intEnd);
    return arrtz_CommKeyWordsSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      tz_CommKeyWords_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clstz_CommKeyWordsEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function tz_CommKeyWords_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clstz_CommKeyWordsEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clstz_CommKeyWordsEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(tz_CommKeyWords_Controller, strAction);

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
          tz_CommKeyWords_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = tz_CommKeyWords_GetObjLstByJSONObjLst(returnObjLst);
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
        tz_CommKeyWords_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tz_CommKeyWords_ConstructorName,
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
 * 调用WebApi来删除记录,根据关键字来删除记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelRecordAsync)
 * @param strKeyId:关键字
 * @returns 获取删除的结果
 **/
export async function tz_CommKeyWords_DelRecordAsync(strKeyId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(tz_CommKeyWords_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strKeyId);

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
        tz_CommKeyWords_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tz_CommKeyWords_ConstructorName,
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
export async function tz_CommKeyWords_Deltz_CommKeyWordssAsync(
  arrKeyId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'Deltz_CommKeyWordssAsync';
  const strAction = 'Deltz_CommKeyWordss';
  const strUrl = GetWebApiUrl(tz_CommKeyWords_Controller, strAction);

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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        tz_CommKeyWords_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tz_CommKeyWords_ConstructorName,
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
export async function tz_CommKeyWords_Deltz_CommKeyWordssByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'Deltz_CommKeyWordssByCondAsync';
  const strAction = 'Deltz_CommKeyWordssByCond';
  const strUrl = GetWebApiUrl(tz_CommKeyWords_Controller, strAction);

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
        tz_CommKeyWords_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tz_CommKeyWords_ConstructorName,
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
 * @param objtz_CommKeyWordsEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function tz_CommKeyWords_AddNewRecordAsync(
  objtz_CommKeyWordsEN: clstz_CommKeyWordsEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objtz_CommKeyWordsEN);
  const strUrl = GetWebApiUrl(tz_CommKeyWords_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objtz_CommKeyWordsEN, config);
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
        tz_CommKeyWords_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tz_CommKeyWords_ConstructorName,
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
 * @param objtz_CommKeyWordsEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function tz_CommKeyWords_AddNewRecordWithMaxIdAsync(
  objtz_CommKeyWordsEN: clstz_CommKeyWordsEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(tz_CommKeyWords_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objtz_CommKeyWordsEN, config);
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
        tz_CommKeyWords_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tz_CommKeyWords_ConstructorName,
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
 * @param objtz_CommKeyWordsEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function tz_CommKeyWords_AddNewRecordWithReturnKeyAsync(
  objtz_CommKeyWordsEN: clstz_CommKeyWordsEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(tz_CommKeyWords_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objtz_CommKeyWordsEN, config);
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
        tz_CommKeyWords_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tz_CommKeyWords_ConstructorName,
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
 * @param objtz_CommKeyWordsEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function tz_CommKeyWords_UpdateRecordAsync(
  objtz_CommKeyWordsEN: clstz_CommKeyWordsEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objtz_CommKeyWordsEN.sfUpdFldSetStr === undefined ||
    objtz_CommKeyWordsEN.sfUpdFldSetStr === null ||
    objtz_CommKeyWordsEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objtz_CommKeyWordsEN.keyId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(tz_CommKeyWords_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objtz_CommKeyWordsEN, config);
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
        tz_CommKeyWords_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tz_CommKeyWords_ConstructorName,
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
 * @param objtz_CommKeyWordsEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function tz_CommKeyWords_UpdateWithConditionAsync(
  objtz_CommKeyWordsEN: clstz_CommKeyWordsEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objtz_CommKeyWordsEN.sfUpdFldSetStr === undefined ||
    objtz_CommKeyWordsEN.sfUpdFldSetStr === null ||
    objtz_CommKeyWordsEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objtz_CommKeyWordsEN.keyId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(tz_CommKeyWords_Controller, strAction);
  objtz_CommKeyWordsEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objtz_CommKeyWordsEN, config);
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
        tz_CommKeyWords_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tz_CommKeyWords_ConstructorName,
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
export async function tz_CommKeyWords_IsExistRecordCache(
  objtz_CommKeyWordsCond: clstz_CommKeyWordsEN,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrtz_CommKeyWordsObjLstCache = await tz_CommKeyWords_GetObjLstCache();
  if (arrtz_CommKeyWordsObjLstCache == null) return false;
  let arrtz_CommKeyWordsSel = arrtz_CommKeyWordsObjLstCache;
  if (
    objtz_CommKeyWordsCond.sfFldComparisonOp == null ||
    objtz_CommKeyWordsCond.sfFldComparisonOp == ''
  )
    return arrtz_CommKeyWordsSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objtz_CommKeyWordsCond.sfFldComparisonOp,
  );
  //console.log("clstz_CommKeyWordsWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objtz_CommKeyWordsCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objtz_CommKeyWordsCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrtz_CommKeyWordsSel = arrtz_CommKeyWordsSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrtz_CommKeyWordsSel = arrtz_CommKeyWordsSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrtz_CommKeyWordsSel = arrtz_CommKeyWordsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrtz_CommKeyWordsSel = arrtz_CommKeyWordsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrtz_CommKeyWordsSel = arrtz_CommKeyWordsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrtz_CommKeyWordsSel = arrtz_CommKeyWordsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrtz_CommKeyWordsSel = arrtz_CommKeyWordsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrtz_CommKeyWordsSel = arrtz_CommKeyWordsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrtz_CommKeyWordsSel = arrtz_CommKeyWordsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrtz_CommKeyWordsSel = arrtz_CommKeyWordsSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrtz_CommKeyWordsSel = arrtz_CommKeyWordsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrtz_CommKeyWordsSel = arrtz_CommKeyWordsSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrtz_CommKeyWordsSel = arrtz_CommKeyWordsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrtz_CommKeyWordsSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objtz_CommKeyWordsCond),
      tz_CommKeyWords_ConstructorName,
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
export async function tz_CommKeyWords_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(tz_CommKeyWords_Controller, strAction);

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
        tz_CommKeyWords_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tz_CommKeyWords_ConstructorName,
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
export async function tz_CommKeyWords_IsExistCache(strKeyId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrtz_CommKeyWordsObjLstCache = await tz_CommKeyWords_GetObjLstCache();
  if (arrtz_CommKeyWordsObjLstCache == null) return false;
  try {
    const arrtz_CommKeyWordsSel = arrtz_CommKeyWordsObjLstCache.filter((x) => x.keyId == strKeyId);
    if (arrtz_CommKeyWordsSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strKeyId,
      tz_CommKeyWords_ConstructorName,
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
export async function tz_CommKeyWords_IsExistAsync(strKeyId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(tz_CommKeyWords_Controller, strAction);

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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        tz_CommKeyWords_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tz_CommKeyWords_ConstructorName,
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
export async function tz_CommKeyWords_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(tz_CommKeyWords_Controller, strAction);

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
        tz_CommKeyWords_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tz_CommKeyWords_ConstructorName,
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
 * @param objtz_CommKeyWordsCond:条件对象
 * @returns 对象列表记录数
 */
export async function tz_CommKeyWords_GetRecCountByCondCache(
  objtz_CommKeyWordsCond: clstz_CommKeyWordsEN,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrtz_CommKeyWordsObjLstCache = await tz_CommKeyWords_GetObjLstCache();
  if (arrtz_CommKeyWordsObjLstCache == null) return 0;
  let arrtz_CommKeyWordsSel = arrtz_CommKeyWordsObjLstCache;
  if (
    objtz_CommKeyWordsCond.sfFldComparisonOp == null ||
    objtz_CommKeyWordsCond.sfFldComparisonOp == ''
  )
    return arrtz_CommKeyWordsSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objtz_CommKeyWordsCond.sfFldComparisonOp,
  );
  //console.log("clstz_CommKeyWordsWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objtz_CommKeyWordsCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrtz_CommKeyWordsSel = arrtz_CommKeyWordsSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objtz_CommKeyWordsCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrtz_CommKeyWordsSel = arrtz_CommKeyWordsSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrtz_CommKeyWordsSel = arrtz_CommKeyWordsSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrtz_CommKeyWordsSel = arrtz_CommKeyWordsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrtz_CommKeyWordsSel = arrtz_CommKeyWordsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrtz_CommKeyWordsSel = arrtz_CommKeyWordsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrtz_CommKeyWordsSel = arrtz_CommKeyWordsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrtz_CommKeyWordsSel = arrtz_CommKeyWordsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrtz_CommKeyWordsSel = arrtz_CommKeyWordsSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrtz_CommKeyWordsSel = arrtz_CommKeyWordsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrtz_CommKeyWordsSel = arrtz_CommKeyWordsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrtz_CommKeyWordsSel = arrtz_CommKeyWordsSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrtz_CommKeyWordsSel = arrtz_CommKeyWordsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrtz_CommKeyWordsSel = arrtz_CommKeyWordsSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrtz_CommKeyWordsSel = arrtz_CommKeyWordsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrtz_CommKeyWordsSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objtz_CommKeyWordsCond),
      tz_CommKeyWords_ConstructorName,
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
export async function tz_CommKeyWords_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(tz_CommKeyWords_Controller, strAction);

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
        tz_CommKeyWords_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tz_CommKeyWords_ConstructorName,
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
export function tz_CommKeyWords_GetWebApiUrl(strController: string, strAction: string): string {
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
export function tz_CommKeyWords_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功!');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clstz_CommKeyWordsEN._CurrTabName;
  switch (clstz_CommKeyWordsEN.CacheModeId) {
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
export function tz_CommKeyWords_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clstz_CommKeyWordsEN._CurrTabName;
    switch (clstz_CommKeyWordsEN.CacheModeId) {
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
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function tz_CommKeyWords_CheckPropertyNew(pobjtz_CommKeyWordsEN: clstz_CommKeyWordsEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjtz_CommKeyWordsEN.keyword) === true) {
    throw new Error(
      '(errid:Watl000411)字段[关键字]不能为空(In tz_通用关键字)!(clstz_CommKeyWordsBL:CheckPropertyNew0)',
    );
  }
  if (IsNullOrEmpty(pobjtz_CommKeyWordsEN.tableName) === true) {
    throw new Error(
      '(errid:Watl000411)字段[表名]不能为空(In tz_通用关键字)!(clstz_CommKeyWordsBL:CheckPropertyNew0)',
    );
  }
  if (IsNullOrEmpty(pobjtz_CommKeyWordsEN.tableKey) === true) {
    throw new Error(
      '(errid:Watl000411)字段[数据表关键字值]不能为空(In tz_通用关键字)!(clstz_CommKeyWordsBL:CheckPropertyNew0)',
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjtz_CommKeyWordsEN.keyId) == false &&
    GetStrLen(pobjtz_CommKeyWordsEN.keyId) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[关键字Id(keyId)]的长度不能超过8(In tz_通用关键字(tz_CommKeyWords))!值:$(pobjtz_CommKeyWordsEN.keyId)(clstz_CommKeyWordsBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjtz_CommKeyWordsEN.keyword) == false &&
    GetStrLen(pobjtz_CommKeyWordsEN.keyword) > 50
  ) {
    throw new Error(
      '(errid:Watl000413)字段[关键字(keyword)]的长度不能超过50(In tz_通用关键字(tz_CommKeyWords))!值:$(pobjtz_CommKeyWordsEN.keyword)(clstz_CommKeyWordsBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjtz_CommKeyWordsEN.tableName) == false &&
    GetStrLen(pobjtz_CommKeyWordsEN.tableName) > 100
  ) {
    throw new Error(
      '(errid:Watl000413)字段[表名(tableName)]的长度不能超过100(In tz_通用关键字(tz_CommKeyWords))!值:$(pobjtz_CommKeyWordsEN.tableName)(clstz_CommKeyWordsBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjtz_CommKeyWordsEN.tableKey) == false &&
    GetStrLen(pobjtz_CommKeyWordsEN.tableKey) > 100
  ) {
    throw new Error(
      '(errid:Watl000413)字段[数据表关键字值(tableKey)]的长度不能超过100(In tz_通用关键字(tz_CommKeyWords))!值:$(pobjtz_CommKeyWordsEN.tableKey)(clstz_CommKeyWordsBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjtz_CommKeyWordsEN.updUser) == false &&
    GetStrLen(pobjtz_CommKeyWordsEN.updUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改者(updUser)]的长度不能超过20(In tz_通用关键字(tz_CommKeyWords))!值:$(pobjtz_CommKeyWordsEN.updUser)(clstz_CommKeyWordsBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjtz_CommKeyWordsEN.updDate) == false &&
    GetStrLen(pobjtz_CommKeyWordsEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In tz_通用关键字(tz_CommKeyWords))!值:$(pobjtz_CommKeyWordsEN.updDate)(clstz_CommKeyWordsBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjtz_CommKeyWordsEN.memo) == false &&
    GetStrLen(pobjtz_CommKeyWordsEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In tz_通用关键字(tz_CommKeyWords))!值:$(pobjtz_CommKeyWordsEN.memo)(clstz_CommKeyWordsBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjtz_CommKeyWordsEN.keyId) == false &&
    undefined !== pobjtz_CommKeyWordsEN.keyId &&
    tzDataType.isString(pobjtz_CommKeyWordsEN.keyId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[关键字Id(keyId)]的值:[$(pobjtz_CommKeyWordsEN.keyId)], 非法,应该为字符型(In tz_通用关键字(tz_CommKeyWords))!(clstz_CommKeyWordsBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjtz_CommKeyWordsEN.keyword) == false &&
    undefined !== pobjtz_CommKeyWordsEN.keyword &&
    tzDataType.isString(pobjtz_CommKeyWordsEN.keyword) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[关键字(keyword)]的值:[$(pobjtz_CommKeyWordsEN.keyword)], 非法,应该为字符型(In tz_通用关键字(tz_CommKeyWords))!(clstz_CommKeyWordsBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjtz_CommKeyWordsEN.tableName) == false &&
    undefined !== pobjtz_CommKeyWordsEN.tableName &&
    tzDataType.isString(pobjtz_CommKeyWordsEN.tableName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[表名(tableName)]的值:[$(pobjtz_CommKeyWordsEN.tableName)], 非法,应该为字符型(In tz_通用关键字(tz_CommKeyWords))!(clstz_CommKeyWordsBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjtz_CommKeyWordsEN.tableKey) == false &&
    undefined !== pobjtz_CommKeyWordsEN.tableKey &&
    tzDataType.isString(pobjtz_CommKeyWordsEN.tableKey) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[数据表关键字值(tableKey)]的值:[$(pobjtz_CommKeyWordsEN.tableKey)], 非法,应该为字符型(In tz_通用关键字(tz_CommKeyWords))!(clstz_CommKeyWordsBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjtz_CommKeyWordsEN.updUser) == false &&
    undefined !== pobjtz_CommKeyWordsEN.updUser &&
    tzDataType.isString(pobjtz_CommKeyWordsEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改者(updUser)]的值:[$(pobjtz_CommKeyWordsEN.updUser)], 非法,应该为字符型(In tz_通用关键字(tz_CommKeyWords))!(clstz_CommKeyWordsBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjtz_CommKeyWordsEN.updDate) == false &&
    undefined !== pobjtz_CommKeyWordsEN.updDate &&
    tzDataType.isString(pobjtz_CommKeyWordsEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjtz_CommKeyWordsEN.updDate)], 非法,应该为字符型(In tz_通用关键字(tz_CommKeyWords))!(clstz_CommKeyWordsBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjtz_CommKeyWordsEN.memo) == false &&
    undefined !== pobjtz_CommKeyWordsEN.memo &&
    tzDataType.isString(pobjtz_CommKeyWordsEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[说明(memo)]的值:[$(pobjtz_CommKeyWordsEN.memo)], 非法,应该为字符型(In tz_通用关键字(tz_CommKeyWords))!(clstz_CommKeyWordsBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function tz_CommKeyWords_CheckProperty4Update(pobjtz_CommKeyWordsEN: clstz_CommKeyWordsEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjtz_CommKeyWordsEN.keyId) == false &&
    GetStrLen(pobjtz_CommKeyWordsEN.keyId) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[关键字Id(keyId)]的长度不能超过8(In tz_通用关键字(tz_CommKeyWords))!值:$(pobjtz_CommKeyWordsEN.keyId)(clstz_CommKeyWordsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjtz_CommKeyWordsEN.keyword) == false &&
    GetStrLen(pobjtz_CommKeyWordsEN.keyword) > 50
  ) {
    throw new Error(
      '(errid:Watl000416)字段[关键字(keyword)]的长度不能超过50(In tz_通用关键字(tz_CommKeyWords))!值:$(pobjtz_CommKeyWordsEN.keyword)(clstz_CommKeyWordsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjtz_CommKeyWordsEN.tableName) == false &&
    GetStrLen(pobjtz_CommKeyWordsEN.tableName) > 100
  ) {
    throw new Error(
      '(errid:Watl000416)字段[表名(tableName)]的长度不能超过100(In tz_通用关键字(tz_CommKeyWords))!值:$(pobjtz_CommKeyWordsEN.tableName)(clstz_CommKeyWordsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjtz_CommKeyWordsEN.tableKey) == false &&
    GetStrLen(pobjtz_CommKeyWordsEN.tableKey) > 100
  ) {
    throw new Error(
      '(errid:Watl000416)字段[数据表关键字值(tableKey)]的长度不能超过100(In tz_通用关键字(tz_CommKeyWords))!值:$(pobjtz_CommKeyWordsEN.tableKey)(clstz_CommKeyWordsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjtz_CommKeyWordsEN.updUser) == false &&
    GetStrLen(pobjtz_CommKeyWordsEN.updUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改者(updUser)]的长度不能超过20(In tz_通用关键字(tz_CommKeyWords))!值:$(pobjtz_CommKeyWordsEN.updUser)(clstz_CommKeyWordsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjtz_CommKeyWordsEN.updDate) == false &&
    GetStrLen(pobjtz_CommKeyWordsEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In tz_通用关键字(tz_CommKeyWords))!值:$(pobjtz_CommKeyWordsEN.updDate)(clstz_CommKeyWordsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjtz_CommKeyWordsEN.memo) == false &&
    GetStrLen(pobjtz_CommKeyWordsEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In tz_通用关键字(tz_CommKeyWords))!值:$(pobjtz_CommKeyWordsEN.memo)(clstz_CommKeyWordsBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjtz_CommKeyWordsEN.keyId) == false &&
    undefined !== pobjtz_CommKeyWordsEN.keyId &&
    tzDataType.isString(pobjtz_CommKeyWordsEN.keyId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[关键字Id(keyId)]的值:[$(pobjtz_CommKeyWordsEN.keyId)], 非法,应该为字符型(In tz_通用关键字(tz_CommKeyWords))!(clstz_CommKeyWordsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjtz_CommKeyWordsEN.keyword) == false &&
    undefined !== pobjtz_CommKeyWordsEN.keyword &&
    tzDataType.isString(pobjtz_CommKeyWordsEN.keyword) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[关键字(keyword)]的值:[$(pobjtz_CommKeyWordsEN.keyword)], 非法,应该为字符型(In tz_通用关键字(tz_CommKeyWords))!(clstz_CommKeyWordsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjtz_CommKeyWordsEN.tableName) == false &&
    undefined !== pobjtz_CommKeyWordsEN.tableName &&
    tzDataType.isString(pobjtz_CommKeyWordsEN.tableName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[表名(tableName)]的值:[$(pobjtz_CommKeyWordsEN.tableName)], 非法,应该为字符型(In tz_通用关键字(tz_CommKeyWords))!(clstz_CommKeyWordsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjtz_CommKeyWordsEN.tableKey) == false &&
    undefined !== pobjtz_CommKeyWordsEN.tableKey &&
    tzDataType.isString(pobjtz_CommKeyWordsEN.tableKey) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[数据表关键字值(tableKey)]的值:[$(pobjtz_CommKeyWordsEN.tableKey)], 非法,应该为字符型(In tz_通用关键字(tz_CommKeyWords))!(clstz_CommKeyWordsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjtz_CommKeyWordsEN.updUser) == false &&
    undefined !== pobjtz_CommKeyWordsEN.updUser &&
    tzDataType.isString(pobjtz_CommKeyWordsEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改者(updUser)]的值:[$(pobjtz_CommKeyWordsEN.updUser)], 非法,应该为字符型(In tz_通用关键字(tz_CommKeyWords))!(clstz_CommKeyWordsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjtz_CommKeyWordsEN.updDate) == false &&
    undefined !== pobjtz_CommKeyWordsEN.updDate &&
    tzDataType.isString(pobjtz_CommKeyWordsEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjtz_CommKeyWordsEN.updDate)], 非法,应该为字符型(In tz_通用关键字(tz_CommKeyWords))!(clstz_CommKeyWordsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjtz_CommKeyWordsEN.memo) == false &&
    undefined !== pobjtz_CommKeyWordsEN.memo &&
    tzDataType.isString(pobjtz_CommKeyWordsEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[说明(memo)]的值:[$(pobjtz_CommKeyWordsEN.memo)], 非法,应该为字符型(In tz_通用关键字(tz_CommKeyWords))!(clstz_CommKeyWordsBL:CheckProperty4Update)',
    );
  }
  //检查主键是否为Null或者空!
  if (IsNullOrEmpty(pobjtz_CommKeyWordsEN.keyId) === true) {
    throw new Error(
      '(errid:Watl000064)字段[关键字Id]不能为空(In tz_通用关键字)!(clstz_CommKeyWordsBL:CheckProperty4Update)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function tz_CommKeyWords_GetJSONStrByObj(
  pobjtz_CommKeyWordsEN: clstz_CommKeyWordsEN,
): string {
  pobjtz_CommKeyWordsEN.sfUpdFldSetStr = pobjtz_CommKeyWordsEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjtz_CommKeyWordsEN);
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
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
 */
export function tz_CommKeyWords_GetObjLstByJSONStr(strJSON: string): Array<clstz_CommKeyWordsEN> {
  let arrtz_CommKeyWordsObjLst = new Array<clstz_CommKeyWordsEN>();
  if (strJSON === '') {
    return arrtz_CommKeyWordsObjLst;
  }
  try {
    arrtz_CommKeyWordsObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrtz_CommKeyWordsObjLst;
  }
  return arrtz_CommKeyWordsObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrtz_CommKeyWordsObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function tz_CommKeyWords_GetObjLstByJSONObjLst(
  arrtz_CommKeyWordsObjLstS: Array<clstz_CommKeyWordsEN>,
): Array<clstz_CommKeyWordsEN> {
  const arrtz_CommKeyWordsObjLst = new Array<clstz_CommKeyWordsEN>();
  for (const objInFor of arrtz_CommKeyWordsObjLstS) {
    const obj1 = tz_CommKeyWords_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrtz_CommKeyWordsObjLst.push(obj1);
  }
  return arrtz_CommKeyWordsObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function tz_CommKeyWords_GetObjByJSONStr(strJSON: string): clstz_CommKeyWordsEN {
  let pobjtz_CommKeyWordsEN = new clstz_CommKeyWordsEN();
  if (strJSON === '') {
    return pobjtz_CommKeyWordsEN;
  }
  try {
    pobjtz_CommKeyWordsEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjtz_CommKeyWordsEN;
  }
  return pobjtz_CommKeyWordsEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function tz_CommKeyWords_GetCombineCondition(
  objtz_CommKeyWordsCond: clstz_CommKeyWordsEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objtz_CommKeyWordsCond.dicFldComparisonOp,
      clstz_CommKeyWordsEN.con_KeyId,
    ) == true
  ) {
    const strComparisonOpKeyId: string =
      objtz_CommKeyWordsCond.dicFldComparisonOp[clstz_CommKeyWordsEN.con_KeyId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clstz_CommKeyWordsEN.con_KeyId,
      objtz_CommKeyWordsCond.keyId,
      strComparisonOpKeyId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objtz_CommKeyWordsCond.dicFldComparisonOp,
      clstz_CommKeyWordsEN.con_Keyword,
    ) == true
  ) {
    const strComparisonOpKeyword: string =
      objtz_CommKeyWordsCond.dicFldComparisonOp[clstz_CommKeyWordsEN.con_Keyword];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clstz_CommKeyWordsEN.con_Keyword,
      objtz_CommKeyWordsCond.keyword,
      strComparisonOpKeyword,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objtz_CommKeyWordsCond.dicFldComparisonOp,
      clstz_CommKeyWordsEN.con_TableName,
    ) == true
  ) {
    const strComparisonOpTableName: string =
      objtz_CommKeyWordsCond.dicFldComparisonOp[clstz_CommKeyWordsEN.con_TableName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clstz_CommKeyWordsEN.con_TableName,
      objtz_CommKeyWordsCond.tableName,
      strComparisonOpTableName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objtz_CommKeyWordsCond.dicFldComparisonOp,
      clstz_CommKeyWordsEN.con_TableKey,
    ) == true
  ) {
    const strComparisonOpTableKey: string =
      objtz_CommKeyWordsCond.dicFldComparisonOp[clstz_CommKeyWordsEN.con_TableKey];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clstz_CommKeyWordsEN.con_TableKey,
      objtz_CommKeyWordsCond.tableKey,
      strComparisonOpTableKey,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objtz_CommKeyWordsCond.dicFldComparisonOp,
      clstz_CommKeyWordsEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objtz_CommKeyWordsCond.dicFldComparisonOp[clstz_CommKeyWordsEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clstz_CommKeyWordsEN.con_UpdUser,
      objtz_CommKeyWordsCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objtz_CommKeyWordsCond.dicFldComparisonOp,
      clstz_CommKeyWordsEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objtz_CommKeyWordsCond.dicFldComparisonOp[clstz_CommKeyWordsEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clstz_CommKeyWordsEN.con_UpdDate,
      objtz_CommKeyWordsCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objtz_CommKeyWordsCond.dicFldComparisonOp,
      clstz_CommKeyWordsEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objtz_CommKeyWordsCond.dicFldComparisonOp[clstz_CommKeyWordsEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clstz_CommKeyWordsEN.con_Memo,
      objtz_CommKeyWordsCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--tz_CommKeyWords(tz_通用关键字),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strTableKey: 数据表关键字值(要求唯一的字段)
 * @param strKeyword: 关键字(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function tz_CommKeyWords_GetUniCondStr(objtz_CommKeyWordsEN: clstz_CommKeyWordsEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and TableKey = '{0}'", objtz_CommKeyWordsEN.tableKey);
  strWhereCond += Format(" and Keyword = '{0}'", objtz_CommKeyWordsEN.keyword);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--tz_CommKeyWords(tz_通用关键字),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strTableKey: 数据表关键字值(要求唯一的字段)
 * @param strKeyword: 关键字(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function tz_CommKeyWords_GetUniCondStr4Update(
  objtz_CommKeyWordsEN: clstz_CommKeyWordsEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and KeyId <> '{0}'", objtz_CommKeyWordsEN.keyId);
  strWhereCond += Format(" and TableKey = '{0}'", objtz_CommKeyWordsEN.tableKey);
  strWhereCond += Format(" and Keyword = '{0}'", objtz_CommKeyWordsEN.keyword);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objtz_CommKeyWordsENS:源对象
 * @param objtz_CommKeyWordsENT:目标对象
 */
export function tz_CommKeyWords_GetObjFromJsonObj(
  objtz_CommKeyWordsENS: clstz_CommKeyWordsEN,
): clstz_CommKeyWordsEN {
  const objtz_CommKeyWordsENT: clstz_CommKeyWordsEN = new clstz_CommKeyWordsEN();
  ObjectAssign(objtz_CommKeyWordsENT, objtz_CommKeyWordsENS);
  return objtz_CommKeyWordsENT;
}
