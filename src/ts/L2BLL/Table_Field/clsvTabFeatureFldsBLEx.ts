import {
  TabFeatureFlds_GetObjBymIdAsync,
  TabFeatureFlds_GetObjLstAsync,
} from '@/ts/L3ForWApi/Table_Field/clsTabFeatureFldsWApi';
import { clsTabFeatureFldsENEx } from '@/ts/L0Entity/Table_Field/clsTabFeatureFldsENEx';
import { TabFeatureFldsEx_CopyToEx } from '@/ts/L3ForWApiEx/Table_Field/clsTabFeatureFldsExWApi';
import { Format } from '@/ts/PubFun/clsString';

export class clsvTabFeatureFldsBLEx {
  /// <summary>
  /// 根据条件获取扩展对象列表
  /// (AutoGCLib.BusinessLogicEx4CSharp:Gen_4BLEx_GetObjExLst)
  /// </summary>
  /// <param name = "strCondition">给定条件</param>
  /// <returns>返回扩展对象列表</returns>
  public static async GetObjExLst(strCondition: string) {
    const arrObjExLst = await TabFeatureFlds_GetObjLstAsync(strCondition);
    return arrObjExLst;
  }
  /// <summary>
  /// 根据条件获取扩展对象列表
  /// (AutoGCLib.BusinessLogicEx4CSharp:Gen_4BLEx_GetObjExLst)
  /// </summary>
  /// <param name = "strTabFeatureId">给定条件</param>
  /// <returns>返回扩展对象列表</returns>
  public static async GetObjExLstByTabFeatureId(strTabFeatureId: string) {
    const strCondition = Format(
      "{0}='{1}'",
      clsTabFeatureFldsENEx.con_TabFeatureId,
      strTabFeatureId,
    );
    const arrObjExLst = await TabFeatureFlds_GetObjLstAsync(strCondition);

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
    const objTabFeatureFldsEN = await TabFeatureFlds_GetObjBymIdAsync(lngmId);
    if (objTabFeatureFldsEN == null) {
      const strMsg = Format(
        '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    const objTabFeatureFldsENEx = TabFeatureFldsEx_CopyToEx(objTabFeatureFldsEN);
    return objTabFeatureFldsENEx;
  }
}
