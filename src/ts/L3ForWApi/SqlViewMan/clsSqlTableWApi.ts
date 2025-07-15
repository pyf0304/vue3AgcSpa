/**
 * 类名:clsSqlTableWApi
 * 表名:SqlTable(00050624)
 * 版本:2025.05.12.1(服务器:WIN-SRV103-116)
 * 日期:2025/05/15 03:15:07
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 应用类型:Vue应用InCore-TS(30)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:Sql视图管理(SqlViewMan)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * Sql表(SqlTable)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2025年05月15日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty, Format, GetStrLen, tzDataType } from '@/ts/PubFun/clsString';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { ObjectAssign, GetExceptionStr, myShowErrorMsg } from '@/ts/PubFun/clsCommFunc4Web';
import { clsSqlTableENEx } from '@/ts/L0Entity/SqlViewMan/clsSqlTableENEx';
import { clsSqlTableEN } from '@/ts/L0Entity/SqlViewMan/clsSqlTableEN';
import { AddRecordResult } from '@/ts/PubFun/AddRecordResult';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';

export const sqlTable_Controller = 'SqlTableApi';
export const sqlTable_ConstructorName = 'sqlTable';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strSqlTableId:关键字
 * @returns 对象
 **/
export async function SqlTable_GetObjBySqlTableIdAsync(
  strSqlTableId: string,
): Promise<clsSqlTableEN | null> {
  const strThisFuncName = 'GetObjBySqlTableIdAsync';

  if (IsNullOrEmpty(strSqlTableId) == true) {
    const strMsg = Format(
      '参数:[strSqlTableId]不能为空!(In clsSqlTableWApi.GetObjBySqlTableIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strSqlTableId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strSqlTableId]的长度:[{0}]不正确!(clsSqlTableWApi.GetObjBySqlTableIdAsync)',
      strSqlTableId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjBySqlTableId';
  const strUrl = GetWebApiUrl(sqlTable_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strSqlTableId,
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
      const objSqlTable = SqlTable_GetObjFromJsonObj(returnObj);
      return objSqlTable;
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
        sqlTable_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sqlTable_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[GetObjBySqlTableIdlocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[GetObjBySqlTableIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )
//该表没有使用Cache,不需要生成[UpdateObjInLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-05-15
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function SqlTable_SortFunDefa(a: clsSqlTableEN, b: clsSqlTableEN): number {
  return a.sqlTableId.localeCompare(b.sqlTableId);
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2025-05-15
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function SqlTable_SortFunDefa2Fld(a: clsSqlTableEN, b: clsSqlTableEN): number {
  if (a.tableName == b.tableName) return a.xtype.localeCompare(b.xtype);
  else return a.tableName.localeCompare(b.tableName);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-05-15
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function SqlTable_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsSqlTableEN.con_SqlTableId:
        return (a: clsSqlTableEN, b: clsSqlTableEN) => {
          return a.sqlTableId.localeCompare(b.sqlTableId);
        };
      case clsSqlTableEN.con_TableName:
        return (a: clsSqlTableEN, b: clsSqlTableEN) => {
          if (a.tableName == null) return -1;
          if (b.tableName == null) return 1;
          return a.tableName.localeCompare(b.tableName);
        };
      case clsSqlTableEN.con_xtype:
        return (a: clsSqlTableEN, b: clsSqlTableEN) => {
          if (a.xtype == null) return -1;
          if (b.xtype == null) return 1;
          return a.xtype.localeCompare(b.xtype);
        };
      case clsSqlTableEN.con_crDate:
        return (a: clsSqlTableEN, b: clsSqlTableEN) => {
          return a.crDate.localeCompare(b.crDate);
        };
      case clsSqlTableEN.con_UpdDate:
        return (a: clsSqlTableEN, b: clsSqlTableEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsSqlTableEN.con_UpdUserId:
        return (a: clsSqlTableEN, b: clsSqlTableEN) => {
          if (a.updUserId == null) return -1;
          if (b.updUserId == null) return 1;
          return a.updUserId.localeCompare(b.updUserId);
        };
      case clsSqlTableEN.con_Memo:
        return (a: clsSqlTableEN, b: clsSqlTableEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[SqlTable]中不存在!(in ${sqlTable_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsSqlTableEN.con_SqlTableId:
        return (a: clsSqlTableEN, b: clsSqlTableEN) => {
          return b.sqlTableId.localeCompare(a.sqlTableId);
        };
      case clsSqlTableEN.con_TableName:
        return (a: clsSqlTableEN, b: clsSqlTableEN) => {
          if (b.tableName == null) return -1;
          if (a.tableName == null) return 1;
          return b.tableName.localeCompare(a.tableName);
        };
      case clsSqlTableEN.con_xtype:
        return (a: clsSqlTableEN, b: clsSqlTableEN) => {
          if (b.xtype == null) return -1;
          if (a.xtype == null) return 1;
          return b.xtype.localeCompare(a.xtype);
        };
      case clsSqlTableEN.con_crDate:
        return (a: clsSqlTableEN, b: clsSqlTableEN) => {
          return b.crDate.localeCompare(a.crDate);
        };
      case clsSqlTableEN.con_UpdDate:
        return (a: clsSqlTableEN, b: clsSqlTableEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsSqlTableEN.con_UpdUserId:
        return (a: clsSqlTableEN, b: clsSqlTableEN) => {
          if (b.updUserId == null) return -1;
          if (a.updUserId == null) return 1;
          return b.updUserId.localeCompare(a.updUserId);
        };
      case clsSqlTableEN.con_Memo:
        return (a: clsSqlTableEN, b: clsSqlTableEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[SqlTable]中不存在!(in ${sqlTable_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}
//该表没有使用Cache,不需要生成[GetNameBySqlTableIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-05-15
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function SqlTable_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsSqlTableEN.con_SqlTableId:
      return (obj: clsSqlTableEN) => {
        return obj.sqlTableId === value;
      };
    case clsSqlTableEN.con_TableName:
      return (obj: clsSqlTableEN) => {
        return obj.tableName === value;
      };
    case clsSqlTableEN.con_xtype:
      return (obj: clsSqlTableEN) => {
        return obj.xtype === value;
      };
    case clsSqlTableEN.con_crDate:
      return (obj: clsSqlTableEN) => {
        return obj.crDate === value;
      };
    case clsSqlTableEN.con_UpdDate:
      return (obj: clsSqlTableEN) => {
        return obj.updDate === value;
      };
    case clsSqlTableEN.con_UpdUserId:
      return (obj: clsSqlTableEN) => {
        return obj.updUserId === value;
      };
    case clsSqlTableEN.con_Memo:
      return (obj: clsSqlTableEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[SqlTable]中不存在!(in ${sqlTable_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}
//该表没有使用Cache,不需要生成[func]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func )
//该表没有使用Cache,不需要生成[SqlTable__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function SqlTable_GetFldValueAsync(
  strFldName: string,
  strWhereCond: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetFldValueAsync';
  const strAction = 'GetFldValue';
  const strUrl = GetWebApiUrl(sqlTable_Controller, strAction);

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
        sqlTable_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sqlTable_ConstructorName,
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
export async function SqlTable_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(sqlTable_Controller, strAction);

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
        sqlTable_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sqlTable_ConstructorName,
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
export async function SqlTable_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(sqlTable_Controller, strAction);

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
        sqlTable_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sqlTable_ConstructorName,
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
export async function SqlTable_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsSqlTableEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(sqlTable_Controller, strAction);

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
      const objSqlTable = SqlTable_GetObjFromJsonObj(returnObj);
      return objSqlTable;
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
        sqlTable_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sqlTable_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[GetObjLstClientCache]函数;
//该表没有使用Cache,不需要生成[GetObjLstlocalStorage]函数;
//该表没有使用Cache,不需要生成[GetObjLstlocalStoragePureCache]函数;

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function SqlTable_GetObjLstAsync(strWhereCond: string): Promise<Array<clsSqlTableEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(sqlTable_Controller, strAction);

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
          sqlTable_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = SqlTable_GetObjLstByJSONObjLst(returnObjLst);
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
        sqlTable_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sqlTable_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[GetObjLstsessionStorage]函数;
//该表没有使用Cache,不需要生成[GetObjLstsessionStoragePureCache]函数;
//该表没有使用Cache,不需要生成[GetObjLst_Cache]函数;
//该表没有使用Cache,不需要生成[GetObjLstPureCache]函数;
//该表没有使用Cache,不需要生成[GetSubObjLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrSqlTableId:关键字列表
 * @returns 对象列表
 **/
export async function SqlTable_GetObjLstBySqlTableIdLstAsync(
  arrSqlTableId: Array<string>,
): Promise<Array<clsSqlTableEN>> {
  const strThisFuncName = 'GetObjLstBySqlTableIdLstAsync';
  const strAction = 'GetObjLstBySqlTableIdLst';
  const strUrl = GetWebApiUrl(sqlTable_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrSqlTableId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          sqlTable_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = SqlTable_GetObjLstByJSONObjLst(returnObjLst);
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
        sqlTable_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sqlTable_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[GetObjLstBySqlTableIdLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

/**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export async function SqlTable_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsSqlTableEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(sqlTable_Controller, strAction);

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
          sqlTable_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = SqlTable_GetObjLstByJSONObjLst(returnObjLst);
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
        sqlTable_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sqlTable_ConstructorName,
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
export async function SqlTable_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsSqlTableEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(sqlTable_Controller, strAction);

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
          sqlTable_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = SqlTable_GetObjLstByJSONObjLst(returnObjLst);
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
        sqlTable_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sqlTable_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[GetObjLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerCache)

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function SqlTable_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsSqlTableEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsSqlTableEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(sqlTable_Controller, strAction);

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
          sqlTable_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = SqlTable_GetObjLstByJSONObjLst(returnObjLst);
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
        sqlTable_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sqlTable_ConstructorName,
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
 * @param strSqlTableId:关键字
 * @returns 获取删除的结果
 **/
export async function SqlTable_DelRecordAsync(strSqlTableId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(sqlTable_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strSqlTableId);

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
        sqlTable_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sqlTable_ConstructorName,
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
 * @param arrSqlTableId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function SqlTable_DelSqlTablesAsync(arrSqlTableId: Array<string>): Promise<number> {
  const strThisFuncName = 'DelSqlTablesAsync';
  const strAction = 'DelSqlTables';
  const strUrl = GetWebApiUrl(sqlTable_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrSqlTableId, config);
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
        sqlTable_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sqlTable_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjExLstByPagerCache)

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CopyToEx)
 * @param objSqlTableENS:源对象
 * @returns 目标对象=>clsSqlTableEN:objSqlTableENT
 **/
export function SqlTable_CopyToEx(objSqlTableENS: clsSqlTableEN): clsSqlTableENEx {
  const strThisFuncName = SqlTable_CopyToEx.name;
  const objSqlTableENT = new clsSqlTableENEx();
  try {
    ObjectAssign(objSqlTableENT, objSqlTableENS);
    return objSqlTableENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001294)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      sqlTable_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objSqlTableENT;
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2025-05-15
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function SqlTableEx_FuncMapByFldName(strFldName: string, objSqlTableEx: clsSqlTableENEx) {
  const strThisFuncName = SqlTableEx_FuncMapByFldName.name;
  console.log(objSqlTableEx);
  strFldName = strFldName.replace('|Ex', '');
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsSqlTableEN.AttributeName;
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
 * 日期:2025-05-15
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByExKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function SqlTableEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  strKey = strKey.replace('|Ex', '');
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      default:
        return SqlTable_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      default:
        return SqlTable_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据条件删除记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelMultiRecordByCondAsync)
 * @returns 实际删除记录的个数
 **/
export async function SqlTable_DelSqlTablesByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'DelSqlTablesByCondAsync';
  const strAction = 'DelSqlTablesByCond';
  const strUrl = GetWebApiUrl(sqlTable_Controller, strAction);

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
        sqlTable_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sqlTable_ConstructorName,
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
 * @param objSqlTableEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function SqlTable_AddNewRecordAsync(objSqlTableEN: clsSqlTableEN): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objSqlTableEN);
  const strUrl = GetWebApiUrl(sqlTable_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objSqlTableEN, config);
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
        sqlTable_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sqlTable_ConstructorName,
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
 * @param objSqlTableEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function SqlTable_AddNewRecordWithMaxIdAsync(
  objSqlTableEN: clsSqlTableEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(sqlTable_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objSqlTableEN, config);
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
        sqlTable_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sqlTable_ConstructorName,
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
export async function SqlTable_AddNewObjSave(
  objSqlTableEN: clsSqlTableEN,
): Promise<AddRecordResult> {
  const strThisFuncName = 'AddNewObjSave';
  try {
    SqlTable_CheckPropertyNew(objSqlTableEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${sqlTable_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    alert(strMsg);
    return { keyword: '', success: false }; //一定要有一个返回值,否则会出错!
  }
  try {
    //检查唯一性条件
    let returnBool = false;
    const returnKeyId = await SqlTable_AddNewRecordWithMaxIdAsync(objSqlTableEN);
    if (IsNullOrEmpty(returnKeyId) == false) {
      returnBool = true;
    }
    if (returnBool == true) {
      //SqlTable_ReFreshCache();
    } else {
      const strInfo = `添加[Sql表(SqlTable)]记录不成功!`;
      //显示信息框
      throw strInfo;
    }
    return { keyword: returnKeyId, success: returnBool }; //一定要有一个返回值,否则会出错!
  } catch (e) {
    const strMsg = `添加记录不成功,${e}.(in ${sqlTable_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/** 修改记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjSave)
 **/
export async function SqlTable_UpdateObjSave(objSqlTableEN: clsSqlTableEN): Promise<boolean> {
  const strThisFuncName = 'UpdateObjSave';
  objSqlTableEN.sfUpdFldSetStr = objSqlTableEN.updFldString; //设置哪些字段被修改(脏字段)
  if (objSqlTableEN.sqlTableId == '' || objSqlTableEN.sqlTableId == undefined) {
    console.error('关键字不能为空!');
    throw '关键字不能为空!';
  }
  try {
    SqlTable_CheckProperty4Update(objSqlTableEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${sqlTable_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
  try {
    //检查唯一性条件
    const returnBool = await SqlTable_UpdateRecordAsync(objSqlTableEN);
    if (returnBool == true) {
      //SqlTable_ReFreshCache();
    }
    return returnBool;
  } catch (e) {
    const strMsg = `修改记录不成功,${e}.(in ${sqlTable_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objSqlTableEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function SqlTable_AddNewRecordWithReturnKeyAsync(
  objSqlTableEN: clsSqlTableEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(sqlTable_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objSqlTableEN, config);
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
        sqlTable_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sqlTable_ConstructorName,
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
 * @param objSqlTableEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function SqlTable_UpdateRecordAsync(objSqlTableEN: clsSqlTableEN): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objSqlTableEN.sfUpdFldSetStr === undefined ||
    objSqlTableEN.sfUpdFldSetStr === null ||
    objSqlTableEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objSqlTableEN.sqlTableId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(sqlTable_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objSqlTableEN, config);
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
        sqlTable_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sqlTable_ConstructorName,
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
 * @param objSqlTableEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function SqlTable_EditRecordExAsync(objSqlTableEN: clsSqlTableEN): Promise<boolean> {
  const strThisFuncName = 'EditRecordExAsync';
  const strAction = 'EditRecordEx';
  if (
    objSqlTableEN.sfUpdFldSetStr === undefined ||
    objSqlTableEN.sfUpdFldSetStr === null ||
    objSqlTableEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objSqlTableEN.sqlTableId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(sqlTable_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objSqlTableEN, config);
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
        sqlTable_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sqlTable_ConstructorName,
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
 * @param objSqlTableEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function SqlTable_UpdateWithConditionAsync(
  objSqlTableEN: clsSqlTableEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objSqlTableEN.sfUpdFldSetStr === undefined ||
    objSqlTableEN.sfUpdFldSetStr === null ||
    objSqlTableEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objSqlTableEN.sqlTableId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(sqlTable_Controller, strAction);
  objSqlTableEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objSqlTableEN, config);
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
        sqlTable_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sqlTable_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[IsExistRecordCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistRecordCache)

/**
 * 根据条件获取是否存在相应的记录？
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistRecordAsync)
 * @param strWhereCond:条件
 * @returns 是否存在记录？
 **/
export async function SqlTable_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(sqlTable_Controller, strAction);

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
        sqlTable_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sqlTable_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[IsExistCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistCache)

/**
 * 根据关键字判断是否存在记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistAsync)
 * @param strSqlTableId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function SqlTable_IsExistAsync(strSqlTableId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(sqlTable_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strSqlTableId,
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
        sqlTable_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sqlTable_ConstructorName,
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
export async function SqlTable_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(sqlTable_Controller, strAction);

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
        sqlTable_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sqlTable_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[GetRecCountByCondCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetRecCountByCondCache)

/**
 * 获取表的最大关键字
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetMaxStrIdAsync)
 * @returns 获取表的最大关键字
 **/
export async function SqlTable_GetMaxStrIdAsync(): Promise<string> {
  const strThisFuncName = 'GetMaxStrIdAsync';
  const strAction = 'GetMaxStrId';
  const strUrl = GetWebApiUrl(sqlTable_Controller, strAction);

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
        sqlTable_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sqlTable_ConstructorName,
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
export async function SqlTable_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(sqlTable_Controller, strAction);

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
        sqlTable_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sqlTable_ConstructorName,
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
export function SqlTable_GetWebApiUrl(strController: string, strAction: string): string {
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
//该表没有使用Cache,不需要生成[ReFreshCache]函数;
//该表没有使用Cache,不需要生成[ReFreshThisCache]函数;
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function SqlTable_CheckPropertyNew(pobjSqlTableEN: clsSqlTableEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjSqlTableEN.crDate) === true) {
    throw new Error(
      `(errid:Watl000411)字段[crDate]不能为空(In Sql表)!(clsSqlTableBL:CheckPropertyNew0)`,
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjSqlTableEN.sqlTableId) == false &&
    GetStrLen(pobjSqlTableEN.sqlTableId) > 8
  ) {
    throw new Error(
      `(errid:Watl000413)字段[Sql视图Id(sqlTableId)]的长度不能超过8(In Sql表(SqlTable))!值:${pobjSqlTableEN.sqlTableId}(clsSqlTableBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjSqlTableEN.tableName) == false &&
    GetStrLen(pobjSqlTableEN.tableName) > 100
  ) {
    throw new Error(
      `(errid:Watl000413)字段[表名(tableName)]的长度不能超过100(In Sql表(SqlTable))!值:${pobjSqlTableEN.tableName}(clsSqlTableBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjSqlTableEN.xtype) == false && GetStrLen(pobjSqlTableEN.xtype) > 8000) {
    throw new Error(
      `(errid:Watl000413)字段[xtype(xtype)]的长度不能超过8000(In Sql表(SqlTable))!值:${pobjSqlTableEN.xtype}(clsSqlTableBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjSqlTableEN.crDate) == false && GetStrLen(pobjSqlTableEN.crDate) > 100) {
    throw new Error(
      `(errid:Watl000413)字段[crDate(crDate)]的长度不能超过100(In Sql表(SqlTable))!值:${pobjSqlTableEN.crDate}(clsSqlTableBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjSqlTableEN.updDate) == false && GetStrLen(pobjSqlTableEN.updDate) > 20) {
    throw new Error(
      `(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In Sql表(SqlTable))!值:${pobjSqlTableEN.updDate}(clsSqlTableBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjSqlTableEN.updUserId) == false &&
    GetStrLen(pobjSqlTableEN.updUserId) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改用户Id(updUserId)]的长度不能超过20(In Sql表(SqlTable))!值:${pobjSqlTableEN.updUserId}(clsSqlTableBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjSqlTableEN.memo) == false && GetStrLen(pobjSqlTableEN.memo) > 1000) {
    throw new Error(
      `(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In Sql表(SqlTable))!值:${pobjSqlTableEN.memo}(clsSqlTableBL:CheckPropertyNew)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjSqlTableEN.sqlTableId) == false &&
    undefined !== pobjSqlTableEN.sqlTableId &&
    tzDataType.isString(pobjSqlTableEN.sqlTableId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[Sql视图Id(sqlTableId)]的值:[${pobjSqlTableEN.sqlTableId}], 非法,应该为字符型(In Sql表(SqlTable))!(clsSqlTableBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjSqlTableEN.tableName) == false &&
    undefined !== pobjSqlTableEN.tableName &&
    tzDataType.isString(pobjSqlTableEN.tableName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[表名(tableName)]的值:[${pobjSqlTableEN.tableName}], 非法,应该为字符型(In Sql表(SqlTable))!(clsSqlTableBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjSqlTableEN.xtype) == false &&
    undefined !== pobjSqlTableEN.xtype &&
    tzDataType.isString(pobjSqlTableEN.xtype) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[xtype(xtype)]的值:[${pobjSqlTableEN.xtype}], 非法,应该为字符型(In Sql表(SqlTable))!(clsSqlTableBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjSqlTableEN.crDate) == false &&
    undefined !== pobjSqlTableEN.crDate &&
    tzDataType.isString(pobjSqlTableEN.crDate) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[crDate(crDate)]的值:[${pobjSqlTableEN.crDate}], 非法,应该为字符型(In Sql表(SqlTable))!(clsSqlTableBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjSqlTableEN.updDate) == false &&
    undefined !== pobjSqlTableEN.updDate &&
    tzDataType.isString(pobjSqlTableEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjSqlTableEN.updDate}], 非法,应该为字符型(In Sql表(SqlTable))!(clsSqlTableBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjSqlTableEN.updUserId) == false &&
    undefined !== pobjSqlTableEN.updUserId &&
    tzDataType.isString(pobjSqlTableEN.updUserId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改用户Id(updUserId)]的值:[${pobjSqlTableEN.updUserId}], 非法,应该为字符型(In Sql表(SqlTable))!(clsSqlTableBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjSqlTableEN.memo) == false &&
    undefined !== pobjSqlTableEN.memo &&
    tzDataType.isString(pobjSqlTableEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[说明(memo)]的值:[${pobjSqlTableEN.memo}], 非法,应该为字符型(In Sql表(SqlTable))!(clsSqlTableBL:CheckPropertyNew0)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function SqlTable_CheckProperty4Update(pobjSqlTableEN: clsSqlTableEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjSqlTableEN.sqlTableId) == false &&
    GetStrLen(pobjSqlTableEN.sqlTableId) > 8
  ) {
    throw new Error(
      `(errid:Watl000416)字段[Sql视图Id(sqlTableId)]的长度不能超过8(In Sql表(SqlTable))!值:${pobjSqlTableEN.sqlTableId}(clsSqlTableBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjSqlTableEN.tableName) == false &&
    GetStrLen(pobjSqlTableEN.tableName) > 100
  ) {
    throw new Error(
      `(errid:Watl000416)字段[表名(tableName)]的长度不能超过100(In Sql表(SqlTable))!值:${pobjSqlTableEN.tableName}(clsSqlTableBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjSqlTableEN.xtype) == false && GetStrLen(pobjSqlTableEN.xtype) > 8000) {
    throw new Error(
      `(errid:Watl000416)字段[xtype(xtype)]的长度不能超过8000(In Sql表(SqlTable))!值:${pobjSqlTableEN.xtype}(clsSqlTableBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjSqlTableEN.crDate) == false && GetStrLen(pobjSqlTableEN.crDate) > 100) {
    throw new Error(
      `(errid:Watl000416)字段[crDate(crDate)]的长度不能超过100(In Sql表(SqlTable))!值:${pobjSqlTableEN.crDate}(clsSqlTableBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjSqlTableEN.updDate) == false && GetStrLen(pobjSqlTableEN.updDate) > 20) {
    throw new Error(
      `(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In Sql表(SqlTable))!值:${pobjSqlTableEN.updDate}(clsSqlTableBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjSqlTableEN.updUserId) == false &&
    GetStrLen(pobjSqlTableEN.updUserId) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改用户Id(updUserId)]的长度不能超过20(In Sql表(SqlTable))!值:${pobjSqlTableEN.updUserId}(clsSqlTableBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjSqlTableEN.memo) == false && GetStrLen(pobjSqlTableEN.memo) > 1000) {
    throw new Error(
      `(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In Sql表(SqlTable))!值:${pobjSqlTableEN.memo}(clsSqlTableBL:CheckProperty4Update)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjSqlTableEN.sqlTableId) == false &&
    undefined !== pobjSqlTableEN.sqlTableId &&
    tzDataType.isString(pobjSqlTableEN.sqlTableId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[Sql视图Id(sqlTableId)]的值:[${pobjSqlTableEN.sqlTableId}], 非法,应该为字符型(In Sql表(SqlTable))!(clsSqlTableBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjSqlTableEN.tableName) == false &&
    undefined !== pobjSqlTableEN.tableName &&
    tzDataType.isString(pobjSqlTableEN.tableName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[表名(tableName)]的值:[${pobjSqlTableEN.tableName}], 非法,应该为字符型(In Sql表(SqlTable))!(clsSqlTableBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjSqlTableEN.xtype) == false &&
    undefined !== pobjSqlTableEN.xtype &&
    tzDataType.isString(pobjSqlTableEN.xtype) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[xtype(xtype)]的值:[${pobjSqlTableEN.xtype}], 非法,应该为字符型(In Sql表(SqlTable))!(clsSqlTableBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjSqlTableEN.crDate) == false &&
    undefined !== pobjSqlTableEN.crDate &&
    tzDataType.isString(pobjSqlTableEN.crDate) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[crDate(crDate)]的值:[${pobjSqlTableEN.crDate}], 非法,应该为字符型(In Sql表(SqlTable))!(clsSqlTableBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjSqlTableEN.updDate) == false &&
    undefined !== pobjSqlTableEN.updDate &&
    tzDataType.isString(pobjSqlTableEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjSqlTableEN.updDate}], 非法,应该为字符型(In Sql表(SqlTable))!(clsSqlTableBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjSqlTableEN.updUserId) == false &&
    undefined !== pobjSqlTableEN.updUserId &&
    tzDataType.isString(pobjSqlTableEN.updUserId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改用户Id(updUserId)]的值:[${pobjSqlTableEN.updUserId}], 非法,应该为字符型(In Sql表(SqlTable))!(clsSqlTableBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjSqlTableEN.memo) == false &&
    undefined !== pobjSqlTableEN.memo &&
    tzDataType.isString(pobjSqlTableEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[说明(memo)]的值:[${pobjSqlTableEN.memo}], 非法,应该为字符型(In Sql表(SqlTable))!(clsSqlTableBL:CheckProperty4Update)`,
    );
  }
  //检查主键是否为Null或者空!
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2025-05-15
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function SqlTable_GetJSONStrByObj(pobjSqlTableEN: clsSqlTableEN): string {
  pobjSqlTableEN.sfUpdFldSetStr = pobjSqlTableEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjSqlTableEN);
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
 * 日期:2025-05-15
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
 */
export function SqlTable_GetObjLstByJSONStr(strJSON: string): Array<clsSqlTableEN> {
  let arrSqlTableObjLst = new Array<clsSqlTableEN>();
  if (strJSON === '') {
    return arrSqlTableObjLst;
  }
  try {
    arrSqlTableObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrSqlTableObjLst;
  }
  return arrSqlTableObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-05-15
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrSqlTableObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function SqlTable_GetObjLstByJSONObjLst(
  arrSqlTableObjLstS: Array<clsSqlTableEN>,
): Array<clsSqlTableEN> {
  const arrSqlTableObjLst = new Array<clsSqlTableEN>();
  for (const objInFor of arrSqlTableObjLstS) {
    const obj1 = SqlTable_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrSqlTableObjLst.push(obj1);
  }
  return arrSqlTableObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-05-15
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function SqlTable_GetObjByJSONStr(strJSON: string): clsSqlTableEN {
  let pobjSqlTableEN = new clsSqlTableEN();
  if (strJSON === '') {
    return pobjSqlTableEN;
  }
  try {
    pobjSqlTableEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjSqlTableEN;
  }
  return pobjSqlTableEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function SqlTable_GetCombineCondition(objSqlTableCond: clsSqlTableEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objSqlTableCond.dicFldComparisonOp,
      clsSqlTableEN.con_SqlTableId,
    ) == true
  ) {
    const strComparisonOpSqlTableId: string =
      objSqlTableCond.dicFldComparisonOp[clsSqlTableEN.con_SqlTableId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSqlTableEN.con_SqlTableId,
      objSqlTableCond.sqlTableId,
      strComparisonOpSqlTableId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSqlTableCond.dicFldComparisonOp,
      clsSqlTableEN.con_TableName,
    ) == true
  ) {
    const strComparisonOpTableName: string =
      objSqlTableCond.dicFldComparisonOp[clsSqlTableEN.con_TableName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSqlTableEN.con_TableName,
      objSqlTableCond.tableName,
      strComparisonOpTableName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSqlTableCond.dicFldComparisonOp,
      clsSqlTableEN.con_xtype,
    ) == true
  ) {
    const strComparisonOpxtype: string =
      objSqlTableCond.dicFldComparisonOp[clsSqlTableEN.con_xtype];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSqlTableEN.con_xtype,
      objSqlTableCond.xtype,
      strComparisonOpxtype,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSqlTableCond.dicFldComparisonOp,
      clsSqlTableEN.con_crDate,
    ) == true
  ) {
    const strComparisonOpcrDate: string =
      objSqlTableCond.dicFldComparisonOp[clsSqlTableEN.con_crDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSqlTableEN.con_crDate,
      objSqlTableCond.crDate,
      strComparisonOpcrDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSqlTableCond.dicFldComparisonOp,
      clsSqlTableEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objSqlTableCond.dicFldComparisonOp[clsSqlTableEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSqlTableEN.con_UpdDate,
      objSqlTableCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSqlTableCond.dicFldComparisonOp,
      clsSqlTableEN.con_UpdUserId,
    ) == true
  ) {
    const strComparisonOpUpdUserId: string =
      objSqlTableCond.dicFldComparisonOp[clsSqlTableEN.con_UpdUserId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSqlTableEN.con_UpdUserId,
      objSqlTableCond.updUserId,
      strComparisonOpUpdUserId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSqlTableCond.dicFldComparisonOp,
      clsSqlTableEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string = objSqlTableCond.dicFldComparisonOp[clsSqlTableEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSqlTableEN.con_Memo,
      objSqlTableCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objSqlTableENS:源对象
 * @param objSqlTableENT:目标对象
 */
export function SqlTable_GetObjFromJsonObj(objSqlTableENS: clsSqlTableEN): clsSqlTableEN {
  const objSqlTableENT: clsSqlTableEN = new clsSqlTableEN();
  ObjectAssign(objSqlTableENT, objSqlTableENS);
  return objSqlTableENT;
}
