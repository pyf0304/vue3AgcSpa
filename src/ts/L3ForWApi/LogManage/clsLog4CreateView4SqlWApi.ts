/**
 * 类名:clsLog4CreateView4SqlWApi
 * 表名:Log4CreateView4Sql(00050294)
 * 版本:2023.10.12.1(服务器:WIN-SRV103-116)
 * 日期:2023/10/12 14:39:19
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:日志管理(LogManage)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 建立视图日志(Log4CreateView4Sql)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2023年10月12日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { CacheHelper } from '@/ts/PubFun/CacheHelper';
import {
  GetObjKeys,
  GetExceptionStr,
  myShowErrorMsg,
  ObjectAssign,
} from '@/ts/PubFun/clsCommFunc4Web';
import { clsLog4CreateView4SqlEN } from '@/ts/L0Entity/LogManage/clsLog4CreateView4SqlEN';
import { GetStrLen, tzDataType, Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const log4CreateView4Sql_Controller = 'Log4CreateView4SqlApi';
export const log4CreateView4Sql_ConstructorName = 'log4CreateView4Sql';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngmId:关键字
 * @returns 对象
 **/
export async function Log4CreateView4Sql_GetObjBymIdAsync(
  lngmId: number,
): Promise<clsLog4CreateView4SqlEN | null> {
  const strThisFuncName = 'GetObjBymIdAsync';

  if (lngmId == 0) {
    const strMsg = Format('参数:[lngmId]不能为空!(In clsLog4CreateView4SqlWApi.GetObjBymIdAsync)');
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjBymId';
  const strUrl = GetWebApiUrl(log4CreateView4Sql_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      lngmId,
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
      const objLog4CreateView4Sql = Log4CreateView4Sql_GetObjFromJsonObj(returnObj);
      return objLog4CreateView4Sql;
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
        log4CreateView4Sql_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        log4CreateView4Sql_ConstructorName,
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
 * @param lngmId:所给的关键字
 * @returns 对象
 */
export async function Log4CreateView4Sql_GetObjBymIdCache(lngmId: number, bolTryAsyncOnce = true) {
  const strThisFuncName = 'GetObjBymIdCache';

  if (lngmId == 0) {
    const strMsg = Format('参数:[lngmId]不能为空!(In clsLog4CreateView4SqlWApi.GetObjBymIdCache)');
    console.error(strMsg);
    throw strMsg;
  }
  const arrLog4CreateView4SqlObjLstCache = await Log4CreateView4Sql_GetObjLstCache();
  try {
    const arrLog4CreateView4SqlSel = arrLog4CreateView4SqlObjLstCache.filter(
      (x) => x.mId == lngmId,
    );
    let objLog4CreateView4Sql: clsLog4CreateView4SqlEN;
    if (arrLog4CreateView4SqlSel.length > 0) {
      objLog4CreateView4Sql = arrLog4CreateView4SqlSel[0];
      return objLog4CreateView4Sql;
    } else {
      if (bolTryAsyncOnce == true) {
        const objLog4CreateView4SqlConst = await Log4CreateView4Sql_GetObjBymIdAsync(lngmId);
        if (objLog4CreateView4SqlConst != null) {
          Log4CreateView4Sql_ReFreshThisCache();
          return objLog4CreateView4SqlConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      lngmId,
      log4CreateView4Sql_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param lngmId:所给的关键字
 * @returns 对象
 */
export async function Log4CreateView4Sql_GetObjBymIdlocalStorage(lngmId: number) {
  const strThisFuncName = 'GetObjBymIdlocalStorage';

  if (lngmId == 0) {
    const strMsg = Format(
      '参数:[lngmId]不能为空!(In clsLog4CreateView4SqlWApi.GetObjBymIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsLog4CreateView4SqlEN._CurrTabName, lngmId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objLog4CreateView4SqlCache: clsLog4CreateView4SqlEN = JSON.parse(strTempObj);
    return objLog4CreateView4SqlCache;
  }
  try {
    const objLog4CreateView4Sql = await Log4CreateView4Sql_GetObjBymIdAsync(lngmId);
    if (objLog4CreateView4Sql != null) {
      localStorage.setItem(strKey, JSON.stringify(objLog4CreateView4Sql));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objLog4CreateView4Sql;
    }
    return objLog4CreateView4Sql;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      lngmId,
      log4CreateView4Sql_ConstructorName,
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
 * @param objLog4CreateView4Sql:所给的对象
 * @returns 对象
 */
export async function Log4CreateView4Sql_UpdateObjInLstCache(
  objLog4CreateView4Sql: clsLog4CreateView4SqlEN,
) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrLog4CreateView4SqlObjLstCache = await Log4CreateView4Sql_GetObjLstCache();
    const obj = arrLog4CreateView4SqlObjLstCache.find(
      (x) =>
        x.prjId == objLog4CreateView4Sql.prjId &&
        x.prjDataBaseId == objLog4CreateView4Sql.prjDataBaseId &&
        x.sqlViewId == objLog4CreateView4Sql.sqlViewId,
    );
    if (obj != null) {
      objLog4CreateView4Sql.mId = obj.mId;
      ObjectAssign(obj, objLog4CreateView4Sql);
    } else {
      arrLog4CreateView4SqlObjLstCache.push(objLog4CreateView4Sql);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      log4CreateView4Sql_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/*该表没有名称字段,不能生成此函数!*/

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
export async function Log4CreateView4Sql_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsLog4CreateView4SqlEN.con_mId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsLog4CreateView4SqlEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsLog4CreateView4SqlEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const lngmId = Number(strInValue);
  if (lngmId == 0) {
    return '';
  }
  const objLog4CreateView4Sql = await Log4CreateView4Sql_GetObjBymIdCache(lngmId);
  if (objLog4CreateView4Sql == null) return '';
  if (objLog4CreateView4Sql.GetFldValue(strOutFldName) == null) return '';
  return objLog4CreateView4Sql.GetFldValue(strOutFldName).toString();
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
export function Log4CreateView4Sql_SortFunDefa(
  a: clsLog4CreateView4SqlEN,
  b: clsLog4CreateView4SqlEN,
): number {
  return a.mId - b.mId;
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
export function Log4CreateView4Sql_SortFunDefa2Fld(
  a: clsLog4CreateView4SqlEN,
  b: clsLog4CreateView4SqlEN,
): number {
  if (a.sqlViewId == b.sqlViewId) return a.prjDataBaseId.localeCompare(b.prjDataBaseId);
  else return a.sqlViewId.localeCompare(b.sqlViewId);
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
export function Log4CreateView4Sql_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsLog4CreateView4SqlEN.con_mId:
        return (a: clsLog4CreateView4SqlEN, b: clsLog4CreateView4SqlEN) => {
          return a.mId - b.mId;
        };
      case clsLog4CreateView4SqlEN.con_SqlViewId:
        return (a: clsLog4CreateView4SqlEN, b: clsLog4CreateView4SqlEN) => {
          return a.sqlViewId.localeCompare(b.sqlViewId);
        };
      case clsLog4CreateView4SqlEN.con_PrjDataBaseId:
        return (a: clsLog4CreateView4SqlEN, b: clsLog4CreateView4SqlEN) => {
          return a.prjDataBaseId.localeCompare(b.prjDataBaseId);
        };
      case clsLog4CreateView4SqlEN.con_CreateViewDate:
        return (a: clsLog4CreateView4SqlEN, b: clsLog4CreateView4SqlEN) => {
          if (a.createViewDate == null) return -1;
          if (b.createViewDate == null) return 1;
          return a.createViewDate.localeCompare(b.createViewDate);
        };
      case clsLog4CreateView4SqlEN.con_PrjId:
        return (a: clsLog4CreateView4SqlEN, b: clsLog4CreateView4SqlEN) => {
          return a.prjId.localeCompare(b.prjId);
        };
      case clsLog4CreateView4SqlEN.con_UserId:
        return (a: clsLog4CreateView4SqlEN, b: clsLog4CreateView4SqlEN) => {
          if (a.userId == null) return -1;
          if (b.userId == null) return 1;
          return a.userId.localeCompare(b.userId);
        };
      case clsLog4CreateView4SqlEN.con_Memo:
        return (a: clsLog4CreateView4SqlEN, b: clsLog4CreateView4SqlEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[Log4CreateView4Sql]中不存在!(in ${log4CreateView4Sql_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsLog4CreateView4SqlEN.con_mId:
        return (a: clsLog4CreateView4SqlEN, b: clsLog4CreateView4SqlEN) => {
          return b.mId - a.mId;
        };
      case clsLog4CreateView4SqlEN.con_SqlViewId:
        return (a: clsLog4CreateView4SqlEN, b: clsLog4CreateView4SqlEN) => {
          return b.sqlViewId.localeCompare(a.sqlViewId);
        };
      case clsLog4CreateView4SqlEN.con_PrjDataBaseId:
        return (a: clsLog4CreateView4SqlEN, b: clsLog4CreateView4SqlEN) => {
          return b.prjDataBaseId.localeCompare(a.prjDataBaseId);
        };
      case clsLog4CreateView4SqlEN.con_CreateViewDate:
        return (a: clsLog4CreateView4SqlEN, b: clsLog4CreateView4SqlEN) => {
          if (b.createViewDate == null) return -1;
          if (a.createViewDate == null) return 1;
          return b.createViewDate.localeCompare(a.createViewDate);
        };
      case clsLog4CreateView4SqlEN.con_PrjId:
        return (a: clsLog4CreateView4SqlEN, b: clsLog4CreateView4SqlEN) => {
          return b.prjId.localeCompare(a.prjId);
        };
      case clsLog4CreateView4SqlEN.con_UserId:
        return (a: clsLog4CreateView4SqlEN, b: clsLog4CreateView4SqlEN) => {
          if (b.userId == null) return -1;
          if (a.userId == null) return 1;
          return b.userId.localeCompare(a.userId);
        };
      case clsLog4CreateView4SqlEN.con_Memo:
        return (a: clsLog4CreateView4SqlEN, b: clsLog4CreateView4SqlEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[Log4CreateView4Sql]中不存在!(in ${log4CreateView4Sql_ConstructorName}.${strThisFuncName})`;
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
export async function Log4CreateView4Sql_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsLog4CreateView4SqlEN.con_mId:
      return (obj: clsLog4CreateView4SqlEN) => {
        return obj.mId === value;
      };
    case clsLog4CreateView4SqlEN.con_SqlViewId:
      return (obj: clsLog4CreateView4SqlEN) => {
        return obj.sqlViewId === value;
      };
    case clsLog4CreateView4SqlEN.con_PrjDataBaseId:
      return (obj: clsLog4CreateView4SqlEN) => {
        return obj.prjDataBaseId === value;
      };
    case clsLog4CreateView4SqlEN.con_CreateViewDate:
      return (obj: clsLog4CreateView4SqlEN) => {
        return obj.createViewDate === value;
      };
    case clsLog4CreateView4SqlEN.con_PrjId:
      return (obj: clsLog4CreateView4SqlEN) => {
        return obj.prjId === value;
      };
    case clsLog4CreateView4SqlEN.con_UserId:
      return (obj: clsLog4CreateView4SqlEN) => {
        return obj.userId === value;
      };
    case clsLog4CreateView4SqlEN.con_Memo:
      return (obj: clsLog4CreateView4SqlEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[Log4CreateView4Sql]中不存在!(in ${log4CreateView4Sql_ConstructorName}.${strThisFuncName})`;
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
export async function Log4CreateView4Sql_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<number>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsLog4CreateView4SqlEN.con_mId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (Number(strInValue) == 0) {
    return [];
  }
  const arrLog4CreateView4Sql = await Log4CreateView4Sql_GetObjLstCache();
  if (arrLog4CreateView4Sql == null) return [];
  let arrLog4CreateView4SqlSel = arrLog4CreateView4Sql;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrLog4CreateView4SqlSel = arrLog4CreateView4SqlSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrLog4CreateView4SqlSel = arrLog4CreateView4SqlSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrLog4CreateView4SqlSel = arrLog4CreateView4SqlSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrLog4CreateView4SqlSel = arrLog4CreateView4SqlSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrLog4CreateView4SqlSel = arrLog4CreateView4SqlSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrLog4CreateView4SqlSel = arrLog4CreateView4SqlSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrLog4CreateView4SqlSel = arrLog4CreateView4SqlSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrLog4CreateView4SqlSel = arrLog4CreateView4SqlSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrLog4CreateView4SqlSel = arrLog4CreateView4SqlSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrLog4CreateView4SqlSel = arrLog4CreateView4SqlSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrLog4CreateView4SqlSel.length == 0) return [];
  return arrLog4CreateView4SqlSel.map((x) => x.mId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function Log4CreateView4Sql_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(log4CreateView4Sql_Controller, strAction);

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
        log4CreateView4Sql_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        log4CreateView4Sql_ConstructorName,
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
export async function Log4CreateView4Sql_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(log4CreateView4Sql_Controller, strAction);

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
        log4CreateView4Sql_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        log4CreateView4Sql_ConstructorName,
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
export async function Log4CreateView4Sql_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsLog4CreateView4SqlEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(log4CreateView4Sql_Controller, strAction);

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
      const objLog4CreateView4Sql = Log4CreateView4Sql_GetObjFromJsonObj(returnObj);
      return objLog4CreateView4Sql;
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
        log4CreateView4Sql_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        log4CreateView4Sql_ConstructorName,
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
export async function Log4CreateView4Sql_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsLog4CreateView4SqlEN._CurrTabName;
  if (IsNullOrEmpty(clsLog4CreateView4SqlEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsLog4CreateView4SqlEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrLog4CreateView4SqlExObjLstCache: Array<clsLog4CreateView4SqlEN> =
      CacheHelper.Get(strKey);
    const arrLog4CreateView4SqlObjLstT = Log4CreateView4Sql_GetObjLstByJSONObjLst(
      arrLog4CreateView4SqlExObjLstCache,
    );
    return arrLog4CreateView4SqlObjLstT;
  }
  try {
    const arrLog4CreateView4SqlExObjLst = await Log4CreateView4Sql_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrLog4CreateView4SqlExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrLog4CreateView4SqlExObjLst.length,
    );
    console.log(strInfo);
    return arrLog4CreateView4SqlExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      log4CreateView4Sql_ConstructorName,
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
export async function Log4CreateView4Sql_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsLog4CreateView4SqlEN._CurrTabName;
  if (IsNullOrEmpty(clsLog4CreateView4SqlEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsLog4CreateView4SqlEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrLog4CreateView4SqlExObjLstCache: Array<clsLog4CreateView4SqlEN> =
      JSON.parse(strTempObjLst);
    const arrLog4CreateView4SqlObjLstT = Log4CreateView4Sql_GetObjLstByJSONObjLst(
      arrLog4CreateView4SqlExObjLstCache,
    );
    return arrLog4CreateView4SqlObjLstT;
  }
  try {
    const arrLog4CreateView4SqlExObjLst = await Log4CreateView4Sql_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrLog4CreateView4SqlExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrLog4CreateView4SqlExObjLst.length,
    );
    console.log(strInfo);
    return arrLog4CreateView4SqlExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      log4CreateView4Sql_ConstructorName,
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
export async function Log4CreateView4Sql_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsLog4CreateView4SqlEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrLog4CreateView4SqlObjLstCache: Array<clsLog4CreateView4SqlEN> =
      JSON.parse(strTempObjLst);
    return arrLog4CreateView4SqlObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function Log4CreateView4Sql_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsLog4CreateView4SqlEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(log4CreateView4Sql_Controller, strAction);

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
          log4CreateView4Sql_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = Log4CreateView4Sql_GetObjLstByJSONObjLst(returnObjLst);
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
        log4CreateView4Sql_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        log4CreateView4Sql_ConstructorName,
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
export async function Log4CreateView4Sql_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsLog4CreateView4SqlEN._CurrTabName;
  if (IsNullOrEmpty(clsLog4CreateView4SqlEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsLog4CreateView4SqlEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrLog4CreateView4SqlExObjLstCache: Array<clsLog4CreateView4SqlEN> =
      JSON.parse(strTempObjLst);
    const arrLog4CreateView4SqlObjLstT = Log4CreateView4Sql_GetObjLstByJSONObjLst(
      arrLog4CreateView4SqlExObjLstCache,
    );
    return arrLog4CreateView4SqlObjLstT;
  }
  try {
    const arrLog4CreateView4SqlExObjLst = await Log4CreateView4Sql_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrLog4CreateView4SqlExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrLog4CreateView4SqlExObjLst.length,
    );
    console.log(strInfo);
    return arrLog4CreateView4SqlExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      log4CreateView4Sql_ConstructorName,
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
export async function Log4CreateView4Sql_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsLog4CreateView4SqlEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrLog4CreateView4SqlObjLstCache: Array<clsLog4CreateView4SqlEN> =
      JSON.parse(strTempObjLst);
    return arrLog4CreateView4SqlObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function Log4CreateView4Sql_GetObjLstCache(): Promise<Array<clsLog4CreateView4SqlEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrLog4CreateView4SqlObjLstCache;
  switch (clsLog4CreateView4SqlEN.CacheModeId) {
    case '04': //sessionStorage
      arrLog4CreateView4SqlObjLstCache = await Log4CreateView4Sql_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrLog4CreateView4SqlObjLstCache = await Log4CreateView4Sql_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrLog4CreateView4SqlObjLstCache = await Log4CreateView4Sql_GetObjLstClientCache();
      break;
    default:
      arrLog4CreateView4SqlObjLstCache = await Log4CreateView4Sql_GetObjLstClientCache();
      break;
  }
  return arrLog4CreateView4SqlObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function Log4CreateView4Sql_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrLog4CreateView4SqlObjLstCache;
  switch (clsLog4CreateView4SqlEN.CacheModeId) {
    case '04': //sessionStorage
      arrLog4CreateView4SqlObjLstCache =
        await Log4CreateView4Sql_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrLog4CreateView4SqlObjLstCache = await Log4CreateView4Sql_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrLog4CreateView4SqlObjLstCache = null;
      break;
    default:
      arrLog4CreateView4SqlObjLstCache = null;
      break;
  }
  return arrLog4CreateView4SqlObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objlngmIdCond:条件对象
 * @returns 对象列表子集
 */
export async function Log4CreateView4Sql_GetSubObjLstCache(
  objLog4CreateView4SqlCond: clsLog4CreateView4SqlEN,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrLog4CreateView4SqlObjLstCache = await Log4CreateView4Sql_GetObjLstCache();
  let arrLog4CreateView4SqlSel = arrLog4CreateView4SqlObjLstCache;
  if (
    objLog4CreateView4SqlCond.sfFldComparisonOp == null ||
    objLog4CreateView4SqlCond.sfFldComparisonOp == ''
  )
    return arrLog4CreateView4SqlSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objLog4CreateView4SqlCond.sfFldComparisonOp,
  );
  //console.log("clsLog4CreateView4SqlWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objLog4CreateView4SqlCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrLog4CreateView4SqlSel = arrLog4CreateView4SqlSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objLog4CreateView4SqlCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrLog4CreateView4SqlSel = arrLog4CreateView4SqlSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrLog4CreateView4SqlSel = arrLog4CreateView4SqlSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrLog4CreateView4SqlSel = arrLog4CreateView4SqlSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrLog4CreateView4SqlSel = arrLog4CreateView4SqlSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrLog4CreateView4SqlSel = arrLog4CreateView4SqlSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrLog4CreateView4SqlSel = arrLog4CreateView4SqlSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrLog4CreateView4SqlSel = arrLog4CreateView4SqlSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrLog4CreateView4SqlSel = arrLog4CreateView4SqlSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrLog4CreateView4SqlSel = arrLog4CreateView4SqlSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrLog4CreateView4SqlSel = arrLog4CreateView4SqlSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrLog4CreateView4SqlSel = arrLog4CreateView4SqlSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrLog4CreateView4SqlSel = arrLog4CreateView4SqlSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrLog4CreateView4SqlSel = arrLog4CreateView4SqlSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrLog4CreateView4SqlSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objLog4CreateView4SqlCond),
      log4CreateView4Sql_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsLog4CreateView4SqlEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrmId:关键字列表
 * @returns 对象列表
 **/
export async function Log4CreateView4Sql_GetObjLstBymIdLstAsync(
  arrmId: Array<string>,
): Promise<Array<clsLog4CreateView4SqlEN>> {
  const strThisFuncName = 'GetObjLstBymIdLstAsync';
  const strAction = 'GetObjLstBymIdLst';
  const strUrl = GetWebApiUrl(log4CreateView4Sql_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrmId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          log4CreateView4Sql_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = Log4CreateView4Sql_GetObjLstByJSONObjLst(returnObjLst);
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
        log4CreateView4Sql_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        log4CreateView4Sql_ConstructorName,
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
 * @param arrlngmIdLst:关键字列表
 * @returns 对象列表
 */
export async function Log4CreateView4Sql_GetObjLstBymIdLstCache(arrmIdLst: Array<number>) {
  const strThisFuncName = 'GetObjLstBymIdLstCache';
  try {
    const arrLog4CreateView4SqlObjLstCache = await Log4CreateView4Sql_GetObjLstCache();
    const arrLog4CreateView4SqlSel = arrLog4CreateView4SqlObjLstCache.filter(
      (x) => arrmIdLst.indexOf(x.mId) > -1,
    );
    return arrLog4CreateView4SqlSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrmIdLst.join(','),
      log4CreateView4Sql_ConstructorName,
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
export async function Log4CreateView4Sql_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsLog4CreateView4SqlEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(log4CreateView4Sql_Controller, strAction);

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
          log4CreateView4Sql_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = Log4CreateView4Sql_GetObjLstByJSONObjLst(returnObjLst);
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
        log4CreateView4Sql_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        log4CreateView4Sql_ConstructorName,
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
export async function Log4CreateView4Sql_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsLog4CreateView4SqlEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(log4CreateView4Sql_Controller, strAction);

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
          log4CreateView4Sql_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = Log4CreateView4Sql_GetObjLstByJSONObjLst(returnObjLst);
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
        log4CreateView4Sql_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        log4CreateView4Sql_ConstructorName,
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
export async function Log4CreateView4Sql_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsLog4CreateView4SqlEN>();
  const arrLog4CreateView4SqlObjLstCache = await Log4CreateView4Sql_GetObjLstCache();
  if (arrLog4CreateView4SqlObjLstCache.length == 0) return arrLog4CreateView4SqlObjLstCache;
  let arrLog4CreateView4SqlSel = arrLog4CreateView4SqlObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objLog4CreateView4SqlCond = new clsLog4CreateView4SqlEN();
  ObjectAssign(objLog4CreateView4SqlCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsLog4CreateView4SqlWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrLog4CreateView4SqlSel = arrLog4CreateView4SqlSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objLog4CreateView4SqlCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrLog4CreateView4SqlSel = arrLog4CreateView4SqlSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrLog4CreateView4SqlSel = arrLog4CreateView4SqlSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrLog4CreateView4SqlSel = arrLog4CreateView4SqlSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrLog4CreateView4SqlSel = arrLog4CreateView4SqlSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrLog4CreateView4SqlSel = arrLog4CreateView4SqlSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrLog4CreateView4SqlSel = arrLog4CreateView4SqlSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrLog4CreateView4SqlSel = arrLog4CreateView4SqlSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrLog4CreateView4SqlSel = arrLog4CreateView4SqlSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrLog4CreateView4SqlSel = arrLog4CreateView4SqlSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrLog4CreateView4SqlSel = arrLog4CreateView4SqlSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrLog4CreateView4SqlSel = arrLog4CreateView4SqlSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrLog4CreateView4SqlSel = arrLog4CreateView4SqlSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrLog4CreateView4SqlSel = arrLog4CreateView4SqlSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrLog4CreateView4SqlSel = arrLog4CreateView4SqlSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrLog4CreateView4SqlSel.length == 0) return arrLog4CreateView4SqlSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrLog4CreateView4SqlSel = arrLog4CreateView4SqlSel.sort(
        Log4CreateView4Sql_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrLog4CreateView4SqlSel = arrLog4CreateView4SqlSel.sort(objPagerPara.sortFun);
    }
    arrLog4CreateView4SqlSel = arrLog4CreateView4SqlSel.slice(intStart, intEnd);
    return arrLog4CreateView4SqlSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      log4CreateView4Sql_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsLog4CreateView4SqlEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function Log4CreateView4Sql_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsLog4CreateView4SqlEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsLog4CreateView4SqlEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(log4CreateView4Sql_Controller, strAction);

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
          log4CreateView4Sql_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = Log4CreateView4Sql_GetObjLstByJSONObjLst(returnObjLst);
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
        log4CreateView4Sql_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        log4CreateView4Sql_ConstructorName,
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
 * @param lngmId:关键字
 * @returns 获取删除的结果
 **/
export async function Log4CreateView4Sql_DelRecordAsync(lngmId: number): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(log4CreateView4Sql_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, lngmId);

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
        log4CreateView4Sql_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        log4CreateView4Sql_ConstructorName,
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
 * @param arrmId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function Log4CreateView4Sql_DelLog4CreateView4SqlsAsync(
  arrmId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelLog4CreateView4SqlsAsync';
  const strAction = 'DelLog4CreateView4Sqls';
  const strUrl = GetWebApiUrl(log4CreateView4Sql_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrmId, config);
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
        log4CreateView4Sql_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        log4CreateView4Sql_ConstructorName,
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
export async function Log4CreateView4Sql_DelLog4CreateView4SqlsByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelLog4CreateView4SqlsByCondAsync';
  const strAction = 'DelLog4CreateView4SqlsByCond';
  const strUrl = GetWebApiUrl(log4CreateView4Sql_Controller, strAction);

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
        log4CreateView4Sql_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        log4CreateView4Sql_ConstructorName,
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
 * @param objLog4CreateView4SqlEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function Log4CreateView4Sql_AddNewRecordAsync(
  objLog4CreateView4SqlEN: clsLog4CreateView4SqlEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objLog4CreateView4SqlEN);
  const strUrl = GetWebApiUrl(log4CreateView4Sql_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objLog4CreateView4SqlEN, config);
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
        log4CreateView4Sql_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        log4CreateView4Sql_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
/* 数据类型不是字符型,不可以最大关键字的方式添加记录。*/

/**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objLog4CreateView4SqlEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function Log4CreateView4Sql_AddNewRecordWithReturnKeyAsync(
  objLog4CreateView4SqlEN: clsLog4CreateView4SqlEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(log4CreateView4Sql_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objLog4CreateView4SqlEN, config);
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
        log4CreateView4Sql_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        log4CreateView4Sql_ConstructorName,
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
 * @param objLog4CreateView4SqlEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function Log4CreateView4Sql_UpdateRecordAsync(
  objLog4CreateView4SqlEN: clsLog4CreateView4SqlEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objLog4CreateView4SqlEN.sfUpdFldSetStr === undefined ||
    objLog4CreateView4SqlEN.sfUpdFldSetStr === null ||
    objLog4CreateView4SqlEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objLog4CreateView4SqlEN.mId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(log4CreateView4Sql_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objLog4CreateView4SqlEN, config);
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
        log4CreateView4Sql_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        log4CreateView4Sql_ConstructorName,
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
 * @param objLog4CreateView4SqlEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function Log4CreateView4Sql_UpdateWithConditionAsync(
  objLog4CreateView4SqlEN: clsLog4CreateView4SqlEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objLog4CreateView4SqlEN.sfUpdFldSetStr === undefined ||
    objLog4CreateView4SqlEN.sfUpdFldSetStr === null ||
    objLog4CreateView4SqlEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objLog4CreateView4SqlEN.mId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(log4CreateView4Sql_Controller, strAction);
  objLog4CreateView4SqlEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objLog4CreateView4SqlEN, config);
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
        log4CreateView4Sql_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        log4CreateView4Sql_ConstructorName,
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
 * @param objlngmIdCond:条件对象
 * @returns 对象列表子集
 */
export async function Log4CreateView4Sql_IsExistRecordCache(
  objLog4CreateView4SqlCond: clsLog4CreateView4SqlEN,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrLog4CreateView4SqlObjLstCache = await Log4CreateView4Sql_GetObjLstCache();
  if (arrLog4CreateView4SqlObjLstCache == null) return false;
  let arrLog4CreateView4SqlSel = arrLog4CreateView4SqlObjLstCache;
  if (
    objLog4CreateView4SqlCond.sfFldComparisonOp == null ||
    objLog4CreateView4SqlCond.sfFldComparisonOp == ''
  )
    return arrLog4CreateView4SqlSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objLog4CreateView4SqlCond.sfFldComparisonOp,
  );
  //console.log("clsLog4CreateView4SqlWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objLog4CreateView4SqlCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objLog4CreateView4SqlCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrLog4CreateView4SqlSel = arrLog4CreateView4SqlSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrLog4CreateView4SqlSel = arrLog4CreateView4SqlSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrLog4CreateView4SqlSel = arrLog4CreateView4SqlSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrLog4CreateView4SqlSel = arrLog4CreateView4SqlSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrLog4CreateView4SqlSel = arrLog4CreateView4SqlSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrLog4CreateView4SqlSel = arrLog4CreateView4SqlSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrLog4CreateView4SqlSel = arrLog4CreateView4SqlSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrLog4CreateView4SqlSel = arrLog4CreateView4SqlSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrLog4CreateView4SqlSel = arrLog4CreateView4SqlSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrLog4CreateView4SqlSel = arrLog4CreateView4SqlSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrLog4CreateView4SqlSel = arrLog4CreateView4SqlSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrLog4CreateView4SqlSel = arrLog4CreateView4SqlSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrLog4CreateView4SqlSel = arrLog4CreateView4SqlSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrLog4CreateView4SqlSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objLog4CreateView4SqlCond),
      log4CreateView4Sql_ConstructorName,
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
export async function Log4CreateView4Sql_IsExistRecordAsync(
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(log4CreateView4Sql_Controller, strAction);

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
        log4CreateView4Sql_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        log4CreateView4Sql_ConstructorName,
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
 * @param lngmId:所给的关键字
 * @returns 对象
 */
export async function Log4CreateView4Sql_IsExistCache(lngmId: number) {
  const strThisFuncName = 'IsExistCache';
  const arrLog4CreateView4SqlObjLstCache = await Log4CreateView4Sql_GetObjLstCache();
  if (arrLog4CreateView4SqlObjLstCache == null) return false;
  try {
    const arrLog4CreateView4SqlSel = arrLog4CreateView4SqlObjLstCache.filter(
      (x) => x.mId == lngmId,
    );
    if (arrLog4CreateView4SqlSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      lngmId,
      log4CreateView4Sql_ConstructorName,
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
 * @param lngmId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function Log4CreateView4Sql_IsExistAsync(lngmId: number): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(log4CreateView4Sql_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      lngmId,
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
        log4CreateView4Sql_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        log4CreateView4Sql_ConstructorName,
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
export async function Log4CreateView4Sql_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(log4CreateView4Sql_Controller, strAction);

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
        log4CreateView4Sql_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        log4CreateView4Sql_ConstructorName,
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
 * @param objLog4CreateView4SqlCond:条件对象
 * @returns 对象列表记录数
 */
export async function Log4CreateView4Sql_GetRecCountByCondCache(
  objLog4CreateView4SqlCond: clsLog4CreateView4SqlEN,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrLog4CreateView4SqlObjLstCache = await Log4CreateView4Sql_GetObjLstCache();
  if (arrLog4CreateView4SqlObjLstCache == null) return 0;
  let arrLog4CreateView4SqlSel = arrLog4CreateView4SqlObjLstCache;
  if (
    objLog4CreateView4SqlCond.sfFldComparisonOp == null ||
    objLog4CreateView4SqlCond.sfFldComparisonOp == ''
  )
    return arrLog4CreateView4SqlSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objLog4CreateView4SqlCond.sfFldComparisonOp,
  );
  //console.log("clsLog4CreateView4SqlWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objLog4CreateView4SqlCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrLog4CreateView4SqlSel = arrLog4CreateView4SqlSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objLog4CreateView4SqlCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrLog4CreateView4SqlSel = arrLog4CreateView4SqlSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrLog4CreateView4SqlSel = arrLog4CreateView4SqlSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrLog4CreateView4SqlSel = arrLog4CreateView4SqlSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrLog4CreateView4SqlSel = arrLog4CreateView4SqlSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrLog4CreateView4SqlSel = arrLog4CreateView4SqlSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrLog4CreateView4SqlSel = arrLog4CreateView4SqlSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrLog4CreateView4SqlSel = arrLog4CreateView4SqlSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrLog4CreateView4SqlSel = arrLog4CreateView4SqlSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrLog4CreateView4SqlSel = arrLog4CreateView4SqlSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrLog4CreateView4SqlSel = arrLog4CreateView4SqlSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrLog4CreateView4SqlSel = arrLog4CreateView4SqlSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrLog4CreateView4SqlSel = arrLog4CreateView4SqlSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrLog4CreateView4SqlSel = arrLog4CreateView4SqlSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrLog4CreateView4SqlSel = arrLog4CreateView4SqlSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrLog4CreateView4SqlSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objLog4CreateView4SqlCond),
      log4CreateView4Sql_ConstructorName,
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
export async function Log4CreateView4Sql_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(log4CreateView4Sql_Controller, strAction);

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
        log4CreateView4Sql_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        log4CreateView4Sql_ConstructorName,
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
export function Log4CreateView4Sql_GetWebApiUrl(strController: string, strAction: string): string {
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
export function Log4CreateView4Sql_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功!');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clsLog4CreateView4SqlEN._CurrTabName;
  switch (clsLog4CreateView4SqlEN.CacheModeId) {
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
export function Log4CreateView4Sql_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsLog4CreateView4SqlEN._CurrTabName;
    switch (clsLog4CreateView4SqlEN.CacheModeId) {
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
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function Log4CreateView4Sql_CheckPropertyNew(
  pobjLog4CreateView4SqlEN: clsLog4CreateView4SqlEN,
) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (
    IsNullOrEmpty(pobjLog4CreateView4SqlEN.sqlViewId) === true ||
    pobjLog4CreateView4SqlEN.sqlViewId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000411)字段[Sql视图Id]不能为空(In 建立视图日志)!(clsLog4CreateView4SqlBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjLog4CreateView4SqlEN.prjDataBaseId) === true ||
    pobjLog4CreateView4SqlEN.prjDataBaseId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000411)字段[项目数据库Id]不能为空(In 建立视图日志)!(clsLog4CreateView4SqlBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjLog4CreateView4SqlEN.prjId) === true ||
    pobjLog4CreateView4SqlEN.prjId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000411)字段[工程ID]不能为空(In 建立视图日志)!(clsLog4CreateView4SqlBL:CheckPropertyNew0)',
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjLog4CreateView4SqlEN.sqlViewId) == false &&
    GetStrLen(pobjLog4CreateView4SqlEN.sqlViewId) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[Sql视图Id(sqlViewId)]的长度不能超过8(In 建立视图日志(Log4CreateView4Sql))!值:$(pobjLog4CreateView4SqlEN.sqlViewId)(clsLog4CreateView4SqlBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjLog4CreateView4SqlEN.prjDataBaseId) == false &&
    GetStrLen(pobjLog4CreateView4SqlEN.prjDataBaseId) > 4
  ) {
    throw new Error(
      '(errid:Watl000413)字段[项目数据库Id(prjDataBaseId)]的长度不能超过4(In 建立视图日志(Log4CreateView4Sql))!值:$(pobjLog4CreateView4SqlEN.prjDataBaseId)(clsLog4CreateView4SqlBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjLog4CreateView4SqlEN.createViewDate) == false &&
    GetStrLen(pobjLog4CreateView4SqlEN.createViewDate) > 14
  ) {
    throw new Error(
      '(errid:Watl000413)字段[建立视图日期(createViewDate)]的长度不能超过14(In 建立视图日志(Log4CreateView4Sql))!值:$(pobjLog4CreateView4SqlEN.createViewDate)(clsLog4CreateView4SqlBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjLog4CreateView4SqlEN.prjId) == false &&
    GetStrLen(pobjLog4CreateView4SqlEN.prjId) > 4
  ) {
    throw new Error(
      '(errid:Watl000413)字段[工程ID(prjId)]的长度不能超过4(In 建立视图日志(Log4CreateView4Sql))!值:$(pobjLog4CreateView4SqlEN.prjId)(clsLog4CreateView4SqlBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjLog4CreateView4SqlEN.userId) == false &&
    GetStrLen(pobjLog4CreateView4SqlEN.userId) > 18
  ) {
    throw new Error(
      '(errid:Watl000413)字段[用户Id(userId)]的长度不能超过18(In 建立视图日志(Log4CreateView4Sql))!值:$(pobjLog4CreateView4SqlEN.userId)(clsLog4CreateView4SqlBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjLog4CreateView4SqlEN.memo) == false &&
    GetStrLen(pobjLog4CreateView4SqlEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In 建立视图日志(Log4CreateView4Sql))!值:$(pobjLog4CreateView4SqlEN.memo)(clsLog4CreateView4SqlBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjLog4CreateView4SqlEN.mId &&
    undefined !== pobjLog4CreateView4SqlEN.mId &&
    tzDataType.isNumber(pobjLog4CreateView4SqlEN.mId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[mId(mId)]的值:[$(pobjLog4CreateView4SqlEN.mId)], 非法,应该为数值型(In 建立视图日志(Log4CreateView4Sql))!(clsLog4CreateView4SqlBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjLog4CreateView4SqlEN.sqlViewId) == false &&
    undefined !== pobjLog4CreateView4SqlEN.sqlViewId &&
    tzDataType.isString(pobjLog4CreateView4SqlEN.sqlViewId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[Sql视图Id(sqlViewId)]的值:[$(pobjLog4CreateView4SqlEN.sqlViewId)], 非法,应该为字符型(In 建立视图日志(Log4CreateView4Sql))!(clsLog4CreateView4SqlBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjLog4CreateView4SqlEN.prjDataBaseId) == false &&
    undefined !== pobjLog4CreateView4SqlEN.prjDataBaseId &&
    tzDataType.isString(pobjLog4CreateView4SqlEN.prjDataBaseId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[项目数据库Id(prjDataBaseId)]的值:[$(pobjLog4CreateView4SqlEN.prjDataBaseId)], 非法,应该为字符型(In 建立视图日志(Log4CreateView4Sql))!(clsLog4CreateView4SqlBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjLog4CreateView4SqlEN.createViewDate) == false &&
    undefined !== pobjLog4CreateView4SqlEN.createViewDate &&
    tzDataType.isString(pobjLog4CreateView4SqlEN.createViewDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[建立视图日期(createViewDate)]的值:[$(pobjLog4CreateView4SqlEN.createViewDate)], 非法,应该为字符型(In 建立视图日志(Log4CreateView4Sql))!(clsLog4CreateView4SqlBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjLog4CreateView4SqlEN.prjId) == false &&
    undefined !== pobjLog4CreateView4SqlEN.prjId &&
    tzDataType.isString(pobjLog4CreateView4SqlEN.prjId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[工程ID(prjId)]的值:[$(pobjLog4CreateView4SqlEN.prjId)], 非法,应该为字符型(In 建立视图日志(Log4CreateView4Sql))!(clsLog4CreateView4SqlBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjLog4CreateView4SqlEN.userId) == false &&
    undefined !== pobjLog4CreateView4SqlEN.userId &&
    tzDataType.isString(pobjLog4CreateView4SqlEN.userId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[用户Id(userId)]的值:[$(pobjLog4CreateView4SqlEN.userId)], 非法,应该为字符型(In 建立视图日志(Log4CreateView4Sql))!(clsLog4CreateView4SqlBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjLog4CreateView4SqlEN.memo) == false &&
    undefined !== pobjLog4CreateView4SqlEN.memo &&
    tzDataType.isString(pobjLog4CreateView4SqlEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[说明(memo)]的值:[$(pobjLog4CreateView4SqlEN.memo)], 非法,应该为字符型(In 建立视图日志(Log4CreateView4Sql))!(clsLog4CreateView4SqlBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function Log4CreateView4Sql_CheckProperty4Update(
  pobjLog4CreateView4SqlEN: clsLog4CreateView4SqlEN,
) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjLog4CreateView4SqlEN.sqlViewId) == false &&
    GetStrLen(pobjLog4CreateView4SqlEN.sqlViewId) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[Sql视图Id(sqlViewId)]的长度不能超过8(In 建立视图日志(Log4CreateView4Sql))!值:$(pobjLog4CreateView4SqlEN.sqlViewId)(clsLog4CreateView4SqlBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjLog4CreateView4SqlEN.prjDataBaseId) == false &&
    GetStrLen(pobjLog4CreateView4SqlEN.prjDataBaseId) > 4
  ) {
    throw new Error(
      '(errid:Watl000416)字段[项目数据库Id(prjDataBaseId)]的长度不能超过4(In 建立视图日志(Log4CreateView4Sql))!值:$(pobjLog4CreateView4SqlEN.prjDataBaseId)(clsLog4CreateView4SqlBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjLog4CreateView4SqlEN.createViewDate) == false &&
    GetStrLen(pobjLog4CreateView4SqlEN.createViewDate) > 14
  ) {
    throw new Error(
      '(errid:Watl000416)字段[建立视图日期(createViewDate)]的长度不能超过14(In 建立视图日志(Log4CreateView4Sql))!值:$(pobjLog4CreateView4SqlEN.createViewDate)(clsLog4CreateView4SqlBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjLog4CreateView4SqlEN.prjId) == false &&
    GetStrLen(pobjLog4CreateView4SqlEN.prjId) > 4
  ) {
    throw new Error(
      '(errid:Watl000416)字段[工程ID(prjId)]的长度不能超过4(In 建立视图日志(Log4CreateView4Sql))!值:$(pobjLog4CreateView4SqlEN.prjId)(clsLog4CreateView4SqlBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjLog4CreateView4SqlEN.userId) == false &&
    GetStrLen(pobjLog4CreateView4SqlEN.userId) > 18
  ) {
    throw new Error(
      '(errid:Watl000416)字段[用户Id(userId)]的长度不能超过18(In 建立视图日志(Log4CreateView4Sql))!值:$(pobjLog4CreateView4SqlEN.userId)(clsLog4CreateView4SqlBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjLog4CreateView4SqlEN.memo) == false &&
    GetStrLen(pobjLog4CreateView4SqlEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In 建立视图日志(Log4CreateView4Sql))!值:$(pobjLog4CreateView4SqlEN.memo)(clsLog4CreateView4SqlBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjLog4CreateView4SqlEN.mId &&
    undefined !== pobjLog4CreateView4SqlEN.mId &&
    tzDataType.isNumber(pobjLog4CreateView4SqlEN.mId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[mId(mId)]的值:[$(pobjLog4CreateView4SqlEN.mId)], 非法,应该为数值型(In 建立视图日志(Log4CreateView4Sql))!(clsLog4CreateView4SqlBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjLog4CreateView4SqlEN.sqlViewId) == false &&
    undefined !== pobjLog4CreateView4SqlEN.sqlViewId &&
    tzDataType.isString(pobjLog4CreateView4SqlEN.sqlViewId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[Sql视图Id(sqlViewId)]的值:[$(pobjLog4CreateView4SqlEN.sqlViewId)], 非法,应该为字符型(In 建立视图日志(Log4CreateView4Sql))!(clsLog4CreateView4SqlBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjLog4CreateView4SqlEN.prjDataBaseId) == false &&
    undefined !== pobjLog4CreateView4SqlEN.prjDataBaseId &&
    tzDataType.isString(pobjLog4CreateView4SqlEN.prjDataBaseId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[项目数据库Id(prjDataBaseId)]的值:[$(pobjLog4CreateView4SqlEN.prjDataBaseId)], 非法,应该为字符型(In 建立视图日志(Log4CreateView4Sql))!(clsLog4CreateView4SqlBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjLog4CreateView4SqlEN.createViewDate) == false &&
    undefined !== pobjLog4CreateView4SqlEN.createViewDate &&
    tzDataType.isString(pobjLog4CreateView4SqlEN.createViewDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[建立视图日期(createViewDate)]的值:[$(pobjLog4CreateView4SqlEN.createViewDate)], 非法,应该为字符型(In 建立视图日志(Log4CreateView4Sql))!(clsLog4CreateView4SqlBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjLog4CreateView4SqlEN.prjId) == false &&
    undefined !== pobjLog4CreateView4SqlEN.prjId &&
    tzDataType.isString(pobjLog4CreateView4SqlEN.prjId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[工程ID(prjId)]的值:[$(pobjLog4CreateView4SqlEN.prjId)], 非法,应该为字符型(In 建立视图日志(Log4CreateView4Sql))!(clsLog4CreateView4SqlBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjLog4CreateView4SqlEN.userId) == false &&
    undefined !== pobjLog4CreateView4SqlEN.userId &&
    tzDataType.isString(pobjLog4CreateView4SqlEN.userId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[用户Id(userId)]的值:[$(pobjLog4CreateView4SqlEN.userId)], 非法,应该为字符型(In 建立视图日志(Log4CreateView4Sql))!(clsLog4CreateView4SqlBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjLog4CreateView4SqlEN.memo) == false &&
    undefined !== pobjLog4CreateView4SqlEN.memo &&
    tzDataType.isString(pobjLog4CreateView4SqlEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[说明(memo)]的值:[$(pobjLog4CreateView4SqlEN.memo)], 非法,应该为字符型(In 建立视图日志(Log4CreateView4Sql))!(clsLog4CreateView4SqlBL:CheckProperty4Update)',
    );
  }
  //检查主键是否为Null或者空!
  if (
    null === pobjLog4CreateView4SqlEN.mId ||
    (pobjLog4CreateView4SqlEN.mId != null && pobjLog4CreateView4SqlEN.mId.toString() === '')
  ) {
    throw new Error(
      '(errid:Watl000064)字段[mId]不能为空(In 建立视图日志)!(clsLog4CreateView4SqlBL:CheckProperty4Update)',
    );
  }
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
export function Log4CreateView4Sql_GetJSONStrByObj(
  pobjLog4CreateView4SqlEN: clsLog4CreateView4SqlEN,
): string {
  pobjLog4CreateView4SqlEN.sfUpdFldSetStr = pobjLog4CreateView4SqlEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjLog4CreateView4SqlEN);
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
export function Log4CreateView4Sql_GetObjLstByJSONStr(
  strJSON: string,
): Array<clsLog4CreateView4SqlEN> {
  let arrLog4CreateView4SqlObjLst = new Array<clsLog4CreateView4SqlEN>();
  if (strJSON === '') {
    return arrLog4CreateView4SqlObjLst;
  }
  try {
    arrLog4CreateView4SqlObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrLog4CreateView4SqlObjLst;
  }
  return arrLog4CreateView4SqlObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrLog4CreateView4SqlObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function Log4CreateView4Sql_GetObjLstByJSONObjLst(
  arrLog4CreateView4SqlObjLstS: Array<clsLog4CreateView4SqlEN>,
): Array<clsLog4CreateView4SqlEN> {
  const arrLog4CreateView4SqlObjLst = new Array<clsLog4CreateView4SqlEN>();
  for (const objInFor of arrLog4CreateView4SqlObjLstS) {
    const obj1 = Log4CreateView4Sql_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrLog4CreateView4SqlObjLst.push(obj1);
  }
  return arrLog4CreateView4SqlObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function Log4CreateView4Sql_GetObjByJSONStr(strJSON: string): clsLog4CreateView4SqlEN {
  let pobjLog4CreateView4SqlEN = new clsLog4CreateView4SqlEN();
  if (strJSON === '') {
    return pobjLog4CreateView4SqlEN;
  }
  try {
    pobjLog4CreateView4SqlEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjLog4CreateView4SqlEN;
  }
  return pobjLog4CreateView4SqlEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function Log4CreateView4Sql_GetCombineCondition(
  objLog4CreateView4SqlCond: clsLog4CreateView4SqlEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objLog4CreateView4SqlCond.dicFldComparisonOp,
      clsLog4CreateView4SqlEN.con_mId,
    ) == true
  ) {
    const strComparisonOpmId: string =
      objLog4CreateView4SqlCond.dicFldComparisonOp[clsLog4CreateView4SqlEN.con_mId];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsLog4CreateView4SqlEN.con_mId,
      objLog4CreateView4SqlCond.mId,
      strComparisonOpmId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objLog4CreateView4SqlCond.dicFldComparisonOp,
      clsLog4CreateView4SqlEN.con_SqlViewId,
    ) == true
  ) {
    const strComparisonOpSqlViewId: string =
      objLog4CreateView4SqlCond.dicFldComparisonOp[clsLog4CreateView4SqlEN.con_SqlViewId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsLog4CreateView4SqlEN.con_SqlViewId,
      objLog4CreateView4SqlCond.sqlViewId,
      strComparisonOpSqlViewId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objLog4CreateView4SqlCond.dicFldComparisonOp,
      clsLog4CreateView4SqlEN.con_PrjDataBaseId,
    ) == true
  ) {
    const strComparisonOpPrjDataBaseId: string =
      objLog4CreateView4SqlCond.dicFldComparisonOp[clsLog4CreateView4SqlEN.con_PrjDataBaseId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsLog4CreateView4SqlEN.con_PrjDataBaseId,
      objLog4CreateView4SqlCond.prjDataBaseId,
      strComparisonOpPrjDataBaseId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objLog4CreateView4SqlCond.dicFldComparisonOp,
      clsLog4CreateView4SqlEN.con_CreateViewDate,
    ) == true
  ) {
    const strComparisonOpCreateViewDate: string =
      objLog4CreateView4SqlCond.dicFldComparisonOp[clsLog4CreateView4SqlEN.con_CreateViewDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsLog4CreateView4SqlEN.con_CreateViewDate,
      objLog4CreateView4SqlCond.createViewDate,
      strComparisonOpCreateViewDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objLog4CreateView4SqlCond.dicFldComparisonOp,
      clsLog4CreateView4SqlEN.con_PrjId,
    ) == true
  ) {
    const strComparisonOpPrjId: string =
      objLog4CreateView4SqlCond.dicFldComparisonOp[clsLog4CreateView4SqlEN.con_PrjId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsLog4CreateView4SqlEN.con_PrjId,
      objLog4CreateView4SqlCond.prjId,
      strComparisonOpPrjId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objLog4CreateView4SqlCond.dicFldComparisonOp,
      clsLog4CreateView4SqlEN.con_UserId,
    ) == true
  ) {
    const strComparisonOpUserId: string =
      objLog4CreateView4SqlCond.dicFldComparisonOp[clsLog4CreateView4SqlEN.con_UserId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsLog4CreateView4SqlEN.con_UserId,
      objLog4CreateView4SqlCond.userId,
      strComparisonOpUserId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objLog4CreateView4SqlCond.dicFldComparisonOp,
      clsLog4CreateView4SqlEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objLog4CreateView4SqlCond.dicFldComparisonOp[clsLog4CreateView4SqlEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsLog4CreateView4SqlEN.con_Memo,
      objLog4CreateView4SqlCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--Log4CreateView4Sql(建立视图日志),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strSqlViewId: Sql视图Id(要求唯一的字段)
 * @param strPrjDataBaseId: 项目数据库Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function Log4CreateView4Sql_GetUniCondStr(
  objLog4CreateView4SqlEN: clsLog4CreateView4SqlEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and SqlViewId = '{0}'", objLog4CreateView4SqlEN.sqlViewId);
  strWhereCond += Format(" and PrjDataBaseId = '{0}'", objLog4CreateView4SqlEN.prjDataBaseId);
  return strWhereCond;
}
/**
 *获取唯一性条件串(Uniqueness)--Log4CreateView4Sql(建立视图日志),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strPrjId: 工程ID(要求唯一的字段)
 * @param strPrjDataBaseId: 项目数据库Id(要求唯一的字段)
 * @param strSqlViewId: Sql视图Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function Log4CreateView4Sql_GetUniCondStr_V2(
  objLog4CreateView4SqlEN: clsLog4CreateView4SqlEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and PrjId = '{0}'", objLog4CreateView4SqlEN.prjId);
  strWhereCond += Format(" and PrjDataBaseId = '{0}'", objLog4CreateView4SqlEN.prjDataBaseId);
  strWhereCond += Format(" and SqlViewId = '{0}'", objLog4CreateView4SqlEN.sqlViewId);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--Log4CreateView4Sql(建立视图日志),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strSqlViewId: Sql视图Id(要求唯一的字段)
 * @param strPrjDataBaseId: 项目数据库Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function Log4CreateView4Sql_GetUniCondStr4Update(
  objLog4CreateView4SqlEN: clsLog4CreateView4SqlEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and mId <> '{0}'", objLog4CreateView4SqlEN.mId);
  strWhereCond += Format(" and SqlViewId = '{0}'", objLog4CreateView4SqlEN.sqlViewId);
  strWhereCond += Format(" and PrjDataBaseId = '{0}'", objLog4CreateView4SqlEN.prjDataBaseId);
  return strWhereCond;
}
/**
 *获取唯一性条件串(Uniqueness)--Log4CreateView4Sql(建立视图日志),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strPrjId: 工程ID(要求唯一的字段)
 * @param strPrjDataBaseId: 项目数据库Id(要求唯一的字段)
 * @param strSqlViewId: Sql视图Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function Log4CreateView4Sql_GetUniCondStr4Update_V2(
  objLog4CreateView4SqlEN: clsLog4CreateView4SqlEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and mId <> '{0}'", objLog4CreateView4SqlEN.mId);
  strWhereCond += Format(" and PrjId = '{0}'", objLog4CreateView4SqlEN.prjId);
  strWhereCond += Format(" and PrjDataBaseId = '{0}'", objLog4CreateView4SqlEN.prjDataBaseId);
  strWhereCond += Format(" and SqlViewId = '{0}'", objLog4CreateView4SqlEN.sqlViewId);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objLog4CreateView4SqlENS:源对象
 * @param objLog4CreateView4SqlENT:目标对象
 */
export function Log4CreateView4Sql_GetObjFromJsonObj(
  objLog4CreateView4SqlENS: clsLog4CreateView4SqlEN,
): clsLog4CreateView4SqlEN {
  const objLog4CreateView4SqlENT: clsLog4CreateView4SqlEN = new clsLog4CreateView4SqlEN();
  ObjectAssign(objLog4CreateView4SqlENT, objLog4CreateView4SqlENS);
  return objLog4CreateView4SqlENT;
}
