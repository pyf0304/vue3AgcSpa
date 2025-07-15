import axios from 'axios';
import { clsASPButtonBLEx } from '../../L2BLL/GeneCSharp/clsASPButtonBLEx';
import { clsASPControlBLEx } from '../../L2BLL/GeneCSharp/clsASPControlBLEx';
import { ButtonTabEx_GetObjExLstByFeatureRegionFlds } from '../PrjFunction/clsButtonTabExWApi';
// import { Dictionary } from '@/ts/PubFun/tzDictionary';
import { clsFeatureRegionFldsENEx } from '../../L0Entity/RegionManage/clsFeatureRegionFldsENEx.js';
import { vPrjFeatureSim_func } from '../../L3ForWApi/PrjFunction/clsvPrjFeatureSimWApi.js';
import { clsPrjFeatureEN } from '../../L0Entity/PrjFunction/clsPrjFeatureEN.js';
import { RegionType_func } from '../../L3ForWApi/RegionManage/clsRegionTypeWApi.js';
import { clsRegionTypeEN } from '../../L0Entity/RegionManage/clsRegionTypeEN.js';
import { CtlType_func } from '../../L3ForWApi/PrjInterface/clsCtlTypeWApi.js';
import { clsCtlTypeEN } from '../../L0Entity/PrjInterface/clsCtlTypeEN.js';
import { ViewImplementation_func } from '../../L3ForWApi/PrjInterface/clsViewImplementationWApi.js';
import { clsViewImplementationEN } from '../../L0Entity/PrjInterface/clsViewImplementationEN.js';
import { ValueGivingMode_func } from '../../L3ForWApi/GeneCode/clsValueGivingModeWApi.js';
import { clsValueGivingModeEN } from '../../L0Entity/GeneCode/clsValueGivingModeEN.js';
import { TabFeature_func } from '../../L3ForWApi/Table_Field/clsTabFeatureWApi.js';
import { clsTabFeatureEN } from '../../L0Entity/Table_Field/clsTabFeatureEN.js';
import { GetSortExpressInfo, ObjectAssign } from '../../PubFun/clsCommFunc4Web.js';
import { FeatureRegionFlds_SortFunByKey } from '../../L3ForWApi/RegionManage/clsFeatureRegionFldsWApi.js';

import {
  ViewFeatureFldsEx_CopyToEx,
  ViewFeatureFldsEx_GetObjExLstByRegionIdCache,
} from './clsViewFeatureFldsExWApi';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { ObjectAssignV2 } from '@/ts/PubFun/clsCommFunc4Web';
import { FeatureRegionFlds_GetObjLstCache } from '@/ts/L3ForWApi/RegionManage/clsFeatureRegionFldsWApi';
import { clsFeatureRegionFldsENEx4GC } from '@/ts/L0Entity/RegionManage/clsFeatureRegionFldsENEx4GC';
import { clsFeatureRegionFldsEN } from '@/ts/L0Entity/RegionManage/clsFeatureRegionFldsEN';
import { enumCtlType } from '@/ts/L0Entity/PrjInterface/clsCtlTypeEN';
import { enumPrjFeature } from '@/ts/L0Entity/PrjFunction/clsPrjFeatureEN';
import { ASPControlGroupEx } from '@/ts/L0Entity/GeneCSharpEx/clsASPControlGroupENEx';
import { ASPControlEx } from '@/ts/L0Entity/GeneCSharp/ASPControlEx';
import { enumValueGivingMode } from '@/ts/L0Entity/GeneCode/clsValueGivingModeEN';
import { Storage } from '@/utils/Storage';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { useviewRegionStore } from '@/store/modules/viewRegion';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import {
  featureRegionFldsCache,
  isFuncMapCache,
} from '@/views/RegionManage/FeatureRegionFldsVueShare';

export const featureRegionFldsEx_Controller = 'FeatureRegionFldsExApi';
export const featureRegionFldsEx_ConstructorName = 'featureRegionFldsEx';

export function FeatureRegionFldsEx_CopyToEx4GC(
  objFeatureRegionFldsENS: clsFeatureRegionFldsEN,
): clsFeatureRegionFldsENEx4GC {
  const objFeatureRegionFldsENT = new clsFeatureRegionFldsENEx4GC();
  try {
    ObjectAssignV2(objFeatureRegionFldsENT, objFeatureRegionFldsENS);
    return objFeatureRegionFldsENT;
  } catch (e: any) {
    const strMsg = Format('(errid:WiTsCs0011)Copy表对象数据出错,${e}.');
    console.error(strMsg);
    alert(strMsg);
    return objFeatureRegionFldsENT;
  }
}

export async function FeatureRegionFldsEx_GetFldCountInUseByRegionIdCacheEx(
  strRegionId: string,
): Promise<number> {
  const arrObjList: Array<clsFeatureRegionFldsEN> =
    await FeatureRegionFldsEx_GetObjLstByRegionIdCache4InUseEx(strRegionId);
  const intFldCount = arrObjList.filter((x) => x.inUse == true).length;
  return intFldCount;
}

/// <summary>
/// 根据关键字获取相关对象, 从缓存的对象列表中获取.没有就返回null.
/// (AutoGCLib.AutoGC6Cs_Business:Gen_4BL_GetObjByKeyCache)
/// </summary>
/// <param name = "strRegionId">所给的关键字</param>
/// <param name = "strPrjId">工程Id</param>
/// <returns>根据关键字获取的对象</returns>
export async function FeatureRegionFldsEx_GetObjLstByRegionIdCache4InUseEx(
  strRegionId: string,
): Promise<Array<clsFeatureRegionFldsEN>> {
  //初始化列表缓存
  const arrObjLstCache: Array<clsFeatureRegionFldsEN> = await FeatureRegionFlds_GetObjLstCache(
    strRegionId,
  );

  const arrFeatureRegionFldsObjLst_Sel1: Array<clsFeatureRegionFldsEN> = arrObjLstCache
    .filter((x) => x.regionId == strRegionId && x.inUse == true)
    .sort((x) => x.seqNum);
  return arrFeatureRegionFldsObjLst_Sel1;
}

export async function FeatureRegionFldsEx_GetControlLstByFeatureRegionFldsLst(
  arrFeatureRegionFldsENEx: Array<clsFeatureRegionFldsENEx4GC>,
  intAppTypeId: number,
): Promise<Array<ASPControlEx>> {
  // const strPrjId = await CMProjectEx_GetPrjIdByCmPrjIdCache(strCmPrjId);
  const arrControlSet: Array<ASPControlEx> = new Array<ASPControlEx>();
  for (const objInFor of arrFeatureRegionFldsENEx) {
    let arrButtonTabSet_In;
    // let ASPDiv;
    let objASPControlGroupENEx;
    let arrvViewFeatureFlds;
    switch (objInFor.featureId) {
      case enumPrjFeature.AdjustOrderNum_0142:
      case enumPrjFeature.AdjustOrderNum_1196:
        arrButtonTabSet_In = await ButtonTabEx_GetObjExLstByFeatureRegionFlds(
          objInFor,
          intAppTypeId,
        );
        if (arrButtonTabSet_In == null) continue;
        //const objDiv = clsASPDivBLEx.GetEmptyDiv();
        objASPControlGroupENEx = new ASPControlGroupEx();
        objASPControlGroupENEx.orderNum = objInFor.seqNum;
        objASPControlGroupENEx.groupName = objInFor.groupName;
        objASPControlGroupENEx.keyId = objInFor.viewFeatureId;
        for (const x of arrButtonTabSet_In) {
          x.groupName = objInFor.groupName;
          x.keyId = objInFor.viewFeatureId;
          //x.buttonName = string.Format("{0}_{1}", x.buttonName, objInFor.viewFeatureId);//生成Web应用出错
          x.buttonName = Format('btn{0}', objInFor.viewFeatureId);
          if (IsNullOrEmpty(x.commandName) == true) {
            x.commandName = objInFor.commandName;
            x.buttonName = objInFor.buttonName;
            x.text = objInFor.text;
          }
          x.seqNum = objInFor.seqNum;
          const objControl = clsASPButtonBLEx.GetButton_ButtonTab(x);

          objASPControlGroupENEx.arrSubAspControlLst2.push(objControl);
        }
        arrControlSet.push(objASPControlGroupENEx);
        break;
      case enumPrjFeature.SetFieldValue_0148:
        arrButtonTabSet_In = await ButtonTabEx_GetObjExLstByFeatureRegionFlds(
          objInFor,
          intAppTypeId,
        );
        if (arrButtonTabSet_In == null) continue;
        //const objDiv = clsASPDivBLEx.GetEmptyDiv();
        if (objInFor.valueGivingModeId != enumValueGivingMode.DefaultValue_01) {
          objASPControlGroupENEx = new ASPControlGroupEx();
          objASPControlGroupENEx.orderNum = objInFor.seqNum;
          objASPControlGroupENEx.groupName = objInFor.groupName;
          objASPControlGroupENEx.keyId = objInFor.viewFeatureId;
          const arrvViewFeatureFlds0 = await ViewFeatureFldsEx_GetObjExLstByRegionIdCache(
            objInFor.viewFeatureId,
          );
          arrvViewFeatureFlds = arrvViewFeatureFlds0.map(ViewFeatureFldsEx_CopyToEx);

          // const arrExclude: Array<string> = [
          //   enumCtlType.GivenValue_35,
          //   enumCtlType.DefaultValue_36,
          // ];

          arrvViewFeatureFlds = arrvViewFeatureFlds.filter(
            (x) => x.ctlTypeId != enumCtlType.GivenValue_35,
          );
          const strItemName4MultiModel = '';
          const arrControls: Array<ASPControlEx> = arrvViewFeatureFlds.map((obj) =>
            clsASPControlBLEx.GetControl_Asp(obj, strItemName4MultiModel),
          );
          for (const x of arrControls) {
            objASPControlGroupENEx.arrSubAspControlLst2.push(x);
          }
          for (const x of arrButtonTabSet_In) {
            x.groupName = objInFor.groupName;
            x.keyId = objInFor.viewFeatureId;
            //x.buttonName = string.Format("{0}_{1}", x.buttonName, objInFor.viewFeatureId);//生成Web应用出错
            x.buttonName = Format('btn{0}', objInFor.viewFeatureId);
            if (IsNullOrEmpty(x.commandName) == true) {
              x.commandName = objInFor.commandName;
              x.buttonName = objInFor.buttonName;
              x.text = objInFor.text;
            }
            x.seqNum = objInFor.seqNum;
            const objControl = clsASPButtonBLEx.GetButton_ButtonTab(x);
            objASPControlGroupENEx.arrSubAspControlLst2.push(objControl);
          }
          arrControlSet.push(objASPControlGroupENEx);
        }
        break;
      default:
        arrButtonTabSet_In = await ButtonTabEx_GetObjExLstByFeatureRegionFlds(
          objInFor,
          intAppTypeId,
        );
        if (arrButtonTabSet_In == null) continue;
        for (const x of arrButtonTabSet_In) {
          x.groupName = objInFor.groupName;
          x.keyId = objInFor.viewFeatureId;
          //x.buttonName = string.Format("{0}_{1}", x.buttonName, objInFor.viewFeatureId);//生成Web应用出错
          x.buttonName = Format('btn{0}', objInFor.viewFeatureId);
          if (IsNullOrEmpty(x.commandName) == true) {
            x.commandName = objInFor.commandName;
            x.buttonName = objInFor.buttonName;
            x.text = objInFor.text;
          }
          x.seqNum = objInFor.seqNum;
          const objControl = clsASPButtonBLEx.GetButton_ButtonTab(x);
          objControl.orderNum = objInFor.seqNum;
          arrControlSet.push(objControl);
        }
        break;
    }
  }
  return arrControlSet;
}

/**
 * 检查区域控件，并回溯修改界面的错误信息
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strRegionId: 区域Id
 * @param strCmPrjId: CM工程Id
 * @param strOpUserId: 操作用户Id
 * @returns 获取的相应对象列表
 */
export async function FeatureRegionFldsEx_CheckRegionFldsUp(
  strRegionId: string,
  strCmPrjId: string,
  strOpUserId: string,
): Promise<boolean> {
  const strThisFuncName = FeatureRegionFldsEx_CheckRegionFldsUp.name;
  const strAction = 'CheckRegionFldsUp';
  const strUrl = FeatureRegionFldsEx_GetWebApiUrl(featureRegionFldsEx_Controller, strAction);
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
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function FeatureRegionFldsEx_GetWebApiUrl(strController: string, strAction: string): string {
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
export function FeatureRegionFldsEx_FuncMapByFldName(
  strFldName: string,
  objFeatureRegionFldsEx: clsFeatureRegionFldsENEx,
) {
  const strThisFuncName = FeatureRegionFldsEx_FuncMapByFldName.name;
  console.log(objFeatureRegionFldsEx);
  let strMsg = '';
  //如果是本表中字段，不需要映射
  const arrFldName = clsFeatureRegionFldsEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsFeatureRegionFldsENEx.con_FeatureName:
      return FeatureRegionFldsEx_FuncMapFeatureName(objFeatureRegionFldsEx);
    case clsFeatureRegionFldsENEx.con_TabName:
      return FeatureRegionFldsEx_FuncMapTabName(objFeatureRegionFldsEx);
    case clsFeatureRegionFldsENEx.con_RegionTypeName:
      return FeatureRegionFldsEx_FuncMapRegionTypeName(objFeatureRegionFldsEx);
    case clsFeatureRegionFldsENEx.con_CtlCnName:
      return FeatureRegionFldsEx_FuncMapCtlCnName(objFeatureRegionFldsEx);
    case clsFeatureRegionFldsENEx.con_CtlTypeAbbr:
      return FeatureRegionFldsEx_FuncMapCtlTypeAbbr(objFeatureRegionFldsEx);
    case clsFeatureRegionFldsENEx.con_ViewImplName:
      return FeatureRegionFldsEx_FuncMapViewImplName(objFeatureRegionFldsEx);
    case clsFeatureRegionFldsENEx.con_CtlTypeName:
      return FeatureRegionFldsEx_FuncMapCtlTypeName(objFeatureRegionFldsEx);
    case clsFeatureRegionFldsENEx.con_ValueGivingModeName:
      return FeatureRegionFldsEx_FuncMapValueGivingModeName(objFeatureRegionFldsEx);
    case clsFeatureRegionFldsENEx.con_TabFeatureName:
      return FeatureRegionFldsEx_FuncMapTabFeatureName(objFeatureRegionFldsEx);
    case clsFeatureRegionFldsENEx.con_RegionName:
      return FeatureRegionFldsEx_FuncMapRegionName(objFeatureRegionFldsEx);
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
export async function FeatureRegionFldsEx_FuncMapFeatureName(
  objFeatureRegionFlds: clsFeatureRegionFldsENEx,
) {
  const strThisFuncName = FeatureRegionFldsEx_FuncMapFeatureName.name;
  try {
    if (IsNullOrEmpty(objFeatureRegionFlds.featureName) == true) {
      const PrjFeatureFeatureId = objFeatureRegionFlds.featureId;
      const PrjFeatureFeatureName = await vPrjFeatureSim_func(
        clsPrjFeatureEN.con_FeatureId,
        clsPrjFeatureEN.con_FeatureName,
        PrjFeatureFeatureId,
      );
      objFeatureRegionFlds.featureName = PrjFeatureFeatureName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000326)函数映射表对象数据出错,{0}.(in {1}.{2})',
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
export async function FeatureRegionFldsEx_FuncMapTabName(
  objFeatureRegionFlds: clsFeatureRegionFldsENEx,
) {
  const strThisFuncName = FeatureRegionFldsEx_FuncMapTabName.name;
  try {
    if (IsNullOrEmpty(objFeatureRegionFlds.tabName) == true) {
      const vPrjTabSimTabId = objFeatureRegionFlds.releTabId;
      objFeatureRegionFlds.tabName = vPrjTabSimTabId;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000339)函数映射表对象数据出错,{0}.(in {1}.{2})',
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
export async function FeatureRegionFldsEx_FuncMapRegionTypeName(
  objFeatureRegionFlds: clsFeatureRegionFldsENEx,
) {
  const strThisFuncName = FeatureRegionFldsEx_FuncMapRegionTypeName.name;
  const viewRegionStore = useviewRegionStore();
  try {
    if (IsNullOrEmpty(objFeatureRegionFlds.regionTypeName) == true) {
      const ViewRegionRegionId = objFeatureRegionFlds.regionId;
      const ViewRegionRegionTypeId = await viewRegionStore.getRegionTypeId(ViewRegionRegionId);
      const RegionTypeRegionTypeId = ViewRegionRegionTypeId;
      const RegionTypeRegionTypeName = await RegionType_func(
        clsRegionTypeEN.con_RegionTypeId,
        clsRegionTypeEN.con_RegionTypeName,
        RegionTypeRegionTypeId,
      );
      objFeatureRegionFlds.regionTypeName = RegionTypeRegionTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000320)函数映射表对象数据出错,{0}.(in {1}.{2})',
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
export async function FeatureRegionFldsEx_FuncMapCtlCnName(
  objFeatureRegionFlds: clsFeatureRegionFldsENEx,
) {
  const strThisFuncName = FeatureRegionFldsEx_FuncMapCtlCnName.name;
  try {
    if (IsNullOrEmpty(objFeatureRegionFlds.ctlCnName) == true) {
      const CtlTypeAbbrCtlTypeId = objFeatureRegionFlds.ctlTypeId;
      const CtlTypeAbbrCtlCnName = await CtlType_func(
        clsCtlTypeEN.con_CtlTypeId,
        clsCtlTypeEN.con_CtlCnName,
        CtlTypeAbbrCtlTypeId,
      );
      objFeatureRegionFlds.ctlCnName = CtlTypeAbbrCtlCnName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000357)函数映射表对象数据出错,{0}.(in {1}.{2})',
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
export async function FeatureRegionFldsEx_FuncMapCtlTypeAbbr(
  objFeatureRegionFlds: clsFeatureRegionFldsENEx,
) {
  const strThisFuncName = FeatureRegionFldsEx_FuncMapCtlTypeAbbr.name;
  try {
    if (IsNullOrEmpty(objFeatureRegionFlds.ctlTypeAbbr) == true) {
      const CtlTypeAbbrCtlTypeId = objFeatureRegionFlds.ctlTypeId;
      const CtlTypeAbbrCtlTypeAbbr = await CtlType_func(
        clsCtlTypeEN.con_CtlTypeId,
        clsCtlTypeEN.con_CtlTypeAbbr,
        CtlTypeAbbrCtlTypeId,
      );
      objFeatureRegionFlds.ctlTypeAbbr = CtlTypeAbbrCtlTypeAbbr;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000358)函数映射表对象数据出错,{0}.(in {1}.{2})',
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
export async function FeatureRegionFldsEx_FuncMapViewImplName(
  objFeatureRegionFlds: clsFeatureRegionFldsENEx,
) {
  const strThisFuncName = FeatureRegionFldsEx_FuncMapViewImplName.name;
  try {
    if (IsNullOrEmpty(objFeatureRegionFlds.viewImplName) == true) {
      const ViewImplementationViewImplId = objFeatureRegionFlds.viewImplId;
      const ViewImplementationViewImplName = await ViewImplementation_func(
        clsViewImplementationEN.con_ViewImplId,
        clsViewImplementationEN.con_ViewImplName,
        ViewImplementationViewImplId,
      );
      objFeatureRegionFlds.viewImplName = ViewImplementationViewImplName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000386)函数映射表对象数据出错,{0}.(in {1}.{2})',
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
export async function FeatureRegionFldsEx_FuncMapCtlTypeName(
  objFeatureRegionFlds: clsFeatureRegionFldsENEx,
) {
  const strThisFuncName = FeatureRegionFldsEx_FuncMapCtlTypeName.name;
  try {
    if (IsNullOrEmpty(objFeatureRegionFlds.ctlTypeName) == true) {
      const CtlTypeAbbrCtlTypeId = objFeatureRegionFlds.ctlTypeId;
      const CtlTypeAbbrCtlTypeName = await CtlType_func(
        clsCtlTypeEN.con_CtlTypeId,
        clsCtlTypeEN.con_CtlTypeName,
        CtlTypeAbbrCtlTypeId,
      );
      objFeatureRegionFlds.ctlTypeName = CtlTypeAbbrCtlTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000297)函数映射表对象数据出错,{0}.(in {1}.{2})',
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
export async function FeatureRegionFldsEx_FuncMapValueGivingModeName(
  objFeatureRegionFlds: clsFeatureRegionFldsENEx,
) {
  const strThisFuncName = FeatureRegionFldsEx_FuncMapValueGivingModeName.name;
  try {
    if (IsNullOrEmpty(objFeatureRegionFlds.valueGivingModeName) == true) {
      const ValueGivingModeValueGivingModeId = objFeatureRegionFlds.valueGivingModeId;
      const ValueGivingModeValueGivingModeName = await ValueGivingMode_func(
        clsValueGivingModeEN.con_ValueGivingModeId,
        clsValueGivingModeEN.con_ValueGivingModeName,
        ValueGivingModeValueGivingModeId,
      );
      objFeatureRegionFlds.valueGivingModeName = ValueGivingModeValueGivingModeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000387)函数映射表对象数据出错,{0}.(in {1}.{2})',
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
export async function FeatureRegionFldsEx_FuncMapTabFeatureName(
  objFeatureRegionFlds: clsFeatureRegionFldsENEx,
) {
  const strThisFuncName = FeatureRegionFldsEx_FuncMapTabFeatureName.name;
  try {
    if (IsNullOrEmpty(objFeatureRegionFlds.tabFeatureName) == true) {
      const TabFeatureTabFeatureId = objFeatureRegionFlds.tabFeatureId;
      const TabFeatureTabFeatureName = await TabFeature_func(
        clsTabFeatureEN.con_TabFeatureId,
        clsTabFeatureEN.con_TabFeatureName,
        TabFeatureTabFeatureId,
        clsPrivateSessionStorage.currSelPrjId,
      );
      objFeatureRegionFlds.tabFeatureName = TabFeatureTabFeatureName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000388)函数映射表对象数据出错,{0}.(in {1}.{2})',
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
export async function FeatureRegionFldsEx_FuncMapRegionName(
  objFeatureRegionFlds: clsFeatureRegionFldsENEx,
) {
  const strThisFuncName = FeatureRegionFldsEx_FuncMapRegionName.name;
  const viewRegionStore = useviewRegionStore();
  try {
    if (IsNullOrEmpty(objFeatureRegionFlds.regionName) == true) {
      const ViewRegionRegionId = objFeatureRegionFlds.regionId;
      const ViewRegionRegionName = await viewRegionStore.getName(ViewRegionRegionId);
      objFeatureRegionFlds.regionName = ViewRegionRegionName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000344)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      featureRegionFldsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_CopyToEx)
 * @param objFeatureRegionFldsENS:源对象
 * @returns 目标对象=>clsFeatureRegionFldsEN:objFeatureRegionFldsENT
 **/
export function FeatureRegionFldsEx_CopyToEx(
  objFeatureRegionFldsENS: clsFeatureRegionFldsEN,
): clsFeatureRegionFldsENEx {
  const strThisFuncName = FeatureRegionFldsEx_CopyToEx.name;
  const objFeatureRegionFldsENT = new clsFeatureRegionFldsENEx();
  try {
    ObjectAssign(objFeatureRegionFldsENT, objFeatureRegionFldsENS);
    return objFeatureRegionFldsENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      featureRegionFldsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objFeatureRegionFldsENT;
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
      case clsFeatureRegionFldsENEx.con_TabNameEx:
        return (a: clsFeatureRegionFldsENEx, b: clsFeatureRegionFldsENEx) => {
          return a.tabNameEx.localeCompare(b.tabNameEx);
        };
      case clsFeatureRegionFldsENEx.con_CommandNameEx:
        return (a: clsFeatureRegionFldsENEx, b: clsFeatureRegionFldsENEx) => {
          return a.commandNameEx.localeCompare(b.commandNameEx);
        };
      case clsFeatureRegionFldsENEx.con_TdClass:
        return (a: clsFeatureRegionFldsENEx, b: clsFeatureRegionFldsENEx) => {
          return a.tdClass.localeCompare(b.tdClass);
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
      case clsFeatureRegionFldsENEx.con_TabNameEx:
        return (a: clsFeatureRegionFldsENEx, b: clsFeatureRegionFldsENEx) => {
          return b.tabNameEx.localeCompare(a.tabNameEx);
        };
      case clsFeatureRegionFldsENEx.con_CommandNameEx:
        return (a: clsFeatureRegionFldsENEx, b: clsFeatureRegionFldsENEx) => {
          return b.commandNameEx.localeCompare(a.commandNameEx);
        };
      case clsFeatureRegionFldsENEx.con_TdClass:
        return (a: clsFeatureRegionFldsENEx, b: clsFeatureRegionFldsENEx) => {
          return b.tdClass.localeCompare(a.tdClass);
        };

      default:
        return FeatureRegionFlds_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function FeatureRegionFldsEx_GetObjExLstByPagerCache(
  objPagerPara: stuPagerPara,
  strRegionId: string,
): Promise<Array<clsFeatureRegionFldsENEx>> {
  const strThisFuncName = 'GetObjLstByPagerCache';
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  const isFuncMapKey = `${objSortInfo.SortFld}`;
  const arrFeatureRegionFldsObjLst = await FeatureRegionFlds_GetObjLstCache(strRegionId);
  //从缓存中获取对象，如果缓存中不存在就扩展复制
  const arrNewObj = new Array<clsFeatureRegionFldsENEx>();
  const arrFeatureRegionFldsExObjLst = arrFeatureRegionFldsObjLst.map((obj) => {
    const cacheKey = `${obj.viewFeatureId}_${obj.regionId}`;
    if (featureRegionFldsCache[cacheKey]) {
      const oldObj = featureRegionFldsCache[cacheKey];
      return oldObj;
    } else {
      const newObj = FeatureRegionFldsEx_CopyToEx(obj);
      arrNewObj.push(newObj);
      featureRegionFldsCache[cacheKey] = newObj;
      return newObj;
    }
  });
  for (const newObj of arrNewObj) {
    for (const strFldName of Object.keys(isFuncMapCache)) {
      await FeatureRegionFldsEx_FuncMapByFldName(strFldName, newObj);
    }
  }
  //检查关于当前扩展排序字段是否获取得值，如果没有获取过，就获取，并存缓存
  const bolIsFuncMap = isFuncMapCache[isFuncMapKey];
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsFeatureRegionFldsEN.AttributeName.indexOf(objSortInfo.SortFld) == -1 &&
    (bolIsFuncMap == false || bolIsFuncMap == undefined)
  ) {
    for (const newObj of arrFeatureRegionFldsExObjLst) {
      await FeatureRegionFldsEx_FuncMapByFldName(objSortInfo.SortFld, newObj);
      const cacheKey = `${newObj.viewFeatureId}_${newObj.regionId}`;
      featureRegionFldsCache[cacheKey] = newObj;
    }
    isFuncMapCache[isFuncMapKey] = true;
  }
  if (arrFeatureRegionFldsExObjLst.length == 0) return arrFeatureRegionFldsExObjLst;
  let arrFeatureRegionFldsSel: Array<clsFeatureRegionFldsENEx> = arrFeatureRegionFldsExObjLst;
  const objFeatureRegionFldsCond = objPagerPara.conditionCollection;
  if (objFeatureRegionFldsCond == null) {
    const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return arrFeatureRegionFldsExObjLst;
  }
  try {
    for (const objCondition of objFeatureRegionFldsCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrFeatureRegionFldsSel = arrFeatureRegionFldsSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrFeatureRegionFldsSel = arrFeatureRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrFeatureRegionFldsSel = arrFeatureRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrFeatureRegionFldsSel = arrFeatureRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrFeatureRegionFldsSel = arrFeatureRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrFeatureRegionFldsSel = arrFeatureRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrFeatureRegionFldsSel = arrFeatureRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrFeatureRegionFldsSel = arrFeatureRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.split(',');
            arrFeatureRegionFldsSel = arrFeatureRegionFldsSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrFeatureRegionFldsSel = arrFeatureRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrFeatureRegionFldsSel = arrFeatureRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrFeatureRegionFldsSel = arrFeatureRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrFeatureRegionFldsSel = arrFeatureRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrFeatureRegionFldsSel = arrFeatureRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrFeatureRegionFldsSel = arrFeatureRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrFeatureRegionFldsSel.length == 0) return arrFeatureRegionFldsSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      arrFeatureRegionFldsSel = arrFeatureRegionFldsSel.sort(
        FeatureRegionFldsEx_SortFunByKey(objSortInfo.SortFld, objSortInfo.SortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrFeatureRegionFldsSel = arrFeatureRegionFldsSel.sort(objPagerPara.sortFun);
    }
    arrFeatureRegionFldsSel = arrFeatureRegionFldsSel.slice(intStart, intEnd);
    return arrFeatureRegionFldsSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      featureRegionFldsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsFeatureRegionFldsENEx>();
}
