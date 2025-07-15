/**
 * 类名:clswf_StepPointRelaWApi
 * 表名:wf_StepPointRela(00050486)
 * 版本:2023.07.28.1(服务器:WIN-SRV103-116)
 * 日期:2023/07/29 17:25:03
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:工作流管理(WorkFlow)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 工作流与结点关系(wf_StepPointRela)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2023年07月29日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { clsOrderByData } from '@/ts/PubFun/clsOrderByData';
import { GetStrLen, tzDataType, Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { clswf_StepPointRelaEN } from '@/ts/L0Entity/WorkFlow/clswf_StepPointRelaEN';
import { GetExceptionStr, myShowErrorMsg, ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const wf_StepPointRela_Controller = 'wf_StepPointRelaApi';
export const wf_StepPointRela_ConstructorName = 'wf_StepPointRela';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngWorkFlowStepPointRelaId:关键字
 * @returns 对象
 **/
export async function wf_StepPointRela_GetObjByWorkFlowStepPointRelaIdAsync(
  lngWorkFlowStepPointRelaId: number,
): Promise<clswf_StepPointRelaEN | null> {
  const strThisFuncName = 'GetObjByWorkFlowStepPointRelaIdAsync';

  if (lngWorkFlowStepPointRelaId == 0) {
    const strMsg = Format(
      '参数:[lngWorkFlowStepPointRelaId]不能为空!(In clswf_StepPointRelaWApi.GetObjByWorkFlowStepPointRelaIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByWorkFlowStepPointRelaId';
  const strUrl = GetWebApiUrl(wf_StepPointRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      lngWorkFlowStepPointRelaId,
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
      const objwf_StepPointRela = wf_StepPointRela_GetObjFromJsonObj(returnObj);
      return objwf_StepPointRela;
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
        wf_StepPointRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        wf_StepPointRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[GetObjByWorkFlowStepPointRelaIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )
//该表没有使用Cache,不需要生成[GetObjByWorkFlowStepPointRelaIdlocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[UpdateObjInLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache
//该表没有使用Cache,不需要生成[GetNameByWorkFlowStepPointRelaIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
//该表没有使用Cache,不需要生成[func]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func )

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2023-07-29
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function wf_StepPointRela_SortFunDefa(
  a: clswf_StepPointRelaEN,
  b: clswf_StepPointRelaEN,
): number {
  return a.workFlowStepPointRelaId - b.workFlowStepPointRelaId;
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2023-07-29
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function wf_StepPointRela_SortFunDefa2Fld(
  a: clswf_StepPointRelaEN,
  b: clswf_StepPointRelaEN,
): number {
  if (a.workFlowId == b.workFlowId) return a.pointId.localeCompare(b.pointId);
  else return a.workFlowId.localeCompare(b.workFlowId);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2023-07-29
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function wf_StepPointRela_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clswf_StepPointRelaEN.con_WorkFlowStepPointRelaId:
        return (a: clswf_StepPointRelaEN, b: clswf_StepPointRelaEN) => {
          return a.workFlowStepPointRelaId - b.workFlowStepPointRelaId;
        };
      case clswf_StepPointRelaEN.con_WorkFlowId:
        return (a: clswf_StepPointRelaEN, b: clswf_StepPointRelaEN) => {
          return a.workFlowId.localeCompare(b.workFlowId);
        };
      case clswf_StepPointRelaEN.con_PointId:
        return (a: clswf_StepPointRelaEN, b: clswf_StepPointRelaEN) => {
          return a.pointId.localeCompare(b.pointId);
        };
      case clswf_StepPointRelaEN.con_PointTypeId:
        return (a: clswf_StepPointRelaEN, b: clswf_StepPointRelaEN) => {
          return a.pointTypeId.localeCompare(b.pointTypeId);
        };
      case clswf_StepPointRelaEN.con_LevelNo:
        return (a: clswf_StepPointRelaEN, b: clswf_StepPointRelaEN) => {
          return a.levelNo - b.levelNo;
        };
      case clswf_StepPointRelaEN.con_InDegree:
        return (a: clswf_StepPointRelaEN, b: clswf_StepPointRelaEN) => {
          return a.inDegree - b.inDegree;
        };
      case clswf_StepPointRelaEN.con_OutDegree:
        return (a: clswf_StepPointRelaEN, b: clswf_StepPointRelaEN) => {
          return a.outDegree - b.outDegree;
        };
      case clswf_StepPointRelaEN.con_OrderNum:
        return (a: clswf_StepPointRelaEN, b: clswf_StepPointRelaEN) => {
          return a.orderNum - b.orderNum;
        };
      case clswf_StepPointRelaEN.con_UpdDate:
        return (a: clswf_StepPointRelaEN, b: clswf_StepPointRelaEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clswf_StepPointRelaEN.con_UpdUser:
        return (a: clswf_StepPointRelaEN, b: clswf_StepPointRelaEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clswf_StepPointRelaEN.con_Memo:
        return (a: clswf_StepPointRelaEN, b: clswf_StepPointRelaEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[wf_StepPointRela]中不存在!(in ${wf_StepPointRela_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clswf_StepPointRelaEN.con_WorkFlowStepPointRelaId:
        return (a: clswf_StepPointRelaEN, b: clswf_StepPointRelaEN) => {
          return b.workFlowStepPointRelaId - a.workFlowStepPointRelaId;
        };
      case clswf_StepPointRelaEN.con_WorkFlowId:
        return (a: clswf_StepPointRelaEN, b: clswf_StepPointRelaEN) => {
          return b.workFlowId.localeCompare(a.workFlowId);
        };
      case clswf_StepPointRelaEN.con_PointId:
        return (a: clswf_StepPointRelaEN, b: clswf_StepPointRelaEN) => {
          return b.pointId.localeCompare(a.pointId);
        };
      case clswf_StepPointRelaEN.con_PointTypeId:
        return (a: clswf_StepPointRelaEN, b: clswf_StepPointRelaEN) => {
          return b.pointTypeId.localeCompare(a.pointTypeId);
        };
      case clswf_StepPointRelaEN.con_LevelNo:
        return (a: clswf_StepPointRelaEN, b: clswf_StepPointRelaEN) => {
          return b.levelNo - a.levelNo;
        };
      case clswf_StepPointRelaEN.con_InDegree:
        return (a: clswf_StepPointRelaEN, b: clswf_StepPointRelaEN) => {
          return b.inDegree - a.inDegree;
        };
      case clswf_StepPointRelaEN.con_OutDegree:
        return (a: clswf_StepPointRelaEN, b: clswf_StepPointRelaEN) => {
          return b.outDegree - a.outDegree;
        };
      case clswf_StepPointRelaEN.con_OrderNum:
        return (a: clswf_StepPointRelaEN, b: clswf_StepPointRelaEN) => {
          return b.orderNum - a.orderNum;
        };
      case clswf_StepPointRelaEN.con_UpdDate:
        return (a: clswf_StepPointRelaEN, b: clswf_StepPointRelaEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clswf_StepPointRelaEN.con_UpdUser:
        return (a: clswf_StepPointRelaEN, b: clswf_StepPointRelaEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clswf_StepPointRelaEN.con_Memo:
        return (a: clswf_StepPointRelaEN, b: clswf_StepPointRelaEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[wf_StepPointRela]中不存在!(in ${wf_StepPointRela_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2023-07-29
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function wf_StepPointRela_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clswf_StepPointRelaEN.con_WorkFlowStepPointRelaId:
      return (obj: clswf_StepPointRelaEN) => {
        return obj.workFlowStepPointRelaId === value;
      };
    case clswf_StepPointRelaEN.con_WorkFlowId:
      return (obj: clswf_StepPointRelaEN) => {
        return obj.workFlowId === value;
      };
    case clswf_StepPointRelaEN.con_PointId:
      return (obj: clswf_StepPointRelaEN) => {
        return obj.pointId === value;
      };
    case clswf_StepPointRelaEN.con_PointTypeId:
      return (obj: clswf_StepPointRelaEN) => {
        return obj.pointTypeId === value;
      };
    case clswf_StepPointRelaEN.con_LevelNo:
      return (obj: clswf_StepPointRelaEN) => {
        return obj.levelNo === value;
      };
    case clswf_StepPointRelaEN.con_InDegree:
      return (obj: clswf_StepPointRelaEN) => {
        return obj.inDegree === value;
      };
    case clswf_StepPointRelaEN.con_OutDegree:
      return (obj: clswf_StepPointRelaEN) => {
        return obj.outDegree === value;
      };
    case clswf_StepPointRelaEN.con_OrderNum:
      return (obj: clswf_StepPointRelaEN) => {
        return obj.orderNum === value;
      };
    case clswf_StepPointRelaEN.con_UpdDate:
      return (obj: clswf_StepPointRelaEN) => {
        return obj.updDate === value;
      };
    case clswf_StepPointRelaEN.con_UpdUser:
      return (obj: clswf_StepPointRelaEN) => {
        return obj.updUser === value;
      };
    case clswf_StepPointRelaEN.con_Memo:
      return (obj: clswf_StepPointRelaEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[wf_StepPointRela]中不存在!(in ${wf_StepPointRela_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}
//该表没有使用Cache,不需要生成[wf_StepPointRela__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function wf_StepPointRela_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(wf_StepPointRela_Controller, strAction);

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
        wf_StepPointRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        wf_StepPointRela_ConstructorName,
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
export async function wf_StepPointRela_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(wf_StepPointRela_Controller, strAction);

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
        wf_StepPointRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        wf_StepPointRela_ConstructorName,
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
export async function wf_StepPointRela_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clswf_StepPointRelaEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(wf_StepPointRela_Controller, strAction);

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
      const objwf_StepPointRela = wf_StepPointRela_GetObjFromJsonObj(returnObj);
      return objwf_StepPointRela;
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
        wf_StepPointRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        wf_StepPointRela_ConstructorName,
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
export async function wf_StepPointRela_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clswf_StepPointRelaEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(wf_StepPointRela_Controller, strAction);

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
          wf_StepPointRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = wf_StepPointRela_GetObjLstByJSONObjLst(returnObjLst);
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
        wf_StepPointRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        wf_StepPointRela_ConstructorName,
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
 * @param arrWorkFlowStepPointRelaId:关键字列表
 * @returns 对象列表
 **/
export async function wf_StepPointRela_GetObjLstByWorkFlowStepPointRelaIdLstAsync(
  arrWorkFlowStepPointRelaId: Array<string>,
): Promise<Array<clswf_StepPointRelaEN>> {
  const strThisFuncName = 'GetObjLstByWorkFlowStepPointRelaIdLstAsync';
  const strAction = 'GetObjLstByWorkFlowStepPointRelaIdLst';
  const strUrl = GetWebApiUrl(wf_StepPointRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrWorkFlowStepPointRelaId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          wf_StepPointRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = wf_StepPointRela_GetObjLstByJSONObjLst(returnObjLst);
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
        wf_StepPointRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        wf_StepPointRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[GetObjLstByWorkFlowStepPointRelaIdLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

/**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export async function wf_StepPointRela_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clswf_StepPointRelaEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(wf_StepPointRela_Controller, strAction);

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
          wf_StepPointRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = wf_StepPointRela_GetObjLstByJSONObjLst(returnObjLst);
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
        wf_StepPointRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        wf_StepPointRela_ConstructorName,
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
export async function wf_StepPointRela_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clswf_StepPointRelaEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(wf_StepPointRela_Controller, strAction);

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
          wf_StepPointRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = wf_StepPointRela_GetObjLstByJSONObjLst(returnObjLst);
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
        wf_StepPointRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        wf_StepPointRela_ConstructorName,
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
export async function wf_StepPointRela_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clswf_StepPointRelaEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clswf_StepPointRelaEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(wf_StepPointRela_Controller, strAction);

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
          wf_StepPointRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = wf_StepPointRela_GetObjLstByJSONObjLst(returnObjLst);
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
        wf_StepPointRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        wf_StepPointRela_ConstructorName,
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
 * @param lngWorkFlowStepPointRelaId:关键字
 * @returns 获取删除的结果
 **/
export async function wf_StepPointRela_DelRecordAsync(
  lngWorkFlowStepPointRelaId: number,
): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(wf_StepPointRela_Controller, strAction);
  strUrl = Format('{0}/?Id={1}', strUrl, lngWorkFlowStepPointRelaId);

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
        wf_StepPointRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        wf_StepPointRela_ConstructorName,
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
 * @param arrWorkFlowStepPointRelaId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function wf_StepPointRela_Delwf_StepPointRelasAsync(
  arrWorkFlowStepPointRelaId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'Delwf_StepPointRelasAsync';
  const strAction = 'Delwf_StepPointRelas';
  const strUrl = GetWebApiUrl(wf_StepPointRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrWorkFlowStepPointRelaId, config);
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
        wf_StepPointRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        wf_StepPointRela_ConstructorName,
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
export async function wf_StepPointRela_Delwf_StepPointRelasByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'Delwf_StepPointRelasByCondAsync';
  const strAction = 'Delwf_StepPointRelasByCond';
  const strUrl = GetWebApiUrl(wf_StepPointRela_Controller, strAction);

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
        wf_StepPointRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        wf_StepPointRela_ConstructorName,
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
 * @param objwf_StepPointRelaEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function wf_StepPointRela_AddNewRecordAsync(
  objwf_StepPointRelaEN: clswf_StepPointRelaEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objwf_StepPointRelaEN);
  const strUrl = GetWebApiUrl(wf_StepPointRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objwf_StepPointRelaEN, config);
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
        wf_StepPointRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        wf_StepPointRela_ConstructorName,
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
 * @param objwf_StepPointRelaEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function wf_StepPointRela_GoTopAsync(
  objOrderByData: clsOrderByData,
): Promise<boolean> {
  const strThisFuncName = 'GoTopAsync';
  let strMsg = '';
  const strAction = 'GoTop';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表置顶时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(wf_StepPointRela_Controller, strAction);

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
        wf_StepPointRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        wf_StepPointRela_ConstructorName,
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
 * @param objwf_StepPointRelaEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function wf_StepPointRela_UpMoveAsync(
  objOrderByData: clsOrderByData,
): Promise<boolean> {
  const strThisFuncName = 'UpMoveAsync';
  let strMsg = '';
  const strAction = 'UpMove';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表上移时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objwf_StepPointRelaEN);
  const strUrl = GetWebApiUrl(wf_StepPointRela_Controller, strAction);

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
        wf_StepPointRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        wf_StepPointRela_ConstructorName,
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
 * @param objwf_StepPointRelaEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function wf_StepPointRela_DownMoveAsync(
  objOrderByData: clsOrderByData,
): Promise<boolean> {
  const strThisFuncName = 'DownMoveAsync';
  let strMsg = '';
  const strAction = 'DownMove';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表下移时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objwf_StepPointRelaEN);
  const strUrl = GetWebApiUrl(wf_StepPointRela_Controller, strAction);

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
        wf_StepPointRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        wf_StepPointRela_ConstructorName,
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
 * @param objwf_StepPointRelaEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function wf_StepPointRela_GoBottomAsync(
  objOrderByData: clsOrderByData,
): Promise<boolean> {
  const strThisFuncName = 'GoBottomAsync';
  let strMsg = '';
  const strAction = 'GoBottom';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表置底时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objwf_StepPointRelaEN);
  const strUrl = GetWebApiUrl(wf_StepPointRela_Controller, strAction);

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
        wf_StepPointRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        wf_StepPointRela_ConstructorName,
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
 * @param objwf_StepPointRelaEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function wf_StepPointRela_ReOrderAsync(
  objOrderByData: clsOrderByData,
): Promise<boolean> {
  const strThisFuncName = 'ReOrderAsync';
  const strAction = 'ReOrder';
  //var strJSON = JSON.stringify(objwf_StepPointRelaEN);
  const strUrl = GetWebApiUrl(wf_StepPointRela_Controller, strAction);

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
        wf_StepPointRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        wf_StepPointRela_ConstructorName,
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
 * @param objwf_StepPointRelaEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function wf_StepPointRela_AddNewRecordWithReturnKeyAsync(
  objwf_StepPointRelaEN: clswf_StepPointRelaEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(wf_StepPointRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objwf_StepPointRelaEN, config);
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
        wf_StepPointRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        wf_StepPointRela_ConstructorName,
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
 * @param objwf_StepPointRelaEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function wf_StepPointRela_UpdateRecordAsync(
  objwf_StepPointRelaEN: clswf_StepPointRelaEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objwf_StepPointRelaEN.sfUpdFldSetStr === undefined ||
    objwf_StepPointRelaEN.sfUpdFldSetStr === null ||
    objwf_StepPointRelaEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objwf_StepPointRelaEN.workFlowStepPointRelaId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(wf_StepPointRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objwf_StepPointRelaEN, config);
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
        wf_StepPointRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        wf_StepPointRela_ConstructorName,
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
 * @param objwf_StepPointRelaEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function wf_StepPointRela_UpdateWithConditionAsync(
  objwf_StepPointRelaEN: clswf_StepPointRelaEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objwf_StepPointRelaEN.sfUpdFldSetStr === undefined ||
    objwf_StepPointRelaEN.sfUpdFldSetStr === null ||
    objwf_StepPointRelaEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objwf_StepPointRelaEN.workFlowStepPointRelaId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(wf_StepPointRela_Controller, strAction);
  objwf_StepPointRelaEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objwf_StepPointRelaEN, config);
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
        wf_StepPointRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        wf_StepPointRela_ConstructorName,
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
export async function wf_StepPointRela_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(wf_StepPointRela_Controller, strAction);

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
        wf_StepPointRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        wf_StepPointRela_ConstructorName,
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
 * @param lngWorkFlowStepPointRelaId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function wf_StepPointRela_IsExistAsync(
  lngWorkFlowStepPointRelaId: number,
): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(wf_StepPointRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      lngWorkFlowStepPointRelaId,
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
        wf_StepPointRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        wf_StepPointRela_ConstructorName,
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
export async function wf_StepPointRela_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(wf_StepPointRela_Controller, strAction);

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
        wf_StepPointRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        wf_StepPointRela_ConstructorName,
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
export async function wf_StepPointRela_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(wf_StepPointRela_Controller, strAction);

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
        wf_StepPointRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        wf_StepPointRela_ConstructorName,
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
export function wf_StepPointRela_GetWebApiUrl(strController: string, strAction: string): string {
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
export function wf_StepPointRela_CheckPropertyNew(pobjwf_StepPointRelaEN: clswf_StepPointRelaEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (
    IsNullOrEmpty(pobjwf_StepPointRelaEN.workFlowId) === true ||
    pobjwf_StepPointRelaEN.workFlowId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000411)字段[工作流Id]不能为空(In 工作流与结点关系)!(clswf_StepPointRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjwf_StepPointRelaEN.pointId) === true ||
    pobjwf_StepPointRelaEN.pointId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000411)字段[结点Id]不能为空(In 工作流与结点关系)!(clswf_StepPointRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjwf_StepPointRelaEN.pointTypeId) === true ||
    pobjwf_StepPointRelaEN.pointTypeId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000411)字段[工作流结点类型Id]不能为空(In 工作流与结点关系)!(clswf_StepPointRelaBL:CheckPropertyNew0)',
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjwf_StepPointRelaEN.workFlowId) == false &&
    GetStrLen(pobjwf_StepPointRelaEN.workFlowId) > 4
  ) {
    throw new Error(
      '(errid:Watl000413)字段[工作流Id(workFlowId)]的长度不能超过4(In 工作流与结点关系(wf_StepPointRela))!值:$(pobjwf_StepPointRelaEN.workFlowId)(clswf_StepPointRelaBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjwf_StepPointRelaEN.pointId) == false &&
    GetStrLen(pobjwf_StepPointRelaEN.pointId) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[结点Id(pointId)]的长度不能超过8(In 工作流与结点关系(wf_StepPointRela))!值:$(pobjwf_StepPointRelaEN.pointId)(clswf_StepPointRelaBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjwf_StepPointRelaEN.pointTypeId) == false &&
    GetStrLen(pobjwf_StepPointRelaEN.pointTypeId) > 2
  ) {
    throw new Error(
      '(errid:Watl000413)字段[工作流结点类型Id(pointTypeId)]的长度不能超过2(In 工作流与结点关系(wf_StepPointRela))!值:$(pobjwf_StepPointRelaEN.pointTypeId)(clswf_StepPointRelaBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjwf_StepPointRelaEN.updDate) == false &&
    GetStrLen(pobjwf_StepPointRelaEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 工作流与结点关系(wf_StepPointRela))!值:$(pobjwf_StepPointRelaEN.updDate)(clswf_StepPointRelaBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjwf_StepPointRelaEN.updUser) == false &&
    GetStrLen(pobjwf_StepPointRelaEN.updUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改者(updUser)]的长度不能超过20(In 工作流与结点关系(wf_StepPointRela))!值:$(pobjwf_StepPointRelaEN.updUser)(clswf_StepPointRelaBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjwf_StepPointRelaEN.memo) == false &&
    GetStrLen(pobjwf_StepPointRelaEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In 工作流与结点关系(wf_StepPointRela))!值:$(pobjwf_StepPointRelaEN.memo)(clswf_StepPointRelaBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjwf_StepPointRelaEN.workFlowStepPointRelaId &&
    undefined !== pobjwf_StepPointRelaEN.workFlowStepPointRelaId &&
    tzDataType.isNumber(pobjwf_StepPointRelaEN.workFlowStepPointRelaId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[工作流与结点关系Id(workFlowStepPointRelaId)]的值:[$(pobjwf_StepPointRelaEN.workFlowStepPointRelaId)], 非法,应该为数值型(In 工作流与结点关系(wf_StepPointRela))!(clswf_StepPointRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjwf_StepPointRelaEN.workFlowId) == false &&
    undefined !== pobjwf_StepPointRelaEN.workFlowId &&
    tzDataType.isString(pobjwf_StepPointRelaEN.workFlowId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[工作流Id(workFlowId)]的值:[$(pobjwf_StepPointRelaEN.workFlowId)], 非法,应该为字符型(In 工作流与结点关系(wf_StepPointRela))!(clswf_StepPointRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjwf_StepPointRelaEN.pointId) == false &&
    undefined !== pobjwf_StepPointRelaEN.pointId &&
    tzDataType.isString(pobjwf_StepPointRelaEN.pointId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[结点Id(pointId)]的值:[$(pobjwf_StepPointRelaEN.pointId)], 非法,应该为字符型(In 工作流与结点关系(wf_StepPointRela))!(clswf_StepPointRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjwf_StepPointRelaEN.pointTypeId) == false &&
    undefined !== pobjwf_StepPointRelaEN.pointTypeId &&
    tzDataType.isString(pobjwf_StepPointRelaEN.pointTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[工作流结点类型Id(pointTypeId)]的值:[$(pobjwf_StepPointRelaEN.pointTypeId)], 非法,应该为字符型(In 工作流与结点关系(wf_StepPointRela))!(clswf_StepPointRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjwf_StepPointRelaEN.levelNo &&
    undefined !== pobjwf_StepPointRelaEN.levelNo &&
    tzDataType.isNumber(pobjwf_StepPointRelaEN.levelNo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[层序号(levelNo)]的值:[$(pobjwf_StepPointRelaEN.levelNo)], 非法,应该为数值型(In 工作流与结点关系(wf_StepPointRela))!(clswf_StepPointRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjwf_StepPointRelaEN.inDegree &&
    undefined !== pobjwf_StepPointRelaEN.inDegree &&
    tzDataType.isNumber(pobjwf_StepPointRelaEN.inDegree) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[入度(inDegree)]的值:[$(pobjwf_StepPointRelaEN.inDegree)], 非法,应该为数值型(In 工作流与结点关系(wf_StepPointRela))!(clswf_StepPointRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjwf_StepPointRelaEN.outDegree &&
    undefined !== pobjwf_StepPointRelaEN.outDegree &&
    tzDataType.isNumber(pobjwf_StepPointRelaEN.outDegree) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[出度(outDegree)]的值:[$(pobjwf_StepPointRelaEN.outDegree)], 非法,应该为数值型(In 工作流与结点关系(wf_StepPointRela))!(clswf_StepPointRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjwf_StepPointRelaEN.orderNum &&
    undefined !== pobjwf_StepPointRelaEN.orderNum &&
    tzDataType.isNumber(pobjwf_StepPointRelaEN.orderNum) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[序号(orderNum)]的值:[$(pobjwf_StepPointRelaEN.orderNum)], 非法,应该为数值型(In 工作流与结点关系(wf_StepPointRela))!(clswf_StepPointRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjwf_StepPointRelaEN.updDate) == false &&
    undefined !== pobjwf_StepPointRelaEN.updDate &&
    tzDataType.isString(pobjwf_StepPointRelaEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjwf_StepPointRelaEN.updDate)], 非法,应该为字符型(In 工作流与结点关系(wf_StepPointRela))!(clswf_StepPointRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjwf_StepPointRelaEN.updUser) == false &&
    undefined !== pobjwf_StepPointRelaEN.updUser &&
    tzDataType.isString(pobjwf_StepPointRelaEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改者(updUser)]的值:[$(pobjwf_StepPointRelaEN.updUser)], 非法,应该为字符型(In 工作流与结点关系(wf_StepPointRela))!(clswf_StepPointRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjwf_StepPointRelaEN.memo) == false &&
    undefined !== pobjwf_StepPointRelaEN.memo &&
    tzDataType.isString(pobjwf_StepPointRelaEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[说明(memo)]的值:[$(pobjwf_StepPointRelaEN.memo)], 非法,应该为字符型(In 工作流与结点关系(wf_StepPointRela))!(clswf_StepPointRelaBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
  if (
    IsNullOrEmpty(pobjwf_StepPointRelaEN.workFlowId) == false &&
    GetStrLen(pobjwf_StepPointRelaEN.workFlowId) != 4
  ) {
    throw '(errid:Watl000415)字段[工作流Id]作为外键字段,长度应该为4(In 工作流与结点关系)!(clswf_StepPointRelaBL:CheckPropertyNew)';
  }
  if (
    IsNullOrEmpty(pobjwf_StepPointRelaEN.pointId) == false &&
    GetStrLen(pobjwf_StepPointRelaEN.pointId) != 8
  ) {
    throw '(errid:Watl000415)字段[结点Id]作为外键字段,长度应该为8(In 工作流与结点关系)!(clswf_StepPointRelaBL:CheckPropertyNew)';
  }
  if (
    IsNullOrEmpty(pobjwf_StepPointRelaEN.pointTypeId) == false &&
    GetStrLen(pobjwf_StepPointRelaEN.pointTypeId) != 2
  ) {
    throw '(errid:Watl000415)字段[工作流结点类型Id]作为外键字段,长度应该为2(In 工作流与结点关系)!(clswf_StepPointRelaBL:CheckPropertyNew)';
  }

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function wf_StepPointRela_CheckProperty4Update(
  pobjwf_StepPointRelaEN: clswf_StepPointRelaEN,
) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjwf_StepPointRelaEN.workFlowId) == false &&
    GetStrLen(pobjwf_StepPointRelaEN.workFlowId) > 4
  ) {
    throw new Error(
      '(errid:Watl000416)字段[工作流Id(workFlowId)]的长度不能超过4(In 工作流与结点关系(wf_StepPointRela))!值:$(pobjwf_StepPointRelaEN.workFlowId)(clswf_StepPointRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjwf_StepPointRelaEN.pointId) == false &&
    GetStrLen(pobjwf_StepPointRelaEN.pointId) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[结点Id(pointId)]的长度不能超过8(In 工作流与结点关系(wf_StepPointRela))!值:$(pobjwf_StepPointRelaEN.pointId)(clswf_StepPointRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjwf_StepPointRelaEN.pointTypeId) == false &&
    GetStrLen(pobjwf_StepPointRelaEN.pointTypeId) > 2
  ) {
    throw new Error(
      '(errid:Watl000416)字段[工作流结点类型Id(pointTypeId)]的长度不能超过2(In 工作流与结点关系(wf_StepPointRela))!值:$(pobjwf_StepPointRelaEN.pointTypeId)(clswf_StepPointRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjwf_StepPointRelaEN.updDate) == false &&
    GetStrLen(pobjwf_StepPointRelaEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 工作流与结点关系(wf_StepPointRela))!值:$(pobjwf_StepPointRelaEN.updDate)(clswf_StepPointRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjwf_StepPointRelaEN.updUser) == false &&
    GetStrLen(pobjwf_StepPointRelaEN.updUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改者(updUser)]的长度不能超过20(In 工作流与结点关系(wf_StepPointRela))!值:$(pobjwf_StepPointRelaEN.updUser)(clswf_StepPointRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjwf_StepPointRelaEN.memo) == false &&
    GetStrLen(pobjwf_StepPointRelaEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In 工作流与结点关系(wf_StepPointRela))!值:$(pobjwf_StepPointRelaEN.memo)(clswf_StepPointRelaBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjwf_StepPointRelaEN.workFlowStepPointRelaId &&
    undefined !== pobjwf_StepPointRelaEN.workFlowStepPointRelaId &&
    tzDataType.isNumber(pobjwf_StepPointRelaEN.workFlowStepPointRelaId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[工作流与结点关系Id(workFlowStepPointRelaId)]的值:[$(pobjwf_StepPointRelaEN.workFlowStepPointRelaId)], 非法,应该为数值型(In 工作流与结点关系(wf_StepPointRela))!(clswf_StepPointRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjwf_StepPointRelaEN.workFlowId) == false &&
    undefined !== pobjwf_StepPointRelaEN.workFlowId &&
    tzDataType.isString(pobjwf_StepPointRelaEN.workFlowId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[工作流Id(workFlowId)]的值:[$(pobjwf_StepPointRelaEN.workFlowId)], 非法,应该为字符型(In 工作流与结点关系(wf_StepPointRela))!(clswf_StepPointRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjwf_StepPointRelaEN.pointId) == false &&
    undefined !== pobjwf_StepPointRelaEN.pointId &&
    tzDataType.isString(pobjwf_StepPointRelaEN.pointId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[结点Id(pointId)]的值:[$(pobjwf_StepPointRelaEN.pointId)], 非法,应该为字符型(In 工作流与结点关系(wf_StepPointRela))!(clswf_StepPointRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjwf_StepPointRelaEN.pointTypeId) == false &&
    undefined !== pobjwf_StepPointRelaEN.pointTypeId &&
    tzDataType.isString(pobjwf_StepPointRelaEN.pointTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[工作流结点类型Id(pointTypeId)]的值:[$(pobjwf_StepPointRelaEN.pointTypeId)], 非法,应该为字符型(In 工作流与结点关系(wf_StepPointRela))!(clswf_StepPointRelaBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjwf_StepPointRelaEN.levelNo &&
    undefined !== pobjwf_StepPointRelaEN.levelNo &&
    tzDataType.isNumber(pobjwf_StepPointRelaEN.levelNo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[层序号(levelNo)]的值:[$(pobjwf_StepPointRelaEN.levelNo)], 非法,应该为数值型(In 工作流与结点关系(wf_StepPointRela))!(clswf_StepPointRelaBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjwf_StepPointRelaEN.inDegree &&
    undefined !== pobjwf_StepPointRelaEN.inDegree &&
    tzDataType.isNumber(pobjwf_StepPointRelaEN.inDegree) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[入度(inDegree)]的值:[$(pobjwf_StepPointRelaEN.inDegree)], 非法,应该为数值型(In 工作流与结点关系(wf_StepPointRela))!(clswf_StepPointRelaBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjwf_StepPointRelaEN.outDegree &&
    undefined !== pobjwf_StepPointRelaEN.outDegree &&
    tzDataType.isNumber(pobjwf_StepPointRelaEN.outDegree) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[出度(outDegree)]的值:[$(pobjwf_StepPointRelaEN.outDegree)], 非法,应该为数值型(In 工作流与结点关系(wf_StepPointRela))!(clswf_StepPointRelaBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjwf_StepPointRelaEN.orderNum &&
    undefined !== pobjwf_StepPointRelaEN.orderNum &&
    tzDataType.isNumber(pobjwf_StepPointRelaEN.orderNum) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[序号(orderNum)]的值:[$(pobjwf_StepPointRelaEN.orderNum)], 非法,应该为数值型(In 工作流与结点关系(wf_StepPointRela))!(clswf_StepPointRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjwf_StepPointRelaEN.updDate) == false &&
    undefined !== pobjwf_StepPointRelaEN.updDate &&
    tzDataType.isString(pobjwf_StepPointRelaEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjwf_StepPointRelaEN.updDate)], 非法,应该为字符型(In 工作流与结点关系(wf_StepPointRela))!(clswf_StepPointRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjwf_StepPointRelaEN.updUser) == false &&
    undefined !== pobjwf_StepPointRelaEN.updUser &&
    tzDataType.isString(pobjwf_StepPointRelaEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改者(updUser)]的值:[$(pobjwf_StepPointRelaEN.updUser)], 非法,应该为字符型(In 工作流与结点关系(wf_StepPointRela))!(clswf_StepPointRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjwf_StepPointRelaEN.memo) == false &&
    undefined !== pobjwf_StepPointRelaEN.memo &&
    tzDataType.isString(pobjwf_StepPointRelaEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[说明(memo)]的值:[$(pobjwf_StepPointRelaEN.memo)], 非法,应该为字符型(In 工作流与结点关系(wf_StepPointRela))!(clswf_StepPointRelaBL:CheckProperty4Update)',
    );
  }
  //检查主键是否为Null或者空!
  if (
    null === pobjwf_StepPointRelaEN.workFlowStepPointRelaId ||
    (pobjwf_StepPointRelaEN.workFlowStepPointRelaId != null &&
      pobjwf_StepPointRelaEN.workFlowStepPointRelaId.toString() === '')
  ) {
    throw new Error(
      '(errid:Watl000064)字段[工作流与结点关系Id]不能为空(In 工作流与结点关系)!(clswf_StepPointRelaBL:CheckProperty4Update)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
  if (
    IsNullOrEmpty(pobjwf_StepPointRelaEN.workFlowId) == false &&
    GetStrLen(pobjwf_StepPointRelaEN.workFlowId) != 4
  ) {
    throw '(errid:Watl000418)字段[工作流Id]作为外键字段,长度应该为4(In 工作流与结点关系)!(clswf_StepPointRelaBL:CheckPropertyNew)';
  }
  if (
    IsNullOrEmpty(pobjwf_StepPointRelaEN.pointId) == false &&
    GetStrLen(pobjwf_StepPointRelaEN.pointId) != 8
  ) {
    throw '(errid:Watl000418)字段[结点Id]作为外键字段,长度应该为8(In 工作流与结点关系)!(clswf_StepPointRelaBL:CheckPropertyNew)';
  }
  if (
    IsNullOrEmpty(pobjwf_StepPointRelaEN.pointTypeId) == false &&
    GetStrLen(pobjwf_StepPointRelaEN.pointTypeId) != 2
  ) {
    throw '(errid:Watl000418)字段[工作流结点类型Id]作为外键字段,长度应该为2(In 工作流与结点关系)!(clswf_StepPointRelaBL:CheckPropertyNew)';
  }
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2023-07-29
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function wf_StepPointRela_GetJSONStrByObj(
  pobjwf_StepPointRelaEN: clswf_StepPointRelaEN,
): string {
  pobjwf_StepPointRelaEN.sfUpdFldSetStr = pobjwf_StepPointRelaEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjwf_StepPointRelaEN);
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
 * 日期:2023-07-29
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
 */
export function wf_StepPointRela_GetObjLstByJSONStr(strJSON: string): Array<clswf_StepPointRelaEN> {
  let arrwf_StepPointRelaObjLst = new Array<clswf_StepPointRelaEN>();
  if (strJSON === '') {
    return arrwf_StepPointRelaObjLst;
  }
  try {
    arrwf_StepPointRelaObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrwf_StepPointRelaObjLst;
  }
  return arrwf_StepPointRelaObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-07-29
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrwf_StepPointRelaObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function wf_StepPointRela_GetObjLstByJSONObjLst(
  arrwf_StepPointRelaObjLstS: Array<clswf_StepPointRelaEN>,
): Array<clswf_StepPointRelaEN> {
  const arrwf_StepPointRelaObjLst = new Array<clswf_StepPointRelaEN>();
  for (const objInFor of arrwf_StepPointRelaObjLstS) {
    const obj1 = wf_StepPointRela_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrwf_StepPointRelaObjLst.push(obj1);
  }
  return arrwf_StepPointRelaObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-07-29
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function wf_StepPointRela_GetObjByJSONStr(strJSON: string): clswf_StepPointRelaEN {
  let pobjwf_StepPointRelaEN = new clswf_StepPointRelaEN();
  if (strJSON === '') {
    return pobjwf_StepPointRelaEN;
  }
  try {
    pobjwf_StepPointRelaEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjwf_StepPointRelaEN;
  }
  return pobjwf_StepPointRelaEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function wf_StepPointRela_GetCombineCondition(
  objwf_StepPointRelaCond: clswf_StepPointRelaEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objwf_StepPointRelaCond.dicFldComparisonOp,
      clswf_StepPointRelaEN.con_WorkFlowStepPointRelaId,
    ) == true
  ) {
    const strComparisonOpWorkFlowStepPointRelaId: string =
      objwf_StepPointRelaCond.dicFldComparisonOp[clswf_StepPointRelaEN.con_WorkFlowStepPointRelaId];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clswf_StepPointRelaEN.con_WorkFlowStepPointRelaId,
      objwf_StepPointRelaCond.workFlowStepPointRelaId,
      strComparisonOpWorkFlowStepPointRelaId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objwf_StepPointRelaCond.dicFldComparisonOp,
      clswf_StepPointRelaEN.con_WorkFlowId,
    ) == true
  ) {
    const strComparisonOpWorkFlowId: string =
      objwf_StepPointRelaCond.dicFldComparisonOp[clswf_StepPointRelaEN.con_WorkFlowId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clswf_StepPointRelaEN.con_WorkFlowId,
      objwf_StepPointRelaCond.workFlowId,
      strComparisonOpWorkFlowId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objwf_StepPointRelaCond.dicFldComparisonOp,
      clswf_StepPointRelaEN.con_PointId,
    ) == true
  ) {
    const strComparisonOpPointId: string =
      objwf_StepPointRelaCond.dicFldComparisonOp[clswf_StepPointRelaEN.con_PointId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clswf_StepPointRelaEN.con_PointId,
      objwf_StepPointRelaCond.pointId,
      strComparisonOpPointId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objwf_StepPointRelaCond.dicFldComparisonOp,
      clswf_StepPointRelaEN.con_PointTypeId,
    ) == true
  ) {
    const strComparisonOpPointTypeId: string =
      objwf_StepPointRelaCond.dicFldComparisonOp[clswf_StepPointRelaEN.con_PointTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clswf_StepPointRelaEN.con_PointTypeId,
      objwf_StepPointRelaCond.pointTypeId,
      strComparisonOpPointTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objwf_StepPointRelaCond.dicFldComparisonOp,
      clswf_StepPointRelaEN.con_LevelNo,
    ) == true
  ) {
    const strComparisonOpLevelNo: string =
      objwf_StepPointRelaCond.dicFldComparisonOp[clswf_StepPointRelaEN.con_LevelNo];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clswf_StepPointRelaEN.con_LevelNo,
      objwf_StepPointRelaCond.levelNo,
      strComparisonOpLevelNo,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objwf_StepPointRelaCond.dicFldComparisonOp,
      clswf_StepPointRelaEN.con_InDegree,
    ) == true
  ) {
    const strComparisonOpInDegree: string =
      objwf_StepPointRelaCond.dicFldComparisonOp[clswf_StepPointRelaEN.con_InDegree];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clswf_StepPointRelaEN.con_InDegree,
      objwf_StepPointRelaCond.inDegree,
      strComparisonOpInDegree,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objwf_StepPointRelaCond.dicFldComparisonOp,
      clswf_StepPointRelaEN.con_OutDegree,
    ) == true
  ) {
    const strComparisonOpOutDegree: string =
      objwf_StepPointRelaCond.dicFldComparisonOp[clswf_StepPointRelaEN.con_OutDegree];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clswf_StepPointRelaEN.con_OutDegree,
      objwf_StepPointRelaCond.outDegree,
      strComparisonOpOutDegree,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objwf_StepPointRelaCond.dicFldComparisonOp,
      clswf_StepPointRelaEN.con_OrderNum,
    ) == true
  ) {
    const strComparisonOpOrderNum: string =
      objwf_StepPointRelaCond.dicFldComparisonOp[clswf_StepPointRelaEN.con_OrderNum];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clswf_StepPointRelaEN.con_OrderNum,
      objwf_StepPointRelaCond.orderNum,
      strComparisonOpOrderNum,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objwf_StepPointRelaCond.dicFldComparisonOp,
      clswf_StepPointRelaEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objwf_StepPointRelaCond.dicFldComparisonOp[clswf_StepPointRelaEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clswf_StepPointRelaEN.con_UpdDate,
      objwf_StepPointRelaCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objwf_StepPointRelaCond.dicFldComparisonOp,
      clswf_StepPointRelaEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objwf_StepPointRelaCond.dicFldComparisonOp[clswf_StepPointRelaEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clswf_StepPointRelaEN.con_UpdUser,
      objwf_StepPointRelaCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objwf_StepPointRelaCond.dicFldComparisonOp,
      clswf_StepPointRelaEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objwf_StepPointRelaCond.dicFldComparisonOp[clswf_StepPointRelaEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clswf_StepPointRelaEN.con_Memo,
      objwf_StepPointRelaCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--wf_StepPointRela(工作流与结点关系),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strWorkFlowId: 工作流Id(要求唯一的字段)
 * @param strPointId: 结点Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function wf_StepPointRela_GetUniCondStr(
  objwf_StepPointRelaEN: clswf_StepPointRelaEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and WorkFlowId = '{0}'", objwf_StepPointRelaEN.workFlowId);
  strWhereCond += Format(" and PointId = '{0}'", objwf_StepPointRelaEN.pointId);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--wf_StepPointRela(工作流与结点关系),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strWorkFlowId: 工作流Id(要求唯一的字段)
 * @param strPointId: 结点Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function wf_StepPointRela_GetUniCondStr4Update(
  objwf_StepPointRelaEN: clswf_StepPointRelaEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(
    " and WorkFlowStepPointRelaId <> '{0}'",
    objwf_StepPointRelaEN.workFlowStepPointRelaId,
  );
  strWhereCond += Format(" and WorkFlowId = '{0}'", objwf_StepPointRelaEN.workFlowId);
  strWhereCond += Format(" and PointId = '{0}'", objwf_StepPointRelaEN.pointId);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objwf_StepPointRelaENS:源对象
 * @param objwf_StepPointRelaENT:目标对象
 */
export function wf_StepPointRela_GetObjFromJsonObj(
  objwf_StepPointRelaENS: clswf_StepPointRelaEN,
): clswf_StepPointRelaEN {
  const objwf_StepPointRelaENT: clswf_StepPointRelaEN = new clswf_StepPointRelaEN();
  ObjectAssign(objwf_StepPointRelaENT, objwf_StepPointRelaENS);
  return objwf_StepPointRelaENT;
}
