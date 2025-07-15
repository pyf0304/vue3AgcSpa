/**
 * 类名:clsSQLDSTypeWApi
 * 表名:SQLDSType(00050014)
 * 版本:2025.05.03.1(服务器:WIN-SRV103-116)
 * 日期:2025/05/04 15:35:57
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 应用类型:Vue应用InCore-TS(30)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:界面管理(PrjInterface)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 数据源类型(SQLDSType)
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
import { clsSQLDSTypeEN } from '@/ts/L0Entity/PrjInterface/clsSQLDSTypeEN';
import { AddRecordResult } from '@/ts/PubFun/AddRecordResult';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';

export const sQLDSType_Controller = 'SQLDSTypeApi';
export const sQLDSType_ConstructorName = 'sQLDSType';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strSqlDsTypeId:关键字
 * @returns 对象
 **/
export async function SQLDSType_GetObjBySqlDsTypeIdAsync(
  strSqlDsTypeId: string,
): Promise<clsSQLDSTypeEN | null> {
  const strThisFuncName = 'GetObjBySqlDsTypeIdAsync';

  if (IsNullOrEmpty(strSqlDsTypeId) == true) {
    const strMsg = Format(
      '参数:[strSqlDsTypeId]不能为空!(In clsSQLDSTypeWApi.GetObjBySqlDsTypeIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strSqlDsTypeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strSqlDsTypeId]的长度:[{0}]不正确!(clsSQLDSTypeWApi.GetObjBySqlDsTypeIdAsync)',
      strSqlDsTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjBySqlDsTypeId';
  const strUrl = GetWebApiUrl(sQLDSType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strSqlDsTypeId,
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
      const objSQLDSType = SQLDSType_GetObjFromJsonObj(returnObj);
      return objSQLDSType;
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
        sQLDSType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sQLDSType_ConstructorName,
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
 * @param strSqlDsTypeId:所给的关键字
 * @returns 对象
 */
export async function SQLDSType_GetObjBySqlDsTypeIdlocalStorage(strSqlDsTypeId: string) {
  const strThisFuncName = 'GetObjBySqlDsTypeIdlocalStorage';

  if (IsNullOrEmpty(strSqlDsTypeId) == true) {
    const strMsg = Format(
      '参数:[strSqlDsTypeId]不能为空!(In clsSQLDSTypeWApi.GetObjBySqlDsTypeIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strSqlDsTypeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strSqlDsTypeId]的长度:[{0}]不正确!(clsSQLDSTypeWApi.GetObjBySqlDsTypeIdlocalStorage)',
      strSqlDsTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsSQLDSTypeEN._CurrTabName, strSqlDsTypeId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objSQLDSTypeCache: clsSQLDSTypeEN = JSON.parse(strTempObj);
    return objSQLDSTypeCache;
  }
  try {
    const objSQLDSType = await SQLDSType_GetObjBySqlDsTypeIdAsync(strSqlDsTypeId);
    if (objSQLDSType != null) {
      localStorage.setItem(strKey, JSON.stringify(objSQLDSType));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objSQLDSType;
    }
    return objSQLDSType;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strSqlDsTypeId,
      sQLDSType_ConstructorName,
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
 * @param strSqlDsTypeId:所给的关键字
 * @returns 对象
 */
export async function SQLDSType_GetObjBySqlDsTypeIdCache(
  strSqlDsTypeId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjBySqlDsTypeIdCache';

  if (IsNullOrEmpty(strSqlDsTypeId) == true) {
    const strMsg = Format(
      '参数:[strSqlDsTypeId]不能为空!(In clsSQLDSTypeWApi.GetObjBySqlDsTypeIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strSqlDsTypeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strSqlDsTypeId]的长度:[{0}]不正确!(clsSQLDSTypeWApi.GetObjBySqlDsTypeIdCache)',
      strSqlDsTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrSQLDSTypeObjLstCache = await SQLDSType_GetObjLstCache();
  try {
    const arrSQLDSTypeSel = arrSQLDSTypeObjLstCache.filter((x) => x.sqlDsTypeId == strSqlDsTypeId);
    let objSQLDSType: clsSQLDSTypeEN;
    if (arrSQLDSTypeSel.length > 0) {
      objSQLDSType = arrSQLDSTypeSel[0];
      return objSQLDSType;
    } else {
      if (bolTryAsyncOnce == true) {
        const objSQLDSTypeConst = await SQLDSType_GetObjBySqlDsTypeIdAsync(strSqlDsTypeId);
        if (objSQLDSTypeConst != null) {
          SQLDSType_ReFreshThisCache();
          return objSQLDSTypeConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strSqlDsTypeId,
      sQLDSType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objSQLDSType:所给的对象
 * @returns 对象
 */
export async function SQLDSType_UpdateObjInLstCache(objSQLDSType: clsSQLDSTypeEN) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrSQLDSTypeObjLstCache = await SQLDSType_GetObjLstCache();
    const obj = arrSQLDSTypeObjLstCache.find((x) => x.sqlDsTypeId == objSQLDSType.sqlDsTypeId);
    if (obj != null) {
      objSQLDSType.sqlDsTypeId = obj.sqlDsTypeId;
      ObjectAssign(obj, objSQLDSType);
    } else {
      arrSQLDSTypeObjLstCache.push(objSQLDSType);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      sQLDSType_ConstructorName,
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
export function SQLDSType_SortFunDefa(a: clsSQLDSTypeEN, b: clsSQLDSTypeEN): number {
  return a.sqlDsTypeId.localeCompare(b.sqlDsTypeId);
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
export function SQLDSType_SortFunDefa2Fld(a: clsSQLDSTypeEN, b: clsSQLDSTypeEN): number {
  if (a.sqlDsTypeName == b.sqlDsTypeName) return a.sqlDsTypeENName.localeCompare(b.sqlDsTypeENName);
  else return a.sqlDsTypeName.localeCompare(b.sqlDsTypeName);
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
export function SQLDSType_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsSQLDSTypeEN.con_SqlDsTypeId:
        return (a: clsSQLDSTypeEN, b: clsSQLDSTypeEN) => {
          return a.sqlDsTypeId.localeCompare(b.sqlDsTypeId);
        };
      case clsSQLDSTypeEN.con_SqlDsTypeName:
        return (a: clsSQLDSTypeEN, b: clsSQLDSTypeEN) => {
          return a.sqlDsTypeName.localeCompare(b.sqlDsTypeName);
        };
      case clsSQLDSTypeEN.con_SqlDsTypeENName:
        return (a: clsSQLDSTypeEN, b: clsSQLDSTypeEN) => {
          if (a.sqlDsTypeENName == null) return -1;
          if (b.sqlDsTypeENName == null) return 1;
          return a.sqlDsTypeENName.localeCompare(b.sqlDsTypeENName);
        };
      case clsSQLDSTypeEN.con_Memo:
        return (a: clsSQLDSTypeEN, b: clsSQLDSTypeEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[SQLDSType]中不存在!(in ${sQLDSType_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsSQLDSTypeEN.con_SqlDsTypeId:
        return (a: clsSQLDSTypeEN, b: clsSQLDSTypeEN) => {
          return b.sqlDsTypeId.localeCompare(a.sqlDsTypeId);
        };
      case clsSQLDSTypeEN.con_SqlDsTypeName:
        return (a: clsSQLDSTypeEN, b: clsSQLDSTypeEN) => {
          return b.sqlDsTypeName.localeCompare(a.sqlDsTypeName);
        };
      case clsSQLDSTypeEN.con_SqlDsTypeENName:
        return (a: clsSQLDSTypeEN, b: clsSQLDSTypeEN) => {
          if (b.sqlDsTypeENName == null) return -1;
          if (a.sqlDsTypeENName == null) return 1;
          return b.sqlDsTypeENName.localeCompare(a.sqlDsTypeENName);
        };
      case clsSQLDSTypeEN.con_Memo:
        return (a: clsSQLDSTypeEN, b: clsSQLDSTypeEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[SQLDSType]中不存在!(in ${sQLDSType_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strSqlDsTypeId:所给的关键字
 * @returns 对象
 */
export async function SQLDSType_GetNameBySqlDsTypeIdCache(strSqlDsTypeId: string) {
  if (IsNullOrEmpty(strSqlDsTypeId) == true) {
    const strMsg = Format(
      '参数:[strSqlDsTypeId]不能为空!(In clsSQLDSTypeWApi.GetNameBySqlDsTypeIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strSqlDsTypeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strSqlDsTypeId]的长度:[{0}]不正确!(clsSQLDSTypeWApi.GetNameBySqlDsTypeIdCache)',
      strSqlDsTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrSQLDSTypeObjLstCache = await SQLDSType_GetObjLstCache();
  if (arrSQLDSTypeObjLstCache == null) return '';
  try {
    const arrSQLDSTypeSel = arrSQLDSTypeObjLstCache.filter((x) => x.sqlDsTypeId == strSqlDsTypeId);
    let objSQLDSType: clsSQLDSTypeEN;
    if (arrSQLDSTypeSel.length > 0) {
      objSQLDSType = arrSQLDSTypeSel[0];
      return objSQLDSType.sqlDsTypeName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strSqlDsTypeId,
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
export async function SQLDSType_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsSQLDSTypeEN.con_SqlDsTypeId:
      return (obj: clsSQLDSTypeEN) => {
        return obj.sqlDsTypeId === value;
      };
    case clsSQLDSTypeEN.con_SqlDsTypeName:
      return (obj: clsSQLDSTypeEN) => {
        return obj.sqlDsTypeName === value;
      };
    case clsSQLDSTypeEN.con_SqlDsTypeENName:
      return (obj: clsSQLDSTypeEN) => {
        return obj.sqlDsTypeENName === value;
      };
    case clsSQLDSTypeEN.con_Memo:
      return (obj: clsSQLDSTypeEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[SQLDSType]中不存在!(in ${sQLDSType_ConstructorName}.${strThisFuncName})`;
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
export async function SQLDSType_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsSQLDSTypeEN.con_SqlDsTypeId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsSQLDSTypeEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsSQLDSTypeEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strSqlDsTypeId = strInValue;
  if (IsNullOrEmpty(strSqlDsTypeId) == true) {
    return '';
  }
  const objSQLDSType = await SQLDSType_GetObjBySqlDsTypeIdCache(strSqlDsTypeId);
  if (objSQLDSType == null) return '';
  if (objSQLDSType.GetFldValue(strOutFldName) == null) return '';
  return objSQLDSType.GetFldValue(strOutFldName).toString();
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
export async function SQLDSType_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsSQLDSTypeEN.con_SqlDsTypeId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrSQLDSType = await SQLDSType_GetObjLstCache();
  if (arrSQLDSType == null) return [];
  let arrSQLDSTypeSel = arrSQLDSType;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrSQLDSTypeSel = arrSQLDSTypeSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrSQLDSTypeSel = arrSQLDSTypeSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrSQLDSTypeSel = arrSQLDSTypeSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrSQLDSTypeSel = arrSQLDSTypeSel.filter((x) => x.GetFldValue(strInFldName) == strInValue);
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrSQLDSTypeSel = arrSQLDSTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrSQLDSTypeSel = arrSQLDSTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrSQLDSTypeSel = arrSQLDSTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrSQLDSTypeSel = arrSQLDSTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrSQLDSTypeSel = arrSQLDSTypeSel.filter((x) => x.GetFldValue(strInFldName) > strInValue);
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrSQLDSTypeSel = arrSQLDSTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrSQLDSTypeSel.length == 0) return [];
  return arrSQLDSTypeSel.map((x) => x.sqlDsTypeId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function SQLDSType_GetFldValueAsync(
  strFldName: string,
  strWhereCond: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetFldValueAsync';
  const strAction = 'GetFldValue';
  const strUrl = GetWebApiUrl(sQLDSType_Controller, strAction);

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
        sQLDSType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sQLDSType_ConstructorName,
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
export async function SQLDSType_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(sQLDSType_Controller, strAction);

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
        sQLDSType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sQLDSType_ConstructorName,
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
export async function SQLDSType_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(sQLDSType_Controller, strAction);

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
        sQLDSType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sQLDSType_ConstructorName,
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
export async function SQLDSType_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsSQLDSTypeEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(sQLDSType_Controller, strAction);

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
      const objSQLDSType = SQLDSType_GetObjFromJsonObj(returnObj);
      return objSQLDSType;
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
        sQLDSType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sQLDSType_ConstructorName,
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
export async function SQLDSType_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsSQLDSTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsSQLDSTypeEN.WhereFormat) == false) {
    strWhereCond = clsSQLDSTypeEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsSQLDSTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsSQLDSTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrSQLDSTypeExObjLstCache: Array<clsSQLDSTypeEN> = CacheHelper.Get(strKey);
    const arrSQLDSTypeObjLstT = SQLDSType_GetObjLstByJSONObjLst(arrSQLDSTypeExObjLstCache);
    return arrSQLDSTypeObjLstT;
  }
  try {
    const arrSQLDSTypeExObjLst = await SQLDSType_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrSQLDSTypeExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrSQLDSTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrSQLDSTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      sQLDSType_ConstructorName,
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
export async function SQLDSType_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsSQLDSTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsSQLDSTypeEN.WhereFormat) == false) {
    strWhereCond = clsSQLDSTypeEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsSQLDSTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsSQLDSTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrSQLDSTypeExObjLstCache: Array<clsSQLDSTypeEN> = JSON.parse(strTempObjLst);
    const arrSQLDSTypeObjLstT = SQLDSType_GetObjLstByJSONObjLst(arrSQLDSTypeExObjLstCache);
    return arrSQLDSTypeObjLstT;
  }
  try {
    const arrSQLDSTypeExObjLst = await SQLDSType_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrSQLDSTypeExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrSQLDSTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrSQLDSTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      sQLDSType_ConstructorName,
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
export async function SQLDSType_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsSQLDSTypeEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrSQLDSTypeObjLstCache: Array<clsSQLDSTypeEN> = JSON.parse(strTempObjLst);
    return arrSQLDSTypeObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function SQLDSType_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsSQLDSTypeEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(sQLDSType_Controller, strAction);

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
          sQLDSType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = SQLDSType_GetObjLstByJSONObjLst(returnObjLst);
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
        sQLDSType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sQLDSType_ConstructorName,
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
export async function SQLDSType_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsSQLDSTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsSQLDSTypeEN.WhereFormat) == false) {
    strWhereCond = clsSQLDSTypeEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsSQLDSTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsSQLDSTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrSQLDSTypeExObjLstCache: Array<clsSQLDSTypeEN> = JSON.parse(strTempObjLst);
    const arrSQLDSTypeObjLstT = SQLDSType_GetObjLstByJSONObjLst(arrSQLDSTypeExObjLstCache);
    return arrSQLDSTypeObjLstT;
  }
  try {
    const arrSQLDSTypeExObjLst = await SQLDSType_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrSQLDSTypeExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrSQLDSTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrSQLDSTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      sQLDSType_ConstructorName,
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
export async function SQLDSType_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsSQLDSTypeEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrSQLDSTypeObjLstCache: Array<clsSQLDSTypeEN> = JSON.parse(strTempObjLst);
    return arrSQLDSTypeObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function SQLDSType_GetObjLstCache(): Promise<Array<clsSQLDSTypeEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrSQLDSTypeObjLstCache;
  switch (clsSQLDSTypeEN.CacheModeId) {
    case '04': //sessionStorage
      arrSQLDSTypeObjLstCache = await SQLDSType_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrSQLDSTypeObjLstCache = await SQLDSType_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrSQLDSTypeObjLstCache = await SQLDSType_GetObjLstClientCache();
      break;
    default:
      arrSQLDSTypeObjLstCache = await SQLDSType_GetObjLstClientCache();
      break;
  }
  return arrSQLDSTypeObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function SQLDSType_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrSQLDSTypeObjLstCache;
  switch (clsSQLDSTypeEN.CacheModeId) {
    case '04': //sessionStorage
      arrSQLDSTypeObjLstCache = await SQLDSType_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrSQLDSTypeObjLstCache = await SQLDSType_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrSQLDSTypeObjLstCache = null;
      break;
    default:
      arrSQLDSTypeObjLstCache = null;
      break;
  }
  return arrSQLDSTypeObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrSqlDsTypeIdCond:条件对象
 * @returns 对象列表子集
 */
export async function SQLDSType_GetSubObjLstCache(objSQLDSTypeCond: ConditionCollection) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrSQLDSTypeObjLstCache = await SQLDSType_GetObjLstCache();
  let arrSQLDSTypeSel = arrSQLDSTypeObjLstCache;
  if (objSQLDSTypeCond.GetConditions().length == 0) return arrSQLDSTypeSel;
  try {
    //console.log(sstrKeys);
    for (const objCondition of objSQLDSTypeCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrSQLDSTypeSel = arrSQLDSTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrSQLDSTypeSel = arrSQLDSTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrSQLDSTypeSel = arrSQLDSTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrSQLDSTypeSel = arrSQLDSTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrSQLDSTypeSel = arrSQLDSTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrSQLDSTypeSel = arrSQLDSTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrSQLDSTypeSel = arrSQLDSTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrSQLDSTypeSel = arrSQLDSTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrSQLDSTypeSel = arrSQLDSTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrSQLDSTypeSel = arrSQLDSTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrSQLDSTypeSel = arrSQLDSTypeSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrSQLDSTypeSel = arrSQLDSTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrSQLDSTypeSel = arrSQLDSTypeSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrSQLDSTypeSel = arrSQLDSTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrSQLDSTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objSQLDSTypeCond),
      sQLDSType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsSQLDSTypeEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrSqlDsTypeId:关键字列表
 * @returns 对象列表
 **/
export async function SQLDSType_GetObjLstBySqlDsTypeIdLstAsync(
  arrSqlDsTypeId: Array<string>,
): Promise<Array<clsSQLDSTypeEN>> {
  const strThisFuncName = 'GetObjLstBySqlDsTypeIdLstAsync';
  const strAction = 'GetObjLstBySqlDsTypeIdLst';
  const strUrl = GetWebApiUrl(sQLDSType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrSqlDsTypeId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          sQLDSType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = SQLDSType_GetObjLstByJSONObjLst(returnObjLst);
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
        sQLDSType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sQLDSType_ConstructorName,
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
 * @param arrstrSqlDsTypeIdLst:关键字列表
 * @returns 对象列表
 */
export async function SQLDSType_GetObjLstBySqlDsTypeIdLstCache(arrSqlDsTypeIdLst: Array<string>) {
  const strThisFuncName = 'GetObjLstBySqlDsTypeIdLstCache';
  try {
    const arrSQLDSTypeObjLstCache = await SQLDSType_GetObjLstCache();
    const arrSQLDSTypeSel = arrSQLDSTypeObjLstCache.filter(
      (x) => arrSqlDsTypeIdLst.indexOf(x.sqlDsTypeId) > -1,
    );
    return arrSQLDSTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrSqlDsTypeIdLst.join(','),
      sQLDSType_ConstructorName,
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
export async function SQLDSType_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsSQLDSTypeEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(sQLDSType_Controller, strAction);

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
          sQLDSType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = SQLDSType_GetObjLstByJSONObjLst(returnObjLst);
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
        sQLDSType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sQLDSType_ConstructorName,
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
export async function SQLDSType_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsSQLDSTypeEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(sQLDSType_Controller, strAction);

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
          sQLDSType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = SQLDSType_GetObjLstByJSONObjLst(returnObjLst);
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
        sQLDSType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sQLDSType_ConstructorName,
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
export async function SQLDSType_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsSQLDSTypeEN>();
  const arrSQLDSTypeObjLstCache = await SQLDSType_GetObjLstCache();
  if (arrSQLDSTypeObjLstCache.length == 0) return arrSQLDSTypeObjLstCache;
  let arrSQLDSTypeSel = arrSQLDSTypeObjLstCache;
  const objSQLDSTypeCond = objPagerPara.conditionCollection;
  if (objSQLDSTypeCond == null) {
    const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return new Array<clsSQLDSTypeEN>();
  }
  //console.log("clsSQLDSTypeWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    for (const objCondition of objSQLDSTypeCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrSQLDSTypeSel = arrSQLDSTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrSQLDSTypeSel = arrSQLDSTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrSQLDSTypeSel = arrSQLDSTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrSQLDSTypeSel = arrSQLDSTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrSQLDSTypeSel = arrSQLDSTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrSQLDSTypeSel = arrSQLDSTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrSQLDSTypeSel = arrSQLDSTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrSQLDSTypeSel = arrSQLDSTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrSQLDSTypeSel = arrSQLDSTypeSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrSQLDSTypeSel = arrSQLDSTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrSQLDSTypeSel = arrSQLDSTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrSQLDSTypeSel = arrSQLDSTypeSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrSQLDSTypeSel = arrSQLDSTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrSQLDSTypeSel = arrSQLDSTypeSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrSQLDSTypeSel = arrSQLDSTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrSQLDSTypeSel.length == 0) return arrSQLDSTypeSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrSQLDSTypeSel = arrSQLDSTypeSel.sort(SQLDSType_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrSQLDSTypeSel = arrSQLDSTypeSel.sort(objPagerPara.sortFun);
    }
    arrSQLDSTypeSel = arrSQLDSTypeSel.slice(intStart, intEnd);
    return arrSQLDSTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      sQLDSType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsSQLDSTypeEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function SQLDSType_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsSQLDSTypeEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsSQLDSTypeEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(sQLDSType_Controller, strAction);

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
          sQLDSType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = SQLDSType_GetObjLstByJSONObjLst(returnObjLst);
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
        sQLDSType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sQLDSType_ConstructorName,
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
 * @param strSqlDsTypeId:关键字
 * @returns 获取删除的结果
 **/
export async function SQLDSType_DelRecordAsync(strSqlDsTypeId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(sQLDSType_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strSqlDsTypeId);

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
        sQLDSType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sQLDSType_ConstructorName,
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
 * @param arrSqlDsTypeId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function SQLDSType_DelSQLDSTypesAsync(arrSqlDsTypeId: Array<string>): Promise<number> {
  const strThisFuncName = 'DelSQLDSTypesAsync';
  const strAction = 'DelSQLDSTypes';
  const strUrl = GetWebApiUrl(sQLDSType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrSqlDsTypeId, config);
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
        sQLDSType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sQLDSType_ConstructorName,
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
export async function SQLDSType_DelSQLDSTypesByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'DelSQLDSTypesByCondAsync';
  const strAction = 'DelSQLDSTypesByCond';
  const strUrl = GetWebApiUrl(sQLDSType_Controller, strAction);

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
        sQLDSType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sQLDSType_ConstructorName,
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
 * @param objSQLDSTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function SQLDSType_AddNewRecordAsync(
  objSQLDSTypeEN: clsSQLDSTypeEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  if (objSQLDSTypeEN.sqlDsTypeId === null || objSQLDSTypeEN.sqlDsTypeId === '') {
    const strMsg = '需要的对象的关键字为空,不能添加!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objSQLDSTypeEN);
  const strUrl = GetWebApiUrl(sQLDSType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objSQLDSTypeEN, config);
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
        sQLDSType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sQLDSType_ConstructorName,
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
 * @param objSQLDSTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function SQLDSType_AddNewRecordWithMaxIdAsync(
  objSQLDSTypeEN: clsSQLDSTypeEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(sQLDSType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objSQLDSTypeEN, config);
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
        sQLDSType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sQLDSType_ConstructorName,
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
export async function SQLDSType_AddNewObjSave(
  objSQLDSTypeEN: clsSQLDSTypeEN,
): Promise<AddRecordResult> {
  const strThisFuncName = 'AddNewObjSave';
  try {
    SQLDSType_CheckPropertyNew(objSQLDSTypeEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${sQLDSType_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    alert(strMsg);
    return { keyword: '', success: false }; //一定要有一个返回值,否则会出错!
  }
  try {
    //检查唯一性条件
    let returnBool = false;
    const bolIsExist = await SQLDSType_IsExistAsync(objSQLDSTypeEN.sqlDsTypeId);
    if (bolIsExist == true) {
      const strMsg = Format('添加记录时,关键字：{0}已经存在!', objSQLDSTypeEN.sqlDsTypeId);
      console.error(strMsg);
      throw strMsg;
    }
    returnBool = await SQLDSType_AddNewRecordAsync(objSQLDSTypeEN);
    if (returnBool == true) {
      SQLDSType_ReFreshCache();
    } else {
      const strInfo = `添加[数据源类型(SQLDSType)]记录不成功!`;
      //显示信息框
      throw strInfo;
    }
    return { keyword: objSQLDSTypeEN.sqlDsTypeId, success: returnBool }; //一定要有一个返回值,否则会出错!
  } catch (e) {
    const strMsg = `添加记录不成功,${e}.(in ${sQLDSType_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/** 修改记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjSave)
 **/
export async function SQLDSType_UpdateObjSave(objSQLDSTypeEN: clsSQLDSTypeEN): Promise<boolean> {
  const strThisFuncName = 'UpdateObjSave';
  objSQLDSTypeEN.sfUpdFldSetStr = objSQLDSTypeEN.updFldString; //设置哪些字段被修改(脏字段)
  if (objSQLDSTypeEN.sqlDsTypeId == '' || objSQLDSTypeEN.sqlDsTypeId == undefined) {
    console.error('关键字不能为空!');
    throw '关键字不能为空!';
  }
  try {
    SQLDSType_CheckProperty4Update(objSQLDSTypeEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${sQLDSType_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
  try {
    //检查唯一性条件
    const returnBool = await SQLDSType_UpdateRecordAsync(objSQLDSTypeEN);
    if (returnBool == true) {
      SQLDSType_ReFreshCache();
    }
    return returnBool;
  } catch (e) {
    const strMsg = `修改记录不成功,${e}.(in ${sQLDSType_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objSQLDSTypeEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function SQLDSType_AddNewRecordWithReturnKeyAsync(
  objSQLDSTypeEN: clsSQLDSTypeEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(sQLDSType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objSQLDSTypeEN, config);
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
        sQLDSType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sQLDSType_ConstructorName,
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
 * @param objSQLDSTypeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function SQLDSType_UpdateRecordAsync(
  objSQLDSTypeEN: clsSQLDSTypeEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objSQLDSTypeEN.sfUpdFldSetStr === undefined ||
    objSQLDSTypeEN.sfUpdFldSetStr === null ||
    objSQLDSTypeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objSQLDSTypeEN.sqlDsTypeId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(sQLDSType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objSQLDSTypeEN, config);
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
        sQLDSType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sQLDSType_ConstructorName,
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
 * @param objSQLDSTypeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function SQLDSType_EditRecordExAsync(
  objSQLDSTypeEN: clsSQLDSTypeEN,
): Promise<boolean> {
  const strThisFuncName = 'EditRecordExAsync';
  const strAction = 'EditRecordEx';
  if (
    objSQLDSTypeEN.sfUpdFldSetStr === undefined ||
    objSQLDSTypeEN.sfUpdFldSetStr === null ||
    objSQLDSTypeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objSQLDSTypeEN.sqlDsTypeId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(sQLDSType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objSQLDSTypeEN, config);
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
        sQLDSType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sQLDSType_ConstructorName,
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
 * @param objSQLDSTypeEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function SQLDSType_UpdateWithConditionAsync(
  objSQLDSTypeEN: clsSQLDSTypeEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objSQLDSTypeEN.sfUpdFldSetStr === undefined ||
    objSQLDSTypeEN.sfUpdFldSetStr === null ||
    objSQLDSTypeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objSQLDSTypeEN.sqlDsTypeId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(sQLDSType_Controller, strAction);
  objSQLDSTypeEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objSQLDSTypeEN, config);
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
        sQLDSType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sQLDSType_ConstructorName,
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
 * @param objstrSqlDsTypeIdCond:条件对象
 * @returns 对象列表子集
 */
export async function SQLDSType_IsExistRecordCache(objSQLDSTypeCond: ConditionCollection) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrSQLDSTypeObjLstCache = await SQLDSType_GetObjLstCache();
  if (arrSQLDSTypeObjLstCache == null) return false;
  let arrSQLDSTypeSel = arrSQLDSTypeObjLstCache;
  if (objSQLDSTypeCond.GetConditions().length == 0)
    return arrSQLDSTypeSel.length > 0 ? true : false;
  try {
    for (const objCondition of objSQLDSTypeCond.GetConditions()) {
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
            arrSQLDSTypeSel = arrSQLDSTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrSQLDSTypeSel = arrSQLDSTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrSQLDSTypeSel = arrSQLDSTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrSQLDSTypeSel = arrSQLDSTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrSQLDSTypeSel = arrSQLDSTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrSQLDSTypeSel = arrSQLDSTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrSQLDSTypeSel = arrSQLDSTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrSQLDSTypeSel = arrSQLDSTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrSQLDSTypeSel = arrSQLDSTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrSQLDSTypeSel = arrSQLDSTypeSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrSQLDSTypeSel = arrSQLDSTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrSQLDSTypeSel = arrSQLDSTypeSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrSQLDSTypeSel = arrSQLDSTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrSQLDSTypeSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objSQLDSTypeCond),
      sQLDSType_ConstructorName,
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
export async function SQLDSType_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(sQLDSType_Controller, strAction);

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
        sQLDSType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sQLDSType_ConstructorName,
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
 * @param strSqlDsTypeId:所给的关键字
 * @returns 对象
 */
export async function SQLDSType_IsExistCache(strSqlDsTypeId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrSQLDSTypeObjLstCache = await SQLDSType_GetObjLstCache();
  if (arrSQLDSTypeObjLstCache == null) return false;
  try {
    const arrSQLDSTypeSel = arrSQLDSTypeObjLstCache.filter((x) => x.sqlDsTypeId == strSqlDsTypeId);
    if (arrSQLDSTypeSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strSqlDsTypeId,
      sQLDSType_ConstructorName,
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
 * @param strSqlDsTypeId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function SQLDSType_IsExistAsync(strSqlDsTypeId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(sQLDSType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strSqlDsTypeId,
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
        sQLDSType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sQLDSType_ConstructorName,
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
export async function SQLDSType_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(sQLDSType_Controller, strAction);

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
        sQLDSType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sQLDSType_ConstructorName,
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
 * @param objSQLDSTypeCond:条件对象
 * @returns 对象列表记录数
 */
export async function SQLDSType_GetRecCountByCondCache(objSQLDSTypeCond: ConditionCollection) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrSQLDSTypeObjLstCache = await SQLDSType_GetObjLstCache();
  if (arrSQLDSTypeObjLstCache == null) return 0;
  let arrSQLDSTypeSel = arrSQLDSTypeObjLstCache;
  if (objSQLDSTypeCond.GetConditions().length == 0) return arrSQLDSTypeSel.length;
  try {
    for (const objCondition of objSQLDSTypeCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrSQLDSTypeSel = arrSQLDSTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrSQLDSTypeSel = arrSQLDSTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrSQLDSTypeSel = arrSQLDSTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrSQLDSTypeSel = arrSQLDSTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrSQLDSTypeSel = arrSQLDSTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrSQLDSTypeSel = arrSQLDSTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrSQLDSTypeSel = arrSQLDSTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrSQLDSTypeSel = arrSQLDSTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrSQLDSTypeSel = arrSQLDSTypeSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrSQLDSTypeSel = arrSQLDSTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrSQLDSTypeSel = arrSQLDSTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrSQLDSTypeSel = arrSQLDSTypeSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrSQLDSTypeSel = arrSQLDSTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrSQLDSTypeSel = arrSQLDSTypeSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrSQLDSTypeSel = arrSQLDSTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrSQLDSTypeSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objSQLDSTypeCond),
      sQLDSType_ConstructorName,
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
export async function SQLDSType_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(sQLDSType_Controller, strAction);

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
        sQLDSType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sQLDSType_ConstructorName,
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
export function SQLDSType_GetWebApiUrl(strController: string, strAction: string): string {
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
export function SQLDSType_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功!');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clsSQLDSTypeEN._CurrTabName;
  switch (clsSQLDSTypeEN.CacheModeId) {
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
  clsSQLDSTypeEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
}

/**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export function SQLDSType_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsSQLDSTypeEN._CurrTabName;
    switch (clsSQLDSTypeEN.CacheModeId) {
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
    clsSQLDSTypeEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export function SQLDSType_GetLastRefreshTime(): string {
  if (clsSQLDSTypeEN._RefreshTimeLst.length == 0) return '';
  return clsSQLDSTypeEN._RefreshTimeLst[clsSQLDSTypeEN._RefreshTimeLst.length - 1];
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export async function SQLDSType_BindDdl_SqlDsTypeIdInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
) {
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_SqlDsTypeIdInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_SqlDsTypeIdInDivCache");
  const arrObjLstSel = await SQLDSType_GetObjLstCache();
  if (arrObjLstSel == null) return;
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsSQLDSTypeEN.con_SqlDsTypeId,
    clsSQLDSTypeEN.con_SqlDsTypeName,
    '选数据源...',
  );
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export async function SQLDSType_GetArrSQLDSType() {
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_SqlDsTypeIdInDivCache");
  const arrSQLDSType = new Array<clsSQLDSTypeEN>();
  const arrObjLstSel = await SQLDSType_GetObjLstCache();
  if (arrObjLstSel == null) return null;
  const obj0 = new clsSQLDSTypeEN();
  obj0.sqlDsTypeId = '0';
  obj0.sqlDsTypeName = '选数据源...';
  arrSQLDSType.push(obj0);
  arrObjLstSel.forEach((x) => arrSQLDSType.push(x));
  return arrSQLDSType;
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function SQLDSType_CheckPropertyNew(pobjSQLDSTypeEN: clsSQLDSTypeEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjSQLDSTypeEN.sqlDsTypeName) === true) {
    throw new Error(
      `(errid:Watl000411)字段[Sql数据源名]不能为空(In 数据源类型)!(clsSQLDSTypeBL:CheckPropertyNew0)`,
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjSQLDSTypeEN.sqlDsTypeId) == false &&
    GetStrLen(pobjSQLDSTypeEN.sqlDsTypeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000413)字段[数据源类型Id(sqlDsTypeId)]的长度不能超过2(In 数据源类型(SQLDSType))!值:${pobjSQLDSTypeEN.sqlDsTypeId}(clsSQLDSTypeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjSQLDSTypeEN.sqlDsTypeName) == false &&
    GetStrLen(pobjSQLDSTypeEN.sqlDsTypeName) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[Sql数据源名(sqlDsTypeName)]的长度不能超过20(In 数据源类型(SQLDSType))!值:${pobjSQLDSTypeEN.sqlDsTypeName}(clsSQLDSTypeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjSQLDSTypeEN.sqlDsTypeENName) == false &&
    GetStrLen(pobjSQLDSTypeEN.sqlDsTypeENName) > 50
  ) {
    throw new Error(
      `(errid:Watl000413)字段[Sql数据源英文名(sqlDsTypeENName)]的长度不能超过50(In 数据源类型(SQLDSType))!值:${pobjSQLDSTypeEN.sqlDsTypeENName}(clsSQLDSTypeBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjSQLDSTypeEN.memo) == false && GetStrLen(pobjSQLDSTypeEN.memo) > 1000) {
    throw new Error(
      `(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In 数据源类型(SQLDSType))!值:${pobjSQLDSTypeEN.memo}(clsSQLDSTypeBL:CheckPropertyNew)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjSQLDSTypeEN.sqlDsTypeId) == false &&
    undefined !== pobjSQLDSTypeEN.sqlDsTypeId &&
    tzDataType.isString(pobjSQLDSTypeEN.sqlDsTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[数据源类型Id(sqlDsTypeId)]的值:[${pobjSQLDSTypeEN.sqlDsTypeId}], 非法,应该为字符型(In 数据源类型(SQLDSType))!(clsSQLDSTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjSQLDSTypeEN.sqlDsTypeName) == false &&
    undefined !== pobjSQLDSTypeEN.sqlDsTypeName &&
    tzDataType.isString(pobjSQLDSTypeEN.sqlDsTypeName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[Sql数据源名(sqlDsTypeName)]的值:[${pobjSQLDSTypeEN.sqlDsTypeName}], 非法,应该为字符型(In 数据源类型(SQLDSType))!(clsSQLDSTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjSQLDSTypeEN.sqlDsTypeENName) == false &&
    undefined !== pobjSQLDSTypeEN.sqlDsTypeENName &&
    tzDataType.isString(pobjSQLDSTypeEN.sqlDsTypeENName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[Sql数据源英文名(sqlDsTypeENName)]的值:[${pobjSQLDSTypeEN.sqlDsTypeENName}], 非法,应该为字符型(In 数据源类型(SQLDSType))!(clsSQLDSTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjSQLDSTypeEN.memo) == false &&
    undefined !== pobjSQLDSTypeEN.memo &&
    tzDataType.isString(pobjSQLDSTypeEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[说明(memo)]的值:[${pobjSQLDSTypeEN.memo}], 非法,应该为字符型(In 数据源类型(SQLDSType))!(clsSQLDSTypeBL:CheckPropertyNew0)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function SQLDSType_CheckProperty4Update(pobjSQLDSTypeEN: clsSQLDSTypeEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjSQLDSTypeEN.sqlDsTypeId) == false &&
    GetStrLen(pobjSQLDSTypeEN.sqlDsTypeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000416)字段[数据源类型Id(sqlDsTypeId)]的长度不能超过2(In 数据源类型(SQLDSType))!值:${pobjSQLDSTypeEN.sqlDsTypeId}(clsSQLDSTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjSQLDSTypeEN.sqlDsTypeName) == false &&
    GetStrLen(pobjSQLDSTypeEN.sqlDsTypeName) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[Sql数据源名(sqlDsTypeName)]的长度不能超过20(In 数据源类型(SQLDSType))!值:${pobjSQLDSTypeEN.sqlDsTypeName}(clsSQLDSTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjSQLDSTypeEN.sqlDsTypeENName) == false &&
    GetStrLen(pobjSQLDSTypeEN.sqlDsTypeENName) > 50
  ) {
    throw new Error(
      `(errid:Watl000416)字段[Sql数据源英文名(sqlDsTypeENName)]的长度不能超过50(In 数据源类型(SQLDSType))!值:${pobjSQLDSTypeEN.sqlDsTypeENName}(clsSQLDSTypeBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjSQLDSTypeEN.memo) == false && GetStrLen(pobjSQLDSTypeEN.memo) > 1000) {
    throw new Error(
      `(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In 数据源类型(SQLDSType))!值:${pobjSQLDSTypeEN.memo}(clsSQLDSTypeBL:CheckProperty4Update)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjSQLDSTypeEN.sqlDsTypeId) == false &&
    undefined !== pobjSQLDSTypeEN.sqlDsTypeId &&
    tzDataType.isString(pobjSQLDSTypeEN.sqlDsTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[数据源类型Id(sqlDsTypeId)]的值:[${pobjSQLDSTypeEN.sqlDsTypeId}], 非法,应该为字符型(In 数据源类型(SQLDSType))!(clsSQLDSTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjSQLDSTypeEN.sqlDsTypeName) == false &&
    undefined !== pobjSQLDSTypeEN.sqlDsTypeName &&
    tzDataType.isString(pobjSQLDSTypeEN.sqlDsTypeName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[Sql数据源名(sqlDsTypeName)]的值:[${pobjSQLDSTypeEN.sqlDsTypeName}], 非法,应该为字符型(In 数据源类型(SQLDSType))!(clsSQLDSTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjSQLDSTypeEN.sqlDsTypeENName) == false &&
    undefined !== pobjSQLDSTypeEN.sqlDsTypeENName &&
    tzDataType.isString(pobjSQLDSTypeEN.sqlDsTypeENName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[Sql数据源英文名(sqlDsTypeENName)]的值:[${pobjSQLDSTypeEN.sqlDsTypeENName}], 非法,应该为字符型(In 数据源类型(SQLDSType))!(clsSQLDSTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjSQLDSTypeEN.memo) == false &&
    undefined !== pobjSQLDSTypeEN.memo &&
    tzDataType.isString(pobjSQLDSTypeEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[说明(memo)]的值:[${pobjSQLDSTypeEN.memo}], 非法,应该为字符型(In 数据源类型(SQLDSType))!(clsSQLDSTypeBL:CheckProperty4Update)`,
    );
  }
  //检查主键是否为Null或者空!
  if (
    IsNullOrEmpty(pobjSQLDSTypeEN.sqlDsTypeId) === true ||
    pobjSQLDSTypeEN.sqlDsTypeId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000064)字段[数据源类型Id]不能为空(In 数据源类型)!(clsSQLDSTypeBL:CheckProperty4Update)`,
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
export function SQLDSType_GetJSONStrByObj(pobjSQLDSTypeEN: clsSQLDSTypeEN): string {
  pobjSQLDSTypeEN.sfUpdFldSetStr = pobjSQLDSTypeEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjSQLDSTypeEN);
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
export function SQLDSType_GetObjLstByJSONStr(strJSON: string): Array<clsSQLDSTypeEN> {
  let arrSQLDSTypeObjLst = new Array<clsSQLDSTypeEN>();
  if (strJSON === '') {
    return arrSQLDSTypeObjLst;
  }
  try {
    arrSQLDSTypeObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrSQLDSTypeObjLst;
  }
  return arrSQLDSTypeObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-05-04
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrSQLDSTypeObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function SQLDSType_GetObjLstByJSONObjLst(
  arrSQLDSTypeObjLstS: Array<clsSQLDSTypeEN>,
): Array<clsSQLDSTypeEN> {
  const arrSQLDSTypeObjLst = new Array<clsSQLDSTypeEN>();
  for (const objInFor of arrSQLDSTypeObjLstS) {
    const obj1 = SQLDSType_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrSQLDSTypeObjLst.push(obj1);
  }
  return arrSQLDSTypeObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-05-04
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function SQLDSType_GetObjByJSONStr(strJSON: string): clsSQLDSTypeEN {
  let pobjSQLDSTypeEN = new clsSQLDSTypeEN();
  if (strJSON === '') {
    return pobjSQLDSTypeEN;
  }
  try {
    pobjSQLDSTypeEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjSQLDSTypeEN;
  }
  return pobjSQLDSTypeEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function SQLDSType_GetCombineCondition(objSQLDSTypeCond: clsSQLDSTypeEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objSQLDSTypeCond.dicFldComparisonOp,
      clsSQLDSTypeEN.con_SqlDsTypeId,
    ) == true
  ) {
    const strComparisonOpSqlDsTypeId: string =
      objSQLDSTypeCond.dicFldComparisonOp[clsSQLDSTypeEN.con_SqlDsTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSQLDSTypeEN.con_SqlDsTypeId,
      objSQLDSTypeCond.sqlDsTypeId,
      strComparisonOpSqlDsTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSQLDSTypeCond.dicFldComparisonOp,
      clsSQLDSTypeEN.con_SqlDsTypeName,
    ) == true
  ) {
    const strComparisonOpSqlDsTypeName: string =
      objSQLDSTypeCond.dicFldComparisonOp[clsSQLDSTypeEN.con_SqlDsTypeName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSQLDSTypeEN.con_SqlDsTypeName,
      objSQLDSTypeCond.sqlDsTypeName,
      strComparisonOpSqlDsTypeName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSQLDSTypeCond.dicFldComparisonOp,
      clsSQLDSTypeEN.con_SqlDsTypeENName,
    ) == true
  ) {
    const strComparisonOpSqlDsTypeENName: string =
      objSQLDSTypeCond.dicFldComparisonOp[clsSQLDSTypeEN.con_SqlDsTypeENName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSQLDSTypeEN.con_SqlDsTypeENName,
      objSQLDSTypeCond.sqlDsTypeENName,
      strComparisonOpSqlDsTypeENName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSQLDSTypeCond.dicFldComparisonOp,
      clsSQLDSTypeEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objSQLDSTypeCond.dicFldComparisonOp[clsSQLDSTypeEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSQLDSTypeEN.con_Memo,
      objSQLDSTypeCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objSQLDSTypeENS:源对象
 * @param objSQLDSTypeENT:目标对象
 */
export function SQLDSType_GetObjFromJsonObj(objSQLDSTypeENS: clsSQLDSTypeEN): clsSQLDSTypeEN {
  const objSQLDSTypeENT: clsSQLDSTypeEN = new clsSQLDSTypeEN();
  ObjectAssign(objSQLDSTypeENT, objSQLDSTypeENS);
  return objSQLDSTypeENT;
}
