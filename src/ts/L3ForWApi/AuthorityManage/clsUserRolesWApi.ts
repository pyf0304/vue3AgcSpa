/**
 * 类名:clsUserRolesWApi
 * 表名:UserRoles(00050609)
 * 版本:2023.10.12.1(服务器:WIN-SRV103-116)
 * 日期:2023/10/12 14:41:35
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:权限管理(AuthorityManage)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 用户角色(UserRoles)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2023年10月12日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty, GetStrLen, tzDataType, Format } from '@/ts/PubFun/clsString';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { CacheHelper } from '@/ts/PubFun/CacheHelper';
import {
  GetObjKeys,
  BindDdl_ObjLstInDivObj,
  GetExceptionStr,
  myShowErrorMsg,
  ObjectAssign,
} from '@/ts/PubFun/clsCommFunc4Web';
import { clsUserRolesEN } from '@/ts/L0Entity/AuthorityManage/clsUserRolesEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const userRoles_Controller = 'UserRolesApi';
export const userRoles_ConstructorName = 'userRoles';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strRoleId:关键字
 * @returns 对象
 **/
export async function UserRoles_GetObjByRoleIdAsync(
  strRoleId: string,
): Promise<clsUserRolesEN | null> {
  const strThisFuncName = 'GetObjByRoleIdAsync';

  if (IsNullOrEmpty(strRoleId) == true) {
    const strMsg = Format('参数:[strRoleId]不能为空!(In clsUserRolesWApi.GetObjByRoleIdAsync)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strRoleId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strRoleId]的长度:[{0}]不正确!(clsUserRolesWApi.GetObjByRoleIdAsync)',
      strRoleId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByRoleId';
  const strUrl = GetWebApiUrl(userRoles_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strRoleId,
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
      const objUserRoles = UserRoles_GetObjFromJsonObj(returnObj);
      return objUserRoles;
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
        userRoles_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userRoles_ConstructorName,
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
 * 根据关键字获取相关对象, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache)
 * @param strRoleId:所给的关键字
 * @returns 对象
 */
export async function UserRoles_GetObjByRoleIdCache(strRoleId: string, bolTryAsyncOnce = true) {
  const strThisFuncName = 'GetObjByRoleIdCache';

  if (IsNullOrEmpty(strRoleId) == true) {
    const strMsg = Format('参数:[strRoleId]不能为空!(In clsUserRolesWApi.GetObjByRoleIdCache)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strRoleId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strRoleId]的长度:[{0}]不正确!(clsUserRolesWApi.GetObjByRoleIdCache)',
      strRoleId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrUserRolesObjLstCache = await UserRoles_GetObjLstCache();
  try {
    const arrUserRolesSel = arrUserRolesObjLstCache.filter((x) => x.roleId == strRoleId);
    let objUserRoles: clsUserRolesEN;
    if (arrUserRolesSel.length > 0) {
      objUserRoles = arrUserRolesSel[0];
      return objUserRoles;
    } else {
      if (bolTryAsyncOnce == true) {
        const objUserRolesConst = await UserRoles_GetObjByRoleIdAsync(strRoleId);
        if (objUserRolesConst != null) {
          UserRoles_ReFreshThisCache();
          return objUserRolesConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strRoleId,
      userRoles_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strRoleId:所给的关键字
 * @returns 对象
 */
export async function UserRoles_GetObjByRoleIdlocalStorage(strRoleId: string) {
  const strThisFuncName = 'GetObjByRoleIdlocalStorage';

  if (IsNullOrEmpty(strRoleId) == true) {
    const strMsg = Format(
      '参数:[strRoleId]不能为空!(In clsUserRolesWApi.GetObjByRoleIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strRoleId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strRoleId]的长度:[{0}]不正确!(clsUserRolesWApi.GetObjByRoleIdlocalStorage)',
      strRoleId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsUserRolesEN._CurrTabName, strRoleId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objUserRolesCache: clsUserRolesEN = JSON.parse(strTempObj);
    return objUserRolesCache;
  }
  try {
    const objUserRoles = await UserRoles_GetObjByRoleIdAsync(strRoleId);
    if (objUserRoles != null) {
      localStorage.setItem(strKey, JSON.stringify(objUserRoles));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objUserRoles;
    }
    return objUserRoles;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strRoleId,
      userRoles_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return;
  }
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objUserRoles:所给的对象
 * @returns 对象
 */
export async function UserRoles_UpdateObjInLstCache(objUserRoles: clsUserRolesEN) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrUserRolesObjLstCache = await UserRoles_GetObjLstCache();
    const obj = arrUserRolesObjLstCache.find((x) => x.roleId == objUserRoles.roleId);
    if (obj != null) {
      objUserRoles.roleId = obj.roleId;
      ObjectAssign(obj, objUserRoles);
    } else {
      arrUserRolesObjLstCache.push(objUserRoles);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      userRoles_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strRoleId:所给的关键字
 * @returns 对象
 */
export async function UserRoles_GetNameByRoleIdCache(strRoleId: string) {
  if (IsNullOrEmpty(strRoleId) == true) {
    const strMsg = Format('参数:[strRoleId]不能为空!(In clsUserRolesWApi.GetNameByRoleIdCache)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strRoleId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strRoleId]的长度:[{0}]不正确!(clsUserRolesWApi.GetNameByRoleIdCache)',
      strRoleId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrUserRolesObjLstCache = await UserRoles_GetObjLstCache();
  if (arrUserRolesObjLstCache == null) return '';
  try {
    const arrUserRolesSel = arrUserRolesObjLstCache.filter((x) => x.roleId == strRoleId);
    let objUserRoles: clsUserRolesEN;
    if (arrUserRolesSel.length > 0) {
      objUserRoles = arrUserRolesSel[0];
      return objUserRoles.roleName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strRoleId,
    );
    console.error(strMsg);
    alert(strMsg);
  }
  return '';
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 * @returns 返回一个输出字段值
 */
export async function UserRoles_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsUserRolesEN.con_RoleId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsUserRolesEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsUserRolesEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strRoleId = strInValue;
  if (IsNullOrEmpty(strInValue) == true) {
    return '';
  }
  const objUserRoles = await UserRoles_GetObjByRoleIdCache(strRoleId);
  if (objUserRoles == null) return '';
  if (objUserRoles.GetFldValue(strOutFldName) == null) return '';
  return objUserRoles.GetFldValue(strOutFldName).toString();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function UserRoles_SortFunDefa(a: clsUserRolesEN, b: clsUserRolesEN): number {
  return a.roleId.localeCompare(b.roleId);
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
export function UserRoles_SortFunDefa2Fld(a: clsUserRolesEN, b: clsUserRolesEN): number {
  if (a.roleName == b.roleName) return a.prjId.localeCompare(b.prjId);
  else return a.roleName.localeCompare(b.roleName);
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
export function UserRoles_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsUserRolesEN.con_RoleId:
        return (a: clsUserRolesEN, b: clsUserRolesEN) => {
          return a.roleId.localeCompare(b.roleId);
        };
      case clsUserRolesEN.con_RoleName:
        return (a: clsUserRolesEN, b: clsUserRolesEN) => {
          return a.roleName.localeCompare(b.roleName);
        };
      case clsUserRolesEN.con_PrjId:
        return (a: clsUserRolesEN, b: clsUserRolesEN) => {
          return a.prjId.localeCompare(b.prjId);
        };
      case clsUserRolesEN.con_IsInUse:
        return (a: clsUserRolesEN) => {
          if (a.isInUse == true) return 1;
          else return -1;
        };
      case clsUserRolesEN.con_Memo:
        return (a: clsUserRolesEN, b: clsUserRolesEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[UserRoles]中不存在!(in ${userRoles_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsUserRolesEN.con_RoleId:
        return (a: clsUserRolesEN, b: clsUserRolesEN) => {
          return b.roleId.localeCompare(a.roleId);
        };
      case clsUserRolesEN.con_RoleName:
        return (a: clsUserRolesEN, b: clsUserRolesEN) => {
          return b.roleName.localeCompare(a.roleName);
        };
      case clsUserRolesEN.con_PrjId:
        return (a: clsUserRolesEN, b: clsUserRolesEN) => {
          return b.prjId.localeCompare(a.prjId);
        };
      case clsUserRolesEN.con_IsInUse:
        return (b: clsUserRolesEN) => {
          if (b.isInUse == true) return 1;
          else return -1;
        };
      case clsUserRolesEN.con_Memo:
        return (a: clsUserRolesEN, b: clsUserRolesEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[UserRoles]中不存在!(in ${userRoles_ConstructorName}.${strThisFuncName})`;
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
export async function UserRoles_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsUserRolesEN.con_RoleId:
      return (obj: clsUserRolesEN) => {
        return obj.roleId === value;
      };
    case clsUserRolesEN.con_RoleName:
      return (obj: clsUserRolesEN) => {
        return obj.roleName === value;
      };
    case clsUserRolesEN.con_PrjId:
      return (obj: clsUserRolesEN) => {
        return obj.prjId === value;
      };
    case clsUserRolesEN.con_IsInUse:
      return (obj: clsUserRolesEN) => {
        return obj.isInUse === value;
      };
    case clsUserRolesEN.con_Memo:
      return (obj: clsUserRolesEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[UserRoles]中不存在!(in ${userRoles_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 * @returns 返回一个关键字值列表
 */
export async function UserRoles_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsUserRolesEN.con_RoleId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrUserRoles = await UserRoles_GetObjLstCache();
  if (arrUserRoles == null) return [];
  let arrUserRolesSel = arrUserRoles;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrUserRolesSel = arrUserRolesSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrUserRolesSel = arrUserRolesSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrUserRolesSel = arrUserRolesSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrUserRolesSel = arrUserRolesSel.filter((x) => x.GetFldValue(strInFldName) == strInValue);
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrUserRolesSel = arrUserRolesSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrUserRolesSel = arrUserRolesSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrUserRolesSel = arrUserRolesSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrUserRolesSel = arrUserRolesSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrUserRolesSel = arrUserRolesSel.filter((x) => x.GetFldValue(strInFldName) > strInValue);
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrUserRolesSel = arrUserRolesSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrUserRolesSel.length == 0) return [];
  return arrUserRolesSel.map((x) => x.roleId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function UserRoles_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(userRoles_Controller, strAction);

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
        userRoles_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userRoles_ConstructorName,
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
export async function UserRoles_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(userRoles_Controller, strAction);

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
        userRoles_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userRoles_ConstructorName,
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
export async function UserRoles_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsUserRolesEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(userRoles_Controller, strAction);

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
      const objUserRoles = UserRoles_GetObjFromJsonObj(returnObj);
      return objUserRoles;
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
        userRoles_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userRoles_ConstructorName,
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
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_ClientCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function UserRoles_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsUserRolesEN._CurrTabName;
  if (IsNullOrEmpty(clsUserRolesEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsUserRolesEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrUserRolesExObjLstCache: Array<clsUserRolesEN> = CacheHelper.Get(strKey);
    const arrUserRolesObjLstT = UserRoles_GetObjLstByJSONObjLst(arrUserRolesExObjLstCache);
    return arrUserRolesObjLstT;
  }
  try {
    const arrUserRolesExObjLst = await UserRoles_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrUserRolesExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrUserRolesExObjLst.length,
    );
    console.log(strInfo);
    return arrUserRolesExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      userRoles_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function UserRoles_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsUserRolesEN._CurrTabName;
  if (IsNullOrEmpty(clsUserRolesEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsUserRolesEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrUserRolesExObjLstCache: Array<clsUserRolesEN> = JSON.parse(strTempObjLst);
    const arrUserRolesObjLstT = UserRoles_GetObjLstByJSONObjLst(arrUserRolesExObjLstCache);
    return arrUserRolesObjLstT;
  }
  try {
    const arrUserRolesExObjLst = await UserRoles_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrUserRolesExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrUserRolesExObjLst.length,
    );
    console.log(strInfo);
    return arrUserRolesExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      userRoles_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.如果本地不存在就返回null,不会去访问WebApi获取数据。
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function UserRoles_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsUserRolesEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrUserRolesObjLstCache: Array<clsUserRolesEN> = JSON.parse(strTempObjLst);
    return arrUserRolesObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function UserRoles_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsUserRolesEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(userRoles_Controller, strAction);

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
          userRoles_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = UserRoles_GetObjLstByJSONObjLst(returnObjLst);
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
        userRoles_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userRoles_ConstructorName,
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
 * 获取本地sessionStorage缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function UserRoles_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsUserRolesEN._CurrTabName;
  if (IsNullOrEmpty(clsUserRolesEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsUserRolesEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrUserRolesExObjLstCache: Array<clsUserRolesEN> = JSON.parse(strTempObjLst);
    const arrUserRolesObjLstT = UserRoles_GetObjLstByJSONObjLst(arrUserRolesExObjLstCache);
    return arrUserRolesObjLstT;
  }
  try {
    const arrUserRolesExObjLst = await UserRoles_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrUserRolesExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrUserRolesExObjLst.length,
    );
    console.log(strInfo);
    return arrUserRolesExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      userRoles_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function UserRoles_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsUserRolesEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrUserRolesObjLstCache: Array<clsUserRolesEN> = JSON.parse(strTempObjLst);
    return arrUserRolesObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function UserRoles_GetObjLstCache(): Promise<Array<clsUserRolesEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrUserRolesObjLstCache;
  switch (clsUserRolesEN.CacheModeId) {
    case '04': //sessionStorage
      arrUserRolesObjLstCache = await UserRoles_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrUserRolesObjLstCache = await UserRoles_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrUserRolesObjLstCache = await UserRoles_GetObjLstClientCache();
      break;
    default:
      arrUserRolesObjLstCache = await UserRoles_GetObjLstClientCache();
      break;
  }
  return arrUserRolesObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function UserRoles_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrUserRolesObjLstCache;
  switch (clsUserRolesEN.CacheModeId) {
    case '04': //sessionStorage
      arrUserRolesObjLstCache = await UserRoles_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrUserRolesObjLstCache = await UserRoles_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrUserRolesObjLstCache = null;
      break;
    default:
      arrUserRolesObjLstCache = null;
      break;
  }
  return arrUserRolesObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrRoleIdCond:条件对象
 * @returns 对象列表子集
 */
export async function UserRoles_GetSubObjLstCache(objUserRolesCond: clsUserRolesEN) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrUserRolesObjLstCache = await UserRoles_GetObjLstCache();
  let arrUserRolesSel = arrUserRolesObjLstCache;
  if (objUserRolesCond.sfFldComparisonOp == null || objUserRolesCond.sfFldComparisonOp == '')
    return arrUserRolesSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objUserRolesCond.sfFldComparisonOp,
  );
  //console.log("clsUserRolesWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objUserRolesCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrUserRolesSel = arrUserRolesSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objUserRolesCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrUserRolesSel = arrUserRolesSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrUserRolesSel = arrUserRolesSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrUserRolesSel = arrUserRolesSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrUserRolesSel = arrUserRolesSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrUserRolesSel = arrUserRolesSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrUserRolesSel = arrUserRolesSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrUserRolesSel = arrUserRolesSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrUserRolesSel = arrUserRolesSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrUserRolesSel = arrUserRolesSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrUserRolesSel = arrUserRolesSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrUserRolesSel = arrUserRolesSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrUserRolesSel = arrUserRolesSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrUserRolesSel = arrUserRolesSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrUserRolesSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objUserRolesCond),
      userRoles_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsUserRolesEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrRoleId:关键字列表
 * @returns 对象列表
 **/
export async function UserRoles_GetObjLstByRoleIdLstAsync(
  arrRoleId: Array<string>,
): Promise<Array<clsUserRolesEN>> {
  const strThisFuncName = 'GetObjLstByRoleIdLstAsync';
  const strAction = 'GetObjLstByRoleIdLst';
  const strUrl = GetWebApiUrl(userRoles_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrRoleId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          userRoles_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = UserRoles_GetObjLstByJSONObjLst(returnObjLst);
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
        userRoles_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userRoles_ConstructorName,
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
 * 根据关键字列表获取相关对象列表, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)
 * @param arrstrRoleIdLst:关键字列表
 * @returns 对象列表
 */
export async function UserRoles_GetObjLstByRoleIdLstCache(arrRoleIdLst: Array<string>) {
  const strThisFuncName = 'GetObjLstByRoleIdLstCache';
  try {
    const arrUserRolesObjLstCache = await UserRoles_GetObjLstCache();
    const arrUserRolesSel = arrUserRolesObjLstCache.filter(
      (x) => arrRoleIdLst.indexOf(x.roleId) > -1,
    );
    return arrUserRolesSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrRoleIdLst.join(','),
      userRoles_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
}

/**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export async function UserRoles_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsUserRolesEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(userRoles_Controller, strAction);

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
          userRoles_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = UserRoles_GetObjLstByJSONObjLst(returnObjLst);
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
        userRoles_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userRoles_ConstructorName,
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
export async function UserRoles_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsUserRolesEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(userRoles_Controller, strAction);

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
          userRoles_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = UserRoles_GetObjLstByJSONObjLst(returnObjLst);
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
        userRoles_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userRoles_ConstructorName,
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
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerCache)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function UserRoles_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsUserRolesEN>();
  const arrUserRolesObjLstCache = await UserRoles_GetObjLstCache();
  if (arrUserRolesObjLstCache.length == 0) return arrUserRolesObjLstCache;
  let arrUserRolesSel = arrUserRolesObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objUserRolesCond = new clsUserRolesEN();
  ObjectAssign(objUserRolesCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsUserRolesWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrUserRolesSel = arrUserRolesSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objUserRolesCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrUserRolesSel = arrUserRolesSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrUserRolesSel = arrUserRolesSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrUserRolesSel = arrUserRolesSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrUserRolesSel = arrUserRolesSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrUserRolesSel = arrUserRolesSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrUserRolesSel = arrUserRolesSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrUserRolesSel = arrUserRolesSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrUserRolesSel = arrUserRolesSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrUserRolesSel = arrUserRolesSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrUserRolesSel = arrUserRolesSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrUserRolesSel = arrUserRolesSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrUserRolesSel = arrUserRolesSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrUserRolesSel = arrUserRolesSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrUserRolesSel = arrUserRolesSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrUserRolesSel.length == 0) return arrUserRolesSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrUserRolesSel = arrUserRolesSel.sort(UserRoles_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrUserRolesSel = arrUserRolesSel.sort(objPagerPara.sortFun);
    }
    arrUserRolesSel = arrUserRolesSel.slice(intStart, intEnd);
    return arrUserRolesSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      userRoles_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsUserRolesEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function UserRoles_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsUserRolesEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsUserRolesEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(userRoles_Controller, strAction);

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
          userRoles_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = UserRoles_GetObjLstByJSONObjLst(returnObjLst);
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
        userRoles_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userRoles_ConstructorName,
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
 * @param strRoleId:关键字
 * @returns 获取删除的结果
 **/
export async function UserRoles_DelRecordAsync(strRoleId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(userRoles_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strRoleId);

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
        userRoles_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userRoles_ConstructorName,
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
 * @param arrRoleId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function UserRoles_DelUserRolessAsync(arrRoleId: Array<string>): Promise<number> {
  const strThisFuncName = 'DelUserRolessAsync';
  const strAction = 'DelUserRoless';
  const strUrl = GetWebApiUrl(userRoles_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrRoleId, config);
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
        userRoles_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userRoles_ConstructorName,
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
export async function UserRoles_DelUserRolessByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'DelUserRolessByCondAsync';
  const strAction = 'DelUserRolessByCond';
  const strUrl = GetWebApiUrl(userRoles_Controller, strAction);

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
        userRoles_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userRoles_ConstructorName,
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
 * @param objUserRolesEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function UserRoles_AddNewRecordAsync(
  objUserRolesEN: clsUserRolesEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  if (objUserRolesEN.roleId === null || objUserRolesEN.roleId === '') {
    const strMsg = '需要的对象的关键字为空,不能添加!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objUserRolesEN);
  const strUrl = GetWebApiUrl(userRoles_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objUserRolesEN, config);
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
        userRoles_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userRoles_ConstructorName,
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
 * @param objUserRolesEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function UserRoles_AddNewRecordWithMaxIdAsync(
  objUserRolesEN: clsUserRolesEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(userRoles_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objUserRolesEN, config);
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
        userRoles_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userRoles_ConstructorName,
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
 * @param objUserRolesEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function UserRoles_AddNewRecordWithReturnKeyAsync(
  objUserRolesEN: clsUserRolesEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(userRoles_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objUserRolesEN, config);
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
        userRoles_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userRoles_ConstructorName,
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
 * @param objUserRolesEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function UserRoles_UpdateRecordAsync(
  objUserRolesEN: clsUserRolesEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objUserRolesEN.sfUpdFldSetStr === undefined ||
    objUserRolesEN.sfUpdFldSetStr === null ||
    objUserRolesEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format('对象(关键字: {0})的【修改字段集】为空,不能修改!', objUserRolesEN.roleId);
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(userRoles_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objUserRolesEN, config);
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
        userRoles_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userRoles_ConstructorName,
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
 * @param objUserRolesEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function UserRoles_UpdateWithConditionAsync(
  objUserRolesEN: clsUserRolesEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objUserRolesEN.sfUpdFldSetStr === undefined ||
    objUserRolesEN.sfUpdFldSetStr === null ||
    objUserRolesEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format('对象(关键字: {0})的【修改字段集】为空,不能修改!', objUserRolesEN.roleId);
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(userRoles_Controller, strAction);
  objUserRolesEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objUserRolesEN, config);
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
        userRoles_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userRoles_ConstructorName,
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
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistRecordCache)
 * @param objstrRoleIdCond:条件对象
 * @returns 对象列表子集
 */
export async function UserRoles_IsExistRecordCache(objUserRolesCond: clsUserRolesEN) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrUserRolesObjLstCache = await UserRoles_GetObjLstCache();
  if (arrUserRolesObjLstCache == null) return false;
  let arrUserRolesSel = arrUserRolesObjLstCache;
  if (objUserRolesCond.sfFldComparisonOp == null || objUserRolesCond.sfFldComparisonOp == '')
    return arrUserRolesSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objUserRolesCond.sfFldComparisonOp,
  );
  //console.log("clsUserRolesWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objUserRolesCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objUserRolesCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrUserRolesSel = arrUserRolesSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrUserRolesSel = arrUserRolesSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrUserRolesSel = arrUserRolesSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrUserRolesSel = arrUserRolesSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrUserRolesSel = arrUserRolesSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrUserRolesSel = arrUserRolesSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrUserRolesSel = arrUserRolesSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrUserRolesSel = arrUserRolesSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrUserRolesSel = arrUserRolesSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrUserRolesSel = arrUserRolesSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrUserRolesSel = arrUserRolesSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrUserRolesSel = arrUserRolesSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrUserRolesSel = arrUserRolesSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrUserRolesSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objUserRolesCond),
      userRoles_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return false;
}

/**
 * 根据条件获取是否存在相应的记录？
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistRecordAsync)
 * @param strWhereCond:条件
 * @returns 是否存在记录？
 **/
export async function UserRoles_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(userRoles_Controller, strAction);

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
        userRoles_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userRoles_ConstructorName,
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
 * 根据关键字判断是否存在记录, 从本地缓存中判断.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistCache)
 * @param strRoleId:所给的关键字
 * @returns 对象
 */
export async function UserRoles_IsExistCache(strRoleId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrUserRolesObjLstCache = await UserRoles_GetObjLstCache();
  if (arrUserRolesObjLstCache == null) return false;
  try {
    const arrUserRolesSel = arrUserRolesObjLstCache.filter((x) => x.roleId == strRoleId);
    if (arrUserRolesSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strRoleId,
      userRoles_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
  return false;
}

/**
 * 根据关键字判断是否存在记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistAsync)
 * @param strRoleId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function UserRoles_IsExistAsync(strRoleId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(userRoles_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strRoleId,
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
        userRoles_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userRoles_ConstructorName,
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
export async function UserRoles_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(userRoles_Controller, strAction);

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
        userRoles_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userRoles_ConstructorName,
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
 * 根据条件对象, 从缓存的对象列表中获取记录数.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetRecCountByCondCache)
 * @param objUserRolesCond:条件对象
 * @returns 对象列表记录数
 */
export async function UserRoles_GetRecCountByCondCache(objUserRolesCond: clsUserRolesEN) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrUserRolesObjLstCache = await UserRoles_GetObjLstCache();
  if (arrUserRolesObjLstCache == null) return 0;
  let arrUserRolesSel = arrUserRolesObjLstCache;
  if (objUserRolesCond.sfFldComparisonOp == null || objUserRolesCond.sfFldComparisonOp == '')
    return arrUserRolesSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objUserRolesCond.sfFldComparisonOp,
  );
  //console.log("clsUserRolesWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objUserRolesCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrUserRolesSel = arrUserRolesSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objUserRolesCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrUserRolesSel = arrUserRolesSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrUserRolesSel = arrUserRolesSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrUserRolesSel = arrUserRolesSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrUserRolesSel = arrUserRolesSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrUserRolesSel = arrUserRolesSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrUserRolesSel = arrUserRolesSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrUserRolesSel = arrUserRolesSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrUserRolesSel = arrUserRolesSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrUserRolesSel = arrUserRolesSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrUserRolesSel = arrUserRolesSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrUserRolesSel = arrUserRolesSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrUserRolesSel = arrUserRolesSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrUserRolesSel = arrUserRolesSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrUserRolesSel = arrUserRolesSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrUserRolesSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objUserRolesCond),
      userRoles_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return 0;
}
/*该表的关键字类型不是字符型自增,不需要生成获取最大关键字函数!*/
/*该表的关键字类型不是字符型带前缀自增,不需要生成获取最大关键字函数!*/

/**
 * 根据前缀获取当前表关键字值的最大值,再加1,避免重复
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetMaxStrIdByPrefix)
 * @param mapParam:参数列表
 * @returns 获取当前表关键字值的最大值
 */
export async function UserRoles_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(userRoles_Controller, strAction);

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
        userRoles_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userRoles_ConstructorName,
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
export function UserRoles_GetWebApiUrl(strController: string, strAction: string): string {
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

/**
 * 刷新缓存.把当前表的缓存以及该表相关视图的缓存清空.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshCache)
 **/
export function UserRoles_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功!');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clsUserRolesEN._CurrTabName;
  switch (clsUserRolesEN.CacheModeId) {
    case '04': //sessionStorage
      sessionStorage.removeItem(strKey);
      break;
    case '03': //localStorage
      localStorage.removeItem(strKey);
      break;
    case '02': //ClientCache
      CacheHelper.Remove(strKey);
      break;
    default:
      CacheHelper.Remove(strKey);
      break;
  }
}

/**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export function UserRoles_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsUserRolesEN._CurrTabName;
    switch (clsUserRolesEN.CacheModeId) {
      case '04': //sessionStorage
        sessionStorage.removeItem(strKey);
        break;
      case '03': //localStorage
        localStorage.removeItem(strKey);
        break;
      case '02': //ClientCache
        CacheHelper.Remove(strKey);
        break;
      default:
        CacheHelper.Remove(strKey);
        break;
    }
    const strMsg = Format('刷新缓存成功!');
    console.trace(strMsg);
  } else {
    const strMsg = Format('刷新缓存已经关闭。');
    console.trace(strMsg);
  }
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)
 * @param objDDL:需要绑定当前表的下拉框

*/
export async function UserRoles_Cache(objDiv: HTMLDivElement, strDdlName: string) {
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In )', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：Cache");
  const arrObjLstSel = await UserRoles_GetObjLstCache();
  if (arrObjLstSel == null) return;
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsUserRolesEN.con_RoleId,
    clsUserRolesEN.con_RoleName,
    '用户角色',
  );
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function UserRoles_CheckPropertyNew(pobjUserRolesEN: clsUserRolesEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjUserRolesEN.roleName) === true) {
    throw new Error(
      '(errid:Watl000411)字段[角色名称]不能为空(In 用户角色)!(clsUserRolesBL:CheckPropertyNew0)',
    );
  }
  if (IsNullOrEmpty(pobjUserRolesEN.prjId) === true || pobjUserRolesEN.prjId.toString() === '0') {
    throw new Error(
      '(errid:Watl000411)字段[工程ID]不能为空(In 用户角色)!(clsUserRolesBL:CheckPropertyNew0)',
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (IsNullOrEmpty(pobjUserRolesEN.roleId) == false && GetStrLen(pobjUserRolesEN.roleId) > 8) {
    throw new Error(
      '(errid:Watl000413)字段[角色ID(roleId)]的长度不能超过8(In 用户角色(UserRoles))!值:$(pobjUserRolesEN.roleId)(clsUserRolesBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserRolesEN.roleName) == false &&
    GetStrLen(pobjUserRolesEN.roleName) > 30
  ) {
    throw new Error(
      '(errid:Watl000413)字段[角色名称(roleName)]的长度不能超过30(In 用户角色(UserRoles))!值:$(pobjUserRolesEN.roleName)(clsUserRolesBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjUserRolesEN.prjId) == false && GetStrLen(pobjUserRolesEN.prjId) > 4) {
    throw new Error(
      '(errid:Watl000413)字段[工程ID(prjId)]的长度不能超过4(In 用户角色(UserRoles))!值:$(pobjUserRolesEN.prjId)(clsUserRolesBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjUserRolesEN.memo) == false && GetStrLen(pobjUserRolesEN.memo) > 1000) {
    throw new Error(
      '(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In 用户角色(UserRoles))!值:$(pobjUserRolesEN.memo)(clsUserRolesBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjUserRolesEN.roleId) == false &&
    undefined !== pobjUserRolesEN.roleId &&
    tzDataType.isString(pobjUserRolesEN.roleId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[角色ID(roleId)]的值:[$(pobjUserRolesEN.roleId)], 非法,应该为字符型(In 用户角色(UserRoles))!(clsUserRolesBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserRolesEN.roleName) == false &&
    undefined !== pobjUserRolesEN.roleName &&
    tzDataType.isString(pobjUserRolesEN.roleName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[角色名称(roleName)]的值:[$(pobjUserRolesEN.roleName)], 非法,应该为字符型(In 用户角色(UserRoles))!(clsUserRolesBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserRolesEN.prjId) == false &&
    undefined !== pobjUserRolesEN.prjId &&
    tzDataType.isString(pobjUserRolesEN.prjId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[工程ID(prjId)]的值:[$(pobjUserRolesEN.prjId)], 非法,应该为字符型(In 用户角色(UserRoles))!(clsUserRolesBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjUserRolesEN.isInUse &&
    undefined !== pobjUserRolesEN.isInUse &&
    tzDataType.isBoolean(pobjUserRolesEN.isInUse) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[IsInUse(isInUse)]的值:[$(pobjUserRolesEN.isInUse)], 非法,应该为布尔型(In 用户角色(UserRoles))!(clsUserRolesBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserRolesEN.memo) == false &&
    undefined !== pobjUserRolesEN.memo &&
    tzDataType.isString(pobjUserRolesEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[说明(memo)]的值:[$(pobjUserRolesEN.memo)], 非法,应该为字符型(In 用户角色(UserRoles))!(clsUserRolesBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function UserRoles_CheckProperty4Update(pobjUserRolesEN: clsUserRolesEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (IsNullOrEmpty(pobjUserRolesEN.roleId) == false && GetStrLen(pobjUserRolesEN.roleId) > 8) {
    throw new Error(
      '(errid:Watl000416)字段[角色ID(roleId)]的长度不能超过8(In 用户角色(UserRoles))!值:$(pobjUserRolesEN.roleId)(clsUserRolesBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserRolesEN.roleName) == false &&
    GetStrLen(pobjUserRolesEN.roleName) > 30
  ) {
    throw new Error(
      '(errid:Watl000416)字段[角色名称(roleName)]的长度不能超过30(In 用户角色(UserRoles))!值:$(pobjUserRolesEN.roleName)(clsUserRolesBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjUserRolesEN.prjId) == false && GetStrLen(pobjUserRolesEN.prjId) > 4) {
    throw new Error(
      '(errid:Watl000416)字段[工程ID(prjId)]的长度不能超过4(In 用户角色(UserRoles))!值:$(pobjUserRolesEN.prjId)(clsUserRolesBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjUserRolesEN.memo) == false && GetStrLen(pobjUserRolesEN.memo) > 1000) {
    throw new Error(
      '(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In 用户角色(UserRoles))!值:$(pobjUserRolesEN.memo)(clsUserRolesBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjUserRolesEN.roleId) == false &&
    undefined !== pobjUserRolesEN.roleId &&
    tzDataType.isString(pobjUserRolesEN.roleId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[角色ID(roleId)]的值:[$(pobjUserRolesEN.roleId)], 非法,应该为字符型(In 用户角色(UserRoles))!(clsUserRolesBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserRolesEN.roleName) == false &&
    undefined !== pobjUserRolesEN.roleName &&
    tzDataType.isString(pobjUserRolesEN.roleName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[角色名称(roleName)]的值:[$(pobjUserRolesEN.roleName)], 非法,应该为字符型(In 用户角色(UserRoles))!(clsUserRolesBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserRolesEN.prjId) == false &&
    undefined !== pobjUserRolesEN.prjId &&
    tzDataType.isString(pobjUserRolesEN.prjId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[工程ID(prjId)]的值:[$(pobjUserRolesEN.prjId)], 非法,应该为字符型(In 用户角色(UserRoles))!(clsUserRolesBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjUserRolesEN.isInUse &&
    undefined !== pobjUserRolesEN.isInUse &&
    tzDataType.isBoolean(pobjUserRolesEN.isInUse) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[IsInUse(isInUse)]的值:[$(pobjUserRolesEN.isInUse)], 非法,应该为布尔型(In 用户角色(UserRoles))!(clsUserRolesBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserRolesEN.memo) == false &&
    undefined !== pobjUserRolesEN.memo &&
    tzDataType.isString(pobjUserRolesEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[说明(memo)]的值:[$(pobjUserRolesEN.memo)], 非法,应该为字符型(In 用户角色(UserRoles))!(clsUserRolesBL:CheckProperty4Update)',
    );
  }
  //检查主键是否为Null或者空!
  if (IsNullOrEmpty(pobjUserRolesEN.roleId) === true) {
    throw new Error(
      '(errid:Watl000064)字段[角色ID]不能为空(In 用户角色)!(clsUserRolesBL:CheckProperty4Update)',
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
export function UserRoles_GetJSONStrByObj(pobjUserRolesEN: clsUserRolesEN): string {
  pobjUserRolesEN.sfUpdFldSetStr = pobjUserRolesEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjUserRolesEN);
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
export function UserRoles_GetObjLstByJSONStr(strJSON: string): Array<clsUserRolesEN> {
  let arrUserRolesObjLst = new Array<clsUserRolesEN>();
  if (strJSON === '') {
    return arrUserRolesObjLst;
  }
  try {
    arrUserRolesObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrUserRolesObjLst;
  }
  return arrUserRolesObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrUserRolesObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function UserRoles_GetObjLstByJSONObjLst(
  arrUserRolesObjLstS: Array<clsUserRolesEN>,
): Array<clsUserRolesEN> {
  const arrUserRolesObjLst = new Array<clsUserRolesEN>();
  for (const objInFor of arrUserRolesObjLstS) {
    const obj1 = UserRoles_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrUserRolesObjLst.push(obj1);
  }
  return arrUserRolesObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function UserRoles_GetObjByJSONStr(strJSON: string): clsUserRolesEN {
  let pobjUserRolesEN = new clsUserRolesEN();
  if (strJSON === '') {
    return pobjUserRolesEN;
  }
  try {
    pobjUserRolesEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjUserRolesEN;
  }
  return pobjUserRolesEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function UserRoles_GetCombineCondition(objUserRolesCond: clsUserRolesEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objUserRolesCond.dicFldComparisonOp,
      clsUserRolesEN.con_RoleId,
    ) == true
  ) {
    const strComparisonOpRoleId: string =
      objUserRolesCond.dicFldComparisonOp[clsUserRolesEN.con_RoleId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsUserRolesEN.con_RoleId,
      objUserRolesCond.roleId,
      strComparisonOpRoleId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objUserRolesCond.dicFldComparisonOp,
      clsUserRolesEN.con_RoleName,
    ) == true
  ) {
    const strComparisonOpRoleName: string =
      objUserRolesCond.dicFldComparisonOp[clsUserRolesEN.con_RoleName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsUserRolesEN.con_RoleName,
      objUserRolesCond.roleName,
      strComparisonOpRoleName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objUserRolesCond.dicFldComparisonOp,
      clsUserRolesEN.con_PrjId,
    ) == true
  ) {
    const strComparisonOpPrjId: string =
      objUserRolesCond.dicFldComparisonOp[clsUserRolesEN.con_PrjId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsUserRolesEN.con_PrjId,
      objUserRolesCond.prjId,
      strComparisonOpPrjId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objUserRolesCond.dicFldComparisonOp,
      clsUserRolesEN.con_IsInUse,
    ) == true
  ) {
    if (objUserRolesCond.isInUse == true) {
      strWhereCond += Format(" And {0} = '1'", clsUserRolesEN.con_IsInUse);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsUserRolesEN.con_IsInUse);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objUserRolesCond.dicFldComparisonOp,
      clsUserRolesEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objUserRolesCond.dicFldComparisonOp[clsUserRolesEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsUserRolesEN.con_Memo,
      objUserRolesCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objUserRolesENS:源对象
 * @param objUserRolesENT:目标对象
 */
export function UserRoles_GetObjFromJsonObj(objUserRolesENS: clsUserRolesEN): clsUserRolesEN {
  const objUserRolesENT: clsUserRolesEN = new clsUserRolesEN();
  ObjectAssign(objUserRolesENT, objUserRolesENS);
  return objUserRolesENT;
}
