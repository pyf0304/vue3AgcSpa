import { defineStore } from 'pinia';
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { Format } from '@/ts/PubFun/clsString';
import { clsCMProject } from '@/ts/L0Entity/CodeMan/clsCMProject';
import { clsCMProjectEN } from '@/ts/L0Entity/CodeMan/clsCMProjectEN';
import {
  CMProject_GetFirstObjAsync,
  CMProject_GetObjLstAsync,
} from '@/ts/L3ForWApi/CodeMan/clsCMProjectWApi';

export function CMProjectEx_CopyTo(objCMProjectENS: clsCMProjectEN): clsCMProject {
  const objCMProjectENT = new clsCMProject();
  try {
    ObjectAssign(objCMProjectENT, objCMProjectENS);
    return objCMProjectENT;
  } catch (e: any) {
    const strMsg = Format('(errid:WiTsCs0011)Copy表对象数据出错,${e}.');
    console.error(strMsg);
    alert(strMsg);
    return objCMProjectENT;
  }
}

// import { CMProject_GetObjByDnFuncMapIdAsync } from '@/ts/L3ForWApi/AIModule/clsCMProjectWApi';
// export interface userSimEN {
//   userId: string;
//   userName: string;
// }
// 定义 TabsState
export interface CMProjectState {
  CMProjectLst: clsCMProject[];
}
// import { SET1_TEXT } from './mutations';

// 定义 ModuleA mutations
export const useCMProjectStore = defineStore({
  id: 'CMProject',

  state(): CMProjectState {
    return {
      CMProjectLst: [],
    };
  },

  actions: {
    async getObj(strCmPrjId: string): Promise<clsCMProject | null> {
      const objCMProject = this.CMProjectLst.find((x) => x.cmPrjId === strCmPrjId);
      if (objCMProject != null) return objCMProject;
      const strWhere = `${clsCMProject.con_CmPrjId} = ${strCmPrjId} `;

      const objCMProjectEN = await CMProject_GetFirstObjAsync(strWhere);
      if (objCMProjectEN == null) return null;
      const objCMProject1 = CMProjectEx_CopyTo(objCMProjectEN);
      this.CMProjectLst.push(objCMProject1);
      return objCMProject1;
    },

    async getObjLstByCmPrjId(strCmPrjId: string): Promise<Array<clsCMProject>> {
      // console.log('CmPrjId0:', strCmPrjId);
      const arrCMProject = this.CMProjectLst.filter((x) => x.cmPrjId === strCmPrjId);
      if (arrCMProject.length > 0) return arrCMProject;

      const strWhere = `${clsCMProject.con_CmPrjId} = '${strCmPrjId}' `;
      const arrCMProjectEN = await CMProject_GetObjLstAsync(strWhere);
      console.log('CmPrjId1:', strCmPrjId);

      if (arrCMProjectEN.length == 0) return arrCMProject;
      const arrCMProject1 = arrCMProjectEN.map(CMProjectEx_CopyTo);
      arrCMProject1.forEach((x) => {
        this.CMProjectLst.push(x);
      });
      return arrCMProject1;
    },

    async getCmPrjNameByCmPrjId(strCmPrjId: string): Promise<string> {
      // console.log('CmPrjId0:', strCmPrjId);
      const arrCMProject = this.CMProjectLst.filter((x) => x.cmPrjId === strCmPrjId);
      if (arrCMProject.length > 0) {
        return arrCMProject[0].cmPrjName;
      }

      const strWhere = `${clsCMProject.con_CmPrjId} = '${strCmPrjId}' `;
      const arrCMProjectEN = await CMProject_GetObjLstAsync(strWhere);
      console.log('CmPrjId1:', strCmPrjId);

      const arrCMProject1 = arrCMProjectEN.map(CMProjectEx_CopyTo);
      arrCMProject1.forEach((x) => {
        this.CMProjectLst.push(x);
      });
      {
        if (arrCMProject1.length > 0) {
          return arrCMProject1[0].cmPrjName;
        } else return '';
      }
    },

    async delObjLstByCmPrjId(strCmPrjId: string): Promise<boolean> {
      if (strCmPrjId == null) return true;
      if (strCmPrjId == '') return true;
      const intIndex = this.CMProjectLst.findIndex((x) => x.cmPrjId === strCmPrjId);
      this.CMProjectLst = this.CMProjectLst.filter((item) => item.cmPrjId !== strCmPrjId);

      if (intIndex > -1) {
        console.log(`映射Id:${strCmPrjId}在映射列表中已经移除！`);
        // return true;
      } else {
        console.error(`映射Id:${strCmPrjId}在映射列表中不存在！`);
        // return false;
      }

      if (intIndex > -1) {
        console.log(`映射Id:${strCmPrjId}在映射列表中已经移除！`);
        return true;
      } else {
        console.error(`映射Id:${strCmPrjId}在映射列表中不存在！`);
        return false;
      }
    },
  },
});

// export const cMProjectStore = useCMProjectStore();
