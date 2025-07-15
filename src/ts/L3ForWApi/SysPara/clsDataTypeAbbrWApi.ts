/**
 * 类名:clsDataTypeAbbrWApi
 * 表名:DataTypeAbbr(00050023)
 * 版本:2025.05.03.1(服务器:WIN-SRV103-116)
 * 日期:2025/05/04 15:35:49
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
 * 数据类型(DataTypeAbbr)
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
import {
  BindDdl_ObjLstInDivObj,
  GetExceptionStr,
  myShowErrorMsg,
  ObjectAssign,
} from '@/ts/PubFun/clsCommFunc4Web';
import { clsDataTypeAbbrEN } from '@/ts/L0Entity/SysPara/clsDataTypeAbbrEN';
import { AddRecordResult } from '@/ts/PubFun/AddRecordResult';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';

export const dataTypeAbbr_Controller = 'DataTypeAbbrApi';
export const dataTypeAbbr_ConstructorName = 'dataTypeAbbr';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strDataTypeId:关键字
 * @returns 对象
 **/
export async function DataTypeAbbr_GetObjByDataTypeIdAsync(
  strDataTypeId: string,
): Promise<clsDataTypeAbbrEN | null> {
  const strThisFuncName = 'GetObjByDataTypeIdAsync';

  if (IsNullOrEmpty(strDataTypeId) == true) {
    const strMsg = Format(
      '参数:[strDataTypeId]不能为空!(In clsDataTypeAbbrWApi.GetObjByDataTypeIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strDataTypeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strDataTypeId]的长度:[{0}]不正确!(clsDataTypeAbbrWApi.GetObjByDataTypeIdAsync)',
      strDataTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByDataTypeId';
  const strUrl = GetWebApiUrl(dataTypeAbbr_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strDataTypeId,
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
      const objDataTypeAbbr = DataTypeAbbr_GetObjFromJsonObj(returnObj);
      return objDataTypeAbbr;
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
        dataTypeAbbr_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataTypeAbbr_ConstructorName,
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
 * @param strDataTypeId:所给的关键字
 * @returns 对象
 */
export async function DataTypeAbbr_GetObjByDataTypeIdlocalStorage(strDataTypeId: string) {
  const strThisFuncName = 'GetObjByDataTypeIdlocalStorage';

  if (IsNullOrEmpty(strDataTypeId) == true) {
    const strMsg = Format(
      '参数:[strDataTypeId]不能为空!(In clsDataTypeAbbrWApi.GetObjByDataTypeIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strDataTypeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strDataTypeId]的长度:[{0}]不正确!(clsDataTypeAbbrWApi.GetObjByDataTypeIdlocalStorage)',
      strDataTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsDataTypeAbbrEN._CurrTabName, strDataTypeId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objDataTypeAbbrCache: clsDataTypeAbbrEN = JSON.parse(strTempObj);
    return objDataTypeAbbrCache;
  }
  try {
    const objDataTypeAbbr = await DataTypeAbbr_GetObjByDataTypeIdAsync(strDataTypeId);
    if (objDataTypeAbbr != null) {
      localStorage.setItem(strKey, JSON.stringify(objDataTypeAbbr));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objDataTypeAbbr;
    }
    return objDataTypeAbbr;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strDataTypeId,
      dataTypeAbbr_ConstructorName,
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
 * @param strDataTypeId:所给的关键字
 * @returns 对象
 */
export async function DataTypeAbbr_GetObjByDataTypeIdCache(
  strDataTypeId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByDataTypeIdCache';

  if (IsNullOrEmpty(strDataTypeId) == true) {
    const strMsg = Format(
      '参数:[strDataTypeId]不能为空!(In clsDataTypeAbbrWApi.GetObjByDataTypeIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strDataTypeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strDataTypeId]的长度:[{0}]不正确!(clsDataTypeAbbrWApi.GetObjByDataTypeIdCache)',
      strDataTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrDataTypeAbbrObjLstCache = await DataTypeAbbr_GetObjLstCache();
  try {
    const arrDataTypeAbbrSel = arrDataTypeAbbrObjLstCache.filter(
      (x) => x.dataTypeId == strDataTypeId,
    );
    let objDataTypeAbbr: clsDataTypeAbbrEN;
    if (arrDataTypeAbbrSel.length > 0) {
      objDataTypeAbbr = arrDataTypeAbbrSel[0];
      return objDataTypeAbbr;
    } else {
      if (bolTryAsyncOnce == true) {
        const objDataTypeAbbrConst = await DataTypeAbbr_GetObjByDataTypeIdAsync(strDataTypeId);
        if (objDataTypeAbbrConst != null) {
          DataTypeAbbr_ReFreshThisCache();
          return objDataTypeAbbrConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strDataTypeId,
      dataTypeAbbr_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objDataTypeAbbr:所给的对象
 * @returns 对象
 */
export async function DataTypeAbbr_UpdateObjInLstCache(objDataTypeAbbr: clsDataTypeAbbrEN) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrDataTypeAbbrObjLstCache = await DataTypeAbbr_GetObjLstCache();
    const obj = arrDataTypeAbbrObjLstCache.find((x) => x.dataTypeId == objDataTypeAbbr.dataTypeId);
    if (obj != null) {
      objDataTypeAbbr.dataTypeId = obj.dataTypeId;
      ObjectAssign(obj, objDataTypeAbbr);
    } else {
      arrDataTypeAbbrObjLstCache.push(objDataTypeAbbr);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      dataTypeAbbr_ConstructorName,
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
export function DataTypeAbbr_SortFunDefa(a: clsDataTypeAbbrEN, b: clsDataTypeAbbrEN): number {
  return a.dataTypeId.localeCompare(b.dataTypeId);
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
export function DataTypeAbbr_SortFunDefa2Fld(a: clsDataTypeAbbrEN, b: clsDataTypeAbbrEN): number {
  if (a.dataTypeName == b.dataTypeName) return a.dataTypeENName.localeCompare(b.dataTypeENName);
  else return a.dataTypeName.localeCompare(b.dataTypeName);
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
export function DataTypeAbbr_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsDataTypeAbbrEN.con_DataTypeId:
        return (a: clsDataTypeAbbrEN, b: clsDataTypeAbbrEN) => {
          return a.dataTypeId.localeCompare(b.dataTypeId);
        };
      case clsDataTypeAbbrEN.con_DataTypeName:
        return (a: clsDataTypeAbbrEN, b: clsDataTypeAbbrEN) => {
          return a.dataTypeName.localeCompare(b.dataTypeName);
        };
      case clsDataTypeAbbrEN.con_DataTypeENName:
        return (a: clsDataTypeAbbrEN, b: clsDataTypeAbbrEN) => {
          if (a.dataTypeENName == null) return -1;
          if (b.dataTypeENName == null) return 1;
          return a.dataTypeENName.localeCompare(b.dataTypeENName);
        };
      case clsDataTypeAbbrEN.con_DataCnName:
        return (a: clsDataTypeAbbrEN, b: clsDataTypeAbbrEN) => {
          return a.dataCnName.localeCompare(b.dataCnName);
        };
      case clsDataTypeAbbrEN.con_DataTypeAbbr:
        return (a: clsDataTypeAbbrEN, b: clsDataTypeAbbrEN) => {
          return a.dataTypeAbbr.localeCompare(b.dataTypeAbbr);
        };
      case clsDataTypeAbbrEN.con_NetSysType:
        return (a: clsDataTypeAbbrEN, b: clsDataTypeAbbrEN) => {
          return a.netSysType.localeCompare(b.netSysType);
        };
      case clsDataTypeAbbrEN.con_VbNetType:
        return (a: clsDataTypeAbbrEN, b: clsDataTypeAbbrEN) => {
          return a.vbNetType.localeCompare(b.vbNetType);
        };
      case clsDataTypeAbbrEN.con_CsType:
        return (a: clsDataTypeAbbrEN, b: clsDataTypeAbbrEN) => {
          return a.csType.localeCompare(b.csType);
        };
      case clsDataTypeAbbrEN.con_JavaType:
        return (a: clsDataTypeAbbrEN, b: clsDataTypeAbbrEN) => {
          return a.javaType.localeCompare(b.javaType);
        };
      case clsDataTypeAbbrEN.con_TypeScriptType:
        return (a: clsDataTypeAbbrEN, b: clsDataTypeAbbrEN) => {
          if (a.typeScriptType == null) return -1;
          if (b.typeScriptType == null) return 1;
          return a.typeScriptType.localeCompare(b.typeScriptType);
        };
      case clsDataTypeAbbrEN.con_JavaObjType:
        return (a: clsDataTypeAbbrEN, b: clsDataTypeAbbrEN) => {
          if (a.javaObjType == null) return -1;
          if (b.javaObjType == null) return 1;
          return a.javaObjType.localeCompare(b.javaObjType);
        };
      case clsDataTypeAbbrEN.con_SwiftType:
        return (a: clsDataTypeAbbrEN, b: clsDataTypeAbbrEN) => {
          if (a.swiftType == null) return -1;
          if (b.swiftType == null) return 1;
          return a.swiftType.localeCompare(b.swiftType);
        };
      case clsDataTypeAbbrEN.con_IsNeedQuote:
        return (a: clsDataTypeAbbrEN) => {
          if (a.isNeedQuote == true) return 1;
          else return -1;
        };
      case clsDataTypeAbbrEN.con_OraDbType:
        return (a: clsDataTypeAbbrEN, b: clsDataTypeAbbrEN) => {
          if (a.oraDbType == null) return -1;
          if (b.oraDbType == null) return 1;
          return a.oraDbType.localeCompare(b.oraDbType);
        };
      case clsDataTypeAbbrEN.con_IsReturnType:
        return (a: clsDataTypeAbbrEN) => {
          if (a.isReturnType == true) return 1;
          else return -1;
        };
      case clsDataTypeAbbrEN.con_SqlParaType:
        return (a: clsDataTypeAbbrEN, b: clsDataTypeAbbrEN) => {
          if (a.sqlParaType == null) return -1;
          if (b.sqlParaType == null) return 1;
          return a.sqlParaType.localeCompare(b.sqlParaType);
        };
      case clsDataTypeAbbrEN.con_MySqlType:
        return (a: clsDataTypeAbbrEN, b: clsDataTypeAbbrEN) => {
          if (a.mySqlType == null) return -1;
          if (b.mySqlType == null) return 1;
          return a.mySqlType.localeCompare(b.mySqlType);
        };
      case clsDataTypeAbbrEN.con_DefaFldLength:
        return (a: clsDataTypeAbbrEN, b: clsDataTypeAbbrEN) => {
          return a.defaFldLength - b.defaFldLength;
        };
      case clsDataTypeAbbrEN.con_DefaFldPrecision:
        return (a: clsDataTypeAbbrEN, b: clsDataTypeAbbrEN) => {
          return a.defaFldPrecision - b.defaFldPrecision;
        };
      case clsDataTypeAbbrEN.con_Memo:
        return (a: clsDataTypeAbbrEN, b: clsDataTypeAbbrEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[DataTypeAbbr]中不存在!(in ${dataTypeAbbr_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsDataTypeAbbrEN.con_DataTypeId:
        return (a: clsDataTypeAbbrEN, b: clsDataTypeAbbrEN) => {
          return b.dataTypeId.localeCompare(a.dataTypeId);
        };
      case clsDataTypeAbbrEN.con_DataTypeName:
        return (a: clsDataTypeAbbrEN, b: clsDataTypeAbbrEN) => {
          return b.dataTypeName.localeCompare(a.dataTypeName);
        };
      case clsDataTypeAbbrEN.con_DataTypeENName:
        return (a: clsDataTypeAbbrEN, b: clsDataTypeAbbrEN) => {
          if (b.dataTypeENName == null) return -1;
          if (a.dataTypeENName == null) return 1;
          return b.dataTypeENName.localeCompare(a.dataTypeENName);
        };
      case clsDataTypeAbbrEN.con_DataCnName:
        return (a: clsDataTypeAbbrEN, b: clsDataTypeAbbrEN) => {
          return b.dataCnName.localeCompare(a.dataCnName);
        };
      case clsDataTypeAbbrEN.con_DataTypeAbbr:
        return (a: clsDataTypeAbbrEN, b: clsDataTypeAbbrEN) => {
          return b.dataTypeAbbr.localeCompare(a.dataTypeAbbr);
        };
      case clsDataTypeAbbrEN.con_NetSysType:
        return (a: clsDataTypeAbbrEN, b: clsDataTypeAbbrEN) => {
          return b.netSysType.localeCompare(a.netSysType);
        };
      case clsDataTypeAbbrEN.con_VbNetType:
        return (a: clsDataTypeAbbrEN, b: clsDataTypeAbbrEN) => {
          return b.vbNetType.localeCompare(a.vbNetType);
        };
      case clsDataTypeAbbrEN.con_CsType:
        return (a: clsDataTypeAbbrEN, b: clsDataTypeAbbrEN) => {
          return b.csType.localeCompare(a.csType);
        };
      case clsDataTypeAbbrEN.con_JavaType:
        return (a: clsDataTypeAbbrEN, b: clsDataTypeAbbrEN) => {
          return b.javaType.localeCompare(a.javaType);
        };
      case clsDataTypeAbbrEN.con_TypeScriptType:
        return (a: clsDataTypeAbbrEN, b: clsDataTypeAbbrEN) => {
          if (b.typeScriptType == null) return -1;
          if (a.typeScriptType == null) return 1;
          return b.typeScriptType.localeCompare(a.typeScriptType);
        };
      case clsDataTypeAbbrEN.con_JavaObjType:
        return (a: clsDataTypeAbbrEN, b: clsDataTypeAbbrEN) => {
          if (b.javaObjType == null) return -1;
          if (a.javaObjType == null) return 1;
          return b.javaObjType.localeCompare(a.javaObjType);
        };
      case clsDataTypeAbbrEN.con_SwiftType:
        return (a: clsDataTypeAbbrEN, b: clsDataTypeAbbrEN) => {
          if (b.swiftType == null) return -1;
          if (a.swiftType == null) return 1;
          return b.swiftType.localeCompare(a.swiftType);
        };
      case clsDataTypeAbbrEN.con_IsNeedQuote:
        return (b: clsDataTypeAbbrEN) => {
          if (b.isNeedQuote == true) return 1;
          else return -1;
        };
      case clsDataTypeAbbrEN.con_OraDbType:
        return (a: clsDataTypeAbbrEN, b: clsDataTypeAbbrEN) => {
          if (b.oraDbType == null) return -1;
          if (a.oraDbType == null) return 1;
          return b.oraDbType.localeCompare(a.oraDbType);
        };
      case clsDataTypeAbbrEN.con_IsReturnType:
        return (b: clsDataTypeAbbrEN) => {
          if (b.isReturnType == true) return 1;
          else return -1;
        };
      case clsDataTypeAbbrEN.con_SqlParaType:
        return (a: clsDataTypeAbbrEN, b: clsDataTypeAbbrEN) => {
          if (b.sqlParaType == null) return -1;
          if (a.sqlParaType == null) return 1;
          return b.sqlParaType.localeCompare(a.sqlParaType);
        };
      case clsDataTypeAbbrEN.con_MySqlType:
        return (a: clsDataTypeAbbrEN, b: clsDataTypeAbbrEN) => {
          if (b.mySqlType == null) return -1;
          if (a.mySqlType == null) return 1;
          return b.mySqlType.localeCompare(a.mySqlType);
        };
      case clsDataTypeAbbrEN.con_DefaFldLength:
        return (a: clsDataTypeAbbrEN, b: clsDataTypeAbbrEN) => {
          return b.defaFldLength - a.defaFldLength;
        };
      case clsDataTypeAbbrEN.con_DefaFldPrecision:
        return (a: clsDataTypeAbbrEN, b: clsDataTypeAbbrEN) => {
          return b.defaFldPrecision - a.defaFldPrecision;
        };
      case clsDataTypeAbbrEN.con_Memo:
        return (a: clsDataTypeAbbrEN, b: clsDataTypeAbbrEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[DataTypeAbbr]中不存在!(in ${dataTypeAbbr_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strDataTypeId:所给的关键字
 * @returns 对象
 */
export async function DataTypeAbbr_GetNameByDataTypeIdCache(strDataTypeId: string) {
  if (IsNullOrEmpty(strDataTypeId) == true) {
    const strMsg = Format(
      '参数:[strDataTypeId]不能为空!(In clsDataTypeAbbrWApi.GetNameByDataTypeIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strDataTypeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strDataTypeId]的长度:[{0}]不正确!(clsDataTypeAbbrWApi.GetNameByDataTypeIdCache)',
      strDataTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrDataTypeAbbrObjLstCache = await DataTypeAbbr_GetObjLstCache();
  if (arrDataTypeAbbrObjLstCache == null) return '';
  try {
    const arrDataTypeAbbrSel = arrDataTypeAbbrObjLstCache.filter(
      (x) => x.dataTypeId == strDataTypeId,
    );
    let objDataTypeAbbr: clsDataTypeAbbrEN;
    if (arrDataTypeAbbrSel.length > 0) {
      objDataTypeAbbr = arrDataTypeAbbrSel[0];
      return objDataTypeAbbr.dataTypeName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strDataTypeId,
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
export async function DataTypeAbbr_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsDataTypeAbbrEN.con_DataTypeId:
      return (obj: clsDataTypeAbbrEN) => {
        return obj.dataTypeId === value;
      };
    case clsDataTypeAbbrEN.con_DataTypeName:
      return (obj: clsDataTypeAbbrEN) => {
        return obj.dataTypeName === value;
      };
    case clsDataTypeAbbrEN.con_DataTypeENName:
      return (obj: clsDataTypeAbbrEN) => {
        return obj.dataTypeENName === value;
      };
    case clsDataTypeAbbrEN.con_DataCnName:
      return (obj: clsDataTypeAbbrEN) => {
        return obj.dataCnName === value;
      };
    case clsDataTypeAbbrEN.con_DataTypeAbbr:
      return (obj: clsDataTypeAbbrEN) => {
        return obj.dataTypeAbbr === value;
      };
    case clsDataTypeAbbrEN.con_NetSysType:
      return (obj: clsDataTypeAbbrEN) => {
        return obj.netSysType === value;
      };
    case clsDataTypeAbbrEN.con_VbNetType:
      return (obj: clsDataTypeAbbrEN) => {
        return obj.vbNetType === value;
      };
    case clsDataTypeAbbrEN.con_CsType:
      return (obj: clsDataTypeAbbrEN) => {
        return obj.csType === value;
      };
    case clsDataTypeAbbrEN.con_JavaType:
      return (obj: clsDataTypeAbbrEN) => {
        return obj.javaType === value;
      };
    case clsDataTypeAbbrEN.con_TypeScriptType:
      return (obj: clsDataTypeAbbrEN) => {
        return obj.typeScriptType === value;
      };
    case clsDataTypeAbbrEN.con_JavaObjType:
      return (obj: clsDataTypeAbbrEN) => {
        return obj.javaObjType === value;
      };
    case clsDataTypeAbbrEN.con_SwiftType:
      return (obj: clsDataTypeAbbrEN) => {
        return obj.swiftType === value;
      };
    case clsDataTypeAbbrEN.con_IsNeedQuote:
      return (obj: clsDataTypeAbbrEN) => {
        return obj.isNeedQuote === value;
      };
    case clsDataTypeAbbrEN.con_OraDbType:
      return (obj: clsDataTypeAbbrEN) => {
        return obj.oraDbType === value;
      };
    case clsDataTypeAbbrEN.con_IsReturnType:
      return (obj: clsDataTypeAbbrEN) => {
        return obj.isReturnType === value;
      };
    case clsDataTypeAbbrEN.con_SqlParaType:
      return (obj: clsDataTypeAbbrEN) => {
        return obj.sqlParaType === value;
      };
    case clsDataTypeAbbrEN.con_MySqlType:
      return (obj: clsDataTypeAbbrEN) => {
        return obj.mySqlType === value;
      };
    case clsDataTypeAbbrEN.con_DefaFldLength:
      return (obj: clsDataTypeAbbrEN) => {
        return obj.defaFldLength === value;
      };
    case clsDataTypeAbbrEN.con_DefaFldPrecision:
      return (obj: clsDataTypeAbbrEN) => {
        return obj.defaFldPrecision === value;
      };
    case clsDataTypeAbbrEN.con_Memo:
      return (obj: clsDataTypeAbbrEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[DataTypeAbbr]中不存在!(in ${dataTypeAbbr_ConstructorName}.${strThisFuncName})`;
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
export async function DataTypeAbbr_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsDataTypeAbbrEN.con_DataTypeId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsDataTypeAbbrEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsDataTypeAbbrEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strDataTypeId = strInValue;
  if (IsNullOrEmpty(strDataTypeId) == true) {
    return '';
  }
  const objDataTypeAbbr = await DataTypeAbbr_GetObjByDataTypeIdCache(strDataTypeId);
  if (objDataTypeAbbr == null) return '';
  if (objDataTypeAbbr.GetFldValue(strOutFldName) == null) return '';
  return objDataTypeAbbr.GetFldValue(strOutFldName).toString();
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
export async function DataTypeAbbr_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsDataTypeAbbrEN.con_DataTypeId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrDataTypeAbbr = await DataTypeAbbr_GetObjLstCache();
  if (arrDataTypeAbbr == null) return [];
  let arrDataTypeAbbrSel = arrDataTypeAbbr;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrDataTypeAbbrSel = arrDataTypeAbbrSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrDataTypeAbbrSel = arrDataTypeAbbrSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrDataTypeAbbrSel = arrDataTypeAbbrSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrDataTypeAbbrSel = arrDataTypeAbbrSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrDataTypeAbbrSel = arrDataTypeAbbrSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrDataTypeAbbrSel = arrDataTypeAbbrSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrDataTypeAbbrSel = arrDataTypeAbbrSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrDataTypeAbbrSel = arrDataTypeAbbrSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrDataTypeAbbrSel = arrDataTypeAbbrSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrDataTypeAbbrSel = arrDataTypeAbbrSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrDataTypeAbbrSel.length == 0) return [];
  return arrDataTypeAbbrSel.map((x) => x.dataTypeId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function DataTypeAbbr_GetFldValueAsync(
  strFldName: string,
  strWhereCond: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetFldValueAsync';
  const strAction = 'GetFldValue';
  const strUrl = GetWebApiUrl(dataTypeAbbr_Controller, strAction);

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
        dataTypeAbbr_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataTypeAbbr_ConstructorName,
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
export async function DataTypeAbbr_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(dataTypeAbbr_Controller, strAction);

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
        dataTypeAbbr_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataTypeAbbr_ConstructorName,
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
export async function DataTypeAbbr_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(dataTypeAbbr_Controller, strAction);

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
        dataTypeAbbr_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataTypeAbbr_ConstructorName,
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
export async function DataTypeAbbr_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsDataTypeAbbrEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(dataTypeAbbr_Controller, strAction);

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
      const objDataTypeAbbr = DataTypeAbbr_GetObjFromJsonObj(returnObj);
      return objDataTypeAbbr;
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
        dataTypeAbbr_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataTypeAbbr_ConstructorName,
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
export async function DataTypeAbbr_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsDataTypeAbbrEN._CurrTabName;
  if (IsNullOrEmpty(clsDataTypeAbbrEN.WhereFormat) == false) {
    strWhereCond = clsDataTypeAbbrEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsDataTypeAbbrEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsDataTypeAbbrEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrDataTypeAbbrExObjLstCache: Array<clsDataTypeAbbrEN> = CacheHelper.Get(strKey);
    const arrDataTypeAbbrObjLstT = DataTypeAbbr_GetObjLstByJSONObjLst(arrDataTypeAbbrExObjLstCache);
    return arrDataTypeAbbrObjLstT;
  }
  try {
    const arrDataTypeAbbrExObjLst = await DataTypeAbbr_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrDataTypeAbbrExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrDataTypeAbbrExObjLst.length,
    );
    console.log(strInfo);
    return arrDataTypeAbbrExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      dataTypeAbbr_ConstructorName,
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
export async function DataTypeAbbr_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsDataTypeAbbrEN._CurrTabName;
  if (IsNullOrEmpty(clsDataTypeAbbrEN.WhereFormat) == false) {
    strWhereCond = clsDataTypeAbbrEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsDataTypeAbbrEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsDataTypeAbbrEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrDataTypeAbbrExObjLstCache: Array<clsDataTypeAbbrEN> = JSON.parse(strTempObjLst);
    const arrDataTypeAbbrObjLstT = DataTypeAbbr_GetObjLstByJSONObjLst(arrDataTypeAbbrExObjLstCache);
    return arrDataTypeAbbrObjLstT;
  }
  try {
    const arrDataTypeAbbrExObjLst = await DataTypeAbbr_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrDataTypeAbbrExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrDataTypeAbbrExObjLst.length,
    );
    console.log(strInfo);
    return arrDataTypeAbbrExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      dataTypeAbbr_ConstructorName,
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
export async function DataTypeAbbr_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsDataTypeAbbrEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrDataTypeAbbrObjLstCache: Array<clsDataTypeAbbrEN> = JSON.parse(strTempObjLst);
    return arrDataTypeAbbrObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function DataTypeAbbr_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsDataTypeAbbrEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(dataTypeAbbr_Controller, strAction);

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
          dataTypeAbbr_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = DataTypeAbbr_GetObjLstByJSONObjLst(returnObjLst);
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
        dataTypeAbbr_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataTypeAbbr_ConstructorName,
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
export async function DataTypeAbbr_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsDataTypeAbbrEN._CurrTabName;
  if (IsNullOrEmpty(clsDataTypeAbbrEN.WhereFormat) == false) {
    strWhereCond = clsDataTypeAbbrEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsDataTypeAbbrEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsDataTypeAbbrEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrDataTypeAbbrExObjLstCache: Array<clsDataTypeAbbrEN> = JSON.parse(strTempObjLst);
    const arrDataTypeAbbrObjLstT = DataTypeAbbr_GetObjLstByJSONObjLst(arrDataTypeAbbrExObjLstCache);
    return arrDataTypeAbbrObjLstT;
  }
  try {
    const arrDataTypeAbbrExObjLst = await DataTypeAbbr_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrDataTypeAbbrExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrDataTypeAbbrExObjLst.length,
    );
    console.log(strInfo);
    return arrDataTypeAbbrExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      dataTypeAbbr_ConstructorName,
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
export async function DataTypeAbbr_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsDataTypeAbbrEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrDataTypeAbbrObjLstCache: Array<clsDataTypeAbbrEN> = JSON.parse(strTempObjLst);
    return arrDataTypeAbbrObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function DataTypeAbbr_GetObjLstCache(): Promise<Array<clsDataTypeAbbrEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrDataTypeAbbrObjLstCache;
  switch (clsDataTypeAbbrEN.CacheModeId) {
    case '04': //sessionStorage
      arrDataTypeAbbrObjLstCache = await DataTypeAbbr_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrDataTypeAbbrObjLstCache = await DataTypeAbbr_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrDataTypeAbbrObjLstCache = await DataTypeAbbr_GetObjLstClientCache();
      break;
    default:
      arrDataTypeAbbrObjLstCache = await DataTypeAbbr_GetObjLstClientCache();
      break;
  }
  return arrDataTypeAbbrObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function DataTypeAbbr_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrDataTypeAbbrObjLstCache;
  switch (clsDataTypeAbbrEN.CacheModeId) {
    case '04': //sessionStorage
      arrDataTypeAbbrObjLstCache = await DataTypeAbbr_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrDataTypeAbbrObjLstCache = await DataTypeAbbr_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrDataTypeAbbrObjLstCache = null;
      break;
    default:
      arrDataTypeAbbrObjLstCache = null;
      break;
  }
  return arrDataTypeAbbrObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrDataTypeIdCond:条件对象
 * @returns 对象列表子集
 */
export async function DataTypeAbbr_GetSubObjLstCache(objDataTypeAbbrCond: ConditionCollection) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrDataTypeAbbrObjLstCache = await DataTypeAbbr_GetObjLstCache();
  let arrDataTypeAbbrSel = arrDataTypeAbbrObjLstCache;
  if (objDataTypeAbbrCond.GetConditions().length == 0) return arrDataTypeAbbrSel;
  try {
    //console.log(sstrKeys);
    for (const objCondition of objDataTypeAbbrCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrDataTypeAbbrSel = arrDataTypeAbbrSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrDataTypeAbbrSel = arrDataTypeAbbrSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrDataTypeAbbrSel = arrDataTypeAbbrSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrDataTypeAbbrSel = arrDataTypeAbbrSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrDataTypeAbbrSel = arrDataTypeAbbrSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrDataTypeAbbrSel = arrDataTypeAbbrSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrDataTypeAbbrSel = arrDataTypeAbbrSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrDataTypeAbbrSel = arrDataTypeAbbrSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrDataTypeAbbrSel = arrDataTypeAbbrSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrDataTypeAbbrSel = arrDataTypeAbbrSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrDataTypeAbbrSel = arrDataTypeAbbrSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrDataTypeAbbrSel = arrDataTypeAbbrSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrDataTypeAbbrSel = arrDataTypeAbbrSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrDataTypeAbbrSel = arrDataTypeAbbrSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrDataTypeAbbrSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objDataTypeAbbrCond),
      dataTypeAbbr_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsDataTypeAbbrEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrDataTypeId:关键字列表
 * @returns 对象列表
 **/
export async function DataTypeAbbr_GetObjLstByDataTypeIdLstAsync(
  arrDataTypeId: Array<string>,
): Promise<Array<clsDataTypeAbbrEN>> {
  const strThisFuncName = 'GetObjLstByDataTypeIdLstAsync';
  const strAction = 'GetObjLstByDataTypeIdLst';
  const strUrl = GetWebApiUrl(dataTypeAbbr_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrDataTypeId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          dataTypeAbbr_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = DataTypeAbbr_GetObjLstByJSONObjLst(returnObjLst);
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
        dataTypeAbbr_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataTypeAbbr_ConstructorName,
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
 * @param arrstrDataTypeIdLst:关键字列表
 * @returns 对象列表
 */
export async function DataTypeAbbr_GetObjLstByDataTypeIdLstCache(arrDataTypeIdLst: Array<string>) {
  const strThisFuncName = 'GetObjLstByDataTypeIdLstCache';
  try {
    const arrDataTypeAbbrObjLstCache = await DataTypeAbbr_GetObjLstCache();
    const arrDataTypeAbbrSel = arrDataTypeAbbrObjLstCache.filter(
      (x) => arrDataTypeIdLst.indexOf(x.dataTypeId) > -1,
    );
    return arrDataTypeAbbrSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrDataTypeIdLst.join(','),
      dataTypeAbbr_ConstructorName,
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
export async function DataTypeAbbr_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsDataTypeAbbrEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(dataTypeAbbr_Controller, strAction);

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
          dataTypeAbbr_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = DataTypeAbbr_GetObjLstByJSONObjLst(returnObjLst);
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
        dataTypeAbbr_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataTypeAbbr_ConstructorName,
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
export async function DataTypeAbbr_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsDataTypeAbbrEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(dataTypeAbbr_Controller, strAction);

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
          dataTypeAbbr_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = DataTypeAbbr_GetObjLstByJSONObjLst(returnObjLst);
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
        dataTypeAbbr_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataTypeAbbr_ConstructorName,
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
export async function DataTypeAbbr_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsDataTypeAbbrEN>();
  const arrDataTypeAbbrObjLstCache = await DataTypeAbbr_GetObjLstCache();
  if (arrDataTypeAbbrObjLstCache.length == 0) return arrDataTypeAbbrObjLstCache;
  let arrDataTypeAbbrSel = arrDataTypeAbbrObjLstCache;
  const objDataTypeAbbrCond = objPagerPara.conditionCollection;
  if (objDataTypeAbbrCond == null) {
    const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return new Array<clsDataTypeAbbrEN>();
  }
  //console.log("clsDataTypeAbbrWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    for (const objCondition of objDataTypeAbbrCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrDataTypeAbbrSel = arrDataTypeAbbrSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrDataTypeAbbrSel = arrDataTypeAbbrSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrDataTypeAbbrSel = arrDataTypeAbbrSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrDataTypeAbbrSel = arrDataTypeAbbrSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrDataTypeAbbrSel = arrDataTypeAbbrSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrDataTypeAbbrSel = arrDataTypeAbbrSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrDataTypeAbbrSel = arrDataTypeAbbrSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrDataTypeAbbrSel = arrDataTypeAbbrSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrDataTypeAbbrSel = arrDataTypeAbbrSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrDataTypeAbbrSel = arrDataTypeAbbrSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrDataTypeAbbrSel = arrDataTypeAbbrSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrDataTypeAbbrSel = arrDataTypeAbbrSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrDataTypeAbbrSel = arrDataTypeAbbrSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrDataTypeAbbrSel = arrDataTypeAbbrSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrDataTypeAbbrSel = arrDataTypeAbbrSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrDataTypeAbbrSel.length == 0) return arrDataTypeAbbrSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrDataTypeAbbrSel = arrDataTypeAbbrSel.sort(
        DataTypeAbbr_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrDataTypeAbbrSel = arrDataTypeAbbrSel.sort(objPagerPara.sortFun);
    }
    arrDataTypeAbbrSel = arrDataTypeAbbrSel.slice(intStart, intEnd);
    return arrDataTypeAbbrSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      dataTypeAbbr_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsDataTypeAbbrEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function DataTypeAbbr_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsDataTypeAbbrEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsDataTypeAbbrEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(dataTypeAbbr_Controller, strAction);

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
          dataTypeAbbr_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = DataTypeAbbr_GetObjLstByJSONObjLst(returnObjLst);
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
        dataTypeAbbr_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataTypeAbbr_ConstructorName,
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
 * @param strDataTypeId:关键字
 * @returns 获取删除的结果
 **/
export async function DataTypeAbbr_DelRecordAsync(strDataTypeId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(dataTypeAbbr_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strDataTypeId);

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
        dataTypeAbbr_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataTypeAbbr_ConstructorName,
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
 * @param arrDataTypeId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function DataTypeAbbr_DelDataTypeAbbrsAsync(
  arrDataTypeId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelDataTypeAbbrsAsync';
  const strAction = 'DelDataTypeAbbrs';
  const strUrl = GetWebApiUrl(dataTypeAbbr_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrDataTypeId, config);
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
        dataTypeAbbr_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataTypeAbbr_ConstructorName,
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
export async function DataTypeAbbr_DelDataTypeAbbrsByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelDataTypeAbbrsByCondAsync';
  const strAction = 'DelDataTypeAbbrsByCond';
  const strUrl = GetWebApiUrl(dataTypeAbbr_Controller, strAction);

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
        dataTypeAbbr_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataTypeAbbr_ConstructorName,
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
 * @param objDataTypeAbbrEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function DataTypeAbbr_AddNewRecordAsync(
  objDataTypeAbbrEN: clsDataTypeAbbrEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  if (objDataTypeAbbrEN.dataTypeId === null || objDataTypeAbbrEN.dataTypeId === '') {
    const strMsg = '需要的对象的关键字为空,不能添加!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objDataTypeAbbrEN);
  const strUrl = GetWebApiUrl(dataTypeAbbr_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objDataTypeAbbrEN, config);
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
        dataTypeAbbr_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataTypeAbbr_ConstructorName,
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
 * @param objDataTypeAbbrEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function DataTypeAbbr_AddNewRecordWithMaxIdAsync(
  objDataTypeAbbrEN: clsDataTypeAbbrEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(dataTypeAbbr_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objDataTypeAbbrEN, config);
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
        dataTypeAbbr_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataTypeAbbr_ConstructorName,
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
export async function DataTypeAbbr_AddNewObjSave(
  objDataTypeAbbrEN: clsDataTypeAbbrEN,
): Promise<AddRecordResult> {
  const strThisFuncName = 'AddNewObjSave';
  try {
    DataTypeAbbr_CheckPropertyNew(objDataTypeAbbrEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${dataTypeAbbr_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    alert(strMsg);
    return { keyword: '', success: false }; //一定要有一个返回值,否则会出错!
  }
  try {
    //检查唯一性条件
    let returnBool = false;
    const bolIsExist = await DataTypeAbbr_IsExistAsync(objDataTypeAbbrEN.dataTypeId);
    if (bolIsExist == true) {
      const strMsg = Format('添加记录时,关键字：{0}已经存在!', objDataTypeAbbrEN.dataTypeId);
      console.error(strMsg);
      throw strMsg;
    }
    returnBool = await DataTypeAbbr_AddNewRecordAsync(objDataTypeAbbrEN);
    if (returnBool == true) {
      DataTypeAbbr_ReFreshCache();
    } else {
      const strInfo = `添加[数据类型(DataTypeAbbr)]记录不成功!`;
      //显示信息框
      throw strInfo;
    }
    return { keyword: objDataTypeAbbrEN.dataTypeId, success: returnBool }; //一定要有一个返回值,否则会出错!
  } catch (e) {
    const strMsg = `添加记录不成功,${e}.(in ${dataTypeAbbr_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/** 修改记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjSave)
 **/
export async function DataTypeAbbr_UpdateObjSave(
  objDataTypeAbbrEN: clsDataTypeAbbrEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateObjSave';
  objDataTypeAbbrEN.sfUpdFldSetStr = objDataTypeAbbrEN.updFldString; //设置哪些字段被修改(脏字段)
  if (objDataTypeAbbrEN.dataTypeId == '' || objDataTypeAbbrEN.dataTypeId == undefined) {
    console.error('关键字不能为空!');
    throw '关键字不能为空!';
  }
  try {
    DataTypeAbbr_CheckProperty4Update(objDataTypeAbbrEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${dataTypeAbbr_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
  try {
    //检查唯一性条件
    const returnBool = await DataTypeAbbr_UpdateRecordAsync(objDataTypeAbbrEN);
    if (returnBool == true) {
      DataTypeAbbr_ReFreshCache();
    }
    return returnBool;
  } catch (e) {
    const strMsg = `修改记录不成功,${e}.(in ${dataTypeAbbr_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objDataTypeAbbrEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function DataTypeAbbr_AddNewRecordWithReturnKeyAsync(
  objDataTypeAbbrEN: clsDataTypeAbbrEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(dataTypeAbbr_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objDataTypeAbbrEN, config);
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
        dataTypeAbbr_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataTypeAbbr_ConstructorName,
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
 * @param objDataTypeAbbrEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function DataTypeAbbr_UpdateRecordAsync(
  objDataTypeAbbrEN: clsDataTypeAbbrEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objDataTypeAbbrEN.sfUpdFldSetStr === undefined ||
    objDataTypeAbbrEN.sfUpdFldSetStr === null ||
    objDataTypeAbbrEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objDataTypeAbbrEN.dataTypeId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(dataTypeAbbr_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objDataTypeAbbrEN, config);
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
        dataTypeAbbr_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataTypeAbbr_ConstructorName,
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
 * @param objDataTypeAbbrEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function DataTypeAbbr_EditRecordExAsync(
  objDataTypeAbbrEN: clsDataTypeAbbrEN,
): Promise<boolean> {
  const strThisFuncName = 'EditRecordExAsync';
  const strAction = 'EditRecordEx';
  if (
    objDataTypeAbbrEN.sfUpdFldSetStr === undefined ||
    objDataTypeAbbrEN.sfUpdFldSetStr === null ||
    objDataTypeAbbrEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objDataTypeAbbrEN.dataTypeId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(dataTypeAbbr_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objDataTypeAbbrEN, config);
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
        dataTypeAbbr_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataTypeAbbr_ConstructorName,
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
 * @param objDataTypeAbbrEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function DataTypeAbbr_UpdateWithConditionAsync(
  objDataTypeAbbrEN: clsDataTypeAbbrEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objDataTypeAbbrEN.sfUpdFldSetStr === undefined ||
    objDataTypeAbbrEN.sfUpdFldSetStr === null ||
    objDataTypeAbbrEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objDataTypeAbbrEN.dataTypeId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(dataTypeAbbr_Controller, strAction);
  objDataTypeAbbrEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objDataTypeAbbrEN, config);
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
        dataTypeAbbr_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataTypeAbbr_ConstructorName,
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
 * @param objstrDataTypeIdCond:条件对象
 * @returns 对象列表子集
 */
export async function DataTypeAbbr_IsExistRecordCache(objDataTypeAbbrCond: ConditionCollection) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrDataTypeAbbrObjLstCache = await DataTypeAbbr_GetObjLstCache();
  if (arrDataTypeAbbrObjLstCache == null) return false;
  let arrDataTypeAbbrSel = arrDataTypeAbbrObjLstCache;
  if (objDataTypeAbbrCond.GetConditions().length == 0)
    return arrDataTypeAbbrSel.length > 0 ? true : false;
  try {
    for (const objCondition of objDataTypeAbbrCond.GetConditions()) {
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
            arrDataTypeAbbrSel = arrDataTypeAbbrSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrDataTypeAbbrSel = arrDataTypeAbbrSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrDataTypeAbbrSel = arrDataTypeAbbrSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrDataTypeAbbrSel = arrDataTypeAbbrSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrDataTypeAbbrSel = arrDataTypeAbbrSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrDataTypeAbbrSel = arrDataTypeAbbrSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrDataTypeAbbrSel = arrDataTypeAbbrSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrDataTypeAbbrSel = arrDataTypeAbbrSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrDataTypeAbbrSel = arrDataTypeAbbrSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrDataTypeAbbrSel = arrDataTypeAbbrSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrDataTypeAbbrSel = arrDataTypeAbbrSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrDataTypeAbbrSel = arrDataTypeAbbrSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrDataTypeAbbrSel = arrDataTypeAbbrSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrDataTypeAbbrSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objDataTypeAbbrCond),
      dataTypeAbbr_ConstructorName,
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
export async function DataTypeAbbr_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(dataTypeAbbr_Controller, strAction);

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
        dataTypeAbbr_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataTypeAbbr_ConstructorName,
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
 * @param strDataTypeId:所给的关键字
 * @returns 对象
 */
export async function DataTypeAbbr_IsExistCache(strDataTypeId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrDataTypeAbbrObjLstCache = await DataTypeAbbr_GetObjLstCache();
  if (arrDataTypeAbbrObjLstCache == null) return false;
  try {
    const arrDataTypeAbbrSel = arrDataTypeAbbrObjLstCache.filter(
      (x) => x.dataTypeId == strDataTypeId,
    );
    if (arrDataTypeAbbrSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strDataTypeId,
      dataTypeAbbr_ConstructorName,
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
 * @param strDataTypeId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function DataTypeAbbr_IsExistAsync(strDataTypeId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(dataTypeAbbr_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strDataTypeId,
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
        dataTypeAbbr_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataTypeAbbr_ConstructorName,
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
export async function DataTypeAbbr_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(dataTypeAbbr_Controller, strAction);

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
        dataTypeAbbr_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataTypeAbbr_ConstructorName,
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
 * @param objDataTypeAbbrCond:条件对象
 * @returns 对象列表记录数
 */
export async function DataTypeAbbr_GetRecCountByCondCache(
  objDataTypeAbbrCond: ConditionCollection,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrDataTypeAbbrObjLstCache = await DataTypeAbbr_GetObjLstCache();
  if (arrDataTypeAbbrObjLstCache == null) return 0;
  let arrDataTypeAbbrSel = arrDataTypeAbbrObjLstCache;
  if (objDataTypeAbbrCond.GetConditions().length == 0) return arrDataTypeAbbrSel.length;
  try {
    for (const objCondition of objDataTypeAbbrCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrDataTypeAbbrSel = arrDataTypeAbbrSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrDataTypeAbbrSel = arrDataTypeAbbrSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrDataTypeAbbrSel = arrDataTypeAbbrSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrDataTypeAbbrSel = arrDataTypeAbbrSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrDataTypeAbbrSel = arrDataTypeAbbrSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrDataTypeAbbrSel = arrDataTypeAbbrSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrDataTypeAbbrSel = arrDataTypeAbbrSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrDataTypeAbbrSel = arrDataTypeAbbrSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrDataTypeAbbrSel = arrDataTypeAbbrSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrDataTypeAbbrSel = arrDataTypeAbbrSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrDataTypeAbbrSel = arrDataTypeAbbrSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrDataTypeAbbrSel = arrDataTypeAbbrSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrDataTypeAbbrSel = arrDataTypeAbbrSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrDataTypeAbbrSel = arrDataTypeAbbrSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrDataTypeAbbrSel = arrDataTypeAbbrSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrDataTypeAbbrSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objDataTypeAbbrCond),
      dataTypeAbbr_ConstructorName,
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
export async function DataTypeAbbr_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(dataTypeAbbr_Controller, strAction);

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
        dataTypeAbbr_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataTypeAbbr_ConstructorName,
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
export function DataTypeAbbr_GetWebApiUrl(strController: string, strAction: string): string {
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
export function DataTypeAbbr_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功!');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clsDataTypeAbbrEN._CurrTabName;
  switch (clsDataTypeAbbrEN.CacheModeId) {
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
  clsDataTypeAbbrEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
}

/**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export function DataTypeAbbr_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsDataTypeAbbrEN._CurrTabName;
    switch (clsDataTypeAbbrEN.CacheModeId) {
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
    clsDataTypeAbbrEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export function DataTypeAbbr_GetLastRefreshTime(): string {
  if (clsDataTypeAbbrEN._RefreshTimeLst.length == 0) return '';
  return clsDataTypeAbbrEN._RefreshTimeLst[clsDataTypeAbbrEN._RefreshTimeLst.length - 1];
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export async function DataTypeAbbr_BindDdl_DataTypeIdInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
) {
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_DataTypeIdInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_DataTypeIdInDivCache");
  const arrObjLstSel = await DataTypeAbbr_GetObjLstCache();
  if (arrObjLstSel == null) return;
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsDataTypeAbbrEN.con_DataTypeId,
    clsDataTypeAbbrEN.con_DataTypeName,
    '数据类型...',
  );
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export async function DataTypeAbbr_GetArrDataTypeAbbr() {
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_DataTypeIdInDivCache");
  const arrDataTypeAbbr = new Array<clsDataTypeAbbrEN>();
  const arrObjLstSel = await DataTypeAbbr_GetObjLstCache();
  if (arrObjLstSel == null) return null;
  const obj0 = new clsDataTypeAbbrEN();
  obj0.dataTypeId = '0';
  obj0.dataTypeName = '选数据类型...';
  arrDataTypeAbbr.push(obj0);
  arrObjLstSel.forEach((x) => arrDataTypeAbbr.push(x));
  return arrDataTypeAbbr;
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function DataTypeAbbr_CheckPropertyNew(pobjDataTypeAbbrEN: clsDataTypeAbbrEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjDataTypeAbbrEN.dataTypeName) === true) {
    throw new Error(
      `(errid:Watl000411)字段[数据类型名称]不能为空(In 数据类型)!(clsDataTypeAbbrBL:CheckPropertyNew0)`,
    );
  }
  if (IsNullOrEmpty(pobjDataTypeAbbrEN.dataCnName) === true) {
    throw new Error(
      `(errid:Watl000411)字段[数据类型中文名称]不能为空(In 数据类型)!(clsDataTypeAbbrBL:CheckPropertyNew0)`,
    );
  }
  if (IsNullOrEmpty(pobjDataTypeAbbrEN.dataTypeAbbr) === true) {
    throw new Error(
      `(errid:Watl000411)字段[数据类型缩写]不能为空(In 数据类型)!(clsDataTypeAbbrBL:CheckPropertyNew0)`,
    );
  }
  if (IsNullOrEmpty(pobjDataTypeAbbrEN.netSysType) === true) {
    throw new Error(
      `(errid:Watl000411)字段[NET系统类型]不能为空(In 数据类型)!(clsDataTypeAbbrBL:CheckPropertyNew0)`,
    );
  }
  if (IsNullOrEmpty(pobjDataTypeAbbrEN.vbNetType) === true) {
    throw new Error(
      `(errid:Watl000411)字段[VBNET类型]不能为空(In 数据类型)!(clsDataTypeAbbrBL:CheckPropertyNew0)`,
    );
  }
  if (IsNullOrEmpty(pobjDataTypeAbbrEN.csType) === true) {
    throw new Error(
      `(errid:Watl000411)字段[CS类型]不能为空(In 数据类型)!(clsDataTypeAbbrBL:CheckPropertyNew0)`,
    );
  }
  if (IsNullOrEmpty(pobjDataTypeAbbrEN.javaType) === true) {
    throw new Error(
      `(errid:Watl000411)字段[JAVA类型]不能为空(In 数据类型)!(clsDataTypeAbbrBL:CheckPropertyNew0)`,
    );
  }
  if (
    null === pobjDataTypeAbbrEN.isNeedQuote ||
    (pobjDataTypeAbbrEN.isNeedQuote != null && pobjDataTypeAbbrEN.isNeedQuote.toString() === '')
  ) {
    throw new Error(
      `(errid:Watl000411)字段[是否需要引号]不能为空(In 数据类型)!(clsDataTypeAbbrBL:CheckPropertyNew0)`,
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjDataTypeAbbrEN.dataTypeId) == false &&
    GetStrLen(pobjDataTypeAbbrEN.dataTypeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000413)字段[数据类型Id(dataTypeId)]的长度不能超过2(In 数据类型(DataTypeAbbr))!值:${pobjDataTypeAbbrEN.dataTypeId}(clsDataTypeAbbrBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataTypeAbbrEN.dataTypeName) == false &&
    GetStrLen(pobjDataTypeAbbrEN.dataTypeName) > 100
  ) {
    throw new Error(
      `(errid:Watl000413)字段[数据类型名称(dataTypeName)]的长度不能超过100(In 数据类型(DataTypeAbbr))!值:${pobjDataTypeAbbrEN.dataTypeName}(clsDataTypeAbbrBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataTypeAbbrEN.dataTypeENName) == false &&
    GetStrLen(pobjDataTypeAbbrEN.dataTypeENName) > 100
  ) {
    throw new Error(
      `(errid:Watl000413)字段[DataTypeENName(dataTypeENName)]的长度不能超过100(In 数据类型(DataTypeAbbr))!值:${pobjDataTypeAbbrEN.dataTypeENName}(clsDataTypeAbbrBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataTypeAbbrEN.dataCnName) == false &&
    GetStrLen(pobjDataTypeAbbrEN.dataCnName) > 100
  ) {
    throw new Error(
      `(errid:Watl000413)字段[数据类型中文名称(dataCnName)]的长度不能超过100(In 数据类型(DataTypeAbbr))!值:${pobjDataTypeAbbrEN.dataCnName}(clsDataTypeAbbrBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataTypeAbbrEN.dataTypeAbbr) == false &&
    GetStrLen(pobjDataTypeAbbrEN.dataTypeAbbr) > 5
  ) {
    throw new Error(
      `(errid:Watl000413)字段[数据类型缩写(dataTypeAbbr)]的长度不能超过5(In 数据类型(DataTypeAbbr))!值:${pobjDataTypeAbbrEN.dataTypeAbbr}(clsDataTypeAbbrBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataTypeAbbrEN.netSysType) == false &&
    GetStrLen(pobjDataTypeAbbrEN.netSysType) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[NET系统类型(netSysType)]的长度不能超过20(In 数据类型(DataTypeAbbr))!值:${pobjDataTypeAbbrEN.netSysType}(clsDataTypeAbbrBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataTypeAbbrEN.vbNetType) == false &&
    GetStrLen(pobjDataTypeAbbrEN.vbNetType) > 100
  ) {
    throw new Error(
      `(errid:Watl000413)字段[VBNET类型(vbNetType)]的长度不能超过100(In 数据类型(DataTypeAbbr))!值:${pobjDataTypeAbbrEN.vbNetType}(clsDataTypeAbbrBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataTypeAbbrEN.csType) == false &&
    GetStrLen(pobjDataTypeAbbrEN.csType) > 100
  ) {
    throw new Error(
      `(errid:Watl000413)字段[CS类型(csType)]的长度不能超过100(In 数据类型(DataTypeAbbr))!值:${pobjDataTypeAbbrEN.csType}(clsDataTypeAbbrBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataTypeAbbrEN.javaType) == false &&
    GetStrLen(pobjDataTypeAbbrEN.javaType) > 100
  ) {
    throw new Error(
      `(errid:Watl000413)字段[JAVA类型(javaType)]的长度不能超过100(In 数据类型(DataTypeAbbr))!值:${pobjDataTypeAbbrEN.javaType}(clsDataTypeAbbrBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataTypeAbbrEN.typeScriptType) == false &&
    GetStrLen(pobjDataTypeAbbrEN.typeScriptType) > 100
  ) {
    throw new Error(
      `(errid:Watl000413)字段[TypeScript类型(typeScriptType)]的长度不能超过100(In 数据类型(DataTypeAbbr))!值:${pobjDataTypeAbbrEN.typeScriptType}(clsDataTypeAbbrBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataTypeAbbrEN.javaObjType) == false &&
    GetStrLen(pobjDataTypeAbbrEN.javaObjType) > 100
  ) {
    throw new Error(
      `(errid:Watl000413)字段[JAVA对象类型(javaObjType)]的长度不能超过100(In 数据类型(DataTypeAbbr))!值:${pobjDataTypeAbbrEN.javaObjType}(clsDataTypeAbbrBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataTypeAbbrEN.swiftType) == false &&
    GetStrLen(pobjDataTypeAbbrEN.swiftType) > 100
  ) {
    throw new Error(
      `(errid:Watl000413)字段[SwiftType(swiftType)]的长度不能超过100(In 数据类型(DataTypeAbbr))!值:${pobjDataTypeAbbrEN.swiftType}(clsDataTypeAbbrBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataTypeAbbrEN.oraDbType) == false &&
    GetStrLen(pobjDataTypeAbbrEN.oraDbType) > 100
  ) {
    throw new Error(
      `(errid:Watl000413)字段[Ora数据类型(oraDbType)]的长度不能超过100(In 数据类型(DataTypeAbbr))!值:${pobjDataTypeAbbrEN.oraDbType}(clsDataTypeAbbrBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataTypeAbbrEN.sqlParaType) == false &&
    GetStrLen(pobjDataTypeAbbrEN.sqlParaType) > 100
  ) {
    throw new Error(
      `(errid:Watl000413)字段[SQL参数类型(sqlParaType)]的长度不能超过100(In 数据类型(DataTypeAbbr))!值:${pobjDataTypeAbbrEN.sqlParaType}(clsDataTypeAbbrBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataTypeAbbrEN.mySqlType) == false &&
    GetStrLen(pobjDataTypeAbbrEN.mySqlType) > 100
  ) {
    throw new Error(
      `(errid:Watl000413)字段[MySqlType(mySqlType)]的长度不能超过100(In 数据类型(DataTypeAbbr))!值:${pobjDataTypeAbbrEN.mySqlType}(clsDataTypeAbbrBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataTypeAbbrEN.memo) == false &&
    GetStrLen(pobjDataTypeAbbrEN.memo) > 1000
  ) {
    throw new Error(
      `(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In 数据类型(DataTypeAbbr))!值:${pobjDataTypeAbbrEN.memo}(clsDataTypeAbbrBL:CheckPropertyNew)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjDataTypeAbbrEN.dataTypeId) == false &&
    undefined !== pobjDataTypeAbbrEN.dataTypeId &&
    tzDataType.isString(pobjDataTypeAbbrEN.dataTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[数据类型Id(dataTypeId)]的值:[${pobjDataTypeAbbrEN.dataTypeId}], 非法,应该为字符型(In 数据类型(DataTypeAbbr))!(clsDataTypeAbbrBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataTypeAbbrEN.dataTypeName) == false &&
    undefined !== pobjDataTypeAbbrEN.dataTypeName &&
    tzDataType.isString(pobjDataTypeAbbrEN.dataTypeName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[数据类型名称(dataTypeName)]的值:[${pobjDataTypeAbbrEN.dataTypeName}], 非法,应该为字符型(In 数据类型(DataTypeAbbr))!(clsDataTypeAbbrBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataTypeAbbrEN.dataTypeENName) == false &&
    undefined !== pobjDataTypeAbbrEN.dataTypeENName &&
    tzDataType.isString(pobjDataTypeAbbrEN.dataTypeENName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[DataTypeENName(dataTypeENName)]的值:[${pobjDataTypeAbbrEN.dataTypeENName}], 非法,应该为字符型(In 数据类型(DataTypeAbbr))!(clsDataTypeAbbrBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataTypeAbbrEN.dataCnName) == false &&
    undefined !== pobjDataTypeAbbrEN.dataCnName &&
    tzDataType.isString(pobjDataTypeAbbrEN.dataCnName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[数据类型中文名称(dataCnName)]的值:[${pobjDataTypeAbbrEN.dataCnName}], 非法,应该为字符型(In 数据类型(DataTypeAbbr))!(clsDataTypeAbbrBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataTypeAbbrEN.dataTypeAbbr) == false &&
    undefined !== pobjDataTypeAbbrEN.dataTypeAbbr &&
    tzDataType.isString(pobjDataTypeAbbrEN.dataTypeAbbr) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[数据类型缩写(dataTypeAbbr)]的值:[${pobjDataTypeAbbrEN.dataTypeAbbr}], 非法,应该为字符型(In 数据类型(DataTypeAbbr))!(clsDataTypeAbbrBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataTypeAbbrEN.netSysType) == false &&
    undefined !== pobjDataTypeAbbrEN.netSysType &&
    tzDataType.isString(pobjDataTypeAbbrEN.netSysType) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[NET系统类型(netSysType)]的值:[${pobjDataTypeAbbrEN.netSysType}], 非法,应该为字符型(In 数据类型(DataTypeAbbr))!(clsDataTypeAbbrBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataTypeAbbrEN.vbNetType) == false &&
    undefined !== pobjDataTypeAbbrEN.vbNetType &&
    tzDataType.isString(pobjDataTypeAbbrEN.vbNetType) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[VBNET类型(vbNetType)]的值:[${pobjDataTypeAbbrEN.vbNetType}], 非法,应该为字符型(In 数据类型(DataTypeAbbr))!(clsDataTypeAbbrBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataTypeAbbrEN.csType) == false &&
    undefined !== pobjDataTypeAbbrEN.csType &&
    tzDataType.isString(pobjDataTypeAbbrEN.csType) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[CS类型(csType)]的值:[${pobjDataTypeAbbrEN.csType}], 非法,应该为字符型(In 数据类型(DataTypeAbbr))!(clsDataTypeAbbrBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataTypeAbbrEN.javaType) == false &&
    undefined !== pobjDataTypeAbbrEN.javaType &&
    tzDataType.isString(pobjDataTypeAbbrEN.javaType) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[JAVA类型(javaType)]的值:[${pobjDataTypeAbbrEN.javaType}], 非法,应该为字符型(In 数据类型(DataTypeAbbr))!(clsDataTypeAbbrBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataTypeAbbrEN.typeScriptType) == false &&
    undefined !== pobjDataTypeAbbrEN.typeScriptType &&
    tzDataType.isString(pobjDataTypeAbbrEN.typeScriptType) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[TypeScript类型(typeScriptType)]的值:[${pobjDataTypeAbbrEN.typeScriptType}], 非法,应该为字符型(In 数据类型(DataTypeAbbr))!(clsDataTypeAbbrBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataTypeAbbrEN.javaObjType) == false &&
    undefined !== pobjDataTypeAbbrEN.javaObjType &&
    tzDataType.isString(pobjDataTypeAbbrEN.javaObjType) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[JAVA对象类型(javaObjType)]的值:[${pobjDataTypeAbbrEN.javaObjType}], 非法,应该为字符型(In 数据类型(DataTypeAbbr))!(clsDataTypeAbbrBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataTypeAbbrEN.swiftType) == false &&
    undefined !== pobjDataTypeAbbrEN.swiftType &&
    tzDataType.isString(pobjDataTypeAbbrEN.swiftType) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[SwiftType(swiftType)]的值:[${pobjDataTypeAbbrEN.swiftType}], 非法,应该为字符型(In 数据类型(DataTypeAbbr))!(clsDataTypeAbbrBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjDataTypeAbbrEN.isNeedQuote &&
    undefined !== pobjDataTypeAbbrEN.isNeedQuote &&
    tzDataType.isBoolean(pobjDataTypeAbbrEN.isNeedQuote) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否需要引号(isNeedQuote)]的值:[${pobjDataTypeAbbrEN.isNeedQuote}], 非法,应该为布尔型(In 数据类型(DataTypeAbbr))!(clsDataTypeAbbrBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataTypeAbbrEN.oraDbType) == false &&
    undefined !== pobjDataTypeAbbrEN.oraDbType &&
    tzDataType.isString(pobjDataTypeAbbrEN.oraDbType) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[Ora数据类型(oraDbType)]的值:[${pobjDataTypeAbbrEN.oraDbType}], 非法,应该为字符型(In 数据类型(DataTypeAbbr))!(clsDataTypeAbbrBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjDataTypeAbbrEN.isReturnType &&
    undefined !== pobjDataTypeAbbrEN.isReturnType &&
    tzDataType.isBoolean(pobjDataTypeAbbrEN.isReturnType) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否可作返回类型(isReturnType)]的值:[${pobjDataTypeAbbrEN.isReturnType}], 非法,应该为布尔型(In 数据类型(DataTypeAbbr))!(clsDataTypeAbbrBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataTypeAbbrEN.sqlParaType) == false &&
    undefined !== pobjDataTypeAbbrEN.sqlParaType &&
    tzDataType.isString(pobjDataTypeAbbrEN.sqlParaType) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[SQL参数类型(sqlParaType)]的值:[${pobjDataTypeAbbrEN.sqlParaType}], 非法,应该为字符型(In 数据类型(DataTypeAbbr))!(clsDataTypeAbbrBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataTypeAbbrEN.mySqlType) == false &&
    undefined !== pobjDataTypeAbbrEN.mySqlType &&
    tzDataType.isString(pobjDataTypeAbbrEN.mySqlType) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[MySqlType(mySqlType)]的值:[${pobjDataTypeAbbrEN.mySqlType}], 非法,应该为字符型(In 数据类型(DataTypeAbbr))!(clsDataTypeAbbrBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjDataTypeAbbrEN.defaFldLength &&
    undefined !== pobjDataTypeAbbrEN.defaFldLength &&
    tzDataType.isNumber(pobjDataTypeAbbrEN.defaFldLength) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[默认长度(defaFldLength)]的值:[${pobjDataTypeAbbrEN.defaFldLength}], 非法,应该为数值型(In 数据类型(DataTypeAbbr))!(clsDataTypeAbbrBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjDataTypeAbbrEN.defaFldPrecision &&
    undefined !== pobjDataTypeAbbrEN.defaFldPrecision &&
    tzDataType.isNumber(pobjDataTypeAbbrEN.defaFldPrecision) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[默认小数位数(defaFldPrecision)]的值:[${pobjDataTypeAbbrEN.defaFldPrecision}], 非法,应该为数值型(In 数据类型(DataTypeAbbr))!(clsDataTypeAbbrBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataTypeAbbrEN.memo) == false &&
    undefined !== pobjDataTypeAbbrEN.memo &&
    tzDataType.isString(pobjDataTypeAbbrEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[说明(memo)]的值:[${pobjDataTypeAbbrEN.memo}], 非法,应该为字符型(In 数据类型(DataTypeAbbr))!(clsDataTypeAbbrBL:CheckPropertyNew0)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function DataTypeAbbr_CheckProperty4Update(pobjDataTypeAbbrEN: clsDataTypeAbbrEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjDataTypeAbbrEN.dataTypeId) == false &&
    GetStrLen(pobjDataTypeAbbrEN.dataTypeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000416)字段[数据类型Id(dataTypeId)]的长度不能超过2(In 数据类型(DataTypeAbbr))!值:${pobjDataTypeAbbrEN.dataTypeId}(clsDataTypeAbbrBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataTypeAbbrEN.dataTypeName) == false &&
    GetStrLen(pobjDataTypeAbbrEN.dataTypeName) > 100
  ) {
    throw new Error(
      `(errid:Watl000416)字段[数据类型名称(dataTypeName)]的长度不能超过100(In 数据类型(DataTypeAbbr))!值:${pobjDataTypeAbbrEN.dataTypeName}(clsDataTypeAbbrBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataTypeAbbrEN.dataTypeENName) == false &&
    GetStrLen(pobjDataTypeAbbrEN.dataTypeENName) > 100
  ) {
    throw new Error(
      `(errid:Watl000416)字段[DataTypeENName(dataTypeENName)]的长度不能超过100(In 数据类型(DataTypeAbbr))!值:${pobjDataTypeAbbrEN.dataTypeENName}(clsDataTypeAbbrBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataTypeAbbrEN.dataCnName) == false &&
    GetStrLen(pobjDataTypeAbbrEN.dataCnName) > 100
  ) {
    throw new Error(
      `(errid:Watl000416)字段[数据类型中文名称(dataCnName)]的长度不能超过100(In 数据类型(DataTypeAbbr))!值:${pobjDataTypeAbbrEN.dataCnName}(clsDataTypeAbbrBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataTypeAbbrEN.dataTypeAbbr) == false &&
    GetStrLen(pobjDataTypeAbbrEN.dataTypeAbbr) > 5
  ) {
    throw new Error(
      `(errid:Watl000416)字段[数据类型缩写(dataTypeAbbr)]的长度不能超过5(In 数据类型(DataTypeAbbr))!值:${pobjDataTypeAbbrEN.dataTypeAbbr}(clsDataTypeAbbrBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataTypeAbbrEN.netSysType) == false &&
    GetStrLen(pobjDataTypeAbbrEN.netSysType) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[NET系统类型(netSysType)]的长度不能超过20(In 数据类型(DataTypeAbbr))!值:${pobjDataTypeAbbrEN.netSysType}(clsDataTypeAbbrBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataTypeAbbrEN.vbNetType) == false &&
    GetStrLen(pobjDataTypeAbbrEN.vbNetType) > 100
  ) {
    throw new Error(
      `(errid:Watl000416)字段[VBNET类型(vbNetType)]的长度不能超过100(In 数据类型(DataTypeAbbr))!值:${pobjDataTypeAbbrEN.vbNetType}(clsDataTypeAbbrBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataTypeAbbrEN.csType) == false &&
    GetStrLen(pobjDataTypeAbbrEN.csType) > 100
  ) {
    throw new Error(
      `(errid:Watl000416)字段[CS类型(csType)]的长度不能超过100(In 数据类型(DataTypeAbbr))!值:${pobjDataTypeAbbrEN.csType}(clsDataTypeAbbrBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataTypeAbbrEN.javaType) == false &&
    GetStrLen(pobjDataTypeAbbrEN.javaType) > 100
  ) {
    throw new Error(
      `(errid:Watl000416)字段[JAVA类型(javaType)]的长度不能超过100(In 数据类型(DataTypeAbbr))!值:${pobjDataTypeAbbrEN.javaType}(clsDataTypeAbbrBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataTypeAbbrEN.typeScriptType) == false &&
    GetStrLen(pobjDataTypeAbbrEN.typeScriptType) > 100
  ) {
    throw new Error(
      `(errid:Watl000416)字段[TypeScript类型(typeScriptType)]的长度不能超过100(In 数据类型(DataTypeAbbr))!值:${pobjDataTypeAbbrEN.typeScriptType}(clsDataTypeAbbrBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataTypeAbbrEN.javaObjType) == false &&
    GetStrLen(pobjDataTypeAbbrEN.javaObjType) > 100
  ) {
    throw new Error(
      `(errid:Watl000416)字段[JAVA对象类型(javaObjType)]的长度不能超过100(In 数据类型(DataTypeAbbr))!值:${pobjDataTypeAbbrEN.javaObjType}(clsDataTypeAbbrBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataTypeAbbrEN.swiftType) == false &&
    GetStrLen(pobjDataTypeAbbrEN.swiftType) > 100
  ) {
    throw new Error(
      `(errid:Watl000416)字段[SwiftType(swiftType)]的长度不能超过100(In 数据类型(DataTypeAbbr))!值:${pobjDataTypeAbbrEN.swiftType}(clsDataTypeAbbrBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataTypeAbbrEN.oraDbType) == false &&
    GetStrLen(pobjDataTypeAbbrEN.oraDbType) > 100
  ) {
    throw new Error(
      `(errid:Watl000416)字段[Ora数据类型(oraDbType)]的长度不能超过100(In 数据类型(DataTypeAbbr))!值:${pobjDataTypeAbbrEN.oraDbType}(clsDataTypeAbbrBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataTypeAbbrEN.sqlParaType) == false &&
    GetStrLen(pobjDataTypeAbbrEN.sqlParaType) > 100
  ) {
    throw new Error(
      `(errid:Watl000416)字段[SQL参数类型(sqlParaType)]的长度不能超过100(In 数据类型(DataTypeAbbr))!值:${pobjDataTypeAbbrEN.sqlParaType}(clsDataTypeAbbrBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataTypeAbbrEN.mySqlType) == false &&
    GetStrLen(pobjDataTypeAbbrEN.mySqlType) > 100
  ) {
    throw new Error(
      `(errid:Watl000416)字段[MySqlType(mySqlType)]的长度不能超过100(In 数据类型(DataTypeAbbr))!值:${pobjDataTypeAbbrEN.mySqlType}(clsDataTypeAbbrBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataTypeAbbrEN.memo) == false &&
    GetStrLen(pobjDataTypeAbbrEN.memo) > 1000
  ) {
    throw new Error(
      `(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In 数据类型(DataTypeAbbr))!值:${pobjDataTypeAbbrEN.memo}(clsDataTypeAbbrBL:CheckProperty4Update)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjDataTypeAbbrEN.dataTypeId) == false &&
    undefined !== pobjDataTypeAbbrEN.dataTypeId &&
    tzDataType.isString(pobjDataTypeAbbrEN.dataTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[数据类型Id(dataTypeId)]的值:[${pobjDataTypeAbbrEN.dataTypeId}], 非法,应该为字符型(In 数据类型(DataTypeAbbr))!(clsDataTypeAbbrBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataTypeAbbrEN.dataTypeName) == false &&
    undefined !== pobjDataTypeAbbrEN.dataTypeName &&
    tzDataType.isString(pobjDataTypeAbbrEN.dataTypeName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[数据类型名称(dataTypeName)]的值:[${pobjDataTypeAbbrEN.dataTypeName}], 非法,应该为字符型(In 数据类型(DataTypeAbbr))!(clsDataTypeAbbrBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataTypeAbbrEN.dataTypeENName) == false &&
    undefined !== pobjDataTypeAbbrEN.dataTypeENName &&
    tzDataType.isString(pobjDataTypeAbbrEN.dataTypeENName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[DataTypeENName(dataTypeENName)]的值:[${pobjDataTypeAbbrEN.dataTypeENName}], 非法,应该为字符型(In 数据类型(DataTypeAbbr))!(clsDataTypeAbbrBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataTypeAbbrEN.dataCnName) == false &&
    undefined !== pobjDataTypeAbbrEN.dataCnName &&
    tzDataType.isString(pobjDataTypeAbbrEN.dataCnName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[数据类型中文名称(dataCnName)]的值:[${pobjDataTypeAbbrEN.dataCnName}], 非法,应该为字符型(In 数据类型(DataTypeAbbr))!(clsDataTypeAbbrBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataTypeAbbrEN.dataTypeAbbr) == false &&
    undefined !== pobjDataTypeAbbrEN.dataTypeAbbr &&
    tzDataType.isString(pobjDataTypeAbbrEN.dataTypeAbbr) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[数据类型缩写(dataTypeAbbr)]的值:[${pobjDataTypeAbbrEN.dataTypeAbbr}], 非法,应该为字符型(In 数据类型(DataTypeAbbr))!(clsDataTypeAbbrBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataTypeAbbrEN.netSysType) == false &&
    undefined !== pobjDataTypeAbbrEN.netSysType &&
    tzDataType.isString(pobjDataTypeAbbrEN.netSysType) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[NET系统类型(netSysType)]的值:[${pobjDataTypeAbbrEN.netSysType}], 非法,应该为字符型(In 数据类型(DataTypeAbbr))!(clsDataTypeAbbrBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataTypeAbbrEN.vbNetType) == false &&
    undefined !== pobjDataTypeAbbrEN.vbNetType &&
    tzDataType.isString(pobjDataTypeAbbrEN.vbNetType) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[VBNET类型(vbNetType)]的值:[${pobjDataTypeAbbrEN.vbNetType}], 非法,应该为字符型(In 数据类型(DataTypeAbbr))!(clsDataTypeAbbrBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataTypeAbbrEN.csType) == false &&
    undefined !== pobjDataTypeAbbrEN.csType &&
    tzDataType.isString(pobjDataTypeAbbrEN.csType) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[CS类型(csType)]的值:[${pobjDataTypeAbbrEN.csType}], 非法,应该为字符型(In 数据类型(DataTypeAbbr))!(clsDataTypeAbbrBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataTypeAbbrEN.javaType) == false &&
    undefined !== pobjDataTypeAbbrEN.javaType &&
    tzDataType.isString(pobjDataTypeAbbrEN.javaType) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[JAVA类型(javaType)]的值:[${pobjDataTypeAbbrEN.javaType}], 非法,应该为字符型(In 数据类型(DataTypeAbbr))!(clsDataTypeAbbrBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataTypeAbbrEN.typeScriptType) == false &&
    undefined !== pobjDataTypeAbbrEN.typeScriptType &&
    tzDataType.isString(pobjDataTypeAbbrEN.typeScriptType) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[TypeScript类型(typeScriptType)]的值:[${pobjDataTypeAbbrEN.typeScriptType}], 非法,应该为字符型(In 数据类型(DataTypeAbbr))!(clsDataTypeAbbrBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataTypeAbbrEN.javaObjType) == false &&
    undefined !== pobjDataTypeAbbrEN.javaObjType &&
    tzDataType.isString(pobjDataTypeAbbrEN.javaObjType) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[JAVA对象类型(javaObjType)]的值:[${pobjDataTypeAbbrEN.javaObjType}], 非法,应该为字符型(In 数据类型(DataTypeAbbr))!(clsDataTypeAbbrBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataTypeAbbrEN.swiftType) == false &&
    undefined !== pobjDataTypeAbbrEN.swiftType &&
    tzDataType.isString(pobjDataTypeAbbrEN.swiftType) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[SwiftType(swiftType)]的值:[${pobjDataTypeAbbrEN.swiftType}], 非法,应该为字符型(In 数据类型(DataTypeAbbr))!(clsDataTypeAbbrBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjDataTypeAbbrEN.isNeedQuote &&
    undefined !== pobjDataTypeAbbrEN.isNeedQuote &&
    tzDataType.isBoolean(pobjDataTypeAbbrEN.isNeedQuote) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否需要引号(isNeedQuote)]的值:[${pobjDataTypeAbbrEN.isNeedQuote}], 非法,应该为布尔型(In 数据类型(DataTypeAbbr))!(clsDataTypeAbbrBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataTypeAbbrEN.oraDbType) == false &&
    undefined !== pobjDataTypeAbbrEN.oraDbType &&
    tzDataType.isString(pobjDataTypeAbbrEN.oraDbType) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[Ora数据类型(oraDbType)]的值:[${pobjDataTypeAbbrEN.oraDbType}], 非法,应该为字符型(In 数据类型(DataTypeAbbr))!(clsDataTypeAbbrBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjDataTypeAbbrEN.isReturnType &&
    undefined !== pobjDataTypeAbbrEN.isReturnType &&
    tzDataType.isBoolean(pobjDataTypeAbbrEN.isReturnType) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否可作返回类型(isReturnType)]的值:[${pobjDataTypeAbbrEN.isReturnType}], 非法,应该为布尔型(In 数据类型(DataTypeAbbr))!(clsDataTypeAbbrBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataTypeAbbrEN.sqlParaType) == false &&
    undefined !== pobjDataTypeAbbrEN.sqlParaType &&
    tzDataType.isString(pobjDataTypeAbbrEN.sqlParaType) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[SQL参数类型(sqlParaType)]的值:[${pobjDataTypeAbbrEN.sqlParaType}], 非法,应该为字符型(In 数据类型(DataTypeAbbr))!(clsDataTypeAbbrBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataTypeAbbrEN.mySqlType) == false &&
    undefined !== pobjDataTypeAbbrEN.mySqlType &&
    tzDataType.isString(pobjDataTypeAbbrEN.mySqlType) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[MySqlType(mySqlType)]的值:[${pobjDataTypeAbbrEN.mySqlType}], 非法,应该为字符型(In 数据类型(DataTypeAbbr))!(clsDataTypeAbbrBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjDataTypeAbbrEN.defaFldLength &&
    undefined !== pobjDataTypeAbbrEN.defaFldLength &&
    tzDataType.isNumber(pobjDataTypeAbbrEN.defaFldLength) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[默认长度(defaFldLength)]的值:[${pobjDataTypeAbbrEN.defaFldLength}], 非法,应该为数值型(In 数据类型(DataTypeAbbr))!(clsDataTypeAbbrBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjDataTypeAbbrEN.defaFldPrecision &&
    undefined !== pobjDataTypeAbbrEN.defaFldPrecision &&
    tzDataType.isNumber(pobjDataTypeAbbrEN.defaFldPrecision) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[默认小数位数(defaFldPrecision)]的值:[${pobjDataTypeAbbrEN.defaFldPrecision}], 非法,应该为数值型(In 数据类型(DataTypeAbbr))!(clsDataTypeAbbrBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataTypeAbbrEN.memo) == false &&
    undefined !== pobjDataTypeAbbrEN.memo &&
    tzDataType.isString(pobjDataTypeAbbrEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[说明(memo)]的值:[${pobjDataTypeAbbrEN.memo}], 非法,应该为字符型(In 数据类型(DataTypeAbbr))!(clsDataTypeAbbrBL:CheckProperty4Update)`,
    );
  }
  //检查主键是否为Null或者空!
  if (
    IsNullOrEmpty(pobjDataTypeAbbrEN.dataTypeId) === true ||
    pobjDataTypeAbbrEN.dataTypeId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000064)字段[数据类型Id]不能为空(In 数据类型)!(clsDataTypeAbbrBL:CheckProperty4Update)`,
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
export function DataTypeAbbr_GetJSONStrByObj(pobjDataTypeAbbrEN: clsDataTypeAbbrEN): string {
  pobjDataTypeAbbrEN.sfUpdFldSetStr = pobjDataTypeAbbrEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjDataTypeAbbrEN);
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
export function DataTypeAbbr_GetObjLstByJSONStr(strJSON: string): Array<clsDataTypeAbbrEN> {
  let arrDataTypeAbbrObjLst = new Array<clsDataTypeAbbrEN>();
  if (strJSON === '') {
    return arrDataTypeAbbrObjLst;
  }
  try {
    arrDataTypeAbbrObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrDataTypeAbbrObjLst;
  }
  return arrDataTypeAbbrObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-05-04
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrDataTypeAbbrObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function DataTypeAbbr_GetObjLstByJSONObjLst(
  arrDataTypeAbbrObjLstS: Array<clsDataTypeAbbrEN>,
): Array<clsDataTypeAbbrEN> {
  const arrDataTypeAbbrObjLst = new Array<clsDataTypeAbbrEN>();
  for (const objInFor of arrDataTypeAbbrObjLstS) {
    const obj1 = DataTypeAbbr_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrDataTypeAbbrObjLst.push(obj1);
  }
  return arrDataTypeAbbrObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-05-04
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function DataTypeAbbr_GetObjByJSONStr(strJSON: string): clsDataTypeAbbrEN {
  let pobjDataTypeAbbrEN = new clsDataTypeAbbrEN();
  if (strJSON === '') {
    return pobjDataTypeAbbrEN;
  }
  try {
    pobjDataTypeAbbrEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjDataTypeAbbrEN;
  }
  return pobjDataTypeAbbrEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function DataTypeAbbr_GetCombineCondition(objDataTypeAbbrCond: clsDataTypeAbbrEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objDataTypeAbbrCond.dicFldComparisonOp,
      clsDataTypeAbbrEN.con_DataTypeId,
    ) == true
  ) {
    const strComparisonOpDataTypeId: string =
      objDataTypeAbbrCond.dicFldComparisonOp[clsDataTypeAbbrEN.con_DataTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDataTypeAbbrEN.con_DataTypeId,
      objDataTypeAbbrCond.dataTypeId,
      strComparisonOpDataTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDataTypeAbbrCond.dicFldComparisonOp,
      clsDataTypeAbbrEN.con_DataTypeName,
    ) == true
  ) {
    const strComparisonOpDataTypeName: string =
      objDataTypeAbbrCond.dicFldComparisonOp[clsDataTypeAbbrEN.con_DataTypeName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDataTypeAbbrEN.con_DataTypeName,
      objDataTypeAbbrCond.dataTypeName,
      strComparisonOpDataTypeName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDataTypeAbbrCond.dicFldComparisonOp,
      clsDataTypeAbbrEN.con_DataTypeENName,
    ) == true
  ) {
    const strComparisonOpDataTypeENName: string =
      objDataTypeAbbrCond.dicFldComparisonOp[clsDataTypeAbbrEN.con_DataTypeENName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDataTypeAbbrEN.con_DataTypeENName,
      objDataTypeAbbrCond.dataTypeENName,
      strComparisonOpDataTypeENName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDataTypeAbbrCond.dicFldComparisonOp,
      clsDataTypeAbbrEN.con_DataCnName,
    ) == true
  ) {
    const strComparisonOpDataCnName: string =
      objDataTypeAbbrCond.dicFldComparisonOp[clsDataTypeAbbrEN.con_DataCnName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDataTypeAbbrEN.con_DataCnName,
      objDataTypeAbbrCond.dataCnName,
      strComparisonOpDataCnName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDataTypeAbbrCond.dicFldComparisonOp,
      clsDataTypeAbbrEN.con_DataTypeAbbr,
    ) == true
  ) {
    const strComparisonOpDataTypeAbbr: string =
      objDataTypeAbbrCond.dicFldComparisonOp[clsDataTypeAbbrEN.con_DataTypeAbbr];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDataTypeAbbrEN.con_DataTypeAbbr,
      objDataTypeAbbrCond.dataTypeAbbr,
      strComparisonOpDataTypeAbbr,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDataTypeAbbrCond.dicFldComparisonOp,
      clsDataTypeAbbrEN.con_NetSysType,
    ) == true
  ) {
    const strComparisonOpNetSysType: string =
      objDataTypeAbbrCond.dicFldComparisonOp[clsDataTypeAbbrEN.con_NetSysType];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDataTypeAbbrEN.con_NetSysType,
      objDataTypeAbbrCond.netSysType,
      strComparisonOpNetSysType,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDataTypeAbbrCond.dicFldComparisonOp,
      clsDataTypeAbbrEN.con_VbNetType,
    ) == true
  ) {
    const strComparisonOpVbNetType: string =
      objDataTypeAbbrCond.dicFldComparisonOp[clsDataTypeAbbrEN.con_VbNetType];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDataTypeAbbrEN.con_VbNetType,
      objDataTypeAbbrCond.vbNetType,
      strComparisonOpVbNetType,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDataTypeAbbrCond.dicFldComparisonOp,
      clsDataTypeAbbrEN.con_CsType,
    ) == true
  ) {
    const strComparisonOpCsType: string =
      objDataTypeAbbrCond.dicFldComparisonOp[clsDataTypeAbbrEN.con_CsType];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDataTypeAbbrEN.con_CsType,
      objDataTypeAbbrCond.csType,
      strComparisonOpCsType,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDataTypeAbbrCond.dicFldComparisonOp,
      clsDataTypeAbbrEN.con_JavaType,
    ) == true
  ) {
    const strComparisonOpJavaType: string =
      objDataTypeAbbrCond.dicFldComparisonOp[clsDataTypeAbbrEN.con_JavaType];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDataTypeAbbrEN.con_JavaType,
      objDataTypeAbbrCond.javaType,
      strComparisonOpJavaType,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDataTypeAbbrCond.dicFldComparisonOp,
      clsDataTypeAbbrEN.con_TypeScriptType,
    ) == true
  ) {
    const strComparisonOpTypeScriptType: string =
      objDataTypeAbbrCond.dicFldComparisonOp[clsDataTypeAbbrEN.con_TypeScriptType];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDataTypeAbbrEN.con_TypeScriptType,
      objDataTypeAbbrCond.typeScriptType,
      strComparisonOpTypeScriptType,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDataTypeAbbrCond.dicFldComparisonOp,
      clsDataTypeAbbrEN.con_JavaObjType,
    ) == true
  ) {
    const strComparisonOpJavaObjType: string =
      objDataTypeAbbrCond.dicFldComparisonOp[clsDataTypeAbbrEN.con_JavaObjType];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDataTypeAbbrEN.con_JavaObjType,
      objDataTypeAbbrCond.javaObjType,
      strComparisonOpJavaObjType,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDataTypeAbbrCond.dicFldComparisonOp,
      clsDataTypeAbbrEN.con_SwiftType,
    ) == true
  ) {
    const strComparisonOpSwiftType: string =
      objDataTypeAbbrCond.dicFldComparisonOp[clsDataTypeAbbrEN.con_SwiftType];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDataTypeAbbrEN.con_SwiftType,
      objDataTypeAbbrCond.swiftType,
      strComparisonOpSwiftType,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDataTypeAbbrCond.dicFldComparisonOp,
      clsDataTypeAbbrEN.con_IsNeedQuote,
    ) == true
  ) {
    if (objDataTypeAbbrCond.isNeedQuote == true) {
      strWhereCond += Format(" And {0} = '1'", clsDataTypeAbbrEN.con_IsNeedQuote);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsDataTypeAbbrEN.con_IsNeedQuote);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDataTypeAbbrCond.dicFldComparisonOp,
      clsDataTypeAbbrEN.con_OraDbType,
    ) == true
  ) {
    const strComparisonOpOraDbType: string =
      objDataTypeAbbrCond.dicFldComparisonOp[clsDataTypeAbbrEN.con_OraDbType];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDataTypeAbbrEN.con_OraDbType,
      objDataTypeAbbrCond.oraDbType,
      strComparisonOpOraDbType,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDataTypeAbbrCond.dicFldComparisonOp,
      clsDataTypeAbbrEN.con_IsReturnType,
    ) == true
  ) {
    if (objDataTypeAbbrCond.isReturnType == true) {
      strWhereCond += Format(" And {0} = '1'", clsDataTypeAbbrEN.con_IsReturnType);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsDataTypeAbbrEN.con_IsReturnType);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDataTypeAbbrCond.dicFldComparisonOp,
      clsDataTypeAbbrEN.con_SqlParaType,
    ) == true
  ) {
    const strComparisonOpSqlParaType: string =
      objDataTypeAbbrCond.dicFldComparisonOp[clsDataTypeAbbrEN.con_SqlParaType];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDataTypeAbbrEN.con_SqlParaType,
      objDataTypeAbbrCond.sqlParaType,
      strComparisonOpSqlParaType,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDataTypeAbbrCond.dicFldComparisonOp,
      clsDataTypeAbbrEN.con_MySqlType,
    ) == true
  ) {
    const strComparisonOpMySqlType: string =
      objDataTypeAbbrCond.dicFldComparisonOp[clsDataTypeAbbrEN.con_MySqlType];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDataTypeAbbrEN.con_MySqlType,
      objDataTypeAbbrCond.mySqlType,
      strComparisonOpMySqlType,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDataTypeAbbrCond.dicFldComparisonOp,
      clsDataTypeAbbrEN.con_DefaFldLength,
    ) == true
  ) {
    const strComparisonOpDefaFldLength: string =
      objDataTypeAbbrCond.dicFldComparisonOp[clsDataTypeAbbrEN.con_DefaFldLength];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsDataTypeAbbrEN.con_DefaFldLength,
      objDataTypeAbbrCond.defaFldLength,
      strComparisonOpDefaFldLength,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDataTypeAbbrCond.dicFldComparisonOp,
      clsDataTypeAbbrEN.con_DefaFldPrecision,
    ) == true
  ) {
    const strComparisonOpDefaFldPrecision: string =
      objDataTypeAbbrCond.dicFldComparisonOp[clsDataTypeAbbrEN.con_DefaFldPrecision];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsDataTypeAbbrEN.con_DefaFldPrecision,
      objDataTypeAbbrCond.defaFldPrecision,
      strComparisonOpDefaFldPrecision,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDataTypeAbbrCond.dicFldComparisonOp,
      clsDataTypeAbbrEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objDataTypeAbbrCond.dicFldComparisonOp[clsDataTypeAbbrEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDataTypeAbbrEN.con_Memo,
      objDataTypeAbbrCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objDataTypeAbbrENS:源对象
 * @param objDataTypeAbbrENT:目标对象
 */
export function DataTypeAbbr_GetObjFromJsonObj(
  objDataTypeAbbrENS: clsDataTypeAbbrEN,
): clsDataTypeAbbrEN {
  const objDataTypeAbbrENT: clsDataTypeAbbrEN = new clsDataTypeAbbrEN();
  ObjectAssign(objDataTypeAbbrENT, objDataTypeAbbrENS);
  return objDataTypeAbbrENT;
}
