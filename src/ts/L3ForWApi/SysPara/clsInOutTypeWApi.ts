/**
 * 类名:clsInOutTypeWApi
 * 表名:InOutType(00050135)
 * 版本:2025.05.12.1(服务器:WIN-SRV103-116)
 * 日期:2025/05/13 03:39:52
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
 * InOut类型(InOutType)
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
import { clsInOutTypeEN } from '@/ts/L0Entity/SysPara/clsInOutTypeEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';

export const inOutType_Controller = 'InOutTypeApi';
export const inOutType_ConstructorName = 'inOutType';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strInOutTypeId:关键字
 * @returns 对象
 **/
export async function InOutType_GetObjByInOutTypeIdAsync(
  strInOutTypeId: string,
): Promise<clsInOutTypeEN | null> {
  const strThisFuncName = 'GetObjByInOutTypeIdAsync';

  if (IsNullOrEmpty(strInOutTypeId) == true) {
    const strMsg = Format(
      '参数:[strInOutTypeId]不能为空!(In clsInOutTypeWApi.GetObjByInOutTypeIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strInOutTypeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strInOutTypeId]的长度:[{0}]不正确!(clsInOutTypeWApi.GetObjByInOutTypeIdAsync)',
      strInOutTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByInOutTypeId';
  const strUrl = GetWebApiUrl(inOutType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strInOutTypeId,
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
      const objInOutType = InOutType_GetObjFromJsonObj(returnObj);
      return objInOutType;
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
        inOutType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        inOutType_ConstructorName,
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
 * @param strInOutTypeId:所给的关键字
 * @returns 对象
 */
export async function InOutType_GetObjByInOutTypeIdlocalStorage(strInOutTypeId: string) {
  const strThisFuncName = 'GetObjByInOutTypeIdlocalStorage';

  if (IsNullOrEmpty(strInOutTypeId) == true) {
    const strMsg = Format(
      '参数:[strInOutTypeId]不能为空!(In clsInOutTypeWApi.GetObjByInOutTypeIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strInOutTypeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strInOutTypeId]的长度:[{0}]不正确!(clsInOutTypeWApi.GetObjByInOutTypeIdlocalStorage)',
      strInOutTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsInOutTypeEN._CurrTabName, strInOutTypeId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objInOutTypeCache: clsInOutTypeEN = JSON.parse(strTempObj);
    return objInOutTypeCache;
  }
  try {
    const objInOutType = await InOutType_GetObjByInOutTypeIdAsync(strInOutTypeId);
    if (objInOutType != null) {
      localStorage.setItem(strKey, JSON.stringify(objInOutType));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objInOutType;
    }
    return objInOutType;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strInOutTypeId,
      inOutType_ConstructorName,
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
 * @param strInOutTypeId:所给的关键字
 * @returns 对象
 */
export async function InOutType_GetObjByInOutTypeIdCache(
  strInOutTypeId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByInOutTypeIdCache';

  if (IsNullOrEmpty(strInOutTypeId) == true) {
    const strMsg = Format(
      '参数:[strInOutTypeId]不能为空!(In clsInOutTypeWApi.GetObjByInOutTypeIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strInOutTypeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strInOutTypeId]的长度:[{0}]不正确!(clsInOutTypeWApi.GetObjByInOutTypeIdCache)',
      strInOutTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrInOutTypeObjLstCache = await InOutType_GetObjLstCache();
  try {
    const arrInOutTypeSel = arrInOutTypeObjLstCache.filter((x) => x.inOutTypeId == strInOutTypeId);
    let objInOutType: clsInOutTypeEN;
    if (arrInOutTypeSel.length > 0) {
      objInOutType = arrInOutTypeSel[0];
      return objInOutType;
    } else {
      if (bolTryAsyncOnce == true) {
        const objInOutTypeConst = await InOutType_GetObjByInOutTypeIdAsync(strInOutTypeId);
        if (objInOutTypeConst != null) {
          InOutType_ReFreshThisCache();
          return objInOutTypeConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strInOutTypeId,
      inOutType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objInOutType:所给的对象
 * @returns 对象
 */
export async function InOutType_UpdateObjInLstCache(objInOutType: clsInOutTypeEN) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrInOutTypeObjLstCache = await InOutType_GetObjLstCache();
    const obj = arrInOutTypeObjLstCache.find((x) => x.inOutTypeId == objInOutType.inOutTypeId);
    if (obj != null) {
      objInOutType.inOutTypeId = obj.inOutTypeId;
      ObjectAssign(obj, objInOutType);
    } else {
      arrInOutTypeObjLstCache.push(objInOutType);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      inOutType_ConstructorName,
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
export function InOutType_SortFunDefa(a: clsInOutTypeEN, b: clsInOutTypeEN): number {
  return a.inOutTypeId.localeCompare(b.inOutTypeId);
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
export function InOutType_SortFunDefa2Fld(a: clsInOutTypeEN, b: clsInOutTypeEN): number {
  if (a.inOutTypeName == b.inOutTypeName) return a.inOutTypeENName.localeCompare(b.inOutTypeENName);
  else return a.inOutTypeName.localeCompare(b.inOutTypeName);
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
export function InOutType_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsInOutTypeEN.con_InOutTypeId:
        return (a: clsInOutTypeEN, b: clsInOutTypeEN) => {
          return a.inOutTypeId.localeCompare(b.inOutTypeId);
        };
      case clsInOutTypeEN.con_InOutTypeName:
        return (a: clsInOutTypeEN, b: clsInOutTypeEN) => {
          return a.inOutTypeName.localeCompare(b.inOutTypeName);
        };
      case clsInOutTypeEN.con_InOutTypeENName:
        return (a: clsInOutTypeEN, b: clsInOutTypeEN) => {
          if (a.inOutTypeENName == null) return -1;
          if (b.inOutTypeENName == null) return 1;
          return a.inOutTypeENName.localeCompare(b.inOutTypeENName);
        };
      case clsInOutTypeEN.con_Memo:
        return (a: clsInOutTypeEN, b: clsInOutTypeEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[InOutType]中不存在!(in ${inOutType_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsInOutTypeEN.con_InOutTypeId:
        return (a: clsInOutTypeEN, b: clsInOutTypeEN) => {
          return b.inOutTypeId.localeCompare(a.inOutTypeId);
        };
      case clsInOutTypeEN.con_InOutTypeName:
        return (a: clsInOutTypeEN, b: clsInOutTypeEN) => {
          return b.inOutTypeName.localeCompare(a.inOutTypeName);
        };
      case clsInOutTypeEN.con_InOutTypeENName:
        return (a: clsInOutTypeEN, b: clsInOutTypeEN) => {
          if (b.inOutTypeENName == null) return -1;
          if (a.inOutTypeENName == null) return 1;
          return b.inOutTypeENName.localeCompare(a.inOutTypeENName);
        };
      case clsInOutTypeEN.con_Memo:
        return (a: clsInOutTypeEN, b: clsInOutTypeEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[InOutType]中不存在!(in ${inOutType_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strInOutTypeId:所给的关键字
 * @returns 对象
 */
export async function InOutType_GetNameByInOutTypeIdCache(strInOutTypeId: string) {
  if (IsNullOrEmpty(strInOutTypeId) == true) {
    const strMsg = Format(
      '参数:[strInOutTypeId]不能为空!(In clsInOutTypeWApi.GetNameByInOutTypeIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strInOutTypeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strInOutTypeId]的长度:[{0}]不正确!(clsInOutTypeWApi.GetNameByInOutTypeIdCache)',
      strInOutTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrInOutTypeObjLstCache = await InOutType_GetObjLstCache();
  if (arrInOutTypeObjLstCache == null) return '';
  try {
    const arrInOutTypeSel = arrInOutTypeObjLstCache.filter((x) => x.inOutTypeId == strInOutTypeId);
    let objInOutType: clsInOutTypeEN;
    if (arrInOutTypeSel.length > 0) {
      objInOutType = arrInOutTypeSel[0];
      return objInOutType.inOutTypeName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strInOutTypeId,
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
export async function InOutType_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsInOutTypeEN.con_InOutTypeId:
      return (obj: clsInOutTypeEN) => {
        return obj.inOutTypeId === value;
      };
    case clsInOutTypeEN.con_InOutTypeName:
      return (obj: clsInOutTypeEN) => {
        return obj.inOutTypeName === value;
      };
    case clsInOutTypeEN.con_InOutTypeENName:
      return (obj: clsInOutTypeEN) => {
        return obj.inOutTypeENName === value;
      };
    case clsInOutTypeEN.con_Memo:
      return (obj: clsInOutTypeEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[InOutType]中不存在!(in ${inOutType_ConstructorName}.${strThisFuncName})`;
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
export async function InOutType_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsInOutTypeEN.con_InOutTypeId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsInOutTypeEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsInOutTypeEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strInOutTypeId = strInValue;
  if (IsNullOrEmpty(strInOutTypeId) == true) {
    return '';
  }
  const objInOutType = await InOutType_GetObjByInOutTypeIdCache(strInOutTypeId);
  if (objInOutType == null) return '';
  if (objInOutType.GetFldValue(strOutFldName) == null) return '';
  return objInOutType.GetFldValue(strOutFldName).toString();
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
export async function InOutType_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsInOutTypeEN.con_InOutTypeId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrInOutType = await InOutType_GetObjLstCache();
  if (arrInOutType == null) return [];
  let arrInOutTypeSel = arrInOutType;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrInOutTypeSel = arrInOutTypeSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrInOutTypeSel = arrInOutTypeSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrInOutTypeSel = arrInOutTypeSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrInOutTypeSel = arrInOutTypeSel.filter((x) => x.GetFldValue(strInFldName) == strInValue);
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrInOutTypeSel = arrInOutTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrInOutTypeSel = arrInOutTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrInOutTypeSel = arrInOutTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrInOutTypeSel = arrInOutTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrInOutTypeSel = arrInOutTypeSel.filter((x) => x.GetFldValue(strInFldName) > strInValue);
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrInOutTypeSel = arrInOutTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrInOutTypeSel.length == 0) return [];
  return arrInOutTypeSel.map((x) => x.inOutTypeId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function InOutType_GetFldValueAsync(
  strFldName: string,
  strWhereCond: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetFldValueAsync';
  const strAction = 'GetFldValue';
  const strUrl = GetWebApiUrl(inOutType_Controller, strAction);

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
        inOutType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        inOutType_ConstructorName,
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
export async function InOutType_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(inOutType_Controller, strAction);

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
        inOutType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        inOutType_ConstructorName,
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
export async function InOutType_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(inOutType_Controller, strAction);

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
        inOutType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        inOutType_ConstructorName,
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
export async function InOutType_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsInOutTypeEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(inOutType_Controller, strAction);

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
      const objInOutType = InOutType_GetObjFromJsonObj(returnObj);
      return objInOutType;
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
        inOutType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        inOutType_ConstructorName,
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
export async function InOutType_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsInOutTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsInOutTypeEN.WhereFormat) == false) {
    strWhereCond = clsInOutTypeEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsInOutTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsInOutTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrInOutTypeExObjLstCache: Array<clsInOutTypeEN> = CacheHelper.Get(strKey);
    const arrInOutTypeObjLstT = InOutType_GetObjLstByJSONObjLst(arrInOutTypeExObjLstCache);
    return arrInOutTypeObjLstT;
  }
  try {
    const arrInOutTypeExObjLst = await InOutType_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrInOutTypeExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrInOutTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrInOutTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      inOutType_ConstructorName,
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
export async function InOutType_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsInOutTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsInOutTypeEN.WhereFormat) == false) {
    strWhereCond = clsInOutTypeEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsInOutTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsInOutTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrInOutTypeExObjLstCache: Array<clsInOutTypeEN> = JSON.parse(strTempObjLst);
    const arrInOutTypeObjLstT = InOutType_GetObjLstByJSONObjLst(arrInOutTypeExObjLstCache);
    return arrInOutTypeObjLstT;
  }
  try {
    const arrInOutTypeExObjLst = await InOutType_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrInOutTypeExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrInOutTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrInOutTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      inOutType_ConstructorName,
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
export async function InOutType_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsInOutTypeEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrInOutTypeObjLstCache: Array<clsInOutTypeEN> = JSON.parse(strTempObjLst);
    return arrInOutTypeObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function InOutType_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsInOutTypeEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(inOutType_Controller, strAction);

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
          inOutType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = InOutType_GetObjLstByJSONObjLst(returnObjLst);
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
        inOutType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        inOutType_ConstructorName,
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
export async function InOutType_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsInOutTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsInOutTypeEN.WhereFormat) == false) {
    strWhereCond = clsInOutTypeEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsInOutTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsInOutTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrInOutTypeExObjLstCache: Array<clsInOutTypeEN> = JSON.parse(strTempObjLst);
    const arrInOutTypeObjLstT = InOutType_GetObjLstByJSONObjLst(arrInOutTypeExObjLstCache);
    return arrInOutTypeObjLstT;
  }
  try {
    const arrInOutTypeExObjLst = await InOutType_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrInOutTypeExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrInOutTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrInOutTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      inOutType_ConstructorName,
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
export async function InOutType_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsInOutTypeEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrInOutTypeObjLstCache: Array<clsInOutTypeEN> = JSON.parse(strTempObjLst);
    return arrInOutTypeObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function InOutType_GetObjLstCache(): Promise<Array<clsInOutTypeEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrInOutTypeObjLstCache;
  switch (clsInOutTypeEN.CacheModeId) {
    case '04': //sessionStorage
      arrInOutTypeObjLstCache = await InOutType_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrInOutTypeObjLstCache = await InOutType_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrInOutTypeObjLstCache = await InOutType_GetObjLstClientCache();
      break;
    default:
      arrInOutTypeObjLstCache = await InOutType_GetObjLstClientCache();
      break;
  }
  return arrInOutTypeObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function InOutType_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrInOutTypeObjLstCache;
  switch (clsInOutTypeEN.CacheModeId) {
    case '04': //sessionStorage
      arrInOutTypeObjLstCache = await InOutType_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrInOutTypeObjLstCache = await InOutType_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrInOutTypeObjLstCache = null;
      break;
    default:
      arrInOutTypeObjLstCache = null;
      break;
  }
  return arrInOutTypeObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrInOutTypeIdCond:条件对象
 * @returns 对象列表子集
 */
export async function InOutType_GetSubObjLstCache(objInOutTypeCond: ConditionCollection) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrInOutTypeObjLstCache = await InOutType_GetObjLstCache();
  let arrInOutTypeSel = arrInOutTypeObjLstCache;
  if (objInOutTypeCond.GetConditions().length == 0) return arrInOutTypeSel;
  try {
    //console.log(sstrKeys);
    for (const objCondition of objInOutTypeCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrInOutTypeSel = arrInOutTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrInOutTypeSel = arrInOutTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrInOutTypeSel = arrInOutTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrInOutTypeSel = arrInOutTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrInOutTypeSel = arrInOutTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrInOutTypeSel = arrInOutTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrInOutTypeSel = arrInOutTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrInOutTypeSel = arrInOutTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrInOutTypeSel = arrInOutTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrInOutTypeSel = arrInOutTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrInOutTypeSel = arrInOutTypeSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrInOutTypeSel = arrInOutTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrInOutTypeSel = arrInOutTypeSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrInOutTypeSel = arrInOutTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrInOutTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objInOutTypeCond),
      inOutType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsInOutTypeEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrInOutTypeId:关键字列表
 * @returns 对象列表
 **/
export async function InOutType_GetObjLstByInOutTypeIdLstAsync(
  arrInOutTypeId: Array<string>,
): Promise<Array<clsInOutTypeEN>> {
  const strThisFuncName = 'GetObjLstByInOutTypeIdLstAsync';
  const strAction = 'GetObjLstByInOutTypeIdLst';
  const strUrl = GetWebApiUrl(inOutType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrInOutTypeId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          inOutType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = InOutType_GetObjLstByJSONObjLst(returnObjLst);
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
        inOutType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        inOutType_ConstructorName,
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
 * @param arrstrInOutTypeIdLst:关键字列表
 * @returns 对象列表
 */
export async function InOutType_GetObjLstByInOutTypeIdLstCache(arrInOutTypeIdLst: Array<string>) {
  const strThisFuncName = 'GetObjLstByInOutTypeIdLstCache';
  try {
    const arrInOutTypeObjLstCache = await InOutType_GetObjLstCache();
    const arrInOutTypeSel = arrInOutTypeObjLstCache.filter(
      (x) => arrInOutTypeIdLst.indexOf(x.inOutTypeId) > -1,
    );
    return arrInOutTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrInOutTypeIdLst.join(','),
      inOutType_ConstructorName,
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
export async function InOutType_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsInOutTypeEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(inOutType_Controller, strAction);

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
          inOutType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = InOutType_GetObjLstByJSONObjLst(returnObjLst);
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
        inOutType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        inOutType_ConstructorName,
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
export async function InOutType_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsInOutTypeEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(inOutType_Controller, strAction);

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
          inOutType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = InOutType_GetObjLstByJSONObjLst(returnObjLst);
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
        inOutType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        inOutType_ConstructorName,
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
export async function InOutType_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsInOutTypeEN>();
  const arrInOutTypeObjLstCache = await InOutType_GetObjLstCache();
  if (arrInOutTypeObjLstCache.length == 0) return arrInOutTypeObjLstCache;
  let arrInOutTypeSel = arrInOutTypeObjLstCache;
  const objInOutTypeCond = objPagerPara.conditionCollection;
  if (objInOutTypeCond == null) {
    const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return new Array<clsInOutTypeEN>();
  }
  //console.log("clsInOutTypeWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    for (const objCondition of objInOutTypeCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrInOutTypeSel = arrInOutTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrInOutTypeSel = arrInOutTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrInOutTypeSel = arrInOutTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrInOutTypeSel = arrInOutTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrInOutTypeSel = arrInOutTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrInOutTypeSel = arrInOutTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrInOutTypeSel = arrInOutTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrInOutTypeSel = arrInOutTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrInOutTypeSel = arrInOutTypeSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrInOutTypeSel = arrInOutTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrInOutTypeSel = arrInOutTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrInOutTypeSel = arrInOutTypeSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrInOutTypeSel = arrInOutTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrInOutTypeSel = arrInOutTypeSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrInOutTypeSel = arrInOutTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrInOutTypeSel.length == 0) return arrInOutTypeSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrInOutTypeSel = arrInOutTypeSel.sort(InOutType_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrInOutTypeSel = arrInOutTypeSel.sort(objPagerPara.sortFun);
    }
    arrInOutTypeSel = arrInOutTypeSel.slice(intStart, intEnd);
    return arrInOutTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      inOutType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsInOutTypeEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function InOutType_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsInOutTypeEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsInOutTypeEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(inOutType_Controller, strAction);

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
          inOutType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = InOutType_GetObjLstByJSONObjLst(returnObjLst);
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
        inOutType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        inOutType_ConstructorName,
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
 * @param strInOutTypeId:关键字
 * @returns 获取删除的结果
 **/
export async function InOutType_DelRecordAsync(strInOutTypeId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(inOutType_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strInOutTypeId);

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
        inOutType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        inOutType_ConstructorName,
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
 * @param arrInOutTypeId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function InOutType_DelInOutTypesAsync(arrInOutTypeId: Array<string>): Promise<number> {
  const strThisFuncName = 'DelInOutTypesAsync';
  const strAction = 'DelInOutTypes';
  const strUrl = GetWebApiUrl(inOutType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrInOutTypeId, config);
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
        inOutType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        inOutType_ConstructorName,
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
export async function InOutType_DelInOutTypesByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'DelInOutTypesByCondAsync';
  const strAction = 'DelInOutTypesByCond';
  const strUrl = GetWebApiUrl(inOutType_Controller, strAction);

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
        inOutType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        inOutType_ConstructorName,
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
 * @param objInOutTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function InOutType_AddNewRecordAsync(
  objInOutTypeEN: clsInOutTypeEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  if (objInOutTypeEN.inOutTypeId === null || objInOutTypeEN.inOutTypeId === '') {
    const strMsg = '需要的对象的关键字为空,不能添加!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objInOutTypeEN);
  const strUrl = GetWebApiUrl(inOutType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objInOutTypeEN, config);
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
        inOutType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        inOutType_ConstructorName,
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
 * @param objInOutTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function InOutType_AddNewRecordWithMaxIdAsync(
  objInOutTypeEN: clsInOutTypeEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(inOutType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objInOutTypeEN, config);
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
        inOutType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        inOutType_ConstructorName,
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
export async function InOutType_AddNewObjSave(
  objInOutTypeEN: clsInOutTypeEN,
): Promise<AddRecordResult> {
  const strThisFuncName = 'AddNewObjSave';
  try {
    InOutType_CheckPropertyNew(objInOutTypeEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${inOutType_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    alert(strMsg);
    return { keyword: '', success: false }; //一定要有一个返回值,否则会出错!
  }
  try {
    //检查唯一性条件
    let returnBool = false;
    const bolIsExist = await InOutType_IsExistAsync(objInOutTypeEN.inOutTypeId);
    if (bolIsExist == true) {
      const strMsg = Format('添加记录时,关键字：{0}已经存在!', objInOutTypeEN.inOutTypeId);
      console.error(strMsg);
      throw strMsg;
    }
    returnBool = await InOutType_AddNewRecordAsync(objInOutTypeEN);
    if (returnBool == true) {
      InOutType_ReFreshCache();
    } else {
      const strInfo = `添加[InOut类型(InOutType)]记录不成功!`;
      //显示信息框
      throw strInfo;
    }
    return { keyword: objInOutTypeEN.inOutTypeId, success: returnBool }; //一定要有一个返回值,否则会出错!
  } catch (e) {
    const strMsg = `添加记录不成功,${e}.(in ${inOutType_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/** 修改记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjSave)
 **/
export async function InOutType_UpdateObjSave(objInOutTypeEN: clsInOutTypeEN): Promise<boolean> {
  const strThisFuncName = 'UpdateObjSave';
  objInOutTypeEN.sfUpdFldSetStr = objInOutTypeEN.updFldString; //设置哪些字段被修改(脏字段)
  if (objInOutTypeEN.inOutTypeId == '' || objInOutTypeEN.inOutTypeId == undefined) {
    console.error('关键字不能为空!');
    throw '关键字不能为空!';
  }
  try {
    InOutType_CheckProperty4Update(objInOutTypeEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${inOutType_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
  try {
    //检查唯一性条件
    const returnBool = await InOutType_UpdateRecordAsync(objInOutTypeEN);
    if (returnBool == true) {
      InOutType_ReFreshCache();
    }
    return returnBool;
  } catch (e) {
    const strMsg = `修改记录不成功,${e}.(in ${inOutType_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objInOutTypeEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function InOutType_AddNewRecordWithReturnKeyAsync(
  objInOutTypeEN: clsInOutTypeEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(inOutType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objInOutTypeEN, config);
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
        inOutType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        inOutType_ConstructorName,
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
 * @param objInOutTypeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function InOutType_UpdateRecordAsync(
  objInOutTypeEN: clsInOutTypeEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objInOutTypeEN.sfUpdFldSetStr === undefined ||
    objInOutTypeEN.sfUpdFldSetStr === null ||
    objInOutTypeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objInOutTypeEN.inOutTypeId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(inOutType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objInOutTypeEN, config);
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
        inOutType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        inOutType_ConstructorName,
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
 * @param objInOutTypeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function InOutType_EditRecordExAsync(
  objInOutTypeEN: clsInOutTypeEN,
): Promise<boolean> {
  const strThisFuncName = 'EditRecordExAsync';
  const strAction = 'EditRecordEx';
  if (
    objInOutTypeEN.sfUpdFldSetStr === undefined ||
    objInOutTypeEN.sfUpdFldSetStr === null ||
    objInOutTypeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objInOutTypeEN.inOutTypeId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(inOutType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objInOutTypeEN, config);
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
        inOutType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        inOutType_ConstructorName,
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
 * @param objInOutTypeEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function InOutType_UpdateWithConditionAsync(
  objInOutTypeEN: clsInOutTypeEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objInOutTypeEN.sfUpdFldSetStr === undefined ||
    objInOutTypeEN.sfUpdFldSetStr === null ||
    objInOutTypeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objInOutTypeEN.inOutTypeId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(inOutType_Controller, strAction);
  objInOutTypeEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objInOutTypeEN, config);
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
        inOutType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        inOutType_ConstructorName,
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
 * @param objstrInOutTypeIdCond:条件对象
 * @returns 对象列表子集
 */
export async function InOutType_IsExistRecordCache(objInOutTypeCond: ConditionCollection) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrInOutTypeObjLstCache = await InOutType_GetObjLstCache();
  if (arrInOutTypeObjLstCache == null) return false;
  let arrInOutTypeSel = arrInOutTypeObjLstCache;
  if (objInOutTypeCond.GetConditions().length == 0)
    return arrInOutTypeSel.length > 0 ? true : false;
  try {
    for (const objCondition of objInOutTypeCond.GetConditions()) {
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
            arrInOutTypeSel = arrInOutTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrInOutTypeSel = arrInOutTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrInOutTypeSel = arrInOutTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrInOutTypeSel = arrInOutTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrInOutTypeSel = arrInOutTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrInOutTypeSel = arrInOutTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrInOutTypeSel = arrInOutTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrInOutTypeSel = arrInOutTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrInOutTypeSel = arrInOutTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrInOutTypeSel = arrInOutTypeSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrInOutTypeSel = arrInOutTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrInOutTypeSel = arrInOutTypeSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrInOutTypeSel = arrInOutTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrInOutTypeSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objInOutTypeCond),
      inOutType_ConstructorName,
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
export async function InOutType_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(inOutType_Controller, strAction);

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
        inOutType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        inOutType_ConstructorName,
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
 * @param strInOutTypeId:所给的关键字
 * @returns 对象
 */
export async function InOutType_IsExistCache(strInOutTypeId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrInOutTypeObjLstCache = await InOutType_GetObjLstCache();
  if (arrInOutTypeObjLstCache == null) return false;
  try {
    const arrInOutTypeSel = arrInOutTypeObjLstCache.filter((x) => x.inOutTypeId == strInOutTypeId);
    if (arrInOutTypeSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strInOutTypeId,
      inOutType_ConstructorName,
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
 * @param strInOutTypeId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function InOutType_IsExistAsync(strInOutTypeId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(inOutType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strInOutTypeId,
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
        inOutType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        inOutType_ConstructorName,
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
export async function InOutType_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(inOutType_Controller, strAction);

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
        inOutType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        inOutType_ConstructorName,
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
 * @param objInOutTypeCond:条件对象
 * @returns 对象列表记录数
 */
export async function InOutType_GetRecCountByCondCache(objInOutTypeCond: ConditionCollection) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrInOutTypeObjLstCache = await InOutType_GetObjLstCache();
  if (arrInOutTypeObjLstCache == null) return 0;
  let arrInOutTypeSel = arrInOutTypeObjLstCache;
  if (objInOutTypeCond.GetConditions().length == 0) return arrInOutTypeSel.length;
  try {
    for (const objCondition of objInOutTypeCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrInOutTypeSel = arrInOutTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrInOutTypeSel = arrInOutTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrInOutTypeSel = arrInOutTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrInOutTypeSel = arrInOutTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrInOutTypeSel = arrInOutTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrInOutTypeSel = arrInOutTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrInOutTypeSel = arrInOutTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrInOutTypeSel = arrInOutTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrInOutTypeSel = arrInOutTypeSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrInOutTypeSel = arrInOutTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrInOutTypeSel = arrInOutTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrInOutTypeSel = arrInOutTypeSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrInOutTypeSel = arrInOutTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrInOutTypeSel = arrInOutTypeSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrInOutTypeSel = arrInOutTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrInOutTypeSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objInOutTypeCond),
      inOutType_ConstructorName,
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
export async function InOutType_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(inOutType_Controller, strAction);

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
        inOutType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        inOutType_ConstructorName,
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
export function InOutType_GetWebApiUrl(strController: string, strAction: string): string {
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
export function InOutType_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功!');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clsInOutTypeEN._CurrTabName;
  switch (clsInOutTypeEN.CacheModeId) {
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
  clsInOutTypeEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
}

/**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export function InOutType_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsInOutTypeEN._CurrTabName;
    switch (clsInOutTypeEN.CacheModeId) {
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
    clsInOutTypeEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export function InOutType_GetLastRefreshTime(): string {
  if (clsInOutTypeEN._RefreshTimeLst.length == 0) return '';
  return clsInOutTypeEN._RefreshTimeLst[clsInOutTypeEN._RefreshTimeLst.length - 1];
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export async function InOutType_BindDdl_InOutTypeIdInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
) {
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_InOutTypeIdInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_InOutTypeIdInDivCache");
  const arrObjLstSel = await InOutType_GetObjLstCache();
  if (arrObjLstSel == null) return;
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsInOutTypeEN.con_InOutTypeId,
    clsInOutTypeEN.con_InOutTypeName,
    'InOut类型...',
  );
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export async function InOutType_GetArrInOutType() {
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_InOutTypeIdInDivCache");
  const arrInOutType = new Array<clsInOutTypeEN>();
  const arrObjLstSel = await InOutType_GetObjLstCache();
  if (arrObjLstSel == null) return null;
  const obj0 = new clsInOutTypeEN();
  obj0.inOutTypeId = '0';
  obj0.inOutTypeName = '选inOut类型...';
  arrInOutType.push(obj0);
  arrObjLstSel.forEach((x) => arrInOutType.push(x));
  return arrInOutType;
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function InOutType_CheckPropertyNew(pobjInOutTypeEN: clsInOutTypeEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjInOutTypeEN.inOutTypeName) === true) {
    throw new Error(
      `(errid:Watl000411)字段[INOUT类型名称]不能为空(In InOut类型)!(clsInOutTypeBL:CheckPropertyNew0)`,
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjInOutTypeEN.inOutTypeId) == false &&
    GetStrLen(pobjInOutTypeEN.inOutTypeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000413)字段[INOUT类型ID(inOutTypeId)]的长度不能超过2(In InOut类型(InOutType))!值:${pobjInOutTypeEN.inOutTypeId}(clsInOutTypeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjInOutTypeEN.inOutTypeName) == false &&
    GetStrLen(pobjInOutTypeEN.inOutTypeName) > 30
  ) {
    throw new Error(
      `(errid:Watl000413)字段[INOUT类型名称(inOutTypeName)]的长度不能超过30(In InOut类型(InOutType))!值:${pobjInOutTypeEN.inOutTypeName}(clsInOutTypeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjInOutTypeEN.inOutTypeENName) == false &&
    GetStrLen(pobjInOutTypeEN.inOutTypeENName) > 30
  ) {
    throw new Error(
      `(errid:Watl000413)字段[INOUT类型英文名(inOutTypeENName)]的长度不能超过30(In InOut类型(InOutType))!值:${pobjInOutTypeEN.inOutTypeENName}(clsInOutTypeBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjInOutTypeEN.memo) == false && GetStrLen(pobjInOutTypeEN.memo) > 1000) {
    throw new Error(
      `(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In InOut类型(InOutType))!值:${pobjInOutTypeEN.memo}(clsInOutTypeBL:CheckPropertyNew)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjInOutTypeEN.inOutTypeId) == false &&
    undefined !== pobjInOutTypeEN.inOutTypeId &&
    tzDataType.isString(pobjInOutTypeEN.inOutTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[INOUT类型ID(inOutTypeId)]的值:[${pobjInOutTypeEN.inOutTypeId}], 非法,应该为字符型(In InOut类型(InOutType))!(clsInOutTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjInOutTypeEN.inOutTypeName) == false &&
    undefined !== pobjInOutTypeEN.inOutTypeName &&
    tzDataType.isString(pobjInOutTypeEN.inOutTypeName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[INOUT类型名称(inOutTypeName)]的值:[${pobjInOutTypeEN.inOutTypeName}], 非法,应该为字符型(In InOut类型(InOutType))!(clsInOutTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjInOutTypeEN.inOutTypeENName) == false &&
    undefined !== pobjInOutTypeEN.inOutTypeENName &&
    tzDataType.isString(pobjInOutTypeEN.inOutTypeENName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[INOUT类型英文名(inOutTypeENName)]的值:[${pobjInOutTypeEN.inOutTypeENName}], 非法,应该为字符型(In InOut类型(InOutType))!(clsInOutTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjInOutTypeEN.memo) == false &&
    undefined !== pobjInOutTypeEN.memo &&
    tzDataType.isString(pobjInOutTypeEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[说明(memo)]的值:[${pobjInOutTypeEN.memo}], 非法,应该为字符型(In InOut类型(InOutType))!(clsInOutTypeBL:CheckPropertyNew0)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function InOutType_CheckProperty4Update(pobjInOutTypeEN: clsInOutTypeEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjInOutTypeEN.inOutTypeId) == false &&
    GetStrLen(pobjInOutTypeEN.inOutTypeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000416)字段[INOUT类型ID(inOutTypeId)]的长度不能超过2(In InOut类型(InOutType))!值:${pobjInOutTypeEN.inOutTypeId}(clsInOutTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjInOutTypeEN.inOutTypeName) == false &&
    GetStrLen(pobjInOutTypeEN.inOutTypeName) > 30
  ) {
    throw new Error(
      `(errid:Watl000416)字段[INOUT类型名称(inOutTypeName)]的长度不能超过30(In InOut类型(InOutType))!值:${pobjInOutTypeEN.inOutTypeName}(clsInOutTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjInOutTypeEN.inOutTypeENName) == false &&
    GetStrLen(pobjInOutTypeEN.inOutTypeENName) > 30
  ) {
    throw new Error(
      `(errid:Watl000416)字段[INOUT类型英文名(inOutTypeENName)]的长度不能超过30(In InOut类型(InOutType))!值:${pobjInOutTypeEN.inOutTypeENName}(clsInOutTypeBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjInOutTypeEN.memo) == false && GetStrLen(pobjInOutTypeEN.memo) > 1000) {
    throw new Error(
      `(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In InOut类型(InOutType))!值:${pobjInOutTypeEN.memo}(clsInOutTypeBL:CheckProperty4Update)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjInOutTypeEN.inOutTypeId) == false &&
    undefined !== pobjInOutTypeEN.inOutTypeId &&
    tzDataType.isString(pobjInOutTypeEN.inOutTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[INOUT类型ID(inOutTypeId)]的值:[${pobjInOutTypeEN.inOutTypeId}], 非法,应该为字符型(In InOut类型(InOutType))!(clsInOutTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjInOutTypeEN.inOutTypeName) == false &&
    undefined !== pobjInOutTypeEN.inOutTypeName &&
    tzDataType.isString(pobjInOutTypeEN.inOutTypeName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[INOUT类型名称(inOutTypeName)]的值:[${pobjInOutTypeEN.inOutTypeName}], 非法,应该为字符型(In InOut类型(InOutType))!(clsInOutTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjInOutTypeEN.inOutTypeENName) == false &&
    undefined !== pobjInOutTypeEN.inOutTypeENName &&
    tzDataType.isString(pobjInOutTypeEN.inOutTypeENName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[INOUT类型英文名(inOutTypeENName)]的值:[${pobjInOutTypeEN.inOutTypeENName}], 非法,应该为字符型(In InOut类型(InOutType))!(clsInOutTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjInOutTypeEN.memo) == false &&
    undefined !== pobjInOutTypeEN.memo &&
    tzDataType.isString(pobjInOutTypeEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[说明(memo)]的值:[${pobjInOutTypeEN.memo}], 非法,应该为字符型(In InOut类型(InOutType))!(clsInOutTypeBL:CheckProperty4Update)`,
    );
  }
  //检查主键是否为Null或者空!
  if (
    IsNullOrEmpty(pobjInOutTypeEN.inOutTypeId) === true ||
    pobjInOutTypeEN.inOutTypeId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000064)字段[INOUT类型ID]不能为空(In InOut类型)!(clsInOutTypeBL:CheckProperty4Update)`,
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
export function InOutType_GetJSONStrByObj(pobjInOutTypeEN: clsInOutTypeEN): string {
  pobjInOutTypeEN.sfUpdFldSetStr = pobjInOutTypeEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjInOutTypeEN);
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
export function InOutType_GetObjLstByJSONStr(strJSON: string): Array<clsInOutTypeEN> {
  let arrInOutTypeObjLst = new Array<clsInOutTypeEN>();
  if (strJSON === '') {
    return arrInOutTypeObjLst;
  }
  try {
    arrInOutTypeObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrInOutTypeObjLst;
  }
  return arrInOutTypeObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-05-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrInOutTypeObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function InOutType_GetObjLstByJSONObjLst(
  arrInOutTypeObjLstS: Array<clsInOutTypeEN>,
): Array<clsInOutTypeEN> {
  const arrInOutTypeObjLst = new Array<clsInOutTypeEN>();
  for (const objInFor of arrInOutTypeObjLstS) {
    const obj1 = InOutType_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrInOutTypeObjLst.push(obj1);
  }
  return arrInOutTypeObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-05-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function InOutType_GetObjByJSONStr(strJSON: string): clsInOutTypeEN {
  let pobjInOutTypeEN = new clsInOutTypeEN();
  if (strJSON === '') {
    return pobjInOutTypeEN;
  }
  try {
    pobjInOutTypeEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjInOutTypeEN;
  }
  return pobjInOutTypeEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function InOutType_GetCombineCondition(objInOutTypeCond: clsInOutTypeEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objInOutTypeCond.dicFldComparisonOp,
      clsInOutTypeEN.con_InOutTypeId,
    ) == true
  ) {
    const strComparisonOpInOutTypeId: string =
      objInOutTypeCond.dicFldComparisonOp[clsInOutTypeEN.con_InOutTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsInOutTypeEN.con_InOutTypeId,
      objInOutTypeCond.inOutTypeId,
      strComparisonOpInOutTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objInOutTypeCond.dicFldComparisonOp,
      clsInOutTypeEN.con_InOutTypeName,
    ) == true
  ) {
    const strComparisonOpInOutTypeName: string =
      objInOutTypeCond.dicFldComparisonOp[clsInOutTypeEN.con_InOutTypeName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsInOutTypeEN.con_InOutTypeName,
      objInOutTypeCond.inOutTypeName,
      strComparisonOpInOutTypeName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objInOutTypeCond.dicFldComparisonOp,
      clsInOutTypeEN.con_InOutTypeENName,
    ) == true
  ) {
    const strComparisonOpInOutTypeENName: string =
      objInOutTypeCond.dicFldComparisonOp[clsInOutTypeEN.con_InOutTypeENName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsInOutTypeEN.con_InOutTypeENName,
      objInOutTypeCond.inOutTypeENName,
      strComparisonOpInOutTypeENName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objInOutTypeCond.dicFldComparisonOp,
      clsInOutTypeEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objInOutTypeCond.dicFldComparisonOp[clsInOutTypeEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsInOutTypeEN.con_Memo,
      objInOutTypeCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objInOutTypeENS:源对象
 * @param objInOutTypeENT:目标对象
 */
export function InOutType_GetObjFromJsonObj(objInOutTypeENS: clsInOutTypeEN): clsInOutTypeEN {
  const objInOutTypeENT: clsInOutTypeEN = new clsInOutTypeEN();
  ObjectAssign(objInOutTypeENT, objInOutTypeENS);
  return objInOutTypeENT;
}
