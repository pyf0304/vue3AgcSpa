/**
 * 类名:clsvSqlViewFldWApi
 * 表名:vSqlViewFld(00050252)
 * 版本:2024.01.20.1(服务器:WIN-SRV103-116)
 * 日期:2024/01/23 16:50:59
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
 * vSql视图字段(vSqlViewFld)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2024年01月23日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { CacheHelper } from '@/ts/PubFun/CacheHelper';
import {
  GetObjKeys,
  GetExceptionStr,
  myShowErrorMsg,
  ObjectAssign,
} from '@/ts/PubFun/clsCommFunc4Web';
import { clsvSqlViewFldEN } from '@/ts/L0Entity/SqlViewMan/clsvSqlViewFldEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const vSqlViewFld_Controller = 'vSqlViewFldApi';
export const vSqlViewFld_ConstructorName = 'vSqlViewFld';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngmId:关键字
 * @returns 对象
 **/
export async function vSqlViewFld_GetObjBymIdAsync(
  lngmId: number,
): Promise<clsvSqlViewFldEN | null> {
  const strThisFuncName = 'GetObjBymIdAsync';

  if (lngmId == 0) {
    const strMsg = Format('参数:[lngmId]不能为空!(In clsvSqlViewFldWApi.GetObjBymIdAsync)');
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjBymId';
  const strUrl = GetWebApiUrl(vSqlViewFld_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      lngmId,
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
      const objvSqlViewFld = vSqlViewFld_GetObjFromJsonObj(returnObj);
      return objvSqlViewFld;
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
        vSqlViewFld_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vSqlViewFld_ConstructorName,
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
 * @param lngmId:所给的关键字
 * @returns 对象
 */
export async function vSqlViewFld_GetObjBymIdCache(
  lngmId: number,
  strPrjId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjBymIdCache';

  if (lngmId == 0) {
    const strMsg = Format('参数:[lngmId]不能为空!(In clsvSqlViewFldWApi.GetObjBymIdCache)');
    console.error(strMsg);
    throw strMsg;
  }
  const arrvSqlViewFldObjLstCache = await vSqlViewFld_GetObjLstCache(strPrjId);
  try {
    const arrvSqlViewFldSel = arrvSqlViewFldObjLstCache.filter((x) => x.mId == lngmId);
    let objvSqlViewFld: clsvSqlViewFldEN;
    if (arrvSqlViewFldSel.length > 0) {
      objvSqlViewFld = arrvSqlViewFldSel[0];
      return objvSqlViewFld;
    } else {
      if (bolTryAsyncOnce == true) {
        const objvSqlViewFldConst = await vSqlViewFld_GetObjBymIdAsync(lngmId);
        if (objvSqlViewFldConst != null) {
          vSqlViewFld_ReFreshThisCache(strPrjId);
          return objvSqlViewFldConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      lngmId,
      vSqlViewFld_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param lngmId:所给的关键字
 * @returns 对象
 */
export async function vSqlViewFld_GetObjBymIdlocalStorage(lngmId: number) {
  const strThisFuncName = 'GetObjBymIdlocalStorage';

  if (lngmId == 0) {
    const strMsg = Format('参数:[lngmId]不能为空!(In clsvSqlViewFldWApi.GetObjBymIdlocalStorage)');
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsvSqlViewFldEN._CurrTabName, lngmId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objvSqlViewFldCache: clsvSqlViewFldEN = JSON.parse(strTempObj);
    return objvSqlViewFldCache;
  }
  try {
    const objvSqlViewFld = await vSqlViewFld_GetObjBymIdAsync(lngmId);
    if (objvSqlViewFld != null) {
      localStorage.setItem(strKey, JSON.stringify(objvSqlViewFld));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objvSqlViewFld;
    }
    return objvSqlViewFld;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      lngmId,
      vSqlViewFld_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return;
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
export async function vSqlViewFld_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
  strPrjIdClassfy: string,
) {
  //const strThisFuncName = "func";

  if (IsNullOrEmpty(strPrjIdClassfy) == true) {
    const strMsg = Format('参数:[strPrjIdClassfy]不能为空!(In clsvSqlViewFldWApi.func)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjIdClassfy.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjIdClassfy]的长度:[{0}]不正确!(clsvSqlViewFldWApi.func)',
      strPrjIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName != clsvSqlViewFldEN.con_mId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsvSqlViewFldEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsvSqlViewFldEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const lngmId = Number(strInValue);
  if (lngmId == 0) {
    return '';
  }
  const objvSqlViewFld = await vSqlViewFld_GetObjBymIdCache(lngmId, strPrjIdClassfy);
  if (objvSqlViewFld == null) return '';
  if (objvSqlViewFld.GetFldValue(strOutFldName) == null) return '';
  return objvSqlViewFld.GetFldValue(strOutFldName).toString();
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
export function vSqlViewFld_SortFunDefa(a: clsvSqlViewFldEN, b: clsvSqlViewFldEN): number {
  return a.mId - b.mId;
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
export function vSqlViewFld_SortFunDefa2Fld(a: clsvSqlViewFldEN, b: clsvSqlViewFldEN): number {
  if (a.sqlViewId == b.sqlViewId) return a.sqlViewName.localeCompare(b.sqlViewName);
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
export function vSqlViewFld_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsvSqlViewFldEN.con_mId:
        return (a: clsvSqlViewFldEN, b: clsvSqlViewFldEN) => {
          return a.mId - b.mId;
        };
      case clsvSqlViewFldEN.con_SqlViewId:
        return (a: clsvSqlViewFldEN, b: clsvSqlViewFldEN) => {
          return a.sqlViewId.localeCompare(b.sqlViewId);
        };
      case clsvSqlViewFldEN.con_SqlViewName:
        return (a: clsvSqlViewFldEN, b: clsvSqlViewFldEN) => {
          return a.sqlViewName.localeCompare(b.sqlViewName);
        };
      case clsvSqlViewFldEN.con_SqlViewCNName:
        return (a: clsvSqlViewFldEN, b: clsvSqlViewFldEN) => {
          if (a.sqlViewCNName == null) return -1;
          if (b.sqlViewCNName == null) return 1;
          return a.sqlViewCNName.localeCompare(b.sqlViewCNName);
        };
      case clsvSqlViewFldEN.con_RelaTabId:
        return (a: clsvSqlViewFldEN, b: clsvSqlViewFldEN) => {
          if (a.relaTabId == null) return -1;
          if (b.relaTabId == null) return 1;
          return a.relaTabId.localeCompare(b.relaTabId);
        };
      case clsvSqlViewFldEN.con_TabId:
        return (a: clsvSqlViewFldEN, b: clsvSqlViewFldEN) => {
          if (a.tabId == null) return -1;
          if (b.tabId == null) return 1;
          return a.tabId.localeCompare(b.tabId);
        };
      case clsvSqlViewFldEN.con_TabName:
        return (a: clsvSqlViewFldEN, b: clsvSqlViewFldEN) => {
          return a.tabName.localeCompare(b.tabName);
        };
      case clsvSqlViewFldEN.con_TabCnName:
        return (a: clsvSqlViewFldEN, b: clsvSqlViewFldEN) => {
          if (a.tabCnName == null) return -1;
          if (b.tabCnName == null) return 1;
          return a.tabCnName.localeCompare(b.tabCnName);
        };
      case clsvSqlViewFldEN.con_TabAliases:
        return (a: clsvSqlViewFldEN, b: clsvSqlViewFldEN) => {
          if (a.tabAliases == null) return -1;
          if (b.tabAliases == null) return 1;
          return a.tabAliases.localeCompare(b.tabAliases);
        };
      case clsvSqlViewFldEN.con_TabRelationText:
        return (a: clsvSqlViewFldEN, b: clsvSqlViewFldEN) => {
          if (a.tabRelationText == null) return -1;
          if (b.tabRelationText == null) return 1;
          return a.tabRelationText.localeCompare(b.tabRelationText);
        };
      case clsvSqlViewFldEN.con_FldId:
        return (a: clsvSqlViewFldEN, b: clsvSqlViewFldEN) => {
          return a.fldId.localeCompare(b.fldId);
        };
      case clsvSqlViewFldEN.con_FldName:
        return (a: clsvSqlViewFldEN, b: clsvSqlViewFldEN) => {
          return a.fldName.localeCompare(b.fldName);
        };
      case clsvSqlViewFldEN.con_FldCnName:
        return (a: clsvSqlViewFldEN, b: clsvSqlViewFldEN) => {
          if (a.fldCnName == null) return -1;
          if (b.fldCnName == null) return 1;
          return a.fldCnName.localeCompare(b.fldCnName);
        };
      case clsvSqlViewFldEN.con_FldExpression:
        return (a: clsvSqlViewFldEN, b: clsvSqlViewFldEN) => {
          if (a.fldExpression == null) return -1;
          if (b.fldExpression == null) return 1;
          return a.fldExpression.localeCompare(b.fldExpression);
        };
      case clsvSqlViewFldEN.con_FieldAliases:
        return (a: clsvSqlViewFldEN, b: clsvSqlViewFldEN) => {
          if (a.fieldAliases == null) return -1;
          if (b.fieldAliases == null) return 1;
          return a.fieldAliases.localeCompare(b.fieldAliases);
        };
      case clsvSqlViewFldEN.con_Filters:
        return (a: clsvSqlViewFldEN, b: clsvSqlViewFldEN) => {
          if (a.filters == null) return -1;
          if (b.filters == null) return 1;
          return a.filters.localeCompare(b.filters);
        };
      case clsvSqlViewFldEN.con_OrderNum:
        return (a: clsvSqlViewFldEN, b: clsvSqlViewFldEN) => {
          return a.orderNum - b.orderNum;
        };
      case clsvSqlViewFldEN.con_PrjId:
        return (a: clsvSqlViewFldEN, b: clsvSqlViewFldEN) => {
          return a.prjId.localeCompare(b.prjId);
        };
      case clsvSqlViewFldEN.con_UpdDate:
        return (a: clsvSqlViewFldEN, b: clsvSqlViewFldEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsvSqlViewFldEN.con_UpdUserId:
        return (a: clsvSqlViewFldEN, b: clsvSqlViewFldEN) => {
          if (a.updUserId == null) return -1;
          if (b.updUserId == null) return 1;
          return a.updUserId.localeCompare(b.updUserId);
        };
      case clsvSqlViewFldEN.con_Memo:
        return (a: clsvSqlViewFldEN, b: clsvSqlViewFldEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      case clsvSqlViewFldEN.con_RelaTabId4SqlView:
        return (a: clsvSqlViewFldEN, b: clsvSqlViewFldEN) => {
          if (a.relaTabId4SqlView == null) return -1;
          if (b.relaTabId4SqlView == null) return 1;
          return a.relaTabId4SqlView.localeCompare(b.relaTabId4SqlView);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vSqlViewFld]中不存在!(in ${vSqlViewFld_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsvSqlViewFldEN.con_mId:
        return (a: clsvSqlViewFldEN, b: clsvSqlViewFldEN) => {
          return b.mId - a.mId;
        };
      case clsvSqlViewFldEN.con_SqlViewId:
        return (a: clsvSqlViewFldEN, b: clsvSqlViewFldEN) => {
          return b.sqlViewId.localeCompare(a.sqlViewId);
        };
      case clsvSqlViewFldEN.con_SqlViewName:
        return (a: clsvSqlViewFldEN, b: clsvSqlViewFldEN) => {
          return b.sqlViewName.localeCompare(a.sqlViewName);
        };
      case clsvSqlViewFldEN.con_SqlViewCNName:
        return (a: clsvSqlViewFldEN, b: clsvSqlViewFldEN) => {
          if (b.sqlViewCNName == null) return -1;
          if (a.sqlViewCNName == null) return 1;
          return b.sqlViewCNName.localeCompare(a.sqlViewCNName);
        };
      case clsvSqlViewFldEN.con_RelaTabId:
        return (a: clsvSqlViewFldEN, b: clsvSqlViewFldEN) => {
          if (b.relaTabId == null) return -1;
          if (a.relaTabId == null) return 1;
          return b.relaTabId.localeCompare(a.relaTabId);
        };
      case clsvSqlViewFldEN.con_TabId:
        return (a: clsvSqlViewFldEN, b: clsvSqlViewFldEN) => {
          if (b.tabId == null) return -1;
          if (a.tabId == null) return 1;
          return b.tabId.localeCompare(a.tabId);
        };
      case clsvSqlViewFldEN.con_TabName:
        return (a: clsvSqlViewFldEN, b: clsvSqlViewFldEN) => {
          return b.tabName.localeCompare(a.tabName);
        };
      case clsvSqlViewFldEN.con_TabCnName:
        return (a: clsvSqlViewFldEN, b: clsvSqlViewFldEN) => {
          if (b.tabCnName == null) return -1;
          if (a.tabCnName == null) return 1;
          return b.tabCnName.localeCompare(a.tabCnName);
        };
      case clsvSqlViewFldEN.con_TabAliases:
        return (a: clsvSqlViewFldEN, b: clsvSqlViewFldEN) => {
          if (b.tabAliases == null) return -1;
          if (a.tabAliases == null) return 1;
          return b.tabAliases.localeCompare(a.tabAliases);
        };
      case clsvSqlViewFldEN.con_TabRelationText:
        return (a: clsvSqlViewFldEN, b: clsvSqlViewFldEN) => {
          if (b.tabRelationText == null) return -1;
          if (a.tabRelationText == null) return 1;
          return b.tabRelationText.localeCompare(a.tabRelationText);
        };
      case clsvSqlViewFldEN.con_FldId:
        return (a: clsvSqlViewFldEN, b: clsvSqlViewFldEN) => {
          return b.fldId.localeCompare(a.fldId);
        };
      case clsvSqlViewFldEN.con_FldName:
        return (a: clsvSqlViewFldEN, b: clsvSqlViewFldEN) => {
          return b.fldName.localeCompare(a.fldName);
        };
      case clsvSqlViewFldEN.con_FldCnName:
        return (a: clsvSqlViewFldEN, b: clsvSqlViewFldEN) => {
          if (b.fldCnName == null) return -1;
          if (a.fldCnName == null) return 1;
          return b.fldCnName.localeCompare(a.fldCnName);
        };
      case clsvSqlViewFldEN.con_FldExpression:
        return (a: clsvSqlViewFldEN, b: clsvSqlViewFldEN) => {
          if (b.fldExpression == null) return -1;
          if (a.fldExpression == null) return 1;
          return b.fldExpression.localeCompare(a.fldExpression);
        };
      case clsvSqlViewFldEN.con_FieldAliases:
        return (a: clsvSqlViewFldEN, b: clsvSqlViewFldEN) => {
          if (b.fieldAliases == null) return -1;
          if (a.fieldAliases == null) return 1;
          return b.fieldAliases.localeCompare(a.fieldAliases);
        };
      case clsvSqlViewFldEN.con_Filters:
        return (a: clsvSqlViewFldEN, b: clsvSqlViewFldEN) => {
          if (b.filters == null) return -1;
          if (a.filters == null) return 1;
          return b.filters.localeCompare(a.filters);
        };
      case clsvSqlViewFldEN.con_OrderNum:
        return (a: clsvSqlViewFldEN, b: clsvSqlViewFldEN) => {
          return b.orderNum - a.orderNum;
        };
      case clsvSqlViewFldEN.con_PrjId:
        return (a: clsvSqlViewFldEN, b: clsvSqlViewFldEN) => {
          return b.prjId.localeCompare(a.prjId);
        };
      case clsvSqlViewFldEN.con_UpdDate:
        return (a: clsvSqlViewFldEN, b: clsvSqlViewFldEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsvSqlViewFldEN.con_UpdUserId:
        return (a: clsvSqlViewFldEN, b: clsvSqlViewFldEN) => {
          if (b.updUserId == null) return -1;
          if (a.updUserId == null) return 1;
          return b.updUserId.localeCompare(a.updUserId);
        };
      case clsvSqlViewFldEN.con_Memo:
        return (a: clsvSqlViewFldEN, b: clsvSqlViewFldEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      case clsvSqlViewFldEN.con_RelaTabId4SqlView:
        return (a: clsvSqlViewFldEN, b: clsvSqlViewFldEN) => {
          if (b.relaTabId4SqlView == null) return -1;
          if (a.relaTabId4SqlView == null) return 1;
          return b.relaTabId4SqlView.localeCompare(a.relaTabId4SqlView);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vSqlViewFld]中不存在!(in ${vSqlViewFld_ConstructorName}.${strThisFuncName})`;
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
export async function vSqlViewFld_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsvSqlViewFldEN.con_mId:
      return (obj: clsvSqlViewFldEN) => {
        return obj.mId === value;
      };
    case clsvSqlViewFldEN.con_SqlViewId:
      return (obj: clsvSqlViewFldEN) => {
        return obj.sqlViewId === value;
      };
    case clsvSqlViewFldEN.con_SqlViewName:
      return (obj: clsvSqlViewFldEN) => {
        return obj.sqlViewName === value;
      };
    case clsvSqlViewFldEN.con_SqlViewCNName:
      return (obj: clsvSqlViewFldEN) => {
        return obj.sqlViewCNName === value;
      };
    case clsvSqlViewFldEN.con_RelaTabId:
      return (obj: clsvSqlViewFldEN) => {
        return obj.relaTabId === value;
      };
    case clsvSqlViewFldEN.con_TabId:
      return (obj: clsvSqlViewFldEN) => {
        return obj.tabId === value;
      };
    case clsvSqlViewFldEN.con_TabName:
      return (obj: clsvSqlViewFldEN) => {
        return obj.tabName === value;
      };
    case clsvSqlViewFldEN.con_TabCnName:
      return (obj: clsvSqlViewFldEN) => {
        return obj.tabCnName === value;
      };
    case clsvSqlViewFldEN.con_TabAliases:
      return (obj: clsvSqlViewFldEN) => {
        return obj.tabAliases === value;
      };
    case clsvSqlViewFldEN.con_TabRelationText:
      return (obj: clsvSqlViewFldEN) => {
        return obj.tabRelationText === value;
      };
    case clsvSqlViewFldEN.con_FldId:
      return (obj: clsvSqlViewFldEN) => {
        return obj.fldId === value;
      };
    case clsvSqlViewFldEN.con_FldName:
      return (obj: clsvSqlViewFldEN) => {
        return obj.fldName === value;
      };
    case clsvSqlViewFldEN.con_FldCnName:
      return (obj: clsvSqlViewFldEN) => {
        return obj.fldCnName === value;
      };
    case clsvSqlViewFldEN.con_FldExpression:
      return (obj: clsvSqlViewFldEN) => {
        return obj.fldExpression === value;
      };
    case clsvSqlViewFldEN.con_FieldAliases:
      return (obj: clsvSqlViewFldEN) => {
        return obj.fieldAliases === value;
      };
    case clsvSqlViewFldEN.con_Filters:
      return (obj: clsvSqlViewFldEN) => {
        return obj.filters === value;
      };
    case clsvSqlViewFldEN.con_OrderNum:
      return (obj: clsvSqlViewFldEN) => {
        return obj.orderNum === value;
      };
    case clsvSqlViewFldEN.con_PrjId:
      return (obj: clsvSqlViewFldEN) => {
        return obj.prjId === value;
      };
    case clsvSqlViewFldEN.con_UpdDate:
      return (obj: clsvSqlViewFldEN) => {
        return obj.updDate === value;
      };
    case clsvSqlViewFldEN.con_UpdUserId:
      return (obj: clsvSqlViewFldEN) => {
        return obj.updUserId === value;
      };
    case clsvSqlViewFldEN.con_Memo:
      return (obj: clsvSqlViewFldEN) => {
        return obj.memo === value;
      };
    case clsvSqlViewFldEN.con_RelaTabId4SqlView:
      return (obj: clsvSqlViewFldEN) => {
        return obj.relaTabId4SqlView === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[vSqlViewFld]中不存在!(in ${vSqlViewFld_ConstructorName}.${strThisFuncName})`;
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
export async function vSqlViewFld_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
  strPrjIdClassfy: string,
): Promise<Array<number>> {
  //const strThisFuncName = "funcKey";

  if (IsNullOrEmpty(strPrjIdClassfy) == true) {
    const strMsg = Format('参数:[strPrjIdClassfy]不能为空!(In clsvSqlViewFldWApi.funcKey)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjIdClassfy.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjIdClassfy]的长度:[{0}]不正确!(clsvSqlViewFldWApi.funcKey)',
      strPrjIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName == clsvSqlViewFldEN.con_mId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (Number(strInValue) == 0) {
    return [];
  }
  const arrvSqlViewFld = await vSqlViewFld_GetObjLstCache(strPrjIdClassfy);
  if (arrvSqlViewFld == null) return [];
  let arrvSqlViewFldSel = arrvSqlViewFld;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrvSqlViewFldSel = arrvSqlViewFldSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrvSqlViewFldSel = arrvSqlViewFldSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrvSqlViewFldSel = arrvSqlViewFldSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrvSqlViewFldSel = arrvSqlViewFldSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrvSqlViewFldSel = arrvSqlViewFldSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrvSqlViewFldSel = arrvSqlViewFldSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrvSqlViewFldSel = arrvSqlViewFldSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrvSqlViewFldSel = arrvSqlViewFldSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrvSqlViewFldSel = arrvSqlViewFldSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrvSqlViewFldSel = arrvSqlViewFldSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrvSqlViewFldSel.length == 0) return [];
  return arrvSqlViewFldSel.map((x) => x.mId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function vSqlViewFld_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vSqlViewFld_Controller, strAction);

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
        vSqlViewFld_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vSqlViewFld_ConstructorName,
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
export async function vSqlViewFld_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vSqlViewFld_Controller, strAction);

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
        vSqlViewFld_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vSqlViewFld_ConstructorName,
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
export async function vSqlViewFld_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsvSqlViewFldEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(vSqlViewFld_Controller, strAction);

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
      const objvSqlViewFld = vSqlViewFld_GetObjFromJsonObj(returnObj);
      return objvSqlViewFld;
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
        vSqlViewFld_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vSqlViewFld_ConstructorName,
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
export async function vSqlViewFld_GetObjLstClientCache(strPrjId: string) {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsvSqlViewFldEN.WhereFormat) == false) {
    strWhereCond = Format(clsvSqlViewFldEN.WhereFormat, strPrjId);
  } else {
    strWhereCond = Format("PrjId='{0}'", strPrjId);
  }
  const strKey = Format('{0}_{1}', clsvSqlViewFldEN._CurrTabName, strPrjId);
  if (IsNullOrEmpty(clsvSqlViewFldEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvSqlViewFldEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrvSqlViewFldExObjLstCache: Array<clsvSqlViewFldEN> = CacheHelper.Get(strKey);
    const arrvSqlViewFldObjLstT = vSqlViewFld_GetObjLstByJSONObjLst(arrvSqlViewFldExObjLstCache);
    return arrvSqlViewFldObjLstT;
  }
  try {
    const arrvSqlViewFldExObjLst = await vSqlViewFld_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrvSqlViewFldExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvSqlViewFldExObjLst.length,
    );
    console.log(strInfo);
    return arrvSqlViewFldExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vSqlViewFld_ConstructorName,
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
export async function vSqlViewFld_GetObjLstlocalStorage(strPrjId: string) {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsvSqlViewFldEN.WhereFormat) == false) {
    strWhereCond = Format(clsvSqlViewFldEN.WhereFormat, strPrjId);
  } else {
    strWhereCond = Format("{0}='{1}'", clsvSqlViewFldEN.con_PrjId, strPrjId);
  }
  const strKey = Format('{0}_{1}', clsvSqlViewFldEN._CurrTabName, strPrjId);
  if (IsNullOrEmpty(clsvSqlViewFldEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvSqlViewFldEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvSqlViewFldExObjLstCache: Array<clsvSqlViewFldEN> = JSON.parse(strTempObjLst);
    const arrvSqlViewFldObjLstT = vSqlViewFld_GetObjLstByJSONObjLst(arrvSqlViewFldExObjLstCache);
    return arrvSqlViewFldObjLstT;
  }
  try {
    const arrvSqlViewFldExObjLst = await vSqlViewFld_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrvSqlViewFldExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvSqlViewFldExObjLst.length,
    );
    console.log(strInfo);
    return arrvSqlViewFldExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vSqlViewFld_ConstructorName,
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
export async function vSqlViewFld_GetObjLstlocalStoragePureCache(strPrjId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsvSqlViewFldEN._CurrTabName, strPrjId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvSqlViewFldObjLstCache: Array<clsvSqlViewFldEN> = JSON.parse(strTempObjLst);
    return arrvSqlViewFldObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function vSqlViewFld_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsvSqlViewFldEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(vSqlViewFld_Controller, strAction);

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
          vSqlViewFld_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vSqlViewFld_GetObjLstByJSONObjLst(returnObjLst);
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
        vSqlViewFld_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vSqlViewFld_ConstructorName,
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
export async function vSqlViewFld_GetObjLstsessionStorage(strPrjId: string) {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsvSqlViewFldEN.WhereFormat) == false) {
    strWhereCond = Format(clsvSqlViewFldEN.WhereFormat, strPrjId);
  } else {
    strWhereCond = Format("{0}='{1}'", clsvSqlViewFldEN.con_PrjId, strPrjId);
  }
  const strKey = Format('{0}_{1}', clsvSqlViewFldEN._CurrTabName, strPrjId);
  if (IsNullOrEmpty(clsvSqlViewFldEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvSqlViewFldEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvSqlViewFldExObjLstCache: Array<clsvSqlViewFldEN> = JSON.parse(strTempObjLst);
    const arrvSqlViewFldObjLstT = vSqlViewFld_GetObjLstByJSONObjLst(arrvSqlViewFldExObjLstCache);
    return arrvSqlViewFldObjLstT;
  }
  try {
    const arrvSqlViewFldExObjLst = await vSqlViewFld_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrvSqlViewFldExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvSqlViewFldExObjLst.length,
    );
    console.log(strInfo);
    return arrvSqlViewFldExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vSqlViewFld_ConstructorName,
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
export async function vSqlViewFld_GetObjLstsessionStoragePureCache(strPrjId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsvSqlViewFldEN._CurrTabName, strPrjId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvSqlViewFldObjLstCache: Array<clsvSqlViewFldEN> = JSON.parse(strTempObjLst);
    return arrvSqlViewFldObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vSqlViewFld_GetObjLstCache(
  strPrjId: string,
): Promise<Array<clsvSqlViewFldEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空！(In clsvSqlViewFldWApi.vSqlViewFld_GetObjLstCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确！(clsvSqlViewFldWApi.vSqlViewFld_GetObjLstCache)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  let arrvSqlViewFldObjLstCache;
  switch (clsvSqlViewFldEN.CacheModeId) {
    case '04': //sessionStorage
      arrvSqlViewFldObjLstCache = await vSqlViewFld_GetObjLstsessionStorage(strPrjId);
      break;
    case '03': //localStorage
      arrvSqlViewFldObjLstCache = await vSqlViewFld_GetObjLstlocalStorage(strPrjId);
      break;
    case '02': //ClientCache
      arrvSqlViewFldObjLstCache = await vSqlViewFld_GetObjLstClientCache(strPrjId);
      break;
    default:
      arrvSqlViewFldObjLstCache = await vSqlViewFld_GetObjLstClientCache(strPrjId);
      break;
  }
  return arrvSqlViewFldObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vSqlViewFld_GetObjLstPureCache(strPrjId: string) {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrvSqlViewFldObjLstCache;
  switch (clsvSqlViewFldEN.CacheModeId) {
    case '04': //sessionStorage
      arrvSqlViewFldObjLstCache = await vSqlViewFld_GetObjLstsessionStoragePureCache(strPrjId);
      break;
    case '03': //localStorage
      arrvSqlViewFldObjLstCache = await vSqlViewFld_GetObjLstlocalStoragePureCache(strPrjId);
      break;
    case '02': //ClientCache
      arrvSqlViewFldObjLstCache = null;
      break;
    default:
      arrvSqlViewFldObjLstCache = null;
      break;
  }
  return arrvSqlViewFldObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objlngmIdCond:条件对象
 * @returns 对象列表子集
 */
export async function vSqlViewFld_GetSubObjLstCache(
  objvSqlViewFldCond: clsvSqlViewFldEN,
  strPrjId: string,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrvSqlViewFldObjLstCache = await vSqlViewFld_GetObjLstCache(strPrjId);
  let arrvSqlViewFldSel = arrvSqlViewFldObjLstCache;
  if (objvSqlViewFldCond.sfFldComparisonOp == null || objvSqlViewFldCond.sfFldComparisonOp == '')
    return arrvSqlViewFldSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvSqlViewFldCond.sfFldComparisonOp,
  );
  //console.log("clsvSqlViewFldWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvSqlViewFldCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvSqlViewFldSel = arrvSqlViewFldSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvSqlViewFldCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvSqlViewFldSel = arrvSqlViewFldSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvSqlViewFldSel = arrvSqlViewFldSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvSqlViewFldSel = arrvSqlViewFldSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvSqlViewFldSel = arrvSqlViewFldSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvSqlViewFldSel = arrvSqlViewFldSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvSqlViewFldSel = arrvSqlViewFldSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvSqlViewFldSel = arrvSqlViewFldSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvSqlViewFldSel = arrvSqlViewFldSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvSqlViewFldSel = arrvSqlViewFldSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrvSqlViewFldSel = arrvSqlViewFldSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrvSqlViewFldSel = arrvSqlViewFldSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrvSqlViewFldSel = arrvSqlViewFldSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrvSqlViewFldSel = arrvSqlViewFldSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrvSqlViewFldSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvSqlViewFldCond),
      vSqlViewFld_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvSqlViewFldEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrmId:关键字列表
 * @returns 对象列表
 **/
export async function vSqlViewFld_GetObjLstBymIdLstAsync(
  arrmId: Array<string>,
): Promise<Array<clsvSqlViewFldEN>> {
  const strThisFuncName = 'GetObjLstBymIdLstAsync';
  const strAction = 'GetObjLstBymIdLst';
  const strUrl = GetWebApiUrl(vSqlViewFld_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrmId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          vSqlViewFld_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vSqlViewFld_GetObjLstByJSONObjLst(returnObjLst);
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
        vSqlViewFld_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vSqlViewFld_ConstructorName,
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
 * @param arrlngmIdLst:关键字列表
 * @returns 对象列表
 */
export async function vSqlViewFld_GetObjLstBymIdLstCache(
  arrmIdLst: Array<number>,
  strPrjId: string,
) {
  const strThisFuncName = 'GetObjLstBymIdLstCache';
  try {
    const arrvSqlViewFldObjLstCache = await vSqlViewFld_GetObjLstCache(strPrjId);
    const arrvSqlViewFldSel = arrvSqlViewFldObjLstCache.filter(
      (x) => arrmIdLst.indexOf(x.mId) > -1,
    );
    return arrvSqlViewFldSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrmIdLst.join(','),
      vSqlViewFld_ConstructorName,
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
export async function vSqlViewFld_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsvSqlViewFldEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(vSqlViewFld_Controller, strAction);

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
          vSqlViewFld_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vSqlViewFld_GetObjLstByJSONObjLst(returnObjLst);
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
        vSqlViewFld_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vSqlViewFld_ConstructorName,
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
export async function vSqlViewFld_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsvSqlViewFldEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(vSqlViewFld_Controller, strAction);

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
          vSqlViewFld_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vSqlViewFld_GetObjLstByJSONObjLst(returnObjLst);
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
        vSqlViewFld_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vSqlViewFld_ConstructorName,
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
export async function vSqlViewFld_GetObjLstByPagerCache(
  objPagerPara: stuPagerPara,
  strPrjId: string,
) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsvSqlViewFldEN>();
  const arrvSqlViewFldObjLstCache = await vSqlViewFld_GetObjLstCache(strPrjId);
  if (arrvSqlViewFldObjLstCache.length == 0) return arrvSqlViewFldObjLstCache;
  let arrvSqlViewFldSel = arrvSqlViewFldObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objvSqlViewFldCond = new clsvSqlViewFldEN();
  ObjectAssign(objvSqlViewFldCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsvSqlViewFldWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvSqlViewFldSel = arrvSqlViewFldSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvSqlViewFldCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvSqlViewFldSel = arrvSqlViewFldSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvSqlViewFldSel = arrvSqlViewFldSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvSqlViewFldSel = arrvSqlViewFldSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvSqlViewFldSel = arrvSqlViewFldSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvSqlViewFldSel = arrvSqlViewFldSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvSqlViewFldSel = arrvSqlViewFldSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvSqlViewFldSel = arrvSqlViewFldSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrvSqlViewFldSel = arrvSqlViewFldSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvSqlViewFldSel = arrvSqlViewFldSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvSqlViewFldSel = arrvSqlViewFldSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrvSqlViewFldSel = arrvSqlViewFldSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrvSqlViewFldSel = arrvSqlViewFldSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrvSqlViewFldSel = arrvSqlViewFldSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrvSqlViewFldSel = arrvSqlViewFldSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrvSqlViewFldSel.length == 0) return arrvSqlViewFldSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrvSqlViewFldSel = arrvSqlViewFldSel.sort(vSqlViewFld_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrvSqlViewFldSel = arrvSqlViewFldSel.sort(objPagerPara.sortFun);
    }
    arrvSqlViewFldSel = arrvSqlViewFldSel.slice(intStart, intEnd);
    return arrvSqlViewFldSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      vSqlViewFld_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvSqlViewFldEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function vSqlViewFld_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsvSqlViewFldEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsvSqlViewFldEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(vSqlViewFld_Controller, strAction);

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
          vSqlViewFld_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vSqlViewFld_GetObjLstByJSONObjLst(returnObjLst);
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
        vSqlViewFld_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vSqlViewFld_ConstructorName,
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
 * @param objlngmIdCond:条件对象
 * @returns 对象列表子集
 */
export async function vSqlViewFld_IsExistRecordCache(
  objvSqlViewFldCond: clsvSqlViewFldEN,
  strPrjId: string,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrvSqlViewFldObjLstCache = await vSqlViewFld_GetObjLstCache(strPrjId);
  if (arrvSqlViewFldObjLstCache == null) return false;
  let arrvSqlViewFldSel = arrvSqlViewFldObjLstCache;
  if (objvSqlViewFldCond.sfFldComparisonOp == null || objvSqlViewFldCond.sfFldComparisonOp == '')
    return arrvSqlViewFldSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvSqlViewFldCond.sfFldComparisonOp,
  );
  //console.log("clsvSqlViewFldWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvSqlViewFldCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvSqlViewFldCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvSqlViewFldSel = arrvSqlViewFldSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvSqlViewFldSel = arrvSqlViewFldSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvSqlViewFldSel = arrvSqlViewFldSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvSqlViewFldSel = arrvSqlViewFldSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvSqlViewFldSel = arrvSqlViewFldSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvSqlViewFldSel = arrvSqlViewFldSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvSqlViewFldSel = arrvSqlViewFldSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvSqlViewFldSel = arrvSqlViewFldSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvSqlViewFldSel = arrvSqlViewFldSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrvSqlViewFldSel = arrvSqlViewFldSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrvSqlViewFldSel = arrvSqlViewFldSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrvSqlViewFldSel = arrvSqlViewFldSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrvSqlViewFldSel = arrvSqlViewFldSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrvSqlViewFldSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objvSqlViewFldCond),
      vSqlViewFld_ConstructorName,
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
export async function vSqlViewFld_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(vSqlViewFld_Controller, strAction);

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
        vSqlViewFld_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vSqlViewFld_ConstructorName,
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
 * @param lngmId:所给的关键字
 * @returns 对象
 */
export async function vSqlViewFld_IsExistCache(lngmId: number, strPrjId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrvSqlViewFldObjLstCache = await vSqlViewFld_GetObjLstCache(strPrjId);
  if (arrvSqlViewFldObjLstCache == null) return false;
  try {
    const arrvSqlViewFldSel = arrvSqlViewFldObjLstCache.filter((x) => x.mId == lngmId);
    if (arrvSqlViewFldSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      lngmId,
      vSqlViewFld_ConstructorName,
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
 * @param lngmId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function vSqlViewFld_IsExistAsync(lngmId: number): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(vSqlViewFld_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      lngmId,
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
        vSqlViewFld_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vSqlViewFld_ConstructorName,
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
export async function vSqlViewFld_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(vSqlViewFld_Controller, strAction);

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
        vSqlViewFld_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vSqlViewFld_ConstructorName,
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
 * @param objvSqlViewFldCond:条件对象
 * @returns 对象列表记录数
 */
export async function vSqlViewFld_GetRecCountByCondCache(
  objvSqlViewFldCond: clsvSqlViewFldEN,
  strPrjId: string,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrvSqlViewFldObjLstCache = await vSqlViewFld_GetObjLstCache(strPrjId);
  if (arrvSqlViewFldObjLstCache == null) return 0;
  let arrvSqlViewFldSel = arrvSqlViewFldObjLstCache;
  if (objvSqlViewFldCond.sfFldComparisonOp == null || objvSqlViewFldCond.sfFldComparisonOp == '')
    return arrvSqlViewFldSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvSqlViewFldCond.sfFldComparisonOp,
  );
  //console.log("clsvSqlViewFldWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvSqlViewFldCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvSqlViewFldSel = arrvSqlViewFldSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvSqlViewFldCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvSqlViewFldSel = arrvSqlViewFldSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvSqlViewFldSel = arrvSqlViewFldSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvSqlViewFldSel = arrvSqlViewFldSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvSqlViewFldSel = arrvSqlViewFldSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvSqlViewFldSel = arrvSqlViewFldSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvSqlViewFldSel = arrvSqlViewFldSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvSqlViewFldSel = arrvSqlViewFldSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrvSqlViewFldSel = arrvSqlViewFldSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvSqlViewFldSel = arrvSqlViewFldSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvSqlViewFldSel = arrvSqlViewFldSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrvSqlViewFldSel = arrvSqlViewFldSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrvSqlViewFldSel = arrvSqlViewFldSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrvSqlViewFldSel = arrvSqlViewFldSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrvSqlViewFldSel = arrvSqlViewFldSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrvSqlViewFldSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvSqlViewFldCond),
      vSqlViewFld_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return 0;
}

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 */
export function vSqlViewFld_GetWebApiUrl(strController: string, strAction: string): string {
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
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export function vSqlViewFld_ReFreshThisCache(strPrjId: string): void {
  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空!(In clsvSqlViewFldWApi.vSqlViewFld_ReFreshThisCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确!(clsvSqlViewFldWApi.vSqlViewFld_ReFreshThisCache)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = Format('{0}_{1}', clsvSqlViewFldEN._CurrTabName, strPrjId);
    switch (clsvSqlViewFldEN.CacheModeId) {
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
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vSqlViewFld_GetJSONStrByObj(pobjvSqlViewFldEN: clsvSqlViewFldEN): string {
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjvSqlViewFldEN);
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
export function vSqlViewFld_GetObjLstByJSONStr(strJSON: string): Array<clsvSqlViewFldEN> {
  let arrvSqlViewFldObjLst = new Array<clsvSqlViewFldEN>();
  if (strJSON === '') {
    return arrvSqlViewFldObjLst;
  }
  try {
    arrvSqlViewFldObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrvSqlViewFldObjLst;
  }
  return arrvSqlViewFldObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvSqlViewFldObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function vSqlViewFld_GetObjLstByJSONObjLst(
  arrvSqlViewFldObjLstS: Array<clsvSqlViewFldEN>,
): Array<clsvSqlViewFldEN> {
  const arrvSqlViewFldObjLst = new Array<clsvSqlViewFldEN>();
  for (const objInFor of arrvSqlViewFldObjLstS) {
    const obj1 = vSqlViewFld_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrvSqlViewFldObjLst.push(obj1);
  }
  return arrvSqlViewFldObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vSqlViewFld_GetObjByJSONStr(strJSON: string): clsvSqlViewFldEN {
  let pobjvSqlViewFldEN = new clsvSqlViewFldEN();
  if (strJSON === '') {
    return pobjvSqlViewFldEN;
  }
  try {
    pobjvSqlViewFldEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjvSqlViewFldEN;
  }
  return pobjvSqlViewFldEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function vSqlViewFld_GetCombineCondition(objvSqlViewFldCond: clsvSqlViewFldEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objvSqlViewFldCond.dicFldComparisonOp,
      clsvSqlViewFldEN.con_mId,
    ) == true
  ) {
    const strComparisonOpmId: string =
      objvSqlViewFldCond.dicFldComparisonOp[clsvSqlViewFldEN.con_mId];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvSqlViewFldEN.con_mId,
      objvSqlViewFldCond.mId,
      strComparisonOpmId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvSqlViewFldCond.dicFldComparisonOp,
      clsvSqlViewFldEN.con_SqlViewId,
    ) == true
  ) {
    const strComparisonOpSqlViewId: string =
      objvSqlViewFldCond.dicFldComparisonOp[clsvSqlViewFldEN.con_SqlViewId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvSqlViewFldEN.con_SqlViewId,
      objvSqlViewFldCond.sqlViewId,
      strComparisonOpSqlViewId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvSqlViewFldCond.dicFldComparisonOp,
      clsvSqlViewFldEN.con_SqlViewName,
    ) == true
  ) {
    const strComparisonOpSqlViewName: string =
      objvSqlViewFldCond.dicFldComparisonOp[clsvSqlViewFldEN.con_SqlViewName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvSqlViewFldEN.con_SqlViewName,
      objvSqlViewFldCond.sqlViewName,
      strComparisonOpSqlViewName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvSqlViewFldCond.dicFldComparisonOp,
      clsvSqlViewFldEN.con_SqlViewCNName,
    ) == true
  ) {
    const strComparisonOpSqlViewCNName: string =
      objvSqlViewFldCond.dicFldComparisonOp[clsvSqlViewFldEN.con_SqlViewCNName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvSqlViewFldEN.con_SqlViewCNName,
      objvSqlViewFldCond.sqlViewCNName,
      strComparisonOpSqlViewCNName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvSqlViewFldCond.dicFldComparisonOp,
      clsvSqlViewFldEN.con_RelaTabId,
    ) == true
  ) {
    const strComparisonOpRelaTabId: string =
      objvSqlViewFldCond.dicFldComparisonOp[clsvSqlViewFldEN.con_RelaTabId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvSqlViewFldEN.con_RelaTabId,
      objvSqlViewFldCond.relaTabId,
      strComparisonOpRelaTabId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvSqlViewFldCond.dicFldComparisonOp,
      clsvSqlViewFldEN.con_TabId,
    ) == true
  ) {
    const strComparisonOpTabId: string =
      objvSqlViewFldCond.dicFldComparisonOp[clsvSqlViewFldEN.con_TabId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvSqlViewFldEN.con_TabId,
      objvSqlViewFldCond.tabId,
      strComparisonOpTabId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvSqlViewFldCond.dicFldComparisonOp,
      clsvSqlViewFldEN.con_TabName,
    ) == true
  ) {
    const strComparisonOpTabName: string =
      objvSqlViewFldCond.dicFldComparisonOp[clsvSqlViewFldEN.con_TabName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvSqlViewFldEN.con_TabName,
      objvSqlViewFldCond.tabName,
      strComparisonOpTabName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvSqlViewFldCond.dicFldComparisonOp,
      clsvSqlViewFldEN.con_TabCnName,
    ) == true
  ) {
    const strComparisonOpTabCnName: string =
      objvSqlViewFldCond.dicFldComparisonOp[clsvSqlViewFldEN.con_TabCnName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvSqlViewFldEN.con_TabCnName,
      objvSqlViewFldCond.tabCnName,
      strComparisonOpTabCnName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvSqlViewFldCond.dicFldComparisonOp,
      clsvSqlViewFldEN.con_TabAliases,
    ) == true
  ) {
    const strComparisonOpTabAliases: string =
      objvSqlViewFldCond.dicFldComparisonOp[clsvSqlViewFldEN.con_TabAliases];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvSqlViewFldEN.con_TabAliases,
      objvSqlViewFldCond.tabAliases,
      strComparisonOpTabAliases,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvSqlViewFldCond.dicFldComparisonOp,
      clsvSqlViewFldEN.con_TabRelationText,
    ) == true
  ) {
    const strComparisonOpTabRelationText: string =
      objvSqlViewFldCond.dicFldComparisonOp[clsvSqlViewFldEN.con_TabRelationText];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvSqlViewFldEN.con_TabRelationText,
      objvSqlViewFldCond.tabRelationText,
      strComparisonOpTabRelationText,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvSqlViewFldCond.dicFldComparisonOp,
      clsvSqlViewFldEN.con_FldId,
    ) == true
  ) {
    const strComparisonOpFldId: string =
      objvSqlViewFldCond.dicFldComparisonOp[clsvSqlViewFldEN.con_FldId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvSqlViewFldEN.con_FldId,
      objvSqlViewFldCond.fldId,
      strComparisonOpFldId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvSqlViewFldCond.dicFldComparisonOp,
      clsvSqlViewFldEN.con_FldName,
    ) == true
  ) {
    const strComparisonOpFldName: string =
      objvSqlViewFldCond.dicFldComparisonOp[clsvSqlViewFldEN.con_FldName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvSqlViewFldEN.con_FldName,
      objvSqlViewFldCond.fldName,
      strComparisonOpFldName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvSqlViewFldCond.dicFldComparisonOp,
      clsvSqlViewFldEN.con_FldCnName,
    ) == true
  ) {
    const strComparisonOpFldCnName: string =
      objvSqlViewFldCond.dicFldComparisonOp[clsvSqlViewFldEN.con_FldCnName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvSqlViewFldEN.con_FldCnName,
      objvSqlViewFldCond.fldCnName,
      strComparisonOpFldCnName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvSqlViewFldCond.dicFldComparisonOp,
      clsvSqlViewFldEN.con_FldExpression,
    ) == true
  ) {
    const strComparisonOpFldExpression: string =
      objvSqlViewFldCond.dicFldComparisonOp[clsvSqlViewFldEN.con_FldExpression];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvSqlViewFldEN.con_FldExpression,
      objvSqlViewFldCond.fldExpression,
      strComparisonOpFldExpression,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvSqlViewFldCond.dicFldComparisonOp,
      clsvSqlViewFldEN.con_FieldAliases,
    ) == true
  ) {
    const strComparisonOpFieldAliases: string =
      objvSqlViewFldCond.dicFldComparisonOp[clsvSqlViewFldEN.con_FieldAliases];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvSqlViewFldEN.con_FieldAliases,
      objvSqlViewFldCond.fieldAliases,
      strComparisonOpFieldAliases,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvSqlViewFldCond.dicFldComparisonOp,
      clsvSqlViewFldEN.con_Filters,
    ) == true
  ) {
    const strComparisonOpFilters: string =
      objvSqlViewFldCond.dicFldComparisonOp[clsvSqlViewFldEN.con_Filters];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvSqlViewFldEN.con_Filters,
      objvSqlViewFldCond.filters,
      strComparisonOpFilters,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvSqlViewFldCond.dicFldComparisonOp,
      clsvSqlViewFldEN.con_OrderNum,
    ) == true
  ) {
    const strComparisonOpOrderNum: string =
      objvSqlViewFldCond.dicFldComparisonOp[clsvSqlViewFldEN.con_OrderNum];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvSqlViewFldEN.con_OrderNum,
      objvSqlViewFldCond.orderNum,
      strComparisonOpOrderNum,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvSqlViewFldCond.dicFldComparisonOp,
      clsvSqlViewFldEN.con_PrjId,
    ) == true
  ) {
    const strComparisonOpPrjId: string =
      objvSqlViewFldCond.dicFldComparisonOp[clsvSqlViewFldEN.con_PrjId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvSqlViewFldEN.con_PrjId,
      objvSqlViewFldCond.prjId,
      strComparisonOpPrjId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvSqlViewFldCond.dicFldComparisonOp,
      clsvSqlViewFldEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objvSqlViewFldCond.dicFldComparisonOp[clsvSqlViewFldEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvSqlViewFldEN.con_UpdDate,
      objvSqlViewFldCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvSqlViewFldCond.dicFldComparisonOp,
      clsvSqlViewFldEN.con_UpdUserId,
    ) == true
  ) {
    const strComparisonOpUpdUserId: string =
      objvSqlViewFldCond.dicFldComparisonOp[clsvSqlViewFldEN.con_UpdUserId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvSqlViewFldEN.con_UpdUserId,
      objvSqlViewFldCond.updUserId,
      strComparisonOpUpdUserId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvSqlViewFldCond.dicFldComparisonOp,
      clsvSqlViewFldEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objvSqlViewFldCond.dicFldComparisonOp[clsvSqlViewFldEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvSqlViewFldEN.con_Memo,
      objvSqlViewFldCond.memo,
      strComparisonOpMemo,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvSqlViewFldCond.dicFldComparisonOp,
      clsvSqlViewFldEN.con_RelaTabId4SqlView,
    ) == true
  ) {
    const strComparisonOpRelaTabId4SqlView: string =
      objvSqlViewFldCond.dicFldComparisonOp[clsvSqlViewFldEN.con_RelaTabId4SqlView];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvSqlViewFldEN.con_RelaTabId4SqlView,
      objvSqlViewFldCond.relaTabId4SqlView,
      strComparisonOpRelaTabId4SqlView,
    );
  }
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvSqlViewFldENS:源对象
 * @param objvSqlViewFldENT:目标对象
 */
export function vSqlViewFld_GetObjFromJsonObj(
  objvSqlViewFldENS: clsvSqlViewFldEN,
): clsvSqlViewFldEN {
  const objvSqlViewFldENT: clsvSqlViewFldEN = new clsvSqlViewFldEN();
  ObjectAssign(objvSqlViewFldENT, objvSqlViewFldENS);
  return objvSqlViewFldENT;
}
