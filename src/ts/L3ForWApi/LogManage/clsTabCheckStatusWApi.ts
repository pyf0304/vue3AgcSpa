/**
 * 类名:clsTabCheckStatusWApi
 * 表名:TabCheckStatus(00050568)
 * 版本:2024.01.20.1(服务器:WIN-SRV103-116)
 * 日期:2024/01/23 16:49:46
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
 * 表检查状态(TabCheckStatus)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2024年01月23日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { GetStrLen, tzDataType, Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { clsTabCheckStatusEN } from '@/ts/L0Entity/LogManage/clsTabCheckStatusEN';
import { GetExceptionStr, myShowErrorMsg, ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const tabCheckStatus_Controller = 'TabCheckStatusApi';
export const tabCheckStatus_ConstructorName = 'tabCheckStatus';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngmId:关键字
 * @returns 对象
 **/
export async function TabCheckStatus_GetObjBymIdAsync(
  lngmId: number,
): Promise<clsTabCheckStatusEN | null> {
  const strThisFuncName = 'GetObjBymIdAsync';

  if (lngmId == 0) {
    const strMsg = Format('参数:[lngmId]不能为空!(In clsTabCheckStatusWApi.GetObjBymIdAsync)');
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjBymId';
  const strUrl = GetWebApiUrl(tabCheckStatus_Controller, strAction);

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
      const objTabCheckStatus = TabCheckStatus_GetObjFromJsonObj(returnObj);
      return objTabCheckStatus;
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
        tabCheckStatus_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabCheckStatus_ConstructorName,
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
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function TabCheckStatus_SortFunDefa(a: clsTabCheckStatusEN, b: clsTabCheckStatusEN): number {
  return a.mId - b.mId;
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function TabCheckStatus_SortFunDefa2Fld(
  a: clsTabCheckStatusEN,
  b: clsTabCheckStatusEN,
): number {
  if (a.prjId == b.prjId) return a.prjDataBaseId.localeCompare(b.prjDataBaseId);
  else return a.prjId.localeCompare(b.prjId);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function TabCheckStatus_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsTabCheckStatusEN.con_mId:
        return (a: clsTabCheckStatusEN, b: clsTabCheckStatusEN) => {
          return a.mId - b.mId;
        };
      case clsTabCheckStatusEN.con_PrjId:
        return (a: clsTabCheckStatusEN, b: clsTabCheckStatusEN) => {
          return a.prjId.localeCompare(b.prjId);
        };
      case clsTabCheckStatusEN.con_PrjDataBaseId:
        return (a: clsTabCheckStatusEN, b: clsTabCheckStatusEN) => {
          return a.prjDataBaseId.localeCompare(b.prjDataBaseId);
        };
      case clsTabCheckStatusEN.con_TabId:
        return (a: clsTabCheckStatusEN, b: clsTabCheckStatusEN) => {
          return a.tabId.localeCompare(b.tabId);
        };
      case clsTabCheckStatusEN.con_IsNeedCheckTab:
        return (a: clsTabCheckStatusEN) => {
          if (a.isNeedCheckTab == true) return 1;
          else return -1;
        };
      case clsTabCheckStatusEN.con_ErrorLevelId:
        return (a: clsTabCheckStatusEN, b: clsTabCheckStatusEN) => {
          return a.errorLevelId - b.errorLevelId;
        };
      case clsTabCheckStatusEN.con_ErrorMsg:
        return (a: clsTabCheckStatusEN, b: clsTabCheckStatusEN) => {
          if (a.errorMsg == null) return -1;
          if (b.errorMsg == null) return 1;
          return a.errorMsg.localeCompare(b.errorMsg);
        };
      case clsTabCheckStatusEN.con_TabCheckErrorTypeId:
        return (a: clsTabCheckStatusEN, b: clsTabCheckStatusEN) => {
          if (a.tabCheckErrorTypeId == null) return -1;
          if (b.tabCheckErrorTypeId == null) return 1;
          return a.tabCheckErrorTypeId.localeCompare(b.tabCheckErrorTypeId);
        };
      case clsTabCheckStatusEN.con_UpdDate:
        return (a: clsTabCheckStatusEN, b: clsTabCheckStatusEN) => {
          return a.updDate.localeCompare(b.updDate);
        };
      case clsTabCheckStatusEN.con_UpdUser:
        return (a: clsTabCheckStatusEN, b: clsTabCheckStatusEN) => {
          return a.updUser.localeCompare(b.updUser);
        };
      case clsTabCheckStatusEN.con_Memo:
        return (a: clsTabCheckStatusEN, b: clsTabCheckStatusEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[TabCheckStatus]中不存在!(in ${tabCheckStatus_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsTabCheckStatusEN.con_mId:
        return (a: clsTabCheckStatusEN, b: clsTabCheckStatusEN) => {
          return b.mId - a.mId;
        };
      case clsTabCheckStatusEN.con_PrjId:
        return (a: clsTabCheckStatusEN, b: clsTabCheckStatusEN) => {
          return b.prjId.localeCompare(a.prjId);
        };
      case clsTabCheckStatusEN.con_PrjDataBaseId:
        return (a: clsTabCheckStatusEN, b: clsTabCheckStatusEN) => {
          return b.prjDataBaseId.localeCompare(a.prjDataBaseId);
        };
      case clsTabCheckStatusEN.con_TabId:
        return (a: clsTabCheckStatusEN, b: clsTabCheckStatusEN) => {
          return b.tabId.localeCompare(a.tabId);
        };
      case clsTabCheckStatusEN.con_IsNeedCheckTab:
        return (b: clsTabCheckStatusEN) => {
          if (b.isNeedCheckTab == true) return 1;
          else return -1;
        };
      case clsTabCheckStatusEN.con_ErrorLevelId:
        return (a: clsTabCheckStatusEN, b: clsTabCheckStatusEN) => {
          return b.errorLevelId - a.errorLevelId;
        };
      case clsTabCheckStatusEN.con_ErrorMsg:
        return (a: clsTabCheckStatusEN, b: clsTabCheckStatusEN) => {
          if (b.errorMsg == null) return -1;
          if (a.errorMsg == null) return 1;
          return b.errorMsg.localeCompare(a.errorMsg);
        };
      case clsTabCheckStatusEN.con_TabCheckErrorTypeId:
        return (a: clsTabCheckStatusEN, b: clsTabCheckStatusEN) => {
          if (b.tabCheckErrorTypeId == null) return -1;
          if (a.tabCheckErrorTypeId == null) return 1;
          return b.tabCheckErrorTypeId.localeCompare(a.tabCheckErrorTypeId);
        };
      case clsTabCheckStatusEN.con_UpdDate:
        return (a: clsTabCheckStatusEN, b: clsTabCheckStatusEN) => {
          return b.updDate.localeCompare(a.updDate);
        };
      case clsTabCheckStatusEN.con_UpdUser:
        return (a: clsTabCheckStatusEN, b: clsTabCheckStatusEN) => {
          return b.updUser.localeCompare(a.updUser);
        };
      case clsTabCheckStatusEN.con_Memo:
        return (a: clsTabCheckStatusEN, b: clsTabCheckStatusEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[TabCheckStatus]中不存在!(in ${tabCheckStatus_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function TabCheckStatus_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsTabCheckStatusEN.con_mId:
      return (obj: clsTabCheckStatusEN) => {
        return obj.mId === value;
      };
    case clsTabCheckStatusEN.con_PrjId:
      return (obj: clsTabCheckStatusEN) => {
        return obj.prjId === value;
      };
    case clsTabCheckStatusEN.con_PrjDataBaseId:
      return (obj: clsTabCheckStatusEN) => {
        return obj.prjDataBaseId === value;
      };
    case clsTabCheckStatusEN.con_TabId:
      return (obj: clsTabCheckStatusEN) => {
        return obj.tabId === value;
      };
    case clsTabCheckStatusEN.con_IsNeedCheckTab:
      return (obj: clsTabCheckStatusEN) => {
        return obj.isNeedCheckTab === value;
      };
    case clsTabCheckStatusEN.con_ErrorLevelId:
      return (obj: clsTabCheckStatusEN) => {
        return obj.errorLevelId === value;
      };
    case clsTabCheckStatusEN.con_ErrorMsg:
      return (obj: clsTabCheckStatusEN) => {
        return obj.errorMsg === value;
      };
    case clsTabCheckStatusEN.con_TabCheckErrorTypeId:
      return (obj: clsTabCheckStatusEN) => {
        return obj.tabCheckErrorTypeId === value;
      };
    case clsTabCheckStatusEN.con_UpdDate:
      return (obj: clsTabCheckStatusEN) => {
        return obj.updDate === value;
      };
    case clsTabCheckStatusEN.con_UpdUser:
      return (obj: clsTabCheckStatusEN) => {
        return obj.updUser === value;
      };
    case clsTabCheckStatusEN.con_Memo:
      return (obj: clsTabCheckStatusEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[TabCheckStatus]中不存在!(in ${tabCheckStatus_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}
//该表没有使用Cache,不需要生成[TabCheckStatus__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function TabCheckStatus_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(tabCheckStatus_Controller, strAction);

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
        tabCheckStatus_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabCheckStatus_ConstructorName,
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
export async function TabCheckStatus_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(tabCheckStatus_Controller, strAction);

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
        tabCheckStatus_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabCheckStatus_ConstructorName,
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
export async function TabCheckStatus_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsTabCheckStatusEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(tabCheckStatus_Controller, strAction);

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
      const objTabCheckStatus = TabCheckStatus_GetObjFromJsonObj(returnObj);
      return objTabCheckStatus;
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
        tabCheckStatus_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabCheckStatus_ConstructorName,
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
export async function TabCheckStatus_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsTabCheckStatusEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(tabCheckStatus_Controller, strAction);

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
          tabCheckStatus_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = TabCheckStatus_GetObjLstByJSONObjLst(returnObjLst);
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
        tabCheckStatus_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabCheckStatus_ConstructorName,
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
export async function TabCheckStatus_GetObjLstBymIdLstAsync(
  arrmId: Array<string>,
): Promise<Array<clsTabCheckStatusEN>> {
  const strThisFuncName = 'GetObjLstBymIdLstAsync';
  const strAction = 'GetObjLstBymIdLst';
  const strUrl = GetWebApiUrl(tabCheckStatus_Controller, strAction);

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
          tabCheckStatus_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = TabCheckStatus_GetObjLstByJSONObjLst(returnObjLst);
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
        tabCheckStatus_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabCheckStatus_ConstructorName,
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
export async function TabCheckStatus_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsTabCheckStatusEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(tabCheckStatus_Controller, strAction);

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
          tabCheckStatus_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = TabCheckStatus_GetObjLstByJSONObjLst(returnObjLst);
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
        tabCheckStatus_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabCheckStatus_ConstructorName,
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
export async function TabCheckStatus_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsTabCheckStatusEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(tabCheckStatus_Controller, strAction);

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
          tabCheckStatus_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = TabCheckStatus_GetObjLstByJSONObjLst(returnObjLst);
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
        tabCheckStatus_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabCheckStatus_ConstructorName,
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
export async function TabCheckStatus_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsTabCheckStatusEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsTabCheckStatusEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(tabCheckStatus_Controller, strAction);

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
          tabCheckStatus_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = TabCheckStatus_GetObjLstByJSONObjLst(returnObjLst);
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
        tabCheckStatus_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabCheckStatus_ConstructorName,
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
export async function TabCheckStatus_DelRecordAsync(lngmId: number): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(tabCheckStatus_Controller, strAction);
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
        tabCheckStatus_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabCheckStatus_ConstructorName,
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
export async function TabCheckStatus_DelTabCheckStatussAsync(
  arrmId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelTabCheckStatussAsync';
  const strAction = 'DelTabCheckStatuss';
  const strUrl = GetWebApiUrl(tabCheckStatus_Controller, strAction);

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
        tabCheckStatus_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabCheckStatus_ConstructorName,
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
export async function TabCheckStatus_DelTabCheckStatussByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelTabCheckStatussByCondAsync';
  const strAction = 'DelTabCheckStatussByCond';
  const strUrl = GetWebApiUrl(tabCheckStatus_Controller, strAction);

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
        tabCheckStatus_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabCheckStatus_ConstructorName,
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
 * @param objTabCheckStatusEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function TabCheckStatus_AddNewRecordAsync(
  objTabCheckStatusEN: clsTabCheckStatusEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objTabCheckStatusEN);
  const strUrl = GetWebApiUrl(tabCheckStatus_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objTabCheckStatusEN, config);
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
        tabCheckStatus_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabCheckStatus_ConstructorName,
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
 * @param objTabCheckStatusEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function TabCheckStatus_AddNewRecordWithReturnKeyAsync(
  objTabCheckStatusEN: clsTabCheckStatusEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(tabCheckStatus_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objTabCheckStatusEN, config);
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
        tabCheckStatus_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabCheckStatus_ConstructorName,
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
 * @param objTabCheckStatusEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function TabCheckStatus_UpdateRecordAsync(
  objTabCheckStatusEN: clsTabCheckStatusEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objTabCheckStatusEN.sfUpdFldSetStr === undefined ||
    objTabCheckStatusEN.sfUpdFldSetStr === null ||
    objTabCheckStatusEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objTabCheckStatusEN.mId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(tabCheckStatus_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objTabCheckStatusEN, config);
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
        tabCheckStatus_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabCheckStatus_ConstructorName,
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
 * @param objTabCheckStatusEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function TabCheckStatus_UpdateWithConditionAsync(
  objTabCheckStatusEN: clsTabCheckStatusEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objTabCheckStatusEN.sfUpdFldSetStr === undefined ||
    objTabCheckStatusEN.sfUpdFldSetStr === null ||
    objTabCheckStatusEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objTabCheckStatusEN.mId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(tabCheckStatus_Controller, strAction);
  objTabCheckStatusEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objTabCheckStatusEN, config);
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
        tabCheckStatus_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabCheckStatus_ConstructorName,
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
export async function TabCheckStatus_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(tabCheckStatus_Controller, strAction);

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
        tabCheckStatus_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabCheckStatus_ConstructorName,
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
export async function TabCheckStatus_IsExistAsync(lngmId: number): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(tabCheckStatus_Controller, strAction);

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
        tabCheckStatus_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabCheckStatus_ConstructorName,
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
export async function TabCheckStatus_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(tabCheckStatus_Controller, strAction);

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
        tabCheckStatus_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabCheckStatus_ConstructorName,
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
export async function TabCheckStatus_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(tabCheckStatus_Controller, strAction);

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
        tabCheckStatus_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabCheckStatus_ConstructorName,
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
export function TabCheckStatus_GetWebApiUrl(strController: string, strAction: string): string {
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
export function TabCheckStatus_CheckPropertyNew(pobjTabCheckStatusEN: clsTabCheckStatusEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (
    IsNullOrEmpty(pobjTabCheckStatusEN.prjId) === true ||
    pobjTabCheckStatusEN.prjId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000411)字段[工程ID]不能为空(In 表检查状态)!(clsTabCheckStatusBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabCheckStatusEN.prjDataBaseId) === true ||
    pobjTabCheckStatusEN.prjDataBaseId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000411)字段[项目数据库Id]不能为空(In 表检查状态)!(clsTabCheckStatusBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabCheckStatusEN.tabId) === true ||
    pobjTabCheckStatusEN.tabId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000411)字段[表ID]不能为空(In 表检查状态)!(clsTabCheckStatusBL:CheckPropertyNew0)',
    );
  }
  if (
    null === pobjTabCheckStatusEN.isNeedCheckTab ||
    (pobjTabCheckStatusEN.isNeedCheckTab != null &&
      pobjTabCheckStatusEN.isNeedCheckTab.toString() === '')
  ) {
    throw new Error(
      '(errid:Watl000411)字段[是否需要检查表字段]不能为空(In 表检查状态)!(clsTabCheckStatusBL:CheckPropertyNew0)',
    );
  }
  if (
    null === pobjTabCheckStatusEN.errorLevelId ||
    (pobjTabCheckStatusEN.errorLevelId != null &&
      pobjTabCheckStatusEN.errorLevelId.toString() === '') ||
    pobjTabCheckStatusEN.errorLevelId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000411)字段[错误等级Id]不能为空(In 表检查状态)!(clsTabCheckStatusBL:CheckPropertyNew0)',
    );
  }
  if (IsNullOrEmpty(pobjTabCheckStatusEN.updUser) === true) {
    throw new Error(
      '(errid:Watl000411)字段[修改者]不能为空(In 表检查状态)!(clsTabCheckStatusBL:CheckPropertyNew0)',
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjTabCheckStatusEN.prjId) == false &&
    GetStrLen(pobjTabCheckStatusEN.prjId) > 4
  ) {
    throw new Error(
      '(errid:Watl000413)字段[工程ID(prjId)]的长度不能超过4(In 表检查状态(TabCheckStatus))!值:$(pobjTabCheckStatusEN.prjId)(clsTabCheckStatusBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabCheckStatusEN.prjDataBaseId) == false &&
    GetStrLen(pobjTabCheckStatusEN.prjDataBaseId) > 4
  ) {
    throw new Error(
      '(errid:Watl000413)字段[项目数据库Id(prjDataBaseId)]的长度不能超过4(In 表检查状态(TabCheckStatus))!值:$(pobjTabCheckStatusEN.prjDataBaseId)(clsTabCheckStatusBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabCheckStatusEN.tabId) == false &&
    GetStrLen(pobjTabCheckStatusEN.tabId) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[表ID(tabId)]的长度不能超过8(In 表检查状态(TabCheckStatus))!值:$(pobjTabCheckStatusEN.tabId)(clsTabCheckStatusBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabCheckStatusEN.errorMsg) == false &&
    GetStrLen(pobjTabCheckStatusEN.errorMsg) > 5000
  ) {
    throw new Error(
      '(errid:Watl000413)字段[错误信息(errorMsg)]的长度不能超过5000(In 表检查状态(TabCheckStatus))!值:$(pobjTabCheckStatusEN.errorMsg)(clsTabCheckStatusBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabCheckStatusEN.tabCheckErrorTypeId) == false &&
    GetStrLen(pobjTabCheckStatusEN.tabCheckErrorTypeId) > 2
  ) {
    throw new Error(
      '(errid:Watl000413)字段[表检查错误类型Id(tabCheckErrorTypeId)]的长度不能超过2(In 表检查状态(TabCheckStatus))!值:$(pobjTabCheckStatusEN.tabCheckErrorTypeId)(clsTabCheckStatusBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabCheckStatusEN.updDate) == false &&
    GetStrLen(pobjTabCheckStatusEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 表检查状态(TabCheckStatus))!值:$(pobjTabCheckStatusEN.updDate)(clsTabCheckStatusBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabCheckStatusEN.updUser) == false &&
    GetStrLen(pobjTabCheckStatusEN.updUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改者(updUser)]的长度不能超过20(In 表检查状态(TabCheckStatus))!值:$(pobjTabCheckStatusEN.updUser)(clsTabCheckStatusBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabCheckStatusEN.memo) == false &&
    GetStrLen(pobjTabCheckStatusEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In 表检查状态(TabCheckStatus))!值:$(pobjTabCheckStatusEN.memo)(clsTabCheckStatusBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjTabCheckStatusEN.mId &&
    undefined !== pobjTabCheckStatusEN.mId &&
    tzDataType.isNumber(pobjTabCheckStatusEN.mId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[mId(mId)]的值:[$(pobjTabCheckStatusEN.mId)], 非法,应该为数值型(In 表检查状态(TabCheckStatus))!(clsTabCheckStatusBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabCheckStatusEN.prjId) == false &&
    undefined !== pobjTabCheckStatusEN.prjId &&
    tzDataType.isString(pobjTabCheckStatusEN.prjId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[工程ID(prjId)]的值:[$(pobjTabCheckStatusEN.prjId)], 非法,应该为字符型(In 表检查状态(TabCheckStatus))!(clsTabCheckStatusBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabCheckStatusEN.prjDataBaseId) == false &&
    undefined !== pobjTabCheckStatusEN.prjDataBaseId &&
    tzDataType.isString(pobjTabCheckStatusEN.prjDataBaseId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[项目数据库Id(prjDataBaseId)]的值:[$(pobjTabCheckStatusEN.prjDataBaseId)], 非法,应该为字符型(In 表检查状态(TabCheckStatus))!(clsTabCheckStatusBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabCheckStatusEN.tabId) == false &&
    undefined !== pobjTabCheckStatusEN.tabId &&
    tzDataType.isString(pobjTabCheckStatusEN.tabId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[表ID(tabId)]的值:[$(pobjTabCheckStatusEN.tabId)], 非法,应该为字符型(In 表检查状态(TabCheckStatus))!(clsTabCheckStatusBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjTabCheckStatusEN.isNeedCheckTab &&
    undefined !== pobjTabCheckStatusEN.isNeedCheckTab &&
    tzDataType.isBoolean(pobjTabCheckStatusEN.isNeedCheckTab) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否需要检查表字段(isNeedCheckTab)]的值:[$(pobjTabCheckStatusEN.isNeedCheckTab)], 非法,应该为布尔型(In 表检查状态(TabCheckStatus))!(clsTabCheckStatusBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjTabCheckStatusEN.errorLevelId &&
    undefined !== pobjTabCheckStatusEN.errorLevelId &&
    tzDataType.isNumber(pobjTabCheckStatusEN.errorLevelId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[错误等级Id(errorLevelId)]的值:[$(pobjTabCheckStatusEN.errorLevelId)], 非法,应该为数值型(In 表检查状态(TabCheckStatus))!(clsTabCheckStatusBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabCheckStatusEN.errorMsg) == false &&
    undefined !== pobjTabCheckStatusEN.errorMsg &&
    tzDataType.isString(pobjTabCheckStatusEN.errorMsg) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[错误信息(errorMsg)]的值:[$(pobjTabCheckStatusEN.errorMsg)], 非法,应该为字符型(In 表检查状态(TabCheckStatus))!(clsTabCheckStatusBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabCheckStatusEN.tabCheckErrorTypeId) == false &&
    undefined !== pobjTabCheckStatusEN.tabCheckErrorTypeId &&
    tzDataType.isString(pobjTabCheckStatusEN.tabCheckErrorTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[表检查错误类型Id(tabCheckErrorTypeId)]的值:[$(pobjTabCheckStatusEN.tabCheckErrorTypeId)], 非法,应该为字符型(In 表检查状态(TabCheckStatus))!(clsTabCheckStatusBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabCheckStatusEN.updDate) == false &&
    undefined !== pobjTabCheckStatusEN.updDate &&
    tzDataType.isString(pobjTabCheckStatusEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjTabCheckStatusEN.updDate)], 非法,应该为字符型(In 表检查状态(TabCheckStatus))!(clsTabCheckStatusBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabCheckStatusEN.updUser) == false &&
    undefined !== pobjTabCheckStatusEN.updUser &&
    tzDataType.isString(pobjTabCheckStatusEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改者(updUser)]的值:[$(pobjTabCheckStatusEN.updUser)], 非法,应该为字符型(In 表检查状态(TabCheckStatus))!(clsTabCheckStatusBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabCheckStatusEN.memo) == false &&
    undefined !== pobjTabCheckStatusEN.memo &&
    tzDataType.isString(pobjTabCheckStatusEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[说明(memo)]的值:[$(pobjTabCheckStatusEN.memo)], 非法,应该为字符型(In 表检查状态(TabCheckStatus))!(clsTabCheckStatusBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function TabCheckStatus_CheckProperty4Update(pobjTabCheckStatusEN: clsTabCheckStatusEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjTabCheckStatusEN.prjId) == false &&
    GetStrLen(pobjTabCheckStatusEN.prjId) > 4
  ) {
    throw new Error(
      '(errid:Watl000416)字段[工程ID(prjId)]的长度不能超过4(In 表检查状态(TabCheckStatus))!值:$(pobjTabCheckStatusEN.prjId)(clsTabCheckStatusBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabCheckStatusEN.prjDataBaseId) == false &&
    GetStrLen(pobjTabCheckStatusEN.prjDataBaseId) > 4
  ) {
    throw new Error(
      '(errid:Watl000416)字段[项目数据库Id(prjDataBaseId)]的长度不能超过4(In 表检查状态(TabCheckStatus))!值:$(pobjTabCheckStatusEN.prjDataBaseId)(clsTabCheckStatusBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabCheckStatusEN.tabId) == false &&
    GetStrLen(pobjTabCheckStatusEN.tabId) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[表ID(tabId)]的长度不能超过8(In 表检查状态(TabCheckStatus))!值:$(pobjTabCheckStatusEN.tabId)(clsTabCheckStatusBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabCheckStatusEN.errorMsg) == false &&
    GetStrLen(pobjTabCheckStatusEN.errorMsg) > 5000
  ) {
    throw new Error(
      '(errid:Watl000416)字段[错误信息(errorMsg)]的长度不能超过5000(In 表检查状态(TabCheckStatus))!值:$(pobjTabCheckStatusEN.errorMsg)(clsTabCheckStatusBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabCheckStatusEN.tabCheckErrorTypeId) == false &&
    GetStrLen(pobjTabCheckStatusEN.tabCheckErrorTypeId) > 2
  ) {
    throw new Error(
      '(errid:Watl000416)字段[表检查错误类型Id(tabCheckErrorTypeId)]的长度不能超过2(In 表检查状态(TabCheckStatus))!值:$(pobjTabCheckStatusEN.tabCheckErrorTypeId)(clsTabCheckStatusBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabCheckStatusEN.updDate) == false &&
    GetStrLen(pobjTabCheckStatusEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 表检查状态(TabCheckStatus))!值:$(pobjTabCheckStatusEN.updDate)(clsTabCheckStatusBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabCheckStatusEN.updUser) == false &&
    GetStrLen(pobjTabCheckStatusEN.updUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改者(updUser)]的长度不能超过20(In 表检查状态(TabCheckStatus))!值:$(pobjTabCheckStatusEN.updUser)(clsTabCheckStatusBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabCheckStatusEN.memo) == false &&
    GetStrLen(pobjTabCheckStatusEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In 表检查状态(TabCheckStatus))!值:$(pobjTabCheckStatusEN.memo)(clsTabCheckStatusBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjTabCheckStatusEN.mId &&
    undefined !== pobjTabCheckStatusEN.mId &&
    tzDataType.isNumber(pobjTabCheckStatusEN.mId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[mId(mId)]的值:[$(pobjTabCheckStatusEN.mId)], 非法,应该为数值型(In 表检查状态(TabCheckStatus))!(clsTabCheckStatusBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabCheckStatusEN.prjId) == false &&
    undefined !== pobjTabCheckStatusEN.prjId &&
    tzDataType.isString(pobjTabCheckStatusEN.prjId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[工程ID(prjId)]的值:[$(pobjTabCheckStatusEN.prjId)], 非法,应该为字符型(In 表检查状态(TabCheckStatus))!(clsTabCheckStatusBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabCheckStatusEN.prjDataBaseId) == false &&
    undefined !== pobjTabCheckStatusEN.prjDataBaseId &&
    tzDataType.isString(pobjTabCheckStatusEN.prjDataBaseId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[项目数据库Id(prjDataBaseId)]的值:[$(pobjTabCheckStatusEN.prjDataBaseId)], 非法,应该为字符型(In 表检查状态(TabCheckStatus))!(clsTabCheckStatusBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabCheckStatusEN.tabId) == false &&
    undefined !== pobjTabCheckStatusEN.tabId &&
    tzDataType.isString(pobjTabCheckStatusEN.tabId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[表ID(tabId)]的值:[$(pobjTabCheckStatusEN.tabId)], 非法,应该为字符型(In 表检查状态(TabCheckStatus))!(clsTabCheckStatusBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjTabCheckStatusEN.isNeedCheckTab &&
    undefined !== pobjTabCheckStatusEN.isNeedCheckTab &&
    tzDataType.isBoolean(pobjTabCheckStatusEN.isNeedCheckTab) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否需要检查表字段(isNeedCheckTab)]的值:[$(pobjTabCheckStatusEN.isNeedCheckTab)], 非法,应该为布尔型(In 表检查状态(TabCheckStatus))!(clsTabCheckStatusBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjTabCheckStatusEN.errorLevelId &&
    undefined !== pobjTabCheckStatusEN.errorLevelId &&
    tzDataType.isNumber(pobjTabCheckStatusEN.errorLevelId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[错误等级Id(errorLevelId)]的值:[$(pobjTabCheckStatusEN.errorLevelId)], 非法,应该为数值型(In 表检查状态(TabCheckStatus))!(clsTabCheckStatusBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabCheckStatusEN.errorMsg) == false &&
    undefined !== pobjTabCheckStatusEN.errorMsg &&
    tzDataType.isString(pobjTabCheckStatusEN.errorMsg) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[错误信息(errorMsg)]的值:[$(pobjTabCheckStatusEN.errorMsg)], 非法,应该为字符型(In 表检查状态(TabCheckStatus))!(clsTabCheckStatusBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabCheckStatusEN.tabCheckErrorTypeId) == false &&
    undefined !== pobjTabCheckStatusEN.tabCheckErrorTypeId &&
    tzDataType.isString(pobjTabCheckStatusEN.tabCheckErrorTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[表检查错误类型Id(tabCheckErrorTypeId)]的值:[$(pobjTabCheckStatusEN.tabCheckErrorTypeId)], 非法,应该为字符型(In 表检查状态(TabCheckStatus))!(clsTabCheckStatusBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabCheckStatusEN.updDate) == false &&
    undefined !== pobjTabCheckStatusEN.updDate &&
    tzDataType.isString(pobjTabCheckStatusEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjTabCheckStatusEN.updDate)], 非法,应该为字符型(In 表检查状态(TabCheckStatus))!(clsTabCheckStatusBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabCheckStatusEN.updUser) == false &&
    undefined !== pobjTabCheckStatusEN.updUser &&
    tzDataType.isString(pobjTabCheckStatusEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改者(updUser)]的值:[$(pobjTabCheckStatusEN.updUser)], 非法,应该为字符型(In 表检查状态(TabCheckStatus))!(clsTabCheckStatusBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabCheckStatusEN.memo) == false &&
    undefined !== pobjTabCheckStatusEN.memo &&
    tzDataType.isString(pobjTabCheckStatusEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[说明(memo)]的值:[$(pobjTabCheckStatusEN.memo)], 非法,应该为字符型(In 表检查状态(TabCheckStatus))!(clsTabCheckStatusBL:CheckProperty4Update)',
    );
  }
  //检查主键是否为Null或者空!
  if (
    null === pobjTabCheckStatusEN.mId ||
    (pobjTabCheckStatusEN.mId != null && pobjTabCheckStatusEN.mId.toString() === '')
  ) {
    throw new Error(
      '(errid:Watl000064)字段[mId]不能为空(In 表检查状态)!(clsTabCheckStatusBL:CheckProperty4Update)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function TabCheckStatus_GetJSONStrByObj(pobjTabCheckStatusEN: clsTabCheckStatusEN): string {
  pobjTabCheckStatusEN.sfUpdFldSetStr = pobjTabCheckStatusEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjTabCheckStatusEN);
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
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
 */
export function TabCheckStatus_GetObjLstByJSONStr(strJSON: string): Array<clsTabCheckStatusEN> {
  let arrTabCheckStatusObjLst = new Array<clsTabCheckStatusEN>();
  if (strJSON === '') {
    return arrTabCheckStatusObjLst;
  }
  try {
    arrTabCheckStatusObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrTabCheckStatusObjLst;
  }
  return arrTabCheckStatusObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrTabCheckStatusObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function TabCheckStatus_GetObjLstByJSONObjLst(
  arrTabCheckStatusObjLstS: Array<clsTabCheckStatusEN>,
): Array<clsTabCheckStatusEN> {
  const arrTabCheckStatusObjLst = new Array<clsTabCheckStatusEN>();
  for (const objInFor of arrTabCheckStatusObjLstS) {
    const obj1 = TabCheckStatus_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrTabCheckStatusObjLst.push(obj1);
  }
  return arrTabCheckStatusObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function TabCheckStatus_GetObjByJSONStr(strJSON: string): clsTabCheckStatusEN {
  let pobjTabCheckStatusEN = new clsTabCheckStatusEN();
  if (strJSON === '') {
    return pobjTabCheckStatusEN;
  }
  try {
    pobjTabCheckStatusEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjTabCheckStatusEN;
  }
  return pobjTabCheckStatusEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function TabCheckStatus_GetCombineCondition(
  objTabCheckStatusCond: clsTabCheckStatusEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objTabCheckStatusCond.dicFldComparisonOp,
      clsTabCheckStatusEN.con_mId,
    ) == true
  ) {
    const strComparisonOpmId: string =
      objTabCheckStatusCond.dicFldComparisonOp[clsTabCheckStatusEN.con_mId];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsTabCheckStatusEN.con_mId,
      objTabCheckStatusCond.mId,
      strComparisonOpmId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objTabCheckStatusCond.dicFldComparisonOp,
      clsTabCheckStatusEN.con_PrjId,
    ) == true
  ) {
    const strComparisonOpPrjId: string =
      objTabCheckStatusCond.dicFldComparisonOp[clsTabCheckStatusEN.con_PrjId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsTabCheckStatusEN.con_PrjId,
      objTabCheckStatusCond.prjId,
      strComparisonOpPrjId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objTabCheckStatusCond.dicFldComparisonOp,
      clsTabCheckStatusEN.con_PrjDataBaseId,
    ) == true
  ) {
    const strComparisonOpPrjDataBaseId: string =
      objTabCheckStatusCond.dicFldComparisonOp[clsTabCheckStatusEN.con_PrjDataBaseId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsTabCheckStatusEN.con_PrjDataBaseId,
      objTabCheckStatusCond.prjDataBaseId,
      strComparisonOpPrjDataBaseId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objTabCheckStatusCond.dicFldComparisonOp,
      clsTabCheckStatusEN.con_TabId,
    ) == true
  ) {
    const strComparisonOpTabId: string =
      objTabCheckStatusCond.dicFldComparisonOp[clsTabCheckStatusEN.con_TabId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsTabCheckStatusEN.con_TabId,
      objTabCheckStatusCond.tabId,
      strComparisonOpTabId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objTabCheckStatusCond.dicFldComparisonOp,
      clsTabCheckStatusEN.con_IsNeedCheckTab,
    ) == true
  ) {
    if (objTabCheckStatusCond.isNeedCheckTab == true) {
      strWhereCond += Format(" And {0} = '1'", clsTabCheckStatusEN.con_IsNeedCheckTab);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsTabCheckStatusEN.con_IsNeedCheckTab);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objTabCheckStatusCond.dicFldComparisonOp,
      clsTabCheckStatusEN.con_ErrorLevelId,
    ) == true
  ) {
    const strComparisonOpErrorLevelId: string =
      objTabCheckStatusCond.dicFldComparisonOp[clsTabCheckStatusEN.con_ErrorLevelId];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsTabCheckStatusEN.con_ErrorLevelId,
      objTabCheckStatusCond.errorLevelId,
      strComparisonOpErrorLevelId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objTabCheckStatusCond.dicFldComparisonOp,
      clsTabCheckStatusEN.con_ErrorMsg,
    ) == true
  ) {
    const strComparisonOpErrorMsg: string =
      objTabCheckStatusCond.dicFldComparisonOp[clsTabCheckStatusEN.con_ErrorMsg];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsTabCheckStatusEN.con_ErrorMsg,
      objTabCheckStatusCond.errorMsg,
      strComparisonOpErrorMsg,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objTabCheckStatusCond.dicFldComparisonOp,
      clsTabCheckStatusEN.con_TabCheckErrorTypeId,
    ) == true
  ) {
    const strComparisonOpTabCheckErrorTypeId: string =
      objTabCheckStatusCond.dicFldComparisonOp[clsTabCheckStatusEN.con_TabCheckErrorTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsTabCheckStatusEN.con_TabCheckErrorTypeId,
      objTabCheckStatusCond.tabCheckErrorTypeId,
      strComparisonOpTabCheckErrorTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objTabCheckStatusCond.dicFldComparisonOp,
      clsTabCheckStatusEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objTabCheckStatusCond.dicFldComparisonOp[clsTabCheckStatusEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsTabCheckStatusEN.con_UpdDate,
      objTabCheckStatusCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objTabCheckStatusCond.dicFldComparisonOp,
      clsTabCheckStatusEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objTabCheckStatusCond.dicFldComparisonOp[clsTabCheckStatusEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsTabCheckStatusEN.con_UpdUser,
      objTabCheckStatusCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objTabCheckStatusCond.dicFldComparisonOp,
      clsTabCheckStatusEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objTabCheckStatusCond.dicFldComparisonOp[clsTabCheckStatusEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsTabCheckStatusEN.con_Memo,
      objTabCheckStatusCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--TabCheckStatus(表检查状态),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strPrjId: 工程ID(要求唯一的字段)
 * @param strPrjDataBaseId: 项目数据库Id(要求唯一的字段)
 * @param strTabId: 表ID(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function TabCheckStatus_GetUniCondStr(objTabCheckStatusEN: clsTabCheckStatusEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and PrjId = '{0}'", objTabCheckStatusEN.prjId);
  strWhereCond += Format(" and PrjDataBaseId = '{0}'", objTabCheckStatusEN.prjDataBaseId);
  strWhereCond += Format(" and TabId = '{0}'", objTabCheckStatusEN.tabId);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--TabCheckStatus(表检查状态),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strPrjId: 工程ID(要求唯一的字段)
 * @param strPrjDataBaseId: 项目数据库Id(要求唯一的字段)
 * @param strTabId: 表ID(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function TabCheckStatus_GetUniCondStr4Update(
  objTabCheckStatusEN: clsTabCheckStatusEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and mId <> '{0}'", objTabCheckStatusEN.mId);
  strWhereCond += Format(" and PrjId = '{0}'", objTabCheckStatusEN.prjId);
  strWhereCond += Format(" and PrjDataBaseId = '{0}'", objTabCheckStatusEN.prjDataBaseId);
  strWhereCond += Format(" and TabId = '{0}'", objTabCheckStatusEN.tabId);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objTabCheckStatusENS:源对象
 * @param objTabCheckStatusENT:目标对象
 */
export function TabCheckStatus_GetObjFromJsonObj(
  objTabCheckStatusENS: clsTabCheckStatusEN,
): clsTabCheckStatusEN {
  const objTabCheckStatusENT: clsTabCheckStatusEN = new clsTabCheckStatusEN();
  ObjectAssign(objTabCheckStatusENT, objTabCheckStatusENS);
  return objTabCheckStatusENT;
}
