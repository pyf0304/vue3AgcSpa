import { clsPrjFuncTemplateRelaEN } from '@/ts/L0Entity/PrjFunction/clsPrjFuncTemplateRelaEN';
import { PrjFuncTemplateRela_GetObjLstAsync } from '@/ts/L3ForWApi/PrjFunction/clsPrjFuncTemplateRelaWApi';
import { Format } from '@/ts/PubFun/clsString';

export class clsPrjFuncTemplateRelaBLEx {
  /// <summary>
  /// 根据工程Id获取模板Id
  /// </summary>
  /// <param name="strPrjId">工程Id</param>
  /// <returns>获取的模板Id</returns>
  public static async getFunctionTemplateIdByPrjId(strPrjId: string) {
    //            string strCondition = Format("{0}='{1}'", clsPrjFuncTemplateRelaEN.conPrjId, strPrjId);
    const arrPrjFuncTemplateRelaObjLst_Sel: Array<clsPrjFuncTemplateRelaEN> =
      await this.GetAllPrjFuncTemplateRelaObjLstCacheEx(strPrjId);
    if (arrPrjFuncTemplateRelaObjLst_Sel.length == 0) {
      const strMsg = Format('工程Id：【{0}】没有相应的模板，请联系管理员！', strPrjId);
      throw new Error(strMsg);
    }
    const objPrjFuncTemplateRelaEN: clsPrjFuncTemplateRelaEN = arrPrjFuncTemplateRelaObjLst_Sel[0]; // PrjFuncTemplateRela_GetFirstPrjFuncTemplateRela_S(strCondition);

    return objPrjFuncTemplateRelaEN.functionTemplateId;
  }

  /// <summary>
  /// 从缓存中获取所有正在使用的用户缺省值对象列表.
  /// </summary>
  /// <param name = "strPrjId"></param>
  /// <returns>从缓存中获取所有正在使用的用户缺省值列表</returns>
  public static async GetAllPrjFuncTemplateRelaObjLstCacheEx(strPrjId: string) {
    const arrObjLstCache: Array<clsPrjFuncTemplateRelaEN> =
      await PrjFuncTemplateRela_GetObjLstAsync('1=1');

    const arrPrjFuncTemplateRelaObjLst_Sel1: Array<clsPrjFuncTemplateRelaEN> =
      arrObjLstCache.filter((x) => x.prjId == strPrjId);
    const arrPrjFuncTemplateRelaObjLst_Sel: Array<clsPrjFuncTemplateRelaEN> =
      new Array<clsPrjFuncTemplateRelaEN>();
    for (const obj of arrPrjFuncTemplateRelaObjLst_Sel1) {
      arrPrjFuncTemplateRelaObjLst_Sel.push(obj);
    }

    return arrPrjFuncTemplateRelaObjLst_Sel;
  }
}
