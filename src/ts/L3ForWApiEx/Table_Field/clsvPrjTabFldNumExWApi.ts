import { vPrjTab_Sim_GetObjLstCache } from '@/ts/L3ForWApi/Table_Field/clsvPrjTab_SimWApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';

export const vPrjTabFldNumEx_Controller = 'vPrjTabFldNumExApi';
export const vPrjTabFldNumEx_ConstructorName = 'vPrjTabFldNumEx';

export async function vPrjTabFldNumEx_GetFldNumByTabId0(strTabId: string, strPrjId: string) {
  const arrvPrjTab_Sim = await vPrjTab_Sim_GetObjLstCache(strPrjId);
  const objvPrjTabFldNum = arrvPrjTab_Sim.find((x) => x.tabId == strTabId);
  if (objvPrjTabFldNum == null) return 0;
  return objvPrjTabFldNum.fldNum;
}

export async function vPrjTabFldNumEx_GetFldNumByTabId(strTabId: string) {
  return vPrjTabFldNumEx_GetFldNumByTabId0(strTabId, clsPrivateSessionStorage.currSelPrjId);
}
