/**
 * 类名:clsGCVersionWApi
 * 表名:GCVersion(00050500)
 * 版本:2023.10.12.1(服务器:WIN-SRV103-116)
 * 日期:2023/10/12 14:38:52
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:系统参数(SysPara)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 生成代码版本(GCVersion)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2023年10月12日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty, GetStrLen, tzDataType, Format } from '@/ts/PubFun/clsString';
import { clsGCVersionEN } from '@/ts/L0Entity/SysPara/clsGCVersionEN';
import { GetExceptionStr, myShowErrorMsg, ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const gCVersion_Controller = 'GCVersionApi';
export const gCVersion_ConstructorName = 'gCVersion';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strGcVersionId:关键字
 * @returns 对象
 **/
export async function GCVersion_GetObjByGcVersionIdAsync(
  strGcVersionId: string,
): Promise<clsGCVersionEN | null> {
  const strThisFuncName = 'GetObjByGcVersionIdAsync';

  if (IsNullOrEmpty(strGcVersionId) == true) {
    const strMsg = Format(
      '参数:[strGcVersionId]不能为空!(In clsGCVersionWApi.GetObjByGcVersionIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strGcVersionId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strGcVersionId]的长度:[{0}]不正确!(clsGCVersionWApi.GetObjByGcVersionIdAsync)',
      strGcVersionId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByGcVersionId';
  const strUrl = GetWebApiUrl(gCVersion_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strGcVersionId,
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
      const objGCVersion = GCVersion_GetObjFromJsonObj(returnObj);
      return objGCVersion;
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
        gCVersion_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCVersion_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[GetObjByGcVersionIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )
//该表没有使用Cache,不需要生成[GetObjByGcVersionIdlocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[UpdateObjInLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache
//该表没有使用Cache,不需要生成[GetNameByGcVersionIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
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
export function GCVersion_SortFunDefa(a: clsGCVersionEN, b: clsGCVersionEN): number {
  return a.gcVersionId.localeCompare(b.gcVersionId);
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
export function GCVersion_SortFunDefa2Fld(a: clsGCVersionEN, b: clsGCVersionEN): number {
  if (a.gcVersionDescription == b.gcVersionDescription)
    return a.versionNumber.localeCompare(b.versionNumber);
  else return a.gcVersionDescription.localeCompare(b.gcVersionDescription);
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
export function GCVersion_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsGCVersionEN.con_GcVersionId:
        return (a: clsGCVersionEN, b: clsGCVersionEN) => {
          return a.gcVersionId.localeCompare(b.gcVersionId);
        };
      case clsGCVersionEN.con_GcVersionDescription:
        return (a: clsGCVersionEN, b: clsGCVersionEN) => {
          if (a.gcVersionDescription == null) return -1;
          if (b.gcVersionDescription == null) return 1;
          return a.gcVersionDescription.localeCompare(b.gcVersionDescription);
        };
      case clsGCVersionEN.con_VersionNumber:
        return (a: clsGCVersionEN, b: clsGCVersionEN) => {
          return a.versionNumber.localeCompare(b.versionNumber);
        };
      case clsGCVersionEN.con_VersionCode:
        return (a: clsGCVersionEN, b: clsGCVersionEN) => {
          if (a.versionCode == null) return -1;
          if (b.versionCode == null) return 1;
          return a.versionCode.localeCompare(b.versionCode);
        };
      case clsGCVersionEN.con_PublishDate:
        return (a: clsGCVersionEN, b: clsGCVersionEN) => {
          return a.publishDate.localeCompare(b.publishDate);
        };
      case clsGCVersionEN.con_VersionState:
        return (a: clsGCVersionEN) => {
          if (a.versionState == true) return 1;
          else return -1;
        };
      case clsGCVersionEN.con_VersionUrl:
        return (a: clsGCVersionEN, b: clsGCVersionEN) => {
          if (a.versionUrl == null) return -1;
          if (b.versionUrl == null) return 1;
          return a.versionUrl.localeCompare(b.versionUrl);
        };
      case clsGCVersionEN.con_PrjId:
        return (a: clsGCVersionEN, b: clsGCVersionEN) => {
          if (a.prjId == null) return -1;
          if (b.prjId == null) return 1;
          return a.prjId.localeCompare(b.prjId);
        };
      case clsGCVersionEN.con_UpdDate:
        return (a: clsGCVersionEN, b: clsGCVersionEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsGCVersionEN.con_UpdUser:
        return (a: clsGCVersionEN, b: clsGCVersionEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsGCVersionEN.con_Memo:
        return (a: clsGCVersionEN, b: clsGCVersionEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[GCVersion]中不存在!(in ${gCVersion_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsGCVersionEN.con_GcVersionId:
        return (a: clsGCVersionEN, b: clsGCVersionEN) => {
          return b.gcVersionId.localeCompare(a.gcVersionId);
        };
      case clsGCVersionEN.con_GcVersionDescription:
        return (a: clsGCVersionEN, b: clsGCVersionEN) => {
          if (b.gcVersionDescription == null) return -1;
          if (a.gcVersionDescription == null) return 1;
          return b.gcVersionDescription.localeCompare(a.gcVersionDescription);
        };
      case clsGCVersionEN.con_VersionNumber:
        return (a: clsGCVersionEN, b: clsGCVersionEN) => {
          return b.versionNumber.localeCompare(a.versionNumber);
        };
      case clsGCVersionEN.con_VersionCode:
        return (a: clsGCVersionEN, b: clsGCVersionEN) => {
          if (b.versionCode == null) return -1;
          if (a.versionCode == null) return 1;
          return b.versionCode.localeCompare(a.versionCode);
        };
      case clsGCVersionEN.con_PublishDate:
        return (a: clsGCVersionEN, b: clsGCVersionEN) => {
          return b.publishDate.localeCompare(a.publishDate);
        };
      case clsGCVersionEN.con_VersionState:
        return (b: clsGCVersionEN) => {
          if (b.versionState == true) return 1;
          else return -1;
        };
      case clsGCVersionEN.con_VersionUrl:
        return (a: clsGCVersionEN, b: clsGCVersionEN) => {
          if (b.versionUrl == null) return -1;
          if (a.versionUrl == null) return 1;
          return b.versionUrl.localeCompare(a.versionUrl);
        };
      case clsGCVersionEN.con_PrjId:
        return (a: clsGCVersionEN, b: clsGCVersionEN) => {
          if (b.prjId == null) return -1;
          if (a.prjId == null) return 1;
          return b.prjId.localeCompare(a.prjId);
        };
      case clsGCVersionEN.con_UpdDate:
        return (a: clsGCVersionEN, b: clsGCVersionEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsGCVersionEN.con_UpdUser:
        return (a: clsGCVersionEN, b: clsGCVersionEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsGCVersionEN.con_Memo:
        return (a: clsGCVersionEN, b: clsGCVersionEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[GCVersion]中不存在!(in ${gCVersion_ConstructorName}.${strThisFuncName})`;
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
export async function GCVersion_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsGCVersionEN.con_GcVersionId:
      return (obj: clsGCVersionEN) => {
        return obj.gcVersionId === value;
      };
    case clsGCVersionEN.con_GcVersionDescription:
      return (obj: clsGCVersionEN) => {
        return obj.gcVersionDescription === value;
      };
    case clsGCVersionEN.con_VersionNumber:
      return (obj: clsGCVersionEN) => {
        return obj.versionNumber === value;
      };
    case clsGCVersionEN.con_VersionCode:
      return (obj: clsGCVersionEN) => {
        return obj.versionCode === value;
      };
    case clsGCVersionEN.con_PublishDate:
      return (obj: clsGCVersionEN) => {
        return obj.publishDate === value;
      };
    case clsGCVersionEN.con_VersionState:
      return (obj: clsGCVersionEN) => {
        return obj.versionState === value;
      };
    case clsGCVersionEN.con_VersionUrl:
      return (obj: clsGCVersionEN) => {
        return obj.versionUrl === value;
      };
    case clsGCVersionEN.con_PrjId:
      return (obj: clsGCVersionEN) => {
        return obj.prjId === value;
      };
    case clsGCVersionEN.con_UpdDate:
      return (obj: clsGCVersionEN) => {
        return obj.updDate === value;
      };
    case clsGCVersionEN.con_UpdUser:
      return (obj: clsGCVersionEN) => {
        return obj.updUser === value;
      };
    case clsGCVersionEN.con_Memo:
      return (obj: clsGCVersionEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[GCVersion]中不存在!(in ${gCVersion_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}
//该表没有使用Cache,不需要生成[GCVersion__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function GCVersion_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(gCVersion_Controller, strAction);

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
        gCVersion_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCVersion_ConstructorName,
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
export async function GCVersion_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(gCVersion_Controller, strAction);

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
        gCVersion_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCVersion_ConstructorName,
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
export async function GCVersion_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsGCVersionEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(gCVersion_Controller, strAction);

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
      const objGCVersion = GCVersion_GetObjFromJsonObj(returnObj);
      return objGCVersion;
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
        gCVersion_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCVersion_ConstructorName,
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
export async function GCVersion_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsGCVersionEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(gCVersion_Controller, strAction);

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
          gCVersion_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = GCVersion_GetObjLstByJSONObjLst(returnObjLst);
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
        gCVersion_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCVersion_ConstructorName,
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
 * @param arrGcVersionId:关键字列表
 * @returns 对象列表
 **/
export async function GCVersion_GetObjLstByGcVersionIdLstAsync(
  arrGcVersionId: Array<string>,
): Promise<Array<clsGCVersionEN>> {
  const strThisFuncName = 'GetObjLstByGcVersionIdLstAsync';
  const strAction = 'GetObjLstByGcVersionIdLst';
  const strUrl = GetWebApiUrl(gCVersion_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrGcVersionId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          gCVersion_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = GCVersion_GetObjLstByJSONObjLst(returnObjLst);
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
        gCVersion_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCVersion_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[GetObjLstByGcVersionIdLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

/**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export async function GCVersion_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsGCVersionEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(gCVersion_Controller, strAction);

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
          gCVersion_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = GCVersion_GetObjLstByJSONObjLst(returnObjLst);
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
        gCVersion_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCVersion_ConstructorName,
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
export async function GCVersion_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsGCVersionEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(gCVersion_Controller, strAction);

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
          gCVersion_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = GCVersion_GetObjLstByJSONObjLst(returnObjLst);
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
        gCVersion_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCVersion_ConstructorName,
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
export async function GCVersion_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsGCVersionEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsGCVersionEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(gCVersion_Controller, strAction);

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
          gCVersion_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = GCVersion_GetObjLstByJSONObjLst(returnObjLst);
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
        gCVersion_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCVersion_ConstructorName,
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
 * @param strGcVersionId:关键字
 * @returns 获取删除的结果
 **/
export async function GCVersion_DelRecordAsync(strGcVersionId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(gCVersion_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strGcVersionId);

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
        gCVersion_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCVersion_ConstructorName,
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
 * @param arrGcVersionId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function GCVersion_DelGCVersionsAsync(arrGcVersionId: Array<string>): Promise<number> {
  const strThisFuncName = 'DelGCVersionsAsync';
  const strAction = 'DelGCVersions';
  const strUrl = GetWebApiUrl(gCVersion_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrGcVersionId, config);
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
        gCVersion_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCVersion_ConstructorName,
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
export async function GCVersion_DelGCVersionsByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'DelGCVersionsByCondAsync';
  const strAction = 'DelGCVersionsByCond';
  const strUrl = GetWebApiUrl(gCVersion_Controller, strAction);

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
        gCVersion_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCVersion_ConstructorName,
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
 * @param objGCVersionEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function GCVersion_AddNewRecordAsync(
  objGCVersionEN: clsGCVersionEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  if (objGCVersionEN.gcVersionId === null || objGCVersionEN.gcVersionId === '') {
    const strMsg = '需要的对象的关键字为空,不能添加!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objGCVersionEN);
  const strUrl = GetWebApiUrl(gCVersion_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objGCVersionEN, config);
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
        gCVersion_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCVersion_ConstructorName,
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
 * @param objGCVersionEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function GCVersion_AddNewRecordWithMaxIdAsync(
  objGCVersionEN: clsGCVersionEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(gCVersion_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objGCVersionEN, config);
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
        gCVersion_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCVersion_ConstructorName,
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
 * @param objGCVersionEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function GCVersion_AddNewRecordWithReturnKeyAsync(
  objGCVersionEN: clsGCVersionEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(gCVersion_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objGCVersionEN, config);
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
        gCVersion_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCVersion_ConstructorName,
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
 * @param objGCVersionEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function GCVersion_UpdateRecordAsync(
  objGCVersionEN: clsGCVersionEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objGCVersionEN.sfUpdFldSetStr === undefined ||
    objGCVersionEN.sfUpdFldSetStr === null ||
    objGCVersionEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objGCVersionEN.gcVersionId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(gCVersion_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objGCVersionEN, config);
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
        gCVersion_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCVersion_ConstructorName,
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
 * @param objGCVersionEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function GCVersion_UpdateWithConditionAsync(
  objGCVersionEN: clsGCVersionEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objGCVersionEN.sfUpdFldSetStr === undefined ||
    objGCVersionEN.sfUpdFldSetStr === null ||
    objGCVersionEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objGCVersionEN.gcVersionId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(gCVersion_Controller, strAction);
  objGCVersionEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objGCVersionEN, config);
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
        gCVersion_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCVersion_ConstructorName,
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
export async function GCVersion_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(gCVersion_Controller, strAction);

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
        gCVersion_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCVersion_ConstructorName,
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
 * @param strGcVersionId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function GCVersion_IsExistAsync(strGcVersionId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(gCVersion_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strGcVersionId,
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
        gCVersion_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCVersion_ConstructorName,
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
export async function GCVersion_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(gCVersion_Controller, strAction);

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
        gCVersion_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCVersion_ConstructorName,
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
export async function GCVersion_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(gCVersion_Controller, strAction);

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
        gCVersion_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCVersion_ConstructorName,
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
export function GCVersion_GetWebApiUrl(strController: string, strAction: string): string {
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
export function GCVersion_CheckPropertyNew(pobjGCVersionEN: clsGCVersionEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjGCVersionEN.versionNumber) === true) {
    throw new Error(
      '(errid:Watl000411)字段[版本号]不能为空(In 生成代码版本)!(clsGCVersionBL:CheckPropertyNew0)',
    );
  }
  if (IsNullOrEmpty(pobjGCVersionEN.publishDate) === true) {
    throw new Error(
      '(errid:Watl000411)字段[发布日期]不能为空(In 生成代码版本)!(clsGCVersionBL:CheckPropertyNew0)',
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjGCVersionEN.gcVersionId) == false &&
    GetStrLen(pobjGCVersionEN.gcVersionId) > 4
  ) {
    throw new Error(
      '(errid:Watl000413)字段[生成代码版本Id(gcVersionId)]的长度不能超过4(In 生成代码版本(GCVersion))!值:$(pobjGCVersionEN.gcVersionId)(clsGCVersionBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjGCVersionEN.gcVersionDescription) == false &&
    GetStrLen(pobjGCVersionEN.gcVersionDescription) > 1000
  ) {
    throw new Error(
      '(errid:Watl000413)字段[版本说明(gcVersionDescription)]的长度不能超过1000(In 生成代码版本(GCVersion))!值:$(pobjGCVersionEN.gcVersionDescription)(clsGCVersionBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjGCVersionEN.versionNumber) == false &&
    GetStrLen(pobjGCVersionEN.versionNumber) > 50
  ) {
    throw new Error(
      '(errid:Watl000413)字段[版本号(versionNumber)]的长度不能超过50(In 生成代码版本(GCVersion))!值:$(pobjGCVersionEN.versionNumber)(clsGCVersionBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjGCVersionEN.versionCode) == false &&
    GetStrLen(pobjGCVersionEN.versionCode) > 50
  ) {
    throw new Error(
      '(errid:Watl000413)字段[版本代码(versionCode)]的长度不能超过50(In 生成代码版本(GCVersion))!值:$(pobjGCVersionEN.versionCode)(clsGCVersionBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjGCVersionEN.publishDate) == false &&
    GetStrLen(pobjGCVersionEN.publishDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[发布日期(publishDate)]的长度不能超过20(In 生成代码版本(GCVersion))!值:$(pobjGCVersionEN.publishDate)(clsGCVersionBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjGCVersionEN.versionUrl) == false &&
    GetStrLen(pobjGCVersionEN.versionUrl) > 500
  ) {
    throw new Error(
      '(errid:Watl000413)字段[版本文件(versionUrl)]的长度不能超过500(In 生成代码版本(GCVersion))!值:$(pobjGCVersionEN.versionUrl)(clsGCVersionBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjGCVersionEN.prjId) == false && GetStrLen(pobjGCVersionEN.prjId) > 4) {
    throw new Error(
      '(errid:Watl000413)字段[工程ID(prjId)]的长度不能超过4(In 生成代码版本(GCVersion))!值:$(pobjGCVersionEN.prjId)(clsGCVersionBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjGCVersionEN.updDate) == false && GetStrLen(pobjGCVersionEN.updDate) > 20) {
    throw new Error(
      '(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 生成代码版本(GCVersion))!值:$(pobjGCVersionEN.updDate)(clsGCVersionBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjGCVersionEN.updUser) == false && GetStrLen(pobjGCVersionEN.updUser) > 20) {
    throw new Error(
      '(errid:Watl000413)字段[修改者(updUser)]的长度不能超过20(In 生成代码版本(GCVersion))!值:$(pobjGCVersionEN.updUser)(clsGCVersionBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjGCVersionEN.memo) == false && GetStrLen(pobjGCVersionEN.memo) > 1000) {
    throw new Error(
      '(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In 生成代码版本(GCVersion))!值:$(pobjGCVersionEN.memo)(clsGCVersionBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjGCVersionEN.gcVersionId) == false &&
    undefined !== pobjGCVersionEN.gcVersionId &&
    tzDataType.isString(pobjGCVersionEN.gcVersionId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[生成代码版本Id(gcVersionId)]的值:[$(pobjGCVersionEN.gcVersionId)], 非法,应该为字符型(In 生成代码版本(GCVersion))!(clsGCVersionBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjGCVersionEN.gcVersionDescription) == false &&
    undefined !== pobjGCVersionEN.gcVersionDescription &&
    tzDataType.isString(pobjGCVersionEN.gcVersionDescription) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[版本说明(gcVersionDescription)]的值:[$(pobjGCVersionEN.gcVersionDescription)], 非法,应该为字符型(In 生成代码版本(GCVersion))!(clsGCVersionBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjGCVersionEN.versionNumber) == false &&
    undefined !== pobjGCVersionEN.versionNumber &&
    tzDataType.isString(pobjGCVersionEN.versionNumber) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[版本号(versionNumber)]的值:[$(pobjGCVersionEN.versionNumber)], 非法,应该为字符型(In 生成代码版本(GCVersion))!(clsGCVersionBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjGCVersionEN.versionCode) == false &&
    undefined !== pobjGCVersionEN.versionCode &&
    tzDataType.isString(pobjGCVersionEN.versionCode) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[版本代码(versionCode)]的值:[$(pobjGCVersionEN.versionCode)], 非法,应该为字符型(In 生成代码版本(GCVersion))!(clsGCVersionBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjGCVersionEN.publishDate) == false &&
    undefined !== pobjGCVersionEN.publishDate &&
    tzDataType.isString(pobjGCVersionEN.publishDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[发布日期(publishDate)]的值:[$(pobjGCVersionEN.publishDate)], 非法,应该为字符型(In 生成代码版本(GCVersion))!(clsGCVersionBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjGCVersionEN.versionState &&
    undefined !== pobjGCVersionEN.versionState &&
    tzDataType.isBoolean(pobjGCVersionEN.versionState) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[版本状态(versionState)]的值:[$(pobjGCVersionEN.versionState)], 非法,应该为布尔型(In 生成代码版本(GCVersion))!(clsGCVersionBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjGCVersionEN.versionUrl) == false &&
    undefined !== pobjGCVersionEN.versionUrl &&
    tzDataType.isString(pobjGCVersionEN.versionUrl) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[版本文件(versionUrl)]的值:[$(pobjGCVersionEN.versionUrl)], 非法,应该为字符型(In 生成代码版本(GCVersion))!(clsGCVersionBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjGCVersionEN.prjId) == false &&
    undefined !== pobjGCVersionEN.prjId &&
    tzDataType.isString(pobjGCVersionEN.prjId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[工程ID(prjId)]的值:[$(pobjGCVersionEN.prjId)], 非法,应该为字符型(In 生成代码版本(GCVersion))!(clsGCVersionBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjGCVersionEN.updDate) == false &&
    undefined !== pobjGCVersionEN.updDate &&
    tzDataType.isString(pobjGCVersionEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjGCVersionEN.updDate)], 非法,应该为字符型(In 生成代码版本(GCVersion))!(clsGCVersionBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjGCVersionEN.updUser) == false &&
    undefined !== pobjGCVersionEN.updUser &&
    tzDataType.isString(pobjGCVersionEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改者(updUser)]的值:[$(pobjGCVersionEN.updUser)], 非法,应该为字符型(In 生成代码版本(GCVersion))!(clsGCVersionBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjGCVersionEN.memo) == false &&
    undefined !== pobjGCVersionEN.memo &&
    tzDataType.isString(pobjGCVersionEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[说明(memo)]的值:[$(pobjGCVersionEN.memo)], 非法,应该为字符型(In 生成代码版本(GCVersion))!(clsGCVersionBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function GCVersion_CheckProperty4Update(pobjGCVersionEN: clsGCVersionEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjGCVersionEN.gcVersionId) == false &&
    GetStrLen(pobjGCVersionEN.gcVersionId) > 4
  ) {
    throw new Error(
      '(errid:Watl000416)字段[生成代码版本Id(gcVersionId)]的长度不能超过4(In 生成代码版本(GCVersion))!值:$(pobjGCVersionEN.gcVersionId)(clsGCVersionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjGCVersionEN.gcVersionDescription) == false &&
    GetStrLen(pobjGCVersionEN.gcVersionDescription) > 1000
  ) {
    throw new Error(
      '(errid:Watl000416)字段[版本说明(gcVersionDescription)]的长度不能超过1000(In 生成代码版本(GCVersion))!值:$(pobjGCVersionEN.gcVersionDescription)(clsGCVersionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjGCVersionEN.versionNumber) == false &&
    GetStrLen(pobjGCVersionEN.versionNumber) > 50
  ) {
    throw new Error(
      '(errid:Watl000416)字段[版本号(versionNumber)]的长度不能超过50(In 生成代码版本(GCVersion))!值:$(pobjGCVersionEN.versionNumber)(clsGCVersionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjGCVersionEN.versionCode) == false &&
    GetStrLen(pobjGCVersionEN.versionCode) > 50
  ) {
    throw new Error(
      '(errid:Watl000416)字段[版本代码(versionCode)]的长度不能超过50(In 生成代码版本(GCVersion))!值:$(pobjGCVersionEN.versionCode)(clsGCVersionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjGCVersionEN.publishDate) == false &&
    GetStrLen(pobjGCVersionEN.publishDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[发布日期(publishDate)]的长度不能超过20(In 生成代码版本(GCVersion))!值:$(pobjGCVersionEN.publishDate)(clsGCVersionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjGCVersionEN.versionUrl) == false &&
    GetStrLen(pobjGCVersionEN.versionUrl) > 500
  ) {
    throw new Error(
      '(errid:Watl000416)字段[版本文件(versionUrl)]的长度不能超过500(In 生成代码版本(GCVersion))!值:$(pobjGCVersionEN.versionUrl)(clsGCVersionBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjGCVersionEN.prjId) == false && GetStrLen(pobjGCVersionEN.prjId) > 4) {
    throw new Error(
      '(errid:Watl000416)字段[工程ID(prjId)]的长度不能超过4(In 生成代码版本(GCVersion))!值:$(pobjGCVersionEN.prjId)(clsGCVersionBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjGCVersionEN.updDate) == false && GetStrLen(pobjGCVersionEN.updDate) > 20) {
    throw new Error(
      '(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 生成代码版本(GCVersion))!值:$(pobjGCVersionEN.updDate)(clsGCVersionBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjGCVersionEN.updUser) == false && GetStrLen(pobjGCVersionEN.updUser) > 20) {
    throw new Error(
      '(errid:Watl000416)字段[修改者(updUser)]的长度不能超过20(In 生成代码版本(GCVersion))!值:$(pobjGCVersionEN.updUser)(clsGCVersionBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjGCVersionEN.memo) == false && GetStrLen(pobjGCVersionEN.memo) > 1000) {
    throw new Error(
      '(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In 生成代码版本(GCVersion))!值:$(pobjGCVersionEN.memo)(clsGCVersionBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjGCVersionEN.gcVersionId) == false &&
    undefined !== pobjGCVersionEN.gcVersionId &&
    tzDataType.isString(pobjGCVersionEN.gcVersionId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[生成代码版本Id(gcVersionId)]的值:[$(pobjGCVersionEN.gcVersionId)], 非法,应该为字符型(In 生成代码版本(GCVersion))!(clsGCVersionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjGCVersionEN.gcVersionDescription) == false &&
    undefined !== pobjGCVersionEN.gcVersionDescription &&
    tzDataType.isString(pobjGCVersionEN.gcVersionDescription) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[版本说明(gcVersionDescription)]的值:[$(pobjGCVersionEN.gcVersionDescription)], 非法,应该为字符型(In 生成代码版本(GCVersion))!(clsGCVersionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjGCVersionEN.versionNumber) == false &&
    undefined !== pobjGCVersionEN.versionNumber &&
    tzDataType.isString(pobjGCVersionEN.versionNumber) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[版本号(versionNumber)]的值:[$(pobjGCVersionEN.versionNumber)], 非法,应该为字符型(In 生成代码版本(GCVersion))!(clsGCVersionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjGCVersionEN.versionCode) == false &&
    undefined !== pobjGCVersionEN.versionCode &&
    tzDataType.isString(pobjGCVersionEN.versionCode) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[版本代码(versionCode)]的值:[$(pobjGCVersionEN.versionCode)], 非法,应该为字符型(In 生成代码版本(GCVersion))!(clsGCVersionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjGCVersionEN.publishDate) == false &&
    undefined !== pobjGCVersionEN.publishDate &&
    tzDataType.isString(pobjGCVersionEN.publishDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[发布日期(publishDate)]的值:[$(pobjGCVersionEN.publishDate)], 非法,应该为字符型(In 生成代码版本(GCVersion))!(clsGCVersionBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjGCVersionEN.versionState &&
    undefined !== pobjGCVersionEN.versionState &&
    tzDataType.isBoolean(pobjGCVersionEN.versionState) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[版本状态(versionState)]的值:[$(pobjGCVersionEN.versionState)], 非法,应该为布尔型(In 生成代码版本(GCVersion))!(clsGCVersionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjGCVersionEN.versionUrl) == false &&
    undefined !== pobjGCVersionEN.versionUrl &&
    tzDataType.isString(pobjGCVersionEN.versionUrl) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[版本文件(versionUrl)]的值:[$(pobjGCVersionEN.versionUrl)], 非法,应该为字符型(In 生成代码版本(GCVersion))!(clsGCVersionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjGCVersionEN.prjId) == false &&
    undefined !== pobjGCVersionEN.prjId &&
    tzDataType.isString(pobjGCVersionEN.prjId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[工程ID(prjId)]的值:[$(pobjGCVersionEN.prjId)], 非法,应该为字符型(In 生成代码版本(GCVersion))!(clsGCVersionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjGCVersionEN.updDate) == false &&
    undefined !== pobjGCVersionEN.updDate &&
    tzDataType.isString(pobjGCVersionEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjGCVersionEN.updDate)], 非法,应该为字符型(In 生成代码版本(GCVersion))!(clsGCVersionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjGCVersionEN.updUser) == false &&
    undefined !== pobjGCVersionEN.updUser &&
    tzDataType.isString(pobjGCVersionEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改者(updUser)]的值:[$(pobjGCVersionEN.updUser)], 非法,应该为字符型(In 生成代码版本(GCVersion))!(clsGCVersionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjGCVersionEN.memo) == false &&
    undefined !== pobjGCVersionEN.memo &&
    tzDataType.isString(pobjGCVersionEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[说明(memo)]的值:[$(pobjGCVersionEN.memo)], 非法,应该为字符型(In 生成代码版本(GCVersion))!(clsGCVersionBL:CheckProperty4Update)',
    );
  }
  //检查主键是否为Null或者空!
  if (IsNullOrEmpty(pobjGCVersionEN.gcVersionId) === true) {
    throw new Error(
      '(errid:Watl000064)字段[生成代码版本Id]不能为空(In 生成代码版本)!(clsGCVersionBL:CheckProperty4Update)',
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
export function GCVersion_GetJSONStrByObj(pobjGCVersionEN: clsGCVersionEN): string {
  pobjGCVersionEN.sfUpdFldSetStr = pobjGCVersionEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjGCVersionEN);
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
export function GCVersion_GetObjLstByJSONStr(strJSON: string): Array<clsGCVersionEN> {
  let arrGCVersionObjLst = new Array<clsGCVersionEN>();
  if (strJSON === '') {
    return arrGCVersionObjLst;
  }
  try {
    arrGCVersionObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrGCVersionObjLst;
  }
  return arrGCVersionObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrGCVersionObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function GCVersion_GetObjLstByJSONObjLst(
  arrGCVersionObjLstS: Array<clsGCVersionEN>,
): Array<clsGCVersionEN> {
  const arrGCVersionObjLst = new Array<clsGCVersionEN>();
  for (const objInFor of arrGCVersionObjLstS) {
    const obj1 = GCVersion_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrGCVersionObjLst.push(obj1);
  }
  return arrGCVersionObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function GCVersion_GetObjByJSONStr(strJSON: string): clsGCVersionEN {
  let pobjGCVersionEN = new clsGCVersionEN();
  if (strJSON === '') {
    return pobjGCVersionEN;
  }
  try {
    pobjGCVersionEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjGCVersionEN;
  }
  return pobjGCVersionEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function GCVersion_GetCombineCondition(objGCVersionCond: clsGCVersionEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objGCVersionCond.dicFldComparisonOp,
      clsGCVersionEN.con_GcVersionId,
    ) == true
  ) {
    const strComparisonOpGcVersionId: string =
      objGCVersionCond.dicFldComparisonOp[clsGCVersionEN.con_GcVersionId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsGCVersionEN.con_GcVersionId,
      objGCVersionCond.gcVersionId,
      strComparisonOpGcVersionId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objGCVersionCond.dicFldComparisonOp,
      clsGCVersionEN.con_GcVersionDescription,
    ) == true
  ) {
    const strComparisonOpGcVersionDescription: string =
      objGCVersionCond.dicFldComparisonOp[clsGCVersionEN.con_GcVersionDescription];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsGCVersionEN.con_GcVersionDescription,
      objGCVersionCond.gcVersionDescription,
      strComparisonOpGcVersionDescription,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objGCVersionCond.dicFldComparisonOp,
      clsGCVersionEN.con_VersionNumber,
    ) == true
  ) {
    const strComparisonOpVersionNumber: string =
      objGCVersionCond.dicFldComparisonOp[clsGCVersionEN.con_VersionNumber];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsGCVersionEN.con_VersionNumber,
      objGCVersionCond.versionNumber,
      strComparisonOpVersionNumber,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objGCVersionCond.dicFldComparisonOp,
      clsGCVersionEN.con_VersionCode,
    ) == true
  ) {
    const strComparisonOpVersionCode: string =
      objGCVersionCond.dicFldComparisonOp[clsGCVersionEN.con_VersionCode];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsGCVersionEN.con_VersionCode,
      objGCVersionCond.versionCode,
      strComparisonOpVersionCode,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objGCVersionCond.dicFldComparisonOp,
      clsGCVersionEN.con_PublishDate,
    ) == true
  ) {
    const strComparisonOpPublishDate: string =
      objGCVersionCond.dicFldComparisonOp[clsGCVersionEN.con_PublishDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsGCVersionEN.con_PublishDate,
      objGCVersionCond.publishDate,
      strComparisonOpPublishDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objGCVersionCond.dicFldComparisonOp,
      clsGCVersionEN.con_VersionState,
    ) == true
  ) {
    if (objGCVersionCond.versionState == true) {
      strWhereCond += Format(" And {0} = '1'", clsGCVersionEN.con_VersionState);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsGCVersionEN.con_VersionState);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objGCVersionCond.dicFldComparisonOp,
      clsGCVersionEN.con_VersionUrl,
    ) == true
  ) {
    const strComparisonOpVersionUrl: string =
      objGCVersionCond.dicFldComparisonOp[clsGCVersionEN.con_VersionUrl];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsGCVersionEN.con_VersionUrl,
      objGCVersionCond.versionUrl,
      strComparisonOpVersionUrl,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objGCVersionCond.dicFldComparisonOp,
      clsGCVersionEN.con_PrjId,
    ) == true
  ) {
    const strComparisonOpPrjId: string =
      objGCVersionCond.dicFldComparisonOp[clsGCVersionEN.con_PrjId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsGCVersionEN.con_PrjId,
      objGCVersionCond.prjId,
      strComparisonOpPrjId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objGCVersionCond.dicFldComparisonOp,
      clsGCVersionEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objGCVersionCond.dicFldComparisonOp[clsGCVersionEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsGCVersionEN.con_UpdDate,
      objGCVersionCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objGCVersionCond.dicFldComparisonOp,
      clsGCVersionEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objGCVersionCond.dicFldComparisonOp[clsGCVersionEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsGCVersionEN.con_UpdUser,
      objGCVersionCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objGCVersionCond.dicFldComparisonOp,
      clsGCVersionEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objGCVersionCond.dicFldComparisonOp[clsGCVersionEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsGCVersionEN.con_Memo,
      objGCVersionCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objGCVersionENS:源对象
 * @param objGCVersionENT:目标对象
 */
export function GCVersion_GetObjFromJsonObj(objGCVersionENS: clsGCVersionEN): clsGCVersionEN {
  const objGCVersionENT: clsGCVersionEN = new clsGCVersionEN();
  ObjectAssign(objGCVersionENT, objGCVersionENS);
  return objGCVersionENT;
}
