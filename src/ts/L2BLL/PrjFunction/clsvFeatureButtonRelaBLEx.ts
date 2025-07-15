import { FeatureButtonRela_GetObjLstCache } from '@/ts/L3ForWApi/PrjFunction/clsFeatureButtonRelaWApi';
import { clsFeatureButtonRelaEN } from '@/ts/L0Entity/PrjFunction/clsFeatureButtonRelaEN';

export class clsvFeatureButtonRelaBLEx {
  /// <summary>
  /// 根据功能获取相关对象列表, 从缓存的对象列表中获取.没有就返回null.
  /// </summary>
  /// <param name = "intApplicationTypeId">应用类型Id</param>
  /// <param name = "strFeatureId">功能Id</param>
  /// <returns>根据关键字获取的对象</returns>
  public static async GetObjLstByFeatureIdCacheEx(
    intApplicationTypeId: number,
    strFeatureId: string,
  ) {
    //初始化列表缓存
    const arrObjLstCache: Array<clsFeatureButtonRelaEN> = await FeatureButtonRela_GetObjLstCache();

    const arrvFeatureButtonRelaObjLst_Sel1: Array<clsFeatureButtonRelaEN> = arrObjLstCache.filter(
      (x) => x.applicationTypeId == intApplicationTypeId && x.featureId == strFeatureId,
    );

    if (arrvFeatureButtonRelaObjLst_Sel1.length == 0) {
      return new Array<clsFeatureButtonRelaEN>();
    }
    return arrvFeatureButtonRelaObjLst_Sel1;
  }
}
