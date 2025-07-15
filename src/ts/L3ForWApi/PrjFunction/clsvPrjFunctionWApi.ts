/**
 * 类名:clsvPrjFunctionWApi
 * 表名:vPrjFunction(00050259)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/05 22:36:07
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
 * v工程函数(vPrjFunction)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2023年11月05日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import {
  BindDdl_ObjLstInDivObj_V,
  GetExceptionStr,
  myShowErrorMsg,
  ObjectAssign,
} from '@/ts/PubFun/clsCommFunc4Web';
import { clsvPrjFunctionEN } from '@/ts/L0Entity/PrjFunction/clsvPrjFunctionEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const vPrjFunction_Controller = 'vPrjFunctionApi';
export const vPrjFunction_ConstructorName = 'vPrjFunction';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strFuncId:关键字
 * @returns 对象
 **/
export async function vPrjFunction_GetObjByFuncIdAsync(
  strFuncId: string,
): Promise<clsvPrjFunctionEN | null> {
  const strThisFuncName = 'GetObjByFuncIdAsync';

  if (IsNullOrEmpty(strFuncId) == true) {
    const strMsg = Format('参数:[strFuncId]不能为空!(In clsvPrjFunctionWApi.GetObjByFuncIdAsync)');
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByFuncId';
  const strUrl = GetWebApiUrl(vPrjFunction_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strFuncId,
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
      const objvPrjFunction = vPrjFunction_GetObjFromJsonObj(returnObj);
      return objvPrjFunction;
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
        vPrjFunction_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vPrjFunction_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[GetObjByFuncIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )
//该表没有使用Cache,不需要生成[GetObjByFuncIdlocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[GetNameByFuncIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
//该表没有使用Cache,不需要生成[func]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func )

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2023-11-05
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function vPrjFunction_SortFunDefa(a: clsvPrjFunctionEN, b: clsvPrjFunctionEN): number {
  return a.funcId.localeCompare(b.funcId);
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2023-11-05
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function vPrjFunction_SortFunDefa2Fld(a: clsvPrjFunctionEN, b: clsvPrjFunctionEN): number {
  if (a.funcName == b.funcName) return a.prjId.localeCompare(b.prjId);
  else return a.funcName.localeCompare(b.funcName);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2023-11-05
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function vPrjFunction_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsvPrjFunctionEN.con_FuncId:
        return (a: clsvPrjFunctionEN, b: clsvPrjFunctionEN) => {
          return a.funcId.localeCompare(b.funcId);
        };
      case clsvPrjFunctionEN.con_FuncName:
        return (a: clsvPrjFunctionEN, b: clsvPrjFunctionEN) => {
          return a.funcName.localeCompare(b.funcName);
        };
      case clsvPrjFunctionEN.con_PrjId:
        return (a: clsvPrjFunctionEN, b: clsvPrjFunctionEN) => {
          return a.prjId.localeCompare(b.prjId);
        };
      case clsvPrjFunctionEN.con_ReturnTypeId:
        return (a: clsvPrjFunctionEN, b: clsvPrjFunctionEN) => {
          return a.returnTypeId.localeCompare(b.returnTypeId);
        };
      case clsvPrjFunctionEN.con_DataTypeName:
        return (a: clsvPrjFunctionEN, b: clsvPrjFunctionEN) => {
          if (a.dataTypeName == null) return -1;
          if (b.dataTypeName == null) return 1;
          return a.dataTypeName.localeCompare(b.dataTypeName);
        };
      case clsvPrjFunctionEN.con_DataCnName:
        return (a: clsvPrjFunctionEN, b: clsvPrjFunctionEN) => {
          if (a.dataCnName == null) return -1;
          if (b.dataCnName == null) return 1;
          return a.dataCnName.localeCompare(b.dataCnName);
        };
      case clsvPrjFunctionEN.con_CsType:
        return (a: clsvPrjFunctionEN, b: clsvPrjFunctionEN) => {
          if (a.csType == null) return -1;
          if (b.csType == null) return 1;
          return a.csType.localeCompare(b.csType);
        };
      case clsvPrjFunctionEN.con_FuncTypeId:
        return (a: clsvPrjFunctionEN, b: clsvPrjFunctionEN) => {
          return a.funcTypeId.localeCompare(b.funcTypeId);
        };
      case clsvPrjFunctionEN.con_FuncTypeName:
        return (a: clsvPrjFunctionEN, b: clsvPrjFunctionEN) => {
          if (a.funcTypeName == null) return -1;
          if (b.funcTypeName == null) return 1;
          return a.funcTypeName.localeCompare(b.funcTypeName);
        };
      case clsvPrjFunctionEN.con_IsTemplate:
        return (a: clsvPrjFunctionEN) => {
          if (a.isTemplate == true) return 1;
          else return -1;
        };
      case clsvPrjFunctionEN.con_FuncCode:
        return (a: clsvPrjFunctionEN, b: clsvPrjFunctionEN) => {
          if (a.funcCode == null) return -1;
          if (b.funcCode == null) return 1;
          return a.funcCode.localeCompare(b.funcCode);
        };
      case clsvPrjFunctionEN.con_UserId:
        return (a: clsvPrjFunctionEN, b: clsvPrjFunctionEN) => {
          if (a.userId == null) return -1;
          if (b.userId == null) return 1;
          return a.userId.localeCompare(b.userId);
        };
      case clsvPrjFunctionEN.con_UpdDate:
        return (a: clsvPrjFunctionEN, b: clsvPrjFunctionEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsvPrjFunctionEN.con_UpdUser:
        return (a: clsvPrjFunctionEN, b: clsvPrjFunctionEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsvPrjFunctionEN.con_Memo:
        return (a: clsvPrjFunctionEN, b: clsvPrjFunctionEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vPrjFunction]中不存在!(in ${vPrjFunction_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsvPrjFunctionEN.con_FuncId:
        return (a: clsvPrjFunctionEN, b: clsvPrjFunctionEN) => {
          return b.funcId.localeCompare(a.funcId);
        };
      case clsvPrjFunctionEN.con_FuncName:
        return (a: clsvPrjFunctionEN, b: clsvPrjFunctionEN) => {
          return b.funcName.localeCompare(a.funcName);
        };
      case clsvPrjFunctionEN.con_PrjId:
        return (a: clsvPrjFunctionEN, b: clsvPrjFunctionEN) => {
          return b.prjId.localeCompare(a.prjId);
        };
      case clsvPrjFunctionEN.con_ReturnTypeId:
        return (a: clsvPrjFunctionEN, b: clsvPrjFunctionEN) => {
          return b.returnTypeId.localeCompare(a.returnTypeId);
        };
      case clsvPrjFunctionEN.con_DataTypeName:
        return (a: clsvPrjFunctionEN, b: clsvPrjFunctionEN) => {
          if (b.dataTypeName == null) return -1;
          if (a.dataTypeName == null) return 1;
          return b.dataTypeName.localeCompare(a.dataTypeName);
        };
      case clsvPrjFunctionEN.con_DataCnName:
        return (a: clsvPrjFunctionEN, b: clsvPrjFunctionEN) => {
          if (b.dataCnName == null) return -1;
          if (a.dataCnName == null) return 1;
          return b.dataCnName.localeCompare(a.dataCnName);
        };
      case clsvPrjFunctionEN.con_CsType:
        return (a: clsvPrjFunctionEN, b: clsvPrjFunctionEN) => {
          if (b.csType == null) return -1;
          if (a.csType == null) return 1;
          return b.csType.localeCompare(a.csType);
        };
      case clsvPrjFunctionEN.con_FuncTypeId:
        return (a: clsvPrjFunctionEN, b: clsvPrjFunctionEN) => {
          return b.funcTypeId.localeCompare(a.funcTypeId);
        };
      case clsvPrjFunctionEN.con_FuncTypeName:
        return (a: clsvPrjFunctionEN, b: clsvPrjFunctionEN) => {
          if (b.funcTypeName == null) return -1;
          if (a.funcTypeName == null) return 1;
          return b.funcTypeName.localeCompare(a.funcTypeName);
        };
      case clsvPrjFunctionEN.con_IsTemplate:
        return (b: clsvPrjFunctionEN) => {
          if (b.isTemplate == true) return 1;
          else return -1;
        };
      case clsvPrjFunctionEN.con_FuncCode:
        return (a: clsvPrjFunctionEN, b: clsvPrjFunctionEN) => {
          if (b.funcCode == null) return -1;
          if (a.funcCode == null) return 1;
          return b.funcCode.localeCompare(a.funcCode);
        };
      case clsvPrjFunctionEN.con_UserId:
        return (a: clsvPrjFunctionEN, b: clsvPrjFunctionEN) => {
          if (b.userId == null) return -1;
          if (a.userId == null) return 1;
          return b.userId.localeCompare(a.userId);
        };
      case clsvPrjFunctionEN.con_UpdDate:
        return (a: clsvPrjFunctionEN, b: clsvPrjFunctionEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsvPrjFunctionEN.con_UpdUser:
        return (a: clsvPrjFunctionEN, b: clsvPrjFunctionEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsvPrjFunctionEN.con_Memo:
        return (a: clsvPrjFunctionEN, b: clsvPrjFunctionEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vPrjFunction]中不存在!(in ${vPrjFunction_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2023-11-05
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function vPrjFunction_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsvPrjFunctionEN.con_FuncId:
      return (obj: clsvPrjFunctionEN) => {
        return obj.funcId === value;
      };
    case clsvPrjFunctionEN.con_FuncName:
      return (obj: clsvPrjFunctionEN) => {
        return obj.funcName === value;
      };
    case clsvPrjFunctionEN.con_PrjId:
      return (obj: clsvPrjFunctionEN) => {
        return obj.prjId === value;
      };
    case clsvPrjFunctionEN.con_ReturnTypeId:
      return (obj: clsvPrjFunctionEN) => {
        return obj.returnTypeId === value;
      };
    case clsvPrjFunctionEN.con_DataTypeName:
      return (obj: clsvPrjFunctionEN) => {
        return obj.dataTypeName === value;
      };
    case clsvPrjFunctionEN.con_DataCnName:
      return (obj: clsvPrjFunctionEN) => {
        return obj.dataCnName === value;
      };
    case clsvPrjFunctionEN.con_CsType:
      return (obj: clsvPrjFunctionEN) => {
        return obj.csType === value;
      };
    case clsvPrjFunctionEN.con_FuncTypeId:
      return (obj: clsvPrjFunctionEN) => {
        return obj.funcTypeId === value;
      };
    case clsvPrjFunctionEN.con_FuncTypeName:
      return (obj: clsvPrjFunctionEN) => {
        return obj.funcTypeName === value;
      };
    case clsvPrjFunctionEN.con_IsTemplate:
      return (obj: clsvPrjFunctionEN) => {
        return obj.isTemplate === value;
      };
    case clsvPrjFunctionEN.con_FuncCode:
      return (obj: clsvPrjFunctionEN) => {
        return obj.funcCode === value;
      };
    case clsvPrjFunctionEN.con_UserId:
      return (obj: clsvPrjFunctionEN) => {
        return obj.userId === value;
      };
    case clsvPrjFunctionEN.con_UpdDate:
      return (obj: clsvPrjFunctionEN) => {
        return obj.updDate === value;
      };
    case clsvPrjFunctionEN.con_UpdUser:
      return (obj: clsvPrjFunctionEN) => {
        return obj.updUser === value;
      };
    case clsvPrjFunctionEN.con_Memo:
      return (obj: clsvPrjFunctionEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[vPrjFunction]中不存在!(in ${vPrjFunction_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}
//该表没有使用Cache,不需要生成[vPrjFunction__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function vPrjFunction_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vPrjFunction_Controller, strAction);

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
        vPrjFunction_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vPrjFunction_ConstructorName,
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
export async function vPrjFunction_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vPrjFunction_Controller, strAction);

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
        vPrjFunction_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vPrjFunction_ConstructorName,
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
export async function vPrjFunction_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsvPrjFunctionEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(vPrjFunction_Controller, strAction);

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
      const objvPrjFunction = vPrjFunction_GetObjFromJsonObj(returnObj);
      return objvPrjFunction;
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
        vPrjFunction_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vPrjFunction_ConstructorName,
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
export async function vPrjFunction_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsvPrjFunctionEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(vPrjFunction_Controller, strAction);

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
          vPrjFunction_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vPrjFunction_GetObjLstByJSONObjLst(returnObjLst);
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
        vPrjFunction_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vPrjFunction_ConstructorName,
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
 * @param arrFuncId:关键字列表
 * @returns 对象列表
 **/
export async function vPrjFunction_GetObjLstByFuncIdLstAsync(
  arrFuncId: Array<string>,
): Promise<Array<clsvPrjFunctionEN>> {
  const strThisFuncName = 'GetObjLstByFuncIdLstAsync';
  const strAction = 'GetObjLstByFuncIdLst';
  const strUrl = GetWebApiUrl(vPrjFunction_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrFuncId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          vPrjFunction_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vPrjFunction_GetObjLstByJSONObjLst(returnObjLst);
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
        vPrjFunction_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vPrjFunction_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[GetObjLstByFuncIdLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

/**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export async function vPrjFunction_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsvPrjFunctionEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(vPrjFunction_Controller, strAction);

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
          vPrjFunction_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vPrjFunction_GetObjLstByJSONObjLst(returnObjLst);
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
        vPrjFunction_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vPrjFunction_ConstructorName,
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
export async function vPrjFunction_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsvPrjFunctionEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(vPrjFunction_Controller, strAction);

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
          vPrjFunction_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vPrjFunction_GetObjLstByJSONObjLst(returnObjLst);
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
        vPrjFunction_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vPrjFunction_ConstructorName,
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
export async function vPrjFunction_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsvPrjFunctionEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsvPrjFunctionEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(vPrjFunction_Controller, strAction);

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
          vPrjFunction_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vPrjFunction_GetObjLstByJSONObjLst(returnObjLst);
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
        vPrjFunction_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vPrjFunction_ConstructorName,
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
export async function vPrjFunction_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(vPrjFunction_Controller, strAction);

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
        vPrjFunction_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vPrjFunction_ConstructorName,
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
 * @param strFuncId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function vPrjFunction_IsExistAsync(strFuncId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(vPrjFunction_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strFuncId,
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
        vPrjFunction_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vPrjFunction_ConstructorName,
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
export async function vPrjFunction_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(vPrjFunction_Controller, strAction);

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
        vPrjFunction_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vPrjFunction_ConstructorName,
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
export function vPrjFunction_GetWebApiUrl(strController: string, strAction: string): string {
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

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)
 * @param objDDL:需要绑定当前表的下拉框

*/
export async function vPrjFunction_BindDdl_FuncIdInDiv(objDiv: HTMLDivElement, strDdlName: string) {
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_FuncIdInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_FuncIdInDivCache");
  const strCondition = `1=1`;
  const arrObjLstSel = await vPrjFunction_GetObjLstAsync(strCondition);
  if (arrObjLstSel == null) return;
  BindDdl_ObjLstInDivObj_V(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsvPrjFunctionEN.con_FuncId,
    clsvPrjFunctionEN.con_FuncName,
    'v工程函数',
  );
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2023-11-05
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vPrjFunction_GetJSONStrByObj(pobjvPrjFunctionEN: clsvPrjFunctionEN): string {
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjvPrjFunctionEN);
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
 * 日期:2023-11-05
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
 */
export function vPrjFunction_GetObjLstByJSONStr(strJSON: string): Array<clsvPrjFunctionEN> {
  let arrvPrjFunctionObjLst = new Array<clsvPrjFunctionEN>();
  if (strJSON === '') {
    return arrvPrjFunctionObjLst;
  }
  try {
    arrvPrjFunctionObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrvPrjFunctionObjLst;
  }
  return arrvPrjFunctionObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-05
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvPrjFunctionObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function vPrjFunction_GetObjLstByJSONObjLst(
  arrvPrjFunctionObjLstS: Array<clsvPrjFunctionEN>,
): Array<clsvPrjFunctionEN> {
  const arrvPrjFunctionObjLst = new Array<clsvPrjFunctionEN>();
  for (const objInFor of arrvPrjFunctionObjLstS) {
    const obj1 = vPrjFunction_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrvPrjFunctionObjLst.push(obj1);
  }
  return arrvPrjFunctionObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-05
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vPrjFunction_GetObjByJSONStr(strJSON: string): clsvPrjFunctionEN {
  let pobjvPrjFunctionEN = new clsvPrjFunctionEN();
  if (strJSON === '') {
    return pobjvPrjFunctionEN;
  }
  try {
    pobjvPrjFunctionEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjvPrjFunctionEN;
  }
  return pobjvPrjFunctionEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function vPrjFunction_GetCombineCondition(objvPrjFunctionCond: clsvPrjFunctionEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objvPrjFunctionCond.dicFldComparisonOp,
      clsvPrjFunctionEN.con_FuncId,
    ) == true
  ) {
    const strComparisonOpFuncId: string =
      objvPrjFunctionCond.dicFldComparisonOp[clsvPrjFunctionEN.con_FuncId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvPrjFunctionEN.con_FuncId,
      objvPrjFunctionCond.funcId,
      strComparisonOpFuncId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvPrjFunctionCond.dicFldComparisonOp,
      clsvPrjFunctionEN.con_FuncName,
    ) == true
  ) {
    const strComparisonOpFuncName: string =
      objvPrjFunctionCond.dicFldComparisonOp[clsvPrjFunctionEN.con_FuncName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvPrjFunctionEN.con_FuncName,
      objvPrjFunctionCond.funcName,
      strComparisonOpFuncName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvPrjFunctionCond.dicFldComparisonOp,
      clsvPrjFunctionEN.con_PrjId,
    ) == true
  ) {
    const strComparisonOpPrjId: string =
      objvPrjFunctionCond.dicFldComparisonOp[clsvPrjFunctionEN.con_PrjId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvPrjFunctionEN.con_PrjId,
      objvPrjFunctionCond.prjId,
      strComparisonOpPrjId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvPrjFunctionCond.dicFldComparisonOp,
      clsvPrjFunctionEN.con_ReturnTypeId,
    ) == true
  ) {
    const strComparisonOpReturnTypeId: string =
      objvPrjFunctionCond.dicFldComparisonOp[clsvPrjFunctionEN.con_ReturnTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvPrjFunctionEN.con_ReturnTypeId,
      objvPrjFunctionCond.returnTypeId,
      strComparisonOpReturnTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvPrjFunctionCond.dicFldComparisonOp,
      clsvPrjFunctionEN.con_DataTypeName,
    ) == true
  ) {
    const strComparisonOpDataTypeName: string =
      objvPrjFunctionCond.dicFldComparisonOp[clsvPrjFunctionEN.con_DataTypeName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvPrjFunctionEN.con_DataTypeName,
      objvPrjFunctionCond.dataTypeName,
      strComparisonOpDataTypeName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvPrjFunctionCond.dicFldComparisonOp,
      clsvPrjFunctionEN.con_DataCnName,
    ) == true
  ) {
    const strComparisonOpDataCnName: string =
      objvPrjFunctionCond.dicFldComparisonOp[clsvPrjFunctionEN.con_DataCnName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvPrjFunctionEN.con_DataCnName,
      objvPrjFunctionCond.dataCnName,
      strComparisonOpDataCnName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvPrjFunctionCond.dicFldComparisonOp,
      clsvPrjFunctionEN.con_CsType,
    ) == true
  ) {
    const strComparisonOpCsType: string =
      objvPrjFunctionCond.dicFldComparisonOp[clsvPrjFunctionEN.con_CsType];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvPrjFunctionEN.con_CsType,
      objvPrjFunctionCond.csType,
      strComparisonOpCsType,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvPrjFunctionCond.dicFldComparisonOp,
      clsvPrjFunctionEN.con_FuncTypeId,
    ) == true
  ) {
    const strComparisonOpFuncTypeId: string =
      objvPrjFunctionCond.dicFldComparisonOp[clsvPrjFunctionEN.con_FuncTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvPrjFunctionEN.con_FuncTypeId,
      objvPrjFunctionCond.funcTypeId,
      strComparisonOpFuncTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvPrjFunctionCond.dicFldComparisonOp,
      clsvPrjFunctionEN.con_FuncTypeName,
    ) == true
  ) {
    const strComparisonOpFuncTypeName: string =
      objvPrjFunctionCond.dicFldComparisonOp[clsvPrjFunctionEN.con_FuncTypeName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvPrjFunctionEN.con_FuncTypeName,
      objvPrjFunctionCond.funcTypeName,
      strComparisonOpFuncTypeName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvPrjFunctionCond.dicFldComparisonOp,
      clsvPrjFunctionEN.con_IsTemplate,
    ) == true
  ) {
    if (objvPrjFunctionCond.isTemplate == true) {
      strWhereCond += Format(" And {0} = '1'", clsvPrjFunctionEN.con_IsTemplate);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsvPrjFunctionEN.con_IsTemplate);
    }
  }
  //数据类型string(text)在函数:[AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj]中没有处理!
  if (
    Object.prototype.hasOwnProperty.call(
      objvPrjFunctionCond.dicFldComparisonOp,
      clsvPrjFunctionEN.con_UserId,
    ) == true
  ) {
    const strComparisonOpUserId: string =
      objvPrjFunctionCond.dicFldComparisonOp[clsvPrjFunctionEN.con_UserId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvPrjFunctionEN.con_UserId,
      objvPrjFunctionCond.userId,
      strComparisonOpUserId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvPrjFunctionCond.dicFldComparisonOp,
      clsvPrjFunctionEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objvPrjFunctionCond.dicFldComparisonOp[clsvPrjFunctionEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvPrjFunctionEN.con_UpdDate,
      objvPrjFunctionCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvPrjFunctionCond.dicFldComparisonOp,
      clsvPrjFunctionEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objvPrjFunctionCond.dicFldComparisonOp[clsvPrjFunctionEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvPrjFunctionEN.con_UpdUser,
      objvPrjFunctionCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvPrjFunctionCond.dicFldComparisonOp,
      clsvPrjFunctionEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objvPrjFunctionCond.dicFldComparisonOp[clsvPrjFunctionEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvPrjFunctionEN.con_Memo,
      objvPrjFunctionCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvPrjFunctionENS:源对象
 * @param objvPrjFunctionENT:目标对象
 */
export function vPrjFunction_GetObjFromJsonObj(
  objvPrjFunctionENS: clsvPrjFunctionEN,
): clsvPrjFunctionEN {
  const objvPrjFunctionENT: clsvPrjFunctionEN = new clsvPrjFunctionEN();
  ObjectAssign(objvPrjFunctionENT, objvPrjFunctionENS);
  return objvPrjFunctionENT;
}
