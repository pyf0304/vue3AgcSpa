import axios from 'axios';
// import * as $ from 'jquery';

import { vPrjTab_SimEx_func } from '../Table_Field/clsvPrjTab_SimExWApi';

import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import {
  clsApplicationTypeEN,
  enumApplicationType,
} from '@/ts/L0Entity/GeneCode/clsApplicationTypeEN';
import { clsViewInfoEN } from '@/ts/L0Entity/PrjInterface/clsViewInfoEN';
import { clsViewInfoENEx } from '@/ts/L0Entity/PrjInterface/clsViewInfoENEx';
import { clsFuncModule_AgcEN } from '@/ts/L0Entity/PrjManage/clsFuncModule_AgcEN';
import { clsvPrjTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvPrjTab_SimEN';
import {
  ApplicationType_func,
  ApplicationType_GetObjLstCache,
} from '@/ts/L3ForWApi/GeneCode/clsApplicationTypeWApi';
import {
  ViewInfo_GetObjLstAsync,
  ViewInfo_GetObjLstByPagerAsync,
  ViewInfo_SortFunByKey,
} from '@/ts/L3ForWApi/PrjInterface/clsViewInfoWApi';
import { FuncModule_Agc_func } from '@/ts/L3ForWApi/PrjManage/clsFuncModule_AgcWApi';

import { GetSpan_Empty } from '@/ts/PubFun/clsCommFunc4Ctrl';
import { BindDdl_ObjLst, GetSortExpressInfo, ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { ViewRegionEx_GetObjLstByViewIdCache } from '@/ts/L3ForWApiEx/RegionManage/clsViewRegionExWApi';
import { clsViewInfoCmPrjIdRelaEN } from '@/ts/L0Entity/PrjInterface/clsViewInfoCmPrjIdRelaEN';
import { useviewInfoStore } from '@/store/modules/viewInfo';
import { CMProject_GetObjByCmPrjIdCache } from '@/ts/L3ForWApi/CodeMan/clsCMProjectWApi';
import { ViewInfoCmPrjIdRela_GetObjLstCache } from '@/ts/L3ForWApi/PrjInterface/clsViewInfoCmPrjIdRelaWApi';
import { ViewRegionRelaEx_GetRegionNumByViewId } from '@/ts/L3ForWApiEx/RegionManage/clsViewRegionRelaExWApi';

export const viewInfoEx_Controller = 'ViewInfoExApi';
export const viewInfoEx_ConstructorName = 'viewInfoEx';

/// <summary>
/// 绑定基于Web的下拉框
/// </summary>
/// <param name = "objDDL">需要绑定当前表的下拉框</param>
/// <param name = "strPrjId">工程Id</param>
export async function ViewInfoEx_BindDdl_ApplicationTypeIdExCache(strDdlName: string) {
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = `下拉框：${strDdlName} 不存在！`;
    alert(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  const strWhere = Format(
    " {0} in (select {0} from {1} where {2}='{3}')",
    clsViewInfoCmPrjIdRelaEN.con_ViewId,
    clsViewInfoCmPrjIdRelaEN._CurrTabName,
    clsViewInfoCmPrjIdRelaEN.con_CmPrjId,
    clsPrivateSessionStorage.cmPrjId,
  );

  const arrViewInfo = await ViewInfo_GetObjLstAsync(strWhere);
  const arrApplicationTypeId = arrViewInfo.map((x) => x.applicationTypeId);
  let arrObjLst: Array<clsApplicationTypeEN> = await ApplicationType_GetObjLstCache();
  arrObjLst = arrObjLst
    .filter((x) => arrApplicationTypeId.indexOf(x.applicationTypeId) > -1 && x.isVisible == true)
    .sort((x, y) => x.visitedNum - y.visitedNum);

  BindDdl_ObjLst(
    strDdlName,
    arrObjLst,
    clsApplicationTypeEN.con_ApplicationTypeId,
    clsApplicationTypeEN.con_ApplicationTypeSimName,
    '应用类型',
  );
}

/// <summary>
/// 绑定基于Web的下拉框
/// </summary>
/// <param name = "objDDL">需要绑定当前表的下拉框</param>
/// <param name = "strPrjId">工程Id</param>
export async function ViewInfoEx_GetDefaApplicationTypeIdExCache() {
  const strWhere = Format(
    " {0} in (select {0} from {1} where {2}='{3}')",
    clsViewInfoCmPrjIdRelaEN.con_ViewId,
    clsViewInfoCmPrjIdRelaEN._CurrTabName,
    clsViewInfoCmPrjIdRelaEN.con_CmPrjId,
    clsPrivateSessionStorage.cmPrjId,
  );
  const arrViewInfo = await ViewInfo_GetObjLstAsync(strWhere);
  const arrApplicationTypeId = arrViewInfo.map((x) => x.applicationTypeId);
  if (arrApplicationTypeId.length > 0) return arrApplicationTypeId[0];
  return enumApplicationType.SpaAppInCore_TS_18;
}

export function ViewInfoEx_SortFunByViewName(a: clsViewInfoEN, b: clsViewInfoEN): number {
  return a.viewName.localeCompare(b.viewName);
}

/// <summary>
/// 生成区域和字段
/// (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
/// </summary>
/// <param name = "strViewId">界面Id</param>
/// <param name = "strRegionTypeId">区域类型Id</param>
/// <param name = "strOpUserId">操作用户Id</param>
/// <param name = "strRegionName">区域名称</param>
/// <returns>获取的相应对象列表</returns>
export async function ViewInfoEx_ImportRegionAndFlds1(
  strViewId: string,
  strRegionTypeId: string,
  strOpUserId: string,
  strRegionName: string,
): Promise<boolean> {
  const strThisFuncName = ViewInfoEx_ImportRegionAndFlds1.name;
  if (strRegionName == '') strRegionName = 'null';
  const strAction = 'ImportRegionAndFlds1';
  const strUrl = GetWebApiUrl(viewInfoEx_Controller, strAction);
  // const mapParam: Dictionary = new Dictionary();
  // mapParam.add('strViewId', strViewId);
  // mapParam.add('strRegionTypeId', strRegionTypeId);
  // mapParam.add('strOpUserId', strOpUserId);
  // mapParam.add('strRegionName', strRegionName);
  // const strData = mapParam.getParamText(); // "例如: strIdentityID =01";

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strViewId,
      strRegionTypeId,
      strOpUserId,
      strRegionName,
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
        viewInfoEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        viewInfoEx_ConstructorName,
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
/// 为界面设置修改日期
/// (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
/// </summary>
/// <param name = "strViewId">界面Id</param>
/// <returns>获取的相应对象列表</returns>
export async function ViewInfoEx_SetViewUpdDate(strViewId: string): Promise<number> {
  const strThisFuncName = ViewInfoEx_SetViewUpdDate.name;
  const strAction = 'SetViewUpdDate';
  const strUrl = GetWebApiUrl(viewInfoEx_Controller, strAction);
  // const mapParam: Dictionary = new Dictionary();
  // mapParam.add('strViewId', strViewId);
  // const strData = mapParam.getParamText(); // "例如: strIdentityID =01";

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strViewId,
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
        viewInfoEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        viewInfoEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

export async function ViewInfoEx_getRelaTabId4InOut(strViewId: string): Promise<Array<string>> {
  const viewInfoStore = useviewInfoStore();
  const arrTabId: Array<string> = new Array<string>();
  const objViewInfo = await viewInfoStore.getObj(strViewId);
  if (objViewInfo == null) {
    const strMsg = Format(
      '在项目:[{0}]中，界面Id:[{1}]没有相应界面，请检查！',
      clsPrivateSessionStorage.currSelPrjName,
      strViewId,
    );
    console.error(strMsg);
    alert(strMsg);
    return [];
  }
  const strTabId_In = objViewInfo.inRelaTabId;
  const strTabId_Out = objViewInfo.outRelaTabId;

  if (IsNullOrEmpty(strTabId_In) == false) {
    if (arrTabId.indexOf(strTabId_In) == -1) arrTabId.push(strTabId_In);
  }
  if (IsNullOrEmpty(strTabId_Out) == false) {
    if (arrTabId.indexOf(strTabId_Out) == -1) arrTabId.push(strTabId_Out);
  }
  return arrTabId;
}

/// <summary>
/// 扩展删除界面
/// (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
/// </summary>
/// <param name = "strViewId">界面Id</param>
/// <returns>获取的相应对象列表</returns>
export async function ViewInfoEx_DelRecordEx(strViewId: string): Promise<boolean> {
  const strThisFuncName = ViewInfoEx_DelRecordEx.name;
  const strAction = 'DelRecordEx';
  const strUrl = GetWebApiUrl(viewInfoEx_Controller, strAction);
  // const mapParam: Dictionary = new Dictionary();
  // mapParam.add('strViewId', strViewId);
  // const strData = mapParam.getParamText(); // "例如: strIdentityID =01";

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strViewId,
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
        viewInfoEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        viewInfoEx_ConstructorName,
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
 * @param objViewInfoENS:源对象
 * @returns 目标对象=>clsViewInfoEN:objViewInfoENT
 **/
export function ViewInfoEx_CopyToEx(objViewInfoENS: clsViewInfoEN): clsViewInfoENEx {
  const strThisFuncName = ViewInfoEx_CopyToEx.name;
  const objViewInfoENT = new clsViewInfoENEx();
  try {
    ObjectAssign(objViewInfoENT, objViewInfoENS);
    return objViewInfoENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      viewInfoEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objViewInfoENT;
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
export function ViewInfoEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  // const strThisFuncName = 'SortFunByKey';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsViewInfoENEx.con_ApplicationTypeSimName:
        return (a: clsViewInfoENEx, b: clsViewInfoENEx) => {
          return a.applicationTypeSimName.localeCompare(b.applicationTypeSimName);
        };

      case clsViewInfoENEx.con_ViewCnNameEx:
        return (a: clsViewInfoENEx, b: clsViewInfoENEx) => {
          return a.viewCnNameEx.localeCompare(b.viewCnNameEx);
        };

      case clsViewInfoENEx.con_FuncModuleName:
        return (a: clsViewInfoENEx, b: clsViewInfoENEx) => {
          return a.funcModuleName.localeCompare(b.funcModuleName);
        };
      case clsViewInfoENEx.con_MainTabName:
        return (a: clsViewInfoENEx, b: clsViewInfoENEx) => {
          return a.mainTabName.localeCompare(b.mainTabName);
        };
      case clsViewInfoENEx.con_DetailTabName:
        return (a: clsViewInfoENEx, b: clsViewInfoENEx) => {
          return a.detailTabName.localeCompare(b.detailTabName);
        };
      case clsViewInfoENEx.con_RegionNum:
        return (a: clsViewInfoENEx, b: clsViewInfoENEx) => {
          return a.regionNum - b.regionNum;
        };

      default:
        return ViewInfo_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsViewInfoENEx.con_ApplicationTypeSimName:
        return (a: clsViewInfoENEx, b: clsViewInfoENEx) => {
          return b.applicationTypeSimName.localeCompare(a.applicationTypeSimName);
        };

      case clsViewInfoENEx.con_ViewCnNameEx:
        return (a: clsViewInfoENEx, b: clsViewInfoENEx) => {
          return b.viewCnNameEx.localeCompare(a.viewCnNameEx);
        };
      case clsViewInfoENEx.con_FuncModuleName:
        return (a: clsViewInfoENEx, b: clsViewInfoENEx) => {
          return b.funcModuleName.localeCompare(a.funcModuleName);
        };
      case clsViewInfoENEx.con_MainTabName:
        return (a: clsViewInfoENEx, b: clsViewInfoENEx) => {
          return b.mainTabName.localeCompare(a.mainTabName);
        };
      case clsViewInfoENEx.con_DetailTabName:
        return (a: clsViewInfoENEx, b: clsViewInfoENEx) => {
          return b.detailTabName.localeCompare(a.detailTabName);
        };
      case clsViewInfoENEx.con_RegionNum:
        return (a: clsViewInfoENEx, b: clsViewInfoENEx) => {
          return b.regionNum - a.regionNum;
        };

      default:
        return ViewInfo_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

export async function ViewInfoEx_FuncMap_RegionNum(objViewInfo: clsViewInfoENEx) {
  const strThisFuncName = ViewInfoEx_FuncMap_ApplicationTypeSimName.name;
  try {
    if (objViewInfo.regionNum == 0) {
      const intRegionNum = await ViewRegionRelaEx_GetRegionNumByViewId(objViewInfo.viewId);
      objViewInfo.regionNum = intRegionNum;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000074)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      viewInfoEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objViewInfoS:源对象
 **/
export async function ViewInfoEx_FuncMap_ApplicationTypeSimName(objViewInfo: clsViewInfoENEx) {
  const strThisFuncName = ViewInfoEx_FuncMap_ApplicationTypeSimName.name;
  try {
    if (IsNullOrEmpty(objViewInfo.applicationTypeSimName) == true) {
      const ApplicationType_ApplicationTypeId = objViewInfo.applicationTypeId;
      const ApplicationType_ApplicationTypeSimName = await ApplicationType_func(
        clsApplicationTypeEN.con_ApplicationTypeId,
        clsApplicationTypeEN.con_ApplicationTypeSimName,
        ApplicationType_ApplicationTypeId.toString(),
      );
      objViewInfo.applicationTypeSimName = ApplicationType_ApplicationTypeSimName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000074)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      viewInfoEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objViewInfoS:源对象
 **/
export async function ViewInfoEx_FuncMap_FuncModuleName(objViewInfo: clsViewInfoENEx) {
  const strThisFuncName = ViewInfoEx_FuncMap_FuncModuleName.name;
  try {
    if (IsNullOrEmpty(objViewInfo.funcModuleName) == true) {
      const FuncModule_Agc_FuncModuleAgcId = objViewInfo.funcModuleAgcId;
      const FuncModule_Agc_FuncModuleName = await FuncModule_Agc_func(
        clsFuncModule_AgcEN.con_FuncModuleAgcId,
        clsFuncModule_AgcEN.con_FuncModuleName,
        FuncModule_Agc_FuncModuleAgcId,
        objViewInfo.prjId,
      );
      objViewInfo.funcModuleName = FuncModule_Agc_FuncModuleName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000076)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      viewInfoEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objViewInfoS:源对象
 **/
export async function ViewInfoEx_FuncMap_MainTabName(objViewInfo: clsViewInfoENEx) {
  const strThisFuncName = ViewInfoEx_FuncMap_MainTabName.name;
  try {
    if (IsNullOrEmpty(objViewInfo.mainTabName) == true) {
      const vPrjTab_Sim_TabId = objViewInfo.mainTabId;
      const vPrjTab_Sim_TabName = await vPrjTab_SimEx_func(
        clsvPrjTab_SimEN.con_TabId,
        clsvPrjTab_SimEN.con_TabName,
        vPrjTab_Sim_TabId,
      );
      objViewInfo.mainTabName = vPrjTab_Sim_TabName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000077)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      viewInfoEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objViewInfoS:源对象
 **/
export async function ViewInfoEx_FuncMap_DetailTabName(objViewInfo: clsViewInfoENEx) {
  const strThisFuncName = ViewInfoEx_FuncMap_DetailTabName.name;
  try {
    if (IsNullOrEmpty(objViewInfo.detailTabName) == true) {
      const vPrjTab_Sim_TabId = objViewInfo.detailTabId;
      const vPrjTab_Sim_TabName = await vPrjTab_SimEx_func(
        clsvPrjTab_SimEN.con_TabId,
        clsvPrjTab_SimEN.con_TabName,
        vPrjTab_Sim_TabId,
      );
      objViewInfo.detailTabName = vPrjTab_Sim_TabName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000078)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      viewInfoEx_ConstructorName,
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
export function ViewInfoEx_FuncMapByFldName(strFldName: string, objViewInfoEx: clsViewInfoENEx) {
  const strThisFuncName = ViewInfoEx_FuncMapByFldName.name;
  let strMsg = '';
  //如果是本表中字段，不需要映射
  const arrFldName = clsViewInfoEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsViewInfoENEx.con_InRelaTabName:
      return ViewInfoEx_FuncMap_InRelaTabName(objViewInfoEx);
    case clsViewInfoENEx.con_OutRelaTabName:
      return ViewInfoEx_FuncMap_OutRelaTabName(objViewInfoEx);
    case clsViewInfoENEx.con_ViewNameEx:
      return ViewInfoEx_FuncMap_ViewNameEx(objViewInfoEx);
    case clsViewInfoENEx.con_RegionNum:
      return ViewInfoEx_FuncMap_RegionNum(objViewInfoEx);
    case clsViewInfoENEx.con_ApplicationTypeSimName:
      return ViewInfoEx_FuncMap_ApplicationTypeSimName(objViewInfoEx);
    // case clsViewInfoENEx.con_ViewTypeName:
    //   return ViewInfoEx_FuncMap_ViewTypeName(objViewInfoEx);
    case clsViewInfoENEx.con_FuncModuleName:
      return ViewInfoEx_FuncMap_FuncModuleName(objViewInfoEx);
    case clsViewInfoENEx.con_MainTabName:
      return ViewInfoEx_FuncMap_MainTabName(objViewInfoEx);
    case clsViewInfoENEx.con_DetailTabName:
      return ViewInfoEx_FuncMap_DetailTabName(objViewInfoEx);
    case clsViewInfoENEx.con_MainTabNameEx:
      return ViewInfoEx_FuncMap_MainTabNameEx(objViewInfoEx);
    case clsViewInfoENEx.con_DetailTabNameEx:
      return ViewInfoEx_FuncMap_DetailTabNameEx(objViewInfoEx);
    case clsViewInfoENEx.con_ViewCnNameEx:
      return ViewInfoEx_FuncMap_ViewCnNameEx(objViewInfoEx);
    case clsViewInfoENEx.con_CmPrjNames:
      return ViewInfoEx_FuncMap_CmPrjNames(objViewInfoEx, clsPrivateSessionStorage.cmPrjId);
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
 * @param objViewInfoS:源对象
 **/
export async function ViewInfoEx_FuncMap_MainTabNameEx(objViewInfo: clsViewInfoENEx) {
  const strThisFuncName = ViewInfoEx_FuncMap_MainTabNameEx.name;
  try {
    if (IsNullOrEmpty(objViewInfo.mainTabNameEx) == true) {
      if (IsNullOrEmpty(objViewInfo.mainTabName)) {
        await ViewInfoEx_FuncMapByFldName(clsViewInfoENEx.con_MainTabName, objViewInfo);
      }
      let detailTabNameEx = '';
      if (IsNullOrEmpty(objViewInfo.detailTabId) == false) {
        if (IsNullOrEmpty(objViewInfo.detailTabName)) {
          await ViewInfoEx_FuncMapByFldName(clsViewInfoENEx.con_DetailTabName, objViewInfo);
        }
        objViewInfo.detailTabNameEx = Format(
          '{0}({1})',
          objViewInfo.detailTabName,
          objViewInfo.detailTabId,
        );
        detailTabNameEx = Format(', {0}', objViewInfo.detailTabNameEx);
      }
      objViewInfo.mainTabNameEx = Format(
        '{0}({1}){2}',
        objViewInfo.mainTabName,
        objViewInfo.mainTabId,
        detailTabNameEx,
      );
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000178)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      viewInfoEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

export async function ViewInfoEx_FuncMap_ViewCnNameEx(objViewInfo: clsViewInfoENEx) {
  const strThisFuncName = ViewInfoEx_FuncMap_ViewCnNameEx.name;
  try {
    if (IsNullOrEmpty(objViewInfo.viewCnNameEx) == true) {
      const spnIsShare = GetSpan_Empty('text-warning');
      let strIsShare = '';
      if (objViewInfo.isShare) {
        spnIsShare.innerText = '共享表，在其他工程中可以共享该表';
        strIsShare = Format('<br/>{0}', spnIsShare.outerHTML);
      }
      objViewInfo.viewCnNameEx = Format('{0}{1}', objViewInfo.viewCnName, strIsShare);
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000178)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      viewInfoEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

export async function ViewInfoEx_FuncMap_ViewNameEx(objViewInfo: clsViewInfoENEx) {
  const strThisFuncName = ViewInfoEx_FuncMap_MainTabNameEx.name;
  try {
    if (IsNullOrEmpty(objViewInfo.viewNameEx) == true) {
      objViewInfo.viewNameEx = Format('{0}({1})', objViewInfo.viewName, objViewInfo.viewCnName);
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000178)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      viewInfoEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objViewInfoS:源对象
 **/
export async function ViewInfoEx_FuncMap_DetailTabNameEx(objViewInfo: clsViewInfoENEx) {
  const strThisFuncName = ViewInfoEx_FuncMap_DetailTabNameEx.name;
  try {
    if (IsNullOrEmpty(objViewInfo.detailTabNameEx) == true) {
      if (IsNullOrEmpty(objViewInfo.detailTabId) == true) return;
      if (IsNullOrEmpty(objViewInfo.detailTabName)) {
        await ViewInfoEx_FuncMapByFldName(clsViewInfoENEx.con_DetailTabName, objViewInfo);
      }
      objViewInfo.detailTabNameEx = Format(
        '{0}({1})',
        objViewInfo.detailTabName,
        objViewInfo.detailTabId,
      );
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000179)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      viewInfoEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objViewInfoS:源对象
 **/
export async function ViewInfoEx_FuncMap_InRelaTabName(objViewInfo: clsViewInfoENEx) {
  const strThisFuncName = ViewInfoEx_FuncMap_InRelaTabName.name;
  try {
    if (IsNullOrEmpty(objViewInfo.inRelaTabName) == true) {
      const vPrjTab_Sim_TabId = objViewInfo.inRelaTabId;
      const vPrjTab_Sim_TabName = await vPrjTab_SimEx_func(
        clsvPrjTab_SimEN.con_TabId,
        clsvPrjTab_SimEN.con_TabName,
        vPrjTab_Sim_TabId,
      );
      objViewInfo.inRelaTabName = vPrjTab_Sim_TabName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000180)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      viewInfoEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objViewInfoS:源对象
 **/
export async function ViewInfoEx_FuncMap_OutRelaTabName(objViewInfo: clsViewInfoENEx) {
  const strThisFuncName = ViewInfoEx_FuncMap_OutRelaTabName.name;
  try {
    if (IsNullOrEmpty(objViewInfo.outRelaTabName) == true) {
      const vPrjTab_Sim_TabId = objViewInfo.mainTabId;
      const vPrjTab_Sim_TabName = await vPrjTab_SimEx_func(
        clsvPrjTab_SimEN.con_TabId,
        clsvPrjTab_SimEN.con_TabName,
        vPrjTab_Sim_TabId,
      );
      objViewInfo.outRelaTabName = vPrjTab_Sim_TabName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000181)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      viewInfoEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 设置Cm工程Id
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strViewId: 界面Id
 * @param strRegionId: 区域Id
 * @param strUserId: 用户Id
 * @returns 获取的相应对象列表
 */
export async function ViewInfoEx_SetCmPrjId(
  strViewId: string,
  strCmPrjId: string,
  strUserId: string,
): Promise<boolean> {
  const strThisFuncName = ViewInfoEx_SetCmPrjId.name;
  const strAction = 'SetCmPrjId';
  const strUrl = GetWebApiUrl(viewInfoEx_Controller, strAction);
  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strViewId,
      strCmPrjId,
      strUserId,
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
        viewInfoEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        viewInfoEx_ConstructorName,
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
 * 检查区域字段
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strViewId: 界面Id
 * @param strCmPrjId: CM工程Id
 * @param strUpdUser: 修改用户
 * @returns 获取的相应对象列表
 */
export async function ViewInfoEx_CheckRegionFlds(
  strViewId: string,
  strPrjDataBaseId: string,
  strCmPrjId: string,
  strUpdUser: string,
): Promise<boolean> {
  const strThisFuncName = ViewInfoEx_CheckRegionFlds.name;
  const strAction = 'CheckRegionFlds';
  const strUrl = GetWebApiUrl(viewInfoEx_Controller, strAction);
  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strViewId,
      strPrjDataBaseId,
      strCmPrjId,
      strUpdUser,
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
        viewInfoEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        viewInfoEx_ConstructorName,
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
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function ViewInfoEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsViewInfoENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrViewInfoObjLst = await ViewInfo_GetObjLstByPagerAsync(objPagerPara);
  const arrViewInfoExObjLst = arrViewInfoObjLst.map(ViewInfoEx_CopyToEx);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsViewInfoEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrViewInfoExObjLst) {
      await ViewInfoEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrViewInfoExObjLst.length == 0) return arrViewInfoExObjLst;
  let arrViewInfo_Sel: Array<clsViewInfoENEx> = arrViewInfoExObjLst;
  try {
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrViewInfo_Sel = arrViewInfo_Sel.sort(ViewInfoEx_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrViewInfo_Sel = arrViewInfo_Sel.sort(objPagerPara.sortFun);
    }

    return arrViewInfo_Sel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      viewInfoEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsViewInfoENEx>();
}

export async function ViewInfoEx_IsHasRegion(
  strViewId: string,
  strRegionTypeId: string,
  strCmPrjId: string,
): Promise<boolean> {
  const arrViewRegion = await ViewRegionEx_GetObjLstByViewIdCache(strViewId, strCmPrjId);
  const intRecCount = arrViewRegion.filter((x) => x.regionTypeId == strRegionTypeId).length;
  if (intRecCount > 0) return true;
  else return false;
}

export async function ViewInfoEx_GetRegionTypeIdLst(
  strViewId: string,
  strCmPrjId: string,
): Promise<Array<string>> {
  const arrViewRegion = await ViewRegionEx_GetObjLstByViewIdCache(strViewId, strCmPrjId);
  const arrRegionTypeId = arrViewRegion.map((x) => x.regionTypeId);
  return arrRegionTypeId;
}

export async function ViewInfoEx_FuncMap_CmPrjNames(
  objViewInfo: clsViewInfoENEx,
  strCmPrjId: string,
) {
  const strThisFuncName = ViewInfoEx_FuncMap_CmPrjNames.name;
  try {
    if (IsNullOrEmpty(objViewInfo.cmPrjNames) == true) {
      const arrViewInfoCmPrjIdRela = await ViewInfoCmPrjIdRela_GetObjLstCache(strCmPrjId);
      const arrViewInfoCmPrjIdRelaSel = arrViewInfoCmPrjIdRela.filter(
        (x) => x.viewId == objViewInfo.viewId,
      );
      let strCmPrjNames = '';
      let i = 0;
      for (const objInFor of arrViewInfoCmPrjIdRelaSel) {
        const objCMProject = await CMProject_GetObjByCmPrjIdCache(objInFor.cmPrjId);
        if (objCMProject == null) continue;
        if (i == 0) {
          strCmPrjNames += Format(
            "<span style='white-space: nowrap'>{0}</span>",
            objCMProject.cmPrjName,
          );
          i++;
        } else {
          strCmPrjNames += Format(
            "<br/><span style='white-space: nowrap'>{0}</span>",
            objCMProject.cmPrjName,
          );
          i++;
        }
      }
      objViewInfo.cmPrjNames = strCmPrjNames;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000084)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      viewInfoEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 从工程表同步信息
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strPrjId: 工程Id
 * @returns 获取的相应对象列表
 */
export async function ViewInfoEx_SynchInfoFromPrjTab(strPrjId: string): Promise<number> {
  const strThisFuncName = ViewInfoEx_SynchInfoFromPrjTab.name;
  const strAction = 'SynchInfoFromPrjTab';
  const strUrl = GetWebApiUrl(viewInfoEx_Controller, strAction);
  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strPrjId,
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
        viewInfoEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        viewInfoEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
