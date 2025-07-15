import { defineStore } from 'pinia';

import { clsConstraintFields } from '@/ts/L0Entity/Table_Field/clsConstraintFields';

import { clsConstraintFieldsEN } from '@/ts/L0Entity/Table_Field/clsConstraintFieldsEN';
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { Format } from '@/ts/PubFun/clsString';
import {
  ConstraintFields_GetFirstObjAsync,
  ConstraintFields_GetObjLstAsync,
} from '@/ts/L3ForWApi/Table_Field/clsConstraintFieldsWApi';
import { usevFieldTab_Sim2Store } from '@/store/modules/vFieldTab_Sim2';
import { GetUniqueStrArr } from '@/ts/PubFun/clsArray';

export function ConstraintFieldsEx_CopyTo(
  objConstraintFieldsENS: clsConstraintFieldsEN,
): clsConstraintFields {
  const objConstraintFieldsENT = new clsConstraintFields();
  try {
    ObjectAssign(objConstraintFieldsENT, objConstraintFieldsENS);
    return objConstraintFieldsENT;
  } catch (e: any) {
    const strMsg = Format('(errid:WiTsCs0011)Copy表对象数据出错,${e}.');
    console.error(strMsg);
    alert(strMsg);
    return objConstraintFieldsENT;
  }
}

// import { ConstraintFields_GetObjByDnFuncMapIdAsync } from '@/ts/L3ForWApi/AIModule/clsConstraintFieldsWApi';
// export interface userSimEN {
//   userId: string;
//   userName: string;
// }
// 定义 TabsState
export interface ConstraintFieldsState {
  ConstraintFieldsLst: clsConstraintFields[];
}
// import { SET1_TEXT } from './mutations';

// 定义 ModuleA mutations
export const useConstraintFieldsStore = defineStore({
  id: 'ConstraintFields',

  state(): ConstraintFieldsState {
    return {
      ConstraintFieldsLst: [],
    };
  },

  actions: {
    async getObj(
      strPrjConstraintId: string,
      strFldId: string,
    ): Promise<clsConstraintFields | null> {
      const objConstraintFields = this.ConstraintFieldsLst.find(
        (x) => x.prjConstraintId === strPrjConstraintId && x.fldId == strFldId,
      );
      if (objConstraintFields != null) return objConstraintFields;
      const strWhere = `${clsConstraintFields.con_PrjConstraintId} = '${strPrjConstraintId}' and ${clsConstraintFields.con_FldId} = '${strFldId}' `;

      const objConstraintFieldsEN = await ConstraintFields_GetFirstObjAsync(strWhere);
      if (objConstraintFieldsEN == null) return null;
      const objConstraintFields1 = ConstraintFieldsEx_CopyTo(objConstraintFieldsEN);
      this.ConstraintFieldsLst.push(objConstraintFields1);
      return objConstraintFields1;
    },

    async getObjLstByPrjConstraintId(
      strPrjConstraintId: string,
    ): Promise<Array<clsConstraintFields>> {
      // console.log('PrjConstraintId0:', strPrjConstraintId);
      const arrConstraintFields = this.ConstraintFieldsLst.filter(
        (x) => x.prjConstraintId === strPrjConstraintId,
      );
      if (arrConstraintFields.length > 0) return arrConstraintFields;

      const strWhere = `${clsConstraintFields.con_PrjConstraintId} = '${strPrjConstraintId}' `;
      const arrConstraintFieldsEN = await ConstraintFields_GetObjLstAsync(strWhere);

      if (arrConstraintFieldsEN.length == 0) return arrConstraintFields;
      const arrConstraintFields1 = arrConstraintFieldsEN.map(ConstraintFieldsEx_CopyTo);
      arrConstraintFields1.forEach((x) => {
        this.ConstraintFieldsLst.push(x);
      });
      return arrConstraintFields1;
    },
    async getFldIdLstByPrjConstraintId(strPrjConstraintId: string): Promise<Array<string>> {
      // console.log('PrjConstraintId0:', strPrjConstraintId);
      const arrConstraintFields = this.ConstraintFieldsLst.filter(
        (x) => x.prjConstraintId === strPrjConstraintId,
      );
      if (arrConstraintFields.length > 0) return arrConstraintFields.map((x) => x.fldId);

      const strWhere = `${clsConstraintFields.con_PrjConstraintId} = '${strPrjConstraintId}' `;
      const arrConstraintFieldsEN = await ConstraintFields_GetObjLstAsync(strWhere);

      if (arrConstraintFieldsEN.length == 0) return arrConstraintFields.map((x) => x.fldId);
      const arrConstraintFields1 = arrConstraintFieldsEN.map(ConstraintFieldsEx_CopyTo);
      arrConstraintFields1.forEach((x) => {
        this.ConstraintFieldsLst.push(x);
      });
      return arrConstraintFields1.map((x) => x.fldId);
    },

    async getFldNameLstByPrjConstraintId(strPrjConstraintId: string): Promise<Array<string>> {
      const vFieldTab_Sim2Store = usevFieldTab_Sim2Store();
      // console.log('PrjConstraintId0:', strPrjConstraintId);
      const arrConstraintFields = this.ConstraintFieldsLst.filter(
        (x) => x.prjConstraintId === strPrjConstraintId,
      );
      if (arrConstraintFields.length > 0) {
        let arrFldId = arrConstraintFields.map((x) => x.fldId);
        arrFldId = GetUniqueStrArr(arrFldId);
        const arrFldName = await vFieldTab_Sim2Store.getFldNameLst(arrFldId);
        return arrFldName;
      }

      const strWhere = `${clsConstraintFields.con_PrjConstraintId} = '${strPrjConstraintId}' `;
      const arrConstraintFieldsEN = await ConstraintFields_GetObjLstAsync(strWhere);

      if (arrConstraintFieldsEN.length == 0) {
        let arrFldId = arrConstraintFields.map((x) => x.fldId);
        arrFldId = GetUniqueStrArr(arrFldId);
        const arrFldName = await vFieldTab_Sim2Store.getFldNameLst(arrFldId);
        return arrFldName;
      }

      const arrConstraintFields1 = arrConstraintFieldsEN.map(ConstraintFieldsEx_CopyTo);
      arrConstraintFields1.forEach((x) => {
        this.ConstraintFieldsLst.push(x);
      });
      {
        let arrFldId = arrConstraintFields1.map((x) => x.fldId);
        arrFldId = GetUniqueStrArr(arrFldId);
        const arrFldName = await vFieldTab_Sim2Store.getFldNameLst(arrFldId);
        return arrFldName;
      }
    },

    async getFldNameLstByPrjConstraintIdWithId(strPrjConstraintId: string): Promise<Array<string>> {
      const vFieldTab_Sim2Store = usevFieldTab_Sim2Store();
      // console.log('PrjConstraintId0:', strPrjConstraintId);
      const arrConstraintFields = this.ConstraintFieldsLst.filter(
        (x) => x.prjConstraintId === strPrjConstraintId,
      );
      if (arrConstraintFields.length > 0) {
        let arrFldId = arrConstraintFields.map((x) => x.fldId);
        arrFldId = GetUniqueStrArr(arrFldId);
        const arrFldName = await vFieldTab_Sim2Store.getFldNameLstWithId(arrFldId);
        return arrFldName;
      }

      const strWhere = `${clsConstraintFields.con_PrjConstraintId} = '${strPrjConstraintId}' `;
      const arrConstraintFieldsEN = await ConstraintFields_GetObjLstAsync(strWhere);

      if (arrConstraintFieldsEN.length == 0) {
        let arrFldId = arrConstraintFields.map((x) => x.fldId);
        arrFldId = GetUniqueStrArr(arrFldId);
        const arrFldName = await vFieldTab_Sim2Store.getFldNameLstWithId(arrFldId);
        return arrFldName;
      }

      const arrConstraintFields1 = arrConstraintFieldsEN.map(ConstraintFieldsEx_CopyTo);
      arrConstraintFields1.forEach((x) => {
        this.ConstraintFieldsLst.push(x);
      });
      {
        let arrFldId = arrConstraintFields1.map((x) => x.fldId);
        arrFldId = GetUniqueStrArr(arrFldId);
        const arrFldName = await vFieldTab_Sim2Store.getFldNameLstWithId(arrFldId);
        return arrFldName;
      }
    },

    async delObjLstByPrjConstraintId(strPrjConstraintId: string): Promise<boolean> {
      if (strPrjConstraintId == null) return true;
      if (strPrjConstraintId == '') return true;
      const intIndex = this.ConstraintFieldsLst.findIndex(
        (x) => x.prjConstraintId === strPrjConstraintId,
      );
      this.ConstraintFieldsLst = this.ConstraintFieldsLst.filter(
        (item) => item.prjConstraintId !== strPrjConstraintId,
      );

      if (intIndex > -1) {
        console.log(`映射Id:${strPrjConstraintId}在映射列表中已经移除！`);
        // return true;
      } else {
        console.error(`映射Id:${strPrjConstraintId}在映射列表中不存在！`);
        // return false;
      }

      if (intIndex > -1) {
        console.log(`映射Id:${strPrjConstraintId}在映射列表中已经移除！`);
        return true;
      } else {
        console.error(`映射Id:${strPrjConstraintId}在映射列表中不存在！`);
        return false;
      }
    },

    ReFreshByPrjId(strPrjId: string): boolean {
      const arrConstraintFields = this.ConstraintFieldsLst.filter((x) => x.prjId !== strPrjId);
      this.ConstraintFieldsLst = arrConstraintFields;

      return true;
    },
  },
});

// export const constraintFieldsStore = useConstraintFieldsStore();
