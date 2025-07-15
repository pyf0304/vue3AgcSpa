import axios from 'axios';

import {
  vFieldTab_SimEx_CopyToEx,
  vFieldTab_SimEx_func,
} from '../Table_Field/clsvFieldTab_SimExWApi';
import {
  vPrjTab_SimEx_func,
  vPrjTab_SimEx_GetNameByTabIdCache,
} from '../Table_Field/clsvPrjTab_SimExWApi';
import { PrjTabFldEx_GetDnPathIdByTabIdAndOutFldIdCache } from '../Table_Field/clsPrjTabFldExWApi';
import { ViewRegionRelaEx_func4Lst } from './clsViewRegionRelaExWApi';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { ASPControlGroupEx } from '@/ts/L0Entity/GeneCSharpEx/clsASPControlGroupENEx';
import { clsCtlTypeEN } from '@/ts/L0Entity/PrjInterface/clsCtlTypeEN';
import { clsDetailRegionFldsEN } from '@/ts/L0Entity/RegionManage/clsDetailRegionFldsEN';
import { clsDetailRegionFldsENEx } from '@/ts/L0Entity/RegionManage/clsDetailRegionFldsENEx';
import { clsDetailRegionFldsENEx4GC } from '@/ts/L0Entity/RegionManage/clsDetailRegionFldsENEx4GC';
import { clsViewRegionRelaEN } from '@/ts/L0Entity/RegionManage/clsViewRegionRelaEN';
import { clsInOutTypeEN } from '@/ts/L0Entity/SysPara/clsInOutTypeEN';
import { clsPrjTabEN } from '@/ts/L0Entity/Table_Field/clsPrjTabEN';
import { clsvFieldTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvFieldTab_SimEN';
import { clsvPrjTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvPrjTab_SimEN';
import {
  CtlType_func,
  CtlType_GetObjByCtlTypeIdCache,
} from '@/ts/L3ForWApi/PrjInterface/clsCtlTypeWApi';
import { Projects_GetObjByPrjIdCache } from '@/ts/L3ForWApi/PrjManage/clsProjectsWApi';
import {
  DetailRegionFlds_GetObjBymIdCache,
  DetailRegionFlds_GetObjLstCache,
  DetailRegionFlds_GetRecCountByCondCache,
  DetailRegionFlds_SortFunByKey,
} from '@/ts/L3ForWApi/RegionManage/clsDetailRegionFldsWApi';
import { InOutType_func } from '@/ts/L3ForWApi/SysPara/clsInOutTypeWApi';
import { ObjectAssign, ObjectAssignV2 } from '@/ts/PubFun/clsCommFunc4Web';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
// import { Dictionary } from '@/ts/PubFun/tzDictionary';

import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { GetControlGroup_Asp_Detail } from '@/ts/L2BLL/GeneCSharp/clsASPControlGroupBLEx2';
import { usevFieldTab_Sim2Store, vFieldTab_SimEx_CopyToEN } from '@/store/modules/vFieldTab_Sim2';
import { useviewRegionStore } from '@/store/modules/viewRegion';
import { vFieldTab_Sim_GetNameByFldIdCache } from '@/ts/L3ForWApi/Table_Field/clsvFieldTab_SimWApi';
import { ConditionCollection } from '@/ts/PubFun/ConditionCollection';

export const detailRegionFldsEx_Controller = 'DetailRegionFldsExApi';
export const detailRegionFldsEx_ConstructorName = 'detailRegionFldsEx';
/// <summary>
/// 把同一个类的对象,复制到该类的扩展对象
/// (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_CopyToEx)
/// </summary>
/// <param name = "objDetailRegionFldsENS">源对象</param>
/// <param name = "objDetailRegionFldsENT">目标对象</param>
export function DetailRegionFldsEx_CopyToEx(
  objDetailRegionFldsENS: clsDetailRegionFldsEN,
): clsDetailRegionFldsENEx {
  const objDetailRegionFldsENT = new clsDetailRegionFldsENEx();
  try {
    ObjectAssign(objDetailRegionFldsENT, objDetailRegionFldsENS);
    return objDetailRegionFldsENT;
  } catch (e: any) {
    const strMsg = Format('(errid:WiTsCs0011)Copy表对象数据出错,${e}.');
    console.error(strMsg);
    alert(strMsg);
    return objDetailRegionFldsENT;
  }
}

export function DetailRegionFldsEx_CopyToEx4GC(
  objDetailRegionFldsENS: clsDetailRegionFldsEN,
): clsDetailRegionFldsENEx4GC {
  const objDetailRegionFldsENT = new clsDetailRegionFldsENEx4GC();
  try {
    ObjectAssignV2(objDetailRegionFldsENT, objDetailRegionFldsENS);
    return objDetailRegionFldsENT;
  } catch (e: any) {
    const strMsg = Format('(errid:WiTsCs0011)Copy表对象数据出错,${e}.');
    console.error(strMsg);
    alert(strMsg);
    return objDetailRegionFldsENT;
  }
}
/// <summary>
/// 根据关键字获取相关对象, 从缓存的对象列表中获取.没有就返回null.
/// (AutoGCLib.AutoGC6Cs_Business:Gen_4BL_GetObjByKeyCache)
/// </summary>
/// <param name = "strRegionId">所给的关键字</param>
/// <param name = "strPrjId">工程Id</param>
/// <returns>根据关键字获取的对象</returns>
export async function DetailRegionFldsEx_GetObjLstByRegionIdCache4InUseEx(strRegionId: string) {
  //初始化列表缓存
  const arrObjLstCache: Array<clsDetailRegionFldsEN> = await DetailRegionFlds_GetObjLstCache(
    strRegionId,
  );

  const arrDetailRegionFldsObjLst_Sel1: Array<clsDetailRegionFldsEN> = arrObjLstCache
    .filter((x) => x.regionId == strRegionId && x.inUse == true)
    .sort((x) => x.seqNum);
  return arrDetailRegionFldsObjLst_Sel1;
}

/// <summary>
/// 根据区域Id获取相关
/// </summary>
/// <param name="strRegionId"></param>
/// <param name="strPrjId"></param>
/// <returns></returns>
export async function DetailRegionFldsEx_GetObjExLstByRegionIdCacheEx(strRegionId: string) {
  let arrObjENExArray: Array<clsDetailRegionFldsENEx> = new Array<clsDetailRegionFldsENEx>();
  const arrObjList: Array<clsDetailRegionFldsEN> =
    await DetailRegionFldsEx_GetObjLstByRegionIdCache4InUseEx(strRegionId);

  arrObjENExArray = arrObjList.map(DetailRegionFldsEx_CopyToEx);
  return arrObjENExArray;
}

export async function DetailRegionFldsEx_GetObjEx4GCLstByRegionIdCacheEx(
  strRegionId: string,
): Promise<Array<clsDetailRegionFldsENEx4GC>> {
  const vFieldTab_Sim2Store = usevFieldTab_Sim2Store();
  let arrObjENExArray: Array<clsDetailRegionFldsENEx4GC> = new Array<clsDetailRegionFldsENEx4GC>();
  const arrObjList: Array<clsDetailRegionFldsEN> =
    await DetailRegionFldsEx_GetObjLstByRegionIdCache4InUseEx(strRegionId);

  arrObjENExArray = arrObjList.map(DetailRegionFldsEx_CopyToEx4GC);

  for (const objDetailRegionFldsEx of arrObjENExArray) {
    const conFieldTab = await vFieldTab_Sim2Store.getObj(objDetailRegionFldsEx.fldId);

    if (conFieldTab == null) {
      const strMsg = `fldId:[${objDetailRegionFldsEx.fldId}] 在表FieldTab中不存在！`;
      throw new Error(strMsg);
    }
    const conFieldTabEN = vFieldTab_SimEx_CopyToEN(conFieldTab);
    objDetailRegionFldsEx.objFieldTabENEx = vFieldTab_SimEx_CopyToEx(conFieldTabEN);

    const conCtlTypeAbbr = await CtlType_GetObjByCtlTypeIdCache(objDetailRegionFldsEx.ctlTypeId);
    if (conCtlTypeAbbr == null) {
      const strMsg = `ctlTypeId:[${objDetailRegionFldsEx.ctlTypeId}] 在表ctlTypeAbbr中不存在！`;
      throw new Error(strMsg);
    }
    objDetailRegionFldsEx.objCtlTypeAbbr = conCtlTypeAbbr;
  }

  return arrObjENExArray;
}

export async function DetailRegionFldsEx_GetFldCountInUseByRegionIdCacheEx(
  strRegionId: string,
): Promise<number> {
  const arrObjList: Array<clsDetailRegionFldsEN> =
    await DetailRegionFldsEx_GetObjLstByRegionIdCache4InUseEx(strRegionId);
  const intFldCount = arrObjList.filter((x) => x.inUse == true).length;
  return intFldCount;
}

export async function DetailRegionFldsEx_GetControlGroup(
  strRegionId: string,
  strPrjId: string,
  strCmPrjId: string,
  objDR: object,
) {
  const viewRegionStore = useviewRegionStore();
  const objProject = await Projects_GetObjByPrjIdCache(strPrjId);
  if (objProject == null) {
    const strMsg = Format('项目Id:[{0}]，没有相应的项目，请检查！', strPrjId);
    console.error(strMsg);
    alert(strMsg);
    return;
  }

  const objViewRegion = await viewRegionStore.getObj(strRegionId);
  if (objViewRegion == null) {
    const strMsg = Format(
      '在项目:[{0}]中，区域Id:[{1}]没有相应区域，请检查！',
      objProject.prjName,
      strRegionId,
    );
    console.error(strMsg);
    alert(strMsg);
    return;
  }
  const strTabName = await vPrjTab_SimEx_GetNameByTabIdCache(
    objViewRegion.tabId,
    clsPrivateSessionStorage.currSelPrjId,
  );
  //Func<clsDetailRegionFldsENEx, ASPControlGroupEx> GetControlGroup_Asp4MultiModel = obj => clsASPControlGroupBLEx.GetControlGroup_Asp(obj, strItemName4MultiModel);
  const arrDetailRegionFlds: Array<clsDetailRegionFldsENEx4GC> =
    await DetailRegionFldsEx_GetObjEx4GCLstByRegionIdCacheEx(strRegionId);

  //console.log("arrDetailRegionFlds:", arrDetailRegionFlds);
  // const strItemName4MultiModel = '';
  const conarrASPControlGroupEx = await arrDetailRegionFlds
    .filter((x) => x.inUse == true)
    .sort((x, y) => x.seqNum - y.seqNum)
    .map((x) => GetControlGroup_Asp_Detail(x, strTabName, objDR));
  const arrASPControlGroupObjLst: Array<ASPControlGroupEx> = <Array<ASPControlGroupEx>>(
    conarrASPControlGroupEx
  );

  //arrASPControlGroupObjLst = arrASPControlGroupObjLst.concat(arrButtonGroupLst);

  return arrASPControlGroupObjLst;
}

/// <summary>
/// 导入相关字段
/// (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
/// </summary>
/// <param name = "strRegionId">区域Id</param>
/// <param name = "strPrjId">工程Id</param>
/// <param name = "strUserId">用户Id</param>
/// <returns>获取的相应对象列表</returns>
export async function DetailRegionFldsEx_ImportRelaFlds(
  strRegionId: string,
  strPrjId: string,
  strUserId: string,
): Promise<boolean> {
  const strThisFuncName = DetailRegionFldsEx_ImportRelaFlds.name;
  const strAction = 'ImportRelaFlds';
  const strUrl = GetWebApiUrl(detailRegionFldsEx_Controller, strAction);
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
        detailRegionFldsEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        detailRegionFldsEx_ConstructorName,
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
/// 调整序号
/// (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
/// </summary>
/// <param name = "strDirect">调整方向</param>
/// <param name = "lngMid">lngMid</param>
/// <returns>获取的相应对象列表</returns>
export async function DetailRegionFldsEx_AdjustSequenceNumber(
  strDirect: string,
  lngMid: number,
): Promise<boolean> {
  const strThisFuncName = DetailRegionFldsEx_AdjustSequenceNumber.name;
  const strAction = 'AdjustSequenceNumber';
  const strUrl = GetWebApiUrl(detailRegionFldsEx_Controller, strAction);
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
        detailRegionFldsEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        detailRegionFldsEx_ConstructorName,
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
export async function DetailRegionFldsEx_ReOrder(strRegionId: string): Promise<void> {
  const strThisFuncName = DetailRegionFldsEx_ReOrder.name;
  const strAction = 'ReOrder';
  const strUrl = GetWebApiUrl(detailRegionFldsEx_Controller, strAction);
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
        detailRegionFldsEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        detailRegionFldsEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

export async function DetailRegionFldsEx_GetObjLstByRegionIdCacheEx(strRegionId: string) {
  //初始化列表缓存
  const arrObjLstCache: Array<clsDetailRegionFldsEN> = await DetailRegionFlds_GetObjLstCache(
    strRegionId,
  );

  const arrDetailRegionFldsObjLst_Sel1: Array<clsDetailRegionFldsEN> = arrObjLstCache
    .filter((x) => x.regionId == strRegionId)
    .sort((x) => x.seqNum);
  return arrDetailRegionFldsObjLst_Sel1;
}

export function DetailRegionFldsEx_SortFunByInUseAndSeq(
  a: clsDetailRegionFldsENEx,
  b: clsDetailRegionFldsENEx,
): number {
  if (a.inUse == b.inUse) return a.seqNum - b.seqNum;
  else {
    if (a.inUse == true) return -1;
    else return 1;
  }
}
/// <summary>
/// 排序函数。根据关键字字段的值进行比较
/// 作者:pyf
/// 日期:20210219044849
/// </summary>
/// <param name = "a">比较的第1个对象</param>
/// <param name = "b">比较的第1个对象</param>
/// <returns>返回两个对象比较的结果</returns>
export function DetailRegionFldsEx_SortFunBySeqNum(
  a: clsDetailRegionFldsEN,
  b: clsDetailRegionFldsEN,
): number {
  return a.seqNum - b.seqNum;
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
export function DetailRegionFldsEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  // const strThisFuncName = 'SortFunByKey';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsDetailRegionFldsENEx.con_TabName:
        return (a: clsDetailRegionFldsENEx, b: clsDetailRegionFldsENEx) => {
          return a.tabName.localeCompare(b.tabName);
        };
      case clsDetailRegionFldsENEx.con_FldName:
        return (a: clsDetailRegionFldsENEx, b: clsDetailRegionFldsENEx) => {
          return a.fldName.localeCompare(b.fldName);
        };
      case clsDetailRegionFldsENEx.con_CtlTypeName:
        return (a: clsDetailRegionFldsENEx, b: clsDetailRegionFldsENEx) => {
          return a.ctlTypeName.localeCompare(b.ctlTypeName);
        };
      case clsDetailRegionFldsENEx.con_InOutTypeName:
        return (a: clsDetailRegionFldsENEx, b: clsDetailRegionFldsENEx) => {
          return a.inOutTypeName.localeCompare(b.inOutTypeName);
        };
      case clsDetailRegionFldsENEx.con_CtlCnName:
        return (a: clsDetailRegionFldsENEx, b: clsDetailRegionFldsENEx) => {
          return a.ctlCnName.localeCompare(b.ctlCnName);
        };
      case clsDetailRegionFldsENEx.con_CtlTypeAbbr:
        return (a: clsDetailRegionFldsENEx, b: clsDetailRegionFldsENEx) => {
          return a.ctlTypeAbbr.localeCompare(b.ctlTypeAbbr);
        };
      default:
        return DetailRegionFlds_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsDetailRegionFldsENEx.con_TabName:
        return (a: clsDetailRegionFldsENEx, b: clsDetailRegionFldsENEx) => {
          return b.tabName.localeCompare(a.tabName);
        };
      case clsDetailRegionFldsENEx.con_FldName:
        return (a: clsDetailRegionFldsENEx, b: clsDetailRegionFldsENEx) => {
          return b.fldName.localeCompare(a.fldName);
        };
      case clsDetailRegionFldsENEx.con_CtlTypeName:
        return (a: clsDetailRegionFldsENEx, b: clsDetailRegionFldsENEx) => {
          return b.ctlTypeName.localeCompare(a.ctlTypeName);
        };
      case clsDetailRegionFldsENEx.con_InOutTypeName:
        return (a: clsDetailRegionFldsENEx, b: clsDetailRegionFldsENEx) => {
          return b.inOutTypeName.localeCompare(a.inOutTypeName);
        };
      case clsDetailRegionFldsENEx.con_CtlCnName:
        return (a: clsDetailRegionFldsENEx, b: clsDetailRegionFldsENEx) => {
          return b.ctlCnName.localeCompare(a.ctlCnName);
        };
      case clsDetailRegionFldsENEx.con_CtlTypeAbbr:
        return (a: clsDetailRegionFldsENEx, b: clsDetailRegionFldsENEx) => {
          return b.ctlTypeAbbr.localeCompare(a.ctlTypeAbbr);
        };
      default:
        return DetailRegionFlds_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

export async function DetailRegionFldsEx_GetRecCountByCondInUseCache(
  strRegionId: string,
): Promise<number> {
  const objDetailRegionFlds = new ConditionCollection();
  objDetailRegionFlds.SetCondFldValue(clsDetailRegionFldsEN.con_InUse, true, '=');
  objDetailRegionFlds.SetCondFldValue(clsDetailRegionFldsEN.con_RegionId, strRegionId, '=');
  const intRecNum = await DetailRegionFlds_GetRecCountByCondCache(objDetailRegionFlds, strRegionId);
  return intRecNum;
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
export async function DetailRegionFldsEx_ImportExtendFld(
  lngMid: number,
  strPrjId: string,
  strUserId: string,
): Promise<boolean> {
  const strThisFuncName = DetailRegionFldsEx_ImportExtendFld.name;
  const strAction = 'ImportExtendFld';
  const strUrl = GetWebApiUrl(detailRegionFldsEx_Controller, strAction);
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
        detailRegionFldsEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        detailRegionFldsEx_ConstructorName,
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
export function DetailRegionFldsEx_FuncMapByFldName(
  strFldName: string,
  objDetailRegionFldsEx: clsDetailRegionFldsENEx,
) {
  const strThisFuncName = DetailRegionFldsEx_FuncMapByFldName.name;
  let strMsg = '';
  //如果是本表中字段，不需要映射
  const arrFldName = clsDetailRegionFldsEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsDetailRegionFldsENEx.con_TabName:
      return DetailRegionFldsEx_FuncMap_TabName(objDetailRegionFldsEx);

    case clsDetailRegionFldsENEx.con_FldNameV2:
      return DetailRegionFldsEx_FuncMap_FldNameV2(objDetailRegionFldsEx);

    case clsDetailRegionFldsENEx.con_FldName:
      return DetailRegionFldsEx_FuncMap_FldName(objDetailRegionFldsEx);
    case clsDetailRegionFldsENEx.con_CtlTypeName:
      return DetailRegionFldsEx_FuncMap_CtlTypeName(objDetailRegionFldsEx);
    case clsDetailRegionFldsENEx.con_InOutTypeName:
      return DetailRegionFldsEx_FuncMap_InOutTypeName(objDetailRegionFldsEx);
    case clsDetailRegionFldsENEx.con_CtlCnName:
      return DetailRegionFldsEx_FuncMap_CtlCnName(objDetailRegionFldsEx);
    case clsDetailRegionFldsENEx.con_CtlTypeAbbr:
      return DetailRegionFldsEx_FuncMap_CtlTypeAbbr(objDetailRegionFldsEx);
    case clsDetailRegionFldsENEx.con_TabId:
      return DetailRegionFldsEx_FuncMap_TabId(objDetailRegionFldsEx);
    case clsDetailRegionFldsENEx.con_OutFldName:
      return DetailRegionFldsEx_FuncMap_OutFldName(objDetailRegionFldsEx);
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
 * @param objDetailRegionFldsS:源对象
 **/
export async function DetailRegionFldsEx_FuncMap_TabName(
  objDetailRegionFlds: clsDetailRegionFldsENEx,
) {
  const strThisFuncName = DetailRegionFldsEx_FuncMap_TabName.name;
  const viewRegionStore = useviewRegionStore();
  try {
    if (IsNullOrEmpty(objDetailRegionFlds.tabName) == true) {
      if (IsNullOrEmpty(objDetailRegionFlds.fldName) == true)
        DetailRegionFldsEx_FuncMapByFldName(clsvFieldTab_SimEN.con_FldName, objDetailRegionFlds);

      if (objDetailRegionFlds.isUseFunc == false) {
        if (IsNullOrEmpty(objDetailRegionFlds.fldId) == false) {
          const ViewRegion_RegionId = objDetailRegionFlds.regionId;
          const ViewRegion_TabId = await viewRegionStore.getTabId(ViewRegion_RegionId);
          const vPrjTab_Sim_TabId = ViewRegion_TabId;
          const vPrjTab_Sim_TabName = await vPrjTab_SimEx_func(
            clsvPrjTab_SimEN.con_TabId,
            clsvPrjTab_SimEN.con_TabName,
            vPrjTab_Sim_TabId,
          );
          objDetailRegionFlds.tabName = vPrjTab_Sim_TabName;
        } else {
          objDetailRegionFlds.tabName = '';
        }
      } else {
        let ViewRegion_RegionId = objDetailRegionFlds.regionId;
        const ViewRegion_TabId = await viewRegionStore.getTabId(ViewRegion_RegionId);
        const PrjTabTabId = ViewRegion_TabId;
        const PrjTabTabName = await vPrjTab_SimEx_func(
          clsPrjTabEN.con_TabId,
          clsPrjTabEN.con_TabName,
          PrjTabTabId,
        );
        objDetailRegionFlds.tabName = PrjTabTabName;

        ViewRegion_RegionId = objDetailRegionFlds.regionId;

        const strOutFldName = await vFieldTab_Sim_GetNameByFldIdCache(
          objDetailRegionFlds.outFldId,
          clsPrivateSessionStorage.currSelPrjId,
        );

        objDetailRegionFlds.tabName = Format(
          "<span class='text-secondary  font-weight-bold'>映射</span><span class='text-primary'>({0}=>{1})</span>",
          objDetailRegionFlds.fldName,
          strOutFldName,
        );
      }
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000094)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      detailRegionFldsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objDetailRegionFldsS:源对象
 **/
export async function DetailRegionFldsEx_FuncMap_FldName(
  objDetailRegionFlds: clsDetailRegionFldsENEx,
) {
  const strThisFuncName = DetailRegionFldsEx_FuncMap_FldName.name;
  try {
    if (IsNullOrEmpty(objDetailRegionFlds.fldName) == true) {
      const vFieldTab_Sim_FldId = objDetailRegionFlds.fldId;
      const vFieldTab_Sim_FldName = await vFieldTab_SimEx_func(
        clsvFieldTab_SimEN.con_FldId,
        clsvFieldTab_SimEN.con_FldName,
        vFieldTab_Sim_FldId,
        clsPrivateSessionStorage.currSelPrjId,
      );
      objDetailRegionFlds.fldName = vFieldTab_Sim_FldName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000087)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      detailRegionFldsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objDetailRegionFldsS:源对象
 **/
export async function DetailRegionFldsEx_FuncMap_FldNameV2(
  objDetailRegionFlds: clsDetailRegionFldsENEx,
) {
  const strThisFuncName = DetailRegionFldsEx_FuncMap_FldNameV2.name;
  try {
    if (IsNullOrEmpty(objDetailRegionFlds.fldNameV2) == true) {
      if (IsNullOrEmpty(objDetailRegionFlds.fldName) == true)
        await DetailRegionFldsEx_FuncMapByFldName(
          clsvFieldTab_SimEN.con_FldName,
          objDetailRegionFlds,
        );
      if (IsNullOrEmpty(objDetailRegionFlds.outFldName) == true)
        await DetailRegionFldsEx_FuncMapByFldName(
          clsDetailRegionFldsENEx.con_OutFldName,
          objDetailRegionFlds,
        );
      if (IsNullOrEmpty(objDetailRegionFlds.outFldId) == false)
        objDetailRegionFlds.isUseFunc = true;

      if (objDetailRegionFlds.isUseFunc == false) {
        if (IsNullOrEmpty(objDetailRegionFlds.fldId) == false) {
          objDetailRegionFlds.fldNameV2 = Format(
            '{0}({1})',
            objDetailRegionFlds.fldName,
            objDetailRegionFlds.labelCaption,
          );
        } else {
          objDetailRegionFlds.fldNameV2 = Format('【{0}】', objDetailRegionFlds.labelCaption);
        }
      } else {
        let strOutFldName = objDetailRegionFlds.outFldName;
        if (IsNullOrEmpty(strOutFldName)) strOutFldName = objDetailRegionFlds.dataPropertyName;
        objDetailRegionFlds.fldNameV2 = Format(
          '输入:{0}<br/>输出:{1}({2})',
          objDetailRegionFlds.fldName,
          strOutFldName,
          objDetailRegionFlds.labelCaption,
        );
      }
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000087)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      detailRegionFldsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objDetailRegionFldsS:源对象
 **/
export async function DetailRegionFldsEx_FuncMap_CtlTypeName(
  objDetailRegionFlds: clsDetailRegionFldsENEx,
) {
  const strThisFuncName = DetailRegionFldsEx_FuncMap_CtlTypeName.name;
  try {
    if (IsNullOrEmpty(objDetailRegionFlds.ctlTypeName) == true) {
      const CtlType_CtlTypeId = objDetailRegionFlds.ctlTypeId;
      const CtlType_CtlTypeName = await CtlType_func(
        clsCtlTypeEN.con_CtlTypeId,
        clsCtlTypeEN.con_CtlTypeName,
        CtlType_CtlTypeId,
      );
      objDetailRegionFlds.ctlTypeName = CtlType_CtlTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000123)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      detailRegionFldsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objDetailRegionFldsS:源对象
 **/
export async function DetailRegionFldsEx_FuncMap_InOutTypeName(
  objDetailRegionFlds: clsDetailRegionFldsENEx,
) {
  const strThisFuncName = DetailRegionFldsEx_FuncMap_InOutTypeName.name;
  try {
    if (IsNullOrEmpty(objDetailRegionFlds.inOutTypeName) == true) {
      const InOutType_InOutTypeId = objDetailRegionFlds.inOutTypeId;
      const InOutType_InOutTypeName = await InOutType_func(
        clsInOutTypeEN.con_InOutTypeId,
        clsInOutTypeEN.con_InOutTypeName,
        InOutType_InOutTypeId,
      );
      objDetailRegionFlds.inOutTypeName = InOutType_InOutTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000122)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      detailRegionFldsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objDetailRegionFldsS:源对象
 **/
export async function DetailRegionFldsEx_FuncMap_CtlCnName(
  objDetailRegionFlds: clsDetailRegionFldsENEx,
) {
  const strThisFuncName = DetailRegionFldsEx_FuncMap_CtlCnName.name;
  try {
    if (IsNullOrEmpty(objDetailRegionFlds.ctlCnName) == true) {
      const CtlType_CtlTypeId = objDetailRegionFlds.ctlTypeId;
      const CtlType_CtlCnName = await CtlType_func(
        clsCtlTypeEN.con_CtlTypeId,
        clsCtlTypeEN.con_CtlCnName,
        CtlType_CtlTypeId,
      );
      objDetailRegionFlds.ctlCnName = CtlType_CtlCnName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000125)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      detailRegionFldsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objDetailRegionFldsS:源对象
 **/
export async function DetailRegionFldsEx_FuncMap_CtlTypeAbbr(
  objDetailRegionFlds: clsDetailRegionFldsENEx,
) {
  const strThisFuncName = DetailRegionFldsEx_FuncMap_CtlTypeAbbr.name;
  try {
    if (IsNullOrEmpty(objDetailRegionFlds.ctlTypeAbbr) == true) {
      const CtlType_CtlTypeId = objDetailRegionFlds.ctlTypeId;
      const CtlType_CtlTypeAbbr = await CtlType_func(
        clsCtlTypeEN.con_CtlTypeId,
        clsCtlTypeEN.con_CtlTypeAbbr,
        CtlType_CtlTypeId,
      );
      objDetailRegionFlds.ctlTypeAbbr = CtlType_CtlTypeAbbr;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000126)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      detailRegionFldsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objDetailRegionFldsS:源对象
 **/
export async function DetailRegionFldsEx_FuncMap_ViewIds(
  objDetailRegionFlds: clsDetailRegionFldsENEx,
) {
  const strThisFuncName = DetailRegionFldsEx_FuncMap_ViewIds.name;
  try {
    if (IsNullOrEmpty(objDetailRegionFlds.viewIds) == true) {
      const ViewRegionRela_RegionId = objDetailRegionFlds.regionId;
      const ViewRegionRela_ViewId = await ViewRegionRelaEx_func4Lst(
        clsViewRegionRelaEN.con_RegionId,
        clsViewRegionRelaEN.con_ViewId,
        ViewRegionRela_RegionId,
        clsPrivateSessionStorage.cmPrjId,
      );
      let str1 = '';
      if (ViewRegionRela_ViewId != '') {
        str1 = ViewRegionRela_ViewId.join(',');
      }
      objDetailRegionFlds.viewIds = str1;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000177)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      detailRegionFldsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 检查区域控件，并回溯修改界面的错误信息
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strRegionId: 区域Id
 * @param strCmPrjId: CM工程Id
 * @param strOpUserId: 操作用户Id
 * @returns 获取的相应对象列表
 */
export async function DetailRegionFldsEx_CheckRegionFldsUp(
  strRegionId: string,
  strCmPrjId: string,
  strOpUserId: string,
): Promise<boolean> {
  const strThisFuncName = DetailRegionFldsEx_CheckRegionFldsUp.name;
  const strAction = 'CheckRegionFldsUp';
  const strUrl = DetailRegionFldsEx_GetWebApiUrl(detailRegionFldsEx_Controller, strAction);
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
        detailRegionFldsEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        detailRegionFldsEx_ConstructorName,
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
export function DetailRegionFldsEx_GetWebApiUrl(strController: string, strAction: string): string {
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
 * @param objDetailRegionFldsS:源对象
 **/
export async function DetailRegionFldsEx_FuncMap_DnPathIdEx(
  objDetailRegionFlds: clsDetailRegionFldsENEx,
) {
  const strThisFuncName = DetailRegionFldsEx_FuncMap_DnPathIdEx.name;
  try {
    if (IsNullOrEmpty(objDetailRegionFlds.dnPathId) == true) {
      if (IsNullOrEmpty(objDetailRegionFlds.dnPathId) == true) {
        await DetailRegionFldsEx_FuncMap_TabId(objDetailRegionFlds);
      }
      const strDnPathIdEx = await PrjTabFldEx_GetDnPathIdByTabIdAndOutFldIdCache(
        objDetailRegionFlds.tabId,
        objDetailRegionFlds.outFldId,
      );

      objDetailRegionFlds.dnPathIdEx = strDnPathIdEx;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000250)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      detailRegionFldsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

export async function DetailRegionFldsEx_GetObjExBymIdCache(lngmId: number, strRegionId: string) {
  //初始化列表缓存

  const objDetailRegionFlds = await DetailRegionFlds_GetObjBymIdCache(lngmId, strRegionId);
  if (objDetailRegionFlds == null) return null;
  const objDetailRegionFldsEx = DetailRegionFldsEx_CopyToEx(objDetailRegionFlds);
  await DetailRegionFldsEx_FuncMap_TabId(objDetailRegionFldsEx);
  await DetailRegionFldsEx_FuncMap_DnPathIdEx(objDetailRegionFldsEx);
  await DetailRegionFldsEx_FuncMap_TabName(objDetailRegionFldsEx);
  return objDetailRegionFldsEx;
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objDetailRegionFldsS:源对象
 **/
export async function DetailRegionFldsEx_FuncMap_TabId(
  objDetailRegionFlds: clsDetailRegionFldsENEx,
) {
  const strThisFuncName = DetailRegionFldsEx_FuncMap_TabId.name;
  const viewRegionStore = useviewRegionStore();
  try {
    if (IsNullOrEmpty(objDetailRegionFlds.tabId) == true) {
      const ViewRegion_RegionId = objDetailRegionFlds.regionId;
      const ViewRegion_TabId = await viewRegionStore.getTabId(ViewRegion_RegionId);
      objDetailRegionFlds.tabId = ViewRegion_TabId;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000250)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      detailRegionFldsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objDetailRegionFldsS:源对象
 **/
export async function DetailRegionFldsEx_FuncMap_OutFldName(
  objDetailRegionFlds: clsDetailRegionFldsENEx,
) {
  const strThisFuncName = DetailRegionFldsEx_FuncMap_OutFldName.name;
  try {
    if (IsNullOrEmpty(objDetailRegionFlds.outFldName) == true) {
      const vFieldTab_Sim_FldId = objDetailRegionFlds.outFldId;
      if (IsNullOrEmpty(vFieldTab_Sim_FldId)) {
        objDetailRegionFlds.outFldName = '';
        return;
      }
      const vFieldTab_Sim_FldName = await vFieldTab_Sim_GetNameByFldIdCache(
        vFieldTab_Sim_FldId,
        clsPrivateSessionStorage.currSelPrjId,
      );
      objDetailRegionFlds.outFldName = vFieldTab_Sim_FldName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000176)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      detailRegionFldsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
