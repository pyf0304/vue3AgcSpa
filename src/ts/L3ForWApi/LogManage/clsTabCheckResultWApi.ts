/**
 * 类名:clsTabCheckResultWApi
 * 表名:TabCheckResult(00050188)
 * 版本:2024.01.24.1(服务器:WIN-SRV103-116)
 * 日期:2024/01/26 14:20:45
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
 * 表检查结果(TabCheckResult)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2024年01月26日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { GetStrLen, tzDataType, Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { clsTabCheckResultEN } from '@/ts/L0Entity/LogManage/clsTabCheckResultEN';
import { GetExceptionStr, myShowErrorMsg, ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const tabCheckResult_Controller = 'TabCheckResultApi';
export const tabCheckResult_ConstructorName = 'tabCheckResult';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngmId:关键字
 * @returns 对象
 **/
export async function TabCheckResult_GetObjBymIdAsync(
  lngmId: number,
): Promise<clsTabCheckResultEN | null> {
  const strThisFuncName = 'GetObjBymIdAsync';

  if (lngmId == 0) {
    const strMsg = Format('参数:[lngmId]不能为空!(In clsTabCheckResultWApi.GetObjBymIdAsync)');
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjBymId';
  const strUrl = GetWebApiUrl(tabCheckResult_Controller, strAction);

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
      const objTabCheckResult = TabCheckResult_GetObjFromJsonObj(returnObj);
      return objTabCheckResult;
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
        tabCheckResult_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabCheckResult_ConstructorName,
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
 * 日期:2024-01-26
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function TabCheckResult_SortFunDefa(a: clsTabCheckResultEN, b: clsTabCheckResultEN): number {
  return a.mId - b.mId;
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2024-01-26
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function TabCheckResult_SortFunDefa2Fld(
  a: clsTabCheckResultEN,
  b: clsTabCheckResultEN,
): number {
  if (a.prjId == b.prjId) return a.prjDataBaseId.localeCompare(b.prjDataBaseId);
  else return a.prjId.localeCompare(b.prjId);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-01-26
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function TabCheckResult_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsTabCheckResultEN.con_mId:
        return (a: clsTabCheckResultEN, b: clsTabCheckResultEN) => {
          return a.mId - b.mId;
        };
      case clsTabCheckResultEN.con_PrjId:
        return (a: clsTabCheckResultEN, b: clsTabCheckResultEN) => {
          return a.prjId.localeCompare(b.prjId);
        };
      case clsTabCheckResultEN.con_PrjDataBaseId:
        return (a: clsTabCheckResultEN, b: clsTabCheckResultEN) => {
          return a.prjDataBaseId.localeCompare(b.prjDataBaseId);
        };
      case clsTabCheckResultEN.con_TabId:
        return (a: clsTabCheckResultEN, b: clsTabCheckResultEN) => {
          if (a.tabId == null) return -1;
          if (b.tabId == null) return 1;
          return a.tabId.localeCompare(b.tabId);
        };
      case clsTabCheckResultEN.con_FldId:
        return (a: clsTabCheckResultEN, b: clsTabCheckResultEN) => {
          if (a.fldId == null) return -1;
          if (b.fldId == null) return 1;
          return a.fldId.localeCompare(b.fldId);
        };
      case clsTabCheckResultEN.con_ErrorLevelId:
        return (a: clsTabCheckResultEN, b: clsTabCheckResultEN) => {
          return a.errorLevelId - b.errorLevelId;
        };
      case clsTabCheckResultEN.con_ErrorMsg:
        return (a: clsTabCheckResultEN, b: clsTabCheckResultEN) => {
          return a.errorMsg.localeCompare(b.errorMsg);
        };
      case clsTabCheckResultEN.con_TabCheckErrorTypeId:
        return (a: clsTabCheckResultEN, b: clsTabCheckResultEN) => {
          return a.tabCheckErrorTypeId.localeCompare(b.tabCheckErrorTypeId);
        };
      case clsTabCheckResultEN.con_CheckDate:
        return (a: clsTabCheckResultEN, b: clsTabCheckResultEN) => {
          return a.checkDate.localeCompare(b.checkDate);
        };
      case clsTabCheckResultEN.con_CheckUser:
        return (a: clsTabCheckResultEN, b: clsTabCheckResultEN) => {
          return a.checkUser.localeCompare(b.checkUser);
        };
      case clsTabCheckResultEN.con_Memo:
        return (a: clsTabCheckResultEN, b: clsTabCheckResultEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[TabCheckResult]中不存在!(in ${tabCheckResult_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsTabCheckResultEN.con_mId:
        return (a: clsTabCheckResultEN, b: clsTabCheckResultEN) => {
          return b.mId - a.mId;
        };
      case clsTabCheckResultEN.con_PrjId:
        return (a: clsTabCheckResultEN, b: clsTabCheckResultEN) => {
          return b.prjId.localeCompare(a.prjId);
        };
      case clsTabCheckResultEN.con_PrjDataBaseId:
        return (a: clsTabCheckResultEN, b: clsTabCheckResultEN) => {
          return b.prjDataBaseId.localeCompare(a.prjDataBaseId);
        };
      case clsTabCheckResultEN.con_TabId:
        return (a: clsTabCheckResultEN, b: clsTabCheckResultEN) => {
          if (b.tabId == null) return -1;
          if (a.tabId == null) return 1;
          return b.tabId.localeCompare(a.tabId);
        };
      case clsTabCheckResultEN.con_FldId:
        return (a: clsTabCheckResultEN, b: clsTabCheckResultEN) => {
          if (b.fldId == null) return -1;
          if (a.fldId == null) return 1;
          return b.fldId.localeCompare(a.fldId);
        };
      case clsTabCheckResultEN.con_ErrorLevelId:
        return (a: clsTabCheckResultEN, b: clsTabCheckResultEN) => {
          return b.errorLevelId - a.errorLevelId;
        };
      case clsTabCheckResultEN.con_ErrorMsg:
        return (a: clsTabCheckResultEN, b: clsTabCheckResultEN) => {
          return b.errorMsg.localeCompare(a.errorMsg);
        };
      case clsTabCheckResultEN.con_TabCheckErrorTypeId:
        return (a: clsTabCheckResultEN, b: clsTabCheckResultEN) => {
          return b.tabCheckErrorTypeId.localeCompare(a.tabCheckErrorTypeId);
        };
      case clsTabCheckResultEN.con_CheckDate:
        return (a: clsTabCheckResultEN, b: clsTabCheckResultEN) => {
          return b.checkDate.localeCompare(a.checkDate);
        };
      case clsTabCheckResultEN.con_CheckUser:
        return (a: clsTabCheckResultEN, b: clsTabCheckResultEN) => {
          return b.checkUser.localeCompare(a.checkUser);
        };
      case clsTabCheckResultEN.con_Memo:
        return (a: clsTabCheckResultEN, b: clsTabCheckResultEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[TabCheckResult]中不存在!(in ${tabCheckResult_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2024-01-26
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function TabCheckResult_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsTabCheckResultEN.con_mId:
      return (obj: clsTabCheckResultEN) => {
        return obj.mId === value;
      };
    case clsTabCheckResultEN.con_PrjId:
      return (obj: clsTabCheckResultEN) => {
        return obj.prjId === value;
      };
    case clsTabCheckResultEN.con_PrjDataBaseId:
      return (obj: clsTabCheckResultEN) => {
        return obj.prjDataBaseId === value;
      };
    case clsTabCheckResultEN.con_TabId:
      return (obj: clsTabCheckResultEN) => {
        return obj.tabId === value;
      };
    case clsTabCheckResultEN.con_FldId:
      return (obj: clsTabCheckResultEN) => {
        return obj.fldId === value;
      };
    case clsTabCheckResultEN.con_ErrorLevelId:
      return (obj: clsTabCheckResultEN) => {
        return obj.errorLevelId === value;
      };
    case clsTabCheckResultEN.con_ErrorMsg:
      return (obj: clsTabCheckResultEN) => {
        return obj.errorMsg === value;
      };
    case clsTabCheckResultEN.con_TabCheckErrorTypeId:
      return (obj: clsTabCheckResultEN) => {
        return obj.tabCheckErrorTypeId === value;
      };
    case clsTabCheckResultEN.con_CheckDate:
      return (obj: clsTabCheckResultEN) => {
        return obj.checkDate === value;
      };
    case clsTabCheckResultEN.con_CheckUser:
      return (obj: clsTabCheckResultEN) => {
        return obj.checkUser === value;
      };
    case clsTabCheckResultEN.con_Memo:
      return (obj: clsTabCheckResultEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[TabCheckResult]中不存在!(in ${tabCheckResult_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}
//该表没有使用Cache,不需要生成[TabCheckResult__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function TabCheckResult_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(tabCheckResult_Controller, strAction);

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
        tabCheckResult_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabCheckResult_ConstructorName,
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
export async function TabCheckResult_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(tabCheckResult_Controller, strAction);

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
        tabCheckResult_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabCheckResult_ConstructorName,
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
export async function TabCheckResult_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsTabCheckResultEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(tabCheckResult_Controller, strAction);

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
      const objTabCheckResult = TabCheckResult_GetObjFromJsonObj(returnObj);
      return objTabCheckResult;
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
        tabCheckResult_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabCheckResult_ConstructorName,
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
export async function TabCheckResult_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsTabCheckResultEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(tabCheckResult_Controller, strAction);

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
          tabCheckResult_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = TabCheckResult_GetObjLstByJSONObjLst(returnObjLst);
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
        tabCheckResult_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabCheckResult_ConstructorName,
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
export async function TabCheckResult_GetObjLstBymIdLstAsync(
  arrmId: Array<string>,
): Promise<Array<clsTabCheckResultEN>> {
  const strThisFuncName = 'GetObjLstBymIdLstAsync';
  const strAction = 'GetObjLstBymIdLst';
  const strUrl = GetWebApiUrl(tabCheckResult_Controller, strAction);

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
          tabCheckResult_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = TabCheckResult_GetObjLstByJSONObjLst(returnObjLst);
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
        tabCheckResult_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabCheckResult_ConstructorName,
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
export async function TabCheckResult_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsTabCheckResultEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(tabCheckResult_Controller, strAction);

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
          tabCheckResult_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = TabCheckResult_GetObjLstByJSONObjLst(returnObjLst);
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
        tabCheckResult_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabCheckResult_ConstructorName,
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
export async function TabCheckResult_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsTabCheckResultEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(tabCheckResult_Controller, strAction);

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
          tabCheckResult_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = TabCheckResult_GetObjLstByJSONObjLst(returnObjLst);
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
        tabCheckResult_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabCheckResult_ConstructorName,
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
export async function TabCheckResult_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsTabCheckResultEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsTabCheckResultEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(tabCheckResult_Controller, strAction);

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
          tabCheckResult_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = TabCheckResult_GetObjLstByJSONObjLst(returnObjLst);
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
        tabCheckResult_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabCheckResult_ConstructorName,
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
export async function TabCheckResult_DelRecordAsync(lngmId: number): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(tabCheckResult_Controller, strAction);
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
        tabCheckResult_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabCheckResult_ConstructorName,
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
export async function TabCheckResult_DelTabCheckResultsAsync(
  arrmId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelTabCheckResultsAsync';
  const strAction = 'DelTabCheckResults';
  const strUrl = GetWebApiUrl(tabCheckResult_Controller, strAction);

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
        tabCheckResult_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabCheckResult_ConstructorName,
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
export async function TabCheckResult_DelTabCheckResultsByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelTabCheckResultsByCondAsync';
  const strAction = 'DelTabCheckResultsByCond';
  const strUrl = GetWebApiUrl(tabCheckResult_Controller, strAction);

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
        tabCheckResult_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabCheckResult_ConstructorName,
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
 * @param objTabCheckResultEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function TabCheckResult_AddNewRecordAsync(
  objTabCheckResultEN: clsTabCheckResultEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objTabCheckResultEN);
  const strUrl = GetWebApiUrl(tabCheckResult_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objTabCheckResultEN, config);
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
        tabCheckResult_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabCheckResult_ConstructorName,
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
 * @param objTabCheckResultEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function TabCheckResult_AddNewRecordWithReturnKeyAsync(
  objTabCheckResultEN: clsTabCheckResultEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(tabCheckResult_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objTabCheckResultEN, config);
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
        tabCheckResult_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabCheckResult_ConstructorName,
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
 * @param objTabCheckResultEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function TabCheckResult_UpdateRecordAsync(
  objTabCheckResultEN: clsTabCheckResultEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objTabCheckResultEN.sfUpdFldSetStr === undefined ||
    objTabCheckResultEN.sfUpdFldSetStr === null ||
    objTabCheckResultEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objTabCheckResultEN.mId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(tabCheckResult_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objTabCheckResultEN, config);
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
        tabCheckResult_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabCheckResult_ConstructorName,
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
 * @param objTabCheckResultEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function TabCheckResult_UpdateWithConditionAsync(
  objTabCheckResultEN: clsTabCheckResultEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objTabCheckResultEN.sfUpdFldSetStr === undefined ||
    objTabCheckResultEN.sfUpdFldSetStr === null ||
    objTabCheckResultEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objTabCheckResultEN.mId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(tabCheckResult_Controller, strAction);
  objTabCheckResultEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objTabCheckResultEN, config);
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
        tabCheckResult_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabCheckResult_ConstructorName,
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
export async function TabCheckResult_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(tabCheckResult_Controller, strAction);

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
        tabCheckResult_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabCheckResult_ConstructorName,
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
export async function TabCheckResult_IsExistAsync(lngmId: number): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(tabCheckResult_Controller, strAction);

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
        tabCheckResult_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabCheckResult_ConstructorName,
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
export async function TabCheckResult_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(tabCheckResult_Controller, strAction);

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
        tabCheckResult_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabCheckResult_ConstructorName,
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
export async function TabCheckResult_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(tabCheckResult_Controller, strAction);

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
        tabCheckResult_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabCheckResult_ConstructorName,
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
export function TabCheckResult_GetWebApiUrl(strController: string, strAction: string): string {
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
export function TabCheckResult_CheckPropertyNew(pobjTabCheckResultEN: clsTabCheckResultEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (
    IsNullOrEmpty(pobjTabCheckResultEN.prjId) === true ||
    pobjTabCheckResultEN.prjId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000411)字段[工程ID]不能为空(In 表检查结果)!(clsTabCheckResultBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabCheckResultEN.prjDataBaseId) === true ||
    pobjTabCheckResultEN.prjDataBaseId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000411)字段[项目数据库Id]不能为空(In 表检查结果)!(clsTabCheckResultBL:CheckPropertyNew0)',
    );
  }
  if (
    null === pobjTabCheckResultEN.errorLevelId ||
    (pobjTabCheckResultEN.errorLevelId != null &&
      pobjTabCheckResultEN.errorLevelId.toString() === '') ||
    pobjTabCheckResultEN.errorLevelId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000411)字段[错误等级Id]不能为空(In 表检查结果)!(clsTabCheckResultBL:CheckPropertyNew0)',
    );
  }
  if (IsNullOrEmpty(pobjTabCheckResultEN.errorMsg) === true) {
    throw new Error(
      '(errid:Watl000411)字段[错误信息]不能为空(In 表检查结果)!(clsTabCheckResultBL:CheckPropertyNew0)',
    );
  }
  if (IsNullOrEmpty(pobjTabCheckResultEN.tabCheckErrorTypeId) === true) {
    throw new Error(
      '(errid:Watl000411)字段[表检查错误类型Id]不能为空(In 表检查结果)!(clsTabCheckResultBL:CheckPropertyNew0)',
    );
  }
  if (IsNullOrEmpty(pobjTabCheckResultEN.checkDate) === true) {
    throw new Error(
      '(errid:Watl000411)字段[检查日期]不能为空(In 表检查结果)!(clsTabCheckResultBL:CheckPropertyNew0)',
    );
  }
  if (IsNullOrEmpty(pobjTabCheckResultEN.checkUser) === true) {
    throw new Error(
      '(errid:Watl000411)字段[检查人]不能为空(In 表检查结果)!(clsTabCheckResultBL:CheckPropertyNew0)',
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjTabCheckResultEN.prjId) == false &&
    GetStrLen(pobjTabCheckResultEN.prjId) > 4
  ) {
    throw new Error(
      '(errid:Watl000413)字段[工程ID(prjId)]的长度不能超过4(In 表检查结果(TabCheckResult))!值:$(pobjTabCheckResultEN.prjId)(clsTabCheckResultBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabCheckResultEN.prjDataBaseId) == false &&
    GetStrLen(pobjTabCheckResultEN.prjDataBaseId) > 4
  ) {
    throw new Error(
      '(errid:Watl000413)字段[项目数据库Id(prjDataBaseId)]的长度不能超过4(In 表检查结果(TabCheckResult))!值:$(pobjTabCheckResultEN.prjDataBaseId)(clsTabCheckResultBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabCheckResultEN.tabId) == false &&
    GetStrLen(pobjTabCheckResultEN.tabId) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[表ID(tabId)]的长度不能超过8(In 表检查结果(TabCheckResult))!值:$(pobjTabCheckResultEN.tabId)(clsTabCheckResultBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabCheckResultEN.fldId) == false &&
    GetStrLen(pobjTabCheckResultEN.fldId) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[字段Id(fldId)]的长度不能超过8(In 表检查结果(TabCheckResult))!值:$(pobjTabCheckResultEN.fldId)(clsTabCheckResultBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabCheckResultEN.errorMsg) == false &&
    GetStrLen(pobjTabCheckResultEN.errorMsg) > 5000
  ) {
    throw new Error(
      '(errid:Watl000413)字段[错误信息(errorMsg)]的长度不能超过5000(In 表检查结果(TabCheckResult))!值:$(pobjTabCheckResultEN.errorMsg)(clsTabCheckResultBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabCheckResultEN.tabCheckErrorTypeId) == false &&
    GetStrLen(pobjTabCheckResultEN.tabCheckErrorTypeId) > 2
  ) {
    throw new Error(
      '(errid:Watl000413)字段[表检查错误类型Id(tabCheckErrorTypeId)]的长度不能超过2(In 表检查结果(TabCheckResult))!值:$(pobjTabCheckResultEN.tabCheckErrorTypeId)(clsTabCheckResultBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabCheckResultEN.checkDate) == false &&
    GetStrLen(pobjTabCheckResultEN.checkDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[检查日期(checkDate)]的长度不能超过20(In 表检查结果(TabCheckResult))!值:$(pobjTabCheckResultEN.checkDate)(clsTabCheckResultBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabCheckResultEN.checkUser) == false &&
    GetStrLen(pobjTabCheckResultEN.checkUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[检查人(checkUser)]的长度不能超过20(In 表检查结果(TabCheckResult))!值:$(pobjTabCheckResultEN.checkUser)(clsTabCheckResultBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabCheckResultEN.memo) == false &&
    GetStrLen(pobjTabCheckResultEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In 表检查结果(TabCheckResult))!值:$(pobjTabCheckResultEN.memo)(clsTabCheckResultBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjTabCheckResultEN.mId &&
    undefined !== pobjTabCheckResultEN.mId &&
    tzDataType.isNumber(pobjTabCheckResultEN.mId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[mId(mId)]的值:[$(pobjTabCheckResultEN.mId)], 非法,应该为数值型(In 表检查结果(TabCheckResult))!(clsTabCheckResultBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabCheckResultEN.prjId) == false &&
    undefined !== pobjTabCheckResultEN.prjId &&
    tzDataType.isString(pobjTabCheckResultEN.prjId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[工程ID(prjId)]的值:[$(pobjTabCheckResultEN.prjId)], 非法,应该为字符型(In 表检查结果(TabCheckResult))!(clsTabCheckResultBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabCheckResultEN.prjDataBaseId) == false &&
    undefined !== pobjTabCheckResultEN.prjDataBaseId &&
    tzDataType.isString(pobjTabCheckResultEN.prjDataBaseId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[项目数据库Id(prjDataBaseId)]的值:[$(pobjTabCheckResultEN.prjDataBaseId)], 非法,应该为字符型(In 表检查结果(TabCheckResult))!(clsTabCheckResultBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabCheckResultEN.tabId) == false &&
    undefined !== pobjTabCheckResultEN.tabId &&
    tzDataType.isString(pobjTabCheckResultEN.tabId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[表ID(tabId)]的值:[$(pobjTabCheckResultEN.tabId)], 非法,应该为字符型(In 表检查结果(TabCheckResult))!(clsTabCheckResultBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabCheckResultEN.fldId) == false &&
    undefined !== pobjTabCheckResultEN.fldId &&
    tzDataType.isString(pobjTabCheckResultEN.fldId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[字段Id(fldId)]的值:[$(pobjTabCheckResultEN.fldId)], 非法,应该为字符型(In 表检查结果(TabCheckResult))!(clsTabCheckResultBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjTabCheckResultEN.errorLevelId &&
    undefined !== pobjTabCheckResultEN.errorLevelId &&
    tzDataType.isNumber(pobjTabCheckResultEN.errorLevelId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[错误等级Id(errorLevelId)]的值:[$(pobjTabCheckResultEN.errorLevelId)], 非法,应该为数值型(In 表检查结果(TabCheckResult))!(clsTabCheckResultBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabCheckResultEN.errorMsg) == false &&
    undefined !== pobjTabCheckResultEN.errorMsg &&
    tzDataType.isString(pobjTabCheckResultEN.errorMsg) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[错误信息(errorMsg)]的值:[$(pobjTabCheckResultEN.errorMsg)], 非法,应该为字符型(In 表检查结果(TabCheckResult))!(clsTabCheckResultBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabCheckResultEN.tabCheckErrorTypeId) == false &&
    undefined !== pobjTabCheckResultEN.tabCheckErrorTypeId &&
    tzDataType.isString(pobjTabCheckResultEN.tabCheckErrorTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[表检查错误类型Id(tabCheckErrorTypeId)]的值:[$(pobjTabCheckResultEN.tabCheckErrorTypeId)], 非法,应该为字符型(In 表检查结果(TabCheckResult))!(clsTabCheckResultBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabCheckResultEN.checkDate) == false &&
    undefined !== pobjTabCheckResultEN.checkDate &&
    tzDataType.isString(pobjTabCheckResultEN.checkDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[检查日期(checkDate)]的值:[$(pobjTabCheckResultEN.checkDate)], 非法,应该为字符型(In 表检查结果(TabCheckResult))!(clsTabCheckResultBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabCheckResultEN.checkUser) == false &&
    undefined !== pobjTabCheckResultEN.checkUser &&
    tzDataType.isString(pobjTabCheckResultEN.checkUser) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[检查人(checkUser)]的值:[$(pobjTabCheckResultEN.checkUser)], 非法,应该为字符型(In 表检查结果(TabCheckResult))!(clsTabCheckResultBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabCheckResultEN.memo) == false &&
    undefined !== pobjTabCheckResultEN.memo &&
    tzDataType.isString(pobjTabCheckResultEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[说明(memo)]的值:[$(pobjTabCheckResultEN.memo)], 非法,应该为字符型(In 表检查结果(TabCheckResult))!(clsTabCheckResultBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function TabCheckResult_CheckProperty4Update(pobjTabCheckResultEN: clsTabCheckResultEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjTabCheckResultEN.prjId) == false &&
    GetStrLen(pobjTabCheckResultEN.prjId) > 4
  ) {
    throw new Error(
      '(errid:Watl000416)字段[工程ID(prjId)]的长度不能超过4(In 表检查结果(TabCheckResult))!值:$(pobjTabCheckResultEN.prjId)(clsTabCheckResultBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabCheckResultEN.prjDataBaseId) == false &&
    GetStrLen(pobjTabCheckResultEN.prjDataBaseId) > 4
  ) {
    throw new Error(
      '(errid:Watl000416)字段[项目数据库Id(prjDataBaseId)]的长度不能超过4(In 表检查结果(TabCheckResult))!值:$(pobjTabCheckResultEN.prjDataBaseId)(clsTabCheckResultBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabCheckResultEN.tabId) == false &&
    GetStrLen(pobjTabCheckResultEN.tabId) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[表ID(tabId)]的长度不能超过8(In 表检查结果(TabCheckResult))!值:$(pobjTabCheckResultEN.tabId)(clsTabCheckResultBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabCheckResultEN.fldId) == false &&
    GetStrLen(pobjTabCheckResultEN.fldId) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[字段Id(fldId)]的长度不能超过8(In 表检查结果(TabCheckResult))!值:$(pobjTabCheckResultEN.fldId)(clsTabCheckResultBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabCheckResultEN.errorMsg) == false &&
    GetStrLen(pobjTabCheckResultEN.errorMsg) > 5000
  ) {
    throw new Error(
      '(errid:Watl000416)字段[错误信息(errorMsg)]的长度不能超过5000(In 表检查结果(TabCheckResult))!值:$(pobjTabCheckResultEN.errorMsg)(clsTabCheckResultBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabCheckResultEN.tabCheckErrorTypeId) == false &&
    GetStrLen(pobjTabCheckResultEN.tabCheckErrorTypeId) > 2
  ) {
    throw new Error(
      '(errid:Watl000416)字段[表检查错误类型Id(tabCheckErrorTypeId)]的长度不能超过2(In 表检查结果(TabCheckResult))!值:$(pobjTabCheckResultEN.tabCheckErrorTypeId)(clsTabCheckResultBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabCheckResultEN.checkDate) == false &&
    GetStrLen(pobjTabCheckResultEN.checkDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[检查日期(checkDate)]的长度不能超过20(In 表检查结果(TabCheckResult))!值:$(pobjTabCheckResultEN.checkDate)(clsTabCheckResultBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabCheckResultEN.checkUser) == false &&
    GetStrLen(pobjTabCheckResultEN.checkUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[检查人(checkUser)]的长度不能超过20(In 表检查结果(TabCheckResult))!值:$(pobjTabCheckResultEN.checkUser)(clsTabCheckResultBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabCheckResultEN.memo) == false &&
    GetStrLen(pobjTabCheckResultEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In 表检查结果(TabCheckResult))!值:$(pobjTabCheckResultEN.memo)(clsTabCheckResultBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjTabCheckResultEN.mId &&
    undefined !== pobjTabCheckResultEN.mId &&
    tzDataType.isNumber(pobjTabCheckResultEN.mId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[mId(mId)]的值:[$(pobjTabCheckResultEN.mId)], 非法,应该为数值型(In 表检查结果(TabCheckResult))!(clsTabCheckResultBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabCheckResultEN.prjId) == false &&
    undefined !== pobjTabCheckResultEN.prjId &&
    tzDataType.isString(pobjTabCheckResultEN.prjId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[工程ID(prjId)]的值:[$(pobjTabCheckResultEN.prjId)], 非法,应该为字符型(In 表检查结果(TabCheckResult))!(clsTabCheckResultBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabCheckResultEN.prjDataBaseId) == false &&
    undefined !== pobjTabCheckResultEN.prjDataBaseId &&
    tzDataType.isString(pobjTabCheckResultEN.prjDataBaseId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[项目数据库Id(prjDataBaseId)]的值:[$(pobjTabCheckResultEN.prjDataBaseId)], 非法,应该为字符型(In 表检查结果(TabCheckResult))!(clsTabCheckResultBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabCheckResultEN.tabId) == false &&
    undefined !== pobjTabCheckResultEN.tabId &&
    tzDataType.isString(pobjTabCheckResultEN.tabId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[表ID(tabId)]的值:[$(pobjTabCheckResultEN.tabId)], 非法,应该为字符型(In 表检查结果(TabCheckResult))!(clsTabCheckResultBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabCheckResultEN.fldId) == false &&
    undefined !== pobjTabCheckResultEN.fldId &&
    tzDataType.isString(pobjTabCheckResultEN.fldId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[字段Id(fldId)]的值:[$(pobjTabCheckResultEN.fldId)], 非法,应该为字符型(In 表检查结果(TabCheckResult))!(clsTabCheckResultBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjTabCheckResultEN.errorLevelId &&
    undefined !== pobjTabCheckResultEN.errorLevelId &&
    tzDataType.isNumber(pobjTabCheckResultEN.errorLevelId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[错误等级Id(errorLevelId)]的值:[$(pobjTabCheckResultEN.errorLevelId)], 非法,应该为数值型(In 表检查结果(TabCheckResult))!(clsTabCheckResultBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabCheckResultEN.errorMsg) == false &&
    undefined !== pobjTabCheckResultEN.errorMsg &&
    tzDataType.isString(pobjTabCheckResultEN.errorMsg) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[错误信息(errorMsg)]的值:[$(pobjTabCheckResultEN.errorMsg)], 非法,应该为字符型(In 表检查结果(TabCheckResult))!(clsTabCheckResultBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabCheckResultEN.tabCheckErrorTypeId) == false &&
    undefined !== pobjTabCheckResultEN.tabCheckErrorTypeId &&
    tzDataType.isString(pobjTabCheckResultEN.tabCheckErrorTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[表检查错误类型Id(tabCheckErrorTypeId)]的值:[$(pobjTabCheckResultEN.tabCheckErrorTypeId)], 非法,应该为字符型(In 表检查结果(TabCheckResult))!(clsTabCheckResultBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabCheckResultEN.checkDate) == false &&
    undefined !== pobjTabCheckResultEN.checkDate &&
    tzDataType.isString(pobjTabCheckResultEN.checkDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[检查日期(checkDate)]的值:[$(pobjTabCheckResultEN.checkDate)], 非法,应该为字符型(In 表检查结果(TabCheckResult))!(clsTabCheckResultBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabCheckResultEN.checkUser) == false &&
    undefined !== pobjTabCheckResultEN.checkUser &&
    tzDataType.isString(pobjTabCheckResultEN.checkUser) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[检查人(checkUser)]的值:[$(pobjTabCheckResultEN.checkUser)], 非法,应该为字符型(In 表检查结果(TabCheckResult))!(clsTabCheckResultBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabCheckResultEN.memo) == false &&
    undefined !== pobjTabCheckResultEN.memo &&
    tzDataType.isString(pobjTabCheckResultEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[说明(memo)]的值:[$(pobjTabCheckResultEN.memo)], 非法,应该为字符型(In 表检查结果(TabCheckResult))!(clsTabCheckResultBL:CheckProperty4Update)',
    );
  }
  //检查主键是否为Null或者空!
  if (
    null === pobjTabCheckResultEN.mId ||
    (pobjTabCheckResultEN.mId != null && pobjTabCheckResultEN.mId.toString() === '')
  ) {
    throw new Error(
      '(errid:Watl000064)字段[mId]不能为空(In 表检查结果)!(clsTabCheckResultBL:CheckProperty4Update)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2024-01-26
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function TabCheckResult_GetJSONStrByObj(pobjTabCheckResultEN: clsTabCheckResultEN): string {
  pobjTabCheckResultEN.sfUpdFldSetStr = pobjTabCheckResultEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjTabCheckResultEN);
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
 * 日期:2024-01-26
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
 */
export function TabCheckResult_GetObjLstByJSONStr(strJSON: string): Array<clsTabCheckResultEN> {
  let arrTabCheckResultObjLst = new Array<clsTabCheckResultEN>();
  if (strJSON === '') {
    return arrTabCheckResultObjLst;
  }
  try {
    arrTabCheckResultObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrTabCheckResultObjLst;
  }
  return arrTabCheckResultObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2024-01-26
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrTabCheckResultObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function TabCheckResult_GetObjLstByJSONObjLst(
  arrTabCheckResultObjLstS: Array<clsTabCheckResultEN>,
): Array<clsTabCheckResultEN> {
  const arrTabCheckResultObjLst = new Array<clsTabCheckResultEN>();
  for (const objInFor of arrTabCheckResultObjLstS) {
    const obj1 = TabCheckResult_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrTabCheckResultObjLst.push(obj1);
  }
  return arrTabCheckResultObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2024-01-26
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function TabCheckResult_GetObjByJSONStr(strJSON: string): clsTabCheckResultEN {
  let pobjTabCheckResultEN = new clsTabCheckResultEN();
  if (strJSON === '') {
    return pobjTabCheckResultEN;
  }
  try {
    pobjTabCheckResultEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjTabCheckResultEN;
  }
  return pobjTabCheckResultEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function TabCheckResult_GetCombineCondition(
  objTabCheckResultCond: clsTabCheckResultEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objTabCheckResultCond.dicFldComparisonOp,
      clsTabCheckResultEN.con_mId,
    ) == true
  ) {
    const strComparisonOpmId: string =
      objTabCheckResultCond.dicFldComparisonOp[clsTabCheckResultEN.con_mId];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsTabCheckResultEN.con_mId,
      objTabCheckResultCond.mId,
      strComparisonOpmId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objTabCheckResultCond.dicFldComparisonOp,
      clsTabCheckResultEN.con_PrjId,
    ) == true
  ) {
    const strComparisonOpPrjId: string =
      objTabCheckResultCond.dicFldComparisonOp[clsTabCheckResultEN.con_PrjId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsTabCheckResultEN.con_PrjId,
      objTabCheckResultCond.prjId,
      strComparisonOpPrjId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objTabCheckResultCond.dicFldComparisonOp,
      clsTabCheckResultEN.con_PrjDataBaseId,
    ) == true
  ) {
    const strComparisonOpPrjDataBaseId: string =
      objTabCheckResultCond.dicFldComparisonOp[clsTabCheckResultEN.con_PrjDataBaseId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsTabCheckResultEN.con_PrjDataBaseId,
      objTabCheckResultCond.prjDataBaseId,
      strComparisonOpPrjDataBaseId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objTabCheckResultCond.dicFldComparisonOp,
      clsTabCheckResultEN.con_TabId,
    ) == true
  ) {
    const strComparisonOpTabId: string =
      objTabCheckResultCond.dicFldComparisonOp[clsTabCheckResultEN.con_TabId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsTabCheckResultEN.con_TabId,
      objTabCheckResultCond.tabId,
      strComparisonOpTabId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objTabCheckResultCond.dicFldComparisonOp,
      clsTabCheckResultEN.con_FldId,
    ) == true
  ) {
    const strComparisonOpFldId: string =
      objTabCheckResultCond.dicFldComparisonOp[clsTabCheckResultEN.con_FldId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsTabCheckResultEN.con_FldId,
      objTabCheckResultCond.fldId,
      strComparisonOpFldId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objTabCheckResultCond.dicFldComparisonOp,
      clsTabCheckResultEN.con_ErrorLevelId,
    ) == true
  ) {
    const strComparisonOpErrorLevelId: string =
      objTabCheckResultCond.dicFldComparisonOp[clsTabCheckResultEN.con_ErrorLevelId];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsTabCheckResultEN.con_ErrorLevelId,
      objTabCheckResultCond.errorLevelId,
      strComparisonOpErrorLevelId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objTabCheckResultCond.dicFldComparisonOp,
      clsTabCheckResultEN.con_ErrorMsg,
    ) == true
  ) {
    const strComparisonOpErrorMsg: string =
      objTabCheckResultCond.dicFldComparisonOp[clsTabCheckResultEN.con_ErrorMsg];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsTabCheckResultEN.con_ErrorMsg,
      objTabCheckResultCond.errorMsg,
      strComparisonOpErrorMsg,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objTabCheckResultCond.dicFldComparisonOp,
      clsTabCheckResultEN.con_TabCheckErrorTypeId,
    ) == true
  ) {
    const strComparisonOpTabCheckErrorTypeId: string =
      objTabCheckResultCond.dicFldComparisonOp[clsTabCheckResultEN.con_TabCheckErrorTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsTabCheckResultEN.con_TabCheckErrorTypeId,
      objTabCheckResultCond.tabCheckErrorTypeId,
      strComparisonOpTabCheckErrorTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objTabCheckResultCond.dicFldComparisonOp,
      clsTabCheckResultEN.con_CheckDate,
    ) == true
  ) {
    const strComparisonOpCheckDate: string =
      objTabCheckResultCond.dicFldComparisonOp[clsTabCheckResultEN.con_CheckDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsTabCheckResultEN.con_CheckDate,
      objTabCheckResultCond.checkDate,
      strComparisonOpCheckDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objTabCheckResultCond.dicFldComparisonOp,
      clsTabCheckResultEN.con_CheckUser,
    ) == true
  ) {
    const strComparisonOpCheckUser: string =
      objTabCheckResultCond.dicFldComparisonOp[clsTabCheckResultEN.con_CheckUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsTabCheckResultEN.con_CheckUser,
      objTabCheckResultCond.checkUser,
      strComparisonOpCheckUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objTabCheckResultCond.dicFldComparisonOp,
      clsTabCheckResultEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objTabCheckResultCond.dicFldComparisonOp[clsTabCheckResultEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsTabCheckResultEN.con_Memo,
      objTabCheckResultCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--TabCheckResult(表检查结果),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strPrjId: 工程ID(要求唯一的字段)
 * @param strPrjDataBaseId: 项目数据库Id(要求唯一的字段)
 * @param strTabId: 表ID(要求唯一的字段)
 * @param strFldId: 字段Id(要求唯一的字段)
 * @param strErrorMsg: 错误信息(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function TabCheckResult_GetUniCondStr(objTabCheckResultEN: clsTabCheckResultEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and PrjId = '{0}'", objTabCheckResultEN.prjId);
  strWhereCond += Format(" and PrjDataBaseId = '{0}'", objTabCheckResultEN.prjDataBaseId);
  strWhereCond += Format(" and TabId = '{0}'", objTabCheckResultEN.tabId);
  strWhereCond += Format(" and FldId = '{0}'", objTabCheckResultEN.fldId);
  strWhereCond += Format(" and ErrorMsg = '{0}'", objTabCheckResultEN.errorMsg);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--TabCheckResult(表检查结果),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strPrjId: 工程ID(要求唯一的字段)
 * @param strPrjDataBaseId: 项目数据库Id(要求唯一的字段)
 * @param strTabId: 表ID(要求唯一的字段)
 * @param strFldId: 字段Id(要求唯一的字段)
 * @param strErrorMsg: 错误信息(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function TabCheckResult_GetUniCondStr4Update(
  objTabCheckResultEN: clsTabCheckResultEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and mId <> '{0}'", objTabCheckResultEN.mId);
  strWhereCond += Format(" and PrjId = '{0}'", objTabCheckResultEN.prjId);
  strWhereCond += Format(" and PrjDataBaseId = '{0}'", objTabCheckResultEN.prjDataBaseId);
  strWhereCond += Format(" and TabId = '{0}'", objTabCheckResultEN.tabId);
  strWhereCond += Format(" and FldId = '{0}'", objTabCheckResultEN.fldId);
  strWhereCond += Format(" and ErrorMsg = '{0}'", objTabCheckResultEN.errorMsg);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objTabCheckResultENS:源对象
 * @param objTabCheckResultENT:目标对象
 */
export function TabCheckResult_GetObjFromJsonObj(
  objTabCheckResultENS: clsTabCheckResultEN,
): clsTabCheckResultEN {
  const objTabCheckResultENT: clsTabCheckResultEN = new clsTabCheckResultEN();
  ObjectAssign(objTabCheckResultENT, objTabCheckResultENS);
  return objTabCheckResultENT;
}
