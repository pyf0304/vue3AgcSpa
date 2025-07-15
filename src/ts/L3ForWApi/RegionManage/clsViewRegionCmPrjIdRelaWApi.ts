/**
 * 类名:clsViewRegionCmPrjIdRelaWApi
 * 表名:ViewRegionCmPrjIdRela(00050622)
 * 版本:2023.10.12.1(服务器:WIN-SRV103-116)
 * 日期:2023/10/12 14:39:03
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:区域管理(RegionManage)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 界面区域CmPrjId关系(ViewRegionCmPrjIdRela)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2023年10月12日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty, GetStrLen, tzDataType, Format } from '@/ts/PubFun/clsString';
import { clsViewRegionCmPrjIdRelaEN } from '@/ts/L0Entity/RegionManage/clsViewRegionCmPrjIdRelaEN';
import { GetExceptionStr, myShowErrorMsg, ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const viewRegionCmPrjIdRela_Controller = 'ViewRegionCmPrjIdRelaApi';
export const viewRegionCmPrjIdRela_ConstructorName = 'viewRegionCmPrjIdRela';

/**
 * 把多关键字值分解为单独关键字的值,并且以对象形式返回
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strKeyLst:多关键字值
 * @returns 分解后的单独关键字值对象
 **/
export function ViewRegionCmPrjIdRela_SplitKeyLst(strKeyLst: string) {
  const arrKey = strKeyLst.split('|');
  if (arrKey.length != 2) {
    const strMsg = '请选择需要修改的记录!';
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
  const objKeyLst = {
    regionId: arrKey[0],
    cmPrjId: arrKey[1],
  };
  if (IsNullOrEmpty(objKeyLst.regionId) == true) {
    const strMsg = '关键字段(regionId)值不能为空!';
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
  if (IsNullOrEmpty(objKeyLst.cmPrjId) == true) {
    const strMsg = '关键字段(cmPrjId)值不能为空!';
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
  return objKeyLst;
}
/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strRegionId:关键字
 * @returns 对象
 **/
export async function ViewRegionCmPrjIdRela_GetObjByKeyLstAsync(
  strRegionId: string,
  strCmPrjId: string,
): Promise<clsViewRegionCmPrjIdRelaEN | null> {
  const strThisFuncName = 'GetObjByKeyLstAsync';

  if (IsNullOrEmpty(strRegionId) == true) {
    const strMsg = Format(
      '参数:[strRegionId]不能为空!(In clsViewRegionCmPrjIdRelaWApi.GetObjByKeyLstAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strRegionId.length != 10) {
    const strMsg = Format(
      '缓存分类变量:[strRegionId]的长度:[{0}]不正确!(clsViewRegionCmPrjIdRelaWApi.GetObjByKeyLstAsync)',
      strRegionId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (IsNullOrEmpty(strCmPrjId) == true) {
    const strMsg = Format(
      '参数:[strCmPrjId]不能为空!(In clsViewRegionCmPrjIdRelaWApi.GetObjByKeyLstAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strCmPrjId.length != 6) {
    const strMsg = Format(
      '缓存分类变量:[strCmPrjId]的长度:[{0}]不正确!(clsViewRegionCmPrjIdRelaWApi.GetObjByKeyLstAsync)',
      strCmPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByKeyLst';
  const strUrl = GetWebApiUrl(viewRegionCmPrjIdRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strRegionId,
      strCmPrjId,
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
      const objViewRegionCmPrjIdRela = ViewRegionCmPrjIdRela_GetObjFromJsonObj(returnObj);
      return objViewRegionCmPrjIdRela;
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
        viewRegionCmPrjIdRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewRegionCmPrjIdRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[GetObjByKeyLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )
//该表没有使用Cache,不需要生成[GetObjByKeyLstlocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[UpdateObjInLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache
//该表没有使用Cache,不需要生成[GetNameByRegionIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
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
export function ViewRegionCmPrjIdRela_SortFunDefa(
  a: clsViewRegionCmPrjIdRelaEN,
  b: clsViewRegionCmPrjIdRelaEN,
): number {
  return a.regionId.localeCompare(b.regionId);
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
export function ViewRegionCmPrjIdRela_SortFunDefa2Fld(
  a: clsViewRegionCmPrjIdRelaEN,
  b: clsViewRegionCmPrjIdRelaEN,
): number {
  if (a.updUser == b.updUser) return a.updDate.localeCompare(b.updDate);
  else return a.updUser.localeCompare(b.updUser);
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
export function ViewRegionCmPrjIdRela_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsViewRegionCmPrjIdRelaEN.con_RegionId:
        return (a: clsViewRegionCmPrjIdRelaEN, b: clsViewRegionCmPrjIdRelaEN) => {
          return a.regionId.localeCompare(b.regionId);
        };
      case clsViewRegionCmPrjIdRelaEN.con_CmPrjId:
        return (a: clsViewRegionCmPrjIdRelaEN, b: clsViewRegionCmPrjIdRelaEN) => {
          return a.cmPrjId.localeCompare(b.cmPrjId);
        };
      case clsViewRegionCmPrjIdRelaEN.con_UpdUser:
        return (a: clsViewRegionCmPrjIdRelaEN, b: clsViewRegionCmPrjIdRelaEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsViewRegionCmPrjIdRelaEN.con_UpdDate:
        return (a: clsViewRegionCmPrjIdRelaEN, b: clsViewRegionCmPrjIdRelaEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsViewRegionCmPrjIdRelaEN.con_Memo:
        return (a: clsViewRegionCmPrjIdRelaEN, b: clsViewRegionCmPrjIdRelaEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[ViewRegionCmPrjIdRela]中不存在!(in ${viewRegionCmPrjIdRela_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsViewRegionCmPrjIdRelaEN.con_RegionId:
        return (a: clsViewRegionCmPrjIdRelaEN, b: clsViewRegionCmPrjIdRelaEN) => {
          return b.regionId.localeCompare(a.regionId);
        };
      case clsViewRegionCmPrjIdRelaEN.con_CmPrjId:
        return (a: clsViewRegionCmPrjIdRelaEN, b: clsViewRegionCmPrjIdRelaEN) => {
          return b.cmPrjId.localeCompare(a.cmPrjId);
        };
      case clsViewRegionCmPrjIdRelaEN.con_UpdUser:
        return (a: clsViewRegionCmPrjIdRelaEN, b: clsViewRegionCmPrjIdRelaEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsViewRegionCmPrjIdRelaEN.con_UpdDate:
        return (a: clsViewRegionCmPrjIdRelaEN, b: clsViewRegionCmPrjIdRelaEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsViewRegionCmPrjIdRelaEN.con_Memo:
        return (a: clsViewRegionCmPrjIdRelaEN, b: clsViewRegionCmPrjIdRelaEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[ViewRegionCmPrjIdRela]中不存在!(in ${viewRegionCmPrjIdRela_ConstructorName}.${strThisFuncName})`;
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
export async function ViewRegionCmPrjIdRela_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsViewRegionCmPrjIdRelaEN.con_RegionId:
      return (obj: clsViewRegionCmPrjIdRelaEN) => {
        return obj.regionId === value;
      };
    case clsViewRegionCmPrjIdRelaEN.con_CmPrjId:
      return (obj: clsViewRegionCmPrjIdRelaEN) => {
        return obj.cmPrjId === value;
      };
    case clsViewRegionCmPrjIdRelaEN.con_UpdUser:
      return (obj: clsViewRegionCmPrjIdRelaEN) => {
        return obj.updUser === value;
      };
    case clsViewRegionCmPrjIdRelaEN.con_UpdDate:
      return (obj: clsViewRegionCmPrjIdRelaEN) => {
        return obj.updDate === value;
      };
    case clsViewRegionCmPrjIdRelaEN.con_Memo:
      return (obj: clsViewRegionCmPrjIdRelaEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[ViewRegionCmPrjIdRela]中不存在!(in ${viewRegionCmPrjIdRela_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}
//该表没有使用Cache,不需要生成[ViewRegionCmPrjIdRela__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function ViewRegionCmPrjIdRela_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(viewRegionCmPrjIdRela_Controller, strAction);

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
        viewRegionCmPrjIdRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewRegionCmPrjIdRela_ConstructorName,
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
export async function ViewRegionCmPrjIdRela_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(viewRegionCmPrjIdRela_Controller, strAction);

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
        viewRegionCmPrjIdRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewRegionCmPrjIdRela_ConstructorName,
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
export async function ViewRegionCmPrjIdRela_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsViewRegionCmPrjIdRelaEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(viewRegionCmPrjIdRela_Controller, strAction);

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
      const objViewRegionCmPrjIdRela = ViewRegionCmPrjIdRela_GetObjFromJsonObj(returnObj);
      return objViewRegionCmPrjIdRela;
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
        viewRegionCmPrjIdRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewRegionCmPrjIdRela_ConstructorName,
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
export async function ViewRegionCmPrjIdRela_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsViewRegionCmPrjIdRelaEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(viewRegionCmPrjIdRela_Controller, strAction);

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
          viewRegionCmPrjIdRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ViewRegionCmPrjIdRela_GetObjLstByJSONObjLst(returnObjLst);
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
        viewRegionCmPrjIdRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewRegionCmPrjIdRela_ConstructorName,
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
//该表没有使用Cache,不需要生成[GetObjLstByRegionIdLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

/**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export async function ViewRegionCmPrjIdRela_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsViewRegionCmPrjIdRelaEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(viewRegionCmPrjIdRela_Controller, strAction);

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
          viewRegionCmPrjIdRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ViewRegionCmPrjIdRela_GetObjLstByJSONObjLst(returnObjLst);
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
        viewRegionCmPrjIdRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewRegionCmPrjIdRela_ConstructorName,
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
export async function ViewRegionCmPrjIdRela_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsViewRegionCmPrjIdRelaEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(viewRegionCmPrjIdRela_Controller, strAction);

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
          viewRegionCmPrjIdRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ViewRegionCmPrjIdRela_GetObjLstByJSONObjLst(returnObjLst);
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
        viewRegionCmPrjIdRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewRegionCmPrjIdRela_ConstructorName,
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
export async function ViewRegionCmPrjIdRela_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsViewRegionCmPrjIdRelaEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsViewRegionCmPrjIdRelaEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(viewRegionCmPrjIdRela_Controller, strAction);

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
          viewRegionCmPrjIdRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ViewRegionCmPrjIdRela_GetObjLstByJSONObjLst(returnObjLst);
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
        viewRegionCmPrjIdRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewRegionCmPrjIdRela_ConstructorName,
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
 * @param strRegionId,strCmPrjId:关键字列表
 * @returns 获取删除的结果
 **/
export async function ViewRegionCmPrjIdRela_DelRecKeyLstAsync(
  strRegionId: string,
  strCmPrjId: string,
): Promise<number> {
  const strThisFuncName = 'DelRecKeyLstAsync';
  const strAction = 'DelRecKeyLst';
  const strUrl = GetWebApiUrl(viewRegionCmPrjIdRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      RegionId: strRegionId,
      CmPrjId: strCmPrjId,
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
        viewRegionCmPrjIdRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewRegionCmPrjIdRela_ConstructorName,
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
 * @param arrKeyLsts:关键字列表, 关键字是多个字段的组合
 * @returns 实际删除记录的个数
 **/
export async function ViewRegionCmPrjIdRela_DelRecKeyLstsAsync(
  arrKeyLsts: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelRecKeyLstsAsync';
  const strAction = 'DelRecKeyLsts';
  const strUrl = GetWebApiUrl(viewRegionCmPrjIdRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrKeyLsts, config);
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
        viewRegionCmPrjIdRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewRegionCmPrjIdRela_ConstructorName,
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
export async function ViewRegionCmPrjIdRela_DelViewRegionCmPrjIdRelasByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelViewRegionCmPrjIdRelasByCondAsync';
  const strAction = 'DelViewRegionCmPrjIdRelasByCond';
  const strUrl = GetWebApiUrl(viewRegionCmPrjIdRela_Controller, strAction);

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
        viewRegionCmPrjIdRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewRegionCmPrjIdRela_ConstructorName,
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
 * @param objViewRegionCmPrjIdRelaEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function ViewRegionCmPrjIdRela_AddNewRecordAsync(
  objViewRegionCmPrjIdRelaEN: clsViewRegionCmPrjIdRelaEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  if (objViewRegionCmPrjIdRelaEN.regionId === null || objViewRegionCmPrjIdRelaEN.regionId === '') {
    const strMsg = '需要的对象的关键字为空,不能添加!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objViewRegionCmPrjIdRelaEN);
  const strUrl = GetWebApiUrl(viewRegionCmPrjIdRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objViewRegionCmPrjIdRelaEN, config);
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
        viewRegionCmPrjIdRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewRegionCmPrjIdRela_ConstructorName,
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
 * @param objViewRegionCmPrjIdRelaEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function ViewRegionCmPrjIdRela_AddNewRecordWithMaxIdAsync(
  objViewRegionCmPrjIdRelaEN: clsViewRegionCmPrjIdRelaEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(viewRegionCmPrjIdRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objViewRegionCmPrjIdRelaEN, config);
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
        viewRegionCmPrjIdRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewRegionCmPrjIdRela_ConstructorName,
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
 * @param objViewRegionCmPrjIdRelaEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function ViewRegionCmPrjIdRela_AddNewRecordWithReturnKeyAsync(
  objViewRegionCmPrjIdRelaEN: clsViewRegionCmPrjIdRelaEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(viewRegionCmPrjIdRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objViewRegionCmPrjIdRelaEN, config);
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
        viewRegionCmPrjIdRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewRegionCmPrjIdRela_ConstructorName,
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
 * @param objViewRegionCmPrjIdRelaEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function ViewRegionCmPrjIdRela_UpdateRecordAsync(
  objViewRegionCmPrjIdRelaEN: clsViewRegionCmPrjIdRelaEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objViewRegionCmPrjIdRelaEN.sfUpdFldSetStr === undefined ||
    objViewRegionCmPrjIdRelaEN.sfUpdFldSetStr === null ||
    objViewRegionCmPrjIdRelaEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objViewRegionCmPrjIdRelaEN.regionId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(viewRegionCmPrjIdRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objViewRegionCmPrjIdRelaEN, config);
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
        viewRegionCmPrjIdRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewRegionCmPrjIdRela_ConstructorName,
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
 * @param objViewRegionCmPrjIdRelaEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function ViewRegionCmPrjIdRela_UpdateWithConditionAsync(
  objViewRegionCmPrjIdRelaEN: clsViewRegionCmPrjIdRelaEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objViewRegionCmPrjIdRelaEN.sfUpdFldSetStr === undefined ||
    objViewRegionCmPrjIdRelaEN.sfUpdFldSetStr === null ||
    objViewRegionCmPrjIdRelaEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objViewRegionCmPrjIdRelaEN.regionId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(viewRegionCmPrjIdRela_Controller, strAction);
  objViewRegionCmPrjIdRelaEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objViewRegionCmPrjIdRelaEN, config);
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
        viewRegionCmPrjIdRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewRegionCmPrjIdRela_ConstructorName,
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
export async function ViewRegionCmPrjIdRela_IsExistRecordAsync(
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(viewRegionCmPrjIdRela_Controller, strAction);

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
        viewRegionCmPrjIdRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewRegionCmPrjIdRela_ConstructorName,
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
 * @param strRegionId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function ViewRegionCmPrjIdRela_IsExistAsync(strRegionId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(viewRegionCmPrjIdRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strRegionId,
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
        viewRegionCmPrjIdRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewRegionCmPrjIdRela_ConstructorName,
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
export async function ViewRegionCmPrjIdRela_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(viewRegionCmPrjIdRela_Controller, strAction);

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
        viewRegionCmPrjIdRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewRegionCmPrjIdRela_ConstructorName,
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
export async function ViewRegionCmPrjIdRela_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(viewRegionCmPrjIdRela_Controller, strAction);

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
        viewRegionCmPrjIdRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewRegionCmPrjIdRela_ConstructorName,
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
export function ViewRegionCmPrjIdRela_GetWebApiUrl(
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
//该表没有使用Cache,不需要生成[ReFreshCache]函数;
//该表没有使用Cache,不需要生成[ReFreshThisCache]函数;
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function ViewRegionCmPrjIdRela_CheckPropertyNew(
  pobjViewRegionCmPrjIdRelaEN: clsViewRegionCmPrjIdRelaEN,
) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjViewRegionCmPrjIdRelaEN.regionId) == false &&
    GetStrLen(pobjViewRegionCmPrjIdRelaEN.regionId) > 10
  ) {
    throw new Error(
      '(errid:Watl000413)字段[区域Id(regionId)]的长度不能超过10(In 界面区域CmPrjId关系(ViewRegionCmPrjIdRela))!值:$(pobjViewRegionCmPrjIdRelaEN.regionId)(clsViewRegionCmPrjIdRelaBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewRegionCmPrjIdRelaEN.cmPrjId) == false &&
    GetStrLen(pobjViewRegionCmPrjIdRelaEN.cmPrjId) > 6
  ) {
    throw new Error(
      '(errid:Watl000413)字段[CM工程Id(cmPrjId)]的长度不能超过6(In 界面区域CmPrjId关系(ViewRegionCmPrjIdRela))!值:$(pobjViewRegionCmPrjIdRelaEN.cmPrjId)(clsViewRegionCmPrjIdRelaBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewRegionCmPrjIdRelaEN.updUser) == false &&
    GetStrLen(pobjViewRegionCmPrjIdRelaEN.updUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改者(updUser)]的长度不能超过20(In 界面区域CmPrjId关系(ViewRegionCmPrjIdRela))!值:$(pobjViewRegionCmPrjIdRelaEN.updUser)(clsViewRegionCmPrjIdRelaBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewRegionCmPrjIdRelaEN.updDate) == false &&
    GetStrLen(pobjViewRegionCmPrjIdRelaEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 界面区域CmPrjId关系(ViewRegionCmPrjIdRela))!值:$(pobjViewRegionCmPrjIdRelaEN.updDate)(clsViewRegionCmPrjIdRelaBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewRegionCmPrjIdRelaEN.memo) == false &&
    GetStrLen(pobjViewRegionCmPrjIdRelaEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In 界面区域CmPrjId关系(ViewRegionCmPrjIdRela))!值:$(pobjViewRegionCmPrjIdRelaEN.memo)(clsViewRegionCmPrjIdRelaBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjViewRegionCmPrjIdRelaEN.regionId) == false &&
    undefined !== pobjViewRegionCmPrjIdRelaEN.regionId &&
    tzDataType.isString(pobjViewRegionCmPrjIdRelaEN.regionId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[区域Id(regionId)]的值:[$(pobjViewRegionCmPrjIdRelaEN.regionId)], 非法,应该为字符型(In 界面区域CmPrjId关系(ViewRegionCmPrjIdRela))!(clsViewRegionCmPrjIdRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewRegionCmPrjIdRelaEN.cmPrjId) == false &&
    undefined !== pobjViewRegionCmPrjIdRelaEN.cmPrjId &&
    tzDataType.isString(pobjViewRegionCmPrjIdRelaEN.cmPrjId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[CM工程Id(cmPrjId)]的值:[$(pobjViewRegionCmPrjIdRelaEN.cmPrjId)], 非法,应该为字符型(In 界面区域CmPrjId关系(ViewRegionCmPrjIdRela))!(clsViewRegionCmPrjIdRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewRegionCmPrjIdRelaEN.updUser) == false &&
    undefined !== pobjViewRegionCmPrjIdRelaEN.updUser &&
    tzDataType.isString(pobjViewRegionCmPrjIdRelaEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改者(updUser)]的值:[$(pobjViewRegionCmPrjIdRelaEN.updUser)], 非法,应该为字符型(In 界面区域CmPrjId关系(ViewRegionCmPrjIdRela))!(clsViewRegionCmPrjIdRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewRegionCmPrjIdRelaEN.updDate) == false &&
    undefined !== pobjViewRegionCmPrjIdRelaEN.updDate &&
    tzDataType.isString(pobjViewRegionCmPrjIdRelaEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjViewRegionCmPrjIdRelaEN.updDate)], 非法,应该为字符型(In 界面区域CmPrjId关系(ViewRegionCmPrjIdRela))!(clsViewRegionCmPrjIdRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewRegionCmPrjIdRelaEN.memo) == false &&
    undefined !== pobjViewRegionCmPrjIdRelaEN.memo &&
    tzDataType.isString(pobjViewRegionCmPrjIdRelaEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[说明(memo)]的值:[$(pobjViewRegionCmPrjIdRelaEN.memo)], 非法,应该为字符型(In 界面区域CmPrjId关系(ViewRegionCmPrjIdRela))!(clsViewRegionCmPrjIdRelaBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function ViewRegionCmPrjIdRela_CheckProperty4Update(
  pobjViewRegionCmPrjIdRelaEN: clsViewRegionCmPrjIdRelaEN,
) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjViewRegionCmPrjIdRelaEN.regionId) == false &&
    GetStrLen(pobjViewRegionCmPrjIdRelaEN.regionId) > 10
  ) {
    throw new Error(
      '(errid:Watl000416)字段[区域Id(regionId)]的长度不能超过10(In 界面区域CmPrjId关系(ViewRegionCmPrjIdRela))!值:$(pobjViewRegionCmPrjIdRelaEN.regionId)(clsViewRegionCmPrjIdRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewRegionCmPrjIdRelaEN.cmPrjId) == false &&
    GetStrLen(pobjViewRegionCmPrjIdRelaEN.cmPrjId) > 6
  ) {
    throw new Error(
      '(errid:Watl000416)字段[CM工程Id(cmPrjId)]的长度不能超过6(In 界面区域CmPrjId关系(ViewRegionCmPrjIdRela))!值:$(pobjViewRegionCmPrjIdRelaEN.cmPrjId)(clsViewRegionCmPrjIdRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewRegionCmPrjIdRelaEN.updUser) == false &&
    GetStrLen(pobjViewRegionCmPrjIdRelaEN.updUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改者(updUser)]的长度不能超过20(In 界面区域CmPrjId关系(ViewRegionCmPrjIdRela))!值:$(pobjViewRegionCmPrjIdRelaEN.updUser)(clsViewRegionCmPrjIdRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewRegionCmPrjIdRelaEN.updDate) == false &&
    GetStrLen(pobjViewRegionCmPrjIdRelaEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 界面区域CmPrjId关系(ViewRegionCmPrjIdRela))!值:$(pobjViewRegionCmPrjIdRelaEN.updDate)(clsViewRegionCmPrjIdRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewRegionCmPrjIdRelaEN.memo) == false &&
    GetStrLen(pobjViewRegionCmPrjIdRelaEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In 界面区域CmPrjId关系(ViewRegionCmPrjIdRela))!值:$(pobjViewRegionCmPrjIdRelaEN.memo)(clsViewRegionCmPrjIdRelaBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjViewRegionCmPrjIdRelaEN.regionId) == false &&
    undefined !== pobjViewRegionCmPrjIdRelaEN.regionId &&
    tzDataType.isString(pobjViewRegionCmPrjIdRelaEN.regionId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[区域Id(regionId)]的值:[$(pobjViewRegionCmPrjIdRelaEN.regionId)], 非法,应该为字符型(In 界面区域CmPrjId关系(ViewRegionCmPrjIdRela))!(clsViewRegionCmPrjIdRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewRegionCmPrjIdRelaEN.cmPrjId) == false &&
    undefined !== pobjViewRegionCmPrjIdRelaEN.cmPrjId &&
    tzDataType.isString(pobjViewRegionCmPrjIdRelaEN.cmPrjId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[CM工程Id(cmPrjId)]的值:[$(pobjViewRegionCmPrjIdRelaEN.cmPrjId)], 非法,应该为字符型(In 界面区域CmPrjId关系(ViewRegionCmPrjIdRela))!(clsViewRegionCmPrjIdRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewRegionCmPrjIdRelaEN.updUser) == false &&
    undefined !== pobjViewRegionCmPrjIdRelaEN.updUser &&
    tzDataType.isString(pobjViewRegionCmPrjIdRelaEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改者(updUser)]的值:[$(pobjViewRegionCmPrjIdRelaEN.updUser)], 非法,应该为字符型(In 界面区域CmPrjId关系(ViewRegionCmPrjIdRela))!(clsViewRegionCmPrjIdRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewRegionCmPrjIdRelaEN.updDate) == false &&
    undefined !== pobjViewRegionCmPrjIdRelaEN.updDate &&
    tzDataType.isString(pobjViewRegionCmPrjIdRelaEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjViewRegionCmPrjIdRelaEN.updDate)], 非法,应该为字符型(In 界面区域CmPrjId关系(ViewRegionCmPrjIdRela))!(clsViewRegionCmPrjIdRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewRegionCmPrjIdRelaEN.memo) == false &&
    undefined !== pobjViewRegionCmPrjIdRelaEN.memo &&
    tzDataType.isString(pobjViewRegionCmPrjIdRelaEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[说明(memo)]的值:[$(pobjViewRegionCmPrjIdRelaEN.memo)], 非法,应该为字符型(In 界面区域CmPrjId关系(ViewRegionCmPrjIdRela))!(clsViewRegionCmPrjIdRelaBL:CheckProperty4Update)',
    );
  }
  //检查主键是否为Null或者空!
  if (IsNullOrEmpty(pobjViewRegionCmPrjIdRelaEN.regionId) === true) {
    throw new Error(
      '(errid:Watl000064)字段[区域Id]不能为空(In 界面区域CmPrjId关系)!(clsViewRegionCmPrjIdRelaBL:CheckProperty4Update)',
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
export function ViewRegionCmPrjIdRela_GetJSONStrByObj(
  pobjViewRegionCmPrjIdRelaEN: clsViewRegionCmPrjIdRelaEN,
): string {
  pobjViewRegionCmPrjIdRelaEN.sfUpdFldSetStr = pobjViewRegionCmPrjIdRelaEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjViewRegionCmPrjIdRelaEN);
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
export function ViewRegionCmPrjIdRela_GetObjLstByJSONStr(
  strJSON: string,
): Array<clsViewRegionCmPrjIdRelaEN> {
  let arrViewRegionCmPrjIdRelaObjLst = new Array<clsViewRegionCmPrjIdRelaEN>();
  if (strJSON === '') {
    return arrViewRegionCmPrjIdRelaObjLst;
  }
  try {
    arrViewRegionCmPrjIdRelaObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrViewRegionCmPrjIdRelaObjLst;
  }
  return arrViewRegionCmPrjIdRelaObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrViewRegionCmPrjIdRelaObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function ViewRegionCmPrjIdRela_GetObjLstByJSONObjLst(
  arrViewRegionCmPrjIdRelaObjLstS: Array<clsViewRegionCmPrjIdRelaEN>,
): Array<clsViewRegionCmPrjIdRelaEN> {
  const arrViewRegionCmPrjIdRelaObjLst = new Array<clsViewRegionCmPrjIdRelaEN>();
  for (const objInFor of arrViewRegionCmPrjIdRelaObjLstS) {
    const obj1 = ViewRegionCmPrjIdRela_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrViewRegionCmPrjIdRelaObjLst.push(obj1);
  }
  return arrViewRegionCmPrjIdRelaObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function ViewRegionCmPrjIdRela_GetObjByJSONStr(strJSON: string): clsViewRegionCmPrjIdRelaEN {
  let pobjViewRegionCmPrjIdRelaEN = new clsViewRegionCmPrjIdRelaEN();
  if (strJSON === '') {
    return pobjViewRegionCmPrjIdRelaEN;
  }
  try {
    pobjViewRegionCmPrjIdRelaEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjViewRegionCmPrjIdRelaEN;
  }
  return pobjViewRegionCmPrjIdRelaEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function ViewRegionCmPrjIdRela_GetCombineCondition(
  objViewRegionCmPrjIdRelaCond: clsViewRegionCmPrjIdRelaEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objViewRegionCmPrjIdRelaCond.dicFldComparisonOp,
      clsViewRegionCmPrjIdRelaEN.con_RegionId,
    ) == true
  ) {
    const strComparisonOpRegionId: string =
      objViewRegionCmPrjIdRelaCond.dicFldComparisonOp[clsViewRegionCmPrjIdRelaEN.con_RegionId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewRegionCmPrjIdRelaEN.con_RegionId,
      objViewRegionCmPrjIdRelaCond.regionId,
      strComparisonOpRegionId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewRegionCmPrjIdRelaCond.dicFldComparisonOp,
      clsViewRegionCmPrjIdRelaEN.con_CmPrjId,
    ) == true
  ) {
    const strComparisonOpCmPrjId: string =
      objViewRegionCmPrjIdRelaCond.dicFldComparisonOp[clsViewRegionCmPrjIdRelaEN.con_CmPrjId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewRegionCmPrjIdRelaEN.con_CmPrjId,
      objViewRegionCmPrjIdRelaCond.cmPrjId,
      strComparisonOpCmPrjId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewRegionCmPrjIdRelaCond.dicFldComparisonOp,
      clsViewRegionCmPrjIdRelaEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objViewRegionCmPrjIdRelaCond.dicFldComparisonOp[clsViewRegionCmPrjIdRelaEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewRegionCmPrjIdRelaEN.con_UpdUser,
      objViewRegionCmPrjIdRelaCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewRegionCmPrjIdRelaCond.dicFldComparisonOp,
      clsViewRegionCmPrjIdRelaEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objViewRegionCmPrjIdRelaCond.dicFldComparisonOp[clsViewRegionCmPrjIdRelaEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewRegionCmPrjIdRelaEN.con_UpdDate,
      objViewRegionCmPrjIdRelaCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewRegionCmPrjIdRelaCond.dicFldComparisonOp,
      clsViewRegionCmPrjIdRelaEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objViewRegionCmPrjIdRelaCond.dicFldComparisonOp[clsViewRegionCmPrjIdRelaEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewRegionCmPrjIdRelaEN.con_Memo,
      objViewRegionCmPrjIdRelaCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objViewRegionCmPrjIdRelaENS:源对象
 * @param objViewRegionCmPrjIdRelaENT:目标对象
 */
export function ViewRegionCmPrjIdRela_GetObjFromJsonObj(
  objViewRegionCmPrjIdRelaENS: clsViewRegionCmPrjIdRelaEN,
): clsViewRegionCmPrjIdRelaEN {
  const objViewRegionCmPrjIdRelaENT: clsViewRegionCmPrjIdRelaEN = new clsViewRegionCmPrjIdRelaEN();
  ObjectAssign(objViewRegionCmPrjIdRelaENT, objViewRegionCmPrjIdRelaENS);
  return objViewRegionCmPrjIdRelaENT;
}
