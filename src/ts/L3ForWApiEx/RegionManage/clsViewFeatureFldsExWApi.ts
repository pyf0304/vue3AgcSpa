import axios from 'axios';
import { vFieldTab_SimEx_CopyToEx } from '../Table_Field/clsvFieldTab_SimExWApi';

import {
  vTabFeatureFlds_SimEx_GetObjLstByTabFeatureIdCache,
  vTabFeatureFlds_SimEx_SortFun_OrderNum,
} from '../Table_Field/clsvTabFeatureFlds_SimExWApi';
import { FeatureRegionFlds_func } from '../../L3ForWApi/RegionManage/clsFeatureRegionFldsWApi.js';
import { Storage } from '@/utils/Storage';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { clsViewFeatureFldsEN } from '@/ts/L0Entity/RegionManage/clsViewFeatureFldsEN';
import { clsViewFeatureFldsENEx } from '@/ts/L0Entity/RegionManage/clsViewFeatureFldsENEx';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { clsFieldTypeEN, enumFieldType } from '@/ts/L0Entity/Table_Field/clsFieldTypeEN';

import { enumValueGivingMode } from '@/ts/L0Entity/GeneCode/clsValueGivingModeEN';
import {
  ViewFeatureFlds_GetObjLstCache,
  ViewFeatureFlds_SortFunByKey,
} from '@/ts/L3ForWApi/RegionManage/clsViewFeatureFldsWApi';
import { GCVariable_GetObjByVarIdCache } from '@/ts/L3ForWApi/GeneCode/clsGCVariableWApi';
import { GCVariableType_GetNameByVarTypeIdCache } from '@/ts/L3ForWApi/GeneCode/clsGCVariableTypeWApi';
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { CtlType_GetObjByCtlTypeIdCache } from '@/ts/L3ForWApi/PrjInterface/clsCtlTypeWApi';
import { GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { clsFeatureRegionFldsEN } from '@/ts/L0Entity/RegionManage/clsFeatureRegionFldsEN';

import { clsPrjFeatureEN } from '@/ts/L0Entity/PrjFunction/clsPrjFeatureEN';

import { DataTypeAbbr_func } from '@/ts/L3ForWApi/SysPara/clsDataTypeAbbrWApi';
import { clsDataTypeAbbrEN } from '@/ts/L0Entity/SysPara/clsDataTypeAbbrEN';
import { FieldType_func } from '@/ts/L3ForWApi/Table_Field/clsFieldTypeWApi';
import { usevFieldTab_Sim2Store } from '@/store/modules/vFieldTab_Sim2';
import { pubComboEN } from '@/ts/components/pubComboEN';
import {
  vFieldTab_Sim_GetNameByFldIdCache,
  vFieldTab_Sim_GetObjByFldIdCache,
} from '@/ts/L3ForWApi/Table_Field/clsvFieldTab_SimWApi';
import { vPrjFeatureSim_func } from '@/ts/L3ForWApi/PrjFunction/clsvPrjFeatureSimWApi';

export const viewFeatureFldsEx_Controller = 'ViewFeatureFldsExApi';
export const viewFeatureFldsEx_ConstructorName = 'viewFeatureFldsEx';

/// <summary>
/// 把同一个类的对象,复制到该类的扩展对象
/// (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_CopyToEx)
/// </summary>
/// <param name = "objViewFeatureFldsENS">源对象</param>
/// <param name = "objViewFeatureFldsENT">目标对象</param>
export function ViewFeatureFldsEx_CopyToEx(
  objViewFeatureFldsENS: clsViewFeatureFldsEN,
): clsViewFeatureFldsENEx {
  const objViewFeatureFldsENT = new clsViewFeatureFldsENEx();
  try {
    ObjectAssign(objViewFeatureFldsENT, objViewFeatureFldsENS);
    return objViewFeatureFldsENT;
  } catch (e: any) {
    const strMsg = Format('(errid:WiTsCs0011)Copy表对象数据出错,${e}.');
    console.error(strMsg);
    alert(strMsg);
    return objViewFeatureFldsENT;
  }
}

/// <summary>
/// 根据条件对象, 从缓存的对象列表中获取子集.
/// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
/// </summary>
/// <param name = "objlngmId_Cond">条件对象</param>
/// <returns>对象列表子集</returns>
export async function ViewFeatureFldsEx_GetObjLstByViewFeatureIdCache(
  strViewFeatureId: string,
  strCmPrjId: string,
) {
  console.log(strCmPrjId);
  try {
    const arrViewFeatureFldsObjLstCache: Array<clsViewFeatureFldsEN> =
      await ViewFeatureFlds_GetObjLstCache(strViewFeatureId);

    const arrViewFeatureFlds_Sel: Array<clsViewFeatureFldsEN> =
      arrViewFeatureFldsObjLstCache.filter((x) => x.viewFeatureId == strViewFeatureId);

    return arrViewFeatureFlds_Sel;
  } catch (e: any) {
    const strMsg = `错误:[${e}]. \n根据viewFeatureId:[${strViewFeatureId}]缓存对象列表中获取对象列表不成功!`;
    throw new Error(strMsg);
  }
  return new Array<clsViewFeatureFldsEN>();
}
/**
 * 编辑记录存盘到数据表中。如果存在相关记录就修改，不存在就添加
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param objViewFeatureFlds: 需要修改的实体对象
 * @returns 获取的相应对象列表
 */
export async function ViewFeatureFldsEx_EditRecordEx(
  objViewFeatureFlds: clsViewFeatureFldsEN,
): Promise<boolean> {
  const strThisFuncName = 'ViewFeatureFldsEx_EditRecordEx';
  const strAction = 'EditRecordEx';
  const strUrl = GetWebApiUrl(viewFeatureFldsEx_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objViewFeatureFlds, config);
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        viewFeatureFldsEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewFeatureFldsEx_ConstructorName,
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
 *  函数功能:根据查询区字段信息获取相应的条件串
 **/
export async function ViewFeatureFldsEx_GetConditionShowStr(
  objViewFeatureFlds: clsViewFeatureFldsEN,
): Promise<string> {
  const strTabFeatureId4Ddl = objViewFeatureFlds.tabFeatureId4Ddl;
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
    strVarIdCond1 = objViewFeatureFlds.varIdCond1;
    strVarIdCond2 = objViewFeatureFlds.varIdCond2;
    if (IsNullOrEmpty(strVarIdCond1) == false) {
      objVarIdCond1 = await GCVariable_GetObjByVarIdCache(strVarIdCond1);
      if (objVarIdCond1 != null) {
        const strVarTypeName = await GCVariableType_GetNameByVarTypeIdCache(
          objVarIdCond1.varTypeId,
        );
        strVarName_Cond1 = Format('[{0}]{1}', strVarTypeName, objVarIdCond1.varName);
      }
    }
    if (IsNullOrEmpty(strVarIdCond2) == false) {
      objVarIdCond2 = await GCVariable_GetObjByVarIdCache(strVarIdCond2);
      if (objVarIdCond2 != null) {
        const strVarTypeName = await GCVariableType_GetNameByVarTypeIdCache(
          objVarIdCond2.varTypeId,
        );
        strVarName_Cond2 = Format('[{0}]{1}', strVarTypeName, objVarIdCond2.varName);
      }
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
    strVarIdCond1 = objViewFeatureFlds.varIdCond1;
    //strVarIdCond2 = objViewFeatureFlds.varIdCond2;
    if (IsNullOrEmpty(strVarIdCond1) == false) {
      objVarIdCond1 = await GCVariable_GetObjByVarIdCache(strVarIdCond1);
      if (objVarIdCond1 != null) {
        const strVarTypeName = await GCVariableType_GetNameByVarTypeIdCache(
          objVarIdCond1.varTypeId,
        );
        strVarName_Cond1 = Format('[{0}]{1}', strVarTypeName, objVarIdCond1.varName);
      }
    }
    //if (IsNullOrEmpty(strVarIdCond2) == false) {
    //    objVarIdCond2 = await GCVariable_GetObjByVarIdCache(strVarIdCond2, strPrjId);
    //    if (objVarIdCond2 != null) {
    //        const strVarTypeName = await GCVariableType_GetNameByVarTypeIdCache(objVarIdCond2.varTypeId);
    //        strVarName_Cond2 = Format("[{0}]{1}", strVarTypeName, objVarIdCond2.varName);
    //    }
    //}
    strConditionStr += Format('1、{0}<-{1}', strFldNameCond1, strVarName_Cond1);
    //strConditionStr += Format("<br/>    2、{0}<-{1}", strFldNameCond2, strVarName_Cond2);
  } else {
    strConditionStr += Format('[无]');
  }
  return strConditionStr;
}

export async function ViewFeatureFldsEx_GetObjExLstByRegionIdCache(strViewFeatureId: string) {
  const strThisFuncName = ViewFeatureFldsEx_GetObjExLstByRegionIdCache.name;
  //const strCondition = Format("{0} in (Select {0} From {1} where {2}={3})",
  //    clsViewFeatureFldsEN.con_ViewFeatureId,
  //    clsFeatureRegionFldsEN._CurrTabName,
  //    clsFeatureRegionFldsEN.con_RegionId, strRegionId);

  const arrObjLst0 = await ViewFeatureFlds_GetObjLstCache(strViewFeatureId);
  const arrObjLst = arrObjLst0.map(ViewFeatureFldsEx_CopyToEx);

  // const strPrjId_p = await CMProjectEx_GetPrjIdByCmPrjIdCache(strCmPrjId);

  for (const objvViewFeatureFldsENEx of arrObjLst) {
    if (objvViewFeatureFldsENEx.releFldId != '') {
      const objvFieldTab_Sim = await vFieldTab_Sim_GetObjByFldIdCache(
        objvViewFeatureFldsENEx.releFldId,
        clsPrivateSessionStorage.currSelPrjId,
      );
      const objvFieldTab_SimEx = vFieldTab_SimEx_CopyToEx(objvFieldTab_Sim);
      if (objvFieldTab_SimEx != null) {
        objvViewFeatureFldsENEx.objvFieldTab_SimENEx = vFieldTab_SimEx_CopyToEx(objvFieldTab_SimEx);
      }
    }
    if (IsNullOrEmpty(objvViewFeatureFldsENEx.ctlTypeId)) {
      const strMsg = Format(
        '界面功能字段的控件类型为空！功能：{0},字段：{1}. (In {2}.{3})',
        objvViewFeatureFldsENEx.featureName,
        objvViewFeatureFldsENEx.fldName,
        viewFeatureFldsEx_ConstructorName,
        strThisFuncName,
      );
      throw new Error(strMsg);
    }
    const obj = await CtlType_GetObjByCtlTypeIdCache(objvViewFeatureFldsENEx.ctlTypeId);
    if (obj != null) {
      objvViewFeatureFldsENEx.objCtlType = obj;
    }
  }
  return arrObjLst;
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objViewFeatureFldsS:源对象
 **/
export async function ViewFeatureFldsEx_FuncMapFeatureName(
  objViewFeatureFlds: clsViewFeatureFldsENEx,
) {
  const strThisFuncName = ViewFeatureFldsEx_FuncMapFeatureName.name;
  try {
    if (IsNullOrEmpty(objViewFeatureFlds.featureName) == true) {
      const FeatureRegionFldsViewFeatureId = objViewFeatureFlds.viewFeatureId;
      const FeatureRegionFldsFeatureId = await FeatureRegionFlds_func(
        clsFeatureRegionFldsEN.con_ViewFeatureId,
        clsFeatureRegionFldsEN.con_FeatureId,
        FeatureRegionFldsViewFeatureId,
        objViewFeatureFlds.regionId,
      );
      const PrjFeatureFeatureId = FeatureRegionFldsFeatureId;
      const PrjFeatureFeatureName = await vPrjFeatureSim_func(
        clsPrjFeatureEN.con_FeatureId,
        clsPrjFeatureEN.con_FeatureName,
        PrjFeatureFeatureId,
      );
      objViewFeatureFlds.featureName = PrjFeatureFeatureName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000326)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      viewFeatureFldsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objViewFeatureFldsS:源对象
 **/
export async function ViewFeatureFldsEx_FuncMapFldName(objViewFeatureFlds: clsViewFeatureFldsENEx) {
  const strThisFuncName = ViewFeatureFldsEx_FuncMapFldName.name;
  try {
    if (IsNullOrEmpty(objViewFeatureFlds.fldName) == true) {
      const vFieldTabSimFldId = objViewFeatureFlds.releFldId;
      const vFieldTabSimFldName = await vFieldTab_Sim_GetNameByFldIdCache(
        vFieldTabSimFldId,
        clsPrivateSessionStorage.currSelPrjId,
      );
      objViewFeatureFlds.fldName = vFieldTabSimFldName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000336)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      viewFeatureFldsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objViewFeatureFldsS:源对象
 **/
export async function ViewFeatureFldsEx_FuncMapFeatureId(
  objViewFeatureFlds: clsViewFeatureFldsENEx,
) {
  const strThisFuncName = ViewFeatureFldsEx_FuncMapFeatureId.name;
  try {
    if (IsNullOrEmpty(objViewFeatureFlds.featureId) == true) {
      const FeatureRegionFldsViewFeatureId = objViewFeatureFlds.viewFeatureId;
      const FeatureRegionFldsFeatureId = await FeatureRegionFlds_func(
        clsFeatureRegionFldsEN.con_ViewFeatureId,
        clsFeatureRegionFldsEN.con_FeatureId,
        FeatureRegionFldsViewFeatureId,
        objViewFeatureFlds.regionId,
      );
      objViewFeatureFlds.featureId = FeatureRegionFldsFeatureId;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000353)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      viewFeatureFldsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objViewFeatureFldsS:源对象
 **/
export async function ViewFeatureFldsEx_FuncMapCsType(objViewFeatureFlds: clsViewFeatureFldsENEx) {
  const strThisFuncName = ViewFeatureFldsEx_FuncMapCsType.name;
  const vFieldTab_Sim2Store = usevFieldTab_Sim2Store();
  try {
    if (IsNullOrEmpty(objViewFeatureFlds.csType) == true) {
      const vFieldTabSimFldId = objViewFeatureFlds.releFldId;
      const vFieldTabSimDataTypeId = await vFieldTab_Sim2Store.getDataTypeId(vFieldTabSimFldId);
      const DataTypeAbbrDataTypeId = vFieldTabSimDataTypeId;
      const DataTypeAbbrCsType = await DataTypeAbbr_func(
        clsDataTypeAbbrEN.con_DataTypeId,
        clsDataTypeAbbrEN.con_CsType,
        DataTypeAbbrDataTypeId,
      );
      objViewFeatureFlds.csType = DataTypeAbbrCsType;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000307)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      viewFeatureFldsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objViewFeatureFldsS:源对象
 **/
export async function ViewFeatureFldsEx_FuncMapCaption(objViewFeatureFlds: clsViewFeatureFldsENEx) {
  const strThisFuncName = ViewFeatureFldsEx_FuncMapCaption.name;
  const vFieldTab_Sim2Store = usevFieldTab_Sim2Store();
  try {
    if (IsNullOrEmpty(objViewFeatureFlds.caption) == true) {
      const vFieldTabSimFldId = objViewFeatureFlds.releFldId;
      const vFieldTabSimCaption = await vFieldTab_Sim2Store.getCaption(vFieldTabSimFldId);
      objViewFeatureFlds.caption = vFieldTabSimCaption;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000354)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      viewFeatureFldsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objViewFeatureFldsS:源对象
 **/
export async function ViewFeatureFldsEx_FuncMapSeqNum(objViewFeatureFlds: clsViewFeatureFldsENEx) {
  const strThisFuncName = ViewFeatureFldsEx_FuncMapSeqNum.name;
  try {
    if (objViewFeatureFlds.seqNum == 0) {
      const FeatureRegionFldsViewFeatureId = objViewFeatureFlds.viewFeatureId;
      const FeatureRegionFldsSeqNum = await FeatureRegionFlds_func(
        clsFeatureRegionFldsEN.con_ViewFeatureId,
        clsFeatureRegionFldsEN.con_SeqNum,
        FeatureRegionFldsViewFeatureId,
        objViewFeatureFlds.regionId,
      );
      objViewFeatureFlds.seqNum = FeatureRegionFldsSeqNum;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000355)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      viewFeatureFldsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objViewFeatureFldsS:源对象
 **/
export async function ViewFeatureFldsEx_FuncMapGroupName(
  objViewFeatureFlds: clsViewFeatureFldsENEx,
) {
  const strThisFuncName = ViewFeatureFldsEx_FuncMapGroupName.name;
  try {
    if (IsNullOrEmpty(objViewFeatureFlds.groupName) == true) {
      const FeatureRegionFldsViewFeatureId = objViewFeatureFlds.viewFeatureId;
      const FeatureRegionFldsGroupName = await FeatureRegionFlds_func(
        clsFeatureRegionFldsEN.con_ViewFeatureId,
        clsFeatureRegionFldsEN.con_GroupName,
        FeatureRegionFldsViewFeatureId,
        objViewFeatureFlds.regionId,
      );
      objViewFeatureFlds.groupName = FeatureRegionFldsGroupName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000318)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      viewFeatureFldsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objViewFeatureFldsS:源对象
 **/
export async function ViewFeatureFldsEx_FuncMapRelaTabName(
  objViewFeatureFlds: clsViewFeatureFldsENEx,
) {
  const strThisFuncName = ViewFeatureFldsEx_FuncMapRelaTabName.name;
  try {
    if (IsNullOrEmpty(objViewFeatureFlds.relaTabName) == true) {
      const FeatureRegionFldsViewFeatureId = objViewFeatureFlds.viewFeatureId;
      const FeatureRegionFldsReleTabId = await FeatureRegionFlds_func(
        clsFeatureRegionFldsEN.con_ViewFeatureId,
        clsFeatureRegionFldsEN.con_ReleTabId,
        FeatureRegionFldsViewFeatureId,
        objViewFeatureFlds.regionId,
      );
      const vPrjTabSimTabId = FeatureRegionFldsReleTabId;
      objViewFeatureFlds.relaTabName = vPrjTabSimTabId;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000340)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      viewFeatureFldsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objViewFeatureFldsS:源对象
 **/
export async function ViewFeatureFldsEx_FuncMapDsTabName(
  objViewFeatureFlds: clsViewFeatureFldsENEx,
) {
  const strThisFuncName = ViewFeatureFldsEx_FuncMapDsTabName.name;
  try {
    if (IsNullOrEmpty(objViewFeatureFlds.dsTabName) == true) {
      const vPrjTabSimTabId = objViewFeatureFlds.dsTabId;
      objViewFeatureFlds.dsTabName = vPrjTabSimTabId;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000392)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      viewFeatureFldsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objViewFeatureFldsS:源对象
 **/
export async function ViewFeatureFldsEx_FuncMapFieldTypeName(
  objViewFeatureFlds: clsViewFeatureFldsENEx,
) {
  const strThisFuncName = ViewFeatureFldsEx_FuncMapFieldTypeName.name;
  try {
    if (IsNullOrEmpty(objViewFeatureFlds.fieldTypeName) == true) {
      const FieldTypeFieldTypeId = objViewFeatureFlds.fieldTypeId;
      const FieldTypeFieldTypeName = await FieldType_func(
        clsFieldTypeEN.con_FieldTypeId,
        clsFieldTypeEN.con_FieldTypeName,
        FieldTypeFieldTypeId,
      );
      objViewFeatureFlds.fieldTypeName = FieldTypeFieldTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000378)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      viewFeatureFldsEx_ConstructorName,
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
export function ViewFeatureFldsEx_FuncMapByFldName(
  strFldName: string,
  objViewFeatureFldsEx: clsViewFeatureFldsENEx,
) {
  const strThisFuncName = ViewFeatureFldsEx_FuncMapByFldName.name;
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsViewFeatureFldsEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsViewFeatureFldsENEx.con_FeatureName:
      return ViewFeatureFldsEx_FuncMapFeatureName(objViewFeatureFldsEx);
    case clsViewFeatureFldsENEx.con_FldName:
      return ViewFeatureFldsEx_FuncMapFldName(objViewFeatureFldsEx);
    case clsViewFeatureFldsENEx.con_FeatureId:
      return ViewFeatureFldsEx_FuncMapFeatureId(objViewFeatureFldsEx);
    case clsViewFeatureFldsENEx.con_CsType:
      return ViewFeatureFldsEx_FuncMapCsType(objViewFeatureFldsEx);
    case clsViewFeatureFldsENEx.con_Caption:
      return ViewFeatureFldsEx_FuncMapCaption(objViewFeatureFldsEx);
    case clsViewFeatureFldsENEx.con_SeqNum:
      return ViewFeatureFldsEx_FuncMapSeqNum(objViewFeatureFldsEx);
    case clsViewFeatureFldsENEx.con_GroupName:
      return ViewFeatureFldsEx_FuncMapGroupName(objViewFeatureFldsEx);
    case clsViewFeatureFldsENEx.con_FieldTypeName:
      return ViewFeatureFldsEx_FuncMapFieldTypeName(objViewFeatureFldsEx);
    case clsViewFeatureFldsENEx.con_RelaTabName:
      return ViewFeatureFldsEx_FuncMapRelaTabName(objViewFeatureFldsEx);
    case clsViewFeatureFldsENEx.con_DsTabName:
      return ViewFeatureFldsEx_FuncMapDsTabName(objViewFeatureFldsEx);
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
 * 排序函数。根据关键字字段的值进行比较
 * 作者:潘以锋
 * 日期:00-00-00
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function ViewFeatureFldsEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsViewFeatureFldsENEx.con_FeatureName:
        return (a: clsViewFeatureFldsENEx, b: clsViewFeatureFldsENEx) => {
          return a.featureName.localeCompare(b.featureName);
        };
      case clsViewFeatureFldsENEx.con_FldName:
        return (a: clsViewFeatureFldsENEx, b: clsViewFeatureFldsENEx) => {
          return a.fldName.localeCompare(b.fldName);
        };
      case clsViewFeatureFldsENEx.con_FeatureId:
        return (a: clsViewFeatureFldsENEx, b: clsViewFeatureFldsENEx) => {
          return a.featureId.localeCompare(b.featureId);
        };
      case clsViewFeatureFldsENEx.con_CsType:
        return (a: clsViewFeatureFldsENEx, b: clsViewFeatureFldsENEx) => {
          return a.csType.localeCompare(b.csType);
        };
      case clsViewFeatureFldsENEx.con_Caption:
        return (a: clsViewFeatureFldsENEx, b: clsViewFeatureFldsENEx) => {
          return a.caption.localeCompare(b.caption);
        };
      case clsViewFeatureFldsENEx.con_SeqNum:
        return (a: clsViewFeatureFldsENEx, b: clsViewFeatureFldsENEx) => {
          return a.seqNum - b.seqNum;
        };
      case clsViewFeatureFldsENEx.con_GroupName:
        return (a: clsViewFeatureFldsENEx, b: clsViewFeatureFldsENEx) => {
          return a.groupName.localeCompare(b.groupName);
        };
      case clsViewFeatureFldsENEx.con_FieldTypeName:
        return (a: clsViewFeatureFldsENEx, b: clsViewFeatureFldsENEx) => {
          return a.fieldTypeName.localeCompare(b.fieldTypeName);
        };
      case clsViewFeatureFldsENEx.con_RelaTabName:
        return (a: clsViewFeatureFldsENEx, b: clsViewFeatureFldsENEx) => {
          return a.relaTabName.localeCompare(b.relaTabName);
        };
      case clsViewFeatureFldsENEx.con_RegionId:
        return (a: clsViewFeatureFldsENEx, b: clsViewFeatureFldsENEx) => {
          return a.regionId.localeCompare(b.regionId);
        };
      case clsViewFeatureFldsENEx.con_DsTabName:
        return (a: clsViewFeatureFldsENEx, b: clsViewFeatureFldsENEx) => {
          return a.dsTabName.localeCompare(b.dsTabName);
        };

      default:
        return ViewFeatureFlds_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsViewFeatureFldsENEx.con_FeatureName:
        return (a: clsViewFeatureFldsENEx, b: clsViewFeatureFldsENEx) => {
          return b.featureName.localeCompare(a.featureName);
        };
      case clsViewFeatureFldsENEx.con_FldName:
        return (a: clsViewFeatureFldsENEx, b: clsViewFeatureFldsENEx) => {
          return b.fldName.localeCompare(a.fldName);
        };
      case clsViewFeatureFldsENEx.con_FeatureId:
        return (a: clsViewFeatureFldsENEx, b: clsViewFeatureFldsENEx) => {
          return b.featureId.localeCompare(a.featureId);
        };
      case clsViewFeatureFldsENEx.con_CsType:
        return (a: clsViewFeatureFldsENEx, b: clsViewFeatureFldsENEx) => {
          return b.csType.localeCompare(a.csType);
        };
      case clsViewFeatureFldsENEx.con_Caption:
        return (a: clsViewFeatureFldsENEx, b: clsViewFeatureFldsENEx) => {
          return b.caption.localeCompare(a.caption);
        };
      case clsViewFeatureFldsENEx.con_SeqNum:
        return (a: clsViewFeatureFldsENEx, b: clsViewFeatureFldsENEx) => {
          return b.seqNum - a.seqNum;
        };
      case clsViewFeatureFldsENEx.con_GroupName:
        return (a: clsViewFeatureFldsENEx, b: clsViewFeatureFldsENEx) => {
          return b.groupName.localeCompare(a.groupName);
        };
      case clsViewFeatureFldsENEx.con_FieldTypeName:
        return (a: clsViewFeatureFldsENEx, b: clsViewFeatureFldsENEx) => {
          return b.fieldTypeName.localeCompare(a.fieldTypeName);
        };
      case clsViewFeatureFldsENEx.con_RelaTabName:
        return (a: clsViewFeatureFldsENEx, b: clsViewFeatureFldsENEx) => {
          return b.relaTabName.localeCompare(a.relaTabName);
        };
      case clsViewFeatureFldsENEx.con_RegionId:
        return (a: clsViewFeatureFldsENEx, b: clsViewFeatureFldsENEx) => {
          return b.regionId.localeCompare(a.regionId);
        };
      case clsViewFeatureFldsENEx.con_DsTabName:
        return (a: clsViewFeatureFldsENEx, b: clsViewFeatureFldsENEx) => {
          return b.dsTabName.localeCompare(a.dsTabName);
        };

      default:
        return ViewFeatureFlds_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

export function ViewFeatureFldsEx_CopyToPubComboEx(
  objViewFeatureFldsENS: clsViewFeatureFldsEN,
): pubComboEN {
  const objpubComboEN = new pubComboEN();
  try {
    ObjectAssign(objpubComboEN, objViewFeatureFldsENS);
    return objpubComboEN;
  } catch (e: any) {
    const strMsg = Format('(errid:WiTsCs0011)Copy表对象ToPubComboEN,${e}.');
    console.error(strMsg);
    alert(strMsg);
    return objpubComboEN;
  }
}
