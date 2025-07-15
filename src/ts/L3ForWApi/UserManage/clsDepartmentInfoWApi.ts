/**
 * 类名:clsDepartmentInfoWApi
 * 表名:DepartmentInfo(00050029)
 * 版本:2023.10.12.1(服务器:WIN-SRV103-116)
 * 日期:2023/10/12 14:41:37
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:用户管理(UserManage)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 部门(DepartmentInfo)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2023年10月12日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty, GetStrLen, tzDataType, Format } from '@/ts/PubFun/clsString';
import {
  BindDdl_ObjLstInDivObj,
  GetExceptionStr,
  myShowErrorMsg,
  ObjectAssign,
} from '@/ts/PubFun/clsCommFunc4Web';
import { clsDepartmentInfoEN } from '@/ts/L0Entity/UserManage/clsDepartmentInfoEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const departmentInfo_Controller = 'DepartmentInfoApi';
export const departmentInfo_ConstructorName = 'departmentInfo';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strDepartmentId:关键字
 * @returns 对象
 **/
export async function DepartmentInfo_GetObjByDepartmentIdAsync(
  strDepartmentId: string,
): Promise<clsDepartmentInfoEN | null> {
  const strThisFuncName = 'GetObjByDepartmentIdAsync';

  if (IsNullOrEmpty(strDepartmentId) == true) {
    const strMsg = Format(
      '参数:[strDepartmentId]不能为空!(In clsDepartmentInfoWApi.GetObjByDepartmentIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByDepartmentId';
  const strUrl = GetWebApiUrl(departmentInfo_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strDepartmentId,
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
      const objDepartmentInfo = DepartmentInfo_GetObjFromJsonObj(returnObj);
      return objDepartmentInfo;
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
        departmentInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        departmentInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[GetObjByDepartmentIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )
//该表没有使用Cache,不需要生成[GetObjByDepartmentIdlocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[UpdateObjInLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache
//该表没有使用Cache,不需要生成[GetNameByDepartmentIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
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
export function DepartmentInfo_SortFunDefa(a: clsDepartmentInfoEN, b: clsDepartmentInfoEN): number {
  return a.departmentId.localeCompare(b.departmentId);
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
export function DepartmentInfo_SortFunDefa2Fld(
  a: clsDepartmentInfoEN,
  b: clsDepartmentInfoEN,
): number {
  if (a.departmentName == b.departmentName)
    return a.departmentAbbrName.localeCompare(b.departmentAbbrName);
  else return a.departmentName.localeCompare(b.departmentName);
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
export function DepartmentInfo_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsDepartmentInfoEN.con_DepartmentId:
        return (a: clsDepartmentInfoEN, b: clsDepartmentInfoEN) => {
          return a.departmentId.localeCompare(b.departmentId);
        };
      case clsDepartmentInfoEN.con_DepartmentName:
        return (a: clsDepartmentInfoEN, b: clsDepartmentInfoEN) => {
          return a.departmentName.localeCompare(b.departmentName);
        };
      case clsDepartmentInfoEN.con_DepartmentAbbrName:
        return (a: clsDepartmentInfoEN, b: clsDepartmentInfoEN) => {
          if (a.departmentAbbrName == null) return -1;
          if (b.departmentAbbrName == null) return 1;
          return a.departmentAbbrName.localeCompare(b.departmentAbbrName);
        };
      case clsDepartmentInfoEN.con_DepartmentTypeId:
        return (a: clsDepartmentInfoEN, b: clsDepartmentInfoEN) => {
          if (a.departmentTypeId == null) return -1;
          if (b.departmentTypeId == null) return 1;
          return a.departmentTypeId.localeCompare(b.departmentTypeId);
        };
      case clsDepartmentInfoEN.con_UpDepartmentId:
        return (a: clsDepartmentInfoEN, b: clsDepartmentInfoEN) => {
          if (a.upDepartmentId == null) return -1;
          if (b.upDepartmentId == null) return 1;
          return a.upDepartmentId.localeCompare(b.upDepartmentId);
        };
      case clsDepartmentInfoEN.con_InUse:
        return (a: clsDepartmentInfoEN) => {
          if (a.inUse == true) return 1;
          else return -1;
        };
      case clsDepartmentInfoEN.con_OrderNum:
        return (a: clsDepartmentInfoEN, b: clsDepartmentInfoEN) => {
          return a.orderNum - b.orderNum;
        };
      case clsDepartmentInfoEN.con_Memo:
        return (a: clsDepartmentInfoEN, b: clsDepartmentInfoEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[DepartmentInfo]中不存在!(in ${departmentInfo_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsDepartmentInfoEN.con_DepartmentId:
        return (a: clsDepartmentInfoEN, b: clsDepartmentInfoEN) => {
          return b.departmentId.localeCompare(a.departmentId);
        };
      case clsDepartmentInfoEN.con_DepartmentName:
        return (a: clsDepartmentInfoEN, b: clsDepartmentInfoEN) => {
          return b.departmentName.localeCompare(a.departmentName);
        };
      case clsDepartmentInfoEN.con_DepartmentAbbrName:
        return (a: clsDepartmentInfoEN, b: clsDepartmentInfoEN) => {
          if (b.departmentAbbrName == null) return -1;
          if (a.departmentAbbrName == null) return 1;
          return b.departmentAbbrName.localeCompare(a.departmentAbbrName);
        };
      case clsDepartmentInfoEN.con_DepartmentTypeId:
        return (a: clsDepartmentInfoEN, b: clsDepartmentInfoEN) => {
          if (b.departmentTypeId == null) return -1;
          if (a.departmentTypeId == null) return 1;
          return b.departmentTypeId.localeCompare(a.departmentTypeId);
        };
      case clsDepartmentInfoEN.con_UpDepartmentId:
        return (a: clsDepartmentInfoEN, b: clsDepartmentInfoEN) => {
          if (b.upDepartmentId == null) return -1;
          if (a.upDepartmentId == null) return 1;
          return b.upDepartmentId.localeCompare(a.upDepartmentId);
        };
      case clsDepartmentInfoEN.con_InUse:
        return (b: clsDepartmentInfoEN) => {
          if (b.inUse == true) return 1;
          else return -1;
        };
      case clsDepartmentInfoEN.con_OrderNum:
        return (a: clsDepartmentInfoEN, b: clsDepartmentInfoEN) => {
          return b.orderNum - a.orderNum;
        };
      case clsDepartmentInfoEN.con_Memo:
        return (a: clsDepartmentInfoEN, b: clsDepartmentInfoEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[DepartmentInfo]中不存在!(in ${departmentInfo_ConstructorName}.${strThisFuncName})`;
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
export async function DepartmentInfo_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsDepartmentInfoEN.con_DepartmentId:
      return (obj: clsDepartmentInfoEN) => {
        return obj.departmentId === value;
      };
    case clsDepartmentInfoEN.con_DepartmentName:
      return (obj: clsDepartmentInfoEN) => {
        return obj.departmentName === value;
      };
    case clsDepartmentInfoEN.con_DepartmentAbbrName:
      return (obj: clsDepartmentInfoEN) => {
        return obj.departmentAbbrName === value;
      };
    case clsDepartmentInfoEN.con_DepartmentTypeId:
      return (obj: clsDepartmentInfoEN) => {
        return obj.departmentTypeId === value;
      };
    case clsDepartmentInfoEN.con_UpDepartmentId:
      return (obj: clsDepartmentInfoEN) => {
        return obj.upDepartmentId === value;
      };
    case clsDepartmentInfoEN.con_InUse:
      return (obj: clsDepartmentInfoEN) => {
        return obj.inUse === value;
      };
    case clsDepartmentInfoEN.con_OrderNum:
      return (obj: clsDepartmentInfoEN) => {
        return obj.orderNum === value;
      };
    case clsDepartmentInfoEN.con_Memo:
      return (obj: clsDepartmentInfoEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[DepartmentInfo]中不存在!(in ${departmentInfo_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}
//该表没有使用Cache,不需要生成[DepartmentInfo__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function DepartmentInfo_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(departmentInfo_Controller, strAction);

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
        departmentInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        departmentInfo_ConstructorName,
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
export async function DepartmentInfo_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(departmentInfo_Controller, strAction);

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
        departmentInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        departmentInfo_ConstructorName,
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
export async function DepartmentInfo_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsDepartmentInfoEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(departmentInfo_Controller, strAction);

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
      const objDepartmentInfo = DepartmentInfo_GetObjFromJsonObj(returnObj);
      return objDepartmentInfo;
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
        departmentInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        departmentInfo_ConstructorName,
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
export async function DepartmentInfo_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsDepartmentInfoEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(departmentInfo_Controller, strAction);

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
          departmentInfo_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = DepartmentInfo_GetObjLstByJSONObjLst(returnObjLst);
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
        departmentInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        departmentInfo_ConstructorName,
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
 * @param arrDepartmentId:关键字列表
 * @returns 对象列表
 **/
export async function DepartmentInfo_GetObjLstByDepartmentIdLstAsync(
  arrDepartmentId: Array<string>,
): Promise<Array<clsDepartmentInfoEN>> {
  const strThisFuncName = 'GetObjLstByDepartmentIdLstAsync';
  const strAction = 'GetObjLstByDepartmentIdLst';
  const strUrl = GetWebApiUrl(departmentInfo_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrDepartmentId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          departmentInfo_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = DepartmentInfo_GetObjLstByJSONObjLst(returnObjLst);
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
        departmentInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        departmentInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[GetObjLstByDepartmentIdLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

/**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export async function DepartmentInfo_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsDepartmentInfoEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(departmentInfo_Controller, strAction);

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
          departmentInfo_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = DepartmentInfo_GetObjLstByJSONObjLst(returnObjLst);
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
        departmentInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        departmentInfo_ConstructorName,
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
export async function DepartmentInfo_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsDepartmentInfoEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(departmentInfo_Controller, strAction);

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
          departmentInfo_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = DepartmentInfo_GetObjLstByJSONObjLst(returnObjLst);
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
        departmentInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        departmentInfo_ConstructorName,
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
export async function DepartmentInfo_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsDepartmentInfoEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsDepartmentInfoEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(departmentInfo_Controller, strAction);

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
          departmentInfo_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = DepartmentInfo_GetObjLstByJSONObjLst(returnObjLst);
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
        departmentInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        departmentInfo_ConstructorName,
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
 * @param strDepartmentId:关键字
 * @returns 获取删除的结果
 **/
export async function DepartmentInfo_DelRecordAsync(strDepartmentId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(departmentInfo_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strDepartmentId);

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
        departmentInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        departmentInfo_ConstructorName,
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
 * @param arrDepartmentId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function DepartmentInfo_DelDepartmentInfosAsync(
  arrDepartmentId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelDepartmentInfosAsync';
  const strAction = 'DelDepartmentInfos';
  const strUrl = GetWebApiUrl(departmentInfo_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrDepartmentId, config);
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
        departmentInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        departmentInfo_ConstructorName,
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
export async function DepartmentInfo_DelDepartmentInfosByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelDepartmentInfosByCondAsync';
  const strAction = 'DelDepartmentInfosByCond';
  const strUrl = GetWebApiUrl(departmentInfo_Controller, strAction);

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
        departmentInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        departmentInfo_ConstructorName,
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
 * @param objDepartmentInfoEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function DepartmentInfo_AddNewRecordAsync(
  objDepartmentInfoEN: clsDepartmentInfoEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  if (objDepartmentInfoEN.departmentId === null || objDepartmentInfoEN.departmentId === '') {
    const strMsg = '需要的对象的关键字为空,不能添加!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objDepartmentInfoEN);
  const strUrl = GetWebApiUrl(departmentInfo_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objDepartmentInfoEN, config);
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
        departmentInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        departmentInfo_ConstructorName,
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
 * @param objDepartmentInfoEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function DepartmentInfo_AddNewRecordWithMaxIdAsync(
  objDepartmentInfoEN: clsDepartmentInfoEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(departmentInfo_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objDepartmentInfoEN, config);
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
        departmentInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        departmentInfo_ConstructorName,
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
 * @param objDepartmentInfoEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function DepartmentInfo_AddNewRecordWithReturnKeyAsync(
  objDepartmentInfoEN: clsDepartmentInfoEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(departmentInfo_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objDepartmentInfoEN, config);
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
        departmentInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        departmentInfo_ConstructorName,
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
 * @param objDepartmentInfoEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function DepartmentInfo_UpdateRecordAsync(
  objDepartmentInfoEN: clsDepartmentInfoEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objDepartmentInfoEN.sfUpdFldSetStr === undefined ||
    objDepartmentInfoEN.sfUpdFldSetStr === null ||
    objDepartmentInfoEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objDepartmentInfoEN.departmentId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(departmentInfo_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objDepartmentInfoEN, config);
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
        departmentInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        departmentInfo_ConstructorName,
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
 * @param objDepartmentInfoEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function DepartmentInfo_UpdateWithConditionAsync(
  objDepartmentInfoEN: clsDepartmentInfoEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objDepartmentInfoEN.sfUpdFldSetStr === undefined ||
    objDepartmentInfoEN.sfUpdFldSetStr === null ||
    objDepartmentInfoEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objDepartmentInfoEN.departmentId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(departmentInfo_Controller, strAction);
  objDepartmentInfoEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objDepartmentInfoEN, config);
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
        departmentInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        departmentInfo_ConstructorName,
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
export async function DepartmentInfo_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(departmentInfo_Controller, strAction);

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
        departmentInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        departmentInfo_ConstructorName,
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
 * @param strDepartmentId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function DepartmentInfo_IsExistAsync(strDepartmentId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(departmentInfo_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strDepartmentId,
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
        departmentInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        departmentInfo_ConstructorName,
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
export async function DepartmentInfo_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(departmentInfo_Controller, strAction);

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
        departmentInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        departmentInfo_ConstructorName,
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
export async function DepartmentInfo_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(departmentInfo_Controller, strAction);

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
        departmentInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        departmentInfo_ConstructorName,
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
export function DepartmentInfo_GetWebApiUrl(strController: string, strAction: string): string {
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
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)
 * @param objDDL:需要绑定当前表的下拉框

*/
export async function DepartmentInfo_BindDdl_DepartmentIdInDiv(
  objDiv: HTMLDivElement,
  strDdlName: string,
) {
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_DepartmentIdInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_DepartmentIdInDivCache");
  const strCondition = `1=1`;
  const arrObjLstSel = await DepartmentInfo_GetObjLstAsync(strCondition);
  if (arrObjLstSel == null) return;
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsDepartmentInfoEN.con_DepartmentId,
    clsDepartmentInfoEN.con_DepartmentName,
    '部门',
  );
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function DepartmentInfo_CheckPropertyNew(pobjDepartmentInfoEN: clsDepartmentInfoEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjDepartmentInfoEN.departmentName) === true) {
    throw new Error(
      '(errid:Watl000411)字段[部门名称]不能为空(In 部门)!(clsDepartmentInfoBL:CheckPropertyNew0)',
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjDepartmentInfoEN.departmentId) == false &&
    GetStrLen(pobjDepartmentInfoEN.departmentId) > 6
  ) {
    throw new Error(
      '(errid:Watl000413)字段[部门ID(departmentId)]的长度不能超过6(In 部门(DepartmentInfo))!值:$(pobjDepartmentInfoEN.departmentId)(clsDepartmentInfoBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjDepartmentInfoEN.departmentName) == false &&
    GetStrLen(pobjDepartmentInfoEN.departmentName) > 30
  ) {
    throw new Error(
      '(errid:Watl000413)字段[部门名称(departmentName)]的长度不能超过30(In 部门(DepartmentInfo))!值:$(pobjDepartmentInfoEN.departmentName)(clsDepartmentInfoBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjDepartmentInfoEN.departmentAbbrName) == false &&
    GetStrLen(pobjDepartmentInfoEN.departmentAbbrName) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[部门简称(departmentAbbrName)]的长度不能超过8(In 部门(DepartmentInfo))!值:$(pobjDepartmentInfoEN.departmentAbbrName)(clsDepartmentInfoBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjDepartmentInfoEN.departmentTypeId) == false &&
    GetStrLen(pobjDepartmentInfoEN.departmentTypeId) > 2
  ) {
    throw new Error(
      '(errid:Watl000413)字段[部门类型Id(departmentTypeId)]的长度不能超过2(In 部门(DepartmentInfo))!值:$(pobjDepartmentInfoEN.departmentTypeId)(clsDepartmentInfoBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjDepartmentInfoEN.upDepartmentId) == false &&
    GetStrLen(pobjDepartmentInfoEN.upDepartmentId) > 6
  ) {
    throw new Error(
      '(errid:Watl000413)字段[上级部门Id(upDepartmentId)]的长度不能超过6(In 部门(DepartmentInfo))!值:$(pobjDepartmentInfoEN.upDepartmentId)(clsDepartmentInfoBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjDepartmentInfoEN.memo) == false &&
    GetStrLen(pobjDepartmentInfoEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In 部门(DepartmentInfo))!值:$(pobjDepartmentInfoEN.memo)(clsDepartmentInfoBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjDepartmentInfoEN.departmentId) == false &&
    undefined !== pobjDepartmentInfoEN.departmentId &&
    tzDataType.isString(pobjDepartmentInfoEN.departmentId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[部门ID(departmentId)]的值:[$(pobjDepartmentInfoEN.departmentId)], 非法,应该为字符型(In 部门(DepartmentInfo))!(clsDepartmentInfoBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjDepartmentInfoEN.departmentName) == false &&
    undefined !== pobjDepartmentInfoEN.departmentName &&
    tzDataType.isString(pobjDepartmentInfoEN.departmentName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[部门名称(departmentName)]的值:[$(pobjDepartmentInfoEN.departmentName)], 非法,应该为字符型(In 部门(DepartmentInfo))!(clsDepartmentInfoBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjDepartmentInfoEN.departmentAbbrName) == false &&
    undefined !== pobjDepartmentInfoEN.departmentAbbrName &&
    tzDataType.isString(pobjDepartmentInfoEN.departmentAbbrName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[部门简称(departmentAbbrName)]的值:[$(pobjDepartmentInfoEN.departmentAbbrName)], 非法,应该为字符型(In 部门(DepartmentInfo))!(clsDepartmentInfoBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjDepartmentInfoEN.departmentTypeId) == false &&
    undefined !== pobjDepartmentInfoEN.departmentTypeId &&
    tzDataType.isString(pobjDepartmentInfoEN.departmentTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[部门类型Id(departmentTypeId)]的值:[$(pobjDepartmentInfoEN.departmentTypeId)], 非法,应该为字符型(In 部门(DepartmentInfo))!(clsDepartmentInfoBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjDepartmentInfoEN.upDepartmentId) == false &&
    undefined !== pobjDepartmentInfoEN.upDepartmentId &&
    tzDataType.isString(pobjDepartmentInfoEN.upDepartmentId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[上级部门Id(upDepartmentId)]的值:[$(pobjDepartmentInfoEN.upDepartmentId)], 非法,应该为字符型(In 部门(DepartmentInfo))!(clsDepartmentInfoBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjDepartmentInfoEN.inUse &&
    undefined !== pobjDepartmentInfoEN.inUse &&
    tzDataType.isBoolean(pobjDepartmentInfoEN.inUse) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否在用(inUse)]的值:[$(pobjDepartmentInfoEN.inUse)], 非法,应该为布尔型(In 部门(DepartmentInfo))!(clsDepartmentInfoBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjDepartmentInfoEN.orderNum &&
    undefined !== pobjDepartmentInfoEN.orderNum &&
    tzDataType.isNumber(pobjDepartmentInfoEN.orderNum) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[序号(orderNum)]的值:[$(pobjDepartmentInfoEN.orderNum)], 非法,应该为数值型(In 部门(DepartmentInfo))!(clsDepartmentInfoBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjDepartmentInfoEN.memo) == false &&
    undefined !== pobjDepartmentInfoEN.memo &&
    tzDataType.isString(pobjDepartmentInfoEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[说明(memo)]的值:[$(pobjDepartmentInfoEN.memo)], 非法,应该为字符型(In 部门(DepartmentInfo))!(clsDepartmentInfoBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function DepartmentInfo_CheckProperty4Update(pobjDepartmentInfoEN: clsDepartmentInfoEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjDepartmentInfoEN.departmentId) == false &&
    GetStrLen(pobjDepartmentInfoEN.departmentId) > 6
  ) {
    throw new Error(
      '(errid:Watl000416)字段[部门ID(departmentId)]的长度不能超过6(In 部门(DepartmentInfo))!值:$(pobjDepartmentInfoEN.departmentId)(clsDepartmentInfoBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjDepartmentInfoEN.departmentName) == false &&
    GetStrLen(pobjDepartmentInfoEN.departmentName) > 30
  ) {
    throw new Error(
      '(errid:Watl000416)字段[部门名称(departmentName)]的长度不能超过30(In 部门(DepartmentInfo))!值:$(pobjDepartmentInfoEN.departmentName)(clsDepartmentInfoBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjDepartmentInfoEN.departmentAbbrName) == false &&
    GetStrLen(pobjDepartmentInfoEN.departmentAbbrName) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[部门简称(departmentAbbrName)]的长度不能超过8(In 部门(DepartmentInfo))!值:$(pobjDepartmentInfoEN.departmentAbbrName)(clsDepartmentInfoBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjDepartmentInfoEN.departmentTypeId) == false &&
    GetStrLen(pobjDepartmentInfoEN.departmentTypeId) > 2
  ) {
    throw new Error(
      '(errid:Watl000416)字段[部门类型Id(departmentTypeId)]的长度不能超过2(In 部门(DepartmentInfo))!值:$(pobjDepartmentInfoEN.departmentTypeId)(clsDepartmentInfoBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjDepartmentInfoEN.upDepartmentId) == false &&
    GetStrLen(pobjDepartmentInfoEN.upDepartmentId) > 6
  ) {
    throw new Error(
      '(errid:Watl000416)字段[上级部门Id(upDepartmentId)]的长度不能超过6(In 部门(DepartmentInfo))!值:$(pobjDepartmentInfoEN.upDepartmentId)(clsDepartmentInfoBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjDepartmentInfoEN.memo) == false &&
    GetStrLen(pobjDepartmentInfoEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In 部门(DepartmentInfo))!值:$(pobjDepartmentInfoEN.memo)(clsDepartmentInfoBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjDepartmentInfoEN.departmentId) == false &&
    undefined !== pobjDepartmentInfoEN.departmentId &&
    tzDataType.isString(pobjDepartmentInfoEN.departmentId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[部门ID(departmentId)]的值:[$(pobjDepartmentInfoEN.departmentId)], 非法,应该为字符型(In 部门(DepartmentInfo))!(clsDepartmentInfoBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjDepartmentInfoEN.departmentName) == false &&
    undefined !== pobjDepartmentInfoEN.departmentName &&
    tzDataType.isString(pobjDepartmentInfoEN.departmentName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[部门名称(departmentName)]的值:[$(pobjDepartmentInfoEN.departmentName)], 非法,应该为字符型(In 部门(DepartmentInfo))!(clsDepartmentInfoBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjDepartmentInfoEN.departmentAbbrName) == false &&
    undefined !== pobjDepartmentInfoEN.departmentAbbrName &&
    tzDataType.isString(pobjDepartmentInfoEN.departmentAbbrName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[部门简称(departmentAbbrName)]的值:[$(pobjDepartmentInfoEN.departmentAbbrName)], 非法,应该为字符型(In 部门(DepartmentInfo))!(clsDepartmentInfoBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjDepartmentInfoEN.departmentTypeId) == false &&
    undefined !== pobjDepartmentInfoEN.departmentTypeId &&
    tzDataType.isString(pobjDepartmentInfoEN.departmentTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[部门类型Id(departmentTypeId)]的值:[$(pobjDepartmentInfoEN.departmentTypeId)], 非法,应该为字符型(In 部门(DepartmentInfo))!(clsDepartmentInfoBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjDepartmentInfoEN.upDepartmentId) == false &&
    undefined !== pobjDepartmentInfoEN.upDepartmentId &&
    tzDataType.isString(pobjDepartmentInfoEN.upDepartmentId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[上级部门Id(upDepartmentId)]的值:[$(pobjDepartmentInfoEN.upDepartmentId)], 非法,应该为字符型(In 部门(DepartmentInfo))!(clsDepartmentInfoBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjDepartmentInfoEN.inUse &&
    undefined !== pobjDepartmentInfoEN.inUse &&
    tzDataType.isBoolean(pobjDepartmentInfoEN.inUse) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否在用(inUse)]的值:[$(pobjDepartmentInfoEN.inUse)], 非法,应该为布尔型(In 部门(DepartmentInfo))!(clsDepartmentInfoBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjDepartmentInfoEN.orderNum &&
    undefined !== pobjDepartmentInfoEN.orderNum &&
    tzDataType.isNumber(pobjDepartmentInfoEN.orderNum) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[序号(orderNum)]的值:[$(pobjDepartmentInfoEN.orderNum)], 非法,应该为数值型(In 部门(DepartmentInfo))!(clsDepartmentInfoBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjDepartmentInfoEN.memo) == false &&
    undefined !== pobjDepartmentInfoEN.memo &&
    tzDataType.isString(pobjDepartmentInfoEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[说明(memo)]的值:[$(pobjDepartmentInfoEN.memo)], 非法,应该为字符型(In 部门(DepartmentInfo))!(clsDepartmentInfoBL:CheckProperty4Update)',
    );
  }
  //检查主键是否为Null或者空!
  if (
    IsNullOrEmpty(pobjDepartmentInfoEN.departmentId) === true ||
    pobjDepartmentInfoEN.departmentId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000064)字段[部门ID]不能为空(In 部门)!(clsDepartmentInfoBL:CheckProperty4Update)',
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
export function DepartmentInfo_GetJSONStrByObj(pobjDepartmentInfoEN: clsDepartmentInfoEN): string {
  pobjDepartmentInfoEN.sfUpdFldSetStr = pobjDepartmentInfoEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjDepartmentInfoEN);
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
export function DepartmentInfo_GetObjLstByJSONStr(strJSON: string): Array<clsDepartmentInfoEN> {
  let arrDepartmentInfoObjLst = new Array<clsDepartmentInfoEN>();
  if (strJSON === '') {
    return arrDepartmentInfoObjLst;
  }
  try {
    arrDepartmentInfoObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrDepartmentInfoObjLst;
  }
  return arrDepartmentInfoObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrDepartmentInfoObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function DepartmentInfo_GetObjLstByJSONObjLst(
  arrDepartmentInfoObjLstS: Array<clsDepartmentInfoEN>,
): Array<clsDepartmentInfoEN> {
  const arrDepartmentInfoObjLst = new Array<clsDepartmentInfoEN>();
  for (const objInFor of arrDepartmentInfoObjLstS) {
    const obj1 = DepartmentInfo_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrDepartmentInfoObjLst.push(obj1);
  }
  return arrDepartmentInfoObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function DepartmentInfo_GetObjByJSONStr(strJSON: string): clsDepartmentInfoEN {
  let pobjDepartmentInfoEN = new clsDepartmentInfoEN();
  if (strJSON === '') {
    return pobjDepartmentInfoEN;
  }
  try {
    pobjDepartmentInfoEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjDepartmentInfoEN;
  }
  return pobjDepartmentInfoEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function DepartmentInfo_GetCombineCondition(
  objDepartmentInfoCond: clsDepartmentInfoEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objDepartmentInfoCond.dicFldComparisonOp,
      clsDepartmentInfoEN.con_DepartmentId,
    ) == true
  ) {
    const strComparisonOpDepartmentId: string =
      objDepartmentInfoCond.dicFldComparisonOp[clsDepartmentInfoEN.con_DepartmentId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDepartmentInfoEN.con_DepartmentId,
      objDepartmentInfoCond.departmentId,
      strComparisonOpDepartmentId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDepartmentInfoCond.dicFldComparisonOp,
      clsDepartmentInfoEN.con_DepartmentName,
    ) == true
  ) {
    const strComparisonOpDepartmentName: string =
      objDepartmentInfoCond.dicFldComparisonOp[clsDepartmentInfoEN.con_DepartmentName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDepartmentInfoEN.con_DepartmentName,
      objDepartmentInfoCond.departmentName,
      strComparisonOpDepartmentName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDepartmentInfoCond.dicFldComparisonOp,
      clsDepartmentInfoEN.con_DepartmentAbbrName,
    ) == true
  ) {
    const strComparisonOpDepartmentAbbrName: string =
      objDepartmentInfoCond.dicFldComparisonOp[clsDepartmentInfoEN.con_DepartmentAbbrName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDepartmentInfoEN.con_DepartmentAbbrName,
      objDepartmentInfoCond.departmentAbbrName,
      strComparisonOpDepartmentAbbrName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDepartmentInfoCond.dicFldComparisonOp,
      clsDepartmentInfoEN.con_DepartmentTypeId,
    ) == true
  ) {
    const strComparisonOpDepartmentTypeId: string =
      objDepartmentInfoCond.dicFldComparisonOp[clsDepartmentInfoEN.con_DepartmentTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDepartmentInfoEN.con_DepartmentTypeId,
      objDepartmentInfoCond.departmentTypeId,
      strComparisonOpDepartmentTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDepartmentInfoCond.dicFldComparisonOp,
      clsDepartmentInfoEN.con_UpDepartmentId,
    ) == true
  ) {
    const strComparisonOpUpDepartmentId: string =
      objDepartmentInfoCond.dicFldComparisonOp[clsDepartmentInfoEN.con_UpDepartmentId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDepartmentInfoEN.con_UpDepartmentId,
      objDepartmentInfoCond.upDepartmentId,
      strComparisonOpUpDepartmentId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDepartmentInfoCond.dicFldComparisonOp,
      clsDepartmentInfoEN.con_InUse,
    ) == true
  ) {
    if (objDepartmentInfoCond.inUse == true) {
      strWhereCond += Format(" And {0} = '1'", clsDepartmentInfoEN.con_InUse);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsDepartmentInfoEN.con_InUse);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDepartmentInfoCond.dicFldComparisonOp,
      clsDepartmentInfoEN.con_OrderNum,
    ) == true
  ) {
    const strComparisonOpOrderNum: string =
      objDepartmentInfoCond.dicFldComparisonOp[clsDepartmentInfoEN.con_OrderNum];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsDepartmentInfoEN.con_OrderNum,
      objDepartmentInfoCond.orderNum,
      strComparisonOpOrderNum,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDepartmentInfoCond.dicFldComparisonOp,
      clsDepartmentInfoEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objDepartmentInfoCond.dicFldComparisonOp[clsDepartmentInfoEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDepartmentInfoEN.con_Memo,
      objDepartmentInfoCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objDepartmentInfoENS:源对象
 * @param objDepartmentInfoENT:目标对象
 */
export function DepartmentInfo_GetObjFromJsonObj(
  objDepartmentInfoENS: clsDepartmentInfoEN,
): clsDepartmentInfoEN {
  const objDepartmentInfoENT: clsDepartmentInfoEN = new clsDepartmentInfoEN();
  ObjectAssign(objDepartmentInfoENT, objDepartmentInfoENS);
  return objDepartmentInfoENT;
}
