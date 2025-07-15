/**
 * 类名:clsSQL_DataBaseWApi
 * 表名:SQL_DataBase(00050172)
 * 版本:2023.12.26.1(服务器:WIN-SRV103-116)
 * 日期:2024/01/01 15:53:27
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
 * SQL数据库(SQL_DataBase)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2024年01月01日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty, GetStrLen, tzDataType, Format } from '@/ts/PubFun/clsString';
import { clsSQL_DataBaseEN } from '@/ts/L0Entity/SQLTabField/clsSQL_DataBaseEN';
import { GetExceptionStr, myShowErrorMsg, ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const sQL_DataBase_Controller = 'SQL_DataBaseApi';
export const sQL_DataBase_ConstructorName = 'sQL_DataBase';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strDataBaseName:关键字
 * @returns 对象
 **/
export async function SQL_DataBase_GetObjByDataBaseNameAsync(
  strDataBaseName: string,
): Promise<clsSQL_DataBaseEN | null> {
  const strThisFuncName = 'GetObjByDataBaseNameAsync';

  if (IsNullOrEmpty(strDataBaseName) == true) {
    const strMsg = Format(
      '参数:[strDataBaseName]不能为空!(In clsSQL_DataBaseWApi.GetObjByDataBaseNameAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByDataBaseName';
  const strUrl = GetWebApiUrl(sQL_DataBase_Controller, strAction);

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
      const objSQL_DataBase = SQL_DataBase_GetObjFromJsonObj(returnObj);
      return objSQL_DataBase;
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
        sQL_DataBase_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sQL_DataBase_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[GetObjByDataBaseNameCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )
//该表没有使用Cache,不需要生成[GetObjByDataBaseNamelocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[UpdateObjInLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache
//该表没有使用Cache,不需要生成[GetNameByDataBaseNameCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
//该表没有使用Cache,不需要生成[func]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func )

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-01-01
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function SQL_DataBase_SortFunDefa(a: clsSQL_DataBaseEN, b: clsSQL_DataBaseEN): number {
  return a.dataBaseName.localeCompare(b.dataBaseName);
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2024-01-01
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function SQL_DataBase_SortFunDefa2Fld(a: clsSQL_DataBaseEN, b: clsSQL_DataBaseEN): number {
  if (a.server == b.server) return a.userId.localeCompare(b.userId);
  else return a.server.localeCompare(b.server);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-01-01
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function SQL_DataBase_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsSQL_DataBaseEN.con_Server:
        return (a: clsSQL_DataBaseEN, b: clsSQL_DataBaseEN) => {
          return a.server.localeCompare(b.server);
        };
      case clsSQL_DataBaseEN.con_UserId:
        return (a: clsSQL_DataBaseEN, b: clsSQL_DataBaseEN) => {
          return a.userId.localeCompare(b.userId);
        };
      case clsSQL_DataBaseEN.con_Password:
        return (a: clsSQL_DataBaseEN, b: clsSQL_DataBaseEN) => {
          return a.password.localeCompare(b.password);
        };
      case clsSQL_DataBaseEN.con_UserIdForMaster:
        return (a: clsSQL_DataBaseEN, b: clsSQL_DataBaseEN) => {
          return a.userIdForMaster.localeCompare(b.userIdForMaster);
        };
      case clsSQL_DataBaseEN.con_PasswordForMaster:
        return (a: clsSQL_DataBaseEN, b: clsSQL_DataBaseEN) => {
          return a.passwordForMaster.localeCompare(b.passwordForMaster);
        };
      case clsSQL_DataBaseEN.con_PrjId:
        return (a: clsSQL_DataBaseEN, b: clsSQL_DataBaseEN) => {
          return a.prjId.localeCompare(b.prjId);
        };
      case clsSQL_DataBaseEN.con_DatabaseOwner:
        return (a: clsSQL_DataBaseEN, b: clsSQL_DataBaseEN) => {
          if (a.databaseOwner == null) return -1;
          if (b.databaseOwner == null) return 1;
          return a.databaseOwner.localeCompare(b.databaseOwner);
        };
      case clsSQL_DataBaseEN.con_DataBaseName:
        return (a: clsSQL_DataBaseEN, b: clsSQL_DataBaseEN) => {
          return a.dataBaseName.localeCompare(b.dataBaseName);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[SQL_DataBase]中不存在!(in ${sQL_DataBase_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsSQL_DataBaseEN.con_Server:
        return (a: clsSQL_DataBaseEN, b: clsSQL_DataBaseEN) => {
          return b.server.localeCompare(a.server);
        };
      case clsSQL_DataBaseEN.con_UserId:
        return (a: clsSQL_DataBaseEN, b: clsSQL_DataBaseEN) => {
          return b.userId.localeCompare(a.userId);
        };
      case clsSQL_DataBaseEN.con_Password:
        return (a: clsSQL_DataBaseEN, b: clsSQL_DataBaseEN) => {
          return b.password.localeCompare(a.password);
        };
      case clsSQL_DataBaseEN.con_UserIdForMaster:
        return (a: clsSQL_DataBaseEN, b: clsSQL_DataBaseEN) => {
          return b.userIdForMaster.localeCompare(a.userIdForMaster);
        };
      case clsSQL_DataBaseEN.con_PasswordForMaster:
        return (a: clsSQL_DataBaseEN, b: clsSQL_DataBaseEN) => {
          return b.passwordForMaster.localeCompare(a.passwordForMaster);
        };
      case clsSQL_DataBaseEN.con_PrjId:
        return (a: clsSQL_DataBaseEN, b: clsSQL_DataBaseEN) => {
          return b.prjId.localeCompare(a.prjId);
        };
      case clsSQL_DataBaseEN.con_DatabaseOwner:
        return (a: clsSQL_DataBaseEN, b: clsSQL_DataBaseEN) => {
          if (b.databaseOwner == null) return -1;
          if (a.databaseOwner == null) return 1;
          return b.databaseOwner.localeCompare(a.databaseOwner);
        };
      case clsSQL_DataBaseEN.con_DataBaseName:
        return (a: clsSQL_DataBaseEN, b: clsSQL_DataBaseEN) => {
          return b.dataBaseName.localeCompare(a.dataBaseName);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[SQL_DataBase]中不存在!(in ${sQL_DataBase_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2024-01-01
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function SQL_DataBase_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsSQL_DataBaseEN.con_Server:
      return (obj: clsSQL_DataBaseEN) => {
        return obj.server === value;
      };
    case clsSQL_DataBaseEN.con_UserId:
      return (obj: clsSQL_DataBaseEN) => {
        return obj.userId === value;
      };
    case clsSQL_DataBaseEN.con_Password:
      return (obj: clsSQL_DataBaseEN) => {
        return obj.password === value;
      };
    case clsSQL_DataBaseEN.con_UserIdForMaster:
      return (obj: clsSQL_DataBaseEN) => {
        return obj.userIdForMaster === value;
      };
    case clsSQL_DataBaseEN.con_PasswordForMaster:
      return (obj: clsSQL_DataBaseEN) => {
        return obj.passwordForMaster === value;
      };
    case clsSQL_DataBaseEN.con_PrjId:
      return (obj: clsSQL_DataBaseEN) => {
        return obj.prjId === value;
      };
    case clsSQL_DataBaseEN.con_DatabaseOwner:
      return (obj: clsSQL_DataBaseEN) => {
        return obj.databaseOwner === value;
      };
    case clsSQL_DataBaseEN.con_DataBaseName:
      return (obj: clsSQL_DataBaseEN) => {
        return obj.dataBaseName === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[SQL_DataBase]中不存在!(in ${sQL_DataBase_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}
//该表没有使用Cache,不需要生成[SQL_DataBase__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function SQL_DataBase_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(sQL_DataBase_Controller, strAction);

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
        sQL_DataBase_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sQL_DataBase_ConstructorName,
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
export async function SQL_DataBase_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(sQL_DataBase_Controller, strAction);

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
        sQL_DataBase_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sQL_DataBase_ConstructorName,
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
export async function SQL_DataBase_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsSQL_DataBaseEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(sQL_DataBase_Controller, strAction);

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
      const objSQL_DataBase = SQL_DataBase_GetObjFromJsonObj(returnObj);
      return objSQL_DataBase;
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
        sQL_DataBase_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sQL_DataBase_ConstructorName,
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
export async function SQL_DataBase_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsSQL_DataBaseEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(sQL_DataBase_Controller, strAction);

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
          sQL_DataBase_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = SQL_DataBase_GetObjLstByJSONObjLst(returnObjLst);
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
        sQL_DataBase_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sQL_DataBase_ConstructorName,
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
 * @param arrDataBaseName:关键字列表
 * @returns 对象列表
 **/
export async function SQL_DataBase_GetObjLstByDataBaseNameLstAsync(
  arrDataBaseName: Array<string>,
): Promise<Array<clsSQL_DataBaseEN>> {
  const strThisFuncName = 'GetObjLstByDataBaseNameLstAsync';
  const strAction = 'GetObjLstByDataBaseNameLst';
  const strUrl = GetWebApiUrl(sQL_DataBase_Controller, strAction);

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
          sQL_DataBase_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = SQL_DataBase_GetObjLstByJSONObjLst(returnObjLst);
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
        sQL_DataBase_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sQL_DataBase_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[GetObjLstByDataBaseNameLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

/**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export async function SQL_DataBase_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsSQL_DataBaseEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(sQL_DataBase_Controller, strAction);

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
          sQL_DataBase_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = SQL_DataBase_GetObjLstByJSONObjLst(returnObjLst);
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
        sQL_DataBase_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sQL_DataBase_ConstructorName,
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
export async function SQL_DataBase_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsSQL_DataBaseEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(sQL_DataBase_Controller, strAction);

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
          sQL_DataBase_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = SQL_DataBase_GetObjLstByJSONObjLst(returnObjLst);
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
        sQL_DataBase_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sQL_DataBase_ConstructorName,
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
export async function SQL_DataBase_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsSQL_DataBaseEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsSQL_DataBaseEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(sQL_DataBase_Controller, strAction);

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
          sQL_DataBase_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = SQL_DataBase_GetObjLstByJSONObjLst(returnObjLst);
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
        sQL_DataBase_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sQL_DataBase_ConstructorName,
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
 * @param strDataBaseName:关键字
 * @returns 获取删除的结果
 **/
export async function SQL_DataBase_DelRecordAsync(strDataBaseName: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(sQL_DataBase_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strDataBaseName);

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
        sQL_DataBase_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sQL_DataBase_ConstructorName,
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
export async function SQL_DataBase_DelSQL_DataBasesAsync(
  arrDataBaseName: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelSQL_DataBasesAsync';
  const strAction = 'DelSQL_DataBases';
  const strUrl = GetWebApiUrl(sQL_DataBase_Controller, strAction);

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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        sQL_DataBase_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sQL_DataBase_ConstructorName,
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
export async function SQL_DataBase_DelSQL_DataBasesByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelSQL_DataBasesByCondAsync';
  const strAction = 'DelSQL_DataBasesByCond';
  const strUrl = GetWebApiUrl(sQL_DataBase_Controller, strAction);

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
        sQL_DataBase_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sQL_DataBase_ConstructorName,
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
 * @param objSQL_DataBaseEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function SQL_DataBase_AddNewRecordAsync(
  objSQL_DataBaseEN: clsSQL_DataBaseEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  if (objSQL_DataBaseEN.dataBaseName === null || objSQL_DataBaseEN.dataBaseName === '') {
    const strMsg = '需要的对象的关键字为空,不能添加!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objSQL_DataBaseEN);
  const strUrl = GetWebApiUrl(sQL_DataBase_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objSQL_DataBaseEN, config);
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
        sQL_DataBase_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sQL_DataBase_ConstructorName,
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
 * @param objSQL_DataBaseEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function SQL_DataBase_AddNewRecordWithMaxIdAsync(
  objSQL_DataBaseEN: clsSQL_DataBaseEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(sQL_DataBase_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objSQL_DataBaseEN, config);
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
        sQL_DataBase_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sQL_DataBase_ConstructorName,
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
 * @param objSQL_DataBaseEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function SQL_DataBase_AddNewRecordWithReturnKeyAsync(
  objSQL_DataBaseEN: clsSQL_DataBaseEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(sQL_DataBase_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objSQL_DataBaseEN, config);
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
        sQL_DataBase_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sQL_DataBase_ConstructorName,
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
 * @param objSQL_DataBaseEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function SQL_DataBase_UpdateRecordAsync(
  objSQL_DataBaseEN: clsSQL_DataBaseEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objSQL_DataBaseEN.sfUpdFldSetStr === undefined ||
    objSQL_DataBaseEN.sfUpdFldSetStr === null ||
    objSQL_DataBaseEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objSQL_DataBaseEN.dataBaseName,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(sQL_DataBase_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objSQL_DataBaseEN, config);
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
        sQL_DataBase_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sQL_DataBase_ConstructorName,
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
 * @param objSQL_DataBaseEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function SQL_DataBase_UpdateWithConditionAsync(
  objSQL_DataBaseEN: clsSQL_DataBaseEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objSQL_DataBaseEN.sfUpdFldSetStr === undefined ||
    objSQL_DataBaseEN.sfUpdFldSetStr === null ||
    objSQL_DataBaseEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objSQL_DataBaseEN.dataBaseName,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(sQL_DataBase_Controller, strAction);
  objSQL_DataBaseEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objSQL_DataBaseEN, config);
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
        sQL_DataBase_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sQL_DataBase_ConstructorName,
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
export async function SQL_DataBase_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(sQL_DataBase_Controller, strAction);

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
        sQL_DataBase_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sQL_DataBase_ConstructorName,
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
 * @param strDataBaseName:关键字
 * @returns 是否存在?存在返回True
 **/
export async function SQL_DataBase_IsExistAsync(strDataBaseName: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(sQL_DataBase_Controller, strAction);

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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        sQL_DataBase_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sQL_DataBase_ConstructorName,
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
export async function SQL_DataBase_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(sQL_DataBase_Controller, strAction);

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
        sQL_DataBase_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sQL_DataBase_ConstructorName,
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
/*该表的关键字类型不是字符型自增,不需要生成获取最大关键字函数!*/
/*该表的关键字类型不是字符型带前缀自增,不需要生成获取最大关键字函数!*/

/**
 * 根据前缀获取当前表关键字值的最大值,再加1,避免重复
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetMaxStrIdByPrefix)
 * @param mapParam:参数列表
 * @returns 获取当前表关键字值的最大值
 */
export async function SQL_DataBase_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(sQL_DataBase_Controller, strAction);

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
        sQL_DataBase_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sQL_DataBase_ConstructorName,
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
export function SQL_DataBase_GetWebApiUrl(strController: string, strAction: string): string {
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

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function SQL_DataBase_CheckPropertyNew(pobjSQL_DataBaseEN: clsSQL_DataBaseEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjSQL_DataBaseEN.server) === true) {
    throw new Error(
      '(errid:Watl000411)字段[服务器]不能为空(In SQL数据库)!(clsSQL_DataBaseBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSQL_DataBaseEN.userId) === true ||
    pobjSQL_DataBaseEN.userId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000411)字段[用户Id]不能为空(In SQL数据库)!(clsSQL_DataBaseBL:CheckPropertyNew0)',
    );
  }
  if (IsNullOrEmpty(pobjSQL_DataBaseEN.password) === true) {
    throw new Error(
      '(errid:Watl000411)字段[口令]不能为空(In SQL数据库)!(clsSQL_DataBaseBL:CheckPropertyNew0)',
    );
  }
  if (IsNullOrEmpty(pobjSQL_DataBaseEN.userIdForMaster) === true) {
    throw new Error(
      '(errid:Watl000411)字段[用户ID4Master]不能为空(In SQL数据库)!(clsSQL_DataBaseBL:CheckPropertyNew0)',
    );
  }
  if (IsNullOrEmpty(pobjSQL_DataBaseEN.passwordForMaster) === true) {
    throw new Error(
      '(errid:Watl000411)字段[口令4Master]不能为空(In SQL数据库)!(clsSQL_DataBaseBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSQL_DataBaseEN.prjId) === true ||
    pobjSQL_DataBaseEN.prjId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000411)字段[工程ID]不能为空(In SQL数据库)!(clsSQL_DataBaseBL:CheckPropertyNew0)',
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjSQL_DataBaseEN.server) == false &&
    GetStrLen(pobjSQL_DataBaseEN.server) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[服务器(server)]的长度不能超过20(In SQL数据库(SQL_DataBase))!值:$(pobjSQL_DataBaseEN.server)(clsSQL_DataBaseBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjSQL_DataBaseEN.userId) == false &&
    GetStrLen(pobjSQL_DataBaseEN.userId) > 18
  ) {
    throw new Error(
      '(errid:Watl000413)字段[用户Id(userId)]的长度不能超过18(In SQL数据库(SQL_DataBase))!值:$(pobjSQL_DataBaseEN.userId)(clsSQL_DataBaseBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjSQL_DataBaseEN.password) == false &&
    GetStrLen(pobjSQL_DataBaseEN.password) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[口令(password)]的长度不能超过20(In SQL数据库(SQL_DataBase))!值:$(pobjSQL_DataBaseEN.password)(clsSQL_DataBaseBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjSQL_DataBaseEN.userIdForMaster) == false &&
    GetStrLen(pobjSQL_DataBaseEN.userIdForMaster) > 18
  ) {
    throw new Error(
      '(errid:Watl000413)字段[用户ID4Master(userIdForMaster)]的长度不能超过18(In SQL数据库(SQL_DataBase))!值:$(pobjSQL_DataBaseEN.userIdForMaster)(clsSQL_DataBaseBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjSQL_DataBaseEN.passwordForMaster) == false &&
    GetStrLen(pobjSQL_DataBaseEN.passwordForMaster) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[口令4Master(passwordForMaster)]的长度不能超过20(In SQL数据库(SQL_DataBase))!值:$(pobjSQL_DataBaseEN.passwordForMaster)(clsSQL_DataBaseBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjSQL_DataBaseEN.prjId) == false && GetStrLen(pobjSQL_DataBaseEN.prjId) > 4) {
    throw new Error(
      '(errid:Watl000413)字段[工程ID(prjId)]的长度不能超过4(In SQL数据库(SQL_DataBase))!值:$(pobjSQL_DataBaseEN.prjId)(clsSQL_DataBaseBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjSQL_DataBaseEN.databaseOwner) == false &&
    GetStrLen(pobjSQL_DataBaseEN.databaseOwner) > 30
  ) {
    throw new Error(
      '(errid:Watl000413)字段[数据库拥有者(databaseOwner)]的长度不能超过30(In SQL数据库(SQL_DataBase))!值:$(pobjSQL_DataBaseEN.databaseOwner)(clsSQL_DataBaseBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjSQL_DataBaseEN.dataBaseName) == false &&
    GetStrLen(pobjSQL_DataBaseEN.dataBaseName) > 50
  ) {
    throw new Error(
      '(errid:Watl000413)字段[数据库名(dataBaseName)]的长度不能超过50(In SQL数据库(SQL_DataBase))!值:$(pobjSQL_DataBaseEN.dataBaseName)(clsSQL_DataBaseBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjSQL_DataBaseEN.server) == false &&
    undefined !== pobjSQL_DataBaseEN.server &&
    tzDataType.isString(pobjSQL_DataBaseEN.server) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[服务器(server)]的值:[$(pobjSQL_DataBaseEN.server)], 非法,应该为字符型(In SQL数据库(SQL_DataBase))!(clsSQL_DataBaseBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSQL_DataBaseEN.userId) == false &&
    undefined !== pobjSQL_DataBaseEN.userId &&
    tzDataType.isString(pobjSQL_DataBaseEN.userId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[用户Id(userId)]的值:[$(pobjSQL_DataBaseEN.userId)], 非法,应该为字符型(In SQL数据库(SQL_DataBase))!(clsSQL_DataBaseBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSQL_DataBaseEN.password) == false &&
    undefined !== pobjSQL_DataBaseEN.password &&
    tzDataType.isString(pobjSQL_DataBaseEN.password) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[口令(password)]的值:[$(pobjSQL_DataBaseEN.password)], 非法,应该为字符型(In SQL数据库(SQL_DataBase))!(clsSQL_DataBaseBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSQL_DataBaseEN.userIdForMaster) == false &&
    undefined !== pobjSQL_DataBaseEN.userIdForMaster &&
    tzDataType.isString(pobjSQL_DataBaseEN.userIdForMaster) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[用户ID4Master(userIdForMaster)]的值:[$(pobjSQL_DataBaseEN.userIdForMaster)], 非法,应该为字符型(In SQL数据库(SQL_DataBase))!(clsSQL_DataBaseBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSQL_DataBaseEN.passwordForMaster) == false &&
    undefined !== pobjSQL_DataBaseEN.passwordForMaster &&
    tzDataType.isString(pobjSQL_DataBaseEN.passwordForMaster) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[口令4Master(passwordForMaster)]的值:[$(pobjSQL_DataBaseEN.passwordForMaster)], 非法,应该为字符型(In SQL数据库(SQL_DataBase))!(clsSQL_DataBaseBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSQL_DataBaseEN.prjId) == false &&
    undefined !== pobjSQL_DataBaseEN.prjId &&
    tzDataType.isString(pobjSQL_DataBaseEN.prjId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[工程ID(prjId)]的值:[$(pobjSQL_DataBaseEN.prjId)], 非法,应该为字符型(In SQL数据库(SQL_DataBase))!(clsSQL_DataBaseBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSQL_DataBaseEN.databaseOwner) == false &&
    undefined !== pobjSQL_DataBaseEN.databaseOwner &&
    tzDataType.isString(pobjSQL_DataBaseEN.databaseOwner) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[数据库拥有者(databaseOwner)]的值:[$(pobjSQL_DataBaseEN.databaseOwner)], 非法,应该为字符型(In SQL数据库(SQL_DataBase))!(clsSQL_DataBaseBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSQL_DataBaseEN.dataBaseName) == false &&
    undefined !== pobjSQL_DataBaseEN.dataBaseName &&
    tzDataType.isString(pobjSQL_DataBaseEN.dataBaseName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[数据库名(dataBaseName)]的值:[$(pobjSQL_DataBaseEN.dataBaseName)], 非法,应该为字符型(In SQL数据库(SQL_DataBase))!(clsSQL_DataBaseBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function SQL_DataBase_CheckProperty4Update(pobjSQL_DataBaseEN: clsSQL_DataBaseEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjSQL_DataBaseEN.server) == false &&
    GetStrLen(pobjSQL_DataBaseEN.server) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[服务器(server)]的长度不能超过20(In SQL数据库(SQL_DataBase))!值:$(pobjSQL_DataBaseEN.server)(clsSQL_DataBaseBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSQL_DataBaseEN.userId) == false &&
    GetStrLen(pobjSQL_DataBaseEN.userId) > 18
  ) {
    throw new Error(
      '(errid:Watl000416)字段[用户Id(userId)]的长度不能超过18(In SQL数据库(SQL_DataBase))!值:$(pobjSQL_DataBaseEN.userId)(clsSQL_DataBaseBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSQL_DataBaseEN.password) == false &&
    GetStrLen(pobjSQL_DataBaseEN.password) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[口令(password)]的长度不能超过20(In SQL数据库(SQL_DataBase))!值:$(pobjSQL_DataBaseEN.password)(clsSQL_DataBaseBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSQL_DataBaseEN.userIdForMaster) == false &&
    GetStrLen(pobjSQL_DataBaseEN.userIdForMaster) > 18
  ) {
    throw new Error(
      '(errid:Watl000416)字段[用户ID4Master(userIdForMaster)]的长度不能超过18(In SQL数据库(SQL_DataBase))!值:$(pobjSQL_DataBaseEN.userIdForMaster)(clsSQL_DataBaseBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSQL_DataBaseEN.passwordForMaster) == false &&
    GetStrLen(pobjSQL_DataBaseEN.passwordForMaster) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[口令4Master(passwordForMaster)]的长度不能超过20(In SQL数据库(SQL_DataBase))!值:$(pobjSQL_DataBaseEN.passwordForMaster)(clsSQL_DataBaseBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjSQL_DataBaseEN.prjId) == false && GetStrLen(pobjSQL_DataBaseEN.prjId) > 4) {
    throw new Error(
      '(errid:Watl000416)字段[工程ID(prjId)]的长度不能超过4(In SQL数据库(SQL_DataBase))!值:$(pobjSQL_DataBaseEN.prjId)(clsSQL_DataBaseBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSQL_DataBaseEN.databaseOwner) == false &&
    GetStrLen(pobjSQL_DataBaseEN.databaseOwner) > 30
  ) {
    throw new Error(
      '(errid:Watl000416)字段[数据库拥有者(databaseOwner)]的长度不能超过30(In SQL数据库(SQL_DataBase))!值:$(pobjSQL_DataBaseEN.databaseOwner)(clsSQL_DataBaseBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSQL_DataBaseEN.dataBaseName) == false &&
    GetStrLen(pobjSQL_DataBaseEN.dataBaseName) > 50
  ) {
    throw new Error(
      '(errid:Watl000416)字段[数据库名(dataBaseName)]的长度不能超过50(In SQL数据库(SQL_DataBase))!值:$(pobjSQL_DataBaseEN.dataBaseName)(clsSQL_DataBaseBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjSQL_DataBaseEN.server) == false &&
    undefined !== pobjSQL_DataBaseEN.server &&
    tzDataType.isString(pobjSQL_DataBaseEN.server) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[服务器(server)]的值:[$(pobjSQL_DataBaseEN.server)], 非法,应该为字符型(In SQL数据库(SQL_DataBase))!(clsSQL_DataBaseBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSQL_DataBaseEN.userId) == false &&
    undefined !== pobjSQL_DataBaseEN.userId &&
    tzDataType.isString(pobjSQL_DataBaseEN.userId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[用户Id(userId)]的值:[$(pobjSQL_DataBaseEN.userId)], 非法,应该为字符型(In SQL数据库(SQL_DataBase))!(clsSQL_DataBaseBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSQL_DataBaseEN.password) == false &&
    undefined !== pobjSQL_DataBaseEN.password &&
    tzDataType.isString(pobjSQL_DataBaseEN.password) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[口令(password)]的值:[$(pobjSQL_DataBaseEN.password)], 非法,应该为字符型(In SQL数据库(SQL_DataBase))!(clsSQL_DataBaseBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSQL_DataBaseEN.userIdForMaster) == false &&
    undefined !== pobjSQL_DataBaseEN.userIdForMaster &&
    tzDataType.isString(pobjSQL_DataBaseEN.userIdForMaster) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[用户ID4Master(userIdForMaster)]的值:[$(pobjSQL_DataBaseEN.userIdForMaster)], 非法,应该为字符型(In SQL数据库(SQL_DataBase))!(clsSQL_DataBaseBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSQL_DataBaseEN.passwordForMaster) == false &&
    undefined !== pobjSQL_DataBaseEN.passwordForMaster &&
    tzDataType.isString(pobjSQL_DataBaseEN.passwordForMaster) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[口令4Master(passwordForMaster)]的值:[$(pobjSQL_DataBaseEN.passwordForMaster)], 非法,应该为字符型(In SQL数据库(SQL_DataBase))!(clsSQL_DataBaseBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSQL_DataBaseEN.prjId) == false &&
    undefined !== pobjSQL_DataBaseEN.prjId &&
    tzDataType.isString(pobjSQL_DataBaseEN.prjId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[工程ID(prjId)]的值:[$(pobjSQL_DataBaseEN.prjId)], 非法,应该为字符型(In SQL数据库(SQL_DataBase))!(clsSQL_DataBaseBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSQL_DataBaseEN.databaseOwner) == false &&
    undefined !== pobjSQL_DataBaseEN.databaseOwner &&
    tzDataType.isString(pobjSQL_DataBaseEN.databaseOwner) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[数据库拥有者(databaseOwner)]的值:[$(pobjSQL_DataBaseEN.databaseOwner)], 非法,应该为字符型(In SQL数据库(SQL_DataBase))!(clsSQL_DataBaseBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSQL_DataBaseEN.dataBaseName) == false &&
    undefined !== pobjSQL_DataBaseEN.dataBaseName &&
    tzDataType.isString(pobjSQL_DataBaseEN.dataBaseName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[数据库名(dataBaseName)]的值:[$(pobjSQL_DataBaseEN.dataBaseName)], 非法,应该为字符型(In SQL数据库(SQL_DataBase))!(clsSQL_DataBaseBL:CheckProperty4Update)',
    );
  }
  //检查主键是否为Null或者空!
  if (IsNullOrEmpty(pobjSQL_DataBaseEN.dataBaseName) === true) {
    throw new Error(
      '(errid:Watl000064)字段[数据库名]不能为空(In SQL数据库)!(clsSQL_DataBaseBL:CheckProperty4Update)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2024-01-01
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function SQL_DataBase_GetJSONStrByObj(pobjSQL_DataBaseEN: clsSQL_DataBaseEN): string {
  pobjSQL_DataBaseEN.sfUpdFldSetStr = pobjSQL_DataBaseEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjSQL_DataBaseEN);
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
 * 日期:2024-01-01
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
 */
export function SQL_DataBase_GetObjLstByJSONStr(strJSON: string): Array<clsSQL_DataBaseEN> {
  let arrSQL_DataBaseObjLst = new Array<clsSQL_DataBaseEN>();
  if (strJSON === '') {
    return arrSQL_DataBaseObjLst;
  }
  try {
    arrSQL_DataBaseObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrSQL_DataBaseObjLst;
  }
  return arrSQL_DataBaseObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2024-01-01
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrSQL_DataBaseObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function SQL_DataBase_GetObjLstByJSONObjLst(
  arrSQL_DataBaseObjLstS: Array<clsSQL_DataBaseEN>,
): Array<clsSQL_DataBaseEN> {
  const arrSQL_DataBaseObjLst = new Array<clsSQL_DataBaseEN>();
  for (const objInFor of arrSQL_DataBaseObjLstS) {
    const obj1 = SQL_DataBase_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrSQL_DataBaseObjLst.push(obj1);
  }
  return arrSQL_DataBaseObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2024-01-01
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function SQL_DataBase_GetObjByJSONStr(strJSON: string): clsSQL_DataBaseEN {
  let pobjSQL_DataBaseEN = new clsSQL_DataBaseEN();
  if (strJSON === '') {
    return pobjSQL_DataBaseEN;
  }
  try {
    pobjSQL_DataBaseEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjSQL_DataBaseEN;
  }
  return pobjSQL_DataBaseEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function SQL_DataBase_GetCombineCondition(objSQL_DataBaseCond: clsSQL_DataBaseEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objSQL_DataBaseCond.dicFldComparisonOp,
      clsSQL_DataBaseEN.con_Server,
    ) == true
  ) {
    const strComparisonOpServer: string =
      objSQL_DataBaseCond.dicFldComparisonOp[clsSQL_DataBaseEN.con_Server];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSQL_DataBaseEN.con_Server,
      objSQL_DataBaseCond.server,
      strComparisonOpServer,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSQL_DataBaseCond.dicFldComparisonOp,
      clsSQL_DataBaseEN.con_UserId,
    ) == true
  ) {
    const strComparisonOpUserId: string =
      objSQL_DataBaseCond.dicFldComparisonOp[clsSQL_DataBaseEN.con_UserId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSQL_DataBaseEN.con_UserId,
      objSQL_DataBaseCond.userId,
      strComparisonOpUserId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSQL_DataBaseCond.dicFldComparisonOp,
      clsSQL_DataBaseEN.con_Password,
    ) == true
  ) {
    const strComparisonOpPassword: string =
      objSQL_DataBaseCond.dicFldComparisonOp[clsSQL_DataBaseEN.con_Password];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSQL_DataBaseEN.con_Password,
      objSQL_DataBaseCond.password,
      strComparisonOpPassword,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSQL_DataBaseCond.dicFldComparisonOp,
      clsSQL_DataBaseEN.con_UserIdForMaster,
    ) == true
  ) {
    const strComparisonOpUserIdForMaster: string =
      objSQL_DataBaseCond.dicFldComparisonOp[clsSQL_DataBaseEN.con_UserIdForMaster];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSQL_DataBaseEN.con_UserIdForMaster,
      objSQL_DataBaseCond.userIdForMaster,
      strComparisonOpUserIdForMaster,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSQL_DataBaseCond.dicFldComparisonOp,
      clsSQL_DataBaseEN.con_PasswordForMaster,
    ) == true
  ) {
    const strComparisonOpPasswordForMaster: string =
      objSQL_DataBaseCond.dicFldComparisonOp[clsSQL_DataBaseEN.con_PasswordForMaster];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSQL_DataBaseEN.con_PasswordForMaster,
      objSQL_DataBaseCond.passwordForMaster,
      strComparisonOpPasswordForMaster,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSQL_DataBaseCond.dicFldComparisonOp,
      clsSQL_DataBaseEN.con_PrjId,
    ) == true
  ) {
    const strComparisonOpPrjId: string =
      objSQL_DataBaseCond.dicFldComparisonOp[clsSQL_DataBaseEN.con_PrjId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSQL_DataBaseEN.con_PrjId,
      objSQL_DataBaseCond.prjId,
      strComparisonOpPrjId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSQL_DataBaseCond.dicFldComparisonOp,
      clsSQL_DataBaseEN.con_DatabaseOwner,
    ) == true
  ) {
    const strComparisonOpDatabaseOwner: string =
      objSQL_DataBaseCond.dicFldComparisonOp[clsSQL_DataBaseEN.con_DatabaseOwner];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSQL_DataBaseEN.con_DatabaseOwner,
      objSQL_DataBaseCond.databaseOwner,
      strComparisonOpDatabaseOwner,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSQL_DataBaseCond.dicFldComparisonOp,
      clsSQL_DataBaseEN.con_DataBaseName,
    ) == true
  ) {
    const strComparisonOpDataBaseName: string =
      objSQL_DataBaseCond.dicFldComparisonOp[clsSQL_DataBaseEN.con_DataBaseName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSQL_DataBaseEN.con_DataBaseName,
      objSQL_DataBaseCond.dataBaseName,
      strComparisonOpDataBaseName,
    );
  }
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objSQL_DataBaseENS:源对象
 * @param objSQL_DataBaseENT:目标对象
 */
export function SQL_DataBase_GetObjFromJsonObj(
  objSQL_DataBaseENS: clsSQL_DataBaseEN,
): clsSQL_DataBaseEN {
  const objSQL_DataBaseENT: clsSQL_DataBaseEN = new clsSQL_DataBaseEN();
  ObjectAssign(objSQL_DataBaseENT, objSQL_DataBaseENS);
  return objSQL_DataBaseENT;
}
