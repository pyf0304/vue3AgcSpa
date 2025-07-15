/**
 * 类名:clsPrjTabAddiWApi
 * 表名:PrjTabAddi(00050635)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/14 22:27:55
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 应用类型:Vue应用InCore-TS(30)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:字段、表维护(Table_Field)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 工程表附加信息(PrjTabAddi)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2025年06月14日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty, Format, GetStrLen, tzDataType } from '@/ts/PubFun/clsString';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { ObjectAssign, GetExceptionStr, myShowErrorMsg } from '@/ts/PubFun/clsCommFunc4Web';
import { clsPrjTabAddiENEx } from '@/ts/L0Entity/Table_Field/clsPrjTabAddiENEx';
import { clsPrjTabAddiEN } from '@/ts/L0Entity/Table_Field/clsPrjTabAddiEN';
import { vPrjTab_Sim_func } from '@/ts/L3ForWApi/Table_Field/clsvPrjTab_SimWApi';
import { clsvPrjTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvPrjTab_SimEN';
import { FuncModule_Agc_func } from '@/ts/L3ForWApi/PrjManage/clsFuncModule_AgcWApi';
import { clsFuncModule_AgcEN } from '@/ts/L0Entity/PrjManage/clsFuncModule_AgcEN';
import { AddRecordResult } from '@/ts/PubFun/AddRecordResult';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';

export const prjTabAddi_Controller = 'PrjTabAddiApi';
export const prjTabAddi_ConstructorName = 'prjTabAddi';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strTabId:关键字
 * @returns 对象
 **/
export async function PrjTabAddi_GetObjByTabIdAsync(
  strTabId: string,
): Promise<clsPrjTabAddiEN | null> {
  const strThisFuncName = 'GetObjByTabIdAsync';

  if (IsNullOrEmpty(strTabId) == true) {
    const strMsg = Format('参数:[strTabId]不能为空!(In clsPrjTabAddiWApi.GetObjByTabIdAsync)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strTabId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strTabId]的长度:[{0}]不正确!(clsPrjTabAddiWApi.GetObjByTabIdAsync)',
      strTabId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByTabId';
  const strUrl = GetWebApiUrl(prjTabAddi_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strTabId,
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
      const objPrjTabAddi = PrjTabAddi_GetObjFromJsonObj(returnObj);
      return objPrjTabAddi;
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
        prjTabAddi_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTabAddi_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[GetObjByTabIdlocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[GetObjByTabIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )
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
export function PrjTabAddi_SortFunDefa(a: clsPrjTabAddiEN, b: clsPrjTabAddiEN): number {
  return a.tabId.localeCompare(b.tabId);
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
export function PrjTabAddi_SortFunDefa2Fld(a: clsPrjTabAddiEN, b: clsPrjTabAddiEN): number {
  if (a.columnWidth == b.columnWidth) return a.nodeHeight - b.nodeHeight;
  else return a.columnWidth - b.columnWidth;
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
export function PrjTabAddi_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsPrjTabAddiEN.con_TabId:
        return (a: clsPrjTabAddiEN, b: clsPrjTabAddiEN) => {
          return a.tabId.localeCompare(b.tabId);
        };
      case clsPrjTabAddiEN.con_ColumnWidth:
        return (a: clsPrjTabAddiEN, b: clsPrjTabAddiEN) => {
          return a.columnWidth - b.columnWidth;
        };
      case clsPrjTabAddiEN.con_NodeHeight:
        return (a: clsPrjTabAddiEN, b: clsPrjTabAddiEN) => {
          return a.nodeHeight - b.nodeHeight;
        };
      case clsPrjTabAddiEN.con_UpdUser:
        return (a: clsPrjTabAddiEN, b: clsPrjTabAddiEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsPrjTabAddiEN.con_UpdDate:
        return (a: clsPrjTabAddiEN, b: clsPrjTabAddiEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsPrjTabAddiEN.con_Memo:
        return (a: clsPrjTabAddiEN, b: clsPrjTabAddiEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[PrjTabAddi]中不存在!(in ${prjTabAddi_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsPrjTabAddiEN.con_TabId:
        return (a: clsPrjTabAddiEN, b: clsPrjTabAddiEN) => {
          return b.tabId.localeCompare(a.tabId);
        };
      case clsPrjTabAddiEN.con_ColumnWidth:
        return (a: clsPrjTabAddiEN, b: clsPrjTabAddiEN) => {
          return b.columnWidth - a.columnWidth;
        };
      case clsPrjTabAddiEN.con_NodeHeight:
        return (a: clsPrjTabAddiEN, b: clsPrjTabAddiEN) => {
          return b.nodeHeight - a.nodeHeight;
        };
      case clsPrjTabAddiEN.con_UpdUser:
        return (a: clsPrjTabAddiEN, b: clsPrjTabAddiEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsPrjTabAddiEN.con_UpdDate:
        return (a: clsPrjTabAddiEN, b: clsPrjTabAddiEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsPrjTabAddiEN.con_Memo:
        return (a: clsPrjTabAddiEN, b: clsPrjTabAddiEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[PrjTabAddi]中不存在!(in ${prjTabAddi_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}
//该表没有使用Cache,不需要生成[GetNameByTabIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function PrjTabAddi_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsPrjTabAddiEN.con_TabId:
      return (obj: clsPrjTabAddiEN) => {
        return obj.tabId === value;
      };
    case clsPrjTabAddiEN.con_ColumnWidth:
      return (obj: clsPrjTabAddiEN) => {
        return obj.columnWidth === value;
      };
    case clsPrjTabAddiEN.con_NodeHeight:
      return (obj: clsPrjTabAddiEN) => {
        return obj.nodeHeight === value;
      };
    case clsPrjTabAddiEN.con_UpdUser:
      return (obj: clsPrjTabAddiEN) => {
        return obj.updUser === value;
      };
    case clsPrjTabAddiEN.con_UpdDate:
      return (obj: clsPrjTabAddiEN) => {
        return obj.updDate === value;
      };
    case clsPrjTabAddiEN.con_Memo:
      return (obj: clsPrjTabAddiEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[PrjTabAddi]中不存在!(in ${prjTabAddi_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}
//该表没有使用Cache,不需要生成[func]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func )
//该表没有使用Cache,不需要生成[PrjTabAddi__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function PrjTabAddi_GetFldValueAsync(
  strFldName: string,
  strWhereCond: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetFldValueAsync';
  const strAction = 'GetFldValue';
  const strUrl = GetWebApiUrl(prjTabAddi_Controller, strAction);

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
        prjTabAddi_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTabAddi_ConstructorName,
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
export async function PrjTabAddi_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(prjTabAddi_Controller, strAction);

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
        prjTabAddi_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTabAddi_ConstructorName,
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
export async function PrjTabAddi_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(prjTabAddi_Controller, strAction);

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
        prjTabAddi_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTabAddi_ConstructorName,
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
export async function PrjTabAddi_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsPrjTabAddiEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(prjTabAddi_Controller, strAction);

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
      const objPrjTabAddi = PrjTabAddi_GetObjFromJsonObj(returnObj);
      return objPrjTabAddi;
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
        prjTabAddi_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTabAddi_ConstructorName,
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
export async function PrjTabAddi_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsPrjTabAddiEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(prjTabAddi_Controller, strAction);

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
          prjTabAddi_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = PrjTabAddi_GetObjLstByJSONObjLst(returnObjLst);
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
        prjTabAddi_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTabAddi_ConstructorName,
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
 * @param arrTabId:关键字列表
 * @returns 对象列表
 **/
export async function PrjTabAddi_GetObjLstByTabIdLstAsync(
  arrTabId: Array<string>,
): Promise<Array<clsPrjTabAddiEN>> {
  const strThisFuncName = 'GetObjLstByTabIdLstAsync';
  const strAction = 'GetObjLstByTabIdLst';
  const strUrl = GetWebApiUrl(prjTabAddi_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrTabId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          prjTabAddi_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = PrjTabAddi_GetObjLstByJSONObjLst(returnObjLst);
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
        prjTabAddi_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTabAddi_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[GetObjLstByTabIdLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

/**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export async function PrjTabAddi_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsPrjTabAddiEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(prjTabAddi_Controller, strAction);

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
          prjTabAddi_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = PrjTabAddi_GetObjLstByJSONObjLst(returnObjLst);
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
        prjTabAddi_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTabAddi_ConstructorName,
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
export async function PrjTabAddi_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsPrjTabAddiEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(prjTabAddi_Controller, strAction);

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
          prjTabAddi_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = PrjTabAddi_GetObjLstByJSONObjLst(returnObjLst);
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
        prjTabAddi_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTabAddi_ConstructorName,
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
export async function PrjTabAddi_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsPrjTabAddiEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsPrjTabAddiEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(prjTabAddi_Controller, strAction);

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
          prjTabAddi_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = PrjTabAddi_GetObjLstByJSONObjLst(returnObjLst);
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
        prjTabAddi_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTabAddi_ConstructorName,
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
 * @param strTabId:关键字
 * @returns 获取删除的结果
 **/
export async function PrjTabAddi_DelRecordAsync(strTabId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(prjTabAddi_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strTabId);

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
        prjTabAddi_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTabAddi_ConstructorName,
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
 * @param arrTabId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function PrjTabAddi_DelPrjTabAddisAsync(arrTabId: Array<string>): Promise<number> {
  const strThisFuncName = 'DelPrjTabAddisAsync';
  const strAction = 'DelPrjTabAddis';
  const strUrl = GetWebApiUrl(prjTabAddi_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrTabId, config);
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
        prjTabAddi_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTabAddi_ConstructorName,
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

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CopyToEx)
 * @param objPrjTabAddiENS:源对象
 * @returns 目标对象=>clsPrjTabAddiEN:objPrjTabAddiENT
 **/
export function PrjTabAddi_CopyToEx(objPrjTabAddiENS: clsPrjTabAddiEN): clsPrjTabAddiENEx {
  const strThisFuncName = PrjTabAddi_CopyToEx.name;
  const objPrjTabAddiENT = new clsPrjTabAddiENEx();
  try {
    ObjectAssign(objPrjTabAddiENT, objPrjTabAddiENS);
    return objPrjTabAddiENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001294)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      prjTabAddi_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objPrjTabAddiENT;
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function PrjTabAddi_FuncMapByFldName(
  strFldName: string,
  objPrjTabAddiEx: clsPrjTabAddiENEx,
) {
  const strThisFuncName = PrjTabAddi_FuncMapByFldName.name;
  strFldName = strFldName.replace('|Ex', '');
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsPrjTabAddiEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsPrjTabAddiENEx.con_FuncModuleName:
      return PrjTabAddi_FuncMapFuncModuleName(objPrjTabAddiEx);
    case clsPrjTabAddiENEx.con_TabName:
      return PrjTabAddi_FuncMapTabName(objPrjTabAddiEx);
    default:
      strMsg = Format(
        '扩展字段:[{0}]在字段值函数映射中不存在!(in {1})',
        strFldName,
        strThisFuncName,
      );
      console.error(strMsg);
  }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByExKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function PrjTabAddi_SortFunByExKey(strKey: string, AscOrDesc: string) {
  strKey = strKey.replace('|Ex', '');
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsPrjTabAddiENEx.con_FuncModuleName:
        return (a: clsPrjTabAddiENEx, b: clsPrjTabAddiENEx) => {
          return a.funcModuleName.localeCompare(b.funcModuleName);
        };
      case clsPrjTabAddiENEx.con_CmPrjId:
        return (a: clsPrjTabAddiENEx, b: clsPrjTabAddiENEx) => {
          return a.cmPrjId.localeCompare(b.cmPrjId);
        };
      case clsPrjTabAddiENEx.con_PrjId:
        return (a: clsPrjTabAddiENEx, b: clsPrjTabAddiENEx) => {
          return a.prjId.localeCompare(b.prjId);
        };
      case clsPrjTabAddiENEx.con_TabName:
        return (a: clsPrjTabAddiENEx, b: clsPrjTabAddiENEx) => {
          return a.tabName.localeCompare(b.tabName);
        };
      default:
        return PrjTabAddi_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsPrjTabAddiENEx.con_FuncModuleName:
        return (a: clsPrjTabAddiENEx, b: clsPrjTabAddiENEx) => {
          return b.funcModuleName.localeCompare(a.funcModuleName);
        };
      case clsPrjTabAddiENEx.con_CmPrjId:
        return (a: clsPrjTabAddiENEx, b: clsPrjTabAddiENEx) => {
          return b.cmPrjId.localeCompare(a.cmPrjId);
        };
      case clsPrjTabAddiENEx.con_PrjId:
        return (a: clsPrjTabAddiENEx, b: clsPrjTabAddiENEx) => {
          return b.prjId.localeCompare(a.prjId);
        };
      case clsPrjTabAddiENEx.con_TabName:
        return (a: clsPrjTabAddiENEx, b: clsPrjTabAddiENEx) => {
          return b.tabName.localeCompare(a.tabName);
        };
      default:
        return PrjTabAddi_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objPrjTabAddiS:源对象
 **/
export async function PrjTabAddi_FuncMapFuncModuleName(objPrjTabAddi: clsPrjTabAddiENEx) {
  const strThisFuncName = PrjTabAddi_FuncMapFuncModuleName.name;
  try {
    if (IsNullOrEmpty(objPrjTabAddi.funcModuleName) == true) {
      const vPrjTabSimTabId = objPrjTabAddi.tabId;
      if (IsNullOrEmpty(objPrjTabAddi.prjId) == true) {
        const strMsg = `函数映射[FuncModuleName]数据出错,prjId不能为空!(in ${prjTabAddi_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      const vPrjTabSimFuncModuleAgcId = await vPrjTab_Sim_func(
        clsvPrjTab_SimEN.con_TabId,
        clsvPrjTab_SimEN.con_FuncModuleAgcId,
        vPrjTabSimTabId,
        objPrjTabAddi.prjId,
      );
      const FuncModuleAgcFuncModuleAgcId = vPrjTabSimFuncModuleAgcId;
      if (IsNullOrEmpty(objPrjTabAddi.prjId) == true) {
        const strMsg = `函数映射[FuncModuleName]数据出错,prjId不能为空!(in ${prjTabAddi_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      const FuncModuleAgcFuncModuleName = await FuncModule_Agc_func(
        clsFuncModule_AgcEN.con_FuncModuleAgcId,
        clsFuncModule_AgcEN.con_FuncModuleName,
        FuncModuleAgcFuncModuleAgcId,
        objPrjTabAddi.prjId,
      );
      objPrjTabAddi.funcModuleName = FuncModuleAgcFuncModuleName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001372)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      prjTabAddi_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objPrjTabAddiS:源对象
 **/
export async function PrjTabAddi_FuncMapTabName(objPrjTabAddi: clsPrjTabAddiENEx) {
  const strThisFuncName = PrjTabAddi_FuncMapTabName.name;
  try {
    if (IsNullOrEmpty(objPrjTabAddi.tabName) == true) {
      const vPrjTabSimTabId = objPrjTabAddi.tabId;
      if (IsNullOrEmpty(objPrjTabAddi.prjId) == true) {
        const strMsg = `函数映射[TabName]数据出错,prjId不能为空!(in ${prjTabAddi_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      const vPrjTabSimTabName = await vPrjTab_Sim_func(
        clsvPrjTab_SimEN.con_TabId,
        clsvPrjTab_SimEN.con_TabName,
        vPrjTabSimTabId,
        objPrjTabAddi.prjId,
      );
      objPrjTabAddi.tabName = vPrjTabSimTabName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001298)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      prjTabAddi_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 根据条件删除记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelMultiRecordByCondAsync)
 * @returns 实际删除记录的个数
 **/
export async function PrjTabAddi_DelPrjTabAddisByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'DelPrjTabAddisByCondAsync';
  const strAction = 'DelPrjTabAddisByCond';
  const strUrl = GetWebApiUrl(prjTabAddi_Controller, strAction);

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
        prjTabAddi_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTabAddi_ConstructorName,
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
 * @param objPrjTabAddiEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function PrjTabAddi_AddNewRecordAsync(
  objPrjTabAddiEN: clsPrjTabAddiEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  if (objPrjTabAddiEN.tabId === null || objPrjTabAddiEN.tabId === '') {
    const strMsg = '需要的对象的关键字为空,不能添加!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objPrjTabAddiEN);
  const strUrl = GetWebApiUrl(prjTabAddi_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPrjTabAddiEN, config);
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
        prjTabAddi_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTabAddi_ConstructorName,
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
 * @param objPrjTabAddiEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function PrjTabAddi_AddNewRecordWithMaxIdAsync(
  objPrjTabAddiEN: clsPrjTabAddiEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(prjTabAddi_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPrjTabAddiEN, config);
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
        prjTabAddi_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTabAddi_ConstructorName,
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
export async function PrjTabAddi_AddNewObjSave(
  objPrjTabAddiEN: clsPrjTabAddiEN,
): Promise<AddRecordResult> {
  const strThisFuncName = 'AddNewObjSave';
  try {
    PrjTabAddi_CheckPropertyNew(objPrjTabAddiEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${prjTabAddi_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    alert(strMsg);
    return { keyword: '', success: false }; //一定要有一个返回值,否则会出错!
  }
  try {
    //检查唯一性条件
    let returnBool = false;
    const bolIsExist = await PrjTabAddi_IsExistAsync(objPrjTabAddiEN.tabId);
    if (bolIsExist == true) {
      const strMsg = Format('添加记录时,关键字：{0}已经存在!', objPrjTabAddiEN.tabId);
      console.error(strMsg);
      throw strMsg;
    }
    returnBool = await PrjTabAddi_AddNewRecordAsync(objPrjTabAddiEN);
    if (returnBool == true) {
      //PrjTabAddi_ReFreshCache();
    } else {
      const strInfo = `添加[工程表附加信息(PrjTabAddi)]记录不成功!`;
      //显示信息框
      throw strInfo;
    }
    return { keyword: objPrjTabAddiEN.tabId, success: returnBool }; //一定要有一个返回值,否则会出错!
  } catch (e) {
    const strMsg = `添加记录不成功,${e}.(in ${prjTabAddi_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/** 修改记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjSave)
 **/
export async function PrjTabAddi_UpdateObjSave(objPrjTabAddiEN: clsPrjTabAddiEN): Promise<boolean> {
  const strThisFuncName = 'UpdateObjSave';
  objPrjTabAddiEN.sfUpdFldSetStr = objPrjTabAddiEN.updFldString; //设置哪些字段被修改(脏字段)
  if (objPrjTabAddiEN.tabId == '' || objPrjTabAddiEN.tabId == undefined) {
    console.error('关键字不能为空!');
    throw '关键字不能为空!';
  }
  try {
    PrjTabAddi_CheckProperty4Update(objPrjTabAddiEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${prjTabAddi_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
  try {
    //检查唯一性条件
    const returnBool = await PrjTabAddi_UpdateRecordAsync(objPrjTabAddiEN);
    if (returnBool == true) {
      //PrjTabAddi_ReFreshCache();
    }
    return returnBool;
  } catch (e) {
    const strMsg = `修改记录不成功,${e}.(in ${prjTabAddi_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objPrjTabAddiEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function PrjTabAddi_AddNewRecordWithReturnKeyAsync(
  objPrjTabAddiEN: clsPrjTabAddiEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(prjTabAddi_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPrjTabAddiEN, config);
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
        prjTabAddi_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTabAddi_ConstructorName,
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
 * @param objPrjTabAddiEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function PrjTabAddi_UpdateRecordAsync(
  objPrjTabAddiEN: clsPrjTabAddiEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objPrjTabAddiEN.sfUpdFldSetStr === undefined ||
    objPrjTabAddiEN.sfUpdFldSetStr === null ||
    objPrjTabAddiEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format('对象(关键字: {0})的【修改字段集】为空,不能修改!', objPrjTabAddiEN.tabId);
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(prjTabAddi_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPrjTabAddiEN, config);
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
        prjTabAddi_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTabAddi_ConstructorName,
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
 * @param objPrjTabAddiEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function PrjTabAddi_EditRecordExAsync(
  objPrjTabAddiEN: clsPrjTabAddiEN,
): Promise<boolean> {
  const strThisFuncName = 'EditRecordExAsync';
  const strAction = 'EditRecordEx';
  if (
    objPrjTabAddiEN.sfUpdFldSetStr === undefined ||
    objPrjTabAddiEN.sfUpdFldSetStr === null ||
    objPrjTabAddiEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format('对象(关键字: {0})的【修改字段集】为空,不能修改!', objPrjTabAddiEN.tabId);
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(prjTabAddi_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPrjTabAddiEN, config);
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
        prjTabAddi_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTabAddi_ConstructorName,
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
 * @param objPrjTabAddiEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function PrjTabAddi_UpdateWithConditionAsync(
  objPrjTabAddiEN: clsPrjTabAddiEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objPrjTabAddiEN.sfUpdFldSetStr === undefined ||
    objPrjTabAddiEN.sfUpdFldSetStr === null ||
    objPrjTabAddiEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format('对象(关键字: {0})的【修改字段集】为空,不能修改!', objPrjTabAddiEN.tabId);
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(prjTabAddi_Controller, strAction);
  objPrjTabAddiEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPrjTabAddiEN, config);
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
        prjTabAddi_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTabAddi_ConstructorName,
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
export async function PrjTabAddi_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(prjTabAddi_Controller, strAction);

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
        prjTabAddi_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTabAddi_ConstructorName,
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
 * @param strTabId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function PrjTabAddi_IsExistAsync(strTabId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(prjTabAddi_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strTabId,
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
        prjTabAddi_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTabAddi_ConstructorName,
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
export async function PrjTabAddi_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(prjTabAddi_Controller, strAction);

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
        prjTabAddi_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTabAddi_ConstructorName,
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
export async function PrjTabAddi_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(prjTabAddi_Controller, strAction);

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
        prjTabAddi_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTabAddi_ConstructorName,
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
export function PrjTabAddi_GetWebApiUrl(strController: string, strAction: string): string {
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
export function PrjTabAddi_CheckPropertyNew(pobjPrjTabAddiEN: clsPrjTabAddiEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (IsNullOrEmpty(pobjPrjTabAddiEN.tabId) == false && GetStrLen(pobjPrjTabAddiEN.tabId) > 8) {
    throw new Error(
      `(errid:Watl000413)字段[表ID(tabId)]的长度不能超过8(In 工程表附加信息(PrjTabAddi))!值:${pobjPrjTabAddiEN.tabId}(clsPrjTabAddiBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabAddiEN.updUser) == false &&
    GetStrLen(pobjPrjTabAddiEN.updUser) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改者(updUser)]的长度不能超过20(In 工程表附加信息(PrjTabAddi))!值:${pobjPrjTabAddiEN.updUser}(clsPrjTabAddiBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabAddiEN.updDate) == false &&
    GetStrLen(pobjPrjTabAddiEN.updDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 工程表附加信息(PrjTabAddi))!值:${pobjPrjTabAddiEN.updDate}(clsPrjTabAddiBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjPrjTabAddiEN.memo) == false && GetStrLen(pobjPrjTabAddiEN.memo) > 1000) {
    throw new Error(
      `(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In 工程表附加信息(PrjTabAddi))!值:${pobjPrjTabAddiEN.memo}(clsPrjTabAddiBL:CheckPropertyNew)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjPrjTabAddiEN.tabId) == false &&
    undefined !== pobjPrjTabAddiEN.tabId &&
    tzDataType.isString(pobjPrjTabAddiEN.tabId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[表ID(tabId)]的值:[${pobjPrjTabAddiEN.tabId}], 非法,应该为字符型(In 工程表附加信息(PrjTabAddi))!(clsPrjTabAddiBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjPrjTabAddiEN.columnWidth &&
    undefined !== pobjPrjTabAddiEN.columnWidth &&
    tzDataType.isNumber(pobjPrjTabAddiEN.columnWidth) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[结点宽(columnWidth)]的值:[${pobjPrjTabAddiEN.columnWidth}], 非法,应该为数值型(In 工程表附加信息(PrjTabAddi))!(clsPrjTabAddiBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjPrjTabAddiEN.nodeHeight &&
    undefined !== pobjPrjTabAddiEN.nodeHeight &&
    tzDataType.isNumber(pobjPrjTabAddiEN.nodeHeight) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[结点高(nodeHeight)]的值:[${pobjPrjTabAddiEN.nodeHeight}], 非法,应该为数值型(In 工程表附加信息(PrjTabAddi))!(clsPrjTabAddiBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabAddiEN.updUser) == false &&
    undefined !== pobjPrjTabAddiEN.updUser &&
    tzDataType.isString(pobjPrjTabAddiEN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改者(updUser)]的值:[${pobjPrjTabAddiEN.updUser}], 非法,应该为字符型(In 工程表附加信息(PrjTabAddi))!(clsPrjTabAddiBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabAddiEN.updDate) == false &&
    undefined !== pobjPrjTabAddiEN.updDate &&
    tzDataType.isString(pobjPrjTabAddiEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjPrjTabAddiEN.updDate}], 非法,应该为字符型(In 工程表附加信息(PrjTabAddi))!(clsPrjTabAddiBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabAddiEN.memo) == false &&
    undefined !== pobjPrjTabAddiEN.memo &&
    tzDataType.isString(pobjPrjTabAddiEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[说明(memo)]的值:[${pobjPrjTabAddiEN.memo}], 非法,应该为字符型(In 工程表附加信息(PrjTabAddi))!(clsPrjTabAddiBL:CheckPropertyNew0)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function PrjTabAddi_CheckProperty4Update(pobjPrjTabAddiEN: clsPrjTabAddiEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (IsNullOrEmpty(pobjPrjTabAddiEN.tabId) == false && GetStrLen(pobjPrjTabAddiEN.tabId) > 8) {
    throw new Error(
      `(errid:Watl000416)字段[表ID(tabId)]的长度不能超过8(In 工程表附加信息(PrjTabAddi))!值:${pobjPrjTabAddiEN.tabId}(clsPrjTabAddiBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabAddiEN.updUser) == false &&
    GetStrLen(pobjPrjTabAddiEN.updUser) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改者(updUser)]的长度不能超过20(In 工程表附加信息(PrjTabAddi))!值:${pobjPrjTabAddiEN.updUser}(clsPrjTabAddiBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabAddiEN.updDate) == false &&
    GetStrLen(pobjPrjTabAddiEN.updDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 工程表附加信息(PrjTabAddi))!值:${pobjPrjTabAddiEN.updDate}(clsPrjTabAddiBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjPrjTabAddiEN.memo) == false && GetStrLen(pobjPrjTabAddiEN.memo) > 1000) {
    throw new Error(
      `(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In 工程表附加信息(PrjTabAddi))!值:${pobjPrjTabAddiEN.memo}(clsPrjTabAddiBL:CheckProperty4Update)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjPrjTabAddiEN.tabId) == false &&
    undefined !== pobjPrjTabAddiEN.tabId &&
    tzDataType.isString(pobjPrjTabAddiEN.tabId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[表ID(tabId)]的值:[${pobjPrjTabAddiEN.tabId}], 非法,应该为字符型(In 工程表附加信息(PrjTabAddi))!(clsPrjTabAddiBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjPrjTabAddiEN.columnWidth &&
    undefined !== pobjPrjTabAddiEN.columnWidth &&
    tzDataType.isNumber(pobjPrjTabAddiEN.columnWidth) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[结点宽(columnWidth)]的值:[${pobjPrjTabAddiEN.columnWidth}], 非法,应该为数值型(In 工程表附加信息(PrjTabAddi))!(clsPrjTabAddiBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjPrjTabAddiEN.nodeHeight &&
    undefined !== pobjPrjTabAddiEN.nodeHeight &&
    tzDataType.isNumber(pobjPrjTabAddiEN.nodeHeight) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[结点高(nodeHeight)]的值:[${pobjPrjTabAddiEN.nodeHeight}], 非法,应该为数值型(In 工程表附加信息(PrjTabAddi))!(clsPrjTabAddiBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabAddiEN.updUser) == false &&
    undefined !== pobjPrjTabAddiEN.updUser &&
    tzDataType.isString(pobjPrjTabAddiEN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改者(updUser)]的值:[${pobjPrjTabAddiEN.updUser}], 非法,应该为字符型(In 工程表附加信息(PrjTabAddi))!(clsPrjTabAddiBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabAddiEN.updDate) == false &&
    undefined !== pobjPrjTabAddiEN.updDate &&
    tzDataType.isString(pobjPrjTabAddiEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjPrjTabAddiEN.updDate}], 非法,应该为字符型(In 工程表附加信息(PrjTabAddi))!(clsPrjTabAddiBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabAddiEN.memo) == false &&
    undefined !== pobjPrjTabAddiEN.memo &&
    tzDataType.isString(pobjPrjTabAddiEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[说明(memo)]的值:[${pobjPrjTabAddiEN.memo}], 非法,应该为字符型(In 工程表附加信息(PrjTabAddi))!(clsPrjTabAddiBL:CheckProperty4Update)`,
    );
  }
  //检查主键是否为Null或者空!
  if (IsNullOrEmpty(pobjPrjTabAddiEN.tabId) === true || pobjPrjTabAddiEN.tabId.toString() === '0') {
    throw new Error(
      `(errid:Watl000064)字段[表ID]不能为空(In 工程表附加信息)!(clsPrjTabAddiBL:CheckProperty4Update)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function PrjTabAddi_GetJSONStrByObj(pobjPrjTabAddiEN: clsPrjTabAddiEN): string {
  pobjPrjTabAddiEN.sfUpdFldSetStr = pobjPrjTabAddiEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjPrjTabAddiEN);
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
export function PrjTabAddi_GetObjLstByJSONStr(strJSON: string): Array<clsPrjTabAddiEN> {
  let arrPrjTabAddiObjLst = new Array<clsPrjTabAddiEN>();
  if (strJSON === '') {
    return arrPrjTabAddiObjLst;
  }
  try {
    arrPrjTabAddiObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrPrjTabAddiObjLst;
  }
  return arrPrjTabAddiObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrPrjTabAddiObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function PrjTabAddi_GetObjLstByJSONObjLst(
  arrPrjTabAddiObjLstS: Array<clsPrjTabAddiEN>,
): Array<clsPrjTabAddiEN> {
  const arrPrjTabAddiObjLst = new Array<clsPrjTabAddiEN>();
  for (const objInFor of arrPrjTabAddiObjLstS) {
    const obj1 = PrjTabAddi_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrPrjTabAddiObjLst.push(obj1);
  }
  return arrPrjTabAddiObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function PrjTabAddi_GetObjByJSONStr(strJSON: string): clsPrjTabAddiEN {
  let pobjPrjTabAddiEN = new clsPrjTabAddiEN();
  if (strJSON === '') {
    return pobjPrjTabAddiEN;
  }
  try {
    pobjPrjTabAddiEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjPrjTabAddiEN;
  }
  return pobjPrjTabAddiEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function PrjTabAddi_GetCombineCondition(objPrjTabAddiCond: clsPrjTabAddiEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjTabAddiCond.dicFldComparisonOp,
      clsPrjTabAddiEN.con_TabId,
    ) == true
  ) {
    const strComparisonOpTabId: string =
      objPrjTabAddiCond.dicFldComparisonOp[clsPrjTabAddiEN.con_TabId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjTabAddiEN.con_TabId,
      objPrjTabAddiCond.tabId,
      strComparisonOpTabId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjTabAddiCond.dicFldComparisonOp,
      clsPrjTabAddiEN.con_ColumnWidth,
    ) == true
  ) {
    const strComparisonOpColumnWidth: string =
      objPrjTabAddiCond.dicFldComparisonOp[clsPrjTabAddiEN.con_ColumnWidth];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsPrjTabAddiEN.con_ColumnWidth,
      objPrjTabAddiCond.columnWidth,
      strComparisonOpColumnWidth,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjTabAddiCond.dicFldComparisonOp,
      clsPrjTabAddiEN.con_NodeHeight,
    ) == true
  ) {
    const strComparisonOpNodeHeight: string =
      objPrjTabAddiCond.dicFldComparisonOp[clsPrjTabAddiEN.con_NodeHeight];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsPrjTabAddiEN.con_NodeHeight,
      objPrjTabAddiCond.nodeHeight,
      strComparisonOpNodeHeight,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjTabAddiCond.dicFldComparisonOp,
      clsPrjTabAddiEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objPrjTabAddiCond.dicFldComparisonOp[clsPrjTabAddiEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjTabAddiEN.con_UpdUser,
      objPrjTabAddiCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjTabAddiCond.dicFldComparisonOp,
      clsPrjTabAddiEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objPrjTabAddiCond.dicFldComparisonOp[clsPrjTabAddiEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjTabAddiEN.con_UpdDate,
      objPrjTabAddiCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjTabAddiCond.dicFldComparisonOp,
      clsPrjTabAddiEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objPrjTabAddiCond.dicFldComparisonOp[clsPrjTabAddiEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjTabAddiEN.con_Memo,
      objPrjTabAddiCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objPrjTabAddiENS:源对象
 * @param objPrjTabAddiENT:目标对象
 */
export function PrjTabAddi_GetObjFromJsonObj(objPrjTabAddiENS: clsPrjTabAddiEN): clsPrjTabAddiEN {
  const objPrjTabAddiENT: clsPrjTabAddiEN = new clsPrjTabAddiEN();
  ObjectAssign(objPrjTabAddiENT, objPrjTabAddiENS);
  return objPrjTabAddiENT;
}
