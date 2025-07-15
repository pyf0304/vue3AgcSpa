/**
 * 用户(QxUsers)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2023年06月21日.
 * 注意:该类必须与调用界面处于同一个包，否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty, GetStrLen, tzDataType, Format } from '@/ts/PubFun/clsString';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { CacheHelper } from '@/ts/PubFun/CacheHelper';
import {
  GetObjKeys,
  GetExceptionStr,
  myShowErrorMsg,
  ObjectAssign,
  BindDdl_ObjLstInDivObj,
} from '@/ts/PubFun/clsCommFunc4Web';
import { clsQxUsersEN } from '@/ts/L0Entity/UserManage_GP/clsQxUsersEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const qxUsers_Controller = 'QxUsersApi';
export const qxUsers_ConstructorName = 'qxUsers';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strUserId:关键字
 * @returns 对象
 **/
export async function QxUsers_GetObjByUserIdAsync(strUserId: string): Promise<clsQxUsersEN | null> {
  const strThisFuncName = 'GetObjByUserIdAsync';

  if (IsNullOrEmpty(strUserId) == true) {
    const strMsg = Format('参数:[strUserId]不能为空！(In clsQxUsersWApi.GetObjByUserIdAsync)');
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByUserId';
  const strUrl = GetWebApiUrl(qxUsers_Controller, strAction);

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
      const objQxUsers = QxUsers_GetObjFromJsonObj(returnObj);
      return objQxUsers;
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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        qxUsers_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        qxUsers_ConstructorName,
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
export async function QxUsers_GetObjByUserIdCache(strUserId: string, bolTryAsyncOnce = true) {
  const strThisFuncName = 'GetObjByUserIdCache';

  if (IsNullOrEmpty(strUserId) == true) {
    const strMsg = Format('参数:[strUserId]不能为空！(In clsQxUsersWApi.GetObjByUserIdCache)');
    console.error(strMsg);
    throw strMsg;
  }
  const arrQxUsersObjLstCache = await QxUsers_GetObjLstCache();
  try {
    const arrQxUsersSel = arrQxUsersObjLstCache.filter((x) => x.userId == strUserId);
    let objQxUsers: clsQxUsersEN;
    if (arrQxUsersSel.length > 0) {
      objQxUsers = arrQxUsersSel[0];
      return objQxUsers;
    } else {
      if (bolTryAsyncOnce == true) {
        const objQxUsersConst = await QxUsers_GetObjByUserIdAsync(strUserId);
        if (objQxUsersConst != null) {
          QxUsers_ReFreshThisCache();
          return objQxUsersConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strUserId,
      qxUsers_ConstructorName,
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
export async function QxUsers_GetObjByUserIdlocalStorage(strUserId: string) {
  const strThisFuncName = 'GetObjByUserIdlocalStorage';

  if (IsNullOrEmpty(strUserId) == true) {
    const strMsg = Format(
      '参数:[strUserId]不能为空！(In clsQxUsersWApi.GetObjByUserIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsQxUsersEN._CurrTabName, strUserId);
  if (strKey == '') {
    console.error('关键字为空！不正确');
    throw new Error('关键字为空！不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在，直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objQxUsersCache: clsQxUsersEN = JSON.parse(strTempObj);
    return objQxUsersCache;
  }
  try {
    const objQxUsers = await QxUsers_GetObjByUserIdAsync(strUserId);
    if (objQxUsers != null) {
      localStorage.setItem(strKey, JSON.stringify(objQxUsers));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objQxUsers;
    }
    return objQxUsers;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strUserId,
      qxUsers_ConstructorName,
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
 * @param objQxUsers:所给的对象
 * @returns 对象
 */
export async function QxUsers_UpdateObjInLstCache(objQxUsers: clsQxUsersEN) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrQxUsersObjLstCache = await QxUsers_GetObjLstCache();
    const obj = arrQxUsersObjLstCache.find((x) => x.userId == objQxUsers.userId);
    if (obj != null) {
      objQxUsers.userId = obj.userId;
      ObjectAssign(obj, objQxUsers);
    } else {
      arrQxUsersObjLstCache.push(objQxUsers);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      qxUsers_ConstructorName,
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
export async function QxUsers_GetNameByUserIdCache(strUserId: string) {
  if (IsNullOrEmpty(strUserId) == true) {
    const strMsg = Format('参数:[strUserId]不能为空！(In clsQxUsersWApi.GetNameByUserIdCache)');
    console.error(strMsg);
    throw strMsg;
  }
  const arrQxUsersObjLstCache = await QxUsers_GetObjLstCache();
  if (arrQxUsersObjLstCache == null) return '';
  try {
    const arrQxUsersSel = arrQxUsersObjLstCache.filter((x) => x.userId == strUserId);
    let objQxUsers: clsQxUsersEN;
    if (arrQxUsersSel.length > 0) {
      objQxUsers = arrQxUsersSel[0];
      return objQxUsers.userName;
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
 * 映射函数。根据表映射把输入字段值，映射成输出字段值
 * 作者:pyf
 * 日期:2023-06-21
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 * @returns 返回一个输出字段值
 */
export async function QxUsers_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsQxUsersEN.con_UserId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsQxUsersEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确，不在输出字段范围之内!({1})',
      strOutFldName,
      clsQxUsersEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strUserId = strInValue;
  if (IsNullOrEmpty(strInValue) == true) {
    return '';
  }
  const objQxUsers = await QxUsers_GetObjByUserIdCache(strUserId);
  if (objQxUsers == null) return '';
  if (objQxUsers.GetFldValue(strOutFldName) == null) return '';
  return objQxUsers.GetFldValue(strOutFldName).toString();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2023-06-21
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function QxUsers_SortFunDefa(a: clsQxUsersEN, b: clsQxUsersEN): number {
  return a.userId.localeCompare(b.userId);
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2023-06-21
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function QxUsers_SortFunDefa2Fld(a: clsQxUsersEN, b: clsQxUsersEN): number {
  if (a.userName == b.userName) return a.departmentId.localeCompare(b.departmentId);
  else return a.userName.localeCompare(b.userName);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2023-06-21
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function QxUsers_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsQxUsersEN.con_UserId:
        return (a: clsQxUsersEN, b: clsQxUsersEN) => {
          return a.userId.localeCompare(b.userId);
        };
      case clsQxUsersEN.con_UserName:
        return (a: clsQxUsersEN, b: clsQxUsersEN) => {
          return a.userName.localeCompare(b.userName);
        };
      case clsQxUsersEN.con_DepartmentId:
        return (a: clsQxUsersEN, b: clsQxUsersEN) => {
          if (a.departmentId == null) return -1;
          if (b.departmentId == null) return 1;
          return a.departmentId.localeCompare(b.departmentId);
        };
      case clsQxUsersEN.con_UserStateId:
        return (a: clsQxUsersEN, b: clsQxUsersEN) => {
          return a.userStateId.localeCompare(b.userStateId);
        };
      case clsQxUsersEN.con_EffectiveDate:
        return (a: clsQxUsersEN, b: clsQxUsersEN) => {
          if (a.effectiveDate == null) return -1;
          if (b.effectiveDate == null) return 1;
          return a.effectiveDate.localeCompare(b.effectiveDate);
        };
      case clsQxUsersEN.con_Password:
        return (a: clsQxUsersEN, b: clsQxUsersEN) => {
          return a.password.localeCompare(b.password);
        };
      case clsQxUsersEN.con_IdCollege:
        return (a: clsQxUsersEN, b: clsQxUsersEN) => {
          if (a.idCollege == null) return -1;
          if (b.idCollege == null) return 1;
          return a.idCollege.localeCompare(b.idCollege);
        };
      case clsQxUsersEN.con_EffitiveBeginDate:
        return (a: clsQxUsersEN, b: clsQxUsersEN) => {
          if (a.effitiveBeginDate == null) return -1;
          if (b.effitiveBeginDate == null) return 1;
          return a.effitiveBeginDate.localeCompare(b.effitiveBeginDate);
        };
      case clsQxUsersEN.con_EffitiveEndDate:
        return (a: clsQxUsersEN, b: clsQxUsersEN) => {
          if (a.effitiveEndDate == null) return -1;
          if (b.effitiveEndDate == null) return 1;
          return a.effitiveEndDate.localeCompare(b.effitiveEndDate);
        };
      case clsQxUsersEN.con_StuTeacherId:
        return (a: clsQxUsersEN, b: clsQxUsersEN) => {
          if (a.stuTeacherId == null) return -1;
          if (b.stuTeacherId == null) return 1;
          return a.stuTeacherId.localeCompare(b.stuTeacherId);
        };
      case clsQxUsersEN.con_IdentityID:
        return (a: clsQxUsersEN, b: clsQxUsersEN) => {
          if (a.identityID == null) return -1;
          if (b.identityID == null) return 1;
          return a.identityID.localeCompare(b.identityID);
        };
      case clsQxUsersEN.con_IsArchive:
        return (a: clsQxUsersEN) => {
          if (a.isArchive == true) return 1;
          else return -1;
        };
      case clsQxUsersEN.con_openid:
        return (a: clsQxUsersEN, b: clsQxUsersEN) => {
          if (a.openid == null) return -1;
          if (b.openid == null) return 1;
          return a.openid.localeCompare(b.openid);
        };
      case clsQxUsersEN.con_Email:
        return (a: clsQxUsersEN, b: clsQxUsersEN) => {
          if (a.email == null) return -1;
          if (b.email == null) return 1;
          return a.email.localeCompare(b.email);
        };
      case clsQxUsersEN.con_PhoneNumber:
        return (a: clsQxUsersEN, b: clsQxUsersEN) => {
          if (a.phoneNumber == null) return -1;
          if (b.phoneNumber == null) return 1;
          return a.phoneNumber.localeCompare(b.phoneNumber);
        };
      case clsQxUsersEN.con_IsSynch:
        return (a: clsQxUsersEN) => {
          if (a.isSynch == true) return 1;
          else return -1;
        };
      case clsQxUsersEN.con_SynchDate:
        return (a: clsQxUsersEN, b: clsQxUsersEN) => {
          if (a.synchDate == null) return -1;
          if (b.synchDate == null) return 1;
          return a.synchDate.localeCompare(b.synchDate);
        };
      case clsQxUsersEN.con_UpdDate:
        return (a: clsQxUsersEN, b: clsQxUsersEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsQxUsersEN.con_UpdUser:
        return (a: clsQxUsersEN, b: clsQxUsersEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsQxUsersEN.con_Memo:
        return (a: clsQxUsersEN, b: clsQxUsersEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[QxUsers]中不存在！(in ${qxUsers_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsQxUsersEN.con_UserId:
        return (a: clsQxUsersEN, b: clsQxUsersEN) => {
          return b.userId.localeCompare(a.userId);
        };
      case clsQxUsersEN.con_UserName:
        return (a: clsQxUsersEN, b: clsQxUsersEN) => {
          return b.userName.localeCompare(a.userName);
        };
      case clsQxUsersEN.con_DepartmentId:
        return (a: clsQxUsersEN, b: clsQxUsersEN) => {
          if (b.departmentId == null) return -1;
          if (a.departmentId == null) return 1;
          return b.departmentId.localeCompare(a.departmentId);
        };
      case clsQxUsersEN.con_UserStateId:
        return (a: clsQxUsersEN, b: clsQxUsersEN) => {
          return b.userStateId.localeCompare(a.userStateId);
        };
      case clsQxUsersEN.con_EffectiveDate:
        return (a: clsQxUsersEN, b: clsQxUsersEN) => {
          if (b.effectiveDate == null) return -1;
          if (a.effectiveDate == null) return 1;
          return b.effectiveDate.localeCompare(a.effectiveDate);
        };
      case clsQxUsersEN.con_Password:
        return (a: clsQxUsersEN, b: clsQxUsersEN) => {
          return b.password.localeCompare(a.password);
        };
      case clsQxUsersEN.con_IdCollege:
        return (a: clsQxUsersEN, b: clsQxUsersEN) => {
          if (b.idCollege == null) return -1;
          if (a.idCollege == null) return 1;
          return b.idCollege.localeCompare(a.idCollege);
        };
      case clsQxUsersEN.con_EffitiveBeginDate:
        return (a: clsQxUsersEN, b: clsQxUsersEN) => {
          if (b.effitiveBeginDate == null) return -1;
          if (a.effitiveBeginDate == null) return 1;
          return b.effitiveBeginDate.localeCompare(a.effitiveBeginDate);
        };
      case clsQxUsersEN.con_EffitiveEndDate:
        return (a: clsQxUsersEN, b: clsQxUsersEN) => {
          if (b.effitiveEndDate == null) return -1;
          if (a.effitiveEndDate == null) return 1;
          return b.effitiveEndDate.localeCompare(a.effitiveEndDate);
        };
      case clsQxUsersEN.con_StuTeacherId:
        return (a: clsQxUsersEN, b: clsQxUsersEN) => {
          if (b.stuTeacherId == null) return -1;
          if (a.stuTeacherId == null) return 1;
          return b.stuTeacherId.localeCompare(a.stuTeacherId);
        };
      case clsQxUsersEN.con_IdentityID:
        return (a: clsQxUsersEN, b: clsQxUsersEN) => {
          if (b.identityID == null) return -1;
          if (a.identityID == null) return 1;
          return b.identityID.localeCompare(a.identityID);
        };
      case clsQxUsersEN.con_IsArchive:
        return (b: clsQxUsersEN) => {
          if (b.isArchive == true) return 1;
          else return -1;
        };
      case clsQxUsersEN.con_openid:
        return (a: clsQxUsersEN, b: clsQxUsersEN) => {
          if (b.openid == null) return -1;
          if (a.openid == null) return 1;
          return b.openid.localeCompare(a.openid);
        };
      case clsQxUsersEN.con_Email:
        return (a: clsQxUsersEN, b: clsQxUsersEN) => {
          if (b.email == null) return -1;
          if (a.email == null) return 1;
          return b.email.localeCompare(a.email);
        };
      case clsQxUsersEN.con_PhoneNumber:
        return (a: clsQxUsersEN, b: clsQxUsersEN) => {
          if (b.phoneNumber == null) return -1;
          if (a.phoneNumber == null) return 1;
          return b.phoneNumber.localeCompare(a.phoneNumber);
        };
      case clsQxUsersEN.con_IsSynch:
        return (b: clsQxUsersEN) => {
          if (b.isSynch == true) return 1;
          else return -1;
        };
      case clsQxUsersEN.con_SynchDate:
        return (a: clsQxUsersEN, b: clsQxUsersEN) => {
          if (b.synchDate == null) return -1;
          if (a.synchDate == null) return 1;
          return b.synchDate.localeCompare(a.synchDate);
        };
      case clsQxUsersEN.con_UpdDate:
        return (a: clsQxUsersEN, b: clsQxUsersEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsQxUsersEN.con_UpdUser:
        return (a: clsQxUsersEN, b: clsQxUsersEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsQxUsersEN.con_Memo:
        return (a: clsQxUsersEN, b: clsQxUsersEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[QxUsers]中不存在！(in ${qxUsers_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较，返回是否相等
 * 作者:pyf
 * 日期:2023-06-21
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function QxUsers_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsQxUsersEN.con_UserId:
      return (obj: clsQxUsersEN) => {
        return obj.userId === value;
      };
    case clsQxUsersEN.con_UserName:
      return (obj: clsQxUsersEN) => {
        return obj.userName === value;
      };
    case clsQxUsersEN.con_DepartmentId:
      return (obj: clsQxUsersEN) => {
        return obj.departmentId === value;
      };
    case clsQxUsersEN.con_UserStateId:
      return (obj: clsQxUsersEN) => {
        return obj.userStateId === value;
      };
    case clsQxUsersEN.con_EffectiveDate:
      return (obj: clsQxUsersEN) => {
        return obj.effectiveDate === value;
      };
    case clsQxUsersEN.con_Password:
      return (obj: clsQxUsersEN) => {
        return obj.password === value;
      };
    case clsQxUsersEN.con_IdCollege:
      return (obj: clsQxUsersEN) => {
        return obj.idCollege === value;
      };
    case clsQxUsersEN.con_EffitiveBeginDate:
      return (obj: clsQxUsersEN) => {
        return obj.effitiveBeginDate === value;
      };
    case clsQxUsersEN.con_EffitiveEndDate:
      return (obj: clsQxUsersEN) => {
        return obj.effitiveEndDate === value;
      };
    case clsQxUsersEN.con_StuTeacherId:
      return (obj: clsQxUsersEN) => {
        return obj.stuTeacherId === value;
      };
    case clsQxUsersEN.con_IdentityID:
      return (obj: clsQxUsersEN) => {
        return obj.identityID === value;
      };
    case clsQxUsersEN.con_IsArchive:
      return (obj: clsQxUsersEN) => {
        return obj.isArchive === value;
      };
    case clsQxUsersEN.con_openid:
      return (obj: clsQxUsersEN) => {
        return obj.openid === value;
      };
    case clsQxUsersEN.con_Email:
      return (obj: clsQxUsersEN) => {
        return obj.email === value;
      };
    case clsQxUsersEN.con_PhoneNumber:
      return (obj: clsQxUsersEN) => {
        return obj.phoneNumber === value;
      };
    case clsQxUsersEN.con_IsSynch:
      return (obj: clsQxUsersEN) => {
        return obj.isSynch === value;
      };
    case clsQxUsersEN.con_SynchDate:
      return (obj: clsQxUsersEN) => {
        return obj.synchDate === value;
      };
    case clsQxUsersEN.con_UpdDate:
      return (obj: clsQxUsersEN) => {
        return obj.updDate === value;
      };
    case clsQxUsersEN.con_UpdUser:
      return (obj: clsQxUsersEN) => {
        return obj.updUser === value;
      };
    case clsQxUsersEN.con_Memo:
      return (obj: clsQxUsersEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[QxUsers]中不存在！(in ${qxUsers_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}

/**
 * 映射函数。根据表映射把输入字段值，映射成输出字段值
 * 作者:pyf
 * 日期:2023-06-21
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 * @returns 返回一个关键字值列表
 */
export async function QxUsers_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsQxUsersEN.con_UserId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrQxUsers = await QxUsers_GetObjLstCache();
  if (arrQxUsers == null) return [];
  let arrQxUsersSel = arrQxUsers;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrQxUsersSel = arrQxUsersSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrQxUsersSel = arrQxUsersSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrQxUsersSel = arrQxUsersSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrQxUsersSel = arrQxUsersSel.filter((x) => x.GetFldValue(strInFldName) == strInValue);
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrQxUsersSel = arrQxUsersSel.filter((x) => x.GetFldValue(strInFldName) == strInValue);
          break;
        case enumComparisonOp.NotEqual_02:
          arrQxUsersSel = arrQxUsersSel.filter((x) => x.GetFldValue(strInFldName) != strInValue);
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrQxUsersSel = arrQxUsersSel.filter((x) => x.GetFldValue(strInFldName) >= strInValue);
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrQxUsersSel = arrQxUsersSel.filter((x) => x.GetFldValue(strInFldName) <= strInValue);
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrQxUsersSel = arrQxUsersSel.filter((x) => x.GetFldValue(strInFldName) > strInValue);
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrQxUsersSel = arrQxUsersSel.filter((x) => x.GetFldValue(strInFldName) <= strInValue);
          break;
      }
      break;
  }
  if (arrQxUsersSel.length == 0) return [];
  return arrQxUsersSel.map((x) => x.userId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function QxUsers_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(qxUsers_Controller, strAction);

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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        qxUsers_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        qxUsers_ConstructorName,
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
export async function QxUsers_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(qxUsers_Controller, strAction);

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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        qxUsers_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        qxUsers_ConstructorName,
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
export async function QxUsers_GetFirstObjAsync(strWhereCond: string): Promise<clsQxUsersEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(qxUsers_Controller, strAction);

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
      const objQxUsers = QxUsers_GetObjFromJsonObj(returnObj);
      return objQxUsers;
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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        qxUsers_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        qxUsers_ConstructorName,
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
 * 获取本地缓存中的对象列表，是整个表中的全部记录，也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_ClientCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function QxUsers_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsQxUsersEN._CurrTabName;
  if (IsNullOrEmpty(clsQxUsersEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsQxUsersEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空！不正确');
    throw new Error('关键字为空！不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在，直接返回
    const arrQxUsersExObjLstCache: Array<clsQxUsersEN> = CacheHelper.Get(strKey);
    const arrQxUsersObjLstT = QxUsers_GetObjLstByJSONObjLst(arrQxUsersExObjLstCache);
    return arrQxUsersObjLstT;
  }
  try {
    const arrQxUsersExObjLst = await QxUsers_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrQxUsersExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立，对象列表数：{1}!',
      strKey,
      arrQxUsersExObjLst.length,
    );
    console.log(strInfo);
    return arrQxUsersExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      qxUsers_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 获取本地缓存中的对象列表，是整个表中的全部记录，也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function QxUsers_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsQxUsersEN._CurrTabName;
  if (IsNullOrEmpty(clsQxUsersEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsQxUsersEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空！不正确');
    throw new Error('关键字为空！不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在，直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrQxUsersExObjLstCache: Array<clsQxUsersEN> = JSON.parse(strTempObjLst);
    const arrQxUsersObjLstT = QxUsers_GetObjLstByJSONObjLst(arrQxUsersExObjLstCache);
    return arrQxUsersObjLstT;
  }
  try {
    const arrQxUsersExObjLst = await QxUsers_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrQxUsersExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立，对象列表数：{1}!',
      strKey,
      arrQxUsersExObjLst.length,
    );
    console.log(strInfo);
    return arrQxUsersExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      qxUsers_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 获取本地缓存中的对象列表，是整个表中的全部记录，也可是表中某缓存分类的全部记录.如果本地不存在就返回null，不会去访问WebApi获取数据。
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function QxUsers_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsQxUsersEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空！不正确');
    throw new Error('关键字为空！不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在，直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrQxUsersObjLstCache: Array<clsQxUsersEN> = JSON.parse(strTempObjLst);
    return arrQxUsersObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function QxUsers_GetObjLstAsync(strWhereCond: string): Promise<Array<clsQxUsersEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(qxUsers_Controller, strAction);

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
          qxUsers_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = QxUsers_GetObjLstByJSONObjLst(returnObjLst);
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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        qxUsers_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        qxUsers_ConstructorName,
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
 * 获取本地sessionStorage缓存中的对象列表，是整个表中的全部记录，也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function QxUsers_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsQxUsersEN._CurrTabName;
  if (IsNullOrEmpty(clsQxUsersEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsQxUsersEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空！不正确');
    throw new Error('关键字为空！不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在，直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrQxUsersExObjLstCache: Array<clsQxUsersEN> = JSON.parse(strTempObjLst);
    const arrQxUsersObjLstT = QxUsers_GetObjLstByJSONObjLst(arrQxUsersExObjLstCache);
    return arrQxUsersObjLstT;
  }
  try {
    const arrQxUsersExObjLst = await QxUsers_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrQxUsersExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立，对象列表数：{1}!',
      strKey,
      arrQxUsersExObjLst.length,
    );
    console.log(strInfo);
    return arrQxUsersExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      qxUsers_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 获取本地缓存中的对象列表，是整个表中的全部记录，也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function QxUsers_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsQxUsersEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空！不正确');
    throw new Error('关键字为空！不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在，直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrQxUsersObjLstCache: Array<clsQxUsersEN> = JSON.parse(strTempObjLst);
    return arrQxUsersObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表，是整个表中的全部记录，也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function QxUsers_GetObjLstCache(): Promise<Array<clsQxUsersEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrQxUsersObjLstCache;
  switch (clsQxUsersEN.CacheModeId) {
    case '04': //sessionStorage
      arrQxUsersObjLstCache = await QxUsers_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrQxUsersObjLstCache = await QxUsers_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrQxUsersObjLstCache = await QxUsers_GetObjLstClientCache();
      break;
    default:
      arrQxUsersObjLstCache = await QxUsers_GetObjLstClientCache();
      break;
  }
  return arrQxUsersObjLstCache;
}

/**
 * 获取本地缓存中的对象列表，是整个表中的全部记录，也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function QxUsers_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrQxUsersObjLstCache;
  switch (clsQxUsersEN.CacheModeId) {
    case '04': //sessionStorage
      arrQxUsersObjLstCache = await QxUsers_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrQxUsersObjLstCache = await QxUsers_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrQxUsersObjLstCache = null;
      break;
    default:
      arrQxUsersObjLstCache = null;
      break;
  }
  return arrQxUsersObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrUserIdCond:条件对象
 * @returns 对象列表子集
 */
export async function QxUsers_GetSubObjLstCache(objQxUsersCond: clsQxUsersEN) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrQxUsersObjLstCache = await QxUsers_GetObjLstCache();
  let arrQxUsersSel = arrQxUsersObjLstCache;
  if (objQxUsersCond.sfFldComparisonOp == null || objQxUsersCond.sfFldComparisonOp == '')
    return arrQxUsersSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objQxUsersCond.sfFldComparisonOp,
  );
  //console.log("clsQxUsersWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objQxUsersCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrQxUsersSel = arrQxUsersSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objQxUsersCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrQxUsersSel = arrQxUsersSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrQxUsersSel = arrQxUsersSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrQxUsersSel = arrQxUsersSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrQxUsersSel = arrQxUsersSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrQxUsersSel = arrQxUsersSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrQxUsersSel = arrQxUsersSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrQxUsersSel = arrQxUsersSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrQxUsersSel = arrQxUsersSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrQxUsersSel = arrQxUsersSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrQxUsersSel = arrQxUsersSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrQxUsersSel = arrQxUsersSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrQxUsersSel = arrQxUsersSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrQxUsersSel = arrQxUsersSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrQxUsersSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objQxUsersCond),
      qxUsers_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsQxUsersEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrUserId:关键字列表
 * @returns 对象列表
 **/
export async function QxUsers_GetObjLstByUserIdLstAsync(
  arrUserId: Array<string>,
): Promise<Array<clsQxUsersEN>> {
  const strThisFuncName = 'GetObjLstByUserIdLstAsync';
  const strAction = 'GetObjLstByUserIdLst';
  const strUrl = GetWebApiUrl(qxUsers_Controller, strAction);

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
          qxUsers_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = QxUsers_GetObjLstByJSONObjLst(returnObjLst);
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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        qxUsers_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        qxUsers_ConstructorName,
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
export async function QxUsers_GetObjLstByUserIdLstCache(arrUserIdLst: Array<string>) {
  const strThisFuncName = 'GetObjLstByUserIdLstCache';
  try {
    const arrQxUsersObjLstCache = await QxUsers_GetObjLstCache();
    const arrQxUsersSel = arrQxUsersObjLstCache.filter((x) => arrUserIdLst.indexOf(x.userId) > -1);
    return arrQxUsersSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrUserIdLst.join(','),
      qxUsers_ConstructorName,
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
export async function QxUsers_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsQxUsersEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(qxUsers_Controller, strAction);

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
          qxUsers_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = QxUsers_GetObjLstByJSONObjLst(returnObjLst);
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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        qxUsers_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        qxUsers_ConstructorName,
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
 * 根据范围条件获取相应的记录对象列表，获取某范围的记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByRangeAsync)
 * @param objRangePara:根据范围获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function QxUsers_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsQxUsersEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(qxUsers_Controller, strAction);

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
          qxUsers_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = QxUsers_GetObjLstByJSONObjLst(returnObjLst);
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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        qxUsers_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        qxUsers_ConstructorName,
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
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerCache)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function QxUsers_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsQxUsersEN>();
  const arrQxUsersObjLstCache = await QxUsers_GetObjLstCache();
  if (arrQxUsersObjLstCache.length == 0) return arrQxUsersObjLstCache;
  let arrQxUsersSel = arrQxUsersObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objQxUsersCond = new clsQxUsersEN();
  ObjectAssign(objQxUsersCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsQxUsersWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrQxUsersSel = arrQxUsersSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objQxUsersCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrQxUsersSel = arrQxUsersSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrQxUsersSel = arrQxUsersSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrQxUsersSel = arrQxUsersSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrQxUsersSel = arrQxUsersSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrQxUsersSel = arrQxUsersSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrQxUsersSel = arrQxUsersSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrQxUsersSel = arrQxUsersSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrQxUsersSel = arrQxUsersSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrQxUsersSel = arrQxUsersSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrQxUsersSel = arrQxUsersSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrQxUsersSel = arrQxUsersSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrQxUsersSel = arrQxUsersSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrQxUsersSel = arrQxUsersSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrQxUsersSel = arrQxUsersSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrQxUsersSel.length == 0) return arrQxUsersSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrQxUsersSel = arrQxUsersSel.sort(QxUsers_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrQxUsersSel = arrQxUsersSel.sort(objPagerPara.sortFun);
    }
    arrQxUsersSel = arrQxUsersSel.slice(intStart, intEnd);
    return arrQxUsersSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      qxUsers_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsQxUsersEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表，只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function QxUsers_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsQxUsersEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsQxUsersEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(qxUsers_Controller, strAction);

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
          qxUsers_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = QxUsers_GetObjLstByJSONObjLst(returnObjLst);
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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        qxUsers_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        qxUsers_ConstructorName,
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
 * 调用WebApi来删除记录，根据关键字来删除记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelRecordAsync)
 * @param strUserId:关键字
 * @returns 获取删除的结果
 **/
export async function QxUsers_DelRecordAsync(strUserId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(qxUsers_Controller, strAction);
  strUrl = Format('{0}/?Id={1}', strUrl, strUserId);

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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        qxUsers_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        qxUsers_ConstructorName,
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
export async function QxUsers_DelQxUserssAsync(arrUserId: Array<string>): Promise<number> {
  const strThisFuncName = 'DelQxUserssAsync';
  const strAction = 'DelQxUserss';
  const strUrl = GetWebApiUrl(qxUsers_Controller, strAction);

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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        qxUsers_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        qxUsers_ConstructorName,
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
export async function QxUsers_DelQxUserssByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'DelQxUserssByCondAsync';
  const strAction = 'DelQxUserssByCond';
  const strUrl = GetWebApiUrl(qxUsers_Controller, strAction);

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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        qxUsers_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        qxUsers_ConstructorName,
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
 * 调用WebApi来添加记录，数据传递使用JSON串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordAsync)
 * @param objQxUsersEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function QxUsers_AddNewRecordAsync(objQxUsersEN: clsQxUsersEN): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  if (objQxUsersEN.userId === null || objQxUsersEN.userId === '') {
    const strMsg = '需要的对象的关键字为空，不能添加!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objQxUsersEN);
  const strUrl = GetWebApiUrl(qxUsers_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objQxUsersEN, config);
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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        qxUsers_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        qxUsers_ConstructorName,
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
 * 调用WebApi来添加记录，关键字用最大关键字，数据传递使用JSON串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithMaxIdAsync)
 * @param objQxUsersEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function QxUsers_AddNewRecordWithMaxIdAsync(
  objQxUsersEN: clsQxUsersEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(qxUsers_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objQxUsersEN, config);
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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        qxUsers_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        qxUsers_ConstructorName,
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
 * @param objQxUsersEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function QxUsers_AddNewRecordWithReturnKeyAsync(
  objQxUsersEN: clsQxUsersEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(qxUsers_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objQxUsersEN, config);
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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        qxUsers_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        qxUsers_ConstructorName,
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
 * 调用WebApi来修改记录，数据传递使用JSON串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateRecordAsync)
 * @param objQxUsersEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function QxUsers_UpdateRecordAsync(objQxUsersEN: clsQxUsersEN): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objQxUsersEN.sfUpdFldSetStr === undefined ||
    objQxUsersEN.sfUpdFldSetStr === null ||
    objQxUsersEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format('对象(关键字: {0})的【修改字段集】为空，不能修改!', objQxUsersEN.userId);
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(qxUsers_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objQxUsersEN, config);
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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        qxUsers_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        qxUsers_ConstructorName,
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
 * @param objQxUsersEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function QxUsers_UpdateWithConditionAsync(
  objQxUsersEN: clsQxUsersEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objQxUsersEN.sfUpdFldSetStr === undefined ||
    objQxUsersEN.sfUpdFldSetStr === null ||
    objQxUsersEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format('对象(关键字: {0})的【修改字段集】为空，不能修改!', objQxUsersEN.userId);
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(qxUsers_Controller, strAction);
  objQxUsersEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objQxUsersEN, config);
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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        qxUsers_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        qxUsers_ConstructorName,
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
export async function QxUsers_IsExistRecordCache(objQxUsersCond: clsQxUsersEN) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrQxUsersObjLstCache = await QxUsers_GetObjLstCache();
  if (arrQxUsersObjLstCache == null) return false;
  let arrQxUsersSel = arrQxUsersObjLstCache;
  if (objQxUsersCond.sfFldComparisonOp == null || objQxUsersCond.sfFldComparisonOp == '')
    return arrQxUsersSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objQxUsersCond.sfFldComparisonOp,
  );
  //console.log("clsQxUsersWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objQxUsersCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objQxUsersCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrQxUsersSel = arrQxUsersSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrQxUsersSel = arrQxUsersSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrQxUsersSel = arrQxUsersSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrQxUsersSel = arrQxUsersSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrQxUsersSel = arrQxUsersSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrQxUsersSel = arrQxUsersSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrQxUsersSel = arrQxUsersSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrQxUsersSel = arrQxUsersSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrQxUsersSel = arrQxUsersSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrQxUsersSel = arrQxUsersSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrQxUsersSel = arrQxUsersSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrQxUsersSel = arrQxUsersSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrQxUsersSel = arrQxUsersSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrQxUsersSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objQxUsersCond),
      qxUsers_ConstructorName,
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
export async function QxUsers_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(qxUsers_Controller, strAction);

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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        qxUsers_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        qxUsers_ConstructorName,
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
export async function QxUsers_IsExistCache(strUserId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrQxUsersObjLstCache = await QxUsers_GetObjLstCache();
  if (arrQxUsersObjLstCache == null) return false;
  try {
    const arrQxUsersSel = arrQxUsersObjLstCache.filter((x) => x.userId == strUserId);
    if (arrQxUsersSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strUserId,
      qxUsers_ConstructorName,
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
export async function QxUsers_IsExistAsync(strUserId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(qxUsers_Controller, strAction);

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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        qxUsers_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        qxUsers_ConstructorName,
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
export async function QxUsers_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(qxUsers_Controller, strAction);

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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        qxUsers_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        qxUsers_ConstructorName,
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
 * @param objQxUsersCond:条件对象
 * @returns 对象列表记录数
 */
export async function QxUsers_GetRecCountByCondCache(objQxUsersCond: clsQxUsersEN) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrQxUsersObjLstCache = await QxUsers_GetObjLstCache();
  if (arrQxUsersObjLstCache == null) return 0;
  let arrQxUsersSel = arrQxUsersObjLstCache;
  if (objQxUsersCond.sfFldComparisonOp == null || objQxUsersCond.sfFldComparisonOp == '')
    return arrQxUsersSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objQxUsersCond.sfFldComparisonOp,
  );
  //console.log("clsQxUsersWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objQxUsersCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrQxUsersSel = arrQxUsersSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objQxUsersCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrQxUsersSel = arrQxUsersSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrQxUsersSel = arrQxUsersSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrQxUsersSel = arrQxUsersSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrQxUsersSel = arrQxUsersSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrQxUsersSel = arrQxUsersSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrQxUsersSel = arrQxUsersSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrQxUsersSel = arrQxUsersSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrQxUsersSel = arrQxUsersSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrQxUsersSel = arrQxUsersSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrQxUsersSel = arrQxUsersSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrQxUsersSel = arrQxUsersSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrQxUsersSel = arrQxUsersSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrQxUsersSel = arrQxUsersSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrQxUsersSel = arrQxUsersSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrQxUsersSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objQxUsersCond),
      qxUsers_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return 0;
}
/*该表的关键字类型不是字符型自增，不需要生成获取最大关键字函数！*/
/*该表的关键字类型不是字符型带前缀自增，不需要生成获取最大关键字函数！*/

/**
 * 根据前缀获取当前表关键字值的最大值,再加1,避免重复
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetMaxStrIdByPrefix)
 * @param mapParam:参数列表
 * @returns 获取当前表关键字值的最大值
 */
export async function QxUsers_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(qxUsers_Controller, strAction);

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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        qxUsers_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        qxUsers_ConstructorName,
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
export function QxUsers_GetWebApiUrl(strController: string, strAction: string): string {
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
export function QxUsers_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功！');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clsQxUsersEN._CurrTabName;
  switch (clsQxUsersEN.CacheModeId) {
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
export function QxUsers_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsQxUsersEN._CurrTabName;
    switch (clsQxUsersEN.CacheModeId) {
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
    const strMsg = Format('刷新缓存成功！');
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
export async function QxUsers_BindDdl_UserIdInDivCache(
  strDivName: HTMLDivElement,
  strDdlName: string,
) {
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在！(In BindDdl_UserIdInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_UserIdInDivCache");
  const strCondition = `1=1`;
  const arrObjLstSel = await QxUsers_GetObjLstAsync(strCondition);
  if (arrObjLstSel == null) return;
  BindDdl_ObjLstInDivObj(
    strDivName,
    strDdlName,
    arrObjLstSel,
    clsQxUsersEN.con_UserId,
    clsQxUsersEN.con_UserName,
    '用户',
  );
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function QxUsers_CheckPropertyNew(pobjQxUsersEN: clsQxUsersEN) {
  //检查字段非空， 即数据表要求非常非空的字段，不能为空！
  if (IsNullOrEmpty(pobjQxUsersEN.userName) === true) {
    throw new Error(
      '(errid:Watl000058)字段[用户名]不能为空(In 用户)!(clsQxUsersBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxUsersEN.userStateId) === true ||
    pobjQxUsersEN.userStateId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000058)字段[用户状态Id]不能为空(In 用户)!(clsQxUsersBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjQxUsersEN.password) === true) {
    throw new Error(
      '(errid:Watl000058)字段[口令]不能为空(In 用户)!(clsQxUsersBL:CheckPropertyNew)',
    );
  }
  //检查字段长度， 若字符型字段长度超出规定的长度，即非法！
  if (IsNullOrEmpty(pobjQxUsersEN.userId) == false && GetStrLen(pobjQxUsersEN.userId) > 18) {
    throw new Error(
      '(errid:Watl000059)字段[用户ID(userId)]的长度不能超过18(In 用户(QxUsers))!值:$(pobjQxUsersEN.userId)(clsQxUsersBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjQxUsersEN.userName) == false && GetStrLen(pobjQxUsersEN.userName) > 30) {
    throw new Error(
      '(errid:Watl000059)字段[用户名(userName)]的长度不能超过30(In 用户(QxUsers))!值:$(pobjQxUsersEN.userName)(clsQxUsersBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxUsersEN.departmentId) == false &&
    GetStrLen(pobjQxUsersEN.departmentId) > 8
  ) {
    throw new Error(
      '(errid:Watl000059)字段[部门Id(departmentId)]的长度不能超过8(In 用户(QxUsers))!值:$(pobjQxUsersEN.departmentId)(clsQxUsersBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxUsersEN.userStateId) == false &&
    GetStrLen(pobjQxUsersEN.userStateId) > 2
  ) {
    throw new Error(
      '(errid:Watl000059)字段[用户状态Id(userStateId)]的长度不能超过2(In 用户(QxUsers))!值:$(pobjQxUsersEN.userStateId)(clsQxUsersBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxUsersEN.effectiveDate) == false &&
    GetStrLen(pobjQxUsersEN.effectiveDate) > 8
  ) {
    throw new Error(
      '(errid:Watl000059)字段[有效日期(effectiveDate)]的长度不能超过8(In 用户(QxUsers))!值:$(pobjQxUsersEN.effectiveDate)(clsQxUsersBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjQxUsersEN.password) == false && GetStrLen(pobjQxUsersEN.password) > 20) {
    throw new Error(
      '(errid:Watl000059)字段[口令(password)]的长度不能超过20(In 用户(QxUsers))!值:$(pobjQxUsersEN.password)(clsQxUsersBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjQxUsersEN.idCollege) == false && GetStrLen(pobjQxUsersEN.idCollege) > 4) {
    throw new Error(
      '(errid:Watl000059)字段[学院流水号(idCollege)]的长度不能超过4(In 用户(QxUsers))!值:$(pobjQxUsersEN.idCollege)(clsQxUsersBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxUsersEN.effitiveBeginDate) == false &&
    GetStrLen(pobjQxUsersEN.effitiveBeginDate) > 14
  ) {
    throw new Error(
      '(errid:Watl000059)字段[有效开始日期(effitiveBeginDate)]的长度不能超过14(In 用户(QxUsers))!值:$(pobjQxUsersEN.effitiveBeginDate)(clsQxUsersBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxUsersEN.effitiveEndDate) == false &&
    GetStrLen(pobjQxUsersEN.effitiveEndDate) > 14
  ) {
    throw new Error(
      '(errid:Watl000059)字段[有效结束日期(effitiveEndDate)]的长度不能超过14(In 用户(QxUsers))!值:$(pobjQxUsersEN.effitiveEndDate)(clsQxUsersBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxUsersEN.stuTeacherId) == false &&
    GetStrLen(pobjQxUsersEN.stuTeacherId) > 20
  ) {
    throw new Error(
      '(errid:Watl000059)字段[学工号(stuTeacherId)]的长度不能超过20(In 用户(QxUsers))!值:$(pobjQxUsersEN.stuTeacherId)(clsQxUsersBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjQxUsersEN.identityID) == false && GetStrLen(pobjQxUsersEN.identityID) > 2) {
    throw new Error(
      '(errid:Watl000059)字段[身份编号(identityID)]的长度不能超过2(In 用户(QxUsers))!值:$(pobjQxUsersEN.identityID)(clsQxUsersBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjQxUsersEN.openid) == false && GetStrLen(pobjQxUsersEN.openid) > 50) {
    throw new Error(
      '(errid:Watl000059)字段[微信openid(openid)]的长度不能超过50(In 用户(QxUsers))!值:$(pobjQxUsersEN.openid)(clsQxUsersBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjQxUsersEN.email) == false && GetStrLen(pobjQxUsersEN.email) > 100) {
    throw new Error(
      '(errid:Watl000059)字段[邮箱(email)]的长度不能超过100(In 用户(QxUsers))!值:$(pobjQxUsersEN.email)(clsQxUsersBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxUsersEN.phoneNumber) == false &&
    GetStrLen(pobjQxUsersEN.phoneNumber) > 15
  ) {
    throw new Error(
      '(errid:Watl000059)字段[电话号码(phoneNumber)]的长度不能超过15(In 用户(QxUsers))!值:$(pobjQxUsersEN.phoneNumber)(clsQxUsersBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjQxUsersEN.synchDate) == false && GetStrLen(pobjQxUsersEN.synchDate) > 14) {
    throw new Error(
      '(errid:Watl000059)字段[同步日期(synchDate)]的长度不能超过14(In 用户(QxUsers))!值:$(pobjQxUsersEN.synchDate)(clsQxUsersBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjQxUsersEN.updDate) == false && GetStrLen(pobjQxUsersEN.updDate) > 20) {
    throw new Error(
      '(errid:Watl000059)字段[修改日期(updDate)]的长度不能超过20(In 用户(QxUsers))!值:$(pobjQxUsersEN.updDate)(clsQxUsersBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjQxUsersEN.updUser) == false && GetStrLen(pobjQxUsersEN.updUser) > 18) {
    throw new Error(
      '(errid:Watl000059)字段[修改用户(updUser)]的长度不能超过18(In 用户(QxUsers))!值:$(pobjQxUsersEN.updUser)(clsQxUsersBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjQxUsersEN.memo) == false && GetStrLen(pobjQxUsersEN.memo) > 1000) {
    throw new Error(
      '(errid:Watl000059)字段[备注(memo)]的长度不能超过1000(In 用户(QxUsers))!值:$(pobjQxUsersEN.memo)(clsQxUsersBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjQxUsersEN.userId) == false &&
    undefined !== pobjQxUsersEN.userId &&
    tzDataType.isString(pobjQxUsersEN.userId) === false
  ) {
    throw new Error(
      '(errid:Watl000060)字段[用户ID(userId)]的值:[$(pobjQxUsersEN.userId)], 非法，应该为字符型(In 用户(QxUsers))!(clsQxUsersBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxUsersEN.userName) == false &&
    undefined !== pobjQxUsersEN.userName &&
    tzDataType.isString(pobjQxUsersEN.userName) === false
  ) {
    throw new Error(
      '(errid:Watl000060)字段[用户名(userName)]的值:[$(pobjQxUsersEN.userName)], 非法，应该为字符型(In 用户(QxUsers))!(clsQxUsersBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxUsersEN.departmentId) == false &&
    undefined !== pobjQxUsersEN.departmentId &&
    tzDataType.isString(pobjQxUsersEN.departmentId) === false
  ) {
    throw new Error(
      '(errid:Watl000060)字段[部门Id(departmentId)]的值:[$(pobjQxUsersEN.departmentId)], 非法，应该为字符型(In 用户(QxUsers))!(clsQxUsersBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxUsersEN.userStateId) == false &&
    undefined !== pobjQxUsersEN.userStateId &&
    tzDataType.isString(pobjQxUsersEN.userStateId) === false
  ) {
    throw new Error(
      '(errid:Watl000060)字段[用户状态Id(userStateId)]的值:[$(pobjQxUsersEN.userStateId)], 非法，应该为字符型(In 用户(QxUsers))!(clsQxUsersBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxUsersEN.effectiveDate) == false &&
    undefined !== pobjQxUsersEN.effectiveDate &&
    tzDataType.isString(pobjQxUsersEN.effectiveDate) === false
  ) {
    throw new Error(
      '(errid:Watl000060)字段[有效日期(effectiveDate)]的值:[$(pobjQxUsersEN.effectiveDate)], 非法，应该为字符型(In 用户(QxUsers))!(clsQxUsersBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxUsersEN.password) == false &&
    undefined !== pobjQxUsersEN.password &&
    tzDataType.isString(pobjQxUsersEN.password) === false
  ) {
    throw new Error(
      '(errid:Watl000060)字段[口令(password)]的值:[$(pobjQxUsersEN.password)], 非法，应该为字符型(In 用户(QxUsers))!(clsQxUsersBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxUsersEN.idCollege) == false &&
    undefined !== pobjQxUsersEN.idCollege &&
    tzDataType.isString(pobjQxUsersEN.idCollege) === false
  ) {
    throw new Error(
      '(errid:Watl000060)字段[学院流水号(idCollege)]的值:[$(pobjQxUsersEN.idCollege)], 非法，应该为字符型(In 用户(QxUsers))!(clsQxUsersBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxUsersEN.effitiveBeginDate) == false &&
    undefined !== pobjQxUsersEN.effitiveBeginDate &&
    tzDataType.isString(pobjQxUsersEN.effitiveBeginDate) === false
  ) {
    throw new Error(
      '(errid:Watl000060)字段[有效开始日期(effitiveBeginDate)]的值:[$(pobjQxUsersEN.effitiveBeginDate)], 非法，应该为字符型(In 用户(QxUsers))!(clsQxUsersBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxUsersEN.effitiveEndDate) == false &&
    undefined !== pobjQxUsersEN.effitiveEndDate &&
    tzDataType.isString(pobjQxUsersEN.effitiveEndDate) === false
  ) {
    throw new Error(
      '(errid:Watl000060)字段[有效结束日期(effitiveEndDate)]的值:[$(pobjQxUsersEN.effitiveEndDate)], 非法，应该为字符型(In 用户(QxUsers))!(clsQxUsersBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxUsersEN.stuTeacherId) == false &&
    undefined !== pobjQxUsersEN.stuTeacherId &&
    tzDataType.isString(pobjQxUsersEN.stuTeacherId) === false
  ) {
    throw new Error(
      '(errid:Watl000060)字段[学工号(stuTeacherId)]的值:[$(pobjQxUsersEN.stuTeacherId)], 非法，应该为字符型(In 用户(QxUsers))!(clsQxUsersBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxUsersEN.identityID) == false &&
    undefined !== pobjQxUsersEN.identityID &&
    tzDataType.isString(pobjQxUsersEN.identityID) === false
  ) {
    throw new Error(
      '(errid:Watl000060)字段[身份编号(identityID)]的值:[$(pobjQxUsersEN.identityID)], 非法，应该为字符型(In 用户(QxUsers))!(clsQxUsersBL:CheckPropertyNew)',
    );
  }
  if (
    null != pobjQxUsersEN.isArchive &&
    undefined !== pobjQxUsersEN.isArchive &&
    tzDataType.isBoolean(pobjQxUsersEN.isArchive) === false
  ) {
    throw new Error(
      '(errid:Watl000060)字段[是否存档(isArchive)]的值:[$(pobjQxUsersEN.isArchive)], 非法，应该为布尔型(In 用户(QxUsers))!(clsQxUsersBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxUsersEN.openid) == false &&
    undefined !== pobjQxUsersEN.openid &&
    tzDataType.isString(pobjQxUsersEN.openid) === false
  ) {
    throw new Error(
      '(errid:Watl000060)字段[微信openid(openid)]的值:[$(pobjQxUsersEN.openid)], 非法，应该为字符型(In 用户(QxUsers))!(clsQxUsersBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxUsersEN.email) == false &&
    undefined !== pobjQxUsersEN.email &&
    tzDataType.isString(pobjQxUsersEN.email) === false
  ) {
    throw new Error(
      '(errid:Watl000060)字段[邮箱(email)]的值:[$(pobjQxUsersEN.email)], 非法，应该为字符型(In 用户(QxUsers))!(clsQxUsersBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxUsersEN.phoneNumber) == false &&
    undefined !== pobjQxUsersEN.phoneNumber &&
    tzDataType.isString(pobjQxUsersEN.phoneNumber) === false
  ) {
    throw new Error(
      '(errid:Watl000060)字段[电话号码(phoneNumber)]的值:[$(pobjQxUsersEN.phoneNumber)], 非法，应该为字符型(In 用户(QxUsers))!(clsQxUsersBL:CheckPropertyNew)',
    );
  }
  if (
    null != pobjQxUsersEN.isSynch &&
    undefined !== pobjQxUsersEN.isSynch &&
    tzDataType.isBoolean(pobjQxUsersEN.isSynch) === false
  ) {
    throw new Error(
      '(errid:Watl000060)字段[是否同步(isSynch)]的值:[$(pobjQxUsersEN.isSynch)], 非法，应该为布尔型(In 用户(QxUsers))!(clsQxUsersBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxUsersEN.synchDate) == false &&
    undefined !== pobjQxUsersEN.synchDate &&
    tzDataType.isString(pobjQxUsersEN.synchDate) === false
  ) {
    throw new Error(
      '(errid:Watl000060)字段[同步日期(synchDate)]的值:[$(pobjQxUsersEN.synchDate)], 非法，应该为字符型(In 用户(QxUsers))!(clsQxUsersBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxUsersEN.updDate) == false &&
    undefined !== pobjQxUsersEN.updDate &&
    tzDataType.isString(pobjQxUsersEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000060)字段[修改日期(updDate)]的值:[$(pobjQxUsersEN.updDate)], 非法，应该为字符型(In 用户(QxUsers))!(clsQxUsersBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxUsersEN.updUser) == false &&
    undefined !== pobjQxUsersEN.updUser &&
    tzDataType.isString(pobjQxUsersEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000060)字段[修改用户(updUser)]的值:[$(pobjQxUsersEN.updUser)], 非法，应该为字符型(In 用户(QxUsers))!(clsQxUsersBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxUsersEN.memo) == false &&
    undefined !== pobjQxUsersEN.memo &&
    tzDataType.isString(pobjQxUsersEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000060)字段[备注(memo)]的值:[$(pobjQxUsersEN.memo)], 非法，应该为字符型(In 用户(QxUsers))!(clsQxUsersBL:CheckPropertyNew)',
    );
  }
  //检查外键， 作为外键应该和主键的字段长度是一样的， 若不一样，即非法！
  if (
    IsNullOrEmpty(pobjQxUsersEN.userStateId) == false &&
    GetStrLen(pobjQxUsersEN.userStateId) != 2
  ) {
    throw '(errid:Watl000061)字段[用户状态Id]作为外键字段,长度应该为2(In 用户)!(clsQxUsersBL:CheckPropertyNew)';
  }

  //设置说明该对象已经检查过了，后面不需要再检查，即非法！
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function QxUsers_CheckProperty4Update(pobjQxUsersEN: clsQxUsersEN) {
  //检查字段长度， 若字符型字段长度超出规定的长度，即非法！
  if (IsNullOrEmpty(pobjQxUsersEN.userId) == false && GetStrLen(pobjQxUsersEN.userId) > 18) {
    throw new Error(
      '(errid:Watl000062)字段[用户ID(userId)]的长度不能超过18(In 用户(QxUsers))!值:$(pobjQxUsersEN.userId)(clsQxUsersBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjQxUsersEN.userName) == false && GetStrLen(pobjQxUsersEN.userName) > 30) {
    throw new Error(
      '(errid:Watl000062)字段[用户名(userName)]的长度不能超过30(In 用户(QxUsers))!值:$(pobjQxUsersEN.userName)(clsQxUsersBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxUsersEN.departmentId) == false &&
    GetStrLen(pobjQxUsersEN.departmentId) > 8
  ) {
    throw new Error(
      '(errid:Watl000062)字段[部门Id(departmentId)]的长度不能超过8(In 用户(QxUsers))!值:$(pobjQxUsersEN.departmentId)(clsQxUsersBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxUsersEN.userStateId) == false &&
    GetStrLen(pobjQxUsersEN.userStateId) > 2
  ) {
    throw new Error(
      '(errid:Watl000062)字段[用户状态Id(userStateId)]的长度不能超过2(In 用户(QxUsers))!值:$(pobjQxUsersEN.userStateId)(clsQxUsersBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxUsersEN.effectiveDate) == false &&
    GetStrLen(pobjQxUsersEN.effectiveDate) > 8
  ) {
    throw new Error(
      '(errid:Watl000062)字段[有效日期(effectiveDate)]的长度不能超过8(In 用户(QxUsers))!值:$(pobjQxUsersEN.effectiveDate)(clsQxUsersBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjQxUsersEN.password) == false && GetStrLen(pobjQxUsersEN.password) > 20) {
    throw new Error(
      '(errid:Watl000062)字段[口令(password)]的长度不能超过20(In 用户(QxUsers))!值:$(pobjQxUsersEN.password)(clsQxUsersBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjQxUsersEN.idCollege) == false && GetStrLen(pobjQxUsersEN.idCollege) > 4) {
    throw new Error(
      '(errid:Watl000062)字段[学院流水号(idCollege)]的长度不能超过4(In 用户(QxUsers))!值:$(pobjQxUsersEN.idCollege)(clsQxUsersBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxUsersEN.effitiveBeginDate) == false &&
    GetStrLen(pobjQxUsersEN.effitiveBeginDate) > 14
  ) {
    throw new Error(
      '(errid:Watl000062)字段[有效开始日期(effitiveBeginDate)]的长度不能超过14(In 用户(QxUsers))!值:$(pobjQxUsersEN.effitiveBeginDate)(clsQxUsersBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxUsersEN.effitiveEndDate) == false &&
    GetStrLen(pobjQxUsersEN.effitiveEndDate) > 14
  ) {
    throw new Error(
      '(errid:Watl000062)字段[有效结束日期(effitiveEndDate)]的长度不能超过14(In 用户(QxUsers))!值:$(pobjQxUsersEN.effitiveEndDate)(clsQxUsersBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxUsersEN.stuTeacherId) == false &&
    GetStrLen(pobjQxUsersEN.stuTeacherId) > 20
  ) {
    throw new Error(
      '(errid:Watl000062)字段[学工号(stuTeacherId)]的长度不能超过20(In 用户(QxUsers))!值:$(pobjQxUsersEN.stuTeacherId)(clsQxUsersBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjQxUsersEN.identityID) == false && GetStrLen(pobjQxUsersEN.identityID) > 2) {
    throw new Error(
      '(errid:Watl000062)字段[身份编号(identityID)]的长度不能超过2(In 用户(QxUsers))!值:$(pobjQxUsersEN.identityID)(clsQxUsersBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjQxUsersEN.openid) == false && GetStrLen(pobjQxUsersEN.openid) > 50) {
    throw new Error(
      '(errid:Watl000062)字段[微信openid(openid)]的长度不能超过50(In 用户(QxUsers))!值:$(pobjQxUsersEN.openid)(clsQxUsersBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjQxUsersEN.email) == false && GetStrLen(pobjQxUsersEN.email) > 100) {
    throw new Error(
      '(errid:Watl000062)字段[邮箱(email)]的长度不能超过100(In 用户(QxUsers))!值:$(pobjQxUsersEN.email)(clsQxUsersBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxUsersEN.phoneNumber) == false &&
    GetStrLen(pobjQxUsersEN.phoneNumber) > 15
  ) {
    throw new Error(
      '(errid:Watl000062)字段[电话号码(phoneNumber)]的长度不能超过15(In 用户(QxUsers))!值:$(pobjQxUsersEN.phoneNumber)(clsQxUsersBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjQxUsersEN.synchDate) == false && GetStrLen(pobjQxUsersEN.synchDate) > 14) {
    throw new Error(
      '(errid:Watl000062)字段[同步日期(synchDate)]的长度不能超过14(In 用户(QxUsers))!值:$(pobjQxUsersEN.synchDate)(clsQxUsersBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjQxUsersEN.updDate) == false && GetStrLen(pobjQxUsersEN.updDate) > 20) {
    throw new Error(
      '(errid:Watl000062)字段[修改日期(updDate)]的长度不能超过20(In 用户(QxUsers))!值:$(pobjQxUsersEN.updDate)(clsQxUsersBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjQxUsersEN.updUser) == false && GetStrLen(pobjQxUsersEN.updUser) > 18) {
    throw new Error(
      '(errid:Watl000062)字段[修改用户(updUser)]的长度不能超过18(In 用户(QxUsers))!值:$(pobjQxUsersEN.updUser)(clsQxUsersBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjQxUsersEN.memo) == false && GetStrLen(pobjQxUsersEN.memo) > 1000) {
    throw new Error(
      '(errid:Watl000062)字段[备注(memo)]的长度不能超过1000(In 用户(QxUsers))!值:$(pobjQxUsersEN.memo)(clsQxUsersBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjQxUsersEN.userId) == false &&
    undefined !== pobjQxUsersEN.userId &&
    tzDataType.isString(pobjQxUsersEN.userId) === false
  ) {
    throw new Error(
      '(errid:Watl000063)字段[用户ID(userId)]的值:[$(pobjQxUsersEN.userId)], 非法，应该为字符型(In 用户(QxUsers))!(clsQxUsersBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxUsersEN.userName) == false &&
    undefined !== pobjQxUsersEN.userName &&
    tzDataType.isString(pobjQxUsersEN.userName) === false
  ) {
    throw new Error(
      '(errid:Watl000063)字段[用户名(userName)]的值:[$(pobjQxUsersEN.userName)], 非法，应该为字符型(In 用户(QxUsers))!(clsQxUsersBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxUsersEN.departmentId) == false &&
    undefined !== pobjQxUsersEN.departmentId &&
    tzDataType.isString(pobjQxUsersEN.departmentId) === false
  ) {
    throw new Error(
      '(errid:Watl000063)字段[部门Id(departmentId)]的值:[$(pobjQxUsersEN.departmentId)], 非法，应该为字符型(In 用户(QxUsers))!(clsQxUsersBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxUsersEN.userStateId) == false &&
    undefined !== pobjQxUsersEN.userStateId &&
    tzDataType.isString(pobjQxUsersEN.userStateId) === false
  ) {
    throw new Error(
      '(errid:Watl000063)字段[用户状态Id(userStateId)]的值:[$(pobjQxUsersEN.userStateId)], 非法，应该为字符型(In 用户(QxUsers))!(clsQxUsersBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxUsersEN.effectiveDate) == false &&
    undefined !== pobjQxUsersEN.effectiveDate &&
    tzDataType.isString(pobjQxUsersEN.effectiveDate) === false
  ) {
    throw new Error(
      '(errid:Watl000063)字段[有效日期(effectiveDate)]的值:[$(pobjQxUsersEN.effectiveDate)], 非法，应该为字符型(In 用户(QxUsers))!(clsQxUsersBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxUsersEN.password) == false &&
    undefined !== pobjQxUsersEN.password &&
    tzDataType.isString(pobjQxUsersEN.password) === false
  ) {
    throw new Error(
      '(errid:Watl000063)字段[口令(password)]的值:[$(pobjQxUsersEN.password)], 非法，应该为字符型(In 用户(QxUsers))!(clsQxUsersBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxUsersEN.idCollege) == false &&
    undefined !== pobjQxUsersEN.idCollege &&
    tzDataType.isString(pobjQxUsersEN.idCollege) === false
  ) {
    throw new Error(
      '(errid:Watl000063)字段[学院流水号(idCollege)]的值:[$(pobjQxUsersEN.idCollege)], 非法，应该为字符型(In 用户(QxUsers))!(clsQxUsersBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxUsersEN.effitiveBeginDate) == false &&
    undefined !== pobjQxUsersEN.effitiveBeginDate &&
    tzDataType.isString(pobjQxUsersEN.effitiveBeginDate) === false
  ) {
    throw new Error(
      '(errid:Watl000063)字段[有效开始日期(effitiveBeginDate)]的值:[$(pobjQxUsersEN.effitiveBeginDate)], 非法，应该为字符型(In 用户(QxUsers))!(clsQxUsersBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxUsersEN.effitiveEndDate) == false &&
    undefined !== pobjQxUsersEN.effitiveEndDate &&
    tzDataType.isString(pobjQxUsersEN.effitiveEndDate) === false
  ) {
    throw new Error(
      '(errid:Watl000063)字段[有效结束日期(effitiveEndDate)]的值:[$(pobjQxUsersEN.effitiveEndDate)], 非法，应该为字符型(In 用户(QxUsers))!(clsQxUsersBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxUsersEN.stuTeacherId) == false &&
    undefined !== pobjQxUsersEN.stuTeacherId &&
    tzDataType.isString(pobjQxUsersEN.stuTeacherId) === false
  ) {
    throw new Error(
      '(errid:Watl000063)字段[学工号(stuTeacherId)]的值:[$(pobjQxUsersEN.stuTeacherId)], 非法，应该为字符型(In 用户(QxUsers))!(clsQxUsersBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxUsersEN.identityID) == false &&
    undefined !== pobjQxUsersEN.identityID &&
    tzDataType.isString(pobjQxUsersEN.identityID) === false
  ) {
    throw new Error(
      '(errid:Watl000063)字段[身份编号(identityID)]的值:[$(pobjQxUsersEN.identityID)], 非法，应该为字符型(In 用户(QxUsers))!(clsQxUsersBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjQxUsersEN.isArchive &&
    undefined !== pobjQxUsersEN.isArchive &&
    tzDataType.isBoolean(pobjQxUsersEN.isArchive) === false
  ) {
    throw new Error(
      '(errid:Watl000063)字段[是否存档(isArchive)]的值:[$(pobjQxUsersEN.isArchive)], 非法，应该为布尔型(In 用户(QxUsers))!(clsQxUsersBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxUsersEN.openid) == false &&
    undefined !== pobjQxUsersEN.openid &&
    tzDataType.isString(pobjQxUsersEN.openid) === false
  ) {
    throw new Error(
      '(errid:Watl000063)字段[微信openid(openid)]的值:[$(pobjQxUsersEN.openid)], 非法，应该为字符型(In 用户(QxUsers))!(clsQxUsersBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxUsersEN.email) == false &&
    undefined !== pobjQxUsersEN.email &&
    tzDataType.isString(pobjQxUsersEN.email) === false
  ) {
    throw new Error(
      '(errid:Watl000063)字段[邮箱(email)]的值:[$(pobjQxUsersEN.email)], 非法，应该为字符型(In 用户(QxUsers))!(clsQxUsersBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxUsersEN.phoneNumber) == false &&
    undefined !== pobjQxUsersEN.phoneNumber &&
    tzDataType.isString(pobjQxUsersEN.phoneNumber) === false
  ) {
    throw new Error(
      '(errid:Watl000063)字段[电话号码(phoneNumber)]的值:[$(pobjQxUsersEN.phoneNumber)], 非法，应该为字符型(In 用户(QxUsers))!(clsQxUsersBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjQxUsersEN.isSynch &&
    undefined !== pobjQxUsersEN.isSynch &&
    tzDataType.isBoolean(pobjQxUsersEN.isSynch) === false
  ) {
    throw new Error(
      '(errid:Watl000063)字段[是否同步(isSynch)]的值:[$(pobjQxUsersEN.isSynch)], 非法，应该为布尔型(In 用户(QxUsers))!(clsQxUsersBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxUsersEN.synchDate) == false &&
    undefined !== pobjQxUsersEN.synchDate &&
    tzDataType.isString(pobjQxUsersEN.synchDate) === false
  ) {
    throw new Error(
      '(errid:Watl000063)字段[同步日期(synchDate)]的值:[$(pobjQxUsersEN.synchDate)], 非法，应该为字符型(In 用户(QxUsers))!(clsQxUsersBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxUsersEN.updDate) == false &&
    undefined !== pobjQxUsersEN.updDate &&
    tzDataType.isString(pobjQxUsersEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000063)字段[修改日期(updDate)]的值:[$(pobjQxUsersEN.updDate)], 非法，应该为字符型(In 用户(QxUsers))!(clsQxUsersBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxUsersEN.updUser) == false &&
    undefined !== pobjQxUsersEN.updUser &&
    tzDataType.isString(pobjQxUsersEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000063)字段[修改用户(updUser)]的值:[$(pobjQxUsersEN.updUser)], 非法，应该为字符型(In 用户(QxUsers))!(clsQxUsersBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxUsersEN.memo) == false &&
    undefined !== pobjQxUsersEN.memo &&
    tzDataType.isString(pobjQxUsersEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000063)字段[备注(memo)]的值:[$(pobjQxUsersEN.memo)], 非法，应该为字符型(In 用户(QxUsers))!(clsQxUsersBL:CheckProperty4Update)',
    );
  }
  //检查主键是否为Null或者空！
  if (IsNullOrEmpty(pobjQxUsersEN.userId) === true || pobjQxUsersEN.userId.toString() === '0') {
    throw new Error(
      '(errid:Watl000064)字段[用户ID]不能为空(In 用户)!(clsQxUsersBL:CheckProperty4Update)',
    );
  }
  //检查外键， 作为外键应该和主键的字段长度是一样的， 若不一样，即非法！
  if (
    IsNullOrEmpty(pobjQxUsersEN.userStateId) == false &&
    GetStrLen(pobjQxUsersEN.userStateId) != 2
  ) {
    throw '(errid:Watl000065)字段[用户状态Id]作为外键字段,长度应该为2(In 用户)!(clsQxUsersBL:CheckPropertyNew)';
  }
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2023-06-21
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function QxUsers_GetJSONStrByObj(pobjQxUsersEN: clsQxUsersEN): string {
  pobjQxUsersEN.sfUpdFldSetStr = pobjQxUsersEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjQxUsersEN);
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
 * 日期:2023-06-21
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
 */
export function QxUsers_GetObjLstByJSONStr(strJSON: string): Array<clsQxUsersEN> {
  let arrQxUsersObjLst = new Array<clsQxUsersEN>();
  if (strJSON === '') {
    return arrQxUsersObjLst;
  }
  try {
    arrQxUsersObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrQxUsersObjLst;
  }
  return arrQxUsersObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-06-21
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrQxUsersObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function QxUsers_GetObjLstByJSONObjLst(
  arrQxUsersObjLstS: Array<clsQxUsersEN>,
): Array<clsQxUsersEN> {
  const arrQxUsersObjLst = new Array<clsQxUsersEN>();
  for (const objInFor of arrQxUsersObjLstS) {
    const obj1 = QxUsers_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrQxUsersObjLst.push(obj1);
  }
  return arrQxUsersObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-06-21
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function QxUsers_GetObjByJSONStr(strJSON: string): clsQxUsersEN {
  let pobjQxUsersEN = new clsQxUsersEN();
  if (strJSON === '') {
    return pobjQxUsersEN;
  }
  try {
    pobjQxUsersEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjQxUsersEN;
  }
  return pobjQxUsersEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function QxUsers_GetCombineCondition(objQxUsersCond: clsQxUsersEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objQxUsersCond.dicFldComparisonOp,
      clsQxUsersEN.con_UserId,
    ) == true
  ) {
    const strComparisonOpUserId: string =
      objQxUsersCond.dicFldComparisonOp[clsQxUsersEN.con_UserId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsQxUsersEN.con_UserId,
      objQxUsersCond.userId,
      strComparisonOpUserId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objQxUsersCond.dicFldComparisonOp,
      clsQxUsersEN.con_UserName,
    ) == true
  ) {
    const strComparisonOpUserName: string =
      objQxUsersCond.dicFldComparisonOp[clsQxUsersEN.con_UserName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsQxUsersEN.con_UserName,
      objQxUsersCond.userName,
      strComparisonOpUserName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objQxUsersCond.dicFldComparisonOp,
      clsQxUsersEN.con_DepartmentId,
    ) == true
  ) {
    const strComparisonOpDepartmentId: string =
      objQxUsersCond.dicFldComparisonOp[clsQxUsersEN.con_DepartmentId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsQxUsersEN.con_DepartmentId,
      objQxUsersCond.departmentId,
      strComparisonOpDepartmentId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objQxUsersCond.dicFldComparisonOp,
      clsQxUsersEN.con_UserStateId,
    ) == true
  ) {
    const strComparisonOpUserStateId: string =
      objQxUsersCond.dicFldComparisonOp[clsQxUsersEN.con_UserStateId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsQxUsersEN.con_UserStateId,
      objQxUsersCond.userStateId,
      strComparisonOpUserStateId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objQxUsersCond.dicFldComparisonOp,
      clsQxUsersEN.con_EffectiveDate,
    ) == true
  ) {
    const strComparisonOpEffectiveDate: string =
      objQxUsersCond.dicFldComparisonOp[clsQxUsersEN.con_EffectiveDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsQxUsersEN.con_EffectiveDate,
      objQxUsersCond.effectiveDate,
      strComparisonOpEffectiveDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objQxUsersCond.dicFldComparisonOp,
      clsQxUsersEN.con_Password,
    ) == true
  ) {
    const strComparisonOpPassword: string =
      objQxUsersCond.dicFldComparisonOp[clsQxUsersEN.con_Password];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsQxUsersEN.con_Password,
      objQxUsersCond.password,
      strComparisonOpPassword,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objQxUsersCond.dicFldComparisonOp,
      clsQxUsersEN.con_IdCollege,
    ) == true
  ) {
    const strComparisonOpIdCollege: string =
      objQxUsersCond.dicFldComparisonOp[clsQxUsersEN.con_IdCollege];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsQxUsersEN.con_IdCollege,
      objQxUsersCond.idCollege,
      strComparisonOpIdCollege,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objQxUsersCond.dicFldComparisonOp,
      clsQxUsersEN.con_EffitiveBeginDate,
    ) == true
  ) {
    const strComparisonOpEffitiveBeginDate: string =
      objQxUsersCond.dicFldComparisonOp[clsQxUsersEN.con_EffitiveBeginDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsQxUsersEN.con_EffitiveBeginDate,
      objQxUsersCond.effitiveBeginDate,
      strComparisonOpEffitiveBeginDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objQxUsersCond.dicFldComparisonOp,
      clsQxUsersEN.con_EffitiveEndDate,
    ) == true
  ) {
    const strComparisonOpEffitiveEndDate: string =
      objQxUsersCond.dicFldComparisonOp[clsQxUsersEN.con_EffitiveEndDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsQxUsersEN.con_EffitiveEndDate,
      objQxUsersCond.effitiveEndDate,
      strComparisonOpEffitiveEndDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objQxUsersCond.dicFldComparisonOp,
      clsQxUsersEN.con_StuTeacherId,
    ) == true
  ) {
    const strComparisonOpStuTeacherId: string =
      objQxUsersCond.dicFldComparisonOp[clsQxUsersEN.con_StuTeacherId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsQxUsersEN.con_StuTeacherId,
      objQxUsersCond.stuTeacherId,
      strComparisonOpStuTeacherId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objQxUsersCond.dicFldComparisonOp,
      clsQxUsersEN.con_IdentityID,
    ) == true
  ) {
    const strComparisonOpIdentityID: string =
      objQxUsersCond.dicFldComparisonOp[clsQxUsersEN.con_IdentityID];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsQxUsersEN.con_IdentityID,
      objQxUsersCond.identityID,
      strComparisonOpIdentityID,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objQxUsersCond.dicFldComparisonOp,
      clsQxUsersEN.con_IsArchive,
    ) == true
  ) {
    if (objQxUsersCond.isArchive == true) {
      strWhereCond += Format(" And {0} = '1'", clsQxUsersEN.con_IsArchive);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsQxUsersEN.con_IsArchive);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objQxUsersCond.dicFldComparisonOp,
      clsQxUsersEN.con_openid,
    ) == true
  ) {
    const strComparisonOpopenid: string =
      objQxUsersCond.dicFldComparisonOp[clsQxUsersEN.con_openid];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsQxUsersEN.con_openid,
      objQxUsersCond.openid,
      strComparisonOpopenid,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objQxUsersCond.dicFldComparisonOp,
      clsQxUsersEN.con_Email,
    ) == true
  ) {
    const strComparisonOpEmail: string = objQxUsersCond.dicFldComparisonOp[clsQxUsersEN.con_Email];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsQxUsersEN.con_Email,
      objQxUsersCond.email,
      strComparisonOpEmail,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objQxUsersCond.dicFldComparisonOp,
      clsQxUsersEN.con_PhoneNumber,
    ) == true
  ) {
    const strComparisonOpPhoneNumber: string =
      objQxUsersCond.dicFldComparisonOp[clsQxUsersEN.con_PhoneNumber];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsQxUsersEN.con_PhoneNumber,
      objQxUsersCond.phoneNumber,
      strComparisonOpPhoneNumber,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objQxUsersCond.dicFldComparisonOp,
      clsQxUsersEN.con_IsSynch,
    ) == true
  ) {
    if (objQxUsersCond.isSynch == true) {
      strWhereCond += Format(" And {0} = '1'", clsQxUsersEN.con_IsSynch);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsQxUsersEN.con_IsSynch);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objQxUsersCond.dicFldComparisonOp,
      clsQxUsersEN.con_SynchDate,
    ) == true
  ) {
    const strComparisonOpSynchDate: string =
      objQxUsersCond.dicFldComparisonOp[clsQxUsersEN.con_SynchDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsQxUsersEN.con_SynchDate,
      objQxUsersCond.synchDate,
      strComparisonOpSynchDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objQxUsersCond.dicFldComparisonOp,
      clsQxUsersEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objQxUsersCond.dicFldComparisonOp[clsQxUsersEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsQxUsersEN.con_UpdDate,
      objQxUsersCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objQxUsersCond.dicFldComparisonOp,
      clsQxUsersEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objQxUsersCond.dicFldComparisonOp[clsQxUsersEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsQxUsersEN.con_UpdUser,
      objQxUsersCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objQxUsersCond.dicFldComparisonOp,
      clsQxUsersEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string = objQxUsersCond.dicFldComparisonOp[clsQxUsersEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsQxUsersEN.con_Memo,
      objQxUsersCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objQxUsersENS:源对象
 * @param objQxUsersENT:目标对象
 */
export function QxUsers_GetObjFromJsonObj(objQxUsersENS: clsQxUsersEN): clsQxUsersEN {
  const objQxUsersENT: clsQxUsersEN = new clsQxUsersEN();
  ObjectAssign(objQxUsersENT, objQxUsersENS);
  return objQxUsersENT;
}
