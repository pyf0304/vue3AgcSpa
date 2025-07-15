/**
 * 类名:clsDataNodeDirectMapWApi
 * 表名:DataNodeDirectMap(00050570)
 * 版本:2024.10.15.1(服务器:WIN-SRV103-116)
 * 日期:2024/10/17 00:07:01
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
 * 数据结点直接映射(DataNodeDirectMap)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2024年10月17日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { GetStrLen, tzDataType, Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { clsDataNodeDirectMapEN } from '@/ts/L0Entity/AIModule/clsDataNodeDirectMapEN';
import { GetExceptionStr, myShowErrorMsg, ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const dataNodeDirectMap_Controller = 'DataNodeDirectMapApi';
export const dataNodeDirectMap_ConstructorName = 'dataNodeDirectMap';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngmId:关键字
 * @returns 对象
 **/
export async function DataNodeDirectMap_GetObjBymIdAsync(
  lngmId: number,
): Promise<clsDataNodeDirectMapEN | null> {
  const strThisFuncName = 'GetObjBymIdAsync';

  if (lngmId == 0) {
    const strMsg = Format('参数:[lngmId]不能为空!(In clsDataNodeDirectMapWApi.GetObjBymIdAsync)');
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjBymId';
  const strUrl = GetWebApiUrl(dataNodeDirectMap_Controller, strAction);

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
      const objDataNodeDirectMap = DataNodeDirectMap_GetObjFromJsonObj(returnObj);
      return objDataNodeDirectMap;
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
        dataNodeDirectMap_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataNodeDirectMap_ConstructorName,
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
 * 日期:2024-10-17
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function DataNodeDirectMap_SortFunDefa(
  a: clsDataNodeDirectMapEN,
  b: clsDataNodeDirectMapEN,
): number {
  return a.mId - b.mId;
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
export function DataNodeDirectMap_SortFunDefa2Fld(
  a: clsDataNodeDirectMapEN,
  b: clsDataNodeDirectMapEN,
): number {
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
export function DataNodeDirectMap_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsDataNodeDirectMapEN.con_mId:
        return (a: clsDataNodeDirectMapEN, b: clsDataNodeDirectMapEN) => {
          return a.mId - b.mId;
        };
      case clsDataNodeDirectMapEN.con_InDataNodeId:
        return (a: clsDataNodeDirectMapEN, b: clsDataNodeDirectMapEN) => {
          return a.inDataNodeId - b.inDataNodeId;
        };
      case clsDataNodeDirectMapEN.con_OutDataNodeId:
        return (a: clsDataNodeDirectMapEN, b: clsDataNodeDirectMapEN) => {
          return a.outDataNodeId - b.outDataNodeId;
        };
      case clsDataNodeDirectMapEN.con_AssociationMappingId:
        return (a: clsDataNodeDirectMapEN, b: clsDataNodeDirectMapEN) => {
          return a.associationMappingId.localeCompare(b.associationMappingId);
        };
      case clsDataNodeDirectMapEN.con_FuncMapModeId:
        return (a: clsDataNodeDirectMapEN, b: clsDataNodeDirectMapEN) => {
          return a.funcMapModeId.localeCompare(b.funcMapModeId);
        };
      case clsDataNodeDirectMapEN.con_TabId:
        return (a: clsDataNodeDirectMapEN, b: clsDataNodeDirectMapEN) => {
          if (a.tabId == null) return -1;
          if (b.tabId == null) return 1;
          return a.tabId.localeCompare(b.tabId);
        };
      case clsDataNodeDirectMapEN.con_DnFunctionId:
        return (a: clsDataNodeDirectMapEN, b: clsDataNodeDirectMapEN) => {
          if (a.dnFunctionId == null) return -1;
          if (b.dnFunctionId == null) return 1;
          return a.dnFunctionId.localeCompare(b.dnFunctionId);
        };
      case clsDataNodeDirectMapEN.con_PrjId:
        return (a: clsDataNodeDirectMapEN, b: clsDataNodeDirectMapEN) => {
          return a.prjId.localeCompare(b.prjId);
        };
      case clsDataNodeDirectMapEN.con_UpdDate:
        return (a: clsDataNodeDirectMapEN, b: clsDataNodeDirectMapEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsDataNodeDirectMapEN.con_UpdUser:
        return (a: clsDataNodeDirectMapEN, b: clsDataNodeDirectMapEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsDataNodeDirectMapEN.con_Memo:
        return (a: clsDataNodeDirectMapEN, b: clsDataNodeDirectMapEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[DataNodeDirectMap]中不存在!(in ${dataNodeDirectMap_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsDataNodeDirectMapEN.con_mId:
        return (a: clsDataNodeDirectMapEN, b: clsDataNodeDirectMapEN) => {
          return b.mId - a.mId;
        };
      case clsDataNodeDirectMapEN.con_InDataNodeId:
        return (a: clsDataNodeDirectMapEN, b: clsDataNodeDirectMapEN) => {
          return b.inDataNodeId - a.inDataNodeId;
        };
      case clsDataNodeDirectMapEN.con_OutDataNodeId:
        return (a: clsDataNodeDirectMapEN, b: clsDataNodeDirectMapEN) => {
          return b.outDataNodeId - a.outDataNodeId;
        };
      case clsDataNodeDirectMapEN.con_AssociationMappingId:
        return (a: clsDataNodeDirectMapEN, b: clsDataNodeDirectMapEN) => {
          return b.associationMappingId.localeCompare(a.associationMappingId);
        };
      case clsDataNodeDirectMapEN.con_FuncMapModeId:
        return (a: clsDataNodeDirectMapEN, b: clsDataNodeDirectMapEN) => {
          return b.funcMapModeId.localeCompare(a.funcMapModeId);
        };
      case clsDataNodeDirectMapEN.con_TabId:
        return (a: clsDataNodeDirectMapEN, b: clsDataNodeDirectMapEN) => {
          if (b.tabId == null) return -1;
          if (a.tabId == null) return 1;
          return b.tabId.localeCompare(a.tabId);
        };
      case clsDataNodeDirectMapEN.con_DnFunctionId:
        return (a: clsDataNodeDirectMapEN, b: clsDataNodeDirectMapEN) => {
          if (b.dnFunctionId == null) return -1;
          if (a.dnFunctionId == null) return 1;
          return b.dnFunctionId.localeCompare(a.dnFunctionId);
        };
      case clsDataNodeDirectMapEN.con_PrjId:
        return (a: clsDataNodeDirectMapEN, b: clsDataNodeDirectMapEN) => {
          return b.prjId.localeCompare(a.prjId);
        };
      case clsDataNodeDirectMapEN.con_UpdDate:
        return (a: clsDataNodeDirectMapEN, b: clsDataNodeDirectMapEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsDataNodeDirectMapEN.con_UpdUser:
        return (a: clsDataNodeDirectMapEN, b: clsDataNodeDirectMapEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsDataNodeDirectMapEN.con_Memo:
        return (a: clsDataNodeDirectMapEN, b: clsDataNodeDirectMapEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[DataNodeDirectMap]中不存在!(in ${dataNodeDirectMap_ConstructorName}.${strThisFuncName})`;
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
export async function DataNodeDirectMap_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsDataNodeDirectMapEN.con_mId:
      return (obj: clsDataNodeDirectMapEN) => {
        return obj.mId === value;
      };
    case clsDataNodeDirectMapEN.con_InDataNodeId:
      return (obj: clsDataNodeDirectMapEN) => {
        return obj.inDataNodeId === value;
      };
    case clsDataNodeDirectMapEN.con_OutDataNodeId:
      return (obj: clsDataNodeDirectMapEN) => {
        return obj.outDataNodeId === value;
      };
    case clsDataNodeDirectMapEN.con_AssociationMappingId:
      return (obj: clsDataNodeDirectMapEN) => {
        return obj.associationMappingId === value;
      };
    case clsDataNodeDirectMapEN.con_FuncMapModeId:
      return (obj: clsDataNodeDirectMapEN) => {
        return obj.funcMapModeId === value;
      };
    case clsDataNodeDirectMapEN.con_TabId:
      return (obj: clsDataNodeDirectMapEN) => {
        return obj.tabId === value;
      };
    case clsDataNodeDirectMapEN.con_DnFunctionId:
      return (obj: clsDataNodeDirectMapEN) => {
        return obj.dnFunctionId === value;
      };
    case clsDataNodeDirectMapEN.con_PrjId:
      return (obj: clsDataNodeDirectMapEN) => {
        return obj.prjId === value;
      };
    case clsDataNodeDirectMapEN.con_UpdDate:
      return (obj: clsDataNodeDirectMapEN) => {
        return obj.updDate === value;
      };
    case clsDataNodeDirectMapEN.con_UpdUser:
      return (obj: clsDataNodeDirectMapEN) => {
        return obj.updUser === value;
      };
    case clsDataNodeDirectMapEN.con_Memo:
      return (obj: clsDataNodeDirectMapEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[DataNodeDirectMap]中不存在!(in ${dataNodeDirectMap_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}
//该表没有使用Cache,不需要生成[DataNodeDirectMap__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function DataNodeDirectMap_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(dataNodeDirectMap_Controller, strAction);

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
        dataNodeDirectMap_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataNodeDirectMap_ConstructorName,
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
export async function DataNodeDirectMap_GetFldValueAsync(
  strFldName: string,
  strWhereCond: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetFldValueAsync';
  const strAction = 'GetFldValue';
  const strUrl = GetWebApiUrl(dataNodeDirectMap_Controller, strAction);

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
        dataNodeDirectMap_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataNodeDirectMap_ConstructorName,
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
export async function DataNodeDirectMap_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(dataNodeDirectMap_Controller, strAction);

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
        dataNodeDirectMap_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataNodeDirectMap_ConstructorName,
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
export async function DataNodeDirectMap_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsDataNodeDirectMapEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(dataNodeDirectMap_Controller, strAction);

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
      const objDataNodeDirectMap = DataNodeDirectMap_GetObjFromJsonObj(returnObj);
      return objDataNodeDirectMap;
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
        dataNodeDirectMap_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataNodeDirectMap_ConstructorName,
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
export async function DataNodeDirectMap_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsDataNodeDirectMapEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(dataNodeDirectMap_Controller, strAction);

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
          dataNodeDirectMap_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = DataNodeDirectMap_GetObjLstByJSONObjLst(returnObjLst);
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
        dataNodeDirectMap_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataNodeDirectMap_ConstructorName,
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
export async function DataNodeDirectMap_GetObjLstBymIdLstAsync(
  arrmId: Array<string>,
): Promise<Array<clsDataNodeDirectMapEN>> {
  const strThisFuncName = 'GetObjLstBymIdLstAsync';
  const strAction = 'GetObjLstBymIdLst';
  const strUrl = GetWebApiUrl(dataNodeDirectMap_Controller, strAction);

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
          dataNodeDirectMap_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = DataNodeDirectMap_GetObjLstByJSONObjLst(returnObjLst);
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
        dataNodeDirectMap_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataNodeDirectMap_ConstructorName,
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
export async function DataNodeDirectMap_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsDataNodeDirectMapEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(dataNodeDirectMap_Controller, strAction);

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
          dataNodeDirectMap_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = DataNodeDirectMap_GetObjLstByJSONObjLst(returnObjLst);
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
        dataNodeDirectMap_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataNodeDirectMap_ConstructorName,
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
export async function DataNodeDirectMap_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsDataNodeDirectMapEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(dataNodeDirectMap_Controller, strAction);

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
          dataNodeDirectMap_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = DataNodeDirectMap_GetObjLstByJSONObjLst(returnObjLst);
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
        dataNodeDirectMap_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataNodeDirectMap_ConstructorName,
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
export async function DataNodeDirectMap_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsDataNodeDirectMapEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsDataNodeDirectMapEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(dataNodeDirectMap_Controller, strAction);

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
          dataNodeDirectMap_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = DataNodeDirectMap_GetObjLstByJSONObjLst(returnObjLst);
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
        dataNodeDirectMap_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataNodeDirectMap_ConstructorName,
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
export async function DataNodeDirectMap_DelRecordAsync(lngmId: number): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(dataNodeDirectMap_Controller, strAction);
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
        dataNodeDirectMap_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataNodeDirectMap_ConstructorName,
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
export async function DataNodeDirectMap_DelDataNodeDirectMapsAsync(
  arrmId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelDataNodeDirectMapsAsync';
  const strAction = 'DelDataNodeDirectMaps';
  const strUrl = GetWebApiUrl(dataNodeDirectMap_Controller, strAction);

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
        dataNodeDirectMap_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataNodeDirectMap_ConstructorName,
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
export async function DataNodeDirectMap_DelDataNodeDirectMapsByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelDataNodeDirectMapsByCondAsync';
  const strAction = 'DelDataNodeDirectMapsByCond';
  const strUrl = GetWebApiUrl(dataNodeDirectMap_Controller, strAction);

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
        dataNodeDirectMap_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataNodeDirectMap_ConstructorName,
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
 * @param objDataNodeDirectMapEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function DataNodeDirectMap_AddNewRecordAsync(
  objDataNodeDirectMapEN: clsDataNodeDirectMapEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objDataNodeDirectMapEN);
  const strUrl = GetWebApiUrl(dataNodeDirectMap_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objDataNodeDirectMapEN, config);
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
        dataNodeDirectMap_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataNodeDirectMap_ConstructorName,
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
 * @param objDataNodeDirectMapEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function DataNodeDirectMap_AddNewRecordWithReturnKeyAsync(
  objDataNodeDirectMapEN: clsDataNodeDirectMapEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(dataNodeDirectMap_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objDataNodeDirectMapEN, config);
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
        dataNodeDirectMap_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataNodeDirectMap_ConstructorName,
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
 * @param objDataNodeDirectMapEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function DataNodeDirectMap_UpdateRecordAsync(
  objDataNodeDirectMapEN: clsDataNodeDirectMapEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objDataNodeDirectMapEN.sfUpdFldSetStr === undefined ||
    objDataNodeDirectMapEN.sfUpdFldSetStr === null ||
    objDataNodeDirectMapEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objDataNodeDirectMapEN.mId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(dataNodeDirectMap_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objDataNodeDirectMapEN, config);
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
        dataNodeDirectMap_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataNodeDirectMap_ConstructorName,
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
 * @param objDataNodeDirectMapEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function DataNodeDirectMap_UpdateWithConditionAsync(
  objDataNodeDirectMapEN: clsDataNodeDirectMapEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objDataNodeDirectMapEN.sfUpdFldSetStr === undefined ||
    objDataNodeDirectMapEN.sfUpdFldSetStr === null ||
    objDataNodeDirectMapEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objDataNodeDirectMapEN.mId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(dataNodeDirectMap_Controller, strAction);
  objDataNodeDirectMapEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objDataNodeDirectMapEN, config);
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
        dataNodeDirectMap_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataNodeDirectMap_ConstructorName,
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
export async function DataNodeDirectMap_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(dataNodeDirectMap_Controller, strAction);

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
        dataNodeDirectMap_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataNodeDirectMap_ConstructorName,
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
export async function DataNodeDirectMap_IsExistAsync(lngmId: number): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(dataNodeDirectMap_Controller, strAction);

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
        dataNodeDirectMap_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataNodeDirectMap_ConstructorName,
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
export async function DataNodeDirectMap_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(dataNodeDirectMap_Controller, strAction);

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
        dataNodeDirectMap_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataNodeDirectMap_ConstructorName,
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
export async function DataNodeDirectMap_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(dataNodeDirectMap_Controller, strAction);

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
        dataNodeDirectMap_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataNodeDirectMap_ConstructorName,
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
export function DataNodeDirectMap_GetWebApiUrl(strController: string, strAction: string): string {
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
export function DataNodeDirectMap_CheckPropertyNew(
  pobjDataNodeDirectMapEN: clsDataNodeDirectMapEN,
) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (
    null === pobjDataNodeDirectMapEN.inDataNodeId ||
    (pobjDataNodeDirectMapEN.inDataNodeId != null &&
      pobjDataNodeDirectMapEN.inDataNodeId.toString() === '') ||
    pobjDataNodeDirectMapEN.inDataNodeId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000411)字段[In数据结点Id]不能为空(In 数据结点直接映射)!(clsDataNodeDirectMapBL:CheckPropertyNew0)`,
    );
  }
  if (
    null === pobjDataNodeDirectMapEN.outDataNodeId ||
    (pobjDataNodeDirectMapEN.outDataNodeId != null &&
      pobjDataNodeDirectMapEN.outDataNodeId.toString() === '') ||
    pobjDataNodeDirectMapEN.outDataNodeId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000411)字段[Out数据结点Id]不能为空(In 数据结点直接映射)!(clsDataNodeDirectMapBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataNodeDirectMapEN.associationMappingId) === true ||
    pobjDataNodeDirectMapEN.associationMappingId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000411)字段[关联关系映射Id]不能为空(In 数据结点直接映射)!(clsDataNodeDirectMapBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataNodeDirectMapEN.funcMapModeId) === true ||
    pobjDataNodeDirectMapEN.funcMapModeId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000411)字段[函数映射模式Id]不能为空(In 数据结点直接映射)!(clsDataNodeDirectMapBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataNodeDirectMapEN.prjId) === true ||
    pobjDataNodeDirectMapEN.prjId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000411)字段[工程ID]不能为空(In 数据结点直接映射)!(clsDataNodeDirectMapBL:CheckPropertyNew0)`,
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjDataNodeDirectMapEN.associationMappingId) == false &&
    GetStrLen(pobjDataNodeDirectMapEN.associationMappingId) > 2
  ) {
    throw new Error(
      `(errid:Watl000413)字段[关联关系映射Id(associationMappingId)]的长度不能超过2(In 数据结点直接映射(DataNodeDirectMap))!值:${pobjDataNodeDirectMapEN.associationMappingId}(clsDataNodeDirectMapBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataNodeDirectMapEN.funcMapModeId) == false &&
    GetStrLen(pobjDataNodeDirectMapEN.funcMapModeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000413)字段[函数映射模式Id(funcMapModeId)]的长度不能超过2(In 数据结点直接映射(DataNodeDirectMap))!值:${pobjDataNodeDirectMapEN.funcMapModeId}(clsDataNodeDirectMapBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataNodeDirectMapEN.tabId) == false &&
    GetStrLen(pobjDataNodeDirectMapEN.tabId) > 8
  ) {
    throw new Error(
      `(errid:Watl000413)字段[表ID(tabId)]的长度不能超过8(In 数据结点直接映射(DataNodeDirectMap))!值:${pobjDataNodeDirectMapEN.tabId}(clsDataNodeDirectMapBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataNodeDirectMapEN.dnFunctionId) == false &&
    GetStrLen(pobjDataNodeDirectMapEN.dnFunctionId) > 8
  ) {
    throw new Error(
      `(errid:Watl000413)字段[DN函数Id(dnFunctionId)]的长度不能超过8(In 数据结点直接映射(DataNodeDirectMap))!值:${pobjDataNodeDirectMapEN.dnFunctionId}(clsDataNodeDirectMapBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataNodeDirectMapEN.prjId) == false &&
    GetStrLen(pobjDataNodeDirectMapEN.prjId) > 4
  ) {
    throw new Error(
      `(errid:Watl000413)字段[工程ID(prjId)]的长度不能超过4(In 数据结点直接映射(DataNodeDirectMap))!值:${pobjDataNodeDirectMapEN.prjId}(clsDataNodeDirectMapBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataNodeDirectMapEN.updDate) == false &&
    GetStrLen(pobjDataNodeDirectMapEN.updDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 数据结点直接映射(DataNodeDirectMap))!值:${pobjDataNodeDirectMapEN.updDate}(clsDataNodeDirectMapBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataNodeDirectMapEN.updUser) == false &&
    GetStrLen(pobjDataNodeDirectMapEN.updUser) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改者(updUser)]的长度不能超过20(In 数据结点直接映射(DataNodeDirectMap))!值:${pobjDataNodeDirectMapEN.updUser}(clsDataNodeDirectMapBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataNodeDirectMapEN.memo) == false &&
    GetStrLen(pobjDataNodeDirectMapEN.memo) > 1000
  ) {
    throw new Error(
      `(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In 数据结点直接映射(DataNodeDirectMap))!值:${pobjDataNodeDirectMapEN.memo}(clsDataNodeDirectMapBL:CheckPropertyNew)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjDataNodeDirectMapEN.mId &&
    undefined !== pobjDataNodeDirectMapEN.mId &&
    tzDataType.isNumber(pobjDataNodeDirectMapEN.mId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[mId(mId)]的值:[${pobjDataNodeDirectMapEN.mId}], 非法,应该为数值型(In 数据结点直接映射(DataNodeDirectMap))!(clsDataNodeDirectMapBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjDataNodeDirectMapEN.inDataNodeId &&
    undefined !== pobjDataNodeDirectMapEN.inDataNodeId &&
    tzDataType.isNumber(pobjDataNodeDirectMapEN.inDataNodeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[In数据结点Id(inDataNodeId)]的值:[${pobjDataNodeDirectMapEN.inDataNodeId}], 非法,应该为数值型(In 数据结点直接映射(DataNodeDirectMap))!(clsDataNodeDirectMapBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjDataNodeDirectMapEN.outDataNodeId &&
    undefined !== pobjDataNodeDirectMapEN.outDataNodeId &&
    tzDataType.isNumber(pobjDataNodeDirectMapEN.outDataNodeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[Out数据结点Id(outDataNodeId)]的值:[${pobjDataNodeDirectMapEN.outDataNodeId}], 非法,应该为数值型(In 数据结点直接映射(DataNodeDirectMap))!(clsDataNodeDirectMapBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataNodeDirectMapEN.associationMappingId) == false &&
    undefined !== pobjDataNodeDirectMapEN.associationMappingId &&
    tzDataType.isString(pobjDataNodeDirectMapEN.associationMappingId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[关联关系映射Id(associationMappingId)]的值:[${pobjDataNodeDirectMapEN.associationMappingId}], 非法,应该为字符型(In 数据结点直接映射(DataNodeDirectMap))!(clsDataNodeDirectMapBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataNodeDirectMapEN.funcMapModeId) == false &&
    undefined !== pobjDataNodeDirectMapEN.funcMapModeId &&
    tzDataType.isString(pobjDataNodeDirectMapEN.funcMapModeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[函数映射模式Id(funcMapModeId)]的值:[${pobjDataNodeDirectMapEN.funcMapModeId}], 非法,应该为字符型(In 数据结点直接映射(DataNodeDirectMap))!(clsDataNodeDirectMapBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataNodeDirectMapEN.tabId) == false &&
    undefined !== pobjDataNodeDirectMapEN.tabId &&
    tzDataType.isString(pobjDataNodeDirectMapEN.tabId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[表ID(tabId)]的值:[${pobjDataNodeDirectMapEN.tabId}], 非法,应该为字符型(In 数据结点直接映射(DataNodeDirectMap))!(clsDataNodeDirectMapBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataNodeDirectMapEN.dnFunctionId) == false &&
    undefined !== pobjDataNodeDirectMapEN.dnFunctionId &&
    tzDataType.isString(pobjDataNodeDirectMapEN.dnFunctionId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[DN函数Id(dnFunctionId)]的值:[${pobjDataNodeDirectMapEN.dnFunctionId}], 非法,应该为字符型(In 数据结点直接映射(DataNodeDirectMap))!(clsDataNodeDirectMapBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataNodeDirectMapEN.prjId) == false &&
    undefined !== pobjDataNodeDirectMapEN.prjId &&
    tzDataType.isString(pobjDataNodeDirectMapEN.prjId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[工程ID(prjId)]的值:[${pobjDataNodeDirectMapEN.prjId}], 非法,应该为字符型(In 数据结点直接映射(DataNodeDirectMap))!(clsDataNodeDirectMapBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataNodeDirectMapEN.updDate) == false &&
    undefined !== pobjDataNodeDirectMapEN.updDate &&
    tzDataType.isString(pobjDataNodeDirectMapEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjDataNodeDirectMapEN.updDate}], 非法,应该为字符型(In 数据结点直接映射(DataNodeDirectMap))!(clsDataNodeDirectMapBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataNodeDirectMapEN.updUser) == false &&
    undefined !== pobjDataNodeDirectMapEN.updUser &&
    tzDataType.isString(pobjDataNodeDirectMapEN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改者(updUser)]的值:[${pobjDataNodeDirectMapEN.updUser}], 非法,应该为字符型(In 数据结点直接映射(DataNodeDirectMap))!(clsDataNodeDirectMapBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataNodeDirectMapEN.memo) == false &&
    undefined !== pobjDataNodeDirectMapEN.memo &&
    tzDataType.isString(pobjDataNodeDirectMapEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[说明(memo)]的值:[${pobjDataNodeDirectMapEN.memo}], 非法,应该为字符型(In 数据结点直接映射(DataNodeDirectMap))!(clsDataNodeDirectMapBL:CheckPropertyNew0)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function DataNodeDirectMap_CheckProperty4Update(
  pobjDataNodeDirectMapEN: clsDataNodeDirectMapEN,
) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjDataNodeDirectMapEN.associationMappingId) == false &&
    GetStrLen(pobjDataNodeDirectMapEN.associationMappingId) > 2
  ) {
    throw new Error(
      `(errid:Watl000416)字段[关联关系映射Id(associationMappingId)]的长度不能超过2(In 数据结点直接映射(DataNodeDirectMap))!值:${pobjDataNodeDirectMapEN.associationMappingId}(clsDataNodeDirectMapBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataNodeDirectMapEN.funcMapModeId) == false &&
    GetStrLen(pobjDataNodeDirectMapEN.funcMapModeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000416)字段[函数映射模式Id(funcMapModeId)]的长度不能超过2(In 数据结点直接映射(DataNodeDirectMap))!值:${pobjDataNodeDirectMapEN.funcMapModeId}(clsDataNodeDirectMapBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataNodeDirectMapEN.tabId) == false &&
    GetStrLen(pobjDataNodeDirectMapEN.tabId) > 8
  ) {
    throw new Error(
      `(errid:Watl000416)字段[表ID(tabId)]的长度不能超过8(In 数据结点直接映射(DataNodeDirectMap))!值:${pobjDataNodeDirectMapEN.tabId}(clsDataNodeDirectMapBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataNodeDirectMapEN.dnFunctionId) == false &&
    GetStrLen(pobjDataNodeDirectMapEN.dnFunctionId) > 8
  ) {
    throw new Error(
      `(errid:Watl000416)字段[DN函数Id(dnFunctionId)]的长度不能超过8(In 数据结点直接映射(DataNodeDirectMap))!值:${pobjDataNodeDirectMapEN.dnFunctionId}(clsDataNodeDirectMapBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataNodeDirectMapEN.prjId) == false &&
    GetStrLen(pobjDataNodeDirectMapEN.prjId) > 4
  ) {
    throw new Error(
      `(errid:Watl000416)字段[工程ID(prjId)]的长度不能超过4(In 数据结点直接映射(DataNodeDirectMap))!值:${pobjDataNodeDirectMapEN.prjId}(clsDataNodeDirectMapBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataNodeDirectMapEN.updDate) == false &&
    GetStrLen(pobjDataNodeDirectMapEN.updDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 数据结点直接映射(DataNodeDirectMap))!值:${pobjDataNodeDirectMapEN.updDate}(clsDataNodeDirectMapBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataNodeDirectMapEN.updUser) == false &&
    GetStrLen(pobjDataNodeDirectMapEN.updUser) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改者(updUser)]的长度不能超过20(In 数据结点直接映射(DataNodeDirectMap))!值:${pobjDataNodeDirectMapEN.updUser}(clsDataNodeDirectMapBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataNodeDirectMapEN.memo) == false &&
    GetStrLen(pobjDataNodeDirectMapEN.memo) > 1000
  ) {
    throw new Error(
      `(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In 数据结点直接映射(DataNodeDirectMap))!值:${pobjDataNodeDirectMapEN.memo}(clsDataNodeDirectMapBL:CheckProperty4Update)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjDataNodeDirectMapEN.mId &&
    undefined !== pobjDataNodeDirectMapEN.mId &&
    tzDataType.isNumber(pobjDataNodeDirectMapEN.mId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[mId(mId)]的值:[${pobjDataNodeDirectMapEN.mId}], 非法,应该为数值型(In 数据结点直接映射(DataNodeDirectMap))!(clsDataNodeDirectMapBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjDataNodeDirectMapEN.inDataNodeId &&
    undefined !== pobjDataNodeDirectMapEN.inDataNodeId &&
    tzDataType.isNumber(pobjDataNodeDirectMapEN.inDataNodeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[In数据结点Id(inDataNodeId)]的值:[${pobjDataNodeDirectMapEN.inDataNodeId}], 非法,应该为数值型(In 数据结点直接映射(DataNodeDirectMap))!(clsDataNodeDirectMapBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjDataNodeDirectMapEN.outDataNodeId &&
    undefined !== pobjDataNodeDirectMapEN.outDataNodeId &&
    tzDataType.isNumber(pobjDataNodeDirectMapEN.outDataNodeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[Out数据结点Id(outDataNodeId)]的值:[${pobjDataNodeDirectMapEN.outDataNodeId}], 非法,应该为数值型(In 数据结点直接映射(DataNodeDirectMap))!(clsDataNodeDirectMapBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataNodeDirectMapEN.associationMappingId) == false &&
    undefined !== pobjDataNodeDirectMapEN.associationMappingId &&
    tzDataType.isString(pobjDataNodeDirectMapEN.associationMappingId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[关联关系映射Id(associationMappingId)]的值:[${pobjDataNodeDirectMapEN.associationMappingId}], 非法,应该为字符型(In 数据结点直接映射(DataNodeDirectMap))!(clsDataNodeDirectMapBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataNodeDirectMapEN.funcMapModeId) == false &&
    undefined !== pobjDataNodeDirectMapEN.funcMapModeId &&
    tzDataType.isString(pobjDataNodeDirectMapEN.funcMapModeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[函数映射模式Id(funcMapModeId)]的值:[${pobjDataNodeDirectMapEN.funcMapModeId}], 非法,应该为字符型(In 数据结点直接映射(DataNodeDirectMap))!(clsDataNodeDirectMapBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataNodeDirectMapEN.tabId) == false &&
    undefined !== pobjDataNodeDirectMapEN.tabId &&
    tzDataType.isString(pobjDataNodeDirectMapEN.tabId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[表ID(tabId)]的值:[${pobjDataNodeDirectMapEN.tabId}], 非法,应该为字符型(In 数据结点直接映射(DataNodeDirectMap))!(clsDataNodeDirectMapBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataNodeDirectMapEN.dnFunctionId) == false &&
    undefined !== pobjDataNodeDirectMapEN.dnFunctionId &&
    tzDataType.isString(pobjDataNodeDirectMapEN.dnFunctionId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[DN函数Id(dnFunctionId)]的值:[${pobjDataNodeDirectMapEN.dnFunctionId}], 非法,应该为字符型(In 数据结点直接映射(DataNodeDirectMap))!(clsDataNodeDirectMapBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataNodeDirectMapEN.prjId) == false &&
    undefined !== pobjDataNodeDirectMapEN.prjId &&
    tzDataType.isString(pobjDataNodeDirectMapEN.prjId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[工程ID(prjId)]的值:[${pobjDataNodeDirectMapEN.prjId}], 非法,应该为字符型(In 数据结点直接映射(DataNodeDirectMap))!(clsDataNodeDirectMapBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataNodeDirectMapEN.updDate) == false &&
    undefined !== pobjDataNodeDirectMapEN.updDate &&
    tzDataType.isString(pobjDataNodeDirectMapEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjDataNodeDirectMapEN.updDate}], 非法,应该为字符型(In 数据结点直接映射(DataNodeDirectMap))!(clsDataNodeDirectMapBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataNodeDirectMapEN.updUser) == false &&
    undefined !== pobjDataNodeDirectMapEN.updUser &&
    tzDataType.isString(pobjDataNodeDirectMapEN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改者(updUser)]的值:[${pobjDataNodeDirectMapEN.updUser}], 非法,应该为字符型(In 数据结点直接映射(DataNodeDirectMap))!(clsDataNodeDirectMapBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataNodeDirectMapEN.memo) == false &&
    undefined !== pobjDataNodeDirectMapEN.memo &&
    tzDataType.isString(pobjDataNodeDirectMapEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[说明(memo)]的值:[${pobjDataNodeDirectMapEN.memo}], 非法,应该为字符型(In 数据结点直接映射(DataNodeDirectMap))!(clsDataNodeDirectMapBL:CheckProperty4Update)`,
    );
  }
  //检查主键是否为Null或者空!
  if (
    null === pobjDataNodeDirectMapEN.mId ||
    (pobjDataNodeDirectMapEN.mId != null && pobjDataNodeDirectMapEN.mId.toString() === '')
  ) {
    throw new Error(
      `(errid:Watl000064)字段[mId]不能为空(In 数据结点直接映射)!(clsDataNodeDirectMapBL:CheckProperty4Update)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2024-10-17
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function DataNodeDirectMap_GetJSONStrByObj(
  pobjDataNodeDirectMapEN: clsDataNodeDirectMapEN,
): string {
  pobjDataNodeDirectMapEN.sfUpdFldSetStr = pobjDataNodeDirectMapEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjDataNodeDirectMapEN);
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
export function DataNodeDirectMap_GetObjLstByJSONStr(
  strJSON: string,
): Array<clsDataNodeDirectMapEN> {
  let arrDataNodeDirectMapObjLst = new Array<clsDataNodeDirectMapEN>();
  if (strJSON === '') {
    return arrDataNodeDirectMapObjLst;
  }
  try {
    arrDataNodeDirectMapObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrDataNodeDirectMapObjLst;
  }
  return arrDataNodeDirectMapObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2024-10-17
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrDataNodeDirectMapObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function DataNodeDirectMap_GetObjLstByJSONObjLst(
  arrDataNodeDirectMapObjLstS: Array<clsDataNodeDirectMapEN>,
): Array<clsDataNodeDirectMapEN> {
  const arrDataNodeDirectMapObjLst = new Array<clsDataNodeDirectMapEN>();
  for (const objInFor of arrDataNodeDirectMapObjLstS) {
    const obj1 = DataNodeDirectMap_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrDataNodeDirectMapObjLst.push(obj1);
  }
  return arrDataNodeDirectMapObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2024-10-17
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function DataNodeDirectMap_GetObjByJSONStr(strJSON: string): clsDataNodeDirectMapEN {
  let pobjDataNodeDirectMapEN = new clsDataNodeDirectMapEN();
  if (strJSON === '') {
    return pobjDataNodeDirectMapEN;
  }
  try {
    pobjDataNodeDirectMapEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjDataNodeDirectMapEN;
  }
  return pobjDataNodeDirectMapEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function DataNodeDirectMap_GetCombineCondition(
  objDataNodeDirectMapCond: clsDataNodeDirectMapEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objDataNodeDirectMapCond.dicFldComparisonOp,
      clsDataNodeDirectMapEN.con_mId,
    ) == true
  ) {
    const strComparisonOpmId: string =
      objDataNodeDirectMapCond.dicFldComparisonOp[clsDataNodeDirectMapEN.con_mId];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsDataNodeDirectMapEN.con_mId,
      objDataNodeDirectMapCond.mId,
      strComparisonOpmId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDataNodeDirectMapCond.dicFldComparisonOp,
      clsDataNodeDirectMapEN.con_InDataNodeId,
    ) == true
  ) {
    const strComparisonOpInDataNodeId: string =
      objDataNodeDirectMapCond.dicFldComparisonOp[clsDataNodeDirectMapEN.con_InDataNodeId];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsDataNodeDirectMapEN.con_InDataNodeId,
      objDataNodeDirectMapCond.inDataNodeId,
      strComparisonOpInDataNodeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDataNodeDirectMapCond.dicFldComparisonOp,
      clsDataNodeDirectMapEN.con_OutDataNodeId,
    ) == true
  ) {
    const strComparisonOpOutDataNodeId: string =
      objDataNodeDirectMapCond.dicFldComparisonOp[clsDataNodeDirectMapEN.con_OutDataNodeId];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsDataNodeDirectMapEN.con_OutDataNodeId,
      objDataNodeDirectMapCond.outDataNodeId,
      strComparisonOpOutDataNodeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDataNodeDirectMapCond.dicFldComparisonOp,
      clsDataNodeDirectMapEN.con_AssociationMappingId,
    ) == true
  ) {
    const strComparisonOpAssociationMappingId: string =
      objDataNodeDirectMapCond.dicFldComparisonOp[clsDataNodeDirectMapEN.con_AssociationMappingId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDataNodeDirectMapEN.con_AssociationMappingId,
      objDataNodeDirectMapCond.associationMappingId,
      strComparisonOpAssociationMappingId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDataNodeDirectMapCond.dicFldComparisonOp,
      clsDataNodeDirectMapEN.con_FuncMapModeId,
    ) == true
  ) {
    const strComparisonOpFuncMapModeId: string =
      objDataNodeDirectMapCond.dicFldComparisonOp[clsDataNodeDirectMapEN.con_FuncMapModeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDataNodeDirectMapEN.con_FuncMapModeId,
      objDataNodeDirectMapCond.funcMapModeId,
      strComparisonOpFuncMapModeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDataNodeDirectMapCond.dicFldComparisonOp,
      clsDataNodeDirectMapEN.con_TabId,
    ) == true
  ) {
    const strComparisonOpTabId: string =
      objDataNodeDirectMapCond.dicFldComparisonOp[clsDataNodeDirectMapEN.con_TabId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDataNodeDirectMapEN.con_TabId,
      objDataNodeDirectMapCond.tabId,
      strComparisonOpTabId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDataNodeDirectMapCond.dicFldComparisonOp,
      clsDataNodeDirectMapEN.con_DnFunctionId,
    ) == true
  ) {
    const strComparisonOpDnFunctionId: string =
      objDataNodeDirectMapCond.dicFldComparisonOp[clsDataNodeDirectMapEN.con_DnFunctionId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDataNodeDirectMapEN.con_DnFunctionId,
      objDataNodeDirectMapCond.dnFunctionId,
      strComparisonOpDnFunctionId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDataNodeDirectMapCond.dicFldComparisonOp,
      clsDataNodeDirectMapEN.con_PrjId,
    ) == true
  ) {
    const strComparisonOpPrjId: string =
      objDataNodeDirectMapCond.dicFldComparisonOp[clsDataNodeDirectMapEN.con_PrjId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDataNodeDirectMapEN.con_PrjId,
      objDataNodeDirectMapCond.prjId,
      strComparisonOpPrjId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDataNodeDirectMapCond.dicFldComparisonOp,
      clsDataNodeDirectMapEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objDataNodeDirectMapCond.dicFldComparisonOp[clsDataNodeDirectMapEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDataNodeDirectMapEN.con_UpdDate,
      objDataNodeDirectMapCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDataNodeDirectMapCond.dicFldComparisonOp,
      clsDataNodeDirectMapEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objDataNodeDirectMapCond.dicFldComparisonOp[clsDataNodeDirectMapEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDataNodeDirectMapEN.con_UpdUser,
      objDataNodeDirectMapCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDataNodeDirectMapCond.dicFldComparisonOp,
      clsDataNodeDirectMapEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objDataNodeDirectMapCond.dicFldComparisonOp[clsDataNodeDirectMapEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDataNodeDirectMapEN.con_Memo,
      objDataNodeDirectMapCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--DataNodeDirectMap(数据结点直接映射),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param lngInDataNodeId: In数据结点Id(要求唯一的字段)
 * @param lngOutDataNodeId: Out数据结点Id(要求唯一的字段)
 * @param strPrjId: 工程ID(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function DataNodeDirectMap_GetUniCondStr(
  objDataNodeDirectMapEN: clsDataNodeDirectMapEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and InDataNodeId = '{0}'", objDataNodeDirectMapEN.inDataNodeId);
  strWhereCond += Format(" and OutDataNodeId = '{0}'", objDataNodeDirectMapEN.outDataNodeId);
  strWhereCond += Format(" and PrjId = '{0}'", objDataNodeDirectMapEN.prjId);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--DataNodeDirectMap(数据结点直接映射),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param lngInDataNodeId: In数据结点Id(要求唯一的字段)
 * @param lngOutDataNodeId: Out数据结点Id(要求唯一的字段)
 * @param strPrjId: 工程ID(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function DataNodeDirectMap_GetUniCondStr4Update(
  objDataNodeDirectMapEN: clsDataNodeDirectMapEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and mId <> '{0}'", objDataNodeDirectMapEN.mId);
  strWhereCond += Format(" and InDataNodeId = '{0}'", objDataNodeDirectMapEN.inDataNodeId);
  strWhereCond += Format(" and OutDataNodeId = '{0}'", objDataNodeDirectMapEN.outDataNodeId);
  strWhereCond += Format(" and PrjId = '{0}'", objDataNodeDirectMapEN.prjId);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objDataNodeDirectMapENS:源对象
 * @param objDataNodeDirectMapENT:目标对象
 */
export function DataNodeDirectMap_GetObjFromJsonObj(
  objDataNodeDirectMapENS: clsDataNodeDirectMapEN,
): clsDataNodeDirectMapEN {
  const objDataNodeDirectMapENT: clsDataNodeDirectMapEN = new clsDataNodeDirectMapEN();
  ObjectAssign(objDataNodeDirectMapENT, objDataNodeDirectMapENS);
  return objDataNodeDirectMapENT;
}
