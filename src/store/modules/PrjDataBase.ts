import { defineStore } from 'pinia';
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { Format } from '@/ts/PubFun/clsString';
import { clsPrjDataBase } from '@/ts/L0Entity/PrjManage/clsPrjDataBase';
import { clsPrjDataBaseEN, PrjDataBaseKey } from '@/ts/L0Entity/PrjManage/clsPrjDataBaseEN';
import {
  PrjDataBase_GetFirstObjAsync,
  PrjDataBase_GetObjLstAsync,
} from '@/ts/L3ForWApi/PrjManage/clsPrjDataBaseWApi';

export function PrjDataBaseEx_CopyTo(objPrjDataBaseENS: clsPrjDataBaseEN): clsPrjDataBase {
  const objPrjDataBaseENT = new clsPrjDataBase();
  try {
    ObjectAssign(objPrjDataBaseENT, objPrjDataBaseENS);
    return objPrjDataBaseENT;
  } catch (e: any) {
    const strMsg = Format('(errid:WiTsCs0011)Copy表对象数据出错,${e}.');
    console.error(strMsg);
    alert(strMsg);
    return objPrjDataBaseENT;
  }
}

// import { PrjDataBase_GetObjByDnFuncMapIdAsync } from '@/ts/L3ForWApi/AIModule/clsPrjDataBaseWApi';
// export interface userSimEN {
//   userId: string;
//   userName: string;
// }
// 定义 TabsState
export interface PrjDataBaseState {
  PrjDataBaseLst: clsPrjDataBase[];
}
// import { SET1_TEXT } from './mutations';

// 定义 ModuleA mutations
export const usePrjDataBaseStore = defineStore({
  id: 'PrjDataBase',

  state(): PrjDataBaseState {
    return {
      PrjDataBaseLst: [],
    };
  },

  actions: {
    async getObjByKey(key: PrjDataBaseKey): Promise<clsPrjDataBase | null> {
      const objPrjDataBase = this.PrjDataBaseLst.find((x) => x.prjDataBaseId === key.prjDataBaseId);
      if (objPrjDataBase != null) return objPrjDataBase;
      const strWhere = `${clsPrjDataBase.con_PrjDataBaseId} = '${key.prjDataBaseId}' `;

      const objPrjDataBaseEN = await PrjDataBase_GetFirstObjAsync(strWhere);
      if (objPrjDataBaseEN == null) return null;
      const objPrjDataBase1 = PrjDataBaseEx_CopyTo(objPrjDataBaseEN);
      this.PrjDataBaseLst.push(objPrjDataBase1);
      return objPrjDataBase1;
    },

    async getPrjDataBaseNameByPrjDataBaseId(strPrjDataBaseId: string): Promise<string> {
      // console.log('PrjDataBaseId0:', strPrjDataBaseId);
      const arrPrjDataBase = this.PrjDataBaseLst.filter(
        (x) => x.prjDataBaseId === strPrjDataBaseId,
      );
      if (arrPrjDataBase.length > 0) {
        return arrPrjDataBase[0].prjDataBaseName;
      }

      const strWhere = `${clsPrjDataBase.con_PrjDataBaseId} = '${strPrjDataBaseId}' `;
      const arrPrjDataBaseEN = await PrjDataBase_GetObjLstAsync(strWhere);
      console.log('PrjDataBaseId1:', strPrjDataBaseId);

      const arrPrjDataBase1 = arrPrjDataBaseEN.map(PrjDataBaseEx_CopyTo);
      arrPrjDataBase1.forEach((x) => {
        this.PrjDataBaseLst.push(x);
      });
      {
        if (arrPrjDataBase1.length > 0) {
          return arrPrjDataBase1[0].prjDataBaseName;
        } else return '';
      }
    },
    async getNameByKey(key: PrjDataBaseKey): Promise<string> {
      // console.log('PrjDataBaseId0:', strPrjDataBaseId);
      const arrPrjDataBase = this.PrjDataBaseLst.filter(
        (x) => x.prjDataBaseId === key.prjDataBaseId,
      );
      if (arrPrjDataBase.length > 0) {
        return arrPrjDataBase[0].prjDataBaseName;
      }

      const strWhere = `${clsPrjDataBase.con_PrjDataBaseId} = '${key.prjDataBaseId}' `;
      const arrPrjDataBaseEN = await PrjDataBase_GetObjLstAsync(strWhere);
      console.log('PrjDataBaseId1:', key.prjDataBaseId);

      const arrPrjDataBase1 = arrPrjDataBaseEN.map(PrjDataBaseEx_CopyTo);
      arrPrjDataBase1.forEach((x) => {
        this.PrjDataBaseLst.push(x);
      });
      {
        if (arrPrjDataBase1.length > 0) {
          return arrPrjDataBase1[0].prjDataBaseName;
        } else return '';
      }
    },
    async delObj(strPrjDataBaseId: string): Promise<boolean> {
      if (strPrjDataBaseId == null) return true;
      if (strPrjDataBaseId == '') return true;
      const intIndex = this.PrjDataBaseLst.findIndex((x) => x.prjDataBaseId === strPrjDataBaseId);
      this.PrjDataBaseLst = this.PrjDataBaseLst.filter(
        (item) => item.prjDataBaseId !== strPrjDataBaseId,
      );

      if (intIndex > -1) {
        console.log(`映射Id:${strPrjDataBaseId}在映射列表中已经移除！`);
        // return true;
      } else {
        console.error(`映射Id:${strPrjDataBaseId}在映射列表中不存在！`);
        // return false;
      }

      if (intIndex > -1) {
        console.log(`映射Id:${strPrjDataBaseId}在映射列表中已经移除！`);
        return true;
      } else {
        console.error(`映射Id:${strPrjDataBaseId}在映射列表中不存在！`);
        return false;
      }
    },
  },
});

// export const PrjDataBaseStore = usePrjDataBaseStore();
