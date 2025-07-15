import { clsFeatureButtonRelaEN } from '@/ts/L0Entity/PrjFunction/clsFeatureButtonRelaEN';
import {
  FeatureButtonRela_GetCombineCondition,
  FeatureButtonRela_GetFirstObjAsync,
  FeatureButtonRela_GetObjLstCache,
} from '@/ts/L3ForWApi/PrjFunction/clsFeatureButtonRelaWApi';
import { CacheHelper } from '@/ts/PubFun/CacheHelper';
import { Format } from '@/ts/PubFun/clsString';

export class clsFeatureButtonRelaBLEx {
  /// <summary>
  /// 根据关键字获取相关对象, 从缓存的对象列表中获取.没有就返回null.
  /// (AutoGCLib.BusinessLogic4CSharp:Gen_4BL_GetObjByKeyCache)
  /// </summary>
  /// <param name = "strFeatureId">strFeatureId</param>
  /// <param name = "intAppTypeId">intAppTypeId</param>
  /// <returns>根据关键字获取的对象</returns>
  public static async GetObjByFeatureIdCache(strFeatureId: string, intAppTypeId: number) {
    //获取缓存中的对象列表
    const strKey = Format('{0}', clsFeatureButtonRelaEN._CurrTabName);
    const arrFeatureButtonRelaObjLstCache: Array<clsFeatureButtonRelaEN> =
      await FeatureButtonRela_GetObjLstCache();
    const arrFeatureButtonRelaObjLst_Sel: Array<clsFeatureButtonRelaEN> =
      arrFeatureButtonRelaObjLstCache.filter(
        (x) => x.featureId == strFeatureId && x.applicationTypeId == intAppTypeId,
      );
    if (arrFeatureButtonRelaObjLst_Sel.length == 0) {
      const obj_Cond: clsFeatureButtonRelaEN = new clsFeatureButtonRelaEN();
      obj_Cond.SetCondFldValue(clsFeatureButtonRelaEN.con_ApplicationTypeId, intAppTypeId, '=');
      obj_Cond.SetCondFldValue(clsFeatureButtonRelaEN.con_FeatureId, strFeatureId, '=');

      const strCondtion = FeatureButtonRela_GetCombineCondition(obj_Cond);
      const obj = await FeatureButtonRela_GetFirstObjAsync(strCondtion);
      if (obj != null) {
        CacheHelper.Remove(strKey);
        return obj;
      }
      return new clsFeatureButtonRelaEN();
    }
    return arrFeatureButtonRelaObjLst_Sel[0];
  }
}
