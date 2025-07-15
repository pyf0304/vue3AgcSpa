/**
 * 类名:clsPrjConstraintWApi
 * 表名:PrjConstraint(00050331)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/14 00:55:18
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
 * 约束(PrjConstraint)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2025年06月14日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty, Format, GetStrLen, tzDataType } from '@/ts/PubFun/clsString';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import {
  ObjectAssign,
  BindDdl_ObjLstInDivObj,
  GetExceptionStr,
  myShowErrorMsg,
} from '@/ts/PubFun/clsCommFunc4Web';
import { clsPrjConstraintENEx } from '@/ts/L0Entity/Table_Field/clsPrjConstraintENEx';
import { clsPrjConstraintEN } from '@/ts/L0Entity/Table_Field/clsPrjConstraintEN';
import { vPrjTab_Sim_func } from '@/ts/L3ForWApi/Table_Field/clsvPrjTab_SimWApi';
import { clsvPrjTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvPrjTab_SimEN';
import { ConstraintType_func } from '@/ts/L3ForWApi/Table_Field/clsConstraintTypeWApi';
import { clsConstraintTypeEN } from '@/ts/L0Entity/Table_Field/clsConstraintTypeEN';
import { AddRecordResult } from '@/ts/PubFun/AddRecordResult';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';

export const prjConstraint_Controller = 'PrjConstraintApi';
export const prjConstraint_ConstructorName = 'prjConstraint';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strPrjConstraintId:关键字
 * @returns 对象
 **/
export async function PrjConstraint_GetObjByPrjConstraintIdAsync(
  strPrjConstraintId: string,
): Promise<clsPrjConstraintEN | null> {
  const strThisFuncName = 'GetObjByPrjConstraintIdAsync';

  if (IsNullOrEmpty(strPrjConstraintId) == true) {
    const strMsg = Format(
      '参数:[strPrjConstraintId]不能为空!(In clsPrjConstraintWApi.GetObjByPrjConstraintIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjConstraintId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strPrjConstraintId]的长度:[{0}]不正确!(clsPrjConstraintWApi.GetObjByPrjConstraintIdAsync)',
      strPrjConstraintId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByPrjConstraintId';
  const strUrl = GetWebApiUrl(prjConstraint_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strPrjConstraintId,
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
      const objPrjConstraint = PrjConstraint_GetObjFromJsonObj(returnObj);
      return objPrjConstraint;
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
        prjConstraint_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjConstraint_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[GetObjByPrjConstraintIdlocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[GetObjByPrjConstraintIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )
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
export function PrjConstraint_SortFunDefa(a: clsPrjConstraintEN, b: clsPrjConstraintEN): number {
  return a.prjConstraintId.localeCompare(b.prjConstraintId);
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
export function PrjConstraint_SortFunDefa2Fld(
  a: clsPrjConstraintEN,
  b: clsPrjConstraintEN,
): number {
  if (a.constraintName == b.constraintName) return a.prjId.localeCompare(b.prjId);
  else return a.constraintName.localeCompare(b.constraintName);
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
export function PrjConstraint_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsPrjConstraintEN.con_PrjConstraintId:
        return (a: clsPrjConstraintEN, b: clsPrjConstraintEN) => {
          return a.prjConstraintId.localeCompare(b.prjConstraintId);
        };
      case clsPrjConstraintEN.con_ConstraintName:
        return (a: clsPrjConstraintEN, b: clsPrjConstraintEN) => {
          return a.constraintName.localeCompare(b.constraintName);
        };
      case clsPrjConstraintEN.con_PrjId:
        return (a: clsPrjConstraintEN, b: clsPrjConstraintEN) => {
          return a.prjId.localeCompare(b.prjId);
        };
      case clsPrjConstraintEN.con_TabId:
        return (a: clsPrjConstraintEN, b: clsPrjConstraintEN) => {
          return a.tabId.localeCompare(b.tabId);
        };
      case clsPrjConstraintEN.con_ConstraintTypeId:
        return (a: clsPrjConstraintEN, b: clsPrjConstraintEN) => {
          return a.constraintTypeId.localeCompare(b.constraintTypeId);
        };
      case clsPrjConstraintEN.con_ConstraintDescription:
        return (a: clsPrjConstraintEN, b: clsPrjConstraintEN) => {
          if (a.constraintDescription == null) return -1;
          if (b.constraintDescription == null) return 1;
          return a.constraintDescription.localeCompare(b.constraintDescription);
        };
      case clsPrjConstraintEN.con_CreateUserId:
        return (a: clsPrjConstraintEN, b: clsPrjConstraintEN) => {
          return a.createUserId.localeCompare(b.createUserId);
        };
      case clsPrjConstraintEN.con_IsNullable:
        return (a: clsPrjConstraintEN) => {
          if (a.isNullable == true) return 1;
          else return -1;
        };
      case clsPrjConstraintEN.con_CheckDate:
        return (a: clsPrjConstraintEN, b: clsPrjConstraintEN) => {
          if (a.checkDate == null) return -1;
          if (b.checkDate == null) return 1;
          return a.checkDate.localeCompare(b.checkDate);
        };
      case clsPrjConstraintEN.con_ErrMsg:
        return (a: clsPrjConstraintEN, b: clsPrjConstraintEN) => {
          if (a.errMsg == null) return -1;
          if (b.errMsg == null) return 1;
          return a.errMsg.localeCompare(b.errMsg);
        };
      case clsPrjConstraintEN.con_InUse:
        return (a: clsPrjConstraintEN) => {
          if (a.inUse == true) return 1;
          else return -1;
        };
      case clsPrjConstraintEN.con_UpdDate:
        return (a: clsPrjConstraintEN, b: clsPrjConstraintEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsPrjConstraintEN.con_UpdUser:
        return (a: clsPrjConstraintEN, b: clsPrjConstraintEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsPrjConstraintEN.con_Memo:
        return (a: clsPrjConstraintEN, b: clsPrjConstraintEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[PrjConstraint]中不存在!(in ${prjConstraint_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsPrjConstraintEN.con_PrjConstraintId:
        return (a: clsPrjConstraintEN, b: clsPrjConstraintEN) => {
          return b.prjConstraintId.localeCompare(a.prjConstraintId);
        };
      case clsPrjConstraintEN.con_ConstraintName:
        return (a: clsPrjConstraintEN, b: clsPrjConstraintEN) => {
          return b.constraintName.localeCompare(a.constraintName);
        };
      case clsPrjConstraintEN.con_PrjId:
        return (a: clsPrjConstraintEN, b: clsPrjConstraintEN) => {
          return b.prjId.localeCompare(a.prjId);
        };
      case clsPrjConstraintEN.con_TabId:
        return (a: clsPrjConstraintEN, b: clsPrjConstraintEN) => {
          return b.tabId.localeCompare(a.tabId);
        };
      case clsPrjConstraintEN.con_ConstraintTypeId:
        return (a: clsPrjConstraintEN, b: clsPrjConstraintEN) => {
          return b.constraintTypeId.localeCompare(a.constraintTypeId);
        };
      case clsPrjConstraintEN.con_ConstraintDescription:
        return (a: clsPrjConstraintEN, b: clsPrjConstraintEN) => {
          if (b.constraintDescription == null) return -1;
          if (a.constraintDescription == null) return 1;
          return b.constraintDescription.localeCompare(a.constraintDescription);
        };
      case clsPrjConstraintEN.con_CreateUserId:
        return (a: clsPrjConstraintEN, b: clsPrjConstraintEN) => {
          return b.createUserId.localeCompare(a.createUserId);
        };
      case clsPrjConstraintEN.con_IsNullable:
        return (b: clsPrjConstraintEN) => {
          if (b.isNullable == true) return 1;
          else return -1;
        };
      case clsPrjConstraintEN.con_CheckDate:
        return (a: clsPrjConstraintEN, b: clsPrjConstraintEN) => {
          if (b.checkDate == null) return -1;
          if (a.checkDate == null) return 1;
          return b.checkDate.localeCompare(a.checkDate);
        };
      case clsPrjConstraintEN.con_ErrMsg:
        return (a: clsPrjConstraintEN, b: clsPrjConstraintEN) => {
          if (b.errMsg == null) return -1;
          if (a.errMsg == null) return 1;
          return b.errMsg.localeCompare(a.errMsg);
        };
      case clsPrjConstraintEN.con_InUse:
        return (b: clsPrjConstraintEN) => {
          if (b.inUse == true) return 1;
          else return -1;
        };
      case clsPrjConstraintEN.con_UpdDate:
        return (a: clsPrjConstraintEN, b: clsPrjConstraintEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsPrjConstraintEN.con_UpdUser:
        return (a: clsPrjConstraintEN, b: clsPrjConstraintEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsPrjConstraintEN.con_Memo:
        return (a: clsPrjConstraintEN, b: clsPrjConstraintEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[PrjConstraint]中不存在!(in ${prjConstraint_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}
//该表没有使用Cache,不需要生成[GetNameByPrjConstraintIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function PrjConstraint_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsPrjConstraintEN.con_PrjConstraintId:
      return (obj: clsPrjConstraintEN) => {
        return obj.prjConstraintId === value;
      };
    case clsPrjConstraintEN.con_ConstraintName:
      return (obj: clsPrjConstraintEN) => {
        return obj.constraintName === value;
      };
    case clsPrjConstraintEN.con_PrjId:
      return (obj: clsPrjConstraintEN) => {
        return obj.prjId === value;
      };
    case clsPrjConstraintEN.con_TabId:
      return (obj: clsPrjConstraintEN) => {
        return obj.tabId === value;
      };
    case clsPrjConstraintEN.con_ConstraintTypeId:
      return (obj: clsPrjConstraintEN) => {
        return obj.constraintTypeId === value;
      };
    case clsPrjConstraintEN.con_ConstraintDescription:
      return (obj: clsPrjConstraintEN) => {
        return obj.constraintDescription === value;
      };
    case clsPrjConstraintEN.con_CreateUserId:
      return (obj: clsPrjConstraintEN) => {
        return obj.createUserId === value;
      };
    case clsPrjConstraintEN.con_IsNullable:
      return (obj: clsPrjConstraintEN) => {
        return obj.isNullable === value;
      };
    case clsPrjConstraintEN.con_CheckDate:
      return (obj: clsPrjConstraintEN) => {
        return obj.checkDate === value;
      };
    case clsPrjConstraintEN.con_ErrMsg:
      return (obj: clsPrjConstraintEN) => {
        return obj.errMsg === value;
      };
    case clsPrjConstraintEN.con_InUse:
      return (obj: clsPrjConstraintEN) => {
        return obj.inUse === value;
      };
    case clsPrjConstraintEN.con_UpdDate:
      return (obj: clsPrjConstraintEN) => {
        return obj.updDate === value;
      };
    case clsPrjConstraintEN.con_UpdUser:
      return (obj: clsPrjConstraintEN) => {
        return obj.updUser === value;
      };
    case clsPrjConstraintEN.con_Memo:
      return (obj: clsPrjConstraintEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[PrjConstraint]中不存在!(in ${prjConstraint_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}
//该表没有使用Cache,不需要生成[func]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func )
//该表没有使用Cache,不需要生成[PrjConstraint__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function PrjConstraint_GetFldValueAsync(
  strFldName: string,
  strWhereCond: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetFldValueAsync';
  const strAction = 'GetFldValue';
  const strUrl = GetWebApiUrl(prjConstraint_Controller, strAction);

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
        prjConstraint_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjConstraint_ConstructorName,
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
export async function PrjConstraint_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(prjConstraint_Controller, strAction);

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
        prjConstraint_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjConstraint_ConstructorName,
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
export async function PrjConstraint_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(prjConstraint_Controller, strAction);

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
        prjConstraint_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjConstraint_ConstructorName,
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
export async function PrjConstraint_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsPrjConstraintEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(prjConstraint_Controller, strAction);

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
      const objPrjConstraint = PrjConstraint_GetObjFromJsonObj(returnObj);
      return objPrjConstraint;
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
        prjConstraint_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjConstraint_ConstructorName,
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
export async function PrjConstraint_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsPrjConstraintEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(prjConstraint_Controller, strAction);

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
          prjConstraint_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = PrjConstraint_GetObjLstByJSONObjLst(returnObjLst);
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
        prjConstraint_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjConstraint_ConstructorName,
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
 * @param arrPrjConstraintId:关键字列表
 * @returns 对象列表
 **/
export async function PrjConstraint_GetObjLstByPrjConstraintIdLstAsync(
  arrPrjConstraintId: Array<string>,
): Promise<Array<clsPrjConstraintEN>> {
  const strThisFuncName = 'GetObjLstByPrjConstraintIdLstAsync';
  const strAction = 'GetObjLstByPrjConstraintIdLst';
  const strUrl = GetWebApiUrl(prjConstraint_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrPrjConstraintId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          prjConstraint_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = PrjConstraint_GetObjLstByJSONObjLst(returnObjLst);
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
        prjConstraint_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjConstraint_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[GetObjLstByPrjConstraintIdLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

/**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export async function PrjConstraint_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsPrjConstraintEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(prjConstraint_Controller, strAction);

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
          prjConstraint_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = PrjConstraint_GetObjLstByJSONObjLst(returnObjLst);
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
        prjConstraint_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjConstraint_ConstructorName,
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
export async function PrjConstraint_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsPrjConstraintEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(prjConstraint_Controller, strAction);

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
          prjConstraint_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = PrjConstraint_GetObjLstByJSONObjLst(returnObjLst);
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
        prjConstraint_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjConstraint_ConstructorName,
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
export async function PrjConstraint_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsPrjConstraintEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsPrjConstraintEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(prjConstraint_Controller, strAction);

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
          prjConstraint_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = PrjConstraint_GetObjLstByJSONObjLst(returnObjLst);
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
        prjConstraint_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjConstraint_ConstructorName,
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
 * @param strPrjConstraintId:关键字
 * @returns 获取删除的结果
 **/
export async function PrjConstraint_DelRecordAsync(strPrjConstraintId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(prjConstraint_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strPrjConstraintId);

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
        prjConstraint_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjConstraint_ConstructorName,
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
 * @param arrPrjConstraintId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function PrjConstraint_DelPrjConstraintsAsync(
  arrPrjConstraintId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelPrjConstraintsAsync';
  const strAction = 'DelPrjConstraints';
  const strUrl = GetWebApiUrl(prjConstraint_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrPrjConstraintId, config);
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
        prjConstraint_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjConstraint_ConstructorName,
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
 * @param objPrjConstraintENS:源对象
 * @returns 目标对象=>clsPrjConstraintEN:objPrjConstraintENT
 **/
export function PrjConstraint_CopyToEx(
  objPrjConstraintENS: clsPrjConstraintEN,
): clsPrjConstraintENEx {
  const strThisFuncName = PrjConstraint_CopyToEx.name;
  const objPrjConstraintENT = new clsPrjConstraintENEx();
  try {
    ObjectAssign(objPrjConstraintENT, objPrjConstraintENS);
    return objPrjConstraintENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001294)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      prjConstraint_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objPrjConstraintENT;
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
export function PrjConstraint_FuncMapByFldName(
  strFldName: string,
  objPrjConstraintEx: clsPrjConstraintENEx,
) {
  const strThisFuncName = PrjConstraint_FuncMapByFldName.name;
  strFldName = strFldName.replace('|Ex', '');
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsPrjConstraintEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsPrjConstraintENEx.con_TabName:
      return PrjConstraint_FuncMapTabName(objPrjConstraintEx);
    case clsPrjConstraintENEx.con_ConstraintTypeName:
      return PrjConstraint_FuncMapConstraintTypeName(objPrjConstraintEx);
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
export function PrjConstraint_SortFunByExKey(strKey: string, AscOrDesc: string) {
  strKey = strKey.replace('|Ex', '');
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsPrjConstraintENEx.con_TabName:
        return (a: clsPrjConstraintENEx, b: clsPrjConstraintENEx) => {
          return a.tabName.localeCompare(b.tabName);
        };
      case clsPrjConstraintENEx.con_ConstraintTypeName:
        return (a: clsPrjConstraintENEx, b: clsPrjConstraintENEx) => {
          return a.constraintTypeName.localeCompare(b.constraintTypeName);
        };
      case clsPrjConstraintENEx.con_PrjName:
        return (a: clsPrjConstraintENEx, b: clsPrjConstraintENEx) => {
          return a.prjName.localeCompare(b.prjName);
        };
      case clsPrjConstraintENEx.con_FldName:
        return (a: clsPrjConstraintENEx, b: clsPrjConstraintENEx) => {
          return a.fldName.localeCompare(b.fldName);
        };
      case clsPrjConstraintENEx.con_FldNames:
        return (a: clsPrjConstraintENEx, b: clsPrjConstraintENEx) => {
          return a.fldNames.localeCompare(b.fldNames);
        };
      case clsPrjConstraintENEx.con_CmPrjId:
        return (a: clsPrjConstraintENEx, b: clsPrjConstraintENEx) => {
          return a.cmPrjId.localeCompare(b.cmPrjId);
        };
      default:
        return PrjConstraint_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsPrjConstraintENEx.con_TabName:
        return (a: clsPrjConstraintENEx, b: clsPrjConstraintENEx) => {
          return b.tabName.localeCompare(a.tabName);
        };
      case clsPrjConstraintENEx.con_ConstraintTypeName:
        return (a: clsPrjConstraintENEx, b: clsPrjConstraintENEx) => {
          return b.constraintTypeName.localeCompare(a.constraintTypeName);
        };
      case clsPrjConstraintENEx.con_PrjName:
        return (a: clsPrjConstraintENEx, b: clsPrjConstraintENEx) => {
          return b.prjName.localeCompare(a.prjName);
        };
      case clsPrjConstraintENEx.con_FldName:
        return (a: clsPrjConstraintENEx, b: clsPrjConstraintENEx) => {
          return b.fldName.localeCompare(a.fldName);
        };
      case clsPrjConstraintENEx.con_FldNames:
        return (a: clsPrjConstraintENEx, b: clsPrjConstraintENEx) => {
          return b.fldNames.localeCompare(a.fldNames);
        };
      case clsPrjConstraintENEx.con_CmPrjId:
        return (a: clsPrjConstraintENEx, b: clsPrjConstraintENEx) => {
          return b.cmPrjId.localeCompare(a.cmPrjId);
        };
      default:
        return PrjConstraint_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objPrjConstraintS:源对象
 **/
export async function PrjConstraint_FuncMapTabName(objPrjConstraint: clsPrjConstraintENEx) {
  const strThisFuncName = PrjConstraint_FuncMapTabName.name;
  try {
    if (IsNullOrEmpty(objPrjConstraint.tabName) == true) {
      const vPrjTabSimTabId = objPrjConstraint.tabId;
      if (IsNullOrEmpty(objPrjConstraint.cmPrjId) == true) {
        const strMsg = `函数映射[TabName]数据出错,cmPrjId不能为空!(in ${prjConstraint_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      const vPrjTabSimTabName = await vPrjTab_Sim_func(
        clsvPrjTab_SimEN.con_TabId,
        clsvPrjTab_SimEN.con_TabName,
        vPrjTabSimTabId,
        objPrjConstraint.prjId,
      );
      objPrjConstraint.tabName = vPrjTabSimTabName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001298)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      prjConstraint_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objPrjConstraintS:源对象
 **/
export async function PrjConstraint_FuncMapConstraintTypeName(
  objPrjConstraint: clsPrjConstraintENEx,
) {
  const strThisFuncName = PrjConstraint_FuncMapConstraintTypeName.name;
  try {
    if (IsNullOrEmpty(objPrjConstraint.constraintTypeName) == true) {
      const ConstraintTypeConstraintTypeId = objPrjConstraint.constraintTypeId;
      const ConstraintTypeConstraintTypeName = await ConstraintType_func(
        clsConstraintTypeEN.con_ConstraintTypeId,
        clsConstraintTypeEN.con_ConstraintTypeName,
        ConstraintTypeConstraintTypeId,
      );
      objPrjConstraint.constraintTypeName = ConstraintTypeConstraintTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001371)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      prjConstraint_ConstructorName,
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
export async function PrjConstraint_DelPrjConstraintsByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelPrjConstraintsByCondAsync';
  const strAction = 'DelPrjConstraintsByCond';
  const strUrl = GetWebApiUrl(prjConstraint_Controller, strAction);

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
        prjConstraint_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjConstraint_ConstructorName,
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
 * @param objPrjConstraintEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function PrjConstraint_AddNewRecordAsync(
  objPrjConstraintEN: clsPrjConstraintEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objPrjConstraintEN);
  const strUrl = GetWebApiUrl(prjConstraint_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPrjConstraintEN, config);
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
        prjConstraint_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjConstraint_ConstructorName,
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
 * @param objPrjConstraintEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function PrjConstraint_AddNewRecordWithMaxIdAsync(
  objPrjConstraintEN: clsPrjConstraintEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(prjConstraint_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPrjConstraintEN, config);
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
        prjConstraint_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjConstraint_ConstructorName,
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
export async function PrjConstraint_AddNewObjSave(
  objPrjConstraintEN: clsPrjConstraintEN,
): Promise<AddRecordResult> {
  const strThisFuncName = 'AddNewObjSave';
  try {
    PrjConstraint_CheckPropertyNew(objPrjConstraintEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${prjConstraint_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    alert(strMsg);
    return { keyword: '', success: false }; //一定要有一个返回值,否则会出错!
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await PrjConstraint_CheckUniCond4Add(objPrjConstraintEN);
    if (bolIsExistCond == false) {
      return { keyword: '', success: false };
    }
    let returnBool = false;
    const returnKeyId = await PrjConstraint_AddNewRecordWithMaxIdAsync(objPrjConstraintEN);
    if (IsNullOrEmpty(returnKeyId) == false) {
      returnBool = true;
    }
    if (returnBool == true) {
      //PrjConstraint_ReFreshCache();
    } else {
      const strInfo = `添加[约束(PrjConstraint)]记录不成功!`;
      //显示信息框
      throw strInfo;
    }
    return { keyword: returnKeyId, success: returnBool }; //一定要有一个返回值,否则会出错!
  } catch (e) {
    const strMsg = `添加记录不成功,${e}.(in ${prjConstraint_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export async function PrjConstraint_CheckUniCond4Add(
  objPrjConstraintEN: clsPrjConstraintEN,
): Promise<boolean> {
  const strUniquenessCondition = PrjConstraint_GetUniCondStr(objPrjConstraintEN);
  const bolIsExistCondition = await PrjConstraint_IsExistRecordAsync(strUniquenessCondition);
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
export async function PrjConstraint_CheckUniCond4Update(
  objPrjConstraintEN: clsPrjConstraintEN,
): Promise<boolean> {
  const strUniquenessCondition = PrjConstraint_GetUniCondStr4Update(objPrjConstraintEN);
  const bolIsExistCondition = await PrjConstraint_IsExistRecordAsync(strUniquenessCondition);
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
export async function PrjConstraint_UpdateObjSave(
  objPrjConstraintEN: clsPrjConstraintEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateObjSave';
  objPrjConstraintEN.sfUpdFldSetStr = objPrjConstraintEN.updFldString; //设置哪些字段被修改(脏字段)
  if (objPrjConstraintEN.prjConstraintId == '' || objPrjConstraintEN.prjConstraintId == undefined) {
    console.error('关键字不能为空!');
    throw '关键字不能为空!';
  }
  try {
    PrjConstraint_CheckProperty4Update(objPrjConstraintEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${prjConstraint_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await PrjConstraint_CheckUniCond4Update(objPrjConstraintEN);
    if (bolIsExistCond == false) {
      return false;
    }
    const returnBool = await PrjConstraint_UpdateRecordAsync(objPrjConstraintEN);
    if (returnBool == true) {
      //PrjConstraint_ReFreshCache();
    }
    return returnBool;
  } catch (e) {
    const strMsg = `修改记录不成功,${e}.(in ${prjConstraint_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objPrjConstraintEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function PrjConstraint_AddNewRecordWithReturnKeyAsync(
  objPrjConstraintEN: clsPrjConstraintEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(prjConstraint_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPrjConstraintEN, config);
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
        prjConstraint_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjConstraint_ConstructorName,
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
 * @param objPrjConstraintEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function PrjConstraint_UpdateRecordAsync(
  objPrjConstraintEN: clsPrjConstraintEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objPrjConstraintEN.sfUpdFldSetStr === undefined ||
    objPrjConstraintEN.sfUpdFldSetStr === null ||
    objPrjConstraintEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objPrjConstraintEN.prjConstraintId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(prjConstraint_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPrjConstraintEN, config);
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
        prjConstraint_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjConstraint_ConstructorName,
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
 * @param objPrjConstraintEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function PrjConstraint_EditRecordExAsync(
  objPrjConstraintEN: clsPrjConstraintEN,
): Promise<boolean> {
  const strThisFuncName = 'EditRecordExAsync';
  const strAction = 'EditRecordEx';
  if (
    objPrjConstraintEN.sfUpdFldSetStr === undefined ||
    objPrjConstraintEN.sfUpdFldSetStr === null ||
    objPrjConstraintEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objPrjConstraintEN.prjConstraintId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(prjConstraint_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPrjConstraintEN, config);
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
        prjConstraint_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjConstraint_ConstructorName,
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
 * @param objPrjConstraintEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function PrjConstraint_UpdateWithConditionAsync(
  objPrjConstraintEN: clsPrjConstraintEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objPrjConstraintEN.sfUpdFldSetStr === undefined ||
    objPrjConstraintEN.sfUpdFldSetStr === null ||
    objPrjConstraintEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objPrjConstraintEN.prjConstraintId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(prjConstraint_Controller, strAction);
  objPrjConstraintEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPrjConstraintEN, config);
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
        prjConstraint_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjConstraint_ConstructorName,
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
export async function PrjConstraint_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(prjConstraint_Controller, strAction);

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
        prjConstraint_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjConstraint_ConstructorName,
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
 * @param strPrjConstraintId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function PrjConstraint_IsExistAsync(strPrjConstraintId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(prjConstraint_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strPrjConstraintId,
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
        prjConstraint_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjConstraint_ConstructorName,
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
export async function PrjConstraint_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(prjConstraint_Controller, strAction);

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
        prjConstraint_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjConstraint_ConstructorName,
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
 * 获取表的最大关键字
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetMaxStrIdAsync)
 * @returns 获取表的最大关键字
 **/
export async function PrjConstraint_GetMaxStrIdAsync(): Promise<string> {
  const strThisFuncName = 'GetMaxStrIdAsync';
  const strAction = 'GetMaxStrId';
  const strUrl = GetWebApiUrl(prjConstraint_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
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
        prjConstraint_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjConstraint_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
/*该表的关键字类型不是字符型带前缀自增,不需要生成获取最大关键字函数!*/

/**
 * 根据前缀获取当前表关键字值的最大值,再加1,避免重复
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetMaxStrIdByPrefix)
 * @param mapParam:参数列表
 * @returns 获取当前表关键字值的最大值
 */
export async function PrjConstraint_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(prjConstraint_Controller, strAction);

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
        prjConstraint_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjConstraint_ConstructorName,
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
export function PrjConstraint_GetWebApiUrl(strController: string, strAction: string): string {
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
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export async function PrjConstraint_BindDdl_PrjConstraintIdInDiv(
  objDiv: HTMLDivElement,
  strDdlName: string,
) {
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_PrjConstraintIdInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_PrjConstraintIdInDivCache");
  const strCondition = `1=1`;
  const arrObjLstSel = await PrjConstraint_GetObjLstAsync(strCondition);
  if (arrObjLstSel == null) return;
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsPrjConstraintEN.con_PrjConstraintId,
    clsPrjConstraintEN.con_ConstraintName,
    '约束...',
  );
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export async function PrjConstraint_GetArrPrjConstraint() {
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_PrjConstraintIdInDivCache");
  const arrPrjConstraint = new Array<clsPrjConstraintEN>();
  const strCondition = `1=1`;
  const arrObjLstSel = await PrjConstraint_GetObjLstAsync(strCondition);
  if (arrObjLstSel == null) return null;
  const obj0 = new clsPrjConstraintEN();
  obj0.prjConstraintId = '0';
  obj0.constraintName = '选约束...';
  arrPrjConstraint.push(obj0);
  arrObjLstSel.forEach((x) => arrPrjConstraint.push(x));
  return arrPrjConstraint;
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function PrjConstraint_CheckPropertyNew(pobjPrjConstraintEN: clsPrjConstraintEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjPrjConstraintEN.constraintName) === true) {
    throw new Error(
      `(errid:Watl000411)字段[约束名]不能为空(In 约束)!(clsPrjConstraintBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjConstraintEN.prjId) === true ||
    pobjPrjConstraintEN.prjId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000411)字段[工程Id]不能为空(In 约束)!(clsPrjConstraintBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjConstraintEN.tabId) === true ||
    pobjPrjConstraintEN.tabId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000411)字段[表ID]不能为空(In 约束)!(clsPrjConstraintBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjConstraintEN.constraintTypeId) === true ||
    pobjPrjConstraintEN.constraintTypeId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000411)字段[约束类型Id]不能为空(In 约束)!(clsPrjConstraintBL:CheckPropertyNew0)`,
    );
  }
  if (IsNullOrEmpty(pobjPrjConstraintEN.createUserId) === true) {
    throw new Error(
      `(errid:Watl000411)字段[建立用户Id]不能为空(In 约束)!(clsPrjConstraintBL:CheckPropertyNew0)`,
    );
  }
  if (
    null === pobjPrjConstraintEN.isNullable ||
    (pobjPrjConstraintEN.isNullable != null && pobjPrjConstraintEN.isNullable.toString() === '')
  ) {
    throw new Error(
      `(errid:Watl000411)字段[是否可空]不能为空(In 约束)!(clsPrjConstraintBL:CheckPropertyNew0)`,
    );
  }
  if (
    null === pobjPrjConstraintEN.inUse ||
    (pobjPrjConstraintEN.inUse != null && pobjPrjConstraintEN.inUse.toString() === '')
  ) {
    throw new Error(
      `(errid:Watl000411)字段[是否在用]不能为空(In 约束)!(clsPrjConstraintBL:CheckPropertyNew0)`,
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjPrjConstraintEN.prjConstraintId) == false &&
    GetStrLen(pobjPrjConstraintEN.prjConstraintId) > 8
  ) {
    throw new Error(
      `(errid:Watl000413)字段[约束表Id(prjConstraintId)]的长度不能超过8(In 约束(PrjConstraint))!值:${pobjPrjConstraintEN.prjConstraintId}(clsPrjConstraintBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjConstraintEN.constraintName) == false &&
    GetStrLen(pobjPrjConstraintEN.constraintName) > 100
  ) {
    throw new Error(
      `(errid:Watl000413)字段[约束名(constraintName)]的长度不能超过100(In 约束(PrjConstraint))!值:${pobjPrjConstraintEN.constraintName}(clsPrjConstraintBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjConstraintEN.prjId) == false &&
    GetStrLen(pobjPrjConstraintEN.prjId) > 4
  ) {
    throw new Error(
      `(errid:Watl000413)字段[工程Id(prjId)]的长度不能超过4(In 约束(PrjConstraint))!值:${pobjPrjConstraintEN.prjId}(clsPrjConstraintBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjConstraintEN.tabId) == false &&
    GetStrLen(pobjPrjConstraintEN.tabId) > 8
  ) {
    throw new Error(
      `(errid:Watl000413)字段[表ID(tabId)]的长度不能超过8(In 约束(PrjConstraint))!值:${pobjPrjConstraintEN.tabId}(clsPrjConstraintBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjConstraintEN.constraintTypeId) == false &&
    GetStrLen(pobjPrjConstraintEN.constraintTypeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000413)字段[约束类型Id(constraintTypeId)]的长度不能超过2(In 约束(PrjConstraint))!值:${pobjPrjConstraintEN.constraintTypeId}(clsPrjConstraintBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjConstraintEN.constraintDescription) == false &&
    GetStrLen(pobjPrjConstraintEN.constraintDescription) > 500
  ) {
    throw new Error(
      `(errid:Watl000413)字段[约束说明(constraintDescription)]的长度不能超过500(In 约束(PrjConstraint))!值:${pobjPrjConstraintEN.constraintDescription}(clsPrjConstraintBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjConstraintEN.createUserId) == false &&
    GetStrLen(pobjPrjConstraintEN.createUserId) > 18
  ) {
    throw new Error(
      `(errid:Watl000413)字段[建立用户Id(createUserId)]的长度不能超过18(In 约束(PrjConstraint))!值:${pobjPrjConstraintEN.createUserId}(clsPrjConstraintBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjConstraintEN.checkDate) == false &&
    GetStrLen(pobjPrjConstraintEN.checkDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[检查日期(checkDate)]的长度不能超过20(In 约束(PrjConstraint))!值:${pobjPrjConstraintEN.checkDate}(clsPrjConstraintBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjConstraintEN.errMsg) == false &&
    GetStrLen(pobjPrjConstraintEN.errMsg) > 2000
  ) {
    throw new Error(
      `(errid:Watl000413)字段[错误信息(errMsg)]的长度不能超过2000(In 约束(PrjConstraint))!值:${pobjPrjConstraintEN.errMsg}(clsPrjConstraintBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjConstraintEN.updDate) == false &&
    GetStrLen(pobjPrjConstraintEN.updDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 约束(PrjConstraint))!值:${pobjPrjConstraintEN.updDate}(clsPrjConstraintBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjConstraintEN.updUser) == false &&
    GetStrLen(pobjPrjConstraintEN.updUser) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改者(updUser)]的长度不能超过20(In 约束(PrjConstraint))!值:${pobjPrjConstraintEN.updUser}(clsPrjConstraintBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjConstraintEN.memo) == false &&
    GetStrLen(pobjPrjConstraintEN.memo) > 1000
  ) {
    throw new Error(
      `(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In 约束(PrjConstraint))!值:${pobjPrjConstraintEN.memo}(clsPrjConstraintBL:CheckPropertyNew)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjPrjConstraintEN.prjConstraintId) == false &&
    undefined !== pobjPrjConstraintEN.prjConstraintId &&
    tzDataType.isString(pobjPrjConstraintEN.prjConstraintId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[约束表Id(prjConstraintId)]的值:[${pobjPrjConstraintEN.prjConstraintId}], 非法,应该为字符型(In 约束(PrjConstraint))!(clsPrjConstraintBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjConstraintEN.constraintName) == false &&
    undefined !== pobjPrjConstraintEN.constraintName &&
    tzDataType.isString(pobjPrjConstraintEN.constraintName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[约束名(constraintName)]的值:[${pobjPrjConstraintEN.constraintName}], 非法,应该为字符型(In 约束(PrjConstraint))!(clsPrjConstraintBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjConstraintEN.prjId) == false &&
    undefined !== pobjPrjConstraintEN.prjId &&
    tzDataType.isString(pobjPrjConstraintEN.prjId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[工程Id(prjId)]的值:[${pobjPrjConstraintEN.prjId}], 非法,应该为字符型(In 约束(PrjConstraint))!(clsPrjConstraintBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjConstraintEN.tabId) == false &&
    undefined !== pobjPrjConstraintEN.tabId &&
    tzDataType.isString(pobjPrjConstraintEN.tabId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[表ID(tabId)]的值:[${pobjPrjConstraintEN.tabId}], 非法,应该为字符型(In 约束(PrjConstraint))!(clsPrjConstraintBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjConstraintEN.constraintTypeId) == false &&
    undefined !== pobjPrjConstraintEN.constraintTypeId &&
    tzDataType.isString(pobjPrjConstraintEN.constraintTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[约束类型Id(constraintTypeId)]的值:[${pobjPrjConstraintEN.constraintTypeId}], 非法,应该为字符型(In 约束(PrjConstraint))!(clsPrjConstraintBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjConstraintEN.constraintDescription) == false &&
    undefined !== pobjPrjConstraintEN.constraintDescription &&
    tzDataType.isString(pobjPrjConstraintEN.constraintDescription) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[约束说明(constraintDescription)]的值:[${pobjPrjConstraintEN.constraintDescription}], 非法,应该为字符型(In 约束(PrjConstraint))!(clsPrjConstraintBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjConstraintEN.createUserId) == false &&
    undefined !== pobjPrjConstraintEN.createUserId &&
    tzDataType.isString(pobjPrjConstraintEN.createUserId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[建立用户Id(createUserId)]的值:[${pobjPrjConstraintEN.createUserId}], 非法,应该为字符型(In 约束(PrjConstraint))!(clsPrjConstraintBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjPrjConstraintEN.isNullable &&
    undefined !== pobjPrjConstraintEN.isNullable &&
    tzDataType.isBoolean(pobjPrjConstraintEN.isNullable) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否可空(isNullable)]的值:[${pobjPrjConstraintEN.isNullable}], 非法,应该为布尔型(In 约束(PrjConstraint))!(clsPrjConstraintBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjConstraintEN.checkDate) == false &&
    undefined !== pobjPrjConstraintEN.checkDate &&
    tzDataType.isString(pobjPrjConstraintEN.checkDate) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[检查日期(checkDate)]的值:[${pobjPrjConstraintEN.checkDate}], 非法,应该为字符型(In 约束(PrjConstraint))!(clsPrjConstraintBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjConstraintEN.errMsg) == false &&
    undefined !== pobjPrjConstraintEN.errMsg &&
    tzDataType.isString(pobjPrjConstraintEN.errMsg) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[错误信息(errMsg)]的值:[${pobjPrjConstraintEN.errMsg}], 非法,应该为字符型(In 约束(PrjConstraint))!(clsPrjConstraintBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjPrjConstraintEN.inUse &&
    undefined !== pobjPrjConstraintEN.inUse &&
    tzDataType.isBoolean(pobjPrjConstraintEN.inUse) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否在用(inUse)]的值:[${pobjPrjConstraintEN.inUse}], 非法,应该为布尔型(In 约束(PrjConstraint))!(clsPrjConstraintBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjConstraintEN.updDate) == false &&
    undefined !== pobjPrjConstraintEN.updDate &&
    tzDataType.isString(pobjPrjConstraintEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjPrjConstraintEN.updDate}], 非法,应该为字符型(In 约束(PrjConstraint))!(clsPrjConstraintBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjConstraintEN.updUser) == false &&
    undefined !== pobjPrjConstraintEN.updUser &&
    tzDataType.isString(pobjPrjConstraintEN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改者(updUser)]的值:[${pobjPrjConstraintEN.updUser}], 非法,应该为字符型(In 约束(PrjConstraint))!(clsPrjConstraintBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjConstraintEN.memo) == false &&
    undefined !== pobjPrjConstraintEN.memo &&
    tzDataType.isString(pobjPrjConstraintEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[说明(memo)]的值:[${pobjPrjConstraintEN.memo}], 非法,应该为字符型(In 约束(PrjConstraint))!(clsPrjConstraintBL:CheckPropertyNew0)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function PrjConstraint_CheckProperty4Update(pobjPrjConstraintEN: clsPrjConstraintEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjPrjConstraintEN.prjConstraintId) == false &&
    GetStrLen(pobjPrjConstraintEN.prjConstraintId) > 8
  ) {
    throw new Error(
      `(errid:Watl000416)字段[约束表Id(prjConstraintId)]的长度不能超过8(In 约束(PrjConstraint))!值:${pobjPrjConstraintEN.prjConstraintId}(clsPrjConstraintBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjConstraintEN.constraintName) == false &&
    GetStrLen(pobjPrjConstraintEN.constraintName) > 100
  ) {
    throw new Error(
      `(errid:Watl000416)字段[约束名(constraintName)]的长度不能超过100(In 约束(PrjConstraint))!值:${pobjPrjConstraintEN.constraintName}(clsPrjConstraintBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjConstraintEN.prjId) == false &&
    GetStrLen(pobjPrjConstraintEN.prjId) > 4
  ) {
    throw new Error(
      `(errid:Watl000416)字段[工程Id(prjId)]的长度不能超过4(In 约束(PrjConstraint))!值:${pobjPrjConstraintEN.prjId}(clsPrjConstraintBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjConstraintEN.tabId) == false &&
    GetStrLen(pobjPrjConstraintEN.tabId) > 8
  ) {
    throw new Error(
      `(errid:Watl000416)字段[表ID(tabId)]的长度不能超过8(In 约束(PrjConstraint))!值:${pobjPrjConstraintEN.tabId}(clsPrjConstraintBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjConstraintEN.constraintTypeId) == false &&
    GetStrLen(pobjPrjConstraintEN.constraintTypeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000416)字段[约束类型Id(constraintTypeId)]的长度不能超过2(In 约束(PrjConstraint))!值:${pobjPrjConstraintEN.constraintTypeId}(clsPrjConstraintBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjConstraintEN.constraintDescription) == false &&
    GetStrLen(pobjPrjConstraintEN.constraintDescription) > 500
  ) {
    throw new Error(
      `(errid:Watl000416)字段[约束说明(constraintDescription)]的长度不能超过500(In 约束(PrjConstraint))!值:${pobjPrjConstraintEN.constraintDescription}(clsPrjConstraintBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjConstraintEN.createUserId) == false &&
    GetStrLen(pobjPrjConstraintEN.createUserId) > 18
  ) {
    throw new Error(
      `(errid:Watl000416)字段[建立用户Id(createUserId)]的长度不能超过18(In 约束(PrjConstraint))!值:${pobjPrjConstraintEN.createUserId}(clsPrjConstraintBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjConstraintEN.checkDate) == false &&
    GetStrLen(pobjPrjConstraintEN.checkDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[检查日期(checkDate)]的长度不能超过20(In 约束(PrjConstraint))!值:${pobjPrjConstraintEN.checkDate}(clsPrjConstraintBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjConstraintEN.errMsg) == false &&
    GetStrLen(pobjPrjConstraintEN.errMsg) > 2000
  ) {
    throw new Error(
      `(errid:Watl000416)字段[错误信息(errMsg)]的长度不能超过2000(In 约束(PrjConstraint))!值:${pobjPrjConstraintEN.errMsg}(clsPrjConstraintBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjConstraintEN.updDate) == false &&
    GetStrLen(pobjPrjConstraintEN.updDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 约束(PrjConstraint))!值:${pobjPrjConstraintEN.updDate}(clsPrjConstraintBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjConstraintEN.updUser) == false &&
    GetStrLen(pobjPrjConstraintEN.updUser) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改者(updUser)]的长度不能超过20(In 约束(PrjConstraint))!值:${pobjPrjConstraintEN.updUser}(clsPrjConstraintBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjConstraintEN.memo) == false &&
    GetStrLen(pobjPrjConstraintEN.memo) > 1000
  ) {
    throw new Error(
      `(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In 约束(PrjConstraint))!值:${pobjPrjConstraintEN.memo}(clsPrjConstraintBL:CheckProperty4Update)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjPrjConstraintEN.prjConstraintId) == false &&
    undefined !== pobjPrjConstraintEN.prjConstraintId &&
    tzDataType.isString(pobjPrjConstraintEN.prjConstraintId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[约束表Id(prjConstraintId)]的值:[${pobjPrjConstraintEN.prjConstraintId}], 非法,应该为字符型(In 约束(PrjConstraint))!(clsPrjConstraintBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjConstraintEN.constraintName) == false &&
    undefined !== pobjPrjConstraintEN.constraintName &&
    tzDataType.isString(pobjPrjConstraintEN.constraintName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[约束名(constraintName)]的值:[${pobjPrjConstraintEN.constraintName}], 非法,应该为字符型(In 约束(PrjConstraint))!(clsPrjConstraintBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjConstraintEN.prjId) == false &&
    undefined !== pobjPrjConstraintEN.prjId &&
    tzDataType.isString(pobjPrjConstraintEN.prjId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[工程Id(prjId)]的值:[${pobjPrjConstraintEN.prjId}], 非法,应该为字符型(In 约束(PrjConstraint))!(clsPrjConstraintBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjConstraintEN.tabId) == false &&
    undefined !== pobjPrjConstraintEN.tabId &&
    tzDataType.isString(pobjPrjConstraintEN.tabId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[表ID(tabId)]的值:[${pobjPrjConstraintEN.tabId}], 非法,应该为字符型(In 约束(PrjConstraint))!(clsPrjConstraintBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjConstraintEN.constraintTypeId) == false &&
    undefined !== pobjPrjConstraintEN.constraintTypeId &&
    tzDataType.isString(pobjPrjConstraintEN.constraintTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[约束类型Id(constraintTypeId)]的值:[${pobjPrjConstraintEN.constraintTypeId}], 非法,应该为字符型(In 约束(PrjConstraint))!(clsPrjConstraintBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjConstraintEN.constraintDescription) == false &&
    undefined !== pobjPrjConstraintEN.constraintDescription &&
    tzDataType.isString(pobjPrjConstraintEN.constraintDescription) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[约束说明(constraintDescription)]的值:[${pobjPrjConstraintEN.constraintDescription}], 非法,应该为字符型(In 约束(PrjConstraint))!(clsPrjConstraintBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjConstraintEN.createUserId) == false &&
    undefined !== pobjPrjConstraintEN.createUserId &&
    tzDataType.isString(pobjPrjConstraintEN.createUserId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[建立用户Id(createUserId)]的值:[${pobjPrjConstraintEN.createUserId}], 非法,应该为字符型(In 约束(PrjConstraint))!(clsPrjConstraintBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjPrjConstraintEN.isNullable &&
    undefined !== pobjPrjConstraintEN.isNullable &&
    tzDataType.isBoolean(pobjPrjConstraintEN.isNullable) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否可空(isNullable)]的值:[${pobjPrjConstraintEN.isNullable}], 非法,应该为布尔型(In 约束(PrjConstraint))!(clsPrjConstraintBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjConstraintEN.checkDate) == false &&
    undefined !== pobjPrjConstraintEN.checkDate &&
    tzDataType.isString(pobjPrjConstraintEN.checkDate) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[检查日期(checkDate)]的值:[${pobjPrjConstraintEN.checkDate}], 非法,应该为字符型(In 约束(PrjConstraint))!(clsPrjConstraintBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjConstraintEN.errMsg) == false &&
    undefined !== pobjPrjConstraintEN.errMsg &&
    tzDataType.isString(pobjPrjConstraintEN.errMsg) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[错误信息(errMsg)]的值:[${pobjPrjConstraintEN.errMsg}], 非法,应该为字符型(In 约束(PrjConstraint))!(clsPrjConstraintBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjPrjConstraintEN.inUse &&
    undefined !== pobjPrjConstraintEN.inUse &&
    tzDataType.isBoolean(pobjPrjConstraintEN.inUse) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否在用(inUse)]的值:[${pobjPrjConstraintEN.inUse}], 非法,应该为布尔型(In 约束(PrjConstraint))!(clsPrjConstraintBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjConstraintEN.updDate) == false &&
    undefined !== pobjPrjConstraintEN.updDate &&
    tzDataType.isString(pobjPrjConstraintEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjPrjConstraintEN.updDate}], 非法,应该为字符型(In 约束(PrjConstraint))!(clsPrjConstraintBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjConstraintEN.updUser) == false &&
    undefined !== pobjPrjConstraintEN.updUser &&
    tzDataType.isString(pobjPrjConstraintEN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改者(updUser)]的值:[${pobjPrjConstraintEN.updUser}], 非法,应该为字符型(In 约束(PrjConstraint))!(clsPrjConstraintBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjConstraintEN.memo) == false &&
    undefined !== pobjPrjConstraintEN.memo &&
    tzDataType.isString(pobjPrjConstraintEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[说明(memo)]的值:[${pobjPrjConstraintEN.memo}], 非法,应该为字符型(In 约束(PrjConstraint))!(clsPrjConstraintBL:CheckProperty4Update)`,
    );
  }
  //检查主键是否为Null或者空!
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
export function PrjConstraint_GetJSONStrByObj(pobjPrjConstraintEN: clsPrjConstraintEN): string {
  pobjPrjConstraintEN.sfUpdFldSetStr = pobjPrjConstraintEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjPrjConstraintEN);
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
export function PrjConstraint_GetObjLstByJSONStr(strJSON: string): Array<clsPrjConstraintEN> {
  let arrPrjConstraintObjLst = new Array<clsPrjConstraintEN>();
  if (strJSON === '') {
    return arrPrjConstraintObjLst;
  }
  try {
    arrPrjConstraintObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrPrjConstraintObjLst;
  }
  return arrPrjConstraintObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrPrjConstraintObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function PrjConstraint_GetObjLstByJSONObjLst(
  arrPrjConstraintObjLstS: Array<clsPrjConstraintEN>,
): Array<clsPrjConstraintEN> {
  const arrPrjConstraintObjLst = new Array<clsPrjConstraintEN>();
  for (const objInFor of arrPrjConstraintObjLstS) {
    const obj1 = PrjConstraint_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrPrjConstraintObjLst.push(obj1);
  }
  return arrPrjConstraintObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function PrjConstraint_GetObjByJSONStr(strJSON: string): clsPrjConstraintEN {
  let pobjPrjConstraintEN = new clsPrjConstraintEN();
  if (strJSON === '') {
    return pobjPrjConstraintEN;
  }
  try {
    pobjPrjConstraintEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjPrjConstraintEN;
  }
  return pobjPrjConstraintEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function PrjConstraint_GetCombineCondition(
  objPrjConstraintCond: clsPrjConstraintEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjConstraintCond.dicFldComparisonOp,
      clsPrjConstraintEN.con_PrjConstraintId,
    ) == true
  ) {
    const strComparisonOpPrjConstraintId: string =
      objPrjConstraintCond.dicFldComparisonOp[clsPrjConstraintEN.con_PrjConstraintId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjConstraintEN.con_PrjConstraintId,
      objPrjConstraintCond.prjConstraintId,
      strComparisonOpPrjConstraintId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjConstraintCond.dicFldComparisonOp,
      clsPrjConstraintEN.con_ConstraintName,
    ) == true
  ) {
    const strComparisonOpConstraintName: string =
      objPrjConstraintCond.dicFldComparisonOp[clsPrjConstraintEN.con_ConstraintName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjConstraintEN.con_ConstraintName,
      objPrjConstraintCond.constraintName,
      strComparisonOpConstraintName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjConstraintCond.dicFldComparisonOp,
      clsPrjConstraintEN.con_PrjId,
    ) == true
  ) {
    const strComparisonOpPrjId: string =
      objPrjConstraintCond.dicFldComparisonOp[clsPrjConstraintEN.con_PrjId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjConstraintEN.con_PrjId,
      objPrjConstraintCond.prjId,
      strComparisonOpPrjId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjConstraintCond.dicFldComparisonOp,
      clsPrjConstraintEN.con_TabId,
    ) == true
  ) {
    const strComparisonOpTabId: string =
      objPrjConstraintCond.dicFldComparisonOp[clsPrjConstraintEN.con_TabId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjConstraintEN.con_TabId,
      objPrjConstraintCond.tabId,
      strComparisonOpTabId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjConstraintCond.dicFldComparisonOp,
      clsPrjConstraintEN.con_ConstraintTypeId,
    ) == true
  ) {
    const strComparisonOpConstraintTypeId: string =
      objPrjConstraintCond.dicFldComparisonOp[clsPrjConstraintEN.con_ConstraintTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjConstraintEN.con_ConstraintTypeId,
      objPrjConstraintCond.constraintTypeId,
      strComparisonOpConstraintTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjConstraintCond.dicFldComparisonOp,
      clsPrjConstraintEN.con_ConstraintDescription,
    ) == true
  ) {
    const strComparisonOpConstraintDescription: string =
      objPrjConstraintCond.dicFldComparisonOp[clsPrjConstraintEN.con_ConstraintDescription];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjConstraintEN.con_ConstraintDescription,
      objPrjConstraintCond.constraintDescription,
      strComparisonOpConstraintDescription,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjConstraintCond.dicFldComparisonOp,
      clsPrjConstraintEN.con_CreateUserId,
    ) == true
  ) {
    const strComparisonOpCreateUserId: string =
      objPrjConstraintCond.dicFldComparisonOp[clsPrjConstraintEN.con_CreateUserId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjConstraintEN.con_CreateUserId,
      objPrjConstraintCond.createUserId,
      strComparisonOpCreateUserId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjConstraintCond.dicFldComparisonOp,
      clsPrjConstraintEN.con_IsNullable,
    ) == true
  ) {
    if (objPrjConstraintCond.isNullable == true) {
      strWhereCond += Format(" And {0} = '1'", clsPrjConstraintEN.con_IsNullable);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsPrjConstraintEN.con_IsNullable);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjConstraintCond.dicFldComparisonOp,
      clsPrjConstraintEN.con_CheckDate,
    ) == true
  ) {
    const strComparisonOpCheckDate: string =
      objPrjConstraintCond.dicFldComparisonOp[clsPrjConstraintEN.con_CheckDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjConstraintEN.con_CheckDate,
      objPrjConstraintCond.checkDate,
      strComparisonOpCheckDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjConstraintCond.dicFldComparisonOp,
      clsPrjConstraintEN.con_ErrMsg,
    ) == true
  ) {
    const strComparisonOpErrMsg: string =
      objPrjConstraintCond.dicFldComparisonOp[clsPrjConstraintEN.con_ErrMsg];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjConstraintEN.con_ErrMsg,
      objPrjConstraintCond.errMsg,
      strComparisonOpErrMsg,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjConstraintCond.dicFldComparisonOp,
      clsPrjConstraintEN.con_InUse,
    ) == true
  ) {
    if (objPrjConstraintCond.inUse == true) {
      strWhereCond += Format(" And {0} = '1'", clsPrjConstraintEN.con_InUse);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsPrjConstraintEN.con_InUse);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjConstraintCond.dicFldComparisonOp,
      clsPrjConstraintEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objPrjConstraintCond.dicFldComparisonOp[clsPrjConstraintEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjConstraintEN.con_UpdDate,
      objPrjConstraintCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjConstraintCond.dicFldComparisonOp,
      clsPrjConstraintEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objPrjConstraintCond.dicFldComparisonOp[clsPrjConstraintEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjConstraintEN.con_UpdUser,
      objPrjConstraintCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjConstraintCond.dicFldComparisonOp,
      clsPrjConstraintEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objPrjConstraintCond.dicFldComparisonOp[clsPrjConstraintEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjConstraintEN.con_Memo,
      objPrjConstraintCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--PrjConstraint(约束),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strConstraintName: 约束名(要求唯一的字段)
 * @param strPrjId: 工程Id(要求唯一的字段)
 * @param strTabId: 表ID(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function PrjConstraint_GetUniCondStr(objPrjConstraintEN: clsPrjConstraintEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and ConstraintName = '{0}'", objPrjConstraintEN.constraintName);
  strWhereCond += Format(" and PrjId = '{0}'", objPrjConstraintEN.prjId);
  strWhereCond += Format(" and TabId = '{0}'", objPrjConstraintEN.tabId);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--PrjConstraint(约束),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strConstraintName: 约束名(要求唯一的字段)
 * @param strPrjId: 工程Id(要求唯一的字段)
 * @param strTabId: 表ID(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function PrjConstraint_GetUniCondStr4Update(objPrjConstraintEN: clsPrjConstraintEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and PrjConstraintId <> '{0}'", objPrjConstraintEN.prjConstraintId);
  strWhereCond += Format(" and ConstraintName = '{0}'", objPrjConstraintEN.constraintName);
  strWhereCond += Format(" and PrjId = '{0}'", objPrjConstraintEN.prjId);
  strWhereCond += Format(" and TabId = '{0}'", objPrjConstraintEN.tabId);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objPrjConstraintENS:源对象
 * @param objPrjConstraintENT:目标对象
 */
export function PrjConstraint_GetObjFromJsonObj(
  objPrjConstraintENS: clsPrjConstraintEN,
): clsPrjConstraintEN {
  const objPrjConstraintENT: clsPrjConstraintEN = new clsPrjConstraintEN();
  ObjectAssign(objPrjConstraintENT, objPrjConstraintENS);
  return objPrjConstraintENT;
}
