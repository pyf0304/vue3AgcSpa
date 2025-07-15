import { defineStore } from 'pinia';

import { clsTabFeatureFlds } from '@/ts/L0Entity/Table_Field/clsTabFeatureFlds';

import { clsTabFeatureFldsEN } from '@/ts/L0Entity/Table_Field/clsTabFeatureFldsEN';
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { Format } from '@/ts/PubFun/clsString';
import {
  TabFeatureFlds_GetFirstObjAsync,
  TabFeatureFlds_GetObjLstAsync,
} from '@/ts/L3ForWApi/Table_Field/clsTabFeatureFldsWApi';
import { usevFieldTab_Sim2Store } from '@/store/modules/vFieldTab_Sim2';
import { GetUniqueStrArr } from '@/ts/PubFun/clsArray';
import { FieldType_GetNameByFieldTypeIdCache } from '@/ts/L3ForWApi/Table_Field/clsFieldTypeWApi';
import { vFieldTab_Sim_GetNameByFldIdCache } from '@/ts/L3ForWApi/Table_Field/clsvFieldTab_SimWApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';

export function TabFeatureFldsEx_CopyTo(
  objTabFeatureFldsENS: clsTabFeatureFldsEN,
): clsTabFeatureFlds {
  const objTabFeatureFldsENT = new clsTabFeatureFlds();
  try {
    ObjectAssign(objTabFeatureFldsENT, objTabFeatureFldsENS);
    return objTabFeatureFldsENT;
  } catch (e: any) {
    const strMsg = Format('(errid:WiTsCs0011)Copy表对象数据出错,${e}.');
    console.error(strMsg);
    alert(strMsg);
    return objTabFeatureFldsENT;
  }
}

// import { TabFeatureFlds_GetObjByDnFuncMapIdAsync } from '@/ts/L3ForWApi/AIModule/clsTabFeatureFldsWApi';
// export interface userSimEN {
//   userId: string;
//   userName: string;
// }
// 定义 TabsState
export interface TabFeatureFldsState {
  TabFeatureFldsLst: clsTabFeatureFlds[];
}
// import { SET1_TEXT } from './mutations';

// 定义 ModuleA mutations
export const useTabFeatureFldsStore = defineStore({
  id: 'TabFeatureFlds',

  state(): TabFeatureFldsState {
    return {
      TabFeatureFldsLst: [],
    };
  },

  actions: {
    async getObj(strTabFeatureId: string, strFldId: string): Promise<clsTabFeatureFlds | null> {
      const objTabFeatureFlds = this.TabFeatureFldsLst.find(
        (x) => x.tabFeatureId === strTabFeatureId && x.fldId == strFldId,
      );
      if (objTabFeatureFlds != null) return objTabFeatureFlds;
      const strWhere = `${clsTabFeatureFlds.con_TabFeatureId} = '${strTabFeatureId}' and ${clsTabFeatureFlds.con_FldId} = '${strFldId}' `;

      const objTabFeatureFldsEN = await TabFeatureFlds_GetFirstObjAsync(strWhere);
      if (objTabFeatureFldsEN == null) return null;
      const objTabFeatureFlds1 = TabFeatureFldsEx_CopyTo(objTabFeatureFldsEN);
      this.TabFeatureFldsLst.push(objTabFeatureFlds1);
      return objTabFeatureFlds1;
    },

    async getObjLstByTabFeatureId(strTabFeatureId: string): Promise<Array<clsTabFeatureFlds>> {
      // console.log('TabFeatureId0:', strTabFeatureId);
      const arrTabFeatureFlds = this.TabFeatureFldsLst.filter(
        (x) => x.tabFeatureId === strTabFeatureId,
      );
      if (arrTabFeatureFlds.length > 0) return arrTabFeatureFlds;

      const strWhere = `${clsTabFeatureFlds.con_TabFeatureId} = '${strTabFeatureId}' `;
      const arrTabFeatureFldsEN = await TabFeatureFlds_GetObjLstAsync(strWhere);
      console.log('TabFeatureId1:', strTabFeatureId);

      if (arrTabFeatureFldsEN.length == 0) return arrTabFeatureFlds;
      const arrTabFeatureFlds1 = arrTabFeatureFldsEN.map(TabFeatureFldsEx_CopyTo);
      arrTabFeatureFlds1.forEach((x) => {
        this.TabFeatureFldsLst.push(x);
      });
      return arrTabFeatureFlds1;
    },
    async getFldIdLstByTabFeatureId(strTabFeatureId: string): Promise<Array<string>> {
      // console.log('TabFeatureId0:', strTabFeatureId);
      const arrTabFeatureFlds = this.TabFeatureFldsLst.filter(
        (x) => x.tabFeatureId === strTabFeatureId,
      );
      if (arrTabFeatureFlds.length > 0) return arrTabFeatureFlds.map((x) => x.fldId);

      const strWhere = `${clsTabFeatureFlds.con_TabFeatureId} = '${strTabFeatureId}' `;
      const arrTabFeatureFldsEN = await TabFeatureFlds_GetObjLstAsync(strWhere);
      console.log('TabFeatureId1:', strTabFeatureId);

      if (arrTabFeatureFldsEN.length == 0) return arrTabFeatureFlds.map((x) => x.fldId);
      const arrTabFeatureFlds1 = arrTabFeatureFldsEN.map(TabFeatureFldsEx_CopyTo);
      arrTabFeatureFlds1.forEach((x) => {
        this.TabFeatureFldsLst.push(x);
      });
      return arrTabFeatureFlds1.map((x) => x.fldId);
    },

    async getFldNameLstByTabFeatureId(strTabFeatureId: string): Promise<Array<string>> {
      const vFieldTab_Sim2Store = usevFieldTab_Sim2Store();
      // console.log('TabFeatureId0:', strTabFeatureId);
      const arrTabFeatureFlds = this.TabFeatureFldsLst.filter(
        (x) => x.tabFeatureId === strTabFeatureId,
      );
      if (arrTabFeatureFlds.length > 0) {
        let arrFldId = arrTabFeatureFlds.map((x) => x.fldId);
        arrFldId = GetUniqueStrArr(arrFldId);
        const arrFldName = await vFieldTab_Sim2Store.getFldNameLst(arrFldId);
        return arrFldName;
      }

      const strWhere = `${clsTabFeatureFlds.con_TabFeatureId} = '${strTabFeatureId}' `;
      const arrTabFeatureFldsEN = await TabFeatureFlds_GetObjLstAsync(strWhere);
      console.log('TabFeatureId1:', strTabFeatureId);

      if (arrTabFeatureFldsEN.length == 0) {
        let arrFldId = arrTabFeatureFlds.map((x) => x.fldId);
        arrFldId = GetUniqueStrArr(arrFldId);
        const arrFldName = await vFieldTab_Sim2Store.getFldNameLst(arrFldId);
        return arrFldName;
      }

      const arrTabFeatureFlds1 = arrTabFeatureFldsEN.map(TabFeatureFldsEx_CopyTo);
      arrTabFeatureFlds1.forEach((x) => {
        this.TabFeatureFldsLst.push(x);
      });
      {
        let arrFldId = arrTabFeatureFlds1.map((x) => x.fldId);
        arrFldId = GetUniqueStrArr(arrFldId);
        const arrFldName = await vFieldTab_Sim2Store.getFldNameLst(arrFldId);
        return arrFldName;
      }
    },

    async getFldNameLstByTabFeatureIdWithType(strTabFeatureId: string): Promise<Array<string>> {
      // console.log('TabFeatureId0:', strTabFeatureId);
      const arrTabFeatureFlds = this.TabFeatureFldsLst.filter(
        (x) => x.tabFeatureId === strTabFeatureId,
      );
      if (arrTabFeatureFlds.length > 0) {
        const arrFldName: string[] = [];
        for (const objTabFeatureFlds of arrTabFeatureFlds) {
          if (objTabFeatureFlds.fldId == '') continue;
          const strFldName = await vFieldTab_Sim_GetNameByFldIdCache(
            objTabFeatureFlds.fldId,
            clsPrivateSessionStorage.currSelPrjId,
          );
          const strFieldTypeName = await FieldType_GetNameByFieldTypeIdCache(
            objTabFeatureFlds.fieldTypeId,
          );
          const strFldNameWithType = `${strFieldTypeName}:${strFldName}`;
          arrFldName.push(strFldNameWithType);
        }
        return arrFldName;
      }

      const strWhere = `${clsTabFeatureFlds.con_TabFeatureId} = '${strTabFeatureId}' `;
      const arrTabFeatureFldsEN = await TabFeatureFlds_GetObjLstAsync(strWhere);
      console.log('TabFeatureId1:', strTabFeatureId);

      if (arrTabFeatureFldsEN.length == 0) {
        const arrFldName: string[] = [];
        for (const objTabFeatureFlds of arrTabFeatureFldsEN) {
          if (objTabFeatureFlds.fldId == '') continue;
          const strFldName = await vFieldTab_Sim_GetNameByFldIdCache(
            objTabFeatureFlds.fldId,
            clsPrivateSessionStorage.currSelPrjId,
          );
          const strFieldTypeName = await FieldType_GetNameByFieldTypeIdCache(
            objTabFeatureFlds.fieldTypeId,
          );
          const strFldNameWithType = `${strFieldTypeName}:${strFldName}`;
          arrFldName.push(strFldNameWithType);
        }
        return arrFldName;
      }

      const arrTabFeatureFlds1 = arrTabFeatureFldsEN.map(TabFeatureFldsEx_CopyTo);
      arrTabFeatureFlds1.forEach((x) => {
        this.TabFeatureFldsLst.push(x);
      });
      {
        // let arrFldId = arrTabFeatureFlds1.map((x) => x.fldId);
        // arrFldId = GetUniqueStrArr(arrFldId);
        const arrFldName: string[] = [];
        for (const objTabFeatureFlds of arrTabFeatureFlds1) {
          if (objTabFeatureFlds.fldId == '') continue;
          const strFldName = await vFieldTab_Sim_GetNameByFldIdCache(
            objTabFeatureFlds.fldId,
            clsPrivateSessionStorage.currSelPrjId,
          );
          const strFieldTypeName = await FieldType_GetNameByFieldTypeIdCache(
            objTabFeatureFlds.fieldTypeId,
          );
          const strFldNameWithType = `${strFieldTypeName}:${strFldName}`;
          arrFldName.push(strFldNameWithType);
        }
        return arrFldName;
      }
    },

    async delObjLstByTabFeatureId(strTabFeatureId: string): Promise<boolean> {
      if (strTabFeatureId == null) return true;
      if (strTabFeatureId == '') return true;
      const intIndex = this.TabFeatureFldsLst.findIndex((x) => x.tabFeatureId === strTabFeatureId);
      this.TabFeatureFldsLst = this.TabFeatureFldsLst.filter(
        (item) => item.tabFeatureId !== strTabFeatureId,
      );

      if (intIndex > -1) {
        console.log(`映射Id:${strTabFeatureId}在映射列表中已经移除！`);
        // return true;
      } else {
        console.error(`映射Id:${strTabFeatureId}在映射列表中不存在！`);
        // return false;
      }

      if (intIndex > -1) {
        console.log(`映射Id:${strTabFeatureId}在映射列表中已经移除！`);
        return true;
      } else {
        console.error(`映射Id:${strTabFeatureId}在映射列表中不存在！`);
        return false;
      }
    },

    ReFreshByPrjId(strPrjId: string): boolean {
      const arrTabFeatureFlds = this.TabFeatureFldsLst.filter((x) => x.prjId !== strPrjId);
      this.TabFeatureFldsLst = arrTabFeatureFlds;

      return true;
    },
  },
});

// export const tabFeatureFldsStore = useTabFeatureFldsStore();
