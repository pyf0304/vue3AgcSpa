/**
 * 类名:clsDataNodeCmPrjIdRelaWApi
 * 表名:DataNodeCmPrjIdRela(00050618)
 * 版本:2024.10.15.1(服务器:WIN-SRV103-116)
 * 日期:2024/10/17 00:06:57
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
 * 数据结点CmPrjId关系(DataNodeCmPrjIdRela)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2024年10月17日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty, GetStrLen, tzDataType, Format } from '@/ts/PubFun/clsString';
import { clsDataNodeCmPrjIdRelaEN } from '@/ts/L0Entity/AIModule/clsDataNodeCmPrjIdRelaEN';
import { GetExceptionStr, myShowErrorMsg, ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const dataNodeCmPrjIdRela_Controller = 'DataNodeCmPrjIdRelaApi';
export const dataNodeCmPrjIdRela_ConstructorName = 'dataNodeCmPrjIdRela';

/**
 * 把多关键字值分解为单独关键字的值,并且以对象形式返回
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strKeyLst:多关键字值
 * @returns 分解后的单独关键字值对象
 **/
export function DataNodeCmPrjIdRela_SplitKeyLst(strKeyLst: string) {
  const arrKey = strKeyLst.split('|');
  if (arrKey.length != 2) {
    const strMsg = '请选择需要修改的记录!';
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
  const objKeyLst = {
    cmPrjId: arrKey[0],
    dataNodeId: Number(arrKey[1]),
  };
  if (IsNullOrEmpty(objKeyLst.cmPrjId) == true) {
    const strMsg = '关键字段(cmPrjId)值不能为空!';
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
  if (objKeyLst.dataNodeId == 0) {
    const strMsg = '关键字段(dataNodeId)值不能为空!';
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
  return objKeyLst;
}
/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strCmPrjId:关键字
 * @returns 对象
 **/
export async function DataNodeCmPrjIdRela_GetObjByKeyLstAsync(
  strCmPrjId: string,
  lngDataNodeId: number,
): Promise<clsDataNodeCmPrjIdRelaEN | null> {
  const strThisFuncName = 'GetObjByKeyLstAsync';

  if (IsNullOrEmpty(strCmPrjId) == true) {
    const strMsg = Format(
      '参数:[strCmPrjId]不能为空!(In clsDataNodeCmPrjIdRelaWApi.GetObjByKeyLstAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strCmPrjId.length != 6) {
    const strMsg = Format(
      '缓存分类变量:[strCmPrjId]的长度:[{0}]不正确!(clsDataNodeCmPrjIdRelaWApi.GetObjByKeyLstAsync)',
      strCmPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (lngDataNodeId == 0) {
    const strMsg = Format(
      '参数:[lngDataNodeId]不能为空!(In clsDataNodeCmPrjIdRelaWApi.GetObjByKeyLstAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByKeyLst';
  const strUrl = GetWebApiUrl(dataNodeCmPrjIdRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strCmPrjId,
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
      const objDataNodeCmPrjIdRela = DataNodeCmPrjIdRela_GetObjFromJsonObj(returnObj);
      return objDataNodeCmPrjIdRela;
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
        dataNodeCmPrjIdRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataNodeCmPrjIdRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[GetObjByKeyLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )
//该表没有使用Cache,不需要生成[GetObjByKeyLstlocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[UpdateObjInLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache
//该表没有使用Cache,不需要生成[GetNameByCmPrjIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
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
export function DataNodeCmPrjIdRela_SortFunDefa(
  a: clsDataNodeCmPrjIdRelaEN,
  b: clsDataNodeCmPrjIdRelaEN,
): number {
  return a.cmPrjId.localeCompare(b.cmPrjId);
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
export function DataNodeCmPrjIdRela_SortFunDefa2Fld(
  a: clsDataNodeCmPrjIdRelaEN,
  b: clsDataNodeCmPrjIdRelaEN,
): number {
  if (a.updDate == b.updDate) return a.updUser.localeCompare(b.updUser);
  else return a.updDate.localeCompare(b.updDate);
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
export function DataNodeCmPrjIdRela_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsDataNodeCmPrjIdRelaEN.con_CmPrjId:
        return (a: clsDataNodeCmPrjIdRelaEN, b: clsDataNodeCmPrjIdRelaEN) => {
          return a.cmPrjId.localeCompare(b.cmPrjId);
        };
      case clsDataNodeCmPrjIdRelaEN.con_DataNodeId:
        return (a: clsDataNodeCmPrjIdRelaEN, b: clsDataNodeCmPrjIdRelaEN) => {
          return a.dataNodeId - b.dataNodeId;
        };
      case clsDataNodeCmPrjIdRelaEN.con_UpdDate:
        return (a: clsDataNodeCmPrjIdRelaEN, b: clsDataNodeCmPrjIdRelaEN) => {
          return a.updDate.localeCompare(b.updDate);
        };
      case clsDataNodeCmPrjIdRelaEN.con_UpdUser:
        return (a: clsDataNodeCmPrjIdRelaEN, b: clsDataNodeCmPrjIdRelaEN) => {
          return a.updUser.localeCompare(b.updUser);
        };
      case clsDataNodeCmPrjIdRelaEN.con_Memo:
        return (a: clsDataNodeCmPrjIdRelaEN, b: clsDataNodeCmPrjIdRelaEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[DataNodeCmPrjIdRela]中不存在!(in ${dataNodeCmPrjIdRela_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsDataNodeCmPrjIdRelaEN.con_CmPrjId:
        return (a: clsDataNodeCmPrjIdRelaEN, b: clsDataNodeCmPrjIdRelaEN) => {
          return b.cmPrjId.localeCompare(a.cmPrjId);
        };
      case clsDataNodeCmPrjIdRelaEN.con_DataNodeId:
        return (a: clsDataNodeCmPrjIdRelaEN, b: clsDataNodeCmPrjIdRelaEN) => {
          return b.dataNodeId - a.dataNodeId;
        };
      case clsDataNodeCmPrjIdRelaEN.con_UpdDate:
        return (a: clsDataNodeCmPrjIdRelaEN, b: clsDataNodeCmPrjIdRelaEN) => {
          return b.updDate.localeCompare(a.updDate);
        };
      case clsDataNodeCmPrjIdRelaEN.con_UpdUser:
        return (a: clsDataNodeCmPrjIdRelaEN, b: clsDataNodeCmPrjIdRelaEN) => {
          return b.updUser.localeCompare(a.updUser);
        };
      case clsDataNodeCmPrjIdRelaEN.con_Memo:
        return (a: clsDataNodeCmPrjIdRelaEN, b: clsDataNodeCmPrjIdRelaEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[DataNodeCmPrjIdRela]中不存在!(in ${dataNodeCmPrjIdRela_ConstructorName}.${strThisFuncName})`;
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
export async function DataNodeCmPrjIdRela_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsDataNodeCmPrjIdRelaEN.con_CmPrjId:
      return (obj: clsDataNodeCmPrjIdRelaEN) => {
        return obj.cmPrjId === value;
      };
    case clsDataNodeCmPrjIdRelaEN.con_DataNodeId:
      return (obj: clsDataNodeCmPrjIdRelaEN) => {
        return obj.dataNodeId === value;
      };
    case clsDataNodeCmPrjIdRelaEN.con_UpdDate:
      return (obj: clsDataNodeCmPrjIdRelaEN) => {
        return obj.updDate === value;
      };
    case clsDataNodeCmPrjIdRelaEN.con_UpdUser:
      return (obj: clsDataNodeCmPrjIdRelaEN) => {
        return obj.updUser === value;
      };
    case clsDataNodeCmPrjIdRelaEN.con_Memo:
      return (obj: clsDataNodeCmPrjIdRelaEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[DataNodeCmPrjIdRela]中不存在!(in ${dataNodeCmPrjIdRela_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}
//该表没有使用Cache,不需要生成[DataNodeCmPrjIdRela__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function DataNodeCmPrjIdRela_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(dataNodeCmPrjIdRela_Controller, strAction);

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
        dataNodeCmPrjIdRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataNodeCmPrjIdRela_ConstructorName,
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
export async function DataNodeCmPrjIdRela_GetFldValueAsync(
  strFldName: string,
  strWhereCond: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetFldValueAsync';
  const strAction = 'GetFldValue';
  const strUrl = GetWebApiUrl(dataNodeCmPrjIdRela_Controller, strAction);

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
        dataNodeCmPrjIdRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataNodeCmPrjIdRela_ConstructorName,
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
export async function DataNodeCmPrjIdRela_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(dataNodeCmPrjIdRela_Controller, strAction);

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
        dataNodeCmPrjIdRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataNodeCmPrjIdRela_ConstructorName,
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
export async function DataNodeCmPrjIdRela_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsDataNodeCmPrjIdRelaEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(dataNodeCmPrjIdRela_Controller, strAction);

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
      const objDataNodeCmPrjIdRela = DataNodeCmPrjIdRela_GetObjFromJsonObj(returnObj);
      return objDataNodeCmPrjIdRela;
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
        dataNodeCmPrjIdRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataNodeCmPrjIdRela_ConstructorName,
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
export async function DataNodeCmPrjIdRela_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsDataNodeCmPrjIdRelaEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(dataNodeCmPrjIdRela_Controller, strAction);

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
          dataNodeCmPrjIdRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = DataNodeCmPrjIdRela_GetObjLstByJSONObjLst(returnObjLst);
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
        dataNodeCmPrjIdRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataNodeCmPrjIdRela_ConstructorName,
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
//该表没有使用Cache,不需要生成[GetObjLstByCmPrjIdLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

/**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export async function DataNodeCmPrjIdRela_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsDataNodeCmPrjIdRelaEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(dataNodeCmPrjIdRela_Controller, strAction);

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
          dataNodeCmPrjIdRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = DataNodeCmPrjIdRela_GetObjLstByJSONObjLst(returnObjLst);
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
        dataNodeCmPrjIdRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataNodeCmPrjIdRela_ConstructorName,
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
export async function DataNodeCmPrjIdRela_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsDataNodeCmPrjIdRelaEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(dataNodeCmPrjIdRela_Controller, strAction);

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
          dataNodeCmPrjIdRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = DataNodeCmPrjIdRela_GetObjLstByJSONObjLst(returnObjLst);
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
        dataNodeCmPrjIdRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataNodeCmPrjIdRela_ConstructorName,
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
export async function DataNodeCmPrjIdRela_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsDataNodeCmPrjIdRelaEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsDataNodeCmPrjIdRelaEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(dataNodeCmPrjIdRela_Controller, strAction);

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
          dataNodeCmPrjIdRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = DataNodeCmPrjIdRela_GetObjLstByJSONObjLst(returnObjLst);
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
        dataNodeCmPrjIdRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataNodeCmPrjIdRela_ConstructorName,
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
 * @param strCmPrjId,lngDataNodeId:关键字列表
 * @returns 获取删除的结果
 **/
export async function DataNodeCmPrjIdRela_DelRecKeyLstAsync(
  strCmPrjId: string,
  lngDataNodeId: number,
): Promise<number> {
  const strThisFuncName = 'DelRecKeyLstAsync';
  const strAction = 'DelRecKeyLst';
  const strUrl = GetWebApiUrl(dataNodeCmPrjIdRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strCmPrjId,
      lngDataNodeId,
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
        dataNodeCmPrjIdRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataNodeCmPrjIdRela_ConstructorName,
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
 * @param arrKeyLsts:关键字列表, 关键字是多个字段的组合
 * @returns 实际删除记录的个数
 **/
export async function DataNodeCmPrjIdRela_DelRecKeyLstsAsync(
  arrKeyLsts: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelRecKeyLstsAsync';
  const strAction = 'DelRecKeyLsts';
  const strUrl = GetWebApiUrl(dataNodeCmPrjIdRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrKeyLsts, config);
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
        dataNodeCmPrjIdRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataNodeCmPrjIdRela_ConstructorName,
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
export async function DataNodeCmPrjIdRela_DelDataNodeCmPrjIdRelasByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelDataNodeCmPrjIdRelasByCondAsync';
  const strAction = 'DelDataNodeCmPrjIdRelasByCond';
  const strUrl = GetWebApiUrl(dataNodeCmPrjIdRela_Controller, strAction);

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
        dataNodeCmPrjIdRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataNodeCmPrjIdRela_ConstructorName,
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
 * @param objDataNodeCmPrjIdRelaEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function DataNodeCmPrjIdRela_AddNewRecordAsync(
  objDataNodeCmPrjIdRelaEN: clsDataNodeCmPrjIdRelaEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  if (objDataNodeCmPrjIdRelaEN.cmPrjId === null || objDataNodeCmPrjIdRelaEN.cmPrjId === '') {
    const strMsg = '需要的对象的关键字为空,不能添加!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objDataNodeCmPrjIdRelaEN);
  const strUrl = GetWebApiUrl(dataNodeCmPrjIdRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objDataNodeCmPrjIdRelaEN, config);
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
        dataNodeCmPrjIdRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataNodeCmPrjIdRela_ConstructorName,
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
 * @param objDataNodeCmPrjIdRelaEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function DataNodeCmPrjIdRela_AddNewRecordWithMaxIdAsync(
  objDataNodeCmPrjIdRelaEN: clsDataNodeCmPrjIdRelaEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(dataNodeCmPrjIdRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objDataNodeCmPrjIdRelaEN, config);
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
        dataNodeCmPrjIdRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataNodeCmPrjIdRela_ConstructorName,
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
 * @param objDataNodeCmPrjIdRelaEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function DataNodeCmPrjIdRela_AddNewRecordWithReturnKeyAsync(
  objDataNodeCmPrjIdRelaEN: clsDataNodeCmPrjIdRelaEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(dataNodeCmPrjIdRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objDataNodeCmPrjIdRelaEN, config);
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
        dataNodeCmPrjIdRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataNodeCmPrjIdRela_ConstructorName,
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
 * @param objDataNodeCmPrjIdRelaEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function DataNodeCmPrjIdRela_UpdateRecordAsync(
  objDataNodeCmPrjIdRelaEN: clsDataNodeCmPrjIdRelaEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objDataNodeCmPrjIdRelaEN.sfUpdFldSetStr === undefined ||
    objDataNodeCmPrjIdRelaEN.sfUpdFldSetStr === null ||
    objDataNodeCmPrjIdRelaEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objDataNodeCmPrjIdRelaEN.cmPrjId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(dataNodeCmPrjIdRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objDataNodeCmPrjIdRelaEN, config);
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
        dataNodeCmPrjIdRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataNodeCmPrjIdRela_ConstructorName,
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
 * @param objDataNodeCmPrjIdRelaEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function DataNodeCmPrjIdRela_UpdateWithConditionAsync(
  objDataNodeCmPrjIdRelaEN: clsDataNodeCmPrjIdRelaEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objDataNodeCmPrjIdRelaEN.sfUpdFldSetStr === undefined ||
    objDataNodeCmPrjIdRelaEN.sfUpdFldSetStr === null ||
    objDataNodeCmPrjIdRelaEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objDataNodeCmPrjIdRelaEN.cmPrjId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(dataNodeCmPrjIdRela_Controller, strAction);
  objDataNodeCmPrjIdRelaEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objDataNodeCmPrjIdRelaEN, config);
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
        dataNodeCmPrjIdRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataNodeCmPrjIdRela_ConstructorName,
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
export async function DataNodeCmPrjIdRela_IsExistRecordAsync(
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(dataNodeCmPrjIdRela_Controller, strAction);

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
        dataNodeCmPrjIdRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataNodeCmPrjIdRela_ConstructorName,
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
 * @param strCmPrjId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function DataNodeCmPrjIdRela_IsExistAsync(
  strCmPrjId: string,
  lngDataNodeId: number,
): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(dataNodeCmPrjIdRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strCmPrjId,
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
        dataNodeCmPrjIdRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataNodeCmPrjIdRela_ConstructorName,
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
export async function DataNodeCmPrjIdRela_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(dataNodeCmPrjIdRela_Controller, strAction);

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
        dataNodeCmPrjIdRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataNodeCmPrjIdRela_ConstructorName,
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
export async function DataNodeCmPrjIdRela_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(dataNodeCmPrjIdRela_Controller, strAction);

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
        dataNodeCmPrjIdRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataNodeCmPrjIdRela_ConstructorName,
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
export function DataNodeCmPrjIdRela_GetWebApiUrl(strController: string, strAction: string): string {
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
export function DataNodeCmPrjIdRela_CheckPropertyNew(
  pobjDataNodeCmPrjIdRelaEN: clsDataNodeCmPrjIdRelaEN,
) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjDataNodeCmPrjIdRelaEN.updUser) === true) {
    throw new Error(
      `(errid:Watl000411)字段[修改者]不能为空(In 数据结点CmPrjId关系)!(clsDataNodeCmPrjIdRelaBL:CheckPropertyNew0)`,
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjDataNodeCmPrjIdRelaEN.cmPrjId) == false &&
    GetStrLen(pobjDataNodeCmPrjIdRelaEN.cmPrjId) > 6
  ) {
    throw new Error(
      `(errid:Watl000413)字段[CM工程Id(cmPrjId)]的长度不能超过6(In 数据结点CmPrjId关系(DataNodeCmPrjIdRela))!值:${pobjDataNodeCmPrjIdRelaEN.cmPrjId}(clsDataNodeCmPrjIdRelaBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataNodeCmPrjIdRelaEN.updDate) == false &&
    GetStrLen(pobjDataNodeCmPrjIdRelaEN.updDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 数据结点CmPrjId关系(DataNodeCmPrjIdRela))!值:${pobjDataNodeCmPrjIdRelaEN.updDate}(clsDataNodeCmPrjIdRelaBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataNodeCmPrjIdRelaEN.updUser) == false &&
    GetStrLen(pobjDataNodeCmPrjIdRelaEN.updUser) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改者(updUser)]的长度不能超过20(In 数据结点CmPrjId关系(DataNodeCmPrjIdRela))!值:${pobjDataNodeCmPrjIdRelaEN.updUser}(clsDataNodeCmPrjIdRelaBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataNodeCmPrjIdRelaEN.memo) == false &&
    GetStrLen(pobjDataNodeCmPrjIdRelaEN.memo) > 1000
  ) {
    throw new Error(
      `(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In 数据结点CmPrjId关系(DataNodeCmPrjIdRela))!值:${pobjDataNodeCmPrjIdRelaEN.memo}(clsDataNodeCmPrjIdRelaBL:CheckPropertyNew)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjDataNodeCmPrjIdRelaEN.cmPrjId) == false &&
    undefined !== pobjDataNodeCmPrjIdRelaEN.cmPrjId &&
    tzDataType.isString(pobjDataNodeCmPrjIdRelaEN.cmPrjId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[CM工程Id(cmPrjId)]的值:[${pobjDataNodeCmPrjIdRelaEN.cmPrjId}], 非法,应该为字符型(In 数据结点CmPrjId关系(DataNodeCmPrjIdRela))!(clsDataNodeCmPrjIdRelaBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjDataNodeCmPrjIdRelaEN.dataNodeId &&
    undefined !== pobjDataNodeCmPrjIdRelaEN.dataNodeId &&
    tzDataType.isNumber(pobjDataNodeCmPrjIdRelaEN.dataNodeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[数据结点Id(dataNodeId)]的值:[${pobjDataNodeCmPrjIdRelaEN.dataNodeId}], 非法,应该为数值型(In 数据结点CmPrjId关系(DataNodeCmPrjIdRela))!(clsDataNodeCmPrjIdRelaBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataNodeCmPrjIdRelaEN.updDate) == false &&
    undefined !== pobjDataNodeCmPrjIdRelaEN.updDate &&
    tzDataType.isString(pobjDataNodeCmPrjIdRelaEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjDataNodeCmPrjIdRelaEN.updDate}], 非法,应该为字符型(In 数据结点CmPrjId关系(DataNodeCmPrjIdRela))!(clsDataNodeCmPrjIdRelaBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataNodeCmPrjIdRelaEN.updUser) == false &&
    undefined !== pobjDataNodeCmPrjIdRelaEN.updUser &&
    tzDataType.isString(pobjDataNodeCmPrjIdRelaEN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改者(updUser)]的值:[${pobjDataNodeCmPrjIdRelaEN.updUser}], 非法,应该为字符型(In 数据结点CmPrjId关系(DataNodeCmPrjIdRela))!(clsDataNodeCmPrjIdRelaBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataNodeCmPrjIdRelaEN.memo) == false &&
    undefined !== pobjDataNodeCmPrjIdRelaEN.memo &&
    tzDataType.isString(pobjDataNodeCmPrjIdRelaEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[说明(memo)]的值:[${pobjDataNodeCmPrjIdRelaEN.memo}], 非法,应该为字符型(In 数据结点CmPrjId关系(DataNodeCmPrjIdRela))!(clsDataNodeCmPrjIdRelaBL:CheckPropertyNew0)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function DataNodeCmPrjIdRela_CheckProperty4Update(
  pobjDataNodeCmPrjIdRelaEN: clsDataNodeCmPrjIdRelaEN,
) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjDataNodeCmPrjIdRelaEN.cmPrjId) == false &&
    GetStrLen(pobjDataNodeCmPrjIdRelaEN.cmPrjId) > 6
  ) {
    throw new Error(
      `(errid:Watl000416)字段[CM工程Id(cmPrjId)]的长度不能超过6(In 数据结点CmPrjId关系(DataNodeCmPrjIdRela))!值:${pobjDataNodeCmPrjIdRelaEN.cmPrjId}(clsDataNodeCmPrjIdRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataNodeCmPrjIdRelaEN.updDate) == false &&
    GetStrLen(pobjDataNodeCmPrjIdRelaEN.updDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 数据结点CmPrjId关系(DataNodeCmPrjIdRela))!值:${pobjDataNodeCmPrjIdRelaEN.updDate}(clsDataNodeCmPrjIdRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataNodeCmPrjIdRelaEN.updUser) == false &&
    GetStrLen(pobjDataNodeCmPrjIdRelaEN.updUser) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改者(updUser)]的长度不能超过20(In 数据结点CmPrjId关系(DataNodeCmPrjIdRela))!值:${pobjDataNodeCmPrjIdRelaEN.updUser}(clsDataNodeCmPrjIdRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataNodeCmPrjIdRelaEN.memo) == false &&
    GetStrLen(pobjDataNodeCmPrjIdRelaEN.memo) > 1000
  ) {
    throw new Error(
      `(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In 数据结点CmPrjId关系(DataNodeCmPrjIdRela))!值:${pobjDataNodeCmPrjIdRelaEN.memo}(clsDataNodeCmPrjIdRelaBL:CheckProperty4Update)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjDataNodeCmPrjIdRelaEN.cmPrjId) == false &&
    undefined !== pobjDataNodeCmPrjIdRelaEN.cmPrjId &&
    tzDataType.isString(pobjDataNodeCmPrjIdRelaEN.cmPrjId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[CM工程Id(cmPrjId)]的值:[${pobjDataNodeCmPrjIdRelaEN.cmPrjId}], 非法,应该为字符型(In 数据结点CmPrjId关系(DataNodeCmPrjIdRela))!(clsDataNodeCmPrjIdRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjDataNodeCmPrjIdRelaEN.dataNodeId &&
    undefined !== pobjDataNodeCmPrjIdRelaEN.dataNodeId &&
    tzDataType.isNumber(pobjDataNodeCmPrjIdRelaEN.dataNodeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[数据结点Id(dataNodeId)]的值:[${pobjDataNodeCmPrjIdRelaEN.dataNodeId}], 非法,应该为数值型(In 数据结点CmPrjId关系(DataNodeCmPrjIdRela))!(clsDataNodeCmPrjIdRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataNodeCmPrjIdRelaEN.updDate) == false &&
    undefined !== pobjDataNodeCmPrjIdRelaEN.updDate &&
    tzDataType.isString(pobjDataNodeCmPrjIdRelaEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjDataNodeCmPrjIdRelaEN.updDate}], 非法,应该为字符型(In 数据结点CmPrjId关系(DataNodeCmPrjIdRela))!(clsDataNodeCmPrjIdRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataNodeCmPrjIdRelaEN.updUser) == false &&
    undefined !== pobjDataNodeCmPrjIdRelaEN.updUser &&
    tzDataType.isString(pobjDataNodeCmPrjIdRelaEN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改者(updUser)]的值:[${pobjDataNodeCmPrjIdRelaEN.updUser}], 非法,应该为字符型(In 数据结点CmPrjId关系(DataNodeCmPrjIdRela))!(clsDataNodeCmPrjIdRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDataNodeCmPrjIdRelaEN.memo) == false &&
    undefined !== pobjDataNodeCmPrjIdRelaEN.memo &&
    tzDataType.isString(pobjDataNodeCmPrjIdRelaEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[说明(memo)]的值:[${pobjDataNodeCmPrjIdRelaEN.memo}], 非法,应该为字符型(In 数据结点CmPrjId关系(DataNodeCmPrjIdRela))!(clsDataNodeCmPrjIdRelaBL:CheckProperty4Update)`,
    );
  }
  //检查主键是否为Null或者空!
  if (
    IsNullOrEmpty(pobjDataNodeCmPrjIdRelaEN.cmPrjId) === true ||
    pobjDataNodeCmPrjIdRelaEN.cmPrjId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000064)字段[CM工程Id]不能为空(In 数据结点CmPrjId关系)!(clsDataNodeCmPrjIdRelaBL:CheckProperty4Update)`,
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
export function DataNodeCmPrjIdRela_GetJSONStrByObj(
  pobjDataNodeCmPrjIdRelaEN: clsDataNodeCmPrjIdRelaEN,
): string {
  pobjDataNodeCmPrjIdRelaEN.sfUpdFldSetStr = pobjDataNodeCmPrjIdRelaEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjDataNodeCmPrjIdRelaEN);
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
export function DataNodeCmPrjIdRela_GetObjLstByJSONStr(
  strJSON: string,
): Array<clsDataNodeCmPrjIdRelaEN> {
  let arrDataNodeCmPrjIdRelaObjLst = new Array<clsDataNodeCmPrjIdRelaEN>();
  if (strJSON === '') {
    return arrDataNodeCmPrjIdRelaObjLst;
  }
  try {
    arrDataNodeCmPrjIdRelaObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrDataNodeCmPrjIdRelaObjLst;
  }
  return arrDataNodeCmPrjIdRelaObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2024-10-17
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrDataNodeCmPrjIdRelaObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function DataNodeCmPrjIdRela_GetObjLstByJSONObjLst(
  arrDataNodeCmPrjIdRelaObjLstS: Array<clsDataNodeCmPrjIdRelaEN>,
): Array<clsDataNodeCmPrjIdRelaEN> {
  const arrDataNodeCmPrjIdRelaObjLst = new Array<clsDataNodeCmPrjIdRelaEN>();
  for (const objInFor of arrDataNodeCmPrjIdRelaObjLstS) {
    const obj1 = DataNodeCmPrjIdRela_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrDataNodeCmPrjIdRelaObjLst.push(obj1);
  }
  return arrDataNodeCmPrjIdRelaObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2024-10-17
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function DataNodeCmPrjIdRela_GetObjByJSONStr(strJSON: string): clsDataNodeCmPrjIdRelaEN {
  let pobjDataNodeCmPrjIdRelaEN = new clsDataNodeCmPrjIdRelaEN();
  if (strJSON === '') {
    return pobjDataNodeCmPrjIdRelaEN;
  }
  try {
    pobjDataNodeCmPrjIdRelaEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjDataNodeCmPrjIdRelaEN;
  }
  return pobjDataNodeCmPrjIdRelaEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function DataNodeCmPrjIdRela_GetCombineCondition(
  objDataNodeCmPrjIdRelaCond: clsDataNodeCmPrjIdRelaEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objDataNodeCmPrjIdRelaCond.dicFldComparisonOp,
      clsDataNodeCmPrjIdRelaEN.con_CmPrjId,
    ) == true
  ) {
    const strComparisonOpCmPrjId: string =
      objDataNodeCmPrjIdRelaCond.dicFldComparisonOp[clsDataNodeCmPrjIdRelaEN.con_CmPrjId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDataNodeCmPrjIdRelaEN.con_CmPrjId,
      objDataNodeCmPrjIdRelaCond.cmPrjId,
      strComparisonOpCmPrjId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDataNodeCmPrjIdRelaCond.dicFldComparisonOp,
      clsDataNodeCmPrjIdRelaEN.con_DataNodeId,
    ) == true
  ) {
    const strComparisonOpDataNodeId: string =
      objDataNodeCmPrjIdRelaCond.dicFldComparisonOp[clsDataNodeCmPrjIdRelaEN.con_DataNodeId];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsDataNodeCmPrjIdRelaEN.con_DataNodeId,
      objDataNodeCmPrjIdRelaCond.dataNodeId,
      strComparisonOpDataNodeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDataNodeCmPrjIdRelaCond.dicFldComparisonOp,
      clsDataNodeCmPrjIdRelaEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objDataNodeCmPrjIdRelaCond.dicFldComparisonOp[clsDataNodeCmPrjIdRelaEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDataNodeCmPrjIdRelaEN.con_UpdDate,
      objDataNodeCmPrjIdRelaCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDataNodeCmPrjIdRelaCond.dicFldComparisonOp,
      clsDataNodeCmPrjIdRelaEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objDataNodeCmPrjIdRelaCond.dicFldComparisonOp[clsDataNodeCmPrjIdRelaEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDataNodeCmPrjIdRelaEN.con_UpdUser,
      objDataNodeCmPrjIdRelaCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDataNodeCmPrjIdRelaCond.dicFldComparisonOp,
      clsDataNodeCmPrjIdRelaEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objDataNodeCmPrjIdRelaCond.dicFldComparisonOp[clsDataNodeCmPrjIdRelaEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDataNodeCmPrjIdRelaEN.con_Memo,
      objDataNodeCmPrjIdRelaCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objDataNodeCmPrjIdRelaENS:源对象
 * @param objDataNodeCmPrjIdRelaENT:目标对象
 */
export function DataNodeCmPrjIdRela_GetObjFromJsonObj(
  objDataNodeCmPrjIdRelaENS: clsDataNodeCmPrjIdRelaEN,
): clsDataNodeCmPrjIdRelaEN {
  const objDataNodeCmPrjIdRelaENT: clsDataNodeCmPrjIdRelaEN = new clsDataNodeCmPrjIdRelaEN();
  ObjectAssign(objDataNodeCmPrjIdRelaENT, objDataNodeCmPrjIdRelaENS);
  return objDataNodeCmPrjIdRelaENT;
}
