/**
 * 类名:clsErrorIdManageWApi
 * 表名:ErrorIdManage(00050300)
 * 版本:2023.10.12.1(服务器:WIN-SRV103-116)
 * 日期:2023/10/12 14:38:43
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
 * 错误Id管理(ErrorIdManage)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2023年10月12日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { GetStrLen, tzDataType, Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { clsErrorIdManageEN } from '@/ts/L0Entity/SystemSet/clsErrorIdManageEN';
import { GetExceptionStr, myShowErrorMsg, ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const errorIdManage_Controller = 'ErrorIdManageApi';
export const errorIdManage_ConstructorName = 'errorIdManage';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngmId:关键字
 * @returns 对象
 **/
export async function ErrorIdManage_GetObjBymIdAsync(
  lngmId: number,
): Promise<clsErrorIdManageEN | null> {
  const strThisFuncName = 'GetObjBymIdAsync';

  if (lngmId == 0) {
    const strMsg = Format('参数:[lngmId]不能为空!(In clsErrorIdManageWApi.GetObjBymIdAsync)');
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjBymId';
  const strUrl = GetWebApiUrl(errorIdManage_Controller, strAction);

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
      const objErrorIdManage = ErrorIdManage_GetObjFromJsonObj(returnObj);
      return objErrorIdManage;
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
        errorIdManage_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        errorIdManage_ConstructorName,
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
export function ErrorIdManage_SortFunDefa(a: clsErrorIdManageEN, b: clsErrorIdManageEN): number {
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
export function ErrorIdManage_SortFunDefa2Fld(
  a: clsErrorIdManageEN,
  b: clsErrorIdManageEN,
): number {
  if (a.errID == b.errID) return a.progLevelTypeId.localeCompare(b.progLevelTypeId);
  else return a.errID.localeCompare(b.errID);
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
export function ErrorIdManage_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsErrorIdManageEN.con_mId:
        return (a: clsErrorIdManageEN, b: clsErrorIdManageEN) => {
          return a.mId - b.mId;
        };
      case clsErrorIdManageEN.con_ErrID:
        return (a: clsErrorIdManageEN, b: clsErrorIdManageEN) => {
          return a.errID.localeCompare(b.errID);
        };
      case clsErrorIdManageEN.con_ProgLevelTypeId:
        return (a: clsErrorIdManageEN, b: clsErrorIdManageEN) => {
          if (a.progLevelTypeId == null) return -1;
          if (b.progLevelTypeId == null) return 1;
          return a.progLevelTypeId.localeCompare(b.progLevelTypeId);
        };
      case clsErrorIdManageEN.con_CodeTypeId:
        return (a: clsErrorIdManageEN, b: clsErrorIdManageEN) => {
          if (a.codeTypeId == null) return -1;
          if (b.codeTypeId == null) return 1;
          return a.codeTypeId.localeCompare(b.codeTypeId);
        };
      case clsErrorIdManageEN.con_FunctionName:
        return (a: clsErrorIdManageEN, b: clsErrorIdManageEN) => {
          return a.functionName.localeCompare(b.functionName);
        };
      case clsErrorIdManageEN.con_Explanation:
        return (a: clsErrorIdManageEN, b: clsErrorIdManageEN) => {
          if (a.explanation == null) return -1;
          if (b.explanation == null) return 1;
          return a.explanation.localeCompare(b.explanation);
        };
      case clsErrorIdManageEN.con_UpdDate:
        return (a: clsErrorIdManageEN, b: clsErrorIdManageEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsErrorIdManageEN.con_UpdUserId:
        return (a: clsErrorIdManageEN, b: clsErrorIdManageEN) => {
          if (a.updUserId == null) return -1;
          if (b.updUserId == null) return 1;
          return a.updUserId.localeCompare(b.updUserId);
        };
      case clsErrorIdManageEN.con_Memo:
        return (a: clsErrorIdManageEN, b: clsErrorIdManageEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[ErrorIdManage]中不存在!(in ${errorIdManage_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsErrorIdManageEN.con_mId:
        return (a: clsErrorIdManageEN, b: clsErrorIdManageEN) => {
          return b.mId - a.mId;
        };
      case clsErrorIdManageEN.con_ErrID:
        return (a: clsErrorIdManageEN, b: clsErrorIdManageEN) => {
          return b.errID.localeCompare(a.errID);
        };
      case clsErrorIdManageEN.con_ProgLevelTypeId:
        return (a: clsErrorIdManageEN, b: clsErrorIdManageEN) => {
          if (b.progLevelTypeId == null) return -1;
          if (a.progLevelTypeId == null) return 1;
          return b.progLevelTypeId.localeCompare(a.progLevelTypeId);
        };
      case clsErrorIdManageEN.con_CodeTypeId:
        return (a: clsErrorIdManageEN, b: clsErrorIdManageEN) => {
          if (b.codeTypeId == null) return -1;
          if (a.codeTypeId == null) return 1;
          return b.codeTypeId.localeCompare(a.codeTypeId);
        };
      case clsErrorIdManageEN.con_FunctionName:
        return (a: clsErrorIdManageEN, b: clsErrorIdManageEN) => {
          return b.functionName.localeCompare(a.functionName);
        };
      case clsErrorIdManageEN.con_Explanation:
        return (a: clsErrorIdManageEN, b: clsErrorIdManageEN) => {
          if (b.explanation == null) return -1;
          if (a.explanation == null) return 1;
          return b.explanation.localeCompare(a.explanation);
        };
      case clsErrorIdManageEN.con_UpdDate:
        return (a: clsErrorIdManageEN, b: clsErrorIdManageEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsErrorIdManageEN.con_UpdUserId:
        return (a: clsErrorIdManageEN, b: clsErrorIdManageEN) => {
          if (b.updUserId == null) return -1;
          if (a.updUserId == null) return 1;
          return b.updUserId.localeCompare(a.updUserId);
        };
      case clsErrorIdManageEN.con_Memo:
        return (a: clsErrorIdManageEN, b: clsErrorIdManageEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[ErrorIdManage]中不存在!(in ${errorIdManage_ConstructorName}.${strThisFuncName})`;
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
export async function ErrorIdManage_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsErrorIdManageEN.con_mId:
      return (obj: clsErrorIdManageEN) => {
        return obj.mId === value;
      };
    case clsErrorIdManageEN.con_ErrID:
      return (obj: clsErrorIdManageEN) => {
        return obj.errID === value;
      };
    case clsErrorIdManageEN.con_ProgLevelTypeId:
      return (obj: clsErrorIdManageEN) => {
        return obj.progLevelTypeId === value;
      };
    case clsErrorIdManageEN.con_CodeTypeId:
      return (obj: clsErrorIdManageEN) => {
        return obj.codeTypeId === value;
      };
    case clsErrorIdManageEN.con_FunctionName:
      return (obj: clsErrorIdManageEN) => {
        return obj.functionName === value;
      };
    case clsErrorIdManageEN.con_Explanation:
      return (obj: clsErrorIdManageEN) => {
        return obj.explanation === value;
      };
    case clsErrorIdManageEN.con_UpdDate:
      return (obj: clsErrorIdManageEN) => {
        return obj.updDate === value;
      };
    case clsErrorIdManageEN.con_UpdUserId:
      return (obj: clsErrorIdManageEN) => {
        return obj.updUserId === value;
      };
    case clsErrorIdManageEN.con_Memo:
      return (obj: clsErrorIdManageEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[ErrorIdManage]中不存在!(in ${errorIdManage_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}
//该表没有使用Cache,不需要生成[ErrorIdManage__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function ErrorIdManage_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(errorIdManage_Controller, strAction);

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
        errorIdManage_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        errorIdManage_ConstructorName,
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
export async function ErrorIdManage_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(errorIdManage_Controller, strAction);

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
        errorIdManage_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        errorIdManage_ConstructorName,
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
export async function ErrorIdManage_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsErrorIdManageEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(errorIdManage_Controller, strAction);

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
      const objErrorIdManage = ErrorIdManage_GetObjFromJsonObj(returnObj);
      return objErrorIdManage;
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
        errorIdManage_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        errorIdManage_ConstructorName,
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
export async function ErrorIdManage_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsErrorIdManageEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(errorIdManage_Controller, strAction);

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
          errorIdManage_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ErrorIdManage_GetObjLstByJSONObjLst(returnObjLst);
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
        errorIdManage_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        errorIdManage_ConstructorName,
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
export async function ErrorIdManage_GetObjLstBymIdLstAsync(
  arrmId: Array<string>,
): Promise<Array<clsErrorIdManageEN>> {
  const strThisFuncName = 'GetObjLstBymIdLstAsync';
  const strAction = 'GetObjLstBymIdLst';
  const strUrl = GetWebApiUrl(errorIdManage_Controller, strAction);

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
          errorIdManage_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ErrorIdManage_GetObjLstByJSONObjLst(returnObjLst);
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
        errorIdManage_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        errorIdManage_ConstructorName,
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
export async function ErrorIdManage_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsErrorIdManageEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(errorIdManage_Controller, strAction);

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
          errorIdManage_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ErrorIdManage_GetObjLstByJSONObjLst(returnObjLst);
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
        errorIdManage_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        errorIdManage_ConstructorName,
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
export async function ErrorIdManage_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsErrorIdManageEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(errorIdManage_Controller, strAction);

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
          errorIdManage_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ErrorIdManage_GetObjLstByJSONObjLst(returnObjLst);
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
        errorIdManage_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        errorIdManage_ConstructorName,
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
export async function ErrorIdManage_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsErrorIdManageEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsErrorIdManageEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(errorIdManage_Controller, strAction);

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
          errorIdManage_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ErrorIdManage_GetObjLstByJSONObjLst(returnObjLst);
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
        errorIdManage_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        errorIdManage_ConstructorName,
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
export async function ErrorIdManage_DelRecordAsync(lngmId: number): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(errorIdManage_Controller, strAction);
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
        errorIdManage_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        errorIdManage_ConstructorName,
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
export async function ErrorIdManage_DelErrorIdManagesAsync(arrmId: Array<string>): Promise<number> {
  const strThisFuncName = 'DelErrorIdManagesAsync';
  const strAction = 'DelErrorIdManages';
  const strUrl = GetWebApiUrl(errorIdManage_Controller, strAction);

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
        errorIdManage_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        errorIdManage_ConstructorName,
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
export async function ErrorIdManage_DelErrorIdManagesByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelErrorIdManagesByCondAsync';
  const strAction = 'DelErrorIdManagesByCond';
  const strUrl = GetWebApiUrl(errorIdManage_Controller, strAction);

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
        errorIdManage_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        errorIdManage_ConstructorName,
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
 * @param objErrorIdManageEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function ErrorIdManage_AddNewRecordAsync(
  objErrorIdManageEN: clsErrorIdManageEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objErrorIdManageEN);
  const strUrl = GetWebApiUrl(errorIdManage_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objErrorIdManageEN, config);
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
        errorIdManage_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        errorIdManage_ConstructorName,
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
 * @param objErrorIdManageEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function ErrorIdManage_AddNewRecordWithReturnKeyAsync(
  objErrorIdManageEN: clsErrorIdManageEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(errorIdManage_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objErrorIdManageEN, config);
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
        errorIdManage_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        errorIdManage_ConstructorName,
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
 * @param objErrorIdManageEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function ErrorIdManage_UpdateRecordAsync(
  objErrorIdManageEN: clsErrorIdManageEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objErrorIdManageEN.sfUpdFldSetStr === undefined ||
    objErrorIdManageEN.sfUpdFldSetStr === null ||
    objErrorIdManageEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objErrorIdManageEN.mId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(errorIdManage_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objErrorIdManageEN, config);
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
        errorIdManage_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        errorIdManage_ConstructorName,
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
 * @param objErrorIdManageEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function ErrorIdManage_UpdateWithConditionAsync(
  objErrorIdManageEN: clsErrorIdManageEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objErrorIdManageEN.sfUpdFldSetStr === undefined ||
    objErrorIdManageEN.sfUpdFldSetStr === null ||
    objErrorIdManageEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objErrorIdManageEN.mId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(errorIdManage_Controller, strAction);
  objErrorIdManageEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objErrorIdManageEN, config);
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
        errorIdManage_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        errorIdManage_ConstructorName,
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
export async function ErrorIdManage_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(errorIdManage_Controller, strAction);

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
        errorIdManage_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        errorIdManage_ConstructorName,
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
export async function ErrorIdManage_IsExistAsync(lngmId: number): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(errorIdManage_Controller, strAction);

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
        errorIdManage_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        errorIdManage_ConstructorName,
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
export async function ErrorIdManage_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(errorIdManage_Controller, strAction);

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
        errorIdManage_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        errorIdManage_ConstructorName,
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
export async function ErrorIdManage_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(errorIdManage_Controller, strAction);

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
        errorIdManage_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        errorIdManage_ConstructorName,
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
export function ErrorIdManage_GetWebApiUrl(strController: string, strAction: string): string {
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
export function ErrorIdManage_CheckPropertyNew(pobjErrorIdManageEN: clsErrorIdManageEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjErrorIdManageEN.errID) === true) {
    throw new Error(
      '(errid:Watl000411)字段[错误Id]不能为空(In 错误Id管理)!(clsErrorIdManageBL:CheckPropertyNew0)',
    );
  }
  if (IsNullOrEmpty(pobjErrorIdManageEN.functionName) === true) {
    throw new Error(
      '(errid:Watl000411)字段[功能名称]不能为空(In 错误Id管理)!(clsErrorIdManageBL:CheckPropertyNew0)',
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjErrorIdManageEN.errID) == false &&
    GetStrLen(pobjErrorIdManageEN.errID) > 10
  ) {
    throw new Error(
      '(errid:Watl000413)字段[错误Id(errID)]的长度不能超过10(In 错误Id管理(ErrorIdManage))!值:$(pobjErrorIdManageEN.errID)(clsErrorIdManageBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjErrorIdManageEN.progLevelTypeId) == false &&
    GetStrLen(pobjErrorIdManageEN.progLevelTypeId) > 2
  ) {
    throw new Error(
      '(errid:Watl000413)字段[程序分层类型Id(progLevelTypeId)]的长度不能超过2(In 错误Id管理(ErrorIdManage))!值:$(pobjErrorIdManageEN.progLevelTypeId)(clsErrorIdManageBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjErrorIdManageEN.codeTypeId) == false &&
    GetStrLen(pobjErrorIdManageEN.codeTypeId) > 4
  ) {
    throw new Error(
      '(errid:Watl000413)字段[代码类型Id(codeTypeId)]的长度不能超过4(In 错误Id管理(ErrorIdManage))!值:$(pobjErrorIdManageEN.codeTypeId)(clsErrorIdManageBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjErrorIdManageEN.functionName) == false &&
    GetStrLen(pobjErrorIdManageEN.functionName) > 200
  ) {
    throw new Error(
      '(errid:Watl000413)字段[功能名称(functionName)]的长度不能超过200(In 错误Id管理(ErrorIdManage))!值:$(pobjErrorIdManageEN.functionName)(clsErrorIdManageBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjErrorIdManageEN.explanation) == false &&
    GetStrLen(pobjErrorIdManageEN.explanation) > 1000
  ) {
    throw new Error(
      '(errid:Watl000413)字段[详细说明(explanation)]的长度不能超过1000(In 错误Id管理(ErrorIdManage))!值:$(pobjErrorIdManageEN.explanation)(clsErrorIdManageBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjErrorIdManageEN.updDate) == false &&
    GetStrLen(pobjErrorIdManageEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 错误Id管理(ErrorIdManage))!值:$(pobjErrorIdManageEN.updDate)(clsErrorIdManageBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjErrorIdManageEN.updUserId) == false &&
    GetStrLen(pobjErrorIdManageEN.updUserId) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改用户Id(updUserId)]的长度不能超过20(In 错误Id管理(ErrorIdManage))!值:$(pobjErrorIdManageEN.updUserId)(clsErrorIdManageBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjErrorIdManageEN.memo) == false &&
    GetStrLen(pobjErrorIdManageEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In 错误Id管理(ErrorIdManage))!值:$(pobjErrorIdManageEN.memo)(clsErrorIdManageBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjErrorIdManageEN.mId &&
    undefined !== pobjErrorIdManageEN.mId &&
    tzDataType.isNumber(pobjErrorIdManageEN.mId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[mId(mId)]的值:[$(pobjErrorIdManageEN.mId)], 非法,应该为数值型(In 错误Id管理(ErrorIdManage))!(clsErrorIdManageBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjErrorIdManageEN.errID) == false &&
    undefined !== pobjErrorIdManageEN.errID &&
    tzDataType.isString(pobjErrorIdManageEN.errID) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[错误Id(errID)]的值:[$(pobjErrorIdManageEN.errID)], 非法,应该为字符型(In 错误Id管理(ErrorIdManage))!(clsErrorIdManageBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjErrorIdManageEN.progLevelTypeId) == false &&
    undefined !== pobjErrorIdManageEN.progLevelTypeId &&
    tzDataType.isString(pobjErrorIdManageEN.progLevelTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[程序分层类型Id(progLevelTypeId)]的值:[$(pobjErrorIdManageEN.progLevelTypeId)], 非法,应该为字符型(In 错误Id管理(ErrorIdManage))!(clsErrorIdManageBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjErrorIdManageEN.codeTypeId) == false &&
    undefined !== pobjErrorIdManageEN.codeTypeId &&
    tzDataType.isString(pobjErrorIdManageEN.codeTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[代码类型Id(codeTypeId)]的值:[$(pobjErrorIdManageEN.codeTypeId)], 非法,应该为字符型(In 错误Id管理(ErrorIdManage))!(clsErrorIdManageBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjErrorIdManageEN.functionName) == false &&
    undefined !== pobjErrorIdManageEN.functionName &&
    tzDataType.isString(pobjErrorIdManageEN.functionName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[功能名称(functionName)]的值:[$(pobjErrorIdManageEN.functionName)], 非法,应该为字符型(In 错误Id管理(ErrorIdManage))!(clsErrorIdManageBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjErrorIdManageEN.explanation) == false &&
    undefined !== pobjErrorIdManageEN.explanation &&
    tzDataType.isString(pobjErrorIdManageEN.explanation) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[详细说明(explanation)]的值:[$(pobjErrorIdManageEN.explanation)], 非法,应该为字符型(In 错误Id管理(ErrorIdManage))!(clsErrorIdManageBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjErrorIdManageEN.updDate) == false &&
    undefined !== pobjErrorIdManageEN.updDate &&
    tzDataType.isString(pobjErrorIdManageEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjErrorIdManageEN.updDate)], 非法,应该为字符型(In 错误Id管理(ErrorIdManage))!(clsErrorIdManageBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjErrorIdManageEN.updUserId) == false &&
    undefined !== pobjErrorIdManageEN.updUserId &&
    tzDataType.isString(pobjErrorIdManageEN.updUserId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改用户Id(updUserId)]的值:[$(pobjErrorIdManageEN.updUserId)], 非法,应该为字符型(In 错误Id管理(ErrorIdManage))!(clsErrorIdManageBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjErrorIdManageEN.memo) == false &&
    undefined !== pobjErrorIdManageEN.memo &&
    tzDataType.isString(pobjErrorIdManageEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[说明(memo)]的值:[$(pobjErrorIdManageEN.memo)], 非法,应该为字符型(In 错误Id管理(ErrorIdManage))!(clsErrorIdManageBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function ErrorIdManage_CheckProperty4Update(pobjErrorIdManageEN: clsErrorIdManageEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjErrorIdManageEN.errID) == false &&
    GetStrLen(pobjErrorIdManageEN.errID) > 10
  ) {
    throw new Error(
      '(errid:Watl000416)字段[错误Id(errID)]的长度不能超过10(In 错误Id管理(ErrorIdManage))!值:$(pobjErrorIdManageEN.errID)(clsErrorIdManageBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjErrorIdManageEN.progLevelTypeId) == false &&
    GetStrLen(pobjErrorIdManageEN.progLevelTypeId) > 2
  ) {
    throw new Error(
      '(errid:Watl000416)字段[程序分层类型Id(progLevelTypeId)]的长度不能超过2(In 错误Id管理(ErrorIdManage))!值:$(pobjErrorIdManageEN.progLevelTypeId)(clsErrorIdManageBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjErrorIdManageEN.codeTypeId) == false &&
    GetStrLen(pobjErrorIdManageEN.codeTypeId) > 4
  ) {
    throw new Error(
      '(errid:Watl000416)字段[代码类型Id(codeTypeId)]的长度不能超过4(In 错误Id管理(ErrorIdManage))!值:$(pobjErrorIdManageEN.codeTypeId)(clsErrorIdManageBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjErrorIdManageEN.functionName) == false &&
    GetStrLen(pobjErrorIdManageEN.functionName) > 200
  ) {
    throw new Error(
      '(errid:Watl000416)字段[功能名称(functionName)]的长度不能超过200(In 错误Id管理(ErrorIdManage))!值:$(pobjErrorIdManageEN.functionName)(clsErrorIdManageBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjErrorIdManageEN.explanation) == false &&
    GetStrLen(pobjErrorIdManageEN.explanation) > 1000
  ) {
    throw new Error(
      '(errid:Watl000416)字段[详细说明(explanation)]的长度不能超过1000(In 错误Id管理(ErrorIdManage))!值:$(pobjErrorIdManageEN.explanation)(clsErrorIdManageBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjErrorIdManageEN.updDate) == false &&
    GetStrLen(pobjErrorIdManageEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 错误Id管理(ErrorIdManage))!值:$(pobjErrorIdManageEN.updDate)(clsErrorIdManageBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjErrorIdManageEN.updUserId) == false &&
    GetStrLen(pobjErrorIdManageEN.updUserId) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改用户Id(updUserId)]的长度不能超过20(In 错误Id管理(ErrorIdManage))!值:$(pobjErrorIdManageEN.updUserId)(clsErrorIdManageBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjErrorIdManageEN.memo) == false &&
    GetStrLen(pobjErrorIdManageEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In 错误Id管理(ErrorIdManage))!值:$(pobjErrorIdManageEN.memo)(clsErrorIdManageBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjErrorIdManageEN.mId &&
    undefined !== pobjErrorIdManageEN.mId &&
    tzDataType.isNumber(pobjErrorIdManageEN.mId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[mId(mId)]的值:[$(pobjErrorIdManageEN.mId)], 非法,应该为数值型(In 错误Id管理(ErrorIdManage))!(clsErrorIdManageBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjErrorIdManageEN.errID) == false &&
    undefined !== pobjErrorIdManageEN.errID &&
    tzDataType.isString(pobjErrorIdManageEN.errID) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[错误Id(errID)]的值:[$(pobjErrorIdManageEN.errID)], 非法,应该为字符型(In 错误Id管理(ErrorIdManage))!(clsErrorIdManageBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjErrorIdManageEN.progLevelTypeId) == false &&
    undefined !== pobjErrorIdManageEN.progLevelTypeId &&
    tzDataType.isString(pobjErrorIdManageEN.progLevelTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[程序分层类型Id(progLevelTypeId)]的值:[$(pobjErrorIdManageEN.progLevelTypeId)], 非法,应该为字符型(In 错误Id管理(ErrorIdManage))!(clsErrorIdManageBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjErrorIdManageEN.codeTypeId) == false &&
    undefined !== pobjErrorIdManageEN.codeTypeId &&
    tzDataType.isString(pobjErrorIdManageEN.codeTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[代码类型Id(codeTypeId)]的值:[$(pobjErrorIdManageEN.codeTypeId)], 非法,应该为字符型(In 错误Id管理(ErrorIdManage))!(clsErrorIdManageBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjErrorIdManageEN.functionName) == false &&
    undefined !== pobjErrorIdManageEN.functionName &&
    tzDataType.isString(pobjErrorIdManageEN.functionName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[功能名称(functionName)]的值:[$(pobjErrorIdManageEN.functionName)], 非法,应该为字符型(In 错误Id管理(ErrorIdManage))!(clsErrorIdManageBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjErrorIdManageEN.explanation) == false &&
    undefined !== pobjErrorIdManageEN.explanation &&
    tzDataType.isString(pobjErrorIdManageEN.explanation) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[详细说明(explanation)]的值:[$(pobjErrorIdManageEN.explanation)], 非法,应该为字符型(In 错误Id管理(ErrorIdManage))!(clsErrorIdManageBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjErrorIdManageEN.updDate) == false &&
    undefined !== pobjErrorIdManageEN.updDate &&
    tzDataType.isString(pobjErrorIdManageEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjErrorIdManageEN.updDate)], 非法,应该为字符型(In 错误Id管理(ErrorIdManage))!(clsErrorIdManageBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjErrorIdManageEN.updUserId) == false &&
    undefined !== pobjErrorIdManageEN.updUserId &&
    tzDataType.isString(pobjErrorIdManageEN.updUserId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改用户Id(updUserId)]的值:[$(pobjErrorIdManageEN.updUserId)], 非法,应该为字符型(In 错误Id管理(ErrorIdManage))!(clsErrorIdManageBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjErrorIdManageEN.memo) == false &&
    undefined !== pobjErrorIdManageEN.memo &&
    tzDataType.isString(pobjErrorIdManageEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[说明(memo)]的值:[$(pobjErrorIdManageEN.memo)], 非法,应该为字符型(In 错误Id管理(ErrorIdManage))!(clsErrorIdManageBL:CheckProperty4Update)',
    );
  }
  //检查主键是否为Null或者空!
  if (
    null === pobjErrorIdManageEN.mId ||
    (pobjErrorIdManageEN.mId != null && pobjErrorIdManageEN.mId.toString() === '')
  ) {
    throw new Error(
      '(errid:Watl000064)字段[mId]不能为空(In 错误Id管理)!(clsErrorIdManageBL:CheckProperty4Update)',
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
export function ErrorIdManage_GetJSONStrByObj(pobjErrorIdManageEN: clsErrorIdManageEN): string {
  pobjErrorIdManageEN.sfUpdFldSetStr = pobjErrorIdManageEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjErrorIdManageEN);
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
export function ErrorIdManage_GetObjLstByJSONStr(strJSON: string): Array<clsErrorIdManageEN> {
  let arrErrorIdManageObjLst = new Array<clsErrorIdManageEN>();
  if (strJSON === '') {
    return arrErrorIdManageObjLst;
  }
  try {
    arrErrorIdManageObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrErrorIdManageObjLst;
  }
  return arrErrorIdManageObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrErrorIdManageObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function ErrorIdManage_GetObjLstByJSONObjLst(
  arrErrorIdManageObjLstS: Array<clsErrorIdManageEN>,
): Array<clsErrorIdManageEN> {
  const arrErrorIdManageObjLst = new Array<clsErrorIdManageEN>();
  for (const objInFor of arrErrorIdManageObjLstS) {
    const obj1 = ErrorIdManage_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrErrorIdManageObjLst.push(obj1);
  }
  return arrErrorIdManageObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function ErrorIdManage_GetObjByJSONStr(strJSON: string): clsErrorIdManageEN {
  let pobjErrorIdManageEN = new clsErrorIdManageEN();
  if (strJSON === '') {
    return pobjErrorIdManageEN;
  }
  try {
    pobjErrorIdManageEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjErrorIdManageEN;
  }
  return pobjErrorIdManageEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function ErrorIdManage_GetCombineCondition(
  objErrorIdManageCond: clsErrorIdManageEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objErrorIdManageCond.dicFldComparisonOp,
      clsErrorIdManageEN.con_mId,
    ) == true
  ) {
    const strComparisonOpmId: string =
      objErrorIdManageCond.dicFldComparisonOp[clsErrorIdManageEN.con_mId];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsErrorIdManageEN.con_mId,
      objErrorIdManageCond.mId,
      strComparisonOpmId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objErrorIdManageCond.dicFldComparisonOp,
      clsErrorIdManageEN.con_ErrID,
    ) == true
  ) {
    const strComparisonOpErrID: string =
      objErrorIdManageCond.dicFldComparisonOp[clsErrorIdManageEN.con_ErrID];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsErrorIdManageEN.con_ErrID,
      objErrorIdManageCond.errID,
      strComparisonOpErrID,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objErrorIdManageCond.dicFldComparisonOp,
      clsErrorIdManageEN.con_ProgLevelTypeId,
    ) == true
  ) {
    const strComparisonOpProgLevelTypeId: string =
      objErrorIdManageCond.dicFldComparisonOp[clsErrorIdManageEN.con_ProgLevelTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsErrorIdManageEN.con_ProgLevelTypeId,
      objErrorIdManageCond.progLevelTypeId,
      strComparisonOpProgLevelTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objErrorIdManageCond.dicFldComparisonOp,
      clsErrorIdManageEN.con_CodeTypeId,
    ) == true
  ) {
    const strComparisonOpCodeTypeId: string =
      objErrorIdManageCond.dicFldComparisonOp[clsErrorIdManageEN.con_CodeTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsErrorIdManageEN.con_CodeTypeId,
      objErrorIdManageCond.codeTypeId,
      strComparisonOpCodeTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objErrorIdManageCond.dicFldComparisonOp,
      clsErrorIdManageEN.con_FunctionName,
    ) == true
  ) {
    const strComparisonOpFunctionName: string =
      objErrorIdManageCond.dicFldComparisonOp[clsErrorIdManageEN.con_FunctionName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsErrorIdManageEN.con_FunctionName,
      objErrorIdManageCond.functionName,
      strComparisonOpFunctionName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objErrorIdManageCond.dicFldComparisonOp,
      clsErrorIdManageEN.con_Explanation,
    ) == true
  ) {
    const strComparisonOpExplanation: string =
      objErrorIdManageCond.dicFldComparisonOp[clsErrorIdManageEN.con_Explanation];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsErrorIdManageEN.con_Explanation,
      objErrorIdManageCond.explanation,
      strComparisonOpExplanation,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objErrorIdManageCond.dicFldComparisonOp,
      clsErrorIdManageEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objErrorIdManageCond.dicFldComparisonOp[clsErrorIdManageEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsErrorIdManageEN.con_UpdDate,
      objErrorIdManageCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objErrorIdManageCond.dicFldComparisonOp,
      clsErrorIdManageEN.con_UpdUserId,
    ) == true
  ) {
    const strComparisonOpUpdUserId: string =
      objErrorIdManageCond.dicFldComparisonOp[clsErrorIdManageEN.con_UpdUserId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsErrorIdManageEN.con_UpdUserId,
      objErrorIdManageCond.updUserId,
      strComparisonOpUpdUserId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objErrorIdManageCond.dicFldComparisonOp,
      clsErrorIdManageEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objErrorIdManageCond.dicFldComparisonOp[clsErrorIdManageEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsErrorIdManageEN.con_Memo,
      objErrorIdManageCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--ErrorIdManage(错误Id管理),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strCodeTypeId: 代码类型Id(要求唯一的字段)
 * @param strFunctionName: 功能名称(要求唯一的字段)
 * @param strExplanation: 详细说明(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function ErrorIdManage_GetUniCondStr(objErrorIdManageEN: clsErrorIdManageEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and CodeTypeId = '{0}'", objErrorIdManageEN.codeTypeId);
  strWhereCond += Format(" and FunctionName = '{0}'", objErrorIdManageEN.functionName);
  strWhereCond += Format(" and Explanation = '{0}'", objErrorIdManageEN.explanation);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--ErrorIdManage(错误Id管理),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strCodeTypeId: 代码类型Id(要求唯一的字段)
 * @param strFunctionName: 功能名称(要求唯一的字段)
 * @param strExplanation: 详细说明(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function ErrorIdManage_GetUniCondStr4Update(objErrorIdManageEN: clsErrorIdManageEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and mId <> '{0}'", objErrorIdManageEN.mId);
  strWhereCond += Format(" and CodeTypeId = '{0}'", objErrorIdManageEN.codeTypeId);
  strWhereCond += Format(" and FunctionName = '{0}'", objErrorIdManageEN.functionName);
  strWhereCond += Format(" and Explanation = '{0}'", objErrorIdManageEN.explanation);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objErrorIdManageENS:源对象
 * @param objErrorIdManageENT:目标对象
 */
export function ErrorIdManage_GetObjFromJsonObj(
  objErrorIdManageENS: clsErrorIdManageEN,
): clsErrorIdManageEN {
  const objErrorIdManageENT: clsErrorIdManageEN = new clsErrorIdManageEN();
  ObjectAssign(objErrorIdManageENT, objErrorIdManageENS);
  return objErrorIdManageENT;
}
