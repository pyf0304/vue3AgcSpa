/*
 * 功能:为Web提供一些几个公共的功能函数
 * 版本:2019-08-07-01
 * 作者:潘以锋
 * */

import { clsPrivateSessionStorage } from '../PubConfig/clsPrivateSessionStorage';
import { viewId_Main } from '@/views/PrjInterface/ViewInfo_AllPropVueShare';
import { IsNullOrEmpty } from '@/ts/PubFun/clsString';

// declare const document: any;

export class clsPubVar4Web {
  public static SortFun() {}
  /*
   * 重新转向本项目新的Url地址
   */
  public static GetRegionId(strViewId: string, strRegionTypeId: string): number {
    console.log(strViewId, strRegionTypeId);
    return 0;
  }
  public static async GetTabId(qsTabId: string) {
    if (IsNullOrEmpty(qsTabId) == false) {
      return qsTabId;
    } else {
      return '';
    }
  }

  public static async GetViewId(qsViewId: string) {
    if (IsNullOrEmpty(qsViewId) == false) {
      if (viewId_Main.value != qsViewId) {
        viewId_Main.value = qsViewId;
        //    const strTabName = await vPrjTab_SimEx_GetNameByTabIdCache(qsViewId, clsPrivateSessionStorage.cmPrjId);
        //    clsPrivateSessionStorage.tabName = strTabName;
      }
      return qsViewId;
    } else {
      if (IsNullOrEmpty(viewId_Main.value) == true) {
        console.error('在获取[viewId]时，值为空！');
      }
      return viewId_Main.value;
    }
  }
  public static async SetTabId(strTabId: string) {
    if (IsNullOrEmpty(strTabId) == false) {
      if (clsPrivateSessionStorage.tabId_Main != strTabId) {
        clsPrivateSessionStorage.tabId_Main = strTabId;
      }
    }
  }
}
export function GetLst_TabCacheAdditionCondition() {
  const arrTabCacheAdditionCondition = [
    {
      tabName: 'vFieldTab_Sim',
      cacheAdditionCondition: 'FldId in (select fldid from prjtabfld)',
    },
    {
      tabName: 'vPrjTab_Sim',
      cacheAdditionCondition: "TabStateId='01'",
    },
  ];
  return arrTabCacheAdditionCondition;
}
