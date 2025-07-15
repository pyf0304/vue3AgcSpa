/**
 * 类名:clsProgLangTypeWApi
 * 表名:ProgLangType(00050303)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/14 11:51:15
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 应用类型:Vue应用InCore-TS(30)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:系统参数(SysPara)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 编程语言类型(ProgLangType)
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
import { progLangTypeCache, isFuncMapCache } from '@/views/SysPara/ProgLangTypeVueShare';
import { clsProgLangTypeENEx } from '@/ts/L0Entity/SysPara/clsProgLangTypeENEx';
import { clsProgLangTypeEN } from '@/ts/L0Entity/SysPara/clsProgLangTypeEN';
import { CharEncoding_func } from '@/ts/L3ForWApi/SysPara/clsCharEncodingWApi';
import { clsCharEncodingEN } from '@/ts/L0Entity/SysPara/clsCharEncodingEN';
import { AddRecordResult } from '@/ts/PubFun/AddRecordResult';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';

export const progLangType_Controller = 'ProgLangTypeApi';
export const progLangType_ConstructorName = 'progLangType';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strProgLangTypeId:关键字
 * @returns 对象
 **/
export async function ProgLangType_GetObjByProgLangTypeIdAsync(
  strProgLangTypeId: string,
): Promise<clsProgLangTypeEN | null> {
  const strThisFuncName = 'GetObjByProgLangTypeIdAsync';

  if (IsNullOrEmpty(strProgLangTypeId) == true) {
    const strMsg = Format(
      '参数:[strProgLangTypeId]不能为空!(In clsProgLangTypeWApi.GetObjByProgLangTypeIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strProgLangTypeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strProgLangTypeId]的长度:[{0}]不正确!(clsProgLangTypeWApi.GetObjByProgLangTypeIdAsync)',
      strProgLangTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByProgLangTypeId';
  const strUrl = GetWebApiUrl(progLangType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strProgLangTypeId,
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
      const objProgLangType = ProgLangType_GetObjFromJsonObj(returnObj);
      return objProgLangType;
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
        progLangType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        progLangType_ConstructorName,
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
 * @param strProgLangTypeId:所给的关键字
 * @returns 对象
 */
export async function ProgLangType_GetObjByProgLangTypeIdlocalStorage(strProgLangTypeId: string) {
  const strThisFuncName = 'GetObjByProgLangTypeIdlocalStorage';

  if (IsNullOrEmpty(strProgLangTypeId) == true) {
    const strMsg = Format(
      '参数:[strProgLangTypeId]不能为空!(In clsProgLangTypeWApi.GetObjByProgLangTypeIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strProgLangTypeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strProgLangTypeId]的长度:[{0}]不正确!(clsProgLangTypeWApi.GetObjByProgLangTypeIdlocalStorage)',
      strProgLangTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsProgLangTypeEN._CurrTabName, strProgLangTypeId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objProgLangTypeCache: clsProgLangTypeEN = JSON.parse(strTempObj);
    return objProgLangTypeCache;
  }
  try {
    const objProgLangType = await ProgLangType_GetObjByProgLangTypeIdAsync(strProgLangTypeId);
    if (objProgLangType != null) {
      localStorage.setItem(strKey, JSON.stringify(objProgLangType));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objProgLangType;
    }
    return objProgLangType;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strProgLangTypeId,
      progLangType_ConstructorName,
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
 * @param strProgLangTypeId:所给的关键字
 * @returns 对象
 */
export async function ProgLangType_GetObjByProgLangTypeIdCache(
  strProgLangTypeId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByProgLangTypeIdCache';

  if (IsNullOrEmpty(strProgLangTypeId) == true) {
    const strMsg = Format(
      '参数:[strProgLangTypeId]不能为空!(In clsProgLangTypeWApi.GetObjByProgLangTypeIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strProgLangTypeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strProgLangTypeId]的长度:[{0}]不正确!(clsProgLangTypeWApi.GetObjByProgLangTypeIdCache)',
      strProgLangTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrProgLangTypeObjLstCache = await ProgLangType_GetObjLstCache();
  try {
    const arrProgLangTypeSel = arrProgLangTypeObjLstCache.filter(
      (x) => x.progLangTypeId == strProgLangTypeId,
    );
    let objProgLangType: clsProgLangTypeEN;
    if (arrProgLangTypeSel.length > 0) {
      objProgLangType = arrProgLangTypeSel[0];
      return objProgLangType;
    } else {
      if (bolTryAsyncOnce == true) {
        const objProgLangTypeConst = await ProgLangType_GetObjByProgLangTypeIdAsync(
          strProgLangTypeId,
        );
        if (objProgLangTypeConst != null) {
          ProgLangType_ReFreshThisCache();
          return objProgLangTypeConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strProgLangTypeId,
      progLangType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objProgLangType:所给的对象
 * @returns 对象
 */
export async function ProgLangType_UpdateObjInLstCache(objProgLangType: clsProgLangTypeEN) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrProgLangTypeObjLstCache = await ProgLangType_GetObjLstCache();
    const obj = arrProgLangTypeObjLstCache.find(
      (x) => x.progLangTypeId == objProgLangType.progLangTypeId,
    );
    if (obj != null) {
      objProgLangType.progLangTypeId = obj.progLangTypeId;
      ObjectAssign(obj, objProgLangType);
    } else {
      arrProgLangTypeObjLstCache.push(objProgLangType);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      progLangType_ConstructorName,
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
export function ProgLangType_SortFunDefa(a: clsProgLangTypeEN, b: clsProgLangTypeEN): number {
  return a.progLangTypeId.localeCompare(b.progLangTypeId);
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
export function ProgLangType_SortFunDefa2Fld(a: clsProgLangTypeEN, b: clsProgLangTypeEN): number {
  if (a.progLangTypeName == b.progLangTypeName)
    return a.progLangTypeSimName.localeCompare(b.progLangTypeSimName);
  else return a.progLangTypeName.localeCompare(b.progLangTypeName);
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
export function ProgLangType_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsProgLangTypeEN.con_ProgLangTypeId:
        return (a: clsProgLangTypeEN, b: clsProgLangTypeEN) => {
          return a.progLangTypeId.localeCompare(b.progLangTypeId);
        };
      case clsProgLangTypeEN.con_ProgLangTypeName:
        return (a: clsProgLangTypeEN, b: clsProgLangTypeEN) => {
          return a.progLangTypeName.localeCompare(b.progLangTypeName);
        };
      case clsProgLangTypeEN.con_ProgLangTypeSimName:
        return (a: clsProgLangTypeEN, b: clsProgLangTypeEN) => {
          if (a.progLangTypeSimName == null) return -1;
          if (b.progLangTypeSimName == null) return 1;
          return a.progLangTypeSimName.localeCompare(b.progLangTypeSimName);
        };
      case clsProgLangTypeEN.con_ProgLangTypeENName:
        return (a: clsProgLangTypeEN, b: clsProgLangTypeEN) => {
          if (a.progLangTypeENName == null) return -1;
          if (b.progLangTypeENName == null) return 1;
          return a.progLangTypeENName.localeCompare(b.progLangTypeENName);
        };
      case clsProgLangTypeEN.con_CharEncodingId:
        return (a: clsProgLangTypeEN, b: clsProgLangTypeEN) => {
          return a.charEncodingId.localeCompare(b.charEncodingId);
        };
      case clsProgLangTypeEN.con_IsVisible:
        return (a: clsProgLangTypeEN) => {
          if (a.isVisible == true) return 1;
          else return -1;
        };
      case clsProgLangTypeEN.con_OrderNum:
        return (a: clsProgLangTypeEN, b: clsProgLangTypeEN) => {
          return a.orderNum - b.orderNum;
        };
      case clsProgLangTypeEN.con_UpdDate:
        return (a: clsProgLangTypeEN, b: clsProgLangTypeEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsProgLangTypeEN.con_UpdUserId:
        return (a: clsProgLangTypeEN, b: clsProgLangTypeEN) => {
          if (a.updUserId == null) return -1;
          if (b.updUserId == null) return 1;
          return a.updUserId.localeCompare(b.updUserId);
        };
      case clsProgLangTypeEN.con_Memo:
        return (a: clsProgLangTypeEN, b: clsProgLangTypeEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[ProgLangType]中不存在!(in ${progLangType_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsProgLangTypeEN.con_ProgLangTypeId:
        return (a: clsProgLangTypeEN, b: clsProgLangTypeEN) => {
          return b.progLangTypeId.localeCompare(a.progLangTypeId);
        };
      case clsProgLangTypeEN.con_ProgLangTypeName:
        return (a: clsProgLangTypeEN, b: clsProgLangTypeEN) => {
          return b.progLangTypeName.localeCompare(a.progLangTypeName);
        };
      case clsProgLangTypeEN.con_ProgLangTypeSimName:
        return (a: clsProgLangTypeEN, b: clsProgLangTypeEN) => {
          if (b.progLangTypeSimName == null) return -1;
          if (a.progLangTypeSimName == null) return 1;
          return b.progLangTypeSimName.localeCompare(a.progLangTypeSimName);
        };
      case clsProgLangTypeEN.con_ProgLangTypeENName:
        return (a: clsProgLangTypeEN, b: clsProgLangTypeEN) => {
          if (b.progLangTypeENName == null) return -1;
          if (a.progLangTypeENName == null) return 1;
          return b.progLangTypeENName.localeCompare(a.progLangTypeENName);
        };
      case clsProgLangTypeEN.con_CharEncodingId:
        return (a: clsProgLangTypeEN, b: clsProgLangTypeEN) => {
          return b.charEncodingId.localeCompare(a.charEncodingId);
        };
      case clsProgLangTypeEN.con_IsVisible:
        return (b: clsProgLangTypeEN) => {
          if (b.isVisible == true) return 1;
          else return -1;
        };
      case clsProgLangTypeEN.con_OrderNum:
        return (a: clsProgLangTypeEN, b: clsProgLangTypeEN) => {
          return b.orderNum - a.orderNum;
        };
      case clsProgLangTypeEN.con_UpdDate:
        return (a: clsProgLangTypeEN, b: clsProgLangTypeEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsProgLangTypeEN.con_UpdUserId:
        return (a: clsProgLangTypeEN, b: clsProgLangTypeEN) => {
          if (b.updUserId == null) return -1;
          if (a.updUserId == null) return 1;
          return b.updUserId.localeCompare(a.updUserId);
        };
      case clsProgLangTypeEN.con_Memo:
        return (a: clsProgLangTypeEN, b: clsProgLangTypeEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[ProgLangType]中不存在!(in ${progLangType_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strProgLangTypeId:所给的关键字
 * @returns 对象
 */
export async function ProgLangType_GetNameByProgLangTypeIdCache(strProgLangTypeId: string) {
  if (IsNullOrEmpty(strProgLangTypeId) == true) {
    const strMsg = Format(
      '参数:[strProgLangTypeId]不能为空!(In clsProgLangTypeWApi.GetNameByProgLangTypeIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strProgLangTypeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strProgLangTypeId]的长度:[{0}]不正确!(clsProgLangTypeWApi.GetNameByProgLangTypeIdCache)',
      strProgLangTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrProgLangTypeObjLstCache = await ProgLangType_GetObjLstCache();
  if (arrProgLangTypeObjLstCache == null) return '';
  try {
    const arrProgLangTypeSel = arrProgLangTypeObjLstCache.filter(
      (x) => x.progLangTypeId == strProgLangTypeId,
    );
    let objProgLangType: clsProgLangTypeEN;
    if (arrProgLangTypeSel.length > 0) {
      objProgLangType = arrProgLangTypeSel[0];
      return objProgLangType.progLangTypeName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strProgLangTypeId,
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
export async function ProgLangType_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsProgLangTypeEN.con_ProgLangTypeId:
      return (obj: clsProgLangTypeEN) => {
        return obj.progLangTypeId === value;
      };
    case clsProgLangTypeEN.con_ProgLangTypeName:
      return (obj: clsProgLangTypeEN) => {
        return obj.progLangTypeName === value;
      };
    case clsProgLangTypeEN.con_ProgLangTypeSimName:
      return (obj: clsProgLangTypeEN) => {
        return obj.progLangTypeSimName === value;
      };
    case clsProgLangTypeEN.con_ProgLangTypeENName:
      return (obj: clsProgLangTypeEN) => {
        return obj.progLangTypeENName === value;
      };
    case clsProgLangTypeEN.con_CharEncodingId:
      return (obj: clsProgLangTypeEN) => {
        return obj.charEncodingId === value;
      };
    case clsProgLangTypeEN.con_IsVisible:
      return (obj: clsProgLangTypeEN) => {
        return obj.isVisible === value;
      };
    case clsProgLangTypeEN.con_OrderNum:
      return (obj: clsProgLangTypeEN) => {
        return obj.orderNum === value;
      };
    case clsProgLangTypeEN.con_UpdDate:
      return (obj: clsProgLangTypeEN) => {
        return obj.updDate === value;
      };
    case clsProgLangTypeEN.con_UpdUserId:
      return (obj: clsProgLangTypeEN) => {
        return obj.updUserId === value;
      };
    case clsProgLangTypeEN.con_Memo:
      return (obj: clsProgLangTypeEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[ProgLangType]中不存在!(in ${progLangType_ConstructorName}.${strThisFuncName})`;
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
 * @returns 返回一个输出字段值
 */
export async function ProgLangType_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsProgLangTypeEN.con_ProgLangTypeId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsProgLangTypeEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsProgLangTypeEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strProgLangTypeId = strInValue;
  if (IsNullOrEmpty(strProgLangTypeId) == true) {
    return '';
  }
  const objProgLangType = await ProgLangType_GetObjByProgLangTypeIdCache(strProgLangTypeId);
  if (objProgLangType == null) return '';
  if (objProgLangType.GetFldValue(strOutFldName) == null) return '';
  return objProgLangType.GetFldValue(strOutFldName).toString();
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 * @returns 返回一个关键字值列表
 */
export async function ProgLangType_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsProgLangTypeEN.con_ProgLangTypeId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrProgLangType = await ProgLangType_GetObjLstCache();
  if (arrProgLangType == null) return [];
  let arrProgLangTypeSel = arrProgLangType;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrProgLangTypeSel = arrProgLangTypeSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrProgLangTypeSel = arrProgLangTypeSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrProgLangTypeSel = arrProgLangTypeSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrProgLangTypeSel = arrProgLangTypeSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrProgLangTypeSel = arrProgLangTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrProgLangTypeSel = arrProgLangTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrProgLangTypeSel = arrProgLangTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrProgLangTypeSel = arrProgLangTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrProgLangTypeSel = arrProgLangTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrProgLangTypeSel = arrProgLangTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrProgLangTypeSel.length == 0) return [];
  return arrProgLangTypeSel.map((x) => x.progLangTypeId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function ProgLangType_GetFldValueAsync(
  strFldName: string,
  strWhereCond: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetFldValueAsync';
  const strAction = 'GetFldValue';
  const strUrl = GetWebApiUrl(progLangType_Controller, strAction);

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
        progLangType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        progLangType_ConstructorName,
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
export async function ProgLangType_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(progLangType_Controller, strAction);

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
        progLangType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        progLangType_ConstructorName,
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
export async function ProgLangType_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(progLangType_Controller, strAction);

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
        progLangType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        progLangType_ConstructorName,
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
export async function ProgLangType_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsProgLangTypeEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(progLangType_Controller, strAction);

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
      const objProgLangType = ProgLangType_GetObjFromJsonObj(returnObj);
      return objProgLangType;
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
        progLangType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        progLangType_ConstructorName,
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
export async function ProgLangType_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsProgLangTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsProgLangTypeEN.WhereFormat) == false) {
    strWhereCond = clsProgLangTypeEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsProgLangTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsProgLangTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrProgLangTypeExObjLstCache: Array<clsProgLangTypeEN> = CacheHelper.Get(strKey);
    const arrProgLangTypeObjLstT = ProgLangType_GetObjLstByJSONObjLst(arrProgLangTypeExObjLstCache);
    return arrProgLangTypeObjLstT;
  }
  try {
    const arrProgLangTypeExObjLst = await ProgLangType_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrProgLangTypeExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrProgLangTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrProgLangTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      progLangType_ConstructorName,
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
export async function ProgLangType_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsProgLangTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsProgLangTypeEN.WhereFormat) == false) {
    strWhereCond = clsProgLangTypeEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsProgLangTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsProgLangTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrProgLangTypeExObjLstCache: Array<clsProgLangTypeEN> = JSON.parse(strTempObjLst);
    const arrProgLangTypeObjLstT = ProgLangType_GetObjLstByJSONObjLst(arrProgLangTypeExObjLstCache);
    return arrProgLangTypeObjLstT;
  }
  try {
    const arrProgLangTypeExObjLst = await ProgLangType_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrProgLangTypeExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrProgLangTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrProgLangTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      progLangType_ConstructorName,
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
export async function ProgLangType_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsProgLangTypeEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrProgLangTypeObjLstCache: Array<clsProgLangTypeEN> = JSON.parse(strTempObjLst);
    return arrProgLangTypeObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function ProgLangType_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsProgLangTypeEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(progLangType_Controller, strAction);

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
          progLangType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ProgLangType_GetObjLstByJSONObjLst(returnObjLst);
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
        progLangType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        progLangType_ConstructorName,
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
export async function ProgLangType_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsProgLangTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsProgLangTypeEN.WhereFormat) == false) {
    strWhereCond = clsProgLangTypeEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsProgLangTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsProgLangTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrProgLangTypeExObjLstCache: Array<clsProgLangTypeEN> = JSON.parse(strTempObjLst);
    const arrProgLangTypeObjLstT = ProgLangType_GetObjLstByJSONObjLst(arrProgLangTypeExObjLstCache);
    return arrProgLangTypeObjLstT;
  }
  try {
    const arrProgLangTypeExObjLst = await ProgLangType_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrProgLangTypeExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrProgLangTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrProgLangTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      progLangType_ConstructorName,
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
export async function ProgLangType_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsProgLangTypeEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrProgLangTypeObjLstCache: Array<clsProgLangTypeEN> = JSON.parse(strTempObjLst);
    return arrProgLangTypeObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function ProgLangType_GetObjLstCache(): Promise<Array<clsProgLangTypeEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrProgLangTypeObjLstCache;
  switch (clsProgLangTypeEN.CacheModeId) {
    case '04': //sessionStorage
      arrProgLangTypeObjLstCache = await ProgLangType_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrProgLangTypeObjLstCache = await ProgLangType_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrProgLangTypeObjLstCache = await ProgLangType_GetObjLstClientCache();
      break;
    default:
      arrProgLangTypeObjLstCache = await ProgLangType_GetObjLstClientCache();
      break;
  }
  return arrProgLangTypeObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function ProgLangType_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrProgLangTypeObjLstCache;
  switch (clsProgLangTypeEN.CacheModeId) {
    case '04': //sessionStorage
      arrProgLangTypeObjLstCache = await ProgLangType_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrProgLangTypeObjLstCache = await ProgLangType_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrProgLangTypeObjLstCache = null;
      break;
    default:
      arrProgLangTypeObjLstCache = null;
      break;
  }
  return arrProgLangTypeObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrProgLangTypeIdCond:条件对象
 * @returns 对象列表子集
 */
export async function ProgLangType_GetSubObjLstCache(objProgLangTypeCond: ConditionCollection) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrProgLangTypeObjLstCache = await ProgLangType_GetObjLstCache();
  let arrProgLangTypeSel = arrProgLangTypeObjLstCache;
  if (objProgLangTypeCond.GetConditions().length == 0) return arrProgLangTypeSel;
  try {
    //console.log(sstrKeys);
    for (const objCondition of objProgLangTypeCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrProgLangTypeSel = arrProgLangTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrProgLangTypeSel = arrProgLangTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrProgLangTypeSel = arrProgLangTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrProgLangTypeSel = arrProgLangTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrProgLangTypeSel = arrProgLangTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrProgLangTypeSel = arrProgLangTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrProgLangTypeSel = arrProgLangTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrProgLangTypeSel = arrProgLangTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrProgLangTypeSel = arrProgLangTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrProgLangTypeSel = arrProgLangTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrProgLangTypeSel = arrProgLangTypeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrProgLangTypeSel = arrProgLangTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrProgLangTypeSel = arrProgLangTypeSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrProgLangTypeSel = arrProgLangTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrProgLangTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objProgLangTypeCond),
      progLangType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsProgLangTypeEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrProgLangTypeId:关键字列表
 * @returns 对象列表
 **/
export async function ProgLangType_GetObjLstByProgLangTypeIdLstAsync(
  arrProgLangTypeId: Array<string>,
): Promise<Array<clsProgLangTypeEN>> {
  const strThisFuncName = 'GetObjLstByProgLangTypeIdLstAsync';
  const strAction = 'GetObjLstByProgLangTypeIdLst';
  const strUrl = GetWebApiUrl(progLangType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrProgLangTypeId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          progLangType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ProgLangType_GetObjLstByJSONObjLst(returnObjLst);
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
        progLangType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        progLangType_ConstructorName,
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
 * @param arrstrProgLangTypeIdLst:关键字列表
 * @returns 对象列表
 */
export async function ProgLangType_GetObjLstByProgLangTypeIdLstCache(
  arrProgLangTypeIdLst: Array<string>,
) {
  const strThisFuncName = 'GetObjLstByProgLangTypeIdLstCache';
  try {
    const arrProgLangTypeObjLstCache = await ProgLangType_GetObjLstCache();
    const arrProgLangTypeSel = arrProgLangTypeObjLstCache.filter(
      (x) => arrProgLangTypeIdLst.indexOf(x.progLangTypeId) > -1,
    );
    return arrProgLangTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrProgLangTypeIdLst.join(','),
      progLangType_ConstructorName,
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
export async function ProgLangType_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsProgLangTypeEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(progLangType_Controller, strAction);

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
          progLangType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ProgLangType_GetObjLstByJSONObjLst(returnObjLst);
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
        progLangType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        progLangType_ConstructorName,
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
export async function ProgLangType_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsProgLangTypeEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(progLangType_Controller, strAction);

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
          progLangType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ProgLangType_GetObjLstByJSONObjLst(returnObjLst);
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
        progLangType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        progLangType_ConstructorName,
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
export async function ProgLangType_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsProgLangTypeEN>();
  const arrProgLangTypeObjLstCache = await ProgLangType_GetObjLstCache();
  if (arrProgLangTypeObjLstCache.length == 0) return arrProgLangTypeObjLstCache;
  let arrProgLangTypeSel = arrProgLangTypeObjLstCache;
  const objProgLangTypeCond = objPagerPara.conditionCollection;
  if (objProgLangTypeCond == null) {
    const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return new Array<clsProgLangTypeEN>();
  }
  //console.log("clsProgLangTypeWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    for (const objCondition of objProgLangTypeCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrProgLangTypeSel = arrProgLangTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrProgLangTypeSel = arrProgLangTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrProgLangTypeSel = arrProgLangTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrProgLangTypeSel = arrProgLangTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrProgLangTypeSel = arrProgLangTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrProgLangTypeSel = arrProgLangTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrProgLangTypeSel = arrProgLangTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrProgLangTypeSel = arrProgLangTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrProgLangTypeSel = arrProgLangTypeSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrProgLangTypeSel = arrProgLangTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrProgLangTypeSel = arrProgLangTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrProgLangTypeSel = arrProgLangTypeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrProgLangTypeSel = arrProgLangTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrProgLangTypeSel = arrProgLangTypeSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrProgLangTypeSel = arrProgLangTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrProgLangTypeSel.length == 0) return arrProgLangTypeSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrProgLangTypeSel = arrProgLangTypeSel.sort(
        ProgLangType_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrProgLangTypeSel = arrProgLangTypeSel.sort(objPagerPara.sortFun);
    }
    arrProgLangTypeSel = arrProgLangTypeSel.slice(intStart, intEnd);
    return arrProgLangTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      progLangType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsProgLangTypeEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function ProgLangType_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsProgLangTypeEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsProgLangTypeEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(progLangType_Controller, strAction);

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
          progLangType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ProgLangType_GetObjLstByJSONObjLst(returnObjLst);
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
        progLangType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        progLangType_ConstructorName,
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
 * @param strProgLangTypeId:关键字
 * @returns 获取删除的结果
 **/
export async function ProgLangType_DelRecordAsync(strProgLangTypeId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(progLangType_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strProgLangTypeId);

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
        progLangType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        progLangType_ConstructorName,
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
 * @param arrProgLangTypeId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function ProgLangType_DelProgLangTypesAsync(
  arrProgLangTypeId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelProgLangTypesAsync';
  const strAction = 'DelProgLangTypes';
  const strUrl = GetWebApiUrl(progLangType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrProgLangTypeId, config);
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
        progLangType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        progLangType_ConstructorName,
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
export async function ProgLangType_GetObjExLstByPagerCache(
  objPagerPara: stuPagerPara,
): Promise<Array<clsProgLangTypeENEx>> {
  const strThisFuncName = 'GetObjLstByPagerCache';
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  const isFuncMapKey = `${objSortInfo.SortFld}`;
  const arrProgLangTypeObjLst = await ProgLangType_GetObjLstCache();
  //从缓存中获取对象，如果缓存中不存在就扩展复制
  const arrNewObj = new Array<clsProgLangTypeENEx>();
  const arrProgLangTypeExObjLst = arrProgLangTypeObjLst.map((obj) => {
    const cacheKey = `${obj.progLangTypeId}`;
    if (progLangTypeCache[cacheKey]) {
      const oldObj = progLangTypeCache[cacheKey];
      return oldObj;
    } else {
      const newObj = ProgLangType_CopyToEx(obj);
      arrNewObj.push(newObj);
      progLangTypeCache[cacheKey] = newObj;
      return newObj;
    }
  });
  for (const newObj of arrNewObj) {
    for (const strFldName of Object.keys(isFuncMapCache)) {
      await ProgLangType_FuncMapByFldName(strFldName, newObj);
    }
  }
  //检查关于当前扩展排序字段是否获取得值，如果没有获取过，就获取，并存缓存
  const bolIsFuncMap = isFuncMapCache[isFuncMapKey];
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsProgLangTypeEN.AttributeName.indexOf(objSortInfo.SortFld) == -1 &&
    (bolIsFuncMap == false || bolIsFuncMap == undefined)
  ) {
    for (const newObj of arrProgLangTypeExObjLst) {
      await ProgLangType_FuncMapByFldName(objSortInfo.SortFld, newObj);
      const cacheKey = `${newObj.progLangTypeId}`;
      progLangTypeCache[cacheKey] = newObj;
    }
    isFuncMapCache[isFuncMapKey] = true;
  }
  if (arrProgLangTypeExObjLst.length == 0) return arrProgLangTypeExObjLst;
  let arrProgLangTypeSel: Array<clsProgLangTypeENEx> = arrProgLangTypeExObjLst;
  const objProgLangTypeCond = objPagerPara.conditionCollection;
  if (objProgLangTypeCond == null) {
    const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return arrProgLangTypeExObjLst;
  }
  try {
    for (const objCondition of objProgLangTypeCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrProgLangTypeSel = arrProgLangTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrProgLangTypeSel = arrProgLangTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrProgLangTypeSel = arrProgLangTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrProgLangTypeSel = arrProgLangTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrProgLangTypeSel = arrProgLangTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrProgLangTypeSel = arrProgLangTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrProgLangTypeSel = arrProgLangTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrProgLangTypeSel = arrProgLangTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.split(',');
            arrProgLangTypeSel = arrProgLangTypeSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrProgLangTypeSel = arrProgLangTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrProgLangTypeSel = arrProgLangTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrProgLangTypeSel = arrProgLangTypeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrProgLangTypeSel = arrProgLangTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrProgLangTypeSel = arrProgLangTypeSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrProgLangTypeSel = arrProgLangTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrProgLangTypeSel.length == 0) return arrProgLangTypeSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      arrProgLangTypeSel = arrProgLangTypeSel.sort(
        ProgLangType_SortFunByExKey(objSortInfo.SortFld, objSortInfo.SortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrProgLangTypeSel = arrProgLangTypeSel.sort(objPagerPara.sortFun);
    }
    arrProgLangTypeSel = arrProgLangTypeSel.slice(intStart, intEnd);
    return arrProgLangTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      progLangType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsProgLangTypeENEx>();
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CopyToEx)
 * @param objProgLangTypeENS:源对象
 * @returns 目标对象=>clsProgLangTypeEN:objProgLangTypeENT
 **/
export function ProgLangType_CopyToEx(objProgLangTypeENS: clsProgLangTypeEN): clsProgLangTypeENEx {
  const strThisFuncName = ProgLangType_CopyToEx.name;
  const objProgLangTypeENT = new clsProgLangTypeENEx();
  try {
    ObjectAssign(objProgLangTypeENT, objProgLangTypeENS);
    return objProgLangTypeENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001294)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      progLangType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objProgLangTypeENT;
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
export function ProgLangType_FuncMapByFldName(
  strFldName: string,
  objProgLangTypeEx: clsProgLangTypeENEx,
) {
  const strThisFuncName = ProgLangType_FuncMapByFldName.name;
  strFldName = strFldName.replace('|Ex', '');
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsProgLangTypeEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsProgLangTypeENEx.con_CharEncodingName:
      return ProgLangType_FuncMapCharEncodingName(objProgLangTypeEx);
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
export function ProgLangType_SortFunByExKey(strKey: string, AscOrDesc: string) {
  strKey = strKey.replace('|Ex', '');
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsProgLangTypeENEx.con_CharEncodingName:
        return (a: clsProgLangTypeENEx, b: clsProgLangTypeENEx) => {
          return a.charEncodingName.localeCompare(b.charEncodingName);
        };
      default:
        return ProgLangType_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsProgLangTypeENEx.con_CharEncodingName:
        return (a: clsProgLangTypeENEx, b: clsProgLangTypeENEx) => {
          return b.charEncodingName.localeCompare(a.charEncodingName);
        };
      default:
        return ProgLangType_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objProgLangTypeS:源对象
 **/
export async function ProgLangType_FuncMapCharEncodingName(objProgLangType: clsProgLangTypeENEx) {
  const strThisFuncName = ProgLangType_FuncMapCharEncodingName.name;
  try {
    if (IsNullOrEmpty(objProgLangType.charEncodingName) == true) {
      const CharEncodingCharEncodingId = objProgLangType.charEncodingId;
      const CharEncodingCharEncodingName = await CharEncoding_func(
        clsCharEncodingEN.con_CharEncodingId,
        clsCharEncodingEN.con_CharEncodingName,
        CharEncodingCharEncodingId,
      );
      objProgLangType.charEncodingName = CharEncodingCharEncodingName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001382)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      progLangType_ConstructorName,
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
export async function ProgLangType_DelProgLangTypesByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelProgLangTypesByCondAsync';
  const strAction = 'DelProgLangTypesByCond';
  const strUrl = GetWebApiUrl(progLangType_Controller, strAction);

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
        progLangType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        progLangType_ConstructorName,
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
 * @param objProgLangTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function ProgLangType_AddNewRecordAsync(
  objProgLangTypeEN: clsProgLangTypeEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  if (objProgLangTypeEN.progLangTypeId === null || objProgLangTypeEN.progLangTypeId === '') {
    const strMsg = '需要的对象的关键字为空,不能添加!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objProgLangTypeEN);
  const strUrl = GetWebApiUrl(progLangType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objProgLangTypeEN, config);
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
        progLangType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        progLangType_ConstructorName,
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
 * @param objProgLangTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function ProgLangType_AddNewRecordWithMaxIdAsync(
  objProgLangTypeEN: clsProgLangTypeEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(progLangType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objProgLangTypeEN, config);
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
        progLangType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        progLangType_ConstructorName,
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
export async function ProgLangType_AddNewObjSave(
  objProgLangTypeEN: clsProgLangTypeEN,
): Promise<AddRecordResult> {
  const strThisFuncName = 'AddNewObjSave';
  try {
    ProgLangType_CheckPropertyNew(objProgLangTypeEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${progLangType_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    alert(strMsg);
    return { keyword: '', success: false }; //一定要有一个返回值,否则会出错!
  }
  try {
    //检查唯一性条件
    let returnBool = false;
    const bolIsExist = await ProgLangType_IsExistAsync(objProgLangTypeEN.progLangTypeId);
    if (bolIsExist == true) {
      const strMsg = Format('添加记录时,关键字：{0}已经存在!', objProgLangTypeEN.progLangTypeId);
      console.error(strMsg);
      throw strMsg;
    }
    returnBool = await ProgLangType_AddNewRecordAsync(objProgLangTypeEN);
    if (returnBool == true) {
      ProgLangType_ReFreshCache();
    } else {
      const strInfo = `添加[编程语言类型(ProgLangType)]记录不成功!`;
      //显示信息框
      throw strInfo;
    }
    return { keyword: objProgLangTypeEN.progLangTypeId, success: returnBool }; //一定要有一个返回值,否则会出错!
  } catch (e) {
    const strMsg = `添加记录不成功,${e}.(in ${progLangType_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/** 修改记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjSave)
 **/
export async function ProgLangType_UpdateObjSave(
  objProgLangTypeEN: clsProgLangTypeEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateObjSave';
  objProgLangTypeEN.sfUpdFldSetStr = objProgLangTypeEN.updFldString; //设置哪些字段被修改(脏字段)
  if (objProgLangTypeEN.progLangTypeId == '' || objProgLangTypeEN.progLangTypeId == undefined) {
    console.error('关键字不能为空!');
    throw '关键字不能为空!';
  }
  try {
    ProgLangType_CheckProperty4Update(objProgLangTypeEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${progLangType_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
  try {
    //检查唯一性条件
    const returnBool = await ProgLangType_UpdateRecordAsync(objProgLangTypeEN);
    if (returnBool == true) {
      ProgLangType_ReFreshCache();
    }
    return returnBool;
  } catch (e) {
    const strMsg = `修改记录不成功,${e}.(in ${progLangType_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objProgLangTypeEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function ProgLangType_AddNewRecordWithReturnKeyAsync(
  objProgLangTypeEN: clsProgLangTypeEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(progLangType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objProgLangTypeEN, config);
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
        progLangType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        progLangType_ConstructorName,
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
 * @param objProgLangTypeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function ProgLangType_UpdateRecordAsync(
  objProgLangTypeEN: clsProgLangTypeEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objProgLangTypeEN.sfUpdFldSetStr === undefined ||
    objProgLangTypeEN.sfUpdFldSetStr === null ||
    objProgLangTypeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objProgLangTypeEN.progLangTypeId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(progLangType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objProgLangTypeEN, config);
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
        progLangType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        progLangType_ConstructorName,
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
 * @param objProgLangTypeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function ProgLangType_EditRecordExAsync(
  objProgLangTypeEN: clsProgLangTypeEN,
): Promise<boolean> {
  const strThisFuncName = 'EditRecordExAsync';
  const strAction = 'EditRecordEx';
  if (
    objProgLangTypeEN.sfUpdFldSetStr === undefined ||
    objProgLangTypeEN.sfUpdFldSetStr === null ||
    objProgLangTypeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objProgLangTypeEN.progLangTypeId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(progLangType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objProgLangTypeEN, config);
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
        progLangType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        progLangType_ConstructorName,
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
 * @param objProgLangTypeEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function ProgLangType_UpdateWithConditionAsync(
  objProgLangTypeEN: clsProgLangTypeEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objProgLangTypeEN.sfUpdFldSetStr === undefined ||
    objProgLangTypeEN.sfUpdFldSetStr === null ||
    objProgLangTypeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objProgLangTypeEN.progLangTypeId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(progLangType_Controller, strAction);
  objProgLangTypeEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objProgLangTypeEN, config);
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
        progLangType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        progLangType_ConstructorName,
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
 * @param objstrProgLangTypeIdCond:条件对象
 * @returns 对象列表子集
 */
export async function ProgLangType_IsExistRecordCache(objProgLangTypeCond: ConditionCollection) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrProgLangTypeObjLstCache = await ProgLangType_GetObjLstCache();
  if (arrProgLangTypeObjLstCache == null) return false;
  let arrProgLangTypeSel = arrProgLangTypeObjLstCache;
  if (objProgLangTypeCond.GetConditions().length == 0)
    return arrProgLangTypeSel.length > 0 ? true : false;
  try {
    for (const objCondition of objProgLangTypeCond.GetConditions()) {
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
            arrProgLangTypeSel = arrProgLangTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrProgLangTypeSel = arrProgLangTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrProgLangTypeSel = arrProgLangTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrProgLangTypeSel = arrProgLangTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrProgLangTypeSel = arrProgLangTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrProgLangTypeSel = arrProgLangTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrProgLangTypeSel = arrProgLangTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrProgLangTypeSel = arrProgLangTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrProgLangTypeSel = arrProgLangTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrProgLangTypeSel = arrProgLangTypeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrProgLangTypeSel = arrProgLangTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrProgLangTypeSel = arrProgLangTypeSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrProgLangTypeSel = arrProgLangTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrProgLangTypeSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objProgLangTypeCond),
      progLangType_ConstructorName,
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
export async function ProgLangType_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(progLangType_Controller, strAction);

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
        progLangType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        progLangType_ConstructorName,
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
 * @param strProgLangTypeId:所给的关键字
 * @returns 对象
 */
export async function ProgLangType_IsExistCache(strProgLangTypeId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrProgLangTypeObjLstCache = await ProgLangType_GetObjLstCache();
  if (arrProgLangTypeObjLstCache == null) return false;
  try {
    const arrProgLangTypeSel = arrProgLangTypeObjLstCache.filter(
      (x) => x.progLangTypeId == strProgLangTypeId,
    );
    if (arrProgLangTypeSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strProgLangTypeId,
      progLangType_ConstructorName,
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
 * @param strProgLangTypeId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function ProgLangType_IsExistAsync(strProgLangTypeId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(progLangType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strProgLangTypeId,
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
        progLangType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        progLangType_ConstructorName,
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
export async function ProgLangType_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(progLangType_Controller, strAction);

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
        progLangType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        progLangType_ConstructorName,
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
 * @param objProgLangTypeCond:条件对象
 * @returns 对象列表记录数
 */
export async function ProgLangType_GetRecCountByCondCache(
  objProgLangTypeCond: ConditionCollection,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrProgLangTypeObjLstCache = await ProgLangType_GetObjLstCache();
  if (arrProgLangTypeObjLstCache == null) return 0;
  let arrProgLangTypeSel = arrProgLangTypeObjLstCache;
  if (objProgLangTypeCond.GetConditions().length == 0) return arrProgLangTypeSel.length;
  try {
    for (const objCondition of objProgLangTypeCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrProgLangTypeSel = arrProgLangTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrProgLangTypeSel = arrProgLangTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrProgLangTypeSel = arrProgLangTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrProgLangTypeSel = arrProgLangTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrProgLangTypeSel = arrProgLangTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrProgLangTypeSel = arrProgLangTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrProgLangTypeSel = arrProgLangTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrProgLangTypeSel = arrProgLangTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrProgLangTypeSel = arrProgLangTypeSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrProgLangTypeSel = arrProgLangTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrProgLangTypeSel = arrProgLangTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrProgLangTypeSel = arrProgLangTypeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrProgLangTypeSel = arrProgLangTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrProgLangTypeSel = arrProgLangTypeSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrProgLangTypeSel = arrProgLangTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrProgLangTypeSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objProgLangTypeCond),
      progLangType_ConstructorName,
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
export async function ProgLangType_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(progLangType_Controller, strAction);

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
        progLangType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        progLangType_ConstructorName,
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
export function ProgLangType_GetWebApiUrl(strController: string, strAction: string): string {
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
export function ProgLangType_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功!');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clsProgLangTypeEN._CurrTabName;
  switch (clsProgLangTypeEN.CacheModeId) {
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
  clsProgLangTypeEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
}

/**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export function ProgLangType_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsProgLangTypeEN._CurrTabName;
    switch (clsProgLangTypeEN.CacheModeId) {
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
    clsProgLangTypeEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export function ProgLangType_GetLastRefreshTime(): string {
  if (clsProgLangTypeEN._RefreshTimeLst.length == 0) return '';
  return clsProgLangTypeEN._RefreshTimeLst[clsProgLangTypeEN._RefreshTimeLst.length - 1];
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export async function ProgLangType_BindDdl_ProgLangTypeIdByIsVisibleInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
) {
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format(
      '下拉框：{0} 不存在!(In BindDdl_ProgLangTypeIdByIsVisibleInDiv)',
      strDdlName,
    );
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_ProgLangTypeIdByIsVisibleInDivCache");
  let arrObjLstSel = await ProgLangType_GetObjLstCache();
  if (arrObjLstSel == null) return;
  arrObjLstSel = arrObjLstSel.sort((x, y) => x.orderNum - y.orderNum);
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsProgLangTypeEN.con_ProgLangTypeId,
    clsProgLangTypeEN.con_ProgLangTypeName,
    '编程语言类型...',
  );
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export async function ProgLangType_GetArrProgLangTypeByIsVisible() {
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_ProgLangTypeIdByIsVisibleInDivCache");
  const arrProgLangType = new Array<clsProgLangTypeEN>();
  let arrObjLstSel = await ProgLangType_GetObjLstCache();
  if (arrObjLstSel == null) return null;
  arrObjLstSel = arrObjLstSel.sort((x, y) => x.orderNum - y.orderNum);
  const obj0 = new clsProgLangTypeEN();
  obj0.progLangTypeId = '0';
  obj0.progLangTypeName = '选编程语言类型...';
  arrProgLangType.push(obj0);
  arrObjLstSel.forEach((x) => arrProgLangType.push(x));
  return arrProgLangType;
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function ProgLangType_CheckPropertyNew(pobjProgLangTypeEN: clsProgLangTypeEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjProgLangTypeEN.progLangTypeName) === true) {
    throw new Error(
      `(errid:Watl000411)字段[编程语言类型名]不能为空(In 编程语言类型)!(clsProgLangTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjProgLangTypeEN.charEncodingId) === true ||
    pobjProgLangTypeEN.charEncodingId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000411)字段[字符编码]不能为空(In 编程语言类型)!(clsProgLangTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    null === pobjProgLangTypeEN.orderNum ||
    (pobjProgLangTypeEN.orderNum != null && pobjProgLangTypeEN.orderNum.toString() === '')
  ) {
    throw new Error(
      `(errid:Watl000411)字段[序号]不能为空(In 编程语言类型)!(clsProgLangTypeBL:CheckPropertyNew0)`,
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjProgLangTypeEN.progLangTypeId) == false &&
    GetStrLen(pobjProgLangTypeEN.progLangTypeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000413)字段[编程语言类型Id(progLangTypeId)]的长度不能超过2(In 编程语言类型(ProgLangType))!值:${pobjProgLangTypeEN.progLangTypeId}(clsProgLangTypeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjProgLangTypeEN.progLangTypeName) == false &&
    GetStrLen(pobjProgLangTypeEN.progLangTypeName) > 30
  ) {
    throw new Error(
      `(errid:Watl000413)字段[编程语言类型名(progLangTypeName)]的长度不能超过30(In 编程语言类型(ProgLangType))!值:${pobjProgLangTypeEN.progLangTypeName}(clsProgLangTypeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjProgLangTypeEN.progLangTypeSimName) == false &&
    GetStrLen(pobjProgLangTypeEN.progLangTypeSimName) > 30
  ) {
    throw new Error(
      `(errid:Watl000413)字段[编程语言类型简称(progLangTypeSimName)]的长度不能超过30(In 编程语言类型(ProgLangType))!值:${pobjProgLangTypeEN.progLangTypeSimName}(clsProgLangTypeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjProgLangTypeEN.progLangTypeENName) == false &&
    GetStrLen(pobjProgLangTypeEN.progLangTypeENName) > 50
  ) {
    throw new Error(
      `(errid:Watl000413)字段[编程语言类型英文名(progLangTypeENName)]的长度不能超过50(In 编程语言类型(ProgLangType))!值:${pobjProgLangTypeEN.progLangTypeENName}(clsProgLangTypeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjProgLangTypeEN.charEncodingId) == false &&
    GetStrLen(pobjProgLangTypeEN.charEncodingId) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[字符编码(charEncodingId)]的长度不能超过20(In 编程语言类型(ProgLangType))!值:${pobjProgLangTypeEN.charEncodingId}(clsProgLangTypeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjProgLangTypeEN.updDate) == false &&
    GetStrLen(pobjProgLangTypeEN.updDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 编程语言类型(ProgLangType))!值:${pobjProgLangTypeEN.updDate}(clsProgLangTypeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjProgLangTypeEN.updUserId) == false &&
    GetStrLen(pobjProgLangTypeEN.updUserId) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改用户Id(updUserId)]的长度不能超过20(In 编程语言类型(ProgLangType))!值:${pobjProgLangTypeEN.updUserId}(clsProgLangTypeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjProgLangTypeEN.memo) == false &&
    GetStrLen(pobjProgLangTypeEN.memo) > 1000
  ) {
    throw new Error(
      `(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In 编程语言类型(ProgLangType))!值:${pobjProgLangTypeEN.memo}(clsProgLangTypeBL:CheckPropertyNew)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjProgLangTypeEN.progLangTypeId) == false &&
    undefined !== pobjProgLangTypeEN.progLangTypeId &&
    tzDataType.isString(pobjProgLangTypeEN.progLangTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[编程语言类型Id(progLangTypeId)]的值:[${pobjProgLangTypeEN.progLangTypeId}], 非法,应该为字符型(In 编程语言类型(ProgLangType))!(clsProgLangTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjProgLangTypeEN.progLangTypeName) == false &&
    undefined !== pobjProgLangTypeEN.progLangTypeName &&
    tzDataType.isString(pobjProgLangTypeEN.progLangTypeName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[编程语言类型名(progLangTypeName)]的值:[${pobjProgLangTypeEN.progLangTypeName}], 非法,应该为字符型(In 编程语言类型(ProgLangType))!(clsProgLangTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjProgLangTypeEN.progLangTypeSimName) == false &&
    undefined !== pobjProgLangTypeEN.progLangTypeSimName &&
    tzDataType.isString(pobjProgLangTypeEN.progLangTypeSimName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[编程语言类型简称(progLangTypeSimName)]的值:[${pobjProgLangTypeEN.progLangTypeSimName}], 非法,应该为字符型(In 编程语言类型(ProgLangType))!(clsProgLangTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjProgLangTypeEN.progLangTypeENName) == false &&
    undefined !== pobjProgLangTypeEN.progLangTypeENName &&
    tzDataType.isString(pobjProgLangTypeEN.progLangTypeENName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[编程语言类型英文名(progLangTypeENName)]的值:[${pobjProgLangTypeEN.progLangTypeENName}], 非法,应该为字符型(In 编程语言类型(ProgLangType))!(clsProgLangTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjProgLangTypeEN.charEncodingId) == false &&
    undefined !== pobjProgLangTypeEN.charEncodingId &&
    tzDataType.isString(pobjProgLangTypeEN.charEncodingId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[字符编码(charEncodingId)]的值:[${pobjProgLangTypeEN.charEncodingId}], 非法,应该为字符型(In 编程语言类型(ProgLangType))!(clsProgLangTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjProgLangTypeEN.isVisible &&
    undefined !== pobjProgLangTypeEN.isVisible &&
    tzDataType.isBoolean(pobjProgLangTypeEN.isVisible) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否显示(isVisible)]的值:[${pobjProgLangTypeEN.isVisible}], 非法,应该为布尔型(In 编程语言类型(ProgLangType))!(clsProgLangTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjProgLangTypeEN.orderNum &&
    undefined !== pobjProgLangTypeEN.orderNum &&
    tzDataType.isNumber(pobjProgLangTypeEN.orderNum) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[序号(orderNum)]的值:[${pobjProgLangTypeEN.orderNum}], 非法,应该为数值型(In 编程语言类型(ProgLangType))!(clsProgLangTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjProgLangTypeEN.updDate) == false &&
    undefined !== pobjProgLangTypeEN.updDate &&
    tzDataType.isString(pobjProgLangTypeEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjProgLangTypeEN.updDate}], 非法,应该为字符型(In 编程语言类型(ProgLangType))!(clsProgLangTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjProgLangTypeEN.updUserId) == false &&
    undefined !== pobjProgLangTypeEN.updUserId &&
    tzDataType.isString(pobjProgLangTypeEN.updUserId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改用户Id(updUserId)]的值:[${pobjProgLangTypeEN.updUserId}], 非法,应该为字符型(In 编程语言类型(ProgLangType))!(clsProgLangTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjProgLangTypeEN.memo) == false &&
    undefined !== pobjProgLangTypeEN.memo &&
    tzDataType.isString(pobjProgLangTypeEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[说明(memo)]的值:[${pobjProgLangTypeEN.memo}], 非法,应该为字符型(In 编程语言类型(ProgLangType))!(clsProgLangTypeBL:CheckPropertyNew0)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function ProgLangType_CheckProperty4Update(pobjProgLangTypeEN: clsProgLangTypeEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjProgLangTypeEN.progLangTypeId) == false &&
    GetStrLen(pobjProgLangTypeEN.progLangTypeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000416)字段[编程语言类型Id(progLangTypeId)]的长度不能超过2(In 编程语言类型(ProgLangType))!值:${pobjProgLangTypeEN.progLangTypeId}(clsProgLangTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjProgLangTypeEN.progLangTypeName) == false &&
    GetStrLen(pobjProgLangTypeEN.progLangTypeName) > 30
  ) {
    throw new Error(
      `(errid:Watl000416)字段[编程语言类型名(progLangTypeName)]的长度不能超过30(In 编程语言类型(ProgLangType))!值:${pobjProgLangTypeEN.progLangTypeName}(clsProgLangTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjProgLangTypeEN.progLangTypeSimName) == false &&
    GetStrLen(pobjProgLangTypeEN.progLangTypeSimName) > 30
  ) {
    throw new Error(
      `(errid:Watl000416)字段[编程语言类型简称(progLangTypeSimName)]的长度不能超过30(In 编程语言类型(ProgLangType))!值:${pobjProgLangTypeEN.progLangTypeSimName}(clsProgLangTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjProgLangTypeEN.progLangTypeENName) == false &&
    GetStrLen(pobjProgLangTypeEN.progLangTypeENName) > 50
  ) {
    throw new Error(
      `(errid:Watl000416)字段[编程语言类型英文名(progLangTypeENName)]的长度不能超过50(In 编程语言类型(ProgLangType))!值:${pobjProgLangTypeEN.progLangTypeENName}(clsProgLangTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjProgLangTypeEN.charEncodingId) == false &&
    GetStrLen(pobjProgLangTypeEN.charEncodingId) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[字符编码(charEncodingId)]的长度不能超过20(In 编程语言类型(ProgLangType))!值:${pobjProgLangTypeEN.charEncodingId}(clsProgLangTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjProgLangTypeEN.updDate) == false &&
    GetStrLen(pobjProgLangTypeEN.updDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 编程语言类型(ProgLangType))!值:${pobjProgLangTypeEN.updDate}(clsProgLangTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjProgLangTypeEN.updUserId) == false &&
    GetStrLen(pobjProgLangTypeEN.updUserId) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改用户Id(updUserId)]的长度不能超过20(In 编程语言类型(ProgLangType))!值:${pobjProgLangTypeEN.updUserId}(clsProgLangTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjProgLangTypeEN.memo) == false &&
    GetStrLen(pobjProgLangTypeEN.memo) > 1000
  ) {
    throw new Error(
      `(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In 编程语言类型(ProgLangType))!值:${pobjProgLangTypeEN.memo}(clsProgLangTypeBL:CheckProperty4Update)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjProgLangTypeEN.progLangTypeId) == false &&
    undefined !== pobjProgLangTypeEN.progLangTypeId &&
    tzDataType.isString(pobjProgLangTypeEN.progLangTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[编程语言类型Id(progLangTypeId)]的值:[${pobjProgLangTypeEN.progLangTypeId}], 非法,应该为字符型(In 编程语言类型(ProgLangType))!(clsProgLangTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjProgLangTypeEN.progLangTypeName) == false &&
    undefined !== pobjProgLangTypeEN.progLangTypeName &&
    tzDataType.isString(pobjProgLangTypeEN.progLangTypeName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[编程语言类型名(progLangTypeName)]的值:[${pobjProgLangTypeEN.progLangTypeName}], 非法,应该为字符型(In 编程语言类型(ProgLangType))!(clsProgLangTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjProgLangTypeEN.progLangTypeSimName) == false &&
    undefined !== pobjProgLangTypeEN.progLangTypeSimName &&
    tzDataType.isString(pobjProgLangTypeEN.progLangTypeSimName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[编程语言类型简称(progLangTypeSimName)]的值:[${pobjProgLangTypeEN.progLangTypeSimName}], 非法,应该为字符型(In 编程语言类型(ProgLangType))!(clsProgLangTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjProgLangTypeEN.progLangTypeENName) == false &&
    undefined !== pobjProgLangTypeEN.progLangTypeENName &&
    tzDataType.isString(pobjProgLangTypeEN.progLangTypeENName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[编程语言类型英文名(progLangTypeENName)]的值:[${pobjProgLangTypeEN.progLangTypeENName}], 非法,应该为字符型(In 编程语言类型(ProgLangType))!(clsProgLangTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjProgLangTypeEN.charEncodingId) == false &&
    undefined !== pobjProgLangTypeEN.charEncodingId &&
    tzDataType.isString(pobjProgLangTypeEN.charEncodingId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[字符编码(charEncodingId)]的值:[${pobjProgLangTypeEN.charEncodingId}], 非法,应该为字符型(In 编程语言类型(ProgLangType))!(clsProgLangTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjProgLangTypeEN.isVisible &&
    undefined !== pobjProgLangTypeEN.isVisible &&
    tzDataType.isBoolean(pobjProgLangTypeEN.isVisible) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否显示(isVisible)]的值:[${pobjProgLangTypeEN.isVisible}], 非法,应该为布尔型(In 编程语言类型(ProgLangType))!(clsProgLangTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjProgLangTypeEN.orderNum &&
    undefined !== pobjProgLangTypeEN.orderNum &&
    tzDataType.isNumber(pobjProgLangTypeEN.orderNum) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[序号(orderNum)]的值:[${pobjProgLangTypeEN.orderNum}], 非法,应该为数值型(In 编程语言类型(ProgLangType))!(clsProgLangTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjProgLangTypeEN.updDate) == false &&
    undefined !== pobjProgLangTypeEN.updDate &&
    tzDataType.isString(pobjProgLangTypeEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjProgLangTypeEN.updDate}], 非法,应该为字符型(In 编程语言类型(ProgLangType))!(clsProgLangTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjProgLangTypeEN.updUserId) == false &&
    undefined !== pobjProgLangTypeEN.updUserId &&
    tzDataType.isString(pobjProgLangTypeEN.updUserId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改用户Id(updUserId)]的值:[${pobjProgLangTypeEN.updUserId}], 非法,应该为字符型(In 编程语言类型(ProgLangType))!(clsProgLangTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjProgLangTypeEN.memo) == false &&
    undefined !== pobjProgLangTypeEN.memo &&
    tzDataType.isString(pobjProgLangTypeEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[说明(memo)]的值:[${pobjProgLangTypeEN.memo}], 非法,应该为字符型(In 编程语言类型(ProgLangType))!(clsProgLangTypeBL:CheckProperty4Update)`,
    );
  }
  //检查主键是否为Null或者空!
  if (
    IsNullOrEmpty(pobjProgLangTypeEN.progLangTypeId) === true ||
    pobjProgLangTypeEN.progLangTypeId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000064)字段[编程语言类型Id]不能为空(In 编程语言类型)!(clsProgLangTypeBL:CheckProperty4Update)`,
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
export function ProgLangType_GetJSONStrByObj(pobjProgLangTypeEN: clsProgLangTypeEN): string {
  pobjProgLangTypeEN.sfUpdFldSetStr = pobjProgLangTypeEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjProgLangTypeEN);
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
export function ProgLangType_GetObjLstByJSONStr(strJSON: string): Array<clsProgLangTypeEN> {
  let arrProgLangTypeObjLst = new Array<clsProgLangTypeEN>();
  if (strJSON === '') {
    return arrProgLangTypeObjLst;
  }
  try {
    arrProgLangTypeObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrProgLangTypeObjLst;
  }
  return arrProgLangTypeObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrProgLangTypeObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function ProgLangType_GetObjLstByJSONObjLst(
  arrProgLangTypeObjLstS: Array<clsProgLangTypeEN>,
): Array<clsProgLangTypeEN> {
  const arrProgLangTypeObjLst = new Array<clsProgLangTypeEN>();
  for (const objInFor of arrProgLangTypeObjLstS) {
    const obj1 = ProgLangType_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrProgLangTypeObjLst.push(obj1);
  }
  return arrProgLangTypeObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function ProgLangType_GetObjByJSONStr(strJSON: string): clsProgLangTypeEN {
  let pobjProgLangTypeEN = new clsProgLangTypeEN();
  if (strJSON === '') {
    return pobjProgLangTypeEN;
  }
  try {
    pobjProgLangTypeEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjProgLangTypeEN;
  }
  return pobjProgLangTypeEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function ProgLangType_GetCombineCondition(objProgLangTypeCond: clsProgLangTypeEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objProgLangTypeCond.dicFldComparisonOp,
      clsProgLangTypeEN.con_ProgLangTypeId,
    ) == true
  ) {
    const strComparisonOpProgLangTypeId: string =
      objProgLangTypeCond.dicFldComparisonOp[clsProgLangTypeEN.con_ProgLangTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsProgLangTypeEN.con_ProgLangTypeId,
      objProgLangTypeCond.progLangTypeId,
      strComparisonOpProgLangTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objProgLangTypeCond.dicFldComparisonOp,
      clsProgLangTypeEN.con_ProgLangTypeName,
    ) == true
  ) {
    const strComparisonOpProgLangTypeName: string =
      objProgLangTypeCond.dicFldComparisonOp[clsProgLangTypeEN.con_ProgLangTypeName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsProgLangTypeEN.con_ProgLangTypeName,
      objProgLangTypeCond.progLangTypeName,
      strComparisonOpProgLangTypeName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objProgLangTypeCond.dicFldComparisonOp,
      clsProgLangTypeEN.con_ProgLangTypeSimName,
    ) == true
  ) {
    const strComparisonOpProgLangTypeSimName: string =
      objProgLangTypeCond.dicFldComparisonOp[clsProgLangTypeEN.con_ProgLangTypeSimName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsProgLangTypeEN.con_ProgLangTypeSimName,
      objProgLangTypeCond.progLangTypeSimName,
      strComparisonOpProgLangTypeSimName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objProgLangTypeCond.dicFldComparisonOp,
      clsProgLangTypeEN.con_ProgLangTypeENName,
    ) == true
  ) {
    const strComparisonOpProgLangTypeENName: string =
      objProgLangTypeCond.dicFldComparisonOp[clsProgLangTypeEN.con_ProgLangTypeENName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsProgLangTypeEN.con_ProgLangTypeENName,
      objProgLangTypeCond.progLangTypeENName,
      strComparisonOpProgLangTypeENName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objProgLangTypeCond.dicFldComparisonOp,
      clsProgLangTypeEN.con_CharEncodingId,
    ) == true
  ) {
    const strComparisonOpCharEncodingId: string =
      objProgLangTypeCond.dicFldComparisonOp[clsProgLangTypeEN.con_CharEncodingId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsProgLangTypeEN.con_CharEncodingId,
      objProgLangTypeCond.charEncodingId,
      strComparisonOpCharEncodingId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objProgLangTypeCond.dicFldComparisonOp,
      clsProgLangTypeEN.con_IsVisible,
    ) == true
  ) {
    if (objProgLangTypeCond.isVisible == true) {
      strWhereCond += Format(" And {0} = '1'", clsProgLangTypeEN.con_IsVisible);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsProgLangTypeEN.con_IsVisible);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objProgLangTypeCond.dicFldComparisonOp,
      clsProgLangTypeEN.con_OrderNum,
    ) == true
  ) {
    const strComparisonOpOrderNum: string =
      objProgLangTypeCond.dicFldComparisonOp[clsProgLangTypeEN.con_OrderNum];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsProgLangTypeEN.con_OrderNum,
      objProgLangTypeCond.orderNum,
      strComparisonOpOrderNum,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objProgLangTypeCond.dicFldComparisonOp,
      clsProgLangTypeEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objProgLangTypeCond.dicFldComparisonOp[clsProgLangTypeEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsProgLangTypeEN.con_UpdDate,
      objProgLangTypeCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objProgLangTypeCond.dicFldComparisonOp,
      clsProgLangTypeEN.con_UpdUserId,
    ) == true
  ) {
    const strComparisonOpUpdUserId: string =
      objProgLangTypeCond.dicFldComparisonOp[clsProgLangTypeEN.con_UpdUserId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsProgLangTypeEN.con_UpdUserId,
      objProgLangTypeCond.updUserId,
      strComparisonOpUpdUserId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objProgLangTypeCond.dicFldComparisonOp,
      clsProgLangTypeEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objProgLangTypeCond.dicFldComparisonOp[clsProgLangTypeEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsProgLangTypeEN.con_Memo,
      objProgLangTypeCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objProgLangTypeENS:源对象
 * @param objProgLangTypeENT:目标对象
 */
export function ProgLangType_GetObjFromJsonObj(
  objProgLangTypeENS: clsProgLangTypeEN,
): clsProgLangTypeEN {
  const objProgLangTypeENT: clsProgLangTypeEN = new clsProgLangTypeEN();
  ObjectAssign(objProgLangTypeENT, objProgLangTypeENS);
  return objProgLangTypeENT;
}
