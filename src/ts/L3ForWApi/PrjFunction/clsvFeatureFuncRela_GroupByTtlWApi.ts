/**
 * 类名:clsvFeatureFuncRela_GroupByTtlWApi
 * 表名:vFeatureFuncRela_GroupByTtl(00050537)
 * 版本:2023.10.12.1(服务器:WIN-SRV103-116)
 * 日期:2023/10/12 14:39:53
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
 * v功能函数关系_分类汇总(vFeatureFuncRela_GroupByTtl)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2023年10月12日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsvFeatureFuncRela_GroupByTtlEN } from '@/ts/L0Entity/PrjFunction/clsvFeatureFuncRela_GroupByTtlEN';
import { GetExceptionStr, myShowErrorMsg, ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const vFeatureFuncRela_GroupByTtl_Controller = 'vFeatureFuncRela_GroupByTtlApi';
export const vFeatureFuncRela_GroupByTtl_ConstructorName = 'vFeatureFuncRela_GroupByTtl';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strFeatureId:关键字
 * @returns 对象
 **/
export async function vFeatureFuncRela_GroupByTtl_GetObjByFeatureIdAsync(
  strFeatureId: string,
): Promise<clsvFeatureFuncRela_GroupByTtlEN | null> {
  const strThisFuncName = 'GetObjByFeatureIdAsync';

  if (IsNullOrEmpty(strFeatureId) == true) {
    const strMsg = Format(
      '参数:[strFeatureId]不能为空!(In clsvFeatureFuncRela_GroupByTtlWApi.GetObjByFeatureIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strFeatureId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strFeatureId]的长度:[{0}]不正确!(clsvFeatureFuncRela_GroupByTtlWApi.GetObjByFeatureIdAsync)',
      strFeatureId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByFeatureId';
  const strUrl = GetWebApiUrl(vFeatureFuncRela_GroupByTtl_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strFeatureId,
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
      const objvFeatureFuncRela_GroupByTtl =
        vFeatureFuncRela_GroupByTtl_GetObjFromJsonObj(returnObj);
      return objvFeatureFuncRela_GroupByTtl;
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
        vFeatureFuncRela_GroupByTtl_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFeatureFuncRela_GroupByTtl_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[GetObjByFeatureIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )
//该表没有使用Cache,不需要生成[GetObjByFeatureIdlocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[GetNameByFeatureIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
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
export function vFeatureFuncRela_GroupByTtl_SortFunDefa(
  a: clsvFeatureFuncRela_GroupByTtlEN,
  b: clsvFeatureFuncRela_GroupByTtlEN,
): number {
  return a.featureId.localeCompare(b.featureId);
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
export function vFeatureFuncRela_GroupByTtl_SortFunDefa2Fld(
  a: clsvFeatureFuncRela_GroupByTtlEN,
  b: clsvFeatureFuncRela_GroupByTtlEN,
): number {
  if (a.applicationTypeId == b.applicationTypeId) return a.funcCount - b.funcCount;
  else return a.applicationTypeId - b.applicationTypeId;
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
export function vFeatureFuncRela_GroupByTtl_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsvFeatureFuncRela_GroupByTtlEN.con_FeatureId:
        return (a: clsvFeatureFuncRela_GroupByTtlEN, b: clsvFeatureFuncRela_GroupByTtlEN) => {
          return a.featureId.localeCompare(b.featureId);
        };
      case clsvFeatureFuncRela_GroupByTtlEN.con_ApplicationTypeId:
        return (a: clsvFeatureFuncRela_GroupByTtlEN, b: clsvFeatureFuncRela_GroupByTtlEN) => {
          return a.applicationTypeId - b.applicationTypeId;
        };
      case clsvFeatureFuncRela_GroupByTtlEN.con_FuncCount:
        return (a: clsvFeatureFuncRela_GroupByTtlEN, b: clsvFeatureFuncRela_GroupByTtlEN) => {
          return a.funcCount - b.funcCount;
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vFeatureFuncRela_GroupByTtl]中不存在!(in ${vFeatureFuncRela_GroupByTtl_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsvFeatureFuncRela_GroupByTtlEN.con_FeatureId:
        return (a: clsvFeatureFuncRela_GroupByTtlEN, b: clsvFeatureFuncRela_GroupByTtlEN) => {
          return b.featureId.localeCompare(a.featureId);
        };
      case clsvFeatureFuncRela_GroupByTtlEN.con_ApplicationTypeId:
        return (a: clsvFeatureFuncRela_GroupByTtlEN, b: clsvFeatureFuncRela_GroupByTtlEN) => {
          return b.applicationTypeId - a.applicationTypeId;
        };
      case clsvFeatureFuncRela_GroupByTtlEN.con_FuncCount:
        return (a: clsvFeatureFuncRela_GroupByTtlEN, b: clsvFeatureFuncRela_GroupByTtlEN) => {
          return b.funcCount - a.funcCount;
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vFeatureFuncRela_GroupByTtl]中不存在!(in ${vFeatureFuncRela_GroupByTtl_ConstructorName}.${strThisFuncName})`;
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
export async function vFeatureFuncRela_GroupByTtl_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsvFeatureFuncRela_GroupByTtlEN.con_FeatureId:
      return (obj: clsvFeatureFuncRela_GroupByTtlEN) => {
        return obj.featureId === value;
      };
    case clsvFeatureFuncRela_GroupByTtlEN.con_ApplicationTypeId:
      return (obj: clsvFeatureFuncRela_GroupByTtlEN) => {
        return obj.applicationTypeId === value;
      };
    case clsvFeatureFuncRela_GroupByTtlEN.con_FuncCount:
      return (obj: clsvFeatureFuncRela_GroupByTtlEN) => {
        return obj.funcCount === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[vFeatureFuncRela_GroupByTtl]中不存在!(in ${vFeatureFuncRela_GroupByTtl_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}
//该表没有使用Cache,不需要生成[vFeatureFuncRela_GroupByTtl__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function vFeatureFuncRela_GroupByTtl_GetFirstIDAsync(
  strWhereCond: string,
): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vFeatureFuncRela_GroupByTtl_Controller, strAction);

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
        vFeatureFuncRela_GroupByTtl_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFeatureFuncRela_GroupByTtl_ConstructorName,
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
export async function vFeatureFuncRela_GroupByTtl_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vFeatureFuncRela_GroupByTtl_Controller, strAction);

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
        vFeatureFuncRela_GroupByTtl_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFeatureFuncRela_GroupByTtl_ConstructorName,
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
export async function vFeatureFuncRela_GroupByTtl_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsvFeatureFuncRela_GroupByTtlEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(vFeatureFuncRela_GroupByTtl_Controller, strAction);

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
      const objvFeatureFuncRela_GroupByTtl =
        vFeatureFuncRela_GroupByTtl_GetObjFromJsonObj(returnObj);
      return objvFeatureFuncRela_GroupByTtl;
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
        vFeatureFuncRela_GroupByTtl_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFeatureFuncRela_GroupByTtl_ConstructorName,
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
export async function vFeatureFuncRela_GroupByTtl_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsvFeatureFuncRela_GroupByTtlEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(vFeatureFuncRela_GroupByTtl_Controller, strAction);

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
          vFeatureFuncRela_GroupByTtl_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vFeatureFuncRela_GroupByTtl_GetObjLstByJSONObjLst(returnObjLst);
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
        vFeatureFuncRela_GroupByTtl_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFeatureFuncRela_GroupByTtl_ConstructorName,
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
 * @param arrFeatureId:关键字列表
 * @returns 对象列表
 **/
export async function vFeatureFuncRela_GroupByTtl_GetObjLstByFeatureIdLstAsync(
  arrFeatureId: Array<string>,
): Promise<Array<clsvFeatureFuncRela_GroupByTtlEN>> {
  const strThisFuncName = 'GetObjLstByFeatureIdLstAsync';
  const strAction = 'GetObjLstByFeatureIdLst';
  const strUrl = GetWebApiUrl(vFeatureFuncRela_GroupByTtl_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrFeatureId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          vFeatureFuncRela_GroupByTtl_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vFeatureFuncRela_GroupByTtl_GetObjLstByJSONObjLst(returnObjLst);
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
        vFeatureFuncRela_GroupByTtl_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFeatureFuncRela_GroupByTtl_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[GetObjLstByFeatureIdLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

/**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export async function vFeatureFuncRela_GroupByTtl_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsvFeatureFuncRela_GroupByTtlEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(vFeatureFuncRela_GroupByTtl_Controller, strAction);

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
          vFeatureFuncRela_GroupByTtl_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vFeatureFuncRela_GroupByTtl_GetObjLstByJSONObjLst(returnObjLst);
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
        vFeatureFuncRela_GroupByTtl_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFeatureFuncRela_GroupByTtl_ConstructorName,
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
export async function vFeatureFuncRela_GroupByTtl_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsvFeatureFuncRela_GroupByTtlEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(vFeatureFuncRela_GroupByTtl_Controller, strAction);

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
          vFeatureFuncRela_GroupByTtl_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vFeatureFuncRela_GroupByTtl_GetObjLstByJSONObjLst(returnObjLst);
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
        vFeatureFuncRela_GroupByTtl_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFeatureFuncRela_GroupByTtl_ConstructorName,
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
export async function vFeatureFuncRela_GroupByTtl_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsvFeatureFuncRela_GroupByTtlEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsvFeatureFuncRela_GroupByTtlEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(vFeatureFuncRela_GroupByTtl_Controller, strAction);

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
          vFeatureFuncRela_GroupByTtl_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vFeatureFuncRela_GroupByTtl_GetObjLstByJSONObjLst(returnObjLst);
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
        vFeatureFuncRela_GroupByTtl_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFeatureFuncRela_GroupByTtl_ConstructorName,
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
export async function vFeatureFuncRela_GroupByTtl_IsExistRecordAsync(
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(vFeatureFuncRela_GroupByTtl_Controller, strAction);

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
        vFeatureFuncRela_GroupByTtl_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFeatureFuncRela_GroupByTtl_ConstructorName,
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
 * @param strFeatureId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function vFeatureFuncRela_GroupByTtl_IsExistAsync(
  strFeatureId: string,
): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(vFeatureFuncRela_GroupByTtl_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strFeatureId,
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
        vFeatureFuncRela_GroupByTtl_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFeatureFuncRela_GroupByTtl_ConstructorName,
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
export async function vFeatureFuncRela_GroupByTtl_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(vFeatureFuncRela_GroupByTtl_Controller, strAction);

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
        vFeatureFuncRela_GroupByTtl_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFeatureFuncRela_GroupByTtl_ConstructorName,
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

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 */
export function vFeatureFuncRela_GroupByTtl_GetWebApiUrl(
  strController: string,
  strAction: string,
): string {
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
//该表没有使用Cache,不需要生成[ReFreshThisCache]函数;
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vFeatureFuncRela_GroupByTtl_GetJSONStrByObj(
  pobjvFeatureFuncRela_GroupByTtlEN: clsvFeatureFuncRela_GroupByTtlEN,
): string {
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjvFeatureFuncRela_GroupByTtlEN);
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
export function vFeatureFuncRela_GroupByTtl_GetObjLstByJSONStr(
  strJSON: string,
): Array<clsvFeatureFuncRela_GroupByTtlEN> {
  let arrvFeatureFuncRela_GroupByTtlObjLst = new Array<clsvFeatureFuncRela_GroupByTtlEN>();
  if (strJSON === '') {
    return arrvFeatureFuncRela_GroupByTtlObjLst;
  }
  try {
    arrvFeatureFuncRela_GroupByTtlObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrvFeatureFuncRela_GroupByTtlObjLst;
  }
  return arrvFeatureFuncRela_GroupByTtlObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvFeatureFuncRela_GroupByTtlObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function vFeatureFuncRela_GroupByTtl_GetObjLstByJSONObjLst(
  arrvFeatureFuncRela_GroupByTtlObjLstS: Array<clsvFeatureFuncRela_GroupByTtlEN>,
): Array<clsvFeatureFuncRela_GroupByTtlEN> {
  const arrvFeatureFuncRela_GroupByTtlObjLst = new Array<clsvFeatureFuncRela_GroupByTtlEN>();
  for (const objInFor of arrvFeatureFuncRela_GroupByTtlObjLstS) {
    const obj1 = vFeatureFuncRela_GroupByTtl_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrvFeatureFuncRela_GroupByTtlObjLst.push(obj1);
  }
  return arrvFeatureFuncRela_GroupByTtlObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vFeatureFuncRela_GroupByTtl_GetObjByJSONStr(
  strJSON: string,
): clsvFeatureFuncRela_GroupByTtlEN {
  let pobjvFeatureFuncRela_GroupByTtlEN = new clsvFeatureFuncRela_GroupByTtlEN();
  if (strJSON === '') {
    return pobjvFeatureFuncRela_GroupByTtlEN;
  }
  try {
    pobjvFeatureFuncRela_GroupByTtlEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjvFeatureFuncRela_GroupByTtlEN;
  }
  return pobjvFeatureFuncRela_GroupByTtlEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function vFeatureFuncRela_GroupByTtl_GetCombineCondition(
  objvFeatureFuncRela_GroupByTtlCond: clsvFeatureFuncRela_GroupByTtlEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objvFeatureFuncRela_GroupByTtlCond.dicFldComparisonOp,
      clsvFeatureFuncRela_GroupByTtlEN.con_FeatureId,
    ) == true
  ) {
    const strComparisonOpFeatureId: string =
      objvFeatureFuncRela_GroupByTtlCond.dicFldComparisonOp[
        clsvFeatureFuncRela_GroupByTtlEN.con_FeatureId
      ];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFeatureFuncRela_GroupByTtlEN.con_FeatureId,
      objvFeatureFuncRela_GroupByTtlCond.featureId,
      strComparisonOpFeatureId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFeatureFuncRela_GroupByTtlCond.dicFldComparisonOp,
      clsvFeatureFuncRela_GroupByTtlEN.con_ApplicationTypeId,
    ) == true
  ) {
    const strComparisonOpApplicationTypeId: string =
      objvFeatureFuncRela_GroupByTtlCond.dicFldComparisonOp[
        clsvFeatureFuncRela_GroupByTtlEN.con_ApplicationTypeId
      ];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvFeatureFuncRela_GroupByTtlEN.con_ApplicationTypeId,
      objvFeatureFuncRela_GroupByTtlCond.applicationTypeId,
      strComparisonOpApplicationTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFeatureFuncRela_GroupByTtlCond.dicFldComparisonOp,
      clsvFeatureFuncRela_GroupByTtlEN.con_FuncCount,
    ) == true
  ) {
    const strComparisonOpFuncCount: string =
      objvFeatureFuncRela_GroupByTtlCond.dicFldComparisonOp[
        clsvFeatureFuncRela_GroupByTtlEN.con_FuncCount
      ];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvFeatureFuncRela_GroupByTtlEN.con_FuncCount,
      objvFeatureFuncRela_GroupByTtlCond.funcCount,
      strComparisonOpFuncCount,
    );
  }
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvFeatureFuncRela_GroupByTtlENS:源对象
 * @param objvFeatureFuncRela_GroupByTtlENT:目标对象
 */
export function vFeatureFuncRela_GroupByTtl_GetObjFromJsonObj(
  objvFeatureFuncRela_GroupByTtlENS: clsvFeatureFuncRela_GroupByTtlEN,
): clsvFeatureFuncRela_GroupByTtlEN {
  const objvFeatureFuncRela_GroupByTtlENT: clsvFeatureFuncRela_GroupByTtlEN =
    new clsvFeatureFuncRela_GroupByTtlEN();
  ObjectAssign(objvFeatureFuncRela_GroupByTtlENT, objvFeatureFuncRela_GroupByTtlENS);
  return objvFeatureFuncRela_GroupByTtlENT;
}
