import { clsPrjFeatureBLEx } from '../PrjFunction/clsPrjFeatureBLEx';

import {
  TabFeatureFlds_GetObjBymIdAsync,
  TabFeatureFlds_GetObjLstAsync,
} from '@/ts/L3ForWApi/Table_Field/clsTabFeatureFldsWApi';
import { clsFeatureRegionFldsEN } from '@/ts/L0Entity/RegionManage/clsFeatureRegionFldsEN';
import { clsViewFeatureFldsENEx } from '@/ts/L0Entity/RegionManage/clsViewFeatureFldsENEx';
import { clsTabFeatureFldsEN } from '@/ts/L0Entity/Table_Field/clsTabFeatureFldsEN';
import { clsTabFeatureFldsENEx } from '@/ts/L0Entity/Table_Field/clsTabFeatureFldsENEx';
import { TabFeatureFldsEx_CopyToEx } from '@/ts/L3ForWApiEx/Table_Field/clsTabFeatureFldsExWApi';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { vPrjFeatureSim_GetObjByFeatureIdCache } from '@/ts/L3ForWApi/PrjFunction/clsvPrjFeatureSimWApi';

/// <summary>
/// 根据条件获取扩展对象列表
/// (AutoGCLib.BusinessLogicEx4CSharp:Gen_4BLEx_GetObjExLst)
/// </summary>
/// <param name = "strCondition">给定条件</param>
/// <returns>返回扩展对象列表</returns>
export async function TabFeatureFldsEx_GetObjExLst(strCondition: string) {
  const arrObjExLst: Array<clsTabFeatureFldsEN> = await TabFeatureFlds_GetObjLstAsync(strCondition);
  return arrObjExLst;
}

/// <summary>
/// 获取当前关键字的记录对象,用扩展对象的形式表示.
/// (AutoGCLib.BusinessLogicEx4CSharp:Gen_4BLEx_GetObjExByKey)
/// </summary>
/// <param name = "lngmId">表关键字</param>
/// <returns>表扩展对象</returns>
export async function TabFeatureFldsEx_GetObjExBymId(lngmId: number) {
  const strThisFuncName = 'TabFeatureFldsEx_GetObjExBymId';
  const objTabFeatureFldsEN = await TabFeatureFlds_GetObjBymIdAsync(lngmId);
  if (objTabFeatureFldsEN == null) {
    const strMsg = Format('根据关键字获取相应的记录的对象为空.(in {0}.{1})', '', strThisFuncName);
    console.error(strMsg);
    alert(strMsg);
    return;
  }

  const objTabFeatureFldsENEx: clsTabFeatureFldsENEx =
    TabFeatureFldsEx_CopyToEx(objTabFeatureFldsEN);
  return objTabFeatureFldsENEx;
}

export function TabFeatureFldsEx_GetObjByViewFeatureFlds(
  objViewFeatureFldsEx: clsViewFeatureFldsENEx,
): clsTabFeatureFldsEN {
  const objTabFeatureFlds: clsTabFeatureFldsEN = new clsTabFeatureFldsEN();

  objTabFeatureFlds.fldId = objViewFeatureFldsEx.releFldId;
  objTabFeatureFlds.fieldTypeId = objViewFeatureFldsEx.fieldTypeId;

  objTabFeatureFlds.updDate = clsDateTime.getTodayStr(0);
  //objTabFeatureFlds.updUser = strUserId;
  objTabFeatureFlds.inUse = true;
  //5、检查传进去的对象属性是否合法
  return objTabFeatureFlds;
  //            throw new NotImplementedException();
}
export async function TabFeatureFldsEx_GetObjByFeatureRegionFlds(
  objFeatureRegionFlds: clsFeatureRegionFldsEN,
) {
  const objPrjFeature = await vPrjFeatureSim_GetObjByFeatureIdCache(objFeatureRegionFlds.featureId);
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

  if (IsNullOrEmpty(strFeatureId4Tab) == true) return new clsTabFeatureFldsEN();
  const objTabFeature: clsTabFeatureFldsEN = new clsTabFeatureFldsEN();
  objTabFeature.fldId = objFeatureRegionFlds.releFldId;
  objTabFeature.fieldTypeId = objFeatureRegionFlds.fieldTypeId;
  objTabFeature.inUse = true;
  objTabFeature.updDate = clsDateTime.getTodayDateTimeStr(1);
  return objTabFeature;
}
