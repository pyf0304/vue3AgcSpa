//import $ from "jquery";
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { ObjectAssign, GetSortExpressInfo } from '@/ts/PubFun/clsCommFunc4Web';
import {
  vDnFuncMap_Sim_GetObjLstByPagerAsync,
  vDnFuncMap_Sim_GetObjLstCache,
  vDnFuncMap_Sim_ReFreshThisCache,
  vDnFuncMap_Sim_SortFunByKey,
} from '@/ts/L3ForWApi/AIModule/clsvDnFuncMap_SimWApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsvDnFuncMap_SimEN } from '@/ts/L0Entity/AIModule/clsvDnFuncMap_SimEN';
import { clsvDnFuncMap_SimENEx } from '@/ts/L0Entity/AIModule/clsvDnFuncMap_SimENEx';

import {
  AssociationMapping_func,
  AssociationMapping_funcKey,
} from '@/ts/L3ForWApi/AIModule/clsAssociationMappingWApi';
import { clsAssociationMappingEN } from '@/ts/L0Entity/AIModule/clsAssociationMappingEN';
import { FuncMapMode_func, FuncMapMode_funcKey } from '@/ts/L3ForWApi/AIModule/clsFuncMapModeWApi';
import { clsFuncMapModeEN, enumFuncMapMode } from '@/ts/L0Entity/AIModule/clsFuncMapModeEN';
import {
  vPrjTab_Sim_func,
  vPrjTab_Sim_funcKey,
} from '@/ts/L3ForWApi/Table_Field/clsvPrjTab_SimWApi';
import { clsvPrjTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvPrjTab_SimEN';
import { DnFunction_func, DnFunction_funcKey } from '@/ts/L3ForWApi/AIModule/clsDnFunctionWApi';
import { clsDnFunctionEN } from '@/ts/L0Entity/AIModule/clsDnFunctionEN';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { clsvDnFuncMap_Sim } from '@/ts/L0Entity/AIModule/clsvDnFuncMap_Sim';
import { usevDataNode_SimStore } from '@/store/modules/vDataNode_Sim';

export const vDnFuncMap_SimEx_Controller = 'vDnFuncMap_SimExApi';
export const vDnFuncMap_SimEx_ConstructorName = 'vDnFuncMap_SimEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function vDnFuncMap_SimEx_GetWebApiUrl(strController: string, strAction: string): string {
  let strServiceUrl: string;
  let strCurrIPAddressAndPort = '';
  if (clsSysPara4WebApi.bolIsLocalHost == false) {
    strCurrIPAddressAndPort = clsSysPara4WebApi.CurrIPAddressAndPort;
  } else {
    strCurrIPAddressAndPort = clsSysPara4WebApi.CurrIPAddressAndPort_Local;
  }
  if (IsNullOrEmpty(clsSysPara4WebApi.CurrPrx) == true) {
    strServiceUrl = Format('{0}/{1}/{2}', strCurrIPAddressAndPort, strController, strAction);
  } else {
    strServiceUrl = Format(
      '{0}/{1}/{2}/{3}',
      strCurrIPAddressAndPort,
      clsSysPara4WebApi.CurrPrx,
      strController,
      strAction,
    );
  }
  return strServiceUrl;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_CopyToEx)
 * @param objvDnFuncMap_SimENS:源对象
 * @returns 目标对象=>clsvDnFuncMap_SimEN:objvDnFuncMap_SimENT
 **/
export function vDnFuncMap_SimEx_CopyToEx(
  objvDnFuncMap_SimENS: clsvDnFuncMap_SimEN,
): clsvDnFuncMap_SimENEx {
  const strThisFuncName = vDnFuncMap_SimEx_CopyToEx.name;
  const objvDnFuncMap_SimENT = new clsvDnFuncMap_SimENEx();
  try {
    ObjectAssign(objvDnFuncMap_SimENT, objvDnFuncMap_SimENS);
    return objvDnFuncMap_SimENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      vDnFuncMap_SimEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objvDnFuncMap_SimENT;
  }
}
export function vDnFuncMap_SimEx_CopyTo(
  objvDnFuncMap_SimENS: clsvDnFuncMap_SimEN,
): clsvDnFuncMap_Sim {
  const strThisFuncName = vDnFuncMap_SimEx_CopyTo.name;
  const objvDnFuncMap_SimENT = new clsvDnFuncMap_Sim();
  try {
    ObjectAssign(objvDnFuncMap_SimENT, objvDnFuncMap_SimENS);
    return objvDnFuncMap_SimENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      vDnFuncMap_SimEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objvDnFuncMap_SimENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function vDnFuncMap_SimEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsvDnFuncMap_SimENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrvDnFuncMap_SimObjLst = await vDnFuncMap_Sim_GetObjLstByPagerAsync(objPagerPara);
  const arrvDnFuncMap_SimExObjLst = arrvDnFuncMap_SimObjLst.map(vDnFuncMap_SimEx_CopyToEx);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsvDnFuncMap_SimEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrvDnFuncMap_SimExObjLst) {
      await vDnFuncMap_SimEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrvDnFuncMap_SimExObjLst.length == 0) return arrvDnFuncMap_SimExObjLst;
  let arrvDnFuncMap_SimSel: Array<clsvDnFuncMap_SimENEx> = arrvDnFuncMap_SimExObjLst;
  try {
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrvDnFuncMap_SimSel = arrvDnFuncMap_SimSel.sort(
        vDnFuncMap_SimEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrvDnFuncMap_SimSel = arrvDnFuncMap_SimSel.sort(objPagerPara.sortFun);
    }

    return arrvDnFuncMap_SimSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      vDnFuncMap_SimEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvDnFuncMap_SimENEx>();
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objvDnFuncMap_SimS:源对象
 **/
export async function vDnFuncMap_SimEx_FuncMapInDataNodeName(
  objvDnFuncMap_Sim: clsvDnFuncMap_SimENEx,
) {
  const strThisFuncName = vDnFuncMap_SimEx_FuncMapInDataNodeName.name;
  const vDataNode_SimStore = usevDataNode_SimStore();
  try {
    if (IsNullOrEmpty(objvDnFuncMap_Sim.inDataNodeName) == true) {
      const vDataNodeSimDataNodeId = objvDnFuncMap_Sim.inDataNodeId;
      const vDataNodeSimDataNodeName = await vDataNode_SimStore.getName(vDataNodeSimDataNodeId);
      objvDnFuncMap_Sim.inDataNodeName = vDataNodeSimDataNodeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000333)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      vDnFuncMap_SimEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objvDnFuncMap_SimS:源对象
 **/
export async function vDnFuncMap_SimEx_FuncMapOutDataNodeName(
  objvDnFuncMap_Sim: clsvDnFuncMap_SimENEx,
) {
  const strThisFuncName = vDnFuncMap_SimEx_FuncMapOutDataNodeName.name;
  const vDataNode_SimStore = usevDataNode_SimStore();
  try {
    if (IsNullOrEmpty(objvDnFuncMap_Sim.outDataNodeName) == true) {
      const vDataNodeSimDataNodeId = objvDnFuncMap_Sim.outDataNodeId;
      const vDataNodeSimDataNodeName = await vDataNode_SimStore.getName(vDataNodeSimDataNodeId);
      objvDnFuncMap_Sim.outDataNodeName = vDataNodeSimDataNodeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000334)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      vDnFuncMap_SimEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objvDnFuncMap_SimS:源对象
 **/
export async function vDnFuncMap_SimEx_FuncMapAssociationMappingName(
  objvDnFuncMap_Sim: clsvDnFuncMap_SimENEx,
) {
  const strThisFuncName = vDnFuncMap_SimEx_FuncMapAssociationMappingName.name;
  try {
    if (IsNullOrEmpty(objvDnFuncMap_Sim.associationMappingName) == true) {
      const AssociationMappingAssociationMappingId = objvDnFuncMap_Sim.associationMappingId;
      const AssociationMappingAssociationMappingName = await AssociationMapping_func(
        clsAssociationMappingEN.con_AssociationMappingId,
        clsAssociationMappingEN.con_AssociationMappingName,
        AssociationMappingAssociationMappingId,
      );
      objvDnFuncMap_Sim.associationMappingName = AssociationMappingAssociationMappingName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000285)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      vDnFuncMap_SimEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objvDnFuncMap_SimS:源对象
 **/
export async function vDnFuncMap_SimEx_FuncMapFuncMapModeName(
  objvDnFuncMap_Sim: clsvDnFuncMap_SimENEx,
) {
  const strThisFuncName = vDnFuncMap_SimEx_FuncMapFuncMapModeName.name;
  try {
    if (IsNullOrEmpty(objvDnFuncMap_Sim.funcMapModeName) == true) {
      const FuncMapModeFuncMapModeId = objvDnFuncMap_Sim.funcMapModeId;
      const FuncMapModeFuncMapModeName = await FuncMapMode_func(
        clsFuncMapModeEN.con_FuncMapModeId,
        clsFuncMapModeEN.con_FuncMapModeName,
        FuncMapModeFuncMapModeId,
      );
      objvDnFuncMap_Sim.funcMapModeName = FuncMapModeFuncMapModeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000372)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      vDnFuncMap_SimEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objvDnFuncMap_SimS:源对象
 **/
export async function vDnFuncMap_SimEx_FuncMapTabName(objvDnFuncMap_Sim: clsvDnFuncMap_SimENEx) {
  const strThisFuncName = vDnFuncMap_SimEx_FuncMapTabName.name;
  try {
    if (IsNullOrEmpty(objvDnFuncMap_Sim.tabName) == true) {
      const vPrjTabSimTabId = objvDnFuncMap_Sim.tabId;
      const vPrjTabSimTabName = await vPrjTab_Sim_func(
        clsvPrjTab_SimEN.con_TabId,
        clsvPrjTab_SimEN.con_TabName,
        vPrjTabSimTabId,
        clsPrivateSessionStorage.currSelPrjId,
      );
      objvDnFuncMap_Sim.tabName = vPrjTabSimTabName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000339)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      vDnFuncMap_SimEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objvDnFuncMap_SimS:源对象
 **/
export async function vDnFuncMap_SimEx_FuncMapDnFunctionName(
  objvDnFuncMap_Sim: clsvDnFuncMap_SimENEx,
) {
  const strThisFuncName = vDnFuncMap_SimEx_FuncMapDnFunctionName.name;
  try {
    if (IsNullOrEmpty(objvDnFuncMap_Sim.dnFunctionName) == true) {
      const DNFunctionDNFunctionId = objvDnFuncMap_Sim.dnFuncMapId;
      const DNFunctionDNFunctionName = await DnFunction_func(
        clsDnFunctionEN.con_DnFunctionId,
        clsDnFunctionEN.con_DnFunctionName,
        DNFunctionDNFunctionId,
        objvDnFuncMap_Sim.prjId,
      );
      objvDnFuncMap_Sim.dnFunctionName = DNFunctionDNFunctionName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000373)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      vDnFuncMap_SimEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2023-07-18
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function vDnFuncMap_SimEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsvDnFuncMap_SimENEx.con_InDataNodeName:
        return (a: clsvDnFuncMap_SimENEx, b: clsvDnFuncMap_SimENEx) => {
          return a.inDataNodeName.localeCompare(b.inDataNodeName);
        };
      case clsvDnFuncMap_SimENEx.con_DnFunctionName:
        return (a: clsvDnFuncMap_SimENEx, b: clsvDnFuncMap_SimENEx) => {
          return a.dnFunctionName.localeCompare(b.dnFunctionName);
        };
      case clsvDnFuncMap_SimENEx.con_OutDataNodeName:
        return (a: clsvDnFuncMap_SimENEx, b: clsvDnFuncMap_SimENEx) => {
          return a.outDataNodeName.localeCompare(b.outDataNodeName);
        };
      case clsvDnFuncMap_SimENEx.con_TabName:
        return (a: clsvDnFuncMap_SimENEx, b: clsvDnFuncMap_SimENEx) => {
          return a.tabName.localeCompare(b.tabName);
        };
      case clsvDnFuncMap_SimENEx.con_FuncMapModeName:
        return (a: clsvDnFuncMap_SimENEx, b: clsvDnFuncMap_SimENEx) => {
          return a.funcMapModeName.localeCompare(b.funcMapModeName);
        };
      case clsvDnFuncMap_SimENEx.con_AssociationMappingName:
        return (a: clsvDnFuncMap_SimENEx, b: clsvDnFuncMap_SimENEx) => {
          return a.associationMappingName.localeCompare(b.associationMappingName);
        };

      case clsvDnFuncMap_SimENEx.con_TrClass:
        return (a: clsvDnFuncMap_SimENEx, b: clsvDnFuncMap_SimENEx) => {
          return a.trClass.localeCompare(b.trClass);
        };
      default:
        return vDnFuncMap_Sim_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsvDnFuncMap_SimENEx.con_InDataNodeName:
        return (a: clsvDnFuncMap_SimENEx, b: clsvDnFuncMap_SimENEx) => {
          return b.inDataNodeName.localeCompare(a.inDataNodeName);
        };
      case clsvDnFuncMap_SimENEx.con_DnFunctionName:
        return (a: clsvDnFuncMap_SimENEx, b: clsvDnFuncMap_SimENEx) => {
          return b.dnFunctionName.localeCompare(a.dnFunctionName);
        };
      case clsvDnFuncMap_SimENEx.con_OutDataNodeName:
        return (a: clsvDnFuncMap_SimENEx, b: clsvDnFuncMap_SimENEx) => {
          return b.outDataNodeName.localeCompare(a.outDataNodeName);
        };
      case clsvDnFuncMap_SimENEx.con_TabName:
        return (a: clsvDnFuncMap_SimENEx, b: clsvDnFuncMap_SimENEx) => {
          return b.tabName.localeCompare(a.tabName);
        };
      case clsvDnFuncMap_SimENEx.con_FuncMapModeName:
        return (a: clsvDnFuncMap_SimENEx, b: clsvDnFuncMap_SimENEx) => {
          return b.funcMapModeName.localeCompare(a.funcMapModeName);
        };
      case clsvDnFuncMap_SimENEx.con_AssociationMappingName:
        return (a: clsvDnFuncMap_SimENEx, b: clsvDnFuncMap_SimENEx) => {
          return b.associationMappingName.localeCompare(a.associationMappingName);
        };

      case clsvDnFuncMap_SimENEx.con_TrClass:
        return (a: clsvDnFuncMap_SimENEx, b: clsvDnFuncMap_SimENEx) => {
          return b.trClass.localeCompare(a.trClass);
        };
      default:
        return vDnFuncMap_Sim_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2023-07-18
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function vDnFuncMap_SimEx_FuncMapByFldName(
  strFldName: string,
  objvDnFuncMap_SimEx: clsvDnFuncMap_SimENEx,
) {
  const strThisFuncName = vDnFuncMap_SimEx_FuncMapByFldName.name;
  console.log(objvDnFuncMap_SimEx);
  let strMsg = '';
  //如果是本表中字段，不需要映射
  const arrFldName = clsvDnFuncMap_SimEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsvDnFuncMap_SimENEx.con_InDataNodeName:
      return vDnFuncMap_SimEx_FuncMapInDataNodeName(objvDnFuncMap_SimEx);
    case clsvDnFuncMap_SimENEx.con_DnFunctionName:
      return vDnFuncMap_SimEx_FuncMapDnFunctionName(objvDnFuncMap_SimEx);
    case clsvDnFuncMap_SimENEx.con_OutDataNodeName:
      return vDnFuncMap_SimEx_FuncMapOutDataNodeName(objvDnFuncMap_SimEx);
    case clsvDnFuncMap_SimENEx.con_TabName:
      return vDnFuncMap_SimEx_FuncMapTabName(objvDnFuncMap_SimEx);
    case clsvDnFuncMap_SimENEx.con_FuncMapModeName:
      return vDnFuncMap_SimEx_FuncMapFuncMapModeName(objvDnFuncMap_SimEx);
    case clsvDnFuncMap_SimENEx.con_AssociationMappingName:
      return vDnFuncMap_SimEx_FuncMapAssociationMappingName(objvDnFuncMap_SimEx);
    case clsvDnFuncMap_SimENEx.con_MapDescription:
      return vDnFuncMap_SimEx_FuncMapMapDescription(objvDnFuncMap_SimEx);

    default:
      strMsg = Format(
        '扩展字段:[{0}]在字段值函数映射中不存在！(in {1})',
        strFldName,
        strThisFuncName,
      );
      console.error(strMsg);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objvDnFuncMap_SimS:源对象
 **/
export async function vDnFuncMap_SimEx_FuncMapKeyInDataNodeName(
  objvDnFuncMap_Sim: clsvDnFuncMap_SimENEx,
): Promise<Array<number>> {
  const strThisFuncName = vDnFuncMap_SimEx_FuncMapKeyInDataNodeName.name;
  const vDataNode_SimStore = usevDataNode_SimStore();
  try {
    if (IsNullOrEmpty(objvDnFuncMap_Sim.inDataNodeName) == true) return [];
    const vDataNodeSimDataNodeName = objvDnFuncMap_Sim.outDataNodeName;
    const arrInDataNodeId = await vDataNode_SimStore.getKeyIdLstByName(
      clsPrivateSessionStorage.currSelPrjId,
      vDataNodeSimDataNodeName,
      enumComparisonOp.Like_03,
    );
    return arrInDataNodeId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000333)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      vDnFuncMap_SimEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objvDnFuncMap_SimS:源对象
 **/
export async function vDnFuncMap_SimEx_FuncMapKeyOutDataNodeName(
  objvDnFuncMap_Sim: clsvDnFuncMap_SimENEx,
): Promise<Array<number>> {
  const strThisFuncName = vDnFuncMap_SimEx_FuncMapKeyOutDataNodeName.name;
  const vDataNode_SimStore = usevDataNode_SimStore();
  try {
    if (IsNullOrEmpty(objvDnFuncMap_Sim.outDataNodeName) == true) return [];
    const vDataNodeSimDataNodeName = objvDnFuncMap_Sim.outDataNodeName;
    const arrOutDataNodeId = await vDataNode_SimStore.getKeyIdLstByName(
      clsPrivateSessionStorage.currSelPrjId,
      vDataNodeSimDataNodeName,
      enumComparisonOp.Like_03,
    );
    return arrOutDataNodeId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000334)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      vDnFuncMap_SimEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objvDnFuncMap_SimS:源对象
 **/
export async function vDnFuncMap_SimEx_FuncMapKeyAssociationMappingName(
  objvDnFuncMap_Sim: clsvDnFuncMap_SimENEx,
): Promise<Array<string>> {
  const strThisFuncName = vDnFuncMap_SimEx_FuncMapKeyAssociationMappingName.name;
  try {
    if (IsNullOrEmpty(objvDnFuncMap_Sim.associationMappingName) == true) return [];
    const AssociationMappingAssociationMappingName = objvDnFuncMap_Sim.associationMappingName;
    const arrAssociationMappingId = await AssociationMapping_funcKey(
      clsAssociationMappingEN.con_AssociationMappingName,
      AssociationMappingAssociationMappingName,
      enumComparisonOp.Like_03,
    );
    return arrAssociationMappingId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000285)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      vDnFuncMap_SimEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objvDnFuncMap_SimS:源对象
 **/
export async function vDnFuncMap_SimEx_FuncMapKeyFuncMapModeName(
  objvDnFuncMap_Sim: clsvDnFuncMap_SimENEx,
): Promise<Array<string>> {
  const strThisFuncName = vDnFuncMap_SimEx_FuncMapKeyFuncMapModeName.name;
  try {
    if (IsNullOrEmpty(objvDnFuncMap_Sim.funcMapModeName) == true) return [];
    const FuncMapModeFuncMapModeName = objvDnFuncMap_Sim.funcMapModeName;
    const arrFuncMapModeId = await FuncMapMode_funcKey(
      clsFuncMapModeEN.con_FuncMapModeName,
      FuncMapModeFuncMapModeName,
      enumComparisonOp.Like_03,
    );
    return arrFuncMapModeId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000372)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      vDnFuncMap_SimEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objvDnFuncMap_SimS:源对象
 **/
export async function vDnFuncMap_SimEx_FuncMapKeyTabName(
  objvDnFuncMap_Sim: clsvDnFuncMap_SimENEx,
): Promise<Array<string>> {
  const strThisFuncName = vDnFuncMap_SimEx_FuncMapKeyTabName.name;
  try {
    if (IsNullOrEmpty(objvDnFuncMap_Sim.tabName) == true) return [];
    const vPrjTabSimTabName = objvDnFuncMap_Sim.tabName;
    const arrTabId = await vPrjTab_Sim_funcKey(
      clsvPrjTab_SimEN.con_TabName,
      vPrjTabSimTabName,
      clsPrivateSessionStorage.cmPrjId,
      enumComparisonOp.Like_03,
    );
    return arrTabId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000339)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      vDnFuncMap_SimEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objvDnFuncMap_SimS:源对象
 **/
export async function vDnFuncMap_SimEx_FuncMapKeyDnFunctionName(
  objvDnFuncMap_Sim: clsvDnFuncMap_SimENEx,
): Promise<Array<string>> {
  const strThisFuncName = vDnFuncMap_SimEx_FuncMapKeyDnFunctionName.name;
  try {
    if (IsNullOrEmpty(objvDnFuncMap_Sim.dnFunctionName) == true) return [];
    const DNFunctionDNFunctionName = objvDnFuncMap_Sim.dnFunctionName;
    const arrDnFuncMapId = await DnFunction_funcKey(
      clsDnFunctionEN.con_DnFunctionName,
      DNFunctionDNFunctionName,
      objvDnFuncMap_Sim.prjId,
      enumComparisonOp.Like_03,
    );
    return arrDnFuncMapId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000373)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      vDnFuncMap_SimEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}

/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:20210705230650
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function vDnFuncMap_SimEx_SortFunByInDataNodeName(
  a: clsvDnFuncMap_SimENEx,
  b: clsvDnFuncMap_SimENEx,
): number {
  return a.inDataNodeName.localeCompare(b.inDataNodeName);
}

/**
 * 根据DataNodeId获取对象，并且把UsedTimes加1
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strDnFuncMapId: 结点映射Id
 * @param strPrjId: 工程Id
 * @returns 获取的相应对象列表
 */
export async function vDnFuncMap_SimEx_GetObjByDnFuncMapIdEx(
  strDnFuncMapId: string,
  strPrjId: string,
): Promise<clsvDnFuncMap_SimEN> {
  const strThisFuncName = vDnFuncMap_SimEx_GetObjByDnFuncMapIdEx.name;
  const strAction = 'GetObjByDnFuncMapIdEx';
  const strUrl = vDnFuncMap_SimEx_GetWebApiUrl(vDnFuncMap_SimEx_Controller, strAction);
  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strDnFuncMapId,
      strPrjId,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObj = data.returnObj;
      //console.log(returnObj);
      return returnObj;
    } else {
      console.error(data.errorMsg);
      throw data.errorMsg;
    }
  } catch (error: any) {
    console.error(error);
    if (error.statusText == undefined) {
      throw error;
    }
    if (error.statusText == 'error') {
      const strInfo = Format(
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        vDnFuncMap_SimEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        vDnFuncMap_SimEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

/**
 * 根据关键字获取相关对象, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache)
 * @param strDnFuncMapId:所给的关键字
 * @returns 对象
 */
export async function vDnFuncMap_SimEx_GetObjByDnFuncMapIdCache(
  strDnFuncMapId: string,
  strPrjId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByDnFuncMapIdCache';

  if (IsNullOrEmpty(strDnFuncMapId) == true) {
    const strMsg = Format(
      '参数:[strDnFuncMapId]不能为空!(In clsvDnFuncMap_SimWApi.GetObjByDnFuncMapIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strDnFuncMapId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strDnFuncMapId]的长度:[{0}]不正确!(clsvDnFuncMap_SimWApi.GetObjByDnFuncMapIdCache)',
      strDnFuncMapId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrvDnFuncMap_SimObjLstCache = await vDnFuncMap_Sim_GetObjLstCache(strPrjId);
  try {
    const arrvDnFuncMap_SimSel = arrvDnFuncMap_SimObjLstCache.filter(
      (x) => x.dnFuncMapId == strDnFuncMapId,
    );
    let objvDnFuncMap_Sim: clsvDnFuncMap_SimEN;
    if (arrvDnFuncMap_SimSel.length > 0) {
      objvDnFuncMap_Sim = arrvDnFuncMap_SimSel[0];
      return objvDnFuncMap_Sim;
    } else {
      if (bolTryAsyncOnce == true) {
        const objvDnFuncMap_SimConst = await vDnFuncMap_SimEx_GetObjByDnFuncMapIdEx(
          strDnFuncMapId,
          strPrjId,
        );
        if (objvDnFuncMap_SimConst != null) {
          vDnFuncMap_Sim_ReFreshThisCache(strPrjId);
          return objvDnFuncMap_SimConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strDnFuncMapId,
      vDnFuncMap_SimEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2024-10-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 @param strPrjId:缓存的分类字段
 * @returns 返回一个输出字段值
*/
export async function vDnFuncMap_SimEx_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
  strPrjIdClassfy: string,
) {
  //const strThisFuncName = "func";

  if (IsNullOrEmpty(strPrjIdClassfy) == true) {
    const strMsg = Format('参数:[strPrjIdClassfy]不能为空!(In clsvDnFuncMap_SimWApi.func)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjIdClassfy.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjIdClassfy]的长度:[{0}]不正确!(clsvDnFuncMap_SimWApi.func)',
      strPrjIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName != clsvDnFuncMap_SimEN.con_DnFuncMapId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsvDnFuncMap_SimEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsvDnFuncMap_SimEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strDnFuncMapId = strInValue;
  if (IsNullOrEmpty(strDnFuncMapId) == true) {
    return '';
  }
  const objvDnFuncMap_Sim = await vDnFuncMap_SimEx_GetObjByDnFuncMapIdEx(
    strDnFuncMapId,
    strPrjIdClassfy,
  );
  if (objvDnFuncMap_Sim == null) return '';
  if (objvDnFuncMap_Sim.GetFldValue(strOutFldName) == null) return '';
  return objvDnFuncMap_Sim.GetFldValue(strOutFldName).toString();
}

export async function vDnFuncMap_SimEx_GetObjLstByOutDataNodeIdCacheEx(
  strOutDataNodeId: number,
  strPrjId: string,
  bolTryAsyncOnce = true,
): Promise<Array<clsvDnFuncMap_SimEN> | null> {
  const strThisFuncName = 'GetObjLstByOutDataNodeIdCacheEx';

  if (strOutDataNodeId == 0) {
    const strMsg = Format(
      '参数:[strOutDataNodeId]不能为空!(In clsvDnFuncMap_SimWApi.GetObjByDnFuncMapIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }

  const arrvDnFuncMap_SimObjLstCache = await vDnFuncMap_Sim_GetObjLstCache(strPrjId);
  try {
    const arrvDnFuncMap_SimSel = arrvDnFuncMap_SimObjLstCache.filter(
      (x) => x.outDataNodeId == strOutDataNodeId,
    );

    if (arrvDnFuncMap_SimSel.length > 0) {
      return arrvDnFuncMap_SimSel;
    } else {
      if (bolTryAsyncOnce == true) {
        const arrvDnFuncMap_Sim = await vDnFuncMap_SimEx_GetObjLstByOutDataNodeIdEx(
          strOutDataNodeId,
        );
        if (arrvDnFuncMap_Sim.length > 0) {
          vDnFuncMap_Sim_ReFreshThisCache(strPrjId);
          return arrvDnFuncMap_Sim;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据Out结点Id:[{1}]获取相应的对象列表不成功!(in {2}.{3})',
      e,
      strOutDataNodeId,
      vDnFuncMap_SimEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据OutDataNodeId获取对象列表，并且把UsedTimes加1
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strOutDataNodeId: Out结点Id
 * @returns 获取的相应对象列表
 */
export async function vDnFuncMap_SimEx_GetObjLstByOutDataNodeIdEx(
  strOutDataNodeId: number,
): Promise<Array<clsvDnFuncMap_SimEN>> {
  const strThisFuncName = vDnFuncMap_SimEx_GetObjLstByOutDataNodeIdEx.name;
  const strAction = 'GetObjLstByOutDataNodeIdEx';
  const strUrl = vDnFuncMap_SimEx_GetWebApiUrl(vDnFuncMap_SimEx_Controller, strAction);
  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strOutDataNodeId,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      //console.log(returnObjLst);
      return returnObjLst;
    } else {
      console.error(data.errorMsg);
      throw data.errorMsg;
    }
  } catch (error: any) {
    console.error(error);
    if (error.statusText == undefined) {
      throw error;
    }
    if (error.statusText == 'error') {
      const strInfo = Format(
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        vDnFuncMap_SimEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        vDnFuncMap_SimEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

/**
 * 根据InDataNodeId获取对象列表，并且把UsedTimes加1
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strInDataNodeId: Out结点Id
 * @returns 获取的相应对象列表
 */
export async function vDnFuncMap_SimEx_GetObjLstByInDataNodeIdEx(
  strInDataNodeId: number,
): Promise<Array<clsvDnFuncMap_SimEN>> {
  const strThisFuncName = vDnFuncMap_SimEx_GetObjLstByInDataNodeIdEx.name;
  const strAction = 'GetObjLstByInDataNodeIdEx';
  const strUrl = vDnFuncMap_SimEx_GetWebApiUrl(vDnFuncMap_SimEx_Controller, strAction);
  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strInDataNodeId,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      //console.log(returnObjLst);
      return returnObjLst;
    } else {
      console.error(data.errorMsg);
      throw data.errorMsg;
    }
  } catch (error: any) {
    console.error(error);
    if (error.statusText == undefined) {
      throw error;
    }
    if (error.statusText == 'error') {
      const strInfo = Format(
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        vDnFuncMap_SimEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        vDnFuncMap_SimEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

export async function vDnFuncMap_SimEx_GetObjLstByInDataNodeIdCacheEx(
  strInDataNodeId: number,
  strPrjId: string,
  bolTryAsyncOnce = true,
): Promise<Array<clsvDnFuncMap_SimEN> | null> {
  const strThisFuncName = 'GetObjLstByInDataNodeIdCacheEx';

  if (strInDataNodeId == 0) {
    const strMsg = Format(
      '参数:[strInDataNodeId]不能为空!(In clsvDnFuncMap_SimWApi.GetObjByDnFuncMapIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }

  const arrvDnFuncMap_SimObjLstCache = await vDnFuncMap_Sim_GetObjLstCache(strPrjId);
  try {
    const arrvDnFuncMap_SimSel = arrvDnFuncMap_SimObjLstCache.filter(
      (x) => x.inDataNodeId == strInDataNodeId,
    );

    if (arrvDnFuncMap_SimSel.length > 0) {
      return arrvDnFuncMap_SimSel;
    } else {
      if (bolTryAsyncOnce == true) {
        const arrvDnFuncMap_Sim = await vDnFuncMap_SimEx_GetObjLstByInDataNodeIdEx(strInDataNodeId);
        if (arrvDnFuncMap_Sim.length > 0) {
          vDnFuncMap_Sim_ReFreshThisCache(strPrjId);
          return arrvDnFuncMap_Sim;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据Out结点Id:[{1}]获取相应的对象列表不成功!(in {2}.{3})',
      e,
      strInDataNodeId,
      vDnFuncMap_SimEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

export async function vDnFuncMap_SimEx_GetObjByInOutDataNodeIdCacheEx(
  strInDataNodeId: number,
  strOutDataNodeId: number,
  strPrjId: string,
): Promise<clsvDnFuncMap_Sim | null> {
  const strThisFuncName = vDnFuncMap_SimEx_GetObjByInOutDataNodeIdCacheEx.name;
  const arrvDnFuncMap_SimObjLstCache = await vDnFuncMap_Sim_GetObjLstCache(strPrjId);
  try {
    const objvDnFuncMap_Sim = arrvDnFuncMap_SimObjLstCache.find(
      (x) => x.inDataNodeId === strInDataNodeId && x.outDataNodeId === strOutDataNodeId,
    );
    if (objvDnFuncMap_Sim != null) return objvDnFuncMap_Sim;

    const objvDnFuncMap_SimEN = await vDnFuncMap_SimEx_GetObjByInOutDataNodeIdEx(
      strInDataNodeId,
      strOutDataNodeId,
    );
    if (objvDnFuncMap_SimEN == null) return null;

    vDnFuncMap_Sim_ReFreshThisCache(strPrjId);
    return objvDnFuncMap_SimEN;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据Out结点Id:[{1}]获取相应的对象列表不成功!(in {2}.{3})',
      e,
      strInDataNodeId,
      vDnFuncMap_SimEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据In-OutDataNodeId获取对象，并且把UsedTimes加1
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strInDataNodeId: In结点Id
 * @param strOutDataNodeId: Out结点Id
 * @returns 获取的相应对象列表
 */
export async function vDnFuncMap_SimEx_GetObjByInOutDataNodeIdEx(
  strInDataNodeId: number,
  strOutDataNodeId: number,
): Promise<clsvDnFuncMap_SimEN | null> {
  const strThisFuncName = vDnFuncMap_SimEx_GetObjByInOutDataNodeIdEx.name;
  const strAction = 'GetObjByInOutDataNodeIdEx';
  const strUrl = vDnFuncMap_SimEx_GetWebApiUrl(vDnFuncMap_SimEx_Controller, strAction);
  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strInDataNodeId,
      strOutDataNodeId,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObj = data.returnObj;
      //console.log(returnObj);
      if (returnObj == null) {
        return null;
      }
      return returnObj;
    } else {
      console.error(data.errorMsg);
      throw data.errorMsg;
    }
  } catch (error: any) {
    console.error(error);
    if (error.statusText == undefined) {
      throw error;
    }
    if (error.statusText == 'error') {
      const strInfo = Format(
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        vDnFuncMap_SimEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        vDnFuncMap_SimEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

export function vDnFuncMap_SimEx_GetDataNodeNum(
  arrvDnFuncMap_Sim: Array<clsvDnFuncMap_SimEN>,
): number {
  const arrDataNodeNum = arrvDnFuncMap_Sim.map((x) => x.inDataNodeId);
  const arrDataNodeNum2 = arrvDnFuncMap_Sim.map((x) => x.outDataNodeId);
  const arrDataNodeNum3 = arrDataNodeNum.concat(arrDataNodeNum2);
  const arrDataNodeNum4 = Array.from(new Set(arrDataNodeNum3));
  return arrDataNodeNum4.length;
}

export function vDnFuncMap_SimEx_GetDataNodeLst(
  arrvDnFuncMap_Sim: Array<clsvDnFuncMap_SimEN>,
): Array<number> {
  const arrDataNodeNum = arrvDnFuncMap_Sim.map((x) => x.inDataNodeId);
  const arrDataNodeNum2 = arrvDnFuncMap_Sim.map((x) => x.outDataNodeId);
  const arrDataNodeNum3 = arrDataNodeNum.concat(arrDataNodeNum2);
  const arrDataNodeNum4 = Array.from(new Set(arrDataNodeNum3));
  return arrDataNodeNum4;
}

export async function vDnFuncMap_SimEx_FuncMapMapDescription(
  objvDnFuncMap_Sim: clsvDnFuncMap_SimENEx,
) {
  const strThisFuncName = vDnFuncMap_SimEx_FuncMapMapDescription.name;
  try {
    if (IsNullOrEmpty(objvDnFuncMap_Sim.mapDescription) == true) {
      switch (objvDnFuncMap_Sim.funcMapModeId) {
        case enumFuncMapMode.Table_01:
          vDnFuncMap_SimEx_FuncMapTabName(objvDnFuncMap_Sim);
          vDnFuncMap_SimEx_FuncMapAssociationMappingName(objvDnFuncMap_Sim);

          objvDnFuncMap_Sim.mapDescription = `表:${objvDnFuncMap_Sim.tabName}(${objvDnFuncMap_Sim.associationMappingName})`;
          break;
        case enumFuncMapMode.Function_02:
          vDnFuncMap_SimEx_FuncMapDnFunctionName(objvDnFuncMap_Sim);
          vDnFuncMap_SimEx_FuncMapAssociationMappingName(objvDnFuncMap_Sim);

          objvDnFuncMap_Sim.mapDescription = `函数:${objvDnFuncMap_Sim.dnFunctionName}(${objvDnFuncMap_Sim.associationMappingName})`;
          break;
        default:
          objvDnFuncMap_Sim.mapDescription = '';
          break;
      }
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000285)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      vDnFuncMap_SimEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
