import { clsASPButtonBLEx } from '../GeneCSharp/clsASPButtonBLEx';
import { clsASPControlBLEx } from '../GeneCSharp/clsASPControlBLEx';
import { clsFieldTabBLEx } from '../Table_Field/clsFieldTabBLEx';
import { clsvViewFeatureFldsBLEx } from './clsvViewFeatureFldsBLEx';
import { FeatureFuncRela_GetObjLstCache } from '@/ts/L3ForWApi/PrjFunction/clsFeatureFuncRelaWApi';
import { PrjFeature_GetFirstObjAsync } from '@/ts/L3ForWApi/PrjFunction/clsPrjFeatureWApi';
import { vFunction4GeneCode_Sim_GetObjLstAsync } from '@/ts/L3ForWApi/PrjFunction/clsvFunction4GeneCode_SimWApi';
import { CtlType_GetObjByCtlTypeIdCache } from '@/ts/L3ForWApi/PrjInterface/clsCtlTypeWApi';
import {
  FeatureRegionFlds_GetObjByViewFeatureIdAsync,
  FeatureRegionFlds_GetObjLstAsync,
  FeatureRegionFlds_GetObjLstCache,
} from '@/ts/L3ForWApi/RegionManage/clsFeatureRegionFldsWApi';
import { TabFeature_GetFirstObjAsync } from '@/ts/L3ForWApi/Table_Field/clsTabFeatureWApi';
import { enumValueGivingMode } from '@/ts/L0Entity/GeneCode/clsValueGivingModeEN';
import { ASPControlEx } from '@/ts/L0Entity/GeneCSharp/ASPControlEx';
import { ASPButtonEx } from '@/ts/L0Entity/GeneCSharpEx/clsASPButtonENEx';
import { ASPControlGroupEx } from '@/ts/L0Entity/GeneCSharpEx/clsASPControlGroupENEx';
import { clsButtonTabENEx } from '@/ts/L0Entity/PrjFunction/clsButtonTabENEx';
import { clsFeatureFuncRelaEN } from '@/ts/L0Entity/PrjFunction/clsFeatureFuncRelaEN';
import { clsPrjFeatureEN } from '@/ts/L0Entity/PrjFunction/clsPrjFeatureEN';
import { enumPrjFeatureType } from '@/ts/L0Entity/PrjFunction/clsPrjFeatureTypeEN';
import { clsvFunction4GeneCode_SimENEx } from '@/ts/L0Entity/PrjFunction/clsvFunction4GeneCode_SimENEx';
import { clsCtlTypeEN, enumCtlType } from '@/ts/L0Entity/PrjInterface/clsCtlTypeEN';
import { clsViewInfoENEx4GC } from '@/ts/L0Entity/PrjInterface/clsViewInfoENEx4GC';
import { clsFeatureRegionFldsEN } from '@/ts/L0Entity/RegionManage/clsFeatureRegionFldsEN';
import { clsFeatureRegionFldsENEx4GC } from '@/ts/L0Entity/RegionManage/clsFeatureRegionFldsENEx4GC';
import { enumRegionType } from '@/ts/L0Entity/RegionManage/clsRegionTypeEN';

import { clsTabFeatureEN } from '@/ts/L0Entity/Table_Field/clsTabFeatureEN';
import { ButtonTabEx_GetObjExLstByFeatureRegionFldsLst } from '@/ts/L3ForWApiEx/PrjFunction/clsButtonTabExWApi';
import {
  FeatureRegionFldsEx_CopyToEx4GC,
  FeatureRegionFldsEx_GetControlLstByFeatureRegionFldsLst,
} from '@/ts/L3ForWApiEx/RegionManage/clsFeatureRegionFldsExWApi';
import { ViewFeatureFldsEx_CopyToEx } from '@/ts/L3ForWApiEx/RegionManage/clsViewFeatureFldsExWApi';
import { ViewRegionEx_GetRegionIdByTypeCache } from '@/ts/L3ForWApiEx/RegionManage/clsViewRegionExWApi';
import { ViewRegionRelaEx_GetRegionIdLstByViewIdCache } from '@/ts/L3ForWApiEx/RegionManage/clsViewRegionRelaExWApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
//import { ViewRegionRelaEx_GetRegionIdLstByViewIdCache } from "@/ts/L3ForWApiEx/RegionManage/clsViewRegionRelaExWApi";
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import {
  vPrjFeatureSim_GetNameByFeatureIdCache,
  vPrjFeatureSim_GetObjByFeatureIdCache,
} from '@/ts/L3ForWApi/PrjFunction/clsvPrjFeatureSimWApi';

export class clsFeatureRegionFldsBLEx {
  public objCtlTypeAbbr: clsCtlTypeEN = new clsCtlTypeEN();
  public static async initFeatureRegionFldSet(objViewInfoENEx: clsViewInfoENEx4GC) {
    const arrRegionId: Array<string> = await ViewRegionRelaEx_GetRegionIdLstByViewIdCache(
      objViewInfoENEx.viewId,
      clsPrivateSessionStorage.cmPrjId,
    );
    //			clsViewFldInfo objViewFldInfo = new clsViewFldInfo(objViewInfoENEx.viewId);
    objViewInfoENEx.TabKeyFldNum = 0;

    //获取区域ID
    const strRegionId = await ViewRegionEx_GetRegionIdByTypeCache(
      objViewInfoENEx.viewId,
      enumRegionType.FeatureRegion_0008,
      clsPrivateSessionStorage.cmPrjId,
    );
    if (IsNullOrEmpty(strRegionId) == true) {
      return;
    }

    objViewInfoENEx.arrFeatureRegionFlds = await clsFeatureRegionFldsBLEx.GetObjEx4GCLst(
      arrRegionId,
    );

    //objViewInfoENEx.objFeatureRegionENEx.FieldNum = objViewInfoENEx.arrFeatureRegionFlds.length;
    objViewInfoENEx.arrFunction4GeneCodeSetByFeatureLst =
      new Array<clsvFunction4GeneCode_SimENEx>();
    for (const objFeatureRegionFldsEx of objViewInfoENEx.arrFeatureRegionFlds) {
      //     objFeatureRegionFldsEx.objCtlTypeAbbr = CtlType_GetObjByDataTypeIdCache(objQryRegionFldsEx.ctlTypeId);
      if (objFeatureRegionFldsEx.releFldId == '') {
        objFeatureRegionFldsEx.ObjFieldTabENEx = await clsFieldTabBLEx.GetObjExByFldId(
          objFeatureRegionFldsEx.releFldId,
        );
      }
      const objCtlTypeAbbr = await CtlType_GetObjByCtlTypeIdCache(objFeatureRegionFldsEx.ctlTypeId);
      if (objCtlTypeAbbr == null) {
        const strMsg = Format(
          '控件类型Id:[{0}]，没有相应的控件类型，请检查！',
          objFeatureRegionFldsEx.ctlTypeId,
        );
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      objFeatureRegionFldsEx.objCtlTypeAbbr = objCtlTypeAbbr;

      const arrObjLst = await this.GetFunction4GeneCodeLstByFeatureIdCache(
        objFeatureRegionFldsEx.featureId,
        objViewInfoENEx.applicationTypeId,
      );
      for (const objInFor of arrObjLst) {
        if (
          objViewInfoENEx.arrFunction4GeneCodeSetByFeatureLst.find(
            (x) => x.funcId4GC == objInFor.funcId4GC,
          ) == null
        ) {
          objViewInfoENEx.arrFunction4GeneCodeSetByFeatureLst.push(objInFor);
        }
      }
    }
  }

  public static async GetFunction4GeneCodeLstByFeatureIdCache(
    strFeatureId: string,
    intApplicationTypeId: number,
  ) {
    const arrFeatureFuncRelaCache: Array<clsFeatureFuncRelaEN> =
      await FeatureFuncRela_GetObjLstCache(intApplicationTypeId);
    const arrFeatureFuncRela: Array<clsFeatureFuncRelaEN> = arrFeatureFuncRelaCache.filter(
      (x) => x.featureId == strFeatureId,
    );

    const arrFuncId4GC: Array<string> = arrFeatureFuncRela.map((x) => x.funcId4GC);
    const arrFunction4GeneCodeObjLst = await vFunction4GeneCode_Sim_GetObjLstAsync('1=1');
    //return arrFeatureFuncRelaObjLstCache;
    const arrFunction4GeneCodeObjLst_Sel = arrFunction4GeneCodeObjLst.filter(
      (x) => arrFuncId4GC.indexOf(x.funcId4GC) > -1,
    );
    return arrFunction4GeneCodeObjLst_Sel;
  }
  public static strPrjIdCache_Init = '';

  //public static Func < clsFeatureRegionFldsENEx4GC, ASPControlGroupEx > GetButtonGroup4PureHtml = obj => GetButtonGroup(obj, true);
  //public static Func < clsFeatureRegionFldsENEx4GC, ASPControlGroupEx > GetButtonGroup4NotPureHtml = obj => GetButtonGroup(obj, false);
  public static GetButtonGroup(
    objFeatureRegionFldsENEx: clsFeatureRegionFldsENEx4GC,
    bolIs4PureHtml = false,
  ): ASPControlGroupEx {
    const objASPControlGroupENEx: ASPControlGroupEx = new ASPControlGroupEx();

    const objASPButtonENEx: ASPButtonEx = new ASPButtonEx();
    objASPButtonENEx.is4PureHtml = bolIs4PureHtml;
    objASPButtonENEx.ctrlId = objFeatureRegionFldsENEx.buttonName;
    objASPButtonENEx.onClick = `${objFeatureRegionFldsENEx.buttonName}_Click`;

    objASPButtonENEx.onClick4Html = `${objFeatureRegionFldsENEx.buttonName}_Click()`;

    objASPButtonENEx.text = objFeatureRegionFldsENEx.text; // "添加记录";
    objASPButtonENEx.value = objFeatureRegionFldsENEx.text; // "添加记录";
    objASPButtonENEx.type = 'submit';
    const arrName: Array<string> = ['导出Excel', '查询'];
    if (arrName.indexOf(objASPButtonENEx.text) > -1) {
      objASPButtonENEx.class = 'btn btn-outline-warning text-nowrap';
      objASPButtonENEx.cssClass = 'btn btn-outline-warning text-nowrap';
    } else {
      objASPButtonENEx.class = 'btn btn-outline-info text-nowrap';
      objASPButtonENEx.cssClass = 'btn btn-outline-info text-nowrap';
    }
    //< input value = "查询" id = "btnQuery" Name = "action:QueryAjax" type = "submit" class="btn btn-outline-warning" onclick="OnClickInFeatureRegion()" />

    objASPButtonENEx.name4MvcAjax = `action:${objFeatureRegionFldsENEx.buttonName.substring(
      3,
    )}Ajax`;
    objASPButtonENEx.onClick4MvcAjax = `OnClickInFeatureRegion()`;

    //objASPButtonENEx.style = "z-index: 107;";

    //objASPButtonENEx.width = objFeatureRegionFldsENEx.width;
    //objASPButtonENEx.height = 0;
    objASPControlGroupENEx.arrSubAspControlLst2.push(objASPButtonENEx);

    return objASPControlGroupENEx;
  }
  /// <summary>
  /// 根据关键字获取相关对象, 从缓存的对象列表中获取.没有就返回null.
  /// </summary>
  /// <param name = "arrRegionId">所给的关键字</param>
  /// <param name = "strPrjId">所给的关键字</param>
  /// <returns>根据关键字获取的对象</returns>
  public static async GetObjLstByRegionIdsCacheEx(arrRegionId: Array<string>) {
    //初始化列表缓存
    const arrFeatureRegionFldsObjLst_Sel: Array<clsFeatureRegionFldsEN> =
      new Array<clsFeatureRegionFldsEN>();

    for (const strRegionId of arrRegionId) {
      const arrObjLstCache: Array<clsFeatureRegionFldsEN> = await FeatureRegionFlds_GetObjLstCache(
        strRegionId,
      );

      const arrFeatureRegionFldsObjLst_Sel1: Array<clsFeatureRegionFldsEN> = arrObjLstCache
        .filter((x) => x.inUse == true)
        .sort((x) => x.seqNum);
      for (const obj of arrFeatureRegionFldsObjLst_Sel1) {
        arrFeatureRegionFldsObjLst_Sel.push(obj);
      }
    }
    //if (arrFeatureRegionFldsObjLst_Sel.length == 0)
    //{
    //    return null;
    //}
    return arrFeatureRegionFldsObjLst_Sel;
  }
  /// <summary>
  /// 根据关键字获取相关对象, 从缓存的对象列表中获取.没有就返回null.
  /// </summary>
  /// <param name = "strRegionId">关键字:regionId</param>
  /// <param name = "strPrjId">工程Id</param>
  /// <returns>根据关键字获取的对象</returns>
  public static async GetObjLstByRegionIdCacheEx(strRegionId: string) {
    //初始化列表缓存
    const arrObjLstCache: Array<clsFeatureRegionFldsEN> = await FeatureRegionFlds_GetObjLstCache(
      strRegionId,
    );

    const arrFeatureRegionFldsObjLst_Sel1 = arrObjLstCache
      .filter((x) => x.regionId == strRegionId && x.inUse == true)
      .sort((x) => x.seqNum);
    const arrFeatureRegionFldsObjLst_Sel: Array<clsFeatureRegionFldsEN> =
      new Array<clsFeatureRegionFldsEN>();
    for (const obj of arrFeatureRegionFldsObjLst_Sel1) {
      arrFeatureRegionFldsObjLst_Sel.push(obj);
    }
    //if (arrFeatureRegionFldsObjLst_Sel.length == 0)
    //{
    //    return null;
    //}
    return arrFeatureRegionFldsObjLst_Sel;
  }

  /// <summary>
  /// 根据viewId获取功能区域字段列表
  /// </summary>
  /// <param name="strViewId">界面Id</param>
  /// <returns></returns>
  public static async GetObjLstByRegionIdEx(strRegionId: string) {
    //初始化列表缓存
    const strCondition = `${clsFeatureRegionFldsEN.con_RegionId} = '${strRegionId}'`;

    const arrFeatureRegionFldsObjLst_Sel: Array<clsFeatureRegionFldsEN> =
      await FeatureRegionFlds_GetObjLstAsync(strCondition);
    return arrFeatureRegionFldsObjLst_Sel;
  }

  public static async GetObjLstByRegionId(strRegionId: string) {
    //初始化列表缓存
    const strCondition = `${clsFeatureRegionFldsEN.con_RegionId}=${strRegionId}`;

    const arrFeatureRegionFldsObjLst_Sel: Array<clsFeatureRegionFldsEN> =
      await FeatureRegionFlds_GetObjLstAsync(strCondition);
    return arrFeatureRegionFldsObjLst_Sel;
  }

  /// <summary>
  /// 为界面功能获取相关的表功能
  /// </summary>
  /// <param name="strViewFeatureId">界面功能Id</param>
  /// <returns>表功能tabFeatureId</returns>
  public static async GetRelaTabFeatureId(strViewFeatureId: string) {
    const obj = await FeatureRegionFlds_GetObjByViewFeatureIdAsync(strViewFeatureId);
    if (obj == null) return '';
    if (IsNullOrEmpty(obj.featureId) == true) return '';
    const strFeatureName = await vPrjFeatureSim_GetNameByFeatureIdCache(obj.featureId);
    let strCondition = `${clsPrjFeatureEN.con_FeatureName}='${strFeatureName}' And ${clsPrjFeatureEN.con_FeatureTypeId}='${enumPrjFeatureType.TabFeature_03}'`;
    const objPrjFeature = await PrjFeature_GetFirstObjAsync(strCondition);
    if (objPrjFeature == null) return '';
    strCondition = `${clsTabFeatureEN.con_FeatureId}='${objPrjFeature.featureId}' And ${clsTabFeatureEN.con_TabId}='${obj.releTabId}'`;
    const objTabFeature = await TabFeature_GetFirstObjAsync(strCondition);
    if (objTabFeature == null) return '';
    return objTabFeature.tabFeatureId;
  }
  /// <summary>
  /// 为界面功能获取相关的表功能
  /// </summary>
  /// <param name="strFeatureId">功能Id</param>
  /// <param name="strTabId">表Id</param>
  /// <returns>相关父表功能Id(tabFeatureId)</returns>
  public static async GetRelaTabFeatureIdByFeatureId(strFeatureId: string, strTabId: string) {
    const objPrjFeature_Sub = await vPrjFeatureSim_GetObjByFeatureIdCache(strFeatureId);
    if (objPrjFeature_Sub == null) return '';
    let strCondition = `${clsPrjFeatureEN.con_FeatureName}='${objPrjFeature_Sub.featureName}' And ${clsPrjFeatureEN.con_FeatureTypeId}='${enumPrjFeatureType.TabFeature_03}'`;
    const objPrjFeature = await PrjFeature_GetFirstObjAsync(strCondition);
    if (objPrjFeature == null) return '';
    strCondition = `${clsTabFeatureEN.con_FeatureId}='${objPrjFeature.featureId}' And ${clsTabFeatureEN.con_TabId}='${strTabId}'`;
    const objTabFeature = await TabFeature_GetFirstObjAsync(strCondition);
    if (objTabFeature == null) return '';
    return objTabFeature.tabFeatureId;
  }

  public static async GetObjEx4GCLst(arrRegionId: Array<string>) {
    //"regionId = " + strRegionId + " order by seqNum"
    const arrObjENExArray: Array<clsFeatureRegionFldsENEx4GC> =
      new Array<clsFeatureRegionFldsENEx4GC>();
    const arrObjArray: Array<clsFeatureRegionFldsEN> =
      await clsFeatureRegionFldsBLEx.GetObjLstByRegionIdsCacheEx(arrRegionId);
    for (const objFeatureRegionFlds of arrObjArray) {
      const objFeatureRegionFldsENEx: clsFeatureRegionFldsENEx4GC =
        FeatureRegionFldsEx_CopyToEx4GC(objFeatureRegionFlds);
      arrObjENExArray.push(objFeatureRegionFldsENEx);
    }
    return arrObjENExArray;
  }
  public static async GetObjEx4GCLstByRegionId(strRegionId: string) {
    //"regionId = " + strRegionId + " order by seqNum"
    const arrObjENExArray: Array<clsFeatureRegionFldsENEx4GC> =
      new Array<clsFeatureRegionFldsENEx4GC>();
    const arrObjArray: Array<clsFeatureRegionFldsEN> =
      await clsFeatureRegionFldsBLEx.GetObjLstByRegionId(strRegionId);
    for (const objFeatureRegionFlds of arrObjArray) {
      const objFeatureRegionFldsENEx: clsFeatureRegionFldsENEx4GC =
        FeatureRegionFldsEx_CopyToEx4GC(objFeatureRegionFlds);
      arrObjENExArray.push(objFeatureRegionFldsENEx);
    }
    return arrObjENExArray;
  }
  public static async GetObjEx4GCLstByRegionIdEx(strRegionId: string) {
    //"regionId = " + strRegionId + " order by seqNum"
    const arrObjENExArray: Array<clsFeatureRegionFldsENEx4GC> =
      new Array<clsFeatureRegionFldsENEx4GC>();
    const arrObjArray: Array<clsFeatureRegionFldsEN> =
      await clsFeatureRegionFldsBLEx.GetObjLstByRegionId(strRegionId);
    for (const objFeatureRegionFlds of arrObjArray) {
      const objFeatureRegionFldsENEx: clsFeatureRegionFldsENEx4GC =
        FeatureRegionFldsEx_CopyToEx4GC(objFeatureRegionFlds);
      if (IsNullOrEmpty(objFeatureRegionFldsENEx.releFldId) == false) {
        objFeatureRegionFldsENEx.ObjFieldTabENEx = await clsFieldTabBLEx.GetObjExByFldId(
          objFeatureRegionFldsENEx.releFldId,
        );
      }
      const objCtlTypeAbbr = await CtlType_GetObjByCtlTypeIdCache(
        objFeatureRegionFldsENEx.ctlTypeId,
      );
      if (objCtlTypeAbbr == null) {
        const strMsg = Format(
          '控件类型Id:[{0}]，没有相应的控件类型，请检查！',
          objFeatureRegionFldsENEx.ctlTypeId,
        );
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      objFeatureRegionFldsENEx.objCtlTypeAbbr = objCtlTypeAbbr;
      arrObjENExArray.push(objFeatureRegionFldsENEx);
    }
    return arrObjENExArray;
  }

  /// <summary>
  /// 从表功能复制字段到界面功能
  /// </summary>
  /// <param name="strViewFeatureId">界面功能Id</param>
  /// <param name="strTabFeatureId">表功能Id</param>
  /// <param name="strPrjId">工程Id</param>
  /// <param name="strUpdUser">修改用户</param>
  /// <returns></returns>
  //public static async CopyFeatureFldsFromTabFeature2(strViewFeatureId: string, strTabFeatureId: string, strPrjId: string, strUpdUser: string) {
  //    const objFeatureRegionFlds: clsFeatureRegionFldsEN = await FeatureRegionFlds_GetObjByViewFeatureIdCache(strViewFeatureId, strPrjId);
  //    return clsFeatureRegionFldsBLEx.CopyFeatureFldsFromTabFeature(objFeatureRegionFlds, strTabFeatureId, strPrjId, strUpdUser);
  //}
  /// <summary>
  /// 从表功能复制字段到界面功能
  /// </summary>
  /// <param name="objFeatureRegionFlds">界面功能对象</param>
  /// <param name="strTabFeatureId">表功能Id</param>
  /// <param name="strPrjId">工程Id</param>
  /// <param name="strUpdUser">修改用户</param>
  /// <returns></returns>
  //public static CopyFeatureFldsFromTabFeature(objFeatureRegionFlds: clsFeatureRegionFldsEN, strTabFeatureId: string, strPrjId: string, strUpdUser: string): boolean {
  //    const arrvTabFeatureFlds: Array<clsvTabFeatureFldsENEx> = clsvTabFeatureFldsBLEx.GetObjExLstByTabFeatureId(strTabFeatureId);
  //    const arrViewFeatureFlds: Array<clsViewFeatureFldsEN> = arrvTabFeatureFlds
  //        .filter(x => x.fldId != objFeatureRegionFlds.releFldId)
  //        .map(clsViewFeatureFldsBLEx.GetObjByvTabFeatureFlds);
  //    for (const objInFor of arrViewFeatureFlds) {
  //        if (objInFor.fieldTypeId == enumFieldType.OrderNumField_09) continue;

  //        const objvPrjTabFldEN: clsPrjTabFldEN = clsPrjTabFldBLEx.GetObjByFldIdCache(objFeatureRegionFlds.releTabId, strPrjId, objInFor.releFldId);
  //        const objViewFeatureFlds: clsViewFeatureFldsEN = clsViewFeatureFldsBLEx.GetObjByvPrjTabFld(objvPrjTabFldEN);
  //        objViewFeatureFlds.ctrlId = clsCtlTypeBLEx.GetCtrlId(objViewFeatureFlds.ctlTypeId, objvPrjTabFldEN.fldName) + "_OrderNum";
  //        objViewFeatureFlds.SetViewFeatureId(objFeatureRegionFlds.viewFeatureId)
  //            .SetFieldTypeId(enumFieldType.ClassificationField_10)
  //            .SetPrjId(strPrjId)
  //            .SetUpdUser(strUpdUser);
  //        if (objViewFeatureFlds.CheckUniqueness_ViewFeatureId_FldId() == true) {
  //            objViewFeatureFlds.AddNewRecord();
  //        }
  //        else {
  //            objInFor.SetViewFeatureId(objFeatureRegionFlds.viewFeatureId)
  //                .SetCtlTypeId(objViewFeatureFlds.ctlTypeId)
  //                .SetCtrlId(objViewFeatureFlds.ctrlId)
  //                .SetFieldTypeId(enumFieldType.ClassificationField_10)
  //                .SetDsCondStr(objViewFeatureFlds.dsCondStr)
  //                .SetDsDataTextFieldId(objViewFeatureFlds.ds_DataTextFieldId)
  //                .SetDsDataValueFieldId(objViewFeatureFlds.ds_DataValueFieldId)
  //                .SetDs_SQLStr(objViewFeatureFlds.dsSqlStr)
  //                .SetDsTabId(objViewFeatureFlds.dsTabId)
  //                .SetDdlItemsOptionId(objViewFeatureFlds.ddlItemsOptionId)
  //                .SetItemsString(objViewFeatureFlds.itemsString);
  //            const strCondition=  objInFor.GetUniConditionStr_ViewFeatureId_FldId();
  //            const objViewFeatureFldsEN2: clsViewFeatureFldsEN = ViewFeatureFlds_GetFirstObjAsync(strCondition);
  //            objInFor.mId = objViewFeatureFldsEN2.mId;
  //            objInFor.UpdateWithCondition(strCondition);
  //        }
  //    }
  //    return true;
  //}
  public static async GetControlLst4RegoinBak(
    strRegionId: string,
    strCmPrjId: string,
    strItemName4MultiModel = '',
    bolIs4Visible = false,
  ) {
    // const strThisFuncName = 'GetControlLst4Regoin';
    // const strPrjId_p = await CMProjectEx_GetPrjIdByCmPrjIdCache(strCmPrjId);

    let arrFeatureRegionFlds: Array<clsFeatureRegionFldsENEx4GC> =
      await clsFeatureRegionFldsBLEx.GetObjEx4GCLstByRegionId(strRegionId);
    arrFeatureRegionFlds = arrFeatureRegionFlds
      .filter((x) => x.inUse == true)
      .sort((x, y) => x.seqNum - y.seqNum);
    if (bolIs4Visible == true) {
      arrFeatureRegionFlds.forEach((x) => (x.is4Visible = true));
    }
    const arrViewFeatureId_Exclude: Array<string> = arrFeatureRegionFlds
      .filter((x) => x.valueGivingModeId == enumValueGivingMode.DefaultValue_01)
      .map((x) => x.viewFeatureId);

    const arrButtonTabSet: Array<clsButtonTabENEx> =
      await ButtonTabEx_GetObjExLstByFeatureRegionFldsLst(
        arrFeatureRegionFlds,
        Number(clsPrivateSessionStorage.applicationTypeId),
      );

    const arrButtonLst = await arrButtonTabSet.map((obj) =>
      clsASPButtonBLEx.GetButton_ButtonTab(obj),
    );
    const arrvViewFeatureFlds0 = await clsvViewFeatureFldsBLEx.GetObjExLstByRegionId(strRegionId);
    let arrvViewFeatureFlds = arrvViewFeatureFlds0.map(ViewFeatureFldsEx_CopyToEx);

    // const arrExclude: Array<string> = [enumCtlType.GivenValue_35, enumCtlType.DefaultValue_36];
    arrvViewFeatureFlds = arrvViewFeatureFlds
      .filter((x) => x.ctlTypeId != enumCtlType.GivenValue_35)
      .filter((x) => arrViewFeatureId_Exclude.indexOf(x.viewFeatureId) == -1);
    const arrControls: Array<ASPControlEx> = arrvViewFeatureFlds.map((obj) =>
      clsASPControlBLEx.GetControl_Asp(obj, strItemName4MultiModel),
    );
    //arrControls = arrControls.Distinct(new ControlIdComparer());
    //Array<ASPControlEx> arrControls_Sub = arrControls.Distinct();
    const arrControls_All: Array<ASPControlEx> = arrControls.concat(arrButtonLst);
    return arrControls_All;
  }

  public static async GetControlLst4Regoin(
    strRegionId: string,
    strPrjId: string,
    intApplicationTypeId: number,
    // strItemName4MultiModel = '',
    bolIs4Visible = false,
  ) {
    // const strThisFuncName = 'GetControlLst4Regoin';

    // const strPrjId_p = await CMProjectEx_GetPrjIdByCmPrjIdCache(strCmPrjId);

    // const objViewRegion = await ViewRegion_GetObjByRegionIdAsync(strRegionId);
    // if (objViewRegion == null) {
    //   const strMsg = Format(
    //     '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
    //     this.constructor.name,
    //     strThisFuncName,
    //   );
    //   console.error(strMsg);
    //   alert(strMsg);
    //   return;
    // }
    let arrFeatureRegionFlds = await clsFeatureRegionFldsBLEx.GetObjEx4GCLstByRegionId(strRegionId);
    arrFeatureRegionFlds = arrFeatureRegionFlds
      .filter((x) => x.inUse == true)
      .sort((x, y) => x.seqNum - y.seqNum);
    if (bolIs4Visible == true) {
      arrFeatureRegionFlds.forEach((x) => (x.is4Visible = true));
    }

    // const arrViewFeatureId_Exclude: Array<string> = arrFeatureRegionFlds
    //   .filter((x) => x.valueGivingModeId == enumValueGivingMode.DefaultValue_01)
    //   .map((x) => x.viewFeatureId);
    const arrControls_All = await FeatureRegionFldsEx_GetControlLstByFeatureRegionFldsLst(
      arrFeatureRegionFlds,
      intApplicationTypeId,
    );
    //const arrButtonTabSet: Array<clsButtonTabENEx> = await ButtonTabEx_GetObjExLstByFeatureRegionFldsLst(arrFeatureRegionFlds,
    //    objViewRegion.applicationTypeId, strPrjId_p);

    //const arrButtonLst = await arrButtonTabSet.map(obj => clsASPButtonBLEx.GetButton_ButtonTab(obj));
    //let arrvViewFeatureFlds = await clsvViewFeatureFldsBLEx.GetObjExLstByRegionId(strRegionId, strCmPrjId);
    //const arrExclude: Array<string> = [enumCtlType.GivenValue_35, enumCtlType.DefaultValue_36];
    //arrvViewFeatureFlds = arrvViewFeatureFlds
    //    .filter(x => x.ctlTypeId != enumCtlType.GivenValue_35)
    //    .filter(x => arrViewFeatureId_Exclude.indexOf(x.viewFeatureId) == -1);
    //const arrControls: Array<ASPControlEx> = arrvViewFeatureFlds.map(obj => clsASPControlBLEx.GetControl_Asp(obj, strItemName4MultiModel));
    ////arrControls = arrControls.Distinct(new ControlIdComparer());
    ////Array<ASPControlEx> arrControls_Sub = arrControls.Distinct();
    //const arrControls_All: Array<ASPControlEx> = arrControls.concat(arrButtonLst);
    return arrControls_All;
  }
}
