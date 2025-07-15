/**
 * 类名:clsDataNodeWApi
 * 表名:DataNode(00050547)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/14 11:52:58
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
 * 数据结点(DataNode)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2025年06月14日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import {
  ObjectAssign,
  BindDdl_ObjLstInDivObj,
  GetExceptionStr,
  myShowErrorMsg,
} from '@/ts/PubFun/clsCommFunc4Web';
import { clsDataNodeENEx } from '@/ts/L0Entity/AIModule/clsDataNodeENEx';
import { clsDataNodeEN } from '@/ts/L0Entity/AIModule/clsDataNodeEN';
import { Format, GetStrLen, tzDataType, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { vFieldTab_Sim_func } from '@/ts/L3ForWApi/Table_Field/clsvFieldTab_SimWApi';
import { clsvFieldTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvFieldTab_SimEN';
import { DataNodeType_func } from '@/ts/L3ForWApi/AIModule/clsDataNodeTypeWApi';
import { clsDataNodeTypeEN } from '@/ts/L0Entity/AIModule/clsDataNodeTypeEN';
import { AddRecordResult } from '@/ts/PubFun/AddRecordResult';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';

export const dataNode_Controller = 'DataNodeApi';
export const dataNode_ConstructorName = 'dataNode';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngDataNodeId:关键字
 * @returns 对象
 **/
export async function DataNode_GetObjByDataNodeIdAsync(
  lngDataNodeId: number,
): Promise<clsDataNodeEN | null> {
  const strThisFuncName = 'GetObjByDataNodeIdAsync';

  if (lngDataNodeId == 0) {
    const strMsg = Format(
      '参数:[lngDataNodeId]不能为空!(In clsDataNodeWApi.GetObjByDataNodeIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByDataNodeId';
  const strUrl = GetWebApiUrl(dataNode_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      lngDataNodeId,
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
      const objDataNode = DataNode_GetObjFromJsonObj(returnObj);
      return objDataNode;
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
        dataNode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataNode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[GetObjByDataNodeIdlocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[GetObjByDataNodeIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )
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
export function DataNode_SortFunDefa(a: clsDataNodeEN, b: clsDataNodeEN): number {
  return a.dataNodeId - b.dataNodeId;
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
export function DataNode_SortFunDefa2Fld(a: clsDataNodeEN, b: clsDataNodeEN): number {
  if (a.dataNodeName == b.dataNodeName) return a.tabId.localeCompare(b.tabId);
  else return a.dataNodeName.localeCompare(b.dataNodeName);
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
export function DataNode_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsDataNodeEN.con_DataNodeId:
        return (a: clsDataNodeEN, b: clsDataNodeEN) => {
          return a.dataNodeId - b.dataNodeId;
        };
      case clsDataNodeEN.con_DataNodeName:
        return (a: clsDataNodeEN, b: clsDataNodeEN) => {
          return a.dataNodeName.localeCompare(b.dataNodeName);
        };
      case clsDataNodeEN.con_TabId:
        return (a: clsDataNodeEN, b: clsDataNodeEN) => {
          return a.tabId.localeCompare(b.tabId);
        };
      case clsDataNodeEN.con_FldId:
        return (a: clsDataNodeEN, b: clsDataNodeEN) => {
          return a.fldId.localeCompare(b.fldId);
        };
      case clsDataNodeEN.con_KeyFldLst:
        return (a: clsDataNodeEN, b: clsDataNodeEN) => {
          if (a.keyFldLst == null) return -1;
          if (b.keyFldLst == null) return 1;
          return a.keyFldLst.localeCompare(b.keyFldLst);
        };
      case clsDataNodeEN.con_VersionNo:
        return (a: clsDataNodeEN, b: clsDataNodeEN) => {
          return a.versionNo - b.versionNo;
        };
      case clsDataNodeEN.con_DataNodeTypeId:
        return (a: clsDataNodeEN, b: clsDataNodeEN) => {
          return a.dataNodeTypeId.localeCompare(b.dataNodeTypeId);
        };
      case clsDataNodeEN.con_Depth:
        return (a: clsDataNodeEN, b: clsDataNodeEN) => {
          return a.depth - b.depth;
        };
      case clsDataNodeEN.con_PrevDataNodeId:
        return (a: clsDataNodeEN, b: clsDataNodeEN) => {
          return a.prevDataNodeId - b.prevDataNodeId;
        };
      case clsDataNodeEN.con_NextDataNodeId:
        return (a: clsDataNodeEN, b: clsDataNodeEN) => {
          return a.nextDataNodeId - b.nextDataNodeId;
        };
      case clsDataNodeEN.con_SubGraphName:
        return (a: clsDataNodeEN, b: clsDataNodeEN) => {
          if (a.subGraphName == null) return -1;
          if (b.subGraphName == null) return 1;
          return a.subGraphName.localeCompare(b.subGraphName);
        };
      case clsDataNodeEN.con_ErrMsg:
        return (a: clsDataNodeEN, b: clsDataNodeEN) => {
          if (a.errMsg == null) return -1;
          if (b.errMsg == null) return 1;
          return a.errMsg.localeCompare(b.errMsg);
        };
      case clsDataNodeEN.con_PrjId:
        return (a: clsDataNodeEN, b: clsDataNodeEN) => {
          return a.prjId.localeCompare(b.prjId);
        };
      case clsDataNodeEN.con_PosX:
        return (a: clsDataNodeEN, b: clsDataNodeEN) => {
          return a.posX - b.posX;
        };
      case clsDataNodeEN.con_PosY:
        return (a: clsDataNodeEN, b: clsDataNodeEN) => {
          return a.posY - b.posY;
        };
      case clsDataNodeEN.con_UsedTimes:
        return (a: clsDataNodeEN, b: clsDataNodeEN) => {
          return a.usedTimes - b.usedTimes;
        };
      case clsDataNodeEN.con_UpdDate:
        return (a: clsDataNodeEN, b: clsDataNodeEN) => {
          return a.updDate.localeCompare(b.updDate);
        };
      case clsDataNodeEN.con_UpdUser:
        return (a: clsDataNodeEN, b: clsDataNodeEN) => {
          return a.updUser.localeCompare(b.updUser);
        };
      case clsDataNodeEN.con_Memo:
        return (a: clsDataNodeEN, b: clsDataNodeEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[DataNode]中不存在!(in ${dataNode_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsDataNodeEN.con_DataNodeId:
        return (a: clsDataNodeEN, b: clsDataNodeEN) => {
          return b.dataNodeId - a.dataNodeId;
        };
      case clsDataNodeEN.con_DataNodeName:
        return (a: clsDataNodeEN, b: clsDataNodeEN) => {
          return b.dataNodeName.localeCompare(a.dataNodeName);
        };
      case clsDataNodeEN.con_TabId:
        return (a: clsDataNodeEN, b: clsDataNodeEN) => {
          return b.tabId.localeCompare(a.tabId);
        };
      case clsDataNodeEN.con_FldId:
        return (a: clsDataNodeEN, b: clsDataNodeEN) => {
          return b.fldId.localeCompare(a.fldId);
        };
      case clsDataNodeEN.con_KeyFldLst:
        return (a: clsDataNodeEN, b: clsDataNodeEN) => {
          if (b.keyFldLst == null) return -1;
          if (a.keyFldLst == null) return 1;
          return b.keyFldLst.localeCompare(a.keyFldLst);
        };
      case clsDataNodeEN.con_VersionNo:
        return (a: clsDataNodeEN, b: clsDataNodeEN) => {
          return b.versionNo - a.versionNo;
        };
      case clsDataNodeEN.con_DataNodeTypeId:
        return (a: clsDataNodeEN, b: clsDataNodeEN) => {
          return b.dataNodeTypeId.localeCompare(a.dataNodeTypeId);
        };
      case clsDataNodeEN.con_Depth:
        return (a: clsDataNodeEN, b: clsDataNodeEN) => {
          return b.depth - a.depth;
        };
      case clsDataNodeEN.con_PrevDataNodeId:
        return (a: clsDataNodeEN, b: clsDataNodeEN) => {
          return b.prevDataNodeId - a.prevDataNodeId;
        };
      case clsDataNodeEN.con_NextDataNodeId:
        return (a: clsDataNodeEN, b: clsDataNodeEN) => {
          return b.nextDataNodeId - a.nextDataNodeId;
        };
      case clsDataNodeEN.con_SubGraphName:
        return (a: clsDataNodeEN, b: clsDataNodeEN) => {
          if (b.subGraphName == null) return -1;
          if (a.subGraphName == null) return 1;
          return b.subGraphName.localeCompare(a.subGraphName);
        };
      case clsDataNodeEN.con_ErrMsg:
        return (a: clsDataNodeEN, b: clsDataNodeEN) => {
          if (b.errMsg == null) return -1;
          if (a.errMsg == null) return 1;
          return b.errMsg.localeCompare(a.errMsg);
        };
      case clsDataNodeEN.con_PrjId:
        return (a: clsDataNodeEN, b: clsDataNodeEN) => {
          return b.prjId.localeCompare(a.prjId);
        };
      case clsDataNodeEN.con_PosX:
        return (a: clsDataNodeEN, b: clsDataNodeEN) => {
          return b.posX - a.posX;
        };
      case clsDataNodeEN.con_PosY:
        return (a: clsDataNodeEN, b: clsDataNodeEN) => {
          return b.posY - a.posY;
        };
      case clsDataNodeEN.con_UsedTimes:
        return (a: clsDataNodeEN, b: clsDataNodeEN) => {
          return b.usedTimes - a.usedTimes;
        };
      case clsDataNodeEN.con_UpdDate:
        return (a: clsDataNodeEN, b: clsDataNodeEN) => {
          return b.updDate.localeCompare(a.updDate);
        };
      case clsDataNodeEN.con_UpdUser:
        return (a: clsDataNodeEN, b: clsDataNodeEN) => {
          return b.updUser.localeCompare(a.updUser);
        };
      case clsDataNodeEN.con_Memo:
        return (a: clsDataNodeEN, b: clsDataNodeEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[DataNode]中不存在!(in ${dataNode_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}
//该表没有使用Cache,不需要生成[GetNameByDataNodeIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function DataNode_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsDataNodeEN.con_DataNodeId:
      return (obj: clsDataNodeEN) => {
        return obj.dataNodeId === value;
      };
    case clsDataNodeEN.con_DataNodeName:
      return (obj: clsDataNodeEN) => {
        return obj.dataNodeName === value;
      };
    case clsDataNodeEN.con_TabId:
      return (obj: clsDataNodeEN) => {
        return obj.tabId === value;
      };
    case clsDataNodeEN.con_FldId:
      return (obj: clsDataNodeEN) => {
        return obj.fldId === value;
      };
    case clsDataNodeEN.con_KeyFldLst:
      return (obj: clsDataNodeEN) => {
        return obj.keyFldLst === value;
      };
    case clsDataNodeEN.con_VersionNo:
      return (obj: clsDataNodeEN) => {
        return obj.versionNo === value;
      };
    case clsDataNodeEN.con_DataNodeTypeId:
      return (obj: clsDataNodeEN) => {
        return obj.dataNodeTypeId === value;
      };
    case clsDataNodeEN.con_Depth:
      return (obj: clsDataNodeEN) => {
        return obj.depth === value;
      };
    case clsDataNodeEN.con_PrevDataNodeId:
      return (obj: clsDataNodeEN) => {
        return obj.prevDataNodeId === value;
      };
    case clsDataNodeEN.con_NextDataNodeId:
      return (obj: clsDataNodeEN) => {
        return obj.nextDataNodeId === value;
      };
    case clsDataNodeEN.con_SubGraphName:
      return (obj: clsDataNodeEN) => {
        return obj.subGraphName === value;
      };
    case clsDataNodeEN.con_ErrMsg:
      return (obj: clsDataNodeEN) => {
        return obj.errMsg === value;
      };
    case clsDataNodeEN.con_PrjId:
      return (obj: clsDataNodeEN) => {
        return obj.prjId === value;
      };
    case clsDataNodeEN.con_PosX:
      return (obj: clsDataNodeEN) => {
        return obj.posX === value;
      };
    case clsDataNodeEN.con_PosY:
      return (obj: clsDataNodeEN) => {
        return obj.posY === value;
      };
    case clsDataNodeEN.con_UsedTimes:
      return (obj: clsDataNodeEN) => {
        return obj.usedTimes === value;
      };
    case clsDataNodeEN.con_UpdDate:
      return (obj: clsDataNodeEN) => {
        return obj.updDate === value;
      };
    case clsDataNodeEN.con_UpdUser:
      return (obj: clsDataNodeEN) => {
        return obj.updUser === value;
      };
    case clsDataNodeEN.con_Memo:
      return (obj: clsDataNodeEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[DataNode]中不存在!(in ${dataNode_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}
//该表没有使用Cache,不需要生成[func]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func )
//该表没有使用Cache,不需要生成[DataNode__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function DataNode_GetFldValueAsync(
  strFldName: string,
  strWhereCond: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetFldValueAsync';
  const strAction = 'GetFldValue';
  const strUrl = GetWebApiUrl(dataNode_Controller, strAction);

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
        dataNode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataNode_ConstructorName,
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
export async function DataNode_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(dataNode_Controller, strAction);

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
        dataNode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataNode_ConstructorName,
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
export async function DataNode_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(dataNode_Controller, strAction);

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
        dataNode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataNode_ConstructorName,
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
export async function DataNode_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsDataNodeEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(dataNode_Controller, strAction);

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
      const objDataNode = DataNode_GetObjFromJsonObj(returnObj);
      return objDataNode;
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
        dataNode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataNode_ConstructorName,
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
export async function DataNode_GetObjLstAsync(strWhereCond: string): Promise<Array<clsDataNodeEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(dataNode_Controller, strAction);

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
          dataNode_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = DataNode_GetObjLstByJSONObjLst(returnObjLst);
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
        dataNode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataNode_ConstructorName,
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
 * @param arrDataNodeId:关键字列表
 * @returns 对象列表
 **/
export async function DataNode_GetObjLstByDataNodeIdLstAsync(
  arrDataNodeId: Array<string>,
): Promise<Array<clsDataNodeEN>> {
  const strThisFuncName = 'GetObjLstByDataNodeIdLstAsync';
  const strAction = 'GetObjLstByDataNodeIdLst';
  const strUrl = GetWebApiUrl(dataNode_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrDataNodeId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          dataNode_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = DataNode_GetObjLstByJSONObjLst(returnObjLst);
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
        dataNode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataNode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[GetObjLstByDataNodeIdLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

/**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export async function DataNode_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsDataNodeEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(dataNode_Controller, strAction);

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
          dataNode_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = DataNode_GetObjLstByJSONObjLst(returnObjLst);
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
        dataNode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataNode_ConstructorName,
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
export async function DataNode_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsDataNodeEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(dataNode_Controller, strAction);

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
          dataNode_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = DataNode_GetObjLstByJSONObjLst(returnObjLst);
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
        dataNode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataNode_ConstructorName,
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
export async function DataNode_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsDataNodeEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsDataNodeEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(dataNode_Controller, strAction);

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
          dataNode_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = DataNode_GetObjLstByJSONObjLst(returnObjLst);
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
        dataNode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataNode_ConstructorName,
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
 * @param lngDataNodeId:关键字
 * @returns 获取删除的结果
 **/
export async function DataNode_DelRecordAsync(lngDataNodeId: number): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(dataNode_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, lngDataNodeId);

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
        dataNode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataNode_ConstructorName,
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
 * @param arrDataNodeId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function DataNode_DelDataNodesAsync(arrDataNodeId: Array<string>): Promise<number> {
  const strThisFuncName = 'DelDataNodesAsync';
  const strAction = 'DelDataNodes';
  const strUrl = GetWebApiUrl(dataNode_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrDataNodeId, config);
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
        dataNode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataNode_ConstructorName,
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
 * @param objDataNodeENS:源对象
 * @returns 目标对象=>clsDataNodeEN:objDataNodeENT
 **/
export function DataNode_CopyToEx(objDataNodeENS: clsDataNodeEN): clsDataNodeENEx {
  const strThisFuncName = DataNode_CopyToEx.name;
  const objDataNodeENT = new clsDataNodeENEx();
  try {
    ObjectAssign(objDataNodeENT, objDataNodeENS);
    return objDataNodeENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001294)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      dataNode_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objDataNodeENT;
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
export function DataNode_FuncMapByFldName(strFldName: string, objDataNodeEx: clsDataNodeENEx) {
  const strThisFuncName = DataNode_FuncMapByFldName.name;
  strFldName = strFldName.replace('|Ex', '');
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsDataNodeEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsDataNodeENEx.con_FldName:
      return DataNode_FuncMapFldName(objDataNodeEx);
    case clsDataNodeENEx.con_DataNodeTypeName:
      return DataNode_FuncMapDataNodeTypeName(objDataNodeEx);
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
export function DataNode_SortFunByExKey(strKey: string, AscOrDesc: string) {
  strKey = strKey.replace('|Ex', '');
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsDataNodeENEx.con_TabName:
        return (a: clsDataNodeENEx, b: clsDataNodeENEx) => {
          return a.tabName.localeCompare(b.tabName);
        };
      case clsDataNodeENEx.con_FldName:
        return (a: clsDataNodeENEx, b: clsDataNodeENEx) => {
          return a.fldName.localeCompare(b.fldName);
        };
      case clsDataNodeENEx.con_DataNodeTypeName:
        return (a: clsDataNodeENEx, b: clsDataNodeENEx) => {
          if (a.dataNodeTypeName === null && b.dataNodeTypeName === null) return 0;
          if (a.dataNodeTypeName === null) return -1;
          if (b.dataNodeTypeName === null) return 1;
          return a.dataNodeTypeName.localeCompare(b.dataNodeTypeName);
        };
      case clsDataNodeENEx.con_CmPrjName:
        return (a: clsDataNodeENEx, b: clsDataNodeENEx) => {
          if (a.cmPrjName === null && b.cmPrjName === null) return 0;
          if (a.cmPrjName === null) return -1;
          if (b.cmPrjName === null) return 1;
          return a.cmPrjName.localeCompare(b.cmPrjName);
        };
      case clsDataNodeENEx.con_InDegree:
        return (a: clsDataNodeENEx, b: clsDataNodeENEx) => {
          return a.inDegree - b.inDegree;
        };
      case clsDataNodeENEx.con_OutDegree:
        return (a: clsDataNodeENEx, b: clsDataNodeENEx) => {
          return a.outDegree - b.outDegree;
        };
      case clsDataNodeENEx.con_CmPrjId:
        return (a: clsDataNodeENEx, b: clsDataNodeENEx) => {
          return a.cmPrjId.localeCompare(b.cmPrjId);
        };
      default:
        return DataNode_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsDataNodeENEx.con_TabName:
        return (a: clsDataNodeENEx, b: clsDataNodeENEx) => {
          return b.tabName.localeCompare(a.tabName);
        };
      case clsDataNodeENEx.con_FldName:
        return (a: clsDataNodeENEx, b: clsDataNodeENEx) => {
          return b.fldName.localeCompare(a.fldName);
        };
      case clsDataNodeENEx.con_DataNodeTypeName:
        return (a: clsDataNodeENEx, b: clsDataNodeENEx) => {
          if (a.dataNodeTypeName === null && b.dataNodeTypeName === null) return 0;
          if (a.dataNodeTypeName === null) return 1;
          if (b.dataNodeTypeName === null) return -1;
          return b.dataNodeTypeName.localeCompare(a.dataNodeTypeName);
        };
      case clsDataNodeENEx.con_CmPrjName:
        return (a: clsDataNodeENEx, b: clsDataNodeENEx) => {
          if (a.cmPrjName === null && b.cmPrjName === null) return 0;
          if (a.cmPrjName === null) return 1;
          if (b.cmPrjName === null) return -1;
          return b.cmPrjName.localeCompare(a.cmPrjName);
        };
      case clsDataNodeENEx.con_InDegree:
        return (a: clsDataNodeENEx, b: clsDataNodeENEx) => {
          return b.inDegree - a.inDegree;
        };
      case clsDataNodeENEx.con_OutDegree:
        return (a: clsDataNodeENEx, b: clsDataNodeENEx) => {
          return b.outDegree - a.outDegree;
        };
      case clsDataNodeENEx.con_CmPrjId:
        return (a: clsDataNodeENEx, b: clsDataNodeENEx) => {
          return b.cmPrjId.localeCompare(a.cmPrjId);
        };
      default:
        return DataNode_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objDataNodeS:源对象
 **/
export async function DataNode_FuncMapFldName(objDataNode: clsDataNodeENEx) {
  const strThisFuncName = DataNode_FuncMapFldName.name;
  try {
    if (IsNullOrEmpty(objDataNode.fldName) == true) {
      const vFieldTabSimFldId = objDataNode.fldId;
      if (IsNullOrEmpty(objDataNode.prjId) == true) {
        const strMsg = `函数映射[FldName]数据出错,prjId不能为空!(in ${dataNode_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      const vFieldTabSimFldName = await vFieldTab_Sim_func(
        clsvFieldTab_SimEN.con_FldId,
        clsvFieldTab_SimEN.con_FldName,
        vFieldTabSimFldId,
        objDataNode.prjId,
      );
      objDataNode.fldName = vFieldTabSimFldName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001295)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      dataNode_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objDataNodeS:源对象
 **/
export async function DataNode_FuncMapDataNodeTypeName(objDataNode: clsDataNodeENEx) {
  const strThisFuncName = DataNode_FuncMapDataNodeTypeName.name;
  try {
    if (IsNullOrEmpty(objDataNode.dataNodeTypeName) == true) {
      const DataNodeTypeDataNodeTypeId = objDataNode.dataNodeTypeId;
      const DataNodeTypeDataNodeTypeName = await DataNodeType_func(
        clsDataNodeTypeEN.con_DataNodeTypeId,
        clsDataNodeTypeEN.con_DataNodeTypeName,
        DataNodeTypeDataNodeTypeId,
      );
      objDataNode.dataNodeTypeName = DataNodeTypeDataNodeTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001330)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      dataNode_ConstructorName,
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
export async function DataNode_DelDataNodesByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'DelDataNodesByCondAsync';
  const strAction = 'DelDataNodesByCond';
  const strUrl = GetWebApiUrl(dataNode_Controller, strAction);

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
        dataNode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataNode_ConstructorName,
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
 * @param objDataNodeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function DataNode_AddNewRecordAsync(objDataNodeEN: clsDataNodeEN): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objDataNodeEN);
  const strUrl = GetWebApiUrl(dataNode_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objDataNodeEN, config);
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
        dataNode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataNode_ConstructorName,
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

/** 添加新记录,保存函数
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewObjSave)
 **/
export async function DataNode_AddNewObjSave(
  objDataNodeEN: clsDataNodeEN,
): Promise<AddRecordResult> {
  const strThisFuncName = 'AddNewObjSave';
  try {
    DataNode_CheckPropertyNew(objDataNodeEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${dataNode_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    alert(strMsg);
    return { keyword: '', success: false }; //一定要有一个返回值,否则会出错!
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await DataNode_CheckUniCond4Add(objDataNodeEN);
    if (bolIsExistCond == false) {
      return { keyword: '', success: false };
    }
    let returnBool = false;
    returnBool = await DataNode_AddNewRecordAsync(objDataNodeEN);
    if (returnBool == true) {
      //DataNode_ReFreshCache();
    } else {
      const strInfo = `添加[数据结点(DataNode)]记录不成功!`;
      //显示信息框
      throw strInfo;
    }
    return { keyword: objDataNodeEN.dataNodeId.toString(), success: returnBool }; //一定要有一个返回值,否则会出错!
  } catch (e) {
    const strMsg = `添加记录不成功,${e}.(in ${dataNode_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export async function DataNode_CheckUniCond4Add(objDataNodeEN: clsDataNodeEN): Promise<boolean> {
  const strUniquenessCondition = DataNode_GetUniCondStr(objDataNodeEN);
  const bolIsExistCondition = await DataNode_IsExistRecordAsync(strUniquenessCondition);
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
export async function DataNode_CheckUniCond4Update(objDataNodeEN: clsDataNodeEN): Promise<boolean> {
  const strUniquenessCondition = DataNode_GetUniCondStr4Update(objDataNodeEN);
  const bolIsExistCondition = await DataNode_IsExistRecordAsync(strUniquenessCondition);
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
export async function DataNode_UpdateObjSave(objDataNodeEN: clsDataNodeEN): Promise<boolean> {
  const strThisFuncName = 'UpdateObjSave';
  objDataNodeEN.sfUpdFldSetStr = objDataNodeEN.updFldString; //设置哪些字段被修改(脏字段)
  if (objDataNodeEN.dataNodeId == 0 || objDataNodeEN.dataNodeId == undefined) {
    console.error('关键字不能为空!');
    throw '关键字不能为空!';
  }
  try {
    DataNode_CheckProperty4Update(objDataNodeEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${dataNode_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await DataNode_CheckUniCond4Update(objDataNodeEN);
    if (bolIsExistCond == false) {
      return false;
    }
    const returnBool = await DataNode_UpdateRecordAsync(objDataNodeEN);
    if (returnBool == true) {
      //DataNode_ReFreshCache();
    }
    return returnBool;
  } catch (e) {
    const strMsg = `修改记录不成功,${e}.(in ${dataNode_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objDataNodeEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function DataNode_AddNewRecordWithReturnKeyAsync(
  objDataNodeEN: clsDataNodeEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(dataNode_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objDataNodeEN, config);
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
        dataNode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataNode_ConstructorName,
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
 * @param objDataNodeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function DataNode_UpdateRecordAsync(objDataNodeEN: clsDataNodeEN): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objDataNodeEN.sfUpdFldSetStr === undefined ||
    objDataNodeEN.sfUpdFldSetStr === null ||
    objDataNodeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objDataNodeEN.dataNodeId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(dataNode_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objDataNodeEN, config);
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
        dataNode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataNode_ConstructorName,
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
 * @param objDataNodeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function DataNode_EditRecordExAsync(objDataNodeEN: clsDataNodeEN): Promise<boolean> {
  const strThisFuncName = 'EditRecordExAsync';
  const strAction = 'EditRecordEx';
  if (
    objDataNodeEN.sfUpdFldSetStr === undefined ||
    objDataNodeEN.sfUpdFldSetStr === null ||
    objDataNodeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objDataNodeEN.dataNodeId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(dataNode_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objDataNodeEN, config);
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
        dataNode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataNode_ConstructorName,
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
 * @param objDataNodeEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function DataNode_UpdateWithConditionAsync(
  objDataNodeEN: clsDataNodeEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objDataNodeEN.sfUpdFldSetStr === undefined ||
    objDataNodeEN.sfUpdFldSetStr === null ||
    objDataNodeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objDataNodeEN.dataNodeId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(dataNode_Controller, strAction);
  objDataNodeEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objDataNodeEN, config);
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
        dataNode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataNode_ConstructorName,
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
export async function DataNode_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(dataNode_Controller, strAction);

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
        dataNode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataNode_ConstructorName,
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
 * @param lngDataNodeId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function DataNode_IsExistAsync(lngDataNodeId: number): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(dataNode_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      lngDataNodeId,
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
        dataNode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataNode_ConstructorName,
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
export async function DataNode_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(dataNode_Controller, strAction);

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
        dataNode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataNode_ConstructorName,
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
export async function DataNode_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(dataNode_Controller, strAction);

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
        dataNode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataNode_ConstructorName,
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
export function DataNode_GetWebApiUrl(strController: string, strAction: string): string {
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
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export async function DataNode_BindDdl_DataNodeIdInDiv(objDiv: HTMLDivElement, strDdlName: string) {
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_DataNodeIdInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_DataNodeIdInDivCache");
  const strCondition = `1=1`;
  const arrObjLstSel = await DataNode_GetObjLstAsync(strCondition);
  if (arrObjLstSel == null) return;
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsDataNodeEN.con_DataNodeId,
    clsDataNodeEN.con_DataNodeName,
    '数据结点...',
  );
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export async function DataNode_GetArrDataNode() {
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_DataNodeIdInDivCache");
  const arrDataNode = new Array<clsDataNodeEN>();
  const strCondition = `1=1`;
  const arrObjLstSel = await DataNode_GetObjLstAsync(strCondition);
  if (arrObjLstSel == null) return null;
  const obj0 = new clsDataNodeEN();
  obj0.dataNodeId = 0;
  obj0.dataNodeName = '选数据结点...';
  arrDataNode.push(obj0);
  arrObjLstSel.forEach((x) => arrDataNode.push(x));
  return arrDataNode;
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function DataNode_CheckPropertyNew(pobjDataNodeEN: clsDataNodeEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjDataNodeEN.dataNodeName) === true) {
    throw new Error(
      `(errid:Watl000411)字段[数据结点名]不能为空(In 数据结点)!(clsDataNodeBL:CheckPropertyNew0)`,
    );
  }
  if (IsNullOrEmpty(pobjDataNodeEN.tabId) === true || pobjDataNodeEN.tabId.toString() === '0') {
    throw new Error(
      `(errid:Watl000411)字段[表ID]不能为空(In 数据结点)!(clsDataNodeBL:CheckPropertyNew0)`,
    );
  }
  if (IsNullOrEmpty(pobjDataNodeEN.fldId) === true || pobjDataNodeEN.fldId.toString() === '0') {
    throw new Error(
      `(errid:Watl000411)字段[字段Id]不能为空(In 数据结点)!(clsDataNodeBL:CheckPropertyNew0)`,
    );
  }
  if (
    null === pobjDataNodeEN.versionNo ||
    (pobjDataNodeEN.versionNo != null && pobjDataNodeEN.versionNo.toString() === '')
  ) {
    throw new Error(
      `(errid:Watl000411)字段[版本号]不能为空(In 数据结点)!(clsDataNodeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataNodeEN.dataNodeTypeId) === true ||
    pobjDataNodeEN.dataNodeTypeId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000411)字段[数据结点类型Id]不能为空(In 数据结点)!(clsDataNodeBL:CheckPropertyNew0)`,
    );
  }
  if (IsNullOrEmpty(pobjDataNodeEN.prjId) === true || pobjDataNodeEN.prjId.toString() === '0') {
    throw new Error(
      `(errid:Watl000411)字段[工程Id]不能为空(In 数据结点)!(clsDataNodeBL:CheckPropertyNew0)`,
    );
  }
  if (IsNullOrEmpty(pobjDataNodeEN.updUser) === true) {
    throw new Error(
      `(errid:Watl000411)字段[修改者]不能为空(In 数据结点)!(clsDataNodeBL:CheckPropertyNew0)`,
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjDataNodeEN.dataNodeName) == false &&
    GetStrLen(pobjDataNodeEN.dataNodeName) > 100
  ) {
    throw new Error(
      `(errid:Watl000413)字段[数据结点名(dataNodeName)]的长度不能超过100(In 数据结点(DataNode))!值:${pobjDataNodeEN.dataNodeName}(clsDataNodeBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjDataNodeEN.tabId) == false && GetStrLen(pobjDataNodeEN.tabId) > 8) {
    throw new Error(
      `(errid:Watl000413)字段[表ID(tabId)]的长度不能超过8(In 数据结点(DataNode))!值:${pobjDataNodeEN.tabId}(clsDataNodeBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjDataNodeEN.fldId) == false && GetStrLen(pobjDataNodeEN.fldId) > 8) {
    throw new Error(
      `(errid:Watl000413)字段[字段Id(fldId)]的长度不能超过8(In 数据结点(DataNode))!值:${pobjDataNodeEN.fldId}(clsDataNodeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataNodeEN.keyFldLst) == false &&
    GetStrLen(pobjDataNodeEN.keyFldLst) > 100
  ) {
    throw new Error(
      `(errid:Watl000413)字段[关键字段Id列表(keyFldLst)]的长度不能超过100(In 数据结点(DataNode))!值:${pobjDataNodeEN.keyFldLst}(clsDataNodeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataNodeEN.dataNodeTypeId) == false &&
    GetStrLen(pobjDataNodeEN.dataNodeTypeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000413)字段[数据结点类型Id(dataNodeTypeId)]的长度不能超过2(In 数据结点(DataNode))!值:${pobjDataNodeEN.dataNodeTypeId}(clsDataNodeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataNodeEN.subGraphName) == false &&
    GetStrLen(pobjDataNodeEN.subGraphName) > 50
  ) {
    throw new Error(
      `(errid:Watl000413)字段[子图名(subGraphName)]的长度不能超过50(In 数据结点(DataNode))!值:${pobjDataNodeEN.subGraphName}(clsDataNodeBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjDataNodeEN.errMsg) == false && GetStrLen(pobjDataNodeEN.errMsg) > 2000) {
    throw new Error(
      `(errid:Watl000413)字段[错误信息(errMsg)]的长度不能超过2000(In 数据结点(DataNode))!值:${pobjDataNodeEN.errMsg}(clsDataNodeBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjDataNodeEN.prjId) == false && GetStrLen(pobjDataNodeEN.prjId) > 4) {
    throw new Error(
      `(errid:Watl000413)字段[工程Id(prjId)]的长度不能超过4(In 数据结点(DataNode))!值:${pobjDataNodeEN.prjId}(clsDataNodeBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjDataNodeEN.updDate) == false && GetStrLen(pobjDataNodeEN.updDate) > 20) {
    throw new Error(
      `(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 数据结点(DataNode))!值:${pobjDataNodeEN.updDate}(clsDataNodeBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjDataNodeEN.updUser) == false && GetStrLen(pobjDataNodeEN.updUser) > 20) {
    throw new Error(
      `(errid:Watl000413)字段[修改者(updUser)]的长度不能超过20(In 数据结点(DataNode))!值:${pobjDataNodeEN.updUser}(clsDataNodeBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjDataNodeEN.memo) == false && GetStrLen(pobjDataNodeEN.memo) > 1000) {
    throw new Error(
      `(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In 数据结点(DataNode))!值:${pobjDataNodeEN.memo}(clsDataNodeBL:CheckPropertyNew)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjDataNodeEN.dataNodeId &&
    undefined !== pobjDataNodeEN.dataNodeId &&
    tzDataType.isNumber(pobjDataNodeEN.dataNodeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[数据结点Id(dataNodeId)]的值:[${pobjDataNodeEN.dataNodeId}], 非法,应该为数值型(In 数据结点(DataNode))!(clsDataNodeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataNodeEN.dataNodeName) == false &&
    undefined !== pobjDataNodeEN.dataNodeName &&
    tzDataType.isString(pobjDataNodeEN.dataNodeName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[数据结点名(dataNodeName)]的值:[${pobjDataNodeEN.dataNodeName}], 非法,应该为字符型(In 数据结点(DataNode))!(clsDataNodeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataNodeEN.tabId) == false &&
    undefined !== pobjDataNodeEN.tabId &&
    tzDataType.isString(pobjDataNodeEN.tabId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[表ID(tabId)]的值:[${pobjDataNodeEN.tabId}], 非法,应该为字符型(In 数据结点(DataNode))!(clsDataNodeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataNodeEN.fldId) == false &&
    undefined !== pobjDataNodeEN.fldId &&
    tzDataType.isString(pobjDataNodeEN.fldId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[字段Id(fldId)]的值:[${pobjDataNodeEN.fldId}], 非法,应该为字符型(In 数据结点(DataNode))!(clsDataNodeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataNodeEN.keyFldLst) == false &&
    undefined !== pobjDataNodeEN.keyFldLst &&
    tzDataType.isString(pobjDataNodeEN.keyFldLst) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[关键字段Id列表(keyFldLst)]的值:[${pobjDataNodeEN.keyFldLst}], 非法,应该为字符型(In 数据结点(DataNode))!(clsDataNodeBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjDataNodeEN.versionNo &&
    undefined !== pobjDataNodeEN.versionNo &&
    tzDataType.isNumber(pobjDataNodeEN.versionNo) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[版本号(versionNo)]的值:[${pobjDataNodeEN.versionNo}], 非法,应该为数值型(In 数据结点(DataNode))!(clsDataNodeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataNodeEN.dataNodeTypeId) == false &&
    undefined !== pobjDataNodeEN.dataNodeTypeId &&
    tzDataType.isString(pobjDataNodeEN.dataNodeTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[数据结点类型Id(dataNodeTypeId)]的值:[${pobjDataNodeEN.dataNodeTypeId}], 非法,应该为字符型(In 数据结点(DataNode))!(clsDataNodeBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjDataNodeEN.depth &&
    undefined !== pobjDataNodeEN.depth &&
    tzDataType.isNumber(pobjDataNodeEN.depth) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[深度(depth)]的值:[${pobjDataNodeEN.depth}], 非法,应该为数值型(In 数据结点(DataNode))!(clsDataNodeBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjDataNodeEN.prevDataNodeId &&
    undefined !== pobjDataNodeEN.prevDataNodeId &&
    tzDataType.isNumber(pobjDataNodeEN.prevDataNodeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[前置数据结点Id(prevDataNodeId)]的值:[${pobjDataNodeEN.prevDataNodeId}], 非法,应该为数值型(In 数据结点(DataNode))!(clsDataNodeBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjDataNodeEN.nextDataNodeId &&
    undefined !== pobjDataNodeEN.nextDataNodeId &&
    tzDataType.isNumber(pobjDataNodeEN.nextDataNodeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[后继数据结点Id(nextDataNodeId)]的值:[${pobjDataNodeEN.nextDataNodeId}], 非法,应该为数值型(In 数据结点(DataNode))!(clsDataNodeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataNodeEN.subGraphName) == false &&
    undefined !== pobjDataNodeEN.subGraphName &&
    tzDataType.isString(pobjDataNodeEN.subGraphName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[子图名(subGraphName)]的值:[${pobjDataNodeEN.subGraphName}], 非法,应该为字符型(In 数据结点(DataNode))!(clsDataNodeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataNodeEN.errMsg) == false &&
    undefined !== pobjDataNodeEN.errMsg &&
    tzDataType.isString(pobjDataNodeEN.errMsg) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[错误信息(errMsg)]的值:[${pobjDataNodeEN.errMsg}], 非法,应该为字符型(In 数据结点(DataNode))!(clsDataNodeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataNodeEN.prjId) == false &&
    undefined !== pobjDataNodeEN.prjId &&
    tzDataType.isString(pobjDataNodeEN.prjId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[工程Id(prjId)]的值:[${pobjDataNodeEN.prjId}], 非法,应该为字符型(In 数据结点(DataNode))!(clsDataNodeBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjDataNodeEN.posX &&
    undefined !== pobjDataNodeEN.posX &&
    tzDataType.isNumber(pobjDataNodeEN.posX) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[位置X(posX)]的值:[${pobjDataNodeEN.posX}], 非法,应该为数值型(In 数据结点(DataNode))!(clsDataNodeBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjDataNodeEN.posY &&
    undefined !== pobjDataNodeEN.posY &&
    tzDataType.isNumber(pobjDataNodeEN.posY) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[位置Y(posY)]的值:[${pobjDataNodeEN.posY}], 非法,应该为数值型(In 数据结点(DataNode))!(clsDataNodeBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjDataNodeEN.usedTimes &&
    undefined !== pobjDataNodeEN.usedTimes &&
    tzDataType.isNumber(pobjDataNodeEN.usedTimes) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[使用次数(usedTimes)]的值:[${pobjDataNodeEN.usedTimes}], 非法,应该为数值型(In 数据结点(DataNode))!(clsDataNodeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataNodeEN.updDate) == false &&
    undefined !== pobjDataNodeEN.updDate &&
    tzDataType.isString(pobjDataNodeEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjDataNodeEN.updDate}], 非法,应该为字符型(In 数据结点(DataNode))!(clsDataNodeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataNodeEN.updUser) == false &&
    undefined !== pobjDataNodeEN.updUser &&
    tzDataType.isString(pobjDataNodeEN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改者(updUser)]的值:[${pobjDataNodeEN.updUser}], 非法,应该为字符型(In 数据结点(DataNode))!(clsDataNodeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataNodeEN.memo) == false &&
    undefined !== pobjDataNodeEN.memo &&
    tzDataType.isString(pobjDataNodeEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[说明(memo)]的值:[${pobjDataNodeEN.memo}], 非法,应该为字符型(In 数据结点(DataNode))!(clsDataNodeBL:CheckPropertyNew0)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function DataNode_CheckProperty4Update(pobjDataNodeEN: clsDataNodeEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjDataNodeEN.dataNodeName) == false &&
    GetStrLen(pobjDataNodeEN.dataNodeName) > 100
  ) {
    throw new Error(
      `(errid:Watl000416)字段[数据结点名(dataNodeName)]的长度不能超过100(In 数据结点(DataNode))!值:${pobjDataNodeEN.dataNodeName}(clsDataNodeBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjDataNodeEN.tabId) == false && GetStrLen(pobjDataNodeEN.tabId) > 8) {
    throw new Error(
      `(errid:Watl000416)字段[表ID(tabId)]的长度不能超过8(In 数据结点(DataNode))!值:${pobjDataNodeEN.tabId}(clsDataNodeBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjDataNodeEN.fldId) == false && GetStrLen(pobjDataNodeEN.fldId) > 8) {
    throw new Error(
      `(errid:Watl000416)字段[字段Id(fldId)]的长度不能超过8(In 数据结点(DataNode))!值:${pobjDataNodeEN.fldId}(clsDataNodeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataNodeEN.keyFldLst) == false &&
    GetStrLen(pobjDataNodeEN.keyFldLst) > 100
  ) {
    throw new Error(
      `(errid:Watl000416)字段[关键字段Id列表(keyFldLst)]的长度不能超过100(In 数据结点(DataNode))!值:${pobjDataNodeEN.keyFldLst}(clsDataNodeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataNodeEN.dataNodeTypeId) == false &&
    GetStrLen(pobjDataNodeEN.dataNodeTypeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000416)字段[数据结点类型Id(dataNodeTypeId)]的长度不能超过2(In 数据结点(DataNode))!值:${pobjDataNodeEN.dataNodeTypeId}(clsDataNodeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataNodeEN.subGraphName) == false &&
    GetStrLen(pobjDataNodeEN.subGraphName) > 50
  ) {
    throw new Error(
      `(errid:Watl000416)字段[子图名(subGraphName)]的长度不能超过50(In 数据结点(DataNode))!值:${pobjDataNodeEN.subGraphName}(clsDataNodeBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjDataNodeEN.errMsg) == false && GetStrLen(pobjDataNodeEN.errMsg) > 2000) {
    throw new Error(
      `(errid:Watl000416)字段[错误信息(errMsg)]的长度不能超过2000(In 数据结点(DataNode))!值:${pobjDataNodeEN.errMsg}(clsDataNodeBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjDataNodeEN.prjId) == false && GetStrLen(pobjDataNodeEN.prjId) > 4) {
    throw new Error(
      `(errid:Watl000416)字段[工程Id(prjId)]的长度不能超过4(In 数据结点(DataNode))!值:${pobjDataNodeEN.prjId}(clsDataNodeBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjDataNodeEN.updDate) == false && GetStrLen(pobjDataNodeEN.updDate) > 20) {
    throw new Error(
      `(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 数据结点(DataNode))!值:${pobjDataNodeEN.updDate}(clsDataNodeBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjDataNodeEN.updUser) == false && GetStrLen(pobjDataNodeEN.updUser) > 20) {
    throw new Error(
      `(errid:Watl000416)字段[修改者(updUser)]的长度不能超过20(In 数据结点(DataNode))!值:${pobjDataNodeEN.updUser}(clsDataNodeBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjDataNodeEN.memo) == false && GetStrLen(pobjDataNodeEN.memo) > 1000) {
    throw new Error(
      `(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In 数据结点(DataNode))!值:${pobjDataNodeEN.memo}(clsDataNodeBL:CheckProperty4Update)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjDataNodeEN.dataNodeId &&
    undefined !== pobjDataNodeEN.dataNodeId &&
    tzDataType.isNumber(pobjDataNodeEN.dataNodeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[数据结点Id(dataNodeId)]的值:[${pobjDataNodeEN.dataNodeId}], 非法,应该为数值型(In 数据结点(DataNode))!(clsDataNodeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataNodeEN.dataNodeName) == false &&
    undefined !== pobjDataNodeEN.dataNodeName &&
    tzDataType.isString(pobjDataNodeEN.dataNodeName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[数据结点名(dataNodeName)]的值:[${pobjDataNodeEN.dataNodeName}], 非法,应该为字符型(In 数据结点(DataNode))!(clsDataNodeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataNodeEN.tabId) == false &&
    undefined !== pobjDataNodeEN.tabId &&
    tzDataType.isString(pobjDataNodeEN.tabId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[表ID(tabId)]的值:[${pobjDataNodeEN.tabId}], 非法,应该为字符型(In 数据结点(DataNode))!(clsDataNodeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataNodeEN.fldId) == false &&
    undefined !== pobjDataNodeEN.fldId &&
    tzDataType.isString(pobjDataNodeEN.fldId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[字段Id(fldId)]的值:[${pobjDataNodeEN.fldId}], 非法,应该为字符型(In 数据结点(DataNode))!(clsDataNodeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataNodeEN.keyFldLst) == false &&
    undefined !== pobjDataNodeEN.keyFldLst &&
    tzDataType.isString(pobjDataNodeEN.keyFldLst) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[关键字段Id列表(keyFldLst)]的值:[${pobjDataNodeEN.keyFldLst}], 非法,应该为字符型(In 数据结点(DataNode))!(clsDataNodeBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjDataNodeEN.versionNo &&
    undefined !== pobjDataNodeEN.versionNo &&
    tzDataType.isNumber(pobjDataNodeEN.versionNo) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[版本号(versionNo)]的值:[${pobjDataNodeEN.versionNo}], 非法,应该为数值型(In 数据结点(DataNode))!(clsDataNodeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataNodeEN.dataNodeTypeId) == false &&
    undefined !== pobjDataNodeEN.dataNodeTypeId &&
    tzDataType.isString(pobjDataNodeEN.dataNodeTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[数据结点类型Id(dataNodeTypeId)]的值:[${pobjDataNodeEN.dataNodeTypeId}], 非法,应该为字符型(In 数据结点(DataNode))!(clsDataNodeBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjDataNodeEN.depth &&
    undefined !== pobjDataNodeEN.depth &&
    tzDataType.isNumber(pobjDataNodeEN.depth) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[深度(depth)]的值:[${pobjDataNodeEN.depth}], 非法,应该为数值型(In 数据结点(DataNode))!(clsDataNodeBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjDataNodeEN.prevDataNodeId &&
    undefined !== pobjDataNodeEN.prevDataNodeId &&
    tzDataType.isNumber(pobjDataNodeEN.prevDataNodeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[前置数据结点Id(prevDataNodeId)]的值:[${pobjDataNodeEN.prevDataNodeId}], 非法,应该为数值型(In 数据结点(DataNode))!(clsDataNodeBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjDataNodeEN.nextDataNodeId &&
    undefined !== pobjDataNodeEN.nextDataNodeId &&
    tzDataType.isNumber(pobjDataNodeEN.nextDataNodeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[后继数据结点Id(nextDataNodeId)]的值:[${pobjDataNodeEN.nextDataNodeId}], 非法,应该为数值型(In 数据结点(DataNode))!(clsDataNodeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataNodeEN.subGraphName) == false &&
    undefined !== pobjDataNodeEN.subGraphName &&
    tzDataType.isString(pobjDataNodeEN.subGraphName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[子图名(subGraphName)]的值:[${pobjDataNodeEN.subGraphName}], 非法,应该为字符型(In 数据结点(DataNode))!(clsDataNodeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataNodeEN.errMsg) == false &&
    undefined !== pobjDataNodeEN.errMsg &&
    tzDataType.isString(pobjDataNodeEN.errMsg) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[错误信息(errMsg)]的值:[${pobjDataNodeEN.errMsg}], 非法,应该为字符型(In 数据结点(DataNode))!(clsDataNodeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataNodeEN.prjId) == false &&
    undefined !== pobjDataNodeEN.prjId &&
    tzDataType.isString(pobjDataNodeEN.prjId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[工程Id(prjId)]的值:[${pobjDataNodeEN.prjId}], 非法,应该为字符型(In 数据结点(DataNode))!(clsDataNodeBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjDataNodeEN.posX &&
    undefined !== pobjDataNodeEN.posX &&
    tzDataType.isNumber(pobjDataNodeEN.posX) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[位置X(posX)]的值:[${pobjDataNodeEN.posX}], 非法,应该为数值型(In 数据结点(DataNode))!(clsDataNodeBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjDataNodeEN.posY &&
    undefined !== pobjDataNodeEN.posY &&
    tzDataType.isNumber(pobjDataNodeEN.posY) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[位置Y(posY)]的值:[${pobjDataNodeEN.posY}], 非法,应该为数值型(In 数据结点(DataNode))!(clsDataNodeBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjDataNodeEN.usedTimes &&
    undefined !== pobjDataNodeEN.usedTimes &&
    tzDataType.isNumber(pobjDataNodeEN.usedTimes) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[使用次数(usedTimes)]的值:[${pobjDataNodeEN.usedTimes}], 非法,应该为数值型(In 数据结点(DataNode))!(clsDataNodeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataNodeEN.updDate) == false &&
    undefined !== pobjDataNodeEN.updDate &&
    tzDataType.isString(pobjDataNodeEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjDataNodeEN.updDate}], 非法,应该为字符型(In 数据结点(DataNode))!(clsDataNodeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataNodeEN.updUser) == false &&
    undefined !== pobjDataNodeEN.updUser &&
    tzDataType.isString(pobjDataNodeEN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改者(updUser)]的值:[${pobjDataNodeEN.updUser}], 非法,应该为字符型(In 数据结点(DataNode))!(clsDataNodeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataNodeEN.memo) == false &&
    undefined !== pobjDataNodeEN.memo &&
    tzDataType.isString(pobjDataNodeEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[说明(memo)]的值:[${pobjDataNodeEN.memo}], 非法,应该为字符型(In 数据结点(DataNode))!(clsDataNodeBL:CheckProperty4Update)`,
    );
  }
  //检查主键是否为Null或者空!
  if (
    null === pobjDataNodeEN.dataNodeId ||
    (pobjDataNodeEN.dataNodeId != null && pobjDataNodeEN.dataNodeId.toString() === '')
  ) {
    throw new Error(
      `(errid:Watl000064)字段[数据结点Id]不能为空(In 数据结点)!(clsDataNodeBL:CheckProperty4Update)`,
    );
  }
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
export function DataNode_GetJSONStrByObj(pobjDataNodeEN: clsDataNodeEN): string {
  pobjDataNodeEN.sfUpdFldSetStr = pobjDataNodeEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjDataNodeEN);
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
export function DataNode_GetObjLstByJSONStr(strJSON: string): Array<clsDataNodeEN> {
  let arrDataNodeObjLst = new Array<clsDataNodeEN>();
  if (strJSON === '') {
    return arrDataNodeObjLst;
  }
  try {
    arrDataNodeObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrDataNodeObjLst;
  }
  return arrDataNodeObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrDataNodeObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function DataNode_GetObjLstByJSONObjLst(
  arrDataNodeObjLstS: Array<clsDataNodeEN>,
): Array<clsDataNodeEN> {
  const arrDataNodeObjLst = new Array<clsDataNodeEN>();
  for (const objInFor of arrDataNodeObjLstS) {
    const obj1 = DataNode_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrDataNodeObjLst.push(obj1);
  }
  return arrDataNodeObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function DataNode_GetObjByJSONStr(strJSON: string): clsDataNodeEN {
  let pobjDataNodeEN = new clsDataNodeEN();
  if (strJSON === '') {
    return pobjDataNodeEN;
  }
  try {
    pobjDataNodeEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjDataNodeEN;
  }
  return pobjDataNodeEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function DataNode_GetCombineCondition(objDataNodeCond: clsDataNodeEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objDataNodeCond.dicFldComparisonOp,
      clsDataNodeEN.con_DataNodeId,
    ) == true
  ) {
    const strComparisonOpDataNodeId: string =
      objDataNodeCond.dicFldComparisonOp[clsDataNodeEN.con_DataNodeId];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsDataNodeEN.con_DataNodeId,
      objDataNodeCond.dataNodeId,
      strComparisonOpDataNodeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDataNodeCond.dicFldComparisonOp,
      clsDataNodeEN.con_DataNodeName,
    ) == true
  ) {
    const strComparisonOpDataNodeName: string =
      objDataNodeCond.dicFldComparisonOp[clsDataNodeEN.con_DataNodeName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDataNodeEN.con_DataNodeName,
      objDataNodeCond.dataNodeName,
      strComparisonOpDataNodeName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDataNodeCond.dicFldComparisonOp,
      clsDataNodeEN.con_TabId,
    ) == true
  ) {
    const strComparisonOpTabId: string =
      objDataNodeCond.dicFldComparisonOp[clsDataNodeEN.con_TabId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDataNodeEN.con_TabId,
      objDataNodeCond.tabId,
      strComparisonOpTabId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDataNodeCond.dicFldComparisonOp,
      clsDataNodeEN.con_FldId,
    ) == true
  ) {
    const strComparisonOpFldId: string =
      objDataNodeCond.dicFldComparisonOp[clsDataNodeEN.con_FldId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDataNodeEN.con_FldId,
      objDataNodeCond.fldId,
      strComparisonOpFldId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDataNodeCond.dicFldComparisonOp,
      clsDataNodeEN.con_KeyFldLst,
    ) == true
  ) {
    const strComparisonOpKeyFldLst: string =
      objDataNodeCond.dicFldComparisonOp[clsDataNodeEN.con_KeyFldLst];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDataNodeEN.con_KeyFldLst,
      objDataNodeCond.keyFldLst,
      strComparisonOpKeyFldLst,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDataNodeCond.dicFldComparisonOp,
      clsDataNodeEN.con_VersionNo,
    ) == true
  ) {
    const strComparisonOpVersionNo: string =
      objDataNodeCond.dicFldComparisonOp[clsDataNodeEN.con_VersionNo];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsDataNodeEN.con_VersionNo,
      objDataNodeCond.versionNo,
      strComparisonOpVersionNo,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDataNodeCond.dicFldComparisonOp,
      clsDataNodeEN.con_DataNodeTypeId,
    ) == true
  ) {
    const strComparisonOpDataNodeTypeId: string =
      objDataNodeCond.dicFldComparisonOp[clsDataNodeEN.con_DataNodeTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDataNodeEN.con_DataNodeTypeId,
      objDataNodeCond.dataNodeTypeId,
      strComparisonOpDataNodeTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDataNodeCond.dicFldComparisonOp,
      clsDataNodeEN.con_Depth,
    ) == true
  ) {
    const strComparisonOpDepth: string =
      objDataNodeCond.dicFldComparisonOp[clsDataNodeEN.con_Depth];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsDataNodeEN.con_Depth,
      objDataNodeCond.depth,
      strComparisonOpDepth,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDataNodeCond.dicFldComparisonOp,
      clsDataNodeEN.con_PrevDataNodeId,
    ) == true
  ) {
    const strComparisonOpPrevDataNodeId: string =
      objDataNodeCond.dicFldComparisonOp[clsDataNodeEN.con_PrevDataNodeId];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsDataNodeEN.con_PrevDataNodeId,
      objDataNodeCond.prevDataNodeId,
      strComparisonOpPrevDataNodeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDataNodeCond.dicFldComparisonOp,
      clsDataNodeEN.con_NextDataNodeId,
    ) == true
  ) {
    const strComparisonOpNextDataNodeId: string =
      objDataNodeCond.dicFldComparisonOp[clsDataNodeEN.con_NextDataNodeId];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsDataNodeEN.con_NextDataNodeId,
      objDataNodeCond.nextDataNodeId,
      strComparisonOpNextDataNodeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDataNodeCond.dicFldComparisonOp,
      clsDataNodeEN.con_SubGraphName,
    ) == true
  ) {
    const strComparisonOpSubGraphName: string =
      objDataNodeCond.dicFldComparisonOp[clsDataNodeEN.con_SubGraphName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDataNodeEN.con_SubGraphName,
      objDataNodeCond.subGraphName,
      strComparisonOpSubGraphName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDataNodeCond.dicFldComparisonOp,
      clsDataNodeEN.con_ErrMsg,
    ) == true
  ) {
    const strComparisonOpErrMsg: string =
      objDataNodeCond.dicFldComparisonOp[clsDataNodeEN.con_ErrMsg];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDataNodeEN.con_ErrMsg,
      objDataNodeCond.errMsg,
      strComparisonOpErrMsg,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDataNodeCond.dicFldComparisonOp,
      clsDataNodeEN.con_PrjId,
    ) == true
  ) {
    const strComparisonOpPrjId: string =
      objDataNodeCond.dicFldComparisonOp[clsDataNodeEN.con_PrjId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDataNodeEN.con_PrjId,
      objDataNodeCond.prjId,
      strComparisonOpPrjId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDataNodeCond.dicFldComparisonOp,
      clsDataNodeEN.con_PosX,
    ) == true
  ) {
    const strComparisonOpPosX: string = objDataNodeCond.dicFldComparisonOp[clsDataNodeEN.con_PosX];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsDataNodeEN.con_PosX,
      objDataNodeCond.posX,
      strComparisonOpPosX,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDataNodeCond.dicFldComparisonOp,
      clsDataNodeEN.con_PosY,
    ) == true
  ) {
    const strComparisonOpPosY: string = objDataNodeCond.dicFldComparisonOp[clsDataNodeEN.con_PosY];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsDataNodeEN.con_PosY,
      objDataNodeCond.posY,
      strComparisonOpPosY,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDataNodeCond.dicFldComparisonOp,
      clsDataNodeEN.con_UsedTimes,
    ) == true
  ) {
    const strComparisonOpUsedTimes: string =
      objDataNodeCond.dicFldComparisonOp[clsDataNodeEN.con_UsedTimes];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsDataNodeEN.con_UsedTimes,
      objDataNodeCond.usedTimes,
      strComparisonOpUsedTimes,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDataNodeCond.dicFldComparisonOp,
      clsDataNodeEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objDataNodeCond.dicFldComparisonOp[clsDataNodeEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDataNodeEN.con_UpdDate,
      objDataNodeCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDataNodeCond.dicFldComparisonOp,
      clsDataNodeEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objDataNodeCond.dicFldComparisonOp[clsDataNodeEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDataNodeEN.con_UpdUser,
      objDataNodeCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDataNodeCond.dicFldComparisonOp,
      clsDataNodeEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string = objDataNodeCond.dicFldComparisonOp[clsDataNodeEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDataNodeEN.con_Memo,
      objDataNodeCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--DataNode(数据结点),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strTabId: 表ID(要求唯一的字段)
 * @param strFldId: 字段Id(要求唯一的字段)
 * @param strKeyFldLst: 关键字段Id列表(要求唯一的字段)
 * @param intVersionNo: 版本号(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function DataNode_GetUniCondStr(objDataNodeEN: clsDataNodeEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and TabId = '{0}'", objDataNodeEN.tabId);
  strWhereCond += Format(" and FldId = '{0}'", objDataNodeEN.fldId);
  strWhereCond += Format(" and KeyFldLst = '{0}'", objDataNodeEN.keyFldLst);
  strWhereCond += Format(" and VersionNo = '{0}'", objDataNodeEN.versionNo);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--DataNode(数据结点),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strTabId: 表ID(要求唯一的字段)
 * @param strFldId: 字段Id(要求唯一的字段)
 * @param strKeyFldLst: 关键字段Id列表(要求唯一的字段)
 * @param intVersionNo: 版本号(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function DataNode_GetUniCondStr4Update(objDataNodeEN: clsDataNodeEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and DataNodeId <> '{0}'", objDataNodeEN.dataNodeId);
  strWhereCond += Format(" and TabId = '{0}'", objDataNodeEN.tabId);
  strWhereCond += Format(" and FldId = '{0}'", objDataNodeEN.fldId);
  strWhereCond += Format(" and KeyFldLst = '{0}'", objDataNodeEN.keyFldLst);
  strWhereCond += Format(" and VersionNo = '{0}'", objDataNodeEN.versionNo);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objDataNodeENS:源对象
 * @param objDataNodeENT:目标对象
 */
export function DataNode_GetObjFromJsonObj(objDataNodeENS: clsDataNodeEN): clsDataNodeEN {
  const objDataNodeENT: clsDataNodeEN = new clsDataNodeEN();
  ObjectAssign(objDataNodeENT, objDataNodeENS);
  return objDataNodeENT;
}
