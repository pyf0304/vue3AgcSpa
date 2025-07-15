/**
 * 类名:clsFldOperationTypeWApi
 * 表名:FldOperationType(00050278)
 * 版本:2025.05.12.1(服务器:WIN-SRV103-116)
 * 日期:2025/05/13 04:54:15
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 应用类型:Vue应用InCore-TS(30)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:字段、表维护(Table_Field)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 字段操作类型(FldOperationType)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2025年05月13日.
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
import { clsFldOperationTypeEN } from '@/ts/L0Entity/Table_Field/clsFldOperationTypeEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';

export const fldOperationType_Controller = 'FldOperationTypeApi';
export const fldOperationType_ConstructorName = 'fldOperationType';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strFldOpTypeId:关键字
 * @returns 对象
 **/
export async function FldOperationType_GetObjByFldOpTypeIdAsync(
  strFldOpTypeId: string,
): Promise<clsFldOperationTypeEN | null> {
  const strThisFuncName = 'GetObjByFldOpTypeIdAsync';

  if (IsNullOrEmpty(strFldOpTypeId) == true) {
    const strMsg = Format(
      '参数:[strFldOpTypeId]不能为空!(In clsFldOperationTypeWApi.GetObjByFldOpTypeIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strFldOpTypeId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strFldOpTypeId]的长度:[{0}]不正确!(clsFldOperationTypeWApi.GetObjByFldOpTypeIdAsync)',
      strFldOpTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByFldOpTypeId';
  const strUrl = GetWebApiUrl(fldOperationType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strFldOpTypeId,
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
      const objFldOperationType = FldOperationType_GetObjFromJsonObj(returnObj);
      return objFldOperationType;
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
        fldOperationType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fldOperationType_ConstructorName,
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
 * @param strFldOpTypeId:所给的关键字
 * @returns 对象
 */
export async function FldOperationType_GetObjByFldOpTypeIdlocalStorage(strFldOpTypeId: string) {
  const strThisFuncName = 'GetObjByFldOpTypeIdlocalStorage';

  if (IsNullOrEmpty(strFldOpTypeId) == true) {
    const strMsg = Format(
      '参数:[strFldOpTypeId]不能为空!(In clsFldOperationTypeWApi.GetObjByFldOpTypeIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strFldOpTypeId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strFldOpTypeId]的长度:[{0}]不正确!(clsFldOperationTypeWApi.GetObjByFldOpTypeIdlocalStorage)',
      strFldOpTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsFldOperationTypeEN._CurrTabName, strFldOpTypeId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objFldOperationTypeCache: clsFldOperationTypeEN = JSON.parse(strTempObj);
    return objFldOperationTypeCache;
  }
  try {
    const objFldOperationType = await FldOperationType_GetObjByFldOpTypeIdAsync(strFldOpTypeId);
    if (objFldOperationType != null) {
      localStorage.setItem(strKey, JSON.stringify(objFldOperationType));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objFldOperationType;
    }
    return objFldOperationType;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strFldOpTypeId,
      fldOperationType_ConstructorName,
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
 * @param strFldOpTypeId:所给的关键字
 * @returns 对象
 */
export async function FldOperationType_GetObjByFldOpTypeIdCache(
  strFldOpTypeId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByFldOpTypeIdCache';

  if (IsNullOrEmpty(strFldOpTypeId) == true) {
    const strMsg = Format(
      '参数:[strFldOpTypeId]不能为空!(In clsFldOperationTypeWApi.GetObjByFldOpTypeIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strFldOpTypeId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strFldOpTypeId]的长度:[{0}]不正确!(clsFldOperationTypeWApi.GetObjByFldOpTypeIdCache)',
      strFldOpTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrFldOperationTypeObjLstCache = await FldOperationType_GetObjLstCache();
  try {
    const arrFldOperationTypeSel = arrFldOperationTypeObjLstCache.filter(
      (x) => x.fldOpTypeId == strFldOpTypeId,
    );
    let objFldOperationType: clsFldOperationTypeEN;
    if (arrFldOperationTypeSel.length > 0) {
      objFldOperationType = arrFldOperationTypeSel[0];
      return objFldOperationType;
    } else {
      if (bolTryAsyncOnce == true) {
        const objFldOperationTypeConst = await FldOperationType_GetObjByFldOpTypeIdAsync(
          strFldOpTypeId,
        );
        if (objFldOperationTypeConst != null) {
          FldOperationType_ReFreshThisCache();
          return objFldOperationTypeConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strFldOpTypeId,
      fldOperationType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objFldOperationType:所给的对象
 * @returns 对象
 */
export async function FldOperationType_UpdateObjInLstCache(
  objFldOperationType: clsFldOperationTypeEN,
) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrFldOperationTypeObjLstCache = await FldOperationType_GetObjLstCache();
    const obj = arrFldOperationTypeObjLstCache.find(
      (x) => x.fldOpTypeName == objFldOperationType.fldOpTypeName,
    );
    if (obj != null) {
      objFldOperationType.fldOpTypeId = obj.fldOpTypeId;
      ObjectAssign(obj, objFldOperationType);
    } else {
      arrFldOperationTypeObjLstCache.push(objFldOperationType);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      fldOperationType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-05-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function FldOperationType_SortFunDefa(
  a: clsFldOperationTypeEN,
  b: clsFldOperationTypeEN,
): number {
  return a.fldOpTypeId.localeCompare(b.fldOpTypeId);
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2025-05-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function FldOperationType_SortFunDefa2Fld(
  a: clsFldOperationTypeEN,
  b: clsFldOperationTypeEN,
): number {
  if (a.fldOpTypeName == b.fldOpTypeName) return a.fldOpTypeENName.localeCompare(b.fldOpTypeENName);
  else return a.fldOpTypeName.localeCompare(b.fldOpTypeName);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-05-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function FldOperationType_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsFldOperationTypeEN.con_FldOpTypeId:
        return (a: clsFldOperationTypeEN, b: clsFldOperationTypeEN) => {
          return a.fldOpTypeId.localeCompare(b.fldOpTypeId);
        };
      case clsFldOperationTypeEN.con_FldOpTypeName:
        return (a: clsFldOperationTypeEN, b: clsFldOperationTypeEN) => {
          return a.fldOpTypeName.localeCompare(b.fldOpTypeName);
        };
      case clsFldOperationTypeEN.con_FldOpTypeENName:
        return (a: clsFldOperationTypeEN, b: clsFldOperationTypeEN) => {
          return a.fldOpTypeENName.localeCompare(b.fldOpTypeENName);
        };
      case clsFldOperationTypeEN.con_Memo:
        return (a: clsFldOperationTypeEN, b: clsFldOperationTypeEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[FldOperationType]中不存在!(in ${fldOperationType_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsFldOperationTypeEN.con_FldOpTypeId:
        return (a: clsFldOperationTypeEN, b: clsFldOperationTypeEN) => {
          return b.fldOpTypeId.localeCompare(a.fldOpTypeId);
        };
      case clsFldOperationTypeEN.con_FldOpTypeName:
        return (a: clsFldOperationTypeEN, b: clsFldOperationTypeEN) => {
          return b.fldOpTypeName.localeCompare(a.fldOpTypeName);
        };
      case clsFldOperationTypeEN.con_FldOpTypeENName:
        return (a: clsFldOperationTypeEN, b: clsFldOperationTypeEN) => {
          return b.fldOpTypeENName.localeCompare(a.fldOpTypeENName);
        };
      case clsFldOperationTypeEN.con_Memo:
        return (a: clsFldOperationTypeEN, b: clsFldOperationTypeEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[FldOperationType]中不存在!(in ${fldOperationType_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strFldOpTypeId:所给的关键字
 * @returns 对象
 */
export async function FldOperationType_GetNameByFldOpTypeIdCache(strFldOpTypeId: string) {
  if (IsNullOrEmpty(strFldOpTypeId) == true) {
    const strMsg = Format(
      '参数:[strFldOpTypeId]不能为空!(In clsFldOperationTypeWApi.GetNameByFldOpTypeIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strFldOpTypeId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strFldOpTypeId]的长度:[{0}]不正确!(clsFldOperationTypeWApi.GetNameByFldOpTypeIdCache)',
      strFldOpTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrFldOperationTypeObjLstCache = await FldOperationType_GetObjLstCache();
  if (arrFldOperationTypeObjLstCache == null) return '';
  try {
    const arrFldOperationTypeSel = arrFldOperationTypeObjLstCache.filter(
      (x) => x.fldOpTypeId == strFldOpTypeId,
    );
    let objFldOperationType: clsFldOperationTypeEN;
    if (arrFldOperationTypeSel.length > 0) {
      objFldOperationType = arrFldOperationTypeSel[0];
      return objFldOperationType.fldOpTypeName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strFldOpTypeId,
    );
    console.error(strMsg);
    alert(strMsg);
  }
  return '';
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-05-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function FldOperationType_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsFldOperationTypeEN.con_FldOpTypeId:
      return (obj: clsFldOperationTypeEN) => {
        return obj.fldOpTypeId === value;
      };
    case clsFldOperationTypeEN.con_FldOpTypeName:
      return (obj: clsFldOperationTypeEN) => {
        return obj.fldOpTypeName === value;
      };
    case clsFldOperationTypeEN.con_FldOpTypeENName:
      return (obj: clsFldOperationTypeEN) => {
        return obj.fldOpTypeENName === value;
      };
    case clsFldOperationTypeEN.con_Memo:
      return (obj: clsFldOperationTypeEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[FldOperationType]中不存在!(in ${fldOperationType_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2025-05-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 * @returns 返回一个输出字段值
 */
export async function FldOperationType_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsFldOperationTypeEN.con_FldOpTypeId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsFldOperationTypeEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsFldOperationTypeEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strFldOpTypeId = strInValue;
  if (IsNullOrEmpty(strFldOpTypeId) == true) {
    return '';
  }
  const objFldOperationType = await FldOperationType_GetObjByFldOpTypeIdCache(strFldOpTypeId);
  if (objFldOperationType == null) return '';
  if (objFldOperationType.GetFldValue(strOutFldName) == null) return '';
  return objFldOperationType.GetFldValue(strOutFldName).toString();
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2025-05-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 * @returns 返回一个关键字值列表
 */
export async function FldOperationType_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsFldOperationTypeEN.con_FldOpTypeId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrFldOperationType = await FldOperationType_GetObjLstCache();
  if (arrFldOperationType == null) return [];
  let arrFldOperationTypeSel = arrFldOperationType;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrFldOperationTypeSel = arrFldOperationTypeSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrFldOperationTypeSel = arrFldOperationTypeSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrFldOperationTypeSel = arrFldOperationTypeSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrFldOperationTypeSel = arrFldOperationTypeSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrFldOperationTypeSel = arrFldOperationTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrFldOperationTypeSel = arrFldOperationTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrFldOperationTypeSel = arrFldOperationTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrFldOperationTypeSel = arrFldOperationTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrFldOperationTypeSel = arrFldOperationTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrFldOperationTypeSel = arrFldOperationTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrFldOperationTypeSel.length == 0) return [];
  return arrFldOperationTypeSel.map((x) => x.fldOpTypeId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function FldOperationType_GetFldValueAsync(
  strFldName: string,
  strWhereCond: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetFldValueAsync';
  const strAction = 'GetFldValue';
  const strUrl = GetWebApiUrl(fldOperationType_Controller, strAction);

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
        fldOperationType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fldOperationType_ConstructorName,
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
export async function FldOperationType_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(fldOperationType_Controller, strAction);

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
        fldOperationType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fldOperationType_ConstructorName,
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
export async function FldOperationType_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(fldOperationType_Controller, strAction);

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
        fldOperationType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fldOperationType_ConstructorName,
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
export async function FldOperationType_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsFldOperationTypeEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(fldOperationType_Controller, strAction);

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
      const objFldOperationType = FldOperationType_GetObjFromJsonObj(returnObj);
      return objFldOperationType;
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
        fldOperationType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fldOperationType_ConstructorName,
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
export async function FldOperationType_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsFldOperationTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsFldOperationTypeEN.WhereFormat) == false) {
    strWhereCond = clsFldOperationTypeEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsFldOperationTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsFldOperationTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrFldOperationTypeExObjLstCache: Array<clsFldOperationTypeEN> = CacheHelper.Get(strKey);
    const arrFldOperationTypeObjLstT = FldOperationType_GetObjLstByJSONObjLst(
      arrFldOperationTypeExObjLstCache,
    );
    return arrFldOperationTypeObjLstT;
  }
  try {
    const arrFldOperationTypeExObjLst = await FldOperationType_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrFldOperationTypeExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrFldOperationTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrFldOperationTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      fldOperationType_ConstructorName,
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
export async function FldOperationType_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsFldOperationTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsFldOperationTypeEN.WhereFormat) == false) {
    strWhereCond = clsFldOperationTypeEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsFldOperationTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsFldOperationTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrFldOperationTypeExObjLstCache: Array<clsFldOperationTypeEN> =
      JSON.parse(strTempObjLst);
    const arrFldOperationTypeObjLstT = FldOperationType_GetObjLstByJSONObjLst(
      arrFldOperationTypeExObjLstCache,
    );
    return arrFldOperationTypeObjLstT;
  }
  try {
    const arrFldOperationTypeExObjLst = await FldOperationType_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrFldOperationTypeExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrFldOperationTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrFldOperationTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      fldOperationType_ConstructorName,
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
export async function FldOperationType_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsFldOperationTypeEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrFldOperationTypeObjLstCache: Array<clsFldOperationTypeEN> = JSON.parse(strTempObjLst);
    return arrFldOperationTypeObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function FldOperationType_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsFldOperationTypeEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(fldOperationType_Controller, strAction);

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
          fldOperationType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = FldOperationType_GetObjLstByJSONObjLst(returnObjLst);
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
        fldOperationType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fldOperationType_ConstructorName,
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
export async function FldOperationType_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsFldOperationTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsFldOperationTypeEN.WhereFormat) == false) {
    strWhereCond = clsFldOperationTypeEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsFldOperationTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsFldOperationTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrFldOperationTypeExObjLstCache: Array<clsFldOperationTypeEN> =
      JSON.parse(strTempObjLst);
    const arrFldOperationTypeObjLstT = FldOperationType_GetObjLstByJSONObjLst(
      arrFldOperationTypeExObjLstCache,
    );
    return arrFldOperationTypeObjLstT;
  }
  try {
    const arrFldOperationTypeExObjLst = await FldOperationType_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrFldOperationTypeExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrFldOperationTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrFldOperationTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      fldOperationType_ConstructorName,
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
export async function FldOperationType_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsFldOperationTypeEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrFldOperationTypeObjLstCache: Array<clsFldOperationTypeEN> = JSON.parse(strTempObjLst);
    return arrFldOperationTypeObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function FldOperationType_GetObjLstCache(): Promise<Array<clsFldOperationTypeEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrFldOperationTypeObjLstCache;
  switch (clsFldOperationTypeEN.CacheModeId) {
    case '04': //sessionStorage
      arrFldOperationTypeObjLstCache = await FldOperationType_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrFldOperationTypeObjLstCache = await FldOperationType_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrFldOperationTypeObjLstCache = await FldOperationType_GetObjLstClientCache();
      break;
    default:
      arrFldOperationTypeObjLstCache = await FldOperationType_GetObjLstClientCache();
      break;
  }
  return arrFldOperationTypeObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function FldOperationType_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrFldOperationTypeObjLstCache;
  switch (clsFldOperationTypeEN.CacheModeId) {
    case '04': //sessionStorage
      arrFldOperationTypeObjLstCache = await FldOperationType_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrFldOperationTypeObjLstCache = await FldOperationType_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrFldOperationTypeObjLstCache = null;
      break;
    default:
      arrFldOperationTypeObjLstCache = null;
      break;
  }
  return arrFldOperationTypeObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrFldOpTypeIdCond:条件对象
 * @returns 对象列表子集
 */
export async function FldOperationType_GetSubObjLstCache(
  objFldOperationTypeCond: ConditionCollection,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrFldOperationTypeObjLstCache = await FldOperationType_GetObjLstCache();
  let arrFldOperationTypeSel = arrFldOperationTypeObjLstCache;
  if (objFldOperationTypeCond.GetConditions().length == 0) return arrFldOperationTypeSel;
  try {
    //console.log(sstrKeys);
    for (const objCondition of objFldOperationTypeCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrFldOperationTypeSel = arrFldOperationTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrFldOperationTypeSel = arrFldOperationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrFldOperationTypeSel = arrFldOperationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrFldOperationTypeSel = arrFldOperationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrFldOperationTypeSel = arrFldOperationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrFldOperationTypeSel = arrFldOperationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrFldOperationTypeSel = arrFldOperationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrFldOperationTypeSel = arrFldOperationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrFldOperationTypeSel = arrFldOperationTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrFldOperationTypeSel = arrFldOperationTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrFldOperationTypeSel = arrFldOperationTypeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrFldOperationTypeSel = arrFldOperationTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrFldOperationTypeSel = arrFldOperationTypeSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrFldOperationTypeSel = arrFldOperationTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrFldOperationTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objFldOperationTypeCond),
      fldOperationType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsFldOperationTypeEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrFldOpTypeId:关键字列表
 * @returns 对象列表
 **/
export async function FldOperationType_GetObjLstByFldOpTypeIdLstAsync(
  arrFldOpTypeId: Array<string>,
): Promise<Array<clsFldOperationTypeEN>> {
  const strThisFuncName = 'GetObjLstByFldOpTypeIdLstAsync';
  const strAction = 'GetObjLstByFldOpTypeIdLst';
  const strUrl = GetWebApiUrl(fldOperationType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrFldOpTypeId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          fldOperationType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = FldOperationType_GetObjLstByJSONObjLst(returnObjLst);
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
        fldOperationType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fldOperationType_ConstructorName,
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
 * @param arrstrFldOpTypeIdLst:关键字列表
 * @returns 对象列表
 */
export async function FldOperationType_GetObjLstByFldOpTypeIdLstCache(
  arrFldOpTypeIdLst: Array<string>,
) {
  const strThisFuncName = 'GetObjLstByFldOpTypeIdLstCache';
  try {
    const arrFldOperationTypeObjLstCache = await FldOperationType_GetObjLstCache();
    const arrFldOperationTypeSel = arrFldOperationTypeObjLstCache.filter(
      (x) => arrFldOpTypeIdLst.indexOf(x.fldOpTypeId) > -1,
    );
    return arrFldOperationTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrFldOpTypeIdLst.join(','),
      fldOperationType_ConstructorName,
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
export async function FldOperationType_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsFldOperationTypeEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(fldOperationType_Controller, strAction);

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
          fldOperationType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = FldOperationType_GetObjLstByJSONObjLst(returnObjLst);
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
        fldOperationType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fldOperationType_ConstructorName,
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
export async function FldOperationType_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsFldOperationTypeEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(fldOperationType_Controller, strAction);

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
          fldOperationType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = FldOperationType_GetObjLstByJSONObjLst(returnObjLst);
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
        fldOperationType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fldOperationType_ConstructorName,
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
export async function FldOperationType_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsFldOperationTypeEN>();
  const arrFldOperationTypeObjLstCache = await FldOperationType_GetObjLstCache();
  if (arrFldOperationTypeObjLstCache.length == 0) return arrFldOperationTypeObjLstCache;
  let arrFldOperationTypeSel = arrFldOperationTypeObjLstCache;
  const objFldOperationTypeCond = objPagerPara.conditionCollection;
  if (objFldOperationTypeCond == null) {
    const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return new Array<clsFldOperationTypeEN>();
  }
  //console.log("clsFldOperationTypeWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    for (const objCondition of objFldOperationTypeCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrFldOperationTypeSel = arrFldOperationTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrFldOperationTypeSel = arrFldOperationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrFldOperationTypeSel = arrFldOperationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrFldOperationTypeSel = arrFldOperationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrFldOperationTypeSel = arrFldOperationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrFldOperationTypeSel = arrFldOperationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrFldOperationTypeSel = arrFldOperationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrFldOperationTypeSel = arrFldOperationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrFldOperationTypeSel = arrFldOperationTypeSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrFldOperationTypeSel = arrFldOperationTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrFldOperationTypeSel = arrFldOperationTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrFldOperationTypeSel = arrFldOperationTypeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrFldOperationTypeSel = arrFldOperationTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrFldOperationTypeSel = arrFldOperationTypeSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrFldOperationTypeSel = arrFldOperationTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrFldOperationTypeSel.length == 0) return arrFldOperationTypeSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrFldOperationTypeSel = arrFldOperationTypeSel.sort(
        FldOperationType_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrFldOperationTypeSel = arrFldOperationTypeSel.sort(objPagerPara.sortFun);
    }
    arrFldOperationTypeSel = arrFldOperationTypeSel.slice(intStart, intEnd);
    return arrFldOperationTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      fldOperationType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsFldOperationTypeEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function FldOperationType_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsFldOperationTypeEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsFldOperationTypeEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(fldOperationType_Controller, strAction);

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
          fldOperationType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = FldOperationType_GetObjLstByJSONObjLst(returnObjLst);
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
        fldOperationType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fldOperationType_ConstructorName,
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
 * @param strFldOpTypeId:关键字
 * @returns 获取删除的结果
 **/
export async function FldOperationType_DelRecordAsync(strFldOpTypeId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(fldOperationType_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strFldOpTypeId);

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
        fldOperationType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fldOperationType_ConstructorName,
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
 * @param arrFldOpTypeId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function FldOperationType_DelFldOperationTypesAsync(
  arrFldOpTypeId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelFldOperationTypesAsync';
  const strAction = 'DelFldOperationTypes';
  const strUrl = GetWebApiUrl(fldOperationType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrFldOpTypeId, config);
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
        fldOperationType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fldOperationType_ConstructorName,
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
export async function FldOperationType_DelFldOperationTypesByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelFldOperationTypesByCondAsync';
  const strAction = 'DelFldOperationTypesByCond';
  const strUrl = GetWebApiUrl(fldOperationType_Controller, strAction);

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
        fldOperationType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fldOperationType_ConstructorName,
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
 * @param objFldOperationTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function FldOperationType_AddNewRecordAsync(
  objFldOperationTypeEN: clsFldOperationTypeEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objFldOperationTypeEN);
  const strUrl = GetWebApiUrl(fldOperationType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objFldOperationTypeEN, config);
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
        fldOperationType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fldOperationType_ConstructorName,
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
 * @param objFldOperationTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function FldOperationType_AddNewRecordWithMaxIdAsync(
  objFldOperationTypeEN: clsFldOperationTypeEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(fldOperationType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objFldOperationTypeEN, config);
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
        fldOperationType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fldOperationType_ConstructorName,
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
export async function FldOperationType_AddNewObjSave(
  objFldOperationTypeEN: clsFldOperationTypeEN,
): Promise<AddRecordResult> {
  const strThisFuncName = 'AddNewObjSave';
  try {
    FldOperationType_CheckPropertyNew(objFldOperationTypeEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${fldOperationType_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    alert(strMsg);
    return { keyword: '', success: false }; //一定要有一个返回值,否则会出错!
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await FldOperationType_CheckUniCond4Add(objFldOperationTypeEN);
    if (bolIsExistCond == false) {
      return { keyword: '', success: false };
    }
    let returnBool = false;
    const returnKeyId = await FldOperationType_AddNewRecordWithMaxIdAsync(objFldOperationTypeEN);
    if (IsNullOrEmpty(returnKeyId) == false) {
      returnBool = true;
    }
    if (returnBool == true) {
      FldOperationType_ReFreshCache();
    } else {
      const strInfo = `添加[字段操作类型(FldOperationType)]记录不成功!`;
      //显示信息框
      throw strInfo;
    }
    return { keyword: returnKeyId, success: returnBool }; //一定要有一个返回值,否则会出错!
  } catch (e) {
    const strMsg = `添加记录不成功,${e}.(in ${fldOperationType_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export async function FldOperationType_CheckUniCond4Add(
  objFldOperationTypeEN: clsFldOperationTypeEN,
): Promise<boolean> {
  const strUniquenessCondition = FldOperationType_GetUniCondStr(objFldOperationTypeEN);
  const bolIsExistCondition = await FldOperationType_IsExistRecordAsync(strUniquenessCondition);
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
export async function FldOperationType_CheckUniCond4Update(
  objFldOperationTypeEN: clsFldOperationTypeEN,
): Promise<boolean> {
  const strUniquenessCondition = FldOperationType_GetUniCondStr4Update(objFldOperationTypeEN);
  const bolIsExistCondition = await FldOperationType_IsExistRecordAsync(strUniquenessCondition);
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
export async function FldOperationType_UpdateObjSave(
  objFldOperationTypeEN: clsFldOperationTypeEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateObjSave';
  objFldOperationTypeEN.sfUpdFldSetStr = objFldOperationTypeEN.updFldString; //设置哪些字段被修改(脏字段)
  if (objFldOperationTypeEN.fldOpTypeId == '' || objFldOperationTypeEN.fldOpTypeId == undefined) {
    console.error('关键字不能为空!');
    throw '关键字不能为空!';
  }
  try {
    FldOperationType_CheckProperty4Update(objFldOperationTypeEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${fldOperationType_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await FldOperationType_CheckUniCond4Update(objFldOperationTypeEN);
    if (bolIsExistCond == false) {
      return false;
    }
    const returnBool = await FldOperationType_UpdateRecordAsync(objFldOperationTypeEN);
    if (returnBool == true) {
      FldOperationType_ReFreshCache();
    }
    return returnBool;
  } catch (e) {
    const strMsg = `修改记录不成功,${e}.(in ${fldOperationType_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objFldOperationTypeEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function FldOperationType_AddNewRecordWithReturnKeyAsync(
  objFldOperationTypeEN: clsFldOperationTypeEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(fldOperationType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objFldOperationTypeEN, config);
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
        fldOperationType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fldOperationType_ConstructorName,
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
 * @param objFldOperationTypeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function FldOperationType_UpdateRecordAsync(
  objFldOperationTypeEN: clsFldOperationTypeEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objFldOperationTypeEN.sfUpdFldSetStr === undefined ||
    objFldOperationTypeEN.sfUpdFldSetStr === null ||
    objFldOperationTypeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objFldOperationTypeEN.fldOpTypeId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(fldOperationType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objFldOperationTypeEN, config);
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
        fldOperationType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fldOperationType_ConstructorName,
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
 * @param objFldOperationTypeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function FldOperationType_EditRecordExAsync(
  objFldOperationTypeEN: clsFldOperationTypeEN,
): Promise<boolean> {
  const strThisFuncName = 'EditRecordExAsync';
  const strAction = 'EditRecordEx';
  if (
    objFldOperationTypeEN.sfUpdFldSetStr === undefined ||
    objFldOperationTypeEN.sfUpdFldSetStr === null ||
    objFldOperationTypeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objFldOperationTypeEN.fldOpTypeId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(fldOperationType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objFldOperationTypeEN, config);
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
        fldOperationType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fldOperationType_ConstructorName,
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
 * @param objFldOperationTypeEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function FldOperationType_UpdateWithConditionAsync(
  objFldOperationTypeEN: clsFldOperationTypeEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objFldOperationTypeEN.sfUpdFldSetStr === undefined ||
    objFldOperationTypeEN.sfUpdFldSetStr === null ||
    objFldOperationTypeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objFldOperationTypeEN.fldOpTypeId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(fldOperationType_Controller, strAction);
  objFldOperationTypeEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objFldOperationTypeEN, config);
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
        fldOperationType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fldOperationType_ConstructorName,
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
 * @param objstrFldOpTypeIdCond:条件对象
 * @returns 对象列表子集
 */
export async function FldOperationType_IsExistRecordCache(
  objFldOperationTypeCond: ConditionCollection,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrFldOperationTypeObjLstCache = await FldOperationType_GetObjLstCache();
  if (arrFldOperationTypeObjLstCache == null) return false;
  let arrFldOperationTypeSel = arrFldOperationTypeObjLstCache;
  if (objFldOperationTypeCond.GetConditions().length == 0)
    return arrFldOperationTypeSel.length > 0 ? true : false;
  try {
    for (const objCondition of objFldOperationTypeCond.GetConditions()) {
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
            arrFldOperationTypeSel = arrFldOperationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrFldOperationTypeSel = arrFldOperationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrFldOperationTypeSel = arrFldOperationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrFldOperationTypeSel = arrFldOperationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrFldOperationTypeSel = arrFldOperationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrFldOperationTypeSel = arrFldOperationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrFldOperationTypeSel = arrFldOperationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrFldOperationTypeSel = arrFldOperationTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrFldOperationTypeSel = arrFldOperationTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrFldOperationTypeSel = arrFldOperationTypeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrFldOperationTypeSel = arrFldOperationTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrFldOperationTypeSel = arrFldOperationTypeSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrFldOperationTypeSel = arrFldOperationTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrFldOperationTypeSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objFldOperationTypeCond),
      fldOperationType_ConstructorName,
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
export async function FldOperationType_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(fldOperationType_Controller, strAction);

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
        fldOperationType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fldOperationType_ConstructorName,
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
 * @param strFldOpTypeId:所给的关键字
 * @returns 对象
 */
export async function FldOperationType_IsExistCache(strFldOpTypeId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrFldOperationTypeObjLstCache = await FldOperationType_GetObjLstCache();
  if (arrFldOperationTypeObjLstCache == null) return false;
  try {
    const arrFldOperationTypeSel = arrFldOperationTypeObjLstCache.filter(
      (x) => x.fldOpTypeId == strFldOpTypeId,
    );
    if (arrFldOperationTypeSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strFldOpTypeId,
      fldOperationType_ConstructorName,
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
 * @param strFldOpTypeId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function FldOperationType_IsExistAsync(strFldOpTypeId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(fldOperationType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strFldOpTypeId,
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
        fldOperationType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fldOperationType_ConstructorName,
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
export async function FldOperationType_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(fldOperationType_Controller, strAction);

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
        fldOperationType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fldOperationType_ConstructorName,
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
 * @param objFldOperationTypeCond:条件对象
 * @returns 对象列表记录数
 */
export async function FldOperationType_GetRecCountByCondCache(
  objFldOperationTypeCond: ConditionCollection,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrFldOperationTypeObjLstCache = await FldOperationType_GetObjLstCache();
  if (arrFldOperationTypeObjLstCache == null) return 0;
  let arrFldOperationTypeSel = arrFldOperationTypeObjLstCache;
  if (objFldOperationTypeCond.GetConditions().length == 0) return arrFldOperationTypeSel.length;
  try {
    for (const objCondition of objFldOperationTypeCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrFldOperationTypeSel = arrFldOperationTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrFldOperationTypeSel = arrFldOperationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrFldOperationTypeSel = arrFldOperationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrFldOperationTypeSel = arrFldOperationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrFldOperationTypeSel = arrFldOperationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrFldOperationTypeSel = arrFldOperationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrFldOperationTypeSel = arrFldOperationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrFldOperationTypeSel = arrFldOperationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrFldOperationTypeSel = arrFldOperationTypeSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrFldOperationTypeSel = arrFldOperationTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrFldOperationTypeSel = arrFldOperationTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrFldOperationTypeSel = arrFldOperationTypeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrFldOperationTypeSel = arrFldOperationTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrFldOperationTypeSel = arrFldOperationTypeSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrFldOperationTypeSel = arrFldOperationTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrFldOperationTypeSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objFldOperationTypeCond),
      fldOperationType_ConstructorName,
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
export async function FldOperationType_GetMaxStrIdAsync(): Promise<string> {
  const strThisFuncName = 'GetMaxStrIdAsync';
  const strAction = 'GetMaxStrId';
  const strUrl = GetWebApiUrl(fldOperationType_Controller, strAction);

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
        fldOperationType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fldOperationType_ConstructorName,
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
export async function FldOperationType_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(fldOperationType_Controller, strAction);

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
        fldOperationType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fldOperationType_ConstructorName,
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
export function FldOperationType_GetWebApiUrl(strController: string, strAction: string): string {
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
export function FldOperationType_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功!');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clsFldOperationTypeEN._CurrTabName;
  switch (clsFldOperationTypeEN.CacheModeId) {
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
  clsFldOperationTypeEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
}

/**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export function FldOperationType_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsFldOperationTypeEN._CurrTabName;
    switch (clsFldOperationTypeEN.CacheModeId) {
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
    clsFldOperationTypeEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export function FldOperationType_GetLastRefreshTime(): string {
  if (clsFldOperationTypeEN._RefreshTimeLst.length == 0) return '';
  return clsFldOperationTypeEN._RefreshTimeLst[clsFldOperationTypeEN._RefreshTimeLst.length - 1];
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export async function FldOperationType_BindDdl_FldOpTypeIdInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
) {
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_FldOpTypeIdInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_FldOpTypeIdInDivCache");
  const arrObjLstSel = await FldOperationType_GetObjLstCache();
  if (arrObjLstSel == null) return;
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsFldOperationTypeEN.con_FldOpTypeId,
    clsFldOperationTypeEN.con_FldOpTypeName,
    '字段操作类型...',
  );
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export async function FldOperationType_GetArrFldOperationType() {
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_FldOpTypeIdInDivCache");
  const arrFldOperationType = new Array<clsFldOperationTypeEN>();
  const arrObjLstSel = await FldOperationType_GetObjLstCache();
  if (arrObjLstSel == null) return null;
  const obj0 = new clsFldOperationTypeEN();
  obj0.fldOpTypeId = '0';
  obj0.fldOpTypeName = '选字段操作类型...';
  arrFldOperationType.push(obj0);
  arrObjLstSel.forEach((x) => arrFldOperationType.push(x));
  return arrFldOperationType;
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function FldOperationType_CheckPropertyNew(pobjFldOperationTypeEN: clsFldOperationTypeEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjFldOperationTypeEN.fldOpTypeName) === true) {
    throw new Error(
      `(errid:Watl000411)字段[字段操作类型名称]不能为空(In 字段操作类型)!(clsFldOperationTypeBL:CheckPropertyNew0)`,
    );
  }
  if (IsNullOrEmpty(pobjFldOperationTypeEN.fldOpTypeENName) === true) {
    throw new Error(
      `(errid:Watl000411)字段[字段操作类型英文名]不能为空(In 字段操作类型)!(clsFldOperationTypeBL:CheckPropertyNew0)`,
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjFldOperationTypeEN.fldOpTypeId) == false &&
    GetStrLen(pobjFldOperationTypeEN.fldOpTypeId) > 4
  ) {
    throw new Error(
      `(errid:Watl000413)字段[字段操作类型Id(fldOpTypeId)]的长度不能超过4(In 字段操作类型(FldOperationType))!值:${pobjFldOperationTypeEN.fldOpTypeId}(clsFldOperationTypeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFldOperationTypeEN.fldOpTypeName) == false &&
    GetStrLen(pobjFldOperationTypeEN.fldOpTypeName) > 100
  ) {
    throw new Error(
      `(errid:Watl000413)字段[字段操作类型名称(fldOpTypeName)]的长度不能超过100(In 字段操作类型(FldOperationType))!值:${pobjFldOperationTypeEN.fldOpTypeName}(clsFldOperationTypeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFldOperationTypeEN.fldOpTypeENName) == false &&
    GetStrLen(pobjFldOperationTypeEN.fldOpTypeENName) > 100
  ) {
    throw new Error(
      `(errid:Watl000413)字段[字段操作类型英文名(fldOpTypeENName)]的长度不能超过100(In 字段操作类型(FldOperationType))!值:${pobjFldOperationTypeEN.fldOpTypeENName}(clsFldOperationTypeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFldOperationTypeEN.memo) == false &&
    GetStrLen(pobjFldOperationTypeEN.memo) > 1000
  ) {
    throw new Error(
      `(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In 字段操作类型(FldOperationType))!值:${pobjFldOperationTypeEN.memo}(clsFldOperationTypeBL:CheckPropertyNew)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjFldOperationTypeEN.fldOpTypeId) == false &&
    undefined !== pobjFldOperationTypeEN.fldOpTypeId &&
    tzDataType.isString(pobjFldOperationTypeEN.fldOpTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[字段操作类型Id(fldOpTypeId)]的值:[${pobjFldOperationTypeEN.fldOpTypeId}], 非法,应该为字符型(In 字段操作类型(FldOperationType))!(clsFldOperationTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFldOperationTypeEN.fldOpTypeName) == false &&
    undefined !== pobjFldOperationTypeEN.fldOpTypeName &&
    tzDataType.isString(pobjFldOperationTypeEN.fldOpTypeName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[字段操作类型名称(fldOpTypeName)]的值:[${pobjFldOperationTypeEN.fldOpTypeName}], 非法,应该为字符型(In 字段操作类型(FldOperationType))!(clsFldOperationTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFldOperationTypeEN.fldOpTypeENName) == false &&
    undefined !== pobjFldOperationTypeEN.fldOpTypeENName &&
    tzDataType.isString(pobjFldOperationTypeEN.fldOpTypeENName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[字段操作类型英文名(fldOpTypeENName)]的值:[${pobjFldOperationTypeEN.fldOpTypeENName}], 非法,应该为字符型(In 字段操作类型(FldOperationType))!(clsFldOperationTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFldOperationTypeEN.memo) == false &&
    undefined !== pobjFldOperationTypeEN.memo &&
    tzDataType.isString(pobjFldOperationTypeEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[说明(memo)]的值:[${pobjFldOperationTypeEN.memo}], 非法,应该为字符型(In 字段操作类型(FldOperationType))!(clsFldOperationTypeBL:CheckPropertyNew0)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function FldOperationType_CheckProperty4Update(
  pobjFldOperationTypeEN: clsFldOperationTypeEN,
) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjFldOperationTypeEN.fldOpTypeId) == false &&
    GetStrLen(pobjFldOperationTypeEN.fldOpTypeId) > 4
  ) {
    throw new Error(
      `(errid:Watl000416)字段[字段操作类型Id(fldOpTypeId)]的长度不能超过4(In 字段操作类型(FldOperationType))!值:${pobjFldOperationTypeEN.fldOpTypeId}(clsFldOperationTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFldOperationTypeEN.fldOpTypeName) == false &&
    GetStrLen(pobjFldOperationTypeEN.fldOpTypeName) > 100
  ) {
    throw new Error(
      `(errid:Watl000416)字段[字段操作类型名称(fldOpTypeName)]的长度不能超过100(In 字段操作类型(FldOperationType))!值:${pobjFldOperationTypeEN.fldOpTypeName}(clsFldOperationTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFldOperationTypeEN.fldOpTypeENName) == false &&
    GetStrLen(pobjFldOperationTypeEN.fldOpTypeENName) > 100
  ) {
    throw new Error(
      `(errid:Watl000416)字段[字段操作类型英文名(fldOpTypeENName)]的长度不能超过100(In 字段操作类型(FldOperationType))!值:${pobjFldOperationTypeEN.fldOpTypeENName}(clsFldOperationTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFldOperationTypeEN.memo) == false &&
    GetStrLen(pobjFldOperationTypeEN.memo) > 1000
  ) {
    throw new Error(
      `(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In 字段操作类型(FldOperationType))!值:${pobjFldOperationTypeEN.memo}(clsFldOperationTypeBL:CheckProperty4Update)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjFldOperationTypeEN.fldOpTypeId) == false &&
    undefined !== pobjFldOperationTypeEN.fldOpTypeId &&
    tzDataType.isString(pobjFldOperationTypeEN.fldOpTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[字段操作类型Id(fldOpTypeId)]的值:[${pobjFldOperationTypeEN.fldOpTypeId}], 非法,应该为字符型(In 字段操作类型(FldOperationType))!(clsFldOperationTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFldOperationTypeEN.fldOpTypeName) == false &&
    undefined !== pobjFldOperationTypeEN.fldOpTypeName &&
    tzDataType.isString(pobjFldOperationTypeEN.fldOpTypeName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[字段操作类型名称(fldOpTypeName)]的值:[${pobjFldOperationTypeEN.fldOpTypeName}], 非法,应该为字符型(In 字段操作类型(FldOperationType))!(clsFldOperationTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFldOperationTypeEN.fldOpTypeENName) == false &&
    undefined !== pobjFldOperationTypeEN.fldOpTypeENName &&
    tzDataType.isString(pobjFldOperationTypeEN.fldOpTypeENName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[字段操作类型英文名(fldOpTypeENName)]的值:[${pobjFldOperationTypeEN.fldOpTypeENName}], 非法,应该为字符型(In 字段操作类型(FldOperationType))!(clsFldOperationTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFldOperationTypeEN.memo) == false &&
    undefined !== pobjFldOperationTypeEN.memo &&
    tzDataType.isString(pobjFldOperationTypeEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[说明(memo)]的值:[${pobjFldOperationTypeEN.memo}], 非法,应该为字符型(In 字段操作类型(FldOperationType))!(clsFldOperationTypeBL:CheckProperty4Update)`,
    );
  }
  //检查主键是否为Null或者空!
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2025-05-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function FldOperationType_GetJSONStrByObj(
  pobjFldOperationTypeEN: clsFldOperationTypeEN,
): string {
  pobjFldOperationTypeEN.sfUpdFldSetStr = pobjFldOperationTypeEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjFldOperationTypeEN);
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
 * 日期:2025-05-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
 */
export function FldOperationType_GetObjLstByJSONStr(strJSON: string): Array<clsFldOperationTypeEN> {
  let arrFldOperationTypeObjLst = new Array<clsFldOperationTypeEN>();
  if (strJSON === '') {
    return arrFldOperationTypeObjLst;
  }
  try {
    arrFldOperationTypeObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrFldOperationTypeObjLst;
  }
  return arrFldOperationTypeObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-05-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrFldOperationTypeObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function FldOperationType_GetObjLstByJSONObjLst(
  arrFldOperationTypeObjLstS: Array<clsFldOperationTypeEN>,
): Array<clsFldOperationTypeEN> {
  const arrFldOperationTypeObjLst = new Array<clsFldOperationTypeEN>();
  for (const objInFor of arrFldOperationTypeObjLstS) {
    const obj1 = FldOperationType_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrFldOperationTypeObjLst.push(obj1);
  }
  return arrFldOperationTypeObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-05-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function FldOperationType_GetObjByJSONStr(strJSON: string): clsFldOperationTypeEN {
  let pobjFldOperationTypeEN = new clsFldOperationTypeEN();
  if (strJSON === '') {
    return pobjFldOperationTypeEN;
  }
  try {
    pobjFldOperationTypeEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjFldOperationTypeEN;
  }
  return pobjFldOperationTypeEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function FldOperationType_GetCombineCondition(
  objFldOperationTypeCond: clsFldOperationTypeEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objFldOperationTypeCond.dicFldComparisonOp,
      clsFldOperationTypeEN.con_FldOpTypeId,
    ) == true
  ) {
    const strComparisonOpFldOpTypeId: string =
      objFldOperationTypeCond.dicFldComparisonOp[clsFldOperationTypeEN.con_FldOpTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFldOperationTypeEN.con_FldOpTypeId,
      objFldOperationTypeCond.fldOpTypeId,
      strComparisonOpFldOpTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFldOperationTypeCond.dicFldComparisonOp,
      clsFldOperationTypeEN.con_FldOpTypeName,
    ) == true
  ) {
    const strComparisonOpFldOpTypeName: string =
      objFldOperationTypeCond.dicFldComparisonOp[clsFldOperationTypeEN.con_FldOpTypeName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFldOperationTypeEN.con_FldOpTypeName,
      objFldOperationTypeCond.fldOpTypeName,
      strComparisonOpFldOpTypeName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFldOperationTypeCond.dicFldComparisonOp,
      clsFldOperationTypeEN.con_FldOpTypeENName,
    ) == true
  ) {
    const strComparisonOpFldOpTypeENName: string =
      objFldOperationTypeCond.dicFldComparisonOp[clsFldOperationTypeEN.con_FldOpTypeENName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFldOperationTypeEN.con_FldOpTypeENName,
      objFldOperationTypeCond.fldOpTypeENName,
      strComparisonOpFldOpTypeENName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFldOperationTypeCond.dicFldComparisonOp,
      clsFldOperationTypeEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objFldOperationTypeCond.dicFldComparisonOp[clsFldOperationTypeEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFldOperationTypeEN.con_Memo,
      objFldOperationTypeCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--FldOperationType(字段操作类型),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strFldOpTypeName: 字段操作类型名称(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function FldOperationType_GetUniCondStr(
  objFldOperationTypeEN: clsFldOperationTypeEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and FldOpTypeName = '{0}'", objFldOperationTypeEN.fldOpTypeName);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--FldOperationType(字段操作类型),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strFldOpTypeName: 字段操作类型名称(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function FldOperationType_GetUniCondStr4Update(
  objFldOperationTypeEN: clsFldOperationTypeEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and FldOpTypeId <> '{0}'", objFldOperationTypeEN.fldOpTypeId);
  strWhereCond += Format(" and FldOpTypeName = '{0}'", objFldOperationTypeEN.fldOpTypeName);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objFldOperationTypeENS:源对象
 * @param objFldOperationTypeENT:目标对象
 */
export function FldOperationType_GetObjFromJsonObj(
  objFldOperationTypeENS: clsFldOperationTypeEN,
): clsFldOperationTypeEN {
  const objFldOperationTypeENT: clsFldOperationTypeEN = new clsFldOperationTypeEN();
  ObjectAssign(objFldOperationTypeENT, objFldOperationTypeENS);
  return objFldOperationTypeENT;
}
