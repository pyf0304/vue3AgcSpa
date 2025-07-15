import { defineStore } from 'pinia';

import { clsPrjTabFld } from '@/ts/L0Entity/Table_Field/clsPrjTabFld';

import { clsPrjTabFldEN } from '@/ts/L0Entity/Table_Field/clsPrjTabFldEN';
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { Format } from '@/ts/PubFun/clsString';
import {
  PrjTabFld_GetFirstObjAsync,
  PrjTabFld_GetObjLstAsync,
} from '@/ts/L3ForWApi/Table_Field/clsPrjTabFldWApi';

export function PrjTabFldEx_CopyTo(objPrjTabFldENS: clsPrjTabFldEN): clsPrjTabFld {
  const objPrjTabFldENT = new clsPrjTabFld();
  try {
    ObjectAssign(objPrjTabFldENT, objPrjTabFldENS);
    return objPrjTabFldENT;
  } catch (e: any) {
    const strMsg = Format('(errid:WiTsCs0011)Copy表对象数据出错,${e}.');
    console.error(strMsg);
    alert(strMsg);
    return objPrjTabFldENT;
  }
}

// import { PrjTabFld_GetObjByDnFuncMapIdAsync } from '@/ts/L3ForWApi/AIModule/clsPrjTabFldWApi';
// export interface userSimEN {
//   userId: string;
//   userName: string;
// }
// 定义 TabsState
export interface PrjTabFldState {
  prjTabFldLst: clsPrjTabFld[];
  fldIdFieldTypeIdLst: string[];
  tabIdLst: string[];
}
// import { SET1_TEXT } from './mutations';

// 定义 ModuleA mutations
export const usePrjTabFldStore = defineStore({
  id: 'PrjTabFld',

  state(): PrjTabFldState {
    return {
      prjTabFldLst: [],
      fldIdFieldTypeIdLst: [],
      tabIdLst: [],
    };
  },

  actions: {
    async getObj(strTabId: string, strFldId: string): Promise<clsPrjTabFld | null> {
      const objPrjTabFld = this.prjTabFldLst.find(
        (x) => x.tabId === strTabId && x.fldId == strFldId,
      );
      if (objPrjTabFld != null) return objPrjTabFld;
      const strWhere = `${clsPrjTabFld.con_TabId} = '${strTabId}' and ${clsPrjTabFld.con_FldId} = '${strFldId}' `;

      const objPrjTabFldEN = await PrjTabFld_GetFirstObjAsync(strWhere);
      if (objPrjTabFldEN == null) return null;
      const objPrjTabFld1 = PrjTabFldEx_CopyTo(objPrjTabFldEN);
      this.prjTabFldLst.push(objPrjTabFld1);
      return objPrjTabFld1;
    },
    async getObjLstByFldIdAndFldTypeBak(
      strFldId: string,
      strFieldTypeId,
    ): Promise<Array<clsPrjTabFld>> {
      // console.log('FldId-FieldTypeId0:', `${strFldId}-${strFieldTypeId}`);
      const arrPrjTabFld = this.prjTabFldLst.filter(
        (x) => x.fldId === strFldId && x.fieldTypeId == strFieldTypeId,
      );
      if (arrPrjTabFld.length > 0) return arrPrjTabFld;
      if (this.fldIdFieldTypeIdLst.indexOf(`${strFldId}-${strFieldTypeId}`) > -1)
        return arrPrjTabFld;

      const strWhere = `${clsPrjTabFld.con_FldId} = '${strFldId}' and ${clsPrjTabFld.con_FieldTypeId} = '${strFieldTypeId}'`;
      const arrPrjTabFldEN = await PrjTabFld_GetObjLstAsync(strWhere);
      console.log('FldId-FieldTypeId1:', `${strFldId}-${strFieldTypeId}`);
      this.fldIdFieldTypeIdLst.push(`${strFldId}-${strFieldTypeId}`);
      if (arrPrjTabFldEN.length == 0) return arrPrjTabFld;
      const arrPrjTabFld1 = arrPrjTabFldEN.map(PrjTabFldEx_CopyTo);
      arrPrjTabFld1.forEach((x) => {
        this.prjTabFldLst.push(x);
      });

      return arrPrjTabFld1;
    },

    async getObjLstByTabId(strTabId: string): Promise<Array<clsPrjTabFld>> {
      // console.log('TabId0:', strTabId);
      const arrPrjTabFld = this.prjTabFldLst.filter((x) => x.tabId === strTabId);
      if (arrPrjTabFld.length > 0) return arrPrjTabFld;
      if (this.tabIdLst.indexOf(strTabId) > -1) return arrPrjTabFld;

      const strWhere = `${clsPrjTabFld.con_TabId} = '${strTabId}' `;
      const arrPrjTabFldEN = await PrjTabFld_GetObjLstAsync(strWhere);

      this.tabIdLst.push(strTabId);
      if (arrPrjTabFldEN.length == 0) return arrPrjTabFld;
      const arrPrjTabFld1 = arrPrjTabFldEN.map(PrjTabFldEx_CopyTo);
      arrPrjTabFld1.forEach((x) => {
        this.prjTabFldLst.push(x);
      });
      return arrPrjTabFld1;
    },
    async getFldIdLstByTabId(strTabId: string): Promise<Array<string>> {
      // console.log('TabId0:', strTabId);
      const arrPrjTabFld = this.prjTabFldLst.filter((x) => x.tabId === strTabId);
      if (arrPrjTabFld.length > 0) return arrPrjTabFld.map((x) => x.fldId);
      if (this.tabIdLst.indexOf(strTabId) > -1) return arrPrjTabFld.map((x) => x.fldId);

      const strWhere = `${clsPrjTabFld.con_TabId} = '${strTabId}' `;
      const arrPrjTabFldEN = await PrjTabFld_GetObjLstAsync(strWhere);

      this.tabIdLst.push(strTabId);
      if (arrPrjTabFldEN.length == 0) return arrPrjTabFld.map((x) => x.fldId);
      const arrPrjTabFld1 = arrPrjTabFldEN.map(PrjTabFldEx_CopyTo);
      arrPrjTabFld1.forEach((x) => {
        this.prjTabFldLst.push(x);
      });
      return arrPrjTabFld1.map((x) => x.fldId);
    },
    /**
     * 获取所给TabId的相关字段Id列表
     * @param strTabId  所给表Id
     * @returns 相关字段Id列表
     */
    async getFldIdLstByTabId_NoEx(strTabId: string): Promise<Array<string>> {
      // console.log('TabId0:', strTabId);
      const arrPrjTabFld = this.prjTabFldLst.filter((x) => x.tabId === strTabId);
      if (arrPrjTabFld.length > 0)
        return arrPrjTabFld.filter((x) => x.isForExtendClass == false).map((x) => x.fldId);
      if (this.tabIdLst.indexOf(strTabId) > -1)
        return arrPrjTabFld.filter((x) => x.isForExtendClass == false).map((x) => x.fldId);

      const strWhere = `${clsPrjTabFld.con_TabId} = '${strTabId}' `;
      const arrPrjTabFldEN = await PrjTabFld_GetObjLstAsync(strWhere);

      this.tabIdLst.push(strTabId);
      if (arrPrjTabFldEN.length == 0)
        return arrPrjTabFld.filter((x) => x.isForExtendClass == false).map((x) => x.fldId);
      const arrPrjTabFld1 = arrPrjTabFldEN.map(PrjTabFldEx_CopyTo);
      arrPrjTabFld1.forEach((x) => {
        this.prjTabFldLst.push(x);
      });
      return arrPrjTabFld1.filter((x) => x.isForExtendClass == false).map((x) => x.fldId);
    },
    async delObjLstByTabId(strTabId: string): Promise<boolean> {
      if (strTabId == null) return true;
      if (strTabId == '') return true;
      let intIndex = this.prjTabFldLst.findIndex((x) => x.tabId === strTabId);
      this.prjTabFldLst = this.prjTabFldLst.filter((item) => item.tabId !== strTabId);

      if (intIndex > -1) {
        console.log(`映射Id:${strTabId}在映射列表中已经移除！`);
        // return true;
      } else {
        console.error(`映射Id:${strTabId}在映射列表中不存在！`);
        // return false;
      }

      intIndex = this.tabIdLst.findIndex((x) => x === strTabId);
      this.tabIdLst = this.tabIdLst.filter((item) => item !== strTabId);

      if (intIndex > -1) {
        console.log(`映射Id:${strTabId}在映射列表中已经移除！`);
        return true;
      } else {
        console.error(`映射Id:${strTabId}在映射列表中不存在！`);
        return false;
      }
    },

    // async getObjByTabIdFldId(
    //   strTabId: string,
    //   strFldId: string,
    //   intVersionNo: number,
    // ): Promise<clsPrjTabFld | null> {
    //   console.log('TabId-FldId-VersionNo0:', `${strTabId}-${strFldId}-${intVersionNo}`);
    //   const objPrjTabFld = this.prjTabFldLst.find(
    //     (x) => x.tabId === strTabId && x.fldId == strFldId && x.versionNo == intVersionNo,
    //   );
    //   if (objPrjTabFld != null) return objPrjTabFld;
    //   if (this.tabIdFldIdLst.indexOf(`${strTabId}-${strFldId}`) > -1) return null;
    //   const strWhere = `${clsPrjTabFld.con_TabId} = '${strTabId}' and ${clsPrjTabFld.con_FldId} = '${strFldId}' `;
    //   const arrPrjTabFldEN = await PrjTabFld_GetObjLstAsync(strWhere);

    //   console.log('TabId-FldId-VersionNo0:', `${strTabId}-${strFldId}-${intVersionNo}`);
    //   this.tabIdFldIdLst.push(`${strTabId}-${strFldId}`);
    //   if (arrPrjTabFldEN.length == 0) return null;
    //   const arrPrjTabFld1 = arrPrjTabFldEN.map(PrjTabFldEx_CopyTo);
    //   arrPrjTabFld1.forEach((x) => {
    //     this.prjTabFldLst.push(x);
    //   });

    //   return arrPrjTabFld1[0];
    // },

    ReFreshByPrjId(strPrjId: string): boolean {
      const arrPrjTabFld = this.prjTabFldLst.filter((x) => x.prjId !== strPrjId);
      this.prjTabFldLst = arrPrjTabFld;
      this.fldIdFieldTypeIdLst = [];

      this.tabIdLst = [];
      return true;
    },
  },
});

// export const prjTabFldStore = usePrjTabFldStore();
