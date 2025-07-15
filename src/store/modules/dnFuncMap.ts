import { defineStore } from 'pinia';
import { clsDnFuncMap } from '@/ts/L0Entity/AIModule/clsDnFuncMap';
import {
  DnFuncMap_GetFirstObjAsync,
  DnFuncMap_GetObjByDnFuncMapIdAsync,
  DnFuncMap_GetObjLstAsync,
} from '@/ts/L3ForWApi/AIModule/clsDnFuncMapWApi';
import { clsDnFuncMapEN } from '@/ts/L0Entity/AIModule/clsDnFuncMapEN';
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { Format } from '@/ts/PubFun/clsString';
import { DnFuncMapEx_GetGraphPath } from '@/ts/L3ForWApiEx/AIModule/clsDnFuncMapExWApi';

export function DnFuncMapEx_CopyTo(objDnFuncMapENS: clsDnFuncMapEN): clsDnFuncMap {
  const objDnFuncMapENT = new clsDnFuncMap();
  try {
    ObjectAssign(objDnFuncMapENT, objDnFuncMapENS);
    return objDnFuncMapENT;
  } catch (e: any) {
    const strMsg = Format('(errid:Watl000066)Copy表对象数据出错,${e}.');
    console.error(strMsg);
    alert(strMsg);
    return objDnFuncMapENT;
  }
}
export interface GraphPath {
  inOutDataNodeId: string;
  graphPath: clsDnFuncMap[];
}
// 定义 TabsState
export interface DnFuncMapState {
  dnFuncMapLst: clsDnFuncMap[];
  inOutDataNodeIdLst: string[];
  inDataNodeIdLst: number[];
  outDataNodeIdLst: number[];
  graphPathLst: GraphPath[];
}
// import { SET1_TEXT } from './mutations';

// 定义 ModuleA mutations
export const useDnFuncMapStore = defineStore({
  id: 'DnFuncMap',

  state(): DnFuncMapState {
    return {
      dnFuncMapLst: [],
      inDataNodeIdLst: [],
      outDataNodeIdLst: [],
      inOutDataNodeIdLst: [],
      graphPathLst: [],
    };
  },

  actions: {
    async getObj(strDnFuncMapId: string): Promise<clsDnFuncMap | null> {
      const objDnFuncMap = this.dnFuncMapLst.find((x) => x.dnFuncMapId === strDnFuncMapId);
      if (objDnFuncMap != null) return objDnFuncMap;
      const objDnFuncMapEN = await DnFuncMap_GetObjByDnFuncMapIdAsync(strDnFuncMapId);
      if (objDnFuncMapEN == null) return null;
      const objDnFuncMap1 = DnFuncMapEx_CopyTo(objDnFuncMapEN);
      this.dnFuncMapLst.push(objDnFuncMap1);
      return objDnFuncMap1;
    },
    async getObjByInOut(
      strInDataNodeId: number,
      strOutDataNodeId: number,
    ): Promise<clsDnFuncMap | null> {
      const objDnFuncMap = this.dnFuncMapLst.find(
        (x) => x.inDataNodeId === strInDataNodeId && x.outDataNodeId === strOutDataNodeId,
      );
      if (objDnFuncMap != null) return objDnFuncMap;
      const strWhere = `${clsDnFuncMap.con_InDataNodeId} = '${strInDataNodeId}'  and ${clsDnFuncMap.con_OutDataNodeId} = '${strOutDataNodeId}'`;
      const objDnFuncMapEN = await DnFuncMap_GetFirstObjAsync(strWhere);
      if (objDnFuncMapEN == null) return null;
      const objDnFuncMap1 = DnFuncMapEx_CopyTo(objDnFuncMapEN);
      this.dnFuncMapLst.push(objDnFuncMap1);
      return objDnFuncMap1;
    },
    async getObjLstByIn(strInDataNodeId: number): Promise<Array<clsDnFuncMap>> {
      // console.log('strInDataNodeId0:', strInDataNodeId);
      const arrDnFuncMap = this.dnFuncMapLst.filter((x) => x.inDataNodeId === strInDataNodeId);
      if (arrDnFuncMap.length > 0) return arrDnFuncMap;
      if (this.inDataNodeIdLst.indexOf(strInDataNodeId) > -1) return arrDnFuncMap;
      const strWhere = `${clsDnFuncMap.con_InDataNodeId} = '${strInDataNodeId}'`;
      const arrDnFuncMapEN = await DnFuncMap_GetObjLstAsync(strWhere);
      console.log('strInDataNodeId1:', strInDataNodeId);
      this.inDataNodeIdLst.push(strInDataNodeId);
      if (arrDnFuncMapEN.length == 0) return arrDnFuncMap;
      const arrDnFuncMap1 = arrDnFuncMapEN.map(DnFuncMapEx_CopyTo);
      arrDnFuncMap1.forEach((x) => {
        this.dnFuncMapLst.push(x);
      });

      return arrDnFuncMap1;
    },
    async getGraphPath(
      strInDataNodeId: number,
      strOutDataNodeId: number,
      strPrjId: string,
    ): Promise<GraphPath | null> {
      const strInOutDataNodeId = `${strInDataNodeId}-${strOutDataNodeId}`;
      // console.log('InDataNodeId-OutDataNodeId0:', strInOutDataNodeId);
      const objGraphPath = this.graphPathLst.find((x) => x.inOutDataNodeId === strInOutDataNodeId);
      if (objGraphPath != null) return objGraphPath;
      let arrDnFuncMapLst;
      try {
        arrDnFuncMapLst = await DnFuncMapEx_GetGraphPath(
          strInDataNodeId,
          strOutDataNodeId,
          strPrjId,
        );
      } catch (e) {
        console.error(e);
        throw e;
      }
      const objGroupPath0 = {
        inOutDataNodeId: strInOutDataNodeId,
        graphPath: arrDnFuncMapLst,
      };
      this.graphPathLst.push(objGroupPath0);
      // console.log('InDataNodeId-OutDataNodeId1:', strInOutDataNodeId);
      if (arrDnFuncMapLst == null) return null;

      return objGroupPath0;
    },
    async getObjLstByOut(strOutDataNodeId: number): Promise<Array<clsDnFuncMap>> {
      const arrDnFuncMap = this.dnFuncMapLst.filter((x) => x.outDataNodeId === strOutDataNodeId);
      if (arrDnFuncMap.length > 0) return arrDnFuncMap;
      if (this.outDataNodeIdLst.indexOf(strOutDataNodeId) > -1) return arrDnFuncMap;
      const strWhere = `${clsDnFuncMap.con_OutDataNodeId} = '${strOutDataNodeId}'`;
      const arrDnFuncMapEN = await DnFuncMap_GetObjLstAsync(strWhere);
      this.outDataNodeIdLst.push(strOutDataNodeId);
      if (arrDnFuncMapEN.length == 0) return arrDnFuncMap;
      const arrDnFuncMap1 = arrDnFuncMapEN.map(DnFuncMapEx_CopyTo);
      arrDnFuncMap1.forEach((x) => {
        this.dnFuncMapLst.push(x);
      });

      return arrDnFuncMap1;
    },
    ReFreshByPrjId(strPrjId: string): boolean {
      const arrDnFuncMap = this.dnFuncMapLst.filter((x) => x.prjId !== strPrjId);
      this.dnFuncMapLst = arrDnFuncMap;
      this.outDataNodeIdLst = [];
      this.inDataNodeIdLst = [];

      return true;
    },
  },
});

// export const dnFuncMapStore = useDnFuncMapStore();
