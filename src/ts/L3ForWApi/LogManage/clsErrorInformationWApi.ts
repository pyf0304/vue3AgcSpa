/**
 * 类名:clsErrorInformationWApi
 * 表名:ErrorInformation(00050185)
 * 版本:2023.10.12.1(服务器:WIN-SRV103-116)
 * 日期:2023/10/12 14:38:31
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:日志管理(LogManage)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 错误(ErrorInformation)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2023年10月12日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { CacheHelper } from '@/ts/PubFun/CacheHelper';
import {
  GetObjKeys,
  GetExceptionStr,
  myShowErrorMsg,
  ObjectAssign,
} from '@/ts/PubFun/clsCommFunc4Web';
import { clsErrorInformationEN } from '@/ts/L0Entity/LogManage/clsErrorInformationEN';
import { GetStrLen, tzDataType, Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const errorInformation_Controller = 'ErrorInformationApi';
export const errorInformation_ConstructorName = 'errorInformation';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngErrorID:关键字
 * @returns 对象
 **/
export async function ErrorInformation_GetObjByErrorIDAsync(
  lngErrorID: number,
): Promise<clsErrorInformationEN | null> {
  const strThisFuncName = 'GetObjByErrorIDAsync';

  if (lngErrorID == 0) {
    const strMsg = Format(
      '参数:[lngErrorID]不能为空!(In clsErrorInformationWApi.GetObjByErrorIDAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByErrorID';
  const strUrl = GetWebApiUrl(errorInformation_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      lngErrorID,
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
      const objErrorInformation = ErrorInformation_GetObjFromJsonObj(returnObj);
      return objErrorInformation;
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
        errorInformation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        errorInformation_ConstructorName,
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
 * @param lngErrorID:所给的关键字
 * @returns 对象
 */
export async function ErrorInformation_GetObjByErrorIDCache(
  lngErrorID: number,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByErrorIDCache';

  if (lngErrorID == 0) {
    const strMsg = Format(
      '参数:[lngErrorID]不能为空!(In clsErrorInformationWApi.GetObjByErrorIDCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrErrorInformationObjLstCache = await ErrorInformation_GetObjLstCache();
  try {
    const arrErrorInformationSel = arrErrorInformationObjLstCache.filter(
      (x) => x.errorID == lngErrorID,
    );
    let objErrorInformation: clsErrorInformationEN;
    if (arrErrorInformationSel.length > 0) {
      objErrorInformation = arrErrorInformationSel[0];
      return objErrorInformation;
    } else {
      if (bolTryAsyncOnce == true) {
        const objErrorInformationConst = await ErrorInformation_GetObjByErrorIDAsync(lngErrorID);
        if (objErrorInformationConst != null) {
          ErrorInformation_ReFreshThisCache();
          return objErrorInformationConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      lngErrorID,
      errorInformation_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param lngErrorID:所给的关键字
 * @returns 对象
 */
export async function ErrorInformation_GetObjByErrorIDlocalStorage(lngErrorID: number) {
  const strThisFuncName = 'GetObjByErrorIDlocalStorage';

  if (lngErrorID == 0) {
    const strMsg = Format(
      '参数:[lngErrorID]不能为空!(In clsErrorInformationWApi.GetObjByErrorIDlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsErrorInformationEN._CurrTabName, lngErrorID);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objErrorInformationCache: clsErrorInformationEN = JSON.parse(strTempObj);
    return objErrorInformationCache;
  }
  try {
    const objErrorInformation = await ErrorInformation_GetObjByErrorIDAsync(lngErrorID);
    if (objErrorInformation != null) {
      localStorage.setItem(strKey, JSON.stringify(objErrorInformation));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objErrorInformation;
    }
    return objErrorInformation;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      lngErrorID,
      errorInformation_ConstructorName,
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
 * @param objErrorInformation:所给的对象
 * @returns 对象
 */
export async function ErrorInformation_UpdateObjInLstCache(
  objErrorInformation: clsErrorInformationEN,
) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrErrorInformationObjLstCache = await ErrorInformation_GetObjLstCache();
    const obj = arrErrorInformationObjLstCache.find(
      (x) =>
        x.userId == objErrorInformation.userId &&
        x.functionName == objErrorInformation.functionName &&
        x.errorInformation == objErrorInformation.errorInformation &&
        x.pageName == objErrorInformation.pageName,
    );
    if (obj != null) {
      objErrorInformation.errorID = obj.errorID;
      ObjectAssign(obj, objErrorInformation);
    } else {
      arrErrorInformationObjLstCache.push(objErrorInformation);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      errorInformation_ConstructorName,
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
export async function ErrorInformation_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsErrorInformationEN.con_ErrorID) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsErrorInformationEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsErrorInformationEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const lngErrorID = Number(strInValue);
  if (lngErrorID == 0) {
    return '';
  }
  const objErrorInformation = await ErrorInformation_GetObjByErrorIDCache(lngErrorID);
  if (objErrorInformation == null) return '';
  if (objErrorInformation.GetFldValue(strOutFldName) == null) return '';
  return objErrorInformation.GetFldValue(strOutFldName).toString();
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
export function ErrorInformation_SortFunDefa(
  a: clsErrorInformationEN,
  b: clsErrorInformationEN,
): number {
  return a.errorID - b.errorID;
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
export function ErrorInformation_SortFunDefa2Fld(
  a: clsErrorInformationEN,
  b: clsErrorInformationEN,
): number {
  if (a.pageName == b.pageName) return a.functionName.localeCompare(b.functionName);
  else return a.pageName.localeCompare(b.pageName);
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
export function ErrorInformation_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsErrorInformationEN.con_ErrorID:
        return (a: clsErrorInformationEN, b: clsErrorInformationEN) => {
          return a.errorID - b.errorID;
        };
      case clsErrorInformationEN.con_PageName:
        return (a: clsErrorInformationEN, b: clsErrorInformationEN) => {
          if (a.pageName == null) return -1;
          if (b.pageName == null) return 1;
          return a.pageName.localeCompare(b.pageName);
        };
      case clsErrorInformationEN.con_FunctionName:
        return (a: clsErrorInformationEN, b: clsErrorInformationEN) => {
          if (a.functionName == null) return -1;
          if (b.functionName == null) return 1;
          return a.functionName.localeCompare(b.functionName);
        };
      case clsErrorInformationEN.con_ErrorInformation:
        return (a: clsErrorInformationEN, b: clsErrorInformationEN) => {
          return a.errorInformation.localeCompare(b.errorInformation);
        };
      case clsErrorInformationEN.con_UserId:
        return (a: clsErrorInformationEN, b: clsErrorInformationEN) => {
          return a.userId.localeCompare(b.userId);
        };
      case clsErrorInformationEN.con_CreateTime:
        return (a: clsErrorInformationEN, b: clsErrorInformationEN) => {
          return a.createTime.getTime() - b.createTime.getTime();
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[ErrorInformation]中不存在!(in ${errorInformation_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsErrorInformationEN.con_ErrorID:
        return (a: clsErrorInformationEN, b: clsErrorInformationEN) => {
          return b.errorID - a.errorID;
        };
      case clsErrorInformationEN.con_PageName:
        return (a: clsErrorInformationEN, b: clsErrorInformationEN) => {
          if (b.pageName == null) return -1;
          if (a.pageName == null) return 1;
          return b.pageName.localeCompare(a.pageName);
        };
      case clsErrorInformationEN.con_FunctionName:
        return (a: clsErrorInformationEN, b: clsErrorInformationEN) => {
          if (b.functionName == null) return -1;
          if (a.functionName == null) return 1;
          return b.functionName.localeCompare(a.functionName);
        };
      case clsErrorInformationEN.con_ErrorInformation:
        return (a: clsErrorInformationEN, b: clsErrorInformationEN) => {
          return b.errorInformation.localeCompare(a.errorInformation);
        };
      case clsErrorInformationEN.con_UserId:
        return (a: clsErrorInformationEN, b: clsErrorInformationEN) => {
          return b.userId.localeCompare(a.userId);
        };
      case clsErrorInformationEN.con_CreateTime:
        return (a: clsErrorInformationEN, b: clsErrorInformationEN) => {
          return b.createTime.getTime() - a.createTime.getTime();
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[ErrorInformation]中不存在!(in ${errorInformation_ConstructorName}.${strThisFuncName})`;
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
export async function ErrorInformation_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsErrorInformationEN.con_ErrorID:
      return (obj: clsErrorInformationEN) => {
        return obj.errorID === value;
      };
    case clsErrorInformationEN.con_PageName:
      return (obj: clsErrorInformationEN) => {
        return obj.pageName === value;
      };
    case clsErrorInformationEN.con_FunctionName:
      return (obj: clsErrorInformationEN) => {
        return obj.functionName === value;
      };
    case clsErrorInformationEN.con_ErrorInformation:
      return (obj: clsErrorInformationEN) => {
        return obj.errorInformation === value;
      };
    case clsErrorInformationEN.con_UserId:
      return (obj: clsErrorInformationEN) => {
        return obj.userId === value;
      };
    case clsErrorInformationEN.con_CreateTime:
      return (obj: clsErrorInformationEN) => {
        return obj.createTime === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[ErrorInformation]中不存在!(in ${errorInformation_ConstructorName}.${strThisFuncName})`;
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
export async function ErrorInformation_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<number>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsErrorInformationEN.con_ErrorID) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (Number(strInValue) == 0) {
    return [];
  }
  const arrErrorInformation = await ErrorInformation_GetObjLstCache();
  if (arrErrorInformation == null) return [];
  let arrErrorInformationSel = arrErrorInformation;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrErrorInformationSel = arrErrorInformationSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrErrorInformationSel = arrErrorInformationSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrErrorInformationSel = arrErrorInformationSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrErrorInformationSel = arrErrorInformationSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrErrorInformationSel = arrErrorInformationSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrErrorInformationSel = arrErrorInformationSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrErrorInformationSel = arrErrorInformationSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrErrorInformationSel = arrErrorInformationSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrErrorInformationSel = arrErrorInformationSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrErrorInformationSel = arrErrorInformationSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrErrorInformationSel.length == 0) return [];
  return arrErrorInformationSel.map((x) => x.errorID);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function ErrorInformation_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(errorInformation_Controller, strAction);

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
        errorInformation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        errorInformation_ConstructorName,
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
export async function ErrorInformation_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(errorInformation_Controller, strAction);

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
        errorInformation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        errorInformation_ConstructorName,
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
export async function ErrorInformation_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsErrorInformationEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(errorInformation_Controller, strAction);

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
      const objErrorInformation = ErrorInformation_GetObjFromJsonObj(returnObj);
      return objErrorInformation;
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
        errorInformation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        errorInformation_ConstructorName,
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
export async function ErrorInformation_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsErrorInformationEN._CurrTabName;
  if (IsNullOrEmpty(clsErrorInformationEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsErrorInformationEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrErrorInformationExObjLstCache: Array<clsErrorInformationEN> = CacheHelper.Get(strKey);
    const arrErrorInformationObjLstT = ErrorInformation_GetObjLstByJSONObjLst(
      arrErrorInformationExObjLstCache,
    );
    return arrErrorInformationObjLstT;
  }
  try {
    const arrErrorInformationExObjLst = await ErrorInformation_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrErrorInformationExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrErrorInformationExObjLst.length,
    );
    console.log(strInfo);
    return arrErrorInformationExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      errorInformation_ConstructorName,
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
export async function ErrorInformation_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsErrorInformationEN._CurrTabName;
  if (IsNullOrEmpty(clsErrorInformationEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsErrorInformationEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrErrorInformationExObjLstCache: Array<clsErrorInformationEN> =
      JSON.parse(strTempObjLst);
    const arrErrorInformationObjLstT = ErrorInformation_GetObjLstByJSONObjLst(
      arrErrorInformationExObjLstCache,
    );
    return arrErrorInformationObjLstT;
  }
  try {
    const arrErrorInformationExObjLst = await ErrorInformation_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrErrorInformationExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrErrorInformationExObjLst.length,
    );
    console.log(strInfo);
    return arrErrorInformationExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      errorInformation_ConstructorName,
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
export async function ErrorInformation_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsErrorInformationEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrErrorInformationObjLstCache: Array<clsErrorInformationEN> = JSON.parse(strTempObjLst);
    return arrErrorInformationObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function ErrorInformation_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsErrorInformationEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(errorInformation_Controller, strAction);

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
          errorInformation_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ErrorInformation_GetObjLstByJSONObjLst(returnObjLst);
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
        errorInformation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        errorInformation_ConstructorName,
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
export async function ErrorInformation_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsErrorInformationEN._CurrTabName;
  if (IsNullOrEmpty(clsErrorInformationEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsErrorInformationEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrErrorInformationExObjLstCache: Array<clsErrorInformationEN> =
      JSON.parse(strTempObjLst);
    const arrErrorInformationObjLstT = ErrorInformation_GetObjLstByJSONObjLst(
      arrErrorInformationExObjLstCache,
    );
    return arrErrorInformationObjLstT;
  }
  try {
    const arrErrorInformationExObjLst = await ErrorInformation_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrErrorInformationExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrErrorInformationExObjLst.length,
    );
    console.log(strInfo);
    return arrErrorInformationExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      errorInformation_ConstructorName,
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
export async function ErrorInformation_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsErrorInformationEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrErrorInformationObjLstCache: Array<clsErrorInformationEN> = JSON.parse(strTempObjLst);
    return arrErrorInformationObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function ErrorInformation_GetObjLstCache(): Promise<Array<clsErrorInformationEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrErrorInformationObjLstCache;
  switch (clsErrorInformationEN.CacheModeId) {
    case '04': //sessionStorage
      arrErrorInformationObjLstCache = await ErrorInformation_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrErrorInformationObjLstCache = await ErrorInformation_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrErrorInformationObjLstCache = await ErrorInformation_GetObjLstClientCache();
      break;
    default:
      arrErrorInformationObjLstCache = await ErrorInformation_GetObjLstClientCache();
      break;
  }
  return arrErrorInformationObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function ErrorInformation_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrErrorInformationObjLstCache;
  switch (clsErrorInformationEN.CacheModeId) {
    case '04': //sessionStorage
      arrErrorInformationObjLstCache = await ErrorInformation_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrErrorInformationObjLstCache = await ErrorInformation_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrErrorInformationObjLstCache = null;
      break;
    default:
      arrErrorInformationObjLstCache = null;
      break;
  }
  return arrErrorInformationObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objlngErrorIDCond:条件对象
 * @returns 对象列表子集
 */
export async function ErrorInformation_GetSubObjLstCache(
  objErrorInformationCond: clsErrorInformationEN,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrErrorInformationObjLstCache = await ErrorInformation_GetObjLstCache();
  let arrErrorInformationSel = arrErrorInformationObjLstCache;
  if (
    objErrorInformationCond.sfFldComparisonOp == null ||
    objErrorInformationCond.sfFldComparisonOp == ''
  )
    return arrErrorInformationSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objErrorInformationCond.sfFldComparisonOp,
  );
  //console.log("clsErrorInformationWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objErrorInformationCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrErrorInformationSel = arrErrorInformationSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objErrorInformationCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrErrorInformationSel = arrErrorInformationSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrErrorInformationSel = arrErrorInformationSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrErrorInformationSel = arrErrorInformationSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrErrorInformationSel = arrErrorInformationSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrErrorInformationSel = arrErrorInformationSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrErrorInformationSel = arrErrorInformationSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrErrorInformationSel = arrErrorInformationSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrErrorInformationSel = arrErrorInformationSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrErrorInformationSel = arrErrorInformationSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrErrorInformationSel = arrErrorInformationSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrErrorInformationSel = arrErrorInformationSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrErrorInformationSel = arrErrorInformationSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrErrorInformationSel = arrErrorInformationSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrErrorInformationSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objErrorInformationCond),
      errorInformation_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsErrorInformationEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrErrorID:关键字列表
 * @returns 对象列表
 **/
export async function ErrorInformation_GetObjLstByErrorIDLstAsync(
  arrErrorID: Array<string>,
): Promise<Array<clsErrorInformationEN>> {
  const strThisFuncName = 'GetObjLstByErrorIDLstAsync';
  const strAction = 'GetObjLstByErrorIDLst';
  const strUrl = GetWebApiUrl(errorInformation_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrErrorID, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          errorInformation_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ErrorInformation_GetObjLstByJSONObjLst(returnObjLst);
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
        errorInformation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        errorInformation_ConstructorName,
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
 * @param arrlngErrorIDLst:关键字列表
 * @returns 对象列表
 */
export async function ErrorInformation_GetObjLstByErrorIDLstCache(arrErrorIDLst: Array<number>) {
  const strThisFuncName = 'GetObjLstByErrorIDLstCache';
  try {
    const arrErrorInformationObjLstCache = await ErrorInformation_GetObjLstCache();
    const arrErrorInformationSel = arrErrorInformationObjLstCache.filter(
      (x) => arrErrorIDLst.indexOf(x.errorID) > -1,
    );
    return arrErrorInformationSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrErrorIDLst.join(','),
      errorInformation_ConstructorName,
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
export async function ErrorInformation_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsErrorInformationEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(errorInformation_Controller, strAction);

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
          errorInformation_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ErrorInformation_GetObjLstByJSONObjLst(returnObjLst);
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
        errorInformation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        errorInformation_ConstructorName,
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
export async function ErrorInformation_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsErrorInformationEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(errorInformation_Controller, strAction);

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
          errorInformation_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ErrorInformation_GetObjLstByJSONObjLst(returnObjLst);
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
        errorInformation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        errorInformation_ConstructorName,
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
export async function ErrorInformation_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsErrorInformationEN>();
  const arrErrorInformationObjLstCache = await ErrorInformation_GetObjLstCache();
  if (arrErrorInformationObjLstCache.length == 0) return arrErrorInformationObjLstCache;
  let arrErrorInformationSel = arrErrorInformationObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objErrorInformationCond = new clsErrorInformationEN();
  ObjectAssign(objErrorInformationCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsErrorInformationWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrErrorInformationSel = arrErrorInformationSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objErrorInformationCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrErrorInformationSel = arrErrorInformationSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrErrorInformationSel = arrErrorInformationSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrErrorInformationSel = arrErrorInformationSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrErrorInformationSel = arrErrorInformationSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrErrorInformationSel = arrErrorInformationSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrErrorInformationSel = arrErrorInformationSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrErrorInformationSel = arrErrorInformationSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrErrorInformationSel = arrErrorInformationSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrErrorInformationSel = arrErrorInformationSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrErrorInformationSel = arrErrorInformationSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrErrorInformationSel = arrErrorInformationSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrErrorInformationSel = arrErrorInformationSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrErrorInformationSel = arrErrorInformationSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrErrorInformationSel = arrErrorInformationSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrErrorInformationSel.length == 0) return arrErrorInformationSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrErrorInformationSel = arrErrorInformationSel.sort(
        ErrorInformation_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrErrorInformationSel = arrErrorInformationSel.sort(objPagerPara.sortFun);
    }
    arrErrorInformationSel = arrErrorInformationSel.slice(intStart, intEnd);
    return arrErrorInformationSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      errorInformation_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsErrorInformationEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function ErrorInformation_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsErrorInformationEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsErrorInformationEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(errorInformation_Controller, strAction);

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
          errorInformation_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ErrorInformation_GetObjLstByJSONObjLst(returnObjLst);
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
        errorInformation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        errorInformation_ConstructorName,
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
 * @param lngErrorID:关键字
 * @returns 获取删除的结果
 **/
export async function ErrorInformation_DelRecordAsync(lngErrorID: number): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(errorInformation_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, lngErrorID);

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
        errorInformation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        errorInformation_ConstructorName,
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
 * @param arrErrorID:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function ErrorInformation_DelErrorInformationsAsync(
  arrErrorID: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelErrorInformationsAsync';
  const strAction = 'DelErrorInformations';
  const strUrl = GetWebApiUrl(errorInformation_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrErrorID, config);
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
        errorInformation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        errorInformation_ConstructorName,
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
export async function ErrorInformation_DelErrorInformationsByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelErrorInformationsByCondAsync';
  const strAction = 'DelErrorInformationsByCond';
  const strUrl = GetWebApiUrl(errorInformation_Controller, strAction);

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
        errorInformation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        errorInformation_ConstructorName,
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
 * @param objErrorInformationEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function ErrorInformation_AddNewRecordAsync(
  objErrorInformationEN: clsErrorInformationEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objErrorInformationEN);
  const strUrl = GetWebApiUrl(errorInformation_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objErrorInformationEN, config);
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
        errorInformation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        errorInformation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
/* 数据类型不是字符型,不可以最大关键字的方式添加记录。*/

/**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objErrorInformationEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function ErrorInformation_AddNewRecordWithReturnKeyAsync(
  objErrorInformationEN: clsErrorInformationEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(errorInformation_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objErrorInformationEN, config);
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
        errorInformation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        errorInformation_ConstructorName,
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
 * @param objErrorInformationEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function ErrorInformation_UpdateRecordAsync(
  objErrorInformationEN: clsErrorInformationEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objErrorInformationEN.sfUpdFldSetStr === undefined ||
    objErrorInformationEN.sfUpdFldSetStr === null ||
    objErrorInformationEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objErrorInformationEN.errorID,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(errorInformation_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objErrorInformationEN, config);
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
        errorInformation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        errorInformation_ConstructorName,
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
 * @param objErrorInformationEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function ErrorInformation_UpdateWithConditionAsync(
  objErrorInformationEN: clsErrorInformationEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objErrorInformationEN.sfUpdFldSetStr === undefined ||
    objErrorInformationEN.sfUpdFldSetStr === null ||
    objErrorInformationEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objErrorInformationEN.errorID,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(errorInformation_Controller, strAction);
  objErrorInformationEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objErrorInformationEN, config);
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
        errorInformation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        errorInformation_ConstructorName,
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
 * @param objlngErrorIDCond:条件对象
 * @returns 对象列表子集
 */
export async function ErrorInformation_IsExistRecordCache(
  objErrorInformationCond: clsErrorInformationEN,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrErrorInformationObjLstCache = await ErrorInformation_GetObjLstCache();
  if (arrErrorInformationObjLstCache == null) return false;
  let arrErrorInformationSel = arrErrorInformationObjLstCache;
  if (
    objErrorInformationCond.sfFldComparisonOp == null ||
    objErrorInformationCond.sfFldComparisonOp == ''
  )
    return arrErrorInformationSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objErrorInformationCond.sfFldComparisonOp,
  );
  //console.log("clsErrorInformationWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objErrorInformationCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objErrorInformationCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrErrorInformationSel = arrErrorInformationSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrErrorInformationSel = arrErrorInformationSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrErrorInformationSel = arrErrorInformationSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrErrorInformationSel = arrErrorInformationSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrErrorInformationSel = arrErrorInformationSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrErrorInformationSel = arrErrorInformationSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrErrorInformationSel = arrErrorInformationSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrErrorInformationSel = arrErrorInformationSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrErrorInformationSel = arrErrorInformationSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrErrorInformationSel = arrErrorInformationSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrErrorInformationSel = arrErrorInformationSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrErrorInformationSel = arrErrorInformationSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrErrorInformationSel = arrErrorInformationSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrErrorInformationSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objErrorInformationCond),
      errorInformation_ConstructorName,
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
export async function ErrorInformation_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(errorInformation_Controller, strAction);

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
        errorInformation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        errorInformation_ConstructorName,
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
 * @param lngErrorID:所给的关键字
 * @returns 对象
 */
export async function ErrorInformation_IsExistCache(lngErrorID: number) {
  const strThisFuncName = 'IsExistCache';
  const arrErrorInformationObjLstCache = await ErrorInformation_GetObjLstCache();
  if (arrErrorInformationObjLstCache == null) return false;
  try {
    const arrErrorInformationSel = arrErrorInformationObjLstCache.filter(
      (x) => x.errorID == lngErrorID,
    );
    if (arrErrorInformationSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      lngErrorID,
      errorInformation_ConstructorName,
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
 * @param lngErrorID:关键字
 * @returns 是否存在?存在返回True
 **/
export async function ErrorInformation_IsExistAsync(lngErrorID: number): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(errorInformation_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      lngErrorID,
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
        errorInformation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        errorInformation_ConstructorName,
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
export async function ErrorInformation_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(errorInformation_Controller, strAction);

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
        errorInformation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        errorInformation_ConstructorName,
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
 * @param objErrorInformationCond:条件对象
 * @returns 对象列表记录数
 */
export async function ErrorInformation_GetRecCountByCondCache(
  objErrorInformationCond: clsErrorInformationEN,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrErrorInformationObjLstCache = await ErrorInformation_GetObjLstCache();
  if (arrErrorInformationObjLstCache == null) return 0;
  let arrErrorInformationSel = arrErrorInformationObjLstCache;
  if (
    objErrorInformationCond.sfFldComparisonOp == null ||
    objErrorInformationCond.sfFldComparisonOp == ''
  )
    return arrErrorInformationSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objErrorInformationCond.sfFldComparisonOp,
  );
  //console.log("clsErrorInformationWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objErrorInformationCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrErrorInformationSel = arrErrorInformationSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objErrorInformationCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrErrorInformationSel = arrErrorInformationSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrErrorInformationSel = arrErrorInformationSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrErrorInformationSel = arrErrorInformationSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrErrorInformationSel = arrErrorInformationSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrErrorInformationSel = arrErrorInformationSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrErrorInformationSel = arrErrorInformationSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrErrorInformationSel = arrErrorInformationSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrErrorInformationSel = arrErrorInformationSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrErrorInformationSel = arrErrorInformationSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrErrorInformationSel = arrErrorInformationSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrErrorInformationSel = arrErrorInformationSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrErrorInformationSel = arrErrorInformationSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrErrorInformationSel = arrErrorInformationSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrErrorInformationSel = arrErrorInformationSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrErrorInformationSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objErrorInformationCond),
      errorInformation_ConstructorName,
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
export async function ErrorInformation_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(errorInformation_Controller, strAction);

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
        errorInformation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        errorInformation_ConstructorName,
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
export function ErrorInformation_GetWebApiUrl(strController: string, strAction: string): string {
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
export function ErrorInformation_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功!');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clsErrorInformationEN._CurrTabName;
  switch (clsErrorInformationEN.CacheModeId) {
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
export function ErrorInformation_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsErrorInformationEN._CurrTabName;
    switch (clsErrorInformationEN.CacheModeId) {
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
export function ErrorInformation_CheckPropertyNew(pobjErrorInformationEN: clsErrorInformationEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjErrorInformationEN.errorInformation) === true) {
    throw new Error(
      '(errid:Watl000411)字段[错误信息]不能为空(In 错误)!(clsErrorInformationBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjErrorInformationEN.userId) === true ||
    pobjErrorInformationEN.userId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000411)字段[用户Id]不能为空(In 错误)!(clsErrorInformationBL:CheckPropertyNew0)',
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjErrorInformationEN.pageName) == false &&
    GetStrLen(pobjErrorInformationEN.pageName) > 100
  ) {
    throw new Error(
      '(errid:Watl000413)字段[页面名称(pageName)]的长度不能超过100(In 错误(ErrorInformation))!值:$(pobjErrorInformationEN.pageName)(clsErrorInformationBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjErrorInformationEN.functionName) == false &&
    GetStrLen(pobjErrorInformationEN.functionName) > 200
  ) {
    throw new Error(
      '(errid:Watl000413)字段[功能名称(functionName)]的长度不能超过200(In 错误(ErrorInformation))!值:$(pobjErrorInformationEN.functionName)(clsErrorInformationBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjErrorInformationEN.errorInformation) == false &&
    GetStrLen(pobjErrorInformationEN.errorInformation) > 5000
  ) {
    throw new Error(
      '(errid:Watl000413)字段[错误信息(errorInformation)]的长度不能超过5000(In 错误(ErrorInformation))!值:$(pobjErrorInformationEN.errorInformation)(clsErrorInformationBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjErrorInformationEN.userId) == false &&
    GetStrLen(pobjErrorInformationEN.userId) > 18
  ) {
    throw new Error(
      '(errid:Watl000413)字段[用户Id(userId)]的长度不能超过18(In 错误(ErrorInformation))!值:$(pobjErrorInformationEN.userId)(clsErrorInformationBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjErrorInformationEN.errorID &&
    undefined !== pobjErrorInformationEN.errorID &&
    tzDataType.isNumber(pobjErrorInformationEN.errorID) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[错误流水号(errorID)]的值:[$(pobjErrorInformationEN.errorID)], 非法,应该为数值型(In 错误(ErrorInformation))!(clsErrorInformationBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjErrorInformationEN.pageName) == false &&
    undefined !== pobjErrorInformationEN.pageName &&
    tzDataType.isString(pobjErrorInformationEN.pageName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[页面名称(pageName)]的值:[$(pobjErrorInformationEN.pageName)], 非法,应该为字符型(In 错误(ErrorInformation))!(clsErrorInformationBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjErrorInformationEN.functionName) == false &&
    undefined !== pobjErrorInformationEN.functionName &&
    tzDataType.isString(pobjErrorInformationEN.functionName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[功能名称(functionName)]的值:[$(pobjErrorInformationEN.functionName)], 非法,应该为字符型(In 错误(ErrorInformation))!(clsErrorInformationBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjErrorInformationEN.errorInformation) == false &&
    undefined !== pobjErrorInformationEN.errorInformation &&
    tzDataType.isString(pobjErrorInformationEN.errorInformation) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[错误信息(errorInformation)]的值:[$(pobjErrorInformationEN.errorInformation)], 非法,应该为字符型(In 错误(ErrorInformation))!(clsErrorInformationBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjErrorInformationEN.userId) == false &&
    undefined !== pobjErrorInformationEN.userId &&
    tzDataType.isString(pobjErrorInformationEN.userId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[用户Id(userId)]的值:[$(pobjErrorInformationEN.userId)], 非法,应该为字符型(In 错误(ErrorInformation))!(clsErrorInformationBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjErrorInformationEN.createTime &&
    undefined !== pobjErrorInformationEN.createTime &&
    tzDataType.isBoolean(pobjErrorInformationEN.createTime) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[创建时间(createTime)]的值:[$(pobjErrorInformationEN.createTime)], 非法,应该为日期型(In 错误(ErrorInformation))!(clsErrorInformationBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function ErrorInformation_CheckProperty4Update(
  pobjErrorInformationEN: clsErrorInformationEN,
) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjErrorInformationEN.pageName) == false &&
    GetStrLen(pobjErrorInformationEN.pageName) > 100
  ) {
    throw new Error(
      '(errid:Watl000416)字段[页面名称(pageName)]的长度不能超过100(In 错误(ErrorInformation))!值:$(pobjErrorInformationEN.pageName)(clsErrorInformationBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjErrorInformationEN.functionName) == false &&
    GetStrLen(pobjErrorInformationEN.functionName) > 200
  ) {
    throw new Error(
      '(errid:Watl000416)字段[功能名称(functionName)]的长度不能超过200(In 错误(ErrorInformation))!值:$(pobjErrorInformationEN.functionName)(clsErrorInformationBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjErrorInformationEN.errorInformation) == false &&
    GetStrLen(pobjErrorInformationEN.errorInformation) > 5000
  ) {
    throw new Error(
      '(errid:Watl000416)字段[错误信息(errorInformation)]的长度不能超过5000(In 错误(ErrorInformation))!值:$(pobjErrorInformationEN.errorInformation)(clsErrorInformationBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjErrorInformationEN.userId) == false &&
    GetStrLen(pobjErrorInformationEN.userId) > 18
  ) {
    throw new Error(
      '(errid:Watl000416)字段[用户Id(userId)]的长度不能超过18(In 错误(ErrorInformation))!值:$(pobjErrorInformationEN.userId)(clsErrorInformationBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjErrorInformationEN.errorID &&
    undefined !== pobjErrorInformationEN.errorID &&
    tzDataType.isNumber(pobjErrorInformationEN.errorID) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[错误流水号(errorID)]的值:[$(pobjErrorInformationEN.errorID)], 非法,应该为数值型(In 错误(ErrorInformation))!(clsErrorInformationBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjErrorInformationEN.pageName) == false &&
    undefined !== pobjErrorInformationEN.pageName &&
    tzDataType.isString(pobjErrorInformationEN.pageName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[页面名称(pageName)]的值:[$(pobjErrorInformationEN.pageName)], 非法,应该为字符型(In 错误(ErrorInformation))!(clsErrorInformationBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjErrorInformationEN.functionName) == false &&
    undefined !== pobjErrorInformationEN.functionName &&
    tzDataType.isString(pobjErrorInformationEN.functionName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[功能名称(functionName)]的值:[$(pobjErrorInformationEN.functionName)], 非法,应该为字符型(In 错误(ErrorInformation))!(clsErrorInformationBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjErrorInformationEN.errorInformation) == false &&
    undefined !== pobjErrorInformationEN.errorInformation &&
    tzDataType.isString(pobjErrorInformationEN.errorInformation) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[错误信息(errorInformation)]的值:[$(pobjErrorInformationEN.errorInformation)], 非法,应该为字符型(In 错误(ErrorInformation))!(clsErrorInformationBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjErrorInformationEN.userId) == false &&
    undefined !== pobjErrorInformationEN.userId &&
    tzDataType.isString(pobjErrorInformationEN.userId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[用户Id(userId)]的值:[$(pobjErrorInformationEN.userId)], 非法,应该为字符型(In 错误(ErrorInformation))!(clsErrorInformationBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjErrorInformationEN.createTime &&
    undefined !== pobjErrorInformationEN.createTime &&
    tzDataType.isBoolean(pobjErrorInformationEN.createTime) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[创建时间(createTime)]的值:[$(pobjErrorInformationEN.createTime)], 非法,应该为日期型(In 错误(ErrorInformation))!(clsErrorInformationBL:CheckProperty4Update)',
    );
  }
  //检查主键是否为Null或者空!
  if (
    null === pobjErrorInformationEN.errorID ||
    (pobjErrorInformationEN.errorID != null && pobjErrorInformationEN.errorID.toString() === '')
  ) {
    throw new Error(
      '(errid:Watl000064)字段[错误流水号]不能为空(In 错误)!(clsErrorInformationBL:CheckProperty4Update)',
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
export function ErrorInformation_GetJSONStrByObj(
  pobjErrorInformationEN: clsErrorInformationEN,
): string {
  pobjErrorInformationEN.sfUpdFldSetStr = pobjErrorInformationEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjErrorInformationEN);
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
export function ErrorInformation_GetObjLstByJSONStr(strJSON: string): Array<clsErrorInformationEN> {
  let arrErrorInformationObjLst = new Array<clsErrorInformationEN>();
  if (strJSON === '') {
    return arrErrorInformationObjLst;
  }
  try {
    arrErrorInformationObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrErrorInformationObjLst;
  }
  return arrErrorInformationObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrErrorInformationObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function ErrorInformation_GetObjLstByJSONObjLst(
  arrErrorInformationObjLstS: Array<clsErrorInformationEN>,
): Array<clsErrorInformationEN> {
  const arrErrorInformationObjLst = new Array<clsErrorInformationEN>();
  for (const objInFor of arrErrorInformationObjLstS) {
    const obj1 = ErrorInformation_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrErrorInformationObjLst.push(obj1);
  }
  return arrErrorInformationObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function ErrorInformation_GetObjByJSONStr(strJSON: string): clsErrorInformationEN {
  let pobjErrorInformationEN = new clsErrorInformationEN();
  if (strJSON === '') {
    return pobjErrorInformationEN;
  }
  try {
    pobjErrorInformationEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjErrorInformationEN;
  }
  return pobjErrorInformationEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function ErrorInformation_GetCombineCondition(
  objErrorInformationCond: clsErrorInformationEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objErrorInformationCond.dicFldComparisonOp,
      clsErrorInformationEN.con_ErrorID,
    ) == true
  ) {
    const strComparisonOpErrorID: string =
      objErrorInformationCond.dicFldComparisonOp[clsErrorInformationEN.con_ErrorID];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsErrorInformationEN.con_ErrorID,
      objErrorInformationCond.errorID,
      strComparisonOpErrorID,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objErrorInformationCond.dicFldComparisonOp,
      clsErrorInformationEN.con_PageName,
    ) == true
  ) {
    const strComparisonOpPageName: string =
      objErrorInformationCond.dicFldComparisonOp[clsErrorInformationEN.con_PageName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsErrorInformationEN.con_PageName,
      objErrorInformationCond.pageName,
      strComparisonOpPageName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objErrorInformationCond.dicFldComparisonOp,
      clsErrorInformationEN.con_FunctionName,
    ) == true
  ) {
    const strComparisonOpFunctionName: string =
      objErrorInformationCond.dicFldComparisonOp[clsErrorInformationEN.con_FunctionName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsErrorInformationEN.con_FunctionName,
      objErrorInformationCond.functionName,
      strComparisonOpFunctionName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objErrorInformationCond.dicFldComparisonOp,
      clsErrorInformationEN.con_ErrorInformation,
    ) == true
  ) {
    const strComparisonOpErrorInformation: string =
      objErrorInformationCond.dicFldComparisonOp[clsErrorInformationEN.con_ErrorInformation];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsErrorInformationEN.con_ErrorInformation,
      objErrorInformationCond.errorInformation,
      strComparisonOpErrorInformation,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objErrorInformationCond.dicFldComparisonOp,
      clsErrorInformationEN.con_UserId,
    ) == true
  ) {
    const strComparisonOpUserId: string =
      objErrorInformationCond.dicFldComparisonOp[clsErrorInformationEN.con_UserId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsErrorInformationEN.con_UserId,
      objErrorInformationCond.userId,
      strComparisonOpUserId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objErrorInformationCond.dicFldComparisonOp,
      clsErrorInformationEN.con_CreateTime,
    ) == true
  ) {
    const strComparisonOpCreateTime: string =
      objErrorInformationCond.dicFldComparisonOp[clsErrorInformationEN.con_CreateTime];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsErrorInformationEN.con_CreateTime,
      objErrorInformationCond.createTime,
      strComparisonOpCreateTime,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--ErrorInformation(错误),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strUserId: 用户Id(要求唯一的字段)
 * @param strFunctionName: 功能名称(要求唯一的字段)
 * @param strErrorInformation: 错误信息(要求唯一的字段)
 * @param strPageName: 页面名称(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function ErrorInformation_GetUniCondStr(
  objErrorInformationEN: clsErrorInformationEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and UserId = '{0}'", objErrorInformationEN.userId);
  strWhereCond += Format(" and FunctionName = '{0}'", objErrorInformationEN.functionName);
  strWhereCond += Format(" and ErrorInformation = '{0}'", objErrorInformationEN.errorInformation);
  strWhereCond += Format(" and PageName = '{0}'", objErrorInformationEN.pageName);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--ErrorInformation(错误),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strUserId: 用户Id(要求唯一的字段)
 * @param strFunctionName: 功能名称(要求唯一的字段)
 * @param strErrorInformation: 错误信息(要求唯一的字段)
 * @param strPageName: 页面名称(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function ErrorInformation_GetUniCondStr4Update(
  objErrorInformationEN: clsErrorInformationEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and ErrorID <> '{0}'", objErrorInformationEN.errorID);
  strWhereCond += Format(" and UserId = '{0}'", objErrorInformationEN.userId);
  strWhereCond += Format(" and FunctionName = '{0}'", objErrorInformationEN.functionName);
  strWhereCond += Format(" and ErrorInformation = '{0}'", objErrorInformationEN.errorInformation);
  strWhereCond += Format(" and PageName = '{0}'", objErrorInformationEN.pageName);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objErrorInformationENS:源对象
 * @param objErrorInformationENT:目标对象
 */
export function ErrorInformation_GetObjFromJsonObj(
  objErrorInformationENS: clsErrorInformationEN,
): clsErrorInformationEN {
  const objErrorInformationENT: clsErrorInformationEN = new clsErrorInformationEN();
  ObjectAssign(objErrorInformationENT, objErrorInformationENS);
  return objErrorInformationENT;
}
