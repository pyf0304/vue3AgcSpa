/**
 * 类名:clsFunctionTypeWApi
 * 表名:FunctionType(00050063)
 * 版本:2025.05.08.1(服务器:WIN-SRV103-116)
 * 日期:2025/05/10 19:26:41
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
 * 函数类型(FunctionType)
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
import { clsFunctionTypeEN } from '@/ts/L0Entity/PrjFunction/clsFunctionTypeEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';

export const functionType_Controller = 'FunctionTypeApi';
export const functionType_ConstructorName = 'functionType';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strFuncTypeId:关键字
 * @returns 对象
 **/
export async function FunctionType_GetObjByFuncTypeIdAsync(
  strFuncTypeId: string,
): Promise<clsFunctionTypeEN | null> {
  const strThisFuncName = 'GetObjByFuncTypeIdAsync';

  if (IsNullOrEmpty(strFuncTypeId) == true) {
    const strMsg = Format(
      '参数:[strFuncTypeId]不能为空!(In clsFunctionTypeWApi.GetObjByFuncTypeIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strFuncTypeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strFuncTypeId]的长度:[{0}]不正确!(clsFunctionTypeWApi.GetObjByFuncTypeIdAsync)',
      strFuncTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByFuncTypeId';
  const strUrl = GetWebApiUrl(functionType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strFuncTypeId,
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
      const objFunctionType = FunctionType_GetObjFromJsonObj(returnObj);
      return objFunctionType;
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
        functionType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        functionType_ConstructorName,
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
 * @param strFuncTypeId:所给的关键字
 * @returns 对象
 */
export async function FunctionType_GetObjByFuncTypeIdlocalStorage(strFuncTypeId: string) {
  const strThisFuncName = 'GetObjByFuncTypeIdlocalStorage';

  if (IsNullOrEmpty(strFuncTypeId) == true) {
    const strMsg = Format(
      '参数:[strFuncTypeId]不能为空!(In clsFunctionTypeWApi.GetObjByFuncTypeIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strFuncTypeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strFuncTypeId]的长度:[{0}]不正确!(clsFunctionTypeWApi.GetObjByFuncTypeIdlocalStorage)',
      strFuncTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsFunctionTypeEN._CurrTabName, strFuncTypeId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objFunctionTypeCache: clsFunctionTypeEN = JSON.parse(strTempObj);
    return objFunctionTypeCache;
  }
  try {
    const objFunctionType = await FunctionType_GetObjByFuncTypeIdAsync(strFuncTypeId);
    if (objFunctionType != null) {
      localStorage.setItem(strKey, JSON.stringify(objFunctionType));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objFunctionType;
    }
    return objFunctionType;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strFuncTypeId,
      functionType_ConstructorName,
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
 * @param strFuncTypeId:所给的关键字
 * @returns 对象
 */
export async function FunctionType_GetObjByFuncTypeIdCache(
  strFuncTypeId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByFuncTypeIdCache';

  if (IsNullOrEmpty(strFuncTypeId) == true) {
    const strMsg = Format(
      '参数:[strFuncTypeId]不能为空!(In clsFunctionTypeWApi.GetObjByFuncTypeIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strFuncTypeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strFuncTypeId]的长度:[{0}]不正确!(clsFunctionTypeWApi.GetObjByFuncTypeIdCache)',
      strFuncTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrFunctionTypeObjLstCache = await FunctionType_GetObjLstCache();
  try {
    const arrFunctionTypeSel = arrFunctionTypeObjLstCache.filter(
      (x) => x.funcTypeId == strFuncTypeId,
    );
    let objFunctionType: clsFunctionTypeEN;
    if (arrFunctionTypeSel.length > 0) {
      objFunctionType = arrFunctionTypeSel[0];
      return objFunctionType;
    } else {
      if (bolTryAsyncOnce == true) {
        const objFunctionTypeConst = await FunctionType_GetObjByFuncTypeIdAsync(strFuncTypeId);
        if (objFunctionTypeConst != null) {
          FunctionType_ReFreshThisCache();
          return objFunctionTypeConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strFuncTypeId,
      functionType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objFunctionType:所给的对象
 * @returns 对象
 */
export async function FunctionType_UpdateObjInLstCache(objFunctionType: clsFunctionTypeEN) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrFunctionTypeObjLstCache = await FunctionType_GetObjLstCache();
    const obj = arrFunctionTypeObjLstCache.find(
      (x) => x.funcTypeName == objFunctionType.funcTypeName,
    );
    if (obj != null) {
      objFunctionType.funcTypeId = obj.funcTypeId;
      ObjectAssign(obj, objFunctionType);
    } else {
      arrFunctionTypeObjLstCache.push(objFunctionType);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      functionType_ConstructorName,
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
export function FunctionType_SortFunDefa(a: clsFunctionTypeEN, b: clsFunctionTypeEN): number {
  return a.funcTypeId.localeCompare(b.funcTypeId);
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
export function FunctionType_SortFunDefa2Fld(a: clsFunctionTypeEN, b: clsFunctionTypeEN): number {
  if (a.funcTypeName == b.funcTypeName) return a.funcTypeENName.localeCompare(b.funcTypeENName);
  else return a.funcTypeName.localeCompare(b.funcTypeName);
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
export function FunctionType_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsFunctionTypeEN.con_FuncTypeId:
        return (a: clsFunctionTypeEN, b: clsFunctionTypeEN) => {
          return a.funcTypeId.localeCompare(b.funcTypeId);
        };
      case clsFunctionTypeEN.con_FuncTypeName:
        return (a: clsFunctionTypeEN, b: clsFunctionTypeEN) => {
          return a.funcTypeName.localeCompare(b.funcTypeName);
        };
      case clsFunctionTypeEN.con_FuncTypeENName:
        return (a: clsFunctionTypeEN, b: clsFunctionTypeEN) => {
          if (a.funcTypeENName == null) return -1;
          if (b.funcTypeENName == null) return 1;
          return a.funcTypeENName.localeCompare(b.funcTypeENName);
        };
      case clsFunctionTypeEN.con_CodeTypeId:
        return (a: clsFunctionTypeEN, b: clsFunctionTypeEN) => {
          if (a.codeTypeId == null) return -1;
          if (b.codeTypeId == null) return 1;
          return a.codeTypeId.localeCompare(b.codeTypeId);
        };
      case clsFunctionTypeEN.con_Memo:
        return (a: clsFunctionTypeEN, b: clsFunctionTypeEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[FunctionType]中不存在!(in ${functionType_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsFunctionTypeEN.con_FuncTypeId:
        return (a: clsFunctionTypeEN, b: clsFunctionTypeEN) => {
          return b.funcTypeId.localeCompare(a.funcTypeId);
        };
      case clsFunctionTypeEN.con_FuncTypeName:
        return (a: clsFunctionTypeEN, b: clsFunctionTypeEN) => {
          return b.funcTypeName.localeCompare(a.funcTypeName);
        };
      case clsFunctionTypeEN.con_FuncTypeENName:
        return (a: clsFunctionTypeEN, b: clsFunctionTypeEN) => {
          if (b.funcTypeENName == null) return -1;
          if (a.funcTypeENName == null) return 1;
          return b.funcTypeENName.localeCompare(a.funcTypeENName);
        };
      case clsFunctionTypeEN.con_CodeTypeId:
        return (a: clsFunctionTypeEN, b: clsFunctionTypeEN) => {
          if (b.codeTypeId == null) return -1;
          if (a.codeTypeId == null) return 1;
          return b.codeTypeId.localeCompare(a.codeTypeId);
        };
      case clsFunctionTypeEN.con_Memo:
        return (a: clsFunctionTypeEN, b: clsFunctionTypeEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[FunctionType]中不存在!(in ${functionType_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strFuncTypeId:所给的关键字
 * @returns 对象
 */
export async function FunctionType_GetNameByFuncTypeIdCache(strFuncTypeId: string) {
  if (IsNullOrEmpty(strFuncTypeId) == true) {
    const strMsg = Format(
      '参数:[strFuncTypeId]不能为空!(In clsFunctionTypeWApi.GetNameByFuncTypeIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strFuncTypeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strFuncTypeId]的长度:[{0}]不正确!(clsFunctionTypeWApi.GetNameByFuncTypeIdCache)',
      strFuncTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrFunctionTypeObjLstCache = await FunctionType_GetObjLstCache();
  if (arrFunctionTypeObjLstCache == null) return '';
  try {
    const arrFunctionTypeSel = arrFunctionTypeObjLstCache.filter(
      (x) => x.funcTypeId == strFuncTypeId,
    );
    let objFunctionType: clsFunctionTypeEN;
    if (arrFunctionTypeSel.length > 0) {
      objFunctionType = arrFunctionTypeSel[0];
      return objFunctionType.funcTypeName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strFuncTypeId,
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
export async function FunctionType_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsFunctionTypeEN.con_FuncTypeId:
      return (obj: clsFunctionTypeEN) => {
        return obj.funcTypeId === value;
      };
    case clsFunctionTypeEN.con_FuncTypeName:
      return (obj: clsFunctionTypeEN) => {
        return obj.funcTypeName === value;
      };
    case clsFunctionTypeEN.con_FuncTypeENName:
      return (obj: clsFunctionTypeEN) => {
        return obj.funcTypeENName === value;
      };
    case clsFunctionTypeEN.con_CodeTypeId:
      return (obj: clsFunctionTypeEN) => {
        return obj.codeTypeId === value;
      };
    case clsFunctionTypeEN.con_Memo:
      return (obj: clsFunctionTypeEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[FunctionType]中不存在!(in ${functionType_ConstructorName}.${strThisFuncName})`;
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
export async function FunctionType_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsFunctionTypeEN.con_FuncTypeId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsFunctionTypeEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsFunctionTypeEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strFuncTypeId = strInValue;
  if (IsNullOrEmpty(strFuncTypeId) == true) {
    return '';
  }
  const objFunctionType = await FunctionType_GetObjByFuncTypeIdCache(strFuncTypeId);
  if (objFunctionType == null) return '';
  if (objFunctionType.GetFldValue(strOutFldName) == null) return '';
  return objFunctionType.GetFldValue(strOutFldName).toString();
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
export async function FunctionType_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsFunctionTypeEN.con_FuncTypeId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrFunctionType = await FunctionType_GetObjLstCache();
  if (arrFunctionType == null) return [];
  let arrFunctionTypeSel = arrFunctionType;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrFunctionTypeSel = arrFunctionTypeSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrFunctionTypeSel = arrFunctionTypeSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrFunctionTypeSel = arrFunctionTypeSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrFunctionTypeSel = arrFunctionTypeSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrFunctionTypeSel = arrFunctionTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrFunctionTypeSel = arrFunctionTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrFunctionTypeSel = arrFunctionTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrFunctionTypeSel = arrFunctionTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrFunctionTypeSel = arrFunctionTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrFunctionTypeSel = arrFunctionTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrFunctionTypeSel.length == 0) return [];
  return arrFunctionTypeSel.map((x) => x.funcTypeId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function FunctionType_GetFldValueAsync(
  strFldName: string,
  strWhereCond: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetFldValueAsync';
  const strAction = 'GetFldValue';
  const strUrl = GetWebApiUrl(functionType_Controller, strAction);

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
        functionType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        functionType_ConstructorName,
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
export async function FunctionType_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(functionType_Controller, strAction);

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
        functionType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        functionType_ConstructorName,
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
export async function FunctionType_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(functionType_Controller, strAction);

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
        functionType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        functionType_ConstructorName,
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
export async function FunctionType_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsFunctionTypeEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(functionType_Controller, strAction);

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
      const objFunctionType = FunctionType_GetObjFromJsonObj(returnObj);
      return objFunctionType;
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
        functionType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        functionType_ConstructorName,
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
export async function FunctionType_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsFunctionTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsFunctionTypeEN.WhereFormat) == false) {
    strWhereCond = clsFunctionTypeEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsFunctionTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsFunctionTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrFunctionTypeExObjLstCache: Array<clsFunctionTypeEN> = CacheHelper.Get(strKey);
    const arrFunctionTypeObjLstT = FunctionType_GetObjLstByJSONObjLst(arrFunctionTypeExObjLstCache);
    return arrFunctionTypeObjLstT;
  }
  try {
    const arrFunctionTypeExObjLst = await FunctionType_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrFunctionTypeExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrFunctionTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrFunctionTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      functionType_ConstructorName,
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
export async function FunctionType_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsFunctionTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsFunctionTypeEN.WhereFormat) == false) {
    strWhereCond = clsFunctionTypeEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsFunctionTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsFunctionTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrFunctionTypeExObjLstCache: Array<clsFunctionTypeEN> = JSON.parse(strTempObjLst);
    const arrFunctionTypeObjLstT = FunctionType_GetObjLstByJSONObjLst(arrFunctionTypeExObjLstCache);
    return arrFunctionTypeObjLstT;
  }
  try {
    const arrFunctionTypeExObjLst = await FunctionType_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrFunctionTypeExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrFunctionTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrFunctionTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      functionType_ConstructorName,
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
export async function FunctionType_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsFunctionTypeEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrFunctionTypeObjLstCache: Array<clsFunctionTypeEN> = JSON.parse(strTempObjLst);
    return arrFunctionTypeObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function FunctionType_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsFunctionTypeEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(functionType_Controller, strAction);

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
          functionType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = FunctionType_GetObjLstByJSONObjLst(returnObjLst);
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
        functionType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        functionType_ConstructorName,
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
export async function FunctionType_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsFunctionTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsFunctionTypeEN.WhereFormat) == false) {
    strWhereCond = clsFunctionTypeEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsFunctionTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsFunctionTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrFunctionTypeExObjLstCache: Array<clsFunctionTypeEN> = JSON.parse(strTempObjLst);
    const arrFunctionTypeObjLstT = FunctionType_GetObjLstByJSONObjLst(arrFunctionTypeExObjLstCache);
    return arrFunctionTypeObjLstT;
  }
  try {
    const arrFunctionTypeExObjLst = await FunctionType_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrFunctionTypeExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrFunctionTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrFunctionTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      functionType_ConstructorName,
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
export async function FunctionType_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsFunctionTypeEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrFunctionTypeObjLstCache: Array<clsFunctionTypeEN> = JSON.parse(strTempObjLst);
    return arrFunctionTypeObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function FunctionType_GetObjLstCache(): Promise<Array<clsFunctionTypeEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrFunctionTypeObjLstCache;
  switch (clsFunctionTypeEN.CacheModeId) {
    case '04': //sessionStorage
      arrFunctionTypeObjLstCache = await FunctionType_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrFunctionTypeObjLstCache = await FunctionType_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrFunctionTypeObjLstCache = await FunctionType_GetObjLstClientCache();
      break;
    default:
      arrFunctionTypeObjLstCache = await FunctionType_GetObjLstClientCache();
      break;
  }
  return arrFunctionTypeObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function FunctionType_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrFunctionTypeObjLstCache;
  switch (clsFunctionTypeEN.CacheModeId) {
    case '04': //sessionStorage
      arrFunctionTypeObjLstCache = await FunctionType_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrFunctionTypeObjLstCache = await FunctionType_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrFunctionTypeObjLstCache = null;
      break;
    default:
      arrFunctionTypeObjLstCache = null;
      break;
  }
  return arrFunctionTypeObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrFuncTypeIdCond:条件对象
 * @returns 对象列表子集
 */
export async function FunctionType_GetSubObjLstCache(objFunctionTypeCond: ConditionCollection) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrFunctionTypeObjLstCache = await FunctionType_GetObjLstCache();
  let arrFunctionTypeSel = arrFunctionTypeObjLstCache;
  if (objFunctionTypeCond.GetConditions().length == 0) return arrFunctionTypeSel;
  try {
    //console.log(sstrKeys);
    for (const objCondition of objFunctionTypeCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrFunctionTypeSel = arrFunctionTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrFunctionTypeSel = arrFunctionTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrFunctionTypeSel = arrFunctionTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrFunctionTypeSel = arrFunctionTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrFunctionTypeSel = arrFunctionTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrFunctionTypeSel = arrFunctionTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrFunctionTypeSel = arrFunctionTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrFunctionTypeSel = arrFunctionTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrFunctionTypeSel = arrFunctionTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrFunctionTypeSel = arrFunctionTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrFunctionTypeSel = arrFunctionTypeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrFunctionTypeSel = arrFunctionTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrFunctionTypeSel = arrFunctionTypeSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrFunctionTypeSel = arrFunctionTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrFunctionTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objFunctionTypeCond),
      functionType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsFunctionTypeEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrFuncTypeId:关键字列表
 * @returns 对象列表
 **/
export async function FunctionType_GetObjLstByFuncTypeIdLstAsync(
  arrFuncTypeId: Array<string>,
): Promise<Array<clsFunctionTypeEN>> {
  const strThisFuncName = 'GetObjLstByFuncTypeIdLstAsync';
  const strAction = 'GetObjLstByFuncTypeIdLst';
  const strUrl = GetWebApiUrl(functionType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrFuncTypeId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          functionType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = FunctionType_GetObjLstByJSONObjLst(returnObjLst);
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
        functionType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        functionType_ConstructorName,
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
 * @param arrstrFuncTypeIdLst:关键字列表
 * @returns 对象列表
 */
export async function FunctionType_GetObjLstByFuncTypeIdLstCache(arrFuncTypeIdLst: Array<string>) {
  const strThisFuncName = 'GetObjLstByFuncTypeIdLstCache';
  try {
    const arrFunctionTypeObjLstCache = await FunctionType_GetObjLstCache();
    const arrFunctionTypeSel = arrFunctionTypeObjLstCache.filter(
      (x) => arrFuncTypeIdLst.indexOf(x.funcTypeId) > -1,
    );
    return arrFunctionTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrFuncTypeIdLst.join(','),
      functionType_ConstructorName,
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
export async function FunctionType_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsFunctionTypeEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(functionType_Controller, strAction);

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
          functionType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = FunctionType_GetObjLstByJSONObjLst(returnObjLst);
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
        functionType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        functionType_ConstructorName,
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
export async function FunctionType_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsFunctionTypeEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(functionType_Controller, strAction);

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
          functionType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = FunctionType_GetObjLstByJSONObjLst(returnObjLst);
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
        functionType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        functionType_ConstructorName,
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
export async function FunctionType_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsFunctionTypeEN>();
  const arrFunctionTypeObjLstCache = await FunctionType_GetObjLstCache();
  if (arrFunctionTypeObjLstCache.length == 0) return arrFunctionTypeObjLstCache;
  let arrFunctionTypeSel = arrFunctionTypeObjLstCache;
  const objFunctionTypeCond = objPagerPara.conditionCollection;
  if (objFunctionTypeCond == null) {
    const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return new Array<clsFunctionTypeEN>();
  }
  //console.log("clsFunctionTypeWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    for (const objCondition of objFunctionTypeCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrFunctionTypeSel = arrFunctionTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrFunctionTypeSel = arrFunctionTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrFunctionTypeSel = arrFunctionTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrFunctionTypeSel = arrFunctionTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrFunctionTypeSel = arrFunctionTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrFunctionTypeSel = arrFunctionTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrFunctionTypeSel = arrFunctionTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrFunctionTypeSel = arrFunctionTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrFunctionTypeSel = arrFunctionTypeSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrFunctionTypeSel = arrFunctionTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrFunctionTypeSel = arrFunctionTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrFunctionTypeSel = arrFunctionTypeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrFunctionTypeSel = arrFunctionTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrFunctionTypeSel = arrFunctionTypeSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrFunctionTypeSel = arrFunctionTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrFunctionTypeSel.length == 0) return arrFunctionTypeSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrFunctionTypeSel = arrFunctionTypeSel.sort(
        FunctionType_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrFunctionTypeSel = arrFunctionTypeSel.sort(objPagerPara.sortFun);
    }
    arrFunctionTypeSel = arrFunctionTypeSel.slice(intStart, intEnd);
    return arrFunctionTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      functionType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsFunctionTypeEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function FunctionType_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsFunctionTypeEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsFunctionTypeEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(functionType_Controller, strAction);

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
          functionType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = FunctionType_GetObjLstByJSONObjLst(returnObjLst);
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
        functionType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        functionType_ConstructorName,
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
 * @param strFuncTypeId:关键字
 * @returns 获取删除的结果
 **/
export async function FunctionType_DelRecordAsync(strFuncTypeId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(functionType_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strFuncTypeId);

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
        functionType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        functionType_ConstructorName,
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
 * @param arrFuncTypeId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function FunctionType_DelFunctionTypesAsync(
  arrFuncTypeId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelFunctionTypesAsync';
  const strAction = 'DelFunctionTypes';
  const strUrl = GetWebApiUrl(functionType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrFuncTypeId, config);
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
        functionType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        functionType_ConstructorName,
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
export async function FunctionType_DelFunctionTypesByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelFunctionTypesByCondAsync';
  const strAction = 'DelFunctionTypesByCond';
  const strUrl = GetWebApiUrl(functionType_Controller, strAction);

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
        functionType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        functionType_ConstructorName,
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
 * @param objFunctionTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function FunctionType_AddNewRecordAsync(
  objFunctionTypeEN: clsFunctionTypeEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objFunctionTypeEN);
  const strUrl = GetWebApiUrl(functionType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objFunctionTypeEN, config);
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
        functionType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        functionType_ConstructorName,
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
 * @param objFunctionTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function FunctionType_AddNewRecordWithMaxIdAsync(
  objFunctionTypeEN: clsFunctionTypeEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(functionType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objFunctionTypeEN, config);
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
        functionType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        functionType_ConstructorName,
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
export async function FunctionType_AddNewObjSave(
  objFunctionTypeEN: clsFunctionTypeEN,
): Promise<AddRecordResult> {
  const strThisFuncName = 'AddNewObjSave';
  try {
    FunctionType_CheckPropertyNew(objFunctionTypeEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${functionType_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    alert(strMsg);
    return { keyword: '', success: false }; //一定要有一个返回值,否则会出错!
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await FunctionType_CheckUniCond4Add(objFunctionTypeEN);
    if (bolIsExistCond == false) {
      return { keyword: '', success: false };
    }
    let returnBool = false;
    const returnKeyId = await FunctionType_AddNewRecordWithMaxIdAsync(objFunctionTypeEN);
    if (IsNullOrEmpty(returnKeyId) == false) {
      returnBool = true;
    }
    if (returnBool == true) {
      FunctionType_ReFreshCache();
    } else {
      const strInfo = `添加[函数类型(FunctionType)]记录不成功!`;
      //显示信息框
      throw strInfo;
    }
    return { keyword: returnKeyId, success: returnBool }; //一定要有一个返回值,否则会出错!
  } catch (e) {
    const strMsg = `添加记录不成功,${e}.(in ${functionType_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export async function FunctionType_CheckUniCond4Add(
  objFunctionTypeEN: clsFunctionTypeEN,
): Promise<boolean> {
  const strUniquenessCondition = FunctionType_GetUniCondStr(objFunctionTypeEN);
  const bolIsExistCondition = await FunctionType_IsExistRecordAsync(strUniquenessCondition);
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
export async function FunctionType_CheckUniCond4Update(
  objFunctionTypeEN: clsFunctionTypeEN,
): Promise<boolean> {
  const strUniquenessCondition = FunctionType_GetUniCondStr4Update(objFunctionTypeEN);
  const bolIsExistCondition = await FunctionType_IsExistRecordAsync(strUniquenessCondition);
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
export async function FunctionType_UpdateObjSave(
  objFunctionTypeEN: clsFunctionTypeEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateObjSave';
  objFunctionTypeEN.sfUpdFldSetStr = objFunctionTypeEN.updFldString; //设置哪些字段被修改(脏字段)
  if (objFunctionTypeEN.funcTypeId == '' || objFunctionTypeEN.funcTypeId == undefined) {
    console.error('关键字不能为空!');
    throw '关键字不能为空!';
  }
  try {
    FunctionType_CheckProperty4Update(objFunctionTypeEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${functionType_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await FunctionType_CheckUniCond4Update(objFunctionTypeEN);
    if (bolIsExistCond == false) {
      return false;
    }
    const returnBool = await FunctionType_UpdateRecordAsync(objFunctionTypeEN);
    if (returnBool == true) {
      FunctionType_ReFreshCache();
    }
    return returnBool;
  } catch (e) {
    const strMsg = `修改记录不成功,${e}.(in ${functionType_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objFunctionTypeEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function FunctionType_AddNewRecordWithReturnKeyAsync(
  objFunctionTypeEN: clsFunctionTypeEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(functionType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objFunctionTypeEN, config);
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
        functionType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        functionType_ConstructorName,
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
 * @param objFunctionTypeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function FunctionType_UpdateRecordAsync(
  objFunctionTypeEN: clsFunctionTypeEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objFunctionTypeEN.sfUpdFldSetStr === undefined ||
    objFunctionTypeEN.sfUpdFldSetStr === null ||
    objFunctionTypeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objFunctionTypeEN.funcTypeId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(functionType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objFunctionTypeEN, config);
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
        functionType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        functionType_ConstructorName,
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
 * @param objFunctionTypeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function FunctionType_EditRecordExAsync(
  objFunctionTypeEN: clsFunctionTypeEN,
): Promise<boolean> {
  const strThisFuncName = 'EditRecordExAsync';
  const strAction = 'EditRecordEx';
  if (
    objFunctionTypeEN.sfUpdFldSetStr === undefined ||
    objFunctionTypeEN.sfUpdFldSetStr === null ||
    objFunctionTypeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objFunctionTypeEN.funcTypeId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(functionType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objFunctionTypeEN, config);
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
        functionType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        functionType_ConstructorName,
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
 * @param objFunctionTypeEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function FunctionType_UpdateWithConditionAsync(
  objFunctionTypeEN: clsFunctionTypeEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objFunctionTypeEN.sfUpdFldSetStr === undefined ||
    objFunctionTypeEN.sfUpdFldSetStr === null ||
    objFunctionTypeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objFunctionTypeEN.funcTypeId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(functionType_Controller, strAction);
  objFunctionTypeEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objFunctionTypeEN, config);
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
        functionType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        functionType_ConstructorName,
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
 * @param objstrFuncTypeIdCond:条件对象
 * @returns 对象列表子集
 */
export async function FunctionType_IsExistRecordCache(objFunctionTypeCond: ConditionCollection) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrFunctionTypeObjLstCache = await FunctionType_GetObjLstCache();
  if (arrFunctionTypeObjLstCache == null) return false;
  let arrFunctionTypeSel = arrFunctionTypeObjLstCache;
  if (objFunctionTypeCond.GetConditions().length == 0)
    return arrFunctionTypeSel.length > 0 ? true : false;
  try {
    for (const objCondition of objFunctionTypeCond.GetConditions()) {
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
            arrFunctionTypeSel = arrFunctionTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrFunctionTypeSel = arrFunctionTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrFunctionTypeSel = arrFunctionTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrFunctionTypeSel = arrFunctionTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrFunctionTypeSel = arrFunctionTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrFunctionTypeSel = arrFunctionTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrFunctionTypeSel = arrFunctionTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrFunctionTypeSel = arrFunctionTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrFunctionTypeSel = arrFunctionTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrFunctionTypeSel = arrFunctionTypeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrFunctionTypeSel = arrFunctionTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrFunctionTypeSel = arrFunctionTypeSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrFunctionTypeSel = arrFunctionTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrFunctionTypeSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objFunctionTypeCond),
      functionType_ConstructorName,
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
export async function FunctionType_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(functionType_Controller, strAction);

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
        functionType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        functionType_ConstructorName,
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
 * @param strFuncTypeId:所给的关键字
 * @returns 对象
 */
export async function FunctionType_IsExistCache(strFuncTypeId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrFunctionTypeObjLstCache = await FunctionType_GetObjLstCache();
  if (arrFunctionTypeObjLstCache == null) return false;
  try {
    const arrFunctionTypeSel = arrFunctionTypeObjLstCache.filter(
      (x) => x.funcTypeId == strFuncTypeId,
    );
    if (arrFunctionTypeSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strFuncTypeId,
      functionType_ConstructorName,
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
 * @param strFuncTypeId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function FunctionType_IsExistAsync(strFuncTypeId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(functionType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strFuncTypeId,
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
        functionType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        functionType_ConstructorName,
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
export async function FunctionType_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(functionType_Controller, strAction);

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
        functionType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        functionType_ConstructorName,
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
 * @param objFunctionTypeCond:条件对象
 * @returns 对象列表记录数
 */
export async function FunctionType_GetRecCountByCondCache(
  objFunctionTypeCond: ConditionCollection,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrFunctionTypeObjLstCache = await FunctionType_GetObjLstCache();
  if (arrFunctionTypeObjLstCache == null) return 0;
  let arrFunctionTypeSel = arrFunctionTypeObjLstCache;
  if (objFunctionTypeCond.GetConditions().length == 0) return arrFunctionTypeSel.length;
  try {
    for (const objCondition of objFunctionTypeCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrFunctionTypeSel = arrFunctionTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrFunctionTypeSel = arrFunctionTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrFunctionTypeSel = arrFunctionTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrFunctionTypeSel = arrFunctionTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrFunctionTypeSel = arrFunctionTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrFunctionTypeSel = arrFunctionTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrFunctionTypeSel = arrFunctionTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrFunctionTypeSel = arrFunctionTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrFunctionTypeSel = arrFunctionTypeSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrFunctionTypeSel = arrFunctionTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrFunctionTypeSel = arrFunctionTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrFunctionTypeSel = arrFunctionTypeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrFunctionTypeSel = arrFunctionTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrFunctionTypeSel = arrFunctionTypeSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrFunctionTypeSel = arrFunctionTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrFunctionTypeSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objFunctionTypeCond),
      functionType_ConstructorName,
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
export async function FunctionType_GetMaxStrIdAsync(): Promise<string> {
  const strThisFuncName = 'GetMaxStrIdAsync';
  const strAction = 'GetMaxStrId';
  const strUrl = GetWebApiUrl(functionType_Controller, strAction);

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
        functionType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        functionType_ConstructorName,
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
export async function FunctionType_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(functionType_Controller, strAction);

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
        functionType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        functionType_ConstructorName,
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
export function FunctionType_GetWebApiUrl(strController: string, strAction: string): string {
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
export function FunctionType_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功!');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clsFunctionTypeEN._CurrTabName;
  switch (clsFunctionTypeEN.CacheModeId) {
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
  clsFunctionTypeEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
}

/**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export function FunctionType_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsFunctionTypeEN._CurrTabName;
    switch (clsFunctionTypeEN.CacheModeId) {
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
    clsFunctionTypeEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export function FunctionType_GetLastRefreshTime(): string {
  if (clsFunctionTypeEN._RefreshTimeLst.length == 0) return '';
  return clsFunctionTypeEN._RefreshTimeLst[clsFunctionTypeEN._RefreshTimeLst.length - 1];
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export async function FunctionType_BindDdl_FuncTypeIdInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
) {
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_FuncTypeIdInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_FuncTypeIdInDivCache");
  const arrObjLstSel = await FunctionType_GetObjLstCache();
  if (arrObjLstSel == null) return;
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsFunctionTypeEN.con_FuncTypeId,
    clsFunctionTypeEN.con_FuncTypeName,
    '函数类型...',
  );
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export async function FunctionType_GetArrFunctionType() {
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_FuncTypeIdInDivCache");
  const arrFunctionType = new Array<clsFunctionTypeEN>();
  const arrObjLstSel = await FunctionType_GetObjLstCache();
  if (arrObjLstSel == null) return null;
  const obj0 = new clsFunctionTypeEN();
  obj0.funcTypeId = '0';
  obj0.funcTypeName = '选函数类型...';
  arrFunctionType.push(obj0);
  arrObjLstSel.forEach((x) => arrFunctionType.push(x));
  return arrFunctionType;
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function FunctionType_CheckPropertyNew(pobjFunctionTypeEN: clsFunctionTypeEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjFunctionTypeEN.funcTypeName) === true) {
    throw new Error(
      `(errid:Watl000411)字段[函数类型名]不能为空(In 函数类型)!(clsFunctionTypeBL:CheckPropertyNew0)`,
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjFunctionTypeEN.funcTypeId) == false &&
    GetStrLen(pobjFunctionTypeEN.funcTypeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000413)字段[函数类型Id(funcTypeId)]的长度不能超过2(In 函数类型(FunctionType))!值:${pobjFunctionTypeEN.funcTypeId}(clsFunctionTypeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunctionTypeEN.funcTypeName) == false &&
    GetStrLen(pobjFunctionTypeEN.funcTypeName) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[函数类型名(funcTypeName)]的长度不能超过20(In 函数类型(FunctionType))!值:${pobjFunctionTypeEN.funcTypeName}(clsFunctionTypeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunctionTypeEN.funcTypeENName) == false &&
    GetStrLen(pobjFunctionTypeEN.funcTypeENName) > 50
  ) {
    throw new Error(
      `(errid:Watl000413)字段[函数类型英文名(funcTypeENName)]的长度不能超过50(In 函数类型(FunctionType))!值:${pobjFunctionTypeEN.funcTypeENName}(clsFunctionTypeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunctionTypeEN.codeTypeId) == false &&
    GetStrLen(pobjFunctionTypeEN.codeTypeId) > 4
  ) {
    throw new Error(
      `(errid:Watl000413)字段[代码类型Id(codeTypeId)]的长度不能超过4(In 函数类型(FunctionType))!值:${pobjFunctionTypeEN.codeTypeId}(clsFunctionTypeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunctionTypeEN.memo) == false &&
    GetStrLen(pobjFunctionTypeEN.memo) > 1000
  ) {
    throw new Error(
      `(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In 函数类型(FunctionType))!值:${pobjFunctionTypeEN.memo}(clsFunctionTypeBL:CheckPropertyNew)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjFunctionTypeEN.funcTypeId) == false &&
    undefined !== pobjFunctionTypeEN.funcTypeId &&
    tzDataType.isString(pobjFunctionTypeEN.funcTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[函数类型Id(funcTypeId)]的值:[${pobjFunctionTypeEN.funcTypeId}], 非法,应该为字符型(In 函数类型(FunctionType))!(clsFunctionTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunctionTypeEN.funcTypeName) == false &&
    undefined !== pobjFunctionTypeEN.funcTypeName &&
    tzDataType.isString(pobjFunctionTypeEN.funcTypeName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[函数类型名(funcTypeName)]的值:[${pobjFunctionTypeEN.funcTypeName}], 非法,应该为字符型(In 函数类型(FunctionType))!(clsFunctionTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunctionTypeEN.funcTypeENName) == false &&
    undefined !== pobjFunctionTypeEN.funcTypeENName &&
    tzDataType.isString(pobjFunctionTypeEN.funcTypeENName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[函数类型英文名(funcTypeENName)]的值:[${pobjFunctionTypeEN.funcTypeENName}], 非法,应该为字符型(In 函数类型(FunctionType))!(clsFunctionTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunctionTypeEN.codeTypeId) == false &&
    undefined !== pobjFunctionTypeEN.codeTypeId &&
    tzDataType.isString(pobjFunctionTypeEN.codeTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[代码类型Id(codeTypeId)]的值:[${pobjFunctionTypeEN.codeTypeId}], 非法,应该为字符型(In 函数类型(FunctionType))!(clsFunctionTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunctionTypeEN.memo) == false &&
    undefined !== pobjFunctionTypeEN.memo &&
    tzDataType.isString(pobjFunctionTypeEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[说明(memo)]的值:[${pobjFunctionTypeEN.memo}], 非法,应该为字符型(In 函数类型(FunctionType))!(clsFunctionTypeBL:CheckPropertyNew0)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function FunctionType_CheckProperty4Update(pobjFunctionTypeEN: clsFunctionTypeEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjFunctionTypeEN.funcTypeId) == false &&
    GetStrLen(pobjFunctionTypeEN.funcTypeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000416)字段[函数类型Id(funcTypeId)]的长度不能超过2(In 函数类型(FunctionType))!值:${pobjFunctionTypeEN.funcTypeId}(clsFunctionTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunctionTypeEN.funcTypeName) == false &&
    GetStrLen(pobjFunctionTypeEN.funcTypeName) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[函数类型名(funcTypeName)]的长度不能超过20(In 函数类型(FunctionType))!值:${pobjFunctionTypeEN.funcTypeName}(clsFunctionTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunctionTypeEN.funcTypeENName) == false &&
    GetStrLen(pobjFunctionTypeEN.funcTypeENName) > 50
  ) {
    throw new Error(
      `(errid:Watl000416)字段[函数类型英文名(funcTypeENName)]的长度不能超过50(In 函数类型(FunctionType))!值:${pobjFunctionTypeEN.funcTypeENName}(clsFunctionTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunctionTypeEN.codeTypeId) == false &&
    GetStrLen(pobjFunctionTypeEN.codeTypeId) > 4
  ) {
    throw new Error(
      `(errid:Watl000416)字段[代码类型Id(codeTypeId)]的长度不能超过4(In 函数类型(FunctionType))!值:${pobjFunctionTypeEN.codeTypeId}(clsFunctionTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunctionTypeEN.memo) == false &&
    GetStrLen(pobjFunctionTypeEN.memo) > 1000
  ) {
    throw new Error(
      `(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In 函数类型(FunctionType))!值:${pobjFunctionTypeEN.memo}(clsFunctionTypeBL:CheckProperty4Update)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjFunctionTypeEN.funcTypeId) == false &&
    undefined !== pobjFunctionTypeEN.funcTypeId &&
    tzDataType.isString(pobjFunctionTypeEN.funcTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[函数类型Id(funcTypeId)]的值:[${pobjFunctionTypeEN.funcTypeId}], 非法,应该为字符型(In 函数类型(FunctionType))!(clsFunctionTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunctionTypeEN.funcTypeName) == false &&
    undefined !== pobjFunctionTypeEN.funcTypeName &&
    tzDataType.isString(pobjFunctionTypeEN.funcTypeName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[函数类型名(funcTypeName)]的值:[${pobjFunctionTypeEN.funcTypeName}], 非法,应该为字符型(In 函数类型(FunctionType))!(clsFunctionTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunctionTypeEN.funcTypeENName) == false &&
    undefined !== pobjFunctionTypeEN.funcTypeENName &&
    tzDataType.isString(pobjFunctionTypeEN.funcTypeENName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[函数类型英文名(funcTypeENName)]的值:[${pobjFunctionTypeEN.funcTypeENName}], 非法,应该为字符型(In 函数类型(FunctionType))!(clsFunctionTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunctionTypeEN.codeTypeId) == false &&
    undefined !== pobjFunctionTypeEN.codeTypeId &&
    tzDataType.isString(pobjFunctionTypeEN.codeTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[代码类型Id(codeTypeId)]的值:[${pobjFunctionTypeEN.codeTypeId}], 非法,应该为字符型(In 函数类型(FunctionType))!(clsFunctionTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunctionTypeEN.memo) == false &&
    undefined !== pobjFunctionTypeEN.memo &&
    tzDataType.isString(pobjFunctionTypeEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[说明(memo)]的值:[${pobjFunctionTypeEN.memo}], 非法,应该为字符型(In 函数类型(FunctionType))!(clsFunctionTypeBL:CheckProperty4Update)`,
    );
  }
  //检查主键是否为Null或者空!
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
export function FunctionType_GetJSONStrByObj(pobjFunctionTypeEN: clsFunctionTypeEN): string {
  pobjFunctionTypeEN.sfUpdFldSetStr = pobjFunctionTypeEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjFunctionTypeEN);
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
export function FunctionType_GetObjLstByJSONStr(strJSON: string): Array<clsFunctionTypeEN> {
  let arrFunctionTypeObjLst = new Array<clsFunctionTypeEN>();
  if (strJSON === '') {
    return arrFunctionTypeObjLst;
  }
  try {
    arrFunctionTypeObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrFunctionTypeObjLst;
  }
  return arrFunctionTypeObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-05-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrFunctionTypeObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function FunctionType_GetObjLstByJSONObjLst(
  arrFunctionTypeObjLstS: Array<clsFunctionTypeEN>,
): Array<clsFunctionTypeEN> {
  const arrFunctionTypeObjLst = new Array<clsFunctionTypeEN>();
  for (const objInFor of arrFunctionTypeObjLstS) {
    const obj1 = FunctionType_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrFunctionTypeObjLst.push(obj1);
  }
  return arrFunctionTypeObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-05-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function FunctionType_GetObjByJSONStr(strJSON: string): clsFunctionTypeEN {
  let pobjFunctionTypeEN = new clsFunctionTypeEN();
  if (strJSON === '') {
    return pobjFunctionTypeEN;
  }
  try {
    pobjFunctionTypeEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjFunctionTypeEN;
  }
  return pobjFunctionTypeEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function FunctionType_GetCombineCondition(objFunctionTypeCond: clsFunctionTypeEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objFunctionTypeCond.dicFldComparisonOp,
      clsFunctionTypeEN.con_FuncTypeId,
    ) == true
  ) {
    const strComparisonOpFuncTypeId: string =
      objFunctionTypeCond.dicFldComparisonOp[clsFunctionTypeEN.con_FuncTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFunctionTypeEN.con_FuncTypeId,
      objFunctionTypeCond.funcTypeId,
      strComparisonOpFuncTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFunctionTypeCond.dicFldComparisonOp,
      clsFunctionTypeEN.con_FuncTypeName,
    ) == true
  ) {
    const strComparisonOpFuncTypeName: string =
      objFunctionTypeCond.dicFldComparisonOp[clsFunctionTypeEN.con_FuncTypeName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFunctionTypeEN.con_FuncTypeName,
      objFunctionTypeCond.funcTypeName,
      strComparisonOpFuncTypeName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFunctionTypeCond.dicFldComparisonOp,
      clsFunctionTypeEN.con_FuncTypeENName,
    ) == true
  ) {
    const strComparisonOpFuncTypeENName: string =
      objFunctionTypeCond.dicFldComparisonOp[clsFunctionTypeEN.con_FuncTypeENName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFunctionTypeEN.con_FuncTypeENName,
      objFunctionTypeCond.funcTypeENName,
      strComparisonOpFuncTypeENName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFunctionTypeCond.dicFldComparisonOp,
      clsFunctionTypeEN.con_CodeTypeId,
    ) == true
  ) {
    const strComparisonOpCodeTypeId: string =
      objFunctionTypeCond.dicFldComparisonOp[clsFunctionTypeEN.con_CodeTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFunctionTypeEN.con_CodeTypeId,
      objFunctionTypeCond.codeTypeId,
      strComparisonOpCodeTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFunctionTypeCond.dicFldComparisonOp,
      clsFunctionTypeEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objFunctionTypeCond.dicFldComparisonOp[clsFunctionTypeEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFunctionTypeEN.con_Memo,
      objFunctionTypeCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--FunctionType(函数类型),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strFuncTypeName: 函数类型名(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function FunctionType_GetUniCondStr(objFunctionTypeEN: clsFunctionTypeEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and FuncTypeName = '{0}'", objFunctionTypeEN.funcTypeName);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--FunctionType(函数类型),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strFuncTypeName: 函数类型名(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function FunctionType_GetUniCondStr4Update(objFunctionTypeEN: clsFunctionTypeEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and FuncTypeId <> '{0}'", objFunctionTypeEN.funcTypeId);
  strWhereCond += Format(" and FuncTypeName = '{0}'", objFunctionTypeEN.funcTypeName);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objFunctionTypeENS:源对象
 * @param objFunctionTypeENT:目标对象
 */
export function FunctionType_GetObjFromJsonObj(
  objFunctionTypeENS: clsFunctionTypeEN,
): clsFunctionTypeEN {
  const objFunctionTypeENT: clsFunctionTypeEN = new clsFunctionTypeEN();
  ObjectAssign(objFunctionTypeENT, objFunctionTypeENS);
  return objFunctionTypeENT;
}
