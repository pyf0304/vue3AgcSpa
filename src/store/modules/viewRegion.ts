import { defineStore } from 'pinia';

import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';

import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { Format } from '@/ts/PubFun/clsString';

import { clsViewRegion } from '@/ts/L0Entity/RegionManage/clsViewRegion';
import { clsViewRegionEN } from '@/ts/L0Entity/RegionManage/clsViewRegionEN';
import {
  ViewRegion_GetObjByRegionIdAsync,
  ViewRegion_GetObjLstAsync,
} from '@/ts/L3ForWApi/RegionManage/clsViewRegionWApi';
import { ViewRegionEx_GetRegionIdLstByPrjId } from '@/ts/L3ForWApiEx/RegionManage/clsViewRegionExWApi';

export function ViewRegionEx_CopyTo(objViewRegionENS: clsViewRegionEN): clsViewRegion {
  const strThisFuncName = ViewRegionEx_CopyTo.name;
  const objViewRegionENT = new clsViewRegion();
  try {
    ObjectAssign(objViewRegionENT, objViewRegionENS);
    return objViewRegionENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      'useViewRegionStore',
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objViewRegionENT;
  }
}

export function ViewRegionEx_CopyToEN(objViewRegionENS: clsViewRegion): clsViewRegionEN {
  const strThisFuncName = ViewRegionEx_CopyTo.name;
  const objViewRegionENT = new clsViewRegionEN();
  try {
    ObjectAssign(objViewRegionENT, objViewRegionENS);
    return objViewRegionENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      'useViewRegionStore',
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objViewRegionENT;
  }
}
// import { viewRegion_GetObjByDnFuncMapIdAsync } from '@/ts/L3ForWApi/AIModule/clsviewRegionWApi';
// export interface userSimEN {
//   userId: string;
//   userName: string;
// }
// 定义 TabsState
export interface viewRegionState {
  viewRegionLst: clsViewRegion[];
  tabIdFldIdLst: string[];
  tabIdLst: string[];
}
// import { SET1_TEXT } from './mutations';

// 定义 ModuleA mutations
export const useviewRegionStore = defineStore({
  id: 'viewRegion',

  state(): viewRegionState {
    return {
      viewRegionLst: [],
      tabIdFldIdLst: [],
      tabIdLst: [],
    };
  },

  actions: {
    async getObj(strRegionId: string): Promise<clsViewRegion | null> {
      const objviewRegion = this.viewRegionLst.find((x) => x.regionId === strRegionId);
      if (objviewRegion != null) return objviewRegion;
      const objviewRegionEN = await ViewRegion_GetObjByRegionIdAsync(strRegionId);
      if (objviewRegionEN == null) return null;
      const objviewRegion1 = ViewRegionEx_CopyTo(objviewRegionEN);
      this.viewRegionLst.push(objviewRegion1);
      return objviewRegion1;
    },
    async getObjEN(strRegionId: string): Promise<clsViewRegionEN | null> {
      const objviewRegion = this.viewRegionLst.find((x) => x.regionId === strRegionId);
      if (objviewRegion != null) return ViewRegionEx_CopyToEN(objviewRegion);
      const objviewRegionEN = await ViewRegion_GetObjByRegionIdAsync(strRegionId);
      if (objviewRegionEN == null) return null;
      const objviewRegion1 = ViewRegionEx_CopyTo(objviewRegionEN);
      this.viewRegionLst.push(objviewRegion1);
      return ViewRegionEx_CopyToEN(objviewRegion1);
    },
    async getObjENLst(arrRegionId: Array<string>): Promise<Array<clsViewRegionEN>> {
      const arrViewRegion = new Array<clsViewRegionEN>();

      for (const strRegionId of arrRegionId) {
        const objviewRegion = this.viewRegionLst.find((x) => x.regionId === strRegionId);
        if (objviewRegion != null) arrViewRegion.push(ViewRegionEx_CopyToEN(objviewRegion));
        else {
          const objviewRegionEN = await ViewRegion_GetObjByRegionIdAsync(strRegionId);
          if (objviewRegionEN == null) continue;
          const objviewRegion1 = ViewRegionEx_CopyTo(objviewRegionEN);
          this.viewRegionLst.push(objviewRegion1);
          arrViewRegion.push(ViewRegionEx_CopyToEN(objviewRegion1));
        }
      }
      return arrViewRegion;
    },
    delObj(strRegionId: string): boolean {
      if (strRegionId == null) return true;
      if (strRegionId == '') return true;
      const intIndex = this.viewRegionLst.findIndex((x) => x.regionId === strRegionId);
      this.viewRegionLst = this.viewRegionLst.filter((item) => item.regionId !== strRegionId);

      if (intIndex > -1) {
        console.log(`界面Id:${strRegionId}在界面列表中已经移除！`);
        return true;
      }
      {
        console.error(`界面Id:${strRegionId}在界面列表中不存在！`);
        return false;
      }
    },
    async delObjByPrjId(strPrjId: string): Promise<boolean> {
      if (strPrjId == null) return true;
      if (strPrjId == '') return true;
      const arrRegionId = await ViewRegionEx_GetRegionIdLstByPrjId(strPrjId);
      const intIndex = this.viewRegionLst.findIndex((x) => arrRegionId.indexOf(x.regionId) === -1);
      this.viewRegionLst = this.viewRegionLst.filter(
        (item) => arrRegionId.indexOf(item.regionId) == -1,
      );

      if (intIndex > -1) {
        console.log(`PrjId:${strPrjId}在区域列表中已经移除！`);
        return true;
      }
      {
        console.error(`PrjId:${strPrjId}在区域列表中不存在！`);
        return false;
      }
    },
    async getName(strRegionId: string): Promise<string> {
      const objviewRegion = this.viewRegionLst.find((x) => x.regionId === strRegionId);
      if (objviewRegion != null) return objviewRegion.regionName;
      const objviewRegionEN = await ViewRegion_GetObjByRegionIdAsync(strRegionId);
      if (objviewRegionEN == null) return '';
      const objviewRegion1 = ViewRegionEx_CopyTo(objviewRegionEN);
      this.viewRegionLst.push(objviewRegion1);
      return objviewRegion1.regionName;
    },
    async getTabId(strRegionId: string): Promise<string> {
      const objviewRegion = this.viewRegionLst.find((x) => x.regionId === strRegionId);
      if (objviewRegion != null) return objviewRegion.tabId;
      const objviewRegionEN = await ViewRegion_GetObjByRegionIdAsync(strRegionId);
      if (objviewRegionEN == null) return '';
      const objviewRegion1 = ViewRegionEx_CopyTo(objviewRegionEN);
      this.viewRegionLst.push(objviewRegion1);
      return objviewRegion1.tabId;
    },

    async getRegionTypeId(strRegionId: string): Promise<string> {
      const objviewRegion = this.viewRegionLst.find((x) => x.regionId === strRegionId);
      if (objviewRegion != null) return objviewRegion.regionTypeId;
      const objviewRegionEN = await ViewRegion_GetObjByRegionIdAsync(strRegionId);
      if (objviewRegionEN == null) return '';
      const objviewRegion1 = ViewRegionEx_CopyTo(objviewRegionEN);
      this.viewRegionLst.push(objviewRegion1);
      return objviewRegion1.regionTypeId;
    },
    async getFileName(strRegionId: string): Promise<string> {
      const objviewRegion = this.viewRegionLst.find((x) => x.regionId === strRegionId);
      if (objviewRegion != null) return objviewRegion.fileName;
      const objviewRegionEN = await ViewRegion_GetObjByRegionIdAsync(strRegionId);
      if (objviewRegionEN == null) return '';
      const objviewRegion1 = ViewRegionEx_CopyTo(objviewRegionEN);
      this.viewRegionLst.push(objviewRegion1);
      return objviewRegion1.fileName;
    },
    async getContainerTypeId(strRegionId: string): Promise<string> {
      const objviewRegion = this.viewRegionLst.find((x) => x.regionId === strRegionId);
      if (objviewRegion != null) return objviewRegion.containerTypeId;
      const objviewRegionEN = await ViewRegion_GetObjByRegionIdAsync(strRegionId);
      if (objviewRegionEN == null) return '';
      const objviewRegion1 = ViewRegionEx_CopyTo(objviewRegionEN);
      this.viewRegionLst.push(objviewRegion1);
      return objviewRegion1.containerTypeId;
    },
    async getClsName(strRegionId: string): Promise<string> {
      const objviewRegion = this.viewRegionLst.find((x) => x.regionId === strRegionId);
      if (objviewRegion != null) return objviewRegion.clsName;
      const objviewRegionEN = await ViewRegion_GetObjByRegionIdAsync(strRegionId);
      if (objviewRegionEN == null) return '';
      const objviewRegion1 = ViewRegionEx_CopyTo(objviewRegionEN);
      this.viewRegionLst.push(objviewRegion1);
      return objviewRegion1.clsName;
    },
    async getPageDispModeId(strRegionId: string): Promise<string> {
      const objviewRegion = this.viewRegionLst.find((x) => x.regionId === strRegionId);
      if (objviewRegion != null) return objviewRegion.pageDispModeId;
      const objviewRegionEN = await ViewRegion_GetObjByRegionIdAsync(strRegionId);
      if (objviewRegionEN == null) return '';
      const objviewRegion1 = ViewRegionEx_CopyTo(objviewRegionEN);
      this.viewRegionLst.push(objviewRegion1);
      return objviewRegion1.pageDispModeId;
    },

    async getPrjId(strRegionId: string): Promise<string> {
      const objviewRegion = this.viewRegionLst.find((x) => x.regionId === strRegionId);
      if (objviewRegion != null) return objviewRegion.prjId;
      const objviewRegionEN = await ViewRegion_GetObjByRegionIdAsync(strRegionId);
      if (objviewRegionEN == null) return '';
      const objviewRegion1 = ViewRegionEx_CopyTo(objviewRegionEN);
      this.viewRegionLst.push(objviewRegion1);
      return objviewRegion1.prjId;
    },
    async getKeyIdLstByName(
      strPrjId: string,
      strViewName: string,
      strComparisonOp: enumComparisonOp,
    ): Promise<Array<string>> {
      let arrviewRegion;
      let strWhere = '';
      switch (strComparisonOp) {
        case enumComparisonOp.Like_03:
          arrviewRegion = this.viewRegionLst.filter(
            (x) => x.prjId == strPrjId && x.regionName.indexOf(strViewName) > -1,
          );
          strWhere = `${clsViewRegion.con_PrjId} = '${strPrjId}' and ${clsViewRegion.con_RegionName} like '%${strViewName}%' `;
          break;
        case enumComparisonOp.Equal_01:
          arrviewRegion = this.viewRegionLst.filter(
            (x) => x.prjId == strPrjId && x.regionName === strViewName,
          );
          strWhere = `${clsViewRegion.con_PrjId} = '${strPrjId}' and ${clsViewRegion.con_RegionName} = '${strViewName}' `;
          break;
      }
      if (arrviewRegion.length > 0) return arrviewRegion.map((x) => x.regionId);

      const arrviewRegionEN = await ViewRegion_GetObjLstAsync(strWhere);
      if (arrviewRegionEN.length == 0) return [];
      const arrviewRegion1 = arrviewRegionEN.map(ViewRegionEx_CopyTo);
      arrviewRegion1.forEach((x) => {
        this.viewRegionLst.push(x);
      });

      return arrviewRegion1.map((x) => x.regionId);
    },

    ReFreshByPrjId(strPrjId: string): boolean {
      const arrviewRegion = this.viewRegionLst.filter((x) => x.prjId !== strPrjId);
      this.viewRegionLst = arrviewRegion;
      this.tabIdFldIdLst = [];

      this.tabIdLst = [];
      return true;
    },
  },
});

// export const viewRegionStore = useviewRegionStore();
