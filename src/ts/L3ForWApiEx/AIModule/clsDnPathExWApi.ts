import axios from 'axios';
import { clsPubVar4Web } from '../../FunClass/clsPubVar4Web';
import {
  vFieldTab_SimEx_func,
  vFieldTab_SimEx_GetSpan4FieldWithCurrTab,
  vFieldTab_SimEx_GetSpan4FieldWithTabName,
} from '../Table_Field/clsvFieldTab_SimExWApi';
import { PrjTabFldEx_GetDnPathIdByFldIdCache } from '../Table_Field/clsPrjTabFldExWApi';
import { vPrjTab_SimEx_GetObjByTabIdCache } from '../Table_Field/clsvPrjTab_SimExWApi';
import { CMProjectEx_GetPrjIdByCmPrjIdCache } from '../CodeMan/clsCMProjectExWApi';
import { vDnPath_SimEx_GetObjLstByInDataNodeIdCacheEx } from './clsvDnPath_SimExWApi';

import { DnFuncMapEx_GetObjByInOutDataNodeIdCacheEx } from './clsDnFuncMapExWApi';
import { DataNodeEx_GetConnectedNode, DataNodeEx_GetObjByTabIdAndFldId } from './clsDataNodeExWApi';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { clsAssociationMappingEN } from '@/ts/L0Entity/AIModule/clsAssociationMappingEN';
import { clsDataNodeEN } from '@/ts/L0Entity/AIModule/clsDataNodeEN';
import { clsDnFuncMapEN } from '@/ts/L0Entity/AIModule/clsDnFuncMapEN';
import { clsDnPathEN } from '@/ts/L0Entity/AIModule/clsDnPathEN';
import { clsDnPathENEx } from '@/ts/L0Entity/AIModule/clsDnPathENEx';
import { enumFuncMapMode } from '@/ts/L0Entity/AIModule/clsFuncMapModeEN';
import { clsvDataNode_SimEN } from '@/ts/L0Entity/AIModule/clsvDataNode_SimEN';
import { clsvDnPath_SimEN } from '@/ts/L0Entity/AIModule/clsvDnPath_SimEN';
import { clsvFieldTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvFieldTab_SimEN';
import { AssociationMapping_func } from '@/ts/L3ForWApi/AIModule/clsAssociationMappingWApi';
import {
  DataNode_GetObjByDataNodeIdAsync,
  DataNode_GetObjLstByJSONObjLst,
} from '@/ts/L3ForWApi/AIModule/clsDataNodeWApi';
import { DnFunction_GetObjByDnFunctionIdCache } from '@/ts/L3ForWApi/AIModule/clsDnFunctionWApi';
import {
  DnPath_CheckProperty4Update,
  DnPath_GetObjFromJsonObj,
  DnPath_GetObjLstByPagerAsync,
  DnPath_SortFunByKey,
  DnPath_UpdateRecordAsync,
} from '@/ts/L3ForWApi/AIModule/clsDnPathWApi';
import { FuncMapMode_GetObjByFuncMapModeIdCache } from '@/ts/L3ForWApi/AIModule/clsFuncMapModeWApi';

import {
  vDnPath_Sim_GetFirstObjAsync,
  vDnPath_Sim_GetObjByDnPathIdCache,
  vDnPath_Sim_GetObjLstCache,
  vDnPath_Sim_ReFreshThisCache,
} from '@/ts/L3ForWApi/AIModule/clsvDnPath_SimWApi';
import { CMProject_GetObjByCmPrjIdCache } from '@/ts/L3ForWApi/CodeMan/clsCMProjectWApi';

import { vPrjTabFld_DnPathId_GetObjLstCache } from '@/ts/L3ForWApi/Table_Field/clsvPrjTabFld_DnPathIdWApi';
import { GetSpan_Empty, getTdObjByIdInDivObj } from '@/ts/PubFun/clsCommFunc4Ctrl';
import { GetSortExpressInfo, ObjectAssign, Redirect } from '@/ts/PubFun/clsCommFunc4Web';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { clsPubVar } from '@/ts/PubConfig/clsPubVar';
import {
  vDnFuncMap_SimEx_CopyToEx,
  vDnFuncMap_SimEx_GetObjLstByInDataNodeIdCacheEx,
  vDnFuncMap_SimEx_SortFunByInDataNodeName,
} from '@/ts/L3ForWApiEx/AIModule/clsvDnFuncMap_SimExWApi';
import { clsvDnFuncMap_SimENEx } from '@/ts/L0Entity/AIModule/clsvDnFuncMap_SimENEx';
import { clsvDnFuncMap_Sim } from '@/ts/L0Entity/AIModule/clsvDnFuncMap_Sim';

import { clsvDataNode_Sim } from '@/ts/L0Entity/AIModule/clsvDataNode_Sim';
import { useDnFuncMapStore } from '@/store/modules/dnFuncMap';
import { usevDataNode_SimStore } from '@/store/modules/vDataNode_Sim';
import { usevDnFuncMap_SimStore } from '@/store/modules/vDnFuncMap_Sim';
import {
  vFieldTab_Sim_GetNameByFldIdCache,
  vFieldTab_Sim_GetObjByFldIdCache,
} from '@/ts/L3ForWApi/Table_Field/clsvFieldTab_SimWApi';
import {
  vDataNode_SimEx_GetFldIdByDataNodeIdCacheEx,
  vDataNode_SimEx_GetNameByDataNodeIdCacheEx,
  vDataNode_SimEx_GetObjByDataNodeIdCacheEx,
} from '@/ts/L3ForWApiEx/AIModule/clsvDataNode_SimExWApi';

let vuebtn_Click: (strCommandName: string, strKeyId: any) => void;
export function useBBFunctions(btn_Click: (strCommandName: string, strKeyId: string) => void) {
  // 在这里使用 fun1
  vuebtn_Click = btn_Click;
}
export const dnPathEx_Controller = 'DnPathExApi';
export const dnPathEx_ConstructorName = 'dnPathEx';

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_CopyToEx)
 * @param objDnPathENS:源对象
 * @returns 目标对象=>clsDnPathEN:objDnPathENT
 **/
export function DnPathEx_CopyToEx(objDnPathENS: clsDnPathEN): clsDnPathENEx {
  const strThisFuncName = DnPathEx_CopyToEx.name;
  const objDnPathENT = new clsDnPathENEx();
  try {
    ObjectAssign(objDnPathENT, objDnPathENS);
    return objDnPathENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000066)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      dnPathEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objDnPathENT;
  }
}
/**
 * 在CM工程中自动建立路径
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strCmPrjId: CM工程Id
 * @param strOpUserId: 操作用户Id
 * @returns 获取的相应对象列表
 */
export async function DnPathEx_AutoCreatePath(
  strPrjId: string,
  strOpUserId: string,
): Promise<number> {
  const strThisFuncName = DnPathEx_AutoCreatePath.name;
  const strAction = 'AutoCreatePath';
  const strUrl = GetWebApiUrl(dnPathEx_Controller, strAction);
  // const mapParam: Dictionary = new Dictionary();
  // mapParam.add('strPrjId', strPrjId);
  // mapParam.add('strOpUserId', strOpUserId);
  // const strData = mapParam.getParamText(); // "例如: strIdentityID =01";

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strPrjId,
      strOpUserId,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      return data.returnInt;
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
        dnPathEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        dnPathEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

// async function GetDnPathNodeLstBak(strDnPathId: string): Promise<Array<string>> {
//   const objDnPath = await vDnPath_Sim_GetObjByDnPathIdAsync(strDnPathId);
//   if (objDnPath == null) return [];
//   const arrDataNodeId = objDnPath.dnPathNodeLst.split(',');
//   return arrDataNodeId;
// }

async function GetDnPathNodeLstCache(strDnPathId: string): Promise<Array<number>> {
  const objDnPath = await vDnPath_Sim_GetObjByDnPathIdCache(
    strDnPathId,
    clsPrivateSessionStorage.currSelPrjId,
  );
  if (objDnPath == null) return [];
  const arrDataNodeId = objDnPath.dnPathNodeLst.split(',');
  return arrDataNodeId.map((x) => Number(x));
}
async function GetDiv_FieldVersion(strDnPathId: string) {
  const divDnPath: HTMLDivElement = document.createElement('div');

  //liLevel1.clsName = "li noselected";
  divDnPath.id = Format('divPath_{0}', strDnPathId);
  //divDnPath.style.width = "1300px";
  //divDnPath.style.overflow = "auto";
  return divDnPath;
}
function GetButton_CopyNode(
  strFldId: string,
  strTabId: string,
  intVersionNo: number,
): HTMLButtonElement {
  const btnCopyNode: HTMLButtonElement = document.createElement('button');

  btnCopyNode.id = Format('btnCopyNode{0}', strFldId);
  btnCopyNode.className = 'btn btn-outline-info btn-sm text-nowrap ml-1';
  btnCopyNode.title = '建立导出映射';

  (function (strFldId, strTabId1, intVersionNo1) {
    btnCopyNode.onclick = function () {
      console.log(strFldId, strTabId1, intVersionNo1);
      // DnFuncMapCRUD_EditEx.btnCopyNode_Click(strFldId, strTabId1, intVersionNo1);
    };
  })(strFldId, strTabId, intVersionNo);
  btnCopyNode.innerText = '复制结点';
  return btnCopyNode;
}

export function DnPathEx_GetUl_CreateFunc1(
  strFldId: string,
  strTabId: string,
  intVersionNo: number,
): HTMLUListElement {
  const btnCreateFunc: HTMLButtonElement = document.createElement('button');

  btnCreateFunc.id = Format('btnCreateFunc{0}', strFldId);
  btnCreateFunc.className = 'btn btn-outline-info btn-sm text-nowrap ml-1';
  btnCreateFunc.title = '建立导出映射';

  (function (strFldId, strTabId1, intVersionNo1) {
    btnCreateFunc.onclick = function () {
      console.log(strFldId, strTabId1, intVersionNo1);
      // DnFuncMapCRUD_EditEx.btnCreateFuncMap(strFldId, strTabId1, intVersionNo1);
    };
  })(strFldId, strTabId, intVersionNo);
  btnCreateFunc.innerText = '建立映射';
  const li_CreateFunc: HTMLLIElement = document.createElement('li');
  li_CreateFunc.className = 'nav-item';
  li_CreateFunc.id = Format('liCreateFunc_{0}', strFldId);
  li_CreateFunc.appendChild(btnCreateFunc);
  const btnCopyNode: HTMLButtonElement = GetButton_CopyNode(strFldId, strTabId, intVersionNo);
  li_CreateFunc.appendChild(btnCopyNode);
  const ulCreateFunc: HTMLUListElement = <HTMLUListElement>document.createElement('ul');
  ulCreateFunc.id = Format('ulCreateFunc{0}', strFldId);
  ulCreateFunc.className = 'nav';
  ulCreateFunc.appendChild(li_CreateFunc);
  return ulCreateFunc;
}
//  /**
//* 为当前字段版本建立一个Span
//* @param objvFieldTab_Sim
//* @param intVersionNo
//*/
//  export async function GetSpan_Field(objvFieldTab_Sim: clsvFieldTab_SimEN, intVersionNo: number): Promise<HTMLSpanElement> {
//      const spnField: HTMLSpanElement = document.createElement("span");
//      try {
//          spnField = await vFieldTab_SimEx_GetSpan4Field(objvFieldTab_Sim.fldId, intVersionNo, clsPrivateSessionStorage.cmPrjId);
//      }
//      catch (e: any) {
//          return spnField;
//      }

//      spnField.clsName = "text-danger font-weight-bold text-g";
//      if (objvFieldTab_Sim.isHasNode == false) {
//          spnField.clsName = "text-secondary font-weight-bold text-g";
//      }
//      return spnField;
//  }

function btnJumpAIToTabId_Click(strTabId: string) {
  try {
    clsPubVar4Web.SetTabId(strTabId);
    Redirect(Format('../AIModule/DnFuncMapCRUD_Edit?AA=AA&amp&TabId={0}', strTabId));
  } catch (e: any) {
    const strMsg = `跳转到新界面的人工智能不成功,${e}.`;
    console.error('Error: ', strMsg);
    //console.trace();
    alert(strMsg);
  }
}

/**
 * 为当前结点建立一个Span
 * @param objvFieldTab_Sim
 * @param intVersionNo
 */
async function GetSpan_DataNode(objvDataNode_Sim: clsvDataNode_Sim): Promise<HTMLSpanElement> {
  let spnDataNode: HTMLSpanElement = document.createElement('span');
  //const intVersionNo = 1;
  const objCmProject = await CMProject_GetObjByCmPrjIdCache(clsPrivateSessionStorage.cmPrjId);
  if (objCmProject == null) return spnDataNode;
  const objvFieldTab_Sim = await vFieldTab_Sim_GetObjByFldIdCache(
    objvDataNode_Sim.fldId,
    clsPrivateSessionStorage.currSelPrjId,
  );
  if (objvFieldTab_Sim == null) return spnDataNode;
  try {
    const spnDataNode0 = await vFieldTab_SimEx_GetSpan4FieldWithTabName(
      objvFieldTab_Sim.fldId,
      objvDataNode_Sim.tabId,
      objvDataNode_Sim.dataNodeTypeId,
      objvDataNode_Sim.versionNo,
      clsPrivateSessionStorage.currSelPrjId,
      0,
      btnJumpAIToTabId_Click,
    );
    if (spnDataNode0 == null) return spnDataNode;
    spnDataNode = spnDataNode0;
  } catch (e: any) {
    return spnDataNode;
  }
  spnDataNode.className = 'text-danger font-weight-bold text-g';
  return spnDataNode;
}

export async function GetSpan_DataNode4End(
  objvDataNode_Sim: clsvDataNode_SimEN,
): Promise<HTMLSpanElement> {
  let spnDataNode: HTMLSpanElement = document.createElement('span');
  const spnDataNodeAll: HTMLSpanElement = document.createElement('span');
  const spnDataNode_End: HTMLSpanElement = document.createElement('span');
  spnDataNode_End.innerHTML = '(终点)';
  spnDataNode_End.className = 'text-primary font-weight-bold text-g';
  //const intVersionNo = 1;
  const objCmProject = await CMProject_GetObjByCmPrjIdCache(clsPrivateSessionStorage.cmPrjId);
  if (objCmProject == null) return spnDataNode;
  const objvFieldTab_Sim = await vFieldTab_Sim_GetObjByFldIdCache(
    objvDataNode_Sim.fldId,
    clsPrivateSessionStorage.currSelPrjId,
  );
  if (objvFieldTab_Sim == null) return spnDataNode;
  try {
    const spnDataNode0 = await vFieldTab_SimEx_GetSpan4FieldWithTabName(
      objvFieldTab_Sim.fldId,
      objvDataNode_Sim.tabId,
      objvDataNode_Sim.dataNodeTypeId,
      objvDataNode_Sim.versionNo,
      clsPrivateSessionStorage.currSelPrjId,
      0,
      btnJumpAIToTabId_Click,
    );
    if (spnDataNode0 == null) return spnDataNode;
    spnDataNode = spnDataNode0;
  } catch (e: any) {
    return spnDataNode;
  }
  spnDataNode.className = 'text-danger font-weight-bold text-g';
  spnDataNodeAll.appendChild(spnDataNode_End);
  spnDataNodeAll.appendChild(spnDataNode);

  return spnDataNodeAll;
}

async function getArrawLi(
  objDnFuncMap: clsvDnFuncMap_Sim,
  intIndex: number,
): Promise<HTMLLIElement | null> {
  const objFuncMapMode = await FuncMapMode_GetObjByFuncMapModeIdCache(objDnFuncMap.funcMapModeId);
  if (objFuncMapMode == null) {
    const strMsg = Format(
      '函数映射模式Id:[{0}]，没有相应的模式，请检查！',
      objDnFuncMap.funcMapModeId,
    );
    console.error(strMsg);
    alert(strMsg);
    return null;
  }

  const li_Arraw: HTMLLIElement = document.createElement('li');
  li_Arraw.className = 'nav-item ml-2 mr-2';
  li_Arraw.id = Format('li_Arraw_{0}', objDnFuncMap.dnFuncMapId);
  const objDiv: HTMLDivElement = document.createElement('div');
  objDiv.className = 'border-danger';
  const objSpan_FuncMap: HTMLSpanElement = document.createElement('span');
  objSpan_FuncMap.setAttribute('class', 'text-primary');
  if (objFuncMapMode.funcMapModeId == enumFuncMapMode.Table_01) {
    const objPrjTab = await vPrjTab_SimEx_GetObjByTabIdCache(
      objDnFuncMap.tabId,
      clsPrivateSessionStorage.currSelPrjId,
    );
    if (objPrjTab == null) {
      const strMsg = Format(
        '在项目:[{0}]中，表Id:[{1}]没有相应表，请检查！',
        clsPrivateSessionStorage.currSelPrjName,
        objDnFuncMap.tabId,
      );
      console.error(strMsg);
      alert(strMsg);
      return null;
    }
    objSpan_FuncMap.innerHTML = Format(
      '{2}.{0}-{1}',
      objFuncMapMode.funcMapModeName,
      objPrjTab.tabName,
      intIndex,
    );
  } else {
    const objDnFunction = await DnFunction_GetObjByDnFunctionIdCache(
      objDnFuncMap.dnFunctionId,
      clsPrivateSessionStorage.currSelPrjId,
    );
    if (objDnFunction == null) {
      const strMsg = Format(
        '在项目:[{0}]中，结点函数Id:[{1}]没有相应结点函数，请检查！',
        clsPrivateSessionStorage.currSelPrjName,
        objDnFuncMap.dnFunctionId,
      );
      console.error(strMsg);
      alert(strMsg);
      return null;
    }
    objSpan_FuncMap.innerHTML = Format(
      '{2}.{0}-{1}',
      objFuncMapMode.funcMapModeName,
      objDnFunction.dnFunctionName,
      intIndex,
    );
  }

  const objBr: HTMLBRElement = document.createElement('br');

  const objSpan_Arraw: HTMLSpanElement = document.createElement('span');
  objSpan_Arraw.setAttribute('class', 'text-primary');
  objSpan_Arraw.innerHTML = '==>';

  //const btnDelMap: HTMLButtonElement = document.createElement("button");

  //btnDelMap.id = Format("btnDelMap{0}", objDnFuncMap.mId);
  //btnDelMap.clsName = 'btn btn-outline-info btn-sm text-nowrap ml-1';
  //btnDelMap.title = "删除当前映射";

  //(function (strKeyId) {
  //    btnDelMap.onclick = (function () {
  //        DnFuncMapCRUD_EditEx.btnDelMap_Click(strKeyId);
  //    });
  //})(objDnFuncMap.mId);
  //btnDelMap.innerText = "删除";

  objDiv.appendChild(objSpan_FuncMap);
  objDiv.appendChild(objBr);
  objDiv.appendChild(objSpan_Arraw);
  //objDiv.appendChild(btnDelMap);

  li_Arraw.appendChild(objDiv);
  return li_Arraw;
}

async function getArrawLi_Err(strErrMsg: string, intIndex: number): Promise<HTMLLIElement | null> {
  const li_Arraw: HTMLLIElement = document.createElement('li');
  li_Arraw.className = 'nav-item ml-2 mr-2';
  li_Arraw.id = Format('li_Arraw_Err{0}', intIndex);
  const objDiv: HTMLDivElement = document.createElement('div');
  objDiv.className = 'border-danger';
  const objSpan_FuncMap: HTMLSpanElement = document.createElement('span');
  objSpan_FuncMap.setAttribute('class', 'text-danger');

  objSpan_FuncMap.innerHTML = Format('{0}-{1}', strErrMsg, intIndex);

  const objBr: HTMLBRElement = document.createElement('br');

  const objSpan_Arraw: HTMLSpanElement = document.createElement('span');
  objSpan_Arraw.setAttribute('class', 'text-danger');
  objSpan_Arraw.innerHTML = '==>';

  //const btnDelMap: HTMLButtonElement = document.createElement("button");

  //btnDelMap.id = Format("btnDelMap{0}", objDnFuncMap.mId);
  //btnDelMap.clsName = 'btn btn-outline-info btn-sm text-nowrap ml-1';
  //btnDelMap.title = "删除当前映射";

  //(function (strKeyId) {
  //    btnDelMap.onclick = (function () {
  //        DnFuncMapCRUD_EditEx.btnDelMap_Click(strKeyId);
  //    });
  //})(objDnFuncMap.mId);
  //btnDelMap.innerText = "删除";

  objDiv.appendChild(objSpan_FuncMap);
  objDiv.appendChild(objBr);
  objDiv.appendChild(objSpan_Arraw);
  //objDiv.appendChild(btnDelMap);

  li_Arraw.appendChild(objDiv);
  return li_Arraw;
}
export async function DnPathEx_ShowNextNode1(
  objDataNodeMapFunc_p: clsDnFuncMapEN,
  objUlContainer: HTMLUListElement,
) {
  const objDataNodeId_Out2 = await vDataNode_SimEx_GetObjByDataNodeIdCacheEx(
    objDataNodeMapFunc_p.outDataNodeId,
    clsPrivateSessionStorage.currSelPrjId,
  );
  if (objDataNodeId_Out2 == null) return;
  let objSpan4Field;
  try {
    objSpan4Field = await vFieldTab_SimEx_GetSpan4FieldWithTabName(
      objDataNodeId_Out2.fldId,
      objDataNodeId_Out2.tabId,
      objDataNodeId_Out2.dataNodeTypeId,
      objDataNodeId_Out2.versionNo,
      objDataNodeMapFunc_p.prjId,
      0,
      btnJumpAIToTabId_Click,
    );
    if (objSpan4Field == null) return;
  } catch (e: any) {
    console.error(e);
    return;
  }
  const li_Sub: HTMLLIElement = document.createElement('li');
  li_Sub.className = 'nav-item';
  li_Sub.id = Format('liSub_{0}_{1}', objDataNodeId_Out2.tabId, objDataNodeId_Out2.fldId);
  li_Sub.appendChild(objSpan4Field);
  objUlContainer.appendChild(li_Sub);
  if (objDataNodeId_Out2.tabId == clsPubVar.dnPathEx_TabIdStatic) {
    return;
  }
  const arrDnFuncMap_Next = await vDnFuncMap_SimEx_GetObjLstByInDataNodeIdCacheEx(
    objDataNodeId_Out2.dataNodeId,
    clsPrivateSessionStorage.currSelPrjId,
  );
  if (arrDnFuncMap_Next == null) return;
  if (arrDnFuncMap_Next.length > 0) {
    let intIndex = 1;
    const li_Sub_Parent: HTMLLIElement = document.createElement('li');
    li_Sub_Parent.className = 'nav-item';
    li_Sub_Parent.id = Format(
      'liSub_Pa_{0}_{1}',
      objDataNodeId_Out2.tabId,
      objDataNodeId_Out2.fldId,
    );

    for (const objDnFuncMap_2 of arrDnFuncMap_Next) {
      const objDataNode_In = await vDataNode_SimEx_GetObjByDataNodeIdCacheEx(
        objDnFuncMap_2.inDataNodeId,
        clsPrivateSessionStorage.currSelPrjId,
      );
      const objDataNode_Out = await vDataNode_SimEx_GetObjByDataNodeIdCacheEx(
        objDnFuncMap_2.outDataNodeId,
        clsPrivateSessionStorage.currSelPrjId,
      );
      if (objDataNode_In == null || IsNullOrEmpty(objDataNode_In.dataNodeName) == true) {
        continue;
      }
      if (objDataNode_Out == null || IsNullOrEmpty(objDataNode_Out.dataNodeName) == true) {
        continue;
      }

      const ulNext1: HTMLUListElement = <HTMLUListElement>document.createElement('ul');
      ulNext1.id = Format('ul{0}_{1}', objDataNodeId_Out2.tabId, objDataNodeId_Out2.fldId);
      ulNext1.className = 'nav';

      const li_Arraw = await getArrawLi(objDnFuncMap_2, intIndex);
      if (li_Arraw == null) continue;
      ulNext1.appendChild(li_Arraw);
      li_Sub_Parent.appendChild(ulNext1);
      objUlContainer.appendChild(li_Sub_Parent);
      intIndex++;
    }
  } else {
    const li_Sub: HTMLLIElement = document.createElement('li');
    li_Sub.className = 'nav-item';
    li_Sub.id = Format('liSub_{0}_{1}', objDataNodeId_Out2.tabId, objDataNodeId_Out2.fldId);
    li_Sub.appendChild(objSpan4Field);
    objUlContainer.appendChild(li_Sub);
  }
}
export function DnPathEx_GetButton_CreateFunc(
  strFldId: string,
  strTabId: string,
  intVersionNo: number,
): HTMLButtonElement {
  const btnCreateFunc: HTMLButtonElement = document.createElement('button');

  btnCreateFunc.id = Format('btnCreateFunc{0}', strFldId);
  btnCreateFunc.className = 'btn btn-outline-info btn-sm text-nowrap ml-1';
  btnCreateFunc.title = '建立导出映射';

  (function (strFldId, strTabId1, intVersionNo1) {
    btnCreateFunc.onclick = function () {
      console.log(strFldId, strTabId1, intVersionNo1);
      // DnFuncMapCRUD_EditEx.btnCreateFuncMap(strFldId, strTabId1, intVersionNo1);
    };
  })(strFldId, strTabId, intVersionNo);
  btnCreateFunc.innerText = '建立映射';
  return btnCreateFunc;
}
export async function DnPathEx_CreatePrev_Field1(
  strDataNodeId: number,
  ulField: HTMLUListElement,
): Promise<boolean> {
  const vDnFuncMap_SimStore = usevDnFuncMap_SimStore();
  const vDataNode_SimStore = usevDataNode_SimStore();
  const li_Prev_Parent: HTMLLIElement = document.createElement('li');
  li_Prev_Parent.className = 'list-unstyled';
  //以当前结点为输出结点的关系

  const arrDataNodeMapFunc_Out = await vDnFuncMap_SimStore.getObjLstByOut(strDataNodeId);
  let intIndex = 1;

  if (arrDataNodeMapFunc_Out.length > 0) {
    let arrDataNodeMapFuncEx_Out: Array<clsvDnFuncMap_SimENEx> =
      arrDataNodeMapFunc_Out.map(vDnFuncMap_SimEx_CopyToEx);
    for (const objDataNodeMapFuncEx_p of arrDataNodeMapFuncEx_Out) {
      objDataNodeMapFuncEx_p.inDataNodeName = await vDataNode_SimStore.getName(
        objDataNodeMapFuncEx_p.inDataNodeId,
      );
    }
    arrDataNodeMapFuncEx_Out = arrDataNodeMapFuncEx_Out.sort(
      vDnFuncMap_SimEx_SortFunByInDataNodeName,
    );
    for (const objDataNodeMapFunc_p of arrDataNodeMapFuncEx_Out) {
      const ul_Prev: HTMLUListElement = document.createElement('ul');
      ul_Prev.className = 'nav';
      const li_Arraw_Prev = await getArrawLi(objDataNodeMapFunc_p, 1);
      if (li_Arraw_Prev == null) {
        continue;
      }
      li_Arraw_Prev.className = 'nav-item ml-2';
      const objInDataNode_Out = await vDataNode_SimEx_GetObjByDataNodeIdCacheEx(
        objDataNodeMapFunc_p.inDataNodeId,
        clsPrivateSessionStorage.currSelPrjId,
      );
      if (objInDataNode_Out == null) return true;
      let objSpan4Field1;
      try {
        if (objDataNodeMapFunc_p.tabId == clsPubVar.dnPathEx_TabIdStatic) {
          objSpan4Field1 = await vFieldTab_SimEx_GetSpan4FieldWithCurrTab();
        } else {
          objSpan4Field1 = await vFieldTab_SimEx_GetSpan4FieldWithTabName(
            objInDataNode_Out.fldId,
            objInDataNode_Out.tabId,
            objInDataNode_Out.dataNodeTypeId,
            objInDataNode_Out.versionNo,
            objDataNodeMapFunc_p.prjId,
            intIndex,
            btnJumpAIToTabId_Click,
          );
        }
        if (objSpan4Field1 == null) {
          continue;
        }
      } catch (e: any) {
        console.error(e);
        return true;
      }
      const li_Sub: HTMLLIElement = document.createElement('li');
      li_Sub.className = 'nav-item';
      li_Sub.id = Format('liSub_{0}_{1}', objInDataNode_Out.tabId, objInDataNode_Out.fldId);
      li_Sub.appendChild(objSpan4Field1);

      ul_Prev.appendChild(li_Sub);
      ul_Prev.appendChild(li_Arraw_Prev);
      li_Prev_Parent.appendChild(ul_Prev);
      intIndex++;
    }

    if (arrDataNodeMapFunc_Out.length > 0) {
      ulField.appendChild(li_Prev_Parent);
    }
    return true;
  } else return false;
}
/**
 * 获取在某表中以某结点为开始结点的所有没有建立的路径
 * @param strInDataNodeId in结点
 * @param strInTabId  in 表
 * @param strPrjId 工程Id
 * @returns
 */
export async function DnPathEx_GetDnPath4NoExist(
  strInDataNodeId: number,
  strInTabId: string,
  strPrjId: string,
): Promise<Array<clsvDnPath_SimEN>> {
  const arrDnPathObjLst_NoExist: Array<clsvDnPath_SimEN> = [];
  const arrDnPathObjLst_Exist = await vDnPath_SimEx_GetObjLstByInDataNodeIdCacheEx(
    strInDataNodeId,
    strInTabId,
    strPrjId,
  );
  const arrConnectedNode = await DataNodeEx_GetConnectedNode(
    strInDataNodeId,
    clsPrivateSessionStorage.currSelPrjId,
  );

  const objInDataNode = await vDataNode_SimEx_GetObjByDataNodeIdCacheEx(
    strInDataNodeId,
    clsPrivateSessionStorage.currSelPrjId,
  );
  if (objInDataNode != null) {
    let intIndex = 1;
    for (const objOutDataNode of arrConnectedNode) {
      if (
        arrDnPathObjLst_Exist.filter((x) => x.outDataNodeId == objOutDataNode.dataNodeId).length > 0
      )
        continue;
      if (objOutDataNode.dataNodeId == strInDataNodeId) continue;
      const objDnPath = new clsvDnPath_SimEN();
      objDnPath.dnPathId = Format('temp{0}', intIndex++);
      objDnPath.inDataNodeId = strInDataNodeId;
      objDnPath.outDataNodeId = objOutDataNode.dataNodeId;
      objDnPath.dnPathName = Format(
        '{0}-{1}',
        objInDataNode.dataNodeName,
        objOutDataNode.dataNodeName,
      );

      arrDnPathObjLst_NoExist.push(objDnPath);
    }
  }
  return arrDnPathObjLst_NoExist;
}

export async function DnPathEx_CreateGraph4DnPath1(strDnPathId: string): Promise<HTMLDivElement> {
  // const intVersionNo = 1;
  const divDnPath: HTMLDivElement = await GetDiv_FieldVersion(strDnPathId);

  const objCmProject = await CMProject_GetObjByCmPrjIdCache(clsPrivateSessionStorage.cmPrjId);
  if (objCmProject == null) return divDnPath;
  const arrDnPathNodeLst = await GetDnPathNodeLstCache(strDnPathId);
  if (arrDnPathNodeLst.length == 0) return divDnPath;
  //let objvFieldTab_Sim = await vFieldTab_SimEx_GetObjByFldIdCache(objDn_Start.fldId, objCmProject.prjId);
  //if (objvFieldTab_Sim == null) return divDnPath;

  const ulDataNode: HTMLUListElement = <HTMLUListElement>document.createElement('ul');
  ulDataNode.id = Format('ulDnPath_{0}', strDnPathId);
  ulDataNode.className = 'nav';
  let intIndex = 1;

  for (let i = 0; i < arrDnPathNodeLst.length - 1; i++) {
    try {
      const objDn_Start = await vDataNode_SimEx_GetObjByDataNodeIdCacheEx(
        arrDnPathNodeLst[i],
        clsPrivateSessionStorage.currSelPrjId,
      );
      if (objDn_Start == null) {
        await DnPathEx_SetIsHasError(strDnPathId, clsPrivateSessionStorage.currSelPrjId);
        return divDnPath;
      }
      const objDn_End = await vDataNode_SimEx_GetObjByDataNodeIdCacheEx(
        arrDnPathNodeLst[i + 1],
        clsPrivateSessionStorage.currSelPrjId,
      );
      if (objDn_End == null) {
        await DnPathEx_SetIsHasError(strDnPathId, clsPrivateSessionStorage.currSelPrjId);
        return divDnPath;
      }

      const objDataNodeMapFunc_In = await DnFuncMapEx_GetObjByInOutDataNodeIdCacheEx(
        objDn_Start.dataNodeId,
        objDn_End.dataNodeId,
      );
      if (objDataNodeMapFunc_In == null) {
        await DnPathEx_SetIsHasError(strDnPathId, clsPrivateSessionStorage.currSelPrjId);
        return divDnPath;
      }
      const li_DataNode: HTMLLIElement = document.createElement('li');
      li_DataNode.className = 'nav-item';
      li_DataNode.id = Format('liDataNode_{0}', objDn_Start.dataNodeId);

      const spnDataNode = await GetSpan_DataNode(objDn_Start);

      li_DataNode.appendChild(spnDataNode);

      ulDataNode.appendChild(li_DataNode);

      const li_Sub: HTMLLIElement = document.createElement('li');
      li_Sub.className = 'nav-item';
      li_Sub.id = Format('liSub_{0}', objDn_Start.dataNodeId);

      const li_Arraw = await getArrawLi(objDataNodeMapFunc_In, intIndex);
      if (li_Arraw == null) continue;

      li_Sub.appendChild(li_Arraw);
      ulDataNode.appendChild(li_Sub);
      intIndex++;

      //    i_NodeNum++;
      //}//while，循环，同一个字段有多个结点
      divDnPath.appendChild(ulDataNode);
    } catch (e) {
      console.error(e);
    }
  }

  //处理最后一个结点
  try {
    const objDn_End = await vDataNode_SimEx_GetObjByDataNodeIdCacheEx(
      arrDnPathNodeLst[arrDnPathNodeLst.length - 1],
      clsPrivateSessionStorage.currSelPrjId,
    );
    if (objDn_End == null) return divDnPath;

    const li_DataNode: HTMLLIElement = document.createElement('li');
    li_DataNode.className = 'nav-item';
    li_DataNode.id = Format('liDataNode_{0}', objDn_End.dataNodeId);

    const spnDataNode = await GetSpan_DataNode(objDn_End);

    li_DataNode.appendChild(spnDataNode);

    ulDataNode.appendChild(li_DataNode);

    //    i_NodeNum++;
    //}//while，循环，同一个字段有多个结点
    divDnPath.appendChild(ulDataNode);
  } catch (e) {
    console.error(e);
  }

  return divDnPath;
}

export async function DnPathEx_CreateGraph4DnPath_IncludeErr(
  strDnPathId: string,
): Promise<HTMLDivElement> {
  const vDataNode_SimStore = usevDataNode_SimStore();
  // const intVersionNo = 1;
  const divDnPath: HTMLDivElement = await GetDiv_FieldVersion(strDnPathId);

  const objCmProject = await CMProject_GetObjByCmPrjIdCache(clsPrivateSessionStorage.cmPrjId);
  if (objCmProject == null) return divDnPath;
  const arrDnPathNodeLst = await GetDnPathNodeLstCache(strDnPathId);
  if (arrDnPathNodeLst.length == 0) return divDnPath;
  //let objvFieldTab_Sim = await vFieldTab_SimEx_GetObjByFldIdCache(objDn_Start.fldId, objCmProject.prjId);
  //if (objvFieldTab_Sim == null) return divDnPath;

  const ulDataNode: HTMLUListElement = <HTMLUListElement>document.createElement('ul');
  ulDataNode.id = Format('ulDnPath_{0}', strDnPathId);
  ulDataNode.className = 'nav';
  let intIndex = 1;

  for (let i = 0; i < arrDnPathNodeLst.length - 1; i++) {
    try {
      let spnDataNode;
      const strDataNodeId_i = arrDnPathNodeLst[i];
      const strDataNodeId_j = arrDnPathNodeLst[i + 1];

      const objDn_Start = await vDataNode_SimEx_GetObjByDataNodeIdCacheEx(
        arrDnPathNodeLst[i],
        clsPrivateSessionStorage.currSelPrjId,
      );
      if (objDn_Start == null) {
        await DnPathEx_SetIsHasError(strDnPathId, clsPrivateSessionStorage.currSelPrjId);
        //return divDnPath;

        const objDataNode_S = await DataNode_GetObjByDataNodeIdAsync(strDataNodeId_i);
        spnDataNode = GetSpan_Empty('text-danger');
        if (objDataNode_S == null) {
          spnDataNode.innerHTML = Format('结点Id:{0}不存在！', strDataNodeId_i);
        } else {
          //if (objDataNode_S.cmPrjId != clsPrivateSessionStorage.cmPrjId) {
          //    spnDataNode.innerHTML = Format("结点Id:{0}不属于:[{1}]！", strDataNodeId_i, objCmProject.cmPrjName);
          //}
          //else {
          spnDataNode.innerHTML = Format(
            '结点Id:{0}数据在缓存不存在，已帮你刷新了缓存！',
            strDataNodeId_i,
            objCmProject.cmPrjName,
          );
          vDataNode_SimStore.ReFreshByPrjId(clsPrivateSessionStorage.currSelPrjId);
          //}
        }
      } else {
        spnDataNode = await GetSpan_DataNode(objDn_Start);
      }
      const objDn_End = await vDataNode_SimEx_GetObjByDataNodeIdCacheEx(
        arrDnPathNodeLst[i + 1],
        clsPrivateSessionStorage.currSelPrjId,
      );
      if (objDn_End == null) {
        await DnPathEx_SetIsHasError(strDnPathId, clsPrivateSessionStorage.currSelPrjId);
        //return divDnPath;
      }
      let li_Arraw;
      const objDataNodeMapFunc_In = await DnFuncMapEx_GetObjByInOutDataNodeIdCacheEx(
        strDataNodeId_i,
        strDataNodeId_j,
      );
      if (objDataNodeMapFunc_In == null) {
        await DnPathEx_SetIsHasError(strDnPathId, clsPrivateSessionStorage.currSelPrjId);
        //return divDnPath;

        li_Arraw = await getArrawLi_Err('该关系不存在', intIndex);
      } else {
        li_Arraw = await getArrawLi(objDataNodeMapFunc_In, intIndex);
      }
      const li_DataNode: HTMLLIElement = document.createElement('li');
      li_DataNode.className = 'nav-item';
      li_DataNode.id = Format('liDataNode_{0}', arrDnPathNodeLst[i]);

      li_DataNode.appendChild(spnDataNode);

      ulDataNode.appendChild(li_DataNode);

      const li_Sub: HTMLLIElement = document.createElement('li');
      li_Sub.className = 'nav-item';
      li_Sub.id = Format('liSub_{0}', strDataNodeId_i);

      if (li_Arraw == null) continue;

      li_Sub.appendChild(li_Arraw);
      ulDataNode.appendChild(li_Sub);
      intIndex++;

      //    i_NodeNum++;
      //}//while，循环，同一个字段有多个结点
      divDnPath.appendChild(ulDataNode);
    } catch (e) {
      console.error(e);
    }
  }

  //处理最后一个结点
  try {
    const objDn_End = await vDataNode_SimEx_GetObjByDataNodeIdCacheEx(
      arrDnPathNodeLst[arrDnPathNodeLst.length - 1],
      clsPrivateSessionStorage.currSelPrjId,
    );
    if (objDn_End == null) return divDnPath;

    const li_DataNode: HTMLLIElement = document.createElement('li');
    li_DataNode.className = 'nav-item';
    li_DataNode.id = Format('liDataNode_{0}', objDn_End.dataNodeId);

    const spnDataNode = await GetSpan_DataNode(objDn_End);

    li_DataNode.appendChild(spnDataNode);

    ulDataNode.appendChild(li_DataNode);

    //    i_NodeNum++;
    //}//while，循环，同一个字段有多个结点
    divDnPath.appendChild(ulDataNode);
  } catch (e) {
    console.error(e);
  }

  return divDnPath;
}

export async function DnPathEx_CreateGraph4DnPathCache(
  strDnPathId: string,
): Promise<HTMLDivElement> {
  // const intVersionNo = 1;
  const divDnPath: HTMLDivElement = await GetDiv_FieldVersion(strDnPathId);

  const objCmProject = await CMProject_GetObjByCmPrjIdCache(clsPrivateSessionStorage.cmPrjId);
  if (objCmProject == null) return divDnPath;
  const arrDnPathNodeLst = await GetDnPathNodeLstCache(strDnPathId);
  if (arrDnPathNodeLst.length == 0) return divDnPath;
  //let objvFieldTab_Sim = await vFieldTab_SimEx_GetObjByFldIdCache(objDn_Start.fldId, objCmProject.prjId);
  //if (objvFieldTab_Sim == null) return divDnPath;

  const ulDataNode: HTMLUListElement = <HTMLUListElement>document.createElement('ul');
  ulDataNode.id = Format('ulDnPath_{0}', strDnPathId);
  ulDataNode.className = 'nav';
  let intIndex = 1;

  for (let i = 0; i < arrDnPathNodeLst.length - 1; i++) {
    try {
      const objDn_Start = await vDataNode_SimEx_GetObjByDataNodeIdCacheEx(
        arrDnPathNodeLst[i],
        clsPrivateSessionStorage.currSelPrjId,
      );
      if (objDn_Start == null) {
        await DnPathEx_SetIsHasError(strDnPathId, clsPrivateSessionStorage.currSelPrjId);
        return divDnPath;
      }
      const objDn_End = await vDataNode_SimEx_GetObjByDataNodeIdCacheEx(
        arrDnPathNodeLst[i + 1],
        clsPrivateSessionStorage.currSelPrjId,
      );
      if (objDn_End == null) {
        await DnPathEx_SetIsHasError(strDnPathId, clsPrivateSessionStorage.currSelPrjId);
        return divDnPath;
      }

      const objDataNodeMapFunc_In = await DnFuncMapEx_GetObjByInOutDataNodeIdCacheEx(
        objDn_Start.dataNodeId,
        objDn_End.dataNodeId,
      );
      if (objDataNodeMapFunc_In == null) {
        await DnPathEx_SetIsHasError(strDnPathId, clsPrivateSessionStorage.currSelPrjId);
        return divDnPath;
      }
      const li_DataNode: HTMLLIElement = document.createElement('li');
      li_DataNode.className = 'nav-item';
      li_DataNode.id = Format('liDataNode_{0}', objDn_Start.dataNodeId);

      const spnDataNode = await GetSpan_DataNode(objDn_Start);

      li_DataNode.appendChild(spnDataNode);

      ulDataNode.appendChild(li_DataNode);

      const li_Sub: HTMLLIElement = document.createElement('li');
      li_Sub.className = 'nav-item';
      li_Sub.id = Format('liSub_{0}', objDn_Start.dataNodeId);

      const li_Arraw = await getArrawLi(objDataNodeMapFunc_In, intIndex);
      if (li_Arraw == null) continue;

      li_Sub.appendChild(li_Arraw);
      ulDataNode.appendChild(li_Sub);
      intIndex++;

      //    i_NodeNum++;
      //}//while，循环，同一个字段有多个结点
      divDnPath.appendChild(ulDataNode);
    } catch (e) {
      console.error(e);
    }
  }

  //处理最后一个结点
  try {
    const objDn_End = await vDataNode_SimEx_GetObjByDataNodeIdCacheEx(
      arrDnPathNodeLst[arrDnPathNodeLst.length - 1],
      clsPrivateSessionStorage.currSelPrjId,
    );
    if (objDn_End == null) return divDnPath;

    const li_DataNode: HTMLLIElement = document.createElement('li');
    li_DataNode.className = 'nav-item';
    li_DataNode.id = Format('liDataNode_{0}', objDn_End.dataNodeId);

    const spnDataNode = await GetSpan_DataNode(objDn_End);

    li_DataNode.appendChild(spnDataNode);

    ulDataNode.appendChild(li_DataNode);

    //    i_NodeNum++;
    //}//while，循环，同一个字段有多个结点
    divDnPath.appendChild(ulDataNode);
  } catch (e) {
    console.error(e);
  }

  return divDnPath;
}

async function btnCreatePath_click(strStartNodeId: number, strEndNodeId: number) {
  try {
    const objDnPath = await DnPathEx_CreateDnPath(
      clsPrivateSessionStorage.currSelPrjId,
      strStartNodeId,
      strEndNodeId,
      clsPubLocalStorage.userId,
    );
    if (objDnPath == null) {
      vDnPath_Sim_ReFreshThisCache(clsPrivateSessionStorage.currSelPrjId);
      const strMsg = `生成路径出错,请检查！`;
      alert(strMsg);
      return;
    }
    vDnPath_Sim_ReFreshThisCache(clsPrivateSessionStorage.currSelPrjId);
    vuebtn_Click('Bind_PathOutFldName', strStartNodeId);
    console.error(objDnPath);
    const strMsg1 = `生成一个名为${objDnPath.dnPathName}的路径！`;
    alert(strMsg1);
  } catch (e: any) {
    vDnPath_Sim_ReFreshThisCache(clsPrivateSessionStorage.currSelPrjId);

    console.log('catch(e)=');
    console.error(e);
    const strMsg = `生成路径不成功. ${e}.`;

    alert(strMsg);
  }
}
export function DnPathEx_GetButton_CreatePath(
  strStartNodeId: number,
  strEndNodeId: number,
): HTMLButtonElement {
  const btnCreatePath: HTMLButtonElement = document.createElement('button');

  btnCreatePath.id = Format('btnCreateFunc{0}_{1}', strStartNodeId, strEndNodeId);
  btnCreatePath.className = 'btn btn-outline-info btn-sm text-nowrap ml-1';
  btnCreatePath.title = '建立路径';

  (function (strStartNodeId, strEndNodeId) {
    btnCreatePath.onclick = function () {
      btnCreatePath_click(strStartNodeId, strEndNodeId);
    };
  })(strStartNodeId, strEndNodeId);
  btnCreatePath.innerText = '建立路径';
  return btnCreatePath;
}

export async function DnPathEx_CreateGraph4InOutDataNode(
  strTempDnPathId: string,
  strInDataNodeId: number,
  strOutDataNodeId: number,
  strCmPrjId: string,
): Promise<HTMLDivElement | null> {
  const dnFuncMapStore = useDnFuncMapStore();
  // const intVersionNo = 1;
  const strPrjId = await CMProjectEx_GetPrjIdByCmPrjIdCache(strCmPrjId);
  const divDnPath: HTMLDivElement = await GetDiv_FieldVersion(strTempDnPathId);

  const objCmProject = await CMProject_GetObjByCmPrjIdCache(strCmPrjId);
  if (objCmProject == null) return divDnPath;

  let objGraphPath;
  try {
    objGraphPath = await dnFuncMapStore.getGraphPath(strInDataNodeId, strOutDataNodeId, strPrjId);
  } catch (e) {
    console.error(e);
    throw e;
  }
  if (objGraphPath == null) return null;
  const arrDnFuncMapLst = objGraphPath.graphPath;
  if (arrDnFuncMapLst == null) return null;
  if (arrDnFuncMapLst.length == 0) return null;
  if (arrDnFuncMapLst.length == 1) {
    if (arrDnFuncMapLst[0].funcMapModeId == enumFuncMapMode.Table_01) return null;
    if (IsNullOrEmpty(arrDnFuncMapLst[0].dnFunctionId) == true) return null;
    const objDnFunction = await DnFunction_GetObjByDnFunctionIdCache(
      arrDnFuncMapLst[0].dnFunctionId,
      strPrjId,
    );
    if (objDnFunction == null) return null;
    if (objDnFunction.dnFunctionName == 'equal') return null;
  }
  const objDnFuncMap_Last = arrDnFuncMapLst[arrDnFuncMapLst.length - 1];
  if (objDnFuncMap_Last.funcMapModeId == enumFuncMapMode.Function_02) {
    const objDnFunction = await DnFunction_GetObjByDnFunctionIdCache(
      objDnFuncMap_Last.dnFunctionId,
      objDnFuncMap_Last.prjId,
    );
    if (objDnFunction == null) return divDnPath;
    if (objDnFunction.dnFunctionName == 'equal') return divDnPath;
  }
  //let objvFieldTab_Sim = await vFieldTab_SimEx_GetObjByFldIdCache(objDn_Start.fldId, objCmProject.prjId);
  //if (objvFieldTab_Sim == null) return divDnPath;

  const ulDataNode: HTMLUListElement = <HTMLUListElement>document.createElement('ul');
  ulDataNode.id = Format('ulDnPath_{0}', strTempDnPathId);
  ulDataNode.className = 'nav';
  let intIndex = 1;
  if (arrDnFuncMapLst.length == 0) return null;
  for (let i = 0; i < arrDnFuncMapLst.length; i++) {
    try {
      const objDataNodeMapFunc_In = arrDnFuncMapLst[i];
      const objDn_Start = await vDataNode_SimEx_GetObjByDataNodeIdCacheEx(
        arrDnFuncMapLst[i].inDataNodeId,
        clsPrivateSessionStorage.currSelPrjId,
      );
      if (objDn_Start == null) return divDnPath;

      const objDn_End = await vDataNode_SimEx_GetObjByDataNodeIdCacheEx(
        arrDnFuncMapLst[i].outDataNodeId,
        clsPrivateSessionStorage.currSelPrjId,
      );
      if (objDn_End == null) return divDnPath;
      const li_DataNode: HTMLLIElement = document.createElement('li');
      li_DataNode.className = 'nav-item';
      li_DataNode.id = Format('liDataNode_{0}', objDn_Start.dataNodeId);

      const spnDataNode = await GetSpan_DataNode(objDn_Start);

      li_DataNode.appendChild(spnDataNode);

      ulDataNode.appendChild(li_DataNode);

      const li_Sub: HTMLLIElement = document.createElement('li');
      li_Sub.className = 'nav-item';
      li_Sub.id = Format('liSub_{0}', objDn_Start.dataNodeId);

      const li_Arraw = await getArrawLi(objDataNodeMapFunc_In, intIndex);
      if (li_Arraw == null) continue;

      li_Sub.appendChild(li_Arraw);
      ulDataNode.appendChild(li_Sub);
      intIndex++;

      //    i_NodeNum++;
      //}//while，循环，同一个字段有多个结点
      divDnPath.appendChild(ulDataNode);
    } catch (e) {
      console.error(e);
    }
  }

  //处理最后一个结点
  try {
    const objDn_End = await vDataNode_SimEx_GetObjByDataNodeIdCacheEx(
      arrDnFuncMapLst[arrDnFuncMapLst.length - 1].outDataNodeId,
      clsPrivateSessionStorage.currSelPrjId,
    );
    if (objDn_End == null) return divDnPath;

    const li_DataNode: HTMLLIElement = document.createElement('li');
    li_DataNode.className = 'nav-item';
    li_DataNode.id = Format('liDataNode_{0}', objDn_End.dataNodeId);

    const spnDataNode = await GetSpan_DataNode(objDn_End);

    li_DataNode.appendChild(spnDataNode);

    ulDataNode.appendChild(li_DataNode);

    //    i_NodeNum++;
    //}//while，循环，同一个字段有多个结点
    divDnPath.appendChild(ulDataNode);
  } catch (e) {
    console.error(e);
  }

  //if (arrDnFuncMapLst.length > 1) {
  const btnCreatePath = DnPathEx_GetButton_CreatePath(strInDataNodeId, strOutDataNodeId);
  divDnPath.appendChild(btnCreatePath);
  //}
  //else {//处理一条边已经在上面处理过了
  //    const spnOnlyOneEdge = DnPathEx_GetSpan_OnlyOneEdge();
  //    divDnPath.appendChild(spnOnlyOneEdge);
  //}
  return divDnPath;
}

/**
 * 为只有一条边的建立提示信息
 */
export function DnPathEx_GetSpan_OnlyOneEdge(): HTMLSpanElement {
  const spnField: HTMLSpanElement = document.createElement('span');
  spnField.className = 'text-white bg-success';
  spnField.innerHTML = '只有一条边，不需要建立路径！';
  return spnField;
}

/// <summary>
/// 根据输入，输出结点获取Dn路径, 从缓存的对象列表中获取.没有就返回null.
/// </summary>
/// <param name = "strInDataNodeId">In结点</param>
/// <param name = "strOutDataNodeId">Out结点</param>
/// <param name = "strCmPrjId">缓存的分类字段</param>
/// <returns>根据关键字获取的对象</returns>
export async function DnPathEx_GetObjByInOutDataNodeIdCacheEx(
  strInDataNodeId: number,
  strOutDataNodeId: number,
  strInTabId: string,
  strPrjId: string,
): Promise<clsvDnPath_SimEN | null> {
  //获取缓存中的对象列表
  // const strThisFuncName = 'GetObjByInOutDataNodeIdCacheEx';
  const arrDnPathObjLstCache = await vDnPath_Sim_GetObjLstCache(strPrjId);
  const objDnPath = arrDnPathObjLstCache.filter(
    (x) => x.inDataNodeId == strInDataNodeId && x.outDataNodeId == strOutDataNodeId,
  );
  if (objDnPath == null) {
    const strCondition = Format(
      "{0}='{1}' and {2}='{3}'",
      clsDnPathEN.con_InDataNodeId,
      strInDataNodeId,
      clsDnPathEN.con_OutDataNodeId,
      strOutDataNodeId,
    );

    const obj = await vDnPath_Sim_GetFirstObjAsync(strCondition);
    if (obj != null) {
      //if (obj.cmPrjId == strCmPrjId) {
      vDnPath_Sim_ReFreshThisCache(clsPrivateSessionStorage.currSelPrjId);
      //}
      //else {
      //    const strMsg = Format("错误: In结点:{0}, Out结点:{1} 之间不存在Dn路径，在CM工程:{2}中,请检查！(In {3}.{4})",
      //        strInDataNodeId, strOutDataNodeId, strCmPrjId, dnPathEx_ConstructorName, strThisFuncName);
      //    console.error(strMsg);
      //}
      return obj;
    }
    return null;
  }
  return objDnPath[0];
}

/**
 * 获取两个端点之间的路径，以结点列表的形式
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strStartNodeId: 开始结点
 * @param strEndNodeId: 末端结点Id
 * @param strCmPrjId: CM工程Id
 * @returns 获取的相应对象列表
 */
export async function DnPathEx_GetGraphPath(
  strStartNodeId: number,
  strEndNodeId: string,
  strPrjId: string,
): Promise<Array<clsDataNodeEN>> {
  const strThisFuncName = DnPathEx_GetGraphPath.name;
  const strAction = 'GetGraphPath';
  const strUrl = GetWebApiUrl(dnPathEx_Controller, strAction);
  // const mapParam: Dictionary = new Dictionary();
  // mapParam.add('strStartNodeId', strStartNodeId);
  // mapParam.add('strEndNodeId', strEndNodeId);
  // mapParam.add('strPrjId', strPrjId);
  // const strData = mapParam.getParamText(); // "例如: strIdentityID =01";

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strStartNodeId,
      strEndNodeId,
      strPrjId,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          dnPathEx_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = DataNode_GetObjLstByJSONObjLst(returnObjLst);
      return arrObjLst;
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
        dnPathEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        dnPathEx_ConstructorName,
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
 * 根据输入，输出结点建立一个默认边列表的路径
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strCmPrjId: CM工程Id
 * @param strStartNodeId: 开始结点
 * @param strEndNodeId: 末端结点Id
 * @param strOpUserId: 操作用户Id
 * @returns 获取的相应对象列表
 */
export async function DnPathEx_CreateDnPath(
  strPrjId: string,
  strStartNodeId: number,
  strEndNodeId: number,
  strOpUserId: string,
): Promise<clsDnPathEN | null> {
  const strThisFuncName = DnPathEx_CreateDnPath.name;
  const strAction = 'CreateDnPath';
  const strUrl = GetWebApiUrl(dnPathEx_Controller, strAction);
  // const mapParam: Dictionary = new Dictionary();
  // mapParam.add('strPrjId', strPrjId);
  // mapParam.add('strStartNodeId', strStartNodeId);
  // mapParam.add('strEndNodeId', strEndNodeId);
  // mapParam.add('strOpUserId', strOpUserId);
  // const strData = mapParam.getParamText(); // "例如: strIdentityID =01";

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strPrjId,
      strStartNodeId,
      strEndNodeId,
      strOpUserId,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObj = data.returnObj;
      if (returnObj == null) {
        return null;
      }
      //console.log(returnObj);
      const objAssociationMapping = DnPath_GetObjFromJsonObj(returnObj);
      return objAssociationMapping;
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
        dnPathEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        dnPathEx_ConstructorName,
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
 * 根据扩展字段名去调用相应的映射函数
 * 作者:潘以锋
 * 日期:00-00-00
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function DnPathEx_FuncMapByFldName(strFldName: string, objDnPathEx: clsDnPathENEx) {
  const strThisFuncName = DnPathEx_FuncMapByFldName.name;
  let strMsg = '';
  //如果是本表中字段，不需要映射
  const arrFldName = clsDnPathEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsDnPathENEx.con_RefNum:
      return DnPathEx_FuncMap_RefNum(objDnPathEx);
    case clsDnPathENEx.con_InDataNodeName:
      return DnPathEx_FuncMap_InDataNodeName(objDnPathEx);
    case clsDnPathENEx.con_InFldName:
      return DnPathEx_FuncMap_InFldName(objDnPathEx);
    case clsDnPathENEx.con_InFldId:
      return DnPathEx_FuncMap_InFldId(objDnPathEx);
    case clsDnPathENEx.con_OutDataNodeName:
      return DnPathEx_FuncMap_OutDataNodeName(objDnPathEx);
    case clsDnPathENEx.con_OutFldName:
      return DnPathEx_FuncMap_OutFldName(objDnPathEx);
    case clsDnPathENEx.con_DataNodeName:
      return DnPathEx_FuncMap_DataNodeName(objDnPathEx);
    case clsDnPathENEx.con_AssociationMappingName:
      return DnPathEx_FuncMap_AssociationMappingName(objDnPathEx);

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
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objDnPathS:源对象
 **/
export async function DnPathEx_FuncMap_OutFldName(objDnPath: clsDnPathENEx) {
  const strThisFuncName = DnPathEx_FuncMap_OutFldName.name;
  try {
    if (IsNullOrEmpty(objDnPath.outFldName) == true) {
      const vDataNode_SimDataNodeId = objDnPath.outDataNodeId;
      const vDataNode_SimFldId = await vDataNode_SimEx_GetFldIdByDataNodeIdCacheEx(
        vDataNode_SimDataNodeId,
        objDnPath.prjId,
      );
      const vFieldTab_Sim_FldId = vDataNode_SimFldId;
      const vFieldTab_Sim_FldName = await vFieldTab_SimEx_func(
        clsvFieldTab_SimEN.con_FldId,
        clsvFieldTab_SimEN.con_FldName,
        vFieldTab_Sim_FldId,
        clsPrivateSessionStorage.currSelPrjId,
      );
      objDnPath.outFldName = vFieldTab_Sim_FldName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000176)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      dnPathEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objDnPathS:源对象
 **/
export async function DnPathEx_FuncMap_RefNum(objDnPath: clsDnPathENEx) {
  const strThisFuncName = DnPathEx_FuncMap_InDataNodeName.name;
  try {
    if (objDnPath.refNum == 0) {
      const arrvPrjTabFld_DnPathId = await vPrjTabFld_DnPathId_GetObjLstCache(
        clsPrivateSessionStorage.cmPrjId,
      );
      const arrvPrjTabFld_DnPathId_Sel = arrvPrjTabFld_DnPathId.filter(
        (x) => x.dnPathId == objDnPath.dnPathId,
      );
      objDnPath.refNum =
        arrvPrjTabFld_DnPathId_Sel.length == 0 ? -1 : arrvPrjTabFld_DnPathId_Sel.length;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000136)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      dnPathEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objDnPathS:源对象
 **/
export async function DnPathEx_FuncMap_InDataNodeName(objDnPath: clsDnPathENEx) {
  const strThisFuncName = DnPathEx_FuncMap_InDataNodeName.name;
  try {
    if (IsNullOrEmpty(objDnPath.inDataNodeName) == true) {
      const DataNode_DataNodeId = objDnPath.inDataNodeId;
      const DataNode_DataNodeName = await vDataNode_SimEx_GetNameByDataNodeIdCacheEx(
        DataNode_DataNodeId,
        objDnPath.prjId,
      );
      objDnPath.inDataNodeName = DataNode_DataNodeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000136)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      dnPathEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objDnPathS:源对象
 **/
export async function DnPathEx_FuncMap_OutDataNodeName(objDnPath: clsDnPathENEx) {
  const strThisFuncName = DnPathEx_FuncMap_OutDataNodeName.name;
  try {
    if (IsNullOrEmpty(objDnPath.outDataNodeName) == true) {
      const DataNode_DataNodeId = objDnPath.outDataNodeId;
      const DataNode_DataNodeName = await vDataNode_SimEx_GetNameByDataNodeIdCacheEx(
        DataNode_DataNodeId,
        objDnPath.prjId,
      );
      objDnPath.outDataNodeName = DataNode_DataNodeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000137)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      dnPathEx_ConstructorName,
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
export function DnPathEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  // const strThisFuncName = 'SortFunByKey';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsDnPathENEx.con_InDataNodeName:
        return (a: clsDnPathENEx, b: clsDnPathENEx) => {
          return a.inDataNodeName.localeCompare(b.inDataNodeName);
        };
      case clsDnPathENEx.con_InFldName:
        return (a: clsDnPathENEx, b: clsDnPathENEx) => {
          return a.inFldName.localeCompare(b.inFldName);
        };
      case clsDnPathENEx.con_InFldId:
        return (a: clsDnPathENEx, b: clsDnPathENEx) => {
          return a.inFldId.localeCompare(b.inFldId);
        };
      case clsDnPathENEx.con_OutDataNodeName:
        return (a: clsDnPathENEx, b: clsDnPathENEx) => {
          return a.outDataNodeName.localeCompare(b.outDataNodeName);
        };
      case clsDnPathENEx.con_OutFldName:
        return (a: clsDnPathENEx, b: clsDnPathENEx) => {
          return a.outFldName.localeCompare(b.outFldName);
        };
      case clsDnPathENEx.con_DataNodeName:
        return (a: clsDnPathENEx, b: clsDnPathENEx) => {
          return a.dataNodeName.localeCompare(b.dataNodeName);
        };
      case clsDnPathENEx.con_AssociationMappingName:
        return (a: clsDnPathENEx, b: clsDnPathENEx) => {
          return a.associationMappingName.localeCompare(b.associationMappingName);
        };
      case clsDnPathENEx.con_TrClass:
        return (a: clsDnPathENEx, b: clsDnPathENEx) => {
          return a.trClass.localeCompare(b.trClass);
        };
      case clsDnPathENEx.con_RefNum:
        return (a: clsDnPathENEx, b: clsDnPathENEx) => {
          return a.refNum - b.refNum;
        };
      default:
        return DnPath_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsDnPathENEx.con_InDataNodeName:
        return (a: clsDnPathENEx, b: clsDnPathENEx) => {
          return b.inDataNodeName.localeCompare(a.inDataNodeName);
        };
      case clsDnPathENEx.con_InFldName:
        return (a: clsDnPathENEx, b: clsDnPathENEx) => {
          return b.inFldName.localeCompare(a.inFldName);
        };
      case clsDnPathENEx.con_InFldId:
        return (a: clsDnPathENEx, b: clsDnPathENEx) => {
          return b.inFldId.localeCompare(a.inFldId);
        };
      case clsDnPathENEx.con_OutDataNodeName:
        return (a: clsDnPathENEx, b: clsDnPathENEx) => {
          return b.outDataNodeName.localeCompare(a.outDataNodeName);
        };
      case clsDnPathENEx.con_OutFldName:
        return (a: clsDnPathENEx, b: clsDnPathENEx) => {
          return b.outFldName.localeCompare(a.outFldName);
        };
      case clsDnPathENEx.con_DataNodeName:
        return (a: clsDnPathENEx, b: clsDnPathENEx) => {
          return b.dataNodeName.localeCompare(a.dataNodeName);
        };
      case clsDnPathENEx.con_AssociationMappingName:
        return (a: clsDnPathENEx, b: clsDnPathENEx) => {
          return b.associationMappingName.localeCompare(a.associationMappingName);
        };
      case clsDnPathENEx.con_TrClass:
        return (a: clsDnPathENEx, b: clsDnPathENEx) => {
          return b.trClass.localeCompare(a.trClass);
        };
      case clsDnPathENEx.con_RefNum:
        return (a: clsDnPathENEx, b: clsDnPathENEx) => {
          return b.refNum - a.refNum;
        };
      default:
        return DnPath_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function DnPathEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsDnPathENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrDnPathObjLst = await DnPath_GetObjLstByPagerAsync(objPagerPara);
  const arrDnPathExObjLst = arrDnPathObjLst.map(DnPathEx_CopyToEx);

  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsDnPathEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrDnPathExObjLst) {
      await DnPathEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrDnPathExObjLst.length == 0) return arrDnPathExObjLst;
  let arrDnPath_Sel: Array<clsDnPathENEx> = arrDnPathExObjLst;
  try {
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrDnPath_Sel = arrDnPath_Sel.sort(DnPathEx_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrDnPath_Sel = arrDnPath_Sel.sort(objPagerPara.sortFun);
    }

    return arrDnPath_Sel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      dnPathEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsDnPathENEx>();
}

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function DnPathEx_GetObjExLst4NoNeedAsync(
  objPagerPara: stuPagerPara,
  strPrjId: string,
): Promise<Array<clsDnPathENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrDnPathObjLst0 = await DnPath_GetObjLstByPagerAsync(objPagerPara);
  const arrDnPathExObjLst0 = arrDnPathObjLst0.map(DnPathEx_CopyToEx);

  const arrDnPathExObjLst = await DnPathEx_GetNoNeedDnPath(arrDnPathExObjLst0, strPrjId);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsDnPathEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrDnPathExObjLst) {
      await DnPathEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrDnPathExObjLst.length == 0) return arrDnPathExObjLst;
  let arrDnPath_Sel: Array<clsDnPathENEx> = arrDnPathExObjLst;
  try {
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrDnPath_Sel = arrDnPath_Sel.sort(DnPathEx_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrDnPath_Sel = arrDnPath_Sel.sort(objPagerPara.sortFun);
    }

    return arrDnPath_Sel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      dnPathEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsDnPathENEx>();
}

export async function DnPathEx_GetNoNeedDnPath(
  arrDnPathExObjLst: Array<clsDnPathENEx>,
  strPrjId: string,
): Promise<Array<clsDnPathENEx>> {
  const arrDnPathExObjLstB = new Array<clsDnPathENEx>();

  for (const objDnPathEx of arrDnPathExObjLst) {
    const arrDnPathNodeLst = await GetDnPathNodeLstCache(objDnPathEx.dnPathId);
    if (arrDnPathNodeLst.length == 0) continue;
    const intLen = arrDnPathNodeLst.length;
    if (intLen < 2) {
      arrDnPathExObjLstB.push(objDnPathEx);
      continue;
    }

    const objDn_Start = await vDataNode_SimEx_GetObjByDataNodeIdCacheEx(
      arrDnPathNodeLst[intLen - 2],
      clsPrivateSessionStorage.currSelPrjId,
    );
    if (objDn_Start == null) {
      arrDnPathExObjLstB.push(objDnPathEx);
      continue;
    }
    const objDn_End = await vDataNode_SimEx_GetObjByDataNodeIdCacheEx(
      arrDnPathNodeLst[intLen - 1],
      clsPrivateSessionStorage.currSelPrjId,
    );
    if (objDn_End == null) {
      arrDnPathExObjLstB.push(objDnPathEx);
      continue;
    }

    const objDataNodeMapFunc_In = await DnFuncMapEx_GetObjByInOutDataNodeIdCacheEx(
      objDn_Start.dataNodeId,
      objDn_End.dataNodeId,
    );
    if (objDataNodeMapFunc_In == null) continue;
    if (objDataNodeMapFunc_In.funcMapModeId == enumFuncMapMode.Function_02) {
      const objDnFunction = await DnFunction_GetObjByDnFunctionIdCache(
        objDataNodeMapFunc_In.dnFunctionId,
        strPrjId,
      );
      if (objDnFunction == null) {
        arrDnPathExObjLstB.push(objDnPathEx);
        continue;
      }
      if (objDnFunction?.dnFunctionName == 'equal') {
        arrDnPathExObjLstB.push(objDnPathEx);
      }
    }
  }
  return arrDnPathExObjLstB;
}

export async function DnPathEx_SetIsHasError(
  strDnPathId: string,
  strPrjId: string,
): Promise<boolean> {
  const strThisFuncName = DnPathEx_SetIsHasError.name;
  const objDnPath = new clsDnPathEN();
  objDnPath.SetDnPathId(strDnPathId);
  objDnPath.SetIsHasErr(true);
  objDnPath.SetPrjId(strPrjId);
  objDnPath.sfUpdFldSetStr = objDnPath.updFldString; //设置哪些字段被修改(脏字段)
  if (objDnPath.dnPathId == '' || objDnPath.dnPathId == undefined) {
    console.error('关键字不能为空!');
    throw '关键字不能为空!';
  }
  try {
    DnPath_CheckProperty4Update(objDnPath);
  } catch (e) {
    const strMsg = Format(
      '检查数据不成功,{0}.(in {1}.{2})',
      e,
      dnPathEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return false; //一定要有一个返回值，否则会出错！
  }
  try {
    const returnBool = await DnPath_UpdateRecordAsync(objDnPath);
    if (returnBool == true) {
      //DnPath_ReFreshCache();
    }
    return returnBool;
  } catch (e) {
    const strMsg = Format(
      '修改记录不成功,{0}.(in {1}.{2})',
      e,
      dnPathEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return false;
  }
}

/**
 * 检查结点路径，如果有结点为空，或者映射函数为空就抛错.
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strDnPathId: 路径Id
 * @param strOpUserId: 操作用户Id
 * @returns 获取的相应对象列表
 */
export async function DnPathEx_CheckDnPath(
  strDnPathId: string,
  strOpUserId: string,
): Promise<boolean> {
  const strThisFuncName = DnPathEx_CheckDnPath.name;
  const strAction = 'CheckDnPath';
  const strUrl = DnPathEx_GetWebApiUrl(dnPathEx_Controller, strAction);
  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strDnPathId,
      strOpUserId,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      return data.returnBool;
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
        dnPathEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        dnPathEx_ConstructorName,
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
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function DnPathEx_GetWebApiUrl(strController: string, strAction: string): string {
  // const strThisFuncName = 'GetWebApiUrl';
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
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objDnPathS:源对象
 **/
export async function DnPathEx_FuncMap_InFldId(objDnPath: clsDnPathENEx) {
  const strThisFuncName = DnPathEx_FuncMap_InFldId.name;
  const vDataNode_SimStore = usevDataNode_SimStore();
  try {
    if (IsNullOrEmpty(objDnPath.inFldId) == true) {
      const vDataNode_SimDataNodeId = objDnPath.inDataNodeId;
      const vDataNode_SimFldId = await vDataNode_SimStore.getFldId(vDataNode_SimDataNodeId);
      objDnPath.inFldId = vDataNode_SimFldId;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000247)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      dnPathEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 检查结点路径，如果有同一个In结点有相同的Out字段名就抛错.
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strCmPrjId: CM工程Id
 * @param strOpUserId: 操作用户Id
 * @returns 获取的相应对象列表
 */
export async function DnPathEx_CheckDnPathDuplicate(
  strPrjId: string,
  strOpUserId: string,
): Promise<number> {
  const strThisFuncName = DnPathEx_CheckDnPathDuplicate.name;
  const strAction = 'CheckDnPathDuplicate';
  const strUrl = DnPathEx_GetWebApiUrl(dnPathEx_Controller, strAction);
  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strPrjId,
      strOpUserId,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      return data.returnInt;
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
        dnPathEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        dnPathEx_ConstructorName,
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
 * 计算每个路径的边数
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strCmPrjId: CM工程Id
 * @param strOpUserId: 操作用户Id
 * @returns 获取的相应对象列表
 */
export async function DnPathEx_CalcDnPathEdgeNum(
  strPrjId: string,
  strOpUserId: string,
): Promise<number> {
  const strThisFuncName = DnPathEx_CalcDnPathEdgeNum.name;
  const strAction = 'CalcDnPathEdgeNum';
  const strUrl = DnPathEx_GetWebApiUrl(dnPathEx_Controller, strAction);
  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strPrjId,
      strOpUserId,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      return data.returnInt;
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
        dnPathEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        dnPathEx_ConstructorName,
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
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2023-01-30
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function DnPathEx_SortFunForDuplicate(a: clsDnPathENEx, b: clsDnPathENEx): number {
  // const strThisFuncName = 'DnPathEx_SortFunForDuplicate';
  if (a.inDataNodeId == b.inDataNodeId && a.outFldName == b.outFldName)
    return a.edgeNum - b.edgeNum;
  else if (a.inDataNodeId == b.inDataNodeId) return a.outFldName.localeCompare(b.outFldName);
  else return a.inDataNodeId - b.inDataNodeId;
}

/**
 * 自动删除重复路径.
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strCmPrjId: CM工程Id
 * @param strOpUserId: 操作用户Id
 * @returns 获取的相应对象列表
 */
export async function DnPathEx_DelDnPathDuplicate(
  strPrjId: string,
  strOpUserId: string,
): Promise<number> {
  const strThisFuncName = DnPathEx_DelDnPathDuplicate.name;
  const strAction = 'DelDnPathDuplicate';
  const strUrl = DnPathEx_GetWebApiUrl(dnPathEx_Controller, strAction);
  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strPrjId,
      strOpUserId,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      return data.returnInt;
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
        dnPathEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        dnPathEx_ConstructorName,
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
 * 删除路径,如果出错，进行错误分析
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strDnPathId: 路径Id
 * @param strCmPrjId: CM工程Id
 * @param strOpUserId: 操作用户Id
 * @returns 获取的相应对象列表
 */
export async function DnPathEx_DelDnPath(
  strDnPathId: string,
  strPrjId: string,
  strOpUserId: string,
): Promise<number> {
  const strThisFuncName = DnPathEx_DelDnPath.name;
  const strAction = 'DelDnPath';
  const strUrl = DnPathEx_GetWebApiUrl(dnPathEx_Controller, strAction);
  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strDnPathId,
      strPrjId,
      strOpUserId,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      return data.returnInt;
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
        dnPathEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        dnPathEx_ConstructorName,
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
 * @param objDnPathS:源对象
 **/
export async function DnPathEx_FuncMap_DataNodeName(objDnPath: clsDnPathENEx) {
  const strThisFuncName = DnPathEx_FuncMap_DataNodeName.name;
  const vDataNode_SimStore = usevDataNode_SimStore();
  try {
    if (IsNullOrEmpty(objDnPath.dataNodeName) == true) {
      const vDataNode_SimDataNodeId = objDnPath.inDataNodeId;
      const vDataNode_SimDataNodeName = await vDataNode_SimStore.getName(vDataNode_SimDataNodeId);
      objDnPath.dataNodeName = vDataNode_SimDataNodeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000240)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      dnPathEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objDnPathS:源对象
 **/
export async function DnPathEx_FuncMap_InFldName(objDnPath: clsDnPathENEx) {
  const strThisFuncName = DnPathEx_FuncMap_InFldName.name;
  const vDataNode_SimStore = usevDataNode_SimStore();
  try {
    if (IsNullOrEmpty(objDnPath.inFldName) == true) {
      const vDataNode_SimDataNodeId = objDnPath.inDataNodeId;
      const vDataNode_SimFldId = await vDataNode_SimStore.getFldId(vDataNode_SimDataNodeId);
      const vFieldTab_Sim_FldId = vDataNode_SimFldId;
      const vFieldTab_Sim_FldName = await vFieldTab_Sim_GetNameByFldIdCache(
        vFieldTab_Sim_FldId,
        clsPrivateSessionStorage.currSelPrjId,
      );
      objDnPath.inFldName = vFieldTab_Sim_FldName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000241)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      dnPathEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objDnPathS:源对象
 **/
export async function DnPathEx_FuncMap_AssociationMappingName(objDnPath: clsDnPathENEx) {
  const strThisFuncName = DnPathEx_FuncMap_AssociationMappingName.name;
  try {
    if (IsNullOrEmpty(objDnPath.associationMappingName) == true) {
      const AssociationMapping_AssociationMappingId = objDnPath.associationMappingId;
      const AssociationMapping_AssociationMappingName = await AssociationMapping_func(
        clsAssociationMappingEN.con_AssociationMappingId,
        clsAssociationMappingEN.con_AssociationMappingName,
        AssociationMapping_AssociationMappingId,
      );
      objDnPath.associationMappingName = AssociationMapping_AssociationMappingName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000138)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      dnPathEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

export async function DnPathEx_ShowDnPath(
  divName4Edit: HTMLDivElement,
  strTdId: string,
  strTabId: string,
  strFldId: string,
  strOutFldId: string,
  strCmPrjId: string,
): Promise<string> {
  const objDataNode_In = await DataNodeEx_GetObjByTabIdAndFldId(strTabId, strFldId, 1, strCmPrjId);
  if (objDataNode_In == null) return '';
  const strDnPathId = await PrjTabFldEx_GetDnPathIdByFldIdCache(strTabId, strOutFldId);
  if (IsNullOrEmpty(strDnPathId) == true) return '';
  const divDnPath = await DnPathEx_CreateGraph4DnPathCache(strDnPathId);
  //this.dnPathId = strDnPathId;
  const objTd = getTdObjByIdInDivObj(divName4Edit, strTdId);
  objTd.innerHTML = '';
  objTd.appendChild(divDnPath);
  return strDnPathId;
}
