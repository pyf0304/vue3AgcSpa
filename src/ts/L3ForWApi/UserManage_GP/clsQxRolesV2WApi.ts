/**
 * 类名:clsQxRolesV2WApi
 * 表名:QxRolesV2(00140116)
 * 版本:2025.05.26.1(服务器:WIN-SRV103-116)
 * 日期:2025/05/31 09:46:14
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:统一平台(0014)
 应用类型:Vue应用InCore-TS(30)
 CM工程:统一平台前端(000057, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:用户管理(UserManage_GP)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 角色V2(QxRolesV2)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2025年05月31日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { ObjectAssign, GetExceptionStr, myShowErrorMsg } from '@/ts/PubFun/clsCommFunc4Web';
import { clsQxRolesV2ENEx } from '@/ts/L0Entity/UserManage_GP/clsQxRolesV2ENEx';
import { clsQxRolesV2EN } from '@/ts/L0Entity/UserManage_GP/clsQxRolesV2EN';
import { Format, GetStrLen, tzDataType, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { AddRecordResult } from '@/ts/PubFun/AddRecordResult';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';

export const qxRolesV2_Controller = 'QxRolesV2Api';
export const qxRolesV2_ConstructorName = 'qxRolesV2';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param intRId:关键字
 * @returns 对象
 **/
export async function QxRolesV2_GetObjByRIdAsync(intRId: number): Promise<clsQxRolesV2EN | null> {
  const strThisFuncName = 'GetObjByRIdAsync';

  if (intRId == 0) {
    const strMsg = Format('参数:[intRId]不能为空!(In clsQxRolesV2WApi.GetObjByRIdAsync)');
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByRId';
  const strUrl = GetWebApiUrl(qxRolesV2_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      intRId,
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
      const objQxRolesV2 = QxRolesV2_GetObjFromJsonObj(returnObj);
      return objQxRolesV2;
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
        qxRolesV2_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qxRolesV2_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[GetObjByRIdlocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[GetObjByRIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )
//该表没有使用Cache,不需要生成[UpdateObjInLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-05-31
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function QxRolesV2_SortFunDefa(a: clsQxRolesV2EN, b: clsQxRolesV2EN): number {
  return a.rId - b.rId;
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2025-05-31
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function QxRolesV2_SortFunDefa2Fld(a: clsQxRolesV2EN, b: clsQxRolesV2EN): number {
  if (a.roleName == b.roleName) return a.roleENName.localeCompare(b.roleENName);
  else return a.roleName.localeCompare(b.roleName);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-05-31
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function QxRolesV2_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsQxRolesV2EN.con_RId:
        return (a: clsQxRolesV2EN, b: clsQxRolesV2EN) => {
          return a.rId - b.rId;
        };
      case clsQxRolesV2EN.con_RoleName:
        return (a: clsQxRolesV2EN, b: clsQxRolesV2EN) => {
          return a.roleName.localeCompare(b.roleName);
        };
      case clsQxRolesV2EN.con_RoleENName:
        return (a: clsQxRolesV2EN, b: clsQxRolesV2EN) => {
          if (a.roleENName == null) return -1;
          if (b.roleENName == null) return 1;
          return a.roleENName.localeCompare(b.roleENName);
        };
      case clsQxRolesV2EN.con_RoleIndex:
        return (a: clsQxRolesV2EN, b: clsQxRolesV2EN) => {
          return a.roleIndex - b.roleIndex;
        };
      case clsQxRolesV2EN.con_QxPrjId:
        return (a: clsQxRolesV2EN, b: clsQxRolesV2EN) => {
          return a.qxPrjId.localeCompare(b.qxPrjId);
        };
      case clsQxRolesV2EN.con_IsInUse:
        return (a: clsQxRolesV2EN) => {
          if (a.isInUse == true) return 1;
          else return -1;
        };
      case clsQxRolesV2EN.con_UpdDate:
        return (a: clsQxRolesV2EN, b: clsQxRolesV2EN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsQxRolesV2EN.con_UpdUserId:
        return (a: clsQxRolesV2EN, b: clsQxRolesV2EN) => {
          if (a.updUserId == null) return -1;
          if (b.updUserId == null) return 1;
          return a.updUserId.localeCompare(b.updUserId);
        };
      case clsQxRolesV2EN.con_Memo:
        return (a: clsQxRolesV2EN, b: clsQxRolesV2EN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[QxRolesV2]中不存在!(in ${qxRolesV2_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsQxRolesV2EN.con_RId:
        return (a: clsQxRolesV2EN, b: clsQxRolesV2EN) => {
          return b.rId - a.rId;
        };
      case clsQxRolesV2EN.con_RoleName:
        return (a: clsQxRolesV2EN, b: clsQxRolesV2EN) => {
          return b.roleName.localeCompare(a.roleName);
        };
      case clsQxRolesV2EN.con_RoleENName:
        return (a: clsQxRolesV2EN, b: clsQxRolesV2EN) => {
          if (b.roleENName == null) return -1;
          if (a.roleENName == null) return 1;
          return b.roleENName.localeCompare(a.roleENName);
        };
      case clsQxRolesV2EN.con_RoleIndex:
        return (a: clsQxRolesV2EN, b: clsQxRolesV2EN) => {
          return b.roleIndex - a.roleIndex;
        };
      case clsQxRolesV2EN.con_QxPrjId:
        return (a: clsQxRolesV2EN, b: clsQxRolesV2EN) => {
          return b.qxPrjId.localeCompare(a.qxPrjId);
        };
      case clsQxRolesV2EN.con_IsInUse:
        return (b: clsQxRolesV2EN) => {
          if (b.isInUse == true) return 1;
          else return -1;
        };
      case clsQxRolesV2EN.con_UpdDate:
        return (a: clsQxRolesV2EN, b: clsQxRolesV2EN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsQxRolesV2EN.con_UpdUserId:
        return (a: clsQxRolesV2EN, b: clsQxRolesV2EN) => {
          if (b.updUserId == null) return -1;
          if (a.updUserId == null) return 1;
          return b.updUserId.localeCompare(a.updUserId);
        };
      case clsQxRolesV2EN.con_Memo:
        return (a: clsQxRolesV2EN, b: clsQxRolesV2EN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[QxRolesV2]中不存在!(in ${qxRolesV2_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}
//该表没有使用Cache,不需要生成[GetNameByRIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-05-31
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function QxRolesV2_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsQxRolesV2EN.con_RId:
      return (obj: clsQxRolesV2EN) => {
        return obj.rId === value;
      };
    case clsQxRolesV2EN.con_RoleName:
      return (obj: clsQxRolesV2EN) => {
        return obj.roleName === value;
      };
    case clsQxRolesV2EN.con_RoleENName:
      return (obj: clsQxRolesV2EN) => {
        return obj.roleENName === value;
      };
    case clsQxRolesV2EN.con_RoleIndex:
      return (obj: clsQxRolesV2EN) => {
        return obj.roleIndex === value;
      };
    case clsQxRolesV2EN.con_QxPrjId:
      return (obj: clsQxRolesV2EN) => {
        return obj.qxPrjId === value;
      };
    case clsQxRolesV2EN.con_IsInUse:
      return (obj: clsQxRolesV2EN) => {
        return obj.isInUse === value;
      };
    case clsQxRolesV2EN.con_UpdDate:
      return (obj: clsQxRolesV2EN) => {
        return obj.updDate === value;
      };
    case clsQxRolesV2EN.con_UpdUserId:
      return (obj: clsQxRolesV2EN) => {
        return obj.updUserId === value;
      };
    case clsQxRolesV2EN.con_Memo:
      return (obj: clsQxRolesV2EN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[QxRolesV2]中不存在!(in ${qxRolesV2_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}
//该表没有使用Cache,不需要生成[func]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func )
//该表没有使用Cache,不需要生成[QxRolesV2__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function QxRolesV2_GetFldValueAsync(
  strFldName: string,
  strWhereCond: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetFldValueAsync';
  const strAction = 'GetFldValue';
  const strUrl = GetWebApiUrl(qxRolesV2_Controller, strAction);

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
        qxRolesV2_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qxRolesV2_ConstructorName,
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
export async function QxRolesV2_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(qxRolesV2_Controller, strAction);

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
        qxRolesV2_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qxRolesV2_ConstructorName,
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
export async function QxRolesV2_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(qxRolesV2_Controller, strAction);

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
        qxRolesV2_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qxRolesV2_ConstructorName,
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
export async function QxRolesV2_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsQxRolesV2EN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(qxRolesV2_Controller, strAction);

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
      const objQxRolesV2 = QxRolesV2_GetObjFromJsonObj(returnObj);
      return objQxRolesV2;
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
        qxRolesV2_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qxRolesV2_ConstructorName,
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
export async function QxRolesV2_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsQxRolesV2EN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(qxRolesV2_Controller, strAction);

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
          qxRolesV2_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = QxRolesV2_GetObjLstByJSONObjLst(returnObjLst);
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
        qxRolesV2_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qxRolesV2_ConstructorName,
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
 * @param arrRId:关键字列表
 * @returns 对象列表
 **/
export async function QxRolesV2_GetObjLstByRIdLstAsync(
  arrRId: Array<string>,
): Promise<Array<clsQxRolesV2EN>> {
  const strThisFuncName = 'GetObjLstByRIdLstAsync';
  const strAction = 'GetObjLstByRIdLst';
  const strUrl = GetWebApiUrl(qxRolesV2_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrRId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          qxRolesV2_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = QxRolesV2_GetObjLstByJSONObjLst(returnObjLst);
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
        qxRolesV2_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qxRolesV2_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[GetObjLstByRIdLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

/**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export async function QxRolesV2_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsQxRolesV2EN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(qxRolesV2_Controller, strAction);

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
          qxRolesV2_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = QxRolesV2_GetObjLstByJSONObjLst(returnObjLst);
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
        qxRolesV2_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qxRolesV2_ConstructorName,
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
export async function QxRolesV2_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsQxRolesV2EN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(qxRolesV2_Controller, strAction);

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
          qxRolesV2_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = QxRolesV2_GetObjLstByJSONObjLst(returnObjLst);
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
        qxRolesV2_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qxRolesV2_ConstructorName,
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
export async function QxRolesV2_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsQxRolesV2EN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsQxRolesV2EN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(qxRolesV2_Controller, strAction);

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
          qxRolesV2_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = QxRolesV2_GetObjLstByJSONObjLst(returnObjLst);
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
        qxRolesV2_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qxRolesV2_ConstructorName,
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
 * @param intRId:关键字
 * @returns 获取删除的结果
 **/
export async function QxRolesV2_DelRecordAsync(intRId: number): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(qxRolesV2_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, intRId);

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
        qxRolesV2_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qxRolesV2_ConstructorName,
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
 * @param arrRId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function QxRolesV2_DelQxRolesV2sAsync(arrRId: Array<string>): Promise<number> {
  const strThisFuncName = 'DelQxRolesV2sAsync';
  const strAction = 'DelQxRolesV2s';
  const strUrl = GetWebApiUrl(qxRolesV2_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrRId, config);
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
        qxRolesV2_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qxRolesV2_ConstructorName,
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
 * @param objQxRolesV2ENS:源对象
 * @returns 目标对象=>clsQxRolesV2EN:objQxRolesV2ENT
 **/
export function QxRolesV2_CopyToEx(objQxRolesV2ENS: clsQxRolesV2EN): clsQxRolesV2ENEx {
  const strThisFuncName = QxRolesV2_CopyToEx.name;
  const objQxRolesV2ENT = new clsQxRolesV2ENEx();
  try {
    ObjectAssign(objQxRolesV2ENT, objQxRolesV2ENS);
    return objQxRolesV2ENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001294)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxRolesV2_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objQxRolesV2ENT;
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2025-05-31
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function QxRolesV2_FuncMapByFldName(strFldName: string, objQxRolesV2Ex: clsQxRolesV2ENEx) {
  const strThisFuncName = QxRolesV2_FuncMapByFldName.name;
  console.log(objQxRolesV2Ex);
  strFldName = strFldName.replace('|Ex', '');
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsQxRolesV2EN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
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
 * 日期:2025-05-31
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByExKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function QxRolesV2_SortFunByExKey(strKey: string, AscOrDesc: string) {
  strKey = strKey.replace('|Ex', '');
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      default:
        return QxRolesV2_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      default:
        return QxRolesV2_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据条件删除记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelMultiRecordByCondAsync)
 * @returns 实际删除记录的个数
 **/
export async function QxRolesV2_DelQxRolesV2sByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'DelQxRolesV2sByCondAsync';
  const strAction = 'DelQxRolesV2sByCond';
  const strUrl = GetWebApiUrl(qxRolesV2_Controller, strAction);

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
        qxRolesV2_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qxRolesV2_ConstructorName,
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
 * @param objQxRolesV2EN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function QxRolesV2_AddNewRecordAsync(
  objQxRolesV2EN: clsQxRolesV2EN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objQxRolesV2EN);
  const strUrl = GetWebApiUrl(qxRolesV2_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objQxRolesV2EN, config);
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
        qxRolesV2_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qxRolesV2_ConstructorName,
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

/** 添加新记录,保存函数
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewObjSave)
 **/
export async function QxRolesV2_AddNewObjSave(
  objQxRolesV2EN: clsQxRolesV2EN,
): Promise<AddRecordResult> {
  const strThisFuncName = 'AddNewObjSave';
  try {
    QxRolesV2_CheckPropertyNew(objQxRolesV2EN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${qxRolesV2_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    alert(strMsg);
    return { keyword: '', success: false }; //一定要有一个返回值,否则会出错!
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await QxRolesV2_CheckUniCond4Add(objQxRolesV2EN);
    if (bolIsExistCond == false) {
      return { keyword: '', success: false };
    }
    let returnBool = false;
    returnBool = await QxRolesV2_AddNewRecordAsync(objQxRolesV2EN);
    if (returnBool == true) {
      //QxRolesV2_ReFreshCache();
    } else {
      const strInfo = `添加[角色V2(QxRolesV2)]记录不成功!`;
      //显示信息框
      throw strInfo;
    }
    return { keyword: objQxRolesV2EN.rId.toString(), success: returnBool }; //一定要有一个返回值,否则会出错!
  } catch (e) {
    const strMsg = `添加记录不成功,${e}.(in ${qxRolesV2_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export async function QxRolesV2_CheckUniCond4Add(objQxRolesV2EN: clsQxRolesV2EN): Promise<boolean> {
  const strUniquenessCondition = QxRolesV2_GetUniCondStr(objQxRolesV2EN);
  const bolIsExistCondition = await QxRolesV2_IsExistRecordAsync(strUniquenessCondition);
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
export async function QxRolesV2_CheckUniCond4Update(
  objQxRolesV2EN: clsQxRolesV2EN,
): Promise<boolean> {
  const strUniquenessCondition = QxRolesV2_GetUniCondStr4Update(objQxRolesV2EN);
  const bolIsExistCondition = await QxRolesV2_IsExistRecordAsync(strUniquenessCondition);
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
export async function QxRolesV2_UpdateObjSave(objQxRolesV2EN: clsQxRolesV2EN): Promise<boolean> {
  const strThisFuncName = 'UpdateObjSave';
  objQxRolesV2EN.sfUpdFldSetStr = objQxRolesV2EN.updFldString; //设置哪些字段被修改(脏字段)
  if (objQxRolesV2EN.rId == 0 || objQxRolesV2EN.rId == undefined) {
    console.error('关键字不能为空!');
    throw '关键字不能为空!';
  }
  try {
    QxRolesV2_CheckProperty4Update(objQxRolesV2EN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${qxRolesV2_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await QxRolesV2_CheckUniCond4Update(objQxRolesV2EN);
    if (bolIsExistCond == false) {
      return false;
    }
    const returnBool = await QxRolesV2_UpdateRecordAsync(objQxRolesV2EN);
    if (returnBool == true) {
      //QxRolesV2_ReFreshCache();
    }
    return returnBool;
  } catch (e) {
    const strMsg = `修改记录不成功,${e}.(in ${qxRolesV2_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objQxRolesV2EN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function QxRolesV2_AddNewRecordWithReturnKeyAsync(
  objQxRolesV2EN: clsQxRolesV2EN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(qxRolesV2_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objQxRolesV2EN, config);
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
        qxRolesV2_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qxRolesV2_ConstructorName,
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
 * @param objQxRolesV2EN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function QxRolesV2_UpdateRecordAsync(
  objQxRolesV2EN: clsQxRolesV2EN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objQxRolesV2EN.sfUpdFldSetStr === undefined ||
    objQxRolesV2EN.sfUpdFldSetStr === null ||
    objQxRolesV2EN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format('对象(关键字: {0})的【修改字段集】为空,不能修改!', objQxRolesV2EN.rId);
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(qxRolesV2_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objQxRolesV2EN, config);
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
        qxRolesV2_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qxRolesV2_ConstructorName,
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
 * @param objQxRolesV2EN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function QxRolesV2_EditRecordExAsync(
  objQxRolesV2EN: clsQxRolesV2EN,
): Promise<boolean> {
  const strThisFuncName = 'EditRecordExAsync';
  const strAction = 'EditRecordEx';
  if (
    objQxRolesV2EN.sfUpdFldSetStr === undefined ||
    objQxRolesV2EN.sfUpdFldSetStr === null ||
    objQxRolesV2EN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format('对象(关键字: {0})的【修改字段集】为空,不能修改!', objQxRolesV2EN.rId);
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(qxRolesV2_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objQxRolesV2EN, config);
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
        qxRolesV2_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qxRolesV2_ConstructorName,
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
 * @param objQxRolesV2EN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function QxRolesV2_UpdateWithConditionAsync(
  objQxRolesV2EN: clsQxRolesV2EN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objQxRolesV2EN.sfUpdFldSetStr === undefined ||
    objQxRolesV2EN.sfUpdFldSetStr === null ||
    objQxRolesV2EN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format('对象(关键字: {0})的【修改字段集】为空,不能修改!', objQxRolesV2EN.rId);
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(qxRolesV2_Controller, strAction);
  objQxRolesV2EN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objQxRolesV2EN, config);
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
        qxRolesV2_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qxRolesV2_ConstructorName,
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
export async function QxRolesV2_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(qxRolesV2_Controller, strAction);

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
        qxRolesV2_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qxRolesV2_ConstructorName,
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
 * @param intRId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function QxRolesV2_IsExistAsync(intRId: number): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(qxRolesV2_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      intRId,
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
        qxRolesV2_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qxRolesV2_ConstructorName,
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
export async function QxRolesV2_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(qxRolesV2_Controller, strAction);

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
        qxRolesV2_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qxRolesV2_ConstructorName,
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
export async function QxRolesV2_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(qxRolesV2_Controller, strAction);

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
        qxRolesV2_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qxRolesV2_ConstructorName,
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
export function QxRolesV2_GetWebApiUrl(strController: string, strAction: string): string {
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
export function QxRolesV2_CheckPropertyNew(pobjQxRolesV2EN: clsQxRolesV2EN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjQxRolesV2EN.roleName) === true) {
    throw new Error(
      `(errid:Watl000411)字段[角色名称]不能为空(In 角色V2)!(clsQxRolesV2BL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQxRolesV2EN.qxPrjId) === true ||
    pobjQxRolesV2EN.qxPrjId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000411)字段[项目Id]不能为空(In 角色V2)!(clsQxRolesV2BL:CheckPropertyNew0)`,
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjQxRolesV2EN.roleName) == false &&
    GetStrLen(pobjQxRolesV2EN.roleName) > 50
  ) {
    throw new Error(
      `(errid:Watl000413)字段[角色名称(roleName)]的长度不能超过50(In 角色V2(QxRolesV2))!值:${pobjQxRolesV2EN.roleName}(clsQxRolesV2BL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQxRolesV2EN.roleENName) == false &&
    GetStrLen(pobjQxRolesV2EN.roleENName) > 50
  ) {
    throw new Error(
      `(errid:Watl000413)字段[角色英文名(roleENName)]的长度不能超过50(In 角色V2(QxRolesV2))!值:${pobjQxRolesV2EN.roleENName}(clsQxRolesV2BL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjQxRolesV2EN.qxPrjId) == false && GetStrLen(pobjQxRolesV2EN.qxPrjId) > 4) {
    throw new Error(
      `(errid:Watl000413)字段[项目Id(qxPrjId)]的长度不能超过4(In 角色V2(QxRolesV2))!值:${pobjQxRolesV2EN.qxPrjId}(clsQxRolesV2BL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjQxRolesV2EN.updDate) == false && GetStrLen(pobjQxRolesV2EN.updDate) > 20) {
    throw new Error(
      `(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 角色V2(QxRolesV2))!值:${pobjQxRolesV2EN.updDate}(clsQxRolesV2BL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQxRolesV2EN.updUserId) == false &&
    GetStrLen(pobjQxRolesV2EN.updUserId) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改用户Id(updUserId)]的长度不能超过20(In 角色V2(QxRolesV2))!值:${pobjQxRolesV2EN.updUserId}(clsQxRolesV2BL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjQxRolesV2EN.memo) == false && GetStrLen(pobjQxRolesV2EN.memo) > 1000) {
    throw new Error(
      `(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 角色V2(QxRolesV2))!值:${pobjQxRolesV2EN.memo}(clsQxRolesV2BL:CheckPropertyNew)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjQxRolesV2EN.rId &&
    undefined !== pobjQxRolesV2EN.rId &&
    tzDataType.isNumber(pobjQxRolesV2EN.rId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[角色Id(rId)]的值:[${pobjQxRolesV2EN.rId}], 非法,应该为数值型(In 角色V2(QxRolesV2))!(clsQxRolesV2BL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQxRolesV2EN.roleName) == false &&
    undefined !== pobjQxRolesV2EN.roleName &&
    tzDataType.isString(pobjQxRolesV2EN.roleName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[角色名称(roleName)]的值:[${pobjQxRolesV2EN.roleName}], 非法,应该为字符型(In 角色V2(QxRolesV2))!(clsQxRolesV2BL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQxRolesV2EN.roleENName) == false &&
    undefined !== pobjQxRolesV2EN.roleENName &&
    tzDataType.isString(pobjQxRolesV2EN.roleENName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[角色英文名(roleENName)]的值:[${pobjQxRolesV2EN.roleENName}], 非法,应该为字符型(In 角色V2(QxRolesV2))!(clsQxRolesV2BL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjQxRolesV2EN.roleIndex &&
    undefined !== pobjQxRolesV2EN.roleIndex &&
    tzDataType.isNumber(pobjQxRolesV2EN.roleIndex) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[角色序号(roleIndex)]的值:[${pobjQxRolesV2EN.roleIndex}], 非法,应该为数值型(In 角色V2(QxRolesV2))!(clsQxRolesV2BL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQxRolesV2EN.qxPrjId) == false &&
    undefined !== pobjQxRolesV2EN.qxPrjId &&
    tzDataType.isString(pobjQxRolesV2EN.qxPrjId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[项目Id(qxPrjId)]的值:[${pobjQxRolesV2EN.qxPrjId}], 非法,应该为字符型(In 角色V2(QxRolesV2))!(clsQxRolesV2BL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjQxRolesV2EN.isInUse &&
    undefined !== pobjQxRolesV2EN.isInUse &&
    tzDataType.isBoolean(pobjQxRolesV2EN.isInUse) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否在使用(isInUse)]的值:[${pobjQxRolesV2EN.isInUse}], 非法,应该为布尔型(In 角色V2(QxRolesV2))!(clsQxRolesV2BL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQxRolesV2EN.updDate) == false &&
    undefined !== pobjQxRolesV2EN.updDate &&
    tzDataType.isString(pobjQxRolesV2EN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjQxRolesV2EN.updDate}], 非法,应该为字符型(In 角色V2(QxRolesV2))!(clsQxRolesV2BL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQxRolesV2EN.updUserId) == false &&
    undefined !== pobjQxRolesV2EN.updUserId &&
    tzDataType.isString(pobjQxRolesV2EN.updUserId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改用户Id(updUserId)]的值:[${pobjQxRolesV2EN.updUserId}], 非法,应该为字符型(In 角色V2(QxRolesV2))!(clsQxRolesV2BL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQxRolesV2EN.memo) == false &&
    undefined !== pobjQxRolesV2EN.memo &&
    tzDataType.isString(pobjQxRolesV2EN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[备注(memo)]的值:[${pobjQxRolesV2EN.memo}], 非法,应该为字符型(In 角色V2(QxRolesV2))!(clsQxRolesV2BL:CheckPropertyNew0)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
  if (
    IsNullOrEmpty(pobjQxRolesV2EN.qxPrjId) == false &&
    pobjQxRolesV2EN.qxPrjId != '[nuull]' &&
    GetStrLen(pobjQxRolesV2EN.qxPrjId) != 4
  ) {
    throw '(errid:Watl000415)字段[项目Id]作为外键字段,长度应该为4(In 角色V2)!(clsQxRolesV2BL:CheckPropertyNew)';
  }

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function QxRolesV2_CheckProperty4Update(pobjQxRolesV2EN: clsQxRolesV2EN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjQxRolesV2EN.roleName) == false &&
    GetStrLen(pobjQxRolesV2EN.roleName) > 50
  ) {
    throw new Error(
      `(errid:Watl000416)字段[角色名称(roleName)]的长度不能超过50(In 角色V2(QxRolesV2))!值:${pobjQxRolesV2EN.roleName}(clsQxRolesV2BL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQxRolesV2EN.roleENName) == false &&
    GetStrLen(pobjQxRolesV2EN.roleENName) > 50
  ) {
    throw new Error(
      `(errid:Watl000416)字段[角色英文名(roleENName)]的长度不能超过50(In 角色V2(QxRolesV2))!值:${pobjQxRolesV2EN.roleENName}(clsQxRolesV2BL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjQxRolesV2EN.qxPrjId) == false && GetStrLen(pobjQxRolesV2EN.qxPrjId) > 4) {
    throw new Error(
      `(errid:Watl000416)字段[项目Id(qxPrjId)]的长度不能超过4(In 角色V2(QxRolesV2))!值:${pobjQxRolesV2EN.qxPrjId}(clsQxRolesV2BL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjQxRolesV2EN.updDate) == false && GetStrLen(pobjQxRolesV2EN.updDate) > 20) {
    throw new Error(
      `(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 角色V2(QxRolesV2))!值:${pobjQxRolesV2EN.updDate}(clsQxRolesV2BL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQxRolesV2EN.updUserId) == false &&
    GetStrLen(pobjQxRolesV2EN.updUserId) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改用户Id(updUserId)]的长度不能超过20(In 角色V2(QxRolesV2))!值:${pobjQxRolesV2EN.updUserId}(clsQxRolesV2BL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjQxRolesV2EN.memo) == false && GetStrLen(pobjQxRolesV2EN.memo) > 1000) {
    throw new Error(
      `(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 角色V2(QxRolesV2))!值:${pobjQxRolesV2EN.memo}(clsQxRolesV2BL:CheckProperty4Update)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjQxRolesV2EN.rId &&
    undefined !== pobjQxRolesV2EN.rId &&
    tzDataType.isNumber(pobjQxRolesV2EN.rId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[角色Id(rId)]的值:[${pobjQxRolesV2EN.rId}], 非法,应该为数值型(In 角色V2(QxRolesV2))!(clsQxRolesV2BL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQxRolesV2EN.roleName) == false &&
    undefined !== pobjQxRolesV2EN.roleName &&
    tzDataType.isString(pobjQxRolesV2EN.roleName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[角色名称(roleName)]的值:[${pobjQxRolesV2EN.roleName}], 非法,应该为字符型(In 角色V2(QxRolesV2))!(clsQxRolesV2BL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQxRolesV2EN.roleENName) == false &&
    undefined !== pobjQxRolesV2EN.roleENName &&
    tzDataType.isString(pobjQxRolesV2EN.roleENName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[角色英文名(roleENName)]的值:[${pobjQxRolesV2EN.roleENName}], 非法,应该为字符型(In 角色V2(QxRolesV2))!(clsQxRolesV2BL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjQxRolesV2EN.roleIndex &&
    undefined !== pobjQxRolesV2EN.roleIndex &&
    tzDataType.isNumber(pobjQxRolesV2EN.roleIndex) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[角色序号(roleIndex)]的值:[${pobjQxRolesV2EN.roleIndex}], 非法,应该为数值型(In 角色V2(QxRolesV2))!(clsQxRolesV2BL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQxRolesV2EN.qxPrjId) == false &&
    undefined !== pobjQxRolesV2EN.qxPrjId &&
    tzDataType.isString(pobjQxRolesV2EN.qxPrjId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[项目Id(qxPrjId)]的值:[${pobjQxRolesV2EN.qxPrjId}], 非法,应该为字符型(In 角色V2(QxRolesV2))!(clsQxRolesV2BL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjQxRolesV2EN.isInUse &&
    undefined !== pobjQxRolesV2EN.isInUse &&
    tzDataType.isBoolean(pobjQxRolesV2EN.isInUse) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否在使用(isInUse)]的值:[${pobjQxRolesV2EN.isInUse}], 非法,应该为布尔型(In 角色V2(QxRolesV2))!(clsQxRolesV2BL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQxRolesV2EN.updDate) == false &&
    undefined !== pobjQxRolesV2EN.updDate &&
    tzDataType.isString(pobjQxRolesV2EN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjQxRolesV2EN.updDate}], 非法,应该为字符型(In 角色V2(QxRolesV2))!(clsQxRolesV2BL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQxRolesV2EN.updUserId) == false &&
    undefined !== pobjQxRolesV2EN.updUserId &&
    tzDataType.isString(pobjQxRolesV2EN.updUserId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改用户Id(updUserId)]的值:[${pobjQxRolesV2EN.updUserId}], 非法,应该为字符型(In 角色V2(QxRolesV2))!(clsQxRolesV2BL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQxRolesV2EN.memo) == false &&
    undefined !== pobjQxRolesV2EN.memo &&
    tzDataType.isString(pobjQxRolesV2EN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[备注(memo)]的值:[${pobjQxRolesV2EN.memo}], 非法,应该为字符型(In 角色V2(QxRolesV2))!(clsQxRolesV2BL:CheckProperty4Update)`,
    );
  }
  //检查主键是否为Null或者空!
  if (
    null === pobjQxRolesV2EN.rId ||
    (pobjQxRolesV2EN.rId != null && pobjQxRolesV2EN.rId.toString() === '')
  ) {
    throw new Error(
      `(errid:Watl000064)字段[角色Id]不能为空(In 角色V2)!(clsQxRolesV2BL:CheckProperty4Update)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
  if (
    IsNullOrEmpty(pobjQxRolesV2EN.qxPrjId) == false &&
    pobjQxRolesV2EN.qxPrjId != '[nuull]' &&
    GetStrLen(pobjQxRolesV2EN.qxPrjId) != 4
  ) {
    throw '(errid:Watl000418)字段[项目Id]作为外键字段,长度应该为4(In 角色V2)!(clsQxRolesV2BL:CheckPropertyNew)';
  }
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2025-05-31
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function QxRolesV2_GetJSONStrByObj(pobjQxRolesV2EN: clsQxRolesV2EN): string {
  pobjQxRolesV2EN.sfUpdFldSetStr = pobjQxRolesV2EN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjQxRolesV2EN);
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
 * 日期:2025-05-31
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
 */
export function QxRolesV2_GetObjLstByJSONStr(strJSON: string): Array<clsQxRolesV2EN> {
  let arrQxRolesV2ObjLst = new Array<clsQxRolesV2EN>();
  if (strJSON === '') {
    return arrQxRolesV2ObjLst;
  }
  try {
    arrQxRolesV2ObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrQxRolesV2ObjLst;
  }
  return arrQxRolesV2ObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-05-31
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrQxRolesV2ObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function QxRolesV2_GetObjLstByJSONObjLst(
  arrQxRolesV2ObjLstS: Array<clsQxRolesV2EN>,
): Array<clsQxRolesV2EN> {
  const arrQxRolesV2ObjLst = new Array<clsQxRolesV2EN>();
  for (const objInFor of arrQxRolesV2ObjLstS) {
    const obj1 = QxRolesV2_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrQxRolesV2ObjLst.push(obj1);
  }
  return arrQxRolesV2ObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-05-31
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function QxRolesV2_GetObjByJSONStr(strJSON: string): clsQxRolesV2EN {
  let pobjQxRolesV2EN = new clsQxRolesV2EN();
  if (strJSON === '') {
    return pobjQxRolesV2EN;
  }
  try {
    pobjQxRolesV2EN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjQxRolesV2EN;
  }
  return pobjQxRolesV2EN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function QxRolesV2_GetCombineCondition(objQxRolesV2Cond: clsQxRolesV2EN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objQxRolesV2Cond.dicFldComparisonOp,
      clsQxRolesV2EN.con_RId,
    ) == true
  ) {
    const strComparisonOpRId: string = objQxRolesV2Cond.dicFldComparisonOp[clsQxRolesV2EN.con_RId];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsQxRolesV2EN.con_RId,
      objQxRolesV2Cond.rId,
      strComparisonOpRId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objQxRolesV2Cond.dicFldComparisonOp,
      clsQxRolesV2EN.con_RoleName,
    ) == true
  ) {
    const strComparisonOpRoleName: string =
      objQxRolesV2Cond.dicFldComparisonOp[clsQxRolesV2EN.con_RoleName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsQxRolesV2EN.con_RoleName,
      objQxRolesV2Cond.roleName,
      strComparisonOpRoleName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objQxRolesV2Cond.dicFldComparisonOp,
      clsQxRolesV2EN.con_RoleENName,
    ) == true
  ) {
    const strComparisonOpRoleENName: string =
      objQxRolesV2Cond.dicFldComparisonOp[clsQxRolesV2EN.con_RoleENName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsQxRolesV2EN.con_RoleENName,
      objQxRolesV2Cond.roleENName,
      strComparisonOpRoleENName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objQxRolesV2Cond.dicFldComparisonOp,
      clsQxRolesV2EN.con_RoleIndex,
    ) == true
  ) {
    const strComparisonOpRoleIndex: string =
      objQxRolesV2Cond.dicFldComparisonOp[clsQxRolesV2EN.con_RoleIndex];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsQxRolesV2EN.con_RoleIndex,
      objQxRolesV2Cond.roleIndex,
      strComparisonOpRoleIndex,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objQxRolesV2Cond.dicFldComparisonOp,
      clsQxRolesV2EN.con_QxPrjId,
    ) == true
  ) {
    const strComparisonOpQxPrjId: string =
      objQxRolesV2Cond.dicFldComparisonOp[clsQxRolesV2EN.con_QxPrjId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsQxRolesV2EN.con_QxPrjId,
      objQxRolesV2Cond.qxPrjId,
      strComparisonOpQxPrjId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objQxRolesV2Cond.dicFldComparisonOp,
      clsQxRolesV2EN.con_IsInUse,
    ) == true
  ) {
    if (objQxRolesV2Cond.isInUse == true) {
      strWhereCond += Format(" And {0} = '1'", clsQxRolesV2EN.con_IsInUse);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsQxRolesV2EN.con_IsInUse);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objQxRolesV2Cond.dicFldComparisonOp,
      clsQxRolesV2EN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objQxRolesV2Cond.dicFldComparisonOp[clsQxRolesV2EN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsQxRolesV2EN.con_UpdDate,
      objQxRolesV2Cond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objQxRolesV2Cond.dicFldComparisonOp,
      clsQxRolesV2EN.con_UpdUserId,
    ) == true
  ) {
    const strComparisonOpUpdUserId: string =
      objQxRolesV2Cond.dicFldComparisonOp[clsQxRolesV2EN.con_UpdUserId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsQxRolesV2EN.con_UpdUserId,
      objQxRolesV2Cond.updUserId,
      strComparisonOpUpdUserId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objQxRolesV2Cond.dicFldComparisonOp,
      clsQxRolesV2EN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objQxRolesV2Cond.dicFldComparisonOp[clsQxRolesV2EN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsQxRolesV2EN.con_Memo,
      objQxRolesV2Cond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--QxRolesV2(角色V2),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strRoleName: 角色名称(要求唯一的字段)
 * @param strQxPrjId: 项目Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function QxRolesV2_GetUniCondStr(objQxRolesV2EN: clsQxRolesV2EN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and RoleName = '{0}'", objQxRolesV2EN.roleName);
  strWhereCond += Format(" and QxPrjId = '{0}'", objQxRolesV2EN.qxPrjId);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--QxRolesV2(角色V2),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strRoleName: 角色名称(要求唯一的字段)
 * @param strQxPrjId: 项目Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function QxRolesV2_GetUniCondStr4Update(objQxRolesV2EN: clsQxRolesV2EN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and RId <> '{0}'", objQxRolesV2EN.rId);
  strWhereCond += Format(" and RoleName = '{0}'", objQxRolesV2EN.roleName);
  strWhereCond += Format(" and QxPrjId = '{0}'", objQxRolesV2EN.qxPrjId);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objQxRolesV2ENS:源对象
 * @param objQxRolesV2ENT:目标对象
 */
export function QxRolesV2_GetObjFromJsonObj(objQxRolesV2ENS: clsQxRolesV2EN): clsQxRolesV2EN {
  const objQxRolesV2ENT: clsQxRolesV2EN = new clsQxRolesV2EN();
  ObjectAssign(objQxRolesV2ENT, objQxRolesV2ENS);
  return objQxRolesV2ENT;
}
