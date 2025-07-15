import axios from 'axios';
// import $ from 'jquery';
import { Login_GetWebApiUrl } from '../UserManage_GP/LoginWApi';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { stuRoleMenuPara } from '@/ts/PubFun/stuRoleMenuPara';

import { QxRoleMenus_GetObjLstByJSONObjLst } from '@/ts/L3ForWApi/MenuManage_GP/clsQxRoleMenusWApi';
import { clsQxRoleMenusENEx } from '@/ts/L0Entity/MenuManage_GP/clsQxRoleMenusENEx';
import { QxRoleMenusEx_CopyToEx } from '@/ts/L3ForWApiEx/PrjMenus_GP/clsQxRoleMenusExWApi';
import { Format } from '@/ts/PubFun/clsString';

export const vQxRoleMenusEx_Controller = 'vQxRoleMenusExApi';
export const vQxRoleMenusEx_ConstructorName = 'vQxRoleMenusEx';

/// <summary>
/// 获取当前角色的顶层菜单列表，以Array<clsvQxRoleMenusEN>的形式返回
/// </summary>
/// <param name="strRoleId">角色Id</param>
/// <param name="strPrjId">工程Id</param>
/// <param name="strMenuSetId">菜单集Id</param>
/// <returns>以Array<clsvQxRoleMenusEN>形式表示的顶层菜单列表</returns>
export async function vQxRoleMenusEx_GetUpMenuObjList3(
  strRoleId: string,
  strPrjId: string,
  strMenuSetId: string,
): Promise<Array<clsQxRoleMenusENEx>> {
  let arrUpMenuObjList: Array<clsQxRoleMenusENEx> = [];

  const objRoleMenuPara: stuRoleMenuPara = {
    roleId: strRoleId,
    qxPrjId: strPrjId,
    menuSetId: strMenuSetId,
    isUpMenuId: 'true',
  };

  arrUpMenuObjList = await vQxRoleMenusEx_GetObjLstExAsync(objRoleMenuPara);

  return arrUpMenuObjList;
}

export async function vQxRoleMenusEx_GetUpMenuObjList3Bak20220317(
  strRoleId: string,
  strPrjId: string,
  strMenuSetId: string,
): Promise<Array<clsQxRoleMenusENEx>> {
  let arrUpMenuObjList: Array<clsQxRoleMenusENEx> = [];

  const objRoleMenuPara: stuRoleMenuPara = {
    roleId: strRoleId,
    qxPrjId: strPrjId,
    menuSetId: strMenuSetId,
    isUpMenuId: 'true',
  };

  arrUpMenuObjList = await vQxRoleMenusEx_GetObjLstExAsync(objRoleMenuPara);

  return arrUpMenuObjList;
}

/// <summary>
/// 根据条件获取相应的记录对象列表
/// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
/// </summary>
/// <param name = "strWhereCond">条件</param>
/// <returns>获取的相应对象列表</returns>
export async function vQxRoleMenusEx_GetObjLstExAsync(
  objRoleMenuPara: stuRoleMenuPara,
): Promise<Array<clsQxRoleMenusENEx>> {
  const strThisFuncName = 'vQxRoleMenusEx_GetObjLstExAsync';
  const strAction = 'GetObjLstEx';
  const strUrl = Login_GetWebApiUrl(vQxRoleMenusEx_Controller, strAction);
  // const mapParam: Dictionary = stuRoleMenuPara.GetMapParam(objRoleMenuPara);
  // const strData = mapParam.getParamText(); // "例如: strIdentityID =01";

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objRoleMenuPara, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          vQxRoleMenusEx_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      // const arrObjLst = RegionType_GetObjLstByJSONObjLst(returnObjLst);
      const arrObjLst = QxRoleMenus_GetObjLstByJSONObjLst(returnObjLst);
      const arrObjExLst = arrObjLst.map(QxRoleMenusEx_CopyToEx);

      return arrObjExLst;
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
        vQxRoleMenusEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        vQxRoleMenusEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
/// <summary>
/// 获取当前角色的顶层菜单列表，以Array<clsvQxRoleMenusEN>的形式返回
/// </summary>
/// <param name="strRoleId">角色Id</param>
/// <param name="strPrjId">工程Id</param>
/// <returns>以Array<clsvQxRoleMenusEN>形式表示的顶层菜单列表</returns>
export async function vQxRoleMenusEx_GetUpMenuObjList2(
  strRoleId: string,
  strPrjId: string,
): Promise<Array<clsQxRoleMenusENEx>> {
  let arrUpMenuObjList: Array<clsQxRoleMenusENEx> = [];

  const objRoleMenuPara: stuRoleMenuPara = {
    roleId: strRoleId,
    qxPrjId: strPrjId,
    menuSetId: '',
    isUpMenuId: 'true',
  };

  arrUpMenuObjList = await vQxRoleMenusEx_GetObjLstExAsync(objRoleMenuPara);
  return arrUpMenuObjList;
}
/// <summary>
/// 获取当前角色的子层菜单列表，以Array<clsvQxRoleMenusEN>的形式返回
/// </summary>
/// <param name="strRoleId">角色Id</param>
/// <param name="strPrjId">工程Id</param>
/// <returns>以Array<clsvQxRoleMenusEN>形式表示的子层菜单列表</returns>
export async function vQxRoleMenusEx_GetSubMenuObjList2(
  strRoleId: string,
  strPrjId: string,
): Promise<Array<clsQxRoleMenusENEx>> {
  let arrSubMenuObjList: Array<clsQxRoleMenusENEx> = [];

  const objRoleMenuPara: stuRoleMenuPara = {
    roleId: strRoleId,
    qxPrjId: strPrjId,
    menuSetId: '',
    isUpMenuId: 'false',
  };

  arrSubMenuObjList = await vQxRoleMenusEx_GetObjLstExAsync(objRoleMenuPara);

  return arrSubMenuObjList;
}
/// <summary>
/// 获取当前角色的子层菜单列表，以Array<clsvQxRoleMenusEN>的形式返回
/// </summary>
/// <param name="strRoleId">角色Id</param>
/// <param name="strPrjId">工程Id</param>
/// <param name="strMenuSetId">菜单集Id</param>
/// <returns>以Array<clsvQxRoleMenusEN>形式表示的子层菜单列表</returns>
export async function vQxRoleMenusEx_GetSubMenuObjList3(
  strRoleId: string,
  strPrjId: string,
  strMenuSetId: string,
): Promise<Array<clsQxRoleMenusENEx>> {
  let arrSubMenuObjList: Array<clsQxRoleMenusENEx> = [];

  const objRoleMenuPara: stuRoleMenuPara = {
    roleId: strRoleId,
    qxPrjId: strPrjId,
    menuSetId: strMenuSetId,
    isUpMenuId: 'false',
  };

  arrSubMenuObjList = await vQxRoleMenusEx_GetObjLstExAsync(objRoleMenuPara);

  return arrSubMenuObjList;
}
