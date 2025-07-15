/**
 * 类名:clsRetrievalMethodWApi
 * 表名:RetrievalMethod(00050632)
 * 版本:2025.05.26.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/09 13:46:39
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 应用类型:Vue应用InCore-TS(30)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:系统参数(SysPara)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 获取方式(RetrievalMethod)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2025年06月09日.
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
import { clsRetrievalMethodEN } from '@/ts/L0Entity/SysPara/clsRetrievalMethodEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';

export const retrievalMethod_Controller = 'RetrievalMethodApi';
export const retrievalMethod_ConstructorName = 'retrievalMethod';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strRetrievalMethodId:关键字
 * @returns 对象
 **/
export async function RetrievalMethod_GetObjByRetrievalMethodIdAsync(
  strRetrievalMethodId: string,
): Promise<clsRetrievalMethodEN | null> {
  const strThisFuncName = 'GetObjByRetrievalMethodIdAsync';

  if (IsNullOrEmpty(strRetrievalMethodId) == true) {
    const strMsg = Format(
      '参数:[strRetrievalMethodId]不能为空!(In clsRetrievalMethodWApi.GetObjByRetrievalMethodIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strRetrievalMethodId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strRetrievalMethodId]的长度:[{0}]不正确!(clsRetrievalMethodWApi.GetObjByRetrievalMethodIdAsync)',
      strRetrievalMethodId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByRetrievalMethodId';
  const strUrl = GetWebApiUrl(retrievalMethod_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strRetrievalMethodId,
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
      const objRetrievalMethod = RetrievalMethod_GetObjFromJsonObj(returnObj);
      return objRetrievalMethod;
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
        retrievalMethod_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        retrievalMethod_ConstructorName,
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
 * @param strRetrievalMethodId:所给的关键字
 * @returns 对象
 */
export async function RetrievalMethod_GetObjByRetrievalMethodIdlocalStorage(
  strRetrievalMethodId: string,
) {
  const strThisFuncName = 'GetObjByRetrievalMethodIdlocalStorage';

  if (IsNullOrEmpty(strRetrievalMethodId) == true) {
    const strMsg = Format(
      '参数:[strRetrievalMethodId]不能为空!(In clsRetrievalMethodWApi.GetObjByRetrievalMethodIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strRetrievalMethodId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strRetrievalMethodId]的长度:[{0}]不正确!(clsRetrievalMethodWApi.GetObjByRetrievalMethodIdlocalStorage)',
      strRetrievalMethodId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsRetrievalMethodEN._CurrTabName, strRetrievalMethodId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objRetrievalMethodCache: clsRetrievalMethodEN = JSON.parse(strTempObj);
    return objRetrievalMethodCache;
  }
  try {
    const objRetrievalMethod = await RetrievalMethod_GetObjByRetrievalMethodIdAsync(
      strRetrievalMethodId,
    );
    if (objRetrievalMethod != null) {
      localStorage.setItem(strKey, JSON.stringify(objRetrievalMethod));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objRetrievalMethod;
    }
    return objRetrievalMethod;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strRetrievalMethodId,
      retrievalMethod_ConstructorName,
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
 * @param strRetrievalMethodId:所给的关键字
 * @returns 对象
 */
export async function RetrievalMethod_GetObjByRetrievalMethodIdCache(
  strRetrievalMethodId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByRetrievalMethodIdCache';

  if (IsNullOrEmpty(strRetrievalMethodId) == true) {
    const strMsg = Format(
      '参数:[strRetrievalMethodId]不能为空!(In clsRetrievalMethodWApi.GetObjByRetrievalMethodIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strRetrievalMethodId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strRetrievalMethodId]的长度:[{0}]不正确!(clsRetrievalMethodWApi.GetObjByRetrievalMethodIdCache)',
      strRetrievalMethodId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrRetrievalMethodObjLstCache = await RetrievalMethod_GetObjLstCache();
  try {
    const arrRetrievalMethodSel = arrRetrievalMethodObjLstCache.filter(
      (x) => x.retrievalMethodId == strRetrievalMethodId,
    );
    let objRetrievalMethod: clsRetrievalMethodEN;
    if (arrRetrievalMethodSel.length > 0) {
      objRetrievalMethod = arrRetrievalMethodSel[0];
      return objRetrievalMethod;
    } else {
      if (bolTryAsyncOnce == true) {
        const objRetrievalMethodConst = await RetrievalMethod_GetObjByRetrievalMethodIdAsync(
          strRetrievalMethodId,
        );
        if (objRetrievalMethodConst != null) {
          RetrievalMethod_ReFreshThisCache();
          return objRetrievalMethodConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strRetrievalMethodId,
      retrievalMethod_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objRetrievalMethod:所给的对象
 * @returns 对象
 */
export async function RetrievalMethod_UpdateObjInLstCache(
  objRetrievalMethod: clsRetrievalMethodEN,
) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrRetrievalMethodObjLstCache = await RetrievalMethod_GetObjLstCache();
    const obj = arrRetrievalMethodObjLstCache.find(
      (x) => x.retrievalMethodName == objRetrievalMethod.retrievalMethodName,
    );
    if (obj != null) {
      objRetrievalMethod.retrievalMethodId = obj.retrievalMethodId;
      ObjectAssign(obj, objRetrievalMethod);
    } else {
      arrRetrievalMethodObjLstCache.push(objRetrievalMethod);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      retrievalMethod_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-06-09
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function RetrievalMethod_SortFunDefa(
  a: clsRetrievalMethodEN,
  b: clsRetrievalMethodEN,
): number {
  return a.retrievalMethodId.localeCompare(b.retrievalMethodId);
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2025-06-09
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function RetrievalMethod_SortFunDefa2Fld(
  a: clsRetrievalMethodEN,
  b: clsRetrievalMethodEN,
): number {
  if (a.retrievalMethodName == b.retrievalMethodName)
    return a.retrievalMethodEnName.localeCompare(b.retrievalMethodEnName);
  else return a.retrievalMethodName.localeCompare(b.retrievalMethodName);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-06-09
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function RetrievalMethod_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsRetrievalMethodEN.con_RetrievalMethodId:
        return (a: clsRetrievalMethodEN, b: clsRetrievalMethodEN) => {
          return a.retrievalMethodId.localeCompare(b.retrievalMethodId);
        };
      case clsRetrievalMethodEN.con_RetrievalMethodName:
        return (a: clsRetrievalMethodEN, b: clsRetrievalMethodEN) => {
          return a.retrievalMethodName.localeCompare(b.retrievalMethodName);
        };
      case clsRetrievalMethodEN.con_RetrievalMethodEnName:
        return (a: clsRetrievalMethodEN, b: clsRetrievalMethodEN) => {
          return a.retrievalMethodEnName.localeCompare(b.retrievalMethodEnName);
        };
      case clsRetrievalMethodEN.con_UpdDate:
        return (a: clsRetrievalMethodEN, b: clsRetrievalMethodEN) => {
          return a.updDate.localeCompare(b.updDate);
        };
      case clsRetrievalMethodEN.con_UpdUser:
        return (a: clsRetrievalMethodEN, b: clsRetrievalMethodEN) => {
          return a.updUser.localeCompare(b.updUser);
        };
      case clsRetrievalMethodEN.con_Memo:
        return (a: clsRetrievalMethodEN, b: clsRetrievalMethodEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[RetrievalMethod]中不存在!(in ${retrievalMethod_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsRetrievalMethodEN.con_RetrievalMethodId:
        return (a: clsRetrievalMethodEN, b: clsRetrievalMethodEN) => {
          return b.retrievalMethodId.localeCompare(a.retrievalMethodId);
        };
      case clsRetrievalMethodEN.con_RetrievalMethodName:
        return (a: clsRetrievalMethodEN, b: clsRetrievalMethodEN) => {
          return b.retrievalMethodName.localeCompare(a.retrievalMethodName);
        };
      case clsRetrievalMethodEN.con_RetrievalMethodEnName:
        return (a: clsRetrievalMethodEN, b: clsRetrievalMethodEN) => {
          return b.retrievalMethodEnName.localeCompare(a.retrievalMethodEnName);
        };
      case clsRetrievalMethodEN.con_UpdDate:
        return (a: clsRetrievalMethodEN, b: clsRetrievalMethodEN) => {
          return b.updDate.localeCompare(a.updDate);
        };
      case clsRetrievalMethodEN.con_UpdUser:
        return (a: clsRetrievalMethodEN, b: clsRetrievalMethodEN) => {
          return b.updUser.localeCompare(a.updUser);
        };
      case clsRetrievalMethodEN.con_Memo:
        return (a: clsRetrievalMethodEN, b: clsRetrievalMethodEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[RetrievalMethod]中不存在!(in ${retrievalMethod_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strRetrievalMethodId:所给的关键字
 * @returns 对象
 */
export async function RetrievalMethod_GetNameByRetrievalMethodIdCache(
  strRetrievalMethodId: string,
) {
  if (IsNullOrEmpty(strRetrievalMethodId) == true) {
    const strMsg = Format(
      '参数:[strRetrievalMethodId]不能为空!(In clsRetrievalMethodWApi.GetNameByRetrievalMethodIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strRetrievalMethodId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strRetrievalMethodId]的长度:[{0}]不正确!(clsRetrievalMethodWApi.GetNameByRetrievalMethodIdCache)',
      strRetrievalMethodId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrRetrievalMethodObjLstCache = await RetrievalMethod_GetObjLstCache();
  if (arrRetrievalMethodObjLstCache == null) return '';
  try {
    const arrRetrievalMethodSel = arrRetrievalMethodObjLstCache.filter(
      (x) => x.retrievalMethodId == strRetrievalMethodId,
    );
    let objRetrievalMethod: clsRetrievalMethodEN;
    if (arrRetrievalMethodSel.length > 0) {
      objRetrievalMethod = arrRetrievalMethodSel[0];
      return objRetrievalMethod.retrievalMethodName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strRetrievalMethodId,
    );
    console.error(strMsg);
    alert(strMsg);
  }
  return '';
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-06-09
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function RetrievalMethod_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsRetrievalMethodEN.con_RetrievalMethodId:
      return (obj: clsRetrievalMethodEN) => {
        return obj.retrievalMethodId === value;
      };
    case clsRetrievalMethodEN.con_RetrievalMethodName:
      return (obj: clsRetrievalMethodEN) => {
        return obj.retrievalMethodName === value;
      };
    case clsRetrievalMethodEN.con_RetrievalMethodEnName:
      return (obj: clsRetrievalMethodEN) => {
        return obj.retrievalMethodEnName === value;
      };
    case clsRetrievalMethodEN.con_UpdDate:
      return (obj: clsRetrievalMethodEN) => {
        return obj.updDate === value;
      };
    case clsRetrievalMethodEN.con_UpdUser:
      return (obj: clsRetrievalMethodEN) => {
        return obj.updUser === value;
      };
    case clsRetrievalMethodEN.con_Memo:
      return (obj: clsRetrievalMethodEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[RetrievalMethod]中不存在!(in ${retrievalMethod_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2025-06-09
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 * @returns 返回一个输出字段值
 */
export async function RetrievalMethod_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsRetrievalMethodEN.con_RetrievalMethodId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsRetrievalMethodEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsRetrievalMethodEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strRetrievalMethodId = strInValue;
  if (IsNullOrEmpty(strRetrievalMethodId) == true) {
    return '';
  }
  const objRetrievalMethod = await RetrievalMethod_GetObjByRetrievalMethodIdCache(
    strRetrievalMethodId,
  );
  if (objRetrievalMethod == null) return '';
  if (objRetrievalMethod.GetFldValue(strOutFldName) == null) return '';
  return objRetrievalMethod.GetFldValue(strOutFldName).toString();
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2025-06-09
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 * @returns 返回一个关键字值列表
 */
export async function RetrievalMethod_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsRetrievalMethodEN.con_RetrievalMethodId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrRetrievalMethod = await RetrievalMethod_GetObjLstCache();
  if (arrRetrievalMethod == null) return [];
  let arrRetrievalMethodSel = arrRetrievalMethod;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrRetrievalMethodSel = arrRetrievalMethodSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrRetrievalMethodSel = arrRetrievalMethodSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrRetrievalMethodSel = arrRetrievalMethodSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrRetrievalMethodSel = arrRetrievalMethodSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrRetrievalMethodSel = arrRetrievalMethodSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrRetrievalMethodSel = arrRetrievalMethodSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrRetrievalMethodSel = arrRetrievalMethodSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrRetrievalMethodSel = arrRetrievalMethodSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrRetrievalMethodSel = arrRetrievalMethodSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrRetrievalMethodSel = arrRetrievalMethodSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrRetrievalMethodSel.length == 0) return [];
  return arrRetrievalMethodSel.map((x) => x.retrievalMethodId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function RetrievalMethod_GetFldValueAsync(
  strFldName: string,
  strWhereCond: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetFldValueAsync';
  const strAction = 'GetFldValue';
  const strUrl = GetWebApiUrl(retrievalMethod_Controller, strAction);

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
        retrievalMethod_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        retrievalMethod_ConstructorName,
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
export async function RetrievalMethod_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(retrievalMethod_Controller, strAction);

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
        retrievalMethod_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        retrievalMethod_ConstructorName,
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
export async function RetrievalMethod_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(retrievalMethod_Controller, strAction);

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
        retrievalMethod_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        retrievalMethod_ConstructorName,
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
export async function RetrievalMethod_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsRetrievalMethodEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(retrievalMethod_Controller, strAction);

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
      const objRetrievalMethod = RetrievalMethod_GetObjFromJsonObj(returnObj);
      return objRetrievalMethod;
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
        retrievalMethod_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        retrievalMethod_ConstructorName,
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
export async function RetrievalMethod_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsRetrievalMethodEN._CurrTabName;
  if (IsNullOrEmpty(clsRetrievalMethodEN.WhereFormat) == false) {
    strWhereCond = clsRetrievalMethodEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsRetrievalMethodEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsRetrievalMethodEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrRetrievalMethodExObjLstCache: Array<clsRetrievalMethodEN> = CacheHelper.Get(strKey);
    const arrRetrievalMethodObjLstT = RetrievalMethod_GetObjLstByJSONObjLst(
      arrRetrievalMethodExObjLstCache,
    );
    return arrRetrievalMethodObjLstT;
  }
  try {
    const arrRetrievalMethodExObjLst = await RetrievalMethod_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrRetrievalMethodExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrRetrievalMethodExObjLst.length,
    );
    console.log(strInfo);
    return arrRetrievalMethodExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      retrievalMethod_ConstructorName,
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
export async function RetrievalMethod_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsRetrievalMethodEN._CurrTabName;
  if (IsNullOrEmpty(clsRetrievalMethodEN.WhereFormat) == false) {
    strWhereCond = clsRetrievalMethodEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsRetrievalMethodEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsRetrievalMethodEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrRetrievalMethodExObjLstCache: Array<clsRetrievalMethodEN> = JSON.parse(strTempObjLst);
    const arrRetrievalMethodObjLstT = RetrievalMethod_GetObjLstByJSONObjLst(
      arrRetrievalMethodExObjLstCache,
    );
    return arrRetrievalMethodObjLstT;
  }
  try {
    const arrRetrievalMethodExObjLst = await RetrievalMethod_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrRetrievalMethodExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrRetrievalMethodExObjLst.length,
    );
    console.log(strInfo);
    return arrRetrievalMethodExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      retrievalMethod_ConstructorName,
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
export async function RetrievalMethod_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsRetrievalMethodEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrRetrievalMethodObjLstCache: Array<clsRetrievalMethodEN> = JSON.parse(strTempObjLst);
    return arrRetrievalMethodObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function RetrievalMethod_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsRetrievalMethodEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(retrievalMethod_Controller, strAction);

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
          retrievalMethod_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = RetrievalMethod_GetObjLstByJSONObjLst(returnObjLst);
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
        retrievalMethod_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        retrievalMethod_ConstructorName,
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
export async function RetrievalMethod_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsRetrievalMethodEN._CurrTabName;
  if (IsNullOrEmpty(clsRetrievalMethodEN.WhereFormat) == false) {
    strWhereCond = clsRetrievalMethodEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsRetrievalMethodEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsRetrievalMethodEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrRetrievalMethodExObjLstCache: Array<clsRetrievalMethodEN> = JSON.parse(strTempObjLst);
    const arrRetrievalMethodObjLstT = RetrievalMethod_GetObjLstByJSONObjLst(
      arrRetrievalMethodExObjLstCache,
    );
    return arrRetrievalMethodObjLstT;
  }
  try {
    const arrRetrievalMethodExObjLst = await RetrievalMethod_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrRetrievalMethodExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrRetrievalMethodExObjLst.length,
    );
    console.log(strInfo);
    return arrRetrievalMethodExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      retrievalMethod_ConstructorName,
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
export async function RetrievalMethod_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsRetrievalMethodEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrRetrievalMethodObjLstCache: Array<clsRetrievalMethodEN> = JSON.parse(strTempObjLst);
    return arrRetrievalMethodObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function RetrievalMethod_GetObjLstCache(): Promise<Array<clsRetrievalMethodEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrRetrievalMethodObjLstCache;
  switch (clsRetrievalMethodEN.CacheModeId) {
    case '04': //sessionStorage
      arrRetrievalMethodObjLstCache = await RetrievalMethod_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrRetrievalMethodObjLstCache = await RetrievalMethod_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrRetrievalMethodObjLstCache = await RetrievalMethod_GetObjLstClientCache();
      break;
    default:
      arrRetrievalMethodObjLstCache = await RetrievalMethod_GetObjLstClientCache();
      break;
  }
  return arrRetrievalMethodObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function RetrievalMethod_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrRetrievalMethodObjLstCache;
  switch (clsRetrievalMethodEN.CacheModeId) {
    case '04': //sessionStorage
      arrRetrievalMethodObjLstCache = await RetrievalMethod_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrRetrievalMethodObjLstCache = await RetrievalMethod_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrRetrievalMethodObjLstCache = null;
      break;
    default:
      arrRetrievalMethodObjLstCache = null;
      break;
  }
  return arrRetrievalMethodObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrRetrievalMethodIdCond:条件对象
 * @returns 对象列表子集
 */
export async function RetrievalMethod_GetSubObjLstCache(
  objRetrievalMethodCond: ConditionCollection,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrRetrievalMethodObjLstCache = await RetrievalMethod_GetObjLstCache();
  let arrRetrievalMethodSel = arrRetrievalMethodObjLstCache;
  if (objRetrievalMethodCond.GetConditions().length == 0) return arrRetrievalMethodSel;
  try {
    //console.log(sstrKeys);
    for (const objCondition of objRetrievalMethodCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrRetrievalMethodSel = arrRetrievalMethodSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrRetrievalMethodSel = arrRetrievalMethodSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrRetrievalMethodSel = arrRetrievalMethodSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrRetrievalMethodSel = arrRetrievalMethodSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrRetrievalMethodSel = arrRetrievalMethodSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrRetrievalMethodSel = arrRetrievalMethodSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrRetrievalMethodSel = arrRetrievalMethodSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrRetrievalMethodSel = arrRetrievalMethodSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrRetrievalMethodSel = arrRetrievalMethodSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrRetrievalMethodSel = arrRetrievalMethodSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrRetrievalMethodSel = arrRetrievalMethodSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrRetrievalMethodSel = arrRetrievalMethodSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrRetrievalMethodSel = arrRetrievalMethodSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrRetrievalMethodSel = arrRetrievalMethodSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrRetrievalMethodSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objRetrievalMethodCond),
      retrievalMethod_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsRetrievalMethodEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrRetrievalMethodId:关键字列表
 * @returns 对象列表
 **/
export async function RetrievalMethod_GetObjLstByRetrievalMethodIdLstAsync(
  arrRetrievalMethodId: Array<string>,
): Promise<Array<clsRetrievalMethodEN>> {
  const strThisFuncName = 'GetObjLstByRetrievalMethodIdLstAsync';
  const strAction = 'GetObjLstByRetrievalMethodIdLst';
  const strUrl = GetWebApiUrl(retrievalMethod_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrRetrievalMethodId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          retrievalMethod_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = RetrievalMethod_GetObjLstByJSONObjLst(returnObjLst);
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
        retrievalMethod_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        retrievalMethod_ConstructorName,
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
 * @param arrstrRetrievalMethodIdLst:关键字列表
 * @returns 对象列表
 */
export async function RetrievalMethod_GetObjLstByRetrievalMethodIdLstCache(
  arrRetrievalMethodIdLst: Array<string>,
) {
  const strThisFuncName = 'GetObjLstByRetrievalMethodIdLstCache';
  try {
    const arrRetrievalMethodObjLstCache = await RetrievalMethod_GetObjLstCache();
    const arrRetrievalMethodSel = arrRetrievalMethodObjLstCache.filter(
      (x) => arrRetrievalMethodIdLst.indexOf(x.retrievalMethodId) > -1,
    );
    return arrRetrievalMethodSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrRetrievalMethodIdLst.join(','),
      retrievalMethod_ConstructorName,
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
export async function RetrievalMethod_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsRetrievalMethodEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(retrievalMethod_Controller, strAction);

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
          retrievalMethod_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = RetrievalMethod_GetObjLstByJSONObjLst(returnObjLst);
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
        retrievalMethod_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        retrievalMethod_ConstructorName,
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
export async function RetrievalMethod_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsRetrievalMethodEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(retrievalMethod_Controller, strAction);

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
          retrievalMethod_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = RetrievalMethod_GetObjLstByJSONObjLst(returnObjLst);
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
        retrievalMethod_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        retrievalMethod_ConstructorName,
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
 * @param strRetrievalMethodId:关键字
 * @returns 获取删除的结果
 **/
export async function RetrievalMethod_DelRecordAsync(
  strRetrievalMethodId: string,
): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(retrievalMethod_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strRetrievalMethodId);

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
        retrievalMethod_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        retrievalMethod_ConstructorName,
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
 * @param arrRetrievalMethodId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function RetrievalMethod_DelRetrievalMethodsAsync(
  arrRetrievalMethodId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelRetrievalMethodsAsync';
  const strAction = 'DelRetrievalMethods';
  const strUrl = GetWebApiUrl(retrievalMethod_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrRetrievalMethodId, config);
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
        retrievalMethod_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        retrievalMethod_ConstructorName,
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
export async function RetrievalMethod_DelRetrievalMethodsByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelRetrievalMethodsByCondAsync';
  const strAction = 'DelRetrievalMethodsByCond';
  const strUrl = GetWebApiUrl(retrievalMethod_Controller, strAction);

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
        retrievalMethod_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        retrievalMethod_ConstructorName,
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
 * @param objRetrievalMethodEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function RetrievalMethod_AddNewRecordAsync(
  objRetrievalMethodEN: clsRetrievalMethodEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objRetrievalMethodEN);
  const strUrl = GetWebApiUrl(retrievalMethod_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objRetrievalMethodEN, config);
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
        retrievalMethod_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        retrievalMethod_ConstructorName,
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
 * @param objRetrievalMethodEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function RetrievalMethod_AddNewRecordWithMaxIdAsync(
  objRetrievalMethodEN: clsRetrievalMethodEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(retrievalMethod_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objRetrievalMethodEN, config);
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
        retrievalMethod_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        retrievalMethod_ConstructorName,
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
export async function RetrievalMethod_AddNewObjSave(
  objRetrievalMethodEN: clsRetrievalMethodEN,
): Promise<AddRecordResult> {
  const strThisFuncName = 'AddNewObjSave';
  try {
    RetrievalMethod_CheckPropertyNew(objRetrievalMethodEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${retrievalMethod_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    alert(strMsg);
    return { keyword: '', success: false }; //一定要有一个返回值,否则会出错!
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await RetrievalMethod_CheckUniCond4Add(objRetrievalMethodEN);
    if (bolIsExistCond == false) {
      return { keyword: '', success: false };
    }
    let returnBool = false;
    const returnKeyId = await RetrievalMethod_AddNewRecordWithMaxIdAsync(objRetrievalMethodEN);
    if (IsNullOrEmpty(returnKeyId) == false) {
      returnBool = true;
    }
    if (returnBool == true) {
      RetrievalMethod_ReFreshCache();
    } else {
      const strInfo = `添加[获取方式(RetrievalMethod)]记录不成功!`;
      //显示信息框
      throw strInfo;
    }
    return { keyword: returnKeyId, success: returnBool }; //一定要有一个返回值,否则会出错!
  } catch (e) {
    const strMsg = `添加记录不成功,${e}.(in ${retrievalMethod_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export async function RetrievalMethod_CheckUniCond4Add(
  objRetrievalMethodEN: clsRetrievalMethodEN,
): Promise<boolean> {
  const strUniquenessCondition = RetrievalMethod_GetUniCondStr(objRetrievalMethodEN);
  const bolIsExistCondition = await RetrievalMethod_IsExistRecordAsync(strUniquenessCondition);
  if (bolIsExistCondition == true) {
    const strMsg = Format(
      '不能满足唯一性条件。满足条件：{0}的记录已经存在!',
      strUniquenessCondition,
    );
    console.error(strMsg);
    alert(strMsg);
    return false;
  }
  return true;
}

/** 为修改记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Update)
 **/
export async function RetrievalMethod_CheckUniCond4Update(
  objRetrievalMethodEN: clsRetrievalMethodEN,
): Promise<boolean> {
  const strUniquenessCondition = RetrievalMethod_GetUniCondStr4Update(objRetrievalMethodEN);
  const bolIsExistCondition = await RetrievalMethod_IsExistRecordAsync(strUniquenessCondition);
  if (bolIsExistCondition == true) {
    const strMsg = Format(
      '不能满足唯一性条件。满足条件：{0}的记录已经存在!',
      strUniquenessCondition,
    );
    console.error(strMsg);
    alert(strMsg);
    return false;
  }
  return true;
}

/** 修改记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjSave)
 **/
export async function RetrievalMethod_UpdateObjSave(
  objRetrievalMethodEN: clsRetrievalMethodEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateObjSave';
  objRetrievalMethodEN.sfUpdFldSetStr = objRetrievalMethodEN.updFldString; //设置哪些字段被修改(脏字段)
  if (
    objRetrievalMethodEN.retrievalMethodId == '' ||
    objRetrievalMethodEN.retrievalMethodId == undefined
  ) {
    console.error('关键字不能为空!');
    throw '关键字不能为空!';
  }
  try {
    RetrievalMethod_CheckProperty4Update(objRetrievalMethodEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${retrievalMethod_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await RetrievalMethod_CheckUniCond4Update(objRetrievalMethodEN);
    if (bolIsExistCond == false) {
      return false;
    }
    const returnBool = await RetrievalMethod_UpdateRecordAsync(objRetrievalMethodEN);
    if (returnBool == true) {
      RetrievalMethod_ReFreshCache();
    }
    return returnBool;
  } catch (e) {
    const strMsg = `修改记录不成功,${e}.(in ${retrievalMethod_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objRetrievalMethodEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function RetrievalMethod_AddNewRecordWithReturnKeyAsync(
  objRetrievalMethodEN: clsRetrievalMethodEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(retrievalMethod_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objRetrievalMethodEN, config);
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
        retrievalMethod_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        retrievalMethod_ConstructorName,
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
 * @param objRetrievalMethodEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function RetrievalMethod_UpdateRecordAsync(
  objRetrievalMethodEN: clsRetrievalMethodEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objRetrievalMethodEN.sfUpdFldSetStr === undefined ||
    objRetrievalMethodEN.sfUpdFldSetStr === null ||
    objRetrievalMethodEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objRetrievalMethodEN.retrievalMethodId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(retrievalMethod_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objRetrievalMethodEN, config);
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
        retrievalMethod_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        retrievalMethod_ConstructorName,
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
 * @param objRetrievalMethodEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function RetrievalMethod_EditRecordExAsync(
  objRetrievalMethodEN: clsRetrievalMethodEN,
): Promise<boolean> {
  const strThisFuncName = 'EditRecordExAsync';
  const strAction = 'EditRecordEx';
  if (
    objRetrievalMethodEN.sfUpdFldSetStr === undefined ||
    objRetrievalMethodEN.sfUpdFldSetStr === null ||
    objRetrievalMethodEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objRetrievalMethodEN.retrievalMethodId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(retrievalMethod_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objRetrievalMethodEN, config);
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
        retrievalMethod_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        retrievalMethod_ConstructorName,
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
 * @param objRetrievalMethodEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function RetrievalMethod_UpdateWithConditionAsync(
  objRetrievalMethodEN: clsRetrievalMethodEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objRetrievalMethodEN.sfUpdFldSetStr === undefined ||
    objRetrievalMethodEN.sfUpdFldSetStr === null ||
    objRetrievalMethodEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objRetrievalMethodEN.retrievalMethodId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(retrievalMethod_Controller, strAction);
  objRetrievalMethodEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objRetrievalMethodEN, config);
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
        retrievalMethod_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        retrievalMethod_ConstructorName,
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
 * @param objstrRetrievalMethodIdCond:条件对象
 * @returns 对象列表子集
 */
export async function RetrievalMethod_IsExistRecordCache(
  objRetrievalMethodCond: ConditionCollection,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrRetrievalMethodObjLstCache = await RetrievalMethod_GetObjLstCache();
  if (arrRetrievalMethodObjLstCache == null) return false;
  let arrRetrievalMethodSel = arrRetrievalMethodObjLstCache;
  if (objRetrievalMethodCond.GetConditions().length == 0)
    return arrRetrievalMethodSel.length > 0 ? true : false;
  try {
    for (const objCondition of objRetrievalMethodCond.GetConditions()) {
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
            arrRetrievalMethodSel = arrRetrievalMethodSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrRetrievalMethodSel = arrRetrievalMethodSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrRetrievalMethodSel = arrRetrievalMethodSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrRetrievalMethodSel = arrRetrievalMethodSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrRetrievalMethodSel = arrRetrievalMethodSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrRetrievalMethodSel = arrRetrievalMethodSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrRetrievalMethodSel = arrRetrievalMethodSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrRetrievalMethodSel = arrRetrievalMethodSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrRetrievalMethodSel = arrRetrievalMethodSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrRetrievalMethodSel = arrRetrievalMethodSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrRetrievalMethodSel = arrRetrievalMethodSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrRetrievalMethodSel = arrRetrievalMethodSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrRetrievalMethodSel = arrRetrievalMethodSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrRetrievalMethodSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objRetrievalMethodCond),
      retrievalMethod_ConstructorName,
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
export async function RetrievalMethod_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(retrievalMethod_Controller, strAction);

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
        retrievalMethod_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        retrievalMethod_ConstructorName,
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
 * @param strRetrievalMethodId:所给的关键字
 * @returns 对象
 */
export async function RetrievalMethod_IsExistCache(strRetrievalMethodId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrRetrievalMethodObjLstCache = await RetrievalMethod_GetObjLstCache();
  if (arrRetrievalMethodObjLstCache == null) return false;
  try {
    const arrRetrievalMethodSel = arrRetrievalMethodObjLstCache.filter(
      (x) => x.retrievalMethodId == strRetrievalMethodId,
    );
    if (arrRetrievalMethodSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strRetrievalMethodId,
      retrievalMethod_ConstructorName,
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
 * @param strRetrievalMethodId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function RetrievalMethod_IsExistAsync(strRetrievalMethodId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(retrievalMethod_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strRetrievalMethodId,
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
        retrievalMethod_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        retrievalMethod_ConstructorName,
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
export async function RetrievalMethod_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(retrievalMethod_Controller, strAction);

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
        retrievalMethod_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        retrievalMethod_ConstructorName,
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
 * @param objRetrievalMethodCond:条件对象
 * @returns 对象列表记录数
 */
export async function RetrievalMethod_GetRecCountByCondCache(
  objRetrievalMethodCond: ConditionCollection,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrRetrievalMethodObjLstCache = await RetrievalMethod_GetObjLstCache();
  if (arrRetrievalMethodObjLstCache == null) return 0;
  let arrRetrievalMethodSel = arrRetrievalMethodObjLstCache;
  if (objRetrievalMethodCond.GetConditions().length == 0) return arrRetrievalMethodSel.length;
  try {
    for (const objCondition of objRetrievalMethodCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrRetrievalMethodSel = arrRetrievalMethodSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrRetrievalMethodSel = arrRetrievalMethodSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrRetrievalMethodSel = arrRetrievalMethodSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrRetrievalMethodSel = arrRetrievalMethodSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrRetrievalMethodSel = arrRetrievalMethodSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrRetrievalMethodSel = arrRetrievalMethodSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrRetrievalMethodSel = arrRetrievalMethodSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrRetrievalMethodSel = arrRetrievalMethodSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrRetrievalMethodSel = arrRetrievalMethodSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrRetrievalMethodSel = arrRetrievalMethodSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrRetrievalMethodSel = arrRetrievalMethodSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrRetrievalMethodSel = arrRetrievalMethodSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrRetrievalMethodSel = arrRetrievalMethodSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrRetrievalMethodSel = arrRetrievalMethodSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrRetrievalMethodSel = arrRetrievalMethodSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrRetrievalMethodSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objRetrievalMethodCond),
      retrievalMethod_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return 0;
}

/**
 * 获取表的最大关键字
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetMaxStrIdAsync)
 * @returns 获取表的最大关键字
 **/
export async function RetrievalMethod_GetMaxStrIdAsync(): Promise<string> {
  const strThisFuncName = 'GetMaxStrIdAsync';
  const strAction = 'GetMaxStrId';
  const strUrl = GetWebApiUrl(retrievalMethod_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
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
        retrievalMethod_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        retrievalMethod_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
/*该表的关键字类型不是字符型带前缀自增,不需要生成获取最大关键字函数!*/

/**
 * 根据前缀获取当前表关键字值的最大值,再加1,避免重复
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetMaxStrIdByPrefix)
 * @param mapParam:参数列表
 * @returns 获取当前表关键字值的最大值
 */
export async function RetrievalMethod_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(retrievalMethod_Controller, strAction);

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
        retrievalMethod_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        retrievalMethod_ConstructorName,
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
export function RetrievalMethod_GetWebApiUrl(strController: string, strAction: string): string {
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
export function RetrievalMethod_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功!');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clsRetrievalMethodEN._CurrTabName;
  switch (clsRetrievalMethodEN.CacheModeId) {
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
  clsRetrievalMethodEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
}

/**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export function RetrievalMethod_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsRetrievalMethodEN._CurrTabName;
    switch (clsRetrievalMethodEN.CacheModeId) {
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
    clsRetrievalMethodEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export function RetrievalMethod_GetLastRefreshTime(): string {
  if (clsRetrievalMethodEN._RefreshTimeLst.length == 0) return '';
  return clsRetrievalMethodEN._RefreshTimeLst[clsRetrievalMethodEN._RefreshTimeLst.length - 1];
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export async function RetrievalMethod_BindDdl_RetrievalMethodIdInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
) {
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_RetrievalMethodIdInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_RetrievalMethodIdInDivCache");
  const arrObjLstSel = await RetrievalMethod_GetObjLstCache();
  if (arrObjLstSel == null) return;
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsRetrievalMethodEN.con_RetrievalMethodId,
    clsRetrievalMethodEN.con_RetrievalMethodName,
    '获取方式...',
  );
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export async function RetrievalMethod_GetArrRetrievalMethod() {
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_RetrievalMethodIdInDivCache");
  const arrRetrievalMethod = new Array<clsRetrievalMethodEN>();
  const arrObjLstSel = await RetrievalMethod_GetObjLstCache();
  if (arrObjLstSel == null) return null;
  const obj0 = new clsRetrievalMethodEN();
  obj0.retrievalMethodId = '0';
  obj0.retrievalMethodName = '选获取方式...';
  arrRetrievalMethod.push(obj0);
  arrObjLstSel.forEach((x) => arrRetrievalMethod.push(x));
  return arrRetrievalMethod;
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function RetrievalMethod_CheckPropertyNew(pobjRetrievalMethodEN: clsRetrievalMethodEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjRetrievalMethodEN.retrievalMethodName) === true) {
    throw new Error(
      `(errid:Watl000411)字段[获取方式名]不能为空(In 获取方式)!(clsRetrievalMethodBL:CheckPropertyNew0)`,
    );
  }
  if (IsNullOrEmpty(pobjRetrievalMethodEN.retrievalMethodEnName) === true) {
    throw new Error(
      `(errid:Watl000411)字段[获取方式英文名]不能为空(In 获取方式)!(clsRetrievalMethodBL:CheckPropertyNew0)`,
    );
  }
  if (IsNullOrEmpty(pobjRetrievalMethodEN.updUser) === true) {
    throw new Error(
      `(errid:Watl000411)字段[修改者]不能为空(In 获取方式)!(clsRetrievalMethodBL:CheckPropertyNew0)`,
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjRetrievalMethodEN.retrievalMethodId) == false &&
    GetStrLen(pobjRetrievalMethodEN.retrievalMethodId) > 2
  ) {
    throw new Error(
      `(errid:Watl000413)字段[获取方式Id(retrievalMethodId)]的长度不能超过2(In 获取方式(RetrievalMethod))!值:${pobjRetrievalMethodEN.retrievalMethodId}(clsRetrievalMethodBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjRetrievalMethodEN.retrievalMethodName) == false &&
    GetStrLen(pobjRetrievalMethodEN.retrievalMethodName) > 50
  ) {
    throw new Error(
      `(errid:Watl000413)字段[获取方式名(retrievalMethodName)]的长度不能超过50(In 获取方式(RetrievalMethod))!值:${pobjRetrievalMethodEN.retrievalMethodName}(clsRetrievalMethodBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjRetrievalMethodEN.retrievalMethodEnName) == false &&
    GetStrLen(pobjRetrievalMethodEN.retrievalMethodEnName) > 50
  ) {
    throw new Error(
      `(errid:Watl000413)字段[获取方式英文名(retrievalMethodEnName)]的长度不能超过50(In 获取方式(RetrievalMethod))!值:${pobjRetrievalMethodEN.retrievalMethodEnName}(clsRetrievalMethodBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjRetrievalMethodEN.updDate) == false &&
    GetStrLen(pobjRetrievalMethodEN.updDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 获取方式(RetrievalMethod))!值:${pobjRetrievalMethodEN.updDate}(clsRetrievalMethodBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjRetrievalMethodEN.updUser) == false &&
    GetStrLen(pobjRetrievalMethodEN.updUser) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改者(updUser)]的长度不能超过20(In 获取方式(RetrievalMethod))!值:${pobjRetrievalMethodEN.updUser}(clsRetrievalMethodBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjRetrievalMethodEN.memo) == false &&
    GetStrLen(pobjRetrievalMethodEN.memo) > 1000
  ) {
    throw new Error(
      `(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In 获取方式(RetrievalMethod))!值:${pobjRetrievalMethodEN.memo}(clsRetrievalMethodBL:CheckPropertyNew)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjRetrievalMethodEN.retrievalMethodId) == false &&
    undefined !== pobjRetrievalMethodEN.retrievalMethodId &&
    tzDataType.isString(pobjRetrievalMethodEN.retrievalMethodId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[获取方式Id(retrievalMethodId)]的值:[${pobjRetrievalMethodEN.retrievalMethodId}], 非法,应该为字符型(In 获取方式(RetrievalMethod))!(clsRetrievalMethodBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjRetrievalMethodEN.retrievalMethodName) == false &&
    undefined !== pobjRetrievalMethodEN.retrievalMethodName &&
    tzDataType.isString(pobjRetrievalMethodEN.retrievalMethodName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[获取方式名(retrievalMethodName)]的值:[${pobjRetrievalMethodEN.retrievalMethodName}], 非法,应该为字符型(In 获取方式(RetrievalMethod))!(clsRetrievalMethodBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjRetrievalMethodEN.retrievalMethodEnName) == false &&
    undefined !== pobjRetrievalMethodEN.retrievalMethodEnName &&
    tzDataType.isString(pobjRetrievalMethodEN.retrievalMethodEnName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[获取方式英文名(retrievalMethodEnName)]的值:[${pobjRetrievalMethodEN.retrievalMethodEnName}], 非法,应该为字符型(In 获取方式(RetrievalMethod))!(clsRetrievalMethodBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjRetrievalMethodEN.updDate) == false &&
    undefined !== pobjRetrievalMethodEN.updDate &&
    tzDataType.isString(pobjRetrievalMethodEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjRetrievalMethodEN.updDate}], 非法,应该为字符型(In 获取方式(RetrievalMethod))!(clsRetrievalMethodBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjRetrievalMethodEN.updUser) == false &&
    undefined !== pobjRetrievalMethodEN.updUser &&
    tzDataType.isString(pobjRetrievalMethodEN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改者(updUser)]的值:[${pobjRetrievalMethodEN.updUser}], 非法,应该为字符型(In 获取方式(RetrievalMethod))!(clsRetrievalMethodBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjRetrievalMethodEN.memo) == false &&
    undefined !== pobjRetrievalMethodEN.memo &&
    tzDataType.isString(pobjRetrievalMethodEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[说明(memo)]的值:[${pobjRetrievalMethodEN.memo}], 非法,应该为字符型(In 获取方式(RetrievalMethod))!(clsRetrievalMethodBL:CheckPropertyNew0)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function RetrievalMethod_CheckProperty4Update(pobjRetrievalMethodEN: clsRetrievalMethodEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjRetrievalMethodEN.retrievalMethodId) == false &&
    GetStrLen(pobjRetrievalMethodEN.retrievalMethodId) > 2
  ) {
    throw new Error(
      `(errid:Watl000416)字段[获取方式Id(retrievalMethodId)]的长度不能超过2(In 获取方式(RetrievalMethod))!值:${pobjRetrievalMethodEN.retrievalMethodId}(clsRetrievalMethodBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjRetrievalMethodEN.retrievalMethodName) == false &&
    GetStrLen(pobjRetrievalMethodEN.retrievalMethodName) > 50
  ) {
    throw new Error(
      `(errid:Watl000416)字段[获取方式名(retrievalMethodName)]的长度不能超过50(In 获取方式(RetrievalMethod))!值:${pobjRetrievalMethodEN.retrievalMethodName}(clsRetrievalMethodBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjRetrievalMethodEN.retrievalMethodEnName) == false &&
    GetStrLen(pobjRetrievalMethodEN.retrievalMethodEnName) > 50
  ) {
    throw new Error(
      `(errid:Watl000416)字段[获取方式英文名(retrievalMethodEnName)]的长度不能超过50(In 获取方式(RetrievalMethod))!值:${pobjRetrievalMethodEN.retrievalMethodEnName}(clsRetrievalMethodBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjRetrievalMethodEN.updDate) == false &&
    GetStrLen(pobjRetrievalMethodEN.updDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 获取方式(RetrievalMethod))!值:${pobjRetrievalMethodEN.updDate}(clsRetrievalMethodBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjRetrievalMethodEN.updUser) == false &&
    GetStrLen(pobjRetrievalMethodEN.updUser) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改者(updUser)]的长度不能超过20(In 获取方式(RetrievalMethod))!值:${pobjRetrievalMethodEN.updUser}(clsRetrievalMethodBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjRetrievalMethodEN.memo) == false &&
    GetStrLen(pobjRetrievalMethodEN.memo) > 1000
  ) {
    throw new Error(
      `(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In 获取方式(RetrievalMethod))!值:${pobjRetrievalMethodEN.memo}(clsRetrievalMethodBL:CheckProperty4Update)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjRetrievalMethodEN.retrievalMethodId) == false &&
    undefined !== pobjRetrievalMethodEN.retrievalMethodId &&
    tzDataType.isString(pobjRetrievalMethodEN.retrievalMethodId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[获取方式Id(retrievalMethodId)]的值:[${pobjRetrievalMethodEN.retrievalMethodId}], 非法,应该为字符型(In 获取方式(RetrievalMethod))!(clsRetrievalMethodBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjRetrievalMethodEN.retrievalMethodName) == false &&
    undefined !== pobjRetrievalMethodEN.retrievalMethodName &&
    tzDataType.isString(pobjRetrievalMethodEN.retrievalMethodName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[获取方式名(retrievalMethodName)]的值:[${pobjRetrievalMethodEN.retrievalMethodName}], 非法,应该为字符型(In 获取方式(RetrievalMethod))!(clsRetrievalMethodBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjRetrievalMethodEN.retrievalMethodEnName) == false &&
    undefined !== pobjRetrievalMethodEN.retrievalMethodEnName &&
    tzDataType.isString(pobjRetrievalMethodEN.retrievalMethodEnName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[获取方式英文名(retrievalMethodEnName)]的值:[${pobjRetrievalMethodEN.retrievalMethodEnName}], 非法,应该为字符型(In 获取方式(RetrievalMethod))!(clsRetrievalMethodBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjRetrievalMethodEN.updDate) == false &&
    undefined !== pobjRetrievalMethodEN.updDate &&
    tzDataType.isString(pobjRetrievalMethodEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjRetrievalMethodEN.updDate}], 非法,应该为字符型(In 获取方式(RetrievalMethod))!(clsRetrievalMethodBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjRetrievalMethodEN.updUser) == false &&
    undefined !== pobjRetrievalMethodEN.updUser &&
    tzDataType.isString(pobjRetrievalMethodEN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改者(updUser)]的值:[${pobjRetrievalMethodEN.updUser}], 非法,应该为字符型(In 获取方式(RetrievalMethod))!(clsRetrievalMethodBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjRetrievalMethodEN.memo) == false &&
    undefined !== pobjRetrievalMethodEN.memo &&
    tzDataType.isString(pobjRetrievalMethodEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[说明(memo)]的值:[${pobjRetrievalMethodEN.memo}], 非法,应该为字符型(In 获取方式(RetrievalMethod))!(clsRetrievalMethodBL:CheckProperty4Update)`,
    );
  }
  //检查主键是否为Null或者空!
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2025-06-09
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function RetrievalMethod_GetJSONStrByObj(
  pobjRetrievalMethodEN: clsRetrievalMethodEN,
): string {
  pobjRetrievalMethodEN.sfUpdFldSetStr = pobjRetrievalMethodEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjRetrievalMethodEN);
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
 * 日期:2025-06-09
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
 */
export function RetrievalMethod_GetObjLstByJSONStr(strJSON: string): Array<clsRetrievalMethodEN> {
  let arrRetrievalMethodObjLst = new Array<clsRetrievalMethodEN>();
  if (strJSON === '') {
    return arrRetrievalMethodObjLst;
  }
  try {
    arrRetrievalMethodObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrRetrievalMethodObjLst;
  }
  return arrRetrievalMethodObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-06-09
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrRetrievalMethodObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function RetrievalMethod_GetObjLstByJSONObjLst(
  arrRetrievalMethodObjLstS: Array<clsRetrievalMethodEN>,
): Array<clsRetrievalMethodEN> {
  const arrRetrievalMethodObjLst = new Array<clsRetrievalMethodEN>();
  for (const objInFor of arrRetrievalMethodObjLstS) {
    const obj1 = RetrievalMethod_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrRetrievalMethodObjLst.push(obj1);
  }
  return arrRetrievalMethodObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-06-09
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function RetrievalMethod_GetObjByJSONStr(strJSON: string): clsRetrievalMethodEN {
  let pobjRetrievalMethodEN = new clsRetrievalMethodEN();
  if (strJSON === '') {
    return pobjRetrievalMethodEN;
  }
  try {
    pobjRetrievalMethodEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjRetrievalMethodEN;
  }
  return pobjRetrievalMethodEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function RetrievalMethod_GetCombineCondition(
  objRetrievalMethodCond: clsRetrievalMethodEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objRetrievalMethodCond.dicFldComparisonOp,
      clsRetrievalMethodEN.con_RetrievalMethodId,
    ) == true
  ) {
    const strComparisonOpRetrievalMethodId: string =
      objRetrievalMethodCond.dicFldComparisonOp[clsRetrievalMethodEN.con_RetrievalMethodId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsRetrievalMethodEN.con_RetrievalMethodId,
      objRetrievalMethodCond.retrievalMethodId,
      strComparisonOpRetrievalMethodId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objRetrievalMethodCond.dicFldComparisonOp,
      clsRetrievalMethodEN.con_RetrievalMethodName,
    ) == true
  ) {
    const strComparisonOpRetrievalMethodName: string =
      objRetrievalMethodCond.dicFldComparisonOp[clsRetrievalMethodEN.con_RetrievalMethodName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsRetrievalMethodEN.con_RetrievalMethodName,
      objRetrievalMethodCond.retrievalMethodName,
      strComparisonOpRetrievalMethodName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objRetrievalMethodCond.dicFldComparisonOp,
      clsRetrievalMethodEN.con_RetrievalMethodEnName,
    ) == true
  ) {
    const strComparisonOpRetrievalMethodEnName: string =
      objRetrievalMethodCond.dicFldComparisonOp[clsRetrievalMethodEN.con_RetrievalMethodEnName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsRetrievalMethodEN.con_RetrievalMethodEnName,
      objRetrievalMethodCond.retrievalMethodEnName,
      strComparisonOpRetrievalMethodEnName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objRetrievalMethodCond.dicFldComparisonOp,
      clsRetrievalMethodEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objRetrievalMethodCond.dicFldComparisonOp[clsRetrievalMethodEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsRetrievalMethodEN.con_UpdDate,
      objRetrievalMethodCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objRetrievalMethodCond.dicFldComparisonOp,
      clsRetrievalMethodEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objRetrievalMethodCond.dicFldComparisonOp[clsRetrievalMethodEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsRetrievalMethodEN.con_UpdUser,
      objRetrievalMethodCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objRetrievalMethodCond.dicFldComparisonOp,
      clsRetrievalMethodEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objRetrievalMethodCond.dicFldComparisonOp[clsRetrievalMethodEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsRetrievalMethodEN.con_Memo,
      objRetrievalMethodCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--RetrievalMethod(获取方式),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strRetrievalMethodName: 获取方式名(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function RetrievalMethod_GetUniCondStr(objRetrievalMethodEN: clsRetrievalMethodEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(
    " and RetrievalMethodName = '{0}'",
    objRetrievalMethodEN.retrievalMethodName,
  );
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--RetrievalMethod(获取方式),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strRetrievalMethodName: 获取方式名(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function RetrievalMethod_GetUniCondStr4Update(
  objRetrievalMethodEN: clsRetrievalMethodEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and RetrievalMethodId <> '{0}'", objRetrievalMethodEN.retrievalMethodId);
  strWhereCond += Format(
    " and RetrievalMethodName = '{0}'",
    objRetrievalMethodEN.retrievalMethodName,
  );
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objRetrievalMethodENS:源对象
 * @param objRetrievalMethodENT:目标对象
 */
export function RetrievalMethod_GetObjFromJsonObj(
  objRetrievalMethodENS: clsRetrievalMethodEN,
): clsRetrievalMethodEN {
  const objRetrievalMethodENT: clsRetrievalMethodEN = new clsRetrievalMethodEN();
  ObjectAssign(objRetrievalMethodENT, objRetrievalMethodENS);
  return objRetrievalMethodENT;
}
