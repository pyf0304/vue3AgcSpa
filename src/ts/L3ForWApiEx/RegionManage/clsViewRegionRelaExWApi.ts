import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { clsGCContainerTypeEN } from '@/ts/L0Entity/GeneCode/clsGCContainerTypeEN';

import { clsPageDispModeEN } from '@/ts/L0Entity/PrjMenu/clsPageDispModeEN';
import { clsRegionTypeEN } from '@/ts/L0Entity/RegionManage/clsRegionTypeEN';
import { clsViewRegionRelaEN } from '@/ts/L0Entity/RegionManage/clsViewRegionRelaEN';
import { clsViewRegionRelaENEx } from '@/ts/L0Entity/RegionManage/clsViewRegionRelaENEx';

import { clsvPrjTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvPrjTab_SimEN';
import { GCContainerType_func } from '@/ts/L3ForWApi/GeneCode/clsGCContainerTypeWApi';

import { PageDispMode_func } from '@/ts/L3ForWApi/PrjMenu/clsPageDispModeWApi';
import { RegionType_func } from '@/ts/L3ForWApi/RegionManage/clsRegionTypeWApi';
import {
  ViewRegionRela_FilterFunByKey,
  ViewRegionRela_GetFirstObjAsync,
  ViewRegionRela_GetObjLstAsync,
  ViewRegionRela_GetObjLstByPagerAsync,
  ViewRegionRela_GetObjLstCache,
  ViewRegionRela_SortFunByKey,
  ViewRegionRela_UpdateRecordAsync,
} from '@/ts/L3ForWApi/RegionManage/clsViewRegionRelaWApi';

import { vPrjTab_SimEx_func } from '@/ts/L3ForWApiEx/Table_Field/clsvPrjTab_SimExWApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { GetSortExpressInfo, ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { vPrjTab_Sim_func } from '@/ts/L3ForWApi/Table_Field/clsvPrjTab_SimWApi';
import { useviewInfoStore } from '@/store/modules/viewInfo';
import { useviewRegionStore } from '@/store/modules/viewRegion';
// import { Dictionary } from '@/ts/PubFun/tzDictionary';

export const viewRegionRelaEx_Controller = 'ViewRegionRelaExApi';
export const viewRegionRelaEx_ConstructorName = 'viewRegionRelaEx';
/// <summary>
/// 把同一个类的对象,复制到该类的扩展对象
/// (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_CopyToEx)
/// </summary>
/// <param name = "objViewRegionRelaENS">源对象</param>
/// <param name = "objViewRegionRelaENT">目标对象</param>
export function ViewRegionRelaEx_CopyToEx(
  objViewRegionRelaENS: clsViewRegionRelaEN,
): clsViewRegionRelaENEx {
  const objViewRegionRelaENT = new clsViewRegionRelaENEx();
  try {
    ObjectAssign(objViewRegionRelaENT, objViewRegionRelaENS);
    return objViewRegionRelaENT;
  } catch (e: any) {
    const strMsg = Format('(errid:WiTsCs0011)Copy表对象数据出错,${e}.');
    console.error(strMsg);
    alert(strMsg);
    return objViewRegionRelaENT;
  }
}

/// <summary>
/// 根据界面Id获取相关区域对象列表
/// </summary>
/// <param name="strViewId"></param>
/// <returns>区域对象列表</returns>
export async function ViewRegionRelaEx_GetObjLstByViewId(strViewId: string) {
  const strCondition: string = Format("{0}='{1}'", clsViewRegionRelaEN.con_ViewId, strViewId);
  const arrObjLst: Array<clsViewRegionRelaEN> = await ViewRegionRela_GetObjLstAsync(strCondition);
  return arrObjLst;
}
export async function ViewRegionRelaEx_GetObjByViewIdAndRegionId(
  strViewId: string,
  strRegionId: string,
): Promise<clsViewRegionRelaEN | null> {
  const strCondition: string = Format(
    "{0}='{1}' and {2}='{3}'",
    clsViewRegionRelaEN.con_ViewId,
    strViewId,
    clsViewRegionRelaEN.con_RegionId,
    strRegionId,
  );
  const obj = await ViewRegionRela_GetFirstObjAsync(strCondition);
  return obj;
}

export async function ViewRegionRelaEx_GetObjByViewIdAndRegionIdCache1(
  strViewId: string,
  strRegionId: string,
  strCmPrjId: string,
): Promise<clsViewRegionRelaEN> {
  //const strCondition: string = string.Format("{0}='{1}' and {2}='{3}'", clsViewRegionRelaEN.con_ViewId, strViewId, clsViewRegionRelaEN.con_RegionId, strRegionId);
  const arrObjLst: Array<clsViewRegionRelaEN> = await ViewRegionRela_GetObjLstCache(strCmPrjId);
  const arrObjLst_Sel = arrObjLst.filter((x) => x.viewId == strViewId && x.regionId == strRegionId);
  if (arrObjLst_Sel.length == 0) return new clsViewRegionRelaEN();
  return arrObjLst_Sel[0];
}

export async function ViewRegionRelaEx_GetViewIdLstByRegionIdCache1(
  strRegionId: string,
  strCmPrjId: string,
): Promise<Array<string>> {
  //const strCondition: string = string.Format("{0}='{1}' and {2}='{3}'", clsViewRegionRelaEN.con_ViewId, strViewId, clsViewRegionRelaEN.con_RegionId, strRegionId);
  const arrObjLst: Array<clsViewRegionRelaEN> = await ViewRegionRela_GetObjLstCache(strCmPrjId);
  const arrObjLst_Sel = arrObjLst.filter((x) => x.regionId == strRegionId);
  if (arrObjLst_Sel.length == 0) return new Array<string>();
  return arrObjLst_Sel.map((x) => x.viewId);
}

/// <summary>
/// 根据界面Id获取相关区域对象列表
/// </summary>
/// <param name="strViewId"></param>
/// <returns>区域对象列表</returns>
export async function ViewRegionRelaEx_GetRegionIdLstByViewId(
  strViewId: string,
): Promise<Array<string>> {
  const strCondition: string = Format("{0}='{1}'", clsViewRegionRelaEN.con_ViewId, strViewId);
  const arrObjLst: Array<clsViewRegionRelaEN> = await ViewRegionRela_GetObjLstAsync(strCondition);
  if (arrObjLst.length == 0) return new Array<string>();
  return arrObjLst.map((x) => x.regionId);
}

export async function ViewRegionRelaEx_GetReferNumByRegionIdCache(
  strRegionId: string,
  strCmPrjId: string,
): Promise<number> {
  const arrObjLst = await ViewRegionRela_GetObjLstCache(strCmPrjId);
  if (arrObjLst == null) return 0;
  if (arrObjLst.length == null) return 0;

  const arrObjLst_Sel = arrObjLst.filter((x) => x.regionId == strRegionId);
  return arrObjLst_Sel.length;
}

/**
 * 获取界面的区域数
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strViewId: 界面Id
 * @returns 获取的相应对象列表
 */
export async function ViewRegionRelaEx_GetRegionNumByViewId(strViewId: string): Promise<number> {
  const strThisFuncName = ViewRegionRelaEx_GetRegionNumByViewId.name;
  const strAction = 'GetRegionNumByViewId';
  const strUrl = GetWebApiUrl(viewRegionRelaEx_Controller, strAction);
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
        viewRegionRelaEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        viewRegionRelaEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
export async function ViewRegionRelaEx_GetRegionIdLstByViewIdCache(
  strViewId: string,
  strCmPrjId: string,
): Promise<Array<string>> {
  //const strCondition: string = Format("{0}='{1}'", clsViewRegionRelaEN.con_ViewId, strViewId);
  const arrObjLst: Array<clsViewRegionRelaEN> = await ViewRegionRela_GetObjLstCache(strCmPrjId);
  const arrObjLst_Sel: Array<clsViewRegionRelaEN> = arrObjLst.filter((x) => x.viewId == strViewId);
  if (arrObjLst_Sel.length == 0) return new Array<string>();
  return arrObjLst_Sel.map((x) => x.regionId);
}

export async function ViewRegionRelaEx_GetRegionIdLstByViewIdLstCache(
  arrViewId: Array<string>,
  strCmPrjId: string,
): Promise<Array<string>> {
  //const strCondition: string = Format("{0}='{1}'", clsViewRegionRelaEN.con_ViewId, strViewId);
  const arrObjLst: Array<clsViewRegionRelaEN> = await ViewRegionRela_GetObjLstCache(strCmPrjId);
  const arrObjLst_Sel: Array<clsViewRegionRelaEN> = arrObjLst.filter(
    (x) => arrViewId.indexOf(x.viewId) > -1,
  );
  if (arrObjLst_Sel.length == 0) return new Array<string>();
  return arrObjLst_Sel.map((x) => x.regionId);
}
export async function ViewRegionRelaEx_GetRegionIdByViewIdAndTypeCache(
  strViewId: string,
  strRegionTypeId: string,
  strCmPrjId: string,
): Promise<string> {
  const arrObjLst0 = await ViewRegionRela_GetObjLstCache(strCmPrjId);
  const arrObjLst = arrObjLst0.map(ViewRegionRelaEx_CopyToEx);

  for (const objInFor of arrObjLst) {
    await ViewRegionRelaEx_FuncMap_RegionTypeId(objInFor);
  }
  const arrObjLst_Sel: Array<clsViewRegionRelaEN> = arrObjLst.filter(
    (x) => x.viewId == strViewId && x.regionTypeId == strRegionTypeId,
  );
  if (arrObjLst_Sel.length == 0) return '';
  return arrObjLst_Sel[0].regionId;
}

/// <summary>
/// 功能:设置字段可用，同时设置多条记录。
/// </summary>
/// <param name = "arrRegionIdLst">给定的关键字值列表</param>
/// <param name = "strUpdUser">给定的关键字值列表</param>
/// <returns>返回设置可用的记录数</returns>
export async function ViewRegionRelaEx_SetInUse(
  arrRegionIdLst: Array<string>,
  strViewId: string,
  strUpdUser: string,
) {
  const strThisFuncName = ViewRegionRelaEx_SetInUse.name;
  try {
    let intRecNum = 0;
    for (const strRegionId of arrRegionIdLst) {
      const objViewRegionRelaEN = await ViewRegionRelaEx_GetObjByViewIdAndRegionId(
        strViewId,
        strRegionId,
      );
      if (objViewRegionRelaEN == null) {
        const strMsg = Format(
          '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
          '',
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      objViewRegionRelaEN.SetInUse(true);
      objViewRegionRelaEN.SetUpdUser(strUpdUser);
      objViewRegionRelaEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1));
      await ViewRegionRela_UpdateRecordAsync(objViewRegionRelaEN);
      intRecNum++;
    }
    return intRecNum;
  } catch (objException: any) {
    const strMsg = Format(
      '设置字段可用出错,{2}.({0}.{1})',
      viewRegionRelaEx_ConstructorName,
      strThisFuncName,
      objException,
    );
    throw new Error(strMsg);
  }
}
/// <summary>
/// 功能:设置字段不可用，同时设置多条记录。
/// </summary>
/// <param name = "arrRegionIdLst">给定的关键字值列表</param>
/// <param name = "strUpdUser">给定的关键字值列表</param>
/// <returns>返回设置不可用的记录数</returns>
export async function ViewRegionRelaEx_SetNotInUse(
  arrRegionIdLst: Array<string>,
  strViewId: string,
  strUpdUser: string,
) {
  const strThisFuncName = ViewRegionRelaEx_SetNotInUse.name;
  try {
    let intRecNum = 0;
    for (const strRegionId of arrRegionIdLst) {
      const objViewRegionRelaEN = await ViewRegionRelaEx_GetObjByViewIdAndRegionId(
        strViewId,
        strRegionId,
      );
      if (objViewRegionRelaEN == null) {
        const strMsg = Format(
          '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
          '',
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      objViewRegionRelaEN.SetInUse(false);
      objViewRegionRelaEN.SetUpdUser(strUpdUser);
      objViewRegionRelaEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1));

      await ViewRegionRela_UpdateRecordAsync(objViewRegionRelaEN);
      intRecNum++;
    }
    return intRecNum;
  } catch (objException: any) {
    const strMsg = Format(
      '设置字段不可用出错,{2}.({0}.{1})',
      viewRegionRelaEx_ConstructorName,
      strThisFuncName,
      objException,
    );
    throw new Error(strMsg);
  }
}
export function ViewRegionRelaEx_SortFunByClassName(
  a: clsViewRegionRelaENEx,
  b: clsViewRegionRelaENEx,
): number {
  return a.clsName.localeCompare(b.clsName);
}

/// <summary>
/// 删除界面区域关系
/// (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
/// </summary>
/// <param name = "strViewId">界面Id</param>
/// <param name = "strRegionId">区域Id</param>
/// <returns>获取的相应对象列表</returns>
export async function ViewRegionRelaEx_DeleteByViewIdAndRegionId(
  strViewId: string,
  strRegionId: string,
): Promise<number> {
  const strThisFuncName = ViewRegionRelaEx_DeleteByViewIdAndRegionId.name;
  const strAction = 'DeleteByViewIdAndRegionId';
  const strUrl = GetWebApiUrl(viewRegionRelaEx_Controller, strAction);
  // const mapParam: Dictionary = new Dictionary();
  // mapParam.add('strViewId', strViewId);
  // mapParam.add('strRegionId', strRegionId);
  // const strData = mapParam.getParamText(); // "例如: strIdentityID =01";

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strViewId,
      strRegionId,
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
        viewRegionRelaEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        viewRegionRelaEx_ConstructorName,
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
/// 把一个扩展类的部分属性进行函数转换
/// (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_FuncMap)
/// </summary>
/// <param name = "objViewRegionS">源对象</param>
export async function ViewRegionRelaEx_FuncMap4OrderNum(objViewRegionRela: clsViewRegionRelaENEx) {
  try {
    {
      const viewRegionStore = useviewRegionStore();
      const ViewRegion_RegionId = objViewRegionRela.regionId;
      const ViewRegion_RegionTypeId = await viewRegionStore.getRegionTypeId(ViewRegion_RegionId);

      const RegionType_RegionTypeOrderNum = await RegionType_func(
        clsRegionTypeEN.con_RegionTypeId,
        clsRegionTypeEN.con_RegionTypeOrderNum,
        ViewRegion_RegionTypeId,
      );
      objViewRegionRela.regionTypeOrderNum = Number(RegionType_RegionTypeOrderNum);
    }
  } catch (e: any) {
    const strMsg = `(errid:WiTsCs0012)函数映射表对象数据出错,${e}.`;
    console.error(strMsg);
    alert(strMsg);
  }
}

export function ViewRegionRelaEx_SortFunByOrderNumber(
  a: clsViewRegionRelaENEx,
  b: clsViewRegionRelaENEx,
): number {
  return a.regionTypeOrderNum - b.regionTypeOrderNum;
}

/// <summary>
/// 为界面引用相关区域，建立界面区域关系
/// (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
/// </summary>
/// <param name = "strViewId">界面Id</param>
/// <param name = "strRegionId">区域Id</param>
/// <param name = "strPrjId">工程Id</param>
/// <param name = "strOpUserId">操作用户Id</param>
/// <returns>获取的相应对象列表</returns>
export async function ViewRegionRelaEx_AddRelaRegion(
  strViewId: string,
  strRegionId: string,
  strPrjId: string,
  strOpUserId: string,
): Promise<boolean> {
  const strThisFuncName = ViewRegionRelaEx_AddRelaRegion.name;
  const strAction = 'AddRelaRegion';
  const strUrl = GetWebApiUrl(viewRegionRelaEx_Controller, strAction);
  // const mapParam: Dictionary = new Dictionary();
  // mapParam.add('strViewId', strViewId);
  // mapParam.add('strRegionId', strRegionId);
  // mapParam.add('strCmPrjId', strCmPrjId);
  // mapParam.add('strOpUserId', strOpUserId);
  // const strData = mapParam.getParamText(); // "例如: strIdentityID =01";

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strViewId,
      strRegionId,
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
        viewRegionRelaEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        viewRegionRelaEx_ConstructorName,
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
 * 排序函数。根据关键字字段的值进行比较
 * 作者:潘以锋
 * 日期:00-00-00
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function ViewRegionRelaEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  // const strThisFuncName = 'SortFunByKey';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsViewRegionRelaENEx.con_RegionTypeOrderNum:
        return (a: clsViewRegionRelaENEx, b: clsViewRegionRelaENEx) => {
          return a.regionTypeOrderNum - b.regionTypeOrderNum;
        };
      case clsViewRegionRelaENEx.con_RegionName:
        return (a: clsViewRegionRelaENEx, b: clsViewRegionRelaENEx) => {
          return a.regionName.localeCompare(b.regionName);
        };
      case clsViewRegionRelaENEx.con_RegionTypeSimName:
        return (a: clsViewRegionRelaENEx, b: clsViewRegionRelaENEx) => {
          return a.regionTypeSimName.localeCompare(b.regionTypeSimName);
        };
      case clsViewRegionRelaENEx.con_ClsName:
        return (a: clsViewRegionRelaENEx, b: clsViewRegionRelaENEx) => {
          return a.clsName.localeCompare(b.clsName);
        };
      case clsViewRegionRelaENEx.con_ContainerTypeName:
        return (a: clsViewRegionRelaENEx, b: clsViewRegionRelaENEx) => {
          return a.containerTypeName.localeCompare(b.containerTypeName);
        };
      case clsViewRegionRelaENEx.con_FileName:
        return (a: clsViewRegionRelaENEx, b: clsViewRegionRelaENEx) => {
          return a.fileName.localeCompare(b.fileName);
        };
      case clsViewRegionRelaENEx.con_PageDispModeName:
        return (a: clsViewRegionRelaENEx, b: clsViewRegionRelaENEx) => {
          return a.pageDispModeName.localeCompare(b.pageDispModeName);
        };
      case clsViewRegionRelaENEx.con_FldNum:
        return (a: clsViewRegionRelaENEx, b: clsViewRegionRelaENEx) => {
          return a.fldNum - b.fldNum;
        };
      default:
        return ViewRegionRela_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsViewRegionRelaENEx.con_RegionTypeOrderNum:
        return (a: clsViewRegionRelaENEx, b: clsViewRegionRelaENEx) => {
          return b.regionTypeOrderNum - a.regionTypeOrderNum;
        };
      case clsViewRegionRelaENEx.con_RegionName:
        return (a: clsViewRegionRelaENEx, b: clsViewRegionRelaENEx) => {
          return b.regionName.localeCompare(a.regionName);
        };
      case clsViewRegionRelaENEx.con_RegionTypeSimName:
        return (a: clsViewRegionRelaENEx, b: clsViewRegionRelaENEx) => {
          return b.regionTypeSimName.localeCompare(a.regionTypeSimName);
        };
      case clsViewRegionRelaENEx.con_ClsName:
        return (a: clsViewRegionRelaENEx, b: clsViewRegionRelaENEx) => {
          return b.clsName.localeCompare(a.clsName);
        };
      case clsViewRegionRelaENEx.con_ContainerTypeName:
        return (a: clsViewRegionRelaENEx, b: clsViewRegionRelaENEx) => {
          return b.containerTypeName.localeCompare(a.containerTypeName);
        };
      case clsViewRegionRelaENEx.con_FileName:
        return (a: clsViewRegionRelaENEx, b: clsViewRegionRelaENEx) => {
          return b.fileName.localeCompare(a.fileName);
        };
      case clsViewRegionRelaENEx.con_PageDispModeName:
        return (a: clsViewRegionRelaENEx, b: clsViewRegionRelaENEx) => {
          return b.pageDispModeName.localeCompare(a.pageDispModeName);
        };
      case clsViewRegionRelaENEx.con_FldNum:
        return (a: clsViewRegionRelaENEx, b: clsViewRegionRelaENEx) => {
          return b.fldNum - a.fldNum;
        };
      default:
        return ViewRegionRela_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function ViewRegionRelaEx_GetObjExLstByPagerAsyncBak(
  objPagerPara: stuPagerPara,
): Promise<Array<clsViewRegionRelaENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrViewRegionRelaObjLst = await ViewRegionRela_GetObjLstByPagerAsync(objPagerPara);
  const arrViewRegionRelaExObjLst = arrViewRegionRelaObjLst.map(ViewRegionRelaEx_CopyToEx);

  for (const objInFor of arrViewRegionRelaExObjLst) {
    await ViewRegionRelaEx_FuncMapByFldName(clsViewRegionRelaENEx.con_RegionTypeOrderNum, objInFor);
  }
  if (arrViewRegionRelaExObjLst.length == 0) return arrViewRegionRelaExObjLst;
  let arrViewRegionRela_Sel: Array<clsViewRegionRelaENEx> = arrViewRegionRelaExObjLst;
  try {
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrViewRegionRela_Sel = arrViewRegionRela_Sel.sort(
        ViewRegionRelaEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrViewRegionRela_Sel = arrViewRegionRela_Sel.sort(objPagerPara.sortFun);
    }

    return arrViewRegionRela_Sel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      viewRegionRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsViewRegionRelaENEx>();
}

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function ViewRegionRelaEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsViewRegionRelaENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrViewRegionRelaObjLst = await ViewRegionRela_GetObjLstByPagerAsync(objPagerPara);
  const arrViewRegionRelaExObjLst = arrViewRegionRelaObjLst.map(ViewRegionRelaEx_CopyToEx);

  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsViewRegionRelaEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrViewRegionRelaExObjLst) {
      await ViewRegionRelaEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrViewRegionRelaExObjLst.length == 0) return arrViewRegionRelaExObjLst;
  let arrViewRegionRela_Sel: Array<clsViewRegionRelaENEx> = arrViewRegionRelaExObjLst;
  try {
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrViewRegionRela_Sel = arrViewRegionRela_Sel.sort(
        ViewRegionRelaEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrViewRegionRela_Sel = arrViewRegionRela_Sel.sort(objPagerPara.sortFun);
    }

    return arrViewRegionRela_Sel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      viewRegionRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsViewRegionRelaENEx>();
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
export function ViewRegionRelaEx_FuncMapByFldName(
  strFldName: string,
  objViewRegionRelaEx: clsViewRegionRelaENEx,
) {
  const strThisFuncName = ViewRegionRelaEx_FuncMapByFldName.name;
  let strMsg = '';
  //如果是本表中字段，不需要映射
  const arrFldName = clsViewRegionRelaEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsViewRegionRelaENEx.con_RegionTypeOrderNum:
      return ViewRegionRelaEx_FuncMap_RegionTypeOrderNum(objViewRegionRelaEx);
    case clsViewRegionRelaENEx.con_RegionName:
      return ViewRegionRelaEx_FuncMap_RegionName(objViewRegionRelaEx);
    case clsViewRegionRelaENEx.con_ClsName:
      return ViewRegionRelaEx_FuncMap_ClassName(objViewRegionRelaEx);
    case clsViewRegionRelaENEx.con_RegionTypeSimName:
      return ViewRegionRelaEx_FuncMap_RegionTypeSimName(objViewRegionRelaEx);
    case clsViewRegionRelaENEx.con_ContainerTypeName:
      return ViewRegionRelaEx_FuncMap_ContainerTypeName(objViewRegionRelaEx);
    case clsViewRegionRelaENEx.con_FileName:
      return ViewRegionRelaEx_FuncMap_FileName(objViewRegionRelaEx);
    case clsViewRegionRelaENEx.con_PageDispModeName:
      return ViewRegionRelaEx_FuncMap_PageDispModeName(objViewRegionRelaEx);
    case clsViewRegionRelaENEx.con_FldNum:
      return ViewRegionRelaEx_FuncMap_FldNum(objViewRegionRelaEx);
    case clsViewRegionRelaENEx.con_RegionTypeId:
      return ViewRegionRelaEx_FuncMap_RegionTypeId(objViewRegionRelaEx);
    case clsViewRegionRelaENEx.con_ViewName:
      return ViewRegionRelaEx_FuncMap_ViewName(objViewRegionRelaEx);
    case clsViewRegionRelaENEx.con_RegionTabName:
      return ViewRegionRelaEx_FuncMap_RegionTabName(objViewRegionRelaEx);
    case clsViewRegionRelaENEx.con_PrjId:
      return ViewRegionRelaEx_FuncMap_PrjId(objViewRegionRelaEx);
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
 * @param objViewRegionRelaS:源对象
 **/
export async function ViewRegionRelaEx_FuncMap_RegionTypeOrderNum(
  objViewRegionRela: clsViewRegionRelaENEx,
) {
  const strThisFuncName = ViewRegionRelaEx_FuncMap_RegionTypeOrderNum.name;
  const viewRegionStore = useviewRegionStore();
  try {
    if (objViewRegionRela.regionTypeOrderNum == 0) {
      const ViewRegion_RegionId = objViewRegionRela.regionId;
      const ViewRegion_RegionTypeId = await viewRegionStore.getRegionTypeId(ViewRegion_RegionId);
      const RegionType_RegionTypeId = ViewRegion_RegionTypeId;
      const RegionType_RegionTypeOrderNum = await RegionType_func(
        clsRegionTypeEN.con_RegionTypeId,
        clsRegionTypeEN.con_RegionTypeOrderNum,
        RegionType_RegionTypeId,
      );
      objViewRegionRela.regionTypeOrderNum = RegionType_RegionTypeOrderNum;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000130)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      viewRegionRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objViewRegionRelaS:源对象
 **/
export async function ViewRegionRelaEx_FuncMap_RegionName(
  objViewRegionRela: clsViewRegionRelaENEx,
) {
  const strThisFuncName = ViewRegionRelaEx_FuncMap_RegionName.name;
  const viewRegionStore = useviewRegionStore();
  try {
    if (IsNullOrEmpty(objViewRegionRela.regionName) == true) {
      const ViewRegion_RegionId = objViewRegionRela.regionId;
      const ViewRegion_RegionName = await viewRegionStore.getName(ViewRegion_RegionId);
      objViewRegionRela.regionName = ViewRegion_RegionName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000131)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      viewRegionRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objViewRegionRelaS:源对象
 **/
export async function ViewRegionRelaEx_FuncMap_RegionTypeSimName(
  objViewRegionRela: clsViewRegionRelaENEx,
) {
  const strThisFuncName = ViewRegionRelaEx_FuncMap_RegionTypeSimName.name;
  const viewRegionStore = useviewRegionStore();
  try {
    if (IsNullOrEmpty(objViewRegionRela.regionTypeSimName) == true) {
      const ViewRegion_RegionId = objViewRegionRela.regionId;
      const ViewRegion_RegionTypeId = await viewRegionStore.getRegionTypeId(ViewRegion_RegionId);
      const RegionType_RegionTypeId = ViewRegion_RegionTypeId;
      const RegionType_RegionTypeSimName = await RegionType_func(
        clsRegionTypeEN.con_RegionTypeId,
        clsRegionTypeEN.con_RegionTypeSimName,
        RegionType_RegionTypeId,
      );
      objViewRegionRela.regionTypeSimName = RegionType_RegionTypeSimName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000119)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      viewRegionRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objViewRegionRelaS:源对象
 **/
export async function ViewRegionRelaEx_FuncMap_RegionTypeId(
  objViewRegionRela: clsViewRegionRelaENEx,
) {
  const strThisFuncName = ViewRegionRelaEx_FuncMap_RegionTypeId.name;
  const viewRegionStore = useviewRegionStore();
  try {
    if (IsNullOrEmpty(objViewRegionRela.regionTypeId) == true) {
      const ViewRegion_RegionId = objViewRegionRela.regionId;
      const ViewRegion_RegionTypeId = await viewRegionStore.getRegionTypeId(ViewRegion_RegionId);
      objViewRegionRela.regionTypeId = ViewRegion_RegionTypeId;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000119)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      viewRegionRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objViewRegionRelaS:源对象
 **/
export async function ViewRegionRelaEx_FuncMap_ContainerTypeName(
  objViewRegionRela: clsViewRegionRelaENEx,
) {
  const strThisFuncName = ViewRegionRelaEx_FuncMap_ContainerTypeName.name;
  const viewRegionStore = useviewRegionStore();
  try {
    if (IsNullOrEmpty(objViewRegionRela.containerTypeName) == true) {
      const ViewRegion_RegionId = objViewRegionRela.regionId;
      const ViewRegion_ContainerTypeId = await viewRegionStore.getContainerTypeId(
        ViewRegion_RegionId,
      );
      const GCContainerType_ContainerTypeId = ViewRegion_ContainerTypeId;
      const GCContainerType_ContainerTypeName = await GCContainerType_func(
        clsGCContainerTypeEN.con_ContainerTypeId,
        clsGCContainerTypeEN.con_ContainerTypeName,
        GCContainerType_ContainerTypeId,
      );
      objViewRegionRela.containerTypeName = GCContainerType_ContainerTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000120)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      viewRegionRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objViewRegionRelaS:源对象
 **/
export async function ViewRegionRelaEx_FuncMap_PageDispModeName(
  objViewRegionRela: clsViewRegionRelaENEx,
) {
  const strThisFuncName = ViewRegionRelaEx_FuncMap_PageDispModeName.name;
  const viewRegionStore = useviewRegionStore();
  try {
    if (IsNullOrEmpty(objViewRegionRela.pageDispModeName) == true) {
      const ViewRegion_RegionId = objViewRegionRela.regionId;
      const ViewRegion_PageDispModeId = await viewRegionStore.getPageDispModeId(
        ViewRegion_RegionId,
      );
      const PageDispMode_PageDispModeId = ViewRegion_PageDispModeId;
      const PageDispMode_PageDispModeName = await PageDispMode_func(
        clsPageDispModeEN.con_PageDispModeId,
        clsPageDispModeEN.con_PageDispModeName,
        PageDispMode_PageDispModeId,
      );
      objViewRegionRela.pageDispModeName = PageDispMode_PageDispModeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000121)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      viewRegionRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objViewRegionRelaS:源对象
 **/
export async function ViewRegionRelaEx_FuncMap_FldNum(objViewRegionRela: clsViewRegionRelaENEx) {
  const strThisFuncName = ViewRegionRelaEx_FuncMap_FldNum.name;
  const viewRegionStore = useviewRegionStore();
  try {
    if (objViewRegionRela.fldNum == 0) {
      const ViewRegion_RegionId = objViewRegionRela.regionId;
      const ViewRegion_TabId = await viewRegionStore.getTabId(ViewRegion_RegionId);
      const vPrjTabFldNum_TabId = ViewRegion_TabId;
      const vPrjTabFldNum_FldNum = await vPrjTab_Sim_func(
        clsvPrjTab_SimEN.con_TabId,
        clsvPrjTab_SimEN.con_FldNum,
        vPrjTabFldNum_TabId,
        clsPrivateSessionStorage.currSelPrjId,
      );
      objViewRegionRela.fldNum = vPrjTabFldNum_FldNum;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000079)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      viewRegionRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objViewRegionRelaS:源对象
 **/
export async function ViewRegionRelaEx_FuncMap_ClassName(objViewRegionRela: clsViewRegionRelaENEx) {
  const strThisFuncName = ViewRegionRelaEx_FuncMap_ClassName.name;
  const viewRegionStore = useviewRegionStore();
  try {
    if (IsNullOrEmpty(objViewRegionRela.clsName) == true) {
      const ViewRegion_RegionId = objViewRegionRela.regionId;
      const ViewRegion_ClassName = await viewRegionStore.getClsName(ViewRegion_RegionId);
      objViewRegionRela.clsName = ViewRegion_ClassName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000132)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      viewRegionRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objViewRegionRelaS:源对象
 **/
export async function ViewRegionRelaEx_FuncMap_FileName(objViewRegionRela: clsViewRegionRelaENEx) {
  const strThisFuncName = ViewRegionRelaEx_FuncMap_FileName.name;
  const viewRegionStore = useviewRegionStore();
  try {
    if (IsNullOrEmpty(objViewRegionRela.fileName) == true) {
      const ViewRegion_RegionId = objViewRegionRela.regionId;
      const ViewRegion_FileName = await viewRegionStore.getFileName(ViewRegion_RegionId);
      objViewRegionRela.fileName = ViewRegion_FileName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000133)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      viewRegionRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objViewRegionRelaS:源对象
 **/
export async function ViewRegionRelaEx_FuncMap_ViewName(objViewRegionRela: clsViewRegionRelaENEx) {
  const strThisFuncName = ViewRegionRelaEx_FuncMap_ViewName.name;
  const viewInfoStore = useviewInfoStore();
  try {
    if (IsNullOrEmpty(objViewRegionRela.viewName) == true) {
      const ViewInfo_ViewId = objViewRegionRela.viewId;
      const ViewInfo_ViewName = await viewInfoStore.getName(ViewInfo_ViewId);
      objViewRegionRela.viewName = ViewInfo_ViewName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000162)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      viewRegionRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objViewRegionRelaS:源对象
 **/
export async function ViewRegionRelaEx_FuncMap_PrjId(objViewRegionRela: clsViewRegionRelaENEx) {
  const strThisFuncName = ViewRegionRelaEx_FuncMap_PrjId.name;
  const viewInfoStore = useviewInfoStore();
  try {
    if (IsNullOrEmpty(objViewRegionRela.prjId) == true) {
      const ViewInfo_ViewId = objViewRegionRela.viewId;
      const ViewInfo_PrjId = await viewInfoStore.getPrjId(ViewInfo_ViewId);
      const Projects_PrjId = ViewInfo_PrjId;
      objViewRegionRela.prjId = Projects_PrjId;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000155)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      viewRegionRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objViewRegionRelaS:源对象
 **/
export async function ViewRegionRelaEx_FuncMap_RegionTabName(
  objViewRegionRela: clsViewRegionRelaENEx,
) {
  const strThisFuncName = ViewRegionRelaEx_FuncMap_RegionTabName.name;
  const viewRegionStore = useviewRegionStore();
  try {
    if (IsNullOrEmpty(objViewRegionRela.regionTabName) == true) {
      const ViewRegion_RegionId = objViewRegionRela.regionId;
      const ViewRegion_TabId = await viewRegionStore.getTabId(ViewRegion_RegionId);
      const vPrjTab_Sim_TabId = ViewRegion_TabId;
      const vPrjTab_Sim_TabName = await vPrjTab_SimEx_func(
        clsvPrjTab_SimEN.con_TabId,
        clsvPrjTab_SimEN.con_TabName,
        vPrjTab_Sim_TabId,
      );
      objViewRegionRela.regionTabName = vPrjTab_Sim_TabName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000175)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      viewRegionRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较，返回是否相等
 * 作者:潘以锋
 * 日期:00-00-00
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function ViewRegionRelaEx_FilterFunByKey(
  obj: clsViewRegionRelaENEx,
  strKey: string,
  value: any,
) {
  // const strThisFuncName = 'FilterFunByKey';
  // const strMsg = '';
  switch (strKey) {
    case clsViewRegionRelaENEx.con_RegionTypeOrderNum:
      return obj.regionTypeOrderNum === value;

    case clsViewRegionRelaENEx.con_RegionName:
      return obj.regionName === value;

    case clsViewRegionRelaENEx.con_ClsName:
      return obj.clsName === value;

    case clsViewRegionRelaENEx.con_RegionTypeSimName:
      return obj.regionTypeSimName === value;

    case clsViewRegionRelaENEx.con_ContainerTypeName:
      return obj.containerTypeName === value;

    case clsViewRegionRelaENEx.con_FileName:
      return obj.fileName === value;

    case clsViewRegionRelaENEx.con_PageDispModeName:
      return obj.pageDispModeName === value;

    case clsViewRegionRelaENEx.con_FldNum:
      return obj.fldNum === value;

    case clsViewRegionRelaENEx.con_RegionTypeId:
      return obj.regionTypeId === value;

    case clsViewRegionRelaENEx.con_ViewName:
      return obj.viewName === value;

    case clsViewRegionRelaENEx.con_RegionTabName:
      return obj.regionTabName === value;

    case clsViewRegionRelaENEx.con_PrjId:
      return obj.prjId === value;

    default:
      return ViewRegionRela_FilterFunByKey(strKey, value);
  }
}

export async function ViewRegionRelaEx_func4Lst(
  strInFldName: string,
  strOutFldName: string,
  strInValue: any,
  strCmPrjId: string,
) {
  // const strThisFuncName = 'ViewRegionRelaEx_func4Lst';

  if (IsNullOrEmpty(strCmPrjId) == true) {
    const strMsg = Format('参数:[strCmPrjId]不能为空！(In func)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strCmPrjId.length != 6) {
    const strMsg = Format('缓存分类变量:[strCmPrjId]的长度:[{0}]不正确！', strCmPrjId.length);
    console.error(strMsg);
    throw strMsg;
  }

  //if (strInFldName != clsViewRegionRelaEN.con_mId) {
  //    const strMsg = Format("输入字段名:[{0}]不正确!", strInFldName);
  //    console.error(strMsg);
  //    throw new Error(strMsg);
  //}
  if (clsViewRegionRelaEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确，不在输出字段范围之内!({1})',
      strInFldName,
      clsViewRegionRelaEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (strInValue == 0) {
    return '';
  }

  const arrViewRegionRela = await ViewRegionRela_GetObjLstCache(strCmPrjId);
  //    const arrViewRegionRela_Sel = arrViewRegionRela.filter(x=>ViewRegionRelaEx_FilterFunByKey(x, strInFldName, strInValue));
  const arrViewRegionRela_Sel = arrViewRegionRela.filter(
    (x) => x.GetFldValue(strInFldName) == strInValue,
  );
  if (arrViewRegionRela_Sel.length == 0) return '';
  const arrValue = arrViewRegionRela_Sel.map((x) => x.GetFldValue(strOutFldName));
  return arrValue;
}
