/**
 * 类名:clsFieldTypeWApi
 * 表名:FieldType(00050173)
 * 版本:2025.05.03.1(服务器:WIN-SRV103-116)
 * 日期:2025/05/04 15:35:50
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
 * 字段类型(FieldType)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2025年05月04日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty, GetStrLen, tzDataType, Format } from '@/ts/PubFun/clsString';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { CacheHelper } from '@/ts/PubFun/CacheHelper';
import { ConditionCollection } from '@/ts/PubFun/ConditionCollection';
import { clsOrderByData } from '@/ts/PubFun/clsOrderByData';
import {
  BindDdl_ObjLstInDivObj,
  GetExceptionStr,
  myShowErrorMsg,
  ObjectAssign,
} from '@/ts/PubFun/clsCommFunc4Web';
import { clsFieldTypeEN } from '@/ts/L0Entity/Table_Field/clsFieldTypeEN';
import { AddRecordResult } from '@/ts/PubFun/AddRecordResult';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';

export const fieldType_Controller = 'FieldTypeApi';
export const fieldType_ConstructorName = 'fieldType';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strFieldTypeId:关键字
 * @returns 对象
 **/
export async function FieldType_GetObjByFieldTypeIdAsync(
  strFieldTypeId: string,
): Promise<clsFieldTypeEN | null> {
  const strThisFuncName = 'GetObjByFieldTypeIdAsync';

  if (IsNullOrEmpty(strFieldTypeId) == true) {
    const strMsg = Format(
      '参数:[strFieldTypeId]不能为空!(In clsFieldTypeWApi.GetObjByFieldTypeIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strFieldTypeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strFieldTypeId]的长度:[{0}]不正确!(clsFieldTypeWApi.GetObjByFieldTypeIdAsync)',
      strFieldTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByFieldTypeId';
  const strUrl = GetWebApiUrl(fieldType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strFieldTypeId,
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
      const objFieldType = FieldType_GetObjFromJsonObj(returnObj);
      return objFieldType;
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
        fieldType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fieldType_ConstructorName,
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
 * @param strFieldTypeId:所给的关键字
 * @returns 对象
 */
export async function FieldType_GetObjByFieldTypeIdlocalStorage(strFieldTypeId: string) {
  const strThisFuncName = 'GetObjByFieldTypeIdlocalStorage';

  if (IsNullOrEmpty(strFieldTypeId) == true) {
    const strMsg = Format(
      '参数:[strFieldTypeId]不能为空!(In clsFieldTypeWApi.GetObjByFieldTypeIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strFieldTypeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strFieldTypeId]的长度:[{0}]不正确!(clsFieldTypeWApi.GetObjByFieldTypeIdlocalStorage)',
      strFieldTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsFieldTypeEN._CurrTabName, strFieldTypeId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objFieldTypeCache: clsFieldTypeEN = JSON.parse(strTempObj);
    return objFieldTypeCache;
  }
  try {
    const objFieldType = await FieldType_GetObjByFieldTypeIdAsync(strFieldTypeId);
    if (objFieldType != null) {
      localStorage.setItem(strKey, JSON.stringify(objFieldType));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objFieldType;
    }
    return objFieldType;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strFieldTypeId,
      fieldType_ConstructorName,
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
 * @param strFieldTypeId:所给的关键字
 * @returns 对象
 */
export async function FieldType_GetObjByFieldTypeIdCache(
  strFieldTypeId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByFieldTypeIdCache';

  if (IsNullOrEmpty(strFieldTypeId) == true) {
    const strMsg = Format(
      '参数:[strFieldTypeId]不能为空!(In clsFieldTypeWApi.GetObjByFieldTypeIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strFieldTypeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strFieldTypeId]的长度:[{0}]不正确!(clsFieldTypeWApi.GetObjByFieldTypeIdCache)',
      strFieldTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrFieldTypeObjLstCache = await FieldType_GetObjLstCache();
  try {
    const arrFieldTypeSel = arrFieldTypeObjLstCache.filter((x) => x.fieldTypeId == strFieldTypeId);
    let objFieldType: clsFieldTypeEN;
    if (arrFieldTypeSel.length > 0) {
      objFieldType = arrFieldTypeSel[0];
      return objFieldType;
    } else {
      if (bolTryAsyncOnce == true) {
        const objFieldTypeConst = await FieldType_GetObjByFieldTypeIdAsync(strFieldTypeId);
        if (objFieldTypeConst != null) {
          FieldType_ReFreshThisCache();
          return objFieldTypeConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strFieldTypeId,
      fieldType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objFieldType:所给的对象
 * @returns 对象
 */
export async function FieldType_UpdateObjInLstCache(objFieldType: clsFieldTypeEN) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrFieldTypeObjLstCache = await FieldType_GetObjLstCache();
    const obj = arrFieldTypeObjLstCache.find((x) => x.fieldTypeId == objFieldType.fieldTypeId);
    if (obj != null) {
      objFieldType.fieldTypeId = obj.fieldTypeId;
      ObjectAssign(obj, objFieldType);
    } else {
      arrFieldTypeObjLstCache.push(objFieldType);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      fieldType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-05-04
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function FieldType_SortFunDefa(a: clsFieldTypeEN, b: clsFieldTypeEN): number {
  return a.fieldTypeId.localeCompare(b.fieldTypeId);
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2025-05-04
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function FieldType_SortFunDefa2Fld(a: clsFieldTypeEN, b: clsFieldTypeEN): number {
  if (a.fieldTypeName == b.fieldTypeName) return a.fieldTypeENName.localeCompare(b.fieldTypeENName);
  else return a.fieldTypeName.localeCompare(b.fieldTypeName);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-05-04
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function FieldType_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsFieldTypeEN.con_FieldTypeId:
        return (a: clsFieldTypeEN, b: clsFieldTypeEN) => {
          return a.fieldTypeId.localeCompare(b.fieldTypeId);
        };
      case clsFieldTypeEN.con_FieldTypeName:
        return (a: clsFieldTypeEN, b: clsFieldTypeEN) => {
          return a.fieldTypeName.localeCompare(b.fieldTypeName);
        };
      case clsFieldTypeEN.con_FieldTypeENName:
        return (a: clsFieldTypeEN, b: clsFieldTypeEN) => {
          if (a.fieldTypeENName == null) return -1;
          if (b.fieldTypeENName == null) return 1;
          return a.fieldTypeENName.localeCompare(b.fieldTypeENName);
        };
      case clsFieldTypeEN.con_OrderNum:
        return (a: clsFieldTypeEN, b: clsFieldTypeEN) => {
          return a.orderNum - b.orderNum;
        };
      case clsFieldTypeEN.con_Memo:
        return (a: clsFieldTypeEN, b: clsFieldTypeEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[FieldType]中不存在!(in ${fieldType_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsFieldTypeEN.con_FieldTypeId:
        return (a: clsFieldTypeEN, b: clsFieldTypeEN) => {
          return b.fieldTypeId.localeCompare(a.fieldTypeId);
        };
      case clsFieldTypeEN.con_FieldTypeName:
        return (a: clsFieldTypeEN, b: clsFieldTypeEN) => {
          return b.fieldTypeName.localeCompare(a.fieldTypeName);
        };
      case clsFieldTypeEN.con_FieldTypeENName:
        return (a: clsFieldTypeEN, b: clsFieldTypeEN) => {
          if (b.fieldTypeENName == null) return -1;
          if (a.fieldTypeENName == null) return 1;
          return b.fieldTypeENName.localeCompare(a.fieldTypeENName);
        };
      case clsFieldTypeEN.con_OrderNum:
        return (a: clsFieldTypeEN, b: clsFieldTypeEN) => {
          return b.orderNum - a.orderNum;
        };
      case clsFieldTypeEN.con_Memo:
        return (a: clsFieldTypeEN, b: clsFieldTypeEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[FieldType]中不存在!(in ${fieldType_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strFieldTypeId:所给的关键字
 * @returns 对象
 */
export async function FieldType_GetNameByFieldTypeIdCache(strFieldTypeId: string) {
  if (IsNullOrEmpty(strFieldTypeId) == true) {
    const strMsg = Format(
      '参数:[strFieldTypeId]不能为空!(In clsFieldTypeWApi.GetNameByFieldTypeIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strFieldTypeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strFieldTypeId]的长度:[{0}]不正确!(clsFieldTypeWApi.GetNameByFieldTypeIdCache)',
      strFieldTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrFieldTypeObjLstCache = await FieldType_GetObjLstCache();
  if (arrFieldTypeObjLstCache == null) return '';
  try {
    const arrFieldTypeSel = arrFieldTypeObjLstCache.filter((x) => x.fieldTypeId == strFieldTypeId);
    let objFieldType: clsFieldTypeEN;
    if (arrFieldTypeSel.length > 0) {
      objFieldType = arrFieldTypeSel[0];
      return objFieldType.fieldTypeName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strFieldTypeId,
    );
    console.error(strMsg);
    alert(strMsg);
  }
  return '';
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-05-04
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function FieldType_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsFieldTypeEN.con_FieldTypeId:
      return (obj: clsFieldTypeEN) => {
        return obj.fieldTypeId === value;
      };
    case clsFieldTypeEN.con_FieldTypeName:
      return (obj: clsFieldTypeEN) => {
        return obj.fieldTypeName === value;
      };
    case clsFieldTypeEN.con_FieldTypeENName:
      return (obj: clsFieldTypeEN) => {
        return obj.fieldTypeENName === value;
      };
    case clsFieldTypeEN.con_OrderNum:
      return (obj: clsFieldTypeEN) => {
        return obj.orderNum === value;
      };
    case clsFieldTypeEN.con_Memo:
      return (obj: clsFieldTypeEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[FieldType]中不存在!(in ${fieldType_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2025-05-04
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 * @returns 返回一个输出字段值
 */
export async function FieldType_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsFieldTypeEN.con_FieldTypeId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsFieldTypeEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsFieldTypeEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strFieldTypeId = strInValue;
  if (IsNullOrEmpty(strFieldTypeId) == true) {
    return '';
  }
  const objFieldType = await FieldType_GetObjByFieldTypeIdCache(strFieldTypeId);
  if (objFieldType == null) return '';
  if (objFieldType.GetFldValue(strOutFldName) == null) return '';
  return objFieldType.GetFldValue(strOutFldName).toString();
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2025-05-04
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 * @returns 返回一个关键字值列表
 */
export async function FieldType_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsFieldTypeEN.con_FieldTypeId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrFieldType = await FieldType_GetObjLstCache();
  if (arrFieldType == null) return [];
  let arrFieldTypeSel = arrFieldType;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrFieldTypeSel = arrFieldTypeSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrFieldTypeSel = arrFieldTypeSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrFieldTypeSel = arrFieldTypeSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrFieldTypeSel = arrFieldTypeSel.filter((x) => x.GetFldValue(strInFldName) == strInValue);
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrFieldTypeSel = arrFieldTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrFieldTypeSel = arrFieldTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrFieldTypeSel = arrFieldTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrFieldTypeSel = arrFieldTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrFieldTypeSel = arrFieldTypeSel.filter((x) => x.GetFldValue(strInFldName) > strInValue);
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrFieldTypeSel = arrFieldTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrFieldTypeSel.length == 0) return [];
  return arrFieldTypeSel.map((x) => x.fieldTypeId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function FieldType_GetFldValueAsync(
  strFldName: string,
  strWhereCond: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetFldValueAsync';
  const strAction = 'GetFldValue';
  const strUrl = GetWebApiUrl(fieldType_Controller, strAction);

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
        fieldType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fieldType_ConstructorName,
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
export async function FieldType_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(fieldType_Controller, strAction);

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
        fieldType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fieldType_ConstructorName,
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
export async function FieldType_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(fieldType_Controller, strAction);

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
        fieldType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fieldType_ConstructorName,
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
export async function FieldType_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsFieldTypeEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(fieldType_Controller, strAction);

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
      const objFieldType = FieldType_GetObjFromJsonObj(returnObj);
      return objFieldType;
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
        fieldType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fieldType_ConstructorName,
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
export async function FieldType_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsFieldTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsFieldTypeEN.WhereFormat) == false) {
    strWhereCond = clsFieldTypeEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsFieldTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsFieldTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrFieldTypeExObjLstCache: Array<clsFieldTypeEN> = CacheHelper.Get(strKey);
    const arrFieldTypeObjLstT = FieldType_GetObjLstByJSONObjLst(arrFieldTypeExObjLstCache);
    return arrFieldTypeObjLstT;
  }
  try {
    const arrFieldTypeExObjLst = await FieldType_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrFieldTypeExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrFieldTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrFieldTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      fieldType_ConstructorName,
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
export async function FieldType_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsFieldTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsFieldTypeEN.WhereFormat) == false) {
    strWhereCond = clsFieldTypeEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsFieldTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsFieldTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrFieldTypeExObjLstCache: Array<clsFieldTypeEN> = JSON.parse(strTempObjLst);
    const arrFieldTypeObjLstT = FieldType_GetObjLstByJSONObjLst(arrFieldTypeExObjLstCache);
    return arrFieldTypeObjLstT;
  }
  try {
    const arrFieldTypeExObjLst = await FieldType_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrFieldTypeExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrFieldTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrFieldTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      fieldType_ConstructorName,
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
export async function FieldType_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsFieldTypeEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrFieldTypeObjLstCache: Array<clsFieldTypeEN> = JSON.parse(strTempObjLst);
    return arrFieldTypeObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function FieldType_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsFieldTypeEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(fieldType_Controller, strAction);

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
          fieldType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = FieldType_GetObjLstByJSONObjLst(returnObjLst);
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
        fieldType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fieldType_ConstructorName,
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
export async function FieldType_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsFieldTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsFieldTypeEN.WhereFormat) == false) {
    strWhereCond = clsFieldTypeEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsFieldTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsFieldTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrFieldTypeExObjLstCache: Array<clsFieldTypeEN> = JSON.parse(strTempObjLst);
    const arrFieldTypeObjLstT = FieldType_GetObjLstByJSONObjLst(arrFieldTypeExObjLstCache);
    return arrFieldTypeObjLstT;
  }
  try {
    const arrFieldTypeExObjLst = await FieldType_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrFieldTypeExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrFieldTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrFieldTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      fieldType_ConstructorName,
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
export async function FieldType_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsFieldTypeEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrFieldTypeObjLstCache: Array<clsFieldTypeEN> = JSON.parse(strTempObjLst);
    return arrFieldTypeObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function FieldType_GetObjLstCache(): Promise<Array<clsFieldTypeEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrFieldTypeObjLstCache;
  switch (clsFieldTypeEN.CacheModeId) {
    case '04': //sessionStorage
      arrFieldTypeObjLstCache = await FieldType_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrFieldTypeObjLstCache = await FieldType_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrFieldTypeObjLstCache = await FieldType_GetObjLstClientCache();
      break;
    default:
      arrFieldTypeObjLstCache = await FieldType_GetObjLstClientCache();
      break;
  }
  return arrFieldTypeObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function FieldType_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrFieldTypeObjLstCache;
  switch (clsFieldTypeEN.CacheModeId) {
    case '04': //sessionStorage
      arrFieldTypeObjLstCache = await FieldType_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrFieldTypeObjLstCache = await FieldType_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrFieldTypeObjLstCache = null;
      break;
    default:
      arrFieldTypeObjLstCache = null;
      break;
  }
  return arrFieldTypeObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrFieldTypeIdCond:条件对象
 * @returns 对象列表子集
 */
export async function FieldType_GetSubObjLstCache(objFieldTypeCond: ConditionCollection) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrFieldTypeObjLstCache = await FieldType_GetObjLstCache();
  let arrFieldTypeSel = arrFieldTypeObjLstCache;
  if (objFieldTypeCond.GetConditions().length == 0) return arrFieldTypeSel;
  try {
    //console.log(sstrKeys);
    for (const objCondition of objFieldTypeCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrFieldTypeSel = arrFieldTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrFieldTypeSel = arrFieldTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrFieldTypeSel = arrFieldTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrFieldTypeSel = arrFieldTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrFieldTypeSel = arrFieldTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrFieldTypeSel = arrFieldTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrFieldTypeSel = arrFieldTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrFieldTypeSel = arrFieldTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrFieldTypeSel = arrFieldTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrFieldTypeSel = arrFieldTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrFieldTypeSel = arrFieldTypeSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrFieldTypeSel = arrFieldTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrFieldTypeSel = arrFieldTypeSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrFieldTypeSel = arrFieldTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrFieldTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objFieldTypeCond),
      fieldType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsFieldTypeEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrFieldTypeId:关键字列表
 * @returns 对象列表
 **/
export async function FieldType_GetObjLstByFieldTypeIdLstAsync(
  arrFieldTypeId: Array<string>,
): Promise<Array<clsFieldTypeEN>> {
  const strThisFuncName = 'GetObjLstByFieldTypeIdLstAsync';
  const strAction = 'GetObjLstByFieldTypeIdLst';
  const strUrl = GetWebApiUrl(fieldType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrFieldTypeId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          fieldType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = FieldType_GetObjLstByJSONObjLst(returnObjLst);
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
        fieldType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fieldType_ConstructorName,
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
 * @param arrstrFieldTypeIdLst:关键字列表
 * @returns 对象列表
 */
export async function FieldType_GetObjLstByFieldTypeIdLstCache(arrFieldTypeIdLst: Array<string>) {
  const strThisFuncName = 'GetObjLstByFieldTypeIdLstCache';
  try {
    const arrFieldTypeObjLstCache = await FieldType_GetObjLstCache();
    const arrFieldTypeSel = arrFieldTypeObjLstCache.filter(
      (x) => arrFieldTypeIdLst.indexOf(x.fieldTypeId) > -1,
    );
    return arrFieldTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrFieldTypeIdLst.join(','),
      fieldType_ConstructorName,
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
export async function FieldType_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsFieldTypeEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(fieldType_Controller, strAction);

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
          fieldType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = FieldType_GetObjLstByJSONObjLst(returnObjLst);
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
        fieldType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fieldType_ConstructorName,
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
export async function FieldType_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsFieldTypeEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(fieldType_Controller, strAction);

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
          fieldType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = FieldType_GetObjLstByJSONObjLst(returnObjLst);
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
        fieldType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fieldType_ConstructorName,
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
export async function FieldType_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsFieldTypeEN>();
  const arrFieldTypeObjLstCache = await FieldType_GetObjLstCache();
  if (arrFieldTypeObjLstCache.length == 0) return arrFieldTypeObjLstCache;
  let arrFieldTypeSel = arrFieldTypeObjLstCache;
  const objFieldTypeCond = objPagerPara.conditionCollection;
  if (objFieldTypeCond == null) {
    const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return new Array<clsFieldTypeEN>();
  }
  //console.log("clsFieldTypeWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    for (const objCondition of objFieldTypeCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrFieldTypeSel = arrFieldTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrFieldTypeSel = arrFieldTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrFieldTypeSel = arrFieldTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrFieldTypeSel = arrFieldTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrFieldTypeSel = arrFieldTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrFieldTypeSel = arrFieldTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrFieldTypeSel = arrFieldTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrFieldTypeSel = arrFieldTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrFieldTypeSel = arrFieldTypeSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrFieldTypeSel = arrFieldTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrFieldTypeSel = arrFieldTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrFieldTypeSel = arrFieldTypeSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrFieldTypeSel = arrFieldTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrFieldTypeSel = arrFieldTypeSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrFieldTypeSel = arrFieldTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrFieldTypeSel.length == 0) return arrFieldTypeSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrFieldTypeSel = arrFieldTypeSel.sort(FieldType_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrFieldTypeSel = arrFieldTypeSel.sort(objPagerPara.sortFun);
    }
    arrFieldTypeSel = arrFieldTypeSel.slice(intStart, intEnd);
    return arrFieldTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      fieldType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsFieldTypeEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function FieldType_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsFieldTypeEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsFieldTypeEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(fieldType_Controller, strAction);

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
          fieldType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = FieldType_GetObjLstByJSONObjLst(returnObjLst);
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
        fieldType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fieldType_ConstructorName,
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
 * @param strFieldTypeId:关键字
 * @returns 获取删除的结果
 **/
export async function FieldType_DelRecordAsync(strFieldTypeId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(fieldType_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strFieldTypeId);

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
        fieldType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fieldType_ConstructorName,
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
 * @param arrFieldTypeId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function FieldType_DelFieldTypesAsync(arrFieldTypeId: Array<string>): Promise<number> {
  const strThisFuncName = 'DelFieldTypesAsync';
  const strAction = 'DelFieldTypes';
  const strUrl = GetWebApiUrl(fieldType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrFieldTypeId, config);
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
        fieldType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fieldType_ConstructorName,
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
export async function FieldType_DelFieldTypesByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'DelFieldTypesByCondAsync';
  const strAction = 'DelFieldTypesByCond';
  const strUrl = GetWebApiUrl(fieldType_Controller, strAction);

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
        fieldType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fieldType_ConstructorName,
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
 * @param objFieldTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function FieldType_AddNewRecordAsync(
  objFieldTypeEN: clsFieldTypeEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  if (objFieldTypeEN.fieldTypeId === null || objFieldTypeEN.fieldTypeId === '') {
    const strMsg = '需要的对象的关键字为空,不能添加!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objFieldTypeEN);
  const strUrl = GetWebApiUrl(fieldType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objFieldTypeEN, config);
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
        fieldType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fieldType_ConstructorName,
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
 * @param objFieldTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function FieldType_AddNewRecordWithMaxIdAsync(
  objFieldTypeEN: clsFieldTypeEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(fieldType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objFieldTypeEN, config);
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
        fieldType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fieldType_ConstructorName,
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
 * 把所给的关键字列表相关的记录移顶
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GoTopAsync)
 * @param objFieldTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function FieldType_GoTopAsync(objOrderByData: clsOrderByData): Promise<boolean> {
  const strThisFuncName = 'GoTopAsync';
  let strMsg = '';
  const strAction = 'GoTop';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表置顶时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(fieldType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objOrderByData, config);
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
        fieldType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fieldType_ConstructorName,
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
 * 把所给的关键字列表相关的记录上移
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpMoveAsync)
 * @param objFieldTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function FieldType_UpMoveAsync(objOrderByData: clsOrderByData): Promise<boolean> {
  const strThisFuncName = 'UpMoveAsync';
  let strMsg = '';
  const strAction = 'UpMove';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表上移时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objFieldTypeEN);
  const strUrl = GetWebApiUrl(fieldType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objOrderByData, config);
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
        fieldType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fieldType_ConstructorName,
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
 * 把所给的关键字列表相关的记录下移
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DownMoveAsync)
 * @param objFieldTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function FieldType_DownMoveAsync(objOrderByData: clsOrderByData): Promise<boolean> {
  const strThisFuncName = 'DownMoveAsync';
  let strMsg = '';
  const strAction = 'DownMove';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表下移时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objFieldTypeEN);
  const strUrl = GetWebApiUrl(fieldType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objOrderByData, config);
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
        fieldType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fieldType_ConstructorName,
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
export async function FieldType_AddNewObjSave(
  objFieldTypeEN: clsFieldTypeEN,
): Promise<AddRecordResult> {
  const strThisFuncName = 'AddNewObjSave';
  try {
    FieldType_CheckPropertyNew(objFieldTypeEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${fieldType_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    alert(strMsg);
    return { keyword: '', success: false }; //一定要有一个返回值,否则会出错!
  }
  try {
    //检查唯一性条件
    let returnBool = false;
    const bolIsExist = await FieldType_IsExistAsync(objFieldTypeEN.fieldTypeId);
    if (bolIsExist == true) {
      const strMsg = Format('添加记录时,关键字：{0}已经存在!', objFieldTypeEN.fieldTypeId);
      console.error(strMsg);
      throw strMsg;
    }
    returnBool = await FieldType_AddNewRecordAsync(objFieldTypeEN);
    if (returnBool == true) {
      FieldType_ReFreshCache();
    } else {
      const strInfo = `添加[字段类型(FieldType)]记录不成功!`;
      //显示信息框
      throw strInfo;
    }
    return { keyword: objFieldTypeEN.fieldTypeId, success: returnBool }; //一定要有一个返回值,否则会出错!
  } catch (e) {
    const strMsg = `添加记录不成功,${e}.(in ${fieldType_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/** 修改记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjSave)
 **/
export async function FieldType_UpdateObjSave(objFieldTypeEN: clsFieldTypeEN): Promise<boolean> {
  const strThisFuncName = 'UpdateObjSave';
  objFieldTypeEN.sfUpdFldSetStr = objFieldTypeEN.updFldString; //设置哪些字段被修改(脏字段)
  if (objFieldTypeEN.fieldTypeId == '' || objFieldTypeEN.fieldTypeId == undefined) {
    console.error('关键字不能为空!');
    throw '关键字不能为空!';
  }
  try {
    FieldType_CheckProperty4Update(objFieldTypeEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${fieldType_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
  try {
    //检查唯一性条件
    const returnBool = await FieldType_UpdateRecordAsync(objFieldTypeEN);
    if (returnBool == true) {
      FieldType_ReFreshCache();
    }
    return returnBool;
  } catch (e) {
    const strMsg = `修改记录不成功,${e}.(in ${fieldType_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 把所给的关键字列表相关的记录移底
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GoBottomAsync)
 * @param objFieldTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function FieldType_GoBottomAsync(objOrderByData: clsOrderByData): Promise<boolean> {
  const strThisFuncName = 'GoBottomAsync';
  let strMsg = '';
  const strAction = 'GoBottom';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表置底时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objFieldTypeEN);
  const strUrl = GetWebApiUrl(fieldType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objOrderByData, config);
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
        fieldType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fieldType_ConstructorName,
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
 * 把列表记录重序
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReOrderAsync)
 * @param objFieldTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function FieldType_ReOrderAsync(objOrderByData: clsOrderByData): Promise<boolean> {
  const strThisFuncName = 'ReOrderAsync';
  const strAction = 'ReOrder';
  //var strJSON = JSON.stringify(objFieldTypeEN);
  const strUrl = GetWebApiUrl(fieldType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objOrderByData, config);
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
        fieldType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fieldType_ConstructorName,
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
 * @param objFieldTypeEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function FieldType_AddNewRecordWithReturnKeyAsync(
  objFieldTypeEN: clsFieldTypeEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(fieldType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objFieldTypeEN, config);
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
        fieldType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fieldType_ConstructorName,
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
 * @param objFieldTypeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function FieldType_UpdateRecordAsync(
  objFieldTypeEN: clsFieldTypeEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objFieldTypeEN.sfUpdFldSetStr === undefined ||
    objFieldTypeEN.sfUpdFldSetStr === null ||
    objFieldTypeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objFieldTypeEN.fieldTypeId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(fieldType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objFieldTypeEN, config);
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
        fieldType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fieldType_ConstructorName,
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
 * @param objFieldTypeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function FieldType_EditRecordExAsync(
  objFieldTypeEN: clsFieldTypeEN,
): Promise<boolean> {
  const strThisFuncName = 'EditRecordExAsync';
  const strAction = 'EditRecordEx';
  if (
    objFieldTypeEN.sfUpdFldSetStr === undefined ||
    objFieldTypeEN.sfUpdFldSetStr === null ||
    objFieldTypeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objFieldTypeEN.fieldTypeId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(fieldType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objFieldTypeEN, config);
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
        fieldType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fieldType_ConstructorName,
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
 * @param objFieldTypeEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function FieldType_UpdateWithConditionAsync(
  objFieldTypeEN: clsFieldTypeEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objFieldTypeEN.sfUpdFldSetStr === undefined ||
    objFieldTypeEN.sfUpdFldSetStr === null ||
    objFieldTypeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objFieldTypeEN.fieldTypeId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(fieldType_Controller, strAction);
  objFieldTypeEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objFieldTypeEN, config);
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
        fieldType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fieldType_ConstructorName,
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
 * @param objstrFieldTypeIdCond:条件对象
 * @returns 对象列表子集
 */
export async function FieldType_IsExistRecordCache(objFieldTypeCond: ConditionCollection) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrFieldTypeObjLstCache = await FieldType_GetObjLstCache();
  if (arrFieldTypeObjLstCache == null) return false;
  let arrFieldTypeSel = arrFieldTypeObjLstCache;
  if (objFieldTypeCond.GetConditions().length == 0)
    return arrFieldTypeSel.length > 0 ? true : false;
  try {
    for (const objCondition of objFieldTypeCond.GetConditions()) {
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
            arrFieldTypeSel = arrFieldTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrFieldTypeSel = arrFieldTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrFieldTypeSel = arrFieldTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrFieldTypeSel = arrFieldTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrFieldTypeSel = arrFieldTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrFieldTypeSel = arrFieldTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrFieldTypeSel = arrFieldTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrFieldTypeSel = arrFieldTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrFieldTypeSel = arrFieldTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrFieldTypeSel = arrFieldTypeSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrFieldTypeSel = arrFieldTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrFieldTypeSel = arrFieldTypeSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrFieldTypeSel = arrFieldTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrFieldTypeSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objFieldTypeCond),
      fieldType_ConstructorName,
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
export async function FieldType_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(fieldType_Controller, strAction);

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
        fieldType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fieldType_ConstructorName,
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
 * @param strFieldTypeId:所给的关键字
 * @returns 对象
 */
export async function FieldType_IsExistCache(strFieldTypeId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrFieldTypeObjLstCache = await FieldType_GetObjLstCache();
  if (arrFieldTypeObjLstCache == null) return false;
  try {
    const arrFieldTypeSel = arrFieldTypeObjLstCache.filter((x) => x.fieldTypeId == strFieldTypeId);
    if (arrFieldTypeSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strFieldTypeId,
      fieldType_ConstructorName,
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
 * @param strFieldTypeId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function FieldType_IsExistAsync(strFieldTypeId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(fieldType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strFieldTypeId,
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
        fieldType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fieldType_ConstructorName,
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
export async function FieldType_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(fieldType_Controller, strAction);

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
        fieldType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fieldType_ConstructorName,
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
 * @param objFieldTypeCond:条件对象
 * @returns 对象列表记录数
 */
export async function FieldType_GetRecCountByCondCache(objFieldTypeCond: ConditionCollection) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrFieldTypeObjLstCache = await FieldType_GetObjLstCache();
  if (arrFieldTypeObjLstCache == null) return 0;
  let arrFieldTypeSel = arrFieldTypeObjLstCache;
  if (objFieldTypeCond.GetConditions().length == 0) return arrFieldTypeSel.length;
  try {
    for (const objCondition of objFieldTypeCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrFieldTypeSel = arrFieldTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrFieldTypeSel = arrFieldTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrFieldTypeSel = arrFieldTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrFieldTypeSel = arrFieldTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrFieldTypeSel = arrFieldTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrFieldTypeSel = arrFieldTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrFieldTypeSel = arrFieldTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrFieldTypeSel = arrFieldTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrFieldTypeSel = arrFieldTypeSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrFieldTypeSel = arrFieldTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrFieldTypeSel = arrFieldTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrFieldTypeSel = arrFieldTypeSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrFieldTypeSel = arrFieldTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrFieldTypeSel = arrFieldTypeSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrFieldTypeSel = arrFieldTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrFieldTypeSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objFieldTypeCond),
      fieldType_ConstructorName,
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
export async function FieldType_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(fieldType_Controller, strAction);

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
        fieldType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fieldType_ConstructorName,
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
export function FieldType_GetWebApiUrl(strController: string, strAction: string): string {
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
export function FieldType_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功!');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clsFieldTypeEN._CurrTabName;
  switch (clsFieldTypeEN.CacheModeId) {
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
  clsFieldTypeEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
}

/**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export function FieldType_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsFieldTypeEN._CurrTabName;
    switch (clsFieldTypeEN.CacheModeId) {
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
    clsFieldTypeEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export function FieldType_GetLastRefreshTime(): string {
  if (clsFieldTypeEN._RefreshTimeLst.length == 0) return '';
  return clsFieldTypeEN._RefreshTimeLst[clsFieldTypeEN._RefreshTimeLst.length - 1];
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export async function FieldType_BindDdl_FieldTypeIdInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
) {
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_FieldTypeIdInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_FieldTypeIdInDivCache");
  let arrObjLstSel = await FieldType_GetObjLstCache();
  if (arrObjLstSel == null) return;
  arrObjLstSel = arrObjLstSel.sort((x, y) => x.orderNum - y.orderNum);
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsFieldTypeEN.con_FieldTypeId,
    clsFieldTypeEN.con_FieldTypeName,
    '字段类型...',
  );
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export async function FieldType_GetArrFieldType() {
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_FieldTypeIdInDivCache");
  const arrFieldType = new Array<clsFieldTypeEN>();
  let arrObjLstSel = await FieldType_GetObjLstCache();
  if (arrObjLstSel == null) return null;
  arrObjLstSel = arrObjLstSel.sort((x, y) => x.orderNum - y.orderNum);
  const obj0 = new clsFieldTypeEN();
  obj0.fieldTypeId = '0';
  obj0.fieldTypeName = '选字段类型...';
  arrFieldType.push(obj0);
  arrObjLstSel.forEach((x) => arrFieldType.push(x));
  return arrFieldType;
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function FieldType_CheckPropertyNew(pobjFieldTypeEN: clsFieldTypeEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjFieldTypeEN.fieldTypeName) === true) {
    throw new Error(
      `(errid:Watl000411)字段[字段类型名]不能为空(In 字段类型)!(clsFieldTypeBL:CheckPropertyNew0)`,
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjFieldTypeEN.fieldTypeId) == false &&
    GetStrLen(pobjFieldTypeEN.fieldTypeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000413)字段[字段类型Id(fieldTypeId)]的长度不能超过2(In 字段类型(FieldType))!值:${pobjFieldTypeEN.fieldTypeId}(clsFieldTypeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFieldTypeEN.fieldTypeName) == false &&
    GetStrLen(pobjFieldTypeEN.fieldTypeName) > 30
  ) {
    throw new Error(
      `(errid:Watl000413)字段[字段类型名(fieldTypeName)]的长度不能超过30(In 字段类型(FieldType))!值:${pobjFieldTypeEN.fieldTypeName}(clsFieldTypeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFieldTypeEN.fieldTypeENName) == false &&
    GetStrLen(pobjFieldTypeEN.fieldTypeENName) > 30
  ) {
    throw new Error(
      `(errid:Watl000413)字段[字段类型英文名(fieldTypeENName)]的长度不能超过30(In 字段类型(FieldType))!值:${pobjFieldTypeEN.fieldTypeENName}(clsFieldTypeBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjFieldTypeEN.memo) == false && GetStrLen(pobjFieldTypeEN.memo) > 1000) {
    throw new Error(
      `(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In 字段类型(FieldType))!值:${pobjFieldTypeEN.memo}(clsFieldTypeBL:CheckPropertyNew)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjFieldTypeEN.fieldTypeId) == false &&
    undefined !== pobjFieldTypeEN.fieldTypeId &&
    tzDataType.isString(pobjFieldTypeEN.fieldTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[字段类型Id(fieldTypeId)]的值:[${pobjFieldTypeEN.fieldTypeId}], 非法,应该为字符型(In 字段类型(FieldType))!(clsFieldTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFieldTypeEN.fieldTypeName) == false &&
    undefined !== pobjFieldTypeEN.fieldTypeName &&
    tzDataType.isString(pobjFieldTypeEN.fieldTypeName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[字段类型名(fieldTypeName)]的值:[${pobjFieldTypeEN.fieldTypeName}], 非法,应该为字符型(In 字段类型(FieldType))!(clsFieldTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFieldTypeEN.fieldTypeENName) == false &&
    undefined !== pobjFieldTypeEN.fieldTypeENName &&
    tzDataType.isString(pobjFieldTypeEN.fieldTypeENName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[字段类型英文名(fieldTypeENName)]的值:[${pobjFieldTypeEN.fieldTypeENName}], 非法,应该为字符型(In 字段类型(FieldType))!(clsFieldTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjFieldTypeEN.orderNum &&
    undefined !== pobjFieldTypeEN.orderNum &&
    tzDataType.isNumber(pobjFieldTypeEN.orderNum) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[序号(orderNum)]的值:[${pobjFieldTypeEN.orderNum}], 非法,应该为数值型(In 字段类型(FieldType))!(clsFieldTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFieldTypeEN.memo) == false &&
    undefined !== pobjFieldTypeEN.memo &&
    tzDataType.isString(pobjFieldTypeEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[说明(memo)]的值:[${pobjFieldTypeEN.memo}], 非法,应该为字符型(In 字段类型(FieldType))!(clsFieldTypeBL:CheckPropertyNew0)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function FieldType_CheckProperty4Update(pobjFieldTypeEN: clsFieldTypeEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjFieldTypeEN.fieldTypeId) == false &&
    GetStrLen(pobjFieldTypeEN.fieldTypeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000416)字段[字段类型Id(fieldTypeId)]的长度不能超过2(In 字段类型(FieldType))!值:${pobjFieldTypeEN.fieldTypeId}(clsFieldTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFieldTypeEN.fieldTypeName) == false &&
    GetStrLen(pobjFieldTypeEN.fieldTypeName) > 30
  ) {
    throw new Error(
      `(errid:Watl000416)字段[字段类型名(fieldTypeName)]的长度不能超过30(In 字段类型(FieldType))!值:${pobjFieldTypeEN.fieldTypeName}(clsFieldTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFieldTypeEN.fieldTypeENName) == false &&
    GetStrLen(pobjFieldTypeEN.fieldTypeENName) > 30
  ) {
    throw new Error(
      `(errid:Watl000416)字段[字段类型英文名(fieldTypeENName)]的长度不能超过30(In 字段类型(FieldType))!值:${pobjFieldTypeEN.fieldTypeENName}(clsFieldTypeBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjFieldTypeEN.memo) == false && GetStrLen(pobjFieldTypeEN.memo) > 1000) {
    throw new Error(
      `(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In 字段类型(FieldType))!值:${pobjFieldTypeEN.memo}(clsFieldTypeBL:CheckProperty4Update)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjFieldTypeEN.fieldTypeId) == false &&
    undefined !== pobjFieldTypeEN.fieldTypeId &&
    tzDataType.isString(pobjFieldTypeEN.fieldTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[字段类型Id(fieldTypeId)]的值:[${pobjFieldTypeEN.fieldTypeId}], 非法,应该为字符型(In 字段类型(FieldType))!(clsFieldTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFieldTypeEN.fieldTypeName) == false &&
    undefined !== pobjFieldTypeEN.fieldTypeName &&
    tzDataType.isString(pobjFieldTypeEN.fieldTypeName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[字段类型名(fieldTypeName)]的值:[${pobjFieldTypeEN.fieldTypeName}], 非法,应该为字符型(In 字段类型(FieldType))!(clsFieldTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFieldTypeEN.fieldTypeENName) == false &&
    undefined !== pobjFieldTypeEN.fieldTypeENName &&
    tzDataType.isString(pobjFieldTypeEN.fieldTypeENName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[字段类型英文名(fieldTypeENName)]的值:[${pobjFieldTypeEN.fieldTypeENName}], 非法,应该为字符型(In 字段类型(FieldType))!(clsFieldTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjFieldTypeEN.orderNum &&
    undefined !== pobjFieldTypeEN.orderNum &&
    tzDataType.isNumber(pobjFieldTypeEN.orderNum) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[序号(orderNum)]的值:[${pobjFieldTypeEN.orderNum}], 非法,应该为数值型(In 字段类型(FieldType))!(clsFieldTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFieldTypeEN.memo) == false &&
    undefined !== pobjFieldTypeEN.memo &&
    tzDataType.isString(pobjFieldTypeEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[说明(memo)]的值:[${pobjFieldTypeEN.memo}], 非法,应该为字符型(In 字段类型(FieldType))!(clsFieldTypeBL:CheckProperty4Update)`,
    );
  }
  //检查主键是否为Null或者空!
  if (
    IsNullOrEmpty(pobjFieldTypeEN.fieldTypeId) === true ||
    pobjFieldTypeEN.fieldTypeId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000064)字段[字段类型Id]不能为空(In 字段类型)!(clsFieldTypeBL:CheckProperty4Update)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2025-05-04
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function FieldType_GetJSONStrByObj(pobjFieldTypeEN: clsFieldTypeEN): string {
  pobjFieldTypeEN.sfUpdFldSetStr = pobjFieldTypeEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjFieldTypeEN);
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
 * 日期:2025-05-04
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
 */
export function FieldType_GetObjLstByJSONStr(strJSON: string): Array<clsFieldTypeEN> {
  let arrFieldTypeObjLst = new Array<clsFieldTypeEN>();
  if (strJSON === '') {
    return arrFieldTypeObjLst;
  }
  try {
    arrFieldTypeObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrFieldTypeObjLst;
  }
  return arrFieldTypeObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-05-04
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrFieldTypeObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function FieldType_GetObjLstByJSONObjLst(
  arrFieldTypeObjLstS: Array<clsFieldTypeEN>,
): Array<clsFieldTypeEN> {
  const arrFieldTypeObjLst = new Array<clsFieldTypeEN>();
  for (const objInFor of arrFieldTypeObjLstS) {
    const obj1 = FieldType_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrFieldTypeObjLst.push(obj1);
  }
  return arrFieldTypeObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-05-04
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function FieldType_GetObjByJSONStr(strJSON: string): clsFieldTypeEN {
  let pobjFieldTypeEN = new clsFieldTypeEN();
  if (strJSON === '') {
    return pobjFieldTypeEN;
  }
  try {
    pobjFieldTypeEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjFieldTypeEN;
  }
  return pobjFieldTypeEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function FieldType_GetCombineCondition(objFieldTypeCond: clsFieldTypeEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objFieldTypeCond.dicFldComparisonOp,
      clsFieldTypeEN.con_FieldTypeId,
    ) == true
  ) {
    const strComparisonOpFieldTypeId: string =
      objFieldTypeCond.dicFldComparisonOp[clsFieldTypeEN.con_FieldTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFieldTypeEN.con_FieldTypeId,
      objFieldTypeCond.fieldTypeId,
      strComparisonOpFieldTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFieldTypeCond.dicFldComparisonOp,
      clsFieldTypeEN.con_FieldTypeName,
    ) == true
  ) {
    const strComparisonOpFieldTypeName: string =
      objFieldTypeCond.dicFldComparisonOp[clsFieldTypeEN.con_FieldTypeName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFieldTypeEN.con_FieldTypeName,
      objFieldTypeCond.fieldTypeName,
      strComparisonOpFieldTypeName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFieldTypeCond.dicFldComparisonOp,
      clsFieldTypeEN.con_FieldTypeENName,
    ) == true
  ) {
    const strComparisonOpFieldTypeENName: string =
      objFieldTypeCond.dicFldComparisonOp[clsFieldTypeEN.con_FieldTypeENName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFieldTypeEN.con_FieldTypeENName,
      objFieldTypeCond.fieldTypeENName,
      strComparisonOpFieldTypeENName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFieldTypeCond.dicFldComparisonOp,
      clsFieldTypeEN.con_OrderNum,
    ) == true
  ) {
    const strComparisonOpOrderNum: string =
      objFieldTypeCond.dicFldComparisonOp[clsFieldTypeEN.con_OrderNum];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsFieldTypeEN.con_OrderNum,
      objFieldTypeCond.orderNum,
      strComparisonOpOrderNum,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFieldTypeCond.dicFldComparisonOp,
      clsFieldTypeEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objFieldTypeCond.dicFldComparisonOp[clsFieldTypeEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFieldTypeEN.con_Memo,
      objFieldTypeCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objFieldTypeENS:源对象
 * @param objFieldTypeENT:目标对象
 */
export function FieldType_GetObjFromJsonObj(objFieldTypeENS: clsFieldTypeEN): clsFieldTypeEN {
  const objFieldTypeENT: clsFieldTypeEN = new clsFieldTypeEN();
  ObjectAssign(objFieldTypeENT, objFieldTypeENS);
  return objFieldTypeENT;
}
