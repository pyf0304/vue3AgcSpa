/**
 * 类名:clsAssociationTabWApi
 * 表名:AssociationTab(00050276)
 * 版本:2023.10.12.1(服务器:WIN-SRV103-116)
 * 日期:2023/10/12 14:38:13
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
 * 关联(AssociationTab)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2023年10月12日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { GetStrLen, tzDataType, Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { clsAssociationTabEN } from '@/ts/L0Entity/SystemSet/clsAssociationTabEN';
import { GetExceptionStr, myShowErrorMsg, ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const associationTab_Controller = 'AssociationTabApi';
export const associationTab_ConstructorName = 'associationTab';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngmId:关键字
 * @returns 对象
 **/
export async function AssociationTab_GetObjBymIdAsync(
  lngmId: number,
): Promise<clsAssociationTabEN | null> {
  const strThisFuncName = 'GetObjBymIdAsync';

  if (lngmId == 0) {
    const strMsg = Format('参数:[lngmId]不能为空!(In clsAssociationTabWApi.GetObjBymIdAsync)');
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjBymId';
  const strUrl = GetWebApiUrl(associationTab_Controller, strAction);

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
      const objAssociationTab = AssociationTab_GetObjFromJsonObj(returnObj);
      return objAssociationTab;
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
        associationTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        associationTab_ConstructorName,
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
export function AssociationTab_SortFunDefa(a: clsAssociationTabEN, b: clsAssociationTabEN): number {
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
export function AssociationTab_SortFunDefa2Fld(
  a: clsAssociationTabEN,
  b: clsAssociationTabEN,
): number {
  if (a.prjId == b.prjId) return a.tabId.localeCompare(b.tabId);
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
export function AssociationTab_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsAssociationTabEN.con_mId:
        return (a: clsAssociationTabEN, b: clsAssociationTabEN) => {
          return a.mId - b.mId;
        };
      case clsAssociationTabEN.con_PrjId:
        return (a: clsAssociationTabEN, b: clsAssociationTabEN) => {
          return a.prjId.localeCompare(b.prjId);
        };
      case clsAssociationTabEN.con_TabId:
        return (a: clsAssociationTabEN, b: clsAssociationTabEN) => {
          return a.tabId.localeCompare(b.tabId);
        };
      case clsAssociationTabEN.con_AssociationTabId:
        return (a: clsAssociationTabEN, b: clsAssociationTabEN) => {
          return a.associationTabId.localeCompare(b.associationTabId);
        };
      case clsAssociationTabEN.con_AssociationPrjId:
        return (a: clsAssociationTabEN, b: clsAssociationTabEN) => {
          return a.associationPrjId.localeCompare(b.associationPrjId);
        };
      case clsAssociationTabEN.con_AssociationTypeId:
        return (a: clsAssociationTabEN, b: clsAssociationTabEN) => {
          return a.associationTypeId.localeCompare(b.associationTypeId);
        };
      case clsAssociationTabEN.con_UpdDate:
        return (a: clsAssociationTabEN, b: clsAssociationTabEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsAssociationTabEN.con_UpdUserId:
        return (a: clsAssociationTabEN, b: clsAssociationTabEN) => {
          if (a.updUserId == null) return -1;
          if (b.updUserId == null) return 1;
          return a.updUserId.localeCompare(b.updUserId);
        };
      case clsAssociationTabEN.con_Memo:
        return (a: clsAssociationTabEN, b: clsAssociationTabEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[AssociationTab]中不存在!(in ${associationTab_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsAssociationTabEN.con_mId:
        return (a: clsAssociationTabEN, b: clsAssociationTabEN) => {
          return b.mId - a.mId;
        };
      case clsAssociationTabEN.con_PrjId:
        return (a: clsAssociationTabEN, b: clsAssociationTabEN) => {
          return b.prjId.localeCompare(a.prjId);
        };
      case clsAssociationTabEN.con_TabId:
        return (a: clsAssociationTabEN, b: clsAssociationTabEN) => {
          return b.tabId.localeCompare(a.tabId);
        };
      case clsAssociationTabEN.con_AssociationTabId:
        return (a: clsAssociationTabEN, b: clsAssociationTabEN) => {
          return b.associationTabId.localeCompare(a.associationTabId);
        };
      case clsAssociationTabEN.con_AssociationPrjId:
        return (a: clsAssociationTabEN, b: clsAssociationTabEN) => {
          return b.associationPrjId.localeCompare(a.associationPrjId);
        };
      case clsAssociationTabEN.con_AssociationTypeId:
        return (a: clsAssociationTabEN, b: clsAssociationTabEN) => {
          return b.associationTypeId.localeCompare(a.associationTypeId);
        };
      case clsAssociationTabEN.con_UpdDate:
        return (a: clsAssociationTabEN, b: clsAssociationTabEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsAssociationTabEN.con_UpdUserId:
        return (a: clsAssociationTabEN, b: clsAssociationTabEN) => {
          if (b.updUserId == null) return -1;
          if (a.updUserId == null) return 1;
          return b.updUserId.localeCompare(a.updUserId);
        };
      case clsAssociationTabEN.con_Memo:
        return (a: clsAssociationTabEN, b: clsAssociationTabEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[AssociationTab]中不存在!(in ${associationTab_ConstructorName}.${strThisFuncName})`;
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
export async function AssociationTab_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsAssociationTabEN.con_mId:
      return (obj: clsAssociationTabEN) => {
        return obj.mId === value;
      };
    case clsAssociationTabEN.con_PrjId:
      return (obj: clsAssociationTabEN) => {
        return obj.prjId === value;
      };
    case clsAssociationTabEN.con_TabId:
      return (obj: clsAssociationTabEN) => {
        return obj.tabId === value;
      };
    case clsAssociationTabEN.con_AssociationTabId:
      return (obj: clsAssociationTabEN) => {
        return obj.associationTabId === value;
      };
    case clsAssociationTabEN.con_AssociationPrjId:
      return (obj: clsAssociationTabEN) => {
        return obj.associationPrjId === value;
      };
    case clsAssociationTabEN.con_AssociationTypeId:
      return (obj: clsAssociationTabEN) => {
        return obj.associationTypeId === value;
      };
    case clsAssociationTabEN.con_UpdDate:
      return (obj: clsAssociationTabEN) => {
        return obj.updDate === value;
      };
    case clsAssociationTabEN.con_UpdUserId:
      return (obj: clsAssociationTabEN) => {
        return obj.updUserId === value;
      };
    case clsAssociationTabEN.con_Memo:
      return (obj: clsAssociationTabEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[AssociationTab]中不存在!(in ${associationTab_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}
//该表没有使用Cache,不需要生成[AssociationTab__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function AssociationTab_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(associationTab_Controller, strAction);

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
        associationTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        associationTab_ConstructorName,
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
export async function AssociationTab_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(associationTab_Controller, strAction);

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
        associationTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        associationTab_ConstructorName,
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
export async function AssociationTab_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsAssociationTabEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(associationTab_Controller, strAction);

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
      const objAssociationTab = AssociationTab_GetObjFromJsonObj(returnObj);
      return objAssociationTab;
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
        associationTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        associationTab_ConstructorName,
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
export async function AssociationTab_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsAssociationTabEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(associationTab_Controller, strAction);

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
          associationTab_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = AssociationTab_GetObjLstByJSONObjLst(returnObjLst);
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
        associationTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        associationTab_ConstructorName,
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
export async function AssociationTab_GetObjLstBymIdLstAsync(
  arrmId: Array<string>,
): Promise<Array<clsAssociationTabEN>> {
  const strThisFuncName = 'GetObjLstBymIdLstAsync';
  const strAction = 'GetObjLstBymIdLst';
  const strUrl = GetWebApiUrl(associationTab_Controller, strAction);

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
          associationTab_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = AssociationTab_GetObjLstByJSONObjLst(returnObjLst);
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
        associationTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        associationTab_ConstructorName,
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
export async function AssociationTab_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsAssociationTabEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(associationTab_Controller, strAction);

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
          associationTab_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = AssociationTab_GetObjLstByJSONObjLst(returnObjLst);
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
        associationTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        associationTab_ConstructorName,
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
export async function AssociationTab_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsAssociationTabEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(associationTab_Controller, strAction);

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
          associationTab_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = AssociationTab_GetObjLstByJSONObjLst(returnObjLst);
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
        associationTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        associationTab_ConstructorName,
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
export async function AssociationTab_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsAssociationTabEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsAssociationTabEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(associationTab_Controller, strAction);

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
          associationTab_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = AssociationTab_GetObjLstByJSONObjLst(returnObjLst);
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
        associationTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        associationTab_ConstructorName,
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
export async function AssociationTab_DelRecordAsync(lngmId: number): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(associationTab_Controller, strAction);
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
        associationTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        associationTab_ConstructorName,
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
export async function AssociationTab_DelAssociationTabsAsync(
  arrmId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelAssociationTabsAsync';
  const strAction = 'DelAssociationTabs';
  const strUrl = GetWebApiUrl(associationTab_Controller, strAction);

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
        associationTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        associationTab_ConstructorName,
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
export async function AssociationTab_DelAssociationTabsByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelAssociationTabsByCondAsync';
  const strAction = 'DelAssociationTabsByCond';
  const strUrl = GetWebApiUrl(associationTab_Controller, strAction);

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
        associationTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        associationTab_ConstructorName,
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
 * @param objAssociationTabEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function AssociationTab_AddNewRecordAsync(
  objAssociationTabEN: clsAssociationTabEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objAssociationTabEN);
  const strUrl = GetWebApiUrl(associationTab_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objAssociationTabEN, config);
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
        associationTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        associationTab_ConstructorName,
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
 * @param objAssociationTabEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function AssociationTab_AddNewRecordWithReturnKeyAsync(
  objAssociationTabEN: clsAssociationTabEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(associationTab_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objAssociationTabEN, config);
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
        associationTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        associationTab_ConstructorName,
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
 * @param objAssociationTabEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function AssociationTab_UpdateRecordAsync(
  objAssociationTabEN: clsAssociationTabEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objAssociationTabEN.sfUpdFldSetStr === undefined ||
    objAssociationTabEN.sfUpdFldSetStr === null ||
    objAssociationTabEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objAssociationTabEN.mId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(associationTab_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objAssociationTabEN, config);
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
        associationTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        associationTab_ConstructorName,
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
 * @param objAssociationTabEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function AssociationTab_UpdateWithConditionAsync(
  objAssociationTabEN: clsAssociationTabEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objAssociationTabEN.sfUpdFldSetStr === undefined ||
    objAssociationTabEN.sfUpdFldSetStr === null ||
    objAssociationTabEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objAssociationTabEN.mId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(associationTab_Controller, strAction);
  objAssociationTabEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objAssociationTabEN, config);
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
        associationTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        associationTab_ConstructorName,
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
export async function AssociationTab_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(associationTab_Controller, strAction);

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
        associationTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        associationTab_ConstructorName,
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
export async function AssociationTab_IsExistAsync(lngmId: number): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(associationTab_Controller, strAction);

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
        associationTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        associationTab_ConstructorName,
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
export async function AssociationTab_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(associationTab_Controller, strAction);

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
        associationTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        associationTab_ConstructorName,
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
export async function AssociationTab_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(associationTab_Controller, strAction);

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
        associationTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        associationTab_ConstructorName,
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
export function AssociationTab_GetWebApiUrl(strController: string, strAction: string): string {
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
export function AssociationTab_CheckPropertyNew(pobjAssociationTabEN: clsAssociationTabEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (
    IsNullOrEmpty(pobjAssociationTabEN.prjId) === true ||
    pobjAssociationTabEN.prjId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000411)字段[工程ID]不能为空(In 关联)!(clsAssociationTabBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjAssociationTabEN.tabId) === true ||
    pobjAssociationTabEN.tabId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000411)字段[表ID]不能为空(In 关联)!(clsAssociationTabBL:CheckPropertyNew0)',
    );
  }
  if (IsNullOrEmpty(pobjAssociationTabEN.associationTabId) === true) {
    throw new Error(
      '(errid:Watl000411)字段[关联表Id]不能为空(In 关联)!(clsAssociationTabBL:CheckPropertyNew0)',
    );
  }
  if (IsNullOrEmpty(pobjAssociationTabEN.associationPrjId) === true) {
    throw new Error(
      '(errid:Watl000411)字段[关联项目Id]不能为空(In 关联)!(clsAssociationTabBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjAssociationTabEN.associationTypeId) === true ||
    pobjAssociationTabEN.associationTypeId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000411)字段[关联类型Id]不能为空(In 关联)!(clsAssociationTabBL:CheckPropertyNew0)',
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjAssociationTabEN.prjId) == false &&
    GetStrLen(pobjAssociationTabEN.prjId) > 4
  ) {
    throw new Error(
      '(errid:Watl000413)字段[工程ID(prjId)]的长度不能超过4(In 关联(AssociationTab))!值:$(pobjAssociationTabEN.prjId)(clsAssociationTabBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjAssociationTabEN.tabId) == false &&
    GetStrLen(pobjAssociationTabEN.tabId) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[表ID(tabId)]的长度不能超过8(In 关联(AssociationTab))!值:$(pobjAssociationTabEN.tabId)(clsAssociationTabBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjAssociationTabEN.associationTabId) == false &&
    GetStrLen(pobjAssociationTabEN.associationTabId) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[关联表Id(associationTabId)]的长度不能超过8(In 关联(AssociationTab))!值:$(pobjAssociationTabEN.associationTabId)(clsAssociationTabBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjAssociationTabEN.associationPrjId) == false &&
    GetStrLen(pobjAssociationTabEN.associationPrjId) > 4
  ) {
    throw new Error(
      '(errid:Watl000413)字段[关联项目Id(associationPrjId)]的长度不能超过4(In 关联(AssociationTab))!值:$(pobjAssociationTabEN.associationPrjId)(clsAssociationTabBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjAssociationTabEN.associationTypeId) == false &&
    GetStrLen(pobjAssociationTabEN.associationTypeId) > 2
  ) {
    throw new Error(
      '(errid:Watl000413)字段[关联类型Id(associationTypeId)]的长度不能超过2(In 关联(AssociationTab))!值:$(pobjAssociationTabEN.associationTypeId)(clsAssociationTabBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjAssociationTabEN.updDate) == false &&
    GetStrLen(pobjAssociationTabEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 关联(AssociationTab))!值:$(pobjAssociationTabEN.updDate)(clsAssociationTabBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjAssociationTabEN.updUserId) == false &&
    GetStrLen(pobjAssociationTabEN.updUserId) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改用户Id(updUserId)]的长度不能超过20(In 关联(AssociationTab))!值:$(pobjAssociationTabEN.updUserId)(clsAssociationTabBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjAssociationTabEN.memo) == false &&
    GetStrLen(pobjAssociationTabEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In 关联(AssociationTab))!值:$(pobjAssociationTabEN.memo)(clsAssociationTabBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjAssociationTabEN.mId &&
    undefined !== pobjAssociationTabEN.mId &&
    tzDataType.isNumber(pobjAssociationTabEN.mId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[mId(mId)]的值:[$(pobjAssociationTabEN.mId)], 非法,应该为数值型(In 关联(AssociationTab))!(clsAssociationTabBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjAssociationTabEN.prjId) == false &&
    undefined !== pobjAssociationTabEN.prjId &&
    tzDataType.isString(pobjAssociationTabEN.prjId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[工程ID(prjId)]的值:[$(pobjAssociationTabEN.prjId)], 非法,应该为字符型(In 关联(AssociationTab))!(clsAssociationTabBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjAssociationTabEN.tabId) == false &&
    undefined !== pobjAssociationTabEN.tabId &&
    tzDataType.isString(pobjAssociationTabEN.tabId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[表ID(tabId)]的值:[$(pobjAssociationTabEN.tabId)], 非法,应该为字符型(In 关联(AssociationTab))!(clsAssociationTabBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjAssociationTabEN.associationTabId) == false &&
    undefined !== pobjAssociationTabEN.associationTabId &&
    tzDataType.isString(pobjAssociationTabEN.associationTabId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[关联表Id(associationTabId)]的值:[$(pobjAssociationTabEN.associationTabId)], 非法,应该为字符型(In 关联(AssociationTab))!(clsAssociationTabBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjAssociationTabEN.associationPrjId) == false &&
    undefined !== pobjAssociationTabEN.associationPrjId &&
    tzDataType.isString(pobjAssociationTabEN.associationPrjId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[关联项目Id(associationPrjId)]的值:[$(pobjAssociationTabEN.associationPrjId)], 非法,应该为字符型(In 关联(AssociationTab))!(clsAssociationTabBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjAssociationTabEN.associationTypeId) == false &&
    undefined !== pobjAssociationTabEN.associationTypeId &&
    tzDataType.isString(pobjAssociationTabEN.associationTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[关联类型Id(associationTypeId)]的值:[$(pobjAssociationTabEN.associationTypeId)], 非法,应该为字符型(In 关联(AssociationTab))!(clsAssociationTabBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjAssociationTabEN.updDate) == false &&
    undefined !== pobjAssociationTabEN.updDate &&
    tzDataType.isString(pobjAssociationTabEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjAssociationTabEN.updDate)], 非法,应该为字符型(In 关联(AssociationTab))!(clsAssociationTabBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjAssociationTabEN.updUserId) == false &&
    undefined !== pobjAssociationTabEN.updUserId &&
    tzDataType.isString(pobjAssociationTabEN.updUserId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改用户Id(updUserId)]的值:[$(pobjAssociationTabEN.updUserId)], 非法,应该为字符型(In 关联(AssociationTab))!(clsAssociationTabBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjAssociationTabEN.memo) == false &&
    undefined !== pobjAssociationTabEN.memo &&
    tzDataType.isString(pobjAssociationTabEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[说明(memo)]的值:[$(pobjAssociationTabEN.memo)], 非法,应该为字符型(In 关联(AssociationTab))!(clsAssociationTabBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function AssociationTab_CheckProperty4Update(pobjAssociationTabEN: clsAssociationTabEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjAssociationTabEN.prjId) == false &&
    GetStrLen(pobjAssociationTabEN.prjId) > 4
  ) {
    throw new Error(
      '(errid:Watl000416)字段[工程ID(prjId)]的长度不能超过4(In 关联(AssociationTab))!值:$(pobjAssociationTabEN.prjId)(clsAssociationTabBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjAssociationTabEN.tabId) == false &&
    GetStrLen(pobjAssociationTabEN.tabId) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[表ID(tabId)]的长度不能超过8(In 关联(AssociationTab))!值:$(pobjAssociationTabEN.tabId)(clsAssociationTabBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjAssociationTabEN.associationTabId) == false &&
    GetStrLen(pobjAssociationTabEN.associationTabId) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[关联表Id(associationTabId)]的长度不能超过8(In 关联(AssociationTab))!值:$(pobjAssociationTabEN.associationTabId)(clsAssociationTabBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjAssociationTabEN.associationPrjId) == false &&
    GetStrLen(pobjAssociationTabEN.associationPrjId) > 4
  ) {
    throw new Error(
      '(errid:Watl000416)字段[关联项目Id(associationPrjId)]的长度不能超过4(In 关联(AssociationTab))!值:$(pobjAssociationTabEN.associationPrjId)(clsAssociationTabBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjAssociationTabEN.associationTypeId) == false &&
    GetStrLen(pobjAssociationTabEN.associationTypeId) > 2
  ) {
    throw new Error(
      '(errid:Watl000416)字段[关联类型Id(associationTypeId)]的长度不能超过2(In 关联(AssociationTab))!值:$(pobjAssociationTabEN.associationTypeId)(clsAssociationTabBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjAssociationTabEN.updDate) == false &&
    GetStrLen(pobjAssociationTabEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 关联(AssociationTab))!值:$(pobjAssociationTabEN.updDate)(clsAssociationTabBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjAssociationTabEN.updUserId) == false &&
    GetStrLen(pobjAssociationTabEN.updUserId) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改用户Id(updUserId)]的长度不能超过20(In 关联(AssociationTab))!值:$(pobjAssociationTabEN.updUserId)(clsAssociationTabBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjAssociationTabEN.memo) == false &&
    GetStrLen(pobjAssociationTabEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In 关联(AssociationTab))!值:$(pobjAssociationTabEN.memo)(clsAssociationTabBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjAssociationTabEN.mId &&
    undefined !== pobjAssociationTabEN.mId &&
    tzDataType.isNumber(pobjAssociationTabEN.mId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[mId(mId)]的值:[$(pobjAssociationTabEN.mId)], 非法,应该为数值型(In 关联(AssociationTab))!(clsAssociationTabBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjAssociationTabEN.prjId) == false &&
    undefined !== pobjAssociationTabEN.prjId &&
    tzDataType.isString(pobjAssociationTabEN.prjId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[工程ID(prjId)]的值:[$(pobjAssociationTabEN.prjId)], 非法,应该为字符型(In 关联(AssociationTab))!(clsAssociationTabBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjAssociationTabEN.tabId) == false &&
    undefined !== pobjAssociationTabEN.tabId &&
    tzDataType.isString(pobjAssociationTabEN.tabId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[表ID(tabId)]的值:[$(pobjAssociationTabEN.tabId)], 非法,应该为字符型(In 关联(AssociationTab))!(clsAssociationTabBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjAssociationTabEN.associationTabId) == false &&
    undefined !== pobjAssociationTabEN.associationTabId &&
    tzDataType.isString(pobjAssociationTabEN.associationTabId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[关联表Id(associationTabId)]的值:[$(pobjAssociationTabEN.associationTabId)], 非法,应该为字符型(In 关联(AssociationTab))!(clsAssociationTabBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjAssociationTabEN.associationPrjId) == false &&
    undefined !== pobjAssociationTabEN.associationPrjId &&
    tzDataType.isString(pobjAssociationTabEN.associationPrjId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[关联项目Id(associationPrjId)]的值:[$(pobjAssociationTabEN.associationPrjId)], 非法,应该为字符型(In 关联(AssociationTab))!(clsAssociationTabBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjAssociationTabEN.associationTypeId) == false &&
    undefined !== pobjAssociationTabEN.associationTypeId &&
    tzDataType.isString(pobjAssociationTabEN.associationTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[关联类型Id(associationTypeId)]的值:[$(pobjAssociationTabEN.associationTypeId)], 非法,应该为字符型(In 关联(AssociationTab))!(clsAssociationTabBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjAssociationTabEN.updDate) == false &&
    undefined !== pobjAssociationTabEN.updDate &&
    tzDataType.isString(pobjAssociationTabEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjAssociationTabEN.updDate)], 非法,应该为字符型(In 关联(AssociationTab))!(clsAssociationTabBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjAssociationTabEN.updUserId) == false &&
    undefined !== pobjAssociationTabEN.updUserId &&
    tzDataType.isString(pobjAssociationTabEN.updUserId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改用户Id(updUserId)]的值:[$(pobjAssociationTabEN.updUserId)], 非法,应该为字符型(In 关联(AssociationTab))!(clsAssociationTabBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjAssociationTabEN.memo) == false &&
    undefined !== pobjAssociationTabEN.memo &&
    tzDataType.isString(pobjAssociationTabEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[说明(memo)]的值:[$(pobjAssociationTabEN.memo)], 非法,应该为字符型(In 关联(AssociationTab))!(clsAssociationTabBL:CheckProperty4Update)',
    );
  }
  //检查主键是否为Null或者空!
  if (
    null === pobjAssociationTabEN.mId ||
    (pobjAssociationTabEN.mId != null && pobjAssociationTabEN.mId.toString() === '')
  ) {
    throw new Error(
      '(errid:Watl000064)字段[mId]不能为空(In 关联)!(clsAssociationTabBL:CheckProperty4Update)',
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
export function AssociationTab_GetJSONStrByObj(pobjAssociationTabEN: clsAssociationTabEN): string {
  pobjAssociationTabEN.sfUpdFldSetStr = pobjAssociationTabEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjAssociationTabEN);
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
export function AssociationTab_GetObjLstByJSONStr(strJSON: string): Array<clsAssociationTabEN> {
  let arrAssociationTabObjLst = new Array<clsAssociationTabEN>();
  if (strJSON === '') {
    return arrAssociationTabObjLst;
  }
  try {
    arrAssociationTabObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrAssociationTabObjLst;
  }
  return arrAssociationTabObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrAssociationTabObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function AssociationTab_GetObjLstByJSONObjLst(
  arrAssociationTabObjLstS: Array<clsAssociationTabEN>,
): Array<clsAssociationTabEN> {
  const arrAssociationTabObjLst = new Array<clsAssociationTabEN>();
  for (const objInFor of arrAssociationTabObjLstS) {
    const obj1 = AssociationTab_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrAssociationTabObjLst.push(obj1);
  }
  return arrAssociationTabObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function AssociationTab_GetObjByJSONStr(strJSON: string): clsAssociationTabEN {
  let pobjAssociationTabEN = new clsAssociationTabEN();
  if (strJSON === '') {
    return pobjAssociationTabEN;
  }
  try {
    pobjAssociationTabEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjAssociationTabEN;
  }
  return pobjAssociationTabEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function AssociationTab_GetCombineCondition(
  objAssociationTabCond: clsAssociationTabEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objAssociationTabCond.dicFldComparisonOp,
      clsAssociationTabEN.con_mId,
    ) == true
  ) {
    const strComparisonOpmId: string =
      objAssociationTabCond.dicFldComparisonOp[clsAssociationTabEN.con_mId];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsAssociationTabEN.con_mId,
      objAssociationTabCond.mId,
      strComparisonOpmId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objAssociationTabCond.dicFldComparisonOp,
      clsAssociationTabEN.con_PrjId,
    ) == true
  ) {
    const strComparisonOpPrjId: string =
      objAssociationTabCond.dicFldComparisonOp[clsAssociationTabEN.con_PrjId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsAssociationTabEN.con_PrjId,
      objAssociationTabCond.prjId,
      strComparisonOpPrjId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objAssociationTabCond.dicFldComparisonOp,
      clsAssociationTabEN.con_TabId,
    ) == true
  ) {
    const strComparisonOpTabId: string =
      objAssociationTabCond.dicFldComparisonOp[clsAssociationTabEN.con_TabId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsAssociationTabEN.con_TabId,
      objAssociationTabCond.tabId,
      strComparisonOpTabId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objAssociationTabCond.dicFldComparisonOp,
      clsAssociationTabEN.con_AssociationTabId,
    ) == true
  ) {
    const strComparisonOpAssociationTabId: string =
      objAssociationTabCond.dicFldComparisonOp[clsAssociationTabEN.con_AssociationTabId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsAssociationTabEN.con_AssociationTabId,
      objAssociationTabCond.associationTabId,
      strComparisonOpAssociationTabId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objAssociationTabCond.dicFldComparisonOp,
      clsAssociationTabEN.con_AssociationPrjId,
    ) == true
  ) {
    const strComparisonOpAssociationPrjId: string =
      objAssociationTabCond.dicFldComparisonOp[clsAssociationTabEN.con_AssociationPrjId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsAssociationTabEN.con_AssociationPrjId,
      objAssociationTabCond.associationPrjId,
      strComparisonOpAssociationPrjId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objAssociationTabCond.dicFldComparisonOp,
      clsAssociationTabEN.con_AssociationTypeId,
    ) == true
  ) {
    const strComparisonOpAssociationTypeId: string =
      objAssociationTabCond.dicFldComparisonOp[clsAssociationTabEN.con_AssociationTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsAssociationTabEN.con_AssociationTypeId,
      objAssociationTabCond.associationTypeId,
      strComparisonOpAssociationTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objAssociationTabCond.dicFldComparisonOp,
      clsAssociationTabEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objAssociationTabCond.dicFldComparisonOp[clsAssociationTabEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsAssociationTabEN.con_UpdDate,
      objAssociationTabCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objAssociationTabCond.dicFldComparisonOp,
      clsAssociationTabEN.con_UpdUserId,
    ) == true
  ) {
    const strComparisonOpUpdUserId: string =
      objAssociationTabCond.dicFldComparisonOp[clsAssociationTabEN.con_UpdUserId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsAssociationTabEN.con_UpdUserId,
      objAssociationTabCond.updUserId,
      strComparisonOpUpdUserId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objAssociationTabCond.dicFldComparisonOp,
      clsAssociationTabEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objAssociationTabCond.dicFldComparisonOp[clsAssociationTabEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsAssociationTabEN.con_Memo,
      objAssociationTabCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--AssociationTab(关联),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strPrjId: 工程ID(要求唯一的字段)
 * @param strTabId: 表ID(要求唯一的字段)
 * @param strAssociationPrjId: 关联项目Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function AssociationTab_GetUniCondStr(objAssociationTabEN: clsAssociationTabEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and PrjId = '{0}'", objAssociationTabEN.prjId);
  strWhereCond += Format(" and TabId = '{0}'", objAssociationTabEN.tabId);
  strWhereCond += Format(" and AssociationPrjId = '{0}'", objAssociationTabEN.associationPrjId);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--AssociationTab(关联),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strPrjId: 工程ID(要求唯一的字段)
 * @param strTabId: 表ID(要求唯一的字段)
 * @param strAssociationPrjId: 关联项目Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function AssociationTab_GetUniCondStr4Update(
  objAssociationTabEN: clsAssociationTabEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and mId <> '{0}'", objAssociationTabEN.mId);
  strWhereCond += Format(" and PrjId = '{0}'", objAssociationTabEN.prjId);
  strWhereCond += Format(" and TabId = '{0}'", objAssociationTabEN.tabId);
  strWhereCond += Format(" and AssociationPrjId = '{0}'", objAssociationTabEN.associationPrjId);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objAssociationTabENS:源对象
 * @param objAssociationTabENT:目标对象
 */
export function AssociationTab_GetObjFromJsonObj(
  objAssociationTabENS: clsAssociationTabEN,
): clsAssociationTabEN {
  const objAssociationTabENT: clsAssociationTabEN = new clsAssociationTabEN();
  ObjectAssign(objAssociationTabENT, objAssociationTabENS);
  return objAssociationTabENT;
}
