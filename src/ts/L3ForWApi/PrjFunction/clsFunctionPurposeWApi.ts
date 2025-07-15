/**
 * 类名:clsFunctionPurposeWApi
 * 表名:FunctionPurpose(00050526)
 * 版本:2025.05.08.1(服务器:WIN-SRV103-116)
 * 日期:2025/05/10 19:08:55
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 应用类型:Vue应用InCore-TS(30)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:函数管理(PrjFunction)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 函数用途(FunctionPurpose)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2025年05月10日.
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
import { clsFunctionPurposeEN } from '@/ts/L0Entity/PrjFunction/clsFunctionPurposeEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';

export const functionPurpose_Controller = 'FunctionPurposeApi';
export const functionPurpose_ConstructorName = 'functionPurpose';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strFuncPurposeId:关键字
 * @returns 对象
 **/
export async function FunctionPurpose_GetObjByFuncPurposeIdAsync(
  strFuncPurposeId: string,
): Promise<clsFunctionPurposeEN | null> {
  const strThisFuncName = 'GetObjByFuncPurposeIdAsync';

  if (IsNullOrEmpty(strFuncPurposeId) == true) {
    const strMsg = Format(
      '参数:[strFuncPurposeId]不能为空!(In clsFunctionPurposeWApi.GetObjByFuncPurposeIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strFuncPurposeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strFuncPurposeId]的长度:[{0}]不正确!(clsFunctionPurposeWApi.GetObjByFuncPurposeIdAsync)',
      strFuncPurposeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByFuncPurposeId';
  const strUrl = GetWebApiUrl(functionPurpose_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strFuncPurposeId,
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
      const objFunctionPurpose = FunctionPurpose_GetObjFromJsonObj(returnObj);
      return objFunctionPurpose;
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
        functionPurpose_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        functionPurpose_ConstructorName,
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
 * @param strFuncPurposeId:所给的关键字
 * @returns 对象
 */
export async function FunctionPurpose_GetObjByFuncPurposeIdlocalStorage(strFuncPurposeId: string) {
  const strThisFuncName = 'GetObjByFuncPurposeIdlocalStorage';

  if (IsNullOrEmpty(strFuncPurposeId) == true) {
    const strMsg = Format(
      '参数:[strFuncPurposeId]不能为空!(In clsFunctionPurposeWApi.GetObjByFuncPurposeIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strFuncPurposeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strFuncPurposeId]的长度:[{0}]不正确!(clsFunctionPurposeWApi.GetObjByFuncPurposeIdlocalStorage)',
      strFuncPurposeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsFunctionPurposeEN._CurrTabName, strFuncPurposeId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objFunctionPurposeCache: clsFunctionPurposeEN = JSON.parse(strTempObj);
    return objFunctionPurposeCache;
  }
  try {
    const objFunctionPurpose = await FunctionPurpose_GetObjByFuncPurposeIdAsync(strFuncPurposeId);
    if (objFunctionPurpose != null) {
      localStorage.setItem(strKey, JSON.stringify(objFunctionPurpose));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objFunctionPurpose;
    }
    return objFunctionPurpose;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strFuncPurposeId,
      functionPurpose_ConstructorName,
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
 * @param strFuncPurposeId:所给的关键字
 * @returns 对象
 */
export async function FunctionPurpose_GetObjByFuncPurposeIdCache(
  strFuncPurposeId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByFuncPurposeIdCache';

  if (IsNullOrEmpty(strFuncPurposeId) == true) {
    const strMsg = Format(
      '参数:[strFuncPurposeId]不能为空!(In clsFunctionPurposeWApi.GetObjByFuncPurposeIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strFuncPurposeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strFuncPurposeId]的长度:[{0}]不正确!(clsFunctionPurposeWApi.GetObjByFuncPurposeIdCache)',
      strFuncPurposeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrFunctionPurposeObjLstCache = await FunctionPurpose_GetObjLstCache();
  try {
    const arrFunctionPurposeSel = arrFunctionPurposeObjLstCache.filter(
      (x) => x.funcPurposeId == strFuncPurposeId,
    );
    let objFunctionPurpose: clsFunctionPurposeEN;
    if (arrFunctionPurposeSel.length > 0) {
      objFunctionPurpose = arrFunctionPurposeSel[0];
      return objFunctionPurpose;
    } else {
      if (bolTryAsyncOnce == true) {
        const objFunctionPurposeConst = await FunctionPurpose_GetObjByFuncPurposeIdAsync(
          strFuncPurposeId,
        );
        if (objFunctionPurposeConst != null) {
          FunctionPurpose_ReFreshThisCache();
          return objFunctionPurposeConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strFuncPurposeId,
      functionPurpose_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objFunctionPurpose:所给的对象
 * @returns 对象
 */
export async function FunctionPurpose_UpdateObjInLstCache(
  objFunctionPurpose: clsFunctionPurposeEN,
) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrFunctionPurposeObjLstCache = await FunctionPurpose_GetObjLstCache();
    const obj = arrFunctionPurposeObjLstCache.find(
      (x) => x.funcPurposeId == objFunctionPurpose.funcPurposeId,
    );
    if (obj != null) {
      objFunctionPurpose.funcPurposeId = obj.funcPurposeId;
      ObjectAssign(obj, objFunctionPurpose);
    } else {
      arrFunctionPurposeObjLstCache.push(objFunctionPurpose);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      functionPurpose_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-05-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function FunctionPurpose_SortFunDefa(
  a: clsFunctionPurposeEN,
  b: clsFunctionPurposeEN,
): number {
  return a.funcPurposeId.localeCompare(b.funcPurposeId);
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2025-05-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function FunctionPurpose_SortFunDefa2Fld(
  a: clsFunctionPurposeEN,
  b: clsFunctionPurposeEN,
): number {
  if (a.funcPurposeName == b.funcPurposeName)
    return a.funcPurposeENName.localeCompare(b.funcPurposeENName);
  else return a.funcPurposeName.localeCompare(b.funcPurposeName);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-05-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function FunctionPurpose_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsFunctionPurposeEN.con_FuncPurposeId:
        return (a: clsFunctionPurposeEN, b: clsFunctionPurposeEN) => {
          return a.funcPurposeId.localeCompare(b.funcPurposeId);
        };
      case clsFunctionPurposeEN.con_FuncPurposeName:
        return (a: clsFunctionPurposeEN, b: clsFunctionPurposeEN) => {
          return a.funcPurposeName.localeCompare(b.funcPurposeName);
        };
      case clsFunctionPurposeEN.con_FuncPurposeENName:
        return (a: clsFunctionPurposeEN, b: clsFunctionPurposeEN) => {
          if (a.funcPurposeENName == null) return -1;
          if (b.funcPurposeENName == null) return 1;
          return a.funcPurposeENName.localeCompare(b.funcPurposeENName);
        };
      case clsFunctionPurposeEN.con_Memo:
        return (a: clsFunctionPurposeEN, b: clsFunctionPurposeEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[FunctionPurpose]中不存在!(in ${functionPurpose_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsFunctionPurposeEN.con_FuncPurposeId:
        return (a: clsFunctionPurposeEN, b: clsFunctionPurposeEN) => {
          return b.funcPurposeId.localeCompare(a.funcPurposeId);
        };
      case clsFunctionPurposeEN.con_FuncPurposeName:
        return (a: clsFunctionPurposeEN, b: clsFunctionPurposeEN) => {
          return b.funcPurposeName.localeCompare(a.funcPurposeName);
        };
      case clsFunctionPurposeEN.con_FuncPurposeENName:
        return (a: clsFunctionPurposeEN, b: clsFunctionPurposeEN) => {
          if (b.funcPurposeENName == null) return -1;
          if (a.funcPurposeENName == null) return 1;
          return b.funcPurposeENName.localeCompare(a.funcPurposeENName);
        };
      case clsFunctionPurposeEN.con_Memo:
        return (a: clsFunctionPurposeEN, b: clsFunctionPurposeEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[FunctionPurpose]中不存在!(in ${functionPurpose_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strFuncPurposeId:所给的关键字
 * @returns 对象
 */
export async function FunctionPurpose_GetNameByFuncPurposeIdCache(strFuncPurposeId: string) {
  if (IsNullOrEmpty(strFuncPurposeId) == true) {
    const strMsg = Format(
      '参数:[strFuncPurposeId]不能为空!(In clsFunctionPurposeWApi.GetNameByFuncPurposeIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strFuncPurposeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strFuncPurposeId]的长度:[{0}]不正确!(clsFunctionPurposeWApi.GetNameByFuncPurposeIdCache)',
      strFuncPurposeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrFunctionPurposeObjLstCache = await FunctionPurpose_GetObjLstCache();
  if (arrFunctionPurposeObjLstCache == null) return '';
  try {
    const arrFunctionPurposeSel = arrFunctionPurposeObjLstCache.filter(
      (x) => x.funcPurposeId == strFuncPurposeId,
    );
    let objFunctionPurpose: clsFunctionPurposeEN;
    if (arrFunctionPurposeSel.length > 0) {
      objFunctionPurpose = arrFunctionPurposeSel[0];
      return objFunctionPurpose.funcPurposeName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strFuncPurposeId,
    );
    console.error(strMsg);
    alert(strMsg);
  }
  return '';
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-05-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function FunctionPurpose_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsFunctionPurposeEN.con_FuncPurposeId:
      return (obj: clsFunctionPurposeEN) => {
        return obj.funcPurposeId === value;
      };
    case clsFunctionPurposeEN.con_FuncPurposeName:
      return (obj: clsFunctionPurposeEN) => {
        return obj.funcPurposeName === value;
      };
    case clsFunctionPurposeEN.con_FuncPurposeENName:
      return (obj: clsFunctionPurposeEN) => {
        return obj.funcPurposeENName === value;
      };
    case clsFunctionPurposeEN.con_Memo:
      return (obj: clsFunctionPurposeEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[FunctionPurpose]中不存在!(in ${functionPurpose_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2025-05-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 * @returns 返回一个输出字段值
 */
export async function FunctionPurpose_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsFunctionPurposeEN.con_FuncPurposeId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsFunctionPurposeEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsFunctionPurposeEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strFuncPurposeId = strInValue;
  if (IsNullOrEmpty(strFuncPurposeId) == true) {
    return '';
  }
  const objFunctionPurpose = await FunctionPurpose_GetObjByFuncPurposeIdCache(strFuncPurposeId);
  if (objFunctionPurpose == null) return '';
  if (objFunctionPurpose.GetFldValue(strOutFldName) == null) return '';
  return objFunctionPurpose.GetFldValue(strOutFldName).toString();
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2025-05-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 * @returns 返回一个关键字值列表
 */
export async function FunctionPurpose_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsFunctionPurposeEN.con_FuncPurposeId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrFunctionPurpose = await FunctionPurpose_GetObjLstCache();
  if (arrFunctionPurpose == null) return [];
  let arrFunctionPurposeSel = arrFunctionPurpose;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrFunctionPurposeSel = arrFunctionPurposeSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrFunctionPurposeSel = arrFunctionPurposeSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrFunctionPurposeSel = arrFunctionPurposeSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrFunctionPurposeSel = arrFunctionPurposeSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrFunctionPurposeSel = arrFunctionPurposeSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrFunctionPurposeSel = arrFunctionPurposeSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrFunctionPurposeSel = arrFunctionPurposeSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrFunctionPurposeSel = arrFunctionPurposeSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrFunctionPurposeSel = arrFunctionPurposeSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrFunctionPurposeSel = arrFunctionPurposeSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrFunctionPurposeSel.length == 0) return [];
  return arrFunctionPurposeSel.map((x) => x.funcPurposeId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function FunctionPurpose_GetFldValueAsync(
  strFldName: string,
  strWhereCond: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetFldValueAsync';
  const strAction = 'GetFldValue';
  const strUrl = GetWebApiUrl(functionPurpose_Controller, strAction);

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
        functionPurpose_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        functionPurpose_ConstructorName,
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
export async function FunctionPurpose_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(functionPurpose_Controller, strAction);

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
        functionPurpose_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        functionPurpose_ConstructorName,
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
export async function FunctionPurpose_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(functionPurpose_Controller, strAction);

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
        functionPurpose_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        functionPurpose_ConstructorName,
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
export async function FunctionPurpose_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsFunctionPurposeEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(functionPurpose_Controller, strAction);

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
      const objFunctionPurpose = FunctionPurpose_GetObjFromJsonObj(returnObj);
      return objFunctionPurpose;
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
        functionPurpose_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        functionPurpose_ConstructorName,
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
export async function FunctionPurpose_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsFunctionPurposeEN._CurrTabName;
  if (IsNullOrEmpty(clsFunctionPurposeEN.WhereFormat) == false) {
    strWhereCond = clsFunctionPurposeEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsFunctionPurposeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsFunctionPurposeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrFunctionPurposeExObjLstCache: Array<clsFunctionPurposeEN> = CacheHelper.Get(strKey);
    const arrFunctionPurposeObjLstT = FunctionPurpose_GetObjLstByJSONObjLst(
      arrFunctionPurposeExObjLstCache,
    );
    return arrFunctionPurposeObjLstT;
  }
  try {
    const arrFunctionPurposeExObjLst = await FunctionPurpose_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrFunctionPurposeExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrFunctionPurposeExObjLst.length,
    );
    console.log(strInfo);
    return arrFunctionPurposeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      functionPurpose_ConstructorName,
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
export async function FunctionPurpose_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsFunctionPurposeEN._CurrTabName;
  if (IsNullOrEmpty(clsFunctionPurposeEN.WhereFormat) == false) {
    strWhereCond = clsFunctionPurposeEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsFunctionPurposeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsFunctionPurposeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrFunctionPurposeExObjLstCache: Array<clsFunctionPurposeEN> = JSON.parse(strTempObjLst);
    const arrFunctionPurposeObjLstT = FunctionPurpose_GetObjLstByJSONObjLst(
      arrFunctionPurposeExObjLstCache,
    );
    return arrFunctionPurposeObjLstT;
  }
  try {
    const arrFunctionPurposeExObjLst = await FunctionPurpose_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrFunctionPurposeExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrFunctionPurposeExObjLst.length,
    );
    console.log(strInfo);
    return arrFunctionPurposeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      functionPurpose_ConstructorName,
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
export async function FunctionPurpose_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsFunctionPurposeEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrFunctionPurposeObjLstCache: Array<clsFunctionPurposeEN> = JSON.parse(strTempObjLst);
    return arrFunctionPurposeObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function FunctionPurpose_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsFunctionPurposeEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(functionPurpose_Controller, strAction);

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
          functionPurpose_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = FunctionPurpose_GetObjLstByJSONObjLst(returnObjLst);
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
        functionPurpose_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        functionPurpose_ConstructorName,
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
export async function FunctionPurpose_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsFunctionPurposeEN._CurrTabName;
  if (IsNullOrEmpty(clsFunctionPurposeEN.WhereFormat) == false) {
    strWhereCond = clsFunctionPurposeEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsFunctionPurposeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsFunctionPurposeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrFunctionPurposeExObjLstCache: Array<clsFunctionPurposeEN> = JSON.parse(strTempObjLst);
    const arrFunctionPurposeObjLstT = FunctionPurpose_GetObjLstByJSONObjLst(
      arrFunctionPurposeExObjLstCache,
    );
    return arrFunctionPurposeObjLstT;
  }
  try {
    const arrFunctionPurposeExObjLst = await FunctionPurpose_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrFunctionPurposeExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrFunctionPurposeExObjLst.length,
    );
    console.log(strInfo);
    return arrFunctionPurposeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      functionPurpose_ConstructorName,
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
export async function FunctionPurpose_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsFunctionPurposeEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrFunctionPurposeObjLstCache: Array<clsFunctionPurposeEN> = JSON.parse(strTempObjLst);
    return arrFunctionPurposeObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function FunctionPurpose_GetObjLstCache(): Promise<Array<clsFunctionPurposeEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrFunctionPurposeObjLstCache;
  switch (clsFunctionPurposeEN.CacheModeId) {
    case '04': //sessionStorage
      arrFunctionPurposeObjLstCache = await FunctionPurpose_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrFunctionPurposeObjLstCache = await FunctionPurpose_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrFunctionPurposeObjLstCache = await FunctionPurpose_GetObjLstClientCache();
      break;
    default:
      arrFunctionPurposeObjLstCache = await FunctionPurpose_GetObjLstClientCache();
      break;
  }
  return arrFunctionPurposeObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function FunctionPurpose_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrFunctionPurposeObjLstCache;
  switch (clsFunctionPurposeEN.CacheModeId) {
    case '04': //sessionStorage
      arrFunctionPurposeObjLstCache = await FunctionPurpose_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrFunctionPurposeObjLstCache = await FunctionPurpose_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrFunctionPurposeObjLstCache = null;
      break;
    default:
      arrFunctionPurposeObjLstCache = null;
      break;
  }
  return arrFunctionPurposeObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrFuncPurposeIdCond:条件对象
 * @returns 对象列表子集
 */
export async function FunctionPurpose_GetSubObjLstCache(
  objFunctionPurposeCond: ConditionCollection,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrFunctionPurposeObjLstCache = await FunctionPurpose_GetObjLstCache();
  let arrFunctionPurposeSel = arrFunctionPurposeObjLstCache;
  if (objFunctionPurposeCond.GetConditions().length == 0) return arrFunctionPurposeSel;
  try {
    //console.log(sstrKeys);
    for (const objCondition of objFunctionPurposeCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrFunctionPurposeSel = arrFunctionPurposeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrFunctionPurposeSel = arrFunctionPurposeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrFunctionPurposeSel = arrFunctionPurposeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrFunctionPurposeSel = arrFunctionPurposeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrFunctionPurposeSel = arrFunctionPurposeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrFunctionPurposeSel = arrFunctionPurposeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrFunctionPurposeSel = arrFunctionPurposeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrFunctionPurposeSel = arrFunctionPurposeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrFunctionPurposeSel = arrFunctionPurposeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrFunctionPurposeSel = arrFunctionPurposeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrFunctionPurposeSel = arrFunctionPurposeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrFunctionPurposeSel = arrFunctionPurposeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrFunctionPurposeSel = arrFunctionPurposeSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrFunctionPurposeSel = arrFunctionPurposeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrFunctionPurposeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objFunctionPurposeCond),
      functionPurpose_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsFunctionPurposeEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrFuncPurposeId:关键字列表
 * @returns 对象列表
 **/
export async function FunctionPurpose_GetObjLstByFuncPurposeIdLstAsync(
  arrFuncPurposeId: Array<string>,
): Promise<Array<clsFunctionPurposeEN>> {
  const strThisFuncName = 'GetObjLstByFuncPurposeIdLstAsync';
  const strAction = 'GetObjLstByFuncPurposeIdLst';
  const strUrl = GetWebApiUrl(functionPurpose_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrFuncPurposeId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          functionPurpose_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = FunctionPurpose_GetObjLstByJSONObjLst(returnObjLst);
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
        functionPurpose_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        functionPurpose_ConstructorName,
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
 * @param arrstrFuncPurposeIdLst:关键字列表
 * @returns 对象列表
 */
export async function FunctionPurpose_GetObjLstByFuncPurposeIdLstCache(
  arrFuncPurposeIdLst: Array<string>,
) {
  const strThisFuncName = 'GetObjLstByFuncPurposeIdLstCache';
  try {
    const arrFunctionPurposeObjLstCache = await FunctionPurpose_GetObjLstCache();
    const arrFunctionPurposeSel = arrFunctionPurposeObjLstCache.filter(
      (x) => arrFuncPurposeIdLst.indexOf(x.funcPurposeId) > -1,
    );
    return arrFunctionPurposeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrFuncPurposeIdLst.join(','),
      functionPurpose_ConstructorName,
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
export async function FunctionPurpose_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsFunctionPurposeEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(functionPurpose_Controller, strAction);

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
          functionPurpose_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = FunctionPurpose_GetObjLstByJSONObjLst(returnObjLst);
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
        functionPurpose_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        functionPurpose_ConstructorName,
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
export async function FunctionPurpose_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsFunctionPurposeEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(functionPurpose_Controller, strAction);

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
          functionPurpose_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = FunctionPurpose_GetObjLstByJSONObjLst(returnObjLst);
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
        functionPurpose_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        functionPurpose_ConstructorName,
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
export async function FunctionPurpose_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsFunctionPurposeEN>();
  const arrFunctionPurposeObjLstCache = await FunctionPurpose_GetObjLstCache();
  if (arrFunctionPurposeObjLstCache.length == 0) return arrFunctionPurposeObjLstCache;
  let arrFunctionPurposeSel = arrFunctionPurposeObjLstCache;
  const objFunctionPurposeCond = objPagerPara.conditionCollection;
  if (objFunctionPurposeCond == null) {
    const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return new Array<clsFunctionPurposeEN>();
  }
  //console.log("clsFunctionPurposeWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    for (const objCondition of objFunctionPurposeCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrFunctionPurposeSel = arrFunctionPurposeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrFunctionPurposeSel = arrFunctionPurposeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrFunctionPurposeSel = arrFunctionPurposeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrFunctionPurposeSel = arrFunctionPurposeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrFunctionPurposeSel = arrFunctionPurposeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrFunctionPurposeSel = arrFunctionPurposeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrFunctionPurposeSel = arrFunctionPurposeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrFunctionPurposeSel = arrFunctionPurposeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrFunctionPurposeSel = arrFunctionPurposeSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrFunctionPurposeSel = arrFunctionPurposeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrFunctionPurposeSel = arrFunctionPurposeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrFunctionPurposeSel = arrFunctionPurposeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrFunctionPurposeSel = arrFunctionPurposeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrFunctionPurposeSel = arrFunctionPurposeSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrFunctionPurposeSel = arrFunctionPurposeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrFunctionPurposeSel.length == 0) return arrFunctionPurposeSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrFunctionPurposeSel = arrFunctionPurposeSel.sort(
        FunctionPurpose_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrFunctionPurposeSel = arrFunctionPurposeSel.sort(objPagerPara.sortFun);
    }
    arrFunctionPurposeSel = arrFunctionPurposeSel.slice(intStart, intEnd);
    return arrFunctionPurposeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      functionPurpose_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsFunctionPurposeEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function FunctionPurpose_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsFunctionPurposeEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsFunctionPurposeEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(functionPurpose_Controller, strAction);

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
          functionPurpose_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = FunctionPurpose_GetObjLstByJSONObjLst(returnObjLst);
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
        functionPurpose_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        functionPurpose_ConstructorName,
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
 * @param strFuncPurposeId:关键字
 * @returns 获取删除的结果
 **/
export async function FunctionPurpose_DelRecordAsync(strFuncPurposeId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(functionPurpose_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strFuncPurposeId);

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
        functionPurpose_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        functionPurpose_ConstructorName,
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
 * @param arrFuncPurposeId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function FunctionPurpose_DelFunctionPurposesAsync(
  arrFuncPurposeId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelFunctionPurposesAsync';
  const strAction = 'DelFunctionPurposes';
  const strUrl = GetWebApiUrl(functionPurpose_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrFuncPurposeId, config);
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
        functionPurpose_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        functionPurpose_ConstructorName,
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
export async function FunctionPurpose_DelFunctionPurposesByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelFunctionPurposesByCondAsync';
  const strAction = 'DelFunctionPurposesByCond';
  const strUrl = GetWebApiUrl(functionPurpose_Controller, strAction);

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
        functionPurpose_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        functionPurpose_ConstructorName,
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
 * @param objFunctionPurposeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function FunctionPurpose_AddNewRecordAsync(
  objFunctionPurposeEN: clsFunctionPurposeEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  if (objFunctionPurposeEN.funcPurposeId === null || objFunctionPurposeEN.funcPurposeId === '') {
    const strMsg = '需要的对象的关键字为空,不能添加!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objFunctionPurposeEN);
  const strUrl = GetWebApiUrl(functionPurpose_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objFunctionPurposeEN, config);
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
        functionPurpose_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        functionPurpose_ConstructorName,
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
 * @param objFunctionPurposeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function FunctionPurpose_AddNewRecordWithMaxIdAsync(
  objFunctionPurposeEN: clsFunctionPurposeEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(functionPurpose_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objFunctionPurposeEN, config);
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
        functionPurpose_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        functionPurpose_ConstructorName,
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
export async function FunctionPurpose_AddNewObjSave(
  objFunctionPurposeEN: clsFunctionPurposeEN,
): Promise<AddRecordResult> {
  const strThisFuncName = 'AddNewObjSave';
  try {
    FunctionPurpose_CheckPropertyNew(objFunctionPurposeEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${functionPurpose_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    alert(strMsg);
    return { keyword: '', success: false }; //一定要有一个返回值,否则会出错!
  }
  try {
    //检查唯一性条件
    let returnBool = false;
    const bolIsExist = await FunctionPurpose_IsExistAsync(objFunctionPurposeEN.funcPurposeId);
    if (bolIsExist == true) {
      const strMsg = Format('添加记录时,关键字：{0}已经存在!', objFunctionPurposeEN.funcPurposeId);
      console.error(strMsg);
      throw strMsg;
    }
    returnBool = await FunctionPurpose_AddNewRecordAsync(objFunctionPurposeEN);
    if (returnBool == true) {
      FunctionPurpose_ReFreshCache();
    } else {
      const strInfo = `添加[函数用途(FunctionPurpose)]记录不成功!`;
      //显示信息框
      throw strInfo;
    }
    return { keyword: objFunctionPurposeEN.funcPurposeId, success: returnBool }; //一定要有一个返回值,否则会出错!
  } catch (e) {
    const strMsg = `添加记录不成功,${e}.(in ${functionPurpose_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/** 修改记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjSave)
 **/
export async function FunctionPurpose_UpdateObjSave(
  objFunctionPurposeEN: clsFunctionPurposeEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateObjSave';
  objFunctionPurposeEN.sfUpdFldSetStr = objFunctionPurposeEN.updFldString; //设置哪些字段被修改(脏字段)
  if (objFunctionPurposeEN.funcPurposeId == '' || objFunctionPurposeEN.funcPurposeId == undefined) {
    console.error('关键字不能为空!');
    throw '关键字不能为空!';
  }
  try {
    FunctionPurpose_CheckProperty4Update(objFunctionPurposeEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${functionPurpose_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
  try {
    //检查唯一性条件
    const returnBool = await FunctionPurpose_UpdateRecordAsync(objFunctionPurposeEN);
    if (returnBool == true) {
      FunctionPurpose_ReFreshCache();
    }
    return returnBool;
  } catch (e) {
    const strMsg = `修改记录不成功,${e}.(in ${functionPurpose_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objFunctionPurposeEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function FunctionPurpose_AddNewRecordWithReturnKeyAsync(
  objFunctionPurposeEN: clsFunctionPurposeEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(functionPurpose_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objFunctionPurposeEN, config);
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
        functionPurpose_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        functionPurpose_ConstructorName,
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
 * @param objFunctionPurposeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function FunctionPurpose_UpdateRecordAsync(
  objFunctionPurposeEN: clsFunctionPurposeEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objFunctionPurposeEN.sfUpdFldSetStr === undefined ||
    objFunctionPurposeEN.sfUpdFldSetStr === null ||
    objFunctionPurposeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objFunctionPurposeEN.funcPurposeId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(functionPurpose_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objFunctionPurposeEN, config);
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
        functionPurpose_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        functionPurpose_ConstructorName,
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
 * @param objFunctionPurposeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function FunctionPurpose_EditRecordExAsync(
  objFunctionPurposeEN: clsFunctionPurposeEN,
): Promise<boolean> {
  const strThisFuncName = 'EditRecordExAsync';
  const strAction = 'EditRecordEx';
  if (
    objFunctionPurposeEN.sfUpdFldSetStr === undefined ||
    objFunctionPurposeEN.sfUpdFldSetStr === null ||
    objFunctionPurposeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objFunctionPurposeEN.funcPurposeId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(functionPurpose_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objFunctionPurposeEN, config);
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
        functionPurpose_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        functionPurpose_ConstructorName,
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
 * @param objFunctionPurposeEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function FunctionPurpose_UpdateWithConditionAsync(
  objFunctionPurposeEN: clsFunctionPurposeEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objFunctionPurposeEN.sfUpdFldSetStr === undefined ||
    objFunctionPurposeEN.sfUpdFldSetStr === null ||
    objFunctionPurposeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objFunctionPurposeEN.funcPurposeId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(functionPurpose_Controller, strAction);
  objFunctionPurposeEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objFunctionPurposeEN, config);
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
        functionPurpose_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        functionPurpose_ConstructorName,
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
 * @param objstrFuncPurposeIdCond:条件对象
 * @returns 对象列表子集
 */
export async function FunctionPurpose_IsExistRecordCache(
  objFunctionPurposeCond: ConditionCollection,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrFunctionPurposeObjLstCache = await FunctionPurpose_GetObjLstCache();
  if (arrFunctionPurposeObjLstCache == null) return false;
  let arrFunctionPurposeSel = arrFunctionPurposeObjLstCache;
  if (objFunctionPurposeCond.GetConditions().length == 0)
    return arrFunctionPurposeSel.length > 0 ? true : false;
  try {
    for (const objCondition of objFunctionPurposeCond.GetConditions()) {
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
            arrFunctionPurposeSel = arrFunctionPurposeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrFunctionPurposeSel = arrFunctionPurposeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrFunctionPurposeSel = arrFunctionPurposeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrFunctionPurposeSel = arrFunctionPurposeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrFunctionPurposeSel = arrFunctionPurposeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrFunctionPurposeSel = arrFunctionPurposeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrFunctionPurposeSel = arrFunctionPurposeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrFunctionPurposeSel = arrFunctionPurposeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrFunctionPurposeSel = arrFunctionPurposeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrFunctionPurposeSel = arrFunctionPurposeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrFunctionPurposeSel = arrFunctionPurposeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrFunctionPurposeSel = arrFunctionPurposeSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrFunctionPurposeSel = arrFunctionPurposeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrFunctionPurposeSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objFunctionPurposeCond),
      functionPurpose_ConstructorName,
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
export async function FunctionPurpose_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(functionPurpose_Controller, strAction);

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
        functionPurpose_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        functionPurpose_ConstructorName,
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
 * @param strFuncPurposeId:所给的关键字
 * @returns 对象
 */
export async function FunctionPurpose_IsExistCache(strFuncPurposeId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrFunctionPurposeObjLstCache = await FunctionPurpose_GetObjLstCache();
  if (arrFunctionPurposeObjLstCache == null) return false;
  try {
    const arrFunctionPurposeSel = arrFunctionPurposeObjLstCache.filter(
      (x) => x.funcPurposeId == strFuncPurposeId,
    );
    if (arrFunctionPurposeSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strFuncPurposeId,
      functionPurpose_ConstructorName,
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
 * @param strFuncPurposeId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function FunctionPurpose_IsExistAsync(strFuncPurposeId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(functionPurpose_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strFuncPurposeId,
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
        functionPurpose_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        functionPurpose_ConstructorName,
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
export async function FunctionPurpose_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(functionPurpose_Controller, strAction);

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
        functionPurpose_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        functionPurpose_ConstructorName,
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
 * @param objFunctionPurposeCond:条件对象
 * @returns 对象列表记录数
 */
export async function FunctionPurpose_GetRecCountByCondCache(
  objFunctionPurposeCond: ConditionCollection,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrFunctionPurposeObjLstCache = await FunctionPurpose_GetObjLstCache();
  if (arrFunctionPurposeObjLstCache == null) return 0;
  let arrFunctionPurposeSel = arrFunctionPurposeObjLstCache;
  if (objFunctionPurposeCond.GetConditions().length == 0) return arrFunctionPurposeSel.length;
  try {
    for (const objCondition of objFunctionPurposeCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrFunctionPurposeSel = arrFunctionPurposeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrFunctionPurposeSel = arrFunctionPurposeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrFunctionPurposeSel = arrFunctionPurposeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrFunctionPurposeSel = arrFunctionPurposeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrFunctionPurposeSel = arrFunctionPurposeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrFunctionPurposeSel = arrFunctionPurposeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrFunctionPurposeSel = arrFunctionPurposeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrFunctionPurposeSel = arrFunctionPurposeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrFunctionPurposeSel = arrFunctionPurposeSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrFunctionPurposeSel = arrFunctionPurposeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrFunctionPurposeSel = arrFunctionPurposeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrFunctionPurposeSel = arrFunctionPurposeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrFunctionPurposeSel = arrFunctionPurposeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrFunctionPurposeSel = arrFunctionPurposeSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrFunctionPurposeSel = arrFunctionPurposeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrFunctionPurposeSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objFunctionPurposeCond),
      functionPurpose_ConstructorName,
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
export async function FunctionPurpose_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(functionPurpose_Controller, strAction);

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
        functionPurpose_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        functionPurpose_ConstructorName,
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
export function FunctionPurpose_GetWebApiUrl(strController: string, strAction: string): string {
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
export function FunctionPurpose_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功!');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clsFunctionPurposeEN._CurrTabName;
  switch (clsFunctionPurposeEN.CacheModeId) {
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
  clsFunctionPurposeEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
}

/**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export function FunctionPurpose_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsFunctionPurposeEN._CurrTabName;
    switch (clsFunctionPurposeEN.CacheModeId) {
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
    clsFunctionPurposeEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export function FunctionPurpose_GetLastRefreshTime(): string {
  if (clsFunctionPurposeEN._RefreshTimeLst.length == 0) return '';
  return clsFunctionPurposeEN._RefreshTimeLst[clsFunctionPurposeEN._RefreshTimeLst.length - 1];
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export async function FunctionPurpose_BindDdl_FuncPurposeIdInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
) {
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_FuncPurposeIdInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_FuncPurposeIdInDivCache");
  let arrObjLstSel = await FunctionPurpose_GetObjLstCache();
  if (arrObjLstSel == null) return;
  arrObjLstSel = arrObjLstSel.sort((x, y) => x.funcPurposeName.localeCompare(y.funcPurposeName));
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsFunctionPurposeEN.con_FuncPurposeId,
    clsFunctionPurposeEN.con_FuncPurposeName,
    '函数用途...',
  );
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export async function FunctionPurpose_GetArrFunctionPurpose() {
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_FuncPurposeIdInDivCache");
  const arrFunctionPurpose = new Array<clsFunctionPurposeEN>();
  let arrObjLstSel = await FunctionPurpose_GetObjLstCache();
  if (arrObjLstSel == null) return null;
  arrObjLstSel = arrObjLstSel.sort((x, y) => {
    return x.funcPurposeName.localeCompare(y.funcPurposeName);
  });
  const obj0 = new clsFunctionPurposeEN();
  obj0.funcPurposeId = '0';
  obj0.funcPurposeName = '选函数用途...';
  arrFunctionPurpose.push(obj0);
  arrObjLstSel.forEach((x) => arrFunctionPurpose.push(x));
  return arrFunctionPurpose;
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function FunctionPurpose_CheckPropertyNew(pobjFunctionPurposeEN: clsFunctionPurposeEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjFunctionPurposeEN.funcPurposeName) === true) {
    throw new Error(
      `(errid:Watl000411)字段[函数用途名]不能为空(In 函数用途)!(clsFunctionPurposeBL:CheckPropertyNew0)`,
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjFunctionPurposeEN.funcPurposeId) == false &&
    GetStrLen(pobjFunctionPurposeEN.funcPurposeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000413)字段[函数用途Id(funcPurposeId)]的长度不能超过2(In 函数用途(FunctionPurpose))!值:${pobjFunctionPurposeEN.funcPurposeId}(clsFunctionPurposeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunctionPurposeEN.funcPurposeName) == false &&
    GetStrLen(pobjFunctionPurposeEN.funcPurposeName) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[函数用途名(funcPurposeName)]的长度不能超过20(In 函数用途(FunctionPurpose))!值:${pobjFunctionPurposeEN.funcPurposeName}(clsFunctionPurposeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunctionPurposeEN.funcPurposeENName) == false &&
    GetStrLen(pobjFunctionPurposeEN.funcPurposeENName) > 50
  ) {
    throw new Error(
      `(errid:Watl000413)字段[函数用途英文名(funcPurposeENName)]的长度不能超过50(In 函数用途(FunctionPurpose))!值:${pobjFunctionPurposeEN.funcPurposeENName}(clsFunctionPurposeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunctionPurposeEN.memo) == false &&
    GetStrLen(pobjFunctionPurposeEN.memo) > 1000
  ) {
    throw new Error(
      `(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In 函数用途(FunctionPurpose))!值:${pobjFunctionPurposeEN.memo}(clsFunctionPurposeBL:CheckPropertyNew)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjFunctionPurposeEN.funcPurposeId) == false &&
    undefined !== pobjFunctionPurposeEN.funcPurposeId &&
    tzDataType.isString(pobjFunctionPurposeEN.funcPurposeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[函数用途Id(funcPurposeId)]的值:[${pobjFunctionPurposeEN.funcPurposeId}], 非法,应该为字符型(In 函数用途(FunctionPurpose))!(clsFunctionPurposeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunctionPurposeEN.funcPurposeName) == false &&
    undefined !== pobjFunctionPurposeEN.funcPurposeName &&
    tzDataType.isString(pobjFunctionPurposeEN.funcPurposeName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[函数用途名(funcPurposeName)]的值:[${pobjFunctionPurposeEN.funcPurposeName}], 非法,应该为字符型(In 函数用途(FunctionPurpose))!(clsFunctionPurposeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunctionPurposeEN.funcPurposeENName) == false &&
    undefined !== pobjFunctionPurposeEN.funcPurposeENName &&
    tzDataType.isString(pobjFunctionPurposeEN.funcPurposeENName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[函数用途英文名(funcPurposeENName)]的值:[${pobjFunctionPurposeEN.funcPurposeENName}], 非法,应该为字符型(In 函数用途(FunctionPurpose))!(clsFunctionPurposeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunctionPurposeEN.memo) == false &&
    undefined !== pobjFunctionPurposeEN.memo &&
    tzDataType.isString(pobjFunctionPurposeEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[说明(memo)]的值:[${pobjFunctionPurposeEN.memo}], 非法,应该为字符型(In 函数用途(FunctionPurpose))!(clsFunctionPurposeBL:CheckPropertyNew0)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function FunctionPurpose_CheckProperty4Update(pobjFunctionPurposeEN: clsFunctionPurposeEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjFunctionPurposeEN.funcPurposeId) == false &&
    GetStrLen(pobjFunctionPurposeEN.funcPurposeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000416)字段[函数用途Id(funcPurposeId)]的长度不能超过2(In 函数用途(FunctionPurpose))!值:${pobjFunctionPurposeEN.funcPurposeId}(clsFunctionPurposeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunctionPurposeEN.funcPurposeName) == false &&
    GetStrLen(pobjFunctionPurposeEN.funcPurposeName) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[函数用途名(funcPurposeName)]的长度不能超过20(In 函数用途(FunctionPurpose))!值:${pobjFunctionPurposeEN.funcPurposeName}(clsFunctionPurposeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunctionPurposeEN.funcPurposeENName) == false &&
    GetStrLen(pobjFunctionPurposeEN.funcPurposeENName) > 50
  ) {
    throw new Error(
      `(errid:Watl000416)字段[函数用途英文名(funcPurposeENName)]的长度不能超过50(In 函数用途(FunctionPurpose))!值:${pobjFunctionPurposeEN.funcPurposeENName}(clsFunctionPurposeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunctionPurposeEN.memo) == false &&
    GetStrLen(pobjFunctionPurposeEN.memo) > 1000
  ) {
    throw new Error(
      `(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In 函数用途(FunctionPurpose))!值:${pobjFunctionPurposeEN.memo}(clsFunctionPurposeBL:CheckProperty4Update)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjFunctionPurposeEN.funcPurposeId) == false &&
    undefined !== pobjFunctionPurposeEN.funcPurposeId &&
    tzDataType.isString(pobjFunctionPurposeEN.funcPurposeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[函数用途Id(funcPurposeId)]的值:[${pobjFunctionPurposeEN.funcPurposeId}], 非法,应该为字符型(In 函数用途(FunctionPurpose))!(clsFunctionPurposeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunctionPurposeEN.funcPurposeName) == false &&
    undefined !== pobjFunctionPurposeEN.funcPurposeName &&
    tzDataType.isString(pobjFunctionPurposeEN.funcPurposeName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[函数用途名(funcPurposeName)]的值:[${pobjFunctionPurposeEN.funcPurposeName}], 非法,应该为字符型(In 函数用途(FunctionPurpose))!(clsFunctionPurposeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunctionPurposeEN.funcPurposeENName) == false &&
    undefined !== pobjFunctionPurposeEN.funcPurposeENName &&
    tzDataType.isString(pobjFunctionPurposeEN.funcPurposeENName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[函数用途英文名(funcPurposeENName)]的值:[${pobjFunctionPurposeEN.funcPurposeENName}], 非法,应该为字符型(In 函数用途(FunctionPurpose))!(clsFunctionPurposeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunctionPurposeEN.memo) == false &&
    undefined !== pobjFunctionPurposeEN.memo &&
    tzDataType.isString(pobjFunctionPurposeEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[说明(memo)]的值:[${pobjFunctionPurposeEN.memo}], 非法,应该为字符型(In 函数用途(FunctionPurpose))!(clsFunctionPurposeBL:CheckProperty4Update)`,
    );
  }
  //检查主键是否为Null或者空!
  if (
    IsNullOrEmpty(pobjFunctionPurposeEN.funcPurposeId) === true ||
    pobjFunctionPurposeEN.funcPurposeId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000064)字段[函数用途Id]不能为空(In 函数用途)!(clsFunctionPurposeBL:CheckProperty4Update)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2025-05-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function FunctionPurpose_GetJSONStrByObj(
  pobjFunctionPurposeEN: clsFunctionPurposeEN,
): string {
  pobjFunctionPurposeEN.sfUpdFldSetStr = pobjFunctionPurposeEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjFunctionPurposeEN);
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
 * 日期:2025-05-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
 */
export function FunctionPurpose_GetObjLstByJSONStr(strJSON: string): Array<clsFunctionPurposeEN> {
  let arrFunctionPurposeObjLst = new Array<clsFunctionPurposeEN>();
  if (strJSON === '') {
    return arrFunctionPurposeObjLst;
  }
  try {
    arrFunctionPurposeObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrFunctionPurposeObjLst;
  }
  return arrFunctionPurposeObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-05-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrFunctionPurposeObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function FunctionPurpose_GetObjLstByJSONObjLst(
  arrFunctionPurposeObjLstS: Array<clsFunctionPurposeEN>,
): Array<clsFunctionPurposeEN> {
  const arrFunctionPurposeObjLst = new Array<clsFunctionPurposeEN>();
  for (const objInFor of arrFunctionPurposeObjLstS) {
    const obj1 = FunctionPurpose_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrFunctionPurposeObjLst.push(obj1);
  }
  return arrFunctionPurposeObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-05-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function FunctionPurpose_GetObjByJSONStr(strJSON: string): clsFunctionPurposeEN {
  let pobjFunctionPurposeEN = new clsFunctionPurposeEN();
  if (strJSON === '') {
    return pobjFunctionPurposeEN;
  }
  try {
    pobjFunctionPurposeEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjFunctionPurposeEN;
  }
  return pobjFunctionPurposeEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function FunctionPurpose_GetCombineCondition(
  objFunctionPurposeCond: clsFunctionPurposeEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objFunctionPurposeCond.dicFldComparisonOp,
      clsFunctionPurposeEN.con_FuncPurposeId,
    ) == true
  ) {
    const strComparisonOpFuncPurposeId: string =
      objFunctionPurposeCond.dicFldComparisonOp[clsFunctionPurposeEN.con_FuncPurposeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFunctionPurposeEN.con_FuncPurposeId,
      objFunctionPurposeCond.funcPurposeId,
      strComparisonOpFuncPurposeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFunctionPurposeCond.dicFldComparisonOp,
      clsFunctionPurposeEN.con_FuncPurposeName,
    ) == true
  ) {
    const strComparisonOpFuncPurposeName: string =
      objFunctionPurposeCond.dicFldComparisonOp[clsFunctionPurposeEN.con_FuncPurposeName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFunctionPurposeEN.con_FuncPurposeName,
      objFunctionPurposeCond.funcPurposeName,
      strComparisonOpFuncPurposeName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFunctionPurposeCond.dicFldComparisonOp,
      clsFunctionPurposeEN.con_FuncPurposeENName,
    ) == true
  ) {
    const strComparisonOpFuncPurposeENName: string =
      objFunctionPurposeCond.dicFldComparisonOp[clsFunctionPurposeEN.con_FuncPurposeENName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFunctionPurposeEN.con_FuncPurposeENName,
      objFunctionPurposeCond.funcPurposeENName,
      strComparisonOpFuncPurposeENName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFunctionPurposeCond.dicFldComparisonOp,
      clsFunctionPurposeEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objFunctionPurposeCond.dicFldComparisonOp[clsFunctionPurposeEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFunctionPurposeEN.con_Memo,
      objFunctionPurposeCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objFunctionPurposeENS:源对象
 * @param objFunctionPurposeENT:目标对象
 */
export function FunctionPurpose_GetObjFromJsonObj(
  objFunctionPurposeENS: clsFunctionPurposeEN,
): clsFunctionPurposeEN {
  const objFunctionPurposeENT: clsFunctionPurposeEN = new clsFunctionPurposeEN();
  ObjectAssign(objFunctionPurposeENT, objFunctionPurposeENS);
  return objFunctionPurposeENT;
}
