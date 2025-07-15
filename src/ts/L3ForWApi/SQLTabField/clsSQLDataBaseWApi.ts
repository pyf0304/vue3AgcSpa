/**
 * 类名:clsSQLDataBaseWApi
 * 表名:SQL_DataBase(00050172)
 * 版本:2023.06.08.1(服务器:WIN-SRV103-116)
 * 日期:2023/06/08 06:14:36
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:SQL表字段管理(SQLTabField)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * SQL数据库(SQLDataBase)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2023年06月08日.
 * 注意:该类必须与调用界面处于同一个包，否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty, GetStrLen, tzDataType, Format } from '@/ts/PubFun/clsString';
import { clsSQLDataBaseEN } from '@/ts/L0Entity/SQLTabField/clsSQLDataBaseEN';
import { GetExceptionStr, myShowErrorMsg, ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const sQLDataBaseController = 'SQLDataBaseApi';
export const sQLDataBaseConstructorName = 'sQLDataBase';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strDataBaseName:关键字
 * @returns 对象
 **/
export async function SQLDataBaseGetObjByDataBaseNameAsync(
  strDataBaseName: string,
): Promise<clsSQLDataBaseEN | null> {
  const strThisFuncName = 'GetObjByDataBaseNameAsync';

  if (IsNullOrEmpty(strDataBaseName) == true) {
    const strMsg = Format(
      '参数:[strDataBaseName]不能为空！(In clsSQLDataBaseWApi.GetObjByDataBaseNameAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByDataBaseName';
  const strUrl = GetWebApiUrl(sQLDataBaseController, strAction);
  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strDataBaseName,
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
      const objSQLDataBase = SQLDataBaseGetObjFromJsonObj(returnObj);
      return objSQLDataBase;
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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        sQLDataBaseConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        sQLDataBaseConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[GetObjByDataBaseNameCache]函数;
//该表没有使用Cache,不需要生成[GetObjByDataBaseNamelocalStorage]函数;
//该表没有使用Cache,不需要生成[UpdateObjInLstCache]函数;
//该表没有使用Cache,不需要生成[GetNameByDataBaseNameCache]函数;
//该表没有使用Cache,不需要生成[func]函数;

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2023-06-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function SQLDataBaseSortFunDefa(a: clsSQLDataBaseEN, b: clsSQLDataBaseEN): number {
  return a.dataBaseName.localeCompare(b.dataBaseName);
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2023-06-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function SQLDataBaseSortFunDefa2Fld(a: clsSQLDataBaseEN, b: clsSQLDataBaseEN): number {
  if (a.server == b.server) return a.userId.localeCompare(b.userId);
  else return a.server.localeCompare(b.server);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2023-06-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function SQLDataBaseSortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsSQLDataBaseEN.conServer:
        return (a: clsSQLDataBaseEN, b: clsSQLDataBaseEN) => {
          return a.server.localeCompare(b.server);
        };
      case clsSQLDataBaseEN.conUserId:
        return (a: clsSQLDataBaseEN, b: clsSQLDataBaseEN) => {
          return a.userId.localeCompare(b.userId);
        };
      case clsSQLDataBaseEN.conPassword:
        return (a: clsSQLDataBaseEN, b: clsSQLDataBaseEN) => {
          return a.password.localeCompare(b.password);
        };
      case clsSQLDataBaseEN.conUserIdForMaster:
        return (a: clsSQLDataBaseEN, b: clsSQLDataBaseEN) => {
          return a.userIdForMaster.localeCompare(b.userIdForMaster);
        };
      case clsSQLDataBaseEN.conPasswordForMaster:
        return (a: clsSQLDataBaseEN, b: clsSQLDataBaseEN) => {
          return a.passwordForMaster.localeCompare(b.passwordForMaster);
        };
      case clsSQLDataBaseEN.conPrjId:
        return (a: clsSQLDataBaseEN, b: clsSQLDataBaseEN) => {
          return a.prjId.localeCompare(b.prjId);
        };
      case clsSQLDataBaseEN.conDatabaseOwner:
        return (a: clsSQLDataBaseEN, b: clsSQLDataBaseEN) => {
          if (a.databaseOwner == null) return -1;
          if (b.databaseOwner == null) return 1;
          return a.databaseOwner.localeCompare(b.databaseOwner);
        };
      case clsSQLDataBaseEN.conDataBaseName:
        return (a: clsSQLDataBaseEN, b: clsSQLDataBaseEN) => {
          return a.dataBaseName.localeCompare(b.dataBaseName);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[SQLDataBase]中不存在！(in ${sQLDataBaseConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsSQLDataBaseEN.conServer:
        return (a: clsSQLDataBaseEN, b: clsSQLDataBaseEN) => {
          return b.server.localeCompare(a.server);
        };
      case clsSQLDataBaseEN.conUserId:
        return (a: clsSQLDataBaseEN, b: clsSQLDataBaseEN) => {
          return b.userId.localeCompare(a.userId);
        };
      case clsSQLDataBaseEN.conPassword:
        return (a: clsSQLDataBaseEN, b: clsSQLDataBaseEN) => {
          return b.password.localeCompare(a.password);
        };
      case clsSQLDataBaseEN.conUserIdForMaster:
        return (a: clsSQLDataBaseEN, b: clsSQLDataBaseEN) => {
          return b.userIdForMaster.localeCompare(a.userIdForMaster);
        };
      case clsSQLDataBaseEN.conPasswordForMaster:
        return (a: clsSQLDataBaseEN, b: clsSQLDataBaseEN) => {
          return b.passwordForMaster.localeCompare(a.passwordForMaster);
        };
      case clsSQLDataBaseEN.conPrjId:
        return (a: clsSQLDataBaseEN, b: clsSQLDataBaseEN) => {
          return b.prjId.localeCompare(a.prjId);
        };
      case clsSQLDataBaseEN.conDatabaseOwner:
        return (a: clsSQLDataBaseEN, b: clsSQLDataBaseEN) => {
          if (b.databaseOwner == null) return -1;
          if (a.databaseOwner == null) return 1;
          return b.databaseOwner.localeCompare(a.databaseOwner);
        };
      case clsSQLDataBaseEN.conDataBaseName:
        return (a: clsSQLDataBaseEN, b: clsSQLDataBaseEN) => {
          return b.dataBaseName.localeCompare(a.dataBaseName);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[SQLDataBase]中不存在！(in ${sQLDataBaseConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较，返回是否相等
 * 作者:pyf
 * 日期:2023-06-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function SQLDataBaseFilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsSQLDataBaseEN.conServer:
      return (obj: clsSQLDataBaseEN) => {
        return obj.server === value;
      };
    case clsSQLDataBaseEN.conUserId:
      return (obj: clsSQLDataBaseEN) => {
        return obj.userId === value;
      };
    case clsSQLDataBaseEN.conPassword:
      return (obj: clsSQLDataBaseEN) => {
        return obj.password === value;
      };
    case clsSQLDataBaseEN.conUserIdForMaster:
      return (obj: clsSQLDataBaseEN) => {
        return obj.userIdForMaster === value;
      };
    case clsSQLDataBaseEN.conPasswordForMaster:
      return (obj: clsSQLDataBaseEN) => {
        return obj.passwordForMaster === value;
      };
    case clsSQLDataBaseEN.conPrjId:
      return (obj: clsSQLDataBaseEN) => {
        return obj.prjId === value;
      };
    case clsSQLDataBaseEN.conDatabaseOwner:
      return (obj: clsSQLDataBaseEN) => {
        return obj.databaseOwner === value;
      };
    case clsSQLDataBaseEN.conDataBaseName:
      return (obj: clsSQLDataBaseEN) => {
        return obj.dataBaseName === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[SQLDataBase]中不存在！(in ${sQLDataBaseConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}
//该表没有使用Cache,不需要生成[SQLDataBasefuncKey]函数;

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function SQLDataBaseGetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(sQLDataBaseController, strAction);
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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        sQLDataBaseConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        sQLDataBaseConstructorName,
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
export async function SQLDataBaseGetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(sQLDataBaseController, strAction);
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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        sQLDataBaseConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        sQLDataBaseConstructorName,
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
export async function SQLDataBaseGetFirstObjAsync(
  strWhereCond: string,
): Promise<clsSQLDataBaseEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(sQLDataBaseController, strAction);
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
      const objSQLDataBase = SQLDataBaseGetObjFromJsonObj(returnObj);
      return objSQLDataBase;
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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        sQLDataBaseConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        sQLDataBaseConstructorName,
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
export async function SQLDataBaseGetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsSQLDataBaseEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(sQLDataBaseController, strAction);
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
          sQLDataBaseConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = SQLDataBaseGetObjLstByJSONObjLst(returnObjLst);
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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        sQLDataBaseConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        sQLDataBaseConstructorName,
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
//该表没有使用Cache,不需要生成[GetObjLstCache]函数;
//该表没有使用Cache,不需要生成[GetObjLstPureCache]函数;
//该表没有使用Cache,不需要生成[GetSubObjLstCache]函数;

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrDataBaseName:关键字列表
 * @returns 对象列表
 **/
export async function SQLDataBaseGetObjLstByDataBaseNameLstAsync(
  arrDataBaseName: Array<string>,
): Promise<Array<clsSQLDataBaseEN>> {
  const strThisFuncName = 'GetObjLstByDataBaseNameLstAsync';
  const strAction = 'GetObjLstByDataBaseNameLst';
  const strUrl = GetWebApiUrl(sQLDataBaseController, strAction);
  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrDataBaseName, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          sQLDataBaseConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = SQLDataBaseGetObjLstByJSONObjLst(returnObjLst);
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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        sQLDataBaseConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        sQLDataBaseConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[GetObjLstByDataBaseNameLstCache]函数;

/**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export async function SQLDataBaseGetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsSQLDataBaseEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(sQLDataBaseController, strAction);
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
          sQLDataBaseConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = SQLDataBaseGetObjLstByJSONObjLst(returnObjLst);
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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        sQLDataBaseConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        sQLDataBaseConstructorName,
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
 * 根据范围条件获取相应的记录对象列表，获取某范围的记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByRangeAsync)
 * @param objRangePara:根据范围获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function SQLDataBaseGetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsSQLDataBaseEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(sQLDataBaseController, strAction);
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
          sQLDataBaseConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = SQLDataBaseGetObjLstByJSONObjLst(returnObjLst);
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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        sQLDataBaseConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        sQLDataBaseConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[GetObjLstByPagerCache]函数;

/**
 * 根据分页条件获取相应的记录对象列表，只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function SQLDataBaseGetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsSQLDataBaseEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsSQLDataBaseEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(sQLDataBaseController, strAction);
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
          sQLDataBaseConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = SQLDataBaseGetObjLstByJSONObjLst(returnObjLst);
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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        sQLDataBaseConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        sQLDataBaseConstructorName,
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
 * 调用WebApi来删除记录，根据关键字来删除记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelRecordAsync)
 * @param strDataBaseName:关键字
 * @returns 获取删除的结果
 **/
export async function SQLDataBaseDelRecordAsync(strDataBaseName: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(sQLDataBaseController, strAction);
  strUrl = Format('{0}/?Id={1}', strUrl, strDataBaseName);
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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        sQLDataBaseConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        sQLDataBaseConstructorName,
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
 * @param arrDataBaseName:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function SQLDataBaseDelSQLDataBasesAsync(
  arrDataBaseName: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelSQLDataBasesAsync';
  const strAction = 'DelSQLDataBases';
  const strUrl = GetWebApiUrl(sQLDataBaseController, strAction);
  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrDataBaseName, config);
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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        sQLDataBaseConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        sQLDataBaseConstructorName,
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
export async function SQLDataBaseDelSQLDataBasesByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'DelSQLDataBasesByCondAsync';
  const strAction = 'DelSQLDataBasesByCond';
  const strUrl = GetWebApiUrl(sQLDataBaseController, strAction);
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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        sQLDataBaseConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        sQLDataBaseConstructorName,
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
 * 调用WebApi来添加记录，数据传递使用JSON串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordAsync)
 * @param objSQLDataBaseEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function SQLDataBaseAddNewRecordAsync(
  objSQLDataBaseEN: clsSQLDataBaseEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  if (objSQLDataBaseEN.dataBaseName === null || objSQLDataBaseEN.dataBaseName === '') {
    const strMsg = '需要的对象的关键字为空，不能添加!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objSQLDataBaseEN);
  const strUrl = GetWebApiUrl(sQLDataBaseController, strAction);
  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objSQLDataBaseEN, config);
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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        sQLDataBaseConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        sQLDataBaseConstructorName,
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
 * 调用WebApi来添加记录，关键字用最大关键字，数据传递使用JSON串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithMaxIdAsync)
 * @param objSQLDataBaseEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function SQLDataBaseAddNewRecordWithMaxIdAsync(
  objSQLDataBaseEN: clsSQLDataBaseEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(sQLDataBaseController, strAction);
  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objSQLDataBaseEN, config);
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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        sQLDataBaseConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        sQLDataBaseConstructorName,
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
 * @param objSQLDataBaseEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function SQLDataBaseAddNewRecordWithReturnKeyAsync(
  objSQLDataBaseEN: clsSQLDataBaseEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(sQLDataBaseController, strAction);
  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objSQLDataBaseEN, config);
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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        sQLDataBaseConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        sQLDataBaseConstructorName,
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
 * 调用WebApi来修改记录，数据传递使用JSON串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateRecordAsync)
 * @param objSQLDataBaseEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function SQLDataBaseUpdateRecordAsync(
  objSQLDataBaseEN: clsSQLDataBaseEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objSQLDataBaseEN.sfUpdFldSetStr === undefined ||
    objSQLDataBaseEN.sfUpdFldSetStr === null ||
    objSQLDataBaseEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空，不能修改!',
      objSQLDataBaseEN.dataBaseName,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(sQLDataBaseController, strAction);
  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objSQLDataBaseEN, config);
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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        sQLDataBaseConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        sQLDataBaseConstructorName,
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
 * @param objSQLDataBaseEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function SQLDataBaseUpdateWithConditionAsync(
  objSQLDataBaseEN: clsSQLDataBaseEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objSQLDataBaseEN.sfUpdFldSetStr === undefined ||
    objSQLDataBaseEN.sfUpdFldSetStr === null ||
    objSQLDataBaseEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空，不能修改!',
      objSQLDataBaseEN.dataBaseName,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(sQLDataBaseController, strAction);
  objSQLDataBaseEN.whereCond = strWhereCond;
  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objSQLDataBaseEN, config);
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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        sQLDataBaseConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        sQLDataBaseConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[IsExistRecordCache]函数;

/**
 * 根据条件获取是否存在相应的记录？
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistRecordAsync)
 * @param strWhereCond:条件
 * @returns 是否存在记录？
 **/
export async function SQLDataBaseIsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(sQLDataBaseController, strAction);
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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        sQLDataBaseConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        sQLDataBaseConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[IsExistCache]函数;

/**
 * 根据关键字判断是否存在记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistAsync)
 * @param strDataBaseName:关键字
 * @returns 是否存在?存在返回True
 **/
export async function SQLDataBaseIsExistAsync(strDataBaseName: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(sQLDataBaseController, strAction);
  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strDataBaseName,
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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        sQLDataBaseConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        sQLDataBaseConstructorName,
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
export async function SQLDataBaseGetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(sQLDataBaseController, strAction);
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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        sQLDataBaseConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        sQLDataBaseConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[GetRecCountByCondCache]函数;
/*该表的关键字类型不是字符型自增，不需要生成获取最大关键字函数！*/
/*该表的关键字类型不是字符型带前缀自增，不需要生成获取最大关键字函数！*/

/**
 * 根据前缀获取当前表关键字值的最大值,再加1,避免重复
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetMaxStrIdByPrefix)
 * @param mapParam:参数列表
 * @returns 获取当前表关键字值的最大值
 */
export async function SQLDataBaseGetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(sQLDataBaseController, strAction);
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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        sQLDataBaseConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        sQLDataBaseConstructorName,
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
export function SQLDataBaseGetWebApiUrl(strController: string, strAction: string): string {
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
/* 该表的下拉框功能没有设置，不需要生成下拉框绑定函数。*/

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function SQLDataBaseCheckPropertyNew(pobjSQLDataBaseEN: clsSQLDataBaseEN) {
  //检查字段非空， 即数据表要求非常非空的字段，不能为空！
  if (IsNullOrEmpty(pobjSQLDataBaseEN.server) === true) {
    throw new Error(
      '(errid:Watl000058)字段[服务器]不能为空(In SQL数据库)!(clsSQLDataBaseBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjSQLDataBaseEN.userId) === true ||
    pobjSQLDataBaseEN.userId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000058)字段[用户Id]不能为空(In SQL数据库)!(clsSQLDataBaseBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjSQLDataBaseEN.password) === true) {
    throw new Error(
      '(errid:Watl000058)字段[口令]不能为空(In SQL数据库)!(clsSQLDataBaseBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjSQLDataBaseEN.userIdForMaster) === true) {
    throw new Error(
      '(errid:Watl000058)字段[用户ID4Master]不能为空(In SQL数据库)!(clsSQLDataBaseBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjSQLDataBaseEN.passwordForMaster) === true) {
    throw new Error(
      '(errid:Watl000058)字段[口令4Master]不能为空(In SQL数据库)!(clsSQLDataBaseBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjSQLDataBaseEN.prjId) === true ||
    pobjSQLDataBaseEN.prjId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000058)字段[工程ID]不能为空(In SQL数据库)!(clsSQLDataBaseBL:CheckPropertyNew)',
    );
  }
  //检查字段长度， 若字符型字段长度超出规定的长度，即非法！
  if (
    IsNullOrEmpty(pobjSQLDataBaseEN.server) == false &&
    GetStrLen(pobjSQLDataBaseEN.server) > 20
  ) {
    throw new Error(
      '(errid:Watl000059)字段[服务器(server)]的长度不能超过20(In SQL数据库(SQLDataBase))!值:$(pobjSQLDataBaseEN.server)(clsSQLDataBaseBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjSQLDataBaseEN.userId) == false &&
    GetStrLen(pobjSQLDataBaseEN.userId) > 18
  ) {
    throw new Error(
      '(errid:Watl000059)字段[用户Id(userId)]的长度不能超过18(In SQL数据库(SQLDataBase))!值:$(pobjSQLDataBaseEN.userId)(clsSQLDataBaseBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjSQLDataBaseEN.password) == false &&
    GetStrLen(pobjSQLDataBaseEN.password) > 20
  ) {
    throw new Error(
      '(errid:Watl000059)字段[口令(password)]的长度不能超过20(In SQL数据库(SQLDataBase))!值:$(pobjSQLDataBaseEN.password)(clsSQLDataBaseBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjSQLDataBaseEN.userIdForMaster) == false &&
    GetStrLen(pobjSQLDataBaseEN.userIdForMaster) > 18
  ) {
    throw new Error(
      '(errid:Watl000059)字段[用户ID4Master(userIdForMaster)]的长度不能超过18(In SQL数据库(SQLDataBase))!值:$(pobjSQLDataBaseEN.userIdForMaster)(clsSQLDataBaseBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjSQLDataBaseEN.passwordForMaster) == false &&
    GetStrLen(pobjSQLDataBaseEN.passwordForMaster) > 20
  ) {
    throw new Error(
      '(errid:Watl000059)字段[口令4Master(passwordForMaster)]的长度不能超过20(In SQL数据库(SQLDataBase))!值:$(pobjSQLDataBaseEN.passwordForMaster)(clsSQLDataBaseBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjSQLDataBaseEN.prjId) == false && GetStrLen(pobjSQLDataBaseEN.prjId) > 4) {
    throw new Error(
      '(errid:Watl000059)字段[工程ID(prjId)]的长度不能超过4(In SQL数据库(SQLDataBase))!值:$(pobjSQLDataBaseEN.prjId)(clsSQLDataBaseBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjSQLDataBaseEN.databaseOwner) == false &&
    GetStrLen(pobjSQLDataBaseEN.databaseOwner) > 30
  ) {
    throw new Error(
      '(errid:Watl000059)字段[数据库拥有者(databaseOwner)]的长度不能超过30(In SQL数据库(SQLDataBase))!值:$(pobjSQLDataBaseEN.databaseOwner)(clsSQLDataBaseBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjSQLDataBaseEN.dataBaseName) == false &&
    GetStrLen(pobjSQLDataBaseEN.dataBaseName) > 50
  ) {
    throw new Error(
      '(errid:Watl000059)字段[数据库名(dataBaseName)]的长度不能超过50(In SQL数据库(SQLDataBase))!值:$(pobjSQLDataBaseEN.dataBaseName)(clsSQLDataBaseBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjSQLDataBaseEN.server) == false &&
    undefined !== pobjSQLDataBaseEN.server &&
    tzDataType.isString(pobjSQLDataBaseEN.server) === false
  ) {
    throw new Error(
      '(errid:Watl000060)字段[服务器(server)]的值:[$(pobjSQLDataBaseEN.server)], 非法，应该为字符型(In SQL数据库(SQLDataBase))!(clsSQLDataBaseBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjSQLDataBaseEN.userId) == false &&
    undefined !== pobjSQLDataBaseEN.userId &&
    tzDataType.isString(pobjSQLDataBaseEN.userId) === false
  ) {
    throw new Error(
      '(errid:Watl000060)字段[用户Id(userId)]的值:[$(pobjSQLDataBaseEN.userId)], 非法，应该为字符型(In SQL数据库(SQLDataBase))!(clsSQLDataBaseBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjSQLDataBaseEN.password) == false &&
    undefined !== pobjSQLDataBaseEN.password &&
    tzDataType.isString(pobjSQLDataBaseEN.password) === false
  ) {
    throw new Error(
      '(errid:Watl000060)字段[口令(password)]的值:[$(pobjSQLDataBaseEN.password)], 非法，应该为字符型(In SQL数据库(SQLDataBase))!(clsSQLDataBaseBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjSQLDataBaseEN.userIdForMaster) == false &&
    undefined !== pobjSQLDataBaseEN.userIdForMaster &&
    tzDataType.isString(pobjSQLDataBaseEN.userIdForMaster) === false
  ) {
    throw new Error(
      '(errid:Watl000060)字段[用户ID4Master(userIdForMaster)]的值:[$(pobjSQLDataBaseEN.userIdForMaster)], 非法，应该为字符型(In SQL数据库(SQLDataBase))!(clsSQLDataBaseBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjSQLDataBaseEN.passwordForMaster) == false &&
    undefined !== pobjSQLDataBaseEN.passwordForMaster &&
    tzDataType.isString(pobjSQLDataBaseEN.passwordForMaster) === false
  ) {
    throw new Error(
      '(errid:Watl000060)字段[口令4Master(passwordForMaster)]的值:[$(pobjSQLDataBaseEN.passwordForMaster)], 非法，应该为字符型(In SQL数据库(SQLDataBase))!(clsSQLDataBaseBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjSQLDataBaseEN.prjId) == false &&
    undefined !== pobjSQLDataBaseEN.prjId &&
    tzDataType.isString(pobjSQLDataBaseEN.prjId) === false
  ) {
    throw new Error(
      '(errid:Watl000060)字段[工程ID(prjId)]的值:[$(pobjSQLDataBaseEN.prjId)], 非法，应该为字符型(In SQL数据库(SQLDataBase))!(clsSQLDataBaseBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjSQLDataBaseEN.databaseOwner) == false &&
    undefined !== pobjSQLDataBaseEN.databaseOwner &&
    tzDataType.isString(pobjSQLDataBaseEN.databaseOwner) === false
  ) {
    throw new Error(
      '(errid:Watl000060)字段[数据库拥有者(databaseOwner)]的值:[$(pobjSQLDataBaseEN.databaseOwner)], 非法，应该为字符型(In SQL数据库(SQLDataBase))!(clsSQLDataBaseBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjSQLDataBaseEN.dataBaseName) == false &&
    undefined !== pobjSQLDataBaseEN.dataBaseName &&
    tzDataType.isString(pobjSQLDataBaseEN.dataBaseName) === false
  ) {
    throw new Error(
      '(errid:Watl000060)字段[数据库名(dataBaseName)]的值:[$(pobjSQLDataBaseEN.dataBaseName)], 非法，应该为字符型(In SQL数据库(SQLDataBase))!(clsSQLDataBaseBL:CheckPropertyNew)',
    );
  }
  //检查外键， 作为外键应该和主键的字段长度是一样的， 若不一样，即非法！

  //设置说明该对象已经检查过了，后面不需要再检查，即非法！
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function SQLDataBaseCheckProperty4Update(pobjSQLDataBaseEN: clsSQLDataBaseEN) {
  //检查字段长度， 若字符型字段长度超出规定的长度，即非法！
  if (
    IsNullOrEmpty(pobjSQLDataBaseEN.server) == false &&
    GetStrLen(pobjSQLDataBaseEN.server) > 20
  ) {
    throw new Error(
      '(errid:Watl000062)字段[服务器(server)]的长度不能超过20(In SQL数据库(SQLDataBase))!值:$(pobjSQLDataBaseEN.server)(clsSQLDataBaseBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSQLDataBaseEN.userId) == false &&
    GetStrLen(pobjSQLDataBaseEN.userId) > 18
  ) {
    throw new Error(
      '(errid:Watl000062)字段[用户Id(userId)]的长度不能超过18(In SQL数据库(SQLDataBase))!值:$(pobjSQLDataBaseEN.userId)(clsSQLDataBaseBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSQLDataBaseEN.password) == false &&
    GetStrLen(pobjSQLDataBaseEN.password) > 20
  ) {
    throw new Error(
      '(errid:Watl000062)字段[口令(password)]的长度不能超过20(In SQL数据库(SQLDataBase))!值:$(pobjSQLDataBaseEN.password)(clsSQLDataBaseBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSQLDataBaseEN.userIdForMaster) == false &&
    GetStrLen(pobjSQLDataBaseEN.userIdForMaster) > 18
  ) {
    throw new Error(
      '(errid:Watl000062)字段[用户ID4Master(userIdForMaster)]的长度不能超过18(In SQL数据库(SQLDataBase))!值:$(pobjSQLDataBaseEN.userIdForMaster)(clsSQLDataBaseBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSQLDataBaseEN.passwordForMaster) == false &&
    GetStrLen(pobjSQLDataBaseEN.passwordForMaster) > 20
  ) {
    throw new Error(
      '(errid:Watl000062)字段[口令4Master(passwordForMaster)]的长度不能超过20(In SQL数据库(SQLDataBase))!值:$(pobjSQLDataBaseEN.passwordForMaster)(clsSQLDataBaseBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjSQLDataBaseEN.prjId) == false && GetStrLen(pobjSQLDataBaseEN.prjId) > 4) {
    throw new Error(
      '(errid:Watl000062)字段[工程ID(prjId)]的长度不能超过4(In SQL数据库(SQLDataBase))!值:$(pobjSQLDataBaseEN.prjId)(clsSQLDataBaseBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSQLDataBaseEN.databaseOwner) == false &&
    GetStrLen(pobjSQLDataBaseEN.databaseOwner) > 30
  ) {
    throw new Error(
      '(errid:Watl000062)字段[数据库拥有者(databaseOwner)]的长度不能超过30(In SQL数据库(SQLDataBase))!值:$(pobjSQLDataBaseEN.databaseOwner)(clsSQLDataBaseBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSQLDataBaseEN.dataBaseName) == false &&
    GetStrLen(pobjSQLDataBaseEN.dataBaseName) > 50
  ) {
    throw new Error(
      '(errid:Watl000062)字段[数据库名(dataBaseName)]的长度不能超过50(In SQL数据库(SQLDataBase))!值:$(pobjSQLDataBaseEN.dataBaseName)(clsSQLDataBaseBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjSQLDataBaseEN.server) == false &&
    undefined !== pobjSQLDataBaseEN.server &&
    tzDataType.isString(pobjSQLDataBaseEN.server) === false
  ) {
    throw new Error(
      '(errid:Watl000063)字段[服务器(server)]的值:[$(pobjSQLDataBaseEN.server)], 非法，应该为字符型(In SQL数据库(SQLDataBase))!(clsSQLDataBaseBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSQLDataBaseEN.userId) == false &&
    undefined !== pobjSQLDataBaseEN.userId &&
    tzDataType.isString(pobjSQLDataBaseEN.userId) === false
  ) {
    throw new Error(
      '(errid:Watl000063)字段[用户Id(userId)]的值:[$(pobjSQLDataBaseEN.userId)], 非法，应该为字符型(In SQL数据库(SQLDataBase))!(clsSQLDataBaseBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSQLDataBaseEN.password) == false &&
    undefined !== pobjSQLDataBaseEN.password &&
    tzDataType.isString(pobjSQLDataBaseEN.password) === false
  ) {
    throw new Error(
      '(errid:Watl000063)字段[口令(password)]的值:[$(pobjSQLDataBaseEN.password)], 非法，应该为字符型(In SQL数据库(SQLDataBase))!(clsSQLDataBaseBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSQLDataBaseEN.userIdForMaster) == false &&
    undefined !== pobjSQLDataBaseEN.userIdForMaster &&
    tzDataType.isString(pobjSQLDataBaseEN.userIdForMaster) === false
  ) {
    throw new Error(
      '(errid:Watl000063)字段[用户ID4Master(userIdForMaster)]的值:[$(pobjSQLDataBaseEN.userIdForMaster)], 非法，应该为字符型(In SQL数据库(SQLDataBase))!(clsSQLDataBaseBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSQLDataBaseEN.passwordForMaster) == false &&
    undefined !== pobjSQLDataBaseEN.passwordForMaster &&
    tzDataType.isString(pobjSQLDataBaseEN.passwordForMaster) === false
  ) {
    throw new Error(
      '(errid:Watl000063)字段[口令4Master(passwordForMaster)]的值:[$(pobjSQLDataBaseEN.passwordForMaster)], 非法，应该为字符型(In SQL数据库(SQLDataBase))!(clsSQLDataBaseBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSQLDataBaseEN.prjId) == false &&
    undefined !== pobjSQLDataBaseEN.prjId &&
    tzDataType.isString(pobjSQLDataBaseEN.prjId) === false
  ) {
    throw new Error(
      '(errid:Watl000063)字段[工程ID(prjId)]的值:[$(pobjSQLDataBaseEN.prjId)], 非法，应该为字符型(In SQL数据库(SQLDataBase))!(clsSQLDataBaseBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSQLDataBaseEN.databaseOwner) == false &&
    undefined !== pobjSQLDataBaseEN.databaseOwner &&
    tzDataType.isString(pobjSQLDataBaseEN.databaseOwner) === false
  ) {
    throw new Error(
      '(errid:Watl000063)字段[数据库拥有者(databaseOwner)]的值:[$(pobjSQLDataBaseEN.databaseOwner)], 非法，应该为字符型(In SQL数据库(SQLDataBase))!(clsSQLDataBaseBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSQLDataBaseEN.dataBaseName) == false &&
    undefined !== pobjSQLDataBaseEN.dataBaseName &&
    tzDataType.isString(pobjSQLDataBaseEN.dataBaseName) === false
  ) {
    throw new Error(
      '(errid:Watl000063)字段[数据库名(dataBaseName)]的值:[$(pobjSQLDataBaseEN.dataBaseName)], 非法，应该为字符型(In SQL数据库(SQLDataBase))!(clsSQLDataBaseBL:CheckProperty4Update)',
    );
  }
  //检查主键是否为Null或者空！
  if (IsNullOrEmpty(pobjSQLDataBaseEN.dataBaseName) === true) {
    throw new Error(
      '(errid:Watl000064)字段[数据库名]不能为空(In SQL数据库)!(clsSQLDataBaseBL:CheckProperty4Update)',
    );
  }
  //检查外键， 作为外键应该和主键的字段长度是一样的， 若不一样，即非法！
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2023-06-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function SQLDataBaseGetJSONStrByObj(pobjSQLDataBaseEN: clsSQLDataBaseEN): string {
  pobjSQLDataBaseEN.sfUpdFldSetStr = pobjSQLDataBaseEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjSQLDataBaseEN);
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
 * 日期:2023-06-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
 */
export function SQLDataBaseGetObjLstByJSONStr(strJSON: string): Array<clsSQLDataBaseEN> {
  let arrSQLDataBaseObjLst = new Array<clsSQLDataBaseEN>();
  if (strJSON === '') {
    return arrSQLDataBaseObjLst;
  }
  try {
    arrSQLDataBaseObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrSQLDataBaseObjLst;
  }
  return arrSQLDataBaseObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-06-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrSQLDataBaseObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function SQLDataBaseGetObjLstByJSONObjLst(
  arrSQLDataBaseObjLstS: Array<clsSQLDataBaseEN>,
): Array<clsSQLDataBaseEN> {
  const arrSQLDataBaseObjLst = new Array<clsSQLDataBaseEN>();
  for (const objInFor of arrSQLDataBaseObjLstS) {
    const obj1 = SQLDataBaseGetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrSQLDataBaseObjLst.push(obj1);
  }
  return arrSQLDataBaseObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-06-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function SQLDataBaseGetObjByJSONStr(strJSON: string): clsSQLDataBaseEN {
  let pobjSQLDataBaseEN = new clsSQLDataBaseEN();
  if (strJSON === '') {
    return pobjSQLDataBaseEN;
  }
  try {
    pobjSQLDataBaseEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjSQLDataBaseEN;
  }
  return pobjSQLDataBaseEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function SQLDataBaseGetCombineCondition(objSQLDataBaseCond: clsSQLDataBaseEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objSQLDataBaseCond.dicFldComparisonOp,
      clsSQLDataBaseEN.conServer,
    ) == true
  ) {
    const strComparisonOpServer: string =
      objSQLDataBaseCond.dicFldComparisonOp[clsSQLDataBaseEN.conServer];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSQLDataBaseEN.conServer,
      objSQLDataBaseCond.server,
      strComparisonOpServer,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSQLDataBaseCond.dicFldComparisonOp,
      clsSQLDataBaseEN.conUserId,
    ) == true
  ) {
    const strComparisonOpUserId: string =
      objSQLDataBaseCond.dicFldComparisonOp[clsSQLDataBaseEN.conUserId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSQLDataBaseEN.conUserId,
      objSQLDataBaseCond.userId,
      strComparisonOpUserId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSQLDataBaseCond.dicFldComparisonOp,
      clsSQLDataBaseEN.conPassword,
    ) == true
  ) {
    const strComparisonOpPassword: string =
      objSQLDataBaseCond.dicFldComparisonOp[clsSQLDataBaseEN.conPassword];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSQLDataBaseEN.conPassword,
      objSQLDataBaseCond.password,
      strComparisonOpPassword,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSQLDataBaseCond.dicFldComparisonOp,
      clsSQLDataBaseEN.conUserIdForMaster,
    ) == true
  ) {
    const strComparisonOpUserIdForMaster: string =
      objSQLDataBaseCond.dicFldComparisonOp[clsSQLDataBaseEN.conUserIdForMaster];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSQLDataBaseEN.conUserIdForMaster,
      objSQLDataBaseCond.userIdForMaster,
      strComparisonOpUserIdForMaster,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSQLDataBaseCond.dicFldComparisonOp,
      clsSQLDataBaseEN.conPasswordForMaster,
    ) == true
  ) {
    const strComparisonOpPasswordForMaster: string =
      objSQLDataBaseCond.dicFldComparisonOp[clsSQLDataBaseEN.conPasswordForMaster];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSQLDataBaseEN.conPasswordForMaster,
      objSQLDataBaseCond.passwordForMaster,
      strComparisonOpPasswordForMaster,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSQLDataBaseCond.dicFldComparisonOp,
      clsSQLDataBaseEN.conPrjId,
    ) == true
  ) {
    const strComparisonOpPrjId: string =
      objSQLDataBaseCond.dicFldComparisonOp[clsSQLDataBaseEN.conPrjId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSQLDataBaseEN.conPrjId,
      objSQLDataBaseCond.prjId,
      strComparisonOpPrjId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSQLDataBaseCond.dicFldComparisonOp,
      clsSQLDataBaseEN.conDatabaseOwner,
    ) == true
  ) {
    const strComparisonOpDatabaseOwner: string =
      objSQLDataBaseCond.dicFldComparisonOp[clsSQLDataBaseEN.conDatabaseOwner];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSQLDataBaseEN.conDatabaseOwner,
      objSQLDataBaseCond.databaseOwner,
      strComparisonOpDatabaseOwner,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSQLDataBaseCond.dicFldComparisonOp,
      clsSQLDataBaseEN.conDataBaseName,
    ) == true
  ) {
    const strComparisonOpDataBaseName: string =
      objSQLDataBaseCond.dicFldComparisonOp[clsSQLDataBaseEN.conDataBaseName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSQLDataBaseEN.conDataBaseName,
      objSQLDataBaseCond.dataBaseName,
      strComparisonOpDataBaseName,
    );
  }
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objSQLDataBaseENS:源对象
 * @param objSQLDataBaseENT:目标对象
 */
export function SQLDataBaseGetObjFromJsonObj(
  objSQLDataBaseENS: clsSQLDataBaseEN,
): clsSQLDataBaseEN {
  const objSQLDataBaseENT: clsSQLDataBaseEN = new clsSQLDataBaseEN();
  ObjectAssign(objSQLDataBaseENT, objSQLDataBaseENS);
  return objSQLDataBaseENT;
}
