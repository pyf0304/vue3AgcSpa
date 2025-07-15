/**
 * 界面相关表(ViewRelaTab)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2022年04月15日.
 * 注意:该类必须与调用界面处于同一个包，否则调用不成功!
 **/
//import $ from "jquery";
import { GetSortExpressInfo, ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import {
  ViewRelaTab_GetObjLstByPagerAsync,
  ViewRelaTab_SortFunByKey,
} from '@/ts/L3ForWApi/PrjInterface/clsViewRelaTabWApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { clsViewRelaTabEN } from '@/ts/L0Entity/PrjInterface/clsViewRelaTabEN';
import { clsViewRelaTabENEx } from '@/ts/L0Entity/PrjInterface/clsViewRelaTabENEx';

import { RegionType_func } from '@/ts/L3ForWApi/RegionManage/clsRegionTypeWApi';
import { clsRegionTypeEN } from '@/ts/L0Entity/RegionManage/clsRegionTypeEN';
import { InOutType_func } from '@/ts/L3ForWApi/SysPara/clsInOutTypeWApi';
import { clsInOutTypeEN } from '@/ts/L0Entity/SysPara/clsInOutTypeEN';
import { ViewTabType_func } from '@/ts/L3ForWApi/PrjInterface/clsViewTabTypeWApi';
import { clsViewTabTypeEN } from '@/ts/L0Entity/PrjInterface/clsViewTabTypeEN';
import { clsvPrjTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvPrjTab_SimEN';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { vPrjTab_SimEx_func } from '@/ts/L3ForWApiEx/Table_Field/clsvPrjTab_SimExWApi';
import { useviewInfoStore } from '@/store/modules/viewInfo';
import { useviewRegionStore } from '@/store/modules/viewRegion';

export const viewRelaTabEx_Controller = 'ViewRelaTabExApi';
export const viewRelaTabEx_ConstructorName = 'viewRelaTabEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function ViewRelaTabEx_GetWebApiUrl(strController: string, strAction: string): string {
  // const strThisFuncName = 'GetWebApiUrl';
  let strServiceUrl: string;
  let strCurrIPAddressAndPort = '';
  if (clsSysPara4WebApi.bolIsLocalHost == false) {
    strCurrIPAddressAndPort = clsSysPara4WebApi.CurrIPAddressAndPort;
  } else {
    strCurrIPAddressAndPort = clsSysPara4WebApi.CurrIPAddressAndPort_Local;
  }
  if (IsNullOrEmpty(clsSysPara4WebApi.CurrPrx) == true) {
    strServiceUrl = Format('{0}/{1}/{2}', strCurrIPAddressAndPort, strController, strAction);
  } else {
    strServiceUrl = Format(
      '{0}/{1}/{2}/{3}',
      strCurrIPAddressAndPort,
      clsSysPara4WebApi.CurrPrx,
      strController,
      strAction,
    );
  }
  return strServiceUrl;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_CopyToEx)
 * @param objViewRelaTabENS:源对象
 * @returns 目标对象=>clsViewRelaTabEN:objViewRelaTabENT
 **/
export function ViewRelaTabEx_CopyToEx(objViewRelaTabENS: clsViewRelaTabEN): clsViewRelaTabENEx {
  const strThisFuncName = ViewRelaTabEx_CopyToEx.name;
  const objViewRelaTabENT = new clsViewRelaTabENEx();
  try {
    ObjectAssign(objViewRelaTabENT, objViewRelaTabENS);
    return objViewRelaTabENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      viewRelaTabEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objViewRelaTabENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function ViewRelaTabEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsViewRelaTabENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrViewRelaTabObjLst = await ViewRelaTab_GetObjLstByPagerAsync(objPagerPara);
  const arrViewRelaTabExObjLst = arrViewRelaTabObjLst.map(ViewRelaTabEx_CopyToEx);

  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsViewRelaTabEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrViewRelaTabExObjLst) {
      await ViewRelaTabEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrViewRelaTabExObjLst.length == 0) return arrViewRelaTabExObjLst;
  let arrViewRelaTab_Sel: Array<clsViewRelaTabENEx> = arrViewRelaTabExObjLst;
  try {
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrViewRelaTab_Sel = arrViewRelaTab_Sel.sort(
        ViewRelaTabEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrViewRelaTab_Sel = arrViewRelaTab_Sel.sort(objPagerPara.sortFun);
    }

    return arrViewRelaTab_Sel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      viewRelaTabEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsViewRelaTabENEx>();
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objViewRelaTabS:源对象
 **/
export async function ViewRelaTabEx_FuncMap_ViewName(objViewRelaTab: clsViewRelaTabENEx) {
  const strThisFuncName = ViewRelaTabEx_FuncMap_ViewName.name;
  const viewInfoStore = useviewInfoStore();
  try {
    if (IsNullOrEmpty(objViewRelaTab.viewName) == true) {
      const ViewInfo_ViewId = objViewRelaTab.viewId;
      const ViewInfo_ViewName = await viewInfoStore.getName(ViewInfo_ViewId);
      objViewRelaTab.viewName = ViewInfo_ViewName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000162)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      viewRelaTabEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objViewRelaTabS:源对象
 **/
export async function ViewRelaTabEx_FuncMap_ViewCnName(objViewRelaTab: clsViewRelaTabENEx) {
  const strThisFuncName = ViewRelaTabEx_FuncMap_ViewCnName.name;
  const viewInfoStore = useviewInfoStore();
  try {
    if (IsNullOrEmpty(objViewRelaTab.viewCnName) == true) {
      const ViewInfo_ViewId = objViewRelaTab.viewId;
      const ViewInfo_ViewCnName = await viewInfoStore.getName(ViewInfo_ViewId);
      objViewRelaTab.viewCnName = ViewInfo_ViewCnName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000163)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      viewRelaTabEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objViewRelaTabS:源对象
 **/
export async function ViewRelaTabEx_FuncMap_RegionName(objViewRelaTab: clsViewRelaTabENEx) {
  const strThisFuncName = ViewRelaTabEx_FuncMap_RegionName.name;
  const viewRegionStore = useviewRegionStore();
  try {
    if (IsNullOrEmpty(objViewRelaTab.regionName) == true) {
      const ViewRegion_RegionId = objViewRelaTab.regionId;
      const ViewRegion_RegionName = await viewRegionStore.getName(ViewRegion_RegionId);
      objViewRelaTab.regionName = ViewRegion_RegionName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000131)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      viewRelaTabEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objViewRelaTabS:源对象
 **/
export async function ViewRelaTabEx_FuncMap_RegionTypeName(objViewRelaTab: clsViewRelaTabENEx) {
  const strThisFuncName = ViewRelaTabEx_FuncMap_RegionTypeName.name;
  const viewRegionStore = useviewRegionStore();
  try {
    if (IsNullOrEmpty(objViewRelaTab.regionTypeName) == true) {
      const ViewRegion_RegionId = objViewRelaTab.regionId;
      const ViewRegion_RegionTypeId = await viewRegionStore.getRegionTypeId(ViewRegion_RegionId);
      const RegionType_RegionTypeId = ViewRegion_RegionTypeId;
      const RegionType_RegionTypeName = await RegionType_func(
        clsRegionTypeEN.con_RegionTypeId,
        clsRegionTypeEN.con_RegionTypeName,
        RegionType_RegionTypeId,
      );
      objViewRelaTab.regionTypeName = RegionType_RegionTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000124)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      viewRelaTabEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objViewRelaTabS:源对象
 **/
export async function ViewRelaTabEx_FuncMap_InOutTypeName(objViewRelaTab: clsViewRelaTabENEx) {
  const strThisFuncName = ViewRelaTabEx_FuncMap_InOutTypeName.name;
  try {
    if (IsNullOrEmpty(objViewRelaTab.inOutTypeName) == true) {
      const InOutType_InOutTypeId = objViewRelaTab.inOutTypeId;
      const InOutType_InOutTypeName = await InOutType_func(
        clsInOutTypeEN.con_InOutTypeId,
        clsInOutTypeEN.con_InOutTypeName,
        InOutType_InOutTypeId,
      );
      objViewRelaTab.inOutTypeName = InOutType_InOutTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000122)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      viewRelaTabEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objViewRelaTabS:源对象
 **/
export async function ViewRelaTabEx_FuncMap_ViewTabTypeName(objViewRelaTab: clsViewRelaTabENEx) {
  const strThisFuncName = ViewRelaTabEx_FuncMap_ViewTabTypeName.name;
  try {
    if (IsNullOrEmpty(objViewRelaTab.viewTabTypeName) == true) {
      const ViewTabType_ViewTabTypeId = objViewRelaTab.viewTabTypeId;
      const ViewTabType_ViewTabTypeName = await ViewTabType_func(
        clsViewTabTypeEN.con_ViewTabTypeId,
        clsViewTabTypeEN.con_ViewTabTypeName,
        ViewTabType_ViewTabTypeId,
      );
      objViewRelaTab.viewTabTypeName = ViewTabType_ViewTabTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000164)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      viewRelaTabEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objViewRelaTabS:源对象
 **/
export async function ViewRelaTabEx_FuncMap_TabName(objViewRelaTab: clsViewRelaTabENEx) {
  const strThisFuncName = ViewRelaTabEx_FuncMap_TabName.name;
  try {
    if (IsNullOrEmpty(objViewRelaTab.tabName) == true) {
      const vPrjTab_Sim_TabId = objViewRelaTab.tabId;
      const vPrjTab_Sim_TabName = await vPrjTab_SimEx_func(
        clsvPrjTab_SimEN.con_TabId,
        clsvPrjTab_SimEN.con_TabName,
        vPrjTab_Sim_TabId,
      );
      objViewRelaTab.tabName = vPrjTab_Sim_TabName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000094)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      viewRelaTabEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2022-04-15
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function ViewRelaTabEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  // const strThisFuncName = 'SortFunByKey';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsViewRelaTabENEx.con_ViewName:
        return (a: clsViewRelaTabENEx, b: clsViewRelaTabENEx) => {
          return a.viewName.localeCompare(b.viewName);
        };
      case clsViewRelaTabENEx.con_ViewCnName:
        return (a: clsViewRelaTabENEx, b: clsViewRelaTabENEx) => {
          return a.viewCnName.localeCompare(b.viewCnName);
        };
      case clsViewRelaTabENEx.con_RegionName:
        return (a: clsViewRelaTabENEx, b: clsViewRelaTabENEx) => {
          return a.regionName.localeCompare(b.regionName);
        };
      case clsViewRelaTabENEx.con_RegionTypeName:
        return (a: clsViewRelaTabENEx, b: clsViewRelaTabENEx) => {
          return a.regionTypeName.localeCompare(b.regionTypeName);
        };
      case clsViewRelaTabENEx.con_InOutTypeName:
        return (a: clsViewRelaTabENEx, b: clsViewRelaTabENEx) => {
          return a.inOutTypeName.localeCompare(b.inOutTypeName);
        };
      case clsViewRelaTabENEx.con_ViewTabTypeName:
        return (a: clsViewRelaTabENEx, b: clsViewRelaTabENEx) => {
          return a.viewTabTypeName.localeCompare(b.viewTabTypeName);
        };
      case clsViewRelaTabENEx.con_TabName:
        return (a: clsViewRelaTabENEx, b: clsViewRelaTabENEx) => {
          return a.tabName.localeCompare(b.tabName);
        };
      // case clsViewRelaTabENEx.con_CmPrjId:
      //   return (a: clsViewRelaTabENEx, b: clsViewRelaTabENEx) => {
      //     return a.cmPrjId.localeCompare(b.cmPrjId);
      //   };
      default:
        return ViewRelaTab_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsViewRelaTabENEx.con_ViewName:
        return (a: clsViewRelaTabENEx, b: clsViewRelaTabENEx) => {
          return b.viewName.localeCompare(a.viewName);
        };
      case clsViewRelaTabENEx.con_ViewCnName:
        return (a: clsViewRelaTabENEx, b: clsViewRelaTabENEx) => {
          return b.viewCnName.localeCompare(a.viewCnName);
        };
      case clsViewRelaTabENEx.con_RegionName:
        return (a: clsViewRelaTabENEx, b: clsViewRelaTabENEx) => {
          return b.regionName.localeCompare(a.regionName);
        };
      case clsViewRelaTabENEx.con_RegionTypeName:
        return (a: clsViewRelaTabENEx, b: clsViewRelaTabENEx) => {
          return b.regionTypeName.localeCompare(a.regionTypeName);
        };
      case clsViewRelaTabENEx.con_InOutTypeName:
        return (a: clsViewRelaTabENEx, b: clsViewRelaTabENEx) => {
          return b.inOutTypeName.localeCompare(a.inOutTypeName);
        };
      case clsViewRelaTabENEx.con_ViewTabTypeName:
        return (a: clsViewRelaTabENEx, b: clsViewRelaTabENEx) => {
          return b.viewTabTypeName.localeCompare(a.viewTabTypeName);
        };
      case clsViewRelaTabENEx.con_TabName:
        return (a: clsViewRelaTabENEx, b: clsViewRelaTabENEx) => {
          return b.tabName.localeCompare(a.tabName);
        };
      // case clsViewRelaTabENEx.con_CmPrjId:
      //   return (a: clsViewRelaTabENEx, b: clsViewRelaTabENEx) => {
      //     return b.cmPrjId.localeCompare(a.cmPrjId);
      //   };
      default:
        return ViewRelaTab_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2022-04-15
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function ViewRelaTabEx_FuncMapByFldName(
  strFldName: string,
  objViewRelaTabEx: clsViewRelaTabENEx,
) {
  const strThisFuncName = ViewRelaTabEx_FuncMapByFldName.name;
  let strMsg = '';
  //如果是本表中字段，不需要映射
  const arrFldName = clsViewRelaTabEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsViewRelaTabENEx.con_ViewName:
      return ViewRelaTabEx_FuncMap_ViewName(objViewRelaTabEx);
    case clsViewRelaTabENEx.con_ViewCnName:
      return ViewRelaTabEx_FuncMap_ViewCnName(objViewRelaTabEx);
    case clsViewRelaTabENEx.con_RegionName:
      return ViewRelaTabEx_FuncMap_RegionName(objViewRelaTabEx);
    case clsViewRelaTabENEx.con_RegionTypeName:
      return ViewRelaTabEx_FuncMap_RegionTypeName(objViewRelaTabEx);
    case clsViewRelaTabENEx.con_InOutTypeName:
      return ViewRelaTabEx_FuncMap_InOutTypeName(objViewRelaTabEx);
    case clsViewRelaTabENEx.con_ViewTabTypeName:
      return ViewRelaTabEx_FuncMap_ViewTabTypeName(objViewRelaTabEx);
    case clsViewRelaTabENEx.con_TabName:
      return ViewRelaTabEx_FuncMap_TabName(objViewRelaTabEx);
    // case clsViewRelaTabENEx.con_CmPrjId:
    //   return ViewRelaTabEx_FuncMap_CmPrjId(objViewRelaTabEx);
    default:
      strMsg = Format(
        '扩展字段:[{0}]在字段值函数映射中不存在！(in {1})',
        strFldName,
        strThisFuncName,
      );
      console.error(strMsg);
  }
}
