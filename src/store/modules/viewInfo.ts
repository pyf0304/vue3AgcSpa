import { defineStore } from 'pinia';

import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import {
  ViewInfo_GetObjByViewIdAsync,
  ViewInfo_GetObjLstAsync,
} from '@/ts/L3ForWApi/PrjInterface/clsViewInfoWApi';
import { clsViewInfo } from '@/ts/L0Entity/PrjInterface/clsViewInfo';
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { Format } from '@/ts/PubFun/clsString';
import { clsViewInfoEN } from '@/ts/L0Entity/PrjInterface/clsViewInfoEN';
import { ViewRegionRelaEx_GetViewIdLstByRegionIdCache1 } from '@/ts/L3ForWApiEx/RegionManage/clsViewRegionRelaExWApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';

export function ViewInfoEx_CopyTo(objViewInfoENS: clsViewInfoEN): clsViewInfo {
  const strThisFuncName = ViewInfoEx_CopyTo.name;
  const objViewInfoENT = new clsViewInfo();
  try {
    ObjectAssign(objViewInfoENT, objViewInfoENS);
    return objViewInfoENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      'useViewInfoStore',
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objViewInfoENT;
  }
}

export function ViewInfoEx_CopyToEN(objViewInfoENS: clsViewInfo): clsViewInfoEN {
  const strThisFuncName = ViewInfoEx_CopyTo.name;
  const objViewInfoENT = new clsViewInfoEN();
  try {
    ObjectAssign(objViewInfoENT, objViewInfoENS);
    return objViewInfoENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      'useViewInfoStore',
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objViewInfoENT;
  }
}
// import { viewInfo_GetObjByDnFuncMapIdAsync } from '@/ts/L3ForWApi/AIModule/clsviewInfoWApi';
// export interface userSimEN {
//   userId: string;
//   userName: string;
// }
// 定义 TabsState
export interface viewInfoState {
  viewInfoLst: clsViewInfo[];
  tabIdFldIdLst: string[];
  tabIdLst: string[];
}
// import { SET1_TEXT } from './mutations';

// 定义 ModuleA mutations
export const useviewInfoStore = defineStore({
  id: 'viewInfo',

  state(): viewInfoState {
    return {
      viewInfoLst: [],
      tabIdFldIdLst: [],
      tabIdLst: [],
    };
  },

  actions: {
    async getObj(strViewId: string): Promise<clsViewInfo | null> {
      const objviewInfo = this.viewInfoLst.find((x) => x.viewId === strViewId);
      if (objviewInfo != null) return objviewInfo;
      const objviewInfoEN = await ViewInfo_GetObjByViewIdAsync(strViewId);
      if (objviewInfoEN == null) return null;
      const objviewInfo1 = ViewInfoEx_CopyTo(objviewInfoEN);
      this.viewInfoLst.push(objviewInfo1);
      return objviewInfo1;
    },
    async getObjEN(strViewId: string): Promise<clsViewInfoEN | null> {
      const objviewInfo = this.viewInfoLst.find((x) => x.viewId === strViewId);
      if (objviewInfo != null) return ViewInfoEx_CopyToEN(objviewInfo);
      const objviewInfoEN = await ViewInfo_GetObjByViewIdAsync(strViewId);
      if (objviewInfoEN == null) return null;
      const objviewInfo1 = ViewInfoEx_CopyTo(objviewInfoEN);
      this.viewInfoLst.push(objviewInfo1);
      return ViewInfoEx_CopyToEN(objviewInfo1);
    },
    delObj(strViewId: string): boolean {
      if (strViewId == null) return true;
      if (strViewId == '') return true;
      const intIndex = this.viewInfoLst.findIndex((x) => x.viewId === strViewId);
      this.viewInfoLst = this.viewInfoLst.filter((item) => item.viewId !== strViewId);

      if (intIndex > -1) {
        console.log(`界面Id:${strViewId}在界面列表中已经移除！`);
        return true;
      }
      {
        console.error(`界面Id:${strViewId}在界面列表中不存在！`);
        return false;
      }
    },
    async delObjByRegionId(strRegionId: string): Promise<boolean> {
      if (strRegionId == null) return true;
      if (strRegionId == '') return true;
      const arrViewId = await ViewRegionRelaEx_GetViewIdLstByRegionIdCache1(
        strRegionId,
        clsPrivateSessionStorage.cmPrjId,
      );
      const intIndex = this.viewInfoLst.findIndex((x) => arrViewId.indexOf(x.viewId) === -1);
      this.viewInfoLst = this.viewInfoLst.filter((item) => arrViewId.indexOf(item.viewId) == -1);

      if (intIndex > -1) {
        console.log(`区域Id:${strRegionId}在区域列表中已经移除！`);
        return true;
      }
      {
        console.error(`区域Id:${strRegionId}在区域相关界面中不存在！`);
        return false;
      }
    },
    async getName(strViewId: string): Promise<string> {
      const objviewInfo = this.viewInfoLst.find((x) => x.viewId === strViewId);
      if (objviewInfo != null) return objviewInfo.viewName;
      const objviewInfoEN = await ViewInfo_GetObjByViewIdAsync(strViewId);
      if (objviewInfoEN == null) return '';
      const objviewInfo1 = ViewInfoEx_CopyTo(objviewInfoEN);
      this.viewInfoLst.push(objviewInfo1);
      return objviewInfo1.viewName;
    },
    async getPrjId(strViewId: string): Promise<string> {
      const objviewInfo = this.viewInfoLst.find((x) => x.viewId === strViewId);
      if (objviewInfo != null) return objviewInfo.prjId;
      const objviewInfoEN = await ViewInfo_GetObjByViewIdAsync(strViewId);
      if (objviewInfoEN == null) return '';
      const objviewInfo1 = ViewInfoEx_CopyTo(objviewInfoEN);
      this.viewInfoLst.push(objviewInfo1);
      return objviewInfo1.prjId;
    },
    async getKeyIdLstByName(
      strPrjId: string,
      strViewName: string,
      strComparisonOp: enumComparisonOp,
    ): Promise<Array<string>> {
      let arrviewInfo;
      let strWhere = '';
      switch (strComparisonOp) {
        case enumComparisonOp.Like_03:
          arrviewInfo = this.viewInfoLst.filter(
            (x) => x.prjId == strPrjId && x.viewName.indexOf(strViewName) > -1,
          );
          strWhere = `${clsViewInfo.con_PrjId} = '${strPrjId}' and ${clsViewInfo.con_ViewName} like '%${strViewName}%' `;
          break;
        case enumComparisonOp.Equal_01:
          arrviewInfo = this.viewInfoLst.filter(
            (x) => x.prjId == strPrjId && x.viewName === strViewName,
          );
          strWhere = `${clsViewInfo.con_PrjId} = '${strPrjId}' and ${clsViewInfo.con_ViewName} = '${strViewName}' `;
          break;
      }
      if (arrviewInfo.length > 0) return arrviewInfo.map((x) => x.viewId);

      const arrviewInfoEN = await ViewInfo_GetObjLstAsync(strWhere);
      if (arrviewInfoEN.length == 0) return [];
      const arrviewInfo1 = arrviewInfoEN.map(ViewInfoEx_CopyTo);
      arrviewInfo1.forEach((x) => {
        this.viewInfoLst.push(x);
      });

      return arrviewInfo1.map((x) => x.viewId);
    },

    ReFreshByPrjId(strPrjId: string): boolean {
      const arrviewInfo = this.viewInfoLst.filter((x) => x.prjId !== strPrjId);
      this.viewInfoLst = arrviewInfo;
      this.tabIdFldIdLst = [];

      this.tabIdLst = [];
      return true;
    },
  },
});

// export const viewInfoStore = useviewInfoStore();
