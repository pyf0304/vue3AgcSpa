import { DataTypeAbbr_GetNameByDataTypeIdCache } from '@/ts/L3ForWApi/SysPara/clsDataTypeAbbrWApi';
import {
  FieldTab_GetObjByFldIdAsync,
  FieldTab_GetObjLstAsync,
} from '@/ts/L3ForWApi/Table_Field/clsFieldTabWApi';
import { PrjTabFld_GetObjLstCache } from '@/ts/L3ForWApi/Table_Field/clsPrjTabFldWApi';
import { clsFieldTabEN } from '@/ts/L0Entity/Table_Field/clsFieldTabEN';
import { clsFieldTabENEx } from '@/ts/L0Entity/Table_Field/clsFieldTabENEx';
import { clsPrjTabFldEN } from '@/ts/L0Entity/Table_Field/clsPrjTabFldEN';
import { clsPrjTabFldENEx4GC } from '@/ts/L0Entity/Table_Field/clsPrjTabFldENEx4GC';
import { FieldTabEx_CopyToEx } from '@/ts/L3ForWApiEx/Table_Field/clsFieldTabExWApi';

import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { Format } from '@/ts/PubFun/clsString';
import { vFieldTab_Sim_GetObjLstAsync } from '@/ts/L3ForWApi/Table_Field/clsvFieldTab_SimWApi';
import { clsvFieldTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvFieldTab_SimEN';

export class clsFieldTabBLEx {
  /// <summary>
  /// 从缓存中查找失败的次数
  /// </summary>
  protected static intFindFailCount = 0;
  public static arrFieldTabENExObjLst4WinApp: Array<clsFieldTabENEx> = new Array<clsFieldTabENEx>();
  public static arrFieldTabENExObjLstOrderByFldIdCache: Array<clsFieldTabENEx> =
    new Array<clsFieldTabENEx>();
  public static PrjIdCache = '';
  public static async GetFldIdByFldNameExCache(
    strFldName: string,
    strTabId: string,
    strPrjId: string,
  ): Promise<string> {
    if (strTabId.substring(0, 4) != strPrjId) {
      const strMsg = Format(
        '(errid:BlEx000039)工程Id:[{0}],表Id:[{1}], 两者不相配,请检查!在(clsPrjTabFldBLEx:GetvPrjTabFldObjByFldNameExCache)',
        strPrjId,
        strTabId,
      );
      throw new Error(strMsg);
    }

    const arrObjLstCache = await PrjTabFld_GetObjLstCache(strTabId);
    const arrFldIdCache: Array<string> = arrObjLstCache.map((x) => x.fldId);

    const strWhere = `substring(${clsvFieldTab_SimEN.con_FldId},1,4) = '${clsPrivateSessionStorage.currSelPrjId}'`;
    const arrFieldTabObjLstCache: Array<clsvFieldTab_SimEN> = await vFieldTab_Sim_GetObjLstAsync(
      strWhere,
    );

    const arrFieldTabObjLst_Sel = arrFieldTabObjLstCache.filter(
      (x) => arrFldIdCache.indexOf(x.fldId) > -1,
    );
    const objFieldTab = arrFieldTabObjLst_Sel.find(
      (x) => x.fldName.toLowerCase() == strFldName.toLowerCase(),
    );
    if (objFieldTab == null) return '';
    return objFieldTab.fldId;
  }
  /// <summary>
  /// 根据表Id获取《字段》对象列表
  /// </summary>
  /// <param name="strTabId">表Id</param>
  /// <returns></returns>
  public static async GetObjLstByTabId(strTabId: string) {
    const strCondition = Format(
      "{0} in (Select {0} From {1} Where {2}='{3}')",
      clsFieldTabEN.con_FldId,
      clsPrjTabFldEN._CurrTabName,
      clsPrjTabFldEN.con_TabId,
      strTabId,
    );
    const arrObjLst: Array<clsFieldTabEN> = await FieldTab_GetObjLstAsync(strCondition);
    return arrObjLst;
  }

  /// <summary>
  /// 是否能够删除和修改
  /// </summary>
  /// <param name = "strFldId">字段ID</param>
  /// <returns></returns>
  public static async IsCanDelUpd(strFldId: string) {
    const strThisFuncName = this.IsCanDelUpd.name;

    const objFieldTabEN = await FieldTab_GetObjByFldIdAsync(strFldId);
    if (objFieldTabEN == null) {
      const strMsg = Format(
        '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    const bolIsArchive: boolean = objFieldTabEN.isArchive;
    if (bolIsArchive == true) return false;
    const bolIsChecked: boolean = objFieldTabEN.isChecked;
    return !bolIsChecked;
  }
  /// <summary>
  /// 功能:根据字段ID得到字段类型名
  /// </summary>
  /// <param name = "strFldId">所给的字段ID</param>
  /// <returns>返回的字段类型名</returns>
  public static async GetFldType(strFldId: string) {
    const objFieldTabEN: clsFieldTabENEx = await clsFieldTabBLEx.GetObjExByFldId(strFldId);
    //FieldTab_GetFieldTab(ref objFieldTabEN);
    const strFldTypeId = objFieldTabEN.dataTypeId;
    const strFldTypeName = await DataTypeAbbr_GetNameByDataTypeIdCache(strFldTypeId);
    return strFldTypeName;
  }

  public static async GetObjExLst(strCondition: string) {
    const arrObjExLst: Array<clsFieldTabEN> = await FieldTab_GetObjLstAsync(strCondition);

    return arrObjExLst;
  }

  /// <summary>
  /// 获取当前关键字的记录对象,用扩展对象的形式表示.
  /// (AutoGCLib.BusinessLogicEx4CSharp:Gen_4BLEx_GetObjExByKey)
  /// </summary>
  /// <param name = "strFldId">表关键字</param>
  /// <returns>表扩展对象</returns>
  public static async GetObjExByFldId(strFldId: string) {
    const objFieldTabEN = await FieldTab_GetObjByFldIdAsync(strFldId);
    if (objFieldTabEN == null) return new clsFieldTabENEx();
    const objFieldTabENEx: clsFieldTabENEx = FieldTabEx_CopyToEx(objFieldTabEN);
    return objFieldTabENEx;
  }

  /// <summary>
  /// 加上对象名的私有属性名
  /// </summary>
  /// <param name = "objFieldTabENEx">objFieldTabENEx</param>
  /// <param name = "strObjName">对象名</param>
  /// <returns>返回的加上对象名的私有属性名</returns>
  public static PrivPropNameWithObjectName2(
    objFieldTabENEx: clsFieldTabENEx,
    strObjName: string,
  ): string {
    return `${strObjName}.${objFieldTabENEx.fldName}`;
  }

  /// <summary>
  /// 加上对象名的私有属性名
  /// </summary>
  /// <param name = "objPrjTabFldENEx">objPrjTabFldENEx</param>
  /// <param name = "strObjName">对象名</param>
  /// <returns>返回的加上对象名的私有属性名</returns>
  public static PrivPropNameWithObjectName(
    objPrjTabFldENEx: clsPrjTabFldENEx4GC,
    strObjName: string,
  ): string {
    return `${strObjName}.${objPrjTabFldENEx.ObjFieldTabENEx.fldName}`;
  }

  /// <summary>
  /// 加上对象名的私有属性名,专业针对Get属性函数
  /// </summary>
  /// <param name = "objFieldTabENEx">objFieldTabENEx</param>
  /// <param name = "strObjName">对象名</param>
  /// <returns>返回的加上对象名的私有属性名</returns>
  public static PrivPropNameWithObjectName4Get1(
    objFieldTabENEx: clsFieldTabENEx,
    strObjName: string,
  ): string {
    return `${strObjName}.Get${objFieldTabENEx.fldName}()`;
  }

  public static PrivPropNameWithObjectName4Get(
    objPrjTabFldENEx: clsPrjTabFldENEx4GC,
    strObjName: string,
  ): string {
    return `${strObjName}.Get${objPrjTabFldENEx.ObjFieldTabENEx.fldName}()`;
  }

  /// <summary>
  /// 根据关键字获取相关对象, 从缓存的对象列表中获取.
  /// </summary>
  /// <param name = "arrFieldTabExObjLst">arrFieldTabExObjLst</param>
  /// <param name = "strFldID">所给的关键字</param>
  /// <returns>根据关键字获取的对象</returns>
  public static GetFieldTabExObjByFldID_Array(
    strFldID: string,
    arrFieldTabExObjLst: Array<clsFieldTabENEx>,
  ): clsFieldTabENEx {
    for (const objFieldTabEN of arrFieldTabExObjLst) {
      if (objFieldTabEN.fldId == strFldID) {
        return objFieldTabEN;
      }
    }
    return new clsFieldTabENEx();
  }
}
