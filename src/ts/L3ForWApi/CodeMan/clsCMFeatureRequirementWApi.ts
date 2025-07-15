/**
 * 类名:clsCMFeatureRequirementWApi
 * 表名:CMFeatureRequirement(00050520)
 * 版本:2024.01.20.1(服务器:WIN-SRV103-116)
 * 日期:2024/01/23 16:49:34
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
 * CM功能需求关系(CMFeatureRequirement)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2024年01月23日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { clsOrderByData } from '@/ts/PubFun/clsOrderByData';
import { GetStrLen, tzDataType, Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { clsCMFeatureRequirementEN } from '@/ts/L0Entity/CodeMan/clsCMFeatureRequirementEN';
import { GetExceptionStr, myShowErrorMsg, ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const cMFeatureRequirement_Controller = 'CMFeatureRequirementApi';
export const cMFeatureRequirement_ConstructorName = 'cMFeatureRequirement';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngmId:关键字
 * @returns 对象
 **/
export async function CMFeatureRequirement_GetObjBymIdAsync(
  lngmId: number,
): Promise<clsCMFeatureRequirementEN | null> {
  const strThisFuncName = 'GetObjBymIdAsync';

  if (lngmId == 0) {
    const strMsg = Format(
      '参数:[lngmId]不能为空!(In clsCMFeatureRequirementWApi.GetObjBymIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjBymId';
  const strUrl = GetWebApiUrl(cMFeatureRequirement_Controller, strAction);

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
      const objCMFeatureRequirement = CMFeatureRequirement_GetObjFromJsonObj(returnObj);
      return objCMFeatureRequirement;
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
        cMFeatureRequirement_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFeatureRequirement_ConstructorName,
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
export function CMFeatureRequirement_SortFunDefa(
  a: clsCMFeatureRequirementEN,
  b: clsCMFeatureRequirementEN,
): number {
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
export function CMFeatureRequirement_SortFunDefa2Fld(
  a: clsCMFeatureRequirementEN,
  b: clsCMFeatureRequirementEN,
): number {
  if (a.cmFeatureId == b.cmFeatureId) return a.reqId.localeCompare(b.reqId);
  else return a.cmFeatureId.localeCompare(b.cmFeatureId);
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
export function CMFeatureRequirement_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsCMFeatureRequirementEN.con_mId:
        return (a: clsCMFeatureRequirementEN, b: clsCMFeatureRequirementEN) => {
          return a.mId - b.mId;
        };
      case clsCMFeatureRequirementEN.con_CmFeatureId:
        return (a: clsCMFeatureRequirementEN, b: clsCMFeatureRequirementEN) => {
          return a.cmFeatureId.localeCompare(b.cmFeatureId);
        };
      case clsCMFeatureRequirementEN.con_ReqId:
        return (a: clsCMFeatureRequirementEN, b: clsCMFeatureRequirementEN) => {
          return a.reqId.localeCompare(b.reqId);
        };
      case clsCMFeatureRequirementEN.con_OrderNum:
        return (a: clsCMFeatureRequirementEN, b: clsCMFeatureRequirementEN) => {
          return a.orderNum - b.orderNum;
        };
      case clsCMFeatureRequirementEN.con_PrjId:
        return (a: clsCMFeatureRequirementEN, b: clsCMFeatureRequirementEN) => {
          return a.prjId.localeCompare(b.prjId);
        };
      case clsCMFeatureRequirementEN.con_UpdDate:
        return (a: clsCMFeatureRequirementEN, b: clsCMFeatureRequirementEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsCMFeatureRequirementEN.con_UpdUser:
        return (a: clsCMFeatureRequirementEN, b: clsCMFeatureRequirementEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsCMFeatureRequirementEN.con_Memo:
        return (a: clsCMFeatureRequirementEN, b: clsCMFeatureRequirementEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      case clsCMFeatureRequirementEN.con_IsSynchToServer:
        return (a: clsCMFeatureRequirementEN) => {
          if (a.isSynchToServer == true) return 1;
          else return -1;
        };
      case clsCMFeatureRequirementEN.con_SynchToServerDate:
        return (a: clsCMFeatureRequirementEN, b: clsCMFeatureRequirementEN) => {
          if (a.synchToServerDate == null) return -1;
          if (b.synchToServerDate == null) return 1;
          return a.synchToServerDate.localeCompare(b.synchToServerDate);
        };
      case clsCMFeatureRequirementEN.con_SynchToServerUser:
        return (a: clsCMFeatureRequirementEN, b: clsCMFeatureRequirementEN) => {
          if (a.synchToServerUser == null) return -1;
          if (b.synchToServerUser == null) return 1;
          return a.synchToServerUser.localeCompare(b.synchToServerUser);
        };
      case clsCMFeatureRequirementEN.con_IsSynchToClient:
        return (a: clsCMFeatureRequirementEN) => {
          if (a.isSynchToClient == true) return 1;
          else return -1;
        };
      case clsCMFeatureRequirementEN.con_SynchToClientDate:
        return (a: clsCMFeatureRequirementEN, b: clsCMFeatureRequirementEN) => {
          if (a.synchToClientDate == null) return -1;
          if (b.synchToClientDate == null) return 1;
          return a.synchToClientDate.localeCompare(b.synchToClientDate);
        };
      case clsCMFeatureRequirementEN.con_SynchToClientUser:
        return (a: clsCMFeatureRequirementEN, b: clsCMFeatureRequirementEN) => {
          if (a.synchToClientUser == null) return -1;
          if (b.synchToClientUser == null) return 1;
          return a.synchToClientUser.localeCompare(b.synchToClientUser);
        };
      case clsCMFeatureRequirementEN.con_SynSource:
        return (a: clsCMFeatureRequirementEN, b: clsCMFeatureRequirementEN) => {
          if (a.synSource == null) return -1;
          if (b.synSource == null) return 1;
          return a.synSource.localeCompare(b.synSource);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[CMFeatureRequirement]中不存在!(in ${cMFeatureRequirement_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsCMFeatureRequirementEN.con_mId:
        return (a: clsCMFeatureRequirementEN, b: clsCMFeatureRequirementEN) => {
          return b.mId - a.mId;
        };
      case clsCMFeatureRequirementEN.con_CmFeatureId:
        return (a: clsCMFeatureRequirementEN, b: clsCMFeatureRequirementEN) => {
          return b.cmFeatureId.localeCompare(a.cmFeatureId);
        };
      case clsCMFeatureRequirementEN.con_ReqId:
        return (a: clsCMFeatureRequirementEN, b: clsCMFeatureRequirementEN) => {
          return b.reqId.localeCompare(a.reqId);
        };
      case clsCMFeatureRequirementEN.con_OrderNum:
        return (a: clsCMFeatureRequirementEN, b: clsCMFeatureRequirementEN) => {
          return b.orderNum - a.orderNum;
        };
      case clsCMFeatureRequirementEN.con_PrjId:
        return (a: clsCMFeatureRequirementEN, b: clsCMFeatureRequirementEN) => {
          return b.prjId.localeCompare(a.prjId);
        };
      case clsCMFeatureRequirementEN.con_UpdDate:
        return (a: clsCMFeatureRequirementEN, b: clsCMFeatureRequirementEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsCMFeatureRequirementEN.con_UpdUser:
        return (a: clsCMFeatureRequirementEN, b: clsCMFeatureRequirementEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsCMFeatureRequirementEN.con_Memo:
        return (a: clsCMFeatureRequirementEN, b: clsCMFeatureRequirementEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      case clsCMFeatureRequirementEN.con_IsSynchToServer:
        return (b: clsCMFeatureRequirementEN) => {
          if (b.isSynchToServer == true) return 1;
          else return -1;
        };
      case clsCMFeatureRequirementEN.con_SynchToServerDate:
        return (a: clsCMFeatureRequirementEN, b: clsCMFeatureRequirementEN) => {
          if (b.synchToServerDate == null) return -1;
          if (a.synchToServerDate == null) return 1;
          return b.synchToServerDate.localeCompare(a.synchToServerDate);
        };
      case clsCMFeatureRequirementEN.con_SynchToServerUser:
        return (a: clsCMFeatureRequirementEN, b: clsCMFeatureRequirementEN) => {
          if (b.synchToServerUser == null) return -1;
          if (a.synchToServerUser == null) return 1;
          return b.synchToServerUser.localeCompare(a.synchToServerUser);
        };
      case clsCMFeatureRequirementEN.con_IsSynchToClient:
        return (b: clsCMFeatureRequirementEN) => {
          if (b.isSynchToClient == true) return 1;
          else return -1;
        };
      case clsCMFeatureRequirementEN.con_SynchToClientDate:
        return (a: clsCMFeatureRequirementEN, b: clsCMFeatureRequirementEN) => {
          if (b.synchToClientDate == null) return -1;
          if (a.synchToClientDate == null) return 1;
          return b.synchToClientDate.localeCompare(a.synchToClientDate);
        };
      case clsCMFeatureRequirementEN.con_SynchToClientUser:
        return (a: clsCMFeatureRequirementEN, b: clsCMFeatureRequirementEN) => {
          if (b.synchToClientUser == null) return -1;
          if (a.synchToClientUser == null) return 1;
          return b.synchToClientUser.localeCompare(a.synchToClientUser);
        };
      case clsCMFeatureRequirementEN.con_SynSource:
        return (a: clsCMFeatureRequirementEN, b: clsCMFeatureRequirementEN) => {
          if (b.synSource == null) return -1;
          if (a.synSource == null) return 1;
          return b.synSource.localeCompare(a.synSource);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[CMFeatureRequirement]中不存在!(in ${cMFeatureRequirement_ConstructorName}.${strThisFuncName})`;
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
export async function CMFeatureRequirement_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsCMFeatureRequirementEN.con_mId:
      return (obj: clsCMFeatureRequirementEN) => {
        return obj.mId === value;
      };
    case clsCMFeatureRequirementEN.con_CmFeatureId:
      return (obj: clsCMFeatureRequirementEN) => {
        return obj.cmFeatureId === value;
      };
    case clsCMFeatureRequirementEN.con_ReqId:
      return (obj: clsCMFeatureRequirementEN) => {
        return obj.reqId === value;
      };
    case clsCMFeatureRequirementEN.con_OrderNum:
      return (obj: clsCMFeatureRequirementEN) => {
        return obj.orderNum === value;
      };
    case clsCMFeatureRequirementEN.con_PrjId:
      return (obj: clsCMFeatureRequirementEN) => {
        return obj.prjId === value;
      };
    case clsCMFeatureRequirementEN.con_UpdDate:
      return (obj: clsCMFeatureRequirementEN) => {
        return obj.updDate === value;
      };
    case clsCMFeatureRequirementEN.con_UpdUser:
      return (obj: clsCMFeatureRequirementEN) => {
        return obj.updUser === value;
      };
    case clsCMFeatureRequirementEN.con_Memo:
      return (obj: clsCMFeatureRequirementEN) => {
        return obj.memo === value;
      };
    case clsCMFeatureRequirementEN.con_IsSynchToServer:
      return (obj: clsCMFeatureRequirementEN) => {
        return obj.isSynchToServer === value;
      };
    case clsCMFeatureRequirementEN.con_SynchToServerDate:
      return (obj: clsCMFeatureRequirementEN) => {
        return obj.synchToServerDate === value;
      };
    case clsCMFeatureRequirementEN.con_SynchToServerUser:
      return (obj: clsCMFeatureRequirementEN) => {
        return obj.synchToServerUser === value;
      };
    case clsCMFeatureRequirementEN.con_IsSynchToClient:
      return (obj: clsCMFeatureRequirementEN) => {
        return obj.isSynchToClient === value;
      };
    case clsCMFeatureRequirementEN.con_SynchToClientDate:
      return (obj: clsCMFeatureRequirementEN) => {
        return obj.synchToClientDate === value;
      };
    case clsCMFeatureRequirementEN.con_SynchToClientUser:
      return (obj: clsCMFeatureRequirementEN) => {
        return obj.synchToClientUser === value;
      };
    case clsCMFeatureRequirementEN.con_SynSource:
      return (obj: clsCMFeatureRequirementEN) => {
        return obj.synSource === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[CMFeatureRequirement]中不存在!(in ${cMFeatureRequirement_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}
//该表没有使用Cache,不需要生成[CMFeatureRequirement__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function CMFeatureRequirement_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(cMFeatureRequirement_Controller, strAction);

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
        cMFeatureRequirement_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFeatureRequirement_ConstructorName,
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
export async function CMFeatureRequirement_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(cMFeatureRequirement_Controller, strAction);

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
        cMFeatureRequirement_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFeatureRequirement_ConstructorName,
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
export async function CMFeatureRequirement_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsCMFeatureRequirementEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(cMFeatureRequirement_Controller, strAction);

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
      const objCMFeatureRequirement = CMFeatureRequirement_GetObjFromJsonObj(returnObj);
      return objCMFeatureRequirement;
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
        cMFeatureRequirement_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFeatureRequirement_ConstructorName,
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
export async function CMFeatureRequirement_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsCMFeatureRequirementEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(cMFeatureRequirement_Controller, strAction);

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
          cMFeatureRequirement_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = CMFeatureRequirement_GetObjLstByJSONObjLst(returnObjLst);
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
        cMFeatureRequirement_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFeatureRequirement_ConstructorName,
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
export async function CMFeatureRequirement_GetObjLstBymIdLstAsync(
  arrmId: Array<string>,
): Promise<Array<clsCMFeatureRequirementEN>> {
  const strThisFuncName = 'GetObjLstBymIdLstAsync';
  const strAction = 'GetObjLstBymIdLst';
  const strUrl = GetWebApiUrl(cMFeatureRequirement_Controller, strAction);

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
          cMFeatureRequirement_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = CMFeatureRequirement_GetObjLstByJSONObjLst(returnObjLst);
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
        cMFeatureRequirement_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFeatureRequirement_ConstructorName,
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
export async function CMFeatureRequirement_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsCMFeatureRequirementEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(cMFeatureRequirement_Controller, strAction);

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
          cMFeatureRequirement_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = CMFeatureRequirement_GetObjLstByJSONObjLst(returnObjLst);
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
        cMFeatureRequirement_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFeatureRequirement_ConstructorName,
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
export async function CMFeatureRequirement_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsCMFeatureRequirementEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(cMFeatureRequirement_Controller, strAction);

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
          cMFeatureRequirement_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = CMFeatureRequirement_GetObjLstByJSONObjLst(returnObjLst);
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
        cMFeatureRequirement_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFeatureRequirement_ConstructorName,
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
export async function CMFeatureRequirement_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsCMFeatureRequirementEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsCMFeatureRequirementEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(cMFeatureRequirement_Controller, strAction);

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
          cMFeatureRequirement_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = CMFeatureRequirement_GetObjLstByJSONObjLst(returnObjLst);
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
        cMFeatureRequirement_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFeatureRequirement_ConstructorName,
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
export async function CMFeatureRequirement_DelRecordAsync(lngmId: number): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(cMFeatureRequirement_Controller, strAction);
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
        cMFeatureRequirement_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFeatureRequirement_ConstructorName,
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
export async function CMFeatureRequirement_DelCMFeatureRequirementsAsync(
  arrmId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelCMFeatureRequirementsAsync';
  const strAction = 'DelCMFeatureRequirements';
  const strUrl = GetWebApiUrl(cMFeatureRequirement_Controller, strAction);

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
        cMFeatureRequirement_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFeatureRequirement_ConstructorName,
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
export async function CMFeatureRequirement_DelCMFeatureRequirementsByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelCMFeatureRequirementsByCondAsync';
  const strAction = 'DelCMFeatureRequirementsByCond';
  const strUrl = GetWebApiUrl(cMFeatureRequirement_Controller, strAction);

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
        cMFeatureRequirement_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFeatureRequirement_ConstructorName,
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
 * @param objCMFeatureRequirementEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function CMFeatureRequirement_AddNewRecordAsync(
  objCMFeatureRequirementEN: clsCMFeatureRequirementEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objCMFeatureRequirementEN);
  const strUrl = GetWebApiUrl(cMFeatureRequirement_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objCMFeatureRequirementEN, config);
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
        cMFeatureRequirement_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFeatureRequirement_ConstructorName,
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
 * @param objCMFeatureRequirementEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function CMFeatureRequirement_GoTopAsync(
  objOrderByData: clsOrderByData,
): Promise<boolean> {
  const strThisFuncName = 'GoTopAsync';
  let strMsg = '';
  const strAction = 'GoTop';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表置顶时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(cMFeatureRequirement_Controller, strAction);

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
        cMFeatureRequirement_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFeatureRequirement_ConstructorName,
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
 * @param objCMFeatureRequirementEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function CMFeatureRequirement_UpMoveAsync(
  objOrderByData: clsOrderByData,
): Promise<boolean> {
  const strThisFuncName = 'UpMoveAsync';
  let strMsg = '';
  const strAction = 'UpMove';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表上移时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objCMFeatureRequirementEN);
  const strUrl = GetWebApiUrl(cMFeatureRequirement_Controller, strAction);

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
        cMFeatureRequirement_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFeatureRequirement_ConstructorName,
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
 * @param objCMFeatureRequirementEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function CMFeatureRequirement_DownMoveAsync(
  objOrderByData: clsOrderByData,
): Promise<boolean> {
  const strThisFuncName = 'DownMoveAsync';
  let strMsg = '';
  const strAction = 'DownMove';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表下移时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objCMFeatureRequirementEN);
  const strUrl = GetWebApiUrl(cMFeatureRequirement_Controller, strAction);

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
        cMFeatureRequirement_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFeatureRequirement_ConstructorName,
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
 * @param objCMFeatureRequirementEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function CMFeatureRequirement_GoBottomAsync(
  objOrderByData: clsOrderByData,
): Promise<boolean> {
  const strThisFuncName = 'GoBottomAsync';
  let strMsg = '';
  const strAction = 'GoBottom';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表置底时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objCMFeatureRequirementEN);
  const strUrl = GetWebApiUrl(cMFeatureRequirement_Controller, strAction);

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
        cMFeatureRequirement_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFeatureRequirement_ConstructorName,
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
 * @param objCMFeatureRequirementEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function CMFeatureRequirement_ReOrderAsync(
  objOrderByData: clsOrderByData,
): Promise<boolean> {
  const strThisFuncName = 'ReOrderAsync';
  const strAction = 'ReOrder';
  //var strJSON = JSON.stringify(objCMFeatureRequirementEN);
  const strUrl = GetWebApiUrl(cMFeatureRequirement_Controller, strAction);

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
        cMFeatureRequirement_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFeatureRequirement_ConstructorName,
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
 * @param objCMFeatureRequirementEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function CMFeatureRequirement_AddNewRecordWithReturnKeyAsync(
  objCMFeatureRequirementEN: clsCMFeatureRequirementEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(cMFeatureRequirement_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objCMFeatureRequirementEN, config);
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
        cMFeatureRequirement_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFeatureRequirement_ConstructorName,
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
 * @param objCMFeatureRequirementEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function CMFeatureRequirement_UpdateRecordAsync(
  objCMFeatureRequirementEN: clsCMFeatureRequirementEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objCMFeatureRequirementEN.sfUpdFldSetStr === undefined ||
    objCMFeatureRequirementEN.sfUpdFldSetStr === null ||
    objCMFeatureRequirementEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objCMFeatureRequirementEN.mId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(cMFeatureRequirement_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objCMFeatureRequirementEN, config);
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
        cMFeatureRequirement_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFeatureRequirement_ConstructorName,
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
 * @param objCMFeatureRequirementEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function CMFeatureRequirement_UpdateWithConditionAsync(
  objCMFeatureRequirementEN: clsCMFeatureRequirementEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objCMFeatureRequirementEN.sfUpdFldSetStr === undefined ||
    objCMFeatureRequirementEN.sfUpdFldSetStr === null ||
    objCMFeatureRequirementEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objCMFeatureRequirementEN.mId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(cMFeatureRequirement_Controller, strAction);
  objCMFeatureRequirementEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objCMFeatureRequirementEN, config);
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
        cMFeatureRequirement_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFeatureRequirement_ConstructorName,
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
export async function CMFeatureRequirement_IsExistRecordAsync(
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(cMFeatureRequirement_Controller, strAction);

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
        cMFeatureRequirement_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFeatureRequirement_ConstructorName,
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
export async function CMFeatureRequirement_IsExistAsync(lngmId: number): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(cMFeatureRequirement_Controller, strAction);

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
        cMFeatureRequirement_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFeatureRequirement_ConstructorName,
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
export async function CMFeatureRequirement_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(cMFeatureRequirement_Controller, strAction);

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
        cMFeatureRequirement_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFeatureRequirement_ConstructorName,
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
export async function CMFeatureRequirement_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(cMFeatureRequirement_Controller, strAction);

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
        cMFeatureRequirement_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFeatureRequirement_ConstructorName,
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
export function CMFeatureRequirement_GetWebApiUrl(
  strController: string,
  strAction: string,
): string {
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
export function CMFeatureRequirement_CheckPropertyNew(
  pobjCMFeatureRequirementEN: clsCMFeatureRequirementEN,
) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (
    IsNullOrEmpty(pobjCMFeatureRequirementEN.cmFeatureId) === true ||
    pobjCMFeatureRequirementEN.cmFeatureId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000411)字段[功能Id]不能为空(In CM功能需求关系)!(clsCMFeatureRequirementBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFeatureRequirementEN.reqId) === true ||
    pobjCMFeatureRequirementEN.reqId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000411)字段[需求Id]不能为空(In CM功能需求关系)!(clsCMFeatureRequirementBL:CheckPropertyNew0)',
    );
  }
  if (
    null === pobjCMFeatureRequirementEN.orderNum ||
    (pobjCMFeatureRequirementEN.orderNum != null &&
      pobjCMFeatureRequirementEN.orderNum.toString() === '')
  ) {
    throw new Error(
      '(errid:Watl000411)字段[序号]不能为空(In CM功能需求关系)!(clsCMFeatureRequirementBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFeatureRequirementEN.prjId) === true ||
    pobjCMFeatureRequirementEN.prjId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000411)字段[工程ID]不能为空(In CM功能需求关系)!(clsCMFeatureRequirementBL:CheckPropertyNew0)',
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjCMFeatureRequirementEN.cmFeatureId) == false &&
    GetStrLen(pobjCMFeatureRequirementEN.cmFeatureId) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[功能Id(cmFeatureId)]的长度不能超过8(In CM功能需求关系(CMFeatureRequirement))!值:$(pobjCMFeatureRequirementEN.cmFeatureId)(clsCMFeatureRequirementBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFeatureRequirementEN.reqId) == false &&
    GetStrLen(pobjCMFeatureRequirementEN.reqId) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[需求Id(reqId)]的长度不能超过8(In CM功能需求关系(CMFeatureRequirement))!值:$(pobjCMFeatureRequirementEN.reqId)(clsCMFeatureRequirementBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFeatureRequirementEN.prjId) == false &&
    GetStrLen(pobjCMFeatureRequirementEN.prjId) > 4
  ) {
    throw new Error(
      '(errid:Watl000413)字段[工程ID(prjId)]的长度不能超过4(In CM功能需求关系(CMFeatureRequirement))!值:$(pobjCMFeatureRequirementEN.prjId)(clsCMFeatureRequirementBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFeatureRequirementEN.updDate) == false &&
    GetStrLen(pobjCMFeatureRequirementEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In CM功能需求关系(CMFeatureRequirement))!值:$(pobjCMFeatureRequirementEN.updDate)(clsCMFeatureRequirementBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFeatureRequirementEN.updUser) == false &&
    GetStrLen(pobjCMFeatureRequirementEN.updUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改者(updUser)]的长度不能超过20(In CM功能需求关系(CMFeatureRequirement))!值:$(pobjCMFeatureRequirementEN.updUser)(clsCMFeatureRequirementBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFeatureRequirementEN.memo) == false &&
    GetStrLen(pobjCMFeatureRequirementEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In CM功能需求关系(CMFeatureRequirement))!值:$(pobjCMFeatureRequirementEN.memo)(clsCMFeatureRequirementBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFeatureRequirementEN.synchToServerDate) == false &&
    GetStrLen(pobjCMFeatureRequirementEN.synchToServerDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[同步到Server日期(synchToServerDate)]的长度不能超过20(In CM功能需求关系(CMFeatureRequirement))!值:$(pobjCMFeatureRequirementEN.synchToServerDate)(clsCMFeatureRequirementBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFeatureRequirementEN.synchToServerUser) == false &&
    GetStrLen(pobjCMFeatureRequirementEN.synchToServerUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[同步到Server用户(synchToServerUser)]的长度不能超过20(In CM功能需求关系(CMFeatureRequirement))!值:$(pobjCMFeatureRequirementEN.synchToServerUser)(clsCMFeatureRequirementBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFeatureRequirementEN.synchToClientDate) == false &&
    GetStrLen(pobjCMFeatureRequirementEN.synchToClientDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[同步到Client库日期(synchToClientDate)]的长度不能超过20(In CM功能需求关系(CMFeatureRequirement))!值:$(pobjCMFeatureRequirementEN.synchToClientDate)(clsCMFeatureRequirementBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFeatureRequirementEN.synchToClientUser) == false &&
    GetStrLen(pobjCMFeatureRequirementEN.synchToClientUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[同步到Client库用户(synchToClientUser)]的长度不能超过20(In CM功能需求关系(CMFeatureRequirement))!值:$(pobjCMFeatureRequirementEN.synchToClientUser)(clsCMFeatureRequirementBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFeatureRequirementEN.synSource) == false &&
    GetStrLen(pobjCMFeatureRequirementEN.synSource) > 50
  ) {
    throw new Error(
      '(errid:Watl000413)字段[同步来源(synSource)]的长度不能超过50(In CM功能需求关系(CMFeatureRequirement))!值:$(pobjCMFeatureRequirementEN.synSource)(clsCMFeatureRequirementBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjCMFeatureRequirementEN.mId &&
    undefined !== pobjCMFeatureRequirementEN.mId &&
    tzDataType.isNumber(pobjCMFeatureRequirementEN.mId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[mId(mId)]的值:[$(pobjCMFeatureRequirementEN.mId)], 非法,应该为数值型(In CM功能需求关系(CMFeatureRequirement))!(clsCMFeatureRequirementBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFeatureRequirementEN.cmFeatureId) == false &&
    undefined !== pobjCMFeatureRequirementEN.cmFeatureId &&
    tzDataType.isString(pobjCMFeatureRequirementEN.cmFeatureId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[功能Id(cmFeatureId)]的值:[$(pobjCMFeatureRequirementEN.cmFeatureId)], 非法,应该为字符型(In CM功能需求关系(CMFeatureRequirement))!(clsCMFeatureRequirementBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFeatureRequirementEN.reqId) == false &&
    undefined !== pobjCMFeatureRequirementEN.reqId &&
    tzDataType.isString(pobjCMFeatureRequirementEN.reqId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[需求Id(reqId)]的值:[$(pobjCMFeatureRequirementEN.reqId)], 非法,应该为字符型(In CM功能需求关系(CMFeatureRequirement))!(clsCMFeatureRequirementBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjCMFeatureRequirementEN.orderNum &&
    undefined !== pobjCMFeatureRequirementEN.orderNum &&
    tzDataType.isNumber(pobjCMFeatureRequirementEN.orderNum) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[序号(orderNum)]的值:[$(pobjCMFeatureRequirementEN.orderNum)], 非法,应该为数值型(In CM功能需求关系(CMFeatureRequirement))!(clsCMFeatureRequirementBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFeatureRequirementEN.prjId) == false &&
    undefined !== pobjCMFeatureRequirementEN.prjId &&
    tzDataType.isString(pobjCMFeatureRequirementEN.prjId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[工程ID(prjId)]的值:[$(pobjCMFeatureRequirementEN.prjId)], 非法,应该为字符型(In CM功能需求关系(CMFeatureRequirement))!(clsCMFeatureRequirementBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFeatureRequirementEN.updDate) == false &&
    undefined !== pobjCMFeatureRequirementEN.updDate &&
    tzDataType.isString(pobjCMFeatureRequirementEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjCMFeatureRequirementEN.updDate)], 非法,应该为字符型(In CM功能需求关系(CMFeatureRequirement))!(clsCMFeatureRequirementBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFeatureRequirementEN.updUser) == false &&
    undefined !== pobjCMFeatureRequirementEN.updUser &&
    tzDataType.isString(pobjCMFeatureRequirementEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改者(updUser)]的值:[$(pobjCMFeatureRequirementEN.updUser)], 非法,应该为字符型(In CM功能需求关系(CMFeatureRequirement))!(clsCMFeatureRequirementBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFeatureRequirementEN.memo) == false &&
    undefined !== pobjCMFeatureRequirementEN.memo &&
    tzDataType.isString(pobjCMFeatureRequirementEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[说明(memo)]的值:[$(pobjCMFeatureRequirementEN.memo)], 非法,应该为字符型(In CM功能需求关系(CMFeatureRequirement))!(clsCMFeatureRequirementBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjCMFeatureRequirementEN.isSynchToServer &&
    undefined !== pobjCMFeatureRequirementEN.isSynchToServer &&
    tzDataType.isBoolean(pobjCMFeatureRequirementEN.isSynchToServer) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否同步到Server(isSynchToServer)]的值:[$(pobjCMFeatureRequirementEN.isSynchToServer)], 非法,应该为布尔型(In CM功能需求关系(CMFeatureRequirement))!(clsCMFeatureRequirementBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFeatureRequirementEN.synchToServerDate) == false &&
    undefined !== pobjCMFeatureRequirementEN.synchToServerDate &&
    tzDataType.isString(pobjCMFeatureRequirementEN.synchToServerDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[同步到Server日期(synchToServerDate)]的值:[$(pobjCMFeatureRequirementEN.synchToServerDate)], 非法,应该为字符型(In CM功能需求关系(CMFeatureRequirement))!(clsCMFeatureRequirementBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFeatureRequirementEN.synchToServerUser) == false &&
    undefined !== pobjCMFeatureRequirementEN.synchToServerUser &&
    tzDataType.isString(pobjCMFeatureRequirementEN.synchToServerUser) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[同步到Server用户(synchToServerUser)]的值:[$(pobjCMFeatureRequirementEN.synchToServerUser)], 非法,应该为字符型(In CM功能需求关系(CMFeatureRequirement))!(clsCMFeatureRequirementBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjCMFeatureRequirementEN.isSynchToClient &&
    undefined !== pobjCMFeatureRequirementEN.isSynchToClient &&
    tzDataType.isBoolean(pobjCMFeatureRequirementEN.isSynchToClient) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否同步到Client(isSynchToClient)]的值:[$(pobjCMFeatureRequirementEN.isSynchToClient)], 非法,应该为布尔型(In CM功能需求关系(CMFeatureRequirement))!(clsCMFeatureRequirementBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFeatureRequirementEN.synchToClientDate) == false &&
    undefined !== pobjCMFeatureRequirementEN.synchToClientDate &&
    tzDataType.isString(pobjCMFeatureRequirementEN.synchToClientDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[同步到Client库日期(synchToClientDate)]的值:[$(pobjCMFeatureRequirementEN.synchToClientDate)], 非法,应该为字符型(In CM功能需求关系(CMFeatureRequirement))!(clsCMFeatureRequirementBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFeatureRequirementEN.synchToClientUser) == false &&
    undefined !== pobjCMFeatureRequirementEN.synchToClientUser &&
    tzDataType.isString(pobjCMFeatureRequirementEN.synchToClientUser) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[同步到Client库用户(synchToClientUser)]的值:[$(pobjCMFeatureRequirementEN.synchToClientUser)], 非法,应该为字符型(In CM功能需求关系(CMFeatureRequirement))!(clsCMFeatureRequirementBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFeatureRequirementEN.synSource) == false &&
    undefined !== pobjCMFeatureRequirementEN.synSource &&
    tzDataType.isString(pobjCMFeatureRequirementEN.synSource) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[同步来源(synSource)]的值:[$(pobjCMFeatureRequirementEN.synSource)], 非法,应该为字符型(In CM功能需求关系(CMFeatureRequirement))!(clsCMFeatureRequirementBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function CMFeatureRequirement_CheckProperty4Update(
  pobjCMFeatureRequirementEN: clsCMFeatureRequirementEN,
) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjCMFeatureRequirementEN.cmFeatureId) == false &&
    GetStrLen(pobjCMFeatureRequirementEN.cmFeatureId) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[功能Id(cmFeatureId)]的长度不能超过8(In CM功能需求关系(CMFeatureRequirement))!值:$(pobjCMFeatureRequirementEN.cmFeatureId)(clsCMFeatureRequirementBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFeatureRequirementEN.reqId) == false &&
    GetStrLen(pobjCMFeatureRequirementEN.reqId) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[需求Id(reqId)]的长度不能超过8(In CM功能需求关系(CMFeatureRequirement))!值:$(pobjCMFeatureRequirementEN.reqId)(clsCMFeatureRequirementBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFeatureRequirementEN.prjId) == false &&
    GetStrLen(pobjCMFeatureRequirementEN.prjId) > 4
  ) {
    throw new Error(
      '(errid:Watl000416)字段[工程ID(prjId)]的长度不能超过4(In CM功能需求关系(CMFeatureRequirement))!值:$(pobjCMFeatureRequirementEN.prjId)(clsCMFeatureRequirementBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFeatureRequirementEN.updDate) == false &&
    GetStrLen(pobjCMFeatureRequirementEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In CM功能需求关系(CMFeatureRequirement))!值:$(pobjCMFeatureRequirementEN.updDate)(clsCMFeatureRequirementBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFeatureRequirementEN.updUser) == false &&
    GetStrLen(pobjCMFeatureRequirementEN.updUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改者(updUser)]的长度不能超过20(In CM功能需求关系(CMFeatureRequirement))!值:$(pobjCMFeatureRequirementEN.updUser)(clsCMFeatureRequirementBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFeatureRequirementEN.memo) == false &&
    GetStrLen(pobjCMFeatureRequirementEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In CM功能需求关系(CMFeatureRequirement))!值:$(pobjCMFeatureRequirementEN.memo)(clsCMFeatureRequirementBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFeatureRequirementEN.synchToServerDate) == false &&
    GetStrLen(pobjCMFeatureRequirementEN.synchToServerDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[同步到Server日期(synchToServerDate)]的长度不能超过20(In CM功能需求关系(CMFeatureRequirement))!值:$(pobjCMFeatureRequirementEN.synchToServerDate)(clsCMFeatureRequirementBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFeatureRequirementEN.synchToServerUser) == false &&
    GetStrLen(pobjCMFeatureRequirementEN.synchToServerUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[同步到Server用户(synchToServerUser)]的长度不能超过20(In CM功能需求关系(CMFeatureRequirement))!值:$(pobjCMFeatureRequirementEN.synchToServerUser)(clsCMFeatureRequirementBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFeatureRequirementEN.synchToClientDate) == false &&
    GetStrLen(pobjCMFeatureRequirementEN.synchToClientDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[同步到Client库日期(synchToClientDate)]的长度不能超过20(In CM功能需求关系(CMFeatureRequirement))!值:$(pobjCMFeatureRequirementEN.synchToClientDate)(clsCMFeatureRequirementBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFeatureRequirementEN.synchToClientUser) == false &&
    GetStrLen(pobjCMFeatureRequirementEN.synchToClientUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[同步到Client库用户(synchToClientUser)]的长度不能超过20(In CM功能需求关系(CMFeatureRequirement))!值:$(pobjCMFeatureRequirementEN.synchToClientUser)(clsCMFeatureRequirementBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFeatureRequirementEN.synSource) == false &&
    GetStrLen(pobjCMFeatureRequirementEN.synSource) > 50
  ) {
    throw new Error(
      '(errid:Watl000416)字段[同步来源(synSource)]的长度不能超过50(In CM功能需求关系(CMFeatureRequirement))!值:$(pobjCMFeatureRequirementEN.synSource)(clsCMFeatureRequirementBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjCMFeatureRequirementEN.mId &&
    undefined !== pobjCMFeatureRequirementEN.mId &&
    tzDataType.isNumber(pobjCMFeatureRequirementEN.mId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[mId(mId)]的值:[$(pobjCMFeatureRequirementEN.mId)], 非法,应该为数值型(In CM功能需求关系(CMFeatureRequirement))!(clsCMFeatureRequirementBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFeatureRequirementEN.cmFeatureId) == false &&
    undefined !== pobjCMFeatureRequirementEN.cmFeatureId &&
    tzDataType.isString(pobjCMFeatureRequirementEN.cmFeatureId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[功能Id(cmFeatureId)]的值:[$(pobjCMFeatureRequirementEN.cmFeatureId)], 非法,应该为字符型(In CM功能需求关系(CMFeatureRequirement))!(clsCMFeatureRequirementBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFeatureRequirementEN.reqId) == false &&
    undefined !== pobjCMFeatureRequirementEN.reqId &&
    tzDataType.isString(pobjCMFeatureRequirementEN.reqId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[需求Id(reqId)]的值:[$(pobjCMFeatureRequirementEN.reqId)], 非法,应该为字符型(In CM功能需求关系(CMFeatureRequirement))!(clsCMFeatureRequirementBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjCMFeatureRequirementEN.orderNum &&
    undefined !== pobjCMFeatureRequirementEN.orderNum &&
    tzDataType.isNumber(pobjCMFeatureRequirementEN.orderNum) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[序号(orderNum)]的值:[$(pobjCMFeatureRequirementEN.orderNum)], 非法,应该为数值型(In CM功能需求关系(CMFeatureRequirement))!(clsCMFeatureRequirementBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFeatureRequirementEN.prjId) == false &&
    undefined !== pobjCMFeatureRequirementEN.prjId &&
    tzDataType.isString(pobjCMFeatureRequirementEN.prjId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[工程ID(prjId)]的值:[$(pobjCMFeatureRequirementEN.prjId)], 非法,应该为字符型(In CM功能需求关系(CMFeatureRequirement))!(clsCMFeatureRequirementBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFeatureRequirementEN.updDate) == false &&
    undefined !== pobjCMFeatureRequirementEN.updDate &&
    tzDataType.isString(pobjCMFeatureRequirementEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjCMFeatureRequirementEN.updDate)], 非法,应该为字符型(In CM功能需求关系(CMFeatureRequirement))!(clsCMFeatureRequirementBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFeatureRequirementEN.updUser) == false &&
    undefined !== pobjCMFeatureRequirementEN.updUser &&
    tzDataType.isString(pobjCMFeatureRequirementEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改者(updUser)]的值:[$(pobjCMFeatureRequirementEN.updUser)], 非法,应该为字符型(In CM功能需求关系(CMFeatureRequirement))!(clsCMFeatureRequirementBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFeatureRequirementEN.memo) == false &&
    undefined !== pobjCMFeatureRequirementEN.memo &&
    tzDataType.isString(pobjCMFeatureRequirementEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[说明(memo)]的值:[$(pobjCMFeatureRequirementEN.memo)], 非法,应该为字符型(In CM功能需求关系(CMFeatureRequirement))!(clsCMFeatureRequirementBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjCMFeatureRequirementEN.isSynchToServer &&
    undefined !== pobjCMFeatureRequirementEN.isSynchToServer &&
    tzDataType.isBoolean(pobjCMFeatureRequirementEN.isSynchToServer) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否同步到Server(isSynchToServer)]的值:[$(pobjCMFeatureRequirementEN.isSynchToServer)], 非法,应该为布尔型(In CM功能需求关系(CMFeatureRequirement))!(clsCMFeatureRequirementBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFeatureRequirementEN.synchToServerDate) == false &&
    undefined !== pobjCMFeatureRequirementEN.synchToServerDate &&
    tzDataType.isString(pobjCMFeatureRequirementEN.synchToServerDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[同步到Server日期(synchToServerDate)]的值:[$(pobjCMFeatureRequirementEN.synchToServerDate)], 非法,应该为字符型(In CM功能需求关系(CMFeatureRequirement))!(clsCMFeatureRequirementBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFeatureRequirementEN.synchToServerUser) == false &&
    undefined !== pobjCMFeatureRequirementEN.synchToServerUser &&
    tzDataType.isString(pobjCMFeatureRequirementEN.synchToServerUser) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[同步到Server用户(synchToServerUser)]的值:[$(pobjCMFeatureRequirementEN.synchToServerUser)], 非法,应该为字符型(In CM功能需求关系(CMFeatureRequirement))!(clsCMFeatureRequirementBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjCMFeatureRequirementEN.isSynchToClient &&
    undefined !== pobjCMFeatureRequirementEN.isSynchToClient &&
    tzDataType.isBoolean(pobjCMFeatureRequirementEN.isSynchToClient) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否同步到Client(isSynchToClient)]的值:[$(pobjCMFeatureRequirementEN.isSynchToClient)], 非法,应该为布尔型(In CM功能需求关系(CMFeatureRequirement))!(clsCMFeatureRequirementBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFeatureRequirementEN.synchToClientDate) == false &&
    undefined !== pobjCMFeatureRequirementEN.synchToClientDate &&
    tzDataType.isString(pobjCMFeatureRequirementEN.synchToClientDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[同步到Client库日期(synchToClientDate)]的值:[$(pobjCMFeatureRequirementEN.synchToClientDate)], 非法,应该为字符型(In CM功能需求关系(CMFeatureRequirement))!(clsCMFeatureRequirementBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFeatureRequirementEN.synchToClientUser) == false &&
    undefined !== pobjCMFeatureRequirementEN.synchToClientUser &&
    tzDataType.isString(pobjCMFeatureRequirementEN.synchToClientUser) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[同步到Client库用户(synchToClientUser)]的值:[$(pobjCMFeatureRequirementEN.synchToClientUser)], 非法,应该为字符型(In CM功能需求关系(CMFeatureRequirement))!(clsCMFeatureRequirementBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFeatureRequirementEN.synSource) == false &&
    undefined !== pobjCMFeatureRequirementEN.synSource &&
    tzDataType.isString(pobjCMFeatureRequirementEN.synSource) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[同步来源(synSource)]的值:[$(pobjCMFeatureRequirementEN.synSource)], 非法,应该为字符型(In CM功能需求关系(CMFeatureRequirement))!(clsCMFeatureRequirementBL:CheckProperty4Update)',
    );
  }
  //检查主键是否为Null或者空!
  if (
    null === pobjCMFeatureRequirementEN.mId ||
    (pobjCMFeatureRequirementEN.mId != null && pobjCMFeatureRequirementEN.mId.toString() === '')
  ) {
    throw new Error(
      '(errid:Watl000064)字段[mId]不能为空(In CM功能需求关系)!(clsCMFeatureRequirementBL:CheckProperty4Update)',
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
export function CMFeatureRequirement_GetJSONStrByObj(
  pobjCMFeatureRequirementEN: clsCMFeatureRequirementEN,
): string {
  pobjCMFeatureRequirementEN.sfUpdFldSetStr = pobjCMFeatureRequirementEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjCMFeatureRequirementEN);
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
export function CMFeatureRequirement_GetObjLstByJSONStr(
  strJSON: string,
): Array<clsCMFeatureRequirementEN> {
  let arrCMFeatureRequirementObjLst = new Array<clsCMFeatureRequirementEN>();
  if (strJSON === '') {
    return arrCMFeatureRequirementObjLst;
  }
  try {
    arrCMFeatureRequirementObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrCMFeatureRequirementObjLst;
  }
  return arrCMFeatureRequirementObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrCMFeatureRequirementObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function CMFeatureRequirement_GetObjLstByJSONObjLst(
  arrCMFeatureRequirementObjLstS: Array<clsCMFeatureRequirementEN>,
): Array<clsCMFeatureRequirementEN> {
  const arrCMFeatureRequirementObjLst = new Array<clsCMFeatureRequirementEN>();
  for (const objInFor of arrCMFeatureRequirementObjLstS) {
    const obj1 = CMFeatureRequirement_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrCMFeatureRequirementObjLst.push(obj1);
  }
  return arrCMFeatureRequirementObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function CMFeatureRequirement_GetObjByJSONStr(strJSON: string): clsCMFeatureRequirementEN {
  let pobjCMFeatureRequirementEN = new clsCMFeatureRequirementEN();
  if (strJSON === '') {
    return pobjCMFeatureRequirementEN;
  }
  try {
    pobjCMFeatureRequirementEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjCMFeatureRequirementEN;
  }
  return pobjCMFeatureRequirementEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function CMFeatureRequirement_GetCombineCondition(
  objCMFeatureRequirementCond: clsCMFeatureRequirementEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objCMFeatureRequirementCond.dicFldComparisonOp,
      clsCMFeatureRequirementEN.con_mId,
    ) == true
  ) {
    const strComparisonOpmId: string =
      objCMFeatureRequirementCond.dicFldComparisonOp[clsCMFeatureRequirementEN.con_mId];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsCMFeatureRequirementEN.con_mId,
      objCMFeatureRequirementCond.mId,
      strComparisonOpmId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMFeatureRequirementCond.dicFldComparisonOp,
      clsCMFeatureRequirementEN.con_CmFeatureId,
    ) == true
  ) {
    const strComparisonOpCmFeatureId: string =
      objCMFeatureRequirementCond.dicFldComparisonOp[clsCMFeatureRequirementEN.con_CmFeatureId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMFeatureRequirementEN.con_CmFeatureId,
      objCMFeatureRequirementCond.cmFeatureId,
      strComparisonOpCmFeatureId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMFeatureRequirementCond.dicFldComparisonOp,
      clsCMFeatureRequirementEN.con_ReqId,
    ) == true
  ) {
    const strComparisonOpReqId: string =
      objCMFeatureRequirementCond.dicFldComparisonOp[clsCMFeatureRequirementEN.con_ReqId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMFeatureRequirementEN.con_ReqId,
      objCMFeatureRequirementCond.reqId,
      strComparisonOpReqId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMFeatureRequirementCond.dicFldComparisonOp,
      clsCMFeatureRequirementEN.con_OrderNum,
    ) == true
  ) {
    const strComparisonOpOrderNum: string =
      objCMFeatureRequirementCond.dicFldComparisonOp[clsCMFeatureRequirementEN.con_OrderNum];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsCMFeatureRequirementEN.con_OrderNum,
      objCMFeatureRequirementCond.orderNum,
      strComparisonOpOrderNum,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMFeatureRequirementCond.dicFldComparisonOp,
      clsCMFeatureRequirementEN.con_PrjId,
    ) == true
  ) {
    const strComparisonOpPrjId: string =
      objCMFeatureRequirementCond.dicFldComparisonOp[clsCMFeatureRequirementEN.con_PrjId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMFeatureRequirementEN.con_PrjId,
      objCMFeatureRequirementCond.prjId,
      strComparisonOpPrjId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMFeatureRequirementCond.dicFldComparisonOp,
      clsCMFeatureRequirementEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objCMFeatureRequirementCond.dicFldComparisonOp[clsCMFeatureRequirementEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMFeatureRequirementEN.con_UpdDate,
      objCMFeatureRequirementCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMFeatureRequirementCond.dicFldComparisonOp,
      clsCMFeatureRequirementEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objCMFeatureRequirementCond.dicFldComparisonOp[clsCMFeatureRequirementEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMFeatureRequirementEN.con_UpdUser,
      objCMFeatureRequirementCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMFeatureRequirementCond.dicFldComparisonOp,
      clsCMFeatureRequirementEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objCMFeatureRequirementCond.dicFldComparisonOp[clsCMFeatureRequirementEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMFeatureRequirementEN.con_Memo,
      objCMFeatureRequirementCond.memo,
      strComparisonOpMemo,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMFeatureRequirementCond.dicFldComparisonOp,
      clsCMFeatureRequirementEN.con_IsSynchToServer,
    ) == true
  ) {
    if (objCMFeatureRequirementCond.isSynchToServer == true) {
      strWhereCond += Format(" And {0} = '1'", clsCMFeatureRequirementEN.con_IsSynchToServer);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsCMFeatureRequirementEN.con_IsSynchToServer);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMFeatureRequirementCond.dicFldComparisonOp,
      clsCMFeatureRequirementEN.con_SynchToServerDate,
    ) == true
  ) {
    const strComparisonOpSynchToServerDate: string =
      objCMFeatureRequirementCond.dicFldComparisonOp[
        clsCMFeatureRequirementEN.con_SynchToServerDate
      ];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMFeatureRequirementEN.con_SynchToServerDate,
      objCMFeatureRequirementCond.synchToServerDate,
      strComparisonOpSynchToServerDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMFeatureRequirementCond.dicFldComparisonOp,
      clsCMFeatureRequirementEN.con_SynchToServerUser,
    ) == true
  ) {
    const strComparisonOpSynchToServerUser: string =
      objCMFeatureRequirementCond.dicFldComparisonOp[
        clsCMFeatureRequirementEN.con_SynchToServerUser
      ];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMFeatureRequirementEN.con_SynchToServerUser,
      objCMFeatureRequirementCond.synchToServerUser,
      strComparisonOpSynchToServerUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMFeatureRequirementCond.dicFldComparisonOp,
      clsCMFeatureRequirementEN.con_IsSynchToClient,
    ) == true
  ) {
    if (objCMFeatureRequirementCond.isSynchToClient == true) {
      strWhereCond += Format(" And {0} = '1'", clsCMFeatureRequirementEN.con_IsSynchToClient);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsCMFeatureRequirementEN.con_IsSynchToClient);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMFeatureRequirementCond.dicFldComparisonOp,
      clsCMFeatureRequirementEN.con_SynchToClientDate,
    ) == true
  ) {
    const strComparisonOpSynchToClientDate: string =
      objCMFeatureRequirementCond.dicFldComparisonOp[
        clsCMFeatureRequirementEN.con_SynchToClientDate
      ];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMFeatureRequirementEN.con_SynchToClientDate,
      objCMFeatureRequirementCond.synchToClientDate,
      strComparisonOpSynchToClientDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMFeatureRequirementCond.dicFldComparisonOp,
      clsCMFeatureRequirementEN.con_SynchToClientUser,
    ) == true
  ) {
    const strComparisonOpSynchToClientUser: string =
      objCMFeatureRequirementCond.dicFldComparisonOp[
        clsCMFeatureRequirementEN.con_SynchToClientUser
      ];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMFeatureRequirementEN.con_SynchToClientUser,
      objCMFeatureRequirementCond.synchToClientUser,
      strComparisonOpSynchToClientUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMFeatureRequirementCond.dicFldComparisonOp,
      clsCMFeatureRequirementEN.con_SynSource,
    ) == true
  ) {
    const strComparisonOpSynSource: string =
      objCMFeatureRequirementCond.dicFldComparisonOp[clsCMFeatureRequirementEN.con_SynSource];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMFeatureRequirementEN.con_SynSource,
      objCMFeatureRequirementCond.synSource,
      strComparisonOpSynSource,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--CMFeatureRequirement(CM功能需求关系),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strCmFeatureId: 功能Id(要求唯一的字段)
 * @param strReqId: 需求Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function CMFeatureRequirement_GetUniCondStr(
  objCMFeatureRequirementEN: clsCMFeatureRequirementEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and CmFeatureId = '{0}'", objCMFeatureRequirementEN.cmFeatureId);
  strWhereCond += Format(" and ReqId = '{0}'", objCMFeatureRequirementEN.reqId);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--CMFeatureRequirement(CM功能需求关系),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strCmFeatureId: 功能Id(要求唯一的字段)
 * @param strReqId: 需求Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function CMFeatureRequirement_GetUniCondStr4Update(
  objCMFeatureRequirementEN: clsCMFeatureRequirementEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and mId <> '{0}'", objCMFeatureRequirementEN.mId);
  strWhereCond += Format(" and CmFeatureId = '{0}'", objCMFeatureRequirementEN.cmFeatureId);
  strWhereCond += Format(" and ReqId = '{0}'", objCMFeatureRequirementEN.reqId);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objCMFeatureRequirementENS:源对象
 * @param objCMFeatureRequirementENT:目标对象
 */
export function CMFeatureRequirement_GetObjFromJsonObj(
  objCMFeatureRequirementENS: clsCMFeatureRequirementEN,
): clsCMFeatureRequirementEN {
  const objCMFeatureRequirementENT: clsCMFeatureRequirementEN = new clsCMFeatureRequirementEN();
  ObjectAssign(objCMFeatureRequirementENT, objCMFeatureRequirementENS);
  return objCMFeatureRequirementENT;
}
