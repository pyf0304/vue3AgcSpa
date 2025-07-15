import axios from 'axios';
// import $ from 'jquery';
import { vPrjTab_SimEx_func } from '../Table_Field/clsvPrjTab_SimExWApi';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { clsCMProjectEN } from '@/ts/L0Entity/CodeMan/clsCMProjectEN';
import { clsCmProjectPrjTabEN } from '@/ts/L0Entity/CodeMan/clsCmProjectPrjTabEN';
import { clsCmProjectPrjTabENEx } from '@/ts/L0Entity/CodeMan/clsCmProjectPrjTabENEx';
import { clsvPrjTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvPrjTab_SimEN';
import {
  CmProjectPrjTab_GetObjLstAsync,
  CmProjectPrjTab_GetObjLstByPagerAsync,
  CmProjectPrjTab_SortFunByKey,
} from '@/ts/L3ForWApi/CodeMan/clsCmProjectPrjTabWApi';
import { CMProject_func } from '@/ts/L3ForWApi/CodeMan/clsCMProjectWApi';
import { GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const cMProjectPrjTabEx_Controller = 'CMProjectPrjTabExApi';
export const cmProjectPrjTabEx_ConstructorName = 'cMProjectPrjTabEx';

/// <summary>
/// 根据界面Id获取相关区域对象列表
/// </summary>
/// <param name="strCmPrjId"></param>
/// <returns>区域对象列表</returns>
export async function CmProjectPrjTabEx_GetTabIdLstByCmPrjId(
  strCmPrjId: string,
): Promise<Array<string>> {
  const strCondition: string = Format("{0}='{1}'", clsCmProjectPrjTabEN.con_CmPrjId, strCmPrjId);
  const arrObjLst: Array<clsCmProjectPrjTabEN> = await CmProjectPrjTab_GetObjLstAsync(strCondition);
  if (arrObjLst.length == 0) return new Array<string>();
  return arrObjLst.map((x) => x.tabId);
}

// /// <summary>
// /// 根据CM工程Id获取相关表Id列表
// /// </summary>
// /// <param name="strCmPrjId"></param>
// /// <returns>相关表Id列表</returns>
// export async function CmProjectPrjTabEx_GetTabIdLstByCmPrjIdCache(
//   strCmPrjId: string,
// ): Promise<Array<string>> {
//   const arrObjLst: Array<clsCmProjectPrjTabEN> = await CmProjectPrjTab_GetObjLstCache(strCmPrjId);
//   return arrObjLst.map((x) => x.tabId);
// }

/**
 * 建立Cm工程与表的关系
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strCmPrjId: CM工程Id
 * @param strTabId: 表Id
 * @param strOpUserId: 操作用户Id
 * @returns 获取的相应对象列表
 */
export async function CmProjectPrjTabEx_CreateRela(
  strCmPrjId: string,
  strTabId: string,
  strOpUserId: string,
): Promise<boolean> {
  const strThisFuncName = CmProjectPrjTabEx_CreateRela.name;
  const strAction = 'CreateRela';
  const strUrl = GetWebApiUrl(cMProjectPrjTabEx_Controller, strAction);
  // const mapParam: Dictionary = new Dictionary();
  // mapParam.add('strCmPrjId', strCmPrjId);
  // mapParam.add('strTabId', strTabId);
  // mapParam.add('strOpUserId', strOpUserId);
  // const strData = mapParam.getParamText(); // "例如: strIdentityID =01";

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strCmPrjId,
      strTabId,
      strOpUserId,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      return data.returnBool;
    } else {
      console.error(data.errorMsg);
      throw data.errorMsg;
    }
  } catch (error: any) {
    console.error(error);
    if (error.statusText == undefined) {
      throw error;
    }
    if (error.statusText == 'error') {
      const strInfo = Format(
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        cmProjectPrjTabEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        cmProjectPrjTabEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

/**
 * 删除Cm工程与表的关系
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strCmPrjId: CM工程Id
 * @param strTabId: 表Id
 * @returns 获取的相应对象列表
 */
export async function CmProjectPrjTabEx_DelRela(
  strCmPrjId: string,
  strTabId: string,
): Promise<number> {
  const strThisFuncName = CmProjectPrjTabEx_DelRela.name;

  const strAction = 'DelRela';
  const strUrl = GetWebApiUrl(cMProjectPrjTabEx_Controller, strAction);
  // const mapParam: Dictionary = new Dictionary();
  // mapParam.add('strCmPrjId', strCmPrjId);
  // mapParam.add('strTabId', strTabId);
  // const strData = mapParam.getParamText(); // "例如: strIdentityID =01";

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strCmPrjId,
      strTabId,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      return data.returnInt;
    } else {
      console.error(data.errorMsg);
      throw data.errorMsg;
    }
  } catch (error: any) {
    console.error(error);
    if (error.statusText == undefined) {
      throw error;
    }
    if (error.statusText == 'error') {
      const strInfo = Format(
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        cmProjectPrjTabEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        cmProjectPrjTabEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_CopyToEx)
 * @param objCMProjectPrjTabENS:源对象
 * @returns 目标对象=>clsCmProjectPrjTabEN:objCMProjectPrjTabENT
 **/
export function CmProjectPrjTabEx_CopyToEx(
  objCMProjectPrjTabENS: clsCmProjectPrjTabEN,
): clsCmProjectPrjTabENEx {
  const strThisFuncName = CmProjectPrjTabEx_CopyToEx.name;
  const objCMProjectPrjTabENT = new clsCmProjectPrjTabENEx();
  try {
    ObjectAssign(objCMProjectPrjTabENT, objCMProjectPrjTabENS);
    return objCMProjectPrjTabENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      cmProjectPrjTabEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objCMProjectPrjTabENT;
  }
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
export function CmProjectPrjTabEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  // const strThisFuncName = 'SortFunByKey';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsCmProjectPrjTabENEx.con_TabName:
        return (a: clsCmProjectPrjTabENEx, b: clsCmProjectPrjTabENEx) => {
          return a.tabName.localeCompare(b.tabName);
        };
      case clsCmProjectPrjTabENEx.con_CmPrjName:
        return (a: clsCmProjectPrjTabENEx, b: clsCmProjectPrjTabENEx) => {
          return a.cmPrjName.localeCompare(b.cmPrjName);
        };
      case clsCmProjectPrjTabENEx.con_PrjName:
        return (a: clsCmProjectPrjTabENEx, b: clsCmProjectPrjTabENEx) => {
          return a.prjName.localeCompare(b.prjName);
        };
      default:
        return CmProjectPrjTab_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsCmProjectPrjTabENEx.con_TabName:
        return (a: clsCmProjectPrjTabENEx, b: clsCmProjectPrjTabENEx) => {
          return b.tabName.localeCompare(a.tabName);
        };
      case clsCmProjectPrjTabENEx.con_CmPrjName:
        return (a: clsCmProjectPrjTabENEx, b: clsCmProjectPrjTabENEx) => {
          return b.cmPrjName.localeCompare(a.cmPrjName);
        };
      case clsCmProjectPrjTabENEx.con_PrjName:
        return (a: clsCmProjectPrjTabENEx, b: clsCmProjectPrjTabENEx) => {
          return b.prjName.localeCompare(a.prjName);
        };
      default:
        return CmProjectPrjTab_SortFunByKey(strKey, AscOrDesc);
    }
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
export function CmProjectPrjTabEx_FuncMapByFldName(
  strFldName: string,
  objCMProjectPrjTabEx: clsCmProjectPrjTabENEx,
) {
  const strThisFuncName = CmProjectPrjTabEx_FuncMapByFldName.name;
  let strMsg = '';
  //如果是本表中字段，不需要映射
  const arrFldName = clsCmProjectPrjTabEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsCmProjectPrjTabENEx.con_TabName:
      return CmProjectPrjTabEx_FuncMap_TabName(objCMProjectPrjTabEx);
    case clsCmProjectPrjTabENEx.con_CmPrjName:
      return CmProjectPrjTabEx_FuncMap_CmPrjName(objCMProjectPrjTabEx);
    case clsCmProjectPrjTabENEx.con_PrjName:
      return CmProjectPrjTabEx_FuncMap_PrjName(objCMProjectPrjTabEx);
    default:
      strMsg = Format(
        '扩展字段:[{0}]在字段值函数映射中不存在！(in {1})',
        strFldName,
        strThisFuncName,
      );
      console.error(strMsg);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objCMProjectPrjTabS:源对象
 **/
export async function CmProjectPrjTabEx_FuncMap_TabName(
  objCMProjectPrjTab: clsCmProjectPrjTabENEx,
) {
  const strThisFuncName = CmProjectPrjTabEx_FuncMap_TabName.name;
  try {
    if (IsNullOrEmpty(objCMProjectPrjTab.tabName) == true) {
      const vPrjTab_Sim_TabId = objCMProjectPrjTab.tabId;
      const vPrjTab_Sim_TabName = await vPrjTab_SimEx_func(
        clsvPrjTab_SimEN.con_TabId,
        clsvPrjTab_SimEN.con_TabName,
        vPrjTab_Sim_TabId,
      );
      objCMProjectPrjTab.tabName = vPrjTab_Sim_TabName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000094)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      cmProjectPrjTabEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objCMProjectPrjTabS:源对象
 **/
export async function CmProjectPrjTabEx_FuncMap_CmPrjName(
  objCMProjectPrjTab: clsCmProjectPrjTabENEx,
) {
  const strThisFuncName = CmProjectPrjTabEx_FuncMap_CmPrjName.name;
  try {
    if (IsNullOrEmpty(objCMProjectPrjTab.cmPrjName) == true) {
      const CMProject_CMPrjId = objCMProjectPrjTab.cmPrjId;
      const CMProject_CMPrjName = await CMProject_func(
        clsCMProjectEN.con_CmPrjId,
        clsCMProjectEN.con_CmPrjName,
        CMProject_CMPrjId,
      );
      objCMProjectPrjTab.cmPrjName = CMProject_CMPrjName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000113)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      cmProjectPrjTabEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objCMProjectPrjTabS:源对象
 **/
export async function CmProjectPrjTabEx_FuncMap_PrjName(
  objCMProjectPrjTab: clsCmProjectPrjTabENEx,
) {
  const strThisFuncName = CmProjectPrjTabEx_FuncMap_PrjName.name;
  console.log(objCMProjectPrjTab);
  try {
    //if (IsNullOrEmpty(objCMProjectPrjTab.prjName) == true) {
    //    const Projects_PrjId = objCMProjectPrjTab.prjId;
    //    const Projects_PrjName = await Projects_func(clsProjectsEN.con_PrjId, clsProjectsEN.con_PrjName, Projects_PrjId);
    //    objCMProjectPrjTab.prjName = Projects_PrjName;
    //}
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000086)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      cmProjectPrjTabEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function CmProjectPrjTabEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsCmProjectPrjTabENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrCmProjectPrjTabObjLst = await CmProjectPrjTab_GetObjLstByPagerAsync(objPagerPara);
  const arrCmProjectPrjTabExObjLst = arrCmProjectPrjTabObjLst.map(CmProjectPrjTabEx_CopyToEx);
  if (arrCmProjectPrjTabExObjLst.length == 0) return arrCmProjectPrjTabExObjLst;
  let arrCmProjectPrjTabSel: Array<clsCmProjectPrjTabENEx> = arrCmProjectPrjTabExObjLst;
  try {
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrCmProjectPrjTabSel = arrCmProjectPrjTabSel.sort(
        CmProjectPrjTabEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrCmProjectPrjTabSel = arrCmProjectPrjTabSel.sort(objPagerPara.sortFun);
    }
    return arrCmProjectPrjTabSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      cmProjectPrjTabEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsCmProjectPrjTabENEx>();
}
