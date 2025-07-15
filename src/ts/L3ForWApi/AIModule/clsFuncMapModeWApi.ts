/**
 * 类名:clsFuncMapModeWApi
 * 表名:FuncMapMode(00050551)
 * 版本:2025.05.23.1(服务器:WIN-SRV103-116)
 * 日期:2025/05/26 02:47:31
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 应用类型:Vue应用InCore-TS(30)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:AI模块(AIModule)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 函数映射模式(FuncMapMode)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2025年05月26日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty, GetStrLen, tzDataType, Format } from '@/ts/PubFun/clsString';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { CacheHelper } from '@/ts/PubFun/CacheHelper';
import { ConditionCollection } from '@/ts/PubFun/ConditionCollection';
import { AddRecordResult } from '@/ts/PubFun/AddRecordResult';
import {
  BindDdl_ObjLstInDivObj,
  GetExceptionStr,
  myShowErrorMsg,
  ObjectAssign,
} from '@/ts/PubFun/clsCommFunc4Web';
import { clsFuncMapModeEN } from '@/ts/L0Entity/AIModule/clsFuncMapModeEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';

export const funcMapMode_Controller = 'FuncMapModeApi';
export const funcMapMode_ConstructorName = 'funcMapMode';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strFuncMapModeId:关键字
 * @returns 对象
 **/
export async function FuncMapMode_GetObjByFuncMapModeIdAsync(
  strFuncMapModeId: string,
): Promise<clsFuncMapModeEN | null> {
  const strThisFuncName = 'GetObjByFuncMapModeIdAsync';

  if (IsNullOrEmpty(strFuncMapModeId) == true) {
    const strMsg = Format(
      '参数:[strFuncMapModeId]不能为空!(In clsFuncMapModeWApi.GetObjByFuncMapModeIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strFuncMapModeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strFuncMapModeId]的长度:[{0}]不正确!(clsFuncMapModeWApi.GetObjByFuncMapModeIdAsync)',
      strFuncMapModeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByFuncMapModeId';
  const strUrl = GetWebApiUrl(funcMapMode_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strFuncMapModeId,
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
      const objFuncMapMode = FuncMapMode_GetObjFromJsonObj(returnObj);
      return objFuncMapMode;
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
        funcMapMode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        funcMapMode_ConstructorName,
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
 * @param strFuncMapModeId:所给的关键字
 * @returns 对象
 */
export async function FuncMapMode_GetObjByFuncMapModeIdlocalStorage(strFuncMapModeId: string) {
  const strThisFuncName = 'GetObjByFuncMapModeIdlocalStorage';

  if (IsNullOrEmpty(strFuncMapModeId) == true) {
    const strMsg = Format(
      '参数:[strFuncMapModeId]不能为空!(In clsFuncMapModeWApi.GetObjByFuncMapModeIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strFuncMapModeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strFuncMapModeId]的长度:[{0}]不正确!(clsFuncMapModeWApi.GetObjByFuncMapModeIdlocalStorage)',
      strFuncMapModeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsFuncMapModeEN._CurrTabName, strFuncMapModeId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objFuncMapModeCache: clsFuncMapModeEN = JSON.parse(strTempObj);
    return objFuncMapModeCache;
  }
  try {
    const objFuncMapMode = await FuncMapMode_GetObjByFuncMapModeIdAsync(strFuncMapModeId);
    if (objFuncMapMode != null) {
      localStorage.setItem(strKey, JSON.stringify(objFuncMapMode));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objFuncMapMode;
    }
    return objFuncMapMode;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strFuncMapModeId,
      funcMapMode_ConstructorName,
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
 * @param strFuncMapModeId:所给的关键字
 * @returns 对象
 */
export async function FuncMapMode_GetObjByFuncMapModeIdCache(
  strFuncMapModeId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByFuncMapModeIdCache';

  if (IsNullOrEmpty(strFuncMapModeId) == true) {
    const strMsg = Format(
      '参数:[strFuncMapModeId]不能为空!(In clsFuncMapModeWApi.GetObjByFuncMapModeIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strFuncMapModeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strFuncMapModeId]的长度:[{0}]不正确!(clsFuncMapModeWApi.GetObjByFuncMapModeIdCache)',
      strFuncMapModeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrFuncMapModeObjLstCache = await FuncMapMode_GetObjLstCache();
  try {
    const arrFuncMapModeSel = arrFuncMapModeObjLstCache.filter(
      (x) => x.funcMapModeId == strFuncMapModeId,
    );
    let objFuncMapMode: clsFuncMapModeEN;
    if (arrFuncMapModeSel.length > 0) {
      objFuncMapMode = arrFuncMapModeSel[0];
      return objFuncMapMode;
    } else {
      if (bolTryAsyncOnce == true) {
        const objFuncMapModeConst = await FuncMapMode_GetObjByFuncMapModeIdAsync(strFuncMapModeId);
        if (objFuncMapModeConst != null) {
          FuncMapMode_ReFreshThisCache();
          return objFuncMapModeConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strFuncMapModeId,
      funcMapMode_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objFuncMapMode:所给的对象
 * @returns 对象
 */
export async function FuncMapMode_UpdateObjInLstCache(objFuncMapMode: clsFuncMapModeEN) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrFuncMapModeObjLstCache = await FuncMapMode_GetObjLstCache();
    const obj = arrFuncMapModeObjLstCache.find(
      (x) => x.funcMapModeName == objFuncMapMode.funcMapModeName,
    );
    if (obj != null) {
      objFuncMapMode.funcMapModeId = obj.funcMapModeId;
      ObjectAssign(obj, objFuncMapMode);
    } else {
      arrFuncMapModeObjLstCache.push(objFuncMapMode);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      funcMapMode_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-05-26
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function FuncMapMode_SortFunDefa(a: clsFuncMapModeEN, b: clsFuncMapModeEN): number {
  return a.funcMapModeId.localeCompare(b.funcMapModeId);
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2025-05-26
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function FuncMapMode_SortFunDefa2Fld(a: clsFuncMapModeEN, b: clsFuncMapModeEN): number {
  if (a.funcMapModeName == b.funcMapModeName)
    return a.funcMapModeENName.localeCompare(b.funcMapModeENName);
  else return a.funcMapModeName.localeCompare(b.funcMapModeName);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-05-26
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function FuncMapMode_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsFuncMapModeEN.con_FuncMapModeId:
        return (a: clsFuncMapModeEN, b: clsFuncMapModeEN) => {
          return a.funcMapModeId.localeCompare(b.funcMapModeId);
        };
      case clsFuncMapModeEN.con_FuncMapModeName:
        return (a: clsFuncMapModeEN, b: clsFuncMapModeEN) => {
          if (a.funcMapModeName == null) return -1;
          if (b.funcMapModeName == null) return 1;
          return a.funcMapModeName.localeCompare(b.funcMapModeName);
        };
      case clsFuncMapModeEN.con_FuncMapModeENName:
        return (a: clsFuncMapModeEN, b: clsFuncMapModeEN) => {
          if (a.funcMapModeENName == null) return -1;
          if (b.funcMapModeENName == null) return 1;
          return a.funcMapModeENName.localeCompare(b.funcMapModeENName);
        };
      case clsFuncMapModeEN.con_UpdDate:
        return (a: clsFuncMapModeEN, b: clsFuncMapModeEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsFuncMapModeEN.con_UpdUser:
        return (a: clsFuncMapModeEN, b: clsFuncMapModeEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsFuncMapModeEN.con_Memo:
        return (a: clsFuncMapModeEN, b: clsFuncMapModeEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[FuncMapMode]中不存在!(in ${funcMapMode_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsFuncMapModeEN.con_FuncMapModeId:
        return (a: clsFuncMapModeEN, b: clsFuncMapModeEN) => {
          return b.funcMapModeId.localeCompare(a.funcMapModeId);
        };
      case clsFuncMapModeEN.con_FuncMapModeName:
        return (a: clsFuncMapModeEN, b: clsFuncMapModeEN) => {
          if (b.funcMapModeName == null) return -1;
          if (a.funcMapModeName == null) return 1;
          return b.funcMapModeName.localeCompare(a.funcMapModeName);
        };
      case clsFuncMapModeEN.con_FuncMapModeENName:
        return (a: clsFuncMapModeEN, b: clsFuncMapModeEN) => {
          if (b.funcMapModeENName == null) return -1;
          if (a.funcMapModeENName == null) return 1;
          return b.funcMapModeENName.localeCompare(a.funcMapModeENName);
        };
      case clsFuncMapModeEN.con_UpdDate:
        return (a: clsFuncMapModeEN, b: clsFuncMapModeEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsFuncMapModeEN.con_UpdUser:
        return (a: clsFuncMapModeEN, b: clsFuncMapModeEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsFuncMapModeEN.con_Memo:
        return (a: clsFuncMapModeEN, b: clsFuncMapModeEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[FuncMapMode]中不存在!(in ${funcMapMode_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strFuncMapModeId:所给的关键字
 * @returns 对象
 */
export async function FuncMapMode_GetNameByFuncMapModeIdCache(strFuncMapModeId: string) {
  if (IsNullOrEmpty(strFuncMapModeId) == true) {
    const strMsg = Format(
      '参数:[strFuncMapModeId]不能为空!(In clsFuncMapModeWApi.GetNameByFuncMapModeIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strFuncMapModeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strFuncMapModeId]的长度:[{0}]不正确!(clsFuncMapModeWApi.GetNameByFuncMapModeIdCache)',
      strFuncMapModeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrFuncMapModeObjLstCache = await FuncMapMode_GetObjLstCache();
  if (arrFuncMapModeObjLstCache == null) return '';
  try {
    const arrFuncMapModeSel = arrFuncMapModeObjLstCache.filter(
      (x) => x.funcMapModeId == strFuncMapModeId,
    );
    let objFuncMapMode: clsFuncMapModeEN;
    if (arrFuncMapModeSel.length > 0) {
      objFuncMapMode = arrFuncMapModeSel[0];
      return objFuncMapMode.funcMapModeName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strFuncMapModeId,
    );
    console.error(strMsg);
    alert(strMsg);
  }
  return '';
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-05-26
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function FuncMapMode_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsFuncMapModeEN.con_FuncMapModeId:
      return (obj: clsFuncMapModeEN) => {
        return obj.funcMapModeId === value;
      };
    case clsFuncMapModeEN.con_FuncMapModeName:
      return (obj: clsFuncMapModeEN) => {
        return obj.funcMapModeName === value;
      };
    case clsFuncMapModeEN.con_FuncMapModeENName:
      return (obj: clsFuncMapModeEN) => {
        return obj.funcMapModeENName === value;
      };
    case clsFuncMapModeEN.con_UpdDate:
      return (obj: clsFuncMapModeEN) => {
        return obj.updDate === value;
      };
    case clsFuncMapModeEN.con_UpdUser:
      return (obj: clsFuncMapModeEN) => {
        return obj.updUser === value;
      };
    case clsFuncMapModeEN.con_Memo:
      return (obj: clsFuncMapModeEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[FuncMapMode]中不存在!(in ${funcMapMode_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2025-05-26
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 * @returns 返回一个输出字段值
 */
export async function FuncMapMode_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsFuncMapModeEN.con_FuncMapModeId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsFuncMapModeEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsFuncMapModeEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strFuncMapModeId = strInValue;
  if (IsNullOrEmpty(strFuncMapModeId) == true) {
    return '';
  }
  const objFuncMapMode = await FuncMapMode_GetObjByFuncMapModeIdCache(strFuncMapModeId);
  if (objFuncMapMode == null) return '';
  if (objFuncMapMode.GetFldValue(strOutFldName) == null) return '';
  return objFuncMapMode.GetFldValue(strOutFldName).toString();
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2025-05-26
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 * @returns 返回一个关键字值列表
 */
export async function FuncMapMode_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsFuncMapModeEN.con_FuncMapModeId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrFuncMapMode = await FuncMapMode_GetObjLstCache();
  if (arrFuncMapMode == null) return [];
  let arrFuncMapModeSel = arrFuncMapMode;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrFuncMapModeSel = arrFuncMapModeSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrFuncMapModeSel = arrFuncMapModeSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrFuncMapModeSel = arrFuncMapModeSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrFuncMapModeSel = arrFuncMapModeSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrFuncMapModeSel = arrFuncMapModeSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrFuncMapModeSel = arrFuncMapModeSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrFuncMapModeSel = arrFuncMapModeSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrFuncMapModeSel = arrFuncMapModeSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrFuncMapModeSel = arrFuncMapModeSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrFuncMapModeSel = arrFuncMapModeSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrFuncMapModeSel.length == 0) return [];
  return arrFuncMapModeSel.map((x) => x.funcMapModeId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function FuncMapMode_GetFldValueAsync(
  strFldName: string,
  strWhereCond: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetFldValueAsync';
  const strAction = 'GetFldValue';
  const strUrl = GetWebApiUrl(funcMapMode_Controller, strAction);

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
        funcMapMode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        funcMapMode_ConstructorName,
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
export async function FuncMapMode_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(funcMapMode_Controller, strAction);

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
        funcMapMode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        funcMapMode_ConstructorName,
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
export async function FuncMapMode_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(funcMapMode_Controller, strAction);

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
        funcMapMode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        funcMapMode_ConstructorName,
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
export async function FuncMapMode_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsFuncMapModeEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(funcMapMode_Controller, strAction);

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
      const objFuncMapMode = FuncMapMode_GetObjFromJsonObj(returnObj);
      return objFuncMapMode;
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
        funcMapMode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        funcMapMode_ConstructorName,
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
export async function FuncMapMode_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsFuncMapModeEN._CurrTabName;
  if (IsNullOrEmpty(clsFuncMapModeEN.WhereFormat) == false) {
    strWhereCond = clsFuncMapModeEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsFuncMapModeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsFuncMapModeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrFuncMapModeExObjLstCache: Array<clsFuncMapModeEN> = CacheHelper.Get(strKey);
    const arrFuncMapModeObjLstT = FuncMapMode_GetObjLstByJSONObjLst(arrFuncMapModeExObjLstCache);
    return arrFuncMapModeObjLstT;
  }
  try {
    const arrFuncMapModeExObjLst = await FuncMapMode_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrFuncMapModeExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrFuncMapModeExObjLst.length,
    );
    console.log(strInfo);
    return arrFuncMapModeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      funcMapMode_ConstructorName,
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
export async function FuncMapMode_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsFuncMapModeEN._CurrTabName;
  if (IsNullOrEmpty(clsFuncMapModeEN.WhereFormat) == false) {
    strWhereCond = clsFuncMapModeEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsFuncMapModeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsFuncMapModeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrFuncMapModeExObjLstCache: Array<clsFuncMapModeEN> = JSON.parse(strTempObjLst);
    const arrFuncMapModeObjLstT = FuncMapMode_GetObjLstByJSONObjLst(arrFuncMapModeExObjLstCache);
    return arrFuncMapModeObjLstT;
  }
  try {
    const arrFuncMapModeExObjLst = await FuncMapMode_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrFuncMapModeExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrFuncMapModeExObjLst.length,
    );
    console.log(strInfo);
    return arrFuncMapModeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      funcMapMode_ConstructorName,
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
export async function FuncMapMode_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsFuncMapModeEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrFuncMapModeObjLstCache: Array<clsFuncMapModeEN> = JSON.parse(strTempObjLst);
    return arrFuncMapModeObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function FuncMapMode_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsFuncMapModeEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(funcMapMode_Controller, strAction);

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
          funcMapMode_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = FuncMapMode_GetObjLstByJSONObjLst(returnObjLst);
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
        funcMapMode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        funcMapMode_ConstructorName,
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
export async function FuncMapMode_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsFuncMapModeEN._CurrTabName;
  if (IsNullOrEmpty(clsFuncMapModeEN.WhereFormat) == false) {
    strWhereCond = clsFuncMapModeEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsFuncMapModeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsFuncMapModeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrFuncMapModeExObjLstCache: Array<clsFuncMapModeEN> = JSON.parse(strTempObjLst);
    const arrFuncMapModeObjLstT = FuncMapMode_GetObjLstByJSONObjLst(arrFuncMapModeExObjLstCache);
    return arrFuncMapModeObjLstT;
  }
  try {
    const arrFuncMapModeExObjLst = await FuncMapMode_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrFuncMapModeExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrFuncMapModeExObjLst.length,
    );
    console.log(strInfo);
    return arrFuncMapModeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      funcMapMode_ConstructorName,
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
export async function FuncMapMode_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsFuncMapModeEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrFuncMapModeObjLstCache: Array<clsFuncMapModeEN> = JSON.parse(strTempObjLst);
    return arrFuncMapModeObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function FuncMapMode_GetObjLstCache(): Promise<Array<clsFuncMapModeEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrFuncMapModeObjLstCache;
  switch (clsFuncMapModeEN.CacheModeId) {
    case '04': //sessionStorage
      arrFuncMapModeObjLstCache = await FuncMapMode_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrFuncMapModeObjLstCache = await FuncMapMode_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrFuncMapModeObjLstCache = await FuncMapMode_GetObjLstClientCache();
      break;
    default:
      arrFuncMapModeObjLstCache = await FuncMapMode_GetObjLstClientCache();
      break;
  }
  return arrFuncMapModeObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function FuncMapMode_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrFuncMapModeObjLstCache;
  switch (clsFuncMapModeEN.CacheModeId) {
    case '04': //sessionStorage
      arrFuncMapModeObjLstCache = await FuncMapMode_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrFuncMapModeObjLstCache = await FuncMapMode_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrFuncMapModeObjLstCache = null;
      break;
    default:
      arrFuncMapModeObjLstCache = null;
      break;
  }
  return arrFuncMapModeObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrFuncMapModeIdCond:条件对象
 * @returns 对象列表子集
 */
export async function FuncMapMode_GetSubObjLstCache(objFuncMapModeCond: ConditionCollection) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrFuncMapModeObjLstCache = await FuncMapMode_GetObjLstCache();
  let arrFuncMapModeSel = arrFuncMapModeObjLstCache;
  if (objFuncMapModeCond.GetConditions().length == 0) return arrFuncMapModeSel;
  try {
    //console.log(sstrKeys);
    for (const objCondition of objFuncMapModeCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrFuncMapModeSel = arrFuncMapModeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrFuncMapModeSel = arrFuncMapModeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrFuncMapModeSel = arrFuncMapModeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrFuncMapModeSel = arrFuncMapModeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrFuncMapModeSel = arrFuncMapModeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrFuncMapModeSel = arrFuncMapModeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrFuncMapModeSel = arrFuncMapModeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrFuncMapModeSel = arrFuncMapModeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrFuncMapModeSel = arrFuncMapModeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrFuncMapModeSel = arrFuncMapModeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrFuncMapModeSel = arrFuncMapModeSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrFuncMapModeSel = arrFuncMapModeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrFuncMapModeSel = arrFuncMapModeSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrFuncMapModeSel = arrFuncMapModeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrFuncMapModeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objFuncMapModeCond),
      funcMapMode_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsFuncMapModeEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrFuncMapModeId:关键字列表
 * @returns 对象列表
 **/
export async function FuncMapMode_GetObjLstByFuncMapModeIdLstAsync(
  arrFuncMapModeId: Array<string>,
): Promise<Array<clsFuncMapModeEN>> {
  const strThisFuncName = 'GetObjLstByFuncMapModeIdLstAsync';
  const strAction = 'GetObjLstByFuncMapModeIdLst';
  const strUrl = GetWebApiUrl(funcMapMode_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrFuncMapModeId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          funcMapMode_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = FuncMapMode_GetObjLstByJSONObjLst(returnObjLst);
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
        funcMapMode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        funcMapMode_ConstructorName,
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
 * @param arrstrFuncMapModeIdLst:关键字列表
 * @returns 对象列表
 */
export async function FuncMapMode_GetObjLstByFuncMapModeIdLstCache(
  arrFuncMapModeIdLst: Array<string>,
) {
  const strThisFuncName = 'GetObjLstByFuncMapModeIdLstCache';
  try {
    const arrFuncMapModeObjLstCache = await FuncMapMode_GetObjLstCache();
    const arrFuncMapModeSel = arrFuncMapModeObjLstCache.filter(
      (x) => arrFuncMapModeIdLst.indexOf(x.funcMapModeId) > -1,
    );
    return arrFuncMapModeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrFuncMapModeIdLst.join(','),
      funcMapMode_ConstructorName,
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
export async function FuncMapMode_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsFuncMapModeEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(funcMapMode_Controller, strAction);

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
          funcMapMode_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = FuncMapMode_GetObjLstByJSONObjLst(returnObjLst);
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
        funcMapMode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        funcMapMode_ConstructorName,
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
export async function FuncMapMode_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsFuncMapModeEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(funcMapMode_Controller, strAction);

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
          funcMapMode_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = FuncMapMode_GetObjLstByJSONObjLst(returnObjLst);
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
        funcMapMode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        funcMapMode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerCache)
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)

/**
 * 调用WebApi来删除记录,根据关键字来删除记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelRecordAsync)
 * @param strFuncMapModeId:关键字
 * @returns 获取删除的结果
 **/
export async function FuncMapMode_DelRecordAsync(strFuncMapModeId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(funcMapMode_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strFuncMapModeId);

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
        funcMapMode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        funcMapMode_ConstructorName,
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
 * @param arrFuncMapModeId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function FuncMapMode_DelFuncMapModesAsync(
  arrFuncMapModeId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelFuncMapModesAsync';
  const strAction = 'DelFuncMapModes';
  const strUrl = GetWebApiUrl(funcMapMode_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrFuncMapModeId, config);
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
        funcMapMode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        funcMapMode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjExLstByPagerCache)
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CopyToEx)
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMapByFldName)
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByExKey)
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)

/**
 * 根据条件删除记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelMultiRecordByCondAsync)
 * @returns 实际删除记录的个数
 **/
export async function FuncMapMode_DelFuncMapModesByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelFuncMapModesByCondAsync';
  const strAction = 'DelFuncMapModesByCond';
  const strUrl = GetWebApiUrl(funcMapMode_Controller, strAction);

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
        funcMapMode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        funcMapMode_ConstructorName,
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
 * @param objFuncMapModeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function FuncMapMode_AddNewRecordAsync(
  objFuncMapModeEN: clsFuncMapModeEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objFuncMapModeEN);
  const strUrl = GetWebApiUrl(funcMapMode_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objFuncMapModeEN, config);
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
        funcMapMode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        funcMapMode_ConstructorName,
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
 * @param objFuncMapModeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function FuncMapMode_AddNewRecordWithMaxIdAsync(
  objFuncMapModeEN: clsFuncMapModeEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(funcMapMode_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objFuncMapModeEN, config);
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
        funcMapMode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        funcMapMode_ConstructorName,
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
export async function FuncMapMode_AddNewObjSave(
  objFuncMapModeEN: clsFuncMapModeEN,
): Promise<AddRecordResult> {
  const strThisFuncName = 'AddNewObjSave';
  try {
    FuncMapMode_CheckPropertyNew(objFuncMapModeEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${funcMapMode_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    alert(strMsg);
    return { keyword: '', success: false }; //一定要有一个返回值,否则会出错!
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await FuncMapMode_CheckUniCond4Add(objFuncMapModeEN);
    if (bolIsExistCond == false) {
      return { keyword: '', success: false };
    }
    let returnBool = false;
    const returnKeyId = await FuncMapMode_AddNewRecordWithMaxIdAsync(objFuncMapModeEN);
    if (IsNullOrEmpty(returnKeyId) == false) {
      returnBool = true;
    }
    if (returnBool == true) {
      FuncMapMode_ReFreshCache();
    } else {
      const strInfo = `添加[函数映射模式(FuncMapMode)]记录不成功!`;
      //显示信息框
      throw strInfo;
    }
    return { keyword: returnKeyId, success: returnBool }; //一定要有一个返回值,否则会出错!
  } catch (e) {
    const strMsg = `添加记录不成功,${e}.(in ${funcMapMode_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export async function FuncMapMode_CheckUniCond4Add(
  objFuncMapModeEN: clsFuncMapModeEN,
): Promise<boolean> {
  const strUniquenessCondition = FuncMapMode_GetUniCondStr(objFuncMapModeEN);
  const bolIsExistCondition = await FuncMapMode_IsExistRecordAsync(strUniquenessCondition);
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
export async function FuncMapMode_CheckUniCond4Update(
  objFuncMapModeEN: clsFuncMapModeEN,
): Promise<boolean> {
  const strUniquenessCondition = FuncMapMode_GetUniCondStr4Update(objFuncMapModeEN);
  const bolIsExistCondition = await FuncMapMode_IsExistRecordAsync(strUniquenessCondition);
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
export async function FuncMapMode_UpdateObjSave(
  objFuncMapModeEN: clsFuncMapModeEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateObjSave';
  objFuncMapModeEN.sfUpdFldSetStr = objFuncMapModeEN.updFldString; //设置哪些字段被修改(脏字段)
  if (objFuncMapModeEN.funcMapModeId == '' || objFuncMapModeEN.funcMapModeId == undefined) {
    console.error('关键字不能为空!');
    throw '关键字不能为空!';
  }
  try {
    FuncMapMode_CheckProperty4Update(objFuncMapModeEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${funcMapMode_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await FuncMapMode_CheckUniCond4Update(objFuncMapModeEN);
    if (bolIsExistCond == false) {
      return false;
    }
    const returnBool = await FuncMapMode_UpdateRecordAsync(objFuncMapModeEN);
    if (returnBool == true) {
      FuncMapMode_ReFreshCache();
    }
    return returnBool;
  } catch (e) {
    const strMsg = `修改记录不成功,${e}.(in ${funcMapMode_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objFuncMapModeEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function FuncMapMode_AddNewRecordWithReturnKeyAsync(
  objFuncMapModeEN: clsFuncMapModeEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(funcMapMode_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objFuncMapModeEN, config);
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
        funcMapMode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        funcMapMode_ConstructorName,
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
 * @param objFuncMapModeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function FuncMapMode_UpdateRecordAsync(
  objFuncMapModeEN: clsFuncMapModeEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objFuncMapModeEN.sfUpdFldSetStr === undefined ||
    objFuncMapModeEN.sfUpdFldSetStr === null ||
    objFuncMapModeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objFuncMapModeEN.funcMapModeId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(funcMapMode_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objFuncMapModeEN, config);
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
        funcMapMode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        funcMapMode_ConstructorName,
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
 * @param objFuncMapModeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function FuncMapMode_EditRecordExAsync(
  objFuncMapModeEN: clsFuncMapModeEN,
): Promise<boolean> {
  const strThisFuncName = 'EditRecordExAsync';
  const strAction = 'EditRecordEx';
  if (
    objFuncMapModeEN.sfUpdFldSetStr === undefined ||
    objFuncMapModeEN.sfUpdFldSetStr === null ||
    objFuncMapModeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objFuncMapModeEN.funcMapModeId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(funcMapMode_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objFuncMapModeEN, config);
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
        funcMapMode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        funcMapMode_ConstructorName,
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
 * @param objFuncMapModeEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function FuncMapMode_UpdateWithConditionAsync(
  objFuncMapModeEN: clsFuncMapModeEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objFuncMapModeEN.sfUpdFldSetStr === undefined ||
    objFuncMapModeEN.sfUpdFldSetStr === null ||
    objFuncMapModeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objFuncMapModeEN.funcMapModeId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(funcMapMode_Controller, strAction);
  objFuncMapModeEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objFuncMapModeEN, config);
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
        funcMapMode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        funcMapMode_ConstructorName,
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
 * @param objstrFuncMapModeIdCond:条件对象
 * @returns 对象列表子集
 */
export async function FuncMapMode_IsExistRecordCache(objFuncMapModeCond: ConditionCollection) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrFuncMapModeObjLstCache = await FuncMapMode_GetObjLstCache();
  if (arrFuncMapModeObjLstCache == null) return false;
  let arrFuncMapModeSel = arrFuncMapModeObjLstCache;
  if (objFuncMapModeCond.GetConditions().length == 0)
    return arrFuncMapModeSel.length > 0 ? true : false;
  try {
    for (const objCondition of objFuncMapModeCond.GetConditions()) {
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
            arrFuncMapModeSel = arrFuncMapModeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrFuncMapModeSel = arrFuncMapModeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrFuncMapModeSel = arrFuncMapModeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrFuncMapModeSel = arrFuncMapModeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrFuncMapModeSel = arrFuncMapModeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrFuncMapModeSel = arrFuncMapModeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrFuncMapModeSel = arrFuncMapModeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrFuncMapModeSel = arrFuncMapModeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrFuncMapModeSel = arrFuncMapModeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrFuncMapModeSel = arrFuncMapModeSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrFuncMapModeSel = arrFuncMapModeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrFuncMapModeSel = arrFuncMapModeSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrFuncMapModeSel = arrFuncMapModeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrFuncMapModeSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objFuncMapModeCond),
      funcMapMode_ConstructorName,
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
export async function FuncMapMode_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(funcMapMode_Controller, strAction);

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
        funcMapMode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        funcMapMode_ConstructorName,
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
 * @param strFuncMapModeId:所给的关键字
 * @returns 对象
 */
export async function FuncMapMode_IsExistCache(strFuncMapModeId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrFuncMapModeObjLstCache = await FuncMapMode_GetObjLstCache();
  if (arrFuncMapModeObjLstCache == null) return false;
  try {
    const arrFuncMapModeSel = arrFuncMapModeObjLstCache.filter(
      (x) => x.funcMapModeId == strFuncMapModeId,
    );
    if (arrFuncMapModeSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strFuncMapModeId,
      funcMapMode_ConstructorName,
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
 * @param strFuncMapModeId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function FuncMapMode_IsExistAsync(strFuncMapModeId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(funcMapMode_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strFuncMapModeId,
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
        funcMapMode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        funcMapMode_ConstructorName,
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
export async function FuncMapMode_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(funcMapMode_Controller, strAction);

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
        funcMapMode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        funcMapMode_ConstructorName,
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
 * @param objFuncMapModeCond:条件对象
 * @returns 对象列表记录数
 */
export async function FuncMapMode_GetRecCountByCondCache(objFuncMapModeCond: ConditionCollection) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrFuncMapModeObjLstCache = await FuncMapMode_GetObjLstCache();
  if (arrFuncMapModeObjLstCache == null) return 0;
  let arrFuncMapModeSel = arrFuncMapModeObjLstCache;
  if (objFuncMapModeCond.GetConditions().length == 0) return arrFuncMapModeSel.length;
  try {
    for (const objCondition of objFuncMapModeCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrFuncMapModeSel = arrFuncMapModeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrFuncMapModeSel = arrFuncMapModeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrFuncMapModeSel = arrFuncMapModeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrFuncMapModeSel = arrFuncMapModeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrFuncMapModeSel = arrFuncMapModeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrFuncMapModeSel = arrFuncMapModeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrFuncMapModeSel = arrFuncMapModeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrFuncMapModeSel = arrFuncMapModeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrFuncMapModeSel = arrFuncMapModeSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrFuncMapModeSel = arrFuncMapModeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrFuncMapModeSel = arrFuncMapModeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrFuncMapModeSel = arrFuncMapModeSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrFuncMapModeSel = arrFuncMapModeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrFuncMapModeSel = arrFuncMapModeSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrFuncMapModeSel = arrFuncMapModeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrFuncMapModeSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objFuncMapModeCond),
      funcMapMode_ConstructorName,
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
export async function FuncMapMode_GetMaxStrIdAsync(): Promise<string> {
  const strThisFuncName = 'GetMaxStrIdAsync';
  const strAction = 'GetMaxStrId';
  const strUrl = GetWebApiUrl(funcMapMode_Controller, strAction);

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
        funcMapMode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        funcMapMode_ConstructorName,
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
export async function FuncMapMode_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(funcMapMode_Controller, strAction);

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
        funcMapMode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        funcMapMode_ConstructorName,
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
export function FuncMapMode_GetWebApiUrl(strController: string, strAction: string): string {
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
export function FuncMapMode_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功!');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clsFuncMapModeEN._CurrTabName;
  switch (clsFuncMapModeEN.CacheModeId) {
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
  clsFuncMapModeEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
}

/**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export function FuncMapMode_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsFuncMapModeEN._CurrTabName;
    switch (clsFuncMapModeEN.CacheModeId) {
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
    clsFuncMapModeEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export function FuncMapMode_GetLastRefreshTime(): string {
  if (clsFuncMapModeEN._RefreshTimeLst.length == 0) return '';
  return clsFuncMapModeEN._RefreshTimeLst[clsFuncMapModeEN._RefreshTimeLst.length - 1];
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export async function FuncMapMode_BindDdl_FuncMapModeIdInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
) {
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_FuncMapModeIdInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_FuncMapModeIdInDivCache");
  const arrObjLstSel = await FuncMapMode_GetObjLstCache();
  if (arrObjLstSel == null) return;
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsFuncMapModeEN.con_FuncMapModeId,
    clsFuncMapModeEN.con_FuncMapModeName,
    '函数映射模式...',
  );
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export async function FuncMapMode_GetArrFuncMapMode() {
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_FuncMapModeIdInDivCache");
  const arrFuncMapMode = new Array<clsFuncMapModeEN>();
  const arrObjLstSel = await FuncMapMode_GetObjLstCache();
  if (arrObjLstSel == null) return null;
  const obj0 = new clsFuncMapModeEN();
  obj0.funcMapModeId = '0';
  obj0.funcMapModeName = '选函数映射模式...';
  arrFuncMapMode.push(obj0);
  arrObjLstSel.forEach((x) => arrFuncMapMode.push(x));
  return arrFuncMapMode;
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function FuncMapMode_CheckPropertyNew(pobjFuncMapModeEN: clsFuncMapModeEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjFuncMapModeEN.funcMapModeId) == false &&
    GetStrLen(pobjFuncMapModeEN.funcMapModeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000413)字段[函数映射模式Id(funcMapModeId)]的长度不能超过2(In 函数映射模式(FuncMapMode))!值:${pobjFuncMapModeEN.funcMapModeId}(clsFuncMapModeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFuncMapModeEN.funcMapModeName) == false &&
    GetStrLen(pobjFuncMapModeEN.funcMapModeName) > 50
  ) {
    throw new Error(
      `(errid:Watl000413)字段[函数映射模式名(funcMapModeName)]的长度不能超过50(In 函数映射模式(FuncMapMode))!值:${pobjFuncMapModeEN.funcMapModeName}(clsFuncMapModeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFuncMapModeEN.funcMapModeENName) == false &&
    GetStrLen(pobjFuncMapModeEN.funcMapModeENName) > 50
  ) {
    throw new Error(
      `(errid:Watl000413)字段[函数映射模式英文名(funcMapModeENName)]的长度不能超过50(In 函数映射模式(FuncMapMode))!值:${pobjFuncMapModeEN.funcMapModeENName}(clsFuncMapModeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFuncMapModeEN.updDate) == false &&
    GetStrLen(pobjFuncMapModeEN.updDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 函数映射模式(FuncMapMode))!值:${pobjFuncMapModeEN.updDate}(clsFuncMapModeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFuncMapModeEN.updUser) == false &&
    GetStrLen(pobjFuncMapModeEN.updUser) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改者(updUser)]的长度不能超过20(In 函数映射模式(FuncMapMode))!值:${pobjFuncMapModeEN.updUser}(clsFuncMapModeBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjFuncMapModeEN.memo) == false && GetStrLen(pobjFuncMapModeEN.memo) > 1000) {
    throw new Error(
      `(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In 函数映射模式(FuncMapMode))!值:${pobjFuncMapModeEN.memo}(clsFuncMapModeBL:CheckPropertyNew)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjFuncMapModeEN.funcMapModeId) == false &&
    undefined !== pobjFuncMapModeEN.funcMapModeId &&
    tzDataType.isString(pobjFuncMapModeEN.funcMapModeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[函数映射模式Id(funcMapModeId)]的值:[${pobjFuncMapModeEN.funcMapModeId}], 非法,应该为字符型(In 函数映射模式(FuncMapMode))!(clsFuncMapModeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFuncMapModeEN.funcMapModeName) == false &&
    undefined !== pobjFuncMapModeEN.funcMapModeName &&
    tzDataType.isString(pobjFuncMapModeEN.funcMapModeName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[函数映射模式名(funcMapModeName)]的值:[${pobjFuncMapModeEN.funcMapModeName}], 非法,应该为字符型(In 函数映射模式(FuncMapMode))!(clsFuncMapModeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFuncMapModeEN.funcMapModeENName) == false &&
    undefined !== pobjFuncMapModeEN.funcMapModeENName &&
    tzDataType.isString(pobjFuncMapModeEN.funcMapModeENName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[函数映射模式英文名(funcMapModeENName)]的值:[${pobjFuncMapModeEN.funcMapModeENName}], 非法,应该为字符型(In 函数映射模式(FuncMapMode))!(clsFuncMapModeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFuncMapModeEN.updDate) == false &&
    undefined !== pobjFuncMapModeEN.updDate &&
    tzDataType.isString(pobjFuncMapModeEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjFuncMapModeEN.updDate}], 非法,应该为字符型(In 函数映射模式(FuncMapMode))!(clsFuncMapModeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFuncMapModeEN.updUser) == false &&
    undefined !== pobjFuncMapModeEN.updUser &&
    tzDataType.isString(pobjFuncMapModeEN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改者(updUser)]的值:[${pobjFuncMapModeEN.updUser}], 非法,应该为字符型(In 函数映射模式(FuncMapMode))!(clsFuncMapModeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFuncMapModeEN.memo) == false &&
    undefined !== pobjFuncMapModeEN.memo &&
    tzDataType.isString(pobjFuncMapModeEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[说明(memo)]的值:[${pobjFuncMapModeEN.memo}], 非法,应该为字符型(In 函数映射模式(FuncMapMode))!(clsFuncMapModeBL:CheckPropertyNew0)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function FuncMapMode_CheckProperty4Update(pobjFuncMapModeEN: clsFuncMapModeEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjFuncMapModeEN.funcMapModeId) == false &&
    GetStrLen(pobjFuncMapModeEN.funcMapModeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000416)字段[函数映射模式Id(funcMapModeId)]的长度不能超过2(In 函数映射模式(FuncMapMode))!值:${pobjFuncMapModeEN.funcMapModeId}(clsFuncMapModeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFuncMapModeEN.funcMapModeName) == false &&
    GetStrLen(pobjFuncMapModeEN.funcMapModeName) > 50
  ) {
    throw new Error(
      `(errid:Watl000416)字段[函数映射模式名(funcMapModeName)]的长度不能超过50(In 函数映射模式(FuncMapMode))!值:${pobjFuncMapModeEN.funcMapModeName}(clsFuncMapModeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFuncMapModeEN.funcMapModeENName) == false &&
    GetStrLen(pobjFuncMapModeEN.funcMapModeENName) > 50
  ) {
    throw new Error(
      `(errid:Watl000416)字段[函数映射模式英文名(funcMapModeENName)]的长度不能超过50(In 函数映射模式(FuncMapMode))!值:${pobjFuncMapModeEN.funcMapModeENName}(clsFuncMapModeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFuncMapModeEN.updDate) == false &&
    GetStrLen(pobjFuncMapModeEN.updDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 函数映射模式(FuncMapMode))!值:${pobjFuncMapModeEN.updDate}(clsFuncMapModeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFuncMapModeEN.updUser) == false &&
    GetStrLen(pobjFuncMapModeEN.updUser) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改者(updUser)]的长度不能超过20(In 函数映射模式(FuncMapMode))!值:${pobjFuncMapModeEN.updUser}(clsFuncMapModeBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjFuncMapModeEN.memo) == false && GetStrLen(pobjFuncMapModeEN.memo) > 1000) {
    throw new Error(
      `(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In 函数映射模式(FuncMapMode))!值:${pobjFuncMapModeEN.memo}(clsFuncMapModeBL:CheckProperty4Update)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjFuncMapModeEN.funcMapModeId) == false &&
    undefined !== pobjFuncMapModeEN.funcMapModeId &&
    tzDataType.isString(pobjFuncMapModeEN.funcMapModeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[函数映射模式Id(funcMapModeId)]的值:[${pobjFuncMapModeEN.funcMapModeId}], 非法,应该为字符型(In 函数映射模式(FuncMapMode))!(clsFuncMapModeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFuncMapModeEN.funcMapModeName) == false &&
    undefined !== pobjFuncMapModeEN.funcMapModeName &&
    tzDataType.isString(pobjFuncMapModeEN.funcMapModeName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[函数映射模式名(funcMapModeName)]的值:[${pobjFuncMapModeEN.funcMapModeName}], 非法,应该为字符型(In 函数映射模式(FuncMapMode))!(clsFuncMapModeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFuncMapModeEN.funcMapModeENName) == false &&
    undefined !== pobjFuncMapModeEN.funcMapModeENName &&
    tzDataType.isString(pobjFuncMapModeEN.funcMapModeENName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[函数映射模式英文名(funcMapModeENName)]的值:[${pobjFuncMapModeEN.funcMapModeENName}], 非法,应该为字符型(In 函数映射模式(FuncMapMode))!(clsFuncMapModeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFuncMapModeEN.updDate) == false &&
    undefined !== pobjFuncMapModeEN.updDate &&
    tzDataType.isString(pobjFuncMapModeEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjFuncMapModeEN.updDate}], 非法,应该为字符型(In 函数映射模式(FuncMapMode))!(clsFuncMapModeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFuncMapModeEN.updUser) == false &&
    undefined !== pobjFuncMapModeEN.updUser &&
    tzDataType.isString(pobjFuncMapModeEN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改者(updUser)]的值:[${pobjFuncMapModeEN.updUser}], 非法,应该为字符型(In 函数映射模式(FuncMapMode))!(clsFuncMapModeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFuncMapModeEN.memo) == false &&
    undefined !== pobjFuncMapModeEN.memo &&
    tzDataType.isString(pobjFuncMapModeEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[说明(memo)]的值:[${pobjFuncMapModeEN.memo}], 非法,应该为字符型(In 函数映射模式(FuncMapMode))!(clsFuncMapModeBL:CheckProperty4Update)`,
    );
  }
  //检查主键是否为Null或者空!
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2025-05-26
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function FuncMapMode_GetJSONStrByObj(pobjFuncMapModeEN: clsFuncMapModeEN): string {
  pobjFuncMapModeEN.sfUpdFldSetStr = pobjFuncMapModeEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjFuncMapModeEN);
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
 * 日期:2025-05-26
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
 */
export function FuncMapMode_GetObjLstByJSONStr(strJSON: string): Array<clsFuncMapModeEN> {
  let arrFuncMapModeObjLst = new Array<clsFuncMapModeEN>();
  if (strJSON === '') {
    return arrFuncMapModeObjLst;
  }
  try {
    arrFuncMapModeObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrFuncMapModeObjLst;
  }
  return arrFuncMapModeObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-05-26
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrFuncMapModeObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function FuncMapMode_GetObjLstByJSONObjLst(
  arrFuncMapModeObjLstS: Array<clsFuncMapModeEN>,
): Array<clsFuncMapModeEN> {
  const arrFuncMapModeObjLst = new Array<clsFuncMapModeEN>();
  for (const objInFor of arrFuncMapModeObjLstS) {
    const obj1 = FuncMapMode_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrFuncMapModeObjLst.push(obj1);
  }
  return arrFuncMapModeObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-05-26
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function FuncMapMode_GetObjByJSONStr(strJSON: string): clsFuncMapModeEN {
  let pobjFuncMapModeEN = new clsFuncMapModeEN();
  if (strJSON === '') {
    return pobjFuncMapModeEN;
  }
  try {
    pobjFuncMapModeEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjFuncMapModeEN;
  }
  return pobjFuncMapModeEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function FuncMapMode_GetCombineCondition(objFuncMapModeCond: clsFuncMapModeEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objFuncMapModeCond.dicFldComparisonOp,
      clsFuncMapModeEN.con_FuncMapModeId,
    ) == true
  ) {
    const strComparisonOpFuncMapModeId: string =
      objFuncMapModeCond.dicFldComparisonOp[clsFuncMapModeEN.con_FuncMapModeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFuncMapModeEN.con_FuncMapModeId,
      objFuncMapModeCond.funcMapModeId,
      strComparisonOpFuncMapModeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFuncMapModeCond.dicFldComparisonOp,
      clsFuncMapModeEN.con_FuncMapModeName,
    ) == true
  ) {
    const strComparisonOpFuncMapModeName: string =
      objFuncMapModeCond.dicFldComparisonOp[clsFuncMapModeEN.con_FuncMapModeName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFuncMapModeEN.con_FuncMapModeName,
      objFuncMapModeCond.funcMapModeName,
      strComparisonOpFuncMapModeName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFuncMapModeCond.dicFldComparisonOp,
      clsFuncMapModeEN.con_FuncMapModeENName,
    ) == true
  ) {
    const strComparisonOpFuncMapModeENName: string =
      objFuncMapModeCond.dicFldComparisonOp[clsFuncMapModeEN.con_FuncMapModeENName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFuncMapModeEN.con_FuncMapModeENName,
      objFuncMapModeCond.funcMapModeENName,
      strComparisonOpFuncMapModeENName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFuncMapModeCond.dicFldComparisonOp,
      clsFuncMapModeEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objFuncMapModeCond.dicFldComparisonOp[clsFuncMapModeEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFuncMapModeEN.con_UpdDate,
      objFuncMapModeCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFuncMapModeCond.dicFldComparisonOp,
      clsFuncMapModeEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objFuncMapModeCond.dicFldComparisonOp[clsFuncMapModeEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFuncMapModeEN.con_UpdUser,
      objFuncMapModeCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFuncMapModeCond.dicFldComparisonOp,
      clsFuncMapModeEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objFuncMapModeCond.dicFldComparisonOp[clsFuncMapModeEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFuncMapModeEN.con_Memo,
      objFuncMapModeCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--FuncMapMode(函数映射模式),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strFuncMapModeName: 函数映射模式名(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function FuncMapMode_GetUniCondStr(objFuncMapModeEN: clsFuncMapModeEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and FuncMapModeName = '{0}'", objFuncMapModeEN.funcMapModeName);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--FuncMapMode(函数映射模式),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strFuncMapModeName: 函数映射模式名(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function FuncMapMode_GetUniCondStr4Update(objFuncMapModeEN: clsFuncMapModeEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and FuncMapModeId <> '{0}'", objFuncMapModeEN.funcMapModeId);
  strWhereCond += Format(" and FuncMapModeName = '{0}'", objFuncMapModeEN.funcMapModeName);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objFuncMapModeENS:源对象
 * @param objFuncMapModeENT:目标对象
 */
export function FuncMapMode_GetObjFromJsonObj(
  objFuncMapModeENS: clsFuncMapModeEN,
): clsFuncMapModeEN {
  const objFuncMapModeENT: clsFuncMapModeEN = new clsFuncMapModeEN();
  ObjectAssign(objFuncMapModeENT, objFuncMapModeENS);
  return objFuncMapModeENT;
}
