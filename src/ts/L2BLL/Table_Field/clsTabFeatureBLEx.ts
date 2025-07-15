import { clsPrjFeatureBLEx } from '../PrjFunction/clsPrjFeatureBLEx';
import { Projects_GetObjByPrjIdCache } from '@/ts/L3ForWApi/PrjManage/clsProjectsWApi';
import {
  TabFeature_GetMaxStrIdByPrefixAsync,
  TabFeature_GetObjByTabFeatureIdAsync,
  TabFeature_GetObjLstAsync,
  TabFeature_IsExistRecordAsync,
} from '@/ts/L3ForWApi/Table_Field/clsTabFeatureWApi';
import { clsFeatureRegionFldsEN } from '@/ts/L0Entity/RegionManage/clsFeatureRegionFldsEN';
import { clsTabFeatureEN } from '@/ts/L0Entity/Table_Field/clsTabFeatureEN';
import { clsTabFeatureENEx } from '@/ts/L0Entity/Table_Field/clsTabFeatureENEx';
import { TabFeatureEx_CopyToEx } from '@/ts/L3ForWApiEx/Table_Field/clsTabFeatureExWApi';
import {
  vTabFeature_SimEx_CopyToEx,
  vTabFeature_SimEx_GetObjByTabFeatureIdCache,
  vTabFeature_SimEx_GetObjLstCache,
} from '@/ts/L3ForWApiEx/Table_Field/clsvTabFeature_SimExWApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { vPrjFeatureSim_GetObjByFeatureIdCache } from '@/ts/L3ForWApi/PrjFunction/clsvPrjFeatureSimWApi';

export class clsTabFeatureBLEx {
  /// <summary>
  /// 根据条件获取扩展对象列表
  /// (AutoGCLib.BusinessLogicEx4CSharp:Gen_4BLEx_GetObjExLst)
  /// </summary>
  /// <param name = "strCondition">给定条件</param>
  /// <returns>返回扩展对象列表</returns>
  public static async GetObjExLst(strCondition: string) {
    const arrObjExLst = await TabFeature_GetObjLstAsync(strCondition);

    return arrObjExLst;
  }

  /// <summary>
  /// 获取当前关键字的记录对象,用扩展对象的形式表示.
  /// (AutoGCLib.BusinessLogicEx4CSharp:Gen_4BLEx_GetObjExByKey)
  /// </summary>
  /// <param name = "strTabFeatureId">表关键字</param>
  /// <returns>表扩展对象</returns>
  public static async GetObjExByTabFeatureId(strTabFeatureId: string) {
    const strThisFuncName = this.GetObjExByTabFeatureId.name;
    const objTabFeatureEN = await TabFeature_GetObjByTabFeatureIdAsync(strTabFeatureId);
    if (objTabFeatureEN == null) {
      const strMsg = Format(
        '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    const objTabFeatureENEx: clsTabFeatureENEx = TabFeatureEx_CopyToEx(objTabFeatureEN);
    return objTabFeatureENEx;
  }
  /// <summary>
  /// 根据tabId获取featureId列表
  /// </summary>
  /// <param name = "strTabId">给定条件</param>
  /// <returns>返回arrFeatureId列表</returns>
  public static async GetFeatureIdLstByTabIdCache(strTabId: string, strCmPrjId: string) {
    const arrTabFeature = await vTabFeature_SimEx_GetObjLstCache(strCmPrjId);
    const arrFeatureId: Array<string> = arrTabFeature
      .filter((x) => x.tabId == strTabId)
      .map((x) => x.featureId);
    return arrFeatureId;
  }

  public static async GetSubTabFeatureLst(strTabFeatureId: string, strPrjId: string) {
    const objProject = await Projects_GetObjByPrjIdCache(strPrjId);
    if (objProject == null) {
      const strMsg = Format('项目Id:[{0}]，没有相应的项目，请检查！', strPrjId);
      console.error(strMsg);
      alert(strMsg);
      return;
    }

    const objTabFeature = await vTabFeature_SimEx_GetObjByTabFeatureIdCache(
      strTabFeatureId,
      clsPrivateSessionStorage.cmPrjId,
    );
    if (objTabFeature == null) {
      const strMsg = Format(
        '在项目:[{0}]中，表功能Id:[{1}]没有相应功能，请检查！',
        objProject.prjName,
        strTabFeatureId,
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }

    const objPrjFeature = await vPrjFeatureSim_GetObjByFeatureIdCache(objTabFeature.featureId);

    if (objPrjFeature == null) {
      const strMsg = Format(
        '功能Id(featureId):[{0}]没有相应功能，请检查！',
        objTabFeature.featureId,
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    const arrSubFeatureId: Array<string> = await clsPrjFeatureBLEx.GetSubFeatureIdLstByFeatureId(
      objPrjFeature.featureId,
    );
    if (arrSubFeatureId.length == 0) return new Array<clsTabFeatureEN>();
    const strCondition = Format(
      "{0}='{1}' and {2} in ({3})",
      clsTabFeatureEN.con_TabId,
      objTabFeature.tabId,
      clsTabFeatureEN.con_FeatureId,
      arrSubFeatureId.map((x) => Format("'{0}'", x)).join(','),
    );
    const arrSubTabFeature: Array<clsTabFeatureEN> = await TabFeature_GetObjLstAsync(strCondition);
    return arrSubTabFeature;
    //            throw new NotImplementedException();
  }
  public static async IsExistParentFeature1(strTabFeatureId: string, strCmPrjId: string) {
    const objvTabFeature = await vTabFeature_SimEx_GetObjByTabFeatureIdCache(
      strTabFeatureId,
      strCmPrjId,
    );
    if (objvTabFeature == null) {
      const strMsg = Format(
        '在项目:[{0}]中，表功能Id:[{1}]没有相应功能，请检查！',
        clsPrivateSessionStorage.currSelPrjName,
        strTabFeatureId,
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    const objTabFeatureEx = vTabFeature_SimEx_CopyToEx(objvTabFeature);
    if (IsNullOrEmpty(objTabFeatureEx.parentFeatureId) == true) return false;
    const strCondition = Format(
      "{0}='{1}' and {2}='{3}'",
      clsTabFeatureEN.con_TabId,
      objvTabFeature.tabId,
      clsTabFeatureEN.con_FeatureId,
      objTabFeatureEx.parentFeatureId,
    );
    return TabFeature_IsExistRecordAsync(strCondition);
    //            throw new NotImplementedException();
  }

  public static async GetObjByFeatureRegionFldsObj(
    objFeatureRegionFlds: clsFeatureRegionFldsEN,
    strPrjId: string,
  ) {
    const objPrjFeature = await vPrjFeatureSim_GetObjByFeatureIdCache(
      objFeatureRegionFlds.featureId,
    );
    if (objPrjFeature == null) {
      const strMsg = Format(
        '功能Id(featureId):[{0}]没有相应功能，请检查！',
        objFeatureRegionFlds.featureId,
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }

    const strFeatureId4Tab = await clsPrjFeatureBLEx.GetRelaFeatureId4Tab(
      objFeatureRegionFlds.viewFeatureId,
    );

    if (IsNullOrEmpty(strFeatureId4Tab) == true) return new clsTabFeatureEN();
    const strMaxId = await TabFeature_GetMaxStrIdByPrefixAsync(strPrjId);
    const objTabFeature: clsTabFeatureEN = new clsTabFeatureEN();
    objTabFeature.tabFeatureId = strMaxId;
    objTabFeature.featureId = strFeatureId4Tab;
    objTabFeature.tabFeatureName = objPrjFeature.featureName;
    objTabFeature.tabId = objFeatureRegionFlds.releTabId;
    objTabFeature.inUse = true;
    objTabFeature.updDate = clsDateTime.getTodayDateTimeStr(1);
    return objTabFeature;
  }
}
