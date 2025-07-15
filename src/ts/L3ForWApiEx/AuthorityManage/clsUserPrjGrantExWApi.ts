import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { stuUserLoginInfo } from '@/ts/FunClass/stuUserLoginInfo';
import { clsUserPrjGrantEN } from '@/ts/L0Entity/AuthorityManage/clsUserPrjGrantEN';
import { clsUserPrjGrantENEx } from '@/ts/L0Entity/AuthorityManage/clsUserPrjGrantENEx';
import { clsUserRolesEN } from '@/ts/L0Entity/AuthorityManage/clsUserRolesEN';
import { clsProjectsEN } from '@/ts/L0Entity/PrjManage/clsProjectsEN';
import { clsUsersEN } from '@/ts/L0Entity/UserManage/clsUsersEN';
import {
  UserPrjGrant_GetObjLstByPagerAsync,
  UserPrjGrant_SortFunByKey,
} from '@/ts/L3ForWApi/AuthorityManage/clsUserPrjGrantWApi';
import { UserRoles_func } from '@/ts/L3ForWApi/AuthorityManage/clsUserRolesWApi';
import { Projects_func } from '@/ts/L3ForWApi/PrjManage/clsProjectsWApi';
import { Users_func } from '@/ts/L3ForWApi/UserManage/clsUsersWApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { GetWebApiUrl, clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';

import { GetSortExpressInfo, ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { DateTime_GetDateTimeSim } from '@/ts/PubFun/clsDateTime';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const userPrjGrantEx_Controller = 'UserPrjGrantExApi';
export const userPrjGrantEx_ConstructorName = 'userPrjGrantEx';

/// <summary>
/// 根据关键字列表获取相关对象列表
/// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
/// </summary>
/// <param name = "arrAppPageTypeId">关键字列表</param>
/// <returns>对象列表</returns>
export async function UserPrjGrantEx_GetUserLoginInfoAsync(mId: number): Promise<stuUserLoginInfo> {
  const strThisFuncName = UserPrjGrantEx_GetUserLoginInfoAsync.name;
  const strAction = 'GetUserLoginInfo';
  const strUrl = GetWebApiUrl(userPrjGrantEx_Controller, strAction);
  // const mapParam: Dictionary = new Dictionary();

  // mapParam.add('mId', mId.toString());
  // const strData = mapParam.getParamText(); // "例如: strIdentityID =01";

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      mId,
    },
  };

  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObj = data.returnObj;
      //console.log(returnObj);
      return returnObj;
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
        userPrjGrantEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        userPrjGrantEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

export async function UserPrjGrantEx_GetUserLoginInfoByUserId(
  strUserId: string,
  strPrjId: string,
): Promise<stuUserLoginInfo> {
  const strThisFuncName = UserPrjGrantEx_GetUserLoginInfoAsync.name;
  const strAction = 'GetUserLoginInfoByUserId';
  const strUrl = GetWebApiUrl(userPrjGrantEx_Controller, strAction);
  // const mapParam: Dictionary = new Dictionary();

  // mapParam.add('mId', mId.toString());
  // const strData = mapParam.getParamText(); // "例如: strIdentityID =01";

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strUserId,
      strPrjId,
    },
  };

  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObj = data.returnObj;
      //console.log(returnObj);
      return returnObj;
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
        userPrjGrantEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        userPrjGrantEx_ConstructorName,
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
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function UserPrjGrantEx_GetWebApiUrl(strController: string, strAction: string): string {
  // const strThisFuncName = 'GetWebApiUrl';
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
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_CopyToEx)
 * @param objUserPrjGrantENS:源对象
 * @returns 目标对象=>clsUserPrjGrantEN:objUserPrjGrantENT
 **/
export function UserPrjGrantEx_CopyToEx(
  objUserPrjGrantENS: clsUserPrjGrantEN,
): clsUserPrjGrantENEx {
  const strThisFuncName = UserPrjGrantEx_CopyToEx.name;
  const objUserPrjGrantENT = new clsUserPrjGrantENEx();
  try {
    ObjectAssign(objUserPrjGrantENT, objUserPrjGrantENS);
    return objUserPrjGrantENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      userPrjGrantEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objUserPrjGrantENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function UserPrjGrantEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsUserPrjGrantENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrUserPrjGrantObjLst = await UserPrjGrant_GetObjLstByPagerAsync(objPagerPara);
  const arrUserPrjGrantExObjLst = arrUserPrjGrantObjLst.map(UserPrjGrantEx_CopyToEx);

  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsUserPrjGrantEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrUserPrjGrantExObjLst) {
      objInFor.prjId = clsPrivateSessionStorage.currSelPrjId;
      await UserPrjGrantEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrUserPrjGrantExObjLst.length == 0) return arrUserPrjGrantExObjLst;
  let arrUserPrjGrant_Sel: Array<clsUserPrjGrantENEx> = arrUserPrjGrantExObjLst;
  try {
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrUserPrjGrant_Sel = arrUserPrjGrant_Sel.sort(
        UserPrjGrantEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrUserPrjGrant_Sel = arrUserPrjGrant_Sel.sort(objPagerPara.sortFun);
    }

    return arrUserPrjGrant_Sel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      userPrjGrantEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsUserPrjGrantENEx>();
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objUserPrjGrantS:源对象
 **/
export async function UserPrjGrantEx_FuncMap_UserName(objUserPrjGrant: clsUserPrjGrantENEx) {
  const strThisFuncName = UserPrjGrantEx_FuncMap_UserName.name;
  try {
    if (IsNullOrEmpty(objUserPrjGrant.userName) == true) {
      const Users_UserId = objUserPrjGrant.userId;
      const Users_UserName = await Users_func(
        clsUsersEN.con_UserId,
        clsUsersEN.con_UserName,
        Users_UserId,
      );
      objUserPrjGrant.userName = Users_UserName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000166)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      userPrjGrantEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objUserPrjGrantS:源对象
 **/
export async function UserPrjGrantEx_FuncMap_LastVisitedDateSim(
  objUserPrjGrant: clsUserPrjGrantENEx,
) {
  const strThisFuncName = UserPrjGrantEx_FuncMap_UserName.name;
  try {
    if (
      IsNullOrEmpty(objUserPrjGrant.lastVisitedDateSim) == true &&
      objUserPrjGrant.lastVisitedDate != null
    ) {
      objUserPrjGrant.lastVisitedDateSim = DateTime_GetDateTimeSim(objUserPrjGrant.lastVisitedDate);
    } else {
      objUserPrjGrant.lastVisitedDateSim = '';
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000166)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      userPrjGrantEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objUserPrjGrantS:源对象
 **/
export async function UserPrjGrantEx_FuncMap_PrjName(objUserPrjGrant: clsUserPrjGrantENEx) {
  const strThisFuncName = UserPrjGrantEx_FuncMap_PrjName.name;
  try {
    if (IsNullOrEmpty(objUserPrjGrant.prjName) == true) {
      const Projects_PrjId = objUserPrjGrant.prjId;
      const Projects_PrjName = await Projects_func(
        clsProjectsEN.con_PrjId,
        clsProjectsEN.con_PrjName,
        Projects_PrjId,
      );
      objUserPrjGrant.prjName = Projects_PrjName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000086)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      userPrjGrantEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objUserPrjGrantS:源对象
 **/
export async function UserPrjGrantEx_FuncMap_RoleName(objUserPrjGrant: clsUserPrjGrantENEx) {
  const strThisFuncName = UserPrjGrantEx_FuncMap_RoleName.name;
  try {
    if (IsNullOrEmpty(objUserPrjGrant.roleName) == true) {
      const UserRoles_RoleId = objUserPrjGrant.roleId;
      const UserRoles_RoleName = await UserRoles_func(
        clsUserRolesEN.con_RoleId,
        clsUserRolesEN.con_RoleName,
        UserRoles_RoleId,
      );
      objUserPrjGrant.roleName = UserRoles_RoleName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000142)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      userPrjGrantEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2022-04-16
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function UserPrjGrantEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  // const strThisFuncName = 'SortFunByKey';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsUserPrjGrantENEx.con_UserName:
        return (a: clsUserPrjGrantENEx, b: clsUserPrjGrantENEx) => {
          return a.userName.localeCompare(b.userName);
        };
      case clsUserPrjGrantENEx.con_PrjName:
        return (a: clsUserPrjGrantENEx, b: clsUserPrjGrantENEx) => {
          return a.prjName.localeCompare(b.prjName);
        };
      case clsUserPrjGrantENEx.con_RoleName:
        return (a: clsUserPrjGrantENEx, b: clsUserPrjGrantENEx) => {
          return a.roleName.localeCompare(b.roleName);
        };
      default:
        return UserPrjGrant_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsUserPrjGrantENEx.con_UserName:
        return (a: clsUserPrjGrantENEx, b: clsUserPrjGrantENEx) => {
          return b.userName.localeCompare(a.userName);
        };
      case clsUserPrjGrantENEx.con_PrjName:
        return (a: clsUserPrjGrantENEx, b: clsUserPrjGrantENEx) => {
          return b.prjName.localeCompare(a.prjName);
        };
      case clsUserPrjGrantENEx.con_RoleName:
        return (a: clsUserPrjGrantENEx, b: clsUserPrjGrantENEx) => {
          return b.roleName.localeCompare(a.roleName);
        };
      default:
        return UserPrjGrant_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2022-04-16
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function UserPrjGrantEx_FuncMapByFldName(
  strFldName: string,
  objUserPrjGrantEx: clsUserPrjGrantENEx,
) {
  const strThisFuncName = UserPrjGrantEx_FuncMapByFldName.name;
  let strMsg = '';
  //如果是本表中字段，不需要映射
  const arrFldName = clsUserPrjGrantEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsUserPrjGrantENEx.con_LastVisitedDateSim:
      return UserPrjGrantEx_FuncMap_LastVisitedDateSim(objUserPrjGrantEx);
    case clsUserPrjGrantENEx.con_UserName:
      return UserPrjGrantEx_FuncMap_UserName(objUserPrjGrantEx);

    case clsUserPrjGrantENEx.con_PrjName:
      return UserPrjGrantEx_FuncMap_PrjName(objUserPrjGrantEx);
    case clsUserPrjGrantENEx.con_RoleName:
      return UserPrjGrantEx_FuncMap_RoleName(objUserPrjGrantEx);
    default:
      strMsg = Format(
        '扩展字段:[{0}]在字段值函数映射中不存在！(in {1})',
        strFldName,
        strThisFuncName,
      );
      console.error(strMsg);
  }
}

/**
 * 获取某用户的按最后使用的项目
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strUserId: 用户Id
 * @returns 获取的相应对象列表
 */
export async function UserPrjGrantEx_GetFirstObjByUserId(
  strUserId: string,
): Promise<clsUserPrjGrantEN> {
  const strThisFuncName = UserPrjGrantEx_GetFirstObjByUserId.name;
  const strAction = 'GetFirstObjByUserId';
  const strUrl = UserPrjGrantEx_GetWebApiUrl(userPrjGrantEx_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  console.error('token:', token);
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
      //console.log(returnObj);
      return returnObj;
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
        userPrjGrantEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        userPrjGrantEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
