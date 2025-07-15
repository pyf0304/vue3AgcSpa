import { clsViewFeatureFldsBLEx } from './clsViewFeatureFldsBLEx';
import { clsViewFeatureFldsEN } from '@/ts/L0Entity/RegionManage/clsViewFeatureFldsEN';
import { IsNullOrEmpty } from '@/ts/PubFun/clsString';

export class clsFeatureRegionBLEx {
  public static strPrjIdCache_Init = '';

  public static async getRelaTabId4Ddl(strRegionId: string, strCmPrjId: string) {
    // const strCondition = Format('{0}={1}', clsFeatureRegionFldsEN.con_RegionId, strRegionId);

    const arrTabId: Array<string> = new Array<string>();
    const arrObjENArray: Array<clsViewFeatureFldsEN> =
      await clsViewFeatureFldsBLEx.GetObjLstByRegionIdCache(strRegionId, strCmPrjId);

    for (const objFeatureRegionFlds of arrObjENArray) {
      //if (objFeatureRegionFldsENEx.ctlTypeId != enumCtlType.DropDownList_06) continue;
      const strTabId = objFeatureRegionFlds.dsTabId;
      if (IsNullOrEmpty(strTabId) == true) continue;
      if (arrTabId.indexOf(strTabId) == -1) arrTabId.push(strTabId);
    }

    return arrTabId;
  }
}
