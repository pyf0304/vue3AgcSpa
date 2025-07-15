/**
 * Sql表(SqlTable)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2023年03月03日.
 * 注意:该类必须与调用界面处于同一个包，否则调用不成功!
 **/
//import $ from "jquery";

import { clsSqlTableEN } from '@/ts/L0Entity/SqlViewMan/clsSqlTableEN';
import { Format, GetStrByNumWithLen, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { PrjTab_GetObjLstAsync } from '@/ts/L3ForWApi/Table_Field/clsPrjTabWApi';
import { clsPrjTabEN } from '@/ts/L0Entity/Table_Field/clsPrjTabEN';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { GetObjValueOfKey, GetSortExpressInfo, ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { clsSqlTableENEx } from '@/ts/L0Entity/SqlViewMan/clsSqlTableENEx';
import {
  SqlTable_GetObjLstByPagerAsync,
  SqlTable_SortFunByKey,
} from '@/ts/L3ForWApi/SqlViewMan/clsSqlTableWApi';
import { SqlWApi_GetTableAndViewsByCond } from '@/ts/FunClass/SqlWApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
export const sqlTableEx_Controller = 'SqlTableExApi';
export const sqlTableEx_ConstructorName = 'sqlTableEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function SqlTableEx_GetWebApiUrl(strController: string, strAction: string): string {
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
 * @param objSqlTableENS:源对象
 * @returns 目标对象=>clsSqlTableEN:objSqlTableENT
 **/
export function SqlTableEx_CopyToEx(objSqlTableENS: clsSqlTableEN): clsSqlTableENEx {
  const strThisFuncName = SqlTableEx_CopyToEx.name;
  const objSqlTableENT = new clsSqlTableENEx();
  try {
    ObjectAssign(objSqlTableENT, objSqlTableENS);
    return objSqlTableENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      sqlTableEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objSqlTableENT;
  }
}
//该表在前台TypeScript中，不需要使用Cache;

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function SqlTableEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsSqlTableENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrSqlTableObjLst = await SqlTable_GetObjLstByPagerAsync(objPagerPara);
  const arrSqlTableExObjLst = arrSqlTableObjLst.map(SqlTableEx_CopyToEx);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsSqlTableEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrSqlTableExObjLst) {
      await SqlTableEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrSqlTableExObjLst.length == 0) return arrSqlTableExObjLst;
  let arrSqlTable_Sel: Array<clsSqlTableENEx> = arrSqlTableExObjLst;
  try {
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrSqlTable_Sel = arrSqlTable_Sel.sort(SqlTableEx_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrSqlTable_Sel = arrSqlTable_Sel.sort(objPagerPara.sortFun);
    }

    return arrSqlTable_Sel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      sqlTableEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsSqlTableENEx>();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2023-03-03
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function SqlTableEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  // const strThisFuncName = 'SortFunByKey';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      default:
        return SqlTable_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      default:
        return SqlTable_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2023-03-03
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function SqlTableEx_FuncMapByFldName(strFldName: string, objSqlTableEx: clsSqlTableENEx) {
  const strThisFuncName = SqlTableEx_FuncMapByFldName.name;
  console.log(objSqlTableEx);
  let strMsg = '';
  //如果是本表中字段，不需要映射
  const arrFldName = clsSqlTableEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
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
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function SqlTableEx_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsSqlTableEN>> {
  // const strThisFuncName = 'GetObjLstAsync';
  // const strAction = 'GetObjLst';
  const arr = new Array<clsSqlTableEN>();

  try {
    const objDT = await SqlWApi_GetTableAndViewsByCond(
      clsPrivateSessionStorage.currPrjDataBaseId,
      strWhereCond,
    );

    //Promise<Array<object>>
    console.log(objDT);
    let intIndex = 1;
    if (objDT == null) return arr;
    for (const objRow_In of objDT) {
      const objEN = new clsSqlTableEN();
      //let strKeyValue = objENGetFldValue(strKey);

      const strFldName1 = 'name';
      const strValue1 = GetObjValueOfKey(objRow_In, strFldName1);
      const strFldName2 = 'xtype';
      const strValue2 = GetObjValueOfKey(objRow_In, strFldName2);
      const strFldName3 = 'crdate';
      const strValue3 = GetObjValueOfKey(objRow_In, strFldName3);
      objEN.tableName = strValue1;
      objEN.xtype = strValue2;
      objEN.crDate = strValue3;
      objEN.sqlTableId = GetStrByNumWithLen(intIndex, 8);
      arr.push(objEN);
      intIndex = intIndex + 1;
    }
    return arr;
  } catch (error: any) {
    console.error(error);
    return arr;
  }
}
/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function SqlTableEx_GetObjLstBySqlServer(
  objPagerPara: stuPagerPara,
): Promise<Array<clsSqlTableENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';

  const arrSqlTableObjLst = await SqlTableEx_GetObjLstAsync(objPagerPara.whereCond);
  const arrSqlTableObjLst1 = await SqlTableEx_RemoveExistedTabFromDT(arrSqlTableObjLst);
  const arrSqlTableExObjLst = arrSqlTableObjLst1.map(SqlTableEx_CopyToEx);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsSqlTableEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrSqlTableExObjLst) {
      await SqlTableEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrSqlTableExObjLst.length == 0) return arrSqlTableExObjLst;
  let arrSqlTable_Sel: Array<clsSqlTableENEx> = arrSqlTableExObjLst;
  try {
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrSqlTable_Sel = arrSqlTable_Sel.sort(SqlTableEx_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrSqlTable_Sel = arrSqlTable_Sel.sort(objPagerPara.sortFun);
    }

    return arrSqlTable_Sel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      sqlTableEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsSqlTableENEx>();
}

export async function SqlTableEx_GetObjLstByPager(
  objPagerPara: stuPagerPara,
  arrSqlTableObjLst1: Array<clsSqlTableEN>,
): Promise<Array<clsSqlTableENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';

  //const arrSqlTableObjLst = await SqlTableEx_GetObjLstByPagerAsync(objPagerPara);
  //const arrSqlTableObjLst1 = await SqlTableEx_RemoveExistedTabFromDT(arrSqlTableObjLst);
  const arrSqlTableExObjLst = arrSqlTableObjLst1.map(SqlTableEx_CopyToEx);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsSqlTableEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrSqlTableExObjLst) {
      await SqlTableEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrSqlTableExObjLst.length == 0) return arrSqlTableExObjLst;
  let arrSqlTable_Sel: Array<clsSqlTableENEx> = arrSqlTableExObjLst;
  try {
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrSqlTable_Sel = arrSqlTable_Sel.sort(SqlTableEx_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrSqlTable_Sel = arrSqlTable_Sel.sort(objPagerPara.sortFun);
    }

    return arrSqlTable_Sel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      sqlTableEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsSqlTableENEx>();
}

/// <summary>
/// 剔除DT中已存在的生成代码中的表名
/// </summary>
/// <param name="objDT"></param>
/// <param name="strSqlDsTypeId"></param>
/// <returns></returns>
export async function SqlTableEx_RemoveExistedTabFromDT(arrSqlTable: Array<clsSqlTableEN>) {
  const strWhere = Format(
    "{0}='{1}'",
    clsPrjTabEN.con_PrjId,
    clsPrivateSessionStorage.currSelPrjId,
  );
  const arrPrjTabObjLst = await PrjTab_GetObjLstAsync(strWhere);

  //arrPrjTabObjLst = clsPrjTabBLEx.GetPrjViewObjLst(clsPubVar.CurrSelPrjId);

  for (const objPrjTabEN of arrPrjTabObjLst) {
    const strTabName_S = objPrjTabEN.tabName.toLowerCase();
    const arr = arrSqlTable.filter((x) => x.tableName.toLowerCase() == strTabName_S);
    if (arr.length > 0) {
      const index = arrSqlTable.indexOf(arr[0], 0);
      if (index > -1) {
        arrSqlTable.splice(index, 1);
      }
    }
  }
  return arrSqlTable;
}
