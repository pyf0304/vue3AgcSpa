//import $ from "jquery";

import { clsUserPrjGrantEN } from '@/ts/L0Entity/AuthorityManage/clsUserPrjGrantEN';
import { clsUserPrjGrantENEx } from '@/ts/L0Entity/AuthorityManage/clsUserPrjGrantENEx';
import { clsQxRoleMenusENEx } from '@/ts/L0Entity/MenuManage_GP/clsQxRoleMenusENEx';

import { UserPrjGrant_GetObjLstAsync } from '@/ts/L3ForWApi/AuthorityManage/clsUserPrjGrantWApi';

import { CMProject_GetNameByCmPrjIdCache } from '@/ts/L3ForWApi/CodeMan/clsCMProjectWApi';
import { PrjDataBase_GetNameByPrjDataBaseIdCache } from '@/ts/L3ForWApi/PrjManage/clsPrjDataBaseWApi';
import {
  UserPrjGrantEx_CopyToEx,
  UserPrjGrantEx_FuncMapByFldName,
  UserPrjGrantEx_GetUserLoginInfoAsync,
} from '@/ts/L3ForWApiEx/AuthorityManage/clsUserPrjGrantExWApi';
import {
  CMProjectEx_AddDefaCmProject,
  CMProjectEx_BindDdl_CmPrjIdInDivCache,
} from '@/ts/L3ForWApiEx/CodeMan/clsCMProjectExWApi';
import {
  QxRoleMenusEx_GetSubMenuObjList2,
  QxRoleMenusEx_GetSubMenuObjList3,
  QxRoleMenusEx_GetUpMenuObjList3,
} from '@/ts/L3ForWApiEx/PrjMenus_GP/clsQxRoleMenusExWApi';
import { vQxRoleMenusEx_GetUpMenuObjList2 } from '@/ts/L3ForWApiEx/PrjMenus_GP/clsvQxRoleMenusEx2WApi';
import { UserDefaPrjDataBaseEx_GetObjByPrjIdAndUserId } from '@/ts/L3ForWApiEx/SystemSet/clsUserDefaPrjDataBaseExWApi';

import {
  UserDefaValue_LocalEx_getUserDefaValue,
  UserDefaValue_LocalEx_setUserDefaValue,
} from '@/ts/L3ForWApiEx/UserManage/clsUserDefaValue_LocalExWApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import {
  CheckControlExistInDivObj,
  GetSelectObjInDivObj,
  GetSelectValueInDivObj,
  GetUniDivInDoc,
  SetSelectValueByIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { Redirect } from '@/ts/PubFun/clsCommFunc4Web';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { clsPubSessionStorage } from '@/ts/PubFun/clsPubSessionStorage';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
// declare const strUrl_Session_SetString: string;
// declare const strUrl_Session_GetString: string;
// declare const strWebRoot: string;
declare const strCurrPrjId: string;
/// <summary>
/// WApiCollege_UT_TS 的摘要说明。其中Q代表查询,U代表修改
/// (AutoGCLib.WA_ViewUTScriptCS_TS4TypeScript:GeneCode)
/// </summary>
export class MainIndex {
  public static divMainIndex = GetUniDivInDoc('divMainIndex');
  public static async ExtendFldFuncMap(arrUserPrjGrantExObjLst: Array<clsUserPrjGrantENEx>) {
    // const arrFldName = clsUserPrjGrantEN.AttributeName;

    for (const objInFor of arrUserPrjGrantExObjLst) {
      //objInFor.prjId = clsPrivateSessionStorage.currSelPrjId;
      await UserPrjGrantEx_FuncMapByFldName(clsUserPrjGrantENEx.con_PrjName, objInFor);
      await UserPrjGrantEx_FuncMapByFldName(clsUserPrjGrantENEx.con_RoleName, objInFor);
      await UserPrjGrantEx_FuncMapByFldName(clsUserPrjGrantENEx.con_UserName, objInFor);
      await UserPrjGrantEx_FuncMapByFldName(clsUserPrjGrantENEx.con_LastVisitedDateSim, objInFor);
    }
  }
  public static async BindUserPrj(strUserId: string) {
    // const strCurrSelPrjId = clsPrivateSessionStorage.currSelPrjId;

    console.log(strUserId);
    const strWhereCond = `userId='${clsPubLocalStorage.userId}' order by ${clsUserPrjGrantEN.con_LastVisitedDate} desc, visitednum desc`;
    let arrUserPrjGrantExObjLst: Array<clsUserPrjGrantENEx> = [];
    try {
      const arrUserPrjGrantObjLst = await UserPrjGrant_GetObjLstAsync(strWhereCond);
      arrUserPrjGrantExObjLst = arrUserPrjGrantObjLst.map(UserPrjGrantEx_CopyToEx);

      await MainIndex.ExtendFldFuncMap(arrUserPrjGrantExObjLst);
    } catch (e: any) {
      const strMsg = `获取用户工程授权信息出错！${e}`;
      throw strMsg;
    }
    const ulPrjList: HTMLUListElement = document.getElementById('ulPrjList') as HTMLUListElement;
    //StringBuilder sbHtml = new StringBuilder();
    const ul1: HTMLUListElement = document.createElement('ul');
    ul1.className = 'header-dropdown-menu';
    //sbHtml.AppendFormat(" <ul class=\"header-dropdown-menu\">");
    //for (let objInFor of arrViewInfoObjLst)
    for (const objvUserPrjGrantEN of arrUserPrjGrantExObjLst) {
      //ulPrjList.Controls
      //< li >< a href = "../../Webform/wfmSelectProject.aspx" > 切换项目 </ a ></ li >
      const li1: HTMLLIElement = document.createElement('li');
      const a1: HTMLAnchorElement = document.createElement('a');
      a1.id = `lbSwitchPrj${objvUserPrjGrantEN.mId}`;
      a1.href = `javascript:SwitchPrj('SwitchPrj_Click', '${objvUserPrjGrantEN.mId}')`;
      a1.innerText = `${objvUserPrjGrantEN.prjId}${objvUserPrjGrantEN.prjName}|${objvUserPrjGrantEN.roleName}|${objvUserPrjGrantEN.lastVisitedDateSim}|${objvUserPrjGrantEN.visitedNum}`;
      //sbHtml.AppendFormat("<asp:LinkButton ID=\"lbSwitchPrj{0}\" onClick = \"lbSwitchPrj_Click\" CommandArgument=\"{0}\" runat=\"server\">{1}|{2}|{3}|{4}</asp:LinkButton>",
      //    objvUserPrjGrantEN.mId, objvUserPrjGrantEN.prjName);
      //sbHtml.AppendFormat("<a id=\"lbSwitchPrj{0}\" href=\"javascript:SwitchPrj('SwitchPrj_Click', '{0}')\">{1}{2}|{3}|{4}|{5}</a>",
      //    objvUserPrjGrantEN.mId, objvUserPrjGrantEN.prjId, objvUserPrjGrantEN.prjName, objvUserPrjGrantEN.roleName,
      //    objvUserPrjGrantEN.lastVisitedDate, objvUserPrjGrantEN.visitedNum);
      li1.appendChild(a1);
      ul1.appendChild(li1);
    }
    ulPrjList.appendChild(ul1);
  }
  public static async PageLoad() {
    let strUserId = '';
    let strCurrUserRoleId;
    let strCmPrjId;
    try {
      //objUserLoginInfo = {
      //    userId: "pyf",
      //    roleId: "00050001",
      //    roleName: "管理员",
      //    CurrSelPrjId: "0005",
      //    CurrSelPrjName : "自动生成代码",
      //    CurrDataBaseTypeId: "11",
      //    prjDataBaseName: "11",
      //    applicationTypeId: 0,
      //    CurrPrjDataBaseId:"11",
      //    UserName:"PYF",
      //}
      clsPrivateSessionStorage.currPrjId = strCurrPrjId;

      strCmPrjId = await UserDefaValue_LocalEx_getUserDefaValue(
        strCurrPrjId,
        clsPrivateSessionStorage.currSelPrjId,
        clsPubLocalStorage.userId,
        '默认CM工程',
      );
      if (IsNullOrEmpty(strCmPrjId) || strCmPrjId == '0') {
        strCmPrjId = await CMProjectEx_AddDefaCmProject(
          clsPrivateSessionStorage.currSelPrjId,
          clsPrivateSessionStorage.currSelPrjName,
          clsPubLocalStorage.userId,
        );
        if (IsNullOrEmpty(strCmPrjId) == false) {
          await UserDefaValue_LocalEx_setUserDefaValue(
            strCurrPrjId,
            clsPrivateSessionStorage.currSelPrjId,
            clsPubLocalStorage.userId,
            '默认CM工程',
            strCmPrjId,
          );
        } else {
          const strMsg = Format(
            '在工程:[{0}({1})]新建Cm默认工程不成功，请检查!',
            clsPrivateSessionStorage.currSelPrjName,
            clsPrivateSessionStorage.currSelPrjId,
          );
          console.error(strMsg);
          alert(strMsg);
          return;
        }
      }
      clsPrivateSessionStorage.cmPrjId = strCmPrjId;
      const strCmPrjName = await CMProject_GetNameByCmPrjIdCache(strCmPrjId);
      clsPrivateSessionStorage.cmPrjName = strCmPrjName;
      console.log('cmPrjId:', strCmPrjId);

      strUserId = clsPubLocalStorage.userId;
      console.log(strUserId);
      //const strCondition = `userId='${strUserId}'`;
      //const strCondition_PrjId = `prjId='${clsPrivateSessionStorage.currSelPrjId}'`;

      strCurrUserRoleId = clsPubLocalStorage.roleId; // clsPubconst. "00000001";
    } catch (e: any) {
      const strMsg = `获取用户登录信息出错,${e}.`;
      alert(strMsg);
      return;
    }
    try {
      this.BindUserPrj(strUserId);
    } catch (e: any) {
      const strMsg = `绑定用户的所属工程出错！${e}.`;
      alert(strMsg);
      return;
    }
    try {
      this.SetUserState();
    } catch (e: any) {
      const strMsg = `设置用户状态出错！${e}.`;
      alert(strMsg);
      return;
    }
    try {
      //string strHtml;     //需要插入的HTML代码

      //const UlParent: HTMLUListElement = $('#ulPARENT') as HTMLUListElement;
      const UlParent: HTMLUListElement = document.getElementById('ulPARENT') as HTMLUListElement;

      await this.BindRoleMenuByMenuSet(strCurrPrjId, strCurrUserRoleId, '0028', UlParent);

      await CMProjectEx_BindDdl_CmPrjIdInDivCache(
        MainIndex.divMainIndex,
        'ddlCmPrjId',
        clsPrivateSessionStorage.currSelPrjId,
      );
      this.cmPrjId = strCmPrjId;
      //clsGeneMenuBLEx.BindRoleMenu(strCurrPrjId, strCurrUserRoleId, UlParent);
      ////6、把菜单HTML菜单串显示到界面上。
      await MainIndex.SetEventFunc();
    } catch (e: any) {
      const strMsg = `绑定角色菜单出错！${e}.(in MainIndex.PageLoad)`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /**
   *  函数功能:设置事件函数
   */
  public static async SetEventFunc() {
    const strThisFuncName = this.SetEventFunc.name;
    // 在此处放置用户代码以初始化页面
    try {
      const ddlCmPrjId: HTMLSelectElement = GetSelectObjInDivObj(
        MainIndex.divMainIndex,
        'ddlCmPrjId',
      );
      ddlCmPrjId.addEventListener('change', (e) => {
        console.log(e);
        this.ddlCmPrjId_SelectedIndexChanged();
      });
    } catch (e: any) {
      const strMsg = `设置事件函数不成功,${e}.(in ${this.constructor.name}.${strThisFuncName})`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /**
   *  函数功能:系统生成的Change事件函数
   */
  public static async ddlCmPrjId_SelectedIndexChanged() {
    // const ddlCmPrjId: HTMLSelectElement = GetSelectObjInDivObj(this.divName4MainIndex, 'ddlCmPrjId');
    const strCmPrjId = this.cmPrjId;
    console.log('strCmPrjId in MainIndex', strCmPrjId);
    clsPrivateSessionStorage.cmPrjId = strCmPrjId;
    const strCmPrjName = await CMProject_GetNameByCmPrjIdCache(strCmPrjId);
    clsPrivateSessionStorage.cmPrjName = strCmPrjName;

    console.log('clsPrivateSessionStorage.cmPrjId', clsPrivateSessionStorage.cmPrjId);
    await UserDefaValue_LocalEx_setUserDefaValue(
      strCurrPrjId,
      clsPrivateSessionStorage.currSelPrjId,
      clsPubLocalStorage.userId,
      '默认CM工程',
      strCmPrjId,
    );
  }
  public static async SetUserState() {
    try {
      //const objUserLoginInfo = clsPubSessionStorage.UserLoginInfo;
      // const strUserId = clsPubLocalStorage.userId;

      $('#lblUserName').html(clsPubLocalStorage.userName);
      $('#lblRoleName').html(clsPubLocalStorage.roleName);
      const objUserDefaPrjDataBaseEN = await UserDefaPrjDataBaseEx_GetObjByPrjIdAndUserId(
        clsPrivateSessionStorage.currSelPrjId,
        clsPubLocalStorage.userId,
      );
      if (objUserDefaPrjDataBaseEN != null) {
        const strPrjDataBaseName = await PrjDataBase_GetNameByPrjDataBaseIdCache(
          objUserDefaPrjDataBaseEN.prjDataBaseId,
        );
        $('#lblCurrProject').html(
          `${clsPrivateSessionStorage.currSelPrjId}${clsPrivateSessionStorage.currSelPrjName}(${objUserDefaPrjDataBaseEN.prjDataBaseId}${strPrjDataBaseName}`,
        );
      } else {
        $('#lblCurrProject').html(
          `${clsPrivateSessionStorage.currSelPrjId}${clsPrivateSessionStorage.currSelPrjName}(${clsPrivateSessionStorage.currPrjDataBaseId}${clsPrivateSessionStorage.prjDataBaseName}`,
        );
      }
    } catch (objException: any) {
      const strMsg = `设置用户状态出错！(${objException})`;
      throw strMsg;
    }
  }
  public static async BindRoleMenu(
    strCurrPrjId: string,
    strCurrUserRoleId: string,
    UlRoot: HTMLUListElement,
  ) {
    // const arrList: Array<string> = new Array<string>();
    let arrPrjUpMenu: Array<clsQxRoleMenusENEx> = [];
    try {
      //获取顶层菜单
      arrPrjUpMenu = await vQxRoleMenusEx_GetUpMenuObjList2(strCurrUserRoleId, strCurrPrjId);
    } catch (e: any) {
      const strMsg = `${e}`;
      throw strMsg;
    }
    let arrPrjSubMenu: Array<clsQxRoleMenusENEx> = [];
    try {
      //获取子菜单
      arrPrjSubMenu = await QxRoleMenusEx_GetSubMenuObjList2(strCurrUserRoleId, strCurrPrjId);
    } catch (e: any) {
      const strMsg = `${e}`;
      throw strMsg;
    }
    if (arrPrjUpMenu.length == 0) {
      const strMsg = `获取的上级菜单数为0.当前角色Id:${strCurrUserRoleId},当前工程Id:${strCurrPrjId}`;
      throw strMsg;
    }
    if (arrPrjSubMenu.length == 0) {
      const strMsg = `获取的下级菜单数为0.当前角色Id:${strCurrUserRoleId},当前工程Id:${strCurrPrjId}`;
      throw strMsg;
    }

    const LiHeader: HTMLLIElement = document.createElement('li');
    LiHeader.classList.add('menu-header');
    LiHeader.classList.add('menu-item');
    LiHeader.innerText = '主菜单';
    UlRoot.appendChild(LiHeader);
    for (const objMainMenuRow of arrPrjUpMenu) {
      if (objMainMenuRow.inUse == false) continue;
      const Li1: HTMLLIElement = document.createElement('li');

      Li1.classList.add('menu-item');
      //Li1.innerText = "主菜单";
      const A1: HTMLAnchorElement = document.createElement('a');
      A1.href = '';
      const I1: HTMLElement = document.createElement('i');
      const Span1: HTMLSpanElement = document.createElement('span');
      Span1.innerText = objMainMenuRow.menuName;
      I1.classList.add('icon-font');
      I1.classList.add('icon-right');
      A1.appendChild(I1);
      A1.appendChild(Span1);
      Li1.appendChild(A1);

      const Ul1: HTMLUListElement = document.createElement('ul');
      Ul1.classList.add('menu-item-child');
      Ul1.style.display = 'none';

      this.BindSubMenu(arrPrjSubMenu, objMainMenuRow.menuId, Ul1);
      Li1.appendChild(Ul1);

      UlRoot.appendChild(Li1);
    }

    //6、把菜单HTML菜单串显示到界面上。
    //return strHtml.ToString();
  }

  public static async BindRoleMenuByMenuSet(
    strCurrPrjId: string,
    strCurrUserRoleId: string,
    strMenuSetId: string,
    UlRoot: HTMLUListElement,
  ) {
    // const arrList: Array<string> = new Array<string>();
    //获取顶层菜单
    const arrPrjUpMenu: Array<clsQxRoleMenusENEx> = await QxRoleMenusEx_GetUpMenuObjList3(
      strCurrUserRoleId,
      strCurrPrjId,
      strMenuSetId,
    );
    //获取子菜单
    const arrPrjSubMenu: Array<clsQxRoleMenusENEx> = await QxRoleMenusEx_GetSubMenuObjList3(
      strCurrUserRoleId,
      strCurrPrjId,
      strMenuSetId,
    );

    const LiHeader: HTMLLIElement = document.createElement('li');
    LiHeader.classList.add('menu-header');
    LiHeader.classList.add('menu-item');
    LiHeader.innerText = '主菜单';
    UlRoot.appendChild(LiHeader);
    for (const objMainMenuRow of arrPrjUpMenu) {
      if (objMainMenuRow.inUse == false) continue;
      const Li1: HTMLLIElement = document.createElement('li');

      Li1.classList.add('menu-item');
      //Li1.innerText = "主菜单";
      const A1: HTMLAnchorElement = document.createElement('a');
      A1.href = '';
      const I1: HTMLElement = document.createElement('i');
      const Span1: HTMLSpanElement = document.createElement('span');
      Span1.innerText = objMainMenuRow.menuName;
      I1.classList.add('icon-font');
      I1.classList.add('icon-right');
      A1.appendChild(I1);
      A1.appendChild(Span1);
      Li1.appendChild(A1);

      //strHtml.AppendFormat("\n<li class=\"menu-item\">\n");
      //strHtml.AppendFormat("<a href=\"\"><i class=\"icon-font\"></i><span>{0}</span><i class=\"icon-font icon-right\"></i></a>\n", objMainMenuRow.menuName);
      ////strHtml.AppendFormat("<i class=\"icon-font\"></i><span>{0}</span><i class=\"icon-font icon-right\"></i>\n", objMainMenuRow.menuName);

      const Ul1: HTMLUListElement = document.createElement('ul');
      Ul1.classList.add('menu-item-child');
      Ul1.style.display = 'none';
      //strHtml.AppendFormat("<ul  class=\"menu-item-child\" style=\"display: none\">\n");

      this.BindSubMenu(arrPrjSubMenu, objMainMenuRow.menuId, Ul1);
      Li1.appendChild(Ul1);
      //strHtml.Append("</ul>\n");

      //strHtml.Append("</li>\n");

      UlRoot.appendChild(Li1);
    }

    //6、把菜单HTML菜单串显示到界面上。
    //return strHtml.ToString();
  }

  private static BindSubMenu(
    arrSubMenu: Array<clsQxRoleMenusENEx>,
    strUpMenuId: string,
    Ul1: HTMLUListElement,
  ) {
    // let intSubMenuRow = 0;
    for (const objSubMenuRow of arrSubMenu) {
      if (objSubMenuRow.inUse == false) continue;
      if (strUpMenuId != objSubMenuRow.upMenuId) continue;
      // intSubMenuRow++;
      if (objSubMenuRow.isLeafNode == true) {
        //叶子结点
        const Li1: HTMLLIElement = document.createElement('li');
        const A1: HTMLAnchorElement = document.createElement('a');
        const I1: HTMLElement = document.createElement('i');
        const Span1: HTMLSpanElement = document.createElement('span');
        Span1.innerText = objSubMenuRow.menuName;
        I1.className = 'icon-font';
        let strHref = `../${objSubMenuRow.linkFile}`;
        if (objSubMenuRow.pageDispModeId == '02') {
          strHref = 'javascript:void(0)';
          let strOnclick = Format("javascript:window.open('../{0}')", objSubMenuRow.linkFile);
          strOnclick = strOnclick.replace('//', '/');
          A1.setAttribute('onclick', strOnclick);
        }

        strHref = strHref.replace('//', '/');
        A1.href = strHref;
        A1.appendChild(I1);
        A1.appendChild(Span1);
        Li1.appendChild(A1);
        //strHtml.Append("<li>\n");
        //strHtml.AppendFormat("<a href=\"\"><i class=\"icon-font\"></i><span>{1}</span></a>\n",
        //    objSubMenuRow.linkFile, objSubMenuRow.menuName);
        //strHtml.Append("</li>\n");
        Ul1.appendChild(Li1);
      }
    }
  }
  public static lbLogout_Click() {
    Redirect('/index/login');
  }

  public static imgRefresh_Click() {
    //clsPubFun4Web.Refresh();
  }
  public static async SelectRecord(lngmId: number) {
    try {
      const objUserLoginInfo = await UserPrjGrantEx_GetUserLoginInfoAsync(lngmId);
      if (objUserLoginInfo != null) {
        //const objUserLoginInfo: stuUserLoginInfo = <stuUserLoginInfo>jsonData;
        clsPrivateSessionStorage.currSelPrjId = objUserLoginInfo.currSelPrjId;
        clsPrivateSessionStorage.currSelPrjName = objUserLoginInfo.currSelPrjName;

        clsPrivateSessionStorage.currPrjDataBaseId = objUserLoginInfo.currPrjDataBaseId;
        clsPrivateSessionStorage.prjDataBaseName = objUserLoginInfo.prjDataBaseName;
        clsPubSessionStorage.currDataBaseTypeId = objUserLoginInfo.currDataBaseTypeId;

        clsPubLocalStorage.roleId = objUserLoginInfo.roleId;
        clsPubLocalStorage.roleName = objUserLoginInfo.roleName;

        clsPubLocalStorage.userId = objUserLoginInfo.userId;
        clsPubLocalStorage.userName = objUserLoginInfo.userName;

        // const strJson = JSON.stringify(objUserLoginInfo);

        //const bolIsSuccess = this.SetSessionAsync("objUserLoginInfo", strJson);
        //this.GetDataFromUserPrjGrantClass(objUserPrjGrantEN);

        //alert("完成SelectRecord!");
        //                    Redirect("/Index/Main");
        // Redirect('/FrameAdmin/MainIndex1');
      }
    } catch (e: any) {
      console.error(e);
      const strMsg = `根据关键字获取相应的记录的对象不成功,${e}.`;
      alert(strMsg);
    }
  }

  /**
   * cmPrjId (Used In CombineCondition())
   */
  public static get cmPrjId(): string {
    const strValue = GetSelectValueInDivObj(MainIndex.divMainIndex, 'ddlCmPrjId');
    if (strValue == undefined) return '';
    else if (strValue == '0') return '';
    else return strValue;
  }

  /**
   * cmPrjId (Used In CombineCondition())
   */
  public static set cmPrjId(value: string) {
    const objDiv = MainIndex.divMainIndex;
    CheckControlExistInDivObj(MainIndex.divMainIndex, 'select', 'ddlCmPrjId');
    const strId = 'ddlCmPrjId';
    SetSelectValueByIdInDivObj(objDiv, strId, value);
  }
}
