/**
 * 类名:clsGCKeyIdGetModeWApi
 * 表名:GCKeyIdGetMode(00050562)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/14 11:52:40
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 应用类型:Vue应用InCore-TS(30)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:生成代码(GeneCode)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * GC关键字获取方式(GCKeyIdGetMode)
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
import { gCKeyIdGetModeCache, isFuncMapCache } from '@/views/GeneCode/GCKeyIdGetModeVueShare';
import { clsGCKeyIdGetModeENEx } from '@/ts/L0Entity/GeneCode/clsGCKeyIdGetModeENEx';
import { clsGCKeyIdGetModeEN } from '@/ts/L0Entity/GeneCode/clsGCKeyIdGetModeEN';
import { AddRecordResult } from '@/ts/PubFun/AddRecordResult';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';

export const gCKeyIdGetMode_Controller = 'GCKeyIdGetModeApi';
export const gCKeyIdGetMode_ConstructorName = 'gCKeyIdGetMode';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strKeyIdGetModeId:关键字
 * @returns 对象
 **/
export async function GCKeyIdGetMode_GetObjByKeyIdGetModeIdAsync(
  strKeyIdGetModeId: string,
): Promise<clsGCKeyIdGetModeEN | null> {
  const strThisFuncName = 'GetObjByKeyIdGetModeIdAsync';

  if (IsNullOrEmpty(strKeyIdGetModeId) == true) {
    const strMsg = Format(
      '参数:[strKeyIdGetModeId]不能为空!(In clsGCKeyIdGetModeWApi.GetObjByKeyIdGetModeIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strKeyIdGetModeId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strKeyIdGetModeId]的长度:[{0}]不正确!(clsGCKeyIdGetModeWApi.GetObjByKeyIdGetModeIdAsync)',
      strKeyIdGetModeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByKeyIdGetModeId';
  const strUrl = GetWebApiUrl(gCKeyIdGetMode_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strKeyIdGetModeId,
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
      const objGCKeyIdGetMode = GCKeyIdGetMode_GetObjFromJsonObj(returnObj);
      return objGCKeyIdGetMode;
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
        gCKeyIdGetMode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCKeyIdGetMode_ConstructorName,
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
 * @param strKeyIdGetModeId:所给的关键字
 * @returns 对象
 */
export async function GCKeyIdGetMode_GetObjByKeyIdGetModeIdlocalStorage(strKeyIdGetModeId: string) {
  const strThisFuncName = 'GetObjByKeyIdGetModeIdlocalStorage';

  if (IsNullOrEmpty(strKeyIdGetModeId) == true) {
    const strMsg = Format(
      '参数:[strKeyIdGetModeId]不能为空!(In clsGCKeyIdGetModeWApi.GetObjByKeyIdGetModeIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strKeyIdGetModeId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strKeyIdGetModeId]的长度:[{0}]不正确!(clsGCKeyIdGetModeWApi.GetObjByKeyIdGetModeIdlocalStorage)',
      strKeyIdGetModeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsGCKeyIdGetModeEN._CurrTabName, strKeyIdGetModeId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objGCKeyIdGetModeCache: clsGCKeyIdGetModeEN = JSON.parse(strTempObj);
    return objGCKeyIdGetModeCache;
  }
  try {
    const objGCKeyIdGetMode = await GCKeyIdGetMode_GetObjByKeyIdGetModeIdAsync(strKeyIdGetModeId);
    if (objGCKeyIdGetMode != null) {
      localStorage.setItem(strKey, JSON.stringify(objGCKeyIdGetMode));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objGCKeyIdGetMode;
    }
    return objGCKeyIdGetMode;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strKeyIdGetModeId,
      gCKeyIdGetMode_ConstructorName,
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
 * @param strKeyIdGetModeId:所给的关键字
 * @returns 对象
 */
export async function GCKeyIdGetMode_GetObjByKeyIdGetModeIdCache(
  strKeyIdGetModeId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByKeyIdGetModeIdCache';

  if (IsNullOrEmpty(strKeyIdGetModeId) == true) {
    const strMsg = Format(
      '参数:[strKeyIdGetModeId]不能为空!(In clsGCKeyIdGetModeWApi.GetObjByKeyIdGetModeIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strKeyIdGetModeId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strKeyIdGetModeId]的长度:[{0}]不正确!(clsGCKeyIdGetModeWApi.GetObjByKeyIdGetModeIdCache)',
      strKeyIdGetModeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrGCKeyIdGetModeObjLstCache = await GCKeyIdGetMode_GetObjLstCache();
  try {
    const arrGCKeyIdGetModeSel = arrGCKeyIdGetModeObjLstCache.filter(
      (x) => x.keyIdGetModeId == strKeyIdGetModeId,
    );
    let objGCKeyIdGetMode: clsGCKeyIdGetModeEN;
    if (arrGCKeyIdGetModeSel.length > 0) {
      objGCKeyIdGetMode = arrGCKeyIdGetModeSel[0];
      return objGCKeyIdGetMode;
    } else {
      if (bolTryAsyncOnce == true) {
        const objGCKeyIdGetModeConst = await GCKeyIdGetMode_GetObjByKeyIdGetModeIdAsync(
          strKeyIdGetModeId,
        );
        if (objGCKeyIdGetModeConst != null) {
          GCKeyIdGetMode_ReFreshThisCache();
          return objGCKeyIdGetModeConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strKeyIdGetModeId,
      gCKeyIdGetMode_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objGCKeyIdGetMode:所给的对象
 * @returns 对象
 */
export async function GCKeyIdGetMode_UpdateObjInLstCache(objGCKeyIdGetMode: clsGCKeyIdGetModeEN) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrGCKeyIdGetModeObjLstCache = await GCKeyIdGetMode_GetObjLstCache();
    const obj = arrGCKeyIdGetModeObjLstCache.find(
      (x) => x.keyIdGetModeName == objGCKeyIdGetMode.keyIdGetModeName,
    );
    if (obj != null) {
      objGCKeyIdGetMode.keyIdGetModeId = obj.keyIdGetModeId;
      ObjectAssign(obj, objGCKeyIdGetMode);
    } else {
      arrGCKeyIdGetModeObjLstCache.push(objGCKeyIdGetMode);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      gCKeyIdGetMode_ConstructorName,
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
export function GCKeyIdGetMode_SortFunDefa(a: clsGCKeyIdGetModeEN, b: clsGCKeyIdGetModeEN): number {
  return a.keyIdGetModeId.localeCompare(b.keyIdGetModeId);
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
export function GCKeyIdGetMode_SortFunDefa2Fld(
  a: clsGCKeyIdGetModeEN,
  b: clsGCKeyIdGetModeEN,
): number {
  if (a.keyIdGetModeName == b.keyIdGetModeName)
    return a.keyIdGetModeENName.localeCompare(b.keyIdGetModeENName);
  else return a.keyIdGetModeName.localeCompare(b.keyIdGetModeName);
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
export function GCKeyIdGetMode_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsGCKeyIdGetModeEN.con_KeyIdGetModeId:
        return (a: clsGCKeyIdGetModeEN, b: clsGCKeyIdGetModeEN) => {
          return a.keyIdGetModeId.localeCompare(b.keyIdGetModeId);
        };
      case clsGCKeyIdGetModeEN.con_KeyIdGetModeName:
        return (a: clsGCKeyIdGetModeEN, b: clsGCKeyIdGetModeEN) => {
          return a.keyIdGetModeName.localeCompare(b.keyIdGetModeName);
        };
      case clsGCKeyIdGetModeEN.con_KeyIdGetModeENName:
        return (a: clsGCKeyIdGetModeEN, b: clsGCKeyIdGetModeEN) => {
          return a.keyIdGetModeENName.localeCompare(b.keyIdGetModeENName);
        };
      case clsGCKeyIdGetModeEN.con_UpdDate:
        return (a: clsGCKeyIdGetModeEN, b: clsGCKeyIdGetModeEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsGCKeyIdGetModeEN.con_UpdUser:
        return (a: clsGCKeyIdGetModeEN, b: clsGCKeyIdGetModeEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsGCKeyIdGetModeEN.con_Memo:
        return (a: clsGCKeyIdGetModeEN, b: clsGCKeyIdGetModeEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[GCKeyIdGetMode]中不存在!(in ${gCKeyIdGetMode_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsGCKeyIdGetModeEN.con_KeyIdGetModeId:
        return (a: clsGCKeyIdGetModeEN, b: clsGCKeyIdGetModeEN) => {
          return b.keyIdGetModeId.localeCompare(a.keyIdGetModeId);
        };
      case clsGCKeyIdGetModeEN.con_KeyIdGetModeName:
        return (a: clsGCKeyIdGetModeEN, b: clsGCKeyIdGetModeEN) => {
          return b.keyIdGetModeName.localeCompare(a.keyIdGetModeName);
        };
      case clsGCKeyIdGetModeEN.con_KeyIdGetModeENName:
        return (a: clsGCKeyIdGetModeEN, b: clsGCKeyIdGetModeEN) => {
          return b.keyIdGetModeENName.localeCompare(a.keyIdGetModeENName);
        };
      case clsGCKeyIdGetModeEN.con_UpdDate:
        return (a: clsGCKeyIdGetModeEN, b: clsGCKeyIdGetModeEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsGCKeyIdGetModeEN.con_UpdUser:
        return (a: clsGCKeyIdGetModeEN, b: clsGCKeyIdGetModeEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsGCKeyIdGetModeEN.con_Memo:
        return (a: clsGCKeyIdGetModeEN, b: clsGCKeyIdGetModeEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[GCKeyIdGetMode]中不存在!(in ${gCKeyIdGetMode_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strKeyIdGetModeId:所给的关键字
 * @returns 对象
 */
export async function GCKeyIdGetMode_GetNameByKeyIdGetModeIdCache(strKeyIdGetModeId: string) {
  if (IsNullOrEmpty(strKeyIdGetModeId) == true) {
    const strMsg = Format(
      '参数:[strKeyIdGetModeId]不能为空!(In clsGCKeyIdGetModeWApi.GetNameByKeyIdGetModeIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strKeyIdGetModeId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strKeyIdGetModeId]的长度:[{0}]不正确!(clsGCKeyIdGetModeWApi.GetNameByKeyIdGetModeIdCache)',
      strKeyIdGetModeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrGCKeyIdGetModeObjLstCache = await GCKeyIdGetMode_GetObjLstCache();
  if (arrGCKeyIdGetModeObjLstCache == null) return '';
  try {
    const arrGCKeyIdGetModeSel = arrGCKeyIdGetModeObjLstCache.filter(
      (x) => x.keyIdGetModeId == strKeyIdGetModeId,
    );
    let objGCKeyIdGetMode: clsGCKeyIdGetModeEN;
    if (arrGCKeyIdGetModeSel.length > 0) {
      objGCKeyIdGetMode = arrGCKeyIdGetModeSel[0];
      return objGCKeyIdGetMode.keyIdGetModeName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strKeyIdGetModeId,
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
export async function GCKeyIdGetMode_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsGCKeyIdGetModeEN.con_KeyIdGetModeId:
      return (obj: clsGCKeyIdGetModeEN) => {
        return obj.keyIdGetModeId === value;
      };
    case clsGCKeyIdGetModeEN.con_KeyIdGetModeName:
      return (obj: clsGCKeyIdGetModeEN) => {
        return obj.keyIdGetModeName === value;
      };
    case clsGCKeyIdGetModeEN.con_KeyIdGetModeENName:
      return (obj: clsGCKeyIdGetModeEN) => {
        return obj.keyIdGetModeENName === value;
      };
    case clsGCKeyIdGetModeEN.con_UpdDate:
      return (obj: clsGCKeyIdGetModeEN) => {
        return obj.updDate === value;
      };
    case clsGCKeyIdGetModeEN.con_UpdUser:
      return (obj: clsGCKeyIdGetModeEN) => {
        return obj.updUser === value;
      };
    case clsGCKeyIdGetModeEN.con_Memo:
      return (obj: clsGCKeyIdGetModeEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[GCKeyIdGetMode]中不存在!(in ${gCKeyIdGetMode_ConstructorName}.${strThisFuncName})`;
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
export async function GCKeyIdGetMode_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsGCKeyIdGetModeEN.con_KeyIdGetModeId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsGCKeyIdGetModeEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsGCKeyIdGetModeEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strKeyIdGetModeId = strInValue;
  if (IsNullOrEmpty(strKeyIdGetModeId) == true) {
    return '';
  }
  const objGCKeyIdGetMode = await GCKeyIdGetMode_GetObjByKeyIdGetModeIdCache(strKeyIdGetModeId);
  if (objGCKeyIdGetMode == null) return '';
  if (objGCKeyIdGetMode.GetFldValue(strOutFldName) == null) return '';
  return objGCKeyIdGetMode.GetFldValue(strOutFldName).toString();
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
export async function GCKeyIdGetMode_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsGCKeyIdGetModeEN.con_KeyIdGetModeId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrGCKeyIdGetMode = await GCKeyIdGetMode_GetObjLstCache();
  if (arrGCKeyIdGetMode == null) return [];
  let arrGCKeyIdGetModeSel = arrGCKeyIdGetMode;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrGCKeyIdGetModeSel = arrGCKeyIdGetModeSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrGCKeyIdGetModeSel = arrGCKeyIdGetModeSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrGCKeyIdGetModeSel = arrGCKeyIdGetModeSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrGCKeyIdGetModeSel = arrGCKeyIdGetModeSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrGCKeyIdGetModeSel = arrGCKeyIdGetModeSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrGCKeyIdGetModeSel = arrGCKeyIdGetModeSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrGCKeyIdGetModeSel = arrGCKeyIdGetModeSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrGCKeyIdGetModeSel = arrGCKeyIdGetModeSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrGCKeyIdGetModeSel = arrGCKeyIdGetModeSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrGCKeyIdGetModeSel = arrGCKeyIdGetModeSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrGCKeyIdGetModeSel.length == 0) return [];
  return arrGCKeyIdGetModeSel.map((x) => x.keyIdGetModeId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function GCKeyIdGetMode_GetFldValueAsync(
  strFldName: string,
  strWhereCond: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetFldValueAsync';
  const strAction = 'GetFldValue';
  const strUrl = GetWebApiUrl(gCKeyIdGetMode_Controller, strAction);

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
        gCKeyIdGetMode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCKeyIdGetMode_ConstructorName,
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
export async function GCKeyIdGetMode_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(gCKeyIdGetMode_Controller, strAction);

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
        gCKeyIdGetMode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCKeyIdGetMode_ConstructorName,
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
export async function GCKeyIdGetMode_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(gCKeyIdGetMode_Controller, strAction);

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
        gCKeyIdGetMode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCKeyIdGetMode_ConstructorName,
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
export async function GCKeyIdGetMode_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsGCKeyIdGetModeEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(gCKeyIdGetMode_Controller, strAction);

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
      const objGCKeyIdGetMode = GCKeyIdGetMode_GetObjFromJsonObj(returnObj);
      return objGCKeyIdGetMode;
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
        gCKeyIdGetMode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCKeyIdGetMode_ConstructorName,
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
export async function GCKeyIdGetMode_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsGCKeyIdGetModeEN._CurrTabName;
  if (IsNullOrEmpty(clsGCKeyIdGetModeEN.WhereFormat) == false) {
    strWhereCond = clsGCKeyIdGetModeEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsGCKeyIdGetModeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsGCKeyIdGetModeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrGCKeyIdGetModeExObjLstCache: Array<clsGCKeyIdGetModeEN> = CacheHelper.Get(strKey);
    const arrGCKeyIdGetModeObjLstT = GCKeyIdGetMode_GetObjLstByJSONObjLst(
      arrGCKeyIdGetModeExObjLstCache,
    );
    return arrGCKeyIdGetModeObjLstT;
  }
  try {
    const arrGCKeyIdGetModeExObjLst = await GCKeyIdGetMode_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrGCKeyIdGetModeExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrGCKeyIdGetModeExObjLst.length,
    );
    console.log(strInfo);
    return arrGCKeyIdGetModeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      gCKeyIdGetMode_ConstructorName,
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
export async function GCKeyIdGetMode_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsGCKeyIdGetModeEN._CurrTabName;
  if (IsNullOrEmpty(clsGCKeyIdGetModeEN.WhereFormat) == false) {
    strWhereCond = clsGCKeyIdGetModeEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsGCKeyIdGetModeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsGCKeyIdGetModeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrGCKeyIdGetModeExObjLstCache: Array<clsGCKeyIdGetModeEN> = JSON.parse(strTempObjLst);
    const arrGCKeyIdGetModeObjLstT = GCKeyIdGetMode_GetObjLstByJSONObjLst(
      arrGCKeyIdGetModeExObjLstCache,
    );
    return arrGCKeyIdGetModeObjLstT;
  }
  try {
    const arrGCKeyIdGetModeExObjLst = await GCKeyIdGetMode_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrGCKeyIdGetModeExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrGCKeyIdGetModeExObjLst.length,
    );
    console.log(strInfo);
    return arrGCKeyIdGetModeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      gCKeyIdGetMode_ConstructorName,
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
export async function GCKeyIdGetMode_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsGCKeyIdGetModeEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrGCKeyIdGetModeObjLstCache: Array<clsGCKeyIdGetModeEN> = JSON.parse(strTempObjLst);
    return arrGCKeyIdGetModeObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function GCKeyIdGetMode_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsGCKeyIdGetModeEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(gCKeyIdGetMode_Controller, strAction);

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
          gCKeyIdGetMode_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = GCKeyIdGetMode_GetObjLstByJSONObjLst(returnObjLst);
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
        gCKeyIdGetMode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCKeyIdGetMode_ConstructorName,
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
export async function GCKeyIdGetMode_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsGCKeyIdGetModeEN._CurrTabName;
  if (IsNullOrEmpty(clsGCKeyIdGetModeEN.WhereFormat) == false) {
    strWhereCond = clsGCKeyIdGetModeEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsGCKeyIdGetModeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsGCKeyIdGetModeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrGCKeyIdGetModeExObjLstCache: Array<clsGCKeyIdGetModeEN> = JSON.parse(strTempObjLst);
    const arrGCKeyIdGetModeObjLstT = GCKeyIdGetMode_GetObjLstByJSONObjLst(
      arrGCKeyIdGetModeExObjLstCache,
    );
    return arrGCKeyIdGetModeObjLstT;
  }
  try {
    const arrGCKeyIdGetModeExObjLst = await GCKeyIdGetMode_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrGCKeyIdGetModeExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrGCKeyIdGetModeExObjLst.length,
    );
    console.log(strInfo);
    return arrGCKeyIdGetModeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      gCKeyIdGetMode_ConstructorName,
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
export async function GCKeyIdGetMode_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsGCKeyIdGetModeEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrGCKeyIdGetModeObjLstCache: Array<clsGCKeyIdGetModeEN> = JSON.parse(strTempObjLst);
    return arrGCKeyIdGetModeObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function GCKeyIdGetMode_GetObjLstCache(): Promise<Array<clsGCKeyIdGetModeEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrGCKeyIdGetModeObjLstCache;
  switch (clsGCKeyIdGetModeEN.CacheModeId) {
    case '04': //sessionStorage
      arrGCKeyIdGetModeObjLstCache = await GCKeyIdGetMode_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrGCKeyIdGetModeObjLstCache = await GCKeyIdGetMode_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrGCKeyIdGetModeObjLstCache = await GCKeyIdGetMode_GetObjLstClientCache();
      break;
    default:
      arrGCKeyIdGetModeObjLstCache = await GCKeyIdGetMode_GetObjLstClientCache();
      break;
  }
  return arrGCKeyIdGetModeObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function GCKeyIdGetMode_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrGCKeyIdGetModeObjLstCache;
  switch (clsGCKeyIdGetModeEN.CacheModeId) {
    case '04': //sessionStorage
      arrGCKeyIdGetModeObjLstCache = await GCKeyIdGetMode_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrGCKeyIdGetModeObjLstCache = await GCKeyIdGetMode_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrGCKeyIdGetModeObjLstCache = null;
      break;
    default:
      arrGCKeyIdGetModeObjLstCache = null;
      break;
  }
  return arrGCKeyIdGetModeObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrKeyIdGetModeIdCond:条件对象
 * @returns 对象列表子集
 */
export async function GCKeyIdGetMode_GetSubObjLstCache(objGCKeyIdGetModeCond: ConditionCollection) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrGCKeyIdGetModeObjLstCache = await GCKeyIdGetMode_GetObjLstCache();
  let arrGCKeyIdGetModeSel = arrGCKeyIdGetModeObjLstCache;
  if (objGCKeyIdGetModeCond.GetConditions().length == 0) return arrGCKeyIdGetModeSel;
  try {
    //console.log(sstrKeys);
    for (const objCondition of objGCKeyIdGetModeCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrGCKeyIdGetModeSel = arrGCKeyIdGetModeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrGCKeyIdGetModeSel = arrGCKeyIdGetModeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrGCKeyIdGetModeSel = arrGCKeyIdGetModeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrGCKeyIdGetModeSel = arrGCKeyIdGetModeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrGCKeyIdGetModeSel = arrGCKeyIdGetModeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrGCKeyIdGetModeSel = arrGCKeyIdGetModeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrGCKeyIdGetModeSel = arrGCKeyIdGetModeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrGCKeyIdGetModeSel = arrGCKeyIdGetModeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrGCKeyIdGetModeSel = arrGCKeyIdGetModeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrGCKeyIdGetModeSel = arrGCKeyIdGetModeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrGCKeyIdGetModeSel = arrGCKeyIdGetModeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrGCKeyIdGetModeSel = arrGCKeyIdGetModeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrGCKeyIdGetModeSel = arrGCKeyIdGetModeSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrGCKeyIdGetModeSel = arrGCKeyIdGetModeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrGCKeyIdGetModeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objGCKeyIdGetModeCond),
      gCKeyIdGetMode_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsGCKeyIdGetModeEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrKeyIdGetModeId:关键字列表
 * @returns 对象列表
 **/
export async function GCKeyIdGetMode_GetObjLstByKeyIdGetModeIdLstAsync(
  arrKeyIdGetModeId: Array<string>,
): Promise<Array<clsGCKeyIdGetModeEN>> {
  const strThisFuncName = 'GetObjLstByKeyIdGetModeIdLstAsync';
  const strAction = 'GetObjLstByKeyIdGetModeIdLst';
  const strUrl = GetWebApiUrl(gCKeyIdGetMode_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrKeyIdGetModeId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          gCKeyIdGetMode_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = GCKeyIdGetMode_GetObjLstByJSONObjLst(returnObjLst);
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
        gCKeyIdGetMode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCKeyIdGetMode_ConstructorName,
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
 * @param arrstrKeyIdGetModeIdLst:关键字列表
 * @returns 对象列表
 */
export async function GCKeyIdGetMode_GetObjLstByKeyIdGetModeIdLstCache(
  arrKeyIdGetModeIdLst: Array<string>,
) {
  const strThisFuncName = 'GetObjLstByKeyIdGetModeIdLstCache';
  try {
    const arrGCKeyIdGetModeObjLstCache = await GCKeyIdGetMode_GetObjLstCache();
    const arrGCKeyIdGetModeSel = arrGCKeyIdGetModeObjLstCache.filter(
      (x) => arrKeyIdGetModeIdLst.indexOf(x.keyIdGetModeId) > -1,
    );
    return arrGCKeyIdGetModeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrKeyIdGetModeIdLst.join(','),
      gCKeyIdGetMode_ConstructorName,
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
export async function GCKeyIdGetMode_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsGCKeyIdGetModeEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(gCKeyIdGetMode_Controller, strAction);

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
          gCKeyIdGetMode_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = GCKeyIdGetMode_GetObjLstByJSONObjLst(returnObjLst);
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
        gCKeyIdGetMode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCKeyIdGetMode_ConstructorName,
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
export async function GCKeyIdGetMode_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsGCKeyIdGetModeEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(gCKeyIdGetMode_Controller, strAction);

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
          gCKeyIdGetMode_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = GCKeyIdGetMode_GetObjLstByJSONObjLst(returnObjLst);
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
        gCKeyIdGetMode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCKeyIdGetMode_ConstructorName,
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
export async function GCKeyIdGetMode_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsGCKeyIdGetModeEN>();
  const arrGCKeyIdGetModeObjLstCache = await GCKeyIdGetMode_GetObjLstCache();
  if (arrGCKeyIdGetModeObjLstCache.length == 0) return arrGCKeyIdGetModeObjLstCache;
  let arrGCKeyIdGetModeSel = arrGCKeyIdGetModeObjLstCache;
  const objGCKeyIdGetModeCond = objPagerPara.conditionCollection;
  if (objGCKeyIdGetModeCond == null) {
    const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return new Array<clsGCKeyIdGetModeEN>();
  }
  //console.log("clsGCKeyIdGetModeWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    for (const objCondition of objGCKeyIdGetModeCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrGCKeyIdGetModeSel = arrGCKeyIdGetModeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrGCKeyIdGetModeSel = arrGCKeyIdGetModeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrGCKeyIdGetModeSel = arrGCKeyIdGetModeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrGCKeyIdGetModeSel = arrGCKeyIdGetModeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrGCKeyIdGetModeSel = arrGCKeyIdGetModeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrGCKeyIdGetModeSel = arrGCKeyIdGetModeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrGCKeyIdGetModeSel = arrGCKeyIdGetModeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrGCKeyIdGetModeSel = arrGCKeyIdGetModeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrGCKeyIdGetModeSel = arrGCKeyIdGetModeSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrGCKeyIdGetModeSel = arrGCKeyIdGetModeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrGCKeyIdGetModeSel = arrGCKeyIdGetModeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrGCKeyIdGetModeSel = arrGCKeyIdGetModeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrGCKeyIdGetModeSel = arrGCKeyIdGetModeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrGCKeyIdGetModeSel = arrGCKeyIdGetModeSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrGCKeyIdGetModeSel = arrGCKeyIdGetModeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrGCKeyIdGetModeSel.length == 0) return arrGCKeyIdGetModeSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrGCKeyIdGetModeSel = arrGCKeyIdGetModeSel.sort(
        GCKeyIdGetMode_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrGCKeyIdGetModeSel = arrGCKeyIdGetModeSel.sort(objPagerPara.sortFun);
    }
    arrGCKeyIdGetModeSel = arrGCKeyIdGetModeSel.slice(intStart, intEnd);
    return arrGCKeyIdGetModeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      gCKeyIdGetMode_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsGCKeyIdGetModeEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function GCKeyIdGetMode_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsGCKeyIdGetModeEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsGCKeyIdGetModeEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(gCKeyIdGetMode_Controller, strAction);

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
          gCKeyIdGetMode_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = GCKeyIdGetMode_GetObjLstByJSONObjLst(returnObjLst);
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
        gCKeyIdGetMode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCKeyIdGetMode_ConstructorName,
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
 * @param strKeyIdGetModeId:关键字
 * @returns 获取删除的结果
 **/
export async function GCKeyIdGetMode_DelRecordAsync(strKeyIdGetModeId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(gCKeyIdGetMode_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strKeyIdGetModeId);

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
        gCKeyIdGetMode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCKeyIdGetMode_ConstructorName,
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
 * @param arrKeyIdGetModeId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function GCKeyIdGetMode_DelGCKeyIdGetModesAsync(
  arrKeyIdGetModeId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelGCKeyIdGetModesAsync';
  const strAction = 'DelGCKeyIdGetModes';
  const strUrl = GetWebApiUrl(gCKeyIdGetMode_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrKeyIdGetModeId, config);
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
        gCKeyIdGetMode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCKeyIdGetMode_ConstructorName,
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
export async function GCKeyIdGetMode_GetObjExLstByPagerCache(
  objPagerPara: stuPagerPara,
): Promise<Array<clsGCKeyIdGetModeENEx>> {
  const strThisFuncName = 'GetObjLstByPagerCache';
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  const isFuncMapKey = `${objSortInfo.SortFld}`;
  const arrGCKeyIdGetModeObjLst = await GCKeyIdGetMode_GetObjLstCache();
  //从缓存中获取对象，如果缓存中不存在就扩展复制
  const arrNewObj = new Array<clsGCKeyIdGetModeENEx>();
  const arrGCKeyIdGetModeExObjLst = arrGCKeyIdGetModeObjLst.map((obj) => {
    const cacheKey = `${obj.keyIdGetModeId}`;
    if (gCKeyIdGetModeCache[cacheKey]) {
      const oldObj = gCKeyIdGetModeCache[cacheKey];
      return oldObj;
    } else {
      const newObj = GCKeyIdGetMode_CopyToEx(obj);
      arrNewObj.push(newObj);
      gCKeyIdGetModeCache[cacheKey] = newObj;
      return newObj;
    }
  });
  for (const newObj of arrNewObj) {
    for (const strFldName of Object.keys(isFuncMapCache)) {
      await GCKeyIdGetMode_FuncMapByFldName(strFldName, newObj);
    }
  }
  //检查关于当前扩展排序字段是否获取得值，如果没有获取过，就获取，并存缓存
  const bolIsFuncMap = isFuncMapCache[isFuncMapKey];
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsGCKeyIdGetModeEN.AttributeName.indexOf(objSortInfo.SortFld) == -1 &&
    (bolIsFuncMap == false || bolIsFuncMap == undefined)
  ) {
    for (const newObj of arrGCKeyIdGetModeExObjLst) {
      await GCKeyIdGetMode_FuncMapByFldName(objSortInfo.SortFld, newObj);
      const cacheKey = `${newObj.keyIdGetModeId}`;
      gCKeyIdGetModeCache[cacheKey] = newObj;
    }
    isFuncMapCache[isFuncMapKey] = true;
  }
  if (arrGCKeyIdGetModeExObjLst.length == 0) return arrGCKeyIdGetModeExObjLst;
  let arrGCKeyIdGetModeSel: Array<clsGCKeyIdGetModeENEx> = arrGCKeyIdGetModeExObjLst;
  const objGCKeyIdGetModeCond = objPagerPara.conditionCollection;
  if (objGCKeyIdGetModeCond == null) {
    const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return arrGCKeyIdGetModeExObjLst;
  }
  try {
    for (const objCondition of objGCKeyIdGetModeCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrGCKeyIdGetModeSel = arrGCKeyIdGetModeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrGCKeyIdGetModeSel = arrGCKeyIdGetModeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrGCKeyIdGetModeSel = arrGCKeyIdGetModeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrGCKeyIdGetModeSel = arrGCKeyIdGetModeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrGCKeyIdGetModeSel = arrGCKeyIdGetModeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrGCKeyIdGetModeSel = arrGCKeyIdGetModeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrGCKeyIdGetModeSel = arrGCKeyIdGetModeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrGCKeyIdGetModeSel = arrGCKeyIdGetModeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.split(',');
            arrGCKeyIdGetModeSel = arrGCKeyIdGetModeSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrGCKeyIdGetModeSel = arrGCKeyIdGetModeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrGCKeyIdGetModeSel = arrGCKeyIdGetModeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrGCKeyIdGetModeSel = arrGCKeyIdGetModeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrGCKeyIdGetModeSel = arrGCKeyIdGetModeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrGCKeyIdGetModeSel = arrGCKeyIdGetModeSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrGCKeyIdGetModeSel = arrGCKeyIdGetModeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrGCKeyIdGetModeSel.length == 0) return arrGCKeyIdGetModeSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      arrGCKeyIdGetModeSel = arrGCKeyIdGetModeSel.sort(
        GCKeyIdGetMode_SortFunByExKey(objSortInfo.SortFld, objSortInfo.SortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrGCKeyIdGetModeSel = arrGCKeyIdGetModeSel.sort(objPagerPara.sortFun);
    }
    arrGCKeyIdGetModeSel = arrGCKeyIdGetModeSel.slice(intStart, intEnd);
    return arrGCKeyIdGetModeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      gCKeyIdGetMode_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsGCKeyIdGetModeENEx>();
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CopyToEx)
 * @param objGCKeyIdGetModeENS:源对象
 * @returns 目标对象=>clsGCKeyIdGetModeEN:objGCKeyIdGetModeENT
 **/
export function GCKeyIdGetMode_CopyToEx(
  objGCKeyIdGetModeENS: clsGCKeyIdGetModeEN,
): clsGCKeyIdGetModeENEx {
  const strThisFuncName = GCKeyIdGetMode_CopyToEx.name;
  const objGCKeyIdGetModeENT = new clsGCKeyIdGetModeENEx();
  try {
    ObjectAssign(objGCKeyIdGetModeENT, objGCKeyIdGetModeENS);
    return objGCKeyIdGetModeENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001294)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      gCKeyIdGetMode_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objGCKeyIdGetModeENT;
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
export function GCKeyIdGetMode_FuncMapByFldName(
  strFldName: string,
  objGCKeyIdGetModeEx: clsGCKeyIdGetModeENEx,
) {
  const strThisFuncName = GCKeyIdGetMode_FuncMapByFldName.name;
  console.log(objGCKeyIdGetModeEx);
  strFldName = strFldName.replace('|Ex', '');
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsGCKeyIdGetModeEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
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
export function GCKeyIdGetMode_SortFunByExKey(strKey: string, AscOrDesc: string) {
  strKey = strKey.replace('|Ex', '');
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      default:
        return GCKeyIdGetMode_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      default:
        return GCKeyIdGetMode_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据条件删除记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelMultiRecordByCondAsync)
 * @returns 实际删除记录的个数
 **/
export async function GCKeyIdGetMode_DelGCKeyIdGetModesByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelGCKeyIdGetModesByCondAsync';
  const strAction = 'DelGCKeyIdGetModesByCond';
  const strUrl = GetWebApiUrl(gCKeyIdGetMode_Controller, strAction);

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
        gCKeyIdGetMode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCKeyIdGetMode_ConstructorName,
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
 * @param objGCKeyIdGetModeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function GCKeyIdGetMode_AddNewRecordAsync(
  objGCKeyIdGetModeEN: clsGCKeyIdGetModeEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objGCKeyIdGetModeEN);
  const strUrl = GetWebApiUrl(gCKeyIdGetMode_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objGCKeyIdGetModeEN, config);
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
        gCKeyIdGetMode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCKeyIdGetMode_ConstructorName,
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
 * @param objGCKeyIdGetModeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function GCKeyIdGetMode_AddNewRecordWithMaxIdAsync(
  objGCKeyIdGetModeEN: clsGCKeyIdGetModeEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(gCKeyIdGetMode_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objGCKeyIdGetModeEN, config);
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
        gCKeyIdGetMode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCKeyIdGetMode_ConstructorName,
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
export async function GCKeyIdGetMode_AddNewObjSave(
  objGCKeyIdGetModeEN: clsGCKeyIdGetModeEN,
): Promise<AddRecordResult> {
  const strThisFuncName = 'AddNewObjSave';
  try {
    GCKeyIdGetMode_CheckPropertyNew(objGCKeyIdGetModeEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${gCKeyIdGetMode_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    alert(strMsg);
    return { keyword: '', success: false }; //一定要有一个返回值,否则会出错!
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await GCKeyIdGetMode_CheckUniCond4Add(objGCKeyIdGetModeEN);
    if (bolIsExistCond == false) {
      return { keyword: '', success: false };
    }
    let returnBool = false;
    const returnKeyId = await GCKeyIdGetMode_AddNewRecordWithMaxIdAsync(objGCKeyIdGetModeEN);
    if (IsNullOrEmpty(returnKeyId) == false) {
      returnBool = true;
    }
    if (returnBool == true) {
      GCKeyIdGetMode_ReFreshCache();
    } else {
      const strInfo = `添加[GC关键字获取方式(GCKeyIdGetMode)]记录不成功!`;
      //显示信息框
      throw strInfo;
    }
    return { keyword: returnKeyId, success: returnBool }; //一定要有一个返回值,否则会出错!
  } catch (e) {
    const strMsg = `添加记录不成功,${e}.(in ${gCKeyIdGetMode_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export async function GCKeyIdGetMode_CheckUniCond4Add(
  objGCKeyIdGetModeEN: clsGCKeyIdGetModeEN,
): Promise<boolean> {
  const strUniquenessCondition = GCKeyIdGetMode_GetUniCondStr(objGCKeyIdGetModeEN);
  const bolIsExistCondition = await GCKeyIdGetMode_IsExistRecordAsync(strUniquenessCondition);
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
export async function GCKeyIdGetMode_CheckUniCond4Update(
  objGCKeyIdGetModeEN: clsGCKeyIdGetModeEN,
): Promise<boolean> {
  const strUniquenessCondition = GCKeyIdGetMode_GetUniCondStr4Update(objGCKeyIdGetModeEN);
  const bolIsExistCondition = await GCKeyIdGetMode_IsExistRecordAsync(strUniquenessCondition);
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
export async function GCKeyIdGetMode_UpdateObjSave(
  objGCKeyIdGetModeEN: clsGCKeyIdGetModeEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateObjSave';
  objGCKeyIdGetModeEN.sfUpdFldSetStr = objGCKeyIdGetModeEN.updFldString; //设置哪些字段被修改(脏字段)
  if (objGCKeyIdGetModeEN.keyIdGetModeId == '' || objGCKeyIdGetModeEN.keyIdGetModeId == undefined) {
    console.error('关键字不能为空!');
    throw '关键字不能为空!';
  }
  try {
    GCKeyIdGetMode_CheckProperty4Update(objGCKeyIdGetModeEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${gCKeyIdGetMode_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await GCKeyIdGetMode_CheckUniCond4Update(objGCKeyIdGetModeEN);
    if (bolIsExistCond == false) {
      return false;
    }
    const returnBool = await GCKeyIdGetMode_UpdateRecordAsync(objGCKeyIdGetModeEN);
    if (returnBool == true) {
      GCKeyIdGetMode_ReFreshCache();
    }
    return returnBool;
  } catch (e) {
    const strMsg = `修改记录不成功,${e}.(in ${gCKeyIdGetMode_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objGCKeyIdGetModeEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function GCKeyIdGetMode_AddNewRecordWithReturnKeyAsync(
  objGCKeyIdGetModeEN: clsGCKeyIdGetModeEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(gCKeyIdGetMode_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objGCKeyIdGetModeEN, config);
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
        gCKeyIdGetMode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCKeyIdGetMode_ConstructorName,
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
 * @param objGCKeyIdGetModeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function GCKeyIdGetMode_UpdateRecordAsync(
  objGCKeyIdGetModeEN: clsGCKeyIdGetModeEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objGCKeyIdGetModeEN.sfUpdFldSetStr === undefined ||
    objGCKeyIdGetModeEN.sfUpdFldSetStr === null ||
    objGCKeyIdGetModeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objGCKeyIdGetModeEN.keyIdGetModeId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(gCKeyIdGetMode_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objGCKeyIdGetModeEN, config);
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
        gCKeyIdGetMode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCKeyIdGetMode_ConstructorName,
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
 * @param objGCKeyIdGetModeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function GCKeyIdGetMode_EditRecordExAsync(
  objGCKeyIdGetModeEN: clsGCKeyIdGetModeEN,
): Promise<boolean> {
  const strThisFuncName = 'EditRecordExAsync';
  const strAction = 'EditRecordEx';
  if (
    objGCKeyIdGetModeEN.sfUpdFldSetStr === undefined ||
    objGCKeyIdGetModeEN.sfUpdFldSetStr === null ||
    objGCKeyIdGetModeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objGCKeyIdGetModeEN.keyIdGetModeId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(gCKeyIdGetMode_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objGCKeyIdGetModeEN, config);
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
        gCKeyIdGetMode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCKeyIdGetMode_ConstructorName,
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
 * @param objGCKeyIdGetModeEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function GCKeyIdGetMode_UpdateWithConditionAsync(
  objGCKeyIdGetModeEN: clsGCKeyIdGetModeEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objGCKeyIdGetModeEN.sfUpdFldSetStr === undefined ||
    objGCKeyIdGetModeEN.sfUpdFldSetStr === null ||
    objGCKeyIdGetModeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objGCKeyIdGetModeEN.keyIdGetModeId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(gCKeyIdGetMode_Controller, strAction);
  objGCKeyIdGetModeEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objGCKeyIdGetModeEN, config);
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
        gCKeyIdGetMode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCKeyIdGetMode_ConstructorName,
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
 * @param objstrKeyIdGetModeIdCond:条件对象
 * @returns 对象列表子集
 */
export async function GCKeyIdGetMode_IsExistRecordCache(
  objGCKeyIdGetModeCond: ConditionCollection,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrGCKeyIdGetModeObjLstCache = await GCKeyIdGetMode_GetObjLstCache();
  if (arrGCKeyIdGetModeObjLstCache == null) return false;
  let arrGCKeyIdGetModeSel = arrGCKeyIdGetModeObjLstCache;
  if (objGCKeyIdGetModeCond.GetConditions().length == 0)
    return arrGCKeyIdGetModeSel.length > 0 ? true : false;
  try {
    for (const objCondition of objGCKeyIdGetModeCond.GetConditions()) {
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
            arrGCKeyIdGetModeSel = arrGCKeyIdGetModeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrGCKeyIdGetModeSel = arrGCKeyIdGetModeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrGCKeyIdGetModeSel = arrGCKeyIdGetModeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrGCKeyIdGetModeSel = arrGCKeyIdGetModeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrGCKeyIdGetModeSel = arrGCKeyIdGetModeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrGCKeyIdGetModeSel = arrGCKeyIdGetModeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrGCKeyIdGetModeSel = arrGCKeyIdGetModeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrGCKeyIdGetModeSel = arrGCKeyIdGetModeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrGCKeyIdGetModeSel = arrGCKeyIdGetModeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrGCKeyIdGetModeSel = arrGCKeyIdGetModeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrGCKeyIdGetModeSel = arrGCKeyIdGetModeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrGCKeyIdGetModeSel = arrGCKeyIdGetModeSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrGCKeyIdGetModeSel = arrGCKeyIdGetModeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrGCKeyIdGetModeSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objGCKeyIdGetModeCond),
      gCKeyIdGetMode_ConstructorName,
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
export async function GCKeyIdGetMode_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(gCKeyIdGetMode_Controller, strAction);

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
        gCKeyIdGetMode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCKeyIdGetMode_ConstructorName,
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
 * @param strKeyIdGetModeId:所给的关键字
 * @returns 对象
 */
export async function GCKeyIdGetMode_IsExistCache(strKeyIdGetModeId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrGCKeyIdGetModeObjLstCache = await GCKeyIdGetMode_GetObjLstCache();
  if (arrGCKeyIdGetModeObjLstCache == null) return false;
  try {
    const arrGCKeyIdGetModeSel = arrGCKeyIdGetModeObjLstCache.filter(
      (x) => x.keyIdGetModeId == strKeyIdGetModeId,
    );
    if (arrGCKeyIdGetModeSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strKeyIdGetModeId,
      gCKeyIdGetMode_ConstructorName,
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
 * @param strKeyIdGetModeId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function GCKeyIdGetMode_IsExistAsync(strKeyIdGetModeId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(gCKeyIdGetMode_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strKeyIdGetModeId,
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
        gCKeyIdGetMode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCKeyIdGetMode_ConstructorName,
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
export async function GCKeyIdGetMode_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(gCKeyIdGetMode_Controller, strAction);

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
        gCKeyIdGetMode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCKeyIdGetMode_ConstructorName,
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
 * @param objGCKeyIdGetModeCond:条件对象
 * @returns 对象列表记录数
 */
export async function GCKeyIdGetMode_GetRecCountByCondCache(
  objGCKeyIdGetModeCond: ConditionCollection,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrGCKeyIdGetModeObjLstCache = await GCKeyIdGetMode_GetObjLstCache();
  if (arrGCKeyIdGetModeObjLstCache == null) return 0;
  let arrGCKeyIdGetModeSel = arrGCKeyIdGetModeObjLstCache;
  if (objGCKeyIdGetModeCond.GetConditions().length == 0) return arrGCKeyIdGetModeSel.length;
  try {
    for (const objCondition of objGCKeyIdGetModeCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrGCKeyIdGetModeSel = arrGCKeyIdGetModeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrGCKeyIdGetModeSel = arrGCKeyIdGetModeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrGCKeyIdGetModeSel = arrGCKeyIdGetModeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrGCKeyIdGetModeSel = arrGCKeyIdGetModeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrGCKeyIdGetModeSel = arrGCKeyIdGetModeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrGCKeyIdGetModeSel = arrGCKeyIdGetModeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrGCKeyIdGetModeSel = arrGCKeyIdGetModeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrGCKeyIdGetModeSel = arrGCKeyIdGetModeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrGCKeyIdGetModeSel = arrGCKeyIdGetModeSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrGCKeyIdGetModeSel = arrGCKeyIdGetModeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrGCKeyIdGetModeSel = arrGCKeyIdGetModeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrGCKeyIdGetModeSel = arrGCKeyIdGetModeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrGCKeyIdGetModeSel = arrGCKeyIdGetModeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrGCKeyIdGetModeSel = arrGCKeyIdGetModeSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrGCKeyIdGetModeSel = arrGCKeyIdGetModeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrGCKeyIdGetModeSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objGCKeyIdGetModeCond),
      gCKeyIdGetMode_ConstructorName,
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
export async function GCKeyIdGetMode_GetMaxStrIdAsync(): Promise<string> {
  const strThisFuncName = 'GetMaxStrIdAsync';
  const strAction = 'GetMaxStrId';
  const strUrl = GetWebApiUrl(gCKeyIdGetMode_Controller, strAction);

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
        gCKeyIdGetMode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCKeyIdGetMode_ConstructorName,
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
export async function GCKeyIdGetMode_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(gCKeyIdGetMode_Controller, strAction);

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
        gCKeyIdGetMode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCKeyIdGetMode_ConstructorName,
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
export function GCKeyIdGetMode_GetWebApiUrl(strController: string, strAction: string): string {
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
export function GCKeyIdGetMode_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功!');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clsGCKeyIdGetModeEN._CurrTabName;
  switch (clsGCKeyIdGetModeEN.CacheModeId) {
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
  clsGCKeyIdGetModeEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
}

/**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export function GCKeyIdGetMode_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsGCKeyIdGetModeEN._CurrTabName;
    switch (clsGCKeyIdGetModeEN.CacheModeId) {
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
    clsGCKeyIdGetModeEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export function GCKeyIdGetMode_GetLastRefreshTime(): string {
  if (clsGCKeyIdGetModeEN._RefreshTimeLst.length == 0) return '';
  return clsGCKeyIdGetModeEN._RefreshTimeLst[clsGCKeyIdGetModeEN._RefreshTimeLst.length - 1];
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export async function GCKeyIdGetMode_BindDdl_KeyIdGetModeIdInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
) {
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_KeyIdGetModeIdInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_KeyIdGetModeIdInDivCache");
  let arrObjLstSel = await GCKeyIdGetMode_GetObjLstCache();
  if (arrObjLstSel == null) return;
  arrObjLstSel = arrObjLstSel.sort((x, y) => x.keyIdGetModeName.localeCompare(y.keyIdGetModeName));
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsGCKeyIdGetModeEN.con_KeyIdGetModeId,
    clsGCKeyIdGetModeEN.con_KeyIdGetModeName,
    'GC关键字获取方式...',
  );
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export async function GCKeyIdGetMode_GetArrGCKeyIdGetMode() {
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_KeyIdGetModeIdInDivCache");
  const arrGCKeyIdGetMode = new Array<clsGCKeyIdGetModeEN>();
  let arrObjLstSel = await GCKeyIdGetMode_GetObjLstCache();
  if (arrObjLstSel == null) return null;
  arrObjLstSel = arrObjLstSel.sort((x, y) => {
    if (x.keyIdGetModeName === null && y.keyIdGetModeName === null) return 0;
    if (x.keyIdGetModeName === null) return 1;
    if (y.keyIdGetModeName === null) return -1;
    return x.keyIdGetModeName.localeCompare(y.keyIdGetModeName);
  });
  const obj0 = new clsGCKeyIdGetModeEN();
  obj0.keyIdGetModeId = '0';
  obj0.keyIdGetModeName = '选gC关键字获取方式...';
  arrGCKeyIdGetMode.push(obj0);
  arrObjLstSel.forEach((x) => arrGCKeyIdGetMode.push(x));
  return arrGCKeyIdGetMode;
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function GCKeyIdGetMode_CheckPropertyNew(pobjGCKeyIdGetModeEN: clsGCKeyIdGetModeEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjGCKeyIdGetModeEN.keyIdGetModeName) === true) {
    throw new Error(
      `(errid:Watl000411)字段[GC关键字获取方式名]不能为空(In GC关键字获取方式)!(clsGCKeyIdGetModeBL:CheckPropertyNew0)`,
    );
  }
  if (IsNullOrEmpty(pobjGCKeyIdGetModeEN.keyIdGetModeENName) === true) {
    throw new Error(
      `(errid:Watl000411)字段[GC关键字获取方式英文名]不能为空(In GC关键字获取方式)!(clsGCKeyIdGetModeBL:CheckPropertyNew0)`,
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjGCKeyIdGetModeEN.keyIdGetModeId) == false &&
    GetStrLen(pobjGCKeyIdGetModeEN.keyIdGetModeId) > 4
  ) {
    throw new Error(
      `(errid:Watl000413)字段[GC关键字获取方式Id(keyIdGetModeId)]的长度不能超过4(In GC关键字获取方式(GCKeyIdGetMode))!值:${pobjGCKeyIdGetModeEN.keyIdGetModeId}(clsGCKeyIdGetModeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCKeyIdGetModeEN.keyIdGetModeName) == false &&
    GetStrLen(pobjGCKeyIdGetModeEN.keyIdGetModeName) > 50
  ) {
    throw new Error(
      `(errid:Watl000413)字段[GC关键字获取方式名(keyIdGetModeName)]的长度不能超过50(In GC关键字获取方式(GCKeyIdGetMode))!值:${pobjGCKeyIdGetModeEN.keyIdGetModeName}(clsGCKeyIdGetModeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCKeyIdGetModeEN.keyIdGetModeENName) == false &&
    GetStrLen(pobjGCKeyIdGetModeEN.keyIdGetModeENName) > 50
  ) {
    throw new Error(
      `(errid:Watl000413)字段[GC关键字获取方式英文名(keyIdGetModeENName)]的长度不能超过50(In GC关键字获取方式(GCKeyIdGetMode))!值:${pobjGCKeyIdGetModeEN.keyIdGetModeENName}(clsGCKeyIdGetModeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCKeyIdGetModeEN.updDate) == false &&
    GetStrLen(pobjGCKeyIdGetModeEN.updDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In GC关键字获取方式(GCKeyIdGetMode))!值:${pobjGCKeyIdGetModeEN.updDate}(clsGCKeyIdGetModeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCKeyIdGetModeEN.updUser) == false &&
    GetStrLen(pobjGCKeyIdGetModeEN.updUser) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改者(updUser)]的长度不能超过20(In GC关键字获取方式(GCKeyIdGetMode))!值:${pobjGCKeyIdGetModeEN.updUser}(clsGCKeyIdGetModeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCKeyIdGetModeEN.memo) == false &&
    GetStrLen(pobjGCKeyIdGetModeEN.memo) > 1000
  ) {
    throw new Error(
      `(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In GC关键字获取方式(GCKeyIdGetMode))!值:${pobjGCKeyIdGetModeEN.memo}(clsGCKeyIdGetModeBL:CheckPropertyNew)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjGCKeyIdGetModeEN.keyIdGetModeId) == false &&
    undefined !== pobjGCKeyIdGetModeEN.keyIdGetModeId &&
    tzDataType.isString(pobjGCKeyIdGetModeEN.keyIdGetModeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[GC关键字获取方式Id(keyIdGetModeId)]的值:[${pobjGCKeyIdGetModeEN.keyIdGetModeId}], 非法,应该为字符型(In GC关键字获取方式(GCKeyIdGetMode))!(clsGCKeyIdGetModeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCKeyIdGetModeEN.keyIdGetModeName) == false &&
    undefined !== pobjGCKeyIdGetModeEN.keyIdGetModeName &&
    tzDataType.isString(pobjGCKeyIdGetModeEN.keyIdGetModeName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[GC关键字获取方式名(keyIdGetModeName)]的值:[${pobjGCKeyIdGetModeEN.keyIdGetModeName}], 非法,应该为字符型(In GC关键字获取方式(GCKeyIdGetMode))!(clsGCKeyIdGetModeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCKeyIdGetModeEN.keyIdGetModeENName) == false &&
    undefined !== pobjGCKeyIdGetModeEN.keyIdGetModeENName &&
    tzDataType.isString(pobjGCKeyIdGetModeEN.keyIdGetModeENName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[GC关键字获取方式英文名(keyIdGetModeENName)]的值:[${pobjGCKeyIdGetModeEN.keyIdGetModeENName}], 非法,应该为字符型(In GC关键字获取方式(GCKeyIdGetMode))!(clsGCKeyIdGetModeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCKeyIdGetModeEN.updDate) == false &&
    undefined !== pobjGCKeyIdGetModeEN.updDate &&
    tzDataType.isString(pobjGCKeyIdGetModeEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjGCKeyIdGetModeEN.updDate}], 非法,应该为字符型(In GC关键字获取方式(GCKeyIdGetMode))!(clsGCKeyIdGetModeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCKeyIdGetModeEN.updUser) == false &&
    undefined !== pobjGCKeyIdGetModeEN.updUser &&
    tzDataType.isString(pobjGCKeyIdGetModeEN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改者(updUser)]的值:[${pobjGCKeyIdGetModeEN.updUser}], 非法,应该为字符型(In GC关键字获取方式(GCKeyIdGetMode))!(clsGCKeyIdGetModeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCKeyIdGetModeEN.memo) == false &&
    undefined !== pobjGCKeyIdGetModeEN.memo &&
    tzDataType.isString(pobjGCKeyIdGetModeEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[说明(memo)]的值:[${pobjGCKeyIdGetModeEN.memo}], 非法,应该为字符型(In GC关键字获取方式(GCKeyIdGetMode))!(clsGCKeyIdGetModeBL:CheckPropertyNew0)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function GCKeyIdGetMode_CheckProperty4Update(pobjGCKeyIdGetModeEN: clsGCKeyIdGetModeEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjGCKeyIdGetModeEN.keyIdGetModeId) == false &&
    GetStrLen(pobjGCKeyIdGetModeEN.keyIdGetModeId) > 4
  ) {
    throw new Error(
      `(errid:Watl000416)字段[GC关键字获取方式Id(keyIdGetModeId)]的长度不能超过4(In GC关键字获取方式(GCKeyIdGetMode))!值:${pobjGCKeyIdGetModeEN.keyIdGetModeId}(clsGCKeyIdGetModeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCKeyIdGetModeEN.keyIdGetModeName) == false &&
    GetStrLen(pobjGCKeyIdGetModeEN.keyIdGetModeName) > 50
  ) {
    throw new Error(
      `(errid:Watl000416)字段[GC关键字获取方式名(keyIdGetModeName)]的长度不能超过50(In GC关键字获取方式(GCKeyIdGetMode))!值:${pobjGCKeyIdGetModeEN.keyIdGetModeName}(clsGCKeyIdGetModeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCKeyIdGetModeEN.keyIdGetModeENName) == false &&
    GetStrLen(pobjGCKeyIdGetModeEN.keyIdGetModeENName) > 50
  ) {
    throw new Error(
      `(errid:Watl000416)字段[GC关键字获取方式英文名(keyIdGetModeENName)]的长度不能超过50(In GC关键字获取方式(GCKeyIdGetMode))!值:${pobjGCKeyIdGetModeEN.keyIdGetModeENName}(clsGCKeyIdGetModeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCKeyIdGetModeEN.updDate) == false &&
    GetStrLen(pobjGCKeyIdGetModeEN.updDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In GC关键字获取方式(GCKeyIdGetMode))!值:${pobjGCKeyIdGetModeEN.updDate}(clsGCKeyIdGetModeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCKeyIdGetModeEN.updUser) == false &&
    GetStrLen(pobjGCKeyIdGetModeEN.updUser) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改者(updUser)]的长度不能超过20(In GC关键字获取方式(GCKeyIdGetMode))!值:${pobjGCKeyIdGetModeEN.updUser}(clsGCKeyIdGetModeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCKeyIdGetModeEN.memo) == false &&
    GetStrLen(pobjGCKeyIdGetModeEN.memo) > 1000
  ) {
    throw new Error(
      `(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In GC关键字获取方式(GCKeyIdGetMode))!值:${pobjGCKeyIdGetModeEN.memo}(clsGCKeyIdGetModeBL:CheckProperty4Update)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjGCKeyIdGetModeEN.keyIdGetModeId) == false &&
    undefined !== pobjGCKeyIdGetModeEN.keyIdGetModeId &&
    tzDataType.isString(pobjGCKeyIdGetModeEN.keyIdGetModeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[GC关键字获取方式Id(keyIdGetModeId)]的值:[${pobjGCKeyIdGetModeEN.keyIdGetModeId}], 非法,应该为字符型(In GC关键字获取方式(GCKeyIdGetMode))!(clsGCKeyIdGetModeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCKeyIdGetModeEN.keyIdGetModeName) == false &&
    undefined !== pobjGCKeyIdGetModeEN.keyIdGetModeName &&
    tzDataType.isString(pobjGCKeyIdGetModeEN.keyIdGetModeName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[GC关键字获取方式名(keyIdGetModeName)]的值:[${pobjGCKeyIdGetModeEN.keyIdGetModeName}], 非法,应该为字符型(In GC关键字获取方式(GCKeyIdGetMode))!(clsGCKeyIdGetModeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCKeyIdGetModeEN.keyIdGetModeENName) == false &&
    undefined !== pobjGCKeyIdGetModeEN.keyIdGetModeENName &&
    tzDataType.isString(pobjGCKeyIdGetModeEN.keyIdGetModeENName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[GC关键字获取方式英文名(keyIdGetModeENName)]的值:[${pobjGCKeyIdGetModeEN.keyIdGetModeENName}], 非法,应该为字符型(In GC关键字获取方式(GCKeyIdGetMode))!(clsGCKeyIdGetModeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCKeyIdGetModeEN.updDate) == false &&
    undefined !== pobjGCKeyIdGetModeEN.updDate &&
    tzDataType.isString(pobjGCKeyIdGetModeEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjGCKeyIdGetModeEN.updDate}], 非法,应该为字符型(In GC关键字获取方式(GCKeyIdGetMode))!(clsGCKeyIdGetModeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCKeyIdGetModeEN.updUser) == false &&
    undefined !== pobjGCKeyIdGetModeEN.updUser &&
    tzDataType.isString(pobjGCKeyIdGetModeEN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改者(updUser)]的值:[${pobjGCKeyIdGetModeEN.updUser}], 非法,应该为字符型(In GC关键字获取方式(GCKeyIdGetMode))!(clsGCKeyIdGetModeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCKeyIdGetModeEN.memo) == false &&
    undefined !== pobjGCKeyIdGetModeEN.memo &&
    tzDataType.isString(pobjGCKeyIdGetModeEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[说明(memo)]的值:[${pobjGCKeyIdGetModeEN.memo}], 非法,应该为字符型(In GC关键字获取方式(GCKeyIdGetMode))!(clsGCKeyIdGetModeBL:CheckProperty4Update)`,
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
export function GCKeyIdGetMode_GetJSONStrByObj(pobjGCKeyIdGetModeEN: clsGCKeyIdGetModeEN): string {
  pobjGCKeyIdGetModeEN.sfUpdFldSetStr = pobjGCKeyIdGetModeEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjGCKeyIdGetModeEN);
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
export function GCKeyIdGetMode_GetObjLstByJSONStr(strJSON: string): Array<clsGCKeyIdGetModeEN> {
  let arrGCKeyIdGetModeObjLst = new Array<clsGCKeyIdGetModeEN>();
  if (strJSON === '') {
    return arrGCKeyIdGetModeObjLst;
  }
  try {
    arrGCKeyIdGetModeObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrGCKeyIdGetModeObjLst;
  }
  return arrGCKeyIdGetModeObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrGCKeyIdGetModeObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function GCKeyIdGetMode_GetObjLstByJSONObjLst(
  arrGCKeyIdGetModeObjLstS: Array<clsGCKeyIdGetModeEN>,
): Array<clsGCKeyIdGetModeEN> {
  const arrGCKeyIdGetModeObjLst = new Array<clsGCKeyIdGetModeEN>();
  for (const objInFor of arrGCKeyIdGetModeObjLstS) {
    const obj1 = GCKeyIdGetMode_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrGCKeyIdGetModeObjLst.push(obj1);
  }
  return arrGCKeyIdGetModeObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function GCKeyIdGetMode_GetObjByJSONStr(strJSON: string): clsGCKeyIdGetModeEN {
  let pobjGCKeyIdGetModeEN = new clsGCKeyIdGetModeEN();
  if (strJSON === '') {
    return pobjGCKeyIdGetModeEN;
  }
  try {
    pobjGCKeyIdGetModeEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjGCKeyIdGetModeEN;
  }
  return pobjGCKeyIdGetModeEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function GCKeyIdGetMode_GetCombineCondition(
  objGCKeyIdGetModeCond: clsGCKeyIdGetModeEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objGCKeyIdGetModeCond.dicFldComparisonOp,
      clsGCKeyIdGetModeEN.con_KeyIdGetModeId,
    ) == true
  ) {
    const strComparisonOpKeyIdGetModeId: string =
      objGCKeyIdGetModeCond.dicFldComparisonOp[clsGCKeyIdGetModeEN.con_KeyIdGetModeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsGCKeyIdGetModeEN.con_KeyIdGetModeId,
      objGCKeyIdGetModeCond.keyIdGetModeId,
      strComparisonOpKeyIdGetModeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objGCKeyIdGetModeCond.dicFldComparisonOp,
      clsGCKeyIdGetModeEN.con_KeyIdGetModeName,
    ) == true
  ) {
    const strComparisonOpKeyIdGetModeName: string =
      objGCKeyIdGetModeCond.dicFldComparisonOp[clsGCKeyIdGetModeEN.con_KeyIdGetModeName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsGCKeyIdGetModeEN.con_KeyIdGetModeName,
      objGCKeyIdGetModeCond.keyIdGetModeName,
      strComparisonOpKeyIdGetModeName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objGCKeyIdGetModeCond.dicFldComparisonOp,
      clsGCKeyIdGetModeEN.con_KeyIdGetModeENName,
    ) == true
  ) {
    const strComparisonOpKeyIdGetModeENName: string =
      objGCKeyIdGetModeCond.dicFldComparisonOp[clsGCKeyIdGetModeEN.con_KeyIdGetModeENName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsGCKeyIdGetModeEN.con_KeyIdGetModeENName,
      objGCKeyIdGetModeCond.keyIdGetModeENName,
      strComparisonOpKeyIdGetModeENName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objGCKeyIdGetModeCond.dicFldComparisonOp,
      clsGCKeyIdGetModeEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objGCKeyIdGetModeCond.dicFldComparisonOp[clsGCKeyIdGetModeEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsGCKeyIdGetModeEN.con_UpdDate,
      objGCKeyIdGetModeCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objGCKeyIdGetModeCond.dicFldComparisonOp,
      clsGCKeyIdGetModeEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objGCKeyIdGetModeCond.dicFldComparisonOp[clsGCKeyIdGetModeEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsGCKeyIdGetModeEN.con_UpdUser,
      objGCKeyIdGetModeCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objGCKeyIdGetModeCond.dicFldComparisonOp,
      clsGCKeyIdGetModeEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objGCKeyIdGetModeCond.dicFldComparisonOp[clsGCKeyIdGetModeEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsGCKeyIdGetModeEN.con_Memo,
      objGCKeyIdGetModeCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--GCKeyIdGetMode(GC关键字获取方式),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strKeyIdGetModeName: GC关键字获取方式名(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function GCKeyIdGetMode_GetUniCondStr(objGCKeyIdGetModeEN: clsGCKeyIdGetModeEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and KeyIdGetModeName = '{0}'", objGCKeyIdGetModeEN.keyIdGetModeName);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--GCKeyIdGetMode(GC关键字获取方式),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strKeyIdGetModeName: GC关键字获取方式名(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function GCKeyIdGetMode_GetUniCondStr4Update(
  objGCKeyIdGetModeEN: clsGCKeyIdGetModeEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and KeyIdGetModeId <> '{0}'", objGCKeyIdGetModeEN.keyIdGetModeId);
  strWhereCond += Format(" and KeyIdGetModeName = '{0}'", objGCKeyIdGetModeEN.keyIdGetModeName);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objGCKeyIdGetModeENS:源对象
 * @param objGCKeyIdGetModeENT:目标对象
 */
export function GCKeyIdGetMode_GetObjFromJsonObj(
  objGCKeyIdGetModeENS: clsGCKeyIdGetModeEN,
): clsGCKeyIdGetModeEN {
  const objGCKeyIdGetModeENT: clsGCKeyIdGetModeEN = new clsGCKeyIdGetModeEN();
  ObjectAssign(objGCKeyIdGetModeENT, objGCKeyIdGetModeENS);
  return objGCKeyIdGetModeENT;
}
