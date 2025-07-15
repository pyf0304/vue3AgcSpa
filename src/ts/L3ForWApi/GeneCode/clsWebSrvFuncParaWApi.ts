/**
 * 类名:clsWebSrvFuncParaWApi
 * 表名:WebSrvFuncPara(00050347)
 * 版本:2023.10.12.1(服务器:WIN-SRV103-116)
 * 日期:2023/10/12 14:39:37
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:生成代码(GeneCode)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * WebSrv函数参数(WebSrvFuncPara)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2023年10月12日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty, GetStrLen, tzDataType, Format } from '@/ts/PubFun/clsString';
import { clsWebSrvFuncParaEN } from '@/ts/L0Entity/GeneCode/clsWebSrvFuncParaEN';
import { GetExceptionStr, myShowErrorMsg, ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const webSrvFuncPara_Controller = 'WebSrvFuncParaApi';
export const webSrvFuncPara_ConstructorName = 'webSrvFuncPara';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strWebSrvFuncParaId:关键字
 * @returns 对象
 **/
export async function WebSrvFuncPara_GetObjByWebSrvFuncParaIdAsync(
  strWebSrvFuncParaId: string,
): Promise<clsWebSrvFuncParaEN | null> {
  const strThisFuncName = 'GetObjByWebSrvFuncParaIdAsync';

  if (IsNullOrEmpty(strWebSrvFuncParaId) == true) {
    const strMsg = Format(
      '参数:[strWebSrvFuncParaId]不能为空!(In clsWebSrvFuncParaWApi.GetObjByWebSrvFuncParaIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strWebSrvFuncParaId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strWebSrvFuncParaId]的长度:[{0}]不正确!(clsWebSrvFuncParaWApi.GetObjByWebSrvFuncParaIdAsync)',
      strWebSrvFuncParaId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByWebSrvFuncParaId';
  const strUrl = GetWebApiUrl(webSrvFuncPara_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strWebSrvFuncParaId,
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
      const objWebSrvFuncPara = WebSrvFuncPara_GetObjFromJsonObj(returnObj);
      return objWebSrvFuncPara;
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
        webSrvFuncPara_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        webSrvFuncPara_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[GetObjByWebSrvFuncParaIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )
//该表没有使用Cache,不需要生成[GetObjByWebSrvFuncParaIdlocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[UpdateObjInLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache
//该表没有使用Cache,不需要生成[GetNameByWebSrvFuncParaIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
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
export function WebSrvFuncPara_SortFunDefa(a: clsWebSrvFuncParaEN, b: clsWebSrvFuncParaEN): number {
  return a.webSrvFuncParaId.localeCompare(b.webSrvFuncParaId);
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
export function WebSrvFuncPara_SortFunDefa2Fld(
  a: clsWebSrvFuncParaEN,
  b: clsWebSrvFuncParaEN,
): number {
  if (a.webSrvFunctionId == b.webSrvFunctionId) return a.dataTypeId.localeCompare(b.dataTypeId);
  else return a.webSrvFunctionId.localeCompare(b.webSrvFunctionId);
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
export function WebSrvFuncPara_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsWebSrvFuncParaEN.con_WebSrvFuncParaId:
        return (a: clsWebSrvFuncParaEN, b: clsWebSrvFuncParaEN) => {
          return a.webSrvFuncParaId.localeCompare(b.webSrvFuncParaId);
        };
      case clsWebSrvFuncParaEN.con_WebSrvFunctionId:
        return (a: clsWebSrvFuncParaEN, b: clsWebSrvFuncParaEN) => {
          return a.webSrvFunctionId.localeCompare(b.webSrvFunctionId);
        };
      case clsWebSrvFuncParaEN.con_DataTypeId:
        return (a: clsWebSrvFuncParaEN, b: clsWebSrvFuncParaEN) => {
          return a.dataTypeId.localeCompare(b.dataTypeId);
        };
      case clsWebSrvFuncParaEN.con_ParameterType:
        return (a: clsWebSrvFuncParaEN, b: clsWebSrvFuncParaEN) => {
          return a.parameterType.localeCompare(b.parameterType);
        };
      case clsWebSrvFuncParaEN.con_ParameterTypeFullName:
        return (a: clsWebSrvFuncParaEN, b: clsWebSrvFuncParaEN) => {
          if (a.parameterTypeFullName == null) return -1;
          if (b.parameterTypeFullName == null) return 1;
          return a.parameterTypeFullName.localeCompare(b.parameterTypeFullName);
        };
      case clsWebSrvFuncParaEN.con_IsByRef:
        return (a: clsWebSrvFuncParaEN) => {
          if (a.isByRef == true) return 1;
          else return -1;
        };
      case clsWebSrvFuncParaEN.con_ParaName:
        return (a: clsWebSrvFuncParaEN, b: clsWebSrvFuncParaEN) => {
          return a.paraName.localeCompare(b.paraName);
        };
      case clsWebSrvFuncParaEN.con_ParaCnName:
        return (a: clsWebSrvFuncParaEN, b: clsWebSrvFuncParaEN) => {
          return a.paraCnName.localeCompare(b.paraCnName);
        };
      case clsWebSrvFuncParaEN.con_IsKnownType:
        return (a: clsWebSrvFuncParaEN) => {
          if (a.isKnownType == true) return 1;
          else return -1;
        };
      case clsWebSrvFuncParaEN.con_UpdDate:
        return (a: clsWebSrvFuncParaEN, b: clsWebSrvFuncParaEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsWebSrvFuncParaEN.con_UpdUser:
        return (a: clsWebSrvFuncParaEN, b: clsWebSrvFuncParaEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsWebSrvFuncParaEN.con_Memo:
        return (a: clsWebSrvFuncParaEN, b: clsWebSrvFuncParaEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[WebSrvFuncPara]中不存在!(in ${webSrvFuncPara_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsWebSrvFuncParaEN.con_WebSrvFuncParaId:
        return (a: clsWebSrvFuncParaEN, b: clsWebSrvFuncParaEN) => {
          return b.webSrvFuncParaId.localeCompare(a.webSrvFuncParaId);
        };
      case clsWebSrvFuncParaEN.con_WebSrvFunctionId:
        return (a: clsWebSrvFuncParaEN, b: clsWebSrvFuncParaEN) => {
          return b.webSrvFunctionId.localeCompare(a.webSrvFunctionId);
        };
      case clsWebSrvFuncParaEN.con_DataTypeId:
        return (a: clsWebSrvFuncParaEN, b: clsWebSrvFuncParaEN) => {
          return b.dataTypeId.localeCompare(a.dataTypeId);
        };
      case clsWebSrvFuncParaEN.con_ParameterType:
        return (a: clsWebSrvFuncParaEN, b: clsWebSrvFuncParaEN) => {
          return b.parameterType.localeCompare(a.parameterType);
        };
      case clsWebSrvFuncParaEN.con_ParameterTypeFullName:
        return (a: clsWebSrvFuncParaEN, b: clsWebSrvFuncParaEN) => {
          if (b.parameterTypeFullName == null) return -1;
          if (a.parameterTypeFullName == null) return 1;
          return b.parameterTypeFullName.localeCompare(a.parameterTypeFullName);
        };
      case clsWebSrvFuncParaEN.con_IsByRef:
        return (b: clsWebSrvFuncParaEN) => {
          if (b.isByRef == true) return 1;
          else return -1;
        };
      case clsWebSrvFuncParaEN.con_ParaName:
        return (a: clsWebSrvFuncParaEN, b: clsWebSrvFuncParaEN) => {
          return b.paraName.localeCompare(a.paraName);
        };
      case clsWebSrvFuncParaEN.con_ParaCnName:
        return (a: clsWebSrvFuncParaEN, b: clsWebSrvFuncParaEN) => {
          return b.paraCnName.localeCompare(a.paraCnName);
        };
      case clsWebSrvFuncParaEN.con_IsKnownType:
        return (b: clsWebSrvFuncParaEN) => {
          if (b.isKnownType == true) return 1;
          else return -1;
        };
      case clsWebSrvFuncParaEN.con_UpdDate:
        return (a: clsWebSrvFuncParaEN, b: clsWebSrvFuncParaEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsWebSrvFuncParaEN.con_UpdUser:
        return (a: clsWebSrvFuncParaEN, b: clsWebSrvFuncParaEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsWebSrvFuncParaEN.con_Memo:
        return (a: clsWebSrvFuncParaEN, b: clsWebSrvFuncParaEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[WebSrvFuncPara]中不存在!(in ${webSrvFuncPara_ConstructorName}.${strThisFuncName})`;
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
export async function WebSrvFuncPara_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsWebSrvFuncParaEN.con_WebSrvFuncParaId:
      return (obj: clsWebSrvFuncParaEN) => {
        return obj.webSrvFuncParaId === value;
      };
    case clsWebSrvFuncParaEN.con_WebSrvFunctionId:
      return (obj: clsWebSrvFuncParaEN) => {
        return obj.webSrvFunctionId === value;
      };
    case clsWebSrvFuncParaEN.con_DataTypeId:
      return (obj: clsWebSrvFuncParaEN) => {
        return obj.dataTypeId === value;
      };
    case clsWebSrvFuncParaEN.con_ParameterType:
      return (obj: clsWebSrvFuncParaEN) => {
        return obj.parameterType === value;
      };
    case clsWebSrvFuncParaEN.con_ParameterTypeFullName:
      return (obj: clsWebSrvFuncParaEN) => {
        return obj.parameterTypeFullName === value;
      };
    case clsWebSrvFuncParaEN.con_IsByRef:
      return (obj: clsWebSrvFuncParaEN) => {
        return obj.isByRef === value;
      };
    case clsWebSrvFuncParaEN.con_ParaName:
      return (obj: clsWebSrvFuncParaEN) => {
        return obj.paraName === value;
      };
    case clsWebSrvFuncParaEN.con_ParaCnName:
      return (obj: clsWebSrvFuncParaEN) => {
        return obj.paraCnName === value;
      };
    case clsWebSrvFuncParaEN.con_IsKnownType:
      return (obj: clsWebSrvFuncParaEN) => {
        return obj.isKnownType === value;
      };
    case clsWebSrvFuncParaEN.con_UpdDate:
      return (obj: clsWebSrvFuncParaEN) => {
        return obj.updDate === value;
      };
    case clsWebSrvFuncParaEN.con_UpdUser:
      return (obj: clsWebSrvFuncParaEN) => {
        return obj.updUser === value;
      };
    case clsWebSrvFuncParaEN.con_Memo:
      return (obj: clsWebSrvFuncParaEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[WebSrvFuncPara]中不存在!(in ${webSrvFuncPara_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}
//该表没有使用Cache,不需要生成[WebSrvFuncPara__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function WebSrvFuncPara_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(webSrvFuncPara_Controller, strAction);

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
        webSrvFuncPara_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        webSrvFuncPara_ConstructorName,
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
export async function WebSrvFuncPara_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(webSrvFuncPara_Controller, strAction);

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
        webSrvFuncPara_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        webSrvFuncPara_ConstructorName,
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
export async function WebSrvFuncPara_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsWebSrvFuncParaEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(webSrvFuncPara_Controller, strAction);

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
      const objWebSrvFuncPara = WebSrvFuncPara_GetObjFromJsonObj(returnObj);
      return objWebSrvFuncPara;
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
        webSrvFuncPara_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        webSrvFuncPara_ConstructorName,
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
export async function WebSrvFuncPara_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsWebSrvFuncParaEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(webSrvFuncPara_Controller, strAction);

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
          webSrvFuncPara_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = WebSrvFuncPara_GetObjLstByJSONObjLst(returnObjLst);
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
        webSrvFuncPara_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        webSrvFuncPara_ConstructorName,
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
 * @param arrWebSrvFuncParaId:关键字列表
 * @returns 对象列表
 **/
export async function WebSrvFuncPara_GetObjLstByWebSrvFuncParaIdLstAsync(
  arrWebSrvFuncParaId: Array<string>,
): Promise<Array<clsWebSrvFuncParaEN>> {
  const strThisFuncName = 'GetObjLstByWebSrvFuncParaIdLstAsync';
  const strAction = 'GetObjLstByWebSrvFuncParaIdLst';
  const strUrl = GetWebApiUrl(webSrvFuncPara_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrWebSrvFuncParaId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          webSrvFuncPara_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = WebSrvFuncPara_GetObjLstByJSONObjLst(returnObjLst);
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
        webSrvFuncPara_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        webSrvFuncPara_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[GetObjLstByWebSrvFuncParaIdLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

/**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export async function WebSrvFuncPara_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsWebSrvFuncParaEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(webSrvFuncPara_Controller, strAction);

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
          webSrvFuncPara_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = WebSrvFuncPara_GetObjLstByJSONObjLst(returnObjLst);
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
        webSrvFuncPara_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        webSrvFuncPara_ConstructorName,
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
export async function WebSrvFuncPara_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsWebSrvFuncParaEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(webSrvFuncPara_Controller, strAction);

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
          webSrvFuncPara_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = WebSrvFuncPara_GetObjLstByJSONObjLst(returnObjLst);
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
        webSrvFuncPara_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        webSrvFuncPara_ConstructorName,
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
export async function WebSrvFuncPara_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsWebSrvFuncParaEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsWebSrvFuncParaEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(webSrvFuncPara_Controller, strAction);

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
          webSrvFuncPara_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = WebSrvFuncPara_GetObjLstByJSONObjLst(returnObjLst);
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
        webSrvFuncPara_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        webSrvFuncPara_ConstructorName,
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
 * @param strWebSrvFuncParaId:关键字
 * @returns 获取删除的结果
 **/
export async function WebSrvFuncPara_DelRecordAsync(strWebSrvFuncParaId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(webSrvFuncPara_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strWebSrvFuncParaId);

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
        webSrvFuncPara_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        webSrvFuncPara_ConstructorName,
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
 * @param arrWebSrvFuncParaId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function WebSrvFuncPara_DelWebSrvFuncParasAsync(
  arrWebSrvFuncParaId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelWebSrvFuncParasAsync';
  const strAction = 'DelWebSrvFuncParas';
  const strUrl = GetWebApiUrl(webSrvFuncPara_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrWebSrvFuncParaId, config);
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
        webSrvFuncPara_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        webSrvFuncPara_ConstructorName,
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
export async function WebSrvFuncPara_DelWebSrvFuncParasByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelWebSrvFuncParasByCondAsync';
  const strAction = 'DelWebSrvFuncParasByCond';
  const strUrl = GetWebApiUrl(webSrvFuncPara_Controller, strAction);

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
        webSrvFuncPara_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        webSrvFuncPara_ConstructorName,
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
 * @param objWebSrvFuncParaEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function WebSrvFuncPara_AddNewRecordAsync(
  objWebSrvFuncParaEN: clsWebSrvFuncParaEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objWebSrvFuncParaEN);
  const strUrl = GetWebApiUrl(webSrvFuncPara_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objWebSrvFuncParaEN, config);
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
        webSrvFuncPara_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        webSrvFuncPara_ConstructorName,
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
 * @param objWebSrvFuncParaEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function WebSrvFuncPara_AddNewRecordWithMaxIdAsync(
  objWebSrvFuncParaEN: clsWebSrvFuncParaEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(webSrvFuncPara_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objWebSrvFuncParaEN, config);
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
        webSrvFuncPara_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        webSrvFuncPara_ConstructorName,
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
 * @param objWebSrvFuncParaEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function WebSrvFuncPara_AddNewRecordWithReturnKeyAsync(
  objWebSrvFuncParaEN: clsWebSrvFuncParaEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(webSrvFuncPara_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objWebSrvFuncParaEN, config);
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
        webSrvFuncPara_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        webSrvFuncPara_ConstructorName,
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
 * @param objWebSrvFuncParaEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function WebSrvFuncPara_UpdateRecordAsync(
  objWebSrvFuncParaEN: clsWebSrvFuncParaEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objWebSrvFuncParaEN.sfUpdFldSetStr === undefined ||
    objWebSrvFuncParaEN.sfUpdFldSetStr === null ||
    objWebSrvFuncParaEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objWebSrvFuncParaEN.webSrvFuncParaId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(webSrvFuncPara_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objWebSrvFuncParaEN, config);
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
        webSrvFuncPara_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        webSrvFuncPara_ConstructorName,
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
 * @param objWebSrvFuncParaEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function WebSrvFuncPara_UpdateWithConditionAsync(
  objWebSrvFuncParaEN: clsWebSrvFuncParaEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objWebSrvFuncParaEN.sfUpdFldSetStr === undefined ||
    objWebSrvFuncParaEN.sfUpdFldSetStr === null ||
    objWebSrvFuncParaEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objWebSrvFuncParaEN.webSrvFuncParaId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(webSrvFuncPara_Controller, strAction);
  objWebSrvFuncParaEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objWebSrvFuncParaEN, config);
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
        webSrvFuncPara_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        webSrvFuncPara_ConstructorName,
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
export async function WebSrvFuncPara_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(webSrvFuncPara_Controller, strAction);

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
        webSrvFuncPara_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        webSrvFuncPara_ConstructorName,
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
 * @param strWebSrvFuncParaId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function WebSrvFuncPara_IsExistAsync(strWebSrvFuncParaId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(webSrvFuncPara_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strWebSrvFuncParaId,
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
        webSrvFuncPara_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        webSrvFuncPara_ConstructorName,
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
export async function WebSrvFuncPara_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(webSrvFuncPara_Controller, strAction);

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
        webSrvFuncPara_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        webSrvFuncPara_ConstructorName,
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
export async function WebSrvFuncPara_GetMaxStrIdAsync(): Promise<string> {
  const strThisFuncName = 'GetMaxStrIdAsync';
  const strAction = 'GetMaxStrId';
  const strUrl = GetWebApiUrl(webSrvFuncPara_Controller, strAction);

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
        webSrvFuncPara_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        webSrvFuncPara_ConstructorName,
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
export async function WebSrvFuncPara_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(webSrvFuncPara_Controller, strAction);

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
        webSrvFuncPara_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        webSrvFuncPara_ConstructorName,
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
export function WebSrvFuncPara_GetWebApiUrl(strController: string, strAction: string): string {
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
export function WebSrvFuncPara_CheckPropertyNew(pobjWebSrvFuncParaEN: clsWebSrvFuncParaEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (
    IsNullOrEmpty(pobjWebSrvFuncParaEN.webSrvFunctionId) === true ||
    pobjWebSrvFuncParaEN.webSrvFunctionId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000411)字段[函数Id]不能为空(In WebSrv函数参数)!(clsWebSrvFuncParaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjWebSrvFuncParaEN.dataTypeId) === true ||
    pobjWebSrvFuncParaEN.dataTypeId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000411)字段[数据类型Id]不能为空(In WebSrv函数参数)!(clsWebSrvFuncParaBL:CheckPropertyNew0)',
    );
  }
  if (IsNullOrEmpty(pobjWebSrvFuncParaEN.parameterType) === true) {
    throw new Error(
      '(errid:Watl000411)字段[参数类型]不能为空(In WebSrv函数参数)!(clsWebSrvFuncParaBL:CheckPropertyNew0)',
    );
  }
  if (
    null === pobjWebSrvFuncParaEN.isByRef ||
    (pobjWebSrvFuncParaEN.isByRef != null && pobjWebSrvFuncParaEN.isByRef.toString() === '')
  ) {
    throw new Error(
      '(errid:Watl000411)字段[是否引用型参数]不能为空(In WebSrv函数参数)!(clsWebSrvFuncParaBL:CheckPropertyNew0)',
    );
  }
  if (IsNullOrEmpty(pobjWebSrvFuncParaEN.paraName) === true) {
    throw new Error(
      '(errid:Watl000411)字段[参数名]不能为空(In WebSrv函数参数)!(clsWebSrvFuncParaBL:CheckPropertyNew0)',
    );
  }
  if (IsNullOrEmpty(pobjWebSrvFuncParaEN.paraCnName) === true) {
    throw new Error(
      '(errid:Watl000411)字段[参数中文名]不能为空(In WebSrv函数参数)!(clsWebSrvFuncParaBL:CheckPropertyNew0)',
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjWebSrvFuncParaEN.webSrvFuncParaId) == false &&
    GetStrLen(pobjWebSrvFuncParaEN.webSrvFuncParaId) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[函数参数Id(webSrvFuncParaId)]的长度不能超过8(In WebSrv函数参数(WebSrvFuncPara))!值:$(pobjWebSrvFuncParaEN.webSrvFuncParaId)(clsWebSrvFuncParaBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjWebSrvFuncParaEN.webSrvFunctionId) == false &&
    GetStrLen(pobjWebSrvFuncParaEN.webSrvFunctionId) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[函数Id(webSrvFunctionId)]的长度不能超过8(In WebSrv函数参数(WebSrvFuncPara))!值:$(pobjWebSrvFuncParaEN.webSrvFunctionId)(clsWebSrvFuncParaBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjWebSrvFuncParaEN.dataTypeId) == false &&
    GetStrLen(pobjWebSrvFuncParaEN.dataTypeId) > 2
  ) {
    throw new Error(
      '(errid:Watl000413)字段[数据类型Id(dataTypeId)]的长度不能超过2(In WebSrv函数参数(WebSrvFuncPara))!值:$(pobjWebSrvFuncParaEN.dataTypeId)(clsWebSrvFuncParaBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjWebSrvFuncParaEN.parameterType) == false &&
    GetStrLen(pobjWebSrvFuncParaEN.parameterType) > 100
  ) {
    throw new Error(
      '(errid:Watl000413)字段[参数类型(parameterType)]的长度不能超过100(In WebSrv函数参数(WebSrvFuncPara))!值:$(pobjWebSrvFuncParaEN.parameterType)(clsWebSrvFuncParaBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjWebSrvFuncParaEN.parameterTypeFullName) == false &&
    GetStrLen(pobjWebSrvFuncParaEN.parameterTypeFullName) > 500
  ) {
    throw new Error(
      '(errid:Watl000413)字段[参数类型全名(parameterTypeFullName)]的长度不能超过500(In WebSrv函数参数(WebSrvFuncPara))!值:$(pobjWebSrvFuncParaEN.parameterTypeFullName)(clsWebSrvFuncParaBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjWebSrvFuncParaEN.paraName) == false &&
    GetStrLen(pobjWebSrvFuncParaEN.paraName) > 50
  ) {
    throw new Error(
      '(errid:Watl000413)字段[参数名(paraName)]的长度不能超过50(In WebSrv函数参数(WebSrvFuncPara))!值:$(pobjWebSrvFuncParaEN.paraName)(clsWebSrvFuncParaBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjWebSrvFuncParaEN.paraCnName) == false &&
    GetStrLen(pobjWebSrvFuncParaEN.paraCnName) > 50
  ) {
    throw new Error(
      '(errid:Watl000413)字段[参数中文名(paraCnName)]的长度不能超过50(In WebSrv函数参数(WebSrvFuncPara))!值:$(pobjWebSrvFuncParaEN.paraCnName)(clsWebSrvFuncParaBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjWebSrvFuncParaEN.updDate) == false &&
    GetStrLen(pobjWebSrvFuncParaEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In WebSrv函数参数(WebSrvFuncPara))!值:$(pobjWebSrvFuncParaEN.updDate)(clsWebSrvFuncParaBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjWebSrvFuncParaEN.updUser) == false &&
    GetStrLen(pobjWebSrvFuncParaEN.updUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改者(updUser)]的长度不能超过20(In WebSrv函数参数(WebSrvFuncPara))!值:$(pobjWebSrvFuncParaEN.updUser)(clsWebSrvFuncParaBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjWebSrvFuncParaEN.memo) == false &&
    GetStrLen(pobjWebSrvFuncParaEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In WebSrv函数参数(WebSrvFuncPara))!值:$(pobjWebSrvFuncParaEN.memo)(clsWebSrvFuncParaBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjWebSrvFuncParaEN.webSrvFuncParaId) == false &&
    undefined !== pobjWebSrvFuncParaEN.webSrvFuncParaId &&
    tzDataType.isString(pobjWebSrvFuncParaEN.webSrvFuncParaId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[函数参数Id(webSrvFuncParaId)]的值:[$(pobjWebSrvFuncParaEN.webSrvFuncParaId)], 非法,应该为字符型(In WebSrv函数参数(WebSrvFuncPara))!(clsWebSrvFuncParaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjWebSrvFuncParaEN.webSrvFunctionId) == false &&
    undefined !== pobjWebSrvFuncParaEN.webSrvFunctionId &&
    tzDataType.isString(pobjWebSrvFuncParaEN.webSrvFunctionId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[函数Id(webSrvFunctionId)]的值:[$(pobjWebSrvFuncParaEN.webSrvFunctionId)], 非法,应该为字符型(In WebSrv函数参数(WebSrvFuncPara))!(clsWebSrvFuncParaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjWebSrvFuncParaEN.dataTypeId) == false &&
    undefined !== pobjWebSrvFuncParaEN.dataTypeId &&
    tzDataType.isString(pobjWebSrvFuncParaEN.dataTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[数据类型Id(dataTypeId)]的值:[$(pobjWebSrvFuncParaEN.dataTypeId)], 非法,应该为字符型(In WebSrv函数参数(WebSrvFuncPara))!(clsWebSrvFuncParaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjWebSrvFuncParaEN.parameterType) == false &&
    undefined !== pobjWebSrvFuncParaEN.parameterType &&
    tzDataType.isString(pobjWebSrvFuncParaEN.parameterType) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[参数类型(parameterType)]的值:[$(pobjWebSrvFuncParaEN.parameterType)], 非法,应该为字符型(In WebSrv函数参数(WebSrvFuncPara))!(clsWebSrvFuncParaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjWebSrvFuncParaEN.parameterTypeFullName) == false &&
    undefined !== pobjWebSrvFuncParaEN.parameterTypeFullName &&
    tzDataType.isString(pobjWebSrvFuncParaEN.parameterTypeFullName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[参数类型全名(parameterTypeFullName)]的值:[$(pobjWebSrvFuncParaEN.parameterTypeFullName)], 非法,应该为字符型(In WebSrv函数参数(WebSrvFuncPara))!(clsWebSrvFuncParaBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjWebSrvFuncParaEN.isByRef &&
    undefined !== pobjWebSrvFuncParaEN.isByRef &&
    tzDataType.isBoolean(pobjWebSrvFuncParaEN.isByRef) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否引用型参数(isByRef)]的值:[$(pobjWebSrvFuncParaEN.isByRef)], 非法,应该为布尔型(In WebSrv函数参数(WebSrvFuncPara))!(clsWebSrvFuncParaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjWebSrvFuncParaEN.paraName) == false &&
    undefined !== pobjWebSrvFuncParaEN.paraName &&
    tzDataType.isString(pobjWebSrvFuncParaEN.paraName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[参数名(paraName)]的值:[$(pobjWebSrvFuncParaEN.paraName)], 非法,应该为字符型(In WebSrv函数参数(WebSrvFuncPara))!(clsWebSrvFuncParaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjWebSrvFuncParaEN.paraCnName) == false &&
    undefined !== pobjWebSrvFuncParaEN.paraCnName &&
    tzDataType.isString(pobjWebSrvFuncParaEN.paraCnName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[参数中文名(paraCnName)]的值:[$(pobjWebSrvFuncParaEN.paraCnName)], 非法,应该为字符型(In WebSrv函数参数(WebSrvFuncPara))!(clsWebSrvFuncParaBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjWebSrvFuncParaEN.isKnownType &&
    undefined !== pobjWebSrvFuncParaEN.isKnownType &&
    tzDataType.isBoolean(pobjWebSrvFuncParaEN.isKnownType) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否已知类型(isKnownType)]的值:[$(pobjWebSrvFuncParaEN.isKnownType)], 非法,应该为布尔型(In WebSrv函数参数(WebSrvFuncPara))!(clsWebSrvFuncParaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjWebSrvFuncParaEN.updDate) == false &&
    undefined !== pobjWebSrvFuncParaEN.updDate &&
    tzDataType.isString(pobjWebSrvFuncParaEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjWebSrvFuncParaEN.updDate)], 非法,应该为字符型(In WebSrv函数参数(WebSrvFuncPara))!(clsWebSrvFuncParaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjWebSrvFuncParaEN.updUser) == false &&
    undefined !== pobjWebSrvFuncParaEN.updUser &&
    tzDataType.isString(pobjWebSrvFuncParaEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改者(updUser)]的值:[$(pobjWebSrvFuncParaEN.updUser)], 非法,应该为字符型(In WebSrv函数参数(WebSrvFuncPara))!(clsWebSrvFuncParaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjWebSrvFuncParaEN.memo) == false &&
    undefined !== pobjWebSrvFuncParaEN.memo &&
    tzDataType.isString(pobjWebSrvFuncParaEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[说明(memo)]的值:[$(pobjWebSrvFuncParaEN.memo)], 非法,应该为字符型(In WebSrv函数参数(WebSrvFuncPara))!(clsWebSrvFuncParaBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function WebSrvFuncPara_CheckProperty4Update(pobjWebSrvFuncParaEN: clsWebSrvFuncParaEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjWebSrvFuncParaEN.webSrvFuncParaId) == false &&
    GetStrLen(pobjWebSrvFuncParaEN.webSrvFuncParaId) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[函数参数Id(webSrvFuncParaId)]的长度不能超过8(In WebSrv函数参数(WebSrvFuncPara))!值:$(pobjWebSrvFuncParaEN.webSrvFuncParaId)(clsWebSrvFuncParaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjWebSrvFuncParaEN.webSrvFunctionId) == false &&
    GetStrLen(pobjWebSrvFuncParaEN.webSrvFunctionId) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[函数Id(webSrvFunctionId)]的长度不能超过8(In WebSrv函数参数(WebSrvFuncPara))!值:$(pobjWebSrvFuncParaEN.webSrvFunctionId)(clsWebSrvFuncParaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjWebSrvFuncParaEN.dataTypeId) == false &&
    GetStrLen(pobjWebSrvFuncParaEN.dataTypeId) > 2
  ) {
    throw new Error(
      '(errid:Watl000416)字段[数据类型Id(dataTypeId)]的长度不能超过2(In WebSrv函数参数(WebSrvFuncPara))!值:$(pobjWebSrvFuncParaEN.dataTypeId)(clsWebSrvFuncParaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjWebSrvFuncParaEN.parameterType) == false &&
    GetStrLen(pobjWebSrvFuncParaEN.parameterType) > 100
  ) {
    throw new Error(
      '(errid:Watl000416)字段[参数类型(parameterType)]的长度不能超过100(In WebSrv函数参数(WebSrvFuncPara))!值:$(pobjWebSrvFuncParaEN.parameterType)(clsWebSrvFuncParaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjWebSrvFuncParaEN.parameterTypeFullName) == false &&
    GetStrLen(pobjWebSrvFuncParaEN.parameterTypeFullName) > 500
  ) {
    throw new Error(
      '(errid:Watl000416)字段[参数类型全名(parameterTypeFullName)]的长度不能超过500(In WebSrv函数参数(WebSrvFuncPara))!值:$(pobjWebSrvFuncParaEN.parameterTypeFullName)(clsWebSrvFuncParaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjWebSrvFuncParaEN.paraName) == false &&
    GetStrLen(pobjWebSrvFuncParaEN.paraName) > 50
  ) {
    throw new Error(
      '(errid:Watl000416)字段[参数名(paraName)]的长度不能超过50(In WebSrv函数参数(WebSrvFuncPara))!值:$(pobjWebSrvFuncParaEN.paraName)(clsWebSrvFuncParaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjWebSrvFuncParaEN.paraCnName) == false &&
    GetStrLen(pobjWebSrvFuncParaEN.paraCnName) > 50
  ) {
    throw new Error(
      '(errid:Watl000416)字段[参数中文名(paraCnName)]的长度不能超过50(In WebSrv函数参数(WebSrvFuncPara))!值:$(pobjWebSrvFuncParaEN.paraCnName)(clsWebSrvFuncParaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjWebSrvFuncParaEN.updDate) == false &&
    GetStrLen(pobjWebSrvFuncParaEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In WebSrv函数参数(WebSrvFuncPara))!值:$(pobjWebSrvFuncParaEN.updDate)(clsWebSrvFuncParaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjWebSrvFuncParaEN.updUser) == false &&
    GetStrLen(pobjWebSrvFuncParaEN.updUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改者(updUser)]的长度不能超过20(In WebSrv函数参数(WebSrvFuncPara))!值:$(pobjWebSrvFuncParaEN.updUser)(clsWebSrvFuncParaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjWebSrvFuncParaEN.memo) == false &&
    GetStrLen(pobjWebSrvFuncParaEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In WebSrv函数参数(WebSrvFuncPara))!值:$(pobjWebSrvFuncParaEN.memo)(clsWebSrvFuncParaBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjWebSrvFuncParaEN.webSrvFuncParaId) == false &&
    undefined !== pobjWebSrvFuncParaEN.webSrvFuncParaId &&
    tzDataType.isString(pobjWebSrvFuncParaEN.webSrvFuncParaId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[函数参数Id(webSrvFuncParaId)]的值:[$(pobjWebSrvFuncParaEN.webSrvFuncParaId)], 非法,应该为字符型(In WebSrv函数参数(WebSrvFuncPara))!(clsWebSrvFuncParaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjWebSrvFuncParaEN.webSrvFunctionId) == false &&
    undefined !== pobjWebSrvFuncParaEN.webSrvFunctionId &&
    tzDataType.isString(pobjWebSrvFuncParaEN.webSrvFunctionId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[函数Id(webSrvFunctionId)]的值:[$(pobjWebSrvFuncParaEN.webSrvFunctionId)], 非法,应该为字符型(In WebSrv函数参数(WebSrvFuncPara))!(clsWebSrvFuncParaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjWebSrvFuncParaEN.dataTypeId) == false &&
    undefined !== pobjWebSrvFuncParaEN.dataTypeId &&
    tzDataType.isString(pobjWebSrvFuncParaEN.dataTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[数据类型Id(dataTypeId)]的值:[$(pobjWebSrvFuncParaEN.dataTypeId)], 非法,应该为字符型(In WebSrv函数参数(WebSrvFuncPara))!(clsWebSrvFuncParaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjWebSrvFuncParaEN.parameterType) == false &&
    undefined !== pobjWebSrvFuncParaEN.parameterType &&
    tzDataType.isString(pobjWebSrvFuncParaEN.parameterType) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[参数类型(parameterType)]的值:[$(pobjWebSrvFuncParaEN.parameterType)], 非法,应该为字符型(In WebSrv函数参数(WebSrvFuncPara))!(clsWebSrvFuncParaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjWebSrvFuncParaEN.parameterTypeFullName) == false &&
    undefined !== pobjWebSrvFuncParaEN.parameterTypeFullName &&
    tzDataType.isString(pobjWebSrvFuncParaEN.parameterTypeFullName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[参数类型全名(parameterTypeFullName)]的值:[$(pobjWebSrvFuncParaEN.parameterTypeFullName)], 非法,应该为字符型(In WebSrv函数参数(WebSrvFuncPara))!(clsWebSrvFuncParaBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjWebSrvFuncParaEN.isByRef &&
    undefined !== pobjWebSrvFuncParaEN.isByRef &&
    tzDataType.isBoolean(pobjWebSrvFuncParaEN.isByRef) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否引用型参数(isByRef)]的值:[$(pobjWebSrvFuncParaEN.isByRef)], 非法,应该为布尔型(In WebSrv函数参数(WebSrvFuncPara))!(clsWebSrvFuncParaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjWebSrvFuncParaEN.paraName) == false &&
    undefined !== pobjWebSrvFuncParaEN.paraName &&
    tzDataType.isString(pobjWebSrvFuncParaEN.paraName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[参数名(paraName)]的值:[$(pobjWebSrvFuncParaEN.paraName)], 非法,应该为字符型(In WebSrv函数参数(WebSrvFuncPara))!(clsWebSrvFuncParaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjWebSrvFuncParaEN.paraCnName) == false &&
    undefined !== pobjWebSrvFuncParaEN.paraCnName &&
    tzDataType.isString(pobjWebSrvFuncParaEN.paraCnName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[参数中文名(paraCnName)]的值:[$(pobjWebSrvFuncParaEN.paraCnName)], 非法,应该为字符型(In WebSrv函数参数(WebSrvFuncPara))!(clsWebSrvFuncParaBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjWebSrvFuncParaEN.isKnownType &&
    undefined !== pobjWebSrvFuncParaEN.isKnownType &&
    tzDataType.isBoolean(pobjWebSrvFuncParaEN.isKnownType) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否已知类型(isKnownType)]的值:[$(pobjWebSrvFuncParaEN.isKnownType)], 非法,应该为布尔型(In WebSrv函数参数(WebSrvFuncPara))!(clsWebSrvFuncParaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjWebSrvFuncParaEN.updDate) == false &&
    undefined !== pobjWebSrvFuncParaEN.updDate &&
    tzDataType.isString(pobjWebSrvFuncParaEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjWebSrvFuncParaEN.updDate)], 非法,应该为字符型(In WebSrv函数参数(WebSrvFuncPara))!(clsWebSrvFuncParaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjWebSrvFuncParaEN.updUser) == false &&
    undefined !== pobjWebSrvFuncParaEN.updUser &&
    tzDataType.isString(pobjWebSrvFuncParaEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改者(updUser)]的值:[$(pobjWebSrvFuncParaEN.updUser)], 非法,应该为字符型(In WebSrv函数参数(WebSrvFuncPara))!(clsWebSrvFuncParaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjWebSrvFuncParaEN.memo) == false &&
    undefined !== pobjWebSrvFuncParaEN.memo &&
    tzDataType.isString(pobjWebSrvFuncParaEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[说明(memo)]的值:[$(pobjWebSrvFuncParaEN.memo)], 非法,应该为字符型(In WebSrv函数参数(WebSrvFuncPara))!(clsWebSrvFuncParaBL:CheckProperty4Update)',
    );
  }
  //检查主键是否为Null或者空!
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
export function WebSrvFuncPara_GetJSONStrByObj(pobjWebSrvFuncParaEN: clsWebSrvFuncParaEN): string {
  pobjWebSrvFuncParaEN.sfUpdFldSetStr = pobjWebSrvFuncParaEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjWebSrvFuncParaEN);
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
export function WebSrvFuncPara_GetObjLstByJSONStr(strJSON: string): Array<clsWebSrvFuncParaEN> {
  let arrWebSrvFuncParaObjLst = new Array<clsWebSrvFuncParaEN>();
  if (strJSON === '') {
    return arrWebSrvFuncParaObjLst;
  }
  try {
    arrWebSrvFuncParaObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrWebSrvFuncParaObjLst;
  }
  return arrWebSrvFuncParaObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrWebSrvFuncParaObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function WebSrvFuncPara_GetObjLstByJSONObjLst(
  arrWebSrvFuncParaObjLstS: Array<clsWebSrvFuncParaEN>,
): Array<clsWebSrvFuncParaEN> {
  const arrWebSrvFuncParaObjLst = new Array<clsWebSrvFuncParaEN>();
  for (const objInFor of arrWebSrvFuncParaObjLstS) {
    const obj1 = WebSrvFuncPara_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrWebSrvFuncParaObjLst.push(obj1);
  }
  return arrWebSrvFuncParaObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function WebSrvFuncPara_GetObjByJSONStr(strJSON: string): clsWebSrvFuncParaEN {
  let pobjWebSrvFuncParaEN = new clsWebSrvFuncParaEN();
  if (strJSON === '') {
    return pobjWebSrvFuncParaEN;
  }
  try {
    pobjWebSrvFuncParaEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjWebSrvFuncParaEN;
  }
  return pobjWebSrvFuncParaEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function WebSrvFuncPara_GetCombineCondition(
  objWebSrvFuncParaCond: clsWebSrvFuncParaEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objWebSrvFuncParaCond.dicFldComparisonOp,
      clsWebSrvFuncParaEN.con_WebSrvFuncParaId,
    ) == true
  ) {
    const strComparisonOpWebSrvFuncParaId: string =
      objWebSrvFuncParaCond.dicFldComparisonOp[clsWebSrvFuncParaEN.con_WebSrvFuncParaId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsWebSrvFuncParaEN.con_WebSrvFuncParaId,
      objWebSrvFuncParaCond.webSrvFuncParaId,
      strComparisonOpWebSrvFuncParaId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objWebSrvFuncParaCond.dicFldComparisonOp,
      clsWebSrvFuncParaEN.con_WebSrvFunctionId,
    ) == true
  ) {
    const strComparisonOpWebSrvFunctionId: string =
      objWebSrvFuncParaCond.dicFldComparisonOp[clsWebSrvFuncParaEN.con_WebSrvFunctionId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsWebSrvFuncParaEN.con_WebSrvFunctionId,
      objWebSrvFuncParaCond.webSrvFunctionId,
      strComparisonOpWebSrvFunctionId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objWebSrvFuncParaCond.dicFldComparisonOp,
      clsWebSrvFuncParaEN.con_DataTypeId,
    ) == true
  ) {
    const strComparisonOpDataTypeId: string =
      objWebSrvFuncParaCond.dicFldComparisonOp[clsWebSrvFuncParaEN.con_DataTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsWebSrvFuncParaEN.con_DataTypeId,
      objWebSrvFuncParaCond.dataTypeId,
      strComparisonOpDataTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objWebSrvFuncParaCond.dicFldComparisonOp,
      clsWebSrvFuncParaEN.con_ParameterType,
    ) == true
  ) {
    const strComparisonOpParameterType: string =
      objWebSrvFuncParaCond.dicFldComparisonOp[clsWebSrvFuncParaEN.con_ParameterType];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsWebSrvFuncParaEN.con_ParameterType,
      objWebSrvFuncParaCond.parameterType,
      strComparisonOpParameterType,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objWebSrvFuncParaCond.dicFldComparisonOp,
      clsWebSrvFuncParaEN.con_ParameterTypeFullName,
    ) == true
  ) {
    const strComparisonOpParameterTypeFullName: string =
      objWebSrvFuncParaCond.dicFldComparisonOp[clsWebSrvFuncParaEN.con_ParameterTypeFullName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsWebSrvFuncParaEN.con_ParameterTypeFullName,
      objWebSrvFuncParaCond.parameterTypeFullName,
      strComparisonOpParameterTypeFullName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objWebSrvFuncParaCond.dicFldComparisonOp,
      clsWebSrvFuncParaEN.con_IsByRef,
    ) == true
  ) {
    if (objWebSrvFuncParaCond.isByRef == true) {
      strWhereCond += Format(" And {0} = '1'", clsWebSrvFuncParaEN.con_IsByRef);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsWebSrvFuncParaEN.con_IsByRef);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objWebSrvFuncParaCond.dicFldComparisonOp,
      clsWebSrvFuncParaEN.con_ParaName,
    ) == true
  ) {
    const strComparisonOpParaName: string =
      objWebSrvFuncParaCond.dicFldComparisonOp[clsWebSrvFuncParaEN.con_ParaName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsWebSrvFuncParaEN.con_ParaName,
      objWebSrvFuncParaCond.paraName,
      strComparisonOpParaName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objWebSrvFuncParaCond.dicFldComparisonOp,
      clsWebSrvFuncParaEN.con_ParaCnName,
    ) == true
  ) {
    const strComparisonOpParaCnName: string =
      objWebSrvFuncParaCond.dicFldComparisonOp[clsWebSrvFuncParaEN.con_ParaCnName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsWebSrvFuncParaEN.con_ParaCnName,
      objWebSrvFuncParaCond.paraCnName,
      strComparisonOpParaCnName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objWebSrvFuncParaCond.dicFldComparisonOp,
      clsWebSrvFuncParaEN.con_IsKnownType,
    ) == true
  ) {
    if (objWebSrvFuncParaCond.isKnownType == true) {
      strWhereCond += Format(" And {0} = '1'", clsWebSrvFuncParaEN.con_IsKnownType);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsWebSrvFuncParaEN.con_IsKnownType);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objWebSrvFuncParaCond.dicFldComparisonOp,
      clsWebSrvFuncParaEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objWebSrvFuncParaCond.dicFldComparisonOp[clsWebSrvFuncParaEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsWebSrvFuncParaEN.con_UpdDate,
      objWebSrvFuncParaCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objWebSrvFuncParaCond.dicFldComparisonOp,
      clsWebSrvFuncParaEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objWebSrvFuncParaCond.dicFldComparisonOp[clsWebSrvFuncParaEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsWebSrvFuncParaEN.con_UpdUser,
      objWebSrvFuncParaCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objWebSrvFuncParaCond.dicFldComparisonOp,
      clsWebSrvFuncParaEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objWebSrvFuncParaCond.dicFldComparisonOp[clsWebSrvFuncParaEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsWebSrvFuncParaEN.con_Memo,
      objWebSrvFuncParaCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--WebSrvFuncPara(WebSrv函数参数),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strWebSrvFunctionId: 函数Id(要求唯一的字段)
 * @param strParaName: 参数名(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function WebSrvFuncPara_GetUniCondStr(objWebSrvFuncParaEN: clsWebSrvFuncParaEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and WebSrvFunctionId = '{0}'", objWebSrvFuncParaEN.webSrvFunctionId);
  strWhereCond += Format(" and ParaName = '{0}'", objWebSrvFuncParaEN.paraName);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--WebSrvFuncPara(WebSrv函数参数),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strWebSrvFunctionId: 函数Id(要求唯一的字段)
 * @param strParaName: 参数名(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function WebSrvFuncPara_GetUniCondStr4Update(
  objWebSrvFuncParaEN: clsWebSrvFuncParaEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and WebSrvFuncParaId <> '{0}'", objWebSrvFuncParaEN.webSrvFuncParaId);
  strWhereCond += Format(" and WebSrvFunctionId = '{0}'", objWebSrvFuncParaEN.webSrvFunctionId);
  strWhereCond += Format(" and ParaName = '{0}'", objWebSrvFuncParaEN.paraName);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objWebSrvFuncParaENS:源对象
 * @param objWebSrvFuncParaENT:目标对象
 */
export function WebSrvFuncPara_GetObjFromJsonObj(
  objWebSrvFuncParaENS: clsWebSrvFuncParaEN,
): clsWebSrvFuncParaEN {
  const objWebSrvFuncParaENT: clsWebSrvFuncParaEN = new clsWebSrvFuncParaEN();
  ObjectAssign(objWebSrvFuncParaENT, objWebSrvFuncParaENS);
  return objWebSrvFuncParaENT;
}
