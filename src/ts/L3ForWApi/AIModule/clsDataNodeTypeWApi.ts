/**
 * 类名:clsDataNodeTypeWApi
 * 表名:DataNodeType(00050548)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/14 11:53:07
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 应用类型:Vue应用InCore-TS(30)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:AI模块(AIModule)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 数据结点类型(DataNodeType)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2025年06月14日.
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
import { dataNodeTypeCache, isFuncMapCache } from '@/views/AIModule/DataNodeTypeVueShare';
import { clsDataNodeTypeENEx } from '@/ts/L0Entity/AIModule/clsDataNodeTypeENEx';
import { clsDataNodeTypeEN } from '@/ts/L0Entity/AIModule/clsDataNodeTypeEN';
import { AddRecordResult } from '@/ts/PubFun/AddRecordResult';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';

export const dataNodeType_Controller = 'DataNodeTypeApi';
export const dataNodeType_ConstructorName = 'dataNodeType';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strDataNodeTypeId:关键字
 * @returns 对象
 **/
export async function DataNodeType_GetObjByDataNodeTypeIdAsync(
  strDataNodeTypeId: string,
): Promise<clsDataNodeTypeEN | null> {
  const strThisFuncName = 'GetObjByDataNodeTypeIdAsync';

  if (IsNullOrEmpty(strDataNodeTypeId) == true) {
    const strMsg = Format(
      '参数:[strDataNodeTypeId]不能为空!(In clsDataNodeTypeWApi.GetObjByDataNodeTypeIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strDataNodeTypeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strDataNodeTypeId]的长度:[{0}]不正确!(clsDataNodeTypeWApi.GetObjByDataNodeTypeIdAsync)',
      strDataNodeTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByDataNodeTypeId';
  const strUrl = GetWebApiUrl(dataNodeType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strDataNodeTypeId,
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
      const objDataNodeType = DataNodeType_GetObjFromJsonObj(returnObj);
      return objDataNodeType;
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
        dataNodeType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataNodeType_ConstructorName,
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
 * @param strDataNodeTypeId:所给的关键字
 * @returns 对象
 */
export async function DataNodeType_GetObjByDataNodeTypeIdlocalStorage(strDataNodeTypeId: string) {
  const strThisFuncName = 'GetObjByDataNodeTypeIdlocalStorage';

  if (IsNullOrEmpty(strDataNodeTypeId) == true) {
    const strMsg = Format(
      '参数:[strDataNodeTypeId]不能为空!(In clsDataNodeTypeWApi.GetObjByDataNodeTypeIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strDataNodeTypeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strDataNodeTypeId]的长度:[{0}]不正确!(clsDataNodeTypeWApi.GetObjByDataNodeTypeIdlocalStorage)',
      strDataNodeTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsDataNodeTypeEN._CurrTabName, strDataNodeTypeId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objDataNodeTypeCache: clsDataNodeTypeEN = JSON.parse(strTempObj);
    return objDataNodeTypeCache;
  }
  try {
    const objDataNodeType = await DataNodeType_GetObjByDataNodeTypeIdAsync(strDataNodeTypeId);
    if (objDataNodeType != null) {
      localStorage.setItem(strKey, JSON.stringify(objDataNodeType));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objDataNodeType;
    }
    return objDataNodeType;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strDataNodeTypeId,
      dataNodeType_ConstructorName,
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
 * @param strDataNodeTypeId:所给的关键字
 * @returns 对象
 */
export async function DataNodeType_GetObjByDataNodeTypeIdCache(
  strDataNodeTypeId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByDataNodeTypeIdCache';

  if (IsNullOrEmpty(strDataNodeTypeId) == true) {
    const strMsg = Format(
      '参数:[strDataNodeTypeId]不能为空!(In clsDataNodeTypeWApi.GetObjByDataNodeTypeIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strDataNodeTypeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strDataNodeTypeId]的长度:[{0}]不正确!(clsDataNodeTypeWApi.GetObjByDataNodeTypeIdCache)',
      strDataNodeTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrDataNodeTypeObjLstCache = await DataNodeType_GetObjLstCache();
  try {
    const arrDataNodeTypeSel = arrDataNodeTypeObjLstCache.filter(
      (x) => x.dataNodeTypeId == strDataNodeTypeId,
    );
    let objDataNodeType: clsDataNodeTypeEN;
    if (arrDataNodeTypeSel.length > 0) {
      objDataNodeType = arrDataNodeTypeSel[0];
      return objDataNodeType;
    } else {
      if (bolTryAsyncOnce == true) {
        const objDataNodeTypeConst = await DataNodeType_GetObjByDataNodeTypeIdAsync(
          strDataNodeTypeId,
        );
        if (objDataNodeTypeConst != null) {
          DataNodeType_ReFreshThisCache();
          return objDataNodeTypeConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strDataNodeTypeId,
      dataNodeType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objDataNodeType:所给的对象
 * @returns 对象
 */
export async function DataNodeType_UpdateObjInLstCache(objDataNodeType: clsDataNodeTypeEN) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrDataNodeTypeObjLstCache = await DataNodeType_GetObjLstCache();
    const obj = arrDataNodeTypeObjLstCache.find(
      (x) => x.dataNodeTypeName == objDataNodeType.dataNodeTypeName,
    );
    if (obj != null) {
      objDataNodeType.dataNodeTypeId = obj.dataNodeTypeId;
      ObjectAssign(obj, objDataNodeType);
    } else {
      arrDataNodeTypeObjLstCache.push(objDataNodeType);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      dataNodeType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function DataNodeType_SortFunDefa(a: clsDataNodeTypeEN, b: clsDataNodeTypeEN): number {
  return a.dataNodeTypeId.localeCompare(b.dataNodeTypeId);
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function DataNodeType_SortFunDefa2Fld(a: clsDataNodeTypeEN, b: clsDataNodeTypeEN): number {
  if (a.dataNodeTypeName == b.dataNodeTypeName)
    return a.dataNodeTypeENName.localeCompare(b.dataNodeTypeENName);
  else return a.dataNodeTypeName.localeCompare(b.dataNodeTypeName);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function DataNodeType_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsDataNodeTypeEN.con_DataNodeTypeId:
        return (a: clsDataNodeTypeEN, b: clsDataNodeTypeEN) => {
          return a.dataNodeTypeId.localeCompare(b.dataNodeTypeId);
        };
      case clsDataNodeTypeEN.con_DataNodeTypeName:
        return (a: clsDataNodeTypeEN, b: clsDataNodeTypeEN) => {
          if (a.dataNodeTypeName == null) return -1;
          if (b.dataNodeTypeName == null) return 1;
          return a.dataNodeTypeName.localeCompare(b.dataNodeTypeName);
        };
      case clsDataNodeTypeEN.con_DataNodeTypeENName:
        return (a: clsDataNodeTypeEN, b: clsDataNodeTypeEN) => {
          if (a.dataNodeTypeENName == null) return -1;
          if (b.dataNodeTypeENName == null) return 1;
          return a.dataNodeTypeENName.localeCompare(b.dataNodeTypeENName);
        };
      case clsDataNodeTypeEN.con_UpdDate:
        return (a: clsDataNodeTypeEN, b: clsDataNodeTypeEN) => {
          return a.updDate.localeCompare(b.updDate);
        };
      case clsDataNodeTypeEN.con_UpdUser:
        return (a: clsDataNodeTypeEN, b: clsDataNodeTypeEN) => {
          return a.updUser.localeCompare(b.updUser);
        };
      case clsDataNodeTypeEN.con_Memo:
        return (a: clsDataNodeTypeEN, b: clsDataNodeTypeEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[DataNodeType]中不存在!(in ${dataNodeType_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsDataNodeTypeEN.con_DataNodeTypeId:
        return (a: clsDataNodeTypeEN, b: clsDataNodeTypeEN) => {
          return b.dataNodeTypeId.localeCompare(a.dataNodeTypeId);
        };
      case clsDataNodeTypeEN.con_DataNodeTypeName:
        return (a: clsDataNodeTypeEN, b: clsDataNodeTypeEN) => {
          if (b.dataNodeTypeName == null) return -1;
          if (a.dataNodeTypeName == null) return 1;
          return b.dataNodeTypeName.localeCompare(a.dataNodeTypeName);
        };
      case clsDataNodeTypeEN.con_DataNodeTypeENName:
        return (a: clsDataNodeTypeEN, b: clsDataNodeTypeEN) => {
          if (b.dataNodeTypeENName == null) return -1;
          if (a.dataNodeTypeENName == null) return 1;
          return b.dataNodeTypeENName.localeCompare(a.dataNodeTypeENName);
        };
      case clsDataNodeTypeEN.con_UpdDate:
        return (a: clsDataNodeTypeEN, b: clsDataNodeTypeEN) => {
          return b.updDate.localeCompare(a.updDate);
        };
      case clsDataNodeTypeEN.con_UpdUser:
        return (a: clsDataNodeTypeEN, b: clsDataNodeTypeEN) => {
          return b.updUser.localeCompare(a.updUser);
        };
      case clsDataNodeTypeEN.con_Memo:
        return (a: clsDataNodeTypeEN, b: clsDataNodeTypeEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[DataNodeType]中不存在!(in ${dataNodeType_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strDataNodeTypeId:所给的关键字
 * @returns 对象
 */
export async function DataNodeType_GetNameByDataNodeTypeIdCache(strDataNodeTypeId: string) {
  if (IsNullOrEmpty(strDataNodeTypeId) == true) {
    const strMsg = Format(
      '参数:[strDataNodeTypeId]不能为空!(In clsDataNodeTypeWApi.GetNameByDataNodeTypeIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strDataNodeTypeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strDataNodeTypeId]的长度:[{0}]不正确!(clsDataNodeTypeWApi.GetNameByDataNodeTypeIdCache)',
      strDataNodeTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrDataNodeTypeObjLstCache = await DataNodeType_GetObjLstCache();
  if (arrDataNodeTypeObjLstCache == null) return '';
  try {
    const arrDataNodeTypeSel = arrDataNodeTypeObjLstCache.filter(
      (x) => x.dataNodeTypeId == strDataNodeTypeId,
    );
    let objDataNodeType: clsDataNodeTypeEN;
    if (arrDataNodeTypeSel.length > 0) {
      objDataNodeType = arrDataNodeTypeSel[0];
      return objDataNodeType.dataNodeTypeName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strDataNodeTypeId,
    );
    console.error(strMsg);
    alert(strMsg);
  }
  return '';
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function DataNodeType_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsDataNodeTypeEN.con_DataNodeTypeId:
      return (obj: clsDataNodeTypeEN) => {
        return obj.dataNodeTypeId === value;
      };
    case clsDataNodeTypeEN.con_DataNodeTypeName:
      return (obj: clsDataNodeTypeEN) => {
        return obj.dataNodeTypeName === value;
      };
    case clsDataNodeTypeEN.con_DataNodeTypeENName:
      return (obj: clsDataNodeTypeEN) => {
        return obj.dataNodeTypeENName === value;
      };
    case clsDataNodeTypeEN.con_UpdDate:
      return (obj: clsDataNodeTypeEN) => {
        return obj.updDate === value;
      };
    case clsDataNodeTypeEN.con_UpdUser:
      return (obj: clsDataNodeTypeEN) => {
        return obj.updUser === value;
      };
    case clsDataNodeTypeEN.con_Memo:
      return (obj: clsDataNodeTypeEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[DataNodeType]中不存在!(in ${dataNodeType_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 * @returns 返回一个输出字段值
 */
export async function DataNodeType_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsDataNodeTypeEN.con_DataNodeTypeId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsDataNodeTypeEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsDataNodeTypeEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strDataNodeTypeId = strInValue;
  if (IsNullOrEmpty(strDataNodeTypeId) == true) {
    return '';
  }
  const objDataNodeType = await DataNodeType_GetObjByDataNodeTypeIdCache(strDataNodeTypeId);
  if (objDataNodeType == null) return '';
  if (objDataNodeType.GetFldValue(strOutFldName) == null) return '';
  return objDataNodeType.GetFldValue(strOutFldName).toString();
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 * @returns 返回一个关键字值列表
 */
export async function DataNodeType_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsDataNodeTypeEN.con_DataNodeTypeId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrDataNodeType = await DataNodeType_GetObjLstCache();
  if (arrDataNodeType == null) return [];
  let arrDataNodeTypeSel = arrDataNodeType;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrDataNodeTypeSel = arrDataNodeTypeSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrDataNodeTypeSel = arrDataNodeTypeSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrDataNodeTypeSel = arrDataNodeTypeSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrDataNodeTypeSel = arrDataNodeTypeSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrDataNodeTypeSel = arrDataNodeTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrDataNodeTypeSel = arrDataNodeTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrDataNodeTypeSel = arrDataNodeTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrDataNodeTypeSel = arrDataNodeTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrDataNodeTypeSel = arrDataNodeTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrDataNodeTypeSel = arrDataNodeTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrDataNodeTypeSel.length == 0) return [];
  return arrDataNodeTypeSel.map((x) => x.dataNodeTypeId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function DataNodeType_GetFldValueAsync(
  strFldName: string,
  strWhereCond: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetFldValueAsync';
  const strAction = 'GetFldValue';
  const strUrl = GetWebApiUrl(dataNodeType_Controller, strAction);

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
        dataNodeType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataNodeType_ConstructorName,
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
export async function DataNodeType_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(dataNodeType_Controller, strAction);

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
        dataNodeType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataNodeType_ConstructorName,
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
export async function DataNodeType_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(dataNodeType_Controller, strAction);

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
        dataNodeType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataNodeType_ConstructorName,
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
export async function DataNodeType_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsDataNodeTypeEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(dataNodeType_Controller, strAction);

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
      const objDataNodeType = DataNodeType_GetObjFromJsonObj(returnObj);
      return objDataNodeType;
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
        dataNodeType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataNodeType_ConstructorName,
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
export async function DataNodeType_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsDataNodeTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsDataNodeTypeEN.WhereFormat) == false) {
    strWhereCond = clsDataNodeTypeEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsDataNodeTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsDataNodeTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrDataNodeTypeExObjLstCache: Array<clsDataNodeTypeEN> = CacheHelper.Get(strKey);
    const arrDataNodeTypeObjLstT = DataNodeType_GetObjLstByJSONObjLst(arrDataNodeTypeExObjLstCache);
    return arrDataNodeTypeObjLstT;
  }
  try {
    const arrDataNodeTypeExObjLst = await DataNodeType_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrDataNodeTypeExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrDataNodeTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrDataNodeTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      dataNodeType_ConstructorName,
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
export async function DataNodeType_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsDataNodeTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsDataNodeTypeEN.WhereFormat) == false) {
    strWhereCond = clsDataNodeTypeEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsDataNodeTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsDataNodeTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrDataNodeTypeExObjLstCache: Array<clsDataNodeTypeEN> = JSON.parse(strTempObjLst);
    const arrDataNodeTypeObjLstT = DataNodeType_GetObjLstByJSONObjLst(arrDataNodeTypeExObjLstCache);
    return arrDataNodeTypeObjLstT;
  }
  try {
    const arrDataNodeTypeExObjLst = await DataNodeType_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrDataNodeTypeExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrDataNodeTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrDataNodeTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      dataNodeType_ConstructorName,
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
export async function DataNodeType_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsDataNodeTypeEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrDataNodeTypeObjLstCache: Array<clsDataNodeTypeEN> = JSON.parse(strTempObjLst);
    return arrDataNodeTypeObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function DataNodeType_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsDataNodeTypeEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(dataNodeType_Controller, strAction);

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
          dataNodeType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = DataNodeType_GetObjLstByJSONObjLst(returnObjLst);
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
        dataNodeType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataNodeType_ConstructorName,
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
export async function DataNodeType_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsDataNodeTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsDataNodeTypeEN.WhereFormat) == false) {
    strWhereCond = clsDataNodeTypeEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsDataNodeTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsDataNodeTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrDataNodeTypeExObjLstCache: Array<clsDataNodeTypeEN> = JSON.parse(strTempObjLst);
    const arrDataNodeTypeObjLstT = DataNodeType_GetObjLstByJSONObjLst(arrDataNodeTypeExObjLstCache);
    return arrDataNodeTypeObjLstT;
  }
  try {
    const arrDataNodeTypeExObjLst = await DataNodeType_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrDataNodeTypeExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrDataNodeTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrDataNodeTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      dataNodeType_ConstructorName,
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
export async function DataNodeType_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsDataNodeTypeEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrDataNodeTypeObjLstCache: Array<clsDataNodeTypeEN> = JSON.parse(strTempObjLst);
    return arrDataNodeTypeObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function DataNodeType_GetObjLstCache(): Promise<Array<clsDataNodeTypeEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrDataNodeTypeObjLstCache;
  switch (clsDataNodeTypeEN.CacheModeId) {
    case '04': //sessionStorage
      arrDataNodeTypeObjLstCache = await DataNodeType_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrDataNodeTypeObjLstCache = await DataNodeType_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrDataNodeTypeObjLstCache = await DataNodeType_GetObjLstClientCache();
      break;
    default:
      arrDataNodeTypeObjLstCache = await DataNodeType_GetObjLstClientCache();
      break;
  }
  return arrDataNodeTypeObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function DataNodeType_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrDataNodeTypeObjLstCache;
  switch (clsDataNodeTypeEN.CacheModeId) {
    case '04': //sessionStorage
      arrDataNodeTypeObjLstCache = await DataNodeType_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrDataNodeTypeObjLstCache = await DataNodeType_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrDataNodeTypeObjLstCache = null;
      break;
    default:
      arrDataNodeTypeObjLstCache = null;
      break;
  }
  return arrDataNodeTypeObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrDataNodeTypeIdCond:条件对象
 * @returns 对象列表子集
 */
export async function DataNodeType_GetSubObjLstCache(objDataNodeTypeCond: ConditionCollection) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrDataNodeTypeObjLstCache = await DataNodeType_GetObjLstCache();
  let arrDataNodeTypeSel = arrDataNodeTypeObjLstCache;
  if (objDataNodeTypeCond.GetConditions().length == 0) return arrDataNodeTypeSel;
  try {
    //console.log(sstrKeys);
    for (const objCondition of objDataNodeTypeCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrDataNodeTypeSel = arrDataNodeTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrDataNodeTypeSel = arrDataNodeTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrDataNodeTypeSel = arrDataNodeTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrDataNodeTypeSel = arrDataNodeTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrDataNodeTypeSel = arrDataNodeTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrDataNodeTypeSel = arrDataNodeTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrDataNodeTypeSel = arrDataNodeTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrDataNodeTypeSel = arrDataNodeTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrDataNodeTypeSel = arrDataNodeTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrDataNodeTypeSel = arrDataNodeTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrDataNodeTypeSel = arrDataNodeTypeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrDataNodeTypeSel = arrDataNodeTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrDataNodeTypeSel = arrDataNodeTypeSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrDataNodeTypeSel = arrDataNodeTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrDataNodeTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objDataNodeTypeCond),
      dataNodeType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsDataNodeTypeEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrDataNodeTypeId:关键字列表
 * @returns 对象列表
 **/
export async function DataNodeType_GetObjLstByDataNodeTypeIdLstAsync(
  arrDataNodeTypeId: Array<string>,
): Promise<Array<clsDataNodeTypeEN>> {
  const strThisFuncName = 'GetObjLstByDataNodeTypeIdLstAsync';
  const strAction = 'GetObjLstByDataNodeTypeIdLst';
  const strUrl = GetWebApiUrl(dataNodeType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrDataNodeTypeId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          dataNodeType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = DataNodeType_GetObjLstByJSONObjLst(returnObjLst);
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
        dataNodeType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataNodeType_ConstructorName,
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
 * @param arrstrDataNodeTypeIdLst:关键字列表
 * @returns 对象列表
 */
export async function DataNodeType_GetObjLstByDataNodeTypeIdLstCache(
  arrDataNodeTypeIdLst: Array<string>,
) {
  const strThisFuncName = 'GetObjLstByDataNodeTypeIdLstCache';
  try {
    const arrDataNodeTypeObjLstCache = await DataNodeType_GetObjLstCache();
    const arrDataNodeTypeSel = arrDataNodeTypeObjLstCache.filter(
      (x) => arrDataNodeTypeIdLst.indexOf(x.dataNodeTypeId) > -1,
    );
    return arrDataNodeTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrDataNodeTypeIdLst.join(','),
      dataNodeType_ConstructorName,
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
export async function DataNodeType_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsDataNodeTypeEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(dataNodeType_Controller, strAction);

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
          dataNodeType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = DataNodeType_GetObjLstByJSONObjLst(returnObjLst);
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
        dataNodeType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataNodeType_ConstructorName,
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
export async function DataNodeType_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsDataNodeTypeEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(dataNodeType_Controller, strAction);

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
          dataNodeType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = DataNodeType_GetObjLstByJSONObjLst(returnObjLst);
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
        dataNodeType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataNodeType_ConstructorName,
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
export async function DataNodeType_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsDataNodeTypeEN>();
  const arrDataNodeTypeObjLstCache = await DataNodeType_GetObjLstCache();
  if (arrDataNodeTypeObjLstCache.length == 0) return arrDataNodeTypeObjLstCache;
  let arrDataNodeTypeSel = arrDataNodeTypeObjLstCache;
  const objDataNodeTypeCond = objPagerPara.conditionCollection;
  if (objDataNodeTypeCond == null) {
    const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return new Array<clsDataNodeTypeEN>();
  }
  //console.log("clsDataNodeTypeWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    for (const objCondition of objDataNodeTypeCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrDataNodeTypeSel = arrDataNodeTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrDataNodeTypeSel = arrDataNodeTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrDataNodeTypeSel = arrDataNodeTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrDataNodeTypeSel = arrDataNodeTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrDataNodeTypeSel = arrDataNodeTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrDataNodeTypeSel = arrDataNodeTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrDataNodeTypeSel = arrDataNodeTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrDataNodeTypeSel = arrDataNodeTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrDataNodeTypeSel = arrDataNodeTypeSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrDataNodeTypeSel = arrDataNodeTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrDataNodeTypeSel = arrDataNodeTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrDataNodeTypeSel = arrDataNodeTypeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrDataNodeTypeSel = arrDataNodeTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrDataNodeTypeSel = arrDataNodeTypeSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrDataNodeTypeSel = arrDataNodeTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrDataNodeTypeSel.length == 0) return arrDataNodeTypeSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrDataNodeTypeSel = arrDataNodeTypeSel.sort(
        DataNodeType_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrDataNodeTypeSel = arrDataNodeTypeSel.sort(objPagerPara.sortFun);
    }
    arrDataNodeTypeSel = arrDataNodeTypeSel.slice(intStart, intEnd);
    return arrDataNodeTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      dataNodeType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsDataNodeTypeEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function DataNodeType_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsDataNodeTypeEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsDataNodeTypeEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(dataNodeType_Controller, strAction);

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
          dataNodeType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = DataNodeType_GetObjLstByJSONObjLst(returnObjLst);
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
        dataNodeType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataNodeType_ConstructorName,
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
 * @param strDataNodeTypeId:关键字
 * @returns 获取删除的结果
 **/
export async function DataNodeType_DelRecordAsync(strDataNodeTypeId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(dataNodeType_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strDataNodeTypeId);

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
        dataNodeType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataNodeType_ConstructorName,
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
 * @param arrDataNodeTypeId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function DataNodeType_DelDataNodeTypesAsync(
  arrDataNodeTypeId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelDataNodeTypesAsync';
  const strAction = 'DelDataNodeTypes';
  const strUrl = GetWebApiUrl(dataNodeType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrDataNodeTypeId, config);
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
        dataNodeType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataNodeType_ConstructorName,
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
export async function DataNodeType_GetObjExLstByPagerCache(
  objPagerPara: stuPagerPara,
): Promise<Array<clsDataNodeTypeENEx>> {
  const strThisFuncName = 'GetObjLstByPagerCache';
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  const isFuncMapKey = `${objSortInfo.SortFld}`;
  const arrDataNodeTypeObjLst = await DataNodeType_GetObjLstCache();
  //从缓存中获取对象，如果缓存中不存在就扩展复制
  const arrNewObj = new Array<clsDataNodeTypeENEx>();
  const arrDataNodeTypeExObjLst = arrDataNodeTypeObjLst.map((obj) => {
    const cacheKey = `${obj.dataNodeTypeId}`;
    if (dataNodeTypeCache[cacheKey]) {
      const oldObj = dataNodeTypeCache[cacheKey];
      return oldObj;
    } else {
      const newObj = DataNodeType_CopyToEx(obj);
      arrNewObj.push(newObj);
      dataNodeTypeCache[cacheKey] = newObj;
      return newObj;
    }
  });
  for (const newObj of arrNewObj) {
    for (const strFldName of Object.keys(isFuncMapCache)) {
      await DataNodeType_FuncMapByFldName(strFldName, newObj);
    }
  }
  //检查关于当前扩展排序字段是否获取得值，如果没有获取过，就获取，并存缓存
  const bolIsFuncMap = isFuncMapCache[isFuncMapKey];
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsDataNodeTypeEN.AttributeName.indexOf(objSortInfo.SortFld) == -1 &&
    (bolIsFuncMap == false || bolIsFuncMap == undefined)
  ) {
    for (const newObj of arrDataNodeTypeExObjLst) {
      await DataNodeType_FuncMapByFldName(objSortInfo.SortFld, newObj);
      const cacheKey = `${newObj.dataNodeTypeId}`;
      dataNodeTypeCache[cacheKey] = newObj;
    }
    isFuncMapCache[isFuncMapKey] = true;
  }
  if (arrDataNodeTypeExObjLst.length == 0) return arrDataNodeTypeExObjLst;
  let arrDataNodeTypeSel: Array<clsDataNodeTypeENEx> = arrDataNodeTypeExObjLst;
  const objDataNodeTypeCond = objPagerPara.conditionCollection;
  if (objDataNodeTypeCond == null) {
    const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return arrDataNodeTypeExObjLst;
  }
  try {
    for (const objCondition of objDataNodeTypeCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrDataNodeTypeSel = arrDataNodeTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrDataNodeTypeSel = arrDataNodeTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrDataNodeTypeSel = arrDataNodeTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrDataNodeTypeSel = arrDataNodeTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrDataNodeTypeSel = arrDataNodeTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrDataNodeTypeSel = arrDataNodeTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrDataNodeTypeSel = arrDataNodeTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrDataNodeTypeSel = arrDataNodeTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.split(',');
            arrDataNodeTypeSel = arrDataNodeTypeSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrDataNodeTypeSel = arrDataNodeTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrDataNodeTypeSel = arrDataNodeTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrDataNodeTypeSel = arrDataNodeTypeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrDataNodeTypeSel = arrDataNodeTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrDataNodeTypeSel = arrDataNodeTypeSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrDataNodeTypeSel = arrDataNodeTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrDataNodeTypeSel.length == 0) return arrDataNodeTypeSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      arrDataNodeTypeSel = arrDataNodeTypeSel.sort(
        DataNodeType_SortFunByExKey(objSortInfo.SortFld, objSortInfo.SortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrDataNodeTypeSel = arrDataNodeTypeSel.sort(objPagerPara.sortFun);
    }
    arrDataNodeTypeSel = arrDataNodeTypeSel.slice(intStart, intEnd);
    return arrDataNodeTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      dataNodeType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsDataNodeTypeENEx>();
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CopyToEx)
 * @param objDataNodeTypeENS:源对象
 * @returns 目标对象=>clsDataNodeTypeEN:objDataNodeTypeENT
 **/
export function DataNodeType_CopyToEx(objDataNodeTypeENS: clsDataNodeTypeEN): clsDataNodeTypeENEx {
  const strThisFuncName = DataNodeType_CopyToEx.name;
  const objDataNodeTypeENT = new clsDataNodeTypeENEx();
  try {
    ObjectAssign(objDataNodeTypeENT, objDataNodeTypeENS);
    return objDataNodeTypeENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001294)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      dataNodeType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objDataNodeTypeENT;
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function DataNodeType_FuncMapByFldName(
  strFldName: string,
  objDataNodeTypeEx: clsDataNodeTypeENEx,
) {
  const strThisFuncName = DataNodeType_FuncMapByFldName.name;
  console.log(objDataNodeTypeEx);
  strFldName = strFldName.replace('|Ex', '');
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsDataNodeTypeEN.AttributeName;
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
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByExKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function DataNodeType_SortFunByExKey(strKey: string, AscOrDesc: string) {
  strKey = strKey.replace('|Ex', '');
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      default:
        return DataNodeType_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      default:
        return DataNodeType_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据条件删除记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelMultiRecordByCondAsync)
 * @returns 实际删除记录的个数
 **/
export async function DataNodeType_DelDataNodeTypesByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelDataNodeTypesByCondAsync';
  const strAction = 'DelDataNodeTypesByCond';
  const strUrl = GetWebApiUrl(dataNodeType_Controller, strAction);

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
        dataNodeType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataNodeType_ConstructorName,
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
 * @param objDataNodeTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function DataNodeType_AddNewRecordAsync(
  objDataNodeTypeEN: clsDataNodeTypeEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objDataNodeTypeEN);
  const strUrl = GetWebApiUrl(dataNodeType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objDataNodeTypeEN, config);
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
        dataNodeType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataNodeType_ConstructorName,
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
 * @param objDataNodeTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function DataNodeType_AddNewRecordWithMaxIdAsync(
  objDataNodeTypeEN: clsDataNodeTypeEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(dataNodeType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objDataNodeTypeEN, config);
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
        dataNodeType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataNodeType_ConstructorName,
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
export async function DataNodeType_AddNewObjSave(
  objDataNodeTypeEN: clsDataNodeTypeEN,
): Promise<AddRecordResult> {
  const strThisFuncName = 'AddNewObjSave';
  try {
    DataNodeType_CheckPropertyNew(objDataNodeTypeEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${dataNodeType_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    alert(strMsg);
    return { keyword: '', success: false }; //一定要有一个返回值,否则会出错!
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await DataNodeType_CheckUniCond4Add(objDataNodeTypeEN);
    if (bolIsExistCond == false) {
      return { keyword: '', success: false };
    }
    let returnBool = false;
    const returnKeyId = await DataNodeType_AddNewRecordWithMaxIdAsync(objDataNodeTypeEN);
    if (IsNullOrEmpty(returnKeyId) == false) {
      returnBool = true;
    }
    if (returnBool == true) {
      DataNodeType_ReFreshCache();
    } else {
      const strInfo = `添加[数据结点类型(DataNodeType)]记录不成功!`;
      //显示信息框
      throw strInfo;
    }
    return { keyword: returnKeyId, success: returnBool }; //一定要有一个返回值,否则会出错!
  } catch (e) {
    const strMsg = `添加记录不成功,${e}.(in ${dataNodeType_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export async function DataNodeType_CheckUniCond4Add(
  objDataNodeTypeEN: clsDataNodeTypeEN,
): Promise<boolean> {
  const strUniquenessCondition = DataNodeType_GetUniCondStr(objDataNodeTypeEN);
  const bolIsExistCondition = await DataNodeType_IsExistRecordAsync(strUniquenessCondition);
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
export async function DataNodeType_CheckUniCond4Update(
  objDataNodeTypeEN: clsDataNodeTypeEN,
): Promise<boolean> {
  const strUniquenessCondition = DataNodeType_GetUniCondStr4Update(objDataNodeTypeEN);
  const bolIsExistCondition = await DataNodeType_IsExistRecordAsync(strUniquenessCondition);
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
export async function DataNodeType_UpdateObjSave(
  objDataNodeTypeEN: clsDataNodeTypeEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateObjSave';
  objDataNodeTypeEN.sfUpdFldSetStr = objDataNodeTypeEN.updFldString; //设置哪些字段被修改(脏字段)
  if (objDataNodeTypeEN.dataNodeTypeId == '' || objDataNodeTypeEN.dataNodeTypeId == undefined) {
    console.error('关键字不能为空!');
    throw '关键字不能为空!';
  }
  try {
    DataNodeType_CheckProperty4Update(objDataNodeTypeEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${dataNodeType_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await DataNodeType_CheckUniCond4Update(objDataNodeTypeEN);
    if (bolIsExistCond == false) {
      return false;
    }
    const returnBool = await DataNodeType_UpdateRecordAsync(objDataNodeTypeEN);
    if (returnBool == true) {
      DataNodeType_ReFreshCache();
    }
    return returnBool;
  } catch (e) {
    const strMsg = `修改记录不成功,${e}.(in ${dataNodeType_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objDataNodeTypeEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function DataNodeType_AddNewRecordWithReturnKeyAsync(
  objDataNodeTypeEN: clsDataNodeTypeEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(dataNodeType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objDataNodeTypeEN, config);
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
        dataNodeType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataNodeType_ConstructorName,
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
 * @param objDataNodeTypeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function DataNodeType_UpdateRecordAsync(
  objDataNodeTypeEN: clsDataNodeTypeEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objDataNodeTypeEN.sfUpdFldSetStr === undefined ||
    objDataNodeTypeEN.sfUpdFldSetStr === null ||
    objDataNodeTypeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objDataNodeTypeEN.dataNodeTypeId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(dataNodeType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objDataNodeTypeEN, config);
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
        dataNodeType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataNodeType_ConstructorName,
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
 * @param objDataNodeTypeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function DataNodeType_EditRecordExAsync(
  objDataNodeTypeEN: clsDataNodeTypeEN,
): Promise<boolean> {
  const strThisFuncName = 'EditRecordExAsync';
  const strAction = 'EditRecordEx';
  if (
    objDataNodeTypeEN.sfUpdFldSetStr === undefined ||
    objDataNodeTypeEN.sfUpdFldSetStr === null ||
    objDataNodeTypeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objDataNodeTypeEN.dataNodeTypeId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(dataNodeType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objDataNodeTypeEN, config);
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
        dataNodeType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataNodeType_ConstructorName,
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
 * @param objDataNodeTypeEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function DataNodeType_UpdateWithConditionAsync(
  objDataNodeTypeEN: clsDataNodeTypeEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objDataNodeTypeEN.sfUpdFldSetStr === undefined ||
    objDataNodeTypeEN.sfUpdFldSetStr === null ||
    objDataNodeTypeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objDataNodeTypeEN.dataNodeTypeId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(dataNodeType_Controller, strAction);
  objDataNodeTypeEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objDataNodeTypeEN, config);
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
        dataNodeType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataNodeType_ConstructorName,
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
 * @param objstrDataNodeTypeIdCond:条件对象
 * @returns 对象列表子集
 */
export async function DataNodeType_IsExistRecordCache(objDataNodeTypeCond: ConditionCollection) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrDataNodeTypeObjLstCache = await DataNodeType_GetObjLstCache();
  if (arrDataNodeTypeObjLstCache == null) return false;
  let arrDataNodeTypeSel = arrDataNodeTypeObjLstCache;
  if (objDataNodeTypeCond.GetConditions().length == 0)
    return arrDataNodeTypeSel.length > 0 ? true : false;
  try {
    for (const objCondition of objDataNodeTypeCond.GetConditions()) {
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
            arrDataNodeTypeSel = arrDataNodeTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrDataNodeTypeSel = arrDataNodeTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrDataNodeTypeSel = arrDataNodeTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrDataNodeTypeSel = arrDataNodeTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrDataNodeTypeSel = arrDataNodeTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrDataNodeTypeSel = arrDataNodeTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrDataNodeTypeSel = arrDataNodeTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrDataNodeTypeSel = arrDataNodeTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrDataNodeTypeSel = arrDataNodeTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrDataNodeTypeSel = arrDataNodeTypeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrDataNodeTypeSel = arrDataNodeTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrDataNodeTypeSel = arrDataNodeTypeSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrDataNodeTypeSel = arrDataNodeTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrDataNodeTypeSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objDataNodeTypeCond),
      dataNodeType_ConstructorName,
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
export async function DataNodeType_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(dataNodeType_Controller, strAction);

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
        dataNodeType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataNodeType_ConstructorName,
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
 * @param strDataNodeTypeId:所给的关键字
 * @returns 对象
 */
export async function DataNodeType_IsExistCache(strDataNodeTypeId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrDataNodeTypeObjLstCache = await DataNodeType_GetObjLstCache();
  if (arrDataNodeTypeObjLstCache == null) return false;
  try {
    const arrDataNodeTypeSel = arrDataNodeTypeObjLstCache.filter(
      (x) => x.dataNodeTypeId == strDataNodeTypeId,
    );
    if (arrDataNodeTypeSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strDataNodeTypeId,
      dataNodeType_ConstructorName,
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
 * @param strDataNodeTypeId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function DataNodeType_IsExistAsync(strDataNodeTypeId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(dataNodeType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strDataNodeTypeId,
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
        dataNodeType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataNodeType_ConstructorName,
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
export async function DataNodeType_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(dataNodeType_Controller, strAction);

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
        dataNodeType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataNodeType_ConstructorName,
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
 * @param objDataNodeTypeCond:条件对象
 * @returns 对象列表记录数
 */
export async function DataNodeType_GetRecCountByCondCache(
  objDataNodeTypeCond: ConditionCollection,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrDataNodeTypeObjLstCache = await DataNodeType_GetObjLstCache();
  if (arrDataNodeTypeObjLstCache == null) return 0;
  let arrDataNodeTypeSel = arrDataNodeTypeObjLstCache;
  if (objDataNodeTypeCond.GetConditions().length == 0) return arrDataNodeTypeSel.length;
  try {
    for (const objCondition of objDataNodeTypeCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrDataNodeTypeSel = arrDataNodeTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrDataNodeTypeSel = arrDataNodeTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrDataNodeTypeSel = arrDataNodeTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrDataNodeTypeSel = arrDataNodeTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrDataNodeTypeSel = arrDataNodeTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrDataNodeTypeSel = arrDataNodeTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrDataNodeTypeSel = arrDataNodeTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrDataNodeTypeSel = arrDataNodeTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrDataNodeTypeSel = arrDataNodeTypeSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrDataNodeTypeSel = arrDataNodeTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrDataNodeTypeSel = arrDataNodeTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrDataNodeTypeSel = arrDataNodeTypeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrDataNodeTypeSel = arrDataNodeTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrDataNodeTypeSel = arrDataNodeTypeSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrDataNodeTypeSel = arrDataNodeTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrDataNodeTypeSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objDataNodeTypeCond),
      dataNodeType_ConstructorName,
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
export async function DataNodeType_GetMaxStrIdAsync(): Promise<string> {
  const strThisFuncName = 'GetMaxStrIdAsync';
  const strAction = 'GetMaxStrId';
  const strUrl = GetWebApiUrl(dataNodeType_Controller, strAction);

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
        dataNodeType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataNodeType_ConstructorName,
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
export async function DataNodeType_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(dataNodeType_Controller, strAction);

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
        dataNodeType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataNodeType_ConstructorName,
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
export function DataNodeType_GetWebApiUrl(strController: string, strAction: string): string {
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
export function DataNodeType_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功!');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clsDataNodeTypeEN._CurrTabName;
  switch (clsDataNodeTypeEN.CacheModeId) {
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
  clsDataNodeTypeEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
}

/**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export function DataNodeType_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsDataNodeTypeEN._CurrTabName;
    switch (clsDataNodeTypeEN.CacheModeId) {
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
    clsDataNodeTypeEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export function DataNodeType_GetLastRefreshTime(): string {
  if (clsDataNodeTypeEN._RefreshTimeLst.length == 0) return '';
  return clsDataNodeTypeEN._RefreshTimeLst[clsDataNodeTypeEN._RefreshTimeLst.length - 1];
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export async function DataNodeType_BindDdl_DataNodeTypeIdInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
) {
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_DataNodeTypeIdInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_DataNodeTypeIdInDivCache");
  const arrObjLstSel = await DataNodeType_GetObjLstCache();
  if (arrObjLstSel == null) return;
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsDataNodeTypeEN.con_DataNodeTypeId,
    clsDataNodeTypeEN.con_DataNodeTypeName,
    '数据结点类型...',
  );
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export async function DataNodeType_GetArrDataNodeType() {
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_DataNodeTypeIdInDivCache");
  const arrDataNodeType = new Array<clsDataNodeTypeEN>();
  const arrObjLstSel = await DataNodeType_GetObjLstCache();
  if (arrObjLstSel == null) return null;
  const obj0 = new clsDataNodeTypeEN();
  obj0.dataNodeTypeId = '0';
  obj0.dataNodeTypeName = '选数据结点类型...';
  arrDataNodeType.push(obj0);
  arrObjLstSel.forEach((x) => arrDataNodeType.push(x));
  return arrDataNodeType;
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function DataNodeType_CheckPropertyNew(pobjDataNodeTypeEN: clsDataNodeTypeEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjDataNodeTypeEN.updUser) === true) {
    throw new Error(
      `(errid:Watl000411)字段[修改者]不能为空(In 数据结点类型)!(clsDataNodeTypeBL:CheckPropertyNew0)`,
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjDataNodeTypeEN.dataNodeTypeId) == false &&
    GetStrLen(pobjDataNodeTypeEN.dataNodeTypeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000413)字段[数据结点类型Id(dataNodeTypeId)]的长度不能超过2(In 数据结点类型(DataNodeType))!值:${pobjDataNodeTypeEN.dataNodeTypeId}(clsDataNodeTypeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataNodeTypeEN.dataNodeTypeName) == false &&
    GetStrLen(pobjDataNodeTypeEN.dataNodeTypeName) > 50
  ) {
    throw new Error(
      `(errid:Watl000413)字段[数据结点类型名(dataNodeTypeName)]的长度不能超过50(In 数据结点类型(DataNodeType))!值:${pobjDataNodeTypeEN.dataNodeTypeName}(clsDataNodeTypeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataNodeTypeEN.dataNodeTypeENName) == false &&
    GetStrLen(pobjDataNodeTypeEN.dataNodeTypeENName) > 50
  ) {
    throw new Error(
      `(errid:Watl000413)字段[数据结点类型英文名(dataNodeTypeENName)]的长度不能超过50(In 数据结点类型(DataNodeType))!值:${pobjDataNodeTypeEN.dataNodeTypeENName}(clsDataNodeTypeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataNodeTypeEN.updDate) == false &&
    GetStrLen(pobjDataNodeTypeEN.updDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 数据结点类型(DataNodeType))!值:${pobjDataNodeTypeEN.updDate}(clsDataNodeTypeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataNodeTypeEN.updUser) == false &&
    GetStrLen(pobjDataNodeTypeEN.updUser) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改者(updUser)]的长度不能超过20(In 数据结点类型(DataNodeType))!值:${pobjDataNodeTypeEN.updUser}(clsDataNodeTypeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataNodeTypeEN.memo) == false &&
    GetStrLen(pobjDataNodeTypeEN.memo) > 1000
  ) {
    throw new Error(
      `(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In 数据结点类型(DataNodeType))!值:${pobjDataNodeTypeEN.memo}(clsDataNodeTypeBL:CheckPropertyNew)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjDataNodeTypeEN.dataNodeTypeId) == false &&
    undefined !== pobjDataNodeTypeEN.dataNodeTypeId &&
    tzDataType.isString(pobjDataNodeTypeEN.dataNodeTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[数据结点类型Id(dataNodeTypeId)]的值:[${pobjDataNodeTypeEN.dataNodeTypeId}], 非法,应该为字符型(In 数据结点类型(DataNodeType))!(clsDataNodeTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataNodeTypeEN.dataNodeTypeName) == false &&
    undefined !== pobjDataNodeTypeEN.dataNodeTypeName &&
    tzDataType.isString(pobjDataNodeTypeEN.dataNodeTypeName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[数据结点类型名(dataNodeTypeName)]的值:[${pobjDataNodeTypeEN.dataNodeTypeName}], 非法,应该为字符型(In 数据结点类型(DataNodeType))!(clsDataNodeTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataNodeTypeEN.dataNodeTypeENName) == false &&
    undefined !== pobjDataNodeTypeEN.dataNodeTypeENName &&
    tzDataType.isString(pobjDataNodeTypeEN.dataNodeTypeENName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[数据结点类型英文名(dataNodeTypeENName)]的值:[${pobjDataNodeTypeEN.dataNodeTypeENName}], 非法,应该为字符型(In 数据结点类型(DataNodeType))!(clsDataNodeTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataNodeTypeEN.updDate) == false &&
    undefined !== pobjDataNodeTypeEN.updDate &&
    tzDataType.isString(pobjDataNodeTypeEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjDataNodeTypeEN.updDate}], 非法,应该为字符型(In 数据结点类型(DataNodeType))!(clsDataNodeTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataNodeTypeEN.updUser) == false &&
    undefined !== pobjDataNodeTypeEN.updUser &&
    tzDataType.isString(pobjDataNodeTypeEN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改者(updUser)]的值:[${pobjDataNodeTypeEN.updUser}], 非法,应该为字符型(In 数据结点类型(DataNodeType))!(clsDataNodeTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataNodeTypeEN.memo) == false &&
    undefined !== pobjDataNodeTypeEN.memo &&
    tzDataType.isString(pobjDataNodeTypeEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[说明(memo)]的值:[${pobjDataNodeTypeEN.memo}], 非法,应该为字符型(In 数据结点类型(DataNodeType))!(clsDataNodeTypeBL:CheckPropertyNew0)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function DataNodeType_CheckProperty4Update(pobjDataNodeTypeEN: clsDataNodeTypeEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjDataNodeTypeEN.dataNodeTypeId) == false &&
    GetStrLen(pobjDataNodeTypeEN.dataNodeTypeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000416)字段[数据结点类型Id(dataNodeTypeId)]的长度不能超过2(In 数据结点类型(DataNodeType))!值:${pobjDataNodeTypeEN.dataNodeTypeId}(clsDataNodeTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataNodeTypeEN.dataNodeTypeName) == false &&
    GetStrLen(pobjDataNodeTypeEN.dataNodeTypeName) > 50
  ) {
    throw new Error(
      `(errid:Watl000416)字段[数据结点类型名(dataNodeTypeName)]的长度不能超过50(In 数据结点类型(DataNodeType))!值:${pobjDataNodeTypeEN.dataNodeTypeName}(clsDataNodeTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataNodeTypeEN.dataNodeTypeENName) == false &&
    GetStrLen(pobjDataNodeTypeEN.dataNodeTypeENName) > 50
  ) {
    throw new Error(
      `(errid:Watl000416)字段[数据结点类型英文名(dataNodeTypeENName)]的长度不能超过50(In 数据结点类型(DataNodeType))!值:${pobjDataNodeTypeEN.dataNodeTypeENName}(clsDataNodeTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataNodeTypeEN.updDate) == false &&
    GetStrLen(pobjDataNodeTypeEN.updDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 数据结点类型(DataNodeType))!值:${pobjDataNodeTypeEN.updDate}(clsDataNodeTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataNodeTypeEN.updUser) == false &&
    GetStrLen(pobjDataNodeTypeEN.updUser) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改者(updUser)]的长度不能超过20(In 数据结点类型(DataNodeType))!值:${pobjDataNodeTypeEN.updUser}(clsDataNodeTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataNodeTypeEN.memo) == false &&
    GetStrLen(pobjDataNodeTypeEN.memo) > 1000
  ) {
    throw new Error(
      `(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In 数据结点类型(DataNodeType))!值:${pobjDataNodeTypeEN.memo}(clsDataNodeTypeBL:CheckProperty4Update)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjDataNodeTypeEN.dataNodeTypeId) == false &&
    undefined !== pobjDataNodeTypeEN.dataNodeTypeId &&
    tzDataType.isString(pobjDataNodeTypeEN.dataNodeTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[数据结点类型Id(dataNodeTypeId)]的值:[${pobjDataNodeTypeEN.dataNodeTypeId}], 非法,应该为字符型(In 数据结点类型(DataNodeType))!(clsDataNodeTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataNodeTypeEN.dataNodeTypeName) == false &&
    undefined !== pobjDataNodeTypeEN.dataNodeTypeName &&
    tzDataType.isString(pobjDataNodeTypeEN.dataNodeTypeName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[数据结点类型名(dataNodeTypeName)]的值:[${pobjDataNodeTypeEN.dataNodeTypeName}], 非法,应该为字符型(In 数据结点类型(DataNodeType))!(clsDataNodeTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataNodeTypeEN.dataNodeTypeENName) == false &&
    undefined !== pobjDataNodeTypeEN.dataNodeTypeENName &&
    tzDataType.isString(pobjDataNodeTypeEN.dataNodeTypeENName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[数据结点类型英文名(dataNodeTypeENName)]的值:[${pobjDataNodeTypeEN.dataNodeTypeENName}], 非法,应该为字符型(In 数据结点类型(DataNodeType))!(clsDataNodeTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataNodeTypeEN.updDate) == false &&
    undefined !== pobjDataNodeTypeEN.updDate &&
    tzDataType.isString(pobjDataNodeTypeEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjDataNodeTypeEN.updDate}], 非法,应该为字符型(In 数据结点类型(DataNodeType))!(clsDataNodeTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataNodeTypeEN.updUser) == false &&
    undefined !== pobjDataNodeTypeEN.updUser &&
    tzDataType.isString(pobjDataNodeTypeEN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改者(updUser)]的值:[${pobjDataNodeTypeEN.updUser}], 非法,应该为字符型(In 数据结点类型(DataNodeType))!(clsDataNodeTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataNodeTypeEN.memo) == false &&
    undefined !== pobjDataNodeTypeEN.memo &&
    tzDataType.isString(pobjDataNodeTypeEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[说明(memo)]的值:[${pobjDataNodeTypeEN.memo}], 非法,应该为字符型(In 数据结点类型(DataNodeType))!(clsDataNodeTypeBL:CheckProperty4Update)`,
    );
  }
  //检查主键是否为Null或者空!
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function DataNodeType_GetJSONStrByObj(pobjDataNodeTypeEN: clsDataNodeTypeEN): string {
  pobjDataNodeTypeEN.sfUpdFldSetStr = pobjDataNodeTypeEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjDataNodeTypeEN);
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
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
 */
export function DataNodeType_GetObjLstByJSONStr(strJSON: string): Array<clsDataNodeTypeEN> {
  let arrDataNodeTypeObjLst = new Array<clsDataNodeTypeEN>();
  if (strJSON === '') {
    return arrDataNodeTypeObjLst;
  }
  try {
    arrDataNodeTypeObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrDataNodeTypeObjLst;
  }
  return arrDataNodeTypeObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrDataNodeTypeObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function DataNodeType_GetObjLstByJSONObjLst(
  arrDataNodeTypeObjLstS: Array<clsDataNodeTypeEN>,
): Array<clsDataNodeTypeEN> {
  const arrDataNodeTypeObjLst = new Array<clsDataNodeTypeEN>();
  for (const objInFor of arrDataNodeTypeObjLstS) {
    const obj1 = DataNodeType_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrDataNodeTypeObjLst.push(obj1);
  }
  return arrDataNodeTypeObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function DataNodeType_GetObjByJSONStr(strJSON: string): clsDataNodeTypeEN {
  let pobjDataNodeTypeEN = new clsDataNodeTypeEN();
  if (strJSON === '') {
    return pobjDataNodeTypeEN;
  }
  try {
    pobjDataNodeTypeEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjDataNodeTypeEN;
  }
  return pobjDataNodeTypeEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function DataNodeType_GetCombineCondition(objDataNodeTypeCond: clsDataNodeTypeEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objDataNodeTypeCond.dicFldComparisonOp,
      clsDataNodeTypeEN.con_DataNodeTypeId,
    ) == true
  ) {
    const strComparisonOpDataNodeTypeId: string =
      objDataNodeTypeCond.dicFldComparisonOp[clsDataNodeTypeEN.con_DataNodeTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDataNodeTypeEN.con_DataNodeTypeId,
      objDataNodeTypeCond.dataNodeTypeId,
      strComparisonOpDataNodeTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDataNodeTypeCond.dicFldComparisonOp,
      clsDataNodeTypeEN.con_DataNodeTypeName,
    ) == true
  ) {
    const strComparisonOpDataNodeTypeName: string =
      objDataNodeTypeCond.dicFldComparisonOp[clsDataNodeTypeEN.con_DataNodeTypeName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDataNodeTypeEN.con_DataNodeTypeName,
      objDataNodeTypeCond.dataNodeTypeName,
      strComparisonOpDataNodeTypeName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDataNodeTypeCond.dicFldComparisonOp,
      clsDataNodeTypeEN.con_DataNodeTypeENName,
    ) == true
  ) {
    const strComparisonOpDataNodeTypeENName: string =
      objDataNodeTypeCond.dicFldComparisonOp[clsDataNodeTypeEN.con_DataNodeTypeENName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDataNodeTypeEN.con_DataNodeTypeENName,
      objDataNodeTypeCond.dataNodeTypeENName,
      strComparisonOpDataNodeTypeENName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDataNodeTypeCond.dicFldComparisonOp,
      clsDataNodeTypeEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objDataNodeTypeCond.dicFldComparisonOp[clsDataNodeTypeEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDataNodeTypeEN.con_UpdDate,
      objDataNodeTypeCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDataNodeTypeCond.dicFldComparisonOp,
      clsDataNodeTypeEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objDataNodeTypeCond.dicFldComparisonOp[clsDataNodeTypeEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDataNodeTypeEN.con_UpdUser,
      objDataNodeTypeCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDataNodeTypeCond.dicFldComparisonOp,
      clsDataNodeTypeEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objDataNodeTypeCond.dicFldComparisonOp[clsDataNodeTypeEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDataNodeTypeEN.con_Memo,
      objDataNodeTypeCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--DataNodeType(数据结点类型),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strDataNodeTypeName: 数据结点类型名(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function DataNodeType_GetUniCondStr(objDataNodeTypeEN: clsDataNodeTypeEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and DataNodeTypeName = '{0}'", objDataNodeTypeEN.dataNodeTypeName);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--DataNodeType(数据结点类型),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strDataNodeTypeName: 数据结点类型名(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function DataNodeType_GetUniCondStr4Update(objDataNodeTypeEN: clsDataNodeTypeEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and DataNodeTypeId <> '{0}'", objDataNodeTypeEN.dataNodeTypeId);
  strWhereCond += Format(" and DataNodeTypeName = '{0}'", objDataNodeTypeEN.dataNodeTypeName);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objDataNodeTypeENS:源对象
 * @param objDataNodeTypeENT:目标对象
 */
export function DataNodeType_GetObjFromJsonObj(
  objDataNodeTypeENS: clsDataNodeTypeEN,
): clsDataNodeTypeEN {
  const objDataNodeTypeENT: clsDataNodeTypeEN = new clsDataNodeTypeEN();
  ObjectAssign(objDataNodeTypeENT, objDataNodeTypeENS);
  return objDataNodeTypeENT;
}
