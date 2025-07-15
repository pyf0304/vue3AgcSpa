import { defineStore } from 'pinia';
import { clsvDnFuncMap_Sim } from '@/ts/L0Entity/AIModule/clsvDnFuncMap_Sim';
import {
  vDnFuncMap_Sim_GetFirstObjAsync,
  vDnFuncMap_Sim_GetObjByDnFuncMapIdAsync,
  vDnFuncMap_Sim_GetObjLstAsync,
} from '@/ts/L3ForWApi/AIModule/clsvDnFuncMap_SimWApi';
import { vDnFuncMap_SimEx_CopyTo } from '@/ts/L3ForWApiEx/AIModule/clsvDnFuncMap_SimExWApi';
// import { vDnFuncMap_Sim_GetObjByDnFuncMapIdAsync } from '@/ts/L3ForWApi/AIModule/clsvDnFuncMap_SimWApi';
// export interface userSimEN {
//   userId: string;
//   userName: string;
// }
// 定义 TabsState
export interface vDnFuncMap_SimState {
  dnFuncMapLst: clsvDnFuncMap_Sim[];
  inDataNodeIdLst: number[];
  outDataNodeIdLst: number[];
}
// import { SET1_TEXT } from './mutations';

// 定义 ModuleA mutations
export const usevDnFuncMap_SimStore = defineStore({
  id: 'vDnFuncMap_Sim',

  state(): vDnFuncMap_SimState {
    return {
      dnFuncMapLst: [],
      inDataNodeIdLst: [],
      outDataNodeIdLst: [],
    };
  },

  actions: {
    async getObj(strDnFuncMapId: string): Promise<clsvDnFuncMap_Sim | null> {
      const objvDnFuncMap_Sim = this.dnFuncMapLst.find((x) => x.dnFuncMapId === strDnFuncMapId);
      if (objvDnFuncMap_Sim != null) return objvDnFuncMap_Sim;
      const objvDnFuncMap_SimEN = await vDnFuncMap_Sim_GetObjByDnFuncMapIdAsync(strDnFuncMapId);
      if (objvDnFuncMap_SimEN == null) return null;
      const objvDnFuncMap_Sim1 = vDnFuncMap_SimEx_CopyTo(objvDnFuncMap_SimEN);
      this.dnFuncMapLst.push(objvDnFuncMap_Sim1);
      return objvDnFuncMap_Sim1;
    },
    delObj(strDnFuncMapId: string): boolean {
      if (strDnFuncMapId == null) return true;
      if (strDnFuncMapId == '') return true;
      const intIndex = this.dnFuncMapLst.findIndex((x) => x.dnFuncMapId === strDnFuncMapId);
      this.dnFuncMapLst = this.dnFuncMapLst.filter((item) => item.dnFuncMapId !== strDnFuncMapId);

      if (intIndex > -1) {
        console.log(`映射Id:${strDnFuncMapId}在映射列表中已经移除！`);
        return true;
      } else {
        // console.error(`映射Id:${strDnFuncMapId}在映射列表中不存在！`);
        return false;
      }
    },
    async getObjByInOut(
      strInDataNodeId: number,
      strOutDataNodeId: number,
    ): Promise<clsvDnFuncMap_Sim | null> {
      const objvDnFuncMap_Sim = this.dnFuncMapLst.find(
        (x) => x.inDataNodeId === strInDataNodeId && x.outDataNodeId === strOutDataNodeId,
      );
      if (objvDnFuncMap_Sim != null) return objvDnFuncMap_Sim;
      const strWhere = `${clsvDnFuncMap_Sim.con_InDataNodeId} = '${strInDataNodeId}'  and ${clsvDnFuncMap_Sim.con_OutDataNodeId} = '${strOutDataNodeId}'`;
      const objvDnFuncMap_SimEN = await vDnFuncMap_Sim_GetFirstObjAsync(strWhere);
      if (objvDnFuncMap_SimEN == null) return null;
      const objvDnFuncMap_Sim1 = vDnFuncMap_SimEx_CopyTo(objvDnFuncMap_SimEN);
      this.dnFuncMapLst.push(objvDnFuncMap_Sim1);
      return objvDnFuncMap_Sim1;
    },
    async getObjLstByIn(strInDataNodeId: number): Promise<Array<clsvDnFuncMap_Sim>> {
      // console.log('strInDataNodeId0:', strInDataNodeId);
      const arrvDnFuncMap_Sim = this.dnFuncMapLst.filter((x) => x.inDataNodeId === strInDataNodeId);
      if (arrvDnFuncMap_Sim.length > 0) return arrvDnFuncMap_Sim;
      if (this.inDataNodeIdLst.indexOf(strInDataNodeId) > -1) return arrvDnFuncMap_Sim;
      const strWhere = `${clsvDnFuncMap_Sim.con_InDataNodeId} = '${strInDataNodeId}'`;
      const arrvDnFuncMap_SimEN = await vDnFuncMap_Sim_GetObjLstAsync(strWhere);
      console.log('strInDataNodeId1:', strInDataNodeId);
      this.inDataNodeIdLst.push(strInDataNodeId);
      if (arrvDnFuncMap_SimEN.length == 0) return arrvDnFuncMap_Sim;
      const arrvDnFuncMap_Sim1 = arrvDnFuncMap_SimEN.map(vDnFuncMap_SimEx_CopyTo);
      arrvDnFuncMap_Sim1.forEach((x) => {
        this.dnFuncMapLst.push(x);
      });

      return arrvDnFuncMap_Sim1;
    },
    async getObjLstByOut(strOutDataNodeId: number): Promise<Array<clsvDnFuncMap_Sim>> {
      const arrvDnFuncMap_Sim = this.dnFuncMapLst.filter(
        (x) => x.outDataNodeId === strOutDataNodeId,
      );
      if (arrvDnFuncMap_Sim.length > 0) return arrvDnFuncMap_Sim;
      if (this.outDataNodeIdLst.indexOf(strOutDataNodeId) > -1) return arrvDnFuncMap_Sim;
      const strWhere = `${clsvDnFuncMap_Sim.con_OutDataNodeId} = '${strOutDataNodeId}'`;
      const arrvDnFuncMap_SimEN = await vDnFuncMap_Sim_GetObjLstAsync(strWhere);
      this.outDataNodeIdLst.push(strOutDataNodeId);
      if (arrvDnFuncMap_SimEN.length == 0) return arrvDnFuncMap_Sim;
      const arrvDnFuncMap_Sim1 = arrvDnFuncMap_SimEN.map(vDnFuncMap_SimEx_CopyTo);
      arrvDnFuncMap_Sim1.forEach((x) => {
        this.dnFuncMapLst.push(x);
      });

      return arrvDnFuncMap_Sim1;
    },
    ReFreshByPrjId(strPrjId: string): boolean {
      const arrvDnFuncMap_Sim = this.dnFuncMapLst.filter((x) => x.prjId !== strPrjId);
      this.dnFuncMapLst = arrvDnFuncMap_Sim;
      this.outDataNodeIdLst = [];
      this.inDataNodeIdLst = [];

      return true;
    },
  },
});

// export const vDnFuncMap_SimStore = usevDnFuncMap_SimStore();
