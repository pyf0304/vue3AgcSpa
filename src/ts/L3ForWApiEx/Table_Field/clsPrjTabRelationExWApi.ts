/**
 * 工程表关系(PrjTabRelation)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2022年04月08日.
 * 注意:该类必须与调用界面处于同一个包，否则调用不成功!
 **/
//import $ from "jquery";
import { vPrjTab_SimEx_func } from './clsvPrjTab_SimExWApi';
import { clsPrjTabRelationEN } from '@/ts/L0Entity/Table_Field/clsPrjTabRelationEN';
import { clsPrjTabRelationENEx } from '@/ts/L0Entity/Table_Field/clsPrjTabRelationENEx';
import { clsPrjTabRelationTypeEN } from '@/ts/L0Entity/Table_Field/clsPrjTabRelationTypeEN';
import { clsvPrjTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvPrjTab_SimEN';
import { PrjTabRelationType_func } from '@/ts/L3ForWApi/Table_Field/clsPrjTabRelationTypeWApi';
import {
  PrjTabRelation_GetObjLstByPagerAsync,
  PrjTabRelation_SortFunByKey,
} from '@/ts/L3ForWApi/Table_Field/clsPrjTabRelationWApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { GetSortExpressInfo, ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
export const prjTabRelationEx_Controller = 'PrjTabRelationExApi';
export const prjTabRelationEx_ConstructorName = 'prjTabRelationEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function PrjTabRelationEx_GetWebApiUrl(strController: string, strAction: string): string {
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
 * @param objPrjTabRelationENS:源对象
 * @returns 目标对象=>clsPrjTabRelationEN:objPrjTabRelationENT
 **/
export function PrjTabRelationEx_CopyToEx(
  objPrjTabRelationENS: clsPrjTabRelationEN,
): clsPrjTabRelationENEx {
  const strThisFuncName = PrjTabRelationEx_CopyToEx.name;
  const objPrjTabRelationENT = new clsPrjTabRelationENEx();
  try {
    ObjectAssign(objPrjTabRelationENT, objPrjTabRelationENS);
    return objPrjTabRelationENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      prjTabRelationEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objPrjTabRelationENT;
  }
}
//该表在前台TypeScript中，不需要使用Cache;

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function PrjTabRelationEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsPrjTabRelationENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrPrjTabRelationObjLst = await PrjTabRelation_GetObjLstByPagerAsync(objPagerPara);
  const arrPrjTabRelationExObjLst = arrPrjTabRelationObjLst.map(PrjTabRelationEx_CopyToEx);

  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsPrjTabRelationEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrPrjTabRelationExObjLst) {
      objInFor.prjId = clsPrivateSessionStorage.currSelPrjId;
      await PrjTabRelationEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrPrjTabRelationExObjLst.length == 0) return arrPrjTabRelationExObjLst;
  let arrPrjTabRelation_Sel: Array<clsPrjTabRelationENEx> = arrPrjTabRelationExObjLst;
  try {
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrPrjTabRelation_Sel = arrPrjTabRelation_Sel.sort(
        PrjTabRelationEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrPrjTabRelation_Sel = arrPrjTabRelation_Sel.sort(objPagerPara.sortFun);
    }

    return arrPrjTabRelation_Sel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      prjTabRelationEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsPrjTabRelationENEx>();
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objPrjTabRelationS:源对象
 **/
export async function PrjTabRelationEx_FuncMap_TabName(objPrjTabRelation: clsPrjTabRelationENEx) {
  const strThisFuncName = PrjTabRelationEx_FuncMap_TabName.name;
  try {
    if (IsNullOrEmpty(objPrjTabRelation.tabName) == true) {
      if (IsNullOrEmpty(objPrjTabRelation.prjId)) {
        PrjTabRelationEx_FuncMap_PrjId(objPrjTabRelation);
      }
      const vPrjTab_Sim_TabId = objPrjTabRelation.tabId;
      const vPrjTab_Sim_TabName = await vPrjTab_SimEx_func(
        clsvPrjTab_SimEN.con_TabId,
        clsvPrjTab_SimEN.con_TabName,
        vPrjTab_Sim_TabId,
      );
      objPrjTabRelation.tabName = vPrjTab_Sim_TabName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000094)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      prjTabRelationEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objPrjTabRelationS:源对象
 **/
export async function PrjTabRelationEx_FuncMap_RelaTabName(
  objPrjTabRelation: clsPrjTabRelationENEx,
) {
  const strThisFuncName = PrjTabRelationEx_FuncMap_RelaTabName.name;
  try {
    if (IsNullOrEmpty(objPrjTabRelation.relaTabName) == true) {
      const vPrjTab_Sim_TabId = objPrjTabRelation.relationTabId;
      const vPrjTab_Sim_TabName = await vPrjTab_SimEx_func(
        clsvPrjTab_SimEN.con_TabId,
        clsvPrjTab_SimEN.con_TabName,
        vPrjTab_Sim_TabId,
      );
      objPrjTabRelation.relaTabName = vPrjTab_Sim_TabName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000154)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      prjTabRelationEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objPrjTabRelationS:源对象
 **/
export async function PrjTabRelationEx_FuncMap_PrjId(objPrjTabRelation: clsPrjTabRelationENEx) {
  const strThisFuncName = PrjTabRelationEx_FuncMap_PrjId.name;
  try {
    if (IsNullOrEmpty(objPrjTabRelation.prjId) == true) {
      const vPrjTab_Sim_TabId = objPrjTabRelation.tabId;
      const vPrjTab_Sim_PrjId = await vPrjTab_SimEx_func(
        clsvPrjTab_SimEN.con_TabId,
        clsvPrjTab_SimEN.con_PrjId,
        vPrjTab_Sim_TabId,
      );
      objPrjTabRelation.prjId = vPrjTab_Sim_PrjId;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000155)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      prjTabRelationEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2022-04-08
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function PrjTabRelationEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  // const strThisFuncName = 'SortFunByKey';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsPrjTabRelationENEx.con_TabName:
        return (a: clsPrjTabRelationENEx, b: clsPrjTabRelationENEx) => {
          return a.tabName.localeCompare(b.tabName);
        };
      case clsPrjTabRelationENEx.con_RelaTabName:
        return (a: clsPrjTabRelationENEx, b: clsPrjTabRelationENEx) => {
          return a.relaTabName.localeCompare(b.relaTabName);
        };
      case clsPrjTabRelationENEx.con_PrjId:
        return (a: clsPrjTabRelationENEx, b: clsPrjTabRelationENEx) => {
          return a.prjId.localeCompare(b.prjId);
        };
      default:
        return PrjTabRelation_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsPrjTabRelationENEx.con_TabName:
        return (a: clsPrjTabRelationENEx, b: clsPrjTabRelationENEx) => {
          return b.tabName.localeCompare(a.tabName);
        };
      case clsPrjTabRelationENEx.con_RelaTabName:
        return (a: clsPrjTabRelationENEx, b: clsPrjTabRelationENEx) => {
          return b.relaTabName.localeCompare(a.relaTabName);
        };
      case clsPrjTabRelationENEx.con_PrjId:
        return (a: clsPrjTabRelationENEx, b: clsPrjTabRelationENEx) => {
          return b.prjId.localeCompare(a.prjId);
        };
      default:
        return PrjTabRelation_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objPrjTabRelationS:源对象
 **/
export async function PrjTabRelationEx_FuncMap_TabRelationTypeName(
  objPrjTabRelation: clsPrjTabRelationENEx,
) {
  const strThisFuncName = PrjTabRelationEx_FuncMap_TabRelationTypeName.name;
  try {
    if (IsNullOrEmpty(objPrjTabRelation.tabRelationTypeName) == true) {
      const PrjTabRelationType_PrjTabRelaTypeId = objPrjTabRelation.prjTabRelaTypeId;
      const PrjTabRelationType_TabRelationTypeName = await PrjTabRelationType_func(
        clsPrjTabRelationTypeEN.con_PrjTabRelaTypeId,
        clsPrjTabRelationTypeEN.con_TabRelationTypeName,
        PrjTabRelationType_PrjTabRelaTypeId,
      );
      objPrjTabRelation.tabRelationTypeName = PrjTabRelationType_TabRelationTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000159)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      prjTabRelationEx_ConstructorName,
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
export function PrjTabRelationEx_FuncMapByFldName(
  strFldName: string,
  objPrjTabRelationEx: clsPrjTabRelationENEx,
) {
  const strThisFuncName = PrjTabRelationEx_FuncMapByFldName.name;
  let strMsg = '';
  //如果是本表中字段，不需要映射
  const arrFldName = clsPrjTabRelationEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsPrjTabRelationENEx.con_TabName:
      return PrjTabRelationEx_FuncMap_TabName(objPrjTabRelationEx);
    case clsPrjTabRelationENEx.con_RelaTabName:
      return PrjTabRelationEx_FuncMap_RelaTabName(objPrjTabRelationEx);
    case clsPrjTabRelationENEx.con_PrjId:
      return PrjTabRelationEx_FuncMap_PrjId(objPrjTabRelationEx);
    case clsPrjTabRelationENEx.con_TabRelationTypeName:
      return PrjTabRelationEx_FuncMap_TabRelationTypeName(objPrjTabRelationEx);
    default:
      strMsg = Format(
        '扩展字段:[{0}]在字段值函数映射中不存在！(in {1})',
        strFldName,
        strThisFuncName,
      );
      console.error(strMsg);
  }
}
