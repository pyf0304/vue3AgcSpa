import axios from 'axios';
import { PrjTabFldEx_GetObjByFldIdCache } from '../Table_Field/clsPrjTabFldExWApi';
import { DataNodeTypeEx_GetDefaDataNodeTypeByPrjTabFld } from './clsDataNodeTypeExWApi';
import {
  DataNodeEx_CreateObjByTabIdAndFldId,
  DataNodeEx_CreateObjByTabIdAndKeyFldLst,
} from './clsDataNodeExWApi';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { clsvDataNode_SimEN } from '@/ts/L0Entity/AIModule/clsvDataNode_SimEN';
import { clsvDataNode_SimENEx } from '@/ts/L0Entity/AIModule/clsvDataNode_SimENEx';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { clsDataNodeEN } from '@/ts/L0Entity/AIModule/clsDataNodeEN';
import {
  vDataNode_Sim_GetFirstObjAsync,
  vDataNode_Sim_GetObjLstCache,
  vDataNode_Sim_GetRecCountByCondAsync,
  vDataNode_Sim_IsExistRecordAsync,
  vDataNode_Sim_ReFreshThisCache,
} from '@/ts/L3ForWApi/AIModule/clsvDataNode_SimWApi';
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { getTdObjByIdInDivObj } from '@/ts/PubFun/clsCommFunc4Ctrl';

import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { clsvDataNode_Sim } from '@/ts/L0Entity/AIModule/clsvDataNode_Sim';
import { usevDataNode_SimStore } from '@/store/modules/vDataNode_Sim';
import { GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import {
  vFieldTab_Sim_func,
  vFieldTab_Sim_GetNameByFldIdCache,
} from '@/ts/L3ForWApi/Table_Field/clsvFieldTab_SimWApi';
import { clsvFieldTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvFieldTab_SimEN';
import { DataNodeType_func } from '@/ts/L3ForWApi/AIModule/clsDataNodeTypeWApi';
import { clsDataNodeTypeEN } from '@/ts/L0Entity/AIModule/clsDataNodeTypeEN';
import { usevPrjTab_SimStore } from '@/store/modules/vPrjTab_Sim';

export const vDataNode_SimEx_Controller = 'vDataNode_SimExApi';
export const vDataNode_SimEx_ConstructorName = 'vDataNode_SimEx';
/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_CopyToEx)
 * @param objvDataNode_SimENS:源对象
 * @returns 目标对象=>clsvDataNode_SimEN:objvDataNode_SimENT
 */
export function vDataNode_SimEx_CopyToEx(
  objvDataNode_SimENS: clsvDataNode_SimEN,
): clsvDataNode_SimENEx {
  const objvDataNode_SimENT = new clsvDataNode_SimENEx();
  try {
    ObjectAssign(objvDataNode_SimENT, objvDataNode_SimENS);
    return objvDataNode_SimENT;
  } catch (e: any) {
    const strMsg = Format('(errid:Watl000066)Copy表对象数据出错,${e}.');
    console.error(strMsg);
    alert(strMsg);
    return objvDataNode_SimENT;
  }
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objvDataNode_SimENS:源对象
 * @param objvDataNode_SimENT:目标对象
 */
export function vDataNode_SimEx_CopyObjToEN(
  objDataNodeENS: clsDataNodeEN,
  objvDataNode_SimENT: clsvDataNode_SimEN,
): void {
  objvDataNode_SimENT.dataNodeId = objDataNodeENS.dataNodeId; //数据结点Id
  objvDataNode_SimENT.dataNodeName = objDataNodeENS.dataNodeName; //数据结点名
  objvDataNode_SimENT.tabId = objDataNodeENS.tabId; //表ID
  objvDataNode_SimENT.fldId = objDataNodeENS.fldId; //字段Id
  objvDataNode_SimENT.versionNo = objDataNodeENS.versionNo; //版本号
  //objvDataNode_SimENT.cmPrjId = objDataNodeENS.cmPrjId; //CM工程Id
  //objvDataNode_SimENT.sfUpdFldSetStr = objDataNodeENS.updFldString; //sfUpdFldSetStr
}

export function vDataNode_SimEx_CopyObjTo(
  objDataNodeENS: clsDataNodeEN,
  objvDataNode_SimENT: clsvDataNode_Sim,
): void {
  objvDataNode_SimENT.dataNodeId = objDataNodeENS.dataNodeId; //数据结点Id
  objvDataNode_SimENT.dataNodeName = objDataNodeENS.dataNodeName; //数据结点名
  objvDataNode_SimENT.tabId = objDataNodeENS.tabId; //表ID
  objvDataNode_SimENT.fldId = objDataNodeENS.fldId; //字段Id
  objvDataNode_SimENT.versionNo = objDataNodeENS.versionNo; //版本号
  //objvDataNode_SimENT.cmPrjId = objDataNodeENS.cmPrjId; //CM工程Id
  //objvDataNode_SimENT.sfUpdFldSetStr = objDataNodeENS.updFldString; //sfUpdFldSetStr
}

export async function vDataNode_SimEx_GetObjByTabIdAndFldId(
  strTabId: string,
  strFldId: string,
  intVersionNo: number,
): Promise<clsvDataNode_Sim | null> {
  const vDataNode_SimStore = usevDataNode_SimStore();
  const objvDataNode_Sim = await vDataNode_SimStore.getObjByTabIdFldId(
    strTabId,
    strFldId,
    intVersionNo,
  );

  if (objvDataNode_Sim != null) return objvDataNode_Sim;

  return null;
  //const objDataNode = await DataNodeEx_CreateObjByTabIdAndFldId(strTabId, strFldId, intVersionNo, strCmPrjId);
  //if (objDataNode == null) {
  //    const strMsg = Format("在CM项目:[{0}]中，表Id:[{1}], 字段Id:[{2}]没有相应数据结点，请检查！", clsPrivateSessionStorage.cmPrjName, strTabId, strFldId);
  //    console.error(strMsg);
  //    alert(strMsg);
  //    return null;
  //}
  //objvDataNode_Sim = new clsvDataNode_SimEN();
  //vDataNode_SimEx_CopyObjTo(objDataNode, objvDataNode_Sim);
  //return objvDataNode_Sim;
}

export function vDataNode_SimEx_ClearDnPath(divName4Edit: HTMLDivElement, strTdId: string) {
  const objTd = getTdObjByIdInDivObj(divName4Edit, strTdId);
  objTd.innerHTML = '';
}

export function GetDivId_DataNodeVersion(strDataNodeId: number, intVersionNo: number) {
  //const divLevel1: HTMLDivElement = document.createElement("div");
  //liLevel1.clsName = "li noselected";
  let strVersionNo = '';
  if (intVersionNo > 1) {
    strVersionNo = Format('V{0}', intVersionNo);
  }
  const strDivId = Format('divFieldNode_{0}{1}', strDataNodeId, strVersionNo);
  return strDivId;
}

export function GetDivId_FieldVersion(strFldId: string, intVersionNo: number) {
  //const divLevel1: HTMLDivElement = document.createElement("div");
  //liLevel1.clsName = "li noselected";
  let strVersionNo = '';
  if (intVersionNo > 1) {
    strVersionNo = Format('V{0}', intVersionNo);
  }
  const strDivId = Format('divFieldNode_{0}{1}', strFldId, strVersionNo);
  return strDivId;
}

export function GetDivId_DataNode(strDataNodeId: number) {
  //const divLevel1: HTMLDivElement = document.createElement("div");
  //liLevel1.clsName = "li noselected";
  //let strVersionNo = "";
  //if (intVersionNo > 1) {
  //    strVersionNo = Format("V{0}", intVersionNo);
  //}
  const strDivId = Format('divDataNode_{0}', strDataNodeId);
  return strDivId;
}
export async function vDataNode_SimEx_GetKeyIdByTabIdAndFldId(
  strTabId: string,
  strFldId: string,
  intVersionNo: number,
): Promise<number> {
  const vDataNode_SimStore = usevDataNode_SimStore();
  const objvDataNode_Sim = await vDataNode_SimStore.getObjByTabIdFldId(
    strTabId,
    strFldId,
    intVersionNo,
  );

  if (objvDataNode_Sim != null) return objvDataNode_Sim.dataNodeId;
  return 0;
}

export async function vDataNode_SimEx_GetKeyIdByDataNode(
  objvDataNode_SimEx: clsvDataNode_SimENEx,
): Promise<number> {
  if (objvDataNode_SimEx != null) return objvDataNode_SimEx.dataNodeId;

  //const strWhere = Format("{0}='{1}' and {2}='{3}' and {4}='{5}'",
  //    clsvDataNode_SimEN.con_TabId, strTabId,
  //    clsvDataNode_SimEN.con_FldId, strFldId,
  //    clsvDataNode_SimEN.con_CmPrjId, strCmPrjId);
  //const bolIsExistRecord = await vDataNode_Sim_IsExistRecordAsync(strWhere);
  //if (bolIsExistRecord == true) {
  //    vDataNode_Sim_ReFreshThisCache(strCmPrjId);
  //    const objvDataNode_SimEN = await vDataNode_Sim_GetFirstObjAsync(strWhere);
  //    if (objvDataNode_SimEN != null) {
  //        return objvDataNode_SimEN.dataNodeId;
  //    }
  //    else return '';
  //}
  return 0;
}

export async function vDataNode_SimEx_GetObjByTabIdAndFldIdByCreate(
  strTabId: string,
  strFldId: string,
  intVersionNo: number,
  strCmPrjId: string,
): Promise<clsvDataNode_Sim | null> {
  const vDataNode_SimStore = usevDataNode_SimStore();
  const objPrjTabFld = await PrjTabFldEx_GetObjByFldIdCache(strTabId, strFldId);
  const strDataNodeTypeId = DataNodeTypeEx_GetDefaDataNodeTypeByPrjTabFld(objPrjTabFld);

  let objvDataNode_Sim = await vDataNode_SimStore.getObjByTabIdFldId(
    strTabId,
    strFldId,
    intVersionNo,
  );

  if (objvDataNode_Sim != null) return objvDataNode_Sim;
  const strWhere = Format(
    "{0}='{1}' and {2}='{3}'",
    clsvDataNode_SimEN.con_TabId,
    strTabId,
    clsvDataNode_SimEN.con_FldId,
    strFldId,
  );
  const bolIsExistRecord = await vDataNode_Sim_IsExistRecordAsync(strWhere);
  if (bolIsExistRecord == true) {
    const objvDataNode_SimEN = await vDataNode_Sim_GetFirstObjAsync(strWhere);
    if (objvDataNode_SimEN != null) {
      vDataNode_SimStore.ReFreshByPrjId(clsPrivateSessionStorage.currSelPrjId);
      return objvDataNode_SimEN;
    }
  }
  const objDataNode = await DataNodeEx_CreateObjByTabIdAndFldId(
    strTabId,
    strFldId,
    strDataNodeTypeId,
    intVersionNo,
    strCmPrjId,
  );
  if (objDataNode == null) {
    const strMsg = Format(
      '在CM项目:[{0}]中，表Id:[{1}], 字段Id:[{2}]没有相应数据结点，请检查！',
      clsPrivateSessionStorage.cmPrjName,
      strTabId,
      strFldId,
    );
    console.error(strMsg);
    alert(strMsg);
    return null;
  }
  objvDataNode_Sim = new clsvDataNode_Sim();
  vDataNode_SimEx_CopyObjTo(objDataNode, objvDataNode_Sim);
  return objvDataNode_Sim;
}

export async function vDataNode_SimEx_GetObjByTabIdAndFldIdByCreateWithDataType(
  strTabId: string,
  strFldId: string,
  strDataNodeTypeId: string,
  intVersionNo: number,
  strCmPrjId: string,
): Promise<clsvDataNode_Sim | null> {
  const vDataNode_SimStore = usevDataNode_SimStore();
  let objvDataNode_Sim = await vDataNode_SimStore.getObjByTabIdFldId(
    strTabId,
    strFldId,
    intVersionNo,
  );

  if (objvDataNode_Sim != null) return objvDataNode_Sim;
  const strWhere = Format(
    "{0}='{1}' and {2}='{3}' ",
    clsvDataNode_SimEN.con_TabId,
    strTabId,
    clsvDataNode_SimEN.con_FldId,
    strFldId,
  );
  const bolIsExistRecord = await vDataNode_Sim_IsExistRecordAsync(strWhere);
  if (bolIsExistRecord == true) {
    const objvDataNode_SimEN = await vDataNode_Sim_GetFirstObjAsync(strWhere);
    if (objvDataNode_SimEN != null) {
      vDataNode_SimStore.ReFreshByPrjId(clsPrivateSessionStorage.currSelPrjId);
      return objvDataNode_SimEN;
    }
  }
  const objDataNode = await DataNodeEx_CreateObjByTabIdAndFldId(
    strTabId,
    strFldId,
    strDataNodeTypeId,
    intVersionNo,
    strCmPrjId,
  );
  if (objDataNode == null) {
    const strMsg = Format(
      '在CM项目:[{0}]中，表Id:[{1}], 字段Id:[{2}]没有相应数据结点，请检查！',
      clsPrivateSessionStorage.cmPrjName,
      strTabId,
      strFldId,
    );
    console.error(strMsg);
    alert(strMsg);
    return null;
  }
  objvDataNode_Sim = new clsvDataNode_SimEN();
  vDataNode_SimEx_CopyObjTo(objDataNode, objvDataNode_Sim);
  return objvDataNode_Sim;
}

export async function vDataNode_SimEx_GetObjByTabIdAndKeyIdLstByCreate(
  strTabId: string,
  strKeyIdLst: string,
  intVersionNo: number,
  strCmPrjId: string,
): Promise<clsvDataNode_Sim | null> {
  const vDataNode_SimStore = usevDataNode_SimStore();
  // const arrObjLst = await vDataNode_Sim_GetObjLstCache(strCmPrjId);

  // let objvDataNode_Sim = arrObjLst.find(
  //   (x) => x.tabId == strTabId && x.keyFldLst == strKeyIdLst && x.versionNo == intVersionNo,
  // );
  let objvDataNode_Sim = await vDataNode_SimStore.getObjByTabIdFldId(
    strTabId,
    strKeyIdLst,
    intVersionNo,
  );
  if (objvDataNode_Sim != null) return objvDataNode_Sim;
  const strWhere = Format(
    "{0}='{1}' and {2}='{3}'",
    clsvDataNode_SimEN.con_TabId,
    strTabId,
    clsvDataNode_SimEN.con_KeyFldLst,
    strKeyIdLst,
  );
  const bolIsExistRecord = await vDataNode_Sim_IsExistRecordAsync(strWhere);
  if (bolIsExistRecord == true) {
    const objvDataNode_SimEN = await vDataNode_Sim_GetFirstObjAsync(strWhere);
    if (objvDataNode_SimEN != null) {
      vDataNode_SimStore.ReFreshByPrjId(clsPrivateSessionStorage.currSelPrjId);
      return objvDataNode_SimEN;
    }
  }
  const objDataNode = await DataNodeEx_CreateObjByTabIdAndKeyFldLst(
    strTabId,
    strKeyIdLst,
    intVersionNo,
    strCmPrjId,
  );
  if (objDataNode == null) {
    const strMsg = Format(
      '在CM项目:[{0}]中，表Id:[{1}], 字段Id列表:[{2}]没有相应数据结点，请检查！',
      clsPrivateSessionStorage.cmPrjName,
      strTabId,
      strKeyIdLst,
    );
    console.error(strMsg);
    alert(strMsg);
    return null;
  }
  objvDataNode_Sim = new clsvDataNode_Sim();
  vDataNode_SimEx_CopyObjTo(objDataNode, objvDataNode_Sim);
  return objvDataNode_Sim;
}

// export async function vDataNode_SimEx_GetObjLstByTabIdCache(strCmPrjId: string, strTabId: string) {
//   try {
//     let arrDataNode = await vDataNode_Sim_GetObjLstCache(strCmPrjId);
//     arrDataNode = arrDataNode.filter((x) => x.tabId == strTabId);
//     return arrDataNode;
//   } catch (e: any) {
//     console.error(e);
//     const strMsg = Format('在获取表:[{0}]的结点对象列表时出错:{1}.', strTabId, e);
//     //alert(strMsg);
//     throw strMsg;
//   }
// }

// export async function vDataNode_SimEx_GetDataNodeIdByTabIdCache(
//   strCmPrjId: string,
//   strTabId: string,
// ) {
//   try {
//     const arrDataNode = await vDataNode_SimStore.getObjLstByTabId(strTabId);

//     return arrDataNode.map((x) => x.dataNodeId);
//   } catch (e: any) {
//     console.error(e);
//     const strMsg = Format('在获取表:[{0}]的结点对象列表时出错:{1}.', strTabId, e);
//     //alert(strMsg);
//     throw strMsg;
//   }
// }

export function vDataNode_SimEx_SortFunByVersion(
  a: clsvDataNode_SimEN,
  b: clsvDataNode_SimEN,
): number {
  return a.versionNo - b.versionNo;
}

export function vDataNode_SimEx_SortByDataNodeName(
  a: clsvDataNode_SimEN,
  b: clsvDataNode_SimEN,
): number {
  return a.dataNodeName.localeCompare(b.dataNodeName);
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objvDataNode_SimS:源对象
 **/
export async function vDataNode_SimEx_FuncMap_FldName(objvDataNode_Sim: clsvDataNode_SimENEx) {
  const strThisFuncName = vDataNode_SimEx_FuncMap_FldName.name;
  try {
    if (IsNullOrEmpty(objvDataNode_Sim.fldName) == true) {
      const vFieldTab_Sim_FldId = objvDataNode_Sim.fldId;
      const vFieldTab_Sim_FldName = await vFieldTab_Sim_GetNameByFldIdCache(
        vFieldTab_Sim_FldId,
        objvDataNode_Sim.prjId,
      );
      objvDataNode_Sim.fldName = vFieldTab_Sim_FldName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000087)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      vDataNode_SimEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 根据关键字获取相关对象, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache)
 * @param strDataNodeId:所给的关键字
 * @returns 对象
 */
// export async function vDataNode_SimEx_GetObjByDataNodeIdCach1e(
//   strDataNodeId: number,
//   strCmPrjId: string,
//   bolTryAsyncOnce = true,
// ) {
//   const strThisFuncName = 'GetObjByDataNodeIdCache';

//   if (IsNullOrEmpty(strDataNodeId) == true) {
//     const strMsg = Format('参数:[strDataNodeId]不能为空！(In GetObjByDataNodeIdCache)');
//     console.error(strMsg);
//     throw strMsg;
//   }
//   if (strDataNodeId.length != 8) {
//     const strMsg = Format('缓存分类变量:[strDataNodeId]的长度:[{0}]不正确！', strDataNodeId.length);
//     console.error(strMsg);
//     throw strMsg;
//   }
//   const arrvDataNode_SimObjLstCache = await vDataNode_Sim_GetObjLstCache(strCmPrjId);
//   try {
//     const arrvDataNode_SimSel: Array<clsvDataNode_SimEN> = arrvDataNode_SimObjLstCache.filter(
//       (x) => x.dataNodeId == strDataNodeId,
//     );
//     let objvDataNode_Sim: clsvDataNode_SimEN;
//     if (arrvDataNode_SimSel.length > 0) {
//       objvDataNode_Sim = arrvDataNode_SimSel[0];
//       return objvDataNode_Sim;
//     } else {
//       if (bolTryAsyncOnce == true) {
//         const objvDataNode_SimConst = await vDataNode_Sim_GetObjByDataNodeIdAsync(strDataNodeId);
//         if (objvDataNode_SimConst != null) {
//           await DataNodeCmPrjIdRelaEx_SetDataNodeCmPrjId(
//             strDataNodeId,
//             strCmPrjId,
//             clsPubLocalStorage.userId,
//           );

//           vDataNode_Sim_ReFreshThisCache(strCmPrjId);
//           return objvDataNode_SimConst;
//         }
//       }
//       return null;
//     }
//   } catch (e) {
//     const strMsg = Format(
//       '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
//       e,
//       strDataNodeId,
//       vDataNode_SimEx_ConstructorName,
//       strThisFuncName,
//     );
//     console.error(strMsg);
//   }
//   return null;
// }

export async function vDataNode_SimEx_GetObjByDataNodeIdCacheEx(
  strDataNodeId: number,
  strPrjId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByDataNodeIdCache';

  if (strDataNodeId == 0) {
    const strMsg = Format(
      '参数:[strDataNodeId]不能为空!(In clsvDataNode_SimWApi.GetObjByDataNodeIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  // if (strDataNodeId.length != 8) {
  //   const strMsg = Format(
  //     '缓存分类变量:[strDataNodeId]的长度:[{0}]不正确!(clsvDataNode_SimWApi.GetObjByDataNodeIdCache)',
  //     strDataNodeId.length,
  //   );
  //   console.error(strMsg);
  //   throw strMsg;
  // }
  const arrvDataNode_SimObjLstCache = await vDataNode_Sim_GetObjLstCache(strPrjId);
  try {
    const arrvDataNode_SimSel = arrvDataNode_SimObjLstCache.filter(
      (x) => x.dataNodeId == strDataNodeId,
    );
    let objvDataNode_Sim: clsvDataNode_SimEN;
    if (arrvDataNode_SimSel.length > 0) {
      objvDataNode_Sim = arrvDataNode_SimSel[0];
      return objvDataNode_Sim;
    } else {
      if (bolTryAsyncOnce == true) {
        const objvDataNode_SimConst = await vDataNode_SimEx_GetObjByDataNodeIdEx(
          strDataNodeId,
          strPrjId,
        );
        if (objvDataNode_SimConst != null) {
          vDataNode_Sim_ReFreshThisCache(strPrjId);
          return objvDataNode_SimConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strDataNodeId,
      vDataNode_SimEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据DataNodeId获取对象，并且把UsedTimes加1
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strDataNodeId: 数据结点Id
 * @param strPrjId: 工程Id
 * @returns 获取的相应对象列表
 */
export async function vDataNode_SimEx_GetObjByDataNodeIdEx(
  strDataNodeId: number,
  strPrjId: string,
): Promise<clsvDataNode_SimEN> {
  const strThisFuncName = vDataNode_SimEx_GetObjByDataNodeIdEx.name;
  const strAction = 'GetObjByDataNodeIdEx';
  const strUrl = GetWebApiUrl(vDataNode_SimEx_Controller, strAction);
  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strDataNodeId,
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
        vDataNode_SimEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        vDataNode_SimEx_ConstructorName,
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
export async function vDataNode_SimEx_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
  strPrjIdClassfy: string,
) {
  //const strThisFuncName = "func";

  if (IsNullOrEmpty(strPrjIdClassfy) == true) {
    const strMsg = Format('参数:[strPrjIdClassfy]不能为空!(In clsvDataNode_SimWApi.func)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjIdClassfy.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjIdClassfy]的长度:[{0}]不正确!(clsvDataNode_SimWApi.func)',
      strPrjIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName != clsvDataNode_SimEN.con_DataNodeId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsvDataNode_SimEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsvDataNode_SimEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strDataNodeId = strInValue;
  if (IsNullOrEmpty(strDataNodeId) == true) {
    return '';
  }
  const objvDataNode_Sim = await vDataNode_SimEx_GetObjByDataNodeIdEx(
    Number(strDataNodeId),
    strPrjIdClassfy,
  );
  if (objvDataNode_Sim == null) return '';
  if (objvDataNode_Sim.GetFldValue(strOutFldName) == null) return '';
  return objvDataNode_Sim.GetFldValue(strOutFldName).toString();
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strDataNodeId:所给的关键字
 * @returns 对象
 */
export async function vDataNode_SimEx_GetNameByDataNodeIdCacheEx(
  strDataNodeId: number,
  strPrjId: string,
) {
  if (strDataNodeId == 0) {
    const strMsg = Format(
      '参数:[strDataNodeId]不能为空!(In clsvDataNode_SimWApi.GetNameByDataNodeIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  // if (strDataNodeId.length != 8) {
  //   const strMsg = Format(
  //     '缓存分类变量:[strDataNodeId]的长度:[{0}]不正确!(clsvDataNode_SimWApi.GetNameByDataNodeIdCache)',
  //     strDataNodeId.length,
  //   );
  //   console.error(strMsg);
  //   throw strMsg;
  // }
  const arrvDataNode_SimObjLstCache = await vDataNode_Sim_GetObjLstCache(strPrjId);
  if (arrvDataNode_SimObjLstCache == null) return '';
  try {
    const arrvDataNode_SimSel = arrvDataNode_SimObjLstCache.filter(
      (x) => x.dataNodeId == strDataNodeId,
    );
    let objvDataNode_Sim: clsvDataNode_SimEN;
    if (arrvDataNode_SimSel.length > 0) {
      objvDataNode_Sim = arrvDataNode_SimSel[0];
      return objvDataNode_Sim.dataNodeName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strDataNodeId,
    );
    console.error(strMsg);
    alert(strMsg);
  }
  return '';
}

export async function vDataNode_SimEx_GetFldIdByDataNodeIdCacheEx(
  strDataNodeId: number,
  strPrjId: string,
  bolTryAsyncOnce = true,
): Promise<string> {
  const strThisFuncName = 'GetObjByDataNodeIdCache';

  if (strDataNodeId == 0) {
    const strMsg = Format(
      '参数:[strDataNodeId]不能为空!(In clsvDataNode_SimWApi.GetObjByDataNodeIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  // if (strDataNodeId.length != 8) {
  //   const strMsg = Format(
  //     '缓存分类变量:[strDataNodeId]的长度:[{0}]不正确!(clsvDataNode_SimWApi.GetObjByDataNodeIdCache)',
  //     strDataNodeId.length,
  //   );
  //   console.error(strMsg);
  //   throw strMsg;
  // }
  const arrvDataNode_SimObjLstCache = await vDataNode_Sim_GetObjLstCache(strPrjId);
  try {
    const arrvDataNode_SimSel = arrvDataNode_SimObjLstCache.filter(
      (x) => x.dataNodeId == strDataNodeId,
    );
    let objvDataNode_Sim: clsvDataNode_SimEN;
    if (arrvDataNode_SimSel.length > 0) {
      objvDataNode_Sim = arrvDataNode_SimSel[0];
      return objvDataNode_Sim.fldId;
    } else {
      if (bolTryAsyncOnce == true) {
        const objvDataNode_SimConst = await vDataNode_SimEx_GetObjByDataNodeIdEx(
          strDataNodeId,
          strPrjId,
        );
        if (objvDataNode_SimConst != null) {
          vDataNode_Sim_ReFreshThisCache(strPrjId);
          return objvDataNode_SimConst.fldId;
        }
      }
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strDataNodeId,
      vDataNode_SimEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return '';
}

export async function vDataNode_SimEx_GetTabIdByDataNodeIdCacheEx(
  strDataNodeId: number,
  strPrjId: string,
  bolTryAsyncOnce = true,
): Promise<string> {
  const strThisFuncName = 'GetObjByDataNodeIdCache';

  if (strDataNodeId == 0) {
    const strMsg = Format(
      '参数:[strDataNodeId]不能为空!(In clsvDataNode_SimWApi.GetObjByDataNodeIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  // if (strDataNodeId.length != 8) {
  //   const strMsg = Format(
  //     '缓存分类变量:[strDataNodeId]的长度:[{0}]不正确!(clsvDataNode_SimWApi.GetObjByDataNodeIdCache)',
  //     strDataNodeId.length,
  //   );
  //   console.error(strMsg);
  //   throw strMsg;
  // }
  const arrvDataNode_SimObjLstCache = await vDataNode_Sim_GetObjLstCache(strPrjId);
  try {
    const arrvDataNode_SimSel = arrvDataNode_SimObjLstCache.filter(
      (x) => x.dataNodeId == strDataNodeId,
    );
    let objvDataNode_Sim: clsvDataNode_SimEN;
    if (arrvDataNode_SimSel.length > 0) {
      objvDataNode_Sim = arrvDataNode_SimSel[0];
      return objvDataNode_Sim.tabId;
    } else {
      if (bolTryAsyncOnce == true) {
        const objvDataNode_SimConst = await vDataNode_SimEx_GetObjByDataNodeIdEx(
          strDataNodeId,
          strPrjId,
        );
        if (objvDataNode_SimConst != null) {
          vDataNode_Sim_ReFreshThisCache(strPrjId);
          return objvDataNode_SimConst.tabId;
        }
      }
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strDataNodeId,
      vDataNode_SimEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return '';
}

export async function vDataNode_SimEx_GetObjLstByTabIdCacheEx(
  strTabId: string,
  strPrjId: string,
  bolTryAsyncOnce = true,
): Promise<Array<clsvDataNode_SimEN> | null> {
  const strThisFuncName = 'GetObjByDataNodeIdCache';

  if (IsNullOrEmpty(strTabId) == true) {
    const strMsg = Format(
      '参数:[strTabId]不能为空!(In clsvDataNode_SimWApi.GetObjByDataNodeIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strTabId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strTabId]的长度:[{0}]不正确!(clsvDataNode_SimWApi.GetObjByDataNodeIdCache)',
      strTabId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrvDataNode_SimObjLstCache = await vDataNode_Sim_GetObjLstCache(strPrjId);
  try {
    const arrvDataNode_SimSel = arrvDataNode_SimObjLstCache.filter((x) => x.tabId == strTabId);
    const intRecNum = await vDataNode_Sim_GetRecCountByCondAsync(
      `${clsvDataNode_SimEN.con_TabId} = '${strTabId}'`,
    );
    if (arrvDataNode_SimSel.length == intRecNum) {
      return arrvDataNode_SimSel;
    } else {
      if (bolTryAsyncOnce == true) {
        const arrvDataNode_Sim = await vDataNode_SimEx_GetObjLstByTabIdEx(strTabId);
        if (arrvDataNode_Sim != null) {
          vDataNode_Sim_ReFreshThisCache(strPrjId);
          return arrvDataNode_Sim;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strTabId,
      vDataNode_SimEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据TabId获取对象列表，并且把UsedTimes加1
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strTabId: 表Id
 * @returns 获取的相应对象列表
 */
export async function vDataNode_SimEx_GetObjLstByTabIdEx(
  strTabId: string,
): Promise<Array<clsvDataNode_SimEN>> {
  const strThisFuncName = vDataNode_SimEx_GetObjLstByTabIdEx.name;
  const strAction = 'GetObjLstByTabIdEx';
  const strUrl = GetWebApiUrl(vDataNode_SimEx_Controller, strAction);
  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strTabId,
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
        vDataNode_SimEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        vDataNode_SimEx_ConstructorName,
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
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objvDataNode_SimS:源对象
 **/
export async function vDataNode_SimEx_FuncMapFldName(objvDataNode_Sim: clsvDataNode_SimENEx) {
  const strThisFuncName = vDataNode_SimEx_FuncMapFldName.name;
  try {
    if (IsNullOrEmpty(objvDataNode_Sim.fldName) == true) {
      const vFieldTabSimFldId = objvDataNode_Sim.fldId;
      const vFieldTabSimFldName = await vFieldTab_Sim_func(
        clsvFieldTab_SimEN.con_FldId,
        clsvFieldTab_SimEN.con_FldName,
        vFieldTabSimFldId,
        objvDataNode_Sim.prjId,
      );
      objvDataNode_Sim.fldName = vFieldTabSimFldName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000565)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      vDataNode_SimEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objvDataNode_SimS:源对象
 **/
export async function vDataNode_SimEx_FuncMapTabName(objvDataNode_Sim: clsvDataNode_SimENEx) {
  const strThisFuncName = vDataNode_SimEx_FuncMapTabName.name;
  const vPrjTab_SimStore = usevPrjTab_SimStore();
  try {
    console.log('objvDataNode_Sim.tabName:', objvDataNode_Sim.tabName);
    if (IsNullOrEmpty(objvDataNode_Sim.tabName) == true) {
      const vPrjTabSimTabId = objvDataNode_Sim.tabId;
      const vPrjTabSimTabName = await vPrjTab_SimStore.getName(vPrjTabSimTabId);
      if (vPrjTabSimTabName == '') {
        throw `tabId:${vPrjTabSimTabId} 没有相应的表名，请检查！`;
      }
      objvDataNode_Sim.tabName = vPrjTabSimTabName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000564)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      vDataNode_SimEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objvDataNode_SimS:源对象
 **/
export async function vDataNode_SimEx_FuncMapDataNodeTypeName(
  objvDataNode_Sim: clsvDataNode_SimENEx,
) {
  const strThisFuncName = vDataNode_SimEx_FuncMapDataNodeTypeName.name;
  try {
    if (IsNullOrEmpty(objvDataNode_Sim.dataNodeTypeName) == true) {
      const DataNodeTypeDataNodeTypeId = objvDataNode_Sim.dataNodeTypeId;
      const DataNodeTypeDataNodeTypeName = await DataNodeType_func(
        clsDataNodeTypeEN.con_DataNodeTypeId,
        clsDataNodeTypeEN.con_DataNodeTypeName,
        DataNodeTypeDataNodeTypeId,
      );
      objvDataNode_Sim.dataNodeTypeName = DataNodeTypeDataNodeTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000859)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      vDataNode_SimEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
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
export function vDataNode_SimEx_FuncMapByFldName(
  strFldName: string,
  objvDataNode_SimEx: clsvDataNode_SimENEx,
) {
  const strThisFuncName = vDataNode_SimEx_FuncMapByFldName.name;
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsvDataNode_SimEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsvDataNode_SimENEx.con_FldName:
      return vDataNode_SimEx_FuncMapFldName(objvDataNode_SimEx);
    case clsvDataNode_SimENEx.con_TabName:
      return vDataNode_SimEx_FuncMapTabName(objvDataNode_SimEx);
    case clsvDataNode_SimENEx.con_DataNodeTypeName:
      return vDataNode_SimEx_FuncMapDataNodeTypeName(objvDataNode_SimEx);
    default:
      strMsg = Format(
        '扩展字段:[{0}]在字段值函数映射中不存在!(in {1})',
        strFldName,
        strThisFuncName,
      );
      console.error(strMsg);
  }
}
