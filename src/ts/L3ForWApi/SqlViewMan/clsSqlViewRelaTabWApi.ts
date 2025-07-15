/**
 * 类名:clsSqlViewRelaTabWApi
 * 表名:SqlViewRelaTab(00050247)
 * 版本:2024.01.20.1(服务器:WIN-SRV103-116)
 * 日期:2024/01/23 16:50:56
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:Sql视图管理(SqlViewMan)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * Sql视图相关表(SqlViewRelaTab)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2024年01月23日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty, GetStrLen, tzDataType, Format } from '@/ts/PubFun/clsString';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { CacheHelper } from '@/ts/PubFun/CacheHelper';
import {
  GetObjKeys,
  GetExceptionStr,
  myShowErrorMsg,
  ObjectAssign,
} from '@/ts/PubFun/clsCommFunc4Web';
import { clsSqlViewRelaTabEN } from '@/ts/L0Entity/SqlViewMan/clsSqlViewRelaTabEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const sqlViewRelaTab_Controller = 'SqlViewRelaTabApi';
export const sqlViewRelaTab_ConstructorName = 'sqlViewRelaTab';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strRelaTabId:关键字
 * @returns 对象
 **/
export async function SqlViewRelaTab_GetObjByRelaTabIdAsync(
  strRelaTabId: string,
): Promise<clsSqlViewRelaTabEN | null> {
  const strThisFuncName = 'GetObjByRelaTabIdAsync';

  if (IsNullOrEmpty(strRelaTabId) == true) {
    const strMsg = Format(
      '参数:[strRelaTabId]不能为空!(In clsSqlViewRelaTabWApi.GetObjByRelaTabIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strRelaTabId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strRelaTabId]的长度:[{0}]不正确!(clsSqlViewRelaTabWApi.GetObjByRelaTabIdAsync)',
      strRelaTabId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByRelaTabId';
  const strUrl = GetWebApiUrl(sqlViewRelaTab_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strRelaTabId,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObj = data.returnObj;
      if (returnObj == null) {
        return null;
      }
      //console.log(returnObj);
      const objSqlViewRelaTab = SqlViewRelaTab_GetObjFromJsonObj(returnObj);
      return objSqlViewRelaTab;
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        sqlViewRelaTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sqlViewRelaTab_ConstructorName,
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
 * 根据关键字获取相关对象, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache)
 * @param strRelaTabId:所给的关键字
 * @returns 对象
 */
export async function SqlViewRelaTab_GetObjByRelaTabIdCache(
  strRelaTabId: string,
  strPrjId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByRelaTabIdCache';

  if (IsNullOrEmpty(strRelaTabId) == true) {
    const strMsg = Format(
      '参数:[strRelaTabId]不能为空!(In clsSqlViewRelaTabWApi.GetObjByRelaTabIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strRelaTabId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strRelaTabId]的长度:[{0}]不正确!(clsSqlViewRelaTabWApi.GetObjByRelaTabIdCache)',
      strRelaTabId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrSqlViewRelaTabObjLstCache = await SqlViewRelaTab_GetObjLstCache(strPrjId);
  try {
    const arrSqlViewRelaTabSel = arrSqlViewRelaTabObjLstCache.filter(
      (x) => x.relaTabId == strRelaTabId,
    );
    let objSqlViewRelaTab: clsSqlViewRelaTabEN;
    if (arrSqlViewRelaTabSel.length > 0) {
      objSqlViewRelaTab = arrSqlViewRelaTabSel[0];
      return objSqlViewRelaTab;
    } else {
      if (bolTryAsyncOnce == true) {
        const objSqlViewRelaTabConst = await SqlViewRelaTab_GetObjByRelaTabIdAsync(strRelaTabId);
        if (objSqlViewRelaTabConst != null) {
          SqlViewRelaTab_ReFreshThisCache(strPrjId);
          return objSqlViewRelaTabConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strRelaTabId,
      sqlViewRelaTab_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strRelaTabId:所给的关键字
 * @returns 对象
 */
export async function SqlViewRelaTab_GetObjByRelaTabIdlocalStorage(strRelaTabId: string) {
  const strThisFuncName = 'GetObjByRelaTabIdlocalStorage';

  if (IsNullOrEmpty(strRelaTabId) == true) {
    const strMsg = Format(
      '参数:[strRelaTabId]不能为空!(In clsSqlViewRelaTabWApi.GetObjByRelaTabIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strRelaTabId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strRelaTabId]的长度:[{0}]不正确!(clsSqlViewRelaTabWApi.GetObjByRelaTabIdlocalStorage)',
      strRelaTabId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsSqlViewRelaTabEN._CurrTabName, strRelaTabId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objSqlViewRelaTabCache: clsSqlViewRelaTabEN = JSON.parse(strTempObj);
    return objSqlViewRelaTabCache;
  }
  try {
    const objSqlViewRelaTab = await SqlViewRelaTab_GetObjByRelaTabIdAsync(strRelaTabId);
    if (objSqlViewRelaTab != null) {
      localStorage.setItem(strKey, JSON.stringify(objSqlViewRelaTab));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objSqlViewRelaTab;
    }
    return objSqlViewRelaTab;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strRelaTabId,
      sqlViewRelaTab_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return;
  }
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objSqlViewRelaTab:所给的对象
 * @returns 对象
 */
export async function SqlViewRelaTab_UpdateObjInLstCache(
  objSqlViewRelaTab: clsSqlViewRelaTabEN,
  strPrjId: string,
) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrSqlViewRelaTabObjLstCache = await SqlViewRelaTab_GetObjLstCache(strPrjId);
    const obj = arrSqlViewRelaTabObjLstCache.find(
      (x) =>
        x.sqlViewId == objSqlViewRelaTab.sqlViewId && x.tabAliases == objSqlViewRelaTab.tabAliases,
    );
    if (obj != null) {
      objSqlViewRelaTab.relaTabId = obj.relaTabId;
      ObjectAssign(obj, objSqlViewRelaTab);
    } else {
      arrSqlViewRelaTabObjLstCache.push(objSqlViewRelaTab);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      sqlViewRelaTab_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/*该表没有名称字段,不能生成此函数!*/

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 @param strPrjId:缓存的分类字段
 * @returns 返回一个输出字段值
*/
export async function SqlViewRelaTab_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
  strPrjIdClassfy: string,
) {
  //const strThisFuncName = "func";

  if (IsNullOrEmpty(strPrjIdClassfy) == true) {
    const strMsg = Format('参数:[strPrjIdClassfy]不能为空!(In clsSqlViewRelaTabWApi.func)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjIdClassfy.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjIdClassfy]的长度:[{0}]不正确!(clsSqlViewRelaTabWApi.func)',
      strPrjIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName != clsSqlViewRelaTabEN.con_RelaTabId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsSqlViewRelaTabEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsSqlViewRelaTabEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strRelaTabId = strInValue;
  if (IsNullOrEmpty(strInValue) == true) {
    return '';
  }
  const objSqlViewRelaTab = await SqlViewRelaTab_GetObjByRelaTabIdCache(
    strRelaTabId,
    strPrjIdClassfy,
  );
  if (objSqlViewRelaTab == null) return '';
  if (objSqlViewRelaTab.GetFldValue(strOutFldName) == null) return '';
  return objSqlViewRelaTab.GetFldValue(strOutFldName).toString();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function SqlViewRelaTab_SortFunDefa(a: clsSqlViewRelaTabEN, b: clsSqlViewRelaTabEN): number {
  return a.relaTabId.localeCompare(b.relaTabId);
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function SqlViewRelaTab_SortFunDefa2Fld(
  a: clsSqlViewRelaTabEN,
  b: clsSqlViewRelaTabEN,
): number {
  if (a.sqlViewId == b.sqlViewId) return a.tabId.localeCompare(b.tabId);
  else return a.sqlViewId.localeCompare(b.sqlViewId);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function SqlViewRelaTab_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsSqlViewRelaTabEN.con_RelaTabId:
        return (a: clsSqlViewRelaTabEN, b: clsSqlViewRelaTabEN) => {
          return a.relaTabId.localeCompare(b.relaTabId);
        };
      case clsSqlViewRelaTabEN.con_SqlViewId:
        return (a: clsSqlViewRelaTabEN, b: clsSqlViewRelaTabEN) => {
          return a.sqlViewId.localeCompare(b.sqlViewId);
        };
      case clsSqlViewRelaTabEN.con_TabId:
        return (a: clsSqlViewRelaTabEN, b: clsSqlViewRelaTabEN) => {
          return a.tabId.localeCompare(b.tabId);
        };
      case clsSqlViewRelaTabEN.con_TabAliases:
        return (a: clsSqlViewRelaTabEN, b: clsSqlViewRelaTabEN) => {
          return a.tabAliases.localeCompare(b.tabAliases);
        };
      case clsSqlViewRelaTabEN.con_RelaFldId:
        return (a: clsSqlViewRelaTabEN, b: clsSqlViewRelaTabEN) => {
          if (a.relaFldId == null) return -1;
          if (b.relaFldId == null) return 1;
          return a.relaFldId.localeCompare(b.relaFldId);
        };
      case clsSqlViewRelaTabEN.con_OtherFldId:
        return (a: clsSqlViewRelaTabEN, b: clsSqlViewRelaTabEN) => {
          if (a.otherFldId == null) return -1;
          if (b.otherFldId == null) return 1;
          return a.otherFldId.localeCompare(b.otherFldId);
        };
      case clsSqlViewRelaTabEN.con_OtherTabId:
        return (a: clsSqlViewRelaTabEN, b: clsSqlViewRelaTabEN) => {
          if (a.otherTabId == null) return -1;
          if (b.otherTabId == null) return 1;
          return a.otherTabId.localeCompare(b.otherTabId);
        };
      case clsSqlViewRelaTabEN.con_SvRelaTabTypeId:
        return (a: clsSqlViewRelaTabEN, b: clsSqlViewRelaTabEN) => {
          return a.svRelaTabTypeId.localeCompare(b.svRelaTabTypeId);
        };
      case clsSqlViewRelaTabEN.con_TabRelationTypeId:
        return (a: clsSqlViewRelaTabEN, b: clsSqlViewRelaTabEN) => {
          return a.tabRelationTypeId.localeCompare(b.tabRelationTypeId);
        };
      case clsSqlViewRelaTabEN.con_TabRelationText:
        return (a: clsSqlViewRelaTabEN, b: clsSqlViewRelaTabEN) => {
          if (a.tabRelationText == null) return -1;
          if (b.tabRelationText == null) return 1;
          return a.tabRelationText.localeCompare(b.tabRelationText);
        };
      case clsSqlViewRelaTabEN.con_OrderNum:
        return (a: clsSqlViewRelaTabEN, b: clsSqlViewRelaTabEN) => {
          return a.orderNum - b.orderNum;
        };
      case clsSqlViewRelaTabEN.con_PrjId:
        return (a: clsSqlViewRelaTabEN, b: clsSqlViewRelaTabEN) => {
          return a.prjId.localeCompare(b.prjId);
        };
      case clsSqlViewRelaTabEN.con_UpdDate:
        return (a: clsSqlViewRelaTabEN, b: clsSqlViewRelaTabEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsSqlViewRelaTabEN.con_UpdUserId:
        return (a: clsSqlViewRelaTabEN, b: clsSqlViewRelaTabEN) => {
          if (a.updUserId == null) return -1;
          if (b.updUserId == null) return 1;
          return a.updUserId.localeCompare(b.updUserId);
        };
      case clsSqlViewRelaTabEN.con_Memo:
        return (a: clsSqlViewRelaTabEN, b: clsSqlViewRelaTabEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[SqlViewRelaTab]中不存在!(in ${sqlViewRelaTab_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsSqlViewRelaTabEN.con_RelaTabId:
        return (a: clsSqlViewRelaTabEN, b: clsSqlViewRelaTabEN) => {
          return b.relaTabId.localeCompare(a.relaTabId);
        };
      case clsSqlViewRelaTabEN.con_SqlViewId:
        return (a: clsSqlViewRelaTabEN, b: clsSqlViewRelaTabEN) => {
          return b.sqlViewId.localeCompare(a.sqlViewId);
        };
      case clsSqlViewRelaTabEN.con_TabId:
        return (a: clsSqlViewRelaTabEN, b: clsSqlViewRelaTabEN) => {
          return b.tabId.localeCompare(a.tabId);
        };
      case clsSqlViewRelaTabEN.con_TabAliases:
        return (a: clsSqlViewRelaTabEN, b: clsSqlViewRelaTabEN) => {
          return b.tabAliases.localeCompare(a.tabAliases);
        };
      case clsSqlViewRelaTabEN.con_RelaFldId:
        return (a: clsSqlViewRelaTabEN, b: clsSqlViewRelaTabEN) => {
          if (b.relaFldId == null) return -1;
          if (a.relaFldId == null) return 1;
          return b.relaFldId.localeCompare(a.relaFldId);
        };
      case clsSqlViewRelaTabEN.con_OtherFldId:
        return (a: clsSqlViewRelaTabEN, b: clsSqlViewRelaTabEN) => {
          if (b.otherFldId == null) return -1;
          if (a.otherFldId == null) return 1;
          return b.otherFldId.localeCompare(a.otherFldId);
        };
      case clsSqlViewRelaTabEN.con_OtherTabId:
        return (a: clsSqlViewRelaTabEN, b: clsSqlViewRelaTabEN) => {
          if (b.otherTabId == null) return -1;
          if (a.otherTabId == null) return 1;
          return b.otherTabId.localeCompare(a.otherTabId);
        };
      case clsSqlViewRelaTabEN.con_SvRelaTabTypeId:
        return (a: clsSqlViewRelaTabEN, b: clsSqlViewRelaTabEN) => {
          return b.svRelaTabTypeId.localeCompare(a.svRelaTabTypeId);
        };
      case clsSqlViewRelaTabEN.con_TabRelationTypeId:
        return (a: clsSqlViewRelaTabEN, b: clsSqlViewRelaTabEN) => {
          return b.tabRelationTypeId.localeCompare(a.tabRelationTypeId);
        };
      case clsSqlViewRelaTabEN.con_TabRelationText:
        return (a: clsSqlViewRelaTabEN, b: clsSqlViewRelaTabEN) => {
          if (b.tabRelationText == null) return -1;
          if (a.tabRelationText == null) return 1;
          return b.tabRelationText.localeCompare(a.tabRelationText);
        };
      case clsSqlViewRelaTabEN.con_OrderNum:
        return (a: clsSqlViewRelaTabEN, b: clsSqlViewRelaTabEN) => {
          return b.orderNum - a.orderNum;
        };
      case clsSqlViewRelaTabEN.con_PrjId:
        return (a: clsSqlViewRelaTabEN, b: clsSqlViewRelaTabEN) => {
          return b.prjId.localeCompare(a.prjId);
        };
      case clsSqlViewRelaTabEN.con_UpdDate:
        return (a: clsSqlViewRelaTabEN, b: clsSqlViewRelaTabEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsSqlViewRelaTabEN.con_UpdUserId:
        return (a: clsSqlViewRelaTabEN, b: clsSqlViewRelaTabEN) => {
          if (b.updUserId == null) return -1;
          if (a.updUserId == null) return 1;
          return b.updUserId.localeCompare(a.updUserId);
        };
      case clsSqlViewRelaTabEN.con_Memo:
        return (a: clsSqlViewRelaTabEN, b: clsSqlViewRelaTabEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[SqlViewRelaTab]中不存在!(in ${sqlViewRelaTab_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function SqlViewRelaTab_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsSqlViewRelaTabEN.con_RelaTabId:
      return (obj: clsSqlViewRelaTabEN) => {
        return obj.relaTabId === value;
      };
    case clsSqlViewRelaTabEN.con_SqlViewId:
      return (obj: clsSqlViewRelaTabEN) => {
        return obj.sqlViewId === value;
      };
    case clsSqlViewRelaTabEN.con_TabId:
      return (obj: clsSqlViewRelaTabEN) => {
        return obj.tabId === value;
      };
    case clsSqlViewRelaTabEN.con_TabAliases:
      return (obj: clsSqlViewRelaTabEN) => {
        return obj.tabAliases === value;
      };
    case clsSqlViewRelaTabEN.con_RelaFldId:
      return (obj: clsSqlViewRelaTabEN) => {
        return obj.relaFldId === value;
      };
    case clsSqlViewRelaTabEN.con_OtherFldId:
      return (obj: clsSqlViewRelaTabEN) => {
        return obj.otherFldId === value;
      };
    case clsSqlViewRelaTabEN.con_OtherTabId:
      return (obj: clsSqlViewRelaTabEN) => {
        return obj.otherTabId === value;
      };
    case clsSqlViewRelaTabEN.con_SvRelaTabTypeId:
      return (obj: clsSqlViewRelaTabEN) => {
        return obj.svRelaTabTypeId === value;
      };
    case clsSqlViewRelaTabEN.con_TabRelationTypeId:
      return (obj: clsSqlViewRelaTabEN) => {
        return obj.tabRelationTypeId === value;
      };
    case clsSqlViewRelaTabEN.con_TabRelationText:
      return (obj: clsSqlViewRelaTabEN) => {
        return obj.tabRelationText === value;
      };
    case clsSqlViewRelaTabEN.con_OrderNum:
      return (obj: clsSqlViewRelaTabEN) => {
        return obj.orderNum === value;
      };
    case clsSqlViewRelaTabEN.con_PrjId:
      return (obj: clsSqlViewRelaTabEN) => {
        return obj.prjId === value;
      };
    case clsSqlViewRelaTabEN.con_UpdDate:
      return (obj: clsSqlViewRelaTabEN) => {
        return obj.updDate === value;
      };
    case clsSqlViewRelaTabEN.con_UpdUserId:
      return (obj: clsSqlViewRelaTabEN) => {
        return obj.updUserId === value;
      };
    case clsSqlViewRelaTabEN.con_Memo:
      return (obj: clsSqlViewRelaTabEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[SqlViewRelaTab]中不存在!(in ${sqlViewRelaTab_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 @param strPrjId:缓存的分类字段
 * @returns 返回一个关键字值列表
*/
export async function SqlViewRelaTab_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
  strPrjIdClassfy: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (IsNullOrEmpty(strPrjIdClassfy) == true) {
    const strMsg = Format('参数:[strPrjIdClassfy]不能为空!(In clsSqlViewRelaTabWApi.funcKey)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjIdClassfy.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjIdClassfy]的长度:[{0}]不正确!(clsSqlViewRelaTabWApi.funcKey)',
      strPrjIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName == clsSqlViewRelaTabEN.con_RelaTabId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrSqlViewRelaTab = await SqlViewRelaTab_GetObjLstCache(strPrjIdClassfy);
  if (arrSqlViewRelaTab == null) return [];
  let arrSqlViewRelaTabSel = arrSqlViewRelaTab;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrSqlViewRelaTabSel = arrSqlViewRelaTabSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrSqlViewRelaTabSel = arrSqlViewRelaTabSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrSqlViewRelaTabSel = arrSqlViewRelaTabSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrSqlViewRelaTabSel = arrSqlViewRelaTabSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrSqlViewRelaTabSel = arrSqlViewRelaTabSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrSqlViewRelaTabSel = arrSqlViewRelaTabSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrSqlViewRelaTabSel = arrSqlViewRelaTabSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrSqlViewRelaTabSel = arrSqlViewRelaTabSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrSqlViewRelaTabSel = arrSqlViewRelaTabSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrSqlViewRelaTabSel = arrSqlViewRelaTabSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrSqlViewRelaTabSel.length == 0) return [];
  return arrSqlViewRelaTabSel.map((x) => x.relaTabId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function SqlViewRelaTab_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(sqlViewRelaTab_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strWhereCond,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      return data.returnStr;
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        sqlViewRelaTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sqlViewRelaTab_ConstructorName,
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
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstId)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 */
export async function SqlViewRelaTab_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(sqlViewRelaTab_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strWhereCond,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      return data.returnStr;
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        sqlViewRelaTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sqlViewRelaTab_ConstructorName,
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
 * 根据条件获取满足条件的第一条记录对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstObjAsync)
 * @param strWhereCond:条件
 * @returns 第一条记录对象
 **/
export async function SqlViewRelaTab_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsSqlViewRelaTabEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(sqlViewRelaTab_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strWhereCond,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObj = data.returnObj;
      if (returnObj == null) {
        return null;
      }
      //console.log(returnObj);
      const objSqlViewRelaTab = SqlViewRelaTab_GetObjFromJsonObj(returnObj);
      return objSqlViewRelaTab;
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        sqlViewRelaTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sqlViewRelaTab_ConstructorName,
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
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_ClientCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function SqlViewRelaTab_GetObjLstClientCache(strPrjId: string) {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsSqlViewRelaTabEN.WhereFormat) == false) {
    strWhereCond = Format(clsSqlViewRelaTabEN.WhereFormat, strPrjId);
  } else {
    strWhereCond = Format("PrjId='{0}'", strPrjId);
  }
  const strKey = Format('{0}_{1}', clsSqlViewRelaTabEN._CurrTabName, strPrjId);
  if (IsNullOrEmpty(clsSqlViewRelaTabEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsSqlViewRelaTabEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrSqlViewRelaTabExObjLstCache: Array<clsSqlViewRelaTabEN> = CacheHelper.Get(strKey);
    const arrSqlViewRelaTabObjLstT = SqlViewRelaTab_GetObjLstByJSONObjLst(
      arrSqlViewRelaTabExObjLstCache,
    );
    return arrSqlViewRelaTabObjLstT;
  }
  try {
    const arrSqlViewRelaTabExObjLst = await SqlViewRelaTab_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrSqlViewRelaTabExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrSqlViewRelaTabExObjLst.length,
    );
    console.log(strInfo);
    return arrSqlViewRelaTabExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      sqlViewRelaTab_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function SqlViewRelaTab_GetObjLstlocalStorage(strPrjId: string) {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsSqlViewRelaTabEN.WhereFormat) == false) {
    strWhereCond = Format(clsSqlViewRelaTabEN.WhereFormat, strPrjId);
  } else {
    strWhereCond = Format("{0}='{1}'", clsSqlViewRelaTabEN.con_PrjId, strPrjId);
  }
  const strKey = Format('{0}_{1}', clsSqlViewRelaTabEN._CurrTabName, strPrjId);
  if (IsNullOrEmpty(clsSqlViewRelaTabEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsSqlViewRelaTabEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrSqlViewRelaTabExObjLstCache: Array<clsSqlViewRelaTabEN> = JSON.parse(strTempObjLst);
    const arrSqlViewRelaTabObjLstT = SqlViewRelaTab_GetObjLstByJSONObjLst(
      arrSqlViewRelaTabExObjLstCache,
    );
    return arrSqlViewRelaTabObjLstT;
  }
  try {
    const arrSqlViewRelaTabExObjLst = await SqlViewRelaTab_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrSqlViewRelaTabExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrSqlViewRelaTabExObjLst.length,
    );
    console.log(strInfo);
    return arrSqlViewRelaTabExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      sqlViewRelaTab_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.如果本地不存在就返回null,不会去访问WebApi获取数据。
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function SqlViewRelaTab_GetObjLstlocalStoragePureCache(strPrjId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsSqlViewRelaTabEN._CurrTabName, strPrjId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrSqlViewRelaTabObjLstCache: Array<clsSqlViewRelaTabEN> = JSON.parse(strTempObjLst);
    return arrSqlViewRelaTabObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function SqlViewRelaTab_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsSqlViewRelaTabEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(sqlViewRelaTab_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strWhereCond,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          sqlViewRelaTab_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = SqlViewRelaTab_GetObjLstByJSONObjLst(returnObjLst);
      return arrObjLst;
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        sqlViewRelaTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sqlViewRelaTab_ConstructorName,
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
 * 获取本地sessionStorage缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function SqlViewRelaTab_GetObjLstsessionStorage(strPrjId: string) {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsSqlViewRelaTabEN.WhereFormat) == false) {
    strWhereCond = Format(clsSqlViewRelaTabEN.WhereFormat, strPrjId);
  } else {
    strWhereCond = Format("{0}='{1}'", clsSqlViewRelaTabEN.con_PrjId, strPrjId);
  }
  const strKey = Format('{0}_{1}', clsSqlViewRelaTabEN._CurrTabName, strPrjId);
  if (IsNullOrEmpty(clsSqlViewRelaTabEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsSqlViewRelaTabEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrSqlViewRelaTabExObjLstCache: Array<clsSqlViewRelaTabEN> = JSON.parse(strTempObjLst);
    const arrSqlViewRelaTabObjLstT = SqlViewRelaTab_GetObjLstByJSONObjLst(
      arrSqlViewRelaTabExObjLstCache,
    );
    return arrSqlViewRelaTabObjLstT;
  }
  try {
    const arrSqlViewRelaTabExObjLst = await SqlViewRelaTab_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrSqlViewRelaTabExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrSqlViewRelaTabExObjLst.length,
    );
    console.log(strInfo);
    return arrSqlViewRelaTabExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      sqlViewRelaTab_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function SqlViewRelaTab_GetObjLstsessionStoragePureCache(strPrjId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsSqlViewRelaTabEN._CurrTabName, strPrjId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrSqlViewRelaTabObjLstCache: Array<clsSqlViewRelaTabEN> = JSON.parse(strTempObjLst);
    return arrSqlViewRelaTabObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function SqlViewRelaTab_GetObjLstCache(
  strPrjId: string,
): Promise<Array<clsSqlViewRelaTabEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空！(In clsSqlViewRelaTabWApi.SqlViewRelaTab_GetObjLstCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确！(clsSqlViewRelaTabWApi.SqlViewRelaTab_GetObjLstCache)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  let arrSqlViewRelaTabObjLstCache;
  switch (clsSqlViewRelaTabEN.CacheModeId) {
    case '04': //sessionStorage
      arrSqlViewRelaTabObjLstCache = await SqlViewRelaTab_GetObjLstsessionStorage(strPrjId);
      break;
    case '03': //localStorage
      arrSqlViewRelaTabObjLstCache = await SqlViewRelaTab_GetObjLstlocalStorage(strPrjId);
      break;
    case '02': //ClientCache
      arrSqlViewRelaTabObjLstCache = await SqlViewRelaTab_GetObjLstClientCache(strPrjId);
      break;
    default:
      arrSqlViewRelaTabObjLstCache = await SqlViewRelaTab_GetObjLstClientCache(strPrjId);
      break;
  }
  return arrSqlViewRelaTabObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function SqlViewRelaTab_GetObjLstPureCache(strPrjId: string) {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrSqlViewRelaTabObjLstCache;
  switch (clsSqlViewRelaTabEN.CacheModeId) {
    case '04': //sessionStorage
      arrSqlViewRelaTabObjLstCache = await SqlViewRelaTab_GetObjLstsessionStoragePureCache(
        strPrjId,
      );
      break;
    case '03': //localStorage
      arrSqlViewRelaTabObjLstCache = await SqlViewRelaTab_GetObjLstlocalStoragePureCache(strPrjId);
      break;
    case '02': //ClientCache
      arrSqlViewRelaTabObjLstCache = null;
      break;
    default:
      arrSqlViewRelaTabObjLstCache = null;
      break;
  }
  return arrSqlViewRelaTabObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrRelaTabIdCond:条件对象
 * @returns 对象列表子集
 */
export async function SqlViewRelaTab_GetSubObjLstCache(
  objSqlViewRelaTabCond: clsSqlViewRelaTabEN,
  strPrjId: string,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrSqlViewRelaTabObjLstCache = await SqlViewRelaTab_GetObjLstCache(strPrjId);
  let arrSqlViewRelaTabSel = arrSqlViewRelaTabObjLstCache;
  if (
    objSqlViewRelaTabCond.sfFldComparisonOp == null ||
    objSqlViewRelaTabCond.sfFldComparisonOp == ''
  )
    return arrSqlViewRelaTabSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objSqlViewRelaTabCond.sfFldComparisonOp,
  );
  //console.log("clsSqlViewRelaTabWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objSqlViewRelaTabCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrSqlViewRelaTabSel = arrSqlViewRelaTabSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objSqlViewRelaTabCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrSqlViewRelaTabSel = arrSqlViewRelaTabSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrSqlViewRelaTabSel = arrSqlViewRelaTabSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrSqlViewRelaTabSel = arrSqlViewRelaTabSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrSqlViewRelaTabSel = arrSqlViewRelaTabSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrSqlViewRelaTabSel = arrSqlViewRelaTabSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrSqlViewRelaTabSel = arrSqlViewRelaTabSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrSqlViewRelaTabSel = arrSqlViewRelaTabSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrSqlViewRelaTabSel = arrSqlViewRelaTabSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrSqlViewRelaTabSel = arrSqlViewRelaTabSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrSqlViewRelaTabSel = arrSqlViewRelaTabSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrSqlViewRelaTabSel = arrSqlViewRelaTabSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrSqlViewRelaTabSel = arrSqlViewRelaTabSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrSqlViewRelaTabSel = arrSqlViewRelaTabSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrSqlViewRelaTabSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objSqlViewRelaTabCond),
      sqlViewRelaTab_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsSqlViewRelaTabEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrRelaTabId:关键字列表
 * @returns 对象列表
 **/
export async function SqlViewRelaTab_GetObjLstByRelaTabIdLstAsync(
  arrRelaTabId: Array<string>,
): Promise<Array<clsSqlViewRelaTabEN>> {
  const strThisFuncName = 'GetObjLstByRelaTabIdLstAsync';
  const strAction = 'GetObjLstByRelaTabIdLst';
  const strUrl = GetWebApiUrl(sqlViewRelaTab_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrRelaTabId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          sqlViewRelaTab_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = SqlViewRelaTab_GetObjLstByJSONObjLst(returnObjLst);
      return arrObjLst;
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        sqlViewRelaTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sqlViewRelaTab_ConstructorName,
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
 * 根据关键字列表获取相关对象列表, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)
 * @param arrstrRelaTabIdLst:关键字列表
 * @returns 对象列表
 */
export async function SqlViewRelaTab_GetObjLstByRelaTabIdLstCache(
  arrRelaTabIdLst: Array<string>,
  strPrjId: string,
) {
  const strThisFuncName = 'GetObjLstByRelaTabIdLstCache';
  try {
    const arrSqlViewRelaTabObjLstCache = await SqlViewRelaTab_GetObjLstCache(strPrjId);
    const arrSqlViewRelaTabSel = arrSqlViewRelaTabObjLstCache.filter(
      (x) => arrRelaTabIdLst.indexOf(x.relaTabId) > -1,
    );
    return arrSqlViewRelaTabSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrRelaTabIdLst.join(','),
      sqlViewRelaTab_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
}

/**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export async function SqlViewRelaTab_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsSqlViewRelaTabEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(sqlViewRelaTab_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objTopPara, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          sqlViewRelaTab_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = SqlViewRelaTab_GetObjLstByJSONObjLst(returnObjLst);
      return arrObjLst;
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        sqlViewRelaTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sqlViewRelaTab_ConstructorName,
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
 * 根据范围条件获取相应的记录对象列表,获取某范围的记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByRangeAsync)
 * @param objRangePara:根据范围获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function SqlViewRelaTab_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsSqlViewRelaTabEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(sqlViewRelaTab_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objRangePara, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          sqlViewRelaTab_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = SqlViewRelaTab_GetObjLstByJSONObjLst(returnObjLst);
      return arrObjLst;
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        sqlViewRelaTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sqlViewRelaTab_ConstructorName,
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
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerCache)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function SqlViewRelaTab_GetObjLstByPagerCache(
  objPagerPara: stuPagerPara,
  strPrjId: string,
) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsSqlViewRelaTabEN>();
  const arrSqlViewRelaTabObjLstCache = await SqlViewRelaTab_GetObjLstCache(strPrjId);
  if (arrSqlViewRelaTabObjLstCache.length == 0) return arrSqlViewRelaTabObjLstCache;
  let arrSqlViewRelaTabSel = arrSqlViewRelaTabObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objSqlViewRelaTabCond = new clsSqlViewRelaTabEN();
  ObjectAssign(objSqlViewRelaTabCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsSqlViewRelaTabWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrSqlViewRelaTabSel = arrSqlViewRelaTabSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objSqlViewRelaTabCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrSqlViewRelaTabSel = arrSqlViewRelaTabSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrSqlViewRelaTabSel = arrSqlViewRelaTabSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrSqlViewRelaTabSel = arrSqlViewRelaTabSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrSqlViewRelaTabSel = arrSqlViewRelaTabSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrSqlViewRelaTabSel = arrSqlViewRelaTabSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrSqlViewRelaTabSel = arrSqlViewRelaTabSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrSqlViewRelaTabSel = arrSqlViewRelaTabSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrSqlViewRelaTabSel = arrSqlViewRelaTabSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrSqlViewRelaTabSel = arrSqlViewRelaTabSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrSqlViewRelaTabSel = arrSqlViewRelaTabSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrSqlViewRelaTabSel = arrSqlViewRelaTabSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrSqlViewRelaTabSel = arrSqlViewRelaTabSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrSqlViewRelaTabSel = arrSqlViewRelaTabSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrSqlViewRelaTabSel = arrSqlViewRelaTabSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrSqlViewRelaTabSel.length == 0) return arrSqlViewRelaTabSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrSqlViewRelaTabSel = arrSqlViewRelaTabSel.sort(
        SqlViewRelaTab_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrSqlViewRelaTabSel = arrSqlViewRelaTabSel.sort(objPagerPara.sortFun);
    }
    arrSqlViewRelaTabSel = arrSqlViewRelaTabSel.slice(intStart, intEnd);
    return arrSqlViewRelaTabSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      sqlViewRelaTab_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsSqlViewRelaTabEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function SqlViewRelaTab_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsSqlViewRelaTabEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsSqlViewRelaTabEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(sqlViewRelaTab_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPagerPara, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          sqlViewRelaTab_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = SqlViewRelaTab_GetObjLstByJSONObjLst(returnObjLst);
      return arrObjLst;
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        sqlViewRelaTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sqlViewRelaTab_ConstructorName,
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
 * 调用WebApi来删除记录,根据关键字来删除记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelRecordAsync)
 * @param strRelaTabId:关键字
 * @returns 获取删除的结果
 **/
export async function SqlViewRelaTab_DelRecordAsync(strRelaTabId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(sqlViewRelaTab_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strRelaTabId);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const configDel = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.delete(strUrl, configDel);
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        sqlViewRelaTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sqlViewRelaTab_ConstructorName,
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
 * 根据关键字列表删除记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelMultiRecordAsync)
 * @param arrRelaTabId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function SqlViewRelaTab_DelSqlViewRelaTabsAsync(
  arrRelaTabId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelSqlViewRelaTabsAsync';
  const strAction = 'DelSqlViewRelaTabs';
  const strUrl = GetWebApiUrl(sqlViewRelaTab_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrRelaTabId, config);
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        sqlViewRelaTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sqlViewRelaTab_ConstructorName,
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
 * 根据条件删除记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelMultiRecordByCondAsync)
 * @returns 实际删除记录的个数
 **/
export async function SqlViewRelaTab_DelSqlViewRelaTabsByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelSqlViewRelaTabsByCondAsync';
  const strAction = 'DelSqlViewRelaTabsByCond';
  const strUrl = GetWebApiUrl(sqlViewRelaTab_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strWhereCond,
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        sqlViewRelaTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sqlViewRelaTab_ConstructorName,
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
 * 调用WebApi来添加记录,数据传递使用JSON串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordAsync)
 * @param objSqlViewRelaTabEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function SqlViewRelaTab_AddNewRecordAsync(
  objSqlViewRelaTabEN: clsSqlViewRelaTabEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objSqlViewRelaTabEN);
  const strUrl = GetWebApiUrl(sqlViewRelaTab_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objSqlViewRelaTabEN, config);
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        sqlViewRelaTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sqlViewRelaTab_ConstructorName,
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
 * 调用WebApi来添加记录,关键字用最大关键字,数据传递使用JSON串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithMaxIdAsync)
 * @param objSqlViewRelaTabEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function SqlViewRelaTab_AddNewRecordWithMaxIdAsync(
  objSqlViewRelaTabEN: clsSqlViewRelaTabEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(sqlViewRelaTab_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objSqlViewRelaTabEN, config);
    const data = response.data;
    if (data.errorId == 0) {
      return data.returnStr;
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        sqlViewRelaTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sqlViewRelaTab_ConstructorName,
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
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objSqlViewRelaTabEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function SqlViewRelaTab_AddNewRecordWithReturnKeyAsync(
  objSqlViewRelaTabEN: clsSqlViewRelaTabEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(sqlViewRelaTab_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objSqlViewRelaTabEN, config);
    const data = response.data;
    if (data.errorId == 0) {
      return data.returnStr;
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        sqlViewRelaTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sqlViewRelaTab_ConstructorName,
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
 * 调用WebApi来修改记录,数据传递使用JSON串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateRecordAsync)
 * @param objSqlViewRelaTabEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function SqlViewRelaTab_UpdateRecordAsync(
  objSqlViewRelaTabEN: clsSqlViewRelaTabEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objSqlViewRelaTabEN.sfUpdFldSetStr === undefined ||
    objSqlViewRelaTabEN.sfUpdFldSetStr === null ||
    objSqlViewRelaTabEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objSqlViewRelaTabEN.relaTabId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(sqlViewRelaTab_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objSqlViewRelaTabEN, config);
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        sqlViewRelaTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sqlViewRelaTab_ConstructorName,
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
 * 根据条件来修改记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateWithConditionAsync)
 * @param objSqlViewRelaTabEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function SqlViewRelaTab_UpdateWithConditionAsync(
  objSqlViewRelaTabEN: clsSqlViewRelaTabEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objSqlViewRelaTabEN.sfUpdFldSetStr === undefined ||
    objSqlViewRelaTabEN.sfUpdFldSetStr === null ||
    objSqlViewRelaTabEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objSqlViewRelaTabEN.relaTabId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(sqlViewRelaTab_Controller, strAction);
  objSqlViewRelaTabEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objSqlViewRelaTabEN, config);
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        sqlViewRelaTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sqlViewRelaTab_ConstructorName,
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
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistRecordCache)
 * @param objstrRelaTabIdCond:条件对象
 * @returns 对象列表子集
 */
export async function SqlViewRelaTab_IsExistRecordCache(
  objSqlViewRelaTabCond: clsSqlViewRelaTabEN,
  strPrjId: string,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrSqlViewRelaTabObjLstCache = await SqlViewRelaTab_GetObjLstCache(strPrjId);
  if (arrSqlViewRelaTabObjLstCache == null) return false;
  let arrSqlViewRelaTabSel = arrSqlViewRelaTabObjLstCache;
  if (
    objSqlViewRelaTabCond.sfFldComparisonOp == null ||
    objSqlViewRelaTabCond.sfFldComparisonOp == ''
  )
    return arrSqlViewRelaTabSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objSqlViewRelaTabCond.sfFldComparisonOp,
  );
  //console.log("clsSqlViewRelaTabWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objSqlViewRelaTabCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objSqlViewRelaTabCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrSqlViewRelaTabSel = arrSqlViewRelaTabSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrSqlViewRelaTabSel = arrSqlViewRelaTabSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrSqlViewRelaTabSel = arrSqlViewRelaTabSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrSqlViewRelaTabSel = arrSqlViewRelaTabSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrSqlViewRelaTabSel = arrSqlViewRelaTabSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrSqlViewRelaTabSel = arrSqlViewRelaTabSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrSqlViewRelaTabSel = arrSqlViewRelaTabSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrSqlViewRelaTabSel = arrSqlViewRelaTabSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrSqlViewRelaTabSel = arrSqlViewRelaTabSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrSqlViewRelaTabSel = arrSqlViewRelaTabSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrSqlViewRelaTabSel = arrSqlViewRelaTabSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrSqlViewRelaTabSel = arrSqlViewRelaTabSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrSqlViewRelaTabSel = arrSqlViewRelaTabSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrSqlViewRelaTabSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objSqlViewRelaTabCond),
      sqlViewRelaTab_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return false;
}

/**
 * 根据条件获取是否存在相应的记录？
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistRecordAsync)
 * @param strWhereCond:条件
 * @returns 是否存在记录？
 **/
export async function SqlViewRelaTab_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(sqlViewRelaTab_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strWhereCond,
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        sqlViewRelaTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sqlViewRelaTab_ConstructorName,
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
 * 根据关键字判断是否存在记录, 从本地缓存中判断.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistCache)
 * @param strRelaTabId:所给的关键字
 * @returns 对象
 */
export async function SqlViewRelaTab_IsExistCache(strRelaTabId: string, strPrjId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrSqlViewRelaTabObjLstCache = await SqlViewRelaTab_GetObjLstCache(strPrjId);
  if (arrSqlViewRelaTabObjLstCache == null) return false;
  try {
    const arrSqlViewRelaTabSel = arrSqlViewRelaTabObjLstCache.filter(
      (x) => x.relaTabId == strRelaTabId,
    );
    if (arrSqlViewRelaTabSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strRelaTabId,
      sqlViewRelaTab_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
  return false;
}

/**
 * 根据关键字判断是否存在记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistAsync)
 * @param strRelaTabId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function SqlViewRelaTab_IsExistAsync(strRelaTabId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(sqlViewRelaTab_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strRelaTabId,
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        sqlViewRelaTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sqlViewRelaTab_ConstructorName,
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
 * 获取某一条件的记录数
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetRecCountByCondAsync)
 * @param strWhereCond:条件
 * @returns 获取某一条件的记录数
 **/
export async function SqlViewRelaTab_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(sqlViewRelaTab_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strWhereCond,
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        sqlViewRelaTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sqlViewRelaTab_ConstructorName,
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
 * 根据条件对象, 从缓存的对象列表中获取记录数.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetRecCountByCondCache)
 * @param objSqlViewRelaTabCond:条件对象
 * @returns 对象列表记录数
 */
export async function SqlViewRelaTab_GetRecCountByCondCache(
  objSqlViewRelaTabCond: clsSqlViewRelaTabEN,
  strPrjId: string,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrSqlViewRelaTabObjLstCache = await SqlViewRelaTab_GetObjLstCache(strPrjId);
  if (arrSqlViewRelaTabObjLstCache == null) return 0;
  let arrSqlViewRelaTabSel = arrSqlViewRelaTabObjLstCache;
  if (
    objSqlViewRelaTabCond.sfFldComparisonOp == null ||
    objSqlViewRelaTabCond.sfFldComparisonOp == ''
  )
    return arrSqlViewRelaTabSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objSqlViewRelaTabCond.sfFldComparisonOp,
  );
  //console.log("clsSqlViewRelaTabWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objSqlViewRelaTabCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrSqlViewRelaTabSel = arrSqlViewRelaTabSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objSqlViewRelaTabCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrSqlViewRelaTabSel = arrSqlViewRelaTabSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrSqlViewRelaTabSel = arrSqlViewRelaTabSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrSqlViewRelaTabSel = arrSqlViewRelaTabSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrSqlViewRelaTabSel = arrSqlViewRelaTabSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrSqlViewRelaTabSel = arrSqlViewRelaTabSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrSqlViewRelaTabSel = arrSqlViewRelaTabSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrSqlViewRelaTabSel = arrSqlViewRelaTabSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrSqlViewRelaTabSel = arrSqlViewRelaTabSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrSqlViewRelaTabSel = arrSqlViewRelaTabSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrSqlViewRelaTabSel = arrSqlViewRelaTabSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrSqlViewRelaTabSel = arrSqlViewRelaTabSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrSqlViewRelaTabSel = arrSqlViewRelaTabSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrSqlViewRelaTabSel = arrSqlViewRelaTabSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrSqlViewRelaTabSel = arrSqlViewRelaTabSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrSqlViewRelaTabSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objSqlViewRelaTabCond),
      sqlViewRelaTab_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return 0;
}

/**
 * 获取表的最大关键字
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetMaxStrIdAsync)
 * @returns 获取表的最大关键字
 **/
export async function SqlViewRelaTab_GetMaxStrIdAsync(): Promise<string> {
  const strThisFuncName = 'GetMaxStrIdAsync';
  const strAction = 'GetMaxStrId';
  const strUrl = GetWebApiUrl(sqlViewRelaTab_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      return data.returnStr;
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        sqlViewRelaTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sqlViewRelaTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
/*该表的关键字类型不是字符型带前缀自增,不需要生成获取最大关键字函数!*/

/**
 * 根据前缀获取当前表关键字值的最大值,再加1,避免重复
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetMaxStrIdByPrefix)
 * @param mapParam:参数列表
 * @returns 获取当前表关键字值的最大值
 */
export async function SqlViewRelaTab_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(sqlViewRelaTab_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strPrefix,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      return data.returnStr;
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        sqlViewRelaTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sqlViewRelaTab_ConstructorName,
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
 * 获取WebApi的地址
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 */
export function SqlViewRelaTab_GetWebApiUrl(strController: string, strAction: string): string {
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
 * 刷新缓存.把当前表的缓存以及该表相关视图的缓存清空.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshCache)
 **/
export function SqlViewRelaTab_ReFreshCache(strPrjId: string): void {
  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空!(In clsSqlViewRelaTabWApi.clsSqlViewRelaTabWApi.ReFreshCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确!(clsSqlViewRelaTabWApi.clsSqlViewRelaTabWApi.ReFreshCache)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  const strMsg: string = Format('刷新缓存成功!');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = Format('{0}_{1}', clsSqlViewRelaTabEN._CurrTabName, strPrjId);
  switch (clsSqlViewRelaTabEN.CacheModeId) {
    case '04': //sessionStorage
      sessionStorage.removeItem(strKey);
      break;
    case '03': //localStorage
      localStorage.removeItem(strKey);
      break;
    case '02': //ClientCache
      CacheHelper.Remove(strKey);
      break;
    default:
      CacheHelper.Remove(strKey);
      break;
  }
}

/**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export function SqlViewRelaTab_ReFreshThisCache(strPrjId: string): void {
  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空!(In clsSqlViewRelaTabWApi.SqlViewRelaTab_ReFreshThisCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确!(clsSqlViewRelaTabWApi.SqlViewRelaTab_ReFreshThisCache)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = Format('{0}_{1}', clsSqlViewRelaTabEN._CurrTabName, strPrjId);
    switch (clsSqlViewRelaTabEN.CacheModeId) {
      case '04': //sessionStorage
        sessionStorage.removeItem(strKey);
        break;
      case '03': //localStorage
        localStorage.removeItem(strKey);
        break;
      case '02': //ClientCache
        CacheHelper.Remove(strKey);
        break;
      default:
        CacheHelper.Remove(strKey);
        break;
    }
    const strMsg = Format('刷新缓存成功!');
    console.trace(strMsg);
  } else {
    const strMsg = Format('刷新缓存已经关闭。');
    console.trace(strMsg);
  }
}
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function SqlViewRelaTab_CheckPropertyNew(pobjSqlViewRelaTabEN: clsSqlViewRelaTabEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (
    IsNullOrEmpty(pobjSqlViewRelaTabEN.sqlViewId) === true ||
    pobjSqlViewRelaTabEN.sqlViewId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000411)字段[Sql视图Id]不能为空(In Sql视图相关表)!(clsSqlViewRelaTabBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlViewRelaTabEN.tabId) === true ||
    pobjSqlViewRelaTabEN.tabId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000411)字段[表ID]不能为空(In Sql视图相关表)!(clsSqlViewRelaTabBL:CheckPropertyNew0)',
    );
  }
  if (IsNullOrEmpty(pobjSqlViewRelaTabEN.tabAliases) === true) {
    throw new Error(
      '(errid:Watl000411)字段[表别名]不能为空(In Sql视图相关表)!(clsSqlViewRelaTabBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlViewRelaTabEN.svRelaTabTypeId) === true ||
    pobjSqlViewRelaTabEN.svRelaTabTypeId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000411)字段[Sql视图相关表类型Id]不能为空(In Sql视图相关表)!(clsSqlViewRelaTabBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlViewRelaTabEN.tabRelationTypeId) === true ||
    pobjSqlViewRelaTabEN.tabRelationTypeId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000411)字段[表关系类型Id]不能为空(In Sql视图相关表)!(clsSqlViewRelaTabBL:CheckPropertyNew0)',
    );
  }
  if (
    null === pobjSqlViewRelaTabEN.orderNum ||
    (pobjSqlViewRelaTabEN.orderNum != null && pobjSqlViewRelaTabEN.orderNum.toString() === '')
  ) {
    throw new Error(
      '(errid:Watl000411)字段[序号]不能为空(In Sql视图相关表)!(clsSqlViewRelaTabBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlViewRelaTabEN.prjId) === true ||
    pobjSqlViewRelaTabEN.prjId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000411)字段[工程ID]不能为空(In Sql视图相关表)!(clsSqlViewRelaTabBL:CheckPropertyNew0)',
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjSqlViewRelaTabEN.relaTabId) == false &&
    GetStrLen(pobjSqlViewRelaTabEN.relaTabId) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[相关表Id(relaTabId)]的长度不能超过8(In Sql视图相关表(SqlViewRelaTab))!值:$(pobjSqlViewRelaTabEN.relaTabId)(clsSqlViewRelaTabBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlViewRelaTabEN.sqlViewId) == false &&
    GetStrLen(pobjSqlViewRelaTabEN.sqlViewId) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[Sql视图Id(sqlViewId)]的长度不能超过8(In Sql视图相关表(SqlViewRelaTab))!值:$(pobjSqlViewRelaTabEN.sqlViewId)(clsSqlViewRelaTabBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlViewRelaTabEN.tabId) == false &&
    GetStrLen(pobjSqlViewRelaTabEN.tabId) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[表ID(tabId)]的长度不能超过8(In Sql视图相关表(SqlViewRelaTab))!值:$(pobjSqlViewRelaTabEN.tabId)(clsSqlViewRelaTabBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlViewRelaTabEN.tabAliases) == false &&
    GetStrLen(pobjSqlViewRelaTabEN.tabAliases) > 100
  ) {
    throw new Error(
      '(errid:Watl000413)字段[表别名(tabAliases)]的长度不能超过100(In Sql视图相关表(SqlViewRelaTab))!值:$(pobjSqlViewRelaTabEN.tabAliases)(clsSqlViewRelaTabBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlViewRelaTabEN.relaFldId) == false &&
    GetStrLen(pobjSqlViewRelaTabEN.relaFldId) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[关系字段(relaFldId)]的长度不能超过8(In Sql视图相关表(SqlViewRelaTab))!值:$(pobjSqlViewRelaTabEN.relaFldId)(clsSqlViewRelaTabBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlViewRelaTabEN.otherFldId) == false &&
    GetStrLen(pobjSqlViewRelaTabEN.otherFldId) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[其他表字段(otherFldId)]的长度不能超过8(In Sql视图相关表(SqlViewRelaTab))!值:$(pobjSqlViewRelaTabEN.otherFldId)(clsSqlViewRelaTabBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlViewRelaTabEN.otherTabId) == false &&
    GetStrLen(pobjSqlViewRelaTabEN.otherTabId) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[其他表Id(otherTabId)]的长度不能超过8(In Sql视图相关表(SqlViewRelaTab))!值:$(pobjSqlViewRelaTabEN.otherTabId)(clsSqlViewRelaTabBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlViewRelaTabEN.svRelaTabTypeId) == false &&
    GetStrLen(pobjSqlViewRelaTabEN.svRelaTabTypeId) > 2
  ) {
    throw new Error(
      '(errid:Watl000413)字段[Sql视图相关表类型Id(svRelaTabTypeId)]的长度不能超过2(In Sql视图相关表(SqlViewRelaTab))!值:$(pobjSqlViewRelaTabEN.svRelaTabTypeId)(clsSqlViewRelaTabBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlViewRelaTabEN.tabRelationTypeId) == false &&
    GetStrLen(pobjSqlViewRelaTabEN.tabRelationTypeId) > 2
  ) {
    throw new Error(
      '(errid:Watl000413)字段[表关系类型Id(tabRelationTypeId)]的长度不能超过2(In Sql视图相关表(SqlViewRelaTab))!值:$(pobjSqlViewRelaTabEN.tabRelationTypeId)(clsSqlViewRelaTabBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlViewRelaTabEN.tabRelationText) == false &&
    GetStrLen(pobjSqlViewRelaTabEN.tabRelationText) > 500
  ) {
    throw new Error(
      '(errid:Watl000413)字段[表关系文本(tabRelationText)]的长度不能超过500(In Sql视图相关表(SqlViewRelaTab))!值:$(pobjSqlViewRelaTabEN.tabRelationText)(clsSqlViewRelaTabBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlViewRelaTabEN.prjId) == false &&
    GetStrLen(pobjSqlViewRelaTabEN.prjId) > 4
  ) {
    throw new Error(
      '(errid:Watl000413)字段[工程ID(prjId)]的长度不能超过4(In Sql视图相关表(SqlViewRelaTab))!值:$(pobjSqlViewRelaTabEN.prjId)(clsSqlViewRelaTabBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlViewRelaTabEN.updDate) == false &&
    GetStrLen(pobjSqlViewRelaTabEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In Sql视图相关表(SqlViewRelaTab))!值:$(pobjSqlViewRelaTabEN.updDate)(clsSqlViewRelaTabBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlViewRelaTabEN.updUserId) == false &&
    GetStrLen(pobjSqlViewRelaTabEN.updUserId) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改用户Id(updUserId)]的长度不能超过20(In Sql视图相关表(SqlViewRelaTab))!值:$(pobjSqlViewRelaTabEN.updUserId)(clsSqlViewRelaTabBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlViewRelaTabEN.memo) == false &&
    GetStrLen(pobjSqlViewRelaTabEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In Sql视图相关表(SqlViewRelaTab))!值:$(pobjSqlViewRelaTabEN.memo)(clsSqlViewRelaTabBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjSqlViewRelaTabEN.relaTabId) == false &&
    undefined !== pobjSqlViewRelaTabEN.relaTabId &&
    tzDataType.isString(pobjSqlViewRelaTabEN.relaTabId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[相关表Id(relaTabId)]的值:[$(pobjSqlViewRelaTabEN.relaTabId)], 非法,应该为字符型(In Sql视图相关表(SqlViewRelaTab))!(clsSqlViewRelaTabBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlViewRelaTabEN.sqlViewId) == false &&
    undefined !== pobjSqlViewRelaTabEN.sqlViewId &&
    tzDataType.isString(pobjSqlViewRelaTabEN.sqlViewId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[Sql视图Id(sqlViewId)]的值:[$(pobjSqlViewRelaTabEN.sqlViewId)], 非法,应该为字符型(In Sql视图相关表(SqlViewRelaTab))!(clsSqlViewRelaTabBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlViewRelaTabEN.tabId) == false &&
    undefined !== pobjSqlViewRelaTabEN.tabId &&
    tzDataType.isString(pobjSqlViewRelaTabEN.tabId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[表ID(tabId)]的值:[$(pobjSqlViewRelaTabEN.tabId)], 非法,应该为字符型(In Sql视图相关表(SqlViewRelaTab))!(clsSqlViewRelaTabBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlViewRelaTabEN.tabAliases) == false &&
    undefined !== pobjSqlViewRelaTabEN.tabAliases &&
    tzDataType.isString(pobjSqlViewRelaTabEN.tabAliases) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[表别名(tabAliases)]的值:[$(pobjSqlViewRelaTabEN.tabAliases)], 非法,应该为字符型(In Sql视图相关表(SqlViewRelaTab))!(clsSqlViewRelaTabBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlViewRelaTabEN.relaFldId) == false &&
    undefined !== pobjSqlViewRelaTabEN.relaFldId &&
    tzDataType.isString(pobjSqlViewRelaTabEN.relaFldId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[关系字段(relaFldId)]的值:[$(pobjSqlViewRelaTabEN.relaFldId)], 非法,应该为字符型(In Sql视图相关表(SqlViewRelaTab))!(clsSqlViewRelaTabBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlViewRelaTabEN.otherFldId) == false &&
    undefined !== pobjSqlViewRelaTabEN.otherFldId &&
    tzDataType.isString(pobjSqlViewRelaTabEN.otherFldId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[其他表字段(otherFldId)]的值:[$(pobjSqlViewRelaTabEN.otherFldId)], 非法,应该为字符型(In Sql视图相关表(SqlViewRelaTab))!(clsSqlViewRelaTabBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlViewRelaTabEN.otherTabId) == false &&
    undefined !== pobjSqlViewRelaTabEN.otherTabId &&
    tzDataType.isString(pobjSqlViewRelaTabEN.otherTabId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[其他表Id(otherTabId)]的值:[$(pobjSqlViewRelaTabEN.otherTabId)], 非法,应该为字符型(In Sql视图相关表(SqlViewRelaTab))!(clsSqlViewRelaTabBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlViewRelaTabEN.svRelaTabTypeId) == false &&
    undefined !== pobjSqlViewRelaTabEN.svRelaTabTypeId &&
    tzDataType.isString(pobjSqlViewRelaTabEN.svRelaTabTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[Sql视图相关表类型Id(svRelaTabTypeId)]的值:[$(pobjSqlViewRelaTabEN.svRelaTabTypeId)], 非法,应该为字符型(In Sql视图相关表(SqlViewRelaTab))!(clsSqlViewRelaTabBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlViewRelaTabEN.tabRelationTypeId) == false &&
    undefined !== pobjSqlViewRelaTabEN.tabRelationTypeId &&
    tzDataType.isString(pobjSqlViewRelaTabEN.tabRelationTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[表关系类型Id(tabRelationTypeId)]的值:[$(pobjSqlViewRelaTabEN.tabRelationTypeId)], 非法,应该为字符型(In Sql视图相关表(SqlViewRelaTab))!(clsSqlViewRelaTabBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlViewRelaTabEN.tabRelationText) == false &&
    undefined !== pobjSqlViewRelaTabEN.tabRelationText &&
    tzDataType.isString(pobjSqlViewRelaTabEN.tabRelationText) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[表关系文本(tabRelationText)]的值:[$(pobjSqlViewRelaTabEN.tabRelationText)], 非法,应该为字符型(In Sql视图相关表(SqlViewRelaTab))!(clsSqlViewRelaTabBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjSqlViewRelaTabEN.orderNum &&
    undefined !== pobjSqlViewRelaTabEN.orderNum &&
    tzDataType.isNumber(pobjSqlViewRelaTabEN.orderNum) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[序号(orderNum)]的值:[$(pobjSqlViewRelaTabEN.orderNum)], 非法,应该为数值型(In Sql视图相关表(SqlViewRelaTab))!(clsSqlViewRelaTabBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlViewRelaTabEN.prjId) == false &&
    undefined !== pobjSqlViewRelaTabEN.prjId &&
    tzDataType.isString(pobjSqlViewRelaTabEN.prjId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[工程ID(prjId)]的值:[$(pobjSqlViewRelaTabEN.prjId)], 非法,应该为字符型(In Sql视图相关表(SqlViewRelaTab))!(clsSqlViewRelaTabBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlViewRelaTabEN.updDate) == false &&
    undefined !== pobjSqlViewRelaTabEN.updDate &&
    tzDataType.isString(pobjSqlViewRelaTabEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjSqlViewRelaTabEN.updDate)], 非法,应该为字符型(In Sql视图相关表(SqlViewRelaTab))!(clsSqlViewRelaTabBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlViewRelaTabEN.updUserId) == false &&
    undefined !== pobjSqlViewRelaTabEN.updUserId &&
    tzDataType.isString(pobjSqlViewRelaTabEN.updUserId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改用户Id(updUserId)]的值:[$(pobjSqlViewRelaTabEN.updUserId)], 非法,应该为字符型(In Sql视图相关表(SqlViewRelaTab))!(clsSqlViewRelaTabBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlViewRelaTabEN.memo) == false &&
    undefined !== pobjSqlViewRelaTabEN.memo &&
    tzDataType.isString(pobjSqlViewRelaTabEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[说明(memo)]的值:[$(pobjSqlViewRelaTabEN.memo)], 非法,应该为字符型(In Sql视图相关表(SqlViewRelaTab))!(clsSqlViewRelaTabBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
  if (
    IsNullOrEmpty(pobjSqlViewRelaTabEN.sqlViewId) == false &&
    pobjSqlViewRelaTabEN.sqlViewId != '[nuull]' &&
    GetStrLen(pobjSqlViewRelaTabEN.sqlViewId) != 8
  ) {
    throw '(errid:Watl000415)字段[Sql视图Id]作为外键字段,长度应该为8(In Sql视图相关表)!(clsSqlViewRelaTabBL:CheckPropertyNew)';
  }

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function SqlViewRelaTab_CheckProperty4Update(pobjSqlViewRelaTabEN: clsSqlViewRelaTabEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjSqlViewRelaTabEN.relaTabId) == false &&
    GetStrLen(pobjSqlViewRelaTabEN.relaTabId) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[相关表Id(relaTabId)]的长度不能超过8(In Sql视图相关表(SqlViewRelaTab))!值:$(pobjSqlViewRelaTabEN.relaTabId)(clsSqlViewRelaTabBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlViewRelaTabEN.sqlViewId) == false &&
    GetStrLen(pobjSqlViewRelaTabEN.sqlViewId) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[Sql视图Id(sqlViewId)]的长度不能超过8(In Sql视图相关表(SqlViewRelaTab))!值:$(pobjSqlViewRelaTabEN.sqlViewId)(clsSqlViewRelaTabBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlViewRelaTabEN.tabId) == false &&
    GetStrLen(pobjSqlViewRelaTabEN.tabId) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[表ID(tabId)]的长度不能超过8(In Sql视图相关表(SqlViewRelaTab))!值:$(pobjSqlViewRelaTabEN.tabId)(clsSqlViewRelaTabBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlViewRelaTabEN.tabAliases) == false &&
    GetStrLen(pobjSqlViewRelaTabEN.tabAliases) > 100
  ) {
    throw new Error(
      '(errid:Watl000416)字段[表别名(tabAliases)]的长度不能超过100(In Sql视图相关表(SqlViewRelaTab))!值:$(pobjSqlViewRelaTabEN.tabAliases)(clsSqlViewRelaTabBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlViewRelaTabEN.relaFldId) == false &&
    GetStrLen(pobjSqlViewRelaTabEN.relaFldId) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[关系字段(relaFldId)]的长度不能超过8(In Sql视图相关表(SqlViewRelaTab))!值:$(pobjSqlViewRelaTabEN.relaFldId)(clsSqlViewRelaTabBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlViewRelaTabEN.otherFldId) == false &&
    GetStrLen(pobjSqlViewRelaTabEN.otherFldId) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[其他表字段(otherFldId)]的长度不能超过8(In Sql视图相关表(SqlViewRelaTab))!值:$(pobjSqlViewRelaTabEN.otherFldId)(clsSqlViewRelaTabBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlViewRelaTabEN.otherTabId) == false &&
    GetStrLen(pobjSqlViewRelaTabEN.otherTabId) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[其他表Id(otherTabId)]的长度不能超过8(In Sql视图相关表(SqlViewRelaTab))!值:$(pobjSqlViewRelaTabEN.otherTabId)(clsSqlViewRelaTabBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlViewRelaTabEN.svRelaTabTypeId) == false &&
    GetStrLen(pobjSqlViewRelaTabEN.svRelaTabTypeId) > 2
  ) {
    throw new Error(
      '(errid:Watl000416)字段[Sql视图相关表类型Id(svRelaTabTypeId)]的长度不能超过2(In Sql视图相关表(SqlViewRelaTab))!值:$(pobjSqlViewRelaTabEN.svRelaTabTypeId)(clsSqlViewRelaTabBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlViewRelaTabEN.tabRelationTypeId) == false &&
    GetStrLen(pobjSqlViewRelaTabEN.tabRelationTypeId) > 2
  ) {
    throw new Error(
      '(errid:Watl000416)字段[表关系类型Id(tabRelationTypeId)]的长度不能超过2(In Sql视图相关表(SqlViewRelaTab))!值:$(pobjSqlViewRelaTabEN.tabRelationTypeId)(clsSqlViewRelaTabBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlViewRelaTabEN.tabRelationText) == false &&
    GetStrLen(pobjSqlViewRelaTabEN.tabRelationText) > 500
  ) {
    throw new Error(
      '(errid:Watl000416)字段[表关系文本(tabRelationText)]的长度不能超过500(In Sql视图相关表(SqlViewRelaTab))!值:$(pobjSqlViewRelaTabEN.tabRelationText)(clsSqlViewRelaTabBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlViewRelaTabEN.prjId) == false &&
    GetStrLen(pobjSqlViewRelaTabEN.prjId) > 4
  ) {
    throw new Error(
      '(errid:Watl000416)字段[工程ID(prjId)]的长度不能超过4(In Sql视图相关表(SqlViewRelaTab))!值:$(pobjSqlViewRelaTabEN.prjId)(clsSqlViewRelaTabBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlViewRelaTabEN.updDate) == false &&
    GetStrLen(pobjSqlViewRelaTabEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In Sql视图相关表(SqlViewRelaTab))!值:$(pobjSqlViewRelaTabEN.updDate)(clsSqlViewRelaTabBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlViewRelaTabEN.updUserId) == false &&
    GetStrLen(pobjSqlViewRelaTabEN.updUserId) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改用户Id(updUserId)]的长度不能超过20(In Sql视图相关表(SqlViewRelaTab))!值:$(pobjSqlViewRelaTabEN.updUserId)(clsSqlViewRelaTabBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlViewRelaTabEN.memo) == false &&
    GetStrLen(pobjSqlViewRelaTabEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In Sql视图相关表(SqlViewRelaTab))!值:$(pobjSqlViewRelaTabEN.memo)(clsSqlViewRelaTabBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjSqlViewRelaTabEN.relaTabId) == false &&
    undefined !== pobjSqlViewRelaTabEN.relaTabId &&
    tzDataType.isString(pobjSqlViewRelaTabEN.relaTabId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[相关表Id(relaTabId)]的值:[$(pobjSqlViewRelaTabEN.relaTabId)], 非法,应该为字符型(In Sql视图相关表(SqlViewRelaTab))!(clsSqlViewRelaTabBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlViewRelaTabEN.sqlViewId) == false &&
    undefined !== pobjSqlViewRelaTabEN.sqlViewId &&
    tzDataType.isString(pobjSqlViewRelaTabEN.sqlViewId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[Sql视图Id(sqlViewId)]的值:[$(pobjSqlViewRelaTabEN.sqlViewId)], 非法,应该为字符型(In Sql视图相关表(SqlViewRelaTab))!(clsSqlViewRelaTabBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlViewRelaTabEN.tabId) == false &&
    undefined !== pobjSqlViewRelaTabEN.tabId &&
    tzDataType.isString(pobjSqlViewRelaTabEN.tabId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[表ID(tabId)]的值:[$(pobjSqlViewRelaTabEN.tabId)], 非法,应该为字符型(In Sql视图相关表(SqlViewRelaTab))!(clsSqlViewRelaTabBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlViewRelaTabEN.tabAliases) == false &&
    undefined !== pobjSqlViewRelaTabEN.tabAliases &&
    tzDataType.isString(pobjSqlViewRelaTabEN.tabAliases) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[表别名(tabAliases)]的值:[$(pobjSqlViewRelaTabEN.tabAliases)], 非法,应该为字符型(In Sql视图相关表(SqlViewRelaTab))!(clsSqlViewRelaTabBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlViewRelaTabEN.relaFldId) == false &&
    undefined !== pobjSqlViewRelaTabEN.relaFldId &&
    tzDataType.isString(pobjSqlViewRelaTabEN.relaFldId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[关系字段(relaFldId)]的值:[$(pobjSqlViewRelaTabEN.relaFldId)], 非法,应该为字符型(In Sql视图相关表(SqlViewRelaTab))!(clsSqlViewRelaTabBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlViewRelaTabEN.otherFldId) == false &&
    undefined !== pobjSqlViewRelaTabEN.otherFldId &&
    tzDataType.isString(pobjSqlViewRelaTabEN.otherFldId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[其他表字段(otherFldId)]的值:[$(pobjSqlViewRelaTabEN.otherFldId)], 非法,应该为字符型(In Sql视图相关表(SqlViewRelaTab))!(clsSqlViewRelaTabBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlViewRelaTabEN.otherTabId) == false &&
    undefined !== pobjSqlViewRelaTabEN.otherTabId &&
    tzDataType.isString(pobjSqlViewRelaTabEN.otherTabId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[其他表Id(otherTabId)]的值:[$(pobjSqlViewRelaTabEN.otherTabId)], 非法,应该为字符型(In Sql视图相关表(SqlViewRelaTab))!(clsSqlViewRelaTabBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlViewRelaTabEN.svRelaTabTypeId) == false &&
    undefined !== pobjSqlViewRelaTabEN.svRelaTabTypeId &&
    tzDataType.isString(pobjSqlViewRelaTabEN.svRelaTabTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[Sql视图相关表类型Id(svRelaTabTypeId)]的值:[$(pobjSqlViewRelaTabEN.svRelaTabTypeId)], 非法,应该为字符型(In Sql视图相关表(SqlViewRelaTab))!(clsSqlViewRelaTabBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlViewRelaTabEN.tabRelationTypeId) == false &&
    undefined !== pobjSqlViewRelaTabEN.tabRelationTypeId &&
    tzDataType.isString(pobjSqlViewRelaTabEN.tabRelationTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[表关系类型Id(tabRelationTypeId)]的值:[$(pobjSqlViewRelaTabEN.tabRelationTypeId)], 非法,应该为字符型(In Sql视图相关表(SqlViewRelaTab))!(clsSqlViewRelaTabBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlViewRelaTabEN.tabRelationText) == false &&
    undefined !== pobjSqlViewRelaTabEN.tabRelationText &&
    tzDataType.isString(pobjSqlViewRelaTabEN.tabRelationText) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[表关系文本(tabRelationText)]的值:[$(pobjSqlViewRelaTabEN.tabRelationText)], 非法,应该为字符型(In Sql视图相关表(SqlViewRelaTab))!(clsSqlViewRelaTabBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjSqlViewRelaTabEN.orderNum &&
    undefined !== pobjSqlViewRelaTabEN.orderNum &&
    tzDataType.isNumber(pobjSqlViewRelaTabEN.orderNum) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[序号(orderNum)]的值:[$(pobjSqlViewRelaTabEN.orderNum)], 非法,应该为数值型(In Sql视图相关表(SqlViewRelaTab))!(clsSqlViewRelaTabBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlViewRelaTabEN.prjId) == false &&
    undefined !== pobjSqlViewRelaTabEN.prjId &&
    tzDataType.isString(pobjSqlViewRelaTabEN.prjId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[工程ID(prjId)]的值:[$(pobjSqlViewRelaTabEN.prjId)], 非法,应该为字符型(In Sql视图相关表(SqlViewRelaTab))!(clsSqlViewRelaTabBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlViewRelaTabEN.updDate) == false &&
    undefined !== pobjSqlViewRelaTabEN.updDate &&
    tzDataType.isString(pobjSqlViewRelaTabEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjSqlViewRelaTabEN.updDate)], 非法,应该为字符型(In Sql视图相关表(SqlViewRelaTab))!(clsSqlViewRelaTabBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlViewRelaTabEN.updUserId) == false &&
    undefined !== pobjSqlViewRelaTabEN.updUserId &&
    tzDataType.isString(pobjSqlViewRelaTabEN.updUserId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改用户Id(updUserId)]的值:[$(pobjSqlViewRelaTabEN.updUserId)], 非法,应该为字符型(In Sql视图相关表(SqlViewRelaTab))!(clsSqlViewRelaTabBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlViewRelaTabEN.memo) == false &&
    undefined !== pobjSqlViewRelaTabEN.memo &&
    tzDataType.isString(pobjSqlViewRelaTabEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[说明(memo)]的值:[$(pobjSqlViewRelaTabEN.memo)], 非法,应该为字符型(In Sql视图相关表(SqlViewRelaTab))!(clsSqlViewRelaTabBL:CheckProperty4Update)',
    );
  }
  //检查主键是否为Null或者空!
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
  if (
    IsNullOrEmpty(pobjSqlViewRelaTabEN.sqlViewId) == false &&
    pobjSqlViewRelaTabEN.sqlViewId != '[nuull]' &&
    GetStrLen(pobjSqlViewRelaTabEN.sqlViewId) != 8
  ) {
    throw '(errid:Watl000418)字段[Sql视图Id]作为外键字段,长度应该为8(In Sql视图相关表)!(clsSqlViewRelaTabBL:CheckPropertyNew)';
  }
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function SqlViewRelaTab_GetJSONStrByObj(pobjSqlViewRelaTabEN: clsSqlViewRelaTabEN): string {
  pobjSqlViewRelaTabEN.sfUpdFldSetStr = pobjSqlViewRelaTabEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjSqlViewRelaTabEN);
  } catch (objException) {
    const strEx = GetExceptionStr(objException);
    myShowErrorMsg(strEx);
  }
  if (strJson == undefined) return '';
  else return strJson;
}

/**
 * 把一个JSON串转化为一个对象列表
 * 作者:pyf
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
 */
export function SqlViewRelaTab_GetObjLstByJSONStr(strJSON: string): Array<clsSqlViewRelaTabEN> {
  let arrSqlViewRelaTabObjLst = new Array<clsSqlViewRelaTabEN>();
  if (strJSON === '') {
    return arrSqlViewRelaTabObjLst;
  }
  try {
    arrSqlViewRelaTabObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrSqlViewRelaTabObjLst;
  }
  return arrSqlViewRelaTabObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrSqlViewRelaTabObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function SqlViewRelaTab_GetObjLstByJSONObjLst(
  arrSqlViewRelaTabObjLstS: Array<clsSqlViewRelaTabEN>,
): Array<clsSqlViewRelaTabEN> {
  const arrSqlViewRelaTabObjLst = new Array<clsSqlViewRelaTabEN>();
  for (const objInFor of arrSqlViewRelaTabObjLstS) {
    const obj1 = SqlViewRelaTab_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrSqlViewRelaTabObjLst.push(obj1);
  }
  return arrSqlViewRelaTabObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function SqlViewRelaTab_GetObjByJSONStr(strJSON: string): clsSqlViewRelaTabEN {
  let pobjSqlViewRelaTabEN = new clsSqlViewRelaTabEN();
  if (strJSON === '') {
    return pobjSqlViewRelaTabEN;
  }
  try {
    pobjSqlViewRelaTabEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjSqlViewRelaTabEN;
  }
  return pobjSqlViewRelaTabEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function SqlViewRelaTab_GetCombineCondition(
  objSqlViewRelaTabCond: clsSqlViewRelaTabEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objSqlViewRelaTabCond.dicFldComparisonOp,
      clsSqlViewRelaTabEN.con_RelaTabId,
    ) == true
  ) {
    const strComparisonOpRelaTabId: string =
      objSqlViewRelaTabCond.dicFldComparisonOp[clsSqlViewRelaTabEN.con_RelaTabId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSqlViewRelaTabEN.con_RelaTabId,
      objSqlViewRelaTabCond.relaTabId,
      strComparisonOpRelaTabId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSqlViewRelaTabCond.dicFldComparisonOp,
      clsSqlViewRelaTabEN.con_SqlViewId,
    ) == true
  ) {
    const strComparisonOpSqlViewId: string =
      objSqlViewRelaTabCond.dicFldComparisonOp[clsSqlViewRelaTabEN.con_SqlViewId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSqlViewRelaTabEN.con_SqlViewId,
      objSqlViewRelaTabCond.sqlViewId,
      strComparisonOpSqlViewId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSqlViewRelaTabCond.dicFldComparisonOp,
      clsSqlViewRelaTabEN.con_TabId,
    ) == true
  ) {
    const strComparisonOpTabId: string =
      objSqlViewRelaTabCond.dicFldComparisonOp[clsSqlViewRelaTabEN.con_TabId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSqlViewRelaTabEN.con_TabId,
      objSqlViewRelaTabCond.tabId,
      strComparisonOpTabId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSqlViewRelaTabCond.dicFldComparisonOp,
      clsSqlViewRelaTabEN.con_TabAliases,
    ) == true
  ) {
    const strComparisonOpTabAliases: string =
      objSqlViewRelaTabCond.dicFldComparisonOp[clsSqlViewRelaTabEN.con_TabAliases];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSqlViewRelaTabEN.con_TabAliases,
      objSqlViewRelaTabCond.tabAliases,
      strComparisonOpTabAliases,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSqlViewRelaTabCond.dicFldComparisonOp,
      clsSqlViewRelaTabEN.con_RelaFldId,
    ) == true
  ) {
    const strComparisonOpRelaFldId: string =
      objSqlViewRelaTabCond.dicFldComparisonOp[clsSqlViewRelaTabEN.con_RelaFldId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSqlViewRelaTabEN.con_RelaFldId,
      objSqlViewRelaTabCond.relaFldId,
      strComparisonOpRelaFldId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSqlViewRelaTabCond.dicFldComparisonOp,
      clsSqlViewRelaTabEN.con_OtherFldId,
    ) == true
  ) {
    const strComparisonOpOtherFldId: string =
      objSqlViewRelaTabCond.dicFldComparisonOp[clsSqlViewRelaTabEN.con_OtherFldId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSqlViewRelaTabEN.con_OtherFldId,
      objSqlViewRelaTabCond.otherFldId,
      strComparisonOpOtherFldId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSqlViewRelaTabCond.dicFldComparisonOp,
      clsSqlViewRelaTabEN.con_OtherTabId,
    ) == true
  ) {
    const strComparisonOpOtherTabId: string =
      objSqlViewRelaTabCond.dicFldComparisonOp[clsSqlViewRelaTabEN.con_OtherTabId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSqlViewRelaTabEN.con_OtherTabId,
      objSqlViewRelaTabCond.otherTabId,
      strComparisonOpOtherTabId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSqlViewRelaTabCond.dicFldComparisonOp,
      clsSqlViewRelaTabEN.con_SvRelaTabTypeId,
    ) == true
  ) {
    const strComparisonOpSvRelaTabTypeId: string =
      objSqlViewRelaTabCond.dicFldComparisonOp[clsSqlViewRelaTabEN.con_SvRelaTabTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSqlViewRelaTabEN.con_SvRelaTabTypeId,
      objSqlViewRelaTabCond.svRelaTabTypeId,
      strComparisonOpSvRelaTabTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSqlViewRelaTabCond.dicFldComparisonOp,
      clsSqlViewRelaTabEN.con_TabRelationTypeId,
    ) == true
  ) {
    const strComparisonOpTabRelationTypeId: string =
      objSqlViewRelaTabCond.dicFldComparisonOp[clsSqlViewRelaTabEN.con_TabRelationTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSqlViewRelaTabEN.con_TabRelationTypeId,
      objSqlViewRelaTabCond.tabRelationTypeId,
      strComparisonOpTabRelationTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSqlViewRelaTabCond.dicFldComparisonOp,
      clsSqlViewRelaTabEN.con_TabRelationText,
    ) == true
  ) {
    const strComparisonOpTabRelationText: string =
      objSqlViewRelaTabCond.dicFldComparisonOp[clsSqlViewRelaTabEN.con_TabRelationText];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSqlViewRelaTabEN.con_TabRelationText,
      objSqlViewRelaTabCond.tabRelationText,
      strComparisonOpTabRelationText,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSqlViewRelaTabCond.dicFldComparisonOp,
      clsSqlViewRelaTabEN.con_OrderNum,
    ) == true
  ) {
    const strComparisonOpOrderNum: string =
      objSqlViewRelaTabCond.dicFldComparisonOp[clsSqlViewRelaTabEN.con_OrderNum];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsSqlViewRelaTabEN.con_OrderNum,
      objSqlViewRelaTabCond.orderNum,
      strComparisonOpOrderNum,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSqlViewRelaTabCond.dicFldComparisonOp,
      clsSqlViewRelaTabEN.con_PrjId,
    ) == true
  ) {
    const strComparisonOpPrjId: string =
      objSqlViewRelaTabCond.dicFldComparisonOp[clsSqlViewRelaTabEN.con_PrjId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSqlViewRelaTabEN.con_PrjId,
      objSqlViewRelaTabCond.prjId,
      strComparisonOpPrjId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSqlViewRelaTabCond.dicFldComparisonOp,
      clsSqlViewRelaTabEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objSqlViewRelaTabCond.dicFldComparisonOp[clsSqlViewRelaTabEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSqlViewRelaTabEN.con_UpdDate,
      objSqlViewRelaTabCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSqlViewRelaTabCond.dicFldComparisonOp,
      clsSqlViewRelaTabEN.con_UpdUserId,
    ) == true
  ) {
    const strComparisonOpUpdUserId: string =
      objSqlViewRelaTabCond.dicFldComparisonOp[clsSqlViewRelaTabEN.con_UpdUserId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSqlViewRelaTabEN.con_UpdUserId,
      objSqlViewRelaTabCond.updUserId,
      strComparisonOpUpdUserId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSqlViewRelaTabCond.dicFldComparisonOp,
      clsSqlViewRelaTabEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objSqlViewRelaTabCond.dicFldComparisonOp[clsSqlViewRelaTabEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSqlViewRelaTabEN.con_Memo,
      objSqlViewRelaTabCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--SqlViewRelaTab(Sql视图相关表),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strSqlViewId: Sql视图Id(要求唯一的字段)
 * @param strTabAliases: 表别名(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function SqlViewRelaTab_GetUniCondStr(objSqlViewRelaTabEN: clsSqlViewRelaTabEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and SqlViewId = '{0}'", objSqlViewRelaTabEN.sqlViewId);
  strWhereCond += Format(" and TabAliases = '{0}'", objSqlViewRelaTabEN.tabAliases);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--SqlViewRelaTab(Sql视图相关表),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strSqlViewId: Sql视图Id(要求唯一的字段)
 * @param strTabAliases: 表别名(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function SqlViewRelaTab_GetUniCondStr4Update(
  objSqlViewRelaTabEN: clsSqlViewRelaTabEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and RelaTabId <> '{0}'", objSqlViewRelaTabEN.relaTabId);
  strWhereCond += Format(" and SqlViewId = '{0}'", objSqlViewRelaTabEN.sqlViewId);
  strWhereCond += Format(" and TabAliases = '{0}'", objSqlViewRelaTabEN.tabAliases);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objSqlViewRelaTabENS:源对象
 * @param objSqlViewRelaTabENT:目标对象
 */
export function SqlViewRelaTab_GetObjFromJsonObj(
  objSqlViewRelaTabENS: clsSqlViewRelaTabEN,
): clsSqlViewRelaTabEN {
  const objSqlViewRelaTabENT: clsSqlViewRelaTabEN = new clsSqlViewRelaTabEN();
  ObjectAssign(objSqlViewRelaTabENT, objSqlViewRelaTabENS);
  return objSqlViewRelaTabENT;
}
