/**
 * 类名:clsGCConstantPrjIdRelaWApi
 * 表名:GCConstantPrjIdRela(00050641)
 * 版本:2025.07.05.1(服务器:WIN-SRV103-116)
 * 日期:2025/07/05 09:37:34
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 应用类型:Vue应用InCore-TS(30)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:生成代码(GeneCode)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * GC常量工程关系(GCConstantPrjIdRela)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2025年07月05日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty, Format, GetStrLen, tzDataType } from '@/ts/PubFun/clsString';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { ObjectAssign, GetExceptionStr, myShowErrorMsg } from '@/ts/PubFun/clsCommFunc4Web';
import { clsGCConstantPrjIdRelaENEx } from '@/ts/L0Entity/GeneCode/clsGCConstantPrjIdRelaENEx';
import { clsGCConstantPrjIdRelaEN } from '@/ts/L0Entity/GeneCode/clsGCConstantPrjIdRelaEN';
import { Projects_func } from '@/ts/L3ForWApi/PrjManage/clsProjectsWApi';
import { clsProjectsEN } from '@/ts/L0Entity/PrjManage/clsProjectsEN';
import { GCDefaConstants_func } from '@/ts/L3ForWApi/GeneCode/clsGCDefaConstantsWApi';
import { clsGCDefaConstantsEN } from '@/ts/L0Entity/GeneCode/clsGCDefaConstantsEN';
import { DataTypeAbbr_func } from '@/ts/L3ForWApi/SysPara/clsDataTypeAbbrWApi';
import { clsDataTypeAbbrEN } from '@/ts/L0Entity/SysPara/clsDataTypeAbbrEN';
import { AddRecordResult } from '@/ts/PubFun/AddRecordResult';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';

export const gCConstantPrjIdRela_Controller = 'GCConstantPrjIdRelaApi';
export const gCConstantPrjIdRela_ConstructorName = 'gCConstantPrjIdRela';

/**
 * 把多关键字值分解为单独关键字的值,并且以对象形式返回
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strKeyLst:多关键字值
 * @returns 分解后的单独关键字值对象
 **/
export function GCConstantPrjIdRela_SplitKeyLst(strKeyLst: string) {
  const arrKey = strKeyLst.split('|');
  if (arrKey.length != 2) {
    const strMsg = '请选择需要修改的记录!';
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
  const objKeyLst = {
    constId: arrKey[0],
    prjId: arrKey[1],
  };
  if (IsNullOrEmpty(objKeyLst.constId) == true) {
    const strMsg = '关键字段(constId)值不能为空!';
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
  if (IsNullOrEmpty(objKeyLst.prjId) == true) {
    const strMsg = '关键字段(prjId)值不能为空!';
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
  return objKeyLst;
}
/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strConstId:关键字
 * @returns 对象
 **/
export async function GCConstantPrjIdRela_GetObjByKeyLstAsync(
  strConstId: string,
  strPrjId: string,
): Promise<clsGCConstantPrjIdRelaEN | null> {
  const strThisFuncName = 'GetObjByKeyLstAsync';

  if (IsNullOrEmpty(strConstId) == true) {
    const strMsg = Format(
      '参数:[strConstId]不能为空!(In clsGCConstantPrjIdRelaWApi.GetObjByKeyLstAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strConstId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strConstId]的长度:[{0}]不正确!(clsGCConstantPrjIdRelaWApi.GetObjByKeyLstAsync)',
      strConstId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空!(In clsGCConstantPrjIdRelaWApi.GetObjByKeyLstAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确!(clsGCConstantPrjIdRelaWApi.GetObjByKeyLstAsync)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByKeyLst';
  const strUrl = GetWebApiUrl(gCConstantPrjIdRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strConstId,
      strPrjId,
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
      const objGCConstantPrjIdRela = GCConstantPrjIdRela_GetObjFromJsonObj(returnObj);
      return objGCConstantPrjIdRela;
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
        gCConstantPrjIdRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCConstantPrjIdRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[GetObjByKeyLstlocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[GetObjByKeyLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )
//该表没有使用Cache,不需要生成[UpdateObjInLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-07-05
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function GCConstantPrjIdRela_SortFunDefa(
  a: clsGCConstantPrjIdRelaEN,
  b: clsGCConstantPrjIdRelaEN,
): number {
  return a.constId.localeCompare(b.constId);
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2025-07-05
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function GCConstantPrjIdRela_SortFunDefa2Fld(
  a: clsGCConstantPrjIdRelaEN,
  b: clsGCConstantPrjIdRelaEN,
): number {
  if (a.updUser == b.updUser) return a.updDate.localeCompare(b.updDate);
  else return a.updUser.localeCompare(b.updUser);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-07-05
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function GCConstantPrjIdRela_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsGCConstantPrjIdRelaEN.con_ConstId:
        return (a: clsGCConstantPrjIdRelaEN, b: clsGCConstantPrjIdRelaEN) => {
          return a.constId.localeCompare(b.constId);
        };
      case clsGCConstantPrjIdRelaEN.con_PrjId:
        return (a: clsGCConstantPrjIdRelaEN, b: clsGCConstantPrjIdRelaEN) => {
          return a.prjId.localeCompare(b.prjId);
        };
      case clsGCConstantPrjIdRelaEN.con_UpdUser:
        return (a: clsGCConstantPrjIdRelaEN, b: clsGCConstantPrjIdRelaEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsGCConstantPrjIdRelaEN.con_UpdDate:
        return (a: clsGCConstantPrjIdRelaEN, b: clsGCConstantPrjIdRelaEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsGCConstantPrjIdRelaEN.con_Memo:
        return (a: clsGCConstantPrjIdRelaEN, b: clsGCConstantPrjIdRelaEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[GCConstantPrjIdRela]中不存在!(in ${gCConstantPrjIdRela_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsGCConstantPrjIdRelaEN.con_ConstId:
        return (a: clsGCConstantPrjIdRelaEN, b: clsGCConstantPrjIdRelaEN) => {
          return b.constId.localeCompare(a.constId);
        };
      case clsGCConstantPrjIdRelaEN.con_PrjId:
        return (a: clsGCConstantPrjIdRelaEN, b: clsGCConstantPrjIdRelaEN) => {
          return b.prjId.localeCompare(a.prjId);
        };
      case clsGCConstantPrjIdRelaEN.con_UpdUser:
        return (a: clsGCConstantPrjIdRelaEN, b: clsGCConstantPrjIdRelaEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsGCConstantPrjIdRelaEN.con_UpdDate:
        return (a: clsGCConstantPrjIdRelaEN, b: clsGCConstantPrjIdRelaEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsGCConstantPrjIdRelaEN.con_Memo:
        return (a: clsGCConstantPrjIdRelaEN, b: clsGCConstantPrjIdRelaEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[GCConstantPrjIdRela]中不存在!(in ${gCConstantPrjIdRela_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}
//该表没有使用Cache,不需要生成[GetNameByConstIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-07-05
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function GCConstantPrjIdRela_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsGCConstantPrjIdRelaEN.con_ConstId:
      return (obj: clsGCConstantPrjIdRelaEN) => {
        return obj.constId === value;
      };
    case clsGCConstantPrjIdRelaEN.con_PrjId:
      return (obj: clsGCConstantPrjIdRelaEN) => {
        return obj.prjId === value;
      };
    case clsGCConstantPrjIdRelaEN.con_UpdUser:
      return (obj: clsGCConstantPrjIdRelaEN) => {
        return obj.updUser === value;
      };
    case clsGCConstantPrjIdRelaEN.con_UpdDate:
      return (obj: clsGCConstantPrjIdRelaEN) => {
        return obj.updDate === value;
      };
    case clsGCConstantPrjIdRelaEN.con_Memo:
      return (obj: clsGCConstantPrjIdRelaEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[GCConstantPrjIdRela]中不存在!(in ${gCConstantPrjIdRela_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}
//该表没有使用Cache,不需要生成[func]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func )
//该表没有使用Cache,不需要生成[GCConstantPrjIdRela__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function GCConstantPrjIdRela_GetFldValueAsync(
  strFldName: string,
  strWhereCond: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetFldValueAsync';
  const strAction = 'GetFldValue';
  const strUrl = GetWebApiUrl(gCConstantPrjIdRela_Controller, strAction);

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
        gCConstantPrjIdRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCConstantPrjIdRela_ConstructorName,
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
export async function GCConstantPrjIdRela_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(gCConstantPrjIdRela_Controller, strAction);

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
        gCConstantPrjIdRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCConstantPrjIdRela_ConstructorName,
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
export async function GCConstantPrjIdRela_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(gCConstantPrjIdRela_Controller, strAction);

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
        gCConstantPrjIdRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCConstantPrjIdRela_ConstructorName,
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
export async function GCConstantPrjIdRela_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsGCConstantPrjIdRelaEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(gCConstantPrjIdRela_Controller, strAction);

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
      const objGCConstantPrjIdRela = GCConstantPrjIdRela_GetObjFromJsonObj(returnObj);
      return objGCConstantPrjIdRela;
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
        gCConstantPrjIdRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCConstantPrjIdRela_ConstructorName,
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
export async function GCConstantPrjIdRela_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsGCConstantPrjIdRelaEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(gCConstantPrjIdRela_Controller, strAction);

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
          gCConstantPrjIdRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = GCConstantPrjIdRela_GetObjLstByJSONObjLst(returnObjLst);
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
        gCConstantPrjIdRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCConstantPrjIdRela_ConstructorName,
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
//该表没有使用Cache,不需要生成[GetObjLstByConstIdLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

/**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export async function GCConstantPrjIdRela_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsGCConstantPrjIdRelaEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(gCConstantPrjIdRela_Controller, strAction);

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
          gCConstantPrjIdRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = GCConstantPrjIdRela_GetObjLstByJSONObjLst(returnObjLst);
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
        gCConstantPrjIdRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCConstantPrjIdRela_ConstructorName,
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
export async function GCConstantPrjIdRela_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsGCConstantPrjIdRelaEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(gCConstantPrjIdRela_Controller, strAction);

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
          gCConstantPrjIdRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = GCConstantPrjIdRela_GetObjLstByJSONObjLst(returnObjLst);
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
        gCConstantPrjIdRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCConstantPrjIdRela_ConstructorName,
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
export async function GCConstantPrjIdRela_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsGCConstantPrjIdRelaEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsGCConstantPrjIdRelaEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(gCConstantPrjIdRela_Controller, strAction);

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
          gCConstantPrjIdRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = GCConstantPrjIdRela_GetObjLstByJSONObjLst(returnObjLst);
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
        gCConstantPrjIdRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCConstantPrjIdRela_ConstructorName,
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
 * @param strConstId,strPrjId:关键字列表
 * @returns 获取删除的结果
 **/
export async function GCConstantPrjIdRela_DelRecKeyLstAsync(
  strConstId: string,
  strPrjId: string,
): Promise<number> {
  const strThisFuncName = 'DelRecKeyLstAsync';
  const strAction = 'DelRecKeyLst';
  const strUrl = GetWebApiUrl(gCConstantPrjIdRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strConstId,
      strPrjId,
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
        gCConstantPrjIdRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCConstantPrjIdRela_ConstructorName,
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
export async function GCConstantPrjIdRela_DelRecKeyLstsAsync(
  arrKeyLsts: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelRecKeyLstsAsync';
  const strAction = 'DelRecKeyLsts';
  const strUrl = GetWebApiUrl(gCConstantPrjIdRela_Controller, strAction);

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
        gCConstantPrjIdRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCConstantPrjIdRela_ConstructorName,
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
 * @param objGCConstantPrjIdRelaENS:源对象
 * @returns 目标对象=>clsGCConstantPrjIdRelaEN:objGCConstantPrjIdRelaENT
 **/
export function GCConstantPrjIdRela_CopyToEx(
  objGCConstantPrjIdRelaENS: clsGCConstantPrjIdRelaEN,
): clsGCConstantPrjIdRelaENEx {
  const strThisFuncName = GCConstantPrjIdRela_CopyToEx.name;
  const objGCConstantPrjIdRelaENT = new clsGCConstantPrjIdRelaENEx();
  try {
    ObjectAssign(objGCConstantPrjIdRelaENT, objGCConstantPrjIdRelaENS);
    return objGCConstantPrjIdRelaENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001294)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      gCConstantPrjIdRela_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objGCConstantPrjIdRelaENT;
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2025-07-05
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function GCConstantPrjIdRela_FuncMapByFldName(
  strFldName: string,
  objGCConstantPrjIdRelaEx: clsGCConstantPrjIdRelaENEx,
) {
  const strThisFuncName = GCConstantPrjIdRela_FuncMapByFldName.name;
  strFldName = strFldName.replace('|Ex', '');
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsGCConstantPrjIdRelaEN._AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsGCConstantPrjIdRelaENEx.con_PrjName:
      return GCConstantPrjIdRela_FuncMapPrjName(objGCConstantPrjIdRelaEx);
    case clsGCConstantPrjIdRelaENEx.con_DataTypeName:
      return GCConstantPrjIdRela_FuncMapDataTypeName(objGCConstantPrjIdRelaEx);
    case clsGCConstantPrjIdRelaENEx.con_CsType:
      return GCConstantPrjIdRela_FuncMapCsType(objGCConstantPrjIdRelaEx);
    case clsGCConstantPrjIdRelaENEx.con_TypeScriptType:
      return GCConstantPrjIdRela_FuncMapTypeScriptType(objGCConstantPrjIdRelaEx);
    case clsGCConstantPrjIdRelaENEx.con_DataTypeId:
      return GCConstantPrjIdRela_FuncMapDataTypeId(objGCConstantPrjIdRelaEx);
    case clsGCConstantPrjIdRelaENEx.con_ConstName:
      return GCConstantPrjIdRela_FuncMapConstName(objGCConstantPrjIdRelaEx);
    case clsGCConstantPrjIdRelaENEx.con_DateTimeSim:
      return GCConstantPrjIdRela_FuncMapDateTimeSim(objGCConstantPrjIdRelaEx);
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
 * 日期:2025-07-05
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByExKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function GCConstantPrjIdRela_SortFunByExKey(strKey: string, AscOrDesc: string) {
  strKey = strKey.replace('|Ex', '');
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsGCConstantPrjIdRelaENEx.con_PrjName:
        return (a: clsGCConstantPrjIdRelaENEx, b: clsGCConstantPrjIdRelaENEx) => {
          return a.prjName.localeCompare(b.prjName);
        };
      case clsGCConstantPrjIdRelaENEx.con_DataTypeName:
        return (a: clsGCConstantPrjIdRelaENEx, b: clsGCConstantPrjIdRelaENEx) => {
          if (a.dataTypeName === null && b.dataTypeName === null) return 0;
          if (a.dataTypeName === null) return -1;
          if (b.dataTypeName === null) return 1;
          return a.dataTypeName.localeCompare(b.dataTypeName);
        };
      case clsGCConstantPrjIdRelaENEx.con_CsType:
        return (a: clsGCConstantPrjIdRelaENEx, b: clsGCConstantPrjIdRelaENEx) => {
          return a.csType.localeCompare(b.csType);
        };
      case clsGCConstantPrjIdRelaENEx.con_TypeScriptType:
        return (a: clsGCConstantPrjIdRelaENEx, b: clsGCConstantPrjIdRelaENEx) => {
          if (a.typeScriptType === null && b.typeScriptType === null) return 0;
          if (a.typeScriptType === null) return -1;
          if (b.typeScriptType === null) return 1;
          return a.typeScriptType.localeCompare(b.typeScriptType);
        };
      case clsGCConstantPrjIdRelaENEx.con_DataTypeId:
        return (a: clsGCConstantPrjIdRelaENEx, b: clsGCConstantPrjIdRelaENEx) => {
          return a.dataTypeId.localeCompare(b.dataTypeId);
        };
      case clsGCConstantPrjIdRelaENEx.con_ConstName:
        return (a: clsGCConstantPrjIdRelaENEx, b: clsGCConstantPrjIdRelaENEx) => {
          if (a.constName === null && b.constName === null) return 0;
          if (a.constName === null) return -1;
          if (b.constName === null) return 1;
          return a.constName.localeCompare(b.constName);
        };
      case clsGCConstantPrjIdRelaENEx.con_DateTimeSim:
        return (a: clsGCConstantPrjIdRelaENEx, b: clsGCConstantPrjIdRelaENEx) => {
          if (a.dateTimeSim === null && b.dateTimeSim === null) return 0;
          if (a.dateTimeSim === null) return -1;
          if (b.dateTimeSim === null) return 1;
          return a.dateTimeSim.localeCompare(b.dateTimeSim);
        };
      default:
        return GCConstantPrjIdRela_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsGCConstantPrjIdRelaENEx.con_PrjName:
        return (a: clsGCConstantPrjIdRelaENEx, b: clsGCConstantPrjIdRelaENEx) => {
          return b.prjName.localeCompare(a.prjName);
        };
      case clsGCConstantPrjIdRelaENEx.con_DataTypeName:
        return (a: clsGCConstantPrjIdRelaENEx, b: clsGCConstantPrjIdRelaENEx) => {
          if (a.dataTypeName === null && b.dataTypeName === null) return 0;
          if (a.dataTypeName === null) return 1;
          if (b.dataTypeName === null) return -1;
          return b.dataTypeName.localeCompare(a.dataTypeName);
        };
      case clsGCConstantPrjIdRelaENEx.con_CsType:
        return (a: clsGCConstantPrjIdRelaENEx, b: clsGCConstantPrjIdRelaENEx) => {
          return b.csType.localeCompare(a.csType);
        };
      case clsGCConstantPrjIdRelaENEx.con_TypeScriptType:
        return (a: clsGCConstantPrjIdRelaENEx, b: clsGCConstantPrjIdRelaENEx) => {
          if (a.typeScriptType === null && b.typeScriptType === null) return 0;
          if (a.typeScriptType === null) return 1;
          if (b.typeScriptType === null) return -1;
          return b.typeScriptType.localeCompare(a.typeScriptType);
        };
      case clsGCConstantPrjIdRelaENEx.con_DataTypeId:
        return (a: clsGCConstantPrjIdRelaENEx, b: clsGCConstantPrjIdRelaENEx) => {
          return b.dataTypeId.localeCompare(a.dataTypeId);
        };
      case clsGCConstantPrjIdRelaENEx.con_ConstName:
        return (a: clsGCConstantPrjIdRelaENEx, b: clsGCConstantPrjIdRelaENEx) => {
          if (a.constName === null && b.constName === null) return 0;
          if (a.constName === null) return 1;
          if (b.constName === null) return -1;
          return b.constName.localeCompare(a.constName);
        };
      case clsGCConstantPrjIdRelaENEx.con_DateTimeSim:
        return (a: clsGCConstantPrjIdRelaENEx, b: clsGCConstantPrjIdRelaENEx) => {
          if (a.dateTimeSim === null && b.dateTimeSim === null) return 0;
          if (a.dateTimeSim === null) return 1;
          if (b.dateTimeSim === null) return -1;
          return b.dateTimeSim.localeCompare(a.dateTimeSim);
        };
      default:
        return GCConstantPrjIdRela_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objGCConstantPrjIdRelaS:源对象
 **/
export async function GCConstantPrjIdRela_FuncMapPrjName(
  objGCConstantPrjIdRela: clsGCConstantPrjIdRelaENEx,
) {
  const strThisFuncName = GCConstantPrjIdRela_FuncMapPrjName.name;
  try {
    if (IsNullOrEmpty(objGCConstantPrjIdRela.prjName) == true) {
      const ProjectsPrjId = objGCConstantPrjIdRela.prjId;
      const ProjectsPrjName = await Projects_func(
        clsProjectsEN.con_PrjId,
        clsProjectsEN.con_PrjName,
        ProjectsPrjId,
      );
      objGCConstantPrjIdRela.prjName = ProjectsPrjName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001315)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      gCConstantPrjIdRela_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objGCConstantPrjIdRelaS:源对象
 **/
export async function GCConstantPrjIdRela_FuncMapDataTypeName(
  objGCConstantPrjIdRela: clsGCConstantPrjIdRelaENEx,
) {
  const strThisFuncName = GCConstantPrjIdRela_FuncMapDataTypeName.name;
  try {
    if (IsNullOrEmpty(objGCConstantPrjIdRela.dataTypeName) == true) {
      const GCDefaConstantsConstId = objGCConstantPrjIdRela.constId;
      const GCDefaConstantsDataTypeId = await GCDefaConstants_func(
        clsGCDefaConstantsEN.con_ConstId,
        clsGCDefaConstantsEN.con_DataTypeId,
        GCDefaConstantsConstId,
      );
      const DataTypeAbbrDataTypeId = GCDefaConstantsDataTypeId;
      const DataTypeAbbrDataTypeName = await DataTypeAbbr_func(
        clsDataTypeAbbrEN.con_DataTypeId,
        clsDataTypeAbbrEN.con_DataTypeName,
        DataTypeAbbrDataTypeId,
      );
      objGCConstantPrjIdRela.dataTypeName = DataTypeAbbrDataTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001349)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      gCConstantPrjIdRela_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objGCConstantPrjIdRelaS:源对象
 **/
export async function GCConstantPrjIdRela_FuncMapCsType(
  objGCConstantPrjIdRela: clsGCConstantPrjIdRelaENEx,
) {
  const strThisFuncName = GCConstantPrjIdRela_FuncMapCsType.name;
  try {
    if (IsNullOrEmpty(objGCConstantPrjIdRela.csType) == true) {
      const GCDefaConstantsConstId = objGCConstantPrjIdRela.constId;
      const GCDefaConstantsDataTypeId = await GCDefaConstants_func(
        clsGCDefaConstantsEN.con_ConstId,
        clsGCDefaConstantsEN.con_DataTypeId,
        GCDefaConstantsConstId,
      );
      const DataTypeAbbrDataTypeId = GCDefaConstantsDataTypeId;
      const DataTypeAbbrCsType = await DataTypeAbbr_func(
        clsDataTypeAbbrEN.con_DataTypeId,
        clsDataTypeAbbrEN.con_CsType,
        DataTypeAbbrDataTypeId,
      );
      objGCConstantPrjIdRela.csType = DataTypeAbbrCsType;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001367)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      gCConstantPrjIdRela_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objGCConstantPrjIdRelaS:源对象
 **/
export async function GCConstantPrjIdRela_FuncMapDataTypeId(
  objGCConstantPrjIdRela: clsGCConstantPrjIdRelaENEx,
) {
  const strThisFuncName = GCConstantPrjIdRela_FuncMapDataTypeId.name;
  try {
    if (IsNullOrEmpty(objGCConstantPrjIdRela.dataTypeId) == true) {
      const GCDefaConstantsConstId = objGCConstantPrjIdRela.constId;
      const GCDefaConstantsDataTypeId = await GCDefaConstants_func(
        clsGCDefaConstantsEN.con_ConstId,
        clsGCDefaConstantsEN.con_DataTypeId,
        GCDefaConstantsConstId,
      );
      objGCConstantPrjIdRela.dataTypeId = GCDefaConstantsDataTypeId;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001370)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      gCConstantPrjIdRela_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objGCConstantPrjIdRelaS:源对象
 **/
export async function GCConstantPrjIdRela_FuncMapTypeScriptType(
  objGCConstantPrjIdRela: clsGCConstantPrjIdRelaENEx,
) {
  const strThisFuncName = GCConstantPrjIdRela_FuncMapTypeScriptType.name;
  try {
    if (IsNullOrEmpty(objGCConstantPrjIdRela.typeScriptType) == true) {
      const GCDefaConstantsConstId = objGCConstantPrjIdRela.constId;
      const GCDefaConstantsDataTypeId = await GCDefaConstants_func(
        clsGCDefaConstantsEN.con_ConstId,
        clsGCDefaConstantsEN.con_DataTypeId,
        GCDefaConstantsConstId,
      );
      const DataTypeAbbrDataTypeId = GCDefaConstantsDataTypeId;
      const DataTypeAbbrTypeScriptType = await DataTypeAbbr_func(
        clsDataTypeAbbrEN.con_DataTypeId,
        clsDataTypeAbbrEN.con_TypeScriptType,
        DataTypeAbbrDataTypeId,
      );
      objGCConstantPrjIdRela.typeScriptType = DataTypeAbbrTypeScriptType;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001369)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      gCConstantPrjIdRela_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objGCConstantPrjIdRelaS:源对象
 **/
export async function GCConstantPrjIdRela_FuncMapConstName(
  objGCConstantPrjIdRela: clsGCConstantPrjIdRelaENEx,
) {
  const strThisFuncName = GCConstantPrjIdRela_FuncMapConstName.name;
  try {
    if (IsNullOrEmpty(objGCConstantPrjIdRela.constName) == true) {
      const GCDefaConstantsConstId = objGCConstantPrjIdRela.constId;
      const GCDefaConstantsConstName = await GCDefaConstants_func(
        clsGCDefaConstantsEN.con_ConstId,
        clsGCDefaConstantsEN.con_ConstName,
        GCDefaConstantsConstId,
      );
      objGCConstantPrjIdRela.constName = GCDefaConstantsConstName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001522)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      gCConstantPrjIdRela_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objGCConstantPrjIdRelaS:源对象
 **/
export async function GCConstantPrjIdRela_FuncMapDateTimeSim(
  objGCConstantPrjIdRela: clsGCConstantPrjIdRelaENEx,
) {
  const strThisFuncName = GCConstantPrjIdRela_FuncMapDateTimeSim.name;
  try {
    if (IsNullOrEmpty(objGCConstantPrjIdRela.dateTimeSim) == true) {
      const CommonDataNodeDateTimeSim = clsDateTime.GetDateTime_Sim(objGCConstantPrjIdRela.updDate);
      objGCConstantPrjIdRela.dateTimeSim = CommonDataNodeDateTimeSim;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001326)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      gCConstantPrjIdRela_ConstructorName,
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
export async function GCConstantPrjIdRela_DelGCConstantPrjIdRelasByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelGCConstantPrjIdRelasByCondAsync';
  const strAction = 'DelGCConstantPrjIdRelasByCond';
  const strUrl = GetWebApiUrl(gCConstantPrjIdRela_Controller, strAction);

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
        gCConstantPrjIdRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCConstantPrjIdRela_ConstructorName,
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
 * @param objGCConstantPrjIdRelaEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function GCConstantPrjIdRela_AddNewRecordAsync(
  objGCConstantPrjIdRelaEN: clsGCConstantPrjIdRelaEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  if (objGCConstantPrjIdRelaEN.constId === null || objGCConstantPrjIdRelaEN.constId === '') {
    const strMsg = '需要的对象的关键字为空,不能添加!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objGCConstantPrjIdRelaEN);
  const strUrl = GetWebApiUrl(gCConstantPrjIdRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objGCConstantPrjIdRelaEN, config);
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
        gCConstantPrjIdRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCConstantPrjIdRela_ConstructorName,
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
 * @param objGCConstantPrjIdRelaEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function GCConstantPrjIdRela_AddNewRecordWithMaxIdAsync(
  objGCConstantPrjIdRelaEN: clsGCConstantPrjIdRelaEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(gCConstantPrjIdRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objGCConstantPrjIdRelaEN, config);
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
        gCConstantPrjIdRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCConstantPrjIdRela_ConstructorName,
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
export async function GCConstantPrjIdRela_AddNewObjSave(
  objGCConstantPrjIdRelaEN: clsGCConstantPrjIdRelaEN,
): Promise<AddRecordResult> {
  const strThisFuncName = 'AddNewObjSave';
  try {
    GCConstantPrjIdRela_CheckPropertyNew(objGCConstantPrjIdRelaEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${gCConstantPrjIdRela_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    alert(strMsg);
    return { keyword: '', success: false }; //一定要有一个返回值,否则会出错!
  }
  try {
    //检查唯一性条件
    let returnBool = false;
    const bolIsExist = await GCConstantPrjIdRela_IsExistAsync(
      objGCConstantPrjIdRelaEN.constId,
      objGCConstantPrjIdRelaEN.prjId,
    );
    if (bolIsExist == true) {
      const strMsg = Format('添加记录时,关键字：{0}已经存在!', objGCConstantPrjIdRelaEN.constId);
      console.error(strMsg);
      throw strMsg;
    }
    returnBool = await GCConstantPrjIdRela_AddNewRecordAsync(objGCConstantPrjIdRelaEN);
    if (returnBool == true) {
      //GCConstantPrjIdRela_ReFreshCache();
    } else {
      const strInfo = `添加[GC常量工程关系(GCConstantPrjIdRela)]记录不成功!`;
      //显示信息框
      throw strInfo;
    }
    let strReturnKeyLst = '';
    strReturnKeyLst += `${objGCConstantPrjIdRelaEN.constId}`;
    strReturnKeyLst += `|${objGCConstantPrjIdRelaEN.prjId}`;
    return { keyword: strReturnKeyLst, success: returnBool }; //一定要有一个返回值,否则会出错!
  } catch (e) {
    const strMsg = `添加记录不成功,${e}.(in ${gCConstantPrjIdRela_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/** 修改记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjSave)
 **/
export async function GCConstantPrjIdRela_UpdateObjSave(
  objGCConstantPrjIdRelaEN: clsGCConstantPrjIdRelaEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateObjSave';
  objGCConstantPrjIdRelaEN.sfUpdFldSetStr = objGCConstantPrjIdRelaEN.updFldString; //设置哪些字段被修改(脏字段)
  if (objGCConstantPrjIdRelaEN.constId == '' || objGCConstantPrjIdRelaEN.constId == undefined) {
    console.error('关键字不能为空!');
    throw '关键字不能为空!';
  }
  try {
    GCConstantPrjIdRela_CheckProperty4Update(objGCConstantPrjIdRelaEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${gCConstantPrjIdRela_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
  try {
    //检查唯一性条件
    const returnBool = await GCConstantPrjIdRela_UpdateRecordAsync(objGCConstantPrjIdRelaEN);
    if (returnBool == true) {
      //GCConstantPrjIdRela_ReFreshCache();
    }
    return returnBool;
  } catch (e) {
    const strMsg = `修改记录不成功,${e}.(in ${gCConstantPrjIdRela_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objGCConstantPrjIdRelaEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function GCConstantPrjIdRela_AddNewRecordWithReturnKeyAsync(
  objGCConstantPrjIdRelaEN: clsGCConstantPrjIdRelaEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(gCConstantPrjIdRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objGCConstantPrjIdRelaEN, config);
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
        gCConstantPrjIdRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCConstantPrjIdRela_ConstructorName,
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
 * @param objGCConstantPrjIdRelaEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function GCConstantPrjIdRela_UpdateRecordAsync(
  objGCConstantPrjIdRelaEN: clsGCConstantPrjIdRelaEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objGCConstantPrjIdRelaEN.sfUpdFldSetStr === undefined ||
    objGCConstantPrjIdRelaEN.sfUpdFldSetStr === null ||
    objGCConstantPrjIdRelaEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objGCConstantPrjIdRelaEN.constId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(gCConstantPrjIdRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objGCConstantPrjIdRelaEN, config);
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
        gCConstantPrjIdRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCConstantPrjIdRela_ConstructorName,
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
 * @param objGCConstantPrjIdRelaEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function GCConstantPrjIdRela_EditRecordExAsync(
  objGCConstantPrjIdRelaEN: clsGCConstantPrjIdRelaEN,
): Promise<boolean> {
  const strThisFuncName = 'EditRecordExAsync';
  const strAction = 'EditRecordEx';
  if (
    objGCConstantPrjIdRelaEN.sfUpdFldSetStr === undefined ||
    objGCConstantPrjIdRelaEN.sfUpdFldSetStr === null ||
    objGCConstantPrjIdRelaEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objGCConstantPrjIdRelaEN.constId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(gCConstantPrjIdRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objGCConstantPrjIdRelaEN, config);
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
        gCConstantPrjIdRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCConstantPrjIdRela_ConstructorName,
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
 * @param objGCConstantPrjIdRelaEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function GCConstantPrjIdRela_UpdateWithConditionAsync(
  objGCConstantPrjIdRelaEN: clsGCConstantPrjIdRelaEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objGCConstantPrjIdRelaEN.sfUpdFldSetStr === undefined ||
    objGCConstantPrjIdRelaEN.sfUpdFldSetStr === null ||
    objGCConstantPrjIdRelaEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objGCConstantPrjIdRelaEN.constId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(gCConstantPrjIdRela_Controller, strAction);
  objGCConstantPrjIdRelaEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objGCConstantPrjIdRelaEN, config);
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
        gCConstantPrjIdRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCConstantPrjIdRela_ConstructorName,
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
export async function GCConstantPrjIdRela_IsExistRecordAsync(
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(gCConstantPrjIdRela_Controller, strAction);

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
        gCConstantPrjIdRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCConstantPrjIdRela_ConstructorName,
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
 * @param strConstId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function GCConstantPrjIdRela_IsExistAsync(
  strConstId: string,
  strPrjId: string,
): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(gCConstantPrjIdRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strConstId,
      strPrjId,
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
        gCConstantPrjIdRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCConstantPrjIdRela_ConstructorName,
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
export async function GCConstantPrjIdRela_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(gCConstantPrjIdRela_Controller, strAction);

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
        gCConstantPrjIdRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCConstantPrjIdRela_ConstructorName,
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
export async function GCConstantPrjIdRela_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(gCConstantPrjIdRela_Controller, strAction);

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
        gCConstantPrjIdRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCConstantPrjIdRela_ConstructorName,
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
export function GCConstantPrjIdRela_GetWebApiUrl(strController: string, strAction: string): string {
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
export function GCConstantPrjIdRela_CheckPropertyNew(
  pobjGCConstantPrjIdRelaEN: clsGCConstantPrjIdRelaEN,
) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjGCConstantPrjIdRelaEN.constId) == false &&
    GetStrLen(pobjGCConstantPrjIdRelaEN.constId) > 8
  ) {
    throw new Error(
      `(errid:Watl000413)字段[常量Id(constId)]的长度不能超过8(In GC常量工程关系(GCConstantPrjIdRela))!值:${pobjGCConstantPrjIdRelaEN.constId}(clsGCConstantPrjIdRelaBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCConstantPrjIdRelaEN.prjId) == false &&
    GetStrLen(pobjGCConstantPrjIdRelaEN.prjId) > 4
  ) {
    throw new Error(
      `(errid:Watl000413)字段[工程Id(prjId)]的长度不能超过4(In GC常量工程关系(GCConstantPrjIdRela))!值:${pobjGCConstantPrjIdRelaEN.prjId}(clsGCConstantPrjIdRelaBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCConstantPrjIdRelaEN.updUser) == false &&
    GetStrLen(pobjGCConstantPrjIdRelaEN.updUser) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改者(updUser)]的长度不能超过20(In GC常量工程关系(GCConstantPrjIdRela))!值:${pobjGCConstantPrjIdRelaEN.updUser}(clsGCConstantPrjIdRelaBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCConstantPrjIdRelaEN.updDate) == false &&
    GetStrLen(pobjGCConstantPrjIdRelaEN.updDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In GC常量工程关系(GCConstantPrjIdRela))!值:${pobjGCConstantPrjIdRelaEN.updDate}(clsGCConstantPrjIdRelaBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCConstantPrjIdRelaEN.memo) == false &&
    GetStrLen(pobjGCConstantPrjIdRelaEN.memo) > 1000
  ) {
    throw new Error(
      `(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In GC常量工程关系(GCConstantPrjIdRela))!值:${pobjGCConstantPrjIdRelaEN.memo}(clsGCConstantPrjIdRelaBL:CheckPropertyNew)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjGCConstantPrjIdRelaEN.constId) == false &&
    undefined !== pobjGCConstantPrjIdRelaEN.constId &&
    tzDataType.isString(pobjGCConstantPrjIdRelaEN.constId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[常量Id(constId)]的值:[${pobjGCConstantPrjIdRelaEN.constId}], 非法,应该为字符型(In GC常量工程关系(GCConstantPrjIdRela))!(clsGCConstantPrjIdRelaBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCConstantPrjIdRelaEN.prjId) == false &&
    undefined !== pobjGCConstantPrjIdRelaEN.prjId &&
    tzDataType.isString(pobjGCConstantPrjIdRelaEN.prjId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[工程Id(prjId)]的值:[${pobjGCConstantPrjIdRelaEN.prjId}], 非法,应该为字符型(In GC常量工程关系(GCConstantPrjIdRela))!(clsGCConstantPrjIdRelaBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCConstantPrjIdRelaEN.updUser) == false &&
    undefined !== pobjGCConstantPrjIdRelaEN.updUser &&
    tzDataType.isString(pobjGCConstantPrjIdRelaEN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改者(updUser)]的值:[${pobjGCConstantPrjIdRelaEN.updUser}], 非法,应该为字符型(In GC常量工程关系(GCConstantPrjIdRela))!(clsGCConstantPrjIdRelaBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCConstantPrjIdRelaEN.updDate) == false &&
    undefined !== pobjGCConstantPrjIdRelaEN.updDate &&
    tzDataType.isString(pobjGCConstantPrjIdRelaEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjGCConstantPrjIdRelaEN.updDate}], 非法,应该为字符型(In GC常量工程关系(GCConstantPrjIdRela))!(clsGCConstantPrjIdRelaBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCConstantPrjIdRelaEN.memo) == false &&
    undefined !== pobjGCConstantPrjIdRelaEN.memo &&
    tzDataType.isString(pobjGCConstantPrjIdRelaEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[说明(memo)]的值:[${pobjGCConstantPrjIdRelaEN.memo}], 非法,应该为字符型(In GC常量工程关系(GCConstantPrjIdRela))!(clsGCConstantPrjIdRelaBL:CheckPropertyNew0)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
  if (
    IsNullOrEmpty(pobjGCConstantPrjIdRelaEN.constId) == false &&
    pobjGCConstantPrjIdRelaEN.constId != '[nuull]' &&
    GetStrLen(pobjGCConstantPrjIdRelaEN.constId) != 8
  ) {
    throw '(errid:Watl000415)字段[常量Id]作为外键字段,长度应该为8(In GC常量工程关系)!(clsGCConstantPrjIdRelaBL:CheckPropertyNew)';
  }

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function GCConstantPrjIdRela_CheckProperty4Update(
  pobjGCConstantPrjIdRelaEN: clsGCConstantPrjIdRelaEN,
) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjGCConstantPrjIdRelaEN.constId) == false &&
    GetStrLen(pobjGCConstantPrjIdRelaEN.constId) > 8
  ) {
    throw new Error(
      `(errid:Watl000416)字段[常量Id(constId)]的长度不能超过8(In GC常量工程关系(GCConstantPrjIdRela))!值:${pobjGCConstantPrjIdRelaEN.constId}(clsGCConstantPrjIdRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCConstantPrjIdRelaEN.prjId) == false &&
    GetStrLen(pobjGCConstantPrjIdRelaEN.prjId) > 4
  ) {
    throw new Error(
      `(errid:Watl000416)字段[工程Id(prjId)]的长度不能超过4(In GC常量工程关系(GCConstantPrjIdRela))!值:${pobjGCConstantPrjIdRelaEN.prjId}(clsGCConstantPrjIdRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCConstantPrjIdRelaEN.updUser) == false &&
    GetStrLen(pobjGCConstantPrjIdRelaEN.updUser) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改者(updUser)]的长度不能超过20(In GC常量工程关系(GCConstantPrjIdRela))!值:${pobjGCConstantPrjIdRelaEN.updUser}(clsGCConstantPrjIdRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCConstantPrjIdRelaEN.updDate) == false &&
    GetStrLen(pobjGCConstantPrjIdRelaEN.updDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In GC常量工程关系(GCConstantPrjIdRela))!值:${pobjGCConstantPrjIdRelaEN.updDate}(clsGCConstantPrjIdRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCConstantPrjIdRelaEN.memo) == false &&
    GetStrLen(pobjGCConstantPrjIdRelaEN.memo) > 1000
  ) {
    throw new Error(
      `(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In GC常量工程关系(GCConstantPrjIdRela))!值:${pobjGCConstantPrjIdRelaEN.memo}(clsGCConstantPrjIdRelaBL:CheckProperty4Update)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjGCConstantPrjIdRelaEN.constId) == false &&
    undefined !== pobjGCConstantPrjIdRelaEN.constId &&
    tzDataType.isString(pobjGCConstantPrjIdRelaEN.constId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[常量Id(constId)]的值:[${pobjGCConstantPrjIdRelaEN.constId}], 非法,应该为字符型(In GC常量工程关系(GCConstantPrjIdRela))!(clsGCConstantPrjIdRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCConstantPrjIdRelaEN.prjId) == false &&
    undefined !== pobjGCConstantPrjIdRelaEN.prjId &&
    tzDataType.isString(pobjGCConstantPrjIdRelaEN.prjId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[工程Id(prjId)]的值:[${pobjGCConstantPrjIdRelaEN.prjId}], 非法,应该为字符型(In GC常量工程关系(GCConstantPrjIdRela))!(clsGCConstantPrjIdRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCConstantPrjIdRelaEN.updUser) == false &&
    undefined !== pobjGCConstantPrjIdRelaEN.updUser &&
    tzDataType.isString(pobjGCConstantPrjIdRelaEN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改者(updUser)]的值:[${pobjGCConstantPrjIdRelaEN.updUser}], 非法,应该为字符型(In GC常量工程关系(GCConstantPrjIdRela))!(clsGCConstantPrjIdRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCConstantPrjIdRelaEN.updDate) == false &&
    undefined !== pobjGCConstantPrjIdRelaEN.updDate &&
    tzDataType.isString(pobjGCConstantPrjIdRelaEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjGCConstantPrjIdRelaEN.updDate}], 非法,应该为字符型(In GC常量工程关系(GCConstantPrjIdRela))!(clsGCConstantPrjIdRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCConstantPrjIdRelaEN.memo) == false &&
    undefined !== pobjGCConstantPrjIdRelaEN.memo &&
    tzDataType.isString(pobjGCConstantPrjIdRelaEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[说明(memo)]的值:[${pobjGCConstantPrjIdRelaEN.memo}], 非法,应该为字符型(In GC常量工程关系(GCConstantPrjIdRela))!(clsGCConstantPrjIdRelaBL:CheckProperty4Update)`,
    );
  }
  //检查主键是否为Null或者空!
  if (
    IsNullOrEmpty(pobjGCConstantPrjIdRelaEN.constId) === true ||
    pobjGCConstantPrjIdRelaEN.constId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000064)字段[常量Id]不能为空(In GC常量工程关系)!(clsGCConstantPrjIdRelaBL:CheckProperty4Update)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
  if (
    IsNullOrEmpty(pobjGCConstantPrjIdRelaEN.constId) == false &&
    pobjGCConstantPrjIdRelaEN.constId != '[nuull]' &&
    GetStrLen(pobjGCConstantPrjIdRelaEN.constId) != 8
  ) {
    throw '(errid:Watl000418)字段[常量Id]作为外键字段,长度应该为8(In GC常量工程关系)!(clsGCConstantPrjIdRelaBL:CheckPropertyNew)';
  }
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2025-07-05
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function GCConstantPrjIdRela_GetJSONStrByObj(
  pobjGCConstantPrjIdRelaEN: clsGCConstantPrjIdRelaEN,
): string {
  pobjGCConstantPrjIdRelaEN.sfUpdFldSetStr = pobjGCConstantPrjIdRelaEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjGCConstantPrjIdRelaEN);
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
 * 日期:2025-07-05
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
 */
export function GCConstantPrjIdRela_GetObjLstByJSONStr(
  strJSON: string,
): Array<clsGCConstantPrjIdRelaEN> {
  let arrGCConstantPrjIdRelaObjLst = new Array<clsGCConstantPrjIdRelaEN>();
  if (strJSON === '') {
    return arrGCConstantPrjIdRelaObjLst;
  }
  try {
    arrGCConstantPrjIdRelaObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrGCConstantPrjIdRelaObjLst;
  }
  return arrGCConstantPrjIdRelaObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-07-05
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrGCConstantPrjIdRelaObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function GCConstantPrjIdRela_GetObjLstByJSONObjLst(
  arrGCConstantPrjIdRelaObjLstS: Array<clsGCConstantPrjIdRelaEN>,
): Array<clsGCConstantPrjIdRelaEN> {
  const arrGCConstantPrjIdRelaObjLst = new Array<clsGCConstantPrjIdRelaEN>();
  for (const objInFor of arrGCConstantPrjIdRelaObjLstS) {
    const obj1 = GCConstantPrjIdRela_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrGCConstantPrjIdRelaObjLst.push(obj1);
  }
  return arrGCConstantPrjIdRelaObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-07-05
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function GCConstantPrjIdRela_GetObjByJSONStr(strJSON: string): clsGCConstantPrjIdRelaEN {
  let pobjGCConstantPrjIdRelaEN = new clsGCConstantPrjIdRelaEN();
  if (strJSON === '') {
    return pobjGCConstantPrjIdRelaEN;
  }
  try {
    pobjGCConstantPrjIdRelaEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjGCConstantPrjIdRelaEN;
  }
  return pobjGCConstantPrjIdRelaEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function GCConstantPrjIdRela_GetCombineCondition(
  objGCConstantPrjIdRelaCond: clsGCConstantPrjIdRelaEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objGCConstantPrjIdRelaCond.dicFldComparisonOp,
      clsGCConstantPrjIdRelaEN.con_ConstId,
    ) == true
  ) {
    const strComparisonOpConstId: string =
      objGCConstantPrjIdRelaCond.dicFldComparisonOp[clsGCConstantPrjIdRelaEN.con_ConstId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsGCConstantPrjIdRelaEN.con_ConstId,
      objGCConstantPrjIdRelaCond.constId,
      strComparisonOpConstId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objGCConstantPrjIdRelaCond.dicFldComparisonOp,
      clsGCConstantPrjIdRelaEN.con_PrjId,
    ) == true
  ) {
    const strComparisonOpPrjId: string =
      objGCConstantPrjIdRelaCond.dicFldComparisonOp[clsGCConstantPrjIdRelaEN.con_PrjId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsGCConstantPrjIdRelaEN.con_PrjId,
      objGCConstantPrjIdRelaCond.prjId,
      strComparisonOpPrjId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objGCConstantPrjIdRelaCond.dicFldComparisonOp,
      clsGCConstantPrjIdRelaEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objGCConstantPrjIdRelaCond.dicFldComparisonOp[clsGCConstantPrjIdRelaEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsGCConstantPrjIdRelaEN.con_UpdUser,
      objGCConstantPrjIdRelaCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objGCConstantPrjIdRelaCond.dicFldComparisonOp,
      clsGCConstantPrjIdRelaEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objGCConstantPrjIdRelaCond.dicFldComparisonOp[clsGCConstantPrjIdRelaEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsGCConstantPrjIdRelaEN.con_UpdDate,
      objGCConstantPrjIdRelaCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objGCConstantPrjIdRelaCond.dicFldComparisonOp,
      clsGCConstantPrjIdRelaEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objGCConstantPrjIdRelaCond.dicFldComparisonOp[clsGCConstantPrjIdRelaEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsGCConstantPrjIdRelaEN.con_Memo,
      objGCConstantPrjIdRelaCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objGCConstantPrjIdRelaENS:源对象
 * @param objGCConstantPrjIdRelaENT:目标对象
 */
export function GCConstantPrjIdRela_GetObjFromJsonObj(
  objGCConstantPrjIdRelaENS: clsGCConstantPrjIdRelaEN,
): clsGCConstantPrjIdRelaEN {
  const objGCConstantPrjIdRelaENT: clsGCConstantPrjIdRelaEN = new clsGCConstantPrjIdRelaEN();
  ObjectAssign(objGCConstantPrjIdRelaENT, objGCConstantPrjIdRelaENS);
  return objGCConstantPrjIdRelaENT;
}
