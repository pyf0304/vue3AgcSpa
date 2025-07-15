/**
 * 类名:clsCMRequirementWApi
 * 表名:CMRequirement(00050075)
 * 版本:2024.01.29.1(服务器:WIN-SRV103-116)
 * 日期:2024/02/03 16:45:12
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:代码管理(CodeMan)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 项目需求(CMRequirement)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2024年02月03日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty, GetStrLen, tzDataType, Format } from '@/ts/PubFun/clsString';
import {
  BindDdl_ObjLstInDivObj,
  GetExceptionStr,
  myShowErrorMsg,
  ObjectAssign,
} from '@/ts/PubFun/clsCommFunc4Web';
import { clsCMRequirementEN } from '@/ts/L0Entity/CodeMan/clsCMRequirementEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const cMRequirement_Controller = 'CMRequirementApi';
export const cMRequirement_ConstructorName = 'cMRequirement';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strReqId:关键字
 * @returns 对象
 **/
export async function CMRequirement_GetObjByReqIdAsync(
  strReqId: string,
): Promise<clsCMRequirementEN | null> {
  const strThisFuncName = 'GetObjByReqIdAsync';

  if (IsNullOrEmpty(strReqId) == true) {
    const strMsg = Format('参数:[strReqId]不能为空!(In clsCMRequirementWApi.GetObjByReqIdAsync)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strReqId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strReqId]的长度:[{0}]不正确!(clsCMRequirementWApi.GetObjByReqIdAsync)',
      strReqId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByReqId';
  const strUrl = GetWebApiUrl(cMRequirement_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strReqId,
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
      const objCMRequirement = CMRequirement_GetObjFromJsonObj(returnObj);
      return objCMRequirement;
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
        cMRequirement_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMRequirement_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[GetObjByReqIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )
//该表没有使用Cache,不需要生成[GetObjByReqIdlocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[UpdateObjInLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache
//该表没有使用Cache,不需要生成[GetNameByReqIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
//该表没有使用Cache,不需要生成[func]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func )

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-02-03
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function CMRequirement_SortFunDefa(a: clsCMRequirementEN, b: clsCMRequirementEN): number {
  return a.reqId.localeCompare(b.reqId);
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2024-02-03
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function CMRequirement_SortFunDefa2Fld(
  a: clsCMRequirementEN,
  b: clsCMRequirementEN,
): number {
  if (a.requirementName == b.requirementName)
    return a.requirementTypeId.localeCompare(b.requirementTypeId);
  else return a.requirementName.localeCompare(b.requirementName);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-02-03
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function CMRequirement_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsCMRequirementEN.con_ReqId:
        return (a: clsCMRequirementEN, b: clsCMRequirementEN) => {
          return a.reqId.localeCompare(b.reqId);
        };
      case clsCMRequirementEN.con_RequirementName:
        return (a: clsCMRequirementEN, b: clsCMRequirementEN) => {
          return a.requirementName.localeCompare(b.requirementName);
        };
      case clsCMRequirementEN.con_RequirementTypeId:
        return (a: clsCMRequirementEN, b: clsCMRequirementEN) => {
          return a.requirementTypeId.localeCompare(b.requirementTypeId);
        };
      case clsCMRequirementEN.con_ReqContent:
        return (a: clsCMRequirementEN, b: clsCMRequirementEN) => {
          return a.reqContent.localeCompare(b.reqContent);
        };
      case clsCMRequirementEN.con_UpReqId:
        return (a: clsCMRequirementEN, b: clsCMRequirementEN) => {
          if (a.upReqId == null) return -1;
          if (b.upReqId == null) return 1;
          return a.upReqId.localeCompare(b.upReqId);
        };
      case clsCMRequirementEN.con_IsFinished:
        return (a: clsCMRequirementEN) => {
          if (a.isFinished == true) return 1;
          else return -1;
        };
      case clsCMRequirementEN.con_CmPrjId:
        return (a: clsCMRequirementEN, b: clsCMRequirementEN) => {
          return a.cmPrjId.localeCompare(b.cmPrjId);
        };
      case clsCMRequirementEN.con_FuncModuleAgcId:
        return (a: clsCMRequirementEN, b: clsCMRequirementEN) => {
          if (a.funcModuleAgcId == null) return -1;
          if (b.funcModuleAgcId == null) return 1;
          return a.funcModuleAgcId.localeCompare(b.funcModuleAgcId);
        };
      case clsCMRequirementEN.con_PrjId:
        return (a: clsCMRequirementEN, b: clsCMRequirementEN) => {
          return a.prjId.localeCompare(b.prjId);
        };
      case clsCMRequirementEN.con_UpdUser:
        return (a: clsCMRequirementEN, b: clsCMRequirementEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsCMRequirementEN.con_UpdDate:
        return (a: clsCMRequirementEN, b: clsCMRequirementEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsCMRequirementEN.con_Memo:
        return (a: clsCMRequirementEN, b: clsCMRequirementEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      case clsCMRequirementEN.con_IsSynchToServer:
        return (a: clsCMRequirementEN) => {
          if (a.isSynchToServer == true) return 1;
          else return -1;
        };
      case clsCMRequirementEN.con_SynchToServerDate:
        return (a: clsCMRequirementEN, b: clsCMRequirementEN) => {
          if (a.synchToServerDate == null) return -1;
          if (b.synchToServerDate == null) return 1;
          return a.synchToServerDate.localeCompare(b.synchToServerDate);
        };
      case clsCMRequirementEN.con_SynchToServerUser:
        return (a: clsCMRequirementEN, b: clsCMRequirementEN) => {
          if (a.synchToServerUser == null) return -1;
          if (b.synchToServerUser == null) return 1;
          return a.synchToServerUser.localeCompare(b.synchToServerUser);
        };
      case clsCMRequirementEN.con_IsSynchToClient:
        return (a: clsCMRequirementEN) => {
          if (a.isSynchToClient == true) return 1;
          else return -1;
        };
      case clsCMRequirementEN.con_SynchToClientDate:
        return (a: clsCMRequirementEN, b: clsCMRequirementEN) => {
          if (a.synchToClientDate == null) return -1;
          if (b.synchToClientDate == null) return 1;
          return a.synchToClientDate.localeCompare(b.synchToClientDate);
        };
      case clsCMRequirementEN.con_SynchToClientUser:
        return (a: clsCMRequirementEN, b: clsCMRequirementEN) => {
          if (a.synchToClientUser == null) return -1;
          if (b.synchToClientUser == null) return 1;
          return a.synchToClientUser.localeCompare(b.synchToClientUser);
        };
      case clsCMRequirementEN.con_SynSource:
        return (a: clsCMRequirementEN, b: clsCMRequirementEN) => {
          if (a.synSource == null) return -1;
          if (b.synSource == null) return 1;
          return a.synSource.localeCompare(b.synSource);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[CMRequirement]中不存在!(in ${cMRequirement_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsCMRequirementEN.con_ReqId:
        return (a: clsCMRequirementEN, b: clsCMRequirementEN) => {
          return b.reqId.localeCompare(a.reqId);
        };
      case clsCMRequirementEN.con_RequirementName:
        return (a: clsCMRequirementEN, b: clsCMRequirementEN) => {
          return b.requirementName.localeCompare(a.requirementName);
        };
      case clsCMRequirementEN.con_RequirementTypeId:
        return (a: clsCMRequirementEN, b: clsCMRequirementEN) => {
          return b.requirementTypeId.localeCompare(a.requirementTypeId);
        };
      case clsCMRequirementEN.con_ReqContent:
        return (a: clsCMRequirementEN, b: clsCMRequirementEN) => {
          return b.reqContent.localeCompare(a.reqContent);
        };
      case clsCMRequirementEN.con_UpReqId:
        return (a: clsCMRequirementEN, b: clsCMRequirementEN) => {
          if (b.upReqId == null) return -1;
          if (a.upReqId == null) return 1;
          return b.upReqId.localeCompare(a.upReqId);
        };
      case clsCMRequirementEN.con_IsFinished:
        return (b: clsCMRequirementEN) => {
          if (b.isFinished == true) return 1;
          else return -1;
        };
      case clsCMRequirementEN.con_CmPrjId:
        return (a: clsCMRequirementEN, b: clsCMRequirementEN) => {
          return b.cmPrjId.localeCompare(a.cmPrjId);
        };
      case clsCMRequirementEN.con_FuncModuleAgcId:
        return (a: clsCMRequirementEN, b: clsCMRequirementEN) => {
          if (b.funcModuleAgcId == null) return -1;
          if (a.funcModuleAgcId == null) return 1;
          return b.funcModuleAgcId.localeCompare(a.funcModuleAgcId);
        };
      case clsCMRequirementEN.con_PrjId:
        return (a: clsCMRequirementEN, b: clsCMRequirementEN) => {
          return b.prjId.localeCompare(a.prjId);
        };
      case clsCMRequirementEN.con_UpdUser:
        return (a: clsCMRequirementEN, b: clsCMRequirementEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsCMRequirementEN.con_UpdDate:
        return (a: clsCMRequirementEN, b: clsCMRequirementEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsCMRequirementEN.con_Memo:
        return (a: clsCMRequirementEN, b: clsCMRequirementEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      case clsCMRequirementEN.con_IsSynchToServer:
        return (b: clsCMRequirementEN) => {
          if (b.isSynchToServer == true) return 1;
          else return -1;
        };
      case clsCMRequirementEN.con_SynchToServerDate:
        return (a: clsCMRequirementEN, b: clsCMRequirementEN) => {
          if (b.synchToServerDate == null) return -1;
          if (a.synchToServerDate == null) return 1;
          return b.synchToServerDate.localeCompare(a.synchToServerDate);
        };
      case clsCMRequirementEN.con_SynchToServerUser:
        return (a: clsCMRequirementEN, b: clsCMRequirementEN) => {
          if (b.synchToServerUser == null) return -1;
          if (a.synchToServerUser == null) return 1;
          return b.synchToServerUser.localeCompare(a.synchToServerUser);
        };
      case clsCMRequirementEN.con_IsSynchToClient:
        return (b: clsCMRequirementEN) => {
          if (b.isSynchToClient == true) return 1;
          else return -1;
        };
      case clsCMRequirementEN.con_SynchToClientDate:
        return (a: clsCMRequirementEN, b: clsCMRequirementEN) => {
          if (b.synchToClientDate == null) return -1;
          if (a.synchToClientDate == null) return 1;
          return b.synchToClientDate.localeCompare(a.synchToClientDate);
        };
      case clsCMRequirementEN.con_SynchToClientUser:
        return (a: clsCMRequirementEN, b: clsCMRequirementEN) => {
          if (b.synchToClientUser == null) return -1;
          if (a.synchToClientUser == null) return 1;
          return b.synchToClientUser.localeCompare(a.synchToClientUser);
        };
      case clsCMRequirementEN.con_SynSource:
        return (a: clsCMRequirementEN, b: clsCMRequirementEN) => {
          if (b.synSource == null) return -1;
          if (a.synSource == null) return 1;
          return b.synSource.localeCompare(a.synSource);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[CMRequirement]中不存在!(in ${cMRequirement_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2024-02-03
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function CMRequirement_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsCMRequirementEN.con_ReqId:
      return (obj: clsCMRequirementEN) => {
        return obj.reqId === value;
      };
    case clsCMRequirementEN.con_RequirementName:
      return (obj: clsCMRequirementEN) => {
        return obj.requirementName === value;
      };
    case clsCMRequirementEN.con_RequirementTypeId:
      return (obj: clsCMRequirementEN) => {
        return obj.requirementTypeId === value;
      };
    case clsCMRequirementEN.con_ReqContent:
      return (obj: clsCMRequirementEN) => {
        return obj.reqContent === value;
      };
    case clsCMRequirementEN.con_UpReqId:
      return (obj: clsCMRequirementEN) => {
        return obj.upReqId === value;
      };
    case clsCMRequirementEN.con_IsFinished:
      return (obj: clsCMRequirementEN) => {
        return obj.isFinished === value;
      };
    case clsCMRequirementEN.con_CmPrjId:
      return (obj: clsCMRequirementEN) => {
        return obj.cmPrjId === value;
      };
    case clsCMRequirementEN.con_FuncModuleAgcId:
      return (obj: clsCMRequirementEN) => {
        return obj.funcModuleAgcId === value;
      };
    case clsCMRequirementEN.con_PrjId:
      return (obj: clsCMRequirementEN) => {
        return obj.prjId === value;
      };
    case clsCMRequirementEN.con_UpdUser:
      return (obj: clsCMRequirementEN) => {
        return obj.updUser === value;
      };
    case clsCMRequirementEN.con_UpdDate:
      return (obj: clsCMRequirementEN) => {
        return obj.updDate === value;
      };
    case clsCMRequirementEN.con_Memo:
      return (obj: clsCMRequirementEN) => {
        return obj.memo === value;
      };
    case clsCMRequirementEN.con_IsSynchToServer:
      return (obj: clsCMRequirementEN) => {
        return obj.isSynchToServer === value;
      };
    case clsCMRequirementEN.con_SynchToServerDate:
      return (obj: clsCMRequirementEN) => {
        return obj.synchToServerDate === value;
      };
    case clsCMRequirementEN.con_SynchToServerUser:
      return (obj: clsCMRequirementEN) => {
        return obj.synchToServerUser === value;
      };
    case clsCMRequirementEN.con_IsSynchToClient:
      return (obj: clsCMRequirementEN) => {
        return obj.isSynchToClient === value;
      };
    case clsCMRequirementEN.con_SynchToClientDate:
      return (obj: clsCMRequirementEN) => {
        return obj.synchToClientDate === value;
      };
    case clsCMRequirementEN.con_SynchToClientUser:
      return (obj: clsCMRequirementEN) => {
        return obj.synchToClientUser === value;
      };
    case clsCMRequirementEN.con_SynSource:
      return (obj: clsCMRequirementEN) => {
        return obj.synSource === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[CMRequirement]中不存在!(in ${cMRequirement_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}
//该表没有使用Cache,不需要生成[CMRequirement__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function CMRequirement_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(cMRequirement_Controller, strAction);

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
        cMRequirement_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMRequirement_ConstructorName,
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
export async function CMRequirement_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(cMRequirement_Controller, strAction);

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
        cMRequirement_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMRequirement_ConstructorName,
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
export async function CMRequirement_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsCMRequirementEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(cMRequirement_Controller, strAction);

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
      const objCMRequirement = CMRequirement_GetObjFromJsonObj(returnObj);
      return objCMRequirement;
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
        cMRequirement_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMRequirement_ConstructorName,
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
export async function CMRequirement_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsCMRequirementEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(cMRequirement_Controller, strAction);

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
          cMRequirement_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = CMRequirement_GetObjLstByJSONObjLst(returnObjLst);
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
        cMRequirement_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMRequirement_ConstructorName,
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
 * @param arrReqId:关键字列表
 * @returns 对象列表
 **/
export async function CMRequirement_GetObjLstByReqIdLstAsync(
  arrReqId: Array<string>,
): Promise<Array<clsCMRequirementEN>> {
  const strThisFuncName = 'GetObjLstByReqIdLstAsync';
  const strAction = 'GetObjLstByReqIdLst';
  const strUrl = GetWebApiUrl(cMRequirement_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrReqId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          cMRequirement_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = CMRequirement_GetObjLstByJSONObjLst(returnObjLst);
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
        cMRequirement_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMRequirement_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[GetObjLstByReqIdLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

/**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export async function CMRequirement_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsCMRequirementEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(cMRequirement_Controller, strAction);

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
          cMRequirement_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = CMRequirement_GetObjLstByJSONObjLst(returnObjLst);
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
        cMRequirement_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMRequirement_ConstructorName,
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
export async function CMRequirement_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsCMRequirementEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(cMRequirement_Controller, strAction);

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
          cMRequirement_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = CMRequirement_GetObjLstByJSONObjLst(returnObjLst);
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
        cMRequirement_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMRequirement_ConstructorName,
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
export async function CMRequirement_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsCMRequirementEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsCMRequirementEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(cMRequirement_Controller, strAction);

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
          cMRequirement_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = CMRequirement_GetObjLstByJSONObjLst(returnObjLst);
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
        cMRequirement_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMRequirement_ConstructorName,
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
 * @param strReqId:关键字
 * @returns 获取删除的结果
 **/
export async function CMRequirement_DelRecordAsync(strReqId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(cMRequirement_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strReqId);

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
        cMRequirement_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMRequirement_ConstructorName,
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
 * @param arrReqId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function CMRequirement_DelCMRequirementsAsync(
  arrReqId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelCMRequirementsAsync';
  const strAction = 'DelCMRequirements';
  const strUrl = GetWebApiUrl(cMRequirement_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrReqId, config);
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
        cMRequirement_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMRequirement_ConstructorName,
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
export async function CMRequirement_DelCMRequirementsByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelCMRequirementsByCondAsync';
  const strAction = 'DelCMRequirementsByCond';
  const strUrl = GetWebApiUrl(cMRequirement_Controller, strAction);

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
        cMRequirement_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMRequirement_ConstructorName,
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
 * @param objCMRequirementEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function CMRequirement_AddNewRecordAsync(
  objCMRequirementEN: clsCMRequirementEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  if (objCMRequirementEN.reqId === null || objCMRequirementEN.reqId === '') {
    const strMsg = '需要的对象的关键字为空,不能添加!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objCMRequirementEN);
  const strUrl = GetWebApiUrl(cMRequirement_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objCMRequirementEN, config);
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
        cMRequirement_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMRequirement_ConstructorName,
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
 * @param objCMRequirementEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function CMRequirement_AddNewRecordWithMaxIdAsync(
  objCMRequirementEN: clsCMRequirementEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(cMRequirement_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objCMRequirementEN, config);
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
        cMRequirement_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMRequirement_ConstructorName,
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
 * @param objCMRequirementEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function CMRequirement_AddNewRecordWithReturnKeyAsync(
  objCMRequirementEN: clsCMRequirementEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(cMRequirement_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objCMRequirementEN, config);
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
        cMRequirement_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMRequirement_ConstructorName,
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
 * @param objCMRequirementEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function CMRequirement_UpdateRecordAsync(
  objCMRequirementEN: clsCMRequirementEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objCMRequirementEN.sfUpdFldSetStr === undefined ||
    objCMRequirementEN.sfUpdFldSetStr === null ||
    objCMRequirementEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objCMRequirementEN.reqId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(cMRequirement_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objCMRequirementEN, config);
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
        cMRequirement_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMRequirement_ConstructorName,
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
 * @param objCMRequirementEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function CMRequirement_UpdateWithConditionAsync(
  objCMRequirementEN: clsCMRequirementEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objCMRequirementEN.sfUpdFldSetStr === undefined ||
    objCMRequirementEN.sfUpdFldSetStr === null ||
    objCMRequirementEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objCMRequirementEN.reqId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(cMRequirement_Controller, strAction);
  objCMRequirementEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objCMRequirementEN, config);
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
        cMRequirement_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMRequirement_ConstructorName,
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
export async function CMRequirement_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(cMRequirement_Controller, strAction);

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
        cMRequirement_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMRequirement_ConstructorName,
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
 * @param strReqId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function CMRequirement_IsExistAsync(strReqId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(cMRequirement_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strReqId,
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
        cMRequirement_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMRequirement_ConstructorName,
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
export async function CMRequirement_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(cMRequirement_Controller, strAction);

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
        cMRequirement_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMRequirement_ConstructorName,
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

/**
 * 根据前缀获取当前表关键字值的最大值,再加1,避免重复
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetMaxStrIdByPrefixAsync)
 * @param mapParam:参数列表
 * @returns 获取当前表关键字值的最大值
 **/
export async function CMRequirement_GetMaxStrIdByPrefixAsync(strPrefix: string): Promise<string> {
  const strThisFuncName = 'GetMaxStrIdByPrefixAsync';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(cMRequirement_Controller, strAction);

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
        cMRequirement_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMRequirement_ConstructorName,
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
 * 根据前缀获取当前表关键字值的最大值,再加1,避免重复
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetMaxStrIdByPrefix)
 * @param mapParam:参数列表
 * @returns 获取当前表关键字值的最大值
 */
export async function CMRequirement_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(cMRequirement_Controller, strAction);

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
        cMRequirement_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMRequirement_ConstructorName,
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
export function CMRequirement_GetWebApiUrl(strController: string, strAction: string): string {
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

 * @param strCmPrjId:
 * @param strPrjId:
*/
export async function CMRequirement_BindDdl_ReqIdByCmPrjIdInDiv(
  objDiv: HTMLDivElement,
  strDdlName: string,
  strCmPrjId: string,
  strPrjId: string,
) {
  if (IsNullOrEmpty(strCmPrjId) == true) {
    const strMsg = Format(
      '参数:[strCmPrjId]不能为空！(In clsCMRequirementWApi.BindDdl_ReqIdByCmPrjIdInDiv)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strCmPrjId.length != 6) {
    const strMsg = Format(
      '缓存分类变量:[strCmPrjId]的长度:[{0}]不正确！(clsCMRequirementWApi.BindDdl_ReqIdByCmPrjIdInDiv)',
      strCmPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空！(In clsCMRequirementWApi.BindDdl_ReqIdByCmPrjIdInDiv)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确！(clsCMRequirementWApi.BindDdl_ReqIdByCmPrjIdInDiv)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_ReqIdByCmPrjIdInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_ReqIdByCmPrjIdInDivCache");
  const strCondition = `cmPrjId = '${strCmPrjId}'`;
  const arrObjLstSel = await CMRequirement_GetObjLstAsync(strCondition);
  if (arrObjLstSel == null) return;
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsCMRequirementEN.con_ReqId,
    clsCMRequirementEN.con_RequirementName,
    '项目需求',
  );
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function CMRequirement_CheckPropertyNew(pobjCMRequirementEN: clsCMRequirementEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjCMRequirementEN.requirementName) === true) {
    throw new Error(
      '(errid:Watl000411)字段[需求名称]不能为空(In 项目需求)!(clsCMRequirementBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMRequirementEN.requirementTypeId) === true ||
    pobjCMRequirementEN.requirementTypeId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000411)字段[需求类型Id]不能为空(In 项目需求)!(clsCMRequirementBL:CheckPropertyNew0)',
    );
  }
  if (IsNullOrEmpty(pobjCMRequirementEN.reqContent) === true) {
    throw new Error(
      '(errid:Watl000411)字段[需求内容]不能为空(In 项目需求)!(clsCMRequirementBL:CheckPropertyNew0)',
    );
  }
  if (
    null === pobjCMRequirementEN.isFinished ||
    (pobjCMRequirementEN.isFinished != null && pobjCMRequirementEN.isFinished.toString() === '')
  ) {
    throw new Error(
      '(errid:Watl000411)字段[是否完成]不能为空(In 项目需求)!(clsCMRequirementBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMRequirementEN.cmPrjId) === true ||
    pobjCMRequirementEN.cmPrjId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000411)字段[CM工程Id]不能为空(In 项目需求)!(clsCMRequirementBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMRequirementEN.prjId) === true ||
    pobjCMRequirementEN.prjId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000411)字段[工程ID]不能为空(In 项目需求)!(clsCMRequirementBL:CheckPropertyNew0)',
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjCMRequirementEN.reqId) == false &&
    GetStrLen(pobjCMRequirementEN.reqId) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[需求Id(reqId)]的长度不能超过8(In 项目需求(CMRequirement))!值:$(pobjCMRequirementEN.reqId)(clsCMRequirementBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMRequirementEN.requirementName) == false &&
    GetStrLen(pobjCMRequirementEN.requirementName) > 50
  ) {
    throw new Error(
      '(errid:Watl000413)字段[需求名称(requirementName)]的长度不能超过50(In 项目需求(CMRequirement))!值:$(pobjCMRequirementEN.requirementName)(clsCMRequirementBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMRequirementEN.requirementTypeId) == false &&
    GetStrLen(pobjCMRequirementEN.requirementTypeId) > 4
  ) {
    throw new Error(
      '(errid:Watl000413)字段[需求类型Id(requirementTypeId)]的长度不能超过4(In 项目需求(CMRequirement))!值:$(pobjCMRequirementEN.requirementTypeId)(clsCMRequirementBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMRequirementEN.reqContent) == false &&
    GetStrLen(pobjCMRequirementEN.reqContent) > 4000
  ) {
    throw new Error(
      '(errid:Watl000413)字段[需求内容(reqContent)]的长度不能超过4000(In 项目需求(CMRequirement))!值:$(pobjCMRequirementEN.reqContent)(clsCMRequirementBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMRequirementEN.upReqId) == false &&
    GetStrLen(pobjCMRequirementEN.upReqId) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[上级需求Id(upReqId)]的长度不能超过8(In 项目需求(CMRequirement))!值:$(pobjCMRequirementEN.upReqId)(clsCMRequirementBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMRequirementEN.cmPrjId) == false &&
    GetStrLen(pobjCMRequirementEN.cmPrjId) > 6
  ) {
    throw new Error(
      '(errid:Watl000413)字段[CM工程Id(cmPrjId)]的长度不能超过6(In 项目需求(CMRequirement))!值:$(pobjCMRequirementEN.cmPrjId)(clsCMRequirementBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMRequirementEN.funcModuleAgcId) == false &&
    GetStrLen(pobjCMRequirementEN.funcModuleAgcId) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[功能模块Id(funcModuleAgcId)]的长度不能超过8(In 项目需求(CMRequirement))!值:$(pobjCMRequirementEN.funcModuleAgcId)(clsCMRequirementBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMRequirementEN.prjId) == false &&
    GetStrLen(pobjCMRequirementEN.prjId) > 4
  ) {
    throw new Error(
      '(errid:Watl000413)字段[工程ID(prjId)]的长度不能超过4(In 项目需求(CMRequirement))!值:$(pobjCMRequirementEN.prjId)(clsCMRequirementBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMRequirementEN.updUser) == false &&
    GetStrLen(pobjCMRequirementEN.updUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改者(updUser)]的长度不能超过20(In 项目需求(CMRequirement))!值:$(pobjCMRequirementEN.updUser)(clsCMRequirementBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMRequirementEN.updDate) == false &&
    GetStrLen(pobjCMRequirementEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 项目需求(CMRequirement))!值:$(pobjCMRequirementEN.updDate)(clsCMRequirementBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMRequirementEN.memo) == false &&
    GetStrLen(pobjCMRequirementEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In 项目需求(CMRequirement))!值:$(pobjCMRequirementEN.memo)(clsCMRequirementBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMRequirementEN.synchToServerDate) == false &&
    GetStrLen(pobjCMRequirementEN.synchToServerDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[同步到Server日期(synchToServerDate)]的长度不能超过20(In 项目需求(CMRequirement))!值:$(pobjCMRequirementEN.synchToServerDate)(clsCMRequirementBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMRequirementEN.synchToServerUser) == false &&
    GetStrLen(pobjCMRequirementEN.synchToServerUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[同步到Server用户(synchToServerUser)]的长度不能超过20(In 项目需求(CMRequirement))!值:$(pobjCMRequirementEN.synchToServerUser)(clsCMRequirementBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMRequirementEN.synchToClientDate) == false &&
    GetStrLen(pobjCMRequirementEN.synchToClientDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[同步到Client库日期(synchToClientDate)]的长度不能超过20(In 项目需求(CMRequirement))!值:$(pobjCMRequirementEN.synchToClientDate)(clsCMRequirementBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMRequirementEN.synchToClientUser) == false &&
    GetStrLen(pobjCMRequirementEN.synchToClientUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[同步到Client库用户(synchToClientUser)]的长度不能超过20(In 项目需求(CMRequirement))!值:$(pobjCMRequirementEN.synchToClientUser)(clsCMRequirementBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMRequirementEN.synSource) == false &&
    GetStrLen(pobjCMRequirementEN.synSource) > 50
  ) {
    throw new Error(
      '(errid:Watl000413)字段[同步来源(synSource)]的长度不能超过50(In 项目需求(CMRequirement))!值:$(pobjCMRequirementEN.synSource)(clsCMRequirementBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjCMRequirementEN.reqId) == false &&
    undefined !== pobjCMRequirementEN.reqId &&
    tzDataType.isString(pobjCMRequirementEN.reqId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[需求Id(reqId)]的值:[$(pobjCMRequirementEN.reqId)], 非法,应该为字符型(In 项目需求(CMRequirement))!(clsCMRequirementBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMRequirementEN.requirementName) == false &&
    undefined !== pobjCMRequirementEN.requirementName &&
    tzDataType.isString(pobjCMRequirementEN.requirementName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[需求名称(requirementName)]的值:[$(pobjCMRequirementEN.requirementName)], 非法,应该为字符型(In 项目需求(CMRequirement))!(clsCMRequirementBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMRequirementEN.requirementTypeId) == false &&
    undefined !== pobjCMRequirementEN.requirementTypeId &&
    tzDataType.isString(pobjCMRequirementEN.requirementTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[需求类型Id(requirementTypeId)]的值:[$(pobjCMRequirementEN.requirementTypeId)], 非法,应该为字符型(In 项目需求(CMRequirement))!(clsCMRequirementBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMRequirementEN.reqContent) == false &&
    undefined !== pobjCMRequirementEN.reqContent &&
    tzDataType.isString(pobjCMRequirementEN.reqContent) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[需求内容(reqContent)]的值:[$(pobjCMRequirementEN.reqContent)], 非法,应该为字符型(In 项目需求(CMRequirement))!(clsCMRequirementBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMRequirementEN.upReqId) == false &&
    undefined !== pobjCMRequirementEN.upReqId &&
    tzDataType.isString(pobjCMRequirementEN.upReqId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[上级需求Id(upReqId)]的值:[$(pobjCMRequirementEN.upReqId)], 非法,应该为字符型(In 项目需求(CMRequirement))!(clsCMRequirementBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjCMRequirementEN.isFinished &&
    undefined !== pobjCMRequirementEN.isFinished &&
    tzDataType.isBoolean(pobjCMRequirementEN.isFinished) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否完成(isFinished)]的值:[$(pobjCMRequirementEN.isFinished)], 非法,应该为布尔型(In 项目需求(CMRequirement))!(clsCMRequirementBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMRequirementEN.cmPrjId) == false &&
    undefined !== pobjCMRequirementEN.cmPrjId &&
    tzDataType.isString(pobjCMRequirementEN.cmPrjId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[CM工程Id(cmPrjId)]的值:[$(pobjCMRequirementEN.cmPrjId)], 非法,应该为字符型(In 项目需求(CMRequirement))!(clsCMRequirementBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMRequirementEN.funcModuleAgcId) == false &&
    undefined !== pobjCMRequirementEN.funcModuleAgcId &&
    tzDataType.isString(pobjCMRequirementEN.funcModuleAgcId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[功能模块Id(funcModuleAgcId)]的值:[$(pobjCMRequirementEN.funcModuleAgcId)], 非法,应该为字符型(In 项目需求(CMRequirement))!(clsCMRequirementBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMRequirementEN.prjId) == false &&
    undefined !== pobjCMRequirementEN.prjId &&
    tzDataType.isString(pobjCMRequirementEN.prjId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[工程ID(prjId)]的值:[$(pobjCMRequirementEN.prjId)], 非法,应该为字符型(In 项目需求(CMRequirement))!(clsCMRequirementBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMRequirementEN.updUser) == false &&
    undefined !== pobjCMRequirementEN.updUser &&
    tzDataType.isString(pobjCMRequirementEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改者(updUser)]的值:[$(pobjCMRequirementEN.updUser)], 非法,应该为字符型(In 项目需求(CMRequirement))!(clsCMRequirementBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMRequirementEN.updDate) == false &&
    undefined !== pobjCMRequirementEN.updDate &&
    tzDataType.isString(pobjCMRequirementEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjCMRequirementEN.updDate)], 非法,应该为字符型(In 项目需求(CMRequirement))!(clsCMRequirementBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMRequirementEN.memo) == false &&
    undefined !== pobjCMRequirementEN.memo &&
    tzDataType.isString(pobjCMRequirementEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[说明(memo)]的值:[$(pobjCMRequirementEN.memo)], 非法,应该为字符型(In 项目需求(CMRequirement))!(clsCMRequirementBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjCMRequirementEN.isSynchToServer &&
    undefined !== pobjCMRequirementEN.isSynchToServer &&
    tzDataType.isBoolean(pobjCMRequirementEN.isSynchToServer) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否同步到Server(isSynchToServer)]的值:[$(pobjCMRequirementEN.isSynchToServer)], 非法,应该为布尔型(In 项目需求(CMRequirement))!(clsCMRequirementBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMRequirementEN.synchToServerDate) == false &&
    undefined !== pobjCMRequirementEN.synchToServerDate &&
    tzDataType.isString(pobjCMRequirementEN.synchToServerDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[同步到Server日期(synchToServerDate)]的值:[$(pobjCMRequirementEN.synchToServerDate)], 非法,应该为字符型(In 项目需求(CMRequirement))!(clsCMRequirementBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMRequirementEN.synchToServerUser) == false &&
    undefined !== pobjCMRequirementEN.synchToServerUser &&
    tzDataType.isString(pobjCMRequirementEN.synchToServerUser) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[同步到Server用户(synchToServerUser)]的值:[$(pobjCMRequirementEN.synchToServerUser)], 非法,应该为字符型(In 项目需求(CMRequirement))!(clsCMRequirementBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjCMRequirementEN.isSynchToClient &&
    undefined !== pobjCMRequirementEN.isSynchToClient &&
    tzDataType.isBoolean(pobjCMRequirementEN.isSynchToClient) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否同步到Client(isSynchToClient)]的值:[$(pobjCMRequirementEN.isSynchToClient)], 非法,应该为布尔型(In 项目需求(CMRequirement))!(clsCMRequirementBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMRequirementEN.synchToClientDate) == false &&
    undefined !== pobjCMRequirementEN.synchToClientDate &&
    tzDataType.isString(pobjCMRequirementEN.synchToClientDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[同步到Client库日期(synchToClientDate)]的值:[$(pobjCMRequirementEN.synchToClientDate)], 非法,应该为字符型(In 项目需求(CMRequirement))!(clsCMRequirementBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMRequirementEN.synchToClientUser) == false &&
    undefined !== pobjCMRequirementEN.synchToClientUser &&
    tzDataType.isString(pobjCMRequirementEN.synchToClientUser) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[同步到Client库用户(synchToClientUser)]的值:[$(pobjCMRequirementEN.synchToClientUser)], 非法,应该为字符型(In 项目需求(CMRequirement))!(clsCMRequirementBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMRequirementEN.synSource) == false &&
    undefined !== pobjCMRequirementEN.synSource &&
    tzDataType.isString(pobjCMRequirementEN.synSource) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[同步来源(synSource)]的值:[$(pobjCMRequirementEN.synSource)], 非法,应该为字符型(In 项目需求(CMRequirement))!(clsCMRequirementBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
  if (
    IsNullOrEmpty(pobjCMRequirementEN.requirementTypeId) == false &&
    pobjCMRequirementEN.requirementTypeId != '[nuull]' &&
    GetStrLen(pobjCMRequirementEN.requirementTypeId) != 4
  ) {
    throw '(errid:Watl000415)字段[需求类型Id]作为外键字段,长度应该为4(In 项目需求)!(clsCMRequirementBL:CheckPropertyNew)';
  }
  if (
    IsNullOrEmpty(pobjCMRequirementEN.upReqId) == false &&
    pobjCMRequirementEN.upReqId != '[nuull]' &&
    GetStrLen(pobjCMRequirementEN.upReqId) != 8
  ) {
    throw '(errid:Watl000415)字段[上级需求Id]作为外键字段,长度应该为8(In 项目需求)!(clsCMRequirementBL:CheckPropertyNew)';
  }

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function CMRequirement_CheckProperty4Update(pobjCMRequirementEN: clsCMRequirementEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjCMRequirementEN.reqId) == false &&
    GetStrLen(pobjCMRequirementEN.reqId) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[需求Id(reqId)]的长度不能超过8(In 项目需求(CMRequirement))!值:$(pobjCMRequirementEN.reqId)(clsCMRequirementBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMRequirementEN.requirementName) == false &&
    GetStrLen(pobjCMRequirementEN.requirementName) > 50
  ) {
    throw new Error(
      '(errid:Watl000416)字段[需求名称(requirementName)]的长度不能超过50(In 项目需求(CMRequirement))!值:$(pobjCMRequirementEN.requirementName)(clsCMRequirementBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMRequirementEN.requirementTypeId) == false &&
    GetStrLen(pobjCMRequirementEN.requirementTypeId) > 4
  ) {
    throw new Error(
      '(errid:Watl000416)字段[需求类型Id(requirementTypeId)]的长度不能超过4(In 项目需求(CMRequirement))!值:$(pobjCMRequirementEN.requirementTypeId)(clsCMRequirementBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMRequirementEN.reqContent) == false &&
    GetStrLen(pobjCMRequirementEN.reqContent) > 4000
  ) {
    throw new Error(
      '(errid:Watl000416)字段[需求内容(reqContent)]的长度不能超过4000(In 项目需求(CMRequirement))!值:$(pobjCMRequirementEN.reqContent)(clsCMRequirementBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMRequirementEN.upReqId) == false &&
    GetStrLen(pobjCMRequirementEN.upReqId) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[上级需求Id(upReqId)]的长度不能超过8(In 项目需求(CMRequirement))!值:$(pobjCMRequirementEN.upReqId)(clsCMRequirementBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMRequirementEN.cmPrjId) == false &&
    GetStrLen(pobjCMRequirementEN.cmPrjId) > 6
  ) {
    throw new Error(
      '(errid:Watl000416)字段[CM工程Id(cmPrjId)]的长度不能超过6(In 项目需求(CMRequirement))!值:$(pobjCMRequirementEN.cmPrjId)(clsCMRequirementBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMRequirementEN.funcModuleAgcId) == false &&
    GetStrLen(pobjCMRequirementEN.funcModuleAgcId) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[功能模块Id(funcModuleAgcId)]的长度不能超过8(In 项目需求(CMRequirement))!值:$(pobjCMRequirementEN.funcModuleAgcId)(clsCMRequirementBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMRequirementEN.prjId) == false &&
    GetStrLen(pobjCMRequirementEN.prjId) > 4
  ) {
    throw new Error(
      '(errid:Watl000416)字段[工程ID(prjId)]的长度不能超过4(In 项目需求(CMRequirement))!值:$(pobjCMRequirementEN.prjId)(clsCMRequirementBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMRequirementEN.updUser) == false &&
    GetStrLen(pobjCMRequirementEN.updUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改者(updUser)]的长度不能超过20(In 项目需求(CMRequirement))!值:$(pobjCMRequirementEN.updUser)(clsCMRequirementBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMRequirementEN.updDate) == false &&
    GetStrLen(pobjCMRequirementEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 项目需求(CMRequirement))!值:$(pobjCMRequirementEN.updDate)(clsCMRequirementBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMRequirementEN.memo) == false &&
    GetStrLen(pobjCMRequirementEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In 项目需求(CMRequirement))!值:$(pobjCMRequirementEN.memo)(clsCMRequirementBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMRequirementEN.synchToServerDate) == false &&
    GetStrLen(pobjCMRequirementEN.synchToServerDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[同步到Server日期(synchToServerDate)]的长度不能超过20(In 项目需求(CMRequirement))!值:$(pobjCMRequirementEN.synchToServerDate)(clsCMRequirementBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMRequirementEN.synchToServerUser) == false &&
    GetStrLen(pobjCMRequirementEN.synchToServerUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[同步到Server用户(synchToServerUser)]的长度不能超过20(In 项目需求(CMRequirement))!值:$(pobjCMRequirementEN.synchToServerUser)(clsCMRequirementBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMRequirementEN.synchToClientDate) == false &&
    GetStrLen(pobjCMRequirementEN.synchToClientDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[同步到Client库日期(synchToClientDate)]的长度不能超过20(In 项目需求(CMRequirement))!值:$(pobjCMRequirementEN.synchToClientDate)(clsCMRequirementBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMRequirementEN.synchToClientUser) == false &&
    GetStrLen(pobjCMRequirementEN.synchToClientUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[同步到Client库用户(synchToClientUser)]的长度不能超过20(In 项目需求(CMRequirement))!值:$(pobjCMRequirementEN.synchToClientUser)(clsCMRequirementBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMRequirementEN.synSource) == false &&
    GetStrLen(pobjCMRequirementEN.synSource) > 50
  ) {
    throw new Error(
      '(errid:Watl000416)字段[同步来源(synSource)]的长度不能超过50(In 项目需求(CMRequirement))!值:$(pobjCMRequirementEN.synSource)(clsCMRequirementBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjCMRequirementEN.reqId) == false &&
    undefined !== pobjCMRequirementEN.reqId &&
    tzDataType.isString(pobjCMRequirementEN.reqId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[需求Id(reqId)]的值:[$(pobjCMRequirementEN.reqId)], 非法,应该为字符型(In 项目需求(CMRequirement))!(clsCMRequirementBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMRequirementEN.requirementName) == false &&
    undefined !== pobjCMRequirementEN.requirementName &&
    tzDataType.isString(pobjCMRequirementEN.requirementName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[需求名称(requirementName)]的值:[$(pobjCMRequirementEN.requirementName)], 非法,应该为字符型(In 项目需求(CMRequirement))!(clsCMRequirementBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMRequirementEN.requirementTypeId) == false &&
    undefined !== pobjCMRequirementEN.requirementTypeId &&
    tzDataType.isString(pobjCMRequirementEN.requirementTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[需求类型Id(requirementTypeId)]的值:[$(pobjCMRequirementEN.requirementTypeId)], 非法,应该为字符型(In 项目需求(CMRequirement))!(clsCMRequirementBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMRequirementEN.reqContent) == false &&
    undefined !== pobjCMRequirementEN.reqContent &&
    tzDataType.isString(pobjCMRequirementEN.reqContent) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[需求内容(reqContent)]的值:[$(pobjCMRequirementEN.reqContent)], 非法,应该为字符型(In 项目需求(CMRequirement))!(clsCMRequirementBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMRequirementEN.upReqId) == false &&
    undefined !== pobjCMRequirementEN.upReqId &&
    tzDataType.isString(pobjCMRequirementEN.upReqId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[上级需求Id(upReqId)]的值:[$(pobjCMRequirementEN.upReqId)], 非法,应该为字符型(In 项目需求(CMRequirement))!(clsCMRequirementBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjCMRequirementEN.isFinished &&
    undefined !== pobjCMRequirementEN.isFinished &&
    tzDataType.isBoolean(pobjCMRequirementEN.isFinished) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否完成(isFinished)]的值:[$(pobjCMRequirementEN.isFinished)], 非法,应该为布尔型(In 项目需求(CMRequirement))!(clsCMRequirementBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMRequirementEN.cmPrjId) == false &&
    undefined !== pobjCMRequirementEN.cmPrjId &&
    tzDataType.isString(pobjCMRequirementEN.cmPrjId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[CM工程Id(cmPrjId)]的值:[$(pobjCMRequirementEN.cmPrjId)], 非法,应该为字符型(In 项目需求(CMRequirement))!(clsCMRequirementBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMRequirementEN.funcModuleAgcId) == false &&
    undefined !== pobjCMRequirementEN.funcModuleAgcId &&
    tzDataType.isString(pobjCMRequirementEN.funcModuleAgcId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[功能模块Id(funcModuleAgcId)]的值:[$(pobjCMRequirementEN.funcModuleAgcId)], 非法,应该为字符型(In 项目需求(CMRequirement))!(clsCMRequirementBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMRequirementEN.prjId) == false &&
    undefined !== pobjCMRequirementEN.prjId &&
    tzDataType.isString(pobjCMRequirementEN.prjId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[工程ID(prjId)]的值:[$(pobjCMRequirementEN.prjId)], 非法,应该为字符型(In 项目需求(CMRequirement))!(clsCMRequirementBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMRequirementEN.updUser) == false &&
    undefined !== pobjCMRequirementEN.updUser &&
    tzDataType.isString(pobjCMRequirementEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改者(updUser)]的值:[$(pobjCMRequirementEN.updUser)], 非法,应该为字符型(In 项目需求(CMRequirement))!(clsCMRequirementBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMRequirementEN.updDate) == false &&
    undefined !== pobjCMRequirementEN.updDate &&
    tzDataType.isString(pobjCMRequirementEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjCMRequirementEN.updDate)], 非法,应该为字符型(In 项目需求(CMRequirement))!(clsCMRequirementBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMRequirementEN.memo) == false &&
    undefined !== pobjCMRequirementEN.memo &&
    tzDataType.isString(pobjCMRequirementEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[说明(memo)]的值:[$(pobjCMRequirementEN.memo)], 非法,应该为字符型(In 项目需求(CMRequirement))!(clsCMRequirementBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjCMRequirementEN.isSynchToServer &&
    undefined !== pobjCMRequirementEN.isSynchToServer &&
    tzDataType.isBoolean(pobjCMRequirementEN.isSynchToServer) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否同步到Server(isSynchToServer)]的值:[$(pobjCMRequirementEN.isSynchToServer)], 非法,应该为布尔型(In 项目需求(CMRequirement))!(clsCMRequirementBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMRequirementEN.synchToServerDate) == false &&
    undefined !== pobjCMRequirementEN.synchToServerDate &&
    tzDataType.isString(pobjCMRequirementEN.synchToServerDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[同步到Server日期(synchToServerDate)]的值:[$(pobjCMRequirementEN.synchToServerDate)], 非法,应该为字符型(In 项目需求(CMRequirement))!(clsCMRequirementBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMRequirementEN.synchToServerUser) == false &&
    undefined !== pobjCMRequirementEN.synchToServerUser &&
    tzDataType.isString(pobjCMRequirementEN.synchToServerUser) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[同步到Server用户(synchToServerUser)]的值:[$(pobjCMRequirementEN.synchToServerUser)], 非法,应该为字符型(In 项目需求(CMRequirement))!(clsCMRequirementBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjCMRequirementEN.isSynchToClient &&
    undefined !== pobjCMRequirementEN.isSynchToClient &&
    tzDataType.isBoolean(pobjCMRequirementEN.isSynchToClient) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否同步到Client(isSynchToClient)]的值:[$(pobjCMRequirementEN.isSynchToClient)], 非法,应该为布尔型(In 项目需求(CMRequirement))!(clsCMRequirementBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMRequirementEN.synchToClientDate) == false &&
    undefined !== pobjCMRequirementEN.synchToClientDate &&
    tzDataType.isString(pobjCMRequirementEN.synchToClientDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[同步到Client库日期(synchToClientDate)]的值:[$(pobjCMRequirementEN.synchToClientDate)], 非法,应该为字符型(In 项目需求(CMRequirement))!(clsCMRequirementBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMRequirementEN.synchToClientUser) == false &&
    undefined !== pobjCMRequirementEN.synchToClientUser &&
    tzDataType.isString(pobjCMRequirementEN.synchToClientUser) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[同步到Client库用户(synchToClientUser)]的值:[$(pobjCMRequirementEN.synchToClientUser)], 非法,应该为字符型(In 项目需求(CMRequirement))!(clsCMRequirementBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMRequirementEN.synSource) == false &&
    undefined !== pobjCMRequirementEN.synSource &&
    tzDataType.isString(pobjCMRequirementEN.synSource) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[同步来源(synSource)]的值:[$(pobjCMRequirementEN.synSource)], 非法,应该为字符型(In 项目需求(CMRequirement))!(clsCMRequirementBL:CheckProperty4Update)',
    );
  }
  //检查主键是否为Null或者空!
  if (
    IsNullOrEmpty(pobjCMRequirementEN.reqId) === true ||
    pobjCMRequirementEN.reqId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000064)字段[需求Id]不能为空(In 项目需求)!(clsCMRequirementBL:CheckProperty4Update)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
  if (
    IsNullOrEmpty(pobjCMRequirementEN.requirementTypeId) == false &&
    pobjCMRequirementEN.requirementTypeId != '[nuull]' &&
    GetStrLen(pobjCMRequirementEN.requirementTypeId) != 4
  ) {
    throw '(errid:Watl000418)字段[需求类型Id]作为外键字段,长度应该为4(In 项目需求)!(clsCMRequirementBL:CheckPropertyNew)';
  }
  if (
    IsNullOrEmpty(pobjCMRequirementEN.upReqId) == false &&
    pobjCMRequirementEN.upReqId != '[nuull]' &&
    GetStrLen(pobjCMRequirementEN.upReqId) != 8
  ) {
    throw '(errid:Watl000418)字段[上级需求Id]作为外键字段,长度应该为8(In 项目需求)!(clsCMRequirementBL:CheckPropertyNew)';
  }
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2024-02-03
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function CMRequirement_GetJSONStrByObj(pobjCMRequirementEN: clsCMRequirementEN): string {
  pobjCMRequirementEN.sfUpdFldSetStr = pobjCMRequirementEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjCMRequirementEN);
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
 * 日期:2024-02-03
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
 */
export function CMRequirement_GetObjLstByJSONStr(strJSON: string): Array<clsCMRequirementEN> {
  let arrCMRequirementObjLst = new Array<clsCMRequirementEN>();
  if (strJSON === '') {
    return arrCMRequirementObjLst;
  }
  try {
    arrCMRequirementObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrCMRequirementObjLst;
  }
  return arrCMRequirementObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2024-02-03
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrCMRequirementObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function CMRequirement_GetObjLstByJSONObjLst(
  arrCMRequirementObjLstS: Array<clsCMRequirementEN>,
): Array<clsCMRequirementEN> {
  const arrCMRequirementObjLst = new Array<clsCMRequirementEN>();
  for (const objInFor of arrCMRequirementObjLstS) {
    const obj1 = CMRequirement_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrCMRequirementObjLst.push(obj1);
  }
  return arrCMRequirementObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2024-02-03
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function CMRequirement_GetObjByJSONStr(strJSON: string): clsCMRequirementEN {
  let pobjCMRequirementEN = new clsCMRequirementEN();
  if (strJSON === '') {
    return pobjCMRequirementEN;
  }
  try {
    pobjCMRequirementEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjCMRequirementEN;
  }
  return pobjCMRequirementEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function CMRequirement_GetCombineCondition(
  objCMRequirementCond: clsCMRequirementEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objCMRequirementCond.dicFldComparisonOp,
      clsCMRequirementEN.con_ReqId,
    ) == true
  ) {
    const strComparisonOpReqId: string =
      objCMRequirementCond.dicFldComparisonOp[clsCMRequirementEN.con_ReqId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMRequirementEN.con_ReqId,
      objCMRequirementCond.reqId,
      strComparisonOpReqId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMRequirementCond.dicFldComparisonOp,
      clsCMRequirementEN.con_RequirementName,
    ) == true
  ) {
    const strComparisonOpRequirementName: string =
      objCMRequirementCond.dicFldComparisonOp[clsCMRequirementEN.con_RequirementName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMRequirementEN.con_RequirementName,
      objCMRequirementCond.requirementName,
      strComparisonOpRequirementName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMRequirementCond.dicFldComparisonOp,
      clsCMRequirementEN.con_RequirementTypeId,
    ) == true
  ) {
    const strComparisonOpRequirementTypeId: string =
      objCMRequirementCond.dicFldComparisonOp[clsCMRequirementEN.con_RequirementTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMRequirementEN.con_RequirementTypeId,
      objCMRequirementCond.requirementTypeId,
      strComparisonOpRequirementTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMRequirementCond.dicFldComparisonOp,
      clsCMRequirementEN.con_ReqContent,
    ) == true
  ) {
    const strComparisonOpReqContent: string =
      objCMRequirementCond.dicFldComparisonOp[clsCMRequirementEN.con_ReqContent];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMRequirementEN.con_ReqContent,
      objCMRequirementCond.reqContent,
      strComparisonOpReqContent,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMRequirementCond.dicFldComparisonOp,
      clsCMRequirementEN.con_UpReqId,
    ) == true
  ) {
    const strComparisonOpUpReqId: string =
      objCMRequirementCond.dicFldComparisonOp[clsCMRequirementEN.con_UpReqId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMRequirementEN.con_UpReqId,
      objCMRequirementCond.upReqId,
      strComparisonOpUpReqId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMRequirementCond.dicFldComparisonOp,
      clsCMRequirementEN.con_IsFinished,
    ) == true
  ) {
    if (objCMRequirementCond.isFinished == true) {
      strWhereCond += Format(" And {0} = '1'", clsCMRequirementEN.con_IsFinished);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsCMRequirementEN.con_IsFinished);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMRequirementCond.dicFldComparisonOp,
      clsCMRequirementEN.con_CmPrjId,
    ) == true
  ) {
    const strComparisonOpCmPrjId: string =
      objCMRequirementCond.dicFldComparisonOp[clsCMRequirementEN.con_CmPrjId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMRequirementEN.con_CmPrjId,
      objCMRequirementCond.cmPrjId,
      strComparisonOpCmPrjId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMRequirementCond.dicFldComparisonOp,
      clsCMRequirementEN.con_FuncModuleAgcId,
    ) == true
  ) {
    const strComparisonOpFuncModuleAgcId: string =
      objCMRequirementCond.dicFldComparisonOp[clsCMRequirementEN.con_FuncModuleAgcId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMRequirementEN.con_FuncModuleAgcId,
      objCMRequirementCond.funcModuleAgcId,
      strComparisonOpFuncModuleAgcId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMRequirementCond.dicFldComparisonOp,
      clsCMRequirementEN.con_PrjId,
    ) == true
  ) {
    const strComparisonOpPrjId: string =
      objCMRequirementCond.dicFldComparisonOp[clsCMRequirementEN.con_PrjId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMRequirementEN.con_PrjId,
      objCMRequirementCond.prjId,
      strComparisonOpPrjId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMRequirementCond.dicFldComparisonOp,
      clsCMRequirementEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objCMRequirementCond.dicFldComparisonOp[clsCMRequirementEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMRequirementEN.con_UpdUser,
      objCMRequirementCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMRequirementCond.dicFldComparisonOp,
      clsCMRequirementEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objCMRequirementCond.dicFldComparisonOp[clsCMRequirementEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMRequirementEN.con_UpdDate,
      objCMRequirementCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMRequirementCond.dicFldComparisonOp,
      clsCMRequirementEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objCMRequirementCond.dicFldComparisonOp[clsCMRequirementEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMRequirementEN.con_Memo,
      objCMRequirementCond.memo,
      strComparisonOpMemo,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMRequirementCond.dicFldComparisonOp,
      clsCMRequirementEN.con_IsSynchToServer,
    ) == true
  ) {
    if (objCMRequirementCond.isSynchToServer == true) {
      strWhereCond += Format(" And {0} = '1'", clsCMRequirementEN.con_IsSynchToServer);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsCMRequirementEN.con_IsSynchToServer);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMRequirementCond.dicFldComparisonOp,
      clsCMRequirementEN.con_SynchToServerDate,
    ) == true
  ) {
    const strComparisonOpSynchToServerDate: string =
      objCMRequirementCond.dicFldComparisonOp[clsCMRequirementEN.con_SynchToServerDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMRequirementEN.con_SynchToServerDate,
      objCMRequirementCond.synchToServerDate,
      strComparisonOpSynchToServerDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMRequirementCond.dicFldComparisonOp,
      clsCMRequirementEN.con_SynchToServerUser,
    ) == true
  ) {
    const strComparisonOpSynchToServerUser: string =
      objCMRequirementCond.dicFldComparisonOp[clsCMRequirementEN.con_SynchToServerUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMRequirementEN.con_SynchToServerUser,
      objCMRequirementCond.synchToServerUser,
      strComparisonOpSynchToServerUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMRequirementCond.dicFldComparisonOp,
      clsCMRequirementEN.con_IsSynchToClient,
    ) == true
  ) {
    if (objCMRequirementCond.isSynchToClient == true) {
      strWhereCond += Format(" And {0} = '1'", clsCMRequirementEN.con_IsSynchToClient);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsCMRequirementEN.con_IsSynchToClient);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMRequirementCond.dicFldComparisonOp,
      clsCMRequirementEN.con_SynchToClientDate,
    ) == true
  ) {
    const strComparisonOpSynchToClientDate: string =
      objCMRequirementCond.dicFldComparisonOp[clsCMRequirementEN.con_SynchToClientDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMRequirementEN.con_SynchToClientDate,
      objCMRequirementCond.synchToClientDate,
      strComparisonOpSynchToClientDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMRequirementCond.dicFldComparisonOp,
      clsCMRequirementEN.con_SynchToClientUser,
    ) == true
  ) {
    const strComparisonOpSynchToClientUser: string =
      objCMRequirementCond.dicFldComparisonOp[clsCMRequirementEN.con_SynchToClientUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMRequirementEN.con_SynchToClientUser,
      objCMRequirementCond.synchToClientUser,
      strComparisonOpSynchToClientUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMRequirementCond.dicFldComparisonOp,
      clsCMRequirementEN.con_SynSource,
    ) == true
  ) {
    const strComparisonOpSynSource: string =
      objCMRequirementCond.dicFldComparisonOp[clsCMRequirementEN.con_SynSource];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMRequirementEN.con_SynSource,
      objCMRequirementCond.synSource,
      strComparisonOpSynSource,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--CMRequirement(项目需求),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strCmPrjId: CM工程Id(要求唯一的字段)
 * @param strRequirementName: 需求名称(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function CMRequirement_GetUniCondStr(objCMRequirementEN: clsCMRequirementEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and CmPrjId = '{0}'", objCMRequirementEN.cmPrjId);
  strWhereCond += Format(" and RequirementName = '{0}'", objCMRequirementEN.requirementName);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--CMRequirement(项目需求),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strCmPrjId: CM工程Id(要求唯一的字段)
 * @param strRequirementName: 需求名称(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function CMRequirement_GetUniCondStr4Update(objCMRequirementEN: clsCMRequirementEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and ReqId <> '{0}'", objCMRequirementEN.reqId);
  strWhereCond += Format(" and CmPrjId = '{0}'", objCMRequirementEN.cmPrjId);
  strWhereCond += Format(" and RequirementName = '{0}'", objCMRequirementEN.requirementName);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objCMRequirementENS:源对象
 * @param objCMRequirementENT:目标对象
 */
export function CMRequirement_GetObjFromJsonObj(
  objCMRequirementENS: clsCMRequirementEN,
): clsCMRequirementEN {
  const objCMRequirementENT: clsCMRequirementEN = new clsCMRequirementEN();
  ObjectAssign(objCMRequirementENT, objCMRequirementENS);
  return objCMRequirementENT;
}
