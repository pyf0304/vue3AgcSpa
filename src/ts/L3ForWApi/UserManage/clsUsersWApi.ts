/**
 * 类名:clsUsersWApi
 * 表名:Users(00050001)
 * 版本:2023.10.12.1(服务器:WIN-SRV103-116)
 * 日期:2023/10/12 14:42:05
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
 * 用于用户管理(Users)
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
import { clsUsersEN } from '@/ts/L0Entity/UserManage/clsUsersEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const users_Controller = 'UsersApi';
export const users_ConstructorName = 'users';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strUserId:关键字
 * @returns 对象
 **/
export async function Users_GetObjByUserIdAsync(strUserId: string): Promise<clsUsersEN | null> {
  const strThisFuncName = 'GetObjByUserIdAsync';

  if (IsNullOrEmpty(strUserId) == true) {
    const strMsg = Format('参数:[strUserId]不能为空!(In clsUsersWApi.GetObjByUserIdAsync)');
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByUserId';
  const strUrl = GetWebApiUrl(users_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strUserId,
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
      const objUsers = Users_GetObjFromJsonObj(returnObj);
      return objUsers;
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
        users_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        users_ConstructorName,
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
 * @param strUserId:所给的关键字
 * @returns 对象
 */
export async function Users_GetObjByUserIdCache(strUserId: string, bolTryAsyncOnce = true) {
  const strThisFuncName = 'GetObjByUserIdCache';

  if (IsNullOrEmpty(strUserId) == true) {
    const strMsg = Format('参数:[strUserId]不能为空!(In clsUsersWApi.GetObjByUserIdCache)');
    console.error(strMsg);
    throw strMsg;
  }
  const arrUsersObjLstCache = await Users_GetObjLstCache();
  try {
    const arrUsersSel = arrUsersObjLstCache.filter((x) => x.userId == strUserId);
    let objUsers: clsUsersEN;
    if (arrUsersSel.length > 0) {
      objUsers = arrUsersSel[0];
      return objUsers;
    } else {
      if (bolTryAsyncOnce == true) {
        const objUsersConst = await Users_GetObjByUserIdAsync(strUserId);
        if (objUsersConst != null) {
          Users_ReFreshThisCache();
          return objUsersConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strUserId,
      users_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strUserId:所给的关键字
 * @returns 对象
 */
export async function Users_GetObjByUserIdlocalStorage(strUserId: string) {
  const strThisFuncName = 'GetObjByUserIdlocalStorage';

  if (IsNullOrEmpty(strUserId) == true) {
    const strMsg = Format('参数:[strUserId]不能为空!(In clsUsersWApi.GetObjByUserIdlocalStorage)');
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsUsersEN._CurrTabName, strUserId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objUsersCache: clsUsersEN = JSON.parse(strTempObj);
    return objUsersCache;
  }
  try {
    const objUsers = await Users_GetObjByUserIdAsync(strUserId);
    if (objUsers != null) {
      localStorage.setItem(strKey, JSON.stringify(objUsers));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objUsers;
    }
    return objUsers;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strUserId,
      users_ConstructorName,
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
 * @param objUsers:所给的对象
 * @returns 对象
 */
export async function Users_UpdateObjInLstCache(objUsers: clsUsersEN) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrUsersObjLstCache = await Users_GetObjLstCache();
    const obj = arrUsersObjLstCache.find((x) => x.userId == objUsers.userId);
    if (obj != null) {
      objUsers.userId = obj.userId;
      ObjectAssign(obj, objUsers);
    } else {
      arrUsersObjLstCache.push(objUsers);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      users_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strUserId:所给的关键字
 * @returns 对象
 */
export async function Users_GetNameByUserIdCache(strUserId: string) {
  if (IsNullOrEmpty(strUserId) == true) {
    const strMsg = Format('参数:[strUserId]不能为空!(In clsUsersWApi.GetNameByUserIdCache)');
    console.error(strMsg);
    throw strMsg;
  }
  const arrUsersObjLstCache = await Users_GetObjLstCache();
  if (arrUsersObjLstCache == null) return '';
  try {
    const arrUsersSel = arrUsersObjLstCache.filter((x) => x.userId == strUserId);
    let objUsers: clsUsersEN;
    if (arrUsersSel.length > 0) {
      objUsers = arrUsersSel[0];
      return objUsers.userName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strUserId,
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
export async function Users_func(strInFldName: string, strOutFldName: string, strInValue: string) {
  //const strThisFuncName = "func";

  if (strInFldName != clsUsersEN.con_UserId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsUsersEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsUsersEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strUserId = strInValue;
  if (IsNullOrEmpty(strInValue) == true) {
    return '';
  }
  const objUsers = await Users_GetObjByUserIdCache(strUserId);
  if (objUsers == null) return '';
  if (objUsers.GetFldValue(strOutFldName) == null) return '';
  return objUsers.GetFldValue(strOutFldName).toString();
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
export function Users_SortFunDefa(a: clsUsersEN, b: clsUsersEN): number {
  return a.userId.localeCompare(b.userId);
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
export function Users_SortFunDefa2Fld(a: clsUsersEN, b: clsUsersEN): number {
  if (a.userName == b.userName) return a.departmentId.localeCompare(b.departmentId);
  else return a.userName.localeCompare(b.userName);
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
export function Users_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsUsersEN.con_UserId:
        return (a: clsUsersEN, b: clsUsersEN) => {
          return a.userId.localeCompare(b.userId);
        };
      case clsUsersEN.con_UserName:
        return (a: clsUsersEN, b: clsUsersEN) => {
          return a.userName.localeCompare(b.userName);
        };
      case clsUsersEN.con_DepartmentId:
        return (a: clsUsersEN, b: clsUsersEN) => {
          return a.departmentId.localeCompare(b.departmentId);
        };
      case clsUsersEN.con_UserStateId:
        return (a: clsUsersEN, b: clsUsersEN) => {
          if (a.userStateId == null) return -1;
          if (b.userStateId == null) return 1;
          return a.userStateId.localeCompare(b.userStateId);
        };
      case clsUsersEN.con_RoleId:
        return (a: clsUsersEN, b: clsUsersEN) => {
          if (a.roleId == null) return -1;
          if (b.roleId == null) return 1;
          return a.roleId.localeCompare(b.roleId);
        };
      case clsUsersEN.con_qxdj:
        return (a: clsUsersEN, b: clsUsersEN) => {
          return a.qxdj - b.qxdj;
        };
      case clsUsersEN.con_EffectiveDate:
        return (a: clsUsersEN, b: clsUsersEN) => {
          if (a.effectiveDate == null) return -1;
          if (b.effectiveDate == null) return 1;
          return a.effectiveDate.localeCompare(b.effectiveDate);
        };
      case clsUsersEN.con_EffitiveBeginDate:
        return (a: clsUsersEN, b: clsUsersEN) => {
          if (a.effitiveBeginDate == null) return -1;
          if (b.effitiveBeginDate == null) return 1;
          return a.effitiveBeginDate.localeCompare(b.effitiveBeginDate);
        };
      case clsUsersEN.con_EffitiveEndDate:
        return (a: clsUsersEN, b: clsUsersEN) => {
          if (a.effitiveEndDate == null) return -1;
          if (b.effitiveEndDate == null) return 1;
          return a.effitiveEndDate.localeCompare(b.effitiveEndDate);
        };
      case clsUsersEN.con_Password:
        return (a: clsUsersEN, b: clsUsersEN) => {
          return a.password.localeCompare(b.password);
        };
      case clsUsersEN.con_IdentityID:
        return (a: clsUsersEN, b: clsUsersEN) => {
          if (a.identityID == null) return -1;
          if (b.identityID == null) return 1;
          return a.identityID.localeCompare(b.identityID);
        };
      case clsUsersEN.con_Email:
        return (a: clsUsersEN, b: clsUsersEN) => {
          if (a.email == null) return -1;
          if (b.email == null) return 1;
          return a.email.localeCompare(b.email);
        };
      case clsUsersEN.con_IsGpUser:
        return (a: clsUsersEN) => {
          if (a.isGpUser == true) return 1;
          else return -1;
        };
      case clsUsersEN.con_RegisterPassword:
        return (a: clsUsersEN, b: clsUsersEN) => {
          if (a.registerPassword == null) return -1;
          if (b.registerPassword == null) return 1;
          return a.registerPassword.localeCompare(b.registerPassword);
        };
      case clsUsersEN.con_IsRegister:
        return (a: clsUsersEN) => {
          if (a.isRegister == true) return 1;
          else return -1;
        };
      case clsUsersEN.con_RegisterDate:
        return (a: clsUsersEN, b: clsUsersEN) => {
          if (a.registerDate == null) return -1;
          if (b.registerDate == null) return 1;
          return a.registerDate.localeCompare(b.registerDate);
        };
      case clsUsersEN.con_IsAudit:
        return (a: clsUsersEN) => {
          if (a.isAudit == true) return 1;
          else return -1;
        };
      case clsUsersEN.con_AuditUser:
        return (a: clsUsersEN, b: clsUsersEN) => {
          if (a.auditUser == null) return -1;
          if (b.auditUser == null) return 1;
          return a.auditUser.localeCompare(b.auditUser);
        };
      case clsUsersEN.con_AuditDate:
        return (a: clsUsersEN, b: clsUsersEN) => {
          if (a.auditDate == null) return -1;
          if (b.auditDate == null) return 1;
          return a.auditDate.localeCompare(b.auditDate);
        };
      case clsUsersEN.con_UpdDate:
        return (a: clsUsersEN, b: clsUsersEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsUsersEN.con_UpdUser:
        return (a: clsUsersEN, b: clsUsersEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsUsersEN.con_Memo:
        return (a: clsUsersEN, b: clsUsersEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[Users]中不存在!(in ${users_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsUsersEN.con_UserId:
        return (a: clsUsersEN, b: clsUsersEN) => {
          return b.userId.localeCompare(a.userId);
        };
      case clsUsersEN.con_UserName:
        return (a: clsUsersEN, b: clsUsersEN) => {
          return b.userName.localeCompare(a.userName);
        };
      case clsUsersEN.con_DepartmentId:
        return (a: clsUsersEN, b: clsUsersEN) => {
          return b.departmentId.localeCompare(a.departmentId);
        };
      case clsUsersEN.con_UserStateId:
        return (a: clsUsersEN, b: clsUsersEN) => {
          if (b.userStateId == null) return -1;
          if (a.userStateId == null) return 1;
          return b.userStateId.localeCompare(a.userStateId);
        };
      case clsUsersEN.con_RoleId:
        return (a: clsUsersEN, b: clsUsersEN) => {
          if (b.roleId == null) return -1;
          if (a.roleId == null) return 1;
          return b.roleId.localeCompare(a.roleId);
        };
      case clsUsersEN.con_qxdj:
        return (a: clsUsersEN, b: clsUsersEN) => {
          return b.qxdj - a.qxdj;
        };
      case clsUsersEN.con_EffectiveDate:
        return (a: clsUsersEN, b: clsUsersEN) => {
          if (b.effectiveDate == null) return -1;
          if (a.effectiveDate == null) return 1;
          return b.effectiveDate.localeCompare(a.effectiveDate);
        };
      case clsUsersEN.con_EffitiveBeginDate:
        return (a: clsUsersEN, b: clsUsersEN) => {
          if (b.effitiveBeginDate == null) return -1;
          if (a.effitiveBeginDate == null) return 1;
          return b.effitiveBeginDate.localeCompare(a.effitiveBeginDate);
        };
      case clsUsersEN.con_EffitiveEndDate:
        return (a: clsUsersEN, b: clsUsersEN) => {
          if (b.effitiveEndDate == null) return -1;
          if (a.effitiveEndDate == null) return 1;
          return b.effitiveEndDate.localeCompare(a.effitiveEndDate);
        };
      case clsUsersEN.con_Password:
        return (a: clsUsersEN, b: clsUsersEN) => {
          return b.password.localeCompare(a.password);
        };
      case clsUsersEN.con_IdentityID:
        return (a: clsUsersEN, b: clsUsersEN) => {
          if (b.identityID == null) return -1;
          if (a.identityID == null) return 1;
          return b.identityID.localeCompare(a.identityID);
        };
      case clsUsersEN.con_Email:
        return (a: clsUsersEN, b: clsUsersEN) => {
          if (b.email == null) return -1;
          if (a.email == null) return 1;
          return b.email.localeCompare(a.email);
        };
      case clsUsersEN.con_IsGpUser:
        return (b: clsUsersEN) => {
          if (b.isGpUser == true) return 1;
          else return -1;
        };
      case clsUsersEN.con_RegisterPassword:
        return (a: clsUsersEN, b: clsUsersEN) => {
          if (b.registerPassword == null) return -1;
          if (a.registerPassword == null) return 1;
          return b.registerPassword.localeCompare(a.registerPassword);
        };
      case clsUsersEN.con_IsRegister:
        return (b: clsUsersEN) => {
          if (b.isRegister == true) return 1;
          else return -1;
        };
      case clsUsersEN.con_RegisterDate:
        return (a: clsUsersEN, b: clsUsersEN) => {
          if (b.registerDate == null) return -1;
          if (a.registerDate == null) return 1;
          return b.registerDate.localeCompare(a.registerDate);
        };
      case clsUsersEN.con_IsAudit:
        return (b: clsUsersEN) => {
          if (b.isAudit == true) return 1;
          else return -1;
        };
      case clsUsersEN.con_AuditUser:
        return (a: clsUsersEN, b: clsUsersEN) => {
          if (b.auditUser == null) return -1;
          if (a.auditUser == null) return 1;
          return b.auditUser.localeCompare(a.auditUser);
        };
      case clsUsersEN.con_AuditDate:
        return (a: clsUsersEN, b: clsUsersEN) => {
          if (b.auditDate == null) return -1;
          if (a.auditDate == null) return 1;
          return b.auditDate.localeCompare(a.auditDate);
        };
      case clsUsersEN.con_UpdDate:
        return (a: clsUsersEN, b: clsUsersEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsUsersEN.con_UpdUser:
        return (a: clsUsersEN, b: clsUsersEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsUsersEN.con_Memo:
        return (a: clsUsersEN, b: clsUsersEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[Users]中不存在!(in ${users_ConstructorName}.${strThisFuncName})`;
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
export async function Users_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsUsersEN.con_UserId:
      return (obj: clsUsersEN) => {
        return obj.userId === value;
      };
    case clsUsersEN.con_UserName:
      return (obj: clsUsersEN) => {
        return obj.userName === value;
      };
    case clsUsersEN.con_DepartmentId:
      return (obj: clsUsersEN) => {
        return obj.departmentId === value;
      };
    case clsUsersEN.con_UserStateId:
      return (obj: clsUsersEN) => {
        return obj.userStateId === value;
      };
    case clsUsersEN.con_RoleId:
      return (obj: clsUsersEN) => {
        return obj.roleId === value;
      };
    case clsUsersEN.con_qxdj:
      return (obj: clsUsersEN) => {
        return obj.qxdj === value;
      };
    case clsUsersEN.con_EffectiveDate:
      return (obj: clsUsersEN) => {
        return obj.effectiveDate === value;
      };
    case clsUsersEN.con_EffitiveBeginDate:
      return (obj: clsUsersEN) => {
        return obj.effitiveBeginDate === value;
      };
    case clsUsersEN.con_EffitiveEndDate:
      return (obj: clsUsersEN) => {
        return obj.effitiveEndDate === value;
      };
    case clsUsersEN.con_Password:
      return (obj: clsUsersEN) => {
        return obj.password === value;
      };
    case clsUsersEN.con_IdentityID:
      return (obj: clsUsersEN) => {
        return obj.identityID === value;
      };
    case clsUsersEN.con_Email:
      return (obj: clsUsersEN) => {
        return obj.email === value;
      };
    case clsUsersEN.con_IsGpUser:
      return (obj: clsUsersEN) => {
        return obj.isGpUser === value;
      };
    case clsUsersEN.con_RegisterPassword:
      return (obj: clsUsersEN) => {
        return obj.registerPassword === value;
      };
    case clsUsersEN.con_IsRegister:
      return (obj: clsUsersEN) => {
        return obj.isRegister === value;
      };
    case clsUsersEN.con_RegisterDate:
      return (obj: clsUsersEN) => {
        return obj.registerDate === value;
      };
    case clsUsersEN.con_IsAudit:
      return (obj: clsUsersEN) => {
        return obj.isAudit === value;
      };
    case clsUsersEN.con_AuditUser:
      return (obj: clsUsersEN) => {
        return obj.auditUser === value;
      };
    case clsUsersEN.con_AuditDate:
      return (obj: clsUsersEN) => {
        return obj.auditDate === value;
      };
    case clsUsersEN.con_UpdDate:
      return (obj: clsUsersEN) => {
        return obj.updDate === value;
      };
    case clsUsersEN.con_UpdUser:
      return (obj: clsUsersEN) => {
        return obj.updUser === value;
      };
    case clsUsersEN.con_Memo:
      return (obj: clsUsersEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[Users]中不存在!(in ${users_ConstructorName}.${strThisFuncName})`;
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
export async function Users_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsUsersEN.con_UserId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrUsers = await Users_GetObjLstCache();
  if (arrUsers == null) return [];
  let arrUsersSel = arrUsers;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrUsersSel = arrUsersSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrUsersSel = arrUsersSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrUsersSel = arrUsersSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrUsersSel = arrUsersSel.filter((x) => x.GetFldValue(strInFldName) == strInValue);
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrUsersSel = arrUsersSel.filter((x) => x.GetFldValue(strInFldName) == strInValue);
          break;
        case enumComparisonOp.NotEqual_02:
          arrUsersSel = arrUsersSel.filter((x) => x.GetFldValue(strInFldName) != strInValue);
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrUsersSel = arrUsersSel.filter((x) => x.GetFldValue(strInFldName) >= strInValue);
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrUsersSel = arrUsersSel.filter((x) => x.GetFldValue(strInFldName) <= strInValue);
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrUsersSel = arrUsersSel.filter((x) => x.GetFldValue(strInFldName) > strInValue);
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrUsersSel = arrUsersSel.filter((x) => x.GetFldValue(strInFldName) <= strInValue);
          break;
      }
      break;
  }
  if (arrUsersSel.length == 0) return [];
  return arrUsersSel.map((x) => x.userId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function Users_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(users_Controller, strAction);

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
        users_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        users_ConstructorName,
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
export async function Users_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(users_Controller, strAction);

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
        users_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        users_ConstructorName,
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
export async function Users_GetFirstObjAsync(strWhereCond: string): Promise<clsUsersEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(users_Controller, strAction);

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
      const objUsers = Users_GetObjFromJsonObj(returnObj);
      return objUsers;
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
        users_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        users_ConstructorName,
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
export async function Users_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsUsersEN._CurrTabName;
  if (IsNullOrEmpty(clsUsersEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsUsersEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrUsersExObjLstCache: Array<clsUsersEN> = CacheHelper.Get(strKey);
    const arrUsersObjLstT = Users_GetObjLstByJSONObjLst(arrUsersExObjLstCache);
    return arrUsersObjLstT;
  }
  try {
    const arrUsersExObjLst = await Users_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrUsersExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrUsersExObjLst.length,
    );
    console.log(strInfo);
    return arrUsersExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      users_ConstructorName,
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
export async function Users_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsUsersEN._CurrTabName;
  if (IsNullOrEmpty(clsUsersEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsUsersEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrUsersExObjLstCache: Array<clsUsersEN> = JSON.parse(strTempObjLst);
    const arrUsersObjLstT = Users_GetObjLstByJSONObjLst(arrUsersExObjLstCache);
    return arrUsersObjLstT;
  }
  try {
    const arrUsersExObjLst = await Users_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrUsersExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrUsersExObjLst.length,
    );
    console.log(strInfo);
    return arrUsersExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      users_ConstructorName,
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
export async function Users_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsUsersEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrUsersObjLstCache: Array<clsUsersEN> = JSON.parse(strTempObjLst);
    return arrUsersObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function Users_GetObjLstAsync(strWhereCond: string): Promise<Array<clsUsersEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(users_Controller, strAction);

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
          users_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = Users_GetObjLstByJSONObjLst(returnObjLst);
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
        users_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        users_ConstructorName,
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
export async function Users_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsUsersEN._CurrTabName;
  if (IsNullOrEmpty(clsUsersEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsUsersEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrUsersExObjLstCache: Array<clsUsersEN> = JSON.parse(strTempObjLst);
    const arrUsersObjLstT = Users_GetObjLstByJSONObjLst(arrUsersExObjLstCache);
    return arrUsersObjLstT;
  }
  try {
    const arrUsersExObjLst = await Users_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrUsersExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrUsersExObjLst.length,
    );
    console.log(strInfo);
    return arrUsersExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      users_ConstructorName,
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
export async function Users_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsUsersEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrUsersObjLstCache: Array<clsUsersEN> = JSON.parse(strTempObjLst);
    return arrUsersObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function Users_GetObjLstCache(): Promise<Array<clsUsersEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrUsersObjLstCache;
  switch (clsUsersEN.CacheModeId) {
    case '04': //sessionStorage
      arrUsersObjLstCache = await Users_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrUsersObjLstCache = await Users_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrUsersObjLstCache = await Users_GetObjLstClientCache();
      break;
    default:
      arrUsersObjLstCache = await Users_GetObjLstClientCache();
      break;
  }
  return arrUsersObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function Users_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrUsersObjLstCache;
  switch (clsUsersEN.CacheModeId) {
    case '04': //sessionStorage
      arrUsersObjLstCache = await Users_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrUsersObjLstCache = await Users_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrUsersObjLstCache = null;
      break;
    default:
      arrUsersObjLstCache = null;
      break;
  }
  return arrUsersObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrUserIdCond:条件对象
 * @returns 对象列表子集
 */
export async function Users_GetSubObjLstCache(objUsersCond: clsUsersEN) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrUsersObjLstCache = await Users_GetObjLstCache();
  let arrUsersSel = arrUsersObjLstCache;
  if (objUsersCond.sfFldComparisonOp == null || objUsersCond.sfFldComparisonOp == '')
    return arrUsersSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objUsersCond.sfFldComparisonOp,
  );
  //console.log("clsUsersWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objUsersCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrUsersSel = arrUsersSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objUsersCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrUsersSel = arrUsersSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrUsersSel = arrUsersSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrUsersSel = arrUsersSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrUsersSel = arrUsersSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrUsersSel = arrUsersSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrUsersSel = arrUsersSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrUsersSel = arrUsersSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrUsersSel = arrUsersSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrUsersSel = arrUsersSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrUsersSel = arrUsersSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrUsersSel = arrUsersSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrUsersSel = arrUsersSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrUsersSel = arrUsersSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrUsersSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objUsersCond),
      users_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsUsersEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrUserId:关键字列表
 * @returns 对象列表
 **/
export async function Users_GetObjLstByUserIdLstAsync(
  arrUserId: Array<string>,
): Promise<Array<clsUsersEN>> {
  const strThisFuncName = 'GetObjLstByUserIdLstAsync';
  const strAction = 'GetObjLstByUserIdLst';
  const strUrl = GetWebApiUrl(users_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrUserId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          users_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = Users_GetObjLstByJSONObjLst(returnObjLst);
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
        users_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        users_ConstructorName,
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
 * @param arrstrUserIdLst:关键字列表
 * @returns 对象列表
 */
export async function Users_GetObjLstByUserIdLstCache(arrUserIdLst: Array<string>) {
  const strThisFuncName = 'GetObjLstByUserIdLstCache';
  try {
    const arrUsersObjLstCache = await Users_GetObjLstCache();
    const arrUsersSel = arrUsersObjLstCache.filter((x) => arrUserIdLst.indexOf(x.userId) > -1);
    return arrUsersSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrUserIdLst.join(','),
      users_ConstructorName,
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
export async function Users_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsUsersEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(users_Controller, strAction);

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
          users_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = Users_GetObjLstByJSONObjLst(returnObjLst);
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
        users_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        users_ConstructorName,
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
export async function Users_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsUsersEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(users_Controller, strAction);

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
          users_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = Users_GetObjLstByJSONObjLst(returnObjLst);
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
        users_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        users_ConstructorName,
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
export async function Users_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsUsersEN>();
  const arrUsersObjLstCache = await Users_GetObjLstCache();
  if (arrUsersObjLstCache.length == 0) return arrUsersObjLstCache;
  let arrUsersSel = arrUsersObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objUsersCond = new clsUsersEN();
  ObjectAssign(objUsersCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsUsersWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrUsersSel = arrUsersSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objUsersCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrUsersSel = arrUsersSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrUsersSel = arrUsersSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrUsersSel = arrUsersSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrUsersSel = arrUsersSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrUsersSel = arrUsersSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrUsersSel = arrUsersSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrUsersSel = arrUsersSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrUsersSel = arrUsersSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrUsersSel = arrUsersSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrUsersSel = arrUsersSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrUsersSel = arrUsersSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrUsersSel = arrUsersSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrUsersSel = arrUsersSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrUsersSel = arrUsersSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrUsersSel.length == 0) return arrUsersSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrUsersSel = arrUsersSel.sort(Users_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrUsersSel = arrUsersSel.sort(objPagerPara.sortFun);
    }
    arrUsersSel = arrUsersSel.slice(intStart, intEnd);
    return arrUsersSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      users_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsUsersEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function Users_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsUsersEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsUsersEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(users_Controller, strAction);

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
          users_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = Users_GetObjLstByJSONObjLst(returnObjLst);
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
        users_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        users_ConstructorName,
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
 * @param strUserId:关键字
 * @returns 获取删除的结果
 **/
export async function Users_DelRecordAsync(strUserId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(users_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strUserId);

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
        users_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        users_ConstructorName,
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
 * @param arrUserId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function Users_DelUserssAsync(arrUserId: Array<string>): Promise<number> {
  const strThisFuncName = 'DelUserssAsync';
  const strAction = 'DelUserss';
  const strUrl = GetWebApiUrl(users_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrUserId, config);
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
        users_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        users_ConstructorName,
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
export async function Users_DelUserssByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'DelUserssByCondAsync';
  const strAction = 'DelUserssByCond';
  const strUrl = GetWebApiUrl(users_Controller, strAction);

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
        users_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        users_ConstructorName,
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
 * @param objUsersEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function Users_AddNewRecordAsync(objUsersEN: clsUsersEN): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  if (objUsersEN.userId === null || objUsersEN.userId === '') {
    const strMsg = '需要的对象的关键字为空,不能添加!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objUsersEN);
  const strUrl = GetWebApiUrl(users_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objUsersEN, config);
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
        users_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        users_ConstructorName,
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
 * @param objUsersEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function Users_AddNewRecordWithMaxIdAsync(objUsersEN: clsUsersEN): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(users_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objUsersEN, config);
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
        users_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        users_ConstructorName,
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
 * @param objUsersEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function Users_AddNewRecordWithReturnKeyAsync(
  objUsersEN: clsUsersEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(users_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objUsersEN, config);
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
        users_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        users_ConstructorName,
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
 * @param objUsersEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function Users_UpdateRecordAsync(objUsersEN: clsUsersEN): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objUsersEN.sfUpdFldSetStr === undefined ||
    objUsersEN.sfUpdFldSetStr === null ||
    objUsersEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format('对象(关键字: {0})的【修改字段集】为空,不能修改!', objUsersEN.userId);
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(users_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objUsersEN, config);
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
        users_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        users_ConstructorName,
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
 * @param objUsersEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function Users_UpdateWithConditionAsync(
  objUsersEN: clsUsersEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objUsersEN.sfUpdFldSetStr === undefined ||
    objUsersEN.sfUpdFldSetStr === null ||
    objUsersEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format('对象(关键字: {0})的【修改字段集】为空,不能修改!', objUsersEN.userId);
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(users_Controller, strAction);
  objUsersEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objUsersEN, config);
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
        users_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        users_ConstructorName,
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
 * @param objstrUserIdCond:条件对象
 * @returns 对象列表子集
 */
export async function Users_IsExistRecordCache(objUsersCond: clsUsersEN) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrUsersObjLstCache = await Users_GetObjLstCache();
  if (arrUsersObjLstCache == null) return false;
  let arrUsersSel = arrUsersObjLstCache;
  if (objUsersCond.sfFldComparisonOp == null || objUsersCond.sfFldComparisonOp == '')
    return arrUsersSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objUsersCond.sfFldComparisonOp,
  );
  //console.log("clsUsersWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objUsersCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objUsersCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrUsersSel = arrUsersSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrUsersSel = arrUsersSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrUsersSel = arrUsersSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrUsersSel = arrUsersSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrUsersSel = arrUsersSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrUsersSel = arrUsersSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrUsersSel = arrUsersSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrUsersSel = arrUsersSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrUsersSel = arrUsersSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrUsersSel = arrUsersSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrUsersSel = arrUsersSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrUsersSel = arrUsersSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrUsersSel = arrUsersSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrUsersSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objUsersCond),
      users_ConstructorName,
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
export async function Users_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(users_Controller, strAction);

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
        users_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        users_ConstructorName,
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
 * @param strUserId:所给的关键字
 * @returns 对象
 */
export async function Users_IsExistCache(strUserId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrUsersObjLstCache = await Users_GetObjLstCache();
  if (arrUsersObjLstCache == null) return false;
  try {
    const arrUsersSel = arrUsersObjLstCache.filter((x) => x.userId == strUserId);
    if (arrUsersSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strUserId,
      users_ConstructorName,
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
 * @param strUserId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function Users_IsExistAsync(strUserId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(users_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strUserId,
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
        users_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        users_ConstructorName,
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
export async function Users_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(users_Controller, strAction);

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
        users_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        users_ConstructorName,
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
 * @param objUsersCond:条件对象
 * @returns 对象列表记录数
 */
export async function Users_GetRecCountByCondCache(objUsersCond: clsUsersEN) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrUsersObjLstCache = await Users_GetObjLstCache();
  if (arrUsersObjLstCache == null) return 0;
  let arrUsersSel = arrUsersObjLstCache;
  if (objUsersCond.sfFldComparisonOp == null || objUsersCond.sfFldComparisonOp == '')
    return arrUsersSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objUsersCond.sfFldComparisonOp,
  );
  //console.log("clsUsersWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objUsersCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrUsersSel = arrUsersSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objUsersCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrUsersSel = arrUsersSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrUsersSel = arrUsersSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrUsersSel = arrUsersSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrUsersSel = arrUsersSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrUsersSel = arrUsersSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrUsersSel = arrUsersSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrUsersSel = arrUsersSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrUsersSel = arrUsersSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrUsersSel = arrUsersSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrUsersSel = arrUsersSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrUsersSel = arrUsersSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrUsersSel = arrUsersSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrUsersSel = arrUsersSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrUsersSel = arrUsersSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrUsersSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objUsersCond),
      users_ConstructorName,
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
export async function Users_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(users_Controller, strAction);

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
        users_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        users_ConstructorName,
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
export function Users_GetWebApiUrl(strController: string, strAction: string): string {
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
export function Users_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功!');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clsUsersEN._CurrTabName;
  switch (clsUsersEN.CacheModeId) {
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
export function Users_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsUsersEN._CurrTabName;
    switch (clsUsersEN.CacheModeId) {
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
export async function Users_BindDdl_UserIdInDivCache(objDiv: HTMLDivElement, strDdlName: string) {
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_UserIdInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_UserIdInDivCache");
  const arrObjLstSel = await Users_GetObjLstCache();
  if (arrObjLstSel == null) return;
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsUsersEN.con_UserId,
    clsUsersEN.con_UserName,
    '用于用户管理',
  );
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function Users_CheckPropertyNew(pobjUsersEN: clsUsersEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjUsersEN.userName) === true) {
    throw new Error(
      '(errid:Watl000411)字段[用户名]不能为空(In 用于用户管理)!(clsUsersBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjUsersEN.departmentId) === true ||
    pobjUsersEN.departmentId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000411)字段[部门ID]不能为空(In 用于用户管理)!(clsUsersBL:CheckPropertyNew0)',
    );
  }
  if (IsNullOrEmpty(pobjUsersEN.password) === true) {
    throw new Error(
      '(errid:Watl000411)字段[口令]不能为空(In 用于用户管理)!(clsUsersBL:CheckPropertyNew0)',
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (IsNullOrEmpty(pobjUsersEN.userId) == false && GetStrLen(pobjUsersEN.userId) > 18) {
    throw new Error(
      '(errid:Watl000413)字段[用户Id(userId)]的长度不能超过18(In 用于用户管理(Users))!值:$(pobjUsersEN.userId)(clsUsersBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjUsersEN.userName) == false && GetStrLen(pobjUsersEN.userName) > 30) {
    throw new Error(
      '(errid:Watl000413)字段[用户名(userName)]的长度不能超过30(In 用于用户管理(Users))!值:$(pobjUsersEN.userName)(clsUsersBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjUsersEN.departmentId) == false && GetStrLen(pobjUsersEN.departmentId) > 6) {
    throw new Error(
      '(errid:Watl000413)字段[部门ID(departmentId)]的长度不能超过6(In 用于用户管理(Users))!值:$(pobjUsersEN.departmentId)(clsUsersBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjUsersEN.userStateId) == false && GetStrLen(pobjUsersEN.userStateId) > 2) {
    throw new Error(
      '(errid:Watl000413)字段[用户状态号(userStateId)]的长度不能超过2(In 用于用户管理(Users))!值:$(pobjUsersEN.userStateId)(clsUsersBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjUsersEN.roleId) == false && GetStrLen(pobjUsersEN.roleId) > 8) {
    throw new Error(
      '(errid:Watl000413)字段[角色ID(roleId)]的长度不能超过8(In 用于用户管理(Users))!值:$(pobjUsersEN.roleId)(clsUsersBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjUsersEN.effectiveDate) == false &&
    GetStrLen(pobjUsersEN.effectiveDate) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[有效日期(effectiveDate)]的长度不能超过8(In 用于用户管理(Users))!值:$(pobjUsersEN.effectiveDate)(clsUsersBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjUsersEN.effitiveBeginDate) == false &&
    GetStrLen(pobjUsersEN.effitiveBeginDate) > 14
  ) {
    throw new Error(
      '(errid:Watl000413)字段[有效开始日期(effitiveBeginDate)]的长度不能超过14(In 用于用户管理(Users))!值:$(pobjUsersEN.effitiveBeginDate)(clsUsersBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjUsersEN.effitiveEndDate) == false &&
    GetStrLen(pobjUsersEN.effitiveEndDate) > 14
  ) {
    throw new Error(
      '(errid:Watl000413)字段[有效结束日期(effitiveEndDate)]的长度不能超过14(In 用于用户管理(Users))!值:$(pobjUsersEN.effitiveEndDate)(clsUsersBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjUsersEN.password) == false && GetStrLen(pobjUsersEN.password) > 20) {
    throw new Error(
      '(errid:Watl000413)字段[口令(password)]的长度不能超过20(In 用于用户管理(Users))!值:$(pobjUsersEN.password)(clsUsersBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjUsersEN.identityID) == false && GetStrLen(pobjUsersEN.identityID) > 2) {
    throw new Error(
      '(errid:Watl000413)字段[身份编号(identityID)]的长度不能超过2(In 用于用户管理(Users))!值:$(pobjUsersEN.identityID)(clsUsersBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjUsersEN.email) == false && GetStrLen(pobjUsersEN.email) > 50) {
    throw new Error(
      '(errid:Watl000413)字段[电子邮箱(email)]的长度不能超过50(In 用于用户管理(Users))!值:$(pobjUsersEN.email)(clsUsersBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjUsersEN.registerPassword) == false &&
    GetStrLen(pobjUsersEN.registerPassword) > 30
  ) {
    throw new Error(
      '(errid:Watl000413)字段[注册密码(registerPassword)]的长度不能超过30(In 用于用户管理(Users))!值:$(pobjUsersEN.registerPassword)(clsUsersBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjUsersEN.registerDate) == false &&
    GetStrLen(pobjUsersEN.registerDate) > 14
  ) {
    throw new Error(
      '(errid:Watl000413)字段[注册日期(registerDate)]的长度不能超过14(In 用于用户管理(Users))!值:$(pobjUsersEN.registerDate)(clsUsersBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjUsersEN.auditUser) == false && GetStrLen(pobjUsersEN.auditUser) > 18) {
    throw new Error(
      '(errid:Watl000413)字段[审核人(auditUser)]的长度不能超过18(In 用于用户管理(Users))!值:$(pobjUsersEN.auditUser)(clsUsersBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjUsersEN.auditDate) == false && GetStrLen(pobjUsersEN.auditDate) > 14) {
    throw new Error(
      '(errid:Watl000413)字段[审核日期(auditDate)]的长度不能超过14(In 用于用户管理(Users))!值:$(pobjUsersEN.auditDate)(clsUsersBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjUsersEN.updDate) == false && GetStrLen(pobjUsersEN.updDate) > 20) {
    throw new Error(
      '(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 用于用户管理(Users))!值:$(pobjUsersEN.updDate)(clsUsersBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjUsersEN.updUser) == false && GetStrLen(pobjUsersEN.updUser) > 20) {
    throw new Error(
      '(errid:Watl000413)字段[修改者(updUser)]的长度不能超过20(In 用于用户管理(Users))!值:$(pobjUsersEN.updUser)(clsUsersBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjUsersEN.memo) == false && GetStrLen(pobjUsersEN.memo) > 1000) {
    throw new Error(
      '(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In 用于用户管理(Users))!值:$(pobjUsersEN.memo)(clsUsersBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjUsersEN.userId) == false &&
    undefined !== pobjUsersEN.userId &&
    tzDataType.isString(pobjUsersEN.userId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[用户Id(userId)]的值:[$(pobjUsersEN.userId)], 非法,应该为字符型(In 用于用户管理(Users))!(clsUsersBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjUsersEN.userName) == false &&
    undefined !== pobjUsersEN.userName &&
    tzDataType.isString(pobjUsersEN.userName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[用户名(userName)]的值:[$(pobjUsersEN.userName)], 非法,应该为字符型(In 用于用户管理(Users))!(clsUsersBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjUsersEN.departmentId) == false &&
    undefined !== pobjUsersEN.departmentId &&
    tzDataType.isString(pobjUsersEN.departmentId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[部门ID(departmentId)]的值:[$(pobjUsersEN.departmentId)], 非法,应该为字符型(In 用于用户管理(Users))!(clsUsersBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjUsersEN.userStateId) == false &&
    undefined !== pobjUsersEN.userStateId &&
    tzDataType.isString(pobjUsersEN.userStateId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[用户状态号(userStateId)]的值:[$(pobjUsersEN.userStateId)], 非法,应该为字符型(In 用于用户管理(Users))!(clsUsersBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjUsersEN.roleId) == false &&
    undefined !== pobjUsersEN.roleId &&
    tzDataType.isString(pobjUsersEN.roleId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[角色ID(roleId)]的值:[$(pobjUsersEN.roleId)], 非法,应该为字符型(In 用于用户管理(Users))!(clsUsersBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjUsersEN.qxdj &&
    undefined !== pobjUsersEN.qxdj &&
    tzDataType.isNumber(pobjUsersEN.qxdj) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[权限等级(qxdj)]的值:[$(pobjUsersEN.qxdj)], 非法,应该为数值型(In 用于用户管理(Users))!(clsUsersBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjUsersEN.effectiveDate) == false &&
    undefined !== pobjUsersEN.effectiveDate &&
    tzDataType.isString(pobjUsersEN.effectiveDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[有效日期(effectiveDate)]的值:[$(pobjUsersEN.effectiveDate)], 非法,应该为字符型(In 用于用户管理(Users))!(clsUsersBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjUsersEN.effitiveBeginDate) == false &&
    undefined !== pobjUsersEN.effitiveBeginDate &&
    tzDataType.isString(pobjUsersEN.effitiveBeginDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[有效开始日期(effitiveBeginDate)]的值:[$(pobjUsersEN.effitiveBeginDate)], 非法,应该为字符型(In 用于用户管理(Users))!(clsUsersBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjUsersEN.effitiveEndDate) == false &&
    undefined !== pobjUsersEN.effitiveEndDate &&
    tzDataType.isString(pobjUsersEN.effitiveEndDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[有效结束日期(effitiveEndDate)]的值:[$(pobjUsersEN.effitiveEndDate)], 非法,应该为字符型(In 用于用户管理(Users))!(clsUsersBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjUsersEN.password) == false &&
    undefined !== pobjUsersEN.password &&
    tzDataType.isString(pobjUsersEN.password) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[口令(password)]的值:[$(pobjUsersEN.password)], 非法,应该为字符型(In 用于用户管理(Users))!(clsUsersBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjUsersEN.identityID) == false &&
    undefined !== pobjUsersEN.identityID &&
    tzDataType.isString(pobjUsersEN.identityID) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[身份编号(identityID)]的值:[$(pobjUsersEN.identityID)], 非法,应该为字符型(In 用于用户管理(Users))!(clsUsersBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjUsersEN.email) == false &&
    undefined !== pobjUsersEN.email &&
    tzDataType.isString(pobjUsersEN.email) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[电子邮箱(email)]的值:[$(pobjUsersEN.email)], 非法,应该为字符型(In 用于用户管理(Users))!(clsUsersBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjUsersEN.isGpUser &&
    undefined !== pobjUsersEN.isGpUser &&
    tzDataType.isBoolean(pobjUsersEN.isGpUser) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否平台用户(isGpUser)]的值:[$(pobjUsersEN.isGpUser)], 非法,应该为布尔型(In 用于用户管理(Users))!(clsUsersBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjUsersEN.registerPassword) == false &&
    undefined !== pobjUsersEN.registerPassword &&
    tzDataType.isString(pobjUsersEN.registerPassword) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[注册密码(registerPassword)]的值:[$(pobjUsersEN.registerPassword)], 非法,应该为字符型(In 用于用户管理(Users))!(clsUsersBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjUsersEN.isRegister &&
    undefined !== pobjUsersEN.isRegister &&
    tzDataType.isBoolean(pobjUsersEN.isRegister) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否注册(isRegister)]的值:[$(pobjUsersEN.isRegister)], 非法,应该为布尔型(In 用于用户管理(Users))!(clsUsersBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjUsersEN.registerDate) == false &&
    undefined !== pobjUsersEN.registerDate &&
    tzDataType.isString(pobjUsersEN.registerDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[注册日期(registerDate)]的值:[$(pobjUsersEN.registerDate)], 非法,应该为字符型(In 用于用户管理(Users))!(clsUsersBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjUsersEN.isAudit &&
    undefined !== pobjUsersEN.isAudit &&
    tzDataType.isBoolean(pobjUsersEN.isAudit) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否审核(isAudit)]的值:[$(pobjUsersEN.isAudit)], 非法,应该为布尔型(In 用于用户管理(Users))!(clsUsersBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjUsersEN.auditUser) == false &&
    undefined !== pobjUsersEN.auditUser &&
    tzDataType.isString(pobjUsersEN.auditUser) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[审核人(auditUser)]的值:[$(pobjUsersEN.auditUser)], 非法,应该为字符型(In 用于用户管理(Users))!(clsUsersBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjUsersEN.auditDate) == false &&
    undefined !== pobjUsersEN.auditDate &&
    tzDataType.isString(pobjUsersEN.auditDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[审核日期(auditDate)]的值:[$(pobjUsersEN.auditDate)], 非法,应该为字符型(In 用于用户管理(Users))!(clsUsersBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjUsersEN.updDate) == false &&
    undefined !== pobjUsersEN.updDate &&
    tzDataType.isString(pobjUsersEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjUsersEN.updDate)], 非法,应该为字符型(In 用于用户管理(Users))!(clsUsersBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjUsersEN.updUser) == false &&
    undefined !== pobjUsersEN.updUser &&
    tzDataType.isString(pobjUsersEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改者(updUser)]的值:[$(pobjUsersEN.updUser)], 非法,应该为字符型(In 用于用户管理(Users))!(clsUsersBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjUsersEN.memo) == false &&
    undefined !== pobjUsersEN.memo &&
    tzDataType.isString(pobjUsersEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[说明(memo)]的值:[$(pobjUsersEN.memo)], 非法,应该为字符型(In 用于用户管理(Users))!(clsUsersBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
  if (
    IsNullOrEmpty(pobjUsersEN.userStateId) == false &&
    pobjUsersEN.userStateId != '[nuull]' &&
    GetStrLen(pobjUsersEN.userStateId) != 2
  ) {
    throw '(errid:Watl000415)字段[用户状态号]作为外键字段,长度应该为2(In 用于用户管理)!(clsUsersBL:CheckPropertyNew)';
  }
  if (
    IsNullOrEmpty(pobjUsersEN.roleId) == false &&
    pobjUsersEN.roleId != '[nuull]' &&
    GetStrLen(pobjUsersEN.roleId) != 8
  ) {
    throw '(errid:Watl000415)字段[角色ID]作为外键字段,长度应该为8(In 用于用户管理)!(clsUsersBL:CheckPropertyNew)';
  }

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function Users_CheckProperty4Update(pobjUsersEN: clsUsersEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (IsNullOrEmpty(pobjUsersEN.userId) == false && GetStrLen(pobjUsersEN.userId) > 18) {
    throw new Error(
      '(errid:Watl000416)字段[用户Id(userId)]的长度不能超过18(In 用于用户管理(Users))!值:$(pobjUsersEN.userId)(clsUsersBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjUsersEN.userName) == false && GetStrLen(pobjUsersEN.userName) > 30) {
    throw new Error(
      '(errid:Watl000416)字段[用户名(userName)]的长度不能超过30(In 用于用户管理(Users))!值:$(pobjUsersEN.userName)(clsUsersBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjUsersEN.departmentId) == false && GetStrLen(pobjUsersEN.departmentId) > 6) {
    throw new Error(
      '(errid:Watl000416)字段[部门ID(departmentId)]的长度不能超过6(In 用于用户管理(Users))!值:$(pobjUsersEN.departmentId)(clsUsersBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjUsersEN.userStateId) == false && GetStrLen(pobjUsersEN.userStateId) > 2) {
    throw new Error(
      '(errid:Watl000416)字段[用户状态号(userStateId)]的长度不能超过2(In 用于用户管理(Users))!值:$(pobjUsersEN.userStateId)(clsUsersBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjUsersEN.roleId) == false && GetStrLen(pobjUsersEN.roleId) > 8) {
    throw new Error(
      '(errid:Watl000416)字段[角色ID(roleId)]的长度不能超过8(In 用于用户管理(Users))!值:$(pobjUsersEN.roleId)(clsUsersBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjUsersEN.effectiveDate) == false &&
    GetStrLen(pobjUsersEN.effectiveDate) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[有效日期(effectiveDate)]的长度不能超过8(In 用于用户管理(Users))!值:$(pobjUsersEN.effectiveDate)(clsUsersBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjUsersEN.effitiveBeginDate) == false &&
    GetStrLen(pobjUsersEN.effitiveBeginDate) > 14
  ) {
    throw new Error(
      '(errid:Watl000416)字段[有效开始日期(effitiveBeginDate)]的长度不能超过14(In 用于用户管理(Users))!值:$(pobjUsersEN.effitiveBeginDate)(clsUsersBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjUsersEN.effitiveEndDate) == false &&
    GetStrLen(pobjUsersEN.effitiveEndDate) > 14
  ) {
    throw new Error(
      '(errid:Watl000416)字段[有效结束日期(effitiveEndDate)]的长度不能超过14(In 用于用户管理(Users))!值:$(pobjUsersEN.effitiveEndDate)(clsUsersBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjUsersEN.password) == false && GetStrLen(pobjUsersEN.password) > 20) {
    throw new Error(
      '(errid:Watl000416)字段[口令(password)]的长度不能超过20(In 用于用户管理(Users))!值:$(pobjUsersEN.password)(clsUsersBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjUsersEN.identityID) == false && GetStrLen(pobjUsersEN.identityID) > 2) {
    throw new Error(
      '(errid:Watl000416)字段[身份编号(identityID)]的长度不能超过2(In 用于用户管理(Users))!值:$(pobjUsersEN.identityID)(clsUsersBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjUsersEN.email) == false && GetStrLen(pobjUsersEN.email) > 50) {
    throw new Error(
      '(errid:Watl000416)字段[电子邮箱(email)]的长度不能超过50(In 用于用户管理(Users))!值:$(pobjUsersEN.email)(clsUsersBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjUsersEN.registerPassword) == false &&
    GetStrLen(pobjUsersEN.registerPassword) > 30
  ) {
    throw new Error(
      '(errid:Watl000416)字段[注册密码(registerPassword)]的长度不能超过30(In 用于用户管理(Users))!值:$(pobjUsersEN.registerPassword)(clsUsersBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjUsersEN.registerDate) == false &&
    GetStrLen(pobjUsersEN.registerDate) > 14
  ) {
    throw new Error(
      '(errid:Watl000416)字段[注册日期(registerDate)]的长度不能超过14(In 用于用户管理(Users))!值:$(pobjUsersEN.registerDate)(clsUsersBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjUsersEN.auditUser) == false && GetStrLen(pobjUsersEN.auditUser) > 18) {
    throw new Error(
      '(errid:Watl000416)字段[审核人(auditUser)]的长度不能超过18(In 用于用户管理(Users))!值:$(pobjUsersEN.auditUser)(clsUsersBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjUsersEN.auditDate) == false && GetStrLen(pobjUsersEN.auditDate) > 14) {
    throw new Error(
      '(errid:Watl000416)字段[审核日期(auditDate)]的长度不能超过14(In 用于用户管理(Users))!值:$(pobjUsersEN.auditDate)(clsUsersBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjUsersEN.updDate) == false && GetStrLen(pobjUsersEN.updDate) > 20) {
    throw new Error(
      '(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 用于用户管理(Users))!值:$(pobjUsersEN.updDate)(clsUsersBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjUsersEN.updUser) == false && GetStrLen(pobjUsersEN.updUser) > 20) {
    throw new Error(
      '(errid:Watl000416)字段[修改者(updUser)]的长度不能超过20(In 用于用户管理(Users))!值:$(pobjUsersEN.updUser)(clsUsersBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjUsersEN.memo) == false && GetStrLen(pobjUsersEN.memo) > 1000) {
    throw new Error(
      '(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In 用于用户管理(Users))!值:$(pobjUsersEN.memo)(clsUsersBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjUsersEN.userId) == false &&
    undefined !== pobjUsersEN.userId &&
    tzDataType.isString(pobjUsersEN.userId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[用户Id(userId)]的值:[$(pobjUsersEN.userId)], 非法,应该为字符型(In 用于用户管理(Users))!(clsUsersBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjUsersEN.userName) == false &&
    undefined !== pobjUsersEN.userName &&
    tzDataType.isString(pobjUsersEN.userName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[用户名(userName)]的值:[$(pobjUsersEN.userName)], 非法,应该为字符型(In 用于用户管理(Users))!(clsUsersBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjUsersEN.departmentId) == false &&
    undefined !== pobjUsersEN.departmentId &&
    tzDataType.isString(pobjUsersEN.departmentId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[部门ID(departmentId)]的值:[$(pobjUsersEN.departmentId)], 非法,应该为字符型(In 用于用户管理(Users))!(clsUsersBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjUsersEN.userStateId) == false &&
    undefined !== pobjUsersEN.userStateId &&
    tzDataType.isString(pobjUsersEN.userStateId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[用户状态号(userStateId)]的值:[$(pobjUsersEN.userStateId)], 非法,应该为字符型(In 用于用户管理(Users))!(clsUsersBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjUsersEN.roleId) == false &&
    undefined !== pobjUsersEN.roleId &&
    tzDataType.isString(pobjUsersEN.roleId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[角色ID(roleId)]的值:[$(pobjUsersEN.roleId)], 非法,应该为字符型(In 用于用户管理(Users))!(clsUsersBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjUsersEN.qxdj &&
    undefined !== pobjUsersEN.qxdj &&
    tzDataType.isNumber(pobjUsersEN.qxdj) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[权限等级(qxdj)]的值:[$(pobjUsersEN.qxdj)], 非法,应该为数值型(In 用于用户管理(Users))!(clsUsersBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjUsersEN.effectiveDate) == false &&
    undefined !== pobjUsersEN.effectiveDate &&
    tzDataType.isString(pobjUsersEN.effectiveDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[有效日期(effectiveDate)]的值:[$(pobjUsersEN.effectiveDate)], 非法,应该为字符型(In 用于用户管理(Users))!(clsUsersBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjUsersEN.effitiveBeginDate) == false &&
    undefined !== pobjUsersEN.effitiveBeginDate &&
    tzDataType.isString(pobjUsersEN.effitiveBeginDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[有效开始日期(effitiveBeginDate)]的值:[$(pobjUsersEN.effitiveBeginDate)], 非法,应该为字符型(In 用于用户管理(Users))!(clsUsersBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjUsersEN.effitiveEndDate) == false &&
    undefined !== pobjUsersEN.effitiveEndDate &&
    tzDataType.isString(pobjUsersEN.effitiveEndDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[有效结束日期(effitiveEndDate)]的值:[$(pobjUsersEN.effitiveEndDate)], 非法,应该为字符型(In 用于用户管理(Users))!(clsUsersBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjUsersEN.password) == false &&
    undefined !== pobjUsersEN.password &&
    tzDataType.isString(pobjUsersEN.password) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[口令(password)]的值:[$(pobjUsersEN.password)], 非法,应该为字符型(In 用于用户管理(Users))!(clsUsersBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjUsersEN.identityID) == false &&
    undefined !== pobjUsersEN.identityID &&
    tzDataType.isString(pobjUsersEN.identityID) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[身份编号(identityID)]的值:[$(pobjUsersEN.identityID)], 非法,应该为字符型(In 用于用户管理(Users))!(clsUsersBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjUsersEN.email) == false &&
    undefined !== pobjUsersEN.email &&
    tzDataType.isString(pobjUsersEN.email) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[电子邮箱(email)]的值:[$(pobjUsersEN.email)], 非法,应该为字符型(In 用于用户管理(Users))!(clsUsersBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjUsersEN.isGpUser &&
    undefined !== pobjUsersEN.isGpUser &&
    tzDataType.isBoolean(pobjUsersEN.isGpUser) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否平台用户(isGpUser)]的值:[$(pobjUsersEN.isGpUser)], 非法,应该为布尔型(In 用于用户管理(Users))!(clsUsersBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjUsersEN.registerPassword) == false &&
    undefined !== pobjUsersEN.registerPassword &&
    tzDataType.isString(pobjUsersEN.registerPassword) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[注册密码(registerPassword)]的值:[$(pobjUsersEN.registerPassword)], 非法,应该为字符型(In 用于用户管理(Users))!(clsUsersBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjUsersEN.isRegister &&
    undefined !== pobjUsersEN.isRegister &&
    tzDataType.isBoolean(pobjUsersEN.isRegister) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否注册(isRegister)]的值:[$(pobjUsersEN.isRegister)], 非法,应该为布尔型(In 用于用户管理(Users))!(clsUsersBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjUsersEN.registerDate) == false &&
    undefined !== pobjUsersEN.registerDate &&
    tzDataType.isString(pobjUsersEN.registerDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[注册日期(registerDate)]的值:[$(pobjUsersEN.registerDate)], 非法,应该为字符型(In 用于用户管理(Users))!(clsUsersBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjUsersEN.isAudit &&
    undefined !== pobjUsersEN.isAudit &&
    tzDataType.isBoolean(pobjUsersEN.isAudit) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否审核(isAudit)]的值:[$(pobjUsersEN.isAudit)], 非法,应该为布尔型(In 用于用户管理(Users))!(clsUsersBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjUsersEN.auditUser) == false &&
    undefined !== pobjUsersEN.auditUser &&
    tzDataType.isString(pobjUsersEN.auditUser) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[审核人(auditUser)]的值:[$(pobjUsersEN.auditUser)], 非法,应该为字符型(In 用于用户管理(Users))!(clsUsersBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjUsersEN.auditDate) == false &&
    undefined !== pobjUsersEN.auditDate &&
    tzDataType.isString(pobjUsersEN.auditDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[审核日期(auditDate)]的值:[$(pobjUsersEN.auditDate)], 非法,应该为字符型(In 用于用户管理(Users))!(clsUsersBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjUsersEN.updDate) == false &&
    undefined !== pobjUsersEN.updDate &&
    tzDataType.isString(pobjUsersEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjUsersEN.updDate)], 非法,应该为字符型(In 用于用户管理(Users))!(clsUsersBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjUsersEN.updUser) == false &&
    undefined !== pobjUsersEN.updUser &&
    tzDataType.isString(pobjUsersEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改者(updUser)]的值:[$(pobjUsersEN.updUser)], 非法,应该为字符型(In 用于用户管理(Users))!(clsUsersBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjUsersEN.memo) == false &&
    undefined !== pobjUsersEN.memo &&
    tzDataType.isString(pobjUsersEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[说明(memo)]的值:[$(pobjUsersEN.memo)], 非法,应该为字符型(In 用于用户管理(Users))!(clsUsersBL:CheckProperty4Update)',
    );
  }
  //检查主键是否为Null或者空!
  if (IsNullOrEmpty(pobjUsersEN.userId) === true || pobjUsersEN.userId.toString() === '0') {
    throw new Error(
      '(errid:Watl000064)字段[用户Id]不能为空(In 用于用户管理)!(clsUsersBL:CheckProperty4Update)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
  if (
    IsNullOrEmpty(pobjUsersEN.userStateId) == false &&
    pobjUsersEN.userStateId != '[nuull]' &&
    GetStrLen(pobjUsersEN.userStateId) != 2
  ) {
    throw '(errid:Watl000418)字段[用户状态号]作为外键字段,长度应该为2(In 用于用户管理)!(clsUsersBL:CheckPropertyNew)';
  }
  if (
    IsNullOrEmpty(pobjUsersEN.roleId) == false &&
    pobjUsersEN.roleId != '[nuull]' &&
    GetStrLen(pobjUsersEN.roleId) != 8
  ) {
    throw '(errid:Watl000418)字段[角色ID]作为外键字段,长度应该为8(In 用于用户管理)!(clsUsersBL:CheckPropertyNew)';
  }
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function Users_GetJSONStrByObj(pobjUsersEN: clsUsersEN): string {
  pobjUsersEN.sfUpdFldSetStr = pobjUsersEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjUsersEN);
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
export function Users_GetObjLstByJSONStr(strJSON: string): Array<clsUsersEN> {
  let arrUsersObjLst = new Array<clsUsersEN>();
  if (strJSON === '') {
    return arrUsersObjLst;
  }
  try {
    arrUsersObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrUsersObjLst;
  }
  return arrUsersObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrUsersObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function Users_GetObjLstByJSONObjLst(arrUsersObjLstS: Array<clsUsersEN>): Array<clsUsersEN> {
  const arrUsersObjLst = new Array<clsUsersEN>();
  for (const objInFor of arrUsersObjLstS) {
    const obj1 = Users_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrUsersObjLst.push(obj1);
  }
  return arrUsersObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function Users_GetObjByJSONStr(strJSON: string): clsUsersEN {
  let pobjUsersEN = new clsUsersEN();
  if (strJSON === '') {
    return pobjUsersEN;
  }
  try {
    pobjUsersEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjUsersEN;
  }
  return pobjUsersEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function Users_GetCombineCondition(objUsersCond: clsUsersEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(objUsersCond.dicFldComparisonOp, clsUsersEN.con_UserId) ==
    true
  ) {
    const strComparisonOpUserId: string = objUsersCond.dicFldComparisonOp[clsUsersEN.con_UserId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsUsersEN.con_UserId,
      objUsersCond.userId,
      strComparisonOpUserId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objUsersCond.dicFldComparisonOp,
      clsUsersEN.con_UserName,
    ) == true
  ) {
    const strComparisonOpUserName: string =
      objUsersCond.dicFldComparisonOp[clsUsersEN.con_UserName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsUsersEN.con_UserName,
      objUsersCond.userName,
      strComparisonOpUserName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objUsersCond.dicFldComparisonOp,
      clsUsersEN.con_DepartmentId,
    ) == true
  ) {
    const strComparisonOpDepartmentId: string =
      objUsersCond.dicFldComparisonOp[clsUsersEN.con_DepartmentId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsUsersEN.con_DepartmentId,
      objUsersCond.departmentId,
      strComparisonOpDepartmentId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objUsersCond.dicFldComparisonOp,
      clsUsersEN.con_UserStateId,
    ) == true
  ) {
    const strComparisonOpUserStateId: string =
      objUsersCond.dicFldComparisonOp[clsUsersEN.con_UserStateId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsUsersEN.con_UserStateId,
      objUsersCond.userStateId,
      strComparisonOpUserStateId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(objUsersCond.dicFldComparisonOp, clsUsersEN.con_RoleId) ==
    true
  ) {
    const strComparisonOpRoleId: string = objUsersCond.dicFldComparisonOp[clsUsersEN.con_RoleId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsUsersEN.con_RoleId,
      objUsersCond.roleId,
      strComparisonOpRoleId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(objUsersCond.dicFldComparisonOp, clsUsersEN.con_qxdj) ==
    true
  ) {
    const strComparisonOpqxdj: string = objUsersCond.dicFldComparisonOp[clsUsersEN.con_qxdj];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsUsersEN.con_qxdj,
      objUsersCond.qxdj,
      strComparisonOpqxdj,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objUsersCond.dicFldComparisonOp,
      clsUsersEN.con_EffectiveDate,
    ) == true
  ) {
    const strComparisonOpEffectiveDate: string =
      objUsersCond.dicFldComparisonOp[clsUsersEN.con_EffectiveDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsUsersEN.con_EffectiveDate,
      objUsersCond.effectiveDate,
      strComparisonOpEffectiveDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objUsersCond.dicFldComparisonOp,
      clsUsersEN.con_EffitiveBeginDate,
    ) == true
  ) {
    const strComparisonOpEffitiveBeginDate: string =
      objUsersCond.dicFldComparisonOp[clsUsersEN.con_EffitiveBeginDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsUsersEN.con_EffitiveBeginDate,
      objUsersCond.effitiveBeginDate,
      strComparisonOpEffitiveBeginDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objUsersCond.dicFldComparisonOp,
      clsUsersEN.con_EffitiveEndDate,
    ) == true
  ) {
    const strComparisonOpEffitiveEndDate: string =
      objUsersCond.dicFldComparisonOp[clsUsersEN.con_EffitiveEndDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsUsersEN.con_EffitiveEndDate,
      objUsersCond.effitiveEndDate,
      strComparisonOpEffitiveEndDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objUsersCond.dicFldComparisonOp,
      clsUsersEN.con_Password,
    ) == true
  ) {
    const strComparisonOpPassword: string =
      objUsersCond.dicFldComparisonOp[clsUsersEN.con_Password];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsUsersEN.con_Password,
      objUsersCond.password,
      strComparisonOpPassword,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objUsersCond.dicFldComparisonOp,
      clsUsersEN.con_IdentityID,
    ) == true
  ) {
    const strComparisonOpIdentityID: string =
      objUsersCond.dicFldComparisonOp[clsUsersEN.con_IdentityID];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsUsersEN.con_IdentityID,
      objUsersCond.identityID,
      strComparisonOpIdentityID,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(objUsersCond.dicFldComparisonOp, clsUsersEN.con_Email) ==
    true
  ) {
    const strComparisonOpEmail: string = objUsersCond.dicFldComparisonOp[clsUsersEN.con_Email];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsUsersEN.con_Email,
      objUsersCond.email,
      strComparisonOpEmail,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objUsersCond.dicFldComparisonOp,
      clsUsersEN.con_IsGpUser,
    ) == true
  ) {
    if (objUsersCond.isGpUser == true) {
      strWhereCond += Format(" And {0} = '1'", clsUsersEN.con_IsGpUser);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsUsersEN.con_IsGpUser);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objUsersCond.dicFldComparisonOp,
      clsUsersEN.con_RegisterPassword,
    ) == true
  ) {
    const strComparisonOpRegisterPassword: string =
      objUsersCond.dicFldComparisonOp[clsUsersEN.con_RegisterPassword];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsUsersEN.con_RegisterPassword,
      objUsersCond.registerPassword,
      strComparisonOpRegisterPassword,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objUsersCond.dicFldComparisonOp,
      clsUsersEN.con_IsRegister,
    ) == true
  ) {
    if (objUsersCond.isRegister == true) {
      strWhereCond += Format(" And {0} = '1'", clsUsersEN.con_IsRegister);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsUsersEN.con_IsRegister);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objUsersCond.dicFldComparisonOp,
      clsUsersEN.con_RegisterDate,
    ) == true
  ) {
    const strComparisonOpRegisterDate: string =
      objUsersCond.dicFldComparisonOp[clsUsersEN.con_RegisterDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsUsersEN.con_RegisterDate,
      objUsersCond.registerDate,
      strComparisonOpRegisterDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(objUsersCond.dicFldComparisonOp, clsUsersEN.con_IsAudit) ==
    true
  ) {
    if (objUsersCond.isAudit == true) {
      strWhereCond += Format(" And {0} = '1'", clsUsersEN.con_IsAudit);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsUsersEN.con_IsAudit);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objUsersCond.dicFldComparisonOp,
      clsUsersEN.con_AuditUser,
    ) == true
  ) {
    const strComparisonOpAuditUser: string =
      objUsersCond.dicFldComparisonOp[clsUsersEN.con_AuditUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsUsersEN.con_AuditUser,
      objUsersCond.auditUser,
      strComparisonOpAuditUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objUsersCond.dicFldComparisonOp,
      clsUsersEN.con_AuditDate,
    ) == true
  ) {
    const strComparisonOpAuditDate: string =
      objUsersCond.dicFldComparisonOp[clsUsersEN.con_AuditDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsUsersEN.con_AuditDate,
      objUsersCond.auditDate,
      strComparisonOpAuditDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(objUsersCond.dicFldComparisonOp, clsUsersEN.con_UpdDate) ==
    true
  ) {
    const strComparisonOpUpdDate: string = objUsersCond.dicFldComparisonOp[clsUsersEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsUsersEN.con_UpdDate,
      objUsersCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(objUsersCond.dicFldComparisonOp, clsUsersEN.con_UpdUser) ==
    true
  ) {
    const strComparisonOpUpdUser: string = objUsersCond.dicFldComparisonOp[clsUsersEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsUsersEN.con_UpdUser,
      objUsersCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(objUsersCond.dicFldComparisonOp, clsUsersEN.con_Memo) ==
    true
  ) {
    const strComparisonOpMemo: string = objUsersCond.dicFldComparisonOp[clsUsersEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsUsersEN.con_Memo,
      objUsersCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objUsersENS:源对象
 * @param objUsersENT:目标对象
 */
export function Users_GetObjFromJsonObj(objUsersENS: clsUsersEN): clsUsersEN {
  const objUsersENT: clsUsersEN = new clsUsersEN();
  ObjectAssign(objUsersENT, objUsersENS);
  return objUsersENT;
}
