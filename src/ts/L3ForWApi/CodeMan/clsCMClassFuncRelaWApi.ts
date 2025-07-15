/**
 * 类名:clsCMClassFuncRelaWApi
 * 表名:CMClassFuncRela(00050505)
 * 版本:2023.10.12.1(服务器:WIN-SRV103-116)
 * 日期:2023/10/12 14:38:15
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
 * CM类函数关系(CMClassFuncRela)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2023年10月12日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { clsOrderByData } from '@/ts/PubFun/clsOrderByData';
import { GetStrLen, tzDataType, Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { clsCMClassFuncRelaEN } from '@/ts/L0Entity/CodeMan/clsCMClassFuncRelaEN';
import { GetExceptionStr, myShowErrorMsg, ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const cMClassFuncRela_Controller = 'CMClassFuncRelaApi';
export const cMClassFuncRela_ConstructorName = 'cMClassFuncRela';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngmId:关键字
 * @returns 对象
 **/
export async function CMClassFuncRela_GetObjBymIdAsync(
  lngmId: number,
): Promise<clsCMClassFuncRelaEN | null> {
  const strThisFuncName = 'GetObjBymIdAsync';

  if (lngmId == 0) {
    const strMsg = Format('参数:[lngmId]不能为空!(In clsCMClassFuncRelaWApi.GetObjBymIdAsync)');
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjBymId';
  const strUrl = GetWebApiUrl(cMClassFuncRela_Controller, strAction);

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
      const objCMClassFuncRela = CMClassFuncRela_GetObjFromJsonObj(returnObj);
      return objCMClassFuncRela;
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
        cMClassFuncRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMClassFuncRela_ConstructorName,
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
export function CMClassFuncRela_SortFunDefa(
  a: clsCMClassFuncRelaEN,
  b: clsCMClassFuncRelaEN,
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
export function CMClassFuncRela_SortFunDefa2Fld(
  a: clsCMClassFuncRelaEN,
  b: clsCMClassFuncRelaEN,
): number {
  if (a.cmClassId == b.cmClassId) return a.cmFunctionId.localeCompare(b.cmFunctionId);
  else return a.cmClassId.localeCompare(b.cmClassId);
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
export function CMClassFuncRela_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsCMClassFuncRelaEN.con_mId:
        return (a: clsCMClassFuncRelaEN, b: clsCMClassFuncRelaEN) => {
          return a.mId - b.mId;
        };
      case clsCMClassFuncRelaEN.con_CmClassId:
        return (a: clsCMClassFuncRelaEN, b: clsCMClassFuncRelaEN) => {
          return a.cmClassId.localeCompare(b.cmClassId);
        };
      case clsCMClassFuncRelaEN.con_CmFunctionId:
        return (a: clsCMClassFuncRelaEN, b: clsCMClassFuncRelaEN) => {
          return a.cmFunctionId.localeCompare(b.cmFunctionId);
        };
      case clsCMClassFuncRelaEN.con_OrderNum:
        return (a: clsCMClassFuncRelaEN, b: clsCMClassFuncRelaEN) => {
          return a.orderNum - b.orderNum;
        };
      case clsCMClassFuncRelaEN.con_UpdDate:
        return (a: clsCMClassFuncRelaEN, b: clsCMClassFuncRelaEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsCMClassFuncRelaEN.con_UpdUser:
        return (a: clsCMClassFuncRelaEN, b: clsCMClassFuncRelaEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsCMClassFuncRelaEN.con_Memo:
        return (a: clsCMClassFuncRelaEN, b: clsCMClassFuncRelaEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[CMClassFuncRela]中不存在!(in ${cMClassFuncRela_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsCMClassFuncRelaEN.con_mId:
        return (a: clsCMClassFuncRelaEN, b: clsCMClassFuncRelaEN) => {
          return b.mId - a.mId;
        };
      case clsCMClassFuncRelaEN.con_CmClassId:
        return (a: clsCMClassFuncRelaEN, b: clsCMClassFuncRelaEN) => {
          return b.cmClassId.localeCompare(a.cmClassId);
        };
      case clsCMClassFuncRelaEN.con_CmFunctionId:
        return (a: clsCMClassFuncRelaEN, b: clsCMClassFuncRelaEN) => {
          return b.cmFunctionId.localeCompare(a.cmFunctionId);
        };
      case clsCMClassFuncRelaEN.con_OrderNum:
        return (a: clsCMClassFuncRelaEN, b: clsCMClassFuncRelaEN) => {
          return b.orderNum - a.orderNum;
        };
      case clsCMClassFuncRelaEN.con_UpdDate:
        return (a: clsCMClassFuncRelaEN, b: clsCMClassFuncRelaEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsCMClassFuncRelaEN.con_UpdUser:
        return (a: clsCMClassFuncRelaEN, b: clsCMClassFuncRelaEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsCMClassFuncRelaEN.con_Memo:
        return (a: clsCMClassFuncRelaEN, b: clsCMClassFuncRelaEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[CMClassFuncRela]中不存在!(in ${cMClassFuncRela_ConstructorName}.${strThisFuncName})`;
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
export async function CMClassFuncRela_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsCMClassFuncRelaEN.con_mId:
      return (obj: clsCMClassFuncRelaEN) => {
        return obj.mId === value;
      };
    case clsCMClassFuncRelaEN.con_CmClassId:
      return (obj: clsCMClassFuncRelaEN) => {
        return obj.cmClassId === value;
      };
    case clsCMClassFuncRelaEN.con_CmFunctionId:
      return (obj: clsCMClassFuncRelaEN) => {
        return obj.cmFunctionId === value;
      };
    case clsCMClassFuncRelaEN.con_OrderNum:
      return (obj: clsCMClassFuncRelaEN) => {
        return obj.orderNum === value;
      };
    case clsCMClassFuncRelaEN.con_UpdDate:
      return (obj: clsCMClassFuncRelaEN) => {
        return obj.updDate === value;
      };
    case clsCMClassFuncRelaEN.con_UpdUser:
      return (obj: clsCMClassFuncRelaEN) => {
        return obj.updUser === value;
      };
    case clsCMClassFuncRelaEN.con_Memo:
      return (obj: clsCMClassFuncRelaEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[CMClassFuncRela]中不存在!(in ${cMClassFuncRela_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}
//该表没有使用Cache,不需要生成[CMClassFuncRela__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function CMClassFuncRela_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(cMClassFuncRela_Controller, strAction);

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
        cMClassFuncRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMClassFuncRela_ConstructorName,
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
export async function CMClassFuncRela_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(cMClassFuncRela_Controller, strAction);

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
        cMClassFuncRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMClassFuncRela_ConstructorName,
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
export async function CMClassFuncRela_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsCMClassFuncRelaEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(cMClassFuncRela_Controller, strAction);

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
      const objCMClassFuncRela = CMClassFuncRela_GetObjFromJsonObj(returnObj);
      return objCMClassFuncRela;
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
        cMClassFuncRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMClassFuncRela_ConstructorName,
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
export async function CMClassFuncRela_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsCMClassFuncRelaEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(cMClassFuncRela_Controller, strAction);

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
          cMClassFuncRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = CMClassFuncRela_GetObjLstByJSONObjLst(returnObjLst);
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
        cMClassFuncRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMClassFuncRela_ConstructorName,
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
export async function CMClassFuncRela_GetObjLstBymIdLstAsync(
  arrmId: Array<string>,
): Promise<Array<clsCMClassFuncRelaEN>> {
  const strThisFuncName = 'GetObjLstBymIdLstAsync';
  const strAction = 'GetObjLstBymIdLst';
  const strUrl = GetWebApiUrl(cMClassFuncRela_Controller, strAction);

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
          cMClassFuncRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = CMClassFuncRela_GetObjLstByJSONObjLst(returnObjLst);
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
        cMClassFuncRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMClassFuncRela_ConstructorName,
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
export async function CMClassFuncRela_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsCMClassFuncRelaEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(cMClassFuncRela_Controller, strAction);

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
          cMClassFuncRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = CMClassFuncRela_GetObjLstByJSONObjLst(returnObjLst);
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
        cMClassFuncRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMClassFuncRela_ConstructorName,
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
export async function CMClassFuncRela_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsCMClassFuncRelaEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(cMClassFuncRela_Controller, strAction);

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
          cMClassFuncRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = CMClassFuncRela_GetObjLstByJSONObjLst(returnObjLst);
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
        cMClassFuncRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMClassFuncRela_ConstructorName,
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
export async function CMClassFuncRela_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsCMClassFuncRelaEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsCMClassFuncRelaEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(cMClassFuncRela_Controller, strAction);

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
          cMClassFuncRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = CMClassFuncRela_GetObjLstByJSONObjLst(returnObjLst);
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
        cMClassFuncRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMClassFuncRela_ConstructorName,
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
export async function CMClassFuncRela_DelRecordAsync(lngmId: number): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(cMClassFuncRela_Controller, strAction);
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
        cMClassFuncRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMClassFuncRela_ConstructorName,
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
export async function CMClassFuncRela_DelCMClassFuncRelasAsync(
  arrmId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelCMClassFuncRelasAsync';
  const strAction = 'DelCMClassFuncRelas';
  const strUrl = GetWebApiUrl(cMClassFuncRela_Controller, strAction);

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
        cMClassFuncRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMClassFuncRela_ConstructorName,
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
export async function CMClassFuncRela_DelCMClassFuncRelasByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelCMClassFuncRelasByCondAsync';
  const strAction = 'DelCMClassFuncRelasByCond';
  const strUrl = GetWebApiUrl(cMClassFuncRela_Controller, strAction);

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
        cMClassFuncRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMClassFuncRela_ConstructorName,
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
 * @param objCMClassFuncRelaEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function CMClassFuncRela_AddNewRecordAsync(
  objCMClassFuncRelaEN: clsCMClassFuncRelaEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objCMClassFuncRelaEN);
  const strUrl = GetWebApiUrl(cMClassFuncRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objCMClassFuncRelaEN, config);
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
        cMClassFuncRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMClassFuncRela_ConstructorName,
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
 * @param objCMClassFuncRelaEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function CMClassFuncRela_GoTopAsync(objOrderByData: clsOrderByData): Promise<boolean> {
  const strThisFuncName = 'GoTopAsync';
  let strMsg = '';
  const strAction = 'GoTop';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表置顶时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(cMClassFuncRela_Controller, strAction);

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
        cMClassFuncRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMClassFuncRela_ConstructorName,
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
 * @param objCMClassFuncRelaEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function CMClassFuncRela_UpMoveAsync(
  objOrderByData: clsOrderByData,
): Promise<boolean> {
  const strThisFuncName = 'UpMoveAsync';
  let strMsg = '';
  const strAction = 'UpMove';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表上移时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objCMClassFuncRelaEN);
  const strUrl = GetWebApiUrl(cMClassFuncRela_Controller, strAction);

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
        cMClassFuncRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMClassFuncRela_ConstructorName,
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
 * @param objCMClassFuncRelaEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function CMClassFuncRela_DownMoveAsync(
  objOrderByData: clsOrderByData,
): Promise<boolean> {
  const strThisFuncName = 'DownMoveAsync';
  let strMsg = '';
  const strAction = 'DownMove';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表下移时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objCMClassFuncRelaEN);
  const strUrl = GetWebApiUrl(cMClassFuncRela_Controller, strAction);

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
        cMClassFuncRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMClassFuncRela_ConstructorName,
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
 * @param objCMClassFuncRelaEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function CMClassFuncRela_GoBottomAsync(
  objOrderByData: clsOrderByData,
): Promise<boolean> {
  const strThisFuncName = 'GoBottomAsync';
  let strMsg = '';
  const strAction = 'GoBottom';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表置底时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objCMClassFuncRelaEN);
  const strUrl = GetWebApiUrl(cMClassFuncRela_Controller, strAction);

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
        cMClassFuncRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMClassFuncRela_ConstructorName,
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
 * @param objCMClassFuncRelaEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function CMClassFuncRela_ReOrderAsync(
  objOrderByData: clsOrderByData,
): Promise<boolean> {
  const strThisFuncName = 'ReOrderAsync';
  const strAction = 'ReOrder';
  //var strJSON = JSON.stringify(objCMClassFuncRelaEN);
  const strUrl = GetWebApiUrl(cMClassFuncRela_Controller, strAction);

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
        cMClassFuncRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMClassFuncRela_ConstructorName,
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
 * @param objCMClassFuncRelaEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function CMClassFuncRela_AddNewRecordWithReturnKeyAsync(
  objCMClassFuncRelaEN: clsCMClassFuncRelaEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(cMClassFuncRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objCMClassFuncRelaEN, config);
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
        cMClassFuncRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMClassFuncRela_ConstructorName,
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
 * @param objCMClassFuncRelaEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function CMClassFuncRela_UpdateRecordAsync(
  objCMClassFuncRelaEN: clsCMClassFuncRelaEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objCMClassFuncRelaEN.sfUpdFldSetStr === undefined ||
    objCMClassFuncRelaEN.sfUpdFldSetStr === null ||
    objCMClassFuncRelaEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objCMClassFuncRelaEN.mId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(cMClassFuncRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objCMClassFuncRelaEN, config);
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
        cMClassFuncRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMClassFuncRela_ConstructorName,
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
 * @param objCMClassFuncRelaEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function CMClassFuncRela_UpdateWithConditionAsync(
  objCMClassFuncRelaEN: clsCMClassFuncRelaEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objCMClassFuncRelaEN.sfUpdFldSetStr === undefined ||
    objCMClassFuncRelaEN.sfUpdFldSetStr === null ||
    objCMClassFuncRelaEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objCMClassFuncRelaEN.mId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(cMClassFuncRela_Controller, strAction);
  objCMClassFuncRelaEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objCMClassFuncRelaEN, config);
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
        cMClassFuncRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMClassFuncRela_ConstructorName,
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
export async function CMClassFuncRela_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(cMClassFuncRela_Controller, strAction);

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
        cMClassFuncRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMClassFuncRela_ConstructorName,
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
export async function CMClassFuncRela_IsExistAsync(lngmId: number): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(cMClassFuncRela_Controller, strAction);

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
        cMClassFuncRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMClassFuncRela_ConstructorName,
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
export async function CMClassFuncRela_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(cMClassFuncRela_Controller, strAction);

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
        cMClassFuncRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMClassFuncRela_ConstructorName,
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
export async function CMClassFuncRela_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(cMClassFuncRela_Controller, strAction);

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
        cMClassFuncRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMClassFuncRela_ConstructorName,
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
export function CMClassFuncRela_GetWebApiUrl(strController: string, strAction: string): string {
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
export function CMClassFuncRela_CheckPropertyNew(pobjCMClassFuncRelaEN: clsCMClassFuncRelaEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (
    IsNullOrEmpty(pobjCMClassFuncRelaEN.cmClassId) === true ||
    pobjCMClassFuncRelaEN.cmClassId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000411)字段[类Id]不能为空(In CM类函数关系)!(clsCMClassFuncRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMClassFuncRelaEN.cmFunctionId) === true ||
    pobjCMClassFuncRelaEN.cmFunctionId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000411)字段[函数Id]不能为空(In CM类函数关系)!(clsCMClassFuncRelaBL:CheckPropertyNew0)',
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjCMClassFuncRelaEN.cmClassId) == false &&
    GetStrLen(pobjCMClassFuncRelaEN.cmClassId) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[类Id(cmClassId)]的长度不能超过8(In CM类函数关系(CMClassFuncRela))!值:$(pobjCMClassFuncRelaEN.cmClassId)(clsCMClassFuncRelaBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMClassFuncRelaEN.cmFunctionId) == false &&
    GetStrLen(pobjCMClassFuncRelaEN.cmFunctionId) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[函数Id(cmFunctionId)]的长度不能超过8(In CM类函数关系(CMClassFuncRela))!值:$(pobjCMClassFuncRelaEN.cmFunctionId)(clsCMClassFuncRelaBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMClassFuncRelaEN.updDate) == false &&
    GetStrLen(pobjCMClassFuncRelaEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In CM类函数关系(CMClassFuncRela))!值:$(pobjCMClassFuncRelaEN.updDate)(clsCMClassFuncRelaBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMClassFuncRelaEN.updUser) == false &&
    GetStrLen(pobjCMClassFuncRelaEN.updUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改者(updUser)]的长度不能超过20(In CM类函数关系(CMClassFuncRela))!值:$(pobjCMClassFuncRelaEN.updUser)(clsCMClassFuncRelaBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMClassFuncRelaEN.memo) == false &&
    GetStrLen(pobjCMClassFuncRelaEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In CM类函数关系(CMClassFuncRela))!值:$(pobjCMClassFuncRelaEN.memo)(clsCMClassFuncRelaBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjCMClassFuncRelaEN.mId &&
    undefined !== pobjCMClassFuncRelaEN.mId &&
    tzDataType.isNumber(pobjCMClassFuncRelaEN.mId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[mId(mId)]的值:[$(pobjCMClassFuncRelaEN.mId)], 非法,应该为数值型(In CM类函数关系(CMClassFuncRela))!(clsCMClassFuncRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMClassFuncRelaEN.cmClassId) == false &&
    undefined !== pobjCMClassFuncRelaEN.cmClassId &&
    tzDataType.isString(pobjCMClassFuncRelaEN.cmClassId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[类Id(cmClassId)]的值:[$(pobjCMClassFuncRelaEN.cmClassId)], 非法,应该为字符型(In CM类函数关系(CMClassFuncRela))!(clsCMClassFuncRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMClassFuncRelaEN.cmFunctionId) == false &&
    undefined !== pobjCMClassFuncRelaEN.cmFunctionId &&
    tzDataType.isString(pobjCMClassFuncRelaEN.cmFunctionId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[函数Id(cmFunctionId)]的值:[$(pobjCMClassFuncRelaEN.cmFunctionId)], 非法,应该为字符型(In CM类函数关系(CMClassFuncRela))!(clsCMClassFuncRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjCMClassFuncRelaEN.orderNum &&
    undefined !== pobjCMClassFuncRelaEN.orderNum &&
    tzDataType.isNumber(pobjCMClassFuncRelaEN.orderNum) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[序号(orderNum)]的值:[$(pobjCMClassFuncRelaEN.orderNum)], 非法,应该为数值型(In CM类函数关系(CMClassFuncRela))!(clsCMClassFuncRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMClassFuncRelaEN.updDate) == false &&
    undefined !== pobjCMClassFuncRelaEN.updDate &&
    tzDataType.isString(pobjCMClassFuncRelaEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjCMClassFuncRelaEN.updDate)], 非法,应该为字符型(In CM类函数关系(CMClassFuncRela))!(clsCMClassFuncRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMClassFuncRelaEN.updUser) == false &&
    undefined !== pobjCMClassFuncRelaEN.updUser &&
    tzDataType.isString(pobjCMClassFuncRelaEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改者(updUser)]的值:[$(pobjCMClassFuncRelaEN.updUser)], 非法,应该为字符型(In CM类函数关系(CMClassFuncRela))!(clsCMClassFuncRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMClassFuncRelaEN.memo) == false &&
    undefined !== pobjCMClassFuncRelaEN.memo &&
    tzDataType.isString(pobjCMClassFuncRelaEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[说明(memo)]的值:[$(pobjCMClassFuncRelaEN.memo)], 非法,应该为字符型(In CM类函数关系(CMClassFuncRela))!(clsCMClassFuncRelaBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function CMClassFuncRela_CheckProperty4Update(pobjCMClassFuncRelaEN: clsCMClassFuncRelaEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjCMClassFuncRelaEN.cmClassId) == false &&
    GetStrLen(pobjCMClassFuncRelaEN.cmClassId) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[类Id(cmClassId)]的长度不能超过8(In CM类函数关系(CMClassFuncRela))!值:$(pobjCMClassFuncRelaEN.cmClassId)(clsCMClassFuncRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMClassFuncRelaEN.cmFunctionId) == false &&
    GetStrLen(pobjCMClassFuncRelaEN.cmFunctionId) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[函数Id(cmFunctionId)]的长度不能超过8(In CM类函数关系(CMClassFuncRela))!值:$(pobjCMClassFuncRelaEN.cmFunctionId)(clsCMClassFuncRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMClassFuncRelaEN.updDate) == false &&
    GetStrLen(pobjCMClassFuncRelaEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In CM类函数关系(CMClassFuncRela))!值:$(pobjCMClassFuncRelaEN.updDate)(clsCMClassFuncRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMClassFuncRelaEN.updUser) == false &&
    GetStrLen(pobjCMClassFuncRelaEN.updUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改者(updUser)]的长度不能超过20(In CM类函数关系(CMClassFuncRela))!值:$(pobjCMClassFuncRelaEN.updUser)(clsCMClassFuncRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMClassFuncRelaEN.memo) == false &&
    GetStrLen(pobjCMClassFuncRelaEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In CM类函数关系(CMClassFuncRela))!值:$(pobjCMClassFuncRelaEN.memo)(clsCMClassFuncRelaBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjCMClassFuncRelaEN.mId &&
    undefined !== pobjCMClassFuncRelaEN.mId &&
    tzDataType.isNumber(pobjCMClassFuncRelaEN.mId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[mId(mId)]的值:[$(pobjCMClassFuncRelaEN.mId)], 非法,应该为数值型(In CM类函数关系(CMClassFuncRela))!(clsCMClassFuncRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMClassFuncRelaEN.cmClassId) == false &&
    undefined !== pobjCMClassFuncRelaEN.cmClassId &&
    tzDataType.isString(pobjCMClassFuncRelaEN.cmClassId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[类Id(cmClassId)]的值:[$(pobjCMClassFuncRelaEN.cmClassId)], 非法,应该为字符型(In CM类函数关系(CMClassFuncRela))!(clsCMClassFuncRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMClassFuncRelaEN.cmFunctionId) == false &&
    undefined !== pobjCMClassFuncRelaEN.cmFunctionId &&
    tzDataType.isString(pobjCMClassFuncRelaEN.cmFunctionId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[函数Id(cmFunctionId)]的值:[$(pobjCMClassFuncRelaEN.cmFunctionId)], 非法,应该为字符型(In CM类函数关系(CMClassFuncRela))!(clsCMClassFuncRelaBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjCMClassFuncRelaEN.orderNum &&
    undefined !== pobjCMClassFuncRelaEN.orderNum &&
    tzDataType.isNumber(pobjCMClassFuncRelaEN.orderNum) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[序号(orderNum)]的值:[$(pobjCMClassFuncRelaEN.orderNum)], 非法,应该为数值型(In CM类函数关系(CMClassFuncRela))!(clsCMClassFuncRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMClassFuncRelaEN.updDate) == false &&
    undefined !== pobjCMClassFuncRelaEN.updDate &&
    tzDataType.isString(pobjCMClassFuncRelaEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjCMClassFuncRelaEN.updDate)], 非法,应该为字符型(In CM类函数关系(CMClassFuncRela))!(clsCMClassFuncRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMClassFuncRelaEN.updUser) == false &&
    undefined !== pobjCMClassFuncRelaEN.updUser &&
    tzDataType.isString(pobjCMClassFuncRelaEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改者(updUser)]的值:[$(pobjCMClassFuncRelaEN.updUser)], 非法,应该为字符型(In CM类函数关系(CMClassFuncRela))!(clsCMClassFuncRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMClassFuncRelaEN.memo) == false &&
    undefined !== pobjCMClassFuncRelaEN.memo &&
    tzDataType.isString(pobjCMClassFuncRelaEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[说明(memo)]的值:[$(pobjCMClassFuncRelaEN.memo)], 非法,应该为字符型(In CM类函数关系(CMClassFuncRela))!(clsCMClassFuncRelaBL:CheckProperty4Update)',
    );
  }
  //检查主键是否为Null或者空!
  if (
    null === pobjCMClassFuncRelaEN.mId ||
    (pobjCMClassFuncRelaEN.mId != null && pobjCMClassFuncRelaEN.mId.toString() === '')
  ) {
    throw new Error(
      '(errid:Watl000064)字段[mId]不能为空(In CM类函数关系)!(clsCMClassFuncRelaBL:CheckProperty4Update)',
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
export function CMClassFuncRela_GetJSONStrByObj(
  pobjCMClassFuncRelaEN: clsCMClassFuncRelaEN,
): string {
  pobjCMClassFuncRelaEN.sfUpdFldSetStr = pobjCMClassFuncRelaEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjCMClassFuncRelaEN);
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
export function CMClassFuncRela_GetObjLstByJSONStr(strJSON: string): Array<clsCMClassFuncRelaEN> {
  let arrCMClassFuncRelaObjLst = new Array<clsCMClassFuncRelaEN>();
  if (strJSON === '') {
    return arrCMClassFuncRelaObjLst;
  }
  try {
    arrCMClassFuncRelaObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrCMClassFuncRelaObjLst;
  }
  return arrCMClassFuncRelaObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrCMClassFuncRelaObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function CMClassFuncRela_GetObjLstByJSONObjLst(
  arrCMClassFuncRelaObjLstS: Array<clsCMClassFuncRelaEN>,
): Array<clsCMClassFuncRelaEN> {
  const arrCMClassFuncRelaObjLst = new Array<clsCMClassFuncRelaEN>();
  for (const objInFor of arrCMClassFuncRelaObjLstS) {
    const obj1 = CMClassFuncRela_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrCMClassFuncRelaObjLst.push(obj1);
  }
  return arrCMClassFuncRelaObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function CMClassFuncRela_GetObjByJSONStr(strJSON: string): clsCMClassFuncRelaEN {
  let pobjCMClassFuncRelaEN = new clsCMClassFuncRelaEN();
  if (strJSON === '') {
    return pobjCMClassFuncRelaEN;
  }
  try {
    pobjCMClassFuncRelaEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjCMClassFuncRelaEN;
  }
  return pobjCMClassFuncRelaEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function CMClassFuncRela_GetCombineCondition(
  objCMClassFuncRelaCond: clsCMClassFuncRelaEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objCMClassFuncRelaCond.dicFldComparisonOp,
      clsCMClassFuncRelaEN.con_mId,
    ) == true
  ) {
    const strComparisonOpmId: string =
      objCMClassFuncRelaCond.dicFldComparisonOp[clsCMClassFuncRelaEN.con_mId];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsCMClassFuncRelaEN.con_mId,
      objCMClassFuncRelaCond.mId,
      strComparisonOpmId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMClassFuncRelaCond.dicFldComparisonOp,
      clsCMClassFuncRelaEN.con_CmClassId,
    ) == true
  ) {
    const strComparisonOpCmClassId: string =
      objCMClassFuncRelaCond.dicFldComparisonOp[clsCMClassFuncRelaEN.con_CmClassId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMClassFuncRelaEN.con_CmClassId,
      objCMClassFuncRelaCond.cmClassId,
      strComparisonOpCmClassId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMClassFuncRelaCond.dicFldComparisonOp,
      clsCMClassFuncRelaEN.con_CmFunctionId,
    ) == true
  ) {
    const strComparisonOpCmFunctionId: string =
      objCMClassFuncRelaCond.dicFldComparisonOp[clsCMClassFuncRelaEN.con_CmFunctionId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMClassFuncRelaEN.con_CmFunctionId,
      objCMClassFuncRelaCond.cmFunctionId,
      strComparisonOpCmFunctionId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMClassFuncRelaCond.dicFldComparisonOp,
      clsCMClassFuncRelaEN.con_OrderNum,
    ) == true
  ) {
    const strComparisonOpOrderNum: string =
      objCMClassFuncRelaCond.dicFldComparisonOp[clsCMClassFuncRelaEN.con_OrderNum];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsCMClassFuncRelaEN.con_OrderNum,
      objCMClassFuncRelaCond.orderNum,
      strComparisonOpOrderNum,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMClassFuncRelaCond.dicFldComparisonOp,
      clsCMClassFuncRelaEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objCMClassFuncRelaCond.dicFldComparisonOp[clsCMClassFuncRelaEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMClassFuncRelaEN.con_UpdDate,
      objCMClassFuncRelaCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMClassFuncRelaCond.dicFldComparisonOp,
      clsCMClassFuncRelaEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objCMClassFuncRelaCond.dicFldComparisonOp[clsCMClassFuncRelaEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMClassFuncRelaEN.con_UpdUser,
      objCMClassFuncRelaCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMClassFuncRelaCond.dicFldComparisonOp,
      clsCMClassFuncRelaEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objCMClassFuncRelaCond.dicFldComparisonOp[clsCMClassFuncRelaEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMClassFuncRelaEN.con_Memo,
      objCMClassFuncRelaCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--CMClassFuncRela(CM类函数关系),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strCmFunctionId: 函数Id(要求唯一的字段)
 * @param strCmClassId: 类Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function CMClassFuncRela_GetUniCondStr(objCMClassFuncRelaEN: clsCMClassFuncRelaEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and CmFunctionId = '{0}'", objCMClassFuncRelaEN.cmFunctionId);
  strWhereCond += Format(" and CmClassId = '{0}'", objCMClassFuncRelaEN.cmClassId);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--CMClassFuncRela(CM类函数关系),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strCmFunctionId: 函数Id(要求唯一的字段)
 * @param strCmClassId: 类Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function CMClassFuncRela_GetUniCondStr4Update(
  objCMClassFuncRelaEN: clsCMClassFuncRelaEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and mId <> '{0}'", objCMClassFuncRelaEN.mId);
  strWhereCond += Format(" and CmFunctionId = '{0}'", objCMClassFuncRelaEN.cmFunctionId);
  strWhereCond += Format(" and CmClassId = '{0}'", objCMClassFuncRelaEN.cmClassId);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objCMClassFuncRelaENS:源对象
 * @param objCMClassFuncRelaENT:目标对象
 */
export function CMClassFuncRela_GetObjFromJsonObj(
  objCMClassFuncRelaENS: clsCMClassFuncRelaEN,
): clsCMClassFuncRelaEN {
  const objCMClassFuncRelaENT: clsCMClassFuncRelaEN = new clsCMClassFuncRelaEN();
  ObjectAssign(objCMClassFuncRelaENT, objCMClassFuncRelaENS);
  return objCMClassFuncRelaENT;
}
