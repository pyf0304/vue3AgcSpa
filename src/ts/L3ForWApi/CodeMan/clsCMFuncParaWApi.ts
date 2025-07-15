/**
 * 类名:clsCMFuncParaWApi
 * 表名:CMFuncPara(00050503)
 * 版本:2023.10.12.1(服务器:WIN-SRV103-116)
 * 日期:2023/10/12 14:38:17
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:代码管理(CodeMan)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * CM函数参数(CMFuncPara)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2023年10月12日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty, GetStrLen, tzDataType, Format } from '@/ts/PubFun/clsString';
import { clsCMFuncParaEN } from '@/ts/L0Entity/CodeMan/clsCMFuncParaEN';
import { GetExceptionStr, myShowErrorMsg, ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const cMFuncPara_Controller = 'CMFuncParaApi';
export const cMFuncPara_ConstructorName = 'cMFuncPara';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strCmFuncParaId:关键字
 * @returns 对象
 **/
export async function CMFuncPara_GetObjByCmFuncParaIdAsync(
  strCmFuncParaId: string,
): Promise<clsCMFuncParaEN | null> {
  const strThisFuncName = 'GetObjByCmFuncParaIdAsync';

  if (IsNullOrEmpty(strCmFuncParaId) == true) {
    const strMsg = Format(
      '参数:[strCmFuncParaId]不能为空!(In clsCMFuncParaWApi.GetObjByCmFuncParaIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strCmFuncParaId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strCmFuncParaId]的长度:[{0}]不正确!(clsCMFuncParaWApi.GetObjByCmFuncParaIdAsync)',
      strCmFuncParaId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByCmFuncParaId';
  const strUrl = GetWebApiUrl(cMFuncPara_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strCmFuncParaId,
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
      const objCMFuncPara = CMFuncPara_GetObjFromJsonObj(returnObj);
      return objCMFuncPara;
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
        cMFuncPara_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFuncPara_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[GetObjByCmFuncParaIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )
//该表没有使用Cache,不需要生成[GetObjByCmFuncParaIdlocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[UpdateObjInLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache
//该表没有使用Cache,不需要生成[GetNameByCmFuncParaIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
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
export function CMFuncPara_SortFunDefa(a: clsCMFuncParaEN, b: clsCMFuncParaEN): number {
  return a.cmFuncParaId.localeCompare(b.cmFuncParaId);
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
export function CMFuncPara_SortFunDefa2Fld(a: clsCMFuncParaEN, b: clsCMFuncParaEN): number {
  if (a.paraName == b.paraName) return a.paraComments.localeCompare(b.paraComments);
  else return a.paraName.localeCompare(b.paraName);
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
export function CMFuncPara_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsCMFuncParaEN.con_CmFuncParaId:
        return (a: clsCMFuncParaEN, b: clsCMFuncParaEN) => {
          return a.cmFuncParaId.localeCompare(b.cmFuncParaId);
        };
      case clsCMFuncParaEN.con_ParaName:
        return (a: clsCMFuncParaEN, b: clsCMFuncParaEN) => {
          return a.paraName.localeCompare(b.paraName);
        };
      case clsCMFuncParaEN.con_ParaComments:
        return (a: clsCMFuncParaEN, b: clsCMFuncParaEN) => {
          if (a.paraComments == null) return -1;
          if (b.paraComments == null) return 1;
          return a.paraComments.localeCompare(b.paraComments);
        };
      case clsCMFuncParaEN.con_ParameterType:
        return (a: clsCMFuncParaEN, b: clsCMFuncParaEN) => {
          return a.parameterType.localeCompare(b.parameterType);
        };
      case clsCMFuncParaEN.con_DataTypeId:
        return (a: clsCMFuncParaEN, b: clsCMFuncParaEN) => {
          return a.dataTypeId.localeCompare(b.dataTypeId);
        };
      case clsCMFuncParaEN.con_ParameterTypeFullName:
        return (a: clsCMFuncParaEN, b: clsCMFuncParaEN) => {
          if (a.parameterTypeFullName == null) return -1;
          if (b.parameterTypeFullName == null) return 1;
          return a.parameterTypeFullName.localeCompare(b.parameterTypeFullName);
        };
      case clsCMFuncParaEN.con_IsByRef:
        return (a: clsCMFuncParaEN) => {
          if (a.isByRef == true) return 1;
          else return -1;
        };
      case clsCMFuncParaEN.con_ParaCnName:
        return (a: clsCMFuncParaEN, b: clsCMFuncParaEN) => {
          return a.paraCnName.localeCompare(b.paraCnName);
        };
      case clsCMFuncParaEN.con_IsKnownType:
        return (a: clsCMFuncParaEN) => {
          if (a.isKnownType == true) return 1;
          else return -1;
        };
      case clsCMFuncParaEN.con_PrjId:
        return (a: clsCMFuncParaEN, b: clsCMFuncParaEN) => {
          return a.prjId.localeCompare(b.prjId);
        };
      case clsCMFuncParaEN.con_UpdDate:
        return (a: clsCMFuncParaEN, b: clsCMFuncParaEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsCMFuncParaEN.con_UpdUser:
        return (a: clsCMFuncParaEN, b: clsCMFuncParaEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsCMFuncParaEN.con_Memo:
        return (a: clsCMFuncParaEN, b: clsCMFuncParaEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[CMFuncPara]中不存在!(in ${cMFuncPara_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsCMFuncParaEN.con_CmFuncParaId:
        return (a: clsCMFuncParaEN, b: clsCMFuncParaEN) => {
          return b.cmFuncParaId.localeCompare(a.cmFuncParaId);
        };
      case clsCMFuncParaEN.con_ParaName:
        return (a: clsCMFuncParaEN, b: clsCMFuncParaEN) => {
          return b.paraName.localeCompare(a.paraName);
        };
      case clsCMFuncParaEN.con_ParaComments:
        return (a: clsCMFuncParaEN, b: clsCMFuncParaEN) => {
          if (b.paraComments == null) return -1;
          if (a.paraComments == null) return 1;
          return b.paraComments.localeCompare(a.paraComments);
        };
      case clsCMFuncParaEN.con_ParameterType:
        return (a: clsCMFuncParaEN, b: clsCMFuncParaEN) => {
          return b.parameterType.localeCompare(a.parameterType);
        };
      case clsCMFuncParaEN.con_DataTypeId:
        return (a: clsCMFuncParaEN, b: clsCMFuncParaEN) => {
          return b.dataTypeId.localeCompare(a.dataTypeId);
        };
      case clsCMFuncParaEN.con_ParameterTypeFullName:
        return (a: clsCMFuncParaEN, b: clsCMFuncParaEN) => {
          if (b.parameterTypeFullName == null) return -1;
          if (a.parameterTypeFullName == null) return 1;
          return b.parameterTypeFullName.localeCompare(a.parameterTypeFullName);
        };
      case clsCMFuncParaEN.con_IsByRef:
        return (b: clsCMFuncParaEN) => {
          if (b.isByRef == true) return 1;
          else return -1;
        };
      case clsCMFuncParaEN.con_ParaCnName:
        return (a: clsCMFuncParaEN, b: clsCMFuncParaEN) => {
          return b.paraCnName.localeCompare(a.paraCnName);
        };
      case clsCMFuncParaEN.con_IsKnownType:
        return (b: clsCMFuncParaEN) => {
          if (b.isKnownType == true) return 1;
          else return -1;
        };
      case clsCMFuncParaEN.con_PrjId:
        return (a: clsCMFuncParaEN, b: clsCMFuncParaEN) => {
          return b.prjId.localeCompare(a.prjId);
        };
      case clsCMFuncParaEN.con_UpdDate:
        return (a: clsCMFuncParaEN, b: clsCMFuncParaEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsCMFuncParaEN.con_UpdUser:
        return (a: clsCMFuncParaEN, b: clsCMFuncParaEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsCMFuncParaEN.con_Memo:
        return (a: clsCMFuncParaEN, b: clsCMFuncParaEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[CMFuncPara]中不存在!(in ${cMFuncPara_ConstructorName}.${strThisFuncName})`;
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
export async function CMFuncPara_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsCMFuncParaEN.con_CmFuncParaId:
      return (obj: clsCMFuncParaEN) => {
        return obj.cmFuncParaId === value;
      };
    case clsCMFuncParaEN.con_ParaName:
      return (obj: clsCMFuncParaEN) => {
        return obj.paraName === value;
      };
    case clsCMFuncParaEN.con_ParaComments:
      return (obj: clsCMFuncParaEN) => {
        return obj.paraComments === value;
      };
    case clsCMFuncParaEN.con_ParameterType:
      return (obj: clsCMFuncParaEN) => {
        return obj.parameterType === value;
      };
    case clsCMFuncParaEN.con_DataTypeId:
      return (obj: clsCMFuncParaEN) => {
        return obj.dataTypeId === value;
      };
    case clsCMFuncParaEN.con_ParameterTypeFullName:
      return (obj: clsCMFuncParaEN) => {
        return obj.parameterTypeFullName === value;
      };
    case clsCMFuncParaEN.con_IsByRef:
      return (obj: clsCMFuncParaEN) => {
        return obj.isByRef === value;
      };
    case clsCMFuncParaEN.con_ParaCnName:
      return (obj: clsCMFuncParaEN) => {
        return obj.paraCnName === value;
      };
    case clsCMFuncParaEN.con_IsKnownType:
      return (obj: clsCMFuncParaEN) => {
        return obj.isKnownType === value;
      };
    case clsCMFuncParaEN.con_PrjId:
      return (obj: clsCMFuncParaEN) => {
        return obj.prjId === value;
      };
    case clsCMFuncParaEN.con_UpdDate:
      return (obj: clsCMFuncParaEN) => {
        return obj.updDate === value;
      };
    case clsCMFuncParaEN.con_UpdUser:
      return (obj: clsCMFuncParaEN) => {
        return obj.updUser === value;
      };
    case clsCMFuncParaEN.con_Memo:
      return (obj: clsCMFuncParaEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[CMFuncPara]中不存在!(in ${cMFuncPara_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}
//该表没有使用Cache,不需要生成[CMFuncPara__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function CMFuncPara_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(cMFuncPara_Controller, strAction);

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
        cMFuncPara_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFuncPara_ConstructorName,
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
export async function CMFuncPara_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(cMFuncPara_Controller, strAction);

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
        cMFuncPara_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFuncPara_ConstructorName,
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
export async function CMFuncPara_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsCMFuncParaEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(cMFuncPara_Controller, strAction);

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
      const objCMFuncPara = CMFuncPara_GetObjFromJsonObj(returnObj);
      return objCMFuncPara;
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
        cMFuncPara_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFuncPara_ConstructorName,
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
export async function CMFuncPara_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsCMFuncParaEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(cMFuncPara_Controller, strAction);

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
          cMFuncPara_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = CMFuncPara_GetObjLstByJSONObjLst(returnObjLst);
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
        cMFuncPara_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFuncPara_ConstructorName,
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
 * @param arrCmFuncParaId:关键字列表
 * @returns 对象列表
 **/
export async function CMFuncPara_GetObjLstByCmFuncParaIdLstAsync(
  arrCmFuncParaId: Array<string>,
): Promise<Array<clsCMFuncParaEN>> {
  const strThisFuncName = 'GetObjLstByCmFuncParaIdLstAsync';
  const strAction = 'GetObjLstByCmFuncParaIdLst';
  const strUrl = GetWebApiUrl(cMFuncPara_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrCmFuncParaId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          cMFuncPara_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = CMFuncPara_GetObjLstByJSONObjLst(returnObjLst);
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
        cMFuncPara_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFuncPara_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[GetObjLstByCmFuncParaIdLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

/**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export async function CMFuncPara_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsCMFuncParaEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(cMFuncPara_Controller, strAction);

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
          cMFuncPara_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = CMFuncPara_GetObjLstByJSONObjLst(returnObjLst);
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
        cMFuncPara_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFuncPara_ConstructorName,
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
export async function CMFuncPara_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsCMFuncParaEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(cMFuncPara_Controller, strAction);

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
          cMFuncPara_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = CMFuncPara_GetObjLstByJSONObjLst(returnObjLst);
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
        cMFuncPara_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFuncPara_ConstructorName,
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
export async function CMFuncPara_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsCMFuncParaEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsCMFuncParaEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(cMFuncPara_Controller, strAction);

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
          cMFuncPara_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = CMFuncPara_GetObjLstByJSONObjLst(returnObjLst);
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
        cMFuncPara_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFuncPara_ConstructorName,
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
 * @param strCmFuncParaId:关键字
 * @returns 获取删除的结果
 **/
export async function CMFuncPara_DelRecordAsync(strCmFuncParaId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(cMFuncPara_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strCmFuncParaId);

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
        cMFuncPara_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFuncPara_ConstructorName,
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
 * @param arrCmFuncParaId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function CMFuncPara_DelCMFuncParasAsync(
  arrCmFuncParaId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelCMFuncParasAsync';
  const strAction = 'DelCMFuncParas';
  const strUrl = GetWebApiUrl(cMFuncPara_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrCmFuncParaId, config);
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
        cMFuncPara_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFuncPara_ConstructorName,
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
export async function CMFuncPara_DelCMFuncParasByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'DelCMFuncParasByCondAsync';
  const strAction = 'DelCMFuncParasByCond';
  const strUrl = GetWebApiUrl(cMFuncPara_Controller, strAction);

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
        cMFuncPara_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFuncPara_ConstructorName,
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
 * @param objCMFuncParaEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function CMFuncPara_AddNewRecordAsync(
  objCMFuncParaEN: clsCMFuncParaEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objCMFuncParaEN);
  const strUrl = GetWebApiUrl(cMFuncPara_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objCMFuncParaEN, config);
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
        cMFuncPara_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFuncPara_ConstructorName,
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
 * @param objCMFuncParaEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function CMFuncPara_AddNewRecordWithMaxIdAsync(
  objCMFuncParaEN: clsCMFuncParaEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(cMFuncPara_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objCMFuncParaEN, config);
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
        cMFuncPara_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFuncPara_ConstructorName,
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
 * @param objCMFuncParaEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function CMFuncPara_AddNewRecordWithReturnKeyAsync(
  objCMFuncParaEN: clsCMFuncParaEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(cMFuncPara_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objCMFuncParaEN, config);
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
        cMFuncPara_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFuncPara_ConstructorName,
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
 * @param objCMFuncParaEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function CMFuncPara_UpdateRecordAsync(
  objCMFuncParaEN: clsCMFuncParaEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objCMFuncParaEN.sfUpdFldSetStr === undefined ||
    objCMFuncParaEN.sfUpdFldSetStr === null ||
    objCMFuncParaEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objCMFuncParaEN.cmFuncParaId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(cMFuncPara_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objCMFuncParaEN, config);
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
        cMFuncPara_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFuncPara_ConstructorName,
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
 * @param objCMFuncParaEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function CMFuncPara_UpdateWithConditionAsync(
  objCMFuncParaEN: clsCMFuncParaEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objCMFuncParaEN.sfUpdFldSetStr === undefined ||
    objCMFuncParaEN.sfUpdFldSetStr === null ||
    objCMFuncParaEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objCMFuncParaEN.cmFuncParaId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(cMFuncPara_Controller, strAction);
  objCMFuncParaEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objCMFuncParaEN, config);
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
        cMFuncPara_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFuncPara_ConstructorName,
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
export async function CMFuncPara_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(cMFuncPara_Controller, strAction);

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
        cMFuncPara_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFuncPara_ConstructorName,
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
 * @param strCmFuncParaId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function CMFuncPara_IsExistAsync(strCmFuncParaId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(cMFuncPara_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strCmFuncParaId,
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
        cMFuncPara_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFuncPara_ConstructorName,
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
export async function CMFuncPara_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(cMFuncPara_Controller, strAction);

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
        cMFuncPara_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFuncPara_ConstructorName,
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
export async function CMFuncPara_GetMaxStrIdAsync(): Promise<string> {
  const strThisFuncName = 'GetMaxStrIdAsync';
  const strAction = 'GetMaxStrId';
  const strUrl = GetWebApiUrl(cMFuncPara_Controller, strAction);

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
        cMFuncPara_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFuncPara_ConstructorName,
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
export async function CMFuncPara_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(cMFuncPara_Controller, strAction);

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
        cMFuncPara_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFuncPara_ConstructorName,
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
export function CMFuncPara_GetWebApiUrl(strController: string, strAction: string): string {
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
export function CMFuncPara_CheckPropertyNew(pobjCMFuncParaEN: clsCMFuncParaEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjCMFuncParaEN.paraName) === true) {
    throw new Error(
      '(errid:Watl000411)字段[参数名]不能为空(In CM函数参数)!(clsCMFuncParaBL:CheckPropertyNew0)',
    );
  }
  if (IsNullOrEmpty(pobjCMFuncParaEN.parameterType) === true) {
    throw new Error(
      '(errid:Watl000411)字段[参数类型]不能为空(In CM函数参数)!(clsCMFuncParaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFuncParaEN.dataTypeId) === true ||
    pobjCMFuncParaEN.dataTypeId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000411)字段[数据类型Id]不能为空(In CM函数参数)!(clsCMFuncParaBL:CheckPropertyNew0)',
    );
  }
  if (
    null === pobjCMFuncParaEN.isByRef ||
    (pobjCMFuncParaEN.isByRef != null && pobjCMFuncParaEN.isByRef.toString() === '')
  ) {
    throw new Error(
      '(errid:Watl000411)字段[是否引用型参数]不能为空(In CM函数参数)!(clsCMFuncParaBL:CheckPropertyNew0)',
    );
  }
  if (IsNullOrEmpty(pobjCMFuncParaEN.paraCnName) === true) {
    throw new Error(
      '(errid:Watl000411)字段[参数中文名]不能为空(In CM函数参数)!(clsCMFuncParaBL:CheckPropertyNew0)',
    );
  }
  if (IsNullOrEmpty(pobjCMFuncParaEN.prjId) === true || pobjCMFuncParaEN.prjId.toString() === '0') {
    throw new Error(
      '(errid:Watl000411)字段[工程ID]不能为空(In CM函数参数)!(clsCMFuncParaBL:CheckPropertyNew0)',
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjCMFuncParaEN.cmFuncParaId) == false &&
    GetStrLen(pobjCMFuncParaEN.cmFuncParaId) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[函数参数Id(cmFuncParaId)]的长度不能超过8(In CM函数参数(CMFuncPara))!值:$(pobjCMFuncParaEN.cmFuncParaId)(clsCMFuncParaBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFuncParaEN.paraName) == false &&
    GetStrLen(pobjCMFuncParaEN.paraName) > 50
  ) {
    throw new Error(
      '(errid:Watl000413)字段[参数名(paraName)]的长度不能超过50(In CM函数参数(CMFuncPara))!值:$(pobjCMFuncParaEN.paraName)(clsCMFuncParaBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFuncParaEN.paraComments) == false &&
    GetStrLen(pobjCMFuncParaEN.paraComments) > 500
  ) {
    throw new Error(
      '(errid:Watl000413)字段[参数注释(paraComments)]的长度不能超过500(In CM函数参数(CMFuncPara))!值:$(pobjCMFuncParaEN.paraComments)(clsCMFuncParaBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFuncParaEN.parameterType) == false &&
    GetStrLen(pobjCMFuncParaEN.parameterType) > 100
  ) {
    throw new Error(
      '(errid:Watl000413)字段[参数类型(parameterType)]的长度不能超过100(In CM函数参数(CMFuncPara))!值:$(pobjCMFuncParaEN.parameterType)(clsCMFuncParaBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFuncParaEN.dataTypeId) == false &&
    GetStrLen(pobjCMFuncParaEN.dataTypeId) > 2
  ) {
    throw new Error(
      '(errid:Watl000413)字段[数据类型Id(dataTypeId)]的长度不能超过2(In CM函数参数(CMFuncPara))!值:$(pobjCMFuncParaEN.dataTypeId)(clsCMFuncParaBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFuncParaEN.parameterTypeFullName) == false &&
    GetStrLen(pobjCMFuncParaEN.parameterTypeFullName) > 500
  ) {
    throw new Error(
      '(errid:Watl000413)字段[参数类型全名(parameterTypeFullName)]的长度不能超过500(In CM函数参数(CMFuncPara))!值:$(pobjCMFuncParaEN.parameterTypeFullName)(clsCMFuncParaBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFuncParaEN.paraCnName) == false &&
    GetStrLen(pobjCMFuncParaEN.paraCnName) > 50
  ) {
    throw new Error(
      '(errid:Watl000413)字段[参数中文名(paraCnName)]的长度不能超过50(In CM函数参数(CMFuncPara))!值:$(pobjCMFuncParaEN.paraCnName)(clsCMFuncParaBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjCMFuncParaEN.prjId) == false && GetStrLen(pobjCMFuncParaEN.prjId) > 4) {
    throw new Error(
      '(errid:Watl000413)字段[工程ID(prjId)]的长度不能超过4(In CM函数参数(CMFuncPara))!值:$(pobjCMFuncParaEN.prjId)(clsCMFuncParaBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFuncParaEN.updDate) == false &&
    GetStrLen(pobjCMFuncParaEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In CM函数参数(CMFuncPara))!值:$(pobjCMFuncParaEN.updDate)(clsCMFuncParaBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFuncParaEN.updUser) == false &&
    GetStrLen(pobjCMFuncParaEN.updUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改者(updUser)]的长度不能超过20(In CM函数参数(CMFuncPara))!值:$(pobjCMFuncParaEN.updUser)(clsCMFuncParaBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjCMFuncParaEN.memo) == false && GetStrLen(pobjCMFuncParaEN.memo) > 1000) {
    throw new Error(
      '(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In CM函数参数(CMFuncPara))!值:$(pobjCMFuncParaEN.memo)(clsCMFuncParaBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjCMFuncParaEN.cmFuncParaId) == false &&
    undefined !== pobjCMFuncParaEN.cmFuncParaId &&
    tzDataType.isString(pobjCMFuncParaEN.cmFuncParaId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[函数参数Id(cmFuncParaId)]的值:[$(pobjCMFuncParaEN.cmFuncParaId)], 非法,应该为字符型(In CM函数参数(CMFuncPara))!(clsCMFuncParaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFuncParaEN.paraName) == false &&
    undefined !== pobjCMFuncParaEN.paraName &&
    tzDataType.isString(pobjCMFuncParaEN.paraName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[参数名(paraName)]的值:[$(pobjCMFuncParaEN.paraName)], 非法,应该为字符型(In CM函数参数(CMFuncPara))!(clsCMFuncParaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFuncParaEN.paraComments) == false &&
    undefined !== pobjCMFuncParaEN.paraComments &&
    tzDataType.isString(pobjCMFuncParaEN.paraComments) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[参数注释(paraComments)]的值:[$(pobjCMFuncParaEN.paraComments)], 非法,应该为字符型(In CM函数参数(CMFuncPara))!(clsCMFuncParaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFuncParaEN.parameterType) == false &&
    undefined !== pobjCMFuncParaEN.parameterType &&
    tzDataType.isString(pobjCMFuncParaEN.parameterType) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[参数类型(parameterType)]的值:[$(pobjCMFuncParaEN.parameterType)], 非法,应该为字符型(In CM函数参数(CMFuncPara))!(clsCMFuncParaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFuncParaEN.dataTypeId) == false &&
    undefined !== pobjCMFuncParaEN.dataTypeId &&
    tzDataType.isString(pobjCMFuncParaEN.dataTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[数据类型Id(dataTypeId)]的值:[$(pobjCMFuncParaEN.dataTypeId)], 非法,应该为字符型(In CM函数参数(CMFuncPara))!(clsCMFuncParaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFuncParaEN.parameterTypeFullName) == false &&
    undefined !== pobjCMFuncParaEN.parameterTypeFullName &&
    tzDataType.isString(pobjCMFuncParaEN.parameterTypeFullName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[参数类型全名(parameterTypeFullName)]的值:[$(pobjCMFuncParaEN.parameterTypeFullName)], 非法,应该为字符型(In CM函数参数(CMFuncPara))!(clsCMFuncParaBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjCMFuncParaEN.isByRef &&
    undefined !== pobjCMFuncParaEN.isByRef &&
    tzDataType.isBoolean(pobjCMFuncParaEN.isByRef) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否引用型参数(isByRef)]的值:[$(pobjCMFuncParaEN.isByRef)], 非法,应该为布尔型(In CM函数参数(CMFuncPara))!(clsCMFuncParaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFuncParaEN.paraCnName) == false &&
    undefined !== pobjCMFuncParaEN.paraCnName &&
    tzDataType.isString(pobjCMFuncParaEN.paraCnName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[参数中文名(paraCnName)]的值:[$(pobjCMFuncParaEN.paraCnName)], 非法,应该为字符型(In CM函数参数(CMFuncPara))!(clsCMFuncParaBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjCMFuncParaEN.isKnownType &&
    undefined !== pobjCMFuncParaEN.isKnownType &&
    tzDataType.isBoolean(pobjCMFuncParaEN.isKnownType) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否已知类型(isKnownType)]的值:[$(pobjCMFuncParaEN.isKnownType)], 非法,应该为布尔型(In CM函数参数(CMFuncPara))!(clsCMFuncParaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFuncParaEN.prjId) == false &&
    undefined !== pobjCMFuncParaEN.prjId &&
    tzDataType.isString(pobjCMFuncParaEN.prjId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[工程ID(prjId)]的值:[$(pobjCMFuncParaEN.prjId)], 非法,应该为字符型(In CM函数参数(CMFuncPara))!(clsCMFuncParaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFuncParaEN.updDate) == false &&
    undefined !== pobjCMFuncParaEN.updDate &&
    tzDataType.isString(pobjCMFuncParaEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjCMFuncParaEN.updDate)], 非法,应该为字符型(In CM函数参数(CMFuncPara))!(clsCMFuncParaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFuncParaEN.updUser) == false &&
    undefined !== pobjCMFuncParaEN.updUser &&
    tzDataType.isString(pobjCMFuncParaEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改者(updUser)]的值:[$(pobjCMFuncParaEN.updUser)], 非法,应该为字符型(In CM函数参数(CMFuncPara))!(clsCMFuncParaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFuncParaEN.memo) == false &&
    undefined !== pobjCMFuncParaEN.memo &&
    tzDataType.isString(pobjCMFuncParaEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[说明(memo)]的值:[$(pobjCMFuncParaEN.memo)], 非法,应该为字符型(In CM函数参数(CMFuncPara))!(clsCMFuncParaBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function CMFuncPara_CheckProperty4Update(pobjCMFuncParaEN: clsCMFuncParaEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjCMFuncParaEN.cmFuncParaId) == false &&
    GetStrLen(pobjCMFuncParaEN.cmFuncParaId) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[函数参数Id(cmFuncParaId)]的长度不能超过8(In CM函数参数(CMFuncPara))!值:$(pobjCMFuncParaEN.cmFuncParaId)(clsCMFuncParaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFuncParaEN.paraName) == false &&
    GetStrLen(pobjCMFuncParaEN.paraName) > 50
  ) {
    throw new Error(
      '(errid:Watl000416)字段[参数名(paraName)]的长度不能超过50(In CM函数参数(CMFuncPara))!值:$(pobjCMFuncParaEN.paraName)(clsCMFuncParaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFuncParaEN.paraComments) == false &&
    GetStrLen(pobjCMFuncParaEN.paraComments) > 500
  ) {
    throw new Error(
      '(errid:Watl000416)字段[参数注释(paraComments)]的长度不能超过500(In CM函数参数(CMFuncPara))!值:$(pobjCMFuncParaEN.paraComments)(clsCMFuncParaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFuncParaEN.parameterType) == false &&
    GetStrLen(pobjCMFuncParaEN.parameterType) > 100
  ) {
    throw new Error(
      '(errid:Watl000416)字段[参数类型(parameterType)]的长度不能超过100(In CM函数参数(CMFuncPara))!值:$(pobjCMFuncParaEN.parameterType)(clsCMFuncParaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFuncParaEN.dataTypeId) == false &&
    GetStrLen(pobjCMFuncParaEN.dataTypeId) > 2
  ) {
    throw new Error(
      '(errid:Watl000416)字段[数据类型Id(dataTypeId)]的长度不能超过2(In CM函数参数(CMFuncPara))!值:$(pobjCMFuncParaEN.dataTypeId)(clsCMFuncParaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFuncParaEN.parameterTypeFullName) == false &&
    GetStrLen(pobjCMFuncParaEN.parameterTypeFullName) > 500
  ) {
    throw new Error(
      '(errid:Watl000416)字段[参数类型全名(parameterTypeFullName)]的长度不能超过500(In CM函数参数(CMFuncPara))!值:$(pobjCMFuncParaEN.parameterTypeFullName)(clsCMFuncParaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFuncParaEN.paraCnName) == false &&
    GetStrLen(pobjCMFuncParaEN.paraCnName) > 50
  ) {
    throw new Error(
      '(errid:Watl000416)字段[参数中文名(paraCnName)]的长度不能超过50(In CM函数参数(CMFuncPara))!值:$(pobjCMFuncParaEN.paraCnName)(clsCMFuncParaBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjCMFuncParaEN.prjId) == false && GetStrLen(pobjCMFuncParaEN.prjId) > 4) {
    throw new Error(
      '(errid:Watl000416)字段[工程ID(prjId)]的长度不能超过4(In CM函数参数(CMFuncPara))!值:$(pobjCMFuncParaEN.prjId)(clsCMFuncParaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFuncParaEN.updDate) == false &&
    GetStrLen(pobjCMFuncParaEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In CM函数参数(CMFuncPara))!值:$(pobjCMFuncParaEN.updDate)(clsCMFuncParaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFuncParaEN.updUser) == false &&
    GetStrLen(pobjCMFuncParaEN.updUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改者(updUser)]的长度不能超过20(In CM函数参数(CMFuncPara))!值:$(pobjCMFuncParaEN.updUser)(clsCMFuncParaBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjCMFuncParaEN.memo) == false && GetStrLen(pobjCMFuncParaEN.memo) > 1000) {
    throw new Error(
      '(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In CM函数参数(CMFuncPara))!值:$(pobjCMFuncParaEN.memo)(clsCMFuncParaBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjCMFuncParaEN.cmFuncParaId) == false &&
    undefined !== pobjCMFuncParaEN.cmFuncParaId &&
    tzDataType.isString(pobjCMFuncParaEN.cmFuncParaId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[函数参数Id(cmFuncParaId)]的值:[$(pobjCMFuncParaEN.cmFuncParaId)], 非法,应该为字符型(In CM函数参数(CMFuncPara))!(clsCMFuncParaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFuncParaEN.paraName) == false &&
    undefined !== pobjCMFuncParaEN.paraName &&
    tzDataType.isString(pobjCMFuncParaEN.paraName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[参数名(paraName)]的值:[$(pobjCMFuncParaEN.paraName)], 非法,应该为字符型(In CM函数参数(CMFuncPara))!(clsCMFuncParaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFuncParaEN.paraComments) == false &&
    undefined !== pobjCMFuncParaEN.paraComments &&
    tzDataType.isString(pobjCMFuncParaEN.paraComments) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[参数注释(paraComments)]的值:[$(pobjCMFuncParaEN.paraComments)], 非法,应该为字符型(In CM函数参数(CMFuncPara))!(clsCMFuncParaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFuncParaEN.parameterType) == false &&
    undefined !== pobjCMFuncParaEN.parameterType &&
    tzDataType.isString(pobjCMFuncParaEN.parameterType) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[参数类型(parameterType)]的值:[$(pobjCMFuncParaEN.parameterType)], 非法,应该为字符型(In CM函数参数(CMFuncPara))!(clsCMFuncParaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFuncParaEN.dataTypeId) == false &&
    undefined !== pobjCMFuncParaEN.dataTypeId &&
    tzDataType.isString(pobjCMFuncParaEN.dataTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[数据类型Id(dataTypeId)]的值:[$(pobjCMFuncParaEN.dataTypeId)], 非法,应该为字符型(In CM函数参数(CMFuncPara))!(clsCMFuncParaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFuncParaEN.parameterTypeFullName) == false &&
    undefined !== pobjCMFuncParaEN.parameterTypeFullName &&
    tzDataType.isString(pobjCMFuncParaEN.parameterTypeFullName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[参数类型全名(parameterTypeFullName)]的值:[$(pobjCMFuncParaEN.parameterTypeFullName)], 非法,应该为字符型(In CM函数参数(CMFuncPara))!(clsCMFuncParaBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjCMFuncParaEN.isByRef &&
    undefined !== pobjCMFuncParaEN.isByRef &&
    tzDataType.isBoolean(pobjCMFuncParaEN.isByRef) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否引用型参数(isByRef)]的值:[$(pobjCMFuncParaEN.isByRef)], 非法,应该为布尔型(In CM函数参数(CMFuncPara))!(clsCMFuncParaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFuncParaEN.paraCnName) == false &&
    undefined !== pobjCMFuncParaEN.paraCnName &&
    tzDataType.isString(pobjCMFuncParaEN.paraCnName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[参数中文名(paraCnName)]的值:[$(pobjCMFuncParaEN.paraCnName)], 非法,应该为字符型(In CM函数参数(CMFuncPara))!(clsCMFuncParaBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjCMFuncParaEN.isKnownType &&
    undefined !== pobjCMFuncParaEN.isKnownType &&
    tzDataType.isBoolean(pobjCMFuncParaEN.isKnownType) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否已知类型(isKnownType)]的值:[$(pobjCMFuncParaEN.isKnownType)], 非法,应该为布尔型(In CM函数参数(CMFuncPara))!(clsCMFuncParaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFuncParaEN.prjId) == false &&
    undefined !== pobjCMFuncParaEN.prjId &&
    tzDataType.isString(pobjCMFuncParaEN.prjId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[工程ID(prjId)]的值:[$(pobjCMFuncParaEN.prjId)], 非法,应该为字符型(In CM函数参数(CMFuncPara))!(clsCMFuncParaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFuncParaEN.updDate) == false &&
    undefined !== pobjCMFuncParaEN.updDate &&
    tzDataType.isString(pobjCMFuncParaEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjCMFuncParaEN.updDate)], 非法,应该为字符型(In CM函数参数(CMFuncPara))!(clsCMFuncParaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFuncParaEN.updUser) == false &&
    undefined !== pobjCMFuncParaEN.updUser &&
    tzDataType.isString(pobjCMFuncParaEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改者(updUser)]的值:[$(pobjCMFuncParaEN.updUser)], 非法,应该为字符型(In CM函数参数(CMFuncPara))!(clsCMFuncParaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFuncParaEN.memo) == false &&
    undefined !== pobjCMFuncParaEN.memo &&
    tzDataType.isString(pobjCMFuncParaEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[说明(memo)]的值:[$(pobjCMFuncParaEN.memo)], 非法,应该为字符型(In CM函数参数(CMFuncPara))!(clsCMFuncParaBL:CheckProperty4Update)',
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
export function CMFuncPara_GetJSONStrByObj(pobjCMFuncParaEN: clsCMFuncParaEN): string {
  pobjCMFuncParaEN.sfUpdFldSetStr = pobjCMFuncParaEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjCMFuncParaEN);
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
export function CMFuncPara_GetObjLstByJSONStr(strJSON: string): Array<clsCMFuncParaEN> {
  let arrCMFuncParaObjLst = new Array<clsCMFuncParaEN>();
  if (strJSON === '') {
    return arrCMFuncParaObjLst;
  }
  try {
    arrCMFuncParaObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrCMFuncParaObjLst;
  }
  return arrCMFuncParaObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrCMFuncParaObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function CMFuncPara_GetObjLstByJSONObjLst(
  arrCMFuncParaObjLstS: Array<clsCMFuncParaEN>,
): Array<clsCMFuncParaEN> {
  const arrCMFuncParaObjLst = new Array<clsCMFuncParaEN>();
  for (const objInFor of arrCMFuncParaObjLstS) {
    const obj1 = CMFuncPara_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrCMFuncParaObjLst.push(obj1);
  }
  return arrCMFuncParaObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function CMFuncPara_GetObjByJSONStr(strJSON: string): clsCMFuncParaEN {
  let pobjCMFuncParaEN = new clsCMFuncParaEN();
  if (strJSON === '') {
    return pobjCMFuncParaEN;
  }
  try {
    pobjCMFuncParaEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjCMFuncParaEN;
  }
  return pobjCMFuncParaEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function CMFuncPara_GetCombineCondition(objCMFuncParaCond: clsCMFuncParaEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objCMFuncParaCond.dicFldComparisonOp,
      clsCMFuncParaEN.con_CmFuncParaId,
    ) == true
  ) {
    const strComparisonOpCmFuncParaId: string =
      objCMFuncParaCond.dicFldComparisonOp[clsCMFuncParaEN.con_CmFuncParaId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMFuncParaEN.con_CmFuncParaId,
      objCMFuncParaCond.cmFuncParaId,
      strComparisonOpCmFuncParaId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMFuncParaCond.dicFldComparisonOp,
      clsCMFuncParaEN.con_ParaName,
    ) == true
  ) {
    const strComparisonOpParaName: string =
      objCMFuncParaCond.dicFldComparisonOp[clsCMFuncParaEN.con_ParaName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMFuncParaEN.con_ParaName,
      objCMFuncParaCond.paraName,
      strComparisonOpParaName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMFuncParaCond.dicFldComparisonOp,
      clsCMFuncParaEN.con_ParaComments,
    ) == true
  ) {
    const strComparisonOpParaComments: string =
      objCMFuncParaCond.dicFldComparisonOp[clsCMFuncParaEN.con_ParaComments];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMFuncParaEN.con_ParaComments,
      objCMFuncParaCond.paraComments,
      strComparisonOpParaComments,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMFuncParaCond.dicFldComparisonOp,
      clsCMFuncParaEN.con_ParameterType,
    ) == true
  ) {
    const strComparisonOpParameterType: string =
      objCMFuncParaCond.dicFldComparisonOp[clsCMFuncParaEN.con_ParameterType];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMFuncParaEN.con_ParameterType,
      objCMFuncParaCond.parameterType,
      strComparisonOpParameterType,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMFuncParaCond.dicFldComparisonOp,
      clsCMFuncParaEN.con_DataTypeId,
    ) == true
  ) {
    const strComparisonOpDataTypeId: string =
      objCMFuncParaCond.dicFldComparisonOp[clsCMFuncParaEN.con_DataTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMFuncParaEN.con_DataTypeId,
      objCMFuncParaCond.dataTypeId,
      strComparisonOpDataTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMFuncParaCond.dicFldComparisonOp,
      clsCMFuncParaEN.con_ParameterTypeFullName,
    ) == true
  ) {
    const strComparisonOpParameterTypeFullName: string =
      objCMFuncParaCond.dicFldComparisonOp[clsCMFuncParaEN.con_ParameterTypeFullName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMFuncParaEN.con_ParameterTypeFullName,
      objCMFuncParaCond.parameterTypeFullName,
      strComparisonOpParameterTypeFullName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMFuncParaCond.dicFldComparisonOp,
      clsCMFuncParaEN.con_IsByRef,
    ) == true
  ) {
    if (objCMFuncParaCond.isByRef == true) {
      strWhereCond += Format(" And {0} = '1'", clsCMFuncParaEN.con_IsByRef);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsCMFuncParaEN.con_IsByRef);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMFuncParaCond.dicFldComparisonOp,
      clsCMFuncParaEN.con_ParaCnName,
    ) == true
  ) {
    const strComparisonOpParaCnName: string =
      objCMFuncParaCond.dicFldComparisonOp[clsCMFuncParaEN.con_ParaCnName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMFuncParaEN.con_ParaCnName,
      objCMFuncParaCond.paraCnName,
      strComparisonOpParaCnName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMFuncParaCond.dicFldComparisonOp,
      clsCMFuncParaEN.con_IsKnownType,
    ) == true
  ) {
    if (objCMFuncParaCond.isKnownType == true) {
      strWhereCond += Format(" And {0} = '1'", clsCMFuncParaEN.con_IsKnownType);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsCMFuncParaEN.con_IsKnownType);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMFuncParaCond.dicFldComparisonOp,
      clsCMFuncParaEN.con_PrjId,
    ) == true
  ) {
    const strComparisonOpPrjId: string =
      objCMFuncParaCond.dicFldComparisonOp[clsCMFuncParaEN.con_PrjId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMFuncParaEN.con_PrjId,
      objCMFuncParaCond.prjId,
      strComparisonOpPrjId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMFuncParaCond.dicFldComparisonOp,
      clsCMFuncParaEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objCMFuncParaCond.dicFldComparisonOp[clsCMFuncParaEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMFuncParaEN.con_UpdDate,
      objCMFuncParaCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMFuncParaCond.dicFldComparisonOp,
      clsCMFuncParaEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objCMFuncParaCond.dicFldComparisonOp[clsCMFuncParaEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMFuncParaEN.con_UpdUser,
      objCMFuncParaCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMFuncParaCond.dicFldComparisonOp,
      clsCMFuncParaEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objCMFuncParaCond.dicFldComparisonOp[clsCMFuncParaEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMFuncParaEN.con_Memo,
      objCMFuncParaCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--CMFuncPara(CM函数参数),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strParaName: 参数名(要求唯一的字段)
 * @param strDataTypeId: 数据类型Id(要求唯一的字段)
 * @param strParameterType: 参数类型(要求唯一的字段)
 * @param strPrjId: 工程ID(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function CMFuncPara_GetUniCondStr(objCMFuncParaEN: clsCMFuncParaEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and ParaName = '{0}'", objCMFuncParaEN.paraName);
  strWhereCond += Format(" and DataTypeId = '{0}'", objCMFuncParaEN.dataTypeId);
  strWhereCond += Format(" and ParameterType = '{0}'", objCMFuncParaEN.parameterType);
  strWhereCond += Format(" and PrjId = '{0}'", objCMFuncParaEN.prjId);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--CMFuncPara(CM函数参数),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strParaName: 参数名(要求唯一的字段)
 * @param strDataTypeId: 数据类型Id(要求唯一的字段)
 * @param strParameterType: 参数类型(要求唯一的字段)
 * @param strPrjId: 工程ID(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function CMFuncPara_GetUniCondStr4Update(objCMFuncParaEN: clsCMFuncParaEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and CmFuncParaId <> '{0}'", objCMFuncParaEN.cmFuncParaId);
  strWhereCond += Format(" and ParaName = '{0}'", objCMFuncParaEN.paraName);
  strWhereCond += Format(" and DataTypeId = '{0}'", objCMFuncParaEN.dataTypeId);
  strWhereCond += Format(" and ParameterType = '{0}'", objCMFuncParaEN.parameterType);
  strWhereCond += Format(" and PrjId = '{0}'", objCMFuncParaEN.prjId);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objCMFuncParaENS:源对象
 * @param objCMFuncParaENT:目标对象
 */
export function CMFuncPara_GetObjFromJsonObj(objCMFuncParaENS: clsCMFuncParaEN): clsCMFuncParaEN {
  const objCMFuncParaENT: clsCMFuncParaEN = new clsCMFuncParaEN();
  ObjectAssign(objCMFuncParaENT, objCMFuncParaENS);
  return objCMFuncParaENT;
}
