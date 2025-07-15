/**
 * 类名:clsDnFuncMapWApi
 * 表名:DnFuncMap(00050549)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/14 11:53:00
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 应用类型:Vue应用InCore-TS(30)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:AI模块(AIModule)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 结点函数映射(DnFuncMap)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2025年06月14日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty, Format, GetStrLen, tzDataType } from '@/ts/PubFun/clsString';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { ObjectAssign, GetExceptionStr, myShowErrorMsg } from '@/ts/PubFun/clsCommFunc4Web';
import { clsDnFuncMapENEx } from '@/ts/L0Entity/AIModule/clsDnFuncMapENEx';
import { clsDnFuncMapEN } from '@/ts/L0Entity/AIModule/clsDnFuncMapEN';
import { vDataNode_Sim_func } from '@/ts/L3ForWApi/AIModule/clsvDataNode_SimWApi';
import { clsvDataNode_SimEN } from '@/ts/L0Entity/AIModule/clsvDataNode_SimEN';
import { AssociationMapping_func } from '@/ts/L3ForWApi/AIModule/clsAssociationMappingWApi';
import { clsAssociationMappingEN } from '@/ts/L0Entity/AIModule/clsAssociationMappingEN';
import { FuncMapMode_func } from '@/ts/L3ForWApi/AIModule/clsFuncMapModeWApi';
import { clsFuncMapModeEN } from '@/ts/L0Entity/AIModule/clsFuncMapModeEN';
import { DnFunction_func } from '@/ts/L3ForWApi/AIModule/clsDnFunctionWApi';
import { clsDnFunctionEN } from '@/ts/L0Entity/AIModule/clsDnFunctionEN';
import { AddRecordResult } from '@/ts/PubFun/AddRecordResult';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';

export const dnFuncMap_Controller = 'DnFuncMapApi';
export const dnFuncMap_ConstructorName = 'dnFuncMap';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strDnFuncMapId:关键字
 * @returns 对象
 **/
export async function DnFuncMap_GetObjByDnFuncMapIdAsync(
  strDnFuncMapId: string,
): Promise<clsDnFuncMapEN | null> {
  const strThisFuncName = 'GetObjByDnFuncMapIdAsync';

  if (IsNullOrEmpty(strDnFuncMapId) == true) {
    const strMsg = Format(
      '参数:[strDnFuncMapId]不能为空!(In clsDnFuncMapWApi.GetObjByDnFuncMapIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strDnFuncMapId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strDnFuncMapId]的长度:[{0}]不正确!(clsDnFuncMapWApi.GetObjByDnFuncMapIdAsync)',
      strDnFuncMapId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByDnFuncMapId';
  const strUrl = GetWebApiUrl(dnFuncMap_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strDnFuncMapId,
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
      const objDnFuncMap = DnFuncMap_GetObjFromJsonObj(returnObj);
      return objDnFuncMap;
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
        dnFuncMap_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dnFuncMap_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[GetObjByDnFuncMapIdlocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[GetObjByDnFuncMapIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )
//该表没有使用Cache,不需要生成[UpdateObjInLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function DnFuncMap_SortFunDefa(a: clsDnFuncMapEN, b: clsDnFuncMapEN): number {
  return a.dnFuncMapId.localeCompare(b.dnFuncMapId);
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function DnFuncMap_SortFunDefa2Fld(a: clsDnFuncMapEN, b: clsDnFuncMapEN): number {
  if (a.inDataNodeId == b.inDataNodeId) return a.outDataNodeId - b.outDataNodeId;
  else return a.inDataNodeId - b.inDataNodeId;
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function DnFuncMap_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsDnFuncMapEN.con_DnFuncMapId:
        return (a: clsDnFuncMapEN, b: clsDnFuncMapEN) => {
          return a.dnFuncMapId.localeCompare(b.dnFuncMapId);
        };
      case clsDnFuncMapEN.con_InDataNodeId:
        return (a: clsDnFuncMapEN, b: clsDnFuncMapEN) => {
          return a.inDataNodeId - b.inDataNodeId;
        };
      case clsDnFuncMapEN.con_OutDataNodeId:
        return (a: clsDnFuncMapEN, b: clsDnFuncMapEN) => {
          return a.outDataNodeId - b.outDataNodeId;
        };
      case clsDnFuncMapEN.con_AssociationMappingId:
        return (a: clsDnFuncMapEN, b: clsDnFuncMapEN) => {
          return a.associationMappingId.localeCompare(b.associationMappingId);
        };
      case clsDnFuncMapEN.con_FuncMapModeId:
        return (a: clsDnFuncMapEN, b: clsDnFuncMapEN) => {
          return a.funcMapModeId.localeCompare(b.funcMapModeId);
        };
      case clsDnFuncMapEN.con_TabId:
        return (a: clsDnFuncMapEN, b: clsDnFuncMapEN) => {
          if (a.tabId == null) return -1;
          if (b.tabId == null) return 1;
          return a.tabId.localeCompare(b.tabId);
        };
      case clsDnFuncMapEN.con_DnFunctionId:
        return (a: clsDnFuncMapEN, b: clsDnFuncMapEN) => {
          if (a.dnFunctionId == null) return -1;
          if (b.dnFunctionId == null) return 1;
          return a.dnFunctionId.localeCompare(b.dnFunctionId);
        };
      case clsDnFuncMapEN.con_ErrMsg:
        return (a: clsDnFuncMapEN, b: clsDnFuncMapEN) => {
          if (a.errMsg == null) return -1;
          if (b.errMsg == null) return 1;
          return a.errMsg.localeCompare(b.errMsg);
        };
      case clsDnFuncMapEN.con_PrjId:
        return (a: clsDnFuncMapEN, b: clsDnFuncMapEN) => {
          return a.prjId.localeCompare(b.prjId);
        };
      case clsDnFuncMapEN.con_UsedTimes:
        return (a: clsDnFuncMapEN, b: clsDnFuncMapEN) => {
          return a.usedTimes - b.usedTimes;
        };
      case clsDnFuncMapEN.con_UpdDate:
        return (a: clsDnFuncMapEN, b: clsDnFuncMapEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsDnFuncMapEN.con_UpdUser:
        return (a: clsDnFuncMapEN, b: clsDnFuncMapEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsDnFuncMapEN.con_Memo:
        return (a: clsDnFuncMapEN, b: clsDnFuncMapEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[DnFuncMap]中不存在!(in ${dnFuncMap_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsDnFuncMapEN.con_DnFuncMapId:
        return (a: clsDnFuncMapEN, b: clsDnFuncMapEN) => {
          return b.dnFuncMapId.localeCompare(a.dnFuncMapId);
        };
      case clsDnFuncMapEN.con_InDataNodeId:
        return (a: clsDnFuncMapEN, b: clsDnFuncMapEN) => {
          return b.inDataNodeId - a.inDataNodeId;
        };
      case clsDnFuncMapEN.con_OutDataNodeId:
        return (a: clsDnFuncMapEN, b: clsDnFuncMapEN) => {
          return b.outDataNodeId - a.outDataNodeId;
        };
      case clsDnFuncMapEN.con_AssociationMappingId:
        return (a: clsDnFuncMapEN, b: clsDnFuncMapEN) => {
          return b.associationMappingId.localeCompare(a.associationMappingId);
        };
      case clsDnFuncMapEN.con_FuncMapModeId:
        return (a: clsDnFuncMapEN, b: clsDnFuncMapEN) => {
          return b.funcMapModeId.localeCompare(a.funcMapModeId);
        };
      case clsDnFuncMapEN.con_TabId:
        return (a: clsDnFuncMapEN, b: clsDnFuncMapEN) => {
          if (b.tabId == null) return -1;
          if (a.tabId == null) return 1;
          return b.tabId.localeCompare(a.tabId);
        };
      case clsDnFuncMapEN.con_DnFunctionId:
        return (a: clsDnFuncMapEN, b: clsDnFuncMapEN) => {
          if (b.dnFunctionId == null) return -1;
          if (a.dnFunctionId == null) return 1;
          return b.dnFunctionId.localeCompare(a.dnFunctionId);
        };
      case clsDnFuncMapEN.con_ErrMsg:
        return (a: clsDnFuncMapEN, b: clsDnFuncMapEN) => {
          if (b.errMsg == null) return -1;
          if (a.errMsg == null) return 1;
          return b.errMsg.localeCompare(a.errMsg);
        };
      case clsDnFuncMapEN.con_PrjId:
        return (a: clsDnFuncMapEN, b: clsDnFuncMapEN) => {
          return b.prjId.localeCompare(a.prjId);
        };
      case clsDnFuncMapEN.con_UsedTimes:
        return (a: clsDnFuncMapEN, b: clsDnFuncMapEN) => {
          return b.usedTimes - a.usedTimes;
        };
      case clsDnFuncMapEN.con_UpdDate:
        return (a: clsDnFuncMapEN, b: clsDnFuncMapEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsDnFuncMapEN.con_UpdUser:
        return (a: clsDnFuncMapEN, b: clsDnFuncMapEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsDnFuncMapEN.con_Memo:
        return (a: clsDnFuncMapEN, b: clsDnFuncMapEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[DnFuncMap]中不存在!(in ${dnFuncMap_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}
//该表没有使用Cache,不需要生成[GetNameByDnFuncMapIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function DnFuncMap_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsDnFuncMapEN.con_DnFuncMapId:
      return (obj: clsDnFuncMapEN) => {
        return obj.dnFuncMapId === value;
      };
    case clsDnFuncMapEN.con_InDataNodeId:
      return (obj: clsDnFuncMapEN) => {
        return obj.inDataNodeId === value;
      };
    case clsDnFuncMapEN.con_OutDataNodeId:
      return (obj: clsDnFuncMapEN) => {
        return obj.outDataNodeId === value;
      };
    case clsDnFuncMapEN.con_AssociationMappingId:
      return (obj: clsDnFuncMapEN) => {
        return obj.associationMappingId === value;
      };
    case clsDnFuncMapEN.con_FuncMapModeId:
      return (obj: clsDnFuncMapEN) => {
        return obj.funcMapModeId === value;
      };
    case clsDnFuncMapEN.con_TabId:
      return (obj: clsDnFuncMapEN) => {
        return obj.tabId === value;
      };
    case clsDnFuncMapEN.con_DnFunctionId:
      return (obj: clsDnFuncMapEN) => {
        return obj.dnFunctionId === value;
      };
    case clsDnFuncMapEN.con_ErrMsg:
      return (obj: clsDnFuncMapEN) => {
        return obj.errMsg === value;
      };
    case clsDnFuncMapEN.con_PrjId:
      return (obj: clsDnFuncMapEN) => {
        return obj.prjId === value;
      };
    case clsDnFuncMapEN.con_UsedTimes:
      return (obj: clsDnFuncMapEN) => {
        return obj.usedTimes === value;
      };
    case clsDnFuncMapEN.con_UpdDate:
      return (obj: clsDnFuncMapEN) => {
        return obj.updDate === value;
      };
    case clsDnFuncMapEN.con_UpdUser:
      return (obj: clsDnFuncMapEN) => {
        return obj.updUser === value;
      };
    case clsDnFuncMapEN.con_Memo:
      return (obj: clsDnFuncMapEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[DnFuncMap]中不存在!(in ${dnFuncMap_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}
//该表没有使用Cache,不需要生成[func]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func )
//该表没有使用Cache,不需要生成[DnFuncMap__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function DnFuncMap_GetFldValueAsync(
  strFldName: string,
  strWhereCond: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetFldValueAsync';
  const strAction = 'GetFldValue';
  const strUrl = GetWebApiUrl(dnFuncMap_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strFldName,
      strWhereCond,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      const arrId = data.returnStrLst.split(',');
      return arrId;
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
        dnFuncMap_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dnFuncMap_ConstructorName,
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
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function DnFuncMap_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(dnFuncMap_Controller, strAction);

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
        dnFuncMap_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dnFuncMap_ConstructorName,
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
export async function DnFuncMap_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(dnFuncMap_Controller, strAction);

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
        dnFuncMap_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dnFuncMap_ConstructorName,
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
export async function DnFuncMap_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsDnFuncMapEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(dnFuncMap_Controller, strAction);

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
      const objDnFuncMap = DnFuncMap_GetObjFromJsonObj(returnObj);
      return objDnFuncMap;
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
        dnFuncMap_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dnFuncMap_ConstructorName,
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
export async function DnFuncMap_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsDnFuncMapEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(dnFuncMap_Controller, strAction);

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
          dnFuncMap_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = DnFuncMap_GetObjLstByJSONObjLst(returnObjLst);
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
        dnFuncMap_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dnFuncMap_ConstructorName,
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
 * @param arrDnFuncMapId:关键字列表
 * @returns 对象列表
 **/
export async function DnFuncMap_GetObjLstByDnFuncMapIdLstAsync(
  arrDnFuncMapId: Array<string>,
): Promise<Array<clsDnFuncMapEN>> {
  const strThisFuncName = 'GetObjLstByDnFuncMapIdLstAsync';
  const strAction = 'GetObjLstByDnFuncMapIdLst';
  const strUrl = GetWebApiUrl(dnFuncMap_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrDnFuncMapId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          dnFuncMap_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = DnFuncMap_GetObjLstByJSONObjLst(returnObjLst);
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
        dnFuncMap_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dnFuncMap_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[GetObjLstByDnFuncMapIdLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

/**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export async function DnFuncMap_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsDnFuncMapEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(dnFuncMap_Controller, strAction);

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
          dnFuncMap_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = DnFuncMap_GetObjLstByJSONObjLst(returnObjLst);
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
        dnFuncMap_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dnFuncMap_ConstructorName,
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
export async function DnFuncMap_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsDnFuncMapEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(dnFuncMap_Controller, strAction);

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
          dnFuncMap_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = DnFuncMap_GetObjLstByJSONObjLst(returnObjLst);
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
        dnFuncMap_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dnFuncMap_ConstructorName,
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
export async function DnFuncMap_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsDnFuncMapEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsDnFuncMapEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(dnFuncMap_Controller, strAction);

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
          dnFuncMap_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = DnFuncMap_GetObjLstByJSONObjLst(returnObjLst);
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
        dnFuncMap_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dnFuncMap_ConstructorName,
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
 * @param strDnFuncMapId:关键字
 * @returns 获取删除的结果
 **/
export async function DnFuncMap_DelRecordAsync(strDnFuncMapId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(dnFuncMap_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strDnFuncMapId);

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
        dnFuncMap_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dnFuncMap_ConstructorName,
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
 * @param arrDnFuncMapId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function DnFuncMap_DelDnFuncMapsAsync(arrDnFuncMapId: Array<string>): Promise<number> {
  const strThisFuncName = 'DelDnFuncMapsAsync';
  const strAction = 'DelDnFuncMaps';
  const strUrl = GetWebApiUrl(dnFuncMap_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrDnFuncMapId, config);
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
        dnFuncMap_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dnFuncMap_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjExLstByPagerCache)

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CopyToEx)
 * @param objDnFuncMapENS:源对象
 * @returns 目标对象=>clsDnFuncMapEN:objDnFuncMapENT
 **/
export function DnFuncMap_CopyToEx(objDnFuncMapENS: clsDnFuncMapEN): clsDnFuncMapENEx {
  const strThisFuncName = DnFuncMap_CopyToEx.name;
  const objDnFuncMapENT = new clsDnFuncMapENEx();
  try {
    ObjectAssign(objDnFuncMapENT, objDnFuncMapENS);
    return objDnFuncMapENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001294)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      dnFuncMap_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objDnFuncMapENT;
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function DnFuncMap_FuncMapByFldName(strFldName: string, objDnFuncMapEx: clsDnFuncMapENEx) {
  const strThisFuncName = DnFuncMap_FuncMapByFldName.name;
  strFldName = strFldName.replace('|Ex', '');
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsDnFuncMapEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsDnFuncMapENEx.con_InDataNodeName:
      return DnFuncMap_FuncMapInDataNodeName(objDnFuncMapEx);
    case clsDnFuncMapENEx.con_OutDataNodeName:
      return DnFuncMap_FuncMapOutDataNodeName(objDnFuncMapEx);
    case clsDnFuncMapENEx.con_AssociationMappingName:
      return DnFuncMap_FuncMapAssociationMappingName(objDnFuncMapEx);
    case clsDnFuncMapENEx.con_FuncMapModeName:
      return DnFuncMap_FuncMapFuncMapModeName(objDnFuncMapEx);
    case clsDnFuncMapENEx.con_DnFunctionName:
      return DnFuncMap_FuncMapDnFunctionName(objDnFuncMapEx);
    default:
      strMsg = Format(
        '扩展字段:[{0}]在字段值函数映射中不存在!(in {1})',
        strFldName,
        strThisFuncName,
      );
      console.error(strMsg);
  }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByExKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function DnFuncMap_SortFunByExKey(strKey: string, AscOrDesc: string) {
  strKey = strKey.replace('|Ex', '');
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsDnFuncMapENEx.con_InDataNodeName:
        return (a: clsDnFuncMapENEx, b: clsDnFuncMapENEx) => {
          if (a.inDataNodeName === null && b.inDataNodeName === null) return 0;
          if (a.inDataNodeName === null) return -1;
          if (b.inDataNodeName === null) return 1;
          return a.inDataNodeName.localeCompare(b.inDataNodeName);
        };
      case clsDnFuncMapENEx.con_OutDataNodeName:
        return (a: clsDnFuncMapENEx, b: clsDnFuncMapENEx) => {
          if (a.outDataNodeName === null && b.outDataNodeName === null) return 0;
          if (a.outDataNodeName === null) return -1;
          if (b.outDataNodeName === null) return 1;
          return a.outDataNodeName.localeCompare(b.outDataNodeName);
        };
      case clsDnFuncMapENEx.con_AssociationMappingName:
        return (a: clsDnFuncMapENEx, b: clsDnFuncMapENEx) => {
          if (a.associationMappingName === null && b.associationMappingName === null) return 0;
          if (a.associationMappingName === null) return -1;
          if (b.associationMappingName === null) return 1;
          return a.associationMappingName.localeCompare(b.associationMappingName);
        };
      case clsDnFuncMapENEx.con_FuncMapModeName:
        return (a: clsDnFuncMapENEx, b: clsDnFuncMapENEx) => {
          if (a.funcMapModeName === null && b.funcMapModeName === null) return 0;
          if (a.funcMapModeName === null) return -1;
          if (b.funcMapModeName === null) return 1;
          return a.funcMapModeName.localeCompare(b.funcMapModeName);
        };
      case clsDnFuncMapENEx.con_TabName:
        return (a: clsDnFuncMapENEx, b: clsDnFuncMapENEx) => {
          return a.tabName.localeCompare(b.tabName);
        };
      case clsDnFuncMapENEx.con_MapDescription:
        return (a: clsDnFuncMapENEx, b: clsDnFuncMapENEx) => {
          return a.mapDescription.localeCompare(b.mapDescription);
        };
      case clsDnFuncMapENEx.con_DnFunctionName:
        return (a: clsDnFuncMapENEx, b: clsDnFuncMapENEx) => {
          if (a.dnFunctionName === null && b.dnFunctionName === null) return 0;
          if (a.dnFunctionName === null) return -1;
          if (b.dnFunctionName === null) return 1;
          return a.dnFunctionName.localeCompare(b.dnFunctionName);
        };
      case clsDnFuncMapENEx.con_TrClass:
        return (a: clsDnFuncMapENEx, b: clsDnFuncMapENEx) => {
          if (a.trClass === null && b.trClass === null) return 0;
          if (a.trClass === null) return -1;
          if (b.trClass === null) return 1;
          return a.trClass.localeCompare(b.trClass);
        };
      default:
        return DnFuncMap_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsDnFuncMapENEx.con_InDataNodeName:
        return (a: clsDnFuncMapENEx, b: clsDnFuncMapENEx) => {
          if (a.inDataNodeName === null && b.inDataNodeName === null) return 0;
          if (a.inDataNodeName === null) return 1;
          if (b.inDataNodeName === null) return -1;
          return b.inDataNodeName.localeCompare(a.inDataNodeName);
        };
      case clsDnFuncMapENEx.con_OutDataNodeName:
        return (a: clsDnFuncMapENEx, b: clsDnFuncMapENEx) => {
          if (a.outDataNodeName === null && b.outDataNodeName === null) return 0;
          if (a.outDataNodeName === null) return 1;
          if (b.outDataNodeName === null) return -1;
          return b.outDataNodeName.localeCompare(a.outDataNodeName);
        };
      case clsDnFuncMapENEx.con_AssociationMappingName:
        return (a: clsDnFuncMapENEx, b: clsDnFuncMapENEx) => {
          if (a.associationMappingName === null && b.associationMappingName === null) return 0;
          if (a.associationMappingName === null) return 1;
          if (b.associationMappingName === null) return -1;
          return b.associationMappingName.localeCompare(a.associationMappingName);
        };
      case clsDnFuncMapENEx.con_FuncMapModeName:
        return (a: clsDnFuncMapENEx, b: clsDnFuncMapENEx) => {
          if (a.funcMapModeName === null && b.funcMapModeName === null) return 0;
          if (a.funcMapModeName === null) return 1;
          if (b.funcMapModeName === null) return -1;
          return b.funcMapModeName.localeCompare(a.funcMapModeName);
        };
      case clsDnFuncMapENEx.con_TabName:
        return (a: clsDnFuncMapENEx, b: clsDnFuncMapENEx) => {
          return b.tabName.localeCompare(a.tabName);
        };
      case clsDnFuncMapENEx.con_MapDescription:
        return (a: clsDnFuncMapENEx, b: clsDnFuncMapENEx) => {
          return b.mapDescription.localeCompare(a.mapDescription);
        };
      case clsDnFuncMapENEx.con_DnFunctionName:
        return (a: clsDnFuncMapENEx, b: clsDnFuncMapENEx) => {
          if (a.dnFunctionName === null && b.dnFunctionName === null) return 0;
          if (a.dnFunctionName === null) return 1;
          if (b.dnFunctionName === null) return -1;
          return b.dnFunctionName.localeCompare(a.dnFunctionName);
        };
      case clsDnFuncMapENEx.con_TrClass:
        return (a: clsDnFuncMapENEx, b: clsDnFuncMapENEx) => {
          if (a.trClass === null && b.trClass === null) return 0;
          if (a.trClass === null) return 1;
          if (b.trClass === null) return -1;
          return b.trClass.localeCompare(a.trClass);
        };
      default:
        return DnFuncMap_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objDnFuncMapS:源对象
 **/
export async function DnFuncMap_FuncMapInDataNodeName(objDnFuncMap: clsDnFuncMapENEx) {
  const strThisFuncName = DnFuncMap_FuncMapInDataNodeName.name;
  try {
    if (IsNullOrEmpty(objDnFuncMap.inDataNodeName) == true) {
      const vDataNodeSimDataNodeId = objDnFuncMap.inDataNodeId.toString();
      if (IsNullOrEmpty(objDnFuncMap.prjId) == true) {
        const strMsg = `函数映射[InDataNodeName]数据出错,prjId不能为空!(in ${dnFuncMap_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      const vDataNodeSimDataNodeName = await vDataNode_Sim_func(
        clsvDataNode_SimEN.con_DataNodeId,
        clsvDataNode_SimEN.con_DataNodeName,
        vDataNodeSimDataNodeId,
        objDnFuncMap.prjId,
      );
      objDnFuncMap.inDataNodeName = vDataNodeSimDataNodeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001331)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      dnFuncMap_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objDnFuncMapS:源对象
 **/
export async function DnFuncMap_FuncMapOutDataNodeName(objDnFuncMap: clsDnFuncMapENEx) {
  const strThisFuncName = DnFuncMap_FuncMapOutDataNodeName.name;
  try {
    if (IsNullOrEmpty(objDnFuncMap.outDataNodeName) == true) {
      const vDataNodeSimDataNodeId = objDnFuncMap.outDataNodeId.toString();
      if (IsNullOrEmpty(objDnFuncMap.prjId) == true) {
        const strMsg = `函数映射[OutDataNodeName]数据出错,prjId不能为空!(in ${dnFuncMap_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      const vDataNodeSimDataNodeName = await vDataNode_Sim_func(
        clsvDataNode_SimEN.con_DataNodeId,
        clsvDataNode_SimEN.con_DataNodeName,
        vDataNodeSimDataNodeId,
        objDnFuncMap.prjId,
      );
      objDnFuncMap.outDataNodeName = vDataNodeSimDataNodeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001332)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      dnFuncMap_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objDnFuncMapS:源对象
 **/
export async function DnFuncMap_FuncMapAssociationMappingName(objDnFuncMap: clsDnFuncMapENEx) {
  const strThisFuncName = DnFuncMap_FuncMapAssociationMappingName.name;
  try {
    if (IsNullOrEmpty(objDnFuncMap.associationMappingName) == true) {
      const AssociationMappingAssociationMappingId = objDnFuncMap.associationMappingId;
      const AssociationMappingAssociationMappingName = await AssociationMapping_func(
        clsAssociationMappingEN.con_AssociationMappingId,
        clsAssociationMappingEN.con_AssociationMappingName,
        AssociationMappingAssociationMappingId,
      );
      objDnFuncMap.associationMappingName = AssociationMappingAssociationMappingName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001333)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      dnFuncMap_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objDnFuncMapS:源对象
 **/
export async function DnFuncMap_FuncMapFuncMapModeName(objDnFuncMap: clsDnFuncMapENEx) {
  const strThisFuncName = DnFuncMap_FuncMapFuncMapModeName.name;
  try {
    if (IsNullOrEmpty(objDnFuncMap.funcMapModeName) == true) {
      const FuncMapModeFuncMapModeId = objDnFuncMap.funcMapModeId;
      const FuncMapModeFuncMapModeName = await FuncMapMode_func(
        clsFuncMapModeEN.con_FuncMapModeId,
        clsFuncMapModeEN.con_FuncMapModeName,
        FuncMapModeFuncMapModeId,
      );
      objDnFuncMap.funcMapModeName = FuncMapModeFuncMapModeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001334)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      dnFuncMap_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objDnFuncMapS:源对象
 **/
export async function DnFuncMap_FuncMapDnFunctionName(objDnFuncMap: clsDnFuncMapENEx) {
  const strThisFuncName = DnFuncMap_FuncMapDnFunctionName.name;
  try {
    if (IsNullOrEmpty(objDnFuncMap.dnFunctionName) == true) {
      const DnFunctionDnFunctionId = objDnFuncMap.dnFunctionId;
      if (IsNullOrEmpty(objDnFuncMap.prjId) == true) {
        const strMsg = `函数映射[DnFunctionName]数据出错,prjId不能为空!(in ${dnFuncMap_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      const DnFunctionDnFunctionName = await DnFunction_func(
        clsDnFunctionEN.con_DnFunctionId,
        clsDnFunctionEN.con_DnFunctionName,
        DnFunctionDnFunctionId,
        objDnFuncMap.prjId,
      );
      objDnFuncMap.dnFunctionName = DnFunctionDnFunctionName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001335)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      dnFuncMap_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 根据条件删除记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelMultiRecordByCondAsync)
 * @returns 实际删除记录的个数
 **/
export async function DnFuncMap_DelDnFuncMapsByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'DelDnFuncMapsByCondAsync';
  const strAction = 'DelDnFuncMapsByCond';
  const strUrl = GetWebApiUrl(dnFuncMap_Controller, strAction);

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
        dnFuncMap_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dnFuncMap_ConstructorName,
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
 * @param objDnFuncMapEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function DnFuncMap_AddNewRecordAsync(
  objDnFuncMapEN: clsDnFuncMapEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objDnFuncMapEN);
  const strUrl = GetWebApiUrl(dnFuncMap_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objDnFuncMapEN, config);
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
        dnFuncMap_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dnFuncMap_ConstructorName,
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
 * @param objDnFuncMapEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function DnFuncMap_AddNewRecordWithMaxIdAsync(
  objDnFuncMapEN: clsDnFuncMapEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(dnFuncMap_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objDnFuncMapEN, config);
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
        dnFuncMap_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dnFuncMap_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

/** 添加新记录,保存函数
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewObjSave)
 **/
export async function DnFuncMap_AddNewObjSave(
  objDnFuncMapEN: clsDnFuncMapEN,
): Promise<AddRecordResult> {
  const strThisFuncName = 'AddNewObjSave';
  try {
    DnFuncMap_CheckPropertyNew(objDnFuncMapEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${dnFuncMap_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    alert(strMsg);
    return { keyword: '', success: false }; //一定要有一个返回值,否则会出错!
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await DnFuncMap_CheckUniCond4Add(objDnFuncMapEN);
    if (bolIsExistCond == false) {
      return { keyword: '', success: false };
    }
    let returnBool = false;
    const returnKeyId = await DnFuncMap_AddNewRecordWithMaxIdAsync(objDnFuncMapEN);
    if (IsNullOrEmpty(returnKeyId) == false) {
      returnBool = true;
    }
    if (returnBool == true) {
      //DnFuncMap_ReFreshCache();
    } else {
      const strInfo = `添加[结点函数映射(DnFuncMap)]记录不成功!`;
      //显示信息框
      throw strInfo;
    }
    return { keyword: returnKeyId, success: returnBool }; //一定要有一个返回值,否则会出错!
  } catch (e) {
    const strMsg = `添加记录不成功,${e}.(in ${dnFuncMap_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export async function DnFuncMap_CheckUniCond4Add(objDnFuncMapEN: clsDnFuncMapEN): Promise<boolean> {
  const strUniquenessCondition = DnFuncMap_GetUniCondStr(objDnFuncMapEN);
  const bolIsExistCondition = await DnFuncMap_IsExistRecordAsync(strUniquenessCondition);
  if (bolIsExistCondition == true) {
    const strMsg = Format(
      '不能满足唯一性条件。满足条件：{0}的记录已经存在!',
      strUniquenessCondition,
    );
    console.error(strMsg);
    alert(strMsg);
    return false;
  }
  return true;
}

/** 为修改记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Update)
 **/
export async function DnFuncMap_CheckUniCond4Update(
  objDnFuncMapEN: clsDnFuncMapEN,
): Promise<boolean> {
  const strUniquenessCondition = DnFuncMap_GetUniCondStr4Update(objDnFuncMapEN);
  const bolIsExistCondition = await DnFuncMap_IsExistRecordAsync(strUniquenessCondition);
  if (bolIsExistCondition == true) {
    const strMsg = Format(
      '不能满足唯一性条件。满足条件：{0}的记录已经存在!',
      strUniquenessCondition,
    );
    console.error(strMsg);
    alert(strMsg);
    return false;
  }
  return true;
}

/** 修改记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjSave)
 **/
export async function DnFuncMap_UpdateObjSave(objDnFuncMapEN: clsDnFuncMapEN): Promise<boolean> {
  const strThisFuncName = 'UpdateObjSave';
  objDnFuncMapEN.sfUpdFldSetStr = objDnFuncMapEN.updFldString; //设置哪些字段被修改(脏字段)
  if (objDnFuncMapEN.dnFuncMapId == '' || objDnFuncMapEN.dnFuncMapId == undefined) {
    console.error('关键字不能为空!');
    throw '关键字不能为空!';
  }
  try {
    DnFuncMap_CheckProperty4Update(objDnFuncMapEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${dnFuncMap_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await DnFuncMap_CheckUniCond4Update(objDnFuncMapEN);
    if (bolIsExistCond == false) {
      return false;
    }
    const returnBool = await DnFuncMap_UpdateRecordAsync(objDnFuncMapEN);
    if (returnBool == true) {
      //DnFuncMap_ReFreshCache();
    }
    return returnBool;
  } catch (e) {
    const strMsg = `修改记录不成功,${e}.(in ${dnFuncMap_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objDnFuncMapEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function DnFuncMap_AddNewRecordWithReturnKeyAsync(
  objDnFuncMapEN: clsDnFuncMapEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(dnFuncMap_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objDnFuncMapEN, config);
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
        dnFuncMap_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dnFuncMap_ConstructorName,
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
 * @param objDnFuncMapEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function DnFuncMap_UpdateRecordAsync(
  objDnFuncMapEN: clsDnFuncMapEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objDnFuncMapEN.sfUpdFldSetStr === undefined ||
    objDnFuncMapEN.sfUpdFldSetStr === null ||
    objDnFuncMapEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objDnFuncMapEN.dnFuncMapId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(dnFuncMap_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objDnFuncMapEN, config);
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
        dnFuncMap_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dnFuncMap_ConstructorName,
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
 * 调用WebApi来编辑记录（存在就修改，不存在就添加）,数据传递使用JSON串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_EditRecordExAsync)
 * @param objDnFuncMapEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function DnFuncMap_EditRecordExAsync(
  objDnFuncMapEN: clsDnFuncMapEN,
): Promise<boolean> {
  const strThisFuncName = 'EditRecordExAsync';
  const strAction = 'EditRecordEx';
  if (
    objDnFuncMapEN.sfUpdFldSetStr === undefined ||
    objDnFuncMapEN.sfUpdFldSetStr === null ||
    objDnFuncMapEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objDnFuncMapEN.dnFuncMapId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(dnFuncMap_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objDnFuncMapEN, config);
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
        dnFuncMap_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dnFuncMap_ConstructorName,
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
 * @param objDnFuncMapEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function DnFuncMap_UpdateWithConditionAsync(
  objDnFuncMapEN: clsDnFuncMapEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objDnFuncMapEN.sfUpdFldSetStr === undefined ||
    objDnFuncMapEN.sfUpdFldSetStr === null ||
    objDnFuncMapEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objDnFuncMapEN.dnFuncMapId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(dnFuncMap_Controller, strAction);
  objDnFuncMapEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objDnFuncMapEN, config);
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
        dnFuncMap_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dnFuncMap_ConstructorName,
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
export async function DnFuncMap_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(dnFuncMap_Controller, strAction);

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
        dnFuncMap_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dnFuncMap_ConstructorName,
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
 * @param strDnFuncMapId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function DnFuncMap_IsExistAsync(strDnFuncMapId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(dnFuncMap_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strDnFuncMapId,
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
        dnFuncMap_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dnFuncMap_ConstructorName,
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
export async function DnFuncMap_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(dnFuncMap_Controller, strAction);

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
        dnFuncMap_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dnFuncMap_ConstructorName,
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
 * 获取表的最大关键字
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetMaxStrIdAsync)
 * @returns 获取表的最大关键字
 **/
export async function DnFuncMap_GetMaxStrIdAsync(): Promise<string> {
  const strThisFuncName = 'GetMaxStrIdAsync';
  const strAction = 'GetMaxStrId';
  const strUrl = GetWebApiUrl(dnFuncMap_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
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
        dnFuncMap_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dnFuncMap_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
/*该表的关键字类型不是字符型带前缀自增,不需要生成获取最大关键字函数!*/

/**
 * 根据前缀获取当前表关键字值的最大值,再加1,避免重复
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetMaxStrIdByPrefix)
 * @param mapParam:参数列表
 * @returns 获取当前表关键字值的最大值
 */
export async function DnFuncMap_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(dnFuncMap_Controller, strAction);

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
        dnFuncMap_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dnFuncMap_ConstructorName,
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
export function DnFuncMap_GetWebApiUrl(strController: string, strAction: string): string {
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
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function DnFuncMap_CheckPropertyNew(pobjDnFuncMapEN: clsDnFuncMapEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (
    null === pobjDnFuncMapEN.inDataNodeId ||
    (pobjDnFuncMapEN.inDataNodeId != null && pobjDnFuncMapEN.inDataNodeId.toString() === '') ||
    pobjDnFuncMapEN.inDataNodeId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000411)字段[In数据结点Id]不能为空(In 结点函数映射)!(clsDnFuncMapBL:CheckPropertyNew0)`,
    );
  }
  if (
    null === pobjDnFuncMapEN.outDataNodeId ||
    (pobjDnFuncMapEN.outDataNodeId != null && pobjDnFuncMapEN.outDataNodeId.toString() === '') ||
    pobjDnFuncMapEN.outDataNodeId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000411)字段[Out数据结点Id]不能为空(In 结点函数映射)!(clsDnFuncMapBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDnFuncMapEN.associationMappingId) === true ||
    pobjDnFuncMapEN.associationMappingId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000411)字段[关联关系映射Id]不能为空(In 结点函数映射)!(clsDnFuncMapBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDnFuncMapEN.funcMapModeId) === true ||
    pobjDnFuncMapEN.funcMapModeId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000411)字段[函数映射模式Id]不能为空(In 结点函数映射)!(clsDnFuncMapBL:CheckPropertyNew0)`,
    );
  }
  if (IsNullOrEmpty(pobjDnFuncMapEN.prjId) === true || pobjDnFuncMapEN.prjId.toString() === '0') {
    throw new Error(
      `(errid:Watl000411)字段[工程Id]不能为空(In 结点函数映射)!(clsDnFuncMapBL:CheckPropertyNew0)`,
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjDnFuncMapEN.dnFuncMapId) == false &&
    GetStrLen(pobjDnFuncMapEN.dnFuncMapId) > 8
  ) {
    throw new Error(
      `(errid:Watl000413)字段[函数映射Id(dnFuncMapId)]的长度不能超过8(In 结点函数映射(DnFuncMap))!值:${pobjDnFuncMapEN.dnFuncMapId}(clsDnFuncMapBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDnFuncMapEN.associationMappingId) == false &&
    GetStrLen(pobjDnFuncMapEN.associationMappingId) > 2
  ) {
    throw new Error(
      `(errid:Watl000413)字段[关联关系映射Id(associationMappingId)]的长度不能超过2(In 结点函数映射(DnFuncMap))!值:${pobjDnFuncMapEN.associationMappingId}(clsDnFuncMapBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDnFuncMapEN.funcMapModeId) == false &&
    GetStrLen(pobjDnFuncMapEN.funcMapModeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000413)字段[函数映射模式Id(funcMapModeId)]的长度不能超过2(In 结点函数映射(DnFuncMap))!值:${pobjDnFuncMapEN.funcMapModeId}(clsDnFuncMapBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjDnFuncMapEN.tabId) == false && GetStrLen(pobjDnFuncMapEN.tabId) > 8) {
    throw new Error(
      `(errid:Watl000413)字段[表ID(tabId)]的长度不能超过8(In 结点函数映射(DnFuncMap))!值:${pobjDnFuncMapEN.tabId}(clsDnFuncMapBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDnFuncMapEN.dnFunctionId) == false &&
    GetStrLen(pobjDnFuncMapEN.dnFunctionId) > 8
  ) {
    throw new Error(
      `(errid:Watl000413)字段[DN函数Id(dnFunctionId)]的长度不能超过8(In 结点函数映射(DnFuncMap))!值:${pobjDnFuncMapEN.dnFunctionId}(clsDnFuncMapBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjDnFuncMapEN.errMsg) == false && GetStrLen(pobjDnFuncMapEN.errMsg) > 2000) {
    throw new Error(
      `(errid:Watl000413)字段[错误信息(errMsg)]的长度不能超过2000(In 结点函数映射(DnFuncMap))!值:${pobjDnFuncMapEN.errMsg}(clsDnFuncMapBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjDnFuncMapEN.prjId) == false && GetStrLen(pobjDnFuncMapEN.prjId) > 4) {
    throw new Error(
      `(errid:Watl000413)字段[工程Id(prjId)]的长度不能超过4(In 结点函数映射(DnFuncMap))!值:${pobjDnFuncMapEN.prjId}(clsDnFuncMapBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjDnFuncMapEN.updDate) == false && GetStrLen(pobjDnFuncMapEN.updDate) > 20) {
    throw new Error(
      `(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 结点函数映射(DnFuncMap))!值:${pobjDnFuncMapEN.updDate}(clsDnFuncMapBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjDnFuncMapEN.updUser) == false && GetStrLen(pobjDnFuncMapEN.updUser) > 20) {
    throw new Error(
      `(errid:Watl000413)字段[修改者(updUser)]的长度不能超过20(In 结点函数映射(DnFuncMap))!值:${pobjDnFuncMapEN.updUser}(clsDnFuncMapBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjDnFuncMapEN.memo) == false && GetStrLen(pobjDnFuncMapEN.memo) > 1000) {
    throw new Error(
      `(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In 结点函数映射(DnFuncMap))!值:${pobjDnFuncMapEN.memo}(clsDnFuncMapBL:CheckPropertyNew)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjDnFuncMapEN.dnFuncMapId) == false &&
    undefined !== pobjDnFuncMapEN.dnFuncMapId &&
    tzDataType.isString(pobjDnFuncMapEN.dnFuncMapId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[函数映射Id(dnFuncMapId)]的值:[${pobjDnFuncMapEN.dnFuncMapId}], 非法,应该为字符型(In 结点函数映射(DnFuncMap))!(clsDnFuncMapBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjDnFuncMapEN.inDataNodeId &&
    undefined !== pobjDnFuncMapEN.inDataNodeId &&
    tzDataType.isNumber(pobjDnFuncMapEN.inDataNodeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[In数据结点Id(inDataNodeId)]的值:[${pobjDnFuncMapEN.inDataNodeId}], 非法,应该为数值型(In 结点函数映射(DnFuncMap))!(clsDnFuncMapBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjDnFuncMapEN.outDataNodeId &&
    undefined !== pobjDnFuncMapEN.outDataNodeId &&
    tzDataType.isNumber(pobjDnFuncMapEN.outDataNodeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[Out数据结点Id(outDataNodeId)]的值:[${pobjDnFuncMapEN.outDataNodeId}], 非法,应该为数值型(In 结点函数映射(DnFuncMap))!(clsDnFuncMapBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDnFuncMapEN.associationMappingId) == false &&
    undefined !== pobjDnFuncMapEN.associationMappingId &&
    tzDataType.isString(pobjDnFuncMapEN.associationMappingId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[关联关系映射Id(associationMappingId)]的值:[${pobjDnFuncMapEN.associationMappingId}], 非法,应该为字符型(In 结点函数映射(DnFuncMap))!(clsDnFuncMapBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDnFuncMapEN.funcMapModeId) == false &&
    undefined !== pobjDnFuncMapEN.funcMapModeId &&
    tzDataType.isString(pobjDnFuncMapEN.funcMapModeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[函数映射模式Id(funcMapModeId)]的值:[${pobjDnFuncMapEN.funcMapModeId}], 非法,应该为字符型(In 结点函数映射(DnFuncMap))!(clsDnFuncMapBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDnFuncMapEN.tabId) == false &&
    undefined !== pobjDnFuncMapEN.tabId &&
    tzDataType.isString(pobjDnFuncMapEN.tabId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[表ID(tabId)]的值:[${pobjDnFuncMapEN.tabId}], 非法,应该为字符型(In 结点函数映射(DnFuncMap))!(clsDnFuncMapBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDnFuncMapEN.dnFunctionId) == false &&
    undefined !== pobjDnFuncMapEN.dnFunctionId &&
    tzDataType.isString(pobjDnFuncMapEN.dnFunctionId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[DN函数Id(dnFunctionId)]的值:[${pobjDnFuncMapEN.dnFunctionId}], 非法,应该为字符型(In 结点函数映射(DnFuncMap))!(clsDnFuncMapBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDnFuncMapEN.errMsg) == false &&
    undefined !== pobjDnFuncMapEN.errMsg &&
    tzDataType.isString(pobjDnFuncMapEN.errMsg) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[错误信息(errMsg)]的值:[${pobjDnFuncMapEN.errMsg}], 非法,应该为字符型(In 结点函数映射(DnFuncMap))!(clsDnFuncMapBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDnFuncMapEN.prjId) == false &&
    undefined !== pobjDnFuncMapEN.prjId &&
    tzDataType.isString(pobjDnFuncMapEN.prjId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[工程Id(prjId)]的值:[${pobjDnFuncMapEN.prjId}], 非法,应该为字符型(In 结点函数映射(DnFuncMap))!(clsDnFuncMapBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjDnFuncMapEN.usedTimes &&
    undefined !== pobjDnFuncMapEN.usedTimes &&
    tzDataType.isNumber(pobjDnFuncMapEN.usedTimes) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[使用次数(usedTimes)]的值:[${pobjDnFuncMapEN.usedTimes}], 非法,应该为数值型(In 结点函数映射(DnFuncMap))!(clsDnFuncMapBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDnFuncMapEN.updDate) == false &&
    undefined !== pobjDnFuncMapEN.updDate &&
    tzDataType.isString(pobjDnFuncMapEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjDnFuncMapEN.updDate}], 非法,应该为字符型(In 结点函数映射(DnFuncMap))!(clsDnFuncMapBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDnFuncMapEN.updUser) == false &&
    undefined !== pobjDnFuncMapEN.updUser &&
    tzDataType.isString(pobjDnFuncMapEN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改者(updUser)]的值:[${pobjDnFuncMapEN.updUser}], 非法,应该为字符型(In 结点函数映射(DnFuncMap))!(clsDnFuncMapBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDnFuncMapEN.memo) == false &&
    undefined !== pobjDnFuncMapEN.memo &&
    tzDataType.isString(pobjDnFuncMapEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[说明(memo)]的值:[${pobjDnFuncMapEN.memo}], 非法,应该为字符型(In 结点函数映射(DnFuncMap))!(clsDnFuncMapBL:CheckPropertyNew0)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function DnFuncMap_CheckProperty4Update(pobjDnFuncMapEN: clsDnFuncMapEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjDnFuncMapEN.dnFuncMapId) == false &&
    GetStrLen(pobjDnFuncMapEN.dnFuncMapId) > 8
  ) {
    throw new Error(
      `(errid:Watl000416)字段[函数映射Id(dnFuncMapId)]的长度不能超过8(In 结点函数映射(DnFuncMap))!值:${pobjDnFuncMapEN.dnFuncMapId}(clsDnFuncMapBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDnFuncMapEN.associationMappingId) == false &&
    GetStrLen(pobjDnFuncMapEN.associationMappingId) > 2
  ) {
    throw new Error(
      `(errid:Watl000416)字段[关联关系映射Id(associationMappingId)]的长度不能超过2(In 结点函数映射(DnFuncMap))!值:${pobjDnFuncMapEN.associationMappingId}(clsDnFuncMapBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDnFuncMapEN.funcMapModeId) == false &&
    GetStrLen(pobjDnFuncMapEN.funcMapModeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000416)字段[函数映射模式Id(funcMapModeId)]的长度不能超过2(In 结点函数映射(DnFuncMap))!值:${pobjDnFuncMapEN.funcMapModeId}(clsDnFuncMapBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjDnFuncMapEN.tabId) == false && GetStrLen(pobjDnFuncMapEN.tabId) > 8) {
    throw new Error(
      `(errid:Watl000416)字段[表ID(tabId)]的长度不能超过8(In 结点函数映射(DnFuncMap))!值:${pobjDnFuncMapEN.tabId}(clsDnFuncMapBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDnFuncMapEN.dnFunctionId) == false &&
    GetStrLen(pobjDnFuncMapEN.dnFunctionId) > 8
  ) {
    throw new Error(
      `(errid:Watl000416)字段[DN函数Id(dnFunctionId)]的长度不能超过8(In 结点函数映射(DnFuncMap))!值:${pobjDnFuncMapEN.dnFunctionId}(clsDnFuncMapBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjDnFuncMapEN.errMsg) == false && GetStrLen(pobjDnFuncMapEN.errMsg) > 2000) {
    throw new Error(
      `(errid:Watl000416)字段[错误信息(errMsg)]的长度不能超过2000(In 结点函数映射(DnFuncMap))!值:${pobjDnFuncMapEN.errMsg}(clsDnFuncMapBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjDnFuncMapEN.prjId) == false && GetStrLen(pobjDnFuncMapEN.prjId) > 4) {
    throw new Error(
      `(errid:Watl000416)字段[工程Id(prjId)]的长度不能超过4(In 结点函数映射(DnFuncMap))!值:${pobjDnFuncMapEN.prjId}(clsDnFuncMapBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjDnFuncMapEN.updDate) == false && GetStrLen(pobjDnFuncMapEN.updDate) > 20) {
    throw new Error(
      `(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 结点函数映射(DnFuncMap))!值:${pobjDnFuncMapEN.updDate}(clsDnFuncMapBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjDnFuncMapEN.updUser) == false && GetStrLen(pobjDnFuncMapEN.updUser) > 20) {
    throw new Error(
      `(errid:Watl000416)字段[修改者(updUser)]的长度不能超过20(In 结点函数映射(DnFuncMap))!值:${pobjDnFuncMapEN.updUser}(clsDnFuncMapBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjDnFuncMapEN.memo) == false && GetStrLen(pobjDnFuncMapEN.memo) > 1000) {
    throw new Error(
      `(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In 结点函数映射(DnFuncMap))!值:${pobjDnFuncMapEN.memo}(clsDnFuncMapBL:CheckProperty4Update)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjDnFuncMapEN.dnFuncMapId) == false &&
    undefined !== pobjDnFuncMapEN.dnFuncMapId &&
    tzDataType.isString(pobjDnFuncMapEN.dnFuncMapId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[函数映射Id(dnFuncMapId)]的值:[${pobjDnFuncMapEN.dnFuncMapId}], 非法,应该为字符型(In 结点函数映射(DnFuncMap))!(clsDnFuncMapBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjDnFuncMapEN.inDataNodeId &&
    undefined !== pobjDnFuncMapEN.inDataNodeId &&
    tzDataType.isNumber(pobjDnFuncMapEN.inDataNodeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[In数据结点Id(inDataNodeId)]的值:[${pobjDnFuncMapEN.inDataNodeId}], 非法,应该为数值型(In 结点函数映射(DnFuncMap))!(clsDnFuncMapBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjDnFuncMapEN.outDataNodeId &&
    undefined !== pobjDnFuncMapEN.outDataNodeId &&
    tzDataType.isNumber(pobjDnFuncMapEN.outDataNodeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[Out数据结点Id(outDataNodeId)]的值:[${pobjDnFuncMapEN.outDataNodeId}], 非法,应该为数值型(In 结点函数映射(DnFuncMap))!(clsDnFuncMapBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDnFuncMapEN.associationMappingId) == false &&
    undefined !== pobjDnFuncMapEN.associationMappingId &&
    tzDataType.isString(pobjDnFuncMapEN.associationMappingId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[关联关系映射Id(associationMappingId)]的值:[${pobjDnFuncMapEN.associationMappingId}], 非法,应该为字符型(In 结点函数映射(DnFuncMap))!(clsDnFuncMapBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDnFuncMapEN.funcMapModeId) == false &&
    undefined !== pobjDnFuncMapEN.funcMapModeId &&
    tzDataType.isString(pobjDnFuncMapEN.funcMapModeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[函数映射模式Id(funcMapModeId)]的值:[${pobjDnFuncMapEN.funcMapModeId}], 非法,应该为字符型(In 结点函数映射(DnFuncMap))!(clsDnFuncMapBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDnFuncMapEN.tabId) == false &&
    undefined !== pobjDnFuncMapEN.tabId &&
    tzDataType.isString(pobjDnFuncMapEN.tabId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[表ID(tabId)]的值:[${pobjDnFuncMapEN.tabId}], 非法,应该为字符型(In 结点函数映射(DnFuncMap))!(clsDnFuncMapBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDnFuncMapEN.dnFunctionId) == false &&
    undefined !== pobjDnFuncMapEN.dnFunctionId &&
    tzDataType.isString(pobjDnFuncMapEN.dnFunctionId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[DN函数Id(dnFunctionId)]的值:[${pobjDnFuncMapEN.dnFunctionId}], 非法,应该为字符型(In 结点函数映射(DnFuncMap))!(clsDnFuncMapBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDnFuncMapEN.errMsg) == false &&
    undefined !== pobjDnFuncMapEN.errMsg &&
    tzDataType.isString(pobjDnFuncMapEN.errMsg) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[错误信息(errMsg)]的值:[${pobjDnFuncMapEN.errMsg}], 非法,应该为字符型(In 结点函数映射(DnFuncMap))!(clsDnFuncMapBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDnFuncMapEN.prjId) == false &&
    undefined !== pobjDnFuncMapEN.prjId &&
    tzDataType.isString(pobjDnFuncMapEN.prjId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[工程Id(prjId)]的值:[${pobjDnFuncMapEN.prjId}], 非法,应该为字符型(In 结点函数映射(DnFuncMap))!(clsDnFuncMapBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjDnFuncMapEN.usedTimes &&
    undefined !== pobjDnFuncMapEN.usedTimes &&
    tzDataType.isNumber(pobjDnFuncMapEN.usedTimes) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[使用次数(usedTimes)]的值:[${pobjDnFuncMapEN.usedTimes}], 非法,应该为数值型(In 结点函数映射(DnFuncMap))!(clsDnFuncMapBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDnFuncMapEN.updDate) == false &&
    undefined !== pobjDnFuncMapEN.updDate &&
    tzDataType.isString(pobjDnFuncMapEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjDnFuncMapEN.updDate}], 非法,应该为字符型(In 结点函数映射(DnFuncMap))!(clsDnFuncMapBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDnFuncMapEN.updUser) == false &&
    undefined !== pobjDnFuncMapEN.updUser &&
    tzDataType.isString(pobjDnFuncMapEN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改者(updUser)]的值:[${pobjDnFuncMapEN.updUser}], 非法,应该为字符型(In 结点函数映射(DnFuncMap))!(clsDnFuncMapBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDnFuncMapEN.memo) == false &&
    undefined !== pobjDnFuncMapEN.memo &&
    tzDataType.isString(pobjDnFuncMapEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[说明(memo)]的值:[${pobjDnFuncMapEN.memo}], 非法,应该为字符型(In 结点函数映射(DnFuncMap))!(clsDnFuncMapBL:CheckProperty4Update)`,
    );
  }
  //检查主键是否为Null或者空!
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function DnFuncMap_GetJSONStrByObj(pobjDnFuncMapEN: clsDnFuncMapEN): string {
  pobjDnFuncMapEN.sfUpdFldSetStr = pobjDnFuncMapEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjDnFuncMapEN);
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
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
 */
export function DnFuncMap_GetObjLstByJSONStr(strJSON: string): Array<clsDnFuncMapEN> {
  let arrDnFuncMapObjLst = new Array<clsDnFuncMapEN>();
  if (strJSON === '') {
    return arrDnFuncMapObjLst;
  }
  try {
    arrDnFuncMapObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrDnFuncMapObjLst;
  }
  return arrDnFuncMapObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrDnFuncMapObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function DnFuncMap_GetObjLstByJSONObjLst(
  arrDnFuncMapObjLstS: Array<clsDnFuncMapEN>,
): Array<clsDnFuncMapEN> {
  const arrDnFuncMapObjLst = new Array<clsDnFuncMapEN>();
  for (const objInFor of arrDnFuncMapObjLstS) {
    const obj1 = DnFuncMap_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrDnFuncMapObjLst.push(obj1);
  }
  return arrDnFuncMapObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function DnFuncMap_GetObjByJSONStr(strJSON: string): clsDnFuncMapEN {
  let pobjDnFuncMapEN = new clsDnFuncMapEN();
  if (strJSON === '') {
    return pobjDnFuncMapEN;
  }
  try {
    pobjDnFuncMapEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjDnFuncMapEN;
  }
  return pobjDnFuncMapEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function DnFuncMap_GetCombineCondition(objDnFuncMapCond: clsDnFuncMapEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objDnFuncMapCond.dicFldComparisonOp,
      clsDnFuncMapEN.con_DnFuncMapId,
    ) == true
  ) {
    const strComparisonOpDnFuncMapId: string =
      objDnFuncMapCond.dicFldComparisonOp[clsDnFuncMapEN.con_DnFuncMapId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDnFuncMapEN.con_DnFuncMapId,
      objDnFuncMapCond.dnFuncMapId,
      strComparisonOpDnFuncMapId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDnFuncMapCond.dicFldComparisonOp,
      clsDnFuncMapEN.con_InDataNodeId,
    ) == true
  ) {
    const strComparisonOpInDataNodeId: string =
      objDnFuncMapCond.dicFldComparisonOp[clsDnFuncMapEN.con_InDataNodeId];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsDnFuncMapEN.con_InDataNodeId,
      objDnFuncMapCond.inDataNodeId,
      strComparisonOpInDataNodeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDnFuncMapCond.dicFldComparisonOp,
      clsDnFuncMapEN.con_OutDataNodeId,
    ) == true
  ) {
    const strComparisonOpOutDataNodeId: string =
      objDnFuncMapCond.dicFldComparisonOp[clsDnFuncMapEN.con_OutDataNodeId];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsDnFuncMapEN.con_OutDataNodeId,
      objDnFuncMapCond.outDataNodeId,
      strComparisonOpOutDataNodeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDnFuncMapCond.dicFldComparisonOp,
      clsDnFuncMapEN.con_AssociationMappingId,
    ) == true
  ) {
    const strComparisonOpAssociationMappingId: string =
      objDnFuncMapCond.dicFldComparisonOp[clsDnFuncMapEN.con_AssociationMappingId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDnFuncMapEN.con_AssociationMappingId,
      objDnFuncMapCond.associationMappingId,
      strComparisonOpAssociationMappingId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDnFuncMapCond.dicFldComparisonOp,
      clsDnFuncMapEN.con_FuncMapModeId,
    ) == true
  ) {
    const strComparisonOpFuncMapModeId: string =
      objDnFuncMapCond.dicFldComparisonOp[clsDnFuncMapEN.con_FuncMapModeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDnFuncMapEN.con_FuncMapModeId,
      objDnFuncMapCond.funcMapModeId,
      strComparisonOpFuncMapModeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDnFuncMapCond.dicFldComparisonOp,
      clsDnFuncMapEN.con_TabId,
    ) == true
  ) {
    const strComparisonOpTabId: string =
      objDnFuncMapCond.dicFldComparisonOp[clsDnFuncMapEN.con_TabId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDnFuncMapEN.con_TabId,
      objDnFuncMapCond.tabId,
      strComparisonOpTabId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDnFuncMapCond.dicFldComparisonOp,
      clsDnFuncMapEN.con_DnFunctionId,
    ) == true
  ) {
    const strComparisonOpDnFunctionId: string =
      objDnFuncMapCond.dicFldComparisonOp[clsDnFuncMapEN.con_DnFunctionId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDnFuncMapEN.con_DnFunctionId,
      objDnFuncMapCond.dnFunctionId,
      strComparisonOpDnFunctionId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDnFuncMapCond.dicFldComparisonOp,
      clsDnFuncMapEN.con_ErrMsg,
    ) == true
  ) {
    const strComparisonOpErrMsg: string =
      objDnFuncMapCond.dicFldComparisonOp[clsDnFuncMapEN.con_ErrMsg];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDnFuncMapEN.con_ErrMsg,
      objDnFuncMapCond.errMsg,
      strComparisonOpErrMsg,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDnFuncMapCond.dicFldComparisonOp,
      clsDnFuncMapEN.con_PrjId,
    ) == true
  ) {
    const strComparisonOpPrjId: string =
      objDnFuncMapCond.dicFldComparisonOp[clsDnFuncMapEN.con_PrjId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDnFuncMapEN.con_PrjId,
      objDnFuncMapCond.prjId,
      strComparisonOpPrjId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDnFuncMapCond.dicFldComparisonOp,
      clsDnFuncMapEN.con_UsedTimes,
    ) == true
  ) {
    const strComparisonOpUsedTimes: string =
      objDnFuncMapCond.dicFldComparisonOp[clsDnFuncMapEN.con_UsedTimes];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsDnFuncMapEN.con_UsedTimes,
      objDnFuncMapCond.usedTimes,
      strComparisonOpUsedTimes,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDnFuncMapCond.dicFldComparisonOp,
      clsDnFuncMapEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objDnFuncMapCond.dicFldComparisonOp[clsDnFuncMapEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDnFuncMapEN.con_UpdDate,
      objDnFuncMapCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDnFuncMapCond.dicFldComparisonOp,
      clsDnFuncMapEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objDnFuncMapCond.dicFldComparisonOp[clsDnFuncMapEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDnFuncMapEN.con_UpdUser,
      objDnFuncMapCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDnFuncMapCond.dicFldComparisonOp,
      clsDnFuncMapEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objDnFuncMapCond.dicFldComparisonOp[clsDnFuncMapEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDnFuncMapEN.con_Memo,
      objDnFuncMapCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--DnFuncMap(结点函数映射),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param lngInDataNodeId: In数据结点Id(要求唯一的字段)
 * @param lngOutDataNodeId: Out数据结点Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function DnFuncMap_GetUniCondStr(objDnFuncMapEN: clsDnFuncMapEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and InDataNodeId = '{0}'", objDnFuncMapEN.inDataNodeId);
  strWhereCond += Format(" and OutDataNodeId = '{0}'", objDnFuncMapEN.outDataNodeId);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--DnFuncMap(结点函数映射),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param lngInDataNodeId: In数据结点Id(要求唯一的字段)
 * @param lngOutDataNodeId: Out数据结点Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function DnFuncMap_GetUniCondStr4Update(objDnFuncMapEN: clsDnFuncMapEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and DnFuncMapId <> '{0}'", objDnFuncMapEN.dnFuncMapId);
  strWhereCond += Format(" and InDataNodeId = '{0}'", objDnFuncMapEN.inDataNodeId);
  strWhereCond += Format(" and OutDataNodeId = '{0}'", objDnFuncMapEN.outDataNodeId);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objDnFuncMapENS:源对象
 * @param objDnFuncMapENT:目标对象
 */
export function DnFuncMap_GetObjFromJsonObj(objDnFuncMapENS: clsDnFuncMapEN): clsDnFuncMapEN {
  const objDnFuncMapENT: clsDnFuncMapEN = new clsDnFuncMapEN();
  ObjectAssign(objDnFuncMapENT, objDnFuncMapENS);
  return objDnFuncMapENT;
}
