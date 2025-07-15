﻿/**
 * 类名:clsConstraintTypeWApi
 * 表名:ConstraintType(00050332)
 * 版本:2025.05.12.1(服务器:WIN-SRV103-116)
 * 日期:2025/05/13 04:27:10
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
 * 约束类型(ConstraintType)
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
import { clsConstraintTypeEN } from '@/ts/L0Entity/Table_Field/clsConstraintTypeEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';

export const constraintType_Controller = 'ConstraintTypeApi';
export const constraintType_ConstructorName = 'constraintType';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strConstraintTypeId:关键字
 * @returns 对象
 **/
export async function ConstraintType_GetObjByConstraintTypeIdAsync(
  strConstraintTypeId: string,
): Promise<clsConstraintTypeEN | null> {
  const strThisFuncName = 'GetObjByConstraintTypeIdAsync';

  if (IsNullOrEmpty(strConstraintTypeId) == true) {
    const strMsg = Format(
      '参数:[strConstraintTypeId]不能为空!(In clsConstraintTypeWApi.GetObjByConstraintTypeIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strConstraintTypeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strConstraintTypeId]的长度:[{0}]不正确!(clsConstraintTypeWApi.GetObjByConstraintTypeIdAsync)',
      strConstraintTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByConstraintTypeId';
  const strUrl = GetWebApiUrl(constraintType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strConstraintTypeId,
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
      const objConstraintType = ConstraintType_GetObjFromJsonObj(returnObj);
      return objConstraintType;
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
        constraintType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        constraintType_ConstructorName,
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
 * @param strConstraintTypeId:所给的关键字
 * @returns 对象
 */
export async function ConstraintType_GetObjByConstraintTypeIdlocalStorage(
  strConstraintTypeId: string,
) {
  const strThisFuncName = 'GetObjByConstraintTypeIdlocalStorage';

  if (IsNullOrEmpty(strConstraintTypeId) == true) {
    const strMsg = Format(
      '参数:[strConstraintTypeId]不能为空!(In clsConstraintTypeWApi.GetObjByConstraintTypeIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strConstraintTypeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strConstraintTypeId]的长度:[{0}]不正确!(clsConstraintTypeWApi.GetObjByConstraintTypeIdlocalStorage)',
      strConstraintTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsConstraintTypeEN._CurrTabName, strConstraintTypeId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objConstraintTypeCache: clsConstraintTypeEN = JSON.parse(strTempObj);
    return objConstraintTypeCache;
  }
  try {
    const objConstraintType = await ConstraintType_GetObjByConstraintTypeIdAsync(
      strConstraintTypeId,
    );
    if (objConstraintType != null) {
      localStorage.setItem(strKey, JSON.stringify(objConstraintType));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objConstraintType;
    }
    return objConstraintType;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strConstraintTypeId,
      constraintType_ConstructorName,
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
 * @param strConstraintTypeId:所给的关键字
 * @returns 对象
 */
export async function ConstraintType_GetObjByConstraintTypeIdCache(
  strConstraintTypeId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByConstraintTypeIdCache';

  if (IsNullOrEmpty(strConstraintTypeId) == true) {
    const strMsg = Format(
      '参数:[strConstraintTypeId]不能为空!(In clsConstraintTypeWApi.GetObjByConstraintTypeIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strConstraintTypeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strConstraintTypeId]的长度:[{0}]不正确!(clsConstraintTypeWApi.GetObjByConstraintTypeIdCache)',
      strConstraintTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrConstraintTypeObjLstCache = await ConstraintType_GetObjLstCache();
  try {
    const arrConstraintTypeSel = arrConstraintTypeObjLstCache.filter(
      (x) => x.constraintTypeId == strConstraintTypeId,
    );
    let objConstraintType: clsConstraintTypeEN;
    if (arrConstraintTypeSel.length > 0) {
      objConstraintType = arrConstraintTypeSel[0];
      return objConstraintType;
    } else {
      if (bolTryAsyncOnce == true) {
        const objConstraintTypeConst = await ConstraintType_GetObjByConstraintTypeIdAsync(
          strConstraintTypeId,
        );
        if (objConstraintTypeConst != null) {
          ConstraintType_ReFreshThisCache();
          return objConstraintTypeConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strConstraintTypeId,
      constraintType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objConstraintType:所给的对象
 * @returns 对象
 */
export async function ConstraintType_UpdateObjInLstCache(objConstraintType: clsConstraintTypeEN) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrConstraintTypeObjLstCache = await ConstraintType_GetObjLstCache();
    const obj = arrConstraintTypeObjLstCache.find(
      (x) => x.constraintTypeName == objConstraintType.constraintTypeName,
    );
    if (obj != null) {
      objConstraintType.constraintTypeId = obj.constraintTypeId;
      ObjectAssign(obj, objConstraintType);
    } else {
      arrConstraintTypeObjLstCache.push(objConstraintType);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      constraintType_ConstructorName,
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
export function ConstraintType_SortFunDefa(a: clsConstraintTypeEN, b: clsConstraintTypeEN): number {
  return a.constraintTypeId.localeCompare(b.constraintTypeId);
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
export function ConstraintType_SortFunDefa2Fld(
  a: clsConstraintTypeEN,
  b: clsConstraintTypeEN,
): number {
  if (a.constraintTypeName == b.constraintTypeName)
    return a.constraintTypeNameEN.localeCompare(b.constraintTypeNameEN);
  else return a.constraintTypeName.localeCompare(b.constraintTypeName);
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
export function ConstraintType_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsConstraintTypeEN.con_ConstraintTypeId:
        return (a: clsConstraintTypeEN, b: clsConstraintTypeEN) => {
          return a.constraintTypeId.localeCompare(b.constraintTypeId);
        };
      case clsConstraintTypeEN.con_ConstraintTypeName:
        return (a: clsConstraintTypeEN, b: clsConstraintTypeEN) => {
          return a.constraintTypeName.localeCompare(b.constraintTypeName);
        };
      case clsConstraintTypeEN.con_ConstraintTypeNameEN:
        return (a: clsConstraintTypeEN, b: clsConstraintTypeEN) => {
          if (a.constraintTypeNameEN == null) return -1;
          if (b.constraintTypeNameEN == null) return 1;
          return a.constraintTypeNameEN.localeCompare(b.constraintTypeNameEN);
        };
      case clsConstraintTypeEN.con_InUse:
        return (a: clsConstraintTypeEN) => {
          if (a.inUse == true) return 1;
          else return -1;
        };
      case clsConstraintTypeEN.con_UpdDate:
        return (a: clsConstraintTypeEN, b: clsConstraintTypeEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsConstraintTypeEN.con_UpdUser:
        return (a: clsConstraintTypeEN, b: clsConstraintTypeEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsConstraintTypeEN.con_Memo:
        return (a: clsConstraintTypeEN, b: clsConstraintTypeEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[ConstraintType]中不存在!(in ${constraintType_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsConstraintTypeEN.con_ConstraintTypeId:
        return (a: clsConstraintTypeEN, b: clsConstraintTypeEN) => {
          return b.constraintTypeId.localeCompare(a.constraintTypeId);
        };
      case clsConstraintTypeEN.con_ConstraintTypeName:
        return (a: clsConstraintTypeEN, b: clsConstraintTypeEN) => {
          return b.constraintTypeName.localeCompare(a.constraintTypeName);
        };
      case clsConstraintTypeEN.con_ConstraintTypeNameEN:
        return (a: clsConstraintTypeEN, b: clsConstraintTypeEN) => {
          if (b.constraintTypeNameEN == null) return -1;
          if (a.constraintTypeNameEN == null) return 1;
          return b.constraintTypeNameEN.localeCompare(a.constraintTypeNameEN);
        };
      case clsConstraintTypeEN.con_InUse:
        return (b: clsConstraintTypeEN) => {
          if (b.inUse == true) return 1;
          else return -1;
        };
      case clsConstraintTypeEN.con_UpdDate:
        return (a: clsConstraintTypeEN, b: clsConstraintTypeEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsConstraintTypeEN.con_UpdUser:
        return (a: clsConstraintTypeEN, b: clsConstraintTypeEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsConstraintTypeEN.con_Memo:
        return (a: clsConstraintTypeEN, b: clsConstraintTypeEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[ConstraintType]中不存在!(in ${constraintType_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strConstraintTypeId:所给的关键字
 * @returns 对象
 */
export async function ConstraintType_GetNameByConstraintTypeIdCache(strConstraintTypeId: string) {
  if (IsNullOrEmpty(strConstraintTypeId) == true) {
    const strMsg = Format(
      '参数:[strConstraintTypeId]不能为空!(In clsConstraintTypeWApi.GetNameByConstraintTypeIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strConstraintTypeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strConstraintTypeId]的长度:[{0}]不正确!(clsConstraintTypeWApi.GetNameByConstraintTypeIdCache)',
      strConstraintTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrConstraintTypeObjLstCache = await ConstraintType_GetObjLstCache();
  if (arrConstraintTypeObjLstCache == null) return '';
  try {
    const arrConstraintTypeSel = arrConstraintTypeObjLstCache.filter(
      (x) => x.constraintTypeId == strConstraintTypeId,
    );
    let objConstraintType: clsConstraintTypeEN;
    if (arrConstraintTypeSel.length > 0) {
      objConstraintType = arrConstraintTypeSel[0];
      return objConstraintType.constraintTypeName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strConstraintTypeId,
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
export async function ConstraintType_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsConstraintTypeEN.con_ConstraintTypeId:
      return (obj: clsConstraintTypeEN) => {
        return obj.constraintTypeId === value;
      };
    case clsConstraintTypeEN.con_ConstraintTypeName:
      return (obj: clsConstraintTypeEN) => {
        return obj.constraintTypeName === value;
      };
    case clsConstraintTypeEN.con_ConstraintTypeNameEN:
      return (obj: clsConstraintTypeEN) => {
        return obj.constraintTypeNameEN === value;
      };
    case clsConstraintTypeEN.con_InUse:
      return (obj: clsConstraintTypeEN) => {
        return obj.inUse === value;
      };
    case clsConstraintTypeEN.con_UpdDate:
      return (obj: clsConstraintTypeEN) => {
        return obj.updDate === value;
      };
    case clsConstraintTypeEN.con_UpdUser:
      return (obj: clsConstraintTypeEN) => {
        return obj.updUser === value;
      };
    case clsConstraintTypeEN.con_Memo:
      return (obj: clsConstraintTypeEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[ConstraintType]中不存在!(in ${constraintType_ConstructorName}.${strThisFuncName})`;
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
export async function ConstraintType_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsConstraintTypeEN.con_ConstraintTypeId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsConstraintTypeEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsConstraintTypeEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strConstraintTypeId = strInValue;
  if (IsNullOrEmpty(strConstraintTypeId) == true) {
    return '';
  }
  const objConstraintType = await ConstraintType_GetObjByConstraintTypeIdCache(strConstraintTypeId);
  if (objConstraintType == null) return '';
  if (objConstraintType.GetFldValue(strOutFldName) == null) return '';
  return objConstraintType.GetFldValue(strOutFldName).toString();
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
export async function ConstraintType_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsConstraintTypeEN.con_ConstraintTypeId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrConstraintType = await ConstraintType_GetObjLstCache();
  if (arrConstraintType == null) return [];
  let arrConstraintTypeSel = arrConstraintType;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrConstraintTypeSel = arrConstraintTypeSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrConstraintTypeSel = arrConstraintTypeSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrConstraintTypeSel = arrConstraintTypeSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrConstraintTypeSel = arrConstraintTypeSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrConstraintTypeSel = arrConstraintTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrConstraintTypeSel = arrConstraintTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrConstraintTypeSel = arrConstraintTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrConstraintTypeSel = arrConstraintTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrConstraintTypeSel = arrConstraintTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrConstraintTypeSel = arrConstraintTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrConstraintTypeSel.length == 0) return [];
  return arrConstraintTypeSel.map((x) => x.constraintTypeId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function ConstraintType_GetFldValueAsync(
  strFldName: string,
  strWhereCond: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetFldValueAsync';
  const strAction = 'GetFldValue';
  const strUrl = GetWebApiUrl(constraintType_Controller, strAction);

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
        constraintType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        constraintType_ConstructorName,
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
export async function ConstraintType_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(constraintType_Controller, strAction);

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
        constraintType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        constraintType_ConstructorName,
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
export async function ConstraintType_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(constraintType_Controller, strAction);

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
        constraintType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        constraintType_ConstructorName,
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
export async function ConstraintType_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsConstraintTypeEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(constraintType_Controller, strAction);

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
      const objConstraintType = ConstraintType_GetObjFromJsonObj(returnObj);
      return objConstraintType;
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
        constraintType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        constraintType_ConstructorName,
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
export async function ConstraintType_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsConstraintTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsConstraintTypeEN.WhereFormat) == false) {
    strWhereCond = clsConstraintTypeEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsConstraintTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsConstraintTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrConstraintTypeExObjLstCache: Array<clsConstraintTypeEN> = CacheHelper.Get(strKey);
    const arrConstraintTypeObjLstT = ConstraintType_GetObjLstByJSONObjLst(
      arrConstraintTypeExObjLstCache,
    );
    return arrConstraintTypeObjLstT;
  }
  try {
    const arrConstraintTypeExObjLst = await ConstraintType_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrConstraintTypeExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrConstraintTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrConstraintTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      constraintType_ConstructorName,
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
export async function ConstraintType_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsConstraintTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsConstraintTypeEN.WhereFormat) == false) {
    strWhereCond = clsConstraintTypeEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsConstraintTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsConstraintTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrConstraintTypeExObjLstCache: Array<clsConstraintTypeEN> = JSON.parse(strTempObjLst);
    const arrConstraintTypeObjLstT = ConstraintType_GetObjLstByJSONObjLst(
      arrConstraintTypeExObjLstCache,
    );
    return arrConstraintTypeObjLstT;
  }
  try {
    const arrConstraintTypeExObjLst = await ConstraintType_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrConstraintTypeExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrConstraintTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrConstraintTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      constraintType_ConstructorName,
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
export async function ConstraintType_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsConstraintTypeEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrConstraintTypeObjLstCache: Array<clsConstraintTypeEN> = JSON.parse(strTempObjLst);
    return arrConstraintTypeObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function ConstraintType_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsConstraintTypeEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(constraintType_Controller, strAction);

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
          constraintType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ConstraintType_GetObjLstByJSONObjLst(returnObjLst);
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
        constraintType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        constraintType_ConstructorName,
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
export async function ConstraintType_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsConstraintTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsConstraintTypeEN.WhereFormat) == false) {
    strWhereCond = clsConstraintTypeEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsConstraintTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsConstraintTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrConstraintTypeExObjLstCache: Array<clsConstraintTypeEN> = JSON.parse(strTempObjLst);
    const arrConstraintTypeObjLstT = ConstraintType_GetObjLstByJSONObjLst(
      arrConstraintTypeExObjLstCache,
    );
    return arrConstraintTypeObjLstT;
  }
  try {
    const arrConstraintTypeExObjLst = await ConstraintType_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrConstraintTypeExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrConstraintTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrConstraintTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      constraintType_ConstructorName,
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
export async function ConstraintType_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsConstraintTypeEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrConstraintTypeObjLstCache: Array<clsConstraintTypeEN> = JSON.parse(strTempObjLst);
    return arrConstraintTypeObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function ConstraintType_GetObjLstCache(): Promise<Array<clsConstraintTypeEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrConstraintTypeObjLstCache;
  switch (clsConstraintTypeEN.CacheModeId) {
    case '04': //sessionStorage
      arrConstraintTypeObjLstCache = await ConstraintType_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrConstraintTypeObjLstCache = await ConstraintType_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrConstraintTypeObjLstCache = await ConstraintType_GetObjLstClientCache();
      break;
    default:
      arrConstraintTypeObjLstCache = await ConstraintType_GetObjLstClientCache();
      break;
  }
  return arrConstraintTypeObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function ConstraintType_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrConstraintTypeObjLstCache;
  switch (clsConstraintTypeEN.CacheModeId) {
    case '04': //sessionStorage
      arrConstraintTypeObjLstCache = await ConstraintType_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrConstraintTypeObjLstCache = await ConstraintType_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrConstraintTypeObjLstCache = null;
      break;
    default:
      arrConstraintTypeObjLstCache = null;
      break;
  }
  return arrConstraintTypeObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrConstraintTypeIdCond:条件对象
 * @returns 对象列表子集
 */
export async function ConstraintType_GetSubObjLstCache(objConstraintTypeCond: ConditionCollection) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrConstraintTypeObjLstCache = await ConstraintType_GetObjLstCache();
  let arrConstraintTypeSel = arrConstraintTypeObjLstCache;
  if (objConstraintTypeCond.GetConditions().length == 0) return arrConstraintTypeSel;
  try {
    //console.log(sstrKeys);
    for (const objCondition of objConstraintTypeCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrConstraintTypeSel = arrConstraintTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrConstraintTypeSel = arrConstraintTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrConstraintTypeSel = arrConstraintTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrConstraintTypeSel = arrConstraintTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrConstraintTypeSel = arrConstraintTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrConstraintTypeSel = arrConstraintTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrConstraintTypeSel = arrConstraintTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrConstraintTypeSel = arrConstraintTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrConstraintTypeSel = arrConstraintTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrConstraintTypeSel = arrConstraintTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrConstraintTypeSel = arrConstraintTypeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrConstraintTypeSel = arrConstraintTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrConstraintTypeSel = arrConstraintTypeSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrConstraintTypeSel = arrConstraintTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrConstraintTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objConstraintTypeCond),
      constraintType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsConstraintTypeEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrConstraintTypeId:关键字列表
 * @returns 对象列表
 **/
export async function ConstraintType_GetObjLstByConstraintTypeIdLstAsync(
  arrConstraintTypeId: Array<string>,
): Promise<Array<clsConstraintTypeEN>> {
  const strThisFuncName = 'GetObjLstByConstraintTypeIdLstAsync';
  const strAction = 'GetObjLstByConstraintTypeIdLst';
  const strUrl = GetWebApiUrl(constraintType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrConstraintTypeId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          constraintType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ConstraintType_GetObjLstByJSONObjLst(returnObjLst);
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
        constraintType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        constraintType_ConstructorName,
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
 * @param arrstrConstraintTypeIdLst:关键字列表
 * @returns 对象列表
 */
export async function ConstraintType_GetObjLstByConstraintTypeIdLstCache(
  arrConstraintTypeIdLst: Array<string>,
) {
  const strThisFuncName = 'GetObjLstByConstraintTypeIdLstCache';
  try {
    const arrConstraintTypeObjLstCache = await ConstraintType_GetObjLstCache();
    const arrConstraintTypeSel = arrConstraintTypeObjLstCache.filter(
      (x) => arrConstraintTypeIdLst.indexOf(x.constraintTypeId) > -1,
    );
    return arrConstraintTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrConstraintTypeIdLst.join(','),
      constraintType_ConstructorName,
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
export async function ConstraintType_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsConstraintTypeEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(constraintType_Controller, strAction);

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
          constraintType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ConstraintType_GetObjLstByJSONObjLst(returnObjLst);
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
        constraintType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        constraintType_ConstructorName,
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
export async function ConstraintType_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsConstraintTypeEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(constraintType_Controller, strAction);

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
          constraintType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ConstraintType_GetObjLstByJSONObjLst(returnObjLst);
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
        constraintType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        constraintType_ConstructorName,
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
export async function ConstraintType_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsConstraintTypeEN>();
  const arrConstraintTypeObjLstCache = await ConstraintType_GetObjLstCache();
  if (arrConstraintTypeObjLstCache.length == 0) return arrConstraintTypeObjLstCache;
  let arrConstraintTypeSel = arrConstraintTypeObjLstCache;
  const objConstraintTypeCond = objPagerPara.conditionCollection;
  if (objConstraintTypeCond == null) {
    const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return new Array<clsConstraintTypeEN>();
  }
  //console.log("clsConstraintTypeWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    for (const objCondition of objConstraintTypeCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrConstraintTypeSel = arrConstraintTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrConstraintTypeSel = arrConstraintTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrConstraintTypeSel = arrConstraintTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrConstraintTypeSel = arrConstraintTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrConstraintTypeSel = arrConstraintTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrConstraintTypeSel = arrConstraintTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrConstraintTypeSel = arrConstraintTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrConstraintTypeSel = arrConstraintTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrConstraintTypeSel = arrConstraintTypeSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrConstraintTypeSel = arrConstraintTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrConstraintTypeSel = arrConstraintTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrConstraintTypeSel = arrConstraintTypeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrConstraintTypeSel = arrConstraintTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrConstraintTypeSel = arrConstraintTypeSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrConstraintTypeSel = arrConstraintTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrConstraintTypeSel.length == 0) return arrConstraintTypeSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrConstraintTypeSel = arrConstraintTypeSel.sort(
        ConstraintType_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrConstraintTypeSel = arrConstraintTypeSel.sort(objPagerPara.sortFun);
    }
    arrConstraintTypeSel = arrConstraintTypeSel.slice(intStart, intEnd);
    return arrConstraintTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      constraintType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsConstraintTypeEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function ConstraintType_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsConstraintTypeEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsConstraintTypeEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(constraintType_Controller, strAction);

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
          constraintType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ConstraintType_GetObjLstByJSONObjLst(returnObjLst);
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
        constraintType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        constraintType_ConstructorName,
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
 * @param strConstraintTypeId:关键字
 * @returns 获取删除的结果
 **/
export async function ConstraintType_DelRecordAsync(strConstraintTypeId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(constraintType_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strConstraintTypeId);

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
        constraintType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        constraintType_ConstructorName,
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
 * @param arrConstraintTypeId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function ConstraintType_DelConstraintTypesAsync(
  arrConstraintTypeId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelConstraintTypesAsync';
  const strAction = 'DelConstraintTypes';
  const strUrl = GetWebApiUrl(constraintType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrConstraintTypeId, config);
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
        constraintType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        constraintType_ConstructorName,
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
export async function ConstraintType_DelConstraintTypesByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelConstraintTypesByCondAsync';
  const strAction = 'DelConstraintTypesByCond';
  const strUrl = GetWebApiUrl(constraintType_Controller, strAction);

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
        constraintType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        constraintType_ConstructorName,
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
 * @param objConstraintTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function ConstraintType_AddNewRecordAsync(
  objConstraintTypeEN: clsConstraintTypeEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objConstraintTypeEN);
  const strUrl = GetWebApiUrl(constraintType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objConstraintTypeEN, config);
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
        constraintType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        constraintType_ConstructorName,
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
 * @param objConstraintTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function ConstraintType_AddNewRecordWithMaxIdAsync(
  objConstraintTypeEN: clsConstraintTypeEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(constraintType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objConstraintTypeEN, config);
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
        constraintType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        constraintType_ConstructorName,
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
export async function ConstraintType_AddNewObjSave(
  objConstraintTypeEN: clsConstraintTypeEN,
): Promise<AddRecordResult> {
  const strThisFuncName = 'AddNewObjSave';
  try {
    ConstraintType_CheckPropertyNew(objConstraintTypeEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${constraintType_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    alert(strMsg);
    return { keyword: '', success: false }; //一定要有一个返回值,否则会出错!
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await ConstraintType_CheckUniCond4Add(objConstraintTypeEN);
    if (bolIsExistCond == false) {
      return { keyword: '', success: false };
    }
    let returnBool = false;
    const returnKeyId = await ConstraintType_AddNewRecordWithMaxIdAsync(objConstraintTypeEN);
    if (IsNullOrEmpty(returnKeyId) == false) {
      returnBool = true;
    }
    if (returnBool == true) {
      ConstraintType_ReFreshCache();
    } else {
      const strInfo = `添加[约束类型(ConstraintType)]记录不成功!`;
      //显示信息框
      throw strInfo;
    }
    return { keyword: returnKeyId, success: returnBool }; //一定要有一个返回值,否则会出错!
  } catch (e) {
    const strMsg = `添加记录不成功,${e}.(in ${constraintType_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export async function ConstraintType_CheckUniCond4Add(
  objConstraintTypeEN: clsConstraintTypeEN,
): Promise<boolean> {
  const strUniquenessCondition = ConstraintType_GetUniCondStr(objConstraintTypeEN);
  const bolIsExistCondition = await ConstraintType_IsExistRecordAsync(strUniquenessCondition);
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
export async function ConstraintType_CheckUniCond4Update(
  objConstraintTypeEN: clsConstraintTypeEN,
): Promise<boolean> {
  const strUniquenessCondition = ConstraintType_GetUniCondStr4Update(objConstraintTypeEN);
  const bolIsExistCondition = await ConstraintType_IsExistRecordAsync(strUniquenessCondition);
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
export async function ConstraintType_UpdateObjSave(
  objConstraintTypeEN: clsConstraintTypeEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateObjSave';
  objConstraintTypeEN.sfUpdFldSetStr = objConstraintTypeEN.updFldString; //设置哪些字段被修改(脏字段)
  if (
    objConstraintTypeEN.constraintTypeId == '' ||
    objConstraintTypeEN.constraintTypeId == undefined
  ) {
    console.error('关键字不能为空!');
    throw '关键字不能为空!';
  }
  try {
    ConstraintType_CheckProperty4Update(objConstraintTypeEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${constraintType_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await ConstraintType_CheckUniCond4Update(objConstraintTypeEN);
    if (bolIsExistCond == false) {
      return false;
    }
    const returnBool = await ConstraintType_UpdateRecordAsync(objConstraintTypeEN);
    if (returnBool == true) {
      ConstraintType_ReFreshCache();
    }
    return returnBool;
  } catch (e) {
    const strMsg = `修改记录不成功,${e}.(in ${constraintType_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objConstraintTypeEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function ConstraintType_AddNewRecordWithReturnKeyAsync(
  objConstraintTypeEN: clsConstraintTypeEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(constraintType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objConstraintTypeEN, config);
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
        constraintType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        constraintType_ConstructorName,
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
 * @param objConstraintTypeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function ConstraintType_UpdateRecordAsync(
  objConstraintTypeEN: clsConstraintTypeEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objConstraintTypeEN.sfUpdFldSetStr === undefined ||
    objConstraintTypeEN.sfUpdFldSetStr === null ||
    objConstraintTypeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objConstraintTypeEN.constraintTypeId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(constraintType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objConstraintTypeEN, config);
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
        constraintType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        constraintType_ConstructorName,
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
 * @param objConstraintTypeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function ConstraintType_EditRecordExAsync(
  objConstraintTypeEN: clsConstraintTypeEN,
): Promise<boolean> {
  const strThisFuncName = 'EditRecordExAsync';
  const strAction = 'EditRecordEx';
  if (
    objConstraintTypeEN.sfUpdFldSetStr === undefined ||
    objConstraintTypeEN.sfUpdFldSetStr === null ||
    objConstraintTypeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objConstraintTypeEN.constraintTypeId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(constraintType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objConstraintTypeEN, config);
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
        constraintType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        constraintType_ConstructorName,
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
 * @param objConstraintTypeEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function ConstraintType_UpdateWithConditionAsync(
  objConstraintTypeEN: clsConstraintTypeEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objConstraintTypeEN.sfUpdFldSetStr === undefined ||
    objConstraintTypeEN.sfUpdFldSetStr === null ||
    objConstraintTypeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objConstraintTypeEN.constraintTypeId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(constraintType_Controller, strAction);
  objConstraintTypeEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objConstraintTypeEN, config);
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
        constraintType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        constraintType_ConstructorName,
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
 * @param objstrConstraintTypeIdCond:条件对象
 * @returns 对象列表子集
 */
export async function ConstraintType_IsExistRecordCache(
  objConstraintTypeCond: ConditionCollection,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrConstraintTypeObjLstCache = await ConstraintType_GetObjLstCache();
  if (arrConstraintTypeObjLstCache == null) return false;
  let arrConstraintTypeSel = arrConstraintTypeObjLstCache;
  if (objConstraintTypeCond.GetConditions().length == 0)
    return arrConstraintTypeSel.length > 0 ? true : false;
  try {
    for (const objCondition of objConstraintTypeCond.GetConditions()) {
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
            arrConstraintTypeSel = arrConstraintTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrConstraintTypeSel = arrConstraintTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrConstraintTypeSel = arrConstraintTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrConstraintTypeSel = arrConstraintTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrConstraintTypeSel = arrConstraintTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrConstraintTypeSel = arrConstraintTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrConstraintTypeSel = arrConstraintTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrConstraintTypeSel = arrConstraintTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrConstraintTypeSel = arrConstraintTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrConstraintTypeSel = arrConstraintTypeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrConstraintTypeSel = arrConstraintTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrConstraintTypeSel = arrConstraintTypeSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrConstraintTypeSel = arrConstraintTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrConstraintTypeSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objConstraintTypeCond),
      constraintType_ConstructorName,
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
export async function ConstraintType_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(constraintType_Controller, strAction);

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
        constraintType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        constraintType_ConstructorName,
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
 * @param strConstraintTypeId:所给的关键字
 * @returns 对象
 */
export async function ConstraintType_IsExistCache(strConstraintTypeId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrConstraintTypeObjLstCache = await ConstraintType_GetObjLstCache();
  if (arrConstraintTypeObjLstCache == null) return false;
  try {
    const arrConstraintTypeSel = arrConstraintTypeObjLstCache.filter(
      (x) => x.constraintTypeId == strConstraintTypeId,
    );
    if (arrConstraintTypeSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strConstraintTypeId,
      constraintType_ConstructorName,
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
 * @param strConstraintTypeId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function ConstraintType_IsExistAsync(strConstraintTypeId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(constraintType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strConstraintTypeId,
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
        constraintType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        constraintType_ConstructorName,
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
export async function ConstraintType_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(constraintType_Controller, strAction);

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
        constraintType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        constraintType_ConstructorName,
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
 * @param objConstraintTypeCond:条件对象
 * @returns 对象列表记录数
 */
export async function ConstraintType_GetRecCountByCondCache(
  objConstraintTypeCond: ConditionCollection,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrConstraintTypeObjLstCache = await ConstraintType_GetObjLstCache();
  if (arrConstraintTypeObjLstCache == null) return 0;
  let arrConstraintTypeSel = arrConstraintTypeObjLstCache;
  if (objConstraintTypeCond.GetConditions().length == 0) return arrConstraintTypeSel.length;
  try {
    for (const objCondition of objConstraintTypeCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrConstraintTypeSel = arrConstraintTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrConstraintTypeSel = arrConstraintTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrConstraintTypeSel = arrConstraintTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrConstraintTypeSel = arrConstraintTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrConstraintTypeSel = arrConstraintTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrConstraintTypeSel = arrConstraintTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrConstraintTypeSel = arrConstraintTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrConstraintTypeSel = arrConstraintTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrConstraintTypeSel = arrConstraintTypeSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrConstraintTypeSel = arrConstraintTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrConstraintTypeSel = arrConstraintTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrConstraintTypeSel = arrConstraintTypeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrConstraintTypeSel = arrConstraintTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrConstraintTypeSel = arrConstraintTypeSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrConstraintTypeSel = arrConstraintTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrConstraintTypeSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objConstraintTypeCond),
      constraintType_ConstructorName,
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
export async function ConstraintType_GetMaxStrIdAsync(): Promise<string> {
  const strThisFuncName = 'GetMaxStrIdAsync';
  const strAction = 'GetMaxStrId';
  const strUrl = GetWebApiUrl(constraintType_Controller, strAction);

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
        constraintType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        constraintType_ConstructorName,
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
export async function ConstraintType_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(constraintType_Controller, strAction);

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
        constraintType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        constraintType_ConstructorName,
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
export function ConstraintType_GetWebApiUrl(strController: string, strAction: string): string {
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
export function ConstraintType_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功!');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clsConstraintTypeEN._CurrTabName;
  switch (clsConstraintTypeEN.CacheModeId) {
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
  clsConstraintTypeEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
}

/**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export function ConstraintType_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsConstraintTypeEN._CurrTabName;
    switch (clsConstraintTypeEN.CacheModeId) {
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
    clsConstraintTypeEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export function ConstraintType_GetLastRefreshTime(): string {
  if (clsConstraintTypeEN._RefreshTimeLst.length == 0) return '';
  return clsConstraintTypeEN._RefreshTimeLst[clsConstraintTypeEN._RefreshTimeLst.length - 1];
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export async function ConstraintType_BindDdl_ConstraintTypeIdInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
) {
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_ConstraintTypeIdInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_ConstraintTypeIdInDivCache");
  const arrObjLstSel = await ConstraintType_GetObjLstCache();
  if (arrObjLstSel == null) return;
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsConstraintTypeEN.con_ConstraintTypeId,
    clsConstraintTypeEN.con_ConstraintTypeName,
    '约束类型...',
  );
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export async function ConstraintType_GetArrConstraintType() {
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_ConstraintTypeIdInDivCache");
  const arrConstraintType = new Array<clsConstraintTypeEN>();
  const arrObjLstSel = await ConstraintType_GetObjLstCache();
  if (arrObjLstSel == null) return null;
  const obj0 = new clsConstraintTypeEN();
  obj0.constraintTypeId = '0';
  obj0.constraintTypeName = '选约束类型...';
  arrConstraintType.push(obj0);
  arrObjLstSel.forEach((x) => arrConstraintType.push(x));
  return arrConstraintType;
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function ConstraintType_CheckPropertyNew(pobjConstraintTypeEN: clsConstraintTypeEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjConstraintTypeEN.constraintTypeName) === true) {
    throw new Error(
      `(errid:Watl000411)字段[约束类型名]不能为空(In 约束类型)!(clsConstraintTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    null === pobjConstraintTypeEN.inUse ||
    (pobjConstraintTypeEN.inUse != null && pobjConstraintTypeEN.inUse.toString() === '')
  ) {
    throw new Error(
      `(errid:Watl000411)字段[是否在用]不能为空(In 约束类型)!(clsConstraintTypeBL:CheckPropertyNew0)`,
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjConstraintTypeEN.constraintTypeId) == false &&
    GetStrLen(pobjConstraintTypeEN.constraintTypeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000413)字段[约束类型Id(constraintTypeId)]的长度不能超过2(In 约束类型(ConstraintType))!值:${pobjConstraintTypeEN.constraintTypeId}(clsConstraintTypeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjConstraintTypeEN.constraintTypeName) == false &&
    GetStrLen(pobjConstraintTypeEN.constraintTypeName) > 50
  ) {
    throw new Error(
      `(errid:Watl000413)字段[约束类型名(constraintTypeName)]的长度不能超过50(In 约束类型(ConstraintType))!值:${pobjConstraintTypeEN.constraintTypeName}(clsConstraintTypeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjConstraintTypeEN.constraintTypeNameEN) == false &&
    GetStrLen(pobjConstraintTypeEN.constraintTypeNameEN) > 50
  ) {
    throw new Error(
      `(errid:Watl000413)字段[约束类型英文名(constraintTypeNameEN)]的长度不能超过50(In 约束类型(ConstraintType))!值:${pobjConstraintTypeEN.constraintTypeNameEN}(clsConstraintTypeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjConstraintTypeEN.updDate) == false &&
    GetStrLen(pobjConstraintTypeEN.updDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 约束类型(ConstraintType))!值:${pobjConstraintTypeEN.updDate}(clsConstraintTypeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjConstraintTypeEN.updUser) == false &&
    GetStrLen(pobjConstraintTypeEN.updUser) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改者(updUser)]的长度不能超过20(In 约束类型(ConstraintType))!值:${pobjConstraintTypeEN.updUser}(clsConstraintTypeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjConstraintTypeEN.memo) == false &&
    GetStrLen(pobjConstraintTypeEN.memo) > 1000
  ) {
    throw new Error(
      `(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In 约束类型(ConstraintType))!值:${pobjConstraintTypeEN.memo}(clsConstraintTypeBL:CheckPropertyNew)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjConstraintTypeEN.constraintTypeId) == false &&
    undefined !== pobjConstraintTypeEN.constraintTypeId &&
    tzDataType.isString(pobjConstraintTypeEN.constraintTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[约束类型Id(constraintTypeId)]的值:[${pobjConstraintTypeEN.constraintTypeId}], 非法,应该为字符型(In 约束类型(ConstraintType))!(clsConstraintTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjConstraintTypeEN.constraintTypeName) == false &&
    undefined !== pobjConstraintTypeEN.constraintTypeName &&
    tzDataType.isString(pobjConstraintTypeEN.constraintTypeName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[约束类型名(constraintTypeName)]的值:[${pobjConstraintTypeEN.constraintTypeName}], 非法,应该为字符型(In 约束类型(ConstraintType))!(clsConstraintTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjConstraintTypeEN.constraintTypeNameEN) == false &&
    undefined !== pobjConstraintTypeEN.constraintTypeNameEN &&
    tzDataType.isString(pobjConstraintTypeEN.constraintTypeNameEN) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[约束类型英文名(constraintTypeNameEN)]的值:[${pobjConstraintTypeEN.constraintTypeNameEN}], 非法,应该为字符型(In 约束类型(ConstraintType))!(clsConstraintTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjConstraintTypeEN.inUse &&
    undefined !== pobjConstraintTypeEN.inUse &&
    tzDataType.isBoolean(pobjConstraintTypeEN.inUse) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否在用(inUse)]的值:[${pobjConstraintTypeEN.inUse}], 非法,应该为布尔型(In 约束类型(ConstraintType))!(clsConstraintTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjConstraintTypeEN.updDate) == false &&
    undefined !== pobjConstraintTypeEN.updDate &&
    tzDataType.isString(pobjConstraintTypeEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjConstraintTypeEN.updDate}], 非法,应该为字符型(In 约束类型(ConstraintType))!(clsConstraintTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjConstraintTypeEN.updUser) == false &&
    undefined !== pobjConstraintTypeEN.updUser &&
    tzDataType.isString(pobjConstraintTypeEN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改者(updUser)]的值:[${pobjConstraintTypeEN.updUser}], 非法,应该为字符型(In 约束类型(ConstraintType))!(clsConstraintTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjConstraintTypeEN.memo) == false &&
    undefined !== pobjConstraintTypeEN.memo &&
    tzDataType.isString(pobjConstraintTypeEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[说明(memo)]的值:[${pobjConstraintTypeEN.memo}], 非法,应该为字符型(In 约束类型(ConstraintType))!(clsConstraintTypeBL:CheckPropertyNew0)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function ConstraintType_CheckProperty4Update(pobjConstraintTypeEN: clsConstraintTypeEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjConstraintTypeEN.constraintTypeId) == false &&
    GetStrLen(pobjConstraintTypeEN.constraintTypeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000416)字段[约束类型Id(constraintTypeId)]的长度不能超过2(In 约束类型(ConstraintType))!值:${pobjConstraintTypeEN.constraintTypeId}(clsConstraintTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjConstraintTypeEN.constraintTypeName) == false &&
    GetStrLen(pobjConstraintTypeEN.constraintTypeName) > 50
  ) {
    throw new Error(
      `(errid:Watl000416)字段[约束类型名(constraintTypeName)]的长度不能超过50(In 约束类型(ConstraintType))!值:${pobjConstraintTypeEN.constraintTypeName}(clsConstraintTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjConstraintTypeEN.constraintTypeNameEN) == false &&
    GetStrLen(pobjConstraintTypeEN.constraintTypeNameEN) > 50
  ) {
    throw new Error(
      `(errid:Watl000416)字段[约束类型英文名(constraintTypeNameEN)]的长度不能超过50(In 约束类型(ConstraintType))!值:${pobjConstraintTypeEN.constraintTypeNameEN}(clsConstraintTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjConstraintTypeEN.updDate) == false &&
    GetStrLen(pobjConstraintTypeEN.updDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 约束类型(ConstraintType))!值:${pobjConstraintTypeEN.updDate}(clsConstraintTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjConstraintTypeEN.updUser) == false &&
    GetStrLen(pobjConstraintTypeEN.updUser) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改者(updUser)]的长度不能超过20(In 约束类型(ConstraintType))!值:${pobjConstraintTypeEN.updUser}(clsConstraintTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjConstraintTypeEN.memo) == false &&
    GetStrLen(pobjConstraintTypeEN.memo) > 1000
  ) {
    throw new Error(
      `(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In 约束类型(ConstraintType))!值:${pobjConstraintTypeEN.memo}(clsConstraintTypeBL:CheckProperty4Update)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjConstraintTypeEN.constraintTypeId) == false &&
    undefined !== pobjConstraintTypeEN.constraintTypeId &&
    tzDataType.isString(pobjConstraintTypeEN.constraintTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[约束类型Id(constraintTypeId)]的值:[${pobjConstraintTypeEN.constraintTypeId}], 非法,应该为字符型(In 约束类型(ConstraintType))!(clsConstraintTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjConstraintTypeEN.constraintTypeName) == false &&
    undefined !== pobjConstraintTypeEN.constraintTypeName &&
    tzDataType.isString(pobjConstraintTypeEN.constraintTypeName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[约束类型名(constraintTypeName)]的值:[${pobjConstraintTypeEN.constraintTypeName}], 非法,应该为字符型(In 约束类型(ConstraintType))!(clsConstraintTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjConstraintTypeEN.constraintTypeNameEN) == false &&
    undefined !== pobjConstraintTypeEN.constraintTypeNameEN &&
    tzDataType.isString(pobjConstraintTypeEN.constraintTypeNameEN) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[约束类型英文名(constraintTypeNameEN)]的值:[${pobjConstraintTypeEN.constraintTypeNameEN}], 非法,应该为字符型(In 约束类型(ConstraintType))!(clsConstraintTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjConstraintTypeEN.inUse &&
    undefined !== pobjConstraintTypeEN.inUse &&
    tzDataType.isBoolean(pobjConstraintTypeEN.inUse) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否在用(inUse)]的值:[${pobjConstraintTypeEN.inUse}], 非法,应该为布尔型(In 约束类型(ConstraintType))!(clsConstraintTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjConstraintTypeEN.updDate) == false &&
    undefined !== pobjConstraintTypeEN.updDate &&
    tzDataType.isString(pobjConstraintTypeEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjConstraintTypeEN.updDate}], 非法,应该为字符型(In 约束类型(ConstraintType))!(clsConstraintTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjConstraintTypeEN.updUser) == false &&
    undefined !== pobjConstraintTypeEN.updUser &&
    tzDataType.isString(pobjConstraintTypeEN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改者(updUser)]的值:[${pobjConstraintTypeEN.updUser}], 非法,应该为字符型(In 约束类型(ConstraintType))!(clsConstraintTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjConstraintTypeEN.memo) == false &&
    undefined !== pobjConstraintTypeEN.memo &&
    tzDataType.isString(pobjConstraintTypeEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[说明(memo)]的值:[${pobjConstraintTypeEN.memo}], 非法,应该为字符型(In 约束类型(ConstraintType))!(clsConstraintTypeBL:CheckProperty4Update)`,
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
export function ConstraintType_GetJSONStrByObj(pobjConstraintTypeEN: clsConstraintTypeEN): string {
  pobjConstraintTypeEN.sfUpdFldSetStr = pobjConstraintTypeEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjConstraintTypeEN);
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
export function ConstraintType_GetObjLstByJSONStr(strJSON: string): Array<clsConstraintTypeEN> {
  let arrConstraintTypeObjLst = new Array<clsConstraintTypeEN>();
  if (strJSON === '') {
    return arrConstraintTypeObjLst;
  }
  try {
    arrConstraintTypeObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrConstraintTypeObjLst;
  }
  return arrConstraintTypeObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-05-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrConstraintTypeObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function ConstraintType_GetObjLstByJSONObjLst(
  arrConstraintTypeObjLstS: Array<clsConstraintTypeEN>,
): Array<clsConstraintTypeEN> {
  const arrConstraintTypeObjLst = new Array<clsConstraintTypeEN>();
  for (const objInFor of arrConstraintTypeObjLstS) {
    const obj1 = ConstraintType_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrConstraintTypeObjLst.push(obj1);
  }
  return arrConstraintTypeObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-05-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function ConstraintType_GetObjByJSONStr(strJSON: string): clsConstraintTypeEN {
  let pobjConstraintTypeEN = new clsConstraintTypeEN();
  if (strJSON === '') {
    return pobjConstraintTypeEN;
  }
  try {
    pobjConstraintTypeEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjConstraintTypeEN;
  }
  return pobjConstraintTypeEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function ConstraintType_GetCombineCondition(
  objConstraintTypeCond: clsConstraintTypeEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objConstraintTypeCond.dicFldComparisonOp,
      clsConstraintTypeEN.con_ConstraintTypeId,
    ) == true
  ) {
    const strComparisonOpConstraintTypeId: string =
      objConstraintTypeCond.dicFldComparisonOp[clsConstraintTypeEN.con_ConstraintTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsConstraintTypeEN.con_ConstraintTypeId,
      objConstraintTypeCond.constraintTypeId,
      strComparisonOpConstraintTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objConstraintTypeCond.dicFldComparisonOp,
      clsConstraintTypeEN.con_ConstraintTypeName,
    ) == true
  ) {
    const strComparisonOpConstraintTypeName: string =
      objConstraintTypeCond.dicFldComparisonOp[clsConstraintTypeEN.con_ConstraintTypeName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsConstraintTypeEN.con_ConstraintTypeName,
      objConstraintTypeCond.constraintTypeName,
      strComparisonOpConstraintTypeName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objConstraintTypeCond.dicFldComparisonOp,
      clsConstraintTypeEN.con_ConstraintTypeNameEN,
    ) == true
  ) {
    const strComparisonOpConstraintTypeNameEN: string =
      objConstraintTypeCond.dicFldComparisonOp[clsConstraintTypeEN.con_ConstraintTypeNameEN];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsConstraintTypeEN.con_ConstraintTypeNameEN,
      objConstraintTypeCond.constraintTypeNameEN,
      strComparisonOpConstraintTypeNameEN,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objConstraintTypeCond.dicFldComparisonOp,
      clsConstraintTypeEN.con_InUse,
    ) == true
  ) {
    if (objConstraintTypeCond.inUse == true) {
      strWhereCond += Format(" And {0} = '1'", clsConstraintTypeEN.con_InUse);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsConstraintTypeEN.con_InUse);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objConstraintTypeCond.dicFldComparisonOp,
      clsConstraintTypeEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objConstraintTypeCond.dicFldComparisonOp[clsConstraintTypeEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsConstraintTypeEN.con_UpdDate,
      objConstraintTypeCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objConstraintTypeCond.dicFldComparisonOp,
      clsConstraintTypeEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objConstraintTypeCond.dicFldComparisonOp[clsConstraintTypeEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsConstraintTypeEN.con_UpdUser,
      objConstraintTypeCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objConstraintTypeCond.dicFldComparisonOp,
      clsConstraintTypeEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objConstraintTypeCond.dicFldComparisonOp[clsConstraintTypeEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsConstraintTypeEN.con_Memo,
      objConstraintTypeCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--ConstraintType(约束类型),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strConstraintTypeName: 约束类型名(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function ConstraintType_GetUniCondStr(objConstraintTypeEN: clsConstraintTypeEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and ConstraintTypeName = '{0}'", objConstraintTypeEN.constraintTypeName);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--ConstraintType(约束类型),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strConstraintTypeName: 约束类型名(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function ConstraintType_GetUniCondStr4Update(
  objConstraintTypeEN: clsConstraintTypeEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and ConstraintTypeId <> '{0}'", objConstraintTypeEN.constraintTypeId);
  strWhereCond += Format(" and ConstraintTypeName = '{0}'", objConstraintTypeEN.constraintTypeName);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objConstraintTypeENS:源对象
 * @param objConstraintTypeENT:目标对象
 */
export function ConstraintType_GetObjFromJsonObj(
  objConstraintTypeENS: clsConstraintTypeEN,
): clsConstraintTypeEN {
  const objConstraintTypeENT: clsConstraintTypeEN = new clsConstraintTypeEN();
  ObjectAssign(objConstraintTypeENT, objConstraintTypeENS);
  return objConstraintTypeENT;
}
