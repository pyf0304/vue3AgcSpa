/**
 * 类名:clsCMFuncParaRelaWApi
 * 表名:CMFuncParaRela(00050504)
 * 版本:2024.01.20.1(服务器:WIN-SRV103-116)
 * 日期:2024/01/23 16:49:35
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:代码管理(CodeMan)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * CM函数参数关系(CMFuncParaRela)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2024年01月23日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { clsOrderByData } from '@/ts/PubFun/clsOrderByData';
import { GetStrLen, tzDataType, Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { clsCMFuncParaRelaEN } from '@/ts/L0Entity/CodeMan/clsCMFuncParaRelaEN';
import { GetExceptionStr, myShowErrorMsg, ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const cMFuncParaRela_Controller = 'CMFuncParaRelaApi';
export const cMFuncParaRela_ConstructorName = 'cMFuncParaRela';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngmId:关键字
 * @returns 对象
 **/
export async function CMFuncParaRela_GetObjBymIdAsync(
  lngmId: number,
): Promise<clsCMFuncParaRelaEN | null> {
  const strThisFuncName = 'GetObjBymIdAsync';

  if (lngmId == 0) {
    const strMsg = Format('参数:[lngmId]不能为空!(In clsCMFuncParaRelaWApi.GetObjBymIdAsync)');
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjBymId';
  const strUrl = GetWebApiUrl(cMFuncParaRela_Controller, strAction);

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
      const objCMFuncParaRela = CMFuncParaRela_GetObjFromJsonObj(returnObj);
      return objCMFuncParaRela;
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
        cMFuncParaRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFuncParaRela_ConstructorName,
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
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function CMFuncParaRela_SortFunDefa(a: clsCMFuncParaRelaEN, b: clsCMFuncParaRelaEN): number {
  return a.mId - b.mId;
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function CMFuncParaRela_SortFunDefa2Fld(
  a: clsCMFuncParaRelaEN,
  b: clsCMFuncParaRelaEN,
): number {
  if (a.cmFuncParaId == b.cmFuncParaId) return a.cmFunctionId.localeCompare(b.cmFunctionId);
  else return a.cmFuncParaId.localeCompare(b.cmFuncParaId);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function CMFuncParaRela_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsCMFuncParaRelaEN.con_mId:
        return (a: clsCMFuncParaRelaEN, b: clsCMFuncParaRelaEN) => {
          return a.mId - b.mId;
        };
      case clsCMFuncParaRelaEN.con_CmFuncParaId:
        return (a: clsCMFuncParaRelaEN, b: clsCMFuncParaRelaEN) => {
          return a.cmFuncParaId.localeCompare(b.cmFuncParaId);
        };
      case clsCMFuncParaRelaEN.con_CmFunctionId:
        return (a: clsCMFuncParaRelaEN, b: clsCMFuncParaRelaEN) => {
          return a.cmFunctionId.localeCompare(b.cmFunctionId);
        };
      case clsCMFuncParaRelaEN.con_OrderNum:
        return (a: clsCMFuncParaRelaEN, b: clsCMFuncParaRelaEN) => {
          return a.orderNum - b.orderNum;
        };
      case clsCMFuncParaRelaEN.con_PrjId:
        return (a: clsCMFuncParaRelaEN, b: clsCMFuncParaRelaEN) => {
          return a.prjId.localeCompare(b.prjId);
        };
      case clsCMFuncParaRelaEN.con_UpdDate:
        return (a: clsCMFuncParaRelaEN, b: clsCMFuncParaRelaEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsCMFuncParaRelaEN.con_UpdUser:
        return (a: clsCMFuncParaRelaEN, b: clsCMFuncParaRelaEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsCMFuncParaRelaEN.con_Memo:
        return (a: clsCMFuncParaRelaEN, b: clsCMFuncParaRelaEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[CMFuncParaRela]中不存在!(in ${cMFuncParaRela_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsCMFuncParaRelaEN.con_mId:
        return (a: clsCMFuncParaRelaEN, b: clsCMFuncParaRelaEN) => {
          return b.mId - a.mId;
        };
      case clsCMFuncParaRelaEN.con_CmFuncParaId:
        return (a: clsCMFuncParaRelaEN, b: clsCMFuncParaRelaEN) => {
          return b.cmFuncParaId.localeCompare(a.cmFuncParaId);
        };
      case clsCMFuncParaRelaEN.con_CmFunctionId:
        return (a: clsCMFuncParaRelaEN, b: clsCMFuncParaRelaEN) => {
          return b.cmFunctionId.localeCompare(a.cmFunctionId);
        };
      case clsCMFuncParaRelaEN.con_OrderNum:
        return (a: clsCMFuncParaRelaEN, b: clsCMFuncParaRelaEN) => {
          return b.orderNum - a.orderNum;
        };
      case clsCMFuncParaRelaEN.con_PrjId:
        return (a: clsCMFuncParaRelaEN, b: clsCMFuncParaRelaEN) => {
          return b.prjId.localeCompare(a.prjId);
        };
      case clsCMFuncParaRelaEN.con_UpdDate:
        return (a: clsCMFuncParaRelaEN, b: clsCMFuncParaRelaEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsCMFuncParaRelaEN.con_UpdUser:
        return (a: clsCMFuncParaRelaEN, b: clsCMFuncParaRelaEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsCMFuncParaRelaEN.con_Memo:
        return (a: clsCMFuncParaRelaEN, b: clsCMFuncParaRelaEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[CMFuncParaRela]中不存在!(in ${cMFuncParaRela_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function CMFuncParaRela_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsCMFuncParaRelaEN.con_mId:
      return (obj: clsCMFuncParaRelaEN) => {
        return obj.mId === value;
      };
    case clsCMFuncParaRelaEN.con_CmFuncParaId:
      return (obj: clsCMFuncParaRelaEN) => {
        return obj.cmFuncParaId === value;
      };
    case clsCMFuncParaRelaEN.con_CmFunctionId:
      return (obj: clsCMFuncParaRelaEN) => {
        return obj.cmFunctionId === value;
      };
    case clsCMFuncParaRelaEN.con_OrderNum:
      return (obj: clsCMFuncParaRelaEN) => {
        return obj.orderNum === value;
      };
    case clsCMFuncParaRelaEN.con_PrjId:
      return (obj: clsCMFuncParaRelaEN) => {
        return obj.prjId === value;
      };
    case clsCMFuncParaRelaEN.con_UpdDate:
      return (obj: clsCMFuncParaRelaEN) => {
        return obj.updDate === value;
      };
    case clsCMFuncParaRelaEN.con_UpdUser:
      return (obj: clsCMFuncParaRelaEN) => {
        return obj.updUser === value;
      };
    case clsCMFuncParaRelaEN.con_Memo:
      return (obj: clsCMFuncParaRelaEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[CMFuncParaRela]中不存在!(in ${cMFuncParaRela_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}
//该表没有使用Cache,不需要生成[CMFuncParaRela__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function CMFuncParaRela_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(cMFuncParaRela_Controller, strAction);

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
        cMFuncParaRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFuncParaRela_ConstructorName,
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
export async function CMFuncParaRela_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(cMFuncParaRela_Controller, strAction);

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
        cMFuncParaRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFuncParaRela_ConstructorName,
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
export async function CMFuncParaRela_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsCMFuncParaRelaEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(cMFuncParaRela_Controller, strAction);

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
      const objCMFuncParaRela = CMFuncParaRela_GetObjFromJsonObj(returnObj);
      return objCMFuncParaRela;
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
        cMFuncParaRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFuncParaRela_ConstructorName,
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
export async function CMFuncParaRela_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsCMFuncParaRelaEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(cMFuncParaRela_Controller, strAction);

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
          cMFuncParaRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = CMFuncParaRela_GetObjLstByJSONObjLst(returnObjLst);
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
        cMFuncParaRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFuncParaRela_ConstructorName,
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
export async function CMFuncParaRela_GetObjLstBymIdLstAsync(
  arrmId: Array<string>,
): Promise<Array<clsCMFuncParaRelaEN>> {
  const strThisFuncName = 'GetObjLstBymIdLstAsync';
  const strAction = 'GetObjLstBymIdLst';
  const strUrl = GetWebApiUrl(cMFuncParaRela_Controller, strAction);

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
          cMFuncParaRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = CMFuncParaRela_GetObjLstByJSONObjLst(returnObjLst);
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
        cMFuncParaRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFuncParaRela_ConstructorName,
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
export async function CMFuncParaRela_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsCMFuncParaRelaEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(cMFuncParaRela_Controller, strAction);

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
          cMFuncParaRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = CMFuncParaRela_GetObjLstByJSONObjLst(returnObjLst);
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
        cMFuncParaRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFuncParaRela_ConstructorName,
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
export async function CMFuncParaRela_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsCMFuncParaRelaEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(cMFuncParaRela_Controller, strAction);

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
          cMFuncParaRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = CMFuncParaRela_GetObjLstByJSONObjLst(returnObjLst);
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
        cMFuncParaRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFuncParaRela_ConstructorName,
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
export async function CMFuncParaRela_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsCMFuncParaRelaEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsCMFuncParaRelaEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(cMFuncParaRela_Controller, strAction);

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
          cMFuncParaRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = CMFuncParaRela_GetObjLstByJSONObjLst(returnObjLst);
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
        cMFuncParaRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFuncParaRela_ConstructorName,
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
export async function CMFuncParaRela_DelRecordAsync(lngmId: number): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(cMFuncParaRela_Controller, strAction);
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
        cMFuncParaRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFuncParaRela_ConstructorName,
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
export async function CMFuncParaRela_DelCMFuncParaRelasAsync(
  arrmId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelCMFuncParaRelasAsync';
  const strAction = 'DelCMFuncParaRelas';
  const strUrl = GetWebApiUrl(cMFuncParaRela_Controller, strAction);

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
        cMFuncParaRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFuncParaRela_ConstructorName,
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
export async function CMFuncParaRela_DelCMFuncParaRelasByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelCMFuncParaRelasByCondAsync';
  const strAction = 'DelCMFuncParaRelasByCond';
  const strUrl = GetWebApiUrl(cMFuncParaRela_Controller, strAction);

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
        cMFuncParaRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFuncParaRela_ConstructorName,
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
 * @param objCMFuncParaRelaEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function CMFuncParaRela_AddNewRecordAsync(
  objCMFuncParaRelaEN: clsCMFuncParaRelaEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objCMFuncParaRelaEN);
  const strUrl = GetWebApiUrl(cMFuncParaRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objCMFuncParaRelaEN, config);
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
        cMFuncParaRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFuncParaRela_ConstructorName,
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
 * @param objCMFuncParaRelaEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function CMFuncParaRela_GoTopAsync(objOrderByData: clsOrderByData): Promise<boolean> {
  const strThisFuncName = 'GoTopAsync';
  let strMsg = '';
  const strAction = 'GoTop';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表置顶时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(cMFuncParaRela_Controller, strAction);

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
        cMFuncParaRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFuncParaRela_ConstructorName,
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
 * @param objCMFuncParaRelaEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function CMFuncParaRela_UpMoveAsync(objOrderByData: clsOrderByData): Promise<boolean> {
  const strThisFuncName = 'UpMoveAsync';
  let strMsg = '';
  const strAction = 'UpMove';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表上移时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objCMFuncParaRelaEN);
  const strUrl = GetWebApiUrl(cMFuncParaRela_Controller, strAction);

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
        cMFuncParaRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFuncParaRela_ConstructorName,
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
 * @param objCMFuncParaRelaEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function CMFuncParaRela_DownMoveAsync(
  objOrderByData: clsOrderByData,
): Promise<boolean> {
  const strThisFuncName = 'DownMoveAsync';
  let strMsg = '';
  const strAction = 'DownMove';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表下移时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objCMFuncParaRelaEN);
  const strUrl = GetWebApiUrl(cMFuncParaRela_Controller, strAction);

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
        cMFuncParaRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFuncParaRela_ConstructorName,
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
 * 把所给的关键字列表相关的记录移底
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GoBottomAsync)
 * @param objCMFuncParaRelaEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function CMFuncParaRela_GoBottomAsync(
  objOrderByData: clsOrderByData,
): Promise<boolean> {
  const strThisFuncName = 'GoBottomAsync';
  let strMsg = '';
  const strAction = 'GoBottom';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表置底时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objCMFuncParaRelaEN);
  const strUrl = GetWebApiUrl(cMFuncParaRela_Controller, strAction);

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
        cMFuncParaRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFuncParaRela_ConstructorName,
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
 * @param objCMFuncParaRelaEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function CMFuncParaRela_ReOrderAsync(
  objOrderByData: clsOrderByData,
): Promise<boolean> {
  const strThisFuncName = 'ReOrderAsync';
  const strAction = 'ReOrder';
  //var strJSON = JSON.stringify(objCMFuncParaRelaEN);
  const strUrl = GetWebApiUrl(cMFuncParaRela_Controller, strAction);

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
        cMFuncParaRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFuncParaRela_ConstructorName,
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
 * @param objCMFuncParaRelaEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function CMFuncParaRela_AddNewRecordWithReturnKeyAsync(
  objCMFuncParaRelaEN: clsCMFuncParaRelaEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(cMFuncParaRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objCMFuncParaRelaEN, config);
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
        cMFuncParaRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFuncParaRela_ConstructorName,
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
 * @param objCMFuncParaRelaEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function CMFuncParaRela_UpdateRecordAsync(
  objCMFuncParaRelaEN: clsCMFuncParaRelaEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objCMFuncParaRelaEN.sfUpdFldSetStr === undefined ||
    objCMFuncParaRelaEN.sfUpdFldSetStr === null ||
    objCMFuncParaRelaEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objCMFuncParaRelaEN.mId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(cMFuncParaRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objCMFuncParaRelaEN, config);
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
        cMFuncParaRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFuncParaRela_ConstructorName,
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
 * @param objCMFuncParaRelaEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function CMFuncParaRela_UpdateWithConditionAsync(
  objCMFuncParaRelaEN: clsCMFuncParaRelaEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objCMFuncParaRelaEN.sfUpdFldSetStr === undefined ||
    objCMFuncParaRelaEN.sfUpdFldSetStr === null ||
    objCMFuncParaRelaEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objCMFuncParaRelaEN.mId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(cMFuncParaRela_Controller, strAction);
  objCMFuncParaRelaEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objCMFuncParaRelaEN, config);
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
        cMFuncParaRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFuncParaRela_ConstructorName,
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
export async function CMFuncParaRela_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(cMFuncParaRela_Controller, strAction);

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
        cMFuncParaRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFuncParaRela_ConstructorName,
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
export async function CMFuncParaRela_IsExistAsync(lngmId: number): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(cMFuncParaRela_Controller, strAction);

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
        cMFuncParaRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFuncParaRela_ConstructorName,
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
export async function CMFuncParaRela_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(cMFuncParaRela_Controller, strAction);

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
        cMFuncParaRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFuncParaRela_ConstructorName,
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
export async function CMFuncParaRela_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(cMFuncParaRela_Controller, strAction);

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
        cMFuncParaRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFuncParaRela_ConstructorName,
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
export function CMFuncParaRela_GetWebApiUrl(strController: string, strAction: string): string {
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
export function CMFuncParaRela_CheckPropertyNew(pobjCMFuncParaRelaEN: clsCMFuncParaRelaEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjCMFuncParaRelaEN.cmFuncParaId) === true) {
    throw new Error(
      '(errid:Watl000411)字段[函数参数Id]不能为空(In CM函数参数关系)!(clsCMFuncParaRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFuncParaRelaEN.cmFunctionId) === true ||
    pobjCMFuncParaRelaEN.cmFunctionId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000411)字段[函数Id]不能为空(In CM函数参数关系)!(clsCMFuncParaRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFuncParaRelaEN.prjId) === true ||
    pobjCMFuncParaRelaEN.prjId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000411)字段[工程ID]不能为空(In CM函数参数关系)!(clsCMFuncParaRelaBL:CheckPropertyNew0)',
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjCMFuncParaRelaEN.cmFuncParaId) == false &&
    GetStrLen(pobjCMFuncParaRelaEN.cmFuncParaId) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[函数参数Id(cmFuncParaId)]的长度不能超过8(In CM函数参数关系(CMFuncParaRela))!值:$(pobjCMFuncParaRelaEN.cmFuncParaId)(clsCMFuncParaRelaBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFuncParaRelaEN.cmFunctionId) == false &&
    GetStrLen(pobjCMFuncParaRelaEN.cmFunctionId) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[函数Id(cmFunctionId)]的长度不能超过8(In CM函数参数关系(CMFuncParaRela))!值:$(pobjCMFuncParaRelaEN.cmFunctionId)(clsCMFuncParaRelaBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFuncParaRelaEN.prjId) == false &&
    GetStrLen(pobjCMFuncParaRelaEN.prjId) > 4
  ) {
    throw new Error(
      '(errid:Watl000413)字段[工程ID(prjId)]的长度不能超过4(In CM函数参数关系(CMFuncParaRela))!值:$(pobjCMFuncParaRelaEN.prjId)(clsCMFuncParaRelaBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFuncParaRelaEN.updDate) == false &&
    GetStrLen(pobjCMFuncParaRelaEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In CM函数参数关系(CMFuncParaRela))!值:$(pobjCMFuncParaRelaEN.updDate)(clsCMFuncParaRelaBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFuncParaRelaEN.updUser) == false &&
    GetStrLen(pobjCMFuncParaRelaEN.updUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改者(updUser)]的长度不能超过20(In CM函数参数关系(CMFuncParaRela))!值:$(pobjCMFuncParaRelaEN.updUser)(clsCMFuncParaRelaBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFuncParaRelaEN.memo) == false &&
    GetStrLen(pobjCMFuncParaRelaEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In CM函数参数关系(CMFuncParaRela))!值:$(pobjCMFuncParaRelaEN.memo)(clsCMFuncParaRelaBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjCMFuncParaRelaEN.mId &&
    undefined !== pobjCMFuncParaRelaEN.mId &&
    tzDataType.isNumber(pobjCMFuncParaRelaEN.mId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[mId(mId)]的值:[$(pobjCMFuncParaRelaEN.mId)], 非法,应该为数值型(In CM函数参数关系(CMFuncParaRela))!(clsCMFuncParaRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFuncParaRelaEN.cmFuncParaId) == false &&
    undefined !== pobjCMFuncParaRelaEN.cmFuncParaId &&
    tzDataType.isString(pobjCMFuncParaRelaEN.cmFuncParaId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[函数参数Id(cmFuncParaId)]的值:[$(pobjCMFuncParaRelaEN.cmFuncParaId)], 非法,应该为字符型(In CM函数参数关系(CMFuncParaRela))!(clsCMFuncParaRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFuncParaRelaEN.cmFunctionId) == false &&
    undefined !== pobjCMFuncParaRelaEN.cmFunctionId &&
    tzDataType.isString(pobjCMFuncParaRelaEN.cmFunctionId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[函数Id(cmFunctionId)]的值:[$(pobjCMFuncParaRelaEN.cmFunctionId)], 非法,应该为字符型(In CM函数参数关系(CMFuncParaRela))!(clsCMFuncParaRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjCMFuncParaRelaEN.orderNum &&
    undefined !== pobjCMFuncParaRelaEN.orderNum &&
    tzDataType.isNumber(pobjCMFuncParaRelaEN.orderNum) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[序号(orderNum)]的值:[$(pobjCMFuncParaRelaEN.orderNum)], 非法,应该为数值型(In CM函数参数关系(CMFuncParaRela))!(clsCMFuncParaRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFuncParaRelaEN.prjId) == false &&
    undefined !== pobjCMFuncParaRelaEN.prjId &&
    tzDataType.isString(pobjCMFuncParaRelaEN.prjId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[工程ID(prjId)]的值:[$(pobjCMFuncParaRelaEN.prjId)], 非法,应该为字符型(In CM函数参数关系(CMFuncParaRela))!(clsCMFuncParaRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFuncParaRelaEN.updDate) == false &&
    undefined !== pobjCMFuncParaRelaEN.updDate &&
    tzDataType.isString(pobjCMFuncParaRelaEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjCMFuncParaRelaEN.updDate)], 非法,应该为字符型(In CM函数参数关系(CMFuncParaRela))!(clsCMFuncParaRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFuncParaRelaEN.updUser) == false &&
    undefined !== pobjCMFuncParaRelaEN.updUser &&
    tzDataType.isString(pobjCMFuncParaRelaEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改者(updUser)]的值:[$(pobjCMFuncParaRelaEN.updUser)], 非法,应该为字符型(In CM函数参数关系(CMFuncParaRela))!(clsCMFuncParaRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFuncParaRelaEN.memo) == false &&
    undefined !== pobjCMFuncParaRelaEN.memo &&
    tzDataType.isString(pobjCMFuncParaRelaEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[说明(memo)]的值:[$(pobjCMFuncParaRelaEN.memo)], 非法,应该为字符型(In CM函数参数关系(CMFuncParaRela))!(clsCMFuncParaRelaBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function CMFuncParaRela_CheckProperty4Update(pobjCMFuncParaRelaEN: clsCMFuncParaRelaEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjCMFuncParaRelaEN.cmFuncParaId) == false &&
    GetStrLen(pobjCMFuncParaRelaEN.cmFuncParaId) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[函数参数Id(cmFuncParaId)]的长度不能超过8(In CM函数参数关系(CMFuncParaRela))!值:$(pobjCMFuncParaRelaEN.cmFuncParaId)(clsCMFuncParaRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFuncParaRelaEN.cmFunctionId) == false &&
    GetStrLen(pobjCMFuncParaRelaEN.cmFunctionId) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[函数Id(cmFunctionId)]的长度不能超过8(In CM函数参数关系(CMFuncParaRela))!值:$(pobjCMFuncParaRelaEN.cmFunctionId)(clsCMFuncParaRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFuncParaRelaEN.prjId) == false &&
    GetStrLen(pobjCMFuncParaRelaEN.prjId) > 4
  ) {
    throw new Error(
      '(errid:Watl000416)字段[工程ID(prjId)]的长度不能超过4(In CM函数参数关系(CMFuncParaRela))!值:$(pobjCMFuncParaRelaEN.prjId)(clsCMFuncParaRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFuncParaRelaEN.updDate) == false &&
    GetStrLen(pobjCMFuncParaRelaEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In CM函数参数关系(CMFuncParaRela))!值:$(pobjCMFuncParaRelaEN.updDate)(clsCMFuncParaRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFuncParaRelaEN.updUser) == false &&
    GetStrLen(pobjCMFuncParaRelaEN.updUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改者(updUser)]的长度不能超过20(In CM函数参数关系(CMFuncParaRela))!值:$(pobjCMFuncParaRelaEN.updUser)(clsCMFuncParaRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFuncParaRelaEN.memo) == false &&
    GetStrLen(pobjCMFuncParaRelaEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In CM函数参数关系(CMFuncParaRela))!值:$(pobjCMFuncParaRelaEN.memo)(clsCMFuncParaRelaBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjCMFuncParaRelaEN.mId &&
    undefined !== pobjCMFuncParaRelaEN.mId &&
    tzDataType.isNumber(pobjCMFuncParaRelaEN.mId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[mId(mId)]的值:[$(pobjCMFuncParaRelaEN.mId)], 非法,应该为数值型(In CM函数参数关系(CMFuncParaRela))!(clsCMFuncParaRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFuncParaRelaEN.cmFuncParaId) == false &&
    undefined !== pobjCMFuncParaRelaEN.cmFuncParaId &&
    tzDataType.isString(pobjCMFuncParaRelaEN.cmFuncParaId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[函数参数Id(cmFuncParaId)]的值:[$(pobjCMFuncParaRelaEN.cmFuncParaId)], 非法,应该为字符型(In CM函数参数关系(CMFuncParaRela))!(clsCMFuncParaRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFuncParaRelaEN.cmFunctionId) == false &&
    undefined !== pobjCMFuncParaRelaEN.cmFunctionId &&
    tzDataType.isString(pobjCMFuncParaRelaEN.cmFunctionId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[函数Id(cmFunctionId)]的值:[$(pobjCMFuncParaRelaEN.cmFunctionId)], 非法,应该为字符型(In CM函数参数关系(CMFuncParaRela))!(clsCMFuncParaRelaBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjCMFuncParaRelaEN.orderNum &&
    undefined !== pobjCMFuncParaRelaEN.orderNum &&
    tzDataType.isNumber(pobjCMFuncParaRelaEN.orderNum) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[序号(orderNum)]的值:[$(pobjCMFuncParaRelaEN.orderNum)], 非法,应该为数值型(In CM函数参数关系(CMFuncParaRela))!(clsCMFuncParaRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFuncParaRelaEN.prjId) == false &&
    undefined !== pobjCMFuncParaRelaEN.prjId &&
    tzDataType.isString(pobjCMFuncParaRelaEN.prjId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[工程ID(prjId)]的值:[$(pobjCMFuncParaRelaEN.prjId)], 非法,应该为字符型(In CM函数参数关系(CMFuncParaRela))!(clsCMFuncParaRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFuncParaRelaEN.updDate) == false &&
    undefined !== pobjCMFuncParaRelaEN.updDate &&
    tzDataType.isString(pobjCMFuncParaRelaEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjCMFuncParaRelaEN.updDate)], 非法,应该为字符型(In CM函数参数关系(CMFuncParaRela))!(clsCMFuncParaRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFuncParaRelaEN.updUser) == false &&
    undefined !== pobjCMFuncParaRelaEN.updUser &&
    tzDataType.isString(pobjCMFuncParaRelaEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改者(updUser)]的值:[$(pobjCMFuncParaRelaEN.updUser)], 非法,应该为字符型(In CM函数参数关系(CMFuncParaRela))!(clsCMFuncParaRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFuncParaRelaEN.memo) == false &&
    undefined !== pobjCMFuncParaRelaEN.memo &&
    tzDataType.isString(pobjCMFuncParaRelaEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[说明(memo)]的值:[$(pobjCMFuncParaRelaEN.memo)], 非法,应该为字符型(In CM函数参数关系(CMFuncParaRela))!(clsCMFuncParaRelaBL:CheckProperty4Update)',
    );
  }
  //检查主键是否为Null或者空!
  if (
    null === pobjCMFuncParaRelaEN.mId ||
    (pobjCMFuncParaRelaEN.mId != null && pobjCMFuncParaRelaEN.mId.toString() === '')
  ) {
    throw new Error(
      '(errid:Watl000064)字段[mId]不能为空(In CM函数参数关系)!(clsCMFuncParaRelaBL:CheckProperty4Update)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function CMFuncParaRela_GetJSONStrByObj(pobjCMFuncParaRelaEN: clsCMFuncParaRelaEN): string {
  pobjCMFuncParaRelaEN.sfUpdFldSetStr = pobjCMFuncParaRelaEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjCMFuncParaRelaEN);
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
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
 */
export function CMFuncParaRela_GetObjLstByJSONStr(strJSON: string): Array<clsCMFuncParaRelaEN> {
  let arrCMFuncParaRelaObjLst = new Array<clsCMFuncParaRelaEN>();
  if (strJSON === '') {
    return arrCMFuncParaRelaObjLst;
  }
  try {
    arrCMFuncParaRelaObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrCMFuncParaRelaObjLst;
  }
  return arrCMFuncParaRelaObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrCMFuncParaRelaObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function CMFuncParaRela_GetObjLstByJSONObjLst(
  arrCMFuncParaRelaObjLstS: Array<clsCMFuncParaRelaEN>,
): Array<clsCMFuncParaRelaEN> {
  const arrCMFuncParaRelaObjLst = new Array<clsCMFuncParaRelaEN>();
  for (const objInFor of arrCMFuncParaRelaObjLstS) {
    const obj1 = CMFuncParaRela_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrCMFuncParaRelaObjLst.push(obj1);
  }
  return arrCMFuncParaRelaObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function CMFuncParaRela_GetObjByJSONStr(strJSON: string): clsCMFuncParaRelaEN {
  let pobjCMFuncParaRelaEN = new clsCMFuncParaRelaEN();
  if (strJSON === '') {
    return pobjCMFuncParaRelaEN;
  }
  try {
    pobjCMFuncParaRelaEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjCMFuncParaRelaEN;
  }
  return pobjCMFuncParaRelaEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function CMFuncParaRela_GetCombineCondition(
  objCMFuncParaRelaCond: clsCMFuncParaRelaEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objCMFuncParaRelaCond.dicFldComparisonOp,
      clsCMFuncParaRelaEN.con_mId,
    ) == true
  ) {
    const strComparisonOpmId: string =
      objCMFuncParaRelaCond.dicFldComparisonOp[clsCMFuncParaRelaEN.con_mId];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsCMFuncParaRelaEN.con_mId,
      objCMFuncParaRelaCond.mId,
      strComparisonOpmId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMFuncParaRelaCond.dicFldComparisonOp,
      clsCMFuncParaRelaEN.con_CmFuncParaId,
    ) == true
  ) {
    const strComparisonOpCmFuncParaId: string =
      objCMFuncParaRelaCond.dicFldComparisonOp[clsCMFuncParaRelaEN.con_CmFuncParaId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMFuncParaRelaEN.con_CmFuncParaId,
      objCMFuncParaRelaCond.cmFuncParaId,
      strComparisonOpCmFuncParaId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMFuncParaRelaCond.dicFldComparisonOp,
      clsCMFuncParaRelaEN.con_CmFunctionId,
    ) == true
  ) {
    const strComparisonOpCmFunctionId: string =
      objCMFuncParaRelaCond.dicFldComparisonOp[clsCMFuncParaRelaEN.con_CmFunctionId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMFuncParaRelaEN.con_CmFunctionId,
      objCMFuncParaRelaCond.cmFunctionId,
      strComparisonOpCmFunctionId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMFuncParaRelaCond.dicFldComparisonOp,
      clsCMFuncParaRelaEN.con_OrderNum,
    ) == true
  ) {
    const strComparisonOpOrderNum: string =
      objCMFuncParaRelaCond.dicFldComparisonOp[clsCMFuncParaRelaEN.con_OrderNum];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsCMFuncParaRelaEN.con_OrderNum,
      objCMFuncParaRelaCond.orderNum,
      strComparisonOpOrderNum,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMFuncParaRelaCond.dicFldComparisonOp,
      clsCMFuncParaRelaEN.con_PrjId,
    ) == true
  ) {
    const strComparisonOpPrjId: string =
      objCMFuncParaRelaCond.dicFldComparisonOp[clsCMFuncParaRelaEN.con_PrjId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMFuncParaRelaEN.con_PrjId,
      objCMFuncParaRelaCond.prjId,
      strComparisonOpPrjId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMFuncParaRelaCond.dicFldComparisonOp,
      clsCMFuncParaRelaEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objCMFuncParaRelaCond.dicFldComparisonOp[clsCMFuncParaRelaEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMFuncParaRelaEN.con_UpdDate,
      objCMFuncParaRelaCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMFuncParaRelaCond.dicFldComparisonOp,
      clsCMFuncParaRelaEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objCMFuncParaRelaCond.dicFldComparisonOp[clsCMFuncParaRelaEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMFuncParaRelaEN.con_UpdUser,
      objCMFuncParaRelaCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMFuncParaRelaCond.dicFldComparisonOp,
      clsCMFuncParaRelaEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objCMFuncParaRelaCond.dicFldComparisonOp[clsCMFuncParaRelaEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMFuncParaRelaEN.con_Memo,
      objCMFuncParaRelaCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--CMFuncParaRela(CM函数参数关系),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strCmFuncParaId: 函数参数Id(要求唯一的字段)
 * @param strCmFunctionId: 函数Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function CMFuncParaRela_GetUniCondStr(objCMFuncParaRelaEN: clsCMFuncParaRelaEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and CmFuncParaId = '{0}'", objCMFuncParaRelaEN.cmFuncParaId);
  strWhereCond += Format(" and CmFunctionId = '{0}'", objCMFuncParaRelaEN.cmFunctionId);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--CMFuncParaRela(CM函数参数关系),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strCmFuncParaId: 函数参数Id(要求唯一的字段)
 * @param strCmFunctionId: 函数Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function CMFuncParaRela_GetUniCondStr4Update(
  objCMFuncParaRelaEN: clsCMFuncParaRelaEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and mId <> '{0}'", objCMFuncParaRelaEN.mId);
  strWhereCond += Format(" and CmFuncParaId = '{0}'", objCMFuncParaRelaEN.cmFuncParaId);
  strWhereCond += Format(" and CmFunctionId = '{0}'", objCMFuncParaRelaEN.cmFunctionId);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objCMFuncParaRelaENS:源对象
 * @param objCMFuncParaRelaENT:目标对象
 */
export function CMFuncParaRela_GetObjFromJsonObj(
  objCMFuncParaRelaENS: clsCMFuncParaRelaEN,
): clsCMFuncParaRelaEN {
  const objCMFuncParaRelaENT: clsCMFuncParaRelaEN = new clsCMFuncParaRelaEN();
  ObjectAssign(objCMFuncParaRelaENT, objCMFuncParaRelaENS);
  return objCMFuncParaRelaENT;
}
