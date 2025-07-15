import axios from 'axios';
import { Login_GetWebApiUrl } from '../UserManage_GP/LoginWApi';
import { clsQxPrjMenusEN } from '@/ts/L0Entity/MenuManage_GP/clsQxPrjMenusEN';
import { clsQxPrjMenuSetEN } from '@/ts/L0Entity/MenuManage_GP/clsQxPrjMenuSetEN';
import { clsQxRoleMenusEN } from '@/ts/L0Entity/MenuManage_GP/clsQxRoleMenusEN';
import { clsQxRoleMenusENEx } from '@/ts/L0Entity/MenuManage_GP/clsQxRoleMenusENEx';
import { clsQxUserRolesEN } from '@/ts/L0Entity/UserManage_GP/clsQxUserRolesEN';
import { QxPrjMenuSet_func } from '@/ts/L3ForWApi/MenuManage_GP/clsQxPrjMenuSetWApi';
import { QxPrjMenus_func } from '@/ts/L3ForWApi/MenuManage_GP/clsQxPrjMenusWApi';
import {
  QxRoleMenus_GetObjLstByJSONObjLst,
  QxRoleMenus_GetObjLstByPagerAsync,
  QxRoleMenus_SortFunByKey,
} from '@/ts/L3ForWApi/MenuManage_GP/clsQxRoleMenusWApi';
import { QxProjects_func } from '@/ts/L3ForWApi/PrjManage_GP/clsQxProjectsWApi';
import { QxUserRoles_func } from '@/ts/L3ForWApi/UserManage_GP/clsQxUserRolesWApi';
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';

import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { stuRoleMenuPara } from '@/ts/PubFun/stuRoleMenuPara';

import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { Format, IsNullOrEmpty, TransToBool } from '@/ts/PubFun/clsString';
import { clsQxProjectsEN } from '@/ts/L0Entity/PrjManage_GP/clsQxProjectsEN';

export const qxRoleMenusEx_Controller = 'QxRoleMenusExApi';
export const qxRoleMenusEx_ConstructorName = 'qxRoleMenusEx';

/// <summary>
/// 获取当前角色的顶层菜单列表，以Array<clsQxRoleMenusEN>的形式返回
/// </summary>
/// <param name="strRoleId">角色Id</param>
/// <param name="strPrjId">工程Id</param>
/// <param name="strMenuSetId">菜单集Id</param>
/// <returns>以Array<clsQxRoleMenusEN>形式表示的顶层菜单列表</returns>
export async function QxRoleMenusEx_GetUpMenuObjList3(
  strRoleId: string,
  strPrjId: string,
  strMenuSetId: string,
): Promise<Array<clsQxRoleMenusENEx>> {
  let arrQxRoleMenusExObjLst: Array<clsQxRoleMenusENEx> = [];

  const objRoleMenuPara: stuRoleMenuPara = {
    roleId: strRoleId,
    qxPrjId: strPrjId,
    menuSetId: strMenuSetId,
    isUpMenuId: 'true',
  };

  arrQxRoleMenusExObjLst = await QxRoleMenusEx_GetObjLstExAsync(objRoleMenuPara);

  for (const objInFor of arrQxRoleMenusExObjLst) {
    objInFor.menuSetId = strMenuSetId;
    await QxRoleMenusEx_FuncMap(objInFor);
  }
  if (arrQxRoleMenusExObjLst.length == 0) return arrQxRoleMenusExObjLst;

  return arrQxRoleMenusExObjLst;
}

export async function QxRoleMenusEx_GetObjLstExAsync(
  objRoleMenuPara: stuRoleMenuPara,
): Promise<Array<clsQxRoleMenusENEx>> {
  const strAction = 'GetObjLstEx';
  const strUrl = Login_GetWebApiUrl(qxRoleMenusEx_Controller, strAction);
  // const mapParam: Dictionary = stuRoleMenuPara.GetMapParam(objRoleMenuPara);
  // const strData = mapParam.getParamText(); // "例如: strIdentityID =01";

  try {
    const response = await axios.post(strUrl, objRoleMenuPara);
    // If there is reponse, then
    //return response.data;
    //console.log(response.data)

    const returnObjLst = response.data.returnObjLst;

    const arrObjLst = QxRoleMenus_GetObjLstByJSONObjLst(returnObjLst);
    const arrObjExLst = arrObjLst.map(QxRoleMenusEx_CopyToEx);
    //resolve(arrObjLst);
    //resolve(returnBool);
    return arrObjExLst;
  } catch (error: any) {
    console.log(error);
    throw error;
  }
}
/// <summary>
/// 获取当前角色的顶层菜单列表，以Array<clsQxRoleMenusEN>的形式返回
/// </summary>
/// <param name="strRoleId">角色Id</param>
/// <param name="strPrjId">工程Id</param>
/// <returns>以Array<clsQxRoleMenusEN>形式表示的顶层菜单列表</returns>
export async function QxRoleMenusEx_GetUpMenuObjList2(
  strRoleId: string,
  strPrjId: string,
): Promise<Array<clsQxRoleMenusEN>> {
  let arrUpMenuObjList: Array<clsQxRoleMenusEN> = [];

  const objRoleMenuPara: stuRoleMenuPara = {
    roleId: strRoleId,
    qxPrjId: strPrjId,
    menuSetId: '',
    isUpMenuId: 'true',
  };

  arrUpMenuObjList = await QxRoleMenusEx_GetObjLstExAsync(objRoleMenuPara);
  return arrUpMenuObjList;
}
/// <summary>
/// 获取当前角色的子层菜单列表，以Array<clsQxRoleMenusEN>的形式返回
/// </summary>
/// <param name="strRoleId">角色Id</param>
/// <param name="strPrjId">工程Id</param>
/// <returns>以Array<clsQxRoleMenusEN>形式表示的子层菜单列表</returns>
export async function QxRoleMenusEx_GetSubMenuObjList2(
  strRoleId: string,
  strPrjId: string,
): Promise<Array<clsQxRoleMenusENEx>> {
  let arrQxRoleMenusExObjLst: Array<clsQxRoleMenusENEx> = [];

  const objRoleMenuPara: stuRoleMenuPara = {
    roleId: strRoleId,
    qxPrjId: strPrjId,
    menuSetId: '',
    isUpMenuId: 'false',
  };

  arrQxRoleMenusExObjLst = await QxRoleMenusEx_GetObjLstExAsync(objRoleMenuPara);

  for (const objInFor of arrQxRoleMenusExObjLst) {
    await QxRoleMenusEx_FuncMap(objInFor);
  }
  if (arrQxRoleMenusExObjLst.length == 0) return arrQxRoleMenusExObjLst;
  return arrQxRoleMenusExObjLst;
}
/// <summary>
/// 获取当前角色的子层菜单列表，以Array<clsQxRoleMenusEN>的形式返回
/// </summary>
/// <param name="strRoleId">角色Id</param>
/// <param name="strPrjId">工程Id</param>
/// <param name="strMenuSetId">菜单集Id</param>
/// <returns>以Array<clsQxRoleMenusEN>形式表示的子层菜单列表</returns>
export async function QxRoleMenusEx_GetSubMenuObjList3(
  strRoleId: string,
  strPrjId: string,
  strMenuSetId: string,
): Promise<Array<clsQxRoleMenusENEx>> {
  let arrQxRoleMenusExObjLst: Array<clsQxRoleMenusENEx> = [];

  const objRoleMenuPara: stuRoleMenuPara = {
    roleId: strRoleId,
    qxPrjId: strPrjId,
    menuSetId: strMenuSetId,
    isUpMenuId: 'false',
  };

  arrQxRoleMenusExObjLst = await QxRoleMenusEx_GetObjLstExAsync(objRoleMenuPara);

  for (const objInFor of arrQxRoleMenusExObjLst) {
    objInFor.menuSetId = strMenuSetId;
    await QxRoleMenusEx_FuncMap(objInFor);
  }
  if (arrQxRoleMenusExObjLst.length == 0) return arrQxRoleMenusExObjLst;
  return arrQxRoleMenusExObjLst;
}

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function QxRoleMenusEx_GetWebApiUrl(strController: string, strAction: string): string {
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
 * @param objQxRoleMenusENS:源对象
 * @returns 目标对象=>clsQxRoleMenusEN:objQxRoleMenusENT
 **/
export function QxRoleMenusEx_CopyToEx(objQxRoleMenusENS: clsQxRoleMenusEN): clsQxRoleMenusENEx {
  const strThisFuncName = QxRoleMenusEx_CopyToEx.name;
  const objQxRoleMenusENT = new clsQxRoleMenusENEx();
  try {
    ObjectAssign(objQxRoleMenusENT, objQxRoleMenusENS);
    return objQxRoleMenusENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxRoleMenusEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objQxRoleMenusENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function QxRoleMenusEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsQxRoleMenusENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrQxRoleMenusObjLst = await QxRoleMenus_GetObjLstByPagerAsync(objPagerPara);
  const arrQxRoleMenusExObjLst = arrQxRoleMenusObjLst.map(QxRoleMenusEx_CopyToEx);
  for (const objInFor of arrQxRoleMenusExObjLst) {
    await QxRoleMenusEx_FuncMap(objInFor);
  }
  if (arrQxRoleMenusExObjLst.length == 0) return arrQxRoleMenusExObjLst;
  let arrQxRoleMenus_Sel: Array<clsQxRoleMenusENEx> = arrQxRoleMenusExObjLst;
  try {
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrQxRoleMenus_Sel = arrQxRoleMenus_Sel.sort(
        QxRoleMenusEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrQxRoleMenus_Sel = arrQxRoleMenus_Sel.sort(objPagerPara.sortFun);
    }

    return arrQxRoleMenus_Sel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      qxRoleMenusEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsQxRoleMenusENEx>();
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objQxRoleMenusS:源对象
 **/
export async function QxRoleMenusEx_FuncMap(objQxRoleMenus: clsQxRoleMenusENEx) {
  const strThisFuncName = QxRoleMenusEx_FuncMap.name;
  try {
    {
      const QxPrjMenus_MenuId = objQxRoleMenus.menuId;
      const QxPrjMenus_LinkFile = await QxPrjMenus_func(
        clsQxPrjMenusEN.con_MenuId,
        clsQxPrjMenusEN.con_LinkFile,
        QxPrjMenus_MenuId,
        objQxRoleMenus.menuSetId,
      );
      objQxRoleMenus.linkFile = QxPrjMenus_LinkFile;
    }
    {
      const QxUserRoles_RoleId = objQxRoleMenus.roleId;
      const QxUserRoles_RoleName = await QxUserRoles_func(
        clsQxUserRolesEN.con_RoleId,
        clsQxUserRolesEN.con_RoleName,
        QxUserRoles_RoleId,
      );
      objQxRoleMenus.roleName = QxUserRoles_RoleName;
    }
    {
      const QxPrjMenus_MenuId = objQxRoleMenus.menuId;
      const QxPrjMenus_MenuName = await QxPrjMenus_func(
        clsQxPrjMenusEN.con_MenuId,
        clsQxPrjMenusEN.con_MenuName,
        QxPrjMenus_MenuId,
        objQxRoleMenus.menuSetId,
      );
      objQxRoleMenus.menuName = QxPrjMenus_MenuName;
    }

    {
      const QxPrjMenus_MenuId = objQxRoleMenus.menuId;
      const QxPrjMenus_MenuSetId = await QxPrjMenus_func(
        clsQxPrjMenusEN.con_MenuId,
        clsQxPrjMenusEN.con_MenuSetId,
        QxPrjMenus_MenuId,
        objQxRoleMenus.menuSetId,
      );
      const QxPrjMenuSet_MenuSetId = QxPrjMenus_MenuSetId;
      const QxPrjMenuSet_MenuSetName = await QxPrjMenuSet_func(
        clsQxPrjMenuSetEN.con_MenuSetId,
        clsQxPrjMenuSetEN.con_MenuSetName,
        QxPrjMenuSet_MenuSetId,
      );
      objQxRoleMenus.menuSetName = QxPrjMenuSet_MenuSetName;
    }
    {
      const QxPrjMenus_MenuId = objQxRoleMenus.menuId;
      const QxPrjMenus_OrderNum = await QxPrjMenus_func(
        clsQxPrjMenusEN.con_MenuId,
        clsQxPrjMenusEN.con_OrderNum,
        QxPrjMenus_MenuId,
        objQxRoleMenus.menuSetId,
      );
      objQxRoleMenus.orderNum = QxPrjMenus_OrderNum;
    }
    {
      const QxPrjMenus_MenuId = objQxRoleMenus.menuId;
      const QxPrjMenus_IsLeafNode = await QxPrjMenus_func(
        clsQxPrjMenusEN.con_MenuId,
        clsQxPrjMenusEN.con_IsLeafNode,
        QxPrjMenus_MenuId,
        objQxRoleMenus.menuSetId,
      );
      objQxRoleMenus.isLeafNode = TransToBool(QxPrjMenus_IsLeafNode);
    }
    {
      const QxPrjMenus_MenuId = objQxRoleMenus.menuId;
      const QxPrjMenus_PageDispModeId = await QxPrjMenus_func(
        clsQxPrjMenusEN.con_MenuId,
        clsQxPrjMenusEN.con_PageDispModeId,
        QxPrjMenus_MenuId,
        objQxRoleMenus.menuSetId,
      );
      objQxRoleMenus.pageDispModeId = QxPrjMenus_PageDispModeId;
    }
    {
      const QxPrjMenus_MenuId = objQxRoleMenus.menuId;
      const QxPrjMenus_InUse = await QxPrjMenus_func(
        clsQxPrjMenusEN.con_MenuId,
        clsQxPrjMenusEN.con_InUse,
        QxPrjMenus_MenuId,
        objQxRoleMenus.menuSetId,
      );
      objQxRoleMenus.inUse = TransToBool(QxPrjMenus_InUse);
    }
    {
      const QxPrjMenus_MenuId = objQxRoleMenus.menuId;
      const QxPrjMenus_UpMenuId = await QxPrjMenus_func(
        clsQxPrjMenusEN.con_MenuId,
        clsQxPrjMenusEN.con_UpMenuId,
        QxPrjMenus_MenuId,
        objQxRoleMenus.menuSetId,
      );
      objQxRoleMenus.upMenuId = QxPrjMenus_UpMenuId;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000072)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxRoleMenusEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 通过函数映射把对象列表转换为扩展对象列表.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByFuncMap)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function QxRoleMenusEx_GetObjExLstByFuncMap(
  arrQxRoleMenusObjLst: Array<clsQxRoleMenusEN>,
): Promise<Array<clsQxRoleMenusENEx>> {
  // const strThisFuncName = QxRoleMenusEx_GetObjExLstByFuncMap.name;
  const arrQxRoleMenusExObjLst: Array<clsQxRoleMenusENEx> = [];
  for (const objInFor of arrQxRoleMenusObjLst) {
    const objEx = QxRoleMenusEx_CopyToEx(objInFor);
    arrQxRoleMenusExObjLst.push(objEx);
  }
  for (const objInFor of arrQxRoleMenusExObjLst) {
    await QxRoleMenusEx_FuncMap(objInFor);
  }
  return arrQxRoleMenusExObjLst;
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2022-03-17
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function QxRoleMenusEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  // const strThisFuncName = 'SortFunByKey';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsQxRoleMenusENEx.con_MenuName:
        return (a: clsQxRoleMenusENEx, b: clsQxRoleMenusENEx) => {
          return a.menuName.localeCompare(b.menuName);
        };
      case clsQxRoleMenusENEx.con_RoleName:
        return (a: clsQxRoleMenusENEx, b: clsQxRoleMenusENEx) => {
          return a.roleName.localeCompare(b.roleName);
        };
      case clsQxRoleMenusENEx.con_MenuSetName:
        return (a: clsQxRoleMenusENEx, b: clsQxRoleMenusENEx) => {
          return a.menuSetName.localeCompare(b.menuSetName);
        };
      case clsQxRoleMenusENEx.con_MenuSetId:
        return (a: clsQxRoleMenusENEx, b: clsQxRoleMenusENEx) => {
          return a.menuSetId.localeCompare(b.menuSetId);
        };
      case clsQxRoleMenusENEx.con_OrderNum:
        return (a: clsQxRoleMenusENEx, b: clsQxRoleMenusENEx) => {
          return a.orderNum - b.orderNum;
        };
      default:
        return QxRoleMenus_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsQxRoleMenusENEx.con_MenuName:
        return (a: clsQxRoleMenusENEx, b: clsQxRoleMenusENEx) => {
          return b.menuName.localeCompare(a.menuName);
        };
      case clsQxRoleMenusENEx.con_RoleName:
        return (a: clsQxRoleMenusENEx, b: clsQxRoleMenusENEx) => {
          return b.roleName.localeCompare(a.roleName);
        };
      case clsQxRoleMenusENEx.con_MenuSetName:
        return (a: clsQxRoleMenusENEx, b: clsQxRoleMenusENEx) => {
          return b.menuSetName.localeCompare(a.menuSetName);
        };
      case clsQxRoleMenusENEx.con_MenuSetId:
        return (a: clsQxRoleMenusENEx, b: clsQxRoleMenusENEx) => {
          return b.menuSetId.localeCompare(a.menuSetId);
        };
      case clsQxRoleMenusENEx.con_OrderNum:
        return (a: clsQxRoleMenusENEx, b: clsQxRoleMenusENEx) => {
          return b.orderNum - a.orderNum;
        };
      default:
        return QxRoleMenus_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:潘以锋
 * 日期:00-00-00
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function QxRoleMenusEx_FuncMapByFldName(
  strFldName: string,
  objQxRoleMenusEx: clsQxRoleMenusENEx,
) {
  const strThisFuncName = QxRoleMenusEx_FuncMapByFldName.name;
  let strMsg = '';
  //如果是本表中字段，不需要映射
  const arrFldName = clsQxRoleMenusEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsQxRoleMenusENEx.con_MenuName:
      return QxRoleMenusEx_FuncMap_MenuName(objQxRoleMenusEx);
    case clsQxRoleMenusENEx.con_RoleName:
      return QxRoleMenusEx_FuncMap_RoleName(objQxRoleMenusEx);
    case clsQxRoleMenusENEx.con_MenuSetName:
      return QxRoleMenusEx_FuncMap_MenuSetName(objQxRoleMenusEx);
    case clsQxRoleMenusENEx.con_MenuSetId:
      return QxRoleMenusEx_FuncMap_MenuSetId(objQxRoleMenusEx);
    case clsQxRoleMenusENEx.con_OrderNum:
      return QxRoleMenusEx_FuncMap_OrderNum(objQxRoleMenusEx);
    case clsQxRoleMenusENEx.con_InUse:
      return QxRoleMenusEx_FuncMap_InUse(objQxRoleMenusEx);
    case clsQxRoleMenusENEx.con_IsLeafNode:
      return QxRoleMenusEx_FuncMap_IsLeafNode(objQxRoleMenusEx);
    case clsQxRoleMenusENEx.con_PageDispModeId:
      return QxRoleMenusEx_FuncMap_PageDispModeId(objQxRoleMenusEx);
    case clsQxRoleMenusENEx.con_UpMenuId:
      return QxRoleMenusEx_FuncMap_UpMenuId(objQxRoleMenusEx);
    case clsQxRoleMenusENEx.con_LinkFile:
      return QxRoleMenusEx_FuncMap_LinkFile(objQxRoleMenusEx);
    case clsQxRoleMenusENEx.con_PrjName:
      return QxRoleMenusEx_FuncMap_PrjName(objQxRoleMenusEx);
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
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objQxRoleMenusS:源对象
 **/
export async function QxRoleMenusEx_FuncMap_MenuName(objQxRoleMenus: clsQxRoleMenusENEx) {
  const strThisFuncName = QxRoleMenusEx_FuncMap_MenuName.name;
  try {
    if (IsNullOrEmpty(objQxRoleMenus.menuName) == true) {
      const QxPrjMenus_MenuId = objQxRoleMenus.menuId;
      const QxPrjMenus_MenuName = await QxPrjMenus_func(
        clsQxPrjMenusEN.con_MenuId,
        clsQxPrjMenusEN.con_MenuName,
        QxPrjMenus_MenuId,
        objQxRoleMenus.menuSetId,
      );
      objQxRoleMenus.menuName = QxPrjMenus_MenuName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000141)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxRoleMenusEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objQxRoleMenusS:源对象
 **/
export async function QxRoleMenusEx_FuncMap_RoleName(objQxRoleMenus: clsQxRoleMenusENEx) {
  const strThisFuncName = QxRoleMenusEx_FuncMap_RoleName.name;
  try {
    if (IsNullOrEmpty(objQxRoleMenus.roleName) == true) {
      const QxUserRoles_RoleId = objQxRoleMenus.roleId;
      const QxUserRoles_RoleName = await QxUserRoles_func(
        clsQxUserRolesEN.con_RoleId,
        clsQxUserRolesEN.con_RoleName,
        QxUserRoles_RoleId,
      );
      objQxRoleMenus.roleName = QxUserRoles_RoleName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000142)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxRoleMenusEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objQxRoleMenusS:源对象
 **/
export async function QxRoleMenusEx_FuncMap_MenuSetName(objQxRoleMenus: clsQxRoleMenusENEx) {
  const strThisFuncName = QxRoleMenusEx_FuncMap_MenuSetName.name;
  try {
    if (IsNullOrEmpty(objQxRoleMenus.menuSetName) == true) {
      const QxPrjMenus_MenuId = objQxRoleMenus.menuId;
      const QxPrjMenus_MenuSetId = await QxPrjMenus_func(
        clsQxPrjMenusEN.con_MenuId,
        clsQxPrjMenusEN.con_MenuSetId,
        QxPrjMenus_MenuId,
        objQxRoleMenus.menuSetId,
      );
      const QxPrjMenuSet_MenuSetId = QxPrjMenus_MenuSetId;
      const QxPrjMenuSet_MenuSetName = await QxPrjMenuSet_func(
        clsQxPrjMenuSetEN.con_MenuSetId,
        clsQxPrjMenuSetEN.con_MenuSetName,
        QxPrjMenuSet_MenuSetId,
      );
      objQxRoleMenus.menuSetName = QxPrjMenuSet_MenuSetName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000143)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxRoleMenusEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objQxRoleMenusS:源对象
 **/
export async function QxRoleMenusEx_FuncMap_MenuSetId(objQxRoleMenus: clsQxRoleMenusENEx) {
  const strThisFuncName = QxRoleMenusEx_FuncMap_MenuSetId.name;
  try {
    if (IsNullOrEmpty(objQxRoleMenus.menuSetId) == true) {
      const QxPrjMenus_MenuId = objQxRoleMenus.menuId;
      const QxPrjMenus_MenuSetId = await QxPrjMenus_func(
        clsQxPrjMenusEN.con_MenuId,
        clsQxPrjMenusEN.con_MenuSetId,
        QxPrjMenus_MenuId,
        objQxRoleMenus.menuSetId,
      );
      objQxRoleMenus.menuSetId = QxPrjMenus_MenuSetId;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000144)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxRoleMenusEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objQxRoleMenusS:源对象
 **/
export async function QxRoleMenusEx_FuncMap_OrderNum(objQxRoleMenus: clsQxRoleMenusENEx) {
  const strThisFuncName = QxRoleMenusEx_FuncMap_OrderNum.name;
  try {
    if (objQxRoleMenus.orderNum == 0) {
      const QxPrjMenus_MenuId = objQxRoleMenus.menuId;
      const QxPrjMenus_OrderNum = await QxPrjMenus_func(
        clsQxPrjMenusEN.con_MenuId,
        clsQxPrjMenusEN.con_OrderNum,
        QxPrjMenus_MenuId,
        objQxRoleMenus.menuSetId,
      );
      objQxRoleMenus.orderNum = QxPrjMenus_OrderNum;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000099)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxRoleMenusEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objQxRoleMenusS:源对象
 **/
export async function QxRoleMenusEx_FuncMap_InUse(objQxRoleMenus: clsQxRoleMenusENEx) {
  const strThisFuncName = QxRoleMenusEx_FuncMap_InUse.name;
  try {
    const QxPrjMenus_MenuId = objQxRoleMenus.menuId;
    const QxPrjMenus_InUse = await QxPrjMenus_func(
      clsQxPrjMenusEN.con_MenuId,
      clsQxPrjMenusEN.con_InUse,
      QxPrjMenus_MenuId,
      objQxRoleMenus.menuSetId,
    );
    objQxRoleMenus.inUse = QxPrjMenus_InUse;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000145)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxRoleMenusEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objQxRoleMenusS:源对象
 **/
export async function QxRoleMenusEx_FuncMap_IsLeafNode(objQxRoleMenus: clsQxRoleMenusENEx) {
  const strThisFuncName = QxRoleMenusEx_FuncMap_IsLeafNode.name;
  try {
    const QxPrjMenus_MenuId = objQxRoleMenus.menuId;
    const QxPrjMenus_IsLeafNode = await QxPrjMenus_func(
      clsQxPrjMenusEN.con_MenuId,
      clsQxPrjMenusEN.con_IsLeafNode,
      QxPrjMenus_MenuId,
      objQxRoleMenus.menuSetId,
    );
    objQxRoleMenus.isLeafNode = QxPrjMenus_IsLeafNode;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000146)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxRoleMenusEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objQxRoleMenusS:源对象
 **/
export async function QxRoleMenusEx_FuncMap_PageDispModeId(objQxRoleMenus: clsQxRoleMenusENEx) {
  const strThisFuncName = QxRoleMenusEx_FuncMap_PageDispModeId.name;
  try {
    if (IsNullOrEmpty(objQxRoleMenus.pageDispModeId) == true) {
      const QxPrjMenus_MenuId = objQxRoleMenus.menuId;
      const QxPrjMenus_PageDispModeId = await QxPrjMenus_func(
        clsQxPrjMenusEN.con_MenuId,
        clsQxPrjMenusEN.con_PageDispModeId,
        QxPrjMenus_MenuId,
        objQxRoleMenus.menuSetId,
      );
      objQxRoleMenus.pageDispModeId = QxPrjMenus_PageDispModeId;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000147)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxRoleMenusEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objQxRoleMenusS:源对象
 **/
export async function QxRoleMenusEx_FuncMap_UpMenuId(objQxRoleMenus: clsQxRoleMenusENEx) {
  const strThisFuncName = QxRoleMenusEx_FuncMap_UpMenuId.name;
  try {
    if (IsNullOrEmpty(objQxRoleMenus.upMenuId) == true) {
      const QxPrjMenus_MenuId = objQxRoleMenus.menuId;
      const QxPrjMenus_UpMenuId = await QxPrjMenus_func(
        clsQxPrjMenusEN.con_MenuId,
        clsQxPrjMenusEN.con_UpMenuId,
        QxPrjMenus_MenuId,
        objQxRoleMenus.menuSetId,
      );
      objQxRoleMenus.upMenuId = QxPrjMenus_UpMenuId;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000148)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxRoleMenusEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objQxRoleMenusS:源对象
 **/
export async function QxRoleMenusEx_FuncMap_LinkFile(objQxRoleMenus: clsQxRoleMenusENEx) {
  const strThisFuncName = QxRoleMenusEx_FuncMap_LinkFile.name;
  try {
    if (IsNullOrEmpty(objQxRoleMenus.linkFile) == true) {
      const QxPrjMenus_MenuId = objQxRoleMenus.menuId;
      const QxPrjMenus_LinkFile = await QxPrjMenus_func(
        clsQxPrjMenusEN.con_MenuId,
        clsQxPrjMenusEN.con_LinkFile,
        QxPrjMenus_MenuId,
        objQxRoleMenus.menuSetId,
      );
      objQxRoleMenus.linkFile = QxPrjMenus_LinkFile;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000149)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxRoleMenusEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objQxRoleMenusS:源对象
 **/
export async function QxRoleMenusEx_FuncMap_PrjName(objQxRoleMenus: clsQxRoleMenusENEx) {
  const strThisFuncName = QxRoleMenusEx_FuncMap_PrjName.name;
  try {
    if (IsNullOrEmpty(objQxRoleMenus.prjName) == true) {
      const QxProjects_QxPrjId = objQxRoleMenus.qxPrjId;
      const QxProjects_PrjName = await QxProjects_func(
        clsQxProjectsEN.con_QxPrjId,
        clsQxProjectsEN.con_PrjName,
        QxProjects_QxPrjId,
      );
      objQxRoleMenus.prjName = QxProjects_PrjName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000086)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxRoleMenusEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
