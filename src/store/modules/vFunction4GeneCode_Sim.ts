import { defineStore } from 'pinia';
import { clsvFunction4GeneCode_Sim } from '@/ts/L0Entity/PrjFunction/clsvFunction4GeneCode_Sim';

import { vFunction4GeneCode_SimEx_CopyTo } from '@/ts/L3ForWApiEx/PrjFunction/clsvFunction4GeneCode_SimExWApi';
import {
  vFunction4GeneCode_Sim_GetObjByFuncId4GCAsync,
  vFunction4GeneCode_Sim_GetObjLstPureCache,
} from '@/ts/L3ForWApi/PrjFunction/clsvFunction4GeneCode_SimWApi';

// import { vFunction4GeneCode_Sim_GetObjByfuncId4GCAsync } from '@/ts/L3ForWApi/AIModule/clsvFunction4GeneCode_SimWApi';
// export interface userSimEN {
//   userId: string;
//   userName: string;
// }
// 定义 TabsState
export interface vFunction4GeneCode_SimState {
  vFunction4GeneCode_SimLst: clsvFunction4GeneCode_Sim[];
}
// import { SET1_TEXT } from './mutations';

// 定义 ModuleA mutations
export const usevFunction4GeneCode_SimStore = defineStore({
  id: 'vFunction4GeneCode_Sim',
  state(): vFunction4GeneCode_SimState {
    return {
      vFunction4GeneCode_SimLst: [],
    };
  },

  actions: {
    async ensureObjLstCache(): Promise<clsvFunction4GeneCode_Sim[]> {
      if (this.vFunction4GeneCode_SimLst.length > 0) return this.vFunction4GeneCode_SimLst;
      const arrvFunction4GeneCode_SimEN = await vFunction4GeneCode_Sim_GetObjLstPureCache();
      this.vFunction4GeneCode_SimLst = arrvFunction4GeneCode_SimEN.map((x) =>
        vFunction4GeneCode_SimEx_CopyTo(x),
      );
      return this.vFunction4GeneCode_SimLst;
    },
    async getObj(strfuncId4GC: string): Promise<clsvFunction4GeneCode_Sim | null> {
      const objvFunction4GeneCode_Sim = this.vFunction4GeneCode_SimLst.find(
        (x) => x.funcId4GC === strfuncId4GC,
      );
      if (objvFunction4GeneCode_Sim != null) return objvFunction4GeneCode_Sim;
      const objvFunction4GeneCode_SimEN = await vFunction4GeneCode_Sim_GetObjByFuncId4GCAsync(
        strfuncId4GC,
      );
      if (objvFunction4GeneCode_SimEN == null) return null;
      const objvFunction4GeneCode_Sim1 = vFunction4GeneCode_SimEx_CopyTo(
        objvFunction4GeneCode_SimEN,
      );
      this.vFunction4GeneCode_SimLst.push(objvFunction4GeneCode_Sim1);
      return objvFunction4GeneCode_Sim1;
    },
    async getName(strfuncId4GC: string): Promise<string> {
      const objvFunction4GeneCode_Sim = this.vFunction4GeneCode_SimLst.find(
        (x) => x.funcId4GC === strfuncId4GC,
      );
      if (objvFunction4GeneCode_Sim != null) return objvFunction4GeneCode_Sim.funcName;
      const objvFunction4GeneCode_SimEN = await vFunction4GeneCode_Sim_GetObjByFuncId4GCAsync(
        strfuncId4GC,
      );
      if (objvFunction4GeneCode_SimEN == null) return '';
      const objvFunction4GeneCode_Sim1 = vFunction4GeneCode_SimEx_CopyTo(
        objvFunction4GeneCode_SimEN,
      );
      this.vFunction4GeneCode_SimLst.push(objvFunction4GeneCode_Sim1);
      return objvFunction4GeneCode_Sim1.funcName;
    },
  },
});

// export const vFunction4GeneCode_SimStore = usevFunction4GeneCode_SimStore();
