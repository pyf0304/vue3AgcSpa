/**
 * 测试与SQL表不相关(TestIsRelaToSqlTab)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2023年06月21日.
 * 注意:该类必须与调用界面处于同一个包，否则调用不成功!
 **/
//import $ from "jquery";
import { ObjectAssign, GetSortExpressInfo, GetObjKeys } from '@/ts/PubFun/clsCommFunc4Web';
import {
  TestIsRelaToSqlTab_GetObjLstAsync,
  TestIsRelaToSqlTab_GetObjLstCache,
  TestIsRelaToSqlTab_SortFunByKey,
} from '@/ts/L3ForWApi/Table_Field/clsTestIsRelaToSqlTabWApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsTestIsRelaToSqlTabEN } from '@/ts/L0Entity/Table_Field/clsTestIsRelaToSqlTabEN';
import { clsTestIsRelaToSqlTabENEx } from '@/ts/L0Entity/Table_Field/clsTestIsRelaToSqlTabENEx';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
export const testIsRelaToSqlTabExController = 'TestIsRelaToSqlTabExApi';
export const testIsRelaToSqlTabExConstructorName = 'testIsRelaToSqlTabEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function TestIsRelaToSqlTabExGetWebApiUrl(strController: string, strAction: string): string {
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
 * @param objTestIsRelaToSqlTabENS:源对象
 * @returns 目标对象=>clsTestIsRelaToSqlTabEN:objTestIsRelaToSqlTabENT
 **/
export function TestIsRelaToSqlTabExCopyToEx(
  objTestIsRelaToSqlTabENS: clsTestIsRelaToSqlTabEN,
): clsTestIsRelaToSqlTabENEx {
  const strThisFuncName = TestIsRelaToSqlTabExCopyToEx.name;
  const objTestIsRelaToSqlTabENT = new clsTestIsRelaToSqlTabENEx();
  try {
    ObjectAssign(objTestIsRelaToSqlTabENT, objTestIsRelaToSqlTabENS);
    return objTestIsRelaToSqlTabENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      testIsRelaToSqlTabExConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objTestIsRelaToSqlTabENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function TestIsRelaToSqlTab_GetObjExLstByPagerCache(
  objPagerPara: stuPagerPara,
): Promise<Array<clsTestIsRelaToSqlTabENEx>> {
  const strThisFuncName = 'GetObjLstByPagerCache';
  const arrTestIsRelaToSqlTabObjLst = await TestIsRelaToSqlTab_GetObjLstCache();
  const arrTestIsRelaToSqlTabExObjLst = arrTestIsRelaToSqlTabObjLst.map(
    TestIsRelaToSqlTabExCopyToEx,
  );
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsTestIsRelaToSqlTabEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrTestIsRelaToSqlTabExObjLst) {
      await TestIsRelaToSqlTabEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrTestIsRelaToSqlTabExObjLst.length == 0) return arrTestIsRelaToSqlTabExObjLst;
  let arrTestIsRelaToSqlTabSel: Array<clsTestIsRelaToSqlTabENEx> = arrTestIsRelaToSqlTabExObjLst;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objTestIsRelaToSqlTabCond = new clsTestIsRelaToSqlTabENEx();
  ObjectAssign(objTestIsRelaToSqlTabCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsTestIsRelaToSqlTabWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrTestIsRelaToSqlTabSel = arrTestIsRelaToSqlTabSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objTestIsRelaToSqlTabCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrTestIsRelaToSqlTabSel = arrTestIsRelaToSqlTabSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrTestIsRelaToSqlTabSel = arrTestIsRelaToSqlTabSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrTestIsRelaToSqlTabSel = arrTestIsRelaToSqlTabSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrTestIsRelaToSqlTabSel = arrTestIsRelaToSqlTabSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrTestIsRelaToSqlTabSel = arrTestIsRelaToSqlTabSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrTestIsRelaToSqlTabSel = arrTestIsRelaToSqlTabSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrTestIsRelaToSqlTabSel = arrTestIsRelaToSqlTabSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.split(',');
            arrTestIsRelaToSqlTabSel = arrTestIsRelaToSqlTabSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrTestIsRelaToSqlTabSel = arrTestIsRelaToSqlTabSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrTestIsRelaToSqlTabSel = arrTestIsRelaToSqlTabSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrTestIsRelaToSqlTabSel = arrTestIsRelaToSqlTabSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrTestIsRelaToSqlTabSel = arrTestIsRelaToSqlTabSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrTestIsRelaToSqlTabSel = arrTestIsRelaToSqlTabSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrTestIsRelaToSqlTabSel = arrTestIsRelaToSqlTabSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrTestIsRelaToSqlTabSel.length == 0) return arrTestIsRelaToSqlTabSel;

    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrTestIsRelaToSqlTabSel = arrTestIsRelaToSqlTabSel.sort(
        TestIsRelaToSqlTabEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrTestIsRelaToSqlTabSel = arrTestIsRelaToSqlTabSel.sort(objPagerPara.sortFun);
    }

    return arrTestIsRelaToSqlTabSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      testIsRelaToSqlTabExConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsTestIsRelaToSqlTabENEx>();
}

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function TestIsRelaToSqlTab_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsTestIsRelaToSqlTabENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrTestIsRelaToSqlTabObjLst = await TestIsRelaToSqlTab_GetObjLstAsync(
    objPagerPara.whereCond,
  );
  const arrTestIsRelaToSqlTabExObjLst = arrTestIsRelaToSqlTabObjLst.map(
    TestIsRelaToSqlTabExCopyToEx,
  );
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsTestIsRelaToSqlTabEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrTestIsRelaToSqlTabExObjLst) {
      await TestIsRelaToSqlTabEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrTestIsRelaToSqlTabExObjLst.length == 0) return arrTestIsRelaToSqlTabExObjLst;
  let arrTestIsRelaToSqlTabSel: Array<clsTestIsRelaToSqlTabENEx> = arrTestIsRelaToSqlTabExObjLst;
  try {
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrTestIsRelaToSqlTabSel = arrTestIsRelaToSqlTabSel.sort(
        TestIsRelaToSqlTabEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrTestIsRelaToSqlTabSel = arrTestIsRelaToSqlTabSel.sort(objPagerPara.sortFun);
    }

    return arrTestIsRelaToSqlTabSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      testIsRelaToSqlTabExConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsTestIsRelaToSqlTabENEx>();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2023-06-21
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function TestIsRelaToSqlTabEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      default:
        return TestIsRelaToSqlTab_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      default:
        return TestIsRelaToSqlTab_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2023-06-21
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function TestIsRelaToSqlTabEx_FuncMapByFldName(
  strFldName: string,
  objTestIsRelaToSqlTabEx: clsTestIsRelaToSqlTabENEx,
) {
  const strThisFuncName = TestIsRelaToSqlTabEx_FuncMapByFldName.name;
  console.log(objTestIsRelaToSqlTabEx);
  let strMsg = '';
  //如果是本表中字段，不需要映射
  const arrFldName = clsTestIsRelaToSqlTabEN.AttributeName;
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
