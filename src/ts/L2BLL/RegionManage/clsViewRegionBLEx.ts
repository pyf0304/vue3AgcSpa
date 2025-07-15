import {
  ViewRegion_GetObjByRegionIdAsync,
  ViewRegion_GetObjLstAsync,
  ViewRegion_IsExistRecordAsync,
  ViewRegion_UpdateRecordAsync,
} from '@/ts/L3ForWApi/RegionManage/clsViewRegionWApi';
import { Projects_GetObjByPrjIdCache } from '@/ts/L3ForWApi/PrjManage/clsProjectsWApi';
import { enumApplicationType } from '@/ts/L0Entity/GeneCode/clsApplicationTypeEN';
import { enumRegionType } from '@/ts/L0Entity/RegionManage/clsRegionTypeEN';
import { clsViewRegionEN } from '@/ts/L0Entity/RegionManage/clsViewRegionEN';
import { clsViewRegionENEx } from '@/ts/L0Entity/RegionManage/clsViewRegionENEx';
import { clsViewRegionRelaEN } from '@/ts/L0Entity/RegionManage/clsViewRegionRelaEN';
import { ViewRegionEx_CopyToEx } from '@/ts/L3ForWApiEx/RegionManage/clsViewRegionExWApi';
import {
  ViewRegionRelaEx_GetRegionIdLstByViewId,
  ViewRegionRelaEx_GetRegionIdLstByViewIdCache,
  ViewRegionRelaEx_GetRegionNumByViewId,
} from '@/ts/L3ForWApiEx/RegionManage/clsViewRegionRelaExWApi';
import { vPrjTab_SimEx_GetObjByTabIdCache } from '@/ts/L3ForWApiEx/Table_Field/clsvPrjTab_SimExWApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { useviewInfoStore } from '@/store/modules/viewInfo';
import { useviewRegionStore } from '@/store/modules/viewRegion';

export class clsViewRegionBLEx {
  public static strPrjIdCache_Init = '';

  /// <summary>
  /// 根据界面Id获取相关区域数
  /// </summary>
  /// <param name="strViewId"></param>
  /// <returns>区域数</returns>
  public static async GetRegionNumByViewId(strViewId: string) {
    return ViewRegionRelaEx_GetRegionNumByViewId(strViewId);
  }
  /// <summary>
  /// 根据界面Id获取相关区域对象列表
  /// </summary>
  /// <param name="strViewId"></param>
  /// <returns>区域对象列表</returns>
  public static async GetObjLstByViewId(strViewId: string) {
    const strCondition = Format(
      "{0} in (Select {0} From {1} where {2}='{3}')",
      clsViewRegionEN.con_RegionId,
      clsViewRegionRelaEN._CurrTabName,
      clsViewRegionRelaEN.con_ViewId,
      strViewId,
    );
    const arrObjLst: Array<clsViewRegionEN> = await ViewRegion_GetObjLstAsync(strCondition);
    return arrObjLst;
  }
  public static async SetClsName(
    strRegionId: string,
    intApplicationTypeId: number,
    strPrjId: string,
  ) {
    const strThisFuncName = this.SetClsName.name;
    const viewRegionStore = useviewRegionStore();
    const objProject = await Projects_GetObjByPrjIdCache(strPrjId);
    if (objProject == null) {
      const strMsg = Format('项目Id:[{0}]，没有相应的项目，请检查！', strPrjId);
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    const objViewRegionEN = await viewRegionStore.getObjEN(strRegionId);
    if (objViewRegionEN == null) {
      const strMsg = Format(
        '在项目:[{0}]中，区域Id:[{1}]没有相应区域，请检查！',
        objProject.prjName,
        strRegionId,
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    const objPrjTab = await vPrjTab_SimEx_GetObjByTabIdCache(
      objViewRegionEN.tabId,
      clsPrivateSessionStorage.cmPrjId,
    );
    if (IsNullOrEmpty(objViewRegionEN.tabId) == true) return true;
    if (objPrjTab == null) {
      const strMsg = Format(
        '在项目:[{0}]中，表Id:[{1}]没有相应表，请检查！',
        clsPrivateSessionStorage.currSelPrjName,
        objViewRegionEN.tabId,
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    if (objPrjTab == null) return true;
    let strClassName = '';
    let strMsg = '';
    switch (intApplicationTypeId) {
      case enumApplicationType.WinApp_1:
        switch (objViewRegionEN.regionTypeId) {
          case enumRegionType.EditRegion_0003:
            strClassName = Format('wuc{0}', objPrjTab.tabName);
            objViewRegionEN.clsName = strClassName;
            return ViewRegion_UpdateRecordAsync(objViewRegionEN);

          case enumRegionType.ListRegion_0002:
            strClassName = Format('wuc{0}4Gv', objPrjTab.tabName);
            objViewRegionEN.clsName = strClassName;
            return ViewRegion_UpdateRecordAsync(objViewRegionEN);
        }
        break;
      case enumApplicationType.WebApp_2:
      case enumApplicationType.Neo4JApp_24:
        switch (objViewRegionEN.regionTypeId) {
          case enumRegionType.EditRegion_0003:
            strClassName = Format('wuc{0}', objPrjTab.tabName);
            objViewRegionEN.clsName = strClassName;
            return ViewRegion_UpdateRecordAsync(objViewRegionEN);

          case enumRegionType.ListRegion_0002:
            strClassName = Format('wuc{0}4Gv', objPrjTab.tabName);
            objViewRegionEN.clsName = strClassName;
            return ViewRegion_UpdateRecordAsync(objViewRegionEN);
        }
        break;
      case enumApplicationType.WebApp_JS_RJ_28:
      case enumApplicationType.SpaAppInCore_TS_18:
        switch (objViewRegionEN.regionTypeId) {
          case enumRegionType.EditRegion_0003:
            strClassName = Format('WA_{0}_Edit', objPrjTab.tabName);
            objViewRegionEN.clsName = strClassName;
            return ViewRegion_UpdateRecordAsync(objViewRegionEN);

          case enumRegionType.ListRegion_0002:
            strClassName = Format('WA_{0}4Gv', objPrjTab.tabName);
            objViewRegionEN.clsName = strClassName;
            return ViewRegion_UpdateRecordAsync(objViewRegionEN);
          case enumRegionType.DetailRegion_0006:
            strClassName = Format('WA_{0}_Detail', objPrjTab.tabName);
            objViewRegionEN.clsName = strClassName;
            return ViewRegion_UpdateRecordAsync(objViewRegionEN);

          //default:
          //    const strMsg=  Format("设置类名在函数中没有被处理！(In {0})", clsStackTrace1.GetCurrClassFunction());
          //    throw new Error(strMsg);
          //    break;
        }
        break;
      default:
        strMsg = Format(
          '设置类名在函数中没有被处理！(In {0}.{1})',
          this.prototype.constructor.name,
          strThisFuncName,
        );
        throw new Error(strMsg);
      //                    break;
    }
    return true;
  }

  public static async SetClassName2(strViewId: string, strCmPrjId: string) {
    const viewInfoStore = useviewInfoStore();
    const arrRegionId: Array<string> = await ViewRegionRelaEx_GetRegionIdLstByViewId(strViewId);
    const objViewInfo = await viewInfoStore.getObj(strViewId);
    if (objViewInfo == null) return;
    for (const strRegionId of arrRegionId) {
      clsViewRegionBLEx.SetClsName(strRegionId, objViewInfo.applicationTypeId, strCmPrjId);
    }
    return true;
  }
  public static async CheckDuplicate(objViewRegionEN: clsViewRegionEN) {
    let sbWhereCond = '';
    sbWhereCond += `prjId = '${objViewRegionEN.prjId}'`;
    // sbWhereCond += `And ${clsViewRegionEN.con_ApplicationTypeId} = '${objViewRegionEN.applicationTypeId}'`;
    sbWhereCond += `And regionName = '${objViewRegionEN.regionName}'`;
    return ViewRegion_IsExistRecordAsync(sbWhereCond.toString());
  }

  /// <summary>
  /// 根据条件获取扩展对象列表
  /// (AutoGCLib.BusinessLogicEx4CSharp:Gen_4BLEx_GetObjExLst)
  /// </summary>
  /// <param name = "strCondition">给定条件</param>
  /// <returns>返回扩展对象列表</returns>
  public static async GetObjExLst(strCondition: string) {
    const arrObjExLst = await ViewRegion_GetObjLstAsync(strCondition);

    return arrObjExLst;
  }

  /// <summary>
  /// 根据条件获取扩展对象列表
  /// </summary>
  /// <param name = "strViewId">界面Id</param>
  /// <param name = "strPrjId">界面Id</param>
  /// <returns>返回扩展对象列表</returns>
  public static async GetObjExLstByViewIdCache(strViewId: string, strCmPrjId: string) {
    const viewRegionStore = useviewRegionStore();
    //const strCondition=  Format("{0}='{1}'", clsViewRegionEN.con_ViewId, strViewId);
    const arrRegionId = await ViewRegionRelaEx_GetRegionIdLstByViewIdCache(strViewId, strCmPrjId);
    const arrObjLstCache = await viewRegionStore.getObjENLst(arrRegionId); // strCondition);
    const arrObjExLst = arrObjLstCache.filter((x) => arrRegionId.indexOf(x.regionId));

    return arrObjExLst;
  }

  /// <summary>
  /// 根据条件获取扩展对象列表
  /// </summary>
  /// <param name = "strViewId">界面Id</param>
  /// <param name = "strPrjId">界面Id</param>
  /// <returns>返回扩展对象列表</returns>
  public static async GetObjLstByViewIdCache(strViewId: string, strCmPrjId: string) {
    const viewRegionStore = useviewRegionStore();

    const arrRegionId = await ViewRegionRelaEx_GetRegionIdLstByViewIdCache(strViewId, strCmPrjId);
    const arrObjLst: Array<clsViewRegionEN> = await viewRegionStore.getObjENLst(arrRegionId); // strCondition);

    return arrObjLst;
  }
  /// <summary>
  /// 获取当前关键字的记录对象,用扩展对象的形式表示.
  /// </summary>
  /// <param name = "strRegionId">表关键字</param>
  /// <returns>表扩展对象</returns>
  public static async GetObjExByRegionId(strRegionId: string) {
    const strThisFuncName = this.GetObjExByRegionId.name;

    const objViewRegionEN = await ViewRegion_GetObjByRegionIdAsync(strRegionId);
    if (objViewRegionEN == null) {
      const strMsg = Format(
        '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    const objViewRegionENEx: clsViewRegionENEx = ViewRegionEx_CopyToEx(objViewRegionEN);
    return objViewRegionENEx;
  }
}
