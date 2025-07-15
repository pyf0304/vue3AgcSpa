import { clsDataTypeAbbrEN } from '@/ts/L0Entity/SysPara/clsDataTypeAbbrEN';
import { clsDataTypeAbbrENEx } from '@/ts/L0Entity/SysPara/clsDataTypeAbbrENEx';
import { DataTypeAbbr_GetObjLstByJSONObjLst } from '@/ts/L3ForWApi/SysPara/clsDataTypeAbbrWApi';
import { BindDdl_ObjLstInDivObj } from '@/ts/PubFun/clsCommFunc4Web';

import { Format } from '@/ts/PubFun/clsString';

export class clsDataTypeAbbrExWApi_PureCache {
  //public static mstrController: string = "DataTypeAbbrExApi";
  public objDataTypeAbbrEN: clsDataTypeAbbrEN = new clsDataTypeAbbrEN();

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
    let arrDataTypeAbbrObjLstCache;
    switch (clsDataTypeAbbrEN.CacheModeId) {
      case '04': //sessionStorage
        arrDataTypeAbbrObjLstCache =
          await clsDataTypeAbbrExWApi_PureCache.GetObjLst_sessionStorage_PureCache();
        break;
      case '03': //localStorage
        arrDataTypeAbbrObjLstCache =
          await clsDataTypeAbbrExWApi_PureCache.GetObjLst_localStorage_PureCache();
        break;
      case '02': //ClientCache
        arrDataTypeAbbrObjLstCache = null;
        break;
      default:
        arrDataTypeAbbrObjLstCache = null;
        break;
    }
    return arrDataTypeAbbrObjLstCache;
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
    const strKey = clsDataTypeAbbrEN._CurrTabName;
    if (strKey == '') {
      console.log('关键字为空！不正确');
      throw new Error('关键字为空！不正确');
    }
    if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
      //缓存存在，直接返回
      const strTempObjLst: string = localStorage.getItem(strKey) as string;
      const arrDataTypeAbbrExObjLstCache: Array<clsDataTypeAbbrENEx> = JSON.parse(strTempObjLst);
      const arrDataTypeAbbrObjLst_T = DataTypeAbbr_GetObjLstByJSONObjLst(
        arrDataTypeAbbrExObjLstCache,
      );
      return arrDataTypeAbbrObjLst_T;
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
    const strKey = clsDataTypeAbbrEN._CurrTabName;
    if (strKey == '') {
      console.log('关键字为空！不正确');
      throw new Error('关键字为空！不正确');
    }
    if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
      //缓存存在，直接返回
      const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
      const arrDataTypeAbbrExObjLstCache: Array<clsDataTypeAbbrENEx> = JSON.parse(strTempObjLst);
      const arrDataTypeAbbrObjLst_T = DataTypeAbbr_GetObjLstByJSONObjLst(
        arrDataTypeAbbrExObjLstCache,
      );
      return arrDataTypeAbbrObjLst_T;
    } else return null;
  }
  /**
   * 绑定基于Web的下拉框
   * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)
   * @param objDDL:需要绑定当前表的下拉框
   */
  public static async BindDdl_DataTypeIdInDivCache(strDivName: HTMLDivElement, strDdlName: string) {
    const strThisFuncName = 'BindDdl_DataTypeIdInDivCache';

    const objDdl = document.getElementById(strDdlName);
    if (objDdl == null) {
      const strMsg = Format(
        '下拉框：{0} 不存在！(In {1}.{2})',
        strDdlName,
        this.constructor.name,
        strThisFuncName,
      );
      alert(strMsg);
      console.error(strMsg);
      throw strMsg;
    }
    //为数据源于表的下拉框设置内容

    let arrObjLst_Sel = await clsDataTypeAbbrExWApi_PureCache.GetObjLst_PureCache();
    if (arrObjLst_Sel == null) {
      console.log(
        Format('從緩存獲取的對象列表為null!(in {0}.{1})', this.constructor.name, strThisFuncName),
      );
      return;
    }
    arrObjLst_Sel = arrObjLst_Sel.sort((x, y) => x.dataTypeName.localeCompare(y.dataTypeName));
    BindDdl_ObjLstInDivObj(
      strDivName,
      strDdlName,
      arrObjLst_Sel,
      clsDataTypeAbbrEN.con_DataTypeId,
      clsDataTypeAbbrEN.con_DataTypeName,
      '数据类型',
    );
  }
}
