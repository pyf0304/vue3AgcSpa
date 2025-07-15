﻿/**
 * 类名:clsvwf_StepPointRelaWApi
 * 表名:vwf_StepPointRela(00050487)
 * 版本:2023.07.28.1(服务器:WIN-SRV103-116)
 * 日期:2023/07/29 17:34:51
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
 * v工作流与结点关系(vwf_StepPointRela)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2023年07月29日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { clsvwf_StepPointRelaEN } from '@/ts/L0Entity/WorkFlow/clsvwf_StepPointRelaEN';
import { GetExceptionStr, myShowErrorMsg, ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';

export const vwf_StepPointRela_Controller = 'vwf_StepPointRelaApi';
export const vwf_StepPointRela_ConstructorName = 'vwf_StepPointRela';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngWorkFlowStepPointRelaId:关键字
 * @returns 对象
 **/
export async function vwf_StepPointRela_GetObjByWorkFlowStepPointRelaIdAsync(
  lngWorkFlowStepPointRelaId: number,
): Promise<clsvwf_StepPointRelaEN | null> {
  const strThisFuncName = 'GetObjByWorkFlowStepPointRelaIdAsync';

  if (lngWorkFlowStepPointRelaId == 0) {
    const strMsg = Format(
      '参数:[lngWorkFlowStepPointRelaId]不能为空!(In clsvwf_StepPointRelaWApi.GetObjByWorkFlowStepPointRelaIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByWorkFlowStepPointRelaId';
  const strUrl = GetWebApiUrl(vwf_StepPointRela_Controller, strAction);

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
      const objvwf_StepPointRela = vwf_StepPointRela_GetObjFromJsonObj(returnObj);
      return objvwf_StepPointRela;
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
        vwf_StepPointRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vwf_StepPointRela_ConstructorName,
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
export function vwf_StepPointRela_SortFunDefa(
  a: clsvwf_StepPointRelaEN,
  b: clsvwf_StepPointRelaEN,
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
export function vwf_StepPointRela_SortFunDefa2Fld(
  a: clsvwf_StepPointRelaEN,
  b: clsvwf_StepPointRelaEN,
): number {
  if (a.workFlowId == b.workFlowId) return a.workFlowName.localeCompare(b.workFlowName);
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
export function vwf_StepPointRela_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsvwf_StepPointRelaEN.con_WorkFlowStepPointRelaId:
        return (a: clsvwf_StepPointRelaEN, b: clsvwf_StepPointRelaEN) => {
          return a.workFlowStepPointRelaId - b.workFlowStepPointRelaId;
        };
      case clsvwf_StepPointRelaEN.con_WorkFlowId:
        return (a: clsvwf_StepPointRelaEN, b: clsvwf_StepPointRelaEN) => {
          return a.workFlowId.localeCompare(b.workFlowId);
        };
      case clsvwf_StepPointRelaEN.con_WorkFlowName:
        return (a: clsvwf_StepPointRelaEN, b: clsvwf_StepPointRelaEN) => {
          return a.workFlowName.localeCompare(b.workFlowName);
        };
      case clsvwf_StepPointRelaEN.con_WorkFlowNameSim:
        return (a: clsvwf_StepPointRelaEN, b: clsvwf_StepPointRelaEN) => {
          if (a.workFlowNameSim == null) return -1;
          if (b.workFlowNameSim == null) return 1;
          return a.workFlowNameSim.localeCompare(b.workFlowNameSim);
        };
      case clsvwf_StepPointRelaEN.con_PrjId:
        return (a: clsvwf_StepPointRelaEN, b: clsvwf_StepPointRelaEN) => {
          if (a.prjId == null) return -1;
          if (b.prjId == null) return 1;
          return a.prjId.localeCompare(b.prjId);
        };
      case clsvwf_StepPointRelaEN.con_PrjName:
        return (a: clsvwf_StepPointRelaEN, b: clsvwf_StepPointRelaEN) => {
          if (a.prjName == null) return -1;
          if (b.prjName == null) return 1;
          return a.prjName.localeCompare(b.prjName);
        };
      case clsvwf_StepPointRelaEN.con_PointId:
        return (a: clsvwf_StepPointRelaEN, b: clsvwf_StepPointRelaEN) => {
          return a.pointId.localeCompare(b.pointId);
        };
      case clsvwf_StepPointRelaEN.con_PointName:
        return (a: clsvwf_StepPointRelaEN, b: clsvwf_StepPointRelaEN) => {
          return a.pointName.localeCompare(b.pointName);
        };
      case clsvwf_StepPointRelaEN.con_TabKeyId:
        return (a: clsvwf_StepPointRelaEN, b: clsvwf_StepPointRelaEN) => {
          if (a.tabKeyId == null) return -1;
          if (b.tabKeyId == null) return 1;
          return a.tabKeyId.localeCompare(b.tabKeyId);
        };
      case clsvwf_StepPointRelaEN.con_PointTypeId:
        return (a: clsvwf_StepPointRelaEN, b: clsvwf_StepPointRelaEN) => {
          return a.pointTypeId.localeCompare(b.pointTypeId);
        };
      case clsvwf_StepPointRelaEN.con_PointTypeName:
        return (a: clsvwf_StepPointRelaEN, b: clsvwf_StepPointRelaEN) => {
          return a.pointTypeName.localeCompare(b.pointTypeName);
        };
      case clsvwf_StepPointRelaEN.con_LevelNo:
        return (a: clsvwf_StepPointRelaEN, b: clsvwf_StepPointRelaEN) => {
          return a.levelNo - b.levelNo;
        };
      case clsvwf_StepPointRelaEN.con_InDegree:
        return (a: clsvwf_StepPointRelaEN, b: clsvwf_StepPointRelaEN) => {
          return a.inDegree - b.inDegree;
        };
      case clsvwf_StepPointRelaEN.con_OutDegree:
        return (a: clsvwf_StepPointRelaEN, b: clsvwf_StepPointRelaEN) => {
          return a.outDegree - b.outDegree;
        };
      case clsvwf_StepPointRelaEN.con_OrderNum:
        return (a: clsvwf_StepPointRelaEN, b: clsvwf_StepPointRelaEN) => {
          return a.orderNum - b.orderNum;
        };
      case clsvwf_StepPointRelaEN.con_UpdDate:
        return (a: clsvwf_StepPointRelaEN, b: clsvwf_StepPointRelaEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsvwf_StepPointRelaEN.con_UpdUser:
        return (a: clsvwf_StepPointRelaEN, b: clsvwf_StepPointRelaEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsvwf_StepPointRelaEN.con_Memo:
        return (a: clsvwf_StepPointRelaEN, b: clsvwf_StepPointRelaEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vwf_StepPointRela]中不存在!(in ${vwf_StepPointRela_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsvwf_StepPointRelaEN.con_WorkFlowStepPointRelaId:
        return (a: clsvwf_StepPointRelaEN, b: clsvwf_StepPointRelaEN) => {
          return b.workFlowStepPointRelaId - a.workFlowStepPointRelaId;
        };
      case clsvwf_StepPointRelaEN.con_WorkFlowId:
        return (a: clsvwf_StepPointRelaEN, b: clsvwf_StepPointRelaEN) => {
          return b.workFlowId.localeCompare(a.workFlowId);
        };
      case clsvwf_StepPointRelaEN.con_WorkFlowName:
        return (a: clsvwf_StepPointRelaEN, b: clsvwf_StepPointRelaEN) => {
          return b.workFlowName.localeCompare(a.workFlowName);
        };
      case clsvwf_StepPointRelaEN.con_WorkFlowNameSim:
        return (a: clsvwf_StepPointRelaEN, b: clsvwf_StepPointRelaEN) => {
          if (b.workFlowNameSim == null) return -1;
          if (a.workFlowNameSim == null) return 1;
          return b.workFlowNameSim.localeCompare(a.workFlowNameSim);
        };
      case clsvwf_StepPointRelaEN.con_PrjId:
        return (a: clsvwf_StepPointRelaEN, b: clsvwf_StepPointRelaEN) => {
          if (b.prjId == null) return -1;
          if (a.prjId == null) return 1;
          return b.prjId.localeCompare(a.prjId);
        };
      case clsvwf_StepPointRelaEN.con_PrjName:
        return (a: clsvwf_StepPointRelaEN, b: clsvwf_StepPointRelaEN) => {
          if (b.prjName == null) return -1;
          if (a.prjName == null) return 1;
          return b.prjName.localeCompare(a.prjName);
        };
      case clsvwf_StepPointRelaEN.con_PointId:
        return (a: clsvwf_StepPointRelaEN, b: clsvwf_StepPointRelaEN) => {
          return b.pointId.localeCompare(a.pointId);
        };
      case clsvwf_StepPointRelaEN.con_PointName:
        return (a: clsvwf_StepPointRelaEN, b: clsvwf_StepPointRelaEN) => {
          return b.pointName.localeCompare(a.pointName);
        };
      case clsvwf_StepPointRelaEN.con_TabKeyId:
        return (a: clsvwf_StepPointRelaEN, b: clsvwf_StepPointRelaEN) => {
          if (b.tabKeyId == null) return -1;
          if (a.tabKeyId == null) return 1;
          return b.tabKeyId.localeCompare(a.tabKeyId);
        };
      case clsvwf_StepPointRelaEN.con_PointTypeId:
        return (a: clsvwf_StepPointRelaEN, b: clsvwf_StepPointRelaEN) => {
          return b.pointTypeId.localeCompare(a.pointTypeId);
        };
      case clsvwf_StepPointRelaEN.con_PointTypeName:
        return (a: clsvwf_StepPointRelaEN, b: clsvwf_StepPointRelaEN) => {
          return b.pointTypeName.localeCompare(a.pointTypeName);
        };
      case clsvwf_StepPointRelaEN.con_LevelNo:
        return (a: clsvwf_StepPointRelaEN, b: clsvwf_StepPointRelaEN) => {
          return b.levelNo - a.levelNo;
        };
      case clsvwf_StepPointRelaEN.con_InDegree:
        return (a: clsvwf_StepPointRelaEN, b: clsvwf_StepPointRelaEN) => {
          return b.inDegree - a.inDegree;
        };
      case clsvwf_StepPointRelaEN.con_OutDegree:
        return (a: clsvwf_StepPointRelaEN, b: clsvwf_StepPointRelaEN) => {
          return b.outDegree - a.outDegree;
        };
      case clsvwf_StepPointRelaEN.con_OrderNum:
        return (a: clsvwf_StepPointRelaEN, b: clsvwf_StepPointRelaEN) => {
          return b.orderNum - a.orderNum;
        };
      case clsvwf_StepPointRelaEN.con_UpdDate:
        return (a: clsvwf_StepPointRelaEN, b: clsvwf_StepPointRelaEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsvwf_StepPointRelaEN.con_UpdUser:
        return (a: clsvwf_StepPointRelaEN, b: clsvwf_StepPointRelaEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsvwf_StepPointRelaEN.con_Memo:
        return (a: clsvwf_StepPointRelaEN, b: clsvwf_StepPointRelaEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vwf_StepPointRela]中不存在!(in ${vwf_StepPointRela_ConstructorName}.${strThisFuncName})`;
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
export async function vwf_StepPointRela_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsvwf_StepPointRelaEN.con_WorkFlowStepPointRelaId:
      return (obj: clsvwf_StepPointRelaEN) => {
        return obj.workFlowStepPointRelaId === value;
      };
    case clsvwf_StepPointRelaEN.con_WorkFlowId:
      return (obj: clsvwf_StepPointRelaEN) => {
        return obj.workFlowId === value;
      };
    case clsvwf_StepPointRelaEN.con_WorkFlowName:
      return (obj: clsvwf_StepPointRelaEN) => {
        return obj.workFlowName === value;
      };
    case clsvwf_StepPointRelaEN.con_WorkFlowNameSim:
      return (obj: clsvwf_StepPointRelaEN) => {
        return obj.workFlowNameSim === value;
      };
    case clsvwf_StepPointRelaEN.con_PrjId:
      return (obj: clsvwf_StepPointRelaEN) => {
        return obj.prjId === value;
      };
    case clsvwf_StepPointRelaEN.con_PrjName:
      return (obj: clsvwf_StepPointRelaEN) => {
        return obj.prjName === value;
      };
    case clsvwf_StepPointRelaEN.con_PointId:
      return (obj: clsvwf_StepPointRelaEN) => {
        return obj.pointId === value;
      };
    case clsvwf_StepPointRelaEN.con_PointName:
      return (obj: clsvwf_StepPointRelaEN) => {
        return obj.pointName === value;
      };
    case clsvwf_StepPointRelaEN.con_TabKeyId:
      return (obj: clsvwf_StepPointRelaEN) => {
        return obj.tabKeyId === value;
      };
    case clsvwf_StepPointRelaEN.con_PointTypeId:
      return (obj: clsvwf_StepPointRelaEN) => {
        return obj.pointTypeId === value;
      };
    case clsvwf_StepPointRelaEN.con_PointTypeName:
      return (obj: clsvwf_StepPointRelaEN) => {
        return obj.pointTypeName === value;
      };
    case clsvwf_StepPointRelaEN.con_LevelNo:
      return (obj: clsvwf_StepPointRelaEN) => {
        return obj.levelNo === value;
      };
    case clsvwf_StepPointRelaEN.con_InDegree:
      return (obj: clsvwf_StepPointRelaEN) => {
        return obj.inDegree === value;
      };
    case clsvwf_StepPointRelaEN.con_OutDegree:
      return (obj: clsvwf_StepPointRelaEN) => {
        return obj.outDegree === value;
      };
    case clsvwf_StepPointRelaEN.con_OrderNum:
      return (obj: clsvwf_StepPointRelaEN) => {
        return obj.orderNum === value;
      };
    case clsvwf_StepPointRelaEN.con_UpdDate:
      return (obj: clsvwf_StepPointRelaEN) => {
        return obj.updDate === value;
      };
    case clsvwf_StepPointRelaEN.con_UpdUser:
      return (obj: clsvwf_StepPointRelaEN) => {
        return obj.updUser === value;
      };
    case clsvwf_StepPointRelaEN.con_Memo:
      return (obj: clsvwf_StepPointRelaEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[vwf_StepPointRela]中不存在!(in ${vwf_StepPointRela_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}
//该表没有使用Cache,不需要生成[vwf_StepPointRela__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function vwf_StepPointRela_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vwf_StepPointRela_Controller, strAction);

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
        vwf_StepPointRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vwf_StepPointRela_ConstructorName,
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
export async function vwf_StepPointRela_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vwf_StepPointRela_Controller, strAction);

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
        vwf_StepPointRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vwf_StepPointRela_ConstructorName,
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
export async function vwf_StepPointRela_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsvwf_StepPointRelaEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(vwf_StepPointRela_Controller, strAction);

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
      const objvwf_StepPointRela = vwf_StepPointRela_GetObjFromJsonObj(returnObj);
      return objvwf_StepPointRela;
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
        vwf_StepPointRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vwf_StepPointRela_ConstructorName,
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
export async function vwf_StepPointRela_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsvwf_StepPointRelaEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(vwf_StepPointRela_Controller, strAction);

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
          vwf_StepPointRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vwf_StepPointRela_GetObjLstByJSONObjLst(returnObjLst);
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
        vwf_StepPointRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vwf_StepPointRela_ConstructorName,
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
export async function vwf_StepPointRela_GetObjLstByWorkFlowStepPointRelaIdLstAsync(
  arrWorkFlowStepPointRelaId: Array<string>,
): Promise<Array<clsvwf_StepPointRelaEN>> {
  const strThisFuncName = 'GetObjLstByWorkFlowStepPointRelaIdLstAsync';
  const strAction = 'GetObjLstByWorkFlowStepPointRelaIdLst';
  const strUrl = GetWebApiUrl(vwf_StepPointRela_Controller, strAction);

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
          vwf_StepPointRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vwf_StepPointRela_GetObjLstByJSONObjLst(returnObjLst);
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
        vwf_StepPointRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vwf_StepPointRela_ConstructorName,
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
export async function vwf_StepPointRela_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsvwf_StepPointRelaEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(vwf_StepPointRela_Controller, strAction);

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
          vwf_StepPointRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vwf_StepPointRela_GetObjLstByJSONObjLst(returnObjLst);
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
        vwf_StepPointRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vwf_StepPointRela_ConstructorName,
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
export async function vwf_StepPointRela_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsvwf_StepPointRelaEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(vwf_StepPointRela_Controller, strAction);

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
          vwf_StepPointRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vwf_StepPointRela_GetObjLstByJSONObjLst(returnObjLst);
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
        vwf_StepPointRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vwf_StepPointRela_ConstructorName,
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
export async function vwf_StepPointRela_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsvwf_StepPointRelaEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsvwf_StepPointRelaEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(vwf_StepPointRela_Controller, strAction);

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
          vwf_StepPointRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vwf_StepPointRela_GetObjLstByJSONObjLst(returnObjLst);
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
        vwf_StepPointRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vwf_StepPointRela_ConstructorName,
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
export async function vwf_StepPointRela_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(vwf_StepPointRela_Controller, strAction);

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
        vwf_StepPointRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vwf_StepPointRela_ConstructorName,
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
export async function vwf_StepPointRela_IsExistAsync(
  lngWorkFlowStepPointRelaId: number,
): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(vwf_StepPointRela_Controller, strAction);

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
        vwf_StepPointRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vwf_StepPointRela_ConstructorName,
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
export async function vwf_StepPointRela_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(vwf_StepPointRela_Controller, strAction);

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
        vwf_StepPointRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vwf_StepPointRela_ConstructorName,
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

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 */
export function vwf_StepPointRela_GetWebApiUrl(strController: string, strAction: string): string {
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
//该表没有使用Cache,不需要生成[ReFreshThisCache]函数;
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2023-07-29
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vwf_StepPointRela_GetJSONStrByObj(
  pobjvwf_StepPointRelaEN: clsvwf_StepPointRelaEN,
): string {
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjvwf_StepPointRelaEN);
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
export function vwf_StepPointRela_GetObjLstByJSONStr(
  strJSON: string,
): Array<clsvwf_StepPointRelaEN> {
  let arrvwf_StepPointRelaObjLst = new Array<clsvwf_StepPointRelaEN>();
  if (strJSON === '') {
    return arrvwf_StepPointRelaObjLst;
  }
  try {
    arrvwf_StepPointRelaObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrvwf_StepPointRelaObjLst;
  }
  return arrvwf_StepPointRelaObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-07-29
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvwf_StepPointRelaObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function vwf_StepPointRela_GetObjLstByJSONObjLst(
  arrvwf_StepPointRelaObjLstS: Array<clsvwf_StepPointRelaEN>,
): Array<clsvwf_StepPointRelaEN> {
  const arrvwf_StepPointRelaObjLst = new Array<clsvwf_StepPointRelaEN>();
  for (const objInFor of arrvwf_StepPointRelaObjLstS) {
    const obj1 = vwf_StepPointRela_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrvwf_StepPointRelaObjLst.push(obj1);
  }
  return arrvwf_StepPointRelaObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-07-29
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vwf_StepPointRela_GetObjByJSONStr(strJSON: string): clsvwf_StepPointRelaEN {
  let pobjvwf_StepPointRelaEN = new clsvwf_StepPointRelaEN();
  if (strJSON === '') {
    return pobjvwf_StepPointRelaEN;
  }
  try {
    pobjvwf_StepPointRelaEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjvwf_StepPointRelaEN;
  }
  return pobjvwf_StepPointRelaEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function vwf_StepPointRela_GetCombineCondition(
  objvwf_StepPointRelaCond: clsvwf_StepPointRelaEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objvwf_StepPointRelaCond.dicFldComparisonOp,
      clsvwf_StepPointRelaEN.con_WorkFlowStepPointRelaId,
    ) == true
  ) {
    const strComparisonOpWorkFlowStepPointRelaId: string =
      objvwf_StepPointRelaCond.dicFldComparisonOp[
        clsvwf_StepPointRelaEN.con_WorkFlowStepPointRelaId
      ];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvwf_StepPointRelaEN.con_WorkFlowStepPointRelaId,
      objvwf_StepPointRelaCond.workFlowStepPointRelaId,
      strComparisonOpWorkFlowStepPointRelaId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvwf_StepPointRelaCond.dicFldComparisonOp,
      clsvwf_StepPointRelaEN.con_WorkFlowId,
    ) == true
  ) {
    const strComparisonOpWorkFlowId: string =
      objvwf_StepPointRelaCond.dicFldComparisonOp[clsvwf_StepPointRelaEN.con_WorkFlowId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvwf_StepPointRelaEN.con_WorkFlowId,
      objvwf_StepPointRelaCond.workFlowId,
      strComparisonOpWorkFlowId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvwf_StepPointRelaCond.dicFldComparisonOp,
      clsvwf_StepPointRelaEN.con_WorkFlowName,
    ) == true
  ) {
    const strComparisonOpWorkFlowName: string =
      objvwf_StepPointRelaCond.dicFldComparisonOp[clsvwf_StepPointRelaEN.con_WorkFlowName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvwf_StepPointRelaEN.con_WorkFlowName,
      objvwf_StepPointRelaCond.workFlowName,
      strComparisonOpWorkFlowName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvwf_StepPointRelaCond.dicFldComparisonOp,
      clsvwf_StepPointRelaEN.con_WorkFlowNameSim,
    ) == true
  ) {
    const strComparisonOpWorkFlowNameSim: string =
      objvwf_StepPointRelaCond.dicFldComparisonOp[clsvwf_StepPointRelaEN.con_WorkFlowNameSim];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvwf_StepPointRelaEN.con_WorkFlowNameSim,
      objvwf_StepPointRelaCond.workFlowNameSim,
      strComparisonOpWorkFlowNameSim,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvwf_StepPointRelaCond.dicFldComparisonOp,
      clsvwf_StepPointRelaEN.con_PrjId,
    ) == true
  ) {
    const strComparisonOpPrjId: string =
      objvwf_StepPointRelaCond.dicFldComparisonOp[clsvwf_StepPointRelaEN.con_PrjId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvwf_StepPointRelaEN.con_PrjId,
      objvwf_StepPointRelaCond.prjId,
      strComparisonOpPrjId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvwf_StepPointRelaCond.dicFldComparisonOp,
      clsvwf_StepPointRelaEN.con_PrjName,
    ) == true
  ) {
    const strComparisonOpPrjName: string =
      objvwf_StepPointRelaCond.dicFldComparisonOp[clsvwf_StepPointRelaEN.con_PrjName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvwf_StepPointRelaEN.con_PrjName,
      objvwf_StepPointRelaCond.prjName,
      strComparisonOpPrjName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvwf_StepPointRelaCond.dicFldComparisonOp,
      clsvwf_StepPointRelaEN.con_PointId,
    ) == true
  ) {
    const strComparisonOpPointId: string =
      objvwf_StepPointRelaCond.dicFldComparisonOp[clsvwf_StepPointRelaEN.con_PointId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvwf_StepPointRelaEN.con_PointId,
      objvwf_StepPointRelaCond.pointId,
      strComparisonOpPointId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvwf_StepPointRelaCond.dicFldComparisonOp,
      clsvwf_StepPointRelaEN.con_PointName,
    ) == true
  ) {
    const strComparisonOpPointName: string =
      objvwf_StepPointRelaCond.dicFldComparisonOp[clsvwf_StepPointRelaEN.con_PointName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvwf_StepPointRelaEN.con_PointName,
      objvwf_StepPointRelaCond.pointName,
      strComparisonOpPointName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvwf_StepPointRelaCond.dicFldComparisonOp,
      clsvwf_StepPointRelaEN.con_TabKeyId,
    ) == true
  ) {
    const strComparisonOpTabKeyId: string =
      objvwf_StepPointRelaCond.dicFldComparisonOp[clsvwf_StepPointRelaEN.con_TabKeyId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvwf_StepPointRelaEN.con_TabKeyId,
      objvwf_StepPointRelaCond.tabKeyId,
      strComparisonOpTabKeyId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvwf_StepPointRelaCond.dicFldComparisonOp,
      clsvwf_StepPointRelaEN.con_PointTypeId,
    ) == true
  ) {
    const strComparisonOpPointTypeId: string =
      objvwf_StepPointRelaCond.dicFldComparisonOp[clsvwf_StepPointRelaEN.con_PointTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvwf_StepPointRelaEN.con_PointTypeId,
      objvwf_StepPointRelaCond.pointTypeId,
      strComparisonOpPointTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvwf_StepPointRelaCond.dicFldComparisonOp,
      clsvwf_StepPointRelaEN.con_PointTypeName,
    ) == true
  ) {
    const strComparisonOpPointTypeName: string =
      objvwf_StepPointRelaCond.dicFldComparisonOp[clsvwf_StepPointRelaEN.con_PointTypeName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvwf_StepPointRelaEN.con_PointTypeName,
      objvwf_StepPointRelaCond.pointTypeName,
      strComparisonOpPointTypeName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvwf_StepPointRelaCond.dicFldComparisonOp,
      clsvwf_StepPointRelaEN.con_LevelNo,
    ) == true
  ) {
    const strComparisonOpLevelNo: string =
      objvwf_StepPointRelaCond.dicFldComparisonOp[clsvwf_StepPointRelaEN.con_LevelNo];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvwf_StepPointRelaEN.con_LevelNo,
      objvwf_StepPointRelaCond.levelNo,
      strComparisonOpLevelNo,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvwf_StepPointRelaCond.dicFldComparisonOp,
      clsvwf_StepPointRelaEN.con_InDegree,
    ) == true
  ) {
    const strComparisonOpInDegree: string =
      objvwf_StepPointRelaCond.dicFldComparisonOp[clsvwf_StepPointRelaEN.con_InDegree];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvwf_StepPointRelaEN.con_InDegree,
      objvwf_StepPointRelaCond.inDegree,
      strComparisonOpInDegree,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvwf_StepPointRelaCond.dicFldComparisonOp,
      clsvwf_StepPointRelaEN.con_OutDegree,
    ) == true
  ) {
    const strComparisonOpOutDegree: string =
      objvwf_StepPointRelaCond.dicFldComparisonOp[clsvwf_StepPointRelaEN.con_OutDegree];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvwf_StepPointRelaEN.con_OutDegree,
      objvwf_StepPointRelaCond.outDegree,
      strComparisonOpOutDegree,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvwf_StepPointRelaCond.dicFldComparisonOp,
      clsvwf_StepPointRelaEN.con_OrderNum,
    ) == true
  ) {
    const strComparisonOpOrderNum: string =
      objvwf_StepPointRelaCond.dicFldComparisonOp[clsvwf_StepPointRelaEN.con_OrderNum];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvwf_StepPointRelaEN.con_OrderNum,
      objvwf_StepPointRelaCond.orderNum,
      strComparisonOpOrderNum,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvwf_StepPointRelaCond.dicFldComparisonOp,
      clsvwf_StepPointRelaEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objvwf_StepPointRelaCond.dicFldComparisonOp[clsvwf_StepPointRelaEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvwf_StepPointRelaEN.con_UpdDate,
      objvwf_StepPointRelaCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvwf_StepPointRelaCond.dicFldComparisonOp,
      clsvwf_StepPointRelaEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objvwf_StepPointRelaCond.dicFldComparisonOp[clsvwf_StepPointRelaEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvwf_StepPointRelaEN.con_UpdUser,
      objvwf_StepPointRelaCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvwf_StepPointRelaCond.dicFldComparisonOp,
      clsvwf_StepPointRelaEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objvwf_StepPointRelaCond.dicFldComparisonOp[clsvwf_StepPointRelaEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvwf_StepPointRelaEN.con_Memo,
      objvwf_StepPointRelaCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvwf_StepPointRelaENS:源对象
 * @param objvwf_StepPointRelaENT:目标对象
 */
export function vwf_StepPointRela_GetObjFromJsonObj(
  objvwf_StepPointRelaENS: clsvwf_StepPointRelaEN,
): clsvwf_StepPointRelaEN {
  const objvwf_StepPointRelaENT: clsvwf_StepPointRelaEN = new clsvwf_StepPointRelaEN();
  ObjectAssign(objvwf_StepPointRelaENT, objvwf_StepPointRelaENS);
  return objvwf_StepPointRelaENT;
}
