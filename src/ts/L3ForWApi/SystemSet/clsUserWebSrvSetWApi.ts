/**
 * 类名:clsUserWebSrvSetWApi
 * 表名:UserWebSrvSet(00050528)
 * 版本:2023.10.12.1(服务器:WIN-SRV103-116)
 * 日期:2023/10/12 14:39:31
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:系统设置(SystemSet)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 用户WebSrv设置(UserWebSrvSet)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2023年10月12日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { GetStrLen, tzDataType, Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { clsUserWebSrvSetEN } from '@/ts/L0Entity/SystemSet/clsUserWebSrvSetEN';
import { GetExceptionStr, myShowErrorMsg, ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const userWebSrvSet_Controller = 'UserWebSrvSetApi';
export const userWebSrvSet_ConstructorName = 'userWebSrvSet';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngmId:关键字
 * @returns 对象
 **/
export async function UserWebSrvSet_GetObjBymIdAsync(
  lngmId: number,
): Promise<clsUserWebSrvSetEN | null> {
  const strThisFuncName = 'GetObjBymIdAsync';

  if (lngmId == 0) {
    const strMsg = Format('参数:[lngmId]不能为空!(In clsUserWebSrvSetWApi.GetObjBymIdAsync)');
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjBymId';
  const strUrl = GetWebApiUrl(userWebSrvSet_Controller, strAction);

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
      const objUserWebSrvSet = UserWebSrvSet_GetObjFromJsonObj(returnObj);
      return objUserWebSrvSet;
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
        userWebSrvSet_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userWebSrvSet_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[GetObjBymIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )
//该表没有使用Cache,不需要生成[GetObjBymIdlocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[UpdateObjInLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache
//该表没有使用Cache,不需要生成[GetNameBymIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
//该表没有使用Cache,不需要生成[func]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func )

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function UserWebSrvSet_SortFunDefa(a: clsUserWebSrvSetEN, b: clsUserWebSrvSetEN): number {
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
export function UserWebSrvSet_SortFunDefa2Fld(
  a: clsUserWebSrvSetEN,
  b: clsUserWebSrvSetEN,
): number {
  if (a.userId == b.userId) return a.machineName.localeCompare(b.machineName);
  else return a.userId.localeCompare(b.userId);
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
export function UserWebSrvSet_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsUserWebSrvSetEN.con_mId:
        return (a: clsUserWebSrvSetEN, b: clsUserWebSrvSetEN) => {
          return a.mId - b.mId;
        };
      case clsUserWebSrvSetEN.con_UserId:
        return (a: clsUserWebSrvSetEN, b: clsUserWebSrvSetEN) => {
          if (a.userId == null) return -1;
          if (b.userId == null) return 1;
          return a.userId.localeCompare(b.userId);
        };
      case clsUserWebSrvSetEN.con_MachineName:
        return (a: clsUserWebSrvSetEN, b: clsUserWebSrvSetEN) => {
          if (a.machineName == null) return -1;
          if (b.machineName == null) return 1;
          return a.machineName.localeCompare(b.machineName);
        };
      case clsUserWebSrvSetEN.con_WebApiIPAndPort:
        return (a: clsUserWebSrvSetEN, b: clsUserWebSrvSetEN) => {
          if (a.webApiIPAndPort == null) return -1;
          if (b.webApiIPAndPort == null) return 1;
          return a.webApiIPAndPort.localeCompare(b.webApiIPAndPort);
        };
      case clsUserWebSrvSetEN.con_WebApiVirtualPath:
        return (a: clsUserWebSrvSetEN, b: clsUserWebSrvSetEN) => {
          if (a.webApiVirtualPath == null) return -1;
          if (b.webApiVirtualPath == null) return 1;
          return a.webApiVirtualPath.localeCompare(b.webApiVirtualPath);
        };
      case clsUserWebSrvSetEN.con_IsTemplate:
        return (a: clsUserWebSrvSetEN) => {
          if (a.isTemplate == true) return 1;
          else return -1;
        };
      case clsUserWebSrvSetEN.con_UpdDate:
        return (a: clsUserWebSrvSetEN, b: clsUserWebSrvSetEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsUserWebSrvSetEN.con_UpdUserId:
        return (a: clsUserWebSrvSetEN, b: clsUserWebSrvSetEN) => {
          if (a.updUserId == null) return -1;
          if (b.updUserId == null) return 1;
          return a.updUserId.localeCompare(b.updUserId);
        };
      case clsUserWebSrvSetEN.con_Memo:
        return (a: clsUserWebSrvSetEN, b: clsUserWebSrvSetEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[UserWebSrvSet]中不存在!(in ${userWebSrvSet_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsUserWebSrvSetEN.con_mId:
        return (a: clsUserWebSrvSetEN, b: clsUserWebSrvSetEN) => {
          return b.mId - a.mId;
        };
      case clsUserWebSrvSetEN.con_UserId:
        return (a: clsUserWebSrvSetEN, b: clsUserWebSrvSetEN) => {
          if (b.userId == null) return -1;
          if (a.userId == null) return 1;
          return b.userId.localeCompare(a.userId);
        };
      case clsUserWebSrvSetEN.con_MachineName:
        return (a: clsUserWebSrvSetEN, b: clsUserWebSrvSetEN) => {
          if (b.machineName == null) return -1;
          if (a.machineName == null) return 1;
          return b.machineName.localeCompare(a.machineName);
        };
      case clsUserWebSrvSetEN.con_WebApiIPAndPort:
        return (a: clsUserWebSrvSetEN, b: clsUserWebSrvSetEN) => {
          if (b.webApiIPAndPort == null) return -1;
          if (a.webApiIPAndPort == null) return 1;
          return b.webApiIPAndPort.localeCompare(a.webApiIPAndPort);
        };
      case clsUserWebSrvSetEN.con_WebApiVirtualPath:
        return (a: clsUserWebSrvSetEN, b: clsUserWebSrvSetEN) => {
          if (b.webApiVirtualPath == null) return -1;
          if (a.webApiVirtualPath == null) return 1;
          return b.webApiVirtualPath.localeCompare(a.webApiVirtualPath);
        };
      case clsUserWebSrvSetEN.con_IsTemplate:
        return (b: clsUserWebSrvSetEN) => {
          if (b.isTemplate == true) return 1;
          else return -1;
        };
      case clsUserWebSrvSetEN.con_UpdDate:
        return (a: clsUserWebSrvSetEN, b: clsUserWebSrvSetEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsUserWebSrvSetEN.con_UpdUserId:
        return (a: clsUserWebSrvSetEN, b: clsUserWebSrvSetEN) => {
          if (b.updUserId == null) return -1;
          if (a.updUserId == null) return 1;
          return b.updUserId.localeCompare(a.updUserId);
        };
      case clsUserWebSrvSetEN.con_Memo:
        return (a: clsUserWebSrvSetEN, b: clsUserWebSrvSetEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[UserWebSrvSet]中不存在!(in ${userWebSrvSet_ConstructorName}.${strThisFuncName})`;
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
export async function UserWebSrvSet_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsUserWebSrvSetEN.con_mId:
      return (obj: clsUserWebSrvSetEN) => {
        return obj.mId === value;
      };
    case clsUserWebSrvSetEN.con_UserId:
      return (obj: clsUserWebSrvSetEN) => {
        return obj.userId === value;
      };
    case clsUserWebSrvSetEN.con_MachineName:
      return (obj: clsUserWebSrvSetEN) => {
        return obj.machineName === value;
      };
    case clsUserWebSrvSetEN.con_WebApiIPAndPort:
      return (obj: clsUserWebSrvSetEN) => {
        return obj.webApiIPAndPort === value;
      };
    case clsUserWebSrvSetEN.con_WebApiVirtualPath:
      return (obj: clsUserWebSrvSetEN) => {
        return obj.webApiVirtualPath === value;
      };
    case clsUserWebSrvSetEN.con_IsTemplate:
      return (obj: clsUserWebSrvSetEN) => {
        return obj.isTemplate === value;
      };
    case clsUserWebSrvSetEN.con_UpdDate:
      return (obj: clsUserWebSrvSetEN) => {
        return obj.updDate === value;
      };
    case clsUserWebSrvSetEN.con_UpdUserId:
      return (obj: clsUserWebSrvSetEN) => {
        return obj.updUserId === value;
      };
    case clsUserWebSrvSetEN.con_Memo:
      return (obj: clsUserWebSrvSetEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[UserWebSrvSet]中不存在!(in ${userWebSrvSet_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}
//该表没有使用Cache,不需要生成[UserWebSrvSet__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function UserWebSrvSet_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(userWebSrvSet_Controller, strAction);

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
        userWebSrvSet_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userWebSrvSet_ConstructorName,
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
export async function UserWebSrvSet_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(userWebSrvSet_Controller, strAction);

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
        userWebSrvSet_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userWebSrvSet_ConstructorName,
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
export async function UserWebSrvSet_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsUserWebSrvSetEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(userWebSrvSet_Controller, strAction);

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
      const objUserWebSrvSet = UserWebSrvSet_GetObjFromJsonObj(returnObj);
      return objUserWebSrvSet;
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
        userWebSrvSet_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userWebSrvSet_ConstructorName,
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
export async function UserWebSrvSet_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsUserWebSrvSetEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(userWebSrvSet_Controller, strAction);

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
          userWebSrvSet_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = UserWebSrvSet_GetObjLstByJSONObjLst(returnObjLst);
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
        userWebSrvSet_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userWebSrvSet_ConstructorName,
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
 * @param arrmId:关键字列表
 * @returns 对象列表
 **/
export async function UserWebSrvSet_GetObjLstBymIdLstAsync(
  arrmId: Array<string>,
): Promise<Array<clsUserWebSrvSetEN>> {
  const strThisFuncName = 'GetObjLstBymIdLstAsync';
  const strAction = 'GetObjLstBymIdLst';
  const strUrl = GetWebApiUrl(userWebSrvSet_Controller, strAction);

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
          userWebSrvSet_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = UserWebSrvSet_GetObjLstByJSONObjLst(returnObjLst);
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
        userWebSrvSet_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userWebSrvSet_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[GetObjLstBymIdLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

/**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export async function UserWebSrvSet_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsUserWebSrvSetEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(userWebSrvSet_Controller, strAction);

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
          userWebSrvSet_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = UserWebSrvSet_GetObjLstByJSONObjLst(returnObjLst);
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
        userWebSrvSet_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userWebSrvSet_ConstructorName,
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
export async function UserWebSrvSet_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsUserWebSrvSetEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(userWebSrvSet_Controller, strAction);

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
          userWebSrvSet_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = UserWebSrvSet_GetObjLstByJSONObjLst(returnObjLst);
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
        userWebSrvSet_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userWebSrvSet_ConstructorName,
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
export async function UserWebSrvSet_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsUserWebSrvSetEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsUserWebSrvSetEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(userWebSrvSet_Controller, strAction);

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
          userWebSrvSet_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = UserWebSrvSet_GetObjLstByJSONObjLst(returnObjLst);
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
        userWebSrvSet_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userWebSrvSet_ConstructorName,
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
export async function UserWebSrvSet_DelRecordAsync(lngmId: number): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(userWebSrvSet_Controller, strAction);
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
        userWebSrvSet_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userWebSrvSet_ConstructorName,
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
export async function UserWebSrvSet_DelUserWebSrvSetsAsync(arrmId: Array<string>): Promise<number> {
  const strThisFuncName = 'DelUserWebSrvSetsAsync';
  const strAction = 'DelUserWebSrvSets';
  const strUrl = GetWebApiUrl(userWebSrvSet_Controller, strAction);

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
        userWebSrvSet_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userWebSrvSet_ConstructorName,
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
export async function UserWebSrvSet_DelUserWebSrvSetsByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelUserWebSrvSetsByCondAsync';
  const strAction = 'DelUserWebSrvSetsByCond';
  const strUrl = GetWebApiUrl(userWebSrvSet_Controller, strAction);

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
        userWebSrvSet_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userWebSrvSet_ConstructorName,
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
 * @param objUserWebSrvSetEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function UserWebSrvSet_AddNewRecordAsync(
  objUserWebSrvSetEN: clsUserWebSrvSetEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objUserWebSrvSetEN);
  const strUrl = GetWebApiUrl(userWebSrvSet_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objUserWebSrvSetEN, config);
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
        userWebSrvSet_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userWebSrvSet_ConstructorName,
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
 * @param objUserWebSrvSetEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function UserWebSrvSet_AddNewRecordWithReturnKeyAsync(
  objUserWebSrvSetEN: clsUserWebSrvSetEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(userWebSrvSet_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objUserWebSrvSetEN, config);
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
        userWebSrvSet_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userWebSrvSet_ConstructorName,
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
 * @param objUserWebSrvSetEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function UserWebSrvSet_UpdateRecordAsync(
  objUserWebSrvSetEN: clsUserWebSrvSetEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objUserWebSrvSetEN.sfUpdFldSetStr === undefined ||
    objUserWebSrvSetEN.sfUpdFldSetStr === null ||
    objUserWebSrvSetEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objUserWebSrvSetEN.mId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(userWebSrvSet_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objUserWebSrvSetEN, config);
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
        userWebSrvSet_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userWebSrvSet_ConstructorName,
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
 * @param objUserWebSrvSetEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function UserWebSrvSet_UpdateWithConditionAsync(
  objUserWebSrvSetEN: clsUserWebSrvSetEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objUserWebSrvSetEN.sfUpdFldSetStr === undefined ||
    objUserWebSrvSetEN.sfUpdFldSetStr === null ||
    objUserWebSrvSetEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objUserWebSrvSetEN.mId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(userWebSrvSet_Controller, strAction);
  objUserWebSrvSetEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objUserWebSrvSetEN, config);
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
        userWebSrvSet_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userWebSrvSet_ConstructorName,
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
export async function UserWebSrvSet_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(userWebSrvSet_Controller, strAction);

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
        userWebSrvSet_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userWebSrvSet_ConstructorName,
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
 * @param lngmId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function UserWebSrvSet_IsExistAsync(lngmId: number): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(userWebSrvSet_Controller, strAction);

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
        userWebSrvSet_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userWebSrvSet_ConstructorName,
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
export async function UserWebSrvSet_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(userWebSrvSet_Controller, strAction);

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
        userWebSrvSet_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userWebSrvSet_ConstructorName,
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
export async function UserWebSrvSet_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(userWebSrvSet_Controller, strAction);

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
        userWebSrvSet_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userWebSrvSet_ConstructorName,
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
export function UserWebSrvSet_GetWebApiUrl(strController: string, strAction: string): string {
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
export function UserWebSrvSet_CheckPropertyNew(pobjUserWebSrvSetEN: clsUserWebSrvSetEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (
    null === pobjUserWebSrvSetEN.isTemplate ||
    (pobjUserWebSrvSetEN.isTemplate != null && pobjUserWebSrvSetEN.isTemplate.toString() === '')
  ) {
    throw new Error(
      '(errid:Watl000411)字段[是否模板]不能为空(In 用户WebSrv设置)!(clsUserWebSrvSetBL:CheckPropertyNew0)',
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjUserWebSrvSetEN.userId) == false &&
    GetStrLen(pobjUserWebSrvSetEN.userId) > 18
  ) {
    throw new Error(
      '(errid:Watl000413)字段[用户Id(userId)]的长度不能超过18(In 用户WebSrv设置(UserWebSrvSet))!值:$(pobjUserWebSrvSetEN.userId)(clsUserWebSrvSetBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserWebSrvSetEN.machineName) == false &&
    GetStrLen(pobjUserWebSrvSetEN.machineName) > 50
  ) {
    throw new Error(
      '(errid:Watl000413)字段[机器名(machineName)]的长度不能超过50(In 用户WebSrv设置(UserWebSrvSet))!值:$(pobjUserWebSrvSetEN.machineName)(clsUserWebSrvSetBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserWebSrvSetEN.webApiIPAndPort) == false &&
    GetStrLen(pobjUserWebSrvSetEN.webApiIPAndPort) > 50
  ) {
    throw new Error(
      '(errid:Watl000413)字段[WebApiIPAndPort(webApiIPAndPort)]的长度不能超过50(In 用户WebSrv设置(UserWebSrvSet))!值:$(pobjUserWebSrvSetEN.webApiIPAndPort)(clsUserWebSrvSetBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserWebSrvSetEN.webApiVirtualPath) == false &&
    GetStrLen(pobjUserWebSrvSetEN.webApiVirtualPath) > 50
  ) {
    throw new Error(
      '(errid:Watl000413)字段[WebApi虚拟路径(webApiVirtualPath)]的长度不能超过50(In 用户WebSrv设置(UserWebSrvSet))!值:$(pobjUserWebSrvSetEN.webApiVirtualPath)(clsUserWebSrvSetBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserWebSrvSetEN.updDate) == false &&
    GetStrLen(pobjUserWebSrvSetEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 用户WebSrv设置(UserWebSrvSet))!值:$(pobjUserWebSrvSetEN.updDate)(clsUserWebSrvSetBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserWebSrvSetEN.updUserId) == false &&
    GetStrLen(pobjUserWebSrvSetEN.updUserId) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改用户Id(updUserId)]的长度不能超过20(In 用户WebSrv设置(UserWebSrvSet))!值:$(pobjUserWebSrvSetEN.updUserId)(clsUserWebSrvSetBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserWebSrvSetEN.memo) == false &&
    GetStrLen(pobjUserWebSrvSetEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In 用户WebSrv设置(UserWebSrvSet))!值:$(pobjUserWebSrvSetEN.memo)(clsUserWebSrvSetBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjUserWebSrvSetEN.mId &&
    undefined !== pobjUserWebSrvSetEN.mId &&
    tzDataType.isNumber(pobjUserWebSrvSetEN.mId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[mId(mId)]的值:[$(pobjUserWebSrvSetEN.mId)], 非法,应该为数值型(In 用户WebSrv设置(UserWebSrvSet))!(clsUserWebSrvSetBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserWebSrvSetEN.userId) == false &&
    undefined !== pobjUserWebSrvSetEN.userId &&
    tzDataType.isString(pobjUserWebSrvSetEN.userId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[用户Id(userId)]的值:[$(pobjUserWebSrvSetEN.userId)], 非法,应该为字符型(In 用户WebSrv设置(UserWebSrvSet))!(clsUserWebSrvSetBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserWebSrvSetEN.machineName) == false &&
    undefined !== pobjUserWebSrvSetEN.machineName &&
    tzDataType.isString(pobjUserWebSrvSetEN.machineName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[机器名(machineName)]的值:[$(pobjUserWebSrvSetEN.machineName)], 非法,应该为字符型(In 用户WebSrv设置(UserWebSrvSet))!(clsUserWebSrvSetBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserWebSrvSetEN.webApiIPAndPort) == false &&
    undefined !== pobjUserWebSrvSetEN.webApiIPAndPort &&
    tzDataType.isString(pobjUserWebSrvSetEN.webApiIPAndPort) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[WebApiIPAndPort(webApiIPAndPort)]的值:[$(pobjUserWebSrvSetEN.webApiIPAndPort)], 非法,应该为字符型(In 用户WebSrv设置(UserWebSrvSet))!(clsUserWebSrvSetBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserWebSrvSetEN.webApiVirtualPath) == false &&
    undefined !== pobjUserWebSrvSetEN.webApiVirtualPath &&
    tzDataType.isString(pobjUserWebSrvSetEN.webApiVirtualPath) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[WebApi虚拟路径(webApiVirtualPath)]的值:[$(pobjUserWebSrvSetEN.webApiVirtualPath)], 非法,应该为字符型(In 用户WebSrv设置(UserWebSrvSet))!(clsUserWebSrvSetBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjUserWebSrvSetEN.isTemplate &&
    undefined !== pobjUserWebSrvSetEN.isTemplate &&
    tzDataType.isBoolean(pobjUserWebSrvSetEN.isTemplate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否模板(isTemplate)]的值:[$(pobjUserWebSrvSetEN.isTemplate)], 非法,应该为布尔型(In 用户WebSrv设置(UserWebSrvSet))!(clsUserWebSrvSetBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserWebSrvSetEN.updDate) == false &&
    undefined !== pobjUserWebSrvSetEN.updDate &&
    tzDataType.isString(pobjUserWebSrvSetEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjUserWebSrvSetEN.updDate)], 非法,应该为字符型(In 用户WebSrv设置(UserWebSrvSet))!(clsUserWebSrvSetBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserWebSrvSetEN.updUserId) == false &&
    undefined !== pobjUserWebSrvSetEN.updUserId &&
    tzDataType.isString(pobjUserWebSrvSetEN.updUserId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改用户Id(updUserId)]的值:[$(pobjUserWebSrvSetEN.updUserId)], 非法,应该为字符型(In 用户WebSrv设置(UserWebSrvSet))!(clsUserWebSrvSetBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserWebSrvSetEN.memo) == false &&
    undefined !== pobjUserWebSrvSetEN.memo &&
    tzDataType.isString(pobjUserWebSrvSetEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[说明(memo)]的值:[$(pobjUserWebSrvSetEN.memo)], 非法,应该为字符型(In 用户WebSrv设置(UserWebSrvSet))!(clsUserWebSrvSetBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function UserWebSrvSet_CheckProperty4Update(pobjUserWebSrvSetEN: clsUserWebSrvSetEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjUserWebSrvSetEN.userId) == false &&
    GetStrLen(pobjUserWebSrvSetEN.userId) > 18
  ) {
    throw new Error(
      '(errid:Watl000416)字段[用户Id(userId)]的长度不能超过18(In 用户WebSrv设置(UserWebSrvSet))!值:$(pobjUserWebSrvSetEN.userId)(clsUserWebSrvSetBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserWebSrvSetEN.machineName) == false &&
    GetStrLen(pobjUserWebSrvSetEN.machineName) > 50
  ) {
    throw new Error(
      '(errid:Watl000416)字段[机器名(machineName)]的长度不能超过50(In 用户WebSrv设置(UserWebSrvSet))!值:$(pobjUserWebSrvSetEN.machineName)(clsUserWebSrvSetBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserWebSrvSetEN.webApiIPAndPort) == false &&
    GetStrLen(pobjUserWebSrvSetEN.webApiIPAndPort) > 50
  ) {
    throw new Error(
      '(errid:Watl000416)字段[WebApiIPAndPort(webApiIPAndPort)]的长度不能超过50(In 用户WebSrv设置(UserWebSrvSet))!值:$(pobjUserWebSrvSetEN.webApiIPAndPort)(clsUserWebSrvSetBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserWebSrvSetEN.webApiVirtualPath) == false &&
    GetStrLen(pobjUserWebSrvSetEN.webApiVirtualPath) > 50
  ) {
    throw new Error(
      '(errid:Watl000416)字段[WebApi虚拟路径(webApiVirtualPath)]的长度不能超过50(In 用户WebSrv设置(UserWebSrvSet))!值:$(pobjUserWebSrvSetEN.webApiVirtualPath)(clsUserWebSrvSetBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserWebSrvSetEN.updDate) == false &&
    GetStrLen(pobjUserWebSrvSetEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 用户WebSrv设置(UserWebSrvSet))!值:$(pobjUserWebSrvSetEN.updDate)(clsUserWebSrvSetBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserWebSrvSetEN.updUserId) == false &&
    GetStrLen(pobjUserWebSrvSetEN.updUserId) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改用户Id(updUserId)]的长度不能超过20(In 用户WebSrv设置(UserWebSrvSet))!值:$(pobjUserWebSrvSetEN.updUserId)(clsUserWebSrvSetBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserWebSrvSetEN.memo) == false &&
    GetStrLen(pobjUserWebSrvSetEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In 用户WebSrv设置(UserWebSrvSet))!值:$(pobjUserWebSrvSetEN.memo)(clsUserWebSrvSetBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjUserWebSrvSetEN.mId &&
    undefined !== pobjUserWebSrvSetEN.mId &&
    tzDataType.isNumber(pobjUserWebSrvSetEN.mId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[mId(mId)]的值:[$(pobjUserWebSrvSetEN.mId)], 非法,应该为数值型(In 用户WebSrv设置(UserWebSrvSet))!(clsUserWebSrvSetBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserWebSrvSetEN.userId) == false &&
    undefined !== pobjUserWebSrvSetEN.userId &&
    tzDataType.isString(pobjUserWebSrvSetEN.userId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[用户Id(userId)]的值:[$(pobjUserWebSrvSetEN.userId)], 非法,应该为字符型(In 用户WebSrv设置(UserWebSrvSet))!(clsUserWebSrvSetBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserWebSrvSetEN.machineName) == false &&
    undefined !== pobjUserWebSrvSetEN.machineName &&
    tzDataType.isString(pobjUserWebSrvSetEN.machineName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[机器名(machineName)]的值:[$(pobjUserWebSrvSetEN.machineName)], 非法,应该为字符型(In 用户WebSrv设置(UserWebSrvSet))!(clsUserWebSrvSetBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserWebSrvSetEN.webApiIPAndPort) == false &&
    undefined !== pobjUserWebSrvSetEN.webApiIPAndPort &&
    tzDataType.isString(pobjUserWebSrvSetEN.webApiIPAndPort) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[WebApiIPAndPort(webApiIPAndPort)]的值:[$(pobjUserWebSrvSetEN.webApiIPAndPort)], 非法,应该为字符型(In 用户WebSrv设置(UserWebSrvSet))!(clsUserWebSrvSetBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserWebSrvSetEN.webApiVirtualPath) == false &&
    undefined !== pobjUserWebSrvSetEN.webApiVirtualPath &&
    tzDataType.isString(pobjUserWebSrvSetEN.webApiVirtualPath) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[WebApi虚拟路径(webApiVirtualPath)]的值:[$(pobjUserWebSrvSetEN.webApiVirtualPath)], 非法,应该为字符型(In 用户WebSrv设置(UserWebSrvSet))!(clsUserWebSrvSetBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjUserWebSrvSetEN.isTemplate &&
    undefined !== pobjUserWebSrvSetEN.isTemplate &&
    tzDataType.isBoolean(pobjUserWebSrvSetEN.isTemplate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否模板(isTemplate)]的值:[$(pobjUserWebSrvSetEN.isTemplate)], 非法,应该为布尔型(In 用户WebSrv设置(UserWebSrvSet))!(clsUserWebSrvSetBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserWebSrvSetEN.updDate) == false &&
    undefined !== pobjUserWebSrvSetEN.updDate &&
    tzDataType.isString(pobjUserWebSrvSetEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjUserWebSrvSetEN.updDate)], 非法,应该为字符型(In 用户WebSrv设置(UserWebSrvSet))!(clsUserWebSrvSetBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserWebSrvSetEN.updUserId) == false &&
    undefined !== pobjUserWebSrvSetEN.updUserId &&
    tzDataType.isString(pobjUserWebSrvSetEN.updUserId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改用户Id(updUserId)]的值:[$(pobjUserWebSrvSetEN.updUserId)], 非法,应该为字符型(In 用户WebSrv设置(UserWebSrvSet))!(clsUserWebSrvSetBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserWebSrvSetEN.memo) == false &&
    undefined !== pobjUserWebSrvSetEN.memo &&
    tzDataType.isString(pobjUserWebSrvSetEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[说明(memo)]的值:[$(pobjUserWebSrvSetEN.memo)], 非法,应该为字符型(In 用户WebSrv设置(UserWebSrvSet))!(clsUserWebSrvSetBL:CheckProperty4Update)',
    );
  }
  //检查主键是否为Null或者空!
  if (
    null === pobjUserWebSrvSetEN.mId ||
    (pobjUserWebSrvSetEN.mId != null && pobjUserWebSrvSetEN.mId.toString() === '')
  ) {
    throw new Error(
      '(errid:Watl000064)字段[mId]不能为空(In 用户WebSrv设置)!(clsUserWebSrvSetBL:CheckProperty4Update)',
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
export function UserWebSrvSet_GetJSONStrByObj(pobjUserWebSrvSetEN: clsUserWebSrvSetEN): string {
  pobjUserWebSrvSetEN.sfUpdFldSetStr = pobjUserWebSrvSetEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjUserWebSrvSetEN);
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
export function UserWebSrvSet_GetObjLstByJSONStr(strJSON: string): Array<clsUserWebSrvSetEN> {
  let arrUserWebSrvSetObjLst = new Array<clsUserWebSrvSetEN>();
  if (strJSON === '') {
    return arrUserWebSrvSetObjLst;
  }
  try {
    arrUserWebSrvSetObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrUserWebSrvSetObjLst;
  }
  return arrUserWebSrvSetObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrUserWebSrvSetObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function UserWebSrvSet_GetObjLstByJSONObjLst(
  arrUserWebSrvSetObjLstS: Array<clsUserWebSrvSetEN>,
): Array<clsUserWebSrvSetEN> {
  const arrUserWebSrvSetObjLst = new Array<clsUserWebSrvSetEN>();
  for (const objInFor of arrUserWebSrvSetObjLstS) {
    const obj1 = UserWebSrvSet_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrUserWebSrvSetObjLst.push(obj1);
  }
  return arrUserWebSrvSetObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function UserWebSrvSet_GetObjByJSONStr(strJSON: string): clsUserWebSrvSetEN {
  let pobjUserWebSrvSetEN = new clsUserWebSrvSetEN();
  if (strJSON === '') {
    return pobjUserWebSrvSetEN;
  }
  try {
    pobjUserWebSrvSetEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjUserWebSrvSetEN;
  }
  return pobjUserWebSrvSetEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function UserWebSrvSet_GetCombineCondition(
  objUserWebSrvSetCond: clsUserWebSrvSetEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objUserWebSrvSetCond.dicFldComparisonOp,
      clsUserWebSrvSetEN.con_mId,
    ) == true
  ) {
    const strComparisonOpmId: string =
      objUserWebSrvSetCond.dicFldComparisonOp[clsUserWebSrvSetEN.con_mId];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsUserWebSrvSetEN.con_mId,
      objUserWebSrvSetCond.mId,
      strComparisonOpmId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objUserWebSrvSetCond.dicFldComparisonOp,
      clsUserWebSrvSetEN.con_UserId,
    ) == true
  ) {
    const strComparisonOpUserId: string =
      objUserWebSrvSetCond.dicFldComparisonOp[clsUserWebSrvSetEN.con_UserId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsUserWebSrvSetEN.con_UserId,
      objUserWebSrvSetCond.userId,
      strComparisonOpUserId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objUserWebSrvSetCond.dicFldComparisonOp,
      clsUserWebSrvSetEN.con_MachineName,
    ) == true
  ) {
    const strComparisonOpMachineName: string =
      objUserWebSrvSetCond.dicFldComparisonOp[clsUserWebSrvSetEN.con_MachineName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsUserWebSrvSetEN.con_MachineName,
      objUserWebSrvSetCond.machineName,
      strComparisonOpMachineName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objUserWebSrvSetCond.dicFldComparisonOp,
      clsUserWebSrvSetEN.con_WebApiIPAndPort,
    ) == true
  ) {
    const strComparisonOpWebApiIPAndPort: string =
      objUserWebSrvSetCond.dicFldComparisonOp[clsUserWebSrvSetEN.con_WebApiIPAndPort];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsUserWebSrvSetEN.con_WebApiIPAndPort,
      objUserWebSrvSetCond.webApiIPAndPort,
      strComparisonOpWebApiIPAndPort,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objUserWebSrvSetCond.dicFldComparisonOp,
      clsUserWebSrvSetEN.con_WebApiVirtualPath,
    ) == true
  ) {
    const strComparisonOpWebApiVirtualPath: string =
      objUserWebSrvSetCond.dicFldComparisonOp[clsUserWebSrvSetEN.con_WebApiVirtualPath];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsUserWebSrvSetEN.con_WebApiVirtualPath,
      objUserWebSrvSetCond.webApiVirtualPath,
      strComparisonOpWebApiVirtualPath,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objUserWebSrvSetCond.dicFldComparisonOp,
      clsUserWebSrvSetEN.con_IsTemplate,
    ) == true
  ) {
    if (objUserWebSrvSetCond.isTemplate == true) {
      strWhereCond += Format(" And {0} = '1'", clsUserWebSrvSetEN.con_IsTemplate);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsUserWebSrvSetEN.con_IsTemplate);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objUserWebSrvSetCond.dicFldComparisonOp,
      clsUserWebSrvSetEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objUserWebSrvSetCond.dicFldComparisonOp[clsUserWebSrvSetEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsUserWebSrvSetEN.con_UpdDate,
      objUserWebSrvSetCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objUserWebSrvSetCond.dicFldComparisonOp,
      clsUserWebSrvSetEN.con_UpdUserId,
    ) == true
  ) {
    const strComparisonOpUpdUserId: string =
      objUserWebSrvSetCond.dicFldComparisonOp[clsUserWebSrvSetEN.con_UpdUserId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsUserWebSrvSetEN.con_UpdUserId,
      objUserWebSrvSetCond.updUserId,
      strComparisonOpUpdUserId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objUserWebSrvSetCond.dicFldComparisonOp,
      clsUserWebSrvSetEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objUserWebSrvSetCond.dicFldComparisonOp[clsUserWebSrvSetEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsUserWebSrvSetEN.con_Memo,
      objUserWebSrvSetCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--UserWebSrvSet(用户WebSrv设置),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strUserId: 用户Id(要求唯一的字段)
 * @param strMachineName: 机器名(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function UserWebSrvSet_GetUniCondStr(objUserWebSrvSetEN: clsUserWebSrvSetEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and UserId = '{0}'", objUserWebSrvSetEN.userId);
  strWhereCond += Format(" and MachineName = '{0}'", objUserWebSrvSetEN.machineName);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--UserWebSrvSet(用户WebSrv设置),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strUserId: 用户Id(要求唯一的字段)
 * @param strMachineName: 机器名(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function UserWebSrvSet_GetUniCondStr4Update(objUserWebSrvSetEN: clsUserWebSrvSetEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and mId <> '{0}'", objUserWebSrvSetEN.mId);
  strWhereCond += Format(" and UserId = '{0}'", objUserWebSrvSetEN.userId);
  strWhereCond += Format(" and MachineName = '{0}'", objUserWebSrvSetEN.machineName);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objUserWebSrvSetENS:源对象
 * @param objUserWebSrvSetENT:目标对象
 */
export function UserWebSrvSet_GetObjFromJsonObj(
  objUserWebSrvSetENS: clsUserWebSrvSetEN,
): clsUserWebSrvSetEN {
  const objUserWebSrvSetENT: clsUserWebSrvSetEN = new clsUserWebSrvSetEN();
  ObjectAssign(objUserWebSrvSetENT, objUserWebSrvSetENS);
  return objUserWebSrvSetENT;
}
