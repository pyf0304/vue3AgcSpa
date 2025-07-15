/**
 * 类名:clsFuncParaRelaWApi
 * 表名:FuncParaRela(00050498)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/14 11:51:31
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 应用类型:Vue应用InCore-TS(30)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:函数管理(PrjFunction)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * FuncParaRela(FuncParaRela)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2025年06月14日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { clsOrderByData } from '@/ts/PubFun/clsOrderByData';
import { AddRecordResult } from '@/ts/PubFun/AddRecordResult';
import { GetStrLen, tzDataType, Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { clsFuncParaRelaEN } from '@/ts/L0Entity/PrjFunction/clsFuncParaRelaEN';
import { GetExceptionStr, myShowErrorMsg, ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';

export const funcParaRela_Controller = 'FuncParaRelaApi';
export const funcParaRela_ConstructorName = 'funcParaRela';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngmId:关键字
 * @returns 对象
 **/
export async function FuncParaRela_GetObjBymIdAsync(
  lngmId: number,
): Promise<clsFuncParaRelaEN | null> {
  const strThisFuncName = 'GetObjBymIdAsync';

  if (lngmId == 0) {
    const strMsg = Format('参数:[lngmId]不能为空!(In clsFuncParaRelaWApi.GetObjBymIdAsync)');
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjBymId';
  const strUrl = GetWebApiUrl(funcParaRela_Controller, strAction);

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
      const objFuncParaRela = FuncParaRela_GetObjFromJsonObj(returnObj);
      return objFuncParaRela;
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
        funcParaRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        funcParaRela_ConstructorName,
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
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function FuncParaRela_SortFunDefa(a: clsFuncParaRelaEN, b: clsFuncParaRelaEN): number {
  return a.mId - b.mId;
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function FuncParaRela_SortFunDefa2Fld(a: clsFuncParaRelaEN, b: clsFuncParaRelaEN): number {
  if (a.funcParaId4Code == b.funcParaId4Code) return a.funcId4Code.localeCompare(b.funcId4Code);
  else return a.funcParaId4Code.localeCompare(b.funcParaId4Code);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function FuncParaRela_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsFuncParaRelaEN.con_mId:
        return (a: clsFuncParaRelaEN, b: clsFuncParaRelaEN) => {
          return a.mId - b.mId;
        };
      case clsFuncParaRelaEN.con_FuncParaId4Code:
        return (a: clsFuncParaRelaEN, b: clsFuncParaRelaEN) => {
          return a.funcParaId4Code.localeCompare(b.funcParaId4Code);
        };
      case clsFuncParaRelaEN.con_FuncId4Code:
        return (a: clsFuncParaRelaEN, b: clsFuncParaRelaEN) => {
          return a.funcId4Code.localeCompare(b.funcId4Code);
        };
      case clsFuncParaRelaEN.con_OrderNum:
        return (a: clsFuncParaRelaEN, b: clsFuncParaRelaEN) => {
          return a.orderNum - b.orderNum;
        };
      case clsFuncParaRelaEN.con_UpdDate:
        return (a: clsFuncParaRelaEN, b: clsFuncParaRelaEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsFuncParaRelaEN.con_UpdUser:
        return (a: clsFuncParaRelaEN, b: clsFuncParaRelaEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsFuncParaRelaEN.con_Memo:
        return (a: clsFuncParaRelaEN, b: clsFuncParaRelaEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[FuncParaRela]中不存在!(in ${funcParaRela_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsFuncParaRelaEN.con_mId:
        return (a: clsFuncParaRelaEN, b: clsFuncParaRelaEN) => {
          return b.mId - a.mId;
        };
      case clsFuncParaRelaEN.con_FuncParaId4Code:
        return (a: clsFuncParaRelaEN, b: clsFuncParaRelaEN) => {
          return b.funcParaId4Code.localeCompare(a.funcParaId4Code);
        };
      case clsFuncParaRelaEN.con_FuncId4Code:
        return (a: clsFuncParaRelaEN, b: clsFuncParaRelaEN) => {
          return b.funcId4Code.localeCompare(a.funcId4Code);
        };
      case clsFuncParaRelaEN.con_OrderNum:
        return (a: clsFuncParaRelaEN, b: clsFuncParaRelaEN) => {
          return b.orderNum - a.orderNum;
        };
      case clsFuncParaRelaEN.con_UpdDate:
        return (a: clsFuncParaRelaEN, b: clsFuncParaRelaEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsFuncParaRelaEN.con_UpdUser:
        return (a: clsFuncParaRelaEN, b: clsFuncParaRelaEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsFuncParaRelaEN.con_Memo:
        return (a: clsFuncParaRelaEN, b: clsFuncParaRelaEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[FuncParaRela]中不存在!(in ${funcParaRela_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}
//该表没有使用Cache,不需要生成[GetNameBymIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function FuncParaRela_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsFuncParaRelaEN.con_mId:
      return (obj: clsFuncParaRelaEN) => {
        return obj.mId === value;
      };
    case clsFuncParaRelaEN.con_FuncParaId4Code:
      return (obj: clsFuncParaRelaEN) => {
        return obj.funcParaId4Code === value;
      };
    case clsFuncParaRelaEN.con_FuncId4Code:
      return (obj: clsFuncParaRelaEN) => {
        return obj.funcId4Code === value;
      };
    case clsFuncParaRelaEN.con_OrderNum:
      return (obj: clsFuncParaRelaEN) => {
        return obj.orderNum === value;
      };
    case clsFuncParaRelaEN.con_UpdDate:
      return (obj: clsFuncParaRelaEN) => {
        return obj.updDate === value;
      };
    case clsFuncParaRelaEN.con_UpdUser:
      return (obj: clsFuncParaRelaEN) => {
        return obj.updUser === value;
      };
    case clsFuncParaRelaEN.con_Memo:
      return (obj: clsFuncParaRelaEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[FuncParaRela]中不存在!(in ${funcParaRela_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}
//该表没有使用Cache,不需要生成[func]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func )
//该表没有使用Cache,不需要生成[FuncParaRela__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function FuncParaRela_GetFldValueAsync(
  strFldName: string,
  strWhereCond: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetFldValueAsync';
  const strAction = 'GetFldValue';
  const strUrl = GetWebApiUrl(funcParaRela_Controller, strAction);

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
        funcParaRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        funcParaRela_ConstructorName,
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
export async function FuncParaRela_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(funcParaRela_Controller, strAction);

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
        funcParaRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        funcParaRela_ConstructorName,
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
export async function FuncParaRela_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(funcParaRela_Controller, strAction);

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
        funcParaRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        funcParaRela_ConstructorName,
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
export async function FuncParaRela_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsFuncParaRelaEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(funcParaRela_Controller, strAction);

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
      const objFuncParaRela = FuncParaRela_GetObjFromJsonObj(returnObj);
      return objFuncParaRela;
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
        funcParaRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        funcParaRela_ConstructorName,
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
export async function FuncParaRela_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsFuncParaRelaEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(funcParaRela_Controller, strAction);

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
          funcParaRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = FuncParaRela_GetObjLstByJSONObjLst(returnObjLst);
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
        funcParaRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        funcParaRela_ConstructorName,
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
export async function FuncParaRela_GetObjLstBymIdLstAsync(
  arrmId: Array<string>,
): Promise<Array<clsFuncParaRelaEN>> {
  const strThisFuncName = 'GetObjLstBymIdLstAsync';
  const strAction = 'GetObjLstBymIdLst';
  const strUrl = GetWebApiUrl(funcParaRela_Controller, strAction);

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
          funcParaRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = FuncParaRela_GetObjLstByJSONObjLst(returnObjLst);
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
        funcParaRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        funcParaRela_ConstructorName,
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
export async function FuncParaRela_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsFuncParaRelaEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(funcParaRela_Controller, strAction);

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
          funcParaRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = FuncParaRela_GetObjLstByJSONObjLst(returnObjLst);
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
        funcParaRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        funcParaRela_ConstructorName,
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
export async function FuncParaRela_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsFuncParaRelaEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(funcParaRela_Controller, strAction);

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
          funcParaRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = FuncParaRela_GetObjLstByJSONObjLst(returnObjLst);
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
        funcParaRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        funcParaRela_ConstructorName,
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
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)

/**
 * 调用WebApi来删除记录,根据关键字来删除记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelRecordAsync)
 * @param lngmId:关键字
 * @returns 获取删除的结果
 **/
export async function FuncParaRela_DelRecordAsync(lngmId: number): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(funcParaRela_Controller, strAction);
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
        funcParaRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        funcParaRela_ConstructorName,
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
export async function FuncParaRela_DelFuncParaRelasAsync(arrmId: Array<string>): Promise<number> {
  const strThisFuncName = 'DelFuncParaRelasAsync';
  const strAction = 'DelFuncParaRelas';
  const strUrl = GetWebApiUrl(funcParaRela_Controller, strAction);

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
        funcParaRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        funcParaRela_ConstructorName,
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
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CopyToEx)
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMapByFldName)
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByExKey)
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)

/**
 * 根据条件删除记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelMultiRecordByCondAsync)
 * @returns 实际删除记录的个数
 **/
export async function FuncParaRela_DelFuncParaRelasByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelFuncParaRelasByCondAsync';
  const strAction = 'DelFuncParaRelasByCond';
  const strUrl = GetWebApiUrl(funcParaRela_Controller, strAction);

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
        funcParaRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        funcParaRela_ConstructorName,
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
 * @param objFuncParaRelaEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function FuncParaRela_AddNewRecordAsync(
  objFuncParaRelaEN: clsFuncParaRelaEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objFuncParaRelaEN);
  const strUrl = GetWebApiUrl(funcParaRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objFuncParaRelaEN, config);
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
        funcParaRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        funcParaRela_ConstructorName,
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
 * @param objFuncParaRelaEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function FuncParaRela_GoTopAsync(objOrderByData: clsOrderByData): Promise<boolean> {
  const strThisFuncName = 'GoTopAsync';
  let strMsg = '';
  const strAction = 'GoTop';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表置顶时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(funcParaRela_Controller, strAction);

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
        funcParaRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        funcParaRela_ConstructorName,
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
 * @param objFuncParaRelaEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function FuncParaRela_UpMoveAsync(objOrderByData: clsOrderByData): Promise<boolean> {
  const strThisFuncName = 'UpMoveAsync';
  let strMsg = '';
  const strAction = 'UpMove';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表上移时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objFuncParaRelaEN);
  const strUrl = GetWebApiUrl(funcParaRela_Controller, strAction);

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
        funcParaRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        funcParaRela_ConstructorName,
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
 * @param objFuncParaRelaEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function FuncParaRela_DownMoveAsync(objOrderByData: clsOrderByData): Promise<boolean> {
  const strThisFuncName = 'DownMoveAsync';
  let strMsg = '';
  const strAction = 'DownMove';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表下移时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objFuncParaRelaEN);
  const strUrl = GetWebApiUrl(funcParaRela_Controller, strAction);

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
        funcParaRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        funcParaRela_ConstructorName,
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
export async function FuncParaRela_AddNewObjSave(
  objFuncParaRelaEN: clsFuncParaRelaEN,
): Promise<AddRecordResult> {
  const strThisFuncName = 'AddNewObjSave';
  try {
    FuncParaRela_CheckPropertyNew(objFuncParaRelaEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${funcParaRela_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    alert(strMsg);
    return { keyword: '', success: false }; //一定要有一个返回值,否则会出错!
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await FuncParaRela_CheckUniCond4Add(objFuncParaRelaEN);
    if (bolIsExistCond == false) {
      return { keyword: '', success: false };
    }
    let returnBool = false;
    returnBool = await FuncParaRela_AddNewRecordAsync(objFuncParaRelaEN);
    if (returnBool == true) {
      //FuncParaRela_ReFreshCache();
    } else {
      const strInfo = `添加[FuncParaRela(FuncParaRela)]记录不成功!`;
      //显示信息框
      throw strInfo;
    }
    return { keyword: objFuncParaRelaEN.mId.toString(), success: returnBool }; //一定要有一个返回值,否则会出错!
  } catch (e) {
    const strMsg = `添加记录不成功,${e}.(in ${funcParaRela_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export async function FuncParaRela_CheckUniCond4Add(
  objFuncParaRelaEN: clsFuncParaRelaEN,
): Promise<boolean> {
  const strUniquenessCondition = FuncParaRela_GetUniCondStr(objFuncParaRelaEN);
  const bolIsExistCondition = await FuncParaRela_IsExistRecordAsync(strUniquenessCondition);
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
export async function FuncParaRela_CheckUniCond4Update(
  objFuncParaRelaEN: clsFuncParaRelaEN,
): Promise<boolean> {
  const strUniquenessCondition = FuncParaRela_GetUniCondStr4Update(objFuncParaRelaEN);
  const bolIsExistCondition = await FuncParaRela_IsExistRecordAsync(strUniquenessCondition);
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
export async function FuncParaRela_UpdateObjSave(
  objFuncParaRelaEN: clsFuncParaRelaEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateObjSave';
  objFuncParaRelaEN.sfUpdFldSetStr = objFuncParaRelaEN.updFldString; //设置哪些字段被修改(脏字段)
  if (objFuncParaRelaEN.mId == 0 || objFuncParaRelaEN.mId == undefined) {
    console.error('关键字不能为空!');
    throw '关键字不能为空!';
  }
  try {
    FuncParaRela_CheckProperty4Update(objFuncParaRelaEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${funcParaRela_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await FuncParaRela_CheckUniCond4Update(objFuncParaRelaEN);
    if (bolIsExistCond == false) {
      return false;
    }
    const returnBool = await FuncParaRela_UpdateRecordAsync(objFuncParaRelaEN);
    if (returnBool == true) {
      //FuncParaRela_ReFreshCache();
    }
    return returnBool;
  } catch (e) {
    const strMsg = `修改记录不成功,${e}.(in ${funcParaRela_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 把所给的关键字列表相关的记录移底
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GoBottomAsync)
 * @param objFuncParaRelaEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function FuncParaRela_GoBottomAsync(objOrderByData: clsOrderByData): Promise<boolean> {
  const strThisFuncName = 'GoBottomAsync';
  let strMsg = '';
  const strAction = 'GoBottom';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表置底时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objFuncParaRelaEN);
  const strUrl = GetWebApiUrl(funcParaRela_Controller, strAction);

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
        funcParaRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        funcParaRela_ConstructorName,
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
 * @param objFuncParaRelaEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function FuncParaRela_ReOrderAsync(objOrderByData: clsOrderByData): Promise<boolean> {
  const strThisFuncName = 'ReOrderAsync';
  const strAction = 'ReOrder';
  //var strJSON = JSON.stringify(objFuncParaRelaEN);
  const strUrl = GetWebApiUrl(funcParaRela_Controller, strAction);

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
        funcParaRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        funcParaRela_ConstructorName,
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
 * @param objFuncParaRelaEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function FuncParaRela_AddNewRecordWithReturnKeyAsync(
  objFuncParaRelaEN: clsFuncParaRelaEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(funcParaRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objFuncParaRelaEN, config);
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
        funcParaRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        funcParaRela_ConstructorName,
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
 * @param objFuncParaRelaEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function FuncParaRela_UpdateRecordAsync(
  objFuncParaRelaEN: clsFuncParaRelaEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objFuncParaRelaEN.sfUpdFldSetStr === undefined ||
    objFuncParaRelaEN.sfUpdFldSetStr === null ||
    objFuncParaRelaEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format('对象(关键字: {0})的【修改字段集】为空,不能修改!', objFuncParaRelaEN.mId);
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(funcParaRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objFuncParaRelaEN, config);
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
        funcParaRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        funcParaRela_ConstructorName,
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
 * @param objFuncParaRelaEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function FuncParaRela_EditRecordExAsync(
  objFuncParaRelaEN: clsFuncParaRelaEN,
): Promise<boolean> {
  const strThisFuncName = 'EditRecordExAsync';
  const strAction = 'EditRecordEx';
  if (
    objFuncParaRelaEN.sfUpdFldSetStr === undefined ||
    objFuncParaRelaEN.sfUpdFldSetStr === null ||
    objFuncParaRelaEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format('对象(关键字: {0})的【修改字段集】为空,不能修改!', objFuncParaRelaEN.mId);
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(funcParaRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objFuncParaRelaEN, config);
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
        funcParaRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        funcParaRela_ConstructorName,
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
 * @param objFuncParaRelaEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function FuncParaRela_UpdateWithConditionAsync(
  objFuncParaRelaEN: clsFuncParaRelaEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objFuncParaRelaEN.sfUpdFldSetStr === undefined ||
    objFuncParaRelaEN.sfUpdFldSetStr === null ||
    objFuncParaRelaEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format('对象(关键字: {0})的【修改字段集】为空,不能修改!', objFuncParaRelaEN.mId);
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(funcParaRela_Controller, strAction);
  objFuncParaRelaEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objFuncParaRelaEN, config);
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
        funcParaRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        funcParaRela_ConstructorName,
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
export async function FuncParaRela_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(funcParaRela_Controller, strAction);

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
        funcParaRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        funcParaRela_ConstructorName,
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
export async function FuncParaRela_IsExistAsync(lngmId: number): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(funcParaRela_Controller, strAction);

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
        funcParaRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        funcParaRela_ConstructorName,
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
export async function FuncParaRela_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(funcParaRela_Controller, strAction);

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
        funcParaRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        funcParaRela_ConstructorName,
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
export async function FuncParaRela_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(funcParaRela_Controller, strAction);

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
        funcParaRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        funcParaRela_ConstructorName,
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
export function FuncParaRela_GetWebApiUrl(strController: string, strAction: string): string {
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
export function FuncParaRela_CheckPropertyNew(pobjFuncParaRelaEN: clsFuncParaRelaEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjFuncParaRelaEN.funcParaId4Code) === true) {
    throw new Error(
      `(errid:Watl000411)字段[函数参数Id]不能为空(In FuncParaRela)!(clsFuncParaRelaBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFuncParaRelaEN.funcId4Code) === true ||
    pobjFuncParaRelaEN.funcId4Code.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000411)字段[函数Id4Code]不能为空(In FuncParaRela)!(clsFuncParaRelaBL:CheckPropertyNew0)`,
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjFuncParaRelaEN.funcParaId4Code) == false &&
    GetStrLen(pobjFuncParaRelaEN.funcParaId4Code) > 8
  ) {
    throw new Error(
      `(errid:Watl000413)字段[函数参数Id(funcParaId4Code)]的长度不能超过8(In FuncParaRela(FuncParaRela))!值:${pobjFuncParaRelaEN.funcParaId4Code}(clsFuncParaRelaBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFuncParaRelaEN.funcId4Code) == false &&
    GetStrLen(pobjFuncParaRelaEN.funcId4Code) > 8
  ) {
    throw new Error(
      `(errid:Watl000413)字段[函数Id4Code(funcId4Code)]的长度不能超过8(In FuncParaRela(FuncParaRela))!值:${pobjFuncParaRelaEN.funcId4Code}(clsFuncParaRelaBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFuncParaRelaEN.updDate) == false &&
    GetStrLen(pobjFuncParaRelaEN.updDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In FuncParaRela(FuncParaRela))!值:${pobjFuncParaRelaEN.updDate}(clsFuncParaRelaBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFuncParaRelaEN.updUser) == false &&
    GetStrLen(pobjFuncParaRelaEN.updUser) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改者(updUser)]的长度不能超过20(In FuncParaRela(FuncParaRela))!值:${pobjFuncParaRelaEN.updUser}(clsFuncParaRelaBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFuncParaRelaEN.memo) == false &&
    GetStrLen(pobjFuncParaRelaEN.memo) > 1000
  ) {
    throw new Error(
      `(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In FuncParaRela(FuncParaRela))!值:${pobjFuncParaRelaEN.memo}(clsFuncParaRelaBL:CheckPropertyNew)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjFuncParaRelaEN.mId &&
    undefined !== pobjFuncParaRelaEN.mId &&
    tzDataType.isNumber(pobjFuncParaRelaEN.mId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[mId(mId)]的值:[${pobjFuncParaRelaEN.mId}], 非法,应该为数值型(In FuncParaRela(FuncParaRela))!(clsFuncParaRelaBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFuncParaRelaEN.funcParaId4Code) == false &&
    undefined !== pobjFuncParaRelaEN.funcParaId4Code &&
    tzDataType.isString(pobjFuncParaRelaEN.funcParaId4Code) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[函数参数Id(funcParaId4Code)]的值:[${pobjFuncParaRelaEN.funcParaId4Code}], 非法,应该为字符型(In FuncParaRela(FuncParaRela))!(clsFuncParaRelaBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFuncParaRelaEN.funcId4Code) == false &&
    undefined !== pobjFuncParaRelaEN.funcId4Code &&
    tzDataType.isString(pobjFuncParaRelaEN.funcId4Code) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[函数Id4Code(funcId4Code)]的值:[${pobjFuncParaRelaEN.funcId4Code}], 非法,应该为字符型(In FuncParaRela(FuncParaRela))!(clsFuncParaRelaBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjFuncParaRelaEN.orderNum &&
    undefined !== pobjFuncParaRelaEN.orderNum &&
    tzDataType.isNumber(pobjFuncParaRelaEN.orderNum) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[序号(orderNum)]的值:[${pobjFuncParaRelaEN.orderNum}], 非法,应该为数值型(In FuncParaRela(FuncParaRela))!(clsFuncParaRelaBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFuncParaRelaEN.updDate) == false &&
    undefined !== pobjFuncParaRelaEN.updDate &&
    tzDataType.isString(pobjFuncParaRelaEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjFuncParaRelaEN.updDate}], 非法,应该为字符型(In FuncParaRela(FuncParaRela))!(clsFuncParaRelaBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFuncParaRelaEN.updUser) == false &&
    undefined !== pobjFuncParaRelaEN.updUser &&
    tzDataType.isString(pobjFuncParaRelaEN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改者(updUser)]的值:[${pobjFuncParaRelaEN.updUser}], 非法,应该为字符型(In FuncParaRela(FuncParaRela))!(clsFuncParaRelaBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFuncParaRelaEN.memo) == false &&
    undefined !== pobjFuncParaRelaEN.memo &&
    tzDataType.isString(pobjFuncParaRelaEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[说明(memo)]的值:[${pobjFuncParaRelaEN.memo}], 非法,应该为字符型(In FuncParaRela(FuncParaRela))!(clsFuncParaRelaBL:CheckPropertyNew0)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
  if (
    IsNullOrEmpty(pobjFuncParaRelaEN.funcParaId4Code) == false &&
    pobjFuncParaRelaEN.funcParaId4Code != '[nuull]' &&
    GetStrLen(pobjFuncParaRelaEN.funcParaId4Code) != 8
  ) {
    throw '(errid:Watl000415)字段[函数参数Id]作为外键字段,长度应该为8(In FuncParaRela)!(clsFuncParaRelaBL:CheckPropertyNew)';
  }
  if (
    IsNullOrEmpty(pobjFuncParaRelaEN.funcId4Code) == false &&
    pobjFuncParaRelaEN.funcId4Code != '[nuull]' &&
    GetStrLen(pobjFuncParaRelaEN.funcId4Code) != 8
  ) {
    throw '(errid:Watl000415)字段[函数Id4Code]作为外键字段,长度应该为8(In FuncParaRela)!(clsFuncParaRelaBL:CheckPropertyNew)';
  }

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function FuncParaRela_CheckProperty4Update(pobjFuncParaRelaEN: clsFuncParaRelaEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjFuncParaRelaEN.funcParaId4Code) == false &&
    GetStrLen(pobjFuncParaRelaEN.funcParaId4Code) > 8
  ) {
    throw new Error(
      `(errid:Watl000416)字段[函数参数Id(funcParaId4Code)]的长度不能超过8(In FuncParaRela(FuncParaRela))!值:${pobjFuncParaRelaEN.funcParaId4Code}(clsFuncParaRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFuncParaRelaEN.funcId4Code) == false &&
    GetStrLen(pobjFuncParaRelaEN.funcId4Code) > 8
  ) {
    throw new Error(
      `(errid:Watl000416)字段[函数Id4Code(funcId4Code)]的长度不能超过8(In FuncParaRela(FuncParaRela))!值:${pobjFuncParaRelaEN.funcId4Code}(clsFuncParaRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFuncParaRelaEN.updDate) == false &&
    GetStrLen(pobjFuncParaRelaEN.updDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In FuncParaRela(FuncParaRela))!值:${pobjFuncParaRelaEN.updDate}(clsFuncParaRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFuncParaRelaEN.updUser) == false &&
    GetStrLen(pobjFuncParaRelaEN.updUser) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改者(updUser)]的长度不能超过20(In FuncParaRela(FuncParaRela))!值:${pobjFuncParaRelaEN.updUser}(clsFuncParaRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFuncParaRelaEN.memo) == false &&
    GetStrLen(pobjFuncParaRelaEN.memo) > 1000
  ) {
    throw new Error(
      `(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In FuncParaRela(FuncParaRela))!值:${pobjFuncParaRelaEN.memo}(clsFuncParaRelaBL:CheckProperty4Update)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjFuncParaRelaEN.mId &&
    undefined !== pobjFuncParaRelaEN.mId &&
    tzDataType.isNumber(pobjFuncParaRelaEN.mId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[mId(mId)]的值:[${pobjFuncParaRelaEN.mId}], 非法,应该为数值型(In FuncParaRela(FuncParaRela))!(clsFuncParaRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFuncParaRelaEN.funcParaId4Code) == false &&
    undefined !== pobjFuncParaRelaEN.funcParaId4Code &&
    tzDataType.isString(pobjFuncParaRelaEN.funcParaId4Code) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[函数参数Id(funcParaId4Code)]的值:[${pobjFuncParaRelaEN.funcParaId4Code}], 非法,应该为字符型(In FuncParaRela(FuncParaRela))!(clsFuncParaRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFuncParaRelaEN.funcId4Code) == false &&
    undefined !== pobjFuncParaRelaEN.funcId4Code &&
    tzDataType.isString(pobjFuncParaRelaEN.funcId4Code) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[函数Id4Code(funcId4Code)]的值:[${pobjFuncParaRelaEN.funcId4Code}], 非法,应该为字符型(In FuncParaRela(FuncParaRela))!(clsFuncParaRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjFuncParaRelaEN.orderNum &&
    undefined !== pobjFuncParaRelaEN.orderNum &&
    tzDataType.isNumber(pobjFuncParaRelaEN.orderNum) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[序号(orderNum)]的值:[${pobjFuncParaRelaEN.orderNum}], 非法,应该为数值型(In FuncParaRela(FuncParaRela))!(clsFuncParaRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFuncParaRelaEN.updDate) == false &&
    undefined !== pobjFuncParaRelaEN.updDate &&
    tzDataType.isString(pobjFuncParaRelaEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjFuncParaRelaEN.updDate}], 非法,应该为字符型(In FuncParaRela(FuncParaRela))!(clsFuncParaRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFuncParaRelaEN.updUser) == false &&
    undefined !== pobjFuncParaRelaEN.updUser &&
    tzDataType.isString(pobjFuncParaRelaEN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改者(updUser)]的值:[${pobjFuncParaRelaEN.updUser}], 非法,应该为字符型(In FuncParaRela(FuncParaRela))!(clsFuncParaRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFuncParaRelaEN.memo) == false &&
    undefined !== pobjFuncParaRelaEN.memo &&
    tzDataType.isString(pobjFuncParaRelaEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[说明(memo)]的值:[${pobjFuncParaRelaEN.memo}], 非法,应该为字符型(In FuncParaRela(FuncParaRela))!(clsFuncParaRelaBL:CheckProperty4Update)`,
    );
  }
  //检查主键是否为Null或者空!
  if (
    null === pobjFuncParaRelaEN.mId ||
    (pobjFuncParaRelaEN.mId != null && pobjFuncParaRelaEN.mId.toString() === '')
  ) {
    throw new Error(
      `(errid:Watl000064)字段[mId]不能为空(In FuncParaRela)!(clsFuncParaRelaBL:CheckProperty4Update)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
  if (
    IsNullOrEmpty(pobjFuncParaRelaEN.funcParaId4Code) == false &&
    pobjFuncParaRelaEN.funcParaId4Code != '[nuull]' &&
    GetStrLen(pobjFuncParaRelaEN.funcParaId4Code) != 8
  ) {
    throw '(errid:Watl000418)字段[函数参数Id]作为外键字段,长度应该为8(In FuncParaRela)!(clsFuncParaRelaBL:CheckPropertyNew)';
  }
  if (
    IsNullOrEmpty(pobjFuncParaRelaEN.funcId4Code) == false &&
    pobjFuncParaRelaEN.funcId4Code != '[nuull]' &&
    GetStrLen(pobjFuncParaRelaEN.funcId4Code) != 8
  ) {
    throw '(errid:Watl000418)字段[函数Id4Code]作为外键字段,长度应该为8(In FuncParaRela)!(clsFuncParaRelaBL:CheckPropertyNew)';
  }
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function FuncParaRela_GetJSONStrByObj(pobjFuncParaRelaEN: clsFuncParaRelaEN): string {
  pobjFuncParaRelaEN.sfUpdFldSetStr = pobjFuncParaRelaEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjFuncParaRelaEN);
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
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
 */
export function FuncParaRela_GetObjLstByJSONStr(strJSON: string): Array<clsFuncParaRelaEN> {
  let arrFuncParaRelaObjLst = new Array<clsFuncParaRelaEN>();
  if (strJSON === '') {
    return arrFuncParaRelaObjLst;
  }
  try {
    arrFuncParaRelaObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrFuncParaRelaObjLst;
  }
  return arrFuncParaRelaObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrFuncParaRelaObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function FuncParaRela_GetObjLstByJSONObjLst(
  arrFuncParaRelaObjLstS: Array<clsFuncParaRelaEN>,
): Array<clsFuncParaRelaEN> {
  const arrFuncParaRelaObjLst = new Array<clsFuncParaRelaEN>();
  for (const objInFor of arrFuncParaRelaObjLstS) {
    const obj1 = FuncParaRela_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrFuncParaRelaObjLst.push(obj1);
  }
  return arrFuncParaRelaObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function FuncParaRela_GetObjByJSONStr(strJSON: string): clsFuncParaRelaEN {
  let pobjFuncParaRelaEN = new clsFuncParaRelaEN();
  if (strJSON === '') {
    return pobjFuncParaRelaEN;
  }
  try {
    pobjFuncParaRelaEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjFuncParaRelaEN;
  }
  return pobjFuncParaRelaEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function FuncParaRela_GetCombineCondition(objFuncParaRelaCond: clsFuncParaRelaEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objFuncParaRelaCond.dicFldComparisonOp,
      clsFuncParaRelaEN.con_mId,
    ) == true
  ) {
    const strComparisonOpmId: string =
      objFuncParaRelaCond.dicFldComparisonOp[clsFuncParaRelaEN.con_mId];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsFuncParaRelaEN.con_mId,
      objFuncParaRelaCond.mId,
      strComparisonOpmId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFuncParaRelaCond.dicFldComparisonOp,
      clsFuncParaRelaEN.con_FuncParaId4Code,
    ) == true
  ) {
    const strComparisonOpFuncParaId4Code: string =
      objFuncParaRelaCond.dicFldComparisonOp[clsFuncParaRelaEN.con_FuncParaId4Code];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFuncParaRelaEN.con_FuncParaId4Code,
      objFuncParaRelaCond.funcParaId4Code,
      strComparisonOpFuncParaId4Code,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFuncParaRelaCond.dicFldComparisonOp,
      clsFuncParaRelaEN.con_FuncId4Code,
    ) == true
  ) {
    const strComparisonOpFuncId4Code: string =
      objFuncParaRelaCond.dicFldComparisonOp[clsFuncParaRelaEN.con_FuncId4Code];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFuncParaRelaEN.con_FuncId4Code,
      objFuncParaRelaCond.funcId4Code,
      strComparisonOpFuncId4Code,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFuncParaRelaCond.dicFldComparisonOp,
      clsFuncParaRelaEN.con_OrderNum,
    ) == true
  ) {
    const strComparisonOpOrderNum: string =
      objFuncParaRelaCond.dicFldComparisonOp[clsFuncParaRelaEN.con_OrderNum];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsFuncParaRelaEN.con_OrderNum,
      objFuncParaRelaCond.orderNum,
      strComparisonOpOrderNum,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFuncParaRelaCond.dicFldComparisonOp,
      clsFuncParaRelaEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objFuncParaRelaCond.dicFldComparisonOp[clsFuncParaRelaEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFuncParaRelaEN.con_UpdDate,
      objFuncParaRelaCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFuncParaRelaCond.dicFldComparisonOp,
      clsFuncParaRelaEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objFuncParaRelaCond.dicFldComparisonOp[clsFuncParaRelaEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFuncParaRelaEN.con_UpdUser,
      objFuncParaRelaCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFuncParaRelaCond.dicFldComparisonOp,
      clsFuncParaRelaEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objFuncParaRelaCond.dicFldComparisonOp[clsFuncParaRelaEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFuncParaRelaEN.con_Memo,
      objFuncParaRelaCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--FuncParaRela(FuncParaRela),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strFuncParaId4Code: 函数参数Id(要求唯一的字段)
 * @param strFuncId4Code: 函数Id4Code(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function FuncParaRela_GetUniCondStr(objFuncParaRelaEN: clsFuncParaRelaEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and FuncParaId4Code = '{0}'", objFuncParaRelaEN.funcParaId4Code);
  strWhereCond += Format(" and FuncId4Code = '{0}'", objFuncParaRelaEN.funcId4Code);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--FuncParaRela(FuncParaRela),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strFuncParaId4Code: 函数参数Id(要求唯一的字段)
 * @param strFuncId4Code: 函数Id4Code(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function FuncParaRela_GetUniCondStr4Update(objFuncParaRelaEN: clsFuncParaRelaEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and mId <> '{0}'", objFuncParaRelaEN.mId);
  strWhereCond += Format(" and FuncParaId4Code = '{0}'", objFuncParaRelaEN.funcParaId4Code);
  strWhereCond += Format(" and FuncId4Code = '{0}'", objFuncParaRelaEN.funcId4Code);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objFuncParaRelaENS:源对象
 * @param objFuncParaRelaENT:目标对象
 */
export function FuncParaRela_GetObjFromJsonObj(
  objFuncParaRelaENS: clsFuncParaRelaEN,
): clsFuncParaRelaEN {
  const objFuncParaRelaENT: clsFuncParaRelaEN = new clsFuncParaRelaEN();
  ObjectAssign(objFuncParaRelaENT, objFuncParaRelaENS);
  return objFuncParaRelaENT;
}
