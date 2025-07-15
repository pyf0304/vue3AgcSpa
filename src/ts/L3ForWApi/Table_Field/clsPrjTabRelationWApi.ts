/**
 * 类名:clsPrjTabRelationWApi
 * 表名:PrjTabRelation(00050606)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/14 11:49:29
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 应用类型:Vue应用InCore-TS(30)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:字段、表维护(Table_Field)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 工程表关系(PrjTabRelation)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2025年06月14日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty, Format, GetStrLen, tzDataType } from '@/ts/PubFun/clsString';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { CacheHelper } from '@/ts/PubFun/CacheHelper';
import { ConditionCollection } from '@/ts/PubFun/ConditionCollection';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import {
  GetSortExpressInfo,
  ObjectAssign,
  GetExceptionStr,
  myShowErrorMsg,
} from '@/ts/PubFun/clsCommFunc4Web';
import { prjTabRelationCache, isFuncMapCache } from '@/views/Table_Field/PrjTabRelationVueShare';
import { clsPrjTabRelationENEx } from '@/ts/L0Entity/Table_Field/clsPrjTabRelationENEx';
import { clsPrjTabRelationEN } from '@/ts/L0Entity/Table_Field/clsPrjTabRelationEN';
import { vPrjTab_Sim_func } from '@/ts/L3ForWApi/Table_Field/clsvPrjTab_SimWApi';
import { clsvPrjTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvPrjTab_SimEN';
import { PrjTabRelationType_func } from '@/ts/L3ForWApi/Table_Field/clsPrjTabRelationTypeWApi';
import { clsPrjTabRelationTypeEN } from '@/ts/L0Entity/Table_Field/clsPrjTabRelationTypeEN';
import { AddRecordResult } from '@/ts/PubFun/AddRecordResult';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';

export const prjTabRelation_Controller = 'PrjTabRelationApi';
export const prjTabRelation_ConstructorName = 'prjTabRelation';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strPrjRelationId:关键字
 * @returns 对象
 **/
export async function PrjTabRelation_GetObjByPrjRelationIdAsync(
  strPrjRelationId: string,
): Promise<clsPrjTabRelationEN | null> {
  const strThisFuncName = 'GetObjByPrjRelationIdAsync';

  if (IsNullOrEmpty(strPrjRelationId) == true) {
    const strMsg = Format(
      '参数:[strPrjRelationId]不能为空!(In clsPrjTabRelationWApi.GetObjByPrjRelationIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByPrjRelationId';
  const strUrl = GetWebApiUrl(prjTabRelation_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strPrjRelationId,
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
      const objPrjTabRelation = PrjTabRelation_GetObjFromJsonObj(returnObj);
      return objPrjTabRelation;
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
        prjTabRelation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTabRelation_ConstructorName,
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
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strPrjRelationId:所给的关键字
 * @returns 对象
 */
export async function PrjTabRelation_GetObjByPrjRelationIdlocalStorage(strPrjRelationId: string) {
  const strThisFuncName = 'GetObjByPrjRelationIdlocalStorage';

  if (IsNullOrEmpty(strPrjRelationId) == true) {
    const strMsg = Format(
      '参数:[strPrjRelationId]不能为空!(In clsPrjTabRelationWApi.GetObjByPrjRelationIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsPrjTabRelationEN._CurrTabName, strPrjRelationId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objPrjTabRelationCache: clsPrjTabRelationEN = JSON.parse(strTempObj);
    return objPrjTabRelationCache;
  }
  try {
    const objPrjTabRelation = await PrjTabRelation_GetObjByPrjRelationIdAsync(strPrjRelationId);
    if (objPrjTabRelation != null) {
      localStorage.setItem(strKey, JSON.stringify(objPrjTabRelation));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objPrjTabRelation;
    }
    return objPrjTabRelation;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strPrjRelationId,
      prjTabRelation_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return;
  }
}

/**
 * 根据关键字获取相关对象, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache)
 * @param strPrjRelationId:所给的关键字
 * @returns 对象
 */
export async function PrjTabRelation_GetObjByPrjRelationIdCache(
  strPrjRelationId: string,
  strPrjId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByPrjRelationIdCache';

  if (IsNullOrEmpty(strPrjRelationId) == true) {
    const strMsg = Format(
      '参数:[strPrjRelationId]不能为空!(In clsPrjTabRelationWApi.GetObjByPrjRelationIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrPrjTabRelationObjLstCache = await PrjTabRelation_GetObjLstCache(strPrjId);
  try {
    const arrPrjTabRelationSel = arrPrjTabRelationObjLstCache.filter(
      (x) => x.prjRelationId == strPrjRelationId,
    );
    let objPrjTabRelation: clsPrjTabRelationEN;
    if (arrPrjTabRelationSel.length > 0) {
      objPrjTabRelation = arrPrjTabRelationSel[0];
      return objPrjTabRelation;
    } else {
      if (bolTryAsyncOnce == true) {
        const objPrjTabRelationConst = await PrjTabRelation_GetObjByPrjRelationIdAsync(
          strPrjRelationId,
        );
        if (objPrjTabRelationConst != null) {
          PrjTabRelation_ReFreshThisCache(strPrjId);
          return objPrjTabRelationConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strPrjRelationId,
      prjTabRelation_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objPrjTabRelation:所给的对象
 * @returns 对象
 */
export async function PrjTabRelation_UpdateObjInLstCache(
  objPrjTabRelation: clsPrjTabRelationEN,
  strPrjId: string,
) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrPrjTabRelationObjLstCache = await PrjTabRelation_GetObjLstCache(strPrjId);
    const obj = arrPrjTabRelationObjLstCache.find(
      (x) =>
        x.tabId == objPrjTabRelation.tabId &&
        x.prjTabRelaTypeId == objPrjTabRelation.prjTabRelaTypeId &&
        x.relationTabId == objPrjTabRelation.relationTabId,
    );
    if (obj != null) {
      objPrjTabRelation.prjRelationId = obj.prjRelationId;
      ObjectAssign(obj, objPrjTabRelation);
    } else {
      arrPrjTabRelationObjLstCache.push(objPrjTabRelation);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      prjTabRelation_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function PrjTabRelation_SortFunDefa(a: clsPrjTabRelationEN, b: clsPrjTabRelationEN): number {
  return a.prjRelationId.localeCompare(b.prjRelationId);
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function PrjTabRelation_SortFunDefa2Fld(
  a: clsPrjTabRelationEN,
  b: clsPrjTabRelationEN,
): number {
  if (a.relationName == b.relationName) return a.tabId.localeCompare(b.tabId);
  else return a.relationName.localeCompare(b.relationName);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function PrjTabRelation_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsPrjTabRelationEN.con_PrjRelationId:
        return (a: clsPrjTabRelationEN, b: clsPrjTabRelationEN) => {
          return a.prjRelationId.localeCompare(b.prjRelationId);
        };
      case clsPrjTabRelationEN.con_RelationName:
        return (a: clsPrjTabRelationEN, b: clsPrjTabRelationEN) => {
          return a.relationName.localeCompare(b.relationName);
        };
      case clsPrjTabRelationEN.con_TabId:
        return (a: clsPrjTabRelationEN, b: clsPrjTabRelationEN) => {
          return a.tabId.localeCompare(b.tabId);
        };
      case clsPrjTabRelationEN.con_PrjTabRelaTypeId:
        return (a: clsPrjTabRelationEN, b: clsPrjTabRelationEN) => {
          return a.prjTabRelaTypeId.localeCompare(b.prjTabRelaTypeId);
        };
      case clsPrjTabRelationEN.con_DnPathId:
        return (a: clsPrjTabRelationEN, b: clsPrjTabRelationEN) => {
          if (a.dnPathId == null) return -1;
          if (b.dnPathId == null) return 1;
          return a.dnPathId.localeCompare(b.dnPathId);
        };
      case clsPrjTabRelationEN.con_RelationTabId:
        return (a: clsPrjTabRelationEN, b: clsPrjTabRelationEN) => {
          return a.relationTabId.localeCompare(b.relationTabId);
        };
      case clsPrjTabRelationEN.con_FldId4TabId:
        return (a: clsPrjTabRelationEN, b: clsPrjTabRelationEN) => {
          return a.fldId4TabId.localeCompare(b.fldId4TabId);
        };
      case clsPrjTabRelationEN.con_FldId4RelaTabId:
        return (a: clsPrjTabRelationEN, b: clsPrjTabRelationEN) => {
          return a.fldId4RelaTabId.localeCompare(b.fldId4RelaTabId);
        };
      case clsPrjTabRelationEN.con_ForeignKeyTabId:
        return (a: clsPrjTabRelationEN, b: clsPrjTabRelationEN) => {
          if (a.foreignKeyTabId == null) return -1;
          if (b.foreignKeyTabId == null) return 1;
          return a.foreignKeyTabId.localeCompare(b.foreignKeyTabId);
        };
      case clsPrjTabRelationEN.con_ForeignKeyFldId:
        return (a: clsPrjTabRelationEN, b: clsPrjTabRelationEN) => {
          if (a.foreignKeyFldId == null) return -1;
          if (b.foreignKeyFldId == null) return 1;
          return a.foreignKeyFldId.localeCompare(b.foreignKeyFldId);
        };
      case clsPrjTabRelationEN.con_IsCheckCurrData:
        return (a: clsPrjTabRelationEN) => {
          if (a.isCheckCurrData == true) return 1;
          else return -1;
        };
      case clsPrjTabRelationEN.con_IsCopyForceRela:
        return (a: clsPrjTabRelationEN) => {
          if (a.isCopyForceRela == true) return 1;
          else return -1;
        };
      case clsPrjTabRelationEN.con_IsUpdRelateFld:
        return (a: clsPrjTabRelationEN) => {
          if (a.isUpdRelateFld == true) return 1;
          else return -1;
        };
      case clsPrjTabRelationEN.con_IsUpdMainTabDate:
        return (a: clsPrjTabRelationEN) => {
          if (a.isUpdMainTabDate == true) return 1;
          else return -1;
        };
      case clsPrjTabRelationEN.con_IsRefreshMainTabCache:
        return (a: clsPrjTabRelationEN) => {
          if (a.isRefreshMainTabCache == true) return 1;
          else return -1;
        };
      case clsPrjTabRelationEN.con_IsDelRelateRec:
        return (a: clsPrjTabRelationEN) => {
          if (a.isDelRelateRec == true) return 1;
          else return -1;
        };
      case clsPrjTabRelationEN.con_PrjId:
        return (a: clsPrjTabRelationEN, b: clsPrjTabRelationEN) => {
          if (a.prjId == null) return -1;
          if (b.prjId == null) return 1;
          return a.prjId.localeCompare(b.prjId);
        };
      case clsPrjTabRelationEN.con_Memo:
        return (a: clsPrjTabRelationEN, b: clsPrjTabRelationEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      case clsPrjTabRelationEN.con_PrimaryKeyTabId:
        return (a: clsPrjTabRelationEN, b: clsPrjTabRelationEN) => {
          if (a.primaryKeyTabId == null) return -1;
          if (b.primaryKeyTabId == null) return 1;
          return a.primaryKeyTabId.localeCompare(b.primaryKeyTabId);
        };
      case clsPrjTabRelationEN.con_PrimaryKeyFldId:
        return (a: clsPrjTabRelationEN, b: clsPrjTabRelationEN) => {
          if (a.primaryKeyFldId == null) return -1;
          if (b.primaryKeyFldId == null) return 1;
          return a.primaryKeyFldId.localeCompare(b.primaryKeyFldId);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[PrjTabRelation]中不存在!(in ${prjTabRelation_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsPrjTabRelationEN.con_PrjRelationId:
        return (a: clsPrjTabRelationEN, b: clsPrjTabRelationEN) => {
          return b.prjRelationId.localeCompare(a.prjRelationId);
        };
      case clsPrjTabRelationEN.con_RelationName:
        return (a: clsPrjTabRelationEN, b: clsPrjTabRelationEN) => {
          return b.relationName.localeCompare(a.relationName);
        };
      case clsPrjTabRelationEN.con_TabId:
        return (a: clsPrjTabRelationEN, b: clsPrjTabRelationEN) => {
          return b.tabId.localeCompare(a.tabId);
        };
      case clsPrjTabRelationEN.con_PrjTabRelaTypeId:
        return (a: clsPrjTabRelationEN, b: clsPrjTabRelationEN) => {
          return b.prjTabRelaTypeId.localeCompare(a.prjTabRelaTypeId);
        };
      case clsPrjTabRelationEN.con_DnPathId:
        return (a: clsPrjTabRelationEN, b: clsPrjTabRelationEN) => {
          if (b.dnPathId == null) return -1;
          if (a.dnPathId == null) return 1;
          return b.dnPathId.localeCompare(a.dnPathId);
        };
      case clsPrjTabRelationEN.con_RelationTabId:
        return (a: clsPrjTabRelationEN, b: clsPrjTabRelationEN) => {
          return b.relationTabId.localeCompare(a.relationTabId);
        };
      case clsPrjTabRelationEN.con_FldId4TabId:
        return (a: clsPrjTabRelationEN, b: clsPrjTabRelationEN) => {
          return b.fldId4TabId.localeCompare(a.fldId4TabId);
        };
      case clsPrjTabRelationEN.con_FldId4RelaTabId:
        return (a: clsPrjTabRelationEN, b: clsPrjTabRelationEN) => {
          return b.fldId4RelaTabId.localeCompare(a.fldId4RelaTabId);
        };
      case clsPrjTabRelationEN.con_ForeignKeyTabId:
        return (a: clsPrjTabRelationEN, b: clsPrjTabRelationEN) => {
          if (b.foreignKeyTabId == null) return -1;
          if (a.foreignKeyTabId == null) return 1;
          return b.foreignKeyTabId.localeCompare(a.foreignKeyTabId);
        };
      case clsPrjTabRelationEN.con_ForeignKeyFldId:
        return (a: clsPrjTabRelationEN, b: clsPrjTabRelationEN) => {
          if (b.foreignKeyFldId == null) return -1;
          if (a.foreignKeyFldId == null) return 1;
          return b.foreignKeyFldId.localeCompare(a.foreignKeyFldId);
        };
      case clsPrjTabRelationEN.con_IsCheckCurrData:
        return (b: clsPrjTabRelationEN) => {
          if (b.isCheckCurrData == true) return 1;
          else return -1;
        };
      case clsPrjTabRelationEN.con_IsCopyForceRela:
        return (b: clsPrjTabRelationEN) => {
          if (b.isCopyForceRela == true) return 1;
          else return -1;
        };
      case clsPrjTabRelationEN.con_IsUpdRelateFld:
        return (b: clsPrjTabRelationEN) => {
          if (b.isUpdRelateFld == true) return 1;
          else return -1;
        };
      case clsPrjTabRelationEN.con_IsUpdMainTabDate:
        return (b: clsPrjTabRelationEN) => {
          if (b.isUpdMainTabDate == true) return 1;
          else return -1;
        };
      case clsPrjTabRelationEN.con_IsRefreshMainTabCache:
        return (b: clsPrjTabRelationEN) => {
          if (b.isRefreshMainTabCache == true) return 1;
          else return -1;
        };
      case clsPrjTabRelationEN.con_IsDelRelateRec:
        return (b: clsPrjTabRelationEN) => {
          if (b.isDelRelateRec == true) return 1;
          else return -1;
        };
      case clsPrjTabRelationEN.con_PrjId:
        return (a: clsPrjTabRelationEN, b: clsPrjTabRelationEN) => {
          if (b.prjId == null) return -1;
          if (a.prjId == null) return 1;
          return b.prjId.localeCompare(a.prjId);
        };
      case clsPrjTabRelationEN.con_Memo:
        return (a: clsPrjTabRelationEN, b: clsPrjTabRelationEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      case clsPrjTabRelationEN.con_PrimaryKeyTabId:
        return (a: clsPrjTabRelationEN, b: clsPrjTabRelationEN) => {
          if (b.primaryKeyTabId == null) return -1;
          if (a.primaryKeyTabId == null) return 1;
          return b.primaryKeyTabId.localeCompare(a.primaryKeyTabId);
        };
      case clsPrjTabRelationEN.con_PrimaryKeyFldId:
        return (a: clsPrjTabRelationEN, b: clsPrjTabRelationEN) => {
          if (b.primaryKeyFldId == null) return -1;
          if (a.primaryKeyFldId == null) return 1;
          return b.primaryKeyFldId.localeCompare(a.primaryKeyFldId);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[PrjTabRelation]中不存在!(in ${prjTabRelation_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strPrjRelationId:所给的关键字
 * @returns 对象
 */
export async function PrjTabRelation_GetNameByPrjRelationIdCache(
  strPrjRelationId: string,
  strPrjId: string,
) {
  if (IsNullOrEmpty(strPrjRelationId) == true) {
    const strMsg = Format(
      '参数:[strPrjRelationId]不能为空!(In clsPrjTabRelationWApi.GetNameByPrjRelationIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrPrjTabRelationObjLstCache = await PrjTabRelation_GetObjLstCache(strPrjId);
  if (arrPrjTabRelationObjLstCache == null) return '';
  try {
    const arrPrjTabRelationSel = arrPrjTabRelationObjLstCache.filter(
      (x) => x.prjRelationId == strPrjRelationId,
    );
    let objPrjTabRelation: clsPrjTabRelationEN;
    if (arrPrjTabRelationSel.length > 0) {
      objPrjTabRelation = arrPrjTabRelationSel[0];
      return objPrjTabRelation.relationName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strPrjRelationId,
    );
    console.error(strMsg);
    alert(strMsg);
  }
  return '';
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function PrjTabRelation_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsPrjTabRelationEN.con_PrjRelationId:
      return (obj: clsPrjTabRelationEN) => {
        return obj.prjRelationId === value;
      };
    case clsPrjTabRelationEN.con_RelationName:
      return (obj: clsPrjTabRelationEN) => {
        return obj.relationName === value;
      };
    case clsPrjTabRelationEN.con_TabId:
      return (obj: clsPrjTabRelationEN) => {
        return obj.tabId === value;
      };
    case clsPrjTabRelationEN.con_PrjTabRelaTypeId:
      return (obj: clsPrjTabRelationEN) => {
        return obj.prjTabRelaTypeId === value;
      };
    case clsPrjTabRelationEN.con_DnPathId:
      return (obj: clsPrjTabRelationEN) => {
        return obj.dnPathId === value;
      };
    case clsPrjTabRelationEN.con_RelationTabId:
      return (obj: clsPrjTabRelationEN) => {
        return obj.relationTabId === value;
      };
    case clsPrjTabRelationEN.con_FldId4TabId:
      return (obj: clsPrjTabRelationEN) => {
        return obj.fldId4TabId === value;
      };
    case clsPrjTabRelationEN.con_FldId4RelaTabId:
      return (obj: clsPrjTabRelationEN) => {
        return obj.fldId4RelaTabId === value;
      };
    case clsPrjTabRelationEN.con_ForeignKeyTabId:
      return (obj: clsPrjTabRelationEN) => {
        return obj.foreignKeyTabId === value;
      };
    case clsPrjTabRelationEN.con_ForeignKeyFldId:
      return (obj: clsPrjTabRelationEN) => {
        return obj.foreignKeyFldId === value;
      };
    case clsPrjTabRelationEN.con_IsCheckCurrData:
      return (obj: clsPrjTabRelationEN) => {
        return obj.isCheckCurrData === value;
      };
    case clsPrjTabRelationEN.con_IsCopyForceRela:
      return (obj: clsPrjTabRelationEN) => {
        return obj.isCopyForceRela === value;
      };
    case clsPrjTabRelationEN.con_IsUpdRelateFld:
      return (obj: clsPrjTabRelationEN) => {
        return obj.isUpdRelateFld === value;
      };
    case clsPrjTabRelationEN.con_IsUpdMainTabDate:
      return (obj: clsPrjTabRelationEN) => {
        return obj.isUpdMainTabDate === value;
      };
    case clsPrjTabRelationEN.con_IsRefreshMainTabCache:
      return (obj: clsPrjTabRelationEN) => {
        return obj.isRefreshMainTabCache === value;
      };
    case clsPrjTabRelationEN.con_IsDelRelateRec:
      return (obj: clsPrjTabRelationEN) => {
        return obj.isDelRelateRec === value;
      };
    case clsPrjTabRelationEN.con_PrjId:
      return (obj: clsPrjTabRelationEN) => {
        return obj.prjId === value;
      };
    case clsPrjTabRelationEN.con_Memo:
      return (obj: clsPrjTabRelationEN) => {
        return obj.memo === value;
      };
    case clsPrjTabRelationEN.con_PrimaryKeyTabId:
      return (obj: clsPrjTabRelationEN) => {
        return obj.primaryKeyTabId === value;
      };
    case clsPrjTabRelationEN.con_PrimaryKeyFldId:
      return (obj: clsPrjTabRelationEN) => {
        return obj.primaryKeyFldId === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[PrjTabRelation]中不存在!(in ${prjTabRelation_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 @param strPrjId:缓存的分类字段
 * @returns 返回一个输出字段值
*/
export async function PrjTabRelation_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
  strPrjIdClassfy: string,
) {
  //const strThisFuncName = "func";

  if (IsNullOrEmpty(strPrjIdClassfy) == true) {
    const strMsg = Format('参数:[strPrjIdClassfy]不能为空!(In clsPrjTabRelationWApi.func)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjIdClassfy.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjIdClassfy]的长度:[{0}]不正确!(clsPrjTabRelationWApi.func)',
      strPrjIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName != clsPrjTabRelationEN.con_PrjRelationId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsPrjTabRelationEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsPrjTabRelationEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strPrjRelationId = strInValue;
  if (IsNullOrEmpty(strPrjRelationId) == true) {
    return '';
  }
  const objPrjTabRelation = await PrjTabRelation_GetObjByPrjRelationIdCache(
    strPrjRelationId,
    strPrjIdClassfy,
  );
  if (objPrjTabRelation == null) return '';
  if (objPrjTabRelation.GetFldValue(strOutFldName) == null) return '';
  return objPrjTabRelation.GetFldValue(strOutFldName).toString();
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 @param strPrjId:缓存的分类字段
 * @returns 返回一个关键字值列表
*/
export async function PrjTabRelation_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
  strPrjIdClassfy: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (IsNullOrEmpty(strPrjIdClassfy) == true) {
    const strMsg = Format('参数:[strPrjIdClassfy]不能为空!(In clsPrjTabRelationWApi.funcKey)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjIdClassfy.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjIdClassfy]的长度:[{0}]不正确!(clsPrjTabRelationWApi.funcKey)',
      strPrjIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName == clsPrjTabRelationEN.con_PrjRelationId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrPrjTabRelation = await PrjTabRelation_GetObjLstCache(strPrjIdClassfy);
  if (arrPrjTabRelation == null) return [];
  let arrPrjTabRelationSel = arrPrjTabRelation;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrPrjTabRelationSel = arrPrjTabRelationSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrPrjTabRelationSel = arrPrjTabRelationSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrPrjTabRelationSel = arrPrjTabRelationSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrPrjTabRelationSel = arrPrjTabRelationSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrPrjTabRelationSel = arrPrjTabRelationSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrPrjTabRelationSel = arrPrjTabRelationSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrPrjTabRelationSel = arrPrjTabRelationSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrPrjTabRelationSel = arrPrjTabRelationSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrPrjTabRelationSel = arrPrjTabRelationSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrPrjTabRelationSel = arrPrjTabRelationSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrPrjTabRelationSel.length == 0) return [];
  return arrPrjTabRelationSel.map((x) => x.prjRelationId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function PrjTabRelation_GetFldValueAsync(
  strFldName: string,
  strWhereCond: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetFldValueAsync';
  const strAction = 'GetFldValue';
  const strUrl = GetWebApiUrl(prjTabRelation_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strFldName,
      strWhereCond,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      const arrId = data.returnStrLst.split(',');
      return arrId;
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
        prjTabRelation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTabRelation_ConstructorName,
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
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function PrjTabRelation_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(prjTabRelation_Controller, strAction);

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
        prjTabRelation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTabRelation_ConstructorName,
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
export async function PrjTabRelation_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(prjTabRelation_Controller, strAction);

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
        prjTabRelation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTabRelation_ConstructorName,
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
export async function PrjTabRelation_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsPrjTabRelationEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(prjTabRelation_Controller, strAction);

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
      const objPrjTabRelation = PrjTabRelation_GetObjFromJsonObj(returnObj);
      return objPrjTabRelation;
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
        prjTabRelation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTabRelation_ConstructorName,
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
export async function PrjTabRelation_GetObjLstClientCache(strPrjId: string) {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsPrjTabRelationEN.WhereFormat) == false) {
    strWhereCond = Format(clsPrjTabRelationEN.WhereFormat, strPrjId);
  } else {
    strWhereCond = Format("PrjId='{0}'", strPrjId);
  }
  const strKey = Format('{0}_{1}', clsPrjTabRelationEN._CurrTabName, strPrjId);
  if (IsNullOrEmpty(clsPrjTabRelationEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsPrjTabRelationEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrPrjTabRelationExObjLstCache: Array<clsPrjTabRelationEN> = CacheHelper.Get(strKey);
    const arrPrjTabRelationObjLstT = PrjTabRelation_GetObjLstByJSONObjLst(
      arrPrjTabRelationExObjLstCache,
    );
    return arrPrjTabRelationObjLstT;
  }
  try {
    const arrPrjTabRelationExObjLst = await PrjTabRelation_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrPrjTabRelationExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrPrjTabRelationExObjLst.length,
    );
    console.log(strInfo);
    return arrPrjTabRelationExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      prjTabRelation_ConstructorName,
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
export async function PrjTabRelation_GetObjLstlocalStorage(strPrjId: string) {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsPrjTabRelationEN.WhereFormat) == false) {
    strWhereCond = Format(clsPrjTabRelationEN.WhereFormat, strPrjId);
  } else {
    strWhereCond = Format("{0}='{1}'", clsPrjTabRelationEN.con_PrjId, strPrjId);
  }
  const strKey = Format('{0}_{1}', clsPrjTabRelationEN._CurrTabName, strPrjId);
  if (IsNullOrEmpty(clsPrjTabRelationEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsPrjTabRelationEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrPrjTabRelationExObjLstCache: Array<clsPrjTabRelationEN> = JSON.parse(strTempObjLst);
    const arrPrjTabRelationObjLstT = PrjTabRelation_GetObjLstByJSONObjLst(
      arrPrjTabRelationExObjLstCache,
    );
    return arrPrjTabRelationObjLstT;
  }
  try {
    const arrPrjTabRelationExObjLst = await PrjTabRelation_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrPrjTabRelationExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrPrjTabRelationExObjLst.length,
    );
    console.log(strInfo);
    return arrPrjTabRelationExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      prjTabRelation_ConstructorName,
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
export async function PrjTabRelation_GetObjLstlocalStoragePureCache(strPrjId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsPrjTabRelationEN._CurrTabName, strPrjId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrPrjTabRelationObjLstCache: Array<clsPrjTabRelationEN> = JSON.parse(strTempObjLst);
    return arrPrjTabRelationObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function PrjTabRelation_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsPrjTabRelationEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(prjTabRelation_Controller, strAction);

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
          prjTabRelation_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = PrjTabRelation_GetObjLstByJSONObjLst(returnObjLst);
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
        prjTabRelation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTabRelation_ConstructorName,
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
export async function PrjTabRelation_GetObjLstsessionStorage(strPrjId: string) {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsPrjTabRelationEN.WhereFormat) == false) {
    strWhereCond = Format(clsPrjTabRelationEN.WhereFormat, strPrjId);
  } else {
    strWhereCond = Format("{0}='{1}'", clsPrjTabRelationEN.con_PrjId, strPrjId);
  }
  const strKey = Format('{0}_{1}', clsPrjTabRelationEN._CurrTabName, strPrjId);
  if (IsNullOrEmpty(clsPrjTabRelationEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsPrjTabRelationEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrPrjTabRelationExObjLstCache: Array<clsPrjTabRelationEN> = JSON.parse(strTempObjLst);
    const arrPrjTabRelationObjLstT = PrjTabRelation_GetObjLstByJSONObjLst(
      arrPrjTabRelationExObjLstCache,
    );
    return arrPrjTabRelationObjLstT;
  }
  try {
    const arrPrjTabRelationExObjLst = await PrjTabRelation_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrPrjTabRelationExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrPrjTabRelationExObjLst.length,
    );
    console.log(strInfo);
    return arrPrjTabRelationExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      prjTabRelation_ConstructorName,
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
export async function PrjTabRelation_GetObjLstsessionStoragePureCache(strPrjId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsPrjTabRelationEN._CurrTabName, strPrjId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrPrjTabRelationObjLstCache: Array<clsPrjTabRelationEN> = JSON.parse(strTempObjLst);
    return arrPrjTabRelationObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function PrjTabRelation_GetObjLstCache(
  strPrjId: string,
): Promise<Array<clsPrjTabRelationEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空！(In clsPrjTabRelationWApi.PrjTabRelation_GetObjLstCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确！(clsPrjTabRelationWApi.PrjTabRelation_GetObjLstCache)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  let arrPrjTabRelationObjLstCache;
  switch (clsPrjTabRelationEN.CacheModeId) {
    case '04': //sessionStorage
      arrPrjTabRelationObjLstCache = await PrjTabRelation_GetObjLstsessionStorage(strPrjId);
      break;
    case '03': //localStorage
      arrPrjTabRelationObjLstCache = await PrjTabRelation_GetObjLstlocalStorage(strPrjId);
      break;
    case '02': //ClientCache
      arrPrjTabRelationObjLstCache = await PrjTabRelation_GetObjLstClientCache(strPrjId);
      break;
    default:
      arrPrjTabRelationObjLstCache = await PrjTabRelation_GetObjLstClientCache(strPrjId);
      break;
  }
  return arrPrjTabRelationObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function PrjTabRelation_GetObjLstPureCache(strPrjId: string) {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrPrjTabRelationObjLstCache;
  switch (clsPrjTabRelationEN.CacheModeId) {
    case '04': //sessionStorage
      arrPrjTabRelationObjLstCache = await PrjTabRelation_GetObjLstsessionStoragePureCache(
        strPrjId,
      );
      break;
    case '03': //localStorage
      arrPrjTabRelationObjLstCache = await PrjTabRelation_GetObjLstlocalStoragePureCache(strPrjId);
      break;
    case '02': //ClientCache
      arrPrjTabRelationObjLstCache = null;
      break;
    default:
      arrPrjTabRelationObjLstCache = null;
      break;
  }
  return arrPrjTabRelationObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrPrjRelationIdCond:条件对象
 * @returns 对象列表子集
 */
export async function PrjTabRelation_GetSubObjLstCache(
  objPrjTabRelationCond: ConditionCollection,
  strPrjId: string,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrPrjTabRelationObjLstCache = await PrjTabRelation_GetObjLstCache(strPrjId);
  let arrPrjTabRelationSel = arrPrjTabRelationObjLstCache;
  if (objPrjTabRelationCond.GetConditions().length == 0) return arrPrjTabRelationSel;
  try {
    //console.log(sstrKeys);
    for (const objCondition of objPrjTabRelationCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrPrjTabRelationSel = arrPrjTabRelationSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrPrjTabRelationSel = arrPrjTabRelationSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrPrjTabRelationSel = arrPrjTabRelationSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrPrjTabRelationSel = arrPrjTabRelationSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrPrjTabRelationSel = arrPrjTabRelationSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrPrjTabRelationSel = arrPrjTabRelationSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrPrjTabRelationSel = arrPrjTabRelationSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrPrjTabRelationSel = arrPrjTabRelationSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrPrjTabRelationSel = arrPrjTabRelationSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrPrjTabRelationSel = arrPrjTabRelationSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrPrjTabRelationSel = arrPrjTabRelationSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrPrjTabRelationSel = arrPrjTabRelationSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrPrjTabRelationSel = arrPrjTabRelationSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrPrjTabRelationSel = arrPrjTabRelationSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrPrjTabRelationSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objPrjTabRelationCond),
      prjTabRelation_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsPrjTabRelationEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrPrjRelationId:关键字列表
 * @returns 对象列表
 **/
export async function PrjTabRelation_GetObjLstByPrjRelationIdLstAsync(
  arrPrjRelationId: Array<string>,
): Promise<Array<clsPrjTabRelationEN>> {
  const strThisFuncName = 'GetObjLstByPrjRelationIdLstAsync';
  const strAction = 'GetObjLstByPrjRelationIdLst';
  const strUrl = GetWebApiUrl(prjTabRelation_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrPrjRelationId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          prjTabRelation_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = PrjTabRelation_GetObjLstByJSONObjLst(returnObjLst);
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
        prjTabRelation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTabRelation_ConstructorName,
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
 * @param arrstrPrjRelationIdLst:关键字列表
 * @returns 对象列表
 */
export async function PrjTabRelation_GetObjLstByPrjRelationIdLstCache(
  arrPrjRelationIdLst: Array<string>,
  strPrjId: string,
) {
  const strThisFuncName = 'GetObjLstByPrjRelationIdLstCache';
  try {
    const arrPrjTabRelationObjLstCache = await PrjTabRelation_GetObjLstCache(strPrjId);
    const arrPrjTabRelationSel = arrPrjTabRelationObjLstCache.filter(
      (x) => arrPrjRelationIdLst.indexOf(x.prjRelationId) > -1,
    );
    return arrPrjTabRelationSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrPrjRelationIdLst.join(','),
      prjTabRelation_ConstructorName,
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
export async function PrjTabRelation_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsPrjTabRelationEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(prjTabRelation_Controller, strAction);

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
          prjTabRelation_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = PrjTabRelation_GetObjLstByJSONObjLst(returnObjLst);
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
        prjTabRelation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTabRelation_ConstructorName,
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
export async function PrjTabRelation_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsPrjTabRelationEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(prjTabRelation_Controller, strAction);

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
          prjTabRelation_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = PrjTabRelation_GetObjLstByJSONObjLst(returnObjLst);
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
        prjTabRelation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTabRelation_ConstructorName,
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
export async function PrjTabRelation_GetObjLstByPagerCache(
  objPagerPara: stuPagerPara,
  strPrjId: string,
) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsPrjTabRelationEN>();
  const arrPrjTabRelationObjLstCache = await PrjTabRelation_GetObjLstCache(strPrjId);
  if (arrPrjTabRelationObjLstCache.length == 0) return arrPrjTabRelationObjLstCache;
  let arrPrjTabRelationSel = arrPrjTabRelationObjLstCache;
  const objPrjTabRelationCond = objPagerPara.conditionCollection;
  if (objPrjTabRelationCond == null) {
    const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return new Array<clsPrjTabRelationEN>();
  }
  //console.log("clsPrjTabRelationWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    for (const objCondition of objPrjTabRelationCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrPrjTabRelationSel = arrPrjTabRelationSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrPrjTabRelationSel = arrPrjTabRelationSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrPrjTabRelationSel = arrPrjTabRelationSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrPrjTabRelationSel = arrPrjTabRelationSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrPrjTabRelationSel = arrPrjTabRelationSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrPrjTabRelationSel = arrPrjTabRelationSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrPrjTabRelationSel = arrPrjTabRelationSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrPrjTabRelationSel = arrPrjTabRelationSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrPrjTabRelationSel = arrPrjTabRelationSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrPrjTabRelationSel = arrPrjTabRelationSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrPrjTabRelationSel = arrPrjTabRelationSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrPrjTabRelationSel = arrPrjTabRelationSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrPrjTabRelationSel = arrPrjTabRelationSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrPrjTabRelationSel = arrPrjTabRelationSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrPrjTabRelationSel = arrPrjTabRelationSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrPrjTabRelationSel.length == 0) return arrPrjTabRelationSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrPrjTabRelationSel = arrPrjTabRelationSel.sort(
        PrjTabRelation_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrPrjTabRelationSel = arrPrjTabRelationSel.sort(objPagerPara.sortFun);
    }
    arrPrjTabRelationSel = arrPrjTabRelationSel.slice(intStart, intEnd);
    return arrPrjTabRelationSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      prjTabRelation_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsPrjTabRelationEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function PrjTabRelation_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsPrjTabRelationEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsPrjTabRelationEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(prjTabRelation_Controller, strAction);

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
          prjTabRelation_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = PrjTabRelation_GetObjLstByJSONObjLst(returnObjLst);
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
        prjTabRelation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTabRelation_ConstructorName,
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
 * @param strPrjRelationId:关键字
 * @returns 获取删除的结果
 **/
export async function PrjTabRelation_DelRecordAsync(strPrjRelationId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(prjTabRelation_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strPrjRelationId);

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
        prjTabRelation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTabRelation_ConstructorName,
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
 * @param arrPrjRelationId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function PrjTabRelation_DelPrjTabRelationsAsync(
  arrPrjRelationId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelPrjTabRelationsAsync';
  const strAction = 'DelPrjTabRelations';
  const strUrl = GetWebApiUrl(prjTabRelation_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrPrjRelationId, config);
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
        prjTabRelation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTabRelation_ConstructorName,
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
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjExLstByPagerCache)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function PrjTabRelation_GetObjExLstByPagerCache(
  objPagerPara: stuPagerPara,
  strPrjId: string,
): Promise<Array<clsPrjTabRelationENEx>> {
  const strThisFuncName = 'GetObjLstByPagerCache';
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  const isFuncMapKey = `${objSortInfo.SortFld}`;
  const arrPrjTabRelationObjLst = await PrjTabRelation_GetObjLstCache(strPrjId);
  //从缓存中获取对象，如果缓存中不存在就扩展复制
  const arrNewObj = new Array<clsPrjTabRelationENEx>();
  const arrPrjTabRelationExObjLst = arrPrjTabRelationObjLst.map((obj) => {
    const cacheKey = `${obj.prjRelationId}_${obj.prjId}`;
    if (prjTabRelationCache[cacheKey]) {
      const oldObj = prjTabRelationCache[cacheKey];
      return oldObj;
    } else {
      const newObj = PrjTabRelation_CopyToEx(obj);
      arrNewObj.push(newObj);
      prjTabRelationCache[cacheKey] = newObj;
      return newObj;
    }
  });
  for (const newObj of arrNewObj) {
    for (const strFldName of Object.keys(isFuncMapCache)) {
      await PrjTabRelation_FuncMapByFldName(strFldName, newObj);
    }
  }
  //检查关于当前扩展排序字段是否获取得值，如果没有获取过，就获取，并存缓存
  const bolIsFuncMap = isFuncMapCache[isFuncMapKey];
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsPrjTabRelationEN.AttributeName.indexOf(objSortInfo.SortFld) == -1 &&
    (bolIsFuncMap == false || bolIsFuncMap == undefined)
  ) {
    for (const newObj of arrPrjTabRelationExObjLst) {
      await PrjTabRelation_FuncMapByFldName(objSortInfo.SortFld, newObj);
      const cacheKey = `${newObj.prjRelationId}_${newObj.prjId}`;
      prjTabRelationCache[cacheKey] = newObj;
    }
    isFuncMapCache[isFuncMapKey] = true;
  }
  if (arrPrjTabRelationExObjLst.length == 0) return arrPrjTabRelationExObjLst;
  let arrPrjTabRelationSel: Array<clsPrjTabRelationENEx> = arrPrjTabRelationExObjLst;
  const objPrjTabRelationCond = objPagerPara.conditionCollection;
  if (objPrjTabRelationCond == null) {
    const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return arrPrjTabRelationExObjLst;
  }
  try {
    for (const objCondition of objPrjTabRelationCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrPrjTabRelationSel = arrPrjTabRelationSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrPrjTabRelationSel = arrPrjTabRelationSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrPrjTabRelationSel = arrPrjTabRelationSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrPrjTabRelationSel = arrPrjTabRelationSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrPrjTabRelationSel = arrPrjTabRelationSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrPrjTabRelationSel = arrPrjTabRelationSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrPrjTabRelationSel = arrPrjTabRelationSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrPrjTabRelationSel = arrPrjTabRelationSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.split(',');
            arrPrjTabRelationSel = arrPrjTabRelationSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrPrjTabRelationSel = arrPrjTabRelationSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrPrjTabRelationSel = arrPrjTabRelationSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrPrjTabRelationSel = arrPrjTabRelationSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrPrjTabRelationSel = arrPrjTabRelationSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrPrjTabRelationSel = arrPrjTabRelationSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrPrjTabRelationSel = arrPrjTabRelationSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrPrjTabRelationSel.length == 0) return arrPrjTabRelationSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      arrPrjTabRelationSel = arrPrjTabRelationSel.sort(
        PrjTabRelation_SortFunByExKey(objSortInfo.SortFld, objSortInfo.SortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrPrjTabRelationSel = arrPrjTabRelationSel.sort(objPagerPara.sortFun);
    }
    arrPrjTabRelationSel = arrPrjTabRelationSel.slice(intStart, intEnd);
    return arrPrjTabRelationSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      prjTabRelation_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsPrjTabRelationENEx>();
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CopyToEx)
 * @param objPrjTabRelationENS:源对象
 * @returns 目标对象=>clsPrjTabRelationEN:objPrjTabRelationENT
 **/
export function PrjTabRelation_CopyToEx(
  objPrjTabRelationENS: clsPrjTabRelationEN,
): clsPrjTabRelationENEx {
  const strThisFuncName = PrjTabRelation_CopyToEx.name;
  const objPrjTabRelationENT = new clsPrjTabRelationENEx();
  try {
    ObjectAssign(objPrjTabRelationENT, objPrjTabRelationENS);
    return objPrjTabRelationENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001294)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      prjTabRelation_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objPrjTabRelationENT;
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function PrjTabRelation_FuncMapByFldName(
  strFldName: string,
  objPrjTabRelationEx: clsPrjTabRelationENEx,
) {
  const strThisFuncName = PrjTabRelation_FuncMapByFldName.name;
  strFldName = strFldName.replace('|Ex', '');
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsPrjTabRelationEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsPrjTabRelationENEx.con_TabName:
      return PrjTabRelation_FuncMapTabName(objPrjTabRelationEx);
    case clsPrjTabRelationENEx.con_RelaTabName:
      return PrjTabRelation_FuncMapRelaTabName(objPrjTabRelationEx);
    case clsPrjTabRelationENEx.con_TabRelationTypeName:
      return PrjTabRelation_FuncMapTabRelationTypeName(objPrjTabRelationEx);
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
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByExKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function PrjTabRelation_SortFunByExKey(strKey: string, AscOrDesc: string) {
  strKey = strKey.replace('|Ex', '');
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsPrjTabRelationENEx.con_TabName:
        return (a: clsPrjTabRelationENEx, b: clsPrjTabRelationENEx) => {
          return a.tabName.localeCompare(b.tabName);
        };
      case clsPrjTabRelationENEx.con_RelaTabName:
        return (a: clsPrjTabRelationENEx, b: clsPrjTabRelationENEx) => {
          if (a.relaTabName === null && b.relaTabName === null) return 0;
          if (a.relaTabName === null) return -1;
          if (b.relaTabName === null) return 1;
          return a.relaTabName.localeCompare(b.relaTabName);
        };
      case clsPrjTabRelationENEx.con_TabRelationTypeName:
        return (a: clsPrjTabRelationENEx, b: clsPrjTabRelationENEx) => {
          return a.tabRelationTypeName.localeCompare(b.tabRelationTypeName);
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
          if (a.relaTabName === null && b.relaTabName === null) return 0;
          if (a.relaTabName === null) return 1;
          if (b.relaTabName === null) return -1;
          return b.relaTabName.localeCompare(a.relaTabName);
        };
      case clsPrjTabRelationENEx.con_TabRelationTypeName:
        return (a: clsPrjTabRelationENEx, b: clsPrjTabRelationENEx) => {
          return b.tabRelationTypeName.localeCompare(a.tabRelationTypeName);
        };
      default:
        return PrjTabRelation_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objPrjTabRelationS:源对象
 **/
export async function PrjTabRelation_FuncMapTabName(objPrjTabRelation: clsPrjTabRelationENEx) {
  const strThisFuncName = PrjTabRelation_FuncMapTabName.name;
  try {
    if (IsNullOrEmpty(objPrjTabRelation.tabName) == true) {
      const vPrjTabSimTabId = objPrjTabRelation.tabId;
      if (IsNullOrEmpty(objPrjTabRelation.prjId) == true) {
        const strMsg = `函数映射[TabName]数据出错,prjId不能为空!(in ${prjTabRelation_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      const vPrjTabSimTabName = await vPrjTab_Sim_func(
        clsvPrjTab_SimEN.con_TabId,
        clsvPrjTab_SimEN.con_TabName,
        vPrjTabSimTabId,
        objPrjTabRelation.prjId,
      );
      objPrjTabRelation.tabName = vPrjTabSimTabName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001298)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      prjTabRelation_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objPrjTabRelationS:源对象
 **/
export async function PrjTabRelation_FuncMapRelaTabName(objPrjTabRelation: clsPrjTabRelationENEx) {
  const strThisFuncName = PrjTabRelation_FuncMapRelaTabName.name;
  try {
    if (IsNullOrEmpty(objPrjTabRelation.relaTabName) == true) {
      const vPrjTabSimTabId = objPrjTabRelation.relationTabId;
      if (IsNullOrEmpty(objPrjTabRelation.prjId) == true) {
        const strMsg = `函数映射[RelaTabName]数据出错,prjId不能为空!(in ${prjTabRelation_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      const vPrjTabSimTabName = await vPrjTab_Sim_func(
        clsvPrjTab_SimEN.con_TabId,
        clsvPrjTab_SimEN.con_TabName,
        vPrjTabSimTabId,
        objPrjTabRelation.prjId,
      );
      objPrjTabRelation.relaTabName = vPrjTabSimTabName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001299)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      prjTabRelation_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objPrjTabRelationS:源对象
 **/
export async function PrjTabRelation_FuncMapTabRelationTypeName(
  objPrjTabRelation: clsPrjTabRelationENEx,
) {
  const strThisFuncName = PrjTabRelation_FuncMapTabRelationTypeName.name;
  try {
    if (IsNullOrEmpty(objPrjTabRelation.tabRelationTypeName) == true) {
      const PrjTabRelationTypePrjTabRelaTypeId = objPrjTabRelation.prjTabRelaTypeId;
      const PrjTabRelationTypeTabRelationTypeName = await PrjTabRelationType_func(
        clsPrjTabRelationTypeEN.con_PrjTabRelaTypeId,
        clsPrjTabRelationTypeEN.con_TabRelationTypeName,
        PrjTabRelationTypePrjTabRelaTypeId,
      );
      objPrjTabRelation.tabRelationTypeName = PrjTabRelationTypeTabRelationTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001300)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      prjTabRelation_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 根据条件删除记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelMultiRecordByCondAsync)
 * @returns 实际删除记录的个数
 **/
export async function PrjTabRelation_DelPrjTabRelationsByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelPrjTabRelationsByCondAsync';
  const strAction = 'DelPrjTabRelationsByCond';
  const strUrl = GetWebApiUrl(prjTabRelation_Controller, strAction);

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
        prjTabRelation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTabRelation_ConstructorName,
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
 * @param objPrjTabRelationEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function PrjTabRelation_AddNewRecordAsync(
  objPrjTabRelationEN: clsPrjTabRelationEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objPrjTabRelationEN);
  const strUrl = GetWebApiUrl(prjTabRelation_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPrjTabRelationEN, config);
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
        prjTabRelation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTabRelation_ConstructorName,
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
 * @param objPrjTabRelationEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function PrjTabRelation_AddNewRecordWithMaxIdAsync(
  objPrjTabRelationEN: clsPrjTabRelationEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(prjTabRelation_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPrjTabRelationEN, config);
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
        prjTabRelation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTabRelation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

/** 添加新记录,保存函数
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewObjSave)
 **/
export async function PrjTabRelation_AddNewObjSave(
  objPrjTabRelationEN: clsPrjTabRelationEN,
): Promise<AddRecordResult> {
  const strThisFuncName = 'AddNewObjSave';
  try {
    PrjTabRelation_CheckPropertyNew(objPrjTabRelationEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${prjTabRelation_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    alert(strMsg);
    return { keyword: '', success: false }; //一定要有一个返回值,否则会出错!
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await PrjTabRelation_CheckUniCond4Add(objPrjTabRelationEN);
    if (bolIsExistCond == false) {
      return { keyword: '', success: false };
    }
    let returnBool = false;
    const returnKeyId = await PrjTabRelation_AddNewRecordWithMaxIdAsync(objPrjTabRelationEN);
    if (IsNullOrEmpty(returnKeyId) == false) {
      returnBool = true;
    }
    if (returnBool == true) {
      PrjTabRelation_ReFreshCache(objPrjTabRelationEN.prjId);
    } else {
      const strInfo = `添加[工程表关系(PrjTabRelation)]记录不成功!`;
      //显示信息框
      throw strInfo;
    }
    return { keyword: returnKeyId, success: returnBool }; //一定要有一个返回值,否则会出错!
  } catch (e) {
    const strMsg = `添加记录不成功,${e}.(in ${prjTabRelation_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export async function PrjTabRelation_CheckUniCond4Add(
  objPrjTabRelationEN: clsPrjTabRelationEN,
): Promise<boolean> {
  const strUniquenessCondition = PrjTabRelation_GetUniCondStr(objPrjTabRelationEN);
  const bolIsExistCondition = await PrjTabRelation_IsExistRecordAsync(strUniquenessCondition);
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

/** 为修改记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Update)
 **/
export async function PrjTabRelation_CheckUniCond4Update(
  objPrjTabRelationEN: clsPrjTabRelationEN,
): Promise<boolean> {
  const strUniquenessCondition = PrjTabRelation_GetUniCondStr4Update(objPrjTabRelationEN);
  const bolIsExistCondition = await PrjTabRelation_IsExistRecordAsync(strUniquenessCondition);
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

/** 修改记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjSave)
 **/
export async function PrjTabRelation_UpdateObjSave(
  objPrjTabRelationEN: clsPrjTabRelationEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateObjSave';
  objPrjTabRelationEN.sfUpdFldSetStr = objPrjTabRelationEN.updFldString; //设置哪些字段被修改(脏字段)
  if (objPrjTabRelationEN.prjRelationId == '' || objPrjTabRelationEN.prjRelationId == undefined) {
    console.error('关键字不能为空!');
    throw '关键字不能为空!';
  }
  try {
    PrjTabRelation_CheckProperty4Update(objPrjTabRelationEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${prjTabRelation_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await PrjTabRelation_CheckUniCond4Update(objPrjTabRelationEN);
    if (bolIsExistCond == false) {
      return false;
    }
    const returnBool = await PrjTabRelation_UpdateRecordAsync(objPrjTabRelationEN);
    if (returnBool == true) {
      PrjTabRelation_ReFreshCache(objPrjTabRelationEN.prjId);
    }
    return returnBool;
  } catch (e) {
    const strMsg = `修改记录不成功,${e}.(in ${prjTabRelation_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objPrjTabRelationEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function PrjTabRelation_AddNewRecordWithReturnKeyAsync(
  objPrjTabRelationEN: clsPrjTabRelationEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(prjTabRelation_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPrjTabRelationEN, config);
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
        prjTabRelation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTabRelation_ConstructorName,
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
 * @param objPrjTabRelationEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function PrjTabRelation_UpdateRecordAsync(
  objPrjTabRelationEN: clsPrjTabRelationEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objPrjTabRelationEN.sfUpdFldSetStr === undefined ||
    objPrjTabRelationEN.sfUpdFldSetStr === null ||
    objPrjTabRelationEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objPrjTabRelationEN.prjRelationId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(prjTabRelation_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPrjTabRelationEN, config);
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
        prjTabRelation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTabRelation_ConstructorName,
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
 * 调用WebApi来编辑记录（存在就修改，不存在就添加）,数据传递使用JSON串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_EditRecordExAsync)
 * @param objPrjTabRelationEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function PrjTabRelation_EditRecordExAsync(
  objPrjTabRelationEN: clsPrjTabRelationEN,
): Promise<boolean> {
  const strThisFuncName = 'EditRecordExAsync';
  const strAction = 'EditRecordEx';
  if (
    objPrjTabRelationEN.sfUpdFldSetStr === undefined ||
    objPrjTabRelationEN.sfUpdFldSetStr === null ||
    objPrjTabRelationEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objPrjTabRelationEN.prjRelationId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(prjTabRelation_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPrjTabRelationEN, config);
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
        prjTabRelation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTabRelation_ConstructorName,
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
 * @param objPrjTabRelationEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function PrjTabRelation_UpdateWithConditionAsync(
  objPrjTabRelationEN: clsPrjTabRelationEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objPrjTabRelationEN.sfUpdFldSetStr === undefined ||
    objPrjTabRelationEN.sfUpdFldSetStr === null ||
    objPrjTabRelationEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objPrjTabRelationEN.prjRelationId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(prjTabRelation_Controller, strAction);
  objPrjTabRelationEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPrjTabRelationEN, config);
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
        prjTabRelation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTabRelation_ConstructorName,
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
 * @param objstrPrjRelationIdCond:条件对象
 * @returns 对象列表子集
 */
export async function PrjTabRelation_IsExistRecordCache(
  objPrjTabRelationCond: ConditionCollection,
  strPrjId: string,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrPrjTabRelationObjLstCache = await PrjTabRelation_GetObjLstCache(strPrjId);
  if (arrPrjTabRelationObjLstCache == null) return false;
  let arrPrjTabRelationSel = arrPrjTabRelationObjLstCache;
  if (objPrjTabRelationCond.GetConditions().length == 0)
    return arrPrjTabRelationSel.length > 0 ? true : false;
  try {
    for (const objCondition of objPrjTabRelationCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrPrjTabRelationSel = arrPrjTabRelationSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrPrjTabRelationSel = arrPrjTabRelationSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrPrjTabRelationSel = arrPrjTabRelationSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrPrjTabRelationSel = arrPrjTabRelationSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrPrjTabRelationSel = arrPrjTabRelationSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrPrjTabRelationSel = arrPrjTabRelationSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrPrjTabRelationSel = arrPrjTabRelationSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrPrjTabRelationSel = arrPrjTabRelationSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrPrjTabRelationSel = arrPrjTabRelationSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrPrjTabRelationSel = arrPrjTabRelationSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrPrjTabRelationSel = arrPrjTabRelationSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrPrjTabRelationSel = arrPrjTabRelationSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrPrjTabRelationSel = arrPrjTabRelationSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrPrjTabRelationSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objPrjTabRelationCond),
      prjTabRelation_ConstructorName,
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
export async function PrjTabRelation_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(prjTabRelation_Controller, strAction);

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
        prjTabRelation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTabRelation_ConstructorName,
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
 * @param strPrjRelationId:所给的关键字
 * @returns 对象
 */
export async function PrjTabRelation_IsExistCache(strPrjRelationId: string, strPrjId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrPrjTabRelationObjLstCache = await PrjTabRelation_GetObjLstCache(strPrjId);
  if (arrPrjTabRelationObjLstCache == null) return false;
  try {
    const arrPrjTabRelationSel = arrPrjTabRelationObjLstCache.filter(
      (x) => x.prjRelationId == strPrjRelationId,
    );
    if (arrPrjTabRelationSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strPrjRelationId,
      prjTabRelation_ConstructorName,
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
 * @param strPrjRelationId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function PrjTabRelation_IsExistAsync(strPrjRelationId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(prjTabRelation_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strPrjRelationId,
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
        prjTabRelation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTabRelation_ConstructorName,
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
export async function PrjTabRelation_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(prjTabRelation_Controller, strAction);

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
        prjTabRelation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTabRelation_ConstructorName,
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
 * @param objPrjTabRelationCond:条件对象
 * @returns 对象列表记录数
 */
export async function PrjTabRelation_GetRecCountByCondCache(
  objPrjTabRelationCond: ConditionCollection,
  strPrjId: string,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrPrjTabRelationObjLstCache = await PrjTabRelation_GetObjLstCache(strPrjId);
  if (arrPrjTabRelationObjLstCache == null) return 0;
  let arrPrjTabRelationSel = arrPrjTabRelationObjLstCache;
  if (objPrjTabRelationCond.GetConditions().length == 0) return arrPrjTabRelationSel.length;
  try {
    for (const objCondition of objPrjTabRelationCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrPrjTabRelationSel = arrPrjTabRelationSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrPrjTabRelationSel = arrPrjTabRelationSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrPrjTabRelationSel = arrPrjTabRelationSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrPrjTabRelationSel = arrPrjTabRelationSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrPrjTabRelationSel = arrPrjTabRelationSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrPrjTabRelationSel = arrPrjTabRelationSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrPrjTabRelationSel = arrPrjTabRelationSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrPrjTabRelationSel = arrPrjTabRelationSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrPrjTabRelationSel = arrPrjTabRelationSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrPrjTabRelationSel = arrPrjTabRelationSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrPrjTabRelationSel = arrPrjTabRelationSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrPrjTabRelationSel = arrPrjTabRelationSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrPrjTabRelationSel = arrPrjTabRelationSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrPrjTabRelationSel = arrPrjTabRelationSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrPrjTabRelationSel = arrPrjTabRelationSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrPrjTabRelationSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objPrjTabRelationCond),
      prjTabRelation_ConstructorName,
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
export async function PrjTabRelation_GetMaxStrIdAsync(): Promise<string> {
  const strThisFuncName = 'GetMaxStrIdAsync';
  const strAction = 'GetMaxStrId';
  const strUrl = GetWebApiUrl(prjTabRelation_Controller, strAction);

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
        prjTabRelation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTabRelation_ConstructorName,
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
export async function PrjTabRelation_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(prjTabRelation_Controller, strAction);

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
        prjTabRelation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTabRelation_ConstructorName,
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
export function PrjTabRelation_GetWebApiUrl(strController: string, strAction: string): string {
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
export function PrjTabRelation_ReFreshCache(strPrjId: string): void {
  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空!(In clsPrjTabRelationWApi.clsPrjTabRelationWApi.ReFreshCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确!(clsPrjTabRelationWApi.clsPrjTabRelationWApi.ReFreshCache)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  const strMsg: string = Format('刷新缓存成功!');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = Format('{0}_{1}', clsPrjTabRelationEN._CurrTabName, strPrjId);
  switch (clsPrjTabRelationEN.CacheModeId) {
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
  clsPrjTabRelationEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
}

/**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export function PrjTabRelation_ReFreshThisCache(strPrjId: string): void {
  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空!(In clsPrjTabRelationWApi.PrjTabRelation_ReFreshThisCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确!(clsPrjTabRelationWApi.PrjTabRelation_ReFreshThisCache)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = Format('{0}_{1}', clsPrjTabRelationEN._CurrTabName, strPrjId);
    switch (clsPrjTabRelationEN.CacheModeId) {
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
    clsPrjTabRelationEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
    const strMsg = Format('刷新缓存成功!');
    console.trace(strMsg);
  } else {
    const strMsg = Format('刷新缓存已经关闭。');
    console.trace(strMsg);
  }
}
/**
 * 获取最新的缓存刷新时间
 * @returns 最新的缓存刷新时间，字符串型
 **/
export function PrjTabRelation_GetLastRefreshTime(): string {
  if (clsPrjTabRelationEN._RefreshTimeLst.length == 0) return '';
  return clsPrjTabRelationEN._RefreshTimeLst[clsPrjTabRelationEN._RefreshTimeLst.length - 1];
}
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function PrjTabRelation_CheckPropertyNew(pobjPrjTabRelationEN: clsPrjTabRelationEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjPrjTabRelationEN.relationName) === true) {
    throw new Error(
      `(errid:Watl000411)字段[关系名]不能为空(In 工程表关系)!(clsPrjTabRelationBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabRelationEN.tabId) === true ||
    pobjPrjTabRelationEN.tabId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000411)字段[表ID]不能为空(In 工程表关系)!(clsPrjTabRelationBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabRelationEN.prjTabRelaTypeId) === true ||
    pobjPrjTabRelationEN.prjTabRelaTypeId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000411)字段[表关系类型Id]不能为空(In 工程表关系)!(clsPrjTabRelationBL:CheckPropertyNew0)`,
    );
  }
  if (IsNullOrEmpty(pobjPrjTabRelationEN.relationTabId) === true) {
    throw new Error(
      `(errid:Watl000411)字段[相关表Id]不能为空(In 工程表关系)!(clsPrjTabRelationBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabRelationEN.fldId4TabId) === true ||
    pobjPrjTabRelationEN.fldId4TabId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000411)字段[当前表的关系字段Id]不能为空(In 工程表关系)!(clsPrjTabRelationBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabRelationEN.fldId4RelaTabId) === true ||
    pobjPrjTabRelationEN.fldId4RelaTabId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000411)字段[关系表的关系字段Id]不能为空(In 工程表关系)!(clsPrjTabRelationBL:CheckPropertyNew0)`,
    );
  }
  if (
    null === pobjPrjTabRelationEN.isCheckCurrData ||
    (pobjPrjTabRelationEN.isCheckCurrData != null &&
      pobjPrjTabRelationEN.isCheckCurrData.toString() === '')
  ) {
    throw new Error(
      `(errid:Watl000411)字段[是否检查当前数据]不能为空(In 工程表关系)!(clsPrjTabRelationBL:CheckPropertyNew0)`,
    );
  }
  if (
    null === pobjPrjTabRelationEN.isCopyForceRela ||
    (pobjPrjTabRelationEN.isCopyForceRela != null &&
      pobjPrjTabRelationEN.isCopyForceRela.toString() === '')
  ) {
    throw new Error(
      `(errid:Watl000411)字段[IsCopyForceRela]不能为空(In 工程表关系)!(clsPrjTabRelationBL:CheckPropertyNew0)`,
    );
  }
  if (
    null === pobjPrjTabRelationEN.isUpdRelateFld ||
    (pobjPrjTabRelationEN.isUpdRelateFld != null &&
      pobjPrjTabRelationEN.isUpdRelateFld.toString() === '')
  ) {
    throw new Error(
      `(errid:Watl000411)字段[是否修改关系字段]不能为空(In 工程表关系)!(clsPrjTabRelationBL:CheckPropertyNew0)`,
    );
  }
  if (
    null === pobjPrjTabRelationEN.isUpdMainTabDate ||
    (pobjPrjTabRelationEN.isUpdMainTabDate != null &&
      pobjPrjTabRelationEN.isUpdMainTabDate.toString() === '')
  ) {
    throw new Error(
      `(errid:Watl000411)字段[是否修改主表日期]不能为空(In 工程表关系)!(clsPrjTabRelationBL:CheckPropertyNew0)`,
    );
  }
  if (
    null === pobjPrjTabRelationEN.isDelRelateRec ||
    (pobjPrjTabRelationEN.isDelRelateRec != null &&
      pobjPrjTabRelationEN.isDelRelateRec.toString() === '')
  ) {
    throw new Error(
      `(errid:Watl000411)字段[是否删除相关记录]不能为空(In 工程表关系)!(clsPrjTabRelationBL:CheckPropertyNew0)`,
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjPrjTabRelationEN.prjRelationId) == false &&
    GetStrLen(pobjPrjTabRelationEN.prjRelationId) > 8
  ) {
    throw new Error(
      `(errid:Watl000413)字段[关系Id(prjRelationId)]的长度不能超过8(In 工程表关系(PrjTabRelation))!值:${pobjPrjTabRelationEN.prjRelationId}(clsPrjTabRelationBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabRelationEN.relationName) == false &&
    GetStrLen(pobjPrjTabRelationEN.relationName) > 40
  ) {
    throw new Error(
      `(errid:Watl000413)字段[关系名(relationName)]的长度不能超过40(In 工程表关系(PrjTabRelation))!值:${pobjPrjTabRelationEN.relationName}(clsPrjTabRelationBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabRelationEN.tabId) == false &&
    GetStrLen(pobjPrjTabRelationEN.tabId) > 8
  ) {
    throw new Error(
      `(errid:Watl000413)字段[表ID(tabId)]的长度不能超过8(In 工程表关系(PrjTabRelation))!值:${pobjPrjTabRelationEN.tabId}(clsPrjTabRelationBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabRelationEN.prjTabRelaTypeId) == false &&
    GetStrLen(pobjPrjTabRelationEN.prjTabRelaTypeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000413)字段[表关系类型Id(prjTabRelaTypeId)]的长度不能超过2(In 工程表关系(PrjTabRelation))!值:${pobjPrjTabRelationEN.prjTabRelaTypeId}(clsPrjTabRelationBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabRelationEN.dnPathId) == false &&
    GetStrLen(pobjPrjTabRelationEN.dnPathId) > 8
  ) {
    throw new Error(
      `(errid:Watl000413)字段[DN路径Id(dnPathId)]的长度不能超过8(In 工程表关系(PrjTabRelation))!值:${pobjPrjTabRelationEN.dnPathId}(clsPrjTabRelationBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabRelationEN.relationTabId) == false &&
    GetStrLen(pobjPrjTabRelationEN.relationTabId) > 8
  ) {
    throw new Error(
      `(errid:Watl000413)字段[相关表Id(relationTabId)]的长度不能超过8(In 工程表关系(PrjTabRelation))!值:${pobjPrjTabRelationEN.relationTabId}(clsPrjTabRelationBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabRelationEN.fldId4TabId) == false &&
    GetStrLen(pobjPrjTabRelationEN.fldId4TabId) > 8
  ) {
    throw new Error(
      `(errid:Watl000413)字段[当前表的关系字段Id(fldId4TabId)]的长度不能超过8(In 工程表关系(PrjTabRelation))!值:${pobjPrjTabRelationEN.fldId4TabId}(clsPrjTabRelationBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabRelationEN.fldId4RelaTabId) == false &&
    GetStrLen(pobjPrjTabRelationEN.fldId4RelaTabId) > 8
  ) {
    throw new Error(
      `(errid:Watl000413)字段[关系表的关系字段Id(fldId4RelaTabId)]的长度不能超过8(In 工程表关系(PrjTabRelation))!值:${pobjPrjTabRelationEN.fldId4RelaTabId}(clsPrjTabRelationBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabRelationEN.foreignKeyTabId) == false &&
    GetStrLen(pobjPrjTabRelationEN.foreignKeyTabId) > 8
  ) {
    throw new Error(
      `(errid:Watl000413)字段[外键表ID(foreignKeyTabId)]的长度不能超过8(In 工程表关系(PrjTabRelation))!值:${pobjPrjTabRelationEN.foreignKeyTabId}(clsPrjTabRelationBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabRelationEN.foreignKeyFldId) == false &&
    GetStrLen(pobjPrjTabRelationEN.foreignKeyFldId) > 8
  ) {
    throw new Error(
      `(errid:Watl000413)字段[外键字段Id(foreignKeyFldId)]的长度不能超过8(In 工程表关系(PrjTabRelation))!值:${pobjPrjTabRelationEN.foreignKeyFldId}(clsPrjTabRelationBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabRelationEN.prjId) == false &&
    GetStrLen(pobjPrjTabRelationEN.prjId) > 4
  ) {
    throw new Error(
      `(errid:Watl000413)字段[工程Id(prjId)]的长度不能超过4(In 工程表关系(PrjTabRelation))!值:${pobjPrjTabRelationEN.prjId}(clsPrjTabRelationBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabRelationEN.memo) == false &&
    GetStrLen(pobjPrjTabRelationEN.memo) > 1000
  ) {
    throw new Error(
      `(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In 工程表关系(PrjTabRelation))!值:${pobjPrjTabRelationEN.memo}(clsPrjTabRelationBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabRelationEN.primaryKeyTabId) == false &&
    GetStrLen(pobjPrjTabRelationEN.primaryKeyTabId) > 8
  ) {
    throw new Error(
      `(errid:Watl000413)字段[PrimaryKeyTabId(primaryKeyTabId)]的长度不能超过8(In 工程表关系(PrjTabRelation))!值:${pobjPrjTabRelationEN.primaryKeyTabId}(clsPrjTabRelationBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabRelationEN.primaryKeyFldId) == false &&
    GetStrLen(pobjPrjTabRelationEN.primaryKeyFldId) > 8
  ) {
    throw new Error(
      `(errid:Watl000413)字段[PrimaryKeyFldId(primaryKeyFldId)]的长度不能超过8(In 工程表关系(PrjTabRelation))!值:${pobjPrjTabRelationEN.primaryKeyFldId}(clsPrjTabRelationBL:CheckPropertyNew)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjPrjTabRelationEN.prjRelationId) == false &&
    undefined !== pobjPrjTabRelationEN.prjRelationId &&
    tzDataType.isString(pobjPrjTabRelationEN.prjRelationId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[关系Id(prjRelationId)]的值:[${pobjPrjTabRelationEN.prjRelationId}], 非法,应该为字符型(In 工程表关系(PrjTabRelation))!(clsPrjTabRelationBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabRelationEN.relationName) == false &&
    undefined !== pobjPrjTabRelationEN.relationName &&
    tzDataType.isString(pobjPrjTabRelationEN.relationName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[关系名(relationName)]的值:[${pobjPrjTabRelationEN.relationName}], 非法,应该为字符型(In 工程表关系(PrjTabRelation))!(clsPrjTabRelationBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabRelationEN.tabId) == false &&
    undefined !== pobjPrjTabRelationEN.tabId &&
    tzDataType.isString(pobjPrjTabRelationEN.tabId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[表ID(tabId)]的值:[${pobjPrjTabRelationEN.tabId}], 非法,应该为字符型(In 工程表关系(PrjTabRelation))!(clsPrjTabRelationBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabRelationEN.prjTabRelaTypeId) == false &&
    undefined !== pobjPrjTabRelationEN.prjTabRelaTypeId &&
    tzDataType.isString(pobjPrjTabRelationEN.prjTabRelaTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[表关系类型Id(prjTabRelaTypeId)]的值:[${pobjPrjTabRelationEN.prjTabRelaTypeId}], 非法,应该为字符型(In 工程表关系(PrjTabRelation))!(clsPrjTabRelationBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabRelationEN.dnPathId) == false &&
    undefined !== pobjPrjTabRelationEN.dnPathId &&
    tzDataType.isString(pobjPrjTabRelationEN.dnPathId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[DN路径Id(dnPathId)]的值:[${pobjPrjTabRelationEN.dnPathId}], 非法,应该为字符型(In 工程表关系(PrjTabRelation))!(clsPrjTabRelationBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabRelationEN.relationTabId) == false &&
    undefined !== pobjPrjTabRelationEN.relationTabId &&
    tzDataType.isString(pobjPrjTabRelationEN.relationTabId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[相关表Id(relationTabId)]的值:[${pobjPrjTabRelationEN.relationTabId}], 非法,应该为字符型(In 工程表关系(PrjTabRelation))!(clsPrjTabRelationBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabRelationEN.fldId4TabId) == false &&
    undefined !== pobjPrjTabRelationEN.fldId4TabId &&
    tzDataType.isString(pobjPrjTabRelationEN.fldId4TabId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[当前表的关系字段Id(fldId4TabId)]的值:[${pobjPrjTabRelationEN.fldId4TabId}], 非法,应该为字符型(In 工程表关系(PrjTabRelation))!(clsPrjTabRelationBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabRelationEN.fldId4RelaTabId) == false &&
    undefined !== pobjPrjTabRelationEN.fldId4RelaTabId &&
    tzDataType.isString(pobjPrjTabRelationEN.fldId4RelaTabId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[关系表的关系字段Id(fldId4RelaTabId)]的值:[${pobjPrjTabRelationEN.fldId4RelaTabId}], 非法,应该为字符型(In 工程表关系(PrjTabRelation))!(clsPrjTabRelationBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabRelationEN.foreignKeyTabId) == false &&
    undefined !== pobjPrjTabRelationEN.foreignKeyTabId &&
    tzDataType.isString(pobjPrjTabRelationEN.foreignKeyTabId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[外键表ID(foreignKeyTabId)]的值:[${pobjPrjTabRelationEN.foreignKeyTabId}], 非法,应该为字符型(In 工程表关系(PrjTabRelation))!(clsPrjTabRelationBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabRelationEN.foreignKeyFldId) == false &&
    undefined !== pobjPrjTabRelationEN.foreignKeyFldId &&
    tzDataType.isString(pobjPrjTabRelationEN.foreignKeyFldId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[外键字段Id(foreignKeyFldId)]的值:[${pobjPrjTabRelationEN.foreignKeyFldId}], 非法,应该为字符型(In 工程表关系(PrjTabRelation))!(clsPrjTabRelationBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjPrjTabRelationEN.isCheckCurrData &&
    undefined !== pobjPrjTabRelationEN.isCheckCurrData &&
    tzDataType.isBoolean(pobjPrjTabRelationEN.isCheckCurrData) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否检查当前数据(isCheckCurrData)]的值:[${pobjPrjTabRelationEN.isCheckCurrData}], 非法,应该为布尔型(In 工程表关系(PrjTabRelation))!(clsPrjTabRelationBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjPrjTabRelationEN.isCopyForceRela &&
    undefined !== pobjPrjTabRelationEN.isCopyForceRela &&
    tzDataType.isBoolean(pobjPrjTabRelationEN.isCopyForceRela) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[IsCopyForceRela(isCopyForceRela)]的值:[${pobjPrjTabRelationEN.isCopyForceRela}], 非法,应该为布尔型(In 工程表关系(PrjTabRelation))!(clsPrjTabRelationBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjPrjTabRelationEN.isUpdRelateFld &&
    undefined !== pobjPrjTabRelationEN.isUpdRelateFld &&
    tzDataType.isBoolean(pobjPrjTabRelationEN.isUpdRelateFld) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否修改关系字段(isUpdRelateFld)]的值:[${pobjPrjTabRelationEN.isUpdRelateFld}], 非法,应该为布尔型(In 工程表关系(PrjTabRelation))!(clsPrjTabRelationBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjPrjTabRelationEN.isUpdMainTabDate &&
    undefined !== pobjPrjTabRelationEN.isUpdMainTabDate &&
    tzDataType.isBoolean(pobjPrjTabRelationEN.isUpdMainTabDate) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否修改主表日期(isUpdMainTabDate)]的值:[${pobjPrjTabRelationEN.isUpdMainTabDate}], 非法,应该为布尔型(In 工程表关系(PrjTabRelation))!(clsPrjTabRelationBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjPrjTabRelationEN.isRefreshMainTabCache &&
    undefined !== pobjPrjTabRelationEN.isRefreshMainTabCache &&
    tzDataType.isBoolean(pobjPrjTabRelationEN.isRefreshMainTabCache) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否刷新主表缓存(isRefreshMainTabCache)]的值:[${pobjPrjTabRelationEN.isRefreshMainTabCache}], 非法,应该为布尔型(In 工程表关系(PrjTabRelation))!(clsPrjTabRelationBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjPrjTabRelationEN.isDelRelateRec &&
    undefined !== pobjPrjTabRelationEN.isDelRelateRec &&
    tzDataType.isBoolean(pobjPrjTabRelationEN.isDelRelateRec) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否删除相关记录(isDelRelateRec)]的值:[${pobjPrjTabRelationEN.isDelRelateRec}], 非法,应该为布尔型(In 工程表关系(PrjTabRelation))!(clsPrjTabRelationBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabRelationEN.prjId) == false &&
    undefined !== pobjPrjTabRelationEN.prjId &&
    tzDataType.isString(pobjPrjTabRelationEN.prjId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[工程Id(prjId)]的值:[${pobjPrjTabRelationEN.prjId}], 非法,应该为字符型(In 工程表关系(PrjTabRelation))!(clsPrjTabRelationBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabRelationEN.memo) == false &&
    undefined !== pobjPrjTabRelationEN.memo &&
    tzDataType.isString(pobjPrjTabRelationEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[说明(memo)]的值:[${pobjPrjTabRelationEN.memo}], 非法,应该为字符型(In 工程表关系(PrjTabRelation))!(clsPrjTabRelationBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabRelationEN.primaryKeyTabId) == false &&
    undefined !== pobjPrjTabRelationEN.primaryKeyTabId &&
    tzDataType.isString(pobjPrjTabRelationEN.primaryKeyTabId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[PrimaryKeyTabId(primaryKeyTabId)]的值:[${pobjPrjTabRelationEN.primaryKeyTabId}], 非法,应该为字符型(In 工程表关系(PrjTabRelation))!(clsPrjTabRelationBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabRelationEN.primaryKeyFldId) == false &&
    undefined !== pobjPrjTabRelationEN.primaryKeyFldId &&
    tzDataType.isString(pobjPrjTabRelationEN.primaryKeyFldId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[PrimaryKeyFldId(primaryKeyFldId)]的值:[${pobjPrjTabRelationEN.primaryKeyFldId}], 非法,应该为字符型(In 工程表关系(PrjTabRelation))!(clsPrjTabRelationBL:CheckPropertyNew0)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function PrjTabRelation_CheckProperty4Update(pobjPrjTabRelationEN: clsPrjTabRelationEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjPrjTabRelationEN.prjRelationId) == false &&
    GetStrLen(pobjPrjTabRelationEN.prjRelationId) > 8
  ) {
    throw new Error(
      `(errid:Watl000416)字段[关系Id(prjRelationId)]的长度不能超过8(In 工程表关系(PrjTabRelation))!值:${pobjPrjTabRelationEN.prjRelationId}(clsPrjTabRelationBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabRelationEN.relationName) == false &&
    GetStrLen(pobjPrjTabRelationEN.relationName) > 40
  ) {
    throw new Error(
      `(errid:Watl000416)字段[关系名(relationName)]的长度不能超过40(In 工程表关系(PrjTabRelation))!值:${pobjPrjTabRelationEN.relationName}(clsPrjTabRelationBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabRelationEN.tabId) == false &&
    GetStrLen(pobjPrjTabRelationEN.tabId) > 8
  ) {
    throw new Error(
      `(errid:Watl000416)字段[表ID(tabId)]的长度不能超过8(In 工程表关系(PrjTabRelation))!值:${pobjPrjTabRelationEN.tabId}(clsPrjTabRelationBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabRelationEN.prjTabRelaTypeId) == false &&
    GetStrLen(pobjPrjTabRelationEN.prjTabRelaTypeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000416)字段[表关系类型Id(prjTabRelaTypeId)]的长度不能超过2(In 工程表关系(PrjTabRelation))!值:${pobjPrjTabRelationEN.prjTabRelaTypeId}(clsPrjTabRelationBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabRelationEN.dnPathId) == false &&
    GetStrLen(pobjPrjTabRelationEN.dnPathId) > 8
  ) {
    throw new Error(
      `(errid:Watl000416)字段[DN路径Id(dnPathId)]的长度不能超过8(In 工程表关系(PrjTabRelation))!值:${pobjPrjTabRelationEN.dnPathId}(clsPrjTabRelationBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabRelationEN.relationTabId) == false &&
    GetStrLen(pobjPrjTabRelationEN.relationTabId) > 8
  ) {
    throw new Error(
      `(errid:Watl000416)字段[相关表Id(relationTabId)]的长度不能超过8(In 工程表关系(PrjTabRelation))!值:${pobjPrjTabRelationEN.relationTabId}(clsPrjTabRelationBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabRelationEN.fldId4TabId) == false &&
    GetStrLen(pobjPrjTabRelationEN.fldId4TabId) > 8
  ) {
    throw new Error(
      `(errid:Watl000416)字段[当前表的关系字段Id(fldId4TabId)]的长度不能超过8(In 工程表关系(PrjTabRelation))!值:${pobjPrjTabRelationEN.fldId4TabId}(clsPrjTabRelationBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabRelationEN.fldId4RelaTabId) == false &&
    GetStrLen(pobjPrjTabRelationEN.fldId4RelaTabId) > 8
  ) {
    throw new Error(
      `(errid:Watl000416)字段[关系表的关系字段Id(fldId4RelaTabId)]的长度不能超过8(In 工程表关系(PrjTabRelation))!值:${pobjPrjTabRelationEN.fldId4RelaTabId}(clsPrjTabRelationBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabRelationEN.foreignKeyTabId) == false &&
    GetStrLen(pobjPrjTabRelationEN.foreignKeyTabId) > 8
  ) {
    throw new Error(
      `(errid:Watl000416)字段[外键表ID(foreignKeyTabId)]的长度不能超过8(In 工程表关系(PrjTabRelation))!值:${pobjPrjTabRelationEN.foreignKeyTabId}(clsPrjTabRelationBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabRelationEN.foreignKeyFldId) == false &&
    GetStrLen(pobjPrjTabRelationEN.foreignKeyFldId) > 8
  ) {
    throw new Error(
      `(errid:Watl000416)字段[外键字段Id(foreignKeyFldId)]的长度不能超过8(In 工程表关系(PrjTabRelation))!值:${pobjPrjTabRelationEN.foreignKeyFldId}(clsPrjTabRelationBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabRelationEN.prjId) == false &&
    GetStrLen(pobjPrjTabRelationEN.prjId) > 4
  ) {
    throw new Error(
      `(errid:Watl000416)字段[工程Id(prjId)]的长度不能超过4(In 工程表关系(PrjTabRelation))!值:${pobjPrjTabRelationEN.prjId}(clsPrjTabRelationBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabRelationEN.memo) == false &&
    GetStrLen(pobjPrjTabRelationEN.memo) > 1000
  ) {
    throw new Error(
      `(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In 工程表关系(PrjTabRelation))!值:${pobjPrjTabRelationEN.memo}(clsPrjTabRelationBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabRelationEN.primaryKeyTabId) == false &&
    GetStrLen(pobjPrjTabRelationEN.primaryKeyTabId) > 8
  ) {
    throw new Error(
      `(errid:Watl000416)字段[PrimaryKeyTabId(primaryKeyTabId)]的长度不能超过8(In 工程表关系(PrjTabRelation))!值:${pobjPrjTabRelationEN.primaryKeyTabId}(clsPrjTabRelationBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabRelationEN.primaryKeyFldId) == false &&
    GetStrLen(pobjPrjTabRelationEN.primaryKeyFldId) > 8
  ) {
    throw new Error(
      `(errid:Watl000416)字段[PrimaryKeyFldId(primaryKeyFldId)]的长度不能超过8(In 工程表关系(PrjTabRelation))!值:${pobjPrjTabRelationEN.primaryKeyFldId}(clsPrjTabRelationBL:CheckProperty4Update)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjPrjTabRelationEN.prjRelationId) == false &&
    undefined !== pobjPrjTabRelationEN.prjRelationId &&
    tzDataType.isString(pobjPrjTabRelationEN.prjRelationId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[关系Id(prjRelationId)]的值:[${pobjPrjTabRelationEN.prjRelationId}], 非法,应该为字符型(In 工程表关系(PrjTabRelation))!(clsPrjTabRelationBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabRelationEN.relationName) == false &&
    undefined !== pobjPrjTabRelationEN.relationName &&
    tzDataType.isString(pobjPrjTabRelationEN.relationName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[关系名(relationName)]的值:[${pobjPrjTabRelationEN.relationName}], 非法,应该为字符型(In 工程表关系(PrjTabRelation))!(clsPrjTabRelationBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabRelationEN.tabId) == false &&
    undefined !== pobjPrjTabRelationEN.tabId &&
    tzDataType.isString(pobjPrjTabRelationEN.tabId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[表ID(tabId)]的值:[${pobjPrjTabRelationEN.tabId}], 非法,应该为字符型(In 工程表关系(PrjTabRelation))!(clsPrjTabRelationBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabRelationEN.prjTabRelaTypeId) == false &&
    undefined !== pobjPrjTabRelationEN.prjTabRelaTypeId &&
    tzDataType.isString(pobjPrjTabRelationEN.prjTabRelaTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[表关系类型Id(prjTabRelaTypeId)]的值:[${pobjPrjTabRelationEN.prjTabRelaTypeId}], 非法,应该为字符型(In 工程表关系(PrjTabRelation))!(clsPrjTabRelationBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabRelationEN.dnPathId) == false &&
    undefined !== pobjPrjTabRelationEN.dnPathId &&
    tzDataType.isString(pobjPrjTabRelationEN.dnPathId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[DN路径Id(dnPathId)]的值:[${pobjPrjTabRelationEN.dnPathId}], 非法,应该为字符型(In 工程表关系(PrjTabRelation))!(clsPrjTabRelationBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabRelationEN.relationTabId) == false &&
    undefined !== pobjPrjTabRelationEN.relationTabId &&
    tzDataType.isString(pobjPrjTabRelationEN.relationTabId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[相关表Id(relationTabId)]的值:[${pobjPrjTabRelationEN.relationTabId}], 非法,应该为字符型(In 工程表关系(PrjTabRelation))!(clsPrjTabRelationBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabRelationEN.fldId4TabId) == false &&
    undefined !== pobjPrjTabRelationEN.fldId4TabId &&
    tzDataType.isString(pobjPrjTabRelationEN.fldId4TabId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[当前表的关系字段Id(fldId4TabId)]的值:[${pobjPrjTabRelationEN.fldId4TabId}], 非法,应该为字符型(In 工程表关系(PrjTabRelation))!(clsPrjTabRelationBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabRelationEN.fldId4RelaTabId) == false &&
    undefined !== pobjPrjTabRelationEN.fldId4RelaTabId &&
    tzDataType.isString(pobjPrjTabRelationEN.fldId4RelaTabId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[关系表的关系字段Id(fldId4RelaTabId)]的值:[${pobjPrjTabRelationEN.fldId4RelaTabId}], 非法,应该为字符型(In 工程表关系(PrjTabRelation))!(clsPrjTabRelationBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabRelationEN.foreignKeyTabId) == false &&
    undefined !== pobjPrjTabRelationEN.foreignKeyTabId &&
    tzDataType.isString(pobjPrjTabRelationEN.foreignKeyTabId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[外键表ID(foreignKeyTabId)]的值:[${pobjPrjTabRelationEN.foreignKeyTabId}], 非法,应该为字符型(In 工程表关系(PrjTabRelation))!(clsPrjTabRelationBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabRelationEN.foreignKeyFldId) == false &&
    undefined !== pobjPrjTabRelationEN.foreignKeyFldId &&
    tzDataType.isString(pobjPrjTabRelationEN.foreignKeyFldId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[外键字段Id(foreignKeyFldId)]的值:[${pobjPrjTabRelationEN.foreignKeyFldId}], 非法,应该为字符型(In 工程表关系(PrjTabRelation))!(clsPrjTabRelationBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjPrjTabRelationEN.isCheckCurrData &&
    undefined !== pobjPrjTabRelationEN.isCheckCurrData &&
    tzDataType.isBoolean(pobjPrjTabRelationEN.isCheckCurrData) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否检查当前数据(isCheckCurrData)]的值:[${pobjPrjTabRelationEN.isCheckCurrData}], 非法,应该为布尔型(In 工程表关系(PrjTabRelation))!(clsPrjTabRelationBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjPrjTabRelationEN.isCopyForceRela &&
    undefined !== pobjPrjTabRelationEN.isCopyForceRela &&
    tzDataType.isBoolean(pobjPrjTabRelationEN.isCopyForceRela) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[IsCopyForceRela(isCopyForceRela)]的值:[${pobjPrjTabRelationEN.isCopyForceRela}], 非法,应该为布尔型(In 工程表关系(PrjTabRelation))!(clsPrjTabRelationBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjPrjTabRelationEN.isUpdRelateFld &&
    undefined !== pobjPrjTabRelationEN.isUpdRelateFld &&
    tzDataType.isBoolean(pobjPrjTabRelationEN.isUpdRelateFld) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否修改关系字段(isUpdRelateFld)]的值:[${pobjPrjTabRelationEN.isUpdRelateFld}], 非法,应该为布尔型(In 工程表关系(PrjTabRelation))!(clsPrjTabRelationBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjPrjTabRelationEN.isUpdMainTabDate &&
    undefined !== pobjPrjTabRelationEN.isUpdMainTabDate &&
    tzDataType.isBoolean(pobjPrjTabRelationEN.isUpdMainTabDate) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否修改主表日期(isUpdMainTabDate)]的值:[${pobjPrjTabRelationEN.isUpdMainTabDate}], 非法,应该为布尔型(In 工程表关系(PrjTabRelation))!(clsPrjTabRelationBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjPrjTabRelationEN.isRefreshMainTabCache &&
    undefined !== pobjPrjTabRelationEN.isRefreshMainTabCache &&
    tzDataType.isBoolean(pobjPrjTabRelationEN.isRefreshMainTabCache) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否刷新主表缓存(isRefreshMainTabCache)]的值:[${pobjPrjTabRelationEN.isRefreshMainTabCache}], 非法,应该为布尔型(In 工程表关系(PrjTabRelation))!(clsPrjTabRelationBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjPrjTabRelationEN.isDelRelateRec &&
    undefined !== pobjPrjTabRelationEN.isDelRelateRec &&
    tzDataType.isBoolean(pobjPrjTabRelationEN.isDelRelateRec) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否删除相关记录(isDelRelateRec)]的值:[${pobjPrjTabRelationEN.isDelRelateRec}], 非法,应该为布尔型(In 工程表关系(PrjTabRelation))!(clsPrjTabRelationBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabRelationEN.prjId) == false &&
    undefined !== pobjPrjTabRelationEN.prjId &&
    tzDataType.isString(pobjPrjTabRelationEN.prjId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[工程Id(prjId)]的值:[${pobjPrjTabRelationEN.prjId}], 非法,应该为字符型(In 工程表关系(PrjTabRelation))!(clsPrjTabRelationBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabRelationEN.memo) == false &&
    undefined !== pobjPrjTabRelationEN.memo &&
    tzDataType.isString(pobjPrjTabRelationEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[说明(memo)]的值:[${pobjPrjTabRelationEN.memo}], 非法,应该为字符型(In 工程表关系(PrjTabRelation))!(clsPrjTabRelationBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabRelationEN.primaryKeyTabId) == false &&
    undefined !== pobjPrjTabRelationEN.primaryKeyTabId &&
    tzDataType.isString(pobjPrjTabRelationEN.primaryKeyTabId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[PrimaryKeyTabId(primaryKeyTabId)]的值:[${pobjPrjTabRelationEN.primaryKeyTabId}], 非法,应该为字符型(In 工程表关系(PrjTabRelation))!(clsPrjTabRelationBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabRelationEN.primaryKeyFldId) == false &&
    undefined !== pobjPrjTabRelationEN.primaryKeyFldId &&
    tzDataType.isString(pobjPrjTabRelationEN.primaryKeyFldId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[PrimaryKeyFldId(primaryKeyFldId)]的值:[${pobjPrjTabRelationEN.primaryKeyFldId}], 非法,应该为字符型(In 工程表关系(PrjTabRelation))!(clsPrjTabRelationBL:CheckProperty4Update)`,
    );
  }
  //检查主键是否为Null或者空!
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function PrjTabRelation_GetJSONStrByObj(pobjPrjTabRelationEN: clsPrjTabRelationEN): string {
  pobjPrjTabRelationEN.sfUpdFldSetStr = pobjPrjTabRelationEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjPrjTabRelationEN);
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
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
 */
export function PrjTabRelation_GetObjLstByJSONStr(strJSON: string): Array<clsPrjTabRelationEN> {
  let arrPrjTabRelationObjLst = new Array<clsPrjTabRelationEN>();
  if (strJSON === '') {
    return arrPrjTabRelationObjLst;
  }
  try {
    arrPrjTabRelationObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrPrjTabRelationObjLst;
  }
  return arrPrjTabRelationObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrPrjTabRelationObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function PrjTabRelation_GetObjLstByJSONObjLst(
  arrPrjTabRelationObjLstS: Array<clsPrjTabRelationEN>,
): Array<clsPrjTabRelationEN> {
  const arrPrjTabRelationObjLst = new Array<clsPrjTabRelationEN>();
  for (const objInFor of arrPrjTabRelationObjLstS) {
    const obj1 = PrjTabRelation_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrPrjTabRelationObjLst.push(obj1);
  }
  return arrPrjTabRelationObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function PrjTabRelation_GetObjByJSONStr(strJSON: string): clsPrjTabRelationEN {
  let pobjPrjTabRelationEN = new clsPrjTabRelationEN();
  if (strJSON === '') {
    return pobjPrjTabRelationEN;
  }
  try {
    pobjPrjTabRelationEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjPrjTabRelationEN;
  }
  return pobjPrjTabRelationEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function PrjTabRelation_GetCombineCondition(
  objPrjTabRelationCond: clsPrjTabRelationEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjTabRelationCond.dicFldComparisonOp,
      clsPrjTabRelationEN.con_PrjRelationId,
    ) == true
  ) {
    const strComparisonOpPrjRelationId: string =
      objPrjTabRelationCond.dicFldComparisonOp[clsPrjTabRelationEN.con_PrjRelationId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjTabRelationEN.con_PrjRelationId,
      objPrjTabRelationCond.prjRelationId,
      strComparisonOpPrjRelationId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjTabRelationCond.dicFldComparisonOp,
      clsPrjTabRelationEN.con_RelationName,
    ) == true
  ) {
    const strComparisonOpRelationName: string =
      objPrjTabRelationCond.dicFldComparisonOp[clsPrjTabRelationEN.con_RelationName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjTabRelationEN.con_RelationName,
      objPrjTabRelationCond.relationName,
      strComparisonOpRelationName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjTabRelationCond.dicFldComparisonOp,
      clsPrjTabRelationEN.con_TabId,
    ) == true
  ) {
    const strComparisonOpTabId: string =
      objPrjTabRelationCond.dicFldComparisonOp[clsPrjTabRelationEN.con_TabId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjTabRelationEN.con_TabId,
      objPrjTabRelationCond.tabId,
      strComparisonOpTabId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjTabRelationCond.dicFldComparisonOp,
      clsPrjTabRelationEN.con_PrjTabRelaTypeId,
    ) == true
  ) {
    const strComparisonOpPrjTabRelaTypeId: string =
      objPrjTabRelationCond.dicFldComparisonOp[clsPrjTabRelationEN.con_PrjTabRelaTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjTabRelationEN.con_PrjTabRelaTypeId,
      objPrjTabRelationCond.prjTabRelaTypeId,
      strComparisonOpPrjTabRelaTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjTabRelationCond.dicFldComparisonOp,
      clsPrjTabRelationEN.con_DnPathId,
    ) == true
  ) {
    const strComparisonOpDnPathId: string =
      objPrjTabRelationCond.dicFldComparisonOp[clsPrjTabRelationEN.con_DnPathId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjTabRelationEN.con_DnPathId,
      objPrjTabRelationCond.dnPathId,
      strComparisonOpDnPathId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjTabRelationCond.dicFldComparisonOp,
      clsPrjTabRelationEN.con_RelationTabId,
    ) == true
  ) {
    const strComparisonOpRelationTabId: string =
      objPrjTabRelationCond.dicFldComparisonOp[clsPrjTabRelationEN.con_RelationTabId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjTabRelationEN.con_RelationTabId,
      objPrjTabRelationCond.relationTabId,
      strComparisonOpRelationTabId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjTabRelationCond.dicFldComparisonOp,
      clsPrjTabRelationEN.con_FldId4TabId,
    ) == true
  ) {
    const strComparisonOpFldId4TabId: string =
      objPrjTabRelationCond.dicFldComparisonOp[clsPrjTabRelationEN.con_FldId4TabId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjTabRelationEN.con_FldId4TabId,
      objPrjTabRelationCond.fldId4TabId,
      strComparisonOpFldId4TabId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjTabRelationCond.dicFldComparisonOp,
      clsPrjTabRelationEN.con_FldId4RelaTabId,
    ) == true
  ) {
    const strComparisonOpFldId4RelaTabId: string =
      objPrjTabRelationCond.dicFldComparisonOp[clsPrjTabRelationEN.con_FldId4RelaTabId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjTabRelationEN.con_FldId4RelaTabId,
      objPrjTabRelationCond.fldId4RelaTabId,
      strComparisonOpFldId4RelaTabId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjTabRelationCond.dicFldComparisonOp,
      clsPrjTabRelationEN.con_ForeignKeyTabId,
    ) == true
  ) {
    const strComparisonOpForeignKeyTabId: string =
      objPrjTabRelationCond.dicFldComparisonOp[clsPrjTabRelationEN.con_ForeignKeyTabId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjTabRelationEN.con_ForeignKeyTabId,
      objPrjTabRelationCond.foreignKeyTabId,
      strComparisonOpForeignKeyTabId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjTabRelationCond.dicFldComparisonOp,
      clsPrjTabRelationEN.con_ForeignKeyFldId,
    ) == true
  ) {
    const strComparisonOpForeignKeyFldId: string =
      objPrjTabRelationCond.dicFldComparisonOp[clsPrjTabRelationEN.con_ForeignKeyFldId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjTabRelationEN.con_ForeignKeyFldId,
      objPrjTabRelationCond.foreignKeyFldId,
      strComparisonOpForeignKeyFldId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjTabRelationCond.dicFldComparisonOp,
      clsPrjTabRelationEN.con_IsCheckCurrData,
    ) == true
  ) {
    if (objPrjTabRelationCond.isCheckCurrData == true) {
      strWhereCond += Format(" And {0} = '1'", clsPrjTabRelationEN.con_IsCheckCurrData);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsPrjTabRelationEN.con_IsCheckCurrData);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjTabRelationCond.dicFldComparisonOp,
      clsPrjTabRelationEN.con_IsCopyForceRela,
    ) == true
  ) {
    if (objPrjTabRelationCond.isCopyForceRela == true) {
      strWhereCond += Format(" And {0} = '1'", clsPrjTabRelationEN.con_IsCopyForceRela);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsPrjTabRelationEN.con_IsCopyForceRela);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjTabRelationCond.dicFldComparisonOp,
      clsPrjTabRelationEN.con_IsUpdRelateFld,
    ) == true
  ) {
    if (objPrjTabRelationCond.isUpdRelateFld == true) {
      strWhereCond += Format(" And {0} = '1'", clsPrjTabRelationEN.con_IsUpdRelateFld);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsPrjTabRelationEN.con_IsUpdRelateFld);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjTabRelationCond.dicFldComparisonOp,
      clsPrjTabRelationEN.con_IsUpdMainTabDate,
    ) == true
  ) {
    if (objPrjTabRelationCond.isUpdMainTabDate == true) {
      strWhereCond += Format(" And {0} = '1'", clsPrjTabRelationEN.con_IsUpdMainTabDate);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsPrjTabRelationEN.con_IsUpdMainTabDate);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjTabRelationCond.dicFldComparisonOp,
      clsPrjTabRelationEN.con_IsRefreshMainTabCache,
    ) == true
  ) {
    if (objPrjTabRelationCond.isRefreshMainTabCache == true) {
      strWhereCond += Format(" And {0} = '1'", clsPrjTabRelationEN.con_IsRefreshMainTabCache);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsPrjTabRelationEN.con_IsRefreshMainTabCache);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjTabRelationCond.dicFldComparisonOp,
      clsPrjTabRelationEN.con_IsDelRelateRec,
    ) == true
  ) {
    if (objPrjTabRelationCond.isDelRelateRec == true) {
      strWhereCond += Format(" And {0} = '1'", clsPrjTabRelationEN.con_IsDelRelateRec);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsPrjTabRelationEN.con_IsDelRelateRec);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjTabRelationCond.dicFldComparisonOp,
      clsPrjTabRelationEN.con_PrjId,
    ) == true
  ) {
    const strComparisonOpPrjId: string =
      objPrjTabRelationCond.dicFldComparisonOp[clsPrjTabRelationEN.con_PrjId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjTabRelationEN.con_PrjId,
      objPrjTabRelationCond.prjId,
      strComparisonOpPrjId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjTabRelationCond.dicFldComparisonOp,
      clsPrjTabRelationEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objPrjTabRelationCond.dicFldComparisonOp[clsPrjTabRelationEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjTabRelationEN.con_Memo,
      objPrjTabRelationCond.memo,
      strComparisonOpMemo,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjTabRelationCond.dicFldComparisonOp,
      clsPrjTabRelationEN.con_PrimaryKeyTabId,
    ) == true
  ) {
    const strComparisonOpPrimaryKeyTabId: string =
      objPrjTabRelationCond.dicFldComparisonOp[clsPrjTabRelationEN.con_PrimaryKeyTabId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjTabRelationEN.con_PrimaryKeyTabId,
      objPrjTabRelationCond.primaryKeyTabId,
      strComparisonOpPrimaryKeyTabId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjTabRelationCond.dicFldComparisonOp,
      clsPrjTabRelationEN.con_PrimaryKeyFldId,
    ) == true
  ) {
    const strComparisonOpPrimaryKeyFldId: string =
      objPrjTabRelationCond.dicFldComparisonOp[clsPrjTabRelationEN.con_PrimaryKeyFldId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjTabRelationEN.con_PrimaryKeyFldId,
      objPrjTabRelationCond.primaryKeyFldId,
      strComparisonOpPrimaryKeyFldId,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--PrjTabRelation(工程表关系),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strTabId: 表ID(要求唯一的字段)
 * @param strPrjTabRelaTypeId: 表关系类型Id(要求唯一的字段)
 * @param strRelationTabId: 相关表Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function PrjTabRelation_GetUniCondStr(objPrjTabRelationEN: clsPrjTabRelationEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and TabId = '{0}'", objPrjTabRelationEN.tabId);
  strWhereCond += Format(" and PrjTabRelaTypeId = '{0}'", objPrjTabRelationEN.prjTabRelaTypeId);
  strWhereCond += Format(" and RelationTabId = '{0}'", objPrjTabRelationEN.relationTabId);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--PrjTabRelation(工程表关系),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strTabId: 表ID(要求唯一的字段)
 * @param strPrjTabRelaTypeId: 表关系类型Id(要求唯一的字段)
 * @param strRelationTabId: 相关表Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function PrjTabRelation_GetUniCondStr4Update(
  objPrjTabRelationEN: clsPrjTabRelationEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and PrjRelationId <> '{0}'", objPrjTabRelationEN.prjRelationId);
  strWhereCond += Format(" and TabId = '{0}'", objPrjTabRelationEN.tabId);
  strWhereCond += Format(" and PrjTabRelaTypeId = '{0}'", objPrjTabRelationEN.prjTabRelaTypeId);
  strWhereCond += Format(" and RelationTabId = '{0}'", objPrjTabRelationEN.relationTabId);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objPrjTabRelationENS:源对象
 * @param objPrjTabRelationENT:目标对象
 */
export function PrjTabRelation_GetObjFromJsonObj(
  objPrjTabRelationENS: clsPrjTabRelationEN,
): clsPrjTabRelationEN {
  const objPrjTabRelationENT: clsPrjTabRelationEN = new clsPrjTabRelationEN();
  ObjectAssign(objPrjTabRelationENT, objPrjTabRelationENS);
  return objPrjTabRelationENT;
}
