import axios from 'axios';

import {
  vPrjTab_SimEx_func,
  vPrjTab_SimEx_GetObjByTabIdCache,
} from '../Table_Field/clsvPrjTab_SimExWApi';
import { vFieldTab_SimEx_func } from '../Table_Field/clsvFieldTab_SimExWApi';
import { PrjTabFldEx_GetObjLstByTabIdCache } from '../Table_Field/clsPrjTabFldExWApi';

import { Storage } from '@/utils/Storage';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { clsDataNodeEN } from '@/ts/L0Entity/AIModule/clsDataNodeEN';
import { clsDataNodeENEx } from '@/ts/L0Entity/AIModule/clsDataNodeENEx';
import { clsDataNodeTypeEN, enumDataNodeType } from '@/ts/L0Entity/AIModule/clsDataNodeTypeEN';

import { clsCMProjectEN } from '@/ts/L0Entity/CodeMan/clsCMProjectEN';
import { clsvFieldTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvFieldTab_SimEN';
import { clsvPrjTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvPrjTab_SimEN';
import { DataNodeType_func } from '@/ts/L3ForWApi/AIModule/clsDataNodeTypeWApi';
import {
  DataNode_AddNewRecordAsync,
  DataNode_AddNewRecordWithReturnKeyAsync,
  DataNode_CheckPropertyNew,
  DataNode_GetCombineCondition,
  DataNode_GetFirstObjAsync,
  DataNode_GetObjLstByJSONObjLst,
  DataNode_GetObjLstByPagerAsync,
  DataNode_IsExistAsync,
  DataNode_IsExistRecordAsync,
  DataNode_SortFunByKey,
} from '@/ts/L3ForWApi/AIModule/clsDataNodeWApi';

import {
  CMProject_func,
  CMProject_GetObjByCmPrjIdCache,
} from '@/ts/L3ForWApi/CodeMan/clsCMProjectWApi';
import {
  BindDdl_ObjLstInDivObj,
  GetSortExpressInfo,
  ObjectAssign,
} from '@/ts/PubFun/clsCommFunc4Web';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { Dictionary } from '@/ts/PubFun/tzDictionary';

import { GetKeyFldStrByKeyLst, GetKeyLstByKeyFldStr } from '@/ts/PubFun/clsArray';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';

import { CMProjectEx_GetPrjIdByCmPrjIdCache } from '@/ts/L3ForWApiEx/CodeMan/clsCMProjectExWApi';
import { usevDnFuncMap_SimStore } from '@/store/modules/vDnFuncMap_Sim';
import { usevDataNode_SimStore } from '@/store/modules/vDataNode_Sim';
import { vFieldTab_Sim_GetObjByFldIdCache } from '@/ts/L3ForWApi/Table_Field/clsvFieldTab_SimWApi';
import { vDataNode_Sim_ReFreshThisCache } from '@/ts/L3ForWApi/AIModule/clsvDataNode_SimWApi';

export const dataNodeEx_Controller = 'DataNodeExApi';
export const dataNodeEx_ConstructorName = 'dataNodeEx';

// export async function DataNodeEx_GetKeyIdByNameCach1e(
//   strDataNodeName: string,
//   strCmPrjId: string,
// ): Promise<string> {
//   // const strCondition = Format("{0}='{1}'", clsDataNodeEN.con_DataNodeName, strDataNodeName);
//   const arrDataNodeCache = await vDataNode_Sim_GetObjLstCache(strCmPrjId);
//   const objDataNode = arrDataNodeCache.find((x) => x.dataNodeName == strDataNodeName);
//   if (objDataNode != null) return objDataNode.dataNodeId;
//   return '';
// }

export async function DataNodeEx_GetNewDataNodeIdByCmPrjId(
  strDataNodeId: number,
  strCmPrjId: string,
): Promise<number> {
  const vDataNode_SimStore = usevDataNode_SimStore();
  const objDataNode = await vDataNode_SimStore.getObj(strDataNodeId);
  if (objDataNode == null) return 0;
  const strPrjId = await CMProjectEx_GetPrjIdByCmPrjIdCache(strCmPrjId);
  const strDataNodeId_T = await vDataNode_SimStore.getKeyIdByName(
    strPrjId,
    objDataNode.dataNodeName,
  );
  return strDataNodeId_T;
}
export async function DataNodeEx_GetObjByTabIdAndFldId(
  strTabId: string,
  strFldId: string,
  intVersionNo: number,
  strCmPrjId: string,
): Promise<clsDataNodeEN | null> {
  console.log(strCmPrjId);
  const objDataNodeCond = new clsDataNodeEN();
  objDataNodeCond.SetCondFldValue(clsDataNodeEN.con_TabId, strTabId, '=');
  objDataNodeCond.SetCondFldValue(clsDataNodeEN.con_FldId, strFldId, '=');
  objDataNodeCond.SetCondFldValue(clsDataNodeEN.con_VersionNo, intVersionNo, '=');

  const strWhere = DataNode_GetCombineCondition(objDataNodeCond);
  const objDataNode = await DataNode_GetFirstObjAsync(strWhere);
  return objDataNode;
}

// export async function DataNodeEx_GetObjLstByTabIdCache(
//   strTabId: string,
//   strCmPrjId: string,
// ): Promise<Array<clsvDataNode_SimEN>> {
//   //初始化列表缓存
//   const arrObjLstCache = await vDataNode_Sim_GetObjLstCache(strCmPrjId);

//   const arrDataNodeObjLst_Sel = arrObjLstCache.filter((x) => x.tabId == strTabId);

//   return arrDataNodeObjLst_Sel;
// }
export async function DataNodeEx_CopyNodeToNewVersion(
  strTabId: string,
  strFldId: string,
  intVersionNo: number,
): Promise<boolean> {
  const vDataNode_SimStore = usevDataNode_SimStore();
  const objDataNodeCond = new clsDataNodeEN();
  objDataNodeCond.SetCondFldValue(clsDataNodeEN.con_TabId, strTabId, '=');
  objDataNodeCond.SetCondFldValue(clsDataNodeEN.con_FldId, strFldId, '=');
  objDataNodeCond.SetCondFldValue(clsDataNodeEN.con_VersionNo, intVersionNo, '=');

  const strWhere = DataNode_GetCombineCondition(objDataNodeCond);
  const objDataNode = await DataNode_GetFirstObjAsync(strWhere);
  if (objDataNode == null) {
    const strMsg = Format('条件:[{0}]的记录不存在！', strWhere);
    throw new Error(strMsg);
  }
  intVersionNo = intVersionNo + 1;
  const objDataNodeCond_New = new clsDataNodeEN();
  objDataNodeCond_New.SetCondFldValue(clsDataNodeEN.con_TabId, strTabId, '=');
  objDataNodeCond_New.SetCondFldValue(clsDataNodeEN.con_FldId, strFldId, '=');
  objDataNodeCond_New.SetCondFldValue(clsDataNodeEN.con_VersionNo, intVersionNo, '=');

  const strWhere_New = DataNode_GetCombineCondition(objDataNodeCond_New);
  let bolIsExist = await DataNode_IsExistRecordAsync(strWhere_New);
  if (bolIsExist == true) {
    const strMsg = Format('条件:[{0}]的新版本记录已经存在！', strWhere);
    throw new Error(strMsg);
  }
  // objDataNode.dataNodeId = await DataNode_GetMaxStrIdAsync();
  objDataNode.versionNo = intVersionNo;
  objDataNode.updDate = clsDateTime.getTodayDateTimeStr(1); // 修改日期
  objDataNode.updUser = clsPubLocalStorage.userId; // 修改者
  bolIsExist = await DataNode_IsExistRecordAsync(strWhere_New);
  if (bolIsExist == true) {
    const strMsg = Format('条件:[{0}]的新版本记录已经存在！', strWhere);
    throw new Error(strMsg);
  }
  try {
    DataNode_CheckPropertyNew(objDataNode);
  } catch (e: any) {
    const strMsg = `检查数据不成功,${e}.`;
    console.error(strMsg);
    alert(strMsg);
    return false; //一定要有一个返回值，否则会出错！
  }
  try {
    const bolIsExist = await DataNode_IsExistAsync(objDataNode.dataNodeId);

    if (bolIsExist == true) {
      const strMsg = `复制记录时，关键字：${objDataNode.dataNodeId}已经存在！`;
      console.error(strMsg);
      alert(strMsg);
      return bolIsExist; //一定要有一个返回值，否则会出错！
    }
    const returnBool = await DataNode_AddNewRecordAsync(objDataNode);
    if (returnBool == true) {
      vDataNode_SimStore.ReFreshByPrjId(clsPrivateSessionStorage.currSelPrjId);
      const strInfo = `复制记录成功!`;
      //显示信息框
      alert(strInfo);
    } else {
      const strInfo = `复制记录不成功!`;
      //显示信息框
      alert(strInfo);
    }
    return returnBool; //一定要有一个返回值，否则会出错！
  } catch (e: any) {
    const strMsg = `复制记录不成功,${e}.`;
    console.error(strMsg);
    alert(strMsg);
    return false; //一定要有一个返回值，否则会出错！
  }
}

export async function DataNodeEx_CreateObjByTabIdAndFldId(
  strTabId: string,
  strFldId: string,
  strDataNodeTypeId: string,
  intVersionNo: number,
  strCmPrjId: string,
): Promise<clsDataNodeEN | null> {
  const vDataNode_SimStore = usevDataNode_SimStore();
  const objDataNode = new clsDataNodeEN();
  // objDataNode.dataNodeId = await DataNode_GetMaxStrIdAsync(); // 数据结点Id
  objDataNode.tabId = strTabId; // 表
  objDataNode.fldId = strFldId; // 字段
  const objCMProject = await CMProject_GetObjByCmPrjIdCache(strCmPrjId);
  if (objCMProject == null) {
    const strMsg = Format('CM项目Id:[{0}]，没有相应的CM项目，请检查！', strCmPrjId);
    console.error(strMsg);
    alert(strMsg);
    return null;
  }
  const objPrjTab = await vPrjTab_SimEx_GetObjByTabIdCache(strTabId, objCMProject.prjId);
  if (objPrjTab == null) {
    const strMsg = Format(
      '在项目:[{0}]中，表Id:[{1}]没有相应表，请检查！',
      clsPrivateSessionStorage.currSelPrjName,
      strTabId,
    );
    console.error(strMsg);
    alert(strMsg);
    return null;
  }
  const objFieldTab = await vFieldTab_Sim_GetObjByFldIdCache(
    strFldId,
    clsPrivateSessionStorage.currSelPrjId,
  );
  if (objFieldTab == null) {
    const strMsg = Format(
      '在项目:[{0}]中，字段Id:[{1}]没有相应字段，请检查！',
      clsPrivateSessionStorage.currSelPrjName,
      strFldId,
    );
    console.error(strMsg);
    alert(strMsg);
    return null;
  }
  let strVersionNo = '';
  if (intVersionNo > 1) {
    strVersionNo = Format('V{0}', intVersionNo);
  }
  objDataNode.dataNodeName = Format(
    '{0}_{1}{2}',
    objPrjTab.tabName,
    objFieldTab.fldName,
    strVersionNo,
  ); // 结点名
  objDataNode.prjId = objCMProject.prjId; // 工程ID
  objDataNode.dataNodeTypeId = strDataNodeTypeId; // 结点类型
  objDataNode.versionNo = intVersionNo; // 版本号

  objDataNode.memo = '通过表字段添加'; // 说明
  objDataNode.updDate = clsDateTime.getTodayDateTimeStr(1); // 修改日期
  objDataNode.updUser = clsPubLocalStorage.userId; // 修改者
  try {
    const objDataNodeCond = new clsDataNodeEN();
    objDataNodeCond.SetCondFldValue(clsDataNodeEN.con_TabId, strTabId, '=');
    objDataNodeCond.SetCondFldValue(clsDataNodeEN.con_FldId, strFldId, '=');
    objDataNodeCond.SetCondFldValue(clsDataNodeEN.con_VersionNo, intVersionNo, '=');

    const strCondition = DataNode_GetCombineCondition(objDataNodeCond);
    const bolIsExist: boolean = await DataNode_IsExistRecordAsync(strCondition);
    if (bolIsExist == true) {
      const strMsg = `添加记录时，关键字：${objDataNodeCond.dataNodeId}已经存在！`;
      console.error(strMsg);
      alert(strMsg);
      throw strMsg;
    }
    const returnKey = await DataNode_AddNewRecordWithReturnKeyAsync(objDataNode);
    if (IsNullOrEmpty(returnKey) == false && returnKey != '0') {
      objDataNode.dataNodeId = Number(returnKey);
      vDataNode_SimStore.ReFreshByPrjId(clsPrivateSessionStorage.currSelPrjId);
      vDataNode_Sim_ReFreshThisCache(clsPrivateSessionStorage.currSelPrjId);
      // const strInfo = `添加记录成功!`;

      //显示信息框
      return objDataNode;
    } else {
      const strInfo = `添加记录不成功!`;
      console.error(strInfo);
      //显示信息框
      throw strInfo;
    }
  } catch (e: any) {
    const strMsg = `添加记录不成功,${e}.`;
    console.error(strMsg);
    throw strMsg;
  }
}

export async function DataNodeEx_CreateObjByTabIdAndKeyFldLst(
  strTabId: string,
  strKeyFldLst: string,
  intVersionNo: number,
  strCmPrjId: string,
): Promise<clsDataNodeEN | null> {
  const vDataNode_SimStore = usevDataNode_SimStore();
  const arrKeyLst = GetKeyLstByKeyFldStr(strKeyFldLst);
  if (arrKeyLst.length <= 1) {
    const strMsg = Format(
      '根据关键字列表建立结点时，关键字数应该大于1，关键字连接串:[{0}],请检查！',
      strKeyFldLst,
    );
    console.error(strMsg);
    alert(strMsg);
    return null;
  }
  const strKeyFldLst_new = GetKeyFldStrByKeyLst(arrKeyLst);
  const objDataNode = new clsDataNodeEN();
  // objDataNode.dataNodeId = await DataNode_GetMaxStrIdAsync(); // 数据结点Id
  objDataNode.tabId = strTabId; // 表
  objDataNode.fldId = arrKeyLst[0]; // 字段
  objDataNode.keyFldLst = strKeyFldLst_new; // 字段

  const objCMProject = await CMProject_GetObjByCmPrjIdCache(strCmPrjId);
  if (objCMProject == null) {
    const strMsg = Format('CM项目Id:[{0}]，没有相应的CM项目，请检查！', strCmPrjId);
    console.error(strMsg);
    alert(strMsg);
    return null;
  }
  const objPrjTab = await vPrjTab_SimEx_GetObjByTabIdCache(strTabId, objCMProject.prjId);
  if (objPrjTab == null) {
    const strMsg = Format(
      '在项目:[{0}]中，表Id:[{1}]没有相应表，请检查！',
      clsPrivateSessionStorage.currSelPrjName,
      strTabId,
    );
    console.error(strMsg);
    alert(strMsg);
    return null;
  }
  let strDataNodeName = Format('{0}', objPrjTab.tabName);
  for (const strFldId of arrKeyLst) {
    const objFieldTab = await vFieldTab_Sim_GetObjByFldIdCache(
      strFldId,
      clsPrivateSessionStorage.currSelPrjId,
    );
    if (objFieldTab == null) {
      const strMsg = Format(
        '在项目:[{0}]中，字段Id:[{1}]没有相应字段，请检查！',
        clsPrivateSessionStorage.currSelPrjName,
        strFldId,
      );
      console.error(strMsg);
      alert(strMsg);
      return null;
    }
    strDataNodeName += Format('_{0}', objFieldTab.fldName);
  }
  // let strVersionNo = '';
  // if (intVersionNo > 1) {
  //   strVersionNo = Format('V{0}', intVersionNo);
  // }
  objDataNode.dataNodeName = strDataNodeName; // 结点名
  objDataNode.prjId = objCMProject.prjId; // 工程ID
  objDataNode.dataNodeTypeId = enumDataNodeType.Keyword_01; // 结点类型
  objDataNode.versionNo = intVersionNo; // 版本号

  objDataNode.memo = '通过表字段添加'; // 说明
  objDataNode.updDate = clsDateTime.getTodayDateTimeStr(1); // 修改日期
  objDataNode.updUser = clsPubLocalStorage.userId; // 修改者
  try {
    const objDataNodeCond = new clsDataNodeEN();
    objDataNodeCond.SetCondFldValue(clsDataNodeEN.con_TabId, strTabId, '=');
    objDataNodeCond.SetCondFldValue(clsDataNodeEN.con_FldId, arrKeyLst[0], '=');
    objDataNodeCond.SetCondFldValue(clsDataNodeEN.con_KeyFldLst, strKeyFldLst_new, '=');
    objDataNodeCond.SetCondFldValue(clsDataNodeEN.con_VersionNo, intVersionNo, '=');

    const strCondition = DataNode_GetCombineCondition(objDataNodeCond);
    const bolIsExist: boolean = await DataNode_IsExistRecordAsync(strCondition);
    if (bolIsExist == true) {
      const strMsg = `添加记录时，关键字：${objDataNodeCond.dataNodeId}已经存在！`;
      console.error(strMsg);
      alert(strMsg);
      throw strMsg;
    }
    const returnBool = await DataNode_AddNewRecordAsync(objDataNode);
    if (returnBool == true) {
      vDataNode_SimStore.ReFreshByPrjId(clsPrivateSessionStorage.currSelPrjId);
      // const strInfo = `添加记录成功!`;

      //显示信息框
      return objDataNode;
    } else {
      const strInfo = `添加记录不成功!`;
      console.error(strInfo);
      //显示信息框
      throw strInfo;
    }
  } catch (e: any) {
    const strMsg = `添加记录不成功,${e}.`;
    console.error(strMsg);
    throw strMsg;
  }
}

/// <summary>
/// 根据关键字列表删除记录
/// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelMultiRecordAsync)
/// </summary>
/// <param name = "arrDataNodeId">关键字列表</param>
/// <returns>实际删除记录的个数</returns>
export function DataNodeEx_ImportNode4KeyAndNameAsync(strPrjId: string): Promise<number> {
  const strAction = 'ImportNode4KeyAndName';
  const strUrl = GetWebApiUrl(dataNodeEx_Controller, strAction);
  const mapParam: Dictionary = new Dictionary();
  mapParam.add('strPrjId', strPrjId);
  const strData = mapParam.getParamText(); // "例如: strIdentityID =01";
  return new Promise(function (resolve, reject) {
    $.ajax({
      url: strUrl,
      method: 'GET',
      dataType: 'json',
      data: strData,
      success(data: any) {
        if (data.errorId == 0) {
          resolve(data.returnInt);
        } else {
          console.log(data.errorMsg);
          reject(data.errorMsg);
        }
      },
      error(result: any) {
        console.log(result);
        console.log(JSON.stringify(result));
        if (result.statusText == 'error') {
          const strInfo = `网络错误！访问地址:${strUrl}不成功！`;
          reject(strInfo);
        } else {
          reject(result.statusText);
        }
      },
    });
  });
}
export function DataNodeEx_ImportSameSourceBy4KeyNodeAsync(strPrjId: string): Promise<number> {
  const strAction = 'ImportSameSourceBy4KeyNode';
  const strUrl = GetWebApiUrl(dataNodeEx_Controller, strAction);
  const mapParam: Dictionary = new Dictionary();
  mapParam.add('strPrjId', strPrjId);
  const strData = mapParam.getParamText(); // "例如: strIdentityID =01";
  return new Promise(function (resolve, reject) {
    $.ajax({
      url: strUrl,
      method: 'GET',
      dataType: 'json',
      data: strData,
      success(data: any) {
        if (data.errorId == 0) {
          resolve(data.returnInt);
        } else {
          console.log(data.errorMsg);
          reject(data.errorMsg);
        }
      },
      error(result: any) {
        console.log(result);
        console.log(JSON.stringify(result));
        if (result.statusText == 'error') {
          const strInfo = `网络错误！访问地址:${strUrl}不成功！`;
          reject(strInfo);
        } else {
          reject(result.statusText);
        }
      },
    });
  });
}
/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 */
export function DataNodeEx_GetWebApiUrl(strController: string, strAction: string): string {
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
/// <summary>
/// 在CM工程中获取与表Id相关的所有数据结点，即以该表的字段作为起点的所有相关结点
/// (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
/// </summary>
/// <param name = "strTabId">表Id</param>
/// <param name = "strCmPrjId">CM工程Id</param>
/// <returns>获取的相应对象列表</returns>
export async function DataNodeEx_GetConnectedNodeByTabId(
  strTabId: string,
  strPrjId: string,
): Promise<Array<clsDataNodeEN>> {
  const strThisFuncName = DataNodeEx_GetConnectedNodeByTabId.name;
  const strAction = 'GetConnectedNodeByTabId';
  const strUrl = GetWebApiUrl(dataNodeEx_Controller, strAction);
  // const mapParam: Dictionary = new Dictionary();
  // mapParam.add('strTabId', strTabId);
  // mapParam.add('strPrjId', strPrjId);
  // const strData = mapParam.getParamText(); // "例如: strIdentityID =01";

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strTabId,
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
          dataNodeEx_ConstructorName,
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
        dataNodeEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        dataNodeEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

/// <summary>
/// 绑定基于Web的下拉框
/// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)
/// </summary>
/// <param name = "objDDL">需要绑定当前表的下拉框</param>
/// <param name = "strCmPrjId">CM工程Id</param>
export async function DataNodeEx_BindDdl_DataNodeIdInDivExCache(
  strDivName: HTMLDivElement,
  strDdlName: string,
  strTabId: string,
  strPrjId: string,
) {
  const vDataNode_SimStore = usevDataNode_SimStore();
  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format('参数:[strPrjId]不能为空！');
    throw strMsg;
  }
  if (IsNullOrEmpty(strTabId) == true) {
    const strMsg = Format('参数:[strTabId]不能为空！');
    throw strMsg;
  }
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = `下拉框：${strDdlName} 不存在！`;
    alert(strMsg);
    throw strMsg;
  }
  let arrConnectedNode: Array<clsDataNodeEN> = await DataNodeEx_GetConnectedNodeByTabId(
    strTabId,
    strPrjId,
  );

  const arrDataNodeCurrTab = await vDataNode_SimStore.getObjLstByTabId(strTabId);
  const arrDataNodeId_CurrTab = arrDataNodeCurrTab.map((x) => x.dataNodeId);
  //const arrDataNodeTabId = clsDataNodeBLEx.GetObjLstByTabIdCache(objStartNode.tabId, vsPrjIdCache);
  //const arrDataNodeId = arrDataNodeTabId.Select(x => x.dataNodeId);

  arrConnectedNode = arrConnectedNode
    .filter((x) => arrDataNodeId_CurrTab.indexOf(x.dataNodeId) == -1 || x.versionNo > 1)
    .sort(DataNodeEx_SortFunByDataNodeName);

  BindDdl_ObjLstInDivObj(
    strDivName,
    strDdlName,
    arrConnectedNode,
    clsDataNodeEN.con_DataNodeId,
    clsDataNodeEN.con_DataNodeName,
    '数据结点',
  );
}
export function DataNodeEx_SortFunByDataNodeName(a: clsDataNodeEN, b: clsDataNodeEN): number {
  return a.dataNodeName.localeCompare(b.dataNodeName);
}
export function DataNodeEx_SortFunByVersionNoAndDepth(a: clsDataNodeEN, b: clsDataNodeEN): number {
  if (a.versionNo == b.versionNo) return a.depth - b.depth;
  else return a.versionNo - b.versionNo;
}
export function DataNodeEx_SortFunByInOutDegree(a: clsDataNodeENEx, b: clsDataNodeENEx): number {
  if (a.inDegree == b.inDegree) return a.outDegree - b.outDegree;
  else return a.inDegree - b.inDegree;
}

export function DataNodeEx_SortFunByInOutDegreeV2(AscOrDesc: string) {
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    return (a: clsDataNodeENEx, b: clsDataNodeENEx) => {
      if (a.inDegree == b.inDegree) return b.outDegree - a.outDegree;
      else return b.inDegree - a.inDegree;
    };
  } else {
    return (a: clsDataNodeENEx, b: clsDataNodeENEx) => {
      if (a.inDegree == b.inDegree) return a.outDegree - b.outDegree;
      else return a.inDegree - b.inDegree;
    };
  }
}

export function DataNodeEx_SortFunByInOutDegree_Desc(
  a: clsDataNodeENEx,
  b: clsDataNodeENEx,
): number {
  if (a.inDegree == b.inDegree) return b.outDegree - a.outDegree;
  else return b.inDegree - a.inDegree;
}
/// <summary>
/// 在CM工程中获取结点的所有前驱结点列表
/// (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
/// </summary>
/// <param name = "strEndNodeId">末端结点Id</param>
/// <param name = "strCmPrjId">CM工程Id</param>
/// <returns>获取的相应对象列表</returns>
export async function DataNodeEx_GetConnectedNode_Prev(
  strEndNodeId: string,
  strPrjId: string,
): Promise<Array<clsDataNodeEN>> {
  const strThisFuncName = DataNodeEx_GetConnectedNode_Prev.name;
  const strAction = 'GetConnectedNode_Prev';
  const strUrl = GetWebApiUrl(dataNodeEx_Controller, strAction);
  // const mapParam: Dictionary = new Dictionary();
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
          dataNodeEx_ConstructorName,
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
        dataNodeEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        dataNodeEx_ConstructorName,
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
 * 在CM工程中获取结点的所有连接结点列表
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strStartNodeId: 开始结点
 * @param strCmPrjId: CM工程Id
 * @returns 获取的相应对象列表
 */
export async function DataNodeEx_GetConnectedNode(
  strStartNodeId: number,
  strPrjId: string,
): Promise<Array<clsDataNodeEN>> {
  const strThisFuncName = DataNodeEx_GetConnectedNode.name;
  const strAction = 'GetConnectedNode';
  const strUrl = GetWebApiUrl(dataNodeEx_Controller, strAction);
  // const mapParam: Dictionary = new Dictionary();
  // mapParam.add('strStartNodeId', strStartNodeId);
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
          dataNodeEx_ConstructorName,
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
        dataNodeEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        dataNodeEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

export async function DataNodeEx_BindDdl_ConnectedNodeV2(
  strDivName: HTMLDivElement,
  strDdlName: string,
  strStartNodeId: number,
  strCmPrjId: string,
  IsExcludeCurrTab = true,
) {
  const vDataNode_SimStore = usevDataNode_SimStore();
  const objCmProject = await CMProject_GetObjByCmPrjIdCache(strCmPrjId);
  if (objCmProject == null) return;
  let arrConnectedNode = await DataNodeEx_GetConnectedNode(strStartNodeId, objCmProject.prjId);
  if (IsExcludeCurrTab == true) {
    // const strPrjId = objCmProject.prjId;
    const objStartNode = await vDataNode_SimStore.getObj(strStartNodeId);
    if (objStartNode == null) return;
    const arrPrjTabFld = PrjTabFldEx_GetObjLstByTabIdCache(objStartNode.tabId);
    const arrFldId = (await arrPrjTabFld).map((x) => x.fldId);
    //const arrDataNodeTabId = clsDataNodeBLEx.GetObjLstByTabIdCache(objStartNode.tabId, vsPrjIdCache);
    //const arrDataNodeId = arrDataNodeTabId.Select(x => x.dataNodeId);
    arrConnectedNode = arrConnectedNode
      .filter((x) => arrFldId.indexOf(x.fldId) == -1)
      .sort((x, y) => x.dataNodeName.localeCompare(y.dataNodeName));
  }
  BindDdl_ObjLstInDivObj(
    strDivName,
    strDdlName,
    arrConnectedNode,
    clsDataNodeEN.con_DataNodeId,
    clsDataNodeEN.con_DataNodeName,
    '数据结点',
  );
}
/**
 * 根据关键字列表删除记录
 * @param arrDataNodeId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function DataNodeEx_DelDataNodesExAsync(
  arrDataNodeId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelDataNodesExAsync';
  const strAction = 'DelDataNodesEx';
  const strUrl = GetWebApiUrl(dataNodeEx_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrDataNodeId, config);
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
        dataNodeEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        dataNodeEx_ConstructorName,
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
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_CopyToEx)
 * @param objDataNodeENS:源对象
 * @returns 目标对象=>clsDataNodeEN:objDataNodeENT
 **/
export function DataNodeEx_CopyToEx(objDataNodeENS: clsDataNodeEN): clsDataNodeENEx {
  const strThisFuncName = DataNodeEx_CopyToEx.name;
  const objDataNodeENT = new clsDataNodeENEx();
  try {
    ObjectAssign(objDataNodeENT, objDataNodeENS);
    return objDataNodeENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      dataNodeEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objDataNodeENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function DataNodeEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsDataNodeENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrDataNodeObjLst = await DataNode_GetObjLstByPagerAsync(objPagerPara);
  const arrDataNodeExObjLst = arrDataNodeObjLst.map(DataNodeEx_CopyToEx);

  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsDataNodeEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrDataNodeExObjLst) {
      await DataNodeEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrDataNodeExObjLst.length == 0) return arrDataNodeExObjLst;
  let arrDataNodeSel: Array<clsDataNodeENEx> = arrDataNodeExObjLst;
  try {
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrDataNodeSel = arrDataNodeSel.sort(DataNodeEx_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrDataNodeSel = arrDataNodeSel.sort(objPagerPara.sortFun);
    }

    return arrDataNodeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      dataNodeEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsDataNodeENEx>();
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
export function DataNodeEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  // const strThisFuncName = 'SortFunByKey';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsDataNodeENEx.con_TabName:
        return (a: clsDataNodeENEx, b: clsDataNodeENEx) => {
          return a.tabName.localeCompare(b.tabName);
        };
      case clsDataNodeENEx.con_FldName:
        return (a: clsDataNodeENEx, b: clsDataNodeENEx) => {
          return a.fldName.localeCompare(b.fldName);
        };
      case clsDataNodeENEx.con_DataNodeTypeName:
        return (a: clsDataNodeENEx, b: clsDataNodeENEx) => {
          return a.dataNodeTypeName.localeCompare(b.dataNodeTypeName);
        };
      case clsDataNodeENEx.con_CmPrjName:
        return (a: clsDataNodeENEx, b: clsDataNodeENEx) => {
          return a.cmPrjName.localeCompare(b.cmPrjName);
        };
      case clsDataNodeENEx.con_InDegree:
        return (a: clsDataNodeENEx, b: clsDataNodeENEx) => {
          return a.inDegree - b.inDegree;
        };
      case clsDataNodeENEx.con_OutDegree:
        return (a: clsDataNodeENEx, b: clsDataNodeENEx) => {
          return a.outDegree - b.outDegree;
        };
      case clsDataNodeEN.con_Depth:
        return (a: clsDataNodeENEx, b: clsDataNodeENEx) => {
          if (a.inDegree == b.inDegree) return b.outDegree - a.outDegree;
          else return b.inDegree - a.inDegree;
        };
      default:
        return DataNode_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsDataNodeENEx.con_TabName:
        return (a: clsDataNodeENEx, b: clsDataNodeENEx) => {
          return b.tabName.localeCompare(a.tabName);
        };
      case clsDataNodeENEx.con_FldName:
        return (a: clsDataNodeENEx, b: clsDataNodeENEx) => {
          return b.fldName.localeCompare(a.fldName);
        };
      case clsDataNodeENEx.con_DataNodeTypeName:
        return (a: clsDataNodeENEx, b: clsDataNodeENEx) => {
          return b.dataNodeTypeName.localeCompare(a.dataNodeTypeName);
        };
      case clsDataNodeENEx.con_CmPrjName:
        return (a: clsDataNodeENEx, b: clsDataNodeENEx) => {
          return b.cmPrjName.localeCompare(a.cmPrjName);
        };
      case clsDataNodeENEx.con_InDegree:
        return (a: clsDataNodeENEx, b: clsDataNodeENEx) => {
          return b.inDegree - a.inDegree;
        };
      case clsDataNodeENEx.con_OutDegree:
        return (a: clsDataNodeENEx, b: clsDataNodeENEx) => {
          return b.outDegree - a.outDegree;
        };
      case clsDataNodeEN.con_Depth:
        return (a: clsDataNodeENEx, b: clsDataNodeENEx) => {
          if (a.inDegree == b.inDegree) return a.outDegree - b.outDegree;
          else return a.inDegree - b.inDegree;
        };
      default:
        return DataNode_SortFunByKey(strKey, AscOrDesc);
    }
  }
}
//export function DataNodeEx_SortFunByKey(strKey: string, AscOrDesc: string) {
//    const strThisFuncName = "SortFunByKey";
//    if (AscOrDesc == "Asc" || AscOrDesc == "") {
//        switch (strKey) {
//            case clsDataNodeEN.con_DataNodeId:

//                return (a: clsDataNodeENEx, b: clsDataNodeENEx) => {
//                    if (a.inDegree == b.inDegree) return b.outDegree - a.outDegree;
//                    else return b.inDegree - a.inDegree;
//                }
//            case clsDataNodeEN.con_Depth:

//                return (a: clsDataNodeENEx, b: clsDataNodeENEx) => {
//                    if (a.inDegree == b.inDegree) return b.outDegree - a.outDegree;
//                    else return b.inDegree - a.inDegree;
//                }
//            default:
//                const strMsg = `字段名:[${strKey}]在表对象:[DataNode]中不存在！(in ${dataNodeEx_ConstructorName}.${strThisFuncName})`;
//                console.error(strMsg);
//                break;
//        }
//    }
//    else {
//        return (a: clsDataNodeENEx, b: clsDataNodeENEx) => {
//            if (a.inDegree == b.inDegree) return a.outDegree - b.outDegree;
//            else return a.inDegree - b.inDegree;
//        }
//    }
//}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:潘以锋
 * 日期:00-00-00
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function DataNodeEx_FuncMapByFldName(strFldName: string, objDataNodeEx: clsDataNodeENEx) {
  const strThisFuncName = DataNodeEx_FuncMapByFldName.name;
  let strMsg = '';
  //如果是本表中字段，不需要映射
  const arrFldName = clsDataNodeEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsDataNodeENEx.con_InDegree:
      return DataNodeEx_FuncMap_InDegree(objDataNodeEx);
    case clsDataNodeENEx.con_OutDegree:
      return DataNodeEx_FuncMap_OutDegree(objDataNodeEx);
    case clsDataNodeENEx.con_TabName:
      return DataNodeEx_FuncMap_TabName(objDataNodeEx);
    case clsDataNodeENEx.con_FldName:
      return DataNodeEx_FuncMap_FldName(objDataNodeEx);
    case clsDataNodeENEx.con_DataNodeTypeName:
      return DataNodeEx_FuncMap_DataNodeTypeName(objDataNodeEx);
    case clsDataNodeENEx.con_CmPrjName:
      return DataNodeEx_FuncMap_CmPrjName(objDataNodeEx);
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
 * @param objDataNodeS:源对象
 **/
export async function DataNodeEx_FuncMap_InDegree(objDataNode: clsDataNodeENEx) {
  const strThisFuncName = DataNodeEx_FuncMap_TabName.name;
  const vDnFuncMap_SimStore = usevDnFuncMap_SimStore();
  try {
    if (objDataNode.inDegree == 0) {
      const arrDnFuncMap_In = await vDnFuncMap_SimStore.getObjLstByIn(objDataNode.dataNodeId);
      objDataNode.inDegree = arrDnFuncMap_In.length;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000094)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      dataNodeEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

export async function DataNodeEx_FuncMap_OutDegree(objDataNode: clsDataNodeENEx) {
  const strThisFuncName = DataNodeEx_FuncMap_TabName.name;
  const vDnFuncMap_SimStore = usevDnFuncMap_SimStore();
  try {
    if (objDataNode.outDegree == 0) {
      const arrDnFuncMap_Out = await vDnFuncMap_SimStore.getObjLstByOut(objDataNode.dataNodeId);
      objDataNode.outDegree = arrDnFuncMap_Out.length;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000094)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      dataNodeEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objDataNodeS:源对象
 **/
export async function DataNodeEx_FuncMap_TabName(objDataNode: clsDataNodeENEx) {
  const strThisFuncName = DataNodeEx_FuncMap_TabName.name;
  try {
    if (IsNullOrEmpty(objDataNode.tabName) == true) {
      const DataNodeTabId = objDataNode.tabId;
      const vPrjTab_Sim_TabName = await vPrjTab_SimEx_func(
        clsvPrjTab_SimEN.con_TabId,
        clsvPrjTab_SimEN.con_TabName,
        DataNodeTabId,
      );
      objDataNode.tabName = vPrjTab_Sim_TabName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000094)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      dataNodeEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objDataNodeS:源对象
 **/
export async function DataNodeEx_FuncMap_FldName(objDataNode: clsDataNodeENEx) {
  const strThisFuncName = DataNodeEx_FuncMap_FldName.name;
  try {
    if (IsNullOrEmpty(objDataNode.fldName) == true) {
      const vFieldTab_Sim_FldId = objDataNode.fldId;
      const vFieldTab_Sim_FldName = await vFieldTab_SimEx_func(
        clsvFieldTab_SimEN.con_FldId,
        clsvFieldTab_SimEN.con_FldName,
        vFieldTab_Sim_FldId,
        clsPrivateSessionStorage.currSelPrjId,
      );
      objDataNode.fldName = vFieldTab_Sim_FldName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000087)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      dataNodeEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objDataNodeS:源对象
 **/
export async function DataNodeEx_FuncMap_DataNodeTypeName(objDataNode: clsDataNodeENEx) {
  const strThisFuncName = DataNodeEx_FuncMap_DataNodeTypeName.name;
  try {
    if (IsNullOrEmpty(objDataNode.dataNodeTypeName) == true) {
      const DataNodeType_DataNodeTypeId = objDataNode.dataNodeTypeId;
      const DataNodeType_DataNodeTypeName = await DataNodeType_func(
        clsDataNodeTypeEN.con_DataNodeTypeId,
        clsDataNodeTypeEN.con_DataNodeTypeName,
        DataNodeType_DataNodeTypeId,
      );
      objDataNode.dataNodeTypeName = DataNodeType_DataNodeTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000135)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      dataNodeEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objDataNodeS:源对象
 **/
export async function DataNodeEx_FuncMap_CmPrjName(objDataNode: clsDataNodeENEx) {
  const strThisFuncName = DataNodeEx_FuncMap_CmPrjName.name;
  try {
    if (IsNullOrEmpty(objDataNode.cmPrjName) == true) {
      const CMProject_CMPrjId = clsPrivateSessionStorage.cmPrjId;
      const CMProject_CMPrjName = await CMProject_func(
        clsCMProjectEN.con_CmPrjId,
        clsCMProjectEN.con_CmPrjName,
        CMProject_CMPrjId,
      );
      objDataNode.cmPrjName = CMProject_CMPrjName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000113)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      dataNodeEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 检查结点，如果有结点的相关表为空，或者相关表的缓存模式不正确就抛错.
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strDataNodeId: 数据结点Id
 * @param strPrjId: 工程Id
 * @param strOpUserId: 操作用户Id
 * @returns 获取的相应对象列表
 */
export async function DataNodeEx_CheckDataNode(
  strDataNodeId: number,
  strPrjId: string,
  strOpUserId: string,
): Promise<boolean> {
  const strThisFuncName = DataNodeEx_CheckDataNode.name;
  const strAction = 'CheckDataNode';
  const strUrl = DataNodeEx_GetWebApiUrl(dataNodeEx_Controller, strAction);
  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strDataNodeId,
      strPrjId,
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
        dataNodeEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        dataNodeEx_ConstructorName,
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
 * 检查结点，如果有结点的相关表为空，或者相关表的缓存模式不正确就抛错.
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strPrjId: CM工程Id
 * @param strOpUserId: 操作用户Id
 * @returns 获取的相应对象列表
 */
export async function DataNodeEx_CheckDataNodeByCmPrjId(
  strPrjId: string,
  strOpUserId: string,
): Promise<number> {
  const strThisFuncName = DataNodeEx_CheckDataNodeByCmPrjId.name;
  const strAction = 'CheckDataNodeByPrjId';
  const strUrl = DataNodeEx_GetWebApiUrl(dataNodeEx_Controller, strAction);
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
        dataNodeEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        dataNodeEx_ConstructorName,
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
 * 扩展删除记录，即同时删除多个表的记录，需要基于原子性的事务处理
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strDataNodeId: 数据结点Id
 * @param strCmPrjId: CM工程Id
 * @returns 获取的相应对象列表
 */
export async function DataNodeEx_DelRecordEx(
  strDataNodeId: number,
  strPrjId: string,
): Promise<boolean> {
  const strThisFuncName = DataNodeEx_DelRecordEx.name;
  const strAction = 'DelRecordEx';
  const strUrl = DataNodeEx_GetWebApiUrl(dataNodeEx_Controller, strAction);
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
        dataNodeEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        dataNodeEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
