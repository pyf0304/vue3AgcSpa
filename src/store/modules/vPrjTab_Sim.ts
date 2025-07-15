import { defineStore } from 'pinia';

import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { clsvPrjTab_Sim } from '@/ts/L0Entity/Table_Field/clsvPrjTab_Sim';
import {
  vPrjTab_Sim_GetObjByTabIdAsync,
  vPrjTab_Sim_GetObjByTabIdCache,
  vPrjTab_Sim_GetObjLstAsync,
} from '@/ts/L3ForWApi/Table_Field/clsvPrjTab_SimWApi';
import { Format } from '@/ts/PubFun/clsString';
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { clsvPrjTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvPrjTab_SimEN';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';

export function vPrjTab_SimEx_CopyTo(objvPrjTab_SimENS: clsvPrjTab_SimEN): clsvPrjTab_Sim {
  const strThisFuncName = vPrjTab_SimEx_CopyTo.name;
  const objvPrjTab_SimENT = new clsvPrjTab_Sim();
  try {
    ObjectAssign(objvPrjTab_SimENT, objvPrjTab_SimENS);
    return objvPrjTab_SimENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      'usevPrjTab_SimStore',
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objvPrjTab_SimENT;
  }
}

export function vPrjTab_SimEx_CopyToEN(
  objvPrjTab_SimENS: clsvPrjTab_Sim | null,
): clsvPrjTab_SimEN | null {
  const strThisFuncName = vPrjTab_SimEx_CopyToEN.name;
  if (objvPrjTab_SimENS == null) return null;
  const objvPrjTab_SimENT = new clsvPrjTab_SimEN();
  try {
    ObjectAssign(objvPrjTab_SimENT, objvPrjTab_SimENS);
    return objvPrjTab_SimENT;
  } catch (e) {
    const strMsg = Format('(errid:Watl000067)Copy表对象数据出错,{0}.(in {1})', e, strThisFuncName);
    console.error(strMsg);
    alert(strMsg);
    return objvPrjTab_SimENT;
  }
}
// import { vPrjTab_Sim_GetObjByDnFuncMapIdAsync } from '@/ts/L3ForWApi/AIModule/clsvPrjTab_SimWApi';
// export interface userSimEN {
//   userId: string;
//   userName: string;
// }
// 定义 TabsState
export interface vPrjTab_SimState {
  fieldTabLst: clsvPrjTab_Sim[];
  tabIdTabIdLst: string[];
  tabIdLst: string[];
}
// import { SET1_TEXT } from './mutations';

// 定义 ModuleA mutations
export const usevPrjTab_SimStore = defineStore({
  id: 'vPrjTab_Sim',

  state(): vPrjTab_SimState {
    return {
      fieldTabLst: [],
      tabIdTabIdLst: [],
      tabIdLst: [],
    };
  },

  actions: {
    async getObj(strTabId: string): Promise<clsvPrjTab_Sim | null> {
      if (strTabId == null) return null;
      if (strTabId == '') return null;
      const objvPrjTab_Sim = this.fieldTabLst.find((x) => x.tabId === strTabId);
      if (objvPrjTab_Sim != null) return objvPrjTab_Sim;
      const objvPrjTab_SimEN = await vPrjTab_Sim_GetObjByTabIdAsync(strTabId);
      if (objvPrjTab_SimEN == null) return null;
      const objvPrjTab_Sim1 = vPrjTab_SimEx_CopyTo(objvPrjTab_SimEN);
      this.fieldTabLst.push(objvPrjTab_Sim1);
      return objvPrjTab_Sim1;
    },
    async getObjLst(arrTabId: Array<string>): Promise<Array<clsvPrjTab_SimEN>> {
      const arrObjLst = new Array<clsvPrjTab_SimEN>();
      for (const strTabId of arrTabId) {
        const objvPrjTab_Sim = await vPrjTab_Sim_GetObjByTabIdCache(
          strTabId,
          clsPrivateSessionStorage.currSelPrjId,
        );
        const objEN = vPrjTab_SimEx_CopyToEN(objvPrjTab_Sim);
        if (objEN != null) arrObjLst.push(objEN);
      }
      return arrObjLst;
    },
    async getTabNameLst(arrTabId: Array<string>): Promise<Array<string>> {
      const arrTabName = new Array<string>();
      for (const strTabId of arrTabId) {
        const objvPrjTab_Sim = await vPrjTab_Sim_GetObjByTabIdCache(
          strTabId,
          clsPrivateSessionStorage.currSelPrjId,
        );

        if (objvPrjTab_Sim != null) arrTabName.push(objvPrjTab_Sim.tabName);
      }
      return arrTabName;
    },
    async getTabNameLstWithId(arrTabId: Array<string>): Promise<Array<string>> {
      const arrTabName = new Array<string>();
      for (const strTabId of arrTabId) {
        const objvPrjTab_Sim = await vPrjTab_Sim_GetObjByTabIdCache(
          strTabId,
          clsPrivateSessionStorage.currSelPrjId,
        );
        if (objvPrjTab_Sim != null) arrTabName.push(`${objvPrjTab_Sim.tabName}(${strTabId})`);
      }
      return arrTabName;
    },
    delObj(strTabId: string): boolean {
      if (strTabId == null) return true;
      if (strTabId == '') return true;
      const intIndex = this.fieldTabLst.findIndex((x) => x.tabId === strTabId);
      this.fieldTabLst = this.fieldTabLst.filter((item) => item.tabId !== strTabId);

      if (intIndex > -1) {
        console.log(`字段Id:${strTabId}在字段列表中已经移除！`);
        return true;
      }
      {
        console.error(`字段Id:${strTabId}在字段列表中不存在！`);
        return false;
      }
    },
    /**
     * 根据字段名获取对象中某字段的值.
     * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_GetFldValue)
     * @param strTabName:字段名
     * @returns 字段值
     */
    GetFldValue(vPrjTab_Sim: clsvPrjTab_Sim, strTabName: string): any {
      let strMsg = '';
      switch (strTabName) {
        case clsvPrjTab_SimEN.con_TabId:
          return vPrjTab_Sim.tabId;
        case clsvPrjTab_SimEN.con_TabName:
          return vPrjTab_Sim.tabName;

        case clsvPrjTab_SimEN.con_PrjId:
          return vPrjTab_Sim.prjId;

        default:
          strMsg = `字段名:[${strTabName}]在表对象:[vPrjTab_Sim]中不存在!`;
          console.error(strMsg);
          return '';
      }
    },
    async getName(strTabId: string): Promise<string> {
      if (strTabId == null) return '';
      if (strTabId == '') return '';

      const objvPrjTab_Sim = this.fieldTabLst.find((x) => x.tabId === strTabId);
      if (objvPrjTab_Sim != null) return objvPrjTab_Sim.tabName;
      const objvPrjTab_SimEN = await vPrjTab_Sim_GetObjByTabIdAsync(strTabId);
      if (objvPrjTab_SimEN == null) return '';
      const objvPrjTab_Sim1 = vPrjTab_SimEx_CopyTo(objvPrjTab_SimEN);
      this.fieldTabLst.push(objvPrjTab_Sim1);
      return objvPrjTab_Sim1.tabName;
    },

    async getKeyIdByName(strPrjId: string, strTabName: string): Promise<string> {
      const objvPrjTab_Sim = this.fieldTabLst.find(
        (x) => x.prjId == strPrjId && x.tabName === strTabName,
      );
      if (objvPrjTab_Sim != null) return objvPrjTab_Sim.tabId;
      const strWhere = `${clsvPrjTab_Sim.con_PrjId} = '${strPrjId}' and ${clsvPrjTab_Sim.con_TabName} = '${strTabName}' `;
      const arrvPrjTab_SimEN = await vPrjTab_Sim_GetObjLstAsync(strWhere);
      if (arrvPrjTab_SimEN.length == 0) return '';
      const objvPrjTab_Sim1 = vPrjTab_SimEx_CopyTo(arrvPrjTab_SimEN[0]);
      this.fieldTabLst.push(objvPrjTab_Sim1);
      return objvPrjTab_Sim1.tabId;
    },
    async getKeyIdLstByName(
      strPrjId: string,
      strTabName: string,
      strComparisonOp: enumComparisonOp,
    ): Promise<Array<string>> {
      let arrvPrjTab_Sim;
      let strWhere = '';
      switch (strComparisonOp) {
        case enumComparisonOp.Like_03:
          arrvPrjTab_Sim = this.fieldTabLst.filter(
            (x) => x.prjId == strPrjId && x.tabName.indexOf(strTabName) > -1,
          );
          strWhere = `${clsvPrjTab_Sim.con_PrjId} = '${strPrjId}' and ${clsvPrjTab_Sim.con_TabName} like '%${strTabName}%' `;
          break;
        case enumComparisonOp.Equal_01:
          arrvPrjTab_Sim = this.fieldTabLst.filter(
            (x) => x.prjId == strPrjId && x.tabName === strTabName,
          );
          strWhere = `${clsvPrjTab_Sim.con_PrjId} = '${strPrjId}' and ${clsvPrjTab_Sim.con_TabName} = '${strTabName}' `;
          break;
      }
      if (arrvPrjTab_Sim.length > 0) return arrvPrjTab_Sim.map((x) => x.tabId);

      const arrvPrjTab_SimEN = await vPrjTab_Sim_GetObjLstAsync(strWhere);
      if (arrvPrjTab_SimEN.length == 0) return [];
      const arrvPrjTab_Sim1 = arrvPrjTab_SimEN.map(vPrjTab_SimEx_CopyTo);
      arrvPrjTab_Sim1.forEach((x) => {
        this.fieldTabLst.push(x);
      });

      return arrvPrjTab_Sim1.map((x) => x.tabId);
    },

    ReFreshByPrjId(strPrjId: string): boolean {
      const arrvPrjTab_Sim = this.fieldTabLst.filter((x) => x.prjId !== strPrjId);
      this.fieldTabLst = arrvPrjTab_Sim;
      this.tabIdTabIdLst = [];

      this.tabIdLst = [];
      return true;
    },
  },
});

// export const vPrjTab_SimStore = usevPrjTab_SimStore();
