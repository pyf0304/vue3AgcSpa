/**
 * 约束字段(ConstraintFields)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2024年01月24日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import { ObjectAssign, GetSortExpressInfo } from '@/ts/PubFun/clsCommFunc4Web';
import {
  ConstraintFields_SortFunByKey,
  ConstraintFields_CheckPropertyNew,
  ConstraintFields_DelConstraintFieldssByCondAsync,
  ConstraintFields_AddNewRecordAsync,
  ConstraintFields_ReFreshCache,
  ConstraintFields_GetUniCondStr,
  ConstraintFields_IsExistRecordAsync,
  ConstraintFields_GetObjLstByPagerAsync,
} from '@/ts/L3ForWApi/Table_Field/clsConstraintFieldsWApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsConstraintFieldsEN } from '@/ts/L0Entity/Table_Field/clsConstraintFieldsEN';
import { clsConstraintFieldsENEx } from '@/ts/L0Entity/Table_Field/clsConstraintFieldsENEx';
import {
  vFieldTab_Sim_func,
  vFieldTab_Sim_funcKey,
} from '@/ts/L3ForWApi/Table_Field/clsvFieldTab_SimWApi';
import { clsvFieldTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvFieldTab_SimEN';

import { clsPrjConstraintEN } from '@/ts/L0Entity/Table_Field/clsPrjConstraintEN';
import { SortType_func, SortType_funcKey } from '@/ts/L3ForWApi/Table_Field/clsSortTypeWApi';
import { clsSortTypeEN } from '@/ts/L0Entity/Table_Field/clsSortTypeEN';
import {
  vPrjTab_Sim_func,
  vPrjTab_Sim_funcKey,
} from '@/ts/L3ForWApi/Table_Field/clsvPrjTab_SimWApi';
import { clsvPrjTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvPrjTab_SimEN';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import {
  vPrjConstraint_Sim_func,
  vPrjConstraint_Sim_funcKey,
} from '@/ts/L3ForWApi/Table_Field/clsvPrjConstraint_SimWApi';
import { CmPrjId_Local } from '@/views/RegionManage/ViewRegionVueShare';
import { PrjId_Session } from '@/views/CodeMan/CMProjectVueShare';

export const constraintFieldsExController = 'ConstraintFieldsExApi';
export const constraintFieldsEx_ConstructorName = 'constraintFieldsEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function ConstraintFieldsEx_GetWebApiUrl(strController: string, strAction: string): string {
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
 * @param objConstraintFieldsENS:源对象
 * @returns 目标对象=>clsConstraintFieldsEN:objConstraintFieldsENT
 **/
export function ConstraintFieldsEx_CopyToEx(
  objConstraintFieldsENS: clsConstraintFieldsEN,
): clsConstraintFieldsENEx {
  const strThisFuncName = ConstraintFieldsEx_CopyToEx.name;
  const objConstraintFieldsENT = new clsConstraintFieldsENEx();
  try {
    ObjectAssign(objConstraintFieldsENT, objConstraintFieldsENS);
    return objConstraintFieldsENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      constraintFieldsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objConstraintFieldsENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function ConstraintFieldsEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsConstraintFieldsENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrConstraintFieldsObjLst = await ConstraintFields_GetObjLstByPagerAsync(objPagerPara);
  const arrConstraintFieldsExObjLst = arrConstraintFieldsObjLst.map(ConstraintFieldsEx_CopyToEx);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsConstraintFieldsEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrConstraintFieldsExObjLst) {
      await ConstraintFieldsEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrConstraintFieldsExObjLst.length == 0) return arrConstraintFieldsExObjLst;
  let arrConstraintFieldsSel: Array<clsConstraintFieldsENEx> = arrConstraintFieldsExObjLst;
  try {
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrConstraintFieldsSel = arrConstraintFieldsSel.sort(
        ConstraintFieldsEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrConstraintFieldsSel = arrConstraintFieldsSel.sort(objPagerPara.sortFun);
    }

    return arrConstraintFieldsSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      constraintFieldsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsConstraintFieldsENEx>();
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objConstraintFieldsS:源对象
 **/
export async function ConstraintFieldsEx_FuncMapFldName(
  objConstraintFields: clsConstraintFieldsENEx,
) {
  const strThisFuncName = ConstraintFieldsEx_FuncMapFldName.name;
  try {
    if (IsNullOrEmpty(objConstraintFields.fldName) == true) {
      const vFieldTabSimFldId = objConstraintFields.fldId;
      const vFieldTabSimFldName = await vFieldTab_Sim_func(
        clsvFieldTab_SimEN.con_FldId,
        clsvFieldTab_SimEN.con_FldName,
        vFieldTabSimFldId,
        objConstraintFields.prjId,
      );
      objConstraintFields.fldName = vFieldTabSimFldName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000336)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      constraintFieldsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objConstraintFieldsS:源对象
 **/
export async function ConstraintFieldsEx_FuncMapConstraintName(
  objConstraintFields: clsConstraintFieldsENEx,
) {
  const strThisFuncName = ConstraintFieldsEx_FuncMapConstraintName.name;
  try {
    if (IsNullOrEmpty(objConstraintFields.constraintName) == true) {
      const PrjConstraintPrjConstraintId = objConstraintFields.prjConstraintId;
      const PrjConstraintConstraintName = await vPrjConstraint_Sim_func(
        clsPrjConstraintEN.con_PrjConstraintId,
        clsPrjConstraintEN.con_ConstraintName,
        PrjConstraintPrjConstraintId,
        objConstraintFields.prjId,
      );
      objConstraintFields.constraintName = PrjConstraintConstraintName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000491)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      constraintFieldsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objConstraintFieldsS:源对象
 **/
export async function ConstraintFieldsEx_FuncMapSortTypeName(
  objConstraintFields: clsConstraintFieldsENEx,
) {
  const strThisFuncName = ConstraintFieldsEx_FuncMapSortTypeName.name;
  try {
    if (IsNullOrEmpty(objConstraintFields.sortTypeName) == true) {
      const SortTypeSortTypeId = objConstraintFields.sortTypeId;
      const SortTypeSortTypeName = await SortType_func(
        clsSortTypeEN.con_SortTypeId,
        clsSortTypeEN.con_SortTypeName,
        SortTypeSortTypeId,
      );
      objConstraintFields.sortTypeName = SortTypeSortTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000492)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      constraintFieldsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objConstraintFieldsS:源对象
 **/
export async function ConstraintFieldsEx_FuncMapTabName(
  objConstraintFields: clsConstraintFieldsENEx,
) {
  const strThisFuncName = ConstraintFieldsEx_FuncMapTabName.name;
  try {
    if (IsNullOrEmpty(objConstraintFields.tabName) == true) {
      const vPrjTabSimTabId = objConstraintFields.tabId;
      const vPrjTabSimTabName = await vPrjTab_Sim_func(
        clsvPrjTab_SimEN.con_TabId,
        clsvPrjTab_SimEN.con_TabName,
        vPrjTabSimTabId,
        PrjId_Session.value,
      );
      objConstraintFields.tabName = vPrjTabSimTabName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000339)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      constraintFieldsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objConstraintFieldsS:源对象
 **/
export async function ConstraintFieldsEx_FuncMapDateTimeSim(
  objConstraintFields: clsConstraintFieldsENEx,
) {
  const strThisFuncName = ConstraintFieldsEx_FuncMapDateTimeSim.name;
  try {
    if (IsNullOrEmpty(objConstraintFields.dateTimeSim) == true) {
      const CommonDataNodeDateTimeSim = clsDateTime.GetDateTime_Sim(objConstraintFields.updDate);
      objConstraintFields.dateTimeSim = CommonDataNodeDateTimeSim;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000476)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      constraintFieldsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-01-24
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function ConstraintFieldsEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsConstraintFieldsENEx.con_FldName:
        return (a: clsConstraintFieldsENEx, b: clsConstraintFieldsENEx) => {
          return a.fldName.localeCompare(b.fldName);
        };
      case clsConstraintFieldsENEx.con_ConstraintName:
        return (a: clsConstraintFieldsENEx, b: clsConstraintFieldsENEx) => {
          return a.constraintName.localeCompare(b.constraintName);
        };
      case clsConstraintFieldsENEx.con_SortTypeName:
        return (a: clsConstraintFieldsENEx, b: clsConstraintFieldsENEx) => {
          return a.sortTypeName.localeCompare(b.sortTypeName);
        };
      case clsConstraintFieldsENEx.con_TabName:
        return (a: clsConstraintFieldsENEx, b: clsConstraintFieldsENEx) => {
          return a.tabName.localeCompare(b.tabName);
        };
      case clsConstraintFieldsENEx.con_DateTimeSim:
        return (a: clsConstraintFieldsENEx, b: clsConstraintFieldsENEx) => {
          return a.dateTimeSim.localeCompare(b.dateTimeSim);
        };
      default:
        return ConstraintFields_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsConstraintFieldsENEx.con_FldName:
        return (a: clsConstraintFieldsENEx, b: clsConstraintFieldsENEx) => {
          return b.fldName.localeCompare(a.fldName);
        };
      case clsConstraintFieldsENEx.con_ConstraintName:
        return (a: clsConstraintFieldsENEx, b: clsConstraintFieldsENEx) => {
          return b.constraintName.localeCompare(a.constraintName);
        };
      case clsConstraintFieldsENEx.con_SortTypeName:
        return (a: clsConstraintFieldsENEx, b: clsConstraintFieldsENEx) => {
          return b.sortTypeName.localeCompare(a.sortTypeName);
        };
      case clsConstraintFieldsENEx.con_TabName:
        return (a: clsConstraintFieldsENEx, b: clsConstraintFieldsENEx) => {
          return b.tabName.localeCompare(a.tabName);
        };
      case clsConstraintFieldsENEx.con_DateTimeSim:
        return (a: clsConstraintFieldsENEx, b: clsConstraintFieldsENEx) => {
          return b.dateTimeSim.localeCompare(a.dateTimeSim);
        };
      default:
        return ConstraintFields_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2024-01-24
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function ConstraintFieldsEx_FuncMapByFldName(
  strFldName: string,
  objConstraintFieldsEx: clsConstraintFieldsENEx,
) {
  const strThisFuncName = ConstraintFieldsEx_FuncMapByFldName.name;
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsConstraintFieldsEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsConstraintFieldsENEx.con_FldName:
      return ConstraintFieldsEx_FuncMapFldName(objConstraintFieldsEx);
    case clsConstraintFieldsENEx.con_ConstraintName:
      return ConstraintFieldsEx_FuncMapConstraintName(objConstraintFieldsEx);
    case clsConstraintFieldsENEx.con_SortTypeName:
      return ConstraintFieldsEx_FuncMapSortTypeName(objConstraintFieldsEx);
    case clsConstraintFieldsENEx.con_TabName:
      return ConstraintFieldsEx_FuncMapTabName(objConstraintFieldsEx);
    case clsConstraintFieldsENEx.con_DateTimeSim:
      return ConstraintFieldsEx_FuncMapDateTimeSim(objConstraintFieldsEx);
    default:
      strMsg = Format(
        '扩展字段:[{0}]在字段值函数映射中不存在!(in {1})',
        strFldName,
        strThisFuncName,
      );
      console.error(strMsg);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objConstraintFieldsS:源对象
 **/
export async function ConstraintFieldsEx_FuncMapKeyFldName(
  objConstraintFields: clsConstraintFieldsENEx,
): Promise<Array<string>> {
  const strThisFuncName = ConstraintFieldsEx_FuncMapKeyFldName.name;
  try {
    if (IsNullOrEmpty(objConstraintFields.fldName) == true) return [];
    const vFieldTabSimFldName = objConstraintFields.fldName;
    const arrFldId = await vFieldTab_Sim_funcKey(
      clsvFieldTab_SimEN.con_FldName,
      vFieldTabSimFldName,
      objConstraintFields.prjId,
      enumComparisonOp.Like_03,
    );
    return arrFldId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000336)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      constraintFieldsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objConstraintFieldsS:源对象
 **/
export async function ConstraintFieldsEx_FuncMapKeyConstraintName(
  objConstraintFields: clsConstraintFieldsENEx,
): Promise<Array<string>> {
  const strThisFuncName = ConstraintFieldsEx_FuncMapKeyConstraintName.name;
  try {
    if (IsNullOrEmpty(objConstraintFields.constraintName) == true) return [];
    const PrjConstraintConstraintName = objConstraintFields.constraintName;
    const arrPrjConstraintId = await vPrjConstraint_Sim_funcKey(
      clsPrjConstraintEN.con_ConstraintName,
      PrjConstraintConstraintName,
      objConstraintFields.prjId,
      enumComparisonOp.Like_03,
    );
    return arrPrjConstraintId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000491)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      constraintFieldsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objConstraintFieldsS:源对象
 **/
export async function ConstraintFieldsEx_FuncMapKeySortTypeName(
  objConstraintFields: clsConstraintFieldsENEx,
): Promise<Array<string>> {
  const strThisFuncName = ConstraintFieldsEx_FuncMapKeySortTypeName.name;
  try {
    if (IsNullOrEmpty(objConstraintFields.sortTypeName) == true) return [];
    const SortTypeSortTypeName = objConstraintFields.sortTypeName;
    const arrSortTypeId = await SortType_funcKey(
      clsSortTypeEN.con_SortTypeName,
      SortTypeSortTypeName,
      enumComparisonOp.Like_03,
    );
    return arrSortTypeId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000492)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      constraintFieldsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objConstraintFieldsS:源对象
 **/
export async function ConstraintFieldsEx_FuncMapKeyTabName(
  objConstraintFields: clsConstraintFieldsENEx,
): Promise<Array<string>> {
  const strThisFuncName = ConstraintFieldsEx_FuncMapKeyTabName.name;
  try {
    if (IsNullOrEmpty(objConstraintFields.tabName) == true) return [];
    const vPrjTabSimTabName = objConstraintFields.tabName;
    const arrTabId = await vPrjTab_Sim_funcKey(
      clsvPrjTab_SimEN.con_TabName,
      vPrjTabSimTabName,
      CmPrjId_Local.value,
      enumComparisonOp.Like_03,
    );
    return arrTabId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000339)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      constraintFieldsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}

/** 添加新记录,保存函数
 * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordSave)
 **/
export async function ConstraintFieldsEx_AddNewRecordSave(
  arrConstraintFields: Array<clsConstraintFieldsEN>,
  strPrjConstraintId: string,
): Promise<boolean> {
  const strThisFuncName = ConstraintFieldsEx_AddNewRecordSave.name;

  try {
    const strWhere = `${clsConstraintFieldsEN.con_PrjConstraintId} = '${strPrjConstraintId}'`;
    await ConstraintFields_DelConstraintFieldssByCondAsync(strWhere);
  } catch (e) {
    const strMsg = Format(
      '删除原来的约束字段不成功,{0}.(in {1}.{2})',
      e,
      constraintFieldsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return false; //一定要有一个返回值,否则会出错!
  }
  try {
    for (const objInFor of arrConstraintFields) {
      ConstraintFields_CheckPropertyNew(objInFor);
    }
  } catch (e) {
    const strMsg = Format(
      '检查数据不成功,{0}.(in {1}.{2})',
      e,
      constraintFieldsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return false; //一定要有一个返回值,否则会出错!
  }
  try {
    //检查唯一性条件
    let returnBool = false;
    for (const objConstraintFieldsEN of arrConstraintFields) {
      const bolIsExistCond = await ConstraintFieldsEx_CheckUniCond4Add(objConstraintFieldsEN);
      if (bolIsExistCond == false) {
        return false;
      }

      returnBool = await ConstraintFields_AddNewRecordAsync(objConstraintFieldsEN);
      if (returnBool == true) {
        ConstraintFields_ReFreshCache(clsPrivateSessionStorage.currSelPrjId);
        // const strInfo = Format('添加记录成功!');

        //显示信息框
        // alert(strInfo);
      } else {
        const strInfo = Format('添加记录不成功!');

        //显示信息框
        alert(strInfo);
      }
    }
    return returnBool; //一定要有一个返回值,否则会出错!
  } catch (e) {
    const strMsg = Format(
      '添加记录不成功,{0}.(in {1}.{2})',
      e,
      constraintFieldsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return false; //一定要有一个返回值,否则会出错!
  }
}

/** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_CheckUniCondition4Add)
 **/
export async function ConstraintFieldsEx_CheckUniCond4Add(
  objConstraintFieldsEN: clsConstraintFieldsEN,
): Promise<boolean> {
  const strUniquenessCondition = ConstraintFields_GetUniCondStr(objConstraintFieldsEN);
  const bolIsExistCondition = await ConstraintFields_IsExistRecordAsync(strUniquenessCondition);
  if (bolIsExistCondition == true) {
    const strMsg = Format(
      '不能满足唯一性条件。满足条件：{0}的记录已经存在!',
      strUniquenessCondition,
    );
    console.error(strMsg);
    alert(strMsg);
    return false;
  }
  return true;
}
