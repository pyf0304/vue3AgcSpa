/**
 * 类名:clsCMFunctionKeyWordWApi
 * 表名:CMFunctionKeyWord(00050515)
 * 版本:2023.10.12.1(服务器:WIN-SRV103-116)
 * 日期:2023/10/12 14:38:19
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:代码管理(CodeMan)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * CM函数关键字(CMFunctionKeyWord)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2023年10月12日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { GetStrLen, tzDataType, Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { clsCMFunctionKeyWordEN } from '@/ts/L0Entity/CodeMan/clsCMFunctionKeyWordEN';
import { GetExceptionStr, myShowErrorMsg, ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const cMFunctionKeyWord_Controller = 'CMFunctionKeyWordApi';
export const cMFunctionKeyWord_ConstructorName = 'cMFunctionKeyWord';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngmId:关键字
 * @returns 对象
 **/
export async function CMFunctionKeyWord_GetObjBymIdAsync(
  lngmId: number,
): Promise<clsCMFunctionKeyWordEN | null> {
  const strThisFuncName = 'GetObjBymIdAsync';

  if (lngmId == 0) {
    const strMsg = Format('参数:[lngmId]不能为空!(In clsCMFunctionKeyWordWApi.GetObjBymIdAsync)');
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjBymId';
  const strUrl = GetWebApiUrl(cMFunctionKeyWord_Controller, strAction);

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
      const objCMFunctionKeyWord = CMFunctionKeyWord_GetObjFromJsonObj(returnObj);
      return objCMFunctionKeyWord;
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
        cMFunctionKeyWord_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFunctionKeyWord_ConstructorName,
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
export function CMFunctionKeyWord_SortFunDefa(
  a: clsCMFunctionKeyWordEN,
  b: clsCMFunctionKeyWordEN,
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
export function CMFunctionKeyWord_SortFunDefa2Fld(
  a: clsCMFunctionKeyWordEN,
  b: clsCMFunctionKeyWordEN,
): number {
  if (a.cmFunctionId == b.cmFunctionId) return a.keyword.localeCompare(b.keyword);
  else return a.cmFunctionId.localeCompare(b.cmFunctionId);
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
export function CMFunctionKeyWord_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsCMFunctionKeyWordEN.con_mId:
        return (a: clsCMFunctionKeyWordEN, b: clsCMFunctionKeyWordEN) => {
          return a.mId - b.mId;
        };
      case clsCMFunctionKeyWordEN.con_CmFunctionId:
        return (a: clsCMFunctionKeyWordEN, b: clsCMFunctionKeyWordEN) => {
          return a.cmFunctionId.localeCompare(b.cmFunctionId);
        };
      case clsCMFunctionKeyWordEN.con_Keyword:
        return (a: clsCMFunctionKeyWordEN, b: clsCMFunctionKeyWordEN) => {
          return a.keyword.localeCompare(b.keyword);
        };
      case clsCMFunctionKeyWordEN.con_UpdDate:
        return (a: clsCMFunctionKeyWordEN, b: clsCMFunctionKeyWordEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsCMFunctionKeyWordEN.con_UpdUser:
        return (a: clsCMFunctionKeyWordEN, b: clsCMFunctionKeyWordEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsCMFunctionKeyWordEN.con_Memo:
        return (a: clsCMFunctionKeyWordEN, b: clsCMFunctionKeyWordEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      case clsCMFunctionKeyWordEN.con_IsSynchToServer:
        return (a: clsCMFunctionKeyWordEN) => {
          if (a.isSynchToServer == true) return 1;
          else return -1;
        };
      case clsCMFunctionKeyWordEN.con_SynchToServerDate:
        return (a: clsCMFunctionKeyWordEN, b: clsCMFunctionKeyWordEN) => {
          if (a.synchToServerDate == null) return -1;
          if (b.synchToServerDate == null) return 1;
          return a.synchToServerDate.localeCompare(b.synchToServerDate);
        };
      case clsCMFunctionKeyWordEN.con_SynchToServerUser:
        return (a: clsCMFunctionKeyWordEN, b: clsCMFunctionKeyWordEN) => {
          if (a.synchToServerUser == null) return -1;
          if (b.synchToServerUser == null) return 1;
          return a.synchToServerUser.localeCompare(b.synchToServerUser);
        };
      case clsCMFunctionKeyWordEN.con_IsSynchToClient:
        return (a: clsCMFunctionKeyWordEN) => {
          if (a.isSynchToClient == true) return 1;
          else return -1;
        };
      case clsCMFunctionKeyWordEN.con_SynchToClientDate:
        return (a: clsCMFunctionKeyWordEN, b: clsCMFunctionKeyWordEN) => {
          if (a.synchToClientDate == null) return -1;
          if (b.synchToClientDate == null) return 1;
          return a.synchToClientDate.localeCompare(b.synchToClientDate);
        };
      case clsCMFunctionKeyWordEN.con_SynchToClientUser:
        return (a: clsCMFunctionKeyWordEN, b: clsCMFunctionKeyWordEN) => {
          if (a.synchToClientUser == null) return -1;
          if (b.synchToClientUser == null) return 1;
          return a.synchToClientUser.localeCompare(b.synchToClientUser);
        };
      case clsCMFunctionKeyWordEN.con_SynSource:
        return (a: clsCMFunctionKeyWordEN, b: clsCMFunctionKeyWordEN) => {
          if (a.synSource == null) return -1;
          if (b.synSource == null) return 1;
          return a.synSource.localeCompare(b.synSource);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[CMFunctionKeyWord]中不存在!(in ${cMFunctionKeyWord_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsCMFunctionKeyWordEN.con_mId:
        return (a: clsCMFunctionKeyWordEN, b: clsCMFunctionKeyWordEN) => {
          return b.mId - a.mId;
        };
      case clsCMFunctionKeyWordEN.con_CmFunctionId:
        return (a: clsCMFunctionKeyWordEN, b: clsCMFunctionKeyWordEN) => {
          return b.cmFunctionId.localeCompare(a.cmFunctionId);
        };
      case clsCMFunctionKeyWordEN.con_Keyword:
        return (a: clsCMFunctionKeyWordEN, b: clsCMFunctionKeyWordEN) => {
          return b.keyword.localeCompare(a.keyword);
        };
      case clsCMFunctionKeyWordEN.con_UpdDate:
        return (a: clsCMFunctionKeyWordEN, b: clsCMFunctionKeyWordEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsCMFunctionKeyWordEN.con_UpdUser:
        return (a: clsCMFunctionKeyWordEN, b: clsCMFunctionKeyWordEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsCMFunctionKeyWordEN.con_Memo:
        return (a: clsCMFunctionKeyWordEN, b: clsCMFunctionKeyWordEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      case clsCMFunctionKeyWordEN.con_IsSynchToServer:
        return (b: clsCMFunctionKeyWordEN) => {
          if (b.isSynchToServer == true) return 1;
          else return -1;
        };
      case clsCMFunctionKeyWordEN.con_SynchToServerDate:
        return (a: clsCMFunctionKeyWordEN, b: clsCMFunctionKeyWordEN) => {
          if (b.synchToServerDate == null) return -1;
          if (a.synchToServerDate == null) return 1;
          return b.synchToServerDate.localeCompare(a.synchToServerDate);
        };
      case clsCMFunctionKeyWordEN.con_SynchToServerUser:
        return (a: clsCMFunctionKeyWordEN, b: clsCMFunctionKeyWordEN) => {
          if (b.synchToServerUser == null) return -1;
          if (a.synchToServerUser == null) return 1;
          return b.synchToServerUser.localeCompare(a.synchToServerUser);
        };
      case clsCMFunctionKeyWordEN.con_IsSynchToClient:
        return (b: clsCMFunctionKeyWordEN) => {
          if (b.isSynchToClient == true) return 1;
          else return -1;
        };
      case clsCMFunctionKeyWordEN.con_SynchToClientDate:
        return (a: clsCMFunctionKeyWordEN, b: clsCMFunctionKeyWordEN) => {
          if (b.synchToClientDate == null) return -1;
          if (a.synchToClientDate == null) return 1;
          return b.synchToClientDate.localeCompare(a.synchToClientDate);
        };
      case clsCMFunctionKeyWordEN.con_SynchToClientUser:
        return (a: clsCMFunctionKeyWordEN, b: clsCMFunctionKeyWordEN) => {
          if (b.synchToClientUser == null) return -1;
          if (a.synchToClientUser == null) return 1;
          return b.synchToClientUser.localeCompare(a.synchToClientUser);
        };
      case clsCMFunctionKeyWordEN.con_SynSource:
        return (a: clsCMFunctionKeyWordEN, b: clsCMFunctionKeyWordEN) => {
          if (b.synSource == null) return -1;
          if (a.synSource == null) return 1;
          return b.synSource.localeCompare(a.synSource);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[CMFunctionKeyWord]中不存在!(in ${cMFunctionKeyWord_ConstructorName}.${strThisFuncName})`;
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
export async function CMFunctionKeyWord_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsCMFunctionKeyWordEN.con_mId:
      return (obj: clsCMFunctionKeyWordEN) => {
        return obj.mId === value;
      };
    case clsCMFunctionKeyWordEN.con_CmFunctionId:
      return (obj: clsCMFunctionKeyWordEN) => {
        return obj.cmFunctionId === value;
      };
    case clsCMFunctionKeyWordEN.con_Keyword:
      return (obj: clsCMFunctionKeyWordEN) => {
        return obj.keyword === value;
      };
    case clsCMFunctionKeyWordEN.con_UpdDate:
      return (obj: clsCMFunctionKeyWordEN) => {
        return obj.updDate === value;
      };
    case clsCMFunctionKeyWordEN.con_UpdUser:
      return (obj: clsCMFunctionKeyWordEN) => {
        return obj.updUser === value;
      };
    case clsCMFunctionKeyWordEN.con_Memo:
      return (obj: clsCMFunctionKeyWordEN) => {
        return obj.memo === value;
      };
    case clsCMFunctionKeyWordEN.con_IsSynchToServer:
      return (obj: clsCMFunctionKeyWordEN) => {
        return obj.isSynchToServer === value;
      };
    case clsCMFunctionKeyWordEN.con_SynchToServerDate:
      return (obj: clsCMFunctionKeyWordEN) => {
        return obj.synchToServerDate === value;
      };
    case clsCMFunctionKeyWordEN.con_SynchToServerUser:
      return (obj: clsCMFunctionKeyWordEN) => {
        return obj.synchToServerUser === value;
      };
    case clsCMFunctionKeyWordEN.con_IsSynchToClient:
      return (obj: clsCMFunctionKeyWordEN) => {
        return obj.isSynchToClient === value;
      };
    case clsCMFunctionKeyWordEN.con_SynchToClientDate:
      return (obj: clsCMFunctionKeyWordEN) => {
        return obj.synchToClientDate === value;
      };
    case clsCMFunctionKeyWordEN.con_SynchToClientUser:
      return (obj: clsCMFunctionKeyWordEN) => {
        return obj.synchToClientUser === value;
      };
    case clsCMFunctionKeyWordEN.con_SynSource:
      return (obj: clsCMFunctionKeyWordEN) => {
        return obj.synSource === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[CMFunctionKeyWord]中不存在!(in ${cMFunctionKeyWord_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}
//该表没有使用Cache,不需要生成[CMFunctionKeyWord__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function CMFunctionKeyWord_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(cMFunctionKeyWord_Controller, strAction);

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
        cMFunctionKeyWord_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFunctionKeyWord_ConstructorName,
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
export async function CMFunctionKeyWord_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(cMFunctionKeyWord_Controller, strAction);

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
        cMFunctionKeyWord_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFunctionKeyWord_ConstructorName,
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
export async function CMFunctionKeyWord_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsCMFunctionKeyWordEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(cMFunctionKeyWord_Controller, strAction);

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
      const objCMFunctionKeyWord = CMFunctionKeyWord_GetObjFromJsonObj(returnObj);
      return objCMFunctionKeyWord;
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
        cMFunctionKeyWord_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFunctionKeyWord_ConstructorName,
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
export async function CMFunctionKeyWord_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsCMFunctionKeyWordEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(cMFunctionKeyWord_Controller, strAction);

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
          cMFunctionKeyWord_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = CMFunctionKeyWord_GetObjLstByJSONObjLst(returnObjLst);
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
        cMFunctionKeyWord_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFunctionKeyWord_ConstructorName,
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
export async function CMFunctionKeyWord_GetObjLstBymIdLstAsync(
  arrmId: Array<string>,
): Promise<Array<clsCMFunctionKeyWordEN>> {
  const strThisFuncName = 'GetObjLstBymIdLstAsync';
  const strAction = 'GetObjLstBymIdLst';
  const strUrl = GetWebApiUrl(cMFunctionKeyWord_Controller, strAction);

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
          cMFunctionKeyWord_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = CMFunctionKeyWord_GetObjLstByJSONObjLst(returnObjLst);
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
        cMFunctionKeyWord_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFunctionKeyWord_ConstructorName,
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
export async function CMFunctionKeyWord_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsCMFunctionKeyWordEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(cMFunctionKeyWord_Controller, strAction);

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
          cMFunctionKeyWord_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = CMFunctionKeyWord_GetObjLstByJSONObjLst(returnObjLst);
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
        cMFunctionKeyWord_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFunctionKeyWord_ConstructorName,
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
export async function CMFunctionKeyWord_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsCMFunctionKeyWordEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(cMFunctionKeyWord_Controller, strAction);

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
          cMFunctionKeyWord_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = CMFunctionKeyWord_GetObjLstByJSONObjLst(returnObjLst);
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
        cMFunctionKeyWord_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFunctionKeyWord_ConstructorName,
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
export async function CMFunctionKeyWord_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsCMFunctionKeyWordEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsCMFunctionKeyWordEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(cMFunctionKeyWord_Controller, strAction);

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
          cMFunctionKeyWord_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = CMFunctionKeyWord_GetObjLstByJSONObjLst(returnObjLst);
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
        cMFunctionKeyWord_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFunctionKeyWord_ConstructorName,
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
export async function CMFunctionKeyWord_DelRecordAsync(lngmId: number): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(cMFunctionKeyWord_Controller, strAction);
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
        cMFunctionKeyWord_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFunctionKeyWord_ConstructorName,
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
export async function CMFunctionKeyWord_DelCMFunctionKeyWordsAsync(
  arrmId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelCMFunctionKeyWordsAsync';
  const strAction = 'DelCMFunctionKeyWords';
  const strUrl = GetWebApiUrl(cMFunctionKeyWord_Controller, strAction);

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
        cMFunctionKeyWord_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFunctionKeyWord_ConstructorName,
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
export async function CMFunctionKeyWord_DelCMFunctionKeyWordsByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelCMFunctionKeyWordsByCondAsync';
  const strAction = 'DelCMFunctionKeyWordsByCond';
  const strUrl = GetWebApiUrl(cMFunctionKeyWord_Controller, strAction);

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
        cMFunctionKeyWord_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFunctionKeyWord_ConstructorName,
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
 * @param objCMFunctionKeyWordEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function CMFunctionKeyWord_AddNewRecordAsync(
  objCMFunctionKeyWordEN: clsCMFunctionKeyWordEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objCMFunctionKeyWordEN);
  const strUrl = GetWebApiUrl(cMFunctionKeyWord_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objCMFunctionKeyWordEN, config);
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
        cMFunctionKeyWord_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFunctionKeyWord_ConstructorName,
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
 * @param objCMFunctionKeyWordEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function CMFunctionKeyWord_AddNewRecordWithReturnKeyAsync(
  objCMFunctionKeyWordEN: clsCMFunctionKeyWordEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(cMFunctionKeyWord_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objCMFunctionKeyWordEN, config);
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
        cMFunctionKeyWord_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFunctionKeyWord_ConstructorName,
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
 * @param objCMFunctionKeyWordEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function CMFunctionKeyWord_UpdateRecordAsync(
  objCMFunctionKeyWordEN: clsCMFunctionKeyWordEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objCMFunctionKeyWordEN.sfUpdFldSetStr === undefined ||
    objCMFunctionKeyWordEN.sfUpdFldSetStr === null ||
    objCMFunctionKeyWordEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objCMFunctionKeyWordEN.mId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(cMFunctionKeyWord_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objCMFunctionKeyWordEN, config);
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
        cMFunctionKeyWord_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFunctionKeyWord_ConstructorName,
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
 * @param objCMFunctionKeyWordEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function CMFunctionKeyWord_UpdateWithConditionAsync(
  objCMFunctionKeyWordEN: clsCMFunctionKeyWordEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objCMFunctionKeyWordEN.sfUpdFldSetStr === undefined ||
    objCMFunctionKeyWordEN.sfUpdFldSetStr === null ||
    objCMFunctionKeyWordEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objCMFunctionKeyWordEN.mId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(cMFunctionKeyWord_Controller, strAction);
  objCMFunctionKeyWordEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objCMFunctionKeyWordEN, config);
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
        cMFunctionKeyWord_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFunctionKeyWord_ConstructorName,
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
export async function CMFunctionKeyWord_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(cMFunctionKeyWord_Controller, strAction);

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
        cMFunctionKeyWord_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFunctionKeyWord_ConstructorName,
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
export async function CMFunctionKeyWord_IsExistAsync(lngmId: number): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(cMFunctionKeyWord_Controller, strAction);

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
        cMFunctionKeyWord_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFunctionKeyWord_ConstructorName,
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
export async function CMFunctionKeyWord_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(cMFunctionKeyWord_Controller, strAction);

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
        cMFunctionKeyWord_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFunctionKeyWord_ConstructorName,
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
export async function CMFunctionKeyWord_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(cMFunctionKeyWord_Controller, strAction);

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
        cMFunctionKeyWord_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFunctionKeyWord_ConstructorName,
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
export function CMFunctionKeyWord_GetWebApiUrl(strController: string, strAction: string): string {
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
export function CMFunctionKeyWord_CheckPropertyNew(
  pobjCMFunctionKeyWordEN: clsCMFunctionKeyWordEN,
) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (
    IsNullOrEmpty(pobjCMFunctionKeyWordEN.cmFunctionId) === true ||
    pobjCMFunctionKeyWordEN.cmFunctionId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000411)字段[函数Id]不能为空(In CM函数关键字)!(clsCMFunctionKeyWordBL:CheckPropertyNew0)',
    );
  }
  if (IsNullOrEmpty(pobjCMFunctionKeyWordEN.keyword) === true) {
    throw new Error(
      '(errid:Watl000411)字段[关键字]不能为空(In CM函数关键字)!(clsCMFunctionKeyWordBL:CheckPropertyNew0)',
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjCMFunctionKeyWordEN.cmFunctionId) == false &&
    GetStrLen(pobjCMFunctionKeyWordEN.cmFunctionId) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[函数Id(cmFunctionId)]的长度不能超过8(In CM函数关键字(CMFunctionKeyWord))!值:$(pobjCMFunctionKeyWordEN.cmFunctionId)(clsCMFunctionKeyWordBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFunctionKeyWordEN.keyword) == false &&
    GetStrLen(pobjCMFunctionKeyWordEN.keyword) > 50
  ) {
    throw new Error(
      '(errid:Watl000413)字段[关键字(keyword)]的长度不能超过50(In CM函数关键字(CMFunctionKeyWord))!值:$(pobjCMFunctionKeyWordEN.keyword)(clsCMFunctionKeyWordBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFunctionKeyWordEN.updDate) == false &&
    GetStrLen(pobjCMFunctionKeyWordEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In CM函数关键字(CMFunctionKeyWord))!值:$(pobjCMFunctionKeyWordEN.updDate)(clsCMFunctionKeyWordBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFunctionKeyWordEN.updUser) == false &&
    GetStrLen(pobjCMFunctionKeyWordEN.updUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改者(updUser)]的长度不能超过20(In CM函数关键字(CMFunctionKeyWord))!值:$(pobjCMFunctionKeyWordEN.updUser)(clsCMFunctionKeyWordBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFunctionKeyWordEN.memo) == false &&
    GetStrLen(pobjCMFunctionKeyWordEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In CM函数关键字(CMFunctionKeyWord))!值:$(pobjCMFunctionKeyWordEN.memo)(clsCMFunctionKeyWordBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFunctionKeyWordEN.synchToServerDate) == false &&
    GetStrLen(pobjCMFunctionKeyWordEN.synchToServerDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[同步到Server日期(synchToServerDate)]的长度不能超过20(In CM函数关键字(CMFunctionKeyWord))!值:$(pobjCMFunctionKeyWordEN.synchToServerDate)(clsCMFunctionKeyWordBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFunctionKeyWordEN.synchToServerUser) == false &&
    GetStrLen(pobjCMFunctionKeyWordEN.synchToServerUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[同步到Server用户(synchToServerUser)]的长度不能超过20(In CM函数关键字(CMFunctionKeyWord))!值:$(pobjCMFunctionKeyWordEN.synchToServerUser)(clsCMFunctionKeyWordBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFunctionKeyWordEN.synchToClientDate) == false &&
    GetStrLen(pobjCMFunctionKeyWordEN.synchToClientDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[同步到Client库日期(synchToClientDate)]的长度不能超过20(In CM函数关键字(CMFunctionKeyWord))!值:$(pobjCMFunctionKeyWordEN.synchToClientDate)(clsCMFunctionKeyWordBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFunctionKeyWordEN.synchToClientUser) == false &&
    GetStrLen(pobjCMFunctionKeyWordEN.synchToClientUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[同步到Client库用户(synchToClientUser)]的长度不能超过20(In CM函数关键字(CMFunctionKeyWord))!值:$(pobjCMFunctionKeyWordEN.synchToClientUser)(clsCMFunctionKeyWordBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFunctionKeyWordEN.synSource) == false &&
    GetStrLen(pobjCMFunctionKeyWordEN.synSource) > 50
  ) {
    throw new Error(
      '(errid:Watl000413)字段[同步来源(synSource)]的长度不能超过50(In CM函数关键字(CMFunctionKeyWord))!值:$(pobjCMFunctionKeyWordEN.synSource)(clsCMFunctionKeyWordBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjCMFunctionKeyWordEN.mId &&
    undefined !== pobjCMFunctionKeyWordEN.mId &&
    tzDataType.isNumber(pobjCMFunctionKeyWordEN.mId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[mId(mId)]的值:[$(pobjCMFunctionKeyWordEN.mId)], 非法,应该为数值型(In CM函数关键字(CMFunctionKeyWord))!(clsCMFunctionKeyWordBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFunctionKeyWordEN.cmFunctionId) == false &&
    undefined !== pobjCMFunctionKeyWordEN.cmFunctionId &&
    tzDataType.isString(pobjCMFunctionKeyWordEN.cmFunctionId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[函数Id(cmFunctionId)]的值:[$(pobjCMFunctionKeyWordEN.cmFunctionId)], 非法,应该为字符型(In CM函数关键字(CMFunctionKeyWord))!(clsCMFunctionKeyWordBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFunctionKeyWordEN.keyword) == false &&
    undefined !== pobjCMFunctionKeyWordEN.keyword &&
    tzDataType.isString(pobjCMFunctionKeyWordEN.keyword) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[关键字(keyword)]的值:[$(pobjCMFunctionKeyWordEN.keyword)], 非法,应该为字符型(In CM函数关键字(CMFunctionKeyWord))!(clsCMFunctionKeyWordBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFunctionKeyWordEN.updDate) == false &&
    undefined !== pobjCMFunctionKeyWordEN.updDate &&
    tzDataType.isString(pobjCMFunctionKeyWordEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjCMFunctionKeyWordEN.updDate)], 非法,应该为字符型(In CM函数关键字(CMFunctionKeyWord))!(clsCMFunctionKeyWordBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFunctionKeyWordEN.updUser) == false &&
    undefined !== pobjCMFunctionKeyWordEN.updUser &&
    tzDataType.isString(pobjCMFunctionKeyWordEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改者(updUser)]的值:[$(pobjCMFunctionKeyWordEN.updUser)], 非法,应该为字符型(In CM函数关键字(CMFunctionKeyWord))!(clsCMFunctionKeyWordBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFunctionKeyWordEN.memo) == false &&
    undefined !== pobjCMFunctionKeyWordEN.memo &&
    tzDataType.isString(pobjCMFunctionKeyWordEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[说明(memo)]的值:[$(pobjCMFunctionKeyWordEN.memo)], 非法,应该为字符型(In CM函数关键字(CMFunctionKeyWord))!(clsCMFunctionKeyWordBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjCMFunctionKeyWordEN.isSynchToServer &&
    undefined !== pobjCMFunctionKeyWordEN.isSynchToServer &&
    tzDataType.isBoolean(pobjCMFunctionKeyWordEN.isSynchToServer) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否同步到Server(isSynchToServer)]的值:[$(pobjCMFunctionKeyWordEN.isSynchToServer)], 非法,应该为布尔型(In CM函数关键字(CMFunctionKeyWord))!(clsCMFunctionKeyWordBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFunctionKeyWordEN.synchToServerDate) == false &&
    undefined !== pobjCMFunctionKeyWordEN.synchToServerDate &&
    tzDataType.isString(pobjCMFunctionKeyWordEN.synchToServerDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[同步到Server日期(synchToServerDate)]的值:[$(pobjCMFunctionKeyWordEN.synchToServerDate)], 非法,应该为字符型(In CM函数关键字(CMFunctionKeyWord))!(clsCMFunctionKeyWordBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFunctionKeyWordEN.synchToServerUser) == false &&
    undefined !== pobjCMFunctionKeyWordEN.synchToServerUser &&
    tzDataType.isString(pobjCMFunctionKeyWordEN.synchToServerUser) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[同步到Server用户(synchToServerUser)]的值:[$(pobjCMFunctionKeyWordEN.synchToServerUser)], 非法,应该为字符型(In CM函数关键字(CMFunctionKeyWord))!(clsCMFunctionKeyWordBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjCMFunctionKeyWordEN.isSynchToClient &&
    undefined !== pobjCMFunctionKeyWordEN.isSynchToClient &&
    tzDataType.isBoolean(pobjCMFunctionKeyWordEN.isSynchToClient) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否同步到Client(isSynchToClient)]的值:[$(pobjCMFunctionKeyWordEN.isSynchToClient)], 非法,应该为布尔型(In CM函数关键字(CMFunctionKeyWord))!(clsCMFunctionKeyWordBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFunctionKeyWordEN.synchToClientDate) == false &&
    undefined !== pobjCMFunctionKeyWordEN.synchToClientDate &&
    tzDataType.isString(pobjCMFunctionKeyWordEN.synchToClientDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[同步到Client库日期(synchToClientDate)]的值:[$(pobjCMFunctionKeyWordEN.synchToClientDate)], 非法,应该为字符型(In CM函数关键字(CMFunctionKeyWord))!(clsCMFunctionKeyWordBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFunctionKeyWordEN.synchToClientUser) == false &&
    undefined !== pobjCMFunctionKeyWordEN.synchToClientUser &&
    tzDataType.isString(pobjCMFunctionKeyWordEN.synchToClientUser) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[同步到Client库用户(synchToClientUser)]的值:[$(pobjCMFunctionKeyWordEN.synchToClientUser)], 非法,应该为字符型(In CM函数关键字(CMFunctionKeyWord))!(clsCMFunctionKeyWordBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFunctionKeyWordEN.synSource) == false &&
    undefined !== pobjCMFunctionKeyWordEN.synSource &&
    tzDataType.isString(pobjCMFunctionKeyWordEN.synSource) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[同步来源(synSource)]的值:[$(pobjCMFunctionKeyWordEN.synSource)], 非法,应该为字符型(In CM函数关键字(CMFunctionKeyWord))!(clsCMFunctionKeyWordBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function CMFunctionKeyWord_CheckProperty4Update(
  pobjCMFunctionKeyWordEN: clsCMFunctionKeyWordEN,
) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjCMFunctionKeyWordEN.cmFunctionId) == false &&
    GetStrLen(pobjCMFunctionKeyWordEN.cmFunctionId) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[函数Id(cmFunctionId)]的长度不能超过8(In CM函数关键字(CMFunctionKeyWord))!值:$(pobjCMFunctionKeyWordEN.cmFunctionId)(clsCMFunctionKeyWordBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFunctionKeyWordEN.keyword) == false &&
    GetStrLen(pobjCMFunctionKeyWordEN.keyword) > 50
  ) {
    throw new Error(
      '(errid:Watl000416)字段[关键字(keyword)]的长度不能超过50(In CM函数关键字(CMFunctionKeyWord))!值:$(pobjCMFunctionKeyWordEN.keyword)(clsCMFunctionKeyWordBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFunctionKeyWordEN.updDate) == false &&
    GetStrLen(pobjCMFunctionKeyWordEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In CM函数关键字(CMFunctionKeyWord))!值:$(pobjCMFunctionKeyWordEN.updDate)(clsCMFunctionKeyWordBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFunctionKeyWordEN.updUser) == false &&
    GetStrLen(pobjCMFunctionKeyWordEN.updUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改者(updUser)]的长度不能超过20(In CM函数关键字(CMFunctionKeyWord))!值:$(pobjCMFunctionKeyWordEN.updUser)(clsCMFunctionKeyWordBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFunctionKeyWordEN.memo) == false &&
    GetStrLen(pobjCMFunctionKeyWordEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In CM函数关键字(CMFunctionKeyWord))!值:$(pobjCMFunctionKeyWordEN.memo)(clsCMFunctionKeyWordBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFunctionKeyWordEN.synchToServerDate) == false &&
    GetStrLen(pobjCMFunctionKeyWordEN.synchToServerDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[同步到Server日期(synchToServerDate)]的长度不能超过20(In CM函数关键字(CMFunctionKeyWord))!值:$(pobjCMFunctionKeyWordEN.synchToServerDate)(clsCMFunctionKeyWordBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFunctionKeyWordEN.synchToServerUser) == false &&
    GetStrLen(pobjCMFunctionKeyWordEN.synchToServerUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[同步到Server用户(synchToServerUser)]的长度不能超过20(In CM函数关键字(CMFunctionKeyWord))!值:$(pobjCMFunctionKeyWordEN.synchToServerUser)(clsCMFunctionKeyWordBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFunctionKeyWordEN.synchToClientDate) == false &&
    GetStrLen(pobjCMFunctionKeyWordEN.synchToClientDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[同步到Client库日期(synchToClientDate)]的长度不能超过20(In CM函数关键字(CMFunctionKeyWord))!值:$(pobjCMFunctionKeyWordEN.synchToClientDate)(clsCMFunctionKeyWordBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFunctionKeyWordEN.synchToClientUser) == false &&
    GetStrLen(pobjCMFunctionKeyWordEN.synchToClientUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[同步到Client库用户(synchToClientUser)]的长度不能超过20(In CM函数关键字(CMFunctionKeyWord))!值:$(pobjCMFunctionKeyWordEN.synchToClientUser)(clsCMFunctionKeyWordBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFunctionKeyWordEN.synSource) == false &&
    GetStrLen(pobjCMFunctionKeyWordEN.synSource) > 50
  ) {
    throw new Error(
      '(errid:Watl000416)字段[同步来源(synSource)]的长度不能超过50(In CM函数关键字(CMFunctionKeyWord))!值:$(pobjCMFunctionKeyWordEN.synSource)(clsCMFunctionKeyWordBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjCMFunctionKeyWordEN.mId &&
    undefined !== pobjCMFunctionKeyWordEN.mId &&
    tzDataType.isNumber(pobjCMFunctionKeyWordEN.mId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[mId(mId)]的值:[$(pobjCMFunctionKeyWordEN.mId)], 非法,应该为数值型(In CM函数关键字(CMFunctionKeyWord))!(clsCMFunctionKeyWordBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFunctionKeyWordEN.cmFunctionId) == false &&
    undefined !== pobjCMFunctionKeyWordEN.cmFunctionId &&
    tzDataType.isString(pobjCMFunctionKeyWordEN.cmFunctionId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[函数Id(cmFunctionId)]的值:[$(pobjCMFunctionKeyWordEN.cmFunctionId)], 非法,应该为字符型(In CM函数关键字(CMFunctionKeyWord))!(clsCMFunctionKeyWordBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFunctionKeyWordEN.keyword) == false &&
    undefined !== pobjCMFunctionKeyWordEN.keyword &&
    tzDataType.isString(pobjCMFunctionKeyWordEN.keyword) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[关键字(keyword)]的值:[$(pobjCMFunctionKeyWordEN.keyword)], 非法,应该为字符型(In CM函数关键字(CMFunctionKeyWord))!(clsCMFunctionKeyWordBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFunctionKeyWordEN.updDate) == false &&
    undefined !== pobjCMFunctionKeyWordEN.updDate &&
    tzDataType.isString(pobjCMFunctionKeyWordEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjCMFunctionKeyWordEN.updDate)], 非法,应该为字符型(In CM函数关键字(CMFunctionKeyWord))!(clsCMFunctionKeyWordBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFunctionKeyWordEN.updUser) == false &&
    undefined !== pobjCMFunctionKeyWordEN.updUser &&
    tzDataType.isString(pobjCMFunctionKeyWordEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改者(updUser)]的值:[$(pobjCMFunctionKeyWordEN.updUser)], 非法,应该为字符型(In CM函数关键字(CMFunctionKeyWord))!(clsCMFunctionKeyWordBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFunctionKeyWordEN.memo) == false &&
    undefined !== pobjCMFunctionKeyWordEN.memo &&
    tzDataType.isString(pobjCMFunctionKeyWordEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[说明(memo)]的值:[$(pobjCMFunctionKeyWordEN.memo)], 非法,应该为字符型(In CM函数关键字(CMFunctionKeyWord))!(clsCMFunctionKeyWordBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjCMFunctionKeyWordEN.isSynchToServer &&
    undefined !== pobjCMFunctionKeyWordEN.isSynchToServer &&
    tzDataType.isBoolean(pobjCMFunctionKeyWordEN.isSynchToServer) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否同步到Server(isSynchToServer)]的值:[$(pobjCMFunctionKeyWordEN.isSynchToServer)], 非法,应该为布尔型(In CM函数关键字(CMFunctionKeyWord))!(clsCMFunctionKeyWordBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFunctionKeyWordEN.synchToServerDate) == false &&
    undefined !== pobjCMFunctionKeyWordEN.synchToServerDate &&
    tzDataType.isString(pobjCMFunctionKeyWordEN.synchToServerDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[同步到Server日期(synchToServerDate)]的值:[$(pobjCMFunctionKeyWordEN.synchToServerDate)], 非法,应该为字符型(In CM函数关键字(CMFunctionKeyWord))!(clsCMFunctionKeyWordBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFunctionKeyWordEN.synchToServerUser) == false &&
    undefined !== pobjCMFunctionKeyWordEN.synchToServerUser &&
    tzDataType.isString(pobjCMFunctionKeyWordEN.synchToServerUser) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[同步到Server用户(synchToServerUser)]的值:[$(pobjCMFunctionKeyWordEN.synchToServerUser)], 非法,应该为字符型(In CM函数关键字(CMFunctionKeyWord))!(clsCMFunctionKeyWordBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjCMFunctionKeyWordEN.isSynchToClient &&
    undefined !== pobjCMFunctionKeyWordEN.isSynchToClient &&
    tzDataType.isBoolean(pobjCMFunctionKeyWordEN.isSynchToClient) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否同步到Client(isSynchToClient)]的值:[$(pobjCMFunctionKeyWordEN.isSynchToClient)], 非法,应该为布尔型(In CM函数关键字(CMFunctionKeyWord))!(clsCMFunctionKeyWordBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFunctionKeyWordEN.synchToClientDate) == false &&
    undefined !== pobjCMFunctionKeyWordEN.synchToClientDate &&
    tzDataType.isString(pobjCMFunctionKeyWordEN.synchToClientDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[同步到Client库日期(synchToClientDate)]的值:[$(pobjCMFunctionKeyWordEN.synchToClientDate)], 非法,应该为字符型(In CM函数关键字(CMFunctionKeyWord))!(clsCMFunctionKeyWordBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFunctionKeyWordEN.synchToClientUser) == false &&
    undefined !== pobjCMFunctionKeyWordEN.synchToClientUser &&
    tzDataType.isString(pobjCMFunctionKeyWordEN.synchToClientUser) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[同步到Client库用户(synchToClientUser)]的值:[$(pobjCMFunctionKeyWordEN.synchToClientUser)], 非法,应该为字符型(In CM函数关键字(CMFunctionKeyWord))!(clsCMFunctionKeyWordBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFunctionKeyWordEN.synSource) == false &&
    undefined !== pobjCMFunctionKeyWordEN.synSource &&
    tzDataType.isString(pobjCMFunctionKeyWordEN.synSource) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[同步来源(synSource)]的值:[$(pobjCMFunctionKeyWordEN.synSource)], 非法,应该为字符型(In CM函数关键字(CMFunctionKeyWord))!(clsCMFunctionKeyWordBL:CheckProperty4Update)',
    );
  }
  //检查主键是否为Null或者空!
  if (
    null === pobjCMFunctionKeyWordEN.mId ||
    (pobjCMFunctionKeyWordEN.mId != null && pobjCMFunctionKeyWordEN.mId.toString() === '')
  ) {
    throw new Error(
      '(errid:Watl000064)字段[mId]不能为空(In CM函数关键字)!(clsCMFunctionKeyWordBL:CheckProperty4Update)',
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
export function CMFunctionKeyWord_GetJSONStrByObj(
  pobjCMFunctionKeyWordEN: clsCMFunctionKeyWordEN,
): string {
  pobjCMFunctionKeyWordEN.sfUpdFldSetStr = pobjCMFunctionKeyWordEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjCMFunctionKeyWordEN);
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
export function CMFunctionKeyWord_GetObjLstByJSONStr(
  strJSON: string,
): Array<clsCMFunctionKeyWordEN> {
  let arrCMFunctionKeyWordObjLst = new Array<clsCMFunctionKeyWordEN>();
  if (strJSON === '') {
    return arrCMFunctionKeyWordObjLst;
  }
  try {
    arrCMFunctionKeyWordObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrCMFunctionKeyWordObjLst;
  }
  return arrCMFunctionKeyWordObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrCMFunctionKeyWordObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function CMFunctionKeyWord_GetObjLstByJSONObjLst(
  arrCMFunctionKeyWordObjLstS: Array<clsCMFunctionKeyWordEN>,
): Array<clsCMFunctionKeyWordEN> {
  const arrCMFunctionKeyWordObjLst = new Array<clsCMFunctionKeyWordEN>();
  for (const objInFor of arrCMFunctionKeyWordObjLstS) {
    const obj1 = CMFunctionKeyWord_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrCMFunctionKeyWordObjLst.push(obj1);
  }
  return arrCMFunctionKeyWordObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function CMFunctionKeyWord_GetObjByJSONStr(strJSON: string): clsCMFunctionKeyWordEN {
  let pobjCMFunctionKeyWordEN = new clsCMFunctionKeyWordEN();
  if (strJSON === '') {
    return pobjCMFunctionKeyWordEN;
  }
  try {
    pobjCMFunctionKeyWordEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjCMFunctionKeyWordEN;
  }
  return pobjCMFunctionKeyWordEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function CMFunctionKeyWord_GetCombineCondition(
  objCMFunctionKeyWordCond: clsCMFunctionKeyWordEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objCMFunctionKeyWordCond.dicFldComparisonOp,
      clsCMFunctionKeyWordEN.con_mId,
    ) == true
  ) {
    const strComparisonOpmId: string =
      objCMFunctionKeyWordCond.dicFldComparisonOp[clsCMFunctionKeyWordEN.con_mId];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsCMFunctionKeyWordEN.con_mId,
      objCMFunctionKeyWordCond.mId,
      strComparisonOpmId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMFunctionKeyWordCond.dicFldComparisonOp,
      clsCMFunctionKeyWordEN.con_CmFunctionId,
    ) == true
  ) {
    const strComparisonOpCmFunctionId: string =
      objCMFunctionKeyWordCond.dicFldComparisonOp[clsCMFunctionKeyWordEN.con_CmFunctionId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMFunctionKeyWordEN.con_CmFunctionId,
      objCMFunctionKeyWordCond.cmFunctionId,
      strComparisonOpCmFunctionId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMFunctionKeyWordCond.dicFldComparisonOp,
      clsCMFunctionKeyWordEN.con_Keyword,
    ) == true
  ) {
    const strComparisonOpKeyword: string =
      objCMFunctionKeyWordCond.dicFldComparisonOp[clsCMFunctionKeyWordEN.con_Keyword];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMFunctionKeyWordEN.con_Keyword,
      objCMFunctionKeyWordCond.keyword,
      strComparisonOpKeyword,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMFunctionKeyWordCond.dicFldComparisonOp,
      clsCMFunctionKeyWordEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objCMFunctionKeyWordCond.dicFldComparisonOp[clsCMFunctionKeyWordEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMFunctionKeyWordEN.con_UpdDate,
      objCMFunctionKeyWordCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMFunctionKeyWordCond.dicFldComparisonOp,
      clsCMFunctionKeyWordEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objCMFunctionKeyWordCond.dicFldComparisonOp[clsCMFunctionKeyWordEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMFunctionKeyWordEN.con_UpdUser,
      objCMFunctionKeyWordCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMFunctionKeyWordCond.dicFldComparisonOp,
      clsCMFunctionKeyWordEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objCMFunctionKeyWordCond.dicFldComparisonOp[clsCMFunctionKeyWordEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMFunctionKeyWordEN.con_Memo,
      objCMFunctionKeyWordCond.memo,
      strComparisonOpMemo,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMFunctionKeyWordCond.dicFldComparisonOp,
      clsCMFunctionKeyWordEN.con_IsSynchToServer,
    ) == true
  ) {
    if (objCMFunctionKeyWordCond.isSynchToServer == true) {
      strWhereCond += Format(" And {0} = '1'", clsCMFunctionKeyWordEN.con_IsSynchToServer);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsCMFunctionKeyWordEN.con_IsSynchToServer);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMFunctionKeyWordCond.dicFldComparisonOp,
      clsCMFunctionKeyWordEN.con_SynchToServerDate,
    ) == true
  ) {
    const strComparisonOpSynchToServerDate: string =
      objCMFunctionKeyWordCond.dicFldComparisonOp[clsCMFunctionKeyWordEN.con_SynchToServerDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMFunctionKeyWordEN.con_SynchToServerDate,
      objCMFunctionKeyWordCond.synchToServerDate,
      strComparisonOpSynchToServerDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMFunctionKeyWordCond.dicFldComparisonOp,
      clsCMFunctionKeyWordEN.con_SynchToServerUser,
    ) == true
  ) {
    const strComparisonOpSynchToServerUser: string =
      objCMFunctionKeyWordCond.dicFldComparisonOp[clsCMFunctionKeyWordEN.con_SynchToServerUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMFunctionKeyWordEN.con_SynchToServerUser,
      objCMFunctionKeyWordCond.synchToServerUser,
      strComparisonOpSynchToServerUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMFunctionKeyWordCond.dicFldComparisonOp,
      clsCMFunctionKeyWordEN.con_IsSynchToClient,
    ) == true
  ) {
    if (objCMFunctionKeyWordCond.isSynchToClient == true) {
      strWhereCond += Format(" And {0} = '1'", clsCMFunctionKeyWordEN.con_IsSynchToClient);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsCMFunctionKeyWordEN.con_IsSynchToClient);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMFunctionKeyWordCond.dicFldComparisonOp,
      clsCMFunctionKeyWordEN.con_SynchToClientDate,
    ) == true
  ) {
    const strComparisonOpSynchToClientDate: string =
      objCMFunctionKeyWordCond.dicFldComparisonOp[clsCMFunctionKeyWordEN.con_SynchToClientDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMFunctionKeyWordEN.con_SynchToClientDate,
      objCMFunctionKeyWordCond.synchToClientDate,
      strComparisonOpSynchToClientDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMFunctionKeyWordCond.dicFldComparisonOp,
      clsCMFunctionKeyWordEN.con_SynchToClientUser,
    ) == true
  ) {
    const strComparisonOpSynchToClientUser: string =
      objCMFunctionKeyWordCond.dicFldComparisonOp[clsCMFunctionKeyWordEN.con_SynchToClientUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMFunctionKeyWordEN.con_SynchToClientUser,
      objCMFunctionKeyWordCond.synchToClientUser,
      strComparisonOpSynchToClientUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMFunctionKeyWordCond.dicFldComparisonOp,
      clsCMFunctionKeyWordEN.con_SynSource,
    ) == true
  ) {
    const strComparisonOpSynSource: string =
      objCMFunctionKeyWordCond.dicFldComparisonOp[clsCMFunctionKeyWordEN.con_SynSource];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMFunctionKeyWordEN.con_SynSource,
      objCMFunctionKeyWordCond.synSource,
      strComparisonOpSynSource,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--CMFunctionKeyWord(CM函数关键字),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strCmFunctionId: 函数Id(要求唯一的字段)
 * @param strKeyword: 关键字(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function CMFunctionKeyWord_GetUniCondStr(
  objCMFunctionKeyWordEN: clsCMFunctionKeyWordEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and CmFunctionId = '{0}'", objCMFunctionKeyWordEN.cmFunctionId);
  strWhereCond += Format(" and Keyword = '{0}'", objCMFunctionKeyWordEN.keyword);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--CMFunctionKeyWord(CM函数关键字),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strCmFunctionId: 函数Id(要求唯一的字段)
 * @param strKeyword: 关键字(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function CMFunctionKeyWord_GetUniCondStr4Update(
  objCMFunctionKeyWordEN: clsCMFunctionKeyWordEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and mId <> '{0}'", objCMFunctionKeyWordEN.mId);
  strWhereCond += Format(" and CmFunctionId = '{0}'", objCMFunctionKeyWordEN.cmFunctionId);
  strWhereCond += Format(" and Keyword = '{0}'", objCMFunctionKeyWordEN.keyword);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objCMFunctionKeyWordENS:源对象
 * @param objCMFunctionKeyWordENT:目标对象
 */
export function CMFunctionKeyWord_GetObjFromJsonObj(
  objCMFunctionKeyWordENS: clsCMFunctionKeyWordEN,
): clsCMFunctionKeyWordEN {
  const objCMFunctionKeyWordENT: clsCMFunctionKeyWordEN = new clsCMFunctionKeyWordEN();
  ObjectAssign(objCMFunctionKeyWordENT, objCMFunctionKeyWordENS);
  return objCMFunctionKeyWordENT;
}
