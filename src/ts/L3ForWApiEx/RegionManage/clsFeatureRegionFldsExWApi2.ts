import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { stuFeatureRegionFlds4Save } from '@/ts/FunClass/stuFeatureRegionFlds4Save';
import { clsFeatureRegionFldsEN } from '@/ts/L0Entity/RegionManage/clsFeatureRegionFldsEN';
import { clsFeatureRegionFldsENEx } from '@/ts/L0Entity/RegionManage/clsFeatureRegionFldsENEx';
import { GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { clsPrjFeatureEN, enumPrjFeature } from '@/ts/L0Entity/PrjFunction/clsPrjFeatureEN';
import { GCVariable_GetObjByVarIdCache } from '@/ts/L3ForWApi/GeneCode/clsGCVariableWApi';
import { clsCtlTypeEN, enumCtlType } from '@/ts/L0Entity/PrjInterface/clsCtlTypeEN';
import {
  CtlType_GetNameByCtlTypeIdCache,
  CtlType_GetObjByCtlTypeIdCache,
  CtlType_func,
} from '@/ts/L3ForWApi/PrjInterface/clsCtlTypeWApi';

import { clsPrjTabEN } from '@/ts/L0Entity/Table_Field/clsPrjTabEN';
import { vPrjTab_SimEx_func } from '@/ts/L3ForWApiEx/Table_Field/clsvPrjTab_SimExWApi';
import { css_FldDispUnitStyleEx_GetHtml4TitleContent } from '@/ts/L3ForWApiEx/CssManage/clscss_FldDispUnitStyleExWApi';
import { FieldType_GetNameByFieldTypeIdCache } from '@/ts/L3ForWApi/Table_Field/clsFieldTypeWApi';
import {
  ViewFeatureFldsEx_GetConditionShowStr,
  ViewFeatureFldsEx_GetObjLstByViewFeatureIdCache,
} from '@/ts/L3ForWApiEx/RegionManage/clsViewFeatureFldsExWApi';
import { clsvPrjTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvPrjTab_SimEN';
import { clsTabFeatureEN } from '@/ts/L0Entity/Table_Field/clsTabFeatureEN';
import { vTabFeature_Sim_func } from '@/ts/L3ForWApi/Table_Field/clsvTabFeature_SimWApi';
import {
  clsValueGivingModeEN,
  enumValueGivingMode,
} from '@/ts/L0Entity/GeneCode/clsValueGivingModeEN';
import { clsViewFeatureFldsEN } from '@/ts/L0Entity/RegionManage/clsViewFeatureFldsEN';
import { TabFeatureEx_GetFuncName } from '@/ts/L3ForWApiEx/Table_Field/clsTabFeatureExWApi';
import { vTabFeature_SimEx_GetObjByTabFeatureIdCache } from '@/ts/L3ForWApiEx/Table_Field/clsvTabFeature_SimExWApi';

import { RegionType_func } from '@/ts/L3ForWApi/RegionManage/clsRegionTypeWApi';
import { clsRegionTypeEN } from '@/ts/L0Entity/RegionManage/clsRegionTypeEN';
import { ViewImplementation_func } from '@/ts/L3ForWApi/PrjInterface/clsViewImplementationWApi';
import { clsViewImplementationEN } from '@/ts/L0Entity/PrjInterface/clsViewImplementationEN';
import { ValueGivingMode_func } from '@/ts/L3ForWApi/GeneCode/clsValueGivingModeWApi';
import { FeatureRegionFlds_SortFunByKey } from '@/ts/L3ForWApi/RegionManage/clsFeatureRegionFldsWApi';
import { useviewRegionStore } from '@/store/modules/viewRegion';
import { vFieldTab_Sim_GetNameByFldIdCache } from '@/ts/L3ForWApi/Table_Field/clsvFieldTab_SimWApi';
import {
  vPrjFeatureSim_func,
  vPrjFeatureSim_GetNameByFeatureIdCache,
} from '@/ts/L3ForWApi/PrjFunction/clsvPrjFeatureSimWApi';
export const featureRegionFldsEx_Controller = 'FeatureRegionFldsExApi';
export const featureRegionFldsEx_ConstructorName = 'featureRegionFldsEx';

/// <returns>获取相应的记录的对象</returns>
export async function FeatureRegionFldsEx_AddFeatureRegionFldsRecordSave(
  strRegionId: string,
  strTabId: string,
  intApplicationTypeId: number,
  objFeatureRegionFlds: clsFeatureRegionFldsEN,
  strUserId: string,
): Promise<boolean> {
  // const strMsg = '';
  const strThisFuncName = 'FeatureRegionFldsEx_AddFeatureRegionFldsRecordSave';
  const strAction = 'AddFeatureRegionFldsRecordSave';

  const objFeatureRegionFlds4Save: stuFeatureRegionFlds4Save = {
    applicationTypeId: intApplicationTypeId,
    userId: strUserId,
    tabId: strTabId,
    regionId: strRegionId,
    objString: JSON.stringify(objFeatureRegionFlds),
  };
  console.log('objFeatureRegionFlds4Save', objFeatureRegionFlds4Save);
  //const strJSON = JSON.stringify(objFeatureRegionFldsEN_Sim);
  const strUrl = GetWebApiUrl(featureRegionFldsEx_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objFeatureRegionFlds4Save, config);
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
        featureRegionFldsEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        featureRegionFldsEx_ConstructorName,
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
/// <param name = "objFeatureRegionFldsENS">源对象</param>
/// <param name = "objFeatureRegionFldsENT">目标对象</param>
export function FeatureRegionFldsEx_CopyToEx(
  objFeatureRegionFldsENS: clsFeatureRegionFldsEN,
): clsFeatureRegionFldsENEx {
  const objFeatureRegionFldsENT = new clsFeatureRegionFldsENEx();
  try {
    ObjectAssign(objFeatureRegionFldsENT, objFeatureRegionFldsENS);
    return objFeatureRegionFldsENT;
  } catch (e: any) {
    const strMsg = Format('(errid:WiTsCs0011)Copy表对象数据出错,${e}.');
    console.error(strMsg);
    alert(strMsg);
    return objFeatureRegionFldsENT;
  }
}

/**
 * 扩展删除记录，即同时删除多个表的记录，需要基于原子性的事务处理
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strViewFeatureId: 界面功能Id
 * @param strPrjId: 工程Id
 * @param strOpUserId: 操作用户Id
 * @returns 获取的相应对象列表
 */
export async function FeatureRegionFldsEx_DelRecordEx(
  strViewFeatureId: string,
  strPrjId: string,
  strOpUserId: string,
): Promise<boolean> {
  const strThisFuncName = FeatureRegionFldsEx_DelRecordEx.name;
  const strAction = 'DelRecordEx';
  const strUrl = GetWebApiUrl(featureRegionFldsEx_Controller, strAction);
  // const mapParam: Dictionary = new Dictionary();
  // mapParam.add('strViewFeatureId', strViewFeatureId);
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
      strViewFeatureId,
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
        featureRegionFldsEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        featureRegionFldsEx_ConstructorName,
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
export function FeatureRegionFldsEx_FuncMapByFldName(
  strFldName: string,
  objFeatureRegionFldsEx: clsFeatureRegionFldsENEx,
) {
  const strThisFuncName = FeatureRegionFldsEx_FuncMapByFldName.name;

  let strMsg = '';
  //如果是本表中字段，不需要映射
  const arrFldName = clsFeatureRegionFldsEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsFeatureRegionFldsENEx.con_RegionName:
      return FeatureRegionFldsEx_FuncMap_RegionName(objFeatureRegionFldsEx);
    case clsFeatureRegionFldsENEx.con_CommandNameEx:
      return FeatureRegionFldsEx_FuncMap_CommandNameEx(objFeatureRegionFldsEx);

    case clsFeatureRegionFldsENEx.con_RelaFldName:
      return FeatureRegionFldsEx_FuncMap_RelaFldName(objFeatureRegionFldsEx);
    case clsFeatureRegionFldsENEx.con_FeatureName:
      return FeatureRegionFldsEx_FuncMap_FeatureName(objFeatureRegionFldsEx);
    case clsFeatureRegionFldsENEx.con_TabName:
      return FeatureRegionFldsEx_FuncMap_TabName(objFeatureRegionFldsEx);

    case clsFeatureRegionFldsENEx.con_TabNameEx:
      return FeatureRegionFldsEx_FuncMap_TabNameEx(objFeatureRegionFldsEx);

    case clsFeatureRegionFldsENEx.con_RegionTypeName:
      return FeatureRegionFldsEx_FuncMap_RegionTypeName(objFeatureRegionFldsEx);
    case clsFeatureRegionFldsENEx.con_CtlCnName:
      return FeatureRegionFldsEx_FuncMap_CtlCnName(objFeatureRegionFldsEx);
    case clsFeatureRegionFldsENEx.con_CtlTypeAbbr:
      return FeatureRegionFldsEx_FuncMap_CtlTypeAbbr(objFeatureRegionFldsEx);
    case clsFeatureRegionFldsENEx.con_ViewImplName:
      return FeatureRegionFldsEx_FuncMap_ViewImplName(objFeatureRegionFldsEx);
    case clsFeatureRegionFldsENEx.con_CtlTypeName:
      return FeatureRegionFldsEx_FuncMap_CtlTypeName(objFeatureRegionFldsEx);
    case clsFeatureRegionFldsENEx.con_ValueGivingModeName:
      return FeatureRegionFldsEx_FuncMap_ValueGivingModeName(objFeatureRegionFldsEx);
    case clsFeatureRegionFldsENEx.con_TabFeatureName:
      return FeatureRegionFldsEx_FuncMap_TabFeatureName(objFeatureRegionFldsEx);
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
 * @param objFeatureRegionFldsS:源对象
 **/
export async function FeatureRegionFldsEx_FuncMap_RegionName(
  objFeatureRegionFlds: clsFeatureRegionFldsENEx,
) {
  const strThisFuncName = FeatureRegionFldsEx_FuncMap_RegionName.name;
  const viewRegionStore = useviewRegionStore();
  try {
    if (IsNullOrEmpty(objFeatureRegionFlds.regionName) == true) {
      const ViewRegion_RegionId = objFeatureRegionFlds.regionId;
      const ViewRegion_RegionName = await viewRegionStore.getName(ViewRegion_RegionId);
      objFeatureRegionFlds.regionName = ViewRegion_RegionName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000131)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      featureRegionFldsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

export async function FeatureRegionFldsEx_FuncMap_CommandNameEx(
  objFeatureRegionFlds: clsFeatureRegionFldsENEx,
) {
  const strThisFuncName = FeatureRegionFldsEx_FuncMap_CommandNameEx.name;
  try {
    if (IsNullOrEmpty(objFeatureRegionFlds.commandNameEx) == true) {
      if (IsNullOrEmpty(objFeatureRegionFlds.tabName) == true)
        await FeatureRegionFldsEx_FuncMapByFldName(
          clsFeatureRegionFldsENEx.con_TabName,
          objFeatureRegionFlds,
        );

      const arr = [enumPrjFeature.DefaultFeature_0240, enumPrjFeature.SetFieldValue_0148];
      if (arr.indexOf(objFeatureRegionFlds.featureId) > -1) {
        if (objFeatureRegionFlds.tabNameEx.indexOf('组名') > -1) {
          objFeatureRegionFlds.commandNameEx = Format(
            '命令名:{0}<br/>调用:{1}<br/>(in {2})<br/>==>{3}',
            objFeatureRegionFlds.commandName,
            objFeatureRegionFlds.funcName,
            objFeatureRegionFlds.groupName,
            objFeatureRegionFlds.tabName,
          );
        } else {
          objFeatureRegionFlds.commandNameEx = Format(
            '命令名:{0}<br/>调用:{1} <br/>==>{2}',
            objFeatureRegionFlds.commandName,
            objFeatureRegionFlds.funcName,
            objFeatureRegionFlds.tabName,
          );
        }
      } else {
        if (objFeatureRegionFlds.tabNameEx.indexOf('组名') > -1) {
          objFeatureRegionFlds.commandNameEx = Format(
            '{0} (in {2}) ==>{3}',
            objFeatureRegionFlds.commandName,
            objFeatureRegionFlds.funcName,
            objFeatureRegionFlds.groupName,
            objFeatureRegionFlds.tabName,
          );
        } else {
          objFeatureRegionFlds.commandNameEx = Format(
            '{0} ==>{2}',
            objFeatureRegionFlds.commandName,
            objFeatureRegionFlds.funcName,
            objFeatureRegionFlds.tabName,
          );
        }
      }
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000125)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      featureRegionFldsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objFeatureRegionFldsS:源对象
 **/
export async function FeatureRegionFldsEx_FuncMap_RelaFldName(
  objFeatureRegionFlds: clsFeatureRegionFldsENEx,
) {
  const strThisFuncName = FeatureRegionFldsEx_FuncMap_CtlCnName.name;
  let strMsg = '';
  let featureName = '';
  try {
    if (IsNullOrEmpty(objFeatureRegionFlds.relaFldName) == true) {
      const arrViewFeatureFlds_Sel: Array<clsViewFeatureFldsEN> =
        await ViewFeatureFldsEx_GetObjLstByViewFeatureIdCache(
          objFeatureRegionFlds.viewFeatureId,
          clsPrivateSessionStorage.cmPrjId,
        );
      switch (objFeatureRegionFlds.featureId) {
        case enumPrjFeature.SetFieldValue_0148:
          switch (objFeatureRegionFlds.valueGivingModeId) {
            case enumValueGivingMode.DefaultValue_01:
              objFeatureRegionFlds.relaFldName = Format(
                '缺省值:<br/>{0}',
                objFeatureRegionFlds.defaultValue,
              );
              break;
            case enumValueGivingMode.GivenValue_02:
              if (arrViewFeatureFlds_Sel.length > 0) {
                let sbText = '';
                for (const objInFor of arrViewFeatureFlds_Sel) {
                  const ds_TabName = await vPrjTab_SimEx_func(
                    clsPrjTabEN.con_TabId,
                    clsPrjTabEN.con_TabName,
                    objInFor.dsTabId,
                  );
                  //const DS_DataValueFieldName = await vFieldTab_SimEx_func(clsFieldTabEN.con_FldId, clsFieldTabEN.con_FldName, objInFor.ds_DataValueFieldId, clsPrivateSessionStorage.cmPrjId);
                  //const DS_DataTextFieldName = await vFieldTab_SimEx_func(clsFieldTabEN.con_FldId, clsFieldTabEN.con_FldName, objInFor.ds_DataTextFieldId, clsPrivateSessionStorage.cmPrjId);
                  const objCtlTypeAbbr = await CtlType_GetObjByCtlTypeIdCache(objInFor.ctlTypeId);
                  if (objCtlTypeAbbr == null) {
                    const strMsg = Format(
                      '控件类型Id:[{0}]，没有相应的控件类型，请检查！',
                      enumCtlType.Button_01,
                    );
                    console.error(strMsg);
                    alert(strMsg);
                    return;
                  }
                  // let strWhereCond = '';
                  switch (objInFor.ctlTypeId) {
                    case enumCtlType.GivenValue_35:
                      if (IsNullOrEmpty(objInFor.dsCondStr) == false) {
                        // strWhereCond = Format(' Where {0}', objInFor.dsCondStr);
                      }
                      if (IsNullOrEmpty(objInFor.ctrlId)) {
                        //    sbText += Format("控件Id:<span class='text-danger'>无,请设置!</span><br/>{0}绑定:{1} ({2}, {3}{4})",
                        //        objCtlTypeAbbr.ctlCnName,
                        //        ds_TabName,
                        //        DS_DataValueFieldName,
                        //        DS_DataTextFieldName,
                        //        strWhereCond,
                        //        objInFor.ctrlId);
                      } else {
                        //let strTemp4Cond = "";
                        //if (IsNullOrEmpty(objInFor.ds_CondFieldId) == false) {
                        //    strTemp4Cond = await vFieldTab_Sim_GetNameByFldIdCache(objInFor.ds_CondFieldId, clsPrivateSessionStorage.cmPrjId);
                        //}
                        //let strTemp4Sort = "";
                        //if (IsNullOrEmpty(objInFor.ds_SortFieldId) == false) {
                        //    strTemp4Sort = await vFieldTab_Sim_GetNameByFldIdCache(objInFor.ds_SortFieldId, clsPrivateSessionStorage.cmPrjId);
                        //}
                        //strTemp4Cond = IsNullOrEmpty(strTemp4Cond) ? "" : Format("<br/>条件:{0}", strTemp4Cond);
                        //strTemp4Sort = IsNullOrEmpty(strTemp4Sort) ? "" : Format("<br/>排序:{0}", strTemp4Sort);
                        //sbText += Format("控件Id:{5}<br/>{0}绑定:{1} <br/>值:{2}<br/>文本:{3}{4}{6}{7}",
                        //    objCtlTypeAbbr.ctlCnName,
                        //    ds_TabName,
                        //    DS_DataValueFieldName,
                        //    DS_DataTextFieldName,
                        //    strWhereCond,
                        //    objInFor.ctrlId,
                        //    strTemp4Cond,
                        //    strTemp4Sort);
                      }
                      break;
                    case enumCtlType.DropDownList_06:
                      if (IsNullOrEmpty(objInFor.tabFeatureId4Ddl) == true) {
                        // strWhereCond = '';
                        if (IsNullOrEmpty(objInFor.dsCondStr) == false) {
                          // strWhereCond = Format(' Where {0}', objInFor.dsCondStr);
                        }
                        if (IsNullOrEmpty(objInFor.ctrlId)) {
                          //sbText += Format("控件Id:<span class='text-danger'>无,请设置!</span><br/>{0}绑定:{1} ({2}, {3}{4})",
                          //    objCtlTypeAbbr.ctlCnName,
                          //    ds_TabName,
                          //    DS_DataValueFieldName,
                          //    DS_DataTextFieldName,
                          //    strWhereCond,
                          //    objInFor.ctrlId);
                        } else {
                          //let strTemp4Cond = "";
                          //if (IsNullOrEmpty(objInFor.ds_CondFieldId) == false) {
                          //    strTemp4Cond = await vFieldTab_Sim_GetNameByFldIdCache(objInFor.ds_CondFieldId, clsPrivateSessionStorage.cmPrjId);
                          //}
                          //let strTemp4Sort = "";
                          //if (IsNullOrEmpty(objInFor.ds_SortFieldId) == false) {
                          //    strTemp4Sort = await vFieldTab_Sim_GetNameByFldIdCache(objInFor.ds_SortFieldId, clsPrivateSessionStorage.cmPrjId);
                          //}
                          //strTemp4Cond = IsNullOrEmpty(strTemp4Cond) ? "" : Format("<br/>条件:{0}", strTemp4Cond);
                          //strTemp4Sort = IsNullOrEmpty(strTemp4Sort) ? "" : Format("<br/>排序:{0}", strTemp4Sort);
                          //sbText += Format("控件Id:{5}<br/>{0}绑定:{1} <br/>值:{2}<br/>文本:{3}{4}{6}{7}",
                          //    objCtlTypeAbbr.ctlCnName,
                          //    ds_TabName,
                          //    DS_DataValueFieldName,
                          //    DS_DataTextFieldName,
                          //    strWhereCond,
                          //    objInFor.ctrlId,
                          //    strTemp4Cond,
                          //    strTemp4Sort);
                        }
                      } else {
                        const objTabFeature = await vTabFeature_SimEx_GetObjByTabFeatureIdCache(
                          objInFor.tabFeatureId4Ddl,
                          clsPrivateSessionStorage.cmPrjId,
                        );
                        if (objTabFeature == null) {
                          const strMsg = Format(
                            '在项目:[{0}]中，表功能Id:[{1}]没有相应功能，请检查！',
                            clsPrivateSessionStorage.currSelPrjName,
                            objInFor.tabFeatureId4Ddl,
                          );
                          console.error(strMsg);
                          alert(strMsg);
                          return;
                        }

                        const objFuncName = await TabFeatureEx_GetFuncName(objTabFeature);
                        objTabFeature.funcNameJs = objFuncName.funcNameJs;
                        const strConditionStr = await ViewFeatureFldsEx_GetConditionShowStr(
                          objInFor,
                        );
                        if (IsNullOrEmpty(objInFor.ctrlId)) {
                          sbText += Format(
                            "<span class='text-secondary b'>控件Id:</span><span class='text-danger'>无,请设置!</span><br/><span class='text-secondary  font-weight-bold'>Ddl-绑定: </span><br/><span class='text-secondary b'>表:<span class='text-primary'>{0}</span><br/><span class='text-secondary b'>函数: </span><span class='text-primary'>{1}</span><br/><span class='text-secondary b'>条件: </span><div class='text-primary'>{2}</div>",
                            ds_TabName,
                            objTabFeature.funcNameJs,
                            strConditionStr,
                            objInFor.ctrlId,
                          );
                        } else {
                          sbText += Format(
                            "<span class='text-secondary b'>控件Id:</span><span class='text-primary'>{3}</span><br/><span class='text-secondary  font-weight-bold'>Ddl-绑定: </span><br/><span class='text-secondary b'>表:<span class='text-primary'>{0}</span><br/><span class='text-secondary b'>函数: </span><span class='text-primary'>{1}</span><br/><span class='text-secondary b'>条件: </span><div class='text-primary'>{2}</div>",
                            ds_TabName,
                            objTabFeature.funcNameJs,
                            strConditionStr,
                            objInFor.ctrlId,
                          );
                        }
                      }
                      break;
                    case enumCtlType.DropDownList_Bool_18:
                      sbText += Format('{0}-真假列表', objFeatureRegionFlds.ctlTypeName);
                      break;
                    case enumCtlType.TextBox_16:
                      //sbText.AppendFormat("{0}-真假列表",
                      //    objFeatureRegionFlds.ctlTypeName);
                      break;
                    case enumCtlType.TextArea_41:
                      //sbText.AppendFormat("{0}-真假列表",
                      //    objFeatureRegionFlds.ctlTypeName);
                      break;
                    case enumCtlType.ViewVariable_38:
                      sbText += Format('{0}-给定界面变量', objFeatureRegionFlds.ctlTypeName);
                      break;
                    // case enumCtlType.sessionStorage_40:
                    //   sbText += Format('{0}-sessionStorage变量', objFeatureRegionFlds.ctlTypeName);
                    //   break;
                  }
                }
                objFeatureRegionFlds.relaFldName = sbText;
              }
              break;
            default:
              if (arrViewFeatureFlds_Sel.length > 0) {
                let sbText = '';
                for (const objInFor of arrViewFeatureFlds_Sel) {
                  await vPrjTab_SimEx_func(
                    clsPrjTabEN.con_TabId,
                    clsPrjTabEN.con_TabName,
                    objInFor.dsTabId,
                  );
                  //const DS_DataValueFieldName = await vFieldTab_SimEx_func(clsFieldTabEN.con_FldId, clsFieldTabEN.con_FldName, objInFor.ds_DataValueFieldId, clsPrivateSessionStorage.cmPrjId);
                  //const DS_DataTextFieldName = await vFieldTab_SimEx_func(clsFieldTabEN.con_FldId, clsFieldTabEN.con_FldName, objInFor.ds_DataTextFieldId, clsPrivateSessionStorage.cmPrjId);
                  await CtlType_GetNameByCtlTypeIdCache(objInFor.ctlTypeId);
                  const fldName = await vFieldTab_Sim_GetNameByFldIdCache(
                    objInFor.releFldId,
                    clsPrivateSessionStorage.currSelPrjId,
                  );
                  const objCtlTypeAbbr = await CtlType_GetObjByCtlTypeIdCache(objInFor.ctlTypeId);
                  if (objCtlTypeAbbr == null) {
                    const strMsg = Format(
                      '控件类型Id:[{0}]，没有相应的控件类型，请检查！',
                      enumCtlType.Button_01,
                    );
                    console.error(strMsg);
                    alert(strMsg);
                    return;
                  }
                  let strWhereCond = '';
                  let strTemp4Cond = '';
                  let strTemp4Sort = '';
                  let objGCconst;
                  switch (objInFor.ctlTypeId) {
                    case enumCtlType.GivenValue_35:
                      if (IsNullOrEmpty(objInFor.ctrlId)) {
                        sbText += Format(
                          "控件Id:<span class='text-danger'>无,请设置!</span><br/>{0}",
                          objCtlTypeAbbr.ctlCnName,
                          strWhereCond,
                        );
                      } else {
                        sbText += Format(
                          '控件Id:{0}<br/>{1} <br/>分类字段:{2}<br/>序号:{3}',
                          objInFor.ctrlId,
                          objCtlTypeAbbr.ctlCnName,
                          fldName,
                          objFeatureRegionFlds.relaFldName,
                        );
                      }
                      break;
                    case enumCtlType.DropDownList_06:
                      strWhereCond = '';
                      if (IsNullOrEmpty(objInFor.dsCondStr) == false) {
                        strWhereCond = Format(' Where {0}', objInFor.dsCondStr);
                      }
                      //if (IsNullOrEmpty(ds_TabName) == true
                      //    || IsNullOrEmpty(DS_DataValueFieldName) == true
                      //    || IsNullOrEmpty(DS_DataTextFieldName) == true) {
                      //    const strMsg = Format("在功能区的下拉框绑定的相关数据出错，请检查！(in {0}.{1})", featureRegionFldsEx_ConstructorName, strThisFuncName);
                      //    throw (strMsg);
                      //}

                      //if (IsNullOrEmpty(objInFor.ds_CondFieldId) == false) {
                      //    strTemp4Cond = await vFieldTab_Sim_GetNameByFldIdCache(objInFor.ds_CondFieldId, clsPrivateSessionStorage.cmPrjId);
                      //}

                      //if (IsNullOrEmpty(objInFor.ds_SortFieldId) == false) {
                      //    strTemp4Sort = await vFieldTab_Sim_GetNameByFldIdCache(objInFor.ds_SortFieldId, clsPrivateSessionStorage.cmPrjId);
                      //}
                      strTemp4Cond = IsNullOrEmpty(strTemp4Cond)
                        ? ''
                        : Format('<br/>条件:{0}', strTemp4Cond);
                      strTemp4Sort = IsNullOrEmpty(strTemp4Sort)
                        ? ''
                        : Format('<br/>排序:{0}', strTemp4Sort);

                      //sbText += Format("{0}-绑定:<br/>表:{1}<br/>值:{2}<br/>文本:{3}{4}{5}{6}",
                      //    ctlTypeName.replace("DropDownList", "Ddl"),
                      //    ds_TabName,
                      //    DS_DataValueFieldName,
                      //    DS_DataTextFieldName,
                      //    strWhereCond,
                      //    strTemp4Cond,
                      //    strTemp4Sort);
                      break;
                    case enumCtlType.DropDownList_Bool_18:
                      sbText += Format('{0}-真假列表', objFeatureRegionFlds.ctlTypeName);
                      break;
                    case enumCtlType.TextBox_16:
                      if (IsNullOrEmpty(objInFor.ctrlId)) {
                        sbText += Format(
                          "控件Id:<span class='text-danger'>无,请设置!</span><br/>{0}",
                          objCtlTypeAbbr.ctlCnName,
                        );
                      } else {
                        sbText += Format(
                          '控件Id:{0}<br/>{1}<br/>分类字段:{2}<br/>序号:{3}',
                          objInFor.ctrlId,
                          objCtlTypeAbbr.ctlCnName,
                          fldName,
                          objFeatureRegionFlds.relaFldName,
                        );
                      }
                      break;
                    case enumCtlType.TextArea_41:
                      if (IsNullOrEmpty(objInFor.ctrlId)) {
                        sbText += Format(
                          "控件Id:<span class='text-danger'>无,请设置!</span><br/>{0}",
                          objCtlTypeAbbr.ctlCnName,
                        );
                      } else {
                        sbText += Format(
                          '控件Id:{0}<br/>{1}<br/>分类字段:{2}<br/>序号:{3}',
                          objInFor.ctrlId,
                          objCtlTypeAbbr.ctlCnName,
                          fldName,
                          objFeatureRegionFlds.relaFldName,
                        );
                      }
                      break;
                    case enumCtlType.ViewVariable_38:
                      objGCconst = await GCVariable_GetObjByVarIdCache(objInFor.varId);
                      if (objGCconst == null) {
                        const strMsg = Format(
                          '在项目:[{0}]中，变量Id:[{1}]没有相应变量，请检查！',
                          clsPrivateSessionStorage.currSelPrjName,
                          objInFor.varId,
                        );
                        console.error(strMsg);
                        alert(strMsg);
                        return;
                      }
                      sbText += Format(
                        '分类:{0}(界面变量)<br/>序号:{1}',
                        objGCconst.varName,
                        objFeatureRegionFlds.relaFldName,
                      );
                      break;
                    default:
                      break;
                  }
                }
                objFeatureRegionFlds.relaFldName = sbText;
              }
              break;
          }
          break;
        case enumPrjFeature.AdjustOrderNum_0142:
        case enumPrjFeature.AdjustOrderNum_1196:
          if (arrViewFeatureFlds_Sel.length > 0) {
            let sbText = '';
            for (const objInFor of arrViewFeatureFlds_Sel) {
              const ds_TabName = await vPrjTab_SimEx_func(
                clsPrjTabEN.con_TabId,
                clsPrjTabEN.con_TabName,
                objInFor.dsTabId,
              );
              //const DS_DataValueFieldName = await vFieldTab_SimEx_func(clsFieldTabEN.con_FldId, clsFieldTabEN.con_FldName, objInFor.ds_DataValueFieldId, clsPrivateSessionStorage.cmPrjId);
              //const DS_DataTextFieldName = await vFieldTab_SimEx_func(clsFieldTabEN.con_FldId, clsFieldTabEN.con_FldName, objInFor.ds_DataTextFieldId, clsPrivateSessionStorage.cmPrjId);
              const objCtlTypeAbbr = await CtlType_GetObjByCtlTypeIdCache(objInFor.ctlTypeId);
              if (objCtlTypeAbbr == null) {
                const strMsg = Format(
                  '控件类型Id:[{0}]，没有相应的控件类型，请检查！',
                  enumCtlType.Button_01,
                );
                console.error(strMsg);
                alert(strMsg);
                return;
              }
              // let strWhereCond = '';
              switch (objInFor.ctlTypeId) {
                case enumCtlType.GivenValue_35:
                  if (IsNullOrEmpty(objInFor.dsCondStr) == false) {
                    // strWhereCond = Format(' Where {0}', objInFor.dsCondStr);
                  }
                  if (IsNullOrEmpty(objInFor.ctrlId)) {
                    //    sbText += Format("控件Id:<span class='text-danger'>无,请设置!</span><br/>{0}绑定:{1} ({2}, {3}{4})",
                    //        objCtlTypeAbbr.ctlCnName,
                    //        ds_TabName,
                    //        DS_DataValueFieldName,
                    //        DS_DataTextFieldName,
                    //        strWhereCond,
                    //        objInFor.ctrlId);
                  } else {
                    //let strTemp4Cond = "";
                    //if (IsNullOrEmpty(objInFor.ds_CondFieldId) == false) {
                    //    strTemp4Cond = await vFieldTab_Sim_GetNameByFldIdCache(objInFor.ds_CondFieldId, clsPrivateSessionStorage.cmPrjId);
                    //}
                    //let strTemp4Sort = "";
                    //if (IsNullOrEmpty(objInFor.ds_SortFieldId) == false) {
                    //    strTemp4Sort = await vFieldTab_Sim_GetNameByFldIdCache(objInFor.ds_SortFieldId, clsPrivateSessionStorage.cmPrjId);
                    //}
                    //strTemp4Cond = IsNullOrEmpty(strTemp4Cond) ? "" : Format("<br/>条件:{0}", strTemp4Cond);
                    //strTemp4Sort = IsNullOrEmpty(strTemp4Sort) ? "" : Format("<br/>排序:{0}", strTemp4Sort);
                    //sbText += Format("控件Id:{5}<br/>{0}绑定:{1} <br/>值:{2}<br/>文本:{3}{4}{6}{7}",
                    //    objCtlTypeAbbr.ctlCnName,
                    //    ds_TabName,
                    //    DS_DataValueFieldName,
                    //    DS_DataTextFieldName,
                    //    strWhereCond,
                    //    objInFor.ctrlId,
                    //    strTemp4Cond,
                    //    strTemp4Sort);
                  }
                  break;
                case enumCtlType.DropDownList_06:
                  if (IsNullOrEmpty(objInFor.tabFeatureId4Ddl) == true) {
                    // strWhereCond = '';
                    if (IsNullOrEmpty(objInFor.dsCondStr) == false) {
                      // strWhereCond = Format(' Where {0}', objInFor.dsCondStr);
                    }
                    if (IsNullOrEmpty(objInFor.ctrlId)) {
                      //sbText += Format("控件Id:<span class='text-danger'>无,请设置!</span><br/>{0}绑定:{1} ({2}, {3}{4})",
                      //    objCtlTypeAbbr.ctlCnName,
                      //    ds_TabName,
                      //    DS_DataValueFieldName,
                      //    DS_DataTextFieldName,
                      //    strWhereCond,
                      //    objInFor.ctrlId);
                    } else {
                      //let strTemp4Cond = "";
                      //if (IsNullOrEmpty(objInFor.ds_CondFieldId) == false) {
                      //    strTemp4Cond = await vFieldTab_Sim_GetNameByFldIdCache(objInFor.ds_CondFieldId, clsPrivateSessionStorage.cmPrjId);
                      //}
                      //let strTemp4Sort = "";
                      //if (IsNullOrEmpty(objInFor.ds_SortFieldId) == false) {
                      //    strTemp4Sort = await vFieldTab_Sim_GetNameByFldIdCache(objInFor.ds_SortFieldId, clsPrivateSessionStorage.cmPrjId);
                      //}
                      //strTemp4Cond = IsNullOrEmpty(strTemp4Cond) ? "" : Format("<br/>条件:{0}", strTemp4Cond);
                      //strTemp4Sort = IsNullOrEmpty(strTemp4Sort) ? "" : Format("<br/>排序:{0}", strTemp4Sort);
                      //sbText += Format("控件Id:{5}<br/>{0}绑定:{1} <br/>值:{2}<br/>文本:{3}{4}{6}{7}",
                      //    objCtlTypeAbbr.ctlCnName,
                      //    ds_TabName,
                      //    DS_DataValueFieldName,
                      //    DS_DataTextFieldName,
                      //    strWhereCond,
                      //    objInFor.ctrlId,
                      //    strTemp4Cond,
                      //    strTemp4Sort);
                    }
                  } else {
                    const objTabFeature = await vTabFeature_SimEx_GetObjByTabFeatureIdCache(
                      objInFor.tabFeatureId4Ddl,
                      clsPrivateSessionStorage.cmPrjId,
                    );
                    if (objTabFeature == null) {
                      const strMsg = Format(
                        '在项目:[{0}]中，表功能Id:[{1}]没有相应功能，请检查！',
                        clsPrivateSessionStorage.currSelPrjName,
                        objInFor.tabFeatureId4Ddl,
                      );
                      console.error(strMsg);
                      alert(strMsg);
                      return;
                    }

                    const objFuncName = await TabFeatureEx_GetFuncName(objTabFeature);
                    objTabFeature.funcNameJs = objFuncName.funcNameJs;
                    const strConditionStr = await ViewFeatureFldsEx_GetConditionShowStr(objInFor);
                    if (IsNullOrEmpty(objInFor.ctrlId)) {
                      sbText += Format(
                        "<span class='text-secondary b'>控件Id:</span><span class='text-danger'>无,请设置!</span><br/><span class='text-secondary  font-weight-bold'>Ddl-绑定: </span><br/><span class='text-secondary b'>表:<span class='text-primary'>{0}</span><br/><span class='text-secondary b'>函数: </span><span class='text-primary'>{1}</span><br/><span class='text-secondary b'>条件: </span><div class='text-primary'>{2}</div>",
                        ds_TabName,
                        objTabFeature.funcNameJs,
                        strConditionStr,
                        objInFor.ctrlId,
                      );
                    } else {
                      sbText += Format(
                        "<span class='text-secondary b'>控件Id:</span><span class='text-primary'>{3}</span><br/><span class='text-secondary  font-weight-bold'>Ddl-绑定: </span><br/><span class='text-secondary b'>表:<span class='text-primary'>{0}</span><br/><span class='text-secondary b'>函数: </span><span class='text-primary'>{1}</span><br/><span class='text-secondary b'>条件: </span><div class='text-primary'>{2}</div>",
                        ds_TabName,
                        objTabFeature.funcNameJs,
                        strConditionStr,
                        objInFor.ctrlId,
                      );
                    }
                  }
                  break;
                case enumCtlType.DropDownList_Bool_18:
                  sbText += Format('{0}-真假列表', objFeatureRegionFlds.ctlTypeName);
                  break;
                case enumCtlType.TextBox_16:
                  //sbText.AppendFormat("{0}-真假列表",
                  //    objFeatureRegionFlds.ctlTypeName);
                  break;
                case enumCtlType.TextArea_41:
                  //sbText.AppendFormat("{0}-真假列表",
                  //    objFeatureRegionFlds.ctlTypeName);
                  break;
                case enumCtlType.ViewVariable_38:
                  sbText += Format('{0}-给定界面变量', objFeatureRegionFlds.ctlTypeName);
                  break;
                // case enumCtlType.sessionStorage_40:
                //   sbText += Format('{0}-sessionStorage变量', objFeatureRegionFlds.ctlTypeName);
                //   break;
              }
            }
            objFeatureRegionFlds.relaFldName = sbText;
          }

          break;
        case enumPrjFeature.CopyRecord_0141:
        case enumPrjFeature.UpdateRecord_0137:
        case enumPrjFeature.DelRecord_0138:
        case enumPrjFeature.AddNewRecord_0136:
        case enumPrjFeature.AddNewRecordWithMaxId_0183:
        case enumPrjFeature.Query_0139:
        case enumPrjFeature.ExportToFile_0143:
        case enumPrjFeature.UpdateRecord_Gv_0174:
        case enumPrjFeature.DelRecord_Gv_0175:
          break;
        default:
          featureName = await vPrjFeatureSim_GetNameByFeatureIdCache(
            objFeatureRegionFlds.featureId,
          );
          strMsg = `功能:[${featureName}(${objFeatureRegionFlds.featureId})]没有相应的处理，请检查！`;
          console.error(strMsg);
          alert(strMsg);
          break;
      }
      //int intIndex4InUse = clsCommForWebForm.GetIndexByDataField4GridView(gvFeatureRegionFlds,
      //    clsvFeatureRegionFldsEN.con_InUse);
      //e.Row.Cells[intIndex4InUse].text = string.Format("{0}", objFeatureRegionFlds.inUse ? "使用" : "不使用");
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000125)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      featureRegionFldsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objFeatureRegionFldsS:源对象
 **/
export async function FeatureRegionFldsEx_FuncMap_FeatureName(
  objFeatureRegionFlds: clsFeatureRegionFldsENEx,
) {
  const strThisFuncName = FeatureRegionFldsEx_FuncMap_FeatureName.name;
  try {
    if (IsNullOrEmpty(objFeatureRegionFlds.featureName) == true) {
      const PrjFeature_FeatureId = objFeatureRegionFlds.featureId;
      const PrjFeature_FeatureName = await vPrjFeatureSim_func(
        clsPrjFeatureEN.con_FeatureId,
        clsPrjFeatureEN.con_FeatureName,
        PrjFeature_FeatureId,
      );
      objFeatureRegionFlds.featureName = PrjFeature_FeatureName;
      let strTabFeature = '';
      if (IsNullOrEmpty(objFeatureRegionFlds.tabFeatureId) == false) {
        await vTabFeature_Sim_func(
          clsTabFeatureEN.con_TabFeatureId,
          clsTabFeatureEN.con_TabFeatureName,
          objFeatureRegionFlds.tabFeatureId,
          clsPrivateSessionStorage.cmPrjId,
        );
        strTabFeature = Format('表功能:{0}<br/>', strTabFeature);
      }
      let featureName: string = PrjFeature_FeatureName;
      if (featureName.indexOf(objFeatureRegionFlds.text) == -1) {
        featureName = Format('{0}/{1}', PrjFeature_FeatureName, objFeatureRegionFlds.text);
      }
      objFeatureRegionFlds.featureName = Format(
        '{0}<br/>{1}Id:{2}',
        featureName,
        strTabFeature,
        objFeatureRegionFlds.buttonName,
      ); // PrjFeature_FeatureName;
      if (
        objFeatureRegionFlds.featureId == enumPrjFeature.AdjustOrderNum_0142 ||
        objFeatureRegionFlds.featureId == enumPrjFeature.AdjustOrderNum_1196
      ) {
        let arrViewFeatureFlds = await ViewFeatureFldsEx_GetObjLstByViewFeatureIdCache(
          objFeatureRegionFlds.viewFeatureId,
          clsPrivateSessionStorage.cmPrjId,
        );
        arrViewFeatureFlds = arrViewFeatureFlds.filter((x) => x.releFldId != '');
        for (const objInFor of arrViewFeatureFlds) {
          const strFieldTypeName = await FieldType_GetNameByFieldTypeIdCache(objInFor.fieldTypeId);
          const strFldName = await vFieldTab_Sim_GetNameByFldIdCache(
            objInFor.releFldId,
            clsPrivateSessionStorage.currSelPrjId,
          );
          const strHtml = await css_FldDispUnitStyleEx_GetHtml4TitleContent(
            '00000019',
            strFieldTypeName,
            strFldName,
          );
          objFeatureRegionFlds.featureName += Format('<br/>{0}', strHtml);
        }
      }
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000096)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      featureRegionFldsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objFeatureRegionFldsS:源对象
 **/
export async function FeatureRegionFldsEx_FuncMap_TabName(
  objFeatureRegionFlds: clsFeatureRegionFldsENEx,
) {
  const strThisFuncName = FeatureRegionFldsEx_FuncMap_TabName.name;
  const viewRegionStore = useviewRegionStore();
  try {
    if (IsNullOrEmpty(objFeatureRegionFlds.tabName) == true) {
      const ViewRegion_RegionId = objFeatureRegionFlds.regionId;
      const ViewRegion_TabId = await viewRegionStore.getTabId(ViewRegion_RegionId);
      const vPrjTab_Sim_TabId = ViewRegion_TabId;
      const vPrjTab_Sim_TabName = await vPrjTab_SimEx_func(
        clsvPrjTab_SimEN.con_TabId,
        clsvPrjTab_SimEN.con_TabName,
        vPrjTab_Sim_TabId,
      );
      objFeatureRegionFlds.tabName = vPrjTab_Sim_TabName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000094)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      featureRegionFldsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objFeatureRegionFldsS:源对象
 **/
export async function FeatureRegionFldsEx_FuncMap_RegionTypeName(
  objFeatureRegionFlds: clsFeatureRegionFldsENEx,
) {
  const strThisFuncName = FeatureRegionFldsEx_FuncMap_RegionTypeName.name;
  const viewRegionStore = useviewRegionStore();
  try {
    if (IsNullOrEmpty(objFeatureRegionFlds.regionTypeName) == true) {
      const ViewRegion_RegionId = objFeatureRegionFlds.regionId;
      const ViewRegion_RegionTypeId = await viewRegionStore.getRegionTypeId(ViewRegion_RegionId);
      const RegionType_RegionTypeId = ViewRegion_RegionTypeId;
      const RegionType_RegionTypeName = await RegionType_func(
        clsRegionTypeEN.con_RegionTypeId,
        clsRegionTypeEN.con_RegionTypeName,
        RegionType_RegionTypeId,
      );
      objFeatureRegionFlds.regionTypeName = RegionType_RegionTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000124)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      featureRegionFldsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objFeatureRegionFldsS:源对象
 **/
export async function FeatureRegionFldsEx_FuncMap_CtlCnName(
  objFeatureRegionFlds: clsFeatureRegionFldsENEx,
) {
  const strThisFuncName = FeatureRegionFldsEx_FuncMap_CtlCnName.name;
  try {
    if (IsNullOrEmpty(objFeatureRegionFlds.ctlCnName) == true) {
      const CtlType_CtlTypeId = objFeatureRegionFlds.ctlTypeId;
      const CtlType_CtlCnName = await CtlType_func(
        clsCtlTypeEN.con_CtlTypeId,
        clsCtlTypeEN.con_CtlCnName,
        CtlType_CtlTypeId,
      );
      objFeatureRegionFlds.ctlCnName = CtlType_CtlCnName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000125)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      featureRegionFldsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objFeatureRegionFldsS:源对象
 **/
export async function FeatureRegionFldsEx_FuncMap_CtlTypeAbbr(
  objFeatureRegionFlds: clsFeatureRegionFldsENEx,
) {
  const strThisFuncName = FeatureRegionFldsEx_FuncMap_CtlTypeAbbr.name;
  try {
    if (IsNullOrEmpty(objFeatureRegionFlds.ctlTypeAbbr) == true) {
      const CtlType_CtlTypeId = objFeatureRegionFlds.ctlTypeId;
      const CtlType_CtlTypeAbbr = await CtlType_func(
        clsCtlTypeEN.con_CtlTypeId,
        clsCtlTypeEN.con_CtlTypeAbbr,
        CtlType_CtlTypeId,
      );
      objFeatureRegionFlds.ctlTypeAbbr = CtlType_CtlTypeAbbr;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000126)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      featureRegionFldsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objFeatureRegionFldsS:源对象
 **/
export async function FeatureRegionFldsEx_FuncMap_ViewImplName(
  objFeatureRegionFlds: clsFeatureRegionFldsENEx,
) {
  const strThisFuncName = FeatureRegionFldsEx_FuncMap_ViewImplName.name;
  try {
    if (IsNullOrEmpty(objFeatureRegionFlds.viewImplName) == true) {
      const ViewImplementation_ViewImplId = objFeatureRegionFlds.viewImplId;
      const ViewImplementation_ViewImplName = await ViewImplementation_func(
        clsViewImplementationEN.con_ViewImplId,
        clsViewImplementationEN.con_ViewImplName,
        ViewImplementation_ViewImplId,
      );
      objFeatureRegionFlds.viewImplName = ViewImplementation_ViewImplName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000127)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      featureRegionFldsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objFeatureRegionFldsS:源对象
 **/
export async function FeatureRegionFldsEx_FuncMap_CtlTypeName(
  objFeatureRegionFlds: clsFeatureRegionFldsENEx,
) {
  const strThisFuncName = FeatureRegionFldsEx_FuncMap_CtlTypeName.name;
  try {
    if (IsNullOrEmpty(objFeatureRegionFlds.ctlTypeName) == true) {
      const CtlType_CtlTypeId = objFeatureRegionFlds.ctlTypeId;
      const CtlType_CtlTypeName = await CtlType_func(
        clsCtlTypeEN.con_CtlTypeId,
        clsCtlTypeEN.con_CtlTypeName,
        CtlType_CtlTypeId,
      );
      objFeatureRegionFlds.ctlTypeName = CtlType_CtlTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000123)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      featureRegionFldsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objFeatureRegionFldsS:源对象
 **/
export async function FeatureRegionFldsEx_FuncMap_ValueGivingModeName(
  objFeatureRegionFlds: clsFeatureRegionFldsENEx,
) {
  const strThisFuncName = FeatureRegionFldsEx_FuncMap_ValueGivingModeName.name;
  try {
    if (IsNullOrEmpty(objFeatureRegionFlds.valueGivingModeName) == true) {
      const ValueGivingMode_ValueGivingModeId = objFeatureRegionFlds.valueGivingModeId;
      const ValueGivingMode_ValueGivingModeName = await ValueGivingMode_func(
        clsValueGivingModeEN.con_ValueGivingModeId,
        clsValueGivingModeEN.con_ValueGivingModeName,
        ValueGivingMode_ValueGivingModeId,
      );
      objFeatureRegionFlds.valueGivingModeName = ValueGivingMode_ValueGivingModeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000128)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      featureRegionFldsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objFeatureRegionFldsS:源对象
 **/
export async function FeatureRegionFldsEx_FuncMap_TabFeatureName(
  objFeatureRegionFlds: clsFeatureRegionFldsENEx,
) {
  const strThisFuncName = FeatureRegionFldsEx_FuncMap_TabFeatureName.name;
  try {
    if (IsNullOrEmpty(objFeatureRegionFlds.tabFeatureName) == true) {
      const TabFeature_TabFeatureId = objFeatureRegionFlds.tabFeatureId;
      const TabFeature_TabFeatureName = await vTabFeature_Sim_func(
        clsTabFeatureEN.con_TabFeatureId,
        clsTabFeatureEN.con_TabFeatureName,
        TabFeature_TabFeatureId,
        clsPrivateSessionStorage.currSelPrjId,
      );
      objFeatureRegionFlds.tabFeatureName = TabFeature_TabFeatureName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000129)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      featureRegionFldsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objFeatureRegionFldsS:源对象
 **/
export async function FeatureRegionFldsEx_FuncMap_TabNameEx(
  objFeatureRegionFlds: clsFeatureRegionFldsENEx,
) {
  const strThisFuncName = FeatureRegionFldsEx_FuncMap_TabName.name;
  try {
    if (IsNullOrEmpty(objFeatureRegionFlds.tabNameEx) == true) {
      if (IsNullOrEmpty(objFeatureRegionFlds.tabName) == true)
        await FeatureRegionFldsEx_FuncMapByFldName(
          clsFeatureRegionFldsENEx.con_TabName,
          objFeatureRegionFlds,
        );
      if (IsNullOrEmpty(objFeatureRegionFlds.groupName) == false) {
        //int intIndex4RelaTabName = clsCommForWebForm.GetIndexByDataField4GridView(gvFeatureRegionFlds,
        //    clsvFeatureRegionFldsEN.con_RelaTabName);
        objFeatureRegionFlds.tabNameEx = Format(
          '组名:{0}<br/>{1}',
          objFeatureRegionFlds.groupName,
          objFeatureRegionFlds.tabName,
        );
      }
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000094)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      featureRegionFldsEx_ConstructorName,
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
export function FeatureRegionFldsEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  // const strThisFuncName = 'SortFunByKey';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsFeatureRegionFldsENEx.con_FeatureName:
        return (a: clsFeatureRegionFldsENEx, b: clsFeatureRegionFldsENEx) => {
          return a.featureName.localeCompare(b.featureName);
        };
      case clsFeatureRegionFldsENEx.con_TabName:
        return (a: clsFeatureRegionFldsENEx, b: clsFeatureRegionFldsENEx) => {
          return a.tabName.localeCompare(b.tabName);
        };
      case clsFeatureRegionFldsENEx.con_RegionTypeName:
        return (a: clsFeatureRegionFldsENEx, b: clsFeatureRegionFldsENEx) => {
          return a.regionTypeName.localeCompare(b.regionTypeName);
        };
      case clsFeatureRegionFldsENEx.con_CtlCnName:
        return (a: clsFeatureRegionFldsENEx, b: clsFeatureRegionFldsENEx) => {
          return a.ctlCnName.localeCompare(b.ctlCnName);
        };
      case clsFeatureRegionFldsENEx.con_CtlTypeAbbr:
        return (a: clsFeatureRegionFldsENEx, b: clsFeatureRegionFldsENEx) => {
          return a.ctlTypeAbbr.localeCompare(b.ctlTypeAbbr);
        };
      case clsFeatureRegionFldsENEx.con_ViewImplName:
        return (a: clsFeatureRegionFldsENEx, b: clsFeatureRegionFldsENEx) => {
          return a.viewImplName.localeCompare(b.viewImplName);
        };
      case clsFeatureRegionFldsENEx.con_CtlTypeName:
        return (a: clsFeatureRegionFldsENEx, b: clsFeatureRegionFldsENEx) => {
          return a.ctlTypeName.localeCompare(b.ctlTypeName);
        };
      case clsFeatureRegionFldsENEx.con_ValueGivingModeName:
        return (a: clsFeatureRegionFldsENEx, b: clsFeatureRegionFldsENEx) => {
          return a.valueGivingModeName.localeCompare(b.valueGivingModeName);
        };
      case clsFeatureRegionFldsENEx.con_TabFeatureName:
        return (a: clsFeatureRegionFldsENEx, b: clsFeatureRegionFldsENEx) => {
          return a.tabFeatureName.localeCompare(b.tabFeatureName);
        };
      case clsFeatureRegionFldsENEx.con_RelaFldName:
        return (a: clsFeatureRegionFldsENEx, b: clsFeatureRegionFldsENEx) => {
          return a.relaFldName.localeCompare(b.relaFldName);
        };
      case clsFeatureRegionFldsENEx.con_CtrlId:
        return (a: clsFeatureRegionFldsENEx, b: clsFeatureRegionFldsENEx) => {
          return a.ctrlId.localeCompare(b.ctrlId);
        };
      case clsFeatureRegionFldsENEx.con_RegionTypeId:
        return (a: clsFeatureRegionFldsENEx, b: clsFeatureRegionFldsENEx) => {
          return a.regionTypeId.localeCompare(b.regionTypeId);
        };
      case clsFeatureRegionFldsENEx.con_TrClass:
        return (a: clsFeatureRegionFldsENEx, b: clsFeatureRegionFldsENEx) => {
          return a.trClass.localeCompare(b.trClass);
        };
      case clsFeatureRegionFldsENEx.con_RegionName:
        return (a: clsFeatureRegionFldsENEx, b: clsFeatureRegionFldsENEx) => {
          return a.regionName.localeCompare(b.regionName);
        };
      default:
        return FeatureRegionFlds_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsFeatureRegionFldsENEx.con_FeatureName:
        return (a: clsFeatureRegionFldsENEx, b: clsFeatureRegionFldsENEx) => {
          return b.featureName.localeCompare(a.featureName);
        };
      case clsFeatureRegionFldsENEx.con_TabName:
        return (a: clsFeatureRegionFldsENEx, b: clsFeatureRegionFldsENEx) => {
          return b.tabName.localeCompare(a.tabName);
        };
      case clsFeatureRegionFldsENEx.con_RegionTypeName:
        return (a: clsFeatureRegionFldsENEx, b: clsFeatureRegionFldsENEx) => {
          return b.regionTypeName.localeCompare(a.regionTypeName);
        };
      case clsFeatureRegionFldsENEx.con_CtlCnName:
        return (a: clsFeatureRegionFldsENEx, b: clsFeatureRegionFldsENEx) => {
          return b.ctlCnName.localeCompare(a.ctlCnName);
        };
      case clsFeatureRegionFldsENEx.con_CtlTypeAbbr:
        return (a: clsFeatureRegionFldsENEx, b: clsFeatureRegionFldsENEx) => {
          return b.ctlTypeAbbr.localeCompare(a.ctlTypeAbbr);
        };
      case clsFeatureRegionFldsENEx.con_ViewImplName:
        return (a: clsFeatureRegionFldsENEx, b: clsFeatureRegionFldsENEx) => {
          return b.viewImplName.localeCompare(a.viewImplName);
        };
      case clsFeatureRegionFldsENEx.con_CtlTypeName:
        return (a: clsFeatureRegionFldsENEx, b: clsFeatureRegionFldsENEx) => {
          return b.ctlTypeName.localeCompare(a.ctlTypeName);
        };
      case clsFeatureRegionFldsENEx.con_ValueGivingModeName:
        return (a: clsFeatureRegionFldsENEx, b: clsFeatureRegionFldsENEx) => {
          return b.valueGivingModeName.localeCompare(a.valueGivingModeName);
        };
      case clsFeatureRegionFldsENEx.con_TabFeatureName:
        return (a: clsFeatureRegionFldsENEx, b: clsFeatureRegionFldsENEx) => {
          return b.tabFeatureName.localeCompare(a.tabFeatureName);
        };
      case clsFeatureRegionFldsENEx.con_RelaFldName:
        return (a: clsFeatureRegionFldsENEx, b: clsFeatureRegionFldsENEx) => {
          return b.relaFldName.localeCompare(a.relaFldName);
        };
      case clsFeatureRegionFldsENEx.con_CtrlId:
        return (a: clsFeatureRegionFldsENEx, b: clsFeatureRegionFldsENEx) => {
          return b.ctrlId.localeCompare(a.ctrlId);
        };
      case clsFeatureRegionFldsENEx.con_RegionTypeId:
        return (a: clsFeatureRegionFldsENEx, b: clsFeatureRegionFldsENEx) => {
          return b.regionTypeId.localeCompare(a.regionTypeId);
        };
      case clsFeatureRegionFldsENEx.con_TrClass:
        return (a: clsFeatureRegionFldsENEx, b: clsFeatureRegionFldsENEx) => {
          return b.trClass.localeCompare(a.trClass);
        };
      case clsFeatureRegionFldsENEx.con_RegionName:
        return (a: clsFeatureRegionFldsENEx, b: clsFeatureRegionFldsENEx) => {
          return b.regionName.localeCompare(a.regionName);
        };
      default:
        return FeatureRegionFlds_SortFunByKey(strKey, AscOrDesc);
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
export async function FeatureRegionFldsEx_ImportRelaFlds(
  strRegionId: string,
  strPrjId: string,
  strUserId: string,
): Promise<boolean> {
  const strThisFuncName = FeatureRegionFldsEx_ImportRelaFlds.name;
  const strAction = 'ImportRelaFlds';
  const strUrl = GetWebApiUrl(featureRegionFldsEx_Controller, strAction);
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
        featureRegionFldsEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        featureRegionFldsEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

export function FeatureRegionFldsEx_SortFunByInUseAndSeq(
  a: clsFeatureRegionFldsENEx,
  b: clsFeatureRegionFldsENEx,
): number {
  if (a.inUse == b.inUse) return a.seqNum - b.seqNum;
  else {
    if (a.inUse == true) return -1;
    else return 1;
  }
}
