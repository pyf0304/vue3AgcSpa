import axios from 'axios';
import { vFieldTab_SimEx_CopyToEx } from '../Table_Field/clsvFieldTab_SimExWApi';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { clsDGRegionFldsEN } from '@/ts/L0Entity/RegionManage/clsDGRegionFldsEN';
import { clsDGRegionFldsENEx } from '@/ts/L0Entity/RegionManage/clsDGRegionFldsENEx';
import { clsDGRegionFldsENEx4GC } from '@/ts/L0Entity/RegionManage/clsDGRegionFldsENEx4GC';
import {
  CtlType_func,
  CtlType_GetObjByCtlTypeIdCache,
} from '@/ts/L3ForWApi/PrjInterface/clsCtlTypeWApi';
import {
  DGRegionFlds_GetObjBymIdCache,
  DGRegionFlds_GetObjLstCache,
  DGRegionFlds_GetRecCountByCondCache,
  DGRegionFlds_SortFunByKey,
} from '@/ts/L3ForWApi/RegionManage/clsDGRegionFldsWApi';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
// import { Dictionary } from '@/ts/PubFun/tzDictionary';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import {
  DGRegionFldsEx_CopyToEx,
  DGRegionFldsEx_FuncMap_DnPathIdEx,
  DGRegionFldsEx_FuncMap_TabId,
  DGRegionFldsEx_FuncMap_TabName,
} from '@/ts/L3ForWApiEx/RegionManage/clsDGRegionFldsExWApi2';

import { vPrjTab_Sim_func } from '@/ts/L3ForWApi/Table_Field/clsvPrjTab_SimWApi';
import { clsvPrjTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvPrjTab_SimEN';
import { clsCtlTypeEN } from '@/ts/L0Entity/PrjInterface/clsCtlTypeEN';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { useviewRegionStore } from '@/store/modules/viewRegion';
import {
  vFieldTab_Sim_GetNameByFldIdCache,
  vFieldTab_Sim_GetObjByFldIdCache,
} from '@/ts/L3ForWApi/Table_Field/clsvFieldTab_SimWApi';
import { ConditionCollection } from '@/ts/PubFun/ConditionCollection';

export const dGRegionFldsEx_Controller = 'DGRegionFldsExApi';
export const dGRegionFldsEx_ConstructorName = 'dGRegionFldsEx';
/// <summary>
/// 根据关键字获取相关对象, 从缓存的对象列表中获取.没有就返回null.
/// (AutoGCLib.AutoGC6Cs_Business:Gen_4BL_GetObjByKeyCache)
/// </summary>
/// <param name = "strRegionId">所给的关键字</param>
/// <param name = "strPrjId">工程Id</param>
/// <returns>根据关键字获取的对象</returns>
export async function DGRegionFldsEx_GetObjLstByRegionIdCache4InUseEx(strRegionId: string) {
  //初始化列表缓存

  const arrObjLstCache: Array<clsDGRegionFldsEN> = await DGRegionFlds_GetObjLstCache(strRegionId);

  const arrDGRegionFldsObjLst_Sel1: Array<clsDGRegionFldsEN> = arrObjLstCache
    .filter((x) => x.regionId == strRegionId && x.inUse == true)
    .sort((x) => x.seqNum);
  return arrDGRegionFldsObjLst_Sel1;
}

export async function DGRegionFldsEx_GetObjExBymIdCache(lngmId: number, strRegionId: string) {
  //初始化列表缓存

  const objDGRegionFlds = await DGRegionFlds_GetObjBymIdCache(lngmId, strRegionId);
  if (objDGRegionFlds == null) return null;
  const objDGRegionFldsEx = DGRegionFldsEx_CopyToEx(objDGRegionFlds);
  await DGRegionFldsEx_FuncMap_TabId(objDGRegionFldsEx);
  await DGRegionFldsEx_FuncMap_DnPathIdEx(objDGRegionFldsEx);
  await DGRegionFldsEx_FuncMap_TabName(objDGRegionFldsEx);
  return objDGRegionFldsEx;
}

export async function DGRegionFldsEx_GetObjLstByRegionIdCacheEx(strRegionId: string) {
  //初始化列表缓存
  const arrObjLstCache: Array<clsDGRegionFldsEN> = await DGRegionFlds_GetObjLstCache(strRegionId);

  const arrDGRegionFldsObjLst_Sel1: Array<clsDGRegionFldsEN> = arrObjLstCache
    .filter((x) => x.regionId == strRegionId)
    .sort((x) => x.seqNum);
  return arrDGRegionFldsObjLst_Sel1;
}

export async function DGRegionFldsEx_GetObjEx4GCLstByRegionIdCacheEx(strRegionId: string) {
  let arrObjENExArray: Array<clsDGRegionFldsENEx4GC> = new Array<clsDGRegionFldsENEx4GC>();
  const arrObjList: Array<clsDGRegionFldsEN> =
    await DGRegionFldsEx_GetObjLstByRegionIdCache4InUseEx(strRegionId);

  arrObjENExArray = arrObjList.map(DGRegionFldsEx_CopyToEx4GC);
  for (const objDGRegionFldsENEx of arrObjENExArray) {
    const conFieldTab0 = await vFieldTab_Sim_GetObjByFldIdCache(
      objDGRegionFldsENEx.fldId,
      clsPrivateSessionStorage.currSelPrjId,
    );
    if (conFieldTab0 == null) {
      const strMsg = `fldId:[${objDGRegionFldsENEx.fldId}] 在表FieldTab中不存在！`;
      throw new Error(strMsg);
    }
    const conFieldTab = vFieldTab_SimEx_CopyToEx(conFieldTab0);
    objDGRegionFldsENEx.objFieldTabENEx = vFieldTab_SimEx_CopyToEx(conFieldTab);

    const conCtlTypeAbbr = await CtlType_GetObjByCtlTypeIdCache(objDGRegionFldsENEx.ctlTypeId);
    if (conCtlTypeAbbr == null) {
      const strMsg = `ctlTypeId:[${objDGRegionFldsENEx.ctlTypeId}] 在表ctlTypeAbbr中不存在！`;
      throw new Error(strMsg);
    }
    objDGRegionFldsENEx.objCtlTypeAbbr = conCtlTypeAbbr;
  }

  return arrObjENExArray;
}
export async function DGRegionFldsEx_GetObjExLstByRegionIdCacheEx(strRegionId: string) {
  let arrObjENExArray: Array<clsDGRegionFldsENEx> = new Array<clsDGRegionFldsENEx>();
  const arrObjList: Array<clsDGRegionFldsEN> =
    await DGRegionFldsEx_GetObjLstByRegionIdCache4InUseEx(strRegionId);

  arrObjENExArray = arrObjList.map(DGRegionFldsEx_CopyToEx);
  for (const objDGRegionFldsENEx of arrObjENExArray) {
    if (IsNullOrEmpty(objDGRegionFldsENEx.fldId) == true) continue;
    const conFieldTab = await vFieldTab_Sim_GetObjByFldIdCache(
      objDGRegionFldsENEx.fldId,
      clsPrivateSessionStorage.currSelPrjId,
    );
    if (conFieldTab == null) {
      const strMsg = `fldId:[${objDGRegionFldsENEx.fldId}] 在表FieldTab中不存在！`;
      throw new Error(strMsg);
    }
  }

  return arrObjENExArray;
}

/// <summary>
/// 把同一个类的对象,复制到该类的扩展对象
/// (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_CopyToEx)
/// </summary>
/// <param name = "objDGRegionFldsENS">源对象</param>
/// <param name = "objDGRegionFldsENT">目标对象</param>
export function DGRegionFldsEx_CopyToEx4GC(
  objDGRegionFldsENS: clsDGRegionFldsEN,
): clsDGRegionFldsENEx4GC {
  const objDGRegionFldsENT: clsDGRegionFldsENEx4GC = new clsDGRegionFldsENEx4GC();
  objDGRegionFldsENT.mId = objDGRegionFldsENS.mId; //mId
  objDGRegionFldsENT.regionId = objDGRegionFldsENS.regionId; //区域Id
  objDGRegionFldsENT.fldId = objDGRegionFldsENS.fldId; //表字段ID
  objDGRegionFldsENT.outFldId = objDGRegionFldsENS.outFldId; //表字段ID
  //objDGRegionFldsENT.isUseFunc = objDGRegionFldsENS.isUseFunc; //是否代码转换到名称
  //objDGRegionFldsENT.dataPropertyName = objDGRegionFldsENS.dataPropertyName; //数据属性名
  objDGRegionFldsENT.seqNum = objDGRegionFldsENS.seqNum; //列序号
  objDGRegionFldsENT.headerText = objDGRegionFldsENS.headerText; //列头
  objDGRegionFldsENT.toolTipText = objDGRegionFldsENS.toolTipText; //提示文字
  objDGRegionFldsENT.ctlTypeId = objDGRegionFldsENS.ctlTypeId; //控件类型号
  objDGRegionFldsENT.dgFuncTypeId = objDGRegionFldsENS.dgFuncTypeId; //Dg功能类型Id
  objDGRegionFldsENT.isNeedSort = objDGRegionFldsENS.isNeedSort; //是否需要排序
  objDGRegionFldsENT.isDefaultSort = objDGRegionFldsENS.isDefaultSort; //是否默认排序
  objDGRegionFldsENT.isTransToChkBox = objDGRegionFldsENS.isTransToChkBox; //是否转换成CheckBox
  objDGRegionFldsENT.isVisible = objDGRegionFldsENS.isVisible; //是否显示
  objDGRegionFldsENT.isFuncFld = objDGRegionFldsENS.isFuncFld; //是否功能字段
  objDGRegionFldsENT.inUse = objDGRegionFldsENS.inUse; //是否在用
  objDGRegionFldsENT.prjId = objDGRegionFldsENS.prjId; //工程ID
  objDGRegionFldsENT.updUser = objDGRegionFldsENS.updUser; //修改者
  objDGRegionFldsENT.updDate = objDGRegionFldsENS.updDate; //修改日期
  objDGRegionFldsENT.memo = objDGRegionFldsENS.memo; //说明
  objDGRegionFldsENT.sfUpdFldSetStr = objDGRegionFldsENS.updFldString; //专门用于记录某字段属性是否修改
  objDGRegionFldsENT.sfFldComparisonOp = objDGRegionFldsENS.sfFldComparisonOp; //专门用于记录条件对象某字段的比较运算符
  return objDGRegionFldsENT;
}

/// <summary>
/// 导入相关字段
/// (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
/// </summary>
/// <param name = "strRegionId">区域Id</param>
/// <param name = "strPrjId">工程Id</param>
/// <param name = "strUserId">用户Id</param>
/// <returns>获取的相应对象列表</returns>
export async function DGRegionFldsEx_ImportRelaFlds(
  strRegionId: string,
  strPrjId: string,
  strUserId: string,
): Promise<boolean> {
  const strThisFuncName = DGRegionFldsEx_ImportRelaFlds.name;
  const strAction = 'ImportRelaFlds';
  const strUrl = GetWebApiUrl(dGRegionFldsEx_Controller, strAction);
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
        dGRegionFldsEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        dGRegionFldsEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

export function DGRegionFldsEx_SortFunByInUseAndSeq(
  a: clsDGRegionFldsENEx,
  b: clsDGRegionFldsENEx,
): number {
  if (a.inUse == b.inUse) return a.seqNum - b.seqNum;
  else {
    if (a.inUse == true) return -1;
    else return 1;
  }
}

/// <summary>
/// 重序
/// (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
/// </summary>
/// <param name = "strRegionId">区域Id</param>
/// <returns>获取的相应对象列表</returns>
export async function DGRegionFldsEx_ReOrder(strRegionId: string): Promise<void> {
  const strThisFuncName = DGRegionFldsEx_ReOrder.name;
  const strAction = 'ReOrder';
  const strUrl = GetWebApiUrl(dGRegionFldsEx_Controller, strAction);
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
        dGRegionFldsEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        dGRegionFldsEx_ConstructorName,
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
export async function DGRegionFldsEx_AdjustSequenceNumber(
  strDirect: string,
  lngMid: number,
): Promise<boolean> {
  const strThisFuncName = DGRegionFldsEx_AdjustSequenceNumber.name;
  const strAction = 'AdjustSequenceNumber';
  const strUrl = GetWebApiUrl(dGRegionFldsEx_Controller, strAction);
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
        dGRegionFldsEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        dGRegionFldsEx_ConstructorName,
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
export function DGRegionFldsEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  // const strThisFuncName = 'SortFunByKey';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsDGRegionFldsENEx.con_FldName:
        return (a: clsDGRegionFldsENEx, b: clsDGRegionFldsENEx) => {
          return a.fldName.localeCompare(b.fldName);
        };
      case clsDGRegionFldsENEx.con_TabName:
        return (a: clsDGRegionFldsENEx, b: clsDGRegionFldsENEx) => {
          return a.tabName.localeCompare(b.tabName);
        };
      case clsDGRegionFldsENEx.con_CtlTypeName:
        return (a: clsDGRegionFldsENEx, b: clsDGRegionFldsENEx) => {
          return a.ctlTypeName.localeCompare(b.ctlTypeName);
        };
      case clsDGRegionFldsENEx.con_FldNameV2:
        return (a: clsDGRegionFldsENEx, b: clsDGRegionFldsENEx) => {
          return a.fldNameV2.localeCompare(b.fldNameV2);
        };
      case clsDGRegionFldsENEx.con_TrClass:
        return (a: clsDGRegionFldsENEx, b: clsDGRegionFldsENEx) => {
          return a.trClass.localeCompare(b.trClass);
        };
      default:
        return DGRegionFlds_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsDGRegionFldsENEx.con_FldName:
        return (a: clsDGRegionFldsENEx, b: clsDGRegionFldsENEx) => {
          return b.fldName.localeCompare(a.fldName);
        };
      case clsDGRegionFldsENEx.con_TabName:
        return (a: clsDGRegionFldsENEx, b: clsDGRegionFldsENEx) => {
          return b.tabName.localeCompare(a.tabName);
        };
      case clsDGRegionFldsENEx.con_CtlTypeName:
        return (a: clsDGRegionFldsENEx, b: clsDGRegionFldsENEx) => {
          return b.ctlTypeName.localeCompare(a.ctlTypeName);
        };
      case clsDGRegionFldsENEx.con_FldNameV2:
        return (a: clsDGRegionFldsENEx, b: clsDGRegionFldsENEx) => {
          return b.fldNameV2.localeCompare(a.fldNameV2);
        };
      case clsDGRegionFldsENEx.con_TrClass:
        return (a: clsDGRegionFldsENEx, b: clsDGRegionFldsENEx) => {
          return b.trClass.localeCompare(a.trClass);
        };
      default:
        return DGRegionFlds_SortFunByKey(strKey, AscOrDesc);
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
export async function DGRegionFldsEx_ImportExtendFld(
  lngMid: number,
  strPrjId: string,
  strUserId: string,
): Promise<boolean> {
  const strThisFuncName = DGRegionFldsEx_ImportExtendFld.name;
  const strAction = 'ImportExtendFld';
  const strUrl = GetWebApiUrl(dGRegionFldsEx_Controller, strAction);
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
        dGRegionFldsEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        dGRegionFldsEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

export async function DGRegionFldsEx_GetRecCountByCondInUseCache(
  strRegionId: string,
): Promise<number> {
  const objDGRegionFlds = new ConditionCollection();
  objDGRegionFlds.SetCondFldValue(clsDGRegionFldsEN.con_InUse, true, '=');
  objDGRegionFlds.SetCondFldValue(clsDGRegionFldsEN.con_RegionId, strRegionId, '=');
  const intRecNum = await DGRegionFlds_GetRecCountByCondCache(objDGRegionFlds, strRegionId);
  return intRecNum;
}
export async function DGRegionFldsEx_GetFldCountInUseByRegionIdCacheEx(
  strRegionId: string,
): Promise<number> {
  const arrObjList: Array<clsDGRegionFldsEN> =
    await DGRegionFldsEx_GetObjLstByRegionIdCache4InUseEx(strRegionId);
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
export async function DGRegionFldsEx_CheckRegionFldsUp(
  strViewId: string,
  strRegionId: string,
  strCmPrjId: string,
  strOpUserId: string,
): Promise<boolean> {
  const strThisFuncName = DGRegionFldsEx_CheckRegionFldsUp.name;
  const strAction = 'CheckRegionFldsUp';
  const strUrl = DGRegionFldsEx_GetWebApiUrl(dGRegionFldsEx_Controller, strAction);
  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strViewId,
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
        dGRegionFldsEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        dGRegionFldsEx_ConstructorName,
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
export function DGRegionFldsEx_GetWebApiUrl(strController: string, strAction: string): string {
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
 * 根据扩展字段名去调用相应的映射函数
 * 作者:潘以锋
 * 日期:00-00-00
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function DGRegionFldsEx_FuncMapByFldName(
  strFldName: string,
  objDGRegionFldsEx: clsDGRegionFldsENEx,
) {
  const strThisFuncName = DGRegionFldsEx_FuncMapByFldName.name;
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsDGRegionFldsEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsDGRegionFldsENEx.con_FldName:
      return DGRegionFldsEx_FuncMapFldName(objDGRegionFldsEx);
    case clsDGRegionFldsENEx.con_TabName:
      return DGRegionFldsEx_FuncMapTabName(objDGRegionFldsEx);
    case clsDGRegionFldsENEx.con_CtlTypeName:
      return DGRegionFldsEx_FuncMapCtlTypeName(objDGRegionFldsEx);
    case clsDGRegionFldsENEx.con_TabId:
      return DGRegionFldsEx_FuncMapTabId(objDGRegionFldsEx);
    case clsDGRegionFldsENEx.con_OutFldName:
      return DGRegionFldsEx_FuncMapOutFldName(objDGRegionFldsEx);
    default:
      strMsg = Format(
        '扩展字段:[{0}]在字段值函数映射中不存在!(in {1})',
        strFldName,
        strThisFuncName,
      );
      console.error(strMsg);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objDGRegionFldsS:源对象
 **/
export async function DGRegionFldsEx_FuncMapFldName(objDGRegionFlds: clsDGRegionFldsENEx) {
  const strThisFuncName = DGRegionFldsEx_FuncMapFldName.name;
  try {
    if (IsNullOrEmpty(objDGRegionFlds.fldName) == true) {
      const vFieldTabSimFldId = objDGRegionFlds.fldId;
      const vFieldTabSimFldName = await vFieldTab_Sim_GetNameByFldIdCache(
        vFieldTabSimFldId,
        clsPrivateSessionStorage.currSelPrjId,
      );
      objDGRegionFlds.fldName = vFieldTabSimFldName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000336)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      dGRegionFldsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objDGRegionFldsS:源对象
 **/
export async function DGRegionFldsEx_FuncMapTabName(objDGRegionFlds: clsDGRegionFldsENEx) {
  const strThisFuncName = DGRegionFldsEx_FuncMapTabName.name;
  const viewRegionStore = useviewRegionStore();
  try {
    if (IsNullOrEmpty(objDGRegionFlds.tabName) == true) {
      const ViewRegionRegionId = objDGRegionFlds.regionId;
      const ViewRegionTabId = await viewRegionStore.getTabId(ViewRegionRegionId);
      const vPrjTabSimTabId = ViewRegionTabId;
      const vPrjTabSimTabName = await vPrjTab_Sim_func(
        clsvPrjTab_SimEN.con_TabId,
        clsvPrjTab_SimEN.con_TabName,
        vPrjTabSimTabId,
        clsPrivateSessionStorage.currSelPrjId,
      );
      objDGRegionFlds.tabName = vPrjTabSimTabName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000339)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      dGRegionFldsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objDGRegionFldsS:源对象
 **/
export async function DGRegionFldsEx_FuncMapCtlTypeName(objDGRegionFlds: clsDGRegionFldsENEx) {
  const strThisFuncName = DGRegionFldsEx_FuncMapCtlTypeName.name;
  try {
    if (IsNullOrEmpty(objDGRegionFlds.ctlTypeName) == true) {
      const CtlTypeAbbrCtlTypeId = objDGRegionFlds.ctlTypeId;
      const CtlTypeAbbrCtlTypeName = await CtlType_func(
        clsCtlTypeEN.con_CtlTypeId,
        clsCtlTypeEN.con_CtlTypeName,
        CtlTypeAbbrCtlTypeId,
      );
      objDGRegionFlds.ctlTypeName = CtlTypeAbbrCtlTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000297)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      dGRegionFldsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objDGRegionFldsS:源对象
 **/
export async function DGRegionFldsEx_FuncMapTabId(objDGRegionFlds: clsDGRegionFldsENEx) {
  const strThisFuncName = DGRegionFldsEx_FuncMapTabId.name;
  const viewRegionStore = useviewRegionStore();
  try {
    if (IsNullOrEmpty(objDGRegionFlds.tabId) == true) {
      const ViewRegionRegionId = objDGRegionFlds.regionId;
      const ViewRegionTabId = await viewRegionStore.getTabId(ViewRegionRegionId);
      objDGRegionFlds.tabId = ViewRegionTabId;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000360)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      dGRegionFldsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objDGRegionFldsS:源对象
 **/
export async function DGRegionFldsEx_FuncMapOutFldName(objDGRegionFlds: clsDGRegionFldsENEx) {
  const strThisFuncName = DGRegionFldsEx_FuncMapOutFldName.name;
  try {
    if (IsNullOrEmpty(objDGRegionFlds.outFldName) == true) {
      const vFieldTabSimFldId = objDGRegionFlds.outFldId;
      const vFieldTabSimFldName = await vFieldTab_Sim_GetNameByFldIdCache(
        vFieldTabSimFldId,
        clsPrivateSessionStorage.currSelPrjId,
      );
      objDGRegionFlds.outFldName = vFieldTabSimFldName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000293)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      dGRegionFldsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
