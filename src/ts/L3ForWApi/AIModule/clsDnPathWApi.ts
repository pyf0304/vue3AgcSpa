/**
 * 类名:clsDnPathWApi
 * 表名:DnPath(00050591)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/14 11:52:52
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
 * 数据结点路径(DnPath)
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
import { clsDnPathENEx } from '@/ts/L0Entity/AIModule/clsDnPathENEx';
import { clsDnPathEN } from '@/ts/L0Entity/AIModule/clsDnPathEN';
import { vDataNode_Sim_func } from '@/ts/L3ForWApi/AIModule/clsvDataNode_SimWApi';
import { clsvDataNode_SimEN } from '@/ts/L0Entity/AIModule/clsvDataNode_SimEN';
import { vFieldTab_Sim_func } from '@/ts/L3ForWApi/Table_Field/clsvFieldTab_SimWApi';
import { clsvFieldTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvFieldTab_SimEN';
import { AssociationMapping_func } from '@/ts/L3ForWApi/AIModule/clsAssociationMappingWApi';
import { clsAssociationMappingEN } from '@/ts/L0Entity/AIModule/clsAssociationMappingEN';
import { AddRecordResult } from '@/ts/PubFun/AddRecordResult';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';

export const dnPath_Controller = 'DnPathApi';
export const dnPath_ConstructorName = 'dnPath';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strDnPathId:关键字
 * @returns 对象
 **/
export async function DnPath_GetObjByDnPathIdAsync(
  strDnPathId: string,
): Promise<clsDnPathEN | null> {
  const strThisFuncName = 'GetObjByDnPathIdAsync';

  if (IsNullOrEmpty(strDnPathId) == true) {
    const strMsg = Format('参数:[strDnPathId]不能为空!(In clsDnPathWApi.GetObjByDnPathIdAsync)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strDnPathId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strDnPathId]的长度:[{0}]不正确!(clsDnPathWApi.GetObjByDnPathIdAsync)',
      strDnPathId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByDnPathId';
  const strUrl = GetWebApiUrl(dnPath_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strDnPathId,
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
      const objDnPath = DnPath_GetObjFromJsonObj(returnObj);
      return objDnPath;
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
        dnPath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dnPath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[GetObjByDnPathIdlocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[GetObjByDnPathIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )
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
export function DnPath_SortFunDefa(a: clsDnPathEN, b: clsDnPathEN): number {
  return a.dnPathId.localeCompare(b.dnPathId);
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
export function DnPath_SortFunDefa2Fld(a: clsDnPathEN, b: clsDnPathEN): number {
  if (a.dnPathName == b.dnPathName) return a.inDataNodeId - b.inDataNodeId;
  else return a.dnPathName.localeCompare(b.dnPathName);
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
export function DnPath_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsDnPathEN.con_DnPathId:
        return (a: clsDnPathEN, b: clsDnPathEN) => {
          return a.dnPathId.localeCompare(b.dnPathId);
        };
      case clsDnPathEN.con_DnPathName:
        return (a: clsDnPathEN, b: clsDnPathEN) => {
          return a.dnPathName.localeCompare(b.dnPathName);
        };
      case clsDnPathEN.con_InDataNodeId:
        return (a: clsDnPathEN, b: clsDnPathEN) => {
          return a.inDataNodeId - b.inDataNodeId;
        };
      case clsDnPathEN.con_OutDataNodeId:
        return (a: clsDnPathEN, b: clsDnPathEN) => {
          return a.outDataNodeId - b.outDataNodeId;
        };
      case clsDnPathEN.con_DnPathNodeLst:
        return (a: clsDnPathEN, b: clsDnPathEN) => {
          return a.dnPathNodeLst.localeCompare(b.dnPathNodeLst);
        };
      case clsDnPathEN.con_DnPathNodeLstV2:
        return (a: clsDnPathEN, b: clsDnPathEN) => {
          if (a.dnPathNodeLstV2 == null) return -1;
          if (b.dnPathNodeLstV2 == null) return 1;
          return a.dnPathNodeLstV2.localeCompare(b.dnPathNodeLstV2);
        };
      case clsDnPathEN.con_AssociationMappingId:
        return (a: clsDnPathEN, b: clsDnPathEN) => {
          return a.associationMappingId.localeCompare(b.associationMappingId);
        };
      case clsDnPathEN.con_IsHasErr:
        return (a: clsDnPathEN) => {
          if (a.isHasErr == true) return 1;
          else return -1;
        };
      case clsDnPathEN.con_EdgeNum:
        return (a: clsDnPathEN, b: clsDnPathEN) => {
          return a.edgeNum - b.edgeNum;
        };
      case clsDnPathEN.con_ErrMsg:
        return (a: clsDnPathEN, b: clsDnPathEN) => {
          if (a.errMsg == null) return -1;
          if (b.errMsg == null) return 1;
          return a.errMsg.localeCompare(b.errMsg);
        };
      case clsDnPathEN.con_InUse:
        return (a: clsDnPathEN) => {
          if (a.inUse == true) return 1;
          else return -1;
        };
      case clsDnPathEN.con_IsExistPath:
        return (a: clsDnPathEN) => {
          if (a.isExistPath == true) return 1;
          else return -1;
        };
      case clsDnPathEN.con_PrjId:
        return (a: clsDnPathEN, b: clsDnPathEN) => {
          return a.prjId.localeCompare(b.prjId);
        };
      case clsDnPathEN.con_UpdDate:
        return (a: clsDnPathEN, b: clsDnPathEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsDnPathEN.con_UpdUser:
        return (a: clsDnPathEN, b: clsDnPathEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsDnPathEN.con_Memo:
        return (a: clsDnPathEN, b: clsDnPathEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[DnPath]中不存在!(in ${dnPath_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsDnPathEN.con_DnPathId:
        return (a: clsDnPathEN, b: clsDnPathEN) => {
          return b.dnPathId.localeCompare(a.dnPathId);
        };
      case clsDnPathEN.con_DnPathName:
        return (a: clsDnPathEN, b: clsDnPathEN) => {
          return b.dnPathName.localeCompare(a.dnPathName);
        };
      case clsDnPathEN.con_InDataNodeId:
        return (a: clsDnPathEN, b: clsDnPathEN) => {
          return b.inDataNodeId - a.inDataNodeId;
        };
      case clsDnPathEN.con_OutDataNodeId:
        return (a: clsDnPathEN, b: clsDnPathEN) => {
          return b.outDataNodeId - a.outDataNodeId;
        };
      case clsDnPathEN.con_DnPathNodeLst:
        return (a: clsDnPathEN, b: clsDnPathEN) => {
          return b.dnPathNodeLst.localeCompare(a.dnPathNodeLst);
        };
      case clsDnPathEN.con_DnPathNodeLstV2:
        return (a: clsDnPathEN, b: clsDnPathEN) => {
          if (b.dnPathNodeLstV2 == null) return -1;
          if (a.dnPathNodeLstV2 == null) return 1;
          return b.dnPathNodeLstV2.localeCompare(a.dnPathNodeLstV2);
        };
      case clsDnPathEN.con_AssociationMappingId:
        return (a: clsDnPathEN, b: clsDnPathEN) => {
          return b.associationMappingId.localeCompare(a.associationMappingId);
        };
      case clsDnPathEN.con_IsHasErr:
        return (b: clsDnPathEN) => {
          if (b.isHasErr == true) return 1;
          else return -1;
        };
      case clsDnPathEN.con_EdgeNum:
        return (a: clsDnPathEN, b: clsDnPathEN) => {
          return b.edgeNum - a.edgeNum;
        };
      case clsDnPathEN.con_ErrMsg:
        return (a: clsDnPathEN, b: clsDnPathEN) => {
          if (b.errMsg == null) return -1;
          if (a.errMsg == null) return 1;
          return b.errMsg.localeCompare(a.errMsg);
        };
      case clsDnPathEN.con_InUse:
        return (b: clsDnPathEN) => {
          if (b.inUse == true) return 1;
          else return -1;
        };
      case clsDnPathEN.con_IsExistPath:
        return (b: clsDnPathEN) => {
          if (b.isExistPath == true) return 1;
          else return -1;
        };
      case clsDnPathEN.con_PrjId:
        return (a: clsDnPathEN, b: clsDnPathEN) => {
          return b.prjId.localeCompare(a.prjId);
        };
      case clsDnPathEN.con_UpdDate:
        return (a: clsDnPathEN, b: clsDnPathEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsDnPathEN.con_UpdUser:
        return (a: clsDnPathEN, b: clsDnPathEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsDnPathEN.con_Memo:
        return (a: clsDnPathEN, b: clsDnPathEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[DnPath]中不存在!(in ${dnPath_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}
//该表没有使用Cache,不需要生成[GetNameByDnPathIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function DnPath_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsDnPathEN.con_DnPathId:
      return (obj: clsDnPathEN) => {
        return obj.dnPathId === value;
      };
    case clsDnPathEN.con_DnPathName:
      return (obj: clsDnPathEN) => {
        return obj.dnPathName === value;
      };
    case clsDnPathEN.con_InDataNodeId:
      return (obj: clsDnPathEN) => {
        return obj.inDataNodeId === value;
      };
    case clsDnPathEN.con_OutDataNodeId:
      return (obj: clsDnPathEN) => {
        return obj.outDataNodeId === value;
      };
    case clsDnPathEN.con_DnPathNodeLst:
      return (obj: clsDnPathEN) => {
        return obj.dnPathNodeLst === value;
      };
    case clsDnPathEN.con_DnPathNodeLstV2:
      return (obj: clsDnPathEN) => {
        return obj.dnPathNodeLstV2 === value;
      };
    case clsDnPathEN.con_AssociationMappingId:
      return (obj: clsDnPathEN) => {
        return obj.associationMappingId === value;
      };
    case clsDnPathEN.con_IsHasErr:
      return (obj: clsDnPathEN) => {
        return obj.isHasErr === value;
      };
    case clsDnPathEN.con_EdgeNum:
      return (obj: clsDnPathEN) => {
        return obj.edgeNum === value;
      };
    case clsDnPathEN.con_ErrMsg:
      return (obj: clsDnPathEN) => {
        return obj.errMsg === value;
      };
    case clsDnPathEN.con_InUse:
      return (obj: clsDnPathEN) => {
        return obj.inUse === value;
      };
    case clsDnPathEN.con_IsExistPath:
      return (obj: clsDnPathEN) => {
        return obj.isExistPath === value;
      };
    case clsDnPathEN.con_PrjId:
      return (obj: clsDnPathEN) => {
        return obj.prjId === value;
      };
    case clsDnPathEN.con_UpdDate:
      return (obj: clsDnPathEN) => {
        return obj.updDate === value;
      };
    case clsDnPathEN.con_UpdUser:
      return (obj: clsDnPathEN) => {
        return obj.updUser === value;
      };
    case clsDnPathEN.con_Memo:
      return (obj: clsDnPathEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[DnPath]中不存在!(in ${dnPath_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}
//该表没有使用Cache,不需要生成[func]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func )
//该表没有使用Cache,不需要生成[DnPath__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function DnPath_GetFldValueAsync(
  strFldName: string,
  strWhereCond: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetFldValueAsync';
  const strAction = 'GetFldValue';
  const strUrl = GetWebApiUrl(dnPath_Controller, strAction);

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
        dnPath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dnPath_ConstructorName,
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
export async function DnPath_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(dnPath_Controller, strAction);

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
        dnPath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dnPath_ConstructorName,
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
export async function DnPath_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(dnPath_Controller, strAction);

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
        dnPath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dnPath_ConstructorName,
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
export async function DnPath_GetFirstObjAsync(strWhereCond: string): Promise<clsDnPathEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(dnPath_Controller, strAction);

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
      const objDnPath = DnPath_GetObjFromJsonObj(returnObj);
      return objDnPath;
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
        dnPath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dnPath_ConstructorName,
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
export async function DnPath_GetObjLstAsync(strWhereCond: string): Promise<Array<clsDnPathEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(dnPath_Controller, strAction);

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
          dnPath_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = DnPath_GetObjLstByJSONObjLst(returnObjLst);
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
        dnPath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dnPath_ConstructorName,
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
 * @param arrDnPathId:关键字列表
 * @returns 对象列表
 **/
export async function DnPath_GetObjLstByDnPathIdLstAsync(
  arrDnPathId: Array<string>,
): Promise<Array<clsDnPathEN>> {
  const strThisFuncName = 'GetObjLstByDnPathIdLstAsync';
  const strAction = 'GetObjLstByDnPathIdLst';
  const strUrl = GetWebApiUrl(dnPath_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrDnPathId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          dnPath_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = DnPath_GetObjLstByJSONObjLst(returnObjLst);
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
        dnPath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dnPath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[GetObjLstByDnPathIdLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

/**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export async function DnPath_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsDnPathEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(dnPath_Controller, strAction);

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
          dnPath_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = DnPath_GetObjLstByJSONObjLst(returnObjLst);
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
        dnPath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dnPath_ConstructorName,
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
export async function DnPath_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsDnPathEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(dnPath_Controller, strAction);

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
          dnPath_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = DnPath_GetObjLstByJSONObjLst(returnObjLst);
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
        dnPath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dnPath_ConstructorName,
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
export async function DnPath_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsDnPathEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsDnPathEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(dnPath_Controller, strAction);

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
          dnPath_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = DnPath_GetObjLstByJSONObjLst(returnObjLst);
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
        dnPath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dnPath_ConstructorName,
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
 * @param strDnPathId:关键字
 * @returns 获取删除的结果
 **/
export async function DnPath_DelRecordAsync(strDnPathId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(dnPath_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strDnPathId);

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
        dnPath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dnPath_ConstructorName,
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
 * @param arrDnPathId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function DnPath_DelDnPathsAsync(arrDnPathId: Array<string>): Promise<number> {
  const strThisFuncName = 'DelDnPathsAsync';
  const strAction = 'DelDnPaths';
  const strUrl = GetWebApiUrl(dnPath_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrDnPathId, config);
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
        dnPath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dnPath_ConstructorName,
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
 * @param objDnPathENS:源对象
 * @returns 目标对象=>clsDnPathEN:objDnPathENT
 **/
export function DnPath_CopyToEx(objDnPathENS: clsDnPathEN): clsDnPathENEx {
  const strThisFuncName = DnPath_CopyToEx.name;
  const objDnPathENT = new clsDnPathENEx();
  try {
    ObjectAssign(objDnPathENT, objDnPathENS);
    return objDnPathENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001294)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      dnPath_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objDnPathENT;
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
export function DnPath_FuncMapByFldName(strFldName: string, objDnPathEx: clsDnPathENEx) {
  const strThisFuncName = DnPath_FuncMapByFldName.name;
  strFldName = strFldName.replace('|Ex', '');
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsDnPathEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsDnPathENEx.con_InDataNodeName:
      return DnPath_FuncMapInDataNodeName(objDnPathEx);
    case clsDnPathENEx.con_InFldName:
      return DnPath_FuncMapInFldName(objDnPathEx);
    case clsDnPathENEx.con_InFldId:
      return DnPath_FuncMapInFldId(objDnPathEx);
    case clsDnPathENEx.con_OutDataNodeName:
      return DnPath_FuncMapOutDataNodeName(objDnPathEx);
    case clsDnPathENEx.con_OutFldName:
      return DnPath_FuncMapOutFldName(objDnPathEx);
    case clsDnPathENEx.con_DataNodeName:
      return DnPath_FuncMapDataNodeName(objDnPathEx);
    case clsDnPathENEx.con_AssociationMappingName:
      return DnPath_FuncMapAssociationMappingName(objDnPathEx);
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
export function DnPath_SortFunByExKey(strKey: string, AscOrDesc: string) {
  strKey = strKey.replace('|Ex', '');
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsDnPathENEx.con_CmPrjId:
        return (a: clsDnPathENEx, b: clsDnPathENEx) => {
          return a.cmPrjId.localeCompare(b.cmPrjId);
        };
      case clsDnPathENEx.con_InDataNodeName:
        return (a: clsDnPathENEx, b: clsDnPathENEx) => {
          if (a.inDataNodeName === null && b.inDataNodeName === null) return 0;
          if (a.inDataNodeName === null) return -1;
          if (b.inDataNodeName === null) return 1;
          return a.inDataNodeName.localeCompare(b.inDataNodeName);
        };
      case clsDnPathENEx.con_InFldName:
        return (a: clsDnPathENEx, b: clsDnPathENEx) => {
          if (a.inFldName === null && b.inFldName === null) return 0;
          if (a.inFldName === null) return -1;
          if (b.inFldName === null) return 1;
          return a.inFldName.localeCompare(b.inFldName);
        };
      case clsDnPathENEx.con_InFldId:
        return (a: clsDnPathENEx, b: clsDnPathENEx) => {
          if (a.inFldId === null && b.inFldId === null) return 0;
          if (a.inFldId === null) return -1;
          if (b.inFldId === null) return 1;
          return a.inFldId.localeCompare(b.inFldId);
        };
      case clsDnPathENEx.con_OutDataNodeName:
        return (a: clsDnPathENEx, b: clsDnPathENEx) => {
          if (a.outDataNodeName === null && b.outDataNodeName === null) return 0;
          if (a.outDataNodeName === null) return -1;
          if (b.outDataNodeName === null) return 1;
          return a.outDataNodeName.localeCompare(b.outDataNodeName);
        };
      case clsDnPathENEx.con_OutFldName:
        return (a: clsDnPathENEx, b: clsDnPathENEx) => {
          if (a.outFldName === null && b.outFldName === null) return 0;
          if (a.outFldName === null) return -1;
          if (b.outFldName === null) return 1;
          return a.outFldName.localeCompare(b.outFldName);
        };
      case clsDnPathENEx.con_DataNodeName:
        return (a: clsDnPathENEx, b: clsDnPathENEx) => {
          if (a.dataNodeName === null && b.dataNodeName === null) return 0;
          if (a.dataNodeName === null) return -1;
          if (b.dataNodeName === null) return 1;
          return a.dataNodeName.localeCompare(b.dataNodeName);
        };
      case clsDnPathENEx.con_AssociationMappingName:
        return (a: clsDnPathENEx, b: clsDnPathENEx) => {
          if (a.associationMappingName === null && b.associationMappingName === null) return 0;
          if (a.associationMappingName === null) return -1;
          if (b.associationMappingName === null) return 1;
          return a.associationMappingName.localeCompare(b.associationMappingName);
        };
      case clsDnPathENEx.con_TrClass:
        return (a: clsDnPathENEx, b: clsDnPathENEx) => {
          if (a.trClass === null && b.trClass === null) return 0;
          if (a.trClass === null) return -1;
          if (b.trClass === null) return 1;
          return a.trClass.localeCompare(b.trClass);
        };
      case clsDnPathENEx.con_RefNum:
        return (a: clsDnPathENEx, b: clsDnPathENEx) => {
          return a.refNum - b.refNum;
        };
      default:
        return DnPath_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsDnPathENEx.con_CmPrjId:
        return (a: clsDnPathENEx, b: clsDnPathENEx) => {
          return b.cmPrjId.localeCompare(a.cmPrjId);
        };
      case clsDnPathENEx.con_InDataNodeName:
        return (a: clsDnPathENEx, b: clsDnPathENEx) => {
          if (a.inDataNodeName === null && b.inDataNodeName === null) return 0;
          if (a.inDataNodeName === null) return 1;
          if (b.inDataNodeName === null) return -1;
          return b.inDataNodeName.localeCompare(a.inDataNodeName);
        };
      case clsDnPathENEx.con_InFldName:
        return (a: clsDnPathENEx, b: clsDnPathENEx) => {
          if (a.inFldName === null && b.inFldName === null) return 0;
          if (a.inFldName === null) return 1;
          if (b.inFldName === null) return -1;
          return b.inFldName.localeCompare(a.inFldName);
        };
      case clsDnPathENEx.con_InFldId:
        return (a: clsDnPathENEx, b: clsDnPathENEx) => {
          if (a.inFldId === null && b.inFldId === null) return 0;
          if (a.inFldId === null) return 1;
          if (b.inFldId === null) return -1;
          return b.inFldId.localeCompare(a.inFldId);
        };
      case clsDnPathENEx.con_OutDataNodeName:
        return (a: clsDnPathENEx, b: clsDnPathENEx) => {
          if (a.outDataNodeName === null && b.outDataNodeName === null) return 0;
          if (a.outDataNodeName === null) return 1;
          if (b.outDataNodeName === null) return -1;
          return b.outDataNodeName.localeCompare(a.outDataNodeName);
        };
      case clsDnPathENEx.con_OutFldName:
        return (a: clsDnPathENEx, b: clsDnPathENEx) => {
          if (a.outFldName === null && b.outFldName === null) return 0;
          if (a.outFldName === null) return 1;
          if (b.outFldName === null) return -1;
          return b.outFldName.localeCompare(a.outFldName);
        };
      case clsDnPathENEx.con_DataNodeName:
        return (a: clsDnPathENEx, b: clsDnPathENEx) => {
          if (a.dataNodeName === null && b.dataNodeName === null) return 0;
          if (a.dataNodeName === null) return 1;
          if (b.dataNodeName === null) return -1;
          return b.dataNodeName.localeCompare(a.dataNodeName);
        };
      case clsDnPathENEx.con_AssociationMappingName:
        return (a: clsDnPathENEx, b: clsDnPathENEx) => {
          if (a.associationMappingName === null && b.associationMappingName === null) return 0;
          if (a.associationMappingName === null) return 1;
          if (b.associationMappingName === null) return -1;
          return b.associationMappingName.localeCompare(a.associationMappingName);
        };
      case clsDnPathENEx.con_TrClass:
        return (a: clsDnPathENEx, b: clsDnPathENEx) => {
          if (a.trClass === null && b.trClass === null) return 0;
          if (a.trClass === null) return 1;
          if (b.trClass === null) return -1;
          return b.trClass.localeCompare(a.trClass);
        };
      case clsDnPathENEx.con_RefNum:
        return (a: clsDnPathENEx, b: clsDnPathENEx) => {
          return b.refNum - a.refNum;
        };
      default:
        return DnPath_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objDnPathS:源对象
 **/
export async function DnPath_FuncMapInDataNodeName(objDnPath: clsDnPathENEx) {
  const strThisFuncName = DnPath_FuncMapInDataNodeName.name;
  try {
    if (IsNullOrEmpty(objDnPath.inDataNodeName) == true) {
      const vDataNodeSimDataNodeId = objDnPath.inDataNodeId.toString();
      if (IsNullOrEmpty(objDnPath.prjId) == true) {
        const strMsg = `函数映射[InDataNodeName]数据出错,prjId不能为空!(in ${dnPath_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      const vDataNodeSimDataNodeName = await vDataNode_Sim_func(
        clsvDataNode_SimEN.con_DataNodeId,
        clsvDataNode_SimEN.con_DataNodeName,
        vDataNodeSimDataNodeId,
        objDnPath.prjId,
      );
      objDnPath.inDataNodeName = vDataNodeSimDataNodeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001331)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      dnPath_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objDnPathS:源对象
 **/
export async function DnPath_FuncMapOutDataNodeName(objDnPath: clsDnPathENEx) {
  const strThisFuncName = DnPath_FuncMapOutDataNodeName.name;
  try {
    if (IsNullOrEmpty(objDnPath.outDataNodeName) == true) {
      const vDataNodeSimDataNodeId = objDnPath.outDataNodeId.toString();
      if (IsNullOrEmpty(objDnPath.prjId) == true) {
        const strMsg = `函数映射[OutDataNodeName]数据出错,prjId不能为空!(in ${dnPath_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      const vDataNodeSimDataNodeName = await vDataNode_Sim_func(
        clsvDataNode_SimEN.con_DataNodeId,
        clsvDataNode_SimEN.con_DataNodeName,
        vDataNodeSimDataNodeId,
        objDnPath.prjId,
      );
      objDnPath.outDataNodeName = vDataNodeSimDataNodeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001332)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      dnPath_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objDnPathS:源对象
 **/
export async function DnPath_FuncMapOutFldName(objDnPath: clsDnPathENEx) {
  const strThisFuncName = DnPath_FuncMapOutFldName.name;
  try {
    if (IsNullOrEmpty(objDnPath.outFldName) == true) {
      const vDataNodeSimDataNodeId = objDnPath.outDataNodeId.toString();
      if (IsNullOrEmpty(objDnPath.prjId) == true) {
        const strMsg = `函数映射[OutFldName]数据出错,prjId不能为空!(in ${dnPath_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      const vDataNodeSimFldId = await vDataNode_Sim_func(
        clsvDataNode_SimEN.con_DataNodeId,
        clsvDataNode_SimEN.con_FldId,
        vDataNodeSimDataNodeId,
        objDnPath.prjId,
      );
      const vFieldTabSimFldId = vDataNodeSimFldId;
      if (IsNullOrEmpty(objDnPath.prjId) == true) {
        const strMsg = `函数映射[OutFldName]数据出错,prjId不能为空!(in ${dnPath_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      const vFieldTabSimFldName = await vFieldTab_Sim_func(
        clsvFieldTab_SimEN.con_FldId,
        clsvFieldTab_SimEN.con_FldName,
        vFieldTabSimFldId,
        objDnPath.prjId,
      );
      objDnPath.outFldName = vFieldTabSimFldName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001305)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      dnPath_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objDnPathS:源对象
 **/
export async function DnPath_FuncMapDataNodeName(objDnPath: clsDnPathENEx) {
  const strThisFuncName = DnPath_FuncMapDataNodeName.name;
  try {
    if (IsNullOrEmpty(objDnPath.dataNodeName) == true) {
      const vDataNodeSimDataNodeId = objDnPath.inDataNodeId.toString();
      if (IsNullOrEmpty(objDnPath.prjId) == true) {
        const strMsg = `函数映射[DataNodeName]数据出错,prjId不能为空!(in ${dnPath_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      const vDataNodeSimDataNodeName = await vDataNode_Sim_func(
        clsvDataNode_SimEN.con_DataNodeId,
        clsvDataNode_SimEN.con_DataNodeName,
        vDataNodeSimDataNodeId,
        objDnPath.prjId,
      );
      objDnPath.dataNodeName = vDataNodeSimDataNodeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001336)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      dnPath_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objDnPathS:源对象
 **/
export async function DnPath_FuncMapInFldName(objDnPath: clsDnPathENEx) {
  const strThisFuncName = DnPath_FuncMapInFldName.name;
  try {
    if (IsNullOrEmpty(objDnPath.inFldName) == true) {
      const vDataNodeSimDataNodeId = objDnPath.inDataNodeId.toString();
      if (IsNullOrEmpty(objDnPath.prjId) == true) {
        const strMsg = `函数映射[InFldName]数据出错,prjId不能为空!(in ${dnPath_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      const vDataNodeSimFldId = await vDataNode_Sim_func(
        clsvDataNode_SimEN.con_DataNodeId,
        clsvDataNode_SimEN.con_FldId,
        vDataNodeSimDataNodeId,
        objDnPath.prjId,
      );
      const vFieldTabSimFldId = vDataNodeSimFldId;
      if (IsNullOrEmpty(objDnPath.prjId) == true) {
        const strMsg = `函数映射[InFldName]数据出错,prjId不能为空!(in ${dnPath_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      const vFieldTabSimFldName = await vFieldTab_Sim_func(
        clsvFieldTab_SimEN.con_FldId,
        clsvFieldTab_SimEN.con_FldName,
        vFieldTabSimFldId,
        objDnPath.prjId,
      );
      objDnPath.inFldName = vFieldTabSimFldName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001337)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      dnPath_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objDnPathS:源对象
 **/
export async function DnPath_FuncMapInFldId(objDnPath: clsDnPathENEx) {
  const strThisFuncName = DnPath_FuncMapInFldId.name;
  try {
    if (IsNullOrEmpty(objDnPath.inFldId) == true) {
      const vDataNodeSimDataNodeId = objDnPath.inDataNodeId.toString();
      if (IsNullOrEmpty(objDnPath.prjId) == true) {
        const strMsg = `函数映射[InFldId]数据出错,prjId不能为空!(in ${dnPath_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      const vDataNodeSimFldId = await vDataNode_Sim_func(
        clsvDataNode_SimEN.con_DataNodeId,
        clsvDataNode_SimEN.con_FldId,
        vDataNodeSimDataNodeId,
        objDnPath.prjId,
      );
      objDnPath.inFldId = vDataNodeSimFldId;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001338)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      dnPath_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objDnPathS:源对象
 **/
export async function DnPath_FuncMapAssociationMappingName(objDnPath: clsDnPathENEx) {
  const strThisFuncName = DnPath_FuncMapAssociationMappingName.name;
  try {
    if (IsNullOrEmpty(objDnPath.associationMappingName) == true) {
      const AssociationMappingAssociationMappingId = objDnPath.associationMappingId;
      const AssociationMappingAssociationMappingName = await AssociationMapping_func(
        clsAssociationMappingEN.con_AssociationMappingId,
        clsAssociationMappingEN.con_AssociationMappingName,
        AssociationMappingAssociationMappingId,
      );
      objDnPath.associationMappingName = AssociationMappingAssociationMappingName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001333)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      dnPath_ConstructorName,
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
export async function DnPath_DelDnPathsByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'DelDnPathsByCondAsync';
  const strAction = 'DelDnPathsByCond';
  const strUrl = GetWebApiUrl(dnPath_Controller, strAction);

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
        dnPath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dnPath_ConstructorName,
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
 * @param objDnPathEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function DnPath_AddNewRecordAsync(objDnPathEN: clsDnPathEN): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objDnPathEN);
  const strUrl = GetWebApiUrl(dnPath_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objDnPathEN, config);
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
        dnPath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dnPath_ConstructorName,
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
 * @param objDnPathEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function DnPath_AddNewRecordWithMaxIdAsync(objDnPathEN: clsDnPathEN): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(dnPath_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objDnPathEN, config);
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
        dnPath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dnPath_ConstructorName,
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
export async function DnPath_AddNewObjSave(objDnPathEN: clsDnPathEN): Promise<AddRecordResult> {
  const strThisFuncName = 'AddNewObjSave';
  try {
    DnPath_CheckPropertyNew(objDnPathEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${dnPath_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    alert(strMsg);
    return { keyword: '', success: false }; //一定要有一个返回值,否则会出错!
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await DnPath_CheckUniCond4Add(objDnPathEN);
    if (bolIsExistCond == false) {
      return { keyword: '', success: false };
    }
    let returnBool = false;
    const returnKeyId = await DnPath_AddNewRecordWithMaxIdAsync(objDnPathEN);
    if (IsNullOrEmpty(returnKeyId) == false) {
      returnBool = true;
    }
    if (returnBool == true) {
      //DnPath_ReFreshCache();
    } else {
      const strInfo = `添加[数据结点路径(DnPath)]记录不成功!`;
      //显示信息框
      throw strInfo;
    }
    return { keyword: returnKeyId, success: returnBool }; //一定要有一个返回值,否则会出错!
  } catch (e) {
    const strMsg = `添加记录不成功,${e}.(in ${dnPath_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export async function DnPath_CheckUniCond4Add(objDnPathEN: clsDnPathEN): Promise<boolean> {
  const strUniquenessCondition = DnPath_GetUniCondStr(objDnPathEN);
  const bolIsExistCondition = await DnPath_IsExistRecordAsync(strUniquenessCondition);
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
export async function DnPath_CheckUniCond4Update(objDnPathEN: clsDnPathEN): Promise<boolean> {
  const strUniquenessCondition = DnPath_GetUniCondStr4Update(objDnPathEN);
  const bolIsExistCondition = await DnPath_IsExistRecordAsync(strUniquenessCondition);
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
export async function DnPath_UpdateObjSave(objDnPathEN: clsDnPathEN): Promise<boolean> {
  const strThisFuncName = 'UpdateObjSave';
  objDnPathEN.sfUpdFldSetStr = objDnPathEN.updFldString; //设置哪些字段被修改(脏字段)
  if (objDnPathEN.dnPathId == '' || objDnPathEN.dnPathId == undefined) {
    console.error('关键字不能为空!');
    throw '关键字不能为空!';
  }
  try {
    DnPath_CheckProperty4Update(objDnPathEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${dnPath_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await DnPath_CheckUniCond4Update(objDnPathEN);
    if (bolIsExistCond == false) {
      return false;
    }
    const returnBool = await DnPath_UpdateRecordAsync(objDnPathEN);
    if (returnBool == true) {
      //DnPath_ReFreshCache();
    }
    return returnBool;
  } catch (e) {
    const strMsg = `修改记录不成功,${e}.(in ${dnPath_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objDnPathEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function DnPath_AddNewRecordWithReturnKeyAsync(
  objDnPathEN: clsDnPathEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(dnPath_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objDnPathEN, config);
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
        dnPath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dnPath_ConstructorName,
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
 * @param objDnPathEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function DnPath_UpdateRecordAsync(objDnPathEN: clsDnPathEN): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objDnPathEN.sfUpdFldSetStr === undefined ||
    objDnPathEN.sfUpdFldSetStr === null ||
    objDnPathEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format('对象(关键字: {0})的【修改字段集】为空,不能修改!', objDnPathEN.dnPathId);
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(dnPath_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objDnPathEN, config);
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
        dnPath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dnPath_ConstructorName,
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
 * @param objDnPathEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function DnPath_EditRecordExAsync(objDnPathEN: clsDnPathEN): Promise<boolean> {
  const strThisFuncName = 'EditRecordExAsync';
  const strAction = 'EditRecordEx';
  if (
    objDnPathEN.sfUpdFldSetStr === undefined ||
    objDnPathEN.sfUpdFldSetStr === null ||
    objDnPathEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format('对象(关键字: {0})的【修改字段集】为空,不能修改!', objDnPathEN.dnPathId);
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(dnPath_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objDnPathEN, config);
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
        dnPath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dnPath_ConstructorName,
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
 * @param objDnPathEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function DnPath_UpdateWithConditionAsync(
  objDnPathEN: clsDnPathEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objDnPathEN.sfUpdFldSetStr === undefined ||
    objDnPathEN.sfUpdFldSetStr === null ||
    objDnPathEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format('对象(关键字: {0})的【修改字段集】为空,不能修改!', objDnPathEN.dnPathId);
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(dnPath_Controller, strAction);
  objDnPathEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objDnPathEN, config);
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
        dnPath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dnPath_ConstructorName,
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
export async function DnPath_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(dnPath_Controller, strAction);

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
        dnPath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dnPath_ConstructorName,
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
 * @param strDnPathId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function DnPath_IsExistAsync(strDnPathId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(dnPath_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strDnPathId,
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
        dnPath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dnPath_ConstructorName,
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
export async function DnPath_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(dnPath_Controller, strAction);

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
        dnPath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dnPath_ConstructorName,
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
export async function DnPath_GetMaxStrIdAsync(): Promise<string> {
  const strThisFuncName = 'GetMaxStrIdAsync';
  const strAction = 'GetMaxStrId';
  const strUrl = GetWebApiUrl(dnPath_Controller, strAction);

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
        dnPath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dnPath_ConstructorName,
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
export async function DnPath_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(dnPath_Controller, strAction);

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
        dnPath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dnPath_ConstructorName,
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
export function DnPath_GetWebApiUrl(strController: string, strAction: string): string {
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
export function DnPath_CheckPropertyNew(pobjDnPathEN: clsDnPathEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjDnPathEN.dnPathName) === true) {
    throw new Error(
      `(errid:Watl000411)字段[DN路径名]不能为空(In 数据结点路径)!(clsDnPathBL:CheckPropertyNew0)`,
    );
  }
  if (
    null === pobjDnPathEN.inDataNodeId ||
    (pobjDnPathEN.inDataNodeId != null && pobjDnPathEN.inDataNodeId.toString() === '') ||
    pobjDnPathEN.inDataNodeId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000411)字段[In数据结点Id]不能为空(In 数据结点路径)!(clsDnPathBL:CheckPropertyNew0)`,
    );
  }
  if (
    null === pobjDnPathEN.outDataNodeId ||
    (pobjDnPathEN.outDataNodeId != null && pobjDnPathEN.outDataNodeId.toString() === '') ||
    pobjDnPathEN.outDataNodeId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000411)字段[Out数据结点Id]不能为空(In 数据结点路径)!(clsDnPathBL:CheckPropertyNew0)`,
    );
  }
  if (IsNullOrEmpty(pobjDnPathEN.dnPathNodeLst) === true) {
    throw new Error(
      `(errid:Watl000411)字段[路径结点列表]不能为空(In 数据结点路径)!(clsDnPathBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDnPathEN.associationMappingId) === true ||
    pobjDnPathEN.associationMappingId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000411)字段[关联关系映射Id]不能为空(In 数据结点路径)!(clsDnPathBL:CheckPropertyNew0)`,
    );
  }
  if (IsNullOrEmpty(pobjDnPathEN.prjId) === true || pobjDnPathEN.prjId.toString() === '0') {
    throw new Error(
      `(errid:Watl000411)字段[工程Id]不能为空(In 数据结点路径)!(clsDnPathBL:CheckPropertyNew0)`,
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (IsNullOrEmpty(pobjDnPathEN.dnPathId) == false && GetStrLen(pobjDnPathEN.dnPathId) > 8) {
    throw new Error(
      `(errid:Watl000413)字段[DN路径Id(dnPathId)]的长度不能超过8(In 数据结点路径(DnPath))!值:${pobjDnPathEN.dnPathId}(clsDnPathBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjDnPathEN.dnPathName) == false && GetStrLen(pobjDnPathEN.dnPathName) > 100) {
    throw new Error(
      `(errid:Watl000413)字段[DN路径名(dnPathName)]的长度不能超过100(In 数据结点路径(DnPath))!值:${pobjDnPathEN.dnPathName}(clsDnPathBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDnPathEN.dnPathNodeLst) == false &&
    GetStrLen(pobjDnPathEN.dnPathNodeLst) > 500
  ) {
    throw new Error(
      `(errid:Watl000413)字段[路径结点列表(dnPathNodeLst)]的长度不能超过500(In 数据结点路径(DnPath))!值:${pobjDnPathEN.dnPathNodeLst}(clsDnPathBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDnPathEN.dnPathNodeLstV2) == false &&
    GetStrLen(pobjDnPathEN.dnPathNodeLstV2) > 500
  ) {
    throw new Error(
      `(errid:Watl000413)字段[路径结点列表V2(dnPathNodeLstV2)]的长度不能超过500(In 数据结点路径(DnPath))!值:${pobjDnPathEN.dnPathNodeLstV2}(clsDnPathBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDnPathEN.associationMappingId) == false &&
    GetStrLen(pobjDnPathEN.associationMappingId) > 2
  ) {
    throw new Error(
      `(errid:Watl000413)字段[关联关系映射Id(associationMappingId)]的长度不能超过2(In 数据结点路径(DnPath))!值:${pobjDnPathEN.associationMappingId}(clsDnPathBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjDnPathEN.errMsg) == false && GetStrLen(pobjDnPathEN.errMsg) > 2000) {
    throw new Error(
      `(errid:Watl000413)字段[错误信息(errMsg)]的长度不能超过2000(In 数据结点路径(DnPath))!值:${pobjDnPathEN.errMsg}(clsDnPathBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjDnPathEN.prjId) == false && GetStrLen(pobjDnPathEN.prjId) > 4) {
    throw new Error(
      `(errid:Watl000413)字段[工程Id(prjId)]的长度不能超过4(In 数据结点路径(DnPath))!值:${pobjDnPathEN.prjId}(clsDnPathBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjDnPathEN.updDate) == false && GetStrLen(pobjDnPathEN.updDate) > 20) {
    throw new Error(
      `(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 数据结点路径(DnPath))!值:${pobjDnPathEN.updDate}(clsDnPathBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjDnPathEN.updUser) == false && GetStrLen(pobjDnPathEN.updUser) > 20) {
    throw new Error(
      `(errid:Watl000413)字段[修改者(updUser)]的长度不能超过20(In 数据结点路径(DnPath))!值:${pobjDnPathEN.updUser}(clsDnPathBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjDnPathEN.memo) == false && GetStrLen(pobjDnPathEN.memo) > 1000) {
    throw new Error(
      `(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In 数据结点路径(DnPath))!值:${pobjDnPathEN.memo}(clsDnPathBL:CheckPropertyNew)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjDnPathEN.dnPathId) == false &&
    undefined !== pobjDnPathEN.dnPathId &&
    tzDataType.isString(pobjDnPathEN.dnPathId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[DN路径Id(dnPathId)]的值:[${pobjDnPathEN.dnPathId}], 非法,应该为字符型(In 数据结点路径(DnPath))!(clsDnPathBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDnPathEN.dnPathName) == false &&
    undefined !== pobjDnPathEN.dnPathName &&
    tzDataType.isString(pobjDnPathEN.dnPathName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[DN路径名(dnPathName)]的值:[${pobjDnPathEN.dnPathName}], 非法,应该为字符型(In 数据结点路径(DnPath))!(clsDnPathBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjDnPathEN.inDataNodeId &&
    undefined !== pobjDnPathEN.inDataNodeId &&
    tzDataType.isNumber(pobjDnPathEN.inDataNodeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[In数据结点Id(inDataNodeId)]的值:[${pobjDnPathEN.inDataNodeId}], 非法,应该为数值型(In 数据结点路径(DnPath))!(clsDnPathBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjDnPathEN.outDataNodeId &&
    undefined !== pobjDnPathEN.outDataNodeId &&
    tzDataType.isNumber(pobjDnPathEN.outDataNodeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[Out数据结点Id(outDataNodeId)]的值:[${pobjDnPathEN.outDataNodeId}], 非法,应该为数值型(In 数据结点路径(DnPath))!(clsDnPathBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDnPathEN.dnPathNodeLst) == false &&
    undefined !== pobjDnPathEN.dnPathNodeLst &&
    tzDataType.isString(pobjDnPathEN.dnPathNodeLst) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[路径结点列表(dnPathNodeLst)]的值:[${pobjDnPathEN.dnPathNodeLst}], 非法,应该为字符型(In 数据结点路径(DnPath))!(clsDnPathBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDnPathEN.dnPathNodeLstV2) == false &&
    undefined !== pobjDnPathEN.dnPathNodeLstV2 &&
    tzDataType.isString(pobjDnPathEN.dnPathNodeLstV2) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[路径结点列表V2(dnPathNodeLstV2)]的值:[${pobjDnPathEN.dnPathNodeLstV2}], 非法,应该为字符型(In 数据结点路径(DnPath))!(clsDnPathBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDnPathEN.associationMappingId) == false &&
    undefined !== pobjDnPathEN.associationMappingId &&
    tzDataType.isString(pobjDnPathEN.associationMappingId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[关联关系映射Id(associationMappingId)]的值:[${pobjDnPathEN.associationMappingId}], 非法,应该为字符型(In 数据结点路径(DnPath))!(clsDnPathBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjDnPathEN.isHasErr &&
    undefined !== pobjDnPathEN.isHasErr &&
    tzDataType.isBoolean(pobjDnPathEN.isHasErr) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否有错(isHasErr)]的值:[${pobjDnPathEN.isHasErr}], 非法,应该为布尔型(In 数据结点路径(DnPath))!(clsDnPathBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjDnPathEN.edgeNum &&
    undefined !== pobjDnPathEN.edgeNum &&
    tzDataType.isNumber(pobjDnPathEN.edgeNum) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[边数(edgeNum)]的值:[${pobjDnPathEN.edgeNum}], 非法,应该为数值型(In 数据结点路径(DnPath))!(clsDnPathBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDnPathEN.errMsg) == false &&
    undefined !== pobjDnPathEN.errMsg &&
    tzDataType.isString(pobjDnPathEN.errMsg) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[错误信息(errMsg)]的值:[${pobjDnPathEN.errMsg}], 非法,应该为字符型(In 数据结点路径(DnPath))!(clsDnPathBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjDnPathEN.inUse &&
    undefined !== pobjDnPathEN.inUse &&
    tzDataType.isBoolean(pobjDnPathEN.inUse) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否在用(inUse)]的值:[${pobjDnPathEN.inUse}], 非法,应该为布尔型(In 数据结点路径(DnPath))!(clsDnPathBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjDnPathEN.isExistPath &&
    undefined !== pobjDnPathEN.isExistPath &&
    tzDataType.isBoolean(pobjDnPathEN.isExistPath) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否存在路径(isExistPath)]的值:[${pobjDnPathEN.isExistPath}], 非法,应该为布尔型(In 数据结点路径(DnPath))!(clsDnPathBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDnPathEN.prjId) == false &&
    undefined !== pobjDnPathEN.prjId &&
    tzDataType.isString(pobjDnPathEN.prjId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[工程Id(prjId)]的值:[${pobjDnPathEN.prjId}], 非法,应该为字符型(In 数据结点路径(DnPath))!(clsDnPathBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDnPathEN.updDate) == false &&
    undefined !== pobjDnPathEN.updDate &&
    tzDataType.isString(pobjDnPathEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjDnPathEN.updDate}], 非法,应该为字符型(In 数据结点路径(DnPath))!(clsDnPathBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDnPathEN.updUser) == false &&
    undefined !== pobjDnPathEN.updUser &&
    tzDataType.isString(pobjDnPathEN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改者(updUser)]的值:[${pobjDnPathEN.updUser}], 非法,应该为字符型(In 数据结点路径(DnPath))!(clsDnPathBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDnPathEN.memo) == false &&
    undefined !== pobjDnPathEN.memo &&
    tzDataType.isString(pobjDnPathEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[说明(memo)]的值:[${pobjDnPathEN.memo}], 非法,应该为字符型(In 数据结点路径(DnPath))!(clsDnPathBL:CheckPropertyNew0)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function DnPath_CheckProperty4Update(pobjDnPathEN: clsDnPathEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (IsNullOrEmpty(pobjDnPathEN.dnPathId) == false && GetStrLen(pobjDnPathEN.dnPathId) > 8) {
    throw new Error(
      `(errid:Watl000416)字段[DN路径Id(dnPathId)]的长度不能超过8(In 数据结点路径(DnPath))!值:${pobjDnPathEN.dnPathId}(clsDnPathBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjDnPathEN.dnPathName) == false && GetStrLen(pobjDnPathEN.dnPathName) > 100) {
    throw new Error(
      `(errid:Watl000416)字段[DN路径名(dnPathName)]的长度不能超过100(In 数据结点路径(DnPath))!值:${pobjDnPathEN.dnPathName}(clsDnPathBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDnPathEN.dnPathNodeLst) == false &&
    GetStrLen(pobjDnPathEN.dnPathNodeLst) > 500
  ) {
    throw new Error(
      `(errid:Watl000416)字段[路径结点列表(dnPathNodeLst)]的长度不能超过500(In 数据结点路径(DnPath))!值:${pobjDnPathEN.dnPathNodeLst}(clsDnPathBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDnPathEN.dnPathNodeLstV2) == false &&
    GetStrLen(pobjDnPathEN.dnPathNodeLstV2) > 500
  ) {
    throw new Error(
      `(errid:Watl000416)字段[路径结点列表V2(dnPathNodeLstV2)]的长度不能超过500(In 数据结点路径(DnPath))!值:${pobjDnPathEN.dnPathNodeLstV2}(clsDnPathBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDnPathEN.associationMappingId) == false &&
    GetStrLen(pobjDnPathEN.associationMappingId) > 2
  ) {
    throw new Error(
      `(errid:Watl000416)字段[关联关系映射Id(associationMappingId)]的长度不能超过2(In 数据结点路径(DnPath))!值:${pobjDnPathEN.associationMappingId}(clsDnPathBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjDnPathEN.errMsg) == false && GetStrLen(pobjDnPathEN.errMsg) > 2000) {
    throw new Error(
      `(errid:Watl000416)字段[错误信息(errMsg)]的长度不能超过2000(In 数据结点路径(DnPath))!值:${pobjDnPathEN.errMsg}(clsDnPathBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjDnPathEN.prjId) == false && GetStrLen(pobjDnPathEN.prjId) > 4) {
    throw new Error(
      `(errid:Watl000416)字段[工程Id(prjId)]的长度不能超过4(In 数据结点路径(DnPath))!值:${pobjDnPathEN.prjId}(clsDnPathBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjDnPathEN.updDate) == false && GetStrLen(pobjDnPathEN.updDate) > 20) {
    throw new Error(
      `(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 数据结点路径(DnPath))!值:${pobjDnPathEN.updDate}(clsDnPathBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjDnPathEN.updUser) == false && GetStrLen(pobjDnPathEN.updUser) > 20) {
    throw new Error(
      `(errid:Watl000416)字段[修改者(updUser)]的长度不能超过20(In 数据结点路径(DnPath))!值:${pobjDnPathEN.updUser}(clsDnPathBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjDnPathEN.memo) == false && GetStrLen(pobjDnPathEN.memo) > 1000) {
    throw new Error(
      `(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In 数据结点路径(DnPath))!值:${pobjDnPathEN.memo}(clsDnPathBL:CheckProperty4Update)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjDnPathEN.dnPathId) == false &&
    undefined !== pobjDnPathEN.dnPathId &&
    tzDataType.isString(pobjDnPathEN.dnPathId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[DN路径Id(dnPathId)]的值:[${pobjDnPathEN.dnPathId}], 非法,应该为字符型(In 数据结点路径(DnPath))!(clsDnPathBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDnPathEN.dnPathName) == false &&
    undefined !== pobjDnPathEN.dnPathName &&
    tzDataType.isString(pobjDnPathEN.dnPathName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[DN路径名(dnPathName)]的值:[${pobjDnPathEN.dnPathName}], 非法,应该为字符型(In 数据结点路径(DnPath))!(clsDnPathBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjDnPathEN.inDataNodeId &&
    undefined !== pobjDnPathEN.inDataNodeId &&
    tzDataType.isNumber(pobjDnPathEN.inDataNodeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[In数据结点Id(inDataNodeId)]的值:[${pobjDnPathEN.inDataNodeId}], 非法,应该为数值型(In 数据结点路径(DnPath))!(clsDnPathBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjDnPathEN.outDataNodeId &&
    undefined !== pobjDnPathEN.outDataNodeId &&
    tzDataType.isNumber(pobjDnPathEN.outDataNodeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[Out数据结点Id(outDataNodeId)]的值:[${pobjDnPathEN.outDataNodeId}], 非法,应该为数值型(In 数据结点路径(DnPath))!(clsDnPathBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDnPathEN.dnPathNodeLst) == false &&
    undefined !== pobjDnPathEN.dnPathNodeLst &&
    tzDataType.isString(pobjDnPathEN.dnPathNodeLst) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[路径结点列表(dnPathNodeLst)]的值:[${pobjDnPathEN.dnPathNodeLst}], 非法,应该为字符型(In 数据结点路径(DnPath))!(clsDnPathBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDnPathEN.dnPathNodeLstV2) == false &&
    undefined !== pobjDnPathEN.dnPathNodeLstV2 &&
    tzDataType.isString(pobjDnPathEN.dnPathNodeLstV2) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[路径结点列表V2(dnPathNodeLstV2)]的值:[${pobjDnPathEN.dnPathNodeLstV2}], 非法,应该为字符型(In 数据结点路径(DnPath))!(clsDnPathBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDnPathEN.associationMappingId) == false &&
    undefined !== pobjDnPathEN.associationMappingId &&
    tzDataType.isString(pobjDnPathEN.associationMappingId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[关联关系映射Id(associationMappingId)]的值:[${pobjDnPathEN.associationMappingId}], 非法,应该为字符型(In 数据结点路径(DnPath))!(clsDnPathBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjDnPathEN.isHasErr &&
    undefined !== pobjDnPathEN.isHasErr &&
    tzDataType.isBoolean(pobjDnPathEN.isHasErr) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否有错(isHasErr)]的值:[${pobjDnPathEN.isHasErr}], 非法,应该为布尔型(In 数据结点路径(DnPath))!(clsDnPathBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjDnPathEN.edgeNum &&
    undefined !== pobjDnPathEN.edgeNum &&
    tzDataType.isNumber(pobjDnPathEN.edgeNum) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[边数(edgeNum)]的值:[${pobjDnPathEN.edgeNum}], 非法,应该为数值型(In 数据结点路径(DnPath))!(clsDnPathBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDnPathEN.errMsg) == false &&
    undefined !== pobjDnPathEN.errMsg &&
    tzDataType.isString(pobjDnPathEN.errMsg) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[错误信息(errMsg)]的值:[${pobjDnPathEN.errMsg}], 非法,应该为字符型(In 数据结点路径(DnPath))!(clsDnPathBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjDnPathEN.inUse &&
    undefined !== pobjDnPathEN.inUse &&
    tzDataType.isBoolean(pobjDnPathEN.inUse) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否在用(inUse)]的值:[${pobjDnPathEN.inUse}], 非法,应该为布尔型(In 数据结点路径(DnPath))!(clsDnPathBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjDnPathEN.isExistPath &&
    undefined !== pobjDnPathEN.isExistPath &&
    tzDataType.isBoolean(pobjDnPathEN.isExistPath) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否存在路径(isExistPath)]的值:[${pobjDnPathEN.isExistPath}], 非法,应该为布尔型(In 数据结点路径(DnPath))!(clsDnPathBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDnPathEN.prjId) == false &&
    undefined !== pobjDnPathEN.prjId &&
    tzDataType.isString(pobjDnPathEN.prjId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[工程Id(prjId)]的值:[${pobjDnPathEN.prjId}], 非法,应该为字符型(In 数据结点路径(DnPath))!(clsDnPathBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDnPathEN.updDate) == false &&
    undefined !== pobjDnPathEN.updDate &&
    tzDataType.isString(pobjDnPathEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjDnPathEN.updDate}], 非法,应该为字符型(In 数据结点路径(DnPath))!(clsDnPathBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDnPathEN.updUser) == false &&
    undefined !== pobjDnPathEN.updUser &&
    tzDataType.isString(pobjDnPathEN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改者(updUser)]的值:[${pobjDnPathEN.updUser}], 非法,应该为字符型(In 数据结点路径(DnPath))!(clsDnPathBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDnPathEN.memo) == false &&
    undefined !== pobjDnPathEN.memo &&
    tzDataType.isString(pobjDnPathEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[说明(memo)]的值:[${pobjDnPathEN.memo}], 非法,应该为字符型(In 数据结点路径(DnPath))!(clsDnPathBL:CheckProperty4Update)`,
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
export function DnPath_GetJSONStrByObj(pobjDnPathEN: clsDnPathEN): string {
  pobjDnPathEN.sfUpdFldSetStr = pobjDnPathEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjDnPathEN);
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
export function DnPath_GetObjLstByJSONStr(strJSON: string): Array<clsDnPathEN> {
  let arrDnPathObjLst = new Array<clsDnPathEN>();
  if (strJSON === '') {
    return arrDnPathObjLst;
  }
  try {
    arrDnPathObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrDnPathObjLst;
  }
  return arrDnPathObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrDnPathObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function DnPath_GetObjLstByJSONObjLst(
  arrDnPathObjLstS: Array<clsDnPathEN>,
): Array<clsDnPathEN> {
  const arrDnPathObjLst = new Array<clsDnPathEN>();
  for (const objInFor of arrDnPathObjLstS) {
    const obj1 = DnPath_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrDnPathObjLst.push(obj1);
  }
  return arrDnPathObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function DnPath_GetObjByJSONStr(strJSON: string): clsDnPathEN {
  let pobjDnPathEN = new clsDnPathEN();
  if (strJSON === '') {
    return pobjDnPathEN;
  }
  try {
    pobjDnPathEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjDnPathEN;
  }
  return pobjDnPathEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function DnPath_GetCombineCondition(objDnPathCond: clsDnPathEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objDnPathCond.dicFldComparisonOp,
      clsDnPathEN.con_DnPathId,
    ) == true
  ) {
    const strComparisonOpDnPathId: string =
      objDnPathCond.dicFldComparisonOp[clsDnPathEN.con_DnPathId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDnPathEN.con_DnPathId,
      objDnPathCond.dnPathId,
      strComparisonOpDnPathId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDnPathCond.dicFldComparisonOp,
      clsDnPathEN.con_DnPathName,
    ) == true
  ) {
    const strComparisonOpDnPathName: string =
      objDnPathCond.dicFldComparisonOp[clsDnPathEN.con_DnPathName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDnPathEN.con_DnPathName,
      objDnPathCond.dnPathName,
      strComparisonOpDnPathName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDnPathCond.dicFldComparisonOp,
      clsDnPathEN.con_InDataNodeId,
    ) == true
  ) {
    const strComparisonOpInDataNodeId: string =
      objDnPathCond.dicFldComparisonOp[clsDnPathEN.con_InDataNodeId];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsDnPathEN.con_InDataNodeId,
      objDnPathCond.inDataNodeId,
      strComparisonOpInDataNodeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDnPathCond.dicFldComparisonOp,
      clsDnPathEN.con_OutDataNodeId,
    ) == true
  ) {
    const strComparisonOpOutDataNodeId: string =
      objDnPathCond.dicFldComparisonOp[clsDnPathEN.con_OutDataNodeId];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsDnPathEN.con_OutDataNodeId,
      objDnPathCond.outDataNodeId,
      strComparisonOpOutDataNodeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDnPathCond.dicFldComparisonOp,
      clsDnPathEN.con_DnPathNodeLst,
    ) == true
  ) {
    const strComparisonOpDnPathNodeLst: string =
      objDnPathCond.dicFldComparisonOp[clsDnPathEN.con_DnPathNodeLst];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDnPathEN.con_DnPathNodeLst,
      objDnPathCond.dnPathNodeLst,
      strComparisonOpDnPathNodeLst,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDnPathCond.dicFldComparisonOp,
      clsDnPathEN.con_DnPathNodeLstV2,
    ) == true
  ) {
    const strComparisonOpDnPathNodeLstV2: string =
      objDnPathCond.dicFldComparisonOp[clsDnPathEN.con_DnPathNodeLstV2];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDnPathEN.con_DnPathNodeLstV2,
      objDnPathCond.dnPathNodeLstV2,
      strComparisonOpDnPathNodeLstV2,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDnPathCond.dicFldComparisonOp,
      clsDnPathEN.con_AssociationMappingId,
    ) == true
  ) {
    const strComparisonOpAssociationMappingId: string =
      objDnPathCond.dicFldComparisonOp[clsDnPathEN.con_AssociationMappingId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDnPathEN.con_AssociationMappingId,
      objDnPathCond.associationMappingId,
      strComparisonOpAssociationMappingId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDnPathCond.dicFldComparisonOp,
      clsDnPathEN.con_IsHasErr,
    ) == true
  ) {
    if (objDnPathCond.isHasErr == true) {
      strWhereCond += Format(" And {0} = '1'", clsDnPathEN.con_IsHasErr);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsDnPathEN.con_IsHasErr);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDnPathCond.dicFldComparisonOp,
      clsDnPathEN.con_EdgeNum,
    ) == true
  ) {
    const strComparisonOpEdgeNum: string =
      objDnPathCond.dicFldComparisonOp[clsDnPathEN.con_EdgeNum];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsDnPathEN.con_EdgeNum,
      objDnPathCond.edgeNum,
      strComparisonOpEdgeNum,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDnPathCond.dicFldComparisonOp,
      clsDnPathEN.con_ErrMsg,
    ) == true
  ) {
    const strComparisonOpErrMsg: string = objDnPathCond.dicFldComparisonOp[clsDnPathEN.con_ErrMsg];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDnPathEN.con_ErrMsg,
      objDnPathCond.errMsg,
      strComparisonOpErrMsg,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(objDnPathCond.dicFldComparisonOp, clsDnPathEN.con_InUse) ==
    true
  ) {
    if (objDnPathCond.inUse == true) {
      strWhereCond += Format(" And {0} = '1'", clsDnPathEN.con_InUse);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsDnPathEN.con_InUse);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDnPathCond.dicFldComparisonOp,
      clsDnPathEN.con_IsExistPath,
    ) == true
  ) {
    if (objDnPathCond.isExistPath == true) {
      strWhereCond += Format(" And {0} = '1'", clsDnPathEN.con_IsExistPath);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsDnPathEN.con_IsExistPath);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(objDnPathCond.dicFldComparisonOp, clsDnPathEN.con_PrjId) ==
    true
  ) {
    const strComparisonOpPrjId: string = objDnPathCond.dicFldComparisonOp[clsDnPathEN.con_PrjId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDnPathEN.con_PrjId,
      objDnPathCond.prjId,
      strComparisonOpPrjId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDnPathCond.dicFldComparisonOp,
      clsDnPathEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objDnPathCond.dicFldComparisonOp[clsDnPathEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDnPathEN.con_UpdDate,
      objDnPathCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDnPathCond.dicFldComparisonOp,
      clsDnPathEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objDnPathCond.dicFldComparisonOp[clsDnPathEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDnPathEN.con_UpdUser,
      objDnPathCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(objDnPathCond.dicFldComparisonOp, clsDnPathEN.con_Memo) ==
    true
  ) {
    const strComparisonOpMemo: string = objDnPathCond.dicFldComparisonOp[clsDnPathEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDnPathEN.con_Memo,
      objDnPathCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--DnPath(数据结点路径),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strDnPathName: DN路径名(要求唯一的字段)
 * @param strDnPathNodeLst: 路径结点列表(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function DnPath_GetUniCondStr(objDnPathEN: clsDnPathEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and DnPathName = '{0}'", objDnPathEN.dnPathName);
  strWhereCond += Format(" and DnPathNodeLst = '{0}'", objDnPathEN.dnPathNodeLst);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--DnPath(数据结点路径),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strDnPathName: DN路径名(要求唯一的字段)
 * @param strDnPathNodeLst: 路径结点列表(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function DnPath_GetUniCondStr4Update(objDnPathEN: clsDnPathEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and DnPathId <> '{0}'", objDnPathEN.dnPathId);
  strWhereCond += Format(" and DnPathName = '{0}'", objDnPathEN.dnPathName);
  strWhereCond += Format(" and DnPathNodeLst = '{0}'", objDnPathEN.dnPathNodeLst);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objDnPathENS:源对象
 * @param objDnPathENT:目标对象
 */
export function DnPath_GetObjFromJsonObj(objDnPathENS: clsDnPathEN): clsDnPathEN {
  const objDnPathENT: clsDnPathEN = new clsDnPathEN();
  ObjectAssign(objDnPathENT, objDnPathENS);
  return objDnPathENT;
}
