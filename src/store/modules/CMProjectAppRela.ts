import { defineStore } from 'pinia';

import { clsCMProjectAppRela } from '@/ts/L0Entity/CodeMan/clsCMProjectAppRela';
import {
  CMProjectAppRela_GetObjByCMProjectAppRelaIdAsync,
  CMProjectAppRela_GetObjLstAsync,
} from '@/ts/L3ForWApi/CodeMan/clsCMProjectAppRelaWApi';
import { clsCMProjectAppRelaEN } from '@/ts/L0Entity/CodeMan/clsCMProjectAppRelaEN';
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { Format } from '@/ts/PubFun/clsString';
import { useApplicationTypeStore } from '@/store/modules/ApplicationType';
import { useCMProjectStore } from '@/store/modules/CMProject';
export function CMProjectAppRelaEx_CopyTo(
  objCMProjectAppRelaENS: clsCMProjectAppRelaEN,
): clsCMProjectAppRela {
  const objCMProjectAppRelaENT = new clsCMProjectAppRela();
  try {
    ObjectAssign(objCMProjectAppRelaENT, objCMProjectAppRelaENS);
    return objCMProjectAppRelaENT;
  } catch (e: any) {
    const strMsg = Format('(errid:WiTsCs0011)Copy表对象数据出错,${e}.');
    console.error(strMsg);
    alert(strMsg);
    return objCMProjectAppRelaENT;
  }
}

// 定义 TabsState
export interface CMProjectAppRelaState {
  CMProjectAppRelaLst: clsCMProjectAppRela[];
  tabIdFldIdLst: string[];
  tabIdLst: string[];
}
// import { SET1_TEXT } from './mutations';

// 定义 ModuleA mutations
export const useCMProjectAppRelaStore = defineStore({
  id: 'CMProjectAppRela',

  state(): CMProjectAppRelaState {
    return {
      CMProjectAppRelaLst: [],
      tabIdFldIdLst: [],
      tabIdLst: [],
    };
  },

  actions: {
    async getObj(lngCMProjectAppRelaId: number): Promise<clsCMProjectAppRela | null> {
      const objCMProjectAppRela = this.CMProjectAppRelaLst.find(
        (x) => x.cMProjectAppRelaId === lngCMProjectAppRelaId,
      );
      if (objCMProjectAppRela != null) return objCMProjectAppRela;
      const objCMProjectAppRelaEN = await CMProjectAppRela_GetObjByCMProjectAppRelaIdAsync(
        lngCMProjectAppRelaId,
      );
      if (objCMProjectAppRelaEN == null) return null;
      const objCMProjectAppRela1 = CMProjectAppRelaEx_CopyTo(objCMProjectAppRelaEN);
      this.CMProjectAppRelaLst.push(objCMProjectAppRela1);
      return objCMProjectAppRela1;
    },
    async getApplicationTypeName(lngCMProjectAppRelaId: number): Promise<string> {
      const objCMProjectAppRela = this.CMProjectAppRelaLst.find(
        (x) => x.cMProjectAppRelaId === lngCMProjectAppRelaId,
      );
      const applicationTypeStore = useApplicationTypeStore();
      if (objCMProjectAppRela != null) {
        const strApplicationTypeName =
          applicationTypeStore.getApplicationTypeNameByApplicationTypeId(
            objCMProjectAppRela.applicationTypeId,
          );
        return strApplicationTypeName;
      }
      const objCMProjectAppRelaEN = await CMProjectAppRela_GetObjByCMProjectAppRelaIdAsync(
        lngCMProjectAppRelaId,
      );
      if (objCMProjectAppRelaEN == null) return '';
      const objCMProjectAppRela1 = CMProjectAppRelaEx_CopyTo(objCMProjectAppRelaEN);
      this.CMProjectAppRelaLst.push(objCMProjectAppRela1);
      const strApplicationTypeName = applicationTypeStore.getApplicationTypeNameByApplicationTypeId(
        objCMProjectAppRelaEN.applicationTypeId,
      );
      return strApplicationTypeName;
    },
    async getApplicationTypeSimName(lngCMProjectAppRelaId: number): Promise<string> {
      const applicationTypeStore = useApplicationTypeStore();
      const objCMProjectAppRela = this.CMProjectAppRelaLst.find(
        (x) => x.cMProjectAppRelaId === lngCMProjectAppRelaId,
      );
      if (objCMProjectAppRela != null) {
        const strApplicationTypeName =
          applicationTypeStore.getApplicationTypeSimNameByApplicationTypeId(
            objCMProjectAppRela.applicationTypeId,
          );
        return strApplicationTypeName;
      }
      const objCMProjectAppRelaEN = await CMProjectAppRela_GetObjByCMProjectAppRelaIdAsync(
        lngCMProjectAppRelaId,
      );
      if (objCMProjectAppRelaEN == null) return '';
      const objCMProjectAppRela1 = CMProjectAppRelaEx_CopyTo(objCMProjectAppRelaEN);
      this.CMProjectAppRelaLst.push(objCMProjectAppRela1);
      const strApplicationTypeName =
        applicationTypeStore.getApplicationTypeSimNameByApplicationTypeId(
          objCMProjectAppRelaEN.applicationTypeId,
        );
      return strApplicationTypeName;
    },
    async getApplicationTypeId(lngCMProjectAppRelaId: number): Promise<number> {
      const objCMProjectAppRela = this.CMProjectAppRelaLst.find(
        (x) => x.cMProjectAppRelaId === lngCMProjectAppRelaId,
      );
      if (objCMProjectAppRela != null) return objCMProjectAppRela.applicationTypeId;
      const objCMProjectAppRelaEN = await CMProjectAppRela_GetObjByCMProjectAppRelaIdAsync(
        lngCMProjectAppRelaId,
      );
      if (objCMProjectAppRelaEN == null) return 0;
      const objCMProjectAppRela1 = CMProjectAppRelaEx_CopyTo(objCMProjectAppRelaEN);
      this.CMProjectAppRelaLst.push(objCMProjectAppRela1);
      return objCMProjectAppRela1.applicationTypeId;
    },
    async getCmPrjId(lngCMProjectAppRelaId: number): Promise<string> {
      const objCMProjectAppRela = this.CMProjectAppRelaLst.find(
        (x) => x.cMProjectAppRelaId === lngCMProjectAppRelaId,
      );
      if (objCMProjectAppRela != null) return objCMProjectAppRela.cmPrjId;
      const objCMProjectAppRelaEN = await CMProjectAppRela_GetObjByCMProjectAppRelaIdAsync(
        lngCMProjectAppRelaId,
      );
      if (objCMProjectAppRelaEN == null) return '';
      const objCMProjectAppRela1 = CMProjectAppRelaEx_CopyTo(objCMProjectAppRelaEN);
      this.CMProjectAppRelaLst.push(objCMProjectAppRela1);
      return objCMProjectAppRela1.cmPrjId;
    },
    async getCmPrjName(lngCMProjectAppRelaId: number): Promise<string> {
      const cMProjectStore = useCMProjectStore();
      const objCMProjectAppRela = this.CMProjectAppRelaLst.find(
        (x) => x.cMProjectAppRelaId === lngCMProjectAppRelaId,
      );
      if (objCMProjectAppRela != null) {
        const strCmPrjName = cMProjectStore.getCmPrjNameByCmPrjId(objCMProjectAppRela.cmPrjId);
        return strCmPrjName;
      }
      const objCMProjectAppRelaEN = await CMProjectAppRela_GetObjByCMProjectAppRelaIdAsync(
        lngCMProjectAppRelaId,
      );
      if (objCMProjectAppRelaEN == null) return '';
      const objCMProjectAppRela1 = CMProjectAppRelaEx_CopyTo(objCMProjectAppRelaEN);
      this.CMProjectAppRelaLst.push(objCMProjectAppRela1);
      const strCmPrjName = cMProjectStore.getCmPrjNameByCmPrjId(objCMProjectAppRelaEN.cmPrjId);
      return strCmPrjName;
    },
    async getKeyIdByCmPrjIdApplicationTypeId(
      strCmPrjId: string,
      strApplicationTypeId: number,
    ): Promise<number> {
      const objCMProjectAppRela = this.CMProjectAppRelaLst.find(
        (x) => x.cmPrjId == strCmPrjId && x.applicationTypeId === strApplicationTypeId,
      );
      if (objCMProjectAppRela != null) return objCMProjectAppRela.cMProjectAppRelaId;
      const strWhere = `${clsCMProjectAppRela.con_CmPrjId} = '${strCmPrjId}' and ${clsCMProjectAppRela.con_ApplicationTypeId} = ${strApplicationTypeId} `;
      const arrCMProjectAppRelaEN = await CMProjectAppRela_GetObjLstAsync(strWhere);
      if (arrCMProjectAppRelaEN.length == 0) return 0;
      const objCMProjectAppRela1 = CMProjectAppRelaEx_CopyTo(arrCMProjectAppRelaEN[0]);
      this.CMProjectAppRelaLst.push(objCMProjectAppRela1);
      return objCMProjectAppRela1.cMProjectAppRelaId;
    },
    async getObjByCmPrjIdApplicationTypeId(
      strCmPrjId: string,
      strApplicationTypeId: number,
    ): Promise<clsCMProjectAppRela | null> {
      const objCMProjectAppRela = this.CMProjectAppRelaLst.find(
        (x) => x.cmPrjId == strCmPrjId && x.applicationTypeId === strApplicationTypeId,
      );
      if (objCMProjectAppRela != null) return objCMProjectAppRela;
      const strWhere = `${clsCMProjectAppRela.con_CmPrjId} = '${strCmPrjId}' and ${clsCMProjectAppRela.con_ApplicationTypeId} = ${strApplicationTypeId} `;
      const arrCMProjectAppRelaEN = await CMProjectAppRela_GetObjLstAsync(strWhere);
      if (arrCMProjectAppRelaEN.length == 0) return null;
      const objCMProjectAppRela1 = CMProjectAppRelaEx_CopyTo(arrCMProjectAppRelaEN[0]);
      this.CMProjectAppRelaLst.push(objCMProjectAppRela1);
      return objCMProjectAppRela1;
    },
    async getKeyIdLstByCmPrjId(strCmPrjId: string): Promise<Array<number>> {
      let strWhere = '';

      const arrCMProjectAppRela = this.CMProjectAppRelaLst.filter((x) => x.cmPrjId == strCmPrjId);

      if (arrCMProjectAppRela.length > 0)
        return arrCMProjectAppRela.map((x) => x.cMProjectAppRelaId);

      strWhere = `${clsCMProjectAppRela.con_CmPrjId} = '${strCmPrjId}'  `;

      const arrCMProjectAppRelaEN = await CMProjectAppRela_GetObjLstAsync(strWhere);
      if (arrCMProjectAppRelaEN.length == 0) return [];
      const arrCMProjectAppRela1 = arrCMProjectAppRelaEN.map(CMProjectAppRelaEx_CopyTo);
      arrCMProjectAppRela1.forEach((x) => {
        this.CMProjectAppRelaLst.push(x);
      });

      return arrCMProjectAppRela1.map((x) => x.cMProjectAppRelaId);
    },

    async getApplicationTypeIdLstByCmPrjId(strCmPrjId: string): Promise<Array<number>> {
      let strWhere = '';

      const arrCMProjectAppRela = this.CMProjectAppRelaLst.filter((x) => x.cmPrjId == strCmPrjId);

      if (arrCMProjectAppRela.length > 0)
        return arrCMProjectAppRela.map((x) => x.applicationTypeId);

      strWhere = `${clsCMProjectAppRela.con_CmPrjId} = '${strCmPrjId}'  `;

      const arrCMProjectAppRelaEN = await CMProjectAppRela_GetObjLstAsync(strWhere);
      if (arrCMProjectAppRelaEN.length == 0) return [];
      const arrCMProjectAppRela1 = arrCMProjectAppRelaEN.map(CMProjectAppRelaEx_CopyTo);
      arrCMProjectAppRela1.forEach((x) => {
        this.CMProjectAppRelaLst.push(x);
      });

      return arrCMProjectAppRela1.map((x) => x.applicationTypeId);
    },
    async getObjLstByCmPrjId(strCmPrjId: string): Promise<Array<clsCMProjectAppRela>> {
      let strWhere = '';

      const arrCMProjectAppRela = this.CMProjectAppRelaLst.filter((x) => x.cmPrjId == strCmPrjId);

      if (arrCMProjectAppRela.length > 0) return arrCMProjectAppRela;

      strWhere = `${clsCMProjectAppRela.con_CmPrjId} = '${strCmPrjId}'  `;

      const arrCMProjectAppRelaEN = await CMProjectAppRela_GetObjLstAsync(strWhere);
      if (arrCMProjectAppRelaEN.length == 0) return [];
      const arrCMProjectAppRela1 = arrCMProjectAppRelaEN.map(CMProjectAppRelaEx_CopyTo);
      arrCMProjectAppRela1.forEach((x) => {
        this.CMProjectAppRelaLst.push(x);
      });

      return arrCMProjectAppRela1;
    },
    async getKeyIdLstByApplicationTypeId(strApplicationTypeId: number): Promise<Array<number>> {
      let strWhere = '';

      const arrCMProjectAppRela = this.CMProjectAppRelaLst.filter(
        (x) => x.applicationTypeId == strApplicationTypeId,
      );

      if (arrCMProjectAppRela.length > 0)
        return arrCMProjectAppRela.map((x) => x.cMProjectAppRelaId);

      strWhere = `${clsCMProjectAppRela.con_ApplicationTypeId} = '${strApplicationTypeId}'  `;

      const arrCMProjectAppRelaEN = await CMProjectAppRela_GetObjLstAsync(strWhere);
      if (arrCMProjectAppRelaEN.length == 0) return [];
      const arrCMProjectAppRela1 = arrCMProjectAppRelaEN.map(CMProjectAppRelaEx_CopyTo);
      arrCMProjectAppRela1.forEach((x) => {
        this.CMProjectAppRelaLst.push(x);
      });

      return arrCMProjectAppRela1.map((x) => x.cMProjectAppRelaId);
    },

    async getObjLstByApplicationTypeId(
      strApplicationTypeId: number,
    ): Promise<Array<clsCMProjectAppRela>> {
      let strWhere = '';

      const arrCMProjectAppRela = this.CMProjectAppRelaLst.filter(
        (x) => x.applicationTypeId == strApplicationTypeId,
      );

      if (arrCMProjectAppRela.length > 0) return arrCMProjectAppRela;

      strWhere = `${clsCMProjectAppRela.con_ApplicationTypeId} = '${strApplicationTypeId}'  `;

      const arrCMProjectAppRelaEN = await CMProjectAppRela_GetObjLstAsync(strWhere);
      if (arrCMProjectAppRelaEN.length == 0) return [];
      const arrCMProjectAppRela1 = arrCMProjectAppRelaEN.map(CMProjectAppRelaEx_CopyTo);
      arrCMProjectAppRela1.forEach((x) => {
        this.CMProjectAppRelaLst.push(x);
      });

      return arrCMProjectAppRela1;
    },

    ReFreshByPrjId(strPrjId: string): boolean {
      const arrCMProjectAppRela = this.CMProjectAppRelaLst.filter((x) => x.prjId !== strPrjId);
      this.CMProjectAppRelaLst = arrCMProjectAppRela;
      this.tabIdFldIdLst = [];

      this.tabIdLst = [];
      return true;
    },
  },
});

// export const CMProjectAppRelaStore = useCMProjectAppRelaStore();
