/**
 * 类名:clsCacheUseStateWApi
 * 表名:CacheUseState(00050566)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/14 11:49:09
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 应用类型:Vue应用InCore-TS(30)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:系统设置(SystemSet)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 缓存使用状态(CacheUseState)
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
  BindDdl_ObjLstInDivObj,
  GetExceptionStr,
  myShowErrorMsg,
} from '@/ts/PubFun/clsCommFunc4Web';
import { cacheUseStateCache, isFuncMapCache } from '@/viewsShare/SystemSet/CacheUseStateVueShare';
import { clsCacheUseStateENEx } from '@/ts/L0Entity/SystemSet/clsCacheUseStateENEx';
import { clsCacheUseStateEN } from '@/ts/L0Entity/SystemSet/clsCacheUseStateEN';
import { CacheMode_func } from '@/ts/L3ForWApi/SystemSet/clsCacheModeWApi';
import { clsCacheModeEN } from '@/ts/L0Entity/SystemSet/clsCacheModeEN';
import { AddRecordResult } from '@/ts/PubFun/AddRecordResult';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';

export const cacheUseState_Controller = 'CacheUseStateApi';
export const cacheUseState_ConstructorName = 'cacheUseState';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngmId:关键字
 * @returns 对象
 **/
export async function CacheUseState_GetObjBymIdAsync(
  lngmId: number,
): Promise<clsCacheUseStateEN | null> {
  const strThisFuncName = 'GetObjBymIdAsync';

  if (lngmId == 0) {
    const strMsg = Format('参数:[lngmId]不能为空!(In clsCacheUseStateWApi.GetObjBymIdAsync)');
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjBymId';
  const strUrl = GetWebApiUrl(cacheUseState_Controller, strAction);

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
      const objCacheUseState = CacheUseState_GetObjFromJsonObj(returnObj);
      return objCacheUseState;
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
        cacheUseState_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cacheUseState_ConstructorName,
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
 * @param lngmId:所给的关键字
 * @returns 对象
 */
export async function CacheUseState_GetObjBymIdlocalStorage(lngmId: number) {
  const strThisFuncName = 'GetObjBymIdlocalStorage';

  if (lngmId == 0) {
    const strMsg = Format(
      '参数:[lngmId]不能为空!(In clsCacheUseStateWApi.GetObjBymIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsCacheUseStateEN._CurrTabName, lngmId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objCacheUseStateCache: clsCacheUseStateEN = JSON.parse(strTempObj);
    return objCacheUseStateCache;
  }
  try {
    const objCacheUseState = await CacheUseState_GetObjBymIdAsync(lngmId);
    if (objCacheUseState != null) {
      localStorage.setItem(strKey, JSON.stringify(objCacheUseState));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objCacheUseState;
    }
    return objCacheUseState;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      lngmId,
      cacheUseState_ConstructorName,
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
 * @param lngmId:所给的关键字
 * @returns 对象
 */
export async function CacheUseState_GetObjBymIdCache(
  lngmId: number,
  strUserId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjBymIdCache';

  if (lngmId == 0) {
    const strMsg = Format('参数:[lngmId]不能为空!(In clsCacheUseStateWApi.GetObjBymIdCache)');
    console.error(strMsg);
    throw strMsg;
  }
  const arrCacheUseStateObjLstCache = await CacheUseState_GetObjLstCache(strUserId);
  try {
    const arrCacheUseStateSel = arrCacheUseStateObjLstCache.filter((x) => x.mId == lngmId);
    let objCacheUseState: clsCacheUseStateEN;
    if (arrCacheUseStateSel.length > 0) {
      objCacheUseState = arrCacheUseStateSel[0];
      return objCacheUseState;
    } else {
      if (bolTryAsyncOnce == true) {
        const objCacheUseStateConst = await CacheUseState_GetObjBymIdAsync(lngmId);
        if (objCacheUseStateConst != null) {
          CacheUseState_ReFreshThisCache(strUserId);
          return objCacheUseStateConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      lngmId,
      cacheUseState_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objCacheUseState:所给的对象
 * @returns 对象
 */
export async function CacheUseState_UpdateObjInLstCache(
  objCacheUseState: clsCacheUseStateEN,
  strUserId: string,
) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrCacheUseStateObjLstCache = await CacheUseState_GetObjLstCache(strUserId);
    const obj = arrCacheUseStateObjLstCache.find(
      (x) =>
        x.cacheModeId == objCacheUseState.cacheModeId &&
        x.cacheKey == objCacheUseState.cacheKey &&
        x.userId == objCacheUseState.userId,
    );
    if (obj != null) {
      objCacheUseState.mId = obj.mId;
      ObjectAssign(obj, objCacheUseState);
    } else {
      arrCacheUseStateObjLstCache.push(objCacheUseState);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      cacheUseState_ConstructorName,
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
export function CacheUseState_SortFunDefa(a: clsCacheUseStateEN, b: clsCacheUseStateEN): number {
  return a.mId - b.mId;
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
export function CacheUseState_SortFunDefa2Fld(
  a: clsCacheUseStateEN,
  b: clsCacheUseStateEN,
): number {
  if (a.userId == b.userId) return a.cacheModeId.localeCompare(b.cacheModeId);
  else return a.userId.localeCompare(b.userId);
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
export function CacheUseState_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsCacheUseStateEN.con_mId:
        return (a: clsCacheUseStateEN, b: clsCacheUseStateEN) => {
          return a.mId - b.mId;
        };
      case clsCacheUseStateEN.con_UserId:
        return (a: clsCacheUseStateEN, b: clsCacheUseStateEN) => {
          return a.userId.localeCompare(b.userId);
        };
      case clsCacheUseStateEN.con_CacheModeId:
        return (a: clsCacheUseStateEN, b: clsCacheUseStateEN) => {
          return a.cacheModeId.localeCompare(b.cacheModeId);
        };
      case clsCacheUseStateEN.con_CacheKey:
        return (a: clsCacheUseStateEN, b: clsCacheUseStateEN) => {
          return a.cacheKey.localeCompare(b.cacheKey);
        };
      case clsCacheUseStateEN.con_CacheSize:
        return (a: clsCacheUseStateEN, b: clsCacheUseStateEN) => {
          return a.cacheSize - b.cacheSize;
        };
      case clsCacheUseStateEN.con_UseDate:
        return (a: clsCacheUseStateEN, b: clsCacheUseStateEN) => {
          if (a.useDate == null) return -1;
          if (b.useDate == null) return 1;
          return a.useDate.localeCompare(b.useDate);
        };
      case clsCacheUseStateEN.con_Memo:
        return (a: clsCacheUseStateEN, b: clsCacheUseStateEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[CacheUseState]中不存在!(in ${cacheUseState_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsCacheUseStateEN.con_mId:
        return (a: clsCacheUseStateEN, b: clsCacheUseStateEN) => {
          return b.mId - a.mId;
        };
      case clsCacheUseStateEN.con_UserId:
        return (a: clsCacheUseStateEN, b: clsCacheUseStateEN) => {
          return b.userId.localeCompare(a.userId);
        };
      case clsCacheUseStateEN.con_CacheModeId:
        return (a: clsCacheUseStateEN, b: clsCacheUseStateEN) => {
          return b.cacheModeId.localeCompare(a.cacheModeId);
        };
      case clsCacheUseStateEN.con_CacheKey:
        return (a: clsCacheUseStateEN, b: clsCacheUseStateEN) => {
          return b.cacheKey.localeCompare(a.cacheKey);
        };
      case clsCacheUseStateEN.con_CacheSize:
        return (a: clsCacheUseStateEN, b: clsCacheUseStateEN) => {
          return b.cacheSize - a.cacheSize;
        };
      case clsCacheUseStateEN.con_UseDate:
        return (a: clsCacheUseStateEN, b: clsCacheUseStateEN) => {
          if (b.useDate == null) return -1;
          if (a.useDate == null) return 1;
          return b.useDate.localeCompare(a.useDate);
        };
      case clsCacheUseStateEN.con_Memo:
        return (a: clsCacheUseStateEN, b: clsCacheUseStateEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[CacheUseState]中不存在!(in ${cacheUseState_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param lngmId:所给的关键字
 * @returns 对象
 */
export async function CacheUseState_GetNameBymIdCache(lngmId: number, strUserId: string) {
  if (lngmId == 0) {
    const strMsg = Format('参数:[lngmId]不能为空!(In clsCacheUseStateWApi.GetNameBymIdCache)');
    console.error(strMsg);
    throw strMsg;
  }
  const arrCacheUseStateObjLstCache = await CacheUseState_GetObjLstCache(strUserId);
  if (arrCacheUseStateObjLstCache == null) return '';
  try {
    const arrCacheUseStateSel = arrCacheUseStateObjLstCache.filter((x) => x.mId == lngmId);
    let objCacheUseState: clsCacheUseStateEN;
    if (arrCacheUseStateSel.length > 0) {
      objCacheUseState = arrCacheUseStateSel[0];
      return objCacheUseState.userId;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format('错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!', e, lngmId);
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
export async function CacheUseState_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsCacheUseStateEN.con_mId:
      return (obj: clsCacheUseStateEN) => {
        return obj.mId === value;
      };
    case clsCacheUseStateEN.con_UserId:
      return (obj: clsCacheUseStateEN) => {
        return obj.userId === value;
      };
    case clsCacheUseStateEN.con_CacheModeId:
      return (obj: clsCacheUseStateEN) => {
        return obj.cacheModeId === value;
      };
    case clsCacheUseStateEN.con_CacheKey:
      return (obj: clsCacheUseStateEN) => {
        return obj.cacheKey === value;
      };
    case clsCacheUseStateEN.con_CacheSize:
      return (obj: clsCacheUseStateEN) => {
        return obj.cacheSize === value;
      };
    case clsCacheUseStateEN.con_UseDate:
      return (obj: clsCacheUseStateEN) => {
        return obj.useDate === value;
      };
    case clsCacheUseStateEN.con_Memo:
      return (obj: clsCacheUseStateEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[CacheUseState]中不存在!(in ${cacheUseState_ConstructorName}.${strThisFuncName})`;
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
 @param strUserId:缓存的分类字段
 * @returns 返回一个输出字段值
*/
export async function CacheUseState_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
  strUserIdClassfy: string,
) {
  //const strThisFuncName = "func";

  if (IsNullOrEmpty(strUserIdClassfy) == true) {
    const strMsg = Format('参数:[strUserIdClassfy]不能为空!(In clsCacheUseStateWApi.func)');
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName != clsCacheUseStateEN.con_mId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsCacheUseStateEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsCacheUseStateEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const lngmId = Number(strInValue);
  if (lngmId == 0) {
    return '';
  }
  const objCacheUseState = await CacheUseState_GetObjBymIdCache(lngmId, strUserIdClassfy);
  if (objCacheUseState == null) return '';
  if (objCacheUseState.GetFldValue(strOutFldName) == null) return '';
  return objCacheUseState.GetFldValue(strOutFldName).toString();
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 @param strUserId:缓存的分类字段
 * @returns 返回一个关键字值列表
*/
export async function CacheUseState_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
  strUserIdClassfy: string,
): Promise<Array<number>> {
  //const strThisFuncName = "funcKey";

  if (IsNullOrEmpty(strUserIdClassfy) == true) {
    const strMsg = Format('参数:[strUserIdClassfy]不能为空!(In clsCacheUseStateWApi.funcKey)');
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName == clsCacheUseStateEN.con_mId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (Number(strInValue) == 0) {
    return [];
  }
  const arrCacheUseState = await CacheUseState_GetObjLstCache(strUserIdClassfy);
  if (arrCacheUseState == null) return [];
  let arrCacheUseStateSel = arrCacheUseState;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrCacheUseStateSel = arrCacheUseStateSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrCacheUseStateSel = arrCacheUseStateSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrCacheUseStateSel = arrCacheUseStateSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrCacheUseStateSel = arrCacheUseStateSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrCacheUseStateSel = arrCacheUseStateSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrCacheUseStateSel = arrCacheUseStateSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrCacheUseStateSel = arrCacheUseStateSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrCacheUseStateSel = arrCacheUseStateSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrCacheUseStateSel = arrCacheUseStateSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrCacheUseStateSel = arrCacheUseStateSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrCacheUseStateSel.length == 0) return [];
  return arrCacheUseStateSel.map((x) => x.mId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function CacheUseState_GetFldValueAsync(
  strFldName: string,
  strWhereCond: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetFldValueAsync';
  const strAction = 'GetFldValue';
  const strUrl = GetWebApiUrl(cacheUseState_Controller, strAction);

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
        cacheUseState_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cacheUseState_ConstructorName,
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
export async function CacheUseState_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(cacheUseState_Controller, strAction);

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
        cacheUseState_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cacheUseState_ConstructorName,
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
export async function CacheUseState_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(cacheUseState_Controller, strAction);

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
        cacheUseState_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cacheUseState_ConstructorName,
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
export async function CacheUseState_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsCacheUseStateEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(cacheUseState_Controller, strAction);

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
      const objCacheUseState = CacheUseState_GetObjFromJsonObj(returnObj);
      return objCacheUseState;
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
        cacheUseState_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cacheUseState_ConstructorName,
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
export async function CacheUseState_GetObjLstClientCache(strUserId: string) {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsCacheUseStateEN.WhereFormat) == false) {
    strWhereCond = Format(clsCacheUseStateEN.WhereFormat, strUserId);
  } else {
    strWhereCond = Format("UserId='{0}'", strUserId);
  }
  const strKey = Format('{0}_{1}', clsCacheUseStateEN._CurrTabName, strUserId);
  if (IsNullOrEmpty(clsCacheUseStateEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsCacheUseStateEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrCacheUseStateExObjLstCache: Array<clsCacheUseStateEN> = CacheHelper.Get(strKey);
    const arrCacheUseStateObjLstT = CacheUseState_GetObjLstByJSONObjLst(
      arrCacheUseStateExObjLstCache,
    );
    return arrCacheUseStateObjLstT;
  }
  try {
    const arrCacheUseStateExObjLst = await CacheUseState_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrCacheUseStateExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrCacheUseStateExObjLst.length,
    );
    console.log(strInfo);
    return arrCacheUseStateExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      cacheUseState_ConstructorName,
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
export async function CacheUseState_GetObjLstlocalStorage(strUserId: string) {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsCacheUseStateEN.WhereFormat) == false) {
    strWhereCond = Format(clsCacheUseStateEN.WhereFormat, strUserId);
  } else {
    strWhereCond = Format("{0}='{1}'", clsCacheUseStateEN.con_UserId, strUserId);
  }
  const strKey = Format('{0}_{1}', clsCacheUseStateEN._CurrTabName, strUserId);
  if (IsNullOrEmpty(clsCacheUseStateEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsCacheUseStateEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrCacheUseStateExObjLstCache: Array<clsCacheUseStateEN> = JSON.parse(strTempObjLst);
    const arrCacheUseStateObjLstT = CacheUseState_GetObjLstByJSONObjLst(
      arrCacheUseStateExObjLstCache,
    );
    return arrCacheUseStateObjLstT;
  }
  try {
    const arrCacheUseStateExObjLst = await CacheUseState_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrCacheUseStateExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrCacheUseStateExObjLst.length,
    );
    console.log(strInfo);
    return arrCacheUseStateExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      cacheUseState_ConstructorName,
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
export async function CacheUseState_GetObjLstlocalStoragePureCache(strUserId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsCacheUseStateEN._CurrTabName, strUserId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrCacheUseStateObjLstCache: Array<clsCacheUseStateEN> = JSON.parse(strTempObjLst);
    return arrCacheUseStateObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function CacheUseState_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsCacheUseStateEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(cacheUseState_Controller, strAction);

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
          cacheUseState_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = CacheUseState_GetObjLstByJSONObjLst(returnObjLst);
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
        cacheUseState_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cacheUseState_ConstructorName,
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
export async function CacheUseState_GetObjLstsessionStorage(strUserId: string) {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsCacheUseStateEN.WhereFormat) == false) {
    strWhereCond = Format(clsCacheUseStateEN.WhereFormat, strUserId);
  } else {
    strWhereCond = Format("{0}='{1}'", clsCacheUseStateEN.con_UserId, strUserId);
  }
  const strKey = Format('{0}_{1}', clsCacheUseStateEN._CurrTabName, strUserId);
  if (IsNullOrEmpty(clsCacheUseStateEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsCacheUseStateEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrCacheUseStateExObjLstCache: Array<clsCacheUseStateEN> = JSON.parse(strTempObjLst);
    const arrCacheUseStateObjLstT = CacheUseState_GetObjLstByJSONObjLst(
      arrCacheUseStateExObjLstCache,
    );
    return arrCacheUseStateObjLstT;
  }
  try {
    const arrCacheUseStateExObjLst = await CacheUseState_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrCacheUseStateExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrCacheUseStateExObjLst.length,
    );
    console.log(strInfo);
    return arrCacheUseStateExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      cacheUseState_ConstructorName,
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
export async function CacheUseState_GetObjLstsessionStoragePureCache(strUserId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsCacheUseStateEN._CurrTabName, strUserId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrCacheUseStateObjLstCache: Array<clsCacheUseStateEN> = JSON.parse(strTempObjLst);
    return arrCacheUseStateObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function CacheUseState_GetObjLstCache(
  strUserId: string,
): Promise<Array<clsCacheUseStateEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  if (IsNullOrEmpty(strUserId) == true) {
    const strMsg = Format(
      '参数:[strUserId]不能为空！(In clsCacheUseStateWApi.CacheUseState_GetObjLstCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  let arrCacheUseStateObjLstCache;
  switch (clsCacheUseStateEN.CacheModeId) {
    case '04': //sessionStorage
      arrCacheUseStateObjLstCache = await CacheUseState_GetObjLstsessionStorage(strUserId);
      break;
    case '03': //localStorage
      arrCacheUseStateObjLstCache = await CacheUseState_GetObjLstlocalStorage(strUserId);
      break;
    case '02': //ClientCache
      arrCacheUseStateObjLstCache = await CacheUseState_GetObjLstClientCache(strUserId);
      break;
    default:
      arrCacheUseStateObjLstCache = await CacheUseState_GetObjLstClientCache(strUserId);
      break;
  }
  return arrCacheUseStateObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function CacheUseState_GetObjLstPureCache(strUserId: string) {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrCacheUseStateObjLstCache;
  switch (clsCacheUseStateEN.CacheModeId) {
    case '04': //sessionStorage
      arrCacheUseStateObjLstCache = await CacheUseState_GetObjLstsessionStoragePureCache(strUserId);
      break;
    case '03': //localStorage
      arrCacheUseStateObjLstCache = await CacheUseState_GetObjLstlocalStoragePureCache(strUserId);
      break;
    case '02': //ClientCache
      arrCacheUseStateObjLstCache = null;
      break;
    default:
      arrCacheUseStateObjLstCache = null;
      break;
  }
  return arrCacheUseStateObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objlngmIdCond:条件对象
 * @returns 对象列表子集
 */
export async function CacheUseState_GetSubObjLstCache(
  objCacheUseStateCond: ConditionCollection,
  strUserId: string,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrCacheUseStateObjLstCache = await CacheUseState_GetObjLstCache(strUserId);
  let arrCacheUseStateSel = arrCacheUseStateObjLstCache;
  if (objCacheUseStateCond.GetConditions().length == 0) return arrCacheUseStateSel;
  try {
    //console.log(sstrKeys);
    for (const objCondition of objCacheUseStateCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrCacheUseStateSel = arrCacheUseStateSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrCacheUseStateSel = arrCacheUseStateSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrCacheUseStateSel = arrCacheUseStateSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrCacheUseStateSel = arrCacheUseStateSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrCacheUseStateSel = arrCacheUseStateSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrCacheUseStateSel = arrCacheUseStateSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrCacheUseStateSel = arrCacheUseStateSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrCacheUseStateSel = arrCacheUseStateSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrCacheUseStateSel = arrCacheUseStateSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrCacheUseStateSel = arrCacheUseStateSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrCacheUseStateSel = arrCacheUseStateSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrCacheUseStateSel = arrCacheUseStateSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrCacheUseStateSel = arrCacheUseStateSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrCacheUseStateSel = arrCacheUseStateSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrCacheUseStateSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objCacheUseStateCond),
      cacheUseState_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsCacheUseStateEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrmId:关键字列表
 * @returns 对象列表
 **/
export async function CacheUseState_GetObjLstBymIdLstAsync(
  arrmId: Array<string>,
): Promise<Array<clsCacheUseStateEN>> {
  const strThisFuncName = 'GetObjLstBymIdLstAsync';
  const strAction = 'GetObjLstBymIdLst';
  const strUrl = GetWebApiUrl(cacheUseState_Controller, strAction);

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
          cacheUseState_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = CacheUseState_GetObjLstByJSONObjLst(returnObjLst);
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
        cacheUseState_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cacheUseState_ConstructorName,
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
export async function CacheUseState_GetObjLstBymIdLstCache(
  arrmIdLst: Array<number>,
  strUserId: string,
) {
  const strThisFuncName = 'GetObjLstBymIdLstCache';
  try {
    const arrCacheUseStateObjLstCache = await CacheUseState_GetObjLstCache(strUserId);
    const arrCacheUseStateSel = arrCacheUseStateObjLstCache.filter(
      (x) => arrmIdLst.indexOf(x.mId) > -1,
    );
    return arrCacheUseStateSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrmIdLst.join(','),
      cacheUseState_ConstructorName,
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
export async function CacheUseState_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsCacheUseStateEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(cacheUseState_Controller, strAction);

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
          cacheUseState_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = CacheUseState_GetObjLstByJSONObjLst(returnObjLst);
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
        cacheUseState_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cacheUseState_ConstructorName,
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
export async function CacheUseState_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsCacheUseStateEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(cacheUseState_Controller, strAction);

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
          cacheUseState_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = CacheUseState_GetObjLstByJSONObjLst(returnObjLst);
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
        cacheUseState_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cacheUseState_ConstructorName,
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
export async function CacheUseState_GetObjLstByPagerCache(
  objPagerPara: stuPagerPara,
  strUserId: string,
) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsCacheUseStateEN>();
  const arrCacheUseStateObjLstCache = await CacheUseState_GetObjLstCache(strUserId);
  if (arrCacheUseStateObjLstCache.length == 0) return arrCacheUseStateObjLstCache;
  let arrCacheUseStateSel = arrCacheUseStateObjLstCache;
  const objCacheUseStateCond = objPagerPara.conditionCollection;
  if (objCacheUseStateCond == null) {
    const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return new Array<clsCacheUseStateEN>();
  }
  //console.log("clsCacheUseStateWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    for (const objCondition of objCacheUseStateCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrCacheUseStateSel = arrCacheUseStateSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrCacheUseStateSel = arrCacheUseStateSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrCacheUseStateSel = arrCacheUseStateSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrCacheUseStateSel = arrCacheUseStateSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrCacheUseStateSel = arrCacheUseStateSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrCacheUseStateSel = arrCacheUseStateSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrCacheUseStateSel = arrCacheUseStateSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrCacheUseStateSel = arrCacheUseStateSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrCacheUseStateSel = arrCacheUseStateSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrCacheUseStateSel = arrCacheUseStateSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrCacheUseStateSel = arrCacheUseStateSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrCacheUseStateSel = arrCacheUseStateSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrCacheUseStateSel = arrCacheUseStateSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrCacheUseStateSel = arrCacheUseStateSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrCacheUseStateSel = arrCacheUseStateSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrCacheUseStateSel.length == 0) return arrCacheUseStateSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrCacheUseStateSel = arrCacheUseStateSel.sort(
        CacheUseState_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrCacheUseStateSel = arrCacheUseStateSel.sort(objPagerPara.sortFun);
    }
    arrCacheUseStateSel = arrCacheUseStateSel.slice(intStart, intEnd);
    return arrCacheUseStateSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      cacheUseState_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsCacheUseStateEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function CacheUseState_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsCacheUseStateEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsCacheUseStateEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(cacheUseState_Controller, strAction);

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
          cacheUseState_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = CacheUseState_GetObjLstByJSONObjLst(returnObjLst);
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
        cacheUseState_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cacheUseState_ConstructorName,
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
 * @param lngmId:关键字
 * @returns 获取删除的结果
 **/
export async function CacheUseState_DelRecordAsync(lngmId: number): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(cacheUseState_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, lngmId);

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
        cacheUseState_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cacheUseState_ConstructorName,
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
 * @param arrmId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function CacheUseState_DelCacheUseStatesAsync(arrmId: Array<string>): Promise<number> {
  const strThisFuncName = 'DelCacheUseStatesAsync';
  const strAction = 'DelCacheUseStates';
  const strUrl = GetWebApiUrl(cacheUseState_Controller, strAction);

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
        cacheUseState_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cacheUseState_ConstructorName,
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
export async function CacheUseState_GetObjExLstByPagerCache(
  objPagerPara: stuPagerPara,
  strUserId: string,
): Promise<Array<clsCacheUseStateENEx>> {
  const strThisFuncName = 'GetObjLstByPagerCache';
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  const isFuncMapKey = `${objSortInfo.SortFld}`;
  const arrCacheUseStateObjLst = await CacheUseState_GetObjLstCache(strUserId);
  //从缓存中获取对象，如果缓存中不存在就扩展复制
  const arrNewObj = new Array<clsCacheUseStateENEx>();
  const arrCacheUseStateExObjLst = arrCacheUseStateObjLst.map((obj) => {
    const cacheKey = `${obj.mId}_${obj.userId}`;
    if (cacheUseStateCache[cacheKey]) {
      const oldObj = cacheUseStateCache[cacheKey];
      return oldObj;
    } else {
      const newObj = CacheUseState_CopyToEx(obj);
      arrNewObj.push(newObj);
      cacheUseStateCache[cacheKey] = newObj;
      return newObj;
    }
  });
  for (const newObj of arrNewObj) {
    for (const strFldName of Object.keys(isFuncMapCache)) {
      await CacheUseState_FuncMapByFldName(strFldName, newObj);
    }
  }
  //检查关于当前扩展排序字段是否获取得值，如果没有获取过，就获取，并存缓存
  const bolIsFuncMap = isFuncMapCache[isFuncMapKey];
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsCacheUseStateEN.AttributeName.indexOf(objSortInfo.SortFld) == -1 &&
    (bolIsFuncMap == false || bolIsFuncMap == undefined)
  ) {
    for (const newObj of arrCacheUseStateExObjLst) {
      await CacheUseState_FuncMapByFldName(objSortInfo.SortFld, newObj);
      const cacheKey = `${newObj.mId}_${newObj.userId}`;
      cacheUseStateCache[cacheKey] = newObj;
    }
    isFuncMapCache[isFuncMapKey] = true;
  }
  if (arrCacheUseStateExObjLst.length == 0) return arrCacheUseStateExObjLst;
  let arrCacheUseStateSel: Array<clsCacheUseStateENEx> = arrCacheUseStateExObjLst;
  const objCacheUseStateCond = objPagerPara.conditionCollection;
  if (objCacheUseStateCond == null) {
    const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return arrCacheUseStateExObjLst;
  }
  try {
    for (const objCondition of objCacheUseStateCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrCacheUseStateSel = arrCacheUseStateSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrCacheUseStateSel = arrCacheUseStateSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrCacheUseStateSel = arrCacheUseStateSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrCacheUseStateSel = arrCacheUseStateSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrCacheUseStateSel = arrCacheUseStateSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrCacheUseStateSel = arrCacheUseStateSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrCacheUseStateSel = arrCacheUseStateSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrCacheUseStateSel = arrCacheUseStateSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.split(',');
            arrCacheUseStateSel = arrCacheUseStateSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrCacheUseStateSel = arrCacheUseStateSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrCacheUseStateSel = arrCacheUseStateSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrCacheUseStateSel = arrCacheUseStateSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrCacheUseStateSel = arrCacheUseStateSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrCacheUseStateSel = arrCacheUseStateSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrCacheUseStateSel = arrCacheUseStateSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrCacheUseStateSel.length == 0) return arrCacheUseStateSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      arrCacheUseStateSel = arrCacheUseStateSel.sort(
        CacheUseState_SortFunByExKey(objSortInfo.SortFld, objSortInfo.SortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrCacheUseStateSel = arrCacheUseStateSel.sort(objPagerPara.sortFun);
    }
    arrCacheUseStateSel = arrCacheUseStateSel.slice(intStart, intEnd);
    return arrCacheUseStateSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      cacheUseState_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsCacheUseStateENEx>();
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CopyToEx)
 * @param objCacheUseStateENS:源对象
 * @returns 目标对象=>clsCacheUseStateEN:objCacheUseStateENT
 **/
export function CacheUseState_CopyToEx(
  objCacheUseStateENS: clsCacheUseStateEN,
): clsCacheUseStateENEx {
  const strThisFuncName = CacheUseState_CopyToEx.name;
  const objCacheUseStateENT = new clsCacheUseStateENEx();
  try {
    ObjectAssign(objCacheUseStateENT, objCacheUseStateENS);
    return objCacheUseStateENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001294)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      cacheUseState_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objCacheUseStateENT;
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
export function CacheUseState_FuncMapByFldName(
  strFldName: string,
  objCacheUseStateEx: clsCacheUseStateENEx,
) {
  const strThisFuncName = CacheUseState_FuncMapByFldName.name;
  strFldName = strFldName.replace('|Ex', '');
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsCacheUseStateEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsCacheUseStateENEx.con_CacheModeName:
      return CacheUseState_FuncMapCacheModeName(objCacheUseStateEx);
    case clsCacheUseStateENEx.con_CacheModeENName:
      return CacheUseState_FuncMapCacheModeENName(objCacheUseStateEx);
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
export function CacheUseState_SortFunByExKey(strKey: string, AscOrDesc: string) {
  strKey = strKey.replace('|Ex', '');
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsCacheUseStateENEx.con_CacheModeName:
        return (a: clsCacheUseStateENEx, b: clsCacheUseStateENEx) => {
          if (a.cacheModeName === null && b.cacheModeName === null) return 0;
          if (a.cacheModeName === null) return -1;
          if (b.cacheModeName === null) return 1;
          return a.cacheModeName.localeCompare(b.cacheModeName);
        };
      case clsCacheUseStateENEx.con_CacheModeENName:
        return (a: clsCacheUseStateENEx, b: clsCacheUseStateENEx) => {
          if (a.cacheModeENName === null && b.cacheModeENName === null) return 0;
          if (a.cacheModeENName === null) return -1;
          if (b.cacheModeENName === null) return 1;
          return a.cacheModeENName.localeCompare(b.cacheModeENName);
        };
      default:
        return CacheUseState_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsCacheUseStateENEx.con_CacheModeName:
        return (a: clsCacheUseStateENEx, b: clsCacheUseStateENEx) => {
          if (a.cacheModeName === null && b.cacheModeName === null) return 0;
          if (a.cacheModeName === null) return 1;
          if (b.cacheModeName === null) return -1;
          return b.cacheModeName.localeCompare(a.cacheModeName);
        };
      case clsCacheUseStateENEx.con_CacheModeENName:
        return (a: clsCacheUseStateENEx, b: clsCacheUseStateENEx) => {
          if (a.cacheModeENName === null && b.cacheModeENName === null) return 0;
          if (a.cacheModeENName === null) return 1;
          if (b.cacheModeENName === null) return -1;
          return b.cacheModeENName.localeCompare(a.cacheModeENName);
        };
      default:
        return CacheUseState_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objCacheUseStateS:源对象
 **/
export async function CacheUseState_FuncMapCacheModeName(objCacheUseState: clsCacheUseStateENEx) {
  const strThisFuncName = CacheUseState_FuncMapCacheModeName.name;
  try {
    if (IsNullOrEmpty(objCacheUseState.cacheModeName) == true) {
      const CacheModeCacheModeId = objCacheUseState.cacheModeId;
      const CacheModeCacheModeName = await CacheMode_func(
        clsCacheModeEN.con_CacheModeId,
        clsCacheModeEN.con_CacheModeName,
        CacheModeCacheModeId,
      );
      objCacheUseState.cacheModeName = CacheModeCacheModeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001313)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      cacheUseState_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objCacheUseStateS:源对象
 **/
export async function CacheUseState_FuncMapCacheModeENName(objCacheUseState: clsCacheUseStateENEx) {
  const strThisFuncName = CacheUseState_FuncMapCacheModeENName.name;
  try {
    if (IsNullOrEmpty(objCacheUseState.cacheModeENName) == true) {
      const CacheModeCacheModeId = objCacheUseState.cacheModeId;
      const CacheModeCacheModeENName = await CacheMode_func(
        clsCacheModeEN.con_CacheModeId,
        clsCacheModeEN.con_CacheModeENName,
        CacheModeCacheModeId,
      );
      objCacheUseState.cacheModeENName = CacheModeCacheModeENName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001314)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      cacheUseState_ConstructorName,
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
export async function CacheUseState_DelCacheUseStatesByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelCacheUseStatesByCondAsync';
  const strAction = 'DelCacheUseStatesByCond';
  const strUrl = GetWebApiUrl(cacheUseState_Controller, strAction);

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
        cacheUseState_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cacheUseState_ConstructorName,
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
 * @param objCacheUseStateEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function CacheUseState_AddNewRecordAsync(
  objCacheUseStateEN: clsCacheUseStateEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objCacheUseStateEN);
  const strUrl = GetWebApiUrl(cacheUseState_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objCacheUseStateEN, config);
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
        cacheUseState_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cacheUseState_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
/* 数据类型不是字符型,不可以最大关键字的方式添加记录。*/

/** 添加新记录,保存函数
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewObjSave)
 **/
export async function CacheUseState_AddNewObjSave(
  objCacheUseStateEN: clsCacheUseStateEN,
): Promise<AddRecordResult> {
  const strThisFuncName = 'AddNewObjSave';
  try {
    CacheUseState_CheckPropertyNew(objCacheUseStateEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${cacheUseState_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    alert(strMsg);
    return { keyword: '', success: false }; //一定要有一个返回值,否则会出错!
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await CacheUseState_CheckUniCond4Add(objCacheUseStateEN);
    if (bolIsExistCond == false) {
      return { keyword: '', success: false };
    }
    let returnBool = false;
    returnBool = await CacheUseState_AddNewRecordAsync(objCacheUseStateEN);
    if (returnBool == true) {
      CacheUseState_ReFreshCache(objCacheUseStateEN.userId);
    } else {
      const strInfo = `添加[缓存使用状态(CacheUseState)]记录不成功!`;
      //显示信息框
      throw strInfo;
    }
    return { keyword: objCacheUseStateEN.mId.toString(), success: returnBool }; //一定要有一个返回值,否则会出错!
  } catch (e) {
    const strMsg = `添加记录不成功,${e}.(in ${cacheUseState_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export async function CacheUseState_CheckUniCond4Add(
  objCacheUseStateEN: clsCacheUseStateEN,
): Promise<boolean> {
  const strUniquenessCondition = CacheUseState_GetUniCondStr(objCacheUseStateEN);
  const bolIsExistCondition = await CacheUseState_IsExistRecordAsync(strUniquenessCondition);
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
export async function CacheUseState_CheckUniCond4Update(
  objCacheUseStateEN: clsCacheUseStateEN,
): Promise<boolean> {
  const strUniquenessCondition = CacheUseState_GetUniCondStr4Update(objCacheUseStateEN);
  const bolIsExistCondition = await CacheUseState_IsExistRecordAsync(strUniquenessCondition);
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
export async function CacheUseState_UpdateObjSave(
  objCacheUseStateEN: clsCacheUseStateEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateObjSave';
  objCacheUseStateEN.sfUpdFldSetStr = objCacheUseStateEN.updFldString; //设置哪些字段被修改(脏字段)
  if (objCacheUseStateEN.mId == 0 || objCacheUseStateEN.mId == undefined) {
    console.error('关键字不能为空!');
    throw '关键字不能为空!';
  }
  try {
    CacheUseState_CheckProperty4Update(objCacheUseStateEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${cacheUseState_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await CacheUseState_CheckUniCond4Update(objCacheUseStateEN);
    if (bolIsExistCond == false) {
      return false;
    }
    const returnBool = await CacheUseState_UpdateRecordAsync(objCacheUseStateEN);
    if (returnBool == true) {
      CacheUseState_ReFreshCache(objCacheUseStateEN.userId);
    }
    return returnBool;
  } catch (e) {
    const strMsg = `修改记录不成功,${e}.(in ${cacheUseState_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objCacheUseStateEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function CacheUseState_AddNewRecordWithReturnKeyAsync(
  objCacheUseStateEN: clsCacheUseStateEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(cacheUseState_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objCacheUseStateEN, config);
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
        cacheUseState_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cacheUseState_ConstructorName,
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
 * @param objCacheUseStateEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function CacheUseState_UpdateRecordAsync(
  objCacheUseStateEN: clsCacheUseStateEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objCacheUseStateEN.sfUpdFldSetStr === undefined ||
    objCacheUseStateEN.sfUpdFldSetStr === null ||
    objCacheUseStateEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objCacheUseStateEN.mId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(cacheUseState_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objCacheUseStateEN, config);
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
        cacheUseState_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cacheUseState_ConstructorName,
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
 * @param objCacheUseStateEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function CacheUseState_EditRecordExAsync(
  objCacheUseStateEN: clsCacheUseStateEN,
): Promise<boolean> {
  const strThisFuncName = 'EditRecordExAsync';
  const strAction = 'EditRecordEx';
  if (
    objCacheUseStateEN.sfUpdFldSetStr === undefined ||
    objCacheUseStateEN.sfUpdFldSetStr === null ||
    objCacheUseStateEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objCacheUseStateEN.mId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(cacheUseState_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objCacheUseStateEN, config);
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
        cacheUseState_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cacheUseState_ConstructorName,
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
 * @param objCacheUseStateEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function CacheUseState_UpdateWithConditionAsync(
  objCacheUseStateEN: clsCacheUseStateEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objCacheUseStateEN.sfUpdFldSetStr === undefined ||
    objCacheUseStateEN.sfUpdFldSetStr === null ||
    objCacheUseStateEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objCacheUseStateEN.mId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(cacheUseState_Controller, strAction);
  objCacheUseStateEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objCacheUseStateEN, config);
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
        cacheUseState_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cacheUseState_ConstructorName,
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
export async function CacheUseState_IsExistRecordCache(
  objCacheUseStateCond: ConditionCollection,
  strUserId: string,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrCacheUseStateObjLstCache = await CacheUseState_GetObjLstCache(strUserId);
  if (arrCacheUseStateObjLstCache == null) return false;
  let arrCacheUseStateSel = arrCacheUseStateObjLstCache;
  if (objCacheUseStateCond.GetConditions().length == 0)
    return arrCacheUseStateSel.length > 0 ? true : false;
  try {
    for (const objCondition of objCacheUseStateCond.GetConditions()) {
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
            arrCacheUseStateSel = arrCacheUseStateSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrCacheUseStateSel = arrCacheUseStateSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrCacheUseStateSel = arrCacheUseStateSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrCacheUseStateSel = arrCacheUseStateSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrCacheUseStateSel = arrCacheUseStateSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrCacheUseStateSel = arrCacheUseStateSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrCacheUseStateSel = arrCacheUseStateSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrCacheUseStateSel = arrCacheUseStateSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrCacheUseStateSel = arrCacheUseStateSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrCacheUseStateSel = arrCacheUseStateSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrCacheUseStateSel = arrCacheUseStateSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrCacheUseStateSel = arrCacheUseStateSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrCacheUseStateSel = arrCacheUseStateSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrCacheUseStateSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objCacheUseStateCond),
      cacheUseState_ConstructorName,
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
export async function CacheUseState_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(cacheUseState_Controller, strAction);

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
        cacheUseState_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cacheUseState_ConstructorName,
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
export async function CacheUseState_IsExistCache(lngmId: number, strUserId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrCacheUseStateObjLstCache = await CacheUseState_GetObjLstCache(strUserId);
  if (arrCacheUseStateObjLstCache == null) return false;
  try {
    const arrCacheUseStateSel = arrCacheUseStateObjLstCache.filter((x) => x.mId == lngmId);
    if (arrCacheUseStateSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      lngmId,
      cacheUseState_ConstructorName,
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
export async function CacheUseState_IsExistAsync(lngmId: number): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(cacheUseState_Controller, strAction);

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
        cacheUseState_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cacheUseState_ConstructorName,
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
export async function CacheUseState_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(cacheUseState_Controller, strAction);

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
        cacheUseState_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cacheUseState_ConstructorName,
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
 * @param objCacheUseStateCond:条件对象
 * @returns 对象列表记录数
 */
export async function CacheUseState_GetRecCountByCondCache(
  objCacheUseStateCond: ConditionCollection,
  strUserId: string,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrCacheUseStateObjLstCache = await CacheUseState_GetObjLstCache(strUserId);
  if (arrCacheUseStateObjLstCache == null) return 0;
  let arrCacheUseStateSel = arrCacheUseStateObjLstCache;
  if (objCacheUseStateCond.GetConditions().length == 0) return arrCacheUseStateSel.length;
  try {
    for (const objCondition of objCacheUseStateCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrCacheUseStateSel = arrCacheUseStateSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrCacheUseStateSel = arrCacheUseStateSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrCacheUseStateSel = arrCacheUseStateSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrCacheUseStateSel = arrCacheUseStateSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrCacheUseStateSel = arrCacheUseStateSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrCacheUseStateSel = arrCacheUseStateSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrCacheUseStateSel = arrCacheUseStateSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrCacheUseStateSel = arrCacheUseStateSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrCacheUseStateSel = arrCacheUseStateSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrCacheUseStateSel = arrCacheUseStateSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrCacheUseStateSel = arrCacheUseStateSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrCacheUseStateSel = arrCacheUseStateSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrCacheUseStateSel = arrCacheUseStateSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrCacheUseStateSel = arrCacheUseStateSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrCacheUseStateSel = arrCacheUseStateSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrCacheUseStateSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objCacheUseStateCond),
      cacheUseState_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return 0;
}
/*该表的关键字类型不是字符型自增,不需要生成获取最大关键字函数!*/
/*该表的关键字类型不是字符型带前缀自增,不需要生成获取最大关键字函数!*/

/**
 * 根据前缀获取当前表关键字值的最大值,再加1,避免重复
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetMaxStrIdByPrefix)
 * @param mapParam:参数列表
 * @returns 获取当前表关键字值的最大值
 */
export async function CacheUseState_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(cacheUseState_Controller, strAction);

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
        cacheUseState_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cacheUseState_ConstructorName,
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
export function CacheUseState_GetWebApiUrl(strController: string, strAction: string): string {
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
export function CacheUseState_ReFreshCache(strUserId: string): void {
  if (IsNullOrEmpty(strUserId) == true) {
    const strMsg = Format(
      '参数:[strUserId]不能为空!(In clsCacheUseStateWApi.clsCacheUseStateWApi.ReFreshCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }

  const strMsg: string = Format('刷新缓存成功!');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = Format('{0}_{1}', clsCacheUseStateEN._CurrTabName, strUserId);
  switch (clsCacheUseStateEN.CacheModeId) {
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
  clsCacheUseStateEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
}

/**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export function CacheUseState_ReFreshThisCache(strUserId: string): void {
  if (IsNullOrEmpty(strUserId) == true) {
    const strMsg = Format(
      '参数:[strUserId]不能为空!(In clsCacheUseStateWApi.CacheUseState_ReFreshThisCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = Format('{0}_{1}', clsCacheUseStateEN._CurrTabName, strUserId);
    switch (clsCacheUseStateEN.CacheModeId) {
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
    clsCacheUseStateEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export function CacheUseState_GetLastRefreshTime(): string {
  if (clsCacheUseStateEN._RefreshTimeLst.length == 0) return '';
  return clsCacheUseStateEN._RefreshTimeLst[clsCacheUseStateEN._RefreshTimeLst.length - 1];
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

 * @param strUserId:
*/
export async function CacheUseState_BindDdl_mIdInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
  strUserId: string,
) {
  if (IsNullOrEmpty(strUserId) == true) {
    const strMsg = Format('参数:[strUserId]不能为空！(In clsCacheUseStateWApi.BindDdl_mIdInDiv)');
    console.error(strMsg);
    throw strMsg;
  }

  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_mIdInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_mIdInDivCache");
  const arrObjLstSel = await CacheUseState_GetObjLstCache(strUserId);
  if (arrObjLstSel == null) return;
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsCacheUseStateEN.con_mId,
    clsCacheUseStateEN.con_UserId,
    '缓存使用状态...',
  );
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

 * @param strUserId:
*/
export async function CacheUseState_GetArrCacheUseState(strUserId: string) {
  if (IsNullOrEmpty(strUserId) == true) {
    const strMsg = Format('参数:[strUserId]不能为空！(In clsCacheUseStateWApi.BindDdl_mIdInDiv)');
    console.error(strMsg);
    throw strMsg;
  }

  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_mIdInDivCache");
  const arrCacheUseState = new Array<clsCacheUseStateEN>();
  const arrObjLstSel = await CacheUseState_GetObjLstCache(strUserId);
  if (arrObjLstSel == null) return null;
  const obj0 = new clsCacheUseStateEN();
  obj0.mId = 0;
  obj0.userId = '选缓存使用状态...';
  arrCacheUseState.push(obj0);
  arrObjLstSel.forEach((x) => arrCacheUseState.push(x));
  return arrCacheUseState;
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function CacheUseState_CheckPropertyNew(pobjCacheUseStateEN: clsCacheUseStateEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (
    IsNullOrEmpty(pobjCacheUseStateEN.userId) === true ||
    pobjCacheUseStateEN.userId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000411)字段[用户Id]不能为空(In 缓存使用状态)!(clsCacheUseStateBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCacheUseStateEN.cacheModeId) === true ||
    pobjCacheUseStateEN.cacheModeId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000411)字段[缓存方式Id]不能为空(In 缓存使用状态)!(clsCacheUseStateBL:CheckPropertyNew0)`,
    );
  }
  if (IsNullOrEmpty(pobjCacheUseStateEN.cacheKey) === true) {
    throw new Error(
      `(errid:Watl000411)字段[缓存关键字]不能为空(In 缓存使用状态)!(clsCacheUseStateBL:CheckPropertyNew0)`,
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjCacheUseStateEN.userId) == false &&
    GetStrLen(pobjCacheUseStateEN.userId) > 18
  ) {
    throw new Error(
      `(errid:Watl000413)字段[用户Id(userId)]的长度不能超过18(In 缓存使用状态(CacheUseState))!值:${pobjCacheUseStateEN.userId}(clsCacheUseStateBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCacheUseStateEN.cacheModeId) == false &&
    GetStrLen(pobjCacheUseStateEN.cacheModeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000413)字段[缓存方式Id(cacheModeId)]的长度不能超过2(In 缓存使用状态(CacheUseState))!值:${pobjCacheUseStateEN.cacheModeId}(clsCacheUseStateBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCacheUseStateEN.cacheKey) == false &&
    GetStrLen(pobjCacheUseStateEN.cacheKey) > 50
  ) {
    throw new Error(
      `(errid:Watl000413)字段[缓存关键字(cacheKey)]的长度不能超过50(In 缓存使用状态(CacheUseState))!值:${pobjCacheUseStateEN.cacheKey}(clsCacheUseStateBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCacheUseStateEN.useDate) == false &&
    GetStrLen(pobjCacheUseStateEN.useDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[使用日期(useDate)]的长度不能超过20(In 缓存使用状态(CacheUseState))!值:${pobjCacheUseStateEN.useDate}(clsCacheUseStateBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCacheUseStateEN.memo) == false &&
    GetStrLen(pobjCacheUseStateEN.memo) > 1000
  ) {
    throw new Error(
      `(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In 缓存使用状态(CacheUseState))!值:${pobjCacheUseStateEN.memo}(clsCacheUseStateBL:CheckPropertyNew)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjCacheUseStateEN.mId &&
    undefined !== pobjCacheUseStateEN.mId &&
    tzDataType.isNumber(pobjCacheUseStateEN.mId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[mId(mId)]的值:[${pobjCacheUseStateEN.mId}], 非法,应该为数值型(In 缓存使用状态(CacheUseState))!(clsCacheUseStateBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCacheUseStateEN.userId) == false &&
    undefined !== pobjCacheUseStateEN.userId &&
    tzDataType.isString(pobjCacheUseStateEN.userId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[用户Id(userId)]的值:[${pobjCacheUseStateEN.userId}], 非法,应该为字符型(In 缓存使用状态(CacheUseState))!(clsCacheUseStateBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCacheUseStateEN.cacheModeId) == false &&
    undefined !== pobjCacheUseStateEN.cacheModeId &&
    tzDataType.isString(pobjCacheUseStateEN.cacheModeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[缓存方式Id(cacheModeId)]的值:[${pobjCacheUseStateEN.cacheModeId}], 非法,应该为字符型(In 缓存使用状态(CacheUseState))!(clsCacheUseStateBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCacheUseStateEN.cacheKey) == false &&
    undefined !== pobjCacheUseStateEN.cacheKey &&
    tzDataType.isString(pobjCacheUseStateEN.cacheKey) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[缓存关键字(cacheKey)]的值:[${pobjCacheUseStateEN.cacheKey}], 非法,应该为字符型(In 缓存使用状态(CacheUseState))!(clsCacheUseStateBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjCacheUseStateEN.cacheSize &&
    undefined !== pobjCacheUseStateEN.cacheSize &&
    tzDataType.isNumber(pobjCacheUseStateEN.cacheSize) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[缓存大小(cacheSize)]的值:[${pobjCacheUseStateEN.cacheSize}], 非法,应该为数值型(In 缓存使用状态(CacheUseState))!(clsCacheUseStateBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCacheUseStateEN.useDate) == false &&
    undefined !== pobjCacheUseStateEN.useDate &&
    tzDataType.isString(pobjCacheUseStateEN.useDate) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[使用日期(useDate)]的值:[${pobjCacheUseStateEN.useDate}], 非法,应该为字符型(In 缓存使用状态(CacheUseState))!(clsCacheUseStateBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCacheUseStateEN.memo) == false &&
    undefined !== pobjCacheUseStateEN.memo &&
    tzDataType.isString(pobjCacheUseStateEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[说明(memo)]的值:[${pobjCacheUseStateEN.memo}], 非法,应该为字符型(In 缓存使用状态(CacheUseState))!(clsCacheUseStateBL:CheckPropertyNew0)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function CacheUseState_CheckProperty4Update(pobjCacheUseStateEN: clsCacheUseStateEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjCacheUseStateEN.userId) == false &&
    GetStrLen(pobjCacheUseStateEN.userId) > 18
  ) {
    throw new Error(
      `(errid:Watl000416)字段[用户Id(userId)]的长度不能超过18(In 缓存使用状态(CacheUseState))!值:${pobjCacheUseStateEN.userId}(clsCacheUseStateBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCacheUseStateEN.cacheModeId) == false &&
    GetStrLen(pobjCacheUseStateEN.cacheModeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000416)字段[缓存方式Id(cacheModeId)]的长度不能超过2(In 缓存使用状态(CacheUseState))!值:${pobjCacheUseStateEN.cacheModeId}(clsCacheUseStateBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCacheUseStateEN.cacheKey) == false &&
    GetStrLen(pobjCacheUseStateEN.cacheKey) > 50
  ) {
    throw new Error(
      `(errid:Watl000416)字段[缓存关键字(cacheKey)]的长度不能超过50(In 缓存使用状态(CacheUseState))!值:${pobjCacheUseStateEN.cacheKey}(clsCacheUseStateBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCacheUseStateEN.useDate) == false &&
    GetStrLen(pobjCacheUseStateEN.useDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[使用日期(useDate)]的长度不能超过20(In 缓存使用状态(CacheUseState))!值:${pobjCacheUseStateEN.useDate}(clsCacheUseStateBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCacheUseStateEN.memo) == false &&
    GetStrLen(pobjCacheUseStateEN.memo) > 1000
  ) {
    throw new Error(
      `(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In 缓存使用状态(CacheUseState))!值:${pobjCacheUseStateEN.memo}(clsCacheUseStateBL:CheckProperty4Update)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjCacheUseStateEN.mId &&
    undefined !== pobjCacheUseStateEN.mId &&
    tzDataType.isNumber(pobjCacheUseStateEN.mId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[mId(mId)]的值:[${pobjCacheUseStateEN.mId}], 非法,应该为数值型(In 缓存使用状态(CacheUseState))!(clsCacheUseStateBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCacheUseStateEN.userId) == false &&
    undefined !== pobjCacheUseStateEN.userId &&
    tzDataType.isString(pobjCacheUseStateEN.userId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[用户Id(userId)]的值:[${pobjCacheUseStateEN.userId}], 非法,应该为字符型(In 缓存使用状态(CacheUseState))!(clsCacheUseStateBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCacheUseStateEN.cacheModeId) == false &&
    undefined !== pobjCacheUseStateEN.cacheModeId &&
    tzDataType.isString(pobjCacheUseStateEN.cacheModeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[缓存方式Id(cacheModeId)]的值:[${pobjCacheUseStateEN.cacheModeId}], 非法,应该为字符型(In 缓存使用状态(CacheUseState))!(clsCacheUseStateBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCacheUseStateEN.cacheKey) == false &&
    undefined !== pobjCacheUseStateEN.cacheKey &&
    tzDataType.isString(pobjCacheUseStateEN.cacheKey) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[缓存关键字(cacheKey)]的值:[${pobjCacheUseStateEN.cacheKey}], 非法,应该为字符型(In 缓存使用状态(CacheUseState))!(clsCacheUseStateBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjCacheUseStateEN.cacheSize &&
    undefined !== pobjCacheUseStateEN.cacheSize &&
    tzDataType.isNumber(pobjCacheUseStateEN.cacheSize) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[缓存大小(cacheSize)]的值:[${pobjCacheUseStateEN.cacheSize}], 非法,应该为数值型(In 缓存使用状态(CacheUseState))!(clsCacheUseStateBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCacheUseStateEN.useDate) == false &&
    undefined !== pobjCacheUseStateEN.useDate &&
    tzDataType.isString(pobjCacheUseStateEN.useDate) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[使用日期(useDate)]的值:[${pobjCacheUseStateEN.useDate}], 非法,应该为字符型(In 缓存使用状态(CacheUseState))!(clsCacheUseStateBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCacheUseStateEN.memo) == false &&
    undefined !== pobjCacheUseStateEN.memo &&
    tzDataType.isString(pobjCacheUseStateEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[说明(memo)]的值:[${pobjCacheUseStateEN.memo}], 非法,应该为字符型(In 缓存使用状态(CacheUseState))!(clsCacheUseStateBL:CheckProperty4Update)`,
    );
  }
  //检查主键是否为Null或者空!
  if (
    null === pobjCacheUseStateEN.mId ||
    (pobjCacheUseStateEN.mId != null && pobjCacheUseStateEN.mId.toString() === '')
  ) {
    throw new Error(
      `(errid:Watl000064)字段[mId]不能为空(In 缓存使用状态)!(clsCacheUseStateBL:CheckProperty4Update)`,
    );
  }
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
export function CacheUseState_GetJSONStrByObj(pobjCacheUseStateEN: clsCacheUseStateEN): string {
  pobjCacheUseStateEN.sfUpdFldSetStr = pobjCacheUseStateEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjCacheUseStateEN);
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
export function CacheUseState_GetObjLstByJSONStr(strJSON: string): Array<clsCacheUseStateEN> {
  let arrCacheUseStateObjLst = new Array<clsCacheUseStateEN>();
  if (strJSON === '') {
    return arrCacheUseStateObjLst;
  }
  try {
    arrCacheUseStateObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrCacheUseStateObjLst;
  }
  return arrCacheUseStateObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrCacheUseStateObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function CacheUseState_GetObjLstByJSONObjLst(
  arrCacheUseStateObjLstS: Array<clsCacheUseStateEN>,
): Array<clsCacheUseStateEN> {
  const arrCacheUseStateObjLst = new Array<clsCacheUseStateEN>();
  for (const objInFor of arrCacheUseStateObjLstS) {
    const obj1 = CacheUseState_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrCacheUseStateObjLst.push(obj1);
  }
  return arrCacheUseStateObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function CacheUseState_GetObjByJSONStr(strJSON: string): clsCacheUseStateEN {
  let pobjCacheUseStateEN = new clsCacheUseStateEN();
  if (strJSON === '') {
    return pobjCacheUseStateEN;
  }
  try {
    pobjCacheUseStateEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjCacheUseStateEN;
  }
  return pobjCacheUseStateEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function CacheUseState_GetCombineCondition(
  objCacheUseStateCond: clsCacheUseStateEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objCacheUseStateCond.dicFldComparisonOp,
      clsCacheUseStateEN.con_mId,
    ) == true
  ) {
    const strComparisonOpmId: string =
      objCacheUseStateCond.dicFldComparisonOp[clsCacheUseStateEN.con_mId];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsCacheUseStateEN.con_mId,
      objCacheUseStateCond.mId,
      strComparisonOpmId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCacheUseStateCond.dicFldComparisonOp,
      clsCacheUseStateEN.con_UserId,
    ) == true
  ) {
    const strComparisonOpUserId: string =
      objCacheUseStateCond.dicFldComparisonOp[clsCacheUseStateEN.con_UserId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCacheUseStateEN.con_UserId,
      objCacheUseStateCond.userId,
      strComparisonOpUserId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCacheUseStateCond.dicFldComparisonOp,
      clsCacheUseStateEN.con_CacheModeId,
    ) == true
  ) {
    const strComparisonOpCacheModeId: string =
      objCacheUseStateCond.dicFldComparisonOp[clsCacheUseStateEN.con_CacheModeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCacheUseStateEN.con_CacheModeId,
      objCacheUseStateCond.cacheModeId,
      strComparisonOpCacheModeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCacheUseStateCond.dicFldComparisonOp,
      clsCacheUseStateEN.con_CacheKey,
    ) == true
  ) {
    const strComparisonOpCacheKey: string =
      objCacheUseStateCond.dicFldComparisonOp[clsCacheUseStateEN.con_CacheKey];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCacheUseStateEN.con_CacheKey,
      objCacheUseStateCond.cacheKey,
      strComparisonOpCacheKey,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCacheUseStateCond.dicFldComparisonOp,
      clsCacheUseStateEN.con_CacheSize,
    ) == true
  ) {
    const strComparisonOpCacheSize: string =
      objCacheUseStateCond.dicFldComparisonOp[clsCacheUseStateEN.con_CacheSize];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsCacheUseStateEN.con_CacheSize,
      objCacheUseStateCond.cacheSize,
      strComparisonOpCacheSize,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCacheUseStateCond.dicFldComparisonOp,
      clsCacheUseStateEN.con_UseDate,
    ) == true
  ) {
    const strComparisonOpUseDate: string =
      objCacheUseStateCond.dicFldComparisonOp[clsCacheUseStateEN.con_UseDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCacheUseStateEN.con_UseDate,
      objCacheUseStateCond.useDate,
      strComparisonOpUseDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCacheUseStateCond.dicFldComparisonOp,
      clsCacheUseStateEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objCacheUseStateCond.dicFldComparisonOp[clsCacheUseStateEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCacheUseStateEN.con_Memo,
      objCacheUseStateCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--CacheUseState(缓存使用状态),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strCacheModeId: 缓存方式Id(要求唯一的字段)
 * @param strCacheKey: 缓存关键字(要求唯一的字段)
 * @param strUserId: 用户Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function CacheUseState_GetUniCondStr(objCacheUseStateEN: clsCacheUseStateEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and CacheModeId = '{0}'", objCacheUseStateEN.cacheModeId);
  strWhereCond += Format(" and CacheKey = '{0}'", objCacheUseStateEN.cacheKey);
  strWhereCond += Format(" and UserId = '{0}'", objCacheUseStateEN.userId);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--CacheUseState(缓存使用状态),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strCacheModeId: 缓存方式Id(要求唯一的字段)
 * @param strCacheKey: 缓存关键字(要求唯一的字段)
 * @param strUserId: 用户Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function CacheUseState_GetUniCondStr4Update(objCacheUseStateEN: clsCacheUseStateEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and mId <> '{0}'", objCacheUseStateEN.mId);
  strWhereCond += Format(" and CacheModeId = '{0}'", objCacheUseStateEN.cacheModeId);
  strWhereCond += Format(" and CacheKey = '{0}'", objCacheUseStateEN.cacheKey);
  strWhereCond += Format(" and UserId = '{0}'", objCacheUseStateEN.userId);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objCacheUseStateENS:源对象
 * @param objCacheUseStateENT:目标对象
 */
export function CacheUseState_GetObjFromJsonObj(
  objCacheUseStateENS: clsCacheUseStateEN,
): clsCacheUseStateEN {
  const objCacheUseStateENT: clsCacheUseStateEN = new clsCacheUseStateEN();
  ObjectAssign(objCacheUseStateENT, objCacheUseStateENS);
  return objCacheUseStateENT;
}
