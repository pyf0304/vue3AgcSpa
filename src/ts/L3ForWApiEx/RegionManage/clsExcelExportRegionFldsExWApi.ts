import axios from 'axios';
import { vFieldTab_SimEx_func } from '../Table_Field/clsvFieldTab_SimExWApi';
import { PrjTabFldEx_GetDnPathIdByTabIdAndOutFldIdCache } from '../Table_Field/clsPrjTabFldExWApi';
import { vPrjTab_SimEx_func } from '../Table_Field/clsvPrjTab_SimExWApi';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { clsExcelExportRegionFldsEN } from '@/ts/L0Entity/RegionManage/clsExcelExportRegionFldsEN';
import { clsExcelExportRegionFldsENEx } from '@/ts/L0Entity/RegionManage/clsExcelExportRegionFldsENEx';
import { clsPrjTabEN } from '@/ts/L0Entity/Table_Field/clsPrjTabEN';
import { clsvFieldTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvFieldTab_SimEN';
import {
  ExcelExportRegionFlds_GetObjBymIdCache,
  ExcelExportRegionFlds_GetObjLstCache,
  ExcelExportRegionFlds_GetRecCountByCondCache,
  ExcelExportRegionFlds_SortFunByKey,
} from '@/ts/L3ForWApi/RegionManage/clsExcelExportRegionFldsWApi';

import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
// import { Dictionary } from '@/ts/PubFun/tzDictionary';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { useviewRegionStore } from '@/store/modules/viewRegion';
import { vFieldTab_Sim_GetNameByFldIdCache } from '@/ts/L3ForWApi/Table_Field/clsvFieldTab_SimWApi';
import { ConditionCollection } from '@/ts/PubFun/ConditionCollection';

export const excelExportRegionFldsEx_Controller = 'ExcelExportRegionFldsExApi';
export const excelExportRegionFldsEx_ConstructorName = 'excelExportRegionFldsEx';

/// <summary>
/// 调整序号
/// (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
/// </summary>
/// <param name = "strDirect">调整方向</param>
/// <param name = "lngMid">lngMid</param>
/// <returns>获取的相应对象列表</returns>
export async function ExcelExportRegionFldsEx_AdjustSequenceNumber(
  strDirect: string,
  lngMid: number,
): Promise<boolean> {
  const strThisFuncName = ExcelExportRegionFldsEx_AdjustSequenceNumber.name;
  const strAction = 'AdjustSequenceNumber';
  const strUrl = GetWebApiUrl(excelExportRegionFldsEx_Controller, strAction);
  // const mapParam: Dictionary = new Dictionary();
  // mapParam.add('strDirect', strDirect);
  // mapParam.add('lngMid', lngMid);
  // const strData = mapParam.getParamText(); // "例如: strIdentityID =01";

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strDirect,
      lngMid,
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
        excelExportRegionFldsEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        excelExportRegionFldsEx_ConstructorName,
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
/// 重序
/// (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
/// </summary>
/// <param name = "strRegionId">区域Id</param>
/// <returns>获取的相应对象列表</returns>
export async function ExcelExportRegionFldsEx_ReOrder(strRegionId: string): Promise<void> {
  const strThisFuncName = ExcelExportRegionFldsEx_ReOrder.name;
  const strAction = 'ReOrder';
  const strUrl = GetWebApiUrl(excelExportRegionFldsEx_Controller, strAction);
  // const mapParam: Dictionary = new Dictionary();
  // mapParam.add('strRegionId', strRegionId);
  // const strData = mapParam.getParamText(); // "例如: strIdentityID =01";

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strRegionId,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      return data.returnStr;
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
        excelExportRegionFldsEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        excelExportRegionFldsEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

export async function ExcelExportRegionFldsEx_GetObjLstByRegionIdCacheEx(strRegionId: string) {
  //初始化列表缓存
  const arrObjLstCache: Array<clsExcelExportRegionFldsEN> =
    await ExcelExportRegionFlds_GetObjLstCache(strRegionId);

  const arrExcelExportRegionFldsObjLst_Sel1: Array<clsExcelExportRegionFldsEN> = arrObjLstCache
    .filter((x) => x.regionId == strRegionId)
    .sort((x) => x.seqNum);
  return arrExcelExportRegionFldsObjLst_Sel1;
}

export function ExcelExportRegionFldsEx_SortFunByInUseAndSeq(
  a: clsExcelExportRegionFldsENEx,
  b: clsExcelExportRegionFldsENEx,
): number {
  if (a.inUse == b.inUse) return a.seqNum - b.seqNum;
  else {
    if (a.inUse == true) return -1;
    else return 1;
  }
}
export async function ExcelExportRegionFldsEx_GetObjLstByRegionIdCache4InUseEx(
  strRegionId: string,
) {
  //初始化列表缓存
  const arrObjLstCache: Array<clsExcelExportRegionFldsEN> =
    await ExcelExportRegionFlds_GetObjLstCache(strRegionId);

  const arrExcelExportRegionFldsObjLst_Sel1: Array<clsExcelExportRegionFldsEN> = arrObjLstCache
    .filter((x) => x.regionId == strRegionId && x.inUse == true)
    .sort((x) => x.seqNum);
  return arrExcelExportRegionFldsObjLst_Sel1;
}

/// <summary>
/// 导入相关字段
/// (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
/// </summary>
/// <param name = "strRegionId">区域Id</param>
/// <param name = "strPrjId">工程Id</param>
/// <param name = "strUserId">用户Id</param>
/// <returns>获取的相应对象列表</returns>
export async function ExcelExportRegionFldsEx_ImportRelaFlds(
  strRegionId: string,
  strPrjId: string,
  strUserId: string,
): Promise<boolean> {
  const strThisFuncName = ExcelExportRegionFldsEx_ImportRelaFlds.name;
  const strAction = 'ImportRelaFlds';
  const strUrl = GetWebApiUrl(excelExportRegionFldsEx_Controller, strAction);
  // const mapParam: Dictionary = new Dictionary();
  // mapParam.add('strRegionId', strRegionId);
  // mapParam.add('strPrjId', strPrjId);
  // mapParam.add('strUserId', strUserId);
  // const strData = mapParam.getParamText(); // "例如: strIdentityID =01";

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strRegionId,
      strPrjId,
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
        excelExportRegionFldsEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        excelExportRegionFldsEx_ConstructorName,
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
/// 把同一个类的对象,复制到该类的扩展对象
/// (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_CopyToEx)
/// </summary>
/// <param name = "objExcelExportRegionFldsENS">源对象</param>
/// <param name = "objExcelExportRegionFldsENT">目标对象</param>
export function ExcelExportRegionFldsEx_CopyToEx(
  objExcelExportRegionFldsENS: clsExcelExportRegionFldsEN,
): clsExcelExportRegionFldsENEx {
  const objExcelExportRegionFldsENT = new clsExcelExportRegionFldsENEx();
  try {
    ObjectAssign(objExcelExportRegionFldsENT, objExcelExportRegionFldsENS);
    return objExcelExportRegionFldsENT;
  } catch (e: any) {
    const strMsg = Format('(errid:WiTsCs0011)Copy表对象数据出错,${e}.');
    console.error(strMsg);
    alert(strMsg);
    return objExcelExportRegionFldsENT;
  }
}

/// <summary>
/// 把一个扩展类的部分属性进行函数转换
/// (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_FuncMap)
/// </summary>
/// <param name = "objExcelExportRegionFldsS">源对象</param>
export async function ExcelExportRegionFldsEx_FuncMapBak(
  objExcelExportRegionFlds: clsExcelExportRegionFldsENEx,
) {
  const strThisFuncName = ExcelExportRegionFldsEx_FuncMapBak.name;
  const viewRegionStore = useviewRegionStore();
  try {
    if (objExcelExportRegionFlds.isUseFunc == false) {
      if (IsNullOrEmpty(objExcelExportRegionFlds.fldId) == false) {
        const ViewRegion_RegionId = objExcelExportRegionFlds.regionId;
        const ViewRegion_TabId = await viewRegionStore.getTabId(ViewRegion_RegionId);
        const PrjTabTabId = ViewRegion_TabId;
        const PrjTabTabName = await vPrjTab_SimEx_func(
          clsPrjTabEN.con_TabId,
          clsPrjTabEN.con_TabName,
          PrjTabTabId,
        );
        objExcelExportRegionFlds.tabName = PrjTabTabName;
      }
    } else {
      let ViewRegion_RegionId = objExcelExportRegionFlds.regionId;
      const ViewRegion_TabId = await viewRegionStore.getTabId(ViewRegion_RegionId);
      const PrjTabTabId = ViewRegion_TabId;
      const PrjTabTabName = await vPrjTab_SimEx_func(
        clsPrjTabEN.con_TabId,
        clsPrjTabEN.con_TabName,
        PrjTabTabId,
      );
      objExcelExportRegionFlds.tabName = PrjTabTabName;

      ViewRegion_RegionId = objExcelExportRegionFlds.regionId;

      const strOutFldName = await vFieldTab_Sim_GetNameByFldIdCache(
        objExcelExportRegionFlds.outFldId,
        clsPrivateSessionStorage.currSelPrjId,
      );

      objExcelExportRegionFlds.tabName = Format(
        "<span class='text-secondary  font-weight-bold'>映射</span><span class='text-primary'>({0}=>{1})</span>",
        objExcelExportRegionFlds.fldName,
        strOutFldName,
      );
    }
  } catch (e: any) {
    const strMsg = `(errid:WiTsCs0012)函数映射表对象数据出错,${e}.(${excelExportRegionFldsEx_ConstructorName}.${strThisFuncName})`;
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
export function ExcelExportRegionFldsEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  // const strThisFuncName = 'SortFunByKey';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsExcelExportRegionFldsENEx.con_FldName:
        return (a: clsExcelExportRegionFldsENEx, b: clsExcelExportRegionFldsENEx) => {
          return a.fldName.localeCompare(b.fldName);
        };
      case clsExcelExportRegionFldsENEx.con_FldNameV2:
        return (a: clsExcelExportRegionFldsENEx, b: clsExcelExportRegionFldsENEx) => {
          return a.fldNameV2.localeCompare(b.fldNameV2);
        };
      case clsExcelExportRegionFldsENEx.con_TabName:
        return (a: clsExcelExportRegionFldsENEx, b: clsExcelExportRegionFldsENEx) => {
          return a.tabName.localeCompare(b.tabName);
        };
      case clsExcelExportRegionFldsENEx.con_DateTimeSim:
        return (a: clsExcelExportRegionFldsENEx, b: clsExcelExportRegionFldsENEx) => {
          return a.dateTimeSim.localeCompare(b.dateTimeSim);
        };
      case clsExcelExportRegionFldsENEx.con_TrClass:
        return (a: clsExcelExportRegionFldsENEx, b: clsExcelExportRegionFldsENEx) => {
          return a.trClass.localeCompare(b.trClass);
        };
      default:
        return ExcelExportRegionFlds_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsExcelExportRegionFldsENEx.con_FldName:
        return (a: clsExcelExportRegionFldsENEx, b: clsExcelExportRegionFldsENEx) => {
          return b.fldName.localeCompare(a.fldName);
        };
      case clsExcelExportRegionFldsENEx.con_FldNameV2:
        return (a: clsExcelExportRegionFldsENEx, b: clsExcelExportRegionFldsENEx) => {
          return b.fldNameV2.localeCompare(a.fldNameV2);
        };
      case clsExcelExportRegionFldsENEx.con_TabName:
        return (a: clsExcelExportRegionFldsENEx, b: clsExcelExportRegionFldsENEx) => {
          return b.tabName.localeCompare(a.tabName);
        };
      case clsExcelExportRegionFldsENEx.con_DateTimeSim:
        return (a: clsExcelExportRegionFldsENEx, b: clsExcelExportRegionFldsENEx) => {
          return b.dateTimeSim.localeCompare(a.dateTimeSim);
        };
      case clsExcelExportRegionFldsENEx.con_TrClass:
        return (a: clsExcelExportRegionFldsENEx, b: clsExcelExportRegionFldsENEx) => {
          return b.trClass.localeCompare(a.trClass);
        };
      default:
        return ExcelExportRegionFlds_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 导入扩展字段
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param lngMid: lngMid
 * @param strPrjId: 工程Id
 * @param strCmPrjId: CM工程Id
 * @param strUserId: 用户Id
 * @returns 获取的相应对象列表
 */
export async function ExcelExportRegionFldsEx_ImportExtendFld(
  lngMid: number,
  strPrjId: string,
  strUserId: string,
): Promise<boolean> {
  const strThisFuncName = ExcelExportRegionFldsEx_ImportExtendFld.name;
  const strAction = 'ImportExtendFld';
  const strUrl = GetWebApiUrl(excelExportRegionFldsEx_Controller, strAction);
  // const mapParam: Dictionary = new Dictionary();
  // mapParam.add('lngMid', lngMid);
  // mapParam.add('strPrjId', strPrjId);
  // mapParam.add('strUserId', strUserId);
  // const strData = mapParam.getParamText(); // "例如: strIdentityID =01";

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      lngMid,
      strPrjId,
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
        excelExportRegionFldsEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        excelExportRegionFldsEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

export async function ExcelExportRegionFldsEx_GetRecCountByCondInUseCache(
  strRegionId: string,
): Promise<number> {
  const objExcelExportRegionFlds = new ConditionCollection();
  objExcelExportRegionFlds.SetCondFldValue(clsExcelExportRegionFldsEN.con_InUse, true, '=');
  objExcelExportRegionFlds.SetCondFldValue(
    clsExcelExportRegionFldsEN.con_RegionId,
    strRegionId,
    '=',
  );
  const intRecNum = await ExcelExportRegionFlds_GetRecCountByCondCache(
    objExcelExportRegionFlds,
    strRegionId,
  );
  return intRecNum;
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
export function ExcelExportRegionFldsEx_FuncMapByFldName(
  strFldName: string,
  objExcelExportRegionFldsEx: clsExcelExportRegionFldsENEx,
) {
  const strThisFuncName = ExcelExportRegionFldsEx_FuncMapByFldName.name;
  let strMsg = '';
  //如果是本表中字段，不需要映射
  const arrFldName = clsExcelExportRegionFldsEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsExcelExportRegionFldsENEx.con_FldName:
      return ExcelExportRegionFldsEx_FuncMap_FldName(objExcelExportRegionFldsEx);
    case clsExcelExportRegionFldsENEx.con_FldNameV2:
      return ExcelExportRegionFldsEx_FuncMap_FldNameV2(objExcelExportRegionFldsEx);

    case clsExcelExportRegionFldsENEx.con_TabName:
      return ExcelExportRegionFldsEx_FuncMap_TabName(objExcelExportRegionFldsEx);
    case clsExcelExportRegionFldsENEx.con_OutFldName:
      return ExcelExportRegionFldsEx_FuncMap_OutFldName(objExcelExportRegionFldsEx);
    case clsExcelExportRegionFldsENEx.con_TabId:
      return ExcelExportRegionFldsEx_FuncMap_TabId(objExcelExportRegionFldsEx);
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
 * @param objExcelExportRegionFldsS:源对象
 **/
export async function ExcelExportRegionFldsEx_FuncMap_FldName(
  objExcelExportRegionFlds: clsExcelExportRegionFldsENEx,
) {
  const strThisFuncName = ExcelExportRegionFldsEx_FuncMap_FldName.name;
  try {
    if (IsNullOrEmpty(objExcelExportRegionFlds.fldName) == true) {
      const vFieldTab_Sim_FldId = objExcelExportRegionFlds.fldId;
      const vFieldTab_Sim_FldName = await vFieldTab_SimEx_func(
        clsvFieldTab_SimEN.con_FldId,
        clsvFieldTab_SimEN.con_FldName,
        vFieldTab_Sim_FldId,
        clsPrivateSessionStorage.currSelPrjId,
      );
      objExcelExportRegionFlds.fldName = vFieldTab_Sim_FldName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000087)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      excelExportRegionFldsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objExcelExportRegionFldsS:源对象
 **/
export async function ExcelExportRegionFldsEx_FuncMap_TabName(
  objExcelExportRegionFlds: clsExcelExportRegionFldsENEx,
) {
  const strThisFuncName = ExcelExportRegionFldsEx_FuncMap_TabName.name;
  const viewRegionStore = useviewRegionStore();
  try {
    if (IsNullOrEmpty(objExcelExportRegionFlds.tabName) == true) {
      if (IsNullOrEmpty(objExcelExportRegionFlds.fldName) == true)
        ExcelExportRegionFldsEx_FuncMapByFldName(
          clsvFieldTab_SimEN.con_FldName,
          objExcelExportRegionFlds,
        );

      if (objExcelExportRegionFlds.isUseFunc == false) {
        if (IsNullOrEmpty(objExcelExportRegionFlds.fldId) == false) {
          const ViewRegion_RegionId = objExcelExportRegionFlds.regionId;
          const ViewRegion_TabId = await viewRegionStore.getTabId(ViewRegion_RegionId);
          const PrjTabTabId = ViewRegion_TabId;
          const PrjTabTabName = await vPrjTab_SimEx_func(
            clsPrjTabEN.con_TabId,
            clsPrjTabEN.con_TabName,
            PrjTabTabId,
          );
          objExcelExportRegionFlds.tabName = PrjTabTabName;
        }
      } else {
        let ViewRegion_RegionId = objExcelExportRegionFlds.regionId;
        const ViewRegion_TabId = await viewRegionStore.getTabId(ViewRegion_RegionId);
        const PrjTabTabId = ViewRegion_TabId;
        const PrjTabTabName = await vPrjTab_SimEx_func(
          clsPrjTabEN.con_TabId,
          clsPrjTabEN.con_TabName,
          PrjTabTabId,
        );
        objExcelExportRegionFlds.tabName = PrjTabTabName;

        ViewRegion_RegionId = objExcelExportRegionFlds.regionId;

        const strOutFldName = await vFieldTab_Sim_GetNameByFldIdCache(
          objExcelExportRegionFlds.outFldId,
          clsPrivateSessionStorage.currSelPrjId,
        );

        objExcelExportRegionFlds.tabName = Format(
          "<span class='text-secondary  font-weight-bold'>映射</span><span class='text-primary'>({0}=>{1})</span>",
          objExcelExportRegionFlds.fldName,
          strOutFldName,
        );
      }
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000094)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      excelExportRegionFldsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objExcelExportRegionFldsS:源对象
 **/
export async function ExcelExportRegionFldsEx_FuncMap_FldNameV2(
  objExcelExportRegionFlds: clsExcelExportRegionFldsENEx,
) {
  const strThisFuncName = ExcelExportRegionFldsEx_FuncMap_FldNameV2.name;
  try {
    if (IsNullOrEmpty(objExcelExportRegionFlds.fldNameV2) == true) {
      if (IsNullOrEmpty(objExcelExportRegionFlds.fldName) == true)
        await ExcelExportRegionFldsEx_FuncMapByFldName(
          clsvFieldTab_SimEN.con_FldName,
          objExcelExportRegionFlds,
        );
      if (IsNullOrEmpty(objExcelExportRegionFlds.outFldName) == true)
        await ExcelExportRegionFldsEx_FuncMapByFldName(
          clsExcelExportRegionFldsENEx.con_OutFldName,
          objExcelExportRegionFlds,
        );
      if (IsNullOrEmpty(objExcelExportRegionFlds.outFldId) == false)
        objExcelExportRegionFlds.isUseFunc = true;
      if (IsNullOrEmpty(objExcelExportRegionFlds.outFldId) == true) {
        if (IsNullOrEmpty(objExcelExportRegionFlds.fldId) == false) {
          // objExcelExportRegionFlds.fldName = objExcelExportRegionFlds.fldName;
          objExcelExportRegionFlds.fldNameV2 = Format(
            '{0}({1})',
            objExcelExportRegionFlds.fldName,
            objExcelExportRegionFlds.colCaption,
          );
        } else {
          objExcelExportRegionFlds.fldNameV2 = Format(
            '【{0}】',
            objExcelExportRegionFlds.colCaption,
          );
        }
      } else {
        const strOutFldName = objExcelExportRegionFlds.outFldName;
        //if (IsNullOrEmpty(strOutFldName)) strOutFldName = objExcelExportRegionFlds.dataPropertyName;
        objExcelExportRegionFlds.fldNameV2 = Format(
          '输入:{0}<br/>输出:{1}({2})',
          objExcelExportRegionFlds.fldName,
          strOutFldName,
          objExcelExportRegionFlds.colCaption,
        );
      }
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000087)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      excelExportRegionFldsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

export async function ExcelExportRegionFldsEx_GetFldCountInUseByRegionIdCacheEx(
  strRegionId: string,
): Promise<number> {
  const arrObjList: Array<clsExcelExportRegionFldsEN> =
    await ExcelExportRegionFldsEx_GetObjLstByRegionIdCache4InUseEx(strRegionId);
  const intFldCount = arrObjList.filter((x) => x.inUse == true).length;
  return intFldCount;
}

/**
 * 检查区域控件，并回溯修改界面的错误信息
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strRegionId: 区域Id
 * @param strCmPrjId: CM工程Id
 * @param strOpUserId: 操作用户Id
 * @returns 获取的相应对象列表
 */
export async function ExcelExportRegionFldsEx_CheckRegionFldsUp(
  strRegionId: string,
  strCmPrjId: string,
  strOpUserId: string,
): Promise<boolean> {
  const strThisFuncName = ExcelExportRegionFldsEx_CheckRegionFldsUp.name;
  const strAction = 'CheckRegionFldsUp';
  const strUrl = ExcelExportRegionFldsEx_GetWebApiUrl(
    excelExportRegionFldsEx_Controller,
    strAction,
  );
  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strRegionId,
      strCmPrjId,
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
        excelExportRegionFldsEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        excelExportRegionFldsEx_ConstructorName,
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
export function ExcelExportRegionFldsEx_GetWebApiUrl(
  strController: string,
  strAction: string,
): string {
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

export async function ExcelExportRegionFldsEx_GetObjExLstByRegionIdCacheEx(strRegionId: string) {
  let arrObjENExArray: Array<clsExcelExportRegionFldsENEx> =
    new Array<clsExcelExportRegionFldsENEx>();
  const arrObjList: Array<clsExcelExportRegionFldsEN> =
    await ExcelExportRegionFldsEx_GetObjLstByRegionIdCache4InUseEx(strRegionId);

  arrObjENExArray = arrObjList.map(ExcelExportRegionFldsEx_CopyToEx);
  arrObjENExArray = arrObjENExArray.filter((x) => x.fldId != '0');
  for (const objExcelExportRegionFldsENEx of arrObjENExArray) {
    const conFieldTab = await vFieldTab_Sim_GetNameByFldIdCache(
      objExcelExportRegionFldsENEx.fldId,
      clsPrivateSessionStorage.currSelPrjId,
    );
    if (conFieldTab == null) {
      const strMsg = `fldId:[${objExcelExportRegionFldsENEx.fldId}] 在表FieldTab中不存在！`;
      throw new Error(strMsg);
    }
  }

  return arrObjENExArray;
}

export async function ExcelExportRegionFldsEx_GetObjExBymIdCache(
  lngmId: number,
  strRegionId: string,
) {
  //初始化列表缓存

  const objExcelExportRegionFlds = await ExcelExportRegionFlds_GetObjBymIdCache(
    lngmId,
    strRegionId,
  );
  if (objExcelExportRegionFlds == null) return null;
  const objExcelExportRegionFldsEx = ExcelExportRegionFldsEx_CopyToEx(objExcelExportRegionFlds);
  await ExcelExportRegionFldsEx_FuncMap_TabId(objExcelExportRegionFldsEx);
  await ExcelExportRegionFldsEx_FuncMap_DnPathIdEx(objExcelExportRegionFldsEx);
  await ExcelExportRegionFldsEx_FuncMap_TabName(objExcelExportRegionFldsEx);
  return objExcelExportRegionFldsEx;
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objExcelExportRegionFldsS:源对象
 **/
export async function ExcelExportRegionFldsEx_FuncMap_TabId(
  objExcelExportRegionFlds: clsExcelExportRegionFldsENEx,
) {
  const strThisFuncName = ExcelExportRegionFldsEx_FuncMap_TabId.name;
  const viewRegionStore = useviewRegionStore();
  try {
    if (IsNullOrEmpty(objExcelExportRegionFlds.tabId) == true) {
      const ViewRegion_RegionId = objExcelExportRegionFlds.regionId;
      const ViewRegion_TabId = await viewRegionStore.getTabId(ViewRegion_RegionId);
      objExcelExportRegionFlds.tabId = ViewRegion_TabId;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000250)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      excelExportRegionFldsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objExcelExportRegionFldsS:源对象
 **/
export async function ExcelExportRegionFldsEx_FuncMap_OutFldName(
  objExcelExportRegionFlds: clsExcelExportRegionFldsENEx,
) {
  const strThisFuncName = ExcelExportRegionFldsEx_FuncMap_OutFldName.name;
  try {
    if (IsNullOrEmpty(objExcelExportRegionFlds.outFldName) == true) {
      const vFieldTab_Sim_FldId = objExcelExportRegionFlds.outFldId;
      if (IsNullOrEmpty(vFieldTab_Sim_FldId) || vFieldTab_Sim_FldId == '0') {
        objExcelExportRegionFlds.outFldName = '';
        return;
      }
      const vFieldTab_Sim_FldName = await vFieldTab_Sim_GetNameByFldIdCache(
        vFieldTab_Sim_FldId,
        clsPrivateSessionStorage.currSelPrjId,
      );
      objExcelExportRegionFlds.outFldName = vFieldTab_Sim_FldName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000176)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      excelExportRegionFldsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objExcelExportRegionFldsS:源对象
 **/
export async function ExcelExportRegionFldsEx_FuncMap_DnPathIdEx(
  objExcelExportRegionFlds: clsExcelExportRegionFldsENEx,
) {
  const strThisFuncName = ExcelExportRegionFldsEx_FuncMap_TabId.name;
  try {
    if (IsNullOrEmpty(objExcelExportRegionFlds.dnPathId) == true) {
      if (IsNullOrEmpty(objExcelExportRegionFlds.dnPathId) == true) {
        await ExcelExportRegionFldsEx_FuncMap_TabId(objExcelExportRegionFlds);
      }
      const strDnPathIdEx = await PrjTabFldEx_GetDnPathIdByTabIdAndOutFldIdCache(
        objExcelExportRegionFlds.tabId,
        objExcelExportRegionFlds.outFldId,
      );

      objExcelExportRegionFlds.dnPathIdEx = strDnPathIdEx;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000250)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      excelExportRegionFldsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
