import { defineStore } from 'pinia';

import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';

import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { Format } from '@/ts/PubFun/clsString';

import { clsFuncPara4CodeEN } from '@/ts/L0Entity/PrjFunction/clsFuncPara4CodeEN';
import { clsFuncPara4Code } from '@/ts/L0Entity/PrjFunction/clsFuncPara4Code';
import {
  FuncPara4Code_GetObjByFuncParaId4CodeAsync,
  FuncPara4Code_GetObjLstAsync,
} from '@/ts/L3ForWApi/PrjFunction/clsFuncPara4CodeWApi';

export function FuncPara4CodeEx_CopyTo(objFuncPara4CodeENS: clsFuncPara4CodeEN): clsFuncPara4Code {
  const strThisFuncName = FuncPara4CodeEx_CopyTo.name;
  const objFuncPara4CodeENT = new clsFuncPara4Code();
  try {
    ObjectAssign(objFuncPara4CodeENT, objFuncPara4CodeENS);
    return objFuncPara4CodeENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      'useFuncPara4CodeStore',
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objFuncPara4CodeENT;
  }
}

export function FuncPara4CodeEx_CopyToEN(
  objFuncPara4CodeENS: clsFuncPara4Code,
): clsFuncPara4CodeEN {
  const strThisFuncName = FuncPara4CodeEx_CopyTo.name;
  const objFuncPara4CodeENT = new clsFuncPara4CodeEN();
  try {
    ObjectAssign(objFuncPara4CodeENT, objFuncPara4CodeENS);
    return objFuncPara4CodeENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      'useFuncPara4CodeStore',
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objFuncPara4CodeENT;
  }
}
// import { funcPara4Code_GetObjByDnFuncMapIdAsync } from '@/ts/L3ForWApi/AIModule/clsfuncPara4CodeWApi';
// export interface userSimEN {
//   userId: string;
//   userName: string;
// }
// 定义 TabsState
export interface funcPara4CodeState {
  funcPara4CodeLst: clsFuncPara4Code[];
  tabIdFldIdLst: string[];
  tabIdLst: string[];
}
// import { SET1_TEXT } from './mutations';

// 定义 ModuleA mutations
export const usefuncPara4CodeStore = defineStore({
  id: 'funcPara4Code',

  state(): funcPara4CodeState {
    return {
      funcPara4CodeLst: [],
      tabIdFldIdLst: [],
      tabIdLst: [],
    };
  },

  actions: {
    async getObj(strFuncParaId4Code: string): Promise<clsFuncPara4Code | null> {
      const objfuncPara4Code = this.funcPara4CodeLst.find(
        (x) => x.funcParaId4Code === strFuncParaId4Code,
      );
      if (objfuncPara4Code != null) return objfuncPara4Code;
      const objfuncPara4CodeEN = await FuncPara4Code_GetObjByFuncParaId4CodeAsync(
        strFuncParaId4Code,
      );
      if (objfuncPara4CodeEN == null) return null;
      const objfuncPara4Code1 = FuncPara4CodeEx_CopyTo(objfuncPara4CodeEN);
      this.funcPara4CodeLst.push(objfuncPara4Code1);
      return objfuncPara4Code1;
    },
    async getObjEN(strFuncParaId4Code: string): Promise<clsFuncPara4CodeEN | null> {
      const objfuncPara4Code = this.funcPara4CodeLst.find(
        (x) => x.funcParaId4Code === strFuncParaId4Code,
      );
      if (objfuncPara4Code != null) return FuncPara4CodeEx_CopyToEN(objfuncPara4Code);
      const objfuncPara4CodeEN = await FuncPara4Code_GetObjByFuncParaId4CodeAsync(
        strFuncParaId4Code,
      );
      if (objfuncPara4CodeEN == null) return null;
      const objfuncPara4Code1 = FuncPara4CodeEx_CopyTo(objfuncPara4CodeEN);
      this.funcPara4CodeLst.push(objfuncPara4Code1);
      return FuncPara4CodeEx_CopyToEN(objfuncPara4Code1);
    },
    delObj(strFuncParaId4Code: string): boolean {
      if (strFuncParaId4Code == null) return true;
      if (strFuncParaId4Code == '') return true;
      const intIndex = this.funcPara4CodeLst.findIndex(
        (x) => x.funcParaId4Code === strFuncParaId4Code,
      );
      this.funcPara4CodeLst = this.funcPara4CodeLst.filter(
        (item) => item.funcParaId4Code !== strFuncParaId4Code,
      );

      if (intIndex > -1) {
        console.log(`界面Id:${strFuncParaId4Code}在界面列表中已经移除！`);
        return true;
      }
      {
        console.error(`界面Id:${strFuncParaId4Code}在界面列表中不存在！`);
        return false;
      }
    },
    async getName(strFuncParaId4Code: string): Promise<string> {
      const objfuncPara4Code = this.funcPara4CodeLst.find(
        (x) => x.funcParaId4Code === strFuncParaId4Code,
      );
      if (objfuncPara4Code != null) return objfuncPara4Code.paraName;
      const objfuncPara4CodeEN = await FuncPara4Code_GetObjByFuncParaId4CodeAsync(
        strFuncParaId4Code,
      );
      if (objfuncPara4CodeEN == null) return '';
      const objfuncPara4Code1 = FuncPara4CodeEx_CopyTo(objfuncPara4CodeEN);
      this.funcPara4CodeLst.push(objfuncPara4Code1);
      return objfuncPara4Code1.paraName;
    },
    async getPrjId(strFuncParaId4Code: string): Promise<string> {
      const objfuncPara4Code = this.funcPara4CodeLst.find(
        (x) => x.funcParaId4Code === strFuncParaId4Code,
      );
      if (objfuncPara4Code != null) return objfuncPara4Code.prjId;
      const objfuncPara4CodeEN = await FuncPara4Code_GetObjByFuncParaId4CodeAsync(
        strFuncParaId4Code,
      );
      if (objfuncPara4CodeEN == null) return '';
      const objfuncPara4Code1 = FuncPara4CodeEx_CopyTo(objfuncPara4CodeEN);
      this.funcPara4CodeLst.push(objfuncPara4Code1);
      return objfuncPara4Code1.prjId;
    },
    async getKeyIdLstByName(
      strPrjId: string,
      strViewName: string,
      strComparisonOp: enumComparisonOp,
    ): Promise<Array<string>> {
      let arrfuncPara4Code;
      let strWhere = '';
      switch (strComparisonOp) {
        case enumComparisonOp.Like_03:
          arrfuncPara4Code = this.funcPara4CodeLst.filter(
            (x) => x.prjId == strPrjId && x.paraName.indexOf(strViewName) > -1,
          );
          strWhere = `${clsFuncPara4Code.con_PrjId} = '${strPrjId}' and ${clsFuncPara4Code.con_ParaName} like '%${strViewName}%' `;
          break;
        case enumComparisonOp.Equal_01:
          arrfuncPara4Code = this.funcPara4CodeLst.filter(
            (x) => x.prjId == strPrjId && x.paraName === strViewName,
          );
          strWhere = `${clsFuncPara4Code.con_PrjId} = '${strPrjId}' and ${clsFuncPara4Code.con_ParaName} = '${strViewName}' `;
          break;
      }
      if (arrfuncPara4Code.length > 0) return arrfuncPara4Code.map((x) => x.funcParaId4Code);

      const arrfuncPara4CodeEN = await FuncPara4Code_GetObjLstAsync(strWhere);
      if (arrfuncPara4CodeEN.length == 0) return [];
      const arrfuncPara4Code1 = arrfuncPara4CodeEN.map(FuncPara4CodeEx_CopyTo);
      arrfuncPara4Code1.forEach((x) => {
        this.funcPara4CodeLst.push(x);
      });

      return arrfuncPara4Code1.map((x) => x.funcParaId4Code);
    },

    ReFreshByPrjId(strPrjId: string): boolean {
      const arrfuncPara4Code = this.funcPara4CodeLst.filter((x) => x.prjId !== strPrjId);
      this.funcPara4CodeLst = arrfuncPara4Code;
      this.tabIdFldIdLst = [];

      this.tabIdLst = [];
      return true;
    },
  },
});

// export const funcPara4CodeStore = usefuncPara4CodeStore();
