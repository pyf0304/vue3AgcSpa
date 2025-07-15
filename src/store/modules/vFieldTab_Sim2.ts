import { defineStore } from 'pinia';

import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { clsvFieldTab_Sim2 } from '@/ts/L0Entity/Table_Field/clsvFieldTab_Sim2';
import {
  vFieldTab_Sim2_GetObjByFldIdAsync,
  vFieldTab_Sim2_GetObjByFldIdCache,
  vFieldTab_Sim2_GetObjLstAsync,
} from '@/ts/L3ForWApi/Table_Field/clsvFieldTab_Sim2WApi';
import { Format } from '@/ts/PubFun/clsString';
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { clsvFieldTab_Sim2EN } from '@/ts/L0Entity/Table_Field/clsvFieldTab_Sim2EN';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';

export function vFieldTab_SimEx_CopyTo(
  objvFieldTab_SimENS: clsvFieldTab_Sim2EN,
): clsvFieldTab_Sim2 {
  const strThisFuncName = vFieldTab_SimEx_CopyTo.name;
  const objvFieldTab_SimENT = new clsvFieldTab_Sim2();
  try {
    ObjectAssign(objvFieldTab_SimENT, objvFieldTab_SimENS);
    return objvFieldTab_SimENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      'usevFieldTab_Sim2Store',
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objvFieldTab_SimENT;
  }
}

export function vFieldTab_SimEx_CopyToEN(
  objvFieldTab_SimENS: clsvFieldTab_Sim2 | null,
): clsvFieldTab_Sim2EN | null {
  const strThisFuncName = vFieldTab_SimEx_CopyToEN.name;
  if (objvFieldTab_SimENS == null) return null;
  const objvFieldTab_SimENT = new clsvFieldTab_Sim2EN();
  try {
    ObjectAssign(objvFieldTab_SimENT, objvFieldTab_SimENS);
    return objvFieldTab_SimENT;
  } catch (e) {
    const strMsg = Format('(errid:Watl000067)Copy表对象数据出错,{0}.(in {1})', e, strThisFuncName);
    console.error(strMsg);
    alert(strMsg);
    return objvFieldTab_SimENT;
  }
}
// import { vFieldTab_Sim2_GetObjByDnFuncMapIdAsync } from '@/ts/L3ForWApi/AIModule/clsvFieldTab_SimWApi';
// export interface userSimEN {
//   userId: string;
//   userName: string;
// }
// 定义 TabsState
export interface vFieldTab_SimState {
  fieldTabLst: clsvFieldTab_Sim2[];
  tabIdFldIdLst: string[];
  tabIdLst: string[];
}
// import { SET1_TEXT } from './mutations';

// 定义 ModuleA mutations
export const usevFieldTab_Sim2Store = defineStore({
  id: 'vFieldTab_Sim2',

  state(): vFieldTab_SimState {
    return {
      fieldTabLst: [],
      tabIdFldIdLst: [],
      tabIdLst: [],
    };
  },

  actions: {
    async getObj(strFldId: string): Promise<clsvFieldTab_Sim2 | null> {
      if (strFldId == null) return null;
      if (strFldId == '') return null;
      if (strFldId == '0') return null;

      const objvFieldTab_Sim = this.fieldTabLst.find((x) => x.fldId === strFldId);
      if (objvFieldTab_Sim != null) return objvFieldTab_Sim;
      const objvFieldTab_SimEN = await vFieldTab_Sim2_GetObjByFldIdAsync(strFldId);
      if (objvFieldTab_SimEN == null) return null;
      const objvFieldTab_Sim1 = vFieldTab_SimEx_CopyTo(objvFieldTab_SimEN);
      this.fieldTabLst.push(objvFieldTab_Sim1);
      return objvFieldTab_Sim1;
    },
    async getObjLst(arrFldId: Array<string>): Promise<Array<clsvFieldTab_Sim2EN>> {
      const vFieldTab_Sim2Store = usevFieldTab_Sim2Store();
      const arrObjLst = new Array<clsvFieldTab_Sim2EN>();
      for (const strFldId of arrFldId) {
        const objvFieldTab_Sim = await vFieldTab_Sim2Store.getObj(strFldId);
        const objEN = vFieldTab_SimEx_CopyToEN(objvFieldTab_Sim);
        if (objEN != null) arrObjLst.push(objEN);
      }
      return arrObjLst;
    },
    async getFldNameLst(arrFldId: Array<string>): Promise<Array<string>> {
      const arrFldName = new Array<string>();
      for (const strFldId of arrFldId) {
        const objvFieldTab_Sim = await vFieldTab_Sim2_GetObjByFldIdCache(
          strFldId,
          clsPrivateSessionStorage.currSelPrjId,
        );

        if (objvFieldTab_Sim != null) arrFldName.push(objvFieldTab_Sim.fldName);
      }
      return arrFldName;
    },
    async getFldNameLstWithId(arrFldId: Array<string>): Promise<Array<string>> {
      const arrFldName = new Array<string>();
      for (const strFldId of arrFldId) {
        const objvFieldTab_Sim = await vFieldTab_Sim2_GetObjByFldIdCache(
          strFldId,
          clsPrivateSessionStorage.currSelPrjId,
        );
        if (objvFieldTab_Sim != null) arrFldName.push(`${objvFieldTab_Sim.fldName}(${strFldId})`);
      }
      return arrFldName;
    },
    delObj(strFldId: string): boolean {
      if (strFldId == null) return true;
      if (strFldId == '') return true;
      const intIndex = this.fieldTabLst.findIndex((x) => x.fldId === strFldId);
      this.fieldTabLst = this.fieldTabLst.filter((item) => item.fldId !== strFldId);

      if (intIndex > -1) {
        console.log(`字段Id:${strFldId}在字段列表中已经移除！`);
        return true;
      }
      {
        console.error(`字段Id:${strFldId}在字段列表中不存在！`);
        return false;
      }
    },
    /**
     * 根据字段名获取对象中某字段的值.
     * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_GetFldValue)
     * @param strFldName:字段名
     * @returns 字段值
     */
    GetFldValue(vFieldTab_Sim2: clsvFieldTab_Sim2, strFldName: string): any {
      let strMsg = '';
      switch (strFldName) {
        case clsvFieldTab_Sim2EN.con_FldId:
          return vFieldTab_Sim2.fldId;
        case clsvFieldTab_Sim2EN.con_FldName:
          return vFieldTab_Sim2.fldName;
        case clsvFieldTab_Sim2EN.con_Caption:
          return vFieldTab_Sim2.caption;
        case clsvFieldTab_Sim2EN.con_DataTypeId:
          return vFieldTab_Sim2.dataTypeId;
        case clsvFieldTab_Sim2EN.con_HomologousFldId:
          return vFieldTab_Sim2.homologousFldId;

        case clsvFieldTab_Sim2EN.con_PrjId:
          return vFieldTab_Sim2.prjId;

        default:
          strMsg = `字段名:[${strFldName}]在表对象:[vFieldTab_Sim2]中不存在!`;
          console.error(strMsg);
          return '';
      }
    },
    async getName(strFldId: string): Promise<string> {
      if (strFldId == null) return '';
      if (strFldId == '') return '';

      const objvFieldTab_Sim = this.fieldTabLst.find((x) => x.fldId === strFldId);
      if (objvFieldTab_Sim != null) return objvFieldTab_Sim.fldName;
      const objvFieldTab_SimEN = await vFieldTab_Sim2_GetObjByFldIdAsync(strFldId);
      if (objvFieldTab_SimEN == null) return '';
      const objvFieldTab_Sim1 = vFieldTab_SimEx_CopyTo(objvFieldTab_SimEN);
      this.fieldTabLst.push(objvFieldTab_Sim1);
      return objvFieldTab_Sim1.fldName;
    },
    async getCaption(strFldId: string): Promise<string> {
      if (strFldId == null) return '';
      if (strFldId == '') return '';
      const objvFieldTab_Sim = this.fieldTabLst.find((x) => x.fldId === strFldId);
      if (objvFieldTab_Sim != null) return objvFieldTab_Sim.caption;
      const objvFieldTab_SimEN = await vFieldTab_Sim2_GetObjByFldIdAsync(strFldId);
      if (objvFieldTab_SimEN == null) return '';
      const objvFieldTab_Sim1 = vFieldTab_SimEx_CopyTo(objvFieldTab_SimEN);
      this.fieldTabLst.push(objvFieldTab_Sim1);
      return objvFieldTab_Sim1.caption;
    },
    async getDataTypeId(strFldId: string): Promise<string> {
      if (strFldId == null) return '';
      if (strFldId == '') return '';
      const objvFieldTab_Sim = this.fieldTabLst.find((x) => x.fldId === strFldId);
      if (objvFieldTab_Sim != null) return objvFieldTab_Sim.dataTypeId;
      const objvFieldTab_SimEN = await vFieldTab_Sim2_GetObjByFldIdAsync(strFldId);
      if (objvFieldTab_SimEN == null) return '';
      const objvFieldTab_Sim1 = vFieldTab_SimEx_CopyTo(objvFieldTab_SimEN);
      this.fieldTabLst.push(objvFieldTab_Sim1);
      return objvFieldTab_Sim1.dataTypeId;
    },
    async getFldLength(strFldId: string): Promise<number> {
      if (strFldId == null) return 0;
      if (strFldId == '') return 0;
      const objvFieldTab_Sim = this.fieldTabLst.find((x) => x.fldId === strFldId);
      if (objvFieldTab_Sim != null) return objvFieldTab_Sim.fldLength;
      const objvFieldTab_SimEN = await vFieldTab_Sim2_GetObjByFldIdAsync(strFldId);
      if (objvFieldTab_SimEN == null) return 0;
      const objvFieldTab_Sim1 = vFieldTab_SimEx_CopyTo(objvFieldTab_SimEN);
      this.fieldTabLst.push(objvFieldTab_Sim1);
      return objvFieldTab_Sim1.fldLength;
    },
    async getFldPrecision(strFldId: string): Promise<number> {
      if (strFldId == null) return 0;
      if (strFldId == '') return 0;
      const objvFieldTab_Sim = this.fieldTabLst.find((x) => x.fldId === strFldId);
      if (objvFieldTab_Sim != null) return objvFieldTab_Sim.fldPrecision;
      const objvFieldTab_SimEN = await vFieldTab_Sim2_GetObjByFldIdAsync(strFldId);
      if (objvFieldTab_SimEN == null) return 0;
      const objvFieldTab_Sim1 = vFieldTab_SimEx_CopyTo(objvFieldTab_SimEN);
      this.fieldTabLst.push(objvFieldTab_Sim1);
      return objvFieldTab_Sim1.fldPrecision;
    },
    async getHomologousFldId(strFldId: string): Promise<string> {
      if (strFldId == null) return '';
      if (strFldId == '') return '';
      const objvFieldTab_Sim = this.fieldTabLst.find((x) => x.fldId === strFldId);
      if (objvFieldTab_Sim != null) return objvFieldTab_Sim.homologousFldId;
      const objvFieldTab_SimEN = await vFieldTab_Sim2_GetObjByFldIdAsync(strFldId);
      if (objvFieldTab_SimEN == null) return '';
      const objvFieldTab_Sim1 = vFieldTab_SimEx_CopyTo(objvFieldTab_SimEN);
      this.fieldTabLst.push(objvFieldTab_Sim1);
      return objvFieldTab_Sim1.homologousFldId;
    },

    async getKeyIdByName(strPrjId: string, strFldName: string): Promise<string> {
      const objvFieldTab_Sim = this.fieldTabLst.find(
        (x) => x.prjId == strPrjId && x.fldName === strFldName,
      );
      if (objvFieldTab_Sim != null) return objvFieldTab_Sim.fldId;
      const strWhere = `${clsvFieldTab_Sim2.con_PrjId} = '${strPrjId}' and ${clsvFieldTab_Sim2.con_FldName} = '${strFldName}' `;
      const arrvFieldTab_SimEN = await vFieldTab_Sim2_GetObjLstAsync(strWhere);
      if (arrvFieldTab_SimEN.length == 0) return '';
      const objvFieldTab_Sim1 = vFieldTab_SimEx_CopyTo(arrvFieldTab_SimEN[0]);
      this.fieldTabLst.push(objvFieldTab_Sim1);
      return objvFieldTab_Sim1.fldId;
    },
    async getKeyIdLstByName(
      strPrjId: string,
      strFldName: string,
      strComparisonOp: enumComparisonOp,
    ): Promise<Array<string>> {
      let arrvFieldTab_Sim;
      let strWhere = '';
      switch (strComparisonOp) {
        case enumComparisonOp.Like_03:
          arrvFieldTab_Sim = this.fieldTabLst.filter(
            (x) => x.prjId == strPrjId && x.fldName.indexOf(strFldName) > -1,
          );
          strWhere = `${clsvFieldTab_Sim2.con_PrjId} = '${strPrjId}' and ${clsvFieldTab_Sim2.con_FldName} like '%${strFldName}%' `;
          break;
        case enumComparisonOp.Equal_01:
          arrvFieldTab_Sim = this.fieldTabLst.filter(
            (x) => x.prjId == strPrjId && x.fldName === strFldName,
          );
          strWhere = `${clsvFieldTab_Sim2.con_PrjId} = '${strPrjId}' and ${clsvFieldTab_Sim2.con_FldName} = '${strFldName}' `;
          break;
      }
      if (arrvFieldTab_Sim.length > 0) return arrvFieldTab_Sim.map((x) => x.fldId);

      const arrvFieldTab_SimEN = await vFieldTab_Sim2_GetObjLstAsync(strWhere);
      if (arrvFieldTab_SimEN.length == 0) return [];
      const arrvFieldTab_Sim1 = arrvFieldTab_SimEN.map(vFieldTab_SimEx_CopyTo);
      arrvFieldTab_Sim1.forEach((x) => {
        this.fieldTabLst.push(x);
      });

      return arrvFieldTab_Sim1.map((x) => x.fldId);
    },

    ReFreshByPrjId(strPrjId: string): boolean {
      const arrvFieldTab_Sim = this.fieldTabLst.filter((x) => x.prjId !== strPrjId);
      this.fieldTabLst = arrvFieldTab_Sim;
      this.tabIdFldIdLst = [];

      this.tabIdLst = [];
      return true;
    },
  },
});

// export const vFieldTab_Sim2Store = usevFieldTab_Sim2Store();
