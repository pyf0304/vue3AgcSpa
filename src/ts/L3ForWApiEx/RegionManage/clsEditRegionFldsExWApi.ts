import axios from 'axios';
import {
  vFieldTab_SimEx_CopyToEx,
  vFieldTab_SimEx_func,
} from '../Table_Field/clsvFieldTab_SimExWApi';
import { TabFeatureEx_GetFuncName } from '../Table_Field/clsTabFeatureExWApi';
import {
  vPrjTab_SimEx_func,
  vPrjTab_SimEx_GetNameByTabIdCache,
} from '../Table_Field/clsvPrjTab_SimExWApi';
import {
  vTabFeatureFlds_SimEx_GetObjLstByTabFeatureIdCache,
  vTabFeatureFlds_SimEx_SortFun_OrderNum,
} from '../Table_Field/clsvTabFeatureFlds_SimExWApi';
import { vTabFeature_SimEx_GetObjByTabFeatureIdCache } from '../Table_Field/clsvTabFeature_SimExWApi';

import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { enumValueGivingMode } from '@/ts/L0Entity/GeneCode/clsValueGivingModeEN';
import { ASPControlGroupEx } from '@/ts/L0Entity/GeneCSharpEx/clsASPControlGroupENEx';
import { clsCtlTypeEN, enumCtlType } from '@/ts/L0Entity/PrjInterface/clsCtlTypeEN';
import { clsEditRegionFldsEN } from '@/ts/L0Entity/RegionManage/clsEditRegionFldsEN';
import { clsEditRegionFldsENEx } from '@/ts/L0Entity/RegionManage/clsEditRegionFldsENEx';
import { clsEditRegionFldsENEx4GC } from '@/ts/L0Entity/RegionManage/clsEditRegionFldsENEx4GC';
import { enumFieldType } from '@/ts/L0Entity/Table_Field/clsFieldTypeEN';
import { clsPrjTabEN } from '@/ts/L0Entity/Table_Field/clsPrjTabEN';
import { clsvFieldTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvFieldTab_SimEN';
import { clsvPrjTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvPrjTab_SimEN';
import { GCVariableType_GetObjByVarTypeIdCache } from '@/ts/L3ForWApi/GeneCode/clsGCVariableTypeWApi';
import { GCVariable_GetObjByVarIdCache } from '@/ts/L3ForWApi/GeneCode/clsGCVariableWApi';
import {
  CtlType_func,
  CtlType_GetObjByCtlTypeIdCache,
} from '@/ts/L3ForWApi/PrjInterface/clsCtlTypeWApi';
import { Projects_GetObjByPrjIdCache } from '@/ts/L3ForWApi/PrjManage/clsProjectsWApi';
import {
  EditRegionFlds_GetObjLstCache,
  EditRegionFlds_SortFunByKey,
} from '@/ts/L3ForWApi/RegionManage/clsEditRegionFldsWApi';
import { ObjectAssign, ObjectAssignV2 } from '@/ts/PubFun/clsCommFunc4Web';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
// import { Dictionary } from '@/ts/PubFun/tzDictionary';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { GetControlGroup_Asp_Edit } from '@/ts/L2BLL/GeneCSharp/clsASPControlGroupBLEx2';
import { FieldTab_GetObjByFldIdAsync } from '@/ts/L3ForWApi/Table_Field/clsFieldTabWApi';
import { usevFieldTab_Sim2Store, vFieldTab_SimEx_CopyToEN } from '@/store/modules/vFieldTab_Sim2';
import { useviewRegionStore } from '@/store/modules/viewRegion';
import { pubComboEN } from '@/ts/components/pubComboEN';
import { vFieldTab_Sim_GetNameByFldIdCache } from '@/ts/L3ForWApi/Table_Field/clsvFieldTab_SimWApi';

export const editRegionFldsEx_Controller = 'EditRegionFldsExApi';
export const editRegionFldsEx_ConstructorName = 'editRegionFldsEx';

/// <summary>
/// 把同一个类的对象,复制到该类的扩展对象
/// (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_CopyToEx)
/// </summary>
/// <param name = "objEditRegionFldsENS">源对象</param>
/// <param name = "objEditRegionFldsENT">目标对象</param>
export function EditRegionFldsEx_CopyToEx(
  objEditRegionFldsENS: clsEditRegionFldsEN,
): clsEditRegionFldsENEx {
  const objEditRegionFldsENT = new clsEditRegionFldsENEx();
  try {
    ObjectAssign(objEditRegionFldsENT, objEditRegionFldsENS);
    return objEditRegionFldsENT;
  } catch (e: any) {
    const strMsg = Format('(errid:WiTsCs0011)Copy表对象数据出错,${e}.');
    console.error(strMsg);
    alert(strMsg);
    return objEditRegionFldsENT;
  }
}

export function EditRegionFldsEx_CopyToPubComboEx(
  objEditRegionFldsENS: clsEditRegionFldsEN,
): pubComboEN {
  const objpubComboEN = new pubComboEN();
  try {
    ObjectAssign(objpubComboEN, objEditRegionFldsENS);
    return objpubComboEN;
  } catch (e: any) {
    const strMsg = Format('(errid:WiTsCs0011)Copy表对象ToPubComboEN,${e}.');
    console.error(strMsg);
    alert(strMsg);
    return objpubComboEN;
  }
}
export function EditRegionFldsEx_CopyToEx4GC(
  objEditRegionFldsENS: clsEditRegionFldsEN,
): clsEditRegionFldsENEx4GC {
  const objEditRegionFldsENT = new clsEditRegionFldsENEx4GC();
  try {
    ObjectAssignV2(objEditRegionFldsENT, objEditRegionFldsENS);
    return objEditRegionFldsENT;
  } catch (e: any) {
    const strMsg = Format('(errid:WiTsCs0011)Copy表对象数据出错,${e}.');
    console.error(strMsg);
    alert(strMsg);
    return objEditRegionFldsENT;
  }
}

/// <summary>
/// 根据关键字获取相关对象, 从缓存的对象列表中获取.没有就返回null.
/// (AutoGCLib.AutoGC6Cs_Business:Gen_4BL_GetObjByKeyCache)
/// </summary>
/// <param name = "strRegionId">所给的关键字</param>
/// <param name = "strPrjId">工程Id</param>
/// <returns>根据关键字获取的对象</returns>
export async function EditRegionFldsEx_GetObjLstByRegionIdCache4InUseEx(strRegionId: string) {
  //初始化列表缓存
  const arrObjLstCache: Array<clsEditRegionFldsEN> = await EditRegionFlds_GetObjLstCache(
    strRegionId,
  );

  const arrEditRegionFldsObjLst_Sel1: Array<clsEditRegionFldsEN> = arrObjLstCache
    .filter((x) => x.regionId == strRegionId && x.inUse == true)
    .sort((x) => x.seqNum);
  return arrEditRegionFldsObjLst_Sel1;
}

/// <summary>
/// 根据区域Id获取相关
/// </summary>
/// <param name="strRegionId"></param>
/// <param name="strPrjId"></param>
/// <returns></returns>
export async function EditRegionFldsEx_GetObjExLstByRegionIdCacheEx(
  strRegionId: string,
): Promise<Array<clsEditRegionFldsENEx>> {
  let arrObjENExArray: Array<clsEditRegionFldsENEx> = new Array<clsEditRegionFldsENEx>();
  const arrObjList: Array<clsEditRegionFldsEN> =
    await EditRegionFldsEx_GetObjLstByRegionIdCache4InUseEx(strRegionId);

  arrObjENExArray = arrObjList.map(EditRegionFldsEx_CopyToEx);
  return arrObjENExArray;
}

export async function EditRegionFldsEx_GetObjEx4GCLstByRegionIdCacheEx(
  strRegionId: string,
): Promise<Array<clsEditRegionFldsENEx4GC>> {
  const vFieldTab_Sim2Store = usevFieldTab_Sim2Store();
  let arrObjENExArray: Array<clsEditRegionFldsENEx4GC> = new Array<clsEditRegionFldsENEx4GC>();
  const arrObjList: Array<clsEditRegionFldsEN> =
    await EditRegionFldsEx_GetObjLstByRegionIdCache4InUseEx(strRegionId);

  arrObjENExArray = arrObjList.map(EditRegionFldsEx_CopyToEx4GC);

  for (const objEditRegionFldsEx of arrObjENExArray) {
    if (IsNullOrEmpty(objEditRegionFldsEx.fldId) == false) {
      const conFieldTab0 = await vFieldTab_Sim2Store.getObj(objEditRegionFldsEx.fldId);

      if (conFieldTab0 == null) {
        const objFieldTab = await FieldTab_GetObjByFldIdAsync(objEditRegionFldsEx.fldId);
        if (objFieldTab == null) {
          const strMsg = `fldId:[${objEditRegionFldsEx.fldId}] 在表FieldTab中不存在！`;
          console.error(strMsg);
          continue;
          // throw new Error(strMsg);
        }
        const strMsg = `字段:[${objEditRegionFldsEx.fldId}(${objFieldTab.fldName})] 在表FieldTab中不存在！`;
        throw new Error(strMsg);
      }
      const conFieldTab = vFieldTab_SimEx_CopyToEN(conFieldTab0);
      objEditRegionFldsEx.objFieldTabENEx = vFieldTab_SimEx_CopyToEx(conFieldTab);
    }
    const conCtlTypeAbbr = await CtlType_GetObjByCtlTypeIdCache(objEditRegionFldsEx.ctlTypeId);
    if (conCtlTypeAbbr == null) {
      const strMsg = `ctlTypeId:[${objEditRegionFldsEx.ctlTypeId}] 在表ctlTypeAbbr中不存在！`;
      throw new Error(strMsg);
    }
    objEditRegionFldsEx.objCtlTypeAbbr = conCtlTypeAbbr;
  }
  return arrObjENExArray;
}
export async function EditRegionFldsEx_GetControlGroup(strRegionId: string, strPrjId: string) {
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
  //console.log("1objViewRegion:", objViewRegion);
  //Func<clsEditRegionFldsENEx4GC, ASPControlGroupEx> GetControlGroup_Asp4MultiModel = obj => clsASPControlGroupBLEx.GetControlGroup_Asp(obj, strItemName4MultiModel);
  const arrEditRegionFlds: Array<clsEditRegionFldsENEx4GC> =
    await EditRegionFldsEx_GetObjEx4GCLstByRegionIdCacheEx(strRegionId);

  //console.log("1arrEditRegionFlds:", arrEditRegionFlds);
  // const strItemName4MultiModel = '';
  const arrASPControlGroupObjLst: Array<ASPControlGroupEx> = arrEditRegionFlds
    .filter((x) => x.inUse == true)
    .sort((x, y) => x.seqNum - y.seqNum)
    .map((x) => GetControlGroup_Asp_Edit(x, strTabName));
  //console.log("1arrASPControlGroupObjLst:", arrASPControlGroupObjLst);
  //把查询按钮加进来

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
export async function EditRegionFldsEx_ImportRelaFlds(
  strRegionId: string,
  strPrjId: string,
  strUserId: string,
): Promise<boolean> {
  const strThisFuncName = EditRegionFldsEx_ImportRelaFlds.name;
  const strAction = 'ImportRelaFlds';

  const strUrl = GetWebApiUrl(editRegionFldsEx_Controller, strAction);
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
        editRegionFldsEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        editRegionFldsEx_ConstructorName,
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
export async function EditRegionFldsEx_AdjustSequenceNumber(
  strDirect: string,
  lngMid: number,
): Promise<boolean> {
  const strThisFuncName = EditRegionFldsEx_AdjustSequenceNumber.name;
  const strAction = 'AdjustSequenceNumber';
  const strUrl = GetWebApiUrl(editRegionFldsEx_Controller, strAction);
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
        editRegionFldsEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        editRegionFldsEx_ConstructorName,
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
export async function EditRegionFldsEx_ReOrder(strRegionId: string): Promise<void> {
  const strThisFuncName = EditRegionFldsEx_ReOrder.name;
  const strAction = 'ReOrder';
  const strUrl = GetWebApiUrl(editRegionFldsEx_Controller, strAction);
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
        editRegionFldsEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        editRegionFldsEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

export async function EditRegionFldsEx_GetObjLstByRegionIdCacheEx(strRegionId: string) {
  //初始化列表缓存
  const arrObjLstCache: Array<clsEditRegionFldsEN> = await EditRegionFlds_GetObjLstCache(
    strRegionId,
  );

  const arrEditRegionFldsObjLst_Sel1: Array<clsEditRegionFldsEN> = arrObjLstCache
    .filter((x) => x.regionId == strRegionId)
    .sort((x) => x.seqNum);
  return arrEditRegionFldsObjLst_Sel1;
}
export function EditRegionFldsEx_SortFunByInUseAndSeq(
  a: clsEditRegionFldsENEx,
  b: clsEditRegionFldsENEx,
): number {
  if (a.inUse == b.inUse) return a.seqNum - b.seqNum;
  else {
    if (a.inUse == true) return -1;
    else return 1;
  }
}
/**
 *  函数功能:根据查询区字段信息获取相应的条件串
 **/
export async function EditRegionFldsEx_GetConditionShowStr(
  objEditRegionFlds: clsEditRegionFldsEN,
): Promise<string> {
  const strTabFeatureId4Ddl = objEditRegionFlds.tabFeatureId4Ddl;
  const arrTabFeatureFlds = await vTabFeatureFlds_SimEx_GetObjLstByTabFeatureIdCache(
    strTabFeatureId4Ddl,
    clsPrivateSessionStorage.currSelPrjId,
  );
  const arrTabFeatureFlds_Sel = arrTabFeatureFlds
    .filter(
      (x) =>
        x.fieldTypeId == enumFieldType.ConditionField_16 &&
        x.valueGivingModeId != enumValueGivingMode.DefaultValue_01,
    )
    .sort(vTabFeatureFlds_SimEx_SortFun_OrderNum);
  let strFldIdCond1 = '';
  let strFldIdCond2 = '';
  let strVarIdCond1 = '';
  let strVarIdCond2 = '';
  let strVarName_Cond1 = '';
  let strVarName_Cond2 = '';
  let objVarIdCond1;
  let objVarIdCond2;

  let strFldNameCond1 = '';
  let strFldNameCond2 = '';
  let strConditionStr = '';
  if (arrTabFeatureFlds_Sel.length == 2) {
    strFldIdCond1 = arrTabFeatureFlds_Sel[0].fldId;
    strFldIdCond2 = arrTabFeatureFlds_Sel[1].fldId;
    strFldNameCond1 = await vFieldTab_Sim_GetNameByFldIdCache(
      strFldIdCond1,
      clsPrivateSessionStorage.currSelPrjId,
    );
    strFldNameCond2 = await vFieldTab_Sim_GetNameByFldIdCache(
      strFldIdCond2,
      clsPrivateSessionStorage.currSelPrjId,
    );
    strVarIdCond1 = objEditRegionFlds.varIdCond1;
    strVarIdCond2 = objEditRegionFlds.varIdCond2;
    if (IsNullOrEmpty(strVarIdCond1) == false) {
      objVarIdCond1 = await GCVariable_GetObjByVarIdCache(strVarIdCond1);
      if (objVarIdCond1 == null) {
        const strMsg = Format(
          '在项目:[{0}]中，变量Id:[{1}]没有相应变量，请检查！',
          clsPrivateSessionStorage.currSelPrjName,
          strVarIdCond1,
        );
        console.error(strMsg);
        alert(strMsg);
        return '';
      }
      //const strVarTypeName = await GCVariableType_GetNameByVarTypeIdCache(objVarIdCond1.varTypeId);
      let strVarTypeName = '';
      const objVarType = await GCVariableType_GetObjByVarTypeIdCache(objVarIdCond1.varTypeId);
      if (objVarType != null) {
        strVarTypeName = objVarType.varTypeSimName;
      }
      strVarName_Cond1 = Format('[{0}]{1}', strVarTypeName, objVarIdCond1.varName);
    }
    if (IsNullOrEmpty(strVarIdCond2) == false) {
      objVarIdCond2 = await GCVariable_GetObjByVarIdCache(strVarIdCond2);

      if (objVarIdCond2 == null) {
        const strMsg = Format(
          '在项目:[{0}]中，变量Id:[{1}]没有相应变量，请检查！',
          clsPrivateSessionStorage.currSelPrjName,
          strVarIdCond2,
        );
        console.error(strMsg);
        alert(strMsg);
        return '';
      }
      let strVarTypeName = '';
      const objVarType = await GCVariableType_GetObjByVarTypeIdCache(objVarIdCond2.varTypeId);
      if (objVarType != null) {
        strVarTypeName = objVarType.varTypeSimName;
      }
      strVarName_Cond2 = Format('[{0}]{1}', strVarTypeName, objVarIdCond2.varName);
    }
    strConditionStr += Format('1、{0}<-{1}', strFldNameCond1, strVarName_Cond1);
    strConditionStr += Format('<br/>    2、{0}<-{1}', strFldNameCond2, strVarName_Cond2);
  } else if (arrTabFeatureFlds_Sel.length == 1) {
    strFldIdCond1 = arrTabFeatureFlds_Sel[0].fldId;
    //strFldIdCond2 = arrTabFeatureFlds_Sel[1].fldId;
    strFldNameCond1 = await vFieldTab_Sim_GetNameByFldIdCache(
      strFldIdCond1,
      clsPrivateSessionStorage.currSelPrjId,
    );
    //strFldNameCond2 = await vFieldTab_Sim_GetNameByFldIdCache(strFldIdCond2, strPrjId);
    strVarIdCond1 = objEditRegionFlds.varIdCond1;
    //strVarIdCond2 = objEditRegionFlds.varIdCond2;
    if (IsNullOrEmpty(strVarIdCond1) == false) {
      objVarIdCond1 = await GCVariable_GetObjByVarIdCache(strVarIdCond1);
      if (objVarIdCond1 != null) {
        let strVarTypeName = '';
        const objVarType = await GCVariableType_GetObjByVarTypeIdCache(objVarIdCond1.varTypeId);
        if (objVarType != null) {
          strVarTypeName = objVarType.varTypeSimName;
        }
        strVarName_Cond1 = Format('[{0}]{1}', strVarTypeName, objVarIdCond1.varName);
      }
    }
    strConditionStr += Format('1、{0}<-{1}', strFldNameCond1, strVarName_Cond1);
  } else {
    strConditionStr += Format('[无]');
  }
  return strConditionStr;
}

/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2021-12-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function EditRegionFldsEx_SortFun_InUse_OrderNum(
  a: clsEditRegionFldsEN,
  b: clsEditRegionFldsEN,
): number {
  //const strThisFuncName = this.SortFunDefa_2Fld.name;

  if (a.inUse == b.inUse) return a.seqNum - b.seqNum;
  else {
    if (a.inUse == true) return 1;
    else return -1;
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
export function EditRegionFldsEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  // const strThisFuncName = 'SortFunByKey';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsEditRegionFldsENEx.con_TabName:
        return (a: clsEditRegionFldsENEx, b: clsEditRegionFldsENEx) => {
          return a.tabName.localeCompare(b.tabName);
        };
      case clsEditRegionFldsENEx.con_FldName:
        return (a: clsEditRegionFldsENEx, b: clsEditRegionFldsENEx) => {
          return a.fldName.localeCompare(b.fldName);
        };
      case clsEditRegionFldsENEx.con_CtlTypeName:
        return (a: clsEditRegionFldsENEx, b: clsEditRegionFldsENEx) => {
          return a.ctlTypeName.localeCompare(b.ctlTypeName);
        };
      default:
        return EditRegionFlds_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsEditRegionFldsENEx.con_TabName:
        return (a: clsEditRegionFldsENEx, b: clsEditRegionFldsENEx) => {
          return b.tabName.localeCompare(a.tabName);
        };
      case clsEditRegionFldsENEx.con_FldName:
        return (a: clsEditRegionFldsENEx, b: clsEditRegionFldsENEx) => {
          return b.fldName.localeCompare(a.fldName);
        };
      case clsEditRegionFldsENEx.con_CtlTypeName:
        return (a: clsEditRegionFldsENEx, b: clsEditRegionFldsENEx) => {
          return b.ctlTypeName.localeCompare(a.ctlTypeName);
        };
      default:
        return EditRegionFlds_SortFunByKey(strKey, AscOrDesc);
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
export function EditRegionFldsEx_FuncMapByFldName(
  strFldName: string,
  objEditRegionFldsEx: clsEditRegionFldsENEx,
) {
  const strThisFuncName = EditRegionFldsEx_FuncMapByFldName.name;
  let strMsg = '';
  //如果是本表中字段，不需要映射
  const arrFldName = clsEditRegionFldsEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsEditRegionFldsENEx.con_TabName:
      return EditRegionFldsEx_FuncMap_TabName(objEditRegionFldsEx);
    case clsEditRegionFldsENEx.con_FldName:
      return EditRegionFldsEx_FuncMap_FldName(objEditRegionFldsEx);

    case clsEditRegionFldsENEx.con_Event:
      return EditRegionFldsEx_FuncMap_Event(objEditRegionFldsEx);

    case clsEditRegionFldsENEx.con_FldNameV2:
      return EditRegionFldsEx_FuncMap_FldNameV2(objEditRegionFldsEx);
    case clsEditRegionFldsENEx.con_CtlTypeName:
      return EditRegionFldsEx_FuncMap_CtlTypeName(objEditRegionFldsEx);
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
 * @param objEditRegionFldsS:源对象
 **/
export async function EditRegionFldsEx_FuncMap_TabName(objEditRegionFlds: clsEditRegionFldsENEx) {
  const strThisFuncName = EditRegionFldsEx_FuncMap_TabName.name;
  const viewRegionStore = useviewRegionStore();
  try {
    if (IsNullOrEmpty(objEditRegionFlds.tabName) == true) {
      const ViewRegion_RegionId = objEditRegionFlds.regionId;
      const ViewRegion_TabId = await viewRegionStore.getTabId(ViewRegion_RegionId);
      const vPrjTab_Sim_TabId = ViewRegion_TabId;
      const vPrjTab_Sim_TabName = await vPrjTab_SimEx_func(
        clsvPrjTab_SimEN.con_TabId,
        clsvPrjTab_SimEN.con_TabName,
        vPrjTab_Sim_TabId,
      );
      objEditRegionFlds.tabName = vPrjTab_Sim_TabName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000094)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      editRegionFldsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objEditRegionFldsS:源对象
 **/
export async function EditRegionFldsEx_FuncMap_FldName(objEditRegionFlds: clsEditRegionFldsENEx) {
  const strThisFuncName = EditRegionFldsEx_FuncMap_FldName.name;
  try {
    if (IsNullOrEmpty(objEditRegionFlds.fldName) == true) {
      const vFieldTab_Sim_FldId = objEditRegionFlds.fldId;
      const vFieldTab_Sim_FldName = await vFieldTab_SimEx_func(
        clsvFieldTab_SimEN.con_FldId,
        clsvFieldTab_SimEN.con_FldName,
        vFieldTab_Sim_FldId,
        clsPrivateSessionStorage.currSelPrjId,
      );
      objEditRegionFlds.fldName = vFieldTab_Sim_FldName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000087)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      editRegionFldsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objEditRegionFldsS:源对象
 **/
export async function EditRegionFldsEx_FuncMap_Event(objEditRegionFlds: clsEditRegionFldsENEx) {
  const strThisFuncName = EditRegionFldsEx_FuncMap_Event.name;
  try {
    if (IsNullOrEmpty(objEditRegionFlds.event) == true) {
      let strClickEvent = '';
      let strChangeEvent = '';
      if (IsNullOrEmpty(objEditRegionFlds.clickEvent) == false) {
        strClickEvent = Format('单击<br/>', objEditRegionFlds.clickEvent);
      }
      if (IsNullOrEmpty(objEditRegionFlds.changeEvent) == false) {
        strChangeEvent = Format('选择', objEditRegionFlds.changeEvent);
      }
      objEditRegionFlds.event = Format('{0}{1}', strClickEvent, strChangeEvent);
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000087)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      editRegionFldsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objEditRegionFldsS:源对象
 **/
export async function EditRegionFldsEx_FuncMap_CtlTypeName(
  objEditRegionFlds: clsEditRegionFldsENEx,
) {
  const strThisFuncName = EditRegionFldsEx_FuncMap_CtlTypeName.name;
  try {
    if (IsNullOrEmpty(objEditRegionFlds.ctlTypeName) == true) {
      const CtlType_CtlTypeId = objEditRegionFlds.ctlTypeId;
      const CtlType_CtlTypeName = await CtlType_func(
        clsCtlTypeEN.con_CtlTypeId,
        clsCtlTypeEN.con_CtlTypeName,
        CtlType_CtlTypeId,
      );
      objEditRegionFlds.ctlTypeName = CtlType_CtlTypeName;

      let objGCVariable;
      let objGCVariableType;
      let ds_TabName;
      // let objGCVariable37;
      // let objGCVariableType37;
      switch (objEditRegionFlds.ctlTypeId) {
        case enumCtlType.DropDownList_06:
          ds_TabName = await vPrjTab_SimEx_func(
            clsPrjTabEN.con_TabId,
            clsPrjTabEN.con_TabName,
            objEditRegionFlds.dsTabId,
          );

          //    const DS_DataValueFieldName = await vFieldTab_SimEx_func(clsFieldTabEN.con_FldId, clsFieldTabEN.con_FldName, objEditRegionFlds.ds_DataValueFieldId, clsPrivateSessionStorage.cmPrjId);
          //    const DS_DataTextFieldName = await vFieldTab_SimEx_func(clsFieldTabEN.con_FldId, clsFieldTabEN.con_FldName, objEditRegionFlds.ds_DataTextFieldId, clsPrivateSessionStorage.cmPrjId);

          //    objEditRegionFlds.ctlTypeName = Format("Ddl-绑定:<br/>表: {0}<br/>值: {1}<br/>文本: {2}",
          //        ds_TabName, DS_DataValueFieldName, DS_DataTextFieldName);
          //}
          //else {
          if (IsNullOrEmpty(objEditRegionFlds.tabFeatureId4Ddl) == false) {
            const objTabFeature = await vTabFeature_SimEx_GetObjByTabFeatureIdCache(
              objEditRegionFlds.tabFeatureId4Ddl,
              clsPrivateSessionStorage.cmPrjId,
            );
            if (objTabFeature == null) {
              const objProject = await Projects_GetObjByPrjIdCache(
                clsPrivateSessionStorage.currSelPrjId,
              );
              if (objProject == null) return;
              const strMsg = Format(
                '在项目:[{0}]中，表功能Id:[{1}]没有相应功能，请检查！',
                objProject.prjName,
                objEditRegionFlds.tabFeatureId4Ddl,
              );
              console.error(strMsg);
              alert(strMsg);
              return;
            }
            if (IsNullOrEmpty(objTabFeature.funcNameJs) == true) {
              const objFuncName = await TabFeatureEx_GetFuncName(objTabFeature);
              objTabFeature.funcNameJs = objFuncName.funcNameJs;
            }
            if (objTabFeature.isExtendedClass == true) {
              ds_TabName = Format('cls{0}ExWapi', ds_TabName);
              objTabFeature.funcNameJs = Format('自定义:{0}', objTabFeature.funcNameJs);
            } else {
              ds_TabName = Format('cls{0}Wapi', ds_TabName);
            }
            const strConditionStr = await EditRegionFldsEx_GetConditionShowStr(objEditRegionFlds);
            objEditRegionFlds.ctlTypeName = Format(
              "<span class='text-secondary  font-weight-bold'>Ddl-绑定: </span><br/><span class='text-secondary b'>类:</span><span class='text-primary'>{0}</span><br/><span class='text-secondary b'>函数: </span><br/><span class='text-primary'>{1}</span><br/><span class='text-secondary b'>条件: </span><div class='text-primary'>{2}</div>",
              ds_TabName,
              objTabFeature.funcNameJs,
              strConditionStr,
            );
          }
          //}
          break;
        case enumCtlType.ViewVariable_38:
          objGCVariable = await GCVariable_GetObjByVarIdCache(objEditRegionFlds.varId);
          if (objGCVariable == null) break;
          objGCVariableType = await GCVariableType_GetObjByVarTypeIdCache(objGCVariable.varTypeId);
          if (objGCVariableType == null) break;
          objEditRegionFlds.ctlTypeName = Format(
            "<span class='text-secondary  font-weight-bold'>界面变量:</span><br/><span class='text-secondary b'>{0}:  </span><span class='text-primary'>{1}</span>",
            objGCVariableType.varTypeSimName,
            objGCVariable.varName,
          );
          break;
        // case enumCtlType.sessionStorage_40:
        //   objGCVariable = await GCVariable_GetObjByVarIdCache(objEditRegionFlds.varId);
        //   if (objGCVariable == null) break;
        //   objGCVariableType = await GCVariableType_GetObjByVarTypeIdCache(objGCVariable.varTypeId);
        //   if (objGCVariableType == null) break;
        //   objEditRegionFlds.ctlTypeName = Format(
        //     "<span class='text-secondary  font-weight-bold'>sessionStorage:</span><br/><span class='text-secondary b'>{0}:  </span><span class='text-primary'>{1}</span>",
        //     objGCVariableType.varTypeSimName,
        //     objGCVariable.varName,
        //   );
        //   break;
        // case enumCtlType.CacheClassifyField_37:
        //   if (IsNullOrEmpty(objEditRegionFlds.varId) == true) break;
        //   objGCVariable37 = await GCVariable_GetObjByVarIdCache(objEditRegionFlds.varId);
        //   if (objGCVariable37 == null) break;
        //   objGCVariableType37 = await GCVariableType_GetObjByVarTypeIdCache(
        //     objGCVariable37.varTypeId,
        //   );
        //   if (objGCVariableType37 == null) break;
        //   objEditRegionFlds.ctlTypeName = Format(
        //     "<span class='text-secondary  font-weight-bold'>缓存分类字段:</span><br/><span class='text-secondary b'>{0}: </span><span class='text-primary'>{1}</span>",
        //     objGCVariableType37.varTypeSimName,
        //     objGCVariable37.varName,
        //   );
        //   break;
        default:
          break;
      }
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000123)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      editRegionFldsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objEditRegionFldsS:源对象
 **/
export async function EditRegionFldsEx_FuncMap_FldNameV2(objEditRegionFlds: clsEditRegionFldsENEx) {
  const strThisFuncName = EditRegionFldsEx_FuncMap_FldNameV2.name;
  const viewRegionStore = useviewRegionStore();
  try {
    if (IsNullOrEmpty(objEditRegionFlds.fldNameV2) == true) {
      const objViewRegion_Edit = await viewRegionStore.getObj(objEditRegionFlds.regionId);
      if (objViewRegion_Edit == null) return;
      const strTabName4Region = await vPrjTab_SimEx_GetNameByTabIdCache(
        objViewRegion_Edit.tabId,
        clsPrivateSessionStorage.currSelPrjId,
      );
      if (IsNullOrEmpty(objEditRegionFlds.fldName) == true)
        await EditRegionFldsEx_FuncMapByFldName(
          clsEditRegionFldsENEx.con_FldName,
          objEditRegionFlds,
        );

      if (IsNullOrEmpty(objEditRegionFlds.tabName) == true)
        await EditRegionFldsEx_FuncMapByFldName(
          clsEditRegionFldsENEx.con_TabName,
          objEditRegionFlds,
        );

      let strTabName = objEditRegionFlds.tabName;
      if (strTabName != strTabName4Region) {
        strTabName = Format('<br/>来源表:{0}', objEditRegionFlds.tabName);
      } else {
        strTabName = '';
      }
      let strClickEvent = '';
      if (IsNullOrEmpty(objEditRegionFlds.clickEvent) == false) {
        strClickEvent = Format('单击：{0}<br/>', objEditRegionFlds.clickEvent);
      }
      let strChangeEvent = '';
      if (IsNullOrEmpty(objEditRegionFlds.changeEvent) == false) {
        strChangeEvent = Format(
          "<span class='text-secondary  font-weight-bold'>选择：</span><br/><span class='text-primary'>{0}</span>",
          objEditRegionFlds.changeEvent,
        );
      }
      let strTemp = Format(
        '{0}<br/>({1})<br/>{2}{3}{4}',
        objEditRegionFlds.fldName,
        objEditRegionFlds.labelCaption,
        strClickEvent,
        strChangeEvent,
        strTabName,
      );
      strTemp = strTemp.replace('<br/><br/>', '<br/>');
      const intLastBr = strTemp.lastIndexOf('<br/>');
      if (intLastBr == strTemp.length - 5) {
        strTemp = strTemp.substring(0, intLastBr);
      }

      objEditRegionFlds.fldNameV2 = strTemp;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000087)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      editRegionFldsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

export async function EditRegionFldsEx_GetFldCountInUseByRegionIdCacheEx(
  strRegionId: string,
): Promise<number> {
  const arrObjList: Array<clsEditRegionFldsEN> =
    await EditRegionFldsEx_GetObjLstByRegionIdCache4InUseEx(strRegionId);
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
export async function EditRegionFldsEx_CheckRegionFldsUp(
  strRegionId: string,
  strViewId: string,
  strCmPrjId: string,
  strOpUserId: string,
): Promise<boolean> {
  const strThisFuncName = EditRegionFldsEx_CheckRegionFldsUp.name;
  const strAction = 'CheckRegionFldsUp';
  const strUrl = EditRegionFldsEx_GetWebApiUrl(editRegionFldsEx_Controller, strAction);
  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strRegionId,
      strViewId,
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
        editRegionFldsEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        editRegionFldsEx_ConstructorName,
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
export function EditRegionFldsEx_GetWebApiUrl(strController: string, strAction: string): string {
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
