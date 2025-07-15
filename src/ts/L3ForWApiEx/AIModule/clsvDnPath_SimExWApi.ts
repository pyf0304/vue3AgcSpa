import { usevDataNode_SimStore } from '@/store/modules/vDataNode_Sim';

import { clsvDnPath_SimEN } from '@/ts/L0Entity/AIModule/clsvDnPath_SimEN';
import { clsvDnPath_SimENEx } from '@/ts/L0Entity/AIModule/clsvDnPath_SimENEx';

import { clsvPrjTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvPrjTab_SimEN';

import {
  vDnPath_Sim_GetObjLstCache,
  vDnPath_Sim_SortFunByKey,
} from '@/ts/L3ForWApi/AIModule/clsvDnPath_SimWApi';
import { vFieldTab_Sim_GetNameByFldIdCache } from '@/ts/L3ForWApi/Table_Field/clsvFieldTab_SimWApi';

import { vPrjTab_Sim_func } from '@/ts/L3ForWApi/Table_Field/clsvPrjTab_SimWApi';
import {
  vDataNode_SimEx_GetFldIdByDataNodeIdCacheEx,
  vDataNode_SimEx_GetObjByDataNodeIdCacheEx,
  vDataNode_SimEx_GetTabIdByDataNodeIdCacheEx,
} from '@/ts/L3ForWApiEx/AIModule/clsvDataNode_SimExWApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';

export const vDnPath_SimEx_Controller = 'vDnPath_SimExApi';
export const vDnPath_SimEx_ConstructorName = 'vDnPath_SimEx';
/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_CopyToEx)
 * @param objvDnPath_SimENS:源对象
 * @returns 目标对象=>clsvDnPath_SimEN:objvDnPath_SimENT
 **/
export function vDnPath_SimEx_CopyToEx(objvDnPath_SimENS: clsvDnPath_SimEN): clsvDnPath_SimENEx {
  const strThisFuncName = vDnPath_SimEx_CopyToEx.name;
  const objvDnPath_SimENT = new clsvDnPath_SimENEx();
  try {
    ObjectAssign(objvDnPath_SimENT, objvDnPath_SimENS);
    return objvDnPath_SimENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      vDnPath_SimEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objvDnPath_SimENT;
  }
}

/// <summary>
/// 根据输入结点获取Dn路径, 从缓存的对象列表中获取.
/// </summary>
/// <param name = "strInDataNodeId">In结点</param>
/// <param name = "strCmPrjId">缓存的分类字段</param>
/// <returns>根据输入结点获取的对象列表</returns>
export async function vDnPath_SimEx_GetObjLstByInDataNodeIdCacheEx(
  strInDataNodeId: number,
  strInTabId: string,
  strPrjId: string,
): Promise<Array<clsvDnPath_SimEN>> {
  //获取缓存中的对象列表
  // const strThisFuncName = 'GetObjByInOutDataNodeIdCacheEx';
  const arrDnPathObjLstCache = await vDnPath_Sim_GetObjLstCache(strPrjId);
  const arrDnPathObjLst_Sel = arrDnPathObjLstCache.filter((x) => x.inDataNodeId == strInDataNodeId);
  return arrDnPathObjLst_Sel;
}

export async function vDnPath_SimEx_GetObjLstByInTabIdCacheEx(
  strInTabId: string,
  strPrjId: string,
): Promise<Array<clsvDnPath_SimEN>> {
  const vDataNode_SimStore = usevDataNode_SimStore();
  //获取缓存中的对象列表
  // const strThisFuncName = 'vDnPath_SimEx_GetObjLstByInTabIdCacheEx';
  const arrDnPathObjLstCache = await vDnPath_Sim_GetObjLstCache(strPrjId);
  const arrDataNodeId = await vDataNode_SimStore.getDataNodeIdLstByTabId(strInTabId);
  const arrDnPathObjLst_Sel = arrDnPathObjLstCache.filter(
    (x) => arrDataNodeId.indexOf(x.inDataNodeId) > -1,
  );
  return arrDnPathObjLst_Sel;
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:潘以锋
 * 日期:00-00-00
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function vDnPath_SimEx_FuncMapByFldName(
  strFldName: string,
  objvDnPath_SimEx: clsvDnPath_SimENEx,
) {
  const strThisFuncName = vDnPath_SimEx_FuncMapByFldName.name;
  let strMsg = '';
  //如果是本表中字段，不需要映射
  const arrFldName = clsvDnPath_SimEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsvDnPath_SimENEx.con_OutTabName:
      return vDnPath_SimEx_FuncMap_OutTabName(objvDnPath_SimEx);
    case clsvDnPath_SimENEx.con_OutFldId:
      return vDnPath_SimEx_FuncMap_OutFldId(objvDnPath_SimEx);
    case clsvDnPath_SimENEx.con_OutFldName:
      return vDnPath_SimEx_FuncMap_OutFldName(objvDnPath_SimEx);
    case clsvDnPath_SimENEx.con_InFldName:
      return vDnPath_SimEx_FuncMap_InFldName(objvDnPath_SimEx);
    case clsvDnPath_SimENEx.con_InFldId:
      return vDnPath_SimEx_FuncMap_InFldId(objvDnPath_SimEx);
    default:
      strMsg = Format(
        '扩展字段:[{0}]在字段值函数映射中不存在！(in {1})',
        strFldName,
        strThisFuncName,
      );
      console.error(strMsg);
  }
}

export async function vDnPath_SimEx_FuncMap_OutFldId(objvDnPath_Sim: clsvDnPath_SimENEx) {
  const strThisFuncName = vDnPath_SimEx_FuncMap_OutFldId.name;
  try {
    if (IsNullOrEmpty(objvDnPath_Sim.outFldId) == true) {
      const objOutDataNode = await vDataNode_SimEx_GetObjByDataNodeIdCacheEx(
        objvDnPath_Sim.outDataNodeId,
        objvDnPath_Sim.prjId,
      );
      if (objOutDataNode != null) {
        objvDnPath_Sim.outFldId = objOutDataNode.fldId;
      }
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000094)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      vDnPath_SimEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objvDnPath_SimS:源对象
 **/
export async function vDnPath_SimEx_FuncMap_InFldId(objvDnPath_Sim: clsvDnPath_SimENEx) {
  const strThisFuncName = vDnPath_SimEx_FuncMap_InFldId.name;
  const vDataNode_SimStore = usevDataNode_SimStore();
  try {
    if (IsNullOrEmpty(objvDnPath_Sim.inFldId) == true) {
      const vDataNode_SimDataNodeId = objvDnPath_Sim.inDataNodeId;
      const vDataNode_SimFldId = await vDataNode_SimStore.getFldId(vDataNode_SimDataNodeId);
      objvDnPath_Sim.inFldId = vDataNode_SimFldId;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000247)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      vDnPath_SimEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

export async function vDnPath_SimEx_GetInOutFldNameLstByInTabId(
  strTabId: string,
  strPrjId: string,
) {
  const strThisFuncName = vDnPath_SimEx_GetInOutFldNameLstByInTabId.name;
  try {
    //const strWhereCond = Format(" and InDataNodeId in (select DataNodeid from DataNode where TabId = '{0}')", strTabId);
    //const arrDnPath = await vDnPath_Sim_GetObjLstCache(strCmPrjId);
    //        const arrDnPath = await vDnPath_Sim_GetObjLstCache(strCmPrjId);
    const arrDnPath = await vDnPath_SimEx_GetObjLstByInTabIdCacheEx(strTabId, strPrjId);
    const arrDnPathEx = arrDnPath.map(vDnPath_SimEx_CopyToEx);
    for (const objInFor of arrDnPathEx) {
      await vDnPath_SimEx_FuncMap_OutFldName(objInFor);
      await vDnPath_SimEx_FuncMap_InFldName(objInFor);
      await vDnPath_SimEx_FuncMap_OutTabName(objInFor);

      //if (IsNullOrEmpty(objInFor.outFldName) == true) {
      //    const objOutDn = await vDataNode_SimEx_GetObjByDataNodeIdCach1e(objInFor.outDataNodeId, objInFor.cmPrjId);
      //    if (objOutDn == null) continue;
      //    const objFieldTab = await vFieldTab_SimEx_GetObjByFldIdCache(objOutDn.fldId, objInFor.prjId);
      //    if (objFieldTab == null) continue;
      //    objInFor.outFldName = objFieldTab.fldName;
      //}
      //if (IsNullOrEmpty(objInFor.outTabName) == true) {
      //    const objOutDn = await vDataNode_SimEx_GetObjByDataNodeIdCach1e(objInFor.outDataNodeId, objInFor.cmPrjId);
      //    if (objOutDn == null) continue;
      //    const objPrjTab = await vPrjTab_SimEx_GetObjByTabIdCache(objOutDn.tabId, objInFor.cmPrjId);
      //    if (objPrjTab == null) continue;
      //    objInFor.outTabName = objPrjTab.tabName;
      //}
      //if (IsNullOrEmpty(objInFor.inFldName) == true) {
      //    const objInDn = await vDataNode_SimEx_GetObjByDataNodeIdCach1e(objInFor.inDataNodeId, objInFor.cmPrjId);
      //    if (objInDn == null) continue;
      //    const objFieldTab = await vFieldTab_SimEx_GetObjByFldIdCache(objInDn.fldId, objInFor.prjId);
      //    if (objFieldTab == null) continue;
      //    objInFor.inFldName = objFieldTab.fldName;
      //}
    }
    let arrOutFldName: Array<string> = [];
    for (const objInFor of arrDnPathEx) {
      const strInOutFldName = Format(
        "<span class='text-info'>{0}</span>-><span title='out表名:{1}' class='text-primary'>{2}</span>",
        objInFor.inFldName,
        objInFor.outTabName,
        objInFor.outFldName,
      );
      if (
        IsNullOrEmpty(objInFor.outFldName) == false &&
        arrOutFldName.indexOf(strInOutFldName) == -1
      ) {
        arrOutFldName.push(strInOutFldName);
      }
    }
    arrOutFldName = arrOutFldName.sort();
    return arrOutFldName;
    //const strOutFldName = arrOutFldName.join(',');
    //return strOutFldName;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000248)根据表Id获取路径Out字段名列表出错,{0}.(in {1}.{2})',
      e,
      vDnPath_SimEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

export async function vDnPath_SimEx_GetPathIdAndFldIdByOutFldName(
  strOutFldName: string,
  strTabId: string,
  strPrjId: string,
) {
  const strThisFuncName = vDnPath_SimEx_GetPathIdAndFldIdByOutFldName.name;
  try {
    const arrDnPath = await vDnPath_SimEx_GetObjLstByInTabIdCacheEx(strTabId, strPrjId);
    const arrDnPathEx = arrDnPath.map(vDnPath_SimEx_CopyToEx);
    for (const objInFor of arrDnPathEx) {
      await vDnPath_SimEx_FuncMap_OutFldName(objInFor);
      await vDnPath_SimEx_FuncMap_OutFldId(objInFor);
      await vDnPath_SimEx_FuncMap_InFldName(objInFor);
      await vDnPath_SimEx_FuncMap_OutTabName(objInFor);
    }
    // const arrOutFldName: Array<string> = [];
    for (const objInFor of arrDnPathEx) {
      if (objInFor.outFldName == strOutFldName) {
        const obj = {
          outFldId: objInFor.outFldId,
          dnPathId: objInFor.dnPathId,
        };
        return obj;
      }
    }
    return null;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000248)根据表Id获取路径Out字段名列表出错,{0}.(in {1}.{2})',
      e,
      vDnPath_SimEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objvDnPath_SimS:源对象
 **/
export async function vDnPath_SimEx_FuncMap_OutFldName(objvDnPath_Sim: clsvDnPath_SimENEx) {
  const strThisFuncName = vDnPath_SimEx_FuncMap_OutFldName.name;
  try {
    if (IsNullOrEmpty(objvDnPath_Sim.outFldName) == true) {
      const vDataNode_SimDataNodeId = objvDnPath_Sim.outDataNodeId;
      const vDataNode_SimFldId = await vDataNode_SimEx_GetFldIdByDataNodeIdCacheEx(
        vDataNode_SimDataNodeId,
        objvDnPath_Sim.prjId,
      );
      const vFieldTab_Sim_FldId = vDataNode_SimFldId;
      const vFieldTab_Sim_FldName = await vFieldTab_Sim_GetNameByFldIdCache(
        vFieldTab_Sim_FldId,
        objvDnPath_Sim.prjId,
      );
      objvDnPath_Sim.outFldName = vFieldTab_Sim_FldName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000176)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      vDnPath_SimEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objvDnPath_SimS:源对象
 **/
export async function vDnPath_SimEx_FuncMap_InFldName(objvDnPath_Sim: clsvDnPath_SimENEx) {
  const strThisFuncName = vDnPath_SimEx_FuncMap_InFldName.name;
  const vDataNode_SimStore = usevDataNode_SimStore();
  try {
    if (IsNullOrEmpty(objvDnPath_Sim.inFldName) == true) {
      const vDataNode_SimDataNodeId = objvDnPath_Sim.inDataNodeId;
      const vDataNode_SimFldId = await vDataNode_SimStore.getFldId(vDataNode_SimDataNodeId);
      const vFieldTab_Sim_FldId = vDataNode_SimFldId;
      const vFieldTab_Sim_FldName = await vFieldTab_Sim_GetNameByFldIdCache(
        vFieldTab_Sim_FldId,
        objvDnPath_Sim.prjId,
      );
      objvDnPath_Sim.inFldName = vFieldTab_Sim_FldName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000241)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      vDnPath_SimEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objvDnPath_SimS:源对象
 **/
export async function vDnPath_SimEx_FuncMap_OutTabName(objvDnPath_Sim: clsvDnPath_SimENEx) {
  const strThisFuncName = vDnPath_SimEx_FuncMap_OutTabName.name;
  try {
    if (IsNullOrEmpty(objvDnPath_Sim.outTabName) == true) {
      const vDataNode_SimDataNodeId = objvDnPath_Sim.outDataNodeId;
      const vDataNode_SimTabId = await vDataNode_SimEx_GetTabIdByDataNodeIdCacheEx(
        vDataNode_SimDataNodeId,
        objvDnPath_Sim.prjId,
      );
      const vPrjTab_Sim_TabId = vDataNode_SimTabId;
      const vPrjTab_Sim_TabName = await vPrjTab_Sim_func(
        clsvPrjTab_SimEN.con_TabId,
        clsvPrjTab_SimEN.con_TabName,
        vPrjTab_Sim_TabId,
        clsPrivateSessionStorage.currSelPrjId,
      );
      objvDnPath_Sim.outTabName = vPrjTab_Sim_TabName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000249)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      vDnPath_SimEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:潘以锋
 * 日期:00-00-00
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function vDnPath_SimEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsvDnPath_SimENEx.con_OutTabName:
        return (a: clsvDnPath_SimENEx, b: clsvDnPath_SimENEx) => {
          return a.outTabName.localeCompare(b.outTabName);
        };
      case clsvDnPath_SimENEx.con_OutFldId:
        return (a: clsvDnPath_SimENEx, b: clsvDnPath_SimENEx) => {
          return a.outFldId.localeCompare(b.outFldId);
        };
      case clsvDnPath_SimENEx.con_OutFldName:
        return (a: clsvDnPath_SimENEx, b: clsvDnPath_SimENEx) => {
          return a.outFldName.localeCompare(b.outFldName);
        };
      case clsvDnPath_SimENEx.con_InFldName:
        return (a: clsvDnPath_SimENEx, b: clsvDnPath_SimENEx) => {
          return a.inFldName.localeCompare(b.inFldName);
        };
      case clsvDnPath_SimENEx.con_InTabId:
        return (a: clsvDnPath_SimENEx, b: clsvDnPath_SimENEx) => {
          return a.inTabId.localeCompare(b.inTabId);
        };
      case clsvDnPath_SimENEx.con_InFldId:
        return (a: clsvDnPath_SimENEx, b: clsvDnPath_SimENEx) => {
          return a.inFldId.localeCompare(b.inFldId);
        };

      default:
        return vDnPath_Sim_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsvDnPath_SimENEx.con_OutTabName:
        return (a: clsvDnPath_SimENEx, b: clsvDnPath_SimENEx) => {
          return b.outTabName.localeCompare(a.outTabName);
        };
      case clsvDnPath_SimENEx.con_OutFldId:
        return (a: clsvDnPath_SimENEx, b: clsvDnPath_SimENEx) => {
          return b.outFldId.localeCompare(a.outFldId);
        };
      case clsvDnPath_SimENEx.con_OutFldName:
        return (a: clsvDnPath_SimENEx, b: clsvDnPath_SimENEx) => {
          return b.outFldName.localeCompare(a.outFldName);
        };
      case clsvDnPath_SimENEx.con_InFldName:
        return (a: clsvDnPath_SimENEx, b: clsvDnPath_SimENEx) => {
          return b.inFldName.localeCompare(a.inFldName);
        };
      case clsvDnPath_SimENEx.con_InTabId:
        return (a: clsvDnPath_SimENEx, b: clsvDnPath_SimENEx) => {
          return b.inTabId.localeCompare(a.inTabId);
        };
      case clsvDnPath_SimENEx.con_InFldId:
        return (a: clsvDnPath_SimENEx, b: clsvDnPath_SimENEx) => {
          return b.inFldId.localeCompare(a.inFldId);
        };

      default:
        return vDnPath_Sim_SortFunByKey(strKey, AscOrDesc);
    }
  }
}
