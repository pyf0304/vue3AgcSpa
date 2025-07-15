/**
 * 类名:clsListViewRegionWApi
 * 表名:ListViewRegion(00050131)
 * 版本:2023.10.12.1(服务器:WIN-SRV103-116)
 * 日期:2023/10/12 14:38:08
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
 * ListView区域(ListViewRegion)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2023年10月12日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty, GetStrLen, tzDataType, Format } from '@/ts/PubFun/clsString';
import { clsListViewRegionEN } from '@/ts/L0Entity/RegionManage/clsListViewRegionEN';
import { GetExceptionStr, myShowErrorMsg, ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const listViewRegion_Controller = 'ListViewRegionApi';
export const listViewRegion_ConstructorName = 'listViewRegion';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strRegionId:关键字
 * @returns 对象
 **/
export async function ListViewRegion_GetObjByRegionIdAsync(
  strRegionId: string,
): Promise<clsListViewRegionEN | null> {
  const strThisFuncName = 'GetObjByRegionIdAsync';

  if (IsNullOrEmpty(strRegionId) == true) {
    const strMsg = Format(
      '参数:[strRegionId]不能为空!(In clsListViewRegionWApi.GetObjByRegionIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strRegionId.length != 10) {
    const strMsg = Format(
      '缓存分类变量:[strRegionId]的长度:[{0}]不正确!(clsListViewRegionWApi.GetObjByRegionIdAsync)',
      strRegionId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByRegionId';
  const strUrl = GetWebApiUrl(listViewRegion_Controller, strAction);

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
      const returnObj = data.returnObj;
      if (returnObj == null) {
        return null;
      }
      //console.log(returnObj);
      const objListViewRegion = ListViewRegion_GetObjFromJsonObj(returnObj);
      return objListViewRegion;
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
        listViewRegion_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        listViewRegion_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[GetObjByRegionIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )
//该表没有使用Cache,不需要生成[GetObjByRegionIdlocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
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
export function ListViewRegion_SortFunDefa(a: clsListViewRegionEN, b: clsListViewRegionEN): number {
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
export function ListViewRegion_SortFunDefa2Fld(
  a: clsListViewRegionEN,
  b: clsListViewRegionEN,
): number {
  if (a.fontName == b.fontName) return a.fontSize.localeCompare(b.fontSize);
  else return a.fontName.localeCompare(b.fontName);
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
export function ListViewRegion_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsListViewRegionEN.con_RegionId:
        return (a: clsListViewRegionEN, b: clsListViewRegionEN) => {
          return a.regionId.localeCompare(b.regionId);
        };
      case clsListViewRegionEN.con_FontName:
        return (a: clsListViewRegionEN, b: clsListViewRegionEN) => {
          if (a.fontName == null) return -1;
          if (b.fontName == null) return 1;
          return a.fontName.localeCompare(b.fontName);
        };
      case clsListViewRegionEN.con_FontSize:
        return (a: clsListViewRegionEN, b: clsListViewRegionEN) => {
          if (a.fontSize == null) return -1;
          if (b.fontSize == null) return 1;
          return a.fontSize.localeCompare(b.fontSize);
        };
      case clsListViewRegionEN.con_IsCheck:
        return (a: clsListViewRegionEN) => {
          if (a.isCheck == true) return 1;
          else return -1;
        };
      case clsListViewRegionEN.con_ColNum:
        return (a: clsListViewRegionEN, b: clsListViewRegionEN) => {
          return a.colNum - b.colNum;
        };
      case clsListViewRegionEN.con_Memo:
        return (a: clsListViewRegionEN, b: clsListViewRegionEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[ListViewRegion]中不存在!(in ${listViewRegion_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsListViewRegionEN.con_RegionId:
        return (a: clsListViewRegionEN, b: clsListViewRegionEN) => {
          return b.regionId.localeCompare(a.regionId);
        };
      case clsListViewRegionEN.con_FontName:
        return (a: clsListViewRegionEN, b: clsListViewRegionEN) => {
          if (b.fontName == null) return -1;
          if (a.fontName == null) return 1;
          return b.fontName.localeCompare(a.fontName);
        };
      case clsListViewRegionEN.con_FontSize:
        return (a: clsListViewRegionEN, b: clsListViewRegionEN) => {
          if (b.fontSize == null) return -1;
          if (a.fontSize == null) return 1;
          return b.fontSize.localeCompare(a.fontSize);
        };
      case clsListViewRegionEN.con_IsCheck:
        return (b: clsListViewRegionEN) => {
          if (b.isCheck == true) return 1;
          else return -1;
        };
      case clsListViewRegionEN.con_ColNum:
        return (a: clsListViewRegionEN, b: clsListViewRegionEN) => {
          return b.colNum - a.colNum;
        };
      case clsListViewRegionEN.con_Memo:
        return (a: clsListViewRegionEN, b: clsListViewRegionEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[ListViewRegion]中不存在!(in ${listViewRegion_ConstructorName}.${strThisFuncName})`;
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
export async function ListViewRegion_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsListViewRegionEN.con_RegionId:
      return (obj: clsListViewRegionEN) => {
        return obj.regionId === value;
      };
    case clsListViewRegionEN.con_FontName:
      return (obj: clsListViewRegionEN) => {
        return obj.fontName === value;
      };
    case clsListViewRegionEN.con_FontSize:
      return (obj: clsListViewRegionEN) => {
        return obj.fontSize === value;
      };
    case clsListViewRegionEN.con_IsCheck:
      return (obj: clsListViewRegionEN) => {
        return obj.isCheck === value;
      };
    case clsListViewRegionEN.con_ColNum:
      return (obj: clsListViewRegionEN) => {
        return obj.colNum === value;
      };
    case clsListViewRegionEN.con_Memo:
      return (obj: clsListViewRegionEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[ListViewRegion]中不存在!(in ${listViewRegion_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}
//该表没有使用Cache,不需要生成[ListViewRegion__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function ListViewRegion_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(listViewRegion_Controller, strAction);

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
        listViewRegion_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        listViewRegion_ConstructorName,
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
export async function ListViewRegion_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(listViewRegion_Controller, strAction);

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
        listViewRegion_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        listViewRegion_ConstructorName,
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
export async function ListViewRegion_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsListViewRegionEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(listViewRegion_Controller, strAction);

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
      const objListViewRegion = ListViewRegion_GetObjFromJsonObj(returnObj);
      return objListViewRegion;
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
        listViewRegion_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        listViewRegion_ConstructorName,
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
export async function ListViewRegion_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsListViewRegionEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(listViewRegion_Controller, strAction);

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
          listViewRegion_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ListViewRegion_GetObjLstByJSONObjLst(returnObjLst);
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
        listViewRegion_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        listViewRegion_ConstructorName,
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
 * @param arrRegionId:关键字列表
 * @returns 对象列表
 **/
export async function ListViewRegion_GetObjLstByRegionIdLstAsync(
  arrRegionId: Array<string>,
): Promise<Array<clsListViewRegionEN>> {
  const strThisFuncName = 'GetObjLstByRegionIdLstAsync';
  const strAction = 'GetObjLstByRegionIdLst';
  const strUrl = GetWebApiUrl(listViewRegion_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrRegionId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          listViewRegion_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ListViewRegion_GetObjLstByJSONObjLst(returnObjLst);
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
        listViewRegion_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        listViewRegion_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[GetObjLstByRegionIdLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

/**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export async function ListViewRegion_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsListViewRegionEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(listViewRegion_Controller, strAction);

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
          listViewRegion_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ListViewRegion_GetObjLstByJSONObjLst(returnObjLst);
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
        listViewRegion_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        listViewRegion_ConstructorName,
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
export async function ListViewRegion_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsListViewRegionEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(listViewRegion_Controller, strAction);

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
          listViewRegion_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ListViewRegion_GetObjLstByJSONObjLst(returnObjLst);
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
        listViewRegion_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        listViewRegion_ConstructorName,
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
export async function ListViewRegion_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsListViewRegionEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsListViewRegionEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(listViewRegion_Controller, strAction);

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
          listViewRegion_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ListViewRegion_GetObjLstByJSONObjLst(returnObjLst);
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
        listViewRegion_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        listViewRegion_ConstructorName,
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
 * @param strRegionId:关键字
 * @returns 获取删除的结果
 **/
export async function ListViewRegion_DelRecordAsync(strRegionId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(listViewRegion_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strRegionId);

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
        listViewRegion_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        listViewRegion_ConstructorName,
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
 * @param arrRegionId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function ListViewRegion_DelListViewRegionsAsync(
  arrRegionId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelListViewRegionsAsync';
  const strAction = 'DelListViewRegions';
  const strUrl = GetWebApiUrl(listViewRegion_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrRegionId, config);
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
        listViewRegion_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        listViewRegion_ConstructorName,
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
export async function ListViewRegion_DelListViewRegionsByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelListViewRegionsByCondAsync';
  const strAction = 'DelListViewRegionsByCond';
  const strUrl = GetWebApiUrl(listViewRegion_Controller, strAction);

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
        listViewRegion_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        listViewRegion_ConstructorName,
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
 * @param objListViewRegionEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function ListViewRegion_AddNewRecordAsync(
  objListViewRegionEN: clsListViewRegionEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  if (objListViewRegionEN.regionId === null || objListViewRegionEN.regionId === '') {
    const strMsg = '需要的对象的关键字为空,不能添加!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objListViewRegionEN);
  const strUrl = GetWebApiUrl(listViewRegion_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objListViewRegionEN, config);
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
        listViewRegion_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        listViewRegion_ConstructorName,
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
 * @param objListViewRegionEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function ListViewRegion_AddNewRecordWithMaxIdAsync(
  objListViewRegionEN: clsListViewRegionEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(listViewRegion_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objListViewRegionEN, config);
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
        listViewRegion_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        listViewRegion_ConstructorName,
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
 * @param objListViewRegionEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function ListViewRegion_AddNewRecordWithReturnKeyAsync(
  objListViewRegionEN: clsListViewRegionEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(listViewRegion_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objListViewRegionEN, config);
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
        listViewRegion_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        listViewRegion_ConstructorName,
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
 * @param objListViewRegionEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function ListViewRegion_UpdateRecordAsync(
  objListViewRegionEN: clsListViewRegionEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objListViewRegionEN.sfUpdFldSetStr === undefined ||
    objListViewRegionEN.sfUpdFldSetStr === null ||
    objListViewRegionEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objListViewRegionEN.regionId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(listViewRegion_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objListViewRegionEN, config);
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
        listViewRegion_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        listViewRegion_ConstructorName,
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
 * @param objListViewRegionEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function ListViewRegion_UpdateWithConditionAsync(
  objListViewRegionEN: clsListViewRegionEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objListViewRegionEN.sfUpdFldSetStr === undefined ||
    objListViewRegionEN.sfUpdFldSetStr === null ||
    objListViewRegionEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objListViewRegionEN.regionId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(listViewRegion_Controller, strAction);
  objListViewRegionEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objListViewRegionEN, config);
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
        listViewRegion_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        listViewRegion_ConstructorName,
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
export async function ListViewRegion_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(listViewRegion_Controller, strAction);

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
        listViewRegion_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        listViewRegion_ConstructorName,
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
export async function ListViewRegion_IsExistAsync(strRegionId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(listViewRegion_Controller, strAction);

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
        listViewRegion_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        listViewRegion_ConstructorName,
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
export async function ListViewRegion_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(listViewRegion_Controller, strAction);

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
        listViewRegion_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        listViewRegion_ConstructorName,
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
export async function ListViewRegion_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(listViewRegion_Controller, strAction);

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
        listViewRegion_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        listViewRegion_ConstructorName,
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
export function ListViewRegion_GetWebApiUrl(strController: string, strAction: string): string {
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
export function ListViewRegion_CheckPropertyNew(pobjListViewRegionEN: clsListViewRegionEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (
    null === pobjListViewRegionEN.colNum ||
    (pobjListViewRegionEN.colNum != null && pobjListViewRegionEN.colNum.toString() === '')
  ) {
    throw new Error(
      '(errid:Watl000411)字段[列数]不能为空(In ListView区域)!(clsListViewRegionBL:CheckPropertyNew0)',
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjListViewRegionEN.regionId) == false &&
    GetStrLen(pobjListViewRegionEN.regionId) > 10
  ) {
    throw new Error(
      '(errid:Watl000413)字段[区域Id(regionId)]的长度不能超过10(In ListView区域(ListViewRegion))!值:$(pobjListViewRegionEN.regionId)(clsListViewRegionBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjListViewRegionEN.fontName) == false &&
    GetStrLen(pobjListViewRegionEN.fontName) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[字体(fontName)]的长度不能超过20(In ListView区域(ListViewRegion))!值:$(pobjListViewRegionEN.fontName)(clsListViewRegionBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjListViewRegionEN.fontSize) == false &&
    GetStrLen(pobjListViewRegionEN.fontSize) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[字号(fontSize)]的长度不能超过20(In ListView区域(ListViewRegion))!值:$(pobjListViewRegionEN.fontSize)(clsListViewRegionBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjListViewRegionEN.memo) == false &&
    GetStrLen(pobjListViewRegionEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In ListView区域(ListViewRegion))!值:$(pobjListViewRegionEN.memo)(clsListViewRegionBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjListViewRegionEN.regionId) == false &&
    undefined !== pobjListViewRegionEN.regionId &&
    tzDataType.isString(pobjListViewRegionEN.regionId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[区域Id(regionId)]的值:[$(pobjListViewRegionEN.regionId)], 非法,应该为字符型(In ListView区域(ListViewRegion))!(clsListViewRegionBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjListViewRegionEN.fontName) == false &&
    undefined !== pobjListViewRegionEN.fontName &&
    tzDataType.isString(pobjListViewRegionEN.fontName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[字体(fontName)]的值:[$(pobjListViewRegionEN.fontName)], 非法,应该为字符型(In ListView区域(ListViewRegion))!(clsListViewRegionBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjListViewRegionEN.fontSize) == false &&
    undefined !== pobjListViewRegionEN.fontSize &&
    tzDataType.isString(pobjListViewRegionEN.fontSize) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[字号(fontSize)]的值:[$(pobjListViewRegionEN.fontSize)], 非法,应该为字符型(In ListView区域(ListViewRegion))!(clsListViewRegionBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjListViewRegionEN.isCheck &&
    undefined !== pobjListViewRegionEN.isCheck &&
    tzDataType.isBoolean(pobjListViewRegionEN.isCheck) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否复选框(isCheck)]的值:[$(pobjListViewRegionEN.isCheck)], 非法,应该为布尔型(In ListView区域(ListViewRegion))!(clsListViewRegionBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjListViewRegionEN.colNum &&
    undefined !== pobjListViewRegionEN.colNum &&
    tzDataType.isNumber(pobjListViewRegionEN.colNum) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[列数(colNum)]的值:[$(pobjListViewRegionEN.colNum)], 非法,应该为数值型(In ListView区域(ListViewRegion))!(clsListViewRegionBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjListViewRegionEN.memo) == false &&
    undefined !== pobjListViewRegionEN.memo &&
    tzDataType.isString(pobjListViewRegionEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[说明(memo)]的值:[$(pobjListViewRegionEN.memo)], 非法,应该为字符型(In ListView区域(ListViewRegion))!(clsListViewRegionBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function ListViewRegion_CheckProperty4Update(pobjListViewRegionEN: clsListViewRegionEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjListViewRegionEN.regionId) == false &&
    GetStrLen(pobjListViewRegionEN.regionId) > 10
  ) {
    throw new Error(
      '(errid:Watl000416)字段[区域Id(regionId)]的长度不能超过10(In ListView区域(ListViewRegion))!值:$(pobjListViewRegionEN.regionId)(clsListViewRegionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjListViewRegionEN.fontName) == false &&
    GetStrLen(pobjListViewRegionEN.fontName) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[字体(fontName)]的长度不能超过20(In ListView区域(ListViewRegion))!值:$(pobjListViewRegionEN.fontName)(clsListViewRegionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjListViewRegionEN.fontSize) == false &&
    GetStrLen(pobjListViewRegionEN.fontSize) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[字号(fontSize)]的长度不能超过20(In ListView区域(ListViewRegion))!值:$(pobjListViewRegionEN.fontSize)(clsListViewRegionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjListViewRegionEN.memo) == false &&
    GetStrLen(pobjListViewRegionEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In ListView区域(ListViewRegion))!值:$(pobjListViewRegionEN.memo)(clsListViewRegionBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjListViewRegionEN.regionId) == false &&
    undefined !== pobjListViewRegionEN.regionId &&
    tzDataType.isString(pobjListViewRegionEN.regionId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[区域Id(regionId)]的值:[$(pobjListViewRegionEN.regionId)], 非法,应该为字符型(In ListView区域(ListViewRegion))!(clsListViewRegionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjListViewRegionEN.fontName) == false &&
    undefined !== pobjListViewRegionEN.fontName &&
    tzDataType.isString(pobjListViewRegionEN.fontName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[字体(fontName)]的值:[$(pobjListViewRegionEN.fontName)], 非法,应该为字符型(In ListView区域(ListViewRegion))!(clsListViewRegionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjListViewRegionEN.fontSize) == false &&
    undefined !== pobjListViewRegionEN.fontSize &&
    tzDataType.isString(pobjListViewRegionEN.fontSize) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[字号(fontSize)]的值:[$(pobjListViewRegionEN.fontSize)], 非法,应该为字符型(In ListView区域(ListViewRegion))!(clsListViewRegionBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjListViewRegionEN.isCheck &&
    undefined !== pobjListViewRegionEN.isCheck &&
    tzDataType.isBoolean(pobjListViewRegionEN.isCheck) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否复选框(isCheck)]的值:[$(pobjListViewRegionEN.isCheck)], 非法,应该为布尔型(In ListView区域(ListViewRegion))!(clsListViewRegionBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjListViewRegionEN.colNum &&
    undefined !== pobjListViewRegionEN.colNum &&
    tzDataType.isNumber(pobjListViewRegionEN.colNum) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[列数(colNum)]的值:[$(pobjListViewRegionEN.colNum)], 非法,应该为数值型(In ListView区域(ListViewRegion))!(clsListViewRegionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjListViewRegionEN.memo) == false &&
    undefined !== pobjListViewRegionEN.memo &&
    tzDataType.isString(pobjListViewRegionEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[说明(memo)]的值:[$(pobjListViewRegionEN.memo)], 非法,应该为字符型(In ListView区域(ListViewRegion))!(clsListViewRegionBL:CheckProperty4Update)',
    );
  }
  //检查主键是否为Null或者空!
  if (IsNullOrEmpty(pobjListViewRegionEN.regionId) === true) {
    throw new Error(
      '(errid:Watl000064)字段[区域Id]不能为空(In ListView区域)!(clsListViewRegionBL:CheckProperty4Update)',
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
export function ListViewRegion_GetJSONStrByObj(pobjListViewRegionEN: clsListViewRegionEN): string {
  pobjListViewRegionEN.sfUpdFldSetStr = pobjListViewRegionEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjListViewRegionEN);
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
export function ListViewRegion_GetObjLstByJSONStr(strJSON: string): Array<clsListViewRegionEN> {
  let arrListViewRegionObjLst = new Array<clsListViewRegionEN>();
  if (strJSON === '') {
    return arrListViewRegionObjLst;
  }
  try {
    arrListViewRegionObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrListViewRegionObjLst;
  }
  return arrListViewRegionObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrListViewRegionObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function ListViewRegion_GetObjLstByJSONObjLst(
  arrListViewRegionObjLstS: Array<clsListViewRegionEN>,
): Array<clsListViewRegionEN> {
  const arrListViewRegionObjLst = new Array<clsListViewRegionEN>();
  for (const objInFor of arrListViewRegionObjLstS) {
    const obj1 = ListViewRegion_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrListViewRegionObjLst.push(obj1);
  }
  return arrListViewRegionObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function ListViewRegion_GetObjByJSONStr(strJSON: string): clsListViewRegionEN {
  let pobjListViewRegionEN = new clsListViewRegionEN();
  if (strJSON === '') {
    return pobjListViewRegionEN;
  }
  try {
    pobjListViewRegionEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjListViewRegionEN;
  }
  return pobjListViewRegionEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function ListViewRegion_GetCombineCondition(
  objListViewRegionCond: clsListViewRegionEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objListViewRegionCond.dicFldComparisonOp,
      clsListViewRegionEN.con_RegionId,
    ) == true
  ) {
    const strComparisonOpRegionId: string =
      objListViewRegionCond.dicFldComparisonOp[clsListViewRegionEN.con_RegionId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsListViewRegionEN.con_RegionId,
      objListViewRegionCond.regionId,
      strComparisonOpRegionId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objListViewRegionCond.dicFldComparisonOp,
      clsListViewRegionEN.con_FontName,
    ) == true
  ) {
    const strComparisonOpFontName: string =
      objListViewRegionCond.dicFldComparisonOp[clsListViewRegionEN.con_FontName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsListViewRegionEN.con_FontName,
      objListViewRegionCond.fontName,
      strComparisonOpFontName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objListViewRegionCond.dicFldComparisonOp,
      clsListViewRegionEN.con_FontSize,
    ) == true
  ) {
    const strComparisonOpFontSize: string =
      objListViewRegionCond.dicFldComparisonOp[clsListViewRegionEN.con_FontSize];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsListViewRegionEN.con_FontSize,
      objListViewRegionCond.fontSize,
      strComparisonOpFontSize,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objListViewRegionCond.dicFldComparisonOp,
      clsListViewRegionEN.con_IsCheck,
    ) == true
  ) {
    if (objListViewRegionCond.isCheck == true) {
      strWhereCond += Format(" And {0} = '1'", clsListViewRegionEN.con_IsCheck);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsListViewRegionEN.con_IsCheck);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objListViewRegionCond.dicFldComparisonOp,
      clsListViewRegionEN.con_ColNum,
    ) == true
  ) {
    const strComparisonOpColNum: string =
      objListViewRegionCond.dicFldComparisonOp[clsListViewRegionEN.con_ColNum];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsListViewRegionEN.con_ColNum,
      objListViewRegionCond.colNum,
      strComparisonOpColNum,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objListViewRegionCond.dicFldComparisonOp,
      clsListViewRegionEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objListViewRegionCond.dicFldComparisonOp[clsListViewRegionEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsListViewRegionEN.con_Memo,
      objListViewRegionCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objListViewRegionENS:源对象
 * @param objListViewRegionENT:目标对象
 */
export function ListViewRegion_GetObjFromJsonObj(
  objListViewRegionENS: clsListViewRegionEN,
): clsListViewRegionEN {
  const objListViewRegionENT: clsListViewRegionEN = new clsListViewRegionEN();
  ObjectAssign(objListViewRegionENT, objListViewRegionENS);
  return objListViewRegionENT;
}
