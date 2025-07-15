/**
 * 类名:clsValueGivingModeWApi
 * 表名:ValueGivingMode(00050462)
 * 版本:2025.05.11.1(服务器:WIN-SRV103-116)
 * 日期:2025/05/12 14:48:37
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
 * 给值方式(ValueGivingMode)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2025年05月12日.
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
import { clsValueGivingModeEN } from '@/ts/L0Entity/GeneCode/clsValueGivingModeEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';

export const valueGivingMode_Controller = 'ValueGivingModeApi';
export const valueGivingMode_ConstructorName = 'valueGivingMode';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strValueGivingModeId:关键字
 * @returns 对象
 **/
export async function ValueGivingMode_GetObjByValueGivingModeIdAsync(
  strValueGivingModeId: string,
): Promise<clsValueGivingModeEN | null> {
  const strThisFuncName = 'GetObjByValueGivingModeIdAsync';

  if (IsNullOrEmpty(strValueGivingModeId) == true) {
    const strMsg = Format(
      '参数:[strValueGivingModeId]不能为空!(In clsValueGivingModeWApi.GetObjByValueGivingModeIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strValueGivingModeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strValueGivingModeId]的长度:[{0}]不正确!(clsValueGivingModeWApi.GetObjByValueGivingModeIdAsync)',
      strValueGivingModeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByValueGivingModeId';
  const strUrl = GetWebApiUrl(valueGivingMode_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strValueGivingModeId,
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
      const objValueGivingMode = ValueGivingMode_GetObjFromJsonObj(returnObj);
      return objValueGivingMode;
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
        valueGivingMode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        valueGivingMode_ConstructorName,
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
 * @param strValueGivingModeId:所给的关键字
 * @returns 对象
 */
export async function ValueGivingMode_GetObjByValueGivingModeIdlocalStorage(
  strValueGivingModeId: string,
) {
  const strThisFuncName = 'GetObjByValueGivingModeIdlocalStorage';

  if (IsNullOrEmpty(strValueGivingModeId) == true) {
    const strMsg = Format(
      '参数:[strValueGivingModeId]不能为空!(In clsValueGivingModeWApi.GetObjByValueGivingModeIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strValueGivingModeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strValueGivingModeId]的长度:[{0}]不正确!(clsValueGivingModeWApi.GetObjByValueGivingModeIdlocalStorage)',
      strValueGivingModeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsValueGivingModeEN._CurrTabName, strValueGivingModeId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objValueGivingModeCache: clsValueGivingModeEN = JSON.parse(strTempObj);
    return objValueGivingModeCache;
  }
  try {
    const objValueGivingMode = await ValueGivingMode_GetObjByValueGivingModeIdAsync(
      strValueGivingModeId,
    );
    if (objValueGivingMode != null) {
      localStorage.setItem(strKey, JSON.stringify(objValueGivingMode));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objValueGivingMode;
    }
    return objValueGivingMode;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strValueGivingModeId,
      valueGivingMode_ConstructorName,
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
 * @param strValueGivingModeId:所给的关键字
 * @returns 对象
 */
export async function ValueGivingMode_GetObjByValueGivingModeIdCache(
  strValueGivingModeId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByValueGivingModeIdCache';

  if (IsNullOrEmpty(strValueGivingModeId) == true) {
    const strMsg = Format(
      '参数:[strValueGivingModeId]不能为空!(In clsValueGivingModeWApi.GetObjByValueGivingModeIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strValueGivingModeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strValueGivingModeId]的长度:[{0}]不正确!(clsValueGivingModeWApi.GetObjByValueGivingModeIdCache)',
      strValueGivingModeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrValueGivingModeObjLstCache = await ValueGivingMode_GetObjLstCache();
  try {
    const arrValueGivingModeSel = arrValueGivingModeObjLstCache.filter(
      (x) => x.valueGivingModeId == strValueGivingModeId,
    );
    let objValueGivingMode: clsValueGivingModeEN;
    if (arrValueGivingModeSel.length > 0) {
      objValueGivingMode = arrValueGivingModeSel[0];
      return objValueGivingMode;
    } else {
      if (bolTryAsyncOnce == true) {
        const objValueGivingModeConst = await ValueGivingMode_GetObjByValueGivingModeIdAsync(
          strValueGivingModeId,
        );
        if (objValueGivingModeConst != null) {
          ValueGivingMode_ReFreshThisCache();
          return objValueGivingModeConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strValueGivingModeId,
      valueGivingMode_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objValueGivingMode:所给的对象
 * @returns 对象
 */
export async function ValueGivingMode_UpdateObjInLstCache(
  objValueGivingMode: clsValueGivingModeEN,
) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrValueGivingModeObjLstCache = await ValueGivingMode_GetObjLstCache();
    const obj = arrValueGivingModeObjLstCache.find(
      (x) => x.valueGivingModeName == objValueGivingMode.valueGivingModeName,
    );
    if (obj != null) {
      objValueGivingMode.valueGivingModeId = obj.valueGivingModeId;
      ObjectAssign(obj, objValueGivingMode);
    } else {
      arrValueGivingModeObjLstCache.push(objValueGivingMode);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      valueGivingMode_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-05-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function ValueGivingMode_SortFunDefa(
  a: clsValueGivingModeEN,
  b: clsValueGivingModeEN,
): number {
  return a.valueGivingModeId.localeCompare(b.valueGivingModeId);
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2025-05-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function ValueGivingMode_SortFunDefa2Fld(
  a: clsValueGivingModeEN,
  b: clsValueGivingModeEN,
): number {
  if (a.valueGivingModeName == b.valueGivingModeName)
    return a.valueGivingModeENName.localeCompare(b.valueGivingModeENName);
  else return a.valueGivingModeName.localeCompare(b.valueGivingModeName);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-05-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function ValueGivingMode_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsValueGivingModeEN.con_ValueGivingModeId:
        return (a: clsValueGivingModeEN, b: clsValueGivingModeEN) => {
          return a.valueGivingModeId.localeCompare(b.valueGivingModeId);
        };
      case clsValueGivingModeEN.con_ValueGivingModeName:
        return (a: clsValueGivingModeEN, b: clsValueGivingModeEN) => {
          return a.valueGivingModeName.localeCompare(b.valueGivingModeName);
        };
      case clsValueGivingModeEN.con_ValueGivingModeENName:
        return (a: clsValueGivingModeEN, b: clsValueGivingModeEN) => {
          if (a.valueGivingModeENName == null) return -1;
          if (b.valueGivingModeENName == null) return 1;
          return a.valueGivingModeENName.localeCompare(b.valueGivingModeENName);
        };
      case clsValueGivingModeEN.con_Memo:
        return (a: clsValueGivingModeEN, b: clsValueGivingModeEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[ValueGivingMode]中不存在!(in ${valueGivingMode_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsValueGivingModeEN.con_ValueGivingModeId:
        return (a: clsValueGivingModeEN, b: clsValueGivingModeEN) => {
          return b.valueGivingModeId.localeCompare(a.valueGivingModeId);
        };
      case clsValueGivingModeEN.con_ValueGivingModeName:
        return (a: clsValueGivingModeEN, b: clsValueGivingModeEN) => {
          return b.valueGivingModeName.localeCompare(a.valueGivingModeName);
        };
      case clsValueGivingModeEN.con_ValueGivingModeENName:
        return (a: clsValueGivingModeEN, b: clsValueGivingModeEN) => {
          if (b.valueGivingModeENName == null) return -1;
          if (a.valueGivingModeENName == null) return 1;
          return b.valueGivingModeENName.localeCompare(a.valueGivingModeENName);
        };
      case clsValueGivingModeEN.con_Memo:
        return (a: clsValueGivingModeEN, b: clsValueGivingModeEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[ValueGivingMode]中不存在!(in ${valueGivingMode_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strValueGivingModeId:所给的关键字
 * @returns 对象
 */
export async function ValueGivingMode_GetNameByValueGivingModeIdCache(
  strValueGivingModeId: string,
) {
  if (IsNullOrEmpty(strValueGivingModeId) == true) {
    const strMsg = Format(
      '参数:[strValueGivingModeId]不能为空!(In clsValueGivingModeWApi.GetNameByValueGivingModeIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strValueGivingModeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strValueGivingModeId]的长度:[{0}]不正确!(clsValueGivingModeWApi.GetNameByValueGivingModeIdCache)',
      strValueGivingModeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrValueGivingModeObjLstCache = await ValueGivingMode_GetObjLstCache();
  if (arrValueGivingModeObjLstCache == null) return '';
  try {
    const arrValueGivingModeSel = arrValueGivingModeObjLstCache.filter(
      (x) => x.valueGivingModeId == strValueGivingModeId,
    );
    let objValueGivingMode: clsValueGivingModeEN;
    if (arrValueGivingModeSel.length > 0) {
      objValueGivingMode = arrValueGivingModeSel[0];
      return objValueGivingMode.valueGivingModeName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strValueGivingModeId,
    );
    console.error(strMsg);
    alert(strMsg);
  }
  return '';
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-05-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function ValueGivingMode_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsValueGivingModeEN.con_ValueGivingModeId:
      return (obj: clsValueGivingModeEN) => {
        return obj.valueGivingModeId === value;
      };
    case clsValueGivingModeEN.con_ValueGivingModeName:
      return (obj: clsValueGivingModeEN) => {
        return obj.valueGivingModeName === value;
      };
    case clsValueGivingModeEN.con_ValueGivingModeENName:
      return (obj: clsValueGivingModeEN) => {
        return obj.valueGivingModeENName === value;
      };
    case clsValueGivingModeEN.con_Memo:
      return (obj: clsValueGivingModeEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[ValueGivingMode]中不存在!(in ${valueGivingMode_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2025-05-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 * @returns 返回一个输出字段值
 */
export async function ValueGivingMode_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsValueGivingModeEN.con_ValueGivingModeId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsValueGivingModeEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsValueGivingModeEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strValueGivingModeId = strInValue;
  if (IsNullOrEmpty(strValueGivingModeId) == true) {
    return '';
  }
  const objValueGivingMode = await ValueGivingMode_GetObjByValueGivingModeIdCache(
    strValueGivingModeId,
  );
  if (objValueGivingMode == null) return '';
  if (objValueGivingMode.GetFldValue(strOutFldName) == null) return '';
  return objValueGivingMode.GetFldValue(strOutFldName).toString();
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2025-05-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 * @returns 返回一个关键字值列表
 */
export async function ValueGivingMode_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsValueGivingModeEN.con_ValueGivingModeId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrValueGivingMode = await ValueGivingMode_GetObjLstCache();
  if (arrValueGivingMode == null) return [];
  let arrValueGivingModeSel = arrValueGivingMode;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrValueGivingModeSel = arrValueGivingModeSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrValueGivingModeSel = arrValueGivingModeSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrValueGivingModeSel = arrValueGivingModeSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrValueGivingModeSel = arrValueGivingModeSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrValueGivingModeSel = arrValueGivingModeSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrValueGivingModeSel = arrValueGivingModeSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrValueGivingModeSel = arrValueGivingModeSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrValueGivingModeSel = arrValueGivingModeSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrValueGivingModeSel = arrValueGivingModeSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrValueGivingModeSel = arrValueGivingModeSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrValueGivingModeSel.length == 0) return [];
  return arrValueGivingModeSel.map((x) => x.valueGivingModeId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function ValueGivingMode_GetFldValueAsync(
  strFldName: string,
  strWhereCond: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetFldValueAsync';
  const strAction = 'GetFldValue';
  const strUrl = GetWebApiUrl(valueGivingMode_Controller, strAction);

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
        valueGivingMode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        valueGivingMode_ConstructorName,
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
export async function ValueGivingMode_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(valueGivingMode_Controller, strAction);

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
        valueGivingMode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        valueGivingMode_ConstructorName,
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
export async function ValueGivingMode_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(valueGivingMode_Controller, strAction);

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
        valueGivingMode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        valueGivingMode_ConstructorName,
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
export async function ValueGivingMode_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsValueGivingModeEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(valueGivingMode_Controller, strAction);

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
      const objValueGivingMode = ValueGivingMode_GetObjFromJsonObj(returnObj);
      return objValueGivingMode;
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
        valueGivingMode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        valueGivingMode_ConstructorName,
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
export async function ValueGivingMode_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsValueGivingModeEN._CurrTabName;
  if (IsNullOrEmpty(clsValueGivingModeEN.WhereFormat) == false) {
    strWhereCond = clsValueGivingModeEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsValueGivingModeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsValueGivingModeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrValueGivingModeExObjLstCache: Array<clsValueGivingModeEN> = CacheHelper.Get(strKey);
    const arrValueGivingModeObjLstT = ValueGivingMode_GetObjLstByJSONObjLst(
      arrValueGivingModeExObjLstCache,
    );
    return arrValueGivingModeObjLstT;
  }
  try {
    const arrValueGivingModeExObjLst = await ValueGivingMode_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrValueGivingModeExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrValueGivingModeExObjLst.length,
    );
    console.log(strInfo);
    return arrValueGivingModeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      valueGivingMode_ConstructorName,
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
export async function ValueGivingMode_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsValueGivingModeEN._CurrTabName;
  if (IsNullOrEmpty(clsValueGivingModeEN.WhereFormat) == false) {
    strWhereCond = clsValueGivingModeEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsValueGivingModeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsValueGivingModeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrValueGivingModeExObjLstCache: Array<clsValueGivingModeEN> = JSON.parse(strTempObjLst);
    const arrValueGivingModeObjLstT = ValueGivingMode_GetObjLstByJSONObjLst(
      arrValueGivingModeExObjLstCache,
    );
    return arrValueGivingModeObjLstT;
  }
  try {
    const arrValueGivingModeExObjLst = await ValueGivingMode_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrValueGivingModeExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrValueGivingModeExObjLst.length,
    );
    console.log(strInfo);
    return arrValueGivingModeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      valueGivingMode_ConstructorName,
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
export async function ValueGivingMode_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsValueGivingModeEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrValueGivingModeObjLstCache: Array<clsValueGivingModeEN> = JSON.parse(strTempObjLst);
    return arrValueGivingModeObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function ValueGivingMode_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsValueGivingModeEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(valueGivingMode_Controller, strAction);

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
          valueGivingMode_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ValueGivingMode_GetObjLstByJSONObjLst(returnObjLst);
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
        valueGivingMode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        valueGivingMode_ConstructorName,
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
export async function ValueGivingMode_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsValueGivingModeEN._CurrTabName;
  if (IsNullOrEmpty(clsValueGivingModeEN.WhereFormat) == false) {
    strWhereCond = clsValueGivingModeEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsValueGivingModeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsValueGivingModeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrValueGivingModeExObjLstCache: Array<clsValueGivingModeEN> = JSON.parse(strTempObjLst);
    const arrValueGivingModeObjLstT = ValueGivingMode_GetObjLstByJSONObjLst(
      arrValueGivingModeExObjLstCache,
    );
    return arrValueGivingModeObjLstT;
  }
  try {
    const arrValueGivingModeExObjLst = await ValueGivingMode_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrValueGivingModeExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrValueGivingModeExObjLst.length,
    );
    console.log(strInfo);
    return arrValueGivingModeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      valueGivingMode_ConstructorName,
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
export async function ValueGivingMode_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsValueGivingModeEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrValueGivingModeObjLstCache: Array<clsValueGivingModeEN> = JSON.parse(strTempObjLst);
    return arrValueGivingModeObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function ValueGivingMode_GetObjLstCache(): Promise<Array<clsValueGivingModeEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrValueGivingModeObjLstCache;
  switch (clsValueGivingModeEN.CacheModeId) {
    case '04': //sessionStorage
      arrValueGivingModeObjLstCache = await ValueGivingMode_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrValueGivingModeObjLstCache = await ValueGivingMode_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrValueGivingModeObjLstCache = await ValueGivingMode_GetObjLstClientCache();
      break;
    default:
      arrValueGivingModeObjLstCache = await ValueGivingMode_GetObjLstClientCache();
      break;
  }
  return arrValueGivingModeObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function ValueGivingMode_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrValueGivingModeObjLstCache;
  switch (clsValueGivingModeEN.CacheModeId) {
    case '04': //sessionStorage
      arrValueGivingModeObjLstCache = await ValueGivingMode_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrValueGivingModeObjLstCache = await ValueGivingMode_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrValueGivingModeObjLstCache = null;
      break;
    default:
      arrValueGivingModeObjLstCache = null;
      break;
  }
  return arrValueGivingModeObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrValueGivingModeIdCond:条件对象
 * @returns 对象列表子集
 */
export async function ValueGivingMode_GetSubObjLstCache(
  objValueGivingModeCond: ConditionCollection,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrValueGivingModeObjLstCache = await ValueGivingMode_GetObjLstCache();
  let arrValueGivingModeSel = arrValueGivingModeObjLstCache;
  if (objValueGivingModeCond.GetConditions().length == 0) return arrValueGivingModeSel;
  try {
    //console.log(sstrKeys);
    for (const objCondition of objValueGivingModeCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrValueGivingModeSel = arrValueGivingModeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrValueGivingModeSel = arrValueGivingModeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrValueGivingModeSel = arrValueGivingModeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrValueGivingModeSel = arrValueGivingModeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrValueGivingModeSel = arrValueGivingModeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrValueGivingModeSel = arrValueGivingModeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrValueGivingModeSel = arrValueGivingModeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrValueGivingModeSel = arrValueGivingModeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrValueGivingModeSel = arrValueGivingModeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrValueGivingModeSel = arrValueGivingModeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrValueGivingModeSel = arrValueGivingModeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrValueGivingModeSel = arrValueGivingModeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrValueGivingModeSel = arrValueGivingModeSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrValueGivingModeSel = arrValueGivingModeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrValueGivingModeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objValueGivingModeCond),
      valueGivingMode_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsValueGivingModeEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrValueGivingModeId:关键字列表
 * @returns 对象列表
 **/
export async function ValueGivingMode_GetObjLstByValueGivingModeIdLstAsync(
  arrValueGivingModeId: Array<string>,
): Promise<Array<clsValueGivingModeEN>> {
  const strThisFuncName = 'GetObjLstByValueGivingModeIdLstAsync';
  const strAction = 'GetObjLstByValueGivingModeIdLst';
  const strUrl = GetWebApiUrl(valueGivingMode_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrValueGivingModeId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          valueGivingMode_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ValueGivingMode_GetObjLstByJSONObjLst(returnObjLst);
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
        valueGivingMode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        valueGivingMode_ConstructorName,
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
 * @param arrstrValueGivingModeIdLst:关键字列表
 * @returns 对象列表
 */
export async function ValueGivingMode_GetObjLstByValueGivingModeIdLstCache(
  arrValueGivingModeIdLst: Array<string>,
) {
  const strThisFuncName = 'GetObjLstByValueGivingModeIdLstCache';
  try {
    const arrValueGivingModeObjLstCache = await ValueGivingMode_GetObjLstCache();
    const arrValueGivingModeSel = arrValueGivingModeObjLstCache.filter(
      (x) => arrValueGivingModeIdLst.indexOf(x.valueGivingModeId) > -1,
    );
    return arrValueGivingModeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrValueGivingModeIdLst.join(','),
      valueGivingMode_ConstructorName,
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
export async function ValueGivingMode_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsValueGivingModeEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(valueGivingMode_Controller, strAction);

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
          valueGivingMode_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ValueGivingMode_GetObjLstByJSONObjLst(returnObjLst);
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
        valueGivingMode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        valueGivingMode_ConstructorName,
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
export async function ValueGivingMode_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsValueGivingModeEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(valueGivingMode_Controller, strAction);

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
          valueGivingMode_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ValueGivingMode_GetObjLstByJSONObjLst(returnObjLst);
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
        valueGivingMode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        valueGivingMode_ConstructorName,
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
export async function ValueGivingMode_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsValueGivingModeEN>();
  const arrValueGivingModeObjLstCache = await ValueGivingMode_GetObjLstCache();
  if (arrValueGivingModeObjLstCache.length == 0) return arrValueGivingModeObjLstCache;
  let arrValueGivingModeSel = arrValueGivingModeObjLstCache;
  const objValueGivingModeCond = objPagerPara.conditionCollection;
  if (objValueGivingModeCond == null) {
    const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return new Array<clsValueGivingModeEN>();
  }
  //console.log("clsValueGivingModeWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    for (const objCondition of objValueGivingModeCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrValueGivingModeSel = arrValueGivingModeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrValueGivingModeSel = arrValueGivingModeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrValueGivingModeSel = arrValueGivingModeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrValueGivingModeSel = arrValueGivingModeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrValueGivingModeSel = arrValueGivingModeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrValueGivingModeSel = arrValueGivingModeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrValueGivingModeSel = arrValueGivingModeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrValueGivingModeSel = arrValueGivingModeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrValueGivingModeSel = arrValueGivingModeSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrValueGivingModeSel = arrValueGivingModeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrValueGivingModeSel = arrValueGivingModeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrValueGivingModeSel = arrValueGivingModeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrValueGivingModeSel = arrValueGivingModeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrValueGivingModeSel = arrValueGivingModeSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrValueGivingModeSel = arrValueGivingModeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrValueGivingModeSel.length == 0) return arrValueGivingModeSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrValueGivingModeSel = arrValueGivingModeSel.sort(
        ValueGivingMode_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrValueGivingModeSel = arrValueGivingModeSel.sort(objPagerPara.sortFun);
    }
    arrValueGivingModeSel = arrValueGivingModeSel.slice(intStart, intEnd);
    return arrValueGivingModeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      valueGivingMode_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsValueGivingModeEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function ValueGivingMode_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsValueGivingModeEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsValueGivingModeEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(valueGivingMode_Controller, strAction);

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
          valueGivingMode_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ValueGivingMode_GetObjLstByJSONObjLst(returnObjLst);
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
        valueGivingMode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        valueGivingMode_ConstructorName,
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
 * @param strValueGivingModeId:关键字
 * @returns 获取删除的结果
 **/
export async function ValueGivingMode_DelRecordAsync(
  strValueGivingModeId: string,
): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(valueGivingMode_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strValueGivingModeId);

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
        valueGivingMode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        valueGivingMode_ConstructorName,
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
 * @param arrValueGivingModeId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function ValueGivingMode_DelValueGivingModesAsync(
  arrValueGivingModeId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelValueGivingModesAsync';
  const strAction = 'DelValueGivingModes';
  const strUrl = GetWebApiUrl(valueGivingMode_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrValueGivingModeId, config);
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
        valueGivingMode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        valueGivingMode_ConstructorName,
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
export async function ValueGivingMode_DelValueGivingModesByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelValueGivingModesByCondAsync';
  const strAction = 'DelValueGivingModesByCond';
  const strUrl = GetWebApiUrl(valueGivingMode_Controller, strAction);

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
        valueGivingMode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        valueGivingMode_ConstructorName,
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
 * @param objValueGivingModeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function ValueGivingMode_AddNewRecordAsync(
  objValueGivingModeEN: clsValueGivingModeEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objValueGivingModeEN);
  const strUrl = GetWebApiUrl(valueGivingMode_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objValueGivingModeEN, config);
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
        valueGivingMode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        valueGivingMode_ConstructorName,
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
 * @param objValueGivingModeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function ValueGivingMode_AddNewRecordWithMaxIdAsync(
  objValueGivingModeEN: clsValueGivingModeEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(valueGivingMode_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objValueGivingModeEN, config);
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
        valueGivingMode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        valueGivingMode_ConstructorName,
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
export async function ValueGivingMode_AddNewObjSave(
  objValueGivingModeEN: clsValueGivingModeEN,
): Promise<AddRecordResult> {
  const strThisFuncName = 'AddNewObjSave';
  try {
    ValueGivingMode_CheckPropertyNew(objValueGivingModeEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${valueGivingMode_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    alert(strMsg);
    return { keyword: '', success: false }; //一定要有一个返回值,否则会出错!
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await ValueGivingMode_CheckUniCond4Add(objValueGivingModeEN);
    if (bolIsExistCond == false) {
      return { keyword: '', success: false };
    }
    let returnBool = false;
    const returnKeyId = await ValueGivingMode_AddNewRecordWithMaxIdAsync(objValueGivingModeEN);
    if (IsNullOrEmpty(returnKeyId) == false) {
      returnBool = true;
    }
    if (returnBool == true) {
      ValueGivingMode_ReFreshCache();
    } else {
      const strInfo = `添加[给值方式(ValueGivingMode)]记录不成功!`;
      //显示信息框
      throw strInfo;
    }
    return { keyword: returnKeyId, success: returnBool }; //一定要有一个返回值,否则会出错!
  } catch (e) {
    const strMsg = `添加记录不成功,${e}.(in ${valueGivingMode_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export async function ValueGivingMode_CheckUniCond4Add(
  objValueGivingModeEN: clsValueGivingModeEN,
): Promise<boolean> {
  const strUniquenessCondition = ValueGivingMode_GetUniCondStr(objValueGivingModeEN);
  const bolIsExistCondition = await ValueGivingMode_IsExistRecordAsync(strUniquenessCondition);
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
export async function ValueGivingMode_CheckUniCond4Update(
  objValueGivingModeEN: clsValueGivingModeEN,
): Promise<boolean> {
  const strUniquenessCondition = ValueGivingMode_GetUniCondStr4Update(objValueGivingModeEN);
  const bolIsExistCondition = await ValueGivingMode_IsExistRecordAsync(strUniquenessCondition);
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
export async function ValueGivingMode_UpdateObjSave(
  objValueGivingModeEN: clsValueGivingModeEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateObjSave';
  objValueGivingModeEN.sfUpdFldSetStr = objValueGivingModeEN.updFldString; //设置哪些字段被修改(脏字段)
  if (
    objValueGivingModeEN.valueGivingModeId == '' ||
    objValueGivingModeEN.valueGivingModeId == undefined
  ) {
    console.error('关键字不能为空!');
    throw '关键字不能为空!';
  }
  try {
    ValueGivingMode_CheckProperty4Update(objValueGivingModeEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${valueGivingMode_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await ValueGivingMode_CheckUniCond4Update(objValueGivingModeEN);
    if (bolIsExistCond == false) {
      return false;
    }
    const returnBool = await ValueGivingMode_UpdateRecordAsync(objValueGivingModeEN);
    if (returnBool == true) {
      ValueGivingMode_ReFreshCache();
    }
    return returnBool;
  } catch (e) {
    const strMsg = `修改记录不成功,${e}.(in ${valueGivingMode_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objValueGivingModeEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function ValueGivingMode_AddNewRecordWithReturnKeyAsync(
  objValueGivingModeEN: clsValueGivingModeEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(valueGivingMode_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objValueGivingModeEN, config);
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
        valueGivingMode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        valueGivingMode_ConstructorName,
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
 * @param objValueGivingModeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function ValueGivingMode_UpdateRecordAsync(
  objValueGivingModeEN: clsValueGivingModeEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objValueGivingModeEN.sfUpdFldSetStr === undefined ||
    objValueGivingModeEN.sfUpdFldSetStr === null ||
    objValueGivingModeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objValueGivingModeEN.valueGivingModeId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(valueGivingMode_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objValueGivingModeEN, config);
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
        valueGivingMode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        valueGivingMode_ConstructorName,
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
 * @param objValueGivingModeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function ValueGivingMode_EditRecordExAsync(
  objValueGivingModeEN: clsValueGivingModeEN,
): Promise<boolean> {
  const strThisFuncName = 'EditRecordExAsync';
  const strAction = 'EditRecordEx';
  if (
    objValueGivingModeEN.sfUpdFldSetStr === undefined ||
    objValueGivingModeEN.sfUpdFldSetStr === null ||
    objValueGivingModeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objValueGivingModeEN.valueGivingModeId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(valueGivingMode_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objValueGivingModeEN, config);
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
        valueGivingMode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        valueGivingMode_ConstructorName,
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
 * @param objValueGivingModeEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function ValueGivingMode_UpdateWithConditionAsync(
  objValueGivingModeEN: clsValueGivingModeEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objValueGivingModeEN.sfUpdFldSetStr === undefined ||
    objValueGivingModeEN.sfUpdFldSetStr === null ||
    objValueGivingModeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objValueGivingModeEN.valueGivingModeId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(valueGivingMode_Controller, strAction);
  objValueGivingModeEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objValueGivingModeEN, config);
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
        valueGivingMode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        valueGivingMode_ConstructorName,
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
 * @param objstrValueGivingModeIdCond:条件对象
 * @returns 对象列表子集
 */
export async function ValueGivingMode_IsExistRecordCache(
  objValueGivingModeCond: ConditionCollection,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrValueGivingModeObjLstCache = await ValueGivingMode_GetObjLstCache();
  if (arrValueGivingModeObjLstCache == null) return false;
  let arrValueGivingModeSel = arrValueGivingModeObjLstCache;
  if (objValueGivingModeCond.GetConditions().length == 0)
    return arrValueGivingModeSel.length > 0 ? true : false;
  try {
    for (const objCondition of objValueGivingModeCond.GetConditions()) {
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
            arrValueGivingModeSel = arrValueGivingModeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrValueGivingModeSel = arrValueGivingModeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrValueGivingModeSel = arrValueGivingModeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrValueGivingModeSel = arrValueGivingModeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrValueGivingModeSel = arrValueGivingModeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrValueGivingModeSel = arrValueGivingModeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrValueGivingModeSel = arrValueGivingModeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrValueGivingModeSel = arrValueGivingModeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrValueGivingModeSel = arrValueGivingModeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrValueGivingModeSel = arrValueGivingModeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrValueGivingModeSel = arrValueGivingModeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrValueGivingModeSel = arrValueGivingModeSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrValueGivingModeSel = arrValueGivingModeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrValueGivingModeSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objValueGivingModeCond),
      valueGivingMode_ConstructorName,
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
export async function ValueGivingMode_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(valueGivingMode_Controller, strAction);

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
        valueGivingMode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        valueGivingMode_ConstructorName,
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
 * @param strValueGivingModeId:所给的关键字
 * @returns 对象
 */
export async function ValueGivingMode_IsExistCache(strValueGivingModeId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrValueGivingModeObjLstCache = await ValueGivingMode_GetObjLstCache();
  if (arrValueGivingModeObjLstCache == null) return false;
  try {
    const arrValueGivingModeSel = arrValueGivingModeObjLstCache.filter(
      (x) => x.valueGivingModeId == strValueGivingModeId,
    );
    if (arrValueGivingModeSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strValueGivingModeId,
      valueGivingMode_ConstructorName,
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
 * @param strValueGivingModeId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function ValueGivingMode_IsExistAsync(strValueGivingModeId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(valueGivingMode_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strValueGivingModeId,
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
        valueGivingMode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        valueGivingMode_ConstructorName,
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
export async function ValueGivingMode_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(valueGivingMode_Controller, strAction);

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
        valueGivingMode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        valueGivingMode_ConstructorName,
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
 * @param objValueGivingModeCond:条件对象
 * @returns 对象列表记录数
 */
export async function ValueGivingMode_GetRecCountByCondCache(
  objValueGivingModeCond: ConditionCollection,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrValueGivingModeObjLstCache = await ValueGivingMode_GetObjLstCache();
  if (arrValueGivingModeObjLstCache == null) return 0;
  let arrValueGivingModeSel = arrValueGivingModeObjLstCache;
  if (objValueGivingModeCond.GetConditions().length == 0) return arrValueGivingModeSel.length;
  try {
    for (const objCondition of objValueGivingModeCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrValueGivingModeSel = arrValueGivingModeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrValueGivingModeSel = arrValueGivingModeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrValueGivingModeSel = arrValueGivingModeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrValueGivingModeSel = arrValueGivingModeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrValueGivingModeSel = arrValueGivingModeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrValueGivingModeSel = arrValueGivingModeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrValueGivingModeSel = arrValueGivingModeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrValueGivingModeSel = arrValueGivingModeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrValueGivingModeSel = arrValueGivingModeSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrValueGivingModeSel = arrValueGivingModeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrValueGivingModeSel = arrValueGivingModeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrValueGivingModeSel = arrValueGivingModeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrValueGivingModeSel = arrValueGivingModeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrValueGivingModeSel = arrValueGivingModeSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrValueGivingModeSel = arrValueGivingModeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrValueGivingModeSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objValueGivingModeCond),
      valueGivingMode_ConstructorName,
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
export async function ValueGivingMode_GetMaxStrIdAsync(): Promise<string> {
  const strThisFuncName = 'GetMaxStrIdAsync';
  const strAction = 'GetMaxStrId';
  const strUrl = GetWebApiUrl(valueGivingMode_Controller, strAction);

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
        valueGivingMode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        valueGivingMode_ConstructorName,
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
export async function ValueGivingMode_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(valueGivingMode_Controller, strAction);

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
        valueGivingMode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        valueGivingMode_ConstructorName,
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
export function ValueGivingMode_GetWebApiUrl(strController: string, strAction: string): string {
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
export function ValueGivingMode_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功!');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clsValueGivingModeEN._CurrTabName;
  switch (clsValueGivingModeEN.CacheModeId) {
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
  clsValueGivingModeEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
}

/**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export function ValueGivingMode_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsValueGivingModeEN._CurrTabName;
    switch (clsValueGivingModeEN.CacheModeId) {
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
    clsValueGivingModeEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export function ValueGivingMode_GetLastRefreshTime(): string {
  if (clsValueGivingModeEN._RefreshTimeLst.length == 0) return '';
  return clsValueGivingModeEN._RefreshTimeLst[clsValueGivingModeEN._RefreshTimeLst.length - 1];
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export async function ValueGivingMode_BindDdl_ValueGivingModeIdInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
) {
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_ValueGivingModeIdInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_ValueGivingModeIdInDivCache");
  const arrObjLstSel = await ValueGivingMode_GetObjLstCache();
  if (arrObjLstSel == null) return;
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsValueGivingModeEN.con_ValueGivingModeId,
    clsValueGivingModeEN.con_ValueGivingModeName,
    '给值方式...',
  );
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export async function ValueGivingMode_GetArrValueGivingMode() {
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_ValueGivingModeIdInDivCache");
  const arrValueGivingMode = new Array<clsValueGivingModeEN>();
  const arrObjLstSel = await ValueGivingMode_GetObjLstCache();
  if (arrObjLstSel == null) return null;
  const obj0 = new clsValueGivingModeEN();
  obj0.valueGivingModeId = '0';
  obj0.valueGivingModeName = '选给值方式...';
  arrValueGivingMode.push(obj0);
  arrObjLstSel.forEach((x) => arrValueGivingMode.push(x));
  return arrValueGivingMode;
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function ValueGivingMode_CheckPropertyNew(pobjValueGivingModeEN: clsValueGivingModeEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjValueGivingModeEN.valueGivingModeName) === true) {
    throw new Error(
      `(errid:Watl000411)字段[给值方式名]不能为空(In 给值方式)!(clsValueGivingModeBL:CheckPropertyNew0)`,
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjValueGivingModeEN.valueGivingModeId) == false &&
    GetStrLen(pobjValueGivingModeEN.valueGivingModeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000413)字段[给值方式Id(valueGivingModeId)]的长度不能超过2(In 给值方式(ValueGivingMode))!值:${pobjValueGivingModeEN.valueGivingModeId}(clsValueGivingModeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjValueGivingModeEN.valueGivingModeName) == false &&
    GetStrLen(pobjValueGivingModeEN.valueGivingModeName) > 50
  ) {
    throw new Error(
      `(errid:Watl000413)字段[给值方式名(valueGivingModeName)]的长度不能超过50(In 给值方式(ValueGivingMode))!值:${pobjValueGivingModeEN.valueGivingModeName}(clsValueGivingModeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjValueGivingModeEN.valueGivingModeENName) == false &&
    GetStrLen(pobjValueGivingModeEN.valueGivingModeENName) > 50
  ) {
    throw new Error(
      `(errid:Watl000413)字段[给值方式英文名(valueGivingModeENName)]的长度不能超过50(In 给值方式(ValueGivingMode))!值:${pobjValueGivingModeEN.valueGivingModeENName}(clsValueGivingModeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjValueGivingModeEN.memo) == false &&
    GetStrLen(pobjValueGivingModeEN.memo) > 1000
  ) {
    throw new Error(
      `(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In 给值方式(ValueGivingMode))!值:${pobjValueGivingModeEN.memo}(clsValueGivingModeBL:CheckPropertyNew)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjValueGivingModeEN.valueGivingModeId) == false &&
    undefined !== pobjValueGivingModeEN.valueGivingModeId &&
    tzDataType.isString(pobjValueGivingModeEN.valueGivingModeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[给值方式Id(valueGivingModeId)]的值:[${pobjValueGivingModeEN.valueGivingModeId}], 非法,应该为字符型(In 给值方式(ValueGivingMode))!(clsValueGivingModeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjValueGivingModeEN.valueGivingModeName) == false &&
    undefined !== pobjValueGivingModeEN.valueGivingModeName &&
    tzDataType.isString(pobjValueGivingModeEN.valueGivingModeName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[给值方式名(valueGivingModeName)]的值:[${pobjValueGivingModeEN.valueGivingModeName}], 非法,应该为字符型(In 给值方式(ValueGivingMode))!(clsValueGivingModeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjValueGivingModeEN.valueGivingModeENName) == false &&
    undefined !== pobjValueGivingModeEN.valueGivingModeENName &&
    tzDataType.isString(pobjValueGivingModeEN.valueGivingModeENName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[给值方式英文名(valueGivingModeENName)]的值:[${pobjValueGivingModeEN.valueGivingModeENName}], 非法,应该为字符型(In 给值方式(ValueGivingMode))!(clsValueGivingModeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjValueGivingModeEN.memo) == false &&
    undefined !== pobjValueGivingModeEN.memo &&
    tzDataType.isString(pobjValueGivingModeEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[说明(memo)]的值:[${pobjValueGivingModeEN.memo}], 非法,应该为字符型(In 给值方式(ValueGivingMode))!(clsValueGivingModeBL:CheckPropertyNew0)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function ValueGivingMode_CheckProperty4Update(pobjValueGivingModeEN: clsValueGivingModeEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjValueGivingModeEN.valueGivingModeId) == false &&
    GetStrLen(pobjValueGivingModeEN.valueGivingModeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000416)字段[给值方式Id(valueGivingModeId)]的长度不能超过2(In 给值方式(ValueGivingMode))!值:${pobjValueGivingModeEN.valueGivingModeId}(clsValueGivingModeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjValueGivingModeEN.valueGivingModeName) == false &&
    GetStrLen(pobjValueGivingModeEN.valueGivingModeName) > 50
  ) {
    throw new Error(
      `(errid:Watl000416)字段[给值方式名(valueGivingModeName)]的长度不能超过50(In 给值方式(ValueGivingMode))!值:${pobjValueGivingModeEN.valueGivingModeName}(clsValueGivingModeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjValueGivingModeEN.valueGivingModeENName) == false &&
    GetStrLen(pobjValueGivingModeEN.valueGivingModeENName) > 50
  ) {
    throw new Error(
      `(errid:Watl000416)字段[给值方式英文名(valueGivingModeENName)]的长度不能超过50(In 给值方式(ValueGivingMode))!值:${pobjValueGivingModeEN.valueGivingModeENName}(clsValueGivingModeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjValueGivingModeEN.memo) == false &&
    GetStrLen(pobjValueGivingModeEN.memo) > 1000
  ) {
    throw new Error(
      `(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In 给值方式(ValueGivingMode))!值:${pobjValueGivingModeEN.memo}(clsValueGivingModeBL:CheckProperty4Update)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjValueGivingModeEN.valueGivingModeId) == false &&
    undefined !== pobjValueGivingModeEN.valueGivingModeId &&
    tzDataType.isString(pobjValueGivingModeEN.valueGivingModeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[给值方式Id(valueGivingModeId)]的值:[${pobjValueGivingModeEN.valueGivingModeId}], 非法,应该为字符型(In 给值方式(ValueGivingMode))!(clsValueGivingModeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjValueGivingModeEN.valueGivingModeName) == false &&
    undefined !== pobjValueGivingModeEN.valueGivingModeName &&
    tzDataType.isString(pobjValueGivingModeEN.valueGivingModeName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[给值方式名(valueGivingModeName)]的值:[${pobjValueGivingModeEN.valueGivingModeName}], 非法,应该为字符型(In 给值方式(ValueGivingMode))!(clsValueGivingModeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjValueGivingModeEN.valueGivingModeENName) == false &&
    undefined !== pobjValueGivingModeEN.valueGivingModeENName &&
    tzDataType.isString(pobjValueGivingModeEN.valueGivingModeENName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[给值方式英文名(valueGivingModeENName)]的值:[${pobjValueGivingModeEN.valueGivingModeENName}], 非法,应该为字符型(In 给值方式(ValueGivingMode))!(clsValueGivingModeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjValueGivingModeEN.memo) == false &&
    undefined !== pobjValueGivingModeEN.memo &&
    tzDataType.isString(pobjValueGivingModeEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[说明(memo)]的值:[${pobjValueGivingModeEN.memo}], 非法,应该为字符型(In 给值方式(ValueGivingMode))!(clsValueGivingModeBL:CheckProperty4Update)`,
    );
  }
  //检查主键是否为Null或者空!
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2025-05-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function ValueGivingMode_GetJSONStrByObj(
  pobjValueGivingModeEN: clsValueGivingModeEN,
): string {
  pobjValueGivingModeEN.sfUpdFldSetStr = pobjValueGivingModeEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjValueGivingModeEN);
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
 * 日期:2025-05-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
 */
export function ValueGivingMode_GetObjLstByJSONStr(strJSON: string): Array<clsValueGivingModeEN> {
  let arrValueGivingModeObjLst = new Array<clsValueGivingModeEN>();
  if (strJSON === '') {
    return arrValueGivingModeObjLst;
  }
  try {
    arrValueGivingModeObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrValueGivingModeObjLst;
  }
  return arrValueGivingModeObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-05-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrValueGivingModeObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function ValueGivingMode_GetObjLstByJSONObjLst(
  arrValueGivingModeObjLstS: Array<clsValueGivingModeEN>,
): Array<clsValueGivingModeEN> {
  const arrValueGivingModeObjLst = new Array<clsValueGivingModeEN>();
  for (const objInFor of arrValueGivingModeObjLstS) {
    const obj1 = ValueGivingMode_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrValueGivingModeObjLst.push(obj1);
  }
  return arrValueGivingModeObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-05-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function ValueGivingMode_GetObjByJSONStr(strJSON: string): clsValueGivingModeEN {
  let pobjValueGivingModeEN = new clsValueGivingModeEN();
  if (strJSON === '') {
    return pobjValueGivingModeEN;
  }
  try {
    pobjValueGivingModeEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjValueGivingModeEN;
  }
  return pobjValueGivingModeEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function ValueGivingMode_GetCombineCondition(
  objValueGivingModeCond: clsValueGivingModeEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objValueGivingModeCond.dicFldComparisonOp,
      clsValueGivingModeEN.con_ValueGivingModeId,
    ) == true
  ) {
    const strComparisonOpValueGivingModeId: string =
      objValueGivingModeCond.dicFldComparisonOp[clsValueGivingModeEN.con_ValueGivingModeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsValueGivingModeEN.con_ValueGivingModeId,
      objValueGivingModeCond.valueGivingModeId,
      strComparisonOpValueGivingModeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objValueGivingModeCond.dicFldComparisonOp,
      clsValueGivingModeEN.con_ValueGivingModeName,
    ) == true
  ) {
    const strComparisonOpValueGivingModeName: string =
      objValueGivingModeCond.dicFldComparisonOp[clsValueGivingModeEN.con_ValueGivingModeName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsValueGivingModeEN.con_ValueGivingModeName,
      objValueGivingModeCond.valueGivingModeName,
      strComparisonOpValueGivingModeName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objValueGivingModeCond.dicFldComparisonOp,
      clsValueGivingModeEN.con_ValueGivingModeENName,
    ) == true
  ) {
    const strComparisonOpValueGivingModeENName: string =
      objValueGivingModeCond.dicFldComparisonOp[clsValueGivingModeEN.con_ValueGivingModeENName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsValueGivingModeEN.con_ValueGivingModeENName,
      objValueGivingModeCond.valueGivingModeENName,
      strComparisonOpValueGivingModeENName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objValueGivingModeCond.dicFldComparisonOp,
      clsValueGivingModeEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objValueGivingModeCond.dicFldComparisonOp[clsValueGivingModeEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsValueGivingModeEN.con_Memo,
      objValueGivingModeCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--ValueGivingMode(给值方式),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strValueGivingModeName: 给值方式名(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function ValueGivingMode_GetUniCondStr(objValueGivingModeEN: clsValueGivingModeEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(
    " and ValueGivingModeName = '{0}'",
    objValueGivingModeEN.valueGivingModeName,
  );
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--ValueGivingMode(给值方式),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strValueGivingModeName: 给值方式名(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function ValueGivingMode_GetUniCondStr4Update(
  objValueGivingModeEN: clsValueGivingModeEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and ValueGivingModeId <> '{0}'", objValueGivingModeEN.valueGivingModeId);
  strWhereCond += Format(
    " and ValueGivingModeName = '{0}'",
    objValueGivingModeEN.valueGivingModeName,
  );
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objValueGivingModeENS:源对象
 * @param objValueGivingModeENT:目标对象
 */
export function ValueGivingMode_GetObjFromJsonObj(
  objValueGivingModeENS: clsValueGivingModeEN,
): clsValueGivingModeEN {
  const objValueGivingModeENT: clsValueGivingModeEN = new clsValueGivingModeEN();
  ObjectAssign(objValueGivingModeENT, objValueGivingModeENS);
  return objValueGivingModeENT;
}
