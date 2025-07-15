/**
 * 类名:clsFunctionTemplateRelaWApi
 * 表名:FunctionTemplateRela(00050313)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/14 11:51:23
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
 * 函数与模板关系(FunctionTemplateRela)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2025年06月14日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { ObjectAssign, GetExceptionStr, myShowErrorMsg } from '@/ts/PubFun/clsCommFunc4Web';
import { clsFunctionTemplateRelaENEx } from '@/ts/L0Entity/PrjFunction/clsFunctionTemplateRelaENEx';
import { clsFunctionTemplateRelaEN } from '@/ts/L0Entity/PrjFunction/clsFunctionTemplateRelaEN';
import { Format, GetStrLen, tzDataType, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { FunctionTemplate_func } from '@/ts/L3ForWApi/PrjFunction/clsFunctionTemplateWApi';
import { clsFunctionTemplateEN } from '@/ts/L0Entity/PrjFunction/clsFunctionTemplateEN';
import { RegionType_func } from '@/ts/L3ForWApi/RegionManage/clsRegionTypeWApi';
import { clsRegionTypeEN } from '@/ts/L0Entity/RegionManage/clsRegionTypeEN';
import { vFunction4GeneCode_Sim_func } from '@/ts/L3ForWApi/PrjFunction/clsvFunction4GeneCode_SimWApi';
import { clsvFunction4GeneCode_SimEN } from '@/ts/L0Entity/PrjFunction/clsvFunction4GeneCode_SimEN';
import { vFunction4Code_Sim_func } from '@/ts/L3ForWApi/PrjFunction/clsvFunction4Code_SimWApi';
import { clsvFunction4Code_SimEN } from '@/ts/L0Entity/PrjFunction/clsvFunction4Code_SimEN';
import { vCodeType_Sim_func } from '@/ts/L3ForWApi/GeneCode/clsvCodeType_SimWApi';
import { clsvCodeType_SimEN } from '@/ts/L0Entity/GeneCode/clsvCodeType_SimEN';
import { ProgLangType_func } from '@/ts/L3ForWApi/SysPara/clsProgLangTypeWApi';
import { clsProgLangTypeEN } from '@/ts/L0Entity/SysPara/clsProgLangTypeEN';
import { clsOrderByData } from '@/ts/PubFun/clsOrderByData';
import { AddRecordResult } from '@/ts/PubFun/AddRecordResult';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';

export const functionTemplateRela_Controller = 'FunctionTemplateRelaApi';
export const functionTemplateRela_ConstructorName = 'functionTemplateRela';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngmId:关键字
 * @returns 对象
 **/
export async function FunctionTemplateRela_GetObjBymIdAsync(
  lngmId: number,
): Promise<clsFunctionTemplateRelaEN | null> {
  const strThisFuncName = 'GetObjBymIdAsync';

  if (lngmId == 0) {
    const strMsg = Format(
      '参数:[lngmId]不能为空!(In clsFunctionTemplateRelaWApi.GetObjBymIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjBymId';
  const strUrl = GetWebApiUrl(functionTemplateRela_Controller, strAction);

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
      const objFunctionTemplateRela = FunctionTemplateRela_GetObjFromJsonObj(returnObj);
      return objFunctionTemplateRela;
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
        functionTemplateRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        functionTemplateRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[GetObjBymIdlocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[GetObjBymIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )
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
export function FunctionTemplateRela_SortFunDefa(
  a: clsFunctionTemplateRelaEN,
  b: clsFunctionTemplateRelaEN,
): number {
  return a.mId - b.mId;
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
export function FunctionTemplateRela_SortFunDefa2Fld(
  a: clsFunctionTemplateRelaEN,
  b: clsFunctionTemplateRelaEN,
): number {
  if (a.functionTemplateId == b.functionTemplateId) return a.codeTypeId.localeCompare(b.codeTypeId);
  else return a.functionTemplateId.localeCompare(b.functionTemplateId);
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
export function FunctionTemplateRela_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsFunctionTemplateRelaEN.con_mId:
        return (a: clsFunctionTemplateRelaEN, b: clsFunctionTemplateRelaEN) => {
          return a.mId - b.mId;
        };
      case clsFunctionTemplateRelaEN.con_FunctionTemplateId:
        return (a: clsFunctionTemplateRelaEN, b: clsFunctionTemplateRelaEN) => {
          return a.functionTemplateId.localeCompare(b.functionTemplateId);
        };
      case clsFunctionTemplateRelaEN.con_CodeTypeId:
        return (a: clsFunctionTemplateRelaEN, b: clsFunctionTemplateRelaEN) => {
          if (a.codeTypeId == null) return -1;
          if (b.codeTypeId == null) return 1;
          return a.codeTypeId.localeCompare(b.codeTypeId);
        };
      case clsFunctionTemplateRelaEN.con_RegionTypeId:
        return (a: clsFunctionTemplateRelaEN, b: clsFunctionTemplateRelaEN) => {
          if (a.regionTypeId == null) return -1;
          if (b.regionTypeId == null) return 1;
          return a.regionTypeId.localeCompare(b.regionTypeId);
        };
      case clsFunctionTemplateRelaEN.con_FuncCodeTypeId:
        return (a: clsFunctionTemplateRelaEN, b: clsFunctionTemplateRelaEN) => {
          if (a.funcCodeTypeId == null) return -1;
          if (b.funcCodeTypeId == null) return 1;
          return a.funcCodeTypeId.localeCompare(b.funcCodeTypeId);
        };
      case clsFunctionTemplateRelaEN.con_FuncId4GC:
        return (a: clsFunctionTemplateRelaEN, b: clsFunctionTemplateRelaEN) => {
          return a.funcId4GC.localeCompare(b.funcId4GC);
        };
      case clsFunctionTemplateRelaEN.con_IsGeneCode:
        return (a: clsFunctionTemplateRelaEN) => {
          if (a.isGeneCode == true) return 1;
          else return -1;
        };
      case clsFunctionTemplateRelaEN.con_OrderNum:
        return (a: clsFunctionTemplateRelaEN, b: clsFunctionTemplateRelaEN) => {
          return a.orderNum - b.orderNum;
        };
      case clsFunctionTemplateRelaEN.con_UpdDate:
        return (a: clsFunctionTemplateRelaEN, b: clsFunctionTemplateRelaEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsFunctionTemplateRelaEN.con_UpdUser:
        return (a: clsFunctionTemplateRelaEN, b: clsFunctionTemplateRelaEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsFunctionTemplateRelaEN.con_Memo:
        return (a: clsFunctionTemplateRelaEN, b: clsFunctionTemplateRelaEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[FunctionTemplateRela]中不存在!(in ${functionTemplateRela_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsFunctionTemplateRelaEN.con_mId:
        return (a: clsFunctionTemplateRelaEN, b: clsFunctionTemplateRelaEN) => {
          return b.mId - a.mId;
        };
      case clsFunctionTemplateRelaEN.con_FunctionTemplateId:
        return (a: clsFunctionTemplateRelaEN, b: clsFunctionTemplateRelaEN) => {
          return b.functionTemplateId.localeCompare(a.functionTemplateId);
        };
      case clsFunctionTemplateRelaEN.con_CodeTypeId:
        return (a: clsFunctionTemplateRelaEN, b: clsFunctionTemplateRelaEN) => {
          if (b.codeTypeId == null) return -1;
          if (a.codeTypeId == null) return 1;
          return b.codeTypeId.localeCompare(a.codeTypeId);
        };
      case clsFunctionTemplateRelaEN.con_RegionTypeId:
        return (a: clsFunctionTemplateRelaEN, b: clsFunctionTemplateRelaEN) => {
          if (b.regionTypeId == null) return -1;
          if (a.regionTypeId == null) return 1;
          return b.regionTypeId.localeCompare(a.regionTypeId);
        };
      case clsFunctionTemplateRelaEN.con_FuncCodeTypeId:
        return (a: clsFunctionTemplateRelaEN, b: clsFunctionTemplateRelaEN) => {
          if (b.funcCodeTypeId == null) return -1;
          if (a.funcCodeTypeId == null) return 1;
          return b.funcCodeTypeId.localeCompare(a.funcCodeTypeId);
        };
      case clsFunctionTemplateRelaEN.con_FuncId4GC:
        return (a: clsFunctionTemplateRelaEN, b: clsFunctionTemplateRelaEN) => {
          return b.funcId4GC.localeCompare(a.funcId4GC);
        };
      case clsFunctionTemplateRelaEN.con_IsGeneCode:
        return (b: clsFunctionTemplateRelaEN) => {
          if (b.isGeneCode == true) return 1;
          else return -1;
        };
      case clsFunctionTemplateRelaEN.con_OrderNum:
        return (a: clsFunctionTemplateRelaEN, b: clsFunctionTemplateRelaEN) => {
          return b.orderNum - a.orderNum;
        };
      case clsFunctionTemplateRelaEN.con_UpdDate:
        return (a: clsFunctionTemplateRelaEN, b: clsFunctionTemplateRelaEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsFunctionTemplateRelaEN.con_UpdUser:
        return (a: clsFunctionTemplateRelaEN, b: clsFunctionTemplateRelaEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsFunctionTemplateRelaEN.con_Memo:
        return (a: clsFunctionTemplateRelaEN, b: clsFunctionTemplateRelaEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[FunctionTemplateRela]中不存在!(in ${functionTemplateRela_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}
//该表没有使用Cache,不需要生成[GetNameBymIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function FunctionTemplateRela_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsFunctionTemplateRelaEN.con_mId:
      return (obj: clsFunctionTemplateRelaEN) => {
        return obj.mId === value;
      };
    case clsFunctionTemplateRelaEN.con_FunctionTemplateId:
      return (obj: clsFunctionTemplateRelaEN) => {
        return obj.functionTemplateId === value;
      };
    case clsFunctionTemplateRelaEN.con_CodeTypeId:
      return (obj: clsFunctionTemplateRelaEN) => {
        return obj.codeTypeId === value;
      };
    case clsFunctionTemplateRelaEN.con_RegionTypeId:
      return (obj: clsFunctionTemplateRelaEN) => {
        return obj.regionTypeId === value;
      };
    case clsFunctionTemplateRelaEN.con_FuncCodeTypeId:
      return (obj: clsFunctionTemplateRelaEN) => {
        return obj.funcCodeTypeId === value;
      };
    case clsFunctionTemplateRelaEN.con_FuncId4GC:
      return (obj: clsFunctionTemplateRelaEN) => {
        return obj.funcId4GC === value;
      };
    case clsFunctionTemplateRelaEN.con_IsGeneCode:
      return (obj: clsFunctionTemplateRelaEN) => {
        return obj.isGeneCode === value;
      };
    case clsFunctionTemplateRelaEN.con_OrderNum:
      return (obj: clsFunctionTemplateRelaEN) => {
        return obj.orderNum === value;
      };
    case clsFunctionTemplateRelaEN.con_UpdDate:
      return (obj: clsFunctionTemplateRelaEN) => {
        return obj.updDate === value;
      };
    case clsFunctionTemplateRelaEN.con_UpdUser:
      return (obj: clsFunctionTemplateRelaEN) => {
        return obj.updUser === value;
      };
    case clsFunctionTemplateRelaEN.con_Memo:
      return (obj: clsFunctionTemplateRelaEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[FunctionTemplateRela]中不存在!(in ${functionTemplateRela_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}
//该表没有使用Cache,不需要生成[func]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func )
//该表没有使用Cache,不需要生成[FunctionTemplateRela__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function FunctionTemplateRela_GetFldValueAsync(
  strFldName: string,
  strWhereCond: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetFldValueAsync';
  const strAction = 'GetFldValue';
  const strUrl = GetWebApiUrl(functionTemplateRela_Controller, strAction);

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
        functionTemplateRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        functionTemplateRela_ConstructorName,
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
export async function FunctionTemplateRela_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(functionTemplateRela_Controller, strAction);

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
        functionTemplateRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        functionTemplateRela_ConstructorName,
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
export async function FunctionTemplateRela_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(functionTemplateRela_Controller, strAction);

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
        functionTemplateRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        functionTemplateRela_ConstructorName,
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
export async function FunctionTemplateRela_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsFunctionTemplateRelaEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(functionTemplateRela_Controller, strAction);

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
      const objFunctionTemplateRela = FunctionTemplateRela_GetObjFromJsonObj(returnObj);
      return objFunctionTemplateRela;
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
        functionTemplateRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        functionTemplateRela_ConstructorName,
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
export async function FunctionTemplateRela_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsFunctionTemplateRelaEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(functionTemplateRela_Controller, strAction);

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
          functionTemplateRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = FunctionTemplateRela_GetObjLstByJSONObjLst(returnObjLst);
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
        functionTemplateRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        functionTemplateRela_ConstructorName,
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
export async function FunctionTemplateRela_GetObjLstBymIdLstAsync(
  arrmId: Array<string>,
): Promise<Array<clsFunctionTemplateRelaEN>> {
  const strThisFuncName = 'GetObjLstBymIdLstAsync';
  const strAction = 'GetObjLstBymIdLst';
  const strUrl = GetWebApiUrl(functionTemplateRela_Controller, strAction);

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
          functionTemplateRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = FunctionTemplateRela_GetObjLstByJSONObjLst(returnObjLst);
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
        functionTemplateRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        functionTemplateRela_ConstructorName,
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
export async function FunctionTemplateRela_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsFunctionTemplateRelaEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(functionTemplateRela_Controller, strAction);

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
          functionTemplateRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = FunctionTemplateRela_GetObjLstByJSONObjLst(returnObjLst);
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
        functionTemplateRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        functionTemplateRela_ConstructorName,
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
export async function FunctionTemplateRela_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsFunctionTemplateRelaEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(functionTemplateRela_Controller, strAction);

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
          functionTemplateRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = FunctionTemplateRela_GetObjLstByJSONObjLst(returnObjLst);
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
        functionTemplateRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        functionTemplateRela_ConstructorName,
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
export async function FunctionTemplateRela_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsFunctionTemplateRelaEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsFunctionTemplateRelaEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(functionTemplateRela_Controller, strAction);

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
          functionTemplateRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = FunctionTemplateRela_GetObjLstByJSONObjLst(returnObjLst);
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
        functionTemplateRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        functionTemplateRela_ConstructorName,
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
export async function FunctionTemplateRela_DelRecordAsync(lngmId: number): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(functionTemplateRela_Controller, strAction);
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
        functionTemplateRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        functionTemplateRela_ConstructorName,
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
export async function FunctionTemplateRela_DelFunctionTemplateRelasAsync(
  arrmId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelFunctionTemplateRelasAsync';
  const strAction = 'DelFunctionTemplateRelas';
  const strUrl = GetWebApiUrl(functionTemplateRela_Controller, strAction);

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
        functionTemplateRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        functionTemplateRela_ConstructorName,
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
 * @param objFunctionTemplateRelaENS:源对象
 * @returns 目标对象=>clsFunctionTemplateRelaEN:objFunctionTemplateRelaENT
 **/
export function FunctionTemplateRela_CopyToEx(
  objFunctionTemplateRelaENS: clsFunctionTemplateRelaEN,
): clsFunctionTemplateRelaENEx {
  const strThisFuncName = FunctionTemplateRela_CopyToEx.name;
  const objFunctionTemplateRelaENT = new clsFunctionTemplateRelaENEx();
  try {
    ObjectAssign(objFunctionTemplateRelaENT, objFunctionTemplateRelaENS);
    return objFunctionTemplateRelaENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001294)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      functionTemplateRela_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objFunctionTemplateRelaENT;
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
export function FunctionTemplateRela_FuncMapByFldName(
  strFldName: string,
  objFunctionTemplateRelaEx: clsFunctionTemplateRelaENEx,
) {
  const strThisFuncName = FunctionTemplateRela_FuncMapByFldName.name;
  strFldName = strFldName.replace('|Ex', '');
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsFunctionTemplateRelaEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsFunctionTemplateRelaENEx.con_FunctionTemplateName:
      return FunctionTemplateRela_FuncMapFunctionTemplateName(objFunctionTemplateRelaEx);
    case clsFunctionTemplateRelaENEx.con_RegionTypeName:
      return FunctionTemplateRela_FuncMapRegionTypeName(objFunctionTemplateRelaEx);
    case clsFunctionTemplateRelaENEx.con_FuncName:
      return FunctionTemplateRela_FuncMapFuncName(objFunctionTemplateRelaEx);
    case clsFunctionTemplateRelaENEx.con_FuncName4Code:
      return FunctionTemplateRela_FuncMapFuncName4Code(objFunctionTemplateRelaEx);
    case clsFunctionTemplateRelaENEx.con_ProgLangTypeSimName:
      return FunctionTemplateRela_FuncMapProgLangTypeSimName(objFunctionTemplateRelaEx);
    case clsFunctionTemplateRelaENEx.con_CodeTypeSimName:
      return FunctionTemplateRela_FuncMapCodeTypeSimName(objFunctionTemplateRelaEx);
    case clsFunctionTemplateRelaENEx.con_CodeTypeName:
      return FunctionTemplateRela_FuncMapCodeTypeName(objFunctionTemplateRelaEx);
    case clsFunctionTemplateRelaENEx.con_FuncCodeTypeName:
      return FunctionTemplateRela_FuncMapFuncCodeTypeName(objFunctionTemplateRelaEx);
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
export function FunctionTemplateRela_SortFunByExKey(strKey: string, AscOrDesc: string) {
  strKey = strKey.replace('|Ex', '');
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsFunctionTemplateRelaENEx.con_FunctionTemplateName:
        return (a: clsFunctionTemplateRelaENEx, b: clsFunctionTemplateRelaENEx) => {
          return a.functionTemplateName.localeCompare(b.functionTemplateName);
        };
      case clsFunctionTemplateRelaENEx.con_RegionTypeName:
        return (a: clsFunctionTemplateRelaENEx, b: clsFunctionTemplateRelaENEx) => {
          return a.regionTypeName.localeCompare(b.regionTypeName);
        };
      case clsFunctionTemplateRelaENEx.con_FuncName:
        return (a: clsFunctionTemplateRelaENEx, b: clsFunctionTemplateRelaENEx) => {
          return a.funcName.localeCompare(b.funcName);
        };
      case clsFunctionTemplateRelaENEx.con_FuncName4Code:
        return (a: clsFunctionTemplateRelaENEx, b: clsFunctionTemplateRelaENEx) => {
          return a.funcName4Code.localeCompare(b.funcName4Code);
        };
      case clsFunctionTemplateRelaENEx.con_ProgLangTypeSimName:
        return (a: clsFunctionTemplateRelaENEx, b: clsFunctionTemplateRelaENEx) => {
          if (a.progLangTypeSimName === null && b.progLangTypeSimName === null) return 0;
          if (a.progLangTypeSimName === null) return -1;
          if (b.progLangTypeSimName === null) return 1;
          return a.progLangTypeSimName.localeCompare(b.progLangTypeSimName);
        };
      case clsFunctionTemplateRelaENEx.con_CodeTypeSimName:
        return (a: clsFunctionTemplateRelaENEx, b: clsFunctionTemplateRelaENEx) => {
          return a.codeTypeSimName.localeCompare(b.codeTypeSimName);
        };
      case clsFunctionTemplateRelaENEx.con_CodeTypeName:
        return (a: clsFunctionTemplateRelaENEx, b: clsFunctionTemplateRelaENEx) => {
          return a.codeTypeName.localeCompare(b.codeTypeName);
        };
      case clsFunctionTemplateRelaENEx.con_FuncCodeTypeName:
        return (a: clsFunctionTemplateRelaENEx, b: clsFunctionTemplateRelaENEx) => {
          if (a.funcCodeTypeName === null && b.funcCodeTypeName === null) return 0;
          if (a.funcCodeTypeName === null) return -1;
          if (b.funcCodeTypeName === null) return 1;
          return a.funcCodeTypeName.localeCompare(b.funcCodeTypeName);
        };
      default:
        return FunctionTemplateRela_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsFunctionTemplateRelaENEx.con_FunctionTemplateName:
        return (a: clsFunctionTemplateRelaENEx, b: clsFunctionTemplateRelaENEx) => {
          return b.functionTemplateName.localeCompare(a.functionTemplateName);
        };
      case clsFunctionTemplateRelaENEx.con_RegionTypeName:
        return (a: clsFunctionTemplateRelaENEx, b: clsFunctionTemplateRelaENEx) => {
          return b.regionTypeName.localeCompare(a.regionTypeName);
        };
      case clsFunctionTemplateRelaENEx.con_FuncName:
        return (a: clsFunctionTemplateRelaENEx, b: clsFunctionTemplateRelaENEx) => {
          return b.funcName.localeCompare(a.funcName);
        };
      case clsFunctionTemplateRelaENEx.con_FuncName4Code:
        return (a: clsFunctionTemplateRelaENEx, b: clsFunctionTemplateRelaENEx) => {
          return b.funcName4Code.localeCompare(a.funcName4Code);
        };
      case clsFunctionTemplateRelaENEx.con_ProgLangTypeSimName:
        return (a: clsFunctionTemplateRelaENEx, b: clsFunctionTemplateRelaENEx) => {
          if (a.progLangTypeSimName === null && b.progLangTypeSimName === null) return 0;
          if (a.progLangTypeSimName === null) return 1;
          if (b.progLangTypeSimName === null) return -1;
          return b.progLangTypeSimName.localeCompare(a.progLangTypeSimName);
        };
      case clsFunctionTemplateRelaENEx.con_CodeTypeSimName:
        return (a: clsFunctionTemplateRelaENEx, b: clsFunctionTemplateRelaENEx) => {
          return b.codeTypeSimName.localeCompare(a.codeTypeSimName);
        };
      case clsFunctionTemplateRelaENEx.con_CodeTypeName:
        return (a: clsFunctionTemplateRelaENEx, b: clsFunctionTemplateRelaENEx) => {
          return b.codeTypeName.localeCompare(a.codeTypeName);
        };
      case clsFunctionTemplateRelaENEx.con_FuncCodeTypeName:
        return (a: clsFunctionTemplateRelaENEx, b: clsFunctionTemplateRelaENEx) => {
          if (a.funcCodeTypeName === null && b.funcCodeTypeName === null) return 0;
          if (a.funcCodeTypeName === null) return 1;
          if (b.funcCodeTypeName === null) return -1;
          return b.funcCodeTypeName.localeCompare(a.funcCodeTypeName);
        };
      default:
        return FunctionTemplateRela_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objFunctionTemplateRelaS:源对象
 **/
export async function FunctionTemplateRela_FuncMapFunctionTemplateName(
  objFunctionTemplateRela: clsFunctionTemplateRelaENEx,
) {
  const strThisFuncName = FunctionTemplateRela_FuncMapFunctionTemplateName.name;
  try {
    if (IsNullOrEmpty(objFunctionTemplateRela.functionTemplateName) == true) {
      const FunctionTemplateFunctionTemplateId = objFunctionTemplateRela.functionTemplateId;
      const FunctionTemplateFunctionTemplateName = await FunctionTemplate_func(
        clsFunctionTemplateEN.con_FunctionTemplateId,
        clsFunctionTemplateEN.con_FunctionTemplateName,
        FunctionTemplateFunctionTemplateId,
      );
      objFunctionTemplateRela.functionTemplateName = FunctionTemplateFunctionTemplateName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001318)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      functionTemplateRela_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objFunctionTemplateRelaS:源对象
 **/
export async function FunctionTemplateRela_FuncMapRegionTypeName(
  objFunctionTemplateRela: clsFunctionTemplateRelaENEx,
) {
  const strThisFuncName = FunctionTemplateRela_FuncMapRegionTypeName.name;
  try {
    if (IsNullOrEmpty(objFunctionTemplateRela.regionTypeName) == true) {
      const RegionTypeRegionTypeId = objFunctionTemplateRela.regionTypeId;
      const RegionTypeRegionTypeName = await RegionType_func(
        clsRegionTypeEN.con_RegionTypeId,
        clsRegionTypeEN.con_RegionTypeName,
        RegionTypeRegionTypeId,
      );
      objFunctionTemplateRela.regionTypeName = RegionTypeRegionTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001358)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      functionTemplateRela_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objFunctionTemplateRelaS:源对象
 **/
export async function FunctionTemplateRela_FuncMapFuncName(
  objFunctionTemplateRela: clsFunctionTemplateRelaENEx,
) {
  const strThisFuncName = FunctionTemplateRela_FuncMapFuncName.name;
  try {
    if (IsNullOrEmpty(objFunctionTemplateRela.funcName) == true) {
      const vFunction4GeneCodeSimFuncId4GC = objFunctionTemplateRela.funcId4GC;
      const vFunction4GeneCodeSimFuncName = await vFunction4GeneCode_Sim_func(
        clsvFunction4GeneCode_SimEN.con_FuncId4GC,
        clsvFunction4GeneCode_SimEN.con_FuncName,
        vFunction4GeneCodeSimFuncId4GC,
      );
      objFunctionTemplateRela.funcName = vFunction4GeneCodeSimFuncName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001359)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      functionTemplateRela_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objFunctionTemplateRelaS:源对象
 **/
export async function FunctionTemplateRela_FuncMapFuncName4Code(
  objFunctionTemplateRela: clsFunctionTemplateRelaENEx,
) {
  const strThisFuncName = FunctionTemplateRela_FuncMapFuncName4Code.name;
  try {
    if (IsNullOrEmpty(objFunctionTemplateRela.funcName4Code) == true) {
      const vFunction4GeneCodeSimFuncId4GC = objFunctionTemplateRela.funcId4GC;
      const vFunction4GeneCodeSimFuncId4Code = await vFunction4GeneCode_Sim_func(
        clsvFunction4GeneCode_SimEN.con_FuncId4GC,
        clsvFunction4GeneCode_SimEN.con_FuncId4Code,
        vFunction4GeneCodeSimFuncId4GC,
      );
      const vFunction4CodeSimFuncId4Code = vFunction4GeneCodeSimFuncId4Code;
      const vFunction4CodeSimFuncName4Code = await vFunction4Code_Sim_func(
        clsvFunction4Code_SimEN.con_FuncId4Code,
        clsvFunction4Code_SimEN.con_FuncName4Code,
        vFunction4CodeSimFuncId4Code,
      );
      objFunctionTemplateRela.funcName4Code = vFunction4CodeSimFuncName4Code;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001360)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      functionTemplateRela_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objFunctionTemplateRelaS:源对象
 **/
export async function FunctionTemplateRela_FuncMapProgLangTypeSimName(
  objFunctionTemplateRela: clsFunctionTemplateRelaENEx,
) {
  const strThisFuncName = FunctionTemplateRela_FuncMapProgLangTypeSimName.name;
  try {
    if (IsNullOrEmpty(objFunctionTemplateRela.progLangTypeSimName) == true) {
      const vCodeTypeSimCodeTypeId = objFunctionTemplateRela.codeTypeId;
      const vCodeTypeSimProgLangTypeId = await vCodeType_Sim_func(
        clsvCodeType_SimEN.con_CodeTypeId,
        clsvCodeType_SimEN.con_ProgLangTypeId,
        vCodeTypeSimCodeTypeId,
      );
      const ProgLangTypeProgLangTypeId = vCodeTypeSimProgLangTypeId;
      const ProgLangTypeProgLangTypeSimName = await ProgLangType_func(
        clsProgLangTypeEN.con_ProgLangTypeId,
        clsProgLangTypeEN.con_ProgLangTypeSimName,
        ProgLangTypeProgLangTypeId,
      );
      objFunctionTemplateRela.progLangTypeSimName = ProgLangTypeProgLangTypeSimName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001311)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      functionTemplateRela_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objFunctionTemplateRelaS:源对象
 **/
export async function FunctionTemplateRela_FuncMapCodeTypeSimName(
  objFunctionTemplateRela: clsFunctionTemplateRelaENEx,
) {
  const strThisFuncName = FunctionTemplateRela_FuncMapCodeTypeSimName.name;
  try {
    if (IsNullOrEmpty(objFunctionTemplateRela.codeTypeSimName) == true) {
      const vCodeTypeSimCodeTypeId = objFunctionTemplateRela.codeTypeId;
      const vCodeTypeSimCodeTypeSimName = await vCodeType_Sim_func(
        clsvCodeType_SimEN.con_CodeTypeId,
        clsvCodeType_SimEN.con_CodeTypeSimName,
        vCodeTypeSimCodeTypeId,
      );
      objFunctionTemplateRela.codeTypeSimName = vCodeTypeSimCodeTypeSimName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001308)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      functionTemplateRela_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objFunctionTemplateRelaS:源对象
 **/
export async function FunctionTemplateRela_FuncMapFuncCodeTypeName(
  objFunctionTemplateRela: clsFunctionTemplateRelaENEx,
) {
  const strThisFuncName = FunctionTemplateRela_FuncMapFuncCodeTypeName.name;
  try {
    if (IsNullOrEmpty(objFunctionTemplateRela.funcCodeTypeName) == true) {
      const vCodeTypeSimCodeTypeId = objFunctionTemplateRela.funcCodeTypeId;
      const vCodeTypeSimCodeTypeName = await vCodeType_Sim_func(
        clsvCodeType_SimEN.con_CodeTypeId,
        clsvCodeType_SimEN.con_CodeTypeName,
        vCodeTypeSimCodeTypeId,
      );
      objFunctionTemplateRela.funcCodeTypeName = vCodeTypeSimCodeTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001361)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      functionTemplateRela_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objFunctionTemplateRelaS:源对象
 **/
export async function FunctionTemplateRela_FuncMapCodeTypeName(
  objFunctionTemplateRela: clsFunctionTemplateRelaENEx,
) {
  const strThisFuncName = FunctionTemplateRela_FuncMapCodeTypeName.name;
  try {
    if (IsNullOrEmpty(objFunctionTemplateRela.codeTypeName) == true) {
      const vCodeTypeSimCodeTypeId = objFunctionTemplateRela.codeTypeId;
      const vCodeTypeSimCodeTypeName = await vCodeType_Sim_func(
        clsvCodeType_SimEN.con_CodeTypeId,
        clsvCodeType_SimEN.con_CodeTypeName,
        vCodeTypeSimCodeTypeId,
      );
      objFunctionTemplateRela.codeTypeName = vCodeTypeSimCodeTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001309)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      functionTemplateRela_ConstructorName,
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
export async function FunctionTemplateRela_DelFunctionTemplateRelasByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelFunctionTemplateRelasByCondAsync';
  const strAction = 'DelFunctionTemplateRelasByCond';
  const strUrl = GetWebApiUrl(functionTemplateRela_Controller, strAction);

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
        functionTemplateRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        functionTemplateRela_ConstructorName,
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
 * @param objFunctionTemplateRelaEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function FunctionTemplateRela_AddNewRecordAsync(
  objFunctionTemplateRelaEN: clsFunctionTemplateRelaEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objFunctionTemplateRelaEN);
  const strUrl = GetWebApiUrl(functionTemplateRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objFunctionTemplateRelaEN, config);
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
        functionTemplateRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        functionTemplateRela_ConstructorName,
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
 * @param objFunctionTemplateRelaEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function FunctionTemplateRela_GoTopAsync(
  objOrderByData: clsOrderByData,
): Promise<boolean> {
  const strThisFuncName = 'GoTopAsync';
  let strMsg = '';
  const strAction = 'GoTop';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表置顶时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(functionTemplateRela_Controller, strAction);

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
        functionTemplateRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        functionTemplateRela_ConstructorName,
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
 * @param objFunctionTemplateRelaEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function FunctionTemplateRela_UpMoveAsync(
  objOrderByData: clsOrderByData,
): Promise<boolean> {
  const strThisFuncName = 'UpMoveAsync';
  let strMsg = '';
  const strAction = 'UpMove';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表上移时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objFunctionTemplateRelaEN);
  const strUrl = GetWebApiUrl(functionTemplateRela_Controller, strAction);

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
        functionTemplateRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        functionTemplateRela_ConstructorName,
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
 * @param objFunctionTemplateRelaEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function FunctionTemplateRela_DownMoveAsync(
  objOrderByData: clsOrderByData,
): Promise<boolean> {
  const strThisFuncName = 'DownMoveAsync';
  let strMsg = '';
  const strAction = 'DownMove';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表下移时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objFunctionTemplateRelaEN);
  const strUrl = GetWebApiUrl(functionTemplateRela_Controller, strAction);

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
        functionTemplateRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        functionTemplateRela_ConstructorName,
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
export async function FunctionTemplateRela_AddNewObjSave(
  objFunctionTemplateRelaEN: clsFunctionTemplateRelaEN,
): Promise<AddRecordResult> {
  const strThisFuncName = 'AddNewObjSave';
  try {
    FunctionTemplateRela_CheckPropertyNew(objFunctionTemplateRelaEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${functionTemplateRela_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    alert(strMsg);
    return { keyword: '', success: false }; //一定要有一个返回值,否则会出错!
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await FunctionTemplateRela_CheckUniCond4Add(objFunctionTemplateRelaEN);
    if (bolIsExistCond == false) {
      return { keyword: '', success: false };
    }
    let returnBool = false;
    returnBool = await FunctionTemplateRela_AddNewRecordAsync(objFunctionTemplateRelaEN);
    if (returnBool == true) {
      //FunctionTemplateRela_ReFreshCache();
    } else {
      const strInfo = `添加[函数与模板关系(FunctionTemplateRela)]记录不成功!`;
      //显示信息框
      throw strInfo;
    }
    return { keyword: objFunctionTemplateRelaEN.mId.toString(), success: returnBool }; //一定要有一个返回值,否则会出错!
  } catch (e) {
    const strMsg = `添加记录不成功,${e}.(in ${functionTemplateRela_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export async function FunctionTemplateRela_CheckUniCond4Add(
  objFunctionTemplateRelaEN: clsFunctionTemplateRelaEN,
): Promise<boolean> {
  const strUniquenessCondition = FunctionTemplateRela_GetUniCondStr(objFunctionTemplateRelaEN);
  const bolIsExistCondition = await FunctionTemplateRela_IsExistRecordAsync(strUniquenessCondition);
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
export async function FunctionTemplateRela_CheckUniCond4Update(
  objFunctionTemplateRelaEN: clsFunctionTemplateRelaEN,
): Promise<boolean> {
  const strUniquenessCondition =
    FunctionTemplateRela_GetUniCondStr4Update(objFunctionTemplateRelaEN);
  const bolIsExistCondition = await FunctionTemplateRela_IsExistRecordAsync(strUniquenessCondition);
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
export async function FunctionTemplateRela_UpdateObjSave(
  objFunctionTemplateRelaEN: clsFunctionTemplateRelaEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateObjSave';
  objFunctionTemplateRelaEN.sfUpdFldSetStr = objFunctionTemplateRelaEN.updFldString; //设置哪些字段被修改(脏字段)
  if (objFunctionTemplateRelaEN.mId == 0 || objFunctionTemplateRelaEN.mId == undefined) {
    console.error('关键字不能为空!');
    throw '关键字不能为空!';
  }
  try {
    FunctionTemplateRela_CheckProperty4Update(objFunctionTemplateRelaEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${functionTemplateRela_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await FunctionTemplateRela_CheckUniCond4Update(
      objFunctionTemplateRelaEN,
    );
    if (bolIsExistCond == false) {
      return false;
    }
    const returnBool = await FunctionTemplateRela_UpdateRecordAsync(objFunctionTemplateRelaEN);
    if (returnBool == true) {
      //FunctionTemplateRela_ReFreshCache();
    }
    return returnBool;
  } catch (e) {
    const strMsg = `修改记录不成功,${e}.(in ${functionTemplateRela_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 把所给的关键字列表相关的记录移底
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GoBottomAsync)
 * @param objFunctionTemplateRelaEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function FunctionTemplateRela_GoBottomAsync(
  objOrderByData: clsOrderByData,
): Promise<boolean> {
  const strThisFuncName = 'GoBottomAsync';
  let strMsg = '';
  const strAction = 'GoBottom';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表置底时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objFunctionTemplateRelaEN);
  const strUrl = GetWebApiUrl(functionTemplateRela_Controller, strAction);

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
        functionTemplateRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        functionTemplateRela_ConstructorName,
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
 * @param objFunctionTemplateRelaEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function FunctionTemplateRela_ReOrderAsync(
  objOrderByData: clsOrderByData,
): Promise<boolean> {
  const strThisFuncName = 'ReOrderAsync';
  const strAction = 'ReOrder';
  //var strJSON = JSON.stringify(objFunctionTemplateRelaEN);
  const strUrl = GetWebApiUrl(functionTemplateRela_Controller, strAction);

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
        functionTemplateRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        functionTemplateRela_ConstructorName,
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
 * @param objFunctionTemplateRelaEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function FunctionTemplateRela_AddNewRecordWithReturnKeyAsync(
  objFunctionTemplateRelaEN: clsFunctionTemplateRelaEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(functionTemplateRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objFunctionTemplateRelaEN, config);
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
        functionTemplateRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        functionTemplateRela_ConstructorName,
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
 * @param objFunctionTemplateRelaEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function FunctionTemplateRela_UpdateRecordAsync(
  objFunctionTemplateRelaEN: clsFunctionTemplateRelaEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objFunctionTemplateRelaEN.sfUpdFldSetStr === undefined ||
    objFunctionTemplateRelaEN.sfUpdFldSetStr === null ||
    objFunctionTemplateRelaEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objFunctionTemplateRelaEN.mId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(functionTemplateRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objFunctionTemplateRelaEN, config);
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
        functionTemplateRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        functionTemplateRela_ConstructorName,
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
 * @param objFunctionTemplateRelaEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function FunctionTemplateRela_EditRecordExAsync(
  objFunctionTemplateRelaEN: clsFunctionTemplateRelaEN,
): Promise<boolean> {
  const strThisFuncName = 'EditRecordExAsync';
  const strAction = 'EditRecordEx';
  if (
    objFunctionTemplateRelaEN.sfUpdFldSetStr === undefined ||
    objFunctionTemplateRelaEN.sfUpdFldSetStr === null ||
    objFunctionTemplateRelaEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objFunctionTemplateRelaEN.mId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(functionTemplateRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objFunctionTemplateRelaEN, config);
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
        functionTemplateRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        functionTemplateRela_ConstructorName,
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
 * @param objFunctionTemplateRelaEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function FunctionTemplateRela_UpdateWithConditionAsync(
  objFunctionTemplateRelaEN: clsFunctionTemplateRelaEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objFunctionTemplateRelaEN.sfUpdFldSetStr === undefined ||
    objFunctionTemplateRelaEN.sfUpdFldSetStr === null ||
    objFunctionTemplateRelaEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objFunctionTemplateRelaEN.mId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(functionTemplateRela_Controller, strAction);
  objFunctionTemplateRelaEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objFunctionTemplateRelaEN, config);
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
        functionTemplateRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        functionTemplateRela_ConstructorName,
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
export async function FunctionTemplateRela_IsExistRecordAsync(
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(functionTemplateRela_Controller, strAction);

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
        functionTemplateRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        functionTemplateRela_ConstructorName,
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
export async function FunctionTemplateRela_IsExistAsync(lngmId: number): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(functionTemplateRela_Controller, strAction);

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
        functionTemplateRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        functionTemplateRela_ConstructorName,
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
export async function FunctionTemplateRela_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(functionTemplateRela_Controller, strAction);

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
        functionTemplateRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        functionTemplateRela_ConstructorName,
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
export async function FunctionTemplateRela_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(functionTemplateRela_Controller, strAction);

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
        functionTemplateRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        functionTemplateRela_ConstructorName,
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
export function FunctionTemplateRela_GetWebApiUrl(
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
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function FunctionTemplateRela_CheckPropertyNew(
  pobjFunctionTemplateRelaEN: clsFunctionTemplateRelaEN,
) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (
    IsNullOrEmpty(pobjFunctionTemplateRelaEN.functionTemplateId) === true ||
    pobjFunctionTemplateRelaEN.functionTemplateId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000411)字段[函数模板Id]不能为空(In 函数与模板关系)!(clsFunctionTemplateRelaBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunctionTemplateRelaEN.funcId4GC) === true ||
    pobjFunctionTemplateRelaEN.funcId4GC.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000411)字段[函数ID]不能为空(In 函数与模板关系)!(clsFunctionTemplateRelaBL:CheckPropertyNew0)`,
    );
  }
  if (
    null === pobjFunctionTemplateRelaEN.orderNum ||
    (pobjFunctionTemplateRelaEN.orderNum != null &&
      pobjFunctionTemplateRelaEN.orderNum.toString() === '')
  ) {
    throw new Error(
      `(errid:Watl000411)字段[序号]不能为空(In 函数与模板关系)!(clsFunctionTemplateRelaBL:CheckPropertyNew0)`,
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjFunctionTemplateRelaEN.functionTemplateId) == false &&
    GetStrLen(pobjFunctionTemplateRelaEN.functionTemplateId) > 4
  ) {
    throw new Error(
      `(errid:Watl000413)字段[函数模板Id(functionTemplateId)]的长度不能超过4(In 函数与模板关系(FunctionTemplateRela))!值:${pobjFunctionTemplateRelaEN.functionTemplateId}(clsFunctionTemplateRelaBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunctionTemplateRelaEN.codeTypeId) == false &&
    GetStrLen(pobjFunctionTemplateRelaEN.codeTypeId) > 4
  ) {
    throw new Error(
      `(errid:Watl000413)字段[代码类型Id(codeTypeId)]的长度不能超过4(In 函数与模板关系(FunctionTemplateRela))!值:${pobjFunctionTemplateRelaEN.codeTypeId}(clsFunctionTemplateRelaBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunctionTemplateRelaEN.regionTypeId) == false &&
    GetStrLen(pobjFunctionTemplateRelaEN.regionTypeId) > 4
  ) {
    throw new Error(
      `(errid:Watl000413)字段[区域类型Id(regionTypeId)]的长度不能超过4(In 函数与模板关系(FunctionTemplateRela))!值:${pobjFunctionTemplateRelaEN.regionTypeId}(clsFunctionTemplateRelaBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunctionTemplateRelaEN.funcCodeTypeId) == false &&
    GetStrLen(pobjFunctionTemplateRelaEN.funcCodeTypeId) > 4
  ) {
    throw new Error(
      `(errid:Watl000413)字段[函数代码类型Id(funcCodeTypeId)]的长度不能超过4(In 函数与模板关系(FunctionTemplateRela))!值:${pobjFunctionTemplateRelaEN.funcCodeTypeId}(clsFunctionTemplateRelaBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunctionTemplateRelaEN.funcId4GC) == false &&
    GetStrLen(pobjFunctionTemplateRelaEN.funcId4GC) > 10
  ) {
    throw new Error(
      `(errid:Watl000413)字段[函数ID(funcId4GC)]的长度不能超过10(In 函数与模板关系(FunctionTemplateRela))!值:${pobjFunctionTemplateRelaEN.funcId4GC}(clsFunctionTemplateRelaBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunctionTemplateRelaEN.updDate) == false &&
    GetStrLen(pobjFunctionTemplateRelaEN.updDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 函数与模板关系(FunctionTemplateRela))!值:${pobjFunctionTemplateRelaEN.updDate}(clsFunctionTemplateRelaBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunctionTemplateRelaEN.updUser) == false &&
    GetStrLen(pobjFunctionTemplateRelaEN.updUser) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改者(updUser)]的长度不能超过20(In 函数与模板关系(FunctionTemplateRela))!值:${pobjFunctionTemplateRelaEN.updUser}(clsFunctionTemplateRelaBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunctionTemplateRelaEN.memo) == false &&
    GetStrLen(pobjFunctionTemplateRelaEN.memo) > 1000
  ) {
    throw new Error(
      `(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In 函数与模板关系(FunctionTemplateRela))!值:${pobjFunctionTemplateRelaEN.memo}(clsFunctionTemplateRelaBL:CheckPropertyNew)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjFunctionTemplateRelaEN.mId &&
    undefined !== pobjFunctionTemplateRelaEN.mId &&
    tzDataType.isNumber(pobjFunctionTemplateRelaEN.mId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[mId(mId)]的值:[${pobjFunctionTemplateRelaEN.mId}], 非法,应该为数值型(In 函数与模板关系(FunctionTemplateRela))!(clsFunctionTemplateRelaBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunctionTemplateRelaEN.functionTemplateId) == false &&
    undefined !== pobjFunctionTemplateRelaEN.functionTemplateId &&
    tzDataType.isString(pobjFunctionTemplateRelaEN.functionTemplateId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[函数模板Id(functionTemplateId)]的值:[${pobjFunctionTemplateRelaEN.functionTemplateId}], 非法,应该为字符型(In 函数与模板关系(FunctionTemplateRela))!(clsFunctionTemplateRelaBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunctionTemplateRelaEN.codeTypeId) == false &&
    undefined !== pobjFunctionTemplateRelaEN.codeTypeId &&
    tzDataType.isString(pobjFunctionTemplateRelaEN.codeTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[代码类型Id(codeTypeId)]的值:[${pobjFunctionTemplateRelaEN.codeTypeId}], 非法,应该为字符型(In 函数与模板关系(FunctionTemplateRela))!(clsFunctionTemplateRelaBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunctionTemplateRelaEN.regionTypeId) == false &&
    undefined !== pobjFunctionTemplateRelaEN.regionTypeId &&
    tzDataType.isString(pobjFunctionTemplateRelaEN.regionTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[区域类型Id(regionTypeId)]的值:[${pobjFunctionTemplateRelaEN.regionTypeId}], 非法,应该为字符型(In 函数与模板关系(FunctionTemplateRela))!(clsFunctionTemplateRelaBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunctionTemplateRelaEN.funcCodeTypeId) == false &&
    undefined !== pobjFunctionTemplateRelaEN.funcCodeTypeId &&
    tzDataType.isString(pobjFunctionTemplateRelaEN.funcCodeTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[函数代码类型Id(funcCodeTypeId)]的值:[${pobjFunctionTemplateRelaEN.funcCodeTypeId}], 非法,应该为字符型(In 函数与模板关系(FunctionTemplateRela))!(clsFunctionTemplateRelaBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunctionTemplateRelaEN.funcId4GC) == false &&
    undefined !== pobjFunctionTemplateRelaEN.funcId4GC &&
    tzDataType.isString(pobjFunctionTemplateRelaEN.funcId4GC) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[函数ID(funcId4GC)]的值:[${pobjFunctionTemplateRelaEN.funcId4GC}], 非法,应该为字符型(In 函数与模板关系(FunctionTemplateRela))!(clsFunctionTemplateRelaBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjFunctionTemplateRelaEN.isGeneCode &&
    undefined !== pobjFunctionTemplateRelaEN.isGeneCode &&
    tzDataType.isBoolean(pobjFunctionTemplateRelaEN.isGeneCode) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否生成代码(isGeneCode)]的值:[${pobjFunctionTemplateRelaEN.isGeneCode}], 非法,应该为布尔型(In 函数与模板关系(FunctionTemplateRela))!(clsFunctionTemplateRelaBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjFunctionTemplateRelaEN.orderNum &&
    undefined !== pobjFunctionTemplateRelaEN.orderNum &&
    tzDataType.isNumber(pobjFunctionTemplateRelaEN.orderNum) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[序号(orderNum)]的值:[${pobjFunctionTemplateRelaEN.orderNum}], 非法,应该为数值型(In 函数与模板关系(FunctionTemplateRela))!(clsFunctionTemplateRelaBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunctionTemplateRelaEN.updDate) == false &&
    undefined !== pobjFunctionTemplateRelaEN.updDate &&
    tzDataType.isString(pobjFunctionTemplateRelaEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjFunctionTemplateRelaEN.updDate}], 非法,应该为字符型(In 函数与模板关系(FunctionTemplateRela))!(clsFunctionTemplateRelaBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunctionTemplateRelaEN.updUser) == false &&
    undefined !== pobjFunctionTemplateRelaEN.updUser &&
    tzDataType.isString(pobjFunctionTemplateRelaEN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改者(updUser)]的值:[${pobjFunctionTemplateRelaEN.updUser}], 非法,应该为字符型(In 函数与模板关系(FunctionTemplateRela))!(clsFunctionTemplateRelaBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunctionTemplateRelaEN.memo) == false &&
    undefined !== pobjFunctionTemplateRelaEN.memo &&
    tzDataType.isString(pobjFunctionTemplateRelaEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[说明(memo)]的值:[${pobjFunctionTemplateRelaEN.memo}], 非法,应该为字符型(In 函数与模板关系(FunctionTemplateRela))!(clsFunctionTemplateRelaBL:CheckPropertyNew0)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function FunctionTemplateRela_CheckProperty4Update(
  pobjFunctionTemplateRelaEN: clsFunctionTemplateRelaEN,
) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjFunctionTemplateRelaEN.functionTemplateId) == false &&
    GetStrLen(pobjFunctionTemplateRelaEN.functionTemplateId) > 4
  ) {
    throw new Error(
      `(errid:Watl000416)字段[函数模板Id(functionTemplateId)]的长度不能超过4(In 函数与模板关系(FunctionTemplateRela))!值:${pobjFunctionTemplateRelaEN.functionTemplateId}(clsFunctionTemplateRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunctionTemplateRelaEN.codeTypeId) == false &&
    GetStrLen(pobjFunctionTemplateRelaEN.codeTypeId) > 4
  ) {
    throw new Error(
      `(errid:Watl000416)字段[代码类型Id(codeTypeId)]的长度不能超过4(In 函数与模板关系(FunctionTemplateRela))!值:${pobjFunctionTemplateRelaEN.codeTypeId}(clsFunctionTemplateRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunctionTemplateRelaEN.regionTypeId) == false &&
    GetStrLen(pobjFunctionTemplateRelaEN.regionTypeId) > 4
  ) {
    throw new Error(
      `(errid:Watl000416)字段[区域类型Id(regionTypeId)]的长度不能超过4(In 函数与模板关系(FunctionTemplateRela))!值:${pobjFunctionTemplateRelaEN.regionTypeId}(clsFunctionTemplateRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunctionTemplateRelaEN.funcCodeTypeId) == false &&
    GetStrLen(pobjFunctionTemplateRelaEN.funcCodeTypeId) > 4
  ) {
    throw new Error(
      `(errid:Watl000416)字段[函数代码类型Id(funcCodeTypeId)]的长度不能超过4(In 函数与模板关系(FunctionTemplateRela))!值:${pobjFunctionTemplateRelaEN.funcCodeTypeId}(clsFunctionTemplateRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunctionTemplateRelaEN.funcId4GC) == false &&
    GetStrLen(pobjFunctionTemplateRelaEN.funcId4GC) > 10
  ) {
    throw new Error(
      `(errid:Watl000416)字段[函数ID(funcId4GC)]的长度不能超过10(In 函数与模板关系(FunctionTemplateRela))!值:${pobjFunctionTemplateRelaEN.funcId4GC}(clsFunctionTemplateRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunctionTemplateRelaEN.updDate) == false &&
    GetStrLen(pobjFunctionTemplateRelaEN.updDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 函数与模板关系(FunctionTemplateRela))!值:${pobjFunctionTemplateRelaEN.updDate}(clsFunctionTemplateRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunctionTemplateRelaEN.updUser) == false &&
    GetStrLen(pobjFunctionTemplateRelaEN.updUser) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改者(updUser)]的长度不能超过20(In 函数与模板关系(FunctionTemplateRela))!值:${pobjFunctionTemplateRelaEN.updUser}(clsFunctionTemplateRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunctionTemplateRelaEN.memo) == false &&
    GetStrLen(pobjFunctionTemplateRelaEN.memo) > 1000
  ) {
    throw new Error(
      `(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In 函数与模板关系(FunctionTemplateRela))!值:${pobjFunctionTemplateRelaEN.memo}(clsFunctionTemplateRelaBL:CheckProperty4Update)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjFunctionTemplateRelaEN.mId &&
    undefined !== pobjFunctionTemplateRelaEN.mId &&
    tzDataType.isNumber(pobjFunctionTemplateRelaEN.mId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[mId(mId)]的值:[${pobjFunctionTemplateRelaEN.mId}], 非法,应该为数值型(In 函数与模板关系(FunctionTemplateRela))!(clsFunctionTemplateRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunctionTemplateRelaEN.functionTemplateId) == false &&
    undefined !== pobjFunctionTemplateRelaEN.functionTemplateId &&
    tzDataType.isString(pobjFunctionTemplateRelaEN.functionTemplateId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[函数模板Id(functionTemplateId)]的值:[${pobjFunctionTemplateRelaEN.functionTemplateId}], 非法,应该为字符型(In 函数与模板关系(FunctionTemplateRela))!(clsFunctionTemplateRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunctionTemplateRelaEN.codeTypeId) == false &&
    undefined !== pobjFunctionTemplateRelaEN.codeTypeId &&
    tzDataType.isString(pobjFunctionTemplateRelaEN.codeTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[代码类型Id(codeTypeId)]的值:[${pobjFunctionTemplateRelaEN.codeTypeId}], 非法,应该为字符型(In 函数与模板关系(FunctionTemplateRela))!(clsFunctionTemplateRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunctionTemplateRelaEN.regionTypeId) == false &&
    undefined !== pobjFunctionTemplateRelaEN.regionTypeId &&
    tzDataType.isString(pobjFunctionTemplateRelaEN.regionTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[区域类型Id(regionTypeId)]的值:[${pobjFunctionTemplateRelaEN.regionTypeId}], 非法,应该为字符型(In 函数与模板关系(FunctionTemplateRela))!(clsFunctionTemplateRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunctionTemplateRelaEN.funcCodeTypeId) == false &&
    undefined !== pobjFunctionTemplateRelaEN.funcCodeTypeId &&
    tzDataType.isString(pobjFunctionTemplateRelaEN.funcCodeTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[函数代码类型Id(funcCodeTypeId)]的值:[${pobjFunctionTemplateRelaEN.funcCodeTypeId}], 非法,应该为字符型(In 函数与模板关系(FunctionTemplateRela))!(clsFunctionTemplateRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunctionTemplateRelaEN.funcId4GC) == false &&
    undefined !== pobjFunctionTemplateRelaEN.funcId4GC &&
    tzDataType.isString(pobjFunctionTemplateRelaEN.funcId4GC) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[函数ID(funcId4GC)]的值:[${pobjFunctionTemplateRelaEN.funcId4GC}], 非法,应该为字符型(In 函数与模板关系(FunctionTemplateRela))!(clsFunctionTemplateRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjFunctionTemplateRelaEN.isGeneCode &&
    undefined !== pobjFunctionTemplateRelaEN.isGeneCode &&
    tzDataType.isBoolean(pobjFunctionTemplateRelaEN.isGeneCode) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否生成代码(isGeneCode)]的值:[${pobjFunctionTemplateRelaEN.isGeneCode}], 非法,应该为布尔型(In 函数与模板关系(FunctionTemplateRela))!(clsFunctionTemplateRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjFunctionTemplateRelaEN.orderNum &&
    undefined !== pobjFunctionTemplateRelaEN.orderNum &&
    tzDataType.isNumber(pobjFunctionTemplateRelaEN.orderNum) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[序号(orderNum)]的值:[${pobjFunctionTemplateRelaEN.orderNum}], 非法,应该为数值型(In 函数与模板关系(FunctionTemplateRela))!(clsFunctionTemplateRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunctionTemplateRelaEN.updDate) == false &&
    undefined !== pobjFunctionTemplateRelaEN.updDate &&
    tzDataType.isString(pobjFunctionTemplateRelaEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjFunctionTemplateRelaEN.updDate}], 非法,应该为字符型(In 函数与模板关系(FunctionTemplateRela))!(clsFunctionTemplateRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunctionTemplateRelaEN.updUser) == false &&
    undefined !== pobjFunctionTemplateRelaEN.updUser &&
    tzDataType.isString(pobjFunctionTemplateRelaEN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改者(updUser)]的值:[${pobjFunctionTemplateRelaEN.updUser}], 非法,应该为字符型(In 函数与模板关系(FunctionTemplateRela))!(clsFunctionTemplateRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunctionTemplateRelaEN.memo) == false &&
    undefined !== pobjFunctionTemplateRelaEN.memo &&
    tzDataType.isString(pobjFunctionTemplateRelaEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[说明(memo)]的值:[${pobjFunctionTemplateRelaEN.memo}], 非法,应该为字符型(In 函数与模板关系(FunctionTemplateRela))!(clsFunctionTemplateRelaBL:CheckProperty4Update)`,
    );
  }
  //检查主键是否为Null或者空!
  if (
    null === pobjFunctionTemplateRelaEN.mId ||
    (pobjFunctionTemplateRelaEN.mId != null && pobjFunctionTemplateRelaEN.mId.toString() === '')
  ) {
    throw new Error(
      `(errid:Watl000064)字段[mId]不能为空(In 函数与模板关系)!(clsFunctionTemplateRelaBL:CheckProperty4Update)`,
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
export function FunctionTemplateRela_GetJSONStrByObj(
  pobjFunctionTemplateRelaEN: clsFunctionTemplateRelaEN,
): string {
  pobjFunctionTemplateRelaEN.sfUpdFldSetStr = pobjFunctionTemplateRelaEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjFunctionTemplateRelaEN);
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
export function FunctionTemplateRela_GetObjLstByJSONStr(
  strJSON: string,
): Array<clsFunctionTemplateRelaEN> {
  let arrFunctionTemplateRelaObjLst = new Array<clsFunctionTemplateRelaEN>();
  if (strJSON === '') {
    return arrFunctionTemplateRelaObjLst;
  }
  try {
    arrFunctionTemplateRelaObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrFunctionTemplateRelaObjLst;
  }
  return arrFunctionTemplateRelaObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrFunctionTemplateRelaObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function FunctionTemplateRela_GetObjLstByJSONObjLst(
  arrFunctionTemplateRelaObjLstS: Array<clsFunctionTemplateRelaEN>,
): Array<clsFunctionTemplateRelaEN> {
  const arrFunctionTemplateRelaObjLst = new Array<clsFunctionTemplateRelaEN>();
  for (const objInFor of arrFunctionTemplateRelaObjLstS) {
    const obj1 = FunctionTemplateRela_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrFunctionTemplateRelaObjLst.push(obj1);
  }
  return arrFunctionTemplateRelaObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function FunctionTemplateRela_GetObjByJSONStr(strJSON: string): clsFunctionTemplateRelaEN {
  let pobjFunctionTemplateRelaEN = new clsFunctionTemplateRelaEN();
  if (strJSON === '') {
    return pobjFunctionTemplateRelaEN;
  }
  try {
    pobjFunctionTemplateRelaEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjFunctionTemplateRelaEN;
  }
  return pobjFunctionTemplateRelaEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function FunctionTemplateRela_GetCombineCondition(
  objFunctionTemplateRelaCond: clsFunctionTemplateRelaEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objFunctionTemplateRelaCond.dicFldComparisonOp,
      clsFunctionTemplateRelaEN.con_mId,
    ) == true
  ) {
    const strComparisonOpmId: string =
      objFunctionTemplateRelaCond.dicFldComparisonOp[clsFunctionTemplateRelaEN.con_mId];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsFunctionTemplateRelaEN.con_mId,
      objFunctionTemplateRelaCond.mId,
      strComparisonOpmId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFunctionTemplateRelaCond.dicFldComparisonOp,
      clsFunctionTemplateRelaEN.con_FunctionTemplateId,
    ) == true
  ) {
    const strComparisonOpFunctionTemplateId: string =
      objFunctionTemplateRelaCond.dicFldComparisonOp[
        clsFunctionTemplateRelaEN.con_FunctionTemplateId
      ];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFunctionTemplateRelaEN.con_FunctionTemplateId,
      objFunctionTemplateRelaCond.functionTemplateId,
      strComparisonOpFunctionTemplateId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFunctionTemplateRelaCond.dicFldComparisonOp,
      clsFunctionTemplateRelaEN.con_CodeTypeId,
    ) == true
  ) {
    const strComparisonOpCodeTypeId: string =
      objFunctionTemplateRelaCond.dicFldComparisonOp[clsFunctionTemplateRelaEN.con_CodeTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFunctionTemplateRelaEN.con_CodeTypeId,
      objFunctionTemplateRelaCond.codeTypeId,
      strComparisonOpCodeTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFunctionTemplateRelaCond.dicFldComparisonOp,
      clsFunctionTemplateRelaEN.con_RegionTypeId,
    ) == true
  ) {
    const strComparisonOpRegionTypeId: string =
      objFunctionTemplateRelaCond.dicFldComparisonOp[clsFunctionTemplateRelaEN.con_RegionTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFunctionTemplateRelaEN.con_RegionTypeId,
      objFunctionTemplateRelaCond.regionTypeId,
      strComparisonOpRegionTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFunctionTemplateRelaCond.dicFldComparisonOp,
      clsFunctionTemplateRelaEN.con_FuncCodeTypeId,
    ) == true
  ) {
    const strComparisonOpFuncCodeTypeId: string =
      objFunctionTemplateRelaCond.dicFldComparisonOp[clsFunctionTemplateRelaEN.con_FuncCodeTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFunctionTemplateRelaEN.con_FuncCodeTypeId,
      objFunctionTemplateRelaCond.funcCodeTypeId,
      strComparisonOpFuncCodeTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFunctionTemplateRelaCond.dicFldComparisonOp,
      clsFunctionTemplateRelaEN.con_FuncId4GC,
    ) == true
  ) {
    const strComparisonOpFuncId4GC: string =
      objFunctionTemplateRelaCond.dicFldComparisonOp[clsFunctionTemplateRelaEN.con_FuncId4GC];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFunctionTemplateRelaEN.con_FuncId4GC,
      objFunctionTemplateRelaCond.funcId4GC,
      strComparisonOpFuncId4GC,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFunctionTemplateRelaCond.dicFldComparisonOp,
      clsFunctionTemplateRelaEN.con_IsGeneCode,
    ) == true
  ) {
    if (objFunctionTemplateRelaCond.isGeneCode == true) {
      strWhereCond += Format(" And {0} = '1'", clsFunctionTemplateRelaEN.con_IsGeneCode);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsFunctionTemplateRelaEN.con_IsGeneCode);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFunctionTemplateRelaCond.dicFldComparisonOp,
      clsFunctionTemplateRelaEN.con_OrderNum,
    ) == true
  ) {
    const strComparisonOpOrderNum: string =
      objFunctionTemplateRelaCond.dicFldComparisonOp[clsFunctionTemplateRelaEN.con_OrderNum];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsFunctionTemplateRelaEN.con_OrderNum,
      objFunctionTemplateRelaCond.orderNum,
      strComparisonOpOrderNum,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFunctionTemplateRelaCond.dicFldComparisonOp,
      clsFunctionTemplateRelaEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objFunctionTemplateRelaCond.dicFldComparisonOp[clsFunctionTemplateRelaEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFunctionTemplateRelaEN.con_UpdDate,
      objFunctionTemplateRelaCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFunctionTemplateRelaCond.dicFldComparisonOp,
      clsFunctionTemplateRelaEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objFunctionTemplateRelaCond.dicFldComparisonOp[clsFunctionTemplateRelaEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFunctionTemplateRelaEN.con_UpdUser,
      objFunctionTemplateRelaCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFunctionTemplateRelaCond.dicFldComparisonOp,
      clsFunctionTemplateRelaEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objFunctionTemplateRelaCond.dicFldComparisonOp[clsFunctionTemplateRelaEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFunctionTemplateRelaEN.con_Memo,
      objFunctionTemplateRelaCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--FunctionTemplateRela(函数与模板关系),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strCodeTypeId: 代码类型Id(要求唯一的字段)
 * @param strFuncId4GC: 函数ID(要求唯一的字段)
 * @param strFunctionTemplateId: 函数模板Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function FunctionTemplateRela_GetUniCondStr(
  objFunctionTemplateRelaEN: clsFunctionTemplateRelaEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and CodeTypeId = '{0}'", objFunctionTemplateRelaEN.codeTypeId);
  strWhereCond += Format(" and FuncId4GC = '{0}'", objFunctionTemplateRelaEN.funcId4GC);
  strWhereCond += Format(
    " and FunctionTemplateId = '{0}'",
    objFunctionTemplateRelaEN.functionTemplateId,
  );
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--FunctionTemplateRela(函数与模板关系),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strCodeTypeId: 代码类型Id(要求唯一的字段)
 * @param strFuncId4GC: 函数ID(要求唯一的字段)
 * @param strFunctionTemplateId: 函数模板Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function FunctionTemplateRela_GetUniCondStr4Update(
  objFunctionTemplateRelaEN: clsFunctionTemplateRelaEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and mId <> '{0}'", objFunctionTemplateRelaEN.mId);
  strWhereCond += Format(" and CodeTypeId = '{0}'", objFunctionTemplateRelaEN.codeTypeId);
  strWhereCond += Format(" and FuncId4GC = '{0}'", objFunctionTemplateRelaEN.funcId4GC);
  strWhereCond += Format(
    " and FunctionTemplateId = '{0}'",
    objFunctionTemplateRelaEN.functionTemplateId,
  );
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objFunctionTemplateRelaENS:源对象
 * @param objFunctionTemplateRelaENT:目标对象
 */
export function FunctionTemplateRela_GetObjFromJsonObj(
  objFunctionTemplateRelaENS: clsFunctionTemplateRelaEN,
): clsFunctionTemplateRelaEN {
  const objFunctionTemplateRelaENT: clsFunctionTemplateRelaEN = new clsFunctionTemplateRelaEN();
  ObjectAssign(objFunctionTemplateRelaENT, objFunctionTemplateRelaENS);
  return objFunctionTemplateRelaENT;
}
