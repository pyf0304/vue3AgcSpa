/**
 * 类名:clsUserDefaValue_LocalWApi
 * 表名:UserDefaValue_Local(00050089)
 * 版本:2023.10.12.1(服务器:WIN-SRV103-116)
 * 日期:2023/10/12 14:40:17
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:用户管理(UserManage)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 用户缺省值(UserDefaValue_Local)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2023年10月12日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { GetStrLen, tzDataType, Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { clsUserDefaValue_LocalEN } from '@/ts/L0Entity/UserManage/clsUserDefaValue_LocalEN';
import { GetExceptionStr, myShowErrorMsg, ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const userDefaValue_Local_Controller = 'UserDefaValue_LocalApi';
export const userDefaValue_Local_ConstructorName = 'userDefaValue_Local';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngmId:关键字
 * @returns 对象
 **/
export async function UserDefaValue_Local_GetObjBymIdAsync(
  lngmId: number,
): Promise<clsUserDefaValue_LocalEN | null> {
  const strThisFuncName = 'GetObjBymIdAsync';

  if (lngmId == 0) {
    const strMsg = Format('参数:[lngmId]不能为空!(In clsUserDefaValue_LocalWApi.GetObjBymIdAsync)');
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjBymId';
  const strUrl = GetWebApiUrl(userDefaValue_Local_Controller, strAction);

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
      const objUserDefaValue_Local = UserDefaValue_Local_GetObjFromJsonObj(returnObj);
      return objUserDefaValue_Local;
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
        userDefaValue_Local_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userDefaValue_Local_ConstructorName,
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
export function UserDefaValue_Local_SortFunDefa(
  a: clsUserDefaValue_LocalEN,
  b: clsUserDefaValue_LocalEN,
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
export function UserDefaValue_Local_SortFunDefa2Fld(
  a: clsUserDefaValue_LocalEN,
  b: clsUserDefaValue_LocalEN,
): number {
  if (a.defaValNameId == b.defaValNameId) return a.userId.localeCompare(b.userId);
  else return a.defaValNameId.localeCompare(b.defaValNameId);
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
export function UserDefaValue_Local_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsUserDefaValue_LocalEN.con_mId:
        return (a: clsUserDefaValue_LocalEN, b: clsUserDefaValue_LocalEN) => {
          return a.mId - b.mId;
        };
      case clsUserDefaValue_LocalEN.con_DefaValNameId:
        return (a: clsUserDefaValue_LocalEN, b: clsUserDefaValue_LocalEN) => {
          return a.defaValNameId.localeCompare(b.defaValNameId);
        };
      case clsUserDefaValue_LocalEN.con_UserId:
        return (a: clsUserDefaValue_LocalEN, b: clsUserDefaValue_LocalEN) => {
          return a.userId.localeCompare(b.userId);
        };
      case clsUserDefaValue_LocalEN.con_UserDefaValue:
        return (a: clsUserDefaValue_LocalEN, b: clsUserDefaValue_LocalEN) => {
          return a.userDefaValue.localeCompare(b.userDefaValue);
        };
      case clsUserDefaValue_LocalEN.con_PrjId:
        return (a: clsUserDefaValue_LocalEN, b: clsUserDefaValue_LocalEN) => {
          return a.prjId.localeCompare(b.prjId);
        };
      case clsUserDefaValue_LocalEN.con_UpdDate:
        return (a: clsUserDefaValue_LocalEN, b: clsUserDefaValue_LocalEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsUserDefaValue_LocalEN.con_UpdUserId:
        return (a: clsUserDefaValue_LocalEN, b: clsUserDefaValue_LocalEN) => {
          if (a.updUserId == null) return -1;
          if (b.updUserId == null) return 1;
          return a.updUserId.localeCompare(b.updUserId);
        };
      case clsUserDefaValue_LocalEN.con_Memo:
        return (a: clsUserDefaValue_LocalEN, b: clsUserDefaValue_LocalEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[UserDefaValue_Local]中不存在!(in ${userDefaValue_Local_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsUserDefaValue_LocalEN.con_mId:
        return (a: clsUserDefaValue_LocalEN, b: clsUserDefaValue_LocalEN) => {
          return b.mId - a.mId;
        };
      case clsUserDefaValue_LocalEN.con_DefaValNameId:
        return (a: clsUserDefaValue_LocalEN, b: clsUserDefaValue_LocalEN) => {
          return b.defaValNameId.localeCompare(a.defaValNameId);
        };
      case clsUserDefaValue_LocalEN.con_UserId:
        return (a: clsUserDefaValue_LocalEN, b: clsUserDefaValue_LocalEN) => {
          return b.userId.localeCompare(a.userId);
        };
      case clsUserDefaValue_LocalEN.con_UserDefaValue:
        return (a: clsUserDefaValue_LocalEN, b: clsUserDefaValue_LocalEN) => {
          return b.userDefaValue.localeCompare(a.userDefaValue);
        };
      case clsUserDefaValue_LocalEN.con_PrjId:
        return (a: clsUserDefaValue_LocalEN, b: clsUserDefaValue_LocalEN) => {
          return b.prjId.localeCompare(a.prjId);
        };
      case clsUserDefaValue_LocalEN.con_UpdDate:
        return (a: clsUserDefaValue_LocalEN, b: clsUserDefaValue_LocalEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsUserDefaValue_LocalEN.con_UpdUserId:
        return (a: clsUserDefaValue_LocalEN, b: clsUserDefaValue_LocalEN) => {
          if (b.updUserId == null) return -1;
          if (a.updUserId == null) return 1;
          return b.updUserId.localeCompare(a.updUserId);
        };
      case clsUserDefaValue_LocalEN.con_Memo:
        return (a: clsUserDefaValue_LocalEN, b: clsUserDefaValue_LocalEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[UserDefaValue_Local]中不存在!(in ${userDefaValue_Local_ConstructorName}.${strThisFuncName})`;
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
export async function UserDefaValue_Local_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsUserDefaValue_LocalEN.con_mId:
      return (obj: clsUserDefaValue_LocalEN) => {
        return obj.mId === value;
      };
    case clsUserDefaValue_LocalEN.con_DefaValNameId:
      return (obj: clsUserDefaValue_LocalEN) => {
        return obj.defaValNameId === value;
      };
    case clsUserDefaValue_LocalEN.con_UserId:
      return (obj: clsUserDefaValue_LocalEN) => {
        return obj.userId === value;
      };
    case clsUserDefaValue_LocalEN.con_UserDefaValue:
      return (obj: clsUserDefaValue_LocalEN) => {
        return obj.userDefaValue === value;
      };
    case clsUserDefaValue_LocalEN.con_PrjId:
      return (obj: clsUserDefaValue_LocalEN) => {
        return obj.prjId === value;
      };
    case clsUserDefaValue_LocalEN.con_UpdDate:
      return (obj: clsUserDefaValue_LocalEN) => {
        return obj.updDate === value;
      };
    case clsUserDefaValue_LocalEN.con_UpdUserId:
      return (obj: clsUserDefaValue_LocalEN) => {
        return obj.updUserId === value;
      };
    case clsUserDefaValue_LocalEN.con_Memo:
      return (obj: clsUserDefaValue_LocalEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[UserDefaValue_Local]中不存在!(in ${userDefaValue_Local_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}
//该表没有使用Cache,不需要生成[UserDefaValue_Local__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function UserDefaValue_Local_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(userDefaValue_Local_Controller, strAction);

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
        userDefaValue_Local_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userDefaValue_Local_ConstructorName,
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
export async function UserDefaValue_Local_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(userDefaValue_Local_Controller, strAction);

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
        userDefaValue_Local_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userDefaValue_Local_ConstructorName,
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
export async function UserDefaValue_Local_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsUserDefaValue_LocalEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(userDefaValue_Local_Controller, strAction);

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
      const objUserDefaValue_Local = UserDefaValue_Local_GetObjFromJsonObj(returnObj);
      return objUserDefaValue_Local;
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
        userDefaValue_Local_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userDefaValue_Local_ConstructorName,
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
export async function UserDefaValue_Local_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsUserDefaValue_LocalEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(userDefaValue_Local_Controller, strAction);

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
          userDefaValue_Local_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = UserDefaValue_Local_GetObjLstByJSONObjLst(returnObjLst);
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
        userDefaValue_Local_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userDefaValue_Local_ConstructorName,
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
export async function UserDefaValue_Local_GetObjLstBymIdLstAsync(
  arrmId: Array<string>,
): Promise<Array<clsUserDefaValue_LocalEN>> {
  const strThisFuncName = 'GetObjLstBymIdLstAsync';
  const strAction = 'GetObjLstBymIdLst';
  const strUrl = GetWebApiUrl(userDefaValue_Local_Controller, strAction);

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
          userDefaValue_Local_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = UserDefaValue_Local_GetObjLstByJSONObjLst(returnObjLst);
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
        userDefaValue_Local_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userDefaValue_Local_ConstructorName,
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
export async function UserDefaValue_Local_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsUserDefaValue_LocalEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(userDefaValue_Local_Controller, strAction);

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
          userDefaValue_Local_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = UserDefaValue_Local_GetObjLstByJSONObjLst(returnObjLst);
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
        userDefaValue_Local_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userDefaValue_Local_ConstructorName,
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
export async function UserDefaValue_Local_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsUserDefaValue_LocalEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(userDefaValue_Local_Controller, strAction);

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
          userDefaValue_Local_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = UserDefaValue_Local_GetObjLstByJSONObjLst(returnObjLst);
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
        userDefaValue_Local_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userDefaValue_Local_ConstructorName,
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
export async function UserDefaValue_Local_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsUserDefaValue_LocalEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsUserDefaValue_LocalEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(userDefaValue_Local_Controller, strAction);

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
          userDefaValue_Local_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = UserDefaValue_Local_GetObjLstByJSONObjLst(returnObjLst);
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
        userDefaValue_Local_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userDefaValue_Local_ConstructorName,
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
export async function UserDefaValue_Local_DelRecordAsync(lngmId: number): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(userDefaValue_Local_Controller, strAction);
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
        userDefaValue_Local_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userDefaValue_Local_ConstructorName,
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
export async function UserDefaValue_Local_DelUserDefaValue_LocalsAsync(
  arrmId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelUserDefaValue_LocalsAsync';
  const strAction = 'DelUserDefaValue_Locals';
  const strUrl = GetWebApiUrl(userDefaValue_Local_Controller, strAction);

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
        userDefaValue_Local_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userDefaValue_Local_ConstructorName,
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
export async function UserDefaValue_Local_DelUserDefaValue_LocalsByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelUserDefaValue_LocalsByCondAsync';
  const strAction = 'DelUserDefaValue_LocalsByCond';
  const strUrl = GetWebApiUrl(userDefaValue_Local_Controller, strAction);

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
        userDefaValue_Local_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userDefaValue_Local_ConstructorName,
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
 * @param objUserDefaValue_LocalEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function UserDefaValue_Local_AddNewRecordAsync(
  objUserDefaValue_LocalEN: clsUserDefaValue_LocalEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objUserDefaValue_LocalEN);
  const strUrl = GetWebApiUrl(userDefaValue_Local_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objUserDefaValue_LocalEN, config);
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
        userDefaValue_Local_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userDefaValue_Local_ConstructorName,
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
 * @param objUserDefaValue_LocalEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function UserDefaValue_Local_AddNewRecordWithReturnKeyAsync(
  objUserDefaValue_LocalEN: clsUserDefaValue_LocalEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(userDefaValue_Local_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objUserDefaValue_LocalEN, config);
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
        userDefaValue_Local_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userDefaValue_Local_ConstructorName,
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
 * @param objUserDefaValue_LocalEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function UserDefaValue_Local_UpdateRecordAsync(
  objUserDefaValue_LocalEN: clsUserDefaValue_LocalEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objUserDefaValue_LocalEN.sfUpdFldSetStr === undefined ||
    objUserDefaValue_LocalEN.sfUpdFldSetStr === null ||
    objUserDefaValue_LocalEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objUserDefaValue_LocalEN.mId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(userDefaValue_Local_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objUserDefaValue_LocalEN, config);
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
        userDefaValue_Local_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userDefaValue_Local_ConstructorName,
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
 * @param objUserDefaValue_LocalEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function UserDefaValue_Local_UpdateWithConditionAsync(
  objUserDefaValue_LocalEN: clsUserDefaValue_LocalEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objUserDefaValue_LocalEN.sfUpdFldSetStr === undefined ||
    objUserDefaValue_LocalEN.sfUpdFldSetStr === null ||
    objUserDefaValue_LocalEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objUserDefaValue_LocalEN.mId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(userDefaValue_Local_Controller, strAction);
  objUserDefaValue_LocalEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objUserDefaValue_LocalEN, config);
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
        userDefaValue_Local_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userDefaValue_Local_ConstructorName,
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
export async function UserDefaValue_Local_IsExistRecordAsync(
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(userDefaValue_Local_Controller, strAction);

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
        userDefaValue_Local_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userDefaValue_Local_ConstructorName,
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
export async function UserDefaValue_Local_IsExistAsync(lngmId: number): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(userDefaValue_Local_Controller, strAction);

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
        userDefaValue_Local_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userDefaValue_Local_ConstructorName,
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
export async function UserDefaValue_Local_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(userDefaValue_Local_Controller, strAction);

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
        userDefaValue_Local_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userDefaValue_Local_ConstructorName,
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
export async function UserDefaValue_Local_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(userDefaValue_Local_Controller, strAction);

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
        userDefaValue_Local_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userDefaValue_Local_ConstructorName,
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
export function UserDefaValue_Local_GetWebApiUrl(strController: string, strAction: string): string {
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
export function UserDefaValue_Local_CheckPropertyNew(
  pobjUserDefaValue_LocalEN: clsUserDefaValue_LocalEN,
) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjUserDefaValue_LocalEN.defaValNameId) === true) {
    throw new Error(
      '(errid:Watl000411)字段[DefaValNameId]不能为空(In 用户缺省值)!(clsUserDefaValue_LocalBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserDefaValue_LocalEN.userId) === true ||
    pobjUserDefaValue_LocalEN.userId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000411)字段[用户Id]不能为空(In 用户缺省值)!(clsUserDefaValue_LocalBL:CheckPropertyNew0)',
    );
  }
  if (IsNullOrEmpty(pobjUserDefaValue_LocalEN.userDefaValue) === true) {
    throw new Error(
      '(errid:Watl000411)字段[UserDefaValue]不能为空(In 用户缺省值)!(clsUserDefaValue_LocalBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserDefaValue_LocalEN.prjId) === true ||
    pobjUserDefaValue_LocalEN.prjId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000411)字段[工程ID]不能为空(In 用户缺省值)!(clsUserDefaValue_LocalBL:CheckPropertyNew0)',
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjUserDefaValue_LocalEN.defaValNameId) == false &&
    GetStrLen(pobjUserDefaValue_LocalEN.defaValNameId) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[DefaValNameId(defaValNameId)]的长度不能超过8(In 用户缺省值(UserDefaValue_Local))!值:$(pobjUserDefaValue_LocalEN.defaValNameId)(clsUserDefaValue_LocalBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserDefaValue_LocalEN.userId) == false &&
    GetStrLen(pobjUserDefaValue_LocalEN.userId) > 18
  ) {
    throw new Error(
      '(errid:Watl000413)字段[用户Id(userId)]的长度不能超过18(In 用户缺省值(UserDefaValue_Local))!值:$(pobjUserDefaValue_LocalEN.userId)(clsUserDefaValue_LocalBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserDefaValue_LocalEN.userDefaValue) == false &&
    GetStrLen(pobjUserDefaValue_LocalEN.userDefaValue) > 100
  ) {
    throw new Error(
      '(errid:Watl000413)字段[UserDefaValue(userDefaValue)]的长度不能超过100(In 用户缺省值(UserDefaValue_Local))!值:$(pobjUserDefaValue_LocalEN.userDefaValue)(clsUserDefaValue_LocalBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserDefaValue_LocalEN.prjId) == false &&
    GetStrLen(pobjUserDefaValue_LocalEN.prjId) > 4
  ) {
    throw new Error(
      '(errid:Watl000413)字段[工程ID(prjId)]的长度不能超过4(In 用户缺省值(UserDefaValue_Local))!值:$(pobjUserDefaValue_LocalEN.prjId)(clsUserDefaValue_LocalBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserDefaValue_LocalEN.updDate) == false &&
    GetStrLen(pobjUserDefaValue_LocalEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 用户缺省值(UserDefaValue_Local))!值:$(pobjUserDefaValue_LocalEN.updDate)(clsUserDefaValue_LocalBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserDefaValue_LocalEN.updUserId) == false &&
    GetStrLen(pobjUserDefaValue_LocalEN.updUserId) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改用户Id(updUserId)]的长度不能超过20(In 用户缺省值(UserDefaValue_Local))!值:$(pobjUserDefaValue_LocalEN.updUserId)(clsUserDefaValue_LocalBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserDefaValue_LocalEN.memo) == false &&
    GetStrLen(pobjUserDefaValue_LocalEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In 用户缺省值(UserDefaValue_Local))!值:$(pobjUserDefaValue_LocalEN.memo)(clsUserDefaValue_LocalBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjUserDefaValue_LocalEN.mId &&
    undefined !== pobjUserDefaValue_LocalEN.mId &&
    tzDataType.isNumber(pobjUserDefaValue_LocalEN.mId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[mId(mId)]的值:[$(pobjUserDefaValue_LocalEN.mId)], 非法,应该为数值型(In 用户缺省值(UserDefaValue_Local))!(clsUserDefaValue_LocalBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserDefaValue_LocalEN.defaValNameId) == false &&
    undefined !== pobjUserDefaValue_LocalEN.defaValNameId &&
    tzDataType.isString(pobjUserDefaValue_LocalEN.defaValNameId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[DefaValNameId(defaValNameId)]的值:[$(pobjUserDefaValue_LocalEN.defaValNameId)], 非法,应该为字符型(In 用户缺省值(UserDefaValue_Local))!(clsUserDefaValue_LocalBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserDefaValue_LocalEN.userId) == false &&
    undefined !== pobjUserDefaValue_LocalEN.userId &&
    tzDataType.isString(pobjUserDefaValue_LocalEN.userId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[用户Id(userId)]的值:[$(pobjUserDefaValue_LocalEN.userId)], 非法,应该为字符型(In 用户缺省值(UserDefaValue_Local))!(clsUserDefaValue_LocalBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserDefaValue_LocalEN.userDefaValue) == false &&
    undefined !== pobjUserDefaValue_LocalEN.userDefaValue &&
    tzDataType.isString(pobjUserDefaValue_LocalEN.userDefaValue) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[UserDefaValue(userDefaValue)]的值:[$(pobjUserDefaValue_LocalEN.userDefaValue)], 非法,应该为字符型(In 用户缺省值(UserDefaValue_Local))!(clsUserDefaValue_LocalBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserDefaValue_LocalEN.prjId) == false &&
    undefined !== pobjUserDefaValue_LocalEN.prjId &&
    tzDataType.isString(pobjUserDefaValue_LocalEN.prjId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[工程ID(prjId)]的值:[$(pobjUserDefaValue_LocalEN.prjId)], 非法,应该为字符型(In 用户缺省值(UserDefaValue_Local))!(clsUserDefaValue_LocalBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserDefaValue_LocalEN.updDate) == false &&
    undefined !== pobjUserDefaValue_LocalEN.updDate &&
    tzDataType.isString(pobjUserDefaValue_LocalEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjUserDefaValue_LocalEN.updDate)], 非法,应该为字符型(In 用户缺省值(UserDefaValue_Local))!(clsUserDefaValue_LocalBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserDefaValue_LocalEN.updUserId) == false &&
    undefined !== pobjUserDefaValue_LocalEN.updUserId &&
    tzDataType.isString(pobjUserDefaValue_LocalEN.updUserId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改用户Id(updUserId)]的值:[$(pobjUserDefaValue_LocalEN.updUserId)], 非法,应该为字符型(In 用户缺省值(UserDefaValue_Local))!(clsUserDefaValue_LocalBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserDefaValue_LocalEN.memo) == false &&
    undefined !== pobjUserDefaValue_LocalEN.memo &&
    tzDataType.isString(pobjUserDefaValue_LocalEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[说明(memo)]的值:[$(pobjUserDefaValue_LocalEN.memo)], 非法,应该为字符型(In 用户缺省值(UserDefaValue_Local))!(clsUserDefaValue_LocalBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function UserDefaValue_Local_CheckProperty4Update(
  pobjUserDefaValue_LocalEN: clsUserDefaValue_LocalEN,
) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjUserDefaValue_LocalEN.defaValNameId) == false &&
    GetStrLen(pobjUserDefaValue_LocalEN.defaValNameId) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[DefaValNameId(defaValNameId)]的长度不能超过8(In 用户缺省值(UserDefaValue_Local))!值:$(pobjUserDefaValue_LocalEN.defaValNameId)(clsUserDefaValue_LocalBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserDefaValue_LocalEN.userId) == false &&
    GetStrLen(pobjUserDefaValue_LocalEN.userId) > 18
  ) {
    throw new Error(
      '(errid:Watl000416)字段[用户Id(userId)]的长度不能超过18(In 用户缺省值(UserDefaValue_Local))!值:$(pobjUserDefaValue_LocalEN.userId)(clsUserDefaValue_LocalBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserDefaValue_LocalEN.userDefaValue) == false &&
    GetStrLen(pobjUserDefaValue_LocalEN.userDefaValue) > 100
  ) {
    throw new Error(
      '(errid:Watl000416)字段[UserDefaValue(userDefaValue)]的长度不能超过100(In 用户缺省值(UserDefaValue_Local))!值:$(pobjUserDefaValue_LocalEN.userDefaValue)(clsUserDefaValue_LocalBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserDefaValue_LocalEN.prjId) == false &&
    GetStrLen(pobjUserDefaValue_LocalEN.prjId) > 4
  ) {
    throw new Error(
      '(errid:Watl000416)字段[工程ID(prjId)]的长度不能超过4(In 用户缺省值(UserDefaValue_Local))!值:$(pobjUserDefaValue_LocalEN.prjId)(clsUserDefaValue_LocalBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserDefaValue_LocalEN.updDate) == false &&
    GetStrLen(pobjUserDefaValue_LocalEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 用户缺省值(UserDefaValue_Local))!值:$(pobjUserDefaValue_LocalEN.updDate)(clsUserDefaValue_LocalBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserDefaValue_LocalEN.updUserId) == false &&
    GetStrLen(pobjUserDefaValue_LocalEN.updUserId) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改用户Id(updUserId)]的长度不能超过20(In 用户缺省值(UserDefaValue_Local))!值:$(pobjUserDefaValue_LocalEN.updUserId)(clsUserDefaValue_LocalBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserDefaValue_LocalEN.memo) == false &&
    GetStrLen(pobjUserDefaValue_LocalEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In 用户缺省值(UserDefaValue_Local))!值:$(pobjUserDefaValue_LocalEN.memo)(clsUserDefaValue_LocalBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjUserDefaValue_LocalEN.mId &&
    undefined !== pobjUserDefaValue_LocalEN.mId &&
    tzDataType.isNumber(pobjUserDefaValue_LocalEN.mId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[mId(mId)]的值:[$(pobjUserDefaValue_LocalEN.mId)], 非法,应该为数值型(In 用户缺省值(UserDefaValue_Local))!(clsUserDefaValue_LocalBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserDefaValue_LocalEN.defaValNameId) == false &&
    undefined !== pobjUserDefaValue_LocalEN.defaValNameId &&
    tzDataType.isString(pobjUserDefaValue_LocalEN.defaValNameId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[DefaValNameId(defaValNameId)]的值:[$(pobjUserDefaValue_LocalEN.defaValNameId)], 非法,应该为字符型(In 用户缺省值(UserDefaValue_Local))!(clsUserDefaValue_LocalBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserDefaValue_LocalEN.userId) == false &&
    undefined !== pobjUserDefaValue_LocalEN.userId &&
    tzDataType.isString(pobjUserDefaValue_LocalEN.userId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[用户Id(userId)]的值:[$(pobjUserDefaValue_LocalEN.userId)], 非法,应该为字符型(In 用户缺省值(UserDefaValue_Local))!(clsUserDefaValue_LocalBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserDefaValue_LocalEN.userDefaValue) == false &&
    undefined !== pobjUserDefaValue_LocalEN.userDefaValue &&
    tzDataType.isString(pobjUserDefaValue_LocalEN.userDefaValue) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[UserDefaValue(userDefaValue)]的值:[$(pobjUserDefaValue_LocalEN.userDefaValue)], 非法,应该为字符型(In 用户缺省值(UserDefaValue_Local))!(clsUserDefaValue_LocalBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserDefaValue_LocalEN.prjId) == false &&
    undefined !== pobjUserDefaValue_LocalEN.prjId &&
    tzDataType.isString(pobjUserDefaValue_LocalEN.prjId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[工程ID(prjId)]的值:[$(pobjUserDefaValue_LocalEN.prjId)], 非法,应该为字符型(In 用户缺省值(UserDefaValue_Local))!(clsUserDefaValue_LocalBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserDefaValue_LocalEN.updDate) == false &&
    undefined !== pobjUserDefaValue_LocalEN.updDate &&
    tzDataType.isString(pobjUserDefaValue_LocalEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjUserDefaValue_LocalEN.updDate)], 非法,应该为字符型(In 用户缺省值(UserDefaValue_Local))!(clsUserDefaValue_LocalBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserDefaValue_LocalEN.updUserId) == false &&
    undefined !== pobjUserDefaValue_LocalEN.updUserId &&
    tzDataType.isString(pobjUserDefaValue_LocalEN.updUserId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改用户Id(updUserId)]的值:[$(pobjUserDefaValue_LocalEN.updUserId)], 非法,应该为字符型(In 用户缺省值(UserDefaValue_Local))!(clsUserDefaValue_LocalBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserDefaValue_LocalEN.memo) == false &&
    undefined !== pobjUserDefaValue_LocalEN.memo &&
    tzDataType.isString(pobjUserDefaValue_LocalEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[说明(memo)]的值:[$(pobjUserDefaValue_LocalEN.memo)], 非法,应该为字符型(In 用户缺省值(UserDefaValue_Local))!(clsUserDefaValue_LocalBL:CheckProperty4Update)',
    );
  }
  //检查主键是否为Null或者空!
  if (
    null === pobjUserDefaValue_LocalEN.mId ||
    (pobjUserDefaValue_LocalEN.mId != null && pobjUserDefaValue_LocalEN.mId.toString() === '')
  ) {
    throw new Error(
      '(errid:Watl000064)字段[mId]不能为空(In 用户缺省值)!(clsUserDefaValue_LocalBL:CheckProperty4Update)',
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
export function UserDefaValue_Local_GetJSONStrByObj(
  pobjUserDefaValue_LocalEN: clsUserDefaValue_LocalEN,
): string {
  pobjUserDefaValue_LocalEN.sfUpdFldSetStr = pobjUserDefaValue_LocalEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjUserDefaValue_LocalEN);
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
export function UserDefaValue_Local_GetObjLstByJSONStr(
  strJSON: string,
): Array<clsUserDefaValue_LocalEN> {
  let arrUserDefaValue_LocalObjLst = new Array<clsUserDefaValue_LocalEN>();
  if (strJSON === '') {
    return arrUserDefaValue_LocalObjLst;
  }
  try {
    arrUserDefaValue_LocalObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrUserDefaValue_LocalObjLst;
  }
  return arrUserDefaValue_LocalObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrUserDefaValue_LocalObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function UserDefaValue_Local_GetObjLstByJSONObjLst(
  arrUserDefaValue_LocalObjLstS: Array<clsUserDefaValue_LocalEN>,
): Array<clsUserDefaValue_LocalEN> {
  const arrUserDefaValue_LocalObjLst = new Array<clsUserDefaValue_LocalEN>();
  for (const objInFor of arrUserDefaValue_LocalObjLstS) {
    const obj1 = UserDefaValue_Local_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrUserDefaValue_LocalObjLst.push(obj1);
  }
  return arrUserDefaValue_LocalObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function UserDefaValue_Local_GetObjByJSONStr(strJSON: string): clsUserDefaValue_LocalEN {
  let pobjUserDefaValue_LocalEN = new clsUserDefaValue_LocalEN();
  if (strJSON === '') {
    return pobjUserDefaValue_LocalEN;
  }
  try {
    pobjUserDefaValue_LocalEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjUserDefaValue_LocalEN;
  }
  return pobjUserDefaValue_LocalEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function UserDefaValue_Local_GetCombineCondition(
  objUserDefaValue_LocalCond: clsUserDefaValue_LocalEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objUserDefaValue_LocalCond.dicFldComparisonOp,
      clsUserDefaValue_LocalEN.con_mId,
    ) == true
  ) {
    const strComparisonOpmId: string =
      objUserDefaValue_LocalCond.dicFldComparisonOp[clsUserDefaValue_LocalEN.con_mId];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsUserDefaValue_LocalEN.con_mId,
      objUserDefaValue_LocalCond.mId,
      strComparisonOpmId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objUserDefaValue_LocalCond.dicFldComparisonOp,
      clsUserDefaValue_LocalEN.con_DefaValNameId,
    ) == true
  ) {
    const strComparisonOpDefaValNameId: string =
      objUserDefaValue_LocalCond.dicFldComparisonOp[clsUserDefaValue_LocalEN.con_DefaValNameId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsUserDefaValue_LocalEN.con_DefaValNameId,
      objUserDefaValue_LocalCond.defaValNameId,
      strComparisonOpDefaValNameId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objUserDefaValue_LocalCond.dicFldComparisonOp,
      clsUserDefaValue_LocalEN.con_UserId,
    ) == true
  ) {
    const strComparisonOpUserId: string =
      objUserDefaValue_LocalCond.dicFldComparisonOp[clsUserDefaValue_LocalEN.con_UserId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsUserDefaValue_LocalEN.con_UserId,
      objUserDefaValue_LocalCond.userId,
      strComparisonOpUserId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objUserDefaValue_LocalCond.dicFldComparisonOp,
      clsUserDefaValue_LocalEN.con_UserDefaValue,
    ) == true
  ) {
    const strComparisonOpUserDefaValue: string =
      objUserDefaValue_LocalCond.dicFldComparisonOp[clsUserDefaValue_LocalEN.con_UserDefaValue];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsUserDefaValue_LocalEN.con_UserDefaValue,
      objUserDefaValue_LocalCond.userDefaValue,
      strComparisonOpUserDefaValue,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objUserDefaValue_LocalCond.dicFldComparisonOp,
      clsUserDefaValue_LocalEN.con_PrjId,
    ) == true
  ) {
    const strComparisonOpPrjId: string =
      objUserDefaValue_LocalCond.dicFldComparisonOp[clsUserDefaValue_LocalEN.con_PrjId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsUserDefaValue_LocalEN.con_PrjId,
      objUserDefaValue_LocalCond.prjId,
      strComparisonOpPrjId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objUserDefaValue_LocalCond.dicFldComparisonOp,
      clsUserDefaValue_LocalEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objUserDefaValue_LocalCond.dicFldComparisonOp[clsUserDefaValue_LocalEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsUserDefaValue_LocalEN.con_UpdDate,
      objUserDefaValue_LocalCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objUserDefaValue_LocalCond.dicFldComparisonOp,
      clsUserDefaValue_LocalEN.con_UpdUserId,
    ) == true
  ) {
    const strComparisonOpUpdUserId: string =
      objUserDefaValue_LocalCond.dicFldComparisonOp[clsUserDefaValue_LocalEN.con_UpdUserId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsUserDefaValue_LocalEN.con_UpdUserId,
      objUserDefaValue_LocalCond.updUserId,
      strComparisonOpUpdUserId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objUserDefaValue_LocalCond.dicFldComparisonOp,
      clsUserDefaValue_LocalEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objUserDefaValue_LocalCond.dicFldComparisonOp[clsUserDefaValue_LocalEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsUserDefaValue_LocalEN.con_Memo,
      objUserDefaValue_LocalCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--UserDefaValue_Local(用户缺省值),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strPrjId: 工程ID(要求唯一的字段)
 * @param strUserId: 用户Id(要求唯一的字段)
 * @param strDefaValNameId: DefaValNameId(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function UserDefaValue_Local_GetUniCondStr(
  objUserDefaValue_LocalEN: clsUserDefaValue_LocalEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and PrjId = '{0}'", objUserDefaValue_LocalEN.prjId);
  strWhereCond += Format(" and UserId = '{0}'", objUserDefaValue_LocalEN.userId);
  strWhereCond += Format(" and DefaValNameId = '{0}'", objUserDefaValue_LocalEN.defaValNameId);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--UserDefaValue_Local(用户缺省值),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strPrjId: 工程ID(要求唯一的字段)
 * @param strUserId: 用户Id(要求唯一的字段)
 * @param strDefaValNameId: DefaValNameId(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function UserDefaValue_Local_GetUniCondStr4Update(
  objUserDefaValue_LocalEN: clsUserDefaValue_LocalEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and mId <> '{0}'", objUserDefaValue_LocalEN.mId);
  strWhereCond += Format(" and PrjId = '{0}'", objUserDefaValue_LocalEN.prjId);
  strWhereCond += Format(" and UserId = '{0}'", objUserDefaValue_LocalEN.userId);
  strWhereCond += Format(" and DefaValNameId = '{0}'", objUserDefaValue_LocalEN.defaValNameId);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objUserDefaValue_LocalENS:源对象
 * @param objUserDefaValue_LocalENT:目标对象
 */
export function UserDefaValue_Local_GetObjFromJsonObj(
  objUserDefaValue_LocalENS: clsUserDefaValue_LocalEN,
): clsUserDefaValue_LocalEN {
  const objUserDefaValue_LocalENT: clsUserDefaValue_LocalEN = new clsUserDefaValue_LocalEN();
  ObjectAssign(objUserDefaValue_LocalENT, objUserDefaValue_LocalENS);
  return objUserDefaValue_LocalENT;
}
