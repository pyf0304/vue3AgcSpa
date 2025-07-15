import { defineStore } from 'pinia';
import { clsvFunction4Code_Sim } from '@/ts/L0Entity/PrjFunction/clsvFunction4Code_Sim';
import { vFunction4Code_Sim_GetObjByFuncId4CodeAsync } from '@/ts/L3ForWApi/PrjFunction/clsvFunction4Code_SimWApi';
import { vFunction4Code_SimEx_CopyTo } from '@/ts/L3ForWApiEx/PrjFunction/clsvFunction4Code_SimExWApi';

// import { vFunction4Code_Sim_GetObjByFuncId4CodeAsync } from '@/ts/L3ForWApi/AIModule/clsvFunction4Code_SimWApi';
// export interface userSimEN {
//   userId: string;
//   userName: string;
// }
// 定义 TabsState
export interface vFunction4Code_SimState {
  vFunction4Code_SimLst: clsvFunction4Code_Sim[];
}
// import { SET1_TEXT } from './mutations';

// 定义 ModuleA mutations
export const usevFunction4Code_SimStore = defineStore({
  id: 'vFunction4Code_Sim',
  state(): vFunction4Code_SimState {
    return {
      vFunction4Code_SimLst: [],
    };
  },

  actions: {
    async getObj(strFuncId4Code: string): Promise<clsvFunction4Code_Sim | null> {
      const objvFunction4Code_Sim = this.vFunction4Code_SimLst.find(
        (x) => x.funcId4Code === strFuncId4Code,
      );
      if (objvFunction4Code_Sim != null) return objvFunction4Code_Sim;
      const objvFunction4Code_SimEN = await vFunction4Code_Sim_GetObjByFuncId4CodeAsync(
        strFuncId4Code,
      );
      if (objvFunction4Code_SimEN == null) return null;
      const objvFunction4Code_Sim1 = vFunction4Code_SimEx_CopyTo(objvFunction4Code_SimEN);
      this.vFunction4Code_SimLst.push(objvFunction4Code_Sim1);
      return objvFunction4Code_Sim1;
    },
    async getName(strFuncId4Code: string): Promise<string> {
      const objvFunction4Code_Sim = this.vFunction4Code_SimLst.find(
        (x) => x.funcId4Code === strFuncId4Code,
      );
      if (objvFunction4Code_Sim != null) return objvFunction4Code_Sim.funcName4Code;
      const objvFunction4Code_SimEN = await vFunction4Code_Sim_GetObjByFuncId4CodeAsync(
        strFuncId4Code,
      );
      if (objvFunction4Code_SimEN == null) return '';
      const objvFunction4Code_Sim1 = vFunction4Code_SimEx_CopyTo(objvFunction4Code_SimEN);
      this.vFunction4Code_SimLst.push(objvFunction4Code_Sim1);
      return objvFunction4Code_Sim1.funcName4Code;
    },
  },
});

// export const vFunction4Code_SimStore = usevFunction4Code_SimStore();
