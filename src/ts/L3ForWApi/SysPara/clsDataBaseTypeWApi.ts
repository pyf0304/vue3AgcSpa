/**
 * 类名:clsDataBaseTypeWApi
 * 表名:DataBaseType(00050159)
 * 版本:2023.10.12.1(服务器:WIN-SRV103-116)
 * 日期:2023/10/12 14:40:53
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:系统参数(SysPara)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 数据库类型(DataBaseType)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2023年10月12日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty, GetStrLen, tzDataType, Format } from '@/ts/PubFun/clsString';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { CacheHelper } from '@/ts/PubFun/CacheHelper';
import {
  GetObjKeys,
  BindDdl_ObjLstInDivObj,
  GetExceptionStr,
  myShowErrorMsg,
  ObjectAssign,
} from '@/ts/PubFun/clsCommFunc4Web';
import { clsDataBaseTypeEN } from '@/ts/L0Entity/SysPara/clsDataBaseTypeEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const dataBaseType_Controller = 'DataBaseTypeApi';
export const dataBaseType_ConstructorName = 'dataBaseType';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strDataBaseTypeId:关键字
 * @returns 对象
 **/
export async function DataBaseType_GetObjByDataBaseTypeIdAsync(
  strDataBaseTypeId: string,
): Promise<clsDataBaseTypeEN | null> {
  const strThisFuncName = 'GetObjByDataBaseTypeIdAsync';

  if (IsNullOrEmpty(strDataBaseTypeId) == true) {
    const strMsg = Format(
      '参数:[strDataBaseTypeId]不能为空!(In clsDataBaseTypeWApi.GetObjByDataBaseTypeIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strDataBaseTypeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strDataBaseTypeId]的长度:[{0}]不正确!(clsDataBaseTypeWApi.GetObjByDataBaseTypeIdAsync)',
      strDataBaseTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByDataBaseTypeId';
  const strUrl = GetWebApiUrl(dataBaseType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strDataBaseTypeId,
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
      const objDataBaseType = DataBaseType_GetObjFromJsonObj(returnObj);
      return objDataBaseType;
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
        dataBaseType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataBaseType_ConstructorName,
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
 * @param strDataBaseTypeId:所给的关键字
 * @returns 对象
 */
export async function DataBaseType_GetObjByDataBaseTypeIdCache(
  strDataBaseTypeId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByDataBaseTypeIdCache';

  if (IsNullOrEmpty(strDataBaseTypeId) == true) {
    const strMsg = Format(
      '参数:[strDataBaseTypeId]不能为空!(In clsDataBaseTypeWApi.GetObjByDataBaseTypeIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strDataBaseTypeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strDataBaseTypeId]的长度:[{0}]不正确!(clsDataBaseTypeWApi.GetObjByDataBaseTypeIdCache)',
      strDataBaseTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrDataBaseTypeObjLstCache = await DataBaseType_GetObjLstCache();
  try {
    const arrDataBaseTypeSel = arrDataBaseTypeObjLstCache.filter(
      (x) => x.dataBaseTypeId == strDataBaseTypeId,
    );
    let objDataBaseType: clsDataBaseTypeEN;
    if (arrDataBaseTypeSel.length > 0) {
      objDataBaseType = arrDataBaseTypeSel[0];
      return objDataBaseType;
    } else {
      if (bolTryAsyncOnce == true) {
        const objDataBaseTypeConst = await DataBaseType_GetObjByDataBaseTypeIdAsync(
          strDataBaseTypeId,
        );
        if (objDataBaseTypeConst != null) {
          DataBaseType_ReFreshThisCache();
          return objDataBaseTypeConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strDataBaseTypeId,
      dataBaseType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strDataBaseTypeId:所给的关键字
 * @returns 对象
 */
export async function DataBaseType_GetObjByDataBaseTypeIdlocalStorage(strDataBaseTypeId: string) {
  const strThisFuncName = 'GetObjByDataBaseTypeIdlocalStorage';

  if (IsNullOrEmpty(strDataBaseTypeId) == true) {
    const strMsg = Format(
      '参数:[strDataBaseTypeId]不能为空!(In clsDataBaseTypeWApi.GetObjByDataBaseTypeIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strDataBaseTypeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strDataBaseTypeId]的长度:[{0}]不正确!(clsDataBaseTypeWApi.GetObjByDataBaseTypeIdlocalStorage)',
      strDataBaseTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsDataBaseTypeEN._CurrTabName, strDataBaseTypeId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objDataBaseTypeCache: clsDataBaseTypeEN = JSON.parse(strTempObj);
    return objDataBaseTypeCache;
  }
  try {
    const objDataBaseType = await DataBaseType_GetObjByDataBaseTypeIdAsync(strDataBaseTypeId);
    if (objDataBaseType != null) {
      localStorage.setItem(strKey, JSON.stringify(objDataBaseType));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objDataBaseType;
    }
    return objDataBaseType;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strDataBaseTypeId,
      dataBaseType_ConstructorName,
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
 * @param objDataBaseType:所给的对象
 * @returns 对象
 */
export async function DataBaseType_UpdateObjInLstCache(objDataBaseType: clsDataBaseTypeEN) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrDataBaseTypeObjLstCache = await DataBaseType_GetObjLstCache();
    const obj = arrDataBaseTypeObjLstCache.find(
      (x) => x.dataBaseTypeName == objDataBaseType.dataBaseTypeName,
    );
    if (obj != null) {
      objDataBaseType.dataBaseTypeId = obj.dataBaseTypeId;
      ObjectAssign(obj, objDataBaseType);
    } else {
      arrDataBaseTypeObjLstCache.push(objDataBaseType);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      dataBaseType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strDataBaseTypeId:所给的关键字
 * @returns 对象
 */
export async function DataBaseType_GetNameByDataBaseTypeIdCache(strDataBaseTypeId: string) {
  if (IsNullOrEmpty(strDataBaseTypeId) == true) {
    const strMsg = Format(
      '参数:[strDataBaseTypeId]不能为空!(In clsDataBaseTypeWApi.GetNameByDataBaseTypeIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strDataBaseTypeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strDataBaseTypeId]的长度:[{0}]不正确!(clsDataBaseTypeWApi.GetNameByDataBaseTypeIdCache)',
      strDataBaseTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrDataBaseTypeObjLstCache = await DataBaseType_GetObjLstCache();
  if (arrDataBaseTypeObjLstCache == null) return '';
  try {
    const arrDataBaseTypeSel = arrDataBaseTypeObjLstCache.filter(
      (x) => x.dataBaseTypeId == strDataBaseTypeId,
    );
    let objDataBaseType: clsDataBaseTypeEN;
    if (arrDataBaseTypeSel.length > 0) {
      objDataBaseType = arrDataBaseTypeSel[0];
      return objDataBaseType.dataBaseTypeName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strDataBaseTypeId,
    );
    console.error(strMsg);
    alert(strMsg);
  }
  return '';
}

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
export async function DataBaseType_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsDataBaseTypeEN.con_DataBaseTypeId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsDataBaseTypeEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsDataBaseTypeEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strDataBaseTypeId = strInValue;
  if (IsNullOrEmpty(strInValue) == true) {
    return '';
  }
  const objDataBaseType = await DataBaseType_GetObjByDataBaseTypeIdCache(strDataBaseTypeId);
  if (objDataBaseType == null) return '';
  if (objDataBaseType.GetFldValue(strOutFldName) == null) return '';
  return objDataBaseType.GetFldValue(strOutFldName).toString();
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
export function DataBaseType_SortFunDefa(a: clsDataBaseTypeEN, b: clsDataBaseTypeEN): number {
  return a.dataBaseTypeId.localeCompare(b.dataBaseTypeId);
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
export function DataBaseType_SortFunDefa2Fld(a: clsDataBaseTypeEN, b: clsDataBaseTypeEN): number {
  if (a.dataBaseTypeName == b.dataBaseTypeName)
    return a.dataBaseTypeENName.localeCompare(b.dataBaseTypeENName);
  else return a.dataBaseTypeName.localeCompare(b.dataBaseTypeName);
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
export function DataBaseType_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsDataBaseTypeEN.con_DataBaseTypeId:
        return (a: clsDataBaseTypeEN, b: clsDataBaseTypeEN) => {
          return a.dataBaseTypeId.localeCompare(b.dataBaseTypeId);
        };
      case clsDataBaseTypeEN.con_DataBaseTypeName:
        return (a: clsDataBaseTypeEN, b: clsDataBaseTypeEN) => {
          return a.dataBaseTypeName.localeCompare(b.dataBaseTypeName);
        };
      case clsDataBaseTypeEN.con_DataBaseTypeENName:
        return (a: clsDataBaseTypeEN, b: clsDataBaseTypeEN) => {
          if (a.dataBaseTypeENName == null) return -1;
          if (b.dataBaseTypeENName == null) return 1;
          return a.dataBaseTypeENName.localeCompare(b.dataBaseTypeENName);
        };
      case clsDataBaseTypeEN.con_DataBaseTypeSimName:
        return (a: clsDataBaseTypeEN, b: clsDataBaseTypeEN) => {
          if (a.dataBaseTypeSimName == null) return -1;
          if (b.dataBaseTypeSimName == null) return 1;
          return a.dataBaseTypeSimName.localeCompare(b.dataBaseTypeSimName);
        };
      case clsDataBaseTypeEN.con_Memo:
        return (a: clsDataBaseTypeEN, b: clsDataBaseTypeEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[DataBaseType]中不存在!(in ${dataBaseType_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsDataBaseTypeEN.con_DataBaseTypeId:
        return (a: clsDataBaseTypeEN, b: clsDataBaseTypeEN) => {
          return b.dataBaseTypeId.localeCompare(a.dataBaseTypeId);
        };
      case clsDataBaseTypeEN.con_DataBaseTypeName:
        return (a: clsDataBaseTypeEN, b: clsDataBaseTypeEN) => {
          return b.dataBaseTypeName.localeCompare(a.dataBaseTypeName);
        };
      case clsDataBaseTypeEN.con_DataBaseTypeENName:
        return (a: clsDataBaseTypeEN, b: clsDataBaseTypeEN) => {
          if (b.dataBaseTypeENName == null) return -1;
          if (a.dataBaseTypeENName == null) return 1;
          return b.dataBaseTypeENName.localeCompare(a.dataBaseTypeENName);
        };
      case clsDataBaseTypeEN.con_DataBaseTypeSimName:
        return (a: clsDataBaseTypeEN, b: clsDataBaseTypeEN) => {
          if (b.dataBaseTypeSimName == null) return -1;
          if (a.dataBaseTypeSimName == null) return 1;
          return b.dataBaseTypeSimName.localeCompare(a.dataBaseTypeSimName);
        };
      case clsDataBaseTypeEN.con_Memo:
        return (a: clsDataBaseTypeEN, b: clsDataBaseTypeEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[DataBaseType]中不存在!(in ${dataBaseType_ConstructorName}.${strThisFuncName})`;
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
export async function DataBaseType_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsDataBaseTypeEN.con_DataBaseTypeId:
      return (obj: clsDataBaseTypeEN) => {
        return obj.dataBaseTypeId === value;
      };
    case clsDataBaseTypeEN.con_DataBaseTypeName:
      return (obj: clsDataBaseTypeEN) => {
        return obj.dataBaseTypeName === value;
      };
    case clsDataBaseTypeEN.con_DataBaseTypeENName:
      return (obj: clsDataBaseTypeEN) => {
        return obj.dataBaseTypeENName === value;
      };
    case clsDataBaseTypeEN.con_DataBaseTypeSimName:
      return (obj: clsDataBaseTypeEN) => {
        return obj.dataBaseTypeSimName === value;
      };
    case clsDataBaseTypeEN.con_Memo:
      return (obj: clsDataBaseTypeEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[DataBaseType]中不存在!(in ${dataBaseType_ConstructorName}.${strThisFuncName})`;
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
export async function DataBaseType_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsDataBaseTypeEN.con_DataBaseTypeId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrDataBaseType = await DataBaseType_GetObjLstCache();
  if (arrDataBaseType == null) return [];
  let arrDataBaseTypeSel = arrDataBaseType;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrDataBaseTypeSel = arrDataBaseTypeSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrDataBaseTypeSel = arrDataBaseTypeSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrDataBaseTypeSel = arrDataBaseTypeSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrDataBaseTypeSel = arrDataBaseTypeSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrDataBaseTypeSel = arrDataBaseTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrDataBaseTypeSel = arrDataBaseTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrDataBaseTypeSel = arrDataBaseTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrDataBaseTypeSel = arrDataBaseTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrDataBaseTypeSel = arrDataBaseTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrDataBaseTypeSel = arrDataBaseTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrDataBaseTypeSel.length == 0) return [];
  return arrDataBaseTypeSel.map((x) => x.dataBaseTypeId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function DataBaseType_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(dataBaseType_Controller, strAction);

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
        dataBaseType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataBaseType_ConstructorName,
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
export async function DataBaseType_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(dataBaseType_Controller, strAction);

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
        dataBaseType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataBaseType_ConstructorName,
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
export async function DataBaseType_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsDataBaseTypeEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(dataBaseType_Controller, strAction);

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
      const objDataBaseType = DataBaseType_GetObjFromJsonObj(returnObj);
      return objDataBaseType;
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
        dataBaseType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataBaseType_ConstructorName,
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
export async function DataBaseType_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsDataBaseTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsDataBaseTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsDataBaseTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrDataBaseTypeExObjLstCache: Array<clsDataBaseTypeEN> = CacheHelper.Get(strKey);
    const arrDataBaseTypeObjLstT = DataBaseType_GetObjLstByJSONObjLst(arrDataBaseTypeExObjLstCache);
    return arrDataBaseTypeObjLstT;
  }
  try {
    const arrDataBaseTypeExObjLst = await DataBaseType_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrDataBaseTypeExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrDataBaseTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrDataBaseTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      dataBaseType_ConstructorName,
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
export async function DataBaseType_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsDataBaseTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsDataBaseTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsDataBaseTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrDataBaseTypeExObjLstCache: Array<clsDataBaseTypeEN> = JSON.parse(strTempObjLst);
    const arrDataBaseTypeObjLstT = DataBaseType_GetObjLstByJSONObjLst(arrDataBaseTypeExObjLstCache);
    return arrDataBaseTypeObjLstT;
  }
  try {
    const arrDataBaseTypeExObjLst = await DataBaseType_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrDataBaseTypeExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrDataBaseTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrDataBaseTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      dataBaseType_ConstructorName,
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
export async function DataBaseType_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsDataBaseTypeEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrDataBaseTypeObjLstCache: Array<clsDataBaseTypeEN> = JSON.parse(strTempObjLst);
    return arrDataBaseTypeObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function DataBaseType_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsDataBaseTypeEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(dataBaseType_Controller, strAction);

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
          dataBaseType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = DataBaseType_GetObjLstByJSONObjLst(returnObjLst);
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
        dataBaseType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataBaseType_ConstructorName,
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
export async function DataBaseType_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsDataBaseTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsDataBaseTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsDataBaseTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrDataBaseTypeExObjLstCache: Array<clsDataBaseTypeEN> = JSON.parse(strTempObjLst);
    const arrDataBaseTypeObjLstT = DataBaseType_GetObjLstByJSONObjLst(arrDataBaseTypeExObjLstCache);
    return arrDataBaseTypeObjLstT;
  }
  try {
    const arrDataBaseTypeExObjLst = await DataBaseType_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrDataBaseTypeExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrDataBaseTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrDataBaseTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      dataBaseType_ConstructorName,
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
export async function DataBaseType_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsDataBaseTypeEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrDataBaseTypeObjLstCache: Array<clsDataBaseTypeEN> = JSON.parse(strTempObjLst);
    return arrDataBaseTypeObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function DataBaseType_GetObjLstCache(): Promise<Array<clsDataBaseTypeEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrDataBaseTypeObjLstCache;
  switch (clsDataBaseTypeEN.CacheModeId) {
    case '04': //sessionStorage
      arrDataBaseTypeObjLstCache = await DataBaseType_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrDataBaseTypeObjLstCache = await DataBaseType_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrDataBaseTypeObjLstCache = await DataBaseType_GetObjLstClientCache();
      break;
    default:
      arrDataBaseTypeObjLstCache = await DataBaseType_GetObjLstClientCache();
      break;
  }
  return arrDataBaseTypeObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function DataBaseType_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrDataBaseTypeObjLstCache;
  switch (clsDataBaseTypeEN.CacheModeId) {
    case '04': //sessionStorage
      arrDataBaseTypeObjLstCache = await DataBaseType_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrDataBaseTypeObjLstCache = await DataBaseType_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrDataBaseTypeObjLstCache = null;
      break;
    default:
      arrDataBaseTypeObjLstCache = null;
      break;
  }
  return arrDataBaseTypeObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrDataBaseTypeIdCond:条件对象
 * @returns 对象列表子集
 */
export async function DataBaseType_GetSubObjLstCache(objDataBaseTypeCond: clsDataBaseTypeEN) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrDataBaseTypeObjLstCache = await DataBaseType_GetObjLstCache();
  let arrDataBaseTypeSel = arrDataBaseTypeObjLstCache;
  if (objDataBaseTypeCond.sfFldComparisonOp == null || objDataBaseTypeCond.sfFldComparisonOp == '')
    return arrDataBaseTypeSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objDataBaseTypeCond.sfFldComparisonOp,
  );
  //console.log("clsDataBaseTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objDataBaseTypeCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrDataBaseTypeSel = arrDataBaseTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objDataBaseTypeCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrDataBaseTypeSel = arrDataBaseTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrDataBaseTypeSel = arrDataBaseTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrDataBaseTypeSel = arrDataBaseTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrDataBaseTypeSel = arrDataBaseTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrDataBaseTypeSel = arrDataBaseTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrDataBaseTypeSel = arrDataBaseTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrDataBaseTypeSel = arrDataBaseTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrDataBaseTypeSel = arrDataBaseTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrDataBaseTypeSel = arrDataBaseTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrDataBaseTypeSel = arrDataBaseTypeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrDataBaseTypeSel = arrDataBaseTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrDataBaseTypeSel = arrDataBaseTypeSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrDataBaseTypeSel = arrDataBaseTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrDataBaseTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objDataBaseTypeCond),
      dataBaseType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsDataBaseTypeEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrDataBaseTypeId:关键字列表
 * @returns 对象列表
 **/
export async function DataBaseType_GetObjLstByDataBaseTypeIdLstAsync(
  arrDataBaseTypeId: Array<string>,
): Promise<Array<clsDataBaseTypeEN>> {
  const strThisFuncName = 'GetObjLstByDataBaseTypeIdLstAsync';
  const strAction = 'GetObjLstByDataBaseTypeIdLst';
  const strUrl = GetWebApiUrl(dataBaseType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrDataBaseTypeId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          dataBaseType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = DataBaseType_GetObjLstByJSONObjLst(returnObjLst);
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
        dataBaseType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataBaseType_ConstructorName,
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
 * @param arrstrDataBaseTypeIdLst:关键字列表
 * @returns 对象列表
 */
export async function DataBaseType_GetObjLstByDataBaseTypeIdLstCache(
  arrDataBaseTypeIdLst: Array<string>,
) {
  const strThisFuncName = 'GetObjLstByDataBaseTypeIdLstCache';
  try {
    const arrDataBaseTypeObjLstCache = await DataBaseType_GetObjLstCache();
    const arrDataBaseTypeSel = arrDataBaseTypeObjLstCache.filter(
      (x) => arrDataBaseTypeIdLst.indexOf(x.dataBaseTypeId) > -1,
    );
    return arrDataBaseTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrDataBaseTypeIdLst.join(','),
      dataBaseType_ConstructorName,
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
export async function DataBaseType_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsDataBaseTypeEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(dataBaseType_Controller, strAction);

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
          dataBaseType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = DataBaseType_GetObjLstByJSONObjLst(returnObjLst);
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
        dataBaseType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataBaseType_ConstructorName,
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
export async function DataBaseType_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsDataBaseTypeEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(dataBaseType_Controller, strAction);

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
          dataBaseType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = DataBaseType_GetObjLstByJSONObjLst(returnObjLst);
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
        dataBaseType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataBaseType_ConstructorName,
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
export async function DataBaseType_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsDataBaseTypeEN>();
  const arrDataBaseTypeObjLstCache = await DataBaseType_GetObjLstCache();
  if (arrDataBaseTypeObjLstCache.length == 0) return arrDataBaseTypeObjLstCache;
  let arrDataBaseTypeSel = arrDataBaseTypeObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objDataBaseTypeCond = new clsDataBaseTypeEN();
  ObjectAssign(objDataBaseTypeCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsDataBaseTypeWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrDataBaseTypeSel = arrDataBaseTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objDataBaseTypeCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrDataBaseTypeSel = arrDataBaseTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrDataBaseTypeSel = arrDataBaseTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrDataBaseTypeSel = arrDataBaseTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrDataBaseTypeSel = arrDataBaseTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrDataBaseTypeSel = arrDataBaseTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrDataBaseTypeSel = arrDataBaseTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrDataBaseTypeSel = arrDataBaseTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrDataBaseTypeSel = arrDataBaseTypeSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrDataBaseTypeSel = arrDataBaseTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrDataBaseTypeSel = arrDataBaseTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrDataBaseTypeSel = arrDataBaseTypeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrDataBaseTypeSel = arrDataBaseTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrDataBaseTypeSel = arrDataBaseTypeSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrDataBaseTypeSel = arrDataBaseTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrDataBaseTypeSel.length == 0) return arrDataBaseTypeSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrDataBaseTypeSel = arrDataBaseTypeSel.sort(
        DataBaseType_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrDataBaseTypeSel = arrDataBaseTypeSel.sort(objPagerPara.sortFun);
    }
    arrDataBaseTypeSel = arrDataBaseTypeSel.slice(intStart, intEnd);
    return arrDataBaseTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      dataBaseType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsDataBaseTypeEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function DataBaseType_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsDataBaseTypeEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsDataBaseTypeEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(dataBaseType_Controller, strAction);

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
          dataBaseType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = DataBaseType_GetObjLstByJSONObjLst(returnObjLst);
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
        dataBaseType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataBaseType_ConstructorName,
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
 * @param strDataBaseTypeId:关键字
 * @returns 获取删除的结果
 **/
export async function DataBaseType_DelRecordAsync(strDataBaseTypeId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(dataBaseType_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strDataBaseTypeId);

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
        dataBaseType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataBaseType_ConstructorName,
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
 * @param arrDataBaseTypeId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function DataBaseType_DelDataBaseTypesAsync(
  arrDataBaseTypeId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelDataBaseTypesAsync';
  const strAction = 'DelDataBaseTypes';
  const strUrl = GetWebApiUrl(dataBaseType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrDataBaseTypeId, config);
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
        dataBaseType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataBaseType_ConstructorName,
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
export async function DataBaseType_DelDataBaseTypesByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelDataBaseTypesByCondAsync';
  const strAction = 'DelDataBaseTypesByCond';
  const strUrl = GetWebApiUrl(dataBaseType_Controller, strAction);

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
        dataBaseType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataBaseType_ConstructorName,
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
 * @param objDataBaseTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function DataBaseType_AddNewRecordAsync(
  objDataBaseTypeEN: clsDataBaseTypeEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objDataBaseTypeEN);
  const strUrl = GetWebApiUrl(dataBaseType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objDataBaseTypeEN, config);
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
        dataBaseType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataBaseType_ConstructorName,
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
 * @param objDataBaseTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function DataBaseType_AddNewRecordWithMaxIdAsync(
  objDataBaseTypeEN: clsDataBaseTypeEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(dataBaseType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objDataBaseTypeEN, config);
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
        dataBaseType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataBaseType_ConstructorName,
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
 * @param objDataBaseTypeEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function DataBaseType_AddNewRecordWithReturnKeyAsync(
  objDataBaseTypeEN: clsDataBaseTypeEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(dataBaseType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objDataBaseTypeEN, config);
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
        dataBaseType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataBaseType_ConstructorName,
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
 * @param objDataBaseTypeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function DataBaseType_UpdateRecordAsync(
  objDataBaseTypeEN: clsDataBaseTypeEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objDataBaseTypeEN.sfUpdFldSetStr === undefined ||
    objDataBaseTypeEN.sfUpdFldSetStr === null ||
    objDataBaseTypeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objDataBaseTypeEN.dataBaseTypeId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(dataBaseType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objDataBaseTypeEN, config);
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
        dataBaseType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataBaseType_ConstructorName,
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
 * @param objDataBaseTypeEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function DataBaseType_UpdateWithConditionAsync(
  objDataBaseTypeEN: clsDataBaseTypeEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objDataBaseTypeEN.sfUpdFldSetStr === undefined ||
    objDataBaseTypeEN.sfUpdFldSetStr === null ||
    objDataBaseTypeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objDataBaseTypeEN.dataBaseTypeId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(dataBaseType_Controller, strAction);
  objDataBaseTypeEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objDataBaseTypeEN, config);
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
        dataBaseType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataBaseType_ConstructorName,
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
 * @param objstrDataBaseTypeIdCond:条件对象
 * @returns 对象列表子集
 */
export async function DataBaseType_IsExistRecordCache(objDataBaseTypeCond: clsDataBaseTypeEN) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrDataBaseTypeObjLstCache = await DataBaseType_GetObjLstCache();
  if (arrDataBaseTypeObjLstCache == null) return false;
  let arrDataBaseTypeSel = arrDataBaseTypeObjLstCache;
  if (objDataBaseTypeCond.sfFldComparisonOp == null || objDataBaseTypeCond.sfFldComparisonOp == '')
    return arrDataBaseTypeSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objDataBaseTypeCond.sfFldComparisonOp,
  );
  //console.log("clsDataBaseTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objDataBaseTypeCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objDataBaseTypeCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrDataBaseTypeSel = arrDataBaseTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrDataBaseTypeSel = arrDataBaseTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrDataBaseTypeSel = arrDataBaseTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrDataBaseTypeSel = arrDataBaseTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrDataBaseTypeSel = arrDataBaseTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrDataBaseTypeSel = arrDataBaseTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrDataBaseTypeSel = arrDataBaseTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrDataBaseTypeSel = arrDataBaseTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrDataBaseTypeSel = arrDataBaseTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrDataBaseTypeSel = arrDataBaseTypeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrDataBaseTypeSel = arrDataBaseTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrDataBaseTypeSel = arrDataBaseTypeSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrDataBaseTypeSel = arrDataBaseTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrDataBaseTypeSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objDataBaseTypeCond),
      dataBaseType_ConstructorName,
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
export async function DataBaseType_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(dataBaseType_Controller, strAction);

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
        dataBaseType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataBaseType_ConstructorName,
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
 * @param strDataBaseTypeId:所给的关键字
 * @returns 对象
 */
export async function DataBaseType_IsExistCache(strDataBaseTypeId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrDataBaseTypeObjLstCache = await DataBaseType_GetObjLstCache();
  if (arrDataBaseTypeObjLstCache == null) return false;
  try {
    const arrDataBaseTypeSel = arrDataBaseTypeObjLstCache.filter(
      (x) => x.dataBaseTypeId == strDataBaseTypeId,
    );
    if (arrDataBaseTypeSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strDataBaseTypeId,
      dataBaseType_ConstructorName,
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
 * @param strDataBaseTypeId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function DataBaseType_IsExistAsync(strDataBaseTypeId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(dataBaseType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strDataBaseTypeId,
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
        dataBaseType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataBaseType_ConstructorName,
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
export async function DataBaseType_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(dataBaseType_Controller, strAction);

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
        dataBaseType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataBaseType_ConstructorName,
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
 * @param objDataBaseTypeCond:条件对象
 * @returns 对象列表记录数
 */
export async function DataBaseType_GetRecCountByCondCache(objDataBaseTypeCond: clsDataBaseTypeEN) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrDataBaseTypeObjLstCache = await DataBaseType_GetObjLstCache();
  if (arrDataBaseTypeObjLstCache == null) return 0;
  let arrDataBaseTypeSel = arrDataBaseTypeObjLstCache;
  if (objDataBaseTypeCond.sfFldComparisonOp == null || objDataBaseTypeCond.sfFldComparisonOp == '')
    return arrDataBaseTypeSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objDataBaseTypeCond.sfFldComparisonOp,
  );
  //console.log("clsDataBaseTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objDataBaseTypeCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrDataBaseTypeSel = arrDataBaseTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objDataBaseTypeCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrDataBaseTypeSel = arrDataBaseTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrDataBaseTypeSel = arrDataBaseTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrDataBaseTypeSel = arrDataBaseTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrDataBaseTypeSel = arrDataBaseTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrDataBaseTypeSel = arrDataBaseTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrDataBaseTypeSel = arrDataBaseTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrDataBaseTypeSel = arrDataBaseTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrDataBaseTypeSel = arrDataBaseTypeSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrDataBaseTypeSel = arrDataBaseTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrDataBaseTypeSel = arrDataBaseTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrDataBaseTypeSel = arrDataBaseTypeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrDataBaseTypeSel = arrDataBaseTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrDataBaseTypeSel = arrDataBaseTypeSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrDataBaseTypeSel = arrDataBaseTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrDataBaseTypeSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objDataBaseTypeCond),
      dataBaseType_ConstructorName,
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
export async function DataBaseType_GetMaxStrIdAsync(): Promise<string> {
  const strThisFuncName = 'GetMaxStrIdAsync';
  const strAction = 'GetMaxStrId';
  const strUrl = GetWebApiUrl(dataBaseType_Controller, strAction);

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
        dataBaseType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataBaseType_ConstructorName,
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
export async function DataBaseType_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(dataBaseType_Controller, strAction);

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
        dataBaseType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataBaseType_ConstructorName,
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
export function DataBaseType_GetWebApiUrl(strController: string, strAction: string): string {
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
export function DataBaseType_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功!');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clsDataBaseTypeEN._CurrTabName;
  switch (clsDataBaseTypeEN.CacheModeId) {
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
export function DataBaseType_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsDataBaseTypeEN._CurrTabName;
    switch (clsDataBaseTypeEN.CacheModeId) {
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

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)
 * @param objDDL:需要绑定当前表的下拉框

*/
export async function DataBaseType_BindDdl_DataBaseTypeIdInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
) {
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_DataBaseTypeIdInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_DataBaseTypeIdInDivCache");
  const arrObjLstSel = await DataBaseType_GetObjLstCache();
  if (arrObjLstSel == null) return;
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsDataBaseTypeEN.con_DataBaseTypeId,
    clsDataBaseTypeEN.con_DataBaseTypeName,
    '数据库类型',
  );
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function DataBaseType_CheckPropertyNew(pobjDataBaseTypeEN: clsDataBaseTypeEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjDataBaseTypeEN.dataBaseTypeName) === true) {
    throw new Error(
      '(errid:Watl000411)字段[数据库类型名]不能为空(In 数据库类型)!(clsDataBaseTypeBL:CheckPropertyNew0)',
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjDataBaseTypeEN.dataBaseTypeId) == false &&
    GetStrLen(pobjDataBaseTypeEN.dataBaseTypeId) > 2
  ) {
    throw new Error(
      '(errid:Watl000413)字段[数据库类型ID(dataBaseTypeId)]的长度不能超过2(In 数据库类型(DataBaseType))!值:$(pobjDataBaseTypeEN.dataBaseTypeId)(clsDataBaseTypeBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjDataBaseTypeEN.dataBaseTypeName) == false &&
    GetStrLen(pobjDataBaseTypeEN.dataBaseTypeName) > 30
  ) {
    throw new Error(
      '(errid:Watl000413)字段[数据库类型名(dataBaseTypeName)]的长度不能超过30(In 数据库类型(DataBaseType))!值:$(pobjDataBaseTypeEN.dataBaseTypeName)(clsDataBaseTypeBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjDataBaseTypeEN.dataBaseTypeENName) == false &&
    GetStrLen(pobjDataBaseTypeEN.dataBaseTypeENName) > 30
  ) {
    throw new Error(
      '(errid:Watl000413)字段[数据库类型英文名(dataBaseTypeENName)]的长度不能超过30(In 数据库类型(DataBaseType))!值:$(pobjDataBaseTypeEN.dataBaseTypeENName)(clsDataBaseTypeBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjDataBaseTypeEN.dataBaseTypeSimName) == false &&
    GetStrLen(pobjDataBaseTypeEN.dataBaseTypeSimName) > 30
  ) {
    throw new Error(
      '(errid:Watl000413)字段[数据库类型简名(dataBaseTypeSimName)]的长度不能超过30(In 数据库类型(DataBaseType))!值:$(pobjDataBaseTypeEN.dataBaseTypeSimName)(clsDataBaseTypeBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjDataBaseTypeEN.memo) == false &&
    GetStrLen(pobjDataBaseTypeEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In 数据库类型(DataBaseType))!值:$(pobjDataBaseTypeEN.memo)(clsDataBaseTypeBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjDataBaseTypeEN.dataBaseTypeId) == false &&
    undefined !== pobjDataBaseTypeEN.dataBaseTypeId &&
    tzDataType.isString(pobjDataBaseTypeEN.dataBaseTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[数据库类型ID(dataBaseTypeId)]的值:[$(pobjDataBaseTypeEN.dataBaseTypeId)], 非法,应该为字符型(In 数据库类型(DataBaseType))!(clsDataBaseTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjDataBaseTypeEN.dataBaseTypeName) == false &&
    undefined !== pobjDataBaseTypeEN.dataBaseTypeName &&
    tzDataType.isString(pobjDataBaseTypeEN.dataBaseTypeName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[数据库类型名(dataBaseTypeName)]的值:[$(pobjDataBaseTypeEN.dataBaseTypeName)], 非法,应该为字符型(In 数据库类型(DataBaseType))!(clsDataBaseTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjDataBaseTypeEN.dataBaseTypeENName) == false &&
    undefined !== pobjDataBaseTypeEN.dataBaseTypeENName &&
    tzDataType.isString(pobjDataBaseTypeEN.dataBaseTypeENName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[数据库类型英文名(dataBaseTypeENName)]的值:[$(pobjDataBaseTypeEN.dataBaseTypeENName)], 非法,应该为字符型(In 数据库类型(DataBaseType))!(clsDataBaseTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjDataBaseTypeEN.dataBaseTypeSimName) == false &&
    undefined !== pobjDataBaseTypeEN.dataBaseTypeSimName &&
    tzDataType.isString(pobjDataBaseTypeEN.dataBaseTypeSimName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[数据库类型简名(dataBaseTypeSimName)]的值:[$(pobjDataBaseTypeEN.dataBaseTypeSimName)], 非法,应该为字符型(In 数据库类型(DataBaseType))!(clsDataBaseTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjDataBaseTypeEN.memo) == false &&
    undefined !== pobjDataBaseTypeEN.memo &&
    tzDataType.isString(pobjDataBaseTypeEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[说明(memo)]的值:[$(pobjDataBaseTypeEN.memo)], 非法,应该为字符型(In 数据库类型(DataBaseType))!(clsDataBaseTypeBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function DataBaseType_CheckProperty4Update(pobjDataBaseTypeEN: clsDataBaseTypeEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjDataBaseTypeEN.dataBaseTypeId) == false &&
    GetStrLen(pobjDataBaseTypeEN.dataBaseTypeId) > 2
  ) {
    throw new Error(
      '(errid:Watl000416)字段[数据库类型ID(dataBaseTypeId)]的长度不能超过2(In 数据库类型(DataBaseType))!值:$(pobjDataBaseTypeEN.dataBaseTypeId)(clsDataBaseTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjDataBaseTypeEN.dataBaseTypeName) == false &&
    GetStrLen(pobjDataBaseTypeEN.dataBaseTypeName) > 30
  ) {
    throw new Error(
      '(errid:Watl000416)字段[数据库类型名(dataBaseTypeName)]的长度不能超过30(In 数据库类型(DataBaseType))!值:$(pobjDataBaseTypeEN.dataBaseTypeName)(clsDataBaseTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjDataBaseTypeEN.dataBaseTypeENName) == false &&
    GetStrLen(pobjDataBaseTypeEN.dataBaseTypeENName) > 30
  ) {
    throw new Error(
      '(errid:Watl000416)字段[数据库类型英文名(dataBaseTypeENName)]的长度不能超过30(In 数据库类型(DataBaseType))!值:$(pobjDataBaseTypeEN.dataBaseTypeENName)(clsDataBaseTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjDataBaseTypeEN.dataBaseTypeSimName) == false &&
    GetStrLen(pobjDataBaseTypeEN.dataBaseTypeSimName) > 30
  ) {
    throw new Error(
      '(errid:Watl000416)字段[数据库类型简名(dataBaseTypeSimName)]的长度不能超过30(In 数据库类型(DataBaseType))!值:$(pobjDataBaseTypeEN.dataBaseTypeSimName)(clsDataBaseTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjDataBaseTypeEN.memo) == false &&
    GetStrLen(pobjDataBaseTypeEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In 数据库类型(DataBaseType))!值:$(pobjDataBaseTypeEN.memo)(clsDataBaseTypeBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjDataBaseTypeEN.dataBaseTypeId) == false &&
    undefined !== pobjDataBaseTypeEN.dataBaseTypeId &&
    tzDataType.isString(pobjDataBaseTypeEN.dataBaseTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[数据库类型ID(dataBaseTypeId)]的值:[$(pobjDataBaseTypeEN.dataBaseTypeId)], 非法,应该为字符型(In 数据库类型(DataBaseType))!(clsDataBaseTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjDataBaseTypeEN.dataBaseTypeName) == false &&
    undefined !== pobjDataBaseTypeEN.dataBaseTypeName &&
    tzDataType.isString(pobjDataBaseTypeEN.dataBaseTypeName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[数据库类型名(dataBaseTypeName)]的值:[$(pobjDataBaseTypeEN.dataBaseTypeName)], 非法,应该为字符型(In 数据库类型(DataBaseType))!(clsDataBaseTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjDataBaseTypeEN.dataBaseTypeENName) == false &&
    undefined !== pobjDataBaseTypeEN.dataBaseTypeENName &&
    tzDataType.isString(pobjDataBaseTypeEN.dataBaseTypeENName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[数据库类型英文名(dataBaseTypeENName)]的值:[$(pobjDataBaseTypeEN.dataBaseTypeENName)], 非法,应该为字符型(In 数据库类型(DataBaseType))!(clsDataBaseTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjDataBaseTypeEN.dataBaseTypeSimName) == false &&
    undefined !== pobjDataBaseTypeEN.dataBaseTypeSimName &&
    tzDataType.isString(pobjDataBaseTypeEN.dataBaseTypeSimName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[数据库类型简名(dataBaseTypeSimName)]的值:[$(pobjDataBaseTypeEN.dataBaseTypeSimName)], 非法,应该为字符型(In 数据库类型(DataBaseType))!(clsDataBaseTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjDataBaseTypeEN.memo) == false &&
    undefined !== pobjDataBaseTypeEN.memo &&
    tzDataType.isString(pobjDataBaseTypeEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[说明(memo)]的值:[$(pobjDataBaseTypeEN.memo)], 非法,应该为字符型(In 数据库类型(DataBaseType))!(clsDataBaseTypeBL:CheckProperty4Update)',
    );
  }
  //检查主键是否为Null或者空!
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
export function DataBaseType_GetJSONStrByObj(pobjDataBaseTypeEN: clsDataBaseTypeEN): string {
  pobjDataBaseTypeEN.sfUpdFldSetStr = pobjDataBaseTypeEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjDataBaseTypeEN);
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
export function DataBaseType_GetObjLstByJSONStr(strJSON: string): Array<clsDataBaseTypeEN> {
  let arrDataBaseTypeObjLst = new Array<clsDataBaseTypeEN>();
  if (strJSON === '') {
    return arrDataBaseTypeObjLst;
  }
  try {
    arrDataBaseTypeObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrDataBaseTypeObjLst;
  }
  return arrDataBaseTypeObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrDataBaseTypeObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function DataBaseType_GetObjLstByJSONObjLst(
  arrDataBaseTypeObjLstS: Array<clsDataBaseTypeEN>,
): Array<clsDataBaseTypeEN> {
  const arrDataBaseTypeObjLst = new Array<clsDataBaseTypeEN>();
  for (const objInFor of arrDataBaseTypeObjLstS) {
    const obj1 = DataBaseType_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrDataBaseTypeObjLst.push(obj1);
  }
  return arrDataBaseTypeObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function DataBaseType_GetObjByJSONStr(strJSON: string): clsDataBaseTypeEN {
  let pobjDataBaseTypeEN = new clsDataBaseTypeEN();
  if (strJSON === '') {
    return pobjDataBaseTypeEN;
  }
  try {
    pobjDataBaseTypeEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjDataBaseTypeEN;
  }
  return pobjDataBaseTypeEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function DataBaseType_GetCombineCondition(objDataBaseTypeCond: clsDataBaseTypeEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objDataBaseTypeCond.dicFldComparisonOp,
      clsDataBaseTypeEN.con_DataBaseTypeId,
    ) == true
  ) {
    const strComparisonOpDataBaseTypeId: string =
      objDataBaseTypeCond.dicFldComparisonOp[clsDataBaseTypeEN.con_DataBaseTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDataBaseTypeEN.con_DataBaseTypeId,
      objDataBaseTypeCond.dataBaseTypeId,
      strComparisonOpDataBaseTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDataBaseTypeCond.dicFldComparisonOp,
      clsDataBaseTypeEN.con_DataBaseTypeName,
    ) == true
  ) {
    const strComparisonOpDataBaseTypeName: string =
      objDataBaseTypeCond.dicFldComparisonOp[clsDataBaseTypeEN.con_DataBaseTypeName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDataBaseTypeEN.con_DataBaseTypeName,
      objDataBaseTypeCond.dataBaseTypeName,
      strComparisonOpDataBaseTypeName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDataBaseTypeCond.dicFldComparisonOp,
      clsDataBaseTypeEN.con_DataBaseTypeENName,
    ) == true
  ) {
    const strComparisonOpDataBaseTypeENName: string =
      objDataBaseTypeCond.dicFldComparisonOp[clsDataBaseTypeEN.con_DataBaseTypeENName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDataBaseTypeEN.con_DataBaseTypeENName,
      objDataBaseTypeCond.dataBaseTypeENName,
      strComparisonOpDataBaseTypeENName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDataBaseTypeCond.dicFldComparisonOp,
      clsDataBaseTypeEN.con_DataBaseTypeSimName,
    ) == true
  ) {
    const strComparisonOpDataBaseTypeSimName: string =
      objDataBaseTypeCond.dicFldComparisonOp[clsDataBaseTypeEN.con_DataBaseTypeSimName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDataBaseTypeEN.con_DataBaseTypeSimName,
      objDataBaseTypeCond.dataBaseTypeSimName,
      strComparisonOpDataBaseTypeSimName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDataBaseTypeCond.dicFldComparisonOp,
      clsDataBaseTypeEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objDataBaseTypeCond.dicFldComparisonOp[clsDataBaseTypeEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDataBaseTypeEN.con_Memo,
      objDataBaseTypeCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--DataBaseType(数据库类型),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strDataBaseTypeName: 数据库类型名(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function DataBaseType_GetUniCondStr(objDataBaseTypeEN: clsDataBaseTypeEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and DataBaseTypeName = '{0}'", objDataBaseTypeEN.dataBaseTypeName);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--DataBaseType(数据库类型),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strDataBaseTypeName: 数据库类型名(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function DataBaseType_GetUniCondStr4Update(objDataBaseTypeEN: clsDataBaseTypeEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and DataBaseTypeId <> '{0}'", objDataBaseTypeEN.dataBaseTypeId);
  strWhereCond += Format(" and DataBaseTypeName = '{0}'", objDataBaseTypeEN.dataBaseTypeName);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objDataBaseTypeENS:源对象
 * @param objDataBaseTypeENT:目标对象
 */
export function DataBaseType_GetObjFromJsonObj(
  objDataBaseTypeENS: clsDataBaseTypeEN,
): clsDataBaseTypeEN {
  const objDataBaseTypeENT: clsDataBaseTypeEN = new clsDataBaseTypeEN();
  ObjectAssign(objDataBaseTypeENT, objDataBaseTypeENS);
  return objDataBaseTypeENT;
}
