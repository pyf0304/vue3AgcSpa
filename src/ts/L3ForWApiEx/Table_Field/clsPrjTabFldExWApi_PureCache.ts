import { clsPrjTabFldEN } from '@/ts/L0Entity/Table_Field/clsPrjTabFldEN';
import { clsPrjTabFldENEx } from '@/ts/L0Entity/Table_Field/clsPrjTabFldENEx';
import { PrjTabFld_GetObjLstByJSONObjLst } from '@/ts/L3ForWApi/Table_Field/clsPrjTabFldWApi';
//import { clsPrjTabFldENEx_Sim } from '../../L0Entity/Table_Field/clsPrjTabFldENEx_Sim';

export class clsPrjTabFldExWApi_PureCache {
  //public static mstrController: string = "PrjTabFldExApi";
  public objPrjTabFldEN: clsPrjTabFldEN = new clsPrjTabFldEN();

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
    let arrPrjTabFldObjLstCache;
    switch (clsPrjTabFldEN.CacheModeId) {
      case '04': //sessionStorage
        arrPrjTabFldObjLstCache =
          await clsPrjTabFldExWApi_PureCache.GetObjLst_sessionStorage_PureCache();
        break;
      case '03': //localStorage
        arrPrjTabFldObjLstCache =
          await clsPrjTabFldExWApi_PureCache.GetObjLst_localStorage_PureCache();
        break;
      case '02': //ClientCache
        arrPrjTabFldObjLstCache = null;
        break;
      default:
        arrPrjTabFldObjLstCache = null;
        break;
    }
    return arrPrjTabFldObjLstCache;
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
    const strKey = clsPrjTabFldEN._CurrTabName;
    if (strKey == '') {
      console.log('关键字为空！不正确');
      throw new Error('关键字为空！不正确');
    }
    if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
      //缓存存在，直接返回
      const strTempObjLst: string = localStorage.getItem(strKey) as string;

      const arrPrjTabFldExObjLstCache: Array<clsPrjTabFldENEx> = JSON.parse(strTempObjLst);
      const arrPrjTabFldObjLst_T = PrjTabFld_GetObjLstByJSONObjLst(arrPrjTabFldExObjLstCache);
      return arrPrjTabFldObjLst_T;
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
    const strKey = clsPrjTabFldEN._CurrTabName;
    if (strKey == '') {
      console.log('关键字为空！不正确');
      throw new Error('关键字为空！不正确');
    }
    if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
      //缓存存在，直接返回
      const strTempObjLst: string = sessionStorage.getItem(strKey) as string;

      const arrPrjTabFldExObjLstCache: Array<clsPrjTabFldENEx> = JSON.parse(strTempObjLst);
      const arrPrjTabFldObjLst_T = PrjTabFld_GetObjLstByJSONObjLst(arrPrjTabFldExObjLstCache);
      return arrPrjTabFldObjLst_T;
    } else return null;
  }
}
