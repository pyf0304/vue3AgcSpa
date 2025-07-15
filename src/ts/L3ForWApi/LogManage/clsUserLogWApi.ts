/**
 * 类名:clsUserLogWApi
 * 表名:UserLog(00050130)
 * 版本:2023.10.12.1(服务器:WIN-SRV103-116)
 * 日期:2023/10/12 14:41:34
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
 * 用户日志(UserLog)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2023年10月12日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { clsOrderByData } from '@/ts/PubFun/clsOrderByData';
import {
  BindDdl_ObjLstInDivObj,
  GetExceptionStr,
  myShowErrorMsg,
  ObjectAssign,
} from '@/ts/PubFun/clsCommFunc4Web';
import { GetStrLen, tzDataType, Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { clsUserLogEN } from '@/ts/L0Entity/LogManage/clsUserLogEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const userLog_Controller = 'UserLogApi';
export const userLog_ConstructorName = 'userLog';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngmId:关键字
 * @returns 对象
 **/
export async function UserLog_GetObjBymIdAsync(lngmId: number): Promise<clsUserLogEN | null> {
  const strThisFuncName = 'GetObjBymIdAsync';

  if (lngmId == 0) {
    const strMsg = Format('参数:[lngmId]不能为空!(In clsUserLogWApi.GetObjBymIdAsync)');
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjBymId';
  const strUrl = GetWebApiUrl(userLog_Controller, strAction);

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
      const objUserLog = UserLog_GetObjFromJsonObj(returnObj);
      return objUserLog;
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
        userLog_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userLog_ConstructorName,
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
export function UserLog_SortFunDefa(a: clsUserLogEN, b: clsUserLogEN): number {
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
export function UserLog_SortFunDefa2Fld(a: clsUserLogEN, b: clsUserLogEN): number {
  if (a.userId == b.userId) return a.loginTime.localeCompare(b.loginTime);
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
export function UserLog_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsUserLogEN.con_mId:
        return (a: clsUserLogEN, b: clsUserLogEN) => {
          return a.mId - b.mId;
        };
      case clsUserLogEN.con_UserId:
        return (a: clsUserLogEN, b: clsUserLogEN) => {
          if (a.userId == null) return -1;
          if (b.userId == null) return 1;
          return a.userId.localeCompare(b.userId);
        };
      case clsUserLogEN.con_LoginTime:
        return (a: clsUserLogEN, b: clsUserLogEN) => {
          if (a.loginTime == null) return -1;
          if (b.loginTime == null) return 1;
          return a.loginTime.localeCompare(b.loginTime);
        };
      case clsUserLogEN.con_LoginDate:
        return (a: clsUserLogEN, b: clsUserLogEN) => {
          if (a.loginDate == null) return -1;
          if (b.loginDate == null) return 1;
          return a.loginDate.localeCompare(b.loginDate);
        };
      case clsUserLogEN.con_UserIp:
        return (a: clsUserLogEN, b: clsUserLogEN) => {
          if (a.userIp == null) return -1;
          if (b.userIp == null) return 1;
          return a.userIp.localeCompare(b.userIp);
        };
      case clsUserLogEN.con_ObjectTable:
        return (a: clsUserLogEN, b: clsUserLogEN) => {
          if (a.objectTable == null) return -1;
          if (b.objectTable == null) return 1;
          return a.objectTable.localeCompare(b.objectTable);
        };
      case clsUserLogEN.con_UsedValue:
        return (a: clsUserLogEN, b: clsUserLogEN) => {
          if (a.usedValue == null) return -1;
          if (b.usedValue == null) return 1;
          return a.usedValue.localeCompare(b.usedValue);
        };
      case clsUserLogEN.con_UpdDate:
        return (a: clsUserLogEN, b: clsUserLogEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsUserLogEN.con_Memo:
        return (a: clsUserLogEN, b: clsUserLogEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      case clsUserLogEN.con_IsDeleted:
        return (a: clsUserLogEN) => {
          if (a.isDeleted == true) return 1;
          else return -1;
        };
      case clsUserLogEN.con_OrderNum:
        return (a: clsUserLogEN, b: clsUserLogEN) => {
          return a.orderNum - b.orderNum;
        };
      case clsUserLogEN.con_DeletedDate:
        return (a: clsUserLogEN, b: clsUserLogEN) => {
          if (a.deletedDate == null) return -1;
          if (b.deletedDate == null) return 1;
          return a.deletedDate.localeCompare(b.deletedDate);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[UserLog]中不存在!(in ${userLog_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsUserLogEN.con_mId:
        return (a: clsUserLogEN, b: clsUserLogEN) => {
          return b.mId - a.mId;
        };
      case clsUserLogEN.con_UserId:
        return (a: clsUserLogEN, b: clsUserLogEN) => {
          if (b.userId == null) return -1;
          if (a.userId == null) return 1;
          return b.userId.localeCompare(a.userId);
        };
      case clsUserLogEN.con_LoginTime:
        return (a: clsUserLogEN, b: clsUserLogEN) => {
          if (b.loginTime == null) return -1;
          if (a.loginTime == null) return 1;
          return b.loginTime.localeCompare(a.loginTime);
        };
      case clsUserLogEN.con_LoginDate:
        return (a: clsUserLogEN, b: clsUserLogEN) => {
          if (b.loginDate == null) return -1;
          if (a.loginDate == null) return 1;
          return b.loginDate.localeCompare(a.loginDate);
        };
      case clsUserLogEN.con_UserIp:
        return (a: clsUserLogEN, b: clsUserLogEN) => {
          if (b.userIp == null) return -1;
          if (a.userIp == null) return 1;
          return b.userIp.localeCompare(a.userIp);
        };
      case clsUserLogEN.con_ObjectTable:
        return (a: clsUserLogEN, b: clsUserLogEN) => {
          if (b.objectTable == null) return -1;
          if (a.objectTable == null) return 1;
          return b.objectTable.localeCompare(a.objectTable);
        };
      case clsUserLogEN.con_UsedValue:
        return (a: clsUserLogEN, b: clsUserLogEN) => {
          if (b.usedValue == null) return -1;
          if (a.usedValue == null) return 1;
          return b.usedValue.localeCompare(a.usedValue);
        };
      case clsUserLogEN.con_UpdDate:
        return (a: clsUserLogEN, b: clsUserLogEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsUserLogEN.con_Memo:
        return (a: clsUserLogEN, b: clsUserLogEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      case clsUserLogEN.con_IsDeleted:
        return (b: clsUserLogEN) => {
          if (b.isDeleted == true) return 1;
          else return -1;
        };
      case clsUserLogEN.con_OrderNum:
        return (a: clsUserLogEN, b: clsUserLogEN) => {
          return b.orderNum - a.orderNum;
        };
      case clsUserLogEN.con_DeletedDate:
        return (a: clsUserLogEN, b: clsUserLogEN) => {
          if (b.deletedDate == null) return -1;
          if (a.deletedDate == null) return 1;
          return b.deletedDate.localeCompare(a.deletedDate);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[UserLog]中不存在!(in ${userLog_ConstructorName}.${strThisFuncName})`;
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
export async function UserLog_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsUserLogEN.con_mId:
      return (obj: clsUserLogEN) => {
        return obj.mId === value;
      };
    case clsUserLogEN.con_UserId:
      return (obj: clsUserLogEN) => {
        return obj.userId === value;
      };
    case clsUserLogEN.con_LoginTime:
      return (obj: clsUserLogEN) => {
        return obj.loginTime === value;
      };
    case clsUserLogEN.con_LoginDate:
      return (obj: clsUserLogEN) => {
        return obj.loginDate === value;
      };
    case clsUserLogEN.con_UserIp:
      return (obj: clsUserLogEN) => {
        return obj.userIp === value;
      };
    case clsUserLogEN.con_ObjectTable:
      return (obj: clsUserLogEN) => {
        return obj.objectTable === value;
      };
    case clsUserLogEN.con_UsedValue:
      return (obj: clsUserLogEN) => {
        return obj.usedValue === value;
      };
    case clsUserLogEN.con_UpdDate:
      return (obj: clsUserLogEN) => {
        return obj.updDate === value;
      };
    case clsUserLogEN.con_Memo:
      return (obj: clsUserLogEN) => {
        return obj.memo === value;
      };
    case clsUserLogEN.con_IsDeleted:
      return (obj: clsUserLogEN) => {
        return obj.isDeleted === value;
      };
    case clsUserLogEN.con_OrderNum:
      return (obj: clsUserLogEN) => {
        return obj.orderNum === value;
      };
    case clsUserLogEN.con_DeletedDate:
      return (obj: clsUserLogEN) => {
        return obj.deletedDate === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[UserLog]中不存在!(in ${userLog_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}
//该表没有使用Cache,不需要生成[UserLog__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function UserLog_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(userLog_Controller, strAction);

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
        userLog_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userLog_ConstructorName,
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
export async function UserLog_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(userLog_Controller, strAction);

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
        userLog_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userLog_ConstructorName,
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
export async function UserLog_GetFirstObjAsync(strWhereCond: string): Promise<clsUserLogEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(userLog_Controller, strAction);

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
      const objUserLog = UserLog_GetObjFromJsonObj(returnObj);
      return objUserLog;
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
        userLog_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userLog_ConstructorName,
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
export async function UserLog_GetObjLstAsync(strWhereCond: string): Promise<Array<clsUserLogEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(userLog_Controller, strAction);

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
          userLog_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = UserLog_GetObjLstByJSONObjLst(returnObjLst);
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
        userLog_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userLog_ConstructorName,
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
export async function UserLog_GetObjLstBymIdLstAsync(
  arrmId: Array<string>,
): Promise<Array<clsUserLogEN>> {
  const strThisFuncName = 'GetObjLstBymIdLstAsync';
  const strAction = 'GetObjLstBymIdLst';
  const strUrl = GetWebApiUrl(userLog_Controller, strAction);

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
          userLog_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = UserLog_GetObjLstByJSONObjLst(returnObjLst);
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
        userLog_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userLog_ConstructorName,
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
export async function UserLog_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsUserLogEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(userLog_Controller, strAction);

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
          userLog_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = UserLog_GetObjLstByJSONObjLst(returnObjLst);
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
        userLog_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userLog_ConstructorName,
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
export async function UserLog_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsUserLogEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(userLog_Controller, strAction);

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
          userLog_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = UserLog_GetObjLstByJSONObjLst(returnObjLst);
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
        userLog_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userLog_ConstructorName,
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
export async function UserLog_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsUserLogEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsUserLogEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(userLog_Controller, strAction);

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
          userLog_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = UserLog_GetObjLstByJSONObjLst(returnObjLst);
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
        userLog_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userLog_ConstructorName,
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
export async function UserLog_DelRecordAsync(lngmId: number): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(userLog_Controller, strAction);
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
        userLog_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userLog_ConstructorName,
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
export async function UserLog_DelUserLogsAsync(arrmId: Array<string>): Promise<number> {
  const strThisFuncName = 'DelUserLogsAsync';
  const strAction = 'DelUserLogs';
  const strUrl = GetWebApiUrl(userLog_Controller, strAction);

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
        userLog_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userLog_ConstructorName,
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
 * 根据关键字列表按标志删除记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelRecordBySignAsync)
 * @param arrmId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function UserLog_DelRecordBySignAsync(arrmId: Array<string>): Promise<number> {
  const strThisFuncName = 'DelRecordBySignAsync';
  const strAction = 'DelRecordBySign';
  const strUrl = GetWebApiUrl(userLog_Controller, strAction);

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
        userLog_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userLog_ConstructorName,
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
 * 根据关键字列表按标志恢复记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UnDelRecordBySignAsync)
 * @param arrmId:关键字列表
 * @returns 实际恢复记录的个数
 **/
export async function UserLog_UnDelRecordBySignAsync(arrmId: Array<string>): Promise<number> {
  const strThisFuncName = 'UnDelRecordBySignAsync';
  const strAction = 'UnDelRecordBySign';
  const strUrl = GetWebApiUrl(userLog_Controller, strAction);

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
        userLog_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userLog_ConstructorName,
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
export async function UserLog_DelUserLogsByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'DelUserLogsByCondAsync';
  const strAction = 'DelUserLogsByCond';
  const strUrl = GetWebApiUrl(userLog_Controller, strAction);

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
        userLog_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userLog_ConstructorName,
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
 * @param objUserLogEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function UserLog_AddNewRecordAsync(objUserLogEN: clsUserLogEN): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objUserLogEN);
  const strUrl = GetWebApiUrl(userLog_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objUserLogEN, config);
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
        userLog_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userLog_ConstructorName,
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
 * 把所给的关键字列表相关的记录移顶
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GoTopAsync)
 * @param objUserLogEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function UserLog_GoTopAsync(objOrderByData: clsOrderByData): Promise<boolean> {
  const strThisFuncName = 'GoTopAsync';
  let strMsg = '';
  const strAction = 'GoTop';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表置顶时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(userLog_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objOrderByData, config);
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
        userLog_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userLog_ConstructorName,
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
 * 把所给的关键字列表相关的记录上移
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpMoveAsync)
 * @param objUserLogEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function UserLog_UpMoveAsync(objOrderByData: clsOrderByData): Promise<boolean> {
  const strThisFuncName = 'UpMoveAsync';
  let strMsg = '';
  const strAction = 'UpMove';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表上移时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objUserLogEN);
  const strUrl = GetWebApiUrl(userLog_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objOrderByData, config);
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
        userLog_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userLog_ConstructorName,
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
 * 把所给的关键字列表相关的记录下移
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DownMoveAsync)
 * @param objUserLogEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function UserLog_DownMoveAsync(objOrderByData: clsOrderByData): Promise<boolean> {
  const strThisFuncName = 'DownMoveAsync';
  let strMsg = '';
  const strAction = 'DownMove';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表下移时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objUserLogEN);
  const strUrl = GetWebApiUrl(userLog_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objOrderByData, config);
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
        userLog_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userLog_ConstructorName,
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
 * 把所给的关键字列表相关的记录移底
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GoBottomAsync)
 * @param objUserLogEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function UserLog_GoBottomAsync(objOrderByData: clsOrderByData): Promise<boolean> {
  const strThisFuncName = 'GoBottomAsync';
  let strMsg = '';
  const strAction = 'GoBottom';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表置底时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objUserLogEN);
  const strUrl = GetWebApiUrl(userLog_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objOrderByData, config);
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
        userLog_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userLog_ConstructorName,
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
 * 把列表记录重序
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReOrderAsync)
 * @param objUserLogEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function UserLog_ReOrderAsync(objOrderByData: clsOrderByData): Promise<boolean> {
  const strThisFuncName = 'ReOrderAsync';
  const strAction = 'ReOrder';
  //var strJSON = JSON.stringify(objUserLogEN);
  const strUrl = GetWebApiUrl(userLog_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objOrderByData, config);
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
        userLog_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userLog_ConstructorName,
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
 * @param objUserLogEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function UserLog_AddNewRecordWithReturnKeyAsync(
  objUserLogEN: clsUserLogEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(userLog_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objUserLogEN, config);
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
        userLog_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userLog_ConstructorName,
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
 * @param objUserLogEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function UserLog_UpdateRecordAsync(objUserLogEN: clsUserLogEN): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objUserLogEN.sfUpdFldSetStr === undefined ||
    objUserLogEN.sfUpdFldSetStr === null ||
    objUserLogEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format('对象(关键字: {0})的【修改字段集】为空,不能修改!', objUserLogEN.mId);
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(userLog_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objUserLogEN, config);
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
        userLog_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userLog_ConstructorName,
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
 * @param objUserLogEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function UserLog_UpdateWithConditionAsync(
  objUserLogEN: clsUserLogEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objUserLogEN.sfUpdFldSetStr === undefined ||
    objUserLogEN.sfUpdFldSetStr === null ||
    objUserLogEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format('对象(关键字: {0})的【修改字段集】为空,不能修改!', objUserLogEN.mId);
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(userLog_Controller, strAction);
  objUserLogEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objUserLogEN, config);
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
        userLog_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userLog_ConstructorName,
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
export async function UserLog_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(userLog_Controller, strAction);

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
        userLog_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userLog_ConstructorName,
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
export async function UserLog_IsExistAsync(lngmId: number): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(userLog_Controller, strAction);

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
        userLog_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userLog_ConstructorName,
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
export async function UserLog_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(userLog_Controller, strAction);

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
        userLog_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userLog_ConstructorName,
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
export async function UserLog_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(userLog_Controller, strAction);

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
        userLog_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userLog_ConstructorName,
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
export function UserLog_GetWebApiUrl(strController: string, strAction: string): string {
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

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)
 * @param objDDL:需要绑定当前表的下拉框

*/
export async function UserLog_BindDdl_mIdInDiv(objDiv: HTMLDivElement, strDdlName: string) {
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_mIdInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_mIdInDivCache");
  const strCondition = `1=1`;
  const arrObjLstSel = await UserLog_GetObjLstAsync(strCondition);
  if (arrObjLstSel == null) return;
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsUserLogEN.con_mId,
    clsUserLogEN.con_UserId,
    '用户日志',
  );
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function UserLog_CheckPropertyNew(pobjUserLogEN: clsUserLogEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (
    null === pobjUserLogEN.orderNum ||
    (pobjUserLogEN.orderNum != null && pobjUserLogEN.orderNum.toString() === '')
  ) {
    throw new Error(
      '(errid:Watl000411)字段[序号]不能为空(In 用户日志)!(clsUserLogBL:CheckPropertyNew0)',
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (IsNullOrEmpty(pobjUserLogEN.userId) == false && GetStrLen(pobjUserLogEN.userId) > 18) {
    throw new Error(
      '(errid:Watl000413)字段[用户Id(userId)]的长度不能超过18(In 用户日志(UserLog))!值:$(pobjUserLogEN.userId)(clsUserLogBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjUserLogEN.loginTime) == false && GetStrLen(pobjUserLogEN.loginTime) > 6) {
    throw new Error(
      '(errid:Watl000413)字段[登陆时间(loginTime)]的长度不能超过6(In 用户日志(UserLog))!值:$(pobjUserLogEN.loginTime)(clsUserLogBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjUserLogEN.loginDate) == false && GetStrLen(pobjUserLogEN.loginDate) > 8) {
    throw new Error(
      '(errid:Watl000413)字段[登陆日期(loginDate)]的长度不能超过8(In 用户日志(UserLog))!值:$(pobjUserLogEN.loginDate)(clsUserLogBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjUserLogEN.userIp) == false && GetStrLen(pobjUserLogEN.userIp) > 40) {
    throw new Error(
      '(errid:Watl000413)字段[用户IP(userIp)]的长度不能超过40(In 用户日志(UserLog))!值:$(pobjUserLogEN.userIp)(clsUserLogBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserLogEN.objectTable) == false &&
    GetStrLen(pobjUserLogEN.objectTable) > 50
  ) {
    throw new Error(
      '(errid:Watl000413)字段[对象表(objectTable)]的长度不能超过50(In 用户日志(UserLog))!值:$(pobjUserLogEN.objectTable)(clsUserLogBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjUserLogEN.usedValue) == false && GetStrLen(pobjUserLogEN.usedValue) > 50) {
    throw new Error(
      '(errid:Watl000413)字段[使用值(usedValue)]的长度不能超过50(In 用户日志(UserLog))!值:$(pobjUserLogEN.usedValue)(clsUserLogBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjUserLogEN.updDate) == false && GetStrLen(pobjUserLogEN.updDate) > 20) {
    throw new Error(
      '(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 用户日志(UserLog))!值:$(pobjUserLogEN.updDate)(clsUserLogBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjUserLogEN.memo) == false && GetStrLen(pobjUserLogEN.memo) > 1000) {
    throw new Error(
      '(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In 用户日志(UserLog))!值:$(pobjUserLogEN.memo)(clsUserLogBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserLogEN.deletedDate) == false &&
    GetStrLen(pobjUserLogEN.deletedDate) > 50
  ) {
    throw new Error(
      '(errid:Watl000413)字段[删除日期(deletedDate)]的长度不能超过50(In 用户日志(UserLog))!值:$(pobjUserLogEN.deletedDate)(clsUserLogBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjUserLogEN.mId &&
    undefined !== pobjUserLogEN.mId &&
    tzDataType.isNumber(pobjUserLogEN.mId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[mId(mId)]的值:[$(pobjUserLogEN.mId)], 非法,应该为数值型(In 用户日志(UserLog))!(clsUserLogBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserLogEN.userId) == false &&
    undefined !== pobjUserLogEN.userId &&
    tzDataType.isString(pobjUserLogEN.userId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[用户Id(userId)]的值:[$(pobjUserLogEN.userId)], 非法,应该为字符型(In 用户日志(UserLog))!(clsUserLogBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserLogEN.loginTime) == false &&
    undefined !== pobjUserLogEN.loginTime &&
    tzDataType.isString(pobjUserLogEN.loginTime) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[登陆时间(loginTime)]的值:[$(pobjUserLogEN.loginTime)], 非法,应该为字符型(In 用户日志(UserLog))!(clsUserLogBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserLogEN.loginDate) == false &&
    undefined !== pobjUserLogEN.loginDate &&
    tzDataType.isString(pobjUserLogEN.loginDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[登陆日期(loginDate)]的值:[$(pobjUserLogEN.loginDate)], 非法,应该为字符型(In 用户日志(UserLog))!(clsUserLogBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserLogEN.userIp) == false &&
    undefined !== pobjUserLogEN.userIp &&
    tzDataType.isString(pobjUserLogEN.userIp) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[用户IP(userIp)]的值:[$(pobjUserLogEN.userIp)], 非法,应该为字符型(In 用户日志(UserLog))!(clsUserLogBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserLogEN.objectTable) == false &&
    undefined !== pobjUserLogEN.objectTable &&
    tzDataType.isString(pobjUserLogEN.objectTable) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[对象表(objectTable)]的值:[$(pobjUserLogEN.objectTable)], 非法,应该为字符型(In 用户日志(UserLog))!(clsUserLogBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserLogEN.usedValue) == false &&
    undefined !== pobjUserLogEN.usedValue &&
    tzDataType.isString(pobjUserLogEN.usedValue) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[使用值(usedValue)]的值:[$(pobjUserLogEN.usedValue)], 非法,应该为字符型(In 用户日志(UserLog))!(clsUserLogBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserLogEN.updDate) == false &&
    undefined !== pobjUserLogEN.updDate &&
    tzDataType.isString(pobjUserLogEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjUserLogEN.updDate)], 非法,应该为字符型(In 用户日志(UserLog))!(clsUserLogBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserLogEN.memo) == false &&
    undefined !== pobjUserLogEN.memo &&
    tzDataType.isString(pobjUserLogEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[说明(memo)]的值:[$(pobjUserLogEN.memo)], 非法,应该为字符型(In 用户日志(UserLog))!(clsUserLogBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjUserLogEN.isDeleted &&
    undefined !== pobjUserLogEN.isDeleted &&
    tzDataType.isBoolean(pobjUserLogEN.isDeleted) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否删除(isDeleted)]的值:[$(pobjUserLogEN.isDeleted)], 非法,应该为布尔型(In 用户日志(UserLog))!(clsUserLogBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjUserLogEN.orderNum &&
    undefined !== pobjUserLogEN.orderNum &&
    tzDataType.isNumber(pobjUserLogEN.orderNum) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[序号(orderNum)]的值:[$(pobjUserLogEN.orderNum)], 非法,应该为数值型(In 用户日志(UserLog))!(clsUserLogBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserLogEN.deletedDate) == false &&
    undefined !== pobjUserLogEN.deletedDate &&
    tzDataType.isString(pobjUserLogEN.deletedDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[删除日期(deletedDate)]的值:[$(pobjUserLogEN.deletedDate)], 非法,应该为字符型(In 用户日志(UserLog))!(clsUserLogBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function UserLog_CheckProperty4Update(pobjUserLogEN: clsUserLogEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (IsNullOrEmpty(pobjUserLogEN.userId) == false && GetStrLen(pobjUserLogEN.userId) > 18) {
    throw new Error(
      '(errid:Watl000416)字段[用户Id(userId)]的长度不能超过18(In 用户日志(UserLog))!值:$(pobjUserLogEN.userId)(clsUserLogBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjUserLogEN.loginTime) == false && GetStrLen(pobjUserLogEN.loginTime) > 6) {
    throw new Error(
      '(errid:Watl000416)字段[登陆时间(loginTime)]的长度不能超过6(In 用户日志(UserLog))!值:$(pobjUserLogEN.loginTime)(clsUserLogBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjUserLogEN.loginDate) == false && GetStrLen(pobjUserLogEN.loginDate) > 8) {
    throw new Error(
      '(errid:Watl000416)字段[登陆日期(loginDate)]的长度不能超过8(In 用户日志(UserLog))!值:$(pobjUserLogEN.loginDate)(clsUserLogBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjUserLogEN.userIp) == false && GetStrLen(pobjUserLogEN.userIp) > 40) {
    throw new Error(
      '(errid:Watl000416)字段[用户IP(userIp)]的长度不能超过40(In 用户日志(UserLog))!值:$(pobjUserLogEN.userIp)(clsUserLogBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserLogEN.objectTable) == false &&
    GetStrLen(pobjUserLogEN.objectTable) > 50
  ) {
    throw new Error(
      '(errid:Watl000416)字段[对象表(objectTable)]的长度不能超过50(In 用户日志(UserLog))!值:$(pobjUserLogEN.objectTable)(clsUserLogBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjUserLogEN.usedValue) == false && GetStrLen(pobjUserLogEN.usedValue) > 50) {
    throw new Error(
      '(errid:Watl000416)字段[使用值(usedValue)]的长度不能超过50(In 用户日志(UserLog))!值:$(pobjUserLogEN.usedValue)(clsUserLogBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjUserLogEN.updDate) == false && GetStrLen(pobjUserLogEN.updDate) > 20) {
    throw new Error(
      '(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 用户日志(UserLog))!值:$(pobjUserLogEN.updDate)(clsUserLogBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjUserLogEN.memo) == false && GetStrLen(pobjUserLogEN.memo) > 1000) {
    throw new Error(
      '(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In 用户日志(UserLog))!值:$(pobjUserLogEN.memo)(clsUserLogBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserLogEN.deletedDate) == false &&
    GetStrLen(pobjUserLogEN.deletedDate) > 50
  ) {
    throw new Error(
      '(errid:Watl000416)字段[删除日期(deletedDate)]的长度不能超过50(In 用户日志(UserLog))!值:$(pobjUserLogEN.deletedDate)(clsUserLogBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjUserLogEN.mId &&
    undefined !== pobjUserLogEN.mId &&
    tzDataType.isNumber(pobjUserLogEN.mId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[mId(mId)]的值:[$(pobjUserLogEN.mId)], 非法,应该为数值型(In 用户日志(UserLog))!(clsUserLogBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserLogEN.userId) == false &&
    undefined !== pobjUserLogEN.userId &&
    tzDataType.isString(pobjUserLogEN.userId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[用户Id(userId)]的值:[$(pobjUserLogEN.userId)], 非法,应该为字符型(In 用户日志(UserLog))!(clsUserLogBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserLogEN.loginTime) == false &&
    undefined !== pobjUserLogEN.loginTime &&
    tzDataType.isString(pobjUserLogEN.loginTime) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[登陆时间(loginTime)]的值:[$(pobjUserLogEN.loginTime)], 非法,应该为字符型(In 用户日志(UserLog))!(clsUserLogBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserLogEN.loginDate) == false &&
    undefined !== pobjUserLogEN.loginDate &&
    tzDataType.isString(pobjUserLogEN.loginDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[登陆日期(loginDate)]的值:[$(pobjUserLogEN.loginDate)], 非法,应该为字符型(In 用户日志(UserLog))!(clsUserLogBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserLogEN.userIp) == false &&
    undefined !== pobjUserLogEN.userIp &&
    tzDataType.isString(pobjUserLogEN.userIp) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[用户IP(userIp)]的值:[$(pobjUserLogEN.userIp)], 非法,应该为字符型(In 用户日志(UserLog))!(clsUserLogBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserLogEN.objectTable) == false &&
    undefined !== pobjUserLogEN.objectTable &&
    tzDataType.isString(pobjUserLogEN.objectTable) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[对象表(objectTable)]的值:[$(pobjUserLogEN.objectTable)], 非法,应该为字符型(In 用户日志(UserLog))!(clsUserLogBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserLogEN.usedValue) == false &&
    undefined !== pobjUserLogEN.usedValue &&
    tzDataType.isString(pobjUserLogEN.usedValue) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[使用值(usedValue)]的值:[$(pobjUserLogEN.usedValue)], 非法,应该为字符型(In 用户日志(UserLog))!(clsUserLogBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserLogEN.updDate) == false &&
    undefined !== pobjUserLogEN.updDate &&
    tzDataType.isString(pobjUserLogEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjUserLogEN.updDate)], 非法,应该为字符型(In 用户日志(UserLog))!(clsUserLogBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserLogEN.memo) == false &&
    undefined !== pobjUserLogEN.memo &&
    tzDataType.isString(pobjUserLogEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[说明(memo)]的值:[$(pobjUserLogEN.memo)], 非法,应该为字符型(In 用户日志(UserLog))!(clsUserLogBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjUserLogEN.isDeleted &&
    undefined !== pobjUserLogEN.isDeleted &&
    tzDataType.isBoolean(pobjUserLogEN.isDeleted) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否删除(isDeleted)]的值:[$(pobjUserLogEN.isDeleted)], 非法,应该为布尔型(In 用户日志(UserLog))!(clsUserLogBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjUserLogEN.orderNum &&
    undefined !== pobjUserLogEN.orderNum &&
    tzDataType.isNumber(pobjUserLogEN.orderNum) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[序号(orderNum)]的值:[$(pobjUserLogEN.orderNum)], 非法,应该为数值型(In 用户日志(UserLog))!(clsUserLogBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserLogEN.deletedDate) == false &&
    undefined !== pobjUserLogEN.deletedDate &&
    tzDataType.isString(pobjUserLogEN.deletedDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[删除日期(deletedDate)]的值:[$(pobjUserLogEN.deletedDate)], 非法,应该为字符型(In 用户日志(UserLog))!(clsUserLogBL:CheckProperty4Update)',
    );
  }
  //检查主键是否为Null或者空!
  if (
    null === pobjUserLogEN.mId ||
    (pobjUserLogEN.mId != null && pobjUserLogEN.mId.toString() === '')
  ) {
    throw new Error(
      '(errid:Watl000064)字段[mId]不能为空(In 用户日志)!(clsUserLogBL:CheckProperty4Update)',
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
export function UserLog_GetJSONStrByObj(pobjUserLogEN: clsUserLogEN): string {
  pobjUserLogEN.sfUpdFldSetStr = pobjUserLogEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjUserLogEN);
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
export function UserLog_GetObjLstByJSONStr(strJSON: string): Array<clsUserLogEN> {
  let arrUserLogObjLst = new Array<clsUserLogEN>();
  if (strJSON === '') {
    return arrUserLogObjLst;
  }
  try {
    arrUserLogObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrUserLogObjLst;
  }
  return arrUserLogObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrUserLogObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function UserLog_GetObjLstByJSONObjLst(
  arrUserLogObjLstS: Array<clsUserLogEN>,
): Array<clsUserLogEN> {
  const arrUserLogObjLst = new Array<clsUserLogEN>();
  for (const objInFor of arrUserLogObjLstS) {
    const obj1 = UserLog_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrUserLogObjLst.push(obj1);
  }
  return arrUserLogObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function UserLog_GetObjByJSONStr(strJSON: string): clsUserLogEN {
  let pobjUserLogEN = new clsUserLogEN();
  if (strJSON === '') {
    return pobjUserLogEN;
  }
  try {
    pobjUserLogEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjUserLogEN;
  }
  return pobjUserLogEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function UserLog_GetCombineCondition(objUserLogCond: clsUserLogEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(objUserLogCond.dicFldComparisonOp, clsUserLogEN.con_mId) ==
    true
  ) {
    const strComparisonOpmId: string = objUserLogCond.dicFldComparisonOp[clsUserLogEN.con_mId];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsUserLogEN.con_mId,
      objUserLogCond.mId,
      strComparisonOpmId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objUserLogCond.dicFldComparisonOp,
      clsUserLogEN.con_UserId,
    ) == true
  ) {
    const strComparisonOpUserId: string =
      objUserLogCond.dicFldComparisonOp[clsUserLogEN.con_UserId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsUserLogEN.con_UserId,
      objUserLogCond.userId,
      strComparisonOpUserId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objUserLogCond.dicFldComparisonOp,
      clsUserLogEN.con_LoginTime,
    ) == true
  ) {
    const strComparisonOpLoginTime: string =
      objUserLogCond.dicFldComparisonOp[clsUserLogEN.con_LoginTime];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsUserLogEN.con_LoginTime,
      objUserLogCond.loginTime,
      strComparisonOpLoginTime,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objUserLogCond.dicFldComparisonOp,
      clsUserLogEN.con_LoginDate,
    ) == true
  ) {
    const strComparisonOpLoginDate: string =
      objUserLogCond.dicFldComparisonOp[clsUserLogEN.con_LoginDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsUserLogEN.con_LoginDate,
      objUserLogCond.loginDate,
      strComparisonOpLoginDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objUserLogCond.dicFldComparisonOp,
      clsUserLogEN.con_UserIp,
    ) == true
  ) {
    const strComparisonOpUserIp: string =
      objUserLogCond.dicFldComparisonOp[clsUserLogEN.con_UserIp];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsUserLogEN.con_UserIp,
      objUserLogCond.userIp,
      strComparisonOpUserIp,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objUserLogCond.dicFldComparisonOp,
      clsUserLogEN.con_ObjectTable,
    ) == true
  ) {
    const strComparisonOpObjectTable: string =
      objUserLogCond.dicFldComparisonOp[clsUserLogEN.con_ObjectTable];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsUserLogEN.con_ObjectTable,
      objUserLogCond.objectTable,
      strComparisonOpObjectTable,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objUserLogCond.dicFldComparisonOp,
      clsUserLogEN.con_UsedValue,
    ) == true
  ) {
    const strComparisonOpUsedValue: string =
      objUserLogCond.dicFldComparisonOp[clsUserLogEN.con_UsedValue];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsUserLogEN.con_UsedValue,
      objUserLogCond.usedValue,
      strComparisonOpUsedValue,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objUserLogCond.dicFldComparisonOp,
      clsUserLogEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objUserLogCond.dicFldComparisonOp[clsUserLogEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsUserLogEN.con_UpdDate,
      objUserLogCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objUserLogCond.dicFldComparisonOp,
      clsUserLogEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string = objUserLogCond.dicFldComparisonOp[clsUserLogEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsUserLogEN.con_Memo,
      objUserLogCond.memo,
      strComparisonOpMemo,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objUserLogCond.dicFldComparisonOp,
      clsUserLogEN.con_IsDeleted,
    ) == true
  ) {
    if (objUserLogCond.isDeleted == true) {
      strWhereCond += Format(" And {0} = '1'", clsUserLogEN.con_IsDeleted);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsUserLogEN.con_IsDeleted);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objUserLogCond.dicFldComparisonOp,
      clsUserLogEN.con_OrderNum,
    ) == true
  ) {
    const strComparisonOpOrderNum: string =
      objUserLogCond.dicFldComparisonOp[clsUserLogEN.con_OrderNum];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsUserLogEN.con_OrderNum,
      objUserLogCond.orderNum,
      strComparisonOpOrderNum,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objUserLogCond.dicFldComparisonOp,
      clsUserLogEN.con_DeletedDate,
    ) == true
  ) {
    const strComparisonOpDeletedDate: string =
      objUserLogCond.dicFldComparisonOp[clsUserLogEN.con_DeletedDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsUserLogEN.con_DeletedDate,
      objUserLogCond.deletedDate,
      strComparisonOpDeletedDate,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--UserLog(用户日志),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strUserId: 用户Id(要求唯一的字段)
 * @param strObjectTable: 对象表(要求唯一的字段)
 * @param strLoginDate: 登陆日期(要求唯一的字段)
 * @param strLoginTime: 登陆时间(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function UserLog_GetUniCondStr(objUserLogEN: clsUserLogEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and UserId = '{0}'", objUserLogEN.userId);
  strWhereCond += Format(" and ObjectTable = '{0}'", objUserLogEN.objectTable);
  strWhereCond += Format(" and LoginDate = '{0}'", objUserLogEN.loginDate);
  strWhereCond += Format(" and LoginTime = '{0}'", objUserLogEN.loginTime);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--UserLog(用户日志),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strUserId: 用户Id(要求唯一的字段)
 * @param strObjectTable: 对象表(要求唯一的字段)
 * @param strLoginDate: 登陆日期(要求唯一的字段)
 * @param strLoginTime: 登陆时间(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function UserLog_GetUniCondStr4Update(objUserLogEN: clsUserLogEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and mId <> '{0}'", objUserLogEN.mId);
  strWhereCond += Format(" and UserId = '{0}'", objUserLogEN.userId);
  strWhereCond += Format(" and ObjectTable = '{0}'", objUserLogEN.objectTable);
  strWhereCond += Format(" and LoginDate = '{0}'", objUserLogEN.loginDate);
  strWhereCond += Format(" and LoginTime = '{0}'", objUserLogEN.loginTime);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objUserLogENS:源对象
 * @param objUserLogENT:目标对象
 */
export function UserLog_GetObjFromJsonObj(objUserLogENS: clsUserLogEN): clsUserLogEN {
  const objUserLogENT: clsUserLogEN = new clsUserLogEN();
  ObjectAssign(objUserLogENT, objUserLogENS);
  return objUserLogENT;
}
