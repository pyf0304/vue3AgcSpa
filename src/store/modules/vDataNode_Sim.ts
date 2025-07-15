import { defineStore } from 'pinia';
import { clsvDataNode_Sim } from '@/ts/L0Entity/AIModule/clsvDataNode_Sim';
import {
  vDataNode_Sim_GetObjByDataNodeIdAsync,
  vDataNode_Sim_GetObjLstAsync,
} from '@/ts/L3ForWApi/AIModule/clsvDataNode_SimWApi';
import { vDataNode_SimEx_CopyTo } from '@/ts/L3ForWApiEx/AIModule/clsvDataNode_SimExWApi2';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';

// import { vDataNode_Sim_GetObjByDnFuncMapIdAsync } from '@/ts/L3ForWApi/AIModule/clsvDataNode_SimWApi';
// export interface userSimEN {
//   userId: string;
//   userName: string;
// }
// 定义 TabsState
export interface vDataNode_SimState {
  dataNodeLst: clsvDataNode_Sim[];
  tabIdFldIdLst: string[];
  tabIdLst: string[];
}
// import { SET1_TEXT } from './mutations';

// 定义 ModuleA mutations
export const usevDataNode_SimStore = defineStore({
  id: 'vDataNode_Sim',

  state(): vDataNode_SimState {
    return {
      dataNodeLst: [],
      tabIdFldIdLst: [],
      tabIdLst: [],
    };
  },

  actions: {
    async getObj(strDataNodeId: number): Promise<clsvDataNode_Sim | null> {
      const objvDataNode_Sim = this.dataNodeLst.find((x) => x.dataNodeId === strDataNodeId);
      if (objvDataNode_Sim != null) return objvDataNode_Sim;
      const objvDataNode_SimEN = await vDataNode_Sim_GetObjByDataNodeIdAsync(strDataNodeId);
      if (objvDataNode_SimEN == null) return null;
      const objvDataNode_Sim1 = vDataNode_SimEx_CopyTo(objvDataNode_SimEN);
      this.dataNodeLst.push(objvDataNode_Sim1);
      return objvDataNode_Sim1;
    },
    async getName(strDataNodeId: number): Promise<string> {
      const objvDataNode_Sim = this.dataNodeLst.find((x) => x.dataNodeId === strDataNodeId);
      if (objvDataNode_Sim != null) return objvDataNode_Sim.dataNodeName;
      const objvDataNode_SimEN = await vDataNode_Sim_GetObjByDataNodeIdAsync(strDataNodeId);
      if (objvDataNode_SimEN == null) return '';
      const objvDataNode_Sim1 = vDataNode_SimEx_CopyTo(objvDataNode_SimEN);
      this.dataNodeLst.push(objvDataNode_Sim1);
      return objvDataNode_Sim1.dataNodeName;
    },
    async getFldId(strDataNodeId: number): Promise<string> {
      const objvDataNode_Sim = this.dataNodeLst.find((x) => x.dataNodeId === strDataNodeId);
      if (objvDataNode_Sim != null) return objvDataNode_Sim.fldId;
      const objvDataNode_SimEN = await vDataNode_Sim_GetObjByDataNodeIdAsync(strDataNodeId);
      if (objvDataNode_SimEN == null) return '';
      const objvDataNode_Sim1 = vDataNode_SimEx_CopyTo(objvDataNode_SimEN);
      this.dataNodeLst.push(objvDataNode_Sim1);
      return objvDataNode_Sim1.fldId;
    },
    async getTabId(strDataNodeId: number): Promise<string> {
      const objvDataNode_Sim = this.dataNodeLst.find((x) => x.dataNodeId === strDataNodeId);
      if (objvDataNode_Sim != null) return objvDataNode_Sim.tabId;
      const objvDataNode_SimEN = await vDataNode_Sim_GetObjByDataNodeIdAsync(strDataNodeId);
      if (objvDataNode_SimEN == null) return '';
      const objvDataNode_Sim1 = vDataNode_SimEx_CopyTo(objvDataNode_SimEN);
      this.dataNodeLst.push(objvDataNode_Sim1);
      return objvDataNode_Sim1.tabId;
    },
    async getKeyIdByName(strPrjId: string, strDataNodeName: string): Promise<number> {
      const objvDataNode_Sim = this.dataNodeLst.find(
        (x) => x.prjId == strPrjId && x.dataNodeName === strDataNodeName,
      );
      if (objvDataNode_Sim != null) return objvDataNode_Sim.dataNodeId;
      const strWhere = `${clsvDataNode_Sim.con_PrjId} = '${strPrjId}' and ${clsvDataNode_Sim.con_DataNodeName} = '${strDataNodeName}' `;
      const arrvDataNode_SimEN = await vDataNode_Sim_GetObjLstAsync(strWhere);
      if (arrvDataNode_SimEN.length == 0) return 0;
      const objvDataNode_Sim1 = vDataNode_SimEx_CopyTo(arrvDataNode_SimEN[0]);
      this.dataNodeLst.push(objvDataNode_Sim1);
      return objvDataNode_Sim1.dataNodeId;
    },
    async getKeyIdLstByName(
      strPrjId: string,
      strDataNodeName: string,
      strComparisonOp: enumComparisonOp,
    ): Promise<Array<number>> {
      let arrvDataNode_Sim;
      let strWhere = '';
      switch (strComparisonOp) {
        case enumComparisonOp.Like_03:
          arrvDataNode_Sim = this.dataNodeLst.filter(
            (x) => x.prjId == strPrjId && x.dataNodeName.indexOf(strDataNodeName) > -1,
          );
          strWhere = `${clsvDataNode_Sim.con_PrjId} = '${strPrjId}' and ${clsvDataNode_Sim.con_DataNodeName} like '%${strDataNodeName}%' `;
          break;
        case enumComparisonOp.Equal_01:
          arrvDataNode_Sim = this.dataNodeLst.filter(
            (x) => x.prjId == strPrjId && x.dataNodeName === strDataNodeName,
          );
          strWhere = `${clsvDataNode_Sim.con_PrjId} = '${strPrjId}' and ${clsvDataNode_Sim.con_DataNodeName} = '${strDataNodeName}' `;
          break;
      }
      if (arrvDataNode_Sim.length > 0) return arrvDataNode_Sim.map((x) => x.dataNodeId);

      const arrvDataNode_SimEN = await vDataNode_Sim_GetObjLstAsync(strWhere);
      if (arrvDataNode_SimEN.length == 0) return [];
      const arrvDataNode_Sim1 = arrvDataNode_SimEN.map(vDataNode_SimEx_CopyTo);
      arrvDataNode_Sim1.forEach((x) => {
        this.dataNodeLst.push(x);
      });

      return arrvDataNode_Sim1.map((x) => x.dataNodeId);
    },
    async getObjByTabIdFldId(
      strTabId: string,
      strFldId: string,
      intVersionNo: number,
    ): Promise<clsvDataNode_Sim | null> {
      // console.log('TabId-FldId-VersionNo0:', `${strTabId}-${strFldId}-${intVersionNo}`);
      const objvDataNode_Sim = this.dataNodeLst.find(
        (x) => x.tabId === strTabId && x.fldId == strFldId && x.versionNo == intVersionNo,
      );
      if (objvDataNode_Sim != null) return objvDataNode_Sim;
      if (this.tabIdFldIdLst.indexOf(`${strTabId}-${strFldId}`) > -1) return null;
      const strWhere = `${clsvDataNode_Sim.con_TabId} = '${strTabId}' and ${clsvDataNode_Sim.con_FldId} = '${strFldId}' `;
      const arrvDataNode_SimEN = await vDataNode_Sim_GetObjLstAsync(strWhere);

      // console.log('TabId-FldId-VersionNo1:', `${strTabId}-${strFldId}-${intVersionNo}`);
      this.tabIdFldIdLst.push(`${strTabId}-${strFldId}`);
      if (arrvDataNode_SimEN.length == 0) return null;
      const arrvDataNode_Sim1 = arrvDataNode_SimEN.map(vDataNode_SimEx_CopyTo);
      arrvDataNode_Sim1.forEach((x) => {
        this.dataNodeLst.push(x);
      });

      return arrvDataNode_Sim1[0];
    },

    async getObjLstByTabId(strTabId: string): Promise<Array<clsvDataNode_Sim>> {
      // console.log('strTabId0:', strTabId);
      const arrvDataNode_Sim = this.dataNodeLst.filter((x) => x.tabId === strTabId);
      if (arrvDataNode_Sim.length > 0) return arrvDataNode_Sim;
      if (this.tabIdLst.indexOf(strTabId) > -1) return arrvDataNode_Sim;
      const strWhere = `${clsvDataNode_Sim.con_TabId} = '${strTabId}' `;
      const arrvDataNode_SimEN = await vDataNode_Sim_GetObjLstAsync(strWhere);
      console.log('strTabId1:', strTabId);
      this.tabIdLst.push(strTabId);
      if (arrvDataNode_SimEN.length == 0) return arrvDataNode_Sim;
      const arrvDataNode_Sim1 = arrvDataNode_SimEN.map(vDataNode_SimEx_CopyTo);
      arrvDataNode_Sim1.forEach((x) => {
        this.dataNodeLst.push(x);
      });

      return arrvDataNode_Sim1;
    },

    async getDataNodeIdLstByTabId(strTabId: string): Promise<Array<number>> {
      // console.log('strTabId0:', strTabId);
      const arrvDataNode_Sim = this.dataNodeLst.filter((x) => x.tabId === strTabId);
      if (arrvDataNode_Sim.length > 0) return arrvDataNode_Sim.map((x) => x.dataNodeId);
      if (this.tabIdLst.indexOf(strTabId) > -1) return arrvDataNode_Sim.map((x) => x.dataNodeId);
      const strWhere = `${clsvDataNode_Sim.con_TabId} = '${strTabId}' `;
      const arrvDataNode_SimEN = await vDataNode_Sim_GetObjLstAsync(strWhere);
      console.log('strTabId1:', strTabId);
      this.tabIdLst.push(strTabId);
      if (arrvDataNode_SimEN.length == 0) return arrvDataNode_Sim.map((x) => x.dataNodeId);
      const arrvDataNode_Sim1 = arrvDataNode_SimEN.map(vDataNode_SimEx_CopyTo);
      arrvDataNode_Sim1.forEach((x) => {
        this.dataNodeLst.push(x);
      });

      return arrvDataNode_Sim1.map((x) => x.dataNodeId);
    },

    ReFreshByPrjId(strPrjId: string): boolean {
      const arrvDataNode_Sim = this.dataNodeLst.filter((x) => x.prjId !== strPrjId);
      this.dataNodeLst = arrvDataNode_Sim;
      this.tabIdFldIdLst = [];

      this.tabIdLst = [];
      return true;
    },
  },
});

// export const vDataNode_SimStore = usevDataNode_SimStore();
