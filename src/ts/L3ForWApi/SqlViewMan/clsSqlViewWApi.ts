/**
 * 类名:clsSqlViewWApi
 * 表名:SqlView(00050245)
 * 版本:2024.01.20.1(服务器:WIN-SRV103-116)
 * 日期:2024/01/23 16:50:52
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
 * Sql视图(SqlView)
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
import { clsSqlViewEN } from '@/ts/L0Entity/SqlViewMan/clsSqlViewEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const sqlView_Controller = 'SqlViewApi';
export const sqlView_ConstructorName = 'sqlView';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strSqlViewId:关键字
 * @returns 对象
 **/
export async function SqlView_GetObjBySqlViewIdAsync(
  strSqlViewId: string,
): Promise<clsSqlViewEN | null> {
  const strThisFuncName = 'GetObjBySqlViewIdAsync';

  if (IsNullOrEmpty(strSqlViewId) == true) {
    const strMsg = Format('参数:[strSqlViewId]不能为空!(In clsSqlViewWApi.GetObjBySqlViewIdAsync)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strSqlViewId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strSqlViewId]的长度:[{0}]不正确!(clsSqlViewWApi.GetObjBySqlViewIdAsync)',
      strSqlViewId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjBySqlViewId';
  const strUrl = GetWebApiUrl(sqlView_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strSqlViewId,
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
      const objSqlView = SqlView_GetObjFromJsonObj(returnObj);
      return objSqlView;
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
        sqlView_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sqlView_ConstructorName,
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
 * @param strSqlViewId:所给的关键字
 * @returns 对象
 */
export async function SqlView_GetObjBySqlViewIdCache(
  strSqlViewId: string,
  strPrjId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjBySqlViewIdCache';

  if (IsNullOrEmpty(strSqlViewId) == true) {
    const strMsg = Format('参数:[strSqlViewId]不能为空!(In clsSqlViewWApi.GetObjBySqlViewIdCache)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strSqlViewId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strSqlViewId]的长度:[{0}]不正确!(clsSqlViewWApi.GetObjBySqlViewIdCache)',
      strSqlViewId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrSqlViewObjLstCache = await SqlView_GetObjLstCache(strPrjId);
  try {
    const arrSqlViewSel = arrSqlViewObjLstCache.filter((x) => x.sqlViewId == strSqlViewId);
    let objSqlView: clsSqlViewEN;
    if (arrSqlViewSel.length > 0) {
      objSqlView = arrSqlViewSel[0];
      return objSqlView;
    } else {
      if (bolTryAsyncOnce == true) {
        const objSqlViewConst = await SqlView_GetObjBySqlViewIdAsync(strSqlViewId);
        if (objSqlViewConst != null) {
          SqlView_ReFreshThisCache(strPrjId);
          return objSqlViewConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strSqlViewId,
      sqlView_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strSqlViewId:所给的关键字
 * @returns 对象
 */
export async function SqlView_GetObjBySqlViewIdlocalStorage(strSqlViewId: string) {
  const strThisFuncName = 'GetObjBySqlViewIdlocalStorage';

  if (IsNullOrEmpty(strSqlViewId) == true) {
    const strMsg = Format(
      '参数:[strSqlViewId]不能为空!(In clsSqlViewWApi.GetObjBySqlViewIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strSqlViewId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strSqlViewId]的长度:[{0}]不正确!(clsSqlViewWApi.GetObjBySqlViewIdlocalStorage)',
      strSqlViewId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsSqlViewEN._CurrTabName, strSqlViewId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objSqlViewCache: clsSqlViewEN = JSON.parse(strTempObj);
    return objSqlViewCache;
  }
  try {
    const objSqlView = await SqlView_GetObjBySqlViewIdAsync(strSqlViewId);
    if (objSqlView != null) {
      localStorage.setItem(strKey, JSON.stringify(objSqlView));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objSqlView;
    }
    return objSqlView;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strSqlViewId,
      sqlView_ConstructorName,
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
 * @param objSqlView:所给的对象
 * @returns 对象
 */
export async function SqlView_UpdateObjInLstCache(objSqlView: clsSqlViewEN, strPrjId: string) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrSqlViewObjLstCache = await SqlView_GetObjLstCache(strPrjId);
    const obj = arrSqlViewObjLstCache.find(
      (x) => x.relaTabId == objSqlView.relaTabId && x.prjId == objSqlView.prjId,
    );
    if (obj != null) {
      objSqlView.sqlViewId = obj.sqlViewId;
      ObjectAssign(obj, objSqlView);
    } else {
      arrSqlViewObjLstCache.push(objSqlView);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      sqlView_ConstructorName,
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
export async function SqlView_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
  strPrjIdClassfy: string,
) {
  //const strThisFuncName = "func";

  if (IsNullOrEmpty(strPrjIdClassfy) == true) {
    const strMsg = Format('参数:[strPrjIdClassfy]不能为空!(In clsSqlViewWApi.func)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjIdClassfy.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjIdClassfy]的长度:[{0}]不正确!(clsSqlViewWApi.func)',
      strPrjIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName != clsSqlViewEN.con_SqlViewId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsSqlViewEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsSqlViewEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strSqlViewId = strInValue;
  if (IsNullOrEmpty(strInValue) == true) {
    return '';
  }
  const objSqlView = await SqlView_GetObjBySqlViewIdCache(strSqlViewId, strPrjIdClassfy);
  if (objSqlView == null) return '';
  if (objSqlView.GetFldValue(strOutFldName) == null) return '';
  return objSqlView.GetFldValue(strOutFldName).toString();
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
export function SqlView_SortFunDefa(a: clsSqlViewEN, b: clsSqlViewEN): number {
  return a.sqlViewId.localeCompare(b.sqlViewId);
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
export function SqlView_SortFunDefa2Fld(a: clsSqlViewEN, b: clsSqlViewEN): number {
  if (a.sqlViewText == b.sqlViewText) return a.sqlViewText4Gene.localeCompare(b.sqlViewText4Gene);
  else return a.sqlViewText.localeCompare(b.sqlViewText);
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
export function SqlView_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsSqlViewEN.con_SqlViewId:
        return (a: clsSqlViewEN, b: clsSqlViewEN) => {
          return a.sqlViewId.localeCompare(b.sqlViewId);
        };
      case clsSqlViewEN.con_SqlViewText:
        return (a: clsSqlViewEN, b: clsSqlViewEN) => {
          if (a.sqlViewText == null) return -1;
          if (b.sqlViewText == null) return 1;
          return a.sqlViewText.localeCompare(b.sqlViewText);
        };
      case clsSqlViewEN.con_SqlViewText4Gene:
        return (a: clsSqlViewEN, b: clsSqlViewEN) => {
          if (a.sqlViewText4Gene == null) return -1;
          if (b.sqlViewText4Gene == null) return 1;
          return a.sqlViewText4Gene.localeCompare(b.sqlViewText4Gene);
        };
      case clsSqlViewEN.con_TextResouce:
        return (a: clsSqlViewEN, b: clsSqlViewEN) => {
          return a.textResouce.localeCompare(b.textResouce);
        };
      case clsSqlViewEN.con_TextResourceTypeId:
        return (a: clsSqlViewEN, b: clsSqlViewEN) => {
          return a.textResourceTypeId.localeCompare(b.textResourceTypeId);
        };
      case clsSqlViewEN.con_RelaTabId:
        return (a: clsSqlViewEN, b: clsSqlViewEN) => {
          return a.relaTabId.localeCompare(b.relaTabId);
        };
      case clsSqlViewEN.con_AnalysisDate:
        return (a: clsSqlViewEN, b: clsSqlViewEN) => {
          if (a.analysisDate == null) return -1;
          if (b.analysisDate == null) return 1;
          return a.analysisDate.localeCompare(b.analysisDate);
        };
      case clsSqlViewEN.con_GeneCodeDate:
        return (a: clsSqlViewEN, b: clsSqlViewEN) => {
          if (a.geneCodeDate == null) return -1;
          if (b.geneCodeDate == null) return 1;
          return a.geneCodeDate.localeCompare(b.geneCodeDate);
        };
      case clsSqlViewEN.con_CreateDate:
        return (a: clsSqlViewEN, b: clsSqlViewEN) => {
          if (a.createDate == null) return -1;
          if (b.createDate == null) return 1;
          return a.createDate.localeCompare(b.createDate);
        };
      case clsSqlViewEN.con_TopPercent:
        return (a: clsSqlViewEN, b: clsSqlViewEN) => {
          if (a.topPercent == null) return -1;
          if (b.topPercent == null) return 1;
          return a.topPercent.localeCompare(b.topPercent);
        };
      case clsSqlViewEN.con_DistinctFlag:
        return (a: clsSqlViewEN, b: clsSqlViewEN) => {
          if (a.distinctFlag == null) return -1;
          if (b.distinctFlag == null) return 1;
          return a.distinctFlag.localeCompare(b.distinctFlag);
        };
      case clsSqlViewEN.con_WhereCondition:
        return (a: clsSqlViewEN, b: clsSqlViewEN) => {
          if (a.whereCondition == null) return -1;
          if (b.whereCondition == null) return 1;
          return a.whereCondition.localeCompare(b.whereCondition);
        };
      case clsSqlViewEN.con_GroupBy:
        return (a: clsSqlViewEN, b: clsSqlViewEN) => {
          if (a.groupBy == null) return -1;
          if (b.groupBy == null) return 1;
          return a.groupBy.localeCompare(b.groupBy);
        };
      case clsSqlViewEN.con_HavingStr:
        return (a: clsSqlViewEN, b: clsSqlViewEN) => {
          if (a.havingStr == null) return -1;
          if (b.havingStr == null) return 1;
          return a.havingStr.localeCompare(b.havingStr);
        };
      case clsSqlViewEN.con_OrderBy:
        return (a: clsSqlViewEN, b: clsSqlViewEN) => {
          if (a.orderBy == null) return -1;
          if (b.orderBy == null) return 1;
          return a.orderBy.localeCompare(b.orderBy);
        };
      case clsSqlViewEN.con_ErrMsg:
        return (a: clsSqlViewEN, b: clsSqlViewEN) => {
          if (a.errMsg == null) return -1;
          if (b.errMsg == null) return 1;
          return a.errMsg.localeCompare(b.errMsg);
        };
      case clsSqlViewEN.con_PrjId:
        return (a: clsSqlViewEN, b: clsSqlViewEN) => {
          return a.prjId.localeCompare(b.prjId);
        };
      case clsSqlViewEN.con_UpdDate:
        return (a: clsSqlViewEN, b: clsSqlViewEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsSqlViewEN.con_UpdUserId:
        return (a: clsSqlViewEN, b: clsSqlViewEN) => {
          if (a.updUserId == null) return -1;
          if (b.updUserId == null) return 1;
          return a.updUserId.localeCompare(b.updUserId);
        };
      case clsSqlViewEN.con_Memo:
        return (a: clsSqlViewEN, b: clsSqlViewEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[SqlView]中不存在!(in ${sqlView_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsSqlViewEN.con_SqlViewId:
        return (a: clsSqlViewEN, b: clsSqlViewEN) => {
          return b.sqlViewId.localeCompare(a.sqlViewId);
        };
      case clsSqlViewEN.con_SqlViewText:
        return (a: clsSqlViewEN, b: clsSqlViewEN) => {
          if (b.sqlViewText == null) return -1;
          if (a.sqlViewText == null) return 1;
          return b.sqlViewText.localeCompare(a.sqlViewText);
        };
      case clsSqlViewEN.con_SqlViewText4Gene:
        return (a: clsSqlViewEN, b: clsSqlViewEN) => {
          if (b.sqlViewText4Gene == null) return -1;
          if (a.sqlViewText4Gene == null) return 1;
          return b.sqlViewText4Gene.localeCompare(a.sqlViewText4Gene);
        };
      case clsSqlViewEN.con_TextResouce:
        return (a: clsSqlViewEN, b: clsSqlViewEN) => {
          return b.textResouce.localeCompare(a.textResouce);
        };
      case clsSqlViewEN.con_TextResourceTypeId:
        return (a: clsSqlViewEN, b: clsSqlViewEN) => {
          return b.textResourceTypeId.localeCompare(a.textResourceTypeId);
        };
      case clsSqlViewEN.con_RelaTabId:
        return (a: clsSqlViewEN, b: clsSqlViewEN) => {
          return b.relaTabId.localeCompare(a.relaTabId);
        };
      case clsSqlViewEN.con_AnalysisDate:
        return (a: clsSqlViewEN, b: clsSqlViewEN) => {
          if (b.analysisDate == null) return -1;
          if (a.analysisDate == null) return 1;
          return b.analysisDate.localeCompare(a.analysisDate);
        };
      case clsSqlViewEN.con_GeneCodeDate:
        return (a: clsSqlViewEN, b: clsSqlViewEN) => {
          if (b.geneCodeDate == null) return -1;
          if (a.geneCodeDate == null) return 1;
          return b.geneCodeDate.localeCompare(a.geneCodeDate);
        };
      case clsSqlViewEN.con_CreateDate:
        return (a: clsSqlViewEN, b: clsSqlViewEN) => {
          if (b.createDate == null) return -1;
          if (a.createDate == null) return 1;
          return b.createDate.localeCompare(a.createDate);
        };
      case clsSqlViewEN.con_TopPercent:
        return (a: clsSqlViewEN, b: clsSqlViewEN) => {
          if (b.topPercent == null) return -1;
          if (a.topPercent == null) return 1;
          return b.topPercent.localeCompare(a.topPercent);
        };
      case clsSqlViewEN.con_DistinctFlag:
        return (a: clsSqlViewEN, b: clsSqlViewEN) => {
          if (b.distinctFlag == null) return -1;
          if (a.distinctFlag == null) return 1;
          return b.distinctFlag.localeCompare(a.distinctFlag);
        };
      case clsSqlViewEN.con_WhereCondition:
        return (a: clsSqlViewEN, b: clsSqlViewEN) => {
          if (b.whereCondition == null) return -1;
          if (a.whereCondition == null) return 1;
          return b.whereCondition.localeCompare(a.whereCondition);
        };
      case clsSqlViewEN.con_GroupBy:
        return (a: clsSqlViewEN, b: clsSqlViewEN) => {
          if (b.groupBy == null) return -1;
          if (a.groupBy == null) return 1;
          return b.groupBy.localeCompare(a.groupBy);
        };
      case clsSqlViewEN.con_HavingStr:
        return (a: clsSqlViewEN, b: clsSqlViewEN) => {
          if (b.havingStr == null) return -1;
          if (a.havingStr == null) return 1;
          return b.havingStr.localeCompare(a.havingStr);
        };
      case clsSqlViewEN.con_OrderBy:
        return (a: clsSqlViewEN, b: clsSqlViewEN) => {
          if (b.orderBy == null) return -1;
          if (a.orderBy == null) return 1;
          return b.orderBy.localeCompare(a.orderBy);
        };
      case clsSqlViewEN.con_ErrMsg:
        return (a: clsSqlViewEN, b: clsSqlViewEN) => {
          if (b.errMsg == null) return -1;
          if (a.errMsg == null) return 1;
          return b.errMsg.localeCompare(a.errMsg);
        };
      case clsSqlViewEN.con_PrjId:
        return (a: clsSqlViewEN, b: clsSqlViewEN) => {
          return b.prjId.localeCompare(a.prjId);
        };
      case clsSqlViewEN.con_UpdDate:
        return (a: clsSqlViewEN, b: clsSqlViewEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsSqlViewEN.con_UpdUserId:
        return (a: clsSqlViewEN, b: clsSqlViewEN) => {
          if (b.updUserId == null) return -1;
          if (a.updUserId == null) return 1;
          return b.updUserId.localeCompare(a.updUserId);
        };
      case clsSqlViewEN.con_Memo:
        return (a: clsSqlViewEN, b: clsSqlViewEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[SqlView]中不存在!(in ${sqlView_ConstructorName}.${strThisFuncName})`;
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
export async function SqlView_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsSqlViewEN.con_SqlViewId:
      return (obj: clsSqlViewEN) => {
        return obj.sqlViewId === value;
      };
    case clsSqlViewEN.con_SqlViewText:
      return (obj: clsSqlViewEN) => {
        return obj.sqlViewText === value;
      };
    case clsSqlViewEN.con_SqlViewText4Gene:
      return (obj: clsSqlViewEN) => {
        return obj.sqlViewText4Gene === value;
      };
    case clsSqlViewEN.con_TextResouce:
      return (obj: clsSqlViewEN) => {
        return obj.textResouce === value;
      };
    case clsSqlViewEN.con_TextResourceTypeId:
      return (obj: clsSqlViewEN) => {
        return obj.textResourceTypeId === value;
      };
    case clsSqlViewEN.con_RelaTabId:
      return (obj: clsSqlViewEN) => {
        return obj.relaTabId === value;
      };
    case clsSqlViewEN.con_AnalysisDate:
      return (obj: clsSqlViewEN) => {
        return obj.analysisDate === value;
      };
    case clsSqlViewEN.con_GeneCodeDate:
      return (obj: clsSqlViewEN) => {
        return obj.geneCodeDate === value;
      };
    case clsSqlViewEN.con_CreateDate:
      return (obj: clsSqlViewEN) => {
        return obj.createDate === value;
      };
    case clsSqlViewEN.con_TopPercent:
      return (obj: clsSqlViewEN) => {
        return obj.topPercent === value;
      };
    case clsSqlViewEN.con_DistinctFlag:
      return (obj: clsSqlViewEN) => {
        return obj.distinctFlag === value;
      };
    case clsSqlViewEN.con_WhereCondition:
      return (obj: clsSqlViewEN) => {
        return obj.whereCondition === value;
      };
    case clsSqlViewEN.con_GroupBy:
      return (obj: clsSqlViewEN) => {
        return obj.groupBy === value;
      };
    case clsSqlViewEN.con_HavingStr:
      return (obj: clsSqlViewEN) => {
        return obj.havingStr === value;
      };
    case clsSqlViewEN.con_OrderBy:
      return (obj: clsSqlViewEN) => {
        return obj.orderBy === value;
      };
    case clsSqlViewEN.con_ErrMsg:
      return (obj: clsSqlViewEN) => {
        return obj.errMsg === value;
      };
    case clsSqlViewEN.con_PrjId:
      return (obj: clsSqlViewEN) => {
        return obj.prjId === value;
      };
    case clsSqlViewEN.con_UpdDate:
      return (obj: clsSqlViewEN) => {
        return obj.updDate === value;
      };
    case clsSqlViewEN.con_UpdUserId:
      return (obj: clsSqlViewEN) => {
        return obj.updUserId === value;
      };
    case clsSqlViewEN.con_Memo:
      return (obj: clsSqlViewEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[SqlView]中不存在!(in ${sqlView_ConstructorName}.${strThisFuncName})`;
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
export async function SqlView_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
  strPrjIdClassfy: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (IsNullOrEmpty(strPrjIdClassfy) == true) {
    const strMsg = Format('参数:[strPrjIdClassfy]不能为空!(In clsSqlViewWApi.funcKey)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjIdClassfy.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjIdClassfy]的长度:[{0}]不正确!(clsSqlViewWApi.funcKey)',
      strPrjIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName == clsSqlViewEN.con_SqlViewId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrSqlView = await SqlView_GetObjLstCache(strPrjIdClassfy);
  if (arrSqlView == null) return [];
  let arrSqlViewSel = arrSqlView;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrSqlViewSel = arrSqlViewSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrSqlViewSel = arrSqlViewSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrSqlViewSel = arrSqlViewSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrSqlViewSel = arrSqlViewSel.filter((x) => x.GetFldValue(strInFldName) == strInValue);
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrSqlViewSel = arrSqlViewSel.filter((x) => x.GetFldValue(strInFldName) == strInValue);
          break;
        case enumComparisonOp.NotEqual_02:
          arrSqlViewSel = arrSqlViewSel.filter((x) => x.GetFldValue(strInFldName) != strInValue);
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrSqlViewSel = arrSqlViewSel.filter((x) => x.GetFldValue(strInFldName) >= strInValue);
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrSqlViewSel = arrSqlViewSel.filter((x) => x.GetFldValue(strInFldName) <= strInValue);
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrSqlViewSel = arrSqlViewSel.filter((x) => x.GetFldValue(strInFldName) > strInValue);
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrSqlViewSel = arrSqlViewSel.filter((x) => x.GetFldValue(strInFldName) <= strInValue);
          break;
      }
      break;
  }
  if (arrSqlViewSel.length == 0) return [];
  return arrSqlViewSel.map((x) => x.sqlViewId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function SqlView_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(sqlView_Controller, strAction);

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
        sqlView_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sqlView_ConstructorName,
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
export async function SqlView_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(sqlView_Controller, strAction);

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
        sqlView_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sqlView_ConstructorName,
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
export async function SqlView_GetFirstObjAsync(strWhereCond: string): Promise<clsSqlViewEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(sqlView_Controller, strAction);

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
      const objSqlView = SqlView_GetObjFromJsonObj(returnObj);
      return objSqlView;
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
        sqlView_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sqlView_ConstructorName,
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
export async function SqlView_GetObjLstClientCache(strPrjId: string) {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsSqlViewEN.WhereFormat) == false) {
    strWhereCond = Format(clsSqlViewEN.WhereFormat, strPrjId);
  } else {
    strWhereCond = Format("PrjId='{0}'", strPrjId);
  }
  const strKey = Format('{0}_{1}', clsSqlViewEN._CurrTabName, strPrjId);
  if (IsNullOrEmpty(clsSqlViewEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsSqlViewEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrSqlViewExObjLstCache: Array<clsSqlViewEN> = CacheHelper.Get(strKey);
    const arrSqlViewObjLstT = SqlView_GetObjLstByJSONObjLst(arrSqlViewExObjLstCache);
    return arrSqlViewObjLstT;
  }
  try {
    const arrSqlViewExObjLst = await SqlView_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrSqlViewExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrSqlViewExObjLst.length,
    );
    console.log(strInfo);
    return arrSqlViewExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      sqlView_ConstructorName,
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
export async function SqlView_GetObjLstlocalStorage(strPrjId: string) {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsSqlViewEN.WhereFormat) == false) {
    strWhereCond = Format(clsSqlViewEN.WhereFormat, strPrjId);
  } else {
    strWhereCond = Format("{0}='{1}'", clsSqlViewEN.con_PrjId, strPrjId);
  }
  const strKey = Format('{0}_{1}', clsSqlViewEN._CurrTabName, strPrjId);
  if (IsNullOrEmpty(clsSqlViewEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsSqlViewEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrSqlViewExObjLstCache: Array<clsSqlViewEN> = JSON.parse(strTempObjLst);
    const arrSqlViewObjLstT = SqlView_GetObjLstByJSONObjLst(arrSqlViewExObjLstCache);
    return arrSqlViewObjLstT;
  }
  try {
    const arrSqlViewExObjLst = await SqlView_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrSqlViewExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrSqlViewExObjLst.length,
    );
    console.log(strInfo);
    return arrSqlViewExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      sqlView_ConstructorName,
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
export async function SqlView_GetObjLstlocalStoragePureCache(strPrjId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsSqlViewEN._CurrTabName, strPrjId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrSqlViewObjLstCache: Array<clsSqlViewEN> = JSON.parse(strTempObjLst);
    return arrSqlViewObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function SqlView_GetObjLstAsync(strWhereCond: string): Promise<Array<clsSqlViewEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(sqlView_Controller, strAction);

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
          sqlView_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = SqlView_GetObjLstByJSONObjLst(returnObjLst);
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
        sqlView_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sqlView_ConstructorName,
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
export async function SqlView_GetObjLstsessionStorage(strPrjId: string) {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsSqlViewEN.WhereFormat) == false) {
    strWhereCond = Format(clsSqlViewEN.WhereFormat, strPrjId);
  } else {
    strWhereCond = Format("{0}='{1}'", clsSqlViewEN.con_PrjId, strPrjId);
  }
  const strKey = Format('{0}_{1}', clsSqlViewEN._CurrTabName, strPrjId);
  if (IsNullOrEmpty(clsSqlViewEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsSqlViewEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrSqlViewExObjLstCache: Array<clsSqlViewEN> = JSON.parse(strTempObjLst);
    const arrSqlViewObjLstT = SqlView_GetObjLstByJSONObjLst(arrSqlViewExObjLstCache);
    return arrSqlViewObjLstT;
  }
  try {
    const arrSqlViewExObjLst = await SqlView_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrSqlViewExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrSqlViewExObjLst.length,
    );
    console.log(strInfo);
    return arrSqlViewExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      sqlView_ConstructorName,
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
export async function SqlView_GetObjLstsessionStoragePureCache(strPrjId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsSqlViewEN._CurrTabName, strPrjId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrSqlViewObjLstCache: Array<clsSqlViewEN> = JSON.parse(strTempObjLst);
    return arrSqlViewObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function SqlView_GetObjLstCache(strPrjId: string): Promise<Array<clsSqlViewEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format('参数:[strPrjId]不能为空！(In clsSqlViewWApi.SqlView_GetObjLstCache)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确！(clsSqlViewWApi.SqlView_GetObjLstCache)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  let arrSqlViewObjLstCache;
  switch (clsSqlViewEN.CacheModeId) {
    case '04': //sessionStorage
      arrSqlViewObjLstCache = await SqlView_GetObjLstsessionStorage(strPrjId);
      break;
    case '03': //localStorage
      arrSqlViewObjLstCache = await SqlView_GetObjLstlocalStorage(strPrjId);
      break;
    case '02': //ClientCache
      arrSqlViewObjLstCache = await SqlView_GetObjLstClientCache(strPrjId);
      break;
    default:
      arrSqlViewObjLstCache = await SqlView_GetObjLstClientCache(strPrjId);
      break;
  }
  return arrSqlViewObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function SqlView_GetObjLstPureCache(strPrjId: string) {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrSqlViewObjLstCache;
  switch (clsSqlViewEN.CacheModeId) {
    case '04': //sessionStorage
      arrSqlViewObjLstCache = await SqlView_GetObjLstsessionStoragePureCache(strPrjId);
      break;
    case '03': //localStorage
      arrSqlViewObjLstCache = await SqlView_GetObjLstlocalStoragePureCache(strPrjId);
      break;
    case '02': //ClientCache
      arrSqlViewObjLstCache = null;
      break;
    default:
      arrSqlViewObjLstCache = null;
      break;
  }
  return arrSqlViewObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrSqlViewIdCond:条件对象
 * @returns 对象列表子集
 */
export async function SqlView_GetSubObjLstCache(objSqlViewCond: clsSqlViewEN, strPrjId: string) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrSqlViewObjLstCache = await SqlView_GetObjLstCache(strPrjId);
  let arrSqlViewSel = arrSqlViewObjLstCache;
  if (objSqlViewCond.sfFldComparisonOp == null || objSqlViewCond.sfFldComparisonOp == '')
    return arrSqlViewSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objSqlViewCond.sfFldComparisonOp,
  );
  //console.log("clsSqlViewWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objSqlViewCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrSqlViewSel = arrSqlViewSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objSqlViewCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrSqlViewSel = arrSqlViewSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrSqlViewSel = arrSqlViewSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrSqlViewSel = arrSqlViewSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrSqlViewSel = arrSqlViewSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrSqlViewSel = arrSqlViewSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrSqlViewSel = arrSqlViewSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrSqlViewSel = arrSqlViewSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrSqlViewSel = arrSqlViewSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrSqlViewSel = arrSqlViewSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrSqlViewSel = arrSqlViewSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrSqlViewSel = arrSqlViewSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrSqlViewSel = arrSqlViewSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrSqlViewSel = arrSqlViewSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrSqlViewSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objSqlViewCond),
      sqlView_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsSqlViewEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrSqlViewId:关键字列表
 * @returns 对象列表
 **/
export async function SqlView_GetObjLstBySqlViewIdLstAsync(
  arrSqlViewId: Array<string>,
): Promise<Array<clsSqlViewEN>> {
  const strThisFuncName = 'GetObjLstBySqlViewIdLstAsync';
  const strAction = 'GetObjLstBySqlViewIdLst';
  const strUrl = GetWebApiUrl(sqlView_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrSqlViewId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          sqlView_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = SqlView_GetObjLstByJSONObjLst(returnObjLst);
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
        sqlView_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sqlView_ConstructorName,
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
 * @param arrstrSqlViewIdLst:关键字列表
 * @returns 对象列表
 */
export async function SqlView_GetObjLstBySqlViewIdLstCache(
  arrSqlViewIdLst: Array<string>,
  strPrjId: string,
) {
  const strThisFuncName = 'GetObjLstBySqlViewIdLstCache';
  try {
    const arrSqlViewObjLstCache = await SqlView_GetObjLstCache(strPrjId);
    const arrSqlViewSel = arrSqlViewObjLstCache.filter(
      (x) => arrSqlViewIdLst.indexOf(x.sqlViewId) > -1,
    );
    return arrSqlViewSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrSqlViewIdLst.join(','),
      sqlView_ConstructorName,
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
export async function SqlView_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsSqlViewEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(sqlView_Controller, strAction);

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
          sqlView_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = SqlView_GetObjLstByJSONObjLst(returnObjLst);
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
        sqlView_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sqlView_ConstructorName,
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
export async function SqlView_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsSqlViewEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(sqlView_Controller, strAction);

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
          sqlView_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = SqlView_GetObjLstByJSONObjLst(returnObjLst);
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
        sqlView_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sqlView_ConstructorName,
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
export async function SqlView_GetObjLstByPagerCache(objPagerPara: stuPagerPara, strPrjId: string) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsSqlViewEN>();
  const arrSqlViewObjLstCache = await SqlView_GetObjLstCache(strPrjId);
  if (arrSqlViewObjLstCache.length == 0) return arrSqlViewObjLstCache;
  let arrSqlViewSel = arrSqlViewObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objSqlViewCond = new clsSqlViewEN();
  ObjectAssign(objSqlViewCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsSqlViewWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrSqlViewSel = arrSqlViewSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objSqlViewCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrSqlViewSel = arrSqlViewSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrSqlViewSel = arrSqlViewSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrSqlViewSel = arrSqlViewSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrSqlViewSel = arrSqlViewSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrSqlViewSel = arrSqlViewSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrSqlViewSel = arrSqlViewSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrSqlViewSel = arrSqlViewSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrSqlViewSel = arrSqlViewSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrSqlViewSel = arrSqlViewSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrSqlViewSel = arrSqlViewSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrSqlViewSel = arrSqlViewSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrSqlViewSel = arrSqlViewSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrSqlViewSel = arrSqlViewSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrSqlViewSel = arrSqlViewSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrSqlViewSel.length == 0) return arrSqlViewSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrSqlViewSel = arrSqlViewSel.sort(SqlView_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrSqlViewSel = arrSqlViewSel.sort(objPagerPara.sortFun);
    }
    arrSqlViewSel = arrSqlViewSel.slice(intStart, intEnd);
    return arrSqlViewSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      sqlView_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsSqlViewEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function SqlView_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsSqlViewEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsSqlViewEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(sqlView_Controller, strAction);

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
          sqlView_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = SqlView_GetObjLstByJSONObjLst(returnObjLst);
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
        sqlView_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sqlView_ConstructorName,
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
 * @param strSqlViewId:关键字
 * @returns 获取删除的结果
 **/
export async function SqlView_DelRecordAsync(strSqlViewId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(sqlView_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strSqlViewId);

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
        sqlView_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sqlView_ConstructorName,
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
 * @param arrSqlViewId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function SqlView_DelSqlViewsAsync(arrSqlViewId: Array<string>): Promise<number> {
  const strThisFuncName = 'DelSqlViewsAsync';
  const strAction = 'DelSqlViews';
  const strUrl = GetWebApiUrl(sqlView_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrSqlViewId, config);
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
        sqlView_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sqlView_ConstructorName,
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
export async function SqlView_DelSqlViewsByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'DelSqlViewsByCondAsync';
  const strAction = 'DelSqlViewsByCond';
  const strUrl = GetWebApiUrl(sqlView_Controller, strAction);

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
        sqlView_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sqlView_ConstructorName,
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
 * @param objSqlViewEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function SqlView_AddNewRecordAsync(objSqlViewEN: clsSqlViewEN): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objSqlViewEN);
  const strUrl = GetWebApiUrl(sqlView_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objSqlViewEN, config);
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
        sqlView_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sqlView_ConstructorName,
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
 * @param objSqlViewEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function SqlView_AddNewRecordWithMaxIdAsync(
  objSqlViewEN: clsSqlViewEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(sqlView_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objSqlViewEN, config);
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
        sqlView_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sqlView_ConstructorName,
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
 * @param objSqlViewEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function SqlView_AddNewRecordWithReturnKeyAsync(
  objSqlViewEN: clsSqlViewEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(sqlView_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objSqlViewEN, config);
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
        sqlView_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sqlView_ConstructorName,
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
 * @param objSqlViewEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function SqlView_UpdateRecordAsync(objSqlViewEN: clsSqlViewEN): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objSqlViewEN.sfUpdFldSetStr === undefined ||
    objSqlViewEN.sfUpdFldSetStr === null ||
    objSqlViewEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objSqlViewEN.sqlViewId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(sqlView_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objSqlViewEN, config);
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
        sqlView_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sqlView_ConstructorName,
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
 * @param objSqlViewEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function SqlView_UpdateWithConditionAsync(
  objSqlViewEN: clsSqlViewEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objSqlViewEN.sfUpdFldSetStr === undefined ||
    objSqlViewEN.sfUpdFldSetStr === null ||
    objSqlViewEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objSqlViewEN.sqlViewId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(sqlView_Controller, strAction);
  objSqlViewEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objSqlViewEN, config);
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
        sqlView_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sqlView_ConstructorName,
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
 * @param objstrSqlViewIdCond:条件对象
 * @returns 对象列表子集
 */
export async function SqlView_IsExistRecordCache(objSqlViewCond: clsSqlViewEN, strPrjId: string) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrSqlViewObjLstCache = await SqlView_GetObjLstCache(strPrjId);
  if (arrSqlViewObjLstCache == null) return false;
  let arrSqlViewSel = arrSqlViewObjLstCache;
  if (objSqlViewCond.sfFldComparisonOp == null || objSqlViewCond.sfFldComparisonOp == '')
    return arrSqlViewSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objSqlViewCond.sfFldComparisonOp,
  );
  //console.log("clsSqlViewWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objSqlViewCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objSqlViewCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrSqlViewSel = arrSqlViewSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrSqlViewSel = arrSqlViewSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrSqlViewSel = arrSqlViewSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrSqlViewSel = arrSqlViewSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrSqlViewSel = arrSqlViewSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrSqlViewSel = arrSqlViewSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrSqlViewSel = arrSqlViewSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrSqlViewSel = arrSqlViewSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrSqlViewSel = arrSqlViewSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrSqlViewSel = arrSqlViewSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrSqlViewSel = arrSqlViewSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrSqlViewSel = arrSqlViewSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrSqlViewSel = arrSqlViewSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrSqlViewSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objSqlViewCond),
      sqlView_ConstructorName,
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
export async function SqlView_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(sqlView_Controller, strAction);

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
        sqlView_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sqlView_ConstructorName,
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
 * @param strSqlViewId:所给的关键字
 * @returns 对象
 */
export async function SqlView_IsExistCache(strSqlViewId: string, strPrjId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrSqlViewObjLstCache = await SqlView_GetObjLstCache(strPrjId);
  if (arrSqlViewObjLstCache == null) return false;
  try {
    const arrSqlViewSel = arrSqlViewObjLstCache.filter((x) => x.sqlViewId == strSqlViewId);
    if (arrSqlViewSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strSqlViewId,
      sqlView_ConstructorName,
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
 * @param strSqlViewId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function SqlView_IsExistAsync(strSqlViewId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(sqlView_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strSqlViewId,
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
        sqlView_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sqlView_ConstructorName,
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
export async function SqlView_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(sqlView_Controller, strAction);

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
        sqlView_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sqlView_ConstructorName,
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
 * @param objSqlViewCond:条件对象
 * @returns 对象列表记录数
 */
export async function SqlView_GetRecCountByCondCache(
  objSqlViewCond: clsSqlViewEN,
  strPrjId: string,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrSqlViewObjLstCache = await SqlView_GetObjLstCache(strPrjId);
  if (arrSqlViewObjLstCache == null) return 0;
  let arrSqlViewSel = arrSqlViewObjLstCache;
  if (objSqlViewCond.sfFldComparisonOp == null || objSqlViewCond.sfFldComparisonOp == '')
    return arrSqlViewSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objSqlViewCond.sfFldComparisonOp,
  );
  //console.log("clsSqlViewWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objSqlViewCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrSqlViewSel = arrSqlViewSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objSqlViewCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrSqlViewSel = arrSqlViewSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrSqlViewSel = arrSqlViewSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrSqlViewSel = arrSqlViewSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrSqlViewSel = arrSqlViewSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrSqlViewSel = arrSqlViewSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrSqlViewSel = arrSqlViewSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrSqlViewSel = arrSqlViewSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrSqlViewSel = arrSqlViewSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrSqlViewSel = arrSqlViewSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrSqlViewSel = arrSqlViewSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrSqlViewSel = arrSqlViewSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrSqlViewSel = arrSqlViewSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrSqlViewSel = arrSqlViewSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrSqlViewSel = arrSqlViewSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrSqlViewSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objSqlViewCond),
      sqlView_ConstructorName,
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
export async function SqlView_GetMaxStrIdAsync(): Promise<string> {
  const strThisFuncName = 'GetMaxStrIdAsync';
  const strAction = 'GetMaxStrId';
  const strUrl = GetWebApiUrl(sqlView_Controller, strAction);

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
        sqlView_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sqlView_ConstructorName,
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
export async function SqlView_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(sqlView_Controller, strAction);

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
        sqlView_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sqlView_ConstructorName,
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
export function SqlView_GetWebApiUrl(strController: string, strAction: string): string {
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
export function SqlView_ReFreshCache(strPrjId: string): void {
  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空!(In clsSqlViewWApi.clsSqlViewWApi.ReFreshCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确!(clsSqlViewWApi.clsSqlViewWApi.ReFreshCache)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  const strMsg: string = Format('刷新缓存成功!');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = Format('{0}_{1}', clsSqlViewEN._CurrTabName, strPrjId);
  switch (clsSqlViewEN.CacheModeId) {
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
export function SqlView_ReFreshThisCache(strPrjId: string): void {
  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format('参数:[strPrjId]不能为空!(In clsSqlViewWApi.SqlView_ReFreshThisCache)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确!(clsSqlViewWApi.SqlView_ReFreshThisCache)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = Format('{0}_{1}', clsSqlViewEN._CurrTabName, strPrjId);
    switch (clsSqlViewEN.CacheModeId) {
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
export function SqlView_CheckPropertyNew(pobjSqlViewEN: clsSqlViewEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjSqlViewEN.textResouce) === true) {
    throw new Error(
      '(errid:Watl000411)字段[文本来源]不能为空(In Sql视图)!(clsSqlViewBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlViewEN.textResourceTypeId) === true ||
    pobjSqlViewEN.textResourceTypeId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000411)字段[文本来源类型Id]不能为空(In Sql视图)!(clsSqlViewBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlViewEN.relaTabId) === true ||
    pobjSqlViewEN.relaTabId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000411)字段[相关表Id]不能为空(In Sql视图)!(clsSqlViewBL:CheckPropertyNew0)',
    );
  }
  if (IsNullOrEmpty(pobjSqlViewEN.prjId) === true || pobjSqlViewEN.prjId.toString() === '0') {
    throw new Error(
      '(errid:Watl000411)字段[工程ID]不能为空(In Sql视图)!(clsSqlViewBL:CheckPropertyNew0)',
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (IsNullOrEmpty(pobjSqlViewEN.sqlViewId) == false && GetStrLen(pobjSqlViewEN.sqlViewId) > 8) {
    throw new Error(
      '(errid:Watl000413)字段[Sql视图Id(sqlViewId)]的长度不能超过8(In Sql视图(SqlView))!值:$(pobjSqlViewEN.sqlViewId)(clsSqlViewBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlViewEN.sqlViewText) == false &&
    GetStrLen(pobjSqlViewEN.sqlViewText) > 8000
  ) {
    throw new Error(
      '(errid:Watl000413)字段[Sql视图文本内容(sqlViewText)]的长度不能超过8000(In Sql视图(SqlView))!值:$(pobjSqlViewEN.sqlViewText)(clsSqlViewBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlViewEN.sqlViewText4Gene) == false &&
    GetStrLen(pobjSqlViewEN.sqlViewText4Gene) > 8000
  ) {
    throw new Error(
      '(errid:Watl000413)字段[Sql视图文本4生成(sqlViewText4Gene)]的长度不能超过8000(In Sql视图(SqlView))!值:$(pobjSqlViewEN.sqlViewText4Gene)(clsSqlViewBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlViewEN.textResouce) == false &&
    GetStrLen(pobjSqlViewEN.textResouce) > 100
  ) {
    throw new Error(
      '(errid:Watl000413)字段[文本来源(textResouce)]的长度不能超过100(In Sql视图(SqlView))!值:$(pobjSqlViewEN.textResouce)(clsSqlViewBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlViewEN.textResourceTypeId) == false &&
    GetStrLen(pobjSqlViewEN.textResourceTypeId) > 2
  ) {
    throw new Error(
      '(errid:Watl000413)字段[文本来源类型Id(textResourceTypeId)]的长度不能超过2(In Sql视图(SqlView))!值:$(pobjSqlViewEN.textResourceTypeId)(clsSqlViewBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjSqlViewEN.relaTabId) == false && GetStrLen(pobjSqlViewEN.relaTabId) > 8) {
    throw new Error(
      '(errid:Watl000413)字段[相关表Id(relaTabId)]的长度不能超过8(In Sql视图(SqlView))!值:$(pobjSqlViewEN.relaTabId)(clsSqlViewBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlViewEN.analysisDate) == false &&
    GetStrLen(pobjSqlViewEN.analysisDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[分析日期(analysisDate)]的长度不能超过20(In Sql视图(SqlView))!值:$(pobjSqlViewEN.analysisDate)(clsSqlViewBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlViewEN.geneCodeDate) == false &&
    GetStrLen(pobjSqlViewEN.geneCodeDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[生成代码日期(geneCodeDate)]的长度不能超过20(In Sql视图(SqlView))!值:$(pobjSqlViewEN.geneCodeDate)(clsSqlViewBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlViewEN.createDate) == false &&
    GetStrLen(pobjSqlViewEN.createDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[建立日期(createDate)]的长度不能超过20(In Sql视图(SqlView))!值:$(pobjSqlViewEN.createDate)(clsSqlViewBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlViewEN.topPercent) == false &&
    GetStrLen(pobjSqlViewEN.topPercent) > 200
  ) {
    throw new Error(
      '(errid:Watl000413)字段[顶百分比(topPercent)]的长度不能超过200(In Sql视图(SqlView))!值:$(pobjSqlViewEN.topPercent)(clsSqlViewBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlViewEN.distinctFlag) == false &&
    GetStrLen(pobjSqlViewEN.distinctFlag) > 100
  ) {
    throw new Error(
      '(errid:Watl000413)字段[Distinct标志(distinctFlag)]的长度不能超过100(In Sql视图(SqlView))!值:$(pobjSqlViewEN.distinctFlag)(clsSqlViewBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlViewEN.whereCondition) == false &&
    GetStrLen(pobjSqlViewEN.whereCondition) > 500
  ) {
    throw new Error(
      '(errid:Watl000413)字段[条件串(whereCondition)]的长度不能超过500(In Sql视图(SqlView))!值:$(pobjSqlViewEN.whereCondition)(clsSqlViewBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjSqlViewEN.groupBy) == false && GetStrLen(pobjSqlViewEN.groupBy) > 1000) {
    throw new Error(
      '(errid:Watl000413)字段[分组(groupBy)]的长度不能超过1000(In Sql视图(SqlView))!值:$(pobjSqlViewEN.groupBy)(clsSqlViewBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjSqlViewEN.havingStr) == false && GetStrLen(pobjSqlViewEN.havingStr) > 200) {
    throw new Error(
      '(errid:Watl000413)字段[分组过滤(havingStr)]的长度不能超过200(In Sql视图(SqlView))!值:$(pobjSqlViewEN.havingStr)(clsSqlViewBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjSqlViewEN.orderBy) == false && GetStrLen(pobjSqlViewEN.orderBy) > 100) {
    throw new Error(
      '(errid:Watl000413)字段[排序(orderBy)]的长度不能超过100(In Sql视图(SqlView))!值:$(pobjSqlViewEN.orderBy)(clsSqlViewBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjSqlViewEN.errMsg) == false && GetStrLen(pobjSqlViewEN.errMsg) > 2000) {
    throw new Error(
      '(errid:Watl000413)字段[错误信息(errMsg)]的长度不能超过2000(In Sql视图(SqlView))!值:$(pobjSqlViewEN.errMsg)(clsSqlViewBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjSqlViewEN.prjId) == false && GetStrLen(pobjSqlViewEN.prjId) > 4) {
    throw new Error(
      '(errid:Watl000413)字段[工程ID(prjId)]的长度不能超过4(In Sql视图(SqlView))!值:$(pobjSqlViewEN.prjId)(clsSqlViewBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjSqlViewEN.updDate) == false && GetStrLen(pobjSqlViewEN.updDate) > 20) {
    throw new Error(
      '(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In Sql视图(SqlView))!值:$(pobjSqlViewEN.updDate)(clsSqlViewBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjSqlViewEN.updUserId) == false && GetStrLen(pobjSqlViewEN.updUserId) > 20) {
    throw new Error(
      '(errid:Watl000413)字段[修改用户Id(updUserId)]的长度不能超过20(In Sql视图(SqlView))!值:$(pobjSqlViewEN.updUserId)(clsSqlViewBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjSqlViewEN.memo) == false && GetStrLen(pobjSqlViewEN.memo) > 1000) {
    throw new Error(
      '(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In Sql视图(SqlView))!值:$(pobjSqlViewEN.memo)(clsSqlViewBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjSqlViewEN.sqlViewId) == false &&
    undefined !== pobjSqlViewEN.sqlViewId &&
    tzDataType.isString(pobjSqlViewEN.sqlViewId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[Sql视图Id(sqlViewId)]的值:[$(pobjSqlViewEN.sqlViewId)], 非法,应该为字符型(In Sql视图(SqlView))!(clsSqlViewBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlViewEN.sqlViewText) == false &&
    undefined !== pobjSqlViewEN.sqlViewText &&
    tzDataType.isString(pobjSqlViewEN.sqlViewText) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[Sql视图文本内容(sqlViewText)]的值:[$(pobjSqlViewEN.sqlViewText)], 非法,应该为字符型(In Sql视图(SqlView))!(clsSqlViewBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlViewEN.sqlViewText4Gene) == false &&
    undefined !== pobjSqlViewEN.sqlViewText4Gene &&
    tzDataType.isString(pobjSqlViewEN.sqlViewText4Gene) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[Sql视图文本4生成(sqlViewText4Gene)]的值:[$(pobjSqlViewEN.sqlViewText4Gene)], 非法,应该为字符型(In Sql视图(SqlView))!(clsSqlViewBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlViewEN.textResouce) == false &&
    undefined !== pobjSqlViewEN.textResouce &&
    tzDataType.isString(pobjSqlViewEN.textResouce) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[文本来源(textResouce)]的值:[$(pobjSqlViewEN.textResouce)], 非法,应该为字符型(In Sql视图(SqlView))!(clsSqlViewBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlViewEN.textResourceTypeId) == false &&
    undefined !== pobjSqlViewEN.textResourceTypeId &&
    tzDataType.isString(pobjSqlViewEN.textResourceTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[文本来源类型Id(textResourceTypeId)]的值:[$(pobjSqlViewEN.textResourceTypeId)], 非法,应该为字符型(In Sql视图(SqlView))!(clsSqlViewBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlViewEN.relaTabId) == false &&
    undefined !== pobjSqlViewEN.relaTabId &&
    tzDataType.isString(pobjSqlViewEN.relaTabId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[相关表Id(relaTabId)]的值:[$(pobjSqlViewEN.relaTabId)], 非法,应该为字符型(In Sql视图(SqlView))!(clsSqlViewBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlViewEN.analysisDate) == false &&
    undefined !== pobjSqlViewEN.analysisDate &&
    tzDataType.isString(pobjSqlViewEN.analysisDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[分析日期(analysisDate)]的值:[$(pobjSqlViewEN.analysisDate)], 非法,应该为字符型(In Sql视图(SqlView))!(clsSqlViewBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlViewEN.geneCodeDate) == false &&
    undefined !== pobjSqlViewEN.geneCodeDate &&
    tzDataType.isString(pobjSqlViewEN.geneCodeDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[生成代码日期(geneCodeDate)]的值:[$(pobjSqlViewEN.geneCodeDate)], 非法,应该为字符型(In Sql视图(SqlView))!(clsSqlViewBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlViewEN.createDate) == false &&
    undefined !== pobjSqlViewEN.createDate &&
    tzDataType.isString(pobjSqlViewEN.createDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[建立日期(createDate)]的值:[$(pobjSqlViewEN.createDate)], 非法,应该为字符型(In Sql视图(SqlView))!(clsSqlViewBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlViewEN.topPercent) == false &&
    undefined !== pobjSqlViewEN.topPercent &&
    tzDataType.isString(pobjSqlViewEN.topPercent) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[顶百分比(topPercent)]的值:[$(pobjSqlViewEN.topPercent)], 非法,应该为字符型(In Sql视图(SqlView))!(clsSqlViewBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlViewEN.distinctFlag) == false &&
    undefined !== pobjSqlViewEN.distinctFlag &&
    tzDataType.isString(pobjSqlViewEN.distinctFlag) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[Distinct标志(distinctFlag)]的值:[$(pobjSqlViewEN.distinctFlag)], 非法,应该为字符型(In Sql视图(SqlView))!(clsSqlViewBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlViewEN.whereCondition) == false &&
    undefined !== pobjSqlViewEN.whereCondition &&
    tzDataType.isString(pobjSqlViewEN.whereCondition) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[条件串(whereCondition)]的值:[$(pobjSqlViewEN.whereCondition)], 非法,应该为字符型(In Sql视图(SqlView))!(clsSqlViewBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlViewEN.groupBy) == false &&
    undefined !== pobjSqlViewEN.groupBy &&
    tzDataType.isString(pobjSqlViewEN.groupBy) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[分组(groupBy)]的值:[$(pobjSqlViewEN.groupBy)], 非法,应该为字符型(In Sql视图(SqlView))!(clsSqlViewBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlViewEN.havingStr) == false &&
    undefined !== pobjSqlViewEN.havingStr &&
    tzDataType.isString(pobjSqlViewEN.havingStr) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[分组过滤(havingStr)]的值:[$(pobjSqlViewEN.havingStr)], 非法,应该为字符型(In Sql视图(SqlView))!(clsSqlViewBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlViewEN.orderBy) == false &&
    undefined !== pobjSqlViewEN.orderBy &&
    tzDataType.isString(pobjSqlViewEN.orderBy) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[排序(orderBy)]的值:[$(pobjSqlViewEN.orderBy)], 非法,应该为字符型(In Sql视图(SqlView))!(clsSqlViewBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlViewEN.errMsg) == false &&
    undefined !== pobjSqlViewEN.errMsg &&
    tzDataType.isString(pobjSqlViewEN.errMsg) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[错误信息(errMsg)]的值:[$(pobjSqlViewEN.errMsg)], 非法,应该为字符型(In Sql视图(SqlView))!(clsSqlViewBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlViewEN.prjId) == false &&
    undefined !== pobjSqlViewEN.prjId &&
    tzDataType.isString(pobjSqlViewEN.prjId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[工程ID(prjId)]的值:[$(pobjSqlViewEN.prjId)], 非法,应该为字符型(In Sql视图(SqlView))!(clsSqlViewBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlViewEN.updDate) == false &&
    undefined !== pobjSqlViewEN.updDate &&
    tzDataType.isString(pobjSqlViewEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjSqlViewEN.updDate)], 非法,应该为字符型(In Sql视图(SqlView))!(clsSqlViewBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlViewEN.updUserId) == false &&
    undefined !== pobjSqlViewEN.updUserId &&
    tzDataType.isString(pobjSqlViewEN.updUserId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改用户Id(updUserId)]的值:[$(pobjSqlViewEN.updUserId)], 非法,应该为字符型(In Sql视图(SqlView))!(clsSqlViewBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlViewEN.memo) == false &&
    undefined !== pobjSqlViewEN.memo &&
    tzDataType.isString(pobjSqlViewEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[说明(memo)]的值:[$(pobjSqlViewEN.memo)], 非法,应该为字符型(In Sql视图(SqlView))!(clsSqlViewBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
  if (
    IsNullOrEmpty(pobjSqlViewEN.relaTabId) == false &&
    pobjSqlViewEN.relaTabId != '[nuull]' &&
    GetStrLen(pobjSqlViewEN.relaTabId) != 8
  ) {
    throw '(errid:Watl000415)字段[相关表Id]作为外键字段,长度应该为8(In Sql视图)!(clsSqlViewBL:CheckPropertyNew)';
  }

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function SqlView_CheckProperty4Update(pobjSqlViewEN: clsSqlViewEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (IsNullOrEmpty(pobjSqlViewEN.sqlViewId) == false && GetStrLen(pobjSqlViewEN.sqlViewId) > 8) {
    throw new Error(
      '(errid:Watl000416)字段[Sql视图Id(sqlViewId)]的长度不能超过8(In Sql视图(SqlView))!值:$(pobjSqlViewEN.sqlViewId)(clsSqlViewBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlViewEN.sqlViewText) == false &&
    GetStrLen(pobjSqlViewEN.sqlViewText) > 8000
  ) {
    throw new Error(
      '(errid:Watl000416)字段[Sql视图文本内容(sqlViewText)]的长度不能超过8000(In Sql视图(SqlView))!值:$(pobjSqlViewEN.sqlViewText)(clsSqlViewBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlViewEN.sqlViewText4Gene) == false &&
    GetStrLen(pobjSqlViewEN.sqlViewText4Gene) > 8000
  ) {
    throw new Error(
      '(errid:Watl000416)字段[Sql视图文本4生成(sqlViewText4Gene)]的长度不能超过8000(In Sql视图(SqlView))!值:$(pobjSqlViewEN.sqlViewText4Gene)(clsSqlViewBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlViewEN.textResouce) == false &&
    GetStrLen(pobjSqlViewEN.textResouce) > 100
  ) {
    throw new Error(
      '(errid:Watl000416)字段[文本来源(textResouce)]的长度不能超过100(In Sql视图(SqlView))!值:$(pobjSqlViewEN.textResouce)(clsSqlViewBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlViewEN.textResourceTypeId) == false &&
    GetStrLen(pobjSqlViewEN.textResourceTypeId) > 2
  ) {
    throw new Error(
      '(errid:Watl000416)字段[文本来源类型Id(textResourceTypeId)]的长度不能超过2(In Sql视图(SqlView))!值:$(pobjSqlViewEN.textResourceTypeId)(clsSqlViewBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjSqlViewEN.relaTabId) == false && GetStrLen(pobjSqlViewEN.relaTabId) > 8) {
    throw new Error(
      '(errid:Watl000416)字段[相关表Id(relaTabId)]的长度不能超过8(In Sql视图(SqlView))!值:$(pobjSqlViewEN.relaTabId)(clsSqlViewBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlViewEN.analysisDate) == false &&
    GetStrLen(pobjSqlViewEN.analysisDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[分析日期(analysisDate)]的长度不能超过20(In Sql视图(SqlView))!值:$(pobjSqlViewEN.analysisDate)(clsSqlViewBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlViewEN.geneCodeDate) == false &&
    GetStrLen(pobjSqlViewEN.geneCodeDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[生成代码日期(geneCodeDate)]的长度不能超过20(In Sql视图(SqlView))!值:$(pobjSqlViewEN.geneCodeDate)(clsSqlViewBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlViewEN.createDate) == false &&
    GetStrLen(pobjSqlViewEN.createDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[建立日期(createDate)]的长度不能超过20(In Sql视图(SqlView))!值:$(pobjSqlViewEN.createDate)(clsSqlViewBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlViewEN.topPercent) == false &&
    GetStrLen(pobjSqlViewEN.topPercent) > 200
  ) {
    throw new Error(
      '(errid:Watl000416)字段[顶百分比(topPercent)]的长度不能超过200(In Sql视图(SqlView))!值:$(pobjSqlViewEN.topPercent)(clsSqlViewBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlViewEN.distinctFlag) == false &&
    GetStrLen(pobjSqlViewEN.distinctFlag) > 100
  ) {
    throw new Error(
      '(errid:Watl000416)字段[Distinct标志(distinctFlag)]的长度不能超过100(In Sql视图(SqlView))!值:$(pobjSqlViewEN.distinctFlag)(clsSqlViewBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlViewEN.whereCondition) == false &&
    GetStrLen(pobjSqlViewEN.whereCondition) > 500
  ) {
    throw new Error(
      '(errid:Watl000416)字段[条件串(whereCondition)]的长度不能超过500(In Sql视图(SqlView))!值:$(pobjSqlViewEN.whereCondition)(clsSqlViewBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjSqlViewEN.groupBy) == false && GetStrLen(pobjSqlViewEN.groupBy) > 1000) {
    throw new Error(
      '(errid:Watl000416)字段[分组(groupBy)]的长度不能超过1000(In Sql视图(SqlView))!值:$(pobjSqlViewEN.groupBy)(clsSqlViewBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjSqlViewEN.havingStr) == false && GetStrLen(pobjSqlViewEN.havingStr) > 200) {
    throw new Error(
      '(errid:Watl000416)字段[分组过滤(havingStr)]的长度不能超过200(In Sql视图(SqlView))!值:$(pobjSqlViewEN.havingStr)(clsSqlViewBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjSqlViewEN.orderBy) == false && GetStrLen(pobjSqlViewEN.orderBy) > 100) {
    throw new Error(
      '(errid:Watl000416)字段[排序(orderBy)]的长度不能超过100(In Sql视图(SqlView))!值:$(pobjSqlViewEN.orderBy)(clsSqlViewBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjSqlViewEN.errMsg) == false && GetStrLen(pobjSqlViewEN.errMsg) > 2000) {
    throw new Error(
      '(errid:Watl000416)字段[错误信息(errMsg)]的长度不能超过2000(In Sql视图(SqlView))!值:$(pobjSqlViewEN.errMsg)(clsSqlViewBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjSqlViewEN.prjId) == false && GetStrLen(pobjSqlViewEN.prjId) > 4) {
    throw new Error(
      '(errid:Watl000416)字段[工程ID(prjId)]的长度不能超过4(In Sql视图(SqlView))!值:$(pobjSqlViewEN.prjId)(clsSqlViewBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjSqlViewEN.updDate) == false && GetStrLen(pobjSqlViewEN.updDate) > 20) {
    throw new Error(
      '(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In Sql视图(SqlView))!值:$(pobjSqlViewEN.updDate)(clsSqlViewBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjSqlViewEN.updUserId) == false && GetStrLen(pobjSqlViewEN.updUserId) > 20) {
    throw new Error(
      '(errid:Watl000416)字段[修改用户Id(updUserId)]的长度不能超过20(In Sql视图(SqlView))!值:$(pobjSqlViewEN.updUserId)(clsSqlViewBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjSqlViewEN.memo) == false && GetStrLen(pobjSqlViewEN.memo) > 1000) {
    throw new Error(
      '(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In Sql视图(SqlView))!值:$(pobjSqlViewEN.memo)(clsSqlViewBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjSqlViewEN.sqlViewId) == false &&
    undefined !== pobjSqlViewEN.sqlViewId &&
    tzDataType.isString(pobjSqlViewEN.sqlViewId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[Sql视图Id(sqlViewId)]的值:[$(pobjSqlViewEN.sqlViewId)], 非法,应该为字符型(In Sql视图(SqlView))!(clsSqlViewBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlViewEN.sqlViewText) == false &&
    undefined !== pobjSqlViewEN.sqlViewText &&
    tzDataType.isString(pobjSqlViewEN.sqlViewText) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[Sql视图文本内容(sqlViewText)]的值:[$(pobjSqlViewEN.sqlViewText)], 非法,应该为字符型(In Sql视图(SqlView))!(clsSqlViewBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlViewEN.sqlViewText4Gene) == false &&
    undefined !== pobjSqlViewEN.sqlViewText4Gene &&
    tzDataType.isString(pobjSqlViewEN.sqlViewText4Gene) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[Sql视图文本4生成(sqlViewText4Gene)]的值:[$(pobjSqlViewEN.sqlViewText4Gene)], 非法,应该为字符型(In Sql视图(SqlView))!(clsSqlViewBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlViewEN.textResouce) == false &&
    undefined !== pobjSqlViewEN.textResouce &&
    tzDataType.isString(pobjSqlViewEN.textResouce) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[文本来源(textResouce)]的值:[$(pobjSqlViewEN.textResouce)], 非法,应该为字符型(In Sql视图(SqlView))!(clsSqlViewBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlViewEN.textResourceTypeId) == false &&
    undefined !== pobjSqlViewEN.textResourceTypeId &&
    tzDataType.isString(pobjSqlViewEN.textResourceTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[文本来源类型Id(textResourceTypeId)]的值:[$(pobjSqlViewEN.textResourceTypeId)], 非法,应该为字符型(In Sql视图(SqlView))!(clsSqlViewBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlViewEN.relaTabId) == false &&
    undefined !== pobjSqlViewEN.relaTabId &&
    tzDataType.isString(pobjSqlViewEN.relaTabId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[相关表Id(relaTabId)]的值:[$(pobjSqlViewEN.relaTabId)], 非法,应该为字符型(In Sql视图(SqlView))!(clsSqlViewBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlViewEN.analysisDate) == false &&
    undefined !== pobjSqlViewEN.analysisDate &&
    tzDataType.isString(pobjSqlViewEN.analysisDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[分析日期(analysisDate)]的值:[$(pobjSqlViewEN.analysisDate)], 非法,应该为字符型(In Sql视图(SqlView))!(clsSqlViewBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlViewEN.geneCodeDate) == false &&
    undefined !== pobjSqlViewEN.geneCodeDate &&
    tzDataType.isString(pobjSqlViewEN.geneCodeDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[生成代码日期(geneCodeDate)]的值:[$(pobjSqlViewEN.geneCodeDate)], 非法,应该为字符型(In Sql视图(SqlView))!(clsSqlViewBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlViewEN.createDate) == false &&
    undefined !== pobjSqlViewEN.createDate &&
    tzDataType.isString(pobjSqlViewEN.createDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[建立日期(createDate)]的值:[$(pobjSqlViewEN.createDate)], 非法,应该为字符型(In Sql视图(SqlView))!(clsSqlViewBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlViewEN.topPercent) == false &&
    undefined !== pobjSqlViewEN.topPercent &&
    tzDataType.isString(pobjSqlViewEN.topPercent) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[顶百分比(topPercent)]的值:[$(pobjSqlViewEN.topPercent)], 非法,应该为字符型(In Sql视图(SqlView))!(clsSqlViewBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlViewEN.distinctFlag) == false &&
    undefined !== pobjSqlViewEN.distinctFlag &&
    tzDataType.isString(pobjSqlViewEN.distinctFlag) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[Distinct标志(distinctFlag)]的值:[$(pobjSqlViewEN.distinctFlag)], 非法,应该为字符型(In Sql视图(SqlView))!(clsSqlViewBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlViewEN.whereCondition) == false &&
    undefined !== pobjSqlViewEN.whereCondition &&
    tzDataType.isString(pobjSqlViewEN.whereCondition) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[条件串(whereCondition)]的值:[$(pobjSqlViewEN.whereCondition)], 非法,应该为字符型(In Sql视图(SqlView))!(clsSqlViewBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlViewEN.groupBy) == false &&
    undefined !== pobjSqlViewEN.groupBy &&
    tzDataType.isString(pobjSqlViewEN.groupBy) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[分组(groupBy)]的值:[$(pobjSqlViewEN.groupBy)], 非法,应该为字符型(In Sql视图(SqlView))!(clsSqlViewBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlViewEN.havingStr) == false &&
    undefined !== pobjSqlViewEN.havingStr &&
    tzDataType.isString(pobjSqlViewEN.havingStr) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[分组过滤(havingStr)]的值:[$(pobjSqlViewEN.havingStr)], 非法,应该为字符型(In Sql视图(SqlView))!(clsSqlViewBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlViewEN.orderBy) == false &&
    undefined !== pobjSqlViewEN.orderBy &&
    tzDataType.isString(pobjSqlViewEN.orderBy) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[排序(orderBy)]的值:[$(pobjSqlViewEN.orderBy)], 非法,应该为字符型(In Sql视图(SqlView))!(clsSqlViewBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlViewEN.errMsg) == false &&
    undefined !== pobjSqlViewEN.errMsg &&
    tzDataType.isString(pobjSqlViewEN.errMsg) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[错误信息(errMsg)]的值:[$(pobjSqlViewEN.errMsg)], 非法,应该为字符型(In Sql视图(SqlView))!(clsSqlViewBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlViewEN.prjId) == false &&
    undefined !== pobjSqlViewEN.prjId &&
    tzDataType.isString(pobjSqlViewEN.prjId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[工程ID(prjId)]的值:[$(pobjSqlViewEN.prjId)], 非法,应该为字符型(In Sql视图(SqlView))!(clsSqlViewBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlViewEN.updDate) == false &&
    undefined !== pobjSqlViewEN.updDate &&
    tzDataType.isString(pobjSqlViewEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjSqlViewEN.updDate)], 非法,应该为字符型(In Sql视图(SqlView))!(clsSqlViewBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlViewEN.updUserId) == false &&
    undefined !== pobjSqlViewEN.updUserId &&
    tzDataType.isString(pobjSqlViewEN.updUserId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改用户Id(updUserId)]的值:[$(pobjSqlViewEN.updUserId)], 非法,应该为字符型(In Sql视图(SqlView))!(clsSqlViewBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlViewEN.memo) == false &&
    undefined !== pobjSqlViewEN.memo &&
    tzDataType.isString(pobjSqlViewEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[说明(memo)]的值:[$(pobjSqlViewEN.memo)], 非法,应该为字符型(In Sql视图(SqlView))!(clsSqlViewBL:CheckProperty4Update)',
    );
  }
  //检查主键是否为Null或者空!
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
  if (
    IsNullOrEmpty(pobjSqlViewEN.relaTabId) == false &&
    pobjSqlViewEN.relaTabId != '[nuull]' &&
    GetStrLen(pobjSqlViewEN.relaTabId) != 8
  ) {
    throw '(errid:Watl000418)字段[相关表Id]作为外键字段,长度应该为8(In Sql视图)!(clsSqlViewBL:CheckPropertyNew)';
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
export function SqlView_GetJSONStrByObj(pobjSqlViewEN: clsSqlViewEN): string {
  pobjSqlViewEN.sfUpdFldSetStr = pobjSqlViewEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjSqlViewEN);
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
export function SqlView_GetObjLstByJSONStr(strJSON: string): Array<clsSqlViewEN> {
  let arrSqlViewObjLst = new Array<clsSqlViewEN>();
  if (strJSON === '') {
    return arrSqlViewObjLst;
  }
  try {
    arrSqlViewObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrSqlViewObjLst;
  }
  return arrSqlViewObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrSqlViewObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function SqlView_GetObjLstByJSONObjLst(
  arrSqlViewObjLstS: Array<clsSqlViewEN>,
): Array<clsSqlViewEN> {
  const arrSqlViewObjLst = new Array<clsSqlViewEN>();
  for (const objInFor of arrSqlViewObjLstS) {
    const obj1 = SqlView_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrSqlViewObjLst.push(obj1);
  }
  return arrSqlViewObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function SqlView_GetObjByJSONStr(strJSON: string): clsSqlViewEN {
  let pobjSqlViewEN = new clsSqlViewEN();
  if (strJSON === '') {
    return pobjSqlViewEN;
  }
  try {
    pobjSqlViewEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjSqlViewEN;
  }
  return pobjSqlViewEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function SqlView_GetCombineCondition(objSqlViewCond: clsSqlViewEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objSqlViewCond.dicFldComparisonOp,
      clsSqlViewEN.con_SqlViewId,
    ) == true
  ) {
    const strComparisonOpSqlViewId: string =
      objSqlViewCond.dicFldComparisonOp[clsSqlViewEN.con_SqlViewId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSqlViewEN.con_SqlViewId,
      objSqlViewCond.sqlViewId,
      strComparisonOpSqlViewId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSqlViewCond.dicFldComparisonOp,
      clsSqlViewEN.con_SqlViewText,
    ) == true
  ) {
    const strComparisonOpSqlViewText: string =
      objSqlViewCond.dicFldComparisonOp[clsSqlViewEN.con_SqlViewText];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSqlViewEN.con_SqlViewText,
      objSqlViewCond.sqlViewText,
      strComparisonOpSqlViewText,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSqlViewCond.dicFldComparisonOp,
      clsSqlViewEN.con_SqlViewText4Gene,
    ) == true
  ) {
    const strComparisonOpSqlViewText4Gene: string =
      objSqlViewCond.dicFldComparisonOp[clsSqlViewEN.con_SqlViewText4Gene];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSqlViewEN.con_SqlViewText4Gene,
      objSqlViewCond.sqlViewText4Gene,
      strComparisonOpSqlViewText4Gene,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSqlViewCond.dicFldComparisonOp,
      clsSqlViewEN.con_TextResouce,
    ) == true
  ) {
    const strComparisonOpTextResouce: string =
      objSqlViewCond.dicFldComparisonOp[clsSqlViewEN.con_TextResouce];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSqlViewEN.con_TextResouce,
      objSqlViewCond.textResouce,
      strComparisonOpTextResouce,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSqlViewCond.dicFldComparisonOp,
      clsSqlViewEN.con_TextResourceTypeId,
    ) == true
  ) {
    const strComparisonOpTextResourceTypeId: string =
      objSqlViewCond.dicFldComparisonOp[clsSqlViewEN.con_TextResourceTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSqlViewEN.con_TextResourceTypeId,
      objSqlViewCond.textResourceTypeId,
      strComparisonOpTextResourceTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSqlViewCond.dicFldComparisonOp,
      clsSqlViewEN.con_RelaTabId,
    ) == true
  ) {
    const strComparisonOpRelaTabId: string =
      objSqlViewCond.dicFldComparisonOp[clsSqlViewEN.con_RelaTabId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSqlViewEN.con_RelaTabId,
      objSqlViewCond.relaTabId,
      strComparisonOpRelaTabId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSqlViewCond.dicFldComparisonOp,
      clsSqlViewEN.con_AnalysisDate,
    ) == true
  ) {
    const strComparisonOpAnalysisDate: string =
      objSqlViewCond.dicFldComparisonOp[clsSqlViewEN.con_AnalysisDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSqlViewEN.con_AnalysisDate,
      objSqlViewCond.analysisDate,
      strComparisonOpAnalysisDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSqlViewCond.dicFldComparisonOp,
      clsSqlViewEN.con_GeneCodeDate,
    ) == true
  ) {
    const strComparisonOpGeneCodeDate: string =
      objSqlViewCond.dicFldComparisonOp[clsSqlViewEN.con_GeneCodeDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSqlViewEN.con_GeneCodeDate,
      objSqlViewCond.geneCodeDate,
      strComparisonOpGeneCodeDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSqlViewCond.dicFldComparisonOp,
      clsSqlViewEN.con_CreateDate,
    ) == true
  ) {
    const strComparisonOpCreateDate: string =
      objSqlViewCond.dicFldComparisonOp[clsSqlViewEN.con_CreateDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSqlViewEN.con_CreateDate,
      objSqlViewCond.createDate,
      strComparisonOpCreateDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSqlViewCond.dicFldComparisonOp,
      clsSqlViewEN.con_TopPercent,
    ) == true
  ) {
    const strComparisonOpTopPercent: string =
      objSqlViewCond.dicFldComparisonOp[clsSqlViewEN.con_TopPercent];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSqlViewEN.con_TopPercent,
      objSqlViewCond.topPercent,
      strComparisonOpTopPercent,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSqlViewCond.dicFldComparisonOp,
      clsSqlViewEN.con_DistinctFlag,
    ) == true
  ) {
    const strComparisonOpDistinctFlag: string =
      objSqlViewCond.dicFldComparisonOp[clsSqlViewEN.con_DistinctFlag];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSqlViewEN.con_DistinctFlag,
      objSqlViewCond.distinctFlag,
      strComparisonOpDistinctFlag,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSqlViewCond.dicFldComparisonOp,
      clsSqlViewEN.con_WhereCondition,
    ) == true
  ) {
    const strComparisonOpWhereCondition: string =
      objSqlViewCond.dicFldComparisonOp[clsSqlViewEN.con_WhereCondition];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSqlViewEN.con_WhereCondition,
      objSqlViewCond.whereCondition,
      strComparisonOpWhereCondition,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSqlViewCond.dicFldComparisonOp,
      clsSqlViewEN.con_GroupBy,
    ) == true
  ) {
    const strComparisonOpGroupBy: string =
      objSqlViewCond.dicFldComparisonOp[clsSqlViewEN.con_GroupBy];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSqlViewEN.con_GroupBy,
      objSqlViewCond.groupBy,
      strComparisonOpGroupBy,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSqlViewCond.dicFldComparisonOp,
      clsSqlViewEN.con_HavingStr,
    ) == true
  ) {
    const strComparisonOpHavingStr: string =
      objSqlViewCond.dicFldComparisonOp[clsSqlViewEN.con_HavingStr];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSqlViewEN.con_HavingStr,
      objSqlViewCond.havingStr,
      strComparisonOpHavingStr,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSqlViewCond.dicFldComparisonOp,
      clsSqlViewEN.con_OrderBy,
    ) == true
  ) {
    const strComparisonOpOrderBy: string =
      objSqlViewCond.dicFldComparisonOp[clsSqlViewEN.con_OrderBy];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSqlViewEN.con_OrderBy,
      objSqlViewCond.orderBy,
      strComparisonOpOrderBy,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSqlViewCond.dicFldComparisonOp,
      clsSqlViewEN.con_ErrMsg,
    ) == true
  ) {
    const strComparisonOpErrMsg: string =
      objSqlViewCond.dicFldComparisonOp[clsSqlViewEN.con_ErrMsg];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSqlViewEN.con_ErrMsg,
      objSqlViewCond.errMsg,
      strComparisonOpErrMsg,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSqlViewCond.dicFldComparisonOp,
      clsSqlViewEN.con_PrjId,
    ) == true
  ) {
    const strComparisonOpPrjId: string = objSqlViewCond.dicFldComparisonOp[clsSqlViewEN.con_PrjId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSqlViewEN.con_PrjId,
      objSqlViewCond.prjId,
      strComparisonOpPrjId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSqlViewCond.dicFldComparisonOp,
      clsSqlViewEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objSqlViewCond.dicFldComparisonOp[clsSqlViewEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSqlViewEN.con_UpdDate,
      objSqlViewCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSqlViewCond.dicFldComparisonOp,
      clsSqlViewEN.con_UpdUserId,
    ) == true
  ) {
    const strComparisonOpUpdUserId: string =
      objSqlViewCond.dicFldComparisonOp[clsSqlViewEN.con_UpdUserId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSqlViewEN.con_UpdUserId,
      objSqlViewCond.updUserId,
      strComparisonOpUpdUserId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSqlViewCond.dicFldComparisonOp,
      clsSqlViewEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string = objSqlViewCond.dicFldComparisonOp[clsSqlViewEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSqlViewEN.con_Memo,
      objSqlViewCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--SqlView(Sql视图),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strRelaTabId: 相关表Id(要求唯一的字段)
 * @param strPrjId: 工程ID(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function SqlView_GetUniCondStr(objSqlViewEN: clsSqlViewEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and RelaTabId = '{0}'", objSqlViewEN.relaTabId);
  strWhereCond += Format(" and PrjId = '{0}'", objSqlViewEN.prjId);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--SqlView(Sql视图),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strRelaTabId: 相关表Id(要求唯一的字段)
 * @param strPrjId: 工程ID(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function SqlView_GetUniCondStr4Update(objSqlViewEN: clsSqlViewEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and SqlViewId <> '{0}'", objSqlViewEN.sqlViewId);
  strWhereCond += Format(" and RelaTabId = '{0}'", objSqlViewEN.relaTabId);
  strWhereCond += Format(" and PrjId = '{0}'", objSqlViewEN.prjId);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objSqlViewENS:源对象
 * @param objSqlViewENT:目标对象
 */
export function SqlView_GetObjFromJsonObj(objSqlViewENS: clsSqlViewEN): clsSqlViewEN {
  const objSqlViewENT: clsSqlViewEN = new clsSqlViewEN();
  ObjectAssign(objSqlViewENT, objSqlViewENS);
  return objSqlViewENT;
}
