/**
 * 类名:clsPrjFunctionWApi
 * 表名:PrjFunction(00050072)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/05 22:36:04
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:函数管理(PrjFunction)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 工程函数(PrjFunction)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2023年11月05日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty, GetStrLen, tzDataType, Format } from '@/ts/PubFun/clsString';
import {
  BindDdl_ObjLstInDivObj,
  GetExceptionStr,
  myShowErrorMsg,
  ObjectAssign,
} from '@/ts/PubFun/clsCommFunc4Web';
import { clsPrjFunctionEN } from '@/ts/L0Entity/PrjFunction/clsPrjFunctionEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const prjFunction_Controller = 'PrjFunctionApi';
export const prjFunction_ConstructorName = 'prjFunction';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strFuncId:关键字
 * @returns 对象
 **/
export async function PrjFunction_GetObjByFuncIdAsync(
  strFuncId: string,
): Promise<clsPrjFunctionEN | null> {
  const strThisFuncName = 'GetObjByFuncIdAsync';

  if (IsNullOrEmpty(strFuncId) == true) {
    const strMsg = Format('参数:[strFuncId]不能为空!(In clsPrjFunctionWApi.GetObjByFuncIdAsync)');
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByFuncId';
  const strUrl = GetWebApiUrl(prjFunction_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strFuncId,
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
      const objPrjFunction = PrjFunction_GetObjFromJsonObj(returnObj);
      return objPrjFunction;
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
        prjFunction_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjFunction_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[GetObjByFuncIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )
//该表没有使用Cache,不需要生成[GetObjByFuncIdlocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[UpdateObjInLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache
//该表没有使用Cache,不需要生成[GetNameByFuncIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
//该表没有使用Cache,不需要生成[func]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func )

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2023-11-05
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function PrjFunction_SortFunDefa(a: clsPrjFunctionEN, b: clsPrjFunctionEN): number {
  return a.funcId.localeCompare(b.funcId);
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2023-11-05
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function PrjFunction_SortFunDefa2Fld(a: clsPrjFunctionEN, b: clsPrjFunctionEN): number {
  if (a.funcName == b.funcName) return a.prjId.localeCompare(b.prjId);
  else return a.funcName.localeCompare(b.funcName);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2023-11-05
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function PrjFunction_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsPrjFunctionEN.con_FuncId:
        return (a: clsPrjFunctionEN, b: clsPrjFunctionEN) => {
          return a.funcId.localeCompare(b.funcId);
        };
      case clsPrjFunctionEN.con_FuncName:
        return (a: clsPrjFunctionEN, b: clsPrjFunctionEN) => {
          return a.funcName.localeCompare(b.funcName);
        };
      case clsPrjFunctionEN.con_PrjId:
        return (a: clsPrjFunctionEN, b: clsPrjFunctionEN) => {
          return a.prjId.localeCompare(b.prjId);
        };
      case clsPrjFunctionEN.con_ReturnTypeId:
        return (a: clsPrjFunctionEN, b: clsPrjFunctionEN) => {
          return a.returnTypeId.localeCompare(b.returnTypeId);
        };
      case clsPrjFunctionEN.con_FuncTypeId:
        return (a: clsPrjFunctionEN, b: clsPrjFunctionEN) => {
          return a.funcTypeId.localeCompare(b.funcTypeId);
        };
      case clsPrjFunctionEN.con_IsTemplate:
        return (a: clsPrjFunctionEN) => {
          if (a.isTemplate == true) return 1;
          else return -1;
        };
      case clsPrjFunctionEN.con_FuncCode:
        return (a: clsPrjFunctionEN, b: clsPrjFunctionEN) => {
          if (a.funcCode == null) return -1;
          if (b.funcCode == null) return 1;
          return a.funcCode.localeCompare(b.funcCode);
        };
      case clsPrjFunctionEN.con_UserId:
        return (a: clsPrjFunctionEN, b: clsPrjFunctionEN) => {
          if (a.userId == null) return -1;
          if (b.userId == null) return 1;
          return a.userId.localeCompare(b.userId);
        };
      case clsPrjFunctionEN.con_UpdDate:
        return (a: clsPrjFunctionEN, b: clsPrjFunctionEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsPrjFunctionEN.con_UpdUser:
        return (a: clsPrjFunctionEN, b: clsPrjFunctionEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsPrjFunctionEN.con_Memo:
        return (a: clsPrjFunctionEN, b: clsPrjFunctionEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[PrjFunction]中不存在!(in ${prjFunction_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsPrjFunctionEN.con_FuncId:
        return (a: clsPrjFunctionEN, b: clsPrjFunctionEN) => {
          return b.funcId.localeCompare(a.funcId);
        };
      case clsPrjFunctionEN.con_FuncName:
        return (a: clsPrjFunctionEN, b: clsPrjFunctionEN) => {
          return b.funcName.localeCompare(a.funcName);
        };
      case clsPrjFunctionEN.con_PrjId:
        return (a: clsPrjFunctionEN, b: clsPrjFunctionEN) => {
          return b.prjId.localeCompare(a.prjId);
        };
      case clsPrjFunctionEN.con_ReturnTypeId:
        return (a: clsPrjFunctionEN, b: clsPrjFunctionEN) => {
          return b.returnTypeId.localeCompare(a.returnTypeId);
        };
      case clsPrjFunctionEN.con_FuncTypeId:
        return (a: clsPrjFunctionEN, b: clsPrjFunctionEN) => {
          return b.funcTypeId.localeCompare(a.funcTypeId);
        };
      case clsPrjFunctionEN.con_IsTemplate:
        return (b: clsPrjFunctionEN) => {
          if (b.isTemplate == true) return 1;
          else return -1;
        };
      case clsPrjFunctionEN.con_FuncCode:
        return (a: clsPrjFunctionEN, b: clsPrjFunctionEN) => {
          if (b.funcCode == null) return -1;
          if (a.funcCode == null) return 1;
          return b.funcCode.localeCompare(a.funcCode);
        };
      case clsPrjFunctionEN.con_UserId:
        return (a: clsPrjFunctionEN, b: clsPrjFunctionEN) => {
          if (b.userId == null) return -1;
          if (a.userId == null) return 1;
          return b.userId.localeCompare(a.userId);
        };
      case clsPrjFunctionEN.con_UpdDate:
        return (a: clsPrjFunctionEN, b: clsPrjFunctionEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsPrjFunctionEN.con_UpdUser:
        return (a: clsPrjFunctionEN, b: clsPrjFunctionEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsPrjFunctionEN.con_Memo:
        return (a: clsPrjFunctionEN, b: clsPrjFunctionEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[PrjFunction]中不存在!(in ${prjFunction_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2023-11-05
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function PrjFunction_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsPrjFunctionEN.con_FuncId:
      return (obj: clsPrjFunctionEN) => {
        return obj.funcId === value;
      };
    case clsPrjFunctionEN.con_FuncName:
      return (obj: clsPrjFunctionEN) => {
        return obj.funcName === value;
      };
    case clsPrjFunctionEN.con_PrjId:
      return (obj: clsPrjFunctionEN) => {
        return obj.prjId === value;
      };
    case clsPrjFunctionEN.con_ReturnTypeId:
      return (obj: clsPrjFunctionEN) => {
        return obj.returnTypeId === value;
      };
    case clsPrjFunctionEN.con_FuncTypeId:
      return (obj: clsPrjFunctionEN) => {
        return obj.funcTypeId === value;
      };
    case clsPrjFunctionEN.con_IsTemplate:
      return (obj: clsPrjFunctionEN) => {
        return obj.isTemplate === value;
      };
    case clsPrjFunctionEN.con_FuncCode:
      return (obj: clsPrjFunctionEN) => {
        return obj.funcCode === value;
      };
    case clsPrjFunctionEN.con_UserId:
      return (obj: clsPrjFunctionEN) => {
        return obj.userId === value;
      };
    case clsPrjFunctionEN.con_UpdDate:
      return (obj: clsPrjFunctionEN) => {
        return obj.updDate === value;
      };
    case clsPrjFunctionEN.con_UpdUser:
      return (obj: clsPrjFunctionEN) => {
        return obj.updUser === value;
      };
    case clsPrjFunctionEN.con_Memo:
      return (obj: clsPrjFunctionEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[PrjFunction]中不存在!(in ${prjFunction_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}
//该表没有使用Cache,不需要生成[PrjFunction__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function PrjFunction_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(prjFunction_Controller, strAction);

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
        prjFunction_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjFunction_ConstructorName,
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
export async function PrjFunction_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(prjFunction_Controller, strAction);

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
        prjFunction_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjFunction_ConstructorName,
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
export async function PrjFunction_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsPrjFunctionEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(prjFunction_Controller, strAction);

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
      const objPrjFunction = PrjFunction_GetObjFromJsonObj(returnObj);
      return objPrjFunction;
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
        prjFunction_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjFunction_ConstructorName,
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
export async function PrjFunction_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsPrjFunctionEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(prjFunction_Controller, strAction);

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
          prjFunction_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = PrjFunction_GetObjLstByJSONObjLst(returnObjLst);
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
        prjFunction_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjFunction_ConstructorName,
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
 * @param arrFuncId:关键字列表
 * @returns 对象列表
 **/
export async function PrjFunction_GetObjLstByFuncIdLstAsync(
  arrFuncId: Array<string>,
): Promise<Array<clsPrjFunctionEN>> {
  const strThisFuncName = 'GetObjLstByFuncIdLstAsync';
  const strAction = 'GetObjLstByFuncIdLst';
  const strUrl = GetWebApiUrl(prjFunction_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrFuncId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          prjFunction_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = PrjFunction_GetObjLstByJSONObjLst(returnObjLst);
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
        prjFunction_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjFunction_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[GetObjLstByFuncIdLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

/**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export async function PrjFunction_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsPrjFunctionEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(prjFunction_Controller, strAction);

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
          prjFunction_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = PrjFunction_GetObjLstByJSONObjLst(returnObjLst);
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
        prjFunction_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjFunction_ConstructorName,
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
export async function PrjFunction_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsPrjFunctionEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(prjFunction_Controller, strAction);

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
          prjFunction_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = PrjFunction_GetObjLstByJSONObjLst(returnObjLst);
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
        prjFunction_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjFunction_ConstructorName,
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
export async function PrjFunction_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsPrjFunctionEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsPrjFunctionEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(prjFunction_Controller, strAction);

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
          prjFunction_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = PrjFunction_GetObjLstByJSONObjLst(returnObjLst);
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
        prjFunction_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjFunction_ConstructorName,
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
 * @param strFuncId:关键字
 * @returns 获取删除的结果
 **/
export async function PrjFunction_DelRecordAsync(strFuncId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(prjFunction_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strFuncId);

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
        prjFunction_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjFunction_ConstructorName,
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
 * @param arrFuncId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function PrjFunction_DelPrjFunctionsAsync(arrFuncId: Array<string>): Promise<number> {
  const strThisFuncName = 'DelPrjFunctionsAsync';
  const strAction = 'DelPrjFunctions';
  const strUrl = GetWebApiUrl(prjFunction_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrFuncId, config);
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
        prjFunction_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjFunction_ConstructorName,
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
export async function PrjFunction_DelPrjFunctionsByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelPrjFunctionsByCondAsync';
  const strAction = 'DelPrjFunctionsByCond';
  const strUrl = GetWebApiUrl(prjFunction_Controller, strAction);

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
        prjFunction_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjFunction_ConstructorName,
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
 * @param objPrjFunctionEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function PrjFunction_AddNewRecordAsync(
  objPrjFunctionEN: clsPrjFunctionEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  if (objPrjFunctionEN.funcId === null || objPrjFunctionEN.funcId === '') {
    const strMsg = '需要的对象的关键字为空,不能添加!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objPrjFunctionEN);
  const strUrl = GetWebApiUrl(prjFunction_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPrjFunctionEN, config);
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
        prjFunction_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjFunction_ConstructorName,
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
 * @param objPrjFunctionEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function PrjFunction_AddNewRecordWithMaxIdAsync(
  objPrjFunctionEN: clsPrjFunctionEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(prjFunction_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPrjFunctionEN, config);
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
        prjFunction_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjFunction_ConstructorName,
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
 * @param objPrjFunctionEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function PrjFunction_AddNewRecordWithReturnKeyAsync(
  objPrjFunctionEN: clsPrjFunctionEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(prjFunction_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPrjFunctionEN, config);
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
        prjFunction_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjFunction_ConstructorName,
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
 * @param objPrjFunctionEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function PrjFunction_UpdateRecordAsync(
  objPrjFunctionEN: clsPrjFunctionEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objPrjFunctionEN.sfUpdFldSetStr === undefined ||
    objPrjFunctionEN.sfUpdFldSetStr === null ||
    objPrjFunctionEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objPrjFunctionEN.funcId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(prjFunction_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPrjFunctionEN, config);
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
        prjFunction_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjFunction_ConstructorName,
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
 * @param objPrjFunctionEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function PrjFunction_UpdateWithConditionAsync(
  objPrjFunctionEN: clsPrjFunctionEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objPrjFunctionEN.sfUpdFldSetStr === undefined ||
    objPrjFunctionEN.sfUpdFldSetStr === null ||
    objPrjFunctionEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objPrjFunctionEN.funcId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(prjFunction_Controller, strAction);
  objPrjFunctionEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPrjFunctionEN, config);
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
        prjFunction_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjFunction_ConstructorName,
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
export async function PrjFunction_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(prjFunction_Controller, strAction);

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
        prjFunction_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjFunction_ConstructorName,
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
 * @param strFuncId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function PrjFunction_IsExistAsync(strFuncId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(prjFunction_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strFuncId,
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
        prjFunction_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjFunction_ConstructorName,
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
export async function PrjFunction_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(prjFunction_Controller, strAction);

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
        prjFunction_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjFunction_ConstructorName,
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

/**
 * 根据前缀获取当前表关键字值的最大值,再加1,避免重复
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetMaxStrIdByPrefixAsync)
 * @param mapParam:参数列表
 * @returns 获取当前表关键字值的最大值
 **/
export async function PrjFunction_GetMaxStrIdByPrefixAsync(strPrefix: string): Promise<string> {
  const strThisFuncName = 'GetMaxStrIdByPrefixAsync';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(prjFunction_Controller, strAction);

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
        prjFunction_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjFunction_ConstructorName,
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
 * 根据前缀获取当前表关键字值的最大值,再加1,避免重复
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetMaxStrIdByPrefix)
 * @param mapParam:参数列表
 * @returns 获取当前表关键字值的最大值
 */
export async function PrjFunction_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(prjFunction_Controller, strAction);

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
        prjFunction_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjFunction_ConstructorName,
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
export function PrjFunction_GetWebApiUrl(strController: string, strAction: string): string {
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
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)
 * @param objDDL:需要绑定当前表的下拉框

*/
export async function PrjFunction_BindDdl_FuncIdInDiv(objDiv: HTMLDivElement, strDdlName: string) {
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_FuncIdInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_FuncIdInDivCache");
  const strCondition = `1=1`;
  const arrObjLstSel = await PrjFunction_GetObjLstAsync(strCondition);
  if (arrObjLstSel == null) return;
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsPrjFunctionEN.con_FuncId,
    clsPrjFunctionEN.con_FuncName,
    '工程函数',
  );
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function PrjFunction_CheckPropertyNew(pobjPrjFunctionEN: clsPrjFunctionEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjPrjFunctionEN.funcName) === true) {
    throw new Error(
      '(errid:Watl000411)字段[函数名]不能为空(In 工程函数)!(clsPrjFunctionBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFunctionEN.prjId) === true ||
    pobjPrjFunctionEN.prjId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000411)字段[工程ID]不能为空(In 工程函数)!(clsPrjFunctionBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFunctionEN.returnTypeId) === true ||
    pobjPrjFunctionEN.returnTypeId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000411)字段[返回类型ID]不能为空(In 工程函数)!(clsPrjFunctionBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFunctionEN.funcTypeId) === true ||
    pobjPrjFunctionEN.funcTypeId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000411)字段[函数类型Id]不能为空(In 工程函数)!(clsPrjFunctionBL:CheckPropertyNew0)',
    );
  }
  if (
    null === pobjPrjFunctionEN.isTemplate ||
    (pobjPrjFunctionEN.isTemplate != null && pobjPrjFunctionEN.isTemplate.toString() === '')
  ) {
    throw new Error(
      '(errid:Watl000411)字段[是否模板]不能为空(In 工程函数)!(clsPrjFunctionBL:CheckPropertyNew0)',
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjPrjFunctionEN.funcId) == false &&
    GetStrLen(pobjPrjFunctionEN.funcId) > 10
  ) {
    throw new Error(
      '(errid:Watl000413)字段[函数ID(funcId)]的长度不能超过10(In 工程函数(PrjFunction))!值:$(pobjPrjFunctionEN.funcId)(clsPrjFunctionBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFunctionEN.funcName) == false &&
    GetStrLen(pobjPrjFunctionEN.funcName) > 100
  ) {
    throw new Error(
      '(errid:Watl000413)字段[函数名(funcName)]的长度不能超过100(In 工程函数(PrjFunction))!值:$(pobjPrjFunctionEN.funcName)(clsPrjFunctionBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjPrjFunctionEN.prjId) == false && GetStrLen(pobjPrjFunctionEN.prjId) > 4) {
    throw new Error(
      '(errid:Watl000413)字段[工程ID(prjId)]的长度不能超过4(In 工程函数(PrjFunction))!值:$(pobjPrjFunctionEN.prjId)(clsPrjFunctionBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFunctionEN.returnTypeId) == false &&
    GetStrLen(pobjPrjFunctionEN.returnTypeId) > 2
  ) {
    throw new Error(
      '(errid:Watl000413)字段[返回类型ID(returnTypeId)]的长度不能超过2(In 工程函数(PrjFunction))!值:$(pobjPrjFunctionEN.returnTypeId)(clsPrjFunctionBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFunctionEN.funcTypeId) == false &&
    GetStrLen(pobjPrjFunctionEN.funcTypeId) > 2
  ) {
    throw new Error(
      '(errid:Watl000413)字段[函数类型Id(funcTypeId)]的长度不能超过2(In 工程函数(PrjFunction))!值:$(pobjPrjFunctionEN.funcTypeId)(clsPrjFunctionBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFunctionEN.userId) == false &&
    GetStrLen(pobjPrjFunctionEN.userId) > 18
  ) {
    throw new Error(
      '(errid:Watl000413)字段[用户Id(userId)]的长度不能超过18(In 工程函数(PrjFunction))!值:$(pobjPrjFunctionEN.userId)(clsPrjFunctionBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFunctionEN.updDate) == false &&
    GetStrLen(pobjPrjFunctionEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 工程函数(PrjFunction))!值:$(pobjPrjFunctionEN.updDate)(clsPrjFunctionBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFunctionEN.updUser) == false &&
    GetStrLen(pobjPrjFunctionEN.updUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改者(updUser)]的长度不能超过20(In 工程函数(PrjFunction))!值:$(pobjPrjFunctionEN.updUser)(clsPrjFunctionBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjPrjFunctionEN.memo) == false && GetStrLen(pobjPrjFunctionEN.memo) > 1000) {
    throw new Error(
      '(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In 工程函数(PrjFunction))!值:$(pobjPrjFunctionEN.memo)(clsPrjFunctionBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjPrjFunctionEN.funcId) == false &&
    undefined !== pobjPrjFunctionEN.funcId &&
    tzDataType.isString(pobjPrjFunctionEN.funcId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[函数ID(funcId)]的值:[$(pobjPrjFunctionEN.funcId)], 非法,应该为字符型(In 工程函数(PrjFunction))!(clsPrjFunctionBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFunctionEN.funcName) == false &&
    undefined !== pobjPrjFunctionEN.funcName &&
    tzDataType.isString(pobjPrjFunctionEN.funcName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[函数名(funcName)]的值:[$(pobjPrjFunctionEN.funcName)], 非法,应该为字符型(In 工程函数(PrjFunction))!(clsPrjFunctionBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFunctionEN.prjId) == false &&
    undefined !== pobjPrjFunctionEN.prjId &&
    tzDataType.isString(pobjPrjFunctionEN.prjId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[工程ID(prjId)]的值:[$(pobjPrjFunctionEN.prjId)], 非法,应该为字符型(In 工程函数(PrjFunction))!(clsPrjFunctionBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFunctionEN.returnTypeId) == false &&
    undefined !== pobjPrjFunctionEN.returnTypeId &&
    tzDataType.isString(pobjPrjFunctionEN.returnTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[返回类型ID(returnTypeId)]的值:[$(pobjPrjFunctionEN.returnTypeId)], 非法,应该为字符型(In 工程函数(PrjFunction))!(clsPrjFunctionBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFunctionEN.funcTypeId) == false &&
    undefined !== pobjPrjFunctionEN.funcTypeId &&
    tzDataType.isString(pobjPrjFunctionEN.funcTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[函数类型Id(funcTypeId)]的值:[$(pobjPrjFunctionEN.funcTypeId)], 非法,应该为字符型(In 工程函数(PrjFunction))!(clsPrjFunctionBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjPrjFunctionEN.isTemplate &&
    undefined !== pobjPrjFunctionEN.isTemplate &&
    tzDataType.isBoolean(pobjPrjFunctionEN.isTemplate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否模板(isTemplate)]的值:[$(pobjPrjFunctionEN.isTemplate)], 非法,应该为布尔型(In 工程函数(PrjFunction))!(clsPrjFunctionBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFunctionEN.funcCode) == false &&
    undefined !== pobjPrjFunctionEN.funcCode &&
    tzDataType.isString(pobjPrjFunctionEN.funcCode) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[函数代码(funcCode)]的值:[$(pobjPrjFunctionEN.funcCode)], 非法,应该为字符型(In 工程函数(PrjFunction))!(clsPrjFunctionBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFunctionEN.userId) == false &&
    undefined !== pobjPrjFunctionEN.userId &&
    tzDataType.isString(pobjPrjFunctionEN.userId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[用户Id(userId)]的值:[$(pobjPrjFunctionEN.userId)], 非法,应该为字符型(In 工程函数(PrjFunction))!(clsPrjFunctionBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFunctionEN.updDate) == false &&
    undefined !== pobjPrjFunctionEN.updDate &&
    tzDataType.isString(pobjPrjFunctionEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjPrjFunctionEN.updDate)], 非法,应该为字符型(In 工程函数(PrjFunction))!(clsPrjFunctionBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFunctionEN.updUser) == false &&
    undefined !== pobjPrjFunctionEN.updUser &&
    tzDataType.isString(pobjPrjFunctionEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改者(updUser)]的值:[$(pobjPrjFunctionEN.updUser)], 非法,应该为字符型(In 工程函数(PrjFunction))!(clsPrjFunctionBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFunctionEN.memo) == false &&
    undefined !== pobjPrjFunctionEN.memo &&
    tzDataType.isString(pobjPrjFunctionEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[说明(memo)]的值:[$(pobjPrjFunctionEN.memo)], 非法,应该为字符型(In 工程函数(PrjFunction))!(clsPrjFunctionBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
  if (
    IsNullOrEmpty(pobjPrjFunctionEN.prjId) == false &&
    pobjPrjFunctionEN.prjId != '[nuull]' &&
    GetStrLen(pobjPrjFunctionEN.prjId) != 4
  ) {
    throw '(errid:Watl000415)字段[工程ID]作为外键字段,长度应该为4(In 工程函数)!(clsPrjFunctionBL:CheckPropertyNew)';
  }
  if (
    IsNullOrEmpty(pobjPrjFunctionEN.returnTypeId) == false &&
    pobjPrjFunctionEN.returnTypeId != '[nuull]' &&
    GetStrLen(pobjPrjFunctionEN.returnTypeId) != 2
  ) {
    throw '(errid:Watl000415)字段[返回类型ID]作为外键字段,长度应该为2(In 工程函数)!(clsPrjFunctionBL:CheckPropertyNew)';
  }
  if (
    IsNullOrEmpty(pobjPrjFunctionEN.funcTypeId) == false &&
    pobjPrjFunctionEN.funcTypeId != '[nuull]' &&
    GetStrLen(pobjPrjFunctionEN.funcTypeId) != 2
  ) {
    throw '(errid:Watl000415)字段[函数类型Id]作为外键字段,长度应该为2(In 工程函数)!(clsPrjFunctionBL:CheckPropertyNew)';
  }

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function PrjFunction_CheckProperty4Update(pobjPrjFunctionEN: clsPrjFunctionEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjPrjFunctionEN.funcId) == false &&
    GetStrLen(pobjPrjFunctionEN.funcId) > 10
  ) {
    throw new Error(
      '(errid:Watl000416)字段[函数ID(funcId)]的长度不能超过10(In 工程函数(PrjFunction))!值:$(pobjPrjFunctionEN.funcId)(clsPrjFunctionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFunctionEN.funcName) == false &&
    GetStrLen(pobjPrjFunctionEN.funcName) > 100
  ) {
    throw new Error(
      '(errid:Watl000416)字段[函数名(funcName)]的长度不能超过100(In 工程函数(PrjFunction))!值:$(pobjPrjFunctionEN.funcName)(clsPrjFunctionBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjPrjFunctionEN.prjId) == false && GetStrLen(pobjPrjFunctionEN.prjId) > 4) {
    throw new Error(
      '(errid:Watl000416)字段[工程ID(prjId)]的长度不能超过4(In 工程函数(PrjFunction))!值:$(pobjPrjFunctionEN.prjId)(clsPrjFunctionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFunctionEN.returnTypeId) == false &&
    GetStrLen(pobjPrjFunctionEN.returnTypeId) > 2
  ) {
    throw new Error(
      '(errid:Watl000416)字段[返回类型ID(returnTypeId)]的长度不能超过2(In 工程函数(PrjFunction))!值:$(pobjPrjFunctionEN.returnTypeId)(clsPrjFunctionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFunctionEN.funcTypeId) == false &&
    GetStrLen(pobjPrjFunctionEN.funcTypeId) > 2
  ) {
    throw new Error(
      '(errid:Watl000416)字段[函数类型Id(funcTypeId)]的长度不能超过2(In 工程函数(PrjFunction))!值:$(pobjPrjFunctionEN.funcTypeId)(clsPrjFunctionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFunctionEN.userId) == false &&
    GetStrLen(pobjPrjFunctionEN.userId) > 18
  ) {
    throw new Error(
      '(errid:Watl000416)字段[用户Id(userId)]的长度不能超过18(In 工程函数(PrjFunction))!值:$(pobjPrjFunctionEN.userId)(clsPrjFunctionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFunctionEN.updDate) == false &&
    GetStrLen(pobjPrjFunctionEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 工程函数(PrjFunction))!值:$(pobjPrjFunctionEN.updDate)(clsPrjFunctionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFunctionEN.updUser) == false &&
    GetStrLen(pobjPrjFunctionEN.updUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改者(updUser)]的长度不能超过20(In 工程函数(PrjFunction))!值:$(pobjPrjFunctionEN.updUser)(clsPrjFunctionBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjPrjFunctionEN.memo) == false && GetStrLen(pobjPrjFunctionEN.memo) > 1000) {
    throw new Error(
      '(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In 工程函数(PrjFunction))!值:$(pobjPrjFunctionEN.memo)(clsPrjFunctionBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjPrjFunctionEN.funcId) == false &&
    undefined !== pobjPrjFunctionEN.funcId &&
    tzDataType.isString(pobjPrjFunctionEN.funcId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[函数ID(funcId)]的值:[$(pobjPrjFunctionEN.funcId)], 非法,应该为字符型(In 工程函数(PrjFunction))!(clsPrjFunctionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFunctionEN.funcName) == false &&
    undefined !== pobjPrjFunctionEN.funcName &&
    tzDataType.isString(pobjPrjFunctionEN.funcName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[函数名(funcName)]的值:[$(pobjPrjFunctionEN.funcName)], 非法,应该为字符型(In 工程函数(PrjFunction))!(clsPrjFunctionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFunctionEN.prjId) == false &&
    undefined !== pobjPrjFunctionEN.prjId &&
    tzDataType.isString(pobjPrjFunctionEN.prjId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[工程ID(prjId)]的值:[$(pobjPrjFunctionEN.prjId)], 非法,应该为字符型(In 工程函数(PrjFunction))!(clsPrjFunctionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFunctionEN.returnTypeId) == false &&
    undefined !== pobjPrjFunctionEN.returnTypeId &&
    tzDataType.isString(pobjPrjFunctionEN.returnTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[返回类型ID(returnTypeId)]的值:[$(pobjPrjFunctionEN.returnTypeId)], 非法,应该为字符型(In 工程函数(PrjFunction))!(clsPrjFunctionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFunctionEN.funcTypeId) == false &&
    undefined !== pobjPrjFunctionEN.funcTypeId &&
    tzDataType.isString(pobjPrjFunctionEN.funcTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[函数类型Id(funcTypeId)]的值:[$(pobjPrjFunctionEN.funcTypeId)], 非法,应该为字符型(In 工程函数(PrjFunction))!(clsPrjFunctionBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjPrjFunctionEN.isTemplate &&
    undefined !== pobjPrjFunctionEN.isTemplate &&
    tzDataType.isBoolean(pobjPrjFunctionEN.isTemplate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否模板(isTemplate)]的值:[$(pobjPrjFunctionEN.isTemplate)], 非法,应该为布尔型(In 工程函数(PrjFunction))!(clsPrjFunctionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFunctionEN.funcCode) == false &&
    undefined !== pobjPrjFunctionEN.funcCode &&
    tzDataType.isString(pobjPrjFunctionEN.funcCode) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[函数代码(funcCode)]的值:[$(pobjPrjFunctionEN.funcCode)], 非法,应该为字符型(In 工程函数(PrjFunction))!(clsPrjFunctionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFunctionEN.userId) == false &&
    undefined !== pobjPrjFunctionEN.userId &&
    tzDataType.isString(pobjPrjFunctionEN.userId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[用户Id(userId)]的值:[$(pobjPrjFunctionEN.userId)], 非法,应该为字符型(In 工程函数(PrjFunction))!(clsPrjFunctionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFunctionEN.updDate) == false &&
    undefined !== pobjPrjFunctionEN.updDate &&
    tzDataType.isString(pobjPrjFunctionEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjPrjFunctionEN.updDate)], 非法,应该为字符型(In 工程函数(PrjFunction))!(clsPrjFunctionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFunctionEN.updUser) == false &&
    undefined !== pobjPrjFunctionEN.updUser &&
    tzDataType.isString(pobjPrjFunctionEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改者(updUser)]的值:[$(pobjPrjFunctionEN.updUser)], 非法,应该为字符型(In 工程函数(PrjFunction))!(clsPrjFunctionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFunctionEN.memo) == false &&
    undefined !== pobjPrjFunctionEN.memo &&
    tzDataType.isString(pobjPrjFunctionEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[说明(memo)]的值:[$(pobjPrjFunctionEN.memo)], 非法,应该为字符型(In 工程函数(PrjFunction))!(clsPrjFunctionBL:CheckProperty4Update)',
    );
  }
  //检查主键是否为Null或者空!
  if (
    IsNullOrEmpty(pobjPrjFunctionEN.funcId) === true ||
    pobjPrjFunctionEN.funcId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000064)字段[函数ID]不能为空(In 工程函数)!(clsPrjFunctionBL:CheckProperty4Update)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
  if (
    IsNullOrEmpty(pobjPrjFunctionEN.prjId) == false &&
    pobjPrjFunctionEN.prjId != '[nuull]' &&
    GetStrLen(pobjPrjFunctionEN.prjId) != 4
  ) {
    throw '(errid:Watl000418)字段[工程ID]作为外键字段,长度应该为4(In 工程函数)!(clsPrjFunctionBL:CheckPropertyNew)';
  }
  if (
    IsNullOrEmpty(pobjPrjFunctionEN.returnTypeId) == false &&
    pobjPrjFunctionEN.returnTypeId != '[nuull]' &&
    GetStrLen(pobjPrjFunctionEN.returnTypeId) != 2
  ) {
    throw '(errid:Watl000418)字段[返回类型ID]作为外键字段,长度应该为2(In 工程函数)!(clsPrjFunctionBL:CheckPropertyNew)';
  }
  if (
    IsNullOrEmpty(pobjPrjFunctionEN.funcTypeId) == false &&
    pobjPrjFunctionEN.funcTypeId != '[nuull]' &&
    GetStrLen(pobjPrjFunctionEN.funcTypeId) != 2
  ) {
    throw '(errid:Watl000418)字段[函数类型Id]作为外键字段,长度应该为2(In 工程函数)!(clsPrjFunctionBL:CheckPropertyNew)';
  }
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2023-11-05
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function PrjFunction_GetJSONStrByObj(pobjPrjFunctionEN: clsPrjFunctionEN): string {
  pobjPrjFunctionEN.sfUpdFldSetStr = pobjPrjFunctionEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjPrjFunctionEN);
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
 * 日期:2023-11-05
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
 */
export function PrjFunction_GetObjLstByJSONStr(strJSON: string): Array<clsPrjFunctionEN> {
  let arrPrjFunctionObjLst = new Array<clsPrjFunctionEN>();
  if (strJSON === '') {
    return arrPrjFunctionObjLst;
  }
  try {
    arrPrjFunctionObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrPrjFunctionObjLst;
  }
  return arrPrjFunctionObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-05
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrPrjFunctionObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function PrjFunction_GetObjLstByJSONObjLst(
  arrPrjFunctionObjLstS: Array<clsPrjFunctionEN>,
): Array<clsPrjFunctionEN> {
  const arrPrjFunctionObjLst = new Array<clsPrjFunctionEN>();
  for (const objInFor of arrPrjFunctionObjLstS) {
    const obj1 = PrjFunction_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrPrjFunctionObjLst.push(obj1);
  }
  return arrPrjFunctionObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-05
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function PrjFunction_GetObjByJSONStr(strJSON: string): clsPrjFunctionEN {
  let pobjPrjFunctionEN = new clsPrjFunctionEN();
  if (strJSON === '') {
    return pobjPrjFunctionEN;
  }
  try {
    pobjPrjFunctionEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjPrjFunctionEN;
  }
  return pobjPrjFunctionEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function PrjFunction_GetCombineCondition(objPrjFunctionCond: clsPrjFunctionEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjFunctionCond.dicFldComparisonOp,
      clsPrjFunctionEN.con_FuncId,
    ) == true
  ) {
    const strComparisonOpFuncId: string =
      objPrjFunctionCond.dicFldComparisonOp[clsPrjFunctionEN.con_FuncId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjFunctionEN.con_FuncId,
      objPrjFunctionCond.funcId,
      strComparisonOpFuncId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjFunctionCond.dicFldComparisonOp,
      clsPrjFunctionEN.con_FuncName,
    ) == true
  ) {
    const strComparisonOpFuncName: string =
      objPrjFunctionCond.dicFldComparisonOp[clsPrjFunctionEN.con_FuncName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjFunctionEN.con_FuncName,
      objPrjFunctionCond.funcName,
      strComparisonOpFuncName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjFunctionCond.dicFldComparisonOp,
      clsPrjFunctionEN.con_PrjId,
    ) == true
  ) {
    const strComparisonOpPrjId: string =
      objPrjFunctionCond.dicFldComparisonOp[clsPrjFunctionEN.con_PrjId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjFunctionEN.con_PrjId,
      objPrjFunctionCond.prjId,
      strComparisonOpPrjId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjFunctionCond.dicFldComparisonOp,
      clsPrjFunctionEN.con_ReturnTypeId,
    ) == true
  ) {
    const strComparisonOpReturnTypeId: string =
      objPrjFunctionCond.dicFldComparisonOp[clsPrjFunctionEN.con_ReturnTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjFunctionEN.con_ReturnTypeId,
      objPrjFunctionCond.returnTypeId,
      strComparisonOpReturnTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjFunctionCond.dicFldComparisonOp,
      clsPrjFunctionEN.con_FuncTypeId,
    ) == true
  ) {
    const strComparisonOpFuncTypeId: string =
      objPrjFunctionCond.dicFldComparisonOp[clsPrjFunctionEN.con_FuncTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjFunctionEN.con_FuncTypeId,
      objPrjFunctionCond.funcTypeId,
      strComparisonOpFuncTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjFunctionCond.dicFldComparisonOp,
      clsPrjFunctionEN.con_IsTemplate,
    ) == true
  ) {
    if (objPrjFunctionCond.isTemplate == true) {
      strWhereCond += Format(" And {0} = '1'", clsPrjFunctionEN.con_IsTemplate);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsPrjFunctionEN.con_IsTemplate);
    }
  }
  //数据类型string(text)在函数:[AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj]中没有处理!
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjFunctionCond.dicFldComparisonOp,
      clsPrjFunctionEN.con_UserId,
    ) == true
  ) {
    const strComparisonOpUserId: string =
      objPrjFunctionCond.dicFldComparisonOp[clsPrjFunctionEN.con_UserId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjFunctionEN.con_UserId,
      objPrjFunctionCond.userId,
      strComparisonOpUserId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjFunctionCond.dicFldComparisonOp,
      clsPrjFunctionEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objPrjFunctionCond.dicFldComparisonOp[clsPrjFunctionEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjFunctionEN.con_UpdDate,
      objPrjFunctionCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjFunctionCond.dicFldComparisonOp,
      clsPrjFunctionEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objPrjFunctionCond.dicFldComparisonOp[clsPrjFunctionEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjFunctionEN.con_UpdUser,
      objPrjFunctionCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjFunctionCond.dicFldComparisonOp,
      clsPrjFunctionEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objPrjFunctionCond.dicFldComparisonOp[clsPrjFunctionEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjFunctionEN.con_Memo,
      objPrjFunctionCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--PrjFunction(工程函数),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strFuncName: 函数名(要求唯一的字段)
 * @param strPrjId: 工程ID(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function PrjFunction_GetUniCondStr(objPrjFunctionEN: clsPrjFunctionEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and FuncName = '{0}'", objPrjFunctionEN.funcName);
  strWhereCond += Format(" and PrjId = '{0}'", objPrjFunctionEN.prjId);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--PrjFunction(工程函数),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strFuncName: 函数名(要求唯一的字段)
 * @param strPrjId: 工程ID(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function PrjFunction_GetUniCondStr4Update(objPrjFunctionEN: clsPrjFunctionEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and FuncId <> '{0}'", objPrjFunctionEN.funcId);
  strWhereCond += Format(" and FuncName = '{0}'", objPrjFunctionEN.funcName);
  strWhereCond += Format(" and PrjId = '{0}'", objPrjFunctionEN.prjId);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objPrjFunctionENS:源对象
 * @param objPrjFunctionENT:目标对象
 */
export function PrjFunction_GetObjFromJsonObj(
  objPrjFunctionENS: clsPrjFunctionEN,
): clsPrjFunctionEN {
  const objPrjFunctionENT: clsPrjFunctionEN = new clsPrjFunctionEN();
  ObjectAssign(objPrjFunctionENT, objPrjFunctionENS);
  return objPrjFunctionENT;
}
