import { CtlType_GetObjByCtlTypeIdCache } from '@/ts/L3ForWApi/PrjInterface/clsCtlTypeWApi';
import { FeatureRegionFlds_GetObjLstCache } from '@/ts/L3ForWApi/RegionManage/clsFeatureRegionFldsWApi';
import {
  ViewFeatureFlds_GetObjBymIdAsync,
  ViewFeatureFlds_GetObjLstAsync,
  ViewFeatureFlds_GetObjLstCache,
} from '@/ts/L3ForWApi/RegionManage/clsViewFeatureFldsWApi';
import { DataTypeAbbr_GetObjByDataTypeIdCache } from '@/ts/L3ForWApi/SysPara/clsDataTypeAbbrWApi';
import { clsViewFeatureFldsENEx } from '@/ts/L0Entity/RegionManage/clsViewFeatureFldsENEx';
import { clsViewFeatureFldsEN } from '@/ts/L0Entity/RegionManage/clsViewFeatureFldsEN';
import { clsFeatureRegionFldsEN } from '@/ts/L0Entity/RegionManage/clsFeatureRegionFldsEN';
import { ViewFeatureFldsEx_CopyToEx } from '@/ts/L3ForWApiEx/RegionManage/clsvViewFeatureFldsExWApi';
import { DataTypeAbbrEx_CopyToEx } from '@/ts/L3ForWApiEx/SysPara/clsDataTypeAbbrExWApi';
import { vFieldTab_SimEx_CopyToEx } from '@/ts/L3ForWApiEx/Table_Field/clsvFieldTab_SimExWApi';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { usevFieldTab_Sim2Store, vFieldTab_SimEx_CopyToEN } from '@/store/modules/vFieldTab_Sim2';

export class clsvViewFeatureFldsBLEx {
  /// <summary>
  /// 根据条件获取扩展对象列表
  /// (AutoGCLib.BusinessLogicEx4CSharp:Gen_4BLEx_GetObjExLst)
  /// </summary>
  /// <param name = "strCondition">给定条件</param>
  /// <returns>返回扩展对象列表</returns>
  public static async GetObjExLst(strCondition: string) {
    const arrObjExLst = await ViewFeatureFlds_GetObjLstAsync(strCondition);

    return arrObjExLst;
  }

  /// <summary>
  /// 获取当前关键字的记录对象,用扩展对象的形式表示.
  /// (AutoGCLib.BusinessLogicEx4CSharp:Gen_4BLEx_GetObjExByKey)
  /// </summary>
  /// <param name = "lngmId">表关键字</param>
  /// <returns>表扩展对象</returns>
  public static async GetObjExBymId(lngmId: number) {
    const strThisFuncName = this.GetObjExBymId.name;
    const objViewFeatureFldsEN = await ViewFeatureFlds_GetObjBymIdAsync(lngmId);
    if (objViewFeatureFldsEN == null) {
      const strMsg = Format(
        '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    // const objViewFeatureFldsENEx = ViewFeatureFldsEx_CopyToEx(objViewFeatureFldsEN);
    return objViewFeatureFldsEN;
  }

  public static async GetObjExLstByRegionId(strRegionId: string) {
    const strThisFuncName = this.GetObjExLstByRegionId.name;
    const vFieldTab_Sim2Store = usevFieldTab_Sim2Store();
    const strCondition = Format(
      '{0} in (Select {0} From {1} where {2}={3})',
      clsViewFeatureFldsEN.con_ViewFeatureId,
      clsFeatureRegionFldsEN._CurrTabName,
      clsFeatureRegionFldsEN.con_RegionId,
      strRegionId,
    );

    const arrObjLst0 = await ViewFeatureFlds_GetObjLstAsync(strCondition);
    const arrObjLst = arrObjLst0.map(ViewFeatureFldsEx_CopyToEx);

    // const strPrjId_p = await CMProjectEx_GetPrjIdByCmPrjIdCache(strCmPrjId);

    for (const objvViewFeatureFldsENEx of arrObjLst) {
      const objvFieldTab_Sim = await vFieldTab_Sim2Store.getObj(objvViewFeatureFldsENEx.releFldId);
      const objvFieldTab_SimEx = vFieldTab_SimEx_CopyToEN(objvFieldTab_Sim);
      if (objvFieldTab_SimEx != null) {
        objvViewFeatureFldsENEx.objvFieldTab_SimENEx = vFieldTab_SimEx_CopyToEx(objvFieldTab_SimEx);
      }

      if (IsNullOrEmpty(objvViewFeatureFldsENEx.ctlTypeId)) {
        const strMsg = Format(
          '界面功能字段的控件类型为空！功能：{0},字段：{1}. (In {2}.{3})',
          objvViewFeatureFldsENEx.featureName,
          objvViewFeatureFldsENEx.fldName,
          this.prototype.constructor.name,
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

  public static async GetObjExLstByViewIdCache(
    strRegionId: string,
  ): Promise<Array<clsViewFeatureFldsENEx> | null> {
    const vFieldTab_Sim2Store = usevFieldTab_Sim2Store();
    //const strCondition =  Format("{0} in (Select {0} From {1} Where {2}='{3}')",
    //    clsvViewFeatureFldsEN.con_ViewFeatureId,
    //    clsvFeatureRegionFldsEN._CurrTabName,
    //    clsvFeatureRegionFldsEN.con_ViewId, strViewId);

    // const strPrjId_p = await CMProjectEx_GetPrjIdByCmPrjIdCache(strCmPrjId);

    const arrObjExLstCache = await FeatureRegionFlds_GetObjLstCache(strRegionId);
    const arrvFeatureRegionFldsObjLst = arrObjExLstCache.filter((x) => x.regionId == strRegionId);
    const arrViewFeatureId: Array<string> = arrvFeatureRegionFldsObjLst.map((x) => x.viewFeatureId);
    if (arrViewFeatureId.length == 0) return null;
    const strViewFeaturId = arrViewFeatureId[0];
    const arrvViewFeatureFldsObjLstCache = await ViewFeatureFlds_GetObjLstCache(strViewFeaturId);
    const arrvViewFeatureFldsExObjLstCache = arrvViewFeatureFldsObjLstCache.map(
      ViewFeatureFldsEx_CopyToEx,
    );

    const arrvViewFeatureFldsExObjLst = arrvViewFeatureFldsExObjLstCache.filter(
      (x) => arrViewFeatureId.indexOf(x.viewFeatureId) > -1,
    );

    for (const objvViewFeatureFldsENEx of arrvViewFeatureFldsExObjLst) {
      const objvFieldTab_Sim = await vFieldTab_Sim2Store.getObj(objvViewFeatureFldsENEx.releFldId);
      const objvFieldTab_SimEx = vFieldTab_SimEx_CopyToEN(objvFieldTab_Sim);
      if (objvFieldTab_SimEx != null) {
        objvViewFeatureFldsENEx.objvFieldTab_SimENEx = vFieldTab_SimEx_CopyToEx(objvFieldTab_SimEx);
      }
      const objDataTypeAbbr = await DataTypeAbbr_GetObjByDataTypeIdCache(
        objvViewFeatureFldsENEx.objvFieldTab_SimENEx.dataTypeId,
      );
      if (objDataTypeAbbr == null) {
        const strMsg = Format(
          '数据类型Id:[{0}]，没有相应的类型，请检查！',
          objvViewFeatureFldsENEx.objvFieldTab_SimENEx.dataTypeId,
        );
        console.error(strMsg);
        alert(strMsg);
        return null;
      }

      const objDataTypeAbbrEx = DataTypeAbbrEx_CopyToEx(objDataTypeAbbr);
      objvViewFeatureFldsENEx.objvFieldTab_SimENEx.objDataTypeAbbr = objDataTypeAbbrEx;
    }
    return arrvViewFeatureFldsExObjLst;
  }
  public static async GetObjLstByViewFeatureIdCache(strViewFeatureId: string, strCmPrjId: string) {
    // const strCondition = Format(
    //   "{0} in (Select {0} From {1} Where {2}='{3}')",
    //   clsViewFeatureFldsEN.con_ViewFeatureId,
    //   clsFeatureRegionFldsEN._CurrTabName,
    //   clsFeatureRegionFldsEN.con_ViewFeatureId,
    //   strViewFeatureId,
    // );
    console.log(strCmPrjId);
    const arrObjLstCache0 = await ViewFeatureFlds_GetObjLstCache(strViewFeatureId);
    const arrObjLstCache = arrObjLstCache0.map(ViewFeatureFldsEx_CopyToEx);

    const arrObjLst_Sel = arrObjLstCache.filter((x) => x.viewFeatureId == strViewFeatureId);
    return arrObjLst_Sel;
  }
}
