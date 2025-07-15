/**
 * 类名:clsPrimaryTypeWApi
 * 表名:PrimaryType(00050020)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/13 23:53:42
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
 * 主键类型(PrimaryType)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2025年06月13日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty, Format, GetStrLen, tzDataType } from '@/ts/PubFun/clsString';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { CacheHelper } from '@/ts/PubFun/CacheHelper';
import { ConditionCollection } from '@/ts/PubFun/ConditionCollection';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import {
  GetSortExpressInfo,
  ObjectAssign,
  BindDdl_ObjLstInDivObj,
  GetExceptionStr,
  myShowErrorMsg,
} from '@/ts/PubFun/clsCommFunc4Web';
import { primaryTypeCache, isFuncMapCache } from '@/views/Table_Field/PrimaryTypeVueShare';
import { clsPrimaryTypeENEx } from '@/ts/L0Entity/Table_Field/clsPrimaryTypeENEx';
import { clsPrimaryTypeEN } from '@/ts/L0Entity/Table_Field/clsPrimaryTypeEN';
import { clsOrderByData } from '@/ts/PubFun/clsOrderByData';
import { AddRecordResult } from '@/ts/PubFun/AddRecordResult';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';

export const primaryType_Controller = 'PrimaryTypeApi';
export const primaryType_ConstructorName = 'primaryType';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strPrimaryTypeId:关键字
 * @returns 对象
 **/
export async function PrimaryType_GetObjByPrimaryTypeIdAsync(
  strPrimaryTypeId: string,
): Promise<clsPrimaryTypeEN | null> {
  const strThisFuncName = 'GetObjByPrimaryTypeIdAsync';

  if (IsNullOrEmpty(strPrimaryTypeId) == true) {
    const strMsg = Format(
      '参数:[strPrimaryTypeId]不能为空!(In clsPrimaryTypeWApi.GetObjByPrimaryTypeIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrimaryTypeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strPrimaryTypeId]的长度:[{0}]不正确!(clsPrimaryTypeWApi.GetObjByPrimaryTypeIdAsync)',
      strPrimaryTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByPrimaryTypeId';
  const strUrl = GetWebApiUrl(primaryType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strPrimaryTypeId,
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
      const objPrimaryType = PrimaryType_GetObjFromJsonObj(returnObj);
      return objPrimaryType;
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
        primaryType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        primaryType_ConstructorName,
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
 * @param strPrimaryTypeId:所给的关键字
 * @returns 对象
 */
export async function PrimaryType_GetObjByPrimaryTypeIdlocalStorage(strPrimaryTypeId: string) {
  const strThisFuncName = 'GetObjByPrimaryTypeIdlocalStorage';

  if (IsNullOrEmpty(strPrimaryTypeId) == true) {
    const strMsg = Format(
      '参数:[strPrimaryTypeId]不能为空!(In clsPrimaryTypeWApi.GetObjByPrimaryTypeIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrimaryTypeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strPrimaryTypeId]的长度:[{0}]不正确!(clsPrimaryTypeWApi.GetObjByPrimaryTypeIdlocalStorage)',
      strPrimaryTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsPrimaryTypeEN._CurrTabName, strPrimaryTypeId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objPrimaryTypeCache: clsPrimaryTypeEN = JSON.parse(strTempObj);
    return objPrimaryTypeCache;
  }
  try {
    const objPrimaryType = await PrimaryType_GetObjByPrimaryTypeIdAsync(strPrimaryTypeId);
    if (objPrimaryType != null) {
      localStorage.setItem(strKey, JSON.stringify(objPrimaryType));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objPrimaryType;
    }
    return objPrimaryType;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strPrimaryTypeId,
      primaryType_ConstructorName,
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
 * @param strPrimaryTypeId:所给的关键字
 * @returns 对象
 */
export async function PrimaryType_GetObjByPrimaryTypeIdCache(
  strPrimaryTypeId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByPrimaryTypeIdCache';

  if (IsNullOrEmpty(strPrimaryTypeId) == true) {
    const strMsg = Format(
      '参数:[strPrimaryTypeId]不能为空!(In clsPrimaryTypeWApi.GetObjByPrimaryTypeIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrimaryTypeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strPrimaryTypeId]的长度:[{0}]不正确!(clsPrimaryTypeWApi.GetObjByPrimaryTypeIdCache)',
      strPrimaryTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrPrimaryTypeObjLstCache = await PrimaryType_GetObjLstCache();
  try {
    const arrPrimaryTypeSel = arrPrimaryTypeObjLstCache.filter(
      (x) => x.primaryTypeId == strPrimaryTypeId,
    );
    let objPrimaryType: clsPrimaryTypeEN;
    if (arrPrimaryTypeSel.length > 0) {
      objPrimaryType = arrPrimaryTypeSel[0];
      return objPrimaryType;
    } else {
      if (bolTryAsyncOnce == true) {
        const objPrimaryTypeConst = await PrimaryType_GetObjByPrimaryTypeIdAsync(strPrimaryTypeId);
        if (objPrimaryTypeConst != null) {
          PrimaryType_ReFreshThisCache();
          return objPrimaryTypeConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strPrimaryTypeId,
      primaryType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objPrimaryType:所给的对象
 * @returns 对象
 */
export async function PrimaryType_UpdateObjInLstCache(objPrimaryType: clsPrimaryTypeEN) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrPrimaryTypeObjLstCache = await PrimaryType_GetObjLstCache();
    const obj = arrPrimaryTypeObjLstCache.find(
      (x) => x.primaryTypeId == objPrimaryType.primaryTypeId,
    );
    if (obj != null) {
      objPrimaryType.primaryTypeId = obj.primaryTypeId;
      ObjectAssign(obj, objPrimaryType);
    } else {
      arrPrimaryTypeObjLstCache.push(objPrimaryType);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      primaryType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-06-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function PrimaryType_SortFunDefa(a: clsPrimaryTypeEN, b: clsPrimaryTypeEN): number {
  return a.primaryTypeId.localeCompare(b.primaryTypeId);
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2025-06-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function PrimaryType_SortFunDefa2Fld(a: clsPrimaryTypeEN, b: clsPrimaryTypeEN): number {
  if (a.primaryTypeName == b.primaryTypeName)
    return a.primaryTypeENName.localeCompare(b.primaryTypeENName);
  else return a.primaryTypeName.localeCompare(b.primaryTypeName);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-06-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function PrimaryType_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsPrimaryTypeEN.con_PrimaryTypeId:
        return (a: clsPrimaryTypeEN, b: clsPrimaryTypeEN) => {
          return a.primaryTypeId.localeCompare(b.primaryTypeId);
        };
      case clsPrimaryTypeEN.con_PrimaryTypeName:
        return (a: clsPrimaryTypeEN, b: clsPrimaryTypeEN) => {
          return a.primaryTypeName.localeCompare(b.primaryTypeName);
        };
      case clsPrimaryTypeEN.con_PrimaryTypeENName:
        return (a: clsPrimaryTypeEN, b: clsPrimaryTypeEN) => {
          if (a.primaryTypeENName == null) return -1;
          if (b.primaryTypeENName == null) return 1;
          return a.primaryTypeENName.localeCompare(b.primaryTypeENName);
        };
      case clsPrimaryTypeEN.con_OrderNum:
        return (a: clsPrimaryTypeEN, b: clsPrimaryTypeEN) => {
          return a.orderNum - b.orderNum;
        };
      case clsPrimaryTypeEN.con_Memo:
        return (a: clsPrimaryTypeEN, b: clsPrimaryTypeEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[PrimaryType]中不存在!(in ${primaryType_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsPrimaryTypeEN.con_PrimaryTypeId:
        return (a: clsPrimaryTypeEN, b: clsPrimaryTypeEN) => {
          return b.primaryTypeId.localeCompare(a.primaryTypeId);
        };
      case clsPrimaryTypeEN.con_PrimaryTypeName:
        return (a: clsPrimaryTypeEN, b: clsPrimaryTypeEN) => {
          return b.primaryTypeName.localeCompare(a.primaryTypeName);
        };
      case clsPrimaryTypeEN.con_PrimaryTypeENName:
        return (a: clsPrimaryTypeEN, b: clsPrimaryTypeEN) => {
          if (b.primaryTypeENName == null) return -1;
          if (a.primaryTypeENName == null) return 1;
          return b.primaryTypeENName.localeCompare(a.primaryTypeENName);
        };
      case clsPrimaryTypeEN.con_OrderNum:
        return (a: clsPrimaryTypeEN, b: clsPrimaryTypeEN) => {
          return b.orderNum - a.orderNum;
        };
      case clsPrimaryTypeEN.con_Memo:
        return (a: clsPrimaryTypeEN, b: clsPrimaryTypeEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[PrimaryType]中不存在!(in ${primaryType_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strPrimaryTypeId:所给的关键字
 * @returns 对象
 */
export async function PrimaryType_GetNameByPrimaryTypeIdCache(strPrimaryTypeId: string) {
  if (IsNullOrEmpty(strPrimaryTypeId) == true) {
    const strMsg = Format(
      '参数:[strPrimaryTypeId]不能为空!(In clsPrimaryTypeWApi.GetNameByPrimaryTypeIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrimaryTypeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strPrimaryTypeId]的长度:[{0}]不正确!(clsPrimaryTypeWApi.GetNameByPrimaryTypeIdCache)',
      strPrimaryTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrPrimaryTypeObjLstCache = await PrimaryType_GetObjLstCache();
  if (arrPrimaryTypeObjLstCache == null) return '';
  try {
    const arrPrimaryTypeSel = arrPrimaryTypeObjLstCache.filter(
      (x) => x.primaryTypeId == strPrimaryTypeId,
    );
    let objPrimaryType: clsPrimaryTypeEN;
    if (arrPrimaryTypeSel.length > 0) {
      objPrimaryType = arrPrimaryTypeSel[0];
      return objPrimaryType.primaryTypeName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strPrimaryTypeId,
    );
    console.error(strMsg);
    alert(strMsg);
  }
  return '';
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-06-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function PrimaryType_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsPrimaryTypeEN.con_PrimaryTypeId:
      return (obj: clsPrimaryTypeEN) => {
        return obj.primaryTypeId === value;
      };
    case clsPrimaryTypeEN.con_PrimaryTypeName:
      return (obj: clsPrimaryTypeEN) => {
        return obj.primaryTypeName === value;
      };
    case clsPrimaryTypeEN.con_PrimaryTypeENName:
      return (obj: clsPrimaryTypeEN) => {
        return obj.primaryTypeENName === value;
      };
    case clsPrimaryTypeEN.con_OrderNum:
      return (obj: clsPrimaryTypeEN) => {
        return obj.orderNum === value;
      };
    case clsPrimaryTypeEN.con_Memo:
      return (obj: clsPrimaryTypeEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[PrimaryType]中不存在!(in ${primaryType_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2025-06-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 * @returns 返回一个输出字段值
 */
export async function PrimaryType_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsPrimaryTypeEN.con_PrimaryTypeId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsPrimaryTypeEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsPrimaryTypeEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strPrimaryTypeId = strInValue;
  if (IsNullOrEmpty(strPrimaryTypeId) == true) {
    return '';
  }
  const objPrimaryType = await PrimaryType_GetObjByPrimaryTypeIdCache(strPrimaryTypeId);
  if (objPrimaryType == null) return '';
  if (objPrimaryType.GetFldValue(strOutFldName) == null) return '';
  return objPrimaryType.GetFldValue(strOutFldName).toString();
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2025-06-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 * @returns 返回一个关键字值列表
 */
export async function PrimaryType_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsPrimaryTypeEN.con_PrimaryTypeId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrPrimaryType = await PrimaryType_GetObjLstCache();
  if (arrPrimaryType == null) return [];
  let arrPrimaryTypeSel = arrPrimaryType;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrPrimaryTypeSel = arrPrimaryTypeSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrPrimaryTypeSel = arrPrimaryTypeSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrPrimaryTypeSel = arrPrimaryTypeSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrPrimaryTypeSel = arrPrimaryTypeSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrPrimaryTypeSel = arrPrimaryTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrPrimaryTypeSel = arrPrimaryTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrPrimaryTypeSel = arrPrimaryTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrPrimaryTypeSel = arrPrimaryTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrPrimaryTypeSel = arrPrimaryTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrPrimaryTypeSel = arrPrimaryTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrPrimaryTypeSel.length == 0) return [];
  return arrPrimaryTypeSel.map((x) => x.primaryTypeId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function PrimaryType_GetFldValueAsync(
  strFldName: string,
  strWhereCond: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetFldValueAsync';
  const strAction = 'GetFldValue';
  const strUrl = GetWebApiUrl(primaryType_Controller, strAction);

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
        primaryType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        primaryType_ConstructorName,
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
export async function PrimaryType_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(primaryType_Controller, strAction);

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
        primaryType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        primaryType_ConstructorName,
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
export async function PrimaryType_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(primaryType_Controller, strAction);

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
        primaryType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        primaryType_ConstructorName,
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
export async function PrimaryType_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsPrimaryTypeEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(primaryType_Controller, strAction);

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
      const objPrimaryType = PrimaryType_GetObjFromJsonObj(returnObj);
      return objPrimaryType;
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
        primaryType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        primaryType_ConstructorName,
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
export async function PrimaryType_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsPrimaryTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsPrimaryTypeEN.WhereFormat) == false) {
    strWhereCond = clsPrimaryTypeEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsPrimaryTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsPrimaryTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrPrimaryTypeExObjLstCache: Array<clsPrimaryTypeEN> = CacheHelper.Get(strKey);
    const arrPrimaryTypeObjLstT = PrimaryType_GetObjLstByJSONObjLst(arrPrimaryTypeExObjLstCache);
    return arrPrimaryTypeObjLstT;
  }
  try {
    const arrPrimaryTypeExObjLst = await PrimaryType_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrPrimaryTypeExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrPrimaryTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrPrimaryTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      primaryType_ConstructorName,
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
export async function PrimaryType_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsPrimaryTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsPrimaryTypeEN.WhereFormat) == false) {
    strWhereCond = clsPrimaryTypeEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsPrimaryTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsPrimaryTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrPrimaryTypeExObjLstCache: Array<clsPrimaryTypeEN> = JSON.parse(strTempObjLst);
    const arrPrimaryTypeObjLstT = PrimaryType_GetObjLstByJSONObjLst(arrPrimaryTypeExObjLstCache);
    return arrPrimaryTypeObjLstT;
  }
  try {
    const arrPrimaryTypeExObjLst = await PrimaryType_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrPrimaryTypeExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrPrimaryTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrPrimaryTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      primaryType_ConstructorName,
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
export async function PrimaryType_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsPrimaryTypeEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrPrimaryTypeObjLstCache: Array<clsPrimaryTypeEN> = JSON.parse(strTempObjLst);
    return arrPrimaryTypeObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function PrimaryType_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsPrimaryTypeEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(primaryType_Controller, strAction);

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
          primaryType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = PrimaryType_GetObjLstByJSONObjLst(returnObjLst);
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
        primaryType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        primaryType_ConstructorName,
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
export async function PrimaryType_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsPrimaryTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsPrimaryTypeEN.WhereFormat) == false) {
    strWhereCond = clsPrimaryTypeEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsPrimaryTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsPrimaryTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrPrimaryTypeExObjLstCache: Array<clsPrimaryTypeEN> = JSON.parse(strTempObjLst);
    const arrPrimaryTypeObjLstT = PrimaryType_GetObjLstByJSONObjLst(arrPrimaryTypeExObjLstCache);
    return arrPrimaryTypeObjLstT;
  }
  try {
    const arrPrimaryTypeExObjLst = await PrimaryType_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrPrimaryTypeExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrPrimaryTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrPrimaryTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      primaryType_ConstructorName,
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
export async function PrimaryType_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsPrimaryTypeEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrPrimaryTypeObjLstCache: Array<clsPrimaryTypeEN> = JSON.parse(strTempObjLst);
    return arrPrimaryTypeObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function PrimaryType_GetObjLstCache(): Promise<Array<clsPrimaryTypeEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrPrimaryTypeObjLstCache;
  switch (clsPrimaryTypeEN.CacheModeId) {
    case '04': //sessionStorage
      arrPrimaryTypeObjLstCache = await PrimaryType_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrPrimaryTypeObjLstCache = await PrimaryType_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrPrimaryTypeObjLstCache = await PrimaryType_GetObjLstClientCache();
      break;
    default:
      arrPrimaryTypeObjLstCache = await PrimaryType_GetObjLstClientCache();
      break;
  }
  return arrPrimaryTypeObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function PrimaryType_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrPrimaryTypeObjLstCache;
  switch (clsPrimaryTypeEN.CacheModeId) {
    case '04': //sessionStorage
      arrPrimaryTypeObjLstCache = await PrimaryType_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrPrimaryTypeObjLstCache = await PrimaryType_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrPrimaryTypeObjLstCache = null;
      break;
    default:
      arrPrimaryTypeObjLstCache = null;
      break;
  }
  return arrPrimaryTypeObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrPrimaryTypeIdCond:条件对象
 * @returns 对象列表子集
 */
export async function PrimaryType_GetSubObjLstCache(objPrimaryTypeCond: ConditionCollection) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrPrimaryTypeObjLstCache = await PrimaryType_GetObjLstCache();
  let arrPrimaryTypeSel = arrPrimaryTypeObjLstCache;
  if (objPrimaryTypeCond.GetConditions().length == 0) return arrPrimaryTypeSel;
  try {
    //console.log(sstrKeys);
    for (const objCondition of objPrimaryTypeCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrPrimaryTypeSel = arrPrimaryTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrPrimaryTypeSel = arrPrimaryTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrPrimaryTypeSel = arrPrimaryTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrPrimaryTypeSel = arrPrimaryTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrPrimaryTypeSel = arrPrimaryTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrPrimaryTypeSel = arrPrimaryTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrPrimaryTypeSel = arrPrimaryTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrPrimaryTypeSel = arrPrimaryTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrPrimaryTypeSel = arrPrimaryTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrPrimaryTypeSel = arrPrimaryTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrPrimaryTypeSel = arrPrimaryTypeSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrPrimaryTypeSel = arrPrimaryTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrPrimaryTypeSel = arrPrimaryTypeSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrPrimaryTypeSel = arrPrimaryTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrPrimaryTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objPrimaryTypeCond),
      primaryType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsPrimaryTypeEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrPrimaryTypeId:关键字列表
 * @returns 对象列表
 **/
export async function PrimaryType_GetObjLstByPrimaryTypeIdLstAsync(
  arrPrimaryTypeId: Array<string>,
): Promise<Array<clsPrimaryTypeEN>> {
  const strThisFuncName = 'GetObjLstByPrimaryTypeIdLstAsync';
  const strAction = 'GetObjLstByPrimaryTypeIdLst';
  const strUrl = GetWebApiUrl(primaryType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrPrimaryTypeId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          primaryType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = PrimaryType_GetObjLstByJSONObjLst(returnObjLst);
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
        primaryType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        primaryType_ConstructorName,
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
 * @param arrstrPrimaryTypeIdLst:关键字列表
 * @returns 对象列表
 */
export async function PrimaryType_GetObjLstByPrimaryTypeIdLstCache(
  arrPrimaryTypeIdLst: Array<string>,
) {
  const strThisFuncName = 'GetObjLstByPrimaryTypeIdLstCache';
  try {
    const arrPrimaryTypeObjLstCache = await PrimaryType_GetObjLstCache();
    const arrPrimaryTypeSel = arrPrimaryTypeObjLstCache.filter(
      (x) => arrPrimaryTypeIdLst.indexOf(x.primaryTypeId) > -1,
    );
    return arrPrimaryTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrPrimaryTypeIdLst.join(','),
      primaryType_ConstructorName,
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
export async function PrimaryType_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsPrimaryTypeEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(primaryType_Controller, strAction);

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
          primaryType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = PrimaryType_GetObjLstByJSONObjLst(returnObjLst);
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
        primaryType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        primaryType_ConstructorName,
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
export async function PrimaryType_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsPrimaryTypeEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(primaryType_Controller, strAction);

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
          primaryType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = PrimaryType_GetObjLstByJSONObjLst(returnObjLst);
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
        primaryType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        primaryType_ConstructorName,
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
export async function PrimaryType_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsPrimaryTypeEN>();
  const arrPrimaryTypeObjLstCache = await PrimaryType_GetObjLstCache();
  if (arrPrimaryTypeObjLstCache.length == 0) return arrPrimaryTypeObjLstCache;
  let arrPrimaryTypeSel = arrPrimaryTypeObjLstCache;
  const objPrimaryTypeCond = objPagerPara.conditionCollection;
  if (objPrimaryTypeCond == null) {
    const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return new Array<clsPrimaryTypeEN>();
  }
  //console.log("clsPrimaryTypeWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    for (const objCondition of objPrimaryTypeCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrPrimaryTypeSel = arrPrimaryTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrPrimaryTypeSel = arrPrimaryTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrPrimaryTypeSel = arrPrimaryTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrPrimaryTypeSel = arrPrimaryTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrPrimaryTypeSel = arrPrimaryTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrPrimaryTypeSel = arrPrimaryTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrPrimaryTypeSel = arrPrimaryTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrPrimaryTypeSel = arrPrimaryTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrPrimaryTypeSel = arrPrimaryTypeSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrPrimaryTypeSel = arrPrimaryTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrPrimaryTypeSel = arrPrimaryTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrPrimaryTypeSel = arrPrimaryTypeSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrPrimaryTypeSel = arrPrimaryTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrPrimaryTypeSel = arrPrimaryTypeSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrPrimaryTypeSel = arrPrimaryTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrPrimaryTypeSel.length == 0) return arrPrimaryTypeSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrPrimaryTypeSel = arrPrimaryTypeSel.sort(PrimaryType_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrPrimaryTypeSel = arrPrimaryTypeSel.sort(objPagerPara.sortFun);
    }
    arrPrimaryTypeSel = arrPrimaryTypeSel.slice(intStart, intEnd);
    return arrPrimaryTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      primaryType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsPrimaryTypeEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function PrimaryType_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsPrimaryTypeEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsPrimaryTypeEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(primaryType_Controller, strAction);

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
          primaryType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = PrimaryType_GetObjLstByJSONObjLst(returnObjLst);
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
        primaryType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        primaryType_ConstructorName,
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
 * @param strPrimaryTypeId:关键字
 * @returns 获取删除的结果
 **/
export async function PrimaryType_DelRecordAsync(strPrimaryTypeId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(primaryType_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strPrimaryTypeId);

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
        primaryType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        primaryType_ConstructorName,
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
 * @param arrPrimaryTypeId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function PrimaryType_DelPrimaryTypesAsync(
  arrPrimaryTypeId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelPrimaryTypesAsync';
  const strAction = 'DelPrimaryTypes';
  const strUrl = GetWebApiUrl(primaryType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrPrimaryTypeId, config);
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
        primaryType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        primaryType_ConstructorName,
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
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjExLstByPagerCache)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function PrimaryType_GetObjExLstByPagerCache(
  objPagerPara: stuPagerPara,
): Promise<Array<clsPrimaryTypeENEx>> {
  const strThisFuncName = 'GetObjLstByPagerCache';
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  const isFuncMapKey = `${objSortInfo.SortFld}`;
  const arrPrimaryTypeObjLst = await PrimaryType_GetObjLstCache();
  //从缓存中获取对象，如果缓存中不存在就扩展复制
  const arrNewObj = new Array<clsPrimaryTypeENEx>();
  const arrPrimaryTypeExObjLst = arrPrimaryTypeObjLst.map((obj) => {
    const cacheKey = `${obj.primaryTypeId}`;
    if (primaryTypeCache[cacheKey]) {
      const oldObj = primaryTypeCache[cacheKey];
      return oldObj;
    } else {
      const newObj = PrimaryType_CopyToEx(obj);
      arrNewObj.push(newObj);
      primaryTypeCache[cacheKey] = newObj;
      return newObj;
    }
  });
  for (const newObj of arrNewObj) {
    for (const strFldName of Object.keys(isFuncMapCache)) {
      await PrimaryType_FuncMapByFldName(strFldName, newObj);
    }
  }
  //检查关于当前扩展排序字段是否获取得值，如果没有获取过，就获取，并存缓存
  const bolIsFuncMap = isFuncMapCache[isFuncMapKey];
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsPrimaryTypeEN.AttributeName.indexOf(objSortInfo.SortFld) == -1 &&
    (bolIsFuncMap == false || bolIsFuncMap == undefined)
  ) {
    for (const newObj of arrPrimaryTypeExObjLst) {
      await PrimaryType_FuncMapByFldName(objSortInfo.SortFld, newObj);
      const cacheKey = `${newObj.primaryTypeId}`;
      primaryTypeCache[cacheKey] = newObj;
    }
    isFuncMapCache[isFuncMapKey] = true;
  }
  if (arrPrimaryTypeExObjLst.length == 0) return arrPrimaryTypeExObjLst;
  let arrPrimaryTypeSel: Array<clsPrimaryTypeENEx> = arrPrimaryTypeExObjLst;
  const objPrimaryTypeCond = objPagerPara.conditionCollection;
  if (objPrimaryTypeCond == null) {
    const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return arrPrimaryTypeExObjLst;
  }
  try {
    for (const objCondition of objPrimaryTypeCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrPrimaryTypeSel = arrPrimaryTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrPrimaryTypeSel = arrPrimaryTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrPrimaryTypeSel = arrPrimaryTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrPrimaryTypeSel = arrPrimaryTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrPrimaryTypeSel = arrPrimaryTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrPrimaryTypeSel = arrPrimaryTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrPrimaryTypeSel = arrPrimaryTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrPrimaryTypeSel = arrPrimaryTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.split(',');
            arrPrimaryTypeSel = arrPrimaryTypeSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrPrimaryTypeSel = arrPrimaryTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrPrimaryTypeSel = arrPrimaryTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrPrimaryTypeSel = arrPrimaryTypeSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrPrimaryTypeSel = arrPrimaryTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrPrimaryTypeSel = arrPrimaryTypeSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrPrimaryTypeSel = arrPrimaryTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrPrimaryTypeSel.length == 0) return arrPrimaryTypeSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      arrPrimaryTypeSel = arrPrimaryTypeSel.sort(
        PrimaryType_SortFunByExKey(objSortInfo.SortFld, objSortInfo.SortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrPrimaryTypeSel = arrPrimaryTypeSel.sort(objPagerPara.sortFun);
    }
    arrPrimaryTypeSel = arrPrimaryTypeSel.slice(intStart, intEnd);
    return arrPrimaryTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      primaryType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsPrimaryTypeENEx>();
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CopyToEx)
 * @param objPrimaryTypeENS:源对象
 * @returns 目标对象=>clsPrimaryTypeEN:objPrimaryTypeENT
 **/
export function PrimaryType_CopyToEx(objPrimaryTypeENS: clsPrimaryTypeEN): clsPrimaryTypeENEx {
  const strThisFuncName = PrimaryType_CopyToEx.name;
  const objPrimaryTypeENT = new clsPrimaryTypeENEx();
  try {
    ObjectAssign(objPrimaryTypeENT, objPrimaryTypeENS);
    return objPrimaryTypeENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001294)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      primaryType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objPrimaryTypeENT;
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2025-06-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function PrimaryType_FuncMapByFldName(
  strFldName: string,
  objPrimaryTypeEx: clsPrimaryTypeENEx,
) {
  const strThisFuncName = PrimaryType_FuncMapByFldName.name;
  console.log(objPrimaryTypeEx);
  strFldName = strFldName.replace('|Ex', '');
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsPrimaryTypeEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    default:
      strMsg = Format(
        '扩展字段:[{0}]在字段值函数映射中不存在!(in {1})',
        strFldName,
        strThisFuncName,
      );
      console.error(strMsg);
  }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-06-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByExKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function PrimaryType_SortFunByExKey(strKey: string, AscOrDesc: string) {
  strKey = strKey.replace('|Ex', '');
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      default:
        return PrimaryType_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      default:
        return PrimaryType_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据条件删除记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelMultiRecordByCondAsync)
 * @returns 实际删除记录的个数
 **/
export async function PrimaryType_DelPrimaryTypesByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelPrimaryTypesByCondAsync';
  const strAction = 'DelPrimaryTypesByCond';
  const strUrl = GetWebApiUrl(primaryType_Controller, strAction);

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
        primaryType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        primaryType_ConstructorName,
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
 * @param objPrimaryTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function PrimaryType_AddNewRecordAsync(
  objPrimaryTypeEN: clsPrimaryTypeEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  if (objPrimaryTypeEN.primaryTypeId === null || objPrimaryTypeEN.primaryTypeId === '') {
    const strMsg = '需要的对象的关键字为空,不能添加!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objPrimaryTypeEN);
  const strUrl = GetWebApiUrl(primaryType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPrimaryTypeEN, config);
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
        primaryType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        primaryType_ConstructorName,
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
 * @param objPrimaryTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function PrimaryType_AddNewRecordWithMaxIdAsync(
  objPrimaryTypeEN: clsPrimaryTypeEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(primaryType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPrimaryTypeEN, config);
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
        primaryType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        primaryType_ConstructorName,
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
 * @param objPrimaryTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function PrimaryType_GoTopAsync(objOrderByData: clsOrderByData): Promise<boolean> {
  const strThisFuncName = 'GoTopAsync';
  let strMsg = '';
  const strAction = 'GoTop';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表置顶时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(primaryType_Controller, strAction);

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
        primaryType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        primaryType_ConstructorName,
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
 * @param objPrimaryTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function PrimaryType_UpMoveAsync(objOrderByData: clsOrderByData): Promise<boolean> {
  const strThisFuncName = 'UpMoveAsync';
  let strMsg = '';
  const strAction = 'UpMove';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表上移时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objPrimaryTypeEN);
  const strUrl = GetWebApiUrl(primaryType_Controller, strAction);

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
        primaryType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        primaryType_ConstructorName,
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
 * @param objPrimaryTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function PrimaryType_DownMoveAsync(objOrderByData: clsOrderByData): Promise<boolean> {
  const strThisFuncName = 'DownMoveAsync';
  let strMsg = '';
  const strAction = 'DownMove';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表下移时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objPrimaryTypeEN);
  const strUrl = GetWebApiUrl(primaryType_Controller, strAction);

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
        primaryType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        primaryType_ConstructorName,
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
export async function PrimaryType_AddNewObjSave(
  objPrimaryTypeEN: clsPrimaryTypeEN,
): Promise<AddRecordResult> {
  const strThisFuncName = 'AddNewObjSave';
  try {
    PrimaryType_CheckPropertyNew(objPrimaryTypeEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${primaryType_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    alert(strMsg);
    return { keyword: '', success: false }; //一定要有一个返回值,否则会出错!
  }
  try {
    //检查唯一性条件
    let returnBool = false;
    const bolIsExist = await PrimaryType_IsExistAsync(objPrimaryTypeEN.primaryTypeId);
    if (bolIsExist == true) {
      const strMsg = Format('添加记录时,关键字：{0}已经存在!', objPrimaryTypeEN.primaryTypeId);
      console.error(strMsg);
      throw strMsg;
    }
    returnBool = await PrimaryType_AddNewRecordAsync(objPrimaryTypeEN);
    if (returnBool == true) {
      PrimaryType_ReFreshCache();
    } else {
      const strInfo = `添加[主键类型(PrimaryType)]记录不成功!`;
      //显示信息框
      throw strInfo;
    }
    return { keyword: objPrimaryTypeEN.primaryTypeId, success: returnBool }; //一定要有一个返回值,否则会出错!
  } catch (e) {
    const strMsg = `添加记录不成功,${e}.(in ${primaryType_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/** 修改记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjSave)
 **/
export async function PrimaryType_UpdateObjSave(
  objPrimaryTypeEN: clsPrimaryTypeEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateObjSave';
  objPrimaryTypeEN.sfUpdFldSetStr = objPrimaryTypeEN.updFldString; //设置哪些字段被修改(脏字段)
  if (objPrimaryTypeEN.primaryTypeId == '' || objPrimaryTypeEN.primaryTypeId == undefined) {
    console.error('关键字不能为空!');
    throw '关键字不能为空!';
  }
  try {
    PrimaryType_CheckProperty4Update(objPrimaryTypeEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${primaryType_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
  try {
    //检查唯一性条件
    const returnBool = await PrimaryType_UpdateRecordAsync(objPrimaryTypeEN);
    if (returnBool == true) {
      PrimaryType_ReFreshCache();
    }
    return returnBool;
  } catch (e) {
    const strMsg = `修改记录不成功,${e}.(in ${primaryType_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 把所给的关键字列表相关的记录移底
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GoBottomAsync)
 * @param objPrimaryTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function PrimaryType_GoBottomAsync(objOrderByData: clsOrderByData): Promise<boolean> {
  const strThisFuncName = 'GoBottomAsync';
  let strMsg = '';
  const strAction = 'GoBottom';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表置底时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objPrimaryTypeEN);
  const strUrl = GetWebApiUrl(primaryType_Controller, strAction);

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
        primaryType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        primaryType_ConstructorName,
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
 * @param objPrimaryTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function PrimaryType_ReOrderAsync(objOrderByData: clsOrderByData): Promise<boolean> {
  const strThisFuncName = 'ReOrderAsync';
  const strAction = 'ReOrder';
  //var strJSON = JSON.stringify(objPrimaryTypeEN);
  const strUrl = GetWebApiUrl(primaryType_Controller, strAction);

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
        primaryType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        primaryType_ConstructorName,
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
 * @param objPrimaryTypeEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function PrimaryType_AddNewRecordWithReturnKeyAsync(
  objPrimaryTypeEN: clsPrimaryTypeEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(primaryType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPrimaryTypeEN, config);
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
        primaryType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        primaryType_ConstructorName,
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
 * @param objPrimaryTypeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function PrimaryType_UpdateRecordAsync(
  objPrimaryTypeEN: clsPrimaryTypeEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objPrimaryTypeEN.sfUpdFldSetStr === undefined ||
    objPrimaryTypeEN.sfUpdFldSetStr === null ||
    objPrimaryTypeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objPrimaryTypeEN.primaryTypeId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(primaryType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPrimaryTypeEN, config);
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
        primaryType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        primaryType_ConstructorName,
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
 * @param objPrimaryTypeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function PrimaryType_EditRecordExAsync(
  objPrimaryTypeEN: clsPrimaryTypeEN,
): Promise<boolean> {
  const strThisFuncName = 'EditRecordExAsync';
  const strAction = 'EditRecordEx';
  if (
    objPrimaryTypeEN.sfUpdFldSetStr === undefined ||
    objPrimaryTypeEN.sfUpdFldSetStr === null ||
    objPrimaryTypeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objPrimaryTypeEN.primaryTypeId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(primaryType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPrimaryTypeEN, config);
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
        primaryType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        primaryType_ConstructorName,
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
 * @param objPrimaryTypeEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function PrimaryType_UpdateWithConditionAsync(
  objPrimaryTypeEN: clsPrimaryTypeEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objPrimaryTypeEN.sfUpdFldSetStr === undefined ||
    objPrimaryTypeEN.sfUpdFldSetStr === null ||
    objPrimaryTypeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objPrimaryTypeEN.primaryTypeId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(primaryType_Controller, strAction);
  objPrimaryTypeEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPrimaryTypeEN, config);
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
        primaryType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        primaryType_ConstructorName,
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
 * @param objstrPrimaryTypeIdCond:条件对象
 * @returns 对象列表子集
 */
export async function PrimaryType_IsExistRecordCache(objPrimaryTypeCond: ConditionCollection) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrPrimaryTypeObjLstCache = await PrimaryType_GetObjLstCache();
  if (arrPrimaryTypeObjLstCache == null) return false;
  let arrPrimaryTypeSel = arrPrimaryTypeObjLstCache;
  if (objPrimaryTypeCond.GetConditions().length == 0)
    return arrPrimaryTypeSel.length > 0 ? true : false;
  try {
    for (const objCondition of objPrimaryTypeCond.GetConditions()) {
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
            arrPrimaryTypeSel = arrPrimaryTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrPrimaryTypeSel = arrPrimaryTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrPrimaryTypeSel = arrPrimaryTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrPrimaryTypeSel = arrPrimaryTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrPrimaryTypeSel = arrPrimaryTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrPrimaryTypeSel = arrPrimaryTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrPrimaryTypeSel = arrPrimaryTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrPrimaryTypeSel = arrPrimaryTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrPrimaryTypeSel = arrPrimaryTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrPrimaryTypeSel = arrPrimaryTypeSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrPrimaryTypeSel = arrPrimaryTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrPrimaryTypeSel = arrPrimaryTypeSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrPrimaryTypeSel = arrPrimaryTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrPrimaryTypeSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objPrimaryTypeCond),
      primaryType_ConstructorName,
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
export async function PrimaryType_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(primaryType_Controller, strAction);

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
        primaryType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        primaryType_ConstructorName,
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
 * @param strPrimaryTypeId:所给的关键字
 * @returns 对象
 */
export async function PrimaryType_IsExistCache(strPrimaryTypeId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrPrimaryTypeObjLstCache = await PrimaryType_GetObjLstCache();
  if (arrPrimaryTypeObjLstCache == null) return false;
  try {
    const arrPrimaryTypeSel = arrPrimaryTypeObjLstCache.filter(
      (x) => x.primaryTypeId == strPrimaryTypeId,
    );
    if (arrPrimaryTypeSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strPrimaryTypeId,
      primaryType_ConstructorName,
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
 * @param strPrimaryTypeId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function PrimaryType_IsExistAsync(strPrimaryTypeId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(primaryType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strPrimaryTypeId,
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
        primaryType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        primaryType_ConstructorName,
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
export async function PrimaryType_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(primaryType_Controller, strAction);

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
        primaryType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        primaryType_ConstructorName,
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
 * @param objPrimaryTypeCond:条件对象
 * @returns 对象列表记录数
 */
export async function PrimaryType_GetRecCountByCondCache(objPrimaryTypeCond: ConditionCollection) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrPrimaryTypeObjLstCache = await PrimaryType_GetObjLstCache();
  if (arrPrimaryTypeObjLstCache == null) return 0;
  let arrPrimaryTypeSel = arrPrimaryTypeObjLstCache;
  if (objPrimaryTypeCond.GetConditions().length == 0) return arrPrimaryTypeSel.length;
  try {
    for (const objCondition of objPrimaryTypeCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrPrimaryTypeSel = arrPrimaryTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrPrimaryTypeSel = arrPrimaryTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrPrimaryTypeSel = arrPrimaryTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrPrimaryTypeSel = arrPrimaryTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrPrimaryTypeSel = arrPrimaryTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrPrimaryTypeSel = arrPrimaryTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrPrimaryTypeSel = arrPrimaryTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrPrimaryTypeSel = arrPrimaryTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrPrimaryTypeSel = arrPrimaryTypeSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrPrimaryTypeSel = arrPrimaryTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrPrimaryTypeSel = arrPrimaryTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrPrimaryTypeSel = arrPrimaryTypeSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrPrimaryTypeSel = arrPrimaryTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrPrimaryTypeSel = arrPrimaryTypeSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrPrimaryTypeSel = arrPrimaryTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrPrimaryTypeSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objPrimaryTypeCond),
      primaryType_ConstructorName,
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
export async function PrimaryType_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(primaryType_Controller, strAction);

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
        primaryType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        primaryType_ConstructorName,
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
export function PrimaryType_GetWebApiUrl(strController: string, strAction: string): string {
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
export function PrimaryType_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功!');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clsPrimaryTypeEN._CurrTabName;
  switch (clsPrimaryTypeEN.CacheModeId) {
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
  clsPrimaryTypeEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
}

/**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export function PrimaryType_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsPrimaryTypeEN._CurrTabName;
    switch (clsPrimaryTypeEN.CacheModeId) {
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
    clsPrimaryTypeEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export function PrimaryType_GetLastRefreshTime(): string {
  if (clsPrimaryTypeEN._RefreshTimeLst.length == 0) return '';
  return clsPrimaryTypeEN._RefreshTimeLst[clsPrimaryTypeEN._RefreshTimeLst.length - 1];
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export async function PrimaryType_BindDdl_PrimaryTypeIdInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
) {
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_PrimaryTypeIdInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_PrimaryTypeIdInDivCache");
  let arrObjLstSel = await PrimaryType_GetObjLstCache();
  if (arrObjLstSel == null) return;
  arrObjLstSel = arrObjLstSel.sort((x, y) => x.orderNum - y.orderNum);
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsPrimaryTypeEN.con_PrimaryTypeId,
    clsPrimaryTypeEN.con_PrimaryTypeName,
    '选主键类型...',
  );
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export async function PrimaryType_GetArrPrimaryType() {
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_PrimaryTypeIdInDivCache");
  const arrPrimaryType = new Array<clsPrimaryTypeEN>();
  let arrObjLstSel = await PrimaryType_GetObjLstCache();
  if (arrObjLstSel == null) return null;
  arrObjLstSel = arrObjLstSel.sort((x, y) => x.orderNum - y.orderNum);
  const obj0 = new clsPrimaryTypeEN();
  obj0.primaryTypeId = '0';
  obj0.primaryTypeName = '选主键类型...';
  arrPrimaryType.push(obj0);
  arrObjLstSel.forEach((x) => arrPrimaryType.push(x));
  return arrPrimaryType;
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function PrimaryType_CheckPropertyNew(pobjPrimaryTypeEN: clsPrimaryTypeEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjPrimaryTypeEN.primaryTypeName) === true) {
    throw new Error(
      `(errid:Watl000411)字段[主键类型名]不能为空(In 主键类型)!(clsPrimaryTypeBL:CheckPropertyNew0)`,
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjPrimaryTypeEN.primaryTypeId) == false &&
    GetStrLen(pobjPrimaryTypeEN.primaryTypeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000413)字段[主键类型ID(primaryTypeId)]的长度不能超过2(In 主键类型(PrimaryType))!值:${pobjPrimaryTypeEN.primaryTypeId}(clsPrimaryTypeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrimaryTypeEN.primaryTypeName) == false &&
    GetStrLen(pobjPrimaryTypeEN.primaryTypeName) > 30
  ) {
    throw new Error(
      `(errid:Watl000413)字段[主键类型名(primaryTypeName)]的长度不能超过30(In 主键类型(PrimaryType))!值:${pobjPrimaryTypeEN.primaryTypeName}(clsPrimaryTypeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrimaryTypeEN.primaryTypeENName) == false &&
    GetStrLen(pobjPrimaryTypeEN.primaryTypeENName) > 50
  ) {
    throw new Error(
      `(errid:Watl000413)字段[主键类型英文名(primaryTypeENName)]的长度不能超过50(In 主键类型(PrimaryType))!值:${pobjPrimaryTypeEN.primaryTypeENName}(clsPrimaryTypeBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjPrimaryTypeEN.memo) == false && GetStrLen(pobjPrimaryTypeEN.memo) > 1000) {
    throw new Error(
      `(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In 主键类型(PrimaryType))!值:${pobjPrimaryTypeEN.memo}(clsPrimaryTypeBL:CheckPropertyNew)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjPrimaryTypeEN.primaryTypeId) == false &&
    undefined !== pobjPrimaryTypeEN.primaryTypeId &&
    tzDataType.isString(pobjPrimaryTypeEN.primaryTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[主键类型ID(primaryTypeId)]的值:[${pobjPrimaryTypeEN.primaryTypeId}], 非法,应该为字符型(In 主键类型(PrimaryType))!(clsPrimaryTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrimaryTypeEN.primaryTypeName) == false &&
    undefined !== pobjPrimaryTypeEN.primaryTypeName &&
    tzDataType.isString(pobjPrimaryTypeEN.primaryTypeName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[主键类型名(primaryTypeName)]的值:[${pobjPrimaryTypeEN.primaryTypeName}], 非法,应该为字符型(In 主键类型(PrimaryType))!(clsPrimaryTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrimaryTypeEN.primaryTypeENName) == false &&
    undefined !== pobjPrimaryTypeEN.primaryTypeENName &&
    tzDataType.isString(pobjPrimaryTypeEN.primaryTypeENName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[主键类型英文名(primaryTypeENName)]的值:[${pobjPrimaryTypeEN.primaryTypeENName}], 非法,应该为字符型(In 主键类型(PrimaryType))!(clsPrimaryTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjPrimaryTypeEN.orderNum &&
    undefined !== pobjPrimaryTypeEN.orderNum &&
    tzDataType.isNumber(pobjPrimaryTypeEN.orderNum) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[序号(orderNum)]的值:[${pobjPrimaryTypeEN.orderNum}], 非法,应该为数值型(In 主键类型(PrimaryType))!(clsPrimaryTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrimaryTypeEN.memo) == false &&
    undefined !== pobjPrimaryTypeEN.memo &&
    tzDataType.isString(pobjPrimaryTypeEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[说明(memo)]的值:[${pobjPrimaryTypeEN.memo}], 非法,应该为字符型(In 主键类型(PrimaryType))!(clsPrimaryTypeBL:CheckPropertyNew0)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function PrimaryType_CheckProperty4Update(pobjPrimaryTypeEN: clsPrimaryTypeEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjPrimaryTypeEN.primaryTypeId) == false &&
    GetStrLen(pobjPrimaryTypeEN.primaryTypeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000416)字段[主键类型ID(primaryTypeId)]的长度不能超过2(In 主键类型(PrimaryType))!值:${pobjPrimaryTypeEN.primaryTypeId}(clsPrimaryTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrimaryTypeEN.primaryTypeName) == false &&
    GetStrLen(pobjPrimaryTypeEN.primaryTypeName) > 30
  ) {
    throw new Error(
      `(errid:Watl000416)字段[主键类型名(primaryTypeName)]的长度不能超过30(In 主键类型(PrimaryType))!值:${pobjPrimaryTypeEN.primaryTypeName}(clsPrimaryTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrimaryTypeEN.primaryTypeENName) == false &&
    GetStrLen(pobjPrimaryTypeEN.primaryTypeENName) > 50
  ) {
    throw new Error(
      `(errid:Watl000416)字段[主键类型英文名(primaryTypeENName)]的长度不能超过50(In 主键类型(PrimaryType))!值:${pobjPrimaryTypeEN.primaryTypeENName}(clsPrimaryTypeBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjPrimaryTypeEN.memo) == false && GetStrLen(pobjPrimaryTypeEN.memo) > 1000) {
    throw new Error(
      `(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In 主键类型(PrimaryType))!值:${pobjPrimaryTypeEN.memo}(clsPrimaryTypeBL:CheckProperty4Update)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjPrimaryTypeEN.primaryTypeId) == false &&
    undefined !== pobjPrimaryTypeEN.primaryTypeId &&
    tzDataType.isString(pobjPrimaryTypeEN.primaryTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[主键类型ID(primaryTypeId)]的值:[${pobjPrimaryTypeEN.primaryTypeId}], 非法,应该为字符型(In 主键类型(PrimaryType))!(clsPrimaryTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrimaryTypeEN.primaryTypeName) == false &&
    undefined !== pobjPrimaryTypeEN.primaryTypeName &&
    tzDataType.isString(pobjPrimaryTypeEN.primaryTypeName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[主键类型名(primaryTypeName)]的值:[${pobjPrimaryTypeEN.primaryTypeName}], 非法,应该为字符型(In 主键类型(PrimaryType))!(clsPrimaryTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrimaryTypeEN.primaryTypeENName) == false &&
    undefined !== pobjPrimaryTypeEN.primaryTypeENName &&
    tzDataType.isString(pobjPrimaryTypeEN.primaryTypeENName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[主键类型英文名(primaryTypeENName)]的值:[${pobjPrimaryTypeEN.primaryTypeENName}], 非法,应该为字符型(In 主键类型(PrimaryType))!(clsPrimaryTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjPrimaryTypeEN.orderNum &&
    undefined !== pobjPrimaryTypeEN.orderNum &&
    tzDataType.isNumber(pobjPrimaryTypeEN.orderNum) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[序号(orderNum)]的值:[${pobjPrimaryTypeEN.orderNum}], 非法,应该为数值型(In 主键类型(PrimaryType))!(clsPrimaryTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrimaryTypeEN.memo) == false &&
    undefined !== pobjPrimaryTypeEN.memo &&
    tzDataType.isString(pobjPrimaryTypeEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[说明(memo)]的值:[${pobjPrimaryTypeEN.memo}], 非法,应该为字符型(In 主键类型(PrimaryType))!(clsPrimaryTypeBL:CheckProperty4Update)`,
    );
  }
  //检查主键是否为Null或者空!
  if (
    IsNullOrEmpty(pobjPrimaryTypeEN.primaryTypeId) === true ||
    pobjPrimaryTypeEN.primaryTypeId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000064)字段[主键类型ID]不能为空(In 主键类型)!(clsPrimaryTypeBL:CheckProperty4Update)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2025-06-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function PrimaryType_GetJSONStrByObj(pobjPrimaryTypeEN: clsPrimaryTypeEN): string {
  pobjPrimaryTypeEN.sfUpdFldSetStr = pobjPrimaryTypeEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjPrimaryTypeEN);
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
 * 日期:2025-06-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
 */
export function PrimaryType_GetObjLstByJSONStr(strJSON: string): Array<clsPrimaryTypeEN> {
  let arrPrimaryTypeObjLst = new Array<clsPrimaryTypeEN>();
  if (strJSON === '') {
    return arrPrimaryTypeObjLst;
  }
  try {
    arrPrimaryTypeObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrPrimaryTypeObjLst;
  }
  return arrPrimaryTypeObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-06-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrPrimaryTypeObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function PrimaryType_GetObjLstByJSONObjLst(
  arrPrimaryTypeObjLstS: Array<clsPrimaryTypeEN>,
): Array<clsPrimaryTypeEN> {
  const arrPrimaryTypeObjLst = new Array<clsPrimaryTypeEN>();
  for (const objInFor of arrPrimaryTypeObjLstS) {
    const obj1 = PrimaryType_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrPrimaryTypeObjLst.push(obj1);
  }
  return arrPrimaryTypeObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-06-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function PrimaryType_GetObjByJSONStr(strJSON: string): clsPrimaryTypeEN {
  let pobjPrimaryTypeEN = new clsPrimaryTypeEN();
  if (strJSON === '') {
    return pobjPrimaryTypeEN;
  }
  try {
    pobjPrimaryTypeEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjPrimaryTypeEN;
  }
  return pobjPrimaryTypeEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function PrimaryType_GetCombineCondition(objPrimaryTypeCond: clsPrimaryTypeEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objPrimaryTypeCond.dicFldComparisonOp,
      clsPrimaryTypeEN.con_PrimaryTypeId,
    ) == true
  ) {
    const strComparisonOpPrimaryTypeId: string =
      objPrimaryTypeCond.dicFldComparisonOp[clsPrimaryTypeEN.con_PrimaryTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrimaryTypeEN.con_PrimaryTypeId,
      objPrimaryTypeCond.primaryTypeId,
      strComparisonOpPrimaryTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrimaryTypeCond.dicFldComparisonOp,
      clsPrimaryTypeEN.con_PrimaryTypeName,
    ) == true
  ) {
    const strComparisonOpPrimaryTypeName: string =
      objPrimaryTypeCond.dicFldComparisonOp[clsPrimaryTypeEN.con_PrimaryTypeName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrimaryTypeEN.con_PrimaryTypeName,
      objPrimaryTypeCond.primaryTypeName,
      strComparisonOpPrimaryTypeName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrimaryTypeCond.dicFldComparisonOp,
      clsPrimaryTypeEN.con_PrimaryTypeENName,
    ) == true
  ) {
    const strComparisonOpPrimaryTypeENName: string =
      objPrimaryTypeCond.dicFldComparisonOp[clsPrimaryTypeEN.con_PrimaryTypeENName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrimaryTypeEN.con_PrimaryTypeENName,
      objPrimaryTypeCond.primaryTypeENName,
      strComparisonOpPrimaryTypeENName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrimaryTypeCond.dicFldComparisonOp,
      clsPrimaryTypeEN.con_OrderNum,
    ) == true
  ) {
    const strComparisonOpOrderNum: string =
      objPrimaryTypeCond.dicFldComparisonOp[clsPrimaryTypeEN.con_OrderNum];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsPrimaryTypeEN.con_OrderNum,
      objPrimaryTypeCond.orderNum,
      strComparisonOpOrderNum,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrimaryTypeCond.dicFldComparisonOp,
      clsPrimaryTypeEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objPrimaryTypeCond.dicFldComparisonOp[clsPrimaryTypeEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrimaryTypeEN.con_Memo,
      objPrimaryTypeCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objPrimaryTypeENS:源对象
 * @param objPrimaryTypeENT:目标对象
 */
export function PrimaryType_GetObjFromJsonObj(
  objPrimaryTypeENS: clsPrimaryTypeEN,
): clsPrimaryTypeEN {
  const objPrimaryTypeENT: clsPrimaryTypeEN = new clsPrimaryTypeEN();
  ObjectAssign(objPrimaryTypeENT, objPrimaryTypeENS);
  return objPrimaryTypeENT;
}
