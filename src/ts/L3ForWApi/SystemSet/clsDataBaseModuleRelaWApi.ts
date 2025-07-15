/**
 * 类名:clsDataBaseModuleRelaWApi
 * 表名:DataBaseModuleRela(00050235)
 * 版本:2023.10.12.1(服务器:WIN-SRV103-116)
 * 日期:2023/10/12 14:38:25
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:系统设置(SystemSet)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 数据库模块关系(DataBaseModuleRela)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2023年10月12日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { GetStrLen, tzDataType, Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { clsDataBaseModuleRelaEN } from '@/ts/L0Entity/SystemSet/clsDataBaseModuleRelaEN';
import { GetExceptionStr, myShowErrorMsg, ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const dataBaseModuleRela_Controller = 'DataBaseModuleRelaApi';
export const dataBaseModuleRela_ConstructorName = 'dataBaseModuleRela';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngmId:关键字
 * @returns 对象
 **/
export async function DataBaseModuleRela_GetObjBymIdAsync(
  lngmId: number,
): Promise<clsDataBaseModuleRelaEN | null> {
  const strThisFuncName = 'GetObjBymIdAsync';

  if (lngmId == 0) {
    const strMsg = Format('参数:[lngmId]不能为空!(In clsDataBaseModuleRelaWApi.GetObjBymIdAsync)');
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjBymId';
  const strUrl = GetWebApiUrl(dataBaseModuleRela_Controller, strAction);

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
      const objDataBaseModuleRela = DataBaseModuleRela_GetObjFromJsonObj(returnObj);
      return objDataBaseModuleRela;
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
        dataBaseModuleRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataBaseModuleRela_ConstructorName,
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
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function DataBaseModuleRela_SortFunDefa(
  a: clsDataBaseModuleRelaEN,
  b: clsDataBaseModuleRelaEN,
): number {
  return a.mId - b.mId;
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function DataBaseModuleRela_SortFunDefa2Fld(
  a: clsDataBaseModuleRelaEN,
  b: clsDataBaseModuleRelaEN,
): number {
  if (a.prjId == b.prjId) return a.prjDataBaseId.localeCompare(b.prjDataBaseId);
  else return a.prjId.localeCompare(b.prjId);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function DataBaseModuleRela_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsDataBaseModuleRelaEN.con_mId:
        return (a: clsDataBaseModuleRelaEN, b: clsDataBaseModuleRelaEN) => {
          return a.mId - b.mId;
        };
      case clsDataBaseModuleRelaEN.con_PrjId:
        return (a: clsDataBaseModuleRelaEN, b: clsDataBaseModuleRelaEN) => {
          return a.prjId.localeCompare(b.prjId);
        };
      case clsDataBaseModuleRelaEN.con_PrjDataBaseId:
        return (a: clsDataBaseModuleRelaEN, b: clsDataBaseModuleRelaEN) => {
          return a.prjDataBaseId.localeCompare(b.prjDataBaseId);
        };
      case clsDataBaseModuleRelaEN.con_FuncModuleAgcId:
        return (a: clsDataBaseModuleRelaEN, b: clsDataBaseModuleRelaEN) => {
          return a.funcModuleAgcId.localeCompare(b.funcModuleAgcId);
        };
      case clsDataBaseModuleRelaEN.con_UpdDate:
        return (a: clsDataBaseModuleRelaEN, b: clsDataBaseModuleRelaEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsDataBaseModuleRelaEN.con_UpdUserId:
        return (a: clsDataBaseModuleRelaEN, b: clsDataBaseModuleRelaEN) => {
          if (a.updUserId == null) return -1;
          if (b.updUserId == null) return 1;
          return a.updUserId.localeCompare(b.updUserId);
        };
      case clsDataBaseModuleRelaEN.con_IsVisible:
        return (a: clsDataBaseModuleRelaEN) => {
          if (a.isVisible == true) return 1;
          else return -1;
        };
      case clsDataBaseModuleRelaEN.con_Memo:
        return (a: clsDataBaseModuleRelaEN, b: clsDataBaseModuleRelaEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[DataBaseModuleRela]中不存在!(in ${dataBaseModuleRela_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsDataBaseModuleRelaEN.con_mId:
        return (a: clsDataBaseModuleRelaEN, b: clsDataBaseModuleRelaEN) => {
          return b.mId - a.mId;
        };
      case clsDataBaseModuleRelaEN.con_PrjId:
        return (a: clsDataBaseModuleRelaEN, b: clsDataBaseModuleRelaEN) => {
          return b.prjId.localeCompare(a.prjId);
        };
      case clsDataBaseModuleRelaEN.con_PrjDataBaseId:
        return (a: clsDataBaseModuleRelaEN, b: clsDataBaseModuleRelaEN) => {
          return b.prjDataBaseId.localeCompare(a.prjDataBaseId);
        };
      case clsDataBaseModuleRelaEN.con_FuncModuleAgcId:
        return (a: clsDataBaseModuleRelaEN, b: clsDataBaseModuleRelaEN) => {
          return b.funcModuleAgcId.localeCompare(a.funcModuleAgcId);
        };
      case clsDataBaseModuleRelaEN.con_UpdDate:
        return (a: clsDataBaseModuleRelaEN, b: clsDataBaseModuleRelaEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsDataBaseModuleRelaEN.con_UpdUserId:
        return (a: clsDataBaseModuleRelaEN, b: clsDataBaseModuleRelaEN) => {
          if (b.updUserId == null) return -1;
          if (a.updUserId == null) return 1;
          return b.updUserId.localeCompare(a.updUserId);
        };
      case clsDataBaseModuleRelaEN.con_IsVisible:
        return (b: clsDataBaseModuleRelaEN) => {
          if (b.isVisible == true) return 1;
          else return -1;
        };
      case clsDataBaseModuleRelaEN.con_Memo:
        return (a: clsDataBaseModuleRelaEN, b: clsDataBaseModuleRelaEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[DataBaseModuleRela]中不存在!(in ${dataBaseModuleRela_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function DataBaseModuleRela_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsDataBaseModuleRelaEN.con_mId:
      return (obj: clsDataBaseModuleRelaEN) => {
        return obj.mId === value;
      };
    case clsDataBaseModuleRelaEN.con_PrjId:
      return (obj: clsDataBaseModuleRelaEN) => {
        return obj.prjId === value;
      };
    case clsDataBaseModuleRelaEN.con_PrjDataBaseId:
      return (obj: clsDataBaseModuleRelaEN) => {
        return obj.prjDataBaseId === value;
      };
    case clsDataBaseModuleRelaEN.con_FuncModuleAgcId:
      return (obj: clsDataBaseModuleRelaEN) => {
        return obj.funcModuleAgcId === value;
      };
    case clsDataBaseModuleRelaEN.con_UpdDate:
      return (obj: clsDataBaseModuleRelaEN) => {
        return obj.updDate === value;
      };
    case clsDataBaseModuleRelaEN.con_UpdUserId:
      return (obj: clsDataBaseModuleRelaEN) => {
        return obj.updUserId === value;
      };
    case clsDataBaseModuleRelaEN.con_IsVisible:
      return (obj: clsDataBaseModuleRelaEN) => {
        return obj.isVisible === value;
      };
    case clsDataBaseModuleRelaEN.con_Memo:
      return (obj: clsDataBaseModuleRelaEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[DataBaseModuleRela]中不存在!(in ${dataBaseModuleRela_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}
//该表没有使用Cache,不需要生成[DataBaseModuleRela__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function DataBaseModuleRela_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(dataBaseModuleRela_Controller, strAction);

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
        dataBaseModuleRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataBaseModuleRela_ConstructorName,
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
export async function DataBaseModuleRela_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(dataBaseModuleRela_Controller, strAction);

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
        dataBaseModuleRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataBaseModuleRela_ConstructorName,
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
export async function DataBaseModuleRela_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsDataBaseModuleRelaEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(dataBaseModuleRela_Controller, strAction);

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
      const objDataBaseModuleRela = DataBaseModuleRela_GetObjFromJsonObj(returnObj);
      return objDataBaseModuleRela;
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
        dataBaseModuleRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataBaseModuleRela_ConstructorName,
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
export async function DataBaseModuleRela_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsDataBaseModuleRelaEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(dataBaseModuleRela_Controller, strAction);

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
          dataBaseModuleRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = DataBaseModuleRela_GetObjLstByJSONObjLst(returnObjLst);
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
        dataBaseModuleRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataBaseModuleRela_ConstructorName,
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
export async function DataBaseModuleRela_GetObjLstBymIdLstAsync(
  arrmId: Array<string>,
): Promise<Array<clsDataBaseModuleRelaEN>> {
  const strThisFuncName = 'GetObjLstBymIdLstAsync';
  const strAction = 'GetObjLstBymIdLst';
  const strUrl = GetWebApiUrl(dataBaseModuleRela_Controller, strAction);

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
          dataBaseModuleRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = DataBaseModuleRela_GetObjLstByJSONObjLst(returnObjLst);
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
        dataBaseModuleRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataBaseModuleRela_ConstructorName,
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
export async function DataBaseModuleRela_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsDataBaseModuleRelaEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(dataBaseModuleRela_Controller, strAction);

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
          dataBaseModuleRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = DataBaseModuleRela_GetObjLstByJSONObjLst(returnObjLst);
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
        dataBaseModuleRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataBaseModuleRela_ConstructorName,
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
export async function DataBaseModuleRela_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsDataBaseModuleRelaEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(dataBaseModuleRela_Controller, strAction);

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
          dataBaseModuleRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = DataBaseModuleRela_GetObjLstByJSONObjLst(returnObjLst);
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
        dataBaseModuleRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataBaseModuleRela_ConstructorName,
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
export async function DataBaseModuleRela_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsDataBaseModuleRelaEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsDataBaseModuleRelaEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(dataBaseModuleRela_Controller, strAction);

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
          dataBaseModuleRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = DataBaseModuleRela_GetObjLstByJSONObjLst(returnObjLst);
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
        dataBaseModuleRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataBaseModuleRela_ConstructorName,
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
export async function DataBaseModuleRela_DelRecordAsync(lngmId: number): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(dataBaseModuleRela_Controller, strAction);
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
        dataBaseModuleRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataBaseModuleRela_ConstructorName,
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
export async function DataBaseModuleRela_DelDataBaseModuleRelasAsync(
  arrmId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelDataBaseModuleRelasAsync';
  const strAction = 'DelDataBaseModuleRelas';
  const strUrl = GetWebApiUrl(dataBaseModuleRela_Controller, strAction);

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
        dataBaseModuleRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataBaseModuleRela_ConstructorName,
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
export async function DataBaseModuleRela_DelDataBaseModuleRelasByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelDataBaseModuleRelasByCondAsync';
  const strAction = 'DelDataBaseModuleRelasByCond';
  const strUrl = GetWebApiUrl(dataBaseModuleRela_Controller, strAction);

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
        dataBaseModuleRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataBaseModuleRela_ConstructorName,
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
 * @param objDataBaseModuleRelaEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function DataBaseModuleRela_AddNewRecordAsync(
  objDataBaseModuleRelaEN: clsDataBaseModuleRelaEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objDataBaseModuleRelaEN);
  const strUrl = GetWebApiUrl(dataBaseModuleRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objDataBaseModuleRelaEN, config);
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
        dataBaseModuleRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataBaseModuleRela_ConstructorName,
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
 * @param objDataBaseModuleRelaEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function DataBaseModuleRela_AddNewRecordWithReturnKeyAsync(
  objDataBaseModuleRelaEN: clsDataBaseModuleRelaEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(dataBaseModuleRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objDataBaseModuleRelaEN, config);
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
        dataBaseModuleRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataBaseModuleRela_ConstructorName,
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
 * @param objDataBaseModuleRelaEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function DataBaseModuleRela_UpdateRecordAsync(
  objDataBaseModuleRelaEN: clsDataBaseModuleRelaEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objDataBaseModuleRelaEN.sfUpdFldSetStr === undefined ||
    objDataBaseModuleRelaEN.sfUpdFldSetStr === null ||
    objDataBaseModuleRelaEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objDataBaseModuleRelaEN.mId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(dataBaseModuleRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objDataBaseModuleRelaEN, config);
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
        dataBaseModuleRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataBaseModuleRela_ConstructorName,
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
 * @param objDataBaseModuleRelaEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function DataBaseModuleRela_UpdateWithConditionAsync(
  objDataBaseModuleRelaEN: clsDataBaseModuleRelaEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objDataBaseModuleRelaEN.sfUpdFldSetStr === undefined ||
    objDataBaseModuleRelaEN.sfUpdFldSetStr === null ||
    objDataBaseModuleRelaEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objDataBaseModuleRelaEN.mId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(dataBaseModuleRela_Controller, strAction);
  objDataBaseModuleRelaEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objDataBaseModuleRelaEN, config);
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
        dataBaseModuleRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataBaseModuleRela_ConstructorName,
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
export async function DataBaseModuleRela_IsExistRecordAsync(
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(dataBaseModuleRela_Controller, strAction);

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
        dataBaseModuleRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataBaseModuleRela_ConstructorName,
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
export async function DataBaseModuleRela_IsExistAsync(lngmId: number): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(dataBaseModuleRela_Controller, strAction);

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
        dataBaseModuleRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataBaseModuleRela_ConstructorName,
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
export async function DataBaseModuleRela_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(dataBaseModuleRela_Controller, strAction);

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
        dataBaseModuleRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataBaseModuleRela_ConstructorName,
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
export async function DataBaseModuleRela_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(dataBaseModuleRela_Controller, strAction);

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
        dataBaseModuleRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataBaseModuleRela_ConstructorName,
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
export function DataBaseModuleRela_GetWebApiUrl(strController: string, strAction: string): string {
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
export function DataBaseModuleRela_CheckPropertyNew(
  pobjDataBaseModuleRelaEN: clsDataBaseModuleRelaEN,
) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (
    IsNullOrEmpty(pobjDataBaseModuleRelaEN.prjId) === true ||
    pobjDataBaseModuleRelaEN.prjId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000411)字段[工程ID]不能为空(In 数据库模块关系)!(clsDataBaseModuleRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjDataBaseModuleRelaEN.prjDataBaseId) === true ||
    pobjDataBaseModuleRelaEN.prjDataBaseId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000411)字段[项目数据库Id]不能为空(In 数据库模块关系)!(clsDataBaseModuleRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjDataBaseModuleRelaEN.funcModuleAgcId) === true ||
    pobjDataBaseModuleRelaEN.funcModuleAgcId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000411)字段[功能模块Id]不能为空(In 数据库模块关系)!(clsDataBaseModuleRelaBL:CheckPropertyNew0)',
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjDataBaseModuleRelaEN.prjId) == false &&
    GetStrLen(pobjDataBaseModuleRelaEN.prjId) > 4
  ) {
    throw new Error(
      '(errid:Watl000413)字段[工程ID(prjId)]的长度不能超过4(In 数据库模块关系(DataBaseModuleRela))!值:$(pobjDataBaseModuleRelaEN.prjId)(clsDataBaseModuleRelaBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjDataBaseModuleRelaEN.prjDataBaseId) == false &&
    GetStrLen(pobjDataBaseModuleRelaEN.prjDataBaseId) > 4
  ) {
    throw new Error(
      '(errid:Watl000413)字段[项目数据库Id(prjDataBaseId)]的长度不能超过4(In 数据库模块关系(DataBaseModuleRela))!值:$(pobjDataBaseModuleRelaEN.prjDataBaseId)(clsDataBaseModuleRelaBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjDataBaseModuleRelaEN.funcModuleAgcId) == false &&
    GetStrLen(pobjDataBaseModuleRelaEN.funcModuleAgcId) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[功能模块Id(funcModuleAgcId)]的长度不能超过8(In 数据库模块关系(DataBaseModuleRela))!值:$(pobjDataBaseModuleRelaEN.funcModuleAgcId)(clsDataBaseModuleRelaBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjDataBaseModuleRelaEN.updDate) == false &&
    GetStrLen(pobjDataBaseModuleRelaEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 数据库模块关系(DataBaseModuleRela))!值:$(pobjDataBaseModuleRelaEN.updDate)(clsDataBaseModuleRelaBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjDataBaseModuleRelaEN.updUserId) == false &&
    GetStrLen(pobjDataBaseModuleRelaEN.updUserId) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改用户Id(updUserId)]的长度不能超过20(In 数据库模块关系(DataBaseModuleRela))!值:$(pobjDataBaseModuleRelaEN.updUserId)(clsDataBaseModuleRelaBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjDataBaseModuleRelaEN.memo) == false &&
    GetStrLen(pobjDataBaseModuleRelaEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In 数据库模块关系(DataBaseModuleRela))!值:$(pobjDataBaseModuleRelaEN.memo)(clsDataBaseModuleRelaBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjDataBaseModuleRelaEN.mId &&
    undefined !== pobjDataBaseModuleRelaEN.mId &&
    tzDataType.isNumber(pobjDataBaseModuleRelaEN.mId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[mId(mId)]的值:[$(pobjDataBaseModuleRelaEN.mId)], 非法,应该为数值型(In 数据库模块关系(DataBaseModuleRela))!(clsDataBaseModuleRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjDataBaseModuleRelaEN.prjId) == false &&
    undefined !== pobjDataBaseModuleRelaEN.prjId &&
    tzDataType.isString(pobjDataBaseModuleRelaEN.prjId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[工程ID(prjId)]的值:[$(pobjDataBaseModuleRelaEN.prjId)], 非法,应该为字符型(In 数据库模块关系(DataBaseModuleRela))!(clsDataBaseModuleRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjDataBaseModuleRelaEN.prjDataBaseId) == false &&
    undefined !== pobjDataBaseModuleRelaEN.prjDataBaseId &&
    tzDataType.isString(pobjDataBaseModuleRelaEN.prjDataBaseId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[项目数据库Id(prjDataBaseId)]的值:[$(pobjDataBaseModuleRelaEN.prjDataBaseId)], 非法,应该为字符型(In 数据库模块关系(DataBaseModuleRela))!(clsDataBaseModuleRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjDataBaseModuleRelaEN.funcModuleAgcId) == false &&
    undefined !== pobjDataBaseModuleRelaEN.funcModuleAgcId &&
    tzDataType.isString(pobjDataBaseModuleRelaEN.funcModuleAgcId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[功能模块Id(funcModuleAgcId)]的值:[$(pobjDataBaseModuleRelaEN.funcModuleAgcId)], 非法,应该为字符型(In 数据库模块关系(DataBaseModuleRela))!(clsDataBaseModuleRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjDataBaseModuleRelaEN.updDate) == false &&
    undefined !== pobjDataBaseModuleRelaEN.updDate &&
    tzDataType.isString(pobjDataBaseModuleRelaEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjDataBaseModuleRelaEN.updDate)], 非法,应该为字符型(In 数据库模块关系(DataBaseModuleRela))!(clsDataBaseModuleRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjDataBaseModuleRelaEN.updUserId) == false &&
    undefined !== pobjDataBaseModuleRelaEN.updUserId &&
    tzDataType.isString(pobjDataBaseModuleRelaEN.updUserId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改用户Id(updUserId)]的值:[$(pobjDataBaseModuleRelaEN.updUserId)], 非法,应该为字符型(In 数据库模块关系(DataBaseModuleRela))!(clsDataBaseModuleRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjDataBaseModuleRelaEN.isVisible &&
    undefined !== pobjDataBaseModuleRelaEN.isVisible &&
    tzDataType.isBoolean(pobjDataBaseModuleRelaEN.isVisible) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否显示(isVisible)]的值:[$(pobjDataBaseModuleRelaEN.isVisible)], 非法,应该为布尔型(In 数据库模块关系(DataBaseModuleRela))!(clsDataBaseModuleRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjDataBaseModuleRelaEN.memo) == false &&
    undefined !== pobjDataBaseModuleRelaEN.memo &&
    tzDataType.isString(pobjDataBaseModuleRelaEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[说明(memo)]的值:[$(pobjDataBaseModuleRelaEN.memo)], 非法,应该为字符型(In 数据库模块关系(DataBaseModuleRela))!(clsDataBaseModuleRelaBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function DataBaseModuleRela_CheckProperty4Update(
  pobjDataBaseModuleRelaEN: clsDataBaseModuleRelaEN,
) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjDataBaseModuleRelaEN.prjId) == false &&
    GetStrLen(pobjDataBaseModuleRelaEN.prjId) > 4
  ) {
    throw new Error(
      '(errid:Watl000416)字段[工程ID(prjId)]的长度不能超过4(In 数据库模块关系(DataBaseModuleRela))!值:$(pobjDataBaseModuleRelaEN.prjId)(clsDataBaseModuleRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjDataBaseModuleRelaEN.prjDataBaseId) == false &&
    GetStrLen(pobjDataBaseModuleRelaEN.prjDataBaseId) > 4
  ) {
    throw new Error(
      '(errid:Watl000416)字段[项目数据库Id(prjDataBaseId)]的长度不能超过4(In 数据库模块关系(DataBaseModuleRela))!值:$(pobjDataBaseModuleRelaEN.prjDataBaseId)(clsDataBaseModuleRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjDataBaseModuleRelaEN.funcModuleAgcId) == false &&
    GetStrLen(pobjDataBaseModuleRelaEN.funcModuleAgcId) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[功能模块Id(funcModuleAgcId)]的长度不能超过8(In 数据库模块关系(DataBaseModuleRela))!值:$(pobjDataBaseModuleRelaEN.funcModuleAgcId)(clsDataBaseModuleRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjDataBaseModuleRelaEN.updDate) == false &&
    GetStrLen(pobjDataBaseModuleRelaEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 数据库模块关系(DataBaseModuleRela))!值:$(pobjDataBaseModuleRelaEN.updDate)(clsDataBaseModuleRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjDataBaseModuleRelaEN.updUserId) == false &&
    GetStrLen(pobjDataBaseModuleRelaEN.updUserId) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改用户Id(updUserId)]的长度不能超过20(In 数据库模块关系(DataBaseModuleRela))!值:$(pobjDataBaseModuleRelaEN.updUserId)(clsDataBaseModuleRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjDataBaseModuleRelaEN.memo) == false &&
    GetStrLen(pobjDataBaseModuleRelaEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In 数据库模块关系(DataBaseModuleRela))!值:$(pobjDataBaseModuleRelaEN.memo)(clsDataBaseModuleRelaBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjDataBaseModuleRelaEN.mId &&
    undefined !== pobjDataBaseModuleRelaEN.mId &&
    tzDataType.isNumber(pobjDataBaseModuleRelaEN.mId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[mId(mId)]的值:[$(pobjDataBaseModuleRelaEN.mId)], 非法,应该为数值型(In 数据库模块关系(DataBaseModuleRela))!(clsDataBaseModuleRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjDataBaseModuleRelaEN.prjId) == false &&
    undefined !== pobjDataBaseModuleRelaEN.prjId &&
    tzDataType.isString(pobjDataBaseModuleRelaEN.prjId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[工程ID(prjId)]的值:[$(pobjDataBaseModuleRelaEN.prjId)], 非法,应该为字符型(In 数据库模块关系(DataBaseModuleRela))!(clsDataBaseModuleRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjDataBaseModuleRelaEN.prjDataBaseId) == false &&
    undefined !== pobjDataBaseModuleRelaEN.prjDataBaseId &&
    tzDataType.isString(pobjDataBaseModuleRelaEN.prjDataBaseId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[项目数据库Id(prjDataBaseId)]的值:[$(pobjDataBaseModuleRelaEN.prjDataBaseId)], 非法,应该为字符型(In 数据库模块关系(DataBaseModuleRela))!(clsDataBaseModuleRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjDataBaseModuleRelaEN.funcModuleAgcId) == false &&
    undefined !== pobjDataBaseModuleRelaEN.funcModuleAgcId &&
    tzDataType.isString(pobjDataBaseModuleRelaEN.funcModuleAgcId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[功能模块Id(funcModuleAgcId)]的值:[$(pobjDataBaseModuleRelaEN.funcModuleAgcId)], 非法,应该为字符型(In 数据库模块关系(DataBaseModuleRela))!(clsDataBaseModuleRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjDataBaseModuleRelaEN.updDate) == false &&
    undefined !== pobjDataBaseModuleRelaEN.updDate &&
    tzDataType.isString(pobjDataBaseModuleRelaEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjDataBaseModuleRelaEN.updDate)], 非法,应该为字符型(In 数据库模块关系(DataBaseModuleRela))!(clsDataBaseModuleRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjDataBaseModuleRelaEN.updUserId) == false &&
    undefined !== pobjDataBaseModuleRelaEN.updUserId &&
    tzDataType.isString(pobjDataBaseModuleRelaEN.updUserId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改用户Id(updUserId)]的值:[$(pobjDataBaseModuleRelaEN.updUserId)], 非法,应该为字符型(In 数据库模块关系(DataBaseModuleRela))!(clsDataBaseModuleRelaBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjDataBaseModuleRelaEN.isVisible &&
    undefined !== pobjDataBaseModuleRelaEN.isVisible &&
    tzDataType.isBoolean(pobjDataBaseModuleRelaEN.isVisible) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否显示(isVisible)]的值:[$(pobjDataBaseModuleRelaEN.isVisible)], 非法,应该为布尔型(In 数据库模块关系(DataBaseModuleRela))!(clsDataBaseModuleRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjDataBaseModuleRelaEN.memo) == false &&
    undefined !== pobjDataBaseModuleRelaEN.memo &&
    tzDataType.isString(pobjDataBaseModuleRelaEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[说明(memo)]的值:[$(pobjDataBaseModuleRelaEN.memo)], 非法,应该为字符型(In 数据库模块关系(DataBaseModuleRela))!(clsDataBaseModuleRelaBL:CheckProperty4Update)',
    );
  }
  //检查主键是否为Null或者空!
  if (
    null === pobjDataBaseModuleRelaEN.mId ||
    (pobjDataBaseModuleRelaEN.mId != null && pobjDataBaseModuleRelaEN.mId.toString() === '')
  ) {
    throw new Error(
      '(errid:Watl000064)字段[mId]不能为空(In 数据库模块关系)!(clsDataBaseModuleRelaBL:CheckProperty4Update)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function DataBaseModuleRela_GetJSONStrByObj(
  pobjDataBaseModuleRelaEN: clsDataBaseModuleRelaEN,
): string {
  pobjDataBaseModuleRelaEN.sfUpdFldSetStr = pobjDataBaseModuleRelaEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjDataBaseModuleRelaEN);
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
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
 */
export function DataBaseModuleRela_GetObjLstByJSONStr(
  strJSON: string,
): Array<clsDataBaseModuleRelaEN> {
  let arrDataBaseModuleRelaObjLst = new Array<clsDataBaseModuleRelaEN>();
  if (strJSON === '') {
    return arrDataBaseModuleRelaObjLst;
  }
  try {
    arrDataBaseModuleRelaObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrDataBaseModuleRelaObjLst;
  }
  return arrDataBaseModuleRelaObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrDataBaseModuleRelaObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function DataBaseModuleRela_GetObjLstByJSONObjLst(
  arrDataBaseModuleRelaObjLstS: Array<clsDataBaseModuleRelaEN>,
): Array<clsDataBaseModuleRelaEN> {
  const arrDataBaseModuleRelaObjLst = new Array<clsDataBaseModuleRelaEN>();
  for (const objInFor of arrDataBaseModuleRelaObjLstS) {
    const obj1 = DataBaseModuleRela_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrDataBaseModuleRelaObjLst.push(obj1);
  }
  return arrDataBaseModuleRelaObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function DataBaseModuleRela_GetObjByJSONStr(strJSON: string): clsDataBaseModuleRelaEN {
  let pobjDataBaseModuleRelaEN = new clsDataBaseModuleRelaEN();
  if (strJSON === '') {
    return pobjDataBaseModuleRelaEN;
  }
  try {
    pobjDataBaseModuleRelaEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjDataBaseModuleRelaEN;
  }
  return pobjDataBaseModuleRelaEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function DataBaseModuleRela_GetCombineCondition(
  objDataBaseModuleRelaCond: clsDataBaseModuleRelaEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objDataBaseModuleRelaCond.dicFldComparisonOp,
      clsDataBaseModuleRelaEN.con_mId,
    ) == true
  ) {
    const strComparisonOpmId: string =
      objDataBaseModuleRelaCond.dicFldComparisonOp[clsDataBaseModuleRelaEN.con_mId];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsDataBaseModuleRelaEN.con_mId,
      objDataBaseModuleRelaCond.mId,
      strComparisonOpmId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDataBaseModuleRelaCond.dicFldComparisonOp,
      clsDataBaseModuleRelaEN.con_PrjId,
    ) == true
  ) {
    const strComparisonOpPrjId: string =
      objDataBaseModuleRelaCond.dicFldComparisonOp[clsDataBaseModuleRelaEN.con_PrjId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDataBaseModuleRelaEN.con_PrjId,
      objDataBaseModuleRelaCond.prjId,
      strComparisonOpPrjId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDataBaseModuleRelaCond.dicFldComparisonOp,
      clsDataBaseModuleRelaEN.con_PrjDataBaseId,
    ) == true
  ) {
    const strComparisonOpPrjDataBaseId: string =
      objDataBaseModuleRelaCond.dicFldComparisonOp[clsDataBaseModuleRelaEN.con_PrjDataBaseId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDataBaseModuleRelaEN.con_PrjDataBaseId,
      objDataBaseModuleRelaCond.prjDataBaseId,
      strComparisonOpPrjDataBaseId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDataBaseModuleRelaCond.dicFldComparisonOp,
      clsDataBaseModuleRelaEN.con_FuncModuleAgcId,
    ) == true
  ) {
    const strComparisonOpFuncModuleAgcId: string =
      objDataBaseModuleRelaCond.dicFldComparisonOp[clsDataBaseModuleRelaEN.con_FuncModuleAgcId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDataBaseModuleRelaEN.con_FuncModuleAgcId,
      objDataBaseModuleRelaCond.funcModuleAgcId,
      strComparisonOpFuncModuleAgcId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDataBaseModuleRelaCond.dicFldComparisonOp,
      clsDataBaseModuleRelaEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objDataBaseModuleRelaCond.dicFldComparisonOp[clsDataBaseModuleRelaEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDataBaseModuleRelaEN.con_UpdDate,
      objDataBaseModuleRelaCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDataBaseModuleRelaCond.dicFldComparisonOp,
      clsDataBaseModuleRelaEN.con_UpdUserId,
    ) == true
  ) {
    const strComparisonOpUpdUserId: string =
      objDataBaseModuleRelaCond.dicFldComparisonOp[clsDataBaseModuleRelaEN.con_UpdUserId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDataBaseModuleRelaEN.con_UpdUserId,
      objDataBaseModuleRelaCond.updUserId,
      strComparisonOpUpdUserId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDataBaseModuleRelaCond.dicFldComparisonOp,
      clsDataBaseModuleRelaEN.con_IsVisible,
    ) == true
  ) {
    if (objDataBaseModuleRelaCond.isVisible == true) {
      strWhereCond += Format(" And {0} = '1'", clsDataBaseModuleRelaEN.con_IsVisible);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsDataBaseModuleRelaEN.con_IsVisible);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDataBaseModuleRelaCond.dicFldComparisonOp,
      clsDataBaseModuleRelaEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objDataBaseModuleRelaCond.dicFldComparisonOp[clsDataBaseModuleRelaEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDataBaseModuleRelaEN.con_Memo,
      objDataBaseModuleRelaCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--DataBaseModuleRela(数据库模块关系),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strPrjDataBaseId: 项目数据库Id(要求唯一的字段)
 * @param strPrjId: 工程ID(要求唯一的字段)
 * @param strFuncModuleAgcId: 功能模块Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function DataBaseModuleRela_GetUniCondStr(
  objDataBaseModuleRelaEN: clsDataBaseModuleRelaEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and PrjDataBaseId = '{0}'", objDataBaseModuleRelaEN.prjDataBaseId);
  strWhereCond += Format(" and PrjId = '{0}'", objDataBaseModuleRelaEN.prjId);
  strWhereCond += Format(" and FuncModuleAgcId = '{0}'", objDataBaseModuleRelaEN.funcModuleAgcId);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--DataBaseModuleRela(数据库模块关系),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strPrjDataBaseId: 项目数据库Id(要求唯一的字段)
 * @param strPrjId: 工程ID(要求唯一的字段)
 * @param strFuncModuleAgcId: 功能模块Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function DataBaseModuleRela_GetUniCondStr4Update(
  objDataBaseModuleRelaEN: clsDataBaseModuleRelaEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and mId <> '{0}'", objDataBaseModuleRelaEN.mId);
  strWhereCond += Format(" and PrjDataBaseId = '{0}'", objDataBaseModuleRelaEN.prjDataBaseId);
  strWhereCond += Format(" and PrjId = '{0}'", objDataBaseModuleRelaEN.prjId);
  strWhereCond += Format(" and FuncModuleAgcId = '{0}'", objDataBaseModuleRelaEN.funcModuleAgcId);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objDataBaseModuleRelaENS:源对象
 * @param objDataBaseModuleRelaENT:目标对象
 */
export function DataBaseModuleRela_GetObjFromJsonObj(
  objDataBaseModuleRelaENS: clsDataBaseModuleRelaEN,
): clsDataBaseModuleRelaEN {
  const objDataBaseModuleRelaENT: clsDataBaseModuleRelaEN = new clsDataBaseModuleRelaEN();
  ObjectAssign(objDataBaseModuleRelaENT, objDataBaseModuleRelaENS);
  return objDataBaseModuleRelaENT;
}
