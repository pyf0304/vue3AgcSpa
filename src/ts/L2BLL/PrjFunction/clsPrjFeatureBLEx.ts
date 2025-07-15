import { clsvFeatureButtonRelaBLEx } from './clsvFeatureButtonRelaBLEx';
import {
  PrjFeature_GetFirstObjAsync,
  PrjFeature_GetObjByFeatureIdAsync,
  PrjFeature_GetObjLstAsync,
} from '@/ts/L3ForWApi/PrjFunction/clsPrjFeatureWApi';
import {
  FeatureRegionFlds_GetObjByViewFeatureIdCache,
  FeatureRegionFlds_GetObjLstCache,
} from '@/ts/L3ForWApi/RegionManage/clsFeatureRegionFldsWApi';
import { ApplicationType_GetNameByApplicationTypeIdCache } from '@/ts/L3ForWApi/GeneCode/clsApplicationTypeWApi';
import { clsPrjFeatureEN } from '@/ts/L0Entity/PrjFunction/clsPrjFeatureEN';
import { clsPrjFeatureENEx } from '@/ts/L0Entity/PrjFunction/clsPrjFeatureENEx';
import { enumPrjFeatureType } from '@/ts/L0Entity/PrjFunction/clsPrjFeatureTypeEN';
import { clsFeatureRegionFldsEN } from '@/ts/L0Entity/RegionManage/clsFeatureRegionFldsEN';
import { FeatureButtonRelaEx_GetObjExLstByFuncMap } from '@/ts/L3ForWApiEx/PrjFunction/clsFeatureButtonRelaExWApi';
import { PrjFeatureEx_CopyToEx } from '@/ts/L3ForWApiEx/PrjFunction/clsPrjFeatureExWApi';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';

export class clsPrjFeatureBLEx {
  public static async IsNeedFlds(featureId: string) {
    const objPrjFeature = await PrjFeature_GetObjByFeatureIdAsync(featureId);
    if (objPrjFeature == null) {
      const strMsg = Format('功能Id(featureId):[{0}]没有相应功能，请检查！', featureId);
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    if (objPrjFeature == null) return false;
    return objPrjFeature.isNeedField;
  }

  /// <summary>
  /// 获取前台(前端)的所有功能对象列表
  /// </summary>
  /// <returns>功能对象列表</returns>
  public static async GetObjExLst4FrontEnd() {
    //const strCondition =  Format("regionId = {0} And {1}1='1' order by seqNum", strRegionId, clsPrjFeatureEN.conInUse);

    const arrObjENExArray: Array<clsPrjFeatureENEx> = new Array<clsPrjFeatureENEx>();
    const strCondition = Format(
      "{0} = '{1}'",
      clsPrjFeatureEN.con_FeatureTypeId,
      enumPrjFeatureType.FrontInterface_01,
    );
    const arrObjList: Array<clsPrjFeatureEN> = await PrjFeature_GetObjLstAsync(strCondition);
    for (const objPrjFeature of arrObjList) {
      const objPrjFeatureENEx: clsPrjFeatureENEx = PrjFeatureEx_CopyToEx(objPrjFeature);
      arrObjENExArray.push(objPrjFeatureENEx);
    }
    return arrObjENExArray;
  }

  /// <summary>
  /// 获取后台(后端)的所有功能对象列表
  /// </summary>
  /// <returns>功能对象列表</returns>
  public static async GetObjExLst4BackEnd() {
    //const strCondition =  Format("regionId = {0} And {1}1='1' order by seqNum", strRegionId, clsPrjFeatureEN.conInUse);

    const arrObjENExArray: Array<clsPrjFeatureENEx> = new Array<clsPrjFeatureENEx>();
    const strCondition = Format(
      "{0} = '{1}'",
      clsPrjFeatureEN.con_FeatureTypeId,
      enumPrjFeatureType.BackgroundFunction_02,
    );
    const arrObjList: Array<clsPrjFeatureEN> = await PrjFeature_GetObjLstAsync(strCondition);
    for (const objPrjFeature of arrObjList) {
      const objPrjFeatureENEx: clsPrjFeatureENEx = PrjFeatureEx_CopyToEx(objPrjFeature);
      arrObjENExArray.push(objPrjFeatureENEx);
    }
    return arrObjENExArray;
  }

  /// <summary>
  ///
  /// </summary>
  /// <param name="strViewId"></param>
  /// <param name="intAppTypeId"></param>
  /// <param name="strPrjId"></param>
  /// <returns></returns>
  public static async GetObjExLstByRegionIdCache(strRegionId: string, intAppTypeId: number) {
    //const strCondition =  Format("regionId = {0} And {1}1='1' order by seqNum", strRegionId, clsPrjFeatureEN.conInUse);

    const arrObjENExArray: Array<clsPrjFeatureENEx> = new Array<clsPrjFeatureENEx>();
    //const strCondition=  Format("{0} in (select {0} From {1} where {2}='{3}')",
    //    clsPrjFeatureEN.con_FeatureId, clsvFeatureRegionFldsEN._CurrTabName,
    //    clsvFeatureRegionFldsEN.con_ViewId, strViewId);

    const arrvFeatureRegionFldsCache: Array<clsFeatureRegionFldsEN> =
      await FeatureRegionFlds_GetObjLstCache(strRegionId);
    const arrvFeatureRegionFlds: Array<clsFeatureRegionFldsEN> = arrvFeatureRegionFldsCache.filter(
      (x) => x.regionId == strRegionId,
    );

    const arrFeatureId: Array<string> = arrvFeatureRegionFlds.map((x) => x.featureId);
    const arrObjListCache: Array<clsPrjFeatureEN> = await PrjFeature_GetObjLstAsync('1=1');

    const arrObjList: Array<clsPrjFeatureEN> = arrObjListCache.filter(
      (x) => arrFeatureId.indexOf(x.featureId) > -1,
    );

    for (const objPrjFeature of arrObjList) {
      const objPrjFeatureENEx: clsPrjFeatureENEx = PrjFeatureEx_CopyToEx(objPrjFeature);
      const arrButtonSet = await clsvFeatureButtonRelaBLEx.GetObjLstByFeatureIdCacheEx(
        intAppTypeId,
        objPrjFeature.featureId,
      );
      objPrjFeatureENEx.buttonSet = await FeatureButtonRelaEx_GetObjExLstByFuncMap(arrButtonSet);
      if (objPrjFeatureENEx.buttonSet == null) {
        const strMsg = Format(
          '应用:{0}({1}),功能:{2}({3})没有相关的按钮，请管理员！',
          ApplicationType_GetNameByApplicationTypeIdCache(intAppTypeId),
          intAppTypeId,
          objPrjFeature.featureName,
          objPrjFeature.featureId,
        );
        throw strMsg;
      }
      arrObjENExArray.push(objPrjFeatureENEx);
    }
    return arrObjENExArray;
  }

  public static async GetFeatureIdLstByRegionIdCache(strRegionId: string) {
    //const strCondition =  Format("regionId = {0} And {1}1='1' order by seqNum", strRegionId, clsPrjFeatureEN.conInUse);
    const arrvFeatureRegionFldsCache: Array<clsFeatureRegionFldsEN> =
      await FeatureRegionFlds_GetObjLstCache(strRegionId);
    const arrvFeatureRegionFlds: Array<clsFeatureRegionFldsEN> = arrvFeatureRegionFldsCache.filter(
      (x) => x.regionId == strRegionId,
    );
    let arrFeatureId: Array<string> = arrvFeatureRegionFlds.map((x) => x.featureId); // PrjFeature_GetPrimaryKeyID_S(strCondition);
    if (arrFeatureId == null) arrFeatureId = new Array<string>();
    return arrFeatureId;
  }
  /// <summary>
  /// 获取功能Id的子功能Id列表
  /// </summary>
  /// <param name="strFeatureId">功能Id</param>
  /// <returns>子功能Id列表</returns>
  public static async GetSubFeatureIdLstByFeatureId(strFeatureId: string) {
    //const strCondition =  Format("regionId = {0} And {1}1='1' order by seqNum", strRegionId, clsPrjFeatureEN.conInUse);

    // const strCondition = Format("{0}='{1}'", clsPrjFeatureEN.con_ParentFeatureId, strFeatureId);
    const arrPrjFeature = await PrjFeature_GetObjLstAsync('1=1');
    let arrFeatureId: Array<string> = arrPrjFeature
      .filter((x) => x.parentFeatureId == strFeatureId)
      .map((x) => x.featureId);
    if (arrFeatureId == null) arrFeatureId = new Array<string>();
    return arrFeatureId;
  }
  /// <summary>
  /// 为界面功能获取相关的表功能
  /// </summary>
  /// <param name="strViewFeatureId">界面功能Id</param>
  /// <returns>表功能tabFeatureId</returns>
  public static async GetRelaFeatureId4Tab(strViewFeatureId: string) {
    const obj = await FeatureRegionFlds_GetObjByViewFeatureIdCache(
      strViewFeatureId,
      strViewFeatureId,
    );
    if (obj == null) return '';
    if (IsNullOrEmpty(obj.featureId) == true) return '';

    const strCondition = Format(
      "{0}='{1}' And {2}='{3}'",
      clsPrjFeatureEN.con_FeatureId,
      obj.featureId,
      clsPrjFeatureEN.con_FeatureTypeId,
      enumPrjFeatureType.TabFeature_03,
    );
    const objPrjFeature = await PrjFeature_GetFirstObjAsync(strCondition);
    if (objPrjFeature == null) return '';
    return objPrjFeature.featureId;
  }
}
