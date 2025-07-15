/**
 * 类名:clsSysLogWApi
 * 表名:SysLog(00050129)
 * 版本:2023.10.12.1(服务器:WIN-SRV103-116)
 * 日期:2023/10/12 14:38:57
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
 * 系统日志(SysLog)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2023年10月12日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { GetStrLen, tzDataType, Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { clsSysLogEN } from '@/ts/L0Entity/LogManage/clsSysLogEN';
import { GetExceptionStr, myShowErrorMsg, ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const sysLog_Controller = 'SysLogApi';
export const sysLog_ConstructorName = 'sysLog';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngmId:关键字
 * @returns 对象
 **/
export async function SysLog_GetObjBymIdAsync(lngmId: number): Promise<clsSysLogEN | null> {
  const strThisFuncName = 'GetObjBymIdAsync';

  if (lngmId == 0) {
    const strMsg = Format('参数:[lngmId]不能为空!(In clsSysLogWApi.GetObjBymIdAsync)');
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjBymId';
  const strUrl = GetWebApiUrl(sysLog_Controller, strAction);

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
      const objSysLog = SysLog_GetObjFromJsonObj(returnObj);
      return objSysLog;
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
        sysLog_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sysLog_ConstructorName,
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
export function SysLog_SortFunDefa(a: clsSysLogEN, b: clsSysLogEN): number {
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
export function SysLog_SortFunDefa2Fld(a: clsSysLogEN, b: clsSysLogEN): number {
  if (a.loginTime == b.loginTime) return a.loginDate.localeCompare(b.loginDate);
  else return a.loginTime.localeCompare(b.loginTime);
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
export function SysLog_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsSysLogEN.con_mId:
        return (a: clsSysLogEN, b: clsSysLogEN) => {
          return a.mId - b.mId;
        };
      case clsSysLogEN.con_LoginTime:
        return (a: clsSysLogEN, b: clsSysLogEN) => {
          if (a.loginTime == null) return -1;
          if (b.loginTime == null) return 1;
          return a.loginTime.localeCompare(b.loginTime);
        };
      case clsSysLogEN.con_LoginDate:
        return (a: clsSysLogEN, b: clsSysLogEN) => {
          if (a.loginDate == null) return -1;
          if (b.loginDate == null) return 1;
          return a.loginDate.localeCompare(b.loginDate);
        };
      case clsSysLogEN.con_TableName:
        return (a: clsSysLogEN, b: clsSysLogEN) => {
          if (a.tableName == null) return -1;
          if (b.tableName == null) return 1;
          return a.tableName.localeCompare(b.tableName);
        };
      case clsSysLogEN.con_TableKey:
        return (a: clsSysLogEN, b: clsSysLogEN) => {
          if (a.tableKey == null) return -1;
          if (b.tableKey == null) return 1;
          return a.tableKey.localeCompare(b.tableKey);
        };
      case clsSysLogEN.con_UserIp:
        return (a: clsSysLogEN, b: clsSysLogEN) => {
          if (a.userIp == null) return -1;
          if (b.userIp == null) return 1;
          return a.userIp.localeCompare(b.userIp);
        };
      case clsSysLogEN.con_OpTypeId:
        return (a: clsSysLogEN, b: clsSysLogEN) => {
          return a.opTypeId.localeCompare(b.opTypeId);
        };
      case clsSysLogEN.con_OpContent:
        return (a: clsSysLogEN, b: clsSysLogEN) => {
          if (a.opContent == null) return -1;
          if (b.opContent == null) return 1;
          return a.opContent.localeCompare(b.opContent);
        };
      case clsSysLogEN.con_OpDate:
        return (a: clsSysLogEN, b: clsSysLogEN) => {
          if (a.opDate == null) return -1;
          if (b.opDate == null) return 1;
          return a.opDate.localeCompare(b.opDate);
        };
      case clsSysLogEN.con_OpTime:
        return (a: clsSysLogEN, b: clsSysLogEN) => {
          if (a.opTime == null) return -1;
          if (b.opTime == null) return 1;
          return a.opTime.localeCompare(b.opTime);
        };
      case clsSysLogEN.con_PrjId:
        return (a: clsSysLogEN, b: clsSysLogEN) => {
          if (a.prjId == null) return -1;
          if (b.prjId == null) return 1;
          return a.prjId.localeCompare(b.prjId);
        };
      case clsSysLogEN.con_UserId:
        return (a: clsSysLogEN, b: clsSysLogEN) => {
          if (a.userId == null) return -1;
          if (b.userId == null) return 1;
          return a.userId.localeCompare(b.userId);
        };
      case clsSysLogEN.con_Memo:
        return (a: clsSysLogEN, b: clsSysLogEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[SysLog]中不存在!(in ${sysLog_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsSysLogEN.con_mId:
        return (a: clsSysLogEN, b: clsSysLogEN) => {
          return b.mId - a.mId;
        };
      case clsSysLogEN.con_LoginTime:
        return (a: clsSysLogEN, b: clsSysLogEN) => {
          if (b.loginTime == null) return -1;
          if (a.loginTime == null) return 1;
          return b.loginTime.localeCompare(a.loginTime);
        };
      case clsSysLogEN.con_LoginDate:
        return (a: clsSysLogEN, b: clsSysLogEN) => {
          if (b.loginDate == null) return -1;
          if (a.loginDate == null) return 1;
          return b.loginDate.localeCompare(a.loginDate);
        };
      case clsSysLogEN.con_TableName:
        return (a: clsSysLogEN, b: clsSysLogEN) => {
          if (b.tableName == null) return -1;
          if (a.tableName == null) return 1;
          return b.tableName.localeCompare(a.tableName);
        };
      case clsSysLogEN.con_TableKey:
        return (a: clsSysLogEN, b: clsSysLogEN) => {
          if (b.tableKey == null) return -1;
          if (a.tableKey == null) return 1;
          return b.tableKey.localeCompare(a.tableKey);
        };
      case clsSysLogEN.con_UserIp:
        return (a: clsSysLogEN, b: clsSysLogEN) => {
          if (b.userIp == null) return -1;
          if (a.userIp == null) return 1;
          return b.userIp.localeCompare(a.userIp);
        };
      case clsSysLogEN.con_OpTypeId:
        return (a: clsSysLogEN, b: clsSysLogEN) => {
          return b.opTypeId.localeCompare(a.opTypeId);
        };
      case clsSysLogEN.con_OpContent:
        return (a: clsSysLogEN, b: clsSysLogEN) => {
          if (b.opContent == null) return -1;
          if (a.opContent == null) return 1;
          return b.opContent.localeCompare(a.opContent);
        };
      case clsSysLogEN.con_OpDate:
        return (a: clsSysLogEN, b: clsSysLogEN) => {
          if (b.opDate == null) return -1;
          if (a.opDate == null) return 1;
          return b.opDate.localeCompare(a.opDate);
        };
      case clsSysLogEN.con_OpTime:
        return (a: clsSysLogEN, b: clsSysLogEN) => {
          if (b.opTime == null) return -1;
          if (a.opTime == null) return 1;
          return b.opTime.localeCompare(a.opTime);
        };
      case clsSysLogEN.con_PrjId:
        return (a: clsSysLogEN, b: clsSysLogEN) => {
          if (b.prjId == null) return -1;
          if (a.prjId == null) return 1;
          return b.prjId.localeCompare(a.prjId);
        };
      case clsSysLogEN.con_UserId:
        return (a: clsSysLogEN, b: clsSysLogEN) => {
          if (b.userId == null) return -1;
          if (a.userId == null) return 1;
          return b.userId.localeCompare(a.userId);
        };
      case clsSysLogEN.con_Memo:
        return (a: clsSysLogEN, b: clsSysLogEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[SysLog]中不存在!(in ${sysLog_ConstructorName}.${strThisFuncName})`;
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
export async function SysLog_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsSysLogEN.con_mId:
      return (obj: clsSysLogEN) => {
        return obj.mId === value;
      };
    case clsSysLogEN.con_LoginTime:
      return (obj: clsSysLogEN) => {
        return obj.loginTime === value;
      };
    case clsSysLogEN.con_LoginDate:
      return (obj: clsSysLogEN) => {
        return obj.loginDate === value;
      };
    case clsSysLogEN.con_TableName:
      return (obj: clsSysLogEN) => {
        return obj.tableName === value;
      };
    case clsSysLogEN.con_TableKey:
      return (obj: clsSysLogEN) => {
        return obj.tableKey === value;
      };
    case clsSysLogEN.con_UserIp:
      return (obj: clsSysLogEN) => {
        return obj.userIp === value;
      };
    case clsSysLogEN.con_OpTypeId:
      return (obj: clsSysLogEN) => {
        return obj.opTypeId === value;
      };
    case clsSysLogEN.con_OpContent:
      return (obj: clsSysLogEN) => {
        return obj.opContent === value;
      };
    case clsSysLogEN.con_OpDate:
      return (obj: clsSysLogEN) => {
        return obj.opDate === value;
      };
    case clsSysLogEN.con_OpTime:
      return (obj: clsSysLogEN) => {
        return obj.opTime === value;
      };
    case clsSysLogEN.con_PrjId:
      return (obj: clsSysLogEN) => {
        return obj.prjId === value;
      };
    case clsSysLogEN.con_UserId:
      return (obj: clsSysLogEN) => {
        return obj.userId === value;
      };
    case clsSysLogEN.con_Memo:
      return (obj: clsSysLogEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[SysLog]中不存在!(in ${sysLog_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}
//该表没有使用Cache,不需要生成[SysLog__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function SysLog_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(sysLog_Controller, strAction);

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
        sysLog_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sysLog_ConstructorName,
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
export async function SysLog_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(sysLog_Controller, strAction);

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
        sysLog_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sysLog_ConstructorName,
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
export async function SysLog_GetFirstObjAsync(strWhereCond: string): Promise<clsSysLogEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(sysLog_Controller, strAction);

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
      const objSysLog = SysLog_GetObjFromJsonObj(returnObj);
      return objSysLog;
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
        sysLog_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sysLog_ConstructorName,
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
export async function SysLog_GetObjLstAsync(strWhereCond: string): Promise<Array<clsSysLogEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(sysLog_Controller, strAction);

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
          sysLog_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = SysLog_GetObjLstByJSONObjLst(returnObjLst);
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
        sysLog_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sysLog_ConstructorName,
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
export async function SysLog_GetObjLstBymIdLstAsync(
  arrmId: Array<string>,
): Promise<Array<clsSysLogEN>> {
  const strThisFuncName = 'GetObjLstBymIdLstAsync';
  const strAction = 'GetObjLstBymIdLst';
  const strUrl = GetWebApiUrl(sysLog_Controller, strAction);

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
          sysLog_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = SysLog_GetObjLstByJSONObjLst(returnObjLst);
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
        sysLog_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sysLog_ConstructorName,
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
export async function SysLog_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsSysLogEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(sysLog_Controller, strAction);

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
          sysLog_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = SysLog_GetObjLstByJSONObjLst(returnObjLst);
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
        sysLog_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sysLog_ConstructorName,
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
export async function SysLog_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsSysLogEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(sysLog_Controller, strAction);

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
          sysLog_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = SysLog_GetObjLstByJSONObjLst(returnObjLst);
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
        sysLog_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sysLog_ConstructorName,
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
export async function SysLog_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsSysLogEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsSysLogEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(sysLog_Controller, strAction);

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
          sysLog_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = SysLog_GetObjLstByJSONObjLst(returnObjLst);
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
        sysLog_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sysLog_ConstructorName,
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
export async function SysLog_DelRecordAsync(lngmId: number): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(sysLog_Controller, strAction);
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
        sysLog_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sysLog_ConstructorName,
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
export async function SysLog_DelSysLogsAsync(arrmId: Array<string>): Promise<number> {
  const strThisFuncName = 'DelSysLogsAsync';
  const strAction = 'DelSysLogs';
  const strUrl = GetWebApiUrl(sysLog_Controller, strAction);

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
        sysLog_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sysLog_ConstructorName,
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
export async function SysLog_DelSysLogsByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'DelSysLogsByCondAsync';
  const strAction = 'DelSysLogsByCond';
  const strUrl = GetWebApiUrl(sysLog_Controller, strAction);

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
        sysLog_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sysLog_ConstructorName,
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
 * @param objSysLogEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function SysLog_AddNewRecordAsync(objSysLogEN: clsSysLogEN): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objSysLogEN);
  const strUrl = GetWebApiUrl(sysLog_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objSysLogEN, config);
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
        sysLog_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sysLog_ConstructorName,
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
 * @param objSysLogEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function SysLog_AddNewRecordWithReturnKeyAsync(
  objSysLogEN: clsSysLogEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(sysLog_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objSysLogEN, config);
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
        sysLog_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sysLog_ConstructorName,
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
 * @param objSysLogEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function SysLog_UpdateRecordAsync(objSysLogEN: clsSysLogEN): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objSysLogEN.sfUpdFldSetStr === undefined ||
    objSysLogEN.sfUpdFldSetStr === null ||
    objSysLogEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format('对象(关键字: {0})的【修改字段集】为空,不能修改!', objSysLogEN.mId);
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(sysLog_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objSysLogEN, config);
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
        sysLog_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sysLog_ConstructorName,
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
 * @param objSysLogEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function SysLog_UpdateWithConditionAsync(
  objSysLogEN: clsSysLogEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objSysLogEN.sfUpdFldSetStr === undefined ||
    objSysLogEN.sfUpdFldSetStr === null ||
    objSysLogEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format('对象(关键字: {0})的【修改字段集】为空,不能修改!', objSysLogEN.mId);
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(sysLog_Controller, strAction);
  objSysLogEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objSysLogEN, config);
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
        sysLog_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sysLog_ConstructorName,
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
export async function SysLog_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(sysLog_Controller, strAction);

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
        sysLog_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sysLog_ConstructorName,
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
export async function SysLog_IsExistAsync(lngmId: number): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(sysLog_Controller, strAction);

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
        sysLog_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sysLog_ConstructorName,
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
export async function SysLog_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(sysLog_Controller, strAction);

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
        sysLog_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sysLog_ConstructorName,
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
export async function SysLog_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(sysLog_Controller, strAction);

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
        sysLog_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sysLog_ConstructorName,
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
export function SysLog_GetWebApiUrl(strController: string, strAction: string): string {
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
export function SysLog_CheckPropertyNew(pobjSysLogEN: clsSysLogEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjSysLogEN.opTypeId) === true) {
    throw new Error(
      '(errid:Watl000411)字段[操作类型Id]不能为空(In 系统日志)!(clsSysLogBL:CheckPropertyNew0)',
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (IsNullOrEmpty(pobjSysLogEN.loginTime) == false && GetStrLen(pobjSysLogEN.loginTime) > 6) {
    throw new Error(
      '(errid:Watl000413)字段[登陆时间(loginTime)]的长度不能超过6(In 系统日志(SysLog))!值:$(pobjSysLogEN.loginTime)(clsSysLogBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjSysLogEN.loginDate) == false && GetStrLen(pobjSysLogEN.loginDate) > 8) {
    throw new Error(
      '(errid:Watl000413)字段[登陆日期(loginDate)]的长度不能超过8(In 系统日志(SysLog))!值:$(pobjSysLogEN.loginDate)(clsSysLogBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjSysLogEN.tableName) == false && GetStrLen(pobjSysLogEN.tableName) > 100) {
    throw new Error(
      '(errid:Watl000413)字段[表名(tableName)]的长度不能超过100(In 系统日志(SysLog))!值:$(pobjSysLogEN.tableName)(clsSysLogBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjSysLogEN.tableKey) == false && GetStrLen(pobjSysLogEN.tableKey) > 100) {
    throw new Error(
      '(errid:Watl000413)字段[数据表关键字值(tableKey)]的长度不能超过100(In 系统日志(SysLog))!值:$(pobjSysLogEN.tableKey)(clsSysLogBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjSysLogEN.userIp) == false && GetStrLen(pobjSysLogEN.userIp) > 40) {
    throw new Error(
      '(errid:Watl000413)字段[用户IP(userIp)]的长度不能超过40(In 系统日志(SysLog))!值:$(pobjSysLogEN.userIp)(clsSysLogBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjSysLogEN.opTypeId) == false && GetStrLen(pobjSysLogEN.opTypeId) > 4) {
    throw new Error(
      '(errid:Watl000413)字段[操作类型Id(opTypeId)]的长度不能超过4(In 系统日志(SysLog))!值:$(pobjSysLogEN.opTypeId)(clsSysLogBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjSysLogEN.opContent) == false && GetStrLen(pobjSysLogEN.opContent) > 1000) {
    throw new Error(
      '(errid:Watl000413)字段[操作内容(opContent)]的长度不能超过1000(In 系统日志(SysLog))!值:$(pobjSysLogEN.opContent)(clsSysLogBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjSysLogEN.opDate) == false && GetStrLen(pobjSysLogEN.opDate) > 8) {
    throw new Error(
      '(errid:Watl000413)字段[操作日期(opDate)]的长度不能超过8(In 系统日志(SysLog))!值:$(pobjSysLogEN.opDate)(clsSysLogBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjSysLogEN.opTime) == false && GetStrLen(pobjSysLogEN.opTime) > 6) {
    throw new Error(
      '(errid:Watl000413)字段[操作时间(opTime)]的长度不能超过6(In 系统日志(SysLog))!值:$(pobjSysLogEN.opTime)(clsSysLogBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjSysLogEN.prjId) == false && GetStrLen(pobjSysLogEN.prjId) > 4) {
    throw new Error(
      '(errid:Watl000413)字段[工程ID(prjId)]的长度不能超过4(In 系统日志(SysLog))!值:$(pobjSysLogEN.prjId)(clsSysLogBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjSysLogEN.userId) == false && GetStrLen(pobjSysLogEN.userId) > 18) {
    throw new Error(
      '(errid:Watl000413)字段[用户Id(userId)]的长度不能超过18(In 系统日志(SysLog))!值:$(pobjSysLogEN.userId)(clsSysLogBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjSysLogEN.memo) == false && GetStrLen(pobjSysLogEN.memo) > 1000) {
    throw new Error(
      '(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In 系统日志(SysLog))!值:$(pobjSysLogEN.memo)(clsSysLogBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjSysLogEN.mId &&
    undefined !== pobjSysLogEN.mId &&
    tzDataType.isNumber(pobjSysLogEN.mId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[mId(mId)]的值:[$(pobjSysLogEN.mId)], 非法,应该为数值型(In 系统日志(SysLog))!(clsSysLogBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSysLogEN.loginTime) == false &&
    undefined !== pobjSysLogEN.loginTime &&
    tzDataType.isString(pobjSysLogEN.loginTime) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[登陆时间(loginTime)]的值:[$(pobjSysLogEN.loginTime)], 非法,应该为字符型(In 系统日志(SysLog))!(clsSysLogBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSysLogEN.loginDate) == false &&
    undefined !== pobjSysLogEN.loginDate &&
    tzDataType.isString(pobjSysLogEN.loginDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[登陆日期(loginDate)]的值:[$(pobjSysLogEN.loginDate)], 非法,应该为字符型(In 系统日志(SysLog))!(clsSysLogBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSysLogEN.tableName) == false &&
    undefined !== pobjSysLogEN.tableName &&
    tzDataType.isString(pobjSysLogEN.tableName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[表名(tableName)]的值:[$(pobjSysLogEN.tableName)], 非法,应该为字符型(In 系统日志(SysLog))!(clsSysLogBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSysLogEN.tableKey) == false &&
    undefined !== pobjSysLogEN.tableKey &&
    tzDataType.isString(pobjSysLogEN.tableKey) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[数据表关键字值(tableKey)]的值:[$(pobjSysLogEN.tableKey)], 非法,应该为字符型(In 系统日志(SysLog))!(clsSysLogBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSysLogEN.userIp) == false &&
    undefined !== pobjSysLogEN.userIp &&
    tzDataType.isString(pobjSysLogEN.userIp) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[用户IP(userIp)]的值:[$(pobjSysLogEN.userIp)], 非法,应该为字符型(In 系统日志(SysLog))!(clsSysLogBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSysLogEN.opTypeId) == false &&
    undefined !== pobjSysLogEN.opTypeId &&
    tzDataType.isString(pobjSysLogEN.opTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[操作类型Id(opTypeId)]的值:[$(pobjSysLogEN.opTypeId)], 非法,应该为字符型(In 系统日志(SysLog))!(clsSysLogBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSysLogEN.opContent) == false &&
    undefined !== pobjSysLogEN.opContent &&
    tzDataType.isString(pobjSysLogEN.opContent) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[操作内容(opContent)]的值:[$(pobjSysLogEN.opContent)], 非法,应该为字符型(In 系统日志(SysLog))!(clsSysLogBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSysLogEN.opDate) == false &&
    undefined !== pobjSysLogEN.opDate &&
    tzDataType.isString(pobjSysLogEN.opDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[操作日期(opDate)]的值:[$(pobjSysLogEN.opDate)], 非法,应该为字符型(In 系统日志(SysLog))!(clsSysLogBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSysLogEN.opTime) == false &&
    undefined !== pobjSysLogEN.opTime &&
    tzDataType.isString(pobjSysLogEN.opTime) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[操作时间(opTime)]的值:[$(pobjSysLogEN.opTime)], 非法,应该为字符型(In 系统日志(SysLog))!(clsSysLogBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSysLogEN.prjId) == false &&
    undefined !== pobjSysLogEN.prjId &&
    tzDataType.isString(pobjSysLogEN.prjId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[工程ID(prjId)]的值:[$(pobjSysLogEN.prjId)], 非法,应该为字符型(In 系统日志(SysLog))!(clsSysLogBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSysLogEN.userId) == false &&
    undefined !== pobjSysLogEN.userId &&
    tzDataType.isString(pobjSysLogEN.userId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[用户Id(userId)]的值:[$(pobjSysLogEN.userId)], 非法,应该为字符型(In 系统日志(SysLog))!(clsSysLogBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSysLogEN.memo) == false &&
    undefined !== pobjSysLogEN.memo &&
    tzDataType.isString(pobjSysLogEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[说明(memo)]的值:[$(pobjSysLogEN.memo)], 非法,应该为字符型(In 系统日志(SysLog))!(clsSysLogBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
  if (
    IsNullOrEmpty(pobjSysLogEN.opTypeId) == false &&
    pobjSysLogEN.opTypeId != '[nuull]' &&
    GetStrLen(pobjSysLogEN.opTypeId) != 4
  ) {
    throw '(errid:Watl000415)字段[操作类型Id]作为外键字段,长度应该为4(In 系统日志)!(clsSysLogBL:CheckPropertyNew)';
  }
  if (
    IsNullOrEmpty(pobjSysLogEN.prjId) == false &&
    pobjSysLogEN.prjId != '[nuull]' &&
    GetStrLen(pobjSysLogEN.prjId) != 4
  ) {
    throw '(errid:Watl000415)字段[工程ID]作为外键字段,长度应该为4(In 系统日志)!(clsSysLogBL:CheckPropertyNew)';
  }

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function SysLog_CheckProperty4Update(pobjSysLogEN: clsSysLogEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (IsNullOrEmpty(pobjSysLogEN.loginTime) == false && GetStrLen(pobjSysLogEN.loginTime) > 6) {
    throw new Error(
      '(errid:Watl000416)字段[登陆时间(loginTime)]的长度不能超过6(In 系统日志(SysLog))!值:$(pobjSysLogEN.loginTime)(clsSysLogBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjSysLogEN.loginDate) == false && GetStrLen(pobjSysLogEN.loginDate) > 8) {
    throw new Error(
      '(errid:Watl000416)字段[登陆日期(loginDate)]的长度不能超过8(In 系统日志(SysLog))!值:$(pobjSysLogEN.loginDate)(clsSysLogBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjSysLogEN.tableName) == false && GetStrLen(pobjSysLogEN.tableName) > 100) {
    throw new Error(
      '(errid:Watl000416)字段[表名(tableName)]的长度不能超过100(In 系统日志(SysLog))!值:$(pobjSysLogEN.tableName)(clsSysLogBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjSysLogEN.tableKey) == false && GetStrLen(pobjSysLogEN.tableKey) > 100) {
    throw new Error(
      '(errid:Watl000416)字段[数据表关键字值(tableKey)]的长度不能超过100(In 系统日志(SysLog))!值:$(pobjSysLogEN.tableKey)(clsSysLogBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjSysLogEN.userIp) == false && GetStrLen(pobjSysLogEN.userIp) > 40) {
    throw new Error(
      '(errid:Watl000416)字段[用户IP(userIp)]的长度不能超过40(In 系统日志(SysLog))!值:$(pobjSysLogEN.userIp)(clsSysLogBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjSysLogEN.opTypeId) == false && GetStrLen(pobjSysLogEN.opTypeId) > 4) {
    throw new Error(
      '(errid:Watl000416)字段[操作类型Id(opTypeId)]的长度不能超过4(In 系统日志(SysLog))!值:$(pobjSysLogEN.opTypeId)(clsSysLogBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjSysLogEN.opContent) == false && GetStrLen(pobjSysLogEN.opContent) > 1000) {
    throw new Error(
      '(errid:Watl000416)字段[操作内容(opContent)]的长度不能超过1000(In 系统日志(SysLog))!值:$(pobjSysLogEN.opContent)(clsSysLogBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjSysLogEN.opDate) == false && GetStrLen(pobjSysLogEN.opDate) > 8) {
    throw new Error(
      '(errid:Watl000416)字段[操作日期(opDate)]的长度不能超过8(In 系统日志(SysLog))!值:$(pobjSysLogEN.opDate)(clsSysLogBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjSysLogEN.opTime) == false && GetStrLen(pobjSysLogEN.opTime) > 6) {
    throw new Error(
      '(errid:Watl000416)字段[操作时间(opTime)]的长度不能超过6(In 系统日志(SysLog))!值:$(pobjSysLogEN.opTime)(clsSysLogBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjSysLogEN.prjId) == false && GetStrLen(pobjSysLogEN.prjId) > 4) {
    throw new Error(
      '(errid:Watl000416)字段[工程ID(prjId)]的长度不能超过4(In 系统日志(SysLog))!值:$(pobjSysLogEN.prjId)(clsSysLogBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjSysLogEN.userId) == false && GetStrLen(pobjSysLogEN.userId) > 18) {
    throw new Error(
      '(errid:Watl000416)字段[用户Id(userId)]的长度不能超过18(In 系统日志(SysLog))!值:$(pobjSysLogEN.userId)(clsSysLogBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjSysLogEN.memo) == false && GetStrLen(pobjSysLogEN.memo) > 1000) {
    throw new Error(
      '(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In 系统日志(SysLog))!值:$(pobjSysLogEN.memo)(clsSysLogBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjSysLogEN.mId &&
    undefined !== pobjSysLogEN.mId &&
    tzDataType.isNumber(pobjSysLogEN.mId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[mId(mId)]的值:[$(pobjSysLogEN.mId)], 非法,应该为数值型(In 系统日志(SysLog))!(clsSysLogBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSysLogEN.loginTime) == false &&
    undefined !== pobjSysLogEN.loginTime &&
    tzDataType.isString(pobjSysLogEN.loginTime) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[登陆时间(loginTime)]的值:[$(pobjSysLogEN.loginTime)], 非法,应该为字符型(In 系统日志(SysLog))!(clsSysLogBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSysLogEN.loginDate) == false &&
    undefined !== pobjSysLogEN.loginDate &&
    tzDataType.isString(pobjSysLogEN.loginDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[登陆日期(loginDate)]的值:[$(pobjSysLogEN.loginDate)], 非法,应该为字符型(In 系统日志(SysLog))!(clsSysLogBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSysLogEN.tableName) == false &&
    undefined !== pobjSysLogEN.tableName &&
    tzDataType.isString(pobjSysLogEN.tableName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[表名(tableName)]的值:[$(pobjSysLogEN.tableName)], 非法,应该为字符型(In 系统日志(SysLog))!(clsSysLogBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSysLogEN.tableKey) == false &&
    undefined !== pobjSysLogEN.tableKey &&
    tzDataType.isString(pobjSysLogEN.tableKey) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[数据表关键字值(tableKey)]的值:[$(pobjSysLogEN.tableKey)], 非法,应该为字符型(In 系统日志(SysLog))!(clsSysLogBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSysLogEN.userIp) == false &&
    undefined !== pobjSysLogEN.userIp &&
    tzDataType.isString(pobjSysLogEN.userIp) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[用户IP(userIp)]的值:[$(pobjSysLogEN.userIp)], 非法,应该为字符型(In 系统日志(SysLog))!(clsSysLogBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSysLogEN.opTypeId) == false &&
    undefined !== pobjSysLogEN.opTypeId &&
    tzDataType.isString(pobjSysLogEN.opTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[操作类型Id(opTypeId)]的值:[$(pobjSysLogEN.opTypeId)], 非法,应该为字符型(In 系统日志(SysLog))!(clsSysLogBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSysLogEN.opContent) == false &&
    undefined !== pobjSysLogEN.opContent &&
    tzDataType.isString(pobjSysLogEN.opContent) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[操作内容(opContent)]的值:[$(pobjSysLogEN.opContent)], 非法,应该为字符型(In 系统日志(SysLog))!(clsSysLogBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSysLogEN.opDate) == false &&
    undefined !== pobjSysLogEN.opDate &&
    tzDataType.isString(pobjSysLogEN.opDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[操作日期(opDate)]的值:[$(pobjSysLogEN.opDate)], 非法,应该为字符型(In 系统日志(SysLog))!(clsSysLogBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSysLogEN.opTime) == false &&
    undefined !== pobjSysLogEN.opTime &&
    tzDataType.isString(pobjSysLogEN.opTime) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[操作时间(opTime)]的值:[$(pobjSysLogEN.opTime)], 非法,应该为字符型(In 系统日志(SysLog))!(clsSysLogBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSysLogEN.prjId) == false &&
    undefined !== pobjSysLogEN.prjId &&
    tzDataType.isString(pobjSysLogEN.prjId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[工程ID(prjId)]的值:[$(pobjSysLogEN.prjId)], 非法,应该为字符型(In 系统日志(SysLog))!(clsSysLogBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSysLogEN.userId) == false &&
    undefined !== pobjSysLogEN.userId &&
    tzDataType.isString(pobjSysLogEN.userId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[用户Id(userId)]的值:[$(pobjSysLogEN.userId)], 非法,应该为字符型(In 系统日志(SysLog))!(clsSysLogBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSysLogEN.memo) == false &&
    undefined !== pobjSysLogEN.memo &&
    tzDataType.isString(pobjSysLogEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[说明(memo)]的值:[$(pobjSysLogEN.memo)], 非法,应该为字符型(In 系统日志(SysLog))!(clsSysLogBL:CheckProperty4Update)',
    );
  }
  //检查主键是否为Null或者空!
  if (
    null === pobjSysLogEN.mId ||
    (pobjSysLogEN.mId != null && pobjSysLogEN.mId.toString() === '')
  ) {
    throw new Error(
      '(errid:Watl000064)字段[mId]不能为空(In 系统日志)!(clsSysLogBL:CheckProperty4Update)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
  if (
    IsNullOrEmpty(pobjSysLogEN.opTypeId) == false &&
    pobjSysLogEN.opTypeId != '[nuull]' &&
    GetStrLen(pobjSysLogEN.opTypeId) != 4
  ) {
    throw '(errid:Watl000418)字段[操作类型Id]作为外键字段,长度应该为4(In 系统日志)!(clsSysLogBL:CheckPropertyNew)';
  }
  if (
    IsNullOrEmpty(pobjSysLogEN.prjId) == false &&
    pobjSysLogEN.prjId != '[nuull]' &&
    GetStrLen(pobjSysLogEN.prjId) != 4
  ) {
    throw '(errid:Watl000418)字段[工程ID]作为外键字段,长度应该为4(In 系统日志)!(clsSysLogBL:CheckPropertyNew)';
  }
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function SysLog_GetJSONStrByObj(pobjSysLogEN: clsSysLogEN): string {
  pobjSysLogEN.sfUpdFldSetStr = pobjSysLogEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjSysLogEN);
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
export function SysLog_GetObjLstByJSONStr(strJSON: string): Array<clsSysLogEN> {
  let arrSysLogObjLst = new Array<clsSysLogEN>();
  if (strJSON === '') {
    return arrSysLogObjLst;
  }
  try {
    arrSysLogObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrSysLogObjLst;
  }
  return arrSysLogObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrSysLogObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function SysLog_GetObjLstByJSONObjLst(
  arrSysLogObjLstS: Array<clsSysLogEN>,
): Array<clsSysLogEN> {
  const arrSysLogObjLst = new Array<clsSysLogEN>();
  for (const objInFor of arrSysLogObjLstS) {
    const obj1 = SysLog_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrSysLogObjLst.push(obj1);
  }
  return arrSysLogObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function SysLog_GetObjByJSONStr(strJSON: string): clsSysLogEN {
  let pobjSysLogEN = new clsSysLogEN();
  if (strJSON === '') {
    return pobjSysLogEN;
  }
  try {
    pobjSysLogEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjSysLogEN;
  }
  return pobjSysLogEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function SysLog_GetCombineCondition(objSysLogCond: clsSysLogEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(objSysLogCond.dicFldComparisonOp, clsSysLogEN.con_mId) ==
    true
  ) {
    const strComparisonOpmId: string = objSysLogCond.dicFldComparisonOp[clsSysLogEN.con_mId];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsSysLogEN.con_mId,
      objSysLogCond.mId,
      strComparisonOpmId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSysLogCond.dicFldComparisonOp,
      clsSysLogEN.con_LoginTime,
    ) == true
  ) {
    const strComparisonOpLoginTime: string =
      objSysLogCond.dicFldComparisonOp[clsSysLogEN.con_LoginTime];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSysLogEN.con_LoginTime,
      objSysLogCond.loginTime,
      strComparisonOpLoginTime,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSysLogCond.dicFldComparisonOp,
      clsSysLogEN.con_LoginDate,
    ) == true
  ) {
    const strComparisonOpLoginDate: string =
      objSysLogCond.dicFldComparisonOp[clsSysLogEN.con_LoginDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSysLogEN.con_LoginDate,
      objSysLogCond.loginDate,
      strComparisonOpLoginDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSysLogCond.dicFldComparisonOp,
      clsSysLogEN.con_TableName,
    ) == true
  ) {
    const strComparisonOpTableName: string =
      objSysLogCond.dicFldComparisonOp[clsSysLogEN.con_TableName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSysLogEN.con_TableName,
      objSysLogCond.tableName,
      strComparisonOpTableName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSysLogCond.dicFldComparisonOp,
      clsSysLogEN.con_TableKey,
    ) == true
  ) {
    const strComparisonOpTableKey: string =
      objSysLogCond.dicFldComparisonOp[clsSysLogEN.con_TableKey];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSysLogEN.con_TableKey,
      objSysLogCond.tableKey,
      strComparisonOpTableKey,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSysLogCond.dicFldComparisonOp,
      clsSysLogEN.con_UserIp,
    ) == true
  ) {
    const strComparisonOpUserIp: string = objSysLogCond.dicFldComparisonOp[clsSysLogEN.con_UserIp];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSysLogEN.con_UserIp,
      objSysLogCond.userIp,
      strComparisonOpUserIp,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSysLogCond.dicFldComparisonOp,
      clsSysLogEN.con_OpTypeId,
    ) == true
  ) {
    const strComparisonOpOpTypeId: string =
      objSysLogCond.dicFldComparisonOp[clsSysLogEN.con_OpTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSysLogEN.con_OpTypeId,
      objSysLogCond.opTypeId,
      strComparisonOpOpTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSysLogCond.dicFldComparisonOp,
      clsSysLogEN.con_OpContent,
    ) == true
  ) {
    const strComparisonOpOpContent: string =
      objSysLogCond.dicFldComparisonOp[clsSysLogEN.con_OpContent];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSysLogEN.con_OpContent,
      objSysLogCond.opContent,
      strComparisonOpOpContent,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSysLogCond.dicFldComparisonOp,
      clsSysLogEN.con_OpDate,
    ) == true
  ) {
    const strComparisonOpOpDate: string = objSysLogCond.dicFldComparisonOp[clsSysLogEN.con_OpDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSysLogEN.con_OpDate,
      objSysLogCond.opDate,
      strComparisonOpOpDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSysLogCond.dicFldComparisonOp,
      clsSysLogEN.con_OpTime,
    ) == true
  ) {
    const strComparisonOpOpTime: string = objSysLogCond.dicFldComparisonOp[clsSysLogEN.con_OpTime];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSysLogEN.con_OpTime,
      objSysLogCond.opTime,
      strComparisonOpOpTime,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(objSysLogCond.dicFldComparisonOp, clsSysLogEN.con_PrjId) ==
    true
  ) {
    const strComparisonOpPrjId: string = objSysLogCond.dicFldComparisonOp[clsSysLogEN.con_PrjId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSysLogEN.con_PrjId,
      objSysLogCond.prjId,
      strComparisonOpPrjId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSysLogCond.dicFldComparisonOp,
      clsSysLogEN.con_UserId,
    ) == true
  ) {
    const strComparisonOpUserId: string = objSysLogCond.dicFldComparisonOp[clsSysLogEN.con_UserId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSysLogEN.con_UserId,
      objSysLogCond.userId,
      strComparisonOpUserId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(objSysLogCond.dicFldComparisonOp, clsSysLogEN.con_Memo) ==
    true
  ) {
    const strComparisonOpMemo: string = objSysLogCond.dicFldComparisonOp[clsSysLogEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSysLogEN.con_Memo,
      objSysLogCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--SysLog(系统日志),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strUserId: 用户Id(要求唯一的字段)
 * @param strOpDate: 操作日期(要求唯一的字段)
 * @param strOpTime: 操作时间(要求唯一的字段)
 * @param strPrjId: 工程ID(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function SysLog_GetUniCondStr(objSysLogEN: clsSysLogEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and UserId = '{0}'", objSysLogEN.userId);
  strWhereCond += Format(" and OpDate = '{0}'", objSysLogEN.opDate);
  strWhereCond += Format(" and OpTime = '{0}'", objSysLogEN.opTime);
  strWhereCond += Format(" and PrjId = '{0}'", objSysLogEN.prjId);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--SysLog(系统日志),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strUserId: 用户Id(要求唯一的字段)
 * @param strOpDate: 操作日期(要求唯一的字段)
 * @param strOpTime: 操作时间(要求唯一的字段)
 * @param strPrjId: 工程ID(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function SysLog_GetUniCondStr4Update(objSysLogEN: clsSysLogEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and mId <> '{0}'", objSysLogEN.mId);
  strWhereCond += Format(" and UserId = '{0}'", objSysLogEN.userId);
  strWhereCond += Format(" and OpDate = '{0}'", objSysLogEN.opDate);
  strWhereCond += Format(" and OpTime = '{0}'", objSysLogEN.opTime);
  strWhereCond += Format(" and PrjId = '{0}'", objSysLogEN.prjId);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objSysLogENS:源对象
 * @param objSysLogENT:目标对象
 */
export function SysLog_GetObjFromJsonObj(objSysLogENS: clsSysLogEN): clsSysLogEN {
  const objSysLogENT: clsSysLogEN = new clsSysLogEN();
  ObjectAssign(objSysLogENT, objSysLogENS);
  return objSysLogENT;
}
