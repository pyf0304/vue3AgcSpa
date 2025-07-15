import { clsFldOperationTypeEN } from '@/ts/L0Entity/Table_Field/clsFldOperationTypeEN';
import { clsFldOperationTypeENEx } from '@/ts/L0Entity/Table_Field/clsFldOperationTypeENEx';
import { FldOperationType_GetObjLstByJSONObjLst } from '@/ts/L3ForWApi/Table_Field/clsFldOperationTypeWApi';
import { BindDdl_ObjLstInDivObj } from '@/ts/PubFun/clsCommFunc4Web';

import { Format } from '@/ts/PubFun/clsString';

export class clsFldOperationTypeExWApi_PureCache {
  //public static mstrController: string = "FldOperationTypeExApi";
  public objFldOperationTypeEN: clsFldOperationTypeEN = new clsFldOperationTypeEN();

  /// <summary>
  /// 构造函数
  /// (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_ClassConstructor)
  /// </summary>
  constructor() {}

  /**
   * 获取本地缓存中的对象列表，是整个表中的全部记录，也可是表中某缓存分类的全部记录.
   * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
   * @returns 从本地缓存中获取的对象列表
   **/
  public static async GetObjLst_PureCache() {
    //const strThisFuncName = this.GetObjLst_PureCache.name;
    let arrFldOperationTypeObjLstCache;
    switch (clsFldOperationTypeEN.CacheModeId) {
      case '04': //sessionStorage
        arrFldOperationTypeObjLstCache =
          await clsFldOperationTypeExWApi_PureCache.GetObjLst_sessionStorage_PureCache();
        break;
      case '03': //localStorage
        arrFldOperationTypeObjLstCache =
          await clsFldOperationTypeExWApi_PureCache.GetObjLst_localStorage_PureCache();
        break;
      case '02': //ClientCache
        arrFldOperationTypeObjLstCache = null;
        break;
      default:
        arrFldOperationTypeObjLstCache = null;
        break;
    }
    return arrFldOperationTypeObjLstCache;
  }
  /**
   * 获取本地缓存中的对象列表，是整个表中的全部记录，也可是表中某缓存分类的全部记录.
   * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage_PureCache)
   * @returns 从本地缓存中获取的对象列表
   **/
  public static async GetObjLst_localStorage_PureCache() {
    // const strThisFuncName = this.GetObjLst_localStorage_PureCache.name;
    //初始化列表缓存
    // const strWhereCond = '1=1';
    const strKey = clsFldOperationTypeEN._CurrTabName;
    if (strKey == '') {
      console.log('关键字为空！不正确');
      throw new Error('关键字为空！不正确');
    }
    if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
      //缓存存在，直接返回
      const strTempObjLst: string = localStorage.getItem(strKey) as string;

      const arrFldOperationTypeExObjLstCache: Array<clsFldOperationTypeENEx> =
        JSON.parse(strTempObjLst);
      const arrFldOperationTypeObjLst_T = FldOperationType_GetObjLstByJSONObjLst(
        arrFldOperationTypeExObjLstCache,
      );
      return arrFldOperationTypeObjLst_T;
    } else return null;
  }
  /**
   * 获取本地缓存中的对象列表，是整个表中的全部记录，也可是表中某缓存分类的全部记录.
   * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage_PureCache)
   * @returns 从本地缓存中获取的对象列表
   **/
  public static async GetObjLst_sessionStorage_PureCache() {
    // const strThisFuncName = this.GetObjLst_sessionStorage_PureCache.name;
    //初始化列表缓存
    // const strWhereCond = '1=1';
    const strKey = clsFldOperationTypeEN._CurrTabName;
    if (strKey == '') {
      console.log('关键字为空！不正确');
      throw new Error('关键字为空！不正确');
    }
    if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
      //缓存存在，直接返回
      const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
      const arrFldOperationTypeExObjLstCache: Array<clsFldOperationTypeENEx> =
        JSON.parse(strTempObjLst);
      const arrFldOperationTypeObjLst_T = FldOperationType_GetObjLstByJSONObjLst(
        arrFldOperationTypeExObjLstCache,
      );
      return arrFldOperationTypeObjLst_T;
    } else return null;
  }
  /**
   * 绑定基于Web的下拉框
   * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)
   * @param objDDL:需要绑定当前表的下拉框
   */
  public static async BindDdl_FldOpTypeIdInDivCache(
    strDivName: HTMLDivElement,
    strDdlName: string,
  ) {
    const strThisFuncName = 'BindDdl_FldOpTypeIdInDivCache';

    const objDdl = document.getElementById(strDdlName);
    if (objDdl == null) {
      const strMsg = Format('下拉框：{0} 不存在！(In BindDdl_FldOpTypeIdInDivCache)', strDdlName);
      alert(strMsg);
      console.error(strMsg);
      throw strMsg;
    }
    //为数据源于表的下拉框设置内容

    const arrObjLst_Sel = await clsFldOperationTypeExWApi_PureCache.GetObjLst_PureCache();
    if (arrObjLst_Sel == null) {
      console.log(
        Format('從緩存獲取的對象列表為null!(in {0}.{1})', this.constructor.name, strThisFuncName),
      );
      return;
    }
    BindDdl_ObjLstInDivObj(
      strDivName,
      strDdlName,
      arrObjLst_Sel,
      clsFldOperationTypeEN.con_FldOpTypeId,
      clsFldOperationTypeEN.con_FldOpTypeName,
      '字段操作类型',
    );
  }
}
