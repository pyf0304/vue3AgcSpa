/**
 * 类名:clsCharEncodingWApi
 * 表名:CharEncoding(00050263)
 * 版本:2023.10.12.1(服务器:WIN-SRV103-116)
 * 日期:2023/10/12 14:40:30
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:系统参数(SysPara)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 字符编码(CharEncoding)
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
  BindDdl_ObjLstInDivObj,
  GetExceptionStr,
  myShowErrorMsg,
  ObjectAssign,
} from '@/ts/PubFun/clsCommFunc4Web';
import { clsCharEncodingEN } from '@/ts/L0Entity/SysPara/clsCharEncodingEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const charEncoding_Controller = 'CharEncodingApi';
export const charEncoding_ConstructorName = 'charEncoding';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strCharEncodingId:关键字
 * @returns 对象
 **/
export async function CharEncoding_GetObjByCharEncodingIdAsync(
  strCharEncodingId: string,
): Promise<clsCharEncodingEN | null> {
  const strThisFuncName = 'GetObjByCharEncodingIdAsync';

  if (IsNullOrEmpty(strCharEncodingId) == true) {
    const strMsg = Format(
      '参数:[strCharEncodingId]不能为空!(In clsCharEncodingWApi.GetObjByCharEncodingIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByCharEncodingId';
  const strUrl = GetWebApiUrl(charEncoding_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strCharEncodingId,
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
      const objCharEncoding = CharEncoding_GetObjFromJsonObj(returnObj);
      return objCharEncoding;
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
        charEncoding_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        charEncoding_ConstructorName,
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
 * @param strCharEncodingId:所给的关键字
 * @returns 对象
 */
export async function CharEncoding_GetObjByCharEncodingIdCache(
  strCharEncodingId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByCharEncodingIdCache';

  if (IsNullOrEmpty(strCharEncodingId) == true) {
    const strMsg = Format(
      '参数:[strCharEncodingId]不能为空!(In clsCharEncodingWApi.GetObjByCharEncodingIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrCharEncodingObjLstCache = await CharEncoding_GetObjLstCache();
  try {
    const arrCharEncodingSel = arrCharEncodingObjLstCache.filter(
      (x) => x.charEncodingId == strCharEncodingId,
    );
    let objCharEncoding: clsCharEncodingEN;
    if (arrCharEncodingSel.length > 0) {
      objCharEncoding = arrCharEncodingSel[0];
      return objCharEncoding;
    } else {
      if (bolTryAsyncOnce == true) {
        const objCharEncodingConst = await CharEncoding_GetObjByCharEncodingIdAsync(
          strCharEncodingId,
        );
        if (objCharEncodingConst != null) {
          CharEncoding_ReFreshThisCache();
          return objCharEncodingConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strCharEncodingId,
      charEncoding_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strCharEncodingId:所给的关键字
 * @returns 对象
 */
export async function CharEncoding_GetObjByCharEncodingIdlocalStorage(strCharEncodingId: string) {
  const strThisFuncName = 'GetObjByCharEncodingIdlocalStorage';

  if (IsNullOrEmpty(strCharEncodingId) == true) {
    const strMsg = Format(
      '参数:[strCharEncodingId]不能为空!(In clsCharEncodingWApi.GetObjByCharEncodingIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsCharEncodingEN._CurrTabName, strCharEncodingId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objCharEncodingCache: clsCharEncodingEN = JSON.parse(strTempObj);
    return objCharEncodingCache;
  }
  try {
    const objCharEncoding = await CharEncoding_GetObjByCharEncodingIdAsync(strCharEncodingId);
    if (objCharEncoding != null) {
      localStorage.setItem(strKey, JSON.stringify(objCharEncoding));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objCharEncoding;
    }
    return objCharEncoding;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strCharEncodingId,
      charEncoding_ConstructorName,
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
 * @param objCharEncoding:所给的对象
 * @returns 对象
 */
export async function CharEncoding_UpdateObjInLstCache(objCharEncoding: clsCharEncodingEN) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrCharEncodingObjLstCache = await CharEncoding_GetObjLstCache();
    const obj = arrCharEncodingObjLstCache.find(
      (x) => x.charEncodingId == objCharEncoding.charEncodingId,
    );
    if (obj != null) {
      objCharEncoding.charEncodingId = obj.charEncodingId;
      ObjectAssign(obj, objCharEncoding);
    } else {
      arrCharEncodingObjLstCache.push(objCharEncoding);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      charEncoding_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strCharEncodingId:所给的关键字
 * @returns 对象
 */
export async function CharEncoding_GetNameByCharEncodingIdCache(strCharEncodingId: string) {
  if (IsNullOrEmpty(strCharEncodingId) == true) {
    const strMsg = Format(
      '参数:[strCharEncodingId]不能为空!(In clsCharEncodingWApi.GetNameByCharEncodingIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrCharEncodingObjLstCache = await CharEncoding_GetObjLstCache();
  if (arrCharEncodingObjLstCache == null) return '';
  try {
    const arrCharEncodingSel = arrCharEncodingObjLstCache.filter(
      (x) => x.charEncodingId == strCharEncodingId,
    );
    let objCharEncoding: clsCharEncodingEN;
    if (arrCharEncodingSel.length > 0) {
      objCharEncoding = arrCharEncodingSel[0];
      return objCharEncoding.charEncodingName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strCharEncodingId,
    );
    console.error(strMsg);
    alert(strMsg);
  }
  return '';
}

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
export async function CharEncoding_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsCharEncodingEN.con_CharEncodingId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsCharEncodingEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsCharEncodingEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strCharEncodingId = strInValue;
  if (IsNullOrEmpty(strInValue) == true) {
    return '';
  }
  const objCharEncoding = await CharEncoding_GetObjByCharEncodingIdCache(strCharEncodingId);
  if (objCharEncoding == null) return '';
  if (objCharEncoding.GetFldValue(strOutFldName) == null) return '';
  return objCharEncoding.GetFldValue(strOutFldName).toString();
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
export function CharEncoding_SortFunDefa(a: clsCharEncodingEN, b: clsCharEncodingEN): number {
  return a.charEncodingId.localeCompare(b.charEncodingId);
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
export function CharEncoding_SortFunDefa2Fld(a: clsCharEncodingEN, b: clsCharEncodingEN): number {
  if (a.charEncodingName == b.charEncodingName) return a.memo.localeCompare(b.memo);
  else return a.charEncodingName.localeCompare(b.charEncodingName);
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
export function CharEncoding_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsCharEncodingEN.con_CharEncodingId:
        return (a: clsCharEncodingEN, b: clsCharEncodingEN) => {
          return a.charEncodingId.localeCompare(b.charEncodingId);
        };
      case clsCharEncodingEN.con_CharEncodingName:
        return (a: clsCharEncodingEN, b: clsCharEncodingEN) => {
          return a.charEncodingName.localeCompare(b.charEncodingName);
        };
      case clsCharEncodingEN.con_IsDefault:
        return (a: clsCharEncodingEN) => {
          if (a.isDefault == true) return 1;
          else return -1;
        };
      case clsCharEncodingEN.con_Memo:
        return (a: clsCharEncodingEN, b: clsCharEncodingEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[CharEncoding]中不存在!(in ${charEncoding_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsCharEncodingEN.con_CharEncodingId:
        return (a: clsCharEncodingEN, b: clsCharEncodingEN) => {
          return b.charEncodingId.localeCompare(a.charEncodingId);
        };
      case clsCharEncodingEN.con_CharEncodingName:
        return (a: clsCharEncodingEN, b: clsCharEncodingEN) => {
          return b.charEncodingName.localeCompare(a.charEncodingName);
        };
      case clsCharEncodingEN.con_IsDefault:
        return (b: clsCharEncodingEN) => {
          if (b.isDefault == true) return 1;
          else return -1;
        };
      case clsCharEncodingEN.con_Memo:
        return (a: clsCharEncodingEN, b: clsCharEncodingEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[CharEncoding]中不存在!(in ${charEncoding_ConstructorName}.${strThisFuncName})`;
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
export async function CharEncoding_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsCharEncodingEN.con_CharEncodingId:
      return (obj: clsCharEncodingEN) => {
        return obj.charEncodingId === value;
      };
    case clsCharEncodingEN.con_CharEncodingName:
      return (obj: clsCharEncodingEN) => {
        return obj.charEncodingName === value;
      };
    case clsCharEncodingEN.con_IsDefault:
      return (obj: clsCharEncodingEN) => {
        return obj.isDefault === value;
      };
    case clsCharEncodingEN.con_Memo:
      return (obj: clsCharEncodingEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[CharEncoding]中不存在!(in ${charEncoding_ConstructorName}.${strThisFuncName})`;
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
export async function CharEncoding_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsCharEncodingEN.con_CharEncodingId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrCharEncoding = await CharEncoding_GetObjLstCache();
  if (arrCharEncoding == null) return [];
  let arrCharEncodingSel = arrCharEncoding;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrCharEncodingSel = arrCharEncodingSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrCharEncodingSel = arrCharEncodingSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrCharEncodingSel = arrCharEncodingSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrCharEncodingSel = arrCharEncodingSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrCharEncodingSel = arrCharEncodingSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrCharEncodingSel = arrCharEncodingSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrCharEncodingSel = arrCharEncodingSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrCharEncodingSel = arrCharEncodingSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrCharEncodingSel = arrCharEncodingSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrCharEncodingSel = arrCharEncodingSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrCharEncodingSel.length == 0) return [];
  return arrCharEncodingSel.map((x) => x.charEncodingId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function CharEncoding_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(charEncoding_Controller, strAction);

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
        charEncoding_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        charEncoding_ConstructorName,
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
export async function CharEncoding_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(charEncoding_Controller, strAction);

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
        charEncoding_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        charEncoding_ConstructorName,
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
export async function CharEncoding_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsCharEncodingEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(charEncoding_Controller, strAction);

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
      const objCharEncoding = CharEncoding_GetObjFromJsonObj(returnObj);
      return objCharEncoding;
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
        charEncoding_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        charEncoding_ConstructorName,
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
export async function CharEncoding_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsCharEncodingEN._CurrTabName;
  if (IsNullOrEmpty(clsCharEncodingEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsCharEncodingEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrCharEncodingExObjLstCache: Array<clsCharEncodingEN> = CacheHelper.Get(strKey);
    const arrCharEncodingObjLstT = CharEncoding_GetObjLstByJSONObjLst(arrCharEncodingExObjLstCache);
    return arrCharEncodingObjLstT;
  }
  try {
    const arrCharEncodingExObjLst = await CharEncoding_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrCharEncodingExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrCharEncodingExObjLst.length,
    );
    console.log(strInfo);
    return arrCharEncodingExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      charEncoding_ConstructorName,
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
export async function CharEncoding_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsCharEncodingEN._CurrTabName;
  if (IsNullOrEmpty(clsCharEncodingEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsCharEncodingEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrCharEncodingExObjLstCache: Array<clsCharEncodingEN> = JSON.parse(strTempObjLst);
    const arrCharEncodingObjLstT = CharEncoding_GetObjLstByJSONObjLst(arrCharEncodingExObjLstCache);
    return arrCharEncodingObjLstT;
  }
  try {
    const arrCharEncodingExObjLst = await CharEncoding_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrCharEncodingExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrCharEncodingExObjLst.length,
    );
    console.log(strInfo);
    return arrCharEncodingExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      charEncoding_ConstructorName,
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
export async function CharEncoding_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsCharEncodingEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrCharEncodingObjLstCache: Array<clsCharEncodingEN> = JSON.parse(strTempObjLst);
    return arrCharEncodingObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function CharEncoding_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsCharEncodingEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(charEncoding_Controller, strAction);

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
          charEncoding_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = CharEncoding_GetObjLstByJSONObjLst(returnObjLst);
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
        charEncoding_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        charEncoding_ConstructorName,
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
export async function CharEncoding_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsCharEncodingEN._CurrTabName;
  if (IsNullOrEmpty(clsCharEncodingEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsCharEncodingEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrCharEncodingExObjLstCache: Array<clsCharEncodingEN> = JSON.parse(strTempObjLst);
    const arrCharEncodingObjLstT = CharEncoding_GetObjLstByJSONObjLst(arrCharEncodingExObjLstCache);
    return arrCharEncodingObjLstT;
  }
  try {
    const arrCharEncodingExObjLst = await CharEncoding_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrCharEncodingExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrCharEncodingExObjLst.length,
    );
    console.log(strInfo);
    return arrCharEncodingExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      charEncoding_ConstructorName,
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
export async function CharEncoding_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsCharEncodingEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrCharEncodingObjLstCache: Array<clsCharEncodingEN> = JSON.parse(strTempObjLst);
    return arrCharEncodingObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function CharEncoding_GetObjLstCache(): Promise<Array<clsCharEncodingEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrCharEncodingObjLstCache;
  switch (clsCharEncodingEN.CacheModeId) {
    case '04': //sessionStorage
      arrCharEncodingObjLstCache = await CharEncoding_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrCharEncodingObjLstCache = await CharEncoding_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrCharEncodingObjLstCache = await CharEncoding_GetObjLstClientCache();
      break;
    default:
      arrCharEncodingObjLstCache = await CharEncoding_GetObjLstClientCache();
      break;
  }
  return arrCharEncodingObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function CharEncoding_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrCharEncodingObjLstCache;
  switch (clsCharEncodingEN.CacheModeId) {
    case '04': //sessionStorage
      arrCharEncodingObjLstCache = await CharEncoding_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrCharEncodingObjLstCache = await CharEncoding_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrCharEncodingObjLstCache = null;
      break;
    default:
      arrCharEncodingObjLstCache = null;
      break;
  }
  return arrCharEncodingObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrCharEncodingIdCond:条件对象
 * @returns 对象列表子集
 */
export async function CharEncoding_GetSubObjLstCache(objCharEncodingCond: clsCharEncodingEN) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrCharEncodingObjLstCache = await CharEncoding_GetObjLstCache();
  let arrCharEncodingSel = arrCharEncodingObjLstCache;
  if (objCharEncodingCond.sfFldComparisonOp == null || objCharEncodingCond.sfFldComparisonOp == '')
    return arrCharEncodingSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objCharEncodingCond.sfFldComparisonOp,
  );
  //console.log("clsCharEncodingWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCharEncodingCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrCharEncodingSel = arrCharEncodingSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objCharEncodingCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrCharEncodingSel = arrCharEncodingSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrCharEncodingSel = arrCharEncodingSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrCharEncodingSel = arrCharEncodingSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrCharEncodingSel = arrCharEncodingSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrCharEncodingSel = arrCharEncodingSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrCharEncodingSel = arrCharEncodingSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrCharEncodingSel = arrCharEncodingSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrCharEncodingSel = arrCharEncodingSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrCharEncodingSel = arrCharEncodingSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrCharEncodingSel = arrCharEncodingSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrCharEncodingSel = arrCharEncodingSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrCharEncodingSel = arrCharEncodingSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrCharEncodingSel = arrCharEncodingSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrCharEncodingSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objCharEncodingCond),
      charEncoding_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsCharEncodingEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrCharEncodingId:关键字列表
 * @returns 对象列表
 **/
export async function CharEncoding_GetObjLstByCharEncodingIdLstAsync(
  arrCharEncodingId: Array<string>,
): Promise<Array<clsCharEncodingEN>> {
  const strThisFuncName = 'GetObjLstByCharEncodingIdLstAsync';
  const strAction = 'GetObjLstByCharEncodingIdLst';
  const strUrl = GetWebApiUrl(charEncoding_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrCharEncodingId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          charEncoding_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = CharEncoding_GetObjLstByJSONObjLst(returnObjLst);
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
        charEncoding_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        charEncoding_ConstructorName,
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
 * @param arrstrCharEncodingIdLst:关键字列表
 * @returns 对象列表
 */
export async function CharEncoding_GetObjLstByCharEncodingIdLstCache(
  arrCharEncodingIdLst: Array<string>,
) {
  const strThisFuncName = 'GetObjLstByCharEncodingIdLstCache';
  try {
    const arrCharEncodingObjLstCache = await CharEncoding_GetObjLstCache();
    const arrCharEncodingSel = arrCharEncodingObjLstCache.filter(
      (x) => arrCharEncodingIdLst.indexOf(x.charEncodingId) > -1,
    );
    return arrCharEncodingSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrCharEncodingIdLst.join(','),
      charEncoding_ConstructorName,
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
export async function CharEncoding_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsCharEncodingEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(charEncoding_Controller, strAction);

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
          charEncoding_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = CharEncoding_GetObjLstByJSONObjLst(returnObjLst);
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
        charEncoding_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        charEncoding_ConstructorName,
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
export async function CharEncoding_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsCharEncodingEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(charEncoding_Controller, strAction);

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
          charEncoding_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = CharEncoding_GetObjLstByJSONObjLst(returnObjLst);
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
        charEncoding_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        charEncoding_ConstructorName,
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
export async function CharEncoding_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsCharEncodingEN>();
  const arrCharEncodingObjLstCache = await CharEncoding_GetObjLstCache();
  if (arrCharEncodingObjLstCache.length == 0) return arrCharEncodingObjLstCache;
  let arrCharEncodingSel = arrCharEncodingObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objCharEncodingCond = new clsCharEncodingEN();
  ObjectAssign(objCharEncodingCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsCharEncodingWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrCharEncodingSel = arrCharEncodingSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objCharEncodingCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrCharEncodingSel = arrCharEncodingSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrCharEncodingSel = arrCharEncodingSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrCharEncodingSel = arrCharEncodingSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrCharEncodingSel = arrCharEncodingSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrCharEncodingSel = arrCharEncodingSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrCharEncodingSel = arrCharEncodingSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrCharEncodingSel = arrCharEncodingSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrCharEncodingSel = arrCharEncodingSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrCharEncodingSel = arrCharEncodingSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrCharEncodingSel = arrCharEncodingSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrCharEncodingSel = arrCharEncodingSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrCharEncodingSel = arrCharEncodingSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrCharEncodingSel = arrCharEncodingSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrCharEncodingSel = arrCharEncodingSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrCharEncodingSel.length == 0) return arrCharEncodingSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrCharEncodingSel = arrCharEncodingSel.sort(
        CharEncoding_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrCharEncodingSel = arrCharEncodingSel.sort(objPagerPara.sortFun);
    }
    arrCharEncodingSel = arrCharEncodingSel.slice(intStart, intEnd);
    return arrCharEncodingSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      charEncoding_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsCharEncodingEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function CharEncoding_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsCharEncodingEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsCharEncodingEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(charEncoding_Controller, strAction);

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
          charEncoding_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = CharEncoding_GetObjLstByJSONObjLst(returnObjLst);
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
        charEncoding_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        charEncoding_ConstructorName,
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
 * @param strCharEncodingId:关键字
 * @returns 获取删除的结果
 **/
export async function CharEncoding_DelRecordAsync(strCharEncodingId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(charEncoding_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strCharEncodingId);

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
        charEncoding_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        charEncoding_ConstructorName,
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
 * @param arrCharEncodingId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function CharEncoding_DelCharEncodingsAsync(
  arrCharEncodingId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelCharEncodingsAsync';
  const strAction = 'DelCharEncodings';
  const strUrl = GetWebApiUrl(charEncoding_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrCharEncodingId, config);
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
        charEncoding_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        charEncoding_ConstructorName,
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
export async function CharEncoding_DelCharEncodingsByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelCharEncodingsByCondAsync';
  const strAction = 'DelCharEncodingsByCond';
  const strUrl = GetWebApiUrl(charEncoding_Controller, strAction);

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
        charEncoding_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        charEncoding_ConstructorName,
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
 * @param objCharEncodingEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function CharEncoding_AddNewRecordAsync(
  objCharEncodingEN: clsCharEncodingEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  if (objCharEncodingEN.charEncodingId === null || objCharEncodingEN.charEncodingId === '') {
    const strMsg = '需要的对象的关键字为空,不能添加!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objCharEncodingEN);
  const strUrl = GetWebApiUrl(charEncoding_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objCharEncodingEN, config);
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
        charEncoding_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        charEncoding_ConstructorName,
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
 * @param objCharEncodingEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function CharEncoding_AddNewRecordWithMaxIdAsync(
  objCharEncodingEN: clsCharEncodingEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(charEncoding_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objCharEncodingEN, config);
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
        charEncoding_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        charEncoding_ConstructorName,
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
 * @param objCharEncodingEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function CharEncoding_AddNewRecordWithReturnKeyAsync(
  objCharEncodingEN: clsCharEncodingEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(charEncoding_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objCharEncodingEN, config);
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
        charEncoding_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        charEncoding_ConstructorName,
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
 * @param objCharEncodingEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function CharEncoding_UpdateRecordAsync(
  objCharEncodingEN: clsCharEncodingEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objCharEncodingEN.sfUpdFldSetStr === undefined ||
    objCharEncodingEN.sfUpdFldSetStr === null ||
    objCharEncodingEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objCharEncodingEN.charEncodingId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(charEncoding_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objCharEncodingEN, config);
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
        charEncoding_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        charEncoding_ConstructorName,
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
 * @param objCharEncodingEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function CharEncoding_UpdateWithConditionAsync(
  objCharEncodingEN: clsCharEncodingEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objCharEncodingEN.sfUpdFldSetStr === undefined ||
    objCharEncodingEN.sfUpdFldSetStr === null ||
    objCharEncodingEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objCharEncodingEN.charEncodingId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(charEncoding_Controller, strAction);
  objCharEncodingEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objCharEncodingEN, config);
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
        charEncoding_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        charEncoding_ConstructorName,
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
 * @param objstrCharEncodingIdCond:条件对象
 * @returns 对象列表子集
 */
export async function CharEncoding_IsExistRecordCache(objCharEncodingCond: clsCharEncodingEN) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrCharEncodingObjLstCache = await CharEncoding_GetObjLstCache();
  if (arrCharEncodingObjLstCache == null) return false;
  let arrCharEncodingSel = arrCharEncodingObjLstCache;
  if (objCharEncodingCond.sfFldComparisonOp == null || objCharEncodingCond.sfFldComparisonOp == '')
    return arrCharEncodingSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objCharEncodingCond.sfFldComparisonOp,
  );
  //console.log("clsCharEncodingWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCharEncodingCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objCharEncodingCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrCharEncodingSel = arrCharEncodingSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrCharEncodingSel = arrCharEncodingSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrCharEncodingSel = arrCharEncodingSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrCharEncodingSel = arrCharEncodingSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrCharEncodingSel = arrCharEncodingSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrCharEncodingSel = arrCharEncodingSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrCharEncodingSel = arrCharEncodingSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrCharEncodingSel = arrCharEncodingSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrCharEncodingSel = arrCharEncodingSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrCharEncodingSel = arrCharEncodingSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrCharEncodingSel = arrCharEncodingSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrCharEncodingSel = arrCharEncodingSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrCharEncodingSel = arrCharEncodingSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrCharEncodingSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objCharEncodingCond),
      charEncoding_ConstructorName,
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
export async function CharEncoding_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(charEncoding_Controller, strAction);

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
        charEncoding_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        charEncoding_ConstructorName,
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
 * @param strCharEncodingId:所给的关键字
 * @returns 对象
 */
export async function CharEncoding_IsExistCache(strCharEncodingId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrCharEncodingObjLstCache = await CharEncoding_GetObjLstCache();
  if (arrCharEncodingObjLstCache == null) return false;
  try {
    const arrCharEncodingSel = arrCharEncodingObjLstCache.filter(
      (x) => x.charEncodingId == strCharEncodingId,
    );
    if (arrCharEncodingSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strCharEncodingId,
      charEncoding_ConstructorName,
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
 * @param strCharEncodingId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function CharEncoding_IsExistAsync(strCharEncodingId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(charEncoding_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strCharEncodingId,
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
        charEncoding_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        charEncoding_ConstructorName,
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
export async function CharEncoding_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(charEncoding_Controller, strAction);

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
        charEncoding_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        charEncoding_ConstructorName,
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
 * @param objCharEncodingCond:条件对象
 * @returns 对象列表记录数
 */
export async function CharEncoding_GetRecCountByCondCache(objCharEncodingCond: clsCharEncodingEN) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrCharEncodingObjLstCache = await CharEncoding_GetObjLstCache();
  if (arrCharEncodingObjLstCache == null) return 0;
  let arrCharEncodingSel = arrCharEncodingObjLstCache;
  if (objCharEncodingCond.sfFldComparisonOp == null || objCharEncodingCond.sfFldComparisonOp == '')
    return arrCharEncodingSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objCharEncodingCond.sfFldComparisonOp,
  );
  //console.log("clsCharEncodingWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCharEncodingCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrCharEncodingSel = arrCharEncodingSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objCharEncodingCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrCharEncodingSel = arrCharEncodingSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrCharEncodingSel = arrCharEncodingSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrCharEncodingSel = arrCharEncodingSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrCharEncodingSel = arrCharEncodingSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrCharEncodingSel = arrCharEncodingSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrCharEncodingSel = arrCharEncodingSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrCharEncodingSel = arrCharEncodingSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrCharEncodingSel = arrCharEncodingSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrCharEncodingSel = arrCharEncodingSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrCharEncodingSel = arrCharEncodingSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrCharEncodingSel = arrCharEncodingSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrCharEncodingSel = arrCharEncodingSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrCharEncodingSel = arrCharEncodingSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrCharEncodingSel = arrCharEncodingSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrCharEncodingSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objCharEncodingCond),
      charEncoding_ConstructorName,
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
export async function CharEncoding_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(charEncoding_Controller, strAction);

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
        charEncoding_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        charEncoding_ConstructorName,
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
export function CharEncoding_GetWebApiUrl(strController: string, strAction: string): string {
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
export function CharEncoding_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功!');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clsCharEncodingEN._CurrTabName;
  switch (clsCharEncodingEN.CacheModeId) {
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
export function CharEncoding_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsCharEncodingEN._CurrTabName;
    switch (clsCharEncodingEN.CacheModeId) {
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

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)
 * @param objDDL:需要绑定当前表的下拉框

*/
export async function CharEncoding_BindDdl_CharEncodingIdInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
) {
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_CharEncodingIdInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_CharEncodingIdInDivCache");
  const arrObjLstSel = await CharEncoding_GetObjLstCache();
  if (arrObjLstSel == null) return;
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsCharEncodingEN.con_CharEncodingId,
    clsCharEncodingEN.con_CharEncodingName,
    '字符编码',
  );
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function CharEncoding_CheckPropertyNew(pobjCharEncodingEN: clsCharEncodingEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjCharEncodingEN.charEncodingName) === true) {
    throw new Error(
      '(errid:Watl000411)字段[字符编码名称]不能为空(In 字符编码)!(clsCharEncodingBL:CheckPropertyNew0)',
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjCharEncodingEN.charEncodingId) == false &&
    GetStrLen(pobjCharEncodingEN.charEncodingId) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[字符编码(charEncodingId)]的长度不能超过20(In 字符编码(CharEncoding))!值:$(pobjCharEncodingEN.charEncodingId)(clsCharEncodingBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjCharEncodingEN.charEncodingName) == false &&
    GetStrLen(pobjCharEncodingEN.charEncodingName) > 100
  ) {
    throw new Error(
      '(errid:Watl000413)字段[字符编码名称(charEncodingName)]的长度不能超过100(In 字符编码(CharEncoding))!值:$(pobjCharEncodingEN.charEncodingName)(clsCharEncodingBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjCharEncodingEN.memo) == false &&
    GetStrLen(pobjCharEncodingEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In 字符编码(CharEncoding))!值:$(pobjCharEncodingEN.memo)(clsCharEncodingBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjCharEncodingEN.charEncodingId) == false &&
    undefined !== pobjCharEncodingEN.charEncodingId &&
    tzDataType.isString(pobjCharEncodingEN.charEncodingId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[字符编码(charEncodingId)]的值:[$(pobjCharEncodingEN.charEncodingId)], 非法,应该为字符型(In 字符编码(CharEncoding))!(clsCharEncodingBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCharEncodingEN.charEncodingName) == false &&
    undefined !== pobjCharEncodingEN.charEncodingName &&
    tzDataType.isString(pobjCharEncodingEN.charEncodingName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[字符编码名称(charEncodingName)]的值:[$(pobjCharEncodingEN.charEncodingName)], 非法,应该为字符型(In 字符编码(CharEncoding))!(clsCharEncodingBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjCharEncodingEN.isDefault &&
    undefined !== pobjCharEncodingEN.isDefault &&
    tzDataType.isBoolean(pobjCharEncodingEN.isDefault) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否默认(isDefault)]的值:[$(pobjCharEncodingEN.isDefault)], 非法,应该为布尔型(In 字符编码(CharEncoding))!(clsCharEncodingBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCharEncodingEN.memo) == false &&
    undefined !== pobjCharEncodingEN.memo &&
    tzDataType.isString(pobjCharEncodingEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[说明(memo)]的值:[$(pobjCharEncodingEN.memo)], 非法,应该为字符型(In 字符编码(CharEncoding))!(clsCharEncodingBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function CharEncoding_CheckProperty4Update(pobjCharEncodingEN: clsCharEncodingEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjCharEncodingEN.charEncodingId) == false &&
    GetStrLen(pobjCharEncodingEN.charEncodingId) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[字符编码(charEncodingId)]的长度不能超过20(In 字符编码(CharEncoding))!值:$(pobjCharEncodingEN.charEncodingId)(clsCharEncodingBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCharEncodingEN.charEncodingName) == false &&
    GetStrLen(pobjCharEncodingEN.charEncodingName) > 100
  ) {
    throw new Error(
      '(errid:Watl000416)字段[字符编码名称(charEncodingName)]的长度不能超过100(In 字符编码(CharEncoding))!值:$(pobjCharEncodingEN.charEncodingName)(clsCharEncodingBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCharEncodingEN.memo) == false &&
    GetStrLen(pobjCharEncodingEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In 字符编码(CharEncoding))!值:$(pobjCharEncodingEN.memo)(clsCharEncodingBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjCharEncodingEN.charEncodingId) == false &&
    undefined !== pobjCharEncodingEN.charEncodingId &&
    tzDataType.isString(pobjCharEncodingEN.charEncodingId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[字符编码(charEncodingId)]的值:[$(pobjCharEncodingEN.charEncodingId)], 非法,应该为字符型(In 字符编码(CharEncoding))!(clsCharEncodingBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCharEncodingEN.charEncodingName) == false &&
    undefined !== pobjCharEncodingEN.charEncodingName &&
    tzDataType.isString(pobjCharEncodingEN.charEncodingName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[字符编码名称(charEncodingName)]的值:[$(pobjCharEncodingEN.charEncodingName)], 非法,应该为字符型(In 字符编码(CharEncoding))!(clsCharEncodingBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjCharEncodingEN.isDefault &&
    undefined !== pobjCharEncodingEN.isDefault &&
    tzDataType.isBoolean(pobjCharEncodingEN.isDefault) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否默认(isDefault)]的值:[$(pobjCharEncodingEN.isDefault)], 非法,应该为布尔型(In 字符编码(CharEncoding))!(clsCharEncodingBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCharEncodingEN.memo) == false &&
    undefined !== pobjCharEncodingEN.memo &&
    tzDataType.isString(pobjCharEncodingEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[说明(memo)]的值:[$(pobjCharEncodingEN.memo)], 非法,应该为字符型(In 字符编码(CharEncoding))!(clsCharEncodingBL:CheckProperty4Update)',
    );
  }
  //检查主键是否为Null或者空!
  if (
    IsNullOrEmpty(pobjCharEncodingEN.charEncodingId) === true ||
    pobjCharEncodingEN.charEncodingId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000064)字段[字符编码]不能为空(In 字符编码)!(clsCharEncodingBL:CheckProperty4Update)',
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
export function CharEncoding_GetJSONStrByObj(pobjCharEncodingEN: clsCharEncodingEN): string {
  pobjCharEncodingEN.sfUpdFldSetStr = pobjCharEncodingEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjCharEncodingEN);
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
export function CharEncoding_GetObjLstByJSONStr(strJSON: string): Array<clsCharEncodingEN> {
  let arrCharEncodingObjLst = new Array<clsCharEncodingEN>();
  if (strJSON === '') {
    return arrCharEncodingObjLst;
  }
  try {
    arrCharEncodingObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrCharEncodingObjLst;
  }
  return arrCharEncodingObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrCharEncodingObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function CharEncoding_GetObjLstByJSONObjLst(
  arrCharEncodingObjLstS: Array<clsCharEncodingEN>,
): Array<clsCharEncodingEN> {
  const arrCharEncodingObjLst = new Array<clsCharEncodingEN>();
  for (const objInFor of arrCharEncodingObjLstS) {
    const obj1 = CharEncoding_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrCharEncodingObjLst.push(obj1);
  }
  return arrCharEncodingObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function CharEncoding_GetObjByJSONStr(strJSON: string): clsCharEncodingEN {
  let pobjCharEncodingEN = new clsCharEncodingEN();
  if (strJSON === '') {
    return pobjCharEncodingEN;
  }
  try {
    pobjCharEncodingEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjCharEncodingEN;
  }
  return pobjCharEncodingEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function CharEncoding_GetCombineCondition(objCharEncodingCond: clsCharEncodingEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objCharEncodingCond.dicFldComparisonOp,
      clsCharEncodingEN.con_CharEncodingId,
    ) == true
  ) {
    const strComparisonOpCharEncodingId: string =
      objCharEncodingCond.dicFldComparisonOp[clsCharEncodingEN.con_CharEncodingId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCharEncodingEN.con_CharEncodingId,
      objCharEncodingCond.charEncodingId,
      strComparisonOpCharEncodingId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCharEncodingCond.dicFldComparisonOp,
      clsCharEncodingEN.con_CharEncodingName,
    ) == true
  ) {
    const strComparisonOpCharEncodingName: string =
      objCharEncodingCond.dicFldComparisonOp[clsCharEncodingEN.con_CharEncodingName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCharEncodingEN.con_CharEncodingName,
      objCharEncodingCond.charEncodingName,
      strComparisonOpCharEncodingName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCharEncodingCond.dicFldComparisonOp,
      clsCharEncodingEN.con_IsDefault,
    ) == true
  ) {
    if (objCharEncodingCond.isDefault == true) {
      strWhereCond += Format(" And {0} = '1'", clsCharEncodingEN.con_IsDefault);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsCharEncodingEN.con_IsDefault);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCharEncodingCond.dicFldComparisonOp,
      clsCharEncodingEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objCharEncodingCond.dicFldComparisonOp[clsCharEncodingEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCharEncodingEN.con_Memo,
      objCharEncodingCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objCharEncodingENS:源对象
 * @param objCharEncodingENT:目标对象
 */
export function CharEncoding_GetObjFromJsonObj(
  objCharEncodingENS: clsCharEncodingEN,
): clsCharEncodingEN {
  const objCharEncodingENT: clsCharEncodingEN = new clsCharEncodingEN();
  ObjectAssign(objCharEncodingENT, objCharEncodingENS);
  return objCharEncodingENT;
}
