/**
 * 类名:clsFuncPara4CodeWApi
 * 表名:FuncPara4Code(00050384)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/14 11:51:28
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 应用类型:Vue应用InCore-TS(30)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:函数管理(PrjFunction)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 函数参数4Code(FuncPara4Code)
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
import { clsFuncPara4CodeENEx } from '@/ts/L0Entity/PrjFunction/clsFuncPara4CodeENEx';
import { clsFuncPara4CodeEN } from '@/ts/L0Entity/PrjFunction/clsFuncPara4CodeEN';
import { DataTypeAbbr_func } from '@/ts/L3ForWApi/SysPara/clsDataTypeAbbrWApi';
import { clsDataTypeAbbrEN } from '@/ts/L0Entity/SysPara/clsDataTypeAbbrEN';
import { FunctionPurpose_func } from '@/ts/L3ForWApi/PrjFunction/clsFunctionPurposeWApi';
import { clsFunctionPurposeEN } from '@/ts/L0Entity/PrjFunction/clsFunctionPurposeEN';
import { AddRecordResult } from '@/ts/PubFun/AddRecordResult';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';

export const funcPara4Code_Controller = 'FuncPara4CodeApi';
export const funcPara4Code_ConstructorName = 'funcPara4Code';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strFuncParaId4Code:关键字
 * @returns 对象
 **/
export async function FuncPara4Code_GetObjByFuncParaId4CodeAsync(
  strFuncParaId4Code: string,
): Promise<clsFuncPara4CodeEN | null> {
  const strThisFuncName = 'GetObjByFuncParaId4CodeAsync';

  if (IsNullOrEmpty(strFuncParaId4Code) == true) {
    const strMsg = Format(
      '参数:[strFuncParaId4Code]不能为空!(In clsFuncPara4CodeWApi.GetObjByFuncParaId4CodeAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strFuncParaId4Code.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strFuncParaId4Code]的长度:[{0}]不正确!(clsFuncPara4CodeWApi.GetObjByFuncParaId4CodeAsync)',
      strFuncParaId4Code.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByFuncParaId4Code';
  const strUrl = GetWebApiUrl(funcPara4Code_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strFuncParaId4Code,
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
      const objFuncPara4Code = FuncPara4Code_GetObjFromJsonObj(returnObj);
      return objFuncPara4Code;
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
        funcPara4Code_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        funcPara4Code_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[GetObjByFuncParaId4CodelocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[GetObjByFuncParaId4CodeCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )
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
export function FuncPara4Code_SortFunDefa(a: clsFuncPara4CodeEN, b: clsFuncPara4CodeEN): number {
  return a.funcParaId4Code.localeCompare(b.funcParaId4Code);
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
export function FuncPara4Code_SortFunDefa2Fld(
  a: clsFuncPara4CodeEN,
  b: clsFuncPara4CodeEN,
): number {
  if (a.paraName == b.paraName) return a.paraCnName.localeCompare(b.paraCnName);
  else return a.paraName.localeCompare(b.paraName);
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
export function FuncPara4Code_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsFuncPara4CodeEN.con_FuncParaId4Code:
        return (a: clsFuncPara4CodeEN, b: clsFuncPara4CodeEN) => {
          return a.funcParaId4Code.localeCompare(b.funcParaId4Code);
        };
      case clsFuncPara4CodeEN.con_ParaName:
        return (a: clsFuncPara4CodeEN, b: clsFuncPara4CodeEN) => {
          return a.paraName.localeCompare(b.paraName);
        };
      case clsFuncPara4CodeEN.con_ParaCnName:
        return (a: clsFuncPara4CodeEN, b: clsFuncPara4CodeEN) => {
          return a.paraCnName.localeCompare(b.paraCnName);
        };
      case clsFuncPara4CodeEN.con_DataTypeId:
        return (a: clsFuncPara4CodeEN, b: clsFuncPara4CodeEN) => {
          return a.dataTypeId.localeCompare(b.dataTypeId);
        };
      case clsFuncPara4CodeEN.con_ParameterType:
        return (a: clsFuncPara4CodeEN, b: clsFuncPara4CodeEN) => {
          if (a.parameterType == null) return -1;
          if (b.parameterType == null) return 1;
          return a.parameterType.localeCompare(b.parameterType);
        };
      case clsFuncPara4CodeEN.con_ParameterTypeFullName:
        return (a: clsFuncPara4CodeEN, b: clsFuncPara4CodeEN) => {
          if (a.parameterTypeFullName == null) return -1;
          if (b.parameterTypeFullName == null) return 1;
          return a.parameterTypeFullName.localeCompare(b.parameterTypeFullName);
        };
      case clsFuncPara4CodeEN.con_IsByRef:
        return (a: clsFuncPara4CodeEN) => {
          if (a.isByRef == true) return 1;
          else return -1;
        };
      case clsFuncPara4CodeEN.con_PrjId:
        return (a: clsFuncPara4CodeEN, b: clsFuncPara4CodeEN) => {
          if (a.prjId == null) return -1;
          if (b.prjId == null) return 1;
          return a.prjId.localeCompare(b.prjId);
        };
      case clsFuncPara4CodeEN.con_IsTemplate:
        return (a: clsFuncPara4CodeEN) => {
          if (a.isTemplate == true) return 1;
          else return -1;
        };
      case clsFuncPara4CodeEN.con_FuncPurposeId:
        return (a: clsFuncPara4CodeEN, b: clsFuncPara4CodeEN) => {
          return a.funcPurposeId.localeCompare(b.funcPurposeId);
        };
      case clsFuncPara4CodeEN.con_UpdDate:
        return (a: clsFuncPara4CodeEN, b: clsFuncPara4CodeEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsFuncPara4CodeEN.con_UpdUser:
        return (a: clsFuncPara4CodeEN, b: clsFuncPara4CodeEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsFuncPara4CodeEN.con_Memo:
        return (a: clsFuncPara4CodeEN, b: clsFuncPara4CodeEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[FuncPara4Code]中不存在!(in ${funcPara4Code_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsFuncPara4CodeEN.con_FuncParaId4Code:
        return (a: clsFuncPara4CodeEN, b: clsFuncPara4CodeEN) => {
          return b.funcParaId4Code.localeCompare(a.funcParaId4Code);
        };
      case clsFuncPara4CodeEN.con_ParaName:
        return (a: clsFuncPara4CodeEN, b: clsFuncPara4CodeEN) => {
          return b.paraName.localeCompare(a.paraName);
        };
      case clsFuncPara4CodeEN.con_ParaCnName:
        return (a: clsFuncPara4CodeEN, b: clsFuncPara4CodeEN) => {
          return b.paraCnName.localeCompare(a.paraCnName);
        };
      case clsFuncPara4CodeEN.con_DataTypeId:
        return (a: clsFuncPara4CodeEN, b: clsFuncPara4CodeEN) => {
          return b.dataTypeId.localeCompare(a.dataTypeId);
        };
      case clsFuncPara4CodeEN.con_ParameterType:
        return (a: clsFuncPara4CodeEN, b: clsFuncPara4CodeEN) => {
          if (b.parameterType == null) return -1;
          if (a.parameterType == null) return 1;
          return b.parameterType.localeCompare(a.parameterType);
        };
      case clsFuncPara4CodeEN.con_ParameterTypeFullName:
        return (a: clsFuncPara4CodeEN, b: clsFuncPara4CodeEN) => {
          if (b.parameterTypeFullName == null) return -1;
          if (a.parameterTypeFullName == null) return 1;
          return b.parameterTypeFullName.localeCompare(a.parameterTypeFullName);
        };
      case clsFuncPara4CodeEN.con_IsByRef:
        return (b: clsFuncPara4CodeEN) => {
          if (b.isByRef == true) return 1;
          else return -1;
        };
      case clsFuncPara4CodeEN.con_PrjId:
        return (a: clsFuncPara4CodeEN, b: clsFuncPara4CodeEN) => {
          if (b.prjId == null) return -1;
          if (a.prjId == null) return 1;
          return b.prjId.localeCompare(a.prjId);
        };
      case clsFuncPara4CodeEN.con_IsTemplate:
        return (b: clsFuncPara4CodeEN) => {
          if (b.isTemplate == true) return 1;
          else return -1;
        };
      case clsFuncPara4CodeEN.con_FuncPurposeId:
        return (a: clsFuncPara4CodeEN, b: clsFuncPara4CodeEN) => {
          return b.funcPurposeId.localeCompare(a.funcPurposeId);
        };
      case clsFuncPara4CodeEN.con_UpdDate:
        return (a: clsFuncPara4CodeEN, b: clsFuncPara4CodeEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsFuncPara4CodeEN.con_UpdUser:
        return (a: clsFuncPara4CodeEN, b: clsFuncPara4CodeEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsFuncPara4CodeEN.con_Memo:
        return (a: clsFuncPara4CodeEN, b: clsFuncPara4CodeEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[FuncPara4Code]中不存在!(in ${funcPara4Code_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}
//该表没有使用Cache,不需要生成[GetNameByFuncParaId4CodeCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function FuncPara4Code_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsFuncPara4CodeEN.con_FuncParaId4Code:
      return (obj: clsFuncPara4CodeEN) => {
        return obj.funcParaId4Code === value;
      };
    case clsFuncPara4CodeEN.con_ParaName:
      return (obj: clsFuncPara4CodeEN) => {
        return obj.paraName === value;
      };
    case clsFuncPara4CodeEN.con_ParaCnName:
      return (obj: clsFuncPara4CodeEN) => {
        return obj.paraCnName === value;
      };
    case clsFuncPara4CodeEN.con_DataTypeId:
      return (obj: clsFuncPara4CodeEN) => {
        return obj.dataTypeId === value;
      };
    case clsFuncPara4CodeEN.con_ParameterType:
      return (obj: clsFuncPara4CodeEN) => {
        return obj.parameterType === value;
      };
    case clsFuncPara4CodeEN.con_ParameterTypeFullName:
      return (obj: clsFuncPara4CodeEN) => {
        return obj.parameterTypeFullName === value;
      };
    case clsFuncPara4CodeEN.con_IsByRef:
      return (obj: clsFuncPara4CodeEN) => {
        return obj.isByRef === value;
      };
    case clsFuncPara4CodeEN.con_PrjId:
      return (obj: clsFuncPara4CodeEN) => {
        return obj.prjId === value;
      };
    case clsFuncPara4CodeEN.con_IsTemplate:
      return (obj: clsFuncPara4CodeEN) => {
        return obj.isTemplate === value;
      };
    case clsFuncPara4CodeEN.con_FuncPurposeId:
      return (obj: clsFuncPara4CodeEN) => {
        return obj.funcPurposeId === value;
      };
    case clsFuncPara4CodeEN.con_UpdDate:
      return (obj: clsFuncPara4CodeEN) => {
        return obj.updDate === value;
      };
    case clsFuncPara4CodeEN.con_UpdUser:
      return (obj: clsFuncPara4CodeEN) => {
        return obj.updUser === value;
      };
    case clsFuncPara4CodeEN.con_Memo:
      return (obj: clsFuncPara4CodeEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[FuncPara4Code]中不存在!(in ${funcPara4Code_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}
//该表没有使用Cache,不需要生成[func]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func )
//该表没有使用Cache,不需要生成[FuncPara4Code__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function FuncPara4Code_GetFldValueAsync(
  strFldName: string,
  strWhereCond: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetFldValueAsync';
  const strAction = 'GetFldValue';
  const strUrl = GetWebApiUrl(funcPara4Code_Controller, strAction);

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
        funcPara4Code_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        funcPara4Code_ConstructorName,
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
export async function FuncPara4Code_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(funcPara4Code_Controller, strAction);

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
        funcPara4Code_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        funcPara4Code_ConstructorName,
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
export async function FuncPara4Code_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(funcPara4Code_Controller, strAction);

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
        funcPara4Code_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        funcPara4Code_ConstructorName,
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
export async function FuncPara4Code_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsFuncPara4CodeEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(funcPara4Code_Controller, strAction);

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
      const objFuncPara4Code = FuncPara4Code_GetObjFromJsonObj(returnObj);
      return objFuncPara4Code;
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
        funcPara4Code_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        funcPara4Code_ConstructorName,
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
export async function FuncPara4Code_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsFuncPara4CodeEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(funcPara4Code_Controller, strAction);

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
          funcPara4Code_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = FuncPara4Code_GetObjLstByJSONObjLst(returnObjLst);
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
        funcPara4Code_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        funcPara4Code_ConstructorName,
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
 * @param arrFuncParaId4Code:关键字列表
 * @returns 对象列表
 **/
export async function FuncPara4Code_GetObjLstByFuncParaId4CodeLstAsync(
  arrFuncParaId4Code: Array<string>,
): Promise<Array<clsFuncPara4CodeEN>> {
  const strThisFuncName = 'GetObjLstByFuncParaId4CodeLstAsync';
  const strAction = 'GetObjLstByFuncParaId4CodeLst';
  const strUrl = GetWebApiUrl(funcPara4Code_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrFuncParaId4Code, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          funcPara4Code_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = FuncPara4Code_GetObjLstByJSONObjLst(returnObjLst);
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
        funcPara4Code_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        funcPara4Code_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[GetObjLstByFuncParaId4CodeLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

/**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export async function FuncPara4Code_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsFuncPara4CodeEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(funcPara4Code_Controller, strAction);

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
          funcPara4Code_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = FuncPara4Code_GetObjLstByJSONObjLst(returnObjLst);
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
        funcPara4Code_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        funcPara4Code_ConstructorName,
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
export async function FuncPara4Code_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsFuncPara4CodeEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(funcPara4Code_Controller, strAction);

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
          funcPara4Code_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = FuncPara4Code_GetObjLstByJSONObjLst(returnObjLst);
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
        funcPara4Code_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        funcPara4Code_ConstructorName,
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
export async function FuncPara4Code_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsFuncPara4CodeEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsFuncPara4CodeEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(funcPara4Code_Controller, strAction);

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
          funcPara4Code_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = FuncPara4Code_GetObjLstByJSONObjLst(returnObjLst);
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
        funcPara4Code_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        funcPara4Code_ConstructorName,
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
 * @param strFuncParaId4Code:关键字
 * @returns 获取删除的结果
 **/
export async function FuncPara4Code_DelRecordAsync(strFuncParaId4Code: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(funcPara4Code_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strFuncParaId4Code);

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
        funcPara4Code_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        funcPara4Code_ConstructorName,
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
 * @param arrFuncParaId4Code:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function FuncPara4Code_DelFuncPara4CodesAsync(
  arrFuncParaId4Code: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelFuncPara4CodesAsync';
  const strAction = 'DelFuncPara4Codes';
  const strUrl = GetWebApiUrl(funcPara4Code_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrFuncParaId4Code, config);
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
        funcPara4Code_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        funcPara4Code_ConstructorName,
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
 * @param objFuncPara4CodeENS:源对象
 * @returns 目标对象=>clsFuncPara4CodeEN:objFuncPara4CodeENT
 **/
export function FuncPara4Code_CopyToEx(
  objFuncPara4CodeENS: clsFuncPara4CodeEN,
): clsFuncPara4CodeENEx {
  const strThisFuncName = FuncPara4Code_CopyToEx.name;
  const objFuncPara4CodeENT = new clsFuncPara4CodeENEx();
  try {
    ObjectAssign(objFuncPara4CodeENT, objFuncPara4CodeENS);
    return objFuncPara4CodeENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001294)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      funcPara4Code_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objFuncPara4CodeENT;
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
export function FuncPara4Code_FuncMapByFldName(
  strFldName: string,
  objFuncPara4CodeEx: clsFuncPara4CodeENEx,
) {
  const strThisFuncName = FuncPara4Code_FuncMapByFldName.name;
  strFldName = strFldName.replace('|Ex', '');
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsFuncPara4CodeEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsFuncPara4CodeENEx.con_DataTypeName:
      return FuncPara4Code_FuncMapDataTypeName(objFuncPara4CodeEx);
    case clsFuncPara4CodeENEx.con_FuncPurposeName:
      return FuncPara4Code_FuncMapFuncPurposeName(objFuncPara4CodeEx);
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
export function FuncPara4Code_SortFunByExKey(strKey: string, AscOrDesc: string) {
  strKey = strKey.replace('|Ex', '');
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsFuncPara4CodeENEx.con_DataTypeName:
        return (a: clsFuncPara4CodeENEx, b: clsFuncPara4CodeENEx) => {
          if (a.dataTypeName === null && b.dataTypeName === null) return 0;
          if (a.dataTypeName === null) return -1;
          if (b.dataTypeName === null) return 1;
          return a.dataTypeName.localeCompare(b.dataTypeName);
        };
      case clsFuncPara4CodeENEx.con_FuncPurposeName:
        return (a: clsFuncPara4CodeENEx, b: clsFuncPara4CodeENEx) => {
          return a.funcPurposeName.localeCompare(b.funcPurposeName);
        };
      default:
        return FuncPara4Code_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsFuncPara4CodeENEx.con_DataTypeName:
        return (a: clsFuncPara4CodeENEx, b: clsFuncPara4CodeENEx) => {
          if (a.dataTypeName === null && b.dataTypeName === null) return 0;
          if (a.dataTypeName === null) return 1;
          if (b.dataTypeName === null) return -1;
          return b.dataTypeName.localeCompare(a.dataTypeName);
        };
      case clsFuncPara4CodeENEx.con_FuncPurposeName:
        return (a: clsFuncPara4CodeENEx, b: clsFuncPara4CodeENEx) => {
          return b.funcPurposeName.localeCompare(a.funcPurposeName);
        };
      default:
        return FuncPara4Code_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objFuncPara4CodeS:源对象
 **/
export async function FuncPara4Code_FuncMapDataTypeName(objFuncPara4Code: clsFuncPara4CodeENEx) {
  const strThisFuncName = FuncPara4Code_FuncMapDataTypeName.name;
  try {
    if (IsNullOrEmpty(objFuncPara4Code.dataTypeName) == true) {
      const DataTypeAbbrDataTypeId = objFuncPara4Code.dataTypeId;
      const DataTypeAbbrDataTypeName = await DataTypeAbbr_func(
        clsDataTypeAbbrEN.con_DataTypeId,
        clsDataTypeAbbrEN.con_DataTypeName,
        DataTypeAbbrDataTypeId,
      );
      objFuncPara4Code.dataTypeName = DataTypeAbbrDataTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001349)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      funcPara4Code_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objFuncPara4CodeS:源对象
 **/
export async function FuncPara4Code_FuncMapFuncPurposeName(objFuncPara4Code: clsFuncPara4CodeENEx) {
  const strThisFuncName = FuncPara4Code_FuncMapFuncPurposeName.name;
  try {
    if (IsNullOrEmpty(objFuncPara4Code.funcPurposeName) == true) {
      const FunctionPurposeFuncPurposeId = objFuncPara4Code.funcPurposeId;
      const FunctionPurposeFuncPurposeName = await FunctionPurpose_func(
        clsFunctionPurposeEN.con_FuncPurposeId,
        clsFunctionPurposeEN.con_FuncPurposeName,
        FunctionPurposeFuncPurposeId,
      );
      objFuncPara4Code.funcPurposeName = FunctionPurposeFuncPurposeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001352)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      funcPara4Code_ConstructorName,
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
export async function FuncPara4Code_DelFuncPara4CodesByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelFuncPara4CodesByCondAsync';
  const strAction = 'DelFuncPara4CodesByCond';
  const strUrl = GetWebApiUrl(funcPara4Code_Controller, strAction);

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
        funcPara4Code_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        funcPara4Code_ConstructorName,
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
 * @param objFuncPara4CodeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function FuncPara4Code_AddNewRecordAsync(
  objFuncPara4CodeEN: clsFuncPara4CodeEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objFuncPara4CodeEN);
  const strUrl = GetWebApiUrl(funcPara4Code_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objFuncPara4CodeEN, config);
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
        funcPara4Code_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        funcPara4Code_ConstructorName,
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
 * @param objFuncPara4CodeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function FuncPara4Code_AddNewRecordWithMaxIdAsync(
  objFuncPara4CodeEN: clsFuncPara4CodeEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(funcPara4Code_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objFuncPara4CodeEN, config);
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
        funcPara4Code_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        funcPara4Code_ConstructorName,
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
export async function FuncPara4Code_AddNewObjSave(
  objFuncPara4CodeEN: clsFuncPara4CodeEN,
): Promise<AddRecordResult> {
  const strThisFuncName = 'AddNewObjSave';
  try {
    FuncPara4Code_CheckPropertyNew(objFuncPara4CodeEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${funcPara4Code_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    alert(strMsg);
    return { keyword: '', success: false }; //一定要有一个返回值,否则会出错!
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await FuncPara4Code_CheckUniCond4Add(objFuncPara4CodeEN);
    if (bolIsExistCond == false) {
      return { keyword: '', success: false };
    }
    let returnBool = false;
    const returnKeyId = await FuncPara4Code_AddNewRecordWithMaxIdAsync(objFuncPara4CodeEN);
    if (IsNullOrEmpty(returnKeyId) == false) {
      returnBool = true;
    }
    if (returnBool == true) {
      //FuncPara4Code_ReFreshCache(objFuncPara4CodeEN.funcPurposeId);
    } else {
      const strInfo = `添加[函数参数4Code(FuncPara4Code)]记录不成功!`;
      //显示信息框
      throw strInfo;
    }
    return { keyword: returnKeyId, success: returnBool }; //一定要有一个返回值,否则会出错!
  } catch (e) {
    const strMsg = `添加记录不成功,${e}.(in ${funcPara4Code_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export async function FuncPara4Code_CheckUniCond4Add(
  objFuncPara4CodeEN: clsFuncPara4CodeEN,
): Promise<boolean> {
  const strUniquenessCondition = FuncPara4Code_GetUniCondStr(objFuncPara4CodeEN);
  const bolIsExistCondition = await FuncPara4Code_IsExistRecordAsync(strUniquenessCondition);
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
export async function FuncPara4Code_CheckUniCond4Update(
  objFuncPara4CodeEN: clsFuncPara4CodeEN,
): Promise<boolean> {
  const strUniquenessCondition = FuncPara4Code_GetUniCondStr4Update(objFuncPara4CodeEN);
  const bolIsExistCondition = await FuncPara4Code_IsExistRecordAsync(strUniquenessCondition);
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
export async function FuncPara4Code_UpdateObjSave(
  objFuncPara4CodeEN: clsFuncPara4CodeEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateObjSave';
  objFuncPara4CodeEN.sfUpdFldSetStr = objFuncPara4CodeEN.updFldString; //设置哪些字段被修改(脏字段)
  if (objFuncPara4CodeEN.funcParaId4Code == '' || objFuncPara4CodeEN.funcParaId4Code == undefined) {
    console.error('关键字不能为空!');
    throw '关键字不能为空!';
  }
  try {
    FuncPara4Code_CheckProperty4Update(objFuncPara4CodeEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${funcPara4Code_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await FuncPara4Code_CheckUniCond4Update(objFuncPara4CodeEN);
    if (bolIsExistCond == false) {
      return false;
    }
    const returnBool = await FuncPara4Code_UpdateRecordAsync(objFuncPara4CodeEN);
    if (returnBool == true) {
      //FuncPara4Code_ReFreshCache(objFuncPara4CodeEN.funcPurposeId);
    }
    return returnBool;
  } catch (e) {
    const strMsg = `修改记录不成功,${e}.(in ${funcPara4Code_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objFuncPara4CodeEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function FuncPara4Code_AddNewRecordWithReturnKeyAsync(
  objFuncPara4CodeEN: clsFuncPara4CodeEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(funcPara4Code_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objFuncPara4CodeEN, config);
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
        funcPara4Code_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        funcPara4Code_ConstructorName,
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
 * @param objFuncPara4CodeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function FuncPara4Code_UpdateRecordAsync(
  objFuncPara4CodeEN: clsFuncPara4CodeEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objFuncPara4CodeEN.sfUpdFldSetStr === undefined ||
    objFuncPara4CodeEN.sfUpdFldSetStr === null ||
    objFuncPara4CodeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objFuncPara4CodeEN.funcParaId4Code,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(funcPara4Code_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objFuncPara4CodeEN, config);
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
        funcPara4Code_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        funcPara4Code_ConstructorName,
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
 * @param objFuncPara4CodeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function FuncPara4Code_EditRecordExAsync(
  objFuncPara4CodeEN: clsFuncPara4CodeEN,
): Promise<boolean> {
  const strThisFuncName = 'EditRecordExAsync';
  const strAction = 'EditRecordEx';
  if (
    objFuncPara4CodeEN.sfUpdFldSetStr === undefined ||
    objFuncPara4CodeEN.sfUpdFldSetStr === null ||
    objFuncPara4CodeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objFuncPara4CodeEN.funcParaId4Code,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(funcPara4Code_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objFuncPara4CodeEN, config);
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
        funcPara4Code_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        funcPara4Code_ConstructorName,
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
 * @param objFuncPara4CodeEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function FuncPara4Code_UpdateWithConditionAsync(
  objFuncPara4CodeEN: clsFuncPara4CodeEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objFuncPara4CodeEN.sfUpdFldSetStr === undefined ||
    objFuncPara4CodeEN.sfUpdFldSetStr === null ||
    objFuncPara4CodeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objFuncPara4CodeEN.funcParaId4Code,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(funcPara4Code_Controller, strAction);
  objFuncPara4CodeEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objFuncPara4CodeEN, config);
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
        funcPara4Code_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        funcPara4Code_ConstructorName,
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
export async function FuncPara4Code_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(funcPara4Code_Controller, strAction);

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
        funcPara4Code_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        funcPara4Code_ConstructorName,
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
 * @param strFuncParaId4Code:关键字
 * @returns 是否存在?存在返回True
 **/
export async function FuncPara4Code_IsExistAsync(strFuncParaId4Code: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(funcPara4Code_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strFuncParaId4Code,
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
        funcPara4Code_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        funcPara4Code_ConstructorName,
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
export async function FuncPara4Code_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(funcPara4Code_Controller, strAction);

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
        funcPara4Code_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        funcPara4Code_ConstructorName,
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
export async function FuncPara4Code_GetMaxStrIdAsync(): Promise<string> {
  const strThisFuncName = 'GetMaxStrIdAsync';
  const strAction = 'GetMaxStrId';
  const strUrl = GetWebApiUrl(funcPara4Code_Controller, strAction);

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
        funcPara4Code_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        funcPara4Code_ConstructorName,
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
export async function FuncPara4Code_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(funcPara4Code_Controller, strAction);

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
        funcPara4Code_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        funcPara4Code_ConstructorName,
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
export function FuncPara4Code_GetWebApiUrl(strController: string, strAction: string): string {
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

 * @param strFuncPurposeId:
*/
export async function FuncPara4Code_BindDdl_FuncParaId4CodeInDiv(
  objDiv: HTMLDivElement,
  strDdlName: string,
  strFuncPurposeId: string,
) {
  if (IsNullOrEmpty(strFuncPurposeId) == true) {
    const strMsg = Format(
      '参数:[strFuncPurposeId]不能为空！(In clsFuncPara4CodeWApi.BindDdl_FuncParaId4CodeInDiv)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strFuncPurposeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strFuncPurposeId]的长度:[{0}]不正确！(clsFuncPara4CodeWApi.BindDdl_FuncParaId4CodeInDiv)',
      strFuncPurposeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_FuncParaId4CodeInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_FuncParaId4CodeInDivCache");
  const strCondition = `funcPurposeId = '${strFuncPurposeId}'`;
  const arrObjLstSel = await FuncPara4Code_GetObjLstAsync(strCondition);
  if (arrObjLstSel == null) return;
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsFuncPara4CodeEN.con_FuncParaId4Code,
    clsFuncPara4CodeEN.con_ParaName,
    '函数参数4Code...',
  );
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

 * @param strFuncPurposeId:
*/
export async function FuncPara4Code_GetArrFuncPara4CodeByFuncPurposeId(strFuncPurposeId: string) {
  if (IsNullOrEmpty(strFuncPurposeId) == true) {
    const strMsg = Format(
      '参数:[strFuncPurposeId]不能为空！(In clsFuncPara4CodeWApi.BindDdl_FuncParaId4CodeInDiv)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strFuncPurposeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strFuncPurposeId]的长度:[{0}]不正确！(clsFuncPara4CodeWApi.BindDdl_FuncParaId4CodeInDiv)',
      strFuncPurposeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_FuncParaId4CodeInDivCache");
  const arrFuncPara4Code = new Array<clsFuncPara4CodeEN>();
  const strCondition = `funcPurposeId = '${strFuncPurposeId}'`;
  const arrObjLstSel = await FuncPara4Code_GetObjLstAsync(strCondition);
  if (arrObjLstSel == null) return null;
  const obj0 = new clsFuncPara4CodeEN();
  obj0.funcParaId4Code = '0';
  obj0.paraName = '选函数参数4Code...';
  arrFuncPara4Code.push(obj0);
  arrObjLstSel.forEach((x) => arrFuncPara4Code.push(x));
  return arrFuncPara4Code;
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function FuncPara4Code_CheckPropertyNew(pobjFuncPara4CodeEN: clsFuncPara4CodeEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjFuncPara4CodeEN.paraName) === true) {
    throw new Error(
      `(errid:Watl000411)字段[参数名]不能为空(In 函数参数4Code)!(clsFuncPara4CodeBL:CheckPropertyNew0)`,
    );
  }
  if (IsNullOrEmpty(pobjFuncPara4CodeEN.paraCnName) === true) {
    throw new Error(
      `(errid:Watl000411)字段[参数中文名]不能为空(In 函数参数4Code)!(clsFuncPara4CodeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFuncPara4CodeEN.dataTypeId) === true ||
    pobjFuncPara4CodeEN.dataTypeId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000411)字段[数据类型Id]不能为空(In 函数参数4Code)!(clsFuncPara4CodeBL:CheckPropertyNew0)`,
    );
  }
  if (
    null === pobjFuncPara4CodeEN.isByRef ||
    (pobjFuncPara4CodeEN.isByRef != null && pobjFuncPara4CodeEN.isByRef.toString() === '')
  ) {
    throw new Error(
      `(errid:Watl000411)字段[是否引用型参数]不能为空(In 函数参数4Code)!(clsFuncPara4CodeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFuncPara4CodeEN.funcPurposeId) === true ||
    pobjFuncPara4CodeEN.funcPurposeId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000411)字段[函数用途Id]不能为空(In 函数参数4Code)!(clsFuncPara4CodeBL:CheckPropertyNew0)`,
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjFuncPara4CodeEN.funcParaId4Code) == false &&
    GetStrLen(pobjFuncPara4CodeEN.funcParaId4Code) > 8
  ) {
    throw new Error(
      `(errid:Watl000413)字段[函数参数Id(funcParaId4Code)]的长度不能超过8(In 函数参数4Code(FuncPara4Code))!值:${pobjFuncPara4CodeEN.funcParaId4Code}(clsFuncPara4CodeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFuncPara4CodeEN.paraName) == false &&
    GetStrLen(pobjFuncPara4CodeEN.paraName) > 50
  ) {
    throw new Error(
      `(errid:Watl000413)字段[参数名(paraName)]的长度不能超过50(In 函数参数4Code(FuncPara4Code))!值:${pobjFuncPara4CodeEN.paraName}(clsFuncPara4CodeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFuncPara4CodeEN.paraCnName) == false &&
    GetStrLen(pobjFuncPara4CodeEN.paraCnName) > 50
  ) {
    throw new Error(
      `(errid:Watl000413)字段[参数中文名(paraCnName)]的长度不能超过50(In 函数参数4Code(FuncPara4Code))!值:${pobjFuncPara4CodeEN.paraCnName}(clsFuncPara4CodeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFuncPara4CodeEN.dataTypeId) == false &&
    GetStrLen(pobjFuncPara4CodeEN.dataTypeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000413)字段[数据类型Id(dataTypeId)]的长度不能超过2(In 函数参数4Code(FuncPara4Code))!值:${pobjFuncPara4CodeEN.dataTypeId}(clsFuncPara4CodeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFuncPara4CodeEN.parameterType) == false &&
    GetStrLen(pobjFuncPara4CodeEN.parameterType) > 100
  ) {
    throw new Error(
      `(errid:Watl000413)字段[参数类型(parameterType)]的长度不能超过100(In 函数参数4Code(FuncPara4Code))!值:${pobjFuncPara4CodeEN.parameterType}(clsFuncPara4CodeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFuncPara4CodeEN.parameterTypeFullName) == false &&
    GetStrLen(pobjFuncPara4CodeEN.parameterTypeFullName) > 500
  ) {
    throw new Error(
      `(errid:Watl000413)字段[参数类型全名(parameterTypeFullName)]的长度不能超过500(In 函数参数4Code(FuncPara4Code))!值:${pobjFuncPara4CodeEN.parameterTypeFullName}(clsFuncPara4CodeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFuncPara4CodeEN.prjId) == false &&
    GetStrLen(pobjFuncPara4CodeEN.prjId) > 4
  ) {
    throw new Error(
      `(errid:Watl000413)字段[工程Id(prjId)]的长度不能超过4(In 函数参数4Code(FuncPara4Code))!值:${pobjFuncPara4CodeEN.prjId}(clsFuncPara4CodeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFuncPara4CodeEN.funcPurposeId) == false &&
    GetStrLen(pobjFuncPara4CodeEN.funcPurposeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000413)字段[函数用途Id(funcPurposeId)]的长度不能超过2(In 函数参数4Code(FuncPara4Code))!值:${pobjFuncPara4CodeEN.funcPurposeId}(clsFuncPara4CodeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFuncPara4CodeEN.updDate) == false &&
    GetStrLen(pobjFuncPara4CodeEN.updDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 函数参数4Code(FuncPara4Code))!值:${pobjFuncPara4CodeEN.updDate}(clsFuncPara4CodeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFuncPara4CodeEN.updUser) == false &&
    GetStrLen(pobjFuncPara4CodeEN.updUser) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改者(updUser)]的长度不能超过20(In 函数参数4Code(FuncPara4Code))!值:${pobjFuncPara4CodeEN.updUser}(clsFuncPara4CodeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFuncPara4CodeEN.memo) == false &&
    GetStrLen(pobjFuncPara4CodeEN.memo) > 1000
  ) {
    throw new Error(
      `(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In 函数参数4Code(FuncPara4Code))!值:${pobjFuncPara4CodeEN.memo}(clsFuncPara4CodeBL:CheckPropertyNew)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjFuncPara4CodeEN.funcParaId4Code) == false &&
    undefined !== pobjFuncPara4CodeEN.funcParaId4Code &&
    tzDataType.isString(pobjFuncPara4CodeEN.funcParaId4Code) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[函数参数Id(funcParaId4Code)]的值:[${pobjFuncPara4CodeEN.funcParaId4Code}], 非法,应该为字符型(In 函数参数4Code(FuncPara4Code))!(clsFuncPara4CodeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFuncPara4CodeEN.paraName) == false &&
    undefined !== pobjFuncPara4CodeEN.paraName &&
    tzDataType.isString(pobjFuncPara4CodeEN.paraName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[参数名(paraName)]的值:[${pobjFuncPara4CodeEN.paraName}], 非法,应该为字符型(In 函数参数4Code(FuncPara4Code))!(clsFuncPara4CodeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFuncPara4CodeEN.paraCnName) == false &&
    undefined !== pobjFuncPara4CodeEN.paraCnName &&
    tzDataType.isString(pobjFuncPara4CodeEN.paraCnName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[参数中文名(paraCnName)]的值:[${pobjFuncPara4CodeEN.paraCnName}], 非法,应该为字符型(In 函数参数4Code(FuncPara4Code))!(clsFuncPara4CodeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFuncPara4CodeEN.dataTypeId) == false &&
    undefined !== pobjFuncPara4CodeEN.dataTypeId &&
    tzDataType.isString(pobjFuncPara4CodeEN.dataTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[数据类型Id(dataTypeId)]的值:[${pobjFuncPara4CodeEN.dataTypeId}], 非法,应该为字符型(In 函数参数4Code(FuncPara4Code))!(clsFuncPara4CodeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFuncPara4CodeEN.parameterType) == false &&
    undefined !== pobjFuncPara4CodeEN.parameterType &&
    tzDataType.isString(pobjFuncPara4CodeEN.parameterType) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[参数类型(parameterType)]的值:[${pobjFuncPara4CodeEN.parameterType}], 非法,应该为字符型(In 函数参数4Code(FuncPara4Code))!(clsFuncPara4CodeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFuncPara4CodeEN.parameterTypeFullName) == false &&
    undefined !== pobjFuncPara4CodeEN.parameterTypeFullName &&
    tzDataType.isString(pobjFuncPara4CodeEN.parameterTypeFullName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[参数类型全名(parameterTypeFullName)]的值:[${pobjFuncPara4CodeEN.parameterTypeFullName}], 非法,应该为字符型(In 函数参数4Code(FuncPara4Code))!(clsFuncPara4CodeBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjFuncPara4CodeEN.isByRef &&
    undefined !== pobjFuncPara4CodeEN.isByRef &&
    tzDataType.isBoolean(pobjFuncPara4CodeEN.isByRef) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否引用型参数(isByRef)]的值:[${pobjFuncPara4CodeEN.isByRef}], 非法,应该为布尔型(In 函数参数4Code(FuncPara4Code))!(clsFuncPara4CodeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFuncPara4CodeEN.prjId) == false &&
    undefined !== pobjFuncPara4CodeEN.prjId &&
    tzDataType.isString(pobjFuncPara4CodeEN.prjId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[工程Id(prjId)]的值:[${pobjFuncPara4CodeEN.prjId}], 非法,应该为字符型(In 函数参数4Code(FuncPara4Code))!(clsFuncPara4CodeBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjFuncPara4CodeEN.isTemplate &&
    undefined !== pobjFuncPara4CodeEN.isTemplate &&
    tzDataType.isBoolean(pobjFuncPara4CodeEN.isTemplate) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否模板(isTemplate)]的值:[${pobjFuncPara4CodeEN.isTemplate}], 非法,应该为布尔型(In 函数参数4Code(FuncPara4Code))!(clsFuncPara4CodeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFuncPara4CodeEN.funcPurposeId) == false &&
    undefined !== pobjFuncPara4CodeEN.funcPurposeId &&
    tzDataType.isString(pobjFuncPara4CodeEN.funcPurposeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[函数用途Id(funcPurposeId)]的值:[${pobjFuncPara4CodeEN.funcPurposeId}], 非法,应该为字符型(In 函数参数4Code(FuncPara4Code))!(clsFuncPara4CodeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFuncPara4CodeEN.updDate) == false &&
    undefined !== pobjFuncPara4CodeEN.updDate &&
    tzDataType.isString(pobjFuncPara4CodeEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjFuncPara4CodeEN.updDate}], 非法,应该为字符型(In 函数参数4Code(FuncPara4Code))!(clsFuncPara4CodeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFuncPara4CodeEN.updUser) == false &&
    undefined !== pobjFuncPara4CodeEN.updUser &&
    tzDataType.isString(pobjFuncPara4CodeEN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改者(updUser)]的值:[${pobjFuncPara4CodeEN.updUser}], 非法,应该为字符型(In 函数参数4Code(FuncPara4Code))!(clsFuncPara4CodeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFuncPara4CodeEN.memo) == false &&
    undefined !== pobjFuncPara4CodeEN.memo &&
    tzDataType.isString(pobjFuncPara4CodeEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[说明(memo)]的值:[${pobjFuncPara4CodeEN.memo}], 非法,应该为字符型(In 函数参数4Code(FuncPara4Code))!(clsFuncPara4CodeBL:CheckPropertyNew0)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function FuncPara4Code_CheckProperty4Update(pobjFuncPara4CodeEN: clsFuncPara4CodeEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjFuncPara4CodeEN.funcParaId4Code) == false &&
    GetStrLen(pobjFuncPara4CodeEN.funcParaId4Code) > 8
  ) {
    throw new Error(
      `(errid:Watl000416)字段[函数参数Id(funcParaId4Code)]的长度不能超过8(In 函数参数4Code(FuncPara4Code))!值:${pobjFuncPara4CodeEN.funcParaId4Code}(clsFuncPara4CodeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFuncPara4CodeEN.paraName) == false &&
    GetStrLen(pobjFuncPara4CodeEN.paraName) > 50
  ) {
    throw new Error(
      `(errid:Watl000416)字段[参数名(paraName)]的长度不能超过50(In 函数参数4Code(FuncPara4Code))!值:${pobjFuncPara4CodeEN.paraName}(clsFuncPara4CodeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFuncPara4CodeEN.paraCnName) == false &&
    GetStrLen(pobjFuncPara4CodeEN.paraCnName) > 50
  ) {
    throw new Error(
      `(errid:Watl000416)字段[参数中文名(paraCnName)]的长度不能超过50(In 函数参数4Code(FuncPara4Code))!值:${pobjFuncPara4CodeEN.paraCnName}(clsFuncPara4CodeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFuncPara4CodeEN.dataTypeId) == false &&
    GetStrLen(pobjFuncPara4CodeEN.dataTypeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000416)字段[数据类型Id(dataTypeId)]的长度不能超过2(In 函数参数4Code(FuncPara4Code))!值:${pobjFuncPara4CodeEN.dataTypeId}(clsFuncPara4CodeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFuncPara4CodeEN.parameterType) == false &&
    GetStrLen(pobjFuncPara4CodeEN.parameterType) > 100
  ) {
    throw new Error(
      `(errid:Watl000416)字段[参数类型(parameterType)]的长度不能超过100(In 函数参数4Code(FuncPara4Code))!值:${pobjFuncPara4CodeEN.parameterType}(clsFuncPara4CodeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFuncPara4CodeEN.parameterTypeFullName) == false &&
    GetStrLen(pobjFuncPara4CodeEN.parameterTypeFullName) > 500
  ) {
    throw new Error(
      `(errid:Watl000416)字段[参数类型全名(parameterTypeFullName)]的长度不能超过500(In 函数参数4Code(FuncPara4Code))!值:${pobjFuncPara4CodeEN.parameterTypeFullName}(clsFuncPara4CodeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFuncPara4CodeEN.prjId) == false &&
    GetStrLen(pobjFuncPara4CodeEN.prjId) > 4
  ) {
    throw new Error(
      `(errid:Watl000416)字段[工程Id(prjId)]的长度不能超过4(In 函数参数4Code(FuncPara4Code))!值:${pobjFuncPara4CodeEN.prjId}(clsFuncPara4CodeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFuncPara4CodeEN.funcPurposeId) == false &&
    GetStrLen(pobjFuncPara4CodeEN.funcPurposeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000416)字段[函数用途Id(funcPurposeId)]的长度不能超过2(In 函数参数4Code(FuncPara4Code))!值:${pobjFuncPara4CodeEN.funcPurposeId}(clsFuncPara4CodeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFuncPara4CodeEN.updDate) == false &&
    GetStrLen(pobjFuncPara4CodeEN.updDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 函数参数4Code(FuncPara4Code))!值:${pobjFuncPara4CodeEN.updDate}(clsFuncPara4CodeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFuncPara4CodeEN.updUser) == false &&
    GetStrLen(pobjFuncPara4CodeEN.updUser) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改者(updUser)]的长度不能超过20(In 函数参数4Code(FuncPara4Code))!值:${pobjFuncPara4CodeEN.updUser}(clsFuncPara4CodeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFuncPara4CodeEN.memo) == false &&
    GetStrLen(pobjFuncPara4CodeEN.memo) > 1000
  ) {
    throw new Error(
      `(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In 函数参数4Code(FuncPara4Code))!值:${pobjFuncPara4CodeEN.memo}(clsFuncPara4CodeBL:CheckProperty4Update)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjFuncPara4CodeEN.funcParaId4Code) == false &&
    undefined !== pobjFuncPara4CodeEN.funcParaId4Code &&
    tzDataType.isString(pobjFuncPara4CodeEN.funcParaId4Code) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[函数参数Id(funcParaId4Code)]的值:[${pobjFuncPara4CodeEN.funcParaId4Code}], 非法,应该为字符型(In 函数参数4Code(FuncPara4Code))!(clsFuncPara4CodeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFuncPara4CodeEN.paraName) == false &&
    undefined !== pobjFuncPara4CodeEN.paraName &&
    tzDataType.isString(pobjFuncPara4CodeEN.paraName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[参数名(paraName)]的值:[${pobjFuncPara4CodeEN.paraName}], 非法,应该为字符型(In 函数参数4Code(FuncPara4Code))!(clsFuncPara4CodeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFuncPara4CodeEN.paraCnName) == false &&
    undefined !== pobjFuncPara4CodeEN.paraCnName &&
    tzDataType.isString(pobjFuncPara4CodeEN.paraCnName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[参数中文名(paraCnName)]的值:[${pobjFuncPara4CodeEN.paraCnName}], 非法,应该为字符型(In 函数参数4Code(FuncPara4Code))!(clsFuncPara4CodeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFuncPara4CodeEN.dataTypeId) == false &&
    undefined !== pobjFuncPara4CodeEN.dataTypeId &&
    tzDataType.isString(pobjFuncPara4CodeEN.dataTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[数据类型Id(dataTypeId)]的值:[${pobjFuncPara4CodeEN.dataTypeId}], 非法,应该为字符型(In 函数参数4Code(FuncPara4Code))!(clsFuncPara4CodeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFuncPara4CodeEN.parameterType) == false &&
    undefined !== pobjFuncPara4CodeEN.parameterType &&
    tzDataType.isString(pobjFuncPara4CodeEN.parameterType) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[参数类型(parameterType)]的值:[${pobjFuncPara4CodeEN.parameterType}], 非法,应该为字符型(In 函数参数4Code(FuncPara4Code))!(clsFuncPara4CodeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFuncPara4CodeEN.parameterTypeFullName) == false &&
    undefined !== pobjFuncPara4CodeEN.parameterTypeFullName &&
    tzDataType.isString(pobjFuncPara4CodeEN.parameterTypeFullName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[参数类型全名(parameterTypeFullName)]的值:[${pobjFuncPara4CodeEN.parameterTypeFullName}], 非法,应该为字符型(In 函数参数4Code(FuncPara4Code))!(clsFuncPara4CodeBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjFuncPara4CodeEN.isByRef &&
    undefined !== pobjFuncPara4CodeEN.isByRef &&
    tzDataType.isBoolean(pobjFuncPara4CodeEN.isByRef) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否引用型参数(isByRef)]的值:[${pobjFuncPara4CodeEN.isByRef}], 非法,应该为布尔型(In 函数参数4Code(FuncPara4Code))!(clsFuncPara4CodeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFuncPara4CodeEN.prjId) == false &&
    undefined !== pobjFuncPara4CodeEN.prjId &&
    tzDataType.isString(pobjFuncPara4CodeEN.prjId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[工程Id(prjId)]的值:[${pobjFuncPara4CodeEN.prjId}], 非法,应该为字符型(In 函数参数4Code(FuncPara4Code))!(clsFuncPara4CodeBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjFuncPara4CodeEN.isTemplate &&
    undefined !== pobjFuncPara4CodeEN.isTemplate &&
    tzDataType.isBoolean(pobjFuncPara4CodeEN.isTemplate) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否模板(isTemplate)]的值:[${pobjFuncPara4CodeEN.isTemplate}], 非法,应该为布尔型(In 函数参数4Code(FuncPara4Code))!(clsFuncPara4CodeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFuncPara4CodeEN.funcPurposeId) == false &&
    undefined !== pobjFuncPara4CodeEN.funcPurposeId &&
    tzDataType.isString(pobjFuncPara4CodeEN.funcPurposeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[函数用途Id(funcPurposeId)]的值:[${pobjFuncPara4CodeEN.funcPurposeId}], 非法,应该为字符型(In 函数参数4Code(FuncPara4Code))!(clsFuncPara4CodeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFuncPara4CodeEN.updDate) == false &&
    undefined !== pobjFuncPara4CodeEN.updDate &&
    tzDataType.isString(pobjFuncPara4CodeEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjFuncPara4CodeEN.updDate}], 非法,应该为字符型(In 函数参数4Code(FuncPara4Code))!(clsFuncPara4CodeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFuncPara4CodeEN.updUser) == false &&
    undefined !== pobjFuncPara4CodeEN.updUser &&
    tzDataType.isString(pobjFuncPara4CodeEN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改者(updUser)]的值:[${pobjFuncPara4CodeEN.updUser}], 非法,应该为字符型(In 函数参数4Code(FuncPara4Code))!(clsFuncPara4CodeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFuncPara4CodeEN.memo) == false &&
    undefined !== pobjFuncPara4CodeEN.memo &&
    tzDataType.isString(pobjFuncPara4CodeEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[说明(memo)]的值:[${pobjFuncPara4CodeEN.memo}], 非法,应该为字符型(In 函数参数4Code(FuncPara4Code))!(clsFuncPara4CodeBL:CheckProperty4Update)`,
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
export function FuncPara4Code_GetJSONStrByObj(pobjFuncPara4CodeEN: clsFuncPara4CodeEN): string {
  pobjFuncPara4CodeEN.sfUpdFldSetStr = pobjFuncPara4CodeEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjFuncPara4CodeEN);
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
export function FuncPara4Code_GetObjLstByJSONStr(strJSON: string): Array<clsFuncPara4CodeEN> {
  let arrFuncPara4CodeObjLst = new Array<clsFuncPara4CodeEN>();
  if (strJSON === '') {
    return arrFuncPara4CodeObjLst;
  }
  try {
    arrFuncPara4CodeObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrFuncPara4CodeObjLst;
  }
  return arrFuncPara4CodeObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrFuncPara4CodeObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function FuncPara4Code_GetObjLstByJSONObjLst(
  arrFuncPara4CodeObjLstS: Array<clsFuncPara4CodeEN>,
): Array<clsFuncPara4CodeEN> {
  const arrFuncPara4CodeObjLst = new Array<clsFuncPara4CodeEN>();
  for (const objInFor of arrFuncPara4CodeObjLstS) {
    const obj1 = FuncPara4Code_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrFuncPara4CodeObjLst.push(obj1);
  }
  return arrFuncPara4CodeObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function FuncPara4Code_GetObjByJSONStr(strJSON: string): clsFuncPara4CodeEN {
  let pobjFuncPara4CodeEN = new clsFuncPara4CodeEN();
  if (strJSON === '') {
    return pobjFuncPara4CodeEN;
  }
  try {
    pobjFuncPara4CodeEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjFuncPara4CodeEN;
  }
  return pobjFuncPara4CodeEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function FuncPara4Code_GetCombineCondition(
  objFuncPara4CodeCond: clsFuncPara4CodeEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objFuncPara4CodeCond.dicFldComparisonOp,
      clsFuncPara4CodeEN.con_FuncParaId4Code,
    ) == true
  ) {
    const strComparisonOpFuncParaId4Code: string =
      objFuncPara4CodeCond.dicFldComparisonOp[clsFuncPara4CodeEN.con_FuncParaId4Code];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFuncPara4CodeEN.con_FuncParaId4Code,
      objFuncPara4CodeCond.funcParaId4Code,
      strComparisonOpFuncParaId4Code,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFuncPara4CodeCond.dicFldComparisonOp,
      clsFuncPara4CodeEN.con_ParaName,
    ) == true
  ) {
    const strComparisonOpParaName: string =
      objFuncPara4CodeCond.dicFldComparisonOp[clsFuncPara4CodeEN.con_ParaName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFuncPara4CodeEN.con_ParaName,
      objFuncPara4CodeCond.paraName,
      strComparisonOpParaName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFuncPara4CodeCond.dicFldComparisonOp,
      clsFuncPara4CodeEN.con_ParaCnName,
    ) == true
  ) {
    const strComparisonOpParaCnName: string =
      objFuncPara4CodeCond.dicFldComparisonOp[clsFuncPara4CodeEN.con_ParaCnName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFuncPara4CodeEN.con_ParaCnName,
      objFuncPara4CodeCond.paraCnName,
      strComparisonOpParaCnName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFuncPara4CodeCond.dicFldComparisonOp,
      clsFuncPara4CodeEN.con_DataTypeId,
    ) == true
  ) {
    const strComparisonOpDataTypeId: string =
      objFuncPara4CodeCond.dicFldComparisonOp[clsFuncPara4CodeEN.con_DataTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFuncPara4CodeEN.con_DataTypeId,
      objFuncPara4CodeCond.dataTypeId,
      strComparisonOpDataTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFuncPara4CodeCond.dicFldComparisonOp,
      clsFuncPara4CodeEN.con_ParameterType,
    ) == true
  ) {
    const strComparisonOpParameterType: string =
      objFuncPara4CodeCond.dicFldComparisonOp[clsFuncPara4CodeEN.con_ParameterType];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFuncPara4CodeEN.con_ParameterType,
      objFuncPara4CodeCond.parameterType,
      strComparisonOpParameterType,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFuncPara4CodeCond.dicFldComparisonOp,
      clsFuncPara4CodeEN.con_ParameterTypeFullName,
    ) == true
  ) {
    const strComparisonOpParameterTypeFullName: string =
      objFuncPara4CodeCond.dicFldComparisonOp[clsFuncPara4CodeEN.con_ParameterTypeFullName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFuncPara4CodeEN.con_ParameterTypeFullName,
      objFuncPara4CodeCond.parameterTypeFullName,
      strComparisonOpParameterTypeFullName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFuncPara4CodeCond.dicFldComparisonOp,
      clsFuncPara4CodeEN.con_IsByRef,
    ) == true
  ) {
    if (objFuncPara4CodeCond.isByRef == true) {
      strWhereCond += Format(" And {0} = '1'", clsFuncPara4CodeEN.con_IsByRef);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsFuncPara4CodeEN.con_IsByRef);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFuncPara4CodeCond.dicFldComparisonOp,
      clsFuncPara4CodeEN.con_PrjId,
    ) == true
  ) {
    const strComparisonOpPrjId: string =
      objFuncPara4CodeCond.dicFldComparisonOp[clsFuncPara4CodeEN.con_PrjId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFuncPara4CodeEN.con_PrjId,
      objFuncPara4CodeCond.prjId,
      strComparisonOpPrjId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFuncPara4CodeCond.dicFldComparisonOp,
      clsFuncPara4CodeEN.con_IsTemplate,
    ) == true
  ) {
    if (objFuncPara4CodeCond.isTemplate == true) {
      strWhereCond += Format(" And {0} = '1'", clsFuncPara4CodeEN.con_IsTemplate);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsFuncPara4CodeEN.con_IsTemplate);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFuncPara4CodeCond.dicFldComparisonOp,
      clsFuncPara4CodeEN.con_FuncPurposeId,
    ) == true
  ) {
    const strComparisonOpFuncPurposeId: string =
      objFuncPara4CodeCond.dicFldComparisonOp[clsFuncPara4CodeEN.con_FuncPurposeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFuncPara4CodeEN.con_FuncPurposeId,
      objFuncPara4CodeCond.funcPurposeId,
      strComparisonOpFuncPurposeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFuncPara4CodeCond.dicFldComparisonOp,
      clsFuncPara4CodeEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objFuncPara4CodeCond.dicFldComparisonOp[clsFuncPara4CodeEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFuncPara4CodeEN.con_UpdDate,
      objFuncPara4CodeCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFuncPara4CodeCond.dicFldComparisonOp,
      clsFuncPara4CodeEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objFuncPara4CodeCond.dicFldComparisonOp[clsFuncPara4CodeEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFuncPara4CodeEN.con_UpdUser,
      objFuncPara4CodeCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFuncPara4CodeCond.dicFldComparisonOp,
      clsFuncPara4CodeEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objFuncPara4CodeCond.dicFldComparisonOp[clsFuncPara4CodeEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFuncPara4CodeEN.con_Memo,
      objFuncPara4CodeCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--FuncPara4Code(函数参数4Code),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strPrjId: 工程Id(要求唯一的字段)
 * @param strParaName: 参数名(要求唯一的字段)
 * @param strDataTypeId: 数据类型Id(要求唯一的字段)
 * @param strFuncPurposeId: 函数用途Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function FuncPara4Code_GetUniCondStr(objFuncPara4CodeEN: clsFuncPara4CodeEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and PrjId = '{0}'", objFuncPara4CodeEN.prjId);
  strWhereCond += Format(" and ParaName = '{0}'", objFuncPara4CodeEN.paraName);
  strWhereCond += Format(" and DataTypeId = '{0}'", objFuncPara4CodeEN.dataTypeId);
  strWhereCond += Format(" and FuncPurposeId = '{0}'", objFuncPara4CodeEN.funcPurposeId);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--FuncPara4Code(函数参数4Code),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strPrjId: 工程Id(要求唯一的字段)
 * @param strParaName: 参数名(要求唯一的字段)
 * @param strDataTypeId: 数据类型Id(要求唯一的字段)
 * @param strFuncPurposeId: 函数用途Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function FuncPara4Code_GetUniCondStr4Update(objFuncPara4CodeEN: clsFuncPara4CodeEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and FuncParaId4Code <> '{0}'", objFuncPara4CodeEN.funcParaId4Code);
  strWhereCond += Format(" and PrjId = '{0}'", objFuncPara4CodeEN.prjId);
  strWhereCond += Format(" and ParaName = '{0}'", objFuncPara4CodeEN.paraName);
  strWhereCond += Format(" and DataTypeId = '{0}'", objFuncPara4CodeEN.dataTypeId);
  strWhereCond += Format(" and FuncPurposeId = '{0}'", objFuncPara4CodeEN.funcPurposeId);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objFuncPara4CodeENS:源对象
 * @param objFuncPara4CodeENT:目标对象
 */
export function FuncPara4Code_GetObjFromJsonObj(
  objFuncPara4CodeENS: clsFuncPara4CodeEN,
): clsFuncPara4CodeEN {
  const objFuncPara4CodeENT: clsFuncPara4CodeEN = new clsFuncPara4CodeEN();
  ObjectAssign(objFuncPara4CodeENT, objFuncPara4CodeENS);
  return objFuncPara4CodeENT;
}
