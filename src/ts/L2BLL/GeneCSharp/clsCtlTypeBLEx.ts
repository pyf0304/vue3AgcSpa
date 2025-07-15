import { CtlType_GetObjByCtlTypeIdCache } from '@/ts/L3ForWApi/PrjInterface/clsCtlTypeWApi';
import { Format } from '@/ts/PubFun/clsString';

export class clsCtlTypeBLEx {
  /// <summary>
  /// 获取控件Id
  /// </summary>
  /// <param name="strCtlTypeId"></param>
  /// <param name="strFldName"></param>
  /// <returns></returns>
  public static async GetCtrlId(strCtlTypeId: string, strFldName: string) {
    const objCtlTypeAbbr = await CtlType_GetObjByCtlTypeIdCache(strCtlTypeId);
    if (objCtlTypeAbbr == null) {
      const strMsg = Format('控件类型Id:[{0}]，没有相应的控件类型，请检查！', strCtlTypeId);
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    const mstrCtrlId = objCtlTypeAbbr.ctlTypeAbbr + strFldName;
    return mstrCtrlId;
  }
}
