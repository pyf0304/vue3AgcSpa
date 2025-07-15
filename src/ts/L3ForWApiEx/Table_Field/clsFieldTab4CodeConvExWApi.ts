/**
 * 字段4代码转换(FieldTab4CodeConv)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2022年04月08日.
 * 注意:该类必须与调用界面处于同一个包，否则调用不成功!
 **/
//import $ from "jquery";
import { vPrjTab_SimEx_func } from './clsvPrjTab_SimExWApi';
import { vFieldTab_SimEx_func } from './clsvFieldTab_SimExWApi';
import { ObjectAssign, GetSortExpressInfo } from '@/ts/PubFun/clsCommFunc4Web';
import { clsFieldTab4CodeConvENEx } from '@/ts/L0Entity/Table_Field/clsFieldTab4CodeConvENEx';
import {
  FieldTab4CodeConv_AddNewObjSave,
  FieldTab4CodeConv_GetObjByFldIdCache,
  FieldTab4CodeConv_GetObjLstByPagerAsync,
  FieldTab4CodeConv_ReFreshCache,
  FieldTab4CodeConv_SortFunByKey,
} from '@/ts/L3ForWApi/Table_Field/clsFieldTab4CodeConvWApi';

import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsvFieldTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvFieldTab_SimEN';

import { clsFieldTab4CodeConvEN } from '@/ts/L0Entity/Table_Field/clsFieldTab4CodeConvEN';

import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { clsvPrjTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvPrjTab_SimEN';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { useUserStore } from '@/store/modulesShare/user';
import {
  PrjTabFldEx_GetNameObjByTabIdCache,
  PrjTabFldEx_GetPrimaryKeyObjLstByTabIdCache,
  PrjTabFldEx_IsHasNameObjByTabIdCache,
} from '@/ts/L3ForWApiEx/Table_Field/clsPrjTabFldExWApi';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';

export const fieldTab4CodeConvEx_Controller = 'FieldTab4CodeConvExApi';
export const fieldTab4CodeConvEx_ConstructorName = 'fieldTab4CodeConvEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function FieldTab4CodeConvEx_GetWebApiUrl(strController: string, strAction: string): string {
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
 * @param objFieldTab4CodeConvENS:源对象
 * @returns 目标对象=>clsFieldTab4CodeConvEN:objFieldTab4CodeConvENT
 **/
export function FieldTab4CodeConvEx_CopyToEx(
  objFieldTab4CodeConvENS: clsFieldTab4CodeConvEN,
): clsFieldTab4CodeConvENEx {
  const strThisFuncName = FieldTab4CodeConvEx_CopyToEx.name;
  const objFieldTab4CodeConvENT = new clsFieldTab4CodeConvENEx();
  try {
    ObjectAssign(objFieldTab4CodeConvENT, objFieldTab4CodeConvENS);
    return objFieldTab4CodeConvENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      fieldTab4CodeConvEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objFieldTab4CodeConvENT;
  }
}
//该表在前台TypeScript中，不需要使用Cache;

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function FieldTab4CodeConvEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsFieldTab4CodeConvENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrFieldTab4CodeConvObjLst = await FieldTab4CodeConv_GetObjLstByPagerAsync(objPagerPara);
  const arrFieldTab4CodeConvExObjLst = arrFieldTab4CodeConvObjLst.map(FieldTab4CodeConvEx_CopyToEx);

  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsFieldTab4CodeConvEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrFieldTab4CodeConvExObjLst) {
      await FieldTab4CodeConvEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrFieldTab4CodeConvExObjLst.length == 0) return arrFieldTab4CodeConvExObjLst;
  let arrFieldTab4CodeConv_Sel: Array<clsFieldTab4CodeConvENEx> = arrFieldTab4CodeConvExObjLst;
  try {
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrFieldTab4CodeConv_Sel = arrFieldTab4CodeConv_Sel.sort(
        FieldTab4CodeConvEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrFieldTab4CodeConv_Sel = arrFieldTab4CodeConv_Sel.sort(objPagerPara.sortFun);
    }

    return arrFieldTab4CodeConv_Sel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      fieldTab4CodeConvEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsFieldTab4CodeConvENEx>();
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
export function FieldTab4CodeConvEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  // const strThisFuncName = 'SortFunByKey';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsFieldTab4CodeConvENEx.con_FldName:
        return (a: clsFieldTab4CodeConvENEx, b: clsFieldTab4CodeConvENEx) => {
          return a.fldName.localeCompare(b.fldName);
        };
      case clsFieldTab4CodeConvENEx.con_CodeTabName:
        return (a: clsFieldTab4CodeConvENEx, b: clsFieldTab4CodeConvENEx) => {
          return a.codeTabName.localeCompare(b.codeTabName);
        };
      case clsFieldTab4CodeConvENEx.con_CodeFldName:
        return (a: clsFieldTab4CodeConvENEx, b: clsFieldTab4CodeConvENEx) => {
          return a.codeFldName.localeCompare(b.codeFldName);
        };
      case clsFieldTab4CodeConvENEx.con_CodeNameFldName:
        return (a: clsFieldTab4CodeConvENEx, b: clsFieldTab4CodeConvENEx) => {
          return a.codeNameFldName.localeCompare(b.codeNameFldName);
        };
      default:
        return FieldTab4CodeConv_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsFieldTab4CodeConvENEx.con_FldName:
        return (a: clsFieldTab4CodeConvENEx, b: clsFieldTab4CodeConvENEx) => {
          return b.fldName.localeCompare(a.fldName);
        };
      case clsFieldTab4CodeConvENEx.con_CodeTabName:
        return (a: clsFieldTab4CodeConvENEx, b: clsFieldTab4CodeConvENEx) => {
          return b.codeTabName.localeCompare(a.codeTabName);
        };
      case clsFieldTab4CodeConvENEx.con_CodeFldName:
        return (a: clsFieldTab4CodeConvENEx, b: clsFieldTab4CodeConvENEx) => {
          return b.codeFldName.localeCompare(a.codeFldName);
        };
      case clsFieldTab4CodeConvENEx.con_CodeNameFldName:
        return (a: clsFieldTab4CodeConvENEx, b: clsFieldTab4CodeConvENEx) => {
          return b.codeNameFldName.localeCompare(a.codeNameFldName);
        };
      default:
        return FieldTab4CodeConv_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2022-04-08
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function FieldTab4CodeConvEx_FuncMapByFldName(
  strFldName: string,
  objFieldTab4CodeConvEx: clsFieldTab4CodeConvENEx,
) {
  const strThisFuncName = FieldTab4CodeConvEx_FuncMapByFldName.name;
  let strMsg = '';
  //如果是本表中字段，不需要映射
  const arrFldName = clsFieldTab4CodeConvEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsFieldTab4CodeConvENEx.con_FldName:
      return FieldTab4CodeConvEx_FuncMap_FldName(objFieldTab4CodeConvEx);
    case clsFieldTab4CodeConvENEx.con_CodeTabName:
      return FieldTab4CodeConvEx_FuncMap_CodeTabName(objFieldTab4CodeConvEx);
    case clsFieldTab4CodeConvENEx.con_CodeFldName:
      return FieldTab4CodeConvEx_FuncMap_CodeFldName(objFieldTab4CodeConvEx);
    case clsFieldTab4CodeConvENEx.con_CodeNameFldName:
      return FieldTab4CodeConvEx_FuncMap_CodeNameFldName(objFieldTab4CodeConvEx);
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
 * @param objFieldTab4CodeConvS:源对象
 **/
export async function FieldTab4CodeConvEx_FuncMap_FldName(
  objFieldTab4CodeConv: clsFieldTab4CodeConvENEx,
) {
  const strThisFuncName = FieldTab4CodeConvEx_FuncMap_FldName.name;
  try {
    if (IsNullOrEmpty(objFieldTab4CodeConv.fldName) == true) {
      const vFieldTab_Sim_FldId = objFieldTab4CodeConv.fldId;
      const vFieldTab_Sim_FldName = await vFieldTab_SimEx_func(
        clsvFieldTab_SimEN.con_FldId,
        clsvFieldTab_SimEN.con_FldName,
        vFieldTab_Sim_FldId,
        clsPrivateSessionStorage.currSelPrjId,
      );
      objFieldTab4CodeConv.fldName = vFieldTab_Sim_FldName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000087)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      fieldTab4CodeConvEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objFieldTab4CodeConvS:源对象
 **/
export async function FieldTab4CodeConvEx_FuncMap_CodeTabName(
  objFieldTab4CodeConv: clsFieldTab4CodeConvENEx,
) {
  const strThisFuncName = FieldTab4CodeConvEx_FuncMap_CodeTabName.name;
  try {
    if (IsNullOrEmpty(objFieldTab4CodeConv.codeTabName) == true) {
      if (objFieldTab4CodeConv.codeTabId == '0') return;
      const vPrjTab_Sim_TabId = objFieldTab4CodeConv.codeTabId;
      const vPrjTab_Sim_TabName = await vPrjTab_SimEx_func(
        clsvPrjTab_SimEN.con_TabId,
        clsvPrjTab_SimEN.con_TabName,
        vPrjTab_Sim_TabId,
      );
      objFieldTab4CodeConv.codeTabName = vPrjTab_Sim_TabName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000156)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      fieldTab4CodeConvEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objFieldTab4CodeConvS:源对象
 **/
export async function FieldTab4CodeConvEx_FuncMap_CodeFldName(
  objFieldTab4CodeConv: clsFieldTab4CodeConvENEx,
) {
  const strThisFuncName = FieldTab4CodeConvEx_FuncMap_CodeFldName.name;
  try {
    if (IsNullOrEmpty(objFieldTab4CodeConv.codeFldName) == true) {
      if (objFieldTab4CodeConv.codeTabCodeId == '0') return;
      const vFieldTab_Sim_FldId = objFieldTab4CodeConv.codeTabCodeId;
      const vFieldTab_Sim_FldName = await vFieldTab_SimEx_func(
        clsvFieldTab_SimEN.con_FldId,
        clsvFieldTab_SimEN.con_FldName,
        vFieldTab_Sim_FldId,
        clsPrivateSessionStorage.currSelPrjId,
      );
      objFieldTab4CodeConv.codeFldName = vFieldTab_Sim_FldName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000157)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      fieldTab4CodeConvEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objFieldTab4CodeConvS:源对象
 **/
export async function FieldTab4CodeConvEx_FuncMap_CodeNameFldName(
  objFieldTab4CodeConv: clsFieldTab4CodeConvENEx,
) {
  const strThisFuncName = FieldTab4CodeConvEx_FuncMap_CodeNameFldName.name;
  try {
    if (IsNullOrEmpty(objFieldTab4CodeConv.codeNameFldName) == true) {
      if (objFieldTab4CodeConv.codeTabNameId == '0') return;
      const vFieldTab_Sim_FldId = objFieldTab4CodeConv.codeTabNameId;
      const vFieldTab_Sim_FldName = await vFieldTab_SimEx_func(
        clsvFieldTab_SimEN.con_FldId,
        clsvFieldTab_SimEN.con_FldName,
        vFieldTab_Sim_FldId,
        clsPrivateSessionStorage.currSelPrjId,
      );
      objFieldTab4CodeConv.codeNameFldName = vFieldTab_Sim_FldName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000158)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      fieldTab4CodeConvEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

export async function FieldTab4CodeConvEx_GetCodeTabIdLst(
  objPagerPara: stuPagerPara,
): Promise<Array<clsFieldTab4CodeConvENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrFieldTab4CodeConvObjLst = await FieldTab4CodeConv_GetObjLstByPagerAsync(objPagerPara);
  const arrFieldTab4CodeConvExObjLst = arrFieldTab4CodeConvObjLst.map(FieldTab4CodeConvEx_CopyToEx);

  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsFieldTab4CodeConvEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrFieldTab4CodeConvExObjLst) {
      await FieldTab4CodeConvEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrFieldTab4CodeConvExObjLst.length == 0) return arrFieldTab4CodeConvExObjLst;
  let arrFieldTab4CodeConv_Sel: Array<clsFieldTab4CodeConvENEx> = arrFieldTab4CodeConvExObjLst;
  try {
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrFieldTab4CodeConv_Sel = arrFieldTab4CodeConv_Sel.sort(
        FieldTab4CodeConvEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrFieldTab4CodeConv_Sel = arrFieldTab4CodeConv_Sel.sort(objPagerPara.sortFun);
    }

    return arrFieldTab4CodeConv_Sel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      fieldTab4CodeConvEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsFieldTab4CodeConvENEx>();
}

/** 函1数功能:把界面上的属性数据传到类对象中
 * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
 * @param pobjFieldTab4CodeConvEN">数据传输的目的类对象</param>
 **/
export async function FieldTab4CodeConvEx_AutoAddFieldTab4CodeConvByNameField(
  strTabId: string,
): Promise<boolean> {
  const strThisFuncName = 'AutoAddFieldTab4CodeConvByNameField';
  const userStore = useUserStore();
  const pobjFieldTab4CodeConvEN = new clsFieldTab4CodeConvEN();

  const IsHasNameField = await PrjTabFldEx_IsHasNameObjByTabIdCache(strTabId);
  if (IsHasNameField == false) return false;
  const objPrjTabFld_NameFld = await PrjTabFldEx_GetNameObjByTabIdCache(strTabId);
  if (objPrjTabFld_NameFld == null) return false;
  const arrPrjTabFld_KeyFld = await PrjTabFldEx_GetPrimaryKeyObjLstByTabIdCache(strTabId);
  if (arrPrjTabFld_KeyFld.length == 0) return false;
  if (arrPrjTabFld_KeyFld.length > 1) return false;
  const objPrjTabFld_KeyFld = arrPrjTabFld_KeyFld[0];
  try {
    const objFieldTab4Conv = await FieldTab4CodeConv_GetObjByFldIdCache(
      objPrjTabFld_KeyFld.fldId,
      clsPrivateSessionStorage.currSelPrjId,
      false,
    );
    if (objFieldTab4Conv != null) {
      return false;
    }
  } catch (e) {
    console.error('出现异常！pyf');
    console.error(e);

    return false;
  }

  pobjFieldTab4CodeConvEN.SetFldId(objPrjTabFld_KeyFld.fldId); // 字段
  pobjFieldTab4CodeConvEN.SetPrjId(clsPrivateSessionStorage.currSelPrjId); // 工程ID
  pobjFieldTab4CodeConvEN.SetCodeTabId(strTabId); // 代码表
  pobjFieldTab4CodeConvEN.SetCodeTabCodeId(objPrjTabFld_KeyFld.fldId); // 代码字段
  pobjFieldTab4CodeConvEN.SetCodeTabNameId(objPrjTabFld_NameFld.fldId); // 名称字段
  pobjFieldTab4CodeConvEN.SetMemo('根据主键-名称字段添加'); // 说明
  pobjFieldTab4CodeConvEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期
  pobjFieldTab4CodeConvEN.SetUpdUser(userStore.getUserId); // 修改者

  try {
    //检查唯一性条件
    const AddRecordResult = await FieldTab4CodeConv_AddNewObjSave(pobjFieldTab4CodeConvEN);
    if (AddRecordResult.success == true) {
      FieldTab4CodeConv_ReFreshCache(clsPrivateSessionStorage.currSelPrjId);
    }
    return AddRecordResult.success;
  } catch (e) {
    const strMsg = Format(
      '根据主键-名称字段添加转换字段不成功,{0}.(in {1}.{2})',
      e,
      fieldTab4CodeConvEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return false;
  }
}
