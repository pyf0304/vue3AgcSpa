import { clsvPrjTabFld_SimENEx } from '@/ts/L0Entity/Table_Field/clsvPrjTabFld_SimENEx';
import { clsvPrjTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvPrjTab_SimEN';
import { vPrjTabFld_Sim_GetObjLstByJSONObjLst } from '@/ts/L3ForWApi/Table_Field/clsvPrjTabFld_SimWApi';
import { BindDdl_ObjLstInDivObj_V } from '@/ts/PubFun/clsCommFunc4Web';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';

export class clsvPrjTab_SimExWApi_PureCache {
  //public static mstrController: string = "vPrjTab_SimExApi";
  public objvPrjTab_SimEN: clsvPrjTab_SimEN = new clsvPrjTab_SimEN();

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
  public static async GetObjLst_PureCache(strPrjId: string) {
    //const strThisFuncName = this.GetObjLst_PureCache.name;
    let arrvPrjTab_SimObjLstCache;
    switch (clsvPrjTab_SimEN.CacheModeId) {
      case '04': //sessionStorage
        arrvPrjTab_SimObjLstCache =
          await clsvPrjTab_SimExWApi_PureCache.GetObjLst_sessionStorage_PureCache(strPrjId);
        break;
      case '03': //localStorage
        arrvPrjTab_SimObjLstCache =
          await clsvPrjTab_SimExWApi_PureCache.GetObjLst_localStorage_PureCache(strPrjId);
        break;
      case '02': //ClientCache
        arrvPrjTab_SimObjLstCache = null;
        break;
      default:
        arrvPrjTab_SimObjLstCache = null;
        break;
    }
    return arrvPrjTab_SimObjLstCache;
  }
  /**
   * 获取本地缓存中的对象列表，是整个表中的全部记录，也可是表中某缓存分类的全部记录.
   * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage_PureCache)
   * @returns 从本地缓存中获取的对象列表
   **/
  public static async GetObjLst_sessionStorage_PureCache(strPrjId: string) {
    // const strThisFuncName = this.GetObjLst_sessionStorage_PureCache.name;
    //初始化列表缓存
    // let strWhereCond = '1=1';
    // strWhereCond = Format("prjId='{0}'", strPrjId);
    const strKey = Format('{0}_{1}', clsvPrjTab_SimEN._CurrTabName, strPrjId);
    if (strKey == '') {
      console.log('关键字为空！不正确');
      throw new Error('关键字为空！不正确');
    }
    if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
      //缓存存在，直接返回
      const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
      const arrvPrjTabFld_SimExObjLstCache: Array<clsvPrjTabFld_SimENEx> =
        JSON.parse(strTempObjLst);
      const arrvPrjTabFld_SimObjLst_T = vPrjTabFld_Sim_GetObjLstByJSONObjLst(
        arrvPrjTabFld_SimExObjLstCache,
      );
      return arrvPrjTabFld_SimObjLst_T;
    } else return null;
  }
  /**
   * 获取本地缓存中的对象列表，是整个表中的全部记录，也可是表中某缓存分类的全部记录.
   * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage_PureCache)
   * @returns 从本地缓存中获取的对象列表
   **/
  public static async GetObjLst_localStorage_PureCache(strPrjId: string) {
    // const strThisFuncName = this.GetObjLst_localStorage_PureCache.name;
    //初始化列表缓存
    // let strWhereCond = '1=1';
    // strWhereCond = Format("prjId='{0}'", strPrjId);
    const strKey = Format('{0}_{1}', clsvPrjTab_SimEN._CurrTabName, strPrjId);
    if (strKey == '') {
      console.log('关键字为空！不正确');
      throw new Error('关键字为空！不正确');
    }
    if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
      //缓存存在，直接返回
      const strTempObjLst: string = localStorage.getItem(strKey) as string;
      const arrvPrjTabFld_SimExObjLstCache: Array<clsvPrjTabFld_SimENEx> =
        JSON.parse(strTempObjLst);
      const arrvPrjTabFld_SimObjLst_T = vPrjTabFld_Sim_GetObjLstByJSONObjLst(
        arrvPrjTabFld_SimExObjLstCache,
      );
      return arrvPrjTabFld_SimObjLst_T;
    } else return null;
  }

  /**
   * 绑定基于Web的下拉框
   * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)
   * @param objDDL:需要绑定当前表的下拉框
   * @param strPrjId:工程ID
   */
  public static async BindDdl_TabIdInDivCacheBak(
    strDivName: HTMLDivElement,
    strDdlName: string,
    strPrjId: string,
  ) {
    const strThisFuncName = 'BindDdl_TabIdInDivCache';

    if (IsNullOrEmpty(strPrjId) == true) {
      const strMsg = Format('参数:[strPrjId]不能为空！(In BindDdl_TabIdInDivCache)');
      console.error(strMsg);
      throw strMsg;
    }

    const objDdl = document.getElementById(strDdlName);
    if (objDdl == null) {
      const strMsg = Format('下拉框：{0} 不存在！(In BindDdl_TabIdInDivCache)', strDdlName);
      alert(strMsg);
      console.error(strMsg);
      throw strMsg;
    }
    //为数据源于表的下拉框设置内容

    let arrObjLst_Sel = await clsvPrjTab_SimExWApi_PureCache.GetObjLst_PureCache(strPrjId);
    if (arrObjLst_Sel == null) {
      console.log(
        Format('從緩存獲取的對象列表為null!(in {0}.{1})', this.constructor.name, strThisFuncName),
      );
      return;
    }
    arrObjLst_Sel = arrObjLst_Sel.filter((x) => x.prjId == strPrjId);
    BindDdl_ObjLstInDivObj_V(
      strDivName,
      strDdlName,
      arrObjLst_Sel,
      clsvPrjTab_SimEN.con_TabId,
      clsvPrjTab_SimEN.con_TabName,
      'v工程表_Sim',
    );
  }
}
