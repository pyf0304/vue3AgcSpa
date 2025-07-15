/**
 * 类名:clsCmProjectPrjTabWApi
 * 表名:CmProjectPrjTab(00050530)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/13 23:53:30
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 应用类型:Vue应用InCore-TS(30)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:代码管理(CodeMan)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * CM项目工程表关系(CmProjectPrjTab)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2025年06月13日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { ObjectAssign, GetExceptionStr, myShowErrorMsg } from '@/ts/PubFun/clsCommFunc4Web';
import { clsCmProjectPrjTabENEx } from '@/ts/L0Entity/CodeMan/clsCmProjectPrjTabENEx';
import { clsCmProjectPrjTabEN } from '@/ts/L0Entity/CodeMan/clsCmProjectPrjTabEN';
import { Format, GetStrLen, tzDataType, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { CMProject_func } from '@/ts/L3ForWApi/CodeMan/clsCMProjectWApi';
import { clsCMProjectEN } from '@/ts/L0Entity/CodeMan/clsCMProjectEN';
import { Projects_func } from '@/ts/L3ForWApi/PrjManage/clsProjectsWApi';
import { clsProjectsEN } from '@/ts/L0Entity/PrjManage/clsProjectsEN';
import { clsOrderByData } from '@/ts/PubFun/clsOrderByData';
import { AddRecordResult } from '@/ts/PubFun/AddRecordResult';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';

export const cmProjectPrjTab_Controller = 'CmProjectPrjTabApi';
export const cmProjectPrjTab_ConstructorName = 'cmProjectPrjTab';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngmId:关键字
 * @returns 对象
 **/
export async function CmProjectPrjTab_GetObjBymIdAsync(
  lngmId: number,
): Promise<clsCmProjectPrjTabEN | null> {
  const strThisFuncName = 'GetObjBymIdAsync';

  if (lngmId == 0) {
    const strMsg = Format('参数:[lngmId]不能为空!(In clsCmProjectPrjTabWApi.GetObjBymIdAsync)');
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjBymId';
  const strUrl = GetWebApiUrl(cmProjectPrjTab_Controller, strAction);

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
      const objCmProjectPrjTab = CmProjectPrjTab_GetObjFromJsonObj(returnObj);
      return objCmProjectPrjTab;
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
        cmProjectPrjTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cmProjectPrjTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[GetObjBymIdlocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[GetObjBymIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )
//该表没有使用Cache,不需要生成[UpdateObjInLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-06-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function CmProjectPrjTab_SortFunDefa(
  a: clsCmProjectPrjTabEN,
  b: clsCmProjectPrjTabEN,
): number {
  return a.mId - b.mId;
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2025-06-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function CmProjectPrjTab_SortFunDefa2Fld(
  a: clsCmProjectPrjTabEN,
  b: clsCmProjectPrjTabEN,
): number {
  if (a.cmPrjId == b.cmPrjId) return a.tabId.localeCompare(b.tabId);
  else return a.cmPrjId.localeCompare(b.cmPrjId);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-06-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function CmProjectPrjTab_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsCmProjectPrjTabEN.con_mId:
        return (a: clsCmProjectPrjTabEN, b: clsCmProjectPrjTabEN) => {
          return a.mId - b.mId;
        };
      case clsCmProjectPrjTabEN.con_CmPrjId:
        return (a: clsCmProjectPrjTabEN, b: clsCmProjectPrjTabEN) => {
          return a.cmPrjId.localeCompare(b.cmPrjId);
        };
      case clsCmProjectPrjTabEN.con_TabId:
        return (a: clsCmProjectPrjTabEN, b: clsCmProjectPrjTabEN) => {
          return a.tabId.localeCompare(b.tabId);
        };
      case clsCmProjectPrjTabEN.con_OrderNum:
        return (a: clsCmProjectPrjTabEN, b: clsCmProjectPrjTabEN) => {
          return a.orderNum - b.orderNum;
        };
      case clsCmProjectPrjTabEN.con_UpdDate:
        return (a: clsCmProjectPrjTabEN, b: clsCmProjectPrjTabEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsCmProjectPrjTabEN.con_UpdUser:
        return (a: clsCmProjectPrjTabEN, b: clsCmProjectPrjTabEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsCmProjectPrjTabEN.con_Memo:
        return (a: clsCmProjectPrjTabEN, b: clsCmProjectPrjTabEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[CmProjectPrjTab]中不存在!(in ${cmProjectPrjTab_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsCmProjectPrjTabEN.con_mId:
        return (a: clsCmProjectPrjTabEN, b: clsCmProjectPrjTabEN) => {
          return b.mId - a.mId;
        };
      case clsCmProjectPrjTabEN.con_CmPrjId:
        return (a: clsCmProjectPrjTabEN, b: clsCmProjectPrjTabEN) => {
          return b.cmPrjId.localeCompare(a.cmPrjId);
        };
      case clsCmProjectPrjTabEN.con_TabId:
        return (a: clsCmProjectPrjTabEN, b: clsCmProjectPrjTabEN) => {
          return b.tabId.localeCompare(a.tabId);
        };
      case clsCmProjectPrjTabEN.con_OrderNum:
        return (a: clsCmProjectPrjTabEN, b: clsCmProjectPrjTabEN) => {
          return b.orderNum - a.orderNum;
        };
      case clsCmProjectPrjTabEN.con_UpdDate:
        return (a: clsCmProjectPrjTabEN, b: clsCmProjectPrjTabEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsCmProjectPrjTabEN.con_UpdUser:
        return (a: clsCmProjectPrjTabEN, b: clsCmProjectPrjTabEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsCmProjectPrjTabEN.con_Memo:
        return (a: clsCmProjectPrjTabEN, b: clsCmProjectPrjTabEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[CmProjectPrjTab]中不存在!(in ${cmProjectPrjTab_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}
//该表没有使用Cache,不需要生成[GetNameBymIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-06-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function CmProjectPrjTab_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsCmProjectPrjTabEN.con_mId:
      return (obj: clsCmProjectPrjTabEN) => {
        return obj.mId === value;
      };
    case clsCmProjectPrjTabEN.con_CmPrjId:
      return (obj: clsCmProjectPrjTabEN) => {
        return obj.cmPrjId === value;
      };
    case clsCmProjectPrjTabEN.con_TabId:
      return (obj: clsCmProjectPrjTabEN) => {
        return obj.tabId === value;
      };
    case clsCmProjectPrjTabEN.con_OrderNum:
      return (obj: clsCmProjectPrjTabEN) => {
        return obj.orderNum === value;
      };
    case clsCmProjectPrjTabEN.con_UpdDate:
      return (obj: clsCmProjectPrjTabEN) => {
        return obj.updDate === value;
      };
    case clsCmProjectPrjTabEN.con_UpdUser:
      return (obj: clsCmProjectPrjTabEN) => {
        return obj.updUser === value;
      };
    case clsCmProjectPrjTabEN.con_Memo:
      return (obj: clsCmProjectPrjTabEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[CmProjectPrjTab]中不存在!(in ${cmProjectPrjTab_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}
//该表没有使用Cache,不需要生成[func]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func )
//该表没有使用Cache,不需要生成[CmProjectPrjTab__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function CmProjectPrjTab_GetFldValueAsync(
  strFldName: string,
  strWhereCond: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetFldValueAsync';
  const strAction = 'GetFldValue';
  const strUrl = GetWebApiUrl(cmProjectPrjTab_Controller, strAction);

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
        cmProjectPrjTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cmProjectPrjTab_ConstructorName,
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
export async function CmProjectPrjTab_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(cmProjectPrjTab_Controller, strAction);

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
        cmProjectPrjTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cmProjectPrjTab_ConstructorName,
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
export async function CmProjectPrjTab_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(cmProjectPrjTab_Controller, strAction);

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
        cmProjectPrjTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cmProjectPrjTab_ConstructorName,
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
export async function CmProjectPrjTab_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsCmProjectPrjTabEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(cmProjectPrjTab_Controller, strAction);

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
      const objCmProjectPrjTab = CmProjectPrjTab_GetObjFromJsonObj(returnObj);
      return objCmProjectPrjTab;
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
        cmProjectPrjTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cmProjectPrjTab_ConstructorName,
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
export async function CmProjectPrjTab_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsCmProjectPrjTabEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(cmProjectPrjTab_Controller, strAction);

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
          cmProjectPrjTab_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = CmProjectPrjTab_GetObjLstByJSONObjLst(returnObjLst);
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
        cmProjectPrjTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cmProjectPrjTab_ConstructorName,
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
export async function CmProjectPrjTab_GetObjLstBymIdLstAsync(
  arrmId: Array<string>,
): Promise<Array<clsCmProjectPrjTabEN>> {
  const strThisFuncName = 'GetObjLstBymIdLstAsync';
  const strAction = 'GetObjLstBymIdLst';
  const strUrl = GetWebApiUrl(cmProjectPrjTab_Controller, strAction);

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
          cmProjectPrjTab_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = CmProjectPrjTab_GetObjLstByJSONObjLst(returnObjLst);
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
        cmProjectPrjTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cmProjectPrjTab_ConstructorName,
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
export async function CmProjectPrjTab_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsCmProjectPrjTabEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(cmProjectPrjTab_Controller, strAction);

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
          cmProjectPrjTab_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = CmProjectPrjTab_GetObjLstByJSONObjLst(returnObjLst);
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
        cmProjectPrjTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cmProjectPrjTab_ConstructorName,
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
export async function CmProjectPrjTab_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsCmProjectPrjTabEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(cmProjectPrjTab_Controller, strAction);

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
          cmProjectPrjTab_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = CmProjectPrjTab_GetObjLstByJSONObjLst(returnObjLst);
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
        cmProjectPrjTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cmProjectPrjTab_ConstructorName,
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
export async function CmProjectPrjTab_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsCmProjectPrjTabEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsCmProjectPrjTabEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(cmProjectPrjTab_Controller, strAction);

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
          cmProjectPrjTab_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = CmProjectPrjTab_GetObjLstByJSONObjLst(returnObjLst);
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
        cmProjectPrjTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cmProjectPrjTab_ConstructorName,
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
export async function CmProjectPrjTab_DelRecordAsync(lngmId: number): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(cmProjectPrjTab_Controller, strAction);
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
        cmProjectPrjTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cmProjectPrjTab_ConstructorName,
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
export async function CmProjectPrjTab_DelCmProjectPrjTabsAsync(
  arrmId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelCmProjectPrjTabsAsync';
  const strAction = 'DelCmProjectPrjTabs';
  const strUrl = GetWebApiUrl(cmProjectPrjTab_Controller, strAction);

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
        cmProjectPrjTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cmProjectPrjTab_ConstructorName,
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
 * @param objCmProjectPrjTabENS:源对象
 * @returns 目标对象=>clsCmProjectPrjTabEN:objCmProjectPrjTabENT
 **/
export function CmProjectPrjTab_CopyToEx(
  objCmProjectPrjTabENS: clsCmProjectPrjTabEN,
): clsCmProjectPrjTabENEx {
  const strThisFuncName = CmProjectPrjTab_CopyToEx.name;
  const objCmProjectPrjTabENT = new clsCmProjectPrjTabENEx();
  try {
    ObjectAssign(objCmProjectPrjTabENT, objCmProjectPrjTabENS);
    return objCmProjectPrjTabENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001294)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      cmProjectPrjTab_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objCmProjectPrjTabENT;
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2025-06-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function CmProjectPrjTab_FuncMapByFldName(
  strFldName: string,
  objCmProjectPrjTabEx: clsCmProjectPrjTabENEx,
) {
  const strThisFuncName = CmProjectPrjTab_FuncMapByFldName.name;
  strFldName = strFldName.replace('|Ex', '');
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsCmProjectPrjTabEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsCmProjectPrjTabENEx.con_CmPrjName:
      return CmProjectPrjTab_FuncMapCmPrjName(objCmProjectPrjTabEx);
    case clsCmProjectPrjTabENEx.con_PrjName:
      return CmProjectPrjTab_FuncMapPrjName(objCmProjectPrjTabEx);
    case clsCmProjectPrjTabENEx.con_PrjId:
      return CmProjectPrjTab_FuncMapPrjId(objCmProjectPrjTabEx);
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
 * 日期:2025-06-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByExKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function CmProjectPrjTab_SortFunByExKey(strKey: string, AscOrDesc: string) {
  strKey = strKey.replace('|Ex', '');
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsCmProjectPrjTabENEx.con_TabName:
        return (a: clsCmProjectPrjTabENEx, b: clsCmProjectPrjTabENEx) => {
          return a.tabName.localeCompare(b.tabName);
        };
      case clsCmProjectPrjTabENEx.con_CmPrjName:
        return (a: clsCmProjectPrjTabENEx, b: clsCmProjectPrjTabENEx) => {
          if (a.cmPrjName === null && b.cmPrjName === null) return 0;
          if (a.cmPrjName === null) return -1;
          if (b.cmPrjName === null) return 1;
          return a.cmPrjName.localeCompare(b.cmPrjName);
        };
      case clsCmProjectPrjTabENEx.con_PrjName:
        return (a: clsCmProjectPrjTabENEx, b: clsCmProjectPrjTabENEx) => {
          return a.prjName.localeCompare(b.prjName);
        };
      case clsCmProjectPrjTabENEx.con_PrjId:
        return (a: clsCmProjectPrjTabENEx, b: clsCmProjectPrjTabENEx) => {
          return a.prjId.localeCompare(b.prjId);
        };
      default:
        return CmProjectPrjTab_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsCmProjectPrjTabENEx.con_TabName:
        return (a: clsCmProjectPrjTabENEx, b: clsCmProjectPrjTabENEx) => {
          return b.tabName.localeCompare(a.tabName);
        };
      case clsCmProjectPrjTabENEx.con_CmPrjName:
        return (a: clsCmProjectPrjTabENEx, b: clsCmProjectPrjTabENEx) => {
          if (a.cmPrjName === null && b.cmPrjName === null) return 0;
          if (a.cmPrjName === null) return 1;
          if (b.cmPrjName === null) return -1;
          return b.cmPrjName.localeCompare(a.cmPrjName);
        };
      case clsCmProjectPrjTabENEx.con_PrjName:
        return (a: clsCmProjectPrjTabENEx, b: clsCmProjectPrjTabENEx) => {
          return b.prjName.localeCompare(a.prjName);
        };
      case clsCmProjectPrjTabENEx.con_PrjId:
        return (a: clsCmProjectPrjTabENEx, b: clsCmProjectPrjTabENEx) => {
          return b.prjId.localeCompare(a.prjId);
        };
      default:
        return CmProjectPrjTab_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objCmProjectPrjTabS:源对象
 **/
export async function CmProjectPrjTab_FuncMapCmPrjName(objCmProjectPrjTab: clsCmProjectPrjTabENEx) {
  const strThisFuncName = CmProjectPrjTab_FuncMapCmPrjName.name;
  try {
    if (IsNullOrEmpty(objCmProjectPrjTab.cmPrjName) == true) {
      const CMProjectCmPrjId = objCmProjectPrjTab.cmPrjId;
      const CMProjectCmPrjName = await CMProject_func(
        clsCMProjectEN.con_CmPrjId,
        clsCMProjectEN.con_CmPrjName,
        CMProjectCmPrjId,
      );
      objCmProjectPrjTab.cmPrjName = CMProjectCmPrjName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001320)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      cmProjectPrjTab_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objCmProjectPrjTabS:源对象
 **/
export async function CmProjectPrjTab_FuncMapPrjName(objCmProjectPrjTab: clsCmProjectPrjTabENEx) {
  const strThisFuncName = CmProjectPrjTab_FuncMapPrjName.name;
  try {
    if (IsNullOrEmpty(objCmProjectPrjTab.prjName) == true) {
      const ProjectsPrjId = objCmProjectPrjTab.prjId;
      const ProjectsPrjName = await Projects_func(
        clsProjectsEN.con_PrjId,
        clsProjectsEN.con_PrjName,
        ProjectsPrjId,
      );
      objCmProjectPrjTab.prjName = ProjectsPrjName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001315)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      cmProjectPrjTab_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objCmProjectPrjTabS:源对象
 **/
export async function CmProjectPrjTab_FuncMapPrjId(objCmProjectPrjTab: clsCmProjectPrjTabENEx) {
  const strThisFuncName = CmProjectPrjTab_FuncMapPrjId.name;
  try {
    if (IsNullOrEmpty(objCmProjectPrjTab.prjId) == true) {
      const CMProjectCmPrjId = objCmProjectPrjTab.cmPrjId;
      const CMProjectPrjId = await CMProject_func(
        clsCMProjectEN.con_CmPrjId,
        clsCMProjectEN.con_PrjId,
        CMProjectCmPrjId,
      );
      objCmProjectPrjTab.prjId = CMProjectPrjId;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001322)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      cmProjectPrjTab_ConstructorName,
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
export async function CmProjectPrjTab_DelCmProjectPrjTabsByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelCmProjectPrjTabsByCondAsync';
  const strAction = 'DelCmProjectPrjTabsByCond';
  const strUrl = GetWebApiUrl(cmProjectPrjTab_Controller, strAction);

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
        cmProjectPrjTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cmProjectPrjTab_ConstructorName,
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
 * @param objCmProjectPrjTabEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function CmProjectPrjTab_AddNewRecordAsync(
  objCmProjectPrjTabEN: clsCmProjectPrjTabEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objCmProjectPrjTabEN);
  const strUrl = GetWebApiUrl(cmProjectPrjTab_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objCmProjectPrjTabEN, config);
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
        cmProjectPrjTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cmProjectPrjTab_ConstructorName,
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
 * 把所给的关键字列表相关的记录移顶
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GoTopAsync)
 * @param objCmProjectPrjTabEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function CmProjectPrjTab_GoTopAsync(objOrderByData: clsOrderByData): Promise<boolean> {
  const strThisFuncName = 'GoTopAsync';
  let strMsg = '';
  const strAction = 'GoTop';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表置顶时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(cmProjectPrjTab_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objOrderByData, config);
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
        cmProjectPrjTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cmProjectPrjTab_ConstructorName,
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
 * 把所给的关键字列表相关的记录上移
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpMoveAsync)
 * @param objCmProjectPrjTabEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function CmProjectPrjTab_UpMoveAsync(
  objOrderByData: clsOrderByData,
): Promise<boolean> {
  const strThisFuncName = 'UpMoveAsync';
  let strMsg = '';
  const strAction = 'UpMove';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表上移时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objCmProjectPrjTabEN);
  const strUrl = GetWebApiUrl(cmProjectPrjTab_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objOrderByData, config);
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
        cmProjectPrjTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cmProjectPrjTab_ConstructorName,
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
 * 把所给的关键字列表相关的记录下移
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DownMoveAsync)
 * @param objCmProjectPrjTabEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function CmProjectPrjTab_DownMoveAsync(
  objOrderByData: clsOrderByData,
): Promise<boolean> {
  const strThisFuncName = 'DownMoveAsync';
  let strMsg = '';
  const strAction = 'DownMove';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表下移时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objCmProjectPrjTabEN);
  const strUrl = GetWebApiUrl(cmProjectPrjTab_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objOrderByData, config);
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
        cmProjectPrjTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cmProjectPrjTab_ConstructorName,
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
export async function CmProjectPrjTab_AddNewObjSave(
  objCmProjectPrjTabEN: clsCmProjectPrjTabEN,
): Promise<AddRecordResult> {
  const strThisFuncName = 'AddNewObjSave';
  try {
    CmProjectPrjTab_CheckPropertyNew(objCmProjectPrjTabEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${cmProjectPrjTab_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    alert(strMsg);
    return { keyword: '', success: false }; //一定要有一个返回值,否则会出错!
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await CmProjectPrjTab_CheckUniCond4Add(objCmProjectPrjTabEN);
    if (bolIsExistCond == false) {
      return { keyword: '', success: false };
    }
    let returnBool = false;
    returnBool = await CmProjectPrjTab_AddNewRecordAsync(objCmProjectPrjTabEN);
    if (returnBool == true) {
      //CmProjectPrjTab_ReFreshCache();
    } else {
      const strInfo = `添加[CM项目工程表关系(CmProjectPrjTab)]记录不成功!`;
      //显示信息框
      throw strInfo;
    }
    return { keyword: objCmProjectPrjTabEN.mId.toString(), success: returnBool }; //一定要有一个返回值,否则会出错!
  } catch (e) {
    const strMsg = `添加记录不成功,${e}.(in ${cmProjectPrjTab_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export async function CmProjectPrjTab_CheckUniCond4Add(
  objCmProjectPrjTabEN: clsCmProjectPrjTabEN,
): Promise<boolean> {
  const strUniquenessCondition = CmProjectPrjTab_GetUniCondStr(objCmProjectPrjTabEN);
  const bolIsExistCondition = await CmProjectPrjTab_IsExistRecordAsync(strUniquenessCondition);
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
export async function CmProjectPrjTab_CheckUniCond4Update(
  objCmProjectPrjTabEN: clsCmProjectPrjTabEN,
): Promise<boolean> {
  const strUniquenessCondition = CmProjectPrjTab_GetUniCondStr4Update(objCmProjectPrjTabEN);
  const bolIsExistCondition = await CmProjectPrjTab_IsExistRecordAsync(strUniquenessCondition);
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
export async function CmProjectPrjTab_UpdateObjSave(
  objCmProjectPrjTabEN: clsCmProjectPrjTabEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateObjSave';
  objCmProjectPrjTabEN.sfUpdFldSetStr = objCmProjectPrjTabEN.updFldString; //设置哪些字段被修改(脏字段)
  if (objCmProjectPrjTabEN.mId == 0 || objCmProjectPrjTabEN.mId == undefined) {
    console.error('关键字不能为空!');
    throw '关键字不能为空!';
  }
  try {
    CmProjectPrjTab_CheckProperty4Update(objCmProjectPrjTabEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${cmProjectPrjTab_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await CmProjectPrjTab_CheckUniCond4Update(objCmProjectPrjTabEN);
    if (bolIsExistCond == false) {
      return false;
    }
    const returnBool = await CmProjectPrjTab_UpdateRecordAsync(objCmProjectPrjTabEN);
    if (returnBool == true) {
      //CmProjectPrjTab_ReFreshCache();
    }
    return returnBool;
  } catch (e) {
    const strMsg = `修改记录不成功,${e}.(in ${cmProjectPrjTab_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 把所给的关键字列表相关的记录移底
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GoBottomAsync)
 * @param objCmProjectPrjTabEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function CmProjectPrjTab_GoBottomAsync(
  objOrderByData: clsOrderByData,
): Promise<boolean> {
  const strThisFuncName = 'GoBottomAsync';
  let strMsg = '';
  const strAction = 'GoBottom';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表置底时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objCmProjectPrjTabEN);
  const strUrl = GetWebApiUrl(cmProjectPrjTab_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objOrderByData, config);
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
        cmProjectPrjTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cmProjectPrjTab_ConstructorName,
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
 * 把列表记录重序
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReOrderAsync)
 * @param objCmProjectPrjTabEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function CmProjectPrjTab_ReOrderAsync(
  objOrderByData: clsOrderByData,
): Promise<boolean> {
  const strThisFuncName = 'ReOrderAsync';
  const strAction = 'ReOrder';
  //var strJSON = JSON.stringify(objCmProjectPrjTabEN);
  const strUrl = GetWebApiUrl(cmProjectPrjTab_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objOrderByData, config);
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
        cmProjectPrjTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cmProjectPrjTab_ConstructorName,
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
 * @param objCmProjectPrjTabEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function CmProjectPrjTab_AddNewRecordWithReturnKeyAsync(
  objCmProjectPrjTabEN: clsCmProjectPrjTabEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(cmProjectPrjTab_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objCmProjectPrjTabEN, config);
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
        cmProjectPrjTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cmProjectPrjTab_ConstructorName,
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
 * @param objCmProjectPrjTabEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function CmProjectPrjTab_UpdateRecordAsync(
  objCmProjectPrjTabEN: clsCmProjectPrjTabEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objCmProjectPrjTabEN.sfUpdFldSetStr === undefined ||
    objCmProjectPrjTabEN.sfUpdFldSetStr === null ||
    objCmProjectPrjTabEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objCmProjectPrjTabEN.mId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(cmProjectPrjTab_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objCmProjectPrjTabEN, config);
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
        cmProjectPrjTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cmProjectPrjTab_ConstructorName,
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
 * @param objCmProjectPrjTabEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function CmProjectPrjTab_EditRecordExAsync(
  objCmProjectPrjTabEN: clsCmProjectPrjTabEN,
): Promise<boolean> {
  const strThisFuncName = 'EditRecordExAsync';
  const strAction = 'EditRecordEx';
  if (
    objCmProjectPrjTabEN.sfUpdFldSetStr === undefined ||
    objCmProjectPrjTabEN.sfUpdFldSetStr === null ||
    objCmProjectPrjTabEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objCmProjectPrjTabEN.mId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(cmProjectPrjTab_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objCmProjectPrjTabEN, config);
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
        cmProjectPrjTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cmProjectPrjTab_ConstructorName,
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
 * @param objCmProjectPrjTabEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function CmProjectPrjTab_UpdateWithConditionAsync(
  objCmProjectPrjTabEN: clsCmProjectPrjTabEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objCmProjectPrjTabEN.sfUpdFldSetStr === undefined ||
    objCmProjectPrjTabEN.sfUpdFldSetStr === null ||
    objCmProjectPrjTabEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objCmProjectPrjTabEN.mId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(cmProjectPrjTab_Controller, strAction);
  objCmProjectPrjTabEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objCmProjectPrjTabEN, config);
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
        cmProjectPrjTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cmProjectPrjTab_ConstructorName,
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
export async function CmProjectPrjTab_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(cmProjectPrjTab_Controller, strAction);

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
        cmProjectPrjTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cmProjectPrjTab_ConstructorName,
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
export async function CmProjectPrjTab_IsExistAsync(lngmId: number): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(cmProjectPrjTab_Controller, strAction);

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
        cmProjectPrjTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cmProjectPrjTab_ConstructorName,
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
export async function CmProjectPrjTab_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(cmProjectPrjTab_Controller, strAction);

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
        cmProjectPrjTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cmProjectPrjTab_ConstructorName,
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
export async function CmProjectPrjTab_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(cmProjectPrjTab_Controller, strAction);

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
        cmProjectPrjTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cmProjectPrjTab_ConstructorName,
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
export function CmProjectPrjTab_GetWebApiUrl(strController: string, strAction: string): string {
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
export function CmProjectPrjTab_CheckPropertyNew(pobjCmProjectPrjTabEN: clsCmProjectPrjTabEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (
    IsNullOrEmpty(pobjCmProjectPrjTabEN.cmPrjId) === true ||
    pobjCmProjectPrjTabEN.cmPrjId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000411)字段[Cm工程Id]不能为空(In CM项目工程表关系)!(clsCmProjectPrjTabBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCmProjectPrjTabEN.tabId) === true ||
    pobjCmProjectPrjTabEN.tabId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000411)字段[表ID]不能为空(In CM项目工程表关系)!(clsCmProjectPrjTabBL:CheckPropertyNew0)`,
    );
  }
  if (
    null === pobjCmProjectPrjTabEN.orderNum ||
    (pobjCmProjectPrjTabEN.orderNum != null && pobjCmProjectPrjTabEN.orderNum.toString() === '')
  ) {
    throw new Error(
      `(errid:Watl000411)字段[序号]不能为空(In CM项目工程表关系)!(clsCmProjectPrjTabBL:CheckPropertyNew0)`,
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjCmProjectPrjTabEN.cmPrjId) == false &&
    GetStrLen(pobjCmProjectPrjTabEN.cmPrjId) > 6
  ) {
    throw new Error(
      `(errid:Watl000413)字段[Cm工程Id(cmPrjId)]的长度不能超过6(In CM项目工程表关系(CmProjectPrjTab))!值:${pobjCmProjectPrjTabEN.cmPrjId}(clsCmProjectPrjTabBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCmProjectPrjTabEN.tabId) == false &&
    GetStrLen(pobjCmProjectPrjTabEN.tabId) > 8
  ) {
    throw new Error(
      `(errid:Watl000413)字段[表ID(tabId)]的长度不能超过8(In CM项目工程表关系(CmProjectPrjTab))!值:${pobjCmProjectPrjTabEN.tabId}(clsCmProjectPrjTabBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCmProjectPrjTabEN.updDate) == false &&
    GetStrLen(pobjCmProjectPrjTabEN.updDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In CM项目工程表关系(CmProjectPrjTab))!值:${pobjCmProjectPrjTabEN.updDate}(clsCmProjectPrjTabBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCmProjectPrjTabEN.updUser) == false &&
    GetStrLen(pobjCmProjectPrjTabEN.updUser) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改者(updUser)]的长度不能超过20(In CM项目工程表关系(CmProjectPrjTab))!值:${pobjCmProjectPrjTabEN.updUser}(clsCmProjectPrjTabBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCmProjectPrjTabEN.memo) == false &&
    GetStrLen(pobjCmProjectPrjTabEN.memo) > 1000
  ) {
    throw new Error(
      `(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In CM项目工程表关系(CmProjectPrjTab))!值:${pobjCmProjectPrjTabEN.memo}(clsCmProjectPrjTabBL:CheckPropertyNew)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjCmProjectPrjTabEN.mId &&
    undefined !== pobjCmProjectPrjTabEN.mId &&
    tzDataType.isNumber(pobjCmProjectPrjTabEN.mId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[mId(mId)]的值:[${pobjCmProjectPrjTabEN.mId}], 非法,应该为数值型(In CM项目工程表关系(CmProjectPrjTab))!(clsCmProjectPrjTabBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCmProjectPrjTabEN.cmPrjId) == false &&
    undefined !== pobjCmProjectPrjTabEN.cmPrjId &&
    tzDataType.isString(pobjCmProjectPrjTabEN.cmPrjId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[Cm工程Id(cmPrjId)]的值:[${pobjCmProjectPrjTabEN.cmPrjId}], 非法,应该为字符型(In CM项目工程表关系(CmProjectPrjTab))!(clsCmProjectPrjTabBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCmProjectPrjTabEN.tabId) == false &&
    undefined !== pobjCmProjectPrjTabEN.tabId &&
    tzDataType.isString(pobjCmProjectPrjTabEN.tabId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[表ID(tabId)]的值:[${pobjCmProjectPrjTabEN.tabId}], 非法,应该为字符型(In CM项目工程表关系(CmProjectPrjTab))!(clsCmProjectPrjTabBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjCmProjectPrjTabEN.orderNum &&
    undefined !== pobjCmProjectPrjTabEN.orderNum &&
    tzDataType.isNumber(pobjCmProjectPrjTabEN.orderNum) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[序号(orderNum)]的值:[${pobjCmProjectPrjTabEN.orderNum}], 非法,应该为数值型(In CM项目工程表关系(CmProjectPrjTab))!(clsCmProjectPrjTabBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCmProjectPrjTabEN.updDate) == false &&
    undefined !== pobjCmProjectPrjTabEN.updDate &&
    tzDataType.isString(pobjCmProjectPrjTabEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjCmProjectPrjTabEN.updDate}], 非法,应该为字符型(In CM项目工程表关系(CmProjectPrjTab))!(clsCmProjectPrjTabBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCmProjectPrjTabEN.updUser) == false &&
    undefined !== pobjCmProjectPrjTabEN.updUser &&
    tzDataType.isString(pobjCmProjectPrjTabEN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改者(updUser)]的值:[${pobjCmProjectPrjTabEN.updUser}], 非法,应该为字符型(In CM项目工程表关系(CmProjectPrjTab))!(clsCmProjectPrjTabBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCmProjectPrjTabEN.memo) == false &&
    undefined !== pobjCmProjectPrjTabEN.memo &&
    tzDataType.isString(pobjCmProjectPrjTabEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[说明(memo)]的值:[${pobjCmProjectPrjTabEN.memo}], 非法,应该为字符型(In CM项目工程表关系(CmProjectPrjTab))!(clsCmProjectPrjTabBL:CheckPropertyNew0)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function CmProjectPrjTab_CheckProperty4Update(pobjCmProjectPrjTabEN: clsCmProjectPrjTabEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjCmProjectPrjTabEN.cmPrjId) == false &&
    GetStrLen(pobjCmProjectPrjTabEN.cmPrjId) > 6
  ) {
    throw new Error(
      `(errid:Watl000416)字段[Cm工程Id(cmPrjId)]的长度不能超过6(In CM项目工程表关系(CmProjectPrjTab))!值:${pobjCmProjectPrjTabEN.cmPrjId}(clsCmProjectPrjTabBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCmProjectPrjTabEN.tabId) == false &&
    GetStrLen(pobjCmProjectPrjTabEN.tabId) > 8
  ) {
    throw new Error(
      `(errid:Watl000416)字段[表ID(tabId)]的长度不能超过8(In CM项目工程表关系(CmProjectPrjTab))!值:${pobjCmProjectPrjTabEN.tabId}(clsCmProjectPrjTabBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCmProjectPrjTabEN.updDate) == false &&
    GetStrLen(pobjCmProjectPrjTabEN.updDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In CM项目工程表关系(CmProjectPrjTab))!值:${pobjCmProjectPrjTabEN.updDate}(clsCmProjectPrjTabBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCmProjectPrjTabEN.updUser) == false &&
    GetStrLen(pobjCmProjectPrjTabEN.updUser) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改者(updUser)]的长度不能超过20(In CM项目工程表关系(CmProjectPrjTab))!值:${pobjCmProjectPrjTabEN.updUser}(clsCmProjectPrjTabBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCmProjectPrjTabEN.memo) == false &&
    GetStrLen(pobjCmProjectPrjTabEN.memo) > 1000
  ) {
    throw new Error(
      `(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In CM项目工程表关系(CmProjectPrjTab))!值:${pobjCmProjectPrjTabEN.memo}(clsCmProjectPrjTabBL:CheckProperty4Update)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjCmProjectPrjTabEN.mId &&
    undefined !== pobjCmProjectPrjTabEN.mId &&
    tzDataType.isNumber(pobjCmProjectPrjTabEN.mId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[mId(mId)]的值:[${pobjCmProjectPrjTabEN.mId}], 非法,应该为数值型(In CM项目工程表关系(CmProjectPrjTab))!(clsCmProjectPrjTabBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCmProjectPrjTabEN.cmPrjId) == false &&
    undefined !== pobjCmProjectPrjTabEN.cmPrjId &&
    tzDataType.isString(pobjCmProjectPrjTabEN.cmPrjId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[Cm工程Id(cmPrjId)]的值:[${pobjCmProjectPrjTabEN.cmPrjId}], 非法,应该为字符型(In CM项目工程表关系(CmProjectPrjTab))!(clsCmProjectPrjTabBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCmProjectPrjTabEN.tabId) == false &&
    undefined !== pobjCmProjectPrjTabEN.tabId &&
    tzDataType.isString(pobjCmProjectPrjTabEN.tabId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[表ID(tabId)]的值:[${pobjCmProjectPrjTabEN.tabId}], 非法,应该为字符型(In CM项目工程表关系(CmProjectPrjTab))!(clsCmProjectPrjTabBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjCmProjectPrjTabEN.orderNum &&
    undefined !== pobjCmProjectPrjTabEN.orderNum &&
    tzDataType.isNumber(pobjCmProjectPrjTabEN.orderNum) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[序号(orderNum)]的值:[${pobjCmProjectPrjTabEN.orderNum}], 非法,应该为数值型(In CM项目工程表关系(CmProjectPrjTab))!(clsCmProjectPrjTabBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCmProjectPrjTabEN.updDate) == false &&
    undefined !== pobjCmProjectPrjTabEN.updDate &&
    tzDataType.isString(pobjCmProjectPrjTabEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjCmProjectPrjTabEN.updDate}], 非法,应该为字符型(In CM项目工程表关系(CmProjectPrjTab))!(clsCmProjectPrjTabBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCmProjectPrjTabEN.updUser) == false &&
    undefined !== pobjCmProjectPrjTabEN.updUser &&
    tzDataType.isString(pobjCmProjectPrjTabEN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改者(updUser)]的值:[${pobjCmProjectPrjTabEN.updUser}], 非法,应该为字符型(In CM项目工程表关系(CmProjectPrjTab))!(clsCmProjectPrjTabBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCmProjectPrjTabEN.memo) == false &&
    undefined !== pobjCmProjectPrjTabEN.memo &&
    tzDataType.isString(pobjCmProjectPrjTabEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[说明(memo)]的值:[${pobjCmProjectPrjTabEN.memo}], 非法,应该为字符型(In CM项目工程表关系(CmProjectPrjTab))!(clsCmProjectPrjTabBL:CheckProperty4Update)`,
    );
  }
  //检查主键是否为Null或者空!
  if (
    null === pobjCmProjectPrjTabEN.mId ||
    (pobjCmProjectPrjTabEN.mId != null && pobjCmProjectPrjTabEN.mId.toString() === '')
  ) {
    throw new Error(
      `(errid:Watl000064)字段[mId]不能为空(In CM项目工程表关系)!(clsCmProjectPrjTabBL:CheckProperty4Update)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2025-06-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function CmProjectPrjTab_GetJSONStrByObj(
  pobjCmProjectPrjTabEN: clsCmProjectPrjTabEN,
): string {
  pobjCmProjectPrjTabEN.sfUpdFldSetStr = pobjCmProjectPrjTabEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjCmProjectPrjTabEN);
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
 * 日期:2025-06-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
 */
export function CmProjectPrjTab_GetObjLstByJSONStr(strJSON: string): Array<clsCmProjectPrjTabEN> {
  let arrCmProjectPrjTabObjLst = new Array<clsCmProjectPrjTabEN>();
  if (strJSON === '') {
    return arrCmProjectPrjTabObjLst;
  }
  try {
    arrCmProjectPrjTabObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrCmProjectPrjTabObjLst;
  }
  return arrCmProjectPrjTabObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-06-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrCmProjectPrjTabObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function CmProjectPrjTab_GetObjLstByJSONObjLst(
  arrCmProjectPrjTabObjLstS: Array<clsCmProjectPrjTabEN>,
): Array<clsCmProjectPrjTabEN> {
  const arrCmProjectPrjTabObjLst = new Array<clsCmProjectPrjTabEN>();
  for (const objInFor of arrCmProjectPrjTabObjLstS) {
    const obj1 = CmProjectPrjTab_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrCmProjectPrjTabObjLst.push(obj1);
  }
  return arrCmProjectPrjTabObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-06-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function CmProjectPrjTab_GetObjByJSONStr(strJSON: string): clsCmProjectPrjTabEN {
  let pobjCmProjectPrjTabEN = new clsCmProjectPrjTabEN();
  if (strJSON === '') {
    return pobjCmProjectPrjTabEN;
  }
  try {
    pobjCmProjectPrjTabEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjCmProjectPrjTabEN;
  }
  return pobjCmProjectPrjTabEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function CmProjectPrjTab_GetCombineCondition(
  objCmProjectPrjTabCond: clsCmProjectPrjTabEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objCmProjectPrjTabCond.dicFldComparisonOp,
      clsCmProjectPrjTabEN.con_mId,
    ) == true
  ) {
    const strComparisonOpmId: string =
      objCmProjectPrjTabCond.dicFldComparisonOp[clsCmProjectPrjTabEN.con_mId];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsCmProjectPrjTabEN.con_mId,
      objCmProjectPrjTabCond.mId,
      strComparisonOpmId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCmProjectPrjTabCond.dicFldComparisonOp,
      clsCmProjectPrjTabEN.con_CmPrjId,
    ) == true
  ) {
    const strComparisonOpCmPrjId: string =
      objCmProjectPrjTabCond.dicFldComparisonOp[clsCmProjectPrjTabEN.con_CmPrjId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCmProjectPrjTabEN.con_CmPrjId,
      objCmProjectPrjTabCond.cmPrjId,
      strComparisonOpCmPrjId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCmProjectPrjTabCond.dicFldComparisonOp,
      clsCmProjectPrjTabEN.con_TabId,
    ) == true
  ) {
    const strComparisonOpTabId: string =
      objCmProjectPrjTabCond.dicFldComparisonOp[clsCmProjectPrjTabEN.con_TabId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCmProjectPrjTabEN.con_TabId,
      objCmProjectPrjTabCond.tabId,
      strComparisonOpTabId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCmProjectPrjTabCond.dicFldComparisonOp,
      clsCmProjectPrjTabEN.con_OrderNum,
    ) == true
  ) {
    const strComparisonOpOrderNum: string =
      objCmProjectPrjTabCond.dicFldComparisonOp[clsCmProjectPrjTabEN.con_OrderNum];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsCmProjectPrjTabEN.con_OrderNum,
      objCmProjectPrjTabCond.orderNum,
      strComparisonOpOrderNum,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCmProjectPrjTabCond.dicFldComparisonOp,
      clsCmProjectPrjTabEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objCmProjectPrjTabCond.dicFldComparisonOp[clsCmProjectPrjTabEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCmProjectPrjTabEN.con_UpdDate,
      objCmProjectPrjTabCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCmProjectPrjTabCond.dicFldComparisonOp,
      clsCmProjectPrjTabEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objCmProjectPrjTabCond.dicFldComparisonOp[clsCmProjectPrjTabEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCmProjectPrjTabEN.con_UpdUser,
      objCmProjectPrjTabCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCmProjectPrjTabCond.dicFldComparisonOp,
      clsCmProjectPrjTabEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objCmProjectPrjTabCond.dicFldComparisonOp[clsCmProjectPrjTabEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCmProjectPrjTabEN.con_Memo,
      objCmProjectPrjTabCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--CmProjectPrjTab(CM项目工程表关系),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strTabId: 表ID(要求唯一的字段)
 * @param strCmPrjId: Cm工程Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function CmProjectPrjTab_GetUniCondStr(objCmProjectPrjTabEN: clsCmProjectPrjTabEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and TabId = '{0}'", objCmProjectPrjTabEN.tabId);
  strWhereCond += Format(" and CmPrjId = '{0}'", objCmProjectPrjTabEN.cmPrjId);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--CmProjectPrjTab(CM项目工程表关系),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strTabId: 表ID(要求唯一的字段)
 * @param strCmPrjId: Cm工程Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function CmProjectPrjTab_GetUniCondStr4Update(
  objCmProjectPrjTabEN: clsCmProjectPrjTabEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and mId <> '{0}'", objCmProjectPrjTabEN.mId);
  strWhereCond += Format(" and TabId = '{0}'", objCmProjectPrjTabEN.tabId);
  strWhereCond += Format(" and CmPrjId = '{0}'", objCmProjectPrjTabEN.cmPrjId);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objCmProjectPrjTabENS:源对象
 * @param objCmProjectPrjTabENT:目标对象
 */
export function CmProjectPrjTab_GetObjFromJsonObj(
  objCmProjectPrjTabENS: clsCmProjectPrjTabEN,
): clsCmProjectPrjTabEN {
  const objCmProjectPrjTabENT: clsCmProjectPrjTabEN = new clsCmProjectPrjTabEN();
  ObjectAssign(objCmProjectPrjTabENT, objCmProjectPrjTabENS);
  return objCmProjectPrjTabENT;
}
