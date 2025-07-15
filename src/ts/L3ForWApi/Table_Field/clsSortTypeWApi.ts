/**
 * 类名:clsSortTypeWApi
 * 表名:SortType(00050335)
 * 版本:2025.05.12.1(服务器:WIN-SRV103-116)
 * 日期:2025/05/13 03:56:13
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
 * 排序类型(SortType)
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
import { clsSortTypeEN } from '@/ts/L0Entity/Table_Field/clsSortTypeEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';

export const sortType_Controller = 'SortTypeApi';
export const sortType_ConstructorName = 'sortType';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strSortTypeId:关键字
 * @returns 对象
 **/
export async function SortType_GetObjBySortTypeIdAsync(
  strSortTypeId: string,
): Promise<clsSortTypeEN | null> {
  const strThisFuncName = 'GetObjBySortTypeIdAsync';

  if (IsNullOrEmpty(strSortTypeId) == true) {
    const strMsg = Format(
      '参数:[strSortTypeId]不能为空!(In clsSortTypeWApi.GetObjBySortTypeIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strSortTypeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strSortTypeId]的长度:[{0}]不正确!(clsSortTypeWApi.GetObjBySortTypeIdAsync)',
      strSortTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjBySortTypeId';
  const strUrl = GetWebApiUrl(sortType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strSortTypeId,
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
      const objSortType = SortType_GetObjFromJsonObj(returnObj);
      return objSortType;
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
        sortType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sortType_ConstructorName,
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
 * @param strSortTypeId:所给的关键字
 * @returns 对象
 */
export async function SortType_GetObjBySortTypeIdlocalStorage(strSortTypeId: string) {
  const strThisFuncName = 'GetObjBySortTypeIdlocalStorage';

  if (IsNullOrEmpty(strSortTypeId) == true) {
    const strMsg = Format(
      '参数:[strSortTypeId]不能为空!(In clsSortTypeWApi.GetObjBySortTypeIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strSortTypeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strSortTypeId]的长度:[{0}]不正确!(clsSortTypeWApi.GetObjBySortTypeIdlocalStorage)',
      strSortTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsSortTypeEN._CurrTabName, strSortTypeId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objSortTypeCache: clsSortTypeEN = JSON.parse(strTempObj);
    return objSortTypeCache;
  }
  try {
    const objSortType = await SortType_GetObjBySortTypeIdAsync(strSortTypeId);
    if (objSortType != null) {
      localStorage.setItem(strKey, JSON.stringify(objSortType));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objSortType;
    }
    return objSortType;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strSortTypeId,
      sortType_ConstructorName,
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
 * @param strSortTypeId:所给的关键字
 * @returns 对象
 */
export async function SortType_GetObjBySortTypeIdCache(
  strSortTypeId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjBySortTypeIdCache';

  if (IsNullOrEmpty(strSortTypeId) == true) {
    const strMsg = Format(
      '参数:[strSortTypeId]不能为空!(In clsSortTypeWApi.GetObjBySortTypeIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strSortTypeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strSortTypeId]的长度:[{0}]不正确!(clsSortTypeWApi.GetObjBySortTypeIdCache)',
      strSortTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrSortTypeObjLstCache = await SortType_GetObjLstCache();
  try {
    const arrSortTypeSel = arrSortTypeObjLstCache.filter((x) => x.sortTypeId == strSortTypeId);
    let objSortType: clsSortTypeEN;
    if (arrSortTypeSel.length > 0) {
      objSortType = arrSortTypeSel[0];
      return objSortType;
    } else {
      if (bolTryAsyncOnce == true) {
        const objSortTypeConst = await SortType_GetObjBySortTypeIdAsync(strSortTypeId);
        if (objSortTypeConst != null) {
          SortType_ReFreshThisCache();
          return objSortTypeConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strSortTypeId,
      sortType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objSortType:所给的对象
 * @returns 对象
 */
export async function SortType_UpdateObjInLstCache(objSortType: clsSortTypeEN) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrSortTypeObjLstCache = await SortType_GetObjLstCache();
    const obj = arrSortTypeObjLstCache.find((x) => x.sortTypeId == objSortType.sortTypeId);
    if (obj != null) {
      objSortType.sortTypeId = obj.sortTypeId;
      ObjectAssign(obj, objSortType);
    } else {
      arrSortTypeObjLstCache.push(objSortType);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      sortType_ConstructorName,
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
export function SortType_SortFunDefa(a: clsSortTypeEN, b: clsSortTypeEN): number {
  return a.sortTypeId.localeCompare(b.sortTypeId);
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
export function SortType_SortFunDefa2Fld(a: clsSortTypeEN, b: clsSortTypeEN): number {
  if (a.sortTypeName == b.sortTypeName) return a.sortTypeENName.localeCompare(b.sortTypeENName);
  else return a.sortTypeName.localeCompare(b.sortTypeName);
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
export function SortType_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsSortTypeEN.con_SortTypeId:
        return (a: clsSortTypeEN, b: clsSortTypeEN) => {
          return a.sortTypeId.localeCompare(b.sortTypeId);
        };
      case clsSortTypeEN.con_SortTypeName:
        return (a: clsSortTypeEN, b: clsSortTypeEN) => {
          return a.sortTypeName.localeCompare(b.sortTypeName);
        };
      case clsSortTypeEN.con_SortTypeENName:
        return (a: clsSortTypeEN, b: clsSortTypeEN) => {
          if (a.sortTypeENName == null) return -1;
          if (b.sortTypeENName == null) return 1;
          return a.sortTypeENName.localeCompare(b.sortTypeENName);
        };
      case clsSortTypeEN.con_UpdDate:
        return (a: clsSortTypeEN, b: clsSortTypeEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsSortTypeEN.con_UpdUser:
        return (a: clsSortTypeEN, b: clsSortTypeEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsSortTypeEN.con_Memo:
        return (a: clsSortTypeEN, b: clsSortTypeEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[SortType]中不存在!(in ${sortType_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsSortTypeEN.con_SortTypeId:
        return (a: clsSortTypeEN, b: clsSortTypeEN) => {
          return b.sortTypeId.localeCompare(a.sortTypeId);
        };
      case clsSortTypeEN.con_SortTypeName:
        return (a: clsSortTypeEN, b: clsSortTypeEN) => {
          return b.sortTypeName.localeCompare(a.sortTypeName);
        };
      case clsSortTypeEN.con_SortTypeENName:
        return (a: clsSortTypeEN, b: clsSortTypeEN) => {
          if (b.sortTypeENName == null) return -1;
          if (a.sortTypeENName == null) return 1;
          return b.sortTypeENName.localeCompare(a.sortTypeENName);
        };
      case clsSortTypeEN.con_UpdDate:
        return (a: clsSortTypeEN, b: clsSortTypeEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsSortTypeEN.con_UpdUser:
        return (a: clsSortTypeEN, b: clsSortTypeEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsSortTypeEN.con_Memo:
        return (a: clsSortTypeEN, b: clsSortTypeEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[SortType]中不存在!(in ${sortType_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strSortTypeId:所给的关键字
 * @returns 对象
 */
export async function SortType_GetNameBySortTypeIdCache(strSortTypeId: string) {
  if (IsNullOrEmpty(strSortTypeId) == true) {
    const strMsg = Format(
      '参数:[strSortTypeId]不能为空!(In clsSortTypeWApi.GetNameBySortTypeIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strSortTypeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strSortTypeId]的长度:[{0}]不正确!(clsSortTypeWApi.GetNameBySortTypeIdCache)',
      strSortTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrSortTypeObjLstCache = await SortType_GetObjLstCache();
  if (arrSortTypeObjLstCache == null) return '';
  try {
    const arrSortTypeSel = arrSortTypeObjLstCache.filter((x) => x.sortTypeId == strSortTypeId);
    let objSortType: clsSortTypeEN;
    if (arrSortTypeSel.length > 0) {
      objSortType = arrSortTypeSel[0];
      return objSortType.sortTypeName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strSortTypeId,
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
export async function SortType_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsSortTypeEN.con_SortTypeId:
      return (obj: clsSortTypeEN) => {
        return obj.sortTypeId === value;
      };
    case clsSortTypeEN.con_SortTypeName:
      return (obj: clsSortTypeEN) => {
        return obj.sortTypeName === value;
      };
    case clsSortTypeEN.con_SortTypeENName:
      return (obj: clsSortTypeEN) => {
        return obj.sortTypeENName === value;
      };
    case clsSortTypeEN.con_UpdDate:
      return (obj: clsSortTypeEN) => {
        return obj.updDate === value;
      };
    case clsSortTypeEN.con_UpdUser:
      return (obj: clsSortTypeEN) => {
        return obj.updUser === value;
      };
    case clsSortTypeEN.con_Memo:
      return (obj: clsSortTypeEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[SortType]中不存在!(in ${sortType_ConstructorName}.${strThisFuncName})`;
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
export async function SortType_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsSortTypeEN.con_SortTypeId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsSortTypeEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsSortTypeEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strSortTypeId = strInValue;
  if (IsNullOrEmpty(strSortTypeId) == true) {
    return '';
  }
  const objSortType = await SortType_GetObjBySortTypeIdCache(strSortTypeId);
  if (objSortType == null) return '';
  if (objSortType.GetFldValue(strOutFldName) == null) return '';
  return objSortType.GetFldValue(strOutFldName).toString();
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
export async function SortType_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsSortTypeEN.con_SortTypeId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrSortType = await SortType_GetObjLstCache();
  if (arrSortType == null) return [];
  let arrSortTypeSel = arrSortType;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrSortTypeSel = arrSortTypeSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrSortTypeSel = arrSortTypeSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrSortTypeSel = arrSortTypeSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrSortTypeSel = arrSortTypeSel.filter((x) => x.GetFldValue(strInFldName) == strInValue);
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrSortTypeSel = arrSortTypeSel.filter((x) => x.GetFldValue(strInFldName) == strInValue);
          break;
        case enumComparisonOp.NotEqual_02:
          arrSortTypeSel = arrSortTypeSel.filter((x) => x.GetFldValue(strInFldName) != strInValue);
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrSortTypeSel = arrSortTypeSel.filter((x) => x.GetFldValue(strInFldName) >= strInValue);
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrSortTypeSel = arrSortTypeSel.filter((x) => x.GetFldValue(strInFldName) <= strInValue);
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrSortTypeSel = arrSortTypeSel.filter((x) => x.GetFldValue(strInFldName) > strInValue);
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrSortTypeSel = arrSortTypeSel.filter((x) => x.GetFldValue(strInFldName) <= strInValue);
          break;
      }
      break;
  }
  if (arrSortTypeSel.length == 0) return [];
  return arrSortTypeSel.map((x) => x.sortTypeId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function SortType_GetFldValueAsync(
  strFldName: string,
  strWhereCond: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetFldValueAsync';
  const strAction = 'GetFldValue';
  const strUrl = GetWebApiUrl(sortType_Controller, strAction);

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
        sortType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sortType_ConstructorName,
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
export async function SortType_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(sortType_Controller, strAction);

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
        sortType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sortType_ConstructorName,
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
export async function SortType_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(sortType_Controller, strAction);

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
        sortType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sortType_ConstructorName,
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
export async function SortType_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsSortTypeEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(sortType_Controller, strAction);

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
      const objSortType = SortType_GetObjFromJsonObj(returnObj);
      return objSortType;
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
        sortType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sortType_ConstructorName,
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
export async function SortType_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsSortTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsSortTypeEN.WhereFormat) == false) {
    strWhereCond = clsSortTypeEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsSortTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsSortTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrSortTypeExObjLstCache: Array<clsSortTypeEN> = CacheHelper.Get(strKey);
    const arrSortTypeObjLstT = SortType_GetObjLstByJSONObjLst(arrSortTypeExObjLstCache);
    return arrSortTypeObjLstT;
  }
  try {
    const arrSortTypeExObjLst = await SortType_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrSortTypeExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrSortTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrSortTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      sortType_ConstructorName,
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
export async function SortType_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsSortTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsSortTypeEN.WhereFormat) == false) {
    strWhereCond = clsSortTypeEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsSortTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsSortTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrSortTypeExObjLstCache: Array<clsSortTypeEN> = JSON.parse(strTempObjLst);
    const arrSortTypeObjLstT = SortType_GetObjLstByJSONObjLst(arrSortTypeExObjLstCache);
    return arrSortTypeObjLstT;
  }
  try {
    const arrSortTypeExObjLst = await SortType_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrSortTypeExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrSortTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrSortTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      sortType_ConstructorName,
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
export async function SortType_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsSortTypeEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrSortTypeObjLstCache: Array<clsSortTypeEN> = JSON.parse(strTempObjLst);
    return arrSortTypeObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function SortType_GetObjLstAsync(strWhereCond: string): Promise<Array<clsSortTypeEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(sortType_Controller, strAction);

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
          sortType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = SortType_GetObjLstByJSONObjLst(returnObjLst);
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
        sortType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sortType_ConstructorName,
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
export async function SortType_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsSortTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsSortTypeEN.WhereFormat) == false) {
    strWhereCond = clsSortTypeEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsSortTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsSortTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrSortTypeExObjLstCache: Array<clsSortTypeEN> = JSON.parse(strTempObjLst);
    const arrSortTypeObjLstT = SortType_GetObjLstByJSONObjLst(arrSortTypeExObjLstCache);
    return arrSortTypeObjLstT;
  }
  try {
    const arrSortTypeExObjLst = await SortType_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrSortTypeExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrSortTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrSortTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      sortType_ConstructorName,
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
export async function SortType_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsSortTypeEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrSortTypeObjLstCache: Array<clsSortTypeEN> = JSON.parse(strTempObjLst);
    return arrSortTypeObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function SortType_GetObjLstCache(): Promise<Array<clsSortTypeEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrSortTypeObjLstCache;
  switch (clsSortTypeEN.CacheModeId) {
    case '04': //sessionStorage
      arrSortTypeObjLstCache = await SortType_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrSortTypeObjLstCache = await SortType_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrSortTypeObjLstCache = await SortType_GetObjLstClientCache();
      break;
    default:
      arrSortTypeObjLstCache = await SortType_GetObjLstClientCache();
      break;
  }
  return arrSortTypeObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function SortType_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrSortTypeObjLstCache;
  switch (clsSortTypeEN.CacheModeId) {
    case '04': //sessionStorage
      arrSortTypeObjLstCache = await SortType_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrSortTypeObjLstCache = await SortType_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrSortTypeObjLstCache = null;
      break;
    default:
      arrSortTypeObjLstCache = null;
      break;
  }
  return arrSortTypeObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrSortTypeIdCond:条件对象
 * @returns 对象列表子集
 */
export async function SortType_GetSubObjLstCache(objSortTypeCond: ConditionCollection) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrSortTypeObjLstCache = await SortType_GetObjLstCache();
  let arrSortTypeSel = arrSortTypeObjLstCache;
  if (objSortTypeCond.GetConditions().length == 0) return arrSortTypeSel;
  try {
    //console.log(sstrKeys);
    for (const objCondition of objSortTypeCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrSortTypeSel = arrSortTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrSortTypeSel = arrSortTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrSortTypeSel = arrSortTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrSortTypeSel = arrSortTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrSortTypeSel = arrSortTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrSortTypeSel = arrSortTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrSortTypeSel = arrSortTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrSortTypeSel = arrSortTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrSortTypeSel = arrSortTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrSortTypeSel = arrSortTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrSortTypeSel = arrSortTypeSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrSortTypeSel = arrSortTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrSortTypeSel = arrSortTypeSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrSortTypeSel = arrSortTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrSortTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objSortTypeCond),
      sortType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsSortTypeEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrSortTypeId:关键字列表
 * @returns 对象列表
 **/
export async function SortType_GetObjLstBySortTypeIdLstAsync(
  arrSortTypeId: Array<string>,
): Promise<Array<clsSortTypeEN>> {
  const strThisFuncName = 'GetObjLstBySortTypeIdLstAsync';
  const strAction = 'GetObjLstBySortTypeIdLst';
  const strUrl = GetWebApiUrl(sortType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrSortTypeId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          sortType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = SortType_GetObjLstByJSONObjLst(returnObjLst);
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
        sortType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sortType_ConstructorName,
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
 * @param arrstrSortTypeIdLst:关键字列表
 * @returns 对象列表
 */
export async function SortType_GetObjLstBySortTypeIdLstCache(arrSortTypeIdLst: Array<string>) {
  const strThisFuncName = 'GetObjLstBySortTypeIdLstCache';
  try {
    const arrSortTypeObjLstCache = await SortType_GetObjLstCache();
    const arrSortTypeSel = arrSortTypeObjLstCache.filter(
      (x) => arrSortTypeIdLst.indexOf(x.sortTypeId) > -1,
    );
    return arrSortTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrSortTypeIdLst.join(','),
      sortType_ConstructorName,
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
export async function SortType_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsSortTypeEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(sortType_Controller, strAction);

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
          sortType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = SortType_GetObjLstByJSONObjLst(returnObjLst);
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
        sortType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sortType_ConstructorName,
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
export async function SortType_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsSortTypeEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(sortType_Controller, strAction);

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
          sortType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = SortType_GetObjLstByJSONObjLst(returnObjLst);
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
        sortType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sortType_ConstructorName,
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
export async function SortType_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsSortTypeEN>();
  const arrSortTypeObjLstCache = await SortType_GetObjLstCache();
  if (arrSortTypeObjLstCache.length == 0) return arrSortTypeObjLstCache;
  let arrSortTypeSel = arrSortTypeObjLstCache;
  const objSortTypeCond = objPagerPara.conditionCollection;
  if (objSortTypeCond == null) {
    const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return new Array<clsSortTypeEN>();
  }
  //console.log("clsSortTypeWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    for (const objCondition of objSortTypeCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrSortTypeSel = arrSortTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrSortTypeSel = arrSortTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrSortTypeSel = arrSortTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrSortTypeSel = arrSortTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrSortTypeSel = arrSortTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrSortTypeSel = arrSortTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrSortTypeSel = arrSortTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrSortTypeSel = arrSortTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrSortTypeSel = arrSortTypeSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrSortTypeSel = arrSortTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrSortTypeSel = arrSortTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrSortTypeSel = arrSortTypeSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrSortTypeSel = arrSortTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrSortTypeSel = arrSortTypeSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrSortTypeSel = arrSortTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrSortTypeSel.length == 0) return arrSortTypeSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrSortTypeSel = arrSortTypeSel.sort(SortType_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrSortTypeSel = arrSortTypeSel.sort(objPagerPara.sortFun);
    }
    arrSortTypeSel = arrSortTypeSel.slice(intStart, intEnd);
    return arrSortTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      sortType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsSortTypeEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function SortType_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsSortTypeEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsSortTypeEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(sortType_Controller, strAction);

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
          sortType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = SortType_GetObjLstByJSONObjLst(returnObjLst);
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
        sortType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sortType_ConstructorName,
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
 * @param strSortTypeId:关键字
 * @returns 获取删除的结果
 **/
export async function SortType_DelRecordAsync(strSortTypeId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(sortType_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strSortTypeId);

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
        sortType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sortType_ConstructorName,
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
 * @param arrSortTypeId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function SortType_DelSortTypesAsync(arrSortTypeId: Array<string>): Promise<number> {
  const strThisFuncName = 'DelSortTypesAsync';
  const strAction = 'DelSortTypes';
  const strUrl = GetWebApiUrl(sortType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrSortTypeId, config);
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
        sortType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sortType_ConstructorName,
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
export async function SortType_DelSortTypesByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'DelSortTypesByCondAsync';
  const strAction = 'DelSortTypesByCond';
  const strUrl = GetWebApiUrl(sortType_Controller, strAction);

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
        sortType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sortType_ConstructorName,
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
 * @param objSortTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function SortType_AddNewRecordAsync(objSortTypeEN: clsSortTypeEN): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  if (objSortTypeEN.sortTypeId === null || objSortTypeEN.sortTypeId === '') {
    const strMsg = '需要的对象的关键字为空,不能添加!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objSortTypeEN);
  const strUrl = GetWebApiUrl(sortType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objSortTypeEN, config);
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
        sortType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sortType_ConstructorName,
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
 * @param objSortTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function SortType_AddNewRecordWithMaxIdAsync(
  objSortTypeEN: clsSortTypeEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(sortType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objSortTypeEN, config);
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
        sortType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sortType_ConstructorName,
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
export async function SortType_AddNewObjSave(
  objSortTypeEN: clsSortTypeEN,
): Promise<AddRecordResult> {
  const strThisFuncName = 'AddNewObjSave';
  try {
    SortType_CheckPropertyNew(objSortTypeEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${sortType_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    alert(strMsg);
    return { keyword: '', success: false }; //一定要有一个返回值,否则会出错!
  }
  try {
    //检查唯一性条件
    let returnBool = false;
    const bolIsExist = await SortType_IsExistAsync(objSortTypeEN.sortTypeId);
    if (bolIsExist == true) {
      const strMsg = Format('添加记录时,关键字：{0}已经存在!', objSortTypeEN.sortTypeId);
      console.error(strMsg);
      throw strMsg;
    }
    returnBool = await SortType_AddNewRecordAsync(objSortTypeEN);
    if (returnBool == true) {
      SortType_ReFreshCache();
    } else {
      const strInfo = `添加[排序类型(SortType)]记录不成功!`;
      //显示信息框
      throw strInfo;
    }
    return { keyword: objSortTypeEN.sortTypeId, success: returnBool }; //一定要有一个返回值,否则会出错!
  } catch (e) {
    const strMsg = `添加记录不成功,${e}.(in ${sortType_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/** 修改记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjSave)
 **/
export async function SortType_UpdateObjSave(objSortTypeEN: clsSortTypeEN): Promise<boolean> {
  const strThisFuncName = 'UpdateObjSave';
  objSortTypeEN.sfUpdFldSetStr = objSortTypeEN.updFldString; //设置哪些字段被修改(脏字段)
  if (objSortTypeEN.sortTypeId == '' || objSortTypeEN.sortTypeId == undefined) {
    console.error('关键字不能为空!');
    throw '关键字不能为空!';
  }
  try {
    SortType_CheckProperty4Update(objSortTypeEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${sortType_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
  try {
    //检查唯一性条件
    const returnBool = await SortType_UpdateRecordAsync(objSortTypeEN);
    if (returnBool == true) {
      SortType_ReFreshCache();
    }
    return returnBool;
  } catch (e) {
    const strMsg = `修改记录不成功,${e}.(in ${sortType_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objSortTypeEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function SortType_AddNewRecordWithReturnKeyAsync(
  objSortTypeEN: clsSortTypeEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(sortType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objSortTypeEN, config);
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
        sortType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sortType_ConstructorName,
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
 * @param objSortTypeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function SortType_UpdateRecordAsync(objSortTypeEN: clsSortTypeEN): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objSortTypeEN.sfUpdFldSetStr === undefined ||
    objSortTypeEN.sfUpdFldSetStr === null ||
    objSortTypeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objSortTypeEN.sortTypeId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(sortType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objSortTypeEN, config);
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
        sortType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sortType_ConstructorName,
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
 * @param objSortTypeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function SortType_EditRecordExAsync(objSortTypeEN: clsSortTypeEN): Promise<boolean> {
  const strThisFuncName = 'EditRecordExAsync';
  const strAction = 'EditRecordEx';
  if (
    objSortTypeEN.sfUpdFldSetStr === undefined ||
    objSortTypeEN.sfUpdFldSetStr === null ||
    objSortTypeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objSortTypeEN.sortTypeId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(sortType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objSortTypeEN, config);
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
        sortType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sortType_ConstructorName,
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
 * @param objSortTypeEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function SortType_UpdateWithConditionAsync(
  objSortTypeEN: clsSortTypeEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objSortTypeEN.sfUpdFldSetStr === undefined ||
    objSortTypeEN.sfUpdFldSetStr === null ||
    objSortTypeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objSortTypeEN.sortTypeId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(sortType_Controller, strAction);
  objSortTypeEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objSortTypeEN, config);
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
        sortType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sortType_ConstructorName,
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
 * @param objstrSortTypeIdCond:条件对象
 * @returns 对象列表子集
 */
export async function SortType_IsExistRecordCache(objSortTypeCond: ConditionCollection) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrSortTypeObjLstCache = await SortType_GetObjLstCache();
  if (arrSortTypeObjLstCache == null) return false;
  let arrSortTypeSel = arrSortTypeObjLstCache;
  if (objSortTypeCond.GetConditions().length == 0) return arrSortTypeSel.length > 0 ? true : false;
  try {
    for (const objCondition of objSortTypeCond.GetConditions()) {
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
            arrSortTypeSel = arrSortTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrSortTypeSel = arrSortTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrSortTypeSel = arrSortTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrSortTypeSel = arrSortTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrSortTypeSel = arrSortTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrSortTypeSel = arrSortTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrSortTypeSel = arrSortTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrSortTypeSel = arrSortTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrSortTypeSel = arrSortTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrSortTypeSel = arrSortTypeSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrSortTypeSel = arrSortTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrSortTypeSel = arrSortTypeSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrSortTypeSel = arrSortTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrSortTypeSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objSortTypeCond),
      sortType_ConstructorName,
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
export async function SortType_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(sortType_Controller, strAction);

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
        sortType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sortType_ConstructorName,
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
 * @param strSortTypeId:所给的关键字
 * @returns 对象
 */
export async function SortType_IsExistCache(strSortTypeId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrSortTypeObjLstCache = await SortType_GetObjLstCache();
  if (arrSortTypeObjLstCache == null) return false;
  try {
    const arrSortTypeSel = arrSortTypeObjLstCache.filter((x) => x.sortTypeId == strSortTypeId);
    if (arrSortTypeSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strSortTypeId,
      sortType_ConstructorName,
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
 * @param strSortTypeId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function SortType_IsExistAsync(strSortTypeId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(sortType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strSortTypeId,
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
        sortType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sortType_ConstructorName,
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
export async function SortType_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(sortType_Controller, strAction);

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
        sortType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sortType_ConstructorName,
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
 * @param objSortTypeCond:条件对象
 * @returns 对象列表记录数
 */
export async function SortType_GetRecCountByCondCache(objSortTypeCond: ConditionCollection) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrSortTypeObjLstCache = await SortType_GetObjLstCache();
  if (arrSortTypeObjLstCache == null) return 0;
  let arrSortTypeSel = arrSortTypeObjLstCache;
  if (objSortTypeCond.GetConditions().length == 0) return arrSortTypeSel.length;
  try {
    for (const objCondition of objSortTypeCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrSortTypeSel = arrSortTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrSortTypeSel = arrSortTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrSortTypeSel = arrSortTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrSortTypeSel = arrSortTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrSortTypeSel = arrSortTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrSortTypeSel = arrSortTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrSortTypeSel = arrSortTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrSortTypeSel = arrSortTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrSortTypeSel = arrSortTypeSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrSortTypeSel = arrSortTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrSortTypeSel = arrSortTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrSortTypeSel = arrSortTypeSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrSortTypeSel = arrSortTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrSortTypeSel = arrSortTypeSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrSortTypeSel = arrSortTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrSortTypeSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objSortTypeCond),
      sortType_ConstructorName,
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
export async function SortType_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(sortType_Controller, strAction);

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
        sortType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sortType_ConstructorName,
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
export function SortType_GetWebApiUrl(strController: string, strAction: string): string {
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
export function SortType_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功!');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clsSortTypeEN._CurrTabName;
  switch (clsSortTypeEN.CacheModeId) {
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
  clsSortTypeEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
}

/**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export function SortType_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsSortTypeEN._CurrTabName;
    switch (clsSortTypeEN.CacheModeId) {
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
    clsSortTypeEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export function SortType_GetLastRefreshTime(): string {
  if (clsSortTypeEN._RefreshTimeLst.length == 0) return '';
  return clsSortTypeEN._RefreshTimeLst[clsSortTypeEN._RefreshTimeLst.length - 1];
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export async function SortType_BindDdl_SortTypeIdInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
) {
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_SortTypeIdInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_SortTypeIdInDivCache");
  const arrObjLstSel = await SortType_GetObjLstCache();
  if (arrObjLstSel == null) return;
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsSortTypeEN.con_SortTypeId,
    clsSortTypeEN.con_SortTypeName,
    '排序类型...',
  );
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export async function SortType_GetArrSortType() {
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_SortTypeIdInDivCache");
  const arrSortType = new Array<clsSortTypeEN>();
  const arrObjLstSel = await SortType_GetObjLstCache();
  if (arrObjLstSel == null) return null;
  const obj0 = new clsSortTypeEN();
  obj0.sortTypeId = '0';
  obj0.sortTypeName = '选排序类型...';
  arrSortType.push(obj0);
  arrObjLstSel.forEach((x) => arrSortType.push(x));
  return arrSortType;
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function SortType_CheckPropertyNew(pobjSortTypeEN: clsSortTypeEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjSortTypeEN.sortTypeName) === true) {
    throw new Error(
      `(errid:Watl000411)字段[排序类型名称]不能为空(In 排序类型)!(clsSortTypeBL:CheckPropertyNew0)`,
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjSortTypeEN.sortTypeId) == false &&
    GetStrLen(pobjSortTypeEN.sortTypeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000413)字段[排序类型Id(sortTypeId)]的长度不能超过2(In 排序类型(SortType))!值:${pobjSortTypeEN.sortTypeId}(clsSortTypeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjSortTypeEN.sortTypeName) == false &&
    GetStrLen(pobjSortTypeEN.sortTypeName) > 30
  ) {
    throw new Error(
      `(errid:Watl000413)字段[排序类型名称(sortTypeName)]的长度不能超过30(In 排序类型(SortType))!值:${pobjSortTypeEN.sortTypeName}(clsSortTypeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjSortTypeEN.sortTypeENName) == false &&
    GetStrLen(pobjSortTypeEN.sortTypeENName) > 30
  ) {
    throw new Error(
      `(errid:Watl000413)字段[排序类型英文名(sortTypeENName)]的长度不能超过30(In 排序类型(SortType))!值:${pobjSortTypeEN.sortTypeENName}(clsSortTypeBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjSortTypeEN.updDate) == false && GetStrLen(pobjSortTypeEN.updDate) > 20) {
    throw new Error(
      `(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 排序类型(SortType))!值:${pobjSortTypeEN.updDate}(clsSortTypeBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjSortTypeEN.updUser) == false && GetStrLen(pobjSortTypeEN.updUser) > 20) {
    throw new Error(
      `(errid:Watl000413)字段[修改者(updUser)]的长度不能超过20(In 排序类型(SortType))!值:${pobjSortTypeEN.updUser}(clsSortTypeBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjSortTypeEN.memo) == false && GetStrLen(pobjSortTypeEN.memo) > 1000) {
    throw new Error(
      `(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In 排序类型(SortType))!值:${pobjSortTypeEN.memo}(clsSortTypeBL:CheckPropertyNew)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjSortTypeEN.sortTypeId) == false &&
    undefined !== pobjSortTypeEN.sortTypeId &&
    tzDataType.isString(pobjSortTypeEN.sortTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[排序类型Id(sortTypeId)]的值:[${pobjSortTypeEN.sortTypeId}], 非法,应该为字符型(In 排序类型(SortType))!(clsSortTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjSortTypeEN.sortTypeName) == false &&
    undefined !== pobjSortTypeEN.sortTypeName &&
    tzDataType.isString(pobjSortTypeEN.sortTypeName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[排序类型名称(sortTypeName)]的值:[${pobjSortTypeEN.sortTypeName}], 非法,应该为字符型(In 排序类型(SortType))!(clsSortTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjSortTypeEN.sortTypeENName) == false &&
    undefined !== pobjSortTypeEN.sortTypeENName &&
    tzDataType.isString(pobjSortTypeEN.sortTypeENName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[排序类型英文名(sortTypeENName)]的值:[${pobjSortTypeEN.sortTypeENName}], 非法,应该为字符型(In 排序类型(SortType))!(clsSortTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjSortTypeEN.updDate) == false &&
    undefined !== pobjSortTypeEN.updDate &&
    tzDataType.isString(pobjSortTypeEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjSortTypeEN.updDate}], 非法,应该为字符型(In 排序类型(SortType))!(clsSortTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjSortTypeEN.updUser) == false &&
    undefined !== pobjSortTypeEN.updUser &&
    tzDataType.isString(pobjSortTypeEN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改者(updUser)]的值:[${pobjSortTypeEN.updUser}], 非法,应该为字符型(In 排序类型(SortType))!(clsSortTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjSortTypeEN.memo) == false &&
    undefined !== pobjSortTypeEN.memo &&
    tzDataType.isString(pobjSortTypeEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[说明(memo)]的值:[${pobjSortTypeEN.memo}], 非法,应该为字符型(In 排序类型(SortType))!(clsSortTypeBL:CheckPropertyNew0)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function SortType_CheckProperty4Update(pobjSortTypeEN: clsSortTypeEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjSortTypeEN.sortTypeId) == false &&
    GetStrLen(pobjSortTypeEN.sortTypeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000416)字段[排序类型Id(sortTypeId)]的长度不能超过2(In 排序类型(SortType))!值:${pobjSortTypeEN.sortTypeId}(clsSortTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjSortTypeEN.sortTypeName) == false &&
    GetStrLen(pobjSortTypeEN.sortTypeName) > 30
  ) {
    throw new Error(
      `(errid:Watl000416)字段[排序类型名称(sortTypeName)]的长度不能超过30(In 排序类型(SortType))!值:${pobjSortTypeEN.sortTypeName}(clsSortTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjSortTypeEN.sortTypeENName) == false &&
    GetStrLen(pobjSortTypeEN.sortTypeENName) > 30
  ) {
    throw new Error(
      `(errid:Watl000416)字段[排序类型英文名(sortTypeENName)]的长度不能超过30(In 排序类型(SortType))!值:${pobjSortTypeEN.sortTypeENName}(clsSortTypeBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjSortTypeEN.updDate) == false && GetStrLen(pobjSortTypeEN.updDate) > 20) {
    throw new Error(
      `(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 排序类型(SortType))!值:${pobjSortTypeEN.updDate}(clsSortTypeBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjSortTypeEN.updUser) == false && GetStrLen(pobjSortTypeEN.updUser) > 20) {
    throw new Error(
      `(errid:Watl000416)字段[修改者(updUser)]的长度不能超过20(In 排序类型(SortType))!值:${pobjSortTypeEN.updUser}(clsSortTypeBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjSortTypeEN.memo) == false && GetStrLen(pobjSortTypeEN.memo) > 1000) {
    throw new Error(
      `(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In 排序类型(SortType))!值:${pobjSortTypeEN.memo}(clsSortTypeBL:CheckProperty4Update)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjSortTypeEN.sortTypeId) == false &&
    undefined !== pobjSortTypeEN.sortTypeId &&
    tzDataType.isString(pobjSortTypeEN.sortTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[排序类型Id(sortTypeId)]的值:[${pobjSortTypeEN.sortTypeId}], 非法,应该为字符型(In 排序类型(SortType))!(clsSortTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjSortTypeEN.sortTypeName) == false &&
    undefined !== pobjSortTypeEN.sortTypeName &&
    tzDataType.isString(pobjSortTypeEN.sortTypeName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[排序类型名称(sortTypeName)]的值:[${pobjSortTypeEN.sortTypeName}], 非法,应该为字符型(In 排序类型(SortType))!(clsSortTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjSortTypeEN.sortTypeENName) == false &&
    undefined !== pobjSortTypeEN.sortTypeENName &&
    tzDataType.isString(pobjSortTypeEN.sortTypeENName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[排序类型英文名(sortTypeENName)]的值:[${pobjSortTypeEN.sortTypeENName}], 非法,应该为字符型(In 排序类型(SortType))!(clsSortTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjSortTypeEN.updDate) == false &&
    undefined !== pobjSortTypeEN.updDate &&
    tzDataType.isString(pobjSortTypeEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjSortTypeEN.updDate}], 非法,应该为字符型(In 排序类型(SortType))!(clsSortTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjSortTypeEN.updUser) == false &&
    undefined !== pobjSortTypeEN.updUser &&
    tzDataType.isString(pobjSortTypeEN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改者(updUser)]的值:[${pobjSortTypeEN.updUser}], 非法,应该为字符型(In 排序类型(SortType))!(clsSortTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjSortTypeEN.memo) == false &&
    undefined !== pobjSortTypeEN.memo &&
    tzDataType.isString(pobjSortTypeEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[说明(memo)]的值:[${pobjSortTypeEN.memo}], 非法,应该为字符型(In 排序类型(SortType))!(clsSortTypeBL:CheckProperty4Update)`,
    );
  }
  //检查主键是否为Null或者空!
  if (
    IsNullOrEmpty(pobjSortTypeEN.sortTypeId) === true ||
    pobjSortTypeEN.sortTypeId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000064)字段[排序类型Id]不能为空(In 排序类型)!(clsSortTypeBL:CheckProperty4Update)`,
    );
  }
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
export function SortType_GetJSONStrByObj(pobjSortTypeEN: clsSortTypeEN): string {
  pobjSortTypeEN.sfUpdFldSetStr = pobjSortTypeEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjSortTypeEN);
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
export function SortType_GetObjLstByJSONStr(strJSON: string): Array<clsSortTypeEN> {
  let arrSortTypeObjLst = new Array<clsSortTypeEN>();
  if (strJSON === '') {
    return arrSortTypeObjLst;
  }
  try {
    arrSortTypeObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrSortTypeObjLst;
  }
  return arrSortTypeObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-05-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrSortTypeObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function SortType_GetObjLstByJSONObjLst(
  arrSortTypeObjLstS: Array<clsSortTypeEN>,
): Array<clsSortTypeEN> {
  const arrSortTypeObjLst = new Array<clsSortTypeEN>();
  for (const objInFor of arrSortTypeObjLstS) {
    const obj1 = SortType_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrSortTypeObjLst.push(obj1);
  }
  return arrSortTypeObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-05-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function SortType_GetObjByJSONStr(strJSON: string): clsSortTypeEN {
  let pobjSortTypeEN = new clsSortTypeEN();
  if (strJSON === '') {
    return pobjSortTypeEN;
  }
  try {
    pobjSortTypeEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjSortTypeEN;
  }
  return pobjSortTypeEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function SortType_GetCombineCondition(objSortTypeCond: clsSortTypeEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objSortTypeCond.dicFldComparisonOp,
      clsSortTypeEN.con_SortTypeId,
    ) == true
  ) {
    const strComparisonOpSortTypeId: string =
      objSortTypeCond.dicFldComparisonOp[clsSortTypeEN.con_SortTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSortTypeEN.con_SortTypeId,
      objSortTypeCond.sortTypeId,
      strComparisonOpSortTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSortTypeCond.dicFldComparisonOp,
      clsSortTypeEN.con_SortTypeName,
    ) == true
  ) {
    const strComparisonOpSortTypeName: string =
      objSortTypeCond.dicFldComparisonOp[clsSortTypeEN.con_SortTypeName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSortTypeEN.con_SortTypeName,
      objSortTypeCond.sortTypeName,
      strComparisonOpSortTypeName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSortTypeCond.dicFldComparisonOp,
      clsSortTypeEN.con_SortTypeENName,
    ) == true
  ) {
    const strComparisonOpSortTypeENName: string =
      objSortTypeCond.dicFldComparisonOp[clsSortTypeEN.con_SortTypeENName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSortTypeEN.con_SortTypeENName,
      objSortTypeCond.sortTypeENName,
      strComparisonOpSortTypeENName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSortTypeCond.dicFldComparisonOp,
      clsSortTypeEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objSortTypeCond.dicFldComparisonOp[clsSortTypeEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSortTypeEN.con_UpdDate,
      objSortTypeCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSortTypeCond.dicFldComparisonOp,
      clsSortTypeEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objSortTypeCond.dicFldComparisonOp[clsSortTypeEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSortTypeEN.con_UpdUser,
      objSortTypeCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSortTypeCond.dicFldComparisonOp,
      clsSortTypeEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string = objSortTypeCond.dicFldComparisonOp[clsSortTypeEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSortTypeEN.con_Memo,
      objSortTypeCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objSortTypeENS:源对象
 * @param objSortTypeENT:目标对象
 */
export function SortType_GetObjFromJsonObj(objSortTypeENS: clsSortTypeEN): clsSortTypeEN {
  const objSortTypeENT: clsSortTypeEN = new clsSortTypeEN();
  ObjectAssign(objSortTypeENT, objSortTypeENS);
  return objSortTypeENT;
}
