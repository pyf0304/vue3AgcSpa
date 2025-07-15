/**
 * 类名:clsvDnFuncMapWApi
 * 表名:vDnFuncMap(00050554)
 * 版本:2024.10.15.1(服务器:WIN-SRV103-116)
 * 日期:2024/10/17 00:08:30
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 应用类型:Vue应用InCore-TS(30)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:AI模块(AIModule)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * v结点函数映射(vDnFuncMap)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2024年10月17日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsvDnFuncMapEN } from '@/ts/L0Entity/AIModule/clsvDnFuncMapEN';
import { GetExceptionStr, myShowErrorMsg, ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const vDnFuncMap_Controller = 'vDnFuncMapApi';
export const vDnFuncMap_ConstructorName = 'vDnFuncMap';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strDnFuncMapId:关键字
 * @returns 对象
 **/
export async function vDnFuncMap_GetObjByDnFuncMapIdAsync(
  strDnFuncMapId: string,
): Promise<clsvDnFuncMapEN | null> {
  const strThisFuncName = 'GetObjByDnFuncMapIdAsync';

  if (IsNullOrEmpty(strDnFuncMapId) == true) {
    const strMsg = Format(
      '参数:[strDnFuncMapId]不能为空!(In clsvDnFuncMapWApi.GetObjByDnFuncMapIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strDnFuncMapId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strDnFuncMapId]的长度:[{0}]不正确!(clsvDnFuncMapWApi.GetObjByDnFuncMapIdAsync)',
      strDnFuncMapId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByDnFuncMapId';
  const strUrl = GetWebApiUrl(vDnFuncMap_Controller, strAction);

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
      const objvDnFuncMap = vDnFuncMap_GetObjFromJsonObj(returnObj);
      return objvDnFuncMap;
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
        vDnFuncMap_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vDnFuncMap_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[GetObjByDnFuncMapIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )
//该表没有使用Cache,不需要生成[GetObjByDnFuncMapIdlocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[GetNameByDnFuncMapIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
//该表没有使用Cache,不需要生成[func]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func )

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-10-17
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function vDnFuncMap_SortFunDefa(a: clsvDnFuncMapEN, b: clsvDnFuncMapEN): number {
  return a.dnFuncMapId.localeCompare(b.dnFuncMapId);
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2024-10-17
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function vDnFuncMap_SortFunDefa2Fld(a: clsvDnFuncMapEN, b: clsvDnFuncMapEN): number {
  if (a.inDataNodeId == b.inDataNodeId) return a.outDataNodeId - b.outDataNodeId;
  else return a.inDataNodeId - b.inDataNodeId;
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-10-17
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function vDnFuncMap_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsvDnFuncMapEN.con_DnFuncMapId:
        return (a: clsvDnFuncMapEN, b: clsvDnFuncMapEN) => {
          return a.dnFuncMapId.localeCompare(b.dnFuncMapId);
        };
      case clsvDnFuncMapEN.con_InDataNodeId:
        return (a: clsvDnFuncMapEN, b: clsvDnFuncMapEN) => {
          return a.inDataNodeId - b.inDataNodeId;
        };
      case clsvDnFuncMapEN.con_OutDataNodeId:
        return (a: clsvDnFuncMapEN, b: clsvDnFuncMapEN) => {
          return a.outDataNodeId - b.outDataNodeId;
        };
      case clsvDnFuncMapEN.con_AssociationMappingId:
        return (a: clsvDnFuncMapEN, b: clsvDnFuncMapEN) => {
          if (a.associationMappingId == null) return -1;
          if (b.associationMappingId == null) return 1;
          return a.associationMappingId.localeCompare(b.associationMappingId);
        };
      case clsvDnFuncMapEN.con_AssociationMappingName:
        return (a: clsvDnFuncMapEN, b: clsvDnFuncMapEN) => {
          if (a.associationMappingName == null) return -1;
          if (b.associationMappingName == null) return 1;
          return a.associationMappingName.localeCompare(b.associationMappingName);
        };
      case clsvDnFuncMapEN.con_FuncMapModeId:
        return (a: clsvDnFuncMapEN, b: clsvDnFuncMapEN) => {
          if (a.funcMapModeId == null) return -1;
          if (b.funcMapModeId == null) return 1;
          return a.funcMapModeId.localeCompare(b.funcMapModeId);
        };
      case clsvDnFuncMapEN.con_FuncMapModeName:
        return (a: clsvDnFuncMapEN, b: clsvDnFuncMapEN) => {
          if (a.funcMapModeName == null) return -1;
          if (b.funcMapModeName == null) return 1;
          return a.funcMapModeName.localeCompare(b.funcMapModeName);
        };
      case clsvDnFuncMapEN.con_TabId:
        return (a: clsvDnFuncMapEN, b: clsvDnFuncMapEN) => {
          return a.tabId.localeCompare(b.tabId);
        };
      case clsvDnFuncMapEN.con_DnFunctionId:
        return (a: clsvDnFuncMapEN, b: clsvDnFuncMapEN) => {
          if (a.dnFunctionId == null) return -1;
          if (b.dnFunctionId == null) return 1;
          return a.dnFunctionId.localeCompare(b.dnFunctionId);
        };
      case clsvDnFuncMapEN.con_PrjId:
        return (a: clsvDnFuncMapEN, b: clsvDnFuncMapEN) => {
          return a.prjId.localeCompare(b.prjId);
        };
      case clsvDnFuncMapEN.con_UpdDate:
        return (a: clsvDnFuncMapEN, b: clsvDnFuncMapEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsvDnFuncMapEN.con_UpdUser:
        return (a: clsvDnFuncMapEN, b: clsvDnFuncMapEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsvDnFuncMapEN.con_Memo:
        return (a: clsvDnFuncMapEN, b: clsvDnFuncMapEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      case clsvDnFuncMapEN.con_InDataNodeName:
        return (a: clsvDnFuncMapEN, b: clsvDnFuncMapEN) => {
          if (a.inDataNodeName == null) return -1;
          if (b.inDataNodeName == null) return 1;
          return a.inDataNodeName.localeCompare(b.inDataNodeName);
        };
      case clsvDnFuncMapEN.con_OutDataNodeName:
        return (a: clsvDnFuncMapEN, b: clsvDnFuncMapEN) => {
          if (a.outDataNodeName == null) return -1;
          if (b.outDataNodeName == null) return 1;
          return a.outDataNodeName.localeCompare(b.outDataNodeName);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vDnFuncMap]中不存在!(in ${vDnFuncMap_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsvDnFuncMapEN.con_DnFuncMapId:
        return (a: clsvDnFuncMapEN, b: clsvDnFuncMapEN) => {
          return b.dnFuncMapId.localeCompare(a.dnFuncMapId);
        };
      case clsvDnFuncMapEN.con_InDataNodeId:
        return (a: clsvDnFuncMapEN, b: clsvDnFuncMapEN) => {
          return b.inDataNodeId - a.inDataNodeId;
        };
      case clsvDnFuncMapEN.con_OutDataNodeId:
        return (a: clsvDnFuncMapEN, b: clsvDnFuncMapEN) => {
          return b.outDataNodeId - a.outDataNodeId;
        };
      case clsvDnFuncMapEN.con_AssociationMappingId:
        return (a: clsvDnFuncMapEN, b: clsvDnFuncMapEN) => {
          if (b.associationMappingId == null) return -1;
          if (a.associationMappingId == null) return 1;
          return b.associationMappingId.localeCompare(a.associationMappingId);
        };
      case clsvDnFuncMapEN.con_AssociationMappingName:
        return (a: clsvDnFuncMapEN, b: clsvDnFuncMapEN) => {
          if (b.associationMappingName == null) return -1;
          if (a.associationMappingName == null) return 1;
          return b.associationMappingName.localeCompare(a.associationMappingName);
        };
      case clsvDnFuncMapEN.con_FuncMapModeId:
        return (a: clsvDnFuncMapEN, b: clsvDnFuncMapEN) => {
          if (b.funcMapModeId == null) return -1;
          if (a.funcMapModeId == null) return 1;
          return b.funcMapModeId.localeCompare(a.funcMapModeId);
        };
      case clsvDnFuncMapEN.con_FuncMapModeName:
        return (a: clsvDnFuncMapEN, b: clsvDnFuncMapEN) => {
          if (b.funcMapModeName == null) return -1;
          if (a.funcMapModeName == null) return 1;
          return b.funcMapModeName.localeCompare(a.funcMapModeName);
        };
      case clsvDnFuncMapEN.con_TabId:
        return (a: clsvDnFuncMapEN, b: clsvDnFuncMapEN) => {
          return b.tabId.localeCompare(a.tabId);
        };
      case clsvDnFuncMapEN.con_DnFunctionId:
        return (a: clsvDnFuncMapEN, b: clsvDnFuncMapEN) => {
          if (b.dnFunctionId == null) return -1;
          if (a.dnFunctionId == null) return 1;
          return b.dnFunctionId.localeCompare(a.dnFunctionId);
        };
      case clsvDnFuncMapEN.con_PrjId:
        return (a: clsvDnFuncMapEN, b: clsvDnFuncMapEN) => {
          return b.prjId.localeCompare(a.prjId);
        };
      case clsvDnFuncMapEN.con_UpdDate:
        return (a: clsvDnFuncMapEN, b: clsvDnFuncMapEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsvDnFuncMapEN.con_UpdUser:
        return (a: clsvDnFuncMapEN, b: clsvDnFuncMapEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsvDnFuncMapEN.con_Memo:
        return (a: clsvDnFuncMapEN, b: clsvDnFuncMapEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      case clsvDnFuncMapEN.con_InDataNodeName:
        return (a: clsvDnFuncMapEN, b: clsvDnFuncMapEN) => {
          if (b.inDataNodeName == null) return -1;
          if (a.inDataNodeName == null) return 1;
          return b.inDataNodeName.localeCompare(a.inDataNodeName);
        };
      case clsvDnFuncMapEN.con_OutDataNodeName:
        return (a: clsvDnFuncMapEN, b: clsvDnFuncMapEN) => {
          if (b.outDataNodeName == null) return -1;
          if (a.outDataNodeName == null) return 1;
          return b.outDataNodeName.localeCompare(a.outDataNodeName);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vDnFuncMap]中不存在!(in ${vDnFuncMap_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2024-10-17
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function vDnFuncMap_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsvDnFuncMapEN.con_DnFuncMapId:
      return (obj: clsvDnFuncMapEN) => {
        return obj.dnFuncMapId === value;
      };
    case clsvDnFuncMapEN.con_InDataNodeId:
      return (obj: clsvDnFuncMapEN) => {
        return obj.inDataNodeId === value;
      };
    case clsvDnFuncMapEN.con_OutDataNodeId:
      return (obj: clsvDnFuncMapEN) => {
        return obj.outDataNodeId === value;
      };
    case clsvDnFuncMapEN.con_AssociationMappingId:
      return (obj: clsvDnFuncMapEN) => {
        return obj.associationMappingId === value;
      };
    case clsvDnFuncMapEN.con_AssociationMappingName:
      return (obj: clsvDnFuncMapEN) => {
        return obj.associationMappingName === value;
      };
    case clsvDnFuncMapEN.con_FuncMapModeId:
      return (obj: clsvDnFuncMapEN) => {
        return obj.funcMapModeId === value;
      };
    case clsvDnFuncMapEN.con_FuncMapModeName:
      return (obj: clsvDnFuncMapEN) => {
        return obj.funcMapModeName === value;
      };
    case clsvDnFuncMapEN.con_TabId:
      return (obj: clsvDnFuncMapEN) => {
        return obj.tabId === value;
      };
    case clsvDnFuncMapEN.con_DnFunctionId:
      return (obj: clsvDnFuncMapEN) => {
        return obj.dnFunctionId === value;
      };
    case clsvDnFuncMapEN.con_PrjId:
      return (obj: clsvDnFuncMapEN) => {
        return obj.prjId === value;
      };
    case clsvDnFuncMapEN.con_UpdDate:
      return (obj: clsvDnFuncMapEN) => {
        return obj.updDate === value;
      };
    case clsvDnFuncMapEN.con_UpdUser:
      return (obj: clsvDnFuncMapEN) => {
        return obj.updUser === value;
      };
    case clsvDnFuncMapEN.con_Memo:
      return (obj: clsvDnFuncMapEN) => {
        return obj.memo === value;
      };
    case clsvDnFuncMapEN.con_InDataNodeName:
      return (obj: clsvDnFuncMapEN) => {
        return obj.inDataNodeName === value;
      };
    case clsvDnFuncMapEN.con_OutDataNodeName:
      return (obj: clsvDnFuncMapEN) => {
        return obj.outDataNodeName === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[vDnFuncMap]中不存在!(in ${vDnFuncMap_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}
//该表没有使用Cache,不需要生成[vDnFuncMap__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function vDnFuncMap_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vDnFuncMap_Controller, strAction);

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
        vDnFuncMap_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vDnFuncMap_ConstructorName,
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
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function vDnFuncMap_GetFldValueAsync(
  strFldName: string,
  strWhereCond: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetFldValueAsync';
  const strAction = 'GetFldValue';
  const strUrl = GetWebApiUrl(vDnFuncMap_Controller, strAction);

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
        vDnFuncMap_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vDnFuncMap_ConstructorName,
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
export async function vDnFuncMap_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vDnFuncMap_Controller, strAction);

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
        vDnFuncMap_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vDnFuncMap_ConstructorName,
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
export async function vDnFuncMap_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsvDnFuncMapEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(vDnFuncMap_Controller, strAction);

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
      const objvDnFuncMap = vDnFuncMap_GetObjFromJsonObj(returnObj);
      return objvDnFuncMap;
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
        vDnFuncMap_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vDnFuncMap_ConstructorName,
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
export async function vDnFuncMap_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsvDnFuncMapEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(vDnFuncMap_Controller, strAction);

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
          vDnFuncMap_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vDnFuncMap_GetObjLstByJSONObjLst(returnObjLst);
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
        vDnFuncMap_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vDnFuncMap_ConstructorName,
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
export async function vDnFuncMap_GetObjLstByDnFuncMapIdLstAsync(
  arrDnFuncMapId: Array<string>,
): Promise<Array<clsvDnFuncMapEN>> {
  const strThisFuncName = 'GetObjLstByDnFuncMapIdLstAsync';
  const strAction = 'GetObjLstByDnFuncMapIdLst';
  const strUrl = GetWebApiUrl(vDnFuncMap_Controller, strAction);

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
          vDnFuncMap_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vDnFuncMap_GetObjLstByJSONObjLst(returnObjLst);
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
        vDnFuncMap_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vDnFuncMap_ConstructorName,
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
export async function vDnFuncMap_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsvDnFuncMapEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(vDnFuncMap_Controller, strAction);

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
          vDnFuncMap_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vDnFuncMap_GetObjLstByJSONObjLst(returnObjLst);
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
        vDnFuncMap_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vDnFuncMap_ConstructorName,
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
export async function vDnFuncMap_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsvDnFuncMapEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(vDnFuncMap_Controller, strAction);

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
          vDnFuncMap_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vDnFuncMap_GetObjLstByJSONObjLst(returnObjLst);
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
        vDnFuncMap_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vDnFuncMap_ConstructorName,
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
export async function vDnFuncMap_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsvDnFuncMapEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsvDnFuncMapEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(vDnFuncMap_Controller, strAction);

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
          vDnFuncMap_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vDnFuncMap_GetObjLstByJSONObjLst(returnObjLst);
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
        vDnFuncMap_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vDnFuncMap_ConstructorName,
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
export async function vDnFuncMap_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(vDnFuncMap_Controller, strAction);

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
        vDnFuncMap_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vDnFuncMap_ConstructorName,
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
export async function vDnFuncMap_IsExistAsync(strDnFuncMapId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(vDnFuncMap_Controller, strAction);

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
        vDnFuncMap_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vDnFuncMap_ConstructorName,
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
export async function vDnFuncMap_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(vDnFuncMap_Controller, strAction);

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
        vDnFuncMap_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vDnFuncMap_ConstructorName,
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
export function vDnFuncMap_GetWebApiUrl(strController: string, strAction: string): string {
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
 * 日期:2024-10-17
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vDnFuncMap_GetJSONStrByObj(pobjvDnFuncMapEN: clsvDnFuncMapEN): string {
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjvDnFuncMapEN);
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
 * 日期:2024-10-17
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
 */
export function vDnFuncMap_GetObjLstByJSONStr(strJSON: string): Array<clsvDnFuncMapEN> {
  let arrvDnFuncMapObjLst = new Array<clsvDnFuncMapEN>();
  if (strJSON === '') {
    return arrvDnFuncMapObjLst;
  }
  try {
    arrvDnFuncMapObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrvDnFuncMapObjLst;
  }
  return arrvDnFuncMapObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2024-10-17
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvDnFuncMapObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function vDnFuncMap_GetObjLstByJSONObjLst(
  arrvDnFuncMapObjLstS: Array<clsvDnFuncMapEN>,
): Array<clsvDnFuncMapEN> {
  const arrvDnFuncMapObjLst = new Array<clsvDnFuncMapEN>();
  for (const objInFor of arrvDnFuncMapObjLstS) {
    const obj1 = vDnFuncMap_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrvDnFuncMapObjLst.push(obj1);
  }
  return arrvDnFuncMapObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2024-10-17
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vDnFuncMap_GetObjByJSONStr(strJSON: string): clsvDnFuncMapEN {
  let pobjvDnFuncMapEN = new clsvDnFuncMapEN();
  if (strJSON === '') {
    return pobjvDnFuncMapEN;
  }
  try {
    pobjvDnFuncMapEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjvDnFuncMapEN;
  }
  return pobjvDnFuncMapEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function vDnFuncMap_GetCombineCondition(objvDnFuncMapCond: clsvDnFuncMapEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objvDnFuncMapCond.dicFldComparisonOp,
      clsvDnFuncMapEN.con_DnFuncMapId,
    ) == true
  ) {
    const strComparisonOpDnFuncMapId: string =
      objvDnFuncMapCond.dicFldComparisonOp[clsvDnFuncMapEN.con_DnFuncMapId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvDnFuncMapEN.con_DnFuncMapId,
      objvDnFuncMapCond.dnFuncMapId,
      strComparisonOpDnFuncMapId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvDnFuncMapCond.dicFldComparisonOp,
      clsvDnFuncMapEN.con_InDataNodeId,
    ) == true
  ) {
    const strComparisonOpInDataNodeId: string =
      objvDnFuncMapCond.dicFldComparisonOp[clsvDnFuncMapEN.con_InDataNodeId];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvDnFuncMapEN.con_InDataNodeId,
      objvDnFuncMapCond.inDataNodeId,
      strComparisonOpInDataNodeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvDnFuncMapCond.dicFldComparisonOp,
      clsvDnFuncMapEN.con_OutDataNodeId,
    ) == true
  ) {
    const strComparisonOpOutDataNodeId: string =
      objvDnFuncMapCond.dicFldComparisonOp[clsvDnFuncMapEN.con_OutDataNodeId];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvDnFuncMapEN.con_OutDataNodeId,
      objvDnFuncMapCond.outDataNodeId,
      strComparisonOpOutDataNodeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvDnFuncMapCond.dicFldComparisonOp,
      clsvDnFuncMapEN.con_AssociationMappingId,
    ) == true
  ) {
    const strComparisonOpAssociationMappingId: string =
      objvDnFuncMapCond.dicFldComparisonOp[clsvDnFuncMapEN.con_AssociationMappingId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvDnFuncMapEN.con_AssociationMappingId,
      objvDnFuncMapCond.associationMappingId,
      strComparisonOpAssociationMappingId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvDnFuncMapCond.dicFldComparisonOp,
      clsvDnFuncMapEN.con_AssociationMappingName,
    ) == true
  ) {
    const strComparisonOpAssociationMappingName: string =
      objvDnFuncMapCond.dicFldComparisonOp[clsvDnFuncMapEN.con_AssociationMappingName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvDnFuncMapEN.con_AssociationMappingName,
      objvDnFuncMapCond.associationMappingName,
      strComparisonOpAssociationMappingName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvDnFuncMapCond.dicFldComparisonOp,
      clsvDnFuncMapEN.con_FuncMapModeId,
    ) == true
  ) {
    const strComparisonOpFuncMapModeId: string =
      objvDnFuncMapCond.dicFldComparisonOp[clsvDnFuncMapEN.con_FuncMapModeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvDnFuncMapEN.con_FuncMapModeId,
      objvDnFuncMapCond.funcMapModeId,
      strComparisonOpFuncMapModeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvDnFuncMapCond.dicFldComparisonOp,
      clsvDnFuncMapEN.con_FuncMapModeName,
    ) == true
  ) {
    const strComparisonOpFuncMapModeName: string =
      objvDnFuncMapCond.dicFldComparisonOp[clsvDnFuncMapEN.con_FuncMapModeName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvDnFuncMapEN.con_FuncMapModeName,
      objvDnFuncMapCond.funcMapModeName,
      strComparisonOpFuncMapModeName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvDnFuncMapCond.dicFldComparisonOp,
      clsvDnFuncMapEN.con_TabId,
    ) == true
  ) {
    const strComparisonOpTabId: string =
      objvDnFuncMapCond.dicFldComparisonOp[clsvDnFuncMapEN.con_TabId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvDnFuncMapEN.con_TabId,
      objvDnFuncMapCond.tabId,
      strComparisonOpTabId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvDnFuncMapCond.dicFldComparisonOp,
      clsvDnFuncMapEN.con_DnFunctionId,
    ) == true
  ) {
    const strComparisonOpDnFunctionId: string =
      objvDnFuncMapCond.dicFldComparisonOp[clsvDnFuncMapEN.con_DnFunctionId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvDnFuncMapEN.con_DnFunctionId,
      objvDnFuncMapCond.dnFunctionId,
      strComparisonOpDnFunctionId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvDnFuncMapCond.dicFldComparisonOp,
      clsvDnFuncMapEN.con_PrjId,
    ) == true
  ) {
    const strComparisonOpPrjId: string =
      objvDnFuncMapCond.dicFldComparisonOp[clsvDnFuncMapEN.con_PrjId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvDnFuncMapEN.con_PrjId,
      objvDnFuncMapCond.prjId,
      strComparisonOpPrjId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvDnFuncMapCond.dicFldComparisonOp,
      clsvDnFuncMapEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objvDnFuncMapCond.dicFldComparisonOp[clsvDnFuncMapEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvDnFuncMapEN.con_UpdDate,
      objvDnFuncMapCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvDnFuncMapCond.dicFldComparisonOp,
      clsvDnFuncMapEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objvDnFuncMapCond.dicFldComparisonOp[clsvDnFuncMapEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvDnFuncMapEN.con_UpdUser,
      objvDnFuncMapCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvDnFuncMapCond.dicFldComparisonOp,
      clsvDnFuncMapEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objvDnFuncMapCond.dicFldComparisonOp[clsvDnFuncMapEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvDnFuncMapEN.con_Memo,
      objvDnFuncMapCond.memo,
      strComparisonOpMemo,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvDnFuncMapCond.dicFldComparisonOp,
      clsvDnFuncMapEN.con_InDataNodeName,
    ) == true
  ) {
    const strComparisonOpInDataNodeName: string =
      objvDnFuncMapCond.dicFldComparisonOp[clsvDnFuncMapEN.con_InDataNodeName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvDnFuncMapEN.con_InDataNodeName,
      objvDnFuncMapCond.inDataNodeName,
      strComparisonOpInDataNodeName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvDnFuncMapCond.dicFldComparisonOp,
      clsvDnFuncMapEN.con_OutDataNodeName,
    ) == true
  ) {
    const strComparisonOpOutDataNodeName: string =
      objvDnFuncMapCond.dicFldComparisonOp[clsvDnFuncMapEN.con_OutDataNodeName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvDnFuncMapEN.con_OutDataNodeName,
      objvDnFuncMapCond.outDataNodeName,
      strComparisonOpOutDataNodeName,
    );
  }
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvDnFuncMapENS:源对象
 * @param objvDnFuncMapENT:目标对象
 */
export function vDnFuncMap_GetObjFromJsonObj(objvDnFuncMapENS: clsvDnFuncMapEN): clsvDnFuncMapEN {
  const objvDnFuncMapENT: clsvDnFuncMapEN = new clsvDnFuncMapEN();
  ObjectAssign(objvDnFuncMapENT, objvDnFuncMapENS);
  return objvDnFuncMapENT;
}
