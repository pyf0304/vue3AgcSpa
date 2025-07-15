/**
 * Created by  on 2020年06月04日.
 * 注意:该类必须与调用界面处于同一个包，否则调用不成功!
 */

import { clsViewInfoEN } from '@/ts/L0Entity/PrjInterface/clsViewInfoEN';
import { clsFuncModule_AgcEN } from '@/ts/L0Entity/PrjManage/clsFuncModule_AgcEN';
import { clsFuncModule_AgcENEx } from '@/ts/L0Entity/PrjManage/clsFuncModule_AgcENEx';
import { clsProjectsEN } from '@/ts/L0Entity/PrjManage/clsProjectsEN';
import { clsvFuncModuleTabNumEN } from '@/ts/L0Entity/PrjManage/clsvFuncModuleTabNumEN';
import { clsvFuncModuleViewNumEN } from '@/ts/L0Entity/PrjManage/clsvFuncModuleViewNumEN';
import { clsUseStateEN } from '@/ts/L0Entity/SysPara/clsUseStateEN';

import {
  FuncModule_Agc_GetObjLstByPagerAsync,
  FuncModule_Agc_GetObjLstCache,
  FuncModule_Agc_SortFunByKey,
} from '@/ts/L3ForWApi/PrjManage/clsFuncModule_AgcWApi';
import { Projects_func } from '@/ts/L3ForWApi/PrjManage/clsProjectsWApi';
import { vFuncModuleTabNum_func } from '@/ts/L3ForWApi/PrjManage/clsvFuncModuleTabNumWApi';
import { vFuncModuleViewNum_func } from '@/ts/L3ForWApi/PrjManage/clsvFuncModuleViewNumWApi';
import { UseState_func } from '@/ts/L3ForWApi/SysPara/clsUseStateWApi';
import {
  BindDdl_ObjLst,
  BindDdl_ObjLstInDivObj,
  GetSortExpressInfo,
  ObjectAssign,
} from '@/ts/PubFun/clsCommFunc4Web';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { vPrjTab_Sim_GetObjLstCache } from '@/ts/L3ForWApi/Table_Field/clsvPrjTab_SimWApi';
import { clsvPrjTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvPrjTab_SimEN';
import { clsViewInfoCmPrjIdRelaEN } from '@/ts/L0Entity/PrjInterface/clsViewInfoCmPrjIdRelaEN';
import { ViewInfo_GetObjLstAsync } from '@/ts/L3ForWApi/PrjInterface/clsViewInfoWApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';

export const funcModule_AgcEx_Controller = 'FuncModule_AgcExApi';
export const funcModule_AgcEx_ConstructorName = 'funcModule_AgcEx';

/// <summary>
/// 绑定基于Web的下拉框
/// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunction)
/// </summary>
/// <param name = "objDDL">需要绑定当前表的下拉框</param>
/// <param name = "strPrjId">工程ID</param>
export async function FuncModule_AgcEx_BindDdl_FuncModuleAgcIdCacheEx(
  strDdlName: string,
  strCmPrjId: string,
  strPrjId: string,
) {
  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format('参数:[strPrjId]不能为空！(In BindDdl_FuncModuleAgcIdCacheEx)');
    console.error(strMsg);
    throw strMsg;
  }

  if (IsNullOrEmpty(strCmPrjId) == true) {
    const strMsg = Format('参数:[strCmPrjId]不能为空！(In BindDdl_FuncModuleAgcIdCacheEx)');
    console.error(strMsg);
    throw strMsg;
  }

  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = `下拉框：${strDdlName} 不存在！(In BindDdl_FuncModuleAgcIdCache)`;
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  let arrObjLst_Sel: Array<clsFuncModule_AgcEN> = await FuncModule_Agc_GetObjLstCache(strPrjId);
  const strWhere = Format(
    " {0} in (select {0} from {1} where {2}='{3}')",
    clsViewInfoCmPrjIdRelaEN.con_ViewId,
    clsViewInfoCmPrjIdRelaEN._CurrTabName,
    clsViewInfoCmPrjIdRelaEN.con_CmPrjId,
    clsPrivateSessionStorage.cmPrjId,
  );
  const arrViewInfoObjLst: Array<clsViewInfoEN> = await ViewInfo_GetObjLstAsync(strWhere);

  const arrFuncModuleId = arrViewInfoObjLst.map((x) => x.funcModuleAgcId);
  arrObjLst_Sel = arrObjLst_Sel.filter((x) => arrFuncModuleId.indexOf(x.funcModuleAgcId) > -1);
  BindDdl_ObjLst(
    strDdlName,
    arrObjLst_Sel,
    clsFuncModule_AgcEN.con_FuncModuleAgcId,
    clsFuncModule_AgcEN.con_FuncModuleName,
    '功能模块_Agc',
  );
}

/// <summary>
/// 绑定基于Web的下拉框
/// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunction)
/// </summary>
/// <param name = "objDDL">需要绑定当前表的下拉框</param>
/// <param name = "strPrjId">工程ID</param>
export async function FuncModule_AgcEx_BindDdl_FuncModuleAgcIdForViewInfoInDivCacheEx(
  strDivName: HTMLDivElement,
  strDdlName: string,
  strCmPrjId: string,
  strPrjId: string,
) {
  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format('参数:[strPrjId]不能为空！(In BindDdl_FuncModuleAgcIdCacheEx)');
    console.error(strMsg);
    throw strMsg;
  }

  if (IsNullOrEmpty(strCmPrjId) == true) {
    const strMsg = Format('参数:[strCmPrjId]不能为空！(In BindDdl_FuncModuleAgcIdCacheEx)');
    console.error(strMsg);
    throw strMsg;
  }

  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = `下拉框：${strDdlName} 不存在！(In BindDdl_FuncModuleAgcIdCache)`;
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  let arrObjLst_Sel: Array<clsFuncModule_AgcEN> = await FuncModule_Agc_GetObjLstCache(strPrjId);

  const strWhere = Format(
    " {0} in (select {0} from {1} where {2}='{3}')",
    clsViewInfoCmPrjIdRelaEN.con_ViewId,
    clsViewInfoCmPrjIdRelaEN._CurrTabName,
    clsViewInfoCmPrjIdRelaEN.con_CmPrjId,
    clsPrivateSessionStorage.cmPrjId,
  );
  const arrViewInfoObjLst: Array<clsViewInfoEN> = await ViewInfo_GetObjLstAsync(strWhere);
  const arrFuncModuleId = arrViewInfoObjLst.map((x) => x.funcModuleAgcId);
  arrObjLst_Sel = arrObjLst_Sel.filter((x) => arrFuncModuleId.indexOf(x.funcModuleAgcId) > -1);
  BindDdl_ObjLstInDivObj(
    strDivName,
    strDdlName,
    arrObjLst_Sel,
    clsFuncModule_AgcEN.con_FuncModuleAgcId,
    clsFuncModule_AgcEN.con_FuncModuleName,
    '功能模块_Agc',
  );
}

export async function FuncModule_AgcEx_BindDdl_FuncModuleAgcIdForPrjTabInDivCacheEx(
  strDivName: HTMLDivElement,
  strDdlName: string,
  strCmPrjId: string,
  strPrjId: string,
) {
  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format('参数:[strPrjId]不能为空！(In BindDdl_FuncModuleAgcIdCacheEx)');
    console.error(strMsg);
    throw strMsg;
  }

  if (IsNullOrEmpty(strCmPrjId) == true) {
    const strMsg = Format('参数:[strCmPrjId]不能为空！(In BindDdl_FuncModuleAgcIdCacheEx)');
    console.error(strMsg);
    throw strMsg;
  }

  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = `下拉框：${strDdlName} 不存在！(In BindDdl_FuncModuleAgcIdCache)`;
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  let arrObjLst_Sel: Array<clsFuncModule_AgcEN> = await FuncModule_Agc_GetObjLstCache(strPrjId);
  const arrPrjTabObjLst: Array<clsvPrjTab_SimEN> = await vPrjTab_Sim_GetObjLstCache(strPrjId);
  const arrFuncModuleId = arrPrjTabObjLst.map((x) => x.funcModuleAgcId);
  arrObjLst_Sel = arrObjLst_Sel.filter((x) => arrFuncModuleId.indexOf(x.funcModuleAgcId) > -1);
  BindDdl_ObjLstInDivObj(
    strDivName,
    strDdlName,
    arrObjLst_Sel,
    clsFuncModule_AgcEN.con_FuncModuleAgcId,
    clsFuncModule_AgcEN.con_FuncModuleName,
    '功能模块_Agc',
  );
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_CopyToEx)
 * @param objFuncModule_AgcENS:源对象
 * @returns 目标对象=>clsFuncModule_AgcEN:objFuncModule_AgcENT
 **/
export function FuncModule_AgcEx_CopyToEx(
  objFuncModule_AgcENS: clsFuncModule_AgcEN,
): clsFuncModule_AgcENEx {
  const strThisFuncName = FuncModule_AgcEx_CopyToEx.name;
  const objFuncModule_AgcENT = new clsFuncModule_AgcENEx();
  try {
    ObjectAssign(objFuncModule_AgcENT, objFuncModule_AgcENS);
    return objFuncModule_AgcENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      funcModule_AgcEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objFuncModule_AgcENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function FuncModule_AgcEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsFuncModule_AgcENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrFuncModule_AgcObjLst = await FuncModule_Agc_GetObjLstByPagerAsync(objPagerPara);
  const arrFuncModule_AgcExObjLst = arrFuncModule_AgcObjLst.map(FuncModule_AgcEx_CopyToEx);

  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsFuncModule_AgcEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrFuncModule_AgcExObjLst) {
      await FuncModule_AgcEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }

  if (arrFuncModule_AgcExObjLst.length == 0) return arrFuncModule_AgcExObjLst;
  let arrFuncModule_Agc_Sel: Array<clsFuncModule_AgcENEx> = arrFuncModule_AgcExObjLst;
  try {
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];

      arrFuncModule_Agc_Sel = arrFuncModule_Agc_Sel.sort(
        FuncModule_AgcEx_SortFunByKey(strSortFld, strSortType),
      );
      //console.error("strSortType(in Ex):", strSortType);
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrFuncModule_Agc_Sel = arrFuncModule_Agc_Sel.sort(objPagerPara.sortFun);
    }

    return arrFuncModule_Agc_Sel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      funcModule_AgcEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsFuncModule_AgcENEx>();
}
/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:潘以锋
 * 日期:00-00-00
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function FuncModule_AgcEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  // const strThisFuncName = 'SortFunByKey';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsFuncModule_AgcENEx.con_UseStateName:
        return (a: clsFuncModule_AgcENEx, b: clsFuncModule_AgcENEx) => {
          return a.useStateName.localeCompare(b.useStateName);
        };
      case clsFuncModule_AgcENEx.con_ViewNum:
        return (a: clsFuncModule_AgcENEx, b: clsFuncModule_AgcENEx) => {
          return a.viewNum - b.viewNum;
        };
      case clsFuncModule_AgcENEx.con_TabNum:
        return (a: clsFuncModule_AgcENEx, b: clsFuncModule_AgcENEx) => {
          return a.tabNum - b.tabNum;
        };
      default:
        return FuncModule_Agc_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsFuncModule_AgcENEx.con_UseStateName:
        return (a: clsFuncModule_AgcENEx, b: clsFuncModule_AgcENEx) => {
          return b.useStateName.localeCompare(a.useStateName);
        };
      case clsFuncModule_AgcENEx.con_ViewNum:
        return (a: clsFuncModule_AgcENEx, b: clsFuncModule_AgcENEx) => {
          return b.viewNum - a.viewNum;
        };
      case clsFuncModule_AgcENEx.con_TabNum:
        return (a: clsFuncModule_AgcENEx, b: clsFuncModule_AgcENEx) => {
          return b.tabNum - a.tabNum;
        };
      default:
        return FuncModule_Agc_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objFuncModule_AgcS:源对象
 **/
export async function FuncModule_AgcEx_FuncMap_UseStateName(
  objFuncModule_Agc: clsFuncModule_AgcENEx,
) {
  const strThisFuncName = FuncModule_AgcEx_FuncMap_UseStateName.name;
  try {
    if (IsNullOrEmpty(objFuncModule_Agc.useStateName) == true) {
      const UseState_UseStateId = objFuncModule_Agc.useStateId;
      const UseState_UseStateName = await UseState_func(
        clsUseStateEN.con_UseStateId,
        clsUseStateEN.con_UseStateName,
        UseState_UseStateId,
      );
      objFuncModule_Agc.useStateName = UseState_UseStateName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000134)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      funcModule_AgcEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objFuncModule_AgcS:源对象
 **/
export async function FuncModule_AgcEx_FuncMap_ViewNum(objFuncModule_Agc: clsFuncModule_AgcENEx) {
  const strThisFuncName = FuncModule_AgcEx_FuncMap_ViewNum.name;
  try {
    if (objFuncModule_Agc.viewNum == 0) {
      const vFuncModuleViewNum_FuncModuleAgcId = objFuncModule_Agc.funcModuleAgcId;
      const vFuncModuleViewNum_ViewNum = await vFuncModuleViewNum_func(
        clsvFuncModuleViewNumEN.con_FuncModuleAgcId,
        clsvFuncModuleViewNumEN.con_ViewNum,
        vFuncModuleViewNum_FuncModuleAgcId,
        objFuncModule_Agc.prjId,
      );
      objFuncModule_Agc.viewNum = vFuncModuleViewNum_ViewNum;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000151)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      funcModule_AgcEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objFuncModule_AgcS:源对象
 **/
export async function FuncModule_AgcEx_FuncMap_TabNum(objFuncModule_Agc: clsFuncModule_AgcENEx) {
  const strThisFuncName = FuncModule_AgcEx_FuncMap_TabNum.name;
  try {
    if (objFuncModule_Agc.tabNum == 0) {
      const vFuncModuleTabNum_FuncModuleAgcId = objFuncModule_Agc.funcModuleAgcId;
      const vFuncModuleTabNum_TabNum = await vFuncModuleTabNum_func(
        clsvFuncModuleTabNumEN.con_FuncModuleAgcId,
        clsvFuncModuleTabNumEN.con_TabNum,
        vFuncModuleTabNum_FuncModuleAgcId,
        objFuncModule_Agc.prjId,
      );
      objFuncModule_Agc.tabNum = vFuncModuleTabNum_TabNum;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000093)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      funcModule_AgcEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objFuncModule_AgcS:源对象
 **/
export async function FuncModule_AgcEx_FuncMap_PrjName(objFuncModule_Agc: clsFuncModule_AgcENEx) {
  const strThisFuncName = FuncModule_AgcEx_FuncMap_PrjName.name;
  try {
    if (IsNullOrEmpty(objFuncModule_Agc.prjName) == true) {
      const Projects_PrjId = objFuncModule_Agc.prjId;
      const Projects_PrjName = await Projects_func(
        clsProjectsEN.con_PrjId,
        clsProjectsEN.con_PrjName,
        Projects_PrjId,
      );
      objFuncModule_Agc.prjName = Projects_PrjName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000086)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      funcModule_AgcEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:潘以锋
 * 日期:00-00-00
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function FuncModule_AgcEx_FuncMapByFldName(
  strFldName: string,
  objFuncModule_AgcEx: clsFuncModule_AgcENEx,
) {
  const strThisFuncName = FuncModule_AgcEx_FuncMapByFldName.name;
  let strMsg = '';
  //如果是本表中字段，不需要映射
  const arrFldName = clsFuncModule_AgcEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsFuncModule_AgcENEx.con_UseStateName:
      return FuncModule_AgcEx_FuncMap_UseStateName(objFuncModule_AgcEx);
    case clsFuncModule_AgcENEx.con_ViewNum:
      return FuncModule_AgcEx_FuncMap_ViewNum(objFuncModule_AgcEx);
    case clsFuncModule_AgcENEx.con_TabNum:
      return FuncModule_AgcEx_FuncMap_TabNum(objFuncModule_AgcEx);
    case clsFuncModule_AgcENEx.con_PrjName:
      return FuncModule_AgcEx_FuncMap_PrjName(objFuncModule_AgcEx);
    default:
      strMsg = Format(
        '扩展字段:[{0}]在字段值函数映射中不存在！(in {1})',
        strFldName,
        strThisFuncName,
      );
      console.error(strMsg);
  }
}
