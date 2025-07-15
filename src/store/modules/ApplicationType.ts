import { defineStore } from 'pinia';

import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { Format } from '@/ts/PubFun/clsString';

import { clsApplicationTypeEN } from '@/ts/L0Entity/GeneCode/clsApplicationTypeEN';
import { clsApplicationType } from '@/ts/L0Entity/GeneCode/clsApplicationType';
import {
  ApplicationType_GetFirstObjAsync,
  ApplicationType_GetObjLstAsync,
} from '@/ts/L3ForWApi/GeneCode/clsApplicationTypeWApi';

export function ApplicationTypeEx_CopyTo(
  objApplicationTypeENS: clsApplicationTypeEN,
): clsApplicationType {
  const objApplicationTypeENT = new clsApplicationType();
  try {
    ObjectAssign(objApplicationTypeENT, objApplicationTypeENS);
    return objApplicationTypeENT;
  } catch (e: any) {
    const strMsg = Format('(errid:WiTsCs0011)Copy表对象数据出错,${e}.');
    console.error(strMsg);
    alert(strMsg);
    return objApplicationTypeENT;
  }
}

// import { ApplicationType_GetObjByDnFuncMapIdAsync } from '@/ts/L3ForWApi/AIModule/clsApplicationTypeWApi';
// export interface userSimEN {
//   userId: string;
//   userName: string;
// }
// 定义 TabsState
export interface ApplicationTypeState {
  ApplicationTypeLst: clsApplicationType[];
}
// import { SET1_TEXT } from './mutations';

// 定义 ModuleA mutations
export const useApplicationTypeStore = defineStore({
  id: 'ApplicationType',

  state(): ApplicationTypeState {
    return {
      ApplicationTypeLst: [],
    };
  },

  actions: {
    async getObj(strApplicationTypeId: number): Promise<clsApplicationType | null> {
      const objApplicationType = this.ApplicationTypeLst.find(
        (x) => x.applicationTypeId === strApplicationTypeId,
      );
      if (objApplicationType != null) return objApplicationType;
      const strWhere = `${clsApplicationType.con_ApplicationTypeId} = ${strApplicationTypeId} `;

      const objApplicationTypeEN = await ApplicationType_GetFirstObjAsync(strWhere);
      if (objApplicationTypeEN == null) return null;
      const objApplicationType1 = ApplicationTypeEx_CopyTo(objApplicationTypeEN);
      this.ApplicationTypeLst.push(objApplicationType1);
      return objApplicationType1;
    },

    async getObjLstByApplicationTypeId(
      strApplicationTypeId: number,
    ): Promise<Array<clsApplicationType>> {
      // console.log('ApplicationTypeId0:', strApplicationTypeId);
      const arrApplicationType = this.ApplicationTypeLst.filter(
        (x) => x.applicationTypeId === strApplicationTypeId,
      );
      if (arrApplicationType.length > 0) return arrApplicationType;

      const strWhere = `${clsApplicationType.con_ApplicationTypeId} = '${strApplicationTypeId}' `;
      const arrApplicationTypeEN = await ApplicationType_GetObjLstAsync(strWhere);
      console.log('ApplicationTypeId1:', strApplicationTypeId);

      if (arrApplicationTypeEN.length == 0) return arrApplicationType;
      const arrApplicationType1 = arrApplicationTypeEN.map(ApplicationTypeEx_CopyTo);
      arrApplicationType1.forEach((x) => {
        this.ApplicationTypeLst.push(x);
      });
      return arrApplicationType1;
    },

    async getApplicationTypeNameByApplicationTypeId(strApplicationTypeId: number): Promise<string> {
      // console.log('ApplicationTypeId0:', strApplicationTypeId);
      const arrApplicationType = this.ApplicationTypeLst.filter(
        (x) => x.applicationTypeId === strApplicationTypeId,
      );
      if (arrApplicationType.length > 0) {
        return arrApplicationType[0].applicationTypeName;
      }

      const strWhere = `${clsApplicationType.con_ApplicationTypeId} = '${strApplicationTypeId}' `;
      const arrApplicationTypeEN = await ApplicationType_GetObjLstAsync(strWhere);
      console.log('ApplicationTypeId1:', strApplicationTypeId);

      const arrApplicationType1 = arrApplicationTypeEN.map(ApplicationTypeEx_CopyTo);
      arrApplicationType1.forEach((x) => {
        this.ApplicationTypeLst.push(x);
      });
      {
        if (arrApplicationType1.length > 0) {
          return arrApplicationType1[0].applicationTypeName;
        } else return '';
      }
    },

    async getApplicationTypeSimNameByApplicationTypeId(
      strApplicationTypeId: number,
    ): Promise<string> {
      // console.log('ApplicationTypeId0:', strApplicationTypeId);
      const arrApplicationType = this.ApplicationTypeLst.filter(
        (x) => x.applicationTypeId === strApplicationTypeId,
      );
      if (arrApplicationType.length > 0) {
        return arrApplicationType[0].applicationTypeSimName;
      }

      const strWhere = `${clsApplicationType.con_ApplicationTypeId} = '${strApplicationTypeId}' `;
      const arrApplicationTypeEN = await ApplicationType_GetObjLstAsync(strWhere);
      console.log('ApplicationTypeId1:', strApplicationTypeId);

      const arrApplicationType1 = arrApplicationTypeEN.map(ApplicationTypeEx_CopyTo);
      arrApplicationType1.forEach((x) => {
        this.ApplicationTypeLst.push(x);
      });
      {
        if (arrApplicationType1.length > 0) {
          return arrApplicationType1[0].applicationTypeSimName;
        } else return '';
      }
    },
    async delObjLstByApplicationTypeId(strApplicationTypeId: number): Promise<boolean> {
      if (strApplicationTypeId == null) return true;
      if (strApplicationTypeId == 0) return true;
      const intIndex = this.ApplicationTypeLst.findIndex(
        (x) => x.applicationTypeId === strApplicationTypeId,
      );
      this.ApplicationTypeLst = this.ApplicationTypeLst.filter(
        (item) => item.applicationTypeId !== strApplicationTypeId,
      );

      if (intIndex > -1) {
        console.log(`映射Id:${strApplicationTypeId}在映射列表中已经移除！`);
        // return true;
      } else {
        console.error(`映射Id:${strApplicationTypeId}在映射列表中不存在！`);
        // return false;
      }

      if (intIndex > -1) {
        console.log(`映射Id:${strApplicationTypeId}在映射列表中已经移除！`);
        return true;
      } else {
        console.error(`映射Id:${strApplicationTypeId}在映射列表中不存在！`);
        return false;
      }
    },
  },
});

// export const applicationTypeStore = useApplicationTypeStore();
