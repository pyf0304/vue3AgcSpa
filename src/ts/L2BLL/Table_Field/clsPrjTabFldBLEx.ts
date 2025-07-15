import { clsvSqlViewFldBLEx } from '../SqlViewMan/clsvSqlViewFldBLEx';
import { clsFieldTabBLEx } from './clsFieldTabBLEx';
import { PrjTabFld_GetObjLstCache } from '@/ts/L3ForWApi/Table_Field/clsPrjTabFldWApi';
import { enumFieldType } from '@/ts/L0Entity/Table_Field/clsFieldTypeEN';
import { clsPrjTabFldEN } from '@/ts/L0Entity/Table_Field/clsPrjTabFldEN';
import { clsPrjTabFldENEx } from '@/ts/L0Entity/Table_Field/clsPrjTabFldENEx';
import { clsPrjTabFldENEx4GC } from '@/ts/L0Entity/Table_Field/clsPrjTabFldENEx4GC';
import { PrjTabFldEx_CopyToEx4GC } from '@/ts/L3ForWApiEx/Table_Field/clsPrjTabFldExWApi';

import { clsLog } from '@/ts/PubFun/clsLog';
import { Format } from '@/ts/PubFun/clsString';
import { clsvSqlViewFldEN } from '@/ts/L0Entity/SqlViewMan/clsvSqlViewFldEN';
import { vFieldTab_Sim_GetNameByFldIdCache } from '@/ts/L3ForWApi/Table_Field/clsvFieldTab_SimWApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';

export class clsPrjTabFldBLEx {
  public static async GetObjByFldNameExCache(
    strFldName: string,
    strTabId: string,
    strPrjId: string,
  ) {
    if (strTabId.substring(0, 4) != strPrjId) {
      const strMsg = Format(
        '(errid:BlEx000039)工程Id:[{0}],表Id:[{1}], 两者不相配,请检查!在(clsPrjTabFldBLEx:GetvPrjTabFldObjByFldNameExCache)',
        strPrjId,
        strTabId,
      );
      throw new Error(strMsg);
    }
    const strFldId = await clsFieldTabBLEx.GetFldIdByFldNameExCache(strFldName, strTabId, strPrjId);
    const arrObjLstCache: Array<clsPrjTabFldEN> = await PrjTabFld_GetObjLstCache(strTabId);

    for (const objPrjTabFldEN of arrObjLstCache) {
      if (objPrjTabFldEN.fldId == strFldId && objPrjTabFldEN.tabId == strTabId) {
        return objPrjTabFldEN;
      }
    }
    return new clsPrjTabFldEN();
  }
  /// <summary>
  /// 根据[表Id(tabId)]获取相关对象子表, 从缓存的对象列表中获取.
  /// </summary>
  /// <param name = "strPrjId">项目Id</param>
  /// <param name = "strTabId">表Id</param>
  /// <returns>根据[表Id(tabId)]获取的相关对象子表</returns>
  public static async GetObjLstByTabIdCache(strPrjId: string, strTabId: string) {
    const arrvPrjTabFldObjLst_Sel1: Array<clsPrjTabFldEN> = await PrjTabFld_GetObjLstCache(
      strTabId,
    );

    return arrvPrjTabFldObjLst_Sel1;
  }
  /// <summary>
  /// 根据[表Id(tabId)]获取相关对象子表, 从缓存的对象列表中获取.
  /// </summary>
  /// <param name = "strPrjId">项目Id</param>
  /// <param name = "strTabId">表Id</param>
  /// <param name = "strFldName">字段名</param>
  /// <returns>根据[表Id(tabId)]获取的相关对象子表</returns>
  public static async GetObjLstByTabIdAndFldNameExCache(
    strPrjId: string,
    strTabId: string,
    strFldName: string,
  ) {
    const arrObjLstCache: Array<clsPrjTabFldEN> = await PrjTabFld_GetObjLstCache(strTabId);
    if (arrObjLstCache.length == 0) return null;
    const strFldId = await clsFieldTabBLEx.GetFldIdByFldNameExCache(
      strFldName,
      strTabId,
      arrObjLstCache[0].prjId,
    );

    const arrvPrjTabFldObjLst_Sel1: Array<clsPrjTabFldEN> = arrObjLstCache.filter(
      (x) => x.fldId == strFldId,
    );

    const arrPrjTabFldObjLst_Sel: Array<clsPrjTabFldEN> = new Array<clsPrjTabFldEN>();
    for (const obj of arrvPrjTabFldObjLst_Sel1) {
      arrPrjTabFldObjLst_Sel.push(obj);
    }

    return arrPrjTabFldObjLst_Sel;
  }

  /// <summary>
  /// 从表字段列表中查找某关键表字段对象
  /// </summary>
  /// <param name = "arrPrjTabFldObjArray">表字段列表</param>
  /// <returns>表字段(clsPrjTabFldEN)对象</returns>
  public static GetOrderNumObj(arrPrjTabFldObjArray: Array<clsPrjTabFldEN>): clsPrjTabFldEN {
    for (const objPrjTabFldEN of arrPrjTabFldObjArray) {
      if (objPrjTabFldEN.fieldTypeId == enumFieldType.KeyField_02) return objPrjTabFldEN;
      if (objPrjTabFldEN.fieldTypeId == enumFieldType.OrderNumField_09) {
        return objPrjTabFldEN;
      }
    }
    return new clsPrjTabFldEN();
  }

  /// <summary>
  /// 根据[表Id(tabId)]获取相关扩展对象子表, 从缓存的对象列表中获取.
  /// </summary>
  /// <param name = "strPrjId">项目Id</param>
  /// <param name = "strTabId">表Id</param>
  /// <returns>根据[表Id(tabId)]获取的相关扩展对象子表</returns>
  public static async GetObjExLstByTabIdExCache(strPrjId: string, strTabId: string) {
    const arrPrjTabFldObjLst_Sel1: Array<clsPrjTabFldEN> = await PrjTabFld_GetObjLstCache(strTabId);
    if (arrPrjTabFldObjLst_Sel1.length == 0) return null;
    strPrjId = arrPrjTabFldObjLst_Sel1[0].prjId;

    const arrvPrjTabFldObjLst_Sel: Array<clsPrjTabFldENEx> = new Array<clsPrjTabFldENEx>();
    for (const obj of arrPrjTabFldObjLst_Sel1) {
      let objEx: clsPrjTabFldENEx = new clsPrjTabFldENEx();
      objEx = obj as clsPrjTabFldENEx;

      const strFldName = await vFieldTab_Sim_GetNameByFldIdCache(
        obj.fldId,
        clsPrivateSessionStorage.currSelPrjId,
      );
      try {
        let objvSqlViewFldEN: clsvSqlViewFldEN =
          await clsvSqlViewFldBLEx.GetvSqlViewFldObjByTabIdFieldAliasesExCache(
            strPrjId,
            strTabId,
            strFldName,
          );
        if (objvSqlViewFldEN == null) {
          objvSqlViewFldEN = await clsvSqlViewFldBLEx.GetvSqlViewFldObjByTabIdFldNameExCache(
            strPrjId,
            strTabId,
            strFldName,
          );
        }
        if (objvSqlViewFldEN != null) {
          objEx.tabName = objvSqlViewFldEN.tabName;
        }
      } catch (objException: any) {
        clsLog.WriteErrorLog(objException);
      }
      arrvPrjTabFldObjLst_Sel.push(objEx);
    }
    return arrvPrjTabFldObjLst_Sel;
  }

  /// <summary>
  /// 根据[表Id(tabId)]获取相关扩展对象子表, 从缓存的对象列表中获取.
  /// </summary>
  /// <param name = "arrObjLst">源对象殂</param>
  /// <returns>根据[源对象列表]获取的相关扩展对象子表</returns>
  public static async GetObjExLstByObjLst(arrObjLst: Array<clsPrjTabFldEN>) {
    const arrvPrjTabFldObjLst_Sel: Array<clsPrjTabFldENEx4GC> = new Array<clsPrjTabFldENEx4GC>();
    for (const obj of arrObjLst) {
      const objEx: clsPrjTabFldENEx4GC = PrjTabFldEx_CopyToEx4GC(obj);

      const strFldName = await vFieldTab_Sim_GetNameByFldIdCache(
        obj.fldId,
        clsPrivateSessionStorage.currSelPrjId,
      );
      //const strTabName = await vPrjTab_SimEx_GetNameByTabIdCache(objEx.tabId, objEx.prjId);
      try {
        let objvSqlViewFldEN: clsvSqlViewFldEN =
          await clsvSqlViewFldBLEx.GetvSqlViewFldObjByTabIdFieldAliasesExCache(
            obj.prjId,
            obj.tabId,
            strFldName,
          );
        if (objvSqlViewFldEN == null) {
          objvSqlViewFldEN = await clsvSqlViewFldBLEx.GetvSqlViewFldObjByTabIdFldNameExCache(
            obj.prjId,
            obj.tabId,
            strFldName,
          );
        }
        if (objvSqlViewFldEN != null) {
          objEx.tabName = objvSqlViewFldEN.tabName;
        }
      } catch (objException: any) {
        console.log(objException);
      }
      arrvPrjTabFldObjLst_Sel.push(objEx);
    }
    return arrvPrjTabFldObjLst_Sel;
  }
  /// <summary>
  /// 根据[表Id(tabId)]获取相关对象子表, 从缓存的对象列表中获取.
  /// </summary>
  /// <param name = "strPrjId">项目Id</param>
  /// <param name = "strTabId">表Id</param>
  /// <returns>根据[表Id(tabId)]获取的相关对象子表</returns>
  public static IsExistFldIdInObjLst(strFldId: string, arrObjLst: Array<clsPrjTabFldEN>): boolean {
    for (const obj of arrObjLst) {
      if (obj.fldId == strFldId) return true;
    }
    return false;
  }
  /// <summary>
  /// 从表字段列表中查找fldId的对象
  /// </summary>
  /// <param name = "strTabId">表Id</param>
  /// <param name = "strPrjId">工程Id</param>
  /// <param name = "strFldId">字段Id</param>
  /// <returns>表字段</returns>
  public static async GetObjByFldIdCache(strPrjId: string, strTabId: string, strFldId: string) {
    const arrPrjTabFldObjArray: Array<clsPrjTabFldEN> =
      await clsPrjTabFldBLEx.GetObjLstByTabIdCache(strPrjId, strTabId);
    const objPrjTabFldEN = arrPrjTabFldObjArray.find((x) => x.fldId == strFldId);
    return objPrjTabFldEN;
  }

  /// <summary>
  /// 从表字段列表中查找分类字段
  /// </summary>
  /// <param name = "strTabId">表字段列表</param>
  /// <param name = "strPrjId">表字段列表</param>
  /// <returns>分类字段</returns>
  public static async GetClassificationFieldObjCache(strPrjId: string, strTabId: string) {
    const arrPrjTabFldObjArray: Array<clsPrjTabFldEN> =
      await clsPrjTabFldBLEx.GetObjLstByTabIdCache(strPrjId, strTabId);

    const objPrjTabFldEN = arrPrjTabFldObjArray.find(
      (x) => x.fieldTypeId == enumFieldType.ClassificationField_10,
    );
    return objPrjTabFldEN;
  }
}
