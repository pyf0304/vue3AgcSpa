/**
 * 类名:clsPrjTab4GCWApi
 * 表名:PrjTab4GC(00050345)
 * 版本:2024.05.19.1(服务器:WIN-SRV103-116)
 * 日期:2024/05/21 11:00:59
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:字段、表维护(Table_Field)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 工程表4GC(PrjTab4GC)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2024年05月21日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { GetStrLen, tzDataType, Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { clsPrjTab4GCEN } from '@/ts/L0Entity/Table_Field/clsPrjTab4GCEN';
import { GetExceptionStr, myShowErrorMsg, ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const prjTab4GC_Controller = 'PrjTab4GCApi';
export const prjTab4GC_ConstructorName = 'prjTab4GC';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngmId:关键字
 * @returns 对象
 **/
export async function PrjTab4GC_GetObjBymIdAsync(lngmId: number): Promise<clsPrjTab4GCEN | null> {
  const strThisFuncName = 'GetObjBymIdAsync';

  if (lngmId == 0) {
    const strMsg = Format('参数:[lngmId]不能为空!(In clsPrjTab4GCWApi.GetObjBymIdAsync)');
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjBymId';
  const strUrl = GetWebApiUrl(prjTab4GC_Controller, strAction);

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
      const objPrjTab4GC = PrjTab4GC_GetObjFromJsonObj(returnObj);
      return objPrjTab4GC;
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
        prjTab4GC_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTab4GC_ConstructorName,
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
 * 日期:2024-05-21
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function PrjTab4GC_SortFunDefa(a: clsPrjTab4GCEN, b: clsPrjTab4GCEN): number {
  return a.mId - b.mId;
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2024-05-21
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function PrjTab4GC_SortFunDefa2Fld(a: clsPrjTab4GCEN, b: clsPrjTab4GCEN): number {
  if (a.tabId4GC == b.tabId4GC) return a.geneCodeDate.localeCompare(b.geneCodeDate);
  else return a.tabId4GC.localeCompare(b.tabId4GC);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-05-21
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function PrjTab4GC_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsPrjTab4GCEN.con_mId:
        return (a: clsPrjTab4GCEN, b: clsPrjTab4GCEN) => {
          return a.mId - b.mId;
        };
      case clsPrjTab4GCEN.con_TabId4GC:
        return (a: clsPrjTab4GCEN, b: clsPrjTab4GCEN) => {
          return a.tabId4GC.localeCompare(b.tabId4GC);
        };
      case clsPrjTab4GCEN.con_GeneCodeDate:
        return (a: clsPrjTab4GCEN, b: clsPrjTab4GCEN) => {
          if (a.geneCodeDate == null) return -1;
          if (b.geneCodeDate == null) return 1;
          return a.geneCodeDate.localeCompare(b.geneCodeDate);
        };
      case clsPrjTab4GCEN.con_IsNeedGene:
        return (a: clsPrjTab4GCEN) => {
          if (a.isNeedGene == true) return 1;
          else return -1;
        };
      case clsPrjTab4GCEN.con_ApplicationTypeId:
        return (a: clsPrjTab4GCEN, b: clsPrjTab4GCEN) => {
          return a.applicationTypeId - b.applicationTypeId;
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[PrjTab4GC]中不存在!(in ${prjTab4GC_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsPrjTab4GCEN.con_mId:
        return (a: clsPrjTab4GCEN, b: clsPrjTab4GCEN) => {
          return b.mId - a.mId;
        };
      case clsPrjTab4GCEN.con_TabId4GC:
        return (a: clsPrjTab4GCEN, b: clsPrjTab4GCEN) => {
          return b.tabId4GC.localeCompare(a.tabId4GC);
        };
      case clsPrjTab4GCEN.con_GeneCodeDate:
        return (a: clsPrjTab4GCEN, b: clsPrjTab4GCEN) => {
          if (b.geneCodeDate == null) return -1;
          if (a.geneCodeDate == null) return 1;
          return b.geneCodeDate.localeCompare(a.geneCodeDate);
        };
      case clsPrjTab4GCEN.con_IsNeedGene:
        return (b: clsPrjTab4GCEN) => {
          if (b.isNeedGene == true) return 1;
          else return -1;
        };
      case clsPrjTab4GCEN.con_ApplicationTypeId:
        return (a: clsPrjTab4GCEN, b: clsPrjTab4GCEN) => {
          return b.applicationTypeId - a.applicationTypeId;
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[PrjTab4GC]中不存在!(in ${prjTab4GC_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2024-05-21
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function PrjTab4GC_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsPrjTab4GCEN.con_mId:
      return (obj: clsPrjTab4GCEN) => {
        return obj.mId === value;
      };
    case clsPrjTab4GCEN.con_TabId4GC:
      return (obj: clsPrjTab4GCEN) => {
        return obj.tabId4GC === value;
      };
    case clsPrjTab4GCEN.con_GeneCodeDate:
      return (obj: clsPrjTab4GCEN) => {
        return obj.geneCodeDate === value;
      };
    case clsPrjTab4GCEN.con_IsNeedGene:
      return (obj: clsPrjTab4GCEN) => {
        return obj.isNeedGene === value;
      };
    case clsPrjTab4GCEN.con_ApplicationTypeId:
      return (obj: clsPrjTab4GCEN) => {
        return obj.applicationTypeId === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[PrjTab4GC]中不存在!(in ${prjTab4GC_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}
//该表没有使用Cache,不需要生成[PrjTab4GC__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function PrjTab4GC_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(prjTab4GC_Controller, strAction);

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
        prjTab4GC_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTab4GC_ConstructorName,
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
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function PrjTab4GC_GetFldValueAsync(
  strFldName: string,
  strWhereCond: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetFldValueAsync';
  const strAction = 'GetFldValue';
  const strUrl = GetWebApiUrl(prjTab4GC_Controller, strAction);

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
        prjTab4GC_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTab4GC_ConstructorName,
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
export async function PrjTab4GC_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(prjTab4GC_Controller, strAction);

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
        prjTab4GC_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTab4GC_ConstructorName,
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
export async function PrjTab4GC_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsPrjTab4GCEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(prjTab4GC_Controller, strAction);

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
      const objPrjTab4GC = PrjTab4GC_GetObjFromJsonObj(returnObj);
      return objPrjTab4GC;
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
        prjTab4GC_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTab4GC_ConstructorName,
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
export async function PrjTab4GC_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsPrjTab4GCEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(prjTab4GC_Controller, strAction);

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
          prjTab4GC_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = PrjTab4GC_GetObjLstByJSONObjLst(returnObjLst);
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
        prjTab4GC_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTab4GC_ConstructorName,
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
export async function PrjTab4GC_GetObjLstBymIdLstAsync(
  arrmId: Array<string>,
): Promise<Array<clsPrjTab4GCEN>> {
  const strThisFuncName = 'GetObjLstBymIdLstAsync';
  const strAction = 'GetObjLstBymIdLst';
  const strUrl = GetWebApiUrl(prjTab4GC_Controller, strAction);

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
          prjTab4GC_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = PrjTab4GC_GetObjLstByJSONObjLst(returnObjLst);
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
        prjTab4GC_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTab4GC_ConstructorName,
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
export async function PrjTab4GC_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsPrjTab4GCEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(prjTab4GC_Controller, strAction);

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
          prjTab4GC_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = PrjTab4GC_GetObjLstByJSONObjLst(returnObjLst);
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
        prjTab4GC_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTab4GC_ConstructorName,
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
export async function PrjTab4GC_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsPrjTab4GCEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(prjTab4GC_Controller, strAction);

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
          prjTab4GC_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = PrjTab4GC_GetObjLstByJSONObjLst(returnObjLst);
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
        prjTab4GC_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTab4GC_ConstructorName,
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
export async function PrjTab4GC_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsPrjTab4GCEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsPrjTab4GCEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(prjTab4GC_Controller, strAction);

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
          prjTab4GC_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = PrjTab4GC_GetObjLstByJSONObjLst(returnObjLst);
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
        prjTab4GC_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTab4GC_ConstructorName,
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
export async function PrjTab4GC_DelRecordAsync(lngmId: number): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(prjTab4GC_Controller, strAction);
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
        prjTab4GC_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTab4GC_ConstructorName,
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
export async function PrjTab4GC_DelPrjTab4GCsAsync(arrmId: Array<string>): Promise<number> {
  const strThisFuncName = 'DelPrjTab4GCsAsync';
  const strAction = 'DelPrjTab4GCs';
  const strUrl = GetWebApiUrl(prjTab4GC_Controller, strAction);

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
        prjTab4GC_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTab4GC_ConstructorName,
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
export async function PrjTab4GC_DelPrjTab4GCsByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'DelPrjTab4GCsByCondAsync';
  const strAction = 'DelPrjTab4GCsByCond';
  const strUrl = GetWebApiUrl(prjTab4GC_Controller, strAction);

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
        prjTab4GC_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTab4GC_ConstructorName,
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
 * @param objPrjTab4GCEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function PrjTab4GC_AddNewRecordAsync(
  objPrjTab4GCEN: clsPrjTab4GCEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objPrjTab4GCEN);
  const strUrl = GetWebApiUrl(prjTab4GC_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPrjTab4GCEN, config);
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
        prjTab4GC_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTab4GC_ConstructorName,
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
 * @param objPrjTab4GCEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function PrjTab4GC_AddNewRecordWithReturnKeyAsync(
  objPrjTab4GCEN: clsPrjTab4GCEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(prjTab4GC_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPrjTab4GCEN, config);
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
        prjTab4GC_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTab4GC_ConstructorName,
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
 * @param objPrjTab4GCEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function PrjTab4GC_UpdateRecordAsync(
  objPrjTab4GCEN: clsPrjTab4GCEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objPrjTab4GCEN.sfUpdFldSetStr === undefined ||
    objPrjTab4GCEN.sfUpdFldSetStr === null ||
    objPrjTab4GCEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format('对象(关键字: {0})的【修改字段集】为空,不能修改!', objPrjTab4GCEN.mId);
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(prjTab4GC_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPrjTab4GCEN, config);
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
        prjTab4GC_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTab4GC_ConstructorName,
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
 * @param objPrjTab4GCEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function PrjTab4GC_UpdateWithConditionAsync(
  objPrjTab4GCEN: clsPrjTab4GCEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objPrjTab4GCEN.sfUpdFldSetStr === undefined ||
    objPrjTab4GCEN.sfUpdFldSetStr === null ||
    objPrjTab4GCEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format('对象(关键字: {0})的【修改字段集】为空,不能修改!', objPrjTab4GCEN.mId);
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(prjTab4GC_Controller, strAction);
  objPrjTab4GCEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPrjTab4GCEN, config);
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
        prjTab4GC_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTab4GC_ConstructorName,
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
export async function PrjTab4GC_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(prjTab4GC_Controller, strAction);

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
        prjTab4GC_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTab4GC_ConstructorName,
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
export async function PrjTab4GC_IsExistAsync(lngmId: number): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(prjTab4GC_Controller, strAction);

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
        prjTab4GC_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTab4GC_ConstructorName,
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
export async function PrjTab4GC_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(prjTab4GC_Controller, strAction);

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
        prjTab4GC_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTab4GC_ConstructorName,
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
export async function PrjTab4GC_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(prjTab4GC_Controller, strAction);

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
        prjTab4GC_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTab4GC_ConstructorName,
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
export function PrjTab4GC_GetWebApiUrl(strController: string, strAction: string): string {
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
export function PrjTab4GC_CheckPropertyNew(pobjPrjTab4GCEN: clsPrjTab4GCEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjPrjTab4GCEN.tabId4GC) === true) {
    throw new Error(
      `(errid:Watl000411)字段[表Id4GC]不能为空(In 工程表4GC)!(clsPrjTab4GCBL:CheckPropertyNew0)`,
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (IsNullOrEmpty(pobjPrjTab4GCEN.tabId4GC) == false && GetStrLen(pobjPrjTab4GCEN.tabId4GC) > 8) {
    throw new Error(
      `(errid:Watl000413)字段[表Id4GC(tabId4GC)]的长度不能超过8(In 工程表4GC(PrjTab4GC))!值:${pobjPrjTab4GCEN.tabId4GC}(clsPrjTab4GCBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTab4GCEN.geneCodeDate) == false &&
    GetStrLen(pobjPrjTab4GCEN.geneCodeDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[生成代码日期(geneCodeDate)]的长度不能超过20(In 工程表4GC(PrjTab4GC))!值:${pobjPrjTab4GCEN.geneCodeDate}(clsPrjTab4GCBL:CheckPropertyNew)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjPrjTab4GCEN.mId &&
    undefined !== pobjPrjTab4GCEN.mId &&
    tzDataType.isNumber(pobjPrjTab4GCEN.mId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[mId(mId)]的值:[${pobjPrjTab4GCEN.mId}], 非法,应该为数值型(In 工程表4GC(PrjTab4GC))!(clsPrjTab4GCBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTab4GCEN.tabId4GC) == false &&
    undefined !== pobjPrjTab4GCEN.tabId4GC &&
    tzDataType.isString(pobjPrjTab4GCEN.tabId4GC) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[表Id4GC(tabId4GC)]的值:[${pobjPrjTab4GCEN.tabId4GC}], 非法,应该为字符型(In 工程表4GC(PrjTab4GC))!(clsPrjTab4GCBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTab4GCEN.geneCodeDate) == false &&
    undefined !== pobjPrjTab4GCEN.geneCodeDate &&
    tzDataType.isString(pobjPrjTab4GCEN.geneCodeDate) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[生成代码日期(geneCodeDate)]的值:[${pobjPrjTab4GCEN.geneCodeDate}], 非法,应该为字符型(In 工程表4GC(PrjTab4GC))!(clsPrjTab4GCBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjPrjTab4GCEN.isNeedGene &&
    undefined !== pobjPrjTab4GCEN.isNeedGene &&
    tzDataType.isBoolean(pobjPrjTab4GCEN.isNeedGene) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否需要生成(isNeedGene)]的值:[${pobjPrjTab4GCEN.isNeedGene}], 非法,应该为布尔型(In 工程表4GC(PrjTab4GC))!(clsPrjTab4GCBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjPrjTab4GCEN.applicationTypeId &&
    undefined !== pobjPrjTab4GCEN.applicationTypeId &&
    tzDataType.isNumber(pobjPrjTab4GCEN.applicationTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[应用程序类型ID(applicationTypeId)]的值:[${pobjPrjTab4GCEN.applicationTypeId}], 非法,应该为数值型(In 工程表4GC(PrjTab4GC))!(clsPrjTab4GCBL:CheckPropertyNew0)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function PrjTab4GC_CheckProperty4Update(pobjPrjTab4GCEN: clsPrjTab4GCEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (IsNullOrEmpty(pobjPrjTab4GCEN.tabId4GC) == false && GetStrLen(pobjPrjTab4GCEN.tabId4GC) > 8) {
    throw new Error(
      `(errid:Watl000416)字段[表Id4GC(tabId4GC)]的长度不能超过8(In 工程表4GC(PrjTab4GC))!值:${pobjPrjTab4GCEN.tabId4GC}(clsPrjTab4GCBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTab4GCEN.geneCodeDate) == false &&
    GetStrLen(pobjPrjTab4GCEN.geneCodeDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[生成代码日期(geneCodeDate)]的长度不能超过20(In 工程表4GC(PrjTab4GC))!值:${pobjPrjTab4GCEN.geneCodeDate}(clsPrjTab4GCBL:CheckProperty4Update)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjPrjTab4GCEN.mId &&
    undefined !== pobjPrjTab4GCEN.mId &&
    tzDataType.isNumber(pobjPrjTab4GCEN.mId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[mId(mId)]的值:[${pobjPrjTab4GCEN.mId}], 非法,应该为数值型(In 工程表4GC(PrjTab4GC))!(clsPrjTab4GCBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTab4GCEN.tabId4GC) == false &&
    undefined !== pobjPrjTab4GCEN.tabId4GC &&
    tzDataType.isString(pobjPrjTab4GCEN.tabId4GC) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[表Id4GC(tabId4GC)]的值:[${pobjPrjTab4GCEN.tabId4GC}], 非法,应该为字符型(In 工程表4GC(PrjTab4GC))!(clsPrjTab4GCBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTab4GCEN.geneCodeDate) == false &&
    undefined !== pobjPrjTab4GCEN.geneCodeDate &&
    tzDataType.isString(pobjPrjTab4GCEN.geneCodeDate) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[生成代码日期(geneCodeDate)]的值:[${pobjPrjTab4GCEN.geneCodeDate}], 非法,应该为字符型(In 工程表4GC(PrjTab4GC))!(clsPrjTab4GCBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjPrjTab4GCEN.isNeedGene &&
    undefined !== pobjPrjTab4GCEN.isNeedGene &&
    tzDataType.isBoolean(pobjPrjTab4GCEN.isNeedGene) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否需要生成(isNeedGene)]的值:[${pobjPrjTab4GCEN.isNeedGene}], 非法,应该为布尔型(In 工程表4GC(PrjTab4GC))!(clsPrjTab4GCBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjPrjTab4GCEN.applicationTypeId &&
    undefined !== pobjPrjTab4GCEN.applicationTypeId &&
    tzDataType.isNumber(pobjPrjTab4GCEN.applicationTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[应用程序类型ID(applicationTypeId)]的值:[${pobjPrjTab4GCEN.applicationTypeId}], 非法,应该为数值型(In 工程表4GC(PrjTab4GC))!(clsPrjTab4GCBL:CheckProperty4Update)`,
    );
  }
  //检查主键是否为Null或者空!
  if (
    null === pobjPrjTab4GCEN.mId ||
    (pobjPrjTab4GCEN.mId != null && pobjPrjTab4GCEN.mId.toString() === '')
  ) {
    throw new Error(
      `(errid:Watl000064)字段[mId]不能为空(In 工程表4GC)!(clsPrjTab4GCBL:CheckProperty4Update)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2024-05-21
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function PrjTab4GC_GetJSONStrByObj(pobjPrjTab4GCEN: clsPrjTab4GCEN): string {
  pobjPrjTab4GCEN.sfUpdFldSetStr = pobjPrjTab4GCEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjPrjTab4GCEN);
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
 * 日期:2024-05-21
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
 */
export function PrjTab4GC_GetObjLstByJSONStr(strJSON: string): Array<clsPrjTab4GCEN> {
  let arrPrjTab4GCObjLst = new Array<clsPrjTab4GCEN>();
  if (strJSON === '') {
    return arrPrjTab4GCObjLst;
  }
  try {
    arrPrjTab4GCObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrPrjTab4GCObjLst;
  }
  return arrPrjTab4GCObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2024-05-21
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrPrjTab4GCObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function PrjTab4GC_GetObjLstByJSONObjLst(
  arrPrjTab4GCObjLstS: Array<clsPrjTab4GCEN>,
): Array<clsPrjTab4GCEN> {
  const arrPrjTab4GCObjLst = new Array<clsPrjTab4GCEN>();
  for (const objInFor of arrPrjTab4GCObjLstS) {
    const obj1 = PrjTab4GC_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrPrjTab4GCObjLst.push(obj1);
  }
  return arrPrjTab4GCObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2024-05-21
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function PrjTab4GC_GetObjByJSONStr(strJSON: string): clsPrjTab4GCEN {
  let pobjPrjTab4GCEN = new clsPrjTab4GCEN();
  if (strJSON === '') {
    return pobjPrjTab4GCEN;
  }
  try {
    pobjPrjTab4GCEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjPrjTab4GCEN;
  }
  return pobjPrjTab4GCEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function PrjTab4GC_GetCombineCondition(objPrjTab4GCCond: clsPrjTab4GCEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjTab4GCCond.dicFldComparisonOp,
      clsPrjTab4GCEN.con_mId,
    ) == true
  ) {
    const strComparisonOpmId: string = objPrjTab4GCCond.dicFldComparisonOp[clsPrjTab4GCEN.con_mId];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsPrjTab4GCEN.con_mId,
      objPrjTab4GCCond.mId,
      strComparisonOpmId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjTab4GCCond.dicFldComparisonOp,
      clsPrjTab4GCEN.con_TabId4GC,
    ) == true
  ) {
    const strComparisonOpTabId4GC: string =
      objPrjTab4GCCond.dicFldComparisonOp[clsPrjTab4GCEN.con_TabId4GC];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjTab4GCEN.con_TabId4GC,
      objPrjTab4GCCond.tabId4GC,
      strComparisonOpTabId4GC,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjTab4GCCond.dicFldComparisonOp,
      clsPrjTab4GCEN.con_GeneCodeDate,
    ) == true
  ) {
    const strComparisonOpGeneCodeDate: string =
      objPrjTab4GCCond.dicFldComparisonOp[clsPrjTab4GCEN.con_GeneCodeDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjTab4GCEN.con_GeneCodeDate,
      objPrjTab4GCCond.geneCodeDate,
      strComparisonOpGeneCodeDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjTab4GCCond.dicFldComparisonOp,
      clsPrjTab4GCEN.con_IsNeedGene,
    ) == true
  ) {
    if (objPrjTab4GCCond.isNeedGene == true) {
      strWhereCond += Format(" And {0} = '1'", clsPrjTab4GCEN.con_IsNeedGene);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsPrjTab4GCEN.con_IsNeedGene);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjTab4GCCond.dicFldComparisonOp,
      clsPrjTab4GCEN.con_ApplicationTypeId,
    ) == true
  ) {
    const strComparisonOpApplicationTypeId: string =
      objPrjTab4GCCond.dicFldComparisonOp[clsPrjTab4GCEN.con_ApplicationTypeId];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsPrjTab4GCEN.con_ApplicationTypeId,
      objPrjTab4GCCond.applicationTypeId,
      strComparisonOpApplicationTypeId,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--PrjTab4GC(工程表4GC),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strTabId4GC: 表Id4GC(要求唯一的字段)
 * @param intApplicationTypeId: 应用程序类型ID(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function PrjTab4GC_GetUniCondStr(objPrjTab4GCEN: clsPrjTab4GCEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and TabId4GC = '{0}'", objPrjTab4GCEN.tabId4GC);
  strWhereCond += Format(" and ApplicationTypeId = '{0}'", objPrjTab4GCEN.applicationTypeId);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--PrjTab4GC(工程表4GC),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strTabId4GC: 表Id4GC(要求唯一的字段)
 * @param intApplicationTypeId: 应用程序类型ID(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function PrjTab4GC_GetUniCondStr4Update(objPrjTab4GCEN: clsPrjTab4GCEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and mId <> '{0}'", objPrjTab4GCEN.mId);
  strWhereCond += Format(" and TabId4GC = '{0}'", objPrjTab4GCEN.tabId4GC);
  strWhereCond += Format(" and ApplicationTypeId = '{0}'", objPrjTab4GCEN.applicationTypeId);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objPrjTab4GCENS:源对象
 * @param objPrjTab4GCENT:目标对象
 */
export function PrjTab4GC_GetObjFromJsonObj(objPrjTab4GCENS: clsPrjTab4GCEN): clsPrjTab4GCEN {
  const objPrjTab4GCENT: clsPrjTab4GCEN = new clsPrjTab4GCEN();
  ObjectAssign(objPrjTab4GCENT, objPrjTab4GCENS);
  return objPrjTab4GCENT;
}
