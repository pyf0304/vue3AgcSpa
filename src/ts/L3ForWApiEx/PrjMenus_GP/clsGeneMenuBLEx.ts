/*
 * 功能:生成角色菜单
 * 版本:2019-07-30-01
 * 作者:潘以锋
 * */

import {
  vQxRoleMenusEx_GetSubMenuObjList2,
  vQxRoleMenusEx_GetUpMenuObjList2,
} from './clsvQxRoleMenusEx2WApi';
import { clsQxRoleMenusENEx } from '@/ts/L0Entity/MenuManage_GP/clsQxRoleMenusENEx';
// declare const strWebRoot: string;

export async function GeneMenu_BindRoleMenu(
  strCurrPrjId: string,
  strCurrUserRoleId: string,
  UlRoot: HTMLUListElement,
) {
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
    arrPrjSubMenu = await vQxRoleMenusEx_GetSubMenuObjList2(strCurrUserRoleId, strCurrPrjId);
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

    BindSubMenu(arrPrjSubMenu, objMainMenuRow.menuId, Ul1);
    Li1.appendChild(Ul1);

    UlRoot.appendChild(Li1);
  }
}
function BindSubMenu(
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
      A1.href = `../${objSubMenuRow.linkFile}`;
      A1.appendChild(I1);
      A1.appendChild(Span1);
      Li1.appendChild(A1);

      Ul1.appendChild(Li1);
    }
  }
}
