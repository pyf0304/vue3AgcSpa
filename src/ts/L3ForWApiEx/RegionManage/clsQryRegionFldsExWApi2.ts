import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { enumValueGivingMode } from '@/ts/L0Entity/GeneCode/clsValueGivingModeEN';
import { clsCtlTypeEN, enumCtlType } from '@/ts/L0Entity/PrjInterface/clsCtlTypeEN';
import { clsQryRegionFldsEN } from '@/ts/L0Entity/RegionManage/clsQryRegionFldsEN';
import { clsQryRegionFldsENEx } from '@/ts/L0Entity/RegionManage/clsQryRegionFldsENEx';
import { enumFieldType } from '@/ts/L0Entity/Table_Field/clsFieldTypeEN';
import { clsPrjTabEN } from '@/ts/L0Entity/Table_Field/clsPrjTabEN';
import { clsvFieldTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvFieldTab_SimEN';
import { clsvPrjTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvPrjTab_SimEN';
import {
  GCVariableType_GetNameByVarTypeIdCache,
  GCVariableType_GetObjByVarTypeIdCache,
} from '@/ts/L3ForWApi/GeneCode/clsGCVariableTypeWApi';
import { GCVariable_GetObjByVarIdCache } from '@/ts/L3ForWApi/GeneCode/clsGCVariableWApi';
import { CtlType_func } from '@/ts/L3ForWApi/PrjInterface/clsCtlTypeWApi';
import { QryRegionFlds_SortFunByKey } from '@/ts/L3ForWApi/RegionManage/clsQryRegionFldsWApi';

import { TabFeatureEx_GetFuncName } from '@/ts/L3ForWApiEx/Table_Field/clsTabFeatureExWApi';
import { vFieldTab_SimEx_func } from '@/ts/L3ForWApiEx/Table_Field/clsvFieldTab_SimExWApi';
import { vPrjTab_SimEx_func } from '@/ts/L3ForWApiEx/Table_Field/clsvPrjTab_SimExWApi';
import {
  vTabFeatureFlds_SimEx_GetObjLstByTabFeatureIdCache,
  vTabFeatureFlds_SimEx_SortFun_OrderNum,
} from '@/ts/L3ForWApiEx/Table_Field/clsvTabFeatureFlds_SimExWApi';
import { vTabFeature_SimEx_GetObjByTabFeatureIdCache } from '@/ts/L3ForWApiEx/Table_Field/clsvTabFeature_SimExWApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';

import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { useviewRegionStore } from '@/store/modules/viewRegion';
import { pubComboEN } from '@/ts/components/pubComboEN';
import { vFieldTab_Sim_GetNameByFldIdCache } from '@/ts/L3ForWApi/Table_Field/clsvFieldTab_SimWApi';

export const qryRegionFldsEx_Controller = 'QryRegionFldsExApi';
export const qryRegionFldsEx_ConstructorName = 'qryRegionFldsEx';

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:潘以锋
 * 日期:00-00-00
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function QryRegionFldsEx_FuncMapByFldName(
  strFldName: string,
  objQryRegionFldsEx: clsQryRegionFldsENEx,
) {
  const strThisFuncName = QryRegionFldsEx_FuncMapByFldName.name;
  let strMsg = '';
  //如果是本表中字段，不需要映射
  const arrFldName = clsQryRegionFldsEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsQryRegionFldsENEx.con_Event:
      return QryRegionFldsEx_FuncMap_Event(objQryRegionFldsEx);

    case clsQryRegionFldsENEx.con_FldNameV2:
      return QryRegionFldsEx_FuncMap_FldNameV2(objQryRegionFldsEx);

    case clsQryRegionFldsENEx.con_TabName:
      return QryRegionFldsEx_FuncMap_TabName(objQryRegionFldsEx);
    case clsQryRegionFldsENEx.con_FldName:
      return QryRegionFldsEx_FuncMap_FldName(objQryRegionFldsEx);
    case clsQryRegionFldsENEx.con_CtlTypeName:
      return QryRegionFldsEx_FuncMap_CtlTypeName(objQryRegionFldsEx);
    case clsQryRegionFldsENEx.con_TabId:
      return QryRegionFldsEx_FuncMap_TabId(objQryRegionFldsEx);
    case clsQryRegionFldsENEx.con_OutFldName:
      return QryRegionFldsEx_FuncMap_OutFldName(objQryRegionFldsEx);
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
 * @param objQryRegionFldsS:源对象
 **/
export async function QryRegionFldsEx_FuncMap_CtlTypeName(objQryRegionFlds: clsQryRegionFldsENEx) {
  const strThisFuncName = QryRegionFldsEx_FuncMap_CtlTypeName.name;
  try {
    if (IsNullOrEmpty(objQryRegionFlds.ctlTypeName) == true) {
      const CtlType_CtlTypeId = objQryRegionFlds.ctlTypeId;
      const CtlType_CtlTypeName = await CtlType_func(
        clsCtlTypeEN.con_CtlTypeId,
        clsCtlTypeEN.con_CtlTypeName,
        CtlType_CtlTypeId,
      );
      objQryRegionFlds.ctlTypeName = CtlType_CtlTypeName;
      let objGCVariable;
      let ds_TabName;
      let objTabFeature;
      let objGCVariableType;
      switch (CtlType_CtlTypeId) {
        case enumCtlType.DropDownList_06:
          ds_TabName = await vPrjTab_SimEx_func(
            clsPrjTabEN.con_TabId,
            clsPrjTabEN.con_TabName,
            objQryRegionFlds.dsTabId,
          );
          //if (IsNullOrEmpty(objQryRegionFlds.tabFeatureId4Ddl) == true) {
          //    const DS_DataValueFieldName = await vFieldTab_SimEx_func(clsFieldTabEN.con_FldId, clsFieldTabEN.con_FldName, objQryRegionFlds.ds_DataValueFieldId, clsPrivateSessionStorage.cmPrjId);
          //    const DS_DataTextFieldName = await vFieldTab_SimEx_func(clsFieldTabEN.con_FldId, clsFieldTabEN.con_FldName, objQryRegionFlds.ds_DataTextFieldId, clsPrivateSessionStorage.cmPrjId);

          //    objQryRegionFlds.ctlTypeName = Format("Ddl-绑定:<br/>表: {0}<br/>值: {1}<br/>文本: {2}",
          //        ds_TabName, DS_DataValueFieldName, DS_DataTextFieldName);
          //}
          //else {
          if (IsNullOrEmpty(objQryRegionFlds.tabFeatureId4Ddl) == false) {
            objTabFeature = await vTabFeature_SimEx_GetObjByTabFeatureIdCache(
              objQryRegionFlds.tabFeatureId4Ddl,
              clsPrivateSessionStorage.cmPrjId,
            );
            if (objTabFeature == null) {
              const strMsg = Format(
                '在项目:[{0}]中，表功能Id:[{1}]没有相应功能，请检查！',
                clsPrivateSessionStorage.currSelPrjName,
                objQryRegionFlds.tabFeatureId4Ddl,
              );
              console.error(strMsg);
              alert(strMsg);
              return;
            }
            const objFuncName = await TabFeatureEx_GetFuncName(objTabFeature);
            objTabFeature.funcNameJs = objFuncName.funcNameJs;
            const strConditionStr = await QryRegionFldsEx_GetConditionShowStr(objQryRegionFlds);
            objQryRegionFlds.ctlTypeName = Format(
              "<span class='text-secondary  font-weight-bold'>Ddl-绑定: </span><br/><span class='text-secondary b'>表:<span class='text-primary'>{0}</span><br/><span class='text-secondary b'>函数: </span><span class='text-primary'>{1}</span><br/><span class='text-secondary b'>条件: </span><div class='text-primary'>{2}</div>",
              ds_TabName,
              objTabFeature.funcNameJs,
              strConditionStr,
            );
          }
          //}
          break;
        case enumCtlType.ViewVariable_38:
          objGCVariable = await GCVariable_GetObjByVarIdCache(objQryRegionFlds.varId);
          if (objGCVariable == null) break;
          objGCVariableType = await GCVariableType_GetObjByVarTypeIdCache(objGCVariable.varTypeId);
          if (objGCVariableType == null) break;
          objQryRegionFlds.ctlTypeName = Format(
            "<span class='text-secondary  font-weight-bold'>界面变量:</span><br/><span class='text-secondary b'>{0}:  </span><span class='text-primary'>{1}</span>",
            objGCVariableType.varTypeName,
            objGCVariable.varName,
          );
          break;
        // case enumCtlType.sessionStorage_40:
        //   objGCVariable = await GCVariable_GetObjByVarIdCache(objQryRegionFlds.varId);
        //   if (objGCVariable == null) break;
        //   objGCVariableType = await GCVariableType_GetObjByVarTypeIdCache(objGCVariable.varTypeId);
        //   if (objGCVariableType == null) break;
        //   objQryRegionFlds.ctlTypeName = Format(
        //     "<span class='text-secondary  font-weight-bold'>sessionStorage:</span><br/><span class='text-secondary b'>{0}:  </span><span class='text-primary'>{1}</span>",
        //     objGCVariableType.varTypeName,
        //     objGCVariable.varName,
        //   );
        //   break;
        // case enumCtlType.CacheClassifyField_37:
        //   objGCVariable = await GCVariable_GetObjByVarIdCache(objQryRegionFlds.varId);
        //   if (objGCVariable == null) break;
        //   objGCVariableType = await GCVariableType_GetObjByVarTypeIdCache(objGCVariable.varTypeId);
        //   if (objGCVariableType == null) break;
        //   objQryRegionFlds.ctlTypeName = Format(
        //     "<span class='text-secondary  font-weight-bold'>缓存分类字段:</span><br/><span class='text-secondary b'>{0}: </span><span class='text-primary'>{1}</span>",
        //     objGCVariableType.varTypeName,
        //     objGCVariable.varName,
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
      qryRegionFldsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 *  函数功能:根据查询区字段信息获取相应的条件串
 **/
export async function QryRegionFldsEx_GetConditionShowStr(
  objQryRegionFlds: clsQryRegionFldsEN,
): Promise<string> {
  const strTabFeatureId4Ddl = objQryRegionFlds.tabFeatureId4Ddl;
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
    strVarIdCond1 = objQryRegionFlds.varIdCond1;
    strVarIdCond2 = objQryRegionFlds.varIdCond2;
    if (IsNullOrEmpty(strVarIdCond1) == false && strVarIdCond1 != '0') {
      objVarIdCond1 = await GCVariable_GetObjByVarIdCache(strVarIdCond1);
      if (objVarIdCond1 != null) {
        const strVarTypeName = await GCVariableType_GetNameByVarTypeIdCache(
          objVarIdCond1.varTypeId,
        );
        strVarName_Cond1 = Format('[{0}]{1}', strVarTypeName, objVarIdCond1.varName);
      }
    }
    if (IsNullOrEmpty(strVarIdCond2) == false && strVarIdCond2 != '0') {
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
    strVarIdCond1 = objQryRegionFlds.varIdCond1;
    //strvarIdCond2 = objQryRegionFlds.varIdCond2;
    if (IsNullOrEmpty(strVarIdCond1) == false && strVarIdCond1 != '0') {
      objVarIdCond1 = await GCVariable_GetObjByVarIdCache(strVarIdCond1);
      if (objVarIdCond1 != null) {
        const strVarTypeName = await GCVariableType_GetNameByVarTypeIdCache(
          objVarIdCond1.varTypeId,
        );
        strVarName_Cond1 = Format('[{0}]{1}', strVarTypeName, objVarIdCond1.varName);
      }
    }
    //if (IsNullOrEmpty(strvarIdCond2) == false) {
    //    objVarIdCond2 = await GCVariable_GetObjByvarIdCache(strvarIdCond2, strPrjId);
    //    if (objVarIdCond2 != null) {
    //        const strVarTypeName = await GCVariableType_GetNameByVarTypeIdCache(objVarIdCond2.varTypeId);
    //        strvarName_Cond2 = Format("[{0}]{1}", strVarTypeName, objVarIdCond2.varName);
    //    }
    //}
    strConditionStr += Format('1、{0}<-{1}', strFldNameCond1, strVarName_Cond1);
    //strConditionStr += Format("<br/>    2、{0}<-{1}", strFldNameCond2, strvarName_Cond2);
  } else {
    strConditionStr += Format('[无]');
  }
  return strConditionStr;
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objQryRegionFldsS:源对象
 **/
export async function QryRegionFldsEx_FuncMap_Event(objQryRegionFlds: clsQryRegionFldsENEx) {
  const strThisFuncName = QryRegionFldsEx_FuncMap_Event.name;
  try {
    if (IsNullOrEmpty(objQryRegionFlds.event) == true) {
      let strClickEvent = '';
      let strChangeEvent = '';
      if (IsNullOrEmpty(objQryRegionFlds.clickEvent) == false) {
        strClickEvent = Format('单击<br/>', objQryRegionFlds.clickEvent);
      }
      if (IsNullOrEmpty(objQryRegionFlds.changeEvent) == false) {
        strChangeEvent = Format('选择', objQryRegionFlds.changeEvent);
      }
      objQryRegionFlds.event = Format('{0}{1}', strClickEvent, strChangeEvent);
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000087)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qryRegionFldsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objQryRegionFldsS:源对象
 **/
export async function QryRegionFldsEx_FuncMap_FldNameV2(objQryRegionFlds: clsQryRegionFldsENEx) {
  const strThisFuncName = QryRegionFldsEx_FuncMap_FldNameV2.name;
  try {
    if (IsNullOrEmpty(objQryRegionFlds.fldNameV2) == true) {
      if (IsNullOrEmpty(objQryRegionFlds.fldName) == true)
        await QryRegionFldsEx_FuncMapByFldName(clsQryRegionFldsENEx.con_FldName, objQryRegionFlds);

      if (IsNullOrEmpty(objQryRegionFlds.tabName) == true)
        await QryRegionFldsEx_FuncMapByFldName(clsQryRegionFldsENEx.con_TabName, objQryRegionFlds);
      if (IsNullOrEmpty(objQryRegionFlds.outFldName) == true)
        await QryRegionFldsEx_FuncMapByFldName(
          clsQryRegionFldsENEx.con_OutFldName,
          objQryRegionFlds,
        );
      if (IsNullOrEmpty(objQryRegionFlds.outFldId) == false) objQryRegionFlds.isUseFunc = true;
      if (IsNullOrEmpty(objQryRegionFlds.outFldName) == false) {
        objQryRegionFlds.fldNameV2 = Format(
          '{0}({1})4func<br/>输出:{2}',
          objQryRegionFlds.fldName,
          objQryRegionFlds.labelCaption,
          objQryRegionFlds.outFldName,
        );
      } else {
        objQryRegionFlds.fldNameV2 = Format(
          '{0}({1})',
          objQryRegionFlds.fldName,
          objQryRegionFlds.labelCaption,
        );
      }
      let strClickEvent = '';
      if (IsNullOrEmpty(objQryRegionFlds.clickEvent) == false) {
        strClickEvent = Format('单击：{0}<br/>', objQryRegionFlds.clickEvent);
      }
      let strChangeEvent = '';
      if (IsNullOrEmpty(objQryRegionFlds.changeEvent) == false) {
        strChangeEvent = Format('选择：{0}', objQryRegionFlds.changeEvent);
      }
      //let strOutFldName = objQryRegionFlds.outFldName;
      //if (IsNullOrEmpty(strOutFldName)) strOutFldName = objQryRegionFlds.dataPropertyName;

      let strTemp = Format(
        '{0}({1})<br/>{2}{3}',
        objQryRegionFlds.fldName,
        objQryRegionFlds.labelCaption,
        strClickEvent,
        strChangeEvent,
      );
      if (IsNullOrEmpty(objQryRegionFlds.outFldName) == false) {
        strTemp = Format(
          '{0}({1})<br/>输出:{2}<br/>{3}{4}',
          objQryRegionFlds.fldName,
          objQryRegionFlds.labelCaption,
          objQryRegionFlds.outFldName,
          strClickEvent,
          strChangeEvent,
        );
      }
      strTemp = strTemp.replace('<br/><br/>', '<br/>');
      const intLastBr = strTemp.lastIndexOf('<br/>');
      if (intLastBr == strTemp.length - 5) {
        strTemp = strTemp.substring(0, intLastBr);
      }
      objQryRegionFlds.fldNameV2 = strTemp;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000087)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qryRegionFldsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objQryRegionFldsS:源对象
 **/
export async function QryRegionFldsEx_FuncMap_TabName(objQryRegionFlds: clsQryRegionFldsENEx) {
  const strThisFuncName = QryRegionFldsEx_FuncMap_TabName.name;
  const viewRegionStore = useviewRegionStore();
  try {
    if (IsNullOrEmpty(objQryRegionFlds.tabName) == true) {
      const ViewRegion_RegionId = objQryRegionFlds.regionId;
      const ViewRegion_TabId = await viewRegionStore.getTabId(ViewRegion_RegionId);
      const vPrjTab_Sim_TabId = ViewRegion_TabId;
      const vPrjTab_Sim_TabName = await vPrjTab_SimEx_func(
        clsvPrjTab_SimEN.con_TabId,
        clsvPrjTab_SimEN.con_TabName,
        vPrjTab_Sim_TabId,
      );
      objQryRegionFlds.tabName = vPrjTab_Sim_TabName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000094)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qryRegionFldsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objQryRegionFldsS:源对象
 **/
export async function QryRegionFldsEx_FuncMap_FldName(objQryRegionFlds: clsQryRegionFldsENEx) {
  const strThisFuncName = QryRegionFldsEx_FuncMap_FldName.name;
  try {
    if (IsNullOrEmpty(objQryRegionFlds.fldName) == true) {
      const vFieldTab_Sim_FldId = objQryRegionFlds.fldId;
      const vFieldTab_Sim_FldName = await vFieldTab_SimEx_func(
        clsvFieldTab_SimEN.con_FldId,
        clsvFieldTab_SimEN.con_FldName,
        vFieldTab_Sim_FldId,
        clsPrivateSessionStorage.currSelPrjId,
      );
      objQryRegionFlds.fldName = vFieldTab_Sim_FldName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000087)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qryRegionFldsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objQryRegionFldsS:源对象
 **/
export async function QryRegionFldsEx_FuncMap_TabId(objQryRegionFlds: clsQryRegionFldsENEx) {
  const strThisFuncName = QryRegionFldsEx_FuncMap_TabId.name;
  const viewRegionStore = useviewRegionStore();
  try {
    if (IsNullOrEmpty(objQryRegionFlds.tabId) == true) {
      const ViewRegion_RegionId = objQryRegionFlds.regionId;
      const ViewRegion_TabId = await viewRegionStore.getTabId(ViewRegion_RegionId);
      objQryRegionFlds.tabId = ViewRegion_TabId;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000250)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qryRegionFldsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objQryRegionFldsS:源对象
 **/
export async function QryRegionFldsEx_FuncMap_OutFldName(objQryRegionFlds: clsQryRegionFldsENEx) {
  const strThisFuncName = QryRegionFldsEx_FuncMap_OutFldName.name;
  try {
    if (IsNullOrEmpty(objQryRegionFlds.outFldId) == true) {
      objQryRegionFlds.outFldName = '';
      return;
    }
    if (IsNullOrEmpty(objQryRegionFlds.outFldName) == true) {
      const vFieldTab_Sim_FldId = objQryRegionFlds.outFldId;

      const vFieldTab_Sim_FldName = await vFieldTab_Sim_GetNameByFldIdCache(
        vFieldTab_Sim_FldId,
        clsPrivateSessionStorage.currSelPrjId,
      );
      objQryRegionFlds.outFldName = vFieldTab_Sim_FldName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000176)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qryRegionFldsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

export function QryRegionFldsEx_SortFunByInUseAndSeq(
  a: clsQryRegionFldsENEx,
  b: clsQryRegionFldsENEx,
): number {
  if (a.inUse == b.inUse) return a.seqNum - b.seqNum;
  else {
    if (a.inUse == true) return -1;
    else return 1;
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
export function QryRegionFldsEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  // const strThisFuncName = 'SortFunByKey';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsQryRegionFldsENEx.con_TabName:
        return (a: clsQryRegionFldsENEx, b: clsQryRegionFldsENEx) => {
          return a.tabName.localeCompare(b.tabName);
        };
      case clsQryRegionFldsENEx.con_FldName:
        return (a: clsQryRegionFldsENEx, b: clsQryRegionFldsENEx) => {
          return a.fldName.localeCompare(b.fldName);
        };
      case clsQryRegionFldsENEx.con_CtlTypeName:
        return (a: clsQryRegionFldsENEx, b: clsQryRegionFldsENEx) => {
          return a.ctlTypeName.localeCompare(b.ctlTypeName);
        };
      case clsQryRegionFldsENEx.con_Event:
        return (a: clsQryRegionFldsENEx, b: clsQryRegionFldsENEx) => {
          return a.event.localeCompare(b.event);
        };
      case clsQryRegionFldsENEx.con_FldNameV2:
        return (a: clsQryRegionFldsENEx, b: clsQryRegionFldsENEx) => {
          return a.fldNameV2.localeCompare(b.fldNameV2);
        };
      default:
        return QryRegionFlds_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsQryRegionFldsENEx.con_TabName:
        return (a: clsQryRegionFldsENEx, b: clsQryRegionFldsENEx) => {
          return b.tabName.localeCompare(a.tabName);
        };
      case clsQryRegionFldsENEx.con_FldName:
        return (a: clsQryRegionFldsENEx, b: clsQryRegionFldsENEx) => {
          return b.fldName.localeCompare(a.fldName);
        };
      case clsQryRegionFldsENEx.con_CtlTypeName:
        return (a: clsQryRegionFldsENEx, b: clsQryRegionFldsENEx) => {
          return b.ctlTypeName.localeCompare(a.ctlTypeName);
        };
      case clsQryRegionFldsENEx.con_Event:
        return (a: clsQryRegionFldsENEx, b: clsQryRegionFldsENEx) => {
          return b.event.localeCompare(a.event);
        };
      case clsQryRegionFldsENEx.con_FldNameV2:
        return (a: clsQryRegionFldsENEx, b: clsQryRegionFldsENEx) => {
          return b.fldNameV2.localeCompare(a.fldNameV2);
        };
      default:
        return QryRegionFlds_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

export function QryRegionFldsEx_CopyToEx(
  objQryRegionFldsENS: clsQryRegionFldsEN,
): clsQryRegionFldsENEx {
  const objQryRegionFldsENT = new clsQryRegionFldsENEx();
  try {
    ObjectAssign(objQryRegionFldsENT, objQryRegionFldsENS);
    return objQryRegionFldsENT;
  } catch (e: any) {
    const strMsg = Format('(errid:WiTsCs0011)Copy表对象数据出错,${e}.');
    console.error(strMsg);
    alert(strMsg);
    return objQryRegionFldsENT;
  }
}

/// <summary>
/// 重序
/// (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
/// </summary>
/// <param name = "strRegionId">区域Id</param>
/// <returns>获取的相应对象列表</returns>
export async function QryRegionFldsEx_ReOrder(strRegionId: string): Promise<void> {
  const strThisFuncName = QryRegionFldsEx_ReOrder.name;
  const strAction = 'ReOrder';
  const strUrl = GetWebApiUrl(qryRegionFldsEx_Controller, strAction);
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
        qryRegionFldsEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        qryRegionFldsEx_ConstructorName,
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
export async function QryRegionFldsEx_AdjustSequenceNumber(
  strDirect: string,
  lngMid: number,
): Promise<boolean> {
  const strThisFuncName = QryRegionFldsEx_AdjustSequenceNumber.name;
  const strAction = 'AdjustSequenceNumber';
  const strUrl = GetWebApiUrl(qryRegionFldsEx_Controller, strAction);
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
        qryRegionFldsEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        qryRegionFldsEx_ConstructorName,
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
/// 导入相关字段
/// (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
/// </summary>
/// <param name = "strRegionId">区域Id</param>
/// <param name = "strPrjId">工程Id</param>
/// <param name = "strUserId">用户Id</param>
/// <returns>获取的相应对象列表</returns>
export async function QryRegionFldsEx_ImportRelaFlds(
  strRegionId: string,
  strPrjId: string,
  strUserId: string,
): Promise<boolean> {
  const strThisFuncName = QryRegionFldsEx_ImportRelaFlds.name;
  const strAction = 'ImportRelaFlds';
  const strUrl = GetWebApiUrl(qryRegionFldsEx_Controller, strAction);
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
        qryRegionFldsEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        qryRegionFldsEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

export function QryRegionFldsEx_CopyToPubComboEx(
  objQryRegionFldsENS: clsQryRegionFldsEN,
): pubComboEN {
  const objpubComboEN = new pubComboEN();
  try {
    ObjectAssign(objpubComboEN, objQryRegionFldsENS);
    return objpubComboEN;
  } catch (e: any) {
    const strMsg = Format('(errid:WiTsCs0011)Copy表对象ToPubComboEN,${e}.');
    console.error(strMsg);
    alert(strMsg);
    return objpubComboEN;
  }
}
