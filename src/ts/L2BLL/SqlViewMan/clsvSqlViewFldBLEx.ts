import { vSqlViewFld_GetObjLstCache } from '@/ts/L3ForWApi/SqlViewMan/clsvSqlViewFldWApi';
import { clsvSqlViewFldEN } from '@/ts/L0Entity/SqlViewMan/clsvSqlViewFldEN';

export class clsvSqlViewFldBLEx {
  /// <summary>
  /// 根据[表Id(sqlViewId)]获取相关对象子表, 从缓存的对象列表中获取.
  /// </summary>
  /// <param name = "strPrjId">项目Id</param>
  /// <param name = "strSqlViewId">表Id</param>
  /// <returns>根据[表Id(sqlViewId)]获取的相关对象子表</returns>
  public static async GetvSqlViewFldObjSubLstBySqlViewIdExCache(
    strPrjId: string,
    strSqlViewId: string,
  ) {
    const arrObjLstCache: Array<clsvSqlViewFldEN> = await vSqlViewFld_GetObjLstCache(strPrjId);

    const arrvSqlViewFldObjLst_Sel1: Array<clsvSqlViewFldEN> = arrObjLstCache.filter(
      (x) => x.sqlViewId == strSqlViewId,
    );
    const arrvSqlViewFldObjLst_Sel: Array<clsvSqlViewFldEN> = arrvSqlViewFldObjLst_Sel1.sort(
      (x, y) => x.sqlViewId.localeCompare(y.sqlViewId),
    );
    return arrvSqlViewFldObjLst_Sel;
  }

  /// <summary>
  /// 根据[表Id(sqlViewId)]获取相关对象子表, 从缓存的对象列表中获取.
  /// </summary>
  /// <param name = "strPrjId">项目Id</param>
  /// <param name = "strSqlViewName">表Id</param>
  /// <returns>根据[表Id(sqlViewId)]获取的相关对象子表</returns>
  public static async GetvSqlViewFldObjSubLstBySqlViewNameExCache(
    strPrjId: string,
    strSqlViewName: string,
  ) {
    const arrObjLstCache: Array<clsvSqlViewFldEN> = await vSqlViewFld_GetObjLstCache(strPrjId);

    const arrvSqlViewFldObjLst_Sel1: Array<clsvSqlViewFldEN> = arrObjLstCache.filter(
      (x) => x.sqlViewName == strSqlViewName,
    );
    const arrvSqlViewFldObjLst_Sel: Array<clsvSqlViewFldEN> = arrvSqlViewFldObjLst_Sel1.sort(
      (x, y) => x.sqlViewName.localeCompare(y.sqlViewName),
    );
    return arrvSqlViewFldObjLst_Sel;
  }

  /// <summary>
  /// 根据关键字获取相关对象, 从缓存的对象列表中获取.没有就返回null.
  /// (AutoGCLib.AutoGC6Cs_Business:Gen_4BL_GetRecObjByKeyCache)
  /// </summary>
  /// <param name = "strPrjId">所给的关键字</param>
  /// <param name = "strTabId">所给的关键字</param>
  /// <param name = "strFldName">所给的关键字</param>
  /// <returns>根据关键字获取的对象</returns>
  public static async GetvSqlViewFldObjByTabIdFldNameExCache(
    strPrjId: string,
    strTabId: string,
    strFldName: string,
  ) {
    //初始化列表缓存
    const arrObjLstCache: Array<clsvSqlViewFldEN> = await vSqlViewFld_GetObjLstCache(strPrjId);

    const arrvSqlViewFldObjLst_Sel1: Array<clsvSqlViewFldEN> = arrObjLstCache.filter(
      (x) => x.relaTabId4SqlView == strTabId && x.fldName == strFldName,
    );

    if (arrvSqlViewFldObjLst_Sel1.length == 0) {
      return new clsvSqlViewFldEN();
    }
    return arrvSqlViewFldObjLst_Sel1[0];
  }
  /// <summary>
  /// 根据关键字获取相关对象, 从缓存的对象列表中获取.没有就返回null.
  /// (AutoGCLib.AutoGC6Cs_Business:Gen_4BL_GetRecObjByKeyCache)
  /// </summary>
  /// <param name = "strPrjId">所给的关键字</param>
  /// <param name = "strTabId">所给的关键字</param>
  /// <param name = "strFldName">所给的关键字</param>
  /// <returns>根据关键字获取的对象</returns>
  public static async GetvSqlViewFldObjByTabIdFieldAliasesExCache(
    strPrjId: string,
    strTabId: string,
    strFldName: string,
  ) {
    //初始化列表缓存
    const arrObjLstCache: Array<clsvSqlViewFldEN> = await vSqlViewFld_GetObjLstCache(strPrjId);

    const arrvSqlViewFldObjLst_Sel1: Array<clsvSqlViewFldEN> = arrObjLstCache.filter(
      (x) => x.relaTabId4SqlView == strTabId && x.fieldAliases == strFldName,
    );

    if (arrvSqlViewFldObjLst_Sel1.length == 0) {
      return new clsvSqlViewFldEN();
    }
    return arrvSqlViewFldObjLst_Sel1[0];
  }
}
